/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildInfraPrompt,
  buildComparisonPrompt,
  buildInfraComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
} from "./prompts.ts";
import { buildTrendingPrompt, buildHighlightsPrompt, type ReportHighlights } from "./prompts-data.ts";
import { callLlm, parseLlmJson, saveFile, autoGenFooter, LLM_TOKENS_TRENDING } from "./report.ts";
import {
  buildCliReportContent,
  buildOpenclawReportContent,
  buildInfraReportContent,
  buildDigestIssueBody,
} from "./report-builders.ts";
import {
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveCommunityReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchPhData, type PhData } from "./ph.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import { fetchHfData, type HfData } from "./hf.ts";
import { fetchDevtoData, type DevtoData } from "./devto.ts";
import { fetchLobstersData, type LobstersData } from "./lobsters.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import { type Lang, MSG, ISSUE_LABELS, DIGEST_ISSUE_TITLE } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Output language. Reports used to be built in both zh and en, which doubled
// every LLM call; only English is produced now. The zh prompt/label branches
// are still in i18n.ts and prompts.ts if the other language is ever wanted.
// ---------------------------------------------------------------------------

const LANG: Lang = "en";

/** Report ids whose section is skipped entirely when the source has nothing new. */
const OPTIONAL_REPORT_IDS = [
  "ai-trending",
  "ai-web",
  "ai-hn",
  "ai-ph",
  "ai-arxiv",
  "ai-hf",
  "ai-community",
] as const;

/** Section order in the daily issue. */
const REPORT_ORDER = ["ai-cli", "ai-agents", "ai-infra", ...OPTIONAL_REPORT_IDS] as const;

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
  infraRepos: INFRA_REPOS,
} = loadConfig();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS, ...INFRA_REPOS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, ph, arxiv, hf, devto, lobsters`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
          );
          return { cfg, issues, prs, releases };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [] };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchPhData().catch((): PhData => ({ products: [], fetchSuccess: false })),
    fetchArxivData().catch((): ArxivData => ({ papers: [], fetchSuccess: false })),
    fetchHfData().catch((): HfData => ({ models: [], fetchSuccess: false })),
    fetchDevtoData().catch((): DevtoData => ({ articles: [], fetchSuccess: false })),
    fetchLobstersData().catch((): LobstersData => ({ stories: [], fetchSuccess: false })),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  fetchedInfra: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: Lang = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  infraDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary] =
    await Promise.all([
      Promise.all(
        fetchedCli.map((f) =>
          summarizeRepo(
            f,
            buildCliPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      summarizeRepo(
        fetchedOpenclaw,
        buildPeerPrompt(
          fetchedOpenclaw.cfg,
          fetchedOpenclaw.issues,
          fetchedOpenclaw.prs,
          fetchedOpenclaw.releases,
          dateStr,
          50,
          30,
          lang,
        ),
        noActivity,
        fail,
      ).then((d) => d.summary),
      summarize(
        "claude-code-skills",
        buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang),
        MSG.skillsFailed[lang],
      ),
      Promise.all(
        fetchedPeers.map((f) =>
          summarizeRepo(
            f,
            buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      Promise.all(
        fetchedInfra.map((f) =>
          summarizeRepo(
            f,
            buildInfraPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      (async () => {
        const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
        if (!hasData) {
          return MSG.trendingNoData[lang];
        }
        return summarize(
          "trending",
          buildTrendingPrompt(trendingData, dateStr, lang),
          MSG.trendingFailed[lang],
          LLM_TOKENS_TRENDING,
        );
      })(),
    ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  console.log(`[${now.toISOString()}] Starting digest | provider: ${providerName}`);

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  } = await fetchAllData(since, webState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const infraIds = new Set(INFRA_REPOS.map((r) => r.id));
  const fetchedCli = fetched.filter(
    (f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id) && !infraIds.has(f.cfg.id),
  );
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));
  const fetchedInfra = fetched.filter((f) => infraIds.has(f.cfg.id));

  // 2. Generate per-repo LLM summaries. English only — every report used to be
  //    built twice (zh + en), which doubled the LLM calls for output nobody read.
  console.log("  Generating summaries...");
  const summaries = await generateSummaries(
    fetchedCli,
    fetchedOpenclaw,
    skillsData,
    fetchedPeers,
    fetchedInfra,
    trendingData,
    dateStr,
    LANG,
  );

  // 3. Generate cross-repo comparisons in parallel
  console.log("  Calling LLM for comparative analyses...");
  const openclawDigest: RepoDigest = {
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: summaries.openclawSummary,
  };

  const [comparison, peersComparison, infraComparison] = await Promise.all([
    callLlm(buildComparisonPrompt(summaries.cliDigests, dateStr, LANG)),
    callLlm(buildPeersComparisonPrompt(openclawDigest, summaries.peerDigests, dateStr, LANG)),
    callLlm(buildInfraComparisonPrompt(summaries.infraDigests, dateStr, LANG)),
  ]);

  // 4. Build + save all reports
  const ft = autoGenFooter(LANG);

  const cliContent = buildCliReportContent(
    summaries.cliDigests,
    summaries.skillsSummary,
    comparison,
    utcStr,
    dateStr,
    ft,
    CLAUDE_SKILLS_REPO,
    LANG,
  );
  const openclawContent = buildOpenclawReportContent(
    fetchedOpenclaw,
    summaries.peerDigests,
    summaries.openclawSummary,
    peersComparison,
    utcStr,
    dateStr,
    ft,
    OPENCLAW,
    OPENCLAW_PEERS,
    LANG,
  );
  const infraContent = buildInfraReportContent(
    summaries.infraDigests,
    infraComparison,
    utcStr,
    dateStr,
    ft,
    LANG,
  );

  console.log(`  Saved ${saveFile(cliContent, dateStr, "ai-cli.md")}`);
  console.log(`  Saved ${saveFile(openclawContent, dateStr, "ai-agents.md")}`);
  console.log(`  Saved ${saveFile(infraContent, dateStr, "ai-infra.md")}`);

  // Persists the sitemap crawl cursor, so it must run before anything reads it again.
  await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, ft, LANG);

  await Promise.all([
    saveTrendingReport(trendingData, summaries.trendingSummary, utcStr, dateStr, digestRepo, ft, LANG),
    saveHnReport(hnData, utcStr, dateStr, digestRepo, ft, LANG),
    savePhReport(phData, utcStr, dateStr, digestRepo, ft, LANG),
    saveArxivReport(arxivData, utcStr, dateStr, digestRepo, ft, LANG),
    saveHfReport(hfData, utcStr, dateStr, digestRepo, ft, LANG),
    saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo, ft, LANG),
  ]);

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const reports: Record<string, string> = {
    "ai-cli": cliContent,
    "ai-agents": openclawContent,
    "ai-infra": infraContent,
  };
  for (const id of OPTIONAL_REPORT_IDS) {
    const content = readReport(`${id}.md`);
    if (content) reports[id] = content;
  }

  console.log("  Generating highlights...");
  // Retry once: the LLM occasionally emits JSON that repairJson can't fix
  // (seen 2026-07-13: "Expected ',' or ']' after array element"); a fresh
  // generation usually returns valid JSON.
  let highlightItems: ReportHighlights = {};
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      highlightItems = parseLlmJson<ReportHighlights>(
        await callLlm(buildHighlightsPrompt(reports, LANG), 2048),
      );
      break;
    } catch (err) {
      const tag = attempt < 2 ? "retrying" : "giving up";
      console.error(`  [highlights] attempt ${attempt} failed (${tag}): ${err}`);
    }
  }

  // notify.ts and feishu.ts read both language keys; with a single-language
  // build they hold the same bullets rather than a missing half.
  const highlights: Record<Lang, ReportHighlights> = { zh: highlightItems, en: highlightItems };
  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Open one short issue: the highlights, linking to the full reports.
  //    Previously this posted each full report verbatim in its own issue —
  //    six issues a day, the largest over 100 KB.
  if (digestRepo) {
    const presentIds = REPORT_ORDER.filter((id) => id in reports);
    const url = await createGitHubIssue(
      DIGEST_ISSUE_TITLE(dateStr),
      buildDigestIssueBody(dateStr, presentIds, highlightItems, digestRepo, LANG),
      ISSUE_LABELS.cli[LANG],
    );
    console.log(`  Created digest issue: ${url}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

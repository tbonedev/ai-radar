/**
 * Report content builders — extracted from index.ts for testability.
 */

import type { RepoConfig, RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";
import type { ReportHighlights } from "./prompts-data.ts";
import { type Lang, CLI_REPORT, OPENCLAW_REPORT, INFRA_REPORT, NOTIFY_LABELS } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Short daily digest
// ---------------------------------------------------------------------------

/**
 * The body of the one issue opened per day: a few highlight bullets per
 * section, each heading linking to the full report committed under
 * digests/<date>/. The full reports used to be posted verbatim — three issues
 * a day at ~100 KB each, which nobody reads.
 *
 * `/blob/HEAD/` resolves to whatever the default branch is, so the links keep
 * working if the branch is ever renamed.
 */
export function buildDigestIssueBody(
  dateStr: string,
  reportIds: readonly string[],
  highlights: ReportHighlights,
  digestRepo: string,
  lang: Lang = "en",
): string {
  const sections = reportIds.map((id) => {
    const label = NOTIFY_LABELS[id]?.[lang] ?? id;
    const heading = digestRepo
      ? `### [${label}](https://github.com/${digestRepo}/blob/HEAD/digests/${dateStr}/${id}.md)`
      : `### ${label}`;
    const items = highlights[id];
    const body = items?.length ? items.map((h) => `- ${h}`).join("\n") : "_Nothing notable._";
    return `${heading}\n${body}`;
  });

  return `> Full reports live in [digests/${dateStr}/](https://github.com/${digestRepo}/tree/HEAD/digests/${dateStr}).\n\n${sections.join("\n\n")}\n`;
}

// ---------------------------------------------------------------------------
// CLI Report
// ---------------------------------------------------------------------------

export function buildCliReportContent(
  cliDigests: RepoDigest[],
  skillsSummary: string,
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  skillsRepo: string,
  lang: Lang = "zh",
): string {
  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${skillsRepo})`;

  const title = `# ${CLI_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta = CLI_REPORT.meta(utcStr, cliDigests.length, lang);

  const skillsSection =
    `## ${CLI_REPORT.skillsHeading[lang]}\n\n` +
    `> ${CLI_REPORT.skillsSource[lang]}: [anthropics/skills](https://github.com/${skillsRepo})\n\n` +
    `${skillsSummary}\n\n---\n\n`;

  const toolSections = cliDigests
    .map((d) => {
      const skills = d.config.id === "claude-code" ? skillsSection : "";
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        skills + d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  return (
    title +
    meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## ${CLI_REPORT.comparison[lang]}\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## ${CLI_REPORT.detail[lang]}\n\n` +
    toolSections +
    footer
  );
}

// ---------------------------------------------------------------------------
// Infra Report
// ---------------------------------------------------------------------------

export function buildInfraReportContent(
  infraDigests: RepoDigest[],
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: Lang = "zh",
): string {
  const repoLinks = infraDigests
    .map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`)
    .join("\n");

  const projectSections = infraDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  return (
    `# ${INFRA_REPORT.title[lang]} ${dateStr}\n\n` +
    INFRA_REPORT.meta(utcStr, infraDigests.length, lang) +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## ${INFRA_REPORT.comparison[lang]}\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## ${INFRA_REPORT.detail[lang]}\n\n` +
    projectSections +
    footer
  );
}

// ---------------------------------------------------------------------------
// OpenClaw Report
// ---------------------------------------------------------------------------

export function buildOpenclawReportContent(
  fetchedOpenclaw: RepoFetch,
  peerDigests: RepoDigest[],
  openclawSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  openclaw: RepoConfig,
  openclawPeers: RepoConfig[],
  lang: Lang = "zh",
): string {
  const { issues, prs } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [${openclaw.name}](https://github.com/${openclaw.repo})\n` +
    openclawPeers.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  const title = `# ${OPENCLAW_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta =
    lang === "en"
      ? `> Issues: ${issues.length} | PRs: ${prs.length} | Projects covered: ${1 + openclawPeers.length} | Generated: ${utcStr} UTC\n\n`
      : `> Issues: ${issues.length} | PRs: ${prs.length} | 覆盖项目: ${1 + openclawPeers.length} 个 | 生成时间: ${utcStr} UTC\n\n`;

  return (
    title +
    meta +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## ${OPENCLAW_REPORT.deepDive[lang]}\n\n` +
    openclawSummary +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.comparison[lang]}\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.peers[lang]}\n\n` +
    peerDetailSections +
    footer
  );
}

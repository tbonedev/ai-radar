# MCP Ecosystem Digest 2026-09-24

> Issues: 6 | PRs: 9 | Projects covered: 7 | Generated: 2026-09-24 12:30 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-09-24)

## 1. Today's Overview
Activity was moderate: 6 issues and 9 PRs touched in the last 24h, with **zero new releases**. The day's traffic skews toward maintenance and security hardening rather than new features — a security researcher flagged an SSRF gap in `mcp-server-fetch`, a stale docs recommendation (deprecated MCP Roots) was reported and fixed same-day, and four independent PRs converged on the same session-leak bug in the Everything server, suggesting healthy but somewhat uncoordinated community contribution. Overall project health looks stable: no regressions from a release (none shipped), and the maintainers/community are actively triaging fetch-tool reliability and security issues.

## 2. Releases
No new releases in this period. (Omitted per no-activity.)

## 3. Project Progress
- **Subscription-leak cleanup (issue [#4710](https://github.com/modelcontextprotocol/servers/issues/4710))** — Four separate PRs targeting the same bug (disconnected sessions never removed from the `subscriptions` map in the Everything server, causing a slow memory/state leak) were closed today: [#4715](https://github.com/modelcontextprotocol/servers/pull/4715), [#4716](https://github.com/modelcontextprotocol/servers/pull/4716), [#4718](https://github.com/modelcontextprotocol/servers/pull/4718), [#4798](https://github.com/modelcontextprotocol/servers/pull/4798). Data doesn't specify which (if any) merged vs. was closed as duplicate — worth a maintainer confirmation of which fix landed.
- **Sampling-with-tools ([#3040](https://github.com/modelcontextprotocol/servers/issues/3040))** closed — likely superseded/tracked in the core `modelcontextprotocol/modelcontextprotocol` spec repo (SEP-1577) rather than implemented here.
- **Docs fix shipped same-day**: [#4845](https://github.com/modelcontextprotocol/servers/pull/4845) addresses the deprecated-Roots documentation issue ([#4844](https://github.com/modelcontextprotocol/servers/issues/4844)) filed just hours earlier — a fast turnaround.

## 4. Community Hot Topics
- **[#3878](https://github.com/modelcontextprotocol/servers/issues/3878) — "`mcp-server-fetch` drops SSR content from streaming/progressive rendering sites"** (11 comments, open since April 2026, still active today). Highest-engagement item in the window — reflects a real, recurring pain point as more of the modern web ships content via streaming SSR that the fetch tool can't fully capture.
- **[#632](https://github.com/modelcontextprotocol/servers/issues/632) — "Configurable write permissions for filesystem server"** (2 comments, 1 👍, open since Feb 2025). Long-lived but low-volume request; underlying need is running the filesystem server safely in read-only/sandboxed setups.
- **The four duplicate subscription-cleanup PRs** are themselves a signal: this was evidently a well-understood, easy-to-reproduce bug that attracted independent fixes from four different contributors — a sign of an engaged but loosely coordinated contributor base.

## 5. Bugs & Stability (ranked by severity)
1. **[#4838](https://github.com/modelcontextprotocol/servers/issues/4838) — SSRF / missing private-IP & metadata-endpoint guard in `mcp-server-fetch`** (security). Reported via static code review; the fetch server follows redirects with no private-IP/link-local/cloud-metadata checks — a genuine SSRF risk if the server is exposed to untrusted URLs. No fix PR yet referenced. **Highest severity — needs prompt maintainer attention.**
2. **[#3878](https://github.com/modelcontextprotocol/servers/issues/3878) — Streaming SSR content silently dropped**. Functional correctness bug affecting content completeness, not security; still unresolved after 11 comments and ~5 months open, no fix PR linked yet.
3. **[#4710](https://github.com/modelcontextprotocol/servers/issues/4710) — Subscription map leak on session disconnect** (Everything server). Lower severity (resource leak, not security), but well-covered — 4 candidate fix PRs closed today.

## 6. Feature Requests & Roadmap Signals
- **[#632](https://github.com/modelcontextprotocol/servers/issues/632)** Read-only/configurable write permissions for the filesystem server — persistent, security-adjacent ask; plausible near-term candidate given growing scrutiny of filesystem/fetch server safety.
- **[#4456](https://github.com/modelcontextprotocol/servers/pull/4456)** Retry/backoff for transient 429/5xx/network errors in fetch — reliability improvement, open since July 2026, resolves [#4449](https://github.com/modelcontextprotocol/servers/issues/4449); a reasonable near-term merge candidate given today's renewed focus on fetch-server robustness.
- **[#4297](https://github.com/modelcontextprotocol/servers/pull/4297)** Prompts support (`git-commit-message`, `git-summarize-changes`) for the git reference server — demonstrates under-used protocol surface (Prompts) per the contributing guide; open since June 2026.
- **[#4842](https://github.com/modelcontextprotocol/servers/issues/4842)** "Zero-Scan Project Memory MCP Server" proposal — new server catalog addition. Note: PR [#4794](https://github.com/modelcontextprotocol/servers/pull/4794)'s own template states *"We are no longer accepting PRs to add servers to the README"*, redirecting to the separate MCP Server Registry — so this proposal will likely be redirected rather than merged into this repo.

## 7. User Feedback Summary
- **Security-conscious users are now auditing the fetch server closely** — both the SSRF gap (#4838) and the SSR-content-drop bug (#3878) point to fetch being used in more production/adversarial contexts than originally scoped for.
- **Filesystem-server users want tighter, more granular access control** — a nearly year-and-a-half-old ask (#632) for read-only mode remains unresolved, indicating users currently work around it by pre-copying directories, a clunky manual mitigation.
- **Docs currency is a minor but real friction point** — the Roots-deprecation doc issue (#4844) shows users still following stale guidance; resolved quickly (#4845) once flagged.
- **No end-to-end negative sentiment observed today** — reports are constructive (bug reports + accompanying draft fixes), and doc/security issues got same-day or near-immediate PR responses.

## 8. Backlog Watch
- **[#632](https://github.com/modelcontextprotocol/servers/issues/632)** — Open since 2025-02-17 (over 19 months), only 2 comments/1 reaction despite being a recurring theme in filesystem-server security discussions. Needs maintainer triage or a decision (accept/close/redirect).
- **[#4456](https://github.com/modelcontextprotocol/servers/pull/4456)** — Open since 2026-07-02 (~3 months), reliability fix for fetch still unmerged despite today's renewed fetch-security scrutiny.
- **[#4297](https://github.com/modelcontextprotocol/servers/pull/4297)** — Open since 2026-06-10 (~3.5 months), no merge decision on Prompts support for the git server.
- **[#4794](https://github.com/modelcontextprotocol/servers/pull/4794)** — Vague title ("commit"), open since 2026-09-11; given the repo's stated policy against README server-addition PRs, this likely needs to be closed/redirected rather than left open.
- **[#4838](https://github.com/modelcontextprotocol/servers/issues/4838)** — Brand-new but security-sensitive (SSRF); worth flagging for fast-track review rather than letting it age in the backlog.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Digest — MCP & Claude Extension Landscape
**2026-09-24**

## 1. Ecosystem Overview

The personal AI assistant / agent ecosystem tracked today spans two distinct layers: **protocol infrastructure** (MCP Servers, MCP Registry, Docker MCP Registry) and **curation/discovery** (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills, Claude Plugins). Infrastructure repos show low-to-moderate code churn but high-stakes signal — a live SSRF vulnerability in the reference `mcp-server-fetch` implementation is the day's most consequential finding across all seven projects. Curation repos are experiencing a submission surge (175+ combined PRs across Awesome MCP Servers and Docker MCP Registry alone), driven by three converging trends: agent-payment/identity infrastructure, AI observability/eval tooling, and agent memory persistence. No project shipped a release today, and review/merge throughput is visibly lagging submission volume in every curated-list repo. Overall, the ecosystem reads as pre-consolidation: rapid horizontal growth in server/plugin listings, with trust, identity, and publish-pipeline mechanics emerging as the shared unsolved problem.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Health Score* |
|---|---|---|---|---|---|
| **MCP Servers** (core) | 6 | 9 | 4 closed | 0 | 7/10 — active triage, but unpatched security issue |
| **MCP Registry** (official) | 1 | 2 | 0 | 0 | 6/10 — stable but low engagement on identity gap |
| **Awesome MCP Servers** | 0 | 125 | 9 | 0 | 5/10 — high volume, thin review bandwidth |
| **Docker MCP Registry** | 0 | 50 | 0 | 0 | 5/10 — submission-heavy, zero throughput today |
| **Claude Plugins** (official) | 9 (8 open) | 7 | 6 | 0 | 6/10 — active but recurring pipeline + stability bugs |
| **Awesome Claude Code** | 12 (10 open) | 0 | 2 | 0 | 6/10 — strong intake, unclear merge path |
| **Awesome Agent Skills** | 0 | 2 | 0 | 0 | 7/10 — quiet, no friction signals |

*Health score is a qualitative 1–10 composite of activity level, unresolved severity, and responsiveness — not a project ranking.

## 3. MCP Servers's Position

**Advantages vs. peers:** As the reference implementation repo (vs. the three list/registry projects), MCP Servers is the only project generating genuine *engineering* signal today — a security vulnerability report, a same-day docs fix, and convergent community bug-fixing (four independent PRs for one leak). This is a maturity marker other MCP projects don't yet show.

**Technical approach differences:** MCP Registry and Docker MCP Registry are indexing/distribution layers with no code logic of their own to break — their "bugs" are process gaps (namespace ownership, review throughput), not runtime defects. MCP Servers is the only repo in the MCP cluster carrying actual attack-surface risk (SSRF, content-fidelity bugs).

**Community size comparison:** MCP Servers' engagement (6 issues, 9 PRs, sustained multi-month discussion on #3878) is modest in raw volume but higher in depth-per-item than Awesome MCP Servers or Docker MCP Registry, where every sampled item shows 0 comments/reactions — those repos have breadth (125 and 50 PRs respectively) without depth.

## 4. Shared Technical Focus Areas

- **Identity & ownership continuity** — MCP Registry (#1666, org-transfer namespace lock) and Awesome MCP Servers (#15029/#15018 competing agent-identity/attestation servers) both surface unresolved *identity* handling, one at the registry-infrastructure level, one at the product-category level.
- **Security hardening of network-facing tools** — MCP Servers' SSRF gap (#4838) and Docker MCP Registry's growth in "remote/hosted OAuth gateway" submissions (#5219, #5224) both point to fetch/remote-execution surfaces needing tighter scrutiny as MCP tooling moves from local to internet-facing deployments.
- **Agent memory & context persistence** — Docker MCP Registry (#4959 total-agent-memory), Awesome Claude Code (#2930 pentimento, #2933 Personal Understanding) — three independent projects saw memory-persistence submissions in the same window.
- **Submission/publish pipeline trust** — Claude Plugins (#6272, #6290 — approved plugins vanishing pre-publish) and Awesome Claude Code (8 `validation-passed` issues with no visible merge path) both show a gap between automated approval and actual publication.
- **Agent sandboxing/safety** — Awesome Claude Code (#2853 Brig, #2931 Gryph) and Awesome Agent Skills (#1097 bug-bounty skill explicitly scoped to "authorized testing only") reflect rising concern over unsupervised agent execution.

## 5. Differentiation Analysis

| Dimension | MCP Servers/Registry/Docker MCP Registry | Claude Plugins / Awesome Claude Code / Awesome Agent Skills |
|---|---|---|
| **Feature focus** | Protocol-level tool servers (fetch, filesystem, memory) | Higher-level workflow plugins, curated skill/tool discovery |
| **Target users** | MCP client/server implementers, infra teams | Claude Code end-users, plugin authors |
| **Architecture** | Runnable services with real attack surface | Mostly static manifests/lists — risk is curation quality, not runtime |
| **Growth mechanism** | Slower, spec/quality-gated (fewer but deeper PRs) | Fast, submission-driven (bot-validated, high volume) |

Awesome MCP Servers and Docker MCP Registry are functionally similar (both server-listing catalogs) but differ in vetting rigor: Awesome MCP Servers enforces a `glama.ai` verification gate (`missing-glama` label pattern), while Docker MCP Registry's gate is a maintained Docker image pipeline — a stronger but slower-moving quality bar, reflected in its zero-merge day despite 50 open PRs.

## 6. Community Momentum & Maturity

- **Rapidly iterating (high submission volume, review lag building):** Awesome MCP Servers (125 PRs), Docker MCP Registry (50 PRs, 0 merges today) — both show inbound growth outpacing maintainer throughput; watch for backlog pressure.
- **Actively triaging, moderate pace:** MCP Servers (converging community fixes, same-day docs turnaround), Claude Plugins (same-day Telegram feature ship, but four-issue `security-guidance` bug cluster unresolved).
- **Stabilizing / low-volume but not stale:** MCP Registry (single well-scoped issue), Awesome Agent Skills (two quality submissions, no friction).
- **Intake-heavy, unclear downstream path:** Awesome Claude Code — 12 issues, zero PRs; the actual README-merge mechanism for approved submissions isn't visible in this data, worth a maintainer confirmation.

## 7. Trend Signals

1. **Remote/hosted MCP servers are overtaking local Docker images as the primary submission type** (Docker MCP Registry #5219, #5224, #5225) — developers should expect OAuth/gateway-style integration patterns to become the default rather than the exception.
2. **Agent-payment and agent-identity infrastructure is forming a distinct MCP subcategory** (Awesome MCP Servers: x402/USDC metering, sovereign settlement, IPv6/DNSSEC identity) — early but consistent enough (multiple independent submissions same day) to warrant tracking for anyone building agent-to-agent commerce tooling.
3. **Security posture of widely-deployed reference tools is under active scrutiny** — the `mcp-server-fetch` SSRF finding is a concrete reminder that fetch/browsing MCP servers deployed without private-IP/metadata-endpoint guards carry real production risk; developers reusing this reference server should patch defensively rather than wait for upstream.
4. **Publish-pipeline trust is an emerging cross-cutting UX gap**, not a one-off bug — three separate ecosystems (Claude Plugins, Awesome Claude Code, MCP Registry's namespace issue) show approval/validation states that don't reliably translate into publication, a friction point that likely deters repeat contributors.
5. **Memory persistence and observability/eval tooling are the two clearest "next layer" investment areas** signaled by simultaneous, independent community submissions across otherwise unrelated repos — a leading indicator of where the agent tooling stack is thickening next.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) — Daily Digest
**2026-09-24** | github.com/modelcontextprotocol/registry

## 1. Today's Overview

Activity in the last 24 hours was minimal: one new issue and two dependency-bump PRs from Dependabot, with no releases and no merged or closed items. This is a low-activity day by volume, but the single open issue (a namespace migration request following a GitHub organization transfer) touches on registry identity/ownership handling, a sensitive area for a package registry. Overall project health signals remain stable — no regressions or bug reports surfaced today, and the only "churn" is routine automated dependency maintenance. There is no evidence of active maintainer engagement on the human-filed issue within the 24h window beyond one comment.

## 2. Releases

None — no new releases in this period.

## 3. Project Progress

No PRs were merged or closed today. The two open PRs are both automated dependency bumps:

- [#1668](https://github.com/modelcontextprotocol/registry/pull/1668) — bump `github.com/pulumi/pulumi/sdk/v3` 3.262.0 → 3.263.0 (deploy-go-dependencies group, Dependabot)
- [#1667](https://github.com/modelcontextprotocol/registry/pull/1667) — bump `cloud.google.com/go/kms` 1.33.0 → 1.34.0 (go-dependencies group, Dependabot)

Both are routine, low-risk maintenance updates to the Go deployment tooling; neither represents user-facing feature progress.

## 4. Community Hot Topics

The only substantive community item today is:

- [#1666](https://github.com/modelcontextprotocol/registry/issues/1666) — "Migrate AssetFare registry namespace after GitHub organization transfer" (1 comment, opened by odaiin)

Underlying need: when a publisher moves their MCP server's source repo from a personal GitHub account to an org, the registry's existing namespace/remote-URL reservation blocks them from re-publishing under the new organization identity. This surfaces a broader gap in the registry's identity model — it doesn't yet gracefully handle repo ownership transfers, which will likely become a recurring pain point as more MCP server authors move from personal accounts to org-backed projects.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported today. No fix PRs are relevant since there are no open bug reports in this window.

## 6. Feature Requests & Roadmap Signals

- **Namespace/ownership migration tooling** (from [#1666](https://github.com/modelcontextprotocol/registry/issues/1666)): the implicit ask is a supported path to transfer or re-associate a registry entry's remote-URL/namespace claim when the underlying GitHub repo moves organizations. Given this is an identity-integrity issue (not just a UX nicety), it's a reasonable candidate for near-term maintainer attention, though today's data doesn't show a linked PR or roadmap commitment yet.

## 7. User Feedback Summary

Limited signal today — only one organic user report. The AssetFare case illustrates a real friction point: publishers who reorganize their GitHub presence (personal → org) can get locked out of updating their own registry entry, which is a trust/usability concern for maintainers relying on the registry to reflect their current canonical source. No positive or negative sentiment beyond this single report is available in today's window.

## 8. Backlog Watch

- [#1666](https://github.com/modelcontextprotocol/registry/issues/1666) is new (opened 2026-09-23) and not yet a backlog concern, but merits monitoring — identity/namespace conflicts can block publishers indefinitely if not triaged promptly. Worth flagging for maintainer follow-up if it remains unaddressed beyond a few days, since it may indicate a systemic gap (org-transfer handling) rather than an isolated case.

No long-stale issues or PRs are visible in today's data window (limited to items updated in the last 24h).

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest
**2026-09-24**

## 1. Today's Overview

The repository saw no issue activity in the last 24 hours but a very high volume of pull request traffic: **125 PRs updated**, with 116 still open and 9 merged or closed. As is typical for this curated-list repository, essentially all activity is submissions adding new MCP servers to the README rather than code changes — no releases, since this is a static list, not a versioned package. Engagement per PR is uniformly minimal (0 comments, 0 reactions logged on every sampled item), suggesting most additions are processed via automated linting/labeling rather than discussion. Several PRs carry `duplicate` or `missing-glama` labels, indicating the maintainers (or a bot) are actively triaging submission quality. Overall assessment: **high submission volume, low community discussion, healthy automated-gatekeeping signal** — the list continues to grow rapidly but review bandwidth for genuine engagement appears thin.

## 2. Releases

None. This repo is a curated list (README), not a versioned software package — no release activity applies.

## 3. Project Progress

9 PRs closed/merged today, all "Add X to category" submissions being folded into the list (or rejected):

- [#15021 — Add paid-mcp-metering and paid-mcp-server to Finance and Fintech](https://github.com/punkpeye/awesome-mcp-servers/pull/15021) — closed, flagged `duplicate`
- [#14964 — Add gregordadera/AICB — Roslyn C#/.NET context server](https://github.com/punkpeye/awesome-mcp-servers/pull/14964) — closed

No PR bodies indicate a rejection reason beyond automated `duplicate` labeling; the rest of the 9 closures are not detailed in the sampled top-20 (which is comment-count-ranked, and all comment counts are `undefined`/0). Net effect: the list continues incremental growth across Finance & Fintech, Developer Tools, Legal, Identity, and Communication categories.

## 4. Community Hot Topics

No PR or issue in today's window shows meaningful comment/reaction activity — every sampled item reports 0 👍 and an undefined comment count. This is unusual for a repo with 125 PRs in motion and suggests the "top 20 by comment count" ranking is not surfacing genuine discussion, either because:
- Submissions are reviewed/merged by automation (glama.ai bot validation, given the `has-glama`/`missing-glama` labels) with minimal human back-and-forth, or
- Discussion happens off-platform before PRs are opened.

The closest thing to a recurring "hot" theme is category clustering: **Finance & Fintech** (#12821 LiveVariant, #14949 socseal-mcp, #15022 Tradewink, #14715 hkex-filing-scraper, #12771 Financial Evidence) and **Identity** (#15029 Whisper, #15018 whisper-sec/whisper-cli — two competing submissions for agent-identity/IPv6-attestation servers) each received multiple independent submissions today, hinting at a genuine surge of interest in agent-payment-rail and agent-identity MCP servers.

## 5. Bugs & Stability

Not applicable in the conventional sense — this repo has no runnable software to crash or regress. The closest analog is **listing-quality issues**, flagged via automated labels:
- [#14949 — socseal-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/14949) — labeled `duplicate`, `missing-glama`
- [#15021 — paid-mcp-metering / paid-mcp-server](https://github.com/punkpeye/awesome-mcp-servers/pull/15021) — labeled `duplicate`, `missing-glama` (closed today)
- [#14964 — AICB Roslyn server](https://github.com/punkpeye/awesome-mcp-servers/pull/14964) — labeled `missing-glama` (closed today)

`missing-glama` appears repeatedly across open PRs (#15029, #15028, #15025, #12821, #14949, #14715 excluded — has-glama, #15020, #14438, #15018) — this is the closest thing to a systemic "defect" pattern: a notable share of submitters are not completing the glama.ai registry verification step required for full listing.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today (0 issues total). Roadmap signal instead comes from submission *patterns*:
- **Agent-payment infrastructure** is emerging as a cluster: x402/USDC metering (#15021), sovereign settlement rails (#14949), fintech data servers (#15022, #14715, #12771) — likely to prompt a dedicated subsection or stricter fintech-server vetting criteria given multiple `duplicate` flags already appearing.
- **Agent identity/attestation servers** (#15029, #15018) — two near-simultaneous submissions for IPv6/DNSSEC-based agent identity suggest this could become a distinct subcategory rather than staying under generic "Identity."
- Likely near-term maintainer action: tightening the `missing-glama` gate, given how many open PRs currently lack it.

## 7. User Feedback Summary

No direct user feedback/satisfaction signals available today — zero comments and zero reactions across all sampled issues and PRs means there's no qualitative sentiment data to summarize. The submission descriptions themselves function as marketing copy for each server rather than feedback. One indirect signal: the high `duplicate` rate among today's closures suggests submitter friction — contributors aren't always checking the existing list before opening a PR, which is a minor process pain point for maintainers.

## 8. Backlog Watch

Several PRs remain open well past their creation date with no apparent progress, warranting maintainer attention:
- [#12821 — Add LiveVariant (Marketing)](https://github.com/punkpeye/awesome-mcp-servers/pull/12821) — open since 2026-08-25 (30 days), still unmerged despite an update today
- [#12771 — Add Financial Evidence MCP server](https://github.com/punkpeye/awesome-mcp-servers/pull/12771) — open since 2026-08-24 (31 days)
- [#12425 — Add Fillo MCP server](https://github.com/punkpeye/awesome-mcp-servers/pull/12425) — open since 2026-08-18 (37 days), the oldest in today's sample
- [#14484 — Add SearchPipe MCP server](https://github.com/punkpeye/awesome-mcp-servers/pull/14484) — open since 2026-09-16 (8 days)

These four represent the longest-aged open PRs in today's activity window and, notably, none carry a `duplicate` label — they appear to be legitimate submissions simply waiting in the review queue, making them good candidates for maintainer triage.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date:** 2026-09-24

## 1. Today's Overview

Activity today is dominated entirely by inbound contributions — 50 pull requests were touched in the last 24 hours, with zero issues opened or updated and zero new releases. None of the 50 PRs were merged or closed in the window, indicating a submission-heavy, review-light day: contributors are adding new PRs faster than maintainers are processing them. The mix splits between brand-new MCP server submissions (the majority) and automated `mcp-registry-bot` commit-pin updates for already-listed servers. No comment or reaction counts were available for any item, so there's no engagement signal to rank "hot" discussions by — activity today should be read as submission volume, not community debate. Overall, the registry shows steady inbound growth but a visible review backlog forming on the maintainer side.

## 2. Releases

None. No new releases in this window.

## 3. Project Progress

No PRs were merged or closed today (0 of 50). All 50 tracked PRs remain open, so no features, fixes, or new server listings actually landed in the registry during this period. The day's activity represents submissions and bot-driven housekeeping (commit-pin refreshes) still awaiting review, not shipped progress.

## 4. Community Hot Topics

Comment and reaction data was not available (`undefined`/0 across all items), so there is no reliable engagement ranking for today. Based on submission recency and description depth, the most notable open items are new-server proposals rather than discussion threads:

- **[#5225 – Add SassyMCP](https://github.com/docker/mcp-registry/pull/5225)** — bundles file, shell, GitHub, memory, and web tools into one container; signals demand for consolidated "all-in-one" agent toolkits rather than single-purpose servers.
- **[#5224 – Add Noveum AI reliability remote MCP server](https://github.com/docker/mcp-registry/pull/5224)** — hosted server for inspecting agent traces, evaluation datasets, and voice-agent testing, reflecting growing interest in AI observability/eval tooling as MCP servers.
- **[#5219 – Add API.market remote OAuth gateway](https://github.com/docker/mcp-registry/pull/5219)** — a provider-operated remote gateway pattern, part of a broader trend (see also #5224, #5222, #4774) of vendors submitting hosted/remote servers rather than local Docker images.
- **[#960 – Update LinkedIn MCP server entry](https://github.com/stickerdaniel, docker/mcp-registry PR #960)** — an existing, actively-maintained server migrating to Docker's managed image pipeline and modernizing auth (dropping cookie/user-agent config for persistent browser sessions), open since 2026-01-18 and still updated today — worth maintainer attention given its longevity.

Underlying need: contributors are increasingly submitting **hosted/remote** MCP servers (OAuth gateways, SaaS APIs) rather than locally built Docker images, suggesting the registry's remote-server intake path is becoming a primary growth channel.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were reported today — the issue tracker shows zero activity in the last 24 hours, and no PR descriptions reference fixes to broken behavior. No stability concerns to flag for this window.

## 6. Feature Requests & Roadmap Signals

No formal feature-request issues were filed today, but the pattern of new-server PRs hints at where the ecosystem is expanding:
- **AI reliability/evals tooling** (#5224 Noveum) — likely reflects rising demand for agent observability integrations.
- **Financial/DeFi infrastructure** (#5133 AssetFare — cross-chain USDC bridging) — continued interest in crypto/Web3-adjacent MCP tooling.
- **Regulatory/compliance data servers** (#5223 Russian counterparty due-diligence, #5222 GovGazette federal contracting) — a recurring theme of "due diligence / public records" servers.
- **Agent memory persistence** (#4959 total-agent-memory — local SQLite-backed memory for coding agents) — aligns with broader industry focus on long-term agent memory.

None of these are confirmed roadmap items; they represent community-submitted additions likely to land in upcoming registry syncs once reviewed, rather than planned Docker-led releases.

## 7. User Feedback Summary

No direct user feedback (issue comments, satisfaction signals) is available today — the issue tracker is empty and PR comment counts are unreported. Indirectly, PR submissions suggest contributors value: (1) consolidated multi-tool servers over fragmented single-purpose ones (#5225), (2) no-auth/public-data endpoints that lower adoption friction (#5221 FoxNose, #4953 Scoutee — both explicitly "no account/API key required"), and (3) migration toward Docker-managed image pipelines for reduced maintenance overhead (#960).

## 8. Backlog Watch

Several PRs have sat open for weeks to months with no resolution today, warranting maintainer attention:

- **[#960 – Update LinkedIn MCP server entry](https://github.com/docker/mcp-registry/pull/960)** — open since 2026-01-18 (~8 months), still receiving updates; an existing listed server awaiting a pipeline migration merge.
- **[#621 – chore: update pin for awslabs-nova-canvas](https://github.com/docker/mcp-registry/pull/621)** — automated pin-update PR open since 2025-11-07 (~10+ months), unmerged.
- **[#799 – chore: update pin for vizro](https://github.com/docker/mcp-registry/pull/799)** — open since 2025-11-27, unmerged.
- **[#3217 – chore: update pin for hostinger-mcp-server](https://github.com/docker/mcp-registry/pull/3217)** — open since 2026-05-05.
- **[#4369](https://github.com/docker/mcp-registry/pull/4369)** and **[#4383](https://github.com/docker/mcp-registry/pull/4383)** — pin updates for testkube and teamwork, both open since early July 2026.

The accumulation of unmerged `mcp-registry-bot` pin-update PRs (several months old) suggests these low-risk automated PRs are being deprioritized behind new-server review — a maintainer bandwidth signal worth flagging, since stale pins can mean listed servers are running against outdated commits.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) — Daily Digest: 2026-09-24

## 1. Today's Overview

The claude-plugins-official marketplace saw moderate activity in the past 24 hours: 9 issues touched (8 open, 1 closed) and 7 PRs updated (1 open, 6 closed/merged). Activity skews toward two recurring themes — broken plugin-submission/review pipeline reports and lingering `security-guidance` plugin bugs — alongside routine marketplace maintenance (a new Amazon plugin addition and a version bump). No new releases shipped today. Overall project health looks stable but shows friction in the community submission pipeline, which is generating duplicate/related bug reports from independent authors.

## 2. Releases

None today — 0 new releases.

## 3. Project Progress

Six PRs closed/merged today, mostly marketplace content updates rather than core tooling changes:

- **[#6298](https://github.com/anthropics/claude-plugins-official/pull/6298)** feat(telegram): include `reply_to_message_id` on inbound messages — closed same-day as companion to Issue #6297, fixes the Telegram channel's inability to disambiguate which question a reply answers.
- **[#6294](https://github.com/anthropics/claude-plugins-official/pull/6294)** bump(amazon-selling-partner): pinned commit update `5e8147fc → 10573bac`, tracking an upstream `.mcp.json` server key rename (`sp-ai` → `amazon-selling-partner`).
- **[#6293](https://github.com/anthropics/claude-plugins-official/pull/6293)** Add amazon-selling-partner plugin — Amazon's official Selling Partner plugin (11 skills + 3 commands), announced at Amazon Accelerate 2026-09-23.
- **[#6275](https://github.com/anthropics/claude-plugins-official/pull/6275)** Withdrawn by author (paired with Issue #6274, also withdrawn — author cited a need to re-measure figures before resubmitting).
- **[#6292](https://github.com/anthropics/claude-plugins-official/pull/6292)** / **[#6291](https://github.com/anthropics/claude-plugins-official/pull/6291)** — closed without apparent merge; titles ("Add GitHub Actions workflow for Node.js with Webpack", "CATHLEENANNTICO Claude") and empty summaries suggest these were spam/low-effort or off-topic submissions from a new contributor (`kerrrang9214-tech`), both closed same day.

Still open: **[#6296](https://github.com/anthropics/claude-plugins-official/pull/6296)** — exempts `command`-source entries from the `source.url` scope-guard check in the external-PR review tooling, a maintenance fix to the automated review pipeline itself.

## 4. Community Hot Topics

Ranked by engagement (comments):

- **[#6272](https://github.com/anthropics/claude-plugins-official/issues/6272)** "Plugin passed review but never appeared in claude-plugin" (4 comments) — the most-discussed item today. Author `natejungtechcomm` reports their `writing-process` plugin was approved via the console submission form but silently never published. Signals a real gap between the review-approval state and the publish step.
- **[#3173](https://github.com/anthropics/claude-plugins-official/issues/3173)** "security-guidance 2.0.6 hooks are incompatible with Codex CLI" (3 comments, open since 2026-06-22, still updated today) — cross-tool compatibility issue: the plugin's Claude-specific `hooks/hooks.json` breaks when loaded under Codex CLI's differing hook/Stop schema.
- **[#5781](https://github.com/anthropics/claude-plugins-official/issues/5781)** "security-guidance: Stop hook fails with Errno 2 ... unbounded asyncRewake loop" (2 comments) — a Windows/Git Bash/Python 3.14-specific crash loop.

Underlying need: multiple independent threads point to trust/visibility gaps in the submission-review-publish pipeline (#6272, #6290) and to `security-guidance` plugin fragility across non-Claude runtimes and platforms (#3173, #5781, #5706) — both are recurring pain clusters, not isolated incidents.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#5781](https://github.com/anthropics/claude-plugins-official/issues/5781)** — HIGH: `security-guidance` Stop hook produces an **unbounded retry loop** (Errno 2 on a file that exists) on Windows/Git Bash/Python 3.14 — a resource-exhaustion-style failure mode, not just an isolated bug. No fix PR linked yet.
2. **[#5706](https://github.com/anthropics/claude-plugins-official/issues/5706)** — MEDIUM: `security-guidance`'s agent-SDK venv staleness check (`find_spec`) can't detect ABI breaks in compiled dependencies after an interpreter change, so a stale/broken venv silently persists. No fix PR linked.
3. **[#3173](https://github.com/anthropics/claude-plugins-official/issues/3173)** — MEDIUM: `security-guidance` hooks incompatible with Codex CLI's hook/Stop schema — cross-platform compatibility bug, no fix PR linked.
4. **[#2790](https://github.com/anthropics/claude-plugins-official/issues/2790)** — LOW/MEDIUM: `claude-md-management` plugin references the wrong local-memory filename (`.claude.local.md` instead of `CLAUDE.local.md`), causing a **silent failure** (memory file never loads), plus the audit command executes documented shell commands rather than just describing them. No fix PR linked.

No fix PRs were merged today for any of the four open `security-guidance`/plugin bugs — this cluster remains unresolved.

## 6. Feature Requests & Roadmap Signals

- **[#6297](https://github.com/anthropics/claude-plugins-official/issues/6297)** — Request to add `reply_to_message_id` to inbound Telegram channel messages so sessions can disambiguate replies to specific bot questions. **Already implemented** same-day via merged PR **[#6298](https://github.com/anthropics/claude-plugins-official/pull/6298)** — a fast turnaround likely to ship in the next plugin update.
- **[#6296](https://github.com/anthropics/claude-plugins-official/pull/6296)** (open) signals ongoing internal tooling work to relax the scope-guard's `source.url` validation for `command`-type marketplace entries — likely lands soon given it's infrastructure/process rather than user-facing.

No other substantive net-new feature requests today; the bulk of open issues are bug reports or submission-process complaints rather than feature asks.

## 7. User Feedback Summary

- **Pain point — submission/review opacity**: Two independent authors (#6272, #6290) report plugins that "passed review" but then vanished from both the directory and the submissions dashboard, with #6290 describing the dashboard reverting to an empty state as if nothing was ever submitted. This is a trust-eroding experience for new plugin authors.
- **Pain point — `security-guidance` reliability**: Three separate issues (#3173, #5781, #5706) hit the same plugin across different axes (cross-CLI compatibility, Windows platform crash loop, venv staleness) — suggests `security-guidance` needs a focused stability pass rather than one-off patches.
- **Positive signal**: The Telegram reply-threading fix (#6297 → #6298) shows the maintainers/community can turn around a well-scoped UX request within the same day.
- **Noise**: **[#6295](https://github.com/anthropics/claude-plugins-official/issues/6295)** ("FOX AI Alignment Protocol... 32.8% safety boost") reads as an unsolicited/low-credibility promotional proposal with no comments or reactions — likely to be closed without action.

## 8. Backlog Watch

- **[#3173](https://github.com/anthropics/claude-plugins-official/issues/3173)** — open since 2026-06-22 (94 days), still actively commented on today with no fix — the oldest unresolved item in this batch and a good candidate for maintainer triage given it recurs across issues.
- **[#2790](https://github.com/anthropics/claude-plugins-official/issues/2790)** — open since 2026-06-14, a "silent failure" bug (wrong memory filename) with real user impact but only 1 comment and no fix PR — likely under-triaged.
- **[#6272](https://github.com/anthropics/claude-plugins-official/issues/6272)** and **[#6290](https://github.com/anthropics/claude-plugins-official/issues/6290)** — both describe plugins stuck in review/publish limbo; no maintainer resolution visible yet despite being high-trust-impact for new contributors. Worth escalating given the pattern (two independent reports within 48 hours) suggests a systemic pipeline bug rather than isolated incidents.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-09-24)

## 1. Today's Overview
Activity today was entirely submission-driven: 12 issues touched in the last 24h (10 open, 2 closed), but **zero PRs and zero releases**. This is a curated awesome-list repo where community members submit new Claude Code resources via a standardized issue template, and the pattern today — nine near-identical `[Resource]:` submissions created on 2026-09-23/24, each carrying a `validation-passed` or `validation-pending` label — indicates the automated triage bot is working through a fresh wave of intake rather than the project undergoing code changes. Overall health signal: strong top-of-funnel community interest (new tool submissions arriving daily), but no visible merge activity, so the actual "adding to the list" step isn't reflected in this 24h window.

## 2. Releases
None — no new releases in this period.

## 3. Project Progress
No PRs were merged or closed today (0 total). The only state changes were at the issue level:
- [#2927 reviewloop](https://github.com/hesreallyhim/awesome-claude-code/issues/2927) — auto-closed by bot, labeled `validation-pending` + `auto-closed`, suggesting it failed automated validation criteria (rather than being manually rejected).
- [#2793 statuslin.es](https://github.com/hesreallyhim/awesome-claude-code/issues/2793) — closed after 2 weeks open (created 2026-09-09) with zero comments/reactions until closure.

Since there's no PR activity, actual README updates for the 8 `validation-passed` submissions still open appear to happen through a separate merge mechanism not visible in this data — worth confirming with maintainers if that batch is pending.

## 4. Community Hot Topics
Engagement is uniformly light — most issues have exactly 1 comment (likely the validation bot) and 0 reactions. The closest thing to a "hot" item:
- [#2853 Brig — microVM sandbox for Claude Code](https://github.com/hesreallyhim/awesome-claude-code/issues/2853) — 2 comments, oldest of the batch (open since 2026-09-16), addresses agent sandboxing/credential-safety.

The underlying need across nearly all of today's submissions is discoverability: authors want their tools indexed in the canonical awesome-list, but the low comment/reaction counts suggest the community isn't yet engaging with individual submissions beyond bot validation — attention is concentrated on the list itself rather than on debating individual entries.

## 5. Bugs & Stability
No bug reports, crashes, or regressions today — this repo tracks resource submissions, not code, so there is no applicable stability signal.

## 6. Feature Requests & Roadmap Signals
No direct feature requests for the awesome-list tooling itself, but the *category mix* of today's submissions signals where the Claude Code ecosystem is trending:
- **Security/sandboxing** (2 submissions): [Brig](https://github.com/hesreallyhim/awesome-claude-code/issues/2853) (microVM sandbox), [Gryph](https://github.com/hesreallyhim/awesome-claude-code/issues/2931) (YAML policy enforcement) — suggests growing concern over agent auto-approval risk.
- **Memory & Context Persistence** (2 submissions): [Personal Understanding](https://github.com/hesreallyhim/awesome-claude-code/issues/2933), [pentimento](https://github.com/hesreallyhim/awesome-claude-code/issues/2930) — recurring theme of session/state continuity.
- **Agent Orchestration** (2 submissions): [MindForge](https://github.com/hesreallyhim/awesome-claude-code/issues/2932), [docko](https://github.com/hesreallyhim/awesome-claude-code/issues/2925).

Given two independent security-focused submissions land the same day, a dedicated "Security" category or featured spotlight is a plausible near-term curation change for the list maintainers.

## 7. User Feedback Summary
Submission descriptions double as informal pain-point signals rather than direct feedback:
- Agent auto-approval risk: Brig's description explicitly cites concern that "coding agents install packages, execute commands, and use credentials" unsupervised — a trust/safety pain point.
- Context loss across sessions: both memory-persistence tools frame their purpose around recovering state/lineage from prior Claude Code sessions, implying users are hitting context-loss friction today.
- Visibility into agent behavior: [line-of-sight](https://github.com/hesreallyhim/awesome-claude-code/issues/2929) (read-only session viewer) reflects demand for observability into what an agent did during a session.

No explicit satisfaction/dissatisfaction commentary appears in this window — feedback is inferred from what tool-builders chose to build, not from direct complaints.

## 8. Backlog Watch
- [#2793 statuslin.es](https://github.com/hesreallyhim/awesome-claude-code/issues/2793) sat untouched for 2 weeks with zero comments/reactions before being closed — a signal that niche-category submissions (Status Lines) may get slower maintainer attention than mainstream categories.
- Eight `validation-passed` submissions ([#2928](https://github.com/hesreallyhim/awesome-claude-code/issues/2928), [#2926](https://github.com/hesreallyhim/awesome-claude-code/issues/2926), [#2925](https://github.com/hesreallyhim/awesome-claude-code/issues/2925), [#2924](https://github.com/hesreallyhim/awesome-claude-code/issues/2924), [#2930](https://github.com/hesreallyhim/awesome-claude-code/issues/2930), [#2931](https://github.com/hesreallyhim/awesome-claude-code/issues/2931), [#2932](https://github.com/hesreallyhim/awesome-claude-code/issues/2932), [#2933](https://github.com/hesreallyhim/awesome-claude-code/issues/2933)) are open with no visible PR pipeline merging them into the README — worth a maintainer check to confirm whether these are queued for a batch update or stalled.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**Date:** 2026-09-24 | **Source:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview

Activity over the last 24 hours was minimal: zero issue activity and just two new pull requests, both submissions to the community skills catalog rather than code changes to the core project. No releases were cut. This pattern is typical of an "awesome list" repository, where day-to-day activity is driven almost entirely by community skill submissions rather than active development. With no bug reports, no comments, and no reactions on either PR yet, today reads as a quiet, low-signal day — healthy in the sense of continued community contribution, but not indicative of core project momentum.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed today. Both open PRs remain pending maintainer review:

- **[#1098](https://github.com/VoltAgent/awesome-agent-skills/pull/1098)** — Add skill: `socai-io/jev-social` (opened by [@IRONICBo](https://github.com/IRONICBo))
- **[#1097](https://github.com/VoltAgent/awesome-agent-skills/pull/1097)** — Add skill: `YangTech-gh/Awesome-Bug-Bounty` (opened by [@YangTech-gh](https://github.com/YangTech-gh))

## 4. Community Hot Topics

No Issues or PRs have attracted comments or reactions yet (both today's PRs show 0 👍 and 0 comments, undefined comment counts suggest they're brand new). There's no discernible "hot topic" today — engagement is at baseline. This likely reflects the newness of both submissions rather than lack of community interest; skill-addition PRs in this repo typically accumulate review comments over subsequent days as maintainers check catalog fit.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. No stability concerns to flag.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. The two pending PRs do signal an emerging pattern worth watching:

- **[#1098](https://github.com/VoltAgent/awesome-agent-skills/pull/1098)** proposes a *Marketing* category skill (`jev-social`) that wraps a local `socai` CLI for read-only social research — an example of skills that broker access to external CLIs rather than being pure prompt/instruction bundles.
- **[#1097](https://github.com/VoltAgent/awesome-agent-skills/pull/1097)** proposes a *Security* category skill (`Awesome-Bug-Bounty`) bundling 36 vulnerability playbooks for authorized bug-bounty work, explicitly scoped to "authorized testing only."

Both suggest the catalog's next additions will lean toward domain-specialized, playbook-style skills (security, social/marketing research) rather than general-purpose ones. If accepted, expect the *Security* and *Marketing* sections of the README to grow.

## 7. User Feedback Summary

No direct user feedback (comments, reactions, discussion) was posted today. The PR descriptions themselves offer indirect signal: both authors emphasize scoping and safety framing ("read-only searches," "authorized testing only," "business logic" boundaries) — suggesting contributors are self-aware of the risk profile of agent-skill submissions and are pre-empting maintainer concerns about scope creep or misuse.

## 8. Backlog Watch

With zero issue activity and no comment history available for the two open PRs, there's nothing yet in the backlog that's clearly stalled. Worth flagging for future digests: if **#1097** (bug-bounty skill) or **#1098** (social-research skill) go more than a few days without a maintainer response, they'd be worth surfacing here, since dual-use skills (security tooling, external CLI wrappers) typically need closer maintainer scrutiny before merge than typical catalog additions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
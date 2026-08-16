# MCP Ecosystem Digest 2026-08-16

> Issues: 9 | PRs: 3 | Projects covered: 7 | Generated: 2026-08-16 07:27 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-08-16)

## 1. Today's Overview

The `modelcontextprotocol/servers` repository saw moderate maintenance-oriented activity in the last 24 hours: 9 issues and 3 PRs updated, but no new releases. Activity skews toward long-tail bug triage rather than new feature delivery — two of the era's oldest and most-commented issues (#40, #64, both from November 2024) were finally closed today, while several chronic filesystem/memory-server bugs remain open and actively discussed. On the contribution side, two new third-party server listings were submitted (PRs #4647, #4646) and one documentation typo fix was merged. Overall, the project shows steady community engagement and active issue curation, but a lack of shipped releases suggests core server code is in a stabilization/audit phase rather than active feature growth.

## 2. Releases

No new releases in this period.

## 3. Project Progress

- **PR #4623 — Fix typo in Everything server docs** ([link](https://github.com/modelcontextprotocol/servers/pull/4623)) — closed/merged. Minor docs correction ("initilization" → "initialization") in the Everything server architecture docs.
- **Issue #40 — MCP servers fail to connect with `npx` on Windows** ([link](https://github.com/modelcontextprotocol/servers/issues/40)) — closed after 113 comments and nearly two years open. A long-standing Windows/`npx` connectivity pain point is finally resolved or superseded.
- **Issue #64 — MCP Servers Don't Work with NVM** ([link](https://github.com/modelcontextprotocol/servers/issues/64)) — closed after 91 comments and 147 👍, the highest-reaction issue in this dataset. Its long-documented workaround (avoid `npx`, use absolute Node paths) appears to have been the de facto resolution.

No open PRs merged actual server code changes today; the two open PRs (#4647, #4646) are new-server-listing additions still pending review.

## 4. Community Hot Topics

Ranked by engagement:

1. **Issue #40** ([link](https://github.com/modelcontextprotocol/servers/issues/40)) — 113 comments. Windows `npx` connection failures — the single most-discussed thread in the repo's history, just closed.
2. **Issue #64** ([link](https://github.com/modelcontextprotocol/servers/issues/64)) — 91 comments, 147 👍 (highest reaction count). NVM/Node-version conflicts breaking server launches — reflects widespread frustration with Node environment management across desktop clients.
3. **Issue #447 — filesystem server doesn't support legal Windows pathnames** ([link](https://github.com/modelcontextprotocol/servers/issues/447)) — 25 comments, still open after ~20 months. Underlying need: robust cross-platform path handling (backslashes, 8.3 short names, spaces) in `claude_desktop_config.json`.
4. **Issue #3051 — filesystem server broken with OpenAI Agent SDK** ([link](https://github.com/modelcontextprotocol/servers/issues/3051)) — 25 comments, 8 👍, updated today. Signals a regression introduced in a filesystem server upgrade that breaks tool-listing for non-Claude clients — an interoperability concern.
5. **Issue #4117 — memory: safer persistence defaults** ([link](https://github.com/modelcontextprotocol/servers/issues/4117)) — 24 comments, updated today. Community-driven hardening proposal (atomic writes, quotas, redaction, destructive-op guardrails) for the memory server.

Common thread: Windows/environment compatibility and filesystem/memory server robustness dominate community attention far more than new feature requests.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **High — Issue #3051: filesystem server stopped working with OpenAI Agent SDK** ([link](https://github.com/modelcontextprotocol/servers/issues/3051)). A regression from a prior filesystem server upgrade breaks tool discovery for non-Anthropic clients (OpenAI SDK, MCP Inspector). No fix PR currently linked — an active functional break for cross-client users.
2. **Medium — Issue #4162: filesystem recursive search hangs on macOS CloudStorage/lazy-provider paths** ([link](https://github.com/modelcontextprotocol/servers/issues/4162)). Production-reported hang when scanning cloud-backed directories (Google Drive, iCloud) under `allowedDirectories`. No fix PR yet.
3. **Medium — Issue #692: Memory MCP ignores custom storage path setting** ([link](https://github.com/modelcontextprotocol/servers/issues/692)). Config option silently ignored, memory data written to NPX temp dir instead of the user-specified path — risk of silent data loss on cleanup. 16 comments, 14 👍, no fix PR evident.
4. **Medium — Issue #447: filesystem server mishandles legal Windows pathnames** ([link](https://github.com/modelcontextprotocol/servers/issues/447)). Long-standing path-parsing bug affecting Windows users specifically.
5. **Low/Content — Issue #3878: mcp-server-fetch drops SSR content from streaming sites** ([link](https://github.com/modelcontextprotocol/servers/issues/3878)). Fetch tool silently loses content on progressively-rendered pages — a correctness/completeness bug rather than a crash.

No fix PRs for any of these were found among today's 3 updated PRs — all currently outstanding.

## 6. Feature Requests & Roadmap Signals

- **Issue #4117 (memory hardening)** proposes atomic writes, storage quotas, PII redaction, and guardrails against destructive operations for `server-memory`. Given its comment volume and today's update, this is a plausible candidate for inclusion in an upcoming memory-server release if maintainers accept the design.
- **Issue #3537 (Security Audit: unconstrained string parameters)** ([link](https://github.com/modelcontextprotocol/servers/issues/3537)) recommends adding input length/format constraints across official servers (all but `mcp-server-fetch` currently lack them). This is a low-risk, high-value hardening change likely to land as incremental PRs per server rather than one release.
- **PR #4646 (M2M Sentinel)** and **PR #4647 (givewell-donate)** both target `ADDITIONAL.md`/community server listings, not core roadmap features — these indicate ecosystem growth (agent-driven payments/donations, smart-contract analysis tooling) rather than upstream server changes.

## 7. User Feedback Summary

- **Positive**: Community security audit (#3537) found official servers score "Grade A or B" overall, indicating baseline confidence in server quality.
- **Negative/pain points**:
  - Windows and Node-version-manager environment friction remains the single largest source of user frustration historically (#40, #64), even though both are now closed.
  - Filesystem server reliability regressions are a recurring theme — breaking with OpenAI SDK (#3051), hanging on macOS cloud-sync paths (#4162), and mishandling Windows paths (#447) all point to the filesystem server as the least stable component in active use.
  - Data-integrity concerns with the memory server (#692 ignoring custom paths, #4117 proposing safer defaults) suggest users are wary of silent data loss.
  - #3878 shows real-world use cases (agents fetching modern SSR web content) hitting silent content-loss failures, which undermines trust in fetch-tool completeness.

## 8. Backlog Watch

- **Issue #3537 — Security Audit** ([link](https://github.com/modelcontextprotocol/servers/issues/3537)): open since 2026-03-12 (~5 months), 14 comments, no visible maintainer response/triage despite actionable, specific findings — needs a decision on whether to adopt parameter-constraint recommendations.
- **Issue #4117 — memory persistence hardening** ([link](https://github.com/modelcontextprotocol/servers/issues/4117)): open since 2026-05-06, substantial community discussion (24 comments) but no indication of maintainer buy-in or a linked PR.
- **Issue #692 — Memory MCP ignores custom storage path** ([link](https://github.com/modelcontextprotocol/servers/issues/692)): open since 2025-02-27 (~18 months), 14 👍 reflects real demand for a fix, still unresolved.
- **Issue #3051 — filesystem/OpenAI SDK incompatibility** ([link](https://github.com/modelcontextprotocol/servers/issues/3051)): open since 2025-11-24, actively updated but no assigned fix — worth escalating given it affects cross-client interoperability, a core value proposition of MCP.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP & Claude Ecosystem Digest
**Date:** 2026-08-16

## 1. Ecosystem Overview

The MCP/Claude open-source ecosystem is bifurcating into two distinct activity modes: core protocol infrastructure (MCP Servers, MCP Registry, Claude Plugins) undergoing bug-fix and stabilization cycles, and curated-list repositories (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills) absorbing a heavy, sustained wave of third-party submissions. Submission volume across the list-based projects (110+ PRs/issues combined today) dwarfs core-repo engineering activity, indicating explosive downstream ecosystem growth even as upstream protocol development is comparatively quiet — zero releases were shipped across all seven projects in this window. A common thread across nearly every project is maintainer review-bandwidth as the binding constraint, not contributor interest: stale bot PRs, multi-week-old submissions, and batch-clearing review patterns recur throughout. Thematically, the community is converging on agent trust/safety (reputation, orchestration guardrails, runaway-spawn prevention) and memory/persistence infrastructure as the two dominant emerging needs. Windows/environment compatibility remains a long-tail but high-volume pain point specifically for the core MCP Servers reference implementation.

## 2. Activity Comparison

| Project | Issues (updated) | PRs (updated) | Releases | Health Score |
|---|---|---|---|---|
| MCP Servers (core) | 9 (0 closed) | 3 (1 merged) | None | 6/10 — stable curation, but 2 unfixed high/medium bugs (#3051, #4162) with no linked PRs |
| MCP Registry (official) | 2 (0 closed) | 1 (0 merged) | None | 5/10 — emerging auth regression (403 org-publish) blocks a core workflow, unacknowledged |
| Awesome MCP Servers | 1 | 83 (22 closed/merged) | N/A (list) | 6/10 — high submission health, but PRs sit 1–4.5 months; review is the bottleneck |
| Docker MCP Registry | 0 | 15 (2 closed) | N/A (list) | 6/10 — healthy submissions; bot pin-PRs stale up to 8.5 months |
| Claude Plugins (official) | 9 (0 closed) | 6 (all closed) | None | 5/10 — 2 high/medium-severity Telegram plugin bugs (CPU hang, polling collision) unfixed |
| Awesome Claude Code | 8 (2 closed) | 0 | N/A (list) | 7/10 — light volume, low friction, fast triage |
| Awesome Agent Skills | 0 | 9 (7 closed) | N/A (list) | 7/10 — healthy batch-review cadence, no open bugs |

*Health score is a qualitative 1–10 composite of bug severity/backlog, release cadence, and maintainer responsiveness — not a standardized metric from the source data.*

## 3. MCP Servers's Position

**Advantages vs. peers:** As the official reference implementation (`modelcontextprotocol/servers`), it has by far the deepest historical engagement of any project surveyed — issue #40 and #64 closed today after 113 and 91 comments respectively (91 comments / 147 👍 is the single highest engagement figure across the entire dataset). This depth signals an entrenched, long-tenured user base rather than a churn-heavy new project.

**Technical approach differences:** Unlike the awesome-list projects (which curate third-party servers with no runtime code of their own), MCP Servers ships and maintains actual server implementations (filesystem, memory, fetch), making it the only project in this set with genuine "production bug" exposure — hangs, silent config failures, cross-client interoperability regressions (#3051 breaking OpenAI Agent SDK compatibility).

**Community size comparison:** Its issue-comment volumes (25–113 comments per thread) dwarf every other project's engagement, most of which report `undefined`/0 comments on PRs. However, raw submission *throughput* is far lower than Awesome MCP Servers (83 PRs/day) — MCP Servers is a mature, deep-engagement project, not a high-throughput one.

## 4. Shared Technical Focus Areas

- **Agent trust/reputation & payment safety** — Docker MCP Registry (#4700 Agent Guild), Awesome MCP Servers (#4646 M2M Sentinel, #4647 givewell-donate) all show incoming servers targeting verifiable agent identity and transaction safety.
- **Persistent memory/context infrastructure** — MCP Servers (#4117, #692 memory server hardening), Docker MCP Registry (#4698 Mitosis knowledge graph), Awesome Agent Skills (#908 claude-mem, positioned alongside 3 existing memory-category entries) — memory/persistence is the single most cross-cutting theme in the dataset.
- **Multi-agent orchestration & runaway-spawn guardrails** — Awesome Claude Code (#2537 fusegate, #2539 Backbrief Kit) and Claude Plugins (#4788 Telegram CPU-hang, #881 instance-polling collision) both reflect demand for constraining/coordinating concurrent agent processes safely.
- **Code-quality/security review as agent tooling** — Docker MCP Registry (#4699 MCP Code Review, OWASP scanning) and Awesome MCP Servers (#10918 MCP Code Review Server) show duplicate independent submissions of the same capability class, suggesting strong latent demand.
- **Verification/badge infrastructure gaps for remote servers** — Awesome MCP Servers (#12244) explicitly flags that existing Glama-based verification doesn't cover hosted/remote (streamable HTTP) servers, a friction point as more submissions across *all* list projects shift from local stdio to remote endpoints.

## 5. Differentiation Analysis

| Dimension | MCP Servers | MCP Registry | Awesome-lists (4) | Claude Plugins |
|---|---|---|---|---|
| **Feature focus** | Reference server implementations | Publishing/discovery infra | Curated pointers to 3rd-party work | Official plugin marketplace |
| **Target users** | Client/server implementers | Server publishers (org namespaces) | Discovery-seeking developers | Claude Code end-users |
| **Technical architecture** | Runtime code (Node/TS servers) | Auth + registry API | Static Markdown + bot linting | Plugin runtime + validation bot |
| **Primary risk surface** | Cross-client compatibility, data loss | Authorization/token minting | Review-queue backlog | Background-process lifecycle (Telegram) |

The clearest architectural divergence is between projects with **runtime code** (MCP Servers, MCP Registry, Claude Plugins) that can regress or hang, versus **static curation** projects (the four awesome-lists) whose only failure mode is review latency, never a production bug.

## 6. Community Momentum & Maturity

**Rapidly iterating (submission-heavy, high throughput):** Awesome MCP Servers (83 PRs/day) and Docker MCP Registry (15 PRs/day) are the clear leaders — both are absorbing a steady stream of new remote/hosted server listings and are bottlenecked purely on maintainer review capacity, not contributor interest.

**Stabilizing / audit phase:** MCP Servers (core) shows the classic signature of a maturing project — no new releases, but active long-tail bug triage and closure of multi-year-old issues (#40, #64). This is consolidation, not stagnation.

**Emerging friction:** MCP Registry (official) is the one project showing a *new* regression rather than legacy debt — two independent, well-documented reports of org-namespace publish failures within days of each other, with zero maintainer response. This warrants closer watching than its low activity volume suggests.

**Steady/low-friction:** Awesome Claude Code and Awesome Agent Skills show healthy but modest submission volume with fast, low-conflict triage (batch-clearing sweeps, `auto-closed` bot labels) — indicative of well-tuned curation processes at smaller scale.

## 7. Trend Signals

1. **Local-first stdio → remote/hosted HTTP servers is an active architectural migration.** Multiple projects (Awesome MCP Servers #12244, Docker MCP Registry submissions #4700/#4698/#4695) show verification tooling and badge infrastructure lagging behind this shift — developers building MCP servers should expect discovery/trust friction if targeting remote deployment today.
2. **Agent safety/guardrail tooling is graduating from "nice to have" to a distinct submission category.** Fusegate, Backbrief Kit, Agent Guild, and the Telegram plugin lifecycle bugs collectively signal that unconstrained agent concurrency (runaway spawning, token-budget overruns, zombie processes) is now a recognized production risk class, not a hypothetical concern.
3. **Abandoned "official" integrations are creating a maintenance vacuum third parties are filling.** The Awesome MCP Servers digest explicitly notes a Rust replacement for the archived `@modelcontextprotocol/server-postgres` still serving ~475k npm downloads/month unmaintained — a signal for AI agent developers that official reference servers can go stale while remaining load-bearing in production.
4. **Memory/persistence is the most consistently recurring unmet need across the entire dataset** — appearing independently in MCP Servers, Docker MCP Registry, and Awesome Agent Skills. Developers building agent memory layers are entering a validated but still-immature market; data-integrity concerns (silent path-ignoring, no atomic writes) are the primary trust gap to solve for.
5. **Review-bandwidth, not code quality or contributor interest, is the ecosystem's shared bottleneck.** From 8.5-month-old bot PRs (Docker) to 11-week-old self-contained fixes (MCP Registry #1317) to 4.5-month-old awesome-list entries, nearly every project shows submission supply outpacing maintainer triage capacity — a signal that tooling/automation investment in review workflows (not just submission linting) would yield outsized ecosystem-wide benefit.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
**Date: 2026-08-16** | Source: [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview

Activity in the last 24 hours was light but focused: 2 open issues and 1 open PR were updated, with zero merges, closes, or new releases. Both issues report the same class of failure — GitHub organization-based publishing returning `403 Forbidden` despite confirmed org membership and permissions — suggesting a real, reproducible bug in the registry's org-namespace authorization path rather than isolated user error. The lone active PR is a narrow, well-scoped fix for a deprecated-server conflict edge case, unrelated to the 403 issue cluster. Overall project health signal: stable but with an emerging auth-related regression that warrants maintainer triage given two independent reporters within a few days of each other.

## 2. Releases

None in the last 24 hours.

## 3. Project Progress

No PRs were merged or closed today. The one active PR remains open:

- **[PR #1317](https://github.com/modelcontextprotocol/registry/pull/1317) — "fix: ignore inactive remote URL conflicts"** (he-yufeng, updated today). Fixes [#1193](https://github.com/modelcontextprotocol/registry/issues/1193). The remote URL uniqueness check already excluded deleted servers at the query layer but still flagged deprecated servers as conflicts, blocking publication of a replacement server for an intentionally deprecated one. This PR extends the exclusion to deprecated servers while preserving same-server edit checks. Open since 2026-05-28, so it's been in review for roughly 11 weeks — worth flagging for maintainer attention (see Backlog Watch).

## 4. Community Hot Topics

Both issues opened this week share a theme and neither has attracted comments or reactions yet, so "hot" here reflects recency and overlap rather than engagement volume:

- **[Issue #1527](https://github.com/modelcontextprotocol/registry/issues/1527)** — "403 on org namespace: token minted without org permission despite public membership and Owner role" (BrienBounded, opened 2026-08-11)
- **[Issue #1537](https://github.com/modelcontextprotocol/registry/issues/1537)** — "GitHub org-based publish returns 403 despite confirmed-public org membership, even after full OAuth revoke and re-auth" (mrmclickstream, opened 2026-08-14)

Underlying need: both authors are trying to publish MCP servers under a GitHub organization namespace and are being denied despite meeting the documented requirements (public org membership, Owner role). The second reporter did extensive troubleshooting (three independent verification methods, full OAuth revoke/re-auth) before filing, which signals this isn't a one-off misconfiguration but a systemic gap between org-membership visibility and how the registry's token minting/permission-grant logic evaluates it.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Org-namespace publish authorization failure** ([#1527](https://github.com/modelcontextprotocol/registry/issues/1527), [#1537](https://github.com/modelcontextprotocol/registry/issues/1537)). Two independent, reproducible reports of `mcp-publisher publish` returning 403 for organization namespaces despite correct org membership/role. This is a **publishing blocker** — it prevents legitimate maintainers from shipping servers under their org's namespace at all. No fix PR currently references either issue. This is the most severe open item in the tracker today and should be prioritized, as it fully blocks a core registry workflow for affected users.
2. **Low/Medium — Deprecated-server conflict false positive** ([#1193](https://github.com/modelcontextprotocol/registry/issues/1193), fix in progress via [PR #1317](https://github.com/modelcontextprotocol/registry/pull/1317)). Blocks publishing a replacement for a deprecated server due to overly strict remote URL uniqueness checks. Fix already authored and pending merge/review.

## 6. Feature Requests & Roadmap Signals

No explicit new feature requests surfaced in today's data. The closest roadmap-relevant signal is implicit in PR #1317: refining server lifecycle semantics (active/deleted/deprecated) in the uniqueness-validation logic. If merged, this suggests the registry is moving toward more nuanced handling of deprecated servers as first-class lifecycle states rather than edge cases — likely to continue with further lifecycle-related fixes.

## 7. User Feedback Summary

- **Pain point:** Organization-based publishing is currently unreliable/broken for at least two users, with the second reporter explicitly noting they exhausted standard troubleshooting (re-auth, OAuth revoke, manual API verification) before escalating — indicating real frustration and lost time, not a documentation gap.
- **Pain point:** Deprecating a server currently creates a chicken-and-egg problem — you can't publish its replacement without hitting a conflict, which discourages proper lifecycle hygiene (deprecate-then-replace) in favor of workarounds.
- No positive/satisfaction signals present in today's window — all recorded activity is bug-oriented.

## 8. Backlog Watch

- **[PR #1317](https://github.com/modelcontextprotocol/registry/pull/1317)** has been open since 2026-05-28 (~11 weeks) despite being a self-contained fix for a clearly documented issue ([#1193](https://github.com/modelcontextprotocol/registry/issues/1193)). It updated again today (2026-08-16), indicating continued author engagement — a good candidate for maintainer review/merge.
- **[Issue #1527](https://github.com/modelcontextprotocol/registry/issues/1527)** has had zero comments in 5 days despite describing a full publishing blocker with token-level diagnostic evidence included — this deserves prompt maintainer acknowledgment given its severity.
- **[Issue #1537](https://github.com/modelcontextprotocol/registry/issues/1537)**, filed 2 days ago, duplicates/corroborates #1527; consider linking or merging the threads to consolidate investigation effort.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest
**Date:** 2026-08-16

## 1. Today's Overview

Awesome MCP Servers remains in a high-velocity, submission-heavy phase: 83 PRs touched in the last 24 hours (61 still open, 22 merged/closed) against just 1 issue update. This ~80:1 PR-to-issue ratio confirms the repo's dominant workflow is curated-list additions rather than bug triage or discussion. No new releases (expected — this is a static awesome-list, not a versioned package). The submission stream is heavily bot-assisted: most PR titles carry auto-applied labels (`missing-glama`, `has-emoji`, `valid-name`) from a linting bot, and several bodies reference `mcp-submit` or Claude Code sessions, indicating AI-agent-authored submissions are now a significant share of contributions. Overall health looks active but strained — the sheer submission volume, combined with several multi-month-old open PRs, suggests maintainer review bandwidth is the binding constraint, not community interest.

## 2. Releases

None. This repository does not cut versioned releases; the "product" is the continuously-updated README/list itself.

## 3. Project Progress

The data shows 22 PRs merged or closed in the last 24h, but item-level status is only confirmed for one:
- [#12248 — Add io.github.LE-VAI/designesy-org](https://github.com/punkpeye/awesome-mcp-servers/pull/12248) (CLOSED) — a design-contract scoring server submission from LE-VAI; closed same-day it was opened, likely superseded by the same author's earlier open PR [#11573](https://github.com/punkpeye/awesome-mcp-servers/pull/11573) for the same project (`designesy-org`), which already carries `has-glama` verification.

Beyond that, the underlying data doesn't break out which of the remaining ~21 closed/merged PRs were accepted vs. rejected — only aggregate counts were provided, so no further detail can be reported without additional data.

## 4. Community Hot Topics

Comment/reaction counts were not available for PRs in this dataset (reported as `undefined`), and the single tracked issue has 0 comments, so engagement-based ranking isn't possible today. Based on content and label signals instead, the most notable open discussion is:

- [#12244 — Accept Glama Connectors for verified hosted remote MCP servers](https://github.com/punkpeye/awesome-mcp-servers/issues/12244) (open, 0 comments) — proposes extending the submission-verification bot to recognize the official MCP Registry's hosted/remote server badges, not just Glama's local-server score badges. This is a policy/tooling request, not a feature for the list itself, and underlying need is clear: as more servers ship as hosted remote endpoints (streamable HTTP) rather than locally-run stdio servers, the existing verification badge scheme (`glama.ai/mcp/servers/.../score.svg`) doesn't cover them, creating friction for legitimate remote-server submissions (several of today's PRs — e.g. #12245, #12247, #8585 — are remote/hosted servers flagged `missing-glama` for exactly this reason).

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24h — expected, since this repository is a curated documentation list with no runtime component of its own to break. The closest analog is submission-tooling friction (see #12244 above and merge-conflict PR #8585 below), not a stability issue.

## 6. Feature Requests & Roadmap Signals

- **Verification badge scope expansion** ([#12244](https://github.com/punkpeye/awesome-mcp-servers/issues/12244)): extend automated verification to cover MCP Registry-listed hosted/remote servers. Given how many `missing-glama`-flagged PRs today are legitimate remote servers, this has a reasonable chance of being addressed soon simply to reduce manual review load on maintainers.
- **Category/taxonomy pressure**: several submissions target increasingly narrow niches (China supply-chain intel, indoor climate/HVAC, invoice chase emails, design-contract scoring), suggesting the existing category list may need periodic pruning or splitting as the list scales — a likely future maintainer task even without an explicit issue filed for it.

## 7. User Feedback Summary

No direct user satisfaction/dissatisfaction commentary appears in today's data (no comments on the tracked issue, and PR bodies are submission descriptions rather than feedback). Indirect signal from submitters:
- Multiple contributors (#12211 postgres-mcp-hardened, #12168 inkwell-memory) emphasize *maintenance and reliability* as differentiators — e.g. #12211 explicitly pitches itself as a maintained Rust replacement for the archived, deprecated `@modelcontextprotocol/server-postgres`, noting it still gets ~475k npm downloads/month despite being unmaintained. This signals real user pain around abandoned official servers in the ecosystem.
- Recurring emphasis across submissions on "no-auth," "no personal data," and "local-first/no network calls" (e.g. #12245, #12168, #12240) suggests privacy/self-hosting is a strong purchasing/adoption criterion among MCP server authors and, by extension, their users.

## 8. Backlog Watch

Several open PRs have sat for weeks to months and warrant maintainer attention, particularly ones flagged as problematic:
- [#4087 — docs: correct the existing LLMKit entry](https://github.com/punkpeye/awesome-mcp-servers/pull/4087) — open since 2026-04-03 (~4.5 months), labeled `duplicate` and `manual-review`. Longest-lived item in today's data; likely blocked on a conflicting/duplicate entry decision.
- [#8585 — Add Agent Guild to Other Tools and Integrations](https://github.com/punkpeye/awesome-mcp-servers/pull/8585) — open since 2026-06-23 (~2 months), labeled `merge-conflict`, meaning it will keep bit-rotting until either the author or a maintainer rebases it.
- [#10161 — Refresh DC Hub MCP entry](https://github.com/punkpeye/awesome-mcp-servers/pull/10161) — open since 2026-07-15 (~1 month), labeled `duplicate` and `manual-review`, an in-place stats update that should be low-risk to merge once reviewed.
- [#10918 — Add MCP Code Review Server](https://github.com/punkpeye/awesome-mcp-servers/pull/10918) — open since 2026-07-25 (~3 weeks), no blocking labels, appears to just be waiting in the review queue.

The presence of multiple `duplicate`/`manual-review`/`merge-conflict`-tagged PRs sitting for weeks reinforces that the primary bottleneck is maintainer triage capacity relative to submission volume, not contributor engagement.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date:** 2026-08-16

## 1. Today's Overview

Activity in the last 24 hours was modest but steady, consistent with `docker/mcp-registry`'s role as a submission-driven catalog rather than an actively-developed application. No new releases and zero issue activity occurred, but 15 PRs saw movement — 13 open, 2 closed. The bulk of open PRs (7 of 13) are new MCP server registration requests from external contributors, while a smaller cluster are automated `mcp-registry-bot` pin-update chores. Overall project health looks stable: submission volume remains healthy, though several server-addition PRs and automated pin PRs have been sitting open for weeks to months without merge, suggesting a review-bandwidth bottleneck rather than a decline in interest.

## 2. Releases

None today.

## 3. Project Progress

Two PRs closed today, both new-server submissions rather than merges of existing features:
- [**#4465 — Add Unbrowser remote MCP server**](https://github.com/docker/mcp-registry/pull/4465) (protostatis) — Chrome-free web discovery server for agents; closed after ~4 weeks open (created 2026-07-18).
- [**#2984 — Add gitlab-mcp-server entry**](https://github.com/docker/mcp-registry/pull/2984) (jmrplens) — Go-based GitLab MCP server covering REST v4 + GraphQL; closed after nearly 4 months open (created 2026-04-26).

Neither PR's close state (merged vs. rejected) is distinguishable from the data provided — worth confirming via the links above before treating either as a successful ship.

## 4. Community Hot Topics

No comment or reaction counts were available in today's data (all PRs show `Comments: undefined`, 👍: 0), so no engagement-based ranking can be produced. By submission recency and description, the most notable activity is a wave of new-server proposals filed within the last 24–48 hours:
- [**#4700 — Add Agent Guild remote MCP server**](https://github.com/docker/mcp-registry/pull/4700) — endpoint preflight, agent reputation, and payment-safety verification signals for agents.
- [**#4699 — Add MCP Code Review server**](https://github.com/docker/mcp-registry/pull/4699) — OWASP scanning, vulnerability/bug detection, N+1 query analysis for Claude Code/Cursor/Cline.
- [**#4698 — Add Mitosis remote MCP server**](https://github.com/docker/mcp-registry/pull/4698) — unified queryable memory graph over a user's email/calendar/docs/contacts/chat.

The underlying theme: submitters are increasingly targeting *agent infrastructure* (reputation, memory, code review) rather than simple API wrappers, suggesting the registry is maturing into a hub for higher-order agent tooling.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours (0 issues opened or updated).

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues today, but the pattern of incoming server PRs hints at where the ecosystem is heading:
- **Agent trust/reputation infrastructure** ([#4700](https://github.com/docker/mcp-registry/pull/4700)) — verifiable agent identity and payment safety.
- **Code quality tooling for coding agents** ([#4699](https://github.com/docker/mcp-registry/pull/4699)) — security-focused code review as an MCP capability.
- **Personal knowledge graphs** ([#4698](https://github.com/docker/mcp-registry/pull/4698)) — persistent cross-app memory for agents.
- **Vertical/niche data servers** ([#4697](https://github.com/docker/mcp-registry/pull/4697) SEO audit, [#4696](https://github.com/docker/mcp-registry/pull/4696) financial data, [#4695](https://github.com/docker/mcp-registry/pull/4695) Gemini access, [#4644](https://github.com/docker/mcp-registry/pull/4644) data-center/energy intelligence) — continued long-tail expansion into domain-specific integrations.

If current pace holds, expect the next registry update to add several of these remote/streamable-HTTP servers rather than any core registry feature changes.

## 7. User Feedback Summary

No direct user feedback (issue comments, reactions) surfaced today. Indirectly, the submission mix signals demand for: (a) trustworthy/verifiable agent-to-agent interaction primitives, (b) reducing agent tool sprawl by consolidating personal data into single memory servers, and (c) domain-specific "power tools" (SEO, financial data, code review) that save agents from ad-hoc scripting. No dissatisfaction signals are visible in this dataset.

## 8. Backlog Watch

Several PRs show a long gap between creation and last update, indicating maintainer attention may be needed:
- [**#788 — chore: update pin for omi**](https://github.com/docker/mcp-registry/pull/788) — open since 2025-11-26 (~8.5 months), automated bot PR still unmerged.
- [**#746 — chore: update pin for n8n**](https://github.com/docker/mcp-registry/pull/746) — open since 2025-11-21 (~8.5 months), same pattern.
- [**#4369 — chore: update pin for testkube**](https://github.com/docker/mcp-registry/pull/4369) and [**#4381 — chore: update pin for mongodb**](https://github.com/docker/mcp-registry/pull/4381) — both open over 5 weeks despite being routine automated pin bumps.
- [**#4591 — Add LinkedIn MCP Local server**](https://github.com/docker/mcp-registry/pull/4591) — open 2 weeks, no visible review activity.

The accumulation of stale `mcp-registry-bot` pin-update PRs (some nearing 9 months old) is the most notable backlog signal — these are typically low-risk/low-effort merges, and their persistence suggests routine-maintenance PRs are being deprioritized behind new-server review work.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

Today's Claude Plugins (official) digest.

## 1. Today's Overview

Claude Plugins (official) shows moderate, sustained maintenance activity with no new releases. Over the past 24h, 9 issues remain open (0 closed) and 6 PRs were closed/merged, dominated by routine automated SHA bumps (4 of 6). The bug-report volume is notably high for a single day — five substantive reliability/correctness issues surfaced across telegram, commit-commands, figma, skill-creator, and hookify plugins — suggesting active community stress-testing rather than a quiet period. One issue (#5369) is a spam/scam post (unauthorized "account" sales) and should be flagged for moderator removal.

## 2. Releases

None today.

## 3. Project Progress

- **#5374** — [fix(code-simplifier): add missing "of" in agent description](https://github.com/anthropics/claude-plugins-official/pull/5374) — trivial wording fix, merged/closed.
- **#5371** — [fix(commit-commands): make /clean_gone actually find and remove stale branches](https://github.com/anthropics/claude-plugins-official/pull/5371) — direct fix attempt for the `/clean_gone` detection bug reported in #2752; closed today (status as merged vs. rejected not distinguishable from the data — worth confirming, especially given #4740 flags a follow-on `-D` force-delete safety concern in the same code path).
- **#5373, #5370, #5366, #5367** — automated SHA bumps (`mattpocock-skills`, `sumup`, `stripe`, `superdesign`) — routine dependency validation via `claude plugin validate`, all closed.

## 4. Community Hot Topics

- **[#881 — Telegram plugin starts polling in non-channel instances, stealing updates](https://github.com/anthropics/claude-plugins-official/issues/881)** — 4 comments, 1 👍, open since March. The most-discussed item; indicates real friction for users running multiple Claude Code instances concurrently (VS Code + terminal), a common workflow.
- **[#2752 — /clean_gone never detects [gone] branches](https://github.com/anthropics/claude-plugins-official/issues/2752)** — 2 comments, actively being addressed (see PR #5371 above).
- **[#1440 — Figma plugin can't load fonts referenced by local text styles](https://github.com/anthropics/claude-plugins-official/issues/1440)** — 2 comments, 1 👍; affects design-tool integration reliability.

Underlying need: users want multi-instance/session safety and trustworthy automation (branch cleanup, font loading) that doesn't silently misbehave.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#4788 — Telegram plugin server.ts can hard-hang at 100% CPU, immune to SIGTERM, leaves zombie processes](https://github.com/anthropics/claude-plugins-official/issues/4788)** — **High severity**: unrecoverable resource exhaustion, bypasses all safety nets (watchdog, stdin handler, SIGTERM). No fix PR yet.
2. **[#881 — Telegram polling collision across instances, stealing updates](https://github.com/anthropics/claude-plugins-official/issues/881)** — **Medium-high**: silent data/message loss in multi-instance setups. No fix PR yet.
3. **[#4740 — /clean_gone fix risks unsafe `git branch -D` on squash-merge repos](https://github.com/anthropics/claude-plugins-official/issues/4740)** — **Medium**: a correctness/safety gap that could surface as soon as #2752/#5371 fixes land — flags potential data loss (force-deleted branches) if not addressed together.
4. **[#5368 — hookify not_contains rule always fires due to literal vs. regex mismatch](https://github.com/anthropics/claude-plugins-official/issues/5368)** — **Medium**: shipped example is broken out of the box, misleading new users.
5. **[#1440 — Figma font loading failure breaks text overrides](https://github.com/anthropics/claude-plugins-official/issues/1440)** — **Medium**: functional breakage for non-system fonts.
6. **[#5375 — skill-creator eval harness score is floored, plus per-run file leak](https://github.com/anthropics/claude-plugins-official/issues/5375)** — **Low-medium**: internal tooling correctness issue, affects skill-authoring feedback loop.

Two Telegram plugin bugs together (#881, #4788) point to a systemic reliability gap in that plugin's process lifecycle management.

## 6. Feature Requests & Roadmap Signals

No explicit new-feature requests today — activity is entirely bug-driven. The most likely near-term roadmap items, based on issue momentum:
- A `/clean_gone` correctness + safety fix (PR #5371 already in flight; #4740 suggests a follow-up hardening the delete strategy is likely next).
- Telegram plugin process-isolation/lifecycle fix (covering both #881 and #4788) is a strong candidate given severity, though no PR exists yet.

## 7. User Feedback Summary

- Pain points cluster around **automation reliability**: commands (`/clean_gone`) and background services (Telegram MCP) not behaving as documented, sometimes silently.
- **[#5372](https://github.com/anthropics/claude-plugins-official/issues/5372)** — a plugin author reports no status update on a marketplace submission ("Relevio") pending since July 18, a review-process/communication gap rather than a code bug.
- No explicit satisfaction signals today; feedback is skewed toward defect reports, consistent with a maintenance-heavy day.

## 8. Backlog Watch

- **[#881](https://github.com/anthropics/claude-plugins-official/issues/881)** — open since 2026-03-22 (~5 months), still unresolved despite engagement; the oldest and most-discussed open bug — needs maintainer triage.
- **[#5372](https://github.com/anthropics/claude-plugins-official/issues/5372)** — marketplace submission stuck in review since July 18 with zero response; a process/maintainer-attention gap rather than code.
- **[#5369](https://github.com/anthropics/claude-plugins-official/issues/5369)** — spam/scam content (unauthorized account sales, Chinese-language promotional post) should be closed/removed by moderators, not left in the issue queue.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest
**Date:** 2026-08-16 | **Source:** [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)

## 1. Today's Overview

Activity in the last 24 hours was driven entirely by community resource submissions rather than core repository engineering: 8 issues were updated (6 open, 2 closed), with zero PRs and zero new releases. This is consistent with the project's typical rhythm — it is a curated list, not a codebase, so its "activity" signal is submission throughput rather than commits. Volume is healthy (8 submissions/updates in a single day), spanning four categories: Tooling/Orchestrators, Skills, Alternative Clients, and Agent Orchestration. Comment counts are low across the board (0–2), indicating the maintainer/bot triage pipeline (`validation-passed`, `auto-closed` labels) is processing most submissions with minimal back-and-forth. No bugs, regressions, or stability issues were reported today, which is expected given the repo's nature as a link/metadata index.

## 2. Releases

None. No new releases in this window.

## 3. Project Progress

No PRs were merged or closed today (0 total). The only "closed" activity was on the issue side:
- **[#2534 mac-storage-cleaner](https://github.com/hesreallyhim/awesome-claude-code/issues/2534)** — closed after 2 comments, likely resolved/superseded by the resubmission at #2535 (see Backlog Watch below).
- **[#2537 fusegate](https://github.com/hesreallyhim/awesome-claude-code/issues/2537)** — closed via the `auto-closed` label, still carrying `validation-pending`, meaning it was auto-closed for stale/incomplete validation rather than accepted.

## 4. Community Hot Topics

Engagement today was uniformly light (max 2 comments per issue), so no item stands out as a genuine "hot topic." The two most-discussed:
- **[#2056 5dive](https://github.com/hesreallyhim/awesome-claude-code/issues/2056)** (2 comments) — a bash CLI orchestrator for Claude Code, open since 2026-06-17 and still being discussed nearly two months later, suggesting an unusually long validation cycle.
- **[#2508 claude-lifecycle](https://github.com/hesreallyhim/awesome-claude-code/issues/2508)** (2 comments) — a Skill that scores whether a project's analytics data actually supports a proposed change before generating anything, reflecting growing community interest in "guardrail" or verification-style skills rather than pure generation tools.

The underlying theme across today's batch is **orchestration and safety tooling** — three of the eight submissions (5dive, fusegate, Backbrief Kit) are about coordinating or constraining multi-agent/subagent behavior, suggesting the community is increasingly focused on managing agent sprawl rather than just adding capabilities.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. This is expected for a curated-list repository with no runtime code of its own.

## 6. Feature Requests & Roadmap Signals

No explicit roadmap/feature-request issues appeared today (all 8 items are `Resource` submissions, not feature requests against the list infrastructure itself). Indirectly, the submission mix signals where the ecosystem is heading:
- **Agent runaway control**: [#2537 fusegate](https://github.com/hesreallyhim/awesome-claude-code/issues/2537) (session policy engine blocking recursive spawning/token-budget overruns) and [#2539 Backbrief Kit](https://github.com/hesreallyhim/awesome-claude-code/issues/2539) (coordinated agent team plugin) both point to demand for multi-agent coordination/safety tooling as a maturing category.
- **Non-engineer-facing skills**: [#2536 Decoder](https://github.com/hesreallyhim/awesome-claude-code/issues/2536) (explains engineering concepts to PMs) suggests expanding interest in Claude Code skills aimed at non-developer stakeholders.
- **Native/mobile clients**: [#2540 BentoTerm](https://github.com/hesreallyhim/awesome-claude-code/issues/2540) (macOS/iPhone/iPad terminal for running multiple CLI agent sessions) signals continued appetite for alternative, cross-device front-ends beyond the official CLI.

If any of these are merged next, fusegate and Backbrief Kit are the most likely candidates to shape the "Agent Orchestration" category given the current emphasis on safety/coordination.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction commentary was captured in today's data (comment threads are short and mostly procedural/validation-related). Indirectly, submitted tool descriptions hint at real pain points the community is solving for:
- **Fear of unsafe agent-driven deletions** — both mac-storage-cleaner submissions ([#2534](https://github.com/hesreallyhim/awesome-claude-code/issues/2534)/[#2535](https://github.com/hesreallyhim/awesome-claude-code/issues/2535)) emphasize "preview every deletion before it runs," implying users want stronger confirmation/guardrails before destructive local operations.
- **Agent runaway anxiety** — fusegate's explicit targeting of "recursive spawning" and "token-budget overruns" suggests real-world cost/control incidents are motivating this category.

## 8. Backlog Watch

- **[#2056 5dive](https://github.com/hesreallyhim/awesome-claude-code/issues/2056)** — open since 2026-06-17 (~2 months), still only at 2 comments and unresolved. Given the `validation-passed` label is already applied, the delay may just be queue backlog rather than a blocker — worth a maintainer nudge if it's been sitting merge-ready this long.
- **[#2535 mac-storage-cleaner](https://github.com/hesreallyhim/awesome-claude-code/issues/2535)** — appears to duplicate the just-closed [#2534](https://github.com/hesreallyhim/awesome-claude-code/issues/2534) (same author, same day). Needs maintainer attention to confirm whether #2535 supersedes #2534 or if one should be closed as a duplicate to avoid a double listing.
- **[#2537 fusegate](https://github.com/hesreallyhim/awesome-claude-code/issues/2537)** — auto-closed while still carrying `validation-pending`; the author may not be aware it needs resubmission or additional info to proceed.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**Date:** 2026-08-16 | **Source:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview

Activity in the last 24h was entirely PR-driven: 9 pull requests touched, all of them skill-listing submissions ("Add skill: ..."), with zero issues and zero new releases. Two PRs remain open, and seven were closed — six of which had sat for 7 to 22 days under a `[PR-in-review]` tag before being resolved on 2026-08-15, suggesting a maintainer batch-review pass rather than organic daily churn. This is consistent with the project's nature as a curated, community-submission-driven awesome-list rather than a software repo with its own release cadence — there is no code shipping, so "activity" here means curation throughput. Overall health signal: moderate — submission volume is healthy, but the backlog of long-pending PRs getting cleared in one sweep points to review capacity being the bottleneck rather than lack of contributor interest.

## 2. Releases

None — this repository does not cut versioned releases; it is a continuously updated Markdown list.

## 3. Project Progress

Seven PRs closed today, all list-curation submissions. Note: "closed" is not confirmed as "merged" from the available data — several still carry the `[PR-in-review]` tag in their title, which may indicate rejection/superseding rather than acceptance. Worth a manual check by maintainers if these titles weren't cleaned up post-merge.

- [#906](https://github.com/VoltAgent/awesome-agent-skills/pull/906) — `sandbaseai/sandbase`, closed same day it was opened (fast turnaround, likely straightforward accept or quick reject).
- [#861](https://github.com/VoltAgent/awesome-agent-skills/pull/861) — `JOYLINK-LTD/lacuna-music` (AI music generation skill), open 15 days.
- [#843](https://github.com/VoltAgent/awesome-agent-skills/pull/843) — `AceDataCloud/skills`, a **resubmission of #268** after being rejected in March for insufficient maturity; closed after 20 days, worth checking if it was accepted this time given the explicit "matured since March" argument in the PR body.
- [#881](https://github.com/VoltAgent/awesome-agent-skills/pull/881) — `product-on-purpose/pm-skills`, 10 product-management skills, open 7 days.
- [#837](https://github.com/VoltAgent/awesome-agent-skills/pull/837) — private voice-recording/clinic-report workflow skill, open 22 days.
- [#836](https://github.com/VoltAgent/awesome-agent-skills/pull/836) — `e2e-skills` (Playwright/Cypress test-quality skills), notable for citing concrete adoption evidence (14 merged test-fix PRs across OSS repos incl. Storybook, code-server), open 22 days.
- [#841](https://github.com/VoltAgent/awesome-agent-skills/pull/841) — `claude-real-video`, scene-aware video keyframe/transcript skill, open 20 days.

## 4. Community Hot Topics

No comment/reaction data was available for any item (all show `undefined` comments, 0 👍), so engagement ranking isn't possible from this data. By content, the most substantively documented submission is [#836 e2e-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/836), which stands out for including measurable downstream adoption (14 merged fixes in real OSS test suites) rather than just a description — this is the strongest signal of underlying demand for **test-quality / anti-pattern-detection skills** in the ecosystem. [#843 AceDataCloud/skills](https://github.com/VoltAgent/awesome-agent-skills/pull/843) is notable as a persistence case — a rejected submission returning four months later with a maturity argument, hinting at demand for clearer re-submission guidance in CONTRIBUTING.

## 5. Bugs & Stability

None reported in this window — 0 open issues, and no bug reports among the tracked PRs/issues data.

## 6. Feature Requests & Roadmap Signals

No direct feature-request issues were filed today. Indirect roadmap signals from PR content:
- Recurring theme of **memory/context-persistence skills** ([#908 thedotmack/claude-mem](https://github.com/VoltAgent/awesome-agent-skills/pull/908) explicitly positions itself alongside three existing entries in that category), suggesting the list's "Context Engineering" section is becoming a hot growth area worth a dedicated sub-taxonomy if it isn't already split further.
- Repeated **testing/e2e** and **video/media** skill submissions ([#836](https://github.com/VoltAgent/awesome-agent-skills/pull/836), [#841](https://github.com/VoltAgent/awesome-agent-skills/pull/841)) point to those two domains as active areas where new skills are likely to keep landing next cycle.

## 7. User Feedback Summary

No direct user satisfaction/dissatisfaction commentary is present in this data (no issue threads, no PR review comments captured). The closest proxy is contributor-authored context: the [#843](https://github.com/VoltAgent/awesome-agent-skills/pull/843) resubmission implicitly signals frustration with an earlier rejection, while [#836](https://github.com/VoltAgent/awesome-agent-skills/pull/836)'s inclusion of real-world adoption metrics suggests contributors are self-aware that "does it actually get used" is a bar maintainers apply — a useful norm worth making explicit in CONTRIBUTING if not already.

## 8. Backlog Watch

The batch-clearing pattern is itself the main signal: six PRs aged 15–22 days were resolved in a single day (2026-08-15), indicating maintainer review happens in infrequent sweeps rather than continuously. Two PRs remain open and should be watched for how long they take to clear:
- [#909 5dive-ai/skills](https://github.com/VoltAgent/awesome-agent-skills/pull/909) — opened today, too early to flag.
- [#908 thedotmack/claude-mem](https://github.com/VoltAgent/awesome-agent-skills/pull/908) — opened yesterday, low risk currently but worth tracking if it crosses the ~2-week mark seen in the just-cleared batch.

No long-idle open issues exist since there are zero open issues in the tracked window.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# MCP Ecosystem Digest 2026-09-18

> Issues: 2 | PRs: 14 | Projects covered: 7 | Generated: 2026-09-18 12:02 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest: 2026-09-18

## 1. Today's Overview

MCP Servers remains in high-churn maintenance mode: 0 new releases, only 2 issues updated (both pre-existing, unresolved), but 14 PRs touched in the last 24h — 13 still open and 1 closed (a spam PR, not a merge). Activity is concentrated almost entirely on the contributor side: a wave of small, well-scoped bugfix PRs against `filesystem`, `git`, `memory`, `everything`, `time`, and Docker packaging, several opened same-day (2026-09-18). No PRs actually merged today, so the backlog of open fixes continues to grow faster than it's being reviewed — the project looks active in contribution volume but slow in triage/merge throughput.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or substantively closed today. The only closed item was [#4821](https://github.com/modelcontextprotocol/servers/pull/4821) ("Add NEXUS-AI Marketplace to community servers"), closed as unwanted/spam (labeled `readme: pending`, links to a suspicious `trycloudflare.com` MCP manifest URL rather than a legitimate repo) — not real progress, just backlog cleanup.

Substantial fix work is queued but unmerged, spanning:
- **Filesystem correctness**: in-place writes to preserve inode/birthtime ([#4515](https://github.com/modelcontextprotocol/servers/pull/4515), [#4516](https://github.com/modelcontextprotocol/servers/pull/4516)), write-verification ([#4274](https://github.com/modelcontextprotocol/servers/pull/4274)), edit-indentation bug ([#4823](https://github.com/modelcontextprotocol/servers/pull/4823))
- **Git server correctness**: percent-encoded root URIs ([#4824](https://github.com/modelcontextprotocol/servers/pull/4824)), `/dev/null` diff naming for added/deleted files ([#4822](https://github.com/modelcontextprotocol/servers/pull/4822)), detached HEAD reporting ([#4805](https://github.com/modelcontextprotocol/servers/pull/4805)), revision-range support in `git_diff` ([#4815](https://github.com/modelcontextprotocol/servers/pull/4815))
- **Other servers**: `everything` roots-cache cleanup ([#4825](https://github.com/modelcontextprotocol/servers/pull/4825)), `time` server swallowing `McpError` ([#4820](https://github.com/modelcontextprotocol/servers/pull/4820)), `memory` duplicate-observation dedup gap ([#4819](https://github.com/modelcontextprotocol/servers/pull/4819)), Docker containers not actually dropping to non-root user ([#4783](https://github.com/modelcontextprotocol/servers/pull/4783)), incorrect tool annotations on `sequentialthinking` ([#4784](https://github.com/modelcontextprotocol/servers/pull/4784))

## 4. Community Hot Topics

- [#1469](https://github.com/modelcontextprotocol/servers/issues/1469) — "Unable to start the MCP File System in Windows" (10 comments, open since 2025-04-17, still updated today). By far the most-discussed item in this window; a long-running Windows compatibility pain point for `server-filesystem` that has resisted resolution for over a year.
- [#2794](https://github.com/modelcontextprotocol/servers/issues/2794) — "No tools detected for filesystem when using Docker" (1 comment). Points to a recurring theme: `filesystem` server setup/discovery friction across non-native environments (Windows, Docker), suggesting onboarding/packaging is a weaker point than the server logic itself.

Underlying need: users want the `filesystem` server to "just work" across platforms and container setups without manual debugging — this is a trust/first-run-experience gap, not a core feature gap.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **Data integrity — write path silently loses bytes** ([#4274](https://github.com/modelcontextprotocol/servers/pull/4274)): `write_file` could report success with zero bytes actually written, with no way for the client to detect it. High severity (silent data loss). Fix PR open, unmerged.
2. **Data integrity — inode/birthtime destruction on every write** ([#4515](https://github.com/modelcontextprotocol/servers/pull/4515), [#4516](https://github.com/modelcontextprotocol/servers/pull/4516)): temp-file+rename strategy breaks hard links, inode-based watchers, and file creation timestamps on every edit. Two competing/duplicate fix PRs exist — needs maintainer to pick one.
3. **Platform breakage — Windows filesystem server won't start** ([#1469](https://github.com/modelcontextprotocol/servers/issues/1469)): open 5+ months, unresolved, no linked fix PR.
4. **Security — containers run as root** ([#4783](https://github.com/modelcontextprotocol/servers/pull/4783)): `USER` directive dead code in Dockerfiles for `fetch`/`git`/`time`/Node images since #2205 — all containers run as UID 0 despite appearing to drop privileges. Fix PR open.
5. **Correctness — git diff mislabels added/deleted files as literal "None"** ([#4822](https://github.com/modelcontextprotocol/servers/pull/4822)): cosmetic-but-confusing output bug. Fix open.
6. **Discovery bug — Docker filesystem tools not detected** ([#2794](https://github.com/modelcontextprotocol/servers/issues/2794)): no linked fix PR yet.
7. Minor edit-formatting bug in filesystem's `applyFileEdits` ([#4823](https://github.com/modelcontextprotocol/servers/pull/4823)) and error-swallowing in `time`/`McpError` handling ([#4820](https://github.com/modelcontextprotocol/servers/pull/4820)).

## 6. Feature Requests & Roadmap Signals

No net-new feature requests in today's window — all activity is bugfix/hardening PRs, not new capability asks. If a "next version" ships soon, likely candidates based on PR maturity and severity are: the filesystem write-integrity fixes (#4274, #4515/#4516 — pick one), the git root-URI/diff fixes (#4822, #4824), and the Docker non-root fix (#4783), since these address correctness/security rather than opinionated design choices and are lower-risk to merge.

## 7. User Feedback Summary

- Recurring pain point: filesystem server setup failures on Windows and Docker — both are environment/config issues rather than logic bugs, but they block first-time users entirely.
- Power-user/advanced pain point (surfaced via PR authors, not issue reporters): data-integrity assumptions broken by the write-then-rename pattern — affects users relying on hard links, file watchers (e.g., editors, sync tools), or exact timestamps, a more sophisticated but higher-stakes complaint.
- Security-conscious users/operators would be concerned by the Docker root-user issue if aware of it — currently undiscovered by end users, only caught by a contributor auditing the Dockerfiles.
- No explicit satisfaction signals (no positive feedback/issues) in this 24h window — all signal is problem reports.

## 8. Backlog Watch

- [#1469](https://github.com/modelcontextprotocol/servers/issues/1469) — Windows filesystem startup failure, open **5+ months**, 10 comments, no maintainer resolution or linked fix. Highest-priority backlog item given age, comment volume, and platform-breaking severity.
- Duplicate/competing PRs [#4515](https://github.com/modelcontextprotocol/servers/pull/4515) and [#4516](https://github.com/modelcontextprotocol/servers/pull/4516) (both fixing the same in-place-write issue) need maintainer triage to avoid wasted contributor effort — open since 2026-07-11, over two months without resolution.
- [#4274](https://github.com/modelcontextprotocol/servers/pull/4274) — silent write-failure fix, open since 2026-06-01 (~3.5 months), addresses a data-loss bug with no workaround; merits priority review.
- [#4783](https://github.com/modelcontextprotocol/servers/pull/4783) — Docker non-root security fix, open since 2026-09-09; security-relevant PRs like this typically warrant faster turnaround.

---

## Cross-Ecosystem Comparison

# MCP & AI Agent Ecosystem — Cross-Project Comparison
**Date:** 2026-09-18

## 1. Ecosystem Overview

The MCP/agent ecosystem shows two distinct velocity classes operating side by side. Foundational infrastructure repos (MCP Servers, MCP Registry) are in slow, deliberate hardening mode — small PR counts, heavy emphasis on correctness, security and trust-signaling as the protocol matures toward production reliability. Curation/discovery repos (Awesome MCP Servers, Docker MCP Registry, Claude Plugins) are experiencing a submission firehose — 50-115 PR touches per day — driven by third-party server authors self-listing, with maintainer review capacity now the visible bottleneck rather than community interest. Community-facing skill/resource lists (Awesome Claude Code, Awesome Agent Skills) show low-volume but thematically coherent growth, concentrated around memory/context persistence and vertical-specific "skill packs." Across nearly all seven projects, the same undercurrent recurs: as the ecosystem scales past early-adopter volume, **trust, provenance, and verifiable safety of third-party MCP servers** is emerging as the dominant unsolved problem — not new protocol features.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Health Score* |
|---|---|---|---|---|---|
| MCP Servers | 2 (0 resolved) | 14 (1 closed, spam) | 1/14 | None | 🟡 Active, low throughput |
| MCP Registry (official) | 2 (0 resolved) | 4 (1 closed, invalid) | 1/4 | None | 🟡 Stable, governance-focused |
| Awesome MCP Servers | 0 | 115 (34 merged/closed) | 34/115 | N/A (list) | 🟢 High volume, saturated review |
| Docker MCP Registry | 0 | 50 (0 closed) | 0/50 | None | 🔴 Backlog risk — zero throughput |
| Claude Plugins (official) | 7 (0 resolved) | 50 (~15 merged) | ~15/50 | None | 🟢 Active, bot-assisted maintenance |
| Awesome Claude Code | 6 (0 resolved) | 0 | 0/0 | None | 🟡 Stable, curation-only |
| Awesome Agent Skills | 0 | 3 (0 resolved) | 0/3 | None | 🟡 Early-stage, low volume |

*Health score reflects review throughput relative to submission volume, not absolute activity — e.g., Docker MCP Registry's 0/50 merge rate is a red flag despite high nominal activity.

## 3. MCP Servers's Position

**Advantages vs. peers:** As the reference implementation repo (not a curated list), MCP Servers carries disproportionate weight — bugs here (e.g., silent write failures, inode-destroying writes) ripple downstream into every client and registry that assumes correct reference behavior. Its issue #1469 (Windows filesystem startup, 5+ months open, 10 comments) is the single most-discussed correctness problem across the *entire* sampled ecosystem, exceeding even MCP Registry's #82 trust-signature discussion in urgency (platform-breaking vs. long-term design).

**Technical approach differences:** Unlike the awesome-list repos (pure Markdown curation) or Docker/Claude Plugins registries (submission intake + validation pipelines), MCP Servers is the only repo doing genuine application-logic engineering — filesystem semantics, git diff correctness, Docker privilege dropping. This makes its bug backlog qualitatively different: data-integrity and security defects (root-user containers, silent data loss) rather than metadata/listing accuracy issues.

**Community size comparison:** By PR volume, MCP Servers (14/day) is dwarfed by Awesome MCP Servers (115/day) and Docker MCP Registry (50/day) — but those numbers reflect low-friction "add my server" submissions, not comparable engineering effort. MCP Servers' 14 PRs are almost all substantive multi-file bugfixes, making its actual contributor engineering depth likely the highest of the seven despite the smallest raw count.

## 4. Shared Technical Focus Areas

- **Trust/provenance for third-party servers** — MCP Registry (#82 tool-poisoning fingerprints, 19 comments/16 months; #1404 security-scan metadata extension) and Claude Plugins (#5655/#6256 SLSA provenance generation) are independently converging on the same need: verifiable signals before a server/plugin is installed or invoked.
- **Cross-platform reliability, especially Windows** — MCP Servers (#1469, filesystem won't start on Windows) and Claude Plugins (#6251/#6249, security-guidance plugin broken on Windows MSIX) both report platform-specific breakage as their top or near-top severity bug, independently.
- **Persistent/local memory for agents** — Awesome Claude Code (#2161 PLUR, #2869 CGIS/codegraph-brain, #2872 Grounder) shows three separate submissions targeting durable cross-session memory, the clearest single thematic cluster in this dataset.
- **Standardized remote-auth conventions** — Docker MCP Registry shows multiple concurrent submissions (Nilyo, TAPAC, MobOpinions) independently implementing OAuth 2.1 + Dynamic Client Registration, suggesting de facto convergence on a remote-server auth pattern ahead of any formal spec.
- **Automated/bot-driven submission handling** — Awesome MCP Servers (🤖-tagged bulk submissions) and Claude Plugins (github-actions SHA-bump PRs) both show maintainers needing policy/tooling to triage automated or templated contributions separately from organic ones.

## 5. Differentiation Analysis

| Dimension | MCP Servers / Registry | Awesome-list repos | Docker / Claude Plugins registries |
|---|---|---|---|
| **Feature focus** | Protocol correctness, security hardening | Discoverability, curation accuracy | Submission intake, provenance, auth standardization |
| **Target users** | Server implementers, protocol adopters | End users browsing for tools | Server authors seeking distribution |
| **Technical architecture** | Reference server implementations (Node/TS) | Static Markdown, no code | Registry APIs + automated validation pipelines |
| **Primary risk** | Data-integrity/security bugs in shipped code | Curation quality decay (duplicates, stale links) | Review bottleneck vs. submission volume |

The clearest architectural split is between repos that *ship executable code* (MCP Servers, Claude Plugins' hookify/commit-commands) versus repos that are *pure listings* (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills, Docker/MCP Registry's server.json entries) — the former accumulate correctness bugs, the latter accumulate triage/staleness debt.

## 6. Community Momentum & Maturity

- **Rapidly iterating, contribution-flooded:** Awesome MCP Servers (115 PR touches), Docker MCP Registry (50, zero merges — flag), Claude Plugins (50, bot-assisted). These are in a growth phase where submission volume outpaces maintainer bandwidth.
- **Stabilizing, hardening-focused:** MCP Servers and MCP Registry (official) — low PR counts but high-severity, long-lived correctness/security work (data loss, root containers, tool-poisoning defenses). This is the pattern of a maturing protocol moving from "add features" to "make it trustworthy."
- **Early-stage, low-volume but thematically sharp:** Awesome Claude Code and Awesome Agent Skills — small daily activity, but submissions cluster tightly around emerging needs (memory persistence, vertical skills), suggesting these lists are still defining their category boundaries rather than just accumulating entries.
- **Backlog-risk outlier:** Docker MCP Registry's 0/50 merge rate alongside PRs idle since 2025-11-07 (~10.5 months) is the starkest maturity red flag in the dataset — either a broken auto-merge pipeline or a critically under-resourced review process.

## 7. Trend Signals

1. **Trust infrastructure is becoming the ecosystem's shared bottleneck.** Independent, concurrent work on tool-poisoning defenses (MCP Registry #82), security-scan metadata (#1404), and SLSA provenance (Claude Plugins #5655/#6256) signals that "can I trust this third-party MCP server/plugin before running it" is now a cross-cutting concern rather than one project's roadmap item. Developers building agent platforms should plan for a provenance/verification layer, not assume registries provide it yet.
2. **Remote-hosted MCP servers with OAuth 2.1 + DCR are becoming the default distribution pattern**, ahead of any single spec mandating it (Docker MCP Registry). Teams building MCP clients should prioritize robust OAuth/dynamic-registration support now.
3. **Platform parity (especially Windows) remains a recurring, underinvested gap** across unrelated projects (MCP Servers, Claude Plugins) — a signal that agent tooling built Unix/macOS-first continues to leak edge cases into production for Windows users; worth explicit test coverage for teams shipping cross-platform agent tools.
4. **Review/triage capacity, not contributor interest, is the binding constraint on ecosystem growth.** Every high-volume repo in this sample (Awesome MCP Servers, Docker MCP Registry, Claude Plugins) shows submission rates far exceeding merge rates — automation for validation and staged/tiered review is likely to become a standard registry feature.
5. **Durable, local-first agent memory is a maturing but still-fragmented category** (three independent submissions in Awesome Claude Code alone) — no dominant standard yet, suggesting room for a reference implementation or spec to emerge, similar to how MCP itself standardized tool-calling.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Project Digest
**Date:** 2026-09-18 | **Source:** [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview

Activity over the last 24h is light but steady: 2 issues touched (both still open) and 4 PRs touched (1 closed as invalid, 3 open). No new releases shipped. The mix skews toward maintenance and governance — a long-running security/trust proposal (#82), an access-control bug report (#1649), a docs fix, a UI enhancement, and a security-metadata extension PR. Nothing indicates instability in the registry itself; the closed PR was a spam/invalid submission rather than a rejected feature. Overall: a quiet, governance-and-hardening-focused day rather than a feature-shipping one.

## 2. Releases

None in the last 24h.

## 3. Project Progress

Only one PR resolved today, and it wasn't a merge:

- **[#1650 - Create io.github.trencinodin-stack.arcstone-mcp-sidecar.json](https://github.com/modelcontextprotocol/registry/pull/1650)** (CLOSED, tagged `[invalid]`) — A server-config submission via PR rather than the proper publishing flow (`mcp-publisher`). Closed without merging, likely because server entries are expected to go through the registry's publish API/CLI, not raw PRs against the repo. No underlying feature work advanced today.

## 4. Community Hot Topics

- **[#82 - Preventing tool poisoning: save signatures of possible tool calls](https://github.com/modelcontextprotocol/registry/issues/82)** — By far the most engaged item (19 comments, open since May 2025, still active as of yesterday). Proposes that `server.json` submitters declare/fingerprint all possible tool calls their server may invoke, enabling third-party vetting and client-side verification against tool poisoning/supply-chain attacks. Explicitly flagged "not a go-live blocker," but the sustained discussion (16+ months) signals this is a core trust/security concern for the registry's long-term model — likely to resurface as adoption grows and abuse vectors become real rather than theoretical.
- **[#1404 - Add optional security-scan receipt `_meta` extension (v1)](https://github.com/modelcontextprotocol/registry/pull/1404)** — A converged multi-contributor design (credited discussion with two other users) resolving #1273, adding an opt-in `io.modelcontextprotocol.registry/security-scan` metadata field. This is directly complementary to #82's fingerprinting idea — both point to the same underlying need: **verifiable trust signals for third-party MCP servers before they're installed/invoked.**

## 5. Bugs & Stability

- **[#1649 - Publish 403s for org namespace despite Owner role + public membership](https://github.com/modelcontextprotocol/registry/issues/1649)** (opened 2026-09-17, no comments yet) — Moderate severity, access-control bug. `mcp-publisher publish` rejects publishing to an `io.github.<org>/*` namespace even when the user is the org's sole Owner with public membership, contradicting documented prerequisites in `authentication.mdx`. This blocks legitimate publishers outright (hard failure, not a UX nuisance) and has no fix PR yet — worth prioritizing since it's a functional blocker for new org-scoped publishers.

No crashes or regressions reported; the only other bug-adjacent signal is #82, which is a security-hardening gap rather than an active exploit report.

## 6. Feature Requests & Roadmap Signals

- **[#1277 - feat(ui): support serving under a subpath via `MCP_REGISTRY_UI_BASE_PATH`](https://github.com/modelcontextprotocol/registry/pull/1277)** — Adds reverse-proxy/subpath deployment support for the registry UI, consistent with the pattern used by registry.modelcontextprotocol.io. Low-risk, self-contained infra improvement — a reasonable near-term merge candidate given no controversy and clear scoping.
- **[#1404](https://github.com/modelcontextprotocol/registry/pull/1404)** (security-scan `_meta` extension) — Given it's a converged, multi-party-reviewed v1 design resolving an existing tracked issue (#1273), this is the strongest candidate for the next release among today's items.
- **#82's fingerprinting proposal** remains a larger, unscoped roadmap item — more likely to inform a future RFC/design doc than ship as a discrete PR soon.

## 7. User Feedback Summary

- **Pain point:** Org-namespace publishing is broken for at least one real user (#1649), despite following documented steps exactly — a credibility/trust issue for the publishing flow's docs-to-behavior consistency.
- **Pain point:** Documentation friction — [#1648](https://github.com/modelcontextprotocol/registry/pull/1648) fixes broken links in `quickstart.mdx` (missing `.mdx` extensions), a small but real onboarding papercut caught and fixed by a community contributor.
- **Trust/security sentiment:** The sustained multi-month engagement on #82, plus the converged design work on #1404, indicates users and contributors care significantly about supply-chain trust in the registry — this is a recurring theme rather than a one-off request.
- No explicit satisfaction signals (e.g., positive reactions) beyond a single 👍 on #82; overall feedback volume is low but substantive.

## 8. Backlog Watch

- **[#82](https://github.com/modelcontextprotocol/registry/issues/82)** — Open 16+ months with 19 comments and continued activity; despite being explicitly deprioritized as "not a go-live blocker," its longevity and engagement suggest it deserves a maintainer decision (accept design / defer formally / close) rather than indefinite open-ended discussion.
- **[#1649](https://github.com/modelcontextprotocol/registry/issues/1649)** — Brand new (opened yesterday) but represents a hard functional blocker for org-scoped publishers; flag for fast maintainer triage before it accumulates duplicate reports.
- **[#1404](https://github.com/modelcontextprotocol/registry/pull/1404)** — Has multi-contributor consensus behind it already; sitting idle risks losing that alignment. Good candidate for expedited review given the design work is largely done upstream in #1273's discussion.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest
**Date:** 2026-09-18 | **Source:** github.com/punkpeye/awesome-mcp-servers

## 1. Today's Overview

Awesome MCP Servers remains an extremely high-throughput curation repo rather than a traditional codebase: today's window shows **zero issue activity** but **115 PR updates** (81 open, 34 merged/closed), essentially all of them "Add X MCP server" submissions rather than code changes to the list's tooling. This volume reflects the continued explosion of third-party MCP server implementations rather than any instability in the project itself — there is no release activity because the repo is a curated Markdown list, not a versioned package. Activity is healthy by volume but shallow by engagement: none of the sampled top-20 PRs (even the "top by comment count") show visible discussion, and reaction counts are at zero across the board, suggesting maintainer review is the bottleneck rather than community debate. Overall project health reads as **stable but saturated** — a firehose of submissions with thin visible triage signal in this data slice.

## 2. Releases

None. This repo does not tag releases; new content ships via merged PRs directly into the README.

## 3. Project Progress

34 PRs were merged/closed today, but the sampled data surfaces mostly one substantive fix among the additions:

- **[#10904](https://github.com/punkpeye/awesome-mcp-servers/pull/10904)** *(CLOSED — labeled `duplicate`, `manual-review`)* — "Fix Bernstein entry: adapter count and Glama badge namespace." Corrects a factual inaccuracy (37 → 40+ CLI coding agent adapters) and a Glama badge namespace issue in an existing entry. Notable as one of the few PRs in this window that improves existing content rather than adding new listings; it was closed as duplicate, implying the fix landed via another PR or direct edit.
- The remainder of closed/merged PRs in the 115-count are presumed to be routine new-entry additions following the standard "Add X to [Category]" pattern — the underlying data doesn't distinguish which of the 34 closed PRs were merged vs. rejected, which is itself worth flagging (see Backlog Watch).

## 4. Community Hot Topics

No PR or issue in the sampled top-20 shows meaningful comment or reaction activity — all entries report `👍: 0` and undefined/no comment counts. This is atypical for a "top by comments" sample and suggests either:
- The bot-driven submission pipeline (note the recurring `🤖🤖🤖` markers, e.g. [#14650](https://github.com/punkpeye/awesome-mcp-servers/pull/14650), [#14648](https://github.com/punkpeye/awesome-mcp-servers/pull/14648), [#11930](https://github.com/punkpeye/awesome-mcp-servers/pull/11930)) is producing largely unreviewed, undiscussed submissions, or
- Comment/reaction data wasn't fully populated in this fetch.

The closest thing to a "hot topic" is the sheer density of same-day submissions from automated/templated tooling — 6+ PRs opened by `xiongxingzhe` alone today across Gaming, Developer Tools, and Finance & Fintech categories ([#14645](https://github.com/punkpeye/awesome-mcp-servers/pull/14645), [#14644](https://github.com/punkpeye/awesome-mcp-servers/pull/14644), [#14638](https://github.com/punkpeye/awesome-mcp-servers/pull/14638), [#14640](https://github.com/punkpeye/awesome-mcp-servers/pull/14640)), pointing to bulk/automated MCP server generation as an emerging submission pattern maintainers will need a policy for.

## 5. Bugs & Stability

No crash reports, regressions, or stability bugs were reported today (0 issues total). The only "bug-like" item is the factual-correction PR [#10904](https://github.com/punkpeye/awesome-mcp-servers/pull/10904) (metadata accuracy, not functional breakage), which appears resolved. No open severity-ranked defects to report — consistent with this repo's nature as a link/metadata list rather than executable software.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. Indirect roadmap signals from PR patterns:
- **Automated/bulk submission handling**: the volume of `🤖🤖🤖`-tagged and same-author multi-PR submissions (e.g., `xiongxingzhe`'s 4 same-day PRs) suggests the maintainers may need tooling or policy for rate-limiting or batch-reviewing bot-assisted submissions — likely candidate for a CONTRIBUTING.md update or PR template enforcement rather than a "feature."
- **Glama badge / registry validation**: multiple PRs carry `has-glama` / `missing-glama` labels automatically (e.g., [#14651](https://github.com/punkpeye/awesome-mcp-servers/pull/14651), [#14649](https://github.com/punkpeye/awesome-mcp-servers/pull/14649)), indicating an existing automated linting step for registry verification — likely to be tightened further given the correction seen in #10904.

## 7. User Feedback Summary

No direct user feedback (issues, discussions) surfaced today. Submitter-side signal from PR descriptions shows a clear pattern: contributors are overwhelmingly *server authors self-listing their own projects* (official/first-party MCP servers for products like Presend, SmartAgent CRM, SecObserve, eSIMfly, eSIMfly, DevDome, ReceiptRail, Scalekit, etc.), not end-users reporting on server quality. This confirms the repo's role as a marketing/discovery channel for MCP server authors rather than a community-curated quality list — pain points around curation rigor (duplicate/incorrect entries, as in #10904) are the main quality signal visible.

## 8. Backlog Watch

- **[#13695](https://github.com/punkpeye/awesome-mcp-servers/pull/13695)** — "Add DevDome analytics MCP server" — open since 2026-09-05, still unmerged after 13 days despite an update today; worth maintainer attention given its age relative to same-day PRs already being processed.
- **[#11930](https://github.com/punkpeye/awesome-mcp-servers/pull/11930)** — "Add iflytek/dolphin-mcp-pilot" — open since 2026-08-11 (38+ days), one of the oldest open PRs in this sample; a substantive addition (Apache DolphinScheduler integration, 58 tools) that appears stalled in review.
- **[#13077](https://github.com/punkpeye/awesome-mcp-servers/pull/13077)** — "Add kontragentpro-mcp" — open since 2026-08-28 (21+ days), still pending.
- **[#14329](https://github.com/punkpeye/awesome-mcp-servers/pull/14329)** — "Add eSimfly-Official/esimfly-mcp" — open since 2026-09-13, 5 days and counting.

These aging PRs, contrasted with same-day submissions and merges, suggest review capacity — not submission volume — is the primary constraint on this repo's throughput. A triage/labeling pass to distinguish "needs maintainer review" from "needs contributor follow-up" would likely reduce backlog age.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date: 2026-09-18**

## 1. Today's Overview

Activity today was PR-driven with zero issue activity and zero releases. Of the 50 PRs updated in the last 24 hours, none were merged or closed — all 50 remain open, indicating a submission/review backlog rather than active resolution. The PR mix splits into two distinct populations: a steady stream of new third-party MCP server submissions (remote servers with OAuth/API-key auth being the dominant pattern) and a long tail of automated `mcp-registry-bot[bot]` "update pin" PRs, some open since **2025-11-07** (over 10 months). Overall project health signal: healthy submission volume from the community, but a maintainer review/merge bottleneck is visible given zero closures against 50 open PRs.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours (0 of 50 updated PRs). No feature or fix advanced to completion today — all recorded activity is at the "open/updated" stage (new submissions or automated pin refreshes touching the timestamp without landing).

## 4. Community Hot Topics

Reaction/comment data was not populated in this pull (`Comments: undefined`, 👍: 0 across all items), so there is no distinguishable "hot topic" by engagement metrics today. Ranked instead by recency and submission type, the most notable activity is the cluster of new remote MCP server PRs submitted same-day:

- [#5146 Add MobOpinions Survey Light remote MCP server (OAuth)](docker/mcp-registry PR #5146) — survey-building assistant server
- [#5145 Add AdTest.AI (adtest) MCP server](docker/mcp-registry PR #5145) — ad-effectiveness scoring tool
- [#5144 Add Nilyo remote MCP server](docker/mcp-registry PR #5144) — OAuth 2.1 + Dynamic Client Registration
- [#5143 Add TAPAC — remote MCP server for verified B2B contacts](docker/mcp-registry PR #5143)
- [#5142 Add Derrick remote MCP server](docker/mcp-registry PR #5142) — B2B data enrichment

Underlying need: a clear surge in **remote/hosted MCP server submissions with standardized OAuth 2.1 + Dynamic Client Registration patterns** (Nilyo, TAPAC), suggesting the ecosystem is converging on a common remote-auth convention worth documenting/enforcing in registry submission guidelines.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were logged today (0 issues updated in the last 24h). No stability signal to rank.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. However, submission patterns hint at roadmap-relevant signals:
- Multiple PRs (#5144 Nilyo, #5146 MobOpinions) implement full OAuth 2.1 + PKCE + `.well-known/oauth-authorization-server` discovery — likely candidates for becoming the **reference pattern** for remote server auth in registry docs/tooling.
- Continued volume of "remote (hosted) MCP server" additions (#4924 DevDome, #5142–#5146) suggests the registry's next milestone may be tooling to validate remote endpoints automatically at submission time, given the manual verification described in several PR bodies (e.g., #5143's manual `initialize` protocol-version check).

## 7. User Feedback Summary

No direct user feedback (issues, satisfaction signals) was recorded in the last 24h. From PR submission content, contributors are self-reporting thorough compliance work (empty `tools.json` per remote-server convention, protocol-version verification, documented auth flows), suggesting the contribution guidelines are being followed carefully — a positive signal for registry submission quality, though it comes with no maintainer response yet.

## 8. Backlog Watch

The most notable maintainer-attention gap is the automated pin-update queue — none have been merged despite ages ranging from days to nearly a year:

- [#612 chore: update pin for awslabs-cfn](docker/mcp-registry PR #612) — open since **2025-11-07** (~10.5 months)
- [#788 chore: update pin for omi](docker/mcp-registry PR #788) — open since **2025-11-26** (~10 months)
- [#1051 chore: update pin for opik](docker/mcp-registry PR #1051) — open since **2026-02-04** (~7.5 months)
- [#2743 chore: update pin for aws-cdk-mcp-server](docker/mcp-registry PR #2743) and [#2750 aws-terraform](docker/mcp-registry PR #2750) — open since **2026-04-18** (5 months)
- [#4137, #4366, #4367, #4369, #4370, #4381, #4391, #4418](docker/mcp-registry) — a cluster of pin-update PRs from **2026-06-30 to 2026-07-14**, all still unmerged 2+ months later

This large, aging queue of automated dependency-pin PRs (mcp-registry-bot) represents the clearest backlog risk: if these are safe to auto-merge, the lack of throughput suggests either a broken auto-merge workflow or an under-resourced review process — worth flagging to maintainers directly.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) — Daily Digest — 2026-09-18

## 1. Today's Overview

The repo saw high PR throughput (50 PRs touched in 24h) but most of that volume is automated SHA-bump maintenance from `github-actions[bot]` (12+ of the top-commented PRs), not new feature work. Human-driven activity is concentrated in the `hookify` plugin, which shipped two fixes/features today (#6254, #6255), plus one open community PR adding a new plugin (#6252). No new releases were cut. On the issue side, all 7 tracked issues remain open — several are fresh (2026-09-17/18) Windows-platform and correctness bugs affecting the `security-guidance`, `telegram`, and `skill-creator` plugins, suggesting the project is in an active bug-triage phase rather than a feature-release phase.

## 2. Releases

None today.

## 3. Project Progress

- **Automated dependency maintenance dominates today's merges**: ~13 `bump(<plugin>): <old-sha> → <new-sha>` PRs merged (e.g. [#6200 apollo](https://github.com/anthropics/claude-plugins-official/pull/6200), [#6203 aws-agents](https://github.com/anthropics/claude-plugins-official/pull/6203), [#6205 azure](https://github.com/anthropics/claude-plugins-official/pull/6205), [#6213 growthbook](https://github.com/anthropics/claude-plugins-official/pull/6213), and others). These are bot-generated, pre-validated via `claude plugin validate` CI, and represent routine plugin-pin upkeep rather than functional change.
- **`hookify` fixes merged today**:
  - [#6255](https://github.com/anthropics/claude-plugins-official/pull/6255) fixes `warn`-action rules so their message reaches the model via `hookSpecificOutput.additionalContext` instead of only `systemMessage` (which is user-visible but invisible to Claude).
  - [#6254](https://github.com/anthropics/claude-plugins-official/pull/6254) adds a dedicated `hookify/` subfolder for rule files, closing [#4091](https://github.com/anthropics/claude-plugins-official/issues/4091) and enabling rule sharing/symlinking across machines without touching `.claude/`.
- **`commit-commands` fix**: [#4327](https://github.com/anthropics/claude-plugins-official/pull/4327) repairs `/clean_gone` branch detection (wrong `git branch` flag plus a parsing bug meant it never found `[gone]` branches).
- **SLSA supply-chain hardening**: two near-duplicate PRs ([#5655](https://github.com/anthropics/claude-plugins-official/pull/5655), [#6256](https://github.com/anthropics/claude-plugins-official/pull/6256)) add an SLSA generic generator workflow for provenance (level 3); both closed today, likely one superseding the other.

## 4. Community Hot Topics

- [#3712 — hookify Stop-event rules fire on every PreToolUse/PostToolUse](https://github.com/anthropics/claude-plugins-official/issues/3712) (3 comments) — the most-discussed issue. Underlying need: reliable event scoping in the hookify rule engine; users expect `event: stop` rules to be silent outside the Stop event, and the current encoding bug erodes trust in hookify's core matching logic (companion bug #3711 flagged too).
- [#4091 — hooks/ subfolder for shareable rule files](https://github.com/anthropics/claude-plugins-official/issues/4091) (1 comment, now closed by #6254) — signals real cross-machine/WSL workflow pain that got addressed same-day, a good responsiveness signal.
- [#6252 — Add incident.io plugin](https://github.com/anthropics/claude-plugins-official/pull/6252) (open) — community-contributed plugin (5 skills + MCP integration) pinned to a specific upstream commit; reflects continued appetite for third-party plugin submissions via the pinned-SHA contribution model.

## 5. Bugs & Stability

Ranked by severity/blast radius:

1. **[#6251](https://github.com/anthropics/claude-plugins-official/issues/6251) / [#6249](https://github.com/anthropics/claude-plugins-official/issues/6249) — security-guidance v2.0.8 fully broken on Windows** (MSIX-packaged Python can't read the plugin directory / Microsoft Store Claude desktop app path issue → every hook fails with ENOENT). Two independent reports of the same root cause on the same day — high severity, plugin is non-functional for affected users, no fix PR yet in this dataset.
2. **[#6250](https://github.com/anthropics/claude-plugins-official/issues/6250) — security_reminder_hook causes 10–25s stalls and orphaned `index.lock` files** via oversized (~115KB) per-call `git diff` pathspecs in large monorepos; blocked commits for ~30 minutes on the reporter's own machine. Real operational impact on large repos; no fix PR yet.
3. **[#6248](https://github.com/anthropics/claude-plugins-official/issues/6248) — telegram plugin silently drops inbound messages** when there's no listener, with no error/log/trace. Silent data loss is a serious correctness bug; no fix PR yet.
4. **[#3712](https://github.com/anthropics/claude-plugins-official/issues/3712) — hookify Stop-event rules over-firing** (see above). No dedicated fix PR identified today, though #6255 touches hookify's message-delivery path.
5. **[#6253](https://github.com/anthropics/claude-plugins-official/issues/6253) — skill-creator's trigger-eval script measures the wrong thing**, causing `run_loop.py` to optimize descriptions against noisy/misleading metrics. Lower user-facing severity (internal tooling correctness) but affects plugin-authoring quality over time.

## 6. Feature Requests & Roadmap Signals

- **hooks/ subfolder for hookify** ([#4091](https://github.com/anthropics/claude-plugins-official/issues/4091)) — already merged via [#6254](https://github.com/anthropics/claude-plugins-official/pull/6254); should ship in the next version bump.
- **SLSA provenance generation** ([#5655](https://github.com/anthropics/claude-plugins-official/pull/5655)/[#6256](https://github.com/anthropics/claude-plugins-official/pull/6256)) — supply-chain security infra likely to land soon given duplicate submissions and no objections visible.
- **incident.io plugin** ([#6252](https://github.com/anthropics/claude-plugins-official/pull/6252), open) — candidate for next plugin-catalog update if validation passes.
- Prediction: given the concentration of Windows-specific ENOENT failures (#6251, #6249) reported within a day of each other, expect a maintainer-driven fix targeting cross-platform Python resolution in `security-guidance` to be prioritized next.

## 7. User Feedback Summary

- **Pain points**: Windows/MSIX packaging is a recurring friction point (two separate `security-guidance` reports in 24h) — users on the Microsoft Store Claude desktop app are effectively locked out of a security plugin. Large-monorepo users are hitting performance/locking issues with git-based hooks (#6250). Silent message loss in `telegram` (#6248) undermines trust in plugin reliability.
- **Satisfaction signal**: the same-day close of #4091 via #6254 shows responsive maintenance for well-scoped feature requests, which should read positively to the requesting user community.
- **Use cases surfaced**: cross-machine/WSL dev environments (hookify rule sharing), large Rust/Node monorepo commit workflows (security_reminder_hook), and third-party incident-management tooling integration (incident.io).

## 8. Backlog Watch

- [#3712](https://github.com/anthropics/claude-plugins-official/issues/3712) — open since 2026-07-04 (76 days), still unresolved despite 3 comments and a linked companion bug (#3711); highest-priority stale item given it affects core hookify correctness.
- [#6252](https://github.com/anthropics/claude-plugins-official/pull/6252) — new plugin submission, open, no review activity yet as of today; worth a maintainer look given the project's cadence of accepting community plugins.
- The three fresh, unaddressed reliability bugs (#6251/#6249, #6250, #6248) all lack linked fix PRs as of this digest — worth flagging for triage before they age into long-tail backlog like #3712.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-09-18)

## 1. Today's Overview

Activity over the last 24 hours was light and entirely issue-driven: 6 open issues were touched, no PRs were opened or merged, and no new releases shipped. This is consistent with the project's nature as a curated awesome-list rather than a software repository — most "activity" here is community resource submissions working through triage, not code changes. Five of the six issues are fresh `[Resource]` submission requests (four opened today or yesterday), suggesting a healthy, steady inflow of new tools into the Claude Code ecosystem. One older issue (#2161, open since July) is still gathering discussion, indicating the review/triage queue has some backlog. Overall project health signal: **stable, low-velocity curation activity**, no bugs or regressions to report since there's no application code changing.

## 2. Releases

None today — no new releases in the tracked window.

## 3. Project Progress

No PRs were merged, closed, or opened in the last 24 hours (0 total). All movement was confined to issue threads (comments on submission requests), so there is no code/feature progress to report for this cycle.

## 4. Community Hot Topics

Ranked by comment activity (all items have 0 👍 reactions, so comments are the only engagement signal):

- **[#2161 — Recommend: PLUR, open, local-first memory for Claude Code](https://github.com/hesreallyhim/awesome-claude-code/issues/2161)** (3 comments, open since 2026-07-01) — the most-discussed item. PLUR is a local-first "engram" memory MCP server for Claude Code. Its longevity (open ~2.5 months) plus repeated comments suggests either active maintainer vetting or a submitter following up on review status. Underlying need: durable, portable cross-session memory for Claude Code remains a strong community interest area.
- **[#1454 — [Resource]: docker-claude-code](https://github.com/hesreallyhim/awesome-claude-code/issues/1454)** (2 comments) — a containerized Claude Code environment (AGPL-3.0). Reflects ongoing demand for reproducible/sandboxed dev environments for agentic CLI tools.
- The remaining four resource submissions (#2872, #2871, #2870, #2869) each have exactly 1 comment (likely an automated validation-bot acknowledgment), indicating they are freshly filed and awaiting further maintainer review rather than generating organic discussion.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed in this window. This tracker type is a curated resource list, so stability issues would be unusual; none observed today.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues today, but the resource submissions signal where the broader Claude Code ecosystem is investing effort — a reasonable proxy for what capabilities the community is building toward:

- **Memory & context persistence** — two submissions target this directly: [PLUR](https://github.com/hesreallyhim/awesome-claude-code/issues/2161) (local-first engram memory) and [CGIS/codegraph-brain](https://github.com/hesreallyhim/awesome-claude-code/issues/2869) (local code-graph MCP server for Python/codebases). This is the clearest thematic cluster today and a likely growth area for future "awesome list" categories.
- **Observability/cost tracking** — [AI Monitor](https://github.com/hesreallyhim/awesome-claude-code/issues/2870), a physical ESP32 desk display for Claude Code usage limits, points to growing interest in usage/cost visibility tooling, including novel hardware form factors.
- **Repository/code intelligence infrastructure** — [trace-mcp](https://github.com/hesreallyhim/awesome-claude-code/issues/2871), an MCP server that pre-indexes repos, and [Grounder](https://github.com/hesreallyhim/awesome-claude-code/issues/2872) (Obsidian-vault-based structured memory) both extend Claude Code's ability to reason over large/structured codebases and notes.
- **Containerization** — [docker-claude-code](https://github.com/hesreallyhim/awesome-claude-code/issues/1454) suggests continued demand for turnkey sandboxed/deployable Claude Code setups.

Prediction: expect the list's "Memory & Context Persistence" and MCP-server categories to grow fastest in upcoming updates given 3 of 6 submissions map directly there.

## 7. User Feedback Summary

All submitters are proposing their own tools rather than reporting pain points directly, but the pattern of submissions implies underlying user needs:
- Persistent, local/private memory across Claude Code sessions is a recurring unmet need (PLUR, CGIS, Grounder all address variants of this).
- Users want better visibility into usage/cost limits without checking a terminal or dashboard (AI Monitor's physical display use case).
- Demand for easier reproducible environments (docker-claude-code) suggests friction in setting up consistent Claude Code environments across machines/teams.
No explicit dissatisfaction or negative feedback was recorded in this window — sentiment is oriented toward the "here's a tool I built" contribution pattern rather than complaints.

## 8. Backlog Watch

- **[#2161 — PLUR memory MCP server](https://github.com/hesreallyhim/awesome-claude-code/issues/2161)** — open since 2026-07-01 (~11 weeks), still active with recent comments as of 2026-09-17. This is the most notable aging item and warrants maintainer attention to either merge/validate or clarify what's blocking acceptance.
- The four newest submissions (#2872, #2871, #2870, #2869) are all `validation-passed` but not yet merged — worth monitoring if they stall beyond a few days, since `validation-passed` status suggests they're ready for a maintainer's final merge decision.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**Date:** 2026-09-18 | **Repo:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview

Activity in the last 24 hours was light and entirely contribution-driven: no issues were opened or closed, no releases shipped, and the only movement came from three new pull requests, all proposing additions to the community skills listing. This is consistent with the project's nature as a curated awesome-list — activity is dominated by submission PRs rather than code changes, bug reports, or releases. None of today's PRs have been reviewed, merged, or commented on yet, so the list is effectively in a holding pattern awaiting maintainer triage. Overall health signal: steady but modest inbound interest (~3 submissions/day), with no indication of maintainer response velocity from this snapshot alone.

## 2. Releases

None — no new releases in the last 24 hours.

## 3. Project Progress

No PRs were merged or closed today. All three PRs opened today ([#1067](https://github.com/VoltAgent/awesome-agent-skills/pull/1067), [#1065](https://github.com/VoltAgent/awesome-agent-skills/pull/1065), [#1064](https://github.com/VoltAgent/awesome-agent-skills/pull/1064)) remain open and unreviewed, so no listed features or entries advanced today.

## 4. Community Hot Topics

No issues or PRs have received comments or reaction (👍) activity yet — all three PRs show 0 reactions and no comments. There is no "hot" discussion today; the most notable pattern is that all three submissions target the **Community Skills** catalog, specifically:
- [#1067 — Taobao Shop Growth skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1067) (Marketing category)
- [#1065 — dream skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1065) (Productivity and Collaboration)
- [#1064 — GiaSip Research skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1064) (Productivity and Collaboration)

The underlying need signaled here is continued organic growth in domain-specific and workflow-specific "skill packs" for agentic coding tools (Claude Code, Codex), spanning both practical/commercial use cases (e-commerce growth SOPs) and more experimental/conceptual ones (the "dream" awareness primer).

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today; all activity was submission-style PRs rather than roadmap discussion. That said, the submissions themselves signal a few trends worth watching for future list evolution:
- **Vertical/niche e-commerce skills** (#1067) — suggests demand for region- and platform-specific automation skills (Taobao/Qianniu), which could foreshadow requests for a dedicated e-commerce or regional-market subcategory.
- **Research-oriented skills with source-linking** (#1064) — reflects growing interest in verifiable, citation-backed research workflows for coding agents, a pattern likely to recur as more research-assistant skills are submitted.
- **Multi-tool compatibility** (#1064 explicitly supports both Codex and Claude Code) — hints at a possible future ask for the awesome-list to tag/filter skills by supported agent/tool.

## 7. User Feedback Summary

No direct user feedback (comments, reactions, discussion) was captured today — all three submissions are fresh with zero engagement so far. From the PR descriptions themselves:
- The Taobao Shop Growth author frames their skill as "field-tested" and validated in an actual live shop, suggesting contributors value demonstrating real-world validation over purely theoretical skills.
- The GiaSip Research author emphasizes transparency ("source-linked reports," "does not fabricate," separate list of "unresolved checks"), indicating a broader community expectation that research/analysis skills be auditable rather than opaque.

## 8. Backlog Watch

All three of today's PRs are brand new (opened today, no comments, no maintainer response yet), so none qualify as long-unanswered backlog items based on this snapshot. However, since this data window only covers the last 24 hours, it cannot confirm whether older open PRs or issues are stale — a maintainer or future digest run with historical PR/issue age data would be needed to properly flag long-idle submissions awaiting review.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
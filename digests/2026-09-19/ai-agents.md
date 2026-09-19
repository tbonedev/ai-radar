# MCP Ecosystem Digest 2026-09-19

> Issues: 3 | PRs: 5 | Projects covered: 7 | Generated: 2026-09-19 11:45 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-09-19)

## 1. Today's Overview

Activity today is moderate and heavily concentrated on data-integrity issues in two servers: `filesystem` and `mcp-server-git`, plus a fresh permissions bug in `server-memory`. No new releases shipped. Of the 5 PRs touched in the last 24h, 4 remain open and 1 was closed without a merge — likely superseded by a competing fix for the same bug. All 3 issues updated today remain open, including one from February 2025 that just resurfaced with a comment. Overall, this looks like a healthy but backlog-heavy day: real bugs are being found and fixed, but review/merge throughput on filesystem-integrity PRs is lagging.

## 2. Releases

None today.

## 3. Project Progress

- **PR [#4515](https://github.com/modelcontextprotocol/servers/pull/4515) closed** ("write in place to preserve file identity on edits", author `ayushbunny11`). This addressed the same root cause as the still-open [#4516](https://github.com/modelcontextprotocol/servers/pull/4516) (temp-file+rename replacing inodes, destroying birthtime/hard links/watchers) — its closure without merge suggests maintainers consolidated on #4516 as the canonical fix rather than progress being lost.
- No PRs merged today; the four remaining open PRs (#4815, #4274, #4516, #4822) are all unmerged fixes awaiting review.

## 4. Community Hot Topics

Engagement is thin today — nothing has broken out with heavy discussion, but two threads stand out:

- **[Issue #659](https://github.com/modelcontextprotocol/servers/issues/659)** — `git_merge` tool request. Dormant since Feb 2025, picked up a comment and its first 👍 today. Underlying need: users treat `mcp-server-git` as a near-complete git CLI replacement and keep hitting gaps versus raw `git` (see also #4815, #4822 below) — merge is the most conspicuous missing primitive.
- **[Issue #4827](https://github.com/modelcontextprotocol/servers/issues/4827)** — `server-memory` permission-bits bug, opened and commented on same day. Underlying need: users relying on `server-memory` for persistent knowledge graphs expect it to behave like a well-behaved POSIX file editor (preserve permissions, respect read-only), not silently downgrade security posture.

## 5. Bugs & Stability

Ranked by severity/blast radius:

1. **[Issue #4827](https://github.com/modelcontextprotocol/servers/issues/4827)** (High) — `server-memory`'s `saveGraph` uses temp-file+rename, silently dropping `memory.jsonl` permissions from `0600` to `0644` and overwriting files marked read-only. Silent security/data-loss regression with no fix PR yet.
2. **[PR #4516](https://github.com/modelcontextprotocol/servers/pull/4516)** (High, fix in progress) — `filesystem`'s `write_file`/`edit_file` destroy birthtime, sever hard links, and break inode-based watchers via the same temp-file+rename pattern. Fix proposes in-place `O_RDWR | O_NOFOLLOW` writes. Closes #4512; superseded #4515.
3. **[PR #4274](https://github.com/modelcontextprotocol/servers/pull/4274)** (High, fix in progress) — `write_file` can report success ("File created successfully") even when zero bytes reached disk, with no way for callers (Claude Desktop, etc.) to detect the failure. Adds post-write verification. Closes #4138.
4. **[PR #4822](https://github.com/modelcontextprotocol/servers/pull/4822)** (Medium, fix in progress) — `git_show` renders the literal string `None` instead of `/dev/null` for added/deleted files in a diff, because GitPython leaves `a_path`/`b_path` unset and the f-string doesn't handle it. Correctness/output-quality bug, not data-destructive.
5. **[PR #4815](https://github.com/modelcontextprotocol/servers/pull/4815)** (Medium, fix in progress) — `git_diff` rejects valid revision ranges like `main..feature` with a `BadName` error even though the underlying `git diff` command supports them.

Common thread: three of the top four issues stem from the same anti-pattern (temp-file + rename losing metadata/permissions), spanning both `filesystem` and `server-memory` — worth a shared fix pattern or lint rule across servers.

## 6. Feature Requests & Roadmap Signals

- **`git_merge` tool** ([#659](https://github.com/modelcontextprotocol/servers/issues/659)) — 19-month-old request, resurfaced today with new interest. Given the parallel activity on `git_diff` and `git_show` fixes today, `mcp-server-git` tooling gaps appear to be getting fresh maintainer attention; `git_merge` is a plausible candidate for the next round of git-server enhancements.
- **OpenTrustBench security badge** ([#4826](https://github.com/modelcontextprotocol/servers/issues/4826)) — not a feature request per se, but an external automated security-scanning service offering a weekly-refreshed trust badge. Signals growing third-party interest in supply-chain/security posture of MCP servers; worth a maintainer decision on whether to adopt.

## 7. User Feedback Summary

- Positive: the `#659` author explicitly praises `mcp-server-git` ("it's freakin' awesome, great job everyone") while flagging a functional gap — indicates strong baseline satisfaction with the git server's core functionality.
- Pain points, all trust/data-integrity related:
  - Silent permission downgrades and read-only overwrites in `server-memory` (#4827).
  - Silent write failures with no error surfaced to the calling LLM client in `filesystem` (#4274).
  - Loss of file identity (birthtime, hard links, inode-based watchers) on ordinary edits in `filesystem` (#4515/#4516).
  - Git tooling not accepting standard git syntax (revision ranges, diffs on added/deleted files) — friction for users treating these MCP tools as git/filesystem drop-ins.

The dominant theme today: users expect MCP filesystem/git/memory servers to be faithful, side-effect-free wrappers around real POSIX/git semantics, and are filing precise, well-diagnosed bugs when that abstraction leaks.

## 8. Backlog Watch

- **[Issue #659](https://github.com/modelcontextprotocol/servers/issues/659)** — open 19 months (since 2025-02-23) with no maintainer response beyond a comment today; a low-risk, clearly-scoped enhancement that keeps getting community support.
- **[PR #4274](https://github.com/modelcontextprotocol/servers/pull/4274)** — open since 2026-06-01 (~3.5 months), addresses a silent-data-loss bug; still unmerged.
- **[PR #4516](https://github.com/modelcontextprotocol/servers/pull/4516)** — open since 2026-07-11 (~2.5 months); now the sole surviving fix for the inode/birthtime issue after #4515's closure — worth prioritizing given the competing PR was just abandoned.
- **[Issue #4827](https://github.com/modelcontextprotocol/servers/issues/4827)** — brand new but high-severity (silent permission/security downgrade); no fix PR yet and should be triaged quickly given the security implications.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP & Claude Agent Ecosystem
**Digest window: 2026-09-19**

## 1. Ecosystem Overview

The MCP/Claude agent ecosystem currently splits into two operational modes: **core protocol infrastructure** (MCP Servers, MCP Registry) doing careful, low-volume engineering work on data-integrity and trust primitives, and **curated catalog repos** (Awesome MCP Servers, Docker MCP Registry, Claude Plugins, Awesome Claude Code, Awesome Agent Skills) absorbing a heavy, largely undifferentiated stream of third-party submissions. No project shipped a release in this window, and merge/review throughput is the dominant health signal across the board — several catalogs are accumulating multi-week-to-month-old unmerged PRs even for mechanical changes. Thematically, three concerns recur independently across projects: **data/file integrity guarantees** (MCP Servers), **supply-chain/security attestation** (MCP Registry, Docker MCP Registry, Claude Plugins), and **agent context/cost efficiency and least-privilege tooling** (Awesome MCP Servers, Awesome Agent Skills, Awesome Claude Code). The overall picture is an ecosystem still in a submission-driven growth phase, where curation infrastructure (bots, triage labels, review bandwidth) is becoming the binding constraint rather than developer interest.

## 2. Activity Comparison

| Project | Issues (24h) | PRs Touched | PRs Merged/Closed | Release | Health Score |
|---|---|---|---|---|---|
| **MCP Servers** (core) | 3 (0 closed) | 5 | 1 closed, 0 merged | None | 6/10 — real bugs found & triaged, but merge lag on integrity fixes |
| **MCP Registry** (official) | 2 (0 closed) | 2 | 1 closed (invalid) | None | 7/10 — quiet, stable, one converged feature aging (~82 days) |
| **Awesome MCP Servers** | 0 | 77 | 5 (~6%) | N/A (list) | 5/10 — high inbound volume, thin review throughput |
| **Docker MCP Registry** | 0 | 50 | 0 (0%) | None | 4/10 — zero merges today; year-old PRs still open |
| **Claude Plugins (official)** | 3 (0 closed) | 9 | 8 (~89%) | None | 7/10 — strong merge cadence, but known security-plugin bugs unresolved 45+ days |
| **Awesome Claude Code** | 10 (0 closed) | 0 | N/A | None | 8/10 — smooth intake, 90% pre-validated, no backlog stress |
| **Awesome Agent Skills** | 1 | 7 | 0 (0%) | None | 5/10 — active submissions, zero maintainer throughput today |

*Health score is a qualitative 1–10 composite of merge throughput, backlog age, and severity of open defects — not a project popularity ranking.*

## 3. MCP Servers's Position

**Advantages vs. peers:** As the reference implementation repo, MCP Servers is the only project in this set doing substantive *engineering* work rather than catalog curation — today's activity (temp-file/rename data-loss bugs, permission regressions, git tooling gaps) reflects real production usage feedback, not submission intake. It also has the clearest signal of user trust: a 19-month-old feature request (#659) resurfacing organically, and explicit praise ("freakin' awesome") alongside precise bug reports — a sign of an engaged, technically sophisticated user base rather than passive consumers.

**Technical approach differences:** Unlike the catalog repos (Awesome MCP Servers, Docker MCP Registry), which scale via bot-assisted submission triage, MCP Servers scales via direct maintainer code review of correctness-critical changes (file I/O semantics, POSIX compliance). This is slower per-PR but produces higher-stakes fixes — three of today's top issues share a single anti-pattern (temp-file+rename destroying metadata), suggesting an opportunity for a shared internal library or lint rule that none of the catalog repos need.

**Community size comparison:** Engagement volume (5 PRs, 3 issues) is far smaller than the catalog repos (50–77 PRs/day at Docker MCP Registry and Awesome MCP Servers), but this reflects repo function, not health — MCP Servers is a maintained reference implementation with a bounded surface area, while the catalogs are open submission funnels. Its issue quality (detailed root-cause analysis, specific PR fixes) is notably higher-signal than the templated submissions dominating peer repos.

## 4. Shared Technical Focus Areas

- **Data integrity / faithful-wrapper semantics** — MCP Servers (`filesystem`, `mcp-server-git`, `server-memory` all hit temp-file+rename metadata loss); users across these three sub-servers expect POSIX/git-faithful behavior and are filing precise bugs when it leaks.
- **Supply-chain / security attestation** — MCP Registry (PR #1404, security-scan receipt `_meta` field, 3-contributor converged design), Docker MCP Registry (`security-blocked` PR #511, stuck 10+ months), Claude Plugins (duplicate SLSA provenance PRs #6256/#5655), Awesome MCP Servers (OpenTrustBench badge issue #4826, new `ratchet`/`cmdxray` least-privilege skill submissions). Four independent projects are converging on the same need: machine-readable trust signals for third-party servers/plugins.
- **Agent context/cost efficiency** — Awesome MCP Servers (`token_save_mcp`, `CTX` code-graph tool), Awesome Agent Skills (general productivity/skill-quality tooling), Awesome Claude Code (Observability & Monitoring submissions like Oddyssey, ClaudeWatch). This is an emerging cross-repo category rather than a single-project concern.
- **Windows/cross-platform robustness** — Claude Plugins' `security-guidance` MSIX Python resolution failure (#6251) is project-specific today, but is the kind of packaging-fragility issue likely to recur as catalogs (MCP Registry, Docker MCP Registry) onboard more Windows-targeting submissions.

## 5. Differentiation Analysis

| Project | Primary Function | Target User | Architecture Signal |
|---|---|---|---|
| MCP Servers | Reference server implementations | Developers building/consuming core MCP tools | Direct code review, POSIX-semantics correctness |
| MCP Registry | Canonical server namespace/index | Server publishers, registry consumers | Schema-governed, metadata extension proposals (security-scan `_meta`) |
| Awesome MCP Servers | Community discovery list | End users browsing servers | Bot-triage labels (`has-glama`, `merge-conflict`) at scale |
| Docker MCP Registry | Docker-hosted/verified server catalog | Docker-ecosystem MCP users | Bot-driven pin updates + manual security gating |
| Claude Plugins (official) | Official Claude Code plugin marketplace | Claude Code users, partner integrators | Partner onboarding pipeline + core plugin bug fixes |
| Awesome Claude Code | Community resource index | Claude Code users seeking tools | Validation-label triage, minimal discussion |
| Awesome Agent Skills | Skills marketplace/discovery | Agent builders seeking vertical skill packs | Pure submission intake, no automated triage visible |

The clearest split: **MCP Servers and MCP Registry** are protocol-governance repos where correctness and schema design matter; **the five "awesome"/marketplace repos** are discovery layers competing primarily on submission-to-merge latency and triage automation quality, not code correctness.

## 6. Community Momentum & Maturity

**Rapidly iterating (high submission volume, review-bottlenecked):** Awesome MCP Servers (77 PRs/day, 72 net-new), Docker MCP Registry (50 PRs/day, 0% merge rate today), Awesome Agent Skills (7 PRs, 0% merge rate). These three show the ecosystem's growth edge — new servers/skills arriving faster than maintainers can process them — and represent the highest near-term risk of contributor attrition if backlogs (some 7–10+ months old) aren't addressed.

**Stabilizing / steady-state:** MCP Registry (quiet, 82-day-old converged feature awaiting merge), Awesome Claude Code (smooth 9-of-10 pre-validated intake, no backlog stress), Claude Plugins (89% same-day merge rate on new submissions, though legacy security-plugin bugs linger).

**Actively engineering (lower volume, higher stakes):** MCP Servers is the outlier — its low PR count reflects deliberate review of correctness-critical fixes rather than low interest, evidenced by same-day resurfacing of a 19-month-old issue and multiple independent bug reports converging on one root cause.

## 7. Trend Signals

1. **Trust infrastructure is becoming table stakes, not a nice-to-have.** Four of seven projects show independent movement toward security attestation (scan receipts, provenance workflows, trust badges, least-privilege scanners) within a single 24h window — agent developers should expect registry/marketplace entries to carry verifiable security metadata within the next few release cycles, and should design integrations to consume (not just trust blindly) such signals.
2. **"Faithful wrapper" is the emerging correctness bar for MCP servers.** The filesystem/git/memory bugs in MCP Servers all stem from users expecting MCP tools to behave exactly like the underlying POSIX/git primitives they wrap. Developers building new MCP servers should treat metadata/permission/identity preservation as a first-class requirement, not an edge case.
3. **Context-cost and least-privilege tooling is graduating from niche to category.** Independent submissions across Awesome MCP Servers (`ratchet`, `cmdxray`, `token_save_mcp`) and Awesome Claude Code (Observability entries) indicate agent operators are actively seeking cost-control and permission-auditing tooling — a signal that production agent deployments are maturing past prototype usage into cost/security-governed operation.
4. **Catalog review throughput, not submission interest, is the ecosystem's bottleneck.** With three repos showing nominal-to-zero same-day merge rates against dozens of daily PRs, developers relying on these lists for discovery should expect multi-week lag between a tool's submission and its actual visibility — worth factoring into go-to-market timing for anyone publishing a new server, plugin, or skill.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) — Daily Digest
**modelcontextprotocol/registry** | 2026-09-19

## 1. Today's Overview

Activity over the last 24 hours was light and consistent with routine registry maintenance rather than active development. No new releases shipped. Two issues surfaced, both are server-removal requests unrelated to core registry code. Two PRs were touched: one substantive feature PR (security-scan receipt metadata) received continued attention after nearly three months open, while one low-effort server-submission PR was closed as invalid. Overall project health signal is stable/quiet — the registry continues to function primarily as a curation surface (server add/remove requests) with a slower cadence of core feature work.

## 2. Releases

None. No new releases in the last 24 hours.

## 3. Project Progress

- **PR #1650** — [Create io.github.trencinodin-stack.arcstone-mcp-sidecar.json](https://github.com/modelcontextprotocol/registry/pull/1650) — closed as `[invalid]`. This was a server-config submission with an empty motivation/testing section in the PR template, suggesting it was rejected for not following contribution guidelines (likely wrong submission path — server entries are typically expected to go through the registry's publishing flow rather than a raw PR, or the template was left unfilled).
- **PR #1404** — [Add optional security-scan receipt `_meta` extension (v1)](https://github.com/modelcontextprotocol/registry/pull/1404) — still open, updated today but not merged. No progress to report beyond continued activity/discussion.

## 4. Community Hot Topics

- **[PR #1404 — security-scan receipt extension](https://github.com/modelcontextprotocol/registry/pull/1404)** is the most substantive item active today. It proposes an optional `io.modelcontextprotocol.registry/security-scan` `_meta` field, converging a design discussion from issue #1273 among three contributors (@eeee2345, @JinNing6, @HarperZ9). The underlying need: registry consumers want a standardized, machine-readable way to attach security-scan attestations/receipts to server entries — pointing toward growing demand for supply-chain trust signals in the MCP ecosystem as third-party server volume grows.
- No issues or PRs show elevated comment/reaction counts today (all at 0 comments / 0 👍), indicating no viral or contentious topics in this window.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. Today's issue volume is entirely composed of administrative removal requests, not defects.

## 6. Feature Requests & Roadmap Signals

- **Security-scan receipt metadata (PR #1404)** is the clearest roadmap signal: a converged, community-designed v1 proposal for attaching security-scan results to registry entries. Given it resolves a previously-discussed issue (#1273) and has multi-contributor buy-in, this is a strong candidate for inclusion in an upcoming release once review completes.
- No other net-new feature requests were filed today.

## 7. User Feedback Summary

- Real user activity today centers on **registry hygiene**, not product feedback:
  - [Issue #1652](https://github.com/modelcontextprotocol/registry/issues/1652): navshainc requesting removal of all versions of `io.github.navshainc/noshup-public`, consolidating to a single canonical server entry — a normal cleanup request, no dissatisfaction implied.
  - [Issue #1651](https://github.com/modelcontextprotocol/registry/issues/1651): johnedge-kavara requesting deletion of `io.github.UlyssesModel/kirk-mcp` (all versions) because their GitHub org renamed to Kavara-AI, and the old namespace is now **blocking republishing** under the new org name. This is a mild pain point worth noting — org-rename handling in the namespace/ownership model appears to create friction requiring manual maintainer intervention rather than self-service migration.
- No satisfaction signals (positive or negative) were expressed via comments/reactions today.

## 8. Backlog Watch

- **[Issue #1651](https://github.com/modelcontextprotocol/registry/issues/1651)** highlights a recurring pattern worth maintainer attention: org renames currently require a manual deletion request to unblock republishing. If this has happened before, it may warrant a self-service or automated namespace-transfer path rather than case-by-case issue handling.
- **[PR #1404](https://github.com/modelcontextprotocol/registry/pull/1404)** has been open since 2026-06-29 (~82 days) despite having a converged design and active discussion — it's a good candidate for maintainer review/merge prioritization given the feature appears otherwise ready.
- Both removal requests (#1651, #1652) remain open with 0 comments — routine, but still awaiting maintainer action to actually process the deletions.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest — 2026-09-19

## 1. Today's Overview

Awesome MCP Servers remains a high-submission-volume, low-engagement curated list: 77 PRs were touched in the last 24 hours, but zero issues were updated and zero releases were cut (this repo doesn't ship versioned releases — it's a living README). The overwhelming majority of PR activity (72 of 77, ~93%) is new "add my MCP server" submissions from first-time external contributors, each auto-tagged by a bot with quality-triage labels (`has-emoji`, `valid-name`, `has-glama`/`missing-glama`, `merge-conflict`, `manual-review`). Only 5 PRs were merged or closed today. None of the sampled PRs show any comments or 👍 reactions, so activity here reads as steady inbound-submission pressure rather than community debate — the health signal to watch is review *throughput*, not discussion volume.

## 2. Releases

No new releases. Not applicable — this repository is a curated Markdown list, not a versioned software package.

## 3. Project Progress

Only one closed item is visible in the sample, and it's a maintenance PR rather than a new addition:

- **[#14272](https://github.com/punkpeye/awesome-mcp-servers/pull/14272) — "docs: remove 8 dead links to deleted GitHub repos"** (closed, opened 2026-09-12 by `putramkti`). Removes 8 entries whose linked repos now 404. This is exactly the kind of link-hygiene work an awesome-list needs periodically; worth confirming it was merged (vs. closed without merge) and whether a bot/CI now checks for dead links automatically to prevent recurrence.

The other ~4 closed/merged PRs from the 77 aren't itemized in the top-20-by-comments sample, so no further detail is available today.

## 4. Community Hot Topics

Reaction/comment counts are `undefined`/0 across every sampled PR, so there is no genuine "hot topic" by engagement today — the list is effectively sorted by recency, not heat. That itself is a signal: **submission PRs get essentially no maintainer or community interaction before merge/close**, which suggests either a very fast rubber-stamp review process or a growing silent backlog (see §8). The closest thing to a recurring theme is category clustering — multiple submissions today target **Security** (`ratchet` [#14700](https://github.com/punkpeye/awesome-mcp-servers/pull/14700), `cmdxray` [#14693](https://github.com/punkpeye/awesome-mcp-servers/pull/14693), `HexForge Gateway` [#14692](https://github.com/punkpeye/awesome-mcp-servers/pull/14692)) and **Developer Tools / context management** (`token_save_mcp` [#14650](https://github.com/punkpeye/awesome-mcp-servers/pull/14650), `CTX` [#12088](https://github.com/punkpeye/awesome-mcp-servers/pull/12088), `mcp-triage` [#14696](https://github.com/punkpeye/awesome-mcp-servers/pull/14696)) — indicating growing ecosystem interest in **agent safety/least-privilege tooling** and **context/token-cost management** for coding agents.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions surfaced — 0 issues were updated in the last 24 hours. The only stability-adjacent signal is the dead-link cleanup in [#14272](https://github.com/punkpeye/awesome-mcp-servers/pull/14272), which is documentation rot rather than a functional bug. No severity ranking is possible today given the empty issue queue.

## 6. Feature Requests & Roadmap Signals

There are no formal feature-request issues today, but the PR stream itself signals where the ecosystem is heading:

- **Agent least-privilege / permission auditing** — `ratchet` ([#14700](https://github.com/punkpeye/awesome-mcp-servers/pull/14700)) compiles least-privilege policies from an agent's real tool usage; `cmdxray` ([#14693](https://github.com/punkpeye/awesome-mcp-servers/pull/14693)) gates risky shell commands. Likely durable additions given the security-category clustering.
- **Context-cost reduction for agents** — `token_save_mcp` ([#14650](https://github.com/punkpeye/awesome-mcp-servers/pull/14650)) offloads bulk file reads to a cheaper worker model; `CTX` ([#12088](https://github.com/punkpeye/awesome-mcp-servers/pull/12088)) builds a deterministic code graph for context efficiency.
- **MCP config diagnostics** — `mcp-triage` ([#14696](https://github.com/punkpeye/awesome-mcp-servers/pull/14696)) is a client-side "doctor" tool for broken MCP configs, filling a gap alongside existing entries like `wong2/mcp-cli`.

Given the repo's own maintenance trajectory, the most likely near-term roadmap item isn't a new category but **tightening the submission bot** (the `has-emoji`/`missing-glama`/`valid-name` labels suggest active iteration on automated PR quality gating).

## 7. User Feedback Summary

Feedback is implicit in PR descriptions rather than explicit reviews:
- Several submitters proactively disclose authorship/conflicts of interest (e.g., Hydra ETL author in [#14699](https://github.com/punkpeye/awesome-mcp-servers/pull/14699)), suggesting the contributor guidelines around self-promotion disclosure are being followed.
- [#14691](https://github.com/punkpeye/awesome-mcp-servers/pull/14691) is a **resubmission** of a previously stale-closed PR (#10690), with the author noting they were "waiting on the Glama score" — direct evidence that the Glama-badge requirement is a source of contributor friction and stalls merges.
- No dissatisfaction or complaint issues are present today (0 issues total), so broader sentiment can't be assessed from this window alone.

## 8. Backlog Watch

Three open PRs stand out as aging and needing maintainer attention:

- **[#11254](https://github.com/punkpeye/awesome-mcp-servers/pull/11254)** — "Add rpcedge-mcp" — open since **2026-07-31** (~7 weeks), still updated today with no resolution.
- **[#13190](https://github.com/punkpeye/awesome-mcp-servers/pull/13190)** — "Add Agent Data Pro to aggregators" — open since **2026-08-30** (~3 weeks), flagged `merge-conflict`, needs a rebase before it can even be reviewed.
- **[#12088](https://github.com/punkpeye/awesome-mcp-servers/pull/12088)** — "Add halloffame12/CTX" — open since **2026-08-13** (~5 weeks), also flagged `merge-conflict`.

Both merge-conflict PRs are stalled on mechanical grounds (needs rebase) rather than content review, making them low-effort, high-value targets for maintainer triage — resolving the conflicts and re-running the bot checks could clear them quickly. With 72 open PRs total against a visibly thin close/merge rate (5/day), the review backlog is the single biggest risk to project health.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Project Digest
**Date: 2026-09-19**

## 1. Today's Overview

Activity in the last 24 hours was dominated by automated maintenance rather than organic community contribution: 50 PRs were touched, but every single one remains open with zero merges or closures, and no new releases were cut. The vast majority (18 of the top 20 by visibility) are bot-generated `chore: update pin for <server>` PRs from `mcp-registry-bot[bot]`, which auto-bump commit pins for existing registry entries. Only two genuinely new submissions arrived — `handsforagents` and `LLM Pulse` — both proposing new remote MCP servers. No issues were updated at all today. Overall, this reads as a low-engagement, maintenance-heavy day with a growing tail of unmerged automated PRs, suggesting either a review bottleneck or an intentionally batched/delayed merge cadence for pin updates.

## 2. Releases

None — no new releases in this period.

## 3. Project Progress

No PRs were merged or closed today (0 of 50). The day's "progress" is limited to bot activity keeping commit pins current for existing servers (e.g., testkube, stripe, smartbear, firecrawl, mongodb, flexprice, render, playwright, grafana, and others), but none of these updates have landed yet. Functionally, the registry did not advance today — all changes are pending review/merge.

## 4. Community Hot Topics

Comment/reaction counts were not available in the provided data (`Comments: undefined`, 👍: 0 across the board), so engagement ranking can't be derived numerically. By recency and substance, the two notable community-facing items are:

- **[#5163 – Add handsforagents (remote MCP server)](https://github.com/docker/mcp-registry/pull/5163)** — proposes a remote MCP server for physical-world task execution (design, fabrication, on-site testing/shipping) via AI agents in the EU. Signals growing interest in MCP as a bridge between AI agents and real-world/physical services, not just SaaS APIs.
- **[#5162 – Add LLM Pulse remote MCP server](https://github.com/docker/mcp-registry/pull/5162)** — proposes an AI-visibility analytics server (brand mentions, citations, sentiment, competitor share-of-voice). Reflects continued demand for MCP servers that let agents monitor/analyze how brands appear in LLM outputs — an emerging niche category.

Underlying need: contributors are pushing the registry beyond conventional dev-tool integrations into more specialized, vertical use cases (physical fulfillment, AI-visibility SEO), suggesting the ecosystem is maturing past "wrap an existing API" submissions.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions surfaced today — zero issues were updated in the last 24 hours. One item worth flagging for stability/trust reasons rather than a functional bug:

- **[#511 – \[security-blocked\] chore: update pin for cyreslab-ai-shodan](https://github.com/docker/mcp-registry/pull/511)** — tagged `security-blocked`, open since 2025-11-03 (over 10 months). This isn't a new bug, but its persistent blocked state is a stability/trust-pipeline concern worth maintainer attention: an automated security gate has been stuck unresolved for nearly a year.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. The clearest roadmap signal comes from what's being submitted for inclusion:

- Physical/real-world execution servers (`handsforagents`) — suggests the registry may see more "agent-to-physical-service" categories going forward.
- AI-visibility/analytics servers (`LLM Pulse`) — suggests an emerging analytics/observability sub-category for brand-monitoring MCP servers.

Given the current PR backlog, a plausible near-term maintainer priority (rather than a new feature) is **batch-processing the pin-update backlog** — either via a bulk auto-merge policy for bot PRs passing CI, or tooling to reduce reviewer load, since dozens of trivial pin bumps are competing for attention with substantive new-server submissions.

## 7. User Feedback Summary

No direct user feedback (issue comments, satisfaction signals) is present in today's data — the issue tracker was silent. Indirectly, the two new-server submissions imply real-world use cases driving contribution: agentic physical-task fulfillment and AI-search/visibility monitoring. No dissatisfaction signals were observed today, but the silent, comment-free nature of the pin-update PRs (many open for months with zero interaction) may itself indicate contributor/maintainer fatigue around routine maintenance overhead.

## 8. Backlog Watch

Several automated pin-update PRs have been open for extended periods without merge, representing the most concrete "needs attention" signal today:

| PR | Server | Open Since | Age |
|----|--------|-------------|-----|
| [#614](https://github.com/docker/mcp-registry/pull/614) | awslabs-cloudwatch-appsignals | 2025-11-07 | ~10.5 months |
| [#511](https://github.com/docker/mcp-registry/pull/511) | cyreslab-ai-shodan (**security-blocked**) | 2025-11-03 | ~10.5 months |
| [#788](https://github.com/docker/mcp-registry/pull/788) | omi | 2025-11-26 | ~10 months |
| [#657](https://github.com/docker/mcp-registry/pull/657) | clickhouse | 2025-11-11 | ~10 months |
| [#1083](https://github.com/docker/mcp-registry/pull/1083) | stripe | 2026-02-07 | ~7 months |
| [#1152](https://github.com/docker/mcp-registry/pull/1152) | flexprice | 2026-02-17 | ~7 months |

These are all low-risk, mechanical commit-pin updates, yet the oldest have sat unmerged for nearly a year — including one explicitly blocked on a security check (#511) that appears to need manual maintainer resolution rather than automated retry. Given 50 similar PRs are currently open with zero merges, this looks like a systemic review-throughput gap rather than isolated neglect, and is the top candidate for maintainer/automation attention.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest
**Date:** 2026-09-19 | **Repo:** [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

## 1. Today's Overview

Activity in the last 24 hours was moderate-to-high on the PR side (9 PRs touched, 8 merged/closed) but light on issues (3 open, 0 closed). The bulk of merged PRs are marketplace metadata/listing additions (partner plugin submissions) rather than core engineering work, suggesting the repo functions heavily as a curated plugin catalog with a steady stream of partner onboarding. Two newly reported issues (#6251, #6261) point to real functional bugs in the bundled `security-guidance` and `pr-review-toolkit` plugins that could affect a broad set of users. Overall project health looks stable — no regressions from releases (none shipped today) — but there's a visible backlog of known `security-guidance` defects spanning multiple versions (2.0.6 → 2.0.8) that hasn't yet been resolved with a merged fix.

## 2. Releases

No new releases in the last 24 hours. Nothing to report.

## 3. Project Progress

Most merged/closed PRs today were marketplace catalog changes rather than code fixes:

- **[#6260](https://github.com/anthropics/claude-plugins-official/pull/6260)** (merged/closed) — `pyright-lsp` fix suppressing hint-severity `Unnecessary`-tagged diagnostics from polluting Claude Code's context window. A genuine quality-of-life fix for LSP integration noise.
- **[#1723](https://github.com/anthropics/claude-plugins-official/pull/1723)** — Removed the `helius` plugin from the marketplace listing.
- **[#6257](https://github.com/anthropics/claude-plugins-official/pull/6257)** — Partner metadata updates: Qodo description copy, Airwallex display name.
- **[#6258](https://github.com/anthropics/claude-plugins-official/pull/6258)** — Added Wingspan plugin listing (stopgap path, bypassing the normal community-catalog publish flow which has stalled since 2026-08-24).
- **[#6252](https://github.com/anthropics/claude-plugins-official/pull/6252)** — Added incident.io plugin (pinned to a specific upstream commit, v0.18.0).
- **[#6256](https://github.com/anthropics/claude-plugins-official/pull/6256)** and **[#5655](https://github.com/anthropics/claude-plugins-official/pull/5655)** — Duplicate submissions adding an SLSA generic generator provenance workflow (supply-chain security tooling).
- **[#4327](https://github.com/anthropics/claude-plugins-official/pull/4327)** — Fix for `/clean_gone` command in `commit-commands` plugin: corrected `git branch -v` → `git branch -vv` flag usage so `[gone]` branch detection actually works.

Net effect: catalog grew (Wingspan, incident.io added; helius removed), plus two small but meaningful plugin bug fixes landed (`pyright-lsp`, `commit-commands`).

## 4. Community Hot Topics

Engagement today is thin — no item has more than 1 comment or any reactions, which itself is notable for a repo of this visibility.

- **[#4894](https://github.com/anthropics/claude-plugins-official/issues/4894)** — `security-guidance` hook firing 5x per Bash call. Open since 2026-08-05, still active 45 days later with only 1 comment. Underlying need: users want confidence that safety/audit hooks aren't silently degrading performance or spamming duplicate output.
- **[#6251](https://github.com/anthropics/claude-plugins-official/issues/6251)** — `security-guidance` completely broken on Windows (Git Bash/MSYS2) due to Python resolution picking an MSIX-packaged interpreter. Underlying need: cross-platform robustness for hook scripts, especially on Windows where Python packaging is inconsistent (App Store/MSIX Python vs. real installs).
- **[#6259](https://github.com/anthropics/claude-plugins-official/pull/6259)** — New Xcode plugin submission (Apple platform dev via MCP) — indicates demand for native/mobile-specific tooling in the ecosystem.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#6251](https://github.com/anthropics/claude-plugins-official/issues/6251) — HIGH.** `security-guidance` v2.0.8 is "fully non-functional" on affected Windows machines — every hook (`UserPromptSubmit`, `PostToolUse`, Stop, commit, push) fails with ENOENT because `sg-python.sh` resolves to an MSIX-packaged Python that can't read the plugin directory. No fix PR yet. This is a total functionality loss for a security plugin, which is particularly bad since users may believe protections are active when they aren't.
2. **[#4894](https://github.com/anthropics/claude-plugins-official/issues/4894) — MEDIUM.** `security-guidance` 2.0.6 registers the same `PostToolUse`/Bash hook 5 times in `hooks.json`, spawning 5 redundant Python processes per Bash call — a performance/resource-waste bug plus duplicated reminder output. Open 45+ days, no fix PR yet.
3. **[#6261](https://github.com/anthropics/claude-plugins-official/issues/6261) — LOW.** `pr-review-toolkit`'s `silent-failure-hunter` agent has an unquoted colon in its YAML frontmatter `description`, breaking strict YAML parsers (Claude Code's own loader tolerates it, so it's currently latent/cosmetic). Filed today as part of a broader audit for this class of bug across plugins — may indicate more instances exist elsewhere in the marketplace.

Notably, both `security-guidance` bugs (#4894, #6251) lack merged fixes despite being open for a while (one over a month), while a comparatively minor `commit-commands` bug (#4327, filed 2026-07-21) did get fixed today.

## 6. Feature Requests & Roadmap Signals

- **[#6259](https://github.com/anthropics/claude-plugins-official/pull/6259) — Xcode/Apple platform plugin.** Signals demand for native mobile/Apple ecosystem tooling via MCP; likely to merge given it reportedly passes `claude plugin validate`.
- **SLSA provenance workflow** (submitted twice: [#6256](https://github.com/anthropics/claude-plugins-official/pull/6256), [#5655](https://github.com/anthropics/claude-plugins-official/pull/5655)) — indicates a push toward supply-chain security/attestation for the marketplace, likely a maintainer or community priority given the repeat submission.
- Partner plugin pipeline continues to grow (Wingspan, incident.io, Qodo, Airwallex) — expect more partner-driven listings next cycle, though the note that "the community-catalog publish step ... has not run since 2026-08-24" ([#6258](https://github.com/anthropics/claude-plugins-official/pull/6258)) suggests a broken/stalled automation pipeline that may need maintainer attention before more partner PRs pile up as manual stopgaps.

## 7. User Feedback Summary

- Real pain points center on **plugin reliability of `security-guidance`**, a bundled/official plugin: process duplication (#4894) and complete Windows breakage (#6251). Both are filed by first-time-looking external reporters (AdventureEd, sasysolutions1) with detailed root-cause analysis, suggesting technically sophisticated users are hitting these in real workflows, not edge cases.
- The `pyright-lsp` context-pollution fix (#6260) reflects a usability complaint: verbose/irrelevant LSP diagnostics degrading the Claude Code context window — a "signal-to-noise" concern from LSP-plugin users.
- The `commit-commands` `/clean_gone` bug (#4327) shows a plugin silently doing nothing useful ("no cleanup needed" when it should find branches) — a case of a broken feature failing silently rather than erroring, ironically the same bug class the reporter of #6261 says they were specifically auditing for.
- No explicit satisfaction signals (no 👍 or positive comments) surfaced in this window; feedback captured is entirely bug/friction-oriented.

## 8. Backlog Watch

- **[#4894](https://github.com/anthropics/claude-plugins-official/issues/4894)** — Open since 2026-08-05 (45 days), only 1 comment, no fix merged. A duplicate-hook-execution bug in an official security plugin sitting unresolved this long warrants maintainer prioritization.
- **[#6251](https://github.com/anthropics/claude-plugins-official/issues/6251)** — Only 2 days old but marks the plugin as *fully non-functional* on Windows; given severity, this should be escalated ahead of typical triage order rather than left to age like #4894.
- **Stalled community-catalog automation** (referenced in [#6258](https://github.com/anthropics/claude-plugins-official/pull/6258)) — not an issue/PR itself, but the underlying pipeline has been down since 2026-08-24 (26 days), forcing partner plugins through manual PR stopgaps. This is an infrastructure debt item maintainers should address to avoid an accumulating queue of ad-hoc partner PRs.
- Duplicate SLSA workflow PRs (#6256 and #5655, filed 23 days apart) suggest the first submission wasn't triaged/communicated back to the contributor, leading to a resubmission — a process signal worth a maintainer response even though both are now closed.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest
**Date:** 2026-09-19 | **Source:** [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)

## 1. Today's Overview

Activity in the last 24 hours was entirely resource-curation traffic: 10 issues were updated (all still open, none closed), zero PRs, and zero new releases. This repo functions as a curated index rather than an active codebase, so "activity" here means new tool/resource submissions moving through the review pipeline — not code changes. 9 of the 10 issues already carry the `validation-passed` label, indicating the maintainer's automated/manual triage is keeping pace with the submission volume. Overall health signal: steady, low-friction community contribution flow with no visible backlog stress or reported defects today.

## 2. Releases

None. No new releases in this period.

## 3. Project Progress

No PRs were merged or closed today, and no issues were closed. All 10 touched issues remain open, meaning today's activity was purely intake (new submissions + first-pass label triage), not resolution.

## 4. Community Hot Topics

Engagement is uniformly light — this is a low-comment-volume repo by nature (submissions get a quick maintainer ack, not discussion threads):

- [#2842 — Oddyssey](https://github.com/hesreallyhim/awesome-claude-code/issues/2842) (2 comments, 5 days open) — an Observability & Monitoring plugin packaged for both Claude Code and Copilot; the multi-day-open status with a second comment suggests some back-and-forth on categorization or metadata, worth a light watch.
- All other 9 issues sit at 0–1 comments, consistent with same-day or next-day submission acknowledgment.

Underlying signal: submitters are primarily seeking **listing/visibility** for their tools rather than raising support questions — the low comment counts reflect a smooth, templated submission process rather than disengagement.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. This is expected: the repo has no runtime/build surface of its own (it's a curated Markdown/YAML list), so stability issues would only ever appear in submission tooling (e.g., the validation bot), and none surfaced in this window.

## 6. Feature Requests & Roadmap Signals

There are no direct feature requests against the *awesome-claude-code* repo itself today. However, the submission content reveals where the broader Claude Code ecosystem is heading, which indirectly shapes what categories the list will need to expand:

- **Observability & Monitoring** is a recurring theme — [Oddyssey](https://github.com/using-system/oddyssey) (#2842) and [ClaudeWatch](https://github.com/maydali28/claudewatch) (#2875) both target usage/cost/ODD-style monitoring, suggesting the category may need sub-splitting if volume continues.
- **Agent Orchestration / multi-agent runners** — [nightaudit](https://github.com/kishormorol/nightaudit) (#2880, read-only code review CLI) and [ShipIt](https://github.com/nikzlabs/shipit) (#2877, browser IDE running Claude Code/Codex/OpenCode/Grok Build/Antigravity side-by-side) point to growing interest in cross-agent tooling that treats Claude Code as one of several interchangeable backends.
- **Skills tooling maturity** — [skill-quality-suite](https://github.com/letsloose501/skill-quality-suite) (#2874, a linter for whole skill directories) and [Agent Skills for Knowledge Work](https://github.com/tronghieu/agent-skills) (#2879, 18 non-coding skills) signal the Skills ecosystem moving from "content" to "tooling/QA" maturity — a plausible next-version signal for the list is a Skills sub-category split (authoring tools vs. skill packs).
- **On-device/local execution** — [Claude Code Local](https://github.com/nicedreamzapp/claude-code-local) (#2881) reflects continued demand for offline/local-first runtime options.

## 7. User Feedback Summary

No explicit satisfaction/dissatisfaction commentary appears in today's window — all 10 items are structured `[Resource]:` submission templates (Display Name / Category / Link / Description), not discussion or support threads. The implicit signal is submitter intent: contributors are motivated to get their tools discoverable in a high-visibility curated list, and the categories they're choosing (Observability, Agent Orchestration, Providers/Runtime Infrastructure, Skills, Alternative Clients, Linting) map closely to where they perceive gaps or growth in the current list.

## 8. Backlog Watch

Nothing today qualifies as stale — the oldest touched issue ([#2842](https://github.com/hesreallyhim/awesome-claude-code/issues/2842)) was only opened 5 days ago and is already validation-passed. Two items lack the `validation-passed` label and merit a maintainer look since they're not yet in the standard triage lane:

- [#2876 — KinetAios](https://github.com/hesreallyhim/awesome-claude-code/issues/2876) (no validation label, 0 comments)
- [#2873 — Universal Exam Cram Coach](https://github.com/hesreallyhim/awesome-claude-code/issues/2873) (no validation label, 0 comments)

Both are same-day submissions, so not yet "stale," but they're the two items most likely to fall through if the validation pass is what gates eventual merge into the README.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest (2026-09-19)

## 1. Today's Overview

VoltAgent/awesome-agent-skills remains in steady, community-driven growth mode: 7 new pull requests landed in the last 24 hours, all proposing additions of third-party skills to the Community Skills catalog, alongside 1 new issue. No PRs were merged or closed today, and no new releases shipped — activity is entirely inbound (submissions), with maintainer review/merge throughput at zero for the period. This pattern is consistent with a curated "awesome list" repo where submission volume regularly outpaces review capacity. Overall health signal: **active but review-bottlenecked**.

## 2. Releases

None. No new releases in this period.

## 3. Project Progress

No PRs were merged or closed today — all 7 open PRs (#1060, #1067, #1068, #1070, #1071, #1072, #1073) remain pending maintainer review. No feature or bugfix progress landed; all movement is at the submission stage.

## 4. Community Hot Topics

Engagement today is uniformly low — no issue or PR has any comments or 👍 reactions yet, so nothing stands out as a "hot" discussion. The most notable submissions by content scope:

- **[PR #1073 – Add skill: superagnt/leverage](https://github.com/VoltAgent/awesome-agent-skills/pull/1073)** — 18 social/marketing data skills (LinkedIn, X, Reddit, YouTube, TikTok, Instagram, Facebook) plus lead enrichment and SEO research. Signals demand for social-listening and growth-marketing agent tooling.
- **[PR #1072 – Add skill: Datura-ai/lium](https://github.com/VoltAgent/awesome-agent-skills/pull/1072)** — an agent-first GPU rental marketplace skill (Bittensor Subnet 51), enabling headless compute provisioning. Reflects growing interest in agents that can autonomously acquire compute resources.
- **[PR #1071 – Add skill: tronghieu/agent-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1071)** — 18 knowledge-work skills (strategy, research, writing), indicating continued demand for general productivity skill packs.

Underlying need: contributors are treating this repo as the primary discovery channel for niche, vertical-specific agent skills (marketing, DeFi/crypto, GPU infra, e-commerce, education), suggesting the "skills marketplace" category is diversifying quickly.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today. **[Issue #1069](https://github.com/VoltAgent/awesome-agent-skills/issues/1069)** ("sikls") has no description/body and no comments — likely a low-quality, incomplete, or possibly spam/test submission rather than a substantive stability report. Recommend maintainer triage/closure if it remains empty.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today; all forward-looking signal comes from PR submissions proposing new skill entries rather than core tooling changes. Notable candidate additions likely to be merged given they follow contribution conventions (naming, word-limit descriptions, category placement):
- **[#1070 – wwewtech/anti-slop-design](https://github.com/VoltAgent/awesome-agent-skills/pull/1070)** — explicitly notes compliance with the 7-word description limit and Agent Skills spec, suggesting a well-formed, low-friction merge candidate.
- **[#1067 – yuyang2230/taobao-shop-growth](https://github.com/VoltAgent/awesome-agent-skills/pull/1067)** — bilingual CN/EN e-commerce skill pack, expanding non-English-market coverage.

Roadmap signal: continued expansion of "Community Skills" subcategories (Marketing, Specialized Domains, Development and Testing, Productivity and Collaboration) rather than core repo architecture changes.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction feedback (comments, reactions) was recorded today. Indirectly, contributors are self-reporting real-world validation in PR descriptions — e.g., PR #1067 describes its skill as "field-tested" and "actually in use" for Taobao/Qianniu store operations, and PR #1073 emphasizes a working backend service — indicating contributors value demonstrating practical, production-tested skills over speculative ones.

## 8. Backlog Watch

- **[PR #1060 – Add HostDeFi token-safety scanner](https://github.com/VoltAgent/awesome-agent-skills/pull/1060)** — open since 2026-09-15, the oldest unresolved PR in this window (4 days pending), still awaiting maintainer review. Given it touches DeFi/crypto tooling with an on-chain safety scanner, it may warrant extra scrutiny before merge.
- **[Issue #1069](https://github.com/VoltAgent/awesome-agent-skills/issues/1069)** — empty/unclear issue with zero engagement; needs maintainer triage to determine if it's actionable or should be closed.
- All 7 open PRs remain unmerged with zero maintainer comments to date — the review queue is growing without corresponding throughput, worth flagging for maintainer bandwidth.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
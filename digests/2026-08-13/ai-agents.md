# MCP Ecosystem Digest 2026-08-13

> Issues: 3 | PRs: 7 | Projects covered: 7 | Generated: 2026-08-13 08:16 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-08-13)

## 1. Today's Overview

Activity in the last 24h is concentrated in open Issues and PRs rather than shipped changes: 3 issues and 7 PRs were touched, but **zero were merged or closed**, and no new releases went out. The mix skews toward security and correctness hardening — two independent SSRF-prevention PRs for the `fetch` and `everything` servers, plus a cluster of `server-filesystem` bug reports and fixes around non-ASCII/Unicode path handling. The long-running memory-hardening discussion (#4117, open since May) remains the most-commented thread in the repo. Overall this reads as a healthy, actively-triaged project, but the complete absence of merges today — including a PR open since April (#3921) — suggests maintainer review bandwidth is the current bottleneck rather than lack of contributor activity.

## 2. Releases

None in this window.

## 3. Project Progress

No PRs were merged or closed in the last 24h. All 7 open PRs remain under review, spanning three workstreams:
- **Security hardening (fetch/everything servers):** [#4497](https://github.com/modelcontextprotocol/servers/pull/4497) and [#4498](https://github.com/modelcontextprotocol/servers/pull/4498), both by @olaservo, add SSRF protection against internal/metadata IP targets.
- **Filesystem path correctness:** [#4638](https://github.com/modelcontextprotocol/servers/pull/4638) (Unicode normalization) and [#3921](https://github.com/modelcontextprotocol/servers/pull/3921) (Windows UNC paths).
- **Fetch server reliability/UX:** [#4636](https://github.com/modelcontextprotocol/servers/pull/4636) (configurable timeouts) and [#4637](https://github.com/modelcontextprotocol/servers/pull/4637) (retry with backoff).
- **Infrastructure:** [#4634](https://github.com/modelcontextprotocol/servers/pull/4634) adds a multi-arch container image build workflow.

No feature progress can be reported as "landed" until these merge.

## 4. Community Hot Topics

- **[#4117 — memory: safer persistence defaults, atomic writes, quotas, redaction, and destructive-operation guardrails](https://github.com/modelcontextprotocol/servers/issues/4117)** — 22 comments, still updating as of today despite opening on 2026-05-06. By far the most active thread in the dataset. It's a maintainer-adjacent contributor sharing a hardened wrapper around `server-memory`, signaling that default persistence behavior (unsafe writes, no quotas, no redaction) is a recurring pain point for teams running MCP in production. The volume of discussion suggests real appetite for upstreaming at least some of these safeguards rather than leaving them as forks.
- **SSRF hardening pair ([#4497](https://github.com/modelcontextprotocol/servers/pull/4497) / [#4498](https://github.com/modelcontextprotocol/servers/pull/4498))** — both updated today, submitted by the same author, indicate a coordinated security push around model-controlled URL fetching, a well-known risk class for tool-using agents.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#4628 — server-filesystem: `move_file` silently overwrites an existing destination (data loss)](https://github.com/modelcontextprotocol/servers/issues/4628)** — *High severity.* Silent data loss with no confirmation or error is the most serious bug reported today; affects Windows deployments via `supergateway`. **No corresponding fix PR** currently in the open list — this is unaddressed.
2. **[#4633 — `move_file` fails with non-ASCII characters (French accents, œ, typographic apostrophe)](https://github.com/modelcontextprotocol/servers/issues/4633)** — *Medium severity,* functional breakage for non-English filesystems. Likely addressed by **[#4638 — fix(filesystem): resolve Unicode-equivalent paths](https://github.com/modelcontextprotocol/servers/pull/4638)**, opened the same day, which fixes NFC/NFD normalization mismatches in path resolution.
3. **[#3921 — Fix `isPathWithinAllowedDirectories` for UNC paths on Windows](https://github.com/modelcontextprotocol/servers/pull/3921)** — Windows-specific path-validation bug fix, open since April with no merge yet — a stale but still-relevant correctness issue.

Notably, three of the four filesystem items reported/updated today involve path-handling edge cases (non-ASCII, Unicode normalization, UNC paths, silent overwrite) — this looks like a systemic weak spot in `server-filesystem`'s path-handling logic rather than isolated bugs.

## 6. Feature Requests & Roadmap Signals

- **Container image distribution** ([#4634](https://github.com/modelcontextprotocol/servers/pull/4634)) — multi-arch GHCR images for all `src/` servers with Dockerfiles; a deployment-ergonomics feature likely to land soon given it's additive infra with no behavioral risk.
- **Configurable fetch timeout** ([#4636](https://github.com/modelcontextprotocol/servers/pull/4636)) — CLI/env/per-call override, addresses a concrete pain point (hardcoded 30s timeout breaking large downloads).
- **Fetch retry/backoff** ([#4637](https://github.com/modelcontextprotocol/servers/pull/4637)) — reduces boilerplate for every caller having to reimplement retry logic; a reasonable near-term roadmap candidate.
- **Memory server hardening** (from #4117) — atomic writes, quotas, redaction, and destructive-operation guardrails are the most substantive proposed feature set, though no PR has been opened yet to formalize it.

Most likely next-release candidates: #4634 (low risk, additive) and #4638 (fixes a clear regression), given they're the least controversial changes in flight.

## 7. User Feedback Summary

- Users running MCP servers in production are hitting **real data-safety gaps**: silent file overwrites (#4628) and unsafe memory-server persistence (#4117) both stem from a lack of guardrails around destructive operations — a recurring theme rather than one-off complaints.
- **Internationalization pain**: non-ASCII and Unicode-normalization path bugs (#4633, #4638) indicate the filesystem server wasn't originally tested against non-English locales, which is now surfacing as multiple independent bug reports.
- **Security-conscious operators** are proactively hardening the `fetch`/`everything` servers against SSRF before it becomes an incident — reflects growing production/enterprise adoption where model-triggered network requests are a recognized threat surface.
- No explicit satisfaction signals in this window; feedback is skewed toward gaps and hardening requests, consistent with a maturing project under increased scrutiny.

## 8. Backlog Watch

- **[#4117](https://github.com/modelcontextprotocol/servers/issues/4117)** — open since 2026-05-06 (99+ days), 22 comments, no resolution or upstream PR yet despite sustained engagement. Needs a maintainer decision on scope (full hardened wrapper vs. incremental defaults).
- **[#3921](https://github.com/modelcontextprotocol/servers/pull/3921)** — open since 2026-04-12 (~4 months), a straightforward Windows path-validation bugfix still unmerged. Low-risk, high-value fix that appears to be stuck in the review queue.
- **[#4628](https://github.com/modelcontextprotocol/servers/issues/4628)** — data-loss bug with no fix PR yet; given the severity (silent overwrite), this warrants faster triage than its current 1-comment, 2-day-old status suggests it's getting.

---

## Cross-Ecosystem Comparison

Cross-Project Comparison: MCP Server Ecosystem — Daily Digest, 2026-08-13

## 1. Ecosystem Overview

The MCP (Model Context Protocol) ecosystem shows two distinct layers of activity: core protocol infrastructure (servers, registries) undergoing steady, security-conscious hardening, and a much larger surrounding layer of curated marketplaces (awesome-lists, plugin registries) absorbing a flood of third-party submissions. Across all six tracked projects, zero releases shipped in the last 24h, and merge/close throughput is uniformly low relative to inbound volume — a consistent signal that review bandwidth, not contributor interest, is the binding constraint ecosystem-wide. The dominant technical theme is agent infrastructure maturation: memory/persistence safety, security hardening against model-triggered network/file operations, and multi-instance/multi-session correctness are recurring asks across independent projects. Community submission volume (88 PRs on Awesome MCP Servers, 48 on Awesome Agent Skills, 50 on Claude Plugins) indicates explosive tooling proliferation, while the core `servers` and `registry` repos show a smaller but higher-stakes stream of security and data-integrity fixes.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Health Score |
|---|---|---|---|---|---|
| **MCP Servers** | 3 | 7 | 0 | None | ⚠️ Moderate — active triage, zero merge throughput, one unaddressed high-severity data-loss bug |
| **MCP Registry (official)** | 0 | 5 | 0 | None | ✅ Good — low churn, mature/stable, nothing overdue |
| **Awesome MCP Servers** | 0 | 88 | 13 | None | ⚠️ Moderate — highest volume, backlog growing (75 open vs 13 closed) |
| **Docker MCP Registry** | 0 | 21 | 0 | None | ⚠️ Moderate — zero merges, PRs stale up to 9 months |
| **Claude Plugins (official)** | 22 | 50 | ~16 (mostly bot) | None | 🔴 Weakest — active data-loss bug (`/clean_gone`), systemic Telegram plugin failures |
| **Awesome Claude Code** | 10 | 2 | 2 | None | ✅ Good — same-day submission→merge pipeline functioning |
| **Awesome Agent Skills** | 0 | 48 | 22 | None | ✅ Good — highest merge-through-rate of the submission-heavy repos |

## 3. MCP Servers's Position

**Advantages vs. peers:** As the reference implementation repo (not a curation list), MCP Servers carries disproportionate ecosystem weight — its SSRF-hardening work (#4497/#4498) and filesystem safety fixes set patterns that ripple into every downstream server built on the protocol. It's the only project in this set doing genuine security-engineering work (network-boundary and path-validation logic) rather than metadata curation.

**Technical approach differences:** Where Awesome MCP Servers, Docker MCP Registry, and Claude Plugins largely process *listings* (adding third-party entries with light automated validation), MCP Servers ships and maintains executable reference server code — meaning its bugs (e.g., #4628 silent overwrite) carry direct production risk rather than "bad link in a list" risk.

**Community size comparison:** MCP Servers' single most-active thread (#4117, 22 comments over 99+ days) is modest compared to Claude Plugins' Telegram cluster (8+ issues, up to 12 👍) or Awesome MCP Servers' raw submission throughput (88 PRs/day). This suggests MCP Servers has a smaller but more technically engaged contributor base, versus the broad, high-volume, lower-depth engagement typical of the marketplace repos.

## 4. Shared Technical Focus Areas

- **Agent memory/persistence safety** — MCP Servers (#4117, atomic writes/quotas/redaction), Docker MCP Registry (#4676 Leteo local-first memory), Awesome Agent Skills (#890 Breadcrumbs, #886 red-handed self-verification). Three independent projects are converging on "agents need safer, auditable memory" as unmet infrastructure.
- **Destructive-operation guardrails** — MCP Servers (#4628 silent file overwrite), Claude Plugins (#5222/#4504 `/clean_gone` deletes live branches/uncommitted work). Two separate projects report agent-adjacent tooling that destroys user data with no confirmation — a systemic gap in "are you sure?" UX for agent-invoked operations.
- **Network/SSRF security hardening** — MCP Servers (#4497/#4498 fetch/everything servers), Claude Plugins (#831 secrets migrated from `.env` to keychain storage). Both reflect growing enterprise/production scrutiny of model-controlled network and credential access.
- **Multi-instance/multi-session correctness** — Claude Plugins (#261 gopls daemon mode, Telegram polling conflicts #881). Resource contention when multiple agent sessions run concurrently is an emerging pain point outside MCP Servers' scope but adjacent to it.
- **Internationalization/path-handling robustness** — MCP Servers alone today (#4633, #4638, #3921), but reflects a common blind spot (non-English locale testing) likely latent in other file-touching MCP servers listed in the registries.

## 5. Differentiation Analysis

| Dimension | MCP Servers / Registry | Awesome-list repos (MCP Servers, Claude Code, Agent Skills) | Claude Plugins (official) |
|---|---|---|---|
| **Feature focus** | Protocol-compliant reference implementations, security correctness | Discovery/curation of third-party tools | Marketplace distribution + bundled functional plugins (Telegram, Discord, hookify) |
| **Target users** | Server implementers, security-conscious operators | Developers browsing for tools | End-users running Claude Code with installed plugins |
| **Technical architecture** | TypeScript/Node servers implementing MCP spec directly | Markdown + bot-driven metadata validation (`has-glama`, `valid-name`) | Plugin manifests + runtime bot integrations (Telegram/Discord APIs) |
| **Risk profile** | Code-level bugs affect all downstream consumers | Low — worst case is a bad/duplicate listing | High — plugins run with live credentials/state, directly causing user data loss |

The clearest differentiation: **Claude Plugins is the only project where bugs cause direct, irreversible user harm today** (branch/file deletion, lost Telegram messages), because it ships and runs executable end-user functionality rather than curating references to it.

## 6. Community Momentum & Maturity

- **Rapidly iterating / high submission volume:** Awesome MCP Servers (88 PRs/day), Awesome Agent Skills (48 PRs/day, 22 merged — best throughput ratio), Claude Plugins (50 PRs, but dominated by bot SHA-bumps).
- **Stabilizing / mature, low-churn:** MCP Registry (official) — 5 PRs, all routine (dependency bumps + 2 listings), no backlog concerns. Awesome Claude Code — same-day submission-to-merge pipeline, healthiest turnaround of all seven.
- **Actively hardening (mid-maturity, security-focused):** MCP Servers — lower volume but concentrated on correctness/security rather than growth; classic signs of a project past initial feature-race, now paying down risk.
- **Under strain:** Docker MCP Registry (zero merges, pin PRs stale up to 9 months) and Claude Plugins (22 issues/day against unresolved Telegram cluster + open data-loss bugs) show submission/report volume outpacing maintainer response — the two clearest backlog-risk projects in this set.

## 7. Trend Signals

1. **"Agent-safe by default" is becoming a purchasing/adoption criterion.** Submitters across Docker MCP Registry, Awesome MCP Servers, and Awesome Agent Skills increasingly lead with "no network access," "local-first," "no credential storage," or "sandboxed" in their pitches — security posture is now a competitive differentiator for new MCP servers/skills, not an afterthought.
2. **Destructive-operation guardrails are an unsolved, cross-cutting gap.** Two unrelated projects (MCP Servers, Claude Plugins) independently shipped agent tooling that silently deletes user work. For developers building agent tools, this signals a concrete, monetizable gap: confirmation/dry-run/undo primitives for any agent-invoked destructive filesystem or VCS operation.
3. **Memory and persistent state are the next infrastructure layer.** Three independent projects are building toward durable, safe agent memory (quotas, redaction, atomic writes, local-first storage) — a maturity signal that the ecosystem is moving past stateless tool-calling toward agents with durable context.
4. **Review/maintainer bandwidth is the ecosystem-wide bottleneck, not contribution volume.** Every single project in this set shows near-zero merge throughput against steady-to-heavy inbound activity. For teams evaluating which MCP servers/plugins to depend on, PR age and merge cadence — not star count — is the more reliable maturity signal right now.
5. **Multi-session/multi-agent resource contention is emerging as a real-world pain point** (gopls daemon requests, Telegram bot polling conflicts across concurrent sessions), reflecting that "run N agents in parallel" workflows are now common enough to expose infrastructure that wasn't designed for concurrent instances.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

## MCP Registry (official) — Daily Digest, 2026-08-13

### 1. Today's Overview

Activity over the last 24 hours was light and entirely PR-driven: five pull requests were updated, with zero issues touched and no new releases. Three of the five PRs are automated Dependabot dependency bumps (Pulumi SDK, go-containerregistry, and an OpenTelemetry group update), reflecting routine maintenance rather than active feature work. The remaining two are community contributions adding third-party servers/projects to the registry's documentation and listings. No PRs were merged or closed today, so the queue is purely accumulating rather than draining. Overall, this reads as a quiet maintenance day for a mature, low-churn registry project rather than a period of active feature development.

### 2. Releases

None — no new releases in the last 24 hours.

### 3. Project Progress

No PRs were merged or closed in the last 24 hours; all 5 tracked PRs remain open. No features advanced or bugs were resolved today — the day's activity was limited to PR creation/updates awaiting review.

### 4. Community Hot Topics

No comment or reaction counts were reported for any item today (all listed as 0 👍, comments undefined), so there is no clear "hot topic" by engagement. The most notable non-automated items are the two community-submitted registry additions:

- **[#1529 — docs: add mcp-server-audit to Community Projects](https://github.com/modelcontextprotocol/registry/pull/1529)** (Yveshby27) — adds a validation/analysis tool for MCP servers, signaling continued community interest in tooling that helps users vet servers before installation.
- **[#1524 — Add io.decisionrules/mcp-server](https://github.com/modelcontextprotocol/registry/pull/1524)** (ivanperesta-alt) — a business-rules-engine MCP server (decision tables, flows, lookup tables), reflecting demand for connecting enterprise/business-logic systems to MCP clients.

Both suggest an underlying need: growing interest in both **registry trust/validation tooling** and **broadening the catalog of third-party server integrations**.

### 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours (0 issues, and none of the 5 PRs are bug-fix PRs). No stability concerns to flag today.

### 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. However, the two content PRs act as informal roadmap signals:

- **[#1529](https://github.com/modelcontextprotocol/registry/pull/1529)** — likely to be merged soon given it's a low-risk documentation addition (adding an entry to Community Projects).
- **[#1524](https://github.com/modelcontextprotocol/registry/pull/1524)** — a new official registry entry (DecisionRules MCP server); typically requires maintainer review of server metadata/schema conformance before merge, so may take longer.

The three Dependabot PRs (#1530, #1531, #1532) are routine dependency hygiene and likely to be auto-merged or merged quickly if CI passes, with no user-facing feature impact.

### 7. User Feedback Summary

No direct user feedback, complaints, or satisfaction signals surfaced in today's data — the only "user" activity consists of two contributors submitting registry/documentation additions, both framed constructively (adding tools/servers rather than reporting problems). This suggests the community continues to view the registry as a viable, low-friction place to list MCP servers.

### 8. Backlog Watch

None of today's items are stale — all 5 PRs were created and updated within the last 1–2 days (2026-08-11 to 2026-08-12), so nothing here qualifies as long-unanswered yet. Worth flagging for maintainers to keep an eye on:

- **[#1524](https://github.com/modelcontextprotocol/registry/pull/1524)** — new server submissions to the official registry often require closer scrutiny (naming conventions, ownership verification, schema validation); if it sits without maintainer comment past a few more days, it's worth escalating.
- The three Dependabot PRs (**[#1530](https://github.com/modelcontextprotocol/registry/pull/1530)**, **[#1531](https://github.com/modelcontextprotocol/registry/pull/1531)**, **[#1532](https://github.com/modelcontextprotocol/registry/pull/1532)**) should be monitored to ensure they don't pile up unmerged, which can cause future dependency conflicts.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-08-13)

## 1. Today's Overview

Awesome MCP Servers remains a high-volume, submission-driven curation repo rather than a traditional codebase — today's entire signal is PR traffic (88 PRs touched in 24h: 75 open, 13 merged/closed) with zero issues and zero releases, which is normal for a list-style "awesome-*" project. The vast majority of PRs are third-party submissions adding a single new MCP server entry to a category (Finance, Security, Gaming, Marketing, Data Platforms, etc.), auto-tagged by a bot with quality checks (`has-emoji`, `valid-name`, `has-glama`/`missing-glama`, `merge-conflict`, `duplicate`, `non-github-url`). Submission volume is heavy but each PR is low-engagement — every listed item shows 0 comments and 0 reactions, indicating maintainer review is largely automated/asynchronous rather than discussion-driven. One PR (#8672) has an outstanding merge conflict flag, and two PRs closed today for policy reasons (duplicate, non-GitHub URL) rather than being merged. Overall project health looks stable but shows classic "curated-awesome-list" bottleneck symptoms: a fast-growing submission queue against what appears to be a much slower manual/bot-assisted merge cadence.

## 2. Releases

None — no new releases in the last 24h.

## 3. Project Progress

13 PRs were merged or closed today, but only two are visible in the provided top-20 sample, both **closed without merge**:

- [#12052 — Add Bonker MCP server to Finance & Fintech](https://github.com/punkpeye/awesome-mcp-servers/pull/12052) — closed, flagged `non-github-url` (submission likely rejected for pointing to a non-GitHub source repo).
- [#12030 — Add django-orm-lens under Developer Tools](https://github.com/punkpeye/awesome-mcp-servers/pull/12030) — closed, flagged `duplicate` (an equivalent entry likely already exists in the list).

The remaining 11 closed/merged PRs aren't detailed in the top-20-by-comments sample (all entries shown are 0-comment submissions), so their disposition can't be individually assessed from this data — worth a follow-up pull sorted by close time rather than comment count.

## 4. Community Hot Topics

No meaningful engagement signal today — every one of the 88 updated PRs shows 0 comments and 0 👍 reactions, so there is no standout "hot" discussion. This flatness itself is notable: it suggests either (a) comment/reaction counts aren't being captured correctly in this data pull, or (b) the review process here is almost entirely mechanical (bot labeling + maintainer merge) with essentially no public back-and-forth. If (a), re-check the GitHub API field mapping for `comments`/reactions before drawing conclusions about community engagement.

By submission theme, the closest thing to a "trend" today is thematic clustering: several PRs target **agent/coding-workflow tooling** — [#12048 Yuuqq/jules-dispatch](https://github.com/punkpeye/awesome-mcp-servers/pull/12048) (parallel Google Jules dispatch from Claude Code/Codex), [#12055 mellos-mapping](https://github.com/punkpeye/awesome-mcp-servers/pull/12055) (live dependency-map visualization for agent-driven development), and [#12032 MCP Server Starter Demo](https://github.com/punkpeye/awesome-mcp-servers/pull/12032) (a minimal teaching server) — reflecting continued demand for agent-orchestration and agent-education tooling built on MCP.

## 5. Bugs & Stability

No bug reports today — 0 issues updated in the last 24h. The only stability-adjacent signal is at the submission-tooling level: [#8672 Add Interline](https://github.com/punkpeye/awesome-mcp-servers/pull/8672) has been open since 2026-06-24 and currently carries a `merge-conflict` label, meaning it cannot be merged as-is and needs a rebase from the author before it can proceed.

## 6. Feature Requests & Roadmap Signals

No issues filed today means no explicit feature requests against the repo/tooling itself. Reading the submission PRs as a proxy for ecosystem direction, recurring categories suggest where the *MCP server ecosystem* (not the list repo) is heading next:

- **Agent-native payments**: [#8672 Interline](https://github.com/punkpeye/awesome-mcp-servers/pull/8672) — cross-rail (x402/MPP) non-custodial payment discovery for agents.
- **Agent workforce orchestration**: [#12048 jules-dispatch](https://github.com/punkpeye/awesome-mcp-servers/pull/12048) — batch-dispatching parallel coding agents.
- **Agent-facing observability/dev tooling**: [#12055 mellos-mapping](https://github.com/punkpeye/awesome-mcp-servers/pull/12055), [#12054 mcp-sec](https://github.com/punkpeye/awesome-mcp-servers/pull/12054) (sandboxed security "canary-proof" checker), [#12032 MCP Server Starter Demo](https://github.com/punkpeye/awesome-mcp-servers/pull/12032).
- **Vertical/niche data servers**: real estate/freight pricing ([#12050 FromToCargo](https://github.com/punkpeye/awesome-mcp-servers/pull/12050)), local entertainment listings ([#12043 SceneF](https://github.com/punkpeye/awesome-mcp-servers/pull/12043)), enterprise data platforms ([#11930 dolphin-mcp-pilot](https://github.com/punkpeye/awesome-mcp-servers/pull/11930)), official vendor servers ([#11954 questdb/mcp-server-questdb](https://github.com/punkpeye/awesome-mcp-servers/pull/11954)).

For the repo itself, the most likely near-term maintainer action isn't a "feature" but process: resolving the merge-conflict backlog and clearing duplicate/invalid submissions to keep the ~75-open-PR queue from growing further.

## 7. User Feedback Summary

No direct user feedback (issues/comments) surfaced today. Indirectly, submitters are self-selecting toward higher production-readiness: several PRs explicitly call out security/trust properties in their descriptions — read-only/no-credential design ([#12030 django-orm-lens](https://github.com/punkpeye/awesome-mcp-servers/pull/12030), read-only static analysis), sandboxed verification claims ([#12054 mcp-sec](https://github.com/punkpeye/awesome-mcp-servers/pull/12054)), and "no file/network/subprocess/secret access" guarantees ([#12032 MCP Server Starter Demo](https://github.com/punkpeye/awesome-mcp-servers/pull/12032)). This suggests submitters are increasingly aware that security posture is a factor in getting accepted into the list — a soft signal of maturing community norms around MCP server safety, likely influenced by the `has-glama` labeling (Glama's server trust/quality scoring).

## 8. Backlog Watch

- [#8672 — Add Interline](https://github.com/punkpeye/awesome-mcp-servers/pull/8672) — open since 2026-06-24 (~7 weeks), the oldest PR in today's sample, now blocked by a merge conflict. Needs either author rebase or maintainer triage/closure.
- [#11327 — Add new MCP server entries | npmscan.com](https://github.com/punkpeye/awesome-mcp-servers/pull/11327) — open since 2026-08-01 (~12 days), no description/summary provided in the PR body, which may be stalling review.
- General queue depth: 75 open PRs vs. only ~13 closed/merged in the last 24h implies a net backlog increase if this ratio holds day-over-day — worth flagging to maintainers as a throughput concern rather than a single-item watch.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest (2026-08-13)

## 1. Today's Overview

Activity today is driven entirely by pull requests — 21 PRs touched in the last 24h, with zero issues and zero releases. The mix splits cleanly into two categories: **automated dependency-pin updates** (11 of 21, all opened by `mcp-registry-bot[bot]`) and **new server submissions** (10 of 21, opened by individual contributors). No PRs were merged or closed in this window, and none show any comments or reactions yet — this reads as a quiet, submission-heavy day rather than a day of active community discussion or maintainer triage. Overall project health signal: steady inbound contribution volume, but a growing backlog of unreviewed submissions with no visible merge throughput today.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours — all 21 tracked PRs remain open. Nothing advanced to completion today; progress is limited to new submissions being opened and bot-driven pin PRs being refreshed/rebased. Notably several pin-update PRs are quite old and still churn on updates without landing:
- [#788 chore: update pin for omi](https://github.com/docker/mcp-registry/pull/788) — open since 2025-11-26, still unmerged nearly 9 months later.
- [#895 Update local dynatrace-mcp-server config](https://github.com/docker/mcp-registry/pull/895) — open since 2025-12-16.

## 4. Community Hot Topics

No item recorded any comments or 👍 reactions today, so there is no clear "hot" discussion to point to. In the absence of engagement signals, the most notable submissions by novelty/scope are:
- [#4681 Add architecture-pattern-mcp server](https://github.com/docker/mcp-registry/pull/4681) — targets AI coding agents needing architecture-design expertise as a tool.
- [#4676 Add Leteo, local-first persistent memory for coding agents](https://github.com/docker/mcp-registry/pull/4676) — a single-binary Rust/SQLite memory layer for agents, no API key or network dependency, appealing to the local-first/privacy-conscious segment.
- [#4677 Add Naumu remote MCP server](https://github.com/docker/mcp-registry/pull/4677) — knowledge-graph workspace shared between a team and its AI agents, with OAuth/DCR support.

These reflect a broader underlying need: contributors are building infrastructure for agent *memory*, *architecture knowledge*, and *shared team context* — signs the MCP ecosystem is maturing beyond simple tool wrappers toward persistent, collaborative agent state.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were surfaced today (0 issues opened/updated). Nothing to rank.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues today, but the submission PRs signal where the catalog is expanding:
- **Remote/hosted MCP servers** are a recurring pattern: [#4600 Parallel Search](https://github.com/docker/mcp-registry/pull/4600), [#4679 Orshot](https://github.com/docker/mcp-registry/pull/4679), [#4677 Naumu](https://github.com/docker/mcp-registry/pull/4677) — suggests the registry's remote-server intake path is getting steady traffic and may warrant streamlined review/labeling if volume keeps growing.
- **Infrastructure/ops-adjacent servers**: [#4678 MIRASTACK Redfish MCP Server](https://github.com/docker/mcp-registry/pull/4678) (BMC/hardware management) and [#4637 rstream](https://github.com/docker/mcp-registry/pull/4637) (tunnels/remote ops) point toward MCP being adopted for infra/devops tooling, not just dev-productivity use cases.
- **Update PR #895** explicitly requests refreshing a 4-month-stale server definition for dynatrace-mcp-server — a likely near-term merge candidate given it's a low-risk config refresh rather than a new addition.

## 7. User Feedback Summary

No direct user feedback/complaints surfaced today (no comments on any tracked item). The submission descriptions themselves hint at motivations/pain points contributors are solving for:
- Local-first, no-network requirements (Leteo, #4676) — signals demand for privacy-preserving agent tooling without external API dependencies.
- Consolidation of DevOps/migration tooling into agent-accessible form (SousChef, [#3587](https://github.com/docker/mcp-registry/pull/3587) — Chef/SaltStack/Puppet/Ansible migration assistant), suggesting users want AI agents wired directly into legacy infra migration workflows.

## 8. Backlog Watch

Several PRs have sat open far longer than the typical submission cycle and warrant maintainer attention:
- [#788 chore: update pin for omi](https://github.com/docker/mcp-registry/pull/788) — open ~8.5 months (since 2025-11-26), still just a routine pin bump.
- [#895 Update local dynatrace-mcp-server config](https://github.com/docker/mcp-registry/pull/895) — open ~8 months (since 2025-12-16), explicitly flags that the current published definition is stale.
- [#3587 Add SousChef MCP server](https://github.com/docker/mcp-registry/pull/3587) — open since 2026-05-16 (~3 months), a substantive new-server submission still awaiting review.
- The cluster of bot-generated pin PRs opened 2026-07-09–07-18 (#4342, #4343, #4363, #4369, #4380, #4381, #4383, #4393, #4467) — all still open a month later, indicating pin-update PRs may not be getting prioritized for auto-merge or review, which could cause registry entries to drift from upstream commits.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

**Claude Plugins (Official) — Daily Digest — 2026-08-13**

## 1. Today's Overview

Activity is heavy but heavily concentrated: 22 issues and 50 PRs touched in the last 24h, yet the bulk of PR volume (~13+ of the top 20) is automated `github-actions[bot]` SHA-bump PRs for third-party plugin sources — routine maintenance, not feature work. The real signal is a persistent, unresolved cluster of **Telegram plugin** reliability bugs (8+ open/closed issues today alone, spanning connection crashes, state-dir handling, polling conflicts, and watchdog false-positives) and two **destructive-by-default bugs in `commit-commands:/clean_gone`** that delete live branches and uncommitted work. No new releases shipped today. Overall: an actively maintained marketplace repo with strong community bug-reporting, but a widening backlog of unresolved Telegram plugin issues and at least one active data-loss risk.

## 2. Releases
None today.

## 3. Project Progress

Most "progress" today is mechanical: 13+ automated dependency SHA-bump PRs merged/closed (e.g. [#5262 carta-crm](https://github.com/anthropics/claude-plugins-official/pull/5262), [#5260 aws-transform](https://github.com/anthropics/claude-plugins-official/pull/5260)) validated via `claude plugin validate` CI runs — routine, low-risk marketplace hygiene.

Substantive closed PRs:
- [#1424](https://github.com/anthropics/claude-plugins-official/pull/1424) — Telegram v0.0.7 reliability rollup: fixes `TELEGRAM_STATE_DIR`/`CLAUDE_CONFIG_DIR` handling in skills, PID guard, ppid watchdog fix, install stdout — addresses several of the state-dir issues below, though new watchdog/polling bugs have since surfaced.
- [#2854](https://github.com/anthropics/claude-plugins-official/pull/2854) — security-guidance 2.0.6→2.0.7: probes for non-PATH Python 3.10+ on macOS to fix `HOOK_PY_INCOMPATIBLE`, citing telemetry that ~13.6% of macOS sessions run Python 3.9.
- [#3110](https://github.com/anthropics/claude-plugins-official/pull/3110) — project-artifact: documents headless-mode limitations and registry enumeration fix.

Open and pending review: [#831](https://github.com/anthropics/claude-plugins-official/pull/831) migrates Telegram/Discord bot tokens from world-readable `.env` files to `userConfig` secrets (keychain/0600 file) — a real security hardening fix, blocked on an internal dependency merge. [#4291](https://github.com/anthropics/claude-plugins-official/pull/4291) adds a new `bitmovin-player-web` plugin.

## 4. Community Hot Topics

- **[#261](https://github.com/anthropics/claude-plugins-official/issues/261) — gopls daemon mode** (8 comments, 👍12): highest-reaction issue open today. Underlying need: users running multiple concurrent Claude Code sessions on Go repos are burning 1.5–3GB+ RAM on redundant `gopls` instances — a resource-efficiency ask for multi-session workflows.
- **[#846](https://github.com/anthropics/claude-plugins-official/issues/846) — Telegram MCP crashes, messages lost** (7 comments): most-discussed active bug, part of the broader Telegram reliability cluster.
- **[#1378](https://github.com/anthropics/claude-plugins-official/issues/1378)** and **[#881](https://github.com/anthropics/claude-plugins-official/issues/881)** (Telegram polling/error-handling) each drawing follow-up discussion the same day — indicates the community is actively cross-referencing root causes on the poll-loop code, not just filing duplicates.

The dominant underlying need across hot topics: **multi-instance / multi-session correctness** — whether that's gopls daemon-sharing or Telegram bots not stepping on each other across concurrent Claude Code sessions.

## 5. Bugs & Stability (ranked by severity)

1. **Critical — data loss.** [#5222](https://github.com/anthropics/claude-plugins-official/issues/5222): `/clean_gone` uses `git worktree remove --force`, destroying uncommitted work. [#4504](https://github.com/anthropics/claude-plugins-official/issues/4504): `/clean_gone` force-deletes live/unmerged branches via `git branch -D` after a naive `[gone]` grep. [#4680](https://github.com/anthropics/claude-plugins-official/issues/4680) reports the detection pipeline is simultaneously broken in the *other* direction (silent no-op). Together these three describe a command that is unsafe in both failure modes — no fix PR visible yet. **Highest-priority item in this digest.**
2. **High — Telegram plugin systemic failures.** Multiple compounding bugs: crash loops ([#846](https://github.com/anthropics/claude-plugins-official/issues/846)), permanent poll-loop exit on non-409 errors ([#1378](https://github.com/anthropics/claude-plugins-official/issues/1378)), cross-instance polling theft ([#881](https://github.com/anthropics/claude-plugins-official/issues/881)), 409 conflicts with no lock ([#794](https://github.com/anthropics/claude-plugins-official/issues/794)), silent poll failures ([#1093](https://github.com/anthropics/claude-plugins-official/issues/1093)). Partial fixes landed via closed PR [#1424](https://github.com/anthropics/claude-plugins-official/pull/1424) and closed issues [#1470](https://github.com/anthropics/claude-plugins-official/issues/1470), [#851](https://github.com/anthropics/claude-plugins-official/issues/851), [#931](https://github.com/anthropics/claude-plugins-official/issues/931), [#1467](https://github.com/anthropics/claude-plugins-official/issues/1467), [#933](https://github.com/anthropics/claude-plugins-official/issues/933), [#914](https://github.com/anthropics/claude-plugins-official/issues/914) — but new/open reports keep surfacing, suggesting the fix rollup didn't cover every code path.
3. **Medium.** [#1208](https://github.com/anthropics/claude-plugins-official/issues/1208): Telegram plugin's `external_plugins/telegram` source directory is missing entirely from the repo, which may explain some install-time failures reported elsewhere.
4. **Medium.** [#5255](https://github.com/anthropics/claude-plugins-official/issues/5255): hookify rule engine has three bugs causing wrong-tool firing and silent denies — found via production audit where a stop rule fired ~1,000×/day.
5. **Medium.** [#5224](https://github.com/anthropics/claude-plugins-official/issues/5224): iMessage channel replays old messages out of order when `chat.db` backfills (ROWID watermark assumption breaks) — 7 occurrences over 5 weeks in one deployment.
6. **Low/Unclear.** [#4770](https://github.com/anthropics/claude-plugins-official/issues/4770): Claude.exe triggering a Bitdefender alert for an unexpected outbound request — unconfirmed origin, worth monitoring for a supply-chain or telemetry concern.

## 6. Feature Requests & Roadmap Signals

- **gopls daemon mode** ([#261](https://github.com/anthropics/claude-plugins-official/issues/261)) — highest community backing (👍12); plausible near-term candidate given explicit upstream linkage to `claude-code#19517`.
- **Plugin version field enforcement** ([#1758](https://github.com/anthropics/claude-plugins-official/issues/1758)) — low-effort, high-clarity fix (populate missing `version` fields in `plugin.json`) likely easy to land soon.
- **Telegram/Discord secret storage migration** ([#831](https://github.com/anthropics/claude-plugins-official/pull/831)) — already a PR, blocked only on an internal dependency merge; likely ships once unblocked.
- **JFrog plugin source: github → url** ([#2614](https://github.com/anthropics/claude-plugins-official/issues/2614), closed) — a recurring pattern (previously blocked by external-contributor restrictions) that may need an Anthropic-side follow-up PR.

## 7. User Feedback Summary

- **Frustration cluster: Telegram plugin.** By far the most reported pain point — users across many issues describe multi-session setups, multi-bot pairing, and Windows environments all breaking in different ways. The volume and specificity (server.ts line numbers, root-cause analysis) suggests power users are actively debugging the plugin themselves, a sign of engagement but also of insufficient maintainer bandwidth on this one plugin.
- **Trust/safety concern:** [#5222](https://github.com/anthropics/claude-plugins-official/issues/5222) and [#4504](https://github.com/anthropics/claude-plugins-official/issues/4504) reporters explicitly flag that `/clean_gone` silently destroys work with a "success" message — a serious trust erosion risk for a command marketed as safe cleanup.
- **Marketplace submission friction:** [#5111](https://github.com/anthropics/claude-plugins-official/issues/5111) — a submitted plugin stuck in "Submitted" status with no visibility, suggesting the submission pipeline lacks status transparency for external contributors.

## 8. Backlog Watch

- [#261](https://github.com/anthropics/claude-plugins-official/issues/261) (gopls daemon mode) — open since 2026-01-20, ~7 months, still unaddressed despite strong community support (👍12).
- [#1208](https://github.com/anthropics/claude-plugins-official/issues/1208) (Telegram source dir missing from repo) — a structural repo issue that could be blocking multiple other Telegram bug fixes/investigations; deserves priority triage.
- [#5111](https://github.com/anthropics/claude-plugins-official/issues/5111) — external contributor waiting on marketplace visibility since 2026-08-10 with no maintainer response.
- [#4680](https://github.com/anthropics/claude-plugins-official/issues/4680) / [#4504](https://github.com/anthropics/claude-plugins-official/issues/4504) / [#5222](https://github.com/anthropics/claude-plugins-official/issues/5222) — the `/clean_gone` data-loss cluster has no visible fix PR despite the severity; recommend maintainer escalation given the destructive-by-default behavior.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

Today's Awesome Claude Code Digest — 2026-08-13

## 1. Today's Overview

Activity is steady but routine — 10 issues and 2 PRs touched in the last 24h, all following the repo's standard resource-submission workflow (community members proposing tools/skills for the curated list). No code releases; this is a curation repo, not a software project, so "activity" here means new resource submissions and their review/merge cycle. Health signals look normal: submissions are being triaged quickly (several opened and closed same-day), with automated bot PRs (`github-actions[bot]`) driving most of the pipeline. No bugs, crashes, or regressions were reported — expected, since this repo has no runtime code.

## 2. Releases

None today.

## 3. Project Progress

Two PRs closed today, both automated `github-actions[bot]` submissions that add new entries to the awesome list:
- [PR #2509 — Add resource: SuperSEO Skills](https://github.com/hesreallyhim/awesome-claude-code/pull/2509) — adds a Claude Skills pack for SEO workflows (linked to issue #1644, closed same day).
- [PR #2505 — Add resource: Diagram Design](https://github.com/hesreallyhim/awesome-claude-code/pull/2505) — adds a design/UI tool for improving Claude Code output presentation (linked to issue #2504, closed same day).

Both follow the repo's pattern of an issue submission auto-generating a companion PR, which is then merged/closed together — indicating the submission→merge pipeline is functioning smoothly with same-day turnaround.

## 4. Community Hot Topics

Comment activity is modest and evenly spread — nothing spiking, but a few submissions drew slightly more discussion:
- [#1644 — SuperSEO Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/1644) (5 comments) — the most-discussed item today, likely reflecting back-and-forth on categorization or license clarification before approval.
- [#2504 — Diagram Design](https://github.com/hesreallyhim/awesome-claude-code/issues/2504) (3 comments) — similar review discussion pattern.
- [#1157 — chrome-cdp-ex](https://github.com/hesreallyhim/awesome-claude-code/issues/1157) (2 comments) — a Chrome DevTools Protocol integration tool, still open after review started 2026-03-26.

Underlying need: contributors want a fast, low-friction path to get niche Claude Code tooling (Skills packs, integrations, orchestration tools) discoverable via this list — the comment threads mostly reflect maintainers validating metadata (license, category) rather than substantive debate.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today. This is a curated-list repository with no executable product surface, so this category is not applicable in the usual sense.

## 6. Feature Requests & Roadmap Signals

No formal feature requests against the repo itself, but the submission stream signals where the broader Claude Code ecosystem is heading:
- **Agent orchestration at scale**: [#2500 — Superset](https://github.com/hesreallyhim/awesome-claude-code/issues/2500), an IDE to orchestrate 100+ coding agents in parallel — reflects growing interest in multi-agent workflows.
- **MCP-based harness discovery**: [#2501 — agent-harnesses-mcp](https://github.com/hesreallyhim/awesome-claude-code/issues/2501), an MCP server recommending agent harnesses.
- **Lifecycle/analytics tooling**: [#2508 — claude-lifecycle](https://github.com/hesreallyhim/awesome-claude-code/issues/2508), which scores what a project's analytics data supports before generating content.
- **Context/memory management**: [#2506 — cicada-husk](https://github.com/hesreallyhim/awesome-claude-code/issues/2506) (auto-closed, validation-pending), targeting context-window discipline.

These suggest the next wave of community tooling is converging on orchestration, context management, and harness/agent selection — likely to keep growing as submission categories in coming weeks.

## 7. User Feedback Summary

No direct dissatisfaction signals in this window. Submitters are generally positive/promotional about their own tools (expected for a resource-submission repo). One data point worth noting: [#2506 — cicada-husk](https://github.com/hesreallyhim/awesome-claude-code/issues/2506) was auto-closed via the `auto-closed` label with `validation-pending` still attached — suggesting the automated validation bot may have timed out or the submission didn't meet a required check, which could be a source of contributor friction if not clearly communicated.

## 8. Backlog Watch

- [#1157 — chrome-cdp-ex](https://github.com/hesreallyhim/awesome-claude-code/issues/1157) — open since 2026-03-26 (over 4 months), still only `validation-passed` without `approved`/`pr-created` labels seen on same-day-approved items. Worth a maintainer look given it's aged well past the same-day turnaround pattern seen elsewhere today.
- [#1714 — CLIRank](https://github.com/hesreallyhim/awesome-claude-code/issues/1714) — open since 2026-04-26, closed today after ~3.5 months in review; illustrates that some submissions sit far longer than the same-day cases, suggesting inconsistent triage speed worth investigating.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest (2026-08-13)

## 1. Today's Overview

Activity remains heavily weighted toward **community skill submissions** rather than core maintenance: 48 PRs touched in the last 24h (26 still open, 22 merged/closed), but zero issues and zero releases. This is consistent with the project's nature as a curated awesome-list — nearly every open PR is a new entry request (`Add skill: ...`) rather than a bug fix or feature change to tooling. No engagement metrics (comments, 👍) were recorded on any item today, so it's not possible to identify which submissions are drawing maintainer or community discussion from reactions alone; ranking below is based on submission recency and content instead. Overall project health looks like a steady, high-volume intake pipeline with no reported defects or instability.

## 2. Releases

None today.

## 3. Project Progress

22 PRs were merged/closed in the last 24h, all of them skill-addition submissions being processed through the review queue (accepted, superseded, or rejected). The one visible closure with detail is:

- [#794 — Add skill: Optim-Agent/optim-agent](https://github.com/VoltAgent/awesome-agent-skills/pull/794) (closed) — an agent-guided optimization skill for tuning configurable systems (HPO, inference tuning, RL/control experiments). Opened 2026-07-15, closed 2026-08-12 after ~4 weeks in review.

No changes to repository tooling, CI, or documentation infrastructure were observed — all progress is catalog growth.

## 4. Community Hot Topics

No comment or reaction counts were available for any item today, so "hot" can't be measured by engagement. By volume and topical clustering, the most notable open submissions are:

- [#877 — Add skill: agentbody/skills](https://github.com/VoltAgent/awesome-agent-skills/pull/877) — bundles **nine** separate skills (competitor monitoring, demand research, lead-finding, humanize-writing, etc.) in one PR, the largest single submission today.
- [#874 — Add skill: tjboudreaux/cc-thinking-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/874) — a 28-skill collection claiming 5.2K install count via skills.sh, notable for scale of existing adoption.
- [#886 — Add sjh9714/red-handed](https://github.com/VoltAgent/awesome-agent-skills/pull/886) — a skill that verifies whether an agent's claimed passing tests actually ran, by inspecting session transcripts and git state. Signals growing community interest in **agent self-verification/anti-hallucination tooling**.

The underlying need visible across today's batch: contributors are increasingly submitting **multi-skill bundles from a single maintainer/org** (agentbody, tjboudreaux, perso-ai, product-on-purpose) rather than one-off skills, suggesting the list is becoming a discovery channel for small skill "product lines."

## 5. Bugs & Stability

No bugs, crashes, or regressions reported in the last 24h — expected, since this repo has no runtime/build artifacts of its own; individual skills' stability is out of scope for the list itself.

## 6. Feature Requests & Roadmap Signals

No formal feature-request issues were filed today. Indirect signals from PR content:

- [#878 — Add skill: ZeroPointRepo/youtube-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/878) is a **resubmission** of a previously rejected PR (#625), reworked per maintainer feedback ("no new category, add to existing section"). This suggests maintainers are actively enforcing category discipline rather than letting the taxonomy sprawl — a de facto roadmap signal that **category structure will stay fixed** rather than grow per submission.
- Several PRs (#890 Breadcrumbs, #886 red-handed) target **agent memory/verification tooling**, an emerging sub-theme that could warrant its own subsection if volume continues.

## 7. User Feedback Summary

No direct user feedback (issues, discussions) was posted today. The closest proxy is PR description framing from contributors, who consistently emphasize: public repo + license + working `SKILL.md` + no remote model calls (local-only execution) as selling points (e.g., #886, #874) — indicating the community values **transparency and offline-safe skills** highly when pitching for inclusion.

## 8. Backlog Watch

With 26 PRs currently open and none showing any comments logged, the review queue itself is the main thing needing maintainer attention:

- [#806 — Add skill: AaronZ345/codebase-argus](https://github.com/VoltAgent/awesome-agent-skills/pull/806) — open since 2026-07-17 (~27 days), the oldest unresolved PR in today's set.
- [#883 — Add CANOA numismatics research/education skills](https://github.com/VoltAgent/awesome-agent-skills/pull/883) and [#882 — Add skill: qimister-code/liuyao-quanjie](https://github.com/VoltAgent/awesome-agent-skills/pull/882) are niche/specialized-domain entries (numismatics, I Ching divination) that may sit longer given narrower reviewer expertise needed to evaluate them.

Given the volume-to-zero-comment ratio, it's worth flagging that the review pipeline may be a bottleneck: 26 open PRs with no visible triage activity in the last 24h despite continuous new submissions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
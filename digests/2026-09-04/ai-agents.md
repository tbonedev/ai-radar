# MCP Ecosystem Digest 2026-09-04

> Issues: 3 | PRs: 2 | Projects covered: 7 | Generated: 2026-09-04 11:56 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Project Digest
**Date:** 2026-09-04 | **Repository:** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## 1. Today's Overview

Activity over the last 24 hours was light: 3 issues touched (all still open, none closed) and 2 open PRs, with zero merges and no new releases. The tone is maintenance-oriented rather than feature-driven — the two active PRs are small, targeted fixes (tool annotation correctness and container security hardening) rather than new capability work. Community engagement is modest but includes at least one lingering security-disclosure concern (#4492) that warrants maintainer attention. Overall, this reads as a quiet day for a mature, stable project rather than a sign of reduced health.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. Two fix PRs remain open and awaiting review:

- **[PR #4747](https://github.com/modelcontextprotocol/servers/pull/4747)** — `fix(sequentialthinking): correct readOnlyHint and idempotentHint annotations`. Corrects incorrect tool annotations on the `sequentialthinking` server: since it mutates per-session state (`thoughtHistory`, `branches`) on every call, it should not be marked `readOnlyHint`/`idempotentHint`. Resolves #4721.
- **[PR #4745](https://github.com/modelcontextprotocol/servers/pull/4745)** — `fix(docker): switch to non-root user in container images`. Fixes a regression from #2205 where Python (`fetch`, `git`, `time`) and Node Docker images create an `app` user but never add a `USER app` instruction, leaving containers running as root. Resolves #4741.

Both are unmerged as of this digest; neither has visible review comments yet.

## 4. Community Hot Topics

Ranked by engagement (comments/reactions):

- **[Issue #3878](https://github.com/modelcontextprotocol/servers/issues/3878)** — "mcp-server-fetch drops SSR content from streaming/progressive rendering sites" (8 comments, the most active thread today). Underlying need: users want the `fetch` tool to reliably extract content from modern two-phase streaming SSR sites, not just static/initial HTML. The multi-comment thread suggests active back-and-forth on reproduction or approach, but no fix PR yet.
- **[Issue #4492](https://github.com/modelcontextprotocol/servers/issues/4492)** — "GHSAs" (1 comment). A reporter is following up on three previously-submitted security advisories (SSRF ×2, path traversal) from June 2026, asking whether maintainers have seen them. This is a security-disclosure-response gap, not a feature ask.

## 5. Bugs & Stability

Ranked by severity:

1. **High (security) — [Issue #4492](https://github.com/modelcontextprotocol/servers/issues/4492)**: Unresolved GHSA-tracked SSRF (×2) and path-traversal vulnerabilities reported ~3 months ago (June 2026), with the reporter now chasing acknowledgment. No fix PR visible. This is the most concerning open item — security reports going unanswered for months is a real risk signal.
2. **Medium — [Issue #3878](https://github.com/modelcontextprotocol/servers/issues/3878)**: `mcp-server-fetch` silently drops SSR/streamed content, a functional/data-loss bug affecting an increasing share of modern sites. Active discussion (8 comments) but no linked fix PR yet.
3. **Low/indirect — [PR #4745](https://github.com/modelcontextprotocol/servers/pull/4745)**: Addresses a latent container-hardening bug (images running as root since #2205) — not an active exploit report, but a defense-in-depth gap now being closed.
4. **Unclear — [Issue #4746](https://github.com/modelcontextprotocol/servers/issues/4746)**: Filed using the bug template but left entirely blank (no description, repro steps, or logs). Needs the reporter to follow up before it's actionable.

## 6. Feature Requests & Roadmap Signals

No explicit new-feature requests appeared in today's data — activity skewed toward correctness/security fixes. Likely near-term roadmap signals:
- **Docker security hardening** (PR #4745) is a plausible near-term merge given it's a straightforward, low-risk fix for a known root-container issue.
- **Tool annotation accuracy** (PR #4747) is a small, self-contained correctness fix and a reasonable next-release candidate.
- Indirectly, resolving #3878 may push toward a **more robust fetch/rendering strategy** (e.g., headless-browser-based fetching or wait-for-hydration logic) if maintainers commit to fixing SSR content loss.

## 7. User Feedback Summary

- **Pain point:** Users relying on `mcp-server-fetch` for modern web content report significant, silent data loss on streaming SSR sites — a trust/reliability issue for any workflow that depends on complete page content (#3878).
- **Pain point:** A security researcher who responsibly disclosed vulnerabilities in June 2026 is expressing frustration/uncertainty about whether their report was even seen — a process/communication gap rather than a code issue (#4492).
- **Low-signal noise:** One bug report (#4746) was submitted as an empty template, indicating some incoming issues lack actionable detail and will need triage before consuming maintainer time.
- No explicit positive/satisfaction feedback appeared in today's window.

## 8. Backlog Watch

- **[Issue #4492](https://github.com/modelcontextprotocol/servers/issues/4492)** — flagged as the top priority for maintainer attention: three GHSA security advisories reportedly submitted in June 2026 appear unacknowledged nearly three months later. This is the kind of item that carries reputational and real security risk if it continues to sit unanswered.
- **[Issue #3878](https://github.com/modelcontextprotocol/servers/issues/3878)** — open since April 2026 (created 2026-04-08) with ongoing discussion but no assigned fix; worth escalating given it affects core `fetch` tool reliability on an increasing share of the modern web.
- **[Issue #4746](https://github.com/modelcontextprotocol/servers/issues/4746)** — new and empty; low urgency but should be closed or requested for more info rather than left to accumulate.

---

## Cross-Ecosystem Comparison

# MCP & Claude Agent Ecosystem — Cross-Project Comparison
**Date:** 2026-09-04 | **Projects tracked:** 7

## 1. Ecosystem Overview

The MCP/Claude-agent ecosystem today splits into two distinct species: **protocol infrastructure** (the core `servers` reference repo and the `registry`) which is maturing and increasingly concerned with security hardening, and **curated directories** (Awesome MCP Servers, Docker MCP Registry, Claude Plugins, Awesome Claude Code, Awesome Agent Skills) which are experiencing a submission surge that maintainer review capacity cannot keep pace with. No project shipped a release in the last 24 hours, and engagement (comments/reactions) is unusually flat across the board — signaling this is a routine maintenance window rather than a news cycle. The dominant cross-cutting theme is **trust infrastructure**: multiple independent projects are simultaneously surfacing security-validation gaps (SSRF, path traversal, root containers, silent validator bypasses), suggesting the ecosystem is entering a security-hardening phase as MCP adoption scales past early experimentation. A secondary theme is **automation debt** — bot-generated PRs (dependency pins, SHA bumps) are piling up unmerged for months across three separate registries, pointing to a maturity gap between submission tooling and review tooling.

## 2. Activity Comparison

| Project | Issues (open/closed) | PRs (open/merged·closed) | Releases | Health Signal |
|---|---|---|---|---|
| **MCP Servers** (core) | 3 (3/0) | 2 (2/0·0) | None | 🟡 Stable but a 3-month-unanswered security disclosure (#4492) is a real risk flag |
| **MCP Registry** (official) | 3 (2/1) | 1 (1/0·0) | None | 🟡 Stable; SSRF-adjacent validator fix (#1470) stalled 45+ days |
| **Awesome MCP Servers** | 1 (1/0) | 97 (90/6·1) | None | 🟠 High-volume, ~7% daily clearance rate — bottlenecked |
| **Docker MCP Registry** | 0 (0/0) | 50 (48/0·2) | None | 🔴 Bot-PR backlog up to 9 months old — automation/review gap |
| **Claude Plugins** (official) | 3 (3/0) | 37 (30/7·0) | None | 🟢 Automated pipeline healthy; 2 unaddressed high-severity tooling bugs |
| **Awesome Claude Code** | 13 (12/1) | 0 | None | 🟡 Steady intake, opaque triage pipeline, oldest item ~5 months |
| **Awesome Agent Skills** | 1 (0/1) | 9 (9/0·0) | None | 🟠 Zero merges today, queue growing faster than cleared |

Legend: 🟢 healthy throughput · 🟡 stable with a watch-item · 🟠 bottlenecked · 🔴 backlog risk

## 3. MCP Servers's Position

**Advantages vs. peers:** As the canonical reference implementation repo, MCP Servers carries outsized influence relative to its small activity volume — its two open PRs (tool-annotation correctness, container non-root hardening) address foundational correctness/security issues that ripple downstream into every registry and directory that lists servers built on this pattern. It is the only project in this set whose bugs are *protocol-level* rather than listing/metadata-level.

**Technical approach differences:** Unlike the directory projects (Awesome MCP Servers, Docker MCP Registry), which curate third-party submissions, MCP Servers ships and maintains its own reference server implementations (`fetch`, `git`, `time`, `sequentialthinking`), making it the closest analog to Docker MCP Registry's *code* quality bar rather than its *listing* quality bar — Docker's registry curates external servers, MCP Servers writes them.

**Community size comparison:** By raw volume it is the quietest project tracked (3 issues, 2 PRs) — dramatically smaller than the ~50–97 PRs/day seen in the directory repos. But this reflects repo *type*, not health: directories accumulate submission PRs by design, while a reference-implementation repo accumulates fewer, higher-stakes changes. Its most engaged thread (#3878, 8 comments on SSR content loss in `mcp-server-fetch`) still trails Docker's and Awesome MCP Servers' PR volume by an order of magnitude, but security-disclosure issue #4492 sitting unanswered for 3 months is a maturity gap peer registries haven't yet publicly exhibited to the same degree.

## 4. Shared Technical Focus Areas

- **Security validation gaps (SSRF / path traversal / container hardening):** MCP Servers (#4492 unresolved GHSAs, PR #4745 root-container fix) and MCP Registry (PR #1470 loopback/private-IP bypass in `IsValidRemoteURL`) are independently converging on the same class of bug — network-boundary validation — suggesting a shared underlying weakness in how MCP tooling validates remote/local URLs across the ecosystem.
- **Trust/provenance tooling for MCP servers:** Awesome MCP Servers submissions (Bartholomew — transactional security proxy/rollback; feldspar-scan — repo security scans; ISNAD) and Awesome Claude Code (#1972 TWZRD Agent Intel, #2728 UTA credential verification) both show third-party builders racing to fill a trust gap that core MCP infrastructure hasn't yet solved natively.
- **Automated pin/version-bump review bottlenecks:** Docker MCP Registry (dozens of `chore: update pin` PRs, some 9 months old) and Claude Plugins (30 open SHA-bump PRs, though clearing faster at 7/day) both rely on bot-generated dependency PRs; only Claude Plugins is currently keeping pace.
- **Context/token cost and memory fragmentation:** Awesome MCP Servers (mcpwatch — per-tool context-token cost tracking; MemoryGuard, echocache — shared agent memory) surfaces a pain point — tool-definition bloat and fragmented memory across coding agents — that isn't yet reflected as an issue in any of the core infrastructure repos, suggesting it's an emerging rather than acknowledged need.
- **Self-service authoring/publishing friction:** MCP Registry (#1551 org-namespace grant failures, #1612 username-rename orphaning) and Claude Plugins (#5787 blocked self-edit of own marketplace listing) both show maintainers acting as a bottleneck for actions that authors should reasonably be able to do themselves.

## 5. Differentiation Analysis

| Dimension | Core infra (Servers, Registry) | Directories (Awesome*, Docker Registry) | Plugin marketplace (Claude Plugins) |
|---|---|---|---|
| **Feature focus** | Correctness, security validation | Breadth of catalog, category taxonomy | Version currency + author self-service |
| **Target users** | Server implementers, security researchers | End users discovering tools | Plugin authors + Claude Code users |
| **Technical architecture** | Executable reference code | Markdown lists + bot-tagged compliance (Glama checks, `missing-glama`) | GitHub Actions bot pipeline validating pinned SHAs |
| **Review bottleneck type** | Maintainer bandwidth on security triage | Volume overload (7% clearance in Awesome MCP Servers) | Largely solved for bumps; open for human bug reports |
| **Content submission pattern** | N/A (maintainer-authored) | Individual PRs per tool/server | Individual PRs per plugin |

The clearest architectural split is **who owns quality control**: MCP Servers/Registry rely on human code review of security-sensitive logic; the Awesome-lists rely on automated compliance bots (Glama score, naming/emoji linting) as a pre-filter; Claude Plugins uses CI validation (`claude plugin validate`) to auto-generate and often auto-clear bump PRs, making it the most automation-mature of the three models even though its human-reported bugs (#5782, #5781) remain unaddressed.

## 6. Community Momentum & Maturity

**Rapidly iterating / high submission volume (bottlenecked):**
- Awesome MCP Servers (97 PRs/day, 7% clearance) — highest raw contributor interest, but review throughput is the binding constraint.
- Docker MCP Registry (50 PRs/day) — genuine new-server submissions healthy, but 9-month-old bot PRs signal automation without corresponding auto-merge/review capacity.
- Claude Plugins (37 PRs/day, 7 cleared) — best-performing automation pipeline of the three high-volume repos, ~19% same-day clearance.

**Steady, low-velocity intake (stabilizing):**
- Awesome Claude Code (13 issues, 0 PRs) — mature submission-via-issue workflow, opaque but functioning triage (`validation-passed` labeling).
- Awesome Agent Skills (9 PRs, 0 merged) — younger, still forming taxonomy (Context Engineering, agentic-payments skills emerging as ill-fitting new categories).

**Low-volume, high-stakes (mature core infra):**
- MCP Servers and MCP Registry — small, deliberate change volume befitting reference-implementation status, but both carry an aging security-relevant item (3 months and 45 days respectively) that is a maturity warning sign disproportionate to their low activity counts.

Overall momentum in the ecosystem is contributor-driven growth outpacing maintainer review capacity almost everywhere except Claude Plugins' automated bump path — the recurring pattern across 5 of 7 projects is "supply-side interest exceeds review throughput."

## 7. Trend Signals

1. **Security hardening is becoming a first-class, cross-cutting concern rather than a one-off fix.** Independent SSRF/path-traversal/container-root findings in both MCP Servers and MCP Registry, arriving in the same window, suggest the MCP protocol layer is entering a phase where security review debt accumulated during rapid early growth is now surfacing. Developers building on MCP should not assume upstream URL/host validation is complete — the loopback/private-IP bypass pattern (`[::1]`, `0.0.0.0`, IPv4-mapped addresses) is a specific, reusable check worth auditing in any home-grown MCP client.
2. **Third-party trust/provenance tooling is emerging faster than first-party solutions.** Bartholomew, feldspar-scan, ISNAD, MemoryGuard, and credential-verification skills are all community responses to the fact that MCP servers execute arbitrary actions with limited built-in auditability — a gap for agent developers to plan around (e.g., sandboxing or reviewing third-party MCP servers before granting them tool access) rather than assume is solved upstream.
3. **Context-token cost is a maturing pain point as agents accumulate more MCP servers.** mcpwatch's framing (tracking per-tool context cost) signals that multi-server MCP configurations are hitting real context-budget limits in production agent setups — a design consideration for anyone composing many MCP servers into one agent.
4. **Automation-without-review-capacity is a recurring structural failure mode.** Three separate registries (Docker MCP Registry, Claude Plugins, and implicitly Awesome MCP Servers via Glama-check bots) now generate more automated compliance/version PRs than maintainers can clear; Claude Plugins is the most successful counter-example, suggesting CI-gated auto-merge for verified low-risk bumps is the emerging best practice worth adopting elsewhere.
5. **Self-service authoring is a recurring, unmet request.** Original authors being blocked from editing their own registry/marketplace listings (MCP Registry #1612, Claude Plugins #5787) points to a policy gap likely to be addressed industry-wide as these catalogs mature past their initial "all changes go through maintainers" model.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
**Date:** 2026-09-04 | **Repo:** [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview

Activity in the last 24 hours was light: 3 issues touched (2 open, 1 closed) and 1 PR updated, with zero new releases. This reflects a maintenance-phase cadence rather than active feature development — the open items are a mix of an unresolved auth/permissions bug, a routine namespace-cleanup request, and a lingering security-hardening PR that has sat open for over six weeks. No merges or releases shipped today, so overall project velocity looks quiet but not stalled; the registry continues to see steady publisher-side housekeeping traffic (renames, orphaned namespaces) alongside a still-open validator security fix.

## 2. Releases

None. No new releases in the reporting window.

## 3. Project Progress

No PRs were merged or closed today. The one active PR, [#1470](https://github.com/modelcontextprotocol/registry/pull/1470) (`fix(validators): reject loopback/private/link-local hosts in IsValidRemoteURL`), remains open and was only touched via update, not merge — it has been open since 2026-07-21 (45+ days), suggesting review/merge is stalled despite addressing a real SSRF-adjacent validation gap (see Bugs & Stability below).

## 4. Community Hot Topics

- **[#1551 — GitHub auth: org namespace permission not granted](https://github.com/modelcontextprotocol/registry/issues/1551)** (1 comment, 1 👍, open since 2026-08-19, still updated today): The most engaged item this cycle. The underlying need is reliable organization-scoped publishing via `mcp-publisher` — users satisfying all documented OAuth/org-membership requirements still can't get `io.github.<org>/*` namespace grants, which blocks legitimate org-affiliated package publishing.
- **[#1470 — loopback/private host validation fix](https://github.com/modelcontextprotocol/registry/pull/1470)**: Ongoing activity (updated today) signals continued reviewer/author engagement on a security-relevant fix, even without comments logged.

No issue or PR crossed high comment/reaction thresholds today — engagement across the board is low-volume, consistent with routine maintenance traffic.

## 5. Bugs & Stability

Ranked by severity:

1. **High — SSRF-adjacent validation gap** ([PR #1470](https://github.com/modelcontextprotocol/registry/pull/1470), fixes [#1465](https://github.com/modelcontextprotocol/registry/issues/1465)): `IsValidRemoteURL` only blocked the literal strings `localhost`/`127.0.0.1`/`*.localhost`, letting equivalent notations (`[::1]`, `127.0.0.2`, `0.0.0.0`, `[::]`, IPv4-mapped addresses) bypass the loopback/private-network check. This is a real stability/security concern for a remote-URL validator — a fix PR already exists and just needs review/merge.
2. **Medium — Org namespace grant failure** ([#1551](https://github.com/modelcontextprotocol/registry/issues/1551)): Not a crash, but a functional break in the auth flow for org-based publishing. No fix PR linked yet.

No new crashes or regressions were reported today beyond these two carryover items.

## 6. Feature Requests & Roadmap Signals

No explicit new feature requests appeared today. The closest signal is operational: [#1612](https://github.com/modelcontextprotocol/registry/issues/1612) implicitly highlights a need for **self-service or streamlined namespace deletion/transfer tooling** for publishers who rename their GitHub accounts — a recurring pain point that could motivate a future "namespace migration" API or CLI command rather than requiring manual maintainer intervention per request.

## 7. User Feedback Summary

- **Pain point — auth/permissions friction**: [#1551](https://github.com/modelcontextprotocol/registry/issues/1551) shows a user who followed all documented steps for org-namespace access and still hit a wall, indicating either a documentation gap or an actual bug in the device-flow grant logic.
- **Pain point — identity/namespace fragility**: [#1612](https://github.com/modelcontextprotocol/registry/issues/1612) reflects that namespace identity is tightly (and fragilely) coupled to GitHub usernames — a rename orphans previously published packages, forcing republication and manual cleanup requests.
- **Neutral/administrative**: [#1611](https://github.com/modelcontextprotocol/registry/issues/1611) ("Withdrawn") was closed same-day with no discussion — a self-resolved, non-substantive item.

No strongly positive or strongly negative sentiment beyond these functional frustrations; feedback today is process-oriented rather than about core registry quality.

## 8. Backlog Watch

- **[PR #1470](https://github.com/modelcontextprotocol/registry/pull/1470)** — Open 45+ days on a security-relevant validator fix (loopback/private-IP bypass). Given the nature of the fix (closes a real validation hole), this deserves maintainer prioritization for review/merge.
- **[#1551](https://github.com/modelcontextprotocol/registry/issues/1551)** — Open 16 days, only 1 comment despite describing a concrete blocker to org publishing; needs maintainer triage to confirm whether it's a bug or docs issue.
- **[#1612](https://github.com/modelcontextprotocol/registry/issues/1612)** — Fresh (opened 2026-09-03) but flagged here as a pattern to watch: repeated rename/orphan cleanup requests suggest a process gap worth addressing structurally rather than one-off.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest
**Date:** 2026-09-04 | **Source:** [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

## 1. Today's Overview

Awesome MCP Servers remains one of the highest-velocity list repos in the AI ecosystem, with 97 PRs touched in the last 24 hours against just 1 new issue — a ratio that reflects its nature as a crowdsourced directory rather than a software project. Activity is overwhelmingly submission-driven: contributors proposing new MCP server entries across categories like Security, Knowledge & Memory, Developer Tools, and Finance. Only 7 of 97 PRs were merged or closed today, leaving a heavy backlog of 90 open PRs awaiting maintainer triage. No releases occurred, which is expected since this is a curated list, not a versioned software package. Overall project health signal: high community interest, but maintainer review throughput is the clear bottleneck.

## 2. Releases

None today — this repository does not follow a release/versioning model; it is a continuously updated Markdown list.

## 3. Project Progress

Only 7 of 97 PRs updated today were merged or closed, a ~7% clearance rate against inbound volume:
- [#13612](https://github.com/punkpeye/awesome-mcp-servers/pull/13612) — "Add weir.social MCP server (@projectx-social/mcp)" was closed (not merged), suggesting it didn't meet listing criteria (e.g., missing Glama health check, as flagged by the `[missing-glama]` tag).

The visible pattern (via `[missing-glama]`, `[has-emoji]`, `[valid-name]` bot-applied tags) shows the repo's automated linting bot is actively triaging incoming submissions for compliance with listing standards before human review — this is likely the main lever keeping the 90-open-PR backlog from being worse.

## 4. Community Hot Topics

Comment/reaction activity is unusually flat today — every listed issue and PR shows 0 comments and 0 👍 reactions, which is atypical for a repo with this much submission volume. This suggests either:
- Maintainer review happens in batches (via bot labels/automation) rather than in-thread discussion, or
- The comment/reaction data feed for this snapshot period undercounts engagement.

The closest thing to a "hot" item is [#13610](https://github.com/punkpeye/awesome-mcp-servers/pull/13610) — "Add AnyAPI to Aggregators" — a **resubmission** of a previously closed PR (#8208, closed 2026-07-29 for inactivity), now claiming to meet the maintainer's prior bar (Glama health check passing, TDQS score A/4.6). This reflects contributors iterating to satisfy maintainer quality gates, a signal of the list's rising submission standards.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today — expected, since this repository has no executable code of its own; it's a documentation/index list. The only "defect-adjacent" pattern is submissions failing automated quality checks (`missing-glama` tag appears on ~10 of the top 20 PRs shown), indicating a soft quality gate rather than a stability issue.

## 6. Feature Requests & Roadmap Signals

No feature requests for the repo itself, but the *content* of new-entry PRs signals where the broader MCP ecosystem is heading:
- **Security/audit tooling**: [#13579](https://github.com/punkpeye/awesome-mcp-servers/issues/13579) (Bartholomew — transactional security proxy & rollback for MCP tools), [#13619](https://github.com/punkpeye/awesome-mcp-servers/pull/13619) (feldspar-scan — free repo security scans)
- **Memory/knowledge management**: [#13327](https://github.com/punkpeye/awesome-mcp-servers/pull/13327) (facthouse), [#12716](https://github.com/punkpeye/awesome-mcp-servers/pull/12716) (MemoryGuard), [#13613](https://github.com/punkpeye/awesome-mcp-servers/pull/13613) (echocache)
- **Cost/observability for MCP itself**: [#13609](https://github.com/punkpeye/awesome-mcp-servers/pull/13609) (mcpwatch — tracks per-tool context-token cost, a maturing pain point as agents accumulate many MCP servers)
- **Testing/dev tooling for agents**: [#13615](https://github.com/punkpeye/awesome-mcp-servers/pull/13615) (autotest-mcp), [#13574](https://github.com/punkpeye/awesome-mcp-servers/pull/13574) (DevProjex — token-efficient codebase context)

Given the volume in Security and Knowledge & Memory categories, expect the list's next visible restructuring (if any) to formalize sub-categories there, mirroring how "Aggregators" and "Monitoring" have already split out.

## 7. User Feedback Summary

No direct user complaints in issue form, but submission PRs implicitly reveal pain points MCP tool builders are solving for:
- **Context/token cost anxiety**: mcpwatch's framing ("itemises what each configured server costs in context tokens") points to real dissatisfaction with tool-definition bloat as users add more MCP servers.
- **Trust/security gaps**: Multiple new entries (Bartholomew, feldspar-scan, ISNAD) target auditing, rollback, and provenance for MCP tool calls — signaling users don't fully trust unreviewed MCP servers executing actions.
- **Fragmented memory across agents**: MemoryGuard and echocache both target the problem of coding agents (Cursor/Codex/Claude Code) lacking shared, persistent memory — a recurring theme in Knowledge & Memory submissions.

## 8. Backlog Watch

The most notable backlog signal is the sheer scale: 90 open PRs vs. 7 resolved today. Items warranting maintainer attention:
- [#12505](https://github.com/punkpeye/awesome-mcp-servers/pull/12505) — open since 2026-08-19 (16 days), still pending despite being updated today.
- [#12609](https://github.com/punkpeye/awesome-mcp-servers/pull/12609) — open since 2026-08-21 (14 days), a dual-entry PR (Ozon + Wildberries) that may need extra review time given it bundles two servers.
- [#13092](https://github.com/punkpeye/awesome-mcp-servers/pull/13092) — open since 2026-08-28 (7 days).
- [#13327](https://github.com/punkpeye/awesome-mcp-servers/pull/13327) — open since 2026-08-31 (4 days).

None of these are exceptionally old by list-repo standards, but the resubmission pattern seen in #13610 (closed after 40+ days of inactivity, now reopened) suggests the maintainer periodically sweeps and closes stale PRs — a pattern likely to recur for the above unless addressed soon.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest (2026-09-04)

## 1. Today's Overview

Activity in the last 24 hours was moderate but almost entirely mechanical: 50 pull requests were touched, yet zero issues were updated and no new releases shipped. The overwhelming majority of PR activity comes from the `mcp-registry-bot[bot]` automated "chore: update pin for X" commit-pinning workflow, which accounts for the bulk of the 48 still-open PRs — many of them dating back to July, June, or even November 2025 and still unmerged. Genuine community contribution is visible in a handful of new server-submission PRs (Flight Master Aviation, ToolRouter, a 16-server freelance/small-business bundle), and two long-pending server submissions (Taisly, Talivia) were closed today. Overall, this reads as a routine registry-maintenance day rather than a release or feature-development cycle — the registry's health signal is muted by the fact that no comment/reaction data was available on any item today, limiting engagement analysis.

## 2. Releases

None. No new releases were published in this period.

## 3. Project Progress

Only two PRs resolved today, both server-submission closures rather than merges of new functionality:
- [#4396 — Add Taisly remote MCP server](https://github.com/docker/mcp-registry/pull/4396) (closed) — official remote MCP for scheduling short-form video publishing (TikTok, Reels, Shorts, X, Facebook). Open since 2026-07-11.
- [#4602 — Add Talivia remote MCP server](https://github.com/docker/mcp-registry/pull/4602) (closed) — revenue-first website analytics MCP. Open since 2026-08-02.

Neither PR's summary data indicates whether closure was a merge or a rejection; both being closed on the same day after weeks open suggests a maintainer triage pass rather than coincidental timing. No feature or infrastructure PRs merged today.

## 4. Community Hot Topics

No comment or reaction counts were available for any Issue or PR today (all reported as `undefined`/0), so engagement-based ranking isn't possible from this dataset. By volume and novelty, the most notable open items are new remote-server submissions:
- [#4911 — Flight Master Aviation Data MCP remote server](https://github.com/docker/mcp-registry/pull/4911) — a Streamable HTTP aviation-data server from a Chinese provider (航班管家 DAST), submitted and opened the same day.
- [#4910 — ToolRouter remote MCP server](https://github.com/docker/mcp-registry/pull/4910) — positions itself as "the OpenRouter for tools," a meta-router for MCP tool discovery — a signal of growing interest in MCP tool-aggregation/routing infrastructure.
- [#4892 — Sixteen local-only servers for freelance and small-business work](https://github.com/docker/mcp-registry/pull/4892) — a large single-PR bundle (time-tracker, invoicing, expense-tracker, PDF/docx tools, etc.) targeting SMB/freelancer workflows.

The underlying need signaled here is twofold: demand for MCP servers that aggregate/route across many tools (ToolRouter), and demand for bundled, practical business-utility servers rather than single-purpose ones.

## 5. Bugs & Stability

No issues were reported or updated in the last 24 hours, and no bug-fix PRs appear in the dataset. There is no evidence of regressions or crashes in this period.

## 6. Feature Requests & Roadmap Signals

No formal feature-request issues were filed today, but the PR queue itself signals roadmap direction:
- Continued expansion of remote/hosted MCP servers (Flight Master, ToolRouter, Taisly, Talivia) suggests the registry is trending toward more OAuth/hosted remote servers rather than purely local Docker-run ones.
- The 16-server freelance/SMB bundle ([#4892](https://github.com/docker/mcp-registry/pull/4892)) suggests appetite for vertical-specific server packs; if merged, it would meaningfully expand the SMB-tooling category in one step.
- A large, aging backlog of automated pin-update PRs (see Backlog Watch) implies a likely near-term maintainer push to batch-merge or automate approval of these routine dependency bumps.

## 7. User Feedback Summary

No direct user feedback, satisfaction signals, or complaint threads are present in today's data (0 issues, no comments/reactions recorded). The only qualitative signal is indirect: contributors are actively submitting new servers spanning aviation data, tool routing, and SMB productivity — indicating continued interest in growing the registry's catalog breadth, but no sentiment data on existing server quality or pain points.

## 8. Backlog Watch

The most pressing maintainer-attention item is the large volume of stale, bot-generated pin-update PRs — none show any comments, suggesting they're sitting unreviewed:
- [#746 — chore: update pin for n8n](https://github.com/docker/mcp-registry/pull/746) — open since 2025-11-21 (over 9 months).
- [#788 — chore: update pin for omi](https://github.com/docker/mcp-registry/pull/788) — open since 2025-11-26.
- [#799 — chore: update pin for vizro](https://github.com/docker/mcp-registry/pull/799) — open since 2025-11-27.
- [#1051 — chore: update pin for opik](https://github.com/docker/mcp-registry/pull/1051) — open since 2026-02-04.
- A cluster of similar pin-update PRs from June–July 2026 (playwright #4137, testkube #4369, teamwork #4383, sonarqube #4368, smartbear #4367, render #4366, mongodb #4381, line #4365, mapbox #4418, markitdown #4510, okta-mcp-server #4499) remain open, some for nearly two months.

This backlog — dozens of automated, presumably low-risk dependency-pin PRs sitting unmerged for months — is the clearest signal that registry maintainers may be under-resourced for routine housekeeping, and is worth flagging as a process/automation gap (e.g., auto-merge eligibility) rather than a code-quality issue.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest: 2026-09-04

## 1. Today's Overview

Activity in `anthropics/claude-plugins-official` today is dominated by routine automation rather than feature work: 37 PRs touched in the last 24h, the overwhelming majority being bot-generated SHA-bump PRs (e.g. `bump(salesforce-development)`, `bump(rill)`, `bump(revenuecat)`) that auto-update pinned plugin commit references after passing `claude plugin validate` in CI. Of these, 30 remain open awaiting merge and 7 were merged/closed today, suggesting a healthy, fast-moving auto-update pipeline. Human activity is comparatively light — just 3 issues, all newly opened and still unaddressed — but two of the three describe concrete correctness bugs in the plugin-dev tooling (hook validation and the security-guidance Stop hook), which is a more meaningful signal than the PR volume implies. No new releases shipped today. Overall: routine maintenance is running smoothly, but real tooling defects are accumulating without maintainer response yet.

## 2. Releases

None today.

## 3. Project Progress

- 7 of today's 37 PRs were merged/closed, all appearing to be automated SHA-bump PRs for individual plugin listings (mechanism: GitHub Actions bot validates a plugin's upstream commit via `claude plugin validate` and opens a PR bumping the pinned SHA — see workflow run referenced in [#5817](https://github.com/anthropics/claude-plugins-official/pull/5817), [#5816](https://github.com/anthropics/claude-plugins-official/pull/5816), [#5815](https://github.com/anthropics/claude-plugins-official/pull/5815)).
- The remaining 30 open PRs are the same bump pattern for other plugins (`resend`, `remember`, `rc`, `qdrant-skills`, `postiz`, `posthog`, `planetscale`, `pixeltable`, `pinecone`, `pigment`, `outputai`, `nimble`, `netlify-skills`, `neon`, `mongodb-atlas`, `mongodb`, `modern-web-guidance`, etc.) — these represent routine version currency, not new capability.
- No human-authored feature PRs appear in today's top-20-by-comments view; comment counts on all bot PRs are effectively zero, so "progress" today is entirely dependency-freshness maintenance.

## 4. Community Hot Topics

Engagement is unusually flat today — no issue or PR has attracted comments or reactions yet (all counts are 0). The closest thing to a hot topic is:

- **[#5787 — Maintainer change requested: migrate Qodo listing to packaged plugins](https://github.com/anthropics/claude-plugins-official/issues/5787)**: not high-engagement yet, but structurally significant — it exposes friction in the external-contributor policy itself (the policy blocks edits to existing marketplace entries even when the *original author* wants to fix their own listing for a v1.0.10 release, forcing either an Anthropic-authored PR or manual maintainer reopening). This points to an underlying need: a sanctioned path for original plugin authors to update their own entries without a full new-PR cycle.

Given the volume of bot PRs, the "hot topic" today is really the marketplace's automated currency pipeline itself, even though no individual PR is drawing discussion.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#5782 — validate-hook-schema.sh silently skips validation when `matcher` is absent](https://github.com/anthropics/claude-plugins-official/issues/5782)** (High severity — silent validation bypass). The script errors on hook configs that ship in this very repo's own plugins, and critically, that error path causes it to skip *every* per-hook check for the affected entry — meaning it reports "validated" while checking nothing. Also flags `VALID_EVENTS` missing `UserPromptExpansion` / `PostToolUseFailure`. This is a correctness/trust issue in the plugin-dev tooling chain itself; no fix PR yet.
2. **[#5781 — security-guidance Stop hook fails with Errno 2, causing unbounded asyncRewake loop](https://github.com/anthropics/claude-plugins-official/issues/5781)** (High severity — resource/loop hazard). Reported on Windows 11 / Git Bash / Python 3.14 in Claude desktop's local-agent-mode; the hook fails on a file that actually exists and then loops without bound rather than failing gracefully. Platform-specific (Windows path/Python 3.14 interaction suspected) but the unbounded loop behavior is concerning regardless of root cause. No fix PR yet.
3. **[#5787](https://github.com/anthropics/claude-plugins-official/issues/5787)** is process/policy friction rather than a code bug, but blocks a legitimate release (Qodo v1.0.10).

No regressions were reported against the automated SHA-bump mechanism itself.

## 6. Feature Requests & Roadmap Signals

No explicit new-feature requests appear in today's issue set — all three open issues are bug reports or process-policy problems rather than capability asks. The strongest roadmap signal is implicit in #5787: a likely near-term policy/tooling change to let original authors amend their own existing marketplace listings (rather than requiring Anthropic-authored intervention). If maintainers act on #5782, expect a `plugin-dev` patch adding the missing `VALID_EVENTS` entries (`UserPromptExpansion`, `PostToolUseFailure`) and fixing the `matcher`-absent short-circuit — this looks like a small, self-contained, high-confidence fix candidate for the next `plugin-dev` bump.

## 7. User Feedback Summary

- **Qodo (SagiMedina, #5787)**: frustration is with *process*, not the plugin — the author has a "prepared atomic patch" ready but is blocked by a policy that auto-closes external edits to existing entries. Pain point: no self-service path for authors to maintain their own listings.
- **plugin-dev tooling (phucnguyenbku-cmyk, #5782)**: pain point is a false sense of safety — the validator reports success while silently skipping checks, undermining trust in `claude plugin validate` output that other automation (like the SHA-bump bot) depends on.
- **security-guidance (McRayJ, #5781)**: pain point is platform-specific reliability — Windows/Git Bash/Python 3.14 users hit a hard failure that manifests as a runaway loop rather than a clean error, which is a poor failure mode for a security-related hook.

No positive/satisfaction signals were reported today; all human-authored feedback was problem reports.

## 8. Backlog Watch

All three open issues are brand-new (created today or yesterday, 2026-09-03/04) with zero comments, so nothing has aged into "long-unanswered" status yet. However, given their nature, they're worth flagging for early maintainer attention before they age:

- **[#5782](https://github.com/anthropics/claude-plugins-official/issues/5782)** — worth prioritizing quickly since it affects the integrity of the validation tooling other automated processes (like the bump-PR bot) implicitly rely on.
- **[#5781](https://github.com/anthropics/claude-plugins-official/issues/5781)** — an unbounded loop bug on a security-related hook warrants a fast triage even if platform-scoped.
- **[#5787](https://github.com/anthropics/claude-plugins-official/issues/5787)** — blocks an external contributor's release; low engagement risk of being overlooked precisely because it reads as a "process" issue rather than a code bug.

The 30 open bot bump-PRs are not stale by design (they're auto-generated same-day) but are worth monitoring in aggregate — if merge velocity drops, pinned plugin SHAs across the marketplace start drifting from validated upstream commits.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-09-04)

## 1. Today's Overview

Activity over the last 24 hours was driven entirely by community resource submissions rather than core project development — 13 issues touched (12 open, 1 closed), zero PRs, and zero releases. This is consistent with the repository's nature as a curated list rather than an active codebase: nearly all traffic is inbound submissions for new tools, skills, and integrations awaiting maintainer validation. Engagement per item is uniformly light (0–3 comments, 0 reactions), suggesting the maintainer(s) are working through a steady intake queue rather than responding to any single trending topic. No bugs, crashes, or regressions were reported today since there is no shippable code in this repo — "stability" here means submission-pipeline health, which looks nominal (only 1 of 13 items auto-closed for validation issues).

## 2. Releases

None today.

## 3. Project Progress

No PRs were opened, merged, or closed today. The only state-changing event was issue [#2732 "claudeor"](https://github.com/hesreallyhim/awesome-claude-code/issues/2732) being auto-closed same-day via the `auto-closed` / `validation-pending` labels — indicating the repo's automated submission-validation bot rejected or timed out on this entry rather than a human curation decision.

## 4. Community Hot Topics

Comment volume is low and flat across the board (max 3), so "hot" here is relative:

- [#1613 "immich-photo-manager"](https://github.com/hesreallyhim/awesome-claude-code/issues/1613) — 3 comments, open since April and still being discussed as of today, the most sustained back-and-forth in the batch, likely maintainer/submitter clarification on categorization (Creative Media).
- [#2733 "Claude Code IDE for Sublime Text"](https://github.com/hesreallyhim/awesome-claude-code/issues/2733) and [#2647 "terminal-mcp"](https://github.com/hesreallyhim/awesome-claude-code/issues/2647) — 2 comments each, both same-day or near-same-day submissions already getting review feedback.
- Underlying need: contributors want faster turnaround on `validation-passed` → merged status; the repeated `resource-submission`/`validation-passed` label pattern across 8 of 13 issues shows the community mainly wants visibility into an opaque automated triage pipeline.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported — this repo is a curated Markdown list with no runtime to fault. The closest analog is [#2732 "claudeor"](https://github.com/hesreallyhim/awesome-claude-code/issues/2732), auto-closed under `validation-pending`, which may indicate a submission-format or link-validation failure worth the submitter revisiting. No fix PRs are relevant/applicable.

## 6. Feature Requests & Roadmap Signals

No feature requests against the repo's own tooling were filed today; all "requests" are third-party resource submissions proposing additions to the list. Categories trending in today's batch:
- **Skills** (2 submissions: [#2731 ctf-skills](https://github.com/hesreallyhim/awesome-claude-code/issues/2731), [#2730 geoai-skills](https://github.com/hesreallyhim/awesome-claude-code/issues/2730)) — continued momentum behind Claude's Agent Skills format as a packaging convention for domain-specific tooling.
- **Providers, Runtime & Integration Infrastructure** (2: [#2732 claudeor](https://github.com/hesreallyhim/awesome-claude-code/issues/2732) (closed), [#2723 snip](https://github.com/hesreallyhim/awesome-claude-code/issues/2723)) — tooling around session/runtime wrapping and shell-command filtering hooks.
- **Trust/verification infra** ([#1972 TWZRD Agent Intel](https://github.com/hesreallyhim/awesome-claude-code/issues/1972), [#2728 UTA credential verification](https://github.com/hesreallyhim/awesome-claude-code/issues/2728)) — a recurring theme of MCP-server trust scoring and credential verification for agent-initiated actions, suggesting the ecosystem is grappling with agent-safety tooling as adoption grows.

Prediction: given the `validation-passed` label already applied, expect most of the 10 open, passed-validation issues (all except #1972, #2728, #2647 which lack that label) to be merged into the README list in the near term without further roadmap significance.

## 7. User Feedback Summary

No direct dissatisfaction or pain-point complaints appear in today's window — the tone across submissions is promotional (new tool announcements) rather than problem reports. Implicit feedback signal: submitters continue to use the issue form heavily for one-off resource pitches (11 of 13 issues), reinforcing that the repo's contribution model is issue-based curation rather than direct PRs against the README — no submitter opened a PR today despite 13 issues, suggesting the PR path may be underused or unclear to newcomers.

## 8. Backlog Watch

- [#1613 "immich-photo-manager"](https://github.com/hesreallyhim/awesome-claude-code/issues/1613) — open since 2026-04-17 (nearly 5 months), still active with comments as recently as today; the oldest item in this batch and a candidate for maintainer follow-up or closure.
- [#1972 "TWZRD Agent Intel"](https://github.com/hesreallyhim/awesome-claude-code/issues/1972) — open since 2026-06-08 (~3 months), lacks the `validation-passed` label unlike most peers, suggesting it's stalled in triage and needs a maintainer decision.
- [#2728 "UTA credential verification"](https://github.com/hesreallyhim/awesome-claude-code/issues/2728) — 0 comments since submission today; worth monitoring if it stalls without any `validation-*` label applied, similar to #1972's pattern.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest (2026-09-04)

## 1. Today's Overview

Activity today skews heavily toward inbound contributions rather than maintenance: 9 PRs were opened or updated in the last 24 hours, all still open, while only 1 issue moved (a listing request that was closed without comment). No new releases. This pattern is typical for VoltAgent/awesome-agent-skills as a curated list — the "product" here is the README/skills index, and the review queue for new skill submissions is the main throughput signal. With zero PRs merged or closed today, the queue is growing faster than it's being cleared, which is the most notable health signal from this window.

## 2. Releases

None today — no new releases to report.

## 3. Project Progress

No PRs were merged or closed today. All 9 tracked PRs remain open, spanning submissions from Sep 2–4 plus one holdover from Aug 29 (#978). No net progress on the backlog in this window; the queue grew by at least 6 net-new PRs (#1007–#1013) since yesterday.

## 4. Community Hot Topics

Engagement (comments/reactions) is flat across the board — every item today shows 0 comments and 0 👍, so there's no standout "hot" thread by engagement metrics. The most notable item by content is:

- [#992 — Listing: NEX Agent Co. (x402 + A2A commerce skill for Base USDC)](https://github.com/VoltAgent/awesome-agent-skills/issues/992) — closed same day it was updated, no comments. Suggests either a quick maintainer rejection (off-topic/promotional) or a duplicate/malformed listing request. Worth confirming closure reason wasn't silent — no rationale is visible in the data.

Underlying need: a growing share of submissions cluster around **agentic-payments/commerce skills** (x402, USDC) and **security/CTF tooling** ([#1013](https://github.com/VoltAgent/awesome-agent-skills/pull/1013), [#1010](https://github.com/VoltAgent/awesome-agent-skills/pull/1010)) — both emerging categories that may not yet have clean homes in the existing taxonomy.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today — expected, since this is a curated-list repo with no runtime/binary artifacts of its own.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests against the repo tooling itself, but the submission pattern signals category/taxonomy pressure:

- **Context Engineering** subcategory getting multiple entries: [#1009](https://github.com/VoltAgent/awesome-agent-skills/pull/1009) (offload — delegates to headless Gemini workers), [#1007](https://github.com/VoltAgent/awesome-agent-skills/pull/1007) (subagent-cli-skills — delegates to 15 other agent CLIs). Both are "meta-orchestration" skills, suggesting the list may need a clearer subcategory or naming convention to disambiguate delegation/orchestration skills from execution skills.
- **Development and Testing** is the busiest category today with 3 submissions ([#1011](https://github.com/VoltAgent/awesome-agent-skills/pull/1011), [#1002](https://github.com/VoltAgent/awesome-agent-skills/pull/1002), and part of the batch PR #978), hinting this category may need splitting if volume keeps up.
- Batch submission [#978](https://github.com/VoltAgent/awesome-agent-skills/pull/978) (3 skills in one PR, open since Aug 29) signals contributor demand for a clearer multi-skill submission policy — currently unclear if maintainers prefer one-skill-per-PR or accept batches.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction commentary today (zero comments across all items). Indirect signal from PR descriptions:
- Several submitters emphasize **zero-API-key / no-account** designs as a selling point ([#1012](https://github.com/VoltAgent/awesome-agent-skills/pull/1012) kavel-image, [#1008](https://github.com/VoltAgent/awesome-agent-skills/pull/1008) fitness-diet-planner-free) — suggests contributors perceive friction/gatekeeping around paid-API skills as a differentiator worth calling out.
- Submitters are proactively following list conventions (public repo + SKILL.md, terse descriptions per #978), indicating the contribution guidelines are being read and followed reasonably well.

## 8. Backlog Watch

- [#978 — Add skills: usdctofiat-skills, sell-unused-tokens, hypergrok-trading-desk](https://github.com/VoltAgent/awesome-agent-skills/pull/978) — open since 2026-08-29 (6 days), still unmerged, tagged "PR-in-review" in its title, indicating it's stalled mid-review. Oldest open item in today's dataset and the one most clearly needing maintainer follow-through.
- [#992](https://github.com/VoltAgent/awesome-agent-skills/issues/992) closed with zero visible discussion — worth a spot-check to confirm the closure reason was communicated to the submitter (commerce/payment-related skills can be sensitive to reject silently without explanation).
- No other PR in the batch (#1002–#1013) is old enough yet to flag as stale, but with 0 merges today, several will likely age into backlog status if the review cadence doesn't pick up.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
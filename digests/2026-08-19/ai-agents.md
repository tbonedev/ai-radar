# MCP Ecosystem Digest 2026-08-19

> Issues: 16 | PRs: 12 | Projects covered: 7 | Generated: 2026-08-19 07:34 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest: 2026-08-19

## 1. Today's Overview

The project is in active firefighting mode following the `mcp` Python SDK 2.0.0 release on 2026-07-28, which renamed `McpError` to `MCPError` and removed low-level `Server` decorators — breaking `fetch`, `git`, and `time` servers for anyone installing via unpinned `uvx`/`pip`. Of 16 issues updated in the last 24h, 10 are closed and nearly all trace back to this single root cause. On the PR side, 8 of 12 recent PRs are dependency-cap fixes for the exact same problem, submitted by at least seven different contributors — a sign of duplicated community effort converging on one fix rather than broad organic feature work. One release shipped today (2026.8.18) covering `server-everything`, `mcp-server-time`, `mcp-server-fetch`, and `mcp-server-git`, which appears to be the resolution to this incident. Overall activity is high but narrowly concentrated on incident response and cleanup rather than new capability development.

## 2. Releases

**2026.8.18** — patch release covering:
- `@modelcontextprotocol/server-everything@2026.8.18`
- `mcp-server-time@2026.8.18`
- `mcp-server-fetch@2026.8.18`
- `mcp-server-git@2026.8.18`

This release is almost certainly the fix for the `mcp` SDK 2.0.0 breakage (see Bugs section below) — capping the `mcp` dependency to `<2` (or requiring `>=1.29.0,<2`) across the Python servers. No explicit breaking-change notes were provided in the release body, but **users who pinned to `mcp==2.0.0` directly should verify their environment resolves back to a `<2` version** after upgrading these packages, or they may still hit the `ImportError: McpError`/`MCPError` mismatch.

**Migration note:** No user-facing API changes; this is a dependency-constraint fix. Anyone running `fetch`, `git`, or `time` servers via `uvx` should re-pull to get the corrected lower/upper bound.

## 3. Project Progress

Merged/closed today, all addressing the same incident:
- [#4577](https://github.com/modelcontextprotocol/servers/pull/4577) `fix(python): cap mcp dependency to <2 across all Python servers` — closed, addressed #4560/#4570
- [#4650](https://github.com/modelcontextprotocol/servers/pull/4650) `fix(fetch,git): bump minimum mcp version to 1.23.0 for security fixes` — closed, also references **CVE-2025-66416**
- [#4657](https://github.com/modelcontextprotocol/servers/pull/4657) `fix(python): cap mcp<2 dependency in fetch, git, and time servers` — closed, addressed #4570/#4580/#4600/#4560
- [#4645](https://github.com/modelcontextprotocol/servers/pull/4645) `fix(python-servers): cap mcp version below v2.0.0` — closed
- [#4572](https://github.com/modelcontextprotocol/servers/pull/4572) `fix(time): cap mcp dependency below 2.0` — closed, addressed #4570
- [#4611](https://github.com/modelcontextprotocol/servers/pull/4611) `fix(fetch): cap mcp dependency below 2.0` — closed, addressed #4600
- [#4563](https://github.com/modelcontextprotocol/servers/pull/4563) `fix(fetch): cap mcp dependency below 2.0` — closed, addressed #4560
- [#4663](https://github.com/modelcontextprotocol/servers/pull/4663) `fix(python): require mcp>=1.29.0,<2 in fetch, git, and time` — closed, notably ties the fix to the **1.29.0** floor rather than an arbitrary lower bound, suggesting maintainers converged on this as the canonical resolution

**Net effect:** seven independent community PRs raced to fix the same root cause; maintainers picked one (likely #4663 or #4577, given the 2026.8.18 release) and closed the rest as duplicates. This reflects fast community response but also signals the maintainer team may be stretched thin — a single upstream breaking change from `mcp` SDK triggered a week-plus scramble with duplicated work.

## 4. Community Hot Topics

Ranked by engagement:
- [#447](https://github.com/modelcontextprotocol/servers/issues/447) — Windows pathname support in `filesystem` server, 26 comments, 4👍, open since Dec 2024. Long-running, unresolved cross-platform compatibility gap; underlying need is robust Windows path handling (drive letters, UNC paths, escaping) rather than a one-off bug.
- [#1065](https://github.com/modelcontextprotocol/servers/issues/1065) — `fetch is not defined` in GitHub MCP server, 9 comments, 1👍, closed. Missing `node-fetch` dependency — a packaging hygiene issue.
- [#4570](https://github.com/modelcontextprotocol/servers/issues/4570) / [#4560](https://github.com/modelcontextprotocol/servers/issues/4560) / [#4600](https://github.com/modelcontextprotocol/servers/issues/4600) / [#4580](https://github.com/modelcontextprotocol/servers/issues/4580) — the mcp SDK 2.0.0 breakage cluster, 8/7/7/5 comments respectively. Underlying need: **stricter dependency version pinning discipline** for the Python reference servers to prevent upstream SDK releases from silently breaking installs.
- [#1958](https://github.com/modelcontextprotocol/servers/issues/1958) — "Several MCP Servers (Slack, Brave, etc.) were deleted," 5 comments, still surfacing a year after the fact (also echoed in [#2211](https://github.com/modelcontextprotocol/servers/issues/2211)). Underlying need: clearer communication/redirects when reference servers are removed from the monorepo.

## 5. Bugs & Stability

Ranked by severity (server-crashing issues first):

1. **[HIGH] mcp SDK 2.0.0 breaks fetch/git/time servers at startup** — [#4560](https://github.com/modelcontextprotocol/servers/issues/4560), [#4570](https://github.com/modelcontextprotocol/servers/issues/4570), [#4580](https://github.com/modelcontextprotocol/servers/issues/4580), [#4600](https://github.com/modelcontextprotocol/servers/issues/4600). `McpError` → `MCPError` rename causes `ImportError` before the MCP handshake even starts, so clients just report "server unavailable." **Fix shipped** in release 2026.8.18 and confirmed via 7 merged/closed PRs (see above). Status: resolved, but [#4635](https://github.com/modelcontextprotocol/servers/issues/4635) (open, filed 2026-08-12, updated today) shows the `mcp-proxy` install path may still be affected — worth a follow-up check.
2. **[HIGH] `mcp-server-fetch` crashes on any malformed input** — [#3359](https://github.com/modelcontextprotocol/servers/issues/3359), closed. `raise_exceptions=True` causes the server process to die on a single bad JSON-RPC byte; no fix PR referenced in this window.
3. **[MEDIUM] `headFile`/`tailFile` corrupt multi-byte UTF-8 at chunk boundaries** — [#4666](https://github.com/modelcontextprotocol/servers/issues/4666), filed today, open, no comments yet. 1024-byte fixed-size chunking splits UTF-8 sequences across boundaries before decoding. No fix PR yet — newly surfaced, worth tracking.
4. **[MEDIUM] Everything server crashes on rapid client reconnects** — [#3234](https://github.com/modelcontextprotocol/servers/issues/3234), closed, affects Java SDK integration tests.
5. **[LOW] Stitch MCP Server disconnects immediately after connecting** — [#3814](https://github.com/modelcontextprotocol/servers/issues/3814), closed, third-party proxy issue.
6. **[LOW] `move_file` silently overwrites destination instead of failing** — fix pending in [#4630](https://github.com/modelcontextprotocol/servers/pull/4630) (open), addresses #4628. Contradicts documented behavior ("operation will fail" if destination exists).

## 6. Feature Requests & Roadmap Signals

- [#4665](https://github.com/modelcontextprotocol/servers/pull/4665) — new `ghl-browser` MCP server (Playwright-based GoHighLevel automation, 130+ tools). Community-contributed third-party addition to `ADDITIONAL.md`, likely to merge as a listing entry rather than a maintained reference server.
- [#4664](https://github.com/modelcontextprotocol/servers/pull/4664) — add "Unified Pay CLI" to `ADDITIONAL.md` (Finance & Payments category). Low-risk documentation addition, likely to merge soon.
- [#4340](https://github.com/modelcontextprotocol/servers/pull/4340) — accept `socks://` as a SOCKS5 proxy alias in `fetch` server (open since 2026-06-13). Small, low-risk compatibility fix — good candidate for next patch release given its age and narrow scope.
- [#4630](https://github.com/modelcontextprotocol/servers/pull/4630) — `move_file` fail-instead-of-overwrite fix, aligns behavior with documentation. Likely mergeable soon given it's a correctness/safety fix.

**Prediction:** the next release will likely focus on closing out remaining `mcp<2` stragglers (e.g. verifying #4635's `mcp-proxy` path) plus small safety fixes like #4630 and #4340, rather than new server additions.

## 7. User Feedback Summary

- **Pain point — dependency fragility:** the dominant theme today. Multiple users independently hit the same `mcp` SDK 2.0.0 incompatibility within days of each other ([#4560](https://github.com/modelcontextprotocol/servers/issues/4560), [#4570](https://github.com/modelcontextprotocol/servers/issues/4570), [#4580](https://github.com/modelcontextprotocol/servers/issues/4580), [#4600](https://github.com/modelcontextprotocol/servers/issues/4600), [#4635](https://github.com/modelcontextprotocol/servers/issues/4635)). Because `uvx` resolves unpinned dependencies to latest, users on fresh installs got broken servers with no indication why — a poor first-run experience.
- **Pain point — cross-platform support:** Windows pathname handling ([#447](https://github.com/modelcontextprotocol/servers/issues/447)) remains unresolved after 20 months and 26 comments, suggesting real ongoing frustration for Windows users of `claude_desktop_config.json`.
- **Pain point — silent data loss risk:** `move_file` overwriting destinations against documented behavior ([#4630](https://github.com/modelcontextprotocol/servers/pull/4630) / [#4628](https://github.com/modelcontextprotocol/servers/issues/4628)) is a trust issue — users relying on documented "fails if exists" semantics could lose files.
- **Positive signal:** the community responded to the `mcp` 2.0.0 incident with seven independent fix PRs within about three weeks, and a release shipped same-day as several closures — indicates a responsive contributor base even if maintainer bandwidth for triage is limited.

## 8. Backlog Watch

- [#447](https://github.com/modelcontextprotocol/servers/issues/447) — open since 2024-12-30 (nearly 20 months), 26 comments, 4👍. Highest-comment-count open issue in this window; needs a maintainer decision on Windows path normalization strategy.
- [#1624](https://github.com/modelcontextprotocol/servers/issues/1624) — `mcp-server-fetch` schema incompatible with Gemini 2.5 Pro function calling (`exclusiveMaximum`/`exclusiveMinimum` unsupported), open since 2025-04-29, 4👍. Straightforward JSON Schema compatibility fix that's sat unaddressed over a year.
- [#3278](https://github.com/modelcontextprotocol/servers/issues/3278) — memory server communication failure on Windows with Antigravity/Gemini Code Assist, open since 2026-01-31, no apparent fix PR.
- [#1501](https://github.com/modelcontextprotocol/servers/issues/1501) — `mcp-server-time` error via `mcpo` proxy, open since 2025-04-19, low engagement but unresolved over a year.
- [#3359](https://github.com/modelcontextprotocol/servers/issues/3359) — fetch server crash on malformed input (`raise_exceptions=True`), closed but **no fix PR identified** in this dataset — worth confirming whether it was actually fixed or closed as stale.
- [#4666](https://github.com/modelcontextprotocol/servers/issues/4666) — UTF-8 chunk-boundary corruption, filed today with zero engagement yet — flagging early before it ages into the backlog.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Digest — 2026-08-19

## 1. Ecosystem Overview

The MCP/Claude-agent ecosystem tracked today splits cleanly into two modes: **software projects fixing bugs** (MCP Servers, MCP Registry, Claude Plugins) and **curated directories absorbing submission volume** (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills). The dominant story of the day is MCP Servers' incident response to the `mcp` Python SDK 2.0.0 breaking change — a single upstream dependency release triggered seven duplicate community fix PRs within three weeks, exposing thin maintainer bandwidth even as contributor responsiveness stayed high. Elsewhere, list-repos are seeing heavy inbound volume (110–50 PRs/day) dominated by bot-generated pin bumps and new-entry submissions rather than organic engineering, while Claude Plugins shows the most mature CI-gated automation (41/50 PRs auto-merged via SHA validation). A cross-cutting theme is **observability/session-monitoring tooling** emerging independently across three different repos (Awesome Claude Code, Awesome Agent Skills, Claude Plugins' Telegram issues), suggesting real unmet demand for visibility into long-running agent sessions.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Health Score |
|---|---|---|---|---|---|
| **MCP Servers** | 16 | 12 | 10 issues + 7 PRs | ✅ 2026.8.18 (incident fix) | **7/10** — high responsiveness, but duplicated effort signals maintainer strain |
| **MCP Registry (official)** | 2 | 3 | 0 | None | **6/10** — steady, low-noise, but two PRs stalled ~4 weeks |
| **Awesome MCP Servers** | 0 | 110 | 13 | N/A (list) | **6/10** — high throughput, but comment/engagement data unavailable, quality-flag heavy |
| **Docker MCP Registry** | 0 | 50 | 0 | None | **5/10** — automated pin cadence healthy, but 0 merges and multi-month-old bot PRs unreviewed |
| **Claude Plugins (official)** | 5 | 50 | 41 | None | **8/10** — best-in-class CI automation, but 3 open Telegram bugs (1 regression) unresolved |
| **Awesome Claude Code** | 11 | 0 | 2 auto-closed, 6 validation-passed | N/A (list) | **7/10** — active pruning bot, healthy submission-to-inclusion pipeline |
| **Awesome Agent Skills** | 1 | 47 | 17 | N/A (list) | **6/10** — high volume, but merge/reject breakdown opaque, PRs aging 2-3 days |

## 3. MCP Servers's Position

**Advantages vs. peers:** MCP Servers is the only repo in this set combining a real production release cadence with active incident management — it shipped a same-day patch release (2026.8.18) resolving a SDK-breaking dependency issue, demonstrating functioning release infrastructure that none of the list-repos need (or have). It's also the reference implementation repo, giving it outsized influence: bugs here (e.g., `mcp-server-fetch` crash handling, Windows path support) affect every downstream server built against these patterns.

**Technical approach differences:** Unlike the registry projects (MCP Registry, Docker MCP Registry) which focus on *discovery/validation* of third-party servers, MCP Servers ships and maintains actual runnable server code — putting it in a different risk category (runtime crashes, dependency breakage) versus metadata-only repos.

**Community size comparison:** Its 16 issues + 12 PRs in 24h is modest next to the list-repos' 47-110 PR volumes, but that volume is qualitatively different — list-repo PRs are largely one-line additions/bot bumps, while MCP Servers' PRs represent independent contributors converging on the same root-cause fix (7 different authors), indicating a technically engaged, if strained, core contributor base rather than a large casual one.

## 4. Shared Technical Focus Areas

- **Dependency/version pinning discipline** — MCP Servers (mcp SDK 2.0.0 breakage, 8 dependency-cap PRs), Docker MCP Registry (49 automated pin-update PRs/day), Claude Plugins (SHA-pin bump automation + #5354's "releases-only" bump-noise fix). All three are independently converging on the same need: automated, low-friction dependency pinning to prevent upstream breakage or bump fatigue.
- **Submission/quality gating for third-party listings** — Awesome MCP Servers (`missing-glama`/`has-emoji` bot flags on 10+/20 PRs), Awesome Claude Code (auto-close bot for stale `validation-pending` items), Awesome Agent Skills (strict `CONTRIBUTING.md` enforcement, resubmission-after-rejection pattern). All three list-repos are tightening automated triage to manage inbound volume.
- **Session observability/monitoring for agent runs** — Awesome Claude Code (3 concurrent dashboard submissions: leghorn, legbar, DeadEye), Awesome Agent Skills (context/memory tooling: claude-mem, skillreaper, wiki-manager), Claude Plugins (Telegram multi-instance session isolation bugs #881/#1360/#5423). This is the clearest cross-repo signal: multiple independent teams are building visibility/lifecycle tooling for concurrent or long-running agent sessions.
- **Security-adjacent hardening of network-facing surfaces** — MCP Registry (`IsValidRemoteURL` SSRF-style loopback validation, PR #1470), Claude Plugins (auto-exec MCP launcher pin-checking #5231, Discord allowlist bypass #5468). Registry and plugin-marketplace projects are both hardening trust boundaries around remote/executable content.

## 5. Differentiation Analysis

| Dimension | MCP Servers | MCP/Docker Registries | Claude Plugins | Awesome-* Lists |
|---|---|---|---|---|
| **Target user** | Developers running reference MCP servers | Publishers/agents discovering servers | Claude Code users installing plugins | Ecosystem browsers/researchers |
| **Feature focus** | Correctness, protocol compliance | Search relevance, publish validation | Marketplace curation + auto-exec safety | Categorization, submission triage |
| **Architecture** | Runnable Python/TS servers | API + validation service | Plugin marketplace with CI gate | Static Markdown lists + bots |
| **Failure mode risk** | Runtime crashes (import errors, malformed input) | Bad search results, blocked publishes | Process lifecycle bugs (Telegram poller) | Stale/low-quality entries |

Claude Plugins stands out architecturally for its CI-gated auto-merge pipeline (`claude plugin validate`) — a level of automation the other repos haven't reached, though it comes with a tradeoff: the Telegram plugin's three open process-lifecycle bugs show that automated validation catches syntax/schema issues but not runtime concurrency bugs.

## 6. Community Momentum & Maturity

**Rapidly iterating:** MCP Servers (incident-driven, 7 PRs racing to fix one bug) and Claude Plugins (highest PR volume with real merges, 41/50) are the most kinetic — both show fast contributor response times (same-day PR-to-release turnaround).

**High-volume but stabilizing:** Awesome MCP Servers, Docker MCP Registry, and Awesome Agent Skills show large PR counts but low *merge* rates and aging backlogs (e.g., Docker's #799/#788/#746 pin PRs open ~9 months; Awesome MCP Servers' #10129/#9400 open 35-44 days despite being clean submissions) — volume without proportional throughput, suggesting maintainer bandwidth is the binding constraint across nearly every repo in this set, not contributor interest.

**Steady/low-noise:** MCP Registry (official) and Awesome Claude Code show smaller, well-matched issue-to-PR ratios with active bot-assisted pruning — these read as the most "under control" projects, though MCP Registry's #1453 fix PR sitting unreviewed for 4 weeks despite being ready is a caution sign even here.

**Maturity signal:** The presence of self-correcting community behavior (Awesome MCP Servers' DC Hub maintainer fixing their own inflated stats; Claude Plugins' #5354 bump-cohort fix targeting noise reduction) indicates these communities are past pure growth-mode and into process-refinement mode.

## 7. Trend Signals

1. **Dependency fragility is now a first-class operational risk.** Three unrelated repos independently built or reinforced pin-management automation this week. For agent developers: pin exact SDK versions in production deployments — unpinned `uvx`/`pip` installs are actively breaking on upstream major-version bumps with no compatibility warning.
2. **Session/process lifecycle management is an unsolved problem at scale.** Claude Plugins' Telegram poller bugs (multi-instance collision, SIGTERM regression) and the parallel rise of observability-dashboard submissions across two list-repos point to the same gap: as developers run fleets of concurrent agent sessions, existing tooling doesn't cleanly isolate or monitor per-session state. This is a concrete build opportunity for tooling vendors.
3. **Trust boundaries around auto-exec and allowlisted content are getting fresh scrutiny.** Discord's silent allowlist bypass for bot messages (#5468) and MCP Registry's SSRF-adjacent URL validation gap (#1470) — both filed/active this week — suggest agent-marketplace security review is still catching basic gaps; developers integrating third-party MCP servers or plugins should not assume allowlist/URL-validation logic is airtight without independent verification.
4. **Standardization pressure is building around packaging.** Awesome Agent Skills' #927 (Agent Plugins 1.0.0 discovery, backed by OpenAI/Amazon/Cursor/Microsoft/Vercel) signals a broader industry move toward a unified "Skills + MCP servers" bundling standard — worth watching as it may reshape how agent capabilities are distributed within 6-12 months.
5. **Maintainer bandwidth, not contributor interest, is the ecosystem-wide bottleneck.** Every repo in this set shows healthy-to-high inbound contribution volume; the consistent gap is review/merge throughput (multi-week to multi-month PR aging even for well-documented, bot-clean submissions). Teams building on these projects should expect slower upstream turnaround than submission volume would suggest.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
**modelcontextprotocol/registry** | 2026-08-19

## 1. Today's Overview

Activity over the last 24h was light but purposeful: 2 issues and 3 PRs updated, no new releases, and no merges/closes. All observed activity clusters around two concrete threads — a publish-validation bug (#1525) and a search-relevance gap (#1453) — each of which already has a corresponding fix PR in flight (#1544 and #1471 respectively). A third PR (#1470) addresses an unrelated security hardening issue (SSRF-style URL validation) that isn't reflected in the issue list shown. Overall this reads as steady, low-noise maintenance activity rather than a burst of new feature work — the project appears to be in a "fix what's reported, keep PRs moving" phase.

## 2. Releases

None in the last 24h.

## 3. Project Progress

No PRs were merged or closed in this window — all three tracked PRs (#1471, #1470, #1544) remain open. Progress is therefore "in review" rather than "shipped":
- [PR #1471](https://github.com/modelcontextprotocol/registry/pull/1471) — adds description-field matching to the `?search=` endpoint, directly resolving #1453.
- [PR #1470](https://github.com/modelcontextprotocol/registry/pull/1470) — hardens `IsValidRemoteURL` against loopback/private/link-local hosts (closes a validation gap around `[::1]`, `127.0.0.0/8`, `0.0.0.0`, etc.).
- [PR #1544](https://github.com/modelcontextprotocol/registry/pull/1544) — improves error messages in ownership-failure validation to include package version, closing #1525.

## 4. Community Hot Topics

The most engaged items are the two open issues, both with active comment threads:
- [Issue #1525](https://github.com/modelcontextprotocol/registry/issues/1525) — "Publish rejects correct mcpName as stale/mismatched" (3 comments). Underlying need: publishers using `mcp-publisher 1.8.1` are hitting confusing 400 errors when npm metadata is actually correct, suggesting the validation error messaging (not necessarily the validation logic itself) is the real pain point — which #1544 targets directly.
- [Issue #1453](https://github.com/modelcontextprotocol/registry/issues/1453) — "search should also match against server description field" (3 comments, 1 👍). Underlying need: registry consumers (notably AI agents doing discovery) are limited by name-only substring search, hurting discoverability of servers whose names don't literally contain the search term.

Both topics already have PRs addressing them, indicating the maintainers are responsive to community-reported friction.

## 5. Bugs & Stability

- **[Issue #1525](https://github.com/modelcontextprotocol/registry/issues/1525) (Medium severity — blocks publishing, not a crash)**: `mcp-publisher publish` returns a 400 claiming npm package metadata is stale/mismatched when it isn't. This blocks legitimate publish workflows. Fix in progress via [PR #1544](https://github.com/modelcontextprotocol/registry/pull/1544), though that PR's description suggests it improves error diagnostics (naming the checked version) rather than necessarily fixing the root mismatch — worth confirming whether the underlying validation bug is also addressed or just made more debuggable.
- **[PR #1470](https://github.com/modelcontextprotocol/registry/pull/1470) (security-adjacent hardening, no linked issue shown)**: Fixes a validation gap where `IsValidRemoteURL` failed to reject various loopback/private-network host notations (`[::1]`, `127.0.0.2`, `0.0.0.0`, `[::]`, IPv4-mapped addresses), which could allow SSRF-style remote URL registration. This is a stability/security fix rather than a reported crash, but ranks high given the security implications.

## 6. Feature Requests & Roadmap Signals

- **Description-field search** (#1453 / PR #1471): Highest-confidence near-term addition — issue explicitly requested, PR already implements it with two deliberate deviations from the literal proposal (worth a maintainer look before merge). Likely candidate for the next release.
- No other new feature requests surfaced in this 24h window.

## 7. User Feedback Summary

- **Pain point — publish UX**: The #1525 reporter (a real publisher, `Lelu-ai` org) experienced friction between npm's own confirmation of correctness and the registry's rejection, indicating a trust/clarity gap in error messaging during publish. This is a workflow-blocking issue for anyone publishing new packages.
- **Pain point — discoverability**: The #1453 reporter notes that AI agents and users querying the registry can't find servers by description content, only by name — a functional limitation for the registry's core discovery use case.
- No explicit satisfaction signals in this window, but the fact that both reported issues already have community-contributed fix PRs (from `amitvijapur` and `sronix`, not maintainers) suggests healthy external contributor engagement.

## 8. Backlog Watch

- [Issue #1525](https://github.com/modelcontextprotocol/registry/issues/1525) — open since 2026-08-11, still unresolved after 8 days despite active discussion; fix PR (#1544) is very recent (2026-08-18) and needs maintainer review/merge.
- [Issue #1453](https://github.com/modelcontextprotocol/registry/issues/1453) — open since 2026-07-16 (over a month), fix PR (#1471) has been open since 2026-07-21 (nearly 4 weeks) without merge — this is the most stale item in the tracked set and warrants maintainer attention given a working fix has been sitting unreviewed.
- [PR #1470](https://github.com/modelcontextprotocol/registry/pull/1470) — open since 2026-07-21, same ~4-week wait; given its security nature (SSRF-adjacent host validation), this arguably deserves priority review over feature PRs.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-08-19)

## 1. Today's Overview

Activity is entirely on the submission pipeline: 110 PRs touched in the last 24h (97 open, 13 merged/closed), against **zero** issue activity and **zero** releases — expected for a curated list repo rather than a software project. The overwhelming majority of PRs (18 of the 20 shown) are new-server addition requests, many flagged by the repo's own bot checks (`has-emoji`, `missing-glama`, `non-github-url`), reflecting the list's continued status as a high-volume intake funnel for the MCP ecosystem rather than a codebase with regressions or roadmap work. Health signal is mixed: throughput is high, but a large fraction of submissions carry automated quality flags, and no comment-count data was available in this pull to gauge maintainer engagement per PR.

*Note: the "Comments" field was `undefined` for every PR in this dataset, so ranking by discussion volume (Section 4) isn't possible from this data — rankings below use labels, close/merge status, and content instead.*

## 2. Releases

None — no new releases in this window (list repos don't version in the traditional sense; skipping this section per instructions).

## 3. Project Progress

13 PRs closed/merged today, but the specific outcomes for each aren't detailed in the top-20-by-comments slice pulled (which is dominated by still-open submissions). One concrete closure is visible:

- **[#12453](https://github.com/punkpeye/awesome-mcp-servers/pull/12453) — "Add SandBase Harness MCP server"** — CLOSED. Bot-flagged `missing-glama`, `has-emoji`. Likely rejected on quality-bar grounds rather than merged, consistent with the pattern of low-effort/bot-styled submissions being filtered out.

No maintenance or infrastructure PRs (e.g., link fixes, category reorganization) appear among the merged set except the fix noted in Section 5.

## 4. Community Hot Topics

Comment/reaction counts weren't populated in this data pull (all `undefined`, 👍 all 0), so true "hottest" discussion can't be measured. By content interest instead, the most notable submission is:

- **[#12454](https://github.com/punkpeye/awesome-mcp-servers/pull/12454) — "Fix stale figures in the DC Hub entry + add its connector endpoint"** — a listed server's own maintainer proactively correcting inflated/incorrect stats in their existing entry (tool count listed as 33 vs. actual 82 — an under-claim, not over-claim as initially miscategorized in the title). This is a positive integrity signal: self-policing by listed maintainers is rare and worth watching for whether the project formalizes a "verify your listing" norm.

Underlying need visible across the batch: submitters are increasingly pre-annotating PRs with verification detail (npm links, official MCP Registry IDs, Glama score badges) — suggesting submission friction/rejection rates have pushed contributors toward over-documenting to survive triage.

## 5. Bugs & Stability

Not applicable in the traditional sense (no code/runtime), but one data-quality "bug" was reported and already has a fix in flight:

- **[#12455](https://github.com/punkpeye/awesome-mcp-servers/pull/12455) — "fix(finopsmcp): update moved repo link and fix broken score badge"** — Low severity. The `finopsmcp` entry's Glama score badge 404s because the underlying repo moved (`chaandannn/finopsmcp` → `getnable/finopsmcp`); the repo link itself still 301-redirects so isn't fully broken. Fix PR is open and straightforward (link swap).

No crashes/regressions applicable — this is a listing accuracy issue only.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today (0 issues total). Indirect roadmap signals from PR patterns:

- Heavy volume of `has-emoji` / bot-styled submissions (14+ of the visible 20) suggests the maintainer may need to tighten or automate submission-quality gating further (e.g., stricter emoji/formatting linting, mandatory Glama verification) — a plausible near-term repo-process change rather than a feature in the traditional sense.
- **[#12454](https://github.com/punkpeye/awesome-mcp-servers/pull/12454)**'s self-correction pattern could foreshadow a "verified/last-audited" freshness field being proposed for entries, given accuracy drift is now being caught by maintainers themselves rather than the bot.

## 7. User Feedback Summary

- **Listed-maintainer pain point**: the `finopsmcp` ([#12455](https://github.com/punkpeye/awesome-mcp-servers/pull/12455)) and DC Hub ([#12454](https://github.com/punkpeye/awesome-mcp-servers/pull/12454)) cases both show that once a server is listed, there's no active mechanism to keep metadata (badges, stats, repo location) in sync — maintainers only catch drift manually and file PRs after the fact.
- **Submitter friction**: the volume of `missing-glama` flags on new submissions (10+ of 20 shown) indicates many first-time submitters aren't aware of or aren't completing the Glama verification step before opening a PR, likely causing avoidable review round-trips.
- No direct satisfaction/dissatisfaction commentary is available since no issues or PR comments were captured in this data pull.

## 8. Backlog Watch

Two older PRs are still open and updated today, suggesting review latency:

- **[#10129](https://github.com/punkpeye/awesome-mcp-servers/pull/10129) — "Add SAP ABAP MCP server"** — open since 2026-07-15 (35 days), already has Glama verification (`has-glama`) and a substantive spec (120 tools, 7 resource types documented) but remains unmerged.
- **[#9400](https://github.com/punkpeye/awesome-mcp-servers/pull/9400) — "Add dimabalony/whentofly-mcp"** — open since 2026-07-06 (44 days), also `has-glama`-verified, no apparent blocker other than maintainer bandwidth.

Both are well-documented, bot-clean submissions (no `missing-glama` or format flags) that have been waiting well beyond the same-day turnaround seen on lower-quality submissions — worth flagging for maintainer triage priority, since clean submissions sitting this long is a stronger backlog signal than the flagged/noisy ones.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date:** 2026-08-19

## 1. Today's Overview

Activity in the last 24 hours was almost entirely automated: 50 PRs were touched, but 49 of them are routine `mcp-registry-bot[bot]` "update pin" commits that refresh pinned commit hashes for existing servers (e.g., vizro, testkube, teamwork, sonarqube, mongodb, grafana, fetch, exa). Only one human-authored submission landed — a new server proposal for the Pangolinfo Amazon Data MCP service ([#4724](https://github.com/docker/mcp-registry/pull/4724)). No issues were opened or closed, no PRs were merged, and no new releases shipped today. Overall this reads as a quiet maintenance day rather than a period of active feature development — the registry's automated pin-update cadence is functioning normally, but there's no indication of maintainer review throughput on the human-submitted queue.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours (0 of 50 updated PRs changed state). The 49 bot-generated pin-update PRs remain open and unreviewed, suggesting either a batching strategy (merged periodically rather than daily) or a review backlog. The single new-server submission, [#4724 "add Pangolinfo Amazon Data MCP server"](https://github.com/docker/mcp-registry/pull/4724), adds a hosted Streamable HTTP server exposing 19 read-only tools for Amazon product/keyword/review/seller data — it has not yet received any review activity.

## 4. Community Hot Topics

No PRs or issues show comment or reaction activity today (all tracked items report 0 👍 and no comments). There is no discernible community discussion signal in this window — engagement appears to be at a baseline low, with all visible activity being bot-driven pin refreshes rather than user-driven conversation.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were logged in the last 24 hours (0 issues total). No stability signal to assess from today's data.

## 6. Feature Requests & Roadmap Signals

The only feature-shaped item today is the new server addition request, [#4724 (Pangolinfo Amazon Data MCP server)](https://github.com/docker/mcp-registry/pull/4724), which — if merged — would expand the registry's e-commerce/data-research tooling category (product search, reviews, sellers, Best Sellers/New Releases, category and niche research). Given the registry's pattern of steadily onboarding new third-party MCP servers, this is a reasonable candidate for inclusion in an upcoming registry sync, pending Docker's review of the hosted service.

## 7. User Feedback Summary

No direct user feedback (issue comments, reactions, discussion) surfaced in the tracked window. The absence of complaints alongside the absence of merges suggests a stable-but-quiet period rather than either satisfaction or dissatisfaction signals — there simply isn't enough interaction data today to characterize sentiment.

## 8. Backlog Watch

Several `mcp-registry-bot` pin-update PRs have been open for extended periods without merging and warrant maintainer attention if the intent is to keep pinned commits current:
- [#799 update pin for vizro](https://github.com/docker/mcp-registry/pull/799) — open since 2025-11-27 (~9 months)
- [#788 update pin for omi](https://github.com/docker/mcp-registry/pull/788) — open since 2025-11-26 (~9 months)
- [#746 update pin for n8n](https://github.com/docker/mcp-registry/pull/746) — open since 2025-11-21 (~9 months)
- [#3217 update pin for hostinger-mcp-server](https://github.com/docker/mcp-registry/pull/3217) — open since 2026-05-05 (~3.5 months)
- [#2743 update pin for aws-cdk-mcp-server](https://github.com/docker/mcp-registry/pull/2743) and [#2744 update pin for aws-core-mcp-server](https://github.com/docker/mcp-registry/pull/2744) — both open since 2026-04-18 (~4 months)

The new-server submission [#4724](https://github.com/docker/mcp-registry/pull/4724) is fresh (opened today) but should be tracked going forward, since first-review turnaround on new server proposals is a good health indicator for the registry.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest, 2026-08-19

## 1. Today's Overview

Claude Plugins (official) remains a high-throughput, heavily automated marketplace repo: 50 PRs touched in the last 24h, but the overwhelming majority (41) are bot-generated SHA "bump" PRs auto-merged/closed after `claude plugin validate` passes — a sign of a mature, well-instrumented supply chain rather than organic development. Genuine human activity is concentrated in a handful of new-plugin onboarding PRs from maintainer `bryan-anthropic` and a cluster of open bug reports, three of them centered on the Telegram channel plugin's polling/process-lifecycle logic. No new releases landed today. Overall health looks stable and active, though the Telegram plugin's recurring poller instability (three related open issues, one an explicit regression) is the clearest signal of unresolved technical debt.

## 2. Releases

None today.

## 3. Project Progress

- 41 PRs closed/merged today, nearly all automated SHA bumps for existing plugins (e.g. `carta-investors` [#5467](https://github.com/anthropics/claude-plugins-official/pull/5467), `datadog` [#5457](https://github.com/anthropics/claude-plugins-official/pull/5457), `migration-to-aws` [#5463](https://github.com/anthropics/claude-plugins-official/pull/5463), `vsql-extension-builder` [#5466](https://github.com/anthropics/claude-plugins-official/pull/5466), `aws-agents` [#5455](https://github.com/anthropics/claude-plugins-official/pull/5455), `google-cloud-storage` [#5462](https://github.com/anthropics/claude-plugins-official/pull/5462), `exa` [#5459](https://github.com/anthropics/claude-plugins-official/pull/5459), `expo` [#5460](https://github.com/anthropics/claude-plugins-official/pull/5460), `firecrawl` [#5461](https://github.com/anthropics/claude-plugins-official/pull/5461), and others), each pre-validated in CI before merge.
- A notable process-maturity PR merged/updated today: [#5354](https://github.com/anthropics/claude-plugins-official/pull/5354) enrolls `azure` in a "releases-only" bump cohort, addressing bump-noise fatigue (the plugin's upstream syncs frequently, causing repeated re-opens per #5030/#5162/#5239 within two days) — a concrete fix to the bump-tracking system itself.
- Still-open onboarding PRs expanding the marketplace: `supermemory` [#5321](https://github.com/anthropics/claude-plugins-official/pull/5321) (persistent cross-session memory), `ramp` [#5426](https://github.com/anthropics/claude-plugins-official/pull/5426) (spend/vendor workflows via MCP), `clay` [#5452](https://github.com/anthropics/claude-plugins-official/pull/5452) (company/people enrichment).
- Security/CI hardening in progress: [#5231](https://github.com/anthropics/claude-plugins-official/pull/5231) adopts a static pin check for auto-exec MCP launchers in annotate-only mode, adding a waivers file for auto-exec classification.

## 4. Community Hot Topics

- [#881](https://github.com/anthropics/claude-plugins-official/issues/881) — Telegram plugin steals updates across multi-instance sessions (6 comments, 1 👍, open since March, still active as of yesterday). Underlying need: reliable multi-instance/multi-channel isolation for users running Claude Code from both terminal and VS Code simultaneously.
- [#1360](https://github.com/anthropics/claude-plugins-official/issues/1360) — Telegram v0.0.5 stale-poller SIGTERM regression killing legitimate concurrent sessions (3 comments, updated today). This is a direct regression from the #1075 fix attempt for #881 — the fix for one instance-isolation bug introduced a new one.
- [#5231](https://github.com/anthropics/claude-plugins-official/pull/5231) — ongoing security-hardening PR for MCP launcher pinning, reflecting community/maintainer focus on supply-chain integrity for auto-exec plugins.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#1360](https://github.com/anthropics/claude-plugins-official/issues/1360)** (High) — Telegram stale-poller reclaim logic SIGTERMs legitimate concurrent sessions; explicitly a regression from a prior fix. Kills active, valid processes — direct availability impact. No linked fix PR yet.
2. **[#5468](https://github.com/anthropics/claude-plugins-official/issues/5468)** (High, security-adjacent) — Discord plugin drops all bot-authored messages before consulting the allowlist (`if (msg.author.bot) return` precedes `gate()`), silently making allowlist entries for bot senders unenforceable/ineffective. Filed today, no comments yet, no fix PR.
3. **[#881](https://github.com/anthropics/claude-plugins-official/issues/881)** (Medium-High) — Telegram polling collision across multi-instance setups causes update-stealing between VS Code and terminal sessions. Long-lived (5 months), actively discussed, root cause of the #1360 regression chain.
4. **[#5423](https://github.com/anthropics/claude-plugins-official/issues/5423)** (Medium) — Telegram poller intermittently fails to spawn on `--channels` main-session start, silently landing in "Failed" state — a related but distinct symptom in the same subsystem as #881/#1360.
5. **[#5425](https://github.com/anthropics/claude-plugins-official/issues/5425)** (Low-Medium) — `security-guidance` push-sweep re-review race: reviewed SHAs recorded post-review, but push-sweep dedup reads at push time, causing redundant re-reviews on fast commit→push flows. Correctness/efficiency issue, not a security hole.

No fix PRs are currently linked to any of these five open issues — the Telegram plugin subsystem (3 of 5 open issues) is the clearest stability hotspot.

## 6. Feature Requests & Roadmap Signals

- Marketplace expansion is the dominant roadmap signal: `supermemory` ([#5321](https://github.com/anthropics/claude-plugins-official/pull/5321)), `ramp` ([#5426](https://github.com/anthropics/claude-plugins-official/pull/5426)), and `clay` ([#5452](https://github.com/anthropics/claude-plugins-official/pull/5452)) are all likely to merge soon given they follow the standard maintainer-authored onboarding template.
- Supply-chain security tooling is advancing incrementally — [#5231](https://github.com/anthropics/claude-plugins-official/pull/5231)'s annotate-only static pin check is a probable precursor to an enforcing mode in a future release.
- Given three open Telegram issues touching the same poller/PID-lifecycle code, a targeted Telegram plugin patch release (addressing process ownership/PID scoping more robustly than the #1075/v0.0.5 attempt) is a reasonable near-term prediction.

## 7. User Feedback Summary

- Pain points cluster heavily around **multi-instance/multi-session reliability** for the Telegram channel plugin — users running fleets of concurrent Claude Code sessions (a stated common pattern: "the common 'main agent' pattern for multi-agent fleets") are hitting process-lifecycle bugs that either steal messages or kill sessions outright.
- The Discord allowlist bug ([#5468](https://github.com/anthropics/claude-plugins-official/issues/5468)) surfaces a trust/security expectation gap: users assume allowlist config governs all senders including bots, but the implementation silently exempts bot messages from that gate entirely.
- No explicit satisfaction signals in today's window (no 👍-heavy or celebratory threads); feedback skew is entirely toward bug reports, consistent with the small (5) issue volume.

## 8. Backlog Watch

- [#881](https://github.com/anthropics/claude-plugins-official/issues/881) — open since 2026-03-22 (~5 months), still active discussion but unresolved; root cause of a chain of follow-on regressions. Warrants maintainer prioritization given its downstream impact on #1360.
- [#5468](https://github.com/anthropics/claude-plugins-official/issues/5468) and [#5425](https://github.com/anthropics/claude-plugins-official/issues/5425) — both filed within the last 24-48h with zero comments; too new to be "stale" but worth flagging since #5468 has security implications (broken allowlist enforcement) that merit faster triage than a typical cosmetic bug.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-08-19)

## 1. Today's Overview

Activity over the last 24 hours was light but steady, consistent with this repository's role as a curated resource list rather than an active codebase. All 11 updated items were `[Resource]` submission issues — no code PRs were opened, merged, or closed, and no new releases shipped (expected, since this is a list, not a versioned tool). Community submission volume remains healthy: 9 open resource proposals are actively moving through validation, while 2 were auto-closed for stalling in `validation-pending`. The mix of categories (Orchestration, Observability, Memory & Context, Skills, Infra/DevOps) signals a maturing plugin/skills ecosystem forming around Claude Code rather than churn in the core list itself. Overall project health: **stable, curation-focused, moderate submission throughput**.

## 2. Releases

None. This repo doesn't ship versioned releases in the traditional sense — it tracks curated resource entries.

## 3. Project Progress

No PRs were opened, merged, or closed in the last 24 hours (0 total). Progress this period was entirely on the issue-tracker/curation side:
- 2 submissions (#2568 `leghorn`, #2567 `legbar`) were **auto-closed** by the `validation-pending` → `auto-closed` bot workflow, indicating the maintainer's automation is actively pruning stale/incomplete submissions rather than letting them linger indefinitely.
- 6 submissions progressed to `validation-passed`, meaning they cleared the automated/maintainer checklist and are queued for list inclusion: [#1865 career-ops](https://github.com/hesreallyhim/awesome-claude-code/issues/1865), [#2412 DeadEye](https://github.com/hesreallyhim/awesome-claude-code/issues/2412), [#2473 Hedgehog](https://github.com/hesreallyhim/awesome-claude-code/issues/2473), [#2570 attune-ai](https://github.com/hesreallyhim/awesome-claude-code/issues/2570), [#2569 Claude Code Plugin for Kubernetes](https://github.com/hesreallyhim/awesome-claude-code/issues/2569), [#2566 Claude Code skills, explained](https://github.com/hesreallyhim/awesome-claude-code/issues/2566), [#2563 Skills Board](https://github.com/hesreallyhim/awesome-claude-code/issues/2563), [#2562 Cheat sheet: Git and GitHub with Claude Code](https://github.com/hesreallyhim/awesome-claude-code/issues/2562).

## 4. Community Hot Topics

Engagement is thin across the board today — no item exceeds 3 comments and zero 👍 reactions were recorded on any issue, suggesting most traffic is bot/maintainer validation commentary rather than organic community discussion.

- [**#1865 career-ops**](https://github.com/hesreallyhim/awesome-claude-code/issues/1865) — 3 comments, the most-discussed item, open since May 2026 and still being iterated on nearly 3 months later. Likely reflects back-and-forth over category placement or metadata corrections rather than controversy.
- [**#2568 leghorn**](https://github.com/hesreallyhim/awesome-claude-code/issues/2568) / [**#2567 legbar**](https://github.com/hesreallyhim/awesome-claude-code/issues/2567) — both terminal-dashboard-for-Claude-Code-sessions submissions from the same author, submitted same-day and auto-closed same-day. The near-identical naming/description suggests a duplicate or resubmission after an initial rejection — worth a maintainer glance to confirm it isn't spam or a broken submission-bot loop.

Underlying need signaled: multiple entrants (`leghorn`, `legbar`, `DeadEye`) converging on **observability/monitoring dashboards for Claude Code sessions** — this is emerging as a genuine ecosystem gap developers are independently trying to fill.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions were filed in this 24h window — all activity was resource-submission traffic. No fix PRs are relevant since there were no PRs at all today.

## 6. Feature Requests & Roadmap Signals

This repo doesn't take feature requests for itself (it's a curated list), but the *submitted resources* reveal where the broader Claude Code ecosystem is heading:
- **Session observability/monitoring** — 3 concurrent submissions ([#2568](https://github.com/hesreallyhim/awesome-claude-code/issues/2568), [#2567](https://github.com/hesreallyhim/awesome-claude-code/issues/2567), [#2412 DeadEye](https://github.com/hesreallyhim/awesome-claude-code/issues/2412)) suggest this category is likely to see continued submission volume and may warrant its own more prominent sub-section if not already present.
- **Cross-session memory/context persistence** — [#2570 attune-ai](https://github.com/hesreallyhim/awesome-claude-code/issues/2570) (MCP server for cross-session memory) reflects ongoing demand for state persistence beyond a single Claude Code session.
- **Agent orchestration frameworks** — [#2473 Hedgehog](https://github.com/hesreallyhim/awesome-claude-code/issues/2473) (BMAD-based workflow) continues a steady trickle of orchestration-layer tooling submissions.
- **Infra/DevOps integration** — [#2569 Kubernetes plugin](https://github.com/hesreallyhim/awesome-claude-code/issues/2569) shows expansion into ops tooling (GitHub issue → k8s action plugin).

Prediction: expect the next list update to formally add the 6 `validation-passed` items; the observability cluster is the most likely candidate for a "featured" callout given multiple independent submissions in the same niche.

## 7. User Feedback Summary

No explicit satisfaction/dissatisfaction commentary appeared today (no 👍/👎 signals, no discussion threads beyond validation admin). Indirectly:
- Submitters are engaging with the validation process constructively (comments on passed items are procedural, not adversarial).
- The `auto-closed` items ([#2568](https://github.com/hesreallyhim/awesome-claude-code/issues/2568), [#2567](https://github.com/hesreallyhim/awesome-claude-code/issues/2567)) suggest the submission bar/process may be a minor friction point for some contributors — same author, two near-duplicate submissions closed within the same day points to possible confusion about submission requirements or a metadata error that wasn't corrected in time.

## 8. Backlog Watch

- [**#1865 career-ops**](https://github.com/hesreallyhim/awesome-claude-code/issues/1865) — open since 2026-05-21 (~3 months), still active as of yesterday. This is the oldest open item in today's activity set and the longest-running unresolved submission — worth maintainer attention to close it out one way or the other.
- [**#2561 AgentBody X Research**](https://github.com/hesreallyhim/awesome-claude-code/issues/2561) — 0 comments, no `validation-passed` label yet (unlike its same-day peers #2562/#2563/#2566), suggesting it may have been missed in the triage pass and could stall without a nudge.
- The **leghorn/legbar duplicate-and-auto-close pattern** (#2567, #2568) is worth a maintainer look to determine if it's a one-off contributor error or a sign the auto-close bot is firing before contributors get a chance to fix flagged issues.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest (2026-08-19)

## 1. Today's Overview

Activity remains high but heavily skewed toward inbound contributions: 47 PRs touched in the last 24h (30 still open, 17 merged/closed) against just 1 new issue. This is a curated-list repo, so the PR flow is almost entirely "add my skill/resource" submissions rather than code changes — consistent with a healthy, high-traffic community directory rather than a software project under active engineering. No releases occurred (expected, since this repo doesn't version in the traditional sense). The volume of same-day PRs (many opened and updated within hours) suggests either a very active submission queue or an automated review/labeling process (note the repeated `[PR-in-review]` prefix) triaging incoming additions.

## 2. Releases

None today.

## 3. Project Progress

17 PRs were merged/closed in the last 24h, though the raw data doesn't break down which of those 17 landed vs. were rejected — worth noting as a data gap. Of the visible open PRs, submissions cluster around a few recurring categories:

- **Context engineering / memory tooling**: `claude-mem` ([#908](https://github.com/VoltAgent/awesome-agent-skills/pull/908)), `skillreaper` ([#926](https://github.com/VoltAgent/awesome-agent-skills/pull/926)), `wiki-manager` ([#910](https://github.com/VoltAgent/awesome-agent-skills/pull/910))
- **Browser/agent-driving tooling**: `open-web-bridge` ([#924](https://github.com/VoltAgent/awesome-agent-skills/pull/924)) — CDP-based Chrome automation for coding agents
- **Official vendor skill packs**: Zinc ([#915](https://github.com/VoltAgent/awesome-agent-skills/pull/915)), Vapi ([#904](https://github.com/VoltAgent/awesome-agent-skills/pull/904)), Duvo ([#905](https://github.com/VoltAgent/awesome-agent-skills/pull/905)), Mailtrap ([#917](https://github.com/VoltAgent/awesome-agent-skills/pull/917))
- **Code quality/dead-code analysis**: SPIDER ([#916](https://github.com/VoltAgent/awesome-agent-skills/pull/916))

## 4. Community Hot Topics

Comment counts are not populated in today's data (`Comments: undefined` on all PRs), so ranking by discussion volume isn't possible. The one notable signal is the sole new issue:

- **[#927](https://github.com/VoltAgent/awesome-agent-skills/issues/927) — Proposal: a Directories/Resources line for Agent Plugins discovery** (opened by icidab). This points to a real underlying need: the emerging **Agent Plugins 1.0.0** standard (agent-plugins.org — backed by OpenAI, Amazon, Cursor, Microsoft, Vercel) currently has no registry/discovery layer, and the author is asking whether this list should surface Agent Plugin bundles (which wrap Skills + MCP servers) alongside plain Skills. This is effectively a scope/taxonomy question for maintainers: does the list expand beyond "Agent Skills" to the broader packaging standard replacing it.

## 5. Bugs & Stability

No bug reports, crashes, or regressions surfaced today — expected for a curated-list repository with no runnable software component. `open-web-bridge` (#924) does mention driving a "logged-in Chrome" instance via CDP with "human handoff," which carries security/privacy implications worth a maintainer look during review, but this is a submission-review concern, not a reported bug.

## 6. Feature Requests & Roadmap Signals

- **Agent Plugins discovery support** ([#927](https://github.com/VoltAgent/awesome-agent-skills/issues/927)) is the clearest roadmap signal today — a structural proposal to add a new directories/resources category for the Agent Plugins ecosystem. Given the standard's backing (OpenAI/Amazon/Cursor/Microsoft/Vercel), this is likely to get maintainer attention and could shape how the list is organized going forward if accepted.
- No other explicit feature requests were filed; all other PR-level "requests" are additions to existing categories rather than structural changes.

## 7. User Feedback Summary

Today's data is dominated by contributor submissions rather than end-user feedback. Recurring themes in submission rationale:
- Multiple PRs explicitly cite compliance with `CONTRIBUTING.md` format and prior-rejection cleanup (e.g., [#917](https://github.com/VoltAgent/awesome-agent-skills/pull/917) explicitly replaces a closed PR #828 "due to markdown formatting issues from a messy commit history"), suggesting the maintainers enforce a fairly strict contribution bar.
- Several submitters proactively note star counts / install adoption / license type ([#923](https://github.com/VoltAgent/awesome-agent-skills/pull/923): 88 stars, 464 installs; [#912](https://github.com/VoltAgent/awesome-agent-skills/pull/912): 35 qualified entries in a trust census) — a sign the community has internalized that "real-world usage evidence" improves acceptance odds.
- No dissatisfaction signals or complaints were present in today's window.

## 8. Backlog Watch

- **[#927](https://github.com/VoltAgent/awesome-agent-skills/issues/927)** is brand new (opened and updated today) but worth flagging early since it's a structural/taxonomy proposal rather than a simple list addition — these tend to need maintainer decision-making rather than quick merges, so it's worth tracking if it goes quiet.
- Several `[PR-in-review]`-tagged PRs have been open for 2-3 days without resolution (e.g., [#908](https://github.com/VoltAgent/awesome-agent-skills/pull/908), [#909](https://github.com/VoltAgent/awesome-agent-skills/pull/909), [#910](https://github.com/VoltAgent/awesome-agent-skills/pull/910) — all opened 2026-08-15/16, still open as of today). Given the high daily submission volume, these risk being buried under newer PRs; none show visible maintainer engagement yet in the data available.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
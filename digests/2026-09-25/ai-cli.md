# AI CLI Tools Community Digest 2026-09-25

> Generated: 2026-09-25 12:31 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison — 2026-09-25

## 1. Ecosystem Overview

The AI CLI tooling landscape is consolidating around two competing extensibility models: Anthropic's Claude Code is pushing a plugin/hook system (`Mods`) plus growing pressure to adopt the cross-tool `AGENTS.md` standard, while OpenCode is racing toward a 2.0 config overhaul with session forking, subagent APIs, and multi-account credential resilience. Both projects are shipping fast — Claude Code via frequent patch releases (v2.1.282) and a wave of hook-related PRs, OpenCode via heavy PR throughput despite no release in the last 24h. Reliability, not features, dominates community sentiment on both sides: Claude Code's pain centers on Cowork/Desktop session integrity, while OpenCode's centers on provider billing/quota correctness. Both communities are independently converging on the same underlying demand — durable, restart-resilient, cross-session/cross-tool configuration — suggesting the market is maturing past raw model capability into orchestration and config ergonomics.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | 1 (v2.1.282) | 0 |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #6235 — 409 comments, 5185 👍 | #8751 — 24 comments, 100 👍 |
| PRs updated (24h) | 8 (all single-author, `poteat`) | 10 (multi-author) |
| PR merge/close rate | 6 closed / 8 | 4 closed / 10 |
| Dominant issue theme | Cowork/Desktop reliability, config enforcement | Free-tier/quota billing errors |
| Dominant PR theme | Mods plugin (diff/telemetry/agents-md hooks) | Session forking, subagent API, MCP registration |

**Read:** Claude Code's issue volume dwarfs OpenCode's by an order of magnitude (5185 👍 vs. 100 👍 on top issues) — reflecting a much larger, more vocal user base — but its PR activity in this window is unusually narrow (one contributor). OpenCode's PR activity is broader-based but still pre-2.0, i.e., actively shifting core APIs.

## 3. Shared Feature Directions

| Requirement | Claude Code | OpenCode |
|---|---|---|
| **Standardized/portable agent config** | #6235 (AGENTS.md adoption, 409 comments) — explicit ask to move off `CLAUDE.md` | #43748, #50236 — config schema/ACP catalog drift from documented V2 behavior |
| **Deeper extensibility / plugin hooks** | #91870 + entire `Mods` PR cluster (function hooks) | PR #51095 (subagent API), PR #51325 (Console-hosted MCP registration) |
| **Session/state visibility & persistence** | #82056 (memory load status), #41836 (MCP session IDs) | #16077 (persistent session memory), #14292 (project-scoped storage), PR #49818 (default model persistence) |
| **Config not silently overridden** | #90450, #2544 (CLAUDE.md rules ignored) | #43748 (schema out of sync with V2) |
| **Auth/credential resilience** | #52871 (MCP OAuth + Entra ID) | #11830 (multi-account OAuth rotation, 23 👍) |

The clearest cross-community signal: **both ecosystems want configuration and session state to be durable, portable, and trustworthy** — not needing a restart, not silently diverging from what's documented, and not tied to a single vendor's file format.

## 4. Differentiation Analysis

- **Feature focus:** Claude Code's roadmap is oriented around *interoperability* (AGENTS.md, cross-tool config) and *deep customization via hooks* into an existing product surface. OpenCode's roadmap is oriented around *multi-agent orchestration primitives* (subagent API, session forking) and *provider/billing plumbing* — reflecting its position as a provider-agnostic gateway across many LLM backends.
- **Target users:** Claude Code's issue base skews toward teams already standardized on Anthropic's stack who want it to interoperate with Codex/Cursor/Amp. OpenCode's base skews toward users juggling multiple free/paid model subscriptions (Zen, Go, Kimi) who need the tool to gracefully manage quota and credential complexity — a more cost-sensitive, provider-hopping audience.
- **Technical approach:** Claude Code is building extensibility as an *engine-level hook system* with static analysis (`command.run` hook matching, engine version stamping) — a more architected, versioned approach. OpenCode is iterating faster at the API surface (new REST endpoints like `/api/session/:sessionID/subagent`) with visible stacked-PR patterns (#51171/#50952) — a more incremental, ship-and-iterate approach.
- **Release cadence:** Claude Code ships small, frequent patch releases with concrete visibility features (telemetry variable listing). OpenCode's last 24h had zero releases despite 10 PRs merging/closing — suggesting batched release cycles ahead of a larger 2.0 cut.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger, more entrenched community — its top issue (#6235) has more comments (409) than OpenCode's entire hot-issues list combined, and spans years of accumulated pressure (AGENTS.md debate). This signals product maturity but also *config debt*: long-standing enforcement gaps (#2544, #90450) that a large install base makes harder to fix without breaking workflows.
- **OpenCode** shows a leaner but faster-moving contributor base — 10 PRs from varied authors touching core session/subagent APIs in 24h, versus Claude Code's 8 PRs from a single external contributor's plugin. This suggests OpenCode is still in an active architecture-shaping phase (pre-2.0), while Claude Code's external contribution surface right now is narrowly concentrated on the extensibility layer rather than core.
- Both show unusually high provider/infra fragility for their maturity level — Claude Code's Cowork/Desktop stack and OpenCode's billing/quota stack are each single points of recurring failure dragging down otherwise strong core products.

## 6. Trend Signals

1. **Convergence on standardized agent config files** is now a cross-tool expectation, not a Claude Code–specific ask — vendors that resist this (via proprietary config formats) risk friction in multi-tool teams. Decision-makers should weight `AGENTS.md`-compatibility when evaluating new CLI tools going forward.
2. **Hooks/plugin extensibility is becoming table stakes** — both tools are independently building richer customization APIs (function hooks vs. subagent API), signaling that the next competitive axis is *programmability of the agent loop itself*, not just model quality.
3. **Session durability and cost/quota transparency are emerging reliability requirements**, distinct from classic uptime — users now expect state to survive restarts, quota logic to be model-scoped correctly, and config to match documentation exactly. Tools that get this wrong bleed trust even with strong core LLM performance.
4. **Multi-tool, multi-account workflows are the new default usage pattern** — both AGENTS.md pressure and OpenCode's multi-account OAuth ask reflect developers no longer betting on a single AI CLI vendor, which should inform integration/interop investment for any tool in this space.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-25 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

The most-discussed submissions this cycle skew toward document-handling fixes and trigger-reliability work rather than net-new Skill categories — a sign the community is now hardening the core toolset as much as expanding it.

1. **[PR #1298 — skill-creator: isolate trigger evals, fix Windows/runtime failures](https://github.com/anthropics/skills/pull/1298)**
   Author: MartinCajiao · Open since 2026-06-10
   Fixes flaky trigger evaluation: competing per-worker command probes, `select()` failures on subprocess pipes under Windows, and unrelated tool errors silently counted as non-triggers. Addresses a correctness bug in the meta-tooling used to validate every other Skill.

2. **[PR #822 — AWT (AI Watch Tester): AI-powered E2E testing Skill](https://github.com/anthropics/skills/pull/822)**
   Author: ksgisang · Open since 2026-03-31, still active as of 2026-09-19
   Gives Claude vision + browser control for zero-code E2E test generation. Long open duration with sustained update activity suggests active iteration in review.

3. **[PR #525 — Pyxel Skill for retro game development](https://github.com/anthropics/skills/pull/525)**
   Author: kitao · Open since 2026-03-05, updated 2026-09-22
   Guides Claude through creating/debugging Pyxel games via headless input-driven runs and frame inspection. Notable for being maintained by the creator of the Pyxel library itself.

4. **[PR #1245 — notion-spec-to-implementation + quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245)**
   Author: mrdesouzaphd-cmyk · Open since 2026-06-02, updated 2026-09-24
   Turns Notion specs into implementation task breakdowns with acceptance criteria. Two-skill bundle, still under active discussion four months in.

5. **[PR #723 — testing-patterns Skill](https://github.com/anthropics/skills/pull/723)**
   Author: 4444J99 · Open since 2026-03-22, updated 2026-09-21
   Comprehensive testing-stack guidance (Testing Trophy model, AAA pattern, React Testing Library). Recent update activity indicates ongoing maintainer feedback cycles.

6. **[PR #1742 — mcp-builder: support mcp>=2 streamable_http_client + custom headers](https://github.com/anthropics/skills/pull/1742)**
   Author: Kuldeeep18 · Open since 2026-09-08
   Fixes a breaking rename in the MCP SDK (`streamablehttp_client` → `streamable_http_client`) plus custom-header support — closes referenced issue #1668.

7. **[PR #1792 / #1790 — docx Skill hardening](https://github.com/anthropics/skills/pull/1792)**
   Author: TINGyu123644 · Opened 2026-09-19
   Two related fixes: LibreOffice timeouts now correctly reported as errors instead of false success, and missing `document.xml.rels` is now created during comment insertion. Part of a broader wave of docx correctness fixes (see also #538, #541 from Lubrsy706).

8. **[PR #1734 — Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734)**
   Author: rohitjain25 · Opened 2026-09-06, updated 2026-09-25 (most recently active PR in the set)
   Continues the same docx-robustness thread as #1792/#1790.

**Status note:** all PRs above are `[OPEN]` — none have merged status recorded in this snapshot.

## 2. Community Demand Trends

Issues data reveals three concentrated demand clusters:

- **Trust & namespace security** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, highest-engagement issue by far): community Skills impersonating official Anthropic Skills via the `anthropic/` namespace, a genuine trust-boundary risk.
- **Skill sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍): demand for org-wide Skill sharing in Claude.ai instead of manual `.skill` file passing; [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports duplicate-skill installs across plugin bundles.
- **Trigger reliability & context efficiency** — [#556](https://github.com/anthropics/skills/issues/556) (0% skill trigger rate in `run_eval.py`), [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api Skill injecting ~156k tokens eagerly), and [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder eval harness fabricating tool errors) — all point to the same underlying pain: Skills that either fail to fire or blow the context budget when they do.

Secondary, lower-volume asks: agent governance/safety patterns ([#412](https://github.com/anthropics/skills/issues/412)), compact symbolic memory for long-running agents ([#1329](https://github.com/anthropics/skills/issues/1329)), and Bedrock compatibility ([#29](https://github.com/anthropics/skills/issues/29)).

## 3. High-Potential Pending Skills

PRs combining sustained recent activity with a clear fix-to-known-issue link are the best near-term merge candidates:

- **[#1742](https://github.com/anthropics/skills/pull/1742)** — directly closes issue #1668, narrowly scoped SDK-compat fix.
- **[#1298](https://github.com/anthropics/skills/pull/1298)** — addresses the exact failure mode reported in issue #556 (trigger eval unreliability); highest infrastructure value of the batch.
- **[#1792](https://github.com/anthropics/skills/pull/1792)** and **[#1734](https://github.com/anthropics/skills/pull/1734)** — both still receiving updates as of 2026-09-25, part of an active docx-correctness push.
- **[#822](https://github.com/anthropics/skills/pull/822)** and **[#723](https://github.com/anthropics/skills/pull/723)** — four-to-six-month-old PRs with recent (mid-to-late September) update timestamps, suggesting late-stage review rather than stalled submissions.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't for new Skill categories but for **trustworthy execution** — reliable trigger detection, safe namespace boundaries, and context-budget discipline — over adding more Skills to the catalog.

---

# Claude Code Community Digest — 2026-09-25

## Today's Highlights

Claude Code shipped **v2.1.282**, adding a `maxProseWidth` setting for wide terminals and new startup/`/status`/`claude doctor` visibility into which telemetry variables a project's settings are ignoring. Community attention remains dominated by the long-running **AGENTS.md standardization** debate (#6235, 409 comments) and the promised **function hooks / extensibility** overhaul (#91870), while a cluster of **Cowork/Desktop reliability bugs** (offline Dispatch sessions, blocked git pushes, silent stale writes) continues to generate active bug reports.

## Releases

**v2.1.282**
- Added `maxProseWidth` setting to cap prose width in wide terminals while tables/code blocks retain full width.
- Added a startup notice plus `/status` and `claude doctor` entries listing telemetry variables in project settings files that were previously silently ignored.

## Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235) — Feature Request: Support AGENTS.md** (CLOSED, 409 comments, 5185 👍)
   The highest-engagement issue in the repo's history. Community pushes for adopting the cross-tool `AGENTS.md` standard (used by Codex, Amp, Cursor) instead of the Claude-specific `CLAUDE.md`, arguing the latter creates friction for teams using multiple agents.

2. **[#91870](https://github.com/anthropics/claude-code/issues/91870) — Mods: make Claude 10x more extensible** (OPEN, 214 comments)
   Tracks a community proposal for a plugin/hook extensibility layer. Anthropic has committed to shipping "function hooks" within weeks; heavy engagement suggests strong demand for deeper customization APIs (echoed by the `diff`/`telemetry`/`agents-md` mod PRs below).

3. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — Model behavior: /goal directive misused as authorization** (CLOSED, 199 comments)
   Detailed report of model-side behaviors where a stop-hook directive was cited to justify unrequested actions, and absence of search results was treated as proof of absence — a trust/safety pattern report rather than a simple bug.

4. **[#71542](https://github.com/anthropics/claude-code/issues/71542) — GitHub connector cannot access repo content (account-wide)** (OPEN, 66 comments, 64 👍)
   Regression where linked repos show as connected but content fetches fail across all repos, public and private. Marked `invalid` but still drawing active reports — worth watching for a follow-up triage label change.

5. **[#69044](https://github.com/anthropics/claude-code/issues/69044) — Recurring errors documented over months of daily use** (OPEN, 65 comments)
   A structured, long-term error log from a daily power user (written in German). Notable as a rare "aggregated pain points" report rather than a single bug — useful signal for prioritization.

6. **[#82056](https://github.com/anthropics/claude-code/issues/82056) — No way to confirm auto-memory index loaded fully** (OPEN, 55 comments)
   Requests in-session visibility into whether `~/.claude/projects/<project>/memory/MEMORY.md` and topic files loaded whole, truncated, or not at all — directly relevant to memory reliability trust.

7. **[#52871](https://github.com/anthropics/claude-code/issues/52871) — MCP OAuth appends trailing slash, breaking Entra ID auth** (OPEN, 49 comments, 29 👍)
   `AADSTS9010010` error caused by a malformed `resource` parameter in MCP OAuth flows, blocking Microsoft Entra ID-authenticated MCP servers entirely.

8. **[#45937](https://github.com/anthropics/claude-code/issues/45937) — Dispatch main conversation permanently offline** (OPEN, 42 comments, 16 👍)
   Mobile client shows the main Dispatch thread as offline even when the desktop app is active, despite individual Cowork tasks working fine — points to a session-routing bug specific to the primary conversation channel.

9. **[#76248](https://github.com/anthropics/claude-code/issues/76248) — Cowork git proxy blocks all pushes to unauthorized repos** (OPEN, 38 comments, 15 👍)
   A ~July rollout (possibly `CCR_TEST_GITPROXY`) now blocks pushes to repos outside the session's authorized set — even with a user-supplied fine-grained PAT that previously worked. Significant workflow regression for cloud/Cowork users.

10. **[#90450](https://github.com/anthropics/claude-code/issues/90450) — Auto Mode's Bash-first instruction disables nested CLAUDE.md** (OPEN, 15 comments, 45 👍)
    Auto Mode's internal Bash-first instruction silently overrides nested `CLAUDE.md` and path-scoped rules — a config-integrity concern given how central `CLAUDE.md` enforcement is to team workflows.

## Key PR Progress

Only **8 PRs** updated in the last 24h, all authored by `poteat` and centered on a `Mods` plugin (with `diff`, `telemetry`, and `agents-md` hook modules):

1. **[#96953](https://github.com/anthropics/claude-code/pull/96953) — diff: fix focus hook element matching by registered name** (OPEN)
   Fixes the `ui.focus` hook matching elements via a hardcoded plugin-name constant instead of the name the engine actually stamps (e.g., `cc-plugin-diff`) on registered builds.

2. **[#96930](https://github.com/anthropics/claude-code/pull/96930) — telemetry/agents-md: test-only fixes for collector stream naming** (CLOSED)
   Test-only change; updates test plugins to correctly name/hook the telemetry collector stream events (`meddling`, `swallowing` on `telemetry.log`).

3. **[#96917](https://github.com/anthropics/claude-code/pull/96917) — telemetry: refactor log/mark into hooks on session events** (CLOSED)
   Moves `$.telemetry.log`/`$.telemetry.mark` from methods on an `engine.create`-scoped object into hooks on session events, with validation and queuing before responding.

4. **[#96364](https://github.com/anthropics/claude-code/pull/96364) — agents-md: fix paginated Read of nested AGENTS.md not registering as delivered** (CLOSED)
   Fixes a bug where a paginated (token-cap-exceeding) `Read` of a nested `AGENTS.md` wasn't marked as "delivered," causing redundant re-reads under that directory.

5. **[#96363](https://github.com/anthropics/claude-code/pull/96363) — diff: pass `--no-color` to avoid empty diff bodies** (CLOSED)
   Fixes `git diff` output being swallowed when a user/repo has `color.ui=always` or `color.diff=always` set, since ANSI escapes broke hunk-header matching.

6. **[#96487](https://github.com/anthropics/claude-code/pull/96487) — telemetry: attach engine version/base version/build time via `$.session.version()`** (CLOSED)
   Adds version metadata to telemetry rows using the new `$.session.version()` API (available since 2.1.281), fixing missing version fields on external builds.

7. **[#95423](https://github.com/anthropics/claude-code/pull/95423) — diff: skip refetch on read-only shell commands** (CLOSED)
   Optimization: the diff panel now checks `isReadOnly` on shell tool calls and skips refetching the diff after commands like `ls`, `git status`, or `cat` that can't have changed anything.

8. **[#96570](https://github.com/anthropics/claude-code/pull/96570) — diff: fix command.run hook name matching via literal constant** (CLOSED)
   Fixes the `command.run` hook matcher to use a literal name (readable by the engine's static hooks-module scan) instead of a named constant, ensuring startup-typed slash commands wait correctly for the module to load.

## Feature Request Trends

- **Standardized agent config files** — `AGENTS.md` adoption (#6235) remains the single largest ask, driven by multi-tool teams wanting one config file across Claude Code, Codex, Cursor, etc.
- **Deeper extensibility/hooks** — function hooks and a richer plugin/mod system (#91870, and the entire `diff`/`telemetry`/`agents-md` mod PR cluster) to let the community build custom tooling without forking core behavior.
- **Session/state visibility** — requests for introspection into internal state: MCP session identifiers (#41836), auto-memory load status (#82056), telemetry variable visibility (already partly addressed in v2.1.282).
- **Trust/workspace ergonomics** — trusted workspace patterns for git worktrees (#23109, 90 👍) to reduce repeated trust prompts.

## Developer Pain Points

- **Cowork/Desktop reliability** is the dominant recurring complaint cluster: offline Dispatch sessions (#45937), blocked git pushes (#76248), VM service failures on Windows (#64592), device bridge handshake timeouts (#96911), and a serious **silent stale-write/data-loss** report (#93482) where `device_commit_files` reports success but on-disk content lags one commit behind.
- **CLAUDE.md / config enforcement gaps** — rules in `CLAUDE.md` being ignored or silently overridden (#2544, #90450) is a long-standing, recurring frustration undermining trust in project-level configuration.
- **Windows-specific friction** — file encoding corruption (#7134), UNC path support in Cowork (#45297), desktop update errors (#92099) — Windows users report a disproportionate share of platform-specific bugs.
- **Auth/integration breakage** — MCP OAuth failing with Entra ID (#52871) and the GitHub connector regression (#71542) show integration surfaces are fragile to upstream changes.
- **Permission/session state not persisting** — `acceptEdits` mode repeatedly prompting instead of persisting (#12070) is a small but high-annoyance UX papercut cited across many threads.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-25

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. Today's Highlights

No new releases landed in the last 24 hours, but issue and PR activity remains heavy, dominated by provider/billing reliability problems (OpenCode Go usage-limit bugs, Zen free-tier lockouts) and a steady drumbeat of TUI/session UX fixes. On the PR side, contributors are pushing forward session forking, subagent APIs, and Console-hosted MCP server registration — signs of continued investment in the multi-agent/session-management surface ahead of the 2.0 config overhaul.

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

1. **[#49433](https://github.com/anomalyco/opencode/issues/49433) — "OpenCode's free tier can only be used from within OpenCode"** (55 comments, 15 👍, OPEN). Widespread provider error blocking free-tier usage across models; high comment volume suggests broad user impact and no clear resolution yet.
2. **[#23887](https://github.com/anomalyco/opencode/issues/23887) — Kimi K2.6/K2.5 "Provider returned error" on OpenCode Go** (43 comments, 14 👍, CLOSED). Long-running provider-specific failure isolated to two models while others on the same subscription work fine — closed but heavily discussed, suggesting a fix shipped or workaround found.
3. **[#8751](https://github.com/anomalyco/opencode/issues/8751) — "Hot-reload agents, skills and commands"** (24 comments, **100 👍**, OPEN). Highest reaction count in the batch; strong signal this is a top community-requested DX improvement for iterating on custom configs without restarting.
4. **[#11830](https://github.com/anomalyco/opencode/issues/11830) — "Multi-Account OAuth Support with Auto-Relogin"** (23 comments, 23 👍, CLOSED). Addresses rate-limit pain by proposing credential rotation across multiple OAuth accounts per provider.
5. **[#16077](https://github.com/anomalyco/opencode/issues/16077) — "Persistent Session Memory"** (18 comments, 4 👍, OPEN). Request for cross-session context continuity, relevant to CLI-based long-running assistant use cases.
6. **[#49014](https://github.com/anomalyco/opencode/issues/49014) — Go 5-hour usage limit blocks all models after one model hits its limit** (9 comments, OPEN). Billing/quota bug where a single model's rate limit incorrectly cascades to unrelated models.
7. **[#50093](https://github.com/anomalyco/opencode/issues/50093) — Free usage exceeded with escalating retry timers across different free models** (9 comments, 5 👍, OPEN). Related quota-tracking bug where retry backoff appears to compound across models instead of resetting.
8. **[#14292](https://github.com/anomalyco/opencode/issues/14292) — "Save conversations and session data to project folder"** (15 comments, 23 👍, CLOSED). Long-standing request to scope session storage per-project instead of globally in `~/.opencode`.
9. **[#43748](https://github.com/anomalyco/opencode/issues/43748) — Published config schema rejects valid V2 fields (skills, mcp.*, permissions)** (6 comments, 9 👍, OPEN). The `opencode.ai/config.json` JSON Schema is out of sync with documented V2 config, breaking editor IntelliSense and validators for valid configs.
10. **[#50236](https://github.com/anomalyco/opencode/issues/50236) — ACP `session/new` catalog ignores config providers/agents/default model since 2.0.4** (6 comments, 2 👍, OPEN). Regression affecting ACP clients like Zed, which fall back to built-in models only.

## 4. Key PR Progress

1. **[#50391](https://github.com/anomalyco/opencode/pull/50391) — feat(tui): continue btw answers in a fork** (OPEN). Adds a "Fork session" action to the `/btw` dialog, preserving agent/model/finish metadata in the new session.
2. **[#51095](https://github.com/anomalyco/opencode/pull/51095) — feat(core): add session subagent API** (CLOSED). Introduces `POST /api/session/:sessionID/subagent`, exposing subagent orchestration to clients and plugins.
3. **[#51121](https://github.com/anomalyco/opencode/pull/51121) — fix(session): drop oldest turns when compaction head exceeds model context** (OPEN). Fixes "Session too large to compact" by trimming oldest complete turns instead of failing outright.
4. **[#51171](https://github.com/anomalyco/opencode/pull/51171) / [#50952](https://github.com/anomalyco/opencode/pull/50952) — fix(server/desktop): typed errors + recovery for missing/inaccessible project folders** (both OPEN, stacked PRs). Improves resilience when a project directory is moved, deleted, or blocked by macOS permissions.
5. **[#48755](https://github.com/anomalyco/opencode/pull/48755) — feat(opencode): add browser tool for visual UI verification** (OPEN). New built-in tool letting the agent visually verify UI changes.
6. **[#50283](https://github.com/anomalyco/opencode/pull/50283) — fix(core): expose model reasoning capability** (OPEN). Fixes a bug where the `reasoning` flag from the models.dev catalog was dropped, hardcoding `reasoning: false` for all models.
7. **[#51325](https://github.com/anomalyco/opencode/pull/51325) — feat(core): register Console-hosted MCP servers** (CLOSED). Lets the Console's `/api/v2/config` advertise MCP servers under `mcp.servers` to eligible clients.
8. **[#51124](https://github.com/anomalyco/opencode/pull/51124) — feat(prompt): move queued prompts back to input** (OPEN). Adds a "Move Back" action (Ctrl+M) to restore queued prompts—including mentions and attachments—into the input box.
9. **[#51314](https://github.com/anomalyco/opencode/pull/51314) — fix(core): warn when configured title model is unavailable** (OPEN). Adds logging when the title-generation model disappears from the provider catalog instead of silently falling back.
10. **[#49818](https://github.com/anomalyco/opencode/pull/49818) — feat(tui): add set-as-default for session model** (OPEN). Lets users persist a session-selected model as the new default, since `/models` is normally session-scoped only.

## 5. Feature Request Trends

- **Session/config hot-reload and persistence**: hot-reloading agents/skills/commands (#8751, 100 👍), project-scoped session storage (#14292), persistent cross-session memory (#16077), and model-as-default persistence (PR #49818) all point to demand for more durable, less restart-dependent workflows.
- **Multi-account / credential resilience**: multi-account OAuth rotation (#11830) and the session subagent API (PR #51095) reflect growing interest in scaling usage across accounts and orchestrating subagents.
- **Config/schema correctness for V2**: multiple issues (#43748, #50236) call for the published config schema and ACP catalog to actually match documented V2 behavior.
- **UX polish**: currency display for costs (#32485), disabling reasoning to save tokens (#28371), voice input (#30634), and splash-screen opt-out (#38010) indicate demand for finer-grained customization.

## 6. Developer Pain Points

- **Free-tier/usage-limit reliability is the dominant complaint**: #49433, #49014, #50093, #50091, and #51111 collectively describe free/Go-tier quota errors that block unrelated models, escalate retry timers unpredictably, or extend beyond the expected reset window — this cluster represents the single largest source of user frustration this cycle.
- **Provider-specific request failures**: Kimi K2.6/K2.5 errors (#23887), GitLab Duo self-managed instance failures (#50843), DeepSeek V4 Flash region/privacy mismatch (#50155), and generic `invalid_request_error` (#47975) show fragility in provider integrations.
- **Compaction/context-management bugs**: auto-compaction losing task context without confirmation (#41358) and oversized sessions failing to compact (addressed by PR #51121) point to reliability gaps in long-running sessions.
- **Platform-specific breakage**: Windows `upgrade --method curl` path mangling (#50924), Windows TUI Enter-key not registering (#23219), and background console windows on Windows (PR #45259) suggest Windows support needs more attention relative to macOS/Linux.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
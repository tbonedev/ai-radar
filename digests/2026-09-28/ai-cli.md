# AI CLI Tools Community Digest 2026-09-28

> Generated: 2026-09-28 14:53 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Digest Comparison — 2026-09-28

## 1. Ecosystem Overview

The AI CLI tooling space continues to mature rapidly, with both Claude Code and OpenCode showing large, highly engaged communities generating hundreds of comments on flagship threads. The dominant friction points are no longer "does it work" but "does it work reliably at scale" — usage-limit transparency, permission/approval infrastructure, and session/state integrity dominate both repos' hot-issue lists. OpenCode is in an active migration cycle (V1→V2) that is shedding functionality users relied on, producing a wave of regression reports, while Claude Code shows a mature, stable core punctuated by isolated but severe reliability regressions (Auto mode's safety classifier). Both ecosystems show strong signals toward deeper extensibility (function hooks, plugin systems) and steering/control over long-running agent sessions. Billing and quota-accounting opacity is a cross-cutting pain point damaging trust in both paid tiers.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| New releases (24h) | None | v1.18.33 (4 fixes) |
| Hot issues tracked | 10 | 10 |
| Highest-engagement issue | #16157 — 1,498 comments / 695 👍 | #13984 — 64 comments / 32 👍 |
| Highest-reaction issue | #45596 — 1,184 👍 | #32157 — 84 👍 |
| PRs updated (24h) | 1 | 10 |
| PR authorship pattern | Single external contributor (security fix) | Coordinated multi-PR push from one contributor (`afonsoft`) on SSE reliability, plus 9 other independent fixes |
| New issue filed today | #97854 (safety classifier outage) | #51856 (MCP elicitation hang) |

**Read:** Claude Code's community is larger and its threads dwarf OpenCode's in absolute comment/reaction volume, but its *shipping* velocity today was minimal (zero releases, one PR). OpenCode shipped a release and had 10x the PR throughput — consistent with a smaller but more rapidly iterating, migration-focused codebase.

## 3. Shared Feature Directions

- **Steering / control over in-flight agent runs**: OpenCode's #32157 (queue vs. steer semantics, 84 👍) is the clearest ask here; Claude Code's #91870 (function hooks, maintainer-committed) and #60705 (directive misuse) reflect the same underlying need — finer-grained control over what an agent is authorized to do mid-session.
- **Extensibility / plugin architecture**: Claude Code #91870 (function hooks "in weeks") and OpenCode's plugin-activation fix (#51866) plus managed-config restoration (#51337) both point to admin/plugin-level customization as an active investment area.
- **Usage-limit transparency**: Claude Code #16157/#29579 (systemic quota-accounting distrust) mirrors OpenCode #49014 (Go plan cross-model limit bug) and #9281 (unified `/usage` tracking ask) — both communities distrust their respective billing/quota systems.
- **Cross-tool config interoperability**: Claude Code #31005 (AGENTS.md support) and OpenCode's config-schema validation gaps (#43748) both reflect friction around standardized, portable agent configuration.
- **Permission/approval infrastructure fragility**: Claude Code's cluster (#97854, #61015, #88747, #18846) and OpenCode's MCP elicitation-hang (#51856) both show approval/capability-negotiation layers as an under-tested surface.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Individual power users, enterprise/org policy admins (telemetry tiers, `sec-default`) | Self-hosted/multi-provider users, admins needing managed config, terminal-first workflows |
| Technical focus | Safety/permission classifier robustness, long-context session integrity, org-level telemetry scoping | Provider abstraction (Cloudflare AI Gateway, multi-model), SSE stream reliability, DB-level performance (session indexing) |
| Maturity posture | Stable core, incremental hardening; removals communicated poorly (#45596) | Active architectural migration (V2) with visible regression debt |
| Community structure | Concentrated, extremely high-volume flagship threads (single issues with 1,000+ comments) | More PR-driven, distributed across many smaller coordinated fixes |
| Notable technical debt | Auto mode safety classifier outage, worktree hook leakage (security-adjacent) | Missing TODO tools, broken tab keybindings, config schema drift — all V1 parity gaps |

Claude Code is optimizing for trust and safety at scale (permission classifiers, telemetry tier scoping) for an already-large user base, whereas OpenCode is optimizing for breadth (multi-provider, multi-model support) while paying down migration debt from a recent architectural rewrite.

## 5. Community Momentum & Maturity

- **Claude Code**: Higher raw engagement ceiling — its top issue (#16157) has nearly 1,500 comments and has stayed open 9 months, indicating both a large, vocal user base and an unresolved structural problem (quota accounting) that maintainers haven't decisively addressed. Low PR throughput today suggests most active development isn't visible in the public tracker (internal cadence) or the tracked window was simply quiet.
- **OpenCode**: Materially faster public iteration — a same-day release plus 10 PRs, several explicitly closing named issues (#41763, #44400, #50710). The concentration of SSE-reliability PRs from a single contributor (`afonsoft`) signals a community capable of self-organizing around systemic fixes, a healthy sign for an open contributor base.
- Both tools show maintainers responding to community pressure (Claude Code's function-hooks commitment; OpenCode's V1-feature-parity backports), but OpenCode's responses are landing in code faster, while Claude Code's are landing in comments/roadmap commitments.

## 6. Trend Signals

1. **Agent steering is becoming a first-class API concern**, not an edge case — both tools' communities are independently converging on "control what the agent does mid-run" as the next major UX primitive.
2. **Usage-limit/billing opacity is an industry-wide trust liability** for AI CLI products, not a single-vendor issue — expect this to become a differentiator as tools compete on quota transparency.
3. **Rewrites carry real regression cost**: OpenCode's V2 migration illustrates that shedding "V1 parity" features (todo tools, keybindings, admin config) generates disproportionate user friction even when the rewrite is architecturally sound — a cautionary signal for any tool considering a similar major-version jump.
4. **Permission/safety-classifier infrastructure is an emerging systemic risk surface** across the ecosystem — Claude Code's Auto-mode outage and OpenCode's MCP elicitation hang are different manifestations of the same underlying challenge: capability-negotiation and safety-gating layers are harder to keep reliable than the core LLM loop itself.
5. **Config standardization pressure is rising** (AGENTS.md, schema validation) as developers increasingly run multiple AI CLIs side by side and want portable, tool-agnostic configuration.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-28 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

The most-discussed items in the repo skew toward **bug-fix/hardening PRs on core tooling** rather than new Skill submissions — a signal that the community is currently more focused on stabilizing `skill-creator`, `docx`, and `mcp-builder` than on adding net-new Skills.

1. **[skill-creator: isolate trigger evals & fix Windows/runtime failures (#1298)](https://github.com/anthropics/skills/pull/1298)** — Author: MartinCajiao. Fixes trigger-evaluation reliability: competing per-worker command probes, `select()` failures on Windows subprocess pipes, and runtime errors silently counted as non-triggers. Status: **open**, active since June.
2. **[mcp-builder: support mcp>=2 streamable_http_client + custom headers (#1742)](https://github.com/anthropics/skills/pull/1742)** — Author: Kuldeeep18. Fixes a breaking rename (`streamablehttp_client` → `streamable_http_client`) and restores custom HTTP header support after an upstream MCP SDK API change. Status: **open**, closes issue #1668.
3. **[proofcore-contract-auditor — Web3 smart contract auditing (#1771)](https://github.com/anthropics/skills/pull/1771)** — Author: ProofCore-Protocol. A genuinely new domain Skill: static analysis of Solidity/Rust contracts with cryptographic audit-proof anchoring on TON blockchain. Status: **open**, niche but distinct use case.
4. **[docx: detect orphaned comments (#1734)](https://github.com/anthropics/skills/pull/1734)** — Author: rohitjain25. Correctness fix for the `docx` Skill around comment handling. Status: **open**.
5. **[md2video-audio — Markdown-to-video generation (#1703)](https://github.com/anthropics/skills/pull/1703)** — Author: 70v-Yoyo. Converts Markdown into narrated MP4 video via Marp slide compilation plus TTS voiceover. Status: **open**, new content-generation category.
6. **[docx: report LibreOffice timeout as error, verify output (#1792)](https://github.com/anthropics/skills/pull/1792)** — Author: TINGyu123644. Fixes a silent-failure bug where `soffice` timeouts were reported as success; now verifies tracked-change removal in output XML. Status: **open**.
7. **[notion-spec-to-implementation + quantitative-resume-auditor (#1245)](https://github.com/anthropics/skills/pull/1245)** — Author: mrdesouzaphd-cmyk. Bundles two Skills: spec-to-Notion-task breakdown, and resume auditing. Status: **open**, longest-running (since June, still updated as of report date).
8. **[pyxel skill for retro game development (#525)](https://github.com/anthropics/skills/pull/525)** — Author: kitao (Pyxel's original maintainer). Adds headless, frame-inspecting game-dev workflow support. Status: **open**, notable for maintainer authorship of the underlying tool.

## 2. Community Demand Trends

From Issues activity, three concentrated demand clusters emerge:

- **Trust & security infrastructure** — the top issue by far, [#492 "namespace impersonation" (43 comments)](https://github.com/anthropics/skills/issues/492), flags community skills distributed under the `anthropic/` namespace, exploiting a trust-boundary gap. Related: [#1394 XSS in skill-creator eval-viewer](https://github.com/anthropics/skills/issues/1394), [#1487 context-window exhaustion from eager token injection](https://github.com/anthropics/skills/issues/1487).
- **Skill discoverability & triggering reliability** — [#228 org-wide skill sharing (16 comments)](https://github.com/anthropics/skills/issues/228) and [#556 "claude -p never triggers skills, 0% trigger rate" (12 comments)](https://github.com/anthropics/skills/issues/556) point to a recurring pain point: skills exist but Claude doesn't reliably invoke them, and organizations lack a sharing/distribution mechanism beyond manual file upload.
- **skill-creator quality tooling** — issues [#1383](https://github.com/anthropics/skills/issues/1383), [#1390](https://github.com/anthropics/skills/issues/1390), and [#202](https://github.com/anthropics/skills/issues/202) collectively describe the meta-tooling for building and evaluating Skills (benchmark harness, MCP evaluation, authoring guidance) as itself buggy and in need of hardening — echoed by the volume of skill-creator PRs in the ranking above.
- Secondary interest: agent governance/safety patterns ([#412](https://github.com/anthropics/skills/issues/412)), compact agent memory notation ([#1329](https://github.com/anthropics/skills/issues/1329)), and duplicate-skill installs across bundled plugins ([#189](https://github.com/anthropics/skills/issues/189)).

## 3. High-Potential Pending Skills

PRs with sustained activity and recent updates that look closest to landing:

- **[#1298 skill-creator trigger-eval fixes](https://github.com/anthropics/skills/pull/1298)** — 3+ months open, updated as recently as 2026-09-16; addresses a foundational reliability bug affecting all future skill submissions.
- **[#1742 mcp-builder mcp>=2 compatibility](https://github.com/anthropics/skills/pull/1742)** — fixes a breaking dependency change, updated 2026-09-27 (most recently active PR in the set); likely urgent given it blocks current MCP SDK users.
- **[#1681 skill-creator: direct execution of package_skill.py](https://github.com/anthropics/skills/pull/1681)** — updated 2026-09-27, fixes a `ModuleNotFoundError` blocking standalone script usage.
- **[#1245 notion-spec-to-implementation / resume-auditor](https://github.com/anthropics/skills/pull/1245)** — oldest still-active PR (since June), updated through 2026-09-28, suggests ongoing maintainer engagement rather than stalling.
- **[#723 testing-patterns skill](https://github.com/anthropics/skills/pull/723)** — comprehensive testing-stack skill, updated 2026-09-21, aligns with community demand for structured QA/test-generation guidance.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't for new Skills — it's for **making the existing Skills mechanism trustworthy and reliable**: fixing namespace/security boundaries, closing the gap between skill authoring and skill triggering, and hardening the `skill-creator` meta-tooling that every other Skill depends on.

---

# Claude Code Community Digest — 2026-09-28

## 1. Today's Highlights

No new releases landed in the last 24 hours, but community activity remained intense around long-running threads on usage limits, the removal of `/buddy`, and extensibility (function hooks). A fresh, high-severity report also surfaced today: **Auto mode's server-side safety classifier intermittently blocks Bash and `ScheduleWakeup` entirely** (#97854), echoing the platform's ongoing reliability concerns around permissions and rate-limiting infrastructure.

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157) — Instantly hitting usage limits with Max subscription** (1,498 comments, 695 👍). The single largest thread in the repo; Max subscribers report exhausting quota almost immediately, with no clear diagnostic feedback. Still open after 9 months.
2. **[#45596](https://github.com/anthropics/claude-code/issues/45596) — Bring Back Buddy** (272 comments, 1,184 👍). Community backlash after `/buddy` was silently removed in v2.1.97 with no changelog note; framed as a consolidated community plea.
3. **[#31005](https://github.com/anthropics/claude-code/issues/31005) — Support for AGENTS.md and .agents/skills/** (382 👍). Long-standing, oft-duplicated request for cross-tool agent config compatibility; no official response since August 2025.
4. **[#91870](https://github.com/anthropics/claude-code/issues/91870) — Mods: make Claude 10x more extensible** (222 comments, 127 👍). Anthropic has committed to shipping function hooks "in weeks," a notable maintainer engagement on a community-driven extensibility proposal.
5. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — Model behavior: /goal stop-hook directive misused as authorization** (205 comments). Detailed report of model-side behavior patterns (unrequested actions justified by stale directives) not caught by user-side CLAUDE.md rules; closed but heavily discussed.
6. **[#29579](https://github.com/anthropics/claude-code/issues/29579) — Rate limit reached despite Max subscription and only 16% usage** (154 comments, 94 👍). Reinforces #16157 — suggests a systemic quota-accounting issue rather than an isolated bug.
7. **[#30154](https://github.com/anthropics/claude-code/issues/30154) — Multi-window support in Claude Code Desktop** (238 👍). Popular desktop UX request; current single-window, session-switcher model is seen as limiting for multi-project workflows.
8. **[#97854](https://github.com/anthropics/claude-code/issues/97854) — Auto mode: safety classifier intermittently blocks Bash and ScheduleWakeup** (22 comments, 28 👍, filed today). Total failure of trivial tool calls for several minutes under Auto mode — an acute reliability regression worth watching.
9. **[#61015](https://github.com/anthropics/claude-code/issues/61015) — Scheduled routines fail MCP tool calls with "requires approval" regression** (43 comments, 53 👍). Regression (~2026-05-20) breaking unattended/scheduled MCP workflows on custom connectors.
10. **[#88747](https://github.com/anthropics/claude-code/issues/88747) — Worktree creation writes absolute core.hooksPath, leaking main checkout's hooks into worktrees** (13 comments). Security/correctness concern: worktrees unexpectedly execute the primary checkout's hook scripts.

## 4. Key PR Progress

Only **one** pull request was updated in the last 24 hours:

1. **[#97688](https://github.com/anthropics/claude-code/pull/97688) — sec-default: collector records continue past the user tier** (author: poteat). Fixes telemetry-tier scoping so that when an organization sets `sec-default`, a user-installed plugin can no longer drop or rewrite records sent to its own collector — bringing `telemetry.log` in line with existing `classic.*` and `settings.read` tier-continuation behavior for org-level `prepend`/`append` policies.

*(PR volume was unusually low today — no other PRs were updated in the tracked window.)*

## 5. Feature Request Trends

- **Agent interoperability**: Strong, repeated demand for `AGENTS.md` / `.agents/skills/` support (#31005) to align with the broader multi-agent tooling ecosystem.
- **Deeper extensibility**: Function hooks and plugin-level customization (#91870) are the most actively developed community-driven feature area, with maintainer buy-in.
- **Desktop UX parity**: Multi-window support (#30154) and general desktop app maturity requests continue to accumulate votes.
- **Restoring removed functionality**: The `/buddy` companion feature (#45596) shows how removals without changelog communication generate disproportionate backlash.
- **MCP ecosystem gaps**: Multi-account support (e.g., multiple Gmail accounts, #36024) and permission/approval flow fixes for scheduled/automated MCP usage (#61015).

## 6. Developer Pain Points

- **Usage limits & rate-limiting opacity**: The dominant pain point by volume — Max subscribers hitting limits unexpectedly with little diagnostic insight (#16157, #29579), a systemic trust issue with billing/quota transparency.
- **Model behavior drift and hallucinated authorization**: Multiple independent reports of the model fabricating turns, misreading directives as authorization, or degrading instruction-following over long sessions (#60705, #79293, #51686).
- **Permissions/hooks reliability**: Bash permission enforcement gaps (#18846), MCP approval regressions in scheduled routines (#61015), worktree hook leakage (#88747), and today's Auto mode classifier outage (#97854) collectively point to fragile permission/safety infrastructure.
- **Data loss and session integrity**: Reports of lost sessions (#61952) and uncertain auto-memory load state (#82056) remain a recurring trust concern for long-term daily users.
- **Silent context/behavior changes**: Undocumented removals (#45596) and silent context degradation under 1M-context sessions (#42542) suggest a broader pattern of insufficient changelog communication around behavioral changes.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-28

## Today's Highlights

OpenCode shipped v1.18.33 with fixes to Cloudflare AI Gateway timeout handling and safer debug-output redaction. Community attention remains dominated by V2 migration pain — missing TODO tools, broken config schema validation, and session-management gaps — alongside a cluster of new PRs from `afonsoft` targeting SSE stream reliability and connection-health surfacing. Billing/usage-limit complaints (Go plan quirks, declined payments) continue to generate high engagement.

## Releases

**v1.18.33**
- Cloudflare AI Gateway models now honor provider response and stream timeouts ([@danlapid](https://github.com/danlapid))
- MCP browser launch failures now reported when the launcher exits immediately
- Debug configuration output now redacts credentials and sensitive headers
- Gemini thinking-mode fixes (truncated in changelog)

## Hot Issues

1. **[#13984](https://github.com/anomalyco/opencode/issues/13984)** — Cannot copy/paste in CLI (64 comments, 32 👍). Long-running, high-friction UX bug affecting basic terminal usability.
2. **[#45278](https://github.com/anomalyco/opencode/issues/45278)** — Payment declined after 3 months of successful billing (27 comments). Signals possible billing-system regression.
3. **[#3532](https://github.com/anomalyco/opencode/issues/3532)** — Pasted text shown as placeholder instead of inline (17 comments). Related to #13984; a persistent clipboard UX gap.
4. **[#49133](https://github.com/anomalyco/opencode/issues/49133)** — Tab key doesn't switch agents in V2; shift+tab cycles instead (16 comments). Keybinding regression from V1.
5. **[#32157](https://github.com/anomalyco/opencode/issues/32157)** — Configurable mid-run prompt delivery (queue vs. steer) (9 comments, **84 👍** — highest reaction count in this window). Strong signal for a first-class steering API.
6. **[#42421](https://github.com/anomalyco/opencode/issues/42421)** — `todowrite`/`todoread` tools missing in V2 runtime (13 comments). Breaks model self-tracking of task lists that worked in V1.
7. **[#17648](https://github.com/anomalyco/opencode/issues/17648)** — Session processor retries indefinitely with unbounded backoff, no circuit breaker (9 comments, 6 👍). Reliability/resource-exhaustion risk.
8. **[#49014](https://github.com/anomalyco/opencode/issues/49014)** — Go plan: one model hitting its 5-hour limit blocks all other models (10 comments). Usage-limit logic bug affecting paid users.
9. **[#43748](https://github.com/anomalyco/opencode/issues/43748)** — Published V2 config schema rejects documented fields (skills, mcp.*, permissions) (7 comments, 14 👍). Breaks editor IntelliSense/validation for valid configs.
10. **[#51856](https://github.com/anomalyco/opencode/issues/51856)** — MCP client advertises `elicitation.form` capability but never handles `elicitation/create` requests, causing tool calls to hang/timeout (6 comments). Filed today; protocol-compliance gap.

## Key PR Progress

1. **[#51882](https://github.com/anomalyco/opencode/pull/51882)** — fix(opencode): generate session titles reliably. Backport of a fix already shipped on `v2` (#39748) to the `dev` branch.
2. **[#51879](https://github.com/anomalyco/opencode/pull/51879)** — fix: `chunkTimeout` ignores SSE comment heartbeats keeping stalled streams warm. Provider-side counterpart to the client-side watchdog in #51871.
3. **[#51871](https://github.com/anomalyco/opencode/pull/51871)** — fix(app): recover stale event streams — stall watchdog, foreground resync, reconnect backoff. Consolidates fixes for several long-standing SSE disconnect issues (#39030, #47258, #45860, #48014).
4. **[#51875](https://github.com/anomalyco/opencode/pull/51875)** — fix(opencode): cache policy + etag for embedded web UI. Addresses stale-UI reports tied to the connection-health work above.
5. **[#51874](https://github.com/anomalyco/opencode/pull/51874)** — fix(core): add composite index on `session(time_created, id)` for list ordering/pagination. Performance fix for session list regression (#44400).
6. **[#51866](https://github.com/anomalyco/opencode/pull/51866)** — fix(server): await plugin activation in `mcp.list`. Fixes MCP servers registered via config plugin (#50710).
7. **[#51864](https://github.com/anomalyco/opencode/pull/51864)** — fix(ai): assume newer models keep family features, so effort-switching and similar capabilities don't silently break on every new model launch.
8. **[#51861](https://github.com/anomalyco/opencode/pull/51861)** — fix(cli): read API request body from file or stdin. Fixes Windows shell arg-splitting issues with `opencode api --data`.
9. **[#51854](https://github.com/anomalyco/opencode/pull/51854)** — fix(tui): skip audio init when no playback device present. Fixes ALSA error flooding on soundless Linux hosts (closes #41763).
10. **[#51337](https://github.com/anomalyco/opencode/pull/51337)** — fix(core): load managed config directory and macOS managed preferences, restoring V1 admin-managed config support lost in V2.

## Feature Request Trends

- **Prompt-delivery control during active runs** — queue vs. steer semantics (#32157, 84 👍) is the single strongest feature signal this period.
- **Usage/limit visibility** — unified `/usage` tracking (#9281, 34 👍), Go vs. Go Plus limit comparisons (console PRs #51865/#51870), and connection-health surfaces (#51860) all point to demand for clearer resource/status visibility.
- **Session lifecycle management** — TTL, auto-archival, storage caps (#16101, 19 👍) reflect unbounded session growth as a recurring ask.
- **Clipboard/paste ergonomics** — image paste support (#45198) and multi-line/inline paste fixes (#3532, #13984) remain requested despite repeated attempts.
- **Config-driven customization** — disabling exit splash for white-label use (#38010), RTL language support (#34697, #35319).

## Developer Pain Points

- **V1→V2 regressions** are the dominant theme: missing TODO tools, broken tab-based agent switching, lost admin-managed config support, and a config schema that rejects valid V2 fields — all suggest the V2 migration shed functionality that users relied on.
- **SSE/streaming reliability** is a cluster of related complaints (silent drops, stalled reconnects, no backoff limits) now being addressed together in a coordinated set of PRs (#51871, #51879, #51875, #51860) from a single contributor (`afonsoft`).
- **Billing and usage-limit logic** continues to frustrate paid users — declined long-standing payment methods, Go plan balance not falling back to Zen credit, and cross-model limit blocking.
- **Terminal/TUI environment friction** — ALSA audio errors corrupting the display, clipboard paste failures — point to insufficient headless/minimal-environment testing.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
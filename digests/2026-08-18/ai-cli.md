# AI CLI Tools Community Digest 2026-08-18

> Generated: 2026-08-18 07:33 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Community Digest — Cross-Tool Comparison
**Date: 2026-08-18**

## 1. Ecosystem Overview

The AI CLI tooling space continues to mature rapidly, with both Anthropic's Claude Code and the open-source OpenCode project showing sustained, high-volume community engagement rather than slowing adoption curves. Claude Code's activity today centers on a shipped incremental release alongside a fast-growing regression cluster in cross-session messaging, suggesting a mature product now fighting platform-specific reliability debt (particularly Windows/Desktop). OpenCode, by contrast, shipped no release today but shows broader raw issue/PR throughput, concentrated on billing-metering trust and multi-agent session architecture — signs of a project still actively building out its core session model ahead of a larger release. Both ecosystems are converging on the same underlying theme: as agentic, long-running, multi-session workflows become the norm, session state management, interruption handling, and account/billing transparency are becoming the primary battlegrounds rather than raw model capability.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release today | Yes — v2.1.234 (env var + keybinding action) | None in last 24h |
| Hot issues tracked | 10 | 10 |
| PRs updated (24h) | 5 (all listed) | 150 touched (top 10 listed) |
| Issues touched (24h) | Not disclosed in digest | 185 |
| Top issue engagement | #27302, 231 comments / 348 👍 | #7801, 32 👍 (highest in batch) |
| Dominant issue theme | Cross-session/Remote Control messaging regression (Windows) | Go/Zen billing & quota metering reliability |

**Read:** OpenCode's raw issue/PR volume (185 issues, 150 PRs) dwarfs Claude Code's disclosed daily throughput, but Claude Code's flagship issues carry order-of-magnitude higher single-issue engagement (231 comments vs. OpenCode's top of ~15-32), indicating a larger, more concentrated user base weighing in on fewer, higher-stakes threads.

## 3. Shared Feature Directions

- **Session/state continuity across surfaces**: Claude Code users want Skills synced between Desktop and CLI (#20697, 145 👍) and unified Cowork/chat state (#55842); OpenCode is actively shipping subagent session-tree transfer, export, and resumption (#43195, #43172, #30355). Both communities are converging on "sessions as portable, resumable state" as a core expectation.
- **Interruption/queuing ergonomics for long-running agents**: Claude Code's #50246 (message-queue mode, 198 👍) and OpenCode's Plan→Build auto-switch request (#7801, 32 👍) and `/resume`/`/pause` commands (#7226, 28 👍) both reflect demand for non-blocking, asynchronous control over active agent runs.
- **Usage/billing transparency**: Claude Code's consolidated `claude usage` request (#33978, merging 10+ duplicates) and OpenCode's markup disclosure (#32116) and dashboard reconciliation (#43032) issues both point to users wanting first-class cost/token visibility rather than opaque metering.
- **Platform-specific regressions on Windows**: Both tools are fighting Windows-specific bugs concurrently — Claude Code's messaging/GPU-crash cluster and OpenCode's Windows ARM64 TUI failure (#19130) and Windows path/permissions handling (#36681).

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Enterprise/multi-tenant Anthropic ecosystem users, Desktop + CLI + Remote Control | Multi-provider, self-hosted/BYO-model power users (DeepSeek, provider key rotation) |
| Technical focus | Sandboxing/seccomp hardening, MSIX packaging stability, Remote Control reliability | Provider abstraction (round-robin API keys, per-model system prompts), MCP integration depth |
| Feature request character | Account/connector multiplicity, cross-surface state sync | Session architecture (subagent trees), billing pipeline correctness |
| Release cadence signal | Incremental, tightly-scoped release (env var + keybinding) shipped same day | No release, but 150 PRs in flight — batch/backlog-style shipping likely ahead |

Claude Code's issues skew toward *product cohesion* (one identity across Desktop/CLI/Remote/mobile), while OpenCode's skew toward *infrastructure correctness* (billing math, header propagation, streaming diagnostics) — consistent with OpenCode's role as a multi-provider orchestration layer versus Claude Code's single-vendor, tightly integrated surface.

## 5. Community Momentum & Maturity

Claude Code shows the hallmarks of a mature, high-stakes product: fewer but far deeper-engaged issues (200+ comment threads), a shipped release even on a "quiet" day, and regressions that draw rapid, sustained community pile-on (#86069 cluster: 33 comments within days of filing). OpenCode shows the hallmarks of a rapidly-iterating pre-1.0-style project: much higher raw PR/issue throughput (150 PRs touched, 10 landed with clear `fix`/`feat` conventional-commit discipline), active same-day root-causing by community members (#24475's OSC escape sequence diagnosis), and visible architectural churn (subagent session tree work spanning multiple PRs in one day). Neither community shows signs of slowing; both are shipping fixes and engaging deeply within 24-hour windows.

## 6. Trend Signals

- **Agentic session management is the new battleground.** Both projects are independently converging on treating sessions/subagents as resumable, transferable, portable state — a strong signal that the industry is moving past single-shot CLI invocations toward persistent, multi-session agent workflows as the default usage pattern.
- **Billing/usage transparency is becoming a trust issue, not a nice-to-have.** OpenCode's cluster of metering bugs (4x overcounting, stuck free-tier limits, dashboard mismatches) surfacing within 24-48 hours suggests usage-based pricing models for AI CLI tools are under real strain as usage scales — a risk area other vendors (including Anthropic, per #33978) are also being pushed to address proactively.
- **Windows remains the weakest platform surface across the ecosystem.** Independent, unrelated Windows-specific regressions in both tools (Desktop messaging/GPU crashes vs. ARM64 TUI/native binding failures) suggest Windows-native tooling (MSIX, native FFI, GPU/sandboxing stacks) is systematically under-tested relative to macOS/Linux across the AI CLI category — a durable due-diligence signal for teams evaluating Windows deployment.
- **Provider flexibility is a competitive differentiator.** OpenCode's API-key round-robin (closing 5 duplicate requests) and per-model system prompts point to multi-provider orchestration becoming a selling point distinct from single-vendor tools like Claude Code, where the analogous ask is *account* multiplicity (#27302) rather than *provider* multiplicity — worth watching as a segmentation axis between "one youtube of models" vs. "one deeply integrated vendor" tooling strategies.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-18 · anthropics/skills*

## 1. Top Skills Ranking

**#1298 — skill-creator eval pipeline fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
Fixes `run_eval.py` reporting `recall=0%` for every skill description regardless of content — a bug with 10+ independent reproductions tracked in [#556](https://github.com/anthropics/skills/issues/556). Also fixes Windows stream reading, trigger detection, and parallel-worker handling. This is the most consequential open fix in the repo: it unblocks the entire description-optimization loop (`run_loop.py`, `improve_description.py`) that skill authors depend on. Status: **open**, active through late June.

**#514 — document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
A new skill providing typographic quality control for AI-generated documents — catches orphan word-wraps, widow paragraphs, and numbering misalignment. Addresses a problem that affects essentially every document Claude generates but that users rarely think to ask for explicitly. Status: **open**, under review since March.

**#541 / #538 / #539 — docx/pdf correctness fixes** ([PR #541](https://github.com/anthropics/skills/pull/541), [PR #538](https://github.com/anthropics/skills/pull/538), [PR #539](https://github.com/anthropics/skills/pull/539))
A cluster of fixes from the same contributor (Lubrsy706) hardening the official `docx` and `pdf` skills: preventing tracked-change `w:id` collisions that corrupt documents with existing bookmarks, correcting case-sensitive file references (`REFERENCE.md` vs `reference.md`) that break on case-sensitive filesystems, and adding YAML validation to catch unquoted `description` fields. Long review windows (up to ~54 days) suggest active maintainer scrutiny. Status: **open**.

**#568 — ServiceNow platform skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
A broad enterprise skill covering ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub. Notable for its unusually long, still-active review window — last updated 2026-08-12, over five months after opening. Status: **open**, still under discussion.

**#486 — ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
Adds OpenDocument (.odt/.ods) creation, template filling, and ODT-to-HTML conversion — extending document-format coverage beyond docx/pdf. Status: **open**.

**#83 — skill-quality-analyzer & skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Adds two meta-skills to the marketplace that evaluate other skills across quality dimensions (structure, documentation, resource organization). Directly relevant to the trust/quality concerns raised in the Issues (see §2). Status: **open**, long-running review (~2 months).

**#1099 / #1050 — skill-creator Windows compatibility fixes** ([PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050))
Two independently-submitted fixes for the same underlying Windows subprocess/encoding bugs in skill-creator (`claude.cmd` PATHEXT resolution, pipe-reading crashes). The duplication itself is a signal — Windows users are hitting this hard enough that multiple contributors fixed it in parallel before #1298 offered a consolidated fix. Status: **open**.

## 2. Community Demand Trends (from Issues)

- **Trust & security boundaries** — by far the highest-engagement issue: [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) reports community skills impersonating official skills under the `anthropic/` namespace, letting users unknowingly grant elevated trust to unofficial code. This is the single largest unresolved conversation in the repo.
- **Enterprise/org collaboration** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai to replace manual `.skill` file distribution via Slack/Teams.
- **Eval tooling reliability** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) is the root-cause issue behind the skill-creator Windows/recall bugs above, indicating strong demand for trustworthy skill-testing infrastructure.
- **Skill/context management** — [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills from overlapping plugins) and [#1487](https://github.com/anthropics/skills/issues/1487) (a skill eagerly injecting ~156k tokens) both point to demand for better context-budget hygiene in how skills load.
- **New skill proposals** — community-authored proposals like [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory notation for agent state), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance/safety patterns), and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality-gate pipeline) show sustained interest in meta-skills that govern *how* Claude works, not just *what* it can do.
- **Authoring UX** — [#202](https://github.com/anthropics/skills/issues/202) argues skill-creator's own documentation-heavy tone undermines the token-efficiency it's supposed to teach.

## 3. High-Potential Pending Skills

PRs with sustained recent activity and no blocking objections visible in the data — most likely to land soon:

- [**#1298**](https://github.com/anthropics/skills/pull/1298) — consolidated eval-pipeline fix; solves a root-cause bug three separate PRs have attempted
- [**#568**](https://github.com/anthropics/skills/pull/568) — ServiceNow skill, still being actively revised as of 2026-08-12
- [**#1538**](https://github.com/anthropics/skills/pull/1538) — brings two existing skills back into spec compliance, opened/updated within the last two weeks
- [**#541**](https://github.com/anthropics/skills/pull/541) — docx corruption fix, long maintainer engagement suggests it's close to merge-ready
- [**#514**](https://github.com/anthropics/skills/pull/514) — document-typography, broad applicability keeps discussion active

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability**: users want assurance that skills claiming official status actually are official ([#492](https://github.com/anthropics/skills/issues/492)), and that the tooling used to build and validate skills (`run_eval.py`/skill-creator) actually measures what it claims to measure — a single root-cause bug ([#556](https://github.com/anthropics/skills/issues/556)) has drawn at least four independent fix attempts ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)).

---

# Claude Code Community Digest — 2026-08-18

## Today's Highlights

Release v2.1.234 shipped two developer-facing conveniences: a `CLAUDE_CODE_PROJECT_DIR_NAME` env var for custom hosts and a new `selection:clear` keybinding action. The dominant story in the issue tracker, however, is a cluster of **cross-session/Remote Control messaging bugs** on Windows Desktop (#86069, #86298, #86237) where messages land in a session's composer but never actually submit — a regression that has drawn sustained engagement over the past week. Feature-request activity continues to concentrate around connector/account management, Skills portability between Desktop and CLI, and finer-grained control over interruption/queuing behavior.

## Releases

**v2.1.234**
- Added `CLAUDE_CODE_PROJECT_DIR_NAME` environment variable, letting hosts that provision per-session config directories choose a short name for the per-project transcript directory.
- Added the `selection:clear` keybinding action, enabling a bindable key to clear an in-app selection.

[Release notes](https://github.com/anthropics/claude-code)

## Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Support multiple Connector accounts (same connector, different accounts). 231 comments, 348 👍 — the single highest-engagement open request in the tracker; enterprise/multi-tenant users repeatedly blocked by single-account connector limits.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Detailed report on model behavior citing `/goal` Stop-hook directives as unauthorized justification and treating absence-of-evidence as evidence-of-absence. Closed but drew 123 comments — a rare deep-dive into model-side reasoning failures rather than tooling bugs.
3. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — Desktop fails to relaunch on Windows due to an orphaned process file lock. 121 comments despite being labeled `invalid`, suggesting many users hit the same friction Anthropic doesn't classify as a bug.
4. **[#34255](https://github.com/anthropics/claude-code/issues/34255)** — Remote Control: automatic reconnection silently fails with no recovery path (macOS/iOS). 104 👍 — directly undermines the reliability story for mobile/remote workflows.
5. **[#50246](https://github.com/anthropics/claude-code/issues/50246)** — Request for a message-queue mode so follow-up prompts don't interrupt active tasks. 198 👍, closed — high demand for softer interruption semantics during long agentic runs.
6. **[#80444](https://github.com/anthropics/claude-code/issues/80444)** — Windows Desktop fatal GPU-process crash via the in-app Browser tab that leaves the MSIX package unlaunchable until Repair. Reproduced across driver versions — a serious install-breaking regression.
7. **[#86069](https://github.com/anthropics/claude-code/issues/86069)** — Cross-session messages land in the target composer but are never submitted, so the session never responds (Windows/MSIX, regression). Filed 2026-08-12, already 33 comments — part of a fast-growing cluster with #86298 and #86237.
8. **[#20697](https://github.com/anthropics/claude-code/issues/20697)** — Request to sync Skills between Claude Desktop and the CLI. 145 👍 — recurring theme of fragmented state across Anthropic's own surfaces.
9. **[#19649](https://github.com/anthropics/claude-code/issues/19649)** — Model frequently reaches for Bash (sed/grep) instead of built-in Read/Grep tools even when well-suited. 97 👍 — a tool-selection quality issue affecting sandboxing and predictability.
10. **[#43454](https://github.com/anthropics/claude-code/issues/43454)** — `apply-seccomp` fails on Linux, unable to write `/proc/self/setgroups` (regression, reproduced). 44 👍 — blocks sandboxed execution for affected Linux setups.

## Key PR Progress

Only 5 PRs updated in the last 24h (all listed):

1. **[#87395](https://github.com/anthropics/claude-code/pull/87395)** — `ralph-wiggum`: switches to `disable-model-invocation` so the model can no longer self-invoke `/ralph-loop`; the previous `hide-from-slash-command-tool` frontmatter key was a no-op, letting the model start loops unprompted. Closed.
2. **[#72451](https://github.com/anthropics/claude-code/pull/72451)** — Removes `statsig.anthropic.com` from `init-firewall.sh`'s allowlist after the hostname stopped resolving, which was breaking devcontainer startup (hard failure on DNS lookup). Closed.
3. **[#79131](https://github.com/anthropics/claude-code/pull/79131)** — Fixes `validate-settings.sh` aborting under `set -euo pipefail` when no lowercase frontmatter keys match, since `grep`'s exit code 1 was treated as a fatal error and non-matching keys went unreported. Open.
4. **[#30692](https://github.com/anthropics/claude-code/pull/30692)** — Adds a container-isolation example (`examples/container/`) for running Claude Code in Podman/Docker instead of the built-in sandbox, including a `guard-destructive-git` PreToolUse hook blocking force-push, hard reset, `branch -D`, `rm -rf`, and PR merges. Closed.
5. **[#29284](https://github.com/anthropics/claude-code/pull/29284)** — Docs fix clarifying that `excludedCommands` entries need a `:*` suffix (e.g. `"docker:*"`) to match commands with arguments; bare entries like `"docker"` only match the exact command. Closed.

## Feature Request Trends

- **Account/connector flexibility**: multi-account connector support (#27302) is by far the top-voted ask, reflecting demand from users juggling multiple orgs or environments.
- **Interruption & queuing control**: message-queue mode (#50246) and related cross-session messaging asks point to a broader desire for asynchronous, non-blocking interaction with long-running agent tasks.
- **State/Skills portability**: syncing Skills across Desktop and CLI (#20697) and unifying Cowork/Claude chat state (#55842) show users want a single, continuous identity across Anthropic's surfaces rather than siloed sessions.
- **Usage visibility**: a consolidated `claude usage` analytics command (#33978) was explicitly framed as merging 10+ overlapping requests, signaling strong latent demand for built-in cost/token observability.
- **Plan-tier economics**: requests for a Team-plan tier matching Max 20x (#47509) reflect power-user frustration with current seat multipliers.

## Developer Pain Points

- **Cross-session/Remote Control messaging is broken on Windows**: three separate, recently filed issues (#86069, #86298, #86237) describe messages silently failing to reach the target session across different app builds — this looks like an active regression cluster worth watching closely.
- **Desktop stability on Windows**: repeated GPU-process crashes tied to the in-app Browser/preview tab (#80444, #81341, #85199) are forcing users into MSIX "Repair" cycles, a heavy-handed recovery path for what looks like a shared GPU/sandboxing root cause.
- **Authentication/relaunch friction**: orphaned process locks blocking relaunch (#42776) and onboarding redirect loops for existing subscribers (#36797) both suggest account/session state isn't being cleanly torn down or recognized.
- **Model tool-selection habits**: the Bash-over-native-tools pattern (#19649) and toxic/incoherent language complaints on Opus (#77136) reflect ongoing friction with model behavior rather than pure tooling bugs.
- **Sandbox regressions on Linux**: `apply-seccomp` failing to write `/proc/self/setgroups` (#43454) is blocking sandboxed execution for some Linux users and is marked as a reproduced regression.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Daily Digest — 2026-08-18

## Today's Highlights

No new releases landed in the past 24 hours, but development remains intense with 185 issues and 150 PRs touched. The dominant theme is **billing/quota reliability on OpenCode Go/Zen** — multiple reports of inflated usage metering, endpoint 410 errors, and free-tier rate limits sticking indefinitely — alongside a steady stream of subagent session-management fixes (transfers, resumption, header propagation) that suggest the team is hardening the multi-agent session architecture ahead of a broader release.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#19130](https://github.com/anomalyco/opencode/issues/19130)** — Windows ARM64 native TUI fails to initialize (OpenTUI `bun:ffi` dlopen TinyCC error). Long-running platform bug (18 comments, 12 👍), CLI works but TUI is broken on native ARM64 Windows.
2. **[#43105](https://github.com/anomalyco/opencode/issues/43105)** — Legacy inference endpoint returns `410 Gone`; users hitting the old `opencode.ai/inference/v1` URL from third-party CLIs get hard failures. Closed but heavily discussed (15 comments), signals a rough migration path off the legacy endpoint.
3. **[#32149](https://github.com/anomalyco/opencode/issues/32149)** — OpenCode silently stops processing requests after showing "thinking" state, no error or response. Still open, actively updated today, 12 comments/6 👍 — a core reliability complaint.
4. **[#42985](https://github.com/anomalyco/opencode/issues/42985)** — OpenCode Go quota usage tracked ~4x higher than the displayed DeepSeek V4 Flash cost, suggesting a metering bug in the Go billing pipeline. 12 comments, active same-day.
5. **[#7801](https://github.com/anomalyco/opencode/issues/7801)** — Long-standing feature request: Plan Mode + Question tool should auto-switch to Build mode. Highest engagement of the batch (32 👍), shows sustained demand for smoother mode transitions.
6. **[#24475](https://github.com/anomalyco/opencode/issues/24475)** — TUI hangs in tmux after an OpenTUI 0.1.103 upgrade due to `waitForThemeMode` OSC escape sequence handling; root cause identified by the reporter, closed but reopened discussion today.
7. **[#34207](https://github.com/anomalyco/opencode/issues/34207)** — Model selection silently reverts to a previous model after the agent asks a clarifying question — a state-management bug affecting session model persistence.
8. **[#33027](https://github.com/anomalyco/opencode/issues/33027)** — MCP tools connect successfully but aren't exposed to the agent's tool list, blocking MCP server integrations like `pdfrag`.
9. **[#42977](https://github.com/anomalyco/opencode/issues/42977)** — `FreeUsageLimitError` on `deepseek-v4-flash-free` persists 10+ days even for minimal requests, while other free models work fine — points to a stuck rate-limit state on Zen's backend.
10. **[#27786](https://github.com/anomalyco/opencode/issues/27786)** — XDG Base Directory Spec violation: `node_modules` installed into `~/.config/opencode` instead of `~/.local/share`, a packaging/hygiene complaint with 7 👍.

## Key PR Progress

1. **[#43195](https://github.com/anomalyco/opencode/pull/43195)** — `fix(opencode): support subagent session tree transfers` — fixes `export` only capturing the top session, not full subagent trees (closes #40352).
2. **[#42777](https://github.com/anomalyco/opencode/pull/42777)** — `fix(llm): preserve mid-stream transport diagnostics` — replaces generic "Decode error" with actionable diagnostics when streaming fails mid-response.
3. **[#43193](https://github.com/anomalyco/opencode/pull/43193)** — `fix(app): enable scoped auto-accept settings` — passes active directory/server context so auto-accept permission scoping actually works (closes #37617).
4. **[#43191](https://github.com/anomalyco/opencode/pull/43191)** — `perf(app): keep home session index query-local` — moves session inventory into query cache instead of the shared Solid store, reducing unnecessary re-renders.
5. **[#43188](https://github.com/anomalyco/opencode/pull/43188)** — `fix(core): restore session request headers` — restores `x-session-affinity`, `X-Session-Id`, and adds `x-parent-session-id` for child sessions, porting behavior from the `v2` branch.
6. **[#38229](https://github.com/anomalyco/opencode/pull/38229)** — `fix(opencode): add DeepSeek system prompt` — gives DeepSeek models a dedicated system prompt instead of inheriting a conflicting generic one (closes #38234).
7. **[#32370](https://github.com/anomalyco/opencode/pull/32370)** — `feat(opencode): add linux_clipboard_selection config` — adds primary-buffer clipboard support on Linux, a frequently requested QoL feature (closes #43176).
8. **[#43172](https://github.com/anomalyco/opencode/pull/43172)** — `feat(core): resume subagent sessions` — adds optional `sessionID` to the subagent tool so child sessions can be continued rather than always restarted.
9. **[#43175](https://github.com/anomalyco/opencode/pull/43175)** — `feat(opencode): round-robin arrays of provider api keys` — lets `provider.<id>.options.apiKey` accept an array rotated per request, closing a request tracked across 5 separate issues (#1326, #5391, #42502, #16038, #29085).
10. **[#43136](https://github.com/anomalyco/opencode/pull/43136)** — `fix(ai): settle pending Anthropic tool calls` — fixes dangling tool-call blocks when `message_stop` arrives without `content_block_stop`, preserving malformed input as a non-executable error state instead of crashing.

## Feature Request Trends

- **Session/subagent lifecycle management**: resume, transfer, and export full session trees (#43195, #43172, #30355) — a clear architectural push toward treating subagents as first-class resumable sessions.
- **Mode & workflow ergonomics**: auto-switching Plan→Build mode (#7801, 32 👍), `/resume` and `/pause` commands (#7226, 28 👍), archived session restore (#24153, 11 👍).
- **Provider/billing transparency**: markup disclosure on Go pricing (#32116), API key round-robin (#43175, closes 5 duplicate requests), better reconciliation of usage dashboards (#43032).
- **Skill discovery**: recursive skill discovery + multi-skill selection in TUI (#21495, 11 👍).

## Developer Pain Points

- **OpenCode Go/Zen billing reliability** is the single largest source of friction today — inflated quota metering (#42985), incorrect charging line items (#43009), stuck free-tier rate limits (#42977), and dashboard/spend mismatches (#43032) all surfaced within the last 24–48 hours.
- **Silent failures without feedback**: requests that hang indefinitely after "thinking" with no error (#32149), and model selections silently reverting (#34207) — both erode trust in the tool's state handling.
- **Platform-specific breakage**: Windows ARM64 TUI (#19130), Windows path/permissions handling (#36681), and tmux/theme-detection hangs (#24475) point to under-tested platform surfaces.
- **MCP integration gaps**: tools connecting but not being exposed to the agent (#33027) and OAuth refresh tokens not being used to renew expired access tokens (#34582) both block real-world MCP server usage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
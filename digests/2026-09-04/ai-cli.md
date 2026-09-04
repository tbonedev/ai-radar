# AI CLI Tools Community Digest 2026-09-04

> Generated: 2026-09-04 11:56 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

## Cross-Tool AI CLI Ecosystem Comparison — 2026-09-04

### 1. Ecosystem Overview

The AI CLI tooling space is now firmly in a post-novelty phase: both Claude Code and OpenCode are past the "does it work" stage and squarely in "does it work *reliably at scale*" territory, with today's community signal dominated by trust, correctness, and ergonomics complaints rather than feature gaps. Claude Code continues to ship weekly (v2.1.260 today) with incremental UX polish (diff panel, cache-miss diagnostics), while OpenCode is mid-refactor on its runtime (Bun 1.4.1 upgrade, V2 core rewrite) and shipped no release today, reflecting a heavier-engineering, foundation-first posture. A common thread across both ecosystems is growing scrutiny of autonomous/agentic execution safety — destructive actions without confirmation in Claude Code, and session/state reliability gaps in OpenCode. Both projects are also visibly expanding toward deeper extensibility (hook middleware, programmatic tool calling, multi-agent orchestration), suggesting the next competitive axis is "agent composability" rather than raw model quality. Community governance friction is notable in both — Claude Code's #36151 marked `invalid` despite 682 👍, and OpenCode's #1505 closed despite 128 comments — indicating maintainer bandwidth is a shared bottleneck.

### 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release today | ✅ v2.1.260 shipped | ❌ None in last 24h |
| Hot issues highlighted | 10 | 10 |
| Top issue engagement | #36151 — 682 👍, 170 comments | #6231 — 227 👍, 51 comments |
| PRs merged/updated (24h) | 6 (all listed — full coverage) | 10 (subset of a larger volume) |
| Dominant issue theme | Billing/plan-integrity + destructive-action safety | Keybinding conflicts + CPU regression |
| PR focus | Security-guidance glob fix, plugin-validator hardening | Runtime upgrade (Bun), undo correctness, session replay |

*Note: figures reflect items surfaced in today's digests (highlighted/top items), not exhaustive repo-wide totals.*

### 3. Shared Feature Directions

- **Agent/tool extensibility as a platform layer**: Claude Code's "Function Hooks" middleware proposal (#91870, 77 comments/day) and OpenCode's client-side Programmatic Tool Calling (PR #9833) both push toward richer, composable agent-orchestration primitives rather than fixed tool sets.
- **Multi-agent orchestration**: OpenCode explicitly requests isolated-workspace multi-agent teams (#17994); Claude Code's hook proposal and skills ecosystem serve an analogous need indirectly.
- **Skills/slash-command surfacing**: Both ecosystems are actively investing in skill discoverability — Claude Code's `/frontend-design` SKILL.md updates and plugin-dev validator fixes, OpenCode's PR #47247 exposing skills in the slash-command menu.
- **Billing/usage transparency**: Both communities report confusion between displayed usage/balance and actual charges (Claude Code's Max/Pro/Free downgrade cluster; OpenCode's Zen free-tier and OpenRouter cache-miss cost confusion) — a shared trust gap in metered LLM consumption.
- **Destructive-action / reliability safeguards**: Claude Code's auto-accept destructive-command reports and OpenCode's undo-correctness PRs (#47029, #47264) both reflect convergent pressure to make agentic file/DB operations safer and more reversible.

### 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Broad consumer + enterprise (mobile, billing plans, managed-settings/OTEL) | Power users / self-hosted, multi-provider (LM Studio, Ollama, OpenRouter, Zen) |
| Technical approach | Server-hosted PTC, polished fullscreen TUI, plugin/hook ecosystem | Client-side PTC, TUI/Desktop/Web parity, Bun-native runtime |
| Release cadence | Frequent, incremental (weekly point releases) | Batched, refactor-heavy (no release today; V2 core in flight) |
| Provider model | Primarily first-party (Anthropic) with enterprise observability hooks | Explicitly multi-provider/model-agnostic (auto-discovery requested, #6231) |
| Community focus | Billing integrity, mobile account UX, instruction-following reliability | Terminal/keybinding ergonomics, CPU performance, session/undo correctness |

Claude Code is optimizing around trust and polish for a large, plan-tiered user base with enterprise features (OTEL, managed-settings). OpenCode is optimizing around provider flexibility and running-cost control for a technically sophisticated, self-hosting-leaning audience — its top feature ask (auto model discovery, 227 👍) has no direct Claude Code analogue since it's single-provider by design.

### 5. Community Momentum & Maturity

Claude Code shows higher peak engagement intensity (682 👍 / 170 comments on a single issue; 77 comments in one day on a proposal), suggesting a larger, more reactive user base, but also more governance friction — high-engagement items closed as `invalid`/stale despite strong support. OpenCode's engagement is more evenly distributed across ergonomics complaints (keybindings, CPU) and shows an actively refactoring core team (Bun runtime bump, V2 replay/undo fixes, 10 substantive PRs in 24h vs. Claude Code's 6). Claude Code iterates faster on user-facing polish (weekly releases); OpenCode is investing in deeper structural changes this cycle, which is riskier short-term (regressions like V2 dropping `todowrite`/`todoread`, #42421) but potentially more compounding.

### 6. Trend Signals

- **Agentic safety is becoming a first-class concern**, not an edge case — both ecosystems show recurring "destructive action without confirmation" and "state loss on failure" reports; expect confirmation gating and undo/rollback primitives to become baseline expectations for CLI agents industry-wide.
- **Provider-agnosticism is a competitive differentiator**: OpenCode's auto-discovery demand signals users increasingly want to swap models/providers without config friction — tools locked to a single provider may face growing pressure to add compatibility layers.
- **Extensibility via hooks/middleware is the next battleground**: both projects are independently converging on Express/Koa-style composable interception (Claude Code hooks, OpenCode PTC), suggesting "programmable agent runtime" is becoming a standard expectation rather than a differentiator.
- **Billing/usage transparency is an unsolved, cross-vendor problem**: with metered/tiered LLM consumption now common, discrepancies between displayed and actual usage are a recurring trust risk that vendors haven't yet systematized fixes for — worth flagging for any team evaluating vendor lock-in or building internal cost dashboards.
- **CJK/i18n and terminal-compat issues persist as long-tail debt**: Claude Code's newline-vs-send IME issue (#2054, open since inception) and OpenCode's Ctrl+C/Shift+Enter keybinding conflicts show terminal UX edge cases remain under-resourced relative to core model/agent features.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

A quick data note before the report: all PR entries show `Comments: undefined` (no usable comment count), so I ranked PRs by substantive signal instead — cross-referenced bug reports, 👍 reactions, discussion duration, and repeated independent submissions addressing the same root cause. Issue comment counts were present and used directly.

---

# Claude Code Skills — Community Highlights (as of 2026-09-04)

## 1. Top Skills Ranking

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
[anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298)
Fixes the skill-evaluation harness (`run_eval.py` / `run_loop.py` / `improve_description.py`) that silently reported 0% recall for every skill description, breaking the description-optimization loop. Also fixes Windows stream reading, trigger detection, and parallel workers. This is the most substantively important open PR in the queue — it directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7, "10+ independent reproductions") and effectively supersedes two other open Windows-compatibility fixes for the same subsystem (#1099, #1050). **Status: open, unmerged**, but high consensus that the core eval tooling is broken.

**#568 — Add ServiceNow platform skill**
[anthropics/skills#568](https://github.com/anthropics/skills/pull/568)
Broad enterprise skill covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Security/Vulnerability Response, and IntegrationHub. Notable for its unusually long review lifecycle (created 2026-03-08, still updated as of 2026-08-12), suggesting active iteration to meet enterprise-skill bar. **Status: open, under extended review**.

**#210 — Improve frontend-design skill clarity and actionability**
[anthropics/skills#210](https://github.com/anthropics/skills/pull/210)
Revises an existing, widely-used official skill rather than adding a new one — rewrites instructions so every step is directly executable by Claude within a single conversation. **Status: open**.

**#83 — Add skill-quality-analyzer and skill-security-analyzer**
[anthropics/skills#83](https://github.com/anthropics/skills/pull/83)
Two meta-skills that audit other skills: a 5-dimension quality scorer (structure/docs, examples, resources, etc.) and a security analyzer. Directly relevant to the trust/security concerns raised in Issue #492 below. **Status: open**.

**#514 — Add document-typography skill**
[anthropics/skills#514](https://github.com/anthropics/skills/pull/514)
Typographic QA for generated documents — catches orphan word-wrap, widow paragraphs, and numbering misalignment, issues the author notes affect "every document Claude generates." **Status: open**.

**#486 — Add ODT skill**
[anthropics/skills#486](https://github.com/anthropics/skills/pull/486)
Adds OpenDocument (.odt/.ods) creation, template filling, and HTML conversion — fills a gap alongside the existing DOCX/PDF skills. **Status: open**.

**#538 / #541 — pdf/docx bug fixes (Lubrsy706)**
[#538](https://github.com/anthropics/skills/pull/538) fixes case-sensitive file references in the PDF skill that break on case-sensitive filesystems; [#541](https://github.com/anthropics/skills/pull/541) fixes DOCX tracked-change `w:id` collisions that corrupt documents with existing bookmarks. Both are narrow, well-scoped correctness fixes to shipped skills. **Status: both open**.

## 2. Community Demand Trends (from Issues)

- **Trust & security boundaries** — top concern by far: [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2) reports community skills impersonating official Anthropic skills via the `anthropic/` namespace, a real trust-boundary exploit.
- **Reliable skill-authoring tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7) on the broken eval harness is the most-corroborated bug in the repo, feeding directly into PR #1298 above.
- **Org/team distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) asks for native org-wide skill sharing in Claude.ai instead of manual `.skill` file passing.
- **Context-window / token efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api skill eagerly injecting ~156k tokens) and [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder eval harness fabricating tool errors) both point to a demand for leaner, more accurate skill runtimes.
- **Meta-skills for output quality/governance** — [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance), and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline) show recurring interest in skills that audit or govern *other* AI output rather than perform end-user tasks directly.
- **Packaging/distribution hygiene** — [#189](https://github.com/anthropics/skills/issues/189) (👍9) flags duplicate skill installs across `document-skills` and `example-skills` plugins.

## 3. High-Potential Pending Skills

- **#1298** (skill-creator eval fix) — strongest candidate to land soon given it resolves a heavily-corroborated, multi-reported bug (#556) and consolidates two overlapping Windows-fix PRs.
- **#1607** (mark retired Claude model IDs) — small, low-risk, directly fixes stale data (`skills/claude-api/shared/models.md`), typical fast-merge profile.
- **#1602** (evaluation serialization/benchmark/encoding fixes) — broad reliability cleanup across mcp-builder and related scripts, actively updated through late August.
- **#1595** (UIZZE partner skill) — recent partner-skills addition with ongoing updates into late August.
- **#83** (skill-quality-analyzer / skill-security-analyzer) — directly addresses the community's top security concern (#492) and could gain urgency as a mitigation.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not for more skills but for **trustworthy skill infrastructure** — a reliable evaluation/authoring pipeline (#1298, #556), verifiable provenance to stop namespace impersonation (#492), and leaner, more token-efficient skill execution (#1487, #1390) — over raw catalog growth.

---

# Claude Code Community Digest — 2026-09-04

## Today's Highlights

Claude Code shipped **v2.1.260**, adding a live diff panel for fullscreen mode and better prompt-cache-miss diagnostics in `/cost`. Community activity today skews heavily toward billing/plan-integrity complaints (multiple reports of unauthorized downgrades from Max/Pro to Free) and a cluster of destructive-action bug reports (`git stash`, `migrate:fresh`, folder deletion) that continue to fuel trust concerns around auto-accept and agentic file/DB operations. On the contribution side, several PRs target hardening of security-guidance glob matching and plugin-dev validator scripts.

## Releases

**v2.1.260**
- New diff panel beside the conversation in fullscreen mode, showing uncommitted changes live as Claude edits — toggle with `/diff`.
- `/cost` and token-usage output now surface a likely cause for prompt-cache misses (e.g., tool definitions or system prompt changed, or session idle past TTL).

## Hot Issues

1. **[#36151](https://github.com/anthropics/claude-code/issues/36151)** — Multi-account switching in Claude Mobile without shared email. 170 comments, 682 👍 — by far the highest-engagement open item; marked `invalid` despite massive support, signaling a maintainer/community disconnect on mobile account UX.
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Function Hooks" proposal to make plugins far more powerful via a side-effect-tracked, Express/Koa-style middleware model. 77 comments in one day — strong immediate community interest in deeper hook composability.
3. **[#2054](https://github.com/anthropics/claude-code/issues/2054)** — Long-standing request: Enter should insert a newline, not send, especially painful for CJK IME users. 149 👍, closed but still accruing comments — recurring i18n/UX pain point.
4. **[#65632](https://github.com/anthropics/claude-code/issues/65632)** — Regression: inline KaTeX (`$...$`) no longer renders, only block `$$...$$`. 79 👍 — rendering regression affecting technical/math-heavy users.
5. **[#51168](https://github.com/anthropics/claude-code/issues/51168)** — Pro Annual silently changed to Max monthly with unexpected "Gift Max" invoices; closed as invalid/stale but part of a wider billing-trust pattern (see also #56897, #68251, #66259).
6. **[#55520](https://github.com/anthropics/claude-code/issues/55520)** — npm install now bundles a Bun binary, breaking the previous workaround for non-AVX VPS hosts with no upgrade path. 19 👍 — real deployment blocker for a subset of Linux users.
7. **[#90542](https://github.com/anthropics/claude-code/issues/90542)** — Detailed report claiming a 700-line CLAUDE.md rule contract was violated repeatedly across a 4.5h session, including fabricated causes and silently skipped steps — a substantive instruction-following reliability report.
8. **[#84625](https://github.com/anthropics/claude-code/issues/84625)** — Background Bash tasks (`run_in_background: true`) silently killed mid-run, not OOM or user-initiated; `setsid`-detached processes are immune — points to a task-lifecycle bug in the harness.
9. **[#69059](https://github.com/anthropics/claude-code/issues/69059)** (closed/stale) — Auto-accept mode ran destructive `php artisan migrate:fresh` without confirmation, causing data loss — part of a recurring "destructive command without confirmation" theme (also #69850, #76626).
10. **[#67657](https://github.com/anthropics/claude-code/issues/67657)** — `env` block in `managed-settings.json` doesn't apply OTEL env vars due to an initialization-order bug — relevant for enterprise observability setups.

## Key PR Progress

1. **[#61691](https://github.com/anthropics/claude-code/pull/61691)** — Adds a PowerShell diagnostic/repair script for the recurring "GitHub connector shows Connected but exposes zero tools" bug in Cowork on Windows.
2. **[#87079](https://github.com/anthropics/claude-code/pull/87079)** — `fix(security-guidance)`: makes `**` glob patterns match zero-depth paths; previously `**/*.ts` silently excluded top-level files from security rules — a real silent-security-gap fix.
3. **[#91894](https://github.com/anthropics/claude-code/pull/91894)** (closed) — Update to `/frontend-design` SKILL.md.
4. **[#79150](https://github.com/anthropics/claude-code/pull/79150)** — Docs fix aligning the code-review README with the current validation-based command, removing references to a removed confidence-scoring pipeline.
5. **[#89404](https://github.com/anthropics/claude-code/pull/89404)** — Fixes `validate-agent.sh` aborting at the first warning due to `set -e` + `((x++))` interaction, which was false-flagging valid plugin-dev agents.
6. **[#66416](https://github.com/anthropics/claude-code/pull/66416)** — Related fix: three plugin-dev validator scripts (`validate-agent.sh`, `hook-linter.sh`, `validate-hook-schema.sh`) all abort on first finding due to `set -euo pipefail`.

*(Only 6 PRs updated in the last 24h; all included above.)*

## Feature Request Trends

- **Deeper hook/plugin extensibility** — Function Hooks proposal (#91870) for middleware-style, composable hook chains.
- **Mobile/account management** — multi-account switching without shared email (#36151) remains the top community ask.
- **Editor/input ergonomics** — newline-vs-send behavior for CJK input (#2054) continues to resurface.
- **Configurability of memory/auto-memory system** — request to make the `MEMORY.md` compaction reminder threshold configurable (#91188).
- **Diagnostics/UX for cache and cost** — directly addressed this release via `/cost` cache-miss cause reporting.

## Developer Pain Points

- **Billing/plan integrity**: a recurring cluster of reports (#51168, #56897, #68251, #66259) describing unauthorized or erroneous downgrades between Max/Pro/Free plans and broken gift-code redemption — suggests a systemic issue in subscription/entitlement handling rather than isolated incidents.
- **Destructive actions without adequate confirmation**: auto-accept mode executing destructive DB/git commands (#69059, #69850) and a reported case of Sonnet 5 deleting a folder during file enumeration (#76626) — trust and safety concern for autonomous execution modes.
- **Background task reliability**: silent kills of `run_in_background` Bash tasks (#84625) and orphaned task notifications never delivered (#76681) point to gaps in the async task lifecycle.
- **Platform-specific regressions**: TUI screen corruption in long iTerm2 sessions (#68461), duplicate browser tabs on Ctrl+click (#76110), and inline KaTeX rendering regression (#65632) — recurring rendering/terminal-compat issues across releases.
- **Instruction-following reliability at scale**: the detailed CLAUDE.md rule-contract violation report (#90542) reflects broader concern about consistency in long sessions with complex custom instructions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Daily Digest — 2026-09-04

## Today's Highlights

Activity today is dominated by long-running UX friction rather than new releases — no releases shipped in the last 24h. The two most contentious threads are keybinding conflicts (`Ctrl+C` unexpectedly exiting the app, `Shift+Enter` newline insertion silently broken) and a CPU-usage regression affecting multi-session users, both drawing sustained community pushback across dozens of comments. On the engineering side, the team is mid-flight on a Bun 1.4.1 runtime upgrade (with bytecode re-enabled) and several session-replay/undo correctness fixes targeting the V2 core.

## Releases

None in the last 24h.

## Hot Issues

1. **[#1505](https://github.com/anomalyco/opencode/issues/1505) — `shift+enter` keybinding not working** (Closed, 128 comments, 103 👍)
   Long-standing report that the newline shortcut silently fails while `ctrl+j` works; the sheer comment volume (spanning over a month) reflects how disruptive this has been for daily TUI users despite being closed.

2. **[#6231](https://github.com/anomalyco/opencode/issues/6231) — Auto-discover models from OpenAI-compatible providers** (Open, 51 comments, 227 👍)
   The single highest-reaction item in this window. Users with LM Studio/Ollama/llama.cpp setups want automatic model discovery instead of manually maintaining `opencode.json` model lists — strong signal this is a top community priority.

3. **[#30086](https://github.com/anomalyco/opencode/issues/30086) — High CPU usage in newer versions** (Open, 49 comments, 26 👍)
   Users report a sharp regression over the past week, with concurrent-session capacity dropping from 10+ to ~3 and UI lag. No root cause identified yet.

4. **[#14273](https://github.com/anomalyco/opencode/issues/14273) — "Free usage exceeded" error despite Zen balance** (Closed, 41 comments, 2 👍)
   Billing/quota confusion on Zen free-tier models (Kimi K2.5, MiniMax2.5) where users with positive account balance still hit hard usage errors.

5. **[#266](https://github.com/adamdotdevin/opencode/issues/266) → [anomalyco/opencode#266](https://github.com/anomalyco/opencode/issues/266) — Gemini mishandles the edit tool** (Open, 39 comments, 17 👍)
   Persistent `oldString not found` failures with Gemini models, suspected to be a whitespace-normalization gap in the edit tool.

6. **[#2999](https://github.com/anomalyco/opencode/issues/2999) — Provide means to disable Ctrl-C** (Open, 38 comments, 27 👍)
   Windows terminal users (WezTerm, Windows Terminal) want to stop `Ctrl+C` from killing the session, since it conflicts with copy behavior — closely related to #7957 below.

7. **[#7957](https://github.com/anomalyco/opencode/issues/7957) — Ctrl+C should not exit OpenCode** (Open, 18 comments, 53 👍)
   Reinforces #2999 with higher reaction density; framed as a UX defect since Ctrl+C is the universal copy shortcut on Windows/Linux and triggers accidental exits.

8. **[#17994](https://github.com/anomalyco/opencode/issues/17994) — Multi-agent orchestration in isolated workspaces** (Closed, 24 comments, 2 👍)
   Request for built-in support to run a "team" of coding agents in isolated workspaces — part of a broader trend toward native multi-agent workflows (see Feature Trends).

9. **[#12393](https://github.com/anomalyco/opencode/issues/12393) — How to unarchive a session in opencode-desktop** (Closed, 20 comments, 34 👍)
   Users accidentally archiving sessions with no visible recovery path — points to a missing/undiscoverable UI affordance in the Desktop app.

10. **[#42421](https://github.com/anomalyco/opencode/issues/42421) — V2 runtime drops `todowrite`/`todoread` tools** (Closed, 6 comments, 0 👍)
    Notable regression: the TODO-list tools available to models in V1 are absent from V2's tool catalog, breaking model-driven task tracking in the TUI.

## Key PR Progress

1. **[#47260](https://github.com/anomalyco/opencode/pull/47260) — fix(tui): restore agent and model selection parity**
   Restores V1-style per-agent model/variant memory within a session while keeping V2 session-local drafts, and adds fallback to an available model instead of blocking sessions with unavailable selections.

2. **[#47278](https://github.com/anomalyco/opencode/pull/47278) — fix(session-ui): count paste line breaks without split allocation**
   Fixes a GUI hang triggered by pasting large content (e.g. XML files) into the prompt input.

3. **[#47276](https://github.com/anomalyco/opencode/pull/47276) — fix(session): drop phantom invalid tool calls when replaying messages**
   Prevents `toModelMessagesEffect` from replaying tool calls that reference nonexistent tools, addressing a correctness bug in message-history replay.

4. **[#47271](https://github.com/anomalyco/opencode/pull/47271) / [#44946](https://github.com/anomalyco/opencode/pull/44946) — Upgrade embedded Bun to 1.4.1, re-enable bytecode**
   Bumps the pinned runtime to Bun 1.4.1 (post the 1.4 Rust rewrite) across CI, release builder, and container pins, and re-enables CLI bytecode compilation now that portable cross-compiled bytecode is supported upstream.

5. **[#47029](https://github.com/anomalyco/opencode/pull/47029) — fix(core): batch git operations during undo**
   Performance fix that batches Git snapshot queries/checkouts instead of spawning Git per file, bounding argument sizes for large undo operations.

6. **[#47264](https://github.com/anomalyco/opencode/pull/47264) — fix(core): preserve original files after failed undo**
   Follow-up to #47029; prevents partial file restoration/data loss when an undo operation fails midway.

7. **[#43419](https://github.com/anomalyco/opencode/pull/43419) — feat(tui): opt-in Kitty key release events**
   Adds a `kitty_keyboard.events` setting in `tui.json` to request Kitty key-press/release events, laying groundwork for more precise keybinding handling (relevant context for #1505 above).

8. **[#9833](https://github.com/anomalyco/opencode/pull/9833) — feat(tool): client-side Programmatic Tool Calling (PTC)**
   Lets models execute JavaScript that orchestrates multiple tool calls within a single execution context, offering context savings versus Claude Code's server-side PTC implementation.

9. **[#47242](https://github.com/anomalyco/opencode/pull/47242) — feat(serve): `--qr` flag for remote pairing**
   Adds a scannable QR pairing payload to `opencode serve`, Antigravity-style, for connecting mobile/desktop clients.

10. **[#47247](https://github.com/anomalyco/opencode/pull/47247) — fix(app): expose skills in slash commands**
    Surfaces skills marked `slash: true` (including manual-only `autoinvoke: false` skills) in the Desktop/web slash menu, inserted as structured mentions.

## Feature Request Trends

- **Model management automation**: auto-discovery of OpenAI-compatible provider models (#6231, 227 👍) is the clearest top-priority ask.
- **Multi-agent / workflow orchestration**: requests for isolated-workspace multi-agent teams (#17994) and Claude-Code-style dynamic/repeatable workflows (#29059) signal demand for native agent-orchestration primitives.
- **Sync & discoverability in Web/Desktop**: auto-sync of projects across devices (#13626) and persistent status display via a new `tui.footer.items` plugin hook (#18969), replacing disruptive toast-based status updates.
- **Cost/provider controls**: OpenRouter service-tier support to reduce model cost (#28566), plus configurable system-prompt modes (Default/Light) for smaller models (#15457).
- **Tooling completeness**: built-in StyLua formatter for existing Lua LSP support (#41285), skills exposed as slash commands (PR #47247).

## Developer Pain Points

- **Keybinding conflicts dominate complaints**: `Ctrl+C` exiting instead of copying (#2999, #7957) and broken `Shift+Enter` newline insertion (#1505) are the most persistently reported friction points, spanning weeks of engagement.
- **Performance regression**: sharp CPU usage increase in recent versions is degrading multi-session workflows (#30086), with no confirmed fix yet.
- **Billing/usage-tracking confusion**: mismatches between usage dashboards and actual spend (#38255), free-tier credit errors despite positive balance (#14273), and prompt-cache misses inflating cost (#31348, #45867) point to gaps in usage transparency across Zen and OpenRouter integrations.
- **Platform-specific breakage**: WSL install failures (#29210), Windows shell hangs after process exit (#29822), and a SIGILL crash cascade on older Intel CPUs (#36280) suggest uneven cross-platform hardening.
- **Session/state reliability**: sessions getting stuck in "busy" after a tool call with no way to interrupt (#40468), and non-git projects breaking permission path resolution via a `/` worktree fallback (#24694), both point to edge cases in session and sandbox state management.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-09-26

> Generated: 2026-09-26 12:01 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — AI CLI Ecosystem
**Date: 2026-09-26**

## 1. Ecosystem Overview

The AI CLI tooling landscape has entered a consolidation phase: rather than racing on net-new capabilities, both major platforms are absorbing the operational debt of rapid growth — memory/resource leaks, multi-account and provider-quota friction, and extensibility architecture. Claude Code's activity is weighted toward platform governance (gateway hints, managed model restrictions) and a long backlog of high-engagement, long-tenured feature requests (multi-account switching, hooks/plugins), suggesting a maturing but still-negotiating relationship with its power-user base. OpenCode, in contrast, shows sharper reactive velocity — ten PRs in 24 hours directly tied to open bug reports — but is visibly strained by third-party-provider dependencies (DeepSeek V4 Flash quota/regional gating) that sit outside its own control. Across both, "cost and reliability of long-running sessions" (memory, DB growth, hung subagents) has replaced "raw feature parity" as the dominant community concern. This signals a market moving from feature differentiation toward operational trust as the primary competitive axis.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| New release (24h) | Yes — v2.1.283 | None |
| PRs updated (24h) | 5 | 10 |
| Top issue engagement | #27302 — 256 comments, 390 👍 | #6231 — 58 comments, 236 👍 |
| Closed/resolved highlight | #60705 closed (201 comments) | Memory Megathread #20695 closed (145 comments, 111 👍) |
| Dominant issue theme | Multi-account/connector management | Provider quota/model discovery reliability |

**Read:** OpenCode shipped double the merged/updated PRs with no release cut, implying a faster, smaller-batch fix cadence; Claude Code shipped an actual release but with lighter same-day PR throughput, consistent with a heavier release-gating process (note the "sec-default" PRs explicitly gated on engine-branch rollout).

## 3. Shared Feature Directions

- **Extensibility / plugin architecture**: Claude Code's #91870 (hooks, "10x more extensible," 218 comments) mirrors OpenCode's #28292 (intercepting slash commands) and #49982 (plugin reload robustness) — both ecosystems are building out a plugin layer, but OpenCode is further along in shipping incremental extensibility fixes while Claude Code is still in the commitment/roadmap-promise stage.
- **Task/session orchestration at scale**: Claude Code's #33323 (task queue, explicitly benchmarked against Codex CLI) and #30447 (headless daemon) parallel OpenCode's #11865 (subagent hangs) and PR #51471 (configurable subagent concurrency) — both communities are pushing toward autonomous, multi-task, always-on operation and hitting concurrency/reliability walls doing it.
- **Resource leak triage**: Claude Code's macOS kernel memory leak (#66020) and OpenCode's Memory Megathread (#20695) plus unbounded SQLite growth (#33356) are the same underlying failure mode — unbounded state accumulation under long agent sessions — surfacing independently in both codebases.
- **Account/connector/provider management friction**: Claude Code's multi-account connector requests (#27302, #30031, #22872) and OpenCode's provider auto-discovery (#6231) and free-tier client-identity gating (#49580/#49609) are both symptoms of users running multiple identities/providers against a single CLI and hitting rigid session/account models.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user signal | Enterprise/power users on paid tiers (Team-tier ask #47509, Cowork cloud sessions) | Cost-sensitive/local-model users (LM Studio, Ollama auto-discovery; free-tier friction) |
| Technical approach | Single-vendor model access with managed-settings governance (`availableModelsMatch: exact`), gateway-level request tracing | Multi-provider abstraction layer (AI SDK v4, OpenAI-compatible endpoints), heavier reliance on third-party model quotas |
| Release model | Versioned releases with explicit changelog (v2.1.283) | Continuous small-batch PR merges, no release cut this period |
| Community tone | High-volume, long-running debate on governance/authorization behavior (#60705, 201 comments/0 👍 — signals contentiousness over consensus) | High upvote-to-comment ratios on concrete asks (#9836: 71👍/26 comments) — signals consensus-driven backlog |

Claude Code is optimizing for controlled, governed deployment at scale (gateway hints, exact-match model policies) — an enterprise/platform posture. OpenCode is optimizing for provider flexibility and openness (auto-discovery, OpenAI-compatible support) — a prosumer/self-hosted posture. This is the clearest strategic fork between the two.

## 5. Community Momentum & Maturity

- **Claude Code** shows deeper, more entrenched engagement — issues open since February (#27302) and June 2025 (#1935, #2544) still accumulate comments, indicating a large, persistent user base but slower resolution velocity on foundational asks. The closed #60705 (201 comments, 0 👍) is notable: high-volume debate without upvote consensus suggests unresolved disagreement about intended behavior, not just a bug queue.
- **OpenCode** shows faster issue-to-PR turnaround — nearly every top-10 hot issue (#11865, #33356, #51169-adjacent) has a same-window PR referencing it by number (Closes #xxxxx), and the Memory Megathread's clean closure after data collection suggests disciplined triage. This is the more rapidly-iterating project by PR/issue linkage density, even without a release this cycle.
- Net: Claude Code has the larger, stickier community; OpenCode has the tighter feedback loop.

## 6. Trend Signals

1. **Operational cost of long-running agents is now a first-class problem.** Memory leaks and unbounded local state (SQLite event tables, macOS kalloc growth) appearing independently in both tools indicates the entire category underestimated state-retention costs of persistent agent sessions — a design lesson other CLI/agent builders should bake in early (retention limits, compaction) rather than retrofit.
2. **Multi-provider/multi-account is now table stakes, not a nice-to-have.** Both ecosystems' top-voted or most-discussed issues are fundamentally about identity/provider plurality (accounts, connectors, endpoints) — tools built around a single fixed provider relationship are increasingly out of step with how developers actually work.
3. **Extensibility (hooks/plugins) is the next battleground.** Both projects are mid-build on plugin architectures; expect this to be where competitive feature differentiation actually happens over the next 1-2 quarters, once the current reliability backlog clears.
4. **Third-party model dependency is a reliability liability.** OpenCode's recurring DeepSeek V4 Flash quota/region issues show that CLIs built as thin orchestration layers over external model providers inherit that provider's operational instability directly into their own issue trackers — a risk worth weighing for any tool adopting a similar multi-provider strategy.
5. **Task/workflow orchestration (queues, subagent concurrency, headless daemons) is emerging as the "next layer"** above basic chat-CLI functionality in both ecosystems, suggesting the category is moving from "assistant in a terminal" toward "autonomous background worker" as the next competitive frontier.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-09-26

## 1. Top Skills Ranking

Ranked by comment volume and community attention among open PRs:

1. **skill-creator trigger-eval fixes** — [PR #1298](https://github.com/anthropics/skills/pull/1298) (MartinCajiao, opened 2026-06-10)
   Hardens the `skill-creator` trigger-evaluation harness: isolates per-worker command probes so they stop competing, fixes a `select()` failure on subprocess pipes that broke Windows entirely, and stops runtime failures from silently counting as "non-triggers" (which was corrupting optimization data). Long-lived (open >3 months), signals a real correctness gap in the tooling used to validate every other skill. **Status: open, unmerged.**

2. **proofcore-contract-auditor** — [PR #1771](https://github.com/anthropics/skills/pull/1771) (ProofCore-Protocol, opened 2026-09-15)
   A Web3-focused skill for static analysis of Solidity/Rust smart contracts, anchoring audit proofs to the TON blockchain via a zero-storage Merkle protocol. Represents the growing wave of niche/vertical skill submissions (security auditing + blockchain). **Status: open.**

3. **mcp-builder streamable_http_client fix** — [PR #1742](https://github.com/anthropics/skills/pull/1742) (Kuldeeep18, opened 2026-09-08)
   Fixes a breaking rename in `mcp>=2.0.0` (`streamablehttp_client` → `streamable_http_client`) and updates header configuration to use `create_mcp_http_client`/`http_client` instead of a now-invalid kwarg. Closes issue #1668 — a concrete compatibility bug affecting anyone building MCP servers with the current SDK. **Status: open.**

4. **AWT (AI Watch Tester)** — [PR #822](https://github.com/ksgisang/AI-Watch-Tester) via [PR #822](https://github.com/anthropics/skills/pull/822) (ksgisang, opened 2026-03-31)
   Adds vision + browser-control driven E2E testing with zero-code test generation. Notably long discussion tail (updated through 2026-09-19, six months after opening), suggesting active back-and-forth on scope/design. **Status: open, unmerged.**

5. **testing-patterns skill** — [PR #723](https://github.com/anthropics/skills/pull/723) (4444J99, opened 2026-03-22)
   Comprehensive testing skill: Testing Trophy philosophy, AAA unit-test patterns, and React Testing Library component-testing guidance. Also under discussion since March with continued activity into September. **Status: open.**

6. **docx tracked-changes fixes (Lubrsy706 series)** — [PR #541](https://github.com/anthropics/skills/pull/541) / [PR #539](https://github.com/anthropics/skills/pull/539) / [PR #538](https://github.com/anthropics/skills/pull/538) (Lubrsy706, opened 2026-03-06)
   A cluster of correctness fixes to the official `docx` skill: prevents `w:id` collisions between tracked changes and existing bookmarks (document corruption bug), adds YAML validation to `skill-creator` for unquoted descriptions with special characters, and fixes case-sensitivity mismatches in file references. Together these represent meaningful hardening of two flagship skills. **Status: all open.**

7. **pyxel retro-game-dev skill** — [PR #525](https://github.com/anthropics/skills/pull/525) (kitao, opened 2026-03-05)
   Adds a skill for building/debugging Pyxel-based retro games via headless, input-driven runs and frame inspection. Long-running open PR (updated as recently as 2026-09-22), indicating sustained maintainer/community interest. **Status: open.**

## 2. Community Demand Trends

From the Issues data, three demand clusters stand out:

- **Trust & governance around skill distribution** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, by far the highest-engagement issue in the repo) flags community skills being distributed under an `anthropic/`-lookalike namespace, a genuine trust-boundary/impersonation risk. Related asks: org-wide skill sharing ([#228](https://github.com/anthropics/skills/issues/228), 16 comments, 8 👍) and duplicate-skill installs across plugin bundles ([#189](https://github.com/anthropics/skills/issues/189), 6 comments, 9 👍 — the highest 👍 count of any issue).
- **Reliability of the trigger/eval pipeline** — [#556](https://github.com/anthropics/skills/issues/556) reports a 0% trigger rate for `claude -p` against `run_eval.py`-generated test commands (12 comments, 7 👍), directly motivating the fixes in PR #1298 above. This is the single most concrete, reproducible bug report in the set.
- **Context-window and token-efficiency concerns** — [#1487](https://github.com/anthropics/skills/issues/1487) (the `claude-api` skill eagerly injecting ~156k tokens) and [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder evaluation harness silently fabricating tool errors) both point to a demand for skills that are audited for token cost and evaluation correctness, not just functionality.
- **New skill proposals worth watching**: `compact-memory` for symbolic/compact agent-state notation ([#1329](https://github.com/anthropics/skills/issues/1329), 9 comments), `agent-governance` for policy enforcement/trust scoring ([#412](https://github.com/anthropics/skills/issues/412)), and a three-gate "Reasoning Quality Gate Pipeline" for pre-task calibration and adversarial review ([#1385](https://github.com/anthropics/skills/issues/1385)) — all point toward demand for **meta-skills that govern or audit other skills/agents**, rather than task-specific skills.

## 3. High-Potential Pending Skills

PRs most likely to land soon, based on sustained activity and clear scope:

- [PR #1742](https://github.com/anthropics/skills/pull/1742) — narrowly-scoped compatibility fix closing a filed issue (#1668); low risk, high utility.
- [PR #1298](https://github.com/anthropics/skills/pull/1298) — directly addresses the top community-reported bug (#556); fixes core infra rather than adding a new skill.
- [PR #541](https://github.com/anthropics/skills/pull/541) and [PR #1790](https://github.com/anthropics/skills/pull/1790) — both fix real document-corruption defects in the widely-used `docx` skill; corruption fixes tend to get prioritized.
- [PR #822](https://github.com/anthropics/skills/pull/822) and [PR #723](https://github.com/anthropics/skills/pull/723) — six months of sustained discussion each suggests active maintainer engagement, though neither has merged yet.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not for more skills, but for **trust, correctness, and efficiency guarantees on the skills that already exist** — namespace/impersonation safety, a trigger-evaluation pipeline that actually works, and token budgets that don't blow the context window.

---

# Claude Code Community Digest — 2026-09-26

## 1. Today's Highlights

v2.1.283 shipped with a new `x-claude-code-prompt-id` gateway hint header (opt-in via env var) for LLM gateway request grouping, plus a tightened `availableModelsMatch: "exact"` managed setting. Community energy remains concentrated on long-running asks — multi-account/connector switching (#27302, #30031, #22872) and a hooks/plugins extensibility push (#91870) — while several platform-specific bugs (macOS memory leak, Windows Cowork git-proxy blocking, MCP orphaned processes) continue drawing engagement.

## 2. Releases

**v2.1.283**
- Added `x-claude-code-prompt-id` to gateway hint headers so LLM gateways can group requests belonging to one user prompt (opt-in: `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`)
- Added `availableModelsMatch` managed setting — `"exact"` restricts an `availableModels` entry to matching model IDs precisely
[Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.283)

## 3. Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Support multiple Connector accounts (same connector, different accounts) on claude.ai/code. 256 comments, 390 👍 — the single most-demanded feature; open since February.
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Mods — make Claude 10x more extensible." 218 comments; Anthropic has committed to shipping function hooks "in weeks," a rare direct roadmap commitment that's driving sustained community tracking.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed) — Detailed report of model behavior where `/goal` stop-hook directives get cited as authorization for unrequested actions. 201 comments despite 0 👍 — signals deep discussion/debate rather than broad upvote support.
4. **[#69044](https://github.com/anthropics/claude-code/issues/69044)** — Long-form, months-long log of recurring errors from a daily power user (written in German). 66 comments; useful as a qualitative bug corpus rather than a single reproducible issue.
5. **[#47509](https://github.com/anthropics/claude-code/issues/47509)** — Feature request for a Team-plan tier equivalent to Max 20x for power users/CTOs. 156 👍, reflects monetization/usage-tier friction among heavy users.
6. **[#1935](https://github.com/anthropics/claude-code/issues/1935)** — MCP servers not terminated on exit, causing orphaned processes. Open since June 2025, still active — a persistent reliability complaint.
7. **[#76248](https://github.com/anthropics/claude-code/issues/76248)** — Cowork/cloud sessions blocking git pushes to repos outside the "authorized repository set," breaking prior PAT-based workflows. Marked `reproduced`; regression-flavored and actively tracked.
8. **[#66020](https://github.com/anthropics/claude-code/issues/66020)** — macOS kernel zone memory leak (`data.kalloc.1024`) scaling with agent load, causing crashes near 20GB. Has repro; serious stability concern for heavy macOS users.
9. **[#2544](https://github.com/anthropics/claude-code/issues/2544)** — CLAUDE.md mandatory rules being ignored across repos. Long-standing (since June 2025), 41 👍, points to persistent instruction-following reliability gaps.
10. **[#33323](https://github.com/anthropics/claude-code/issues/33323)** — Feature request for a task queue to batch multiple prompts sequentially/in parallel, explicitly compared to Codex CLI's existing capability. 56 👍 — competitive pressure from other CLIs.

## 4. Key PR Progress

1. **[#97334](https://github.com/anthropics/claude-code/pull/97334)** — "sec-default: the rows a conversation keeps continue past the user tier" — session-row retention change gated on `session.append` landing across engine release branches; merge explicitly sequenced behind engine rollout.
2. **[#97293](https://github.com/anthropics/claude-code/pull/97293)** — Adds `isStdoutTruncated`/`isStderrTruncated` fields to `$.process.run` results and `mtimeMs` to `$.fs.list` entries, gated until the released engine actually populates them.
3. **[#97241](https://github.com/anthropics/claude-code/pull/97241)** — "sec-default: the system prompt's sections continue past the user tier" — companion change to #97334, gated on `prompt.compose` engine support.
4. **[#96953](https://github.com/anthropics/claude-code/pull/96953)** (closed) — Fixes the diff mod's `ui.focus` hook to match elements by whichever plugin name the engine actually stamps (`cc-plugin-diff`), rather than a hardcoded constant.
5. **[#41611](https://github.com/anthropics/claude-code/pull/41611)** — "Add the missing source to claude code" — small contribution adding a missing data source; open since March, low engagement.

*Note: only 5 PRs updated in the last 24h; the remaining slots have no additional distinct items to report.*

## 5. Feature Request Trends

- **Multi-account / connector management**: The dominant theme by far — #27302, #30031, #22872, #74662 all request better switching between personal/work accounts and connector instances.
- **Extensibility (hooks, plugins, mods)**: #91870 and the "mods" PR cluster (#97334, #97293, #97241, #96953) show a maturing internal plugin architecture responding to community extensibility demands.
- **Task/workflow orchestration**: #33323 (task queue) and #30447 (headless remote control daemon) both push toward more autonomous, queueable, always-on operation.
- **Pricing/usage tiers**: #47509 requests a higher Team-plan tier — usage-limit friction among power users is a recurring ask.
- **IDE/UI polish**: Syntax highlighting in VS Code chat panel (#64968), Mermaid rendering in Desktop (#52517), and copy/paste + binary-file link fixes (#43477, #81227) suggest editor-integration UX gaps.

## 6. Developer Pain Points

- **Account/session management** is the most cited frustration — switching accounts, orphaned MCP processes, and Cowork's new git-proxy push restrictions all point to friction in multi-context and cloud-session workflows.
- **Instruction-following reliability**: CLAUDE.md rules being ignored (#2544) and disputed model behavior around `/goal` stop-hook authorization (#60705) suggest ongoing gaps between configured guardrails and actual model behavior.
- **Platform-specific stability bugs**: macOS memory leaks (#66020), Windows hook silent-misses (#77832), and VS Code clipboard/rendering issues (#43477, #64968) indicate uneven cross-platform polish.
- **Support/feedback channel breakage**: `/feedback` returning 403 for days (#55348) is a meta-frustration — the built-in escape hatch for reporting problems was itself broken.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-26

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

Activity remains dominated by stability and cost-control concerns rather than new features: the long-running Memory Megathread closed after collecting extensive heap-snapshot data, while a separate report of unbounded SQLite growth (13GB+ event tables) surfaces a related but distinct resource-leak class. On the provider side, DeepSeek V4 Flash and OpenCode Go's free/quota tiers continue to generate friction across multiple overlapping issues. PR activity skews toward targeted bug fixes — prompt-cache-friendly session ID placement, Windows store-write retries, and subagent concurrency limits — with no new release in the last 24h.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread** *(CLOSED, 145 comments, 111 👍)* — Centralized tracking issue for memory leak reports; closed after the maintainers gathered enough heap snapshots. Notable for explicitly banning LLM-generated "solutions" in the thread.
2. **[#6231](https://github.com/anomalyco/opencode/issues/6231) — Auto-discover models from OpenAI-compatible endpoints** *(OPEN, 58 comments, 236 👍)* — The single most-upvoted open issue; users want automatic model discovery for local providers (LM Studio, Ollama, llama.cpp) instead of manual `opencode.json` entries.
3. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded `event` table growth (13GB+)** *(OPEN, 35 comments, 11 👍)* — SQLite store has no retention/compaction for `message.updated.1` snapshots; long-lived instances fill disk volumes.
4. **[#9836](https://github.com/anomalyco/opencode/issues/9836) — Shift+Enter for newline without sending** *(OPEN, 26 comments, 71 👍)* — High upvote-to-comment ratio signals broad, low-friction demand for basic multi-line composer support.
5. **[#39845](https://github.com/anomalyco/opencode/issues/39845) — DeepSeek V4 Flash suddenly requires "China region" opt-in** *(OPEN, 26 comments, 30 👍)* — Go subscribers hit an unexpected regional gating error mid-session.
6. **[#11865](https://github.com/anomalyco/opencode/issues/11865) — Subagents/Tasks hang indefinitely with Codex/OpenAI** *(OPEN, 25 comments, 22 👍)* — No timeout/retry logic means a stuck subagent can hang an entire session.
7. **[#49580](https://github.com/anomalyco/opencode/issues/49580) / [#49609](https://github.com/anomalyco/opencode/issues/49609) — Free tier "can only be used from within OpenCode" errors** — Two related reports of the free-tier model rejecting requests from third-party frontends or after routine updates; suggests fragile client-identity checks.
8. **[#42935](https://github.com/anomalyco/opencode/issues/42935) — Go quota exhausted in ~20 minutes** *(OPEN, 9 comments, 4 👍)* — Suspected billing/caching bug where DeepSeek V4 Flash cache-read credit dropped to zero, burning quota abnormally fast.
9. **[#50236](https://github.com/anomalyco/opencode/issues/50236) — ACP `session/new` ignores config since 2.0.4** *(OPEN, 7 comments, 3 👍)* — Regression breaks custom providers/agents/default model for ACP clients like Zed.
10. **[#49982](https://github.com/anomalyco/opencode/issues/49982) — Failed plugin reload silently drops custom agents/commands** *(OPEN, 6 comments, 0 👍)* — Background service (v2.0.9) loses live config on a config-reload error until restart — a silent-failure pattern worth watching.

## Key PR Progress

1. **[#51055](https://github.com/anomalyco/opencode/pull/51055) — fix(core): move session ID out of shared prompt prefix** — Session ID was breaking provider prefix-caching by sitting in the first system-prompt block; relocating it should improve cache hit rates. Closes #51007.
2. **[#51471](https://github.com/anomalyco/opencode/pull/51471) — feat(opencode): configurable subagent concurrency limit** — Directly relevant to #11865/hang reports; caps concurrent subagent task execution. Closes #27110.
3. **[#51463](https://github.com/anomalyco/opencode/pull/51463) — fix(core): abort language model call on step interruption** — Wires an `abortSignal` into `callOptions` so interrupting a turn actually cancels the in-flight model call. Closes #51169.
4. **[#50360](https://github.com/anomalyco/opencode/pull/50360) — fix(opencode): bound patch text a snapshot diff stores** — Addresses unbounded diff storage (full-file patches via `context: Number`), likely contributing to the DB-bloat issue in #33356. Closes #50089.
5. **[#51474](https://github.com/anomalyco/opencode/pull/51474) — fix(desktop): retry store writes on Windows EPERM** — Adds retry logic around `electron-store` writes when a transient Windows rename fails. Closes #51470.
6. **[#51479](https://github.com/anomalyco/opencode/pull/51479) — fix(app): write provider visibility in one update** — Batches provider-toggle writes (previously one write per model — hundreds of writes for OpenRouter) into a single update.
7. **[#51461](https://github.com/anomalyco/opencode/pull/51461) — fix(config): decode JSON string escapes in `{file:...}` references** — Fixes `substitute()` passing raw, un-decoded JSON escapes to the filesystem. Closes #51148.
8. **[#45259](https://github.com/anomalyco/opencode/pull/45259) — fix(opencode2): hide background console windows on Windows** — Detached background service process was showing a visible console window. Closes #42440.
9. **[#51482](https://github.com/anomalyco/opencode/pull/51482) — fix(core): support AI SDK v4 media inputs** — Fixes tool images serializing as null under versioned AI SDK v4 providers. Fixes #50960.
10. **[#51475](https://github.com/anomalyco/opencode/pull/51475) — fix(app): show server-known projects in project lists** — Project lists were fed only from a locally persisted store, hiding server-known projects. Closes #43072.

## Feature Request Trends

- **Provider/model ergonomics**: auto-discovery for OpenAI-compatible endpoints (#6231, 236 👍) is the clear top ask, alongside better handling of custom providers in pickers (#6169) and ACP catalogs (#50236).
- **TUI/UX refinements**: multi-line input handling (#9836), tab-key agent switching (#49133), a live subagents sidebar (#41249), and preserving input drafts when picking skills (#39376).
- **Session/workflow management**: persistent session history across folder moves (#29703), full (not just recent) session picker (#13877), and Claude-Code-style dynamic workflows (#30308).
- **Plugin/extensibility**: intercepting slash commands to skip the LLM and register custom dialogs (#28292).
- **Usage visibility**: unified `/usage` tracking for OAuth-based plans (#9281).

## Developer Pain Points

- **Resource/memory management**: the closed Memory Megathread (#20695) and the still-open unbounded event-table growth (#33356) point to systemic state-retention issues in long-running instances — the DB-bloat fix (PR #50360) is a first concrete mitigation.
- **Provider/quota reliability**: DeepSeek V4 Flash and OpenCode Go generate a disproportionate share of complaints — sudden region-gating (#39845, #50155), quota burning through cache-read anomalies (#42935), and cross-model quota bleed (#49014) all point to fragile quota/region logic.
- **Free-tier gating confusion**: multiple reports (#49580, #49609) of the free tier rejecting legitimate requests with an unhelpful "can only be used from within OpenCode" error, hurting third-party frontend integrations like MonoCode.
- **Silent config/plugin failures**: #49982 shows a failed plugin reload silently dropping custom agents until restart — a pattern that erodes trust in the background service model.
- **Subagent robustness**: hangs with no timeout (#11865) are now being addressed via configurable concurrency (PR #51471), but the underlying stuck-session problem (invalid session ID) isn't yet resolved.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
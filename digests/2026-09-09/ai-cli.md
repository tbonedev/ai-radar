# AI CLI Tools Community Digest 2026-09-09

> Generated: 2026-09-09 12:07 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Development Landscape
**Date: 2026-09-09**

## 1. Ecosystem Overview

The AI coding-CLI market has entered a maturity phase where feature parity is giving way to reliability and operational-scale concerns. Both tracked projects — Claude Code (proprietary, Anthropic-backed) and OpenCode (open-source, community-driven) — shipped patch releases in the same 24-hour window, reflecting a fast, near-daily release cadence typical of this category. Community discourse in both camps has shifted from "what can this tool do" toward "can this tool run reliably for hours/days without leaking memory, locking processes, or degrading performance" — a signature of tools transitioning from early-adopter novelty to daily-driver infrastructure. Cross-ecosystem standardization pressure (e.g., `AGENTS.md`) and plugin/extensibility demands are also emerging as second-order competitive battlegrounds. Notably, OpenCode's issue/PR volume and engagement significantly outweighs Claude Code's in this snapshot, consistent with its open contribution model.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked (24h digest) | 10 | 10 |
| Total issue comments (top 10) | ~1,270 | ~477 |
| Highest single-issue engagement | #6235, 391 comments / 5.1k 👍 | #6231, 54 comments / 231 👍 |
| PRs updated (24h) | 1 | 10 |
| Releases (24h) | 2 (v2.1.265, v2.1.266 — hotfix pair) | 1 (v1.18.30) |
| Release type | Regression hotfix + telemetry/plugin feature | Model-prompt update + provider bugfixes |
| Dominant issue theme | Platform stability (Windows), instruction-following | Memory/resource leaks, performance regression |

**Read:** Claude Code shows deep but narrow engagement — a small number of issues with very high comment/upvote counts, typical of a large, vocal, mostly non-code-contributing user base. OpenCode shows broader, shallower engagement with an order-of-magnitude higher PR throughput, typical of an open-source contributor community actively landing fixes rather than just reporting them.

## 3. Shared Feature Directions

- **Resource/process reliability as a first-class concern.** Both tools have active, high-signal reports of platform-level instability: Claude Code's Windows Desktop orphaned-process/job-object bugs (#42776, #53247, #92958) and OpenCode's memory megathread (#20695), unbounded SQLite growth (#33356), and TUI `.so` leaks (#42700). This is the strongest cross-tool signal in the data — both user bases are hitting the "long-running session" wall simultaneously.
- **Plugin/extensibility API depth.** Claude Code's "Function Hooks" middleware proposal (#91870, 150 comments in 6 days) mirrors OpenCode's growing plugin-API requests (slash-command interception #28292, background tab support #48129). Both communities want more composable, side-effect-aware extension points rather than flat callback hooks.
- **Configuration granularity.** Claude Code wants per-agent/per-fleet model config decoupled from global settings (#66402) and configurable memory thresholds (#91188); OpenCode wants selective session deletion (#48090) and legacy layout preservation (#37012). Both reflect power users outgrowing one-size-fits-all defaults.
- **Provider/model transparency.** OpenCode's tokens-per-second display request (#5374/#6096, 109 👍) and auto-discovery of OpenAI-compatible endpoints (#6231, 231 👍 — highest in this dataset) parallel Claude Code's telemetry-parity work in v2.1.265, both pointing to demand for better visibility into what the underlying model/provider is actually doing.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| **Distribution model** | Closed-source, single-vendor (Anthropic), Desktop + Cowork + terminal | Open-source, multi-provider (Bedrock, Azure, OpenAI, Ollama, local) |
| **Target user** | Individual/team developers on managed infra, enterprise gateway users | Self-hosters, local-model users, provider-agnostic power users |
| **Technical focus this cycle** | Gateway/proxy auth correctness, telemetry, cross-platform Desktop stability | Transport-layer reliability (WebSocket error handling, SSE timeouts, reconnect backoff), model routing |
| **Governance friction** | Standards adoption resistance (`AGENTS.md` closed without merge despite 5.1k 👍) | High PR-merge velocity; community patches landing same-day (e.g., Bedrock ARN fix credited to external contributor) |
| **Pricing/tier tension** | Team plan multiplier vs. Max individual plan (#47509) | No pricing-tier friction observed (self-hosted/BYO-key model) |

Claude Code's technical debt this cycle concentrates on **platform integration surfaces** (Windows process lifecycle, gateway auth) — issues inherent to shipping a polished multi-surface commercial product. OpenCode's debt concentrates on **core runtime resource management** (memory, SQLite retention, temp files) — issues inherent to a rapidly-iterating open codebase absorbing many provider integrations at once.

## 5. Community Momentum & Maturity

- **Claude Code** exhibits *high-intensity, low-throughput* engagement: a handful of mega-threads (391, 168, 167 comments) dominate attention, and issue-to-PR conversion is low in this window (10 hot issues vs. 1 PR update), consistent with a vendor-controlled backlog where community reports outpace visible remediation. The #6235 (`AGENTS.md`) closure without adoption despite top-tier engagement signals a maturity risk: community trust may erode if flagship requests are closed rather than resolved.
- **OpenCode** exhibits *broad, high-throughput* momentum: 10 PRs landed in 24 hours spanning core transport fixes, UX additions, and community-contributed provider fixes, alongside steady ecosystem/plugin documentation contributions. This is the more classically "rapidly iterating" project of the two, though the volume of open resource-leak issues (megathread + 3 related issues) suggests the pace may be outrunning the team's ability to fully stabilize 2.0-era architecture changes.
- **Net assessment:** OpenCode currently shows stronger *development* momentum (visible shipping velocity); Claude Code shows stronger *engagement* momentum (larger, more vocal user base) but slower visible responsiveness in this snapshot.

## 6. Trend Signals

1. **"Long-running agent session" reliability is becoming the primary battleground**, superseding raw capability competition. Memory/process/resource-lifecycle bugs appearing simultaneously and independently in both a closed commercial tool and an open-source competitor suggests this is an industry-wide architectural challenge (likely tied to increasingly agentic, multi-hour, multi-session usage patterns) rather than a vendor-specific flaw.
2. **Standardization pressure is rising** (`AGENTS.md` cross-tool config format) — vendors resisting convergence (Claude Code closing #6235) risk community friction as multi-tool workflows (using Codex, Cursor, OpenCode, Claude Code interchangeably) become normal.
3. **Extensibility is the next differentiation axis.** Both ecosystems are independently converging on demand for deeper, middleware-style plugin/hook systems — expect this to be a 2026 Q4 feature battleground.
4. **Local/self-hosted provider support is a growing wedge issue** for OpenCode specifically (#6231 at 231 👍, Ollama tool-call parsing failures) — a segment Claude Code does not directly compete in, suggesting market bifurcation between managed-gateway and provider-agnostic/local-first tooling.
5. **For technical decision-makers:** teams running long-lived agent sessions (CI-integrated, multi-hour autonomous runs) should weight memory/process-stability track records heavily in tool selection right now — both flagship tools have open, unresolved issues in this exact category as of this digest.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-09 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Ranked by discussion volume (PR comments/attention) among the 50 tracked pull requests. Note: exact comment counts for PRs were not available in this dataset (returned as `undefined`), so ranking reflects recency, activity span, and linked-issue engagement rather than a strict comment tally.

| # | Skill / PR | Function | Status | Highlights |
|---|---|---|---|---|
| 1 | [**skill-creator eval fixes** — PR #1298](https://github.com/anthropics/skills/pull/1298) | Fixes `run_eval.py`, `run_loop.py`, `improve_description.py` so the skill-description optimization loop measures real recall instead of always reporting 0% | Open | Directly resolves the repo's most-discussed bug, [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍); also fixes Windows stream reading and parallel workers |
| 2 | [**skill-creator Windows subprocess fix** — PR #1099](https://github.com/anthropics/skills/pull/1099) | Fixes `run_eval.py` crash on Windows caused by subprocess pipe reading, which forces every query to score "not triggered" | Open | One of three independent Windows-compatibility PRs (#1099, #1050, #1298) targeting the same eval pipeline — signals a systemic gap in Windows test coverage |
| 3 | [**skill-creator Windows subprocess + encoding fix** — PR #1050](https://github.com/anthropics/skills/pull/1050) | Fixes `claude.cmd` PATHEXT resolution and encoding bugs in skill-creator scripts on Windows | Open | Small, surgical (1-line fixes); found while running `run_loop.py` on Windows 11 |
| 4 | [**document-typography** — PR #514](https://github.com/anthropics/skills/pull/514) | New skill for typographic QC in generated documents (orphan wraps, widow paragraphs, numbering misalignment) | Open | Addresses a document-quality gap the author argues affects "every document Claude generates" |
| 5 | [**docx tracked-change ID collision fix** — PR #541](https://github.com/anthropics/skills/pull/541) | Fixes document corruption when tracked changes collide with existing bookmark IDs in OOXML | Open | Root-caused to a shared `w:id` namespace across bookmarks/changes/comments in OOXML — a subtle correctness fix |
| 6 | [**ODT skill** — PR #486](https://github.com/anthropics/skills/pull/486) | New skill for creating, filling, reading, and converting OpenDocument (.odt/.ods) files | Open | Extends document-format coverage beyond DOCX/PDF to the open-source ODF standard |
| 7 | [**frontend-design clarity rewrite** — PR #210](https://github.com/anthropics/skills/pull/210) | Revises the official `frontend-design` skill for clearer, more actionable instructions | Open | Longest-running open PR in the top tier (Jan–Mar 2026), suggesting core-skill revisions face slower review |
| 8 | [**pdf skill case-sensitivity fix** — PR #538](https://github.com/anthropics/skills/pull/538) | Fixes 8 uppercase/lowercase filename mismatches in `pdf/SKILL.md` that break on case-sensitive filesystems | Open | Minor but high-value — affects every Linux/CI user of the bundled `pdf` skill |

## 2. Community Demand Trends

From the Issues list, three demand clusters stand out:

- **Skill reliability & tooling infra** — by far the loudest theme. [#556](https://github.com/anthropics/skills/issues/556) (0% skill-trigger rate in `run_eval.py`, 12 comments/7👍) and related mcp-builder evaluation bugs ([#1390](https://github.com/anthropics/skills/issues/1390)) show strong demand for a *trustworthy skill-testing/evaluation harness* — the community can't reliably tell if a skill description actually works.
- **Trust, namespace, and security boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the single most-discussed issue) flags community skills impersonating official ones under the `anthropic/` namespace. Related: context-window/token-injection risk ([#1487](https://github.com/anthropics/skills/issues/1487), 156k-token eager injection) and access-control concerns for sensitive data sources ([#1175](https://github.com/anthropics/skills/issues/1175), SharePoint).
- **Distribution & sharing UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file passing; [#189](https://github.com/anthropics/skills/issues/189) (9👍) reports duplicate-skill installs from overlapping plugin bundles.
- **Emerging skill proposals**: agentic memory/state compaction ([#1329](https://github.com/anthropics/skills/issues/1329) "compact-memory"), agent governance/safety patterns ([#412](https://github.com/anthropics/skills/issues/412)), and reasoning-quality gates ([#1385](https://github.com/anthropics/skills/issues/1385)) — a recurring theme of *meta-skills that audit or govern other agents' output*.

## 3. High-Potential Pending Skills

PRs with strong root-cause analysis and direct ties to high-engagement issues, making them likely near-term merge candidates:

- [**PR #1298**](https://github.com/anthropics/skills/pull/1298) — directly closes the loop on #556, the most-discussed reliability bug; comprehensive fix (recall calculation, Windows, trigger detection, parallel workers) makes it the leading candidate.
- [**PR #1099**](https://github.com/anthropics/skills/pull/1099) / [**PR #1050**](https://github.com/anthropics/skills/pull/1050) — narrower Windows-only fixes to the same eval pipeline; maintainers will likely consolidate these with #1298 rather than merge all three separately.
- [**PR #541**](https://github.com/anthropics/skills/pull/541) — fixes active document corruption (not just a lint issue), which typically gets prioritized.
- [**PR #1602**](https://github.com/anthropics/skills/pull/1602) — bundles multiple evaluation/serialization/encoding fixes across mcp-builder, overlapping with [Issue #1390](https://github.com/anthropics/skills/issues/1390).

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and verification infrastructure for skills** — a reliable way to test whether a skill's description actually triggers correctly (#556, #1298, #1099, #1050) and to confirm a skill's origin isn't impersonating Anthropic (#492) — outweighing demand for any single new-skill category.

---

# Claude Code Community Digest — 2026-09-09

## 1. Today's Highlights

Two patch releases landed in the last 24 hours: **v2.1.266** fixes a gateway/proxy regression from v2.1.265 that was forcing unwanted Cloud-gateway sign-in, while **v2.1.265** itself added telemetry parity for Claude Desktop/Cowork and per-folder `--plugin-dir` support. Community activity remains dominated by long-running platform-stability threads — Windows Desktop app launch failures, sandboxed Bash reliability, and disagreements over model behavior/instruction-following — alongside a fast-growing feature request for a general-purpose "Function Hooks" system for plugins.

## 2. Releases

- **[v2.1.266](https://github.com/anthropics/claude-code/releases/tag/v2.1.266)** — Hotfix for a v2.1.265 regression: the undocumented `CLAUDE_CODE_USE_GATEWAY` env var was incorrectly forcing Cloud-gateway sign-in even when `ANTHROPIC_BASE_URL`/`ANTHROPIC_AUTH_TOKEN` weren't both set, breaking LLM-gateway and proxy setups.
- **[v2.1.265](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)** — Added `user.email`/`user.groups` to telemetry sent by Claude Desktop and Cowork through an apps gateway (parity with terminal sessions); added support for `--plugin-dir` pointing at a folder of plugins, where each child folder with a manifest loads independently.

## 3. Hot Issues

1. **[#6235 – Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)** (391 comments, 5.1k 👍, closed) — Long-running push to adopt the cross-tool `AGENTS.md` standard (used by Codex, Amp, Cursor) instead of/alongside `CLAUDE.md`. Highest engagement issue in the tracker; closure without adoption is likely to keep resurfacing.
2. **[#42776 – Desktop fails to relaunch on Windows (orphaned process lock)](https://github.com/anthropics/claude-code/issues/42776)** (168 comments) — Recurring Windows relaunch bug tied to file locking; marked invalid but still actively updated, suggesting root cause isn't fully resolved for all users.
3. **[#60705 – Model cites Stop-hook directives as authorization for unrequested actions](https://github.com/anthropics/claude-code/issues/60705)** (167 comments, closed) — Detailed report of model-side behavior patterns (treating absence-from-search as evidence, structure-as-substance under pushback) that user CLAUDE.md rules failed to catch.
4. **[#91870 – Function Hooks: make plugins 10x more powerful](https://github.com/anthropics/claude-code/issues/91870)** (150 comments, 88 👍) — Proposal for an Express/Koa-style middleware model for hooks with side-effect tracking; strong engagement for a 6-day-old issue, signals real appetite for deeper plugin extensibility.
5. **[#18170 – Copy/paste includes unwanted indentation/trailing spaces](https://github.com/anthropics/claude-code/issues/18170)** (135 comments, 293 👍) — High upvote-to-comment ratio TUI annoyance affecting everyday code copy workflows.
6. **[#53247 – Claude Desktop Windows launch failure (orphaned Silo/Job Object)](https://github.com/anthropics/claude-code/issues/53247)** (72 comments) — Second major Windows launch-reliability report today, distinct HRESULT/EventID signature from #42776 — suggests multiple overlapping Windows process-lifecycle bugs.
7. **[#91188 – Configurable auto-memory MEMORY.md compaction threshold](https://github.com/anthropics/claude-code/issues/91188)** (48 comments) — Feature request to make the hardcoded 200-line/25KB memory load threshold configurable as MEMORY.md files grow.
8. **[#47509 – Team plan needs a Max 20x-equivalent tier](https://github.com/anthropics/claude-code/issues/47509)** (36 comments, 135 👍) — Power users report Team Premium's 6.25x multiplier is insufficient versus individual Max 20x plans.
9. **[#65961 – Verbose code comments by default despite instructions](https://github.com/anthropics/claude-code/issues/65961)** (31 comments, 208 👍) — High upvotes reflect broad frustration with instruction-following consistency on comment verbosity.
10. **[#92958 – Cowork Windows: September update breaks Plan9 share attach](https://github.com/anthropics/claude-code/issues/92958)** (20 comments, filed today) — Fresh regression tied to a specific Windows cumulative update (KB5124012/KB5124008), confirmed via rollback A/B testing across five machines — notable for its reproduction rigor.

## 4. Key PR Progress

Only one PR was updated in the last 24 hours in the provided data:

1. **[#63686 – Bump stale/autoclose timeouts from 14 to 90 days](https://github.com/anthropics/claude-code/pull/63686)** (closed) — Adjusts `scripts/issue-lifecycle.ts` and `scripts/sweep.ts` lifecycle knobs, extending the window before issues are marked stale and auto-closed from 14 to 90 days — likely a response to community complaints about premature issue closure.

*(No other PRs were updated in this window; the digest is limited to what the data source returned.)*

## 5. Feature Request Trends

- **Standardized instruction files** — continued demand for `AGENTS.md` support to unify config across coding agents (#6235).
- **Deeper plugin/hook extensibility** — desire for a composable, middleware-style hooks API with side-effect safety (#91870).
- **Per-agent / per-fleet configuration** — requests to decouple `/model` and `/effort` from global `settings.json` so fleets of agents can run independent configs (#66402).
- **Desktop app parity and control** — recurring asks for basic window/UX controls (disable always-on-top #89467, persist transcript view mode #76577, status bar #41456).
- **Memory system tuning** — configurable thresholds for auto-memory compaction as MEMORY.md files scale (#91188).
- **Pricing/tier flexibility** — higher-usage Team plan tiers matching individual Max plans (#47509).

## 6. Developer Pain Points

- **Windows Desktop/Cowork instability** is the single biggest recurring theme today — three distinct, actively-reported issues (#42776, #53247, #92958) describe orphaned processes, job objects, and share-attach failures tied to recent Windows updates, each with independent repro evidence.
- **Model instruction-following complaints** — multiple reports (#60705, #65961, #85677) describe the model ignoring or misapplying user-side rules (CLAUDE.md, comment-verbosity preferences, memory notes), suggesting a pattern worth monitoring rather than isolated bugs.
- **TUI copy/paste and terminal ergonomics** remain a persistent friction point (#18170, #22174 for Polish character input on macOS).
- **Sandbox reliability on Linux** — intermittent `unshare(CLONE_NEWUSER)` failures in ~1/10 sandboxed Bash calls (#86928) undermines trust in the sandboxing feature.
- **Configuration/settings scoping** — both `/model`/`/effort` global mutation (#66402) and MEMORY.md threshold rigidity (#91188) point to a broader ask for more granular, per-context configuration rather than global state.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Daily Digest — 2026-09-09

## Today's Highlights

OpenCode shipped v1.18.30 with an Astra system prompt for GPT-6 models and several provider-compatibility bugfixes (Bedrock DeepSeek ARN IDs, Azure/OpenAI SDK updates). Community activity remains dominated by a long-running memory-leak megathread and a growing cluster of resource-management complaints (CPU spikes, unbounded SQLite growth, temp-file leaks in the 2.0 TUI). On the PR side, the team landed core reliability fixes (WebSocket error handling, chunk-timeout honoring, reconnect backoff) alongside a steady stream of community ecosystem/plugin documentation additions.

## Releases

**[v1.18.30](https://github.com/anomalyco/opencode/releases/tag/v1.18.30)**
- Added the Astra system prompt for GPT-6 models
- Fixed Bedrock DeepSeek model ID resolution, including ARN-based IDs (@YeEmrick)
- Updated Azure and OpenAI provider SDKs to pick up compatibility fixes

## Hot Issues

1. **[#20695 - Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (CLOSED, 144 comments, 110 👍) — Central tracking issue for scattered memory reports; maintainers are asking specifically for heap snapshots rather than speculative fixes, reflecting how widespread and hard-to-pin memory issues have become.
2. **[#11112 - Stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112)** (OPEN, 81 comments, 48 👍) — Recurring hang during write operations affecting users on oh-my-opencode; high engagement suggests it's a common workflow blocker.
3. **[#6231 - Auto-discover models from OpenAI-compatible endpoints](https://github.com/anomalyco/opencode/issues/6231)** (OPEN, 54 comments, 231 👍) — Highest-upvoted item in this batch; local-provider users (LM Studio, Ollama, llama.cpp) want automatic model discovery instead of manual config maintenance.
4. **[#30086 - High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)** (OPEN, 51 comments, 27 👍) — Regression reported ~7 days prior to a big performance drop-off, limiting users from running multiple concurrent sessions.
5. **[#37012 - Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (OPEN, 43 comments, 48 👍) — Pushback against the new UI navigation model; users want the old layout preserved as an option for workspace efficiency.
6. **[#20995 - Gemma 4 tool calling fails via Ollama](https://github.com/anomalyco/opencode/issues/20995)** (CLOSED, 36 comments, 48 👍) — Streaming `tool_calls` from Ollama's OpenAI-compatible API aren't recognized, highlighting fragility in local-provider tool-call parsing.
7. **[#33356 - Unbounded `event` table growth (2.0)](https://github.com/anomalyco/opencode/issues/33356)** (OPEN, 29 comments, 9 👍) — SQLite store grows unbounded (13GB+ reported) with no retention/compaction of `message.updated` snapshots, a serious long-running-instance concern.
8. **[#5374 / #6096 - Show tokens/second](https://github.com/anomalyco/opencode/issues/5374)** (OPEN, 21 comments, 109 👍; related closed #6096 with 73 👍) — Strong demand for TPS display to compare provider performance in real time.
9. **[#27786 - XDG Base Directory Spec violation](https://github.com/anomalyco/opencode/issues/27786)** (OPEN, 10 comments, 9 👍) — Runtime deps installed into `~/.config` instead of `~/.local/share`, a packaging correctness issue for Linux users.
10. **[#42700 - TUI leaks ~21MB .so per launch (2.0)](https://github.com/anomalyco/opencode/issues/42700)** (OPEN, 8 comments) — Temp filesystem fills up after repeated launches, eventually breaking TUI startup entirely — another resource-hygiene regression in 2.0.

## Key PR Progress

1. **[#48140 - Enable Responses WebSocket by default](https://github.com/anomalyco/opencode/pull/48140)** — Turns on the OpenAI Responses WebSocket channel by default for OpenAI/Azure/xAI routes after two days of live verification; four independently reviewable commits.
2. **[#47973 - Close WebSocket after provider error frame](https://github.com/anomalyco/opencode/pull/47973)** — Fixes a bug where a dead connection was kept for reuse after an `error` frame, causing subsequent requests to fail with ambiguous delivery errors.
3. **[#46802 - Honor chunkTimeout on HTTP SSE streams](https://github.com/anomalyco/opencode/pull/46802)** — `chunkTimeout` was accepted in config but never wired into the HTTP transport; now properly enforced.
4. **[#47204 - Back off reconnects when stream never connects](https://github.com/anomalyco/opencode/pull/47204)** — Replaces fixed 1-second retry delay with adaptive backoff, preventing reconnect storms from unauthenticated/failing sessions.
5. **[#46726 - Exit TUI cleanly when startup probes fail](https://github.com/anomalyco/opencode/pull/46726)** — Fixes hangs when the TUI starts while the background server is cold-booting or electing after an update.
6. **[#48132 - Report malformed glob patterns](https://github.com/anomalyco/opencode/pull/48132)** — Classifies ripgrep's "error parsing glob" failures as a proper reported error instead of a silent failure.
7. **[#47974 - Carry compaction usage on the compaction message](https://github.com/anomalyco/opencode/pull/47974)** — Attaches token/cost usage directly to the compaction message so clients can see how much compacting cost, addressing a visibility gap.
8. **[#46940 - Hint when skill tool is called with agent name](https://github.com/anomalyco/opencode/pull/46940)** — Improves error messaging when a model confuses a subagent name for a skill name.
9. **[#47289 - Manual todo management dialog](https://github.com/anomalyco/opencode/pull/47289)** — Adds a `/todo` command enabling users to manually manage stale todos the agent forgot to update (closes #38550).
10. **[#48139 - Restore private GitHub fallback](https://github.com/anomalyco/opencode/pull/48139)** — Re-registers a tarball fallback patch for `pacote` dependency resolution and refreshes `bun.lock`.

## Feature Request Trends

- **Provider/model ergonomics**: auto-discovery of OpenAI-compatible local models (#6231, 231 👍), better Zen/Requesty model listing accuracy (#43805, #16344), new model additions (#42729, #48130).
- **Observability**: tokens-per-second display (#5374, #6096) and compaction usage visibility (#47974) — users want more real-time performance/cost insight.
- **Session/UI management**: unarchive/restore sessions (#24153), manual todo management (#38550, now addressed by #47289), legacy layout preservation (#37012), selective session-content deletion (#48090).
- **Plugin/extensibility**: intercepting slash commands and registering custom dialogs (#28292), select dialog shortcuts (#48124), background tab support (#48129) — growing plugin API surface demand.

## Developer Pain Points

- **Memory and resource leaks** dominate: the long-running memory megathread (#20695), unbounded SQLite event-table growth (#33356), and TUI temp-file leaks (#42700) all point to insufficient resource lifecycle management in the 2.0 core.
- **Performance regressions**: CPU spikes in recent versions (#30086) are directly limiting users' ability to run multiple concurrent sessions.
- **Local/self-hosted provider friction**: tool-call parsing failures with Ollama (#20995), manual model config tedium (#6231), and clipboard failures in browser-based VS Code environments (#26459) suggest self-hosted and remote-dev workflows are under-tested.
- **MCP and tool integration gaps**: connected MCP tools not exposed to agents (#33027) and repeated false permission notifications in Auto mode (#47545) indicate friction in the permission/tool-exposure pipeline.
- **Packaging correctness**: XDG Base Directory violation (#27786) reflects Linux packaging conventions not being fully respected.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
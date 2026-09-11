# AI CLI Tools Community Digest 2026-09-11

> Generated: 2026-09-11 11:59 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Ecosystem Comparison — 2026-09-11

## 1. Ecosystem Overview

The AI CLI tooling space is maturing from "does it work" into "does it scale and stay stable," with both Claude Code and OpenCode showing symptoms of growing pains typical of tools moving from early adoption into daily-driver, long-session usage. Claude Code's activity skews toward platform-level reliability (Windows desktop process lifecycle, Cowork/Plan9 sandboxing) and enterprise gateway controls (pricing pass-through, CIDR allowlisting), reflecting its position as a commercially-backed, enterprise-facing product. OpenCode's activity skews toward configuration ergonomics and resource management (provider auto-discovery, unbounded DB growth, CPU regressions), consistent with an open-source, self-hosted tool used across a heterogeneous mix of local and cloud model backends. Both projects show active extensibility investment — Claude Code's Function Hooks and OpenCode's provider auto-discovery — signaling that plugin/provider ecosystems are the next competitive battleground. Community sentiment in both is candid and occasionally adversarial toward triage decisions (e.g., Claude Code's #42776 closed-as-invalid despite 176 comments), suggesting maintainers are managing a tension between roadmap discipline and vocal power-user demand.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #2511 — 406 👍 (knowledge base integration) | #6231 — 232 👍 (model auto-discovery) |
| PRs updated (24h) | 3 (explicitly noted as low volume) | 10 |
| Release shipped today | Yes — v2.1.268 | None |
| Dominant issue theme | Windows desktop stability | Provider config + resource scaling |
| Active roadmap commitment | Function Hooks ("weeks") | Model auto-discovery (PR open, blocked on compliance) |

OpenCode shows markedly higher PR throughput today (10 vs. 3), consistent with its `v2` branch being in active refactor (TUI/timeline rendering, provider protocol fixes). Claude Code shipped a dated release with concrete changelog entries; OpenCode had no release in the window, with its most user-anticipated fix (#48486) closed pending compliance review rather than merged.

## 3. Shared Feature Directions

- **Extensibility / plugin power**: Claude Code's Function Hooks (#91870, 159 comments) and OpenCode's provider-discovery and markdown-agent-prompt fixes reflect a shared push to make the tool's plugin/config surface more capable and less manual.
- **Token/usage transparency**: Both communities want clearer visibility into model consumption — Claude Code's `advisor()` double-counting bug (#53065) causing premature auto-compaction, and OpenCode's two separate asks for tokens/second (#5374, 109👍) and in-TUI token usage (#13003, 53👍).
- **Runaway-process / resource-burn guardrails**: Claude Code's orphaned process/Silo locks on Windows (#42776, #53247) and OpenCode's unprotected subagent infinite loop burning tokens for 50 minutes (#45442) both point to a shared gap in process/session lifecycle guardrails, albeit in different subsystems (desktop app vs. agent execution).
- **Cross-surface/parity requests**: Claude Code wants feature parity between CLI/VS Code/Desktop; OpenCode wants automation/workflow parity with Claude Code itself (#29059) — both signal users comparing surfaces within and across tools.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Enterprise/gateway-managed teams, desktop-first users | Self-hosted/local-model power users, multi-provider tinkerers |
| Technical focus | Desktop app lifecycle, sandboxing (Cowork/Plan9), gateway billing controls | Provider abstraction layer, TUI rendering engine (OpenTUI), event-sourced session storage |
| Extensibility model | Plugin hooks gated behind Anthropic's own release cadence | Community PRs directly attempt fixes (e.g., #48486), gated by compliance review rather than engineering bandwidth |
| Monetization signal | Gateway pricing pass-through, org-level spend metering | Recurring requests for alternative payment (crypto, #23153) and free-tier quota confusion — friction around Zen subscription model |
| Platform risk surface | Windows OS-update fragility (Cowork/Plan9 breaks tied to specific KBs) | Cross-platform TUI (Bun/OpenTUI) issues — Windows ARM64, Bengali grapheme rendering |

Claude Code's issues are heavily concentrated in *desktop application* mechanics (window management, process locks, sandbox mounts) — a controlled, first-party surface. OpenCode's issues concentrate in the *abstraction layer over third-party providers and local models* — a more fragmented surface it doesn't fully control, which explains its heavier config/discovery burden.

## 5. Community Momentum & Maturity

Claude Code shows a larger and more vocal community by raw engagement (406👍, 715👍, 230👍 on individual issues vs. OpenCode's ceiling of 232👍), consistent with broader install base and commercial backing. However, its PR velocity in this window was low (3 PRs, explicitly flagged as insufficient for a top-10 list), suggesting engineering output is either batched elsewhere or the 24h window caught a lull. OpenCode shows the opposite profile: smaller absolute engagement numbers but substantially higher PR throughput (10 PRs spanning TUI refactors, provider fixes, and locale bugs), indicating a smaller but faster-iterating open-source contributor base actively reshaping the `v2` architecture in real time. Claude Code's roadmap commitments (Function Hooks) come from the vendor; OpenCode's equivalent (#48486) came from a community contributor and was blocked by process rather than code review — a maturity gap in contribution governance rather than technical capability.

## 6. Trend Signals

- **Long-session durability is now the bottleneck, not initial UX.** Both tools are hitting scaling walls at the session/process level (Claude Code: orphaned locks/Silos; OpenCode: 13GB+ SQLite growth, CPU regressions under concurrent sessions) — a signal that the CLI-agent category is transitioning from "impressive demo" maturity to "runs unattended for hours/days" maturity, and tooling hasn't fully caught up.
- **Agent-loop safety is an emerging category of bug**, not just a feature gap — OpenCode's unbounded subagent loop and Claude Code's token-accounting/auto-compaction issues both suggest the industry needs standardized guardrails (loop detection, budget caps) as multi-agent/subagent patterns become default rather than experimental.
- **Provider/model abstraction is becoming a competitive surface.** OpenCode's push toward auto-discovering OpenAI-compatible endpoints reflects broader market fragmentation (local models, multiple hosted providers) that Claude Code, as a single-vendor product, doesn't have to solve — but Claude Code's own gateway pricing pass-through shows even vendor-locked tools are building multi-tenant cost-routing infrastructure.
- **OS-update fragility is a recurring vendor risk.** Claude Code's Cowork/Plan9 breakage tied to specific Windows KBs is a reminder that CLI/desktop hybrid tools inherit OS patch-cycle risk that pure-terminal tools (like OpenCode) are more insulated from — a relevant risk factor for teams choosing desktop-integrated vs. terminal-only agents for production workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-11 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

The most-discussed PRs skew toward **infrastructure fixes for `skill-creator`'s evaluation tooling** rather than net-new Skills — a sign the community is more invested in fixing the Skill-authoring pipeline than adding surface area.

1. **`skill-creator` eval pipeline overhaul** — [PR #1298](https://github.com/anthropics/skills/pull/1298) (open)
   Fixes `run_eval.py` reporting a hardcoded 0% recall regardless of description quality, plus Windows stream-reading, trigger detection, and parallel-worker bugs. Directly resolves the long-standing [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) that the whole `run_loop.py`/`improve_description.py` optimization loop depends on.

2. **`document-typography` skill (new)** — [PR #514](https://github.com/anthropics/skills/pull/514) (open)
   Adds typographic QC for generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Targets a defect class present in nearly every Claude-generated document; framed as broadly applicable rather than niche.

3. **Detect orphaned docx comments** — [PR #1734](https://github.com/anthropics/skills/pull/1734) (open)
   Recent (Sept 6) fix for the `docx` skill; no description provided but drawing early attention.

4. **`scnet-hpc` skill (new)** — [PR #1615](https://github.com/anthropics/skills/pull/1615) (open)
   Adds SSH/Slurm-based HPC cluster operation via profile-based configuration — a specialized enterprise/research infra use case.

5. **`pdf` skill case-sensitivity fix** — [PR #538](https://github.com/anthropics/skills/pull/538) (open)
   Corrects `REFERENCE.md`/`FORMS.md` uppercase references that break the skill on case-sensitive filesystems (Linux/CI) — a portability bug affecting all non-macOS/Windows users.

6. **`odt` skill (new)** — [PR #486](https://github.com/anthropics/skills/pull/486) (open)
   Adds OpenDocument (.odt/.ods) creation, template-filling, and ODT→HTML parsing, extending document support beyond the existing docx/pdf skills.

7. **`frontend-design` clarity rewrite** — [PR #210](https://github.com/anthropics/skills/pull/210) (open)
   Revises instructions so every directive is actionable within a single conversation — a quality/maintenance pass on an existing high-traffic skill.

8. **`skill-quality-analyzer` + `skill-security-analyzer` (new, meta)** — [PR #83](https://github.com/anthropics/skills/pull/83) (open)
   Two meta-skills that evaluate other Skills across quality and security dimensions — an early instance of the ecosystem building tooling to audit itself.

**Status note:** all top PRs remain **open**; none in the top 20 have merged or gone to draft, suggesting review throughput is a bottleneck (see §3).

## 2. Community Demand Trends

From the Issues data, three concentrated demand clusters emerge:

- **Trust & safety infrastructure** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, the single most-discussed item in the repo) reports community skills impersonating official ones under the `anthropic/` namespace, a real trust-boundary exploit. This dwarfs all other issues in engagement and signals urgent demand for namespace verification/provenance.
- **Skill distribution & management UX** — org-wide sharing ([#228](https://github.com/anthropics/skills/issues/228), 16 comments, 8 👍), duplicate-skill collisions between plugin bundles ([#189](https://github.com/anthropics/skills/issues/189), 6 comments, 9 👍 — highest 👍 count of any issue), and Bedrock/MCP interoperability ([#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16)) — all point to demand for better packaging, discovery, and deployment plumbing rather than more content.
- **Eval/quality tooling and context-budget discipline** — the `run_eval.py` 0% trigger-rate bug ([#556](https://github.com/anthropics/skills/issues/556), 12 comments, 7 👍), agent output verification proposals ([#1385](https://github.com/anthropics/skills/issues/1385)), and context-window blowouts from eager-loading skills like `claude-api` injecting ~156k tokens ([#1487](https://github.com/anthropics/skills/issues/1487)) show sustained appetite for **quality-gating and token-efficiency** skills over feature skills.

## 3. High-Potential Pending Skills

PRs with active, recent comment activity that are plausible near-term merges:

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** (skill-creator eval fix) — updated same day as this report (2026-09-11); resolves a widely-corroborated bug ([#556](https://github.com/anthropics/skills/issues/556), 10+ independent reproductions), high merge priority.
- **[PR #1742](https://github.com/anthropics/skills/pull/1742)** (mcp-builder `mcp>=2` compatibility) — active through 2026-09-11, fixes a breaking upstream dependency rename; low-risk, high-urgency fix.
- **[PR #1602](https://github.com/anthropics/skills/pull/1602)** (evaluation serialization/encoding/stability fixes) — bundles multiple reliability fixes across the eval harness, overlapping with #1390's serialization bug.
- **[PR #1724](https://github.com/anthropics/skills/pull/1724)** (mcp-builder default model → claude-sonnet-5) — small, mechanical, low-controversy update likely to clear review quickly.
- **[PR #1099](https://github.com/anthropics/skills/pull/1099)** / **[PR #1050](https://github.com/anthropics/skills/pull/1050)** — overlapping Windows-compatibility fixes for `skill-creator`; likely to be consolidated with #1298 given shared root cause.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't for new Skills — it's for **making the Skill-creation and Skill-trust pipeline actually work**: fixing the broken eval/optimization loop that developers rely on to build good Skills, and closing the namespace-impersonation trust gap that lets malicious skills masquerade as official ones.

---

# Claude Code Community Digest — 2026-09-11

## Today's Highlights

Claude Code shipped v2.1.268, adding pricing pass-through for gateway-managed Claude apps and a new startup warning when CIDR allowlists are left empty — both aimed at enterprise/gateway deployments. Community activity remains dominated by Windows desktop stability issues (orphaned process locks, always-on-top windows, Cowork/Plan9 share failures after recent Windows updates) alongside growing pressure around Fable 5/Claude Code model-generation behavior (verbosity, false-positive safeguards, quality regressions). On the roadmap side, the long-requested Function Hooks feature for plugins has a committed ship date of "weeks," a notable signal after sustained community pressure.

## Releases

**v2.1.268**
- Claude apps gateway now supports `pricing:` in `gateway.yaml` — signed-in Claude Code clients inherit the same rates via managed settings, keeping `/cost` and telemetry aligned with the org's spend meter.
- New startup warning fires when a gateway's `access_control.allow_cidrs` is left empty, flagging a common misconfiguration that could otherwise expose gateways unintentionally.

## Hot Issues

1. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — Claude Code Desktop fails to relaunch on Windows due to an orphaned process file lock. 176 comments, 84 👍; closed as invalid despite heavy engagement, suggesting community disagreement with triage.
2. **[#36151](https://github.com/anthropics/claude-code/issues/36151)** — Feature request for multi-account switching in the mobile app without a shared email. 174 comments, 715 👍 — one of the highest reaction counts in the batch, indicating strong latent demand.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Detailed report of model-side behavior issues (citing stop-hook directives as false authorization, treating absent search results as evidence of absence). Closed but still drawing engagement (171 comments), reflecting real user concern about model reliability.
4. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Function Hooks - make plugins 10x more powerful." Anthropic has committed to shipping within weeks; 159 comments, 92 👍. Major plugin-ecosystem unlock to watch.
5. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** — Claude Desktop (Windows 11) stays always-on-top with no toggle. 230 👍, closely related to #87895 and #66516 — a recurring UX complaint across multiple duplicate reports.
6. **[#92984](https://github.com/anthropics/claude-code/issues/92984)** and **[#92958](https://github.com/anthropics/claude-code/issues/92958)** — Cowork Plan9 share/mount failures on Windows after KB5124008/KB5124012 cumulative updates, confirmed via rollback A/B testing on multiple machines. High-confidence regression tied to a specific OS patch.
7. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — Desktop fails to launch on Windows after crash due to orphaned Silo/Job Object; only logoff/reboot recovers. 77 comments — a serious reliability issue with no documented workaround besides system restart.
8. **[#2511](https://github.com/anthropics/claude-code/issues/2511)** — Long-standing (since June 2025) request to connect Claude Code to Claude.ai Projects knowledge bases. 406 👍 — one of the oldest and most-upvoted open asks in the batch.
9. **[#76248](https://github.com/anthropics/claude-code/issues/76248)** — Cowork/cloud sessions git proxy now blocks pushes outside an "authorized repository set," breaking PAT pass-through that previously worked. Security-tightening change with real workflow impact.
10. **[#53065](https://github.com/anthropics/claude-code/issues/53065)** — The `advisor()` tool forwards the full transcript to a secondary model and double-counts tokens in top-level usage, potentially triggering premature auto-compaction on extended-context models — a subtle but impactful token-accounting bug.

## Key PR Progress

1. **[#93452](https://github.com/anthropics/claude-code/pull/93452)** — `mods/diff`: aligns the community diff mod's panel with the built-in `/diff` panel (hunks via the engine's code element, matching close button, row spacing, empty-state placement, narrow-terminal resize behavior, single in-flight repo probe). Open.
2. **[#93244](https://github.com/anthropics/claude-code/pull/93244)** — `mods`: follows the plugin API's naming pass (`isFocused`, `tool`), tightens telemetry (sequential rows, per-row analytics reads, no data sent to third-party providers), and adds a diff-mod backend seam with git as the built-in backend. Closed.
3. **[#42205](https://github.com/anthropics/claude-code/pull/42205)** — `fix(hookify)`: normalizes tool matcher parsing so matchers with spaces around OR separators (e.g. `Edit or Write`) match correctly; trims and normalizes each OR segment. Closed.

*Note: only 3 PRs were updated in the last 24h in this dataset — insufficient volume to populate a full top-10 list.*

## Feature Request Trends

- **Cross-surface parity**: Multiple asks for feature parity between CLI and other surfaces — `/btw` in VS Code ([#37323](https://github.com/anthropics/claude-code/issues/37323)), sidebar project filtering restored in Desktop ([#78857](https://github.com/anthropics/claude-code/issues/78857)).
- **Plugin/hook extensibility**: Function Hooks ([#91870](https://github.com/anthropics/claude-code/issues/91870)) is the clearest signal — community wants deeper, more powerful hook/plugin APIs.
- **Account & identity management**: Multi-account switching without shared email ([#36151](https://github.com/anthropics/claude-code/issues/36151)) points to demand for better multi-tenant/multi-identity support.
- **Knowledge/context integration**: Connecting Claude Code to Claude.ai Projects knowledge bases ([#2511](https://github.com/anthropics/claude-code/issues/2511)) remains a persistent, highly-upvoted ask.
- **Per-agent configuration**: Requests for per-agent model/effort settings independent of global `settings.json` ([#66402](https://github.com/anthropics/claude-code/issues/66402)) reflect growing multi-agent/fleet usage patterns.

## Developer Pain Points

- **Windows desktop instability**: A cluster of related issues — orphaned process locks blocking relaunch ([#42776](https://github.com/anthropics/claude-code/issues/42776)), orphaned Silo/Job Objects preventing launch after crash ([#53247](https://github.com/anthropics/claude-code/issues/53247)), always-on-top windows ([#85891](https://github.com/anthropics/claude-code/issues/85891), [#87895](https://github.com/anthropics/claude-code/issues/87895)) — suggests systemic process-lifecycle and window-management fragility on Windows.
- **Cowork/Plan9 fragility tied to Windows updates**: Two independent, well-documented reports ([#92984](https://github.com/anthropics/claude-code/issues/92984), [#92958](https://github.com/anthropics/claude-code/issues/92958)) tie Cowork share failures directly to specific Windows cumulative updates, indicating the Plan9 mount layer is brittle to OS-level changes.
- **Model behavior regressions**: Reports of verbose comments despite instructions ([#65961](https://github.com/anthropics/claude-code/issues/65961)), measurable quality regression in the Fable/Opus/Sonnet 5 generation with under-disclosed fallback ([#83510](https://github.com/anthropics/claude-code/issues/83510)), and safeguard false-positives on trivial input ([#87640](https://github.com/anthropics/claude-code/issues/87640)) point to ongoing friction between model updates and user trust/predictability.
- **Auth/networking edge cases**: MCP OAuth trailing-slash bug breaking Entra ID auth ([#52871](https://github.com/anthropics/claude-code/issues/52871)) and non-functional Cowork network allowlists ([#30112](https://github.com/anthropics/claude-code/issues/30112), [#38984](https://github.com/anthropics/claude-code/issues/38984)) show enterprise auth/network configuration remains a rough edge.
- **Tooling regressions in agent workflows**: Task-list tools no longer exposed to the model despite remaining visible in the UI ([#80015](https://github.com/anthropics/claude-code/issues/80015)) and token-usage double-counting from `advisor()` ([#53065](https://github.com/anthropics/claude-code/issues/53065)) indicate gaps between backend changes and their effects on agentic workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-11

## Today's Highlights

Activity remains heavily concentrated around provider/model configuration pain points, with the top-voted issue (#6231, 232 👍) calling for auto-discovery of models on OpenAI-compatible endpoints — and PR #48486 attempting to ship exactly that feature today, though it was closed pending compliance review. Resource-management concerns are also surfacing at scale: unbounded SQLite growth (#33356), rising CPU usage (#30086), and an unprotected subagent infinite-loop burning tokens for ~50 minutes (#45442) point to maturity gaps as OpenCode scales to longer-lived sessions. On the PR side, the `v2` branch continues active TUI/timeline refactoring (#48489, #48395) alongside a steady stream of provider- and billing-related fixes.

## Releases

None in the last 24h.

## Hot Issues

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231) — Auto-discover models from OpenAI-compatible provider endpoints** (232 👍, 57 comments). The single most-requested fix: manually listing models for LM Studio/Ollama/llama.cpp is tedious and breaks as local model sets change. Directly targeted by PR #48486 today.
2. **[#5374](https://github.com/anomalyco/opencode/issues/5374) — Show tokens/second** (109 👍, 22 comments). Long-standing request for live throughput display to compare provider performance.
3. **[#13003](https://github.com/anomalyco/opencode/issues/13003) — Display token usage in the TUI** (53 👍, 13 comments). Related ask: surface input/output/remaining budget that's already tracked internally but hidden from users.
4. **[#23153](https://github.com/anomalyco/opencode/issues/23153) — Pay Go subscription with crypto** (50 👍, 21 comments). Recurring monetization/payment-flexibility request.
5. **[#26338](https://github.com/anomalyco/opencode/issues/26338) — Add CommandCode as a provider** (43 👍, closed). Community-driven provider integration request; closed but high engagement signals demand for faster provider onboarding.
6. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded `event` table growth, opencode.db reaching 13GB+** (30 comments, 9 👍). Serious operational issue for long-lived instances — no retention/compaction on event-sourced snapshots, filling disks on two reported deployments.
7. **[#30086](https://github.com/anomalyco/opencode/issues/30086) — High CPU usage in newer versions** (52 comments, 28 👍). Regression reported ~7 days prior; users who previously ran 10+ concurrent sessions now struggle with 3, with cursor-lag side effects.
8. **[#45442](https://github.com/anomalyco/opencode/issues/45442) — Subagent infinite loop, 364 identical tool calls over ~50 minutes** (7 comments). No loop-protection mechanism for subagents leads to uncontrolled token burn — a cost and reliability risk for teams running automated subagents.
9. **[#36942](https://github.com/anomalyco/opencode/issues/36942) — Vertical tabs** (31 👍, 15 comments). UI request: horizontal-only tabs make it hard to track more than ~5 sessions at once.
10. **[#19130](https://github.com/anomalyco/opencode/issues/19130) — Windows ARM64: OpenTUI fails to initialize (bun:ffi/TinyCC error)** (24 comments, 13 👍). Platform-specific TUI startup failure despite the native binary working for non-interactive commands.

## Key PR Progress

1. **[#48486](https://github.com/anomalyco/opencode/pull/48486) — feat(provider): discover models for openai-compatible providers** (closed, needs:compliance). Direct attempt to resolve #6231 by probing `GET <baseURL>/models` during provider init; blocked on compliance review rather than technical grounds.
2. **[#48489](https://github.com/anomalyco/opencode/pull/48489) — refactor(tui): render nested groups with message anchors**. Task 5 of the grouped-timeline rollout on `v2`, extracting thought/exploration group rendering into recursive native child-node rendering.
3. **[#48395](https://github.com/anomalyco/opencode/pull/48395) — feat(tui): add recursive session grouping tree** (closed). Companion piece to #48489 — generic recursive grouping tree with ordered seam merges and cached leaf counts.
4. **[#44725](https://github.com/anomalyco/opencode/pull/44725) — feat(core): restore OPENCODE_DISABLE_CLAUDE_CODE support in v2**. Re-adds a v1 env-var flag (preventing `~/.claude` prompt/skills reads) that was declared but not honored after the v2 migration.
5. **[#48397](https://github.com/anomalyco/opencode/pull/48397) — fix(core): break filesystem cycle in compiled prompts**. Fixes #48372; complements the Bun 1.4.2 bump (#44946) by addressing a symlink/cycle issue in compiled-prompt resolution.
6. **[#48366](https://github.com/anomalyco/opencode/pull/48366) — fix(core): keep a refused inotify instance from wedging the process**. Fixes #16610, one of two triggers behind the still-open deadlock tracked in #37111.
7. **[#48466](https://github.com/anomalyco/opencode/pull/48466) / [#48485](https://github.com/anomalyco/opencode/pull/48485) — fix: round-trip Anthropic tool_search_tool_result blocks**. Duplicate submissions (protocol-only fix for #45527) landing the Anthropic tool-search wire round-trip; config seam for `defer_loading` deferred to a follow-up.
8. **[#47635](https://github.com/anomalyco/opencode/pull/47635) — fix(opencode): resolve markdown agent prompts**. Fixes #47616 — markdown agent/mode loaders were overwriting frontmatter `prompt:` with the Markdown body, including empty bodies.
9. **[#42316](https://github.com/anomalyco/opencode/pull/42316) — fix(opencode): filter compaction events from jsonl output**. Fixes #42238 — `opencode run --format json` was leaking internal compaction summaries/step events into consumer-facing JSON output.
10. **[#46112](https://github.com/anomalyco/opencode/pull/46112) — fix(tui): handle wide Bengali graphemes**. Upgrades OpenTUI 0.4.5→0.5.9 to correctly measure complex Bengali grapheme widths in `unicode-wide` terminal profiles.

## Feature Request Trends

- **Provider/model ergonomics dominate**: auto-discovery for OpenAI-compatible endpoints (#6231), LM Studio `/v1/models` auto-detection (#23327), models.dev-backed custom provider config (#9311), and new provider integrations (CommandCode #26338, crypto payment #23153) all point to demand for zero-config, self-updating provider setup.
- **Observability into cost/performance**: tokens/second display (#5374) and TUI token-usage visibility (#13003) are both highly upvoted asks for real-time insight into spend and throughput.
- **UI/layout customization**: vertical tabs (#36942), swappable left/right panel layout (#16349), and an integrated desktop browser (#26772) reflect desire for more flexible workspace layouts, especially for power users running many sessions.
- **Automation/workflow parity with Claude Code**: dynamic multi-step workflows (#29059) signals users actively comparing OpenCode's automation capabilities against competing agent tools.

## Developer Pain Points

- **Free-tier/quota confusion**: repeated "free usage exceeded" reports (#15585, #47318) suggest unclear or under-communicated rate limits on OpenCode Zen free models, generating recurring support burden.
- **Resource/scale limits**: unbounded database growth (#33356) and rising CPU usage (#30086) indicate the local storage and session-management layer wasn't designed for long-lived, high-volume usage — now surfacing as production-grade complaints.
- **Silent failure modes**: empty LLM responses causing sessions to stop silently (#41469), auto-compaction proceeding without confirmation and losing task context (#41358), and unprotected subagent loops burning tokens (#45442) all point to a gap in guardrails around abnormal model/session behavior.
- **Billing/payment friction**: declined payments after months of successful billing (#45278) and provider-side credit/API errors (#23240) add friction to the paid subscription experience.
- **Cross-platform TUI stability**: Windows ARM64 initialization failures (#19130) and wide-grapheme rendering bugs (#46112) show the TUI rendering layer (OpenTUI) still has platform- and locale-specific rough edges.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
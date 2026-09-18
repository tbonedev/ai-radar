# AI CLI Tools Community Digest 2026-09-18

> Generated: 2026-09-18 12:02 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool CLI Comparison Report — 2026-09-18

## 1. Ecosystem Overview

The AI CLI tooling space continues to fragment along a familiar axis: mature, high-adoption incumbents wrestling with platform-level reliability debt, versus fast-moving challengers absorbing the pain of aggressive free-tier growth strategies. Claude Code's activity today is almost entirely reactive — a same-day patch for a self-inflicted regression — while OpenCode's is dominated by monetization-infrastructure failures (free-tier gating) compounding on top of a release regression of its own. Both ecosystems show heavy community engagement concentrated in a small number of long-running mega-threads (800+ comments) rather than diffuse day-to-day chatter, suggesting user frustration is accumulating around a handful of structural issues rather than being resolved incrementally. Extensibility (Claude Code's "Mods") and model/agent flexibility (OpenCode's subagent model selection) are the clearest forward-looking investment areas for each project respectively.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| Top issue comment count | 857 (#38335) | 49 (#37012) |
| Releases (24h) | 1 (v2.1.276, regression fix) | 0 |
| PRs tracked | 2 | 10 |
| Regression status | Yes — 2.1.275→2.1.276 self-fix | Yes — 1.18.30 crash-on-prompt |
| Dominant issue theme | Usage limits / Windows desktop lifecycle | Zen free-tier billing/routing errors |

*Note: raw issue/PR volume isn't directly comparable — Claude Code's digest surfaced only 2 PRs in the 24h window vs. OpenCode's 10, which may reflect differing review cadence or reporting granularity rather than true relative development velocity.*

## 3. Shared Feature Directions

- **Multi-model / multi-account flexibility** — Claude Code wants multi-account Connector support (#27302, 381 👍) and native 1P/3P inference switching (#56606); OpenCode wants per-subagent model selection (#6651, 81 👍). Both point to users wanting finer-grained control over which credential/model backs which task.
- **Extensibility as a top community priority** — Claude Code's "Mods" hook system (#91870) and OpenCode's plugin-based compaction refactor (#49575) both reflect a push to move core behavior out of the monolith and into user/community-extensible layers.
- **Config trust and portability** — Claude Code users want JSONC config support (#17968) and a relocatable data dir (#57998); OpenCode users are angry that declared config (`limit.output`) is silently overridden (#29363). Common thread: users want config to be a *contract*, not a suggestion.
- **Windows-specific platform fragility** — Claude Code has a cluster of Windows desktop process-lifecycle bugs (#42776, #53247, #85891); OpenCode has a separate Windows upgrade/install bug (#48368, now fixed) and Windows ARM64 TUI failure (#19130). Different symptoms, same underlying theme: Windows is the weakest-tested platform for both.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Primary friction source | Desktop app process/window management (Windows) | Backend billing/provider routing (Zen free tier) |
| Target user signal | Enterprise/multi-identity auth, IDE integration polish | Cost-sensitive/free-tier users, self-hosted/local providers |
| Technical approach to extensibility | First-party "Mods" hook system, tightly scoped diff-pane UI work | Plugin-ized core (compaction moved out of Core), open compatibility layer for OpenAI Responses API |
| Provider strategy | Single-vendor (Anthropic) with gateway/proxy compatibility as a stability concern | Multi-provider aggregator (Zen marketplace + LAN discovery + Bedrock + DeepSeek), inherits more integration surface area and more failure modes |
| Community tone | Frustration concentrated in long-tenured mega-threads (usage limits, accounts) | Frustration is fresher/day-of (free-tier breakage, mid-session failures) |

## 5. Community Momentum & Maturity

Claude Code shows the maturity profile of an established product: its top complaints are years-old-feeling structural gripes (#38335 has 857 comments and is still open), and today's only shipped change was a hotfix for its own prior-day regression — low net feature velocity, high engagement inertia. OpenCode shows the profile of a rapidly-iterating, still-stabilizing platform: 10 PRs merged/updated in 24h spanning auth, compaction architecture, policy enforcement, and UX, but that velocity is visibly outrunning QA — a hard crash-on-every-prompt regression (1.18.30) and a live billing-gating outage were both active simultaneously. OpenCode's community is more reactive to acute breakage; Claude Code's is more resigned to unresolved chronic issues.

## 6. Trend Signals

- **Free-tier/monetization infrastructure is an emerging reliability category**, not just a UX nuisance — OpenCode's Zen gating errors span multiple client paths (official CLI, third-party MonoCode frontend), indicating the failure is server-side routing/policy, not client detection. Teams offering free tiers on top of paid model access should expect this class of bug to recur as usage scales.
- **Extensibility is converging as the next competitive battleground** — both projects are independently building hook/plugin systems in the same window (Claude Code's Mods, OpenCode's Core plugin refactor), suggesting the ecosystem is moving from "monolithic CLI" toward "extensible agent runtime" as the expected shape of these tools.
- **Desktop/native platform support remains under-invested relative to CLI/TUI core** — both tools show platform-specific (esp. Windows) bugs surviving multiple releases, a signal that testing investment lags feature investment for anything outside the primary terminal/CLI experience.
- **Config-as-contract expectations are rising** — users on both tools are pushing back hard when declared configuration (limits, formats, paths) is silently overridden or unsupported, suggesting increasing sophistication/expectations among the power-user base as these tools get embedded into more complex workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
*Data as of 2026-09-18 · anthropics/skills*

## 1. Top Skills Ranking

*(Note: the PR feed's comment counts weren't populated in the source data; ranking below follows the feed's own "sorted by comments" order, which favors recency and cross-issue linkage.)*

1. **[#1298 – skill-creator trigger-eval isolation & Windows fixes](https://github.com/anthropics/skills/pull/1298)** (MartinCajiao, open since Jun 10, updated Sep 16)
   Fixes false trigger-eval misses caused by racing worker probes and a broken `select()` call on Windows subprocess pipes; also stops runtime failures from being silently scored as non-triggers. Core reliability fix for the skill-authoring toolchain itself. Status: **open, actively updated**.

2. **[#1771 – proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (ProofCore-Protocol, Sep 15)
   New Web3-focused Skill: static analysis of Solidity/Rust contracts with audit proofs anchored on the TON blockchain. Notable as one of the few blockchain-vertical Skill submissions. Status: **open, very new**.

3. **[#1703 – md2video-audio](https://github.com/anthropics/skills/pull/1703)** (70v-Yoyo, Sep 1)
   Converts Markdown → MP4 via Marp slides plus synthesized voiceover — a "zero-cost" content-generation Skill. Status: **open**.

4. **[#1742 – mcp-builder: mcp>=2 streamable_http_client compatibility](https://github.com/anthropics/skills/pull/1742)** (Kuldeeep18, Sep 8, fixes #1668)
   Patches a breaking rename in the `mcp` SDK (`streamablehttp_client` → `streamable_http_client`) and fixes custom-header handling. Directly unblocks anyone building MCP servers with the current SDK. Status: **open**.

5. **[#525 – Pyxel retro game development Skill](https://github.com/anthropics/skills/pull/525)** (kitao, open since Mar 5, still updated Sep 16)
   Guides deterministic, headless game creation/debugging in Pyxel with frame inspection and state checks. Longest-lived open PR in the set — six+ months of sustained maintainer/author engagement suggests it's close to a decision. Status: **open, long-running**.

6. **[#514 – document-typography Skill](https://github.com/anthropics/skills/pull/514)** (PGTBoos, Mar 4)
   Targets typographic defects common in AI-generated documents (orphan wrapping, widow paragraphs, numbering misalignment). Status: **open, stalled since Mar 13**.

7. **[#1615 – scnet-hpc Skill](https://github.com/anthropics/skills/pull/1615)** (lql341, Aug 20)
   Profile-based SSH/Slurm workflow Skill for operating SCNet HPC clusters. Niche but well-scoped infra Skill. Status: **open**.

8. **[#538 – pdf Skill: fix case-sensitive file references](https://github.com/anthropics/skills/pull/538)** (Lubrsy706, Mar 6)
   Small but impactful fix — uppercase references to `REFERENCE.md`/`FORMS.md` break on case-sensitive filesystems (Linux CI, Docker). Status: **open**.

## 2. Community Demand Trends (from Issues)

- **Trust & provenance of Skills** is the single loudest theme: [#492](https://github.com/anthropics/skills/issues/492) (43 comments) reports community Skills impersonating the `anthropic/` namespace, a trust-boundary risk for anyone granting elevated permissions.
- **Skill triggering reliability** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) documents a 0% trigger rate in `run_eval.py`; this pain directly motivated PRs [#1298](https://github.com/anthropics/skills/pull/1298) and [#1769](https://github.com/anthropics/skills/pull/1769).
- **Enterprise/org sharing** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide Skill sharing in Claude.ai instead of manual `.skill` file distribution.
- **Context-budget discipline** — [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api Skill injecting ~156k tokens) and [#1362](https://github.com/anthropics/skills/issues/1362) (web-artifacts-builder pnpm/bundling failures) point to demand for leaner, more robust bundled Skills.
- **New Skill proposals leaning toward agent infrastructure, not content generation** — [#1329 compact-memory](https://github.com/anthropics/skills/issues/1329) (symbolic agent-state notation), [#412 agent-governance](https://github.com/anthropics/skills/issues/412), and [#1385 reasoning quality gate pipeline](https://github.com/anthropics/skills/issues/1385) all target agent reliability/safety rather than new creative capabilities.
- **Packaging/dedup friction** — [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) flags duplicate Skills installed via overlapping marketplace plugins.

## 3. High-Potential Pending Skills

PRs directly resolving open, community-flagged bugs — these have the clearest path to merge:

- **[#1769 – fix skill-creator 0% recall trigger detection](https://github.com/anthropics/skills/pull/1769)** (fixes #1721) — closes the exact failure class reported in [#556](https://github.com/anthropics/skills/issues/556).
- **[#1298 – skill-creator trigger-eval isolation](https://github.com/anthropics/skills/pull/1298)** — companion fix to the same eval-reliability problem, cross-platform (Windows) scope.
- **[#1742 – mcp-builder mcp>=2 compatibility](https://github.com/anthropics/skills/pull/1742)** (fixes #1668) — unblocks a hard SDK-breakage affecting all MCP-building users.
- **[#1765 – office Skill UTF-8 redlining fix](https://github.com/anthropics/skills/pull/1765)** (fixes #1707) — narrow, well-validated correctness fix across DOCX/PPTX/XLSX validators.
- **[#1607 – claude-api: retire four model IDs](https://github.com/anthropics/skills/pull/1607)** (fixes #1603) — low-risk, keeps a widely-used Skill accurate as models are deprecated.

## 4. Skills Ecosystem Insight

The community's most concentrated demand right now is not for new Skills but for making the **existing Skills system trustworthy and reliable** — provenance/namespace security, accurate trigger evaluation, and tighter context/token budgets outrank requests for new creative or vertical capabilities.

---

# Claude Code Community Digest — 2026-09-18

## Today's Highlights

A quiet release day dominated by one thing: fixing yesterday's fix. **v2.1.276** patches a 2.1.275 regression that broke every request through a custom `ANTHROPIC_BASE_URL` proxy/gateway with a `400 Input tag 'advisor_20260301'` error — a reminder of how fragile gateway compatibility is around the Advisor feature. Community attention otherwise remains concentrated on long-running, high-engagement threads: session/usage-limit complaints (#38335, 857 comments), multi-account connector support (#27302), and a maturing "Mods" extensibility proposal (#91870) that the team says will ship "in weeks."

## Releases

- **[v2.1.276](https://github.com/anthropics/claude-code/releases/tag/v2.1.276)** — Fixes every request failing with `400 … Input tag 'advisor_20260301'` when `ANTHROPIC_BASE_URL` points at a proxy/gateway; regression introduced in 2.1.275.
- **[v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275)** — Claude apps gateway sign-in now surfaces and confirms the signed-in account name before saving credentials (visible in `/status`); adds a "send now" key (`ctrl+enter` or `ctrl+x ctrl+s`) to interrupt the current turn and flush all queued messages immediately.

## Hot Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Max plan session limits exhausted abnormally fast (857 comments, 476 👍). Longest-running open complaint; marked `invalid` by triage but community engagement keeps it alive as the top usage-limit grievance.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Feature request for multiple accounts on the same Connector in Claude/Claude Code on the web (250 comments, 381 👍). High 👍-to-comment ratio signals broad silent support, not just debate.
3. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Mods" extensibility initiative (197 comments, 121 👍). Team has committed to shipping function hooks within weeks; tracked PRs #95198 and #94847 are early Mods-related groundwork.
4. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — Claude Code Desktop fails to relaunch on Windows due to an orphaned process file lock (195 comments). Closely related to #53247 below — both point to the same Windows process-lifecycle bug class.
5. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Detailed model-behavior report on `/goal` stop-hook misuse and evidence-absence reasoning errors (185 comments). Closed, but notable for being a rare model-side behavioral bug report with reproducible patterns rather than a UI complaint.
6. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** — Claude Desktop window stays always-on-top on Windows 11 with no setting to disable (109 comments, 265 👍). Duplicate/companion to #66516 (macOS-equivalent); high 👍 suggests this is a widely-shared daily annoyance.
7. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — Claude Desktop fails to launch on Windows after crash, orphaned Silo/Job Object requires logoff/reboot to recover (94 comments). Same root-cause family as #42776.
8. **[#24726](https://github.com/anthropics/claude-code/issues/24726)** — VS Code extension: request for a setting to disable auto-attach of open file/selection (79 comments, 246 👍). One of the highest 👍-per-comment ratios in the list — strong signal of unmet demand.
9. **[#69238](https://github.com/anthropics/claude-code/issues/69238)** — "No response from API" errors when Advisor is triggered (65 comments, 110 👍). Likely related to the same Advisor/gateway fragility just patched in v2.1.276.
10. **[#82056](https://github.com/anthropics/claude-code/issues/82056)** — No way for a session to tell whether its auto-memory index loaded whole, truncated, or not at all (51 comments). Lower comment count but directly relevant to reliability of the memory feature itself.

## Key PR Progress

Only two PRs updated in the last 24h, both scoped to the in-progress "Mods" diff-pane feature:

1. **[#95198](https://github.com/anthropics/claude-code/pull/95198)** — `mods/diff`: types `openPane`'s return as `unknown` instead of `Promise<void>`, anticipating a richer `$.ui.open` result object. No current caller reads the value; purely a forward-compatible type change ahead of an engine typing update.
2. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — `diff`: the pane now only auto-opens on the first Edit/Write/NotebookEdit when there's actually a file to list, and only after fetching. Fixes empty-pane pop-ups for writes outside the repo, into ignored files, or into a different worktree than the session started in.

## Feature Request Trends

- **Extensibility / scripting** — #91870 (Mods/function hooks) is the clear center of gravity, with active PR work already landing.
- **Auth & account management** — Multi-account Connector support (#27302), AWS Bedrock + SSO for `claude remote-control` (#28795), and native switching between 1P/3P inference modes (#56606) all point to enterprise/multi-identity auth as a recurring gap.
- **Editor/IDE ergonomics** — VS Code focus-stealing (#32726), disabling auto-attach (#24726), tab renaming (#11145), and drag-and-drop (#25128) form a cluster of IDE-integration polish requests.
- **Config format & portability** — JSONC support for settings files (#17968, 107 👍) and a `CLAUDE_DATA_DIR` relocation env var (#57998) reflect demand for more flexible local configuration.
- **Session continuity** — Session handoff/continuity (#11455) and auto-memory load-state visibility (#82056) suggest users want more insight into and control over persistent session state.

## Developer Pain Points

- **Windows desktop process lifecycle** is the single biggest recurring frustration: orphaned locks/Job Objects blocking relaunch after a crash (#42776, #53247), always-on-top window with no toggle (#85891), and update failures while CoworkVMService is running (#49655) — all point to unreliable process/window management on Windows.
- **Gateway/proxy fragility around Advisor** — the 400 error just patched in v2.1.276, plus the still-open "No response from API when Advisor is triggered" (#69238), suggest Advisor's interaction with custom `ANTHROPIC_BASE_URL` setups remains a soft spot.
- **Permissions not consistently respected** — `.claude/settings.local.json` permissions ignored in the VS Code extension even under `bypassPermissions` (#15921), and Cowork scheduled tasks re-prompting despite "Always allow" (#47180), both erode trust in the permission model.
- **Usage-limit transparency** — #38335's scale (857 comments) shows this remains the most emotionally charged unresolved topic, independent of whether it's classified as a genuine bug.
- **MCP/schema compatibility** — draft-07 `outputSchema` rejection makes some MCP servers entirely unusable client-side (#86142), a sharp edge for anyone integrating external tools.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-18

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

The dominant story today is a wave of **OpenCode Zen free-tier breakage**: multiple high-comment issues report `"OpenCode's free tier can only be used from within OpenCode"` and `Insufficient Balance` errors blocking free models (Big Pickle, Muse Spark, MiMo V2.5), several triggered specifically during auto-compaction. In parallel, a **1.18.30 regression** crashes every prompt with `TypeError: undefined is not an object (evaluating 'a.name')` in `SystemPrompt.environment`. On the community side, pressure to **restore the old UI layout** continues to build across three separate issues, and a `reasoning encrypted_content` error is disrupting Muse Spark usage on Zen — a PR addressing a related provider registration bug landed today.

## Releases

None in the last 24h.

## Hot Issues

1. **[FEATURE] Keep legacy layout option** — [#37012](https://github.com/anomalyco/opencode/issues/37012) (49 comments, 68 👍) — Long-running request to preserve the pre-redesign UI, citing faster workspace navigation; still open after two months, signaling sustained user dissatisfaction with the new layout.
2. **"Insufficient Balance" on free Zen models** — [#35149](https://github.com/anomalyco/opencode/issues/35149) (44 comments, 20 👍, closed) — Free-tier models like `opencode/big-pickle` were hard-blocked by token routing; closed but clearly precedes today's related free-tier failures.
3. **Dynamic model selection for subagents via Task tool** — [#6651](https://github.com/anomalyco/opencode/issues/6651) (44 comments, 81 👍) — Top feature request; subagents currently can't override which model they run, limiting cost/capability tuning per task.
4. **Free tier fails via MonoCode frontend** — [#49580](https://github.com/anomalyco/opencode/issues/49580) (36 comments) — Third-party frontend integration breaks on the same free-tier restriction, suggesting the block isn't purely client-detection-based.
5. **Free tier blocked from within OpenCode itself** — [#49433](https://github.com/anomalyco/opencode/issues/49433) (35 comments) — Same error firing in the official CLI/TUI, ruling out third-party client as the sole cause.
6. **Unknown certificate verification error** — [#8601](https://github.com/anomalyco/opencode/issues/8601) (31 comments) — Recurring TLS/login failure across providers including Gemini 3, unresolved since January.
7. **Zen critical errors on Muse Spark with images/tool calls** — [#48741](https://github.com/anomalyco/opencode/issues/48741) (28 comments, 9 👍) — `reasoning encrypted_content was not issued to this caller` breaks multimodal and tool-calling flows on Zen.
8. **Windows ARM64: OpenTUI fails via bun:ffi/TinyCC** — [#19130](https://github.com/anomalyco/opencode/issues/19130) (25 comments, 13 👍) — Native ARM64 binary works for CLI commands but the TUI won't initialize; platform-specific FFI issue open since March.
9. **DeepSeek V4 Flash suddenly requires China-hosting opt-in** — [#39845](https://github.com/anomalyco/opencode/issues/39845) (24 comments, 30 👍) — Mid-session breakage from an unannounced policy/model routing change on OpenCode Go subscriptions.
10. **`limit.output` silently capped at 32k** — [#29363](https://github.com/anomalyco/opencode/issues/29363) (21 comments, 21 👍) — Config-declared output limits (e.g., 384k for DeepSeek) are silently overridden; only workaround is an undocumented experimental env var.

## Key PR Progress

1. **feat(opencode): local LAN provider discovery + auto-discover models** — [#27554](https://github.com/anomalyco/opencode/pull/27554) — Adds mDNS-based `/connect` discovery for local OpenAI-compatible servers, closing two related issues.
2. **fix(opencode): require OAuth for GitHub Copilot** — [#44114](https://github.com/anomalyco/opencode/pull/44114) — Prevents `GITHUB_TOKEN` from silently auto-activating the Copilot provider via generic env auth.
3. **[contributor] feat(app): add /btw side question panel** — [#49750](https://github.com/anomalyco/opencode/pull/49750) — New one-shot slash command that renders answers in a closeable side panel without polluting the main session.
4. **refactor(core): move native compaction mechanisms into a plugin** — [#49575](https://github.com/anomalyco/opencode/pull/49575) (closed) — Decouples provider-specific native compaction logic from Core, keeping only policy/provenance/retry invariants centralized.
5. **fix(core): register compatible Responses provider** — [#49733](https://github.com/anomalyco/opencode/pull/49733) — Registers the documented OpenAI Responses-API-compatible provider entrypoint, likely relevant to the `encrypted_content` errors seen above.
6. **feat(core): enforce Console-managed policies** — [#49729](https://github.com/anomalyco/opencode/pull/49729) — Fixes a bug where Console-compiled provider/tool policy statements were fetched but silently dropped, leaving enforcement inactive.
7. **fix(core): await child background work before subagent completion** — [#49305](https://github.com/anomalyco/opencode/pull/49305) — Ensures subagents don't terminate while background shell/nested-subagent tasks are still pending, closing #48826.
8. **feat(app): improve line comment interactions** — [#49746](https://github.com/anomalyco/opencode/pull/49746) — Upgrades diff-review UX with native text-selection comment actions and a refreshed inline editor.
9. **[contributor] feat(desktop): improve Console onboarding** — [#48501](https://github.com/anomalyco/opencode/pull/48501) — Makes OpenCode Console the primary Desktop setup path for provider/auth configuration.
10. **fix(installation): handle Windows upgrade by scheduling binary replacement** — [#48368](https://github.com/anomalyco/opencode/pull/48368) — Fixes silent no-op upgrades on Windows by deferring binary replacement, closing #37055.

## Feature Request Trends

- **Model/agent flexibility**: strongest signal is per-subagent model selection ([#6651](https://github.com/anomalyco/opencode/issues/6651), 81 👍) and local LAN provider auto-discovery (addressed in [#27554](https://github.com/anomalyco/opencode/pull/27554)).
- **UI/UX reversibility**: sustained demand to bring back the legacy layout ([#37012](https://github.com/anomalyco/opencode/issues/37012), [#49021](https://github.com/anomalyco/opencode/issues/49021), [#31972](https://github.com/anomalyco/opencode/issues/31972)) — users cite workspace efficiency and muscle memory loss.
- **Provider-native features**: requests to expose OpenAI Responses API compaction directly ([#5200](https://github.com/anomalyco/opencode/issues/5200), 30 👍) rather than relying on OpenCode's generic compaction.
- **Config trust**: users want declared config limits (like `limit.output`) honored rather than silently overridden ([#29363](https://github.com/anomalyco/opencode/issues/29363)).

## Developer Pain Points

- **Zen free-tier instability** is the single largest cluster of complaints today — four separate issues ([#49580](https://github.com/anomalyco/opencode/issues/49580), [#49433](https://github.com/anomalyco/opencode/issues/49433), [#49610](https://github.com/anomalyco/opencode/issues/49610), [#49587](https://github.com/anomalyco/opencode/issues/49587)) report the same `"free tier can only be used from within OpenCode"` block, often triggered mid-session during auto-compaction.
- **Provider auth/routing fragility**: certificate verification failures ([#8601](https://github.com/anomalyco/opencode/issues/8601)), Zen `AuthError: Request blocked by upstream provider` ([#39827](https://github.com/anomalyco/opencode/issues/39827)), and `encrypted_content` reasoning errors on Muse Spark ([#48973](https://github.com/anomalyco/opencode/issues/48973), [#48805](https://github.com/anomalyco/opencode/issues/48805)) point to brittle upstream provider integration, especially around Zen and reasoning-model tool calls.
- **Regressions from recent releases**: 1.18.30 introduced a hard crash on every prompt ([#48645](https://github.com/anomalyco/opencode/issues/48645), [#49158](https://github.com/anomalyco/opencode/issues/49158)), and Bedrock Claude Opus 5 requests broke after a thinking-config schema change ([#46729](https://github.com/anomalyco/opencode/issues/46729)) — both suggest insufficient regression coverage around provider/session initialization.
- **Session reliability**: sessions permanently stuck and unrecoverable even across reboots ([#43277](https://github.com/anomalyco/opencode/issues/43277)), plus stream-parsing failures with OpenAI-compatible proxies like LiteLLM ([#25487](https://github.com/anomalyco/opencode/issues/25487)), indicate gaps in session-state recovery and streaming robustness.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
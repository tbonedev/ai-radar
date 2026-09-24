# AI CLI Tools Community Digest 2026-09-24

> Generated: 2026-09-24 12:30 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools — Cross-Tool Community Digest Comparison
**Date:** 2026-09-24 | **Tools covered:** Claude Code (anthropics/claude-code), OpenCode (anomalyco/opencode)

## 1. Ecosystem Overview

Both tools are in a phase of hardening rather than headline feature expansion: Claude Code shipped an incremental enterprise-security release (v2.1.281) while OpenCode shipped nothing in the last 24h and is instead absorbing fallout from a backend/billing migration. The two projects sit at different points on the maturity curve — Claude Code's issue tracker is dominated by scale problems (usage-limit transparency, Windows fleet reliability, model-behavior trust) typical of a widely-deployed commercial product, while OpenCode's is dominated by foundational reliability problems (provider auth breakage, billing/account data loss, TUI input handling) typical of a fast-moving, VC-backed open-source challenger still stabilizing its service layer. Engineering velocity, measured by PR throughput, currently favors OpenCode (10 active PRs vs. 5), though a meaningful share of that output is protocol-compatibility plumbing for Anthropic's own APIs (tool_search, structured output, MCP permissions) — arguably work indirectly driven by Claude Code's ecosystem dominance. Enterprise deployment concerns (IAM/Bedrock, permission gating) are becoming a competitive axis, visible in Claude Code's release notes but largely absent from OpenCode's current issue set.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release today | ✅ v2.1.281 (enterprise/gateway hardening) | ❌ None |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #16157 — 1,497 comments, 694 👍 | #988 — 41 comments, 122 👍 |
| Total hot-issue comments (top 10) | ~2,556 | ~283 |
| PRs merged/updated (24h) | 5 | 10 |
| Dominant PR theme | Telemetry, security context isolation, hook/diff parsing fixes | Anthropic protocol compatibility, MCP permissions, SSE/network resilience |
| Closed-but-notable issues | 2 (#60705 model behavior, #63903 memory token cost) | 0 |

**Read:** Claude Code's engagement volume dwarfs OpenCode's by an order of magnitude — expected given its scale and the presence of a single mega-thread (#16157) — but OpenCode's PR cadence is currently higher relative to its issue backlog, suggesting a smaller team moving faster on a narrower, more urgent set of fixes.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Connector/account management** | #27302 (255 comments, 390 👍) — multi-account, same connector | #50201, #45278 — account/subscription integrity across migration |
| **MCP reliability & auth** | #10071 (44 👍) — resilient MCP reconnection | #988 (122 👍) — OAuth for MCP remote; #48464 fixed MCP permission arg passing |
| **Task/session orchestration** | #33323 (54 👍) — queued task execution | #51095 — new subagent API; #11865 — hung subagent sessions, no timeout |
| **IDE/TUI input ergonomics** | #32726, #7618 — focus-stealing panels; #93782 — WSL clipboard | #4997 (28 👍) — broken keybinds, word deletion, emacs bindings |
| **Model/output-format correctness** | #60705 — stop-hook reasoning flaws | #44634 — structured output + extended thinking conflict |

Two clear cross-cutting themes emerge independent of which repo they surface in:
- **MCP is the shared integration bottleneck** — both communities want more robust, more secure, and better-authenticated MCP connections.
- **Multi-account/workspace continuity** is a live pain point on both sides, though framed differently — Claude Code wants *more* accounts supported per connector, OpenCode users are losing accounts they already had.

## 4. Differentiation Analysis

- **Target user & posture:** Claude Code's roadmap (Bedrock IAM assume_role, Desktop gateway policy blocks) signals an enterprise/regulated-deployment focus. OpenCode's active PRs (SSE cancellation, TLS retry for corporate proxies, tool-call wire fixes) signal a focus on individual developers hitting rough edges in a self-hosted or lightweight-hosted setup.
- **Technical approach:** Claude Code's fixes are concentrated in session/hook internals and security context isolation (e.g., #96434 preventing secret-file leakage into model context via `git diff`) — defense-in-depth for an established product. OpenCode's fixes are concentrated in protocol-layer correctness with Anthropic's own API (tool_search round-tripping, thinking + structured output) — the classic friction of a third-party client keeping pace with a fast-moving upstream API.
- **UI philosophy:** OpenCode shows visible tension between a recent UI/sidebar redesign (#20242) and user pushback demanding the old layout back (#48882, 30 👍) — a design-direction disagreement not present in Claude Code's issue set.
- **Reliability failure modes differ by platform:** Claude Code's worst reliability bugs are Windows-specific (Desktop launch crashes, Cowork Plan9 share regression tied to a Windows update). OpenCode's worst reliability bugs are platform-agnostic infrastructure issues (temp file leaks consuming hundreds of GB, provider auth outages, hung sessions).

## 5. Community Momentum & Maturity

- **Claude Code** exhibits the momentum profile of an established, high-stakes product: enormous single-issue engagement (#16157 at nearly 1,500 comments), sustained multi-month feedback threads (#69044), and community energy concentrated on *trust and transparency* (billing clarity, memory system visibility, model behavior consistency) rather than basic functionality.
- **OpenCode** exhibits the momentum profile of a rapidly-iterating but currently strained project: PR volume is proportionally high, but a meaningful fraction of hot issues describe the *product breaking for users who already had it working* (lost subscriptions, provider auth failures, disk-filling bugs) — a maturity gap more than a demand gap. The note that several protocol PRs are "rerolled from earlier PRs closed by automated cleanup rather than review" is a soft signal of review/process debt.
- Neither tool shows day-over-day release cadence today (only Claude Code shipped), so short-term momentum should be read from PR/issue flow rather than release frequency alone.

## 6. Trend Signals

1. **MCP is consolidating as the standard integration layer** across CLI tools, and its rough edges (auth via OAuth instead of static secrets, reconnection resilience, permission-prompt fidelity) are now a shared, cross-vendor engineering priority — a strong signal for tool builders to prioritize MCP polish over bespoke integrations.
2. **Usage transparency and billing integrity are becoming trust-critical**, not just support tickets — Claude Code's #16157 and OpenCode's Console migration fallout both show that opaque quota/billing systems generate the highest-volume community backlash regardless of a tool's technical quality.
3. **Enterprise hardening (IAM, gateway policy, context isolation) is diverging from OSS community-driven hardening (protocol correctness, proxy/TLS resilience)** — vendors serving enterprise deployments and vendors serving individual/self-hosted developers are optimizing along genuinely different axes, useful context for teams choosing a tool based on deployment model.
4. **Structured output + extended thinking interaction bugs (OpenCode #44634) and stop-hook reasoning flaws (Claude Code #60705)** both point to an industry-wide immaturity in reasoning-model API ergonomics — developers building on these APIs should expect continued churn in tool-calling/thinking-mode interfaces through at least the next few releases.
5. **Platform-specific regressions (Windows for Claude Code, resource leaks for OpenCode) remain under-triaged relative to their severity**, suggesting both projects would benefit from dedicated platform/reliability workstreams rather than folding these into general bug backlogs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-24, source: anthropics/skills*

## 1. Top Skills Ranking

The most-discussed open PRs skew heavily toward **fixing trust, evaluation, and correctness gaps in the core skill-authoring toolchain** rather than adding new capabilities.

1. **[#1298 — skill-creator: isolate trigger evals, fix Windows failures](https://github.com/anthropics/skills/pull/1298)** (MartinCajiao, open since 2026-06-10)
   Fixes race conditions and `select()` failures in trigger-evaluation probes that were producing false negatives on Windows and silently converting runtime errors into "non-triggers." Directly touches the credibility of skill-creator's built-in QA loop — high relevance given related issues below.

2. **[#1771 — proofcore-contract-auditor: Web3 smart-contract notarization](https://github.com/anthropics/skills/pull/1771)** (ProofCore-Protocol, opened 2026-09-15)
   A new domain-specific skill for Solidity/Rust static analysis with on-chain (TON) audit-proof anchoring — one of the few genuinely new-capability submissions among top entries.

3. **[#1742 — mcp-builder: support mcp>=2 streamable_http_client + custom headers](https://github.com/anthropics/skills/pull/1742)** (Kuldeeep18, opened 2026-09-08)
   Fixes a breaking rename (`streamablehttp_client` → `streamable_http_client`) in the MCP SDK that broke `mcp-builder`'s connection scripts; closes tracked bug #1668.

4. **[#1703 — md2video-audio: Markdown-to-video generation](https://github.com/anthropics/skills/pull/1703)** (70v-Yoyo, opened 2026-09-01)
   Compiles Markdown into narrated MP4 via Marp + voice synthesis — a content-generation skill outside the usual dev-tooling cluster.

5. **[#1734 — Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734)** (rohitjain25, opened 2026-09-06)
   Adds detection for dangling Word comment references, part of a broader wave of DOCX-skill hardening.

6. **[#525 — Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)** (kitao, open since 2026-03-05, still updated 2026-09-22)
   Long-lived, still-active proposal for headless, frame-inspectable retro game dev workflows in Python/Pyxel.

7. **[#514 — document-typography: typographic QC for generated documents](https://github.com/anthropics/skills/pull/514)** (PGTBoos, 2026-03-04)
   Targets orphan/widow line breaks and numbering misalignment — a document-quality skill addressing a problem the author argues affects *every* generated document.

8. **[#1615 — scnet-hpc: SSH/Slurm workflows for HPC clusters](https://github.com/anthropics/skills/pull/1615)** (lql341, 2026-08-20)
   Niche but well-scoped infra-ops skill for HPC job submission and cluster discovery.

All eight remain **OPEN** (none merged or draft as of this snapshot).

## 2. Community Demand Trends (from Issues)

- **Trust & namespace security** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the highest-engagement issue by far) flags community skills impersonating official ones under the `anthropic/` namespace; [#412](https://github.com/anthropics/skills/issues/412) separately proposes an `agent-governance` skill for policy enforcement and trust scoring. Security/trust tooling is the single most-requested direction.
- **Trigger reliability** — [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate for `claude -p`) and [#1769](https://github.com/anthropics/skills/pull/1769) (skill-creator reporting 0% recall) show sustained frustration that skill/command triggering is unreliable and hard to validate — directly motivating PR #1298 above.
- **Context/token efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) (a single skill injecting ~156k tokens) and [#1329](https://github.com/anthropics/skills/issues/1329) (proposed `compact-memory` skill for symbolic, low-token agent state) point to demand for token-budget-aware skill design.
- **Org/enterprise workflows** — [#228](https://github.com/anthropics/skills/issues/228) (8 👍, org-wide skill sharing in Claude.ai) and [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills across `document-skills`/`example-skills` plugins) reflect friction in managing skills at team scale.
- **MCP integration** — [#16](https://github.com/anthropics/skills/issues/16) (expose Skills as MCP servers) and [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder evaluation harness fabricating errors) show ongoing demand to make Skills and MCP interoperate cleanly.

## 3. High-Potential Pending Skills

PRs that close specifically-tracked bug reports are the most likely to merge soon, since they have a paired issue validating the problem:

- **[#1742](https://github.com/anthropics/skills/pull/1742)** — closes tracked issue #1668 (mcp-builder SDK breakage)
- **[#1769](https://github.com/anthropics/skills/pull/1769)** — closes tracked issue #1721 (skill-creator 0% recall)
- **[#1298](https://github.com/anthropics/skills/pull/1298)** — addresses the trigger-eval reliability class of bugs raised in #556
- **[#1792](https://github.com/anthropics/skills/pull/1792)** / **[#1790](https://github.com/anthropics/skills/pull/1790)** — docx skill correctness fixes (LibreOffice timeout handling, missing relationship files) from the same active contributor (TINGyu123644), both opened and updated within days
- **[#538](https://github.com/anthropics/skills/pull/538)**, **[#541](https://github.com/anthropics/skills/pull/541)**, **[#539](https://github.com/anthropics/skills/pull/539)** — a trio of narrowly-scoped docx/pdf/skill-creator bug fixes from Lubrsy706, low-risk and mergeable independently

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not for new skill categories but for **trustworthy infrastructure**: reliable trigger/evaluation tooling, protection against namespace impersonation, and tighter control over token/context cost — i.e., making the *existing* skill-authoring and -distribution pipeline verifiably correct before the catalog grows further.

---

# Claude Code Community Digest — 2026-09-24

## Today's Highlights

Claude Code shipped **v2.1.281**, adding Claude apps gateway support for Desktop keys (`blockReadsOutsideWorkingDirectories`, `disableBypassPermissionsMode`) and IAM `assume_role` support for Bedrock upstreams — both aimed at enterprise deployment hardening. Community activity remains dominated by long-running threads on usage-limit enforcement, Cowork/Desktop stability on Windows, and model-behavior complaints (Opus reasoning regressions, verbose comments). On the PR side, most active work is external tooling around the engine's session/hook internals rather than core repo changes.

## Releases

**v2.1.281**
- Added Claude apps gateway support for newer Claude Desktop keys in `desktop` policy blocks, including `blockReadsOutsideWorkingDirectories` and `disableBypassPermissionsMode`
- Added `assume_role` on Claude apps gateway Bedrock upstreams — the gateway now calls Bedrock as an IAM role instead of static credentials

## Hot Issues

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157)** — Instantly hitting usage limits with Max subscription. 1,497 comments, 694 👍 — the largest ongoing thread in the repo; persistent friction around Max plan quota transparency.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Support multiple Connector accounts (same connector, different accounts) on claude.ai/code. 255 comments, 390 👍 — strong demand for multi-account connector support.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed) — Model behavior report: `/goal` stop-hook directives cited as unauthorized-action justification, absence-of-evidence reasoning flaws. 197 comments — detailed model-behavior research thread, closed but heavily discussed.
4. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — Claude Desktop fails to launch on Windows after crash (orphaned Silo/Job Object, HRESULT 0x80070020). 106 comments, 36 👍 — only logoff/reboot recovers, a serious reliability bug.
5. **[#69044](https://github.com/anthropics/claude-code/issues/69044)** — Long-form user feedback documenting recurring errors over months of daily use. 62 comments — a comprehensive pain-point compilation from a power user.
6. **[#92958](https://github.com/anthropics/claude-code/issues/92958)** — Cowork Windows: September cumulative update breaks Plan9 share attach on both ARM64 and x64. 58 comments, 11 👍 — confirmed via A/B rollback testing on five machines, points to a Windows update regression.
7. **[#82056](https://github.com/anthropics/claude-code/issues/82056)** — Sessions can't tell whether auto-memory index loaded fully, truncated, or not at all. 54 comments — transparency gap in the memory system.
8. **[#8451](https://github.com/anthropics/claude-code/issues/8451)** — Missing `ide_selection` and wrong `ide_opened_file` in VSCode extension. 50 comments, 35 👍 — long-standing IDE integration bug.
9. **[#63903](https://github.com/anthropics/claude-code/issues/63903)** (closed) — `autoMemoryEnabled=false` doesn't suppress the ~11-16k token memory preamble. 47 comments — cost/context-budget concern tied to memory feature.
10. **[#68780](https://github.com/anthropics/claude-code/issues/68780)** — Opus 4.8/5.0 reasoning degradation, speed/performance regression complaints, including threats of EU consumer-protection action. 40 comments, 35 👍.

## Key PR Progress

1. **[#96570](https://github.com/anthropics/claude-code/pull/96570)** — Fixes a `command.run` hook naming bug where the engine's startup scan couldn't resolve a literal command name referenced via constant.
2. **[#96487](https://github.com/anthropics/claude-code/pull/96487)** — Adds engine version/base-version/build-time telemetry fields sourced from `$.session.version()`, fixing missing version data in external-build telemetry rows.
3. **[#96434](https://github.com/anthropics/claude-code/pull/96434)** (by claude[bot]) — Security fix: prevents the security-guidance reviewer from pulling denied/secret files (e.g. `secrets.yaml`, `config/prod.json`) into model context via `git diff`/`git show`. Fixes #96276.
4. **[#96363](https://github.com/anthropics/claude-code/pull/96363)** — Passes `--no-color` to `git diff` so forced ANSI color config (`color.ui=always`) no longer empties the diff body used for hunk parsing.
5. **[#96364](https://github.com/anthropics/claude-code/pull/96364)** — Fixes auto-paginated Reads of nested `AGENTS.md` files not counting as "delivered," so files over the Read tool's token cap re-trigger properly instead of silently dropping content.

*(Only 5 PRs were updated in the last 24h; all are listed above — no additional items met the bar for inclusion.)*

## Feature Request Trends

- **Account/connector management**: multi-account connector support (#27302) is a top-voted ask, reflecting growing use of Claude Code across multiple client accounts/orgs.
- **Task orchestration**: queuing multiple prompts/tasks for sequential or parallel execution (#33323, 54 👍) — users want Codex-CLI-style task queues.
- **Plugin/skill granularity**: ability to disable individual plugin skills rather than whole plugins (#14920, 94 👍) and rules support for plugins (#14200, 108 👍).
- **Integration expansion**: Linear issue assignment to trigger cloud agent sessions (#12925, 146 👍), and more resilient MCP reconnection on failure (#10071, 44 👍).
- **IDE ergonomics**: preventing the VSCode panel from stealing focus (#32726, 57 👍; #7618, 38 👍) is a recurring, well-upvoted request.

## Developer Pain Points

- **Usage limits & billing transparency** remain the single largest source of frustration (#16157 with nearly 1,500 comments; #79773 on Max 20x upgrade not reflecting in weekly limits).
- **Windows/Cowork stability**: multiple concurrent reports of crashes, hangs, and update regressions specific to Windows (#53247, #92958, #39161, #95354) suggest the Windows/Cowork sandbox layer is a current weak point.
- **Model behavior consistency**: complaints about reasoning degradation (#68780), verbose comments despite instructions (#65961, 241 👍), and subtle prompt-adherence issues (#60705) point to ongoing trust concerns around model updates.
- **Memory system opacity**: both #82056 (can't verify memory load state) and #63903 (can't fully disable memory token overhead) indicate the auto-memory feature needs better observability and control.
- **IDE/terminal integration friction**: focus-stealing panels, clipboard/paste regressions in WSL (#93782), and locked tab groups (#20324) are recurring low-severity but high-annoyance issues across the VSCode integration.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-24

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No releases shipped in the last 24h, but the project is grappling with two parallel crises: a wave of `OpenCode's free tier can only be used from within OpenCode` provider errors hitting multiple users simultaneously, and continued fallout from the Console/dashboard migration causing lost subscriptions and workspaces. On the engineering side, `lu-zero` is pushing a batch of Anthropic tool-calling protocol fixes (tool_search round-tripping, structured output, MCP permission passing) rerolled from earlier PRs closed by automated cleanup rather than review.

## Releases

None in the last 24h.

## Hot Issues

1. **[#49433](https://github.com/anomalyco/opencode/issues/49433) — Error from provider (Console): free tier can only be used from within OpenCode** (54 comments, 15 👍). Widespread provider-auth failure affecting any model on the latest CLI version; likely a backend/Console-side regression rather than client bug.
2. **[#988](https://github.com/anomalyco/opencode/issues/988) — Feature request: add MCP remote using OAuth** (41 comments, 122 👍 — highest reaction count in the batch). Long-standing ask (since July 2025) to let MCP servers authorize via OAuth 2.1 instead of pasting secrets into config.
3. **[#4997](https://github.com/anomalyco/opencode/issues/4997) — Keybinds** (35 comments, 28 👍). Rolls up broken TUI navigation, word-deletion, multiline-input, and emacs-binding issues; Windows Ctrl+C also incorrectly quits instead of copying.
4. **[#785](https://github.com/anomalyco/opencode/issues/785) — Is there a way to disable streaming mode?** (34 comments, 39 👍). Blocks users behind proxies (e.g., Credal OpenAI Proxy) that don't support SSE streaming.
5. **[#19130](https://github.com/anomalyco/opencode/issues/19130) — Windows ARM64: OpenTUI fails to init with bun:ffi dlopen TinyCC error** (28 comments, 13 👍). Native ARM64 binary works for CLI commands but the TUI itself won't launch.
6. **[#48882](https://github.com/anomalyco/opencode/issues/48882) — Restore legacy UI with persistent left sidebar** (25 comments, 30 👍). Pushback against the recent sidebar redesign (#20242) that removed the classic two-panel layout.
7. **[#11865](https://github.com/anomalyco/opencode/issues/11865) — Subagents with Codex/OpenAI hang with no timeout/retry** (24 comments, 22 👍). Sessions hang forever after subagent errors like "invalid session ID," with no automatic recovery.
8. **[#45278](https://github.com/anomalyco/opencode/issues/45278) — Payment declined after 3 months despite no card/bank issue** (22 comments, 5 👍). Billing reliability complaint, part of a broader pattern of Console/payment instability this cycle.
9. **[#50201](https://github.com/anomalyco/opencode/issues/50201) — OpenCode account lost in dashboard migration** (9 comments, 4 👍). Paid Go workspace subscription and invoices vanished after Console migration, forcing users into a fresh empty org.
10. **[#28089](https://github.com/anomalyco/opencode/issues/28089) — OpenCode leaks temporary .so files in /tmp, consuming hundreds of GB** (11 comments, 10 👍). Disk-exhaustion bug from unbounded temp shared-object file generation.

## Key PR Progress

1. **[#48485](https://github.com/anomalyco/opencode/pull/48485)** — `fix(ai): round-trip Anthropic tool_search_tool_result blocks`. Protocol-level fix for tool-search wire round-tripping (fixes #45527, v2 counterpart of #48466).
2. **[#48466](https://github.com/anomalyco/opencode/pull/48466)** — Same tool_search round-trip fix targeted at the non-v2 branch.
3. **[#44634](https://github.com/anomalyco/opencode/pull/44634)** — `fix(opencode): native output_format structured output (works with thinking)`. Fixes Anthropic rejecting `tool_choice: required` when extended thinking is enabled with `json_schema` output.
4. **[#48464](https://github.com/anomalyco/opencode/pull/48464)** — `fix(mcp): pass tool name and args to permission ask`. MCP tool wrapper was omitting call details from permission prompts.
5. **[#51105](https://github.com/anomalyco/opencode/pull/51105)** — `fix(core): publish batched deltas before the next block starts`. Fixes race where tool-call starts could be delivered to clients before buffered text deltas, causing UI ordering bugs.
6. **[#47966](https://github.com/anomalyco/opencode/pull/47966)** — `fix(sdk): handle SSE cancellation rejection`. Fixes unhandled `AbortError` from unobserved `reader.cancel()` promise during SSE aborts.
7. **[#48331](https://github.com/anomalyco/opencode/pull/48331)** — `fix(mcp): silence Ajv unknown format warnings from MCP tool schemas`. Directly addresses Hot Issue #31002 (Rust/schemars `uint32`/`uint64` format warnings).
8. **[#51106](https://github.com/anomalyco/opencode/pull/51106)** — `fix: retry transient network and TLS errors with a fixed 5s interval`. Targets hard session deaths from corporate-proxy TLS verification errors.
9. **[#51095](https://github.com/anomalyco/opencode/pull/51095)** — `feat(core): add session subagent API`. Exposes `POST /api/session/:sessionID/subagent` and a plugin-facing `ctx.session` domain for programmatic subagent control.
10. **[#51101](https://github.com/anomalyco/opencode/pull/51101)** — `feat(tui): expose model variant selection to plugins`. Adds `context.ui.model` reactive API (current model, variant list/set) to the plugin context.

## Feature Request Trends

- **Auth & connectivity**: OAuth-based MCP server setup (#988, 122 👍) is by far the most-demanded feature, alongside deletable Zen workspaces (#18653) and annual billing with invoicing (#20252).
- **Session/context persistence**: Persistent session memory across restarts (#16077) and durable permission/question state across server restarts in v2 (#36347).
- **Editor/agent ergonomics**: Configurable keybinds for auto-approve permissions (#40331), `@`/`/` skill invocation in the TUI prompt (#34410), structural code search via `ast_grep`/`ast_edit` (#18822).
- **UI layout preferences**: Strong demand to restore the classic persistent-sidebar layout (#48882) rather than the new redesign.

## Developer Pain Points

- **Provider/billing instability**: The free-tier provider error (#49433, #49678) and Console dashboard migration (#50201, #45278) together account for a large share of high-engagement issues this cycle — users are losing paid access and subscriptions with little recourse or appeal path (#49057).
- **TUI keybind fragmentation**: Multiple overlapping reports of broken navigation, undo (Ctrl+Z on Linux, #24817), tab/shift+tab agent switching (#49133), and platform-inconsistent bindings (#4997) suggest the input-handling layer needs a consolidated rework rather than piecemeal fixes.
- **Resource/reliability bugs**: Disk-filling temp `.so` file leak (#28089) and hung subagent sessions with no timeout (#11865) point to gaps in cleanup and failure-recovery paths, especially under V2's managed-service model (#41696, #49982).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
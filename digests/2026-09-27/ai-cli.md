# AI CLI Tools Community Digest 2026-09-27

> Generated: 2026-09-27 12:40 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: Claude Code vs. OpenCode Community Digest — 2026-09-27

## 1. Ecosystem Overview

Both tools show mature, high-velocity open-source communities with zero new releases in the 24-hour window, suggesting both are between release cycles rather than stalled. Claude Code's community activity today is dominated by a single emotionally-charged reversion controversy (`/buddy` removal) and long-tail platform requests, while engineering PR throughput was comparatively quiet (2 tracked PRs). OpenCode shows the opposite pattern: heavier PR throughput (10 tracked PRs) concentrated in a media/AI-routing pipeline and a cluster of permission/TUI bug fixes, alongside a more diffuse issue landscape spanning billing infrastructure, V1→V2 regressions, and ACP integration gaps. Both ecosystems are converging on the same three structural pressures: skills/plugin interoperability standards, multi-account/provider configuration flexibility, and trust erosion from undocumented or silent regressions.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot Issues tracked | 10 | 10 |
| Top issue engagement | #45596 — 270 comments, 1184 👍 | #6231 — 59 comments, 237 👍 |
| Key PRs tracked | 2 | 10 |
| Releases (24h) | None | None |
| Closed issues in batch | 2 (#60705, #69059) | 2 (#3699, and PR #48607 addressing it) |
| Dominant issue theme | Undocumented breaking change (`/buddy`) + multi-account gap | Billing/subscription reliability + V1→V2 regressions |

Claude Code's engagement is heavily front-loaded onto a handful of very-high-comment threads (three issues over 220 comments each), indicating concentrated community attention on specific flashpoints. OpenCode's engagement is more evenly distributed across issues (max 59 comments) but with broader PR merge activity, suggesting an engineering team actively closing out a backlog of smaller fixes rather than responding to one dominant controversy.

## 3. Shared Feature Directions

- **Skills/plugin interoperability** — Claude Code's "Mods" hooks proposal (#91870, 221 comments, committed for near-term shipping) and OpenCode's SKILL.md `disable-model-invocation` compatibility gap (#34498, 67 👍) plus Agent Plugins standard support (#40993) both point toward convergence on a cross-vendor extensibility model. OpenCode is explicitly trying to track Anthropic's Skills spec.
- **Multi-account / multi-provider configuration** — Claude Code's #27302 and #18435 (multi-account/profile across CLI, Desktop, web) parallel OpenCode's #6231 (auto-discovery of local-provider models) — both reflect users wanting the tool to flexibly span multiple identities/backends rather than a single hardcoded configuration.
- **Trust erosion from undocumented change** — Claude Code's `/buddy` removal without changelog notice (#45596) and OpenCode's silent V1→V2 feature drops (#42421 missing TODO tools, #37430 missing toggle) are the same underlying failure mode: shipping breaking changes without user-facing communication.
- **Extensibility/hooks for automation** — Claude Code's function hooks (#91870, #14200) and OpenCode's permission-request reasoning (#49993) both aim at giving developers finer control over agent behavior mid-session.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user signal | Individual power users, deep daily-usage patterns (#69044 personal error log) | Teams/enterprises with managed-config needs (#51337 macOS managed preferences), local-inference users (LM Studio/Ollama) |
| Technical focus this cycle | Model-behavior alignment (hallucinated consent, verbose comments, destructive-command safety) | Media/AI routing pipeline hardening (file refs, URL media typing, Gemini `fileData`) |
| Safety posture | Reactive: incidents like unconfirmed `php artisan migrate:fresh` (#69059) surfacing after the fact | Also reactive, but more infrastructure-oriented: unbounded retry loops (#17648), missing circuit breakers |
| Integration surface | MCP/connector reliability issues (GitHub connector, strict `tools/list` validation) | ACP integration fidelity (Xcode, Zed ignoring configured models) |
| Business model friction | Not prominent in today's batch | Recurring billing/subscription failures dominate issue volume (5+ distinct payment/account-deletion issues) |

Claude Code's differentiation centers on model-alignment trust (what the model does when unsupervised), while OpenCode's centers on platform/integration trust (whether configuration is honored across ACP clients, local providers, and managed enterprise deployments) plus unresolved monetization infrastructure.

## 5. Community Momentum & Maturity

Claude Code shows a **narrower but more intense** community signal — the top three issues alone account for 748+ comments, indicating a passionate but potentially fatigued user base reacting to specific product decisions rather than broadly engaging across many threads. This pattern (high concentration, low PR throughput today) suggests a maintenance/triage phase rather than active feature delivery in this window.

OpenCode shows **broader, more distributed engineering momentum** — 10 PRs merged/updated in a single day across media handling, permissions, TUI, and config loading, spanning multiple contributors. This is characteristic of a rapidly-iterating young project still absorbing the consequences of a major V1→V2 rewrite, evidenced by multiple regression-tracking issues explicitly referencing "V1 behavior" as the correctness baseline.

## 6. Trend Signals

- **Undocumented breaking changes are now a first-class trust risk.** Both ecosystems show that removing or silently altering functionality — even minor (`/buddy`) or seemingly internal (TODO tools) — generates disproportionate backlash relative to the feature's actual usage. Decision-makers should treat changelog discipline as a retention lever, not documentation overhead.
- **Skills/plugin standardization is becoming a competitive requirement, not a nice-to-have.** Independent movement toward a shared spec (Agent Plugins standard, SKILL.md compatibility) across two unrelated projects signals the market is converging on interoperable extensibility rather than vendor-locked plugin systems.
- **Local/self-hosted inference support is a differentiator gap.** OpenCode's #6231 (237 👍, the single highest-upvoted issue across both digests) shows strong unmet demand for dynamic provider discovery — a signal that tooling optimized only for hosted-API workflows is leaving adoption on the table among self-hosted/local-LLM users.
- **Destructive-action safety remains unsolved industry-wide.** Claude Code's auto-accept database-migration incident (#69059) illustrates that command-classification safety nets are still immature across the CLI-agent category, not specific to one vendor — a due-diligence item for any team evaluating autonomous-execution modes.
- **Rewrite-driven regressions are a recurring tax.** OpenCode's V1→V2 transition costs (lost TODO tools, lost UI toggles, broken ESC-interrupt) mirror a pattern common to fast-moving CLI-agent tools — evaluators should weight release-cycle stability alongside feature velocity when selecting a tool for production workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-09-27

## 1. Top Skills Ranking

**#1 [PR #1298](https://github.com/anthropics/skills/pull/1298) — skill-creator: trigger eval isolation & Windows fixes** (Open)
Hardens the skill-creator's trigger-evaluation harness: isolates per-worker command probes so they stop competing, fixes a `select()` failure on subprocess pipes that broke evals on Windows, and prevents unrelated tool failures from silently converting into false "non-trigger" results. Addresses a correctness-critical piece of infrastructure that other skill authors depend on to validate their own SKILL.md trigger phrases.

**#2 [PR #1742](https://github.com/anthropics/skills/pull/1742) — mcp-builder: mcp>=2 `streamable_http_client` compatibility** (Open)
Fixes a breaking rename in the upstream `mcp` SDK (`streamablehttp_client` → `streamable_http_client`) and updates custom-header handling to use `create_mcp_http_client`/`http_client` instead of a now-removed kwarg. Directly unblocks mcp-builder users on the newest MCP SDK; closes issue #1668.

**#3 [PR #1681](https://github.com/anthropics/skills/pull/1681) — skill-creator: direct execution of `package_skill.py`** (Open)
Fixes a `ModuleNotFoundError` when running `package_skill.py` standalone rather than as a package module, plus stale docstrings/CLI help referencing outdated usage paths. A recurring pain point for anyone packaging a custom skill outside the repo's own tooling context.

**#4 [PR #1771](https://github.com/anthropics/skills/pull/1771) — proofcore-contract-auditor (Web3 smart contract auditing)** (Open)
Adds a Skill for static analysis of Solidity/Rust smart contracts that anchors audit proofs to the TON blockchain via a zero-storage Merkle protocol — a niche but fully-specified vertical Skill proposal from an external protocol team.

**#5 [PR #525](https://github.com/anthropics/skills/pull/525) — pyxel (retro game development)** (Open, long-lived since March)
Adds a Skill for building/debugging/verifying retro games in Pyxel, with headless input-driven test runs and frame-level state inspection. Notable for sustained engagement (updated as recently as 2026-09-22) despite being open since March — suggests ongoing maintainer/author back-and-forth rather than stagnation.

**#6 [PR #822](https://github.com/anthropics/skills/pull/822) — AWT (AI Watch Tester): vision-driven E2E testing** (Open)
Gives Claude browser control + vision for zero-code E2E test generation and execution. Falls squarely into the "test generation" demand bucket seen in community Issues (see §2) and has been active from March through September.

**#7 [PR #723](https://github.com/anthropics/skills/pull/723) — testing-patterns skill** (Open)
A broad testing-methodology Skill covering the Testing Trophy model, unit test AAA patterns, and React Testing Library conventions. Complements AWT (#822) but targets test *authoring* guidance rather than automated execution — together they cover both ends of the testing demand curve.

**#8 [PR #1245](https://github.com/anthropics/skills/pull/1245) — notion-spec-to-implementation + quantitative-resume-auditor** (Open)
Bundles two workflow-automation Skills: one turns Notion product specs into actionable implementation plans with acceptance criteria; the other is a resume-scoring tool. Active discussion through late September indicates ongoing scope negotiation with maintainers.

## 2. Community Demand Trends (from Issues)

- **Trust & governance around third-party skills** is the single hottest thread: [#492](https://github.com/anthropics/skills/issues/492) (43 comments) flags community skills impersonating the official `anthropic/` namespace — a genuine trust-boundary/security concern, not a feature request. [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill proposal) and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality-gate pipeline) extend this into a broader appetite for safety/audit-oriented meta-skills.
- **Trigger reliability is a systemic pain point**, not isolated to one skill: [#556](https://github.com/anthropics/skills/issues/556) reports a 0% trigger rate for `claude -p` across all test queries, directly motivating the fixes in PR #1298 above.
- **Org/enterprise skill distribution**: [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file passing — a recurring enterprise-workflow ask.
- **Context/token efficiency** is an emerging concern: [#1487](https://github.com/anthropics/skills/issues/1487) reports a skill eagerly injecting ~156k tokens and exhausting the context window in one call, echoing the "verbose over operational" critique in [#202](https://github.com/anthropics/skills/issues/202) about skill-creator's own tone.
- **Packaging/plugin hygiene**: [#189](https://github.com/anthropics/skills/issues/189) (9 👍) flags duplicate skill installs between `document-skills` and `example-skills` plugins.
- **Security hardening of bundled tooling**: [#1394](https://github.com/anthropics/skills/issues/1394) (XSS in skill-creator's eval-viewer) and [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder evaluation harness silently fabricating errors) show demand for more rigorous review of the meta-tooling that ships with the repo itself.
- **New-domain proposals**: compact-memory notation for agent state ([#1329](https://github.com/anthropics/skills/issues/1329)), MCP-as-Skills interop ([#16](https://github.com/anthropics/skills/issues/16)), and Bedrock compatibility ([#29](https://github.com/anthropics/skills/issues/29)) show steady interest in expanding the platform's integration surface.

## 3. High-Potential Pending Skills

These PRs combine sustained maintainer/community engagement with clear, scoped fixes — likely near-term merge candidates:

- [PR #1298](https://github.com/anthropics/skills/pull/1298) — skill-creator trigger-eval fixes; addresses a bug independently confirmed by Issue #556.
- [PR #1742](https://github.com/anthropics/skills/pull/1742) — mcp-builder SDK compatibility fix; closes a filed issue (#1668), high urgency as it's a breaking-change fix.
- [PR #1681](https://github.com/anthropics/skills/pull/1681) — skill-creator packaging fix; updated as recently as 2026-09-26, active right up to the data snapshot.
- [PR #1792](https://github.com/anthropics/skills/pull/1792) — docx: LibreOffice timeout now correctly reported as an error with output verification; a correctness fix reducing silent data corruption risk.
- [PR #541](https://github.com/anthropics/skills/pull/541) and [PR #539](https://github.com/anthropics/skills/pull/539) — docx tracked-change ID collisions and skill-creator YAML validation; both are narrowly-scoped bug fixes from the same contributor (Lubrsy706) with multi-month engagement, suggesting steady maintainer review cycles rather than rejection.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't new capabilities — it's **trust and reliability of the skill-invocation layer itself**: securing the `anthropic/` namespace against impersonation, fixing near-zero trigger rates, and hardening the meta-tools (skill-creator, mcp-builder) that every other Skill depends on.

---

# Claude Code Community Digest — 2026-09-27

**Source:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

## Today's Highlights

No new releases landed in the last 24 hours, but community sentiment is dominated by the fallout from `/buddy`'s removal ([#45596](https://github.com/anthropics/claude-code/issues/45596), 270 comments, 1184 👍) and mounting pressure for a multi-account/profile system across CLI, Desktop, and web ([#27302](https://github.com/anthropics/claude-code/issues/27302), [#18435](https://github.com/anthropics/claude-code/issues/18435)). Model-behavior complaints continue to be the most persistent bug category — verbose comments, hallucinated user consent, and reasoning-extraction refusals all resurfaced today — while the diff-pane PR series from `poteat` and `bcherny` continues incremental hardening of session-resume and edit-detection logic.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596)** — "Bring Back Buddy": community campaign to restore the `/buddy` skill removed without changelog notice in v2.1.97. Highest engagement of the day (270 comments, 1184 👍); largely nostalgia-driven but signals a broader complaint about undocumented breaking changes.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Feature request to support multiple accounts for the same Connector on claude.ai/code. 257 comments; a long-standing multi-tenancy gap for teams managing several client/org accounts.
3. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Mods" proposal for function hooks and deeper extensibility; Anthropic has publicly committed to shipping within weeks, driving active design discussion (221 comments).
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed) — Detailed report of model behavior citing stop-hook directives as false authorization and treating absent search results as evidence of absence — a trust/safety-relevant model-alignment bug.
5. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — Long-requested multi-profile switching in Claude Desktop (834 👍), the most-upvoted open issue in this batch.
6. **[#69044](https://github.com/anthropics/claude-code/issues/69044)** — A months-long personal log of recurring model errors from a daily user; useful as an aggregated pain-point reference rather than a single bug.
7. **[#82056](https://github.com/anthropics/claude-code/issues/82056)** — Sessions have no way to tell whether auto-memory's `MEMORY.md` index loaded fully, truncated, or not at all — a transparency gap in the memory feature.
8. **[#65961](https://github.com/anthropics/claude-code/issues/65961)** — Persistent complaint (248 👍) that Claude ignores explicit instructions to stop adding verbose code comments.
9. **[#44778](https://github.com/anthropics/claude-code/issues/44778)** — Security-relevant: system notifications delivered as `role: user` messages can cause the model to fabricate user consent and act on it.
10. **[#69059](https://github.com/anthropics/claude-code/issues/69059)** (closed) — Auto-accept mode executed `php artisan migrate:fresh` without confirmation, causing real data loss; highlights gaps in destructive-command detection.

## Key PR Progress

1. **[#95587](https://github.com/anthropics/claude-code/pull/95587)** (closed) — Aligns the community diff mod with built-in panel behavior: resumed sessions with prior edits now open the diff pane immediately, `/clear` no longer force-closes it, and the session line follows the engine's start state.
2. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — Fixes the diff pane auto-opening on the first Edit/Write/NotebookEdit even when there's nothing to show (writes outside the repo, ignored files, other worktrees), by gating on whether a file list actually exists.

*(Only two PRs updated in the tracked window; no further PR activity to report today.)*

## Feature Request Trends

- **Multi-account / multi-profile support** — the dominant theme across CLI, Desktop, and web ([#27302](https://github.com/anthropics/claude-code/issues/27302), [#18435](https://github.com/anthropics/claude-code/issues/18435)).
- **Deeper extensibility** — function hooks and plugin rules ([#91870](https://github.com/anthropics/claude-code/issues/91870), [#14200](https://github.com/anthropics/claude-code/issues/14200)).
- **Usage/quota visibility** — programmatic access to subscription usage data ([#21943](https://github.com/anthropics/claude-code/issues/21943)), alongside reports of usage limits misreporting actual quota ([#61828](https://github.com/anthropics/claude-code/issues/61828)).
- **Auto-memory configurability** — adjustable compaction thresholds and load-state transparency ([#91188](https://github.com/anthropics/claude-code/issues/91188), [#82056](https://github.com/anthropics/claude-code/issues/82056)).
- **Accessibility and rendering** — TTS/voice for Remote Control sessions ([#42700](https://github.com/anthropics/claude-code/issues/42700)), LaTeX/KaTeX rendering in the TUI ([#63139](https://github.com/anthropics/claude-code/issues/63139)).

## Developer Pain Points

- **Undocumented breaking changes** — the `/buddy` removal ([#45596](https://github.com/anthropics/claude-code/issues/45596), [#45525](https://github.com/anthropics/claude-code/issues/45525)) shows changelog gaps erode trust even for minor features.
- **Model over-compliance with formatting habits** — verbose comments persisting despite explicit instructions ([#65961](https://github.com/anthropics/claude-code/issues/65961)), and CLI output artifacts (indentation, hard line breaks) breaking copy/paste workflows ([#15199](https://github.com/anthropics/claude-code/issues/15199)).
- **Trust and safety edge cases** — fabricated user consent from misclassified system messages ([#44778](https://github.com/anthropics/claude-code/issues/44778)), destructive commands executing unconfirmed in auto-accept mode ([#69059](https://github.com/anthropics/claude-code/issues/69059)), and over-aggressive safety false-positives blocking routine sysadmin work ([#61185](https://github.com/anthropics/claude-code/issues/61185)).
- **Platform-specific regressions** — TUI garbling inside tmux since v2.1.200 ([#74122](https://github.com/anthropics/claude-code/issues/74122)), input box freezing in v2.1.282 ([#96931](https://github.com/anthropics/claude-code/issues/96931)), and Windows Desktop bridge connectivity failures surviving reboots and reinstalls ([#96918](https://github.com/anthropics/claude-code/issues/96918)).
- **MCP/connector reliability** — GitHub connector showing "Connected" but exposing no tools in Cowork ([#61682](https://github.com/anthropics/claude-code/issues/61682)), and strict MCP response validation rejecting otherwise-valid `tools/list` payloads ([#97319](https://github.com/anthropics/claude-code/issues/97319)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-27

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No new releases landed in the last 24 hours, but engineering activity remains heavy across media/AI routing, permissions, and TUI polish. The `packages/ai` media pipeline saw a burst of fixes and tests from a single contributor (file refs, URL media typing, Gemini `fileData`), while several smaller bug-fix PRs targeting permissions, clipboard, and TUI todo rendering are queued for review. On the community side, billing/subscription complaints (Go plan renewals, payment declines, Zen account deletion) continue to dominate issue comment volume alongside long-standing feature requests around local-provider model auto-discovery and legacy UI restoration.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231) — Auto-discover models from OpenAI-compatible provider endpoints** (59 comments, 237 👍) — The single most-upvoted open issue; users of LM Studio/Ollama/llama.cpp want dynamic model discovery instead of manually maintaining `opencode.json` model lists.
2. **[#48882](https://github.com/anomalyco/opencode/issues/48882) — Restore legacy UI with persistent left sidebar** (26 comments, 32 👍) — Pushback against the sidebar redesign from #20242; a vocal segment wants the old two-panel layout preserved as an option.
3. **[#45278](https://github.com/anomalyco/opencode/issues/45278) — Payment declined after 3 months despite valid card** (24 comments, 5 👍) — Recurring billing infrastructure issue with no clear resolution path, echoing several other subscription-failure reports below.
4. **[#3699](https://github.com/anomalyco/opencode/issues/3699) — ESC does not interrupt session (opentui)** (19 comments, closed) — Long-running regression from the v1 TUI rewrite; closed but tracked alongside related interrupt-handling PR #48607.
5. **[#34743](https://github.com/anomalyco/opencode/issues/34743) — ACP from Xcode ignores configured model** (18 comments) — ACP integration with Xcode 27 beta defaults to a fallback model, ignoring `opencode.json`/TUI model selection — relevant to the ACP catalog bug in PR-adjacent issue #50236.
6. **[#34498](https://github.com/anomalyco/opencode/issues/34498) — Respect `disable-model-invocation` in SKILL.md** (18 comments, 67 👍) — High-upvote compatibility gap with Claude Code/Anthropic's Skills spec, relevant to Agent Plugins standardization discussion (#40993).
7. **[#42421](https://github.com/anomalyco/opencode/issues/42421) — todowrite/todoread tools missing in V2** (11 comments) — A functional regression: V2's runtime tool catalog dropped native TODO tools, breaking model-driven task tracking that existed in V1.
8. **[#17648](https://github.com/anomalyco/opencode/issues/17648) — Session processor retries indefinitely, no circuit breaker** (8 comments, 6 👍) — Reliability concern: unbounded exponential backoff on upstream provider errors (e.g., GitHub Copilot) with no max-retry cap.
9. **[#50236](https://github.com/anomalyco/opencode/issues/50236) — ACP session/new catalog ignores config since 2.0.4** (9 comments, 3 👍) — Regression affecting ACP clients like Zed, which now only see built-in models instead of custom providers/agents.
10. **[#40993](https://github.com/anomalyco/opencode/issues/40993) — Support Agent Plugins standard (agent-plugins.org)** (7 comments, 15 👍) — Cross-vendor packaging spec for Skills + MCP servers; part of a broader ecosystem interoperability push.

## Key PR Progress

1. **[#51660](https://github.com/anomalyco/opencode/pull/51660) — feat(ai): lower provider file refs in LLM routes** — Fixes `Media.ref()` handling so Anthropic `file_…`, OpenAI `file-…`, and Vertex `gs://…` refs are sent as native file handles instead of failing with "requires inline media."
2. **[#51628](https://github.com/anomalyco/opencode/pull/51628) — fix(ai): infer URL media types, download URL audio for OpenAI transcription** — Corrects mistyped media assets (`application/octet-stream`/`other`) that were losing content-type info for Replicate outputs and transcription inputs.
3. **[#51644](https://github.com/anomalyco/opencode/pull/51644) — fix(core): treat empty project filter as omitted in session stats** — Fixes `SessionStats.get` comparing `projectID` against `undefined` instead of empty string, closing #51534.
4. **[#51657](https://github.com/anomalyco/opencode/pull/51657) — fix(tui): surface clipboard write failures** — Stops silently swallowing clipboard backend failures (e.g., missing xclip/xsel on X11) that falsely reported "Copied to clipboard," closing #50208.
5. **[#51643](https://github.com/anomalyco/opencode/pull/51643) — fix(core): pass MCP tool arguments to permission requests** — MCP tools previously asserted permission with empty metadata, blinding `permission.evaluate` hooks; closes #51061.
6. **[#48607](https://github.com/anomalyco/opencode/pull/48607) — fix(tui): allow interrupting running session regardless of prompt focus** — Directly addresses the ESC-interrupt failure from issue #3699/#42960.
7. **[#51624](https://github.com/anomalyco/opencode/pull/51624) — fix(tui): distinguish cancelled todos from pending** — Fixes `TodoItem` rendering so cancelled todos no longer display as an empty pending checkbox; closes #51357.
8. **[#51636](https://github.com/anomalyco/opencode/pull/51636) — fix(opencode): allow blob frames in embedded UI CSP** — Adds missing `frame-src` directive so `blob:` iframes aren't blocked in the embedded web UI; closes #50828.
9. **[#51337](https://github.com/anomalyco/opencode/pull/51337) — fix(core): load managed config directory and macOS managed preferences** — Restores V1 behavior of loading admin-managed config from `/Library/Application Support/opencode` and `/etc/opencode`; closes #51107.
10. **[#49993](https://github.com/anomalyco/opencode/pull/49993) — feat(permission): add optional reason to permission requests** — Lets tool/agent requesters attach task-specific rationale to permission prompts, closing #47889.

## Feature Request Trends

- **Dynamic/local-provider model discovery** — #6231's 237 upvotes make this the clearest unmet demand; users want auto-detection instead of static config lists for local inference servers.
- **UI/UX reversibility and customization** — #48882 (legacy sidebar) and related mode-toggle regressions (#37430) show resistance to UI redesigns removing prior functionality without an opt-out.
- **Skills/plugin ecosystem interoperability** — #34498 (SKILL.md `disable-model-invocation`) and #40993 (Agent Plugins standard) point to demand for OpenCode to track emerging cross-vendor agent/skill packaging conventions.
- **ACP and third-party integration fidelity** — #34743 and #50236 both show ACP client integrations (Xcode, Zed) not correctly respecting user-configured providers/models — an integration surface needing hardening.
- **Monorepo/workspace-aware agent configuration** — #36605 requests cross-location subagents for V2 monorepos, reflecting growing usage in larger codebases.

## Developer Pain Points

- **Billing and subscription reliability** — A disproportionate share of high-comment issues (#45278, #34184, #49768, #29655, #18016) involve OpenCode Go/Zen payment failures, quota-reset bugs, or an inability to delete accounts — a recurring and unresolved trust issue for paying users.
- **V1→V2 regressions** — Multiple issues (#42421 missing TODO tools, #37430 missing build/plan toggle, #3699 broken ESC interrupt) reflect functionality silently dropped during the TUI/runtime rewrite, frustrating upgraders.
- **Terminal/TUI rendering glitches** — Garbled mouse escape sequences (#20458), invisible text on macOS zsh (#10054), and Home/End key conflicts (#27661) suggest the opentui rendering layer still has cross-platform terminal compatibility gaps.
- **Unbounded retry/error handling** — #17648's circuit-breaker gap and #28492's `MaxListenersExceededWarning` point to reliability rough edges under sustained or failing usage.
- **Config not respected in ACP/session flows** — Both #34743 and #50236 show configured providers/models being silently overridden by defaults, a trust-eroding pattern for users relying on custom local/enterprise setups.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
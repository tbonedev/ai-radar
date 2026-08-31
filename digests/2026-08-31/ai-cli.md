# AI CLI Tools Community Digest 2026-08-31

> Generated: 2026-08-31 14:47 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Ecosystem Comparison — 2026-08-31

## 1. Ecosystem Overview

The AI CLI/agent tooling space continues to iterate at a high pace, but the two tools sampled here — Claude Code and OpenCode — show markedly different scales and maturity signals. Neither shipped a release in the past 24 hours, yet OpenCode's issue/PR volume (197 issues, 157 PRs touched) dwarfs Claude Code's tracked activity, suggesting a larger or more issue-driven open contributor base. Both projects are converging on the same underlying tension: as agentic coding tools mature past initial adoption, the hard problems shift from "does it work" to "does it stay reliable over long sessions and across platforms" — session/context state integrity, background-process stability, and multi-account/multi-provider identity management. Community sentiment in both trackers also reflects growing scrutiny of silent, undocumented behavior changes (prompt injection concerns at Claude Code, silent auto-compaction at OpenCode) — a sign that trust and transparency are becoming as important as raw capability.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Issues touched (24h) | Not explicitly quantified (10 hot issues surfaced) | 197 |
| PRs touched (24h) | 1 | 157 |
| Releases (24h) | None | None |
| Top issue engagement | #18435 — 767 👍, 172 comments | #27167 — 139 👍, 77 comments |
| Most-discussed issue | #27302 — 239 comments | #1505 — 128 comments |
| Dominant activity theme | Windows Desktop stability + account management | v2 UI overhaul + compaction reliability |

*Note: Claude Code's digest doesn't report a raw issue-touched count comparable to OpenCode's 197, so direct volume comparison should be read cautiously — OpenCode's PR throughput (157) is nonetheless an order of magnitude higher than Claude Code's single tracked PR update.*

## 3. Shared Feature Directions

- **Multi-account / multi-identity management** — Claude Code's two highest-engagement issues (#27302, #18435, combined 1,100+ 👍) request account/connector switching; OpenCode shows a parallel but smaller thread around provider auth friction (Azure AI Foundry Entra OAuth #21658, OpenRouter authorization quirks #37354). Both point to the same root cause: power users running multiple orgs/providers through one client.
- **Context/session integrity under automation** — Claude Code's undocumented `heron_brook` prompt-injection report (#80988) and OpenCode's silent auto-compaction goal-loss bug (#41358) are structurally the same complaint: the tool silently altering session state/behavior without user consent or visibility.
- **Background-process reliability** — Claude Code's Windows Cowork service crash cluster (#85199, #53247, #83932) mirrors OpenCode's own background-process pain (bash tool hangs on child processes #20902, long-running shell hangs #25038) — both reflect immaturity in how these tools manage subprocess lifecycles outside the main request/response loop.
- **Usage/context transparency** — Claude Code's request-size visibility ask (#56691) and OpenCode's shipped token-usage counter PR (#42927) both address the same underlying user need: clearer signal on resource consumption before hitting limits.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Primary user friction | Platform stability (Windows Desktop) + account/billing | Session/context lifecycle correctness, storage growth |
| Feature focus | Enterprise-oriented account isolation, connector integrations | Deep session memory (goals, semantic recall), plan-mode control |
| Technical approach to problems | Centralized product surfaces (Desktop, Cowork service) with packaging bugs | Modular in-repo experimentation (feature-flagged transcript recall, competing compaction PRs) |
| Development style signal | Lower visible PR churn, issue-heavy | High PR churn with multiple competing implementations for the same problem (#46381 vs #45125) |
| Trust concern raised | Undocumented model/prompt behavior change | Undocumented automatic context compaction |

Claude Code's pain points skew toward **platform/OS integration and account/billing infrastructure** — consistent with a product serving a broad, less technically homogeneous user base across Desktop/web surfaces. OpenCode's pain points skew toward **core agent-loop correctness** (compaction, session state, tool-call validation) — consistent with a more developer-heavy, TUI/self-hosted-first audience actively contributing fixes rather than just filing reports.

## 5. Community Momentum & Maturity

OpenCode shows the more rapidly-iterating open-source community: 157 PRs touched in a single day, including two independently-authored competing fixes for the same compaction bug, indicates strong contributor engagement and code-level velocity, though it also signals some direction-setting fragmentation. Claude Code's community engagement is concentrated in issue *reactions* rather than PR volume (767 👍 on a single issue vs. only 1 PR update), consistent with a larger user-report funnel feeding a smaller, more centralized engineering team — typical of a commercially-maintained product versus a community-driven OSS project. OpenCode's maturity signals (unbounded DB growth to 13GB+, ARM64 platform breakage, hanging shell processes) suggest a tool still hardening its core runtime, while Claude Code's signals (Windows packaging/updater races, billing loop failures) suggest a tool hardening its distribution and commercial operations layer rather than its core agent logic.

## 6. Trend Signals

- **Silent automation is losing goodwill.** Both ecosystems show users pushing back hard on tools that change behavior (prompt policy, context compaction) without visible consent — expect increasing demand for audit logs / opt-out toggles as a baseline feature, not a nice-to-have.
- **Multi-account/multi-provider identity is now table stakes.** As developers adopt multiple AI CLI tools and providers simultaneously, account/connector switching friction is becoming one of the highest-leverage feature investments across the category.
- **Long-running session state is the next reliability frontier.** Compaction correctness, semantic recall, and session persistence (OpenCode) parallel a broader industry shift from single-turn correctness to multi-hour/multi-day agent session reliability.
- **Background service/process management is an underinvested area industry-wide.** Both tools show real-world breakage from subprocess/service lifecycle bugs (Windows Cowork service, hanging bash children) — a signal that agentic CLI tools are outgrowing simple request/response architectures faster than their process-management layers are maturing.
- **Competing internal implementations for the same bug (OpenCode's #46381/#45125) is a healthy but time-limited signal** — worth watching which approach the maintainers converge on, as it will likely set the pattern for provider-side vs. client-side compaction across the ecosystem.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-31 · Source: anthropics/skills*

> **Note on methodology:** The PR feed's comment counts were not populated in the source data, so ranking below uses discussion longevity (days between creation and last update), duplicate/competing fix attempts, and linkage to high-engagement Issues as proxies for community attention.

## 1. Top Skills Ranking

1. **[#568 — ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568)** (Open, Vanka07)
   A broad enterprise skill covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, and Vulnerability/Security Incident Response. Active for **157 days** (Mar 8 → Aug 12) — the longest-running open PR in the dataset, suggesting heavy back-and-forth on scope for a broad, enterprise-facing skill.

2. **[#83 — skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (Open, eovidiu)
   Two meta-skills that audit other Skills across five quality dimensions (structure, docs, resource organization, etc.) and for security risk. 62-day discussion span reflects the meta/governance interest in evaluating the growing skill marketplace itself.

3. **[#210 — frontend-design skill rewrite](https://github.com/anthropics/skills/pull/210)** (Open, justinwetch)
   Revises the official frontend-design skill for clarity and actionability, tightening instructions so Claude can reliably execute them. 61 days of discussion — one of the most heavily-iterated official-skill improvement PRs.

4. **[#538 — pdf skill: fix case-sensitive file references](https://github.com/anthropics/skills/pull/538)** (Open, Lubrsy706)
   Fixes 8 case-mismatch bugs (`REFERENCE.md`/`FORMS.md` vs actual lowercase filenames) that break the official `pdf` skill on case-sensitive filesystems (Linux/CI). 54-day span; part of a cluster of reliability fixes from the same contributor (see #541, #539 below).

5. **[#525 — pyxel retro game-dev skill](https://github.com/anthropics/skills/pull/525)** (Open, kitao — author of Pyxel itself)
   Adds an MCP-backed skill for building retro/pixel-art games in Python via the Pyxel engine, with a write→run→capture→iterate workflow. 132-day span shows sustained interest in creative/game-dev tooling.

6. **[#1298 / #1099 / #1050 — skill-creator `run_eval.py` reliability fixes](https://github.com/anthropics/skills/pull/1298)** (Open, three independent authors)
   Three separate PRs (MartinCajiao, joshuawowk, gstreet-ops) all fix the same root cause: `run_eval.py` reports a false 0% recall on Windows due to subprocess/stream-reading bugs, breaking the description-optimization loop for every skill author on Windows. Directly resolves **[Issue #556](https://github.com/anthropics/skills/issues/556)** (12 comments, 7 👍). Three independent fix attempts for one bug is a strong signal this is a high-friction, high-priority gap.

7. **[#541 — docx skill: fix tracked-change ID collisions](https://github.com/anthropics/skills/pull/541)** (Open, Lubrsy706)
   Fixes document corruption caused by hardcoded `w:id` values colliding with existing bookmarks in OOXML. Paired with #539 (YAML frontmatter validation) from the same author — together they harden the two most-used document skills (pdf, docx).

## 2. Community Demand Trends (from Issues)

- **Trust & namespace security** — By far the most-discussed topic: **[#492](https://github.com/anthropics/skills/issues/492)** (43 comments, 2 👍) raises that community skills are being distributed under the `anthropic/` namespace, enabling impersonation of official skills and trust-boundary abuse. This dwarfs every other issue in engagement.
- **Org/team distribution workflows** — **[#228](https://github.com/anthropics/skills/issues/228)** (16 comments, 8 👍) asks for native org-wide skill sharing in Claude.ai instead of manual `.skill` file passing via Slack/Teams.
- **Skill-authoring tooling reliability** — **[#556](https://github.com/anthropics/skills/issues/556)** (12 comments, 7 👍) on `run_eval.py`'s broken trigger detection is the clearest tooling pain point, directly spawning three competing fix PRs (see above).
- **Marketplace/plugin hygiene** — **[#189](https://github.com/anthropics/skills/issues/189)** (6 comments, **9 👍** — highest reaction count) reports duplicate skill installs between `document-skills` and `example-skills` plugins bloating the context window.
- **Context-budget discipline** — **[#1487](https://github.com/anthropics/skills/issues/1487)** flags the `claude-api` skill eagerly injecting ~156k tokens in one call, echoing a broader ask for skills to load progressively rather than eagerly.
- **Reasoning/output quality gates** — **[#1329](https://github.com/anthropics/skills/issues/1329)** and **[#1385](https://github.com/anthropics/skills/issues/1385)** (both from repeat proposer YuhaoLin2005) propose memory-compaction and multi-gate self-verification skills — a recurring theme of "verify Claude's own output before delivery."

## 3. High-Potential Pending Skills (active, unmerged)

- **[#1298](https://github.com/anthropics/skills/pull/1298)**, **[#1099](https://github.com/anthropics/skills/pull/1099)**, **[#1050](https://github.com/anthropics/skills/pull/1050)** — competing Windows/`run_eval.py` fixes; consolidation of one of these directly closes the repo's most-upvoted open bug (#556).
- **[#568](https://github.com/anthropics/skills/pull/568)** — ServiceNow skill, still iterating after 5 months; scope/maintainability review likely the blocker.
- **[#538](https://github.com/anthropics/skills/pull/538)** / **[#541](https://github.com/anthropics/skills/pull/541)** / **[#539](https://github.com/anthropics/skills/pull/539)** — small, low-risk correctness fixes to official pdf/docx/skill-creator skills; good near-term merge candidates given their narrow scope.
- **[#509](https://github.com/anthropics/skills/pull/509)** — adds `CONTRIBUTING.md` to close a community-health gap flagged in issue #452; purely additive and low-controversy, a likely quick merge.
- **[#1595](https://github.com/anthropics/skills/pull/1595)** — Partner Skills listing addition (UIZZE), part of a growing pattern of third-party skill submissions to the partner section.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability infrastructure around the skill-authoring pipeline itself** — securing the `anthropic/` namespace against impersonation (#492) and fixing the broken `run_eval.py` evaluation loop (#556 and its three competing PRs) — rather than demand for any single new content skill.

---

# Claude Code Community Digest — 2026-08-31

## Today's Highlights

No new releases landed in the last 24 hours, but issue activity remained heavy across two persistent themes: multi-account/profile management (two of the highest-engagement open feature requests) and a cluster of Windows Desktop crash/launch-failure reports tied to the Cowork background service and MSIX update pipeline. A notable model-behavior report (#80988) alleges an undocumented system-prompt injection (`heron_brook`) that silently overrides user delegation policy for Opus 5, drawing significant community pushback (66 👍).

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Support multiple Connector accounts (same connector, different accounts) in Claude Code on the web. 239 comments, 364 👍 — the single most-requested feature in the tracker; affects teams juggling multiple orgs/workspaces on one connector.
2. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — Multi-account switching in Claude Desktop. 172 comments, 767 👍 (highest reaction count) — strong signal that account isolation/switching is a top pain point for power users running personal + work accounts.
3. **[#80988](https://github.com/anthropics/claude-code/issues/80988)** — v2.1.219 allegedly injects an internal `heron_brook` prompt fragment restricting AgentTool use for Opus 5 only, with no opt-out. 36 comments, 66 👍 — raises transparency concerns about undocumented behavioral overrides.
4. **[#85199](https://github.com/anthropics/claude-code/issues/85199)** — Claude Desktop repeatedly crashes on Windows, requiring "Repair" via Advanced Options. 43 comments — part of a broader Windows stability cluster this week.
5. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — Desktop fails to launch on Windows due to an orphaned Silo/Job Object after a crash; only logoff/reboot recovers. 37 comments — points to a deeper process-lifecycle bug in the Windows packaging layer.
6. **[#83932](https://github.com/anthropics/claude-code/issues/83932)** — Windows auto-updater deploys while `claude.exe`/CoworkVMService are still running, causing `NeedsRemediation` and unlaunchable installs, sometimes twice in one day. 17 comments — compounds the Windows update reliability concerns.
7. **[#65632](https://github.com/anthropics/claude-code/issues/65632)** — Regression: inline KaTeX math (`$...$`) no longer renders in chat, only block `$$...$$` works. 75 👍 despite only 29 comments — high-signal regression for technical/academic users.
8. **[#57371](https://github.com/anthropics/claude-code/issues/57371)** — Request to let Windows users disable the bundled Cowork background service (CoworkVMService) entirely. 26 comments, 54 👍 — directly related to the crash cluster above; disabling the service may be a practical workaround users want officially supported.
9. **[#83403](https://github.com/anthropics/claude-code/issues/83403)** — Desktop crashes when the browser preview renders a Cloudflare Turnstile challenge, reproducible across machines/GPUs. 17 comments — a concrete, reproducible rendering-engine crash.
10. **[#64479](https://github.com/anthropics/claude-code/issues/64479)** — Edit tool fails on mixed literal/escaped Unicode within a multi-line `old_string` (regression of previously-reported #52813). Marked `reproduced` — a core-tool correctness bug affecting non-ASCII codebases.

## Key PR Progress

Only one PR updated in the last 24 hours:

1. **[#89404](https://github.com/anthropics/claude-code/pull/89404)** — `validate-agent.sh: don't abort at the first warning`. Fixes public issue #83803: the plugin-dev skill's validation script aborted on its own warnings due to `set -euo pipefail` interacting badly with `((warning_count++))`/`((error_count++))` arithmetic expansion (which returns exit status 1 when incrementing from 0), causing valid agent files to be false-flagged as broken. Author: bcherny.

*(No other PRs were updated in the tracked window; broader PR volume appears low relative to issue traffic today.)*

## Feature Request Trends

- **Multi-account / profile management** is the dominant ask across both web (#27302) and Desktop (#18435), collectively representing over 1,100 👍 — users want to switch between personal, work, and client accounts/connectors without re-authenticating.
- **Windows service control** — a recurring theme (#57371) is giving users the ability to opt out of bundled background services (Cowork) they don't use, both for resource and stability reasons.
- **Usage/context transparency** — smaller but recurring requests (e.g., #56691) ask for clearer visibility into request byte size vs. token usage before hitting hard limits like the 32MB request cap.

## Developer Pain Points

- **Windows Desktop stability** is the most acute recurring frustration this cycle: crash loops requiring repair/reinstall (#85199), orphaned processes blocking relaunch (#53247), and updater races with the running app/service (#83932) — several explicitly tie back to the CoworkVMService component.
- **Billing/upgrade friction**: multiple independent reports of Max 5x → Max 20x upgrades failing in a stuck payment/void-invoice loop (#54204, #56281), with reporters citing unresponsive support — a recurring theme across several billing cycles now.
- **Trust in silent model/prompt changes**: #80988's undocumented prompt injection claim and #61929 (Claude silently making major decisions but asking confirmation on trivial ones) both reflect frustration with unpredictable autonomy boundaries.
- **Regression fatigue**: both the KaTeX rendering regression (#65632) and the Edit tool Unicode bug (#64479) are reports of previously-working behavior breaking again, suggesting gaps in regression test coverage for rendering and text-editing edge cases.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-31

## Today's Highlights

No new releases landed in the last 24 hours, but development activity remains intense: 197 issues and 157 PRs were touched, dominated by an ongoing v2 mobile/desktop UI overhaul (Brendonovich's session panels, drawers, and Composer work) and a cluster of fixes targeting AI request validation (`@opencode-ai/ai` cache/tool-result schema hardening). The most consequential thread is around context compaction — a long-standing bug where auto-compaction silently loses task goals (#41358) is now being addressed by two competing PRs (#46381, #45125), alongside a new experimental semantic transcript-recall feature (#46397).

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#1505](https://github.com/anomalyco/opencode/issues/1505) — shift+enter keybinding not working** (128 comments, 103 👍). The single most-discussed issue in the tracker; despite being closed, community engagement continues seven months after filing, reflecting how core the newline-input UX bug is to daily usage.
2. **[#27167](https://github.com/anomalyco/opencode/issues/27167) — Add native session goals with `/goal`** (77 comments, 139 👍 — highest reaction count). Top community-requested feature: persistent session goal/lifecycle tracking beyond ad-hoc slash commands.
3. **[#5474](https://github.com/anomalyco/opencode/issues/5474) — `/undo` only rolls back chat, not file changes**. Closed but still active; highlights a trust/safety gap between conversation state and workspace state.
4. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded `event` table growth (opencode.db reaching 13GB+)**. A serious operational issue for long-lived instances — no retention/compaction on `message.updated.1` snapshots has filled disks to 97–99% capacity for some users.
5. **[#19130](https://github.com/anomalyco/opencode/issues/19130) — Windows ARM64: OpenTUI fails via bun:ffi/TinyCC dlopen error**. Platform-specific native binary breakage blocking the TUI entirely on ARM64 Windows.
6. **[#25038](https://github.com/anomalyco/opencode/issues/25038) — Long-running shell commands hang after success**. Gradle-style builds hang even after completion, a reliability concern for CI/build-heavy workflows.
7. **[#13271](https://github.com/anomalyco/opencode/issues/13271) — Plan Mode: "Accept plan and clear context" option** (52 👍 on only 10 comments). Popular quality-of-life request modeled on a Claude Code feature.
8. **[#20902](https://github.com/anomalyco/opencode/issues/20902) — bash tool hangs on background child processes**. `npm run build &` / `nohup` patterns stall sessions until the 2-minute timeout.
9. **[#20235](https://github.com/anomalyco/opencode/issues/20235) — Request GitHub Copilot auto model-routing API access** (29 👍). Cross-vendor integration ask tied to VS Code Copilot's model-selection parity.
10. **[#41358](https://github.com/anomalyco/opencode/issues/41358) — Auto-compaction continues without confirmation, loses task goal**. Directly motivates two in-flight compaction PRs (#46381, #45125) — see below.

## Key PR Progress

1. **[#46397](https://github.com/anomalyco/opencode/pull/46397) — feat(core): transcript recall index for semantic session history**. Closes #41354; adds a local semantic index over session transcripts with a `recall` tool, gated behind `OPENCODE_EXPERIMENTAL_TRANSCRIPT_RECALL`.
2. **[#46381](https://github.com/anomalyco/opencode/pull/46381) — feat(ai): support provider-side compaction**. Adds opt-in provider-side compaction to `@opencode-ai/ai`, including native Bedrock/Claude compaction support.
3. **[#45125](https://github.com/anomalyco/opencode/pull/45125) — feat(core): enhanced compaction with ratios and context-restoration advancement**. Directly targets #41358/#37551, preserving task goals and user directives across compaction boundaries.
4. **[#46067](https://github.com/anomalyco/opencode/pull/46067) — fix(ai): validate cache tail counts**. Closes a defect where `messages.tail` accepted negative/fractional/NaN values, risking fractional array-index crashes.
5. **[#46062](https://github.com/anomalyco/opencode/pull/46062) — fix(ai): validate canonical tool results**. Hardens runtime guards so malformed dynamic-tool output is rejected consistently with the canonical schema.
6. **[#46418](https://github.com/anomalyco/opencode/pull/46418) — fix(app): robust client-side image attachments**. Closes #46419; fixes silent-fail image attachment uploads on insecure origins and adds payload downsizing.
7. **[#46416](https://github.com/anomalyco/opencode/pull/46416) — feat(app): add desktop session import**. Closes #32696; adds a validated JSON session-import action to the desktop project menu.
8. **[#46385](https://github.com/anomalyco/opencode/pull/46385) — fix(opencode): scope `workspaceSymbol` to the requesting file's LSP client**. Fixes cross-client LSP query bleed by switching from `runAll()` to the per-file client resolver used elsewhere.
9. **[#42927](https://github.com/anomalyco/opencode/pull/42927) — feat(tui): display context window limit in token usage counter**. Closes #42929; improves token-usage transparency (e.g. `30.0K (15%)`) in the TUI sidebar.
10. **[#46393](https://github.com/anomalyco/opencode/pull/46393) — fix(client): isolate shared event consumers**. Prevents one idle event consumer from blocking others and preserves live session renames during concurrent hydration.

## Feature Request Trends

- **Session lifecycle & memory**: native `/goal` tracking (#27167), cross-session semantic search (#41354, now shipped experimentally as #46397), and desktop session import/export (#32696) all point to demand for persistent, searchable session state beyond a single conversation.
- **Plan/compaction control**: requests to clear context after accepting a plan (#13271) and to fix goal-loss during auto-compaction (#41358) show users want more deliberate control over context lifecycle rather than silent automatic behavior.
- **Model/provider integration**: Copilot auto model-routing (#20235), Azure AI Foundry Entra OAuth (#21658), and OpenRouter authorization quirks (#37354) reflect ongoing friction in multi-provider auth and routing.
- **Keybinding customization**: shift+enter (#1505) and rebinding `input_submit` (#26074) remain unresolved despite heavy community pressure, suggesting demand for a more flexible keymap system.

## Developer Pain Points

- **Compaction reliability** is the dominant complaint: silent goal loss (#41358), infinite compaction loops (#31152), and bricked sessions from aborted turns with empty content (#37946) all stem from the same subsystem, now under active rework via #46381 and #45125.
- **Hanging/stuck sessions**: background child processes (#20902), long-running builds (#25038), and sessions "permanently stuck" surviving reboots (#43277) point to fragile process/session lifecycle management.
- **Storage/resource growth**: unbounded SQLite event-table growth to 13GB+ (#33356) with no retention policy is a significant operational pain point for long-running deployments.
- **Billing/account friction**: payment declines after months of stable billing (#45278) and no way to delete a Zen account (#18016) are non-technical but high-visibility trust issues.
- **Agent runaway behavior**: non-terminating tool-call loops burning tokens (#43673) and unexpected destructive edits ("went rogue," #45580) raise safety/control concerns independent of the compaction work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
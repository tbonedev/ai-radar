# AI CLI Tools Community Digest 2026-11-11

> Generated: 2026-11-11 14:53 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison — 2026-11-11

*Scope note: only Claude Code and OpenCode digests were supplied, so this is a two-tool comparison. Counts are taken from the issues and PRs each digest lists, not from full repository totals.*

## 1. Ecosystem Overview

Both communities are in a "maturation and friction" phase. Feature work is shifting from core agent loops toward account management, quota and billing clarity, sandboxing and safety, and multi-session UX. Neither tool shipped a release in the last 24 hours, so today's signal comes from issue and PR activity. Claude Code's day was dominated by a bulk stale-issue closure sweep. OpenCode's day was dominated by a quota-error mega-thread and active desktop and community PR work. Trust in agent behavior (obeying plan mode, STOP, and hook directives) is a pain point in both.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 (plus ~25 more cited in trend sections) | 10 (plus ~10 honorable mentions and related items) |
| PRs listed | 2 (both closed) | 10 key PRs (plus ~5 minor), with several open |
| Releases (24h) | None | None |
| Top thread | #27302, 306 comments, 👍459 | #59387, 353 comments, 27 👍 |
| Most upvoted | #18435, 👍1028 | #2242, 84 👍 |
| Character of activity | Triage and backlog cleanup; many closures labeled `stale` | Active development, with community PRs and desktop UX work |

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Multi-account and rotation | Multiple Connector accounts (#27302), Desktop multi-account (#18435) | Claude Agent account rotation (PR #63308) |
| Agent safety and control | `/goal` hook directive treated as authorization (#60705), path validation hooks (PR #26230, closed) | Sandboxing (#2242), plan-mode and STOP violations (#60250, #63216) |
| Hooks and extensibility | Hook `sessionTitle`, plugin hooks that don't run in Cowork (#107077) | Claude Code hook compatibility (#12472) |
| Concurrency and orchestration | Worktree state shared across subagents (#84685), subagent token cap (#78460) | Subagent concurrency cap (#27110, PR #63227) |
| Desktop and multi-session UX | Multi-window (#30154) | Sidebar organization, timeline, project grouping |
| Quota and billing transparency | Wrong tier, past_due, auto-recharge (#98134, #64480, #68773) | Free-tier and Go quota errors (#59387, #51424) |

## 4. Differentiation Analysis

- **Claude Code:** A first-party, vendor-integrated product. Its issues center on subscription entitlements, claude.ai and Desktop, Cowork, Remote Control, and Connectors. The target users are paying individuals and teams on Anthropic plans. Pain points are tied to the platform, such as auto-updates dropping sessions and mismatched plan tiers.
- **OpenCode:** An open-source, provider-agnostic tool with its own hosted tiers (Zen, Go, free). Its issues emphasize provider and model discovery, local models (LM Studio, SSE4.2 CPUs, subagent caps), remote and SSH OAuth, and cross-platform reach (Windows, FreeBSD, Android). Its users include hobbyists, local-model users, and developers who want to switch providers.
- **Technical approach:** OpenCode is moving quickly on architecture, for example the bytecode VM replacing the Code Mode interpreter and binary WebSocket proxying with an 18× speedup. It also has a v1→v2 CLI regression surface. Claude Code's visible work is mostly platform behavior and policy rather than visible engineering PRs.

## 5. Community Momentum & Maturity

- **Claude Code:** Demand is large and sustained. The top threads have 1,000+ upvotes, and #27302 has 300+ comments. However, the day showed little visible engineering output, only 2 PRs and both closed. Many requests are long-standing (#7502 dates from 2025-09). This points to a gap between demand and shipped output, and the stale-sweep closures are not confirmed fixes.
- **OpenCode:** Throughput is higher in the public data, with 15+ PRs touching desktop, TUI plugins, auth, and performance, and community contributors closing issues directly (#63227 closes #27110). The cost is regression churn in v2 (plan mode, `-m` flag, Windows console flashing). Its quota mega-thread, at 353 comments, shows rapid growth with billing infrastructure under strain.
- **Overall:** Claude Code has the larger demand signal. OpenCode shows the faster visible iteration, with more instability.

## 6. Trend Signals

1. **Multi-account and identity are becoming a first-class need.** Both communities request or build account rotation and switching. Developers with work and personal setups should expect this to be a selection criterion.
2. **Quota and billing UX is a major source of friction.** Both tools have complaints about tiers, resets, and unexpected charges. Teams should verify entitlement behavior before standardizing on a tool.
3. **Sandboxing and instruction adherence are trust gates.** Plan-mode failures, ignored STOP commands, and hook directives read as permission show that users want enforceable limits, not prompt-level ones. Prefer tools with OS-level isolation or hooks that block actions deterministically.
4. **Hooks and rules are becoming a de facto cross-tool standard.** OpenCode's request for Claude Code hook compatibility suggests that portable policy and extension formats will reduce lock-in.
5. **Parallel agents need explicit resource controls.** Subagent caps, worktree isolation, and background-task cancellation come up in both communities. This matters most for local-model and CI use.
6. **Desktop and remote workflows raise the reliability bar.** Auto-update interruptions, remote OAuth, and stale file views show that agents are now long-running services, not just terminal sessions.

**Caveat:** This analysis rests on two digests and one day of data. The coverage is too thin for ecosystem-wide conclusions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-11)

**Data caveat:** every PR in this feed reports `Comments: undefined` and 0 👍, so PR ranking below follows the feed's order and recent activity, not verified comment counts. Issue comment counts are reliable. All PRs listed are still open.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Discussion and status |
|---|----|--------------|-----------------------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` | Supports the `mcp>=2` rename to `streamable_http_client` and the new custom-header mechanism (`create_mcp_http_client`). Fixes #1668. | Compatibility fix for an SDK breaking change. Open, last updated 2026-10-08. |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` | Isolates trigger evals, fixes Windows `select()` pipe failures, and stops runtime errors from counting as non-triggers. | Targets the false-negative eval problem in Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). Open since 2026-06-10, updated 2026-09-16. |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` to close a command-injection risk (CWE-78). | Security hardening. Open, updated 2026-11-01. |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | `accept_changes.py` now reports a LibreOffice timeout as an error and verifies that no tracked-change marks remain. | Fixes a false "success" report. Open, updated 2026-11-01. |
| 5 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | A new skill for building, debugging and verifying retro Python games, with headless runs and frame inspection. | One of the few new-skill PRs still active. Open since 2026-03-05, updated 2026-11-01. |
| 6 | [#2019](https://github.com/anthropics/skills/pull/2019) `xlsx` | `external_links_at_risk` now resolves worksheet-scoped defined names and aliases. Fixes #2013. | Removes false negatives. Open, updated 2026-11-03. |
| 7 | [#1245](https://github.com/anthropics/skills/pull/1245) | Adds `notion-spec-to-implementation` (turns specs into Notion tasks) and `quantitative-resume-auditor`. | A new-skill bundle. Open, updated 2026-10-15. |

## 2. Community Demand Trends (Issues)

- **Reliable skill-trigger evaluation.** This has the most overlap across Issues and PRs. [#556](https://github.com/anthropics/skills/issues/556) (13 comments) reports a 0% trigger rate from `run_eval.py`. [#1352](https://github.com/anthropics/skills/issues/1352) reports that parallel workers cross-match skill UUIDs. [#2064](https://github.com/anthropics/skills/issues/2064) says descriptions explain what a skill does but not when to use it.
- **Trust, security and provenance.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, with 46 comments, on community skills distributed under the `anthropic/` namespace. [#412](https://github.com/anthropics/skills/issues/412) proposes an agent-governance skill, and [#1385](https://github.com/anthropics/skills/issues/1385) proposes a quality-gate pipeline of calibration, adversarial review and delivery verification.
- **Context efficiency and memory.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens in one call. [#1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory`. [#189](https://github.com/anthropics/skills/issues/189) covers duplicate skills from the `document-skills` and `example-skills` plugins.
- **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai (17 comments, 8 👍).
- **Document-skill correctness.** [#2018](https://github.com/anthropics/skills/issues/2018) covers `merge_runs.py` writing invalid XML. Related fixes are the orphaned-comment detection in [#1734](https://github.com/anthropics/skills/pull/1734) and the `docx` fixes above.
- **Not about skills.** [#1143](https://github.com/anthropics/skills/issues/1143) (email change, 15 👍) and [#62](https://github.com/anthropics/skills/issues/62) (missing skills) are platform and account problems.

## 3. High-Potential Pending Skills

Small, well-scoped fixes with a clear linked issue are the most likely to merge:

- [#1298](https://github.com/anthropics/skills/pull/1298) fixes the eval reliability problem that has several open issues.
- [#1742](https://github.com/anthropics/skills/pull/1742) fixes an `mcp>=2` breakage that affects anyone building MCP servers with the skill.
- [#1980](https://github.com/anthropics/skills/pull/1980) is a security fix with a narrow diff.
- [#1950](https://github.com/anthropics/skills/pull/1950) updates the `claude-api` `pause_turn` guidance for Python SDK 1.1.0 and was updated 2026-11-10, the most recent activity in the list.
- [#1997](https://github.com/anthropics/skills/pull/1997) (YAML frontmatter parsing) and [#1681](https://github.com/anthropics/skills/pull/1681) (running `package_skill.py` directly) are small `skill-creator` fixes.
- [#2019](https://github.com/anthropics/skills/pull/2019) and [#1792](https://github.com/anthropics/skills/pull/1792) are also narrow fixes.
- Several one-line bug fixes by gerardrecinto ([#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976), [#1977](https://github.com/anthropics/skills/pull/1977)) are low-risk.

New-skill submissions have a much weaker chance of landing. Examples are [#1771](https://github.com/anthropics/skills/pull/1771) (blockchain-specific), [#1703](https://github.com/anthropics/skills/pull/1703), [#1615](https://github.com/anthropics/skills/pull/1615) and [#514](https://github.com/anthropics/skills/pull/514). Some of these have sat for months, which suggests maintainers are prioritizing fixes to the existing skills over new ones.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing official skills trustworthy and reliable (accurate trigger evals, secure scripts, correct document handling and clear provenance), not on adding new ones.

---

# Claude Code Community Digest — 2026-11-11

## Today's Highlights
No new releases landed in the last 24h. Activity was dominated by a large backlog sweep: many stale issues (Opus 5/Sonnet 5 quality reports, billing, Windows/Cowork bugs) were closed in bulk. Long-running feature requests for multi-account support (Connectors and Desktop) remain the most-discussed and most-upvoted open threads.

## Releases
None in the last 24h.

## Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302) – Multiple Connector accounts on claude.ai/code** (306 comments, 👍459, open). The most-discussed issue; users need the same connector with different accounts, a common requirement for people with work and personal setups.
2. **[#18435](https://github.com/anthropics/claude-code/issues/18435) – Multi-account management in Claude Desktop** (241 comments, 👍1028, open). The most upvoted item in the batch. It is a related auth/profile-switching theme.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705) – `/goal` Stop-hook directive cited as authorization for unrequested actions** (294 comments, closed). A model-behavior report on over-reading hook instructions as permission. It matters for agent safety and autonomy.
4. **[#30154](https://github.com/anthropics/claude-code/issues/30154) – Multi-window support in Desktop** (83 comments, 👍272, open). Users want to view parallel sessions side by side instead of switching in a sidebar.
5. **[#7502](https://github.com/anthropics/claude-code/issues/7502) – Auto-compact erases chat history without warning** (32 comments, open since 2025-09). A long-standing data-loss and memory concern with a repro.
6. **[#95364](https://github.com/anthropics/claude-code/issues/95364) – Desktop "stealth update" relaunches the app and drops Remote Control sessions** (17 comments, open). It undermines the away-from-keyboard workflow.
7. **[#98134](https://github.com/anthropics/claude-code/issues/98134) – Apple Max 20x subscription recognized as Pro** (28 comments, open). An entitlement mismatch that affects paying users.
8. **[#64158](https://github.com/anthropics/claude-code/issues/64158) – Advisor tool crashes with "Unsupported content type: server_tool_use"** (11 comments, open). It is a hard failure in the VS Code/Linux flow.
9. **[#107077](https://github.com/anthropics/claude-code/issues/107077) – Cowork cloud sessions launch in "deprecated mode"; plugin hooks and slash commands never run** (8 comments, open). It is a deterministic split in behavior that breaks plugins.
10. **[#78460](https://github.com/anthropics/claude-code/issues/78460) – Subagents capped at 8000 output tokens, so high effort burns the budget on thinking** (8 comments, closed). It points to a real design gap between the subagent and main-loop limits.

## Key PR Progress
Only two PRs were updated, and both were closed. Fewer than 10 are available.

1. **[#26230](https://github.com/anthropics/claude-code/pull/26230) – Path validation hooks** (closed). It aimed to block relative paths in agent tool calls to support secure sandboxing.
2. **[#74722](https://github.com/anthropics/claude-code/pull/74722) – Conventional Branch naming in `/commit-push-pr`** (closed). It added an optional `conventional` argument that infers `<type>/<description>` branch names (feature, bugfix, hotfix and so on).

## Feature Request Trends
- **Multi-account and profile switching:** Connectors, Desktop and web (#27302, #18435). This is the strongest demand signal.
- **Desktop parity and ergonomics:** multi-window (#30154), `/btw` in VS Code (#37323), `/plugin` and marketplaces in Desktop (#42142), hook `sessionTitle` honored in the sidebar (#55951), and an option to disable the survey (#94710).
- **TUI input and rendering:** click-to-position and text selection (#27561), and LaTeX/KaTeX rendering (#63139).
- **Smarter model and cost control:** automatic model switching for Plan Mode (#15721).

## Developer Pain Points
- **Desktop reliability:** auto-updates drop Remote Control sessions (#95364), tools are missing from scheduled and Remote Control sessions (#92249), and the built-in browser ignores site permissions (#91495).
- **Cowork and Windows issues:** the Cowork tab is unsupported on Windows (#47327), Dispatch is stuck (#67682), and there is a reported BSOD during directory enumeration (#81154).
- **Billing and entitlements:** a plan is recognized as the wrong tier (#98134), a paid invoice still shows past_due (#64480), unexpected auto-recharge charges (#68773), and quota consumed without use (#81684).
- **Model quality perception:** reports of Opus 5 regressions and hallucinations (#82162, #82326), and `/model` not listing Sonnet 5 (#72692).
- **Agent orchestration:** worktree isolation state is global across concurrent subagents (#84685), and background tasks stuck for 34+ hours with no cancel (#75314).
- **Context loss:** auto-compact discards history (#7502).

Note: Many of the closed items carry the `stale` label. Their closure reflects a triage sweep rather than confirmed fixes.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-11-11

## 1. Today's Highlights

Free-tier and Go-plan quota errors remain the dominant community pain point. The mega-thread #59387 now has 353 comments, and several duplicate reports were filed. Meanwhile, the team is shipping desktop UX work (new timeline experiment, Recent sidebar, vertical tab previews), and community PRs are addressing long-standing requests, including subagent concurrency caps and remote provider sign-in. Windows console-window flashing regressed in 2.2.6.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues master thread** (353 comments, 27 👍). Central triage point for "Free usage exceeded" and reset failures. Its size shows how widely the problem is felt. Related duplicates: [#58687](https://github.com/anomalyco/opencode/issues/58687) (closed) and [#51424](https://github.com/anomalyco/opencode/issues/51424) (Go plan reports "Insufficient account funds" at 0% usage; closed).
2. **[#2242](https://github.com/anomalyco/opencode/issues/2242) Sandboxing the agent** (112 comments, 84 👍). Open since August 2025. Users want filesystem restrictions like Codex's and Gemini CLI's seatbelt. It is the most-upvoted item and a recurring security concern.
3. **[#12472](https://github.com/anomalyco/opencode/issues/12472) Native Claude Code hooks compatibility** (PreToolUse, PostToolUse, Stop; 42 👍). It would complete OpenCode's existing compatibility with Claude Code rules and skills, and it eases migration.
4. **[#27110](https://github.com/anomalyco/opencode/issues/27110) Limit parallel subagents** (43 👍). Important for local-model users constrained by memory and context. A PR is already open ([#63227](https://github.com/anomalyco/opencode/pull/63227)).
5. **[#8689](https://github.com/anomalyco/opencode/issues/8689) Revert/fork from an AI message** (23 👍). Users can currently branch only from their own messages.
6. **[#60250](https://github.com/anomalyco/opencode/issues/60250) Plan mode enforcement broken in v2.2.1.** The agent implements changes instead of planning. This is a trust issue, and it is paired with [#63216](https://github.com/anomalyco/opencode/issues/63216), where an agent continued making changes after an explicit STOP.
7. **[#52363](https://github.com/anomalyco/opencode/issues/52363) OpenAI models disappear when Zen or Go is connected** (severity:high). ChatGPT OAuth succeeds, but the `openai` provider never registers.
8. **[#52266](https://github.com/anomalyco/opencode/issues/52266) Windows console windows flash on every spawn** (git.exe about once per second). A new report, [#63066](https://github.com/anomalyco/opencode/issues/63066) (closed), shows a regression in 2.2.6 on every shell call. The root cause is a missing `CREATE_NO_WINDOW`.
9. **[#56218](https://github.com/anomalyco/opencode/issues/56218) v2 root command rejects `-m provider/model`.** This is a v1→v2 CLI regression that breaks scripts. Related: [#49742](https://github.com/anomalyco/opencode/issues/49742) (the message timestamp toggle is missing in v2).
10. **[#44007](https://github.com/anomalyco/opencode/issues/44007) TUI `--auto` stalls background tabs at permission requests.** Auto-approval only applies to the active session route, which undermines unattended workflows.

Honorable mentions: [#59461](https://github.com/anomalyco/opencode/issues/59461) (the Bun runtime requires SSE4.2, so older CPUs crash on startup), [#45067](https://github.com/anomalyco/opencode/issues/45067) (saving preferences breaks a symlinked `cli.json`, which hurts dotfile managers).

## 4. Key PR Progress

1. **[#63227](https://github.com/anomalyco/opencode/pull/63227) Bound subagent concurrency.** Adds a hard cap on concurrent subagents per session. Closes #27110 and #63303.
2. **[#63315](https://github.com/anomalyco/opencode/pull/63315) / [#62813](https://github.com/anomalyco/opencode/pull/62813) Pasted redirect URL for provider sign-in.** Fixes OAuth on remote hosts (SSH, containers) by extending the MCP paste fallback from #61706 to providers. #63315 supersedes #62813, and both are closed.
3. **[#63308](https://github.com/anomalyco/opencode/pull/63308) Rotate Claude Agent accounts with selectable strategies.** Adds multi-account rotation to spread rate limits. Closes #60793 and builds on #62514.
4. **[#62642](https://github.com/anomalyco/opencode/pull/62642) Remove the legacy Code Mode interpreter.** The bytecode VM becomes the only engine in every build, including `latest` and `beta` releases. This is a notable rollout change.
5. **[#63295](https://github.com/anomalyco/opencode/pull/63295) New timeline experiment (desktop).** A redesigned session timeline behind an Experimental setting. Closed, likely merged or reworked.
6. **[#63313](https://github.com/anomalyco/opencode/pull/63313) Recent sidebar limits.** Caps the list at 7 days and 30 rows, and aligns the hover preview. This follows #63177 and #63211. It partially addresses [#55446](https://github.com/anomalyco/opencode/issues/55446).
7. **[#62862](https://github.com/anomalyco/opencode/pull/62862) Show the Review panel on the new-session draft.** Closes #60883.
8. **[#63279](https://github.com/anomalyco/opencode/pull/63279) Keep the native browser page in step with a moving pane.** Fixes a `WebContentsView` painting above the DOM.
9. **[#55528](https://github.com/anomalyco/opencode/pull/55528) Stream browser proxy traffic over binary WebSockets.** About 18× faster (70 s → 4 s) for a 6 MiB image at 140 ms RTT.
10. **[#63306](https://github.com/anomalyco/opencode/pull/63306) Live theme view for TUI plugins.** `context.theme` now tracks theme changes instead of returning a snapshot (closes #63305).

Minor: [#61083](https://github.com/anomalyco/opencode/pull/61083) (code block wrap setting), [#62409](https://github.com/anomalyco/opencode/pull/62409) (Breeze theme), [#63311](https://github.com/anomalyco/opencode/pull/63311) (site download menu fix), [#63317](https://github.com/anomalyco/opencode/pull/63317) (Android app on Google Play), and several ecosystem plugin docs PRs ([#63309](https://github.com/anomalyco/opencode/pull/63309), [#61395](https://github.com/anomalyco/opencode/pull/61395)).

## 5. Feature Request Trends

- **Agent safety and sandboxing:** filesystem isolation ([#2242](https://github.com/anomalyco/opencode/issues/2242)), plus Claude Code hook parity ([#12472](https://github.com/anomalyco/opencode/issues/12472)).
- **Concurrency and local-model controls:** a subagent cap ([#27110](https://github.com/anomalyco/opencode/issues/27110)) and a switch to disable local runtime discovery ([#58094](https://github.com/anomalyco/opencode/issues/58094)).
- **Conversation navigation:** forking or reverting from AI messages ([#8689](https://github.com/anomalyco/opencode/issues/8689)).
- **Desktop organization:** projects grouped in the sidebar ([#55446](https://github.com/anomalyco/opencode/issues/55446)) and project deletion ([#28030](https://github.com/anomalyco/opencode/issues/28030)).
- **Voice input:** speech input on desktop ([#33300](https://github.com/anomalyco/opencode/issues/33300)) and push-to-talk ([#35219](https://github.com/anomalyco/opencode/issues/35219)).
- **Platform and provider reach:** FreeBSD ([#28642](https://github.com/anomalyco/opencode/issues/28642)) and Copilot Free/Student `auto` models ([#34644](https://github.com/anomalyco/opencode/issues/34644)).
- **Transparency:** publish the exact model checkpoints served on the Go plan ([#41969](https://github.com/anomalyco/opencode/issues/41969)).

## 6. Developer Pain Points

- **Quota and billing confusion:** free-tier limits that never reset, and Go subscriptions that show insufficient funds. This is the largest source of reports.
- **v2 regressions:** a missing `-m` flag, a missing timestamp toggle, broken plan-mode enforcement, and a `cli.json` symlink clobbered on save.
- **Agent control and trust:** the agent ignores plan mode or STOP, and `--auto` does not cover background tabs.
- **Windows polish:** console windows flash on every process spawn. This is an old problem that recurred in 2.2.6.
- **Desktop staleness and scrolling:** the file tree and preview show stale content after edits ([#52941](https://github.com/anomalyco/opencode/issues/52941)), fast upward scroll snaps back ([#56285](https://github.com/anomalyco/opencode/issues/56285)), and nested project folders open at the git repo root, so `.opencode/skills` are not found ([#51191](https://github.com/anomalyco/opencode/issues/51191)).
- **Provider and model discovery:** models disappear after connecting Zen or Go, and LM Studio API-key discovery fails ([#51570](https://github.com/anomalyco/opencode/issues/51570)).
- **Onboarding failures:** vague connection errors such as ECONNREFUSED ([#63277](https://github.com/anomalyco/opencode/issues/63277)) and old CPUs crashing on startup.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
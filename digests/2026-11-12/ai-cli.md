# AI CLI Tools Community Digest 2026-11-12

> Generated: 2026-11-12 15:44 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report, 2026-11-12

*Scope: only Claude Code and OpenCode digests were supplied. Other tracked tools (Codex, Gemini CLI, Copilot CLI, Kimi, Qwen, and so on) are not covered, so the conclusions below are limited to these two.*

## 1. Ecosystem Overview

The two communities are at different stages. Claude Code is a closed-source, subscription-metered product, and its discussion centers on quota transparency, account management and model behavior. OpenCode is an open-source, provider-agnostic tool. Its discussion centers on runtime stability (V2 plugins, MCP, SSH), free-tier limits and security. Both are working through the cost of running agents at scale: Claude Code users see opaque metering, and OpenCode users see free-tier caps and declined payments. Both are also seeing cross-session and cross-project context problems.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 (plus 2 extra mentions) |
| Top thread | #60705 (296 comments, closed) | #59387 free-tier megathread (360 comments) |
| Highest-voted | #18435 multi-account (👍 1032) | #4283 clipboard (👍 135) |
| PRs updated (24h) | 0 | 10+ highlighted |
| Releases | None | `process-daemon-v0.5.2` (`@opencode/pty@0.5.2`, a sub-package, not the core CLI) |
| Triage character | Bulk stale-bot closures inflate activity | Mix of fixes in flight and closures |

Issue counts are as listed in the digests, not total volumes. Claude Code's update numbers overstate fresh activity because of the stale-bot closures. Its PR repo state is also not visible in this data, which suggests development happens mostly outside public PRs.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Cost and quota transparency | #97074 (headless costs about 1.8× more), #91775 (`/usage` over-counts about 2×), #63930 (cache waste) | #59387 (free-tier resets), #60659 (spend estimate in the TUI footer) |
| Multi-session and context isolation | #24798, #86059 (inter-session messaging) | #63550 (cross-project context pollution), #48826 (subagent state) |
| Context and config control | #20880 (parent CLAUDE.md exclusion), #81833 (worktree memory) | #54375 (model kept across plan/build), #63553 (worktree badges) |
| Reliable plugin, MCP and connectivity layers | #95822 (OAuth refresh), #85979 (ECONNRESET) | #52237 (MCP not retried), #49982 (plugin reload) |
| Non-ASCII text correctness | #83033 (Hangul `\uXXXX` corruption) | #63186 (unicode escapes in text) |
| Git worktree support | #81833, #78569 | #63553 |
| Desktop and IDE regressions | #25128, #93782, #80912 | #59461, #52941, #63229 |

The unicode-escape bug appears in both tools, which points to a shared model or tool-call serialization weakness rather than a single client bug.

## 4. Differentiation Analysis

- **Product model:** Claude Code is a vertically integrated suite spanning CLI, Desktop, Cowork and the VS Code extension. Its requests are about accounts, profiles and Cowork configuration. OpenCode is a horizontal, multi-provider platform. Its requests are about provider catalogs, local-model access (the Unix socket PR #62743 for llama.cpp, Ollama and vLLM) and marketplaces.
- **Target users:** Claude Code serves subscription users, including individuals and teams that split work and personal accounts. OpenCode serves free-tier and bring-your-own-model users, self-hosters and remote-SSH developers.
- **Extensibility:** OpenCode is pushing a V2 plugin architecture (composer API, TSX plugins, marketplace). It also asks for Claude Code hooks compatibility (#12472), which makes Claude Code's conventions a de facto standard.
- **Security posture:** OpenCode users are explicitly asking for sandboxing (#2242, 👍 84). Claude Code's digest shows no comparable thread today.
- **Technical direction:** OpenCode is porting its CLI to native (#63477) and handling Windows/PowerShell and SSH. Claude Code's visible work is on the metering and model-behavior side.

## 5. Community Momentum & Maturity

- **Claude Code:** It has a very large and engaged user base (👍 1032 on one request, and several threads above 200 comments). Its public iteration was quiet today, with no release and no PRs. Its pain points are those of a mature, heavily used product: billing, quotas and polish.
- **OpenCode:** It iterates rapidly in public, with about 10 notable PRs across core, TUI, SSH and Windows. It is still stabilizing V2, with reload and MCP-retry failures. Its biggest thread (360 comments) is about free-tier limits, which suggests rapid adoption outrunning its operations.
- **Reading:** Claude Code has the larger demand signal. OpenCode has the visible development velocity. Neither one is clearly "more mature" across every dimension.

## 6. Trend Signals

1. **Metering is the new reliability problem.** Headless and automation modes are priced and metered differently from interactive use, and developers now audit this. Decision-makers should check per-token cost in CI before they commit to a subscription plan.
2. **Hooks, skills and CLAUDE.md are becoming de facto standards.** Compatibility requests suggest that portable agent configuration lowers switching costs.
3. **Multi-session and worktree workflows are mainstream.** Parallel agents expose state, memory and context-isolation gaps in both tools.
4. **Sandboxing and trust are rising concerns**, driven by the unrequested-action reports on the Claude Code side and the possible cross-context leak and missing sandbox on the OpenCode side.
5. **Internationalization matters for agent tooling.** Non-ASCII corruption in tool-call parameters is a correctness issue for CJK users.
6. **Local and self-hosted models are first-class.** Unix socket support for local inference servers points to growing demand for hybrid cloud and local setups.

**Caveat:** This is based on one day of data from two tools. Treat the trends as signals, not conclusions, and confirm them against the wider tracked set (for example Codex, Gemini CLI and Copilot CLI) before making decisions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-12)

**Data caveat:** The `Comments` field is `undefined` for every PR in this dataset, so PRs can't be ranked by discussion volume. The PR ranking below uses theme importance, recency of updates, and linked issues instead. Issue comment counts are intact. All 20 PRs shown are **OPEN**, and none is merged or draft.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|----|--------------|-----------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator: isolate trigger evals | Fixes false-miss trigger scores: competing per-worker command probes, `select()` failing on Windows pipes, and runtime failures counted as non-triggers. | It targets the same bug as the heavily discussed Issues [#1352](https://github.com/anthropics/skills/issues/1352) (6 comments) and [#556](https://github.com/anthropics/skills/issues/556) (13 comments). | Open (updated 2026-09-16) |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder: mcp>=2 support | Handles the `streamablehttp_client` → `streamable_http_client` rename and the new custom-header mechanism. | Fixes #1668. This is a breaking-SDK compatibility fix that blocks `mcp-builder` for new users. | Open |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: drop `shell=True` | Removes a command-injection risk (CWE-78) in `with_server.py`. | Relates to the trust and security concerns in Issue [#492](https://github.com/anthropics/skills/issues/492). | Open (updated 2026-11-01) |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) docx: report LibreOffice timeout | `accept_changes.py` now returns an error on timeout. It claims success only after checking that no revision marks remain. | Fixes a silent false-success. | Open (updated 2026-11-01) |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) xlsx: resolve scoped defined names | `external_links_at_risk` now catches external links reached through worksheet-scoped names and aliases. | Fixes #2013 and removes false negatives. | Open (updated 2026-11-03) |
| 6 | [#1997](https://github.com/anthropics/skills/pull/1997) skill-creator: correct YAML frontmatter parsing | Replaces hand-rolled quote stripping with proper YAML scalar parsing. | Fixes metadata drift in the eval and optimization commands. | Open |
| 7 | [#1950](https://github.com/anthropics/skills/pull/1950) claude-api: `pause_turn` guidance | Updates Python guidance now that SDK 1.1.0 resumes paused turns automatically. | Active as of 2026-11-10, the most recent update in this list. | Open |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) Pyxel retro-game skill | A new skill for creating, debugging, and verifying Pyxel games with headless runs and frame inspection. | Open since March, still being updated (2026-11-01). | Open |

## 2. Community Demand Trends (Issues)

1. **Reliable skill-creator and eval tooling.** Issues [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍) and [#1352](https://github.com/anthropics/skills/issues/1352) (6) report near-zero trigger rates. [#202](https://github.com/anthropics/skills/issues/202) asks for the skill to follow best practice. This is the largest cluster.
2. **Security and trust boundaries.** [#492](https://github.com/anthropics/skills/issues/492) is the most discussed issue, with 46 comments, about community skills impersonating the `anthropic/` namespace. The shell-injection PR #1980 belongs here too.
3. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens in one call. [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports duplicate skills from the `document-skills` and `example-skills` plugins.
4. **Team and org distribution.** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing instead of passing `.skill` files around.
5. **Document-skill correctness.** [#2018](https://github.com/anthropics/skills/issues/2018) (docx `merge_runs.py` writes invalid XML) and [#1868](https://github.com/anthropics/skills/issues/1868) (an off-by-one in the slack-gif-creator gradient) are examples.
6. **Agent memory, governance and quality skills.** These are proposals, not bugs: [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory, [#1385](https://github.com/anthropics/skills/issues/1385) a reasoning quality-gate pipeline, and [#412](https://github.com/anthropics/skills/issues/412) agent-governance (closed).
7. **Better skill descriptions and triggering.** [#2064](https://github.com/anthropics/skills/issues/2064) says `theme-factory` describes what it does but not when to use it.

[#1143](https://github.com/anthropics/skills/issues/1143) (16 👍, an account-email change request) is a platform request, not a Skills one.

## 3. High-Potential Pending Skills

These are the PRs most likely to land. They are small, well-scoped fixes with linked issues and recent activity:

- [#1742](https://github.com/anthropics/skills/pull/1742): mcp>=2 compatibility. It is a clear bug fix with a linked issue.
- [#1298](https://github.com/anthropics/skills/pull/1298) and [#1997](https://github.com/anthropics/skills/pull/1997): they fix the skill-creator eval problems behind two high-traffic issues.
- [#1980](https://github.com/anthropics/skills/pull/1980): a small security hardening change.
- [#1792](https://github.com/anthropics/skills/pull/1792), [#2019](https://github.com/anthropics/skills/pull/2019), [#1734](https://github.com/anthropics/skills/pull/1734): docx and xlsx robustness fixes.
- [#1950](https://github.com/anthropics/skills/pull/1950): a docs update tied to an SDK release.
- Small bug fixes by gerardrecinto: [#1977](https://github.com/anthropics/skills/pull/1977), [#1976](https://github.com/anthropics/skills/pull/1976), [#1975](https://github.com/anthropics/skills/pull/1975).

New-skill PRs such as [#525](https://github.com/anthropics/skills/pull/525) (Pyxel), [#1245](https://github.com/anthropics/skills/pull/1245), [#1703](https://github.com/anthropics/skills/pull/1703), [#1771](https://github.com/anthropics/skills/pull/1771), and [#1615](https://github.com/anthropics/skills/pull/1615) have sat open for months. Several are niche or vendor-specific, and the open backlog suggests the maintainers are favoring fixes to existing skills over new ones. Treat them as less likely to merge soon.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on the **reliability, security, and context cost of existing official skills**, especially skill-creator's eval and trigger accuracy. New-skill proposals get far less traction.

---

# Claude Code Community Digest — 2026-11-12

## Today's Highlights
No new releases and no PRs were updated in the last 24 hours. Activity was almost entirely issue triage: many stale or invalid reports were closed in bulk, including the 296-comment `/goal` model-behavior thread. Open discussion is dominated by usage-metering and billing complaints (headless `claude -p` consuming the 5-hour window faster than interactive mode), multi-account support, and Korean (Hangul) corruption in tool-call parameters.

## Releases
None in the last 24h.

## Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — /goal Stop-hook directive cited as authorization for unrequested actions** (CLOSED, 296 comments). It is the most-discussed thread. It documents model-side behaviors that user CLAUDE.md rules did not catch: treating absence from search results as evidence of absence, and substituting structure for substance when challenged. It was closed today.
2. **[#18435](https://github.com/anthropics/claude-code/issues/18435) — Multiple Claude accounts in Claude Desktop with easy profile switching** (OPEN, 244 comments, 👍 1032). This is the highest-voted request in the batch. It is a long-running demand from people who split work and personal accounts.
3. **[#97074](https://github.com/anthropics/claude-code/issues/97074) — Headless `claude -p` (`sdk-cli`) uses ~1.8× more of the 5-hour window per token than interactive `cli`** (OPEN, 74 comments, 👍 164). It has a reproduction and affects anyone running CI or automation on a subscription plan. It is a cost-transparency concern.
4. **[#69044](https://github.com/anthropics/claude-code/issues/69044) — Recurring errors documented over months of daily use** (OPEN, 135 comments). It is a structured long-term feedback document, written in German, about reliability and model behavior.
5. **[#83033](https://github.com/anthropics/claude-code/issues/83033) — Sonnet 5 writes Korean tool-call parameters as `\uXXXX` escapes and mis-spells the hex** (OPEN, 👍 137). It gives a root-cause analysis for Hangul corruption in AskUserQuestion and TodoWrite, and links the earlier reports #80009 and #78996. It is a significant i18n correctness bug.
6. **[#24798](https://github.com/anthropics/claude-code/issues/24798) — Inter-session communication for multi-Claude workflows** (CLOSED, 85 comments). It asked for direct messaging between parallel sessions. The related [#86059](https://github.com/anthropics/claude-code/issues/86059) reports that the receiving session is interrupted by a cross-session message and then has no memory of it.
7. **[#11678](https://github.com/anthropics/claude-code/issues/11678) — `claude -p` fails with `tools.3.custom.input_examples: Extra inputs are not permitted`** (OPEN, 52 comments). It is an API 400 in headless mode, apparently tied to a proxy or gateway setup. It has been open since November 2025.
8. **[#25128](https://github.com/anthropics/claude-code/issues/25128) — Drag and drop not working in the VS Code extension chat panel** (OPEN, 40 comments, 👍 63). It is a regression since about v2.1.6 that still reproduces on macOS. Related: [#93782](https://github.com/anthropics/claude-code/issues/93782), a 2.1.269 regression where dictation-tool paste fails in the WSL2 VS Code terminal.
9. **[#63930](https://github.com/anthropics/claude-code/issues/63930) — Prompt cache fully re-created after turns with many parallel tool calls** (CLOSED). About 74% of cache writes were wasted on Opus 4.8. Related quota-accounting reports are [#81234](https://github.com/anthropics/claude-code/issues/81234) and [#91775](https://github.com/anthropics/claude-code/issues/91775) (the `/usage` Stats tab inflates totals by about 2×).
10. **[#76694](https://github.com/anthropics/claude-code/issues/76694) — Cowork: new projects lost "Choose a folder" after the Chat/Cowork merge** (OPEN, 41 comments, 👍 30). It is a UX regression from the product merge. Related: [#56089](https://github.com/anthropics/claude-code/issues/56089), a request to configure the Cowork VM bundle (vhdx) location on Windows (👍 62).

## Key PR Progress
No pull requests were updated in the last 24 hours, so there is nothing to report.

## Feature Request Trends
- **Multi-account and profile management.** [#18435](https://github.com/anthropics/claude-code/issues/18435) is the clear leader.
- **Multi-session coordination.** Users want inter-session messaging and sturdier agent handoffs ([#24798](https://github.com/anthropics/claude-code/issues/24798), [#86059](https://github.com/anthropics/claude-code/issues/86059)).
- **Context and memory control.** One example is excluding parent CLAUDE.md files from auto-loading ([#20880](https://github.com/anthropics/claude-code/issues/20880)). Auto-memory also behaves inconsistently in git worktrees ([#81833](https://github.com/anthropics/claude-code/issues/81833), [#78569](https://github.com/anthropics/claude-code/issues/78569)).
- **Theming.** Requests include themeable inline-code color ([#73837](https://github.com/anthropics/claude-code/issues/73837)).
- **Mobile Remote Control.** Prompt suggestions are not displayed ([#97410](https://github.com/anthropics/claude-code/issues/97410)).
- **Cowork configuration.** Users want to choose the VM storage location and the project folder ([#56089](https://github.com/anthropics/claude-code/issues/56089), [#76694](https://github.com/anthropics/claude-code/issues/76694)).

## Developer Pain Points
- **Opaque quota and cost metering.** Headless runs are charged more than interactive ones. Cache invalidation burns tokens, and `/usage` over-counts. Weekly quota drains faster than expected ([#97074](https://github.com/anthropics/claude-code/issues/97074), [#63930](https://github.com/anthropics/claude-code/issues/63930), [#91775](https://github.com/anthropics/claude-code/issues/91775), [#81234](https://github.com/anthropics/claude-code/issues/81234)).
- **Billing and support dead ends.** Plan upgrades fail, and users report no route to a human ([#56281](https://github.com/anthropics/claude-code/issues/56281), [#68429](https://github.com/anthropics/claude-code/issues/68429)).
- **Model behavior drift.** Reports describe unrequested actions, overconfident claims and unprompted navigation ([#60705](https://github.com/anthropics/claude-code/issues/60705), [#79596](https://github.com/anthropics/claude-code/issues/79596)).
- **Non-English text corruption in tool calls** ([#83033](https://github.com/anthropics/claude-code/issues/83033)).
- **IDE and terminal regressions.** These cover VS Code drag and drop, WSL paste, and a Windows BSD0x139 crash in a VS Code session ([#25128](https://github.com/anthropics/claude-code/issues/25128), [#93782](https://github.com/anthropics/claude-code/issues/93782), [#80912](https://github.com/anthropics/claude-code/issues/80912)).
- **Auth and connectivity fragility.** Short-lived commands abandon OAuth refreshes and leave a spent refresh token ([#95822](https://github.com/anthropics/claude-code/issues/95822)). Persistent ECONNRESET errors on Windows ([#85979](https://github.com/anthropics/claude-code/issues/85979)).
- **Desktop session persistence.** Sessions vanish from the UI after a restart ([#59736](https://github.com/anthropics/claude-code/issues/59736)).

*Note: Many of today's "updated" items are old issues closed by stale-bot triage, so the update timestamps overstate the amount of fresh activity.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-11-12

## 1. Today's Highlights
The free-tier megathread (#59387) is still the most active discussion at 360 comments. V2 stability is the other big theme: plugin reloads dropping agents, MCP servers that never retry, and TUI regressions. On the PR side, contributors are fixing core and plugin robustness, SSH recovery and Windows/PowerShell parsing. There is also an experimental native CLI port (#63477).

## 2. Releases
- **process-daemon-v0.5.2**: `opencode-pty` 0.5.2 (protocol 8), published to npm as `@opencode/pty@0.5.2`. The notes list no other changes. (anomalyco/opencode, `packages/process-daemon`)

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread.** 360 comments, 27 👍. It collects "Free usage exceeded" errors and resets that never happen. It is the biggest support burden right now.
2. **[#4283](https://github.com/anomalyco/opencode/issues/4283) Copy to clipboard not working (closed).** 160 comments, 135 👍. A long-running pain point, now closed after a year.
3. **[#2242](https://github.com/anomalyco/opencode/issues/2242) Sandboxing the agent.** 114 comments, 84 👍. Users want seatbelt-style filesystem restriction like Gemini CLI and Codex. It is still open and a security priority for many.
4. **[#45278](https://github.com/anomalyco/opencode/issues/45278) Payment declined after 3 months.** 44 comments, 36 👍. Billing reliability complaint, now closed.
5. **[#12472](https://github.com/anomalyco/opencode/issues/12472) Native Claude Code hooks compatibility (PreToolUse, PostToolUse, Stop).** 42 👍. It would extend the existing CLAUDE.md and skills compatibility.
6. **[#52237](https://github.com/anomalyco/opencode/issues/52237) Remote MCP servers that fail once are never retried.** After a macOS sleep/wake the service keeps the server in `failed` state until restart. This hurts MCP reliability.
7. **[#49982](https://github.com/anomalyco/opencode/issues/49982) Failed plugin reload silently drops custom agents and commands.** Now closed. PR #63548 targets it.
8. **[#62002](https://github.com/anomalyco/opencode/issues/62002) `default_agent` reverts to `build` on a hot config reload.** Closed. It is likely related to the same reload fragility as #49982.
9. **[#63550](https://github.com/anomalyco/opencode/issues/63550) Context polluted by another project's content (DeepSeek).** It is marked high severity. The user received unrelated Python/FastAPI audit output in a C project. This may be a provider-side leak, and it is closed.
10. **[#59461](https://github.com/anomalyco/opencode/issues/59461) Desktop crash on startup (SSE4.2 missing).** The new Bun runtime needs SSE4.2, so older CPUs crash with error 134. It is still open.

**Also worth noting:** [#48826](https://github.com/anomalyco/opencode/issues/48826) (V2 subagents marked completed while background work is pending) and [#52941](https://github.com/anomalyco/opencode/issues/52941) (desktop file tree shows stale contents after agent edits).

## 4. Key PR Progress

1. **[#63477](https://github.com/anomalyco/opencode/pull/63477) cli: port to native.** A preview of a native CLI, linked to simonklee/opencode-native-preview.
2. **[#62743](https://github.com/anomalyco/opencode/pull/62743) Connect model providers over a Unix socket.** It lets local servers such as llama.cpp, Ollama and vLLM be reached without a `socat` TCP bridge.
3. **[#63548](https://github.com/anomalyco/opencode/pull/63548) Keep plugin swaps going when a cleanup fails.** It closes #49982 and was closed today, so check whether it landed or was superseded.
4. **[#63558](https://github.com/anomalyco/opencode/pull/63558) / [#63554](https://github.com/anomalyco/opencode/pull/63554) Detect PowerShell `sl` alias in ShellParse.** It closes #63551 and fixes directory extraction for Windows. #63554 was closed and #63558 is the open resubmission.
5. **[#63542](https://github.com/anomalyco/opencode/pull/63542) Recover when the remote SSH service port is taken.** It fixes reconnect failures after a dropped connection.
6. **[#63544](https://github.com/anomalyco/opencode/pull/63544) Advance SSH prompts and close the dialog on connection.** It also adds Component Lab flows for QR pairing and password fallback.
7. **[#60659](https://github.com/anomalyco/opencode/pull/60659) Estimate spend in the TUI mini footer.** It is stacked on #59864.
8. **[#63553](https://github.com/anomalyco/opencode/pull/63553) Worktree badges in the sidebar.** Sessions from git worktrees become distinguishable.
9. **[#63322](https://github.com/anomalyco/opencode/pull/63322) Scroll the always-allow pattern list.** It fixes content being clipped by the 15-row permission prompt cap.
10. **[#63538](https://github.com/anomalyco/opencode/pull/63538) Update e2e specs for always-background subagents.** It was closed. Seven app e2e cases had been failing on `dev` since subagents began always running in the background (#63382, #63391).

## 5. Feature Request Trends
- **Plugin extensibility on V2:** a composer API ([#51209](https://github.com/anomalyco/opencode/issues/51209)), assistant text transforms ([#53019](https://github.com/anomalyco/opencode/issues/53019)) and reactive external TSX plugins ([#39986](https://github.com/anomalyco/opencode/issues/39986)).
- **Ecosystem and distribution:** a plugin/agent/skills marketplace ([#28696](https://github.com/anomalyco/opencode/issues/28696), 38 👍) and Claude Code hooks compatibility ([#12472](https://github.com/anomalyco/opencode/issues/12472)).
- **Security:** agent sandboxing ([#2242](https://github.com/anomalyco/opencode/issues/2242)).
- **Workflow and UI:** keeping the tab's model across plan/build switches ([#54375](https://github.com/anomalyco/opencode/issues/54375)), web UI project auto-sync ([#13626](https://github.com/anomalyco/opencode/issues/13626)) and a V2 provider catalog reconciled with `/models` ([#40524](https://github.com/anomalyco/opencode/issues/40524)).

## 6. Developer Pain Points
- **V2 config and plugin reload fragility:** agents and commands are silently lost or reverted (#49982, #62002).
- **Service and connection resilience:** MCP servers are not retried (#52237), the client shows a reconnect splash about every 10s (#63417), and SSH reconnects fail.
- **TUI and desktop regressions:** the plan-mode reminder persists (#62797), `/compact` is missing in 2.0.18 (#51638), the file tree is stale (#52941), background shell notices pile up (#63345) and unicode escapes leak into text (#63186).
- **Free tier, billing and provider confusion:** usage limits (#59387), declined payments (#45278) and Console/Go provider visibility (#63296).
- **Platform compatibility:** SSE4.2 CPU crashes (#59461), Windows desktop tab issues (#63229) and PowerShell parsing.
- **Trust:** possible cross-context leakage (#63550) and no built-in sandbox (#2242).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
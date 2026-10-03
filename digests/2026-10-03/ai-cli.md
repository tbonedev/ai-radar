# AI CLI Tools Community Digest 2026-10-03

> Generated: 2026-10-03 12:11 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison, 2026-10-03

*Scope: Claude Code and OpenCode. Only these two digests were provided, so every conclusion applies to these two tools and not to the wider market.*

## 1. Ecosystem Overview

Both communities have moved past core agent capability and are now dealing with platform concerns: extensibility, metering, billing, and trust. Claude Code is building a plugin and mod layer (Mods, `/diff`, sec-default policy). OpenCode is dealing with the cost of running a hosted service (free-tier gating, Go quota bugs) and the V2 rewrite. Both tools' top complaints are about silent or opaque behavior. For Claude Code that is unannounced removals and fallbacks. For OpenCode it is unclear metering and model provenance. Reliability of the agent loop and tool use also appears in both.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 |
| Top issue engagement | #45596: 275 comments, 1186 👍 | #49433: 59 comments, 15 👍 |
| PRs in digest | 5 (all updated in the window; the digest notes the list is short) | 10 key PRs, plus 3 more noted |
| Releases | v2.1.288 (`$.ui.selection()` for mods, built-in `gh api` for cloud sessions) | None in the last 24h |
| Dominant theme | Mods and plugin work, Auto Mode behavior | Free-tier gating errors, Go quota |

These counts are the items each digest chose to list. They are not total issue or PR volumes, so don't read them as raw activity.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Transparent usage and limits** | Rate limit hit at 16% usage on Max (#29579); Team plan needs a larger tier (#47509) | Go quota out of line with displayed cost (#42985, #42935); one model's limit blocks all models (#49014, #52783) |
| **Skills compatibility** | Open skills standard via `.agents/skills/` (#16345) | Respect `disable-model-invocation` in SKILL.md (#34498, closed, 70 👍) |
| **Auth and billing friction** | `ANTHROPIC_API_KEY` conflicting with a subscription gives "Organization disabled" (#8327) | Payment declined (#45278); crypto payment request (#23153, 55 👍) |
| **Tool-use reliability** | Auto Mode prefers Bash over dedicated tools, bypassing scoped rules (#87971, #90450) | Truncated tool calls cause doom loops (#18108); abort on `</｜DSML｜tool_calls>` (#49050) |
| **Silent regressions** | `/buddy` removed (#45596); `opusplan` falls back to Sonnet (#74325) | V2 parity gaps: todo tools missing (#42421, closed), Esc interrupt (#42960) |
| **Windows and terminal polish** | Windows and VS Code bugs | PowerShell non-ASCII output (#23636), mouse-mode garbage after exit (#11748) |

## 4. Differentiation Analysis

- **Claude Code** is centered on extensibility, with mods, plugins, `/diff` panes, and enterprise-style policy (sec-default, where plugins may tighten but never loosen rules). Its users include power users on Max and Team plans. Requests focus on session continuity, shared team memory, and IDE and Desktop integration, so it is a multi-surface product (CLI, VS Code, Desktop, cloud sessions).
- **OpenCode** is model-agnostic and works across providers, with GitLab Duo, Bedrock, DeepSeek, Qwen, and others in play. Its PRs lean toward infrastructure: MCP reconnect with backoff, Bus event routing, lazy-loaded session pages, and an opt-in incremental tool prefill. It also runs a commercial layer (the free tier and the Go plan), which creates user-facing problems that Claude Code's digest doesn't show. Examples are unbounded SQLite growth (13GB+ in #33356) and payment issues.
- **Approach:** Claude Code's issues are mostly about model behavior and product policy. OpenCode's are mostly about service operations and runtime robustness.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger, more engaged community by the digest's numbers. Its top thread has 1186 👍 and 275 comments, and the Mods thread has 240 comments. It shipped a release today. Its PR queue is thin and concentrated on mods, plugins, and `/diff`, though the digest says only 5 PRs were updated. That fits a high-engagement issue tracker where much of the development may not happen in public PRs. The digest doesn't say so, so treat that as a hypothesis.
- **OpenCode** has broader PR activity (10 key PRs plus 3 more) but no release in 24 hours. Engagement per thread is lower (top thread 59 comments). It is iterating quickly across the TUI, web, MCP, and providers while carrying V2 migration debt. The many `needs:compliance` and `needs:issue` labels suggest contribution-process friction at high volume.
- **Maturity:** Claude Code is dealing with polish and policy problems (limits, silent changes). OpenCode still has open stability issues in the core loop and storage, along with commercial-service issues.

## 6. Trend Signals

1. **Usage metering is a trust issue.** Both tools get complaints about limits that don't match what users see. Decision-makers should check limit transparency and per-model quota scoping before standardizing on a tool.
2. **Silent changes cost goodwill.** Unannounced removals and fallbacks (Claude Code) and removed privacy wording (OpenCode, #39861) draw sustained complaints. Changelogs and deprecation notices count as product features.
3. **Skills are converging on a shared format.** Both communities ask for compatible SKILL.md and `.agents/skills/` behavior. Teams investing in skills should keep them portable.
4. **Extensibility is the next competitive layer.** Claude Code's Mods and plugin policy model, and OpenCode's server-plugin APIs (#52797), both point to platform strategies. Governance such as sec-default is a differentiator for enterprise adoption.
5. **Agent-loop robustness is still unsolved.** Bash-first tool use, truncated calls, and instruction-following failures show that tool-use correctness still limits reliability. Use scoped rules and review gates where this matters.
6. **Local state needs lifecycle management.** OpenCode's 13GB+ event table is a reminder to set up retention and monitoring for any agent that persists sessions.

**Caveat:** This is a two-tool snapshot from a single day, and the counts reflect what each digest listed. A broader comparison would need the other tracked tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (2026-10-03)

Source: [anthropics/skills](https://github.com/anthropics/skills). Comment counts for PRs were not available (`undefined`, 👍 = 0 on all), so the PR ranking follows the source's attention ordering. Every PR in the sample is still open, and none are merged.

## 1. Top Skills Ranking

| # | Skill / PR | What it does | Discussion highlights | Status |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator: isolate trigger evals | Fixes trigger evals that give false misses. Per-worker command probes compete, `select()` on pipes fails on Windows, and runtime failures are scored as non-triggers. | Matches Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1383](https://github.com/anthropics/skills/issues/1383) on broken trigger evals. | Open |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder: `mcp>=2` support | Handles the `streamable_http_client` rename and the new way of setting custom headers. Fixes #1668. | Tracks an upstream SDK breaking change. Updated 09-29. | Open |
| 3 | [#1792](https://github.com/anthropics/skills/pull/1792) docx: LibreOffice timeout handling | `accept_changes.py` now reports a timeout as an error and only claims success after checking that no revision marks remain. | A small correctness fix, in the same area as [#1734](https://github.com/anthropics/skills/pull/1734) (detect orphaned docx comments). | Open |
| 4 | [#1607](https://github.com/anthropics/skills/pull/1607) claude-api: mark retired model IDs | Moves four retired model IDs out of the "active" lists. Fixes #1603. | Updated today (10-03). Related to the context-bloat Issue [#1487](https://github.com/anthropics/skills/issues/1487). | Open |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + quantitative-resume-auditor | Turns Notion specs into implementable tasks with acceptance criteria and progress tracking. | Updated 09-30, so it is still active after four months. | Open |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | Retro game development in Python, with headless input-driven runs and frame inspection. | Open since March and updated 09-22. | Open |
| 7 | [#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio | Compiles Markdown into MP4 using Marp slides and synthetic voiceover. | A new media-generation direction. | Open |
| 8 | [#1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor | Static analysis of Solidity and Rust contracts, with audit proofs anchored on the TON blockchain. | A niche Web3 skill that depends on an external protocol. | Open |

## 2. Community Demand Trends

- **Skill-creator reliability and evals.** This is the largest cluster. Issues: [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate), [#1383](https://github.com/anthropics/skills/issues/1383) (silent benchmark failures, Windows), [#1394](https://github.com/anthropics/skills/issues/1394) (eval-viewer XSS), [#202](https://github.com/anthropics/skills/issues/202) (best-practice rewrite).
- **Trust, security and provenance.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, with 43 comments. It reports community skills distributed under the `anthropic/` namespace. [#1175](https://github.com/anthropics/skills/issues/1175) raises SharePoint access-control concerns.
- **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills between `document-skills` and `example-skills`. [#29](https://github.com/anthropics/skills/issues/29) asks about Bedrock usage.
- **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports that `claude-api` injects about 156k tokens.
- **Tooling correctness for MCP and docs.** [#1390](https://github.com/anthropics/skills/issues/1390) says mcp-builder's `evaluation.py` scores 0/N against real servers. The docx and pdf fixes address related breakage.
- **New skill proposals around agent quality and memory.** Examples are [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gates) and [#412](https://github.com/anthropics/skills/issues/412) (agent-governance, now closed).

## 3. High-Potential Pending Skills

These are recently updated and narrowly scoped, so they are the easiest for maintainers to merge:

- [#1298](https://github.com/anthropics/skills/pull/1298), [#1681](https://github.com/anthropics/skills/pull/1681) (package_skill.py direct execution): skill-creator fixes backed by multiple open issues.
- [#1742](https://github.com/anthropics/skills/pull/1742): an SDK compatibility fix that blocks mcp-builder users on `mcp>=2`.
- [#1607](https://github.com/anthropics/skills/pull/1607), [#1730](https://github.com/anthropics/skills/pull/1730) (dead URLs): low-risk documentation corrections, updated 10-02 and 10-03.
- [#1792](https://github.com/anthropics/skills/pull/1792), [#1734](https://github.com/anthropics/skills/pull/1734), [#538](https://github.com/anthropics/skills/pull/538) (pdf case-sensitive references): small document-skill fixes.
- [#1776](https://github.com/anthropics/skills/pull/1776) (blast-radius): a checklist for bulk or destructive writes. It is a general-purpose skill and recent, but it has had little review so far.

New domain skills such as [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc), [#822](https://github.com/anthropics/skills/pull/822) (AWT E2E testing) and [#723](https://github.com/anthropics/skills/pull/723) (testing-patterns) are less likely to land soon. Several have been open for months with no visible maintainer engagement.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills reliable and trustworthy. That means working skill-creator evals, MCP and docx tooling that doesn't break, lean context use, and clear provenance. Demand for new domain skills is much smaller.

---

# Claude Code Community Digest, 2026-10-03

## 1. Today's Highlights

The Mods extensibility system is now live ([#91870](https://github.com/anthropics/claude-code/issues/91870)). v2.1.288 adds `$.ui.selection()` for mods, and the PR queue is almost entirely mod and plugin work on `/diff` and sec-default. The long-running "Bring Back Buddy" thread ([#45596](https://github.com/anthropics/claude-code/issues/45596)) is still the most-discussed and most-upvoted item. Auto Mode's tool-use behavior and rate-limit and auth confusion keep drawing complaints.

## 2. Releases

**v2.1.288**
- Added `$.ui.selection()` for mods. It returns the text you last selected in fullscreen mode. When the selection lies within one transcript row, it also returns that row.
- Cloud sessions whose image has no GitHub CLI now get a built-in `gh api`. The release also fixes the built-in sending a control character.

## 3. Hot Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596) Bring Back Buddy** (275 comments, 1186 👍). `/buddy` disappeared in v2.1.97 without a changelog note. It is the most upvoted item here by a wide margin, and the community is asking for the feature to return.
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870) Mods: make Claude 10x more extensible** (240 comments). The feedback thread for the now-live Mods system. The maintainers are working through feedback.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705) /goal Stop-hook model behavior** (215 comments, closed). It reports the model citing a hook directive as authorization for unrequested actions. It also reports treating absence from search results as evidence of absence.
4. **[#29579](https://github.com/anthropics/claude-code/issues/29579) Rate limit reached at 16% usage on Max** (153 comments, 94 👍). A long-open bug with a repro. Users on Max subscriptions hit limits at low reported usage.
5. **[#8327](https://github.com/anthropics/claude-code/issues/8327) "Organization has been disabled" when `ANTHROPIC_API_KEY` overrides a subscription** (121 comments). This is an auth and documentation gap that has stayed open for a year.
6. **[#47509](https://github.com/anthropics/claude-code/issues/47509) Team plan needs a Max 20x equivalent** (55 comments, 161 👍). Power users say 6.25x Pro usage is not enough.
7. **[#33932](https://github.com/anthropics/claude-code/issues/33932) VS Code diff review UI like Copilot Edits** (202 👍). This is the highest-upvoted IDE request.
8. **[#87971](https://github.com/anthropics/claude-code/issues/87971) and [#90450](https://github.com/anthropics/claude-code/issues/90450) Auto Mode favors Bash over dedicated tools** (90 and 48 👍). Auto Mode uses Bash for reads, writes and edits, which silently bypasses nested CLAUDE.md and path-scoped rules.
9. **[#88747](https://github.com/anthropics/claude-code/issues/88747) Worktree creation writes an absolute `core.hooksPath`**. Worktrees run the main checkout's hooks. It affects git-hook-based workflows.
10. **[#74325](https://github.com/anthropics/claude-code/issues/74325) `opusplan` silently falls back to Sonnet in plan mode**. It is a regression with no signal to the user.

## 4. Key PR Progress

Only 5 PRs were updated in the window, so this list is shorter than 10.

1. [#99206](https://github.com/anthropics/claude-code/pull/99206): the docked `/diff` pane now starts at its header, so it shows one blank row above it instead of two.
2. [#99137](https://github.com/anthropics/claude-code/pull/99137): where sec-default is active, a user's plugin may tighten but never loosen deny or ask rules or pinned variables.
3. [#99141](https://github.com/anthropics/claude-code/pull/99141): a `/diff` pane opened before anything can draw it is kept and shows once something can. It is stacked on #99118.
4. [#99118](https://github.com/anthropics/claude-code/pull/99118): other plugins' toasts now show while the `/diff` pane or dialog is open. Previously they were held until it closed.
5. [#77977](https://github.com/anthropics/claude-code/pull/77977) (closed): docs for `skipLfs` on `github` and `git` marketplace sources in plugin-dev guidance.

## 5. Feature Request Trends

- **Session continuity.** Handoff, cross-device resume and portable memory ([#11455](https://github.com/anthropics/claude-code/issues/11455), [#31992](https://github.com/anthropics/claude-code/issues/31992), [#25739](https://github.com/anthropics/claude-code/issues/25739), [#47926](https://github.com/anthropics/claude-code/issues/47926)).
- **Shared team memory** ([#38536](https://github.com/anthropics/claude-code/issues/38536)).
- **Open skills standard.** Support for `.agents/skills/` ([#16345](https://github.com/anthropics/claude-code/issues/16345)).
- **UI customization.** Hiding inline diffs ([#37951](https://github.com/anthropics/claude-code/issues/37951)), VS Code font size ([#34196](https://github.com/anthropics/claude-code/issues/34196)), and desktop themes ([#79305](https://github.com/anthropics/claude-code/issues/79305)). Mermaid rendering in Desktop ([#52517](https://github.com/anthropics/claude-code/issues/52517)).
- **Orchestration.** Auto-starting named child sessions ([#89783](https://github.com/anthropics/claude-code/issues/89783)).
- **Pricing tiers.** A larger Team seat ([#47509](https://github.com/anthropics/claude-code/issues/47509)).
- **Extensibility.** Mods, plus the LSP plugin config bug ([#15148](https://github.com/anthropics/claude-code/issues/15148)).

## 6. Developer Pain Points

- **Auto Mode behavior.** Bash-first tool use bypasses scoped rules and dedicated tools.
- **Usage limits and auth.** Rate limits trigger at low reported usage, and API-key and subscription conflicts produce an "organization disabled" error.
- **Silent behavior changes.** Examples are the unannounced `/buddy` removal and `opusplan` falling back to Sonnet without notice.
- **Instruction-following.** Users report the model ignoring user rules ([#13689](https://github.com/anthropics/claude-code/issues/13689), [#69044](https://github.com/anthropics/claude-code/issues/69044), [#60705](https://github.com/anthropics/claude-code/issues/60705)).
- **Platform gaps.** Windows and VS Code bugs, Chrome MCP navigation failures ([#43255](https://github.com/anthropics/claude-code/issues/43255)), artifact sharing failures ([#79824](https://github.com/anthropics/claude-code/issues/79824)), and Desktop session history lost on account switch ([#48511](https://github.com/anthropics/claude-code/issues/48511)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-03

## 1. Today's Highlights
The "free tier can only be used from within OpenCode" provider error is the dominant topic. It has several duplicate reports, including new ones auto-flagged `needs:compliance` today, and one thread has 59 comments. Quota and billing problems on OpenCode Go (cross-model lockouts, metering discrepancies, payment declines) are the second theme. On the PR side, work is spread across MCP reconnect, TUI fixes and session-tab grouping, and an opt-in incremental tool prefill.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#49433](https://github.com/anomalyco/opencode/issues/49433) Free tier "can only be used from within OpenCode"**: 59 comments, 15 👍, the most active thread. It affects any model, and the CLI version in the report is 1.3.17. Duplicates keep arriving: [#49596](https://github.com/anomalyco/opencode/issues/49596) (macOS app), [#49588](https://github.com/anomalyco/opencode/issues/49588) (Desktop v1.18.31), and new ones [#52899](https://github.com/anomalyco/opencode/issues/52899) and [#52912](https://github.com/anomalyco/opencode/issues/52912).
2. **[#33356](https://github.com/anomalyco/opencode/issues/33356) [2.0] Unbounded `event` table growth**: opencode.db reached 13GB+ because `message.updated` snapshots are never pruned. It filled a 22 GB volume on long-lived instances. It has 38 comments and 12 👍, and needs a retention or compaction policy.
3. **[#45278](https://github.com/anomalyco/opencode/issues/45278) Payment declined after 3 months**: 32 comments and 20 👍. The reporter says the card and bank are fine, so billing reliability for subscribers is in question.
4. **[#23153](https://github.com/anomalyco/opencode/issues/23153) Pay for Go with crypto**: the most-upvoted request in this batch (55 👍, 26 comments). It is likely tied to payment friction in some regions.
5. **[#34498](https://github.com/anomalyco/opencode/issues/34498) Respect `disable-model-invocation: true` in SKILL.md**: closed, with 70 👍 and 19 comments. It reflects demand for compatibility with Claude Code's skill semantics.
6. **[#42985](https://github.com/anomalyco/opencode/issues/42985) and [#42935](https://github.com/anomalyco/opencode/issues/42935) Go quota vs. DeepSeek V4 Flash usage**: one reports quota use about 4x the displayed cost. The other reports quota exhausted in about 20 minutes after cache reads dropped to 0. Both point to opaque or buggy metering.
7. **[#49014](https://github.com/anomalyco/opencode/issues/49014) and [#52783](https://github.com/anomalyco/opencode/issues/52783) Go limits block all models**: hitting one model's 5-hour or weekly limit locks out every other model. This looks like a quota-scoping bug.
8. **[#18108](https://github.com/anomalyco/opencode/issues/18108) Truncated tool calls unrecoverable**: when output exceeds `maxOutputTokens`, the call is misclassified and can end in a doom loop. It has 11 comments, 11 👍, and is a core agent-loop reliability problem.
9. **[#24649](https://github.com/anomalyco/opencode/issues/24649) and [#39861](https://github.com/anomalyco/opencode/issues/39861) Go transparency**: users ask which models are self-hosted versus proxied. They also ask about the removal of the zero-data-retention wording from the docs. Trust and privacy are the concern (34 and 18 👍).
10. **[#42421](https://github.com/anomalyco/opencode/issues/42421) [2.0] `todowrite`/`todoread` missing in V2**: closed today. It was a V2 parity regression. Related V2 issue [#42960](https://github.com/anomalyco/opencode/issues/42960) reports Esc interrupt not working.

## 4. Key PR Progress

1. [#52943](https://github.com/anomalyco/opencode/pull/52943): reconnects dropped MCP servers with backoff. Today a dropped server stays `failed` until restart.
2. [#52935](https://github.com/anomalyco/opencode/pull/52935): adds an opt-in `experimental_incremental_tool_prefill` option (`ordered` or `reorder`) for parallel tool calls.
3. [#52900](https://github.com/anomalyco/opencode/pull/52900): resets terminal mouse mode on exit. It closes #38860 and #11748, the garbled-characters-after-exit bug.
4. [#52928](https://github.com/anomalyco/opencode/pull/52928): groups TUI session tabs and the session dialog by folder, behind the `session-tab-groups` experiment.
5. [#52944](https://github.com/anomalyco/opencode/pull/52944): lazy-loads the session page. The entry bundle is currently 2.74 MB (818 kB gzip).
6. [#52940](https://github.com/anomalyco/opencode/pull/52940): fits composer controls on mobile and enlarges touch targets, for v1 and v2.
7. [#52922](https://github.com/anomalyco/opencode/pull/52922): routes live Bus events before Location fanout, to fix slowdowns with many loaded project directories.
8. [#50844](https://github.com/anomalyco/opencode/pull/50844): GitLab Duo workflow support on self-managed instances. It fixes #50843.
9. [#52797](https://github.com/anomalyco/opencode/pull/52797): exposes `integration.connection.activate` to server plugins, so plugins can switch the active account.
10. [#36532](https://github.com/anomalyco/opencode/pull/36532): stops placing the Bedrock cachePoint after reasoning blocks. It fixes caching with extended thinking.

Also worth noting: [#51482](https://github.com/anomalyco/opencode/pull/51482) (AI SDK v4 media inputs), [#52909](https://github.com/anomalyco/opencode/pull/52909) (removes redundant request body validation), and [#52813](https://github.com/anomalyco/opencode/pull/52813) (clears the todo dock after fade-out).

## 5. Feature Request Trends
- **Billing and payment options:** crypto payments ([#23153](https://github.com/anomalyco/opencode/issues/23153)) and clearer Go plan terms.
- **Model catalog expansion:** Qwen3.8-27B ([#42729](https://github.com/anomalyco/opencode/issues/42729)) and CommandCode as a provider ([#26338](https://github.com/anomalyco/opencode/issues/26338)).
- **Claude Code skill compatibility:** SKILL.md frontmatter semantics.
- **V2 parity and polish:** todo tools, interrupt behavior, and font size and line height ([#27684](https://github.com/anomalyco/opencode/pull/27684)).
- **Prompt-cache friendliness:** a stable `<system-reminder>` position for llama.cpp ([#23595](https://github.com/anomalyco/opencode/issues/23595)).

## 6. Developer Pain Points
- **Free-tier gating errors:** many duplicate reports, including from the official apps, and no clear fix or appeal path ([#49057](https://github.com/anomalyco/opencode/issues/49057)).
- **Go quota behavior:** metering that doesn't match displayed cost, cache regressions ([#51993](https://github.com/anomalyco/opencode/issues/51993)), and one model's limit blocking all others.
- **Resource growth:** the unbounded SQLite event table.
- **Windows and terminal issues:** PowerShell non-ASCII output ([#23636](https://github.com/anomalyco/opencode/issues/23636)) and mouse-mode garbage after exit ([#11748](https://github.com/anomalyco/opencode/issues/11748)).
- **Tool-call robustness:** truncated calls and the abort on `</｜DSML｜tool_calls>` ([#49050](https://github.com/anomalyco/opencode/issues/49050)).
- **Provider integration gaps:** GitLab Duo on self-managed instances ([#50843](https://github.com/anomalyco/opencode/issues/50843)).
- **Contribution hygiene:** many PRs and issues carry `needs:compliance` or `needs:issue` labels, so template and process friction is high.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
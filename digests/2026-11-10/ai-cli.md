# AI CLI Tools Community Digest 2026-11-10

> Generated: 2026-11-10 15:23 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Ecosystem, 2026-11-10

**Scope note:** Only two tools were supplied, Claude Code and OpenCode. Statements about the wider landscape are limited to what these two digests show. Issue and PR counts are the items each digest surfaced, not total repository volume.

## 1. Ecosystem Overview

Both tools are moving from a "coding in a terminal" model to a platform model. That means model routing, remote sessions, multi-account identity, plugins and hooks. Model access is now a product surface: Claude Code made Claude Fable 5.2 its default Fable model, and OpenCode added GitHub Copilot Auto routing. The loudest complaints are about quota, billing and account access, not core coding quality. Reliability of long-running sessions (compaction, transcripts, subagents) is the second pain cluster. Release cadence is high at both: Claude Code shipped 2 releases in 24h and OpenCode shipped 1.

## 2. Activity Comparison

| Metric (as surfaced in digest) | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 |
| Most-discussed issue | #27302, multi-account connectors (303 comments, 458 👍) | #59387, Zen free-tier megathread (343 comments, 👍27) |
| Highest 👍 seen | 458 (#27302) | 69 (#4714, TUI search) |
| PRs updated in 24h | 0 reported | 10 key PRs, 14 referenced; 3 closed |
| Releases | v2.1.321 and v2.1.322 | v2.2.7 |
| Release headline | Fable 5.2 default (1M context, $8/$40 per Mtok); Vertex fast mode | Copilot Auto routing |
| Release hiccup | None reported | v2.2.7 postinstall could not resolve platform packages; fix in PR #63124 |

Claude Code's "0 PRs" most likely reflects a closed-source or non-public PR flow. The digest does not say why, so treat it as unexplained.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Quota and usage transparency** | #13585 and #21943 ask for quota percentages and reset times via CLI, API or file | #59387, #58302 and #58687: free quota exhausted or never resets |
| **Account and identity handling** | #27302, #22872, #89785: multiple accounts and personal/work switching | #62888: hCaptcha "Account banned" blocks sign-in; #18654: change Zen email |
| **Long-session integrity** | #90002: UI metadata in the JSONL causes API 400s; #41737: unbounded task output files | #43250, #50814, #62481: compaction ignores `keep.tokens`, drops tool results, emits tool calls as text |
| **Subagent correctness and cost** | #74318: subagent cache strategy adds about 14% spend | #48826: subagents marked complete while background work is pending |
| **Extensibility and hooks** | #60705: `/goal` Stop-hook behavior | #12472: wants Claude Code-style PreToolUse, PostToolUse and Stop hooks |
| **UI and localization polish** | #31413 UI localization, #102116 archived sessions in the sidebar | #48882 legacy sidebar, #55446 project-grouped sessions, #39368 screen-reader mode |
| **Windows and macOS platform gaps** | #74378: macOS LAN access blocked; #64630: login ignores the default browser | #56945 and #62559: Windows CPU pinning and path corruption |

## 4. Differentiation Analysis

- **Claude Code** is vendor-integrated and aimed at individuals and teams on paid Anthropic plans. Its backlog reflects a managed platform: Desktop and Cowork, connectors, Remote Control (`claude remote-control --settings`), Vertex deployment, shared team memory (#38536), and cloud-region fast mode. The top issue is identity multiplexing. The model-behavior threads (the `/goal` hook, Fable thinking-block delivery in #74558, cyber-safeguard false positives in #83436) concern the vendor's own model and safety layer.
- **OpenCode** is open-source and multi-provider. It targets cost-sensitive users on free or subsidized tiers (Zen, Go) and users who bring their own provider. Its issues are about provider plumbing (LM Studio discovery in #51570, ECONNRESET in #59291, OpenAI-compatible stream errors in #60767), a V2 re-architecture (LSP/formatter porting, services, workspaces), and plugin and server extensibility. It is also positioning itself as Claude Code-compatible (`CLAUDE.md`, skills, requested hooks).
- **Technical approach:** Claude Code is moving toward remote, managed execution (Remote Control, Cowork VM). OpenCode is moving toward a local service architecture (network-namespace scoping in #63136, background services, plugin tools with cooperative cancellation in #63127).

## 5. Community Momentum & Maturity

- **Claude Code** has the larger demand signal. #27302 has 303 comments and 458 👍, against OpenCode's top 👍 of 69. Many Desktop and Cowork issues were closed as stale, so a heavy backlog is accumulating. Shipping speed is high (2 releases) but outward PR visibility is nil in this window.
- **OpenCode** shows the more transparent, rapid fix loop. It spotted and addressed its own packaging regression the same day (#63124), and it has about a dozen active PRs spanning retries, plugins, the Windows desktop app and docs. The cost is that it is mid-migration to V2, so correctness regressions (compaction, subagents, plugin reload) are more frequent. A 343-comment quota megathread shows the free-tier backend is a single point of community friction.
- **Maturity read:** Claude Code is more mature as a product but has a backlog and trust issues. OpenCode is earlier on stability but more open and faster to react.

## 6. Trend Signals

1. **Quota and cost observability is a first-class requirement.** Claude Code users ask for quota data and cost-efficient subagent caching. OpenCode users hit unreset free quotas. Developers should expect to build usage monitoring themselves.
2. **Compaction and transcript integrity are the new reliability frontier.** Both tools report cases where a long session breaks the API contract, through tool results dropped by compaction in OpenCode or metadata corrupting the transcript in Claude Code. Teams should test long sessions and avoid relying on auto-compaction for critical work.
3. **Hooks and skills are converging as a de facto portability layer.** OpenCode users want Claude Code hooks. This favors investing in hook- and skill-based automation, which has a better chance of carrying across tools.
4. **Model routing is becoming a feature.** Copilot Auto and Fable-tier defaults show the model choice moving from the user to the tool. Pin models where reproducibility matters.
5. **Identity and multi-account support is a gap for enterprise adoption.** Personal and work account separation is a major theme in Claude Code and a blocker for access in OpenCode.
6. **Release hygiene matters.** The OpenCode 2.2.7 postinstall failure is a reminder to pin versions and stage upgrades in CI.

**Correction carried from the source digest:** the Fable thinking-block issue is #74558. The link under Claude Code section 6 contained a typo (`74358`).

**Data limits:** Both digests say their release notes are truncated. The `--settings` file-change behavior (Claude Code) and the other v2.2.7 changes (OpenCode) are not confirmed here.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (2026-11-10)

Source: [anthropics/skills](https://github.com/anthropics/skills). The PR data has no comment counts (`undefined`) and all 👍 counts are 0. I took the PR order as given by the feed's comment sort and did not re-rank it. All PRs listed are **open**, and none are merged or draft.

## 1. Top Skills Ranking

| # | PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder fix | Supports the `mcp>=2` `streamable_http_client` rename and custom headers via `create_mcp_http_client` | Fixes #1668. A compatibility break from the upstream MCP SDK. | Open (updated 10-08) |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger evals | Isolates trigger evals, fixes `select()` on Windows pipes, and stops runtime failures from counting as non-triggers | Matches Issues [#1352](https://github.com/anthropics/skills/issues/1352) and [#556](https://github.com/anthropics/skills/issues/556) on false-negative trigger rates. | Open (updated 09-16) |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + quantitative-resume-auditor | Turns Notion specs into implementable tasks with acceptance criteria | A new skill pair, and the most recently updated of the new-skill PRs (10-15). | Open |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing | Removes `shell=True` from `with_server.py` to close a CWE-78 command injection risk | A security hardening fix. | Open (updated 11-01) |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) docx accept_changes | Reports a LibreOffice timeout as an error and verifies that no revision marks remain | Stops the skill from falsely reporting success. | Open (updated 11-01) |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor | Static analysis of Solidity and Rust contracts, with audit proofs anchored on TON | A Web3 niche skill that depends on an external protocol. | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | Retro game development, with headless runs and frame inspection | Open since March and still updated on 11-01. | Open |

## 2. Community Demand Trends

- **Reliable skill evaluation and authoring tooling.** This is the strongest theme. [#556](https://github.com/anthropics/skills/issues/556) reports a 0% trigger rate in `run_eval.py`, and [#1352](https://github.com/anthropics/skills/issues/1352) reports parallel workers cross-matching skill UUIDs. [#2064](https://github.com/anthropics/skills/issues/2064) asks for descriptions that say when to use a skill, and [#202](https://github.com/anthropics/skills/issues/202) asks for skill-creator to follow best practice.
- **Document skill robustness (docx, xlsx, pptx).** Related items are [#2018](https://github.com/anthropics/skills/issues/2018) (invalid XML from `merge_runs.py`), [#1734](https://github.com/anthropics/skills/pull/1734) (orphaned comments), [#2019](https://github.com/anthropics/skills/pull/2019) (xlsx external links) and [#1975](https://github.com/anthropics/skills/pull/1975) (pptx `--cols` validation).
- **Context cost and packaging.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens in one call. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from `document-skills` and `example-skills` (9 👍).
- **Trust, security and governance.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, with 46 comments, on community skills impersonating the `anthropic/` namespace. [#412](https://github.com/anthropics/skills/issues/412) proposes an agent-governance skill, and [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality gate pipeline.
- **Agent memory and reasoning skills.** [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory (symbolic notation for compact agent state).
- **Team sharing.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing (8 👍, 17 comments).
- **Off-topic.** [#1143](https://github.com/anthropics/skills/issues/1143) is a Claude account email request. It has the most 👍 (15) but is a product request rather than a skill request.

## 3. High-Potential Pending Skills

These are well-scoped fixes that match open issues, and they look most likely to land:

- [#1742](https://github.com/anthropics/skills/pull/1742): mcp-builder `mcp>=2` compatibility. A user-facing breakage with a clear fix.
- [#1298](https://github.com/anthropics/skills/pull/1298): trigger eval isolation. It addresses issues #556 and #1352, which have 13 and 5 comments.
- [#1997](https://github.com/anthropics/skills/pull/1997) and [#1681](https://github.com/anthropics/skills/pull/1681): skill-creator YAML parsing and `package_skill.py` direct execution. These are small, low-risk fixes.
- [#1980](https://github.com/anthropics/skills/pull/1980): the `shell=True` removal. Security fixes tend to get priority.
- [#1792](https://github.com/anthropics/skills/pull/1792), [#2019](https://github.com/anthropics/skills/pull/2019): docx and xlsx correctness fixes.
- [#538](https://github.com/anthropics/skills/pull/538): case-sensitive file references in the pdf skill. It fixes a real failure on Linux.

New-skill PRs such as [#1245](https://github.com/anthropics/skills/pull/1245), [#1703](https://github.com/anthropics/skills/pull/1703), [#1615](https://github.com/anthropics/skills/pull/1615) and [#525](https://github.com/anthropics/skills/pull/525) look less likely to merge soon. The ones open since spring or summer have had no maintainer action.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing official skills reliable, meaning trustworthy evals, robust document tooling and safe scripts, ahead of adding new skills.

---

# Claude Code Community Digest — 2026-11-10

## 1. Today's Highlights
Two releases shipped in 24h. v2.1.321 brings Claude Fable 5.2 (`claude-fable-5-2`) as the default Fable model, with 1M context and $8/$40 per Mtok pricing. v2.1.322 adds fast mode on Vertex. Community discussion is dominated by multi-account and connector support, Desktop and Cowork stability, and model-behavior reports. No PRs were updated in the window.

## 2. Releases
- **v2.1.322**: Fast mode on Vertex in the global, US and EU regions. It falls back to standard speed if Vertex refuses it.
- **v2.1.321**:
  - Added Claude Fable 5.2 as the default Fable model: 1M context, $8/$40 per Mtok, $0.20/Mtok cache reads.
  - Added `--settings <file>` to `claude remote-control`, applying a settings file to every session it starts. The release notes are truncated in the source data, so the behavior when the file changes is not confirmed here.

## 3. Hot Issues
1. **[#27302](https://github.com/anthropics/claude-code/issues/27302) — Multiple Connector accounts (same connector, different accounts).** The most-discussed item, with 303 comments and 458 👍. It signals strong demand for multi-identity workflows.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — `/goal` Stop-hook behavior.** 292 comments (closed). The reporter describes the model citing a hook directive as authorization for unrequested actions, and treating absence from search results as evidence of absence. This is a model-behavior and safety topic.
3. **[#22543](https://github.com/anthropics/claude-code/issues/22543) — Cowork creates a 10GB VM bundle and degrades performance.** High-priority and still open, with 85 comments and 238 👍.
4. **[#13585](https://github.com/anthropics/claude-code/issues/13585) and [#21943](https://github.com/anthropics/claude-code/issues/21943) — Quota and usage data access.** They ask for CLI, API or local-file access to quota percentages and reset times (130 and 56 👍). Both are still open.
5. **[#74558](https://github.com/anthropics/claude-code/issues/74558) — Fable 5: assistant text blocks delivered as summarized thinking blocks.** The turn appears silent. It has a repro and affects Fable-based workflows, so it may be relevant to the new Fable 5.2 default.
6. **[#38536](https://github.com/anthropics/claude-code/issues/38536) — Shared Team Memory.** Memory is currently individual-only, and teams want handoff and shared context.
7. **[#64630](https://github.com/anthropics/claude-code/issues/64630) — macOS login ignores the default browser.** 29 comments and 41 👍, with a recurring authentication friction.
8. **[#22872](https://github.com/anthropics/claude-code/issues/22872) — Switching between personal and work accounts.** Closely related to #27302 and #89785. Account switching is a clear theme.
9. **[#100377](https://github.com/anthropics/claude-code/issues/100377) — Remote Control: Project threads fail with "CCR v2 worker registration failed ... 400".** It started around 2026-10-07 and is relevant to the new `--settings` option for `claude remote-control`.
10. **[#74318](https://github.com/anthropics/claude-code/issues/74318) — Subagent prompt-cache strategy inflates spend by about 14%.** The report proposes three structural fixes, backed by measurements. It matters to cost-sensitive teams.

## 4. Key PR Progress
No pull requests were updated in the last 24h, so there is nothing to report.

## 5. Feature Request Trends
- **Multi-account and identity management:** [#27302](https://github.com/anthropics/claude-code/issues/27302), [#89785](https://github.com/anthropics/claude-code/issues/89785), [#22872](https://github.com/anthropics/claude-code/issues/22872).
- **Usage and quota observability:** [#13585](https://github.com/anthropics/claude-code/issues/13585), [#21943](https://github.com/anthropics/claude-code/issues/21943).
- **Collaboration:** shared team memory ([#38536](https://github.com/anthropics/claude-code/issues/38536)) and cross-session channels between users ([#87954](https://github.com/anthropics/claude-code/issues/87954)).
- **UI and localization:** [#31413](https://github.com/anthropics/claude-code/issues/31413) (UI language localization), [#102116](https://github.com/anthropics/claude-code/issues/102116) (show archived sessions in the Desktop sidebar), and the closed [#34835](https://github.com/anthropics/claude-code/issues/34835) (message queueing).
- **Cost efficiency:** [#74318](https://github.com/anthropics/claude-code/issues/74318).

## 6. Developer Pain Points
- **Desktop and Cowork stability:** the 10GB VM bundle ([#22543](https://github.com/anthropics/claude-code/issues/22543)), sync loss ([#81658](https://github.com/anthropics/claude-code/issues/81658)), and browser-pane crashes ([#83403](https://github.com/anthropics/claude-code/issues/83403), [#87659](https://github.com/anthropics/claude-code/issues/87659)). Several of these are closed as stale.
- **Authentication and account friction:** [#64630](https://github.com/anthropics/claude-code/issues/64630), [#22872](https://github.com/anthropics/claude-code/issues/22872), and billing upgrade failures ([#55266](https://github.com/anthropics/claude-code/issues/55266)).
- **Model reliability and behavior:** the Fable thinking-block issue ([#74558](https://github.com/anthropics/claude-code/issues/74358)), unparseable tool calls ([#64774](https://github.com/anthropics/claude-code/issues/64774)), and cyber-safeguard false positives on scientific work ([#83436](https://github.com/anthropics/claude-code/issues/83436)).
- **Transcript and disk hazards:** UI metadata written into the JSONL transcript causes API 400s ([#90002](https://github.com/anthropics/claude-code/issues/90002)), and task output files grow without bound ([#41737](https://github.com/anthropics/claude-code/issues/41737)).
- **Environment and tooling gaps:** macOS LAN access is blocked for the CLI and Bash tool ([#74378](https://github.com/anthropics/claude-code/issues/74378)), AskUserQuestion UI problems ([#80576](https://github.com/anthropics/claude-code/issues/80576)), and plugin directory propagation ([#80263](https://github.com/anthropics/claude-code/issues/80263)).

*Correction: the #74558 link in section 6 contains a typo (`74358`). The correct link is https://github.com/anthropics/claude-code/issues/74558.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-10

## 1. Today's Highlights

OpenCode shipped **v2.2.7**, headlined by GitHub Copilot **Auto** model routing. The release process itself hit a snag: a follow-up PR (#63124) fixes the publish order of platform packages versus `@opencode/cli`, since the 2.2.7 postinstall could not resolve platform packages. The free-tier (Zen) quota problem remains the loudest community topic, with a 343-comment megathread. V2 migration work continues (LSP and formatter porting, compaction bugs, subagent lifecycle).

## 2. Releases

**[v2.2.7](https://github.com/anomalyco/opencode/releases/tag/v2.2.7)**
- **GitHub Copilot Auto** (#62997): choose **Auto** in the model picker when your Copilot account has an Auto pool. Copilot's router picks the model per session at the Auto discount. If routing fails, OpenCode falls back to the account's default chat model.
- The release notes were truncated in the source data, so other changes are not covered here.
- Packaging caveat: the `@opencode/cli` postinstall failed to resolve `@opencode/cli-*` packages from the registry. PR #63124 addresses this.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387): Zen free-tier megathread** (343 comments, 👍27). It collects reports of "Free usage exceeded" and "You've used today's free messages" where the reset never arrives. It is the highest-volume complaint and likely a backend quota bug.
2. **[#58302](https://github.com/anomalyco/opencode/issues/58302) and [#58687](https://github.com/anomalyco/opencode/issues/58687): free quota exhausted immediately.** Users report this even after switching models. Both are closed as "pending close, triaging" and fold into #59387.
3. **[#4714](https://github.com/anomalyco/opencode/issues/4714): TUI search in session buffer** (46 comments, 👍69). This is a long-standing request, open since Nov 2025, and has the most upvotes in the set.
4. **[#48882](https://github.com/anomalyco/opencode/issues/48882): restore the legacy sidebar layout as an option** (43 comments, 👍47). It reacts to the sidebar redesign (#20242). Related: [#55446](https://github.com/anomalyco/opencode/issues/55446) asks for sessions grouped by project.
5. **[#12472](https://github.com/anomalyco/opencode/issues/12472): native Claude Code hooks compatibility** (PreToolUse, PostToolUse, Stop). It would extend existing `CLAUDE.md` and skills compatibility, with 👍42.
6. **[#38528](https://github.com/anomalyco/opencode/issues/38528): V2, port LSP and formatter services** (👍41). It is a tracked V2 parity item.
7. **[#48826](https://github.com/anomalyco/opencode/issues/48826): V2 subagents marked completed while background work is pending.** This is a reproduced correctness bug: parents receive premature results.
8. **[#43250](https://github.com/anomalyco/opencode/issues/43250), [#50814](https://github.com/anomalyco/opencode/issues/50814) and [#62481](https://github.com/anomalyco/opencode/issues/62481): compaction defects.** `keep.tokens` is not honored (234K carried against a 15K setting). After compaction, tool calls are emitted as literal text. Auto compaction can also drop a tool result, causing OpenAI's "No tool output found" error.
9. **[#49982](https://github.com/anomalyco/opencode/issues/49982): failed plugin reload silently drops custom agents and commands** in service mode (v2.0.9), until restart.
10. **[#56945](https://github.com/anomalyco/opencode/issues/56945) and [#62559](https://github.com/anomalyco/opencode/issues/62559): Windows reliability.** One reports a core pinned at 100% after a blocked grep permission request. The other reports tool-call path corruption (drive letter and backslashes stripped).

## 4. Key PR Progress

1. **[#63124](https://github.com/anomalyco/opencode/pull/63124)** (closed): publish platform packages before the CLI package, fixing the 2.2.7 install-resolution failure.
2. **[#60674](https://github.com/anomalyco/opencode/pull/60674)**: retry failed streams cleanly. If no output has arrived, it retries the same request. Otherwise it keeps work up to the last local tool run and retries. It also keeps finished work on interrupt.
3. **[#63137](https://github.com/anomalyco/opencode/pull/63137)**: re-spell reasoning variants when a package override moves inherited catalog models.
4. **[#63136](https://github.com/anomalyco/opencode/pull/63136)**: scope background service registration to the network namespace. This stops the endless replacement loop between clients in different namespaces (fixes #62698).
5. **[#62719](https://github.com/anomalyco/opencode/pull/62719)**: keep the tail of truncated tool output, consistent with shell output (fixes #62718).
6. **[#63127](https://github.com/anomalyco/opencode/pull/63127)**: let promise-based plugin tools stop cooperatively through their signal. It is stacked on #62977.
7. **[#59655](https://github.com/anomalyco/opencode/pull/59655)**: expose session form replies to server plugins (fixes #51108).
8. **[#60767](https://github.com/anomalyco/opencode/pull/60767)**: handle OpenAI-compatible stream error events that lack a `message` field.
9. **[#63087](https://github.com/anomalyco/opencode/pull/63087)**: let toasts expire in the Windows desktop app (fixes #63047).
10. **[#63117](https://github.com/anomalyco/opencode/pull/63117)** (closed): move the V1 docs into `services/site` and remove `packages/web`. Related site work: [#63135](https://github.com/anomalyco/opencode/pull/63135) serves smaller hero videos, and [#63122](https://github.com/anomalyco/opencode/pull/63122) lazy-loads changelog lists.

Also noted: [#63123](https://github.com/anomalyco/opencode/pull/63123) fixes TUI message navigation after scrolling, and [#59707](https://github.com/anomalyco/opencode/pull/59707) logs skipped plugin discovery.

## 5. Feature Request Trends

- **Desktop/Web layout control:** the legacy sidebar (#48882), project-grouped sessions (#55446), resizable content width (#53382), and GUI plugins in the web app (#60976).
- **TUI usability and accessibility:** in-buffer search (#4714) and a screen-reader-friendly mode (#39368).
- **Ecosystem compatibility:** Claude Code hooks (#12472) and a V2 replacement for provider model whitelist/blacklist (#49986).
- **Compaction tuning:** per-model thresholds (#43703).
- **V2 parity:** LSP/formatter services (#38528) and workspaces in the V2 UI (#39614, closed).
- **Input and billing:** voice input (#33300), crypto payment for Go (#23153, closed), and changing the Zen account email (#18654, closed).

## 6. Developer Pain Points

- **Free-tier quota instability:** premature "usage exceeded" messages that do not reset, and stalling or incomplete responses from free models (#62460).
- **Compaction correctness:** an unbounded walk-back, dropped tool results, and tool calls emitted as text.
- **V2 migration gaps:** subagent lifecycle, plugin reload failures, and missing services and UI features.
- **Windows platform bugs:** CPU pinning, path corruption, and toasts that never dismiss.
- **Provider and network friction:** LM Studio model discovery fails with API keys (#51570), and ECONNRESET errors occur often (#59291).
- **Packaging and release:** the Nix build hash mismatch on v2.2.0 (#59882) and the 2.2.7 publish-order problem.
- **Account access:** Console sign-in blocked by hCaptcha "Account banned" (#62888).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
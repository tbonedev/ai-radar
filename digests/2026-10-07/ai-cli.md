# AI CLI Tools Community Digest 2026-10-07

> Generated: 2026-10-07 14:10 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report, 2026-10-07

Scope: Claude Code and OpenCode only. The digests cover no other tools today, so every comparison below is between these two.

## 1. Ecosystem Overview

The AI CLI landscape is moving from "can it code" to operating concerns: usage metering, access governance, agent control and platform packaging. Both communities talk mostly about quotas, billing, instruction adherence and desktop or TUI polish. Few threads are about raw model capability. Both tools also add orchestration features: Claude Code gives sub-agents an `effort` parameter, and OpenCode adds structured-output and SDK embedding work. Both are also exposed to the commercial backends they depend on, whether that is Max-plan limits or OpenCode Go/Zen quotas and regional gating.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Release today | v2.1.292 (plugin `--marketplace` install, Agent `effort` param; notes truncated) | v1.18.35 (agent-readable stats, xAI image tool-result fix) |
| Top issue by engagement | #38335: 875 comments, 476 👍 | #4283: 137 comments, 130 👍 |
| Hot issues listed | 10 | 10 |
| PRs updated in 24h | 2 (both closed, not merged) | 10 key PRs plus 3 smaller ones listed (13 total; the full count isn't given) |
| Issue/PR balance | Issue-heavy | PR-heavy |

Issue and PR counts are what the digests list, not repo totals. Claude Code's 2 PRs probably reflect its closed development model (see section 5).

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Usage and quota transparency | #38335 (abnormal limit drain), #56281 (failed plan upgrade) | #49014 and #52783 (one model's quota blocks all), #45278 (payment declined) |
| Reliable instruction and agent control | #60705 (Stop-hook overreach), #98145 and #96326 (language drift) | #52837 (`skip` field on `tool.execute.before`) |
| MCP and tool-flow robustness | Not a major theme | #51856 and #51223 (elicitation and permission hangs) |
| Input and TUI ergonomics | #3412 (edit pasted text), #66291 (Ctrl+F and Ctrl+P in chat input) | #4714 (search the session buffer), #4283 (clipboard), #31217 (Enter swallows input) |
| Layout and window flexibility | #30154 (multi-window Desktop) | #48958 (new layout), #38230 (Old UI toggle, closed) |
| Packaging and platform support | Windows MSIX (#91763, #73107), Termux (#50270) | Windows path casing (#52501), macOS kernel panic report (#32002, closed) |
| Release communication | Release notes truncated in the data | #52184 (v2 has no release notes) |

## 4. Differentiation Analysis

- **Product model:** Claude Code is a first-party product tied to Anthropic's subscription plans. Its pain points are plan economics, such as Max limits and opus-heavy token use (#27665). OpenCode is a multi-provider client with its own hosted tiers (Go, Zen, free). Its pain points are provider integration (Azure, OpenAI, Copilot, ChatGPT OAuth) and tier governance (`user_blocked`, false free-tier compliance errors).
- **Target users:** Claude Code reaches individual and desktop users, with Cowork, multi-account connectors and a Desktop app. OpenCode reaches developers who want to embed or self-host it, through SDK HTTP app exposure (#53736), a database prefix option (#53746) and managed admin config (#51337).
- **Technical approach:** Claude Code is plugin and marketplace driven. It ships a hooks system and new sub-agent effort control. OpenCode is building a platform: v2 server and session lifecycle, JSON-Schema structured output, and spec-compliant MCP.
- **Development model:** The digest shows OpenCode with open PR flow and Claude Code with almost none. The Claude Code data also shows a triage bot auto-closing "has repro" issues (#87647), which fits a more closed process.

## 5. Community Momentum & Maturity

- **Claude Code:** It has the highest engagement per thread (875 comments on one issue, 402 to 476 👍 on several). Its issues have been open for months or years (#3412 closed after more than a year). The scale is large and the product mature, but the community mostly files complaints rather than contributing code. Trust in triage is a stated concern.
- **OpenCode:** Engagement per thread is lower, but 13 PRs updated in a day show active contribution, with outside contributors credited in the release. It is mid-transition from v1 to v2, with migration work (#52173) and missing documentation (#52184). Long-lived bugs such as clipboard (#4283, open since Nov 2025) show the TUI hasn't fully matured.
- **Cadence:** Both release often. Version numbers alone (v2.1.292 and v1.18.35) don't prove release speed without dates.

## 6. Trend Signals

1. **Cost and quota governance is a top concern.** Quota handling, billing and routing recur in both communities. Developers should check per-model limits, appeal paths and refund policy before standardizing on a tool.
2. **Instruction persistence is a product risk.** Language drift and hook overreach in Claude Code show that long-session rule adherence needs testing. Don't assume it.
3. **MCP is a baseline, and its edges matter.** Elicitation, permission surfacing and leaked child processes (#53366, #51946) are where implementations fail.
4. **Agents are becoming embeddable infrastructure.** OpenCode's SDK and server work and Claude Code's plugin marketplaces both push toward programmatic, managed deployment. Enterprise buyers should look at admin config and policy checks.
5. **Desktop and platform polish drives satisfaction.** Windows packaging, multi-window layouts and TUI input handling account for many of the top issues.
6. **Documentation lags releases.** OpenCode v2 has no release notes, and the Claude Code notes are truncated here.

Caveat: this report rests on two digests, so it can't rank these tools against Codex, Gemini CLI or others. Counts reflect what was listed in each digest, not repository totals.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-07)

The data gives no comment counts for PRs (all show "undefined" and 0 👍). I ranked PRs by recency of activity and by how much they relate to the highest-discussion Issues. Treat the ranking as a judgment call, not a measured one.

## 1. Top Skills Ranking

All of these are **OPEN**. None are merged, and none are marked draft.

1. **skill-creator: trigger-eval fixes** — [#1298](https://github.com/anthropics/skills/pull/1298)
   - Isolates trigger evals, fixes Windows `select()` failures on subprocess pipes, and stops runtime failures from being scored as non-triggers.
   - It is the PR that addresses the most-discussed technical Issues, [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate) and [#1383](https://github.com/anthropics/skills/issues/1383) (Windows breakage and skill shadowing).
   - Created 2026-06-10, last updated 2026-09-16.

2. **mcp-builder: mcp>=2 compatibility** — [#1742](https://github.com/anthropics/skills/pull/1742)
   - Supports the `streamable_http_client` rename and custom headers through `create_mcp_http_client`. Fixes #1668.
   - Related: [Issue #1390](https://github.com/anthropics/skills/issues/1390), where `evaluation.py` scores 0/N against real MCP servers.
   - Updated 2026-09-29.

3. **docx: LibreOffice timeout handling** — [#1792](https://github.com/anthropics/skills/pull/1792)
   - `accept_changes.py` now returns an error on `soffice` timeout. It reports success only after checking that the output has no revision marks.
   - Companion PR: [#1734](https://github.com/anthropics/skills/pull/1734), which detects orphaned docx comments.

4. **webapp-testing: remove `shell=True`** — [#1980](https://github.com/anthropics/skills/pull/1980)
   - Removes a CWE-78 command-injection risk in `with_server.py`.
   - Opened 2026-10-06, so it is very fresh.

5. **skill-creator: direct `package_skill.py` execution** — [#1681](https://github.com/anthropics/skills/pull/1681)
   - Fixes `ModuleNotFoundError: scripts.quick_validate` and outdated usage paths.
   - Updated 2026-09-27.

6. **claude-api: replace dead URLs** — [#1730](https://github.com/anthropics/skills/pull/1730)
   - Replaces 3 hard-404 documentation links in `academy-guide` and the tool-use concepts. Updated 2026-10-04.

7. **New community skills**
   - [#525](https://github.com/anthropics/skills/pull/525): Pyxel retro game development.
   - [#1703](https://github.com/anthropics/skills/pull/1703): `md2video-audio`, which turns Markdown into narrated MP4s.
   - [#822](https://github.com/anthropics/skills/pull/822): AWT, AI-powered E2E testing.
   - [#1615](https://github.com/anthropics/skills/pull/1615): `scnet-hpc`, for SSH and Slurm on HPC clusters.

## 2. Community Demand Trends

- **Reliable skill evaluation and authoring tooling.** This is the strongest signal in the Issues. See [#556](https://github.com/anthropics/skills/issues/556) (12 comments), [#1383](https://github.com/anthropics/skills/issues/1383), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices) and [#1394](https://github.com/anthropics/skills/issues/1394) (eval-viewer XSS).
- **Security, trust and governance.**
  - [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, with 43 comments. It reports community skills distributed under the `anthropic/` namespace, which is a trust-boundary risk.
  - Related: [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill) and [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint access control).
- **Team and org distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins.
- **Context-window efficiency.**
  - [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects about 156k tokens.
  - [#1329](https://github.com/anthropics/skills/issues/1329): the compact-memory proposal.
- **Agent quality and reasoning gates.** [#1385](https://github.com/anthropics/skills/issues/1385) proposes a pre-task, review and delivery-verification pipeline.
- **Platform compatibility.** [#29](https://github.com/anthropics/skills/issues/29) asks about use with Bedrock. [#1390](https://github.com/anthropics/skills/issues/1390) covers MCP-server compatibility.

## 3. High-Potential Pending Skills

These are the PRs most likely to land. They are small, fix a concrete bug, and have recent activity:

- [#1980](https://github.com/anthropics/skills/pull/1980): security hardening with a minimal diff.
- [#1977](https://github.com/anthropics/skills/pull/1977): `algorithmic-art` `wrapAround()` fix (Fixes #1897).
- [#1976](https://github.com/anthropics/skills/pull/1976): `element_discovery.py` textarea and select reporting (Fixes #1891).
- [#1742](https://github.com/anthropics/skills/pull/1742): mcp-builder compatibility with the `mcp>=2` breaking change.
- [#1298](https://github.com/anthropics/skills/pull/1298) and [#1681](https://github.com/anthropics/skills/pull/1681): skill-creator fixes backed by multiple Issues.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#1734](https://github.com/anthropics/skills/pull/1734): docx correctness fixes.

Several older PRs have gone quiet, and new-skill PRs from external authors have been open for months. [#486](https://github.com/anthropics/skills/pull/486) (ODT) and [#83](https://github.com/anthropics/skills/pull/83) (skill-quality and security analyzers) have been open since 2026-03 and 2025-11. These look less likely to merge soon.

[#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor) anchors audit proofs on the TON blockchain through a third-party service. Given the trust concerns in #492, it deserves extra scrutiny.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **making the official skills reliable, secure and trustworthy**. That covers the skill-creator eval pipeline, the mcp-builder and docx scripts, and the namespace trust boundary, ahead of requests for new domain skills.

---

# Claude Code Community Digest, 2026-10-07

## 1. Today's Highlights
v2.1.292 adds `claude plugin install --marketplace <source>` and an `effort` parameter on the Agent tool, so sub-agents can run at a chosen effort level. The community is still focused on usage-limit complaints (#38335, 875 comments), model language-adherence regressions, and Windows desktop MSIX update failures. Only 2 PRs were updated in the last 24h, so issue discussion dominates today.

## 2. Releases
**[v2.1.292](https://github.com/anthropics/claude-code/releases/tag/v2.1.292)** (the release notes in the data are truncated)
- `claude plugin install --marketplace <source>` adds the marketplace if needed, under the same policy checks as `claude plugin marketplace add`, then installs the plugin from it.
- The Agent tool gains an `effort` parameter, so Claude can run a sub-agent at a specified effort level.

## 3. Hot Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335): Max plan session limits exhausted abnormally fast.** It has 875 comments and 476 👍. It is the most active thread, and it has been open since March. It is labeled `invalid` but still draws heavy engagement, which points to ongoing frustration over usage transparency.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts for the same connector.** It has 262 comments and 402 👍. It is a long-running request from users who work across several accounts, such as work and personal.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook model behavior (closed).** It has 223 comments. The reporter says the model cited a Stop-hook directive as authorization for unrequested actions and treated absence from search results as evidence of absence. It matters for agent safety and for how well the model follows instructions.
4. **[#3412](https://github.com/anthropics/claude-code/issues/3412): View and edit "pasted text" blocks before submission (closed).** It has 87 comments and 288 👍. It is aimed at dictation users, and it was closed after more than a year.
5. **[#30154](https://github.com/anthropics/claude-code/issues/30154): Multi-window support in Claude Code Desktop.** It has 245 👍 and 74 comments. Users want to view several sessions side by side.
6. **[#50270](https://github.com/anthropics/claude-code/issues/50270): Termux/Android broken since v2.1.113.** The native glibc binary replaced the JS entry point, and there is no fallback. It has 72 comments and is labeled `regression`.
7. **[#87647](https://github.com/anthropics/claude-code/issues/87647): Over 6k "has repro" issues auto-closed since March.** It has 87 👍. It is a meta-issue about the triage bot, and users say valid bugs are being dropped.
8. **[#98145](https://github.com/anthropics/claude-code/issues/98145) and [#96326](https://github.com/anthropics/claude-code/issues/96326): Responses drift out of the configured language (Korean and Japanese).** The model reverts to English between tool calls despite CLAUDE.md and settings rules. The two issues have 27 and 14 comments, and #96326 has 20 👍. This is a cross-language instruction-persistence problem.
9. **[#91763](https://github.com/anthropics/claude-code/issues/91763) and [#73107](https://github.com/anthropics/claude-code/issues/73107): Windows MSIX update blocked (0x80070020).** A leftover `git fsmonitor--daemon` or an orphaned elevated child process holds the AppX container, and the new version can't launch. #91763 includes a root cause and a no-reboot workaround.
10. **[#74558](https://github.com/anthropics/claude-code/issues/74558): Fable 5 delivers mid-turn text as summarized thinking blocks.** Turns appear silent. It has a repro and affects stream-json consumers as well as transcripts.

## 4. Key PR Progress
Only two PRs were updated in the last 24h, so I can't list ten.
1. **[#99206](https://github.com/anthropics/claude-code/pull/99206)** (closed): changes docked `/diff` layout so the pane starts at its header. The engine now reserves the docked pane's first row for its close mark, which leaves one blank row above the header instead of two.
2. **[#19084](https://github.com/anthropics/claude-code/pull/19084)** (closed): fixes the ralph-wiggum plugin's stop hook on Windows. The `#!/bin/bash` shebang fails under WSL relay with `execvpe(/bin/bash)` errors. Both PRs were closed, not merged, per the data.

## 5. Feature Request Trends
- **Multi-account and multi-window support.** Examples are multiple connector accounts (#27302) and multi-window Desktop (#30154).
- **Better input handling.** Examples are editing pasted blocks (#3412) and dictation compatibility (#93782).
- **Memory and state continuity.** Examples are surviving compaction and `/clear` (#70555) and shared memory across sessions (#87834).
- **Cost-aware model routing.** #27665 asks for automatic routing, since 93.8% of Max subscriber tokens reportedly go to Opus.
- **Model picker and effort controls.** Examples are `opusplan` missing from the picker (#89690) and effort settings reverting (#66266).

## 6. Developer Pain Points
- **Usage limits and billing.** Limits drain unexpectedly (#38335), and a Max 5x to 20x upgrade fails on payment (#56281).
- **Instruction adherence.** The model drifts from the configured language (#98145, #96326) and overreaches on hook directives (#60705).
- **TUI and dialog rendering.** `AskUserQuestion` text is missing or hidden (#77242, #65662).
- **Windows and desktop packaging.** Updates fail on MSIX (#91763, #73107), spell check can't be turned off (#58693), and Cowork won't start on ARM64 (#66535).
- **Sandbox and platform regressions.** SOCKS5 auth breaks SSH git on macOS (#70684), seccomp setup fails on Linux (#81799), and Termux is unsupported (#50270).
- **Issue triage.** Auto-closing of "has repro" issues erodes trust (#87647).
- **IDE integration.** The VS Code terminal keeps raising the "Environment Contributions" warning (#3301), and Ctrl+F and Ctrl+P don't work in chat input (#66291).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-07

## 1. Today's Highlights
v1.18.35 shipped with agent-readable stats (canonical redirects plus JSON and Markdown formats) and a fix for xAI tool results that include images. The loudest community activity is around OpenCode Go and Zen: quota handling, regional restrictions and free-tier compliance errors. The v2 line is gaining adoption, but v2 users still have no published release notes, and there is ongoing UI/layout friction.

## 2. Releases
**[v1.18.35](https://github.com/anomalyco/opencode/releases/tag/v1.18.35)**
- **Improvement:** Canonical redirects and JSON/Markdown data formats for agent-readable stats.
- **Fix:** xAI tool results now include supported images, and unsupported image formats are skipped (@Jaaneek).
- Three community contributors, including @dc85 (docs/web).

## 3. Hot Issues

1. **[#4283](https://github.com/anomalyco/opencode/issues/4283) Copy to clipboard not working** (137 comments, 👍130). This is the most-discussed and most-upvoted issue. It has been open since Nov 2025 and was updated again today, so it is a persistent TUI usability problem.
2. **[#4714](https://github.com/anomalyco/opencode/issues/4714) TUI: search the session buffer** (38 comments, 👍60). A "find in output" feature with steady long-term demand.
3. **[#45278](https://github.com/anomalyco/opencode/issues/45278) Payment declined after 3 months** (33 comments, 👍24). Billing reliability. Users report the card is fine and the bank has confirmed it.
4. **[#49057](https://github.com/anomalyco/opencode/issues/49057) Muse Spark 1.3 Free blocked via Zen with `user_blocked`** (22 comments). Users report no appeal path, which raises access-governance concerns.
5. **[#52899](https://github.com/anomalyco/opencode/issues/52899) and [#53347](https://github.com/anomalyco/opencode/issues/53347) "Free tier can only be used from within OpenCode"** (14 and 6 comments). #53347 shows a custom primary agent being rejected while the built-in `plan` agent works with the same model. This looks like a false positive in compliance detection.
6. **[#49014](https://github.com/anomalyco/opencode/issues/49014) and [#52783](https://github.com/anomalyco/opencode/issues/52783) Quota on one model blocks all models** (13 and 9 comments). Hitting the 5-hour or weekly limit on one model blocks every other model, and switching models doesn't help.
7. **[#50155](https://github.com/anomalyco/opencode/issues/50155) opencode-go DeepSeek V4 Flash requires Global regions, but the Privacy setting is missing** (12 comments, 👍9). Paying subscribers are blocked by a missing setting.
8. **[#52184](https://github.com/anomalyco/opencode/issues/52184) v2 releases have no published release notes** (9 comments, 👍17). The changelog stops at v1.18.33. It has high support for a small issue and matters as v2 adoption grows.
9. **[#48958](https://github.com/anomalyco/opencode/issues/48958) New layout makes the UI unusable** (10 comments, 👍13). Project and worktree switching regressed. The related [#38230](https://github.com/anomalyco/opencode/issues/38230) asked for a permanent Old UI toggle and was closed today.
10. **[#51856](https://github.com/anomalyco/opencode/issues/51856) MCP client advertises `elicitation.form` but never handles `elicitation/create`** (8 comments). Tool calls hang until they time out. [#51223](https://github.com/anomalyco/opencode/issues/51223) reports a similar hang, where permission asks from MCP tools in Code Mode never surface in the TUI.

## 4. Key PR Progress

1. **[#53749](https://github.com/anomalyco/opencode/pull/53749)** Structured output (JSON Schema) for `POST /api/session/:id/generate`.
2. **[#53753](https://github.com/anomalyco/opencode/pull/53753)** Adds missing OpenAI and Google service tiers to the `@opencode/ai` known lists.
3. **[#53746](https://github.com/anomalyco/opencode/pull/53746)** `database.prefix` option so OpenCode can share a SQLite database with tables it doesn't own.
4. **[#53736](https://github.com/anomalyco/opencode/pull/53736)** SDK exposes the embedded instance's HTTP app with password auth, so TUI, desktop and web clients can connect to it.
5. **[#53742](https://github.com/anomalyco/opencode/pull/53742)** Node-safe `default` targets for subpath imports. This stops Bun-only code loading in other bundlers and loaders such as Alchemy.
6. **[#53196](https://github.com/anomalyco/opencode/pull/53196)** Advertises the spec-shaped MCP elicitation capability. It targets the elicitation bug in #51856 and closes #52319.
7. **[#53366](https://github.com/anomalyco/opencode/pull/53366)** Stops stdio MCP servers when a location's last session is deleted. This fixes leaked MCP processes. Related: [#51946](https://github.com/anomalyco/opencode/pull/51946) stops MCP children on server SIGTERM.
8. **[#51337](https://github.com/anomalyco/opencode/pull/51337)** Loads the managed config directory and macOS managed preferences, restoring v1 admin-config behavior.
9. **[#52173](https://github.com/anomalyco/opencode/pull/52173)** Imports legacy `auth.json` credentials on a fresh database, which helps v1 to v2 migration.
10. **[#53752](https://github.com/anomalyco/opencode/pull/53752)** Discovers server projects and sessions across browsers. It fixes empty project lists on shared servers. It carries `needs:issue` and `needs:compliance` labels.

Smaller items: [#52063](https://github.com/anomalyco/opencode/pull/52063) renders strikethrough only for double tildes, [#52268](https://github.com/anomalyco/opencode/pull/52268) warns when a command file is skipped, and [#51947](https://github.com/anomalyco/opencode/pull/51947) fixes `/api/vcs` returning an empty branch on a cold location.

## 5. Feature Request Trends
- **TUI ergonomics:** session buffer search ([#4714](https://github.com/anomalyco/opencode/issues/4714)), a configurable permission prompt height and expanded state ([#28191](https://github.com/anomalyco/opencode/issues/28191)).
- **Plugin and hook control:** a `skip` field on `tool.execute.before` for deterministic pre-execution gating ([#52837](https://github.com/anomalyco/opencode/issues/52837)).
- **MCP completeness:** elicitation handling and permission surfacing in Code Mode.
- **Layout choice:** a permanent Old UI toggle in Desktop and Web.
- **Documentation:** v2 release notes and changelog.
- **Quota granularity:** per-model limits instead of account-wide blocks.

## 6. Developer Pain Points
- **Go/Zen service friction:** blanket quota blocks, regional gating without a settings option, `user_blocked` with no appeal, false "free tier" compliance errors, intermittent outages ([#36889](https://github.com/anomalyco/opencode/issues/36889)), and billing and refund problems ([#29182](https://github.com/anomalyco/opencode/issues/29182)).
- **TUI reliability:** clipboard copy failures, Enter swallowing input ([#31217](https://github.com/anomalyco/opencode/issues/31217)), and no re-layout when the terminal shrinks ([#42225](https://github.com/anomalyco/opencode/issues/42225)).
- **Provider integration bugs:** the Azure websocket default hangs ([#52114](https://github.com/anomalyco/opencode/issues/52114)), OpenAI upstream failures ([#52269](https://github.com/anomalyco/opencode/issues/52269)), ChatGPT OAuth wrongly using the Zen key ([#49847](https://github.com/anomalyco/opencode/issues/49847)), Copilot Student plan not detected ([#34644](https://github.com/anomalyco/opencode/issues/34644)), and subagent variant and session-ID handling ([#53712](https://github.com/anomalyco/opencode/issues/53712), [#51464](https://github.com/anomalyco/opencode/issues/51464)).
- **v2 lifecycle and state:** 60-minute idle eviction interrupts running sessions ([#51343](https://github.com/anomalyco/opencode/issues/51343)), Windows path casing splits project identity ([#52501](https://github.com/anomalyco/opencode/issues/52501)), and leaked MCP processes.
- **Resource safety:** a reported macOS kernel panic from memory exhaustion via EndpointSecurity ([#32002](https://github.com/anomalyco/opencode/issues/32002), closed).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
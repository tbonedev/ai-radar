# AI CLI Tools Community Digest 2026-10-30

> Generated: 2026-10-30 13:56 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: Claude Code vs OpenCode (2026-10-30)

Only two tools appear in today's data (Claude Code and OpenCode). Conclusions below are limited to those two.

## 1. Ecosystem Overview
Both communities are now working on trust and control problems more than raw capability. Claude Code users complain about quota accounting, session data loss and clipboard reliability. OpenCode users complain about free-tier limits, the v1→v2 migration and Windows desktop stability. Both projects are building out agent infrastructure: Claude Code through hooks, Mods and gateway routing, OpenCode through background jobs, schedules and persistent PTYs. OpenCode also shipped a bridge into Claude Code (the "Claude Agent" provider), so the two ecosystems now overlap directly.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Releases today | 1 (v2.1.314) | 2 (v2.2.3, v2.2.2) plus 2 PTY daemon packages (v0.4.0, v0.3.3) |
| Hot issues listed | 10 (plus a 42-issue copy/paste tracker) | 10 (plus 2 notable) |
| Top issue by comments | #27302, 290 comments | #59387, 137 comments |
| Top issue by 👍 | #15942, 478 | #37564, 47 |
| PRs updated (24h) | 1 (trivial README edit, closed) | 10 key PRs plus several others |
| Where the work is visible | Releases and issues | PRs, with the work in the open |

Claude Code's PR count is low because its development is not visible in the public PR stream, not because it is idle. The data does not show the reason.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Usage and limit transparency | Weekly-limit burn (#102667), headless vs interactive cost (#97074), warning banner (#97679) | Free-tier limits that never reset (#59387), reset time (#52894), Go model versions (#41969) |
| Permission and autonomy controls | `blockWritesOutsideWorkingDirectories` (v2.1.314) | Classifier-based "auto mode" (#37564, #47545) |
| Subagent and background control | Subagent cost (#67636), `agent_summary` spinner (#86879), hook gaps (#91910) | Cancel background subagents (#36423), auto-backgrounding of slow tools (PR #60495) |
| Extensibility | Mods, hooks, plugins (#91870) | UI intent channel (#6330), `session.stopping` hook (#16626) |
| Session and history handling | Silent transcript deletion (#59248), `/clear` naming (#61172) | Hidden V1 sessions (#49827), DB bloat (#33356), session search and grouping (#41354, #55446) |
| Windows and desktop quality | MSIX memory leak (#96870), VS 2026 (#15942), multi-window (#30154) | Input-eating overlay (#59229), Ctrl+C (#2999) |

## 4. Differentiation Analysis
- **Claude Code** is a first-party product from the model vendor. Its requests concern account and enterprise features: multiple connector accounts, IdP group routing for gateways, IDE integrations (Visual Studio 2026) and a managed quota. Its complaints about quota opacity come from a paid-subscription model.
- **OpenCode** is open-source and provider-agnostic. Its requests concern provider and plan transparency (model versions, Azure Entra auth), free and "Go" tiers, local-model timeouts (#26602) and broad model quirks (malformed tool calls, OpenAI Responses schema errors).
- **Technical approach:** Claude Code is moving toward policy guardrails and extension points. OpenCode is rebuilding its core (v2): typed SQLite job tables, persistent PTYs, schedules enabled by default, and a unified Promise/Effect API.
- **Target users:** Claude Code serves individual and enterprise subscribers, including CI users, who care about quota and safety. OpenCode serves tinkerers, local-model users and cost-sensitive developers who care about flexibility and price.

## 5. Community Momentum & Maturity
- **Claude Code** has the larger long-term engagement: 290 comments and 440 👍 on its top thread, and 478 👍 on VS 2026. Much of that demand is old (the VS request dates from January). Today's pace is a single release, so the signal is demand rather than velocity.
- **OpenCode** is iterating faster in public: two releases and about ten substantive PRs in a day. Its upvote counts are lower (47 at most), so the community is smaller or less vote-driven.
- **Maturity:** Claude Code is dealing with the problems of scale (data retention, billing accuracy, clipboard regressions). OpenCode is still in migration (V2 regressions, hidden sessions, missing reasoning options) and has some high-severity bugs open (#58934, #50206).

## 6. Trend Signals
1. **Quota transparency is now a competitive feature.** Both communities want to see and predict their consumption. Teams running headless or CI workloads should measure real cost per token rather than assume parity with interactive use (#97074).
2. **Guardrails for unattended agents are becoming standard.** Path-write blocking in Claude Code and auto-mode classifiers in OpenCode both address how to run agents without constant approval. Evaluate tools on their permission models.
3. **Background and long-running agent work is the next architecture layer.** Persistent PTYs, schedules, background jobs and subagent control show up in both projects.
4. **Tools are interoperating.** OpenCode's Claude Agent provider means a Claude Code login can be used from another client. Check the terms and quota implications before relying on it.
5. **Session data durability matters.** Transcript deletion, DB growth to 13 GB and hidden migrated sessions are all trust issues. Check retention settings and back up session stores.
6. **Cross-platform polish remains a gap.** Windows desktop bugs appear in both. Windows-heavy teams should test before standardizing.

**Caveat:** The Claude Code release notes were truncated, and the data covers only two tools and a single day. Treat the comparisons as a snapshot, not a ranking.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-30)

**Data caveat:** PR comment counts came through as `undefined` and every PR shows 0 👍. The PR ranking below follows the feed's order (stated to be sorted by comments) and recency of updates, so it is not backed by verified comment numbers. Issue counts are real.

## 1. Top Skills Ranking (PRs)

All of these are **OPEN**. None is merged or draft in this data.

| # | PR | What it does | Highlights / status |
|---|----|--------------|---------------------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports `mcp>=2` (`streamable_http_client` rename) and custom headers via `http_client`. | Fixes #1668. Updated 10-08. Addresses a breaking upstream SDK change. |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evals, fixes the Windows `select()` pipe failure, and stops runtime failures counting as non-triggers. | Related to the 0% trigger-rate bug in [#556](https://github.com/anthropics/skills/issues/556). Updated 09-16. |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` + `quantitative-resume-auditor` | Turns specs into Notion tasks with acceptance criteria and progress tracking, plus a resume-auditing skill. | New community skills. Updated 10-15. |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` to close a CWE-78 command-injection risk. | Security hardening. Updated 10-25. |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | Reports a LibreOffice timeout as an error and checks that the output has no revision marks. | Fixes false-success reporting. |
| 6 | [#1681](https://github.com/anthropics/skills/pull/1681) `skill-creator` | Lets `package_skill.py` run directly, fixing a `ModuleNotFoundError`, and updates usage paths. | Updated 10-24. |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | Skill for building, debugging and verifying retro Python games, with headless input-driven runs. | Open since March and still being updated (10-23). |
| 8 | [#1997](https://github.com/anthropics/skills/pull/1997) `skill-creator` | Parses YAML frontmatter scalars with a real parser instead of manual quote stripping. | Updated 10-19. |

## 2. Community Demand Trends (from Issues)

- **Trust and security of the skill supply chain.**
  - [#492](https://github.com/anthropics/skills/issues/492) (46 comments, the most-discussed item): community skills distributed under the `anthropic/` namespace can impersonate official ones.
  - [#1394](https://github.com/anthropics/skills/issues/1394): an XSS risk in the eval-viewer.
- **Skill-authoring and eval tooling reliability.**
  - [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍): `run_eval.py` shows a 0% trigger rate.
  - [#202](https://github.com/anthropics/skills/issues/202): `skill-creator` should follow best practice.
  - [#2064](https://github.com/anthropics/skills/issues/2064): `theme-factory`'s description says what the skill does but not when to use it.
- **Sharing and distribution.**
  - [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍): org-wide skill sharing in Claude.ai.
  - [#189](https://github.com/anthropics/skills/issues/189) (9 👍): the `document-skills` and `example-skills` plugins install duplicate content.
- **Context-cost control.**
  - [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects about 156k tokens in one call.
  - [#1329](https://github.com/anthropics/skills/issues/1329): a proposed `compact-memory` skill for compact agent state.
- **Agent quality and governance patterns.**
  - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning quality-gate pipeline.
  - [#412](https://github.com/anthropics/skills/issues/412): an agent-governance skill (closed).
- **Bugs in the bundled document and utility skills.**
  - [#2018](https://github.com/anthropics/skills/issues/2018): `docx` `merge_runs.py` writes invalid XML.
  - [#1390](https://github.com/anthropics/skills/issues/1390): `mcp-builder` `evaluation.py` scores 0/N against real servers.
  - [#1868](https://github.com/anthropics/skills/issues/1868): `slack-gif-creator` gradient interpolation is off by one.

## 3. High-Potential Pending Skills

These are small, well-scoped fixes with a clear problem statement. They have recent activity, and several link to specific issues.

- [#1742](https://github.com/anthropics/skills/pull/1742) (`mcp-builder` mcp>=2 compatibility): fixes a breaking SDK change.
- [#1980](https://github.com/anthropics/skills/pull/1980) (`webapp-testing` shell injection): a security fix.
- [#1298](https://github.com/anthropics/skills/pull/1298) (`skill-creator` eval isolation): addresses the biggest authoring-tool complaint, [#556](https://github.com/anthropics/skills/issues/556).
- [#1792](https://github.com/anthropics/skills/pull/1792) (`docx` timeout and verification): a correctness fix.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976), [#1977](https://github.com/anthropics/skills/pull/1977) (small pptx, `webapp-testing` and `algorithmic-art` fixes): each closes a tracked issue (#1809, #1891, #1897).
- Net-new skills ([#1245](https://github.com/anthropics/skills/pull/1245), [#525](https://github.com/anthropics/skills/pull/525)) have been open for months. This suggests maintainers favor fixes to existing skills over new community skills.
- [#1771](https://github.com/anthropics/skills/pull/1771) (`proofcore-contract-auditor`) writes to a public blockchain. Given the trust concerns in [#492](https://github.com/anthropics/skills/issues/492), it would likely get extra scrutiny.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing skills and the skill-authoring and eval toolchain trustworthy and reliable (security, correctness, Windows and SDK compatibility, trigger evals), rather than on new domain skills.

---

# Claude Code Community Digest, 2026-10-30

## 1. Today's Highlights
v2.1.314 adds `permissions.blockWritesOutsideWorkingDirectories`, which stops Write, Edit and NotebookEdit from touching paths outside the working directories in every permission mode. The release also adds group-based routing for Claude apps gateway upstreams. In the issues, usage accounting (weekly-limit burn, headless vs interactive cost) and copy/paste reliability are the loudest complaints. The long-running requests for multiple connector accounts and for Mods extensibility are still the most active threads.

## 2. Releases
**[v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)**. The release notes in the data are truncated, so this covers only what is visible:
- **`permissions.blockWritesOutsideWorkingDirectories`**: Write, Edit and NotebookEdit refuse paths outside the working directories in every permission mode. It is a guardrail for unattended or bypass-permissions runs.
- **Gateway `groups` list**: Claude apps gateway upstreams accept an optional `groups` list, so only developers in the listed IdP groups are routed to that upstream. The rest of this note was cut off.

## 3. Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302) Multiple Connector accounts (same connector) on claude.ai/code**. 290 comments and 440 👍. It is the most active thread, and people with separate work and personal accounts want it. It carries the `area:auth` label.
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870) "Mods": make Claude 10x more extensible**. 276 comments and 132 👍. The maintainer-style updates say it shipped on Oct 1, and the community is now feeding back on hooks and plugins.
3. **[#15942](https://github.com/anthropics/claude-code/issues/15942) Visual Studio 2026 integration**. 156 comments and 478 👍, the highest 👍 count of the day. Windows IDE users have been waiting since January.
4. **[#30154](https://github.com/anthropics/claude-code/issues/30154) Multi-window support in Claude Code Desktop**. 78 comments and 261 👍. The single-window, sidebar-only session model blocks side-by-side workflows.
5. **[#59248](https://github.com/anthropics/claude-code/issues/59248) Silent retention cleanup deletes session transcripts**. 67 comments, labelled `data-loss`. Users lose resumable history with no warning, opt-in or recovery. This is a trust issue.
6. **[#97074](https://github.com/anthropics/claude-code/issues/97074) Headless `claude -p` uses about 1.8× more of the 5-hour window per token than interactive**. 60 comments and 120 👍. If it is accurate, automation and CI users are paying a hidden premium.
7. **[#102667](https://github.com/anthropics/claude-code/issues/102667) Possible usage accounting regression: weekly limit depletes faster**. 10 comments. It is related to #97074, and both point at quota transparency.
8. **[#86879](https://github.com/anthropics/claude-code/issues/86879) Supported way to disable the `agent_summary` spinner**. Only 9 comments but 96 👍. The reporter measured about 22.7% of requests and about 18% of weighted tokens in a subagent-heavy session.
9. **[#95122](https://github.com/anthropics/claude-code/issues/95122) Worktree isolation refuses git-free Bash on 2.1.272/2.1.273**. The reporter counts 75 refusals in 3 days, including variables, `$(…)`, loops and heredocs. It looks like a regression against the 2.1.257 changelog, and it hurts agentic workflows.
10. **[#98256](https://github.com/anthropics/claude-code/issues/98256) MCP elicitation is declared but auto-declined in interactive VS Code sessions**. 8 comments and 17 👍. It is paired with [#89858](https://github.com/anthropics/claude-code/issues/89858), where a controlling client answers `decline` without ever drawing a prompt. Together they show elicitation is unreliable outside the TUI.

Also worth noting: [#81472](https://github.com/anthropics/claude-code/issues/81472) is a meta-tracker for 42 open copy/paste issues across the TUI, VS Code and desktop, and [#43477](https://github.com/anthropics/claude-code/issues/43477) is a representative case.

## 4. Key PR Progress
Only one PR was updated in the last 24 hours, and it isn't significant:
- **[#57333](https://github.com/anthropics/claude-code/pull/57333) Update README.md** (closed). It is a trivial, empty-description README edit.

The data has no other PRs, so there is nothing further to report. The v2.1.314 release is the only code-side change visible today.

## 5. Feature Request Trends
- **Multi-account and multi-window support**: #27302 (connectors) and #30154 (desktop windows).
- **Usage and UI control**: hide or dismiss the weekly-limit banner ([#97679](https://github.com/anthropics/claude-code/issues/97679)), disable the agent_summary spinner (#86879), and opt out of the session survey ([#94710](https://github.com/anthropics/claude-code/issues/94710)).
- **Desktop configurability**: a configurable Cowork VM vhdx location ([#56089](https://github.com/anthropics/claude-code/issues/56089)), multiple spellchecker languages ([#88502](https://github.com/anthropics/claude-code/issues/88502)), and restoring the glyph-ripple home background ([#102952](https://github.com/anthropics/claude-code/issues/102952)).
- **IDE coverage**: Visual Studio 2026 (#15942).
- **Resource governance for agents**: memory caps, pressure feedback and teardown ordering for spawned process trees ([#91081](https://github.com/anthropics/claude-code/issues/91081)).
- **Accessibility**: spoken responses ([#58429](https://github.com/anthropics/claude-code/issues/58429), closed).
- **Extensibility**: Mods, hooks and plugins (#91870).

## 6. Developer Pain Points
- **Quota opacity**: headless vs interactive cost differences, the weekly limit burning faster, and the persistent warning banner (#97074, #102667, #97679). Users cannot predict or audit consumption.
- **Data loss and session handling**: silent transcript deletion (#59248), `/clear` inheriting the old session name ([#61172](https://github.com/anthropics/claude-code/issues/61172)), and worktree sessions reusing old directories ([#79366](https://github.com/anthropics/claude-code/issues/79366)).
- **Hooks and subagent gaps**: compact and stop hooks fire for subagents without agent fields ([#91910](https://github.com/anthropics/claude-code/issues/91910)). Subagent token cost is also a concern ([#67636](https://github.com/anthropics/claude-code/issues/67636)).
- **Clipboard and terminal ergonomics**: broad copy/paste breakage (#81472, #43477).
- **MCP and remote surfaces**: elicitation failures (#98256, #89858) and the Artifact tool missing in `claude remote-control` server mode ([#88731](https://github.com/anthropics/claude-code/issues/88731)).
- **Windows desktop**: kernel nonpaged pool leaks in the MSIX build ([#96870](https://github.com/anthropics/claude-code/issues/96870)) and the next-step box ending a turn before the reply is written ([#102132](https://github.com/anthropics/claude-code/issues/102132)).
- **Model behavior**: the `/goal` Stop-hook directive is cited as authorization for actions nobody requested ([#60705](https://github.com/anthropics/claude-code/issues/60705), closed, 270 comments).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-30

## 1. Today's Highlights
OpenCode shipped **v2.2.3** (Claude Code login and models usable inside OpenCode via a new "Claude Agent" provider) and **v2.2.2** (image generation on by default). Development is focused on background jobs, persistent PTYs, and schedules in the v2 core. The community's loudest pain points are still free-tier limit errors and Windows desktop stability.

## 2. Releases
- **v2.2.3**: Highlights include **Claude Agent** support. Install Claude Code, run `claude auth login`, then choose Claude Agent in `/connect` ([#58782](https://github.com/anomalyco/opencode/pull/58782)). It also speeds up long Desktop sessions with streaming replies.
- **v2.2.2**: Agents can use `experimental_image_generate` by default when a connected provider has image models. Set the model via `experimental.image_generate.model` ([#60258](https://github.com/anomalyco/opencode/pull/60258)).
- **process-daemon v0.4.0 / v0.3.3** (`@opencode/pty`, protocol 7): the PTY daemon packages behind the persistent-terminal work.

## 3. Hot Issues
1. [#59387](https://github.com/anomalyco/opencode/issues/59387) **Zen free-tier mega-thread** (137 comments). Users report "Free usage exceeded" errors and resets that never happen. It is the biggest single source of user friction.
2. [#33356](https://github.com/anomalyco/opencode/issues/33356) **Unbounded `event` table growth** (closed, 47 comments, 12 👍). `opencode.db` reached 13 GB+ with no retention or compaction, filling disks on long-lived instances.
3. [#2999](https://github.com/anomalyco/opencode/issues/2999) **Option to disable Ctrl-C** (closed, 42 comments, 30 👍). Ctrl+C quits the app on Windows terminals instead of copying. It is a long-running usability complaint.
4. [#26602](https://github.com/anomalyco/opencode/issues/26602) **Desktop 5-minute Headers Timeout** with slow local providers (closed). It ignored `timeout: false`, which hurts local-model users.
5. [#58934](https://github.com/anomalyco/opencode/issues/58934) **SchemaError kills session** when compiling an OpenAI Responses request (open, severity:high). [PR #60604](https://github.com/anomalyco/opencode/pull/60604) targets it.
6. [#50206](https://github.com/anomalyco/opencode/issues/50206) **Malformed XML/DSML tool calls** from OpenCode Go models (open, severity:high). Tool execution fails.
7. [#49827](https://github.com/anomalyco/opencode/issues/49827) **V1→V2 migration hides non-git "global" sessions** (open, reproduced). Users lose sight of their history after upgrading.
8. [#37564](https://github.com/anomalyco/opencode/issues/37564) **"Auto mode" classifier-based permission approval** (open, 47 👍, the most-upvoted open request). Related: [#47545](https://github.com/anomalyco/opencode/issues/47545), where client-side auto-approval still fires false permission notifications.
9. [#60399](https://github.com/anomalyco/opencode/issues/60399) **CLI hangs on networks that drop fragmented TLS ClientHello**. The post-quantum key share is the likely trigger, and it works fine from `curl`.
10. [#41969](https://github.com/anomalyco/opencode/issues/41969) **Publish exact model versions for Go plan models** (14 👍). Users want transparency about which checkpoints are served.

Also notable: [#53955](https://github.com/anomalyco/opencode/issues/53955) (plan-mode agent making edits) and [#36423](https://github.com/anomalyco/opencode/issues/36423) (no cancellation for background subagents).

## 4. Key PR Progress
1. [#60495](https://github.com/anomalyco/opencode/pull/60495) Auto-background slow tools after 10s through `Tool.execute`, so shell, Code Mode, and MCP calls no longer block the turn or die at 2 minutes.
2. [#60491](https://github.com/anomalyco/opencode/pull/60491) Store background job markers in a typed SQLite `job` table, with cleanup on session delete.
3. [#60478](https://github.com/anomalyco/opencode/pull/60478) Enable schedules by default (`/schedule`, 5 `schedule_*` tools), including in `opencode serve`.
4. [#60346](https://github.com/anomalyco/opencode/pull/60346) Move the desktop terminal to persistent PTYs, so terminals survive server restarts. It is stacked with [#60329](https://github.com/anomalyco/opencode/pull/60329) (rename terminals, closed) and [#60387](https://github.com/anomalyco/opencode/pull/60387) (bump `@opencode/pty` to 0.4.0).
5. [#60516](https://github.com/anomalyco/opencode/pull/60516) Unify the `ai` object across the Promise and Effect APIs.
6. [#60611](https://github.com/anomalyco/opencode/pull/60611) Preserve blank-line reads and stop invalid-offset loops in the v2 read tool.
7. [#60604](https://github.com/anomalyco/opencode/pull/60604) Keep unencodable tool results from killing the session (fixes #58934).
8. [#54251](https://github.com/anomalyco/opencode/pull/54251) Retain completed `execute` results on interruption.
9. [#59414](https://github.com/anomalyco/opencode/pull/59414) Reject foreign directory hints, such as Windows paths, with a typed HTTP 400.
10. [#60607](https://github.com/anomalyco/opencode/pull/60607) Fix the desktop "What's New" popup, which never appears because the parser doesn't understand v2 markdown highlights.

Also: [#60616](https://github.com/anomalyco/opencode/pull/60616) ranks commands above sessions in the command palette. [#60605](https://github.com/anomalyco/opencode/pull/60605) (closed) was an alternative fix for database execution fencing.

## 5. Feature Request Trends
- **Smarter permissions**: classifier-based auto mode ([#37564](https://github.com/anomalyco/opencode/issues/37564)) and server-side auto-approval.
- **Session and sidebar organization**: group sessions by project ([#55446](https://github.com/anomalyco/opencode/issues/55446)) and search message history ([#41354](https://github.com/anomalyco/opencode/issues/41354)).
- **Subagent and background control**: cancel background subagents ([#36423](https://github.com/anomalyco/opencode/issues/36423)).
- **Plugin and UI extensibility**: a UI intent channel ([#6330](https://github.com/anomalyco/opencode/issues/6330)) and a `session.stopping` hook ([#16626](https://github.com/anomalyco/opencode/issues/16626)).
- **Provider and plan transparency**: model checkpoints for Go ([#41969](https://github.com/anomalyco/opencode/issues/41969)), the exact free-limit reset time ([#52894](https://github.com/anomalyco/opencode/issues/52894)), and Azure Entra auth ([#21658](https://github.com/anomalyco/opencode/issues/21658)).

## 6. Developer Pain Points
- **Free tier and billing**: opaque limits, resets that don't happen ([#59387](https://github.com/anomalyco/opencode/issues/59387)), and paid Go subscriptions showing "Insufficient balance" ([#37790](https://github.com/anomalyco/opencode/issues/37790)).
- **Windows desktop stability**: an invisible input-eating overlay after DPI or monitor changes ([#59229](https://github.com/anomalyco/opencode/issues/59229)) and the Ctrl+C behavior.
- **V2 migration and model quirks**: hidden sessions ([#49827](https://github.com/anomalyco/opencode/issues/49827)), malformed tool-call output from some models ([#50206](https://github.com/anomalyco/opencode/issues/50206)), and the desktop picker showing "No reasoning" for all V2 models ([#50257](https://github.com/anomalyco/opencode/issues/50257)).
- **Reliability and resources**: session stalls without a response ([#32149](https://github.com/anomalyco/opencode/issues/32149)), DB bloat, and agent-loop and compaction issues such as truncated tool calls ([#18108](https://github.com/anomalyco/opencode/issues/18108)) and goal loss after auto-compaction ([#41358](https://github.com/anomalyco/opencode/issues/41358)).
- **Network and agent behavior**: TLS hangs ([#60399](https://github.com/anomalyco/opencode/issues/60399)), plan mode making edits ([#53955](https://github.com/anomalyco/opencode/issues/53955)), and git-heavy snapshots on large directories ([#3176](https://github.com/anomalyco/opencode/issues/3176)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
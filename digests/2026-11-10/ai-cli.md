# AI CLI Tools Community Digest 2026-11-10

> Generated: 2026-11-09 17:05 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: Claude Code vs. OpenCode (2026-11-10)

Only two of the ten tracked CLI tools are covered in today's digests, so this comparison is limited to Claude Code and OpenCode. Neither shipped a release in the last 24h.

## 1. Ecosystem Overview

The two communities are spending their attention on trust and cost, not new capabilities. Claude Code's top issue is a privacy report about email exposure in the `User-Agent` header. OpenCode's is the free-tier quota megathread. Both communities report quota or limit accounting that users find opaque or wrong. Agent orchestration is also straining the tools: Claude Code hits cross-session caps, and OpenCode has v2 subagent lifecycle bugs. Platform-specific stability problems remain open in both, such as Windows process and memory leaks in Claude Code and CPU/SSE4.2 and path bugs in OpenCode.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release status | None in 24h | None in 24h |
| Hot issues listed | 10 | 10 |
| Top issue by engagement | #107757 User-Agent privacy (772 👍, 115 comments) | #59387 Free tier megathread (335 comments, 👍26) |
| Highest-👍 feature request | #27302 Multiple Connector accounts (455 👍, 300 comments) | #2242 Agent sandboxing (84 👍, 107 comments) |
| PRs updated in 24h | 1 (#89404) | About 14 listed (10 entries, several grouped) |
| PR themes | Plugin validator script fix | Infra/deploy, MCP, plugin errors, idempotency, cost accounting |

Note that the issue counts are the number of hot issues each digest lists, not totals for the day. The digests don't give total issue volume, so this table can't be used to compare overall issue activity.

## 3. Shared Feature Directions

- **Usage and cost transparency** (both). Claude Code users want configurable weekly reset timing or banked resets (#76272) and explanations for fast limit depletion (#103376, #102667, #107390). OpenCode users want catalog-price estimates when providers report $0 (#59861), and are hit by free-tier limits that never reset (#59387) and by caching and cost regressions (#61037, #59803).
- **Session and account management** (both). Claude Code requests multi-account connectors (#27302), account switching (#22872) and Desktop multi-window (#30154). OpenCode requests a branchable session tree (#41363) and keeping the model across plan/build switches (#54375).
- **Multi-agent orchestration** (both). Claude Code wants a configurable cross-session send cap (#94000). OpenCode reports subagents marked complete before background work finishes (#48826).
- **Security and permissions** (both). Claude Code has permission friction (#76718) and an `rm -rf` safety report (#6608). OpenCode has a long-standing request for OS-level sandboxing (#2242).
- **Resilience** (OpenCode only in the digest). Configurable or indefinite LLM retry (#58128).

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Feature focus | Account/connector management, IDE review UX, accessibility and i18n, platform reach (FreeBSD) | Provider and API coverage, config splitting, extensibility (GUI plugins), session tree |
| Target users | Individual and Team-plan subscribers on a first-party model, with Desktop, VS Code and web surfaces | Multi-provider users, including free-tier users, who tend to be cost-sensitive and customize heavily |
| Technical approach | Closed product with a vendor-controlled model, so issues center on quota, privacy and data retention | Open plugin/MCP architecture, so issues center on integration fragility (MCP restarts, OAuth refresh races, plugin install failures) |
| Surface area | Terminal, Desktop, VS Code, web | Terminal, Desktop, web app, Console and share infrastructure |
| Maintainer activity | Very low PR flow today (one PR) | Broad PR flow, including infra work and client-side event idempotency |

These distinctions are inferred from the issue content in the digests, not from product documentation.

## 5. Community Momentum & Maturity

- **Claude Code** has a much higher engagement per issue (772 👍 and 455 👍 on the top items; many issues are months old). That suggests a large, mature user base with a long backlog of unresolved requests. Several of the issues were closed as stale, which users read as being unheard. PR activity was minimal today, so visible maintainer iteration was low in this window.
- **OpenCode** has lower per-issue reactions, with one exception (#2242 at 84 👍), but far more visible code movement. It is iterating quickly on v2 and its infrastructure. The regressions it reports (caching after v2.2.5, SSE4.2 after a Bun runtime change, v2 agent lifecycle) are typical of a fast release cadence. It also shows signs of triage automation, such as bot-authored PRs and pending-close labels on duplicates.

One day of data is a small sample. Neither conclusion should be treated as a trend without more days.

## 6. Trend Signals

1. **Quota and billing opacity is now a primary complaint**, ahead of features, in both communities. Developers choosing a tool should look at how limits are measured and reported.
2. **Privacy and data handling are becoming adoption factors.** The User-Agent report and the retention-setting data-loss report (#41458) show that telemetry, headers and retention are being scrutinized.
3. **Multi-agent workflows need dependable lifecycle semantics.** Both tools show gaps in how subagents, background work and cross-session messaging are bounded and reported.
4. **Sandboxing demand persists.** Users cite Gemini CLI and Codex as the reference for command isolation, which implies that this is becoming a baseline expectation.
5. **Extension points (MCP, plugins) are a reliability risk.** Teams that depend on them should test OAuth refresh handling, restart behavior and install failures.
6. **Desktop and cross-platform quality is a recurring source of bugs**, particularly on Windows and older hardware.

**Caveat:** This report covers two of ten tracked tools. A full comparison needs the digests for Codex, Gemini CLI, Copilot CLI, Kimi CLI, Pi, Qwen Code, DeepSeek TUI and Grok Build.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-10)

**Data caveat:** every PR's comment count is `undefined` and every PR has 0 👍. I ranked PRs by their order in the feed, which is nominally sorted by comments, and by theme and recency. Issue comment counts are real. All 20 PRs shown are **OPEN**, and none are merged.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|----|----|----|----|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder: `mcp>=2` compatibility | Handles the rename to `streamable_http_client` and moves custom headers to `create_mcp_http_client`. Fixes #1668. | Without it, `connections.py` breaks on current MCP SDKs. | Open, updated 2026-10-08 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator: isolate trigger evals | Fixes false-miss scores. Per-worker probes compete, `select()` on pipes fails on Windows, and runtime failures are counted as non-triggers. | Matches Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). | Open, updated 2026-09-16 |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: drop `shell=True` | Removes the CWE-78 command-injection risk in `with_server.py`. | Security hardening. | Open, updated 2026-11-01 |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) docx: LibreOffice timeout handling | `accept_changes.py` reports an error on timeout and checks that no revision marks remain before claiming success. | Fixes a silent false success. | Open, updated 2026-11-01 |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) xlsx: defined-name resolution | `external_links_at_risk` now resolves worksheet-scoped names and aliases. Fixes #2013. | Closes false negatives in external-link detection. | Open, updated 2026-11-03 |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) Pyxel skill | Guides retro game development in Python, with headless runs and frame inspection. | A new domain skill. It has been open since March and was updated 2026-11-01. | Open |
| 7 | [#1245](https://github.com/anthropics/skills/pull/1245) Notion spec-to-implementation | Turns specs into Notion tasks with acceptance criteria, and adds a resume-auditor skill. | A workflow-automation skill. | Open, updated 2026-10-15 |
| 8 | [#1997](https://github.com/anthropics/skills/pull/1997) skill-creator: YAML frontmatter parsing | Replaces hand-rolled quote and continuation parsing with proper YAML parsing. | Keeps eval metadata consistent with `SKILL.md`. | Open, updated 2026-10-19 |

## 2. Community Demand Trends (from Issues)

1. **Reliable skill evaluation.** Trigger evals are broken: [#556](https://github.com/anthropics/skills/issues/556) reports a 0% trigger rate and [#1352](https://github.com/anthropics/skills/issues/1352) reports parallel workers cross-matching skill UUIDs. [#202](https://github.com/anthropics/skills/issues/202) asks for skill-creator to follow best practice.
2. **Org-level sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide sharing in Claude.ai (8 👍). [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins (9 👍).
3. **Trust and security.** [#492](https://github.com/anthropics/skills/issues/492) reports namespace impersonation (46 comments, the most-discussed issue). [#1394](https://github.com/anthropics/skills/issues/1394) reports XSS in the eval-viewer. [#412](https://github.com/anthropics/skills/issues/412) proposes an agent-governance skill.
4. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens. [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory for agent state.
5. **Output-quality pipelines.** [#1385](https://github.com/anthropics/skills/issues/1385) proposes a calibration, adversarial review and delivery verification pipeline.
6. **Document and media skill bugs.** Examples are docx [#2018](https://github.com/anthropics/skills/issues/2018) and slack-gif-creator [#1868](https://github.com/anthropics/skills/issues/1868). [#2064](https://github.com/anthropics/skills/issues/2064) asks theme-factory to state when to use it.

## 3. High-Potential Pending Skills

These are likely to land soon because they are small, bug-linked fixes that were recently updated:
- [#1742](https://github.com/anthropics/skills/pull/1742): a breaking-compatibility fix for mcp-builder.
- [#1298](https://github.com/anthropics/skills/pull/1298), [#1997](https://github.com/anthropics/skills/pull/1997) and [#1681](https://github.com/anthropics/skills/pull/1681): skill-creator fixes covering evals, YAML parsing and `package_skill.py` execution.
- [#1980](https://github.com/anthropics/skills/pull/1980): a security fix.
- [#1792](https://github.com/anthropics/skills/pull/1792), [#2019](https://github.com/anthropics/skills/pull/2019) and [#1734](https://github.com/anthropics/skills/pull/1734): document skill reliability fixes for docx and xlsx.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977): tiny one-line fixes, each tied to an issue.

New-skill PRs ([#525](https://github.com/anthropics/skills/pull/525), [#1245](https://github.com/anthropics/skills/pull/1245), [#1615](https://github.com/anthropics/skills/pull/1615), [#1703](https://github.com/anthropics/skills/pull/1703), [#1771](https://github.com/anthropics/skills/pull/1771)) have waited months with no visible maintainer engagement, so merging is less certain. [#1771](https://github.com/anthropics/skills/pull/1771) (blockchain notarization) is also worth a trust review, given #492.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing skill tooling reliable and trustworthy, meaning skill-creator evals, document-skill scripts and security hardening. New domain skills are a secondary and slower-moving interest.

---

# Claude Code Community Digest: 2026-11-10

## Today's Highlights

No new releases shipped in the last 24h. Community attention is on a privacy report that the `User-Agent` header exposes users' email addresses during web searches (772 👍, 115 comments). Usage-limit accounting complaints, where weekly quotas drain much faster than before, keep recurring. Windows Desktop resource problems (runaway git processes, kernel pool leaks) also remain open. PR activity was minimal, with a single plugin-tooling fix.

## Releases

None in the last 24h.

## Hot Issues

1. **[#107757](https://github.com/anthropics/claude-code/issues/107757): Privacy violation in User-Agent header** (OPEN, 772 👍, 115 comments). The reporter says their email was sent to third parties in the `User-Agent` header during web searches and led to scam emails. They want it removed outright rather than made opt-in or opt-out. It has the highest reaction count today and is labeled `area:security`.

2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts per connector** (OPEN, 455 👍, 300 comments). The most-discussed request overall. Users want the same connector linked with different accounts, for example personal and work, in Claude and Claude Code on the web.

3. **[#18170](https://github.com/anthropics/claude-code/issues/18170): Copy/paste includes indentation and trailing spaces** (OPEN, 304 👍, 140 comments). Text copied from terminal output carries leading whitespace and trailing spaces. It has been open since January and is still a daily annoyance.

4. **[#30154](https://github.com/anthropics/claude-code/issues/30154): Multi-window support in Desktop** (OPEN, 269 👍, 82 comments). The Desktop app is single-window, and users want to view several sessions side by side.

5. **[#33932](https://github.com/anthropics/claude-code/issues/33932): VS Code diff review UI like Copilot Edits** (OPEN, 223 👍, 49 comments). Users want a more structured accept/reject review flow in the IDE extension.

6. **[#41458](https://github.com/anthropics/claude-code/issues/41458): `cleanupPeriodDays: 99999` ignored, 490 sessions deleted** (OPEN, 28 comments). Labeled `data-loss` and `regression`. An explicit retention setting was reportedly not honored.

7. **[#103376](https://github.com/anthropics/claude-code/issues/103376): Weekly limit 0% to 54% in 22h** (OPEN, 18 comments). The reporter supplies measured data against the prior week, where similar token volume took 4.4 days to reach 60%. It sits alongside [#102667](https://github.com/anthropics/claude-code/issues/102667) and [#107390](https://github.com/anthropics/claude-code/issues/107390), a Team plan hitting 100% about 30.5 hours after reset.

8. **[#94478](https://github.com/anthropics/claude-code/issues/94478): Windows Desktop spawns ~17 git processes per second** (OPEN, 16 comments). The reporter measured 15–20 process starts per second, sustained. They say this amplifies a kernel pool leak into roughly 6 GB/day. The related [#96870](https://github.com/anthropics/claude-code/issues/96870) traces a nonpaged-pool leak to junction paths under AppData (a `bindflt.sys` bug).

9. **[#6608](https://github.com/anthropics/claude-code/issues/6608): `rm -rf` ran without permission** (OPEN, 25 comments). This is an older permissions and safety report that is still active.

10. **[#94000](https://github.com/anthropics/claude-code/issues/94000): Cross-session send cap (10 per human input) not configurable** (OPEN, 13 comments). The cap stops multi-session orchestration in Desktop. It ties into the compound-command permission-prompt complaints in [#76718](https://github.com/anthropics/claude-code/issues/76718) (closed, 700+ prompts).

## Key PR Progress

Only one PR was updated in the last 24h, so there are no ten to list.

- **[#89404](https://github.com/anthropics/claude-code/pull/89404): `validate-agent.sh` no longer aborts at the first warning** (OPEN, by bcherny). It fixes the plugin-dev skill's validator, which failed on plugin-dev's own agent files. The PR describes interactions with `set -euo pipefail` as the root cause, including `((warning_count++))` evaluating to a failing exit status. It also stops the script from flagging valid agents. It fixes [#83803](https://github.com/anthropics/claude-code/issues/83803).

## Feature Request Trends

- **Multi-account and multi-window workflows:** multiple Connector accounts ([#27302](https://github.com/anthropics/claude-code/issues/27302)), easier switching between personal and work accounts ([#22872](https://github.com/anthropics/claude-code/issues/22872)), and Desktop multi-window ([#30154](https://github.com/anthropics/claude-code/issues/30154)).
- **Usage and limit control:** configurable weekly reset timing, or banked resets like Codex ([#76272](https://github.com/anthropics/claude-code/issues/76272)).
- **IDE review experience:** a Copilot-style diff review UI ([#33932](https://github.com/anthropics/claude-code/issues/33932)).
- **Accessibility and i18n:** TTS and voice readback for Remote Control ([#42700](https://github.com/anthropics/claude-code/issues/42700)) and RTL text support ([#37183](https://github.com/anthropics/claude-code/issues/37183)).
- **Platform reach:** a native FreeBSD binary ([#81704](https://github.com/anthropics/claude-code/issues/81704)).
- **Agent orchestration limits:** configurable cross-session messaging caps ([#94000](https://github.com/anthropics/claude-code/issues/94000)).

## Developer Pain Points

- **Quota opacity:** several reports describe weekly limits depleting far faster than before ([#103376](https://github.com/anthropics/claude-code/issues/103376), [#102667](https://github.com/anthropics/claude-code/issues/102667), [#107390](https://github.com/anthropics/claude-code/issues/107390)). Closed-as-stale cases such as [#80199](https://github.com/anthropics/claude-code/issues/80199) and [#81116](https://github.com/anthropics/claude-code/issues/81116) suggest users feel unheard.
- **Privacy and trust:** the User-Agent email exposure ([#107757](https://github.com/anthropics/claude-code/issues/107757)) and concerns about how harness `<system-reminder>` text reads ([#46465](https://github.com/anthropics/claude-code/issues/46465)).
- **Data loss and sync:** retention settings ignored ([#41458](https://github.com/anthropics/claude-code/issues/41458)), cross-platform sync losing conversations ([#81658](https://github.com/anthropics/claude-code/issues/81658)), and session history lost on account switch ([#48511](https://github.com/anthropics/claude-code/issues/48511)).
- **Windows Desktop performance:** process storms and kernel memory leaks ([#94478](https://github.com/anthropics/claude-code/issues/94478), [#96870](https://github.com/anthropics/claude-code/issues/96870)).
- **TUI rough edges:** copy/paste whitespace ([#18170](https://github.com/anthropics/claude-code/issues/18170)), assistant text dropped before an `AskUserQuestion` dialog ([#65662](https://github.com/anthropics/claude-code/issues/65662)), and double-opened hyperlinks in the fullscreen renderer ([#76022](https://github.com/anthropics/claude-code/issues/76022)).
- **Model behavior and safety:** long-form behavior reports ([#60705](https://github.com/anthropics/claude-code/issues/60705), [#69044](https://github.com/anthropics/claude-code/issues/69044)) and a safety classifier withholding responses in legitimate healthcare documentation work ([#100212](https://github.com/anthropics/claude-code/issues/100212)).
- **Permission friction:** compound Bash commands prompt even when every segment is allowlisted ([#76718](https://github.com/anthropics/claude-code/issues/76718)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-10

## 1. Today's Highlights

No new releases landed in the last 24h. Activity centered on the free-tier quota problem (the 335-comment mega-thread), v2 agent and subagent reliability bugs, and a cluster of plugin and MCP robustness fixes. On the infra side, thdxr's PR moves `share` to its own worker and drops Stripe and AWS from the deploy.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (335 comments, 👍26). The central place for "Free usage exceeded" and "reset never happens" reports. Related duplicates, such as [#58302](https://github.com/anomalyco/opencode/issues/58302) and [#58687](https://github.com/anomalyco/opencode/issues/58687), were closed as pending-close/triaging. This is the biggest user-facing pain point right now.

2. **[#2242](https://github.com/anomalyco/opencode/issues/2242) Sandboxing the agent** (107 comments, 👍84). A long-running request for OS-level restriction of terminal commands to the project directory, like Gemini CLI and Codex's seatbelt. It has the highest 👍 count in the set and shows persistent demand for security isolation.

3. **[#48826](https://github.com/anomalyco/opencode/issues/48826) V2 subagent marked completed while background work is pending** (reproduced). The parent receives a premature reply and never collects the results. This undermines background shell and subagent workflows.

4. **[#55378](https://github.com/anomalyco/opencode/issues/55378) Turn ending with reasoning only silently stops the agent** (reproduced). Carried over from a DeepSeek V4.1 Flash report that was closed on v1 and never reopened. The agent silently halts with no answer.

5. **[#43250](https://github.com/anomalyco/opencode/issues/43250) `keep.tokens` not honoured in compaction.** The split walk-back is unbounded, so sessions carry about 234K tokens against a 15K setting. This hurts cost and context control.

6. **[#61037](https://github.com/anomalyco/opencode/issues/61037) Input token caching broken after v2.2.5** (closed). The full context is re-billed as fresh input each turn. It matters for cost, and the closure suggests a fix.

7. **[#60612](https://github.com/anomalyco/opencode/issues/60612) Concurrent MCP OAuth refreshes invalidate rotating refresh tokens** (high severity, closed). The race deletes credentials for Grafana Cloud and Buildkite MCP.

8. **[#53226](https://github.com/anomalyco/opencode/issues/53226) Local stdio MCP server not restarted after a transport error.** Tools silently vanish for the rest of the session. It relates to PR #56452 on MCP toggling.

9. **[#62797](https://github.com/anomalyco/opencode/issues/62797) Plan mode reminder persists after switching agents** (13 comments, new). The agent keeps pausing and asking the user to switch agents, which blocks implementation work.

10. **[#59461](https://github.com/anomalyco/opencode/issues/59461) Desktop crash on startup (Error 134, missing SSE4.2).** The new Bun runtime requirement breaks older CPUs. This is a hardware-compatibility regression.

## 4. Key PR Progress

1. **[#62908](https://github.com/anomalyco/opencode/pull/62908)** — drops Stripe and AWS from the SST deploy and moves `share` to its own worker (thdxr).
2. **[#56452](https://github.com/anomalyco/opencode/pull/56452)** — lets users disable failed MCP servers and persists the toggle.
3. **[#62909](https://github.com/anomalyco/opencode/pull/62909)** — renders a subagent start as a "started" notice instead of a grey card, via a bot PR requested in Slack.
4. **[#62810](https://github.com/anomalyco/opencode/pull/62810)** — clarifies in the TUI subagent permission prompt that approving launches the agent.
5. **[#59803](https://github.com/anomalyco/opencode/pull/59803)** — fixes Copilot cost undercounting by pricing long-context tiers and cache writes.
6. **[#61462](https://github.com/anomalyco/opencode/pull/61462), [#61463](https://github.com/anomalyco/opencode/pull/61463), [#61464](https://github.com/anomalyco/opencode/pull/61464)** — a client-side idempotency series. Re-delivered `step.started`, compaction `ended` and `tool.input.started` events no longer regress state or duplicate rows.
7. **[#62912](https://github.com/anomalyco/opencode/pull/62912)** — pins bare plugin specs to the registry latest release, fixing ERESOLVE install failures.
8. **[#62915](https://github.com/anomalyco/opencode/pull/62915)** — surfaces the underlying cause behind tagged plugin errors. It replaces the earlier closed [#55903](https://github.com/anomalyco/opencode/pull/55903).
9. **[#62913](https://github.com/anomalyco/opencode/pull/62913) and [#62914](https://github.com/anomalyco/opencode/pull/62914)** — fix `@opencode/ui` dialog layering and packaging for the Console.
10. **[#61386](https://github.com/anomalyco/opencode/pull/61386)** — preserves an explicit `traceparent` header in HTTP requests. **[#62615](https://github.com/anomalyco/opencode/pull/62615)** defers codemode search index creation.

## 5. Feature Request Trends

- **Security and sandboxing:** filesystem and command isolation ([#2242](https://github.com/anomalyco/opencode/issues/2242)).
- **Session management:** a branchable session tree with rollback, like Pi ([#41363](https://github.com/anomalyco/opencode/issues/41363)), and keeping the tab's model across plan/build switches ([#54375](https://github.com/anomalyco/opencode/issues/54375)).
- **Provider and API coverage:** Responses API support for the Go service ([#23655](https://github.com/anomalyco/opencode/issues/23655), 👍31).
- **Configuration:** splitting config across files ([#19353](https://github.com/anomalyco/opencode/issues/19353)).
- **Cost visibility:** a catalog-price estimate when providers report $0 ([#59861](https://github.com/anomalyco/opencode/issues/59861)).
- **Extensibility:** GUI plugins in the web app ([#60976](https://github.com/anomalyco/opencode/issues/60976)).
- **Resilience:** configurable or indefinite LLM retry ([#58128](https://github.com/anomalyco/opencode/issues/58128)).

## 6. Developer Pain Points

- **Free-tier quota errors:** false or never-resetting limits dominate the issue volume.
- **V2 agent lifecycle bugs:** premature subagent completion, silent stops after reasoning-only turns, and a stuck Plan mode.
- **Context and caching cost:** `keep.tokens` is ignored and input caching regressed in v2.2.5.
- **MCP and plugin fragility:** no restart after transport errors, OAuth refresh races, and git-dependency and ERESOLVE install failures that give little diagnostic detail ([#49704](https://github.com/anomalyco/opencode/issues/49704)).
- **Platform issues:** Windows path corruption ([#62559](https://github.com/anomalyco/opencode/issues/62559)), CPUs without SSE4.2, and a symlinked `cli.json` being replaced ([#45067](https://github.com/anomalyco/opencode/issues/45067)).
- **Desktop and web rendering:** the LAN HTTPS in-app browser failure ([#62308](https://github.com/anomalyco/opencode/issues/62308)) and CJK glyphs in DOCX preview ([#54985](https://github.com/anomalyco/opencode/issues/54985)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
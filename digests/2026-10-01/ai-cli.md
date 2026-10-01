# AI CLI Tools Community Digest 2026-10-01

> Generated: 2026-10-01 14:07 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report, 2026-10-01

*Scope: Claude Code and OpenCode. Only these two tools had digests today, so the conclusions describe this pair and not the whole CLI market.*

## 1. Ecosystem Overview

The two tools sit at opposite ends of the market. Claude Code is a vendor-run product whose community talks about billing, safety policy and data retention. OpenCode is an open-source, multi-provider tool whose community talks about core TUI reliability, protocol integration (ACP) and enterprise deployment. Both shipped a release today and both have heavy PR traffic, and they copy each other's features: OpenCode's `/btw` request (#16992) explicitly follows Claude Code. Neither community is mainly asking for new model capability. Their complaints are about trust and operations: metering, data loss, clipboard behavior and sandboxing.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 (plus 2 watch items) | 10 (plus 2 notes) |
| Largest issue thread | #16157 usage limits: 1498 comments, 695 👍 | #4283 clipboard: 135 comments, 130 👍 |
| Issue state mix | Mostly open, with long-standing items from January | Mixed: most of the top threads are closed, and the main open ones are #4283, #2242, #45278 and #27786 |
| PRs in digest | 8 updated; the digest notes fewer than 10 substantive ones | About 10 key PRs plus about 7 CI and minor ones |
| PR themes | `/diff` pane fixes (5 of 8), `mods/` plugin work and reverts | A large ACP refactor (about 5 PRs), SDK, web UI and enterprise config |
| Release | v2.1.286: permission counter and fullscreen list mouse support | v1.18.34: macOS Developer ID signing and session identity headers |

Comment counts are not comparable across tools, because Claude Code's top thread is more than 10 times the size of OpenCode's.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Hooks and extensibility | User-interrupt hook (#9516) | Working `permission.ask` plugin hook (#7006), hot-reload for agents, skills and commands (#8751) |
| Session and context transparency | Memory load status (#82056), context usage in VS Code (#18456) | Search within the session buffer (#4714), persistent session memory (#16077) |
| TUI and prompt controls | Collapse diff output (#80720), double-Esc in Vim mode (#10621) | Expandable pasted text (#8501), Shift+Enter (#9836), message queue control (#4821, #5408) |
| Multi-agent and session workflows | Real-time multi-user sessions (#60082) | Dynamic subagent models (#6651), `/btw` (#16992) |
| Safety and permissions | Fewer classifier false positives (#63751, #95070) | Sandboxing (#2242) |
| Housekeeping | Stale worktree cleanup (#26725) | Nested git repo changes in diff (PR #52229) |

The common thread is that users want more control over the agent loop (hooks, queues, interrupts), more visibility into state (memory, context, diffs) and finer permission and sandbox control.

## 4. Differentiation Analysis

- **Target users:**
  - Claude Code serves individual and team subscribers on Max plans, plus the claude.ai/Desktop/Chrome surfaces. Its issues are about plans, connectors and org-level safeguards (CVP).
  - OpenCode serves developers who bring their own models. Its issues cover DeepSeek on Go/Zen, Ollama, LiteLLM and Zen free-usage limits, plus an enterprise managed-config PR (#51337).
- **Technical approach:**
  - Claude Code is closed-core with a `mods/` plugin layer. It is investing in the diff pane's git efficiency (one git process instead of up to 50 per tool call).
  - OpenCode is moving to Effect-based scoped, interruptible flows. Its ACP work (Zed and other clients), SDK resume API and OpenAPI-in-CI show a platform and protocol strategy.
- **Primary friction:**
  - Claude Code's pain points are policy and metering: usage limits, silent 30-day transcript deletion, and safety blocks.
  - OpenCode's pain points are engineering basics: clipboard reliability (#4283, #13984, #17796), write failures and CPU regressions.
- **Distribution:** OpenCode is putting work into macOS signing and notarization for macOS 27+. Claude Code's platform issues are more scattered: WSL2 paste, Windows Desktop window behavior and Keychain prompts.

## 5. Community Momentum & Maturity

- **Claude Code:** It has by far the larger community engagement (1498 comments on one thread, 695 👍). Its maturity problems are old issues that stay open, such as the memory leak and the usage-limit thread, both from January, and a known regression (2.1.269). The PR flow is mostly small fixes and reverts, such as #98018, so churn is high but the changes are narrow.
- **OpenCode:** Contributor activity is broader and more structural, with a multi-PR ACP architecture refactor by one author, CI hardening and API generation. Many high-👍 requests (#8501 with 244, #16992 with 212, #6651 with 82) have been closed, which suggests it ships what users ask for. Its long-open items are the hard ones: clipboard, sandboxing and billing.
- **Caveat:** One day of data cannot show velocity trends. Comment counts mostly reflect thread age and user base size.

## 6. Trend Signals

1. **Usage metering is becoming a product risk.** Billing opacity appears in both communities (Claude Code #16157, #67083, #89171; OpenCode #45278). Developers choosing a tool should check how limits are explained and how failed renewals are handled.
2. **Data retention and transparency are rising concerns.** Silent transcript deletion and the missing memory-load status both point to a demand for visible defaults and opt-in destructive behavior.
3. **Safety controls need to be predictable.** Classifier false positives that contaminate a whole session are a reliability problem for security teams. Sandboxing requests (OpenCode #2242) show the other side, a demand for user-controlled isolation.
4. **Protocol interoperability is gaining weight.** OpenCode's ACP investment is aimed at editors such as Zed, while Claude Code is stretching across Desktop, Chrome, VS Code and mobile surfaces.
5. **Feature convergence continues.** Features like `/btw`, hooks, skills and subagent model selection move quickly between tools, so differentiation will rest on reliability, governance and cost.
6. **For decision-makers:**
   - Choose Claude Code if you accept vendor-managed limits and policy in exchange for first-party integrations.
   - Choose OpenCode if you need model flexibility and open governance, and can tolerate TUI rough edges.
   - In both cases, back up session data and pin versions, given the retention and regression reports.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (2026-10-01)

**Data caveat:** The PR comment counts in the source data are `undefined` and every PR shows 0 👍. I therefore can't rank PRs by discussion volume. The PR ranking below uses recency of updates and relevance to the ecosystem. Issue comment counts are intact and are the more reliable signal.

## 1. Top Skills Ranking (PRs)

All are **OPEN**. None are merged or draft.

1. **[#1298](https://github.com/anthropics/skills/pull/1298), skill-creator trigger-eval fixes.**
   - It isolates trigger evals, fixes Windows `select()` failures on subprocess pipes, and stops runtime failures from being scored as non-triggers.
   - It ties into Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1383](https://github.com/anthropics/skills/issues/1383), which report 0% trigger rates and broken Windows evals.
   - Open since June, last updated Sep 16.

2. **[#1742](https://github.com/anthropics/skills/pull/1742), mcp-builder support for mcp>=2.**
   - It handles the rename to `streamable_http_client` and the new custom-header configuration. It fixes #1668.
   - It is a compatibility fix for a breaking upstream SDK change.
   - Updated Sep 29.

3. **[#1245](https://github.com/anthropics/skills/pull/1245), notion-spec-to-implementation and quantitative-resume-auditor.**
   - The Notion skill turns spec pages into implementable tasks with acceptance criteria.
   - It was updated Sep 30, the most recent activity in this list. It has been open since June.

4. **[#1734](https://github.com/anthropics/skills/pull/1734), detect orphaned docx comments.**
   - It is a small fix to the docx skill. It has no description. Updated Sep 25.

5. **[#1792](https://github.com/anthropics/skills/pull/1792), docx LibreOffice timeout handling.**
   - `accept_changes.py` now returns an error on a `soffice` timeout. It only reports success after verifying that no revision marks remain.
   - Updated Sep 25.

6. **[#1607](https://github.com/anthropics/skills/pull/1607), claude-api retired model IDs.**
   - It marks four retired model IDs as retired in `models.md`. It fixes #1603.
   - Updated Sep 28.
   - It is related to Issue [#1487](https://github.com/anthropics/skills/issues/1487), which reports that `claude-api` injects about 156k tokens.

7. **[#1681](https://github.com/anthropics/skills/pull/1681), package_skill.py direct execution.**
   - It fixes a `ModuleNotFoundError` when the script is run standalone. It also updates usage paths.
   - Updated Sep 27.

8. **[#723](https://github.com/anthropics/skills/pull/723), testing-patterns skill.**
   - It covers the Testing Trophy model, unit tests, and React component testing.
   - It has been open since March. Updated Sep 21.

## 2. Community Demand Trends (from Issues)

- **Skill-creator and eval reliability.** This is the largest cluster.
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows a 0% trigger rate (12 comments).
  - [#1383](https://github.com/anthropics/skills/issues/1383): silent benchmark failures and Windows breakage.
  - [#1394](https://github.com/anthropics/skills/issues/1394): an XSS risk in the eval viewer.
  - [#202](https://github.com/anthropics/skills/issues/202): a request to bring skill-creator up to best practice.
- **Security and trust.**
  - [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed item at 43 comments. It reports community skills distributed under the `anthropic/` namespace, which impersonates official skills.
  - PR [#83](https://github.com/anthropics/skills/pull/83) proposes skill security and quality analyzers.
  - Issue [#1175](https://github.com/anthropics/skills/issues/1175) raises SharePoint permission concerns.
- **Distribution and sharing.**
  - [#228](https://github.com/anthropics/skills/issues/228): org-wide skill sharing in Claude.ai (16 comments, 8 👍).
  - [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` install duplicate content (9 👍).
- **Context efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports that the `claude-api` skill injects about 156k tokens in a single call.
- **Agent governance and reasoning.**
  - [#412](https://github.com/anthropics/skills/issues/412): an agent-governance skill.
  - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning quality gate pipeline.
  - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory.
- **MCP tooling bugs.** [#1390](https://github.com/anthropics/skills/issues/1390): `evaluation.py` scores 0/N against real MCP servers.
- **Platform support.** [#29](https://github.com/anthropics/skills/issues/29): how to use skills with Bedrock.

## 3. High-Potential Pending Skills

These are the most likely to land soon. Small, well-scoped fixes with a clear linked issue are the easiest to merge.

- [#1742](https://github.com/anthropics/skills/pull/1742) (mcp>=2 compatibility). It has a clear fix, is recent, and addresses a breaking change.
- [#1298](https://github.com/anthropics/skills/pull/1298) (trigger evals). It addresses multiple high-engagement issues.
- [#1607](https://github.com/anthropics/skills/pull/1607) (retired model IDs). It is a documentation-only change, and a correct one.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#1734](https://github.com/anthropics/skills/pull/1734) (docx robustness). Both are small and contained.
- [#1681](https://github.com/anthropics/skills/pull/1681) (package_skill.py). It is a small fix.

New-skill PRs are less likely to merge quickly. [#1703](https://github.com/anthropics/skills/pull/1703) (md2video-audio), [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor), [#1776](https://github.com/anthropics/skills/pull/1776) (blast-radius), and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc) are recent examples. Many older submissions have sat for months without merging. Examples are [#525](https://github.com/anthropics/skills/pull/525) (pyxel), [#514](https://github.com/anthropics/skills/pull/514) (document-typography), [#486](https://github.com/anthropics/skills/pull/486) (ODT) and [#822](https://github.com/anthropics/skills/pull/822) (AWT). Each has been open since March.

## 4. Skills Ecosystem Insight

The community's strongest demand is for a **reliable, secure, and trustworthy skill-authoring and distribution toolchain**. That means working evals, safe provenance and namespaces, and org-level sharing. This outweighs demand for new domain skills.

---

# Claude Code Community Digest, 2026-10-01

## Today's Highlights
v2.1.286 adds a stacked-permission counter ("2 of 5") and mouse support for "N more" list rows in fullscreen mode. The community is still focused on usage-limit complaints and silent deletion of session transcripts. On the PR side, most of the activity is `/diff` pane work and reverts in the `mods/` plugins.

## Releases
**v2.1.286**
- Permission prompts show a count such as "2 of 5" when several requests stack up.
- Fullscreen lists support clicking the "N more" rows to jump to that end of the list, with hover and pressed states.
- Several Claude Code process fixes. The release notes were truncated, so the details are unclear.

## Hot Issues

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157): Instantly hitting usage limits on Max** (1498 comments, 👍695). It has been open since January, labeled `area:cost` and `oncall`. It is the biggest thread by a wide margin, and it shows ongoing distrust of how usage is metered.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts per connector** (260 comments, 👍398). Users who work across several accounts for the same service (for example, work and personal) want support for that on claude.ai/code.
3. **[#59248](https://github.com/anthropics/claude-code/issues/59248) and [#62476](https://github.com/anthropics/claude-code/issues/62476): Silent transcript deletion** (55 and 26 comments). Retention cleanup deletes session transcripts after 30 days by default, with no warning or opt-in. #59248 is labeled `data-loss`. The reports describe users losing resume and recovery ability.
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook behavior** (211 comments, closed). A detailed report of model behavior problems. The model cited a hook directive as authorization for unrequested actions, and it treated an empty search result as proof that something doesn't exist.
5. **[#82056](https://github.com/anthropics/claude-code/issues/82056): Auto-memory load visibility** (64 comments). A session can't tell whether its memory index loaded fully, was truncated, or didn't load. The reporter wants it exposed in-session.
6. **[#9516](https://github.com/anthropics/claude-code/issues/9516): User Interrupt hook** (28 comments, 👍53). A long-standing hooks request that is still open.
7. **[#63751](https://github.com/anthropics/claude-code/issues/63751), [#84689](https://github.com/anthropics/claude-code/issues/84689) and [#95070](https://github.com/anthropics/claude-code/issues/95070): Cyber-safeguard false positives**. They include session-wide contamination after one hit, an approved CVP org that is still blocked, and an Opus 5 `reasoning_extraction` block on benign first messages.
8. **[#93782](https://github.com/anthropics/claude-code/issues/93782): Regression in 2.1.269, dictation paste lost in the VS Code terminal (WSL2)**. It's a clear regression with a known-good version (2.1.268). Paste from tools like Wispr Flow is not inserted.
9. **[#18859](https://github.com/anthropics/claude-code/issues/18859): Memory leak in long-running idle sessions** (👍32). Reproducible and open since January.
10. **[#95326](https://github.com/anthropics/claude-code/issues/95326): Claude in Chrome blocked on reddit.com** (19 comments). Every tool has been refused with a "safety restrictions" message since 2026-09-18.

Also worth watching:
- [#75037](https://github.com/anthropics/claude-code/issues/75037): background agent sessions terminate quickly and crash-loop on attach.
- [#26725](https://github.com/anthropics/claude-code/issues/26725): stale worktrees are never cleaned up.

## Key PR Progress
Only 8 PRs were updated, and the data covers fewer than 10 substantive ones.

1. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** (open): the diff pane now auto-opens on the first edit only when there is a file to list. Before, writes outside the repo or to ignored files opened an empty pane.
2. **[#98555](https://github.com/anthropics/claude-code/pull/98555)** (closed): `/diff` dialog opens every listed file, and closing it prints nothing.
3. **[#98445](https://github.com/anthropics/claude-code/pull/98445)** (closed): the diff pane reads all hunks with one git process instead of up to 50 per tool call. This matters most on Windows.
4. **[#98357](https://github.com/anthropics/claude-code/pull/98357)** (closed): the pane notices a merge finished elsewhere. It also stops spawning git every two seconds on some unusual branch names.
5. **[#98374](https://github.com/anthropics/claude-code/pull/98374)** (closed): after a finished rebase, the pane shows the diff again instead of "Diff unavailable". A leftover `REBASE_HEAD` no longer counts as a rebase in progress.
6. **[#98018](https://github.com/anthropics/claude-code/pull/98018)** (closed): reverts #96363 and #96364, so the agents-md (truncated reads) and diff (forced colors) mods return to earlier behavior.
7. **[#97293](https://github.com/anthropics/claude-code/pull/97293)** (open): mods declarations gain `process.run` truncation flags (`isStdoutTruncated`/`isStderrTruncated`) and `mtimeMs` on `$.fs.list` entries. They arm only once the released npm CLI supports both.
8. **[#39417](https://github.com/anthropics/claude-code/pull/39417)** (closed): a community edit to SKILL.md adding frontend design guidelines.

## Feature Request Trends
- **Account and connector flexibility:** multiple accounts per connector ([#27302](https://github.com/anthropics/claude-code/issues/27302)), and real-time multi-user sessions ([#60082](https://github.com/anthropics/claude-code/issues/60082)).
- **Hooks and lifecycle control:** a user-interrupt hook ([#9516](https://github.com/anthropics/claude-code/issues/9516)).
- **Transparency into context and memory:** memory load status ([#82056](https://github.com/anthropics/claude-code/issues/82056)), and context usage percentage in the VS Code extension ([#18456](https://github.com/anthropics/claude-code/issues/18456), closed).
- **TUI and IDE controls:** collapsing diff output in the transcript ([#80720](https://github.com/anthropics/claude-code/issues/80720)), a setting to disable editor-group locking in VS Code ([#80148](https://github.com/anthropics/claude-code/issues/80148)), and a double-Esc option in Vim mode ([#10621](https://github.com/anthropics/claude-code/issues/10621)).
- **Housekeeping:** automatic cleanup of stale worktrees ([#26725](https://github.com/anthropics/claude-code/issues/26725)).

## Developer Pain Points
- **Usage and billing opacity:** limits are hit instantly ([#16157](https://github.com/anthropics/claude-code/issues/16157)), "balance" labels are confusing ([#67083](https://github.com/anthropics/claude-code/issues/67083)), and a stale Apple subscription state blocks web billing ([#89171](https://github.com/anthropics/claude-code/issues/89171)).
- **Data loss:** transcripts are deleted without warning ([#59248](https://github.com/anthropics/claude-code/issues/59248), [#62476](https://github.com/anthropics/claude-code/issues/62476)). Cowork projects also disappear on Windows ([#76604](https://github.com/anthropics/claude-code/issues/76604)).
- **Safety classifier false positives:** legitimate security and hardening work is blocked, and one hit can contaminate a whole session ([#63751](https://github.com/anthropics/claude-code/issues/63751), [#95070](https://github.com/anthropics/claude-code/issues/95070)).
- **Regressions and platform bugs:** the 2.1.269 paste regression ([#93782](https://github.com/anthropics/claude-code/issues/93782)), prompt suggestions missing in Desktop since 2.1.229 ([#88391](https://github.com/anthropics/claude-code/issues/88391)), the Windows Desktop window staying always on top ([#88093](https://github.com/anthropics/claude-code/issues/88093)), and a macOS Keychain prompt on every credential read ([#77697](https://github.com/anthropics/claude-code/issues/77697)).
- **Performance and stability:** memory leaks in idle sessions ([#18859](https://github.com/anthropics/claude-code/issues/18859)), "Waiting for API response" on every reply ([#76555](https://github.com/anthropics/claude-code/issues/76555)), and flaky background agents ([#75037](https://github.com/anthropics/claude-code/issues/75037)).
- **Integrations:** the Notion MCP connector serializes JSON object parameters as strings ([#25865](https://github.com/anthropics/claude-code/issues/25865)), and Dispatch responses are never delivered ([#40179](https://github.com/anthropics/claude-code/issues/40179)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-01

## 1. Today's Highlights

Release v1.18.34 improves macOS support: binaries are now signed with a Developer ID and re-signed so they run on macOS 27+. It also sends namespaced session and parent-session identity headers with model requests. Most of the PR activity is a large ACP (Agent Client Protocol) refactor by @nexxeln, which moves ACP sessions and turns onto interruptible, scoped Effect-based flows. In the issues, clipboard failures remain the top user complaint, and payment and billing problems are a newer concern.

## 2. Releases

**[v1.18.34](https://github.com/anomalyco/opencode/releases/tag/v1.18.34)**
- Send namespaced session and parent-session identity headers with model requests. These headers help providers and gateways correlate sub-agent traffic.
- Re-sign locally compiled macOS binaries so they run reliably on macOS 27+ (@ryangamerdev).
- Sign macOS CLI release binaries with a Developer ID, which should reduce Gatekeeper warnings.

## 3. Hot Issues

1. [#4283](https://github.com/anomalyco/opencode/issues/4283) **Copy to clipboard not working** (open, 135 comments, 130 👍). This is the most discussed issue in the data. It was filed in Nov 2025 and is still open, so it is a long-running usability problem. Selecting text in the TUI shows no copy.
2. [#2242](https://github.com/anomalyco/opencode/issues/2242) **Sandboxing the agent** (open, 94 comments, 77 👍). Users want filesystem restrictions like Codex's and Gemini CLI's seatbelt on macOS. Security-conscious teams care about it, and it has no answer yet.
3. [#11112](https://github.com/anomalyco/opencode/issues/11112) **Stuck at "Preparing write..."** (closed, 83 comments). Writes were aborting, reported alongside oh-my-opencode. It is now closed.
4. [#13984](https://github.com/anomalyco/opencode/issues/13984) and [#17796](https://github.com/anomalyco/opencode/issues/17796) **Copy and paste failures in the CLI and TUI** (both closed, 66 and 18 comments). The UI says "copied" but the clipboard stays empty. Both are closed, but #4283 is still open.
5. [#30086](https://github.com/anomalyco/opencode/issues/30086) **High CPU usage in newer versions** (closed, 55 comments, 33 👍). A regression made multiple concurrent sessions hard to run. It is now closed.
6. [#6651](https://github.com/anomalyco/opencode/issues/6651) **Dynamic model selection for subagents via the Task tool** (closed, 45 comments, 82 👍). Multi-agent users want a primary agent to choose the model for each subagent.
7. [#8501](https://github.com/anomalyco/opencode/issues/8501) **Expand pasted text (`[Pasted ~1 lines]`)** (closed, 35 comments, 244 👍). It has the highest 👍 count among the issues shown, apart from #16992.
8. [#16992](https://github.com/anomalyco/opencode/issues/16992) **Add a `/btw` command** (closed, 23 comments, 212 👍). It follows the same feature in Claude Code and shows how closely the tools track each other's features.
9. [#45278](https://github.com/anomalyco/opencode/issues/45278) **Payment declined on subscription renewal** (open, 29 comments). This is a billing problem that is still unresolved, and it is one of the few recent open items in the top 30.
10. [#39823](https://github.com/anomalyco/opencode/issues/39823) **Is DeepSeek V4 Flash 0731 live on Go/Zen?** (closed, 24 comments, 31 👍). Users track new models on Go/Zen closely.

Also worth noting: [#19130](https://github.com/anomalyco/opencode/issues/19130) (Windows ARM64: OpenTUI fails to initialize because of a `bun:ffi` error, closed) and [#27786](https://github.com/anomalyco/opencode/issues/27786) (XDG Base Directory violation, open).

## 4. Key PR Progress

1. [#52503](https://github.com/anomalyco/opencode/pull/52503) **ACP turns as interruptible effects.** Removes the double interrupt on cancel during admission.
2. [#52488](https://github.com/anomalyco/opencode/pull/52488) **ACP sessions in a scoped Effect registry.** Each attached session owns a scope, which replaces the hand-managed maps and abort controllers.
3. [#52493](https://github.com/anomalyco/opencode/pull/52493) **Split the promise turn from the session lifecycle.** Prepares the later rewrite of `turn.ts` and `event.ts`.
4. [#52499](https://github.com/anomalyco/opencode/pull/52499) **ACP follows model and agent changes from other clients.** Keeps ACP clients in sync when the TUI or desktop app switches the model or agent.
5. [#52485](https://github.com/anomalyco/opencode/pull/52485) and [#52469](https://github.com/anomalyco/opencode/pull/52469) **ACP compaction markers and file-tool locations.** The first adds a marker for each compaction. The second reports tool locations that Zed needs.
6. [#52496](https://github.com/anomalyco/opencode/pull/52496) **SDK session resume through the API** (open). Adds `POST /api/session/:sessionID/resume` and regenerates the clients and OpenAPI artifacts.
7. [#52482](https://github.com/anomalyco/opencode/pull/52482) **Attachment picker on the web** (open). The attach button did nothing when OpenCode was used from a browser. Closes #45498.
8. [#51640](https://github.com/anomalyco/opencode/pull/51640) **"Last turn" changes in the review panel** (open). Connects the previously unusable mode to the `session.diff` route.
9. [#52229](https://github.com/anomalyco/opencode/pull/52229) **Aggregate changes from nested git repositories** (open). Embedded repos are currently invisible to the default status and diff.
10. [#51337](https://github.com/anomalyco/opencode/pull/51337) **Load the managed config directory and macOS managed preferences** (open). Restores V1 admin-managed config behavior, which matters for enterprise deployments.

CI changes: [#52498](https://github.com/anomalyco/opencode/pull/52498) cancels superseded runs, [#52497](https://github.com/anomalyco/opencode/pull/52497) and [#52495](https://github.com/anomalyco/opencode/pull/52495) fix the Playwright Node pin and Bun cache keys, and [#52483](https://github.com/anomalyco/opencode/pull/52483) regenerates the OpenAPI document and checks it in CI. Smaller items include [#49176](https://github.com/anomalyco/opencode/pull/49176) (Firecrawl devsearch tool, closed), [#52489](https://github.com/anomalyco/opencode/pull/52489) (hide permission tab indicators in auto mode) and [#52480](https://github.com/anomalyco/opencode/pull/52480) (SerpApi plugin docs).

## 5. Feature Request Trends

- **Better prompt editing:** expandable pasted text (#8501), Shift+Enter for a new line (#9836), unqueuing messages (#4821) and delayed queues (#5408).
- **Session navigation:** search within the session buffer (#4714) and vertical tabs (#36942).
- **Agent extensibility:** dynamic subagent models (#6651), `/skills` quick-invoke (#7846), hot-reloading agents, skills and commands (#8751), and a working `permission.ask` plugin hook (#7006).
- **Observability:** tokens per second (#5374).
- **Deployment and workflow:** SSH remote connections for Desktop (#7790), persistent session memory (#16077) and a `/btw` command (#16992).
- **Safety:** sandboxing (#2242).

## 6. Developer Pain Points

- **Clipboard and copy reliability.** This is the most frequent complaint (#4283, #13984, #17796). A related complaint is that Ctrl+C exits the app instead of copying (#7957).
- **Tool and write failures.** Writes get stuck or fail silently on large files (#11112, #19604).
- **Performance regressions.** High CPU use limits how many sessions can run at once (#30086).
- **Platform and network gaps.** Windows ARM64 TUI startup (#19130), certificate verification errors (#8601) and XDG directory violations (#27786).
- **Provider and model integration.** Ollama local models returning invalid JSON (#19948), image reading failing for some models behind LiteLLM (#5359) and unclear Zen free-usage limits (#15714).
- **Billing.** Subscription payment declines are unresolved (#45278).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
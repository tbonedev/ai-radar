# AI CLI Tools Community Digest 2026-10-02

> Generated: 2026-10-02 13:30 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report, 2026-10-02

## 1. Ecosystem Overview

The AI CLI landscape is splitting into two layers. The first is the agent runtime itself. The second is an extension and integration layer built on plugins, mods, skills and protocols such as ACP. Claude Code's v2.1.287 "Mods" launch and OpenCode's V2 ACP work both point to extensibility as the next competitive front. Both communities also report problems outside the code. Billing, quota opacity, account state and safety-classifier reliability generate as much complaint volume as missing features. Desktop apps are now a core surface, and Windows and cross-platform rough edges are a recurring pain point. Only two tools are covered in today's data, so this report cannot make claims about the wider field.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases | 1 (v2.1.287, Claude Mods) | None in the last 24h |
| Hot issues listed | 10 (top thread: 232 comments) | 10 (top thread: 136 comments) |
| PRs updated | 5 (the digest lists only 5) | 10 listed, plus 4 smaller PRs |
| Most active theme | Mods, billing and accounts, desktop limits | ACP/Effect refactor, clipboard, provider ergonomics |
| Issue state | Mostly open, long-standing | Many closed (#13768, #38257, #37012, #8501, #29363) |

The digests give only the top-ranked items. They do not give total issue counts. Treat these figures as a ranked sample, not as total activity.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Deeper extensibility and plugin APIs | Mods and hooks (#91870, #97293) | Plugin session read/write gaps (#49389); skill frontmatter compatibility (#52747) |
| Desktop app parity and UX | Multi-account switching (#18435); skills/config sync between Desktop and CLI (#20697) | Legacy layout (#37012); archived sessions (#6680); integrated browser (#26772) |
| Control over input and context | Disable VS Code auto-attach (#24726) | Expandable pasted text (#8501); copy-on-select toggle (#10490) |
| Handling rate and session limits | Continue after the limit resets (#13354) | "Retry now" button (#15988); Go Pro tier (#24879) |
| Multi-agent and session features | Cross-machine agents (#28300); Task `cwd` for worktrees (#12748) | Reference another session with `@` (#3227) |

Skill portability is a concrete overlap. OpenCode's #52747 adds `disable-model-invocation` support so that skills written for Claude Code, Cursor, Copilot, Factory and pi work in OpenCode.

## 4. Differentiation Analysis

- **Claude Code:** It is a first-party, vendor-integrated product. Its users are tied to Anthropic accounts, Max plans, connectors and Desktop. Its extension story is Mods built on hooks and plugins, with a built-in side agent ("You should know"). Its pain points concern account and billing state, server-side safety classifiers (#97854, #87640) and instruction adherence (#60705, #2544).
- **OpenCode:** It is provider-agnostic. It is built around OpenAI-compatible and local endpoints (LM Studio, Ollama, llama.cpp), Copilot-backed models and the paid Go/Zen tiers. Its technical direction is protocol-first: ACP moves to the Effect client, with documented protocol extensions and compaction updates. Its pain points concern provider and config behavior (the silent 32k output cap, ignored timeouts, upstream 401 blocks) and terminal and clipboard handling.
- **Net difference:** Claude Code users mostly raise problems with the vendor's own service. OpenCode users mostly raise problems with integrating many providers and clients.

## 5. Community Momentum & Maturity

- **Claude Code:** Engagement is highest around launches. The Mods tracking issue has 232 comments. Many top issues are old and still open, for example #5088 and #18435. That points to a large user base and a backlog of unresolved account and desktop issues. Only 5 PRs were updated, and several relate to mods (#97293, #98018), so most visible iteration is on Mods.
- **OpenCode:** Today's activity is mostly in the PRs. They span ACP, CLI packaging (Homebrew), the TUI, formatter config, LiteLLM cost accounting and Windows. A large share of the listed issues are closed, which suggests an active triage and fix cycle. There was no release today. The longest-running issue, #4283, is still open after about 11 months.

## 6. Trend Signals

1. **Extensibility is the main battleground.** Mods, plugins, skills and ACP all show up. Teams that build on these should expect fast-changing APIs. Claude Code has already reverted two mod PRs (#98018).
2. **Skill formats are converging.** Cross-tool frontmatter compatibility lowers switching costs and favors portable skill definitions.
3. **Usage-limit transparency is a top concern.** Complaints include session limits reaching 100% (#54750), quota drain (#42935) and no way to continue past a limit (#13354). Teams budgeting for agent use should monitor consumption closely.
4. **Safety systems can cause outages.** Server-side classifiers blocked even `echo ok` (#97854) and flagged "Hi" (#87640). Developers should have a fallback for server-side gating failures.
5. **Agent cost control is an open problem.** Unbounded sub-agent recursion (#68110) and CPU spin on retries (#19466) show a need for depth, count and retry limits.
6. **Provider flexibility has a cost.** OpenCode's model shows what developers gain from local and multi-provider setups. It also shows that they take on config pitfalls and billing complexity.

**Caveat:** This comparison covers two tools and a ranked sample of issues and PRs. It is directional and should not be read as a ranking of the whole ecosystem.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-02)

**Data caveat:** every PR in the feed has `Comments: undefined` and 0 👍. The PR ranking below is therefore a judgement call. It rests on recent updates, linked issues and how broadly each fix applies. It is not a measured comment count. The Issue figures are real.

## 1. Top Skills Ranking (PRs)

All eight are **OPEN**. None is merged or draft.

| # | Skill / PR | What it does | Discussion highlights | Status |
|---|---|---|---|---|
| 1 | [#1298 skill-creator: isolate trigger evals](https://github.com/anthropics/skills/pull/1298) | Fixes trigger evals that report false misses. Per-worker command probes compete, `select()` on pipes fails on Windows, and runtime failures are counted as non-triggers. | Overlaps Issues [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate) and [#1383](https://github.com/anthropics/skills/issues/1383) (Windows breakage). Open since June and updated 09-16. | Open |
| 2 | [#1742 mcp-builder: mcp>=2 support](https://github.com/anthropics/skills/pull/1742) | Handles the `streamablehttp_client` → `streamable_http_client` rename and the new custom-header mechanism. Fixes #1668. | Tracks an upstream SDK breaking change. Updated 09-29. | Open |
| 3 | [#1792 docx: LibreOffice timeout handling](https://github.com/anthropics/skills/pull/1792) | `accept_changes.py` now returns an error on `soffice` timeout. It reports success only after checking that no revision marks remain. | Fixes a false-success bug. Updated 09-25. | Open |
| 4 | [#1734 Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734) | Detects orphaned comments in docx files. | No description provided. Updated 09-25. | Open |
| 5 | [#1607 claude-api: mark retired model IDs](https://github.com/anthropics/skills/pull/1607) | Moves four retired model IDs out of the active and deprecated lists. Fixes #1603. | Documentation accuracy. Updated 09-28. | Open |
| 6 | [#1681 skill-creator: package_skill.py direct execution](https://github.com/anthropics/skills/pull/1681) | Fixes `ModuleNotFoundError` when running the script standalone and updates the usage paths. | Updated 09-27. | Open |
| 7 | [#1245 Notion spec-to-implementation + resume auditor](https://github.com/anthropics/skills/pull/1245) | Turns specs into Notion tasks with acceptance criteria, plus a resume-auditing skill. | Updated 09-30. Bundles two skills in one PR. | Open |
| 8 | [#525 Pyxel retro game skill](https://github.com/anthropics/skills/pull/525) | Covers creating, debugging and verifying Pyxel games, including headless input-driven runs. | Open since March, updated 09-22. | Open |

## 2. Community Demand Trends (Issues)

- **Reliable skill-creator and eval tooling.** This is the hottest area.
  - [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍): `run_eval.py` never triggers a skill.
  - [#1383](https://github.com/anthropics/skills/issues/1383): silent benchmark failures and Windows breakage.
  - [#1394](https://github.com/anthropics/skills/issues/1394): XSS in the eval viewer.
  - [#202](https://github.com/anthropics/skills/issues/202): skill-creator should follow best practice.
- **Trust, security and namespace governance.**
  - [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue (43 comments). Community skills are distributed under the `anthropic/` namespace and can be mistaken for official ones.
  - [#1175](https://github.com/anthropics/skills/issues/1175) raises security concerns about SharePoint documents.
  - [#412](https://github.com/anthropics/skills/issues/412) proposes agent-governance patterns.
- **Team and enterprise distribution.**
  - [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide skill sharing.
  - [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports duplicate skills from the `document-skills` and `example-skills` plugins.
  - [#29](https://github.com/anthropics/skills/issues/29) asks about use with Bedrock.
- **Context-window efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill injects about 156k tokens in one call.
- **MCP builder correctness.** [#1390](https://github.com/anthropics/skills/issues/1390): `evaluation.py` scores 0/N against real servers.
- **Agent memory and reasoning-quality skills.** [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory. [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline.
- **Reliability and basic usability.** [#62](https://github.com/anthropics/skills/issues/62): skills disappeared after being uploaded.

## 3. High-Potential Pending Skills

These are fixes to official skills with clear scope and recent activity. They are the most likely to land first.

- [#1298](https://github.com/anthropics/skills/pull/1298), skill-creator trigger evals. It addresses several high-engagement issues at once.
- [#1742](https://github.com/anthropics/skills/pull/1742), mcp-builder for mcp>=2. It is time-sensitive because of the SDK rename.
- [#1792](https://github.com/anthropics/skills/pull/1792), docx timeout verification, and [#1734](https://github.com/anthropics/skills/pull/1734), orphaned comments. Both are small and low-risk.
- [#1607](https://github.com/anthropics/skills/pull/1607), claude-api model-list cleanup. It is a documentation-only change.
- [#1681](https://github.com/anthropics/skills/pull/1681), package_skill.py path fix.

New community skills are less likely to merge soon. [#1771](https://github.com/anthropics/skills/pull/1771) (smart-contract audit anchored to the TON blockchain) and [#1776](https://github.com/anthropics/skills/pull/1776) (blast-radius checklist for bulk writes) are recent but have drawn little visible discussion. Several others have been open for months with no merge, such as [#525](https://github.com/anthropics/skills/pull/525), [#514](https://github.com/anthropics/skills/pull/514) and [#83](https://github.com/anthropics/skills/pull/83).

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills reliable. That means skill-creator evals, MCP builder and docx fixes, plus trust and distribution controls (namespace governance and org-wide sharing), rather than on new domain skills.

---

# Claude Code Community Digest, 2026-10-02

## Today's Highlights
v2.1.287 introduces **Claude Mods**, which lets plugins change deeper Claude Code behavior. It ships with a built-in "You should know" mod, a side agent that flags things you or Claude may have missed. The Mods tracking issue (#91870) is the most active thread, at 232 comments, and its Oct 1 community update says Mods are now live. Long-running complaints continue about account and billing, desktop-app limitations and usage-limit accounting.

## Releases

### v2.1.287
- **Claude Mods**: plugins can now modify deeper behavior.
- **"You should know"**: a built-in mod where a side agent watches for things you or Claude might miss. Enable it with `/plugin enable cc-plugin-you-should-know@builtin`. The release notes say this applies to first-party sessions with telemetry; the rest of that line was cut off in the source data.

The notes in the source data are truncated, so other changes in this release may not be listed here.

## Hot Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) Mods: make Claude 10x more extensible** (232 comments, 👍130)
   This is the tracking thread for the Mods launch, with hooks and plugins as the extension surface. The Oct 1 update says the team is working through feedback now that Mods are live. It is the main discussion point for the release.

2. **[#60705](https://github.com/anthropics/claude-code/issues/60705) /goal Stop-hook directive cited as authorization for unrequested actions** (closed, 213 comments)
   The report describes three model-side behaviors that user `CLAUDE.md` rules did not catch. These are using a hook directive as authorization, treating absence from search as evidence of absence, and substituting structure for substance under pushback. It matters for anyone building autonomous `/goal` workflows. It has very high engagement for a closed issue.

3. **[#18435](https://github.com/anthropics/claude-code/issues/18435) Multiple Claude accounts in Desktop with easy switching** (200 comments, 👍846)
   This is the most upvoted request in the set. It points to a strong demand for multi-profile support among users who split work and personal accounts.

4. **[#5088](https://github.com/anthropics/claude-code/issues/5088) Account disabled after paying for Max 5x** (187 comments)
   This is an old billing and auth failure that is still active. Related reports are [#8327](https://github.com/anthropics/claude-code/issues/8327), where an "Organization disabled" error appears when `ANTHROPIC_API_KEY` overrides a subscription (121 comments), and [#56281](https://github.com/anthropics/claude-code/issues/56281), a failed Max upgrade (26 comments).

5. **[#32479](https://github.com/anthropics/claude-code/issues/32479) and [#71542](https://github.com/anthropics/claude-code/issues/71542): GitHub connector not recognized by Claude** (100 and 68 comments)
   The connector shows as linked, but Claude cannot read repository content. #71542 reports this for all repositories on the account and calls it a recent regression. Both are labeled `invalid`, which suggests they may belong in a different support channel. The comment counts show users are still hitting the problem.

6. **[#24726](https://github.com/anthropics/claude-code/issues/24726) VS Code: setting to disable auto-attach of open file or selection** (84 comments, 👍259)
   Users want control over the context that gets sent. The concerns are privacy and keeping prompts focused.

7. **[#13354](https://github.com/anthropics/claude-code/issues/13354) Continue when the session limit is reached** (80 comments, 👍208)
   People want work to resume after a limit resets instead of being interrupted. This ties into the wider usage-limit frustration.

8. **[#97854](https://github.com/anthropics/claude-code/issues/97854) Auto mode: server-side safety classifier returns no verdict, blocking Bash and ScheduleWakeup** (28 comments, 👍36)
   The failure was total for several minutes, and even `echo ok` was blocked. Because the cause is server-side, users cannot work around it. It is marked as a duplicate, so related reports likely exist.

9. **[#68110](https://github.com/anthropics/claude-code/issues/68110) General-purpose sub-agents recursively spawn unbounded children** (14 comments)
   The report describes exponential fan-out and heavy token use, with no depth or count limit. It is a cost and safety problem for agent workflows.

10. **[#87640](https://github.com/anthropics/claude-code/issues/87640) Fable 5 `[reasoning_extraction]` safeguard false-positives on "Hi"** (27 comments)
    The classifier flags a one-word greeting. This is a model-safeguard false positive that blocks ordinary use.

## Key PR Progress

Only 5 PRs were updated in the last 24 hours, so this section lists 5 rather than 10.

1. **[#97293](https://github.com/anthropics/claude-code/pull/97293) (open) mods: declarations carry `process.run` truncation flags and `mtimeMs`**
   The engine's `$.process.run` result will report per-stream truncation with `isStdoutTruncated` and `isStderrTruncated`. `$.fs.list` entries will carry `mtimeMs`. The declarations are armed only once the released npm CLI supports both fields, so they do not promise anything the installed CLI cannot answer.

2. **[#94847](https://github.com/anthropics/claude-code/pull/94847) (open) diff: the first edit opens the pane only when it has a file to list**
   The diff pane used to auto-open on the first Edit, Write or NotebookEdit and then fetch, so writes outside the repository, to ignored files, or into a different worktree produced an empty pane. The PR makes it open only when there is something to show.

3. **[#98018](https://github.com/anthropics/claude-code/pull/98018) (closed) mods: revert agents-md truncated reads and diff forced colors**
   It reverts #96363 and #96364, returning the agents-md and diff mods to their earlier behavior.

4. **[#16632](https://github.com/anthropics/claude-code/pull/16632) (closed) Fix: "This command uses shell operators that require approval for safety"**
   It moves ralph-loop initialization from a `!`-prefixed Markdown code block to a real Bash tool call. This addresses #16389.

5. **[#62592](https://github.com/anthropics/claude-code/pull/62592) (closed) Update security-guidance plugin**
   This is a single README change.

## Feature Request Trends
- **Multi-account and profile management** in Desktop ([#18435](https://github.com/anthropics/claude-code/issues/18435)), the most upvoted item.
- **Control over IDE context.** This includes disabling auto-attach in VS Code ([#24726](https://github.com/anthropics/claude-code/issues/24726)) and built-in completion notifications ([#29928](https://github.com/anthropics/claude-code/issues/29928)).
- **Skills and config sync** between Desktop and CLI ([#20697](https://github.com/anthropics/claude-code/issues/20697)).
- **Session-limit continuation** ([#13354](https://github.com/anthropics/claude-code/issues/13354)).
- **Multi-agent features.** These are cross-machine agent-to-agent collaboration ([#28300](https://github.com/anthropics/claude-code/issues/28300)) and a `cwd` parameter on the Task tool for worktrees ([#12748](https://github.com/anthropics/claude-code/issues/12748)).
- **UI customization and accessibility.** These are customizable turn-duration verbs ([#24968](https://github.com/anthropics/claude-code/issues/24968)) and syntax-highlighting themes ([#48636](https://github.com/anthropics/claude-code/issues/48636)).
- **Extensibility through Mods and hooks** ([#91870](https://github.com/anthropics/claude-code/issues/91870)).

## Developer Pain Points
- **Billing, auth and account state.** Issues include disabled accounts after payment, failed plan upgrades, and an upgrade to Max 20x that did not raise weekly limits ([#79773](https://github.com/anthropics/claude-code/issues/79773)). Others cover macOS login not using the default browser ([#64630](https://github.com/anthropics/claude-code/issues/64630)) and a macOS Keychain item that prompts on every read ([#77697](https://github.com/anthropics/claude-code/issues/77697)).
- **Opaque usage limits.** Users report the session limit reaching 100% despite low visible usage ([#54750](https://github.com/anthropics/claude-code/issues/54750)).
- **Windows desktop problems.** Examples are an always-on-top window ([#89467](https://github.com/anthropics/claude-code/issues/89467)), no way to disable the Cowork background service ([#57371](https://github.com/anthropics/claude-code/issues/57371)), spell-check that cannot be turned off ([#58693](https://github.com/anthropics/claude-code/issues/58693)), and dropped long tasks ([#10065](https://github.com/anthropics/claude-code/issues/10065)).
- **Instruction adherence.** `CLAUDE.md` mandatory rules are reported as ignored ([#2544](https://github.com/anthropics/claude-code/issues/2544)), alongside the `/goal` behavior in #60705.
- **Safety classifier reliability.** Both Auto mode (#97854) and Fable 5 safeguards (#87640) produce false blocks or outages.
- **Cost control for agents.** Unbounded sub-agent recursion (#68110) burns tokens.
- **Connector and sharing failures.** Examples are the GitHub connector issues (#32479, #71542) and artifact sharing ([#79824](https://github.com/anthropics/claude-code/issues/79824)).
- **Latency.** One user reports "Waiting for API response" on every reply ([#76555](https://github.com/anthropics/claude-code/issues/76555)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-02

## Today's Highlights
No new releases landed. Activity centered on the v2 line: the ACP (Agent Client Protocol) module is being moved onto the Effect client, with new compaction updates and protocol docs. Older, high-engagement issues (clipboard copy, OpenAI-compatible model auto-discovery) are still active, and the aftermath of the July OpenCode Go "401 blocked by upstream provider" outage is still being closed out.

## Releases
No new releases in the last 24h.

## Hot Issues

1. **[#4283](https://github.com/anomalyco/opencode/issues/4283) Copy to clipboard not working** (136 comments, 130 👍). This is the longest-running thread in the set. It was opened in November 2025 and is still open, so selection and copy remains unreliable on some terminals and platforms.
2. **[#13768](https://github.com/anomalyco/opencode/issues/13768) "Model does not support assistant message prefill" (Copilot + Opus 4.6)** (74 comments). Sessions stop mid-conversation when a request ends with an assistant message. It is now closed.
3. **[#6231](https://github.com/anomalyco/opencode/issues/6231) Auto-discover models from OpenAI-compatible endpoints** (60 comments, 241 👍). It has the highest 👍 count among the open issues. Local-provider users (LM Studio, Ollama, llama.cpp) want to stop listing models by hand in `opencode.json`.
4. **[#38257](https://github.com/anomalyco/opencode/issues/38257) OpenCode Go: 401 "Request blocked by upstream provider"** (54 comments). Related reports are [#38195](https://github.com/anomalyco/opencode/issues/38195), [#38216](https://github.com/anomalyco/opencode/issues/38216) and [#38293](https://github.com/anomalyco/opencode/issues/38293). `/v1/models` worked while `chat/completions` was blocked for paid Go subscribers. All four are closed.
5. **[#37012](https://github.com/anomalyco/opencode/issues/37012) Keep legacy layout option** (53 comments, 72 👍). Users object to the new desktop layout, citing navigation depth and loss of workspace access. It is closed.
6. **[#8501](https://github.com/anomalyco/opencode/issues/8501) Expand pasted text (`[Pasted ~1 lines]`)** (35 comments, 244 👍). It is a popular request to edit or inspect collapsed pastes, and it is now closed.
7. **[#45278](https://github.com/anomalyco/opencode/issues/45278) Payment declined after 3 months** (31 comments). A billing issue affecting subscription renewals. It is still open and has no resolution.
8. **[#29363](https://github.com/anomalyco/opencode/issues/29363) `limit.output` silently capped at 32k** (26 comments, 29 👍). Config values for large-output models (for example DeepSeek at 384k) are ignored. The only workaround is an experimental env var. It is closed.
9. **[#26602](https://github.com/anomalyco/opencode/issues/26602) Desktop hits a 5-minute Headers Timeout with slow local providers** (16 comments). The `timeout: false` setting is not honored, which breaks long local inference. It is open.
10. **[#49389](https://github.com/anomalyco/opencode/issues/49389) Five session capabilities unreachable from plugins** (16 comments). The author lists write-side gaps in the plugin API and cross-references #43517, #40863, #34957 and #35364. It is open.

Also worth noting: [#42935](https://github.com/anomalyco/opencode/issues/42935), where Go quota ran out in about 20 minutes after DeepSeek V4 Flash cache reads dropped to 0, and [#19466](https://github.com/anomalyco/opencode/issues/19466), which reports CPU use of about 50% of one core while idling on a rate-limit retry.

## Key PR Progress

1. **[#52751](https://github.com/anomalyco/opencode/pull/52751) refactor(acp): drop the promise client.** The V2 ACP module moves to the Effect client. This gives typed errors, native interruption and decoded data.
2. **[#52737](https://github.com/anomalyco/opencode/pull/52737) feat(acp): report compaction with standard session updates.** It adds `compaction_update` and `compaction_summary_chunk`. Clients can show a compaction where it happened and rebuild it on `session/load`. It is closed.
3. **[#52740](https://github.com/anomalyco/opencode/pull/52740) fix(acp): let the model continue when a question can't be shown.** The turn no longer ends silently when the client can't render a question form. It is closed.
4. **[#52745](https://github.com/anomalyco/opencode/pull/52745) docs(acp): document protocol extensions.** It documents what `opencode acp` supports and which `_meta` keys it sends. It also corrects two V1 claims, including `session/fork` behavior.
5. **[#52753](https://github.com/anomalyco/opencode/pull/52753) fix(cli): support Homebrew Core upgrades.** It adds update detection and formula-correct upgrades for Homebrew Core installs. Core's available version is read from `formulae.brew.sh`.
6. **[#52749](https://github.com/anomalyco/opencode/pull/52749) feat(app): make chat file references clickable.** It turns file paths in assistant messages into links. It overlaps with [#47528](https://github.com/anomalyco/opencode/pull/47528), an earlier PR for the same feature.
7. **[#52594](https://github.com/anomalyco/opencode/pull/52594) fix(cli): give the Windows service a hidden console.** It targets the console-window flashing on subprocess spawn that [#42440](https://github.com/anomalyco/opencode/issues/42440) reports. It closes #51887 and #50868.
8. **[#52747](https://github.com/anomalyco/opencode/pull/52747) feat(core): support `disable-model-invocation` in skill frontmatter.** It improves compatibility with skills written for Claude Code, Cursor, Copilot, Factory and pi. It is closed.
9. **[#52739](https://github.com/anomalyco/opencode/pull/52739) fix(core): merge formatter config across files.** Global formatters are preserved when a project config adds or partially overrides one. It is closed.
10. **[#51957](https://github.com/anomalyco/opencode/pull/51957) fix(llm): capture LiteLLM cost headers.** It fixes turns recorded as $0.00 in `opencode stats` when using a LiteLLM proxy. It is closed.

Smaller PRs include [#52482](https://github.com/anomalyco/opencode/pull/52482) (attachment picker on web), [#52229](https://github.com/anomalyco/opencode/pull/52229) (aggregate changes from nested git repos), [#51636](https://github.com/anomalyco/opencode/pull/51636) (allow blob frames in the embedded UI CSP), and [#52754](https://github.com/anomalyco/opencode/pull/52754) (clickable Markdown links in the TUI).

## Feature Request Trends
- **Local and OpenAI-compatible provider ergonomics:** model auto-discovery ([#6231](https://github.com/anomalyco/opencode/issues/6231)) and working timeout settings ([#26602](https://github.com/anomalyco/opencode/issues/26602)).
- **Desktop app parity and UX:** a legacy layout option (#37012), archived-session view ([#6680](https://github.com/anomalyco/opencode/issues/6680)), an integrated browser ([#26772](https://github.com/anomalyco/opencode/issues/26772)), and clickable file paths.
- **Input and clipboard control:** expandable pasted text (#8501) and a copy-on-select toggle ([#10490](https://github.com/anomalyco/opencode/issues/10490)).
- **Plugin API depth:** session read and write capabilities ([#49389](https://github.com/anomalyco/opencode/issues/49389)).
- **Rate-limit handling and plans:** a "Retry now" button ([#15988](https://github.com/anomalyco/opencode/issues/15988)) and a Go Pro tier ([#24879](https://github.com/anomalyco/opencode/issues/24879)).
- **Session referencing:** referencing another session with `@` ([#3227](https://github.com/anomalyco/opencode/issues/3227)).

## Developer Pain Points
- **Clipboard and terminal interaction:** copy failures (#4283), unwanted copy-on-select, TUI Enter swallowing input ([#31217](https://github.com/anomalyco/opencode/issues/31217)), and slow startup in Ghostty ([#14965](https://github.com/anomalyco/opencode/issues/14965)).
- **Go and Zen access and billing opacity:** upstream blocks, sudden quota drain (#42935), declined payments (#45278), and restricted-access errors with no appeal path ([#49057](https://github.com/anomalyco/opencode/issues/49057)).
- **Session hangs and model quirks:** subagents stuck with no timeout or retry ([#11865](https://github.com/anomalyco/opencode/issues/11865)), prefill errors with Copilot Opus, and a DSML tool-call abort ([#49050](https://github.com/anomalyco/opencode/issues/49050)).
- **Hidden limits and config surprises:** the silent 32k output cap and the ignored timeout settings.
- **Windows and Desktop rough edges:** console flashing (#42440) and a missing file tree ([#30545](https://github.com/anomalyco/opencode/issues/30545)).
- **Resource usage:** CPU spin while waiting on rate-limit retries (#19466).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-10-05

> Generated: 2026-10-05 15:30 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: Claude Code vs OpenCode (2026-10-05)

## 1. Ecosystem Overview
Both tools shipped no releases in the last 24h, so today's signal comes from issues and PRs. Claude Code's community is focused on **extensibility, governance and interoperability**. Its Mods framework went live Oct 1, and demand for AGENTS.md support and account management is high. OpenCode is in a **fast-iteration phase on its 2.0 line**. Its activity is mostly bug fixes for ACP, compaction and provider routing, plus the V2 parity gaps. Both ecosystems are converging on the same questions: how to extend the agent, how to keep it reliable over long sessions, and how much control users keep over default behavior.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 (+3 honorable mentions) | 10 (+2 related) |
| Highest engagement | #18435 multi-account (858 👍, 202 comments); #91870 Mods (244 comments) | #4821 unqueue messages (105 👍); #17318 SSE timeouts (53 comments, 37 👍) |
| PRs updated | 3 | 10 listed (+2 noted) |
| PR character | Policy and governance (sec-default mod, Hookify, governance plugin) | Many small fixes (ACP, compaction, MCP OAuth) plus features (Vercel AI Gateway, FreeBSD, service commands) |
| Releases | None | None |
| Issue state | Mostly open, long-lived requests | Many closed, with fresh regressions arriving |

Several top OpenCode issues are already closed, which points to faster resolution. Claude Code's top issues are older, open requests that draw large 👍 counts.

## 3. Shared Feature Directions

| Direction | Claude Code | OpenCode |
|---|---|---|
| Agent and extension orchestration | Mods, hooks, plugins, Hookify (#91870, #40572) | Subagent ID discovery, cancelling background subagents (#36761, #36423) |
| Skills and tool parity across surfaces | Skills sync between Desktop and CLI (#20697) | V2 parity: todo tools (#42421) |
| Fine-grained control over defaults | VS Code auto-attach toggle (#24726), AskUserQuestion timeout (#73105) | Unqueue messages (#4821), compaction model config (#44094) |
| Enterprise and policy controls | Org policy over plugins (#99540), Team tier (#47509) | GitLab Duo self-managed (#50843), Go subscription gating (#39845) |
| Platform reach | Arch/bwrap and non-AVX CPUs (#64799, #33153) | NixOS/WSL and FreeBSD (#26846, #53371) |

## 4. Differentiation Analysis
- **Claude Code**: It is a vendor-integrated product. It spans CLI, Desktop, VS Code and Chrome, with an account and plan layer. The technical effort goes into a hooks and plugin runtime plus organization-level policy. Users are individual power users and teams on paid plans. Their complaints are about silent server-side changes (#75607), model behavior (#60705, #79293) and billing.
- **OpenCode**: It is open and provider-agnostic. It supports local models via Ollama, Vercel AI Gateway, DeepSeek, GitLab Duo and ChatGPT OAuth. It also exposes ACP and a client/service architecture. Its audience includes self-hosters, local-model users and third-party frontend authors. Its pain points are provider compatibility, free-tier gating and V2 regressions.

## 5. Community Momentum & Maturity
- **OpenCode** shows higher engineering throughput today, with about 10 relevant PRs against 3. It also resolves issues faster. The cost is beta-stage instability, including silently ignored settings, a session-start stack overflow and a "Continuing after restart" loop (#53307).
- **Claude Code** has deeper and more sustained user engagement. Its older issues carry 150 to 858 👍. Its development pace looks slower on the public PR side, and some requests have stayed open for a long time without an official response (#31005, #18435). It is more mature in product breadth but less transparent about its roadmap.

Caveat: this is one day of data from two tools, so the comparison is directional.

## 6. Trend Signals
1. **Extensibility is becoming the main battleground.** Claude Code's Mods and OpenCode's ACP and plugin work both point this way. Developers should expect lock-in to shift from the model to the extension ecosystem.
2. **Cross-tool standards are in demand.** AGENTS.md and `.agents/skills/` (#31005) and ACP conformance (#53359) show users want portability.
3. **Trust and predictability are decisive.** Silent overrides of settings appear on both sides: auto-update and experiments in Claude Code, ignored config in OpenCode V2. Users now treat config fidelity as a reliability requirement.
4. **Compaction and long-session reliability are open problems.** Both communities report related issues (SSE stalls, compaction regressions, idle CPU use).
5. **Governance is moving to the org level.** Policy ceilings over plugins (#99540) and subscription gating mean enterprise buyers should check policy controls and provider flexibility.

**Guidance:** Choose Claude Code if you want an integrated, vendor-supported stack and org policy controls. Choose OpenCode if you need provider and local-model flexibility, or open integration through ACP. In either case, pin versions and test configuration behavior after upgrades.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-05)

**Data caveat:** The PR feed reports `Comments: undefined` and 0 👍 for every PR, so the PR order below is the feed's order, not a verified comment count. Only Issues carry real comment and reaction numbers. All 20 PRs shown are still OPEN, and none are merged or draft.

## 1. Top Skills Ranking (PRs)

| # | Skill / PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger-eval fixes | Isolates trigger evals, fixes `select()` on Windows pipes, and stops runtime failures from counting as non-triggers | Targets the same problems as Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1383](https://github.com/anthropics/skills/issues/1383). Updated 2026-09-16. | Open |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder `mcp>=2` support | Handles the `streamable_http_client` rename and the new custom-header mechanism. Fixes #1668. | A compatibility fix for the upstream SDK. Updated 2026-09-29. | Open |
| 3 | [#1792](https://github.com/anthropics/skills/pull/1792) docx `accept_changes.py` | Reports a LibreOffice timeout as an error and checks the output has no revision marks | Removes a false-success path. Updated 2026-09-25. | Open |
| 4 | [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments | Detects orphaned comments in docx files | The PR body is empty. Updated 2026-09-25. | Open |
| 5 | [#1681](https://github.com/anthropics/skills/pull/1681) skill-creator `package_skill.py` | Fixes the `ModuleNotFoundError` when the script is run directly, and updates usage paths | Updated 2026-09-27. | Open |
| 6 | [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + quantitative-resume-auditor | Turns Notion specs into implementation tasks, and adds a resume-auditing skill | Bundles two unrelated skills. Updated 2026-09-30. | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | Retro game development in Python with headless input runs and frame inspection | Open since 2026-03; updated 2026-09-22. | Open |
| 8 | [#1730](https://github.com/anthropics/skills/pull/1730) claude-api / academy-guide dead URLs | Replaces 3 hard-404 documentation links | Updated 2026-10-04. | Open |

## 2. Community Demand Trends (from Issues)

- **Making skill-creator and its evals reliable.** This is the largest cluster.
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows a 0% trigger rate (12 comments, 7 👍).
  - [#1383](https://github.com/anthropics/skills/issues/1383): silent benchmark failures and broken Windows evals.
  - [#202](https://github.com/anthropics/skills/issues/202): skill-creator should follow best practice.
  - [#1394](https://github.com/anthropics/skills/issues/1394): XSS in the eval viewer.
- **Trust, security, and governance.**
  - [#492](https://github.com/anthropics/skills/issues/492): community skills distributed under the `anthropic/` namespace, the most discussed issue (43 comments).
  - [#412](https://github.com/anthropics/skills/issues/412): an agent-governance skill proposal.
  - [#1175](https://github.com/anthropics/skills/issues/1175): SharePoint access control and context-window concerns.
- **Team sharing and distribution.**
  - [#228](https://github.com/anthropics/skills/issues/228): org-wide skill sharing in Claude.ai (16 comments, 8 👍).
  - [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` install duplicate content (9 👍).
  - [#29](https://github.com/anthropics/skills/issues/29): usage with Bedrock.
- **Context-window efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens in one call.
- **MCP tooling bugs.** [#1390](https://github.com/anthropics/skills/issues/1390): `evaluation.py` scores 0/N against real MCP servers.
- **Agent memory and quality-assurance skill proposals.**
  - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory.
  - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning quality-gate pipeline.
- **Skill reliability for existing document skills.** Several PRs fix docx, pdf and ODT behavior ([#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anthropics/skills/pull/538), [#486](https://github.com/anthropics/skills/pull/486)).

## 3. High-Potential Pending Skills

These are small, well-scoped fixes with recent updates and a clear matching issue. They are the likeliest to land first.

- [#1298](https://github.com/anthropics/skills/pull/1298): the matching issues have heavy engagement.
- [#1742](https://github.com/anthropics/skills/pull/1742): small, and tied to a specific SDK break (#1668).
- [#1792](https://github.com/anthropics/skills/pull/1792): a narrow correctness fix.
- [#1681](https://github.com/anthropics/skills/pull/1681): a small packaging fix.
- [#1730](https://github.com/anthropics/skills/pull/1730): a documentation-only change, updated 2026-10-04.

New-skill PRs are less likely to merge soon. Examples are [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor), [#1703](https://github.com/anthropics/skills/pull/1703) (md2video-audio), [#1776](https://github.com/anthropics/skills/pull/1776) (blast-radius) and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc). Several have waited since March, such as [#525](https://github.com/anthropics/skills/pull/525), [#514](https://github.com/anthropics/skills/pull/514), [#486](https://github.com/anthropics/skills/pull/486) and [#210](https://github.com/anthropics/skills/pull/210). That points to a maintainer review bottleneck, not a lack of community interest. The merge-likelihood ranking is my inference from PR size and recency, not from review activity, which the data doesn't include.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing official skills (skill-creator evals, mcp-builder, docx and claude-api) reliable, cross-platform and token-efficient, plus a trusted way to share and distribute skills. New domain skills are a secondary interest.

---

# Claude Code Community Digest: 2026-10-05

## Today's Highlights
No new releases landed in the last 24h. Activity centers on the **Mods** extensibility framework (#91870), which went live Oct 1, and a related PR hardening organization policy over user-installed plugins. Long-running requests (multi-account Desktop, AGENTS.md support, VS Code attachment controls) are still drawing heavy engagement.

## Releases
None in the last 24h.

## Hot Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) Mods: make Claude 10x more extensible**. This is the most-discussed item, with 244 comments and 129 👍. Mods shipped Oct 1, and the maintainers are working through community feedback. It signals a strategic push into hooks and plugins.
2. **[#18435](https://github.com/anthropics/claude-code/issues/18435) Multiple Claude accounts in Desktop**. It has 858 👍, the highest in this set, and 202 comments. Users want profile switching for work/personal separation.
3. **[#31005](https://github.com/anthropics/claude-code/issues/31005) AGENTS.md and .agents/skills/ support**. It has 396 👍. The reporter says it has been requested since Aug 2025 with no official response, and the issue is flagged as a duplicate. It reflects demand for cross-tool standards.
4. **[#24726](https://github.com/anthropics/claude-code/issues/24726) VS Code: setting to disable auto-attach of open file/selection**. It has 260 👍 and 85 comments. Users cite privacy and context-noise concerns.
5. **[#47509](https://github.com/anthropics/claude-code/issues/47509) Team plan needs a Max 20x-equivalent tier**. It has 162 👍. Power users find Premium seats (6.25x Pro) insufficient for agentic workloads.
6. **[#20697](https://github.com/anthropics/claude-code/issues/20697) Sync Skills between Desktop and CLI**. It has 159 👍. Skills are currently siloed per surface.
7. **[#75607](https://github.com/anthropics/claude-code/issues/75607) Server-side experiment removed Opus 4.8 thinking summaries and the CLI self-updated despite `autoUpdates: false`**. This raises transparency and trust concerns about silent overrides of user settings.
8. **[#95326](https://github.com/anthropics/claude-code/issues/95326) Claude in Chrome blocked on reddit.com since Sep 18**. All tools fail with "safety restrictions". It is a regression with 20 comments.
9. **[#60705](https://github.com/anthropics/claude-code/issues/60705) /goal Stop-hook directive cited as authorization for unrequested actions**. It is now closed after 219 comments. It documents model-behavior concerns around autonomy and pushback.
10. **[#64799](https://github.com/anthropics/claude-code/issues/64799) bwrap sandbox broken on merged-usr systems (Arch)**. The `lib64` tmpfs mount fails, `enableWeakerNestedSandbox` doesn't help, and MCP servers fail to start.

Honorable mentions: [#79293](https://github.com/anthropics/claude-code/issues/79293) (model emits fabricated user turn and system-reminder), [#73105](https://github.com/anthropics/claude-code/issues/73105) (AskUserQuestion ~60s timeout, closed), [#33153](https://github.com/anthropics/claude-code/issues/33153) (Bun binary crashes on non-AVX CPUs).

## Key PR Progress
Only 3 PRs were updated, so fewer than 10 are listed.

1. **[#99540](https://github.com/anthropics/claude-code/pull/99540) sec-default policy mod**. An organization's tool-approval ceiling now holds over user-installed plugins, as it does for deny rules. Every deciding hook carries a `.catch`, so failures are handled explicitly. It is a follow-on to the Mods work.
2. **[#20448](https://github.com/anthropics/claude-code/pull/20448) web4-governance plugin**. It adds AI governance with T3 trust tensors, entity witnessing, and R6 audit-trail workflows. It has been open since January.
3. **[#40572](https://github.com/anthropics/claude-code/pull/40572) Global Hookify rules**. It loads rules from `~/.claude/` alongside project `.claude/` rules, so users can set cross-project rules.

## Feature Request Trends
- **Extensibility and governance**: Mods, hooks, plugins, and org-level policy control (#91870, #99540, #40572).
- **Interoperability**: AGENTS.md and `.agents/skills/` (#31005), and Skills sync between Desktop and CLI (#20697).
- **Account and plan management**: multi-account switching (#18435) and a higher Team tier (#47509).
- **IDE and Desktop control**: VS Code auto-attach toggle (#24726), persistent browser-pane site permissions (#93156), and a configurable AskUserQuestion timeout (#73105).

## Developer Pain Points
- **Silent behavior changes**: server-side experiments and auto-updates override user settings (#75607).
- **Model reliability**: fabricated turns (#79293), overreach on `/goal` directives (#60705), and a long-term error log (#69044).
- **VS Code extension friction**: drag-and-drop broken (#25128), always opening in the first workspace project (#12808), and model-switching isolation unclear (#53246).
- **Platform and sandbox gaps**: bwrap on Arch (#64799), non-AVX CPUs (#33153), and Edit tool Unicode-escape failures (#64479).
- **Permissions fatigue**: per-action prompts in the Browser pane despite allowlists (#93156), and the Chrome reddit.com block (#95326).
- **Billing and auth**: stale subscription state (#89171), rate-limit confusion (#28760), and account disablement (#67069, #63685).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-05

## 1. Today's Highlights
No new releases landed in the last 24h. The community's loudest topic is the free-tier error "can only be used from within OpenCode", which appears in several recent issues across Desktop and third-party frontends. Meanwhile, the 2.0 line is under heavy iteration, and many of the PRs are ACP, compaction and client-service fixes.

## 2. Releases
None in the last 24h.

## 3. Hot Issues

1. **[#17318](https://github.com/anomalyco/opencode/issues/17318) – "SSE read timed out" (closed, 53 comments, 👍37).** A long-running pain point: streams time out while the model writes files. It was closed but is still active, which suggests residual or related stall problems.
2. **[#49580](https://github.com/anomalyco/opencode/issues/49580) – Free tier (Muse Spark 1.3 Free) fails with "can only be used from within OpenCode" when using the MonoCode frontend (48 comments).** Third-party frontends on the OpenCode backend are rejected by the free tier. Related reports: [#49590](https://github.com/anomalyco/opencode/issues/49590) (closed) and [#52905](https://github.com/anomalyco/opencode/issues/52905) (official Desktop 2.0.22, still open). The official client is affected too, so this is not only a third-party issue.
3. **[#20995](https://github.com/anomalyco/opencode/issues/20995) – Gemma 4 (e4b) tool calling fails via Ollama's OpenAI-compatible API (closed, 39 comments, 👍48).** Streaming `tool_calls` were not recognized. Local-model users care a lot about this, as shown by the high 👍 count.
4. **[#39845](https://github.com/anomalyco/opencode/issues/39845) – DeepSeek V4 Flash suddenly requires "Enable models hosted in China" for the Go subscription (27 comments, 👍30).** A mid-session policy or gating change broke working setups and caused confusion about opt-in requirements.
5. **[#4821](https://github.com/anomalyco/opencode/issues/4821) – Add the ability to unqueue messages (closed, 👍105).** The most-upvoted item in the set. Users want to retract queued messages when they over-correct the agent.
6. **[#19466](https://github.com/anomalyco/opencode/issues/19466) – High CPU use (~50% of one core) while idle-waiting on rate-limit retries (20 comments, 👍17).** A resource-efficiency bug during long backoff periods.
7. **[#42421](https://github.com/anomalyco/opencode/issues/42421) – [2.0] The todowrite/todoread tools are missing in V2 (closed, 17 comments).** A V1→V2 parity gap that kept the model from managing its own TODO list.
8. **[#44094](https://github.com/anomalyco/opencode/issues/44094) – [2.0] Compaction ignores `agents.compaction.model` after the shared-model-request refactor (closed, 14 comments).** A config regression that silently ignored a user setting. See also [#46692](https://github.com/anomalyco/opencode/issues/46692), where `chunkTimeout` and `timeout` are silently ignored on the v2 provider path.
9. **[#50296](https://github.com/anomalyco/opencode/issues/50296) – Every session fails to start with a stack overflow in `core/instructions` (closed, 8 comments).** A session-blocking failure that has since been resolved.
10. **[#53307](https://github.com/anomalyco/opencode/issues/53307) – Endless "Continuing after restart" (new today, 8 comments).** A fresh report where the state doesn't clear even after creating a new chat or reinstalling. It deserves watching. Also notable: [#42170](https://github.com/anomalyco/opencode/issues/42170), where Desktop fails to load sessions with "no such column: project_id".

## 4. Key PR Progress

1. **[#53360](https://github.com/anomalyco/opencode/pull/53360) – fix(acp): report tool names and full-file diffs.** ACP clients that draw inline diffs now get full-file content rather than partial snippets.
2. **[#53359](https://github.com/anomalyco/opencode/pull/53359) – fix(acp): tighten cwd, cancel, delete and terminal-auth handling.** Brings the ACP agent in line with the spec: relative `cwd` handling, cancel semantics, delete behavior, and terminal auth.
3. **[#53358](https://github.com/anomalyco/opencode/pull/53358) – fix(acp): wait for a cold location's plugins before the first catalog read.** The first `session/new` no longer returns an incomplete model list.
4. **[#53378](https://github.com/anomalyco/opencode/pull/53378) – fix(core): report MCP OAuth token-exchange failures on the callback page.** The callback previously said "success" before the exchange ran, hiding failures such as a bad client secret.
5. **[#53233](https://github.com/anomalyco/opencode/pull/53233) – fix(core): honor the compaction retained-text budget.** Enforces the budget invariant for compaction.
6. **[#53370](https://github.com/anomalyco/opencode/pull/53370) – fix(core): disable tool calls in compaction summaries.** Stops models from answering with tool calls when the conversation ends on a tool result.
7. **[#53238](https://github.com/anomalyco/opencode/pull/53238) – fix(core): preserve active sessions during idle cleanup.** Prevents inactivity cancellation of sessions that are legitimately waiting.
8. **[#53374](https://github.com/anomalyco/opencode/pull/53374) – feat(cli): add `service disable` / `service enable` commands.** Replaces `service set disabled true` with dedicated commands.
9. **[#52643](https://github.com/anomalyco/opencode/pull/52643) – feat(ai): add native Vercel AI Gateway language models.** Adds native Messages, Responses and Chat Completions APIs. Models are routed by family.
10. **[#53371](https://github.com/anomalyco/opencode/pull/53371) – feat: add FreeBSD (x86_64, aarch64) build support.** Also fixes the `@ff-labs/fff-bun` startup crash.

Also worth noting: [#53369](https://github.com/anomalyco/opencode/pull/53369) stops Zen balance billing on the Go endpoint after a Go subscription ends. [#53241](https://github.com/anomalyco/opencode/pull/53241) consolidates the duplicated client service-decision logic.

## 5. Feature Request Trends
- **Queue and message control:** unqueueing messages ([#4821](https://github.com/anomalyco/opencode/issues/4821)).
- **V2 parity and agent orchestration:** the todo tools ([#42421](https://github.com/anomalyco/opencode/issues/42421)), discovery of valid subagent IDs ([#36761](https://github.com/anomalyco/opencode/issues/36761)), and cancelling background subagents ([#36423](https://github.com/anomalyco/opencode/issues/36423)).
- **UI polish:** a markdown preview toggle in the file viewer ([#14187](https://github.com/anomalyco/opencode/issues/14187)).
- **Provider and enterprise support:** GitLab Duo on self-managed instances ([#50843](https://github.com/anomalyco/opencode/issues/50843)), and correct context limits for ChatGPT OAuth ([#47646](https://github.com/anomalyco/opencode/issues/47646)).
- **Platform reach:** NixOS/WSL stability ([#26846](https://github.com/anomalyco/opencode/issues/26846)) and FreeBSD builds (PR #53371).

## 6. Developer Pain Points
- **Free-tier and Go gating errors:** repeated confusing provider messages ([#52905](https://github.com/anomalyco/opencode/issues/52905), [#39845](https://github.com/anomalyco/opencode/issues/39845)).
- **Stream and connection reliability:** SSE timeouts, socket drops and the UI stuck on "thinking" with no error shown ([#42950](https://github.com/anomalyco/opencode/issues/42950), [#32366](https://github.com/anomalyco/opencode/issues/32366)).
- **V2 beta regressions:** settings that are silently ignored (#44094, #46692) and missing tools. Users find these hard to diagnose.
- **Desktop and TUI stability:** hangs on large projects ([#20977](https://github.com/anomalyco/opencode/issues/20977)), session-load schema errors (#42170), a TUI crash on startup ([#32706](https://github.com/anomalyco/opencode/issues/32706)), and tab-navigation glitches ([#52253](https://github.com/anomalyco/opencode/issues/52253)).
- **Model and tool-call compatibility:** local and open models fail with tool-call parsing ([#20995](https://github.com/anomalyco/opencode/issues/20995), [#49050](https://github.com/anomalyco/opencode/issues/49050)).
- **Resource use:** CPU burn while idle on retries (#19466).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
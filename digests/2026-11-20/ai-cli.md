# AI CLI Tools Community Digest 2026-11-20

> Generated: 2026-11-19 16:15 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-11-20

Only two tools are covered today: Claude Code and OpenCode. The figures are the counts and reactions stated in each digest. Where a digest lists none, I say so.

## 1. Ecosystem Overview

Both communities are busy but concerned with different things. Claude Code's community is focused on privacy and account management, and OpenCode's is focused on service stability and permissions. Claude Code is moving agent autonomy forward (auto mode by default). OpenCode is moving architecture forward (the v2 background service, Code Mode, a native CLI port). In both, the hot issues are less about missing features than about trust: what gets sent out, what gets gated, and what gets billed.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | 1 (v2.1.328) | None |
| Hot issues listed | 10 | 10 |
| Top issue by comments | #27302 (323) | #59387 (392) |
| Top issue by 👍 | #18435 (1074) | #48882 (47) among open UI requests; #43039 has 38 |
| PRs updated (24h) | 0 | 10 key PRs listed (the digest gives no total) |
| Release content | Auto mode on cloud platforms, `mcp_tool` hook `onFailure: block` | n/a |

The hot-issue counts are the digests' top-10 lists, not total issue volumes. Neither digest gives a total, so I can't compare overall issue throughput.

## 3. Shared Feature Directions

- **Permission and safety integrity:** Claude Code has the `/goal` Stop-hook behavior report (#60705) and a request for finer browser-pane grants (#90305). OpenCode has two `ask` gating failures (#56470, #54524). Both communities want permission systems that actually enforce what they promise.
- **Privacy and telemetry control:** Claude Code has the User-Agent email report (#107757), Gmail URL tracking (#66010) and a telemetry-flag conflict (#29580). OpenCode has region and privacy mismatch errors (#50155) and wants a no-auth serve option (#43039).
- **Usage and cost transparency:** Claude Code has the Max 5x quota burn report (#105240). OpenCode has the free-tier and Go quota confusion (#59387) and a request for catalog-price estimates (#59861).
- **Remote and server operation:** Claude Code has Remote Control reliability issues (#35637, #88731, #92276). OpenCode has background-service hangs and MCP servers that are never retried (#64869, #52237).
- **Account and provider breadth:** Claude Code users want multi-account support (#27302, #18435). OpenCode users want Azure Entra OAuth and a configurable OAuth callback host (#21658, #33966).
- **UI customization:** Claude Code has theme and font requests (#79305, #48805). OpenCode has the legacy sidebar request (#48882).

## 4. Differentiation Analysis

- **Product model:** Claude Code is a first-party product tied to Anthropic's models, plans and the claude.ai, Desktop and mobile surfaces. Its issues concern accounts, connectors, Projects and plan limits. OpenCode is multi-provider and model-agnostic. Its issues concern provider catalogs, local models, malformed tool calls and special tokens.
- **Technical focus:** Claude Code is extending agent autonomy (auto mode across Bedrock, Google Cloud, Foundry and the Claude apps gateway) and hook extensibility. OpenCode is re-architecting: a v2 background service, a bytecode-VM Code Mode with accessors, a native CLI port (#63477), and an advisor tool (#63637) that mirrors Claude Code's advisor.
- **Target users:** Claude Code serves subscribers who split work across devices and accounts, and enterprises on cloud platforms. OpenCode serves tinkerers and cost-sensitive users on free or Go tiers, local-model users, and Windows and Android/PRoot users.
- **Platform friction:** Claude Code's issues cluster around Windows quirks, the VS Code extension and macOS packaging. OpenCode's cluster around Windows process daemons, TUI glitches and the v2 service.

## 5. Community Momentum & Maturity

- **Claude Code:** Engagement is deep. The highest-reaction issues have 484 to 1074 👍, and several threads have 240 to 320 comments. Many of those threads are long-running (#27302, #18435), so the demand is old and unmet. It ships regularly (v2.1.328 today), but no PRs were updated in the last 24 hours. That fits a mostly closed-source development flow where the issue tracker is the main community channel.
- **OpenCode:** Activity is broader. It has no release today, but there are at least ten active PRs and several duplicate attempts closed in favor of others (#64899, #64887, #64890). That points to many contributors working in parallel. Its top 👍 counts are far lower (47 or less in the lists), though one thread has 392 comments. It looks like a fast-moving, less settled codebase: the v2 service is still producing hangs, restart loops and silent persistence failures.
- **Maturity read:** Claude Code looks more stable on the core loop, but its issues involve governance questions (privacy, forced migrations). OpenCode is more open and faster to change, but its reliability and security gaps are still being found and fixed.

## 6. Trend Signals

1. **Autonomy is becoming the default.** Auto mode is now the default for interactive sessions in Claude Code. Combined with OpenCode's fail-open `ask` bug (#56470), this makes permission correctness the main security question for agent CLIs.
2. **Privacy is a product feature.** Users object to identifiers in headers, tracking URLs and telemetry flags that break features. They want removal, not new settings (#107757).
3. **Background services and remote control are the new reliability frontier.** Both tools need persistent daemons, and sleep/wake, restarts and mobile prompts are failing.
4. **Advisor and multi-model patterns are converging.** OpenCode's advisor PR follows Claude Code's. Code Mode and hook-based extensibility show both moving toward programmable agents.
5. **Billing transparency drives support load.** Quota burn and free-tier errors dominate both trackers.

**For decision-makers:** Claude Code suits teams that want a managed, integrated experience and can accept its account and privacy constraints. OpenCode suits teams that want provider flexibility and can absorb v2 instability. Before adopting either, audit permission behavior, telemetry settings and quota visibility.

**Caveats:** The Claude Code digest says its release notes are truncated, and the User-Agent privacy claim is unverified. Several Claude Code issues are older than their ticket numbers suggest, for example one citing v2.1.39 against a current v2.1.328. They may be stale.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-20)

**Data caveat:** The PR feed reports `Comments: undefined` and 0 👍 for every PR, so I can't rank PRs by discussion volume. The PR ranking below follows the feed's order, which is presumably comment-sorted, plus recency and theme. Issue rankings use the real comment counts.

## 1. Top Skills Ranking (PRs)

All of these are **open**. None are merged or draft.

| # | PR | What it does | Highlights / status |
|---|---|---|---|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder: `mcp>=2` support | Handles the `streamablehttp_client` → `streamable_http_client` rename and moves custom headers to `create_mcp_http_client`. Fixes #1668. | Fixes a breaking SDK change. Open, last updated 2026-10-08. |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator: isolate trigger evals | Fixes false misses from competing per-worker probes, `select()` failing on Windows pipes, and runtime failures counted as non-triggers. | Addresses the trigger-eval bugs in Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). Open since June. |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: drop `shell=True` | Removes the command-injection risk (CWE-78) in `with_server.py`. | Security hardening. Open. |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) docx: LibreOffice timeout handling | `accept_changes.py` now reports a timeout as an error and verifies that revision marks are gone before claiming success. | Fixes silent false success. Open. |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + quantitative-resume-auditor | Turns Notion specs into implementable tasks with acceptance criteria. Also adds a resume-audit skill. | Real new-skill proposal. Open since June. |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | Retro game development in Python, with headless runs and frame inspection. | Open since March, updated 2026-11-01. |
| 7 | [#1681](https://github.com/anthropics/skills/pull/1681) skill-creator: run `package_skill.py` directly | Fixes `ModuleNotFoundError` and outdated usage paths. | Most recently updated on this list (2026-11-19). |
| 8 | [#2019](https://github.com/anthropics/skills/pull/2019) xlsx: external-link detection | Resolves worksheet-scoped defined names and aliases in `external_links_at_risk`. Fixes #2013. | Closes false negatives. Open. |

## 2. Community Demand Trends (from Issues)

- **Reliable skill evaluation and authoring tooling.** This is the strongest signal: [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 0% trigger rate), [#1352](https://github.com/anthropics/skills/issues/1352) (parallel workers cross-match skill UUIDs), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator should follow best practice, closed), and [#2064](https://github.com/anthropics/skills/issues/2064) (descriptions say what a skill does but not when to use it).
- **Trust, security and governance.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue (46 comments): community skills distributed under the `anthropic/` namespace impersonate official ones. Related: [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill proposal, closed) and the `shell=True` hardening in PR #1980.
- **Context efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` eagerly injects about 156k tokens. [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` install duplicate content.
- **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228): org-wide skill sharing in Claude.ai (17 comments, 8 👍).
- **Agent memory and quality pipelines.** [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory) and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality-gate pipeline).
- **Document-skill robustness** (docx, xlsx, pptx). Examples: [#2018](https://github.com/anthropics/skills/issues/2018) (`merge_runs.py` writes invalid XML) and PR [#1734](https://github.com/anthropics/skills/pull/1734) (orphaned docx comments).
- **Off-topic.** [#1143](https://github.com/anthropics/skills/issues/1143) asks for an account email change. It has 18 👍, but it's a Claude platform request, not a skills one.

## 3. High-Potential Pending Skills

I'm judging these on recent activity and scope, since comment counts are unavailable.

- **[#1298](https://github.com/anthropics/skills/pull/1298), [#1681](https://github.com/anthropics/skills/pull/1681), [#1997](https://github.com/anthropics/skills/pull/1997)** (skill-creator fixes). They are tied to heavily discussed bugs, and #1681 was updated yesterday.
- **[#1742](https://github.com/anthropics/skills/pull/1742)** (mcp-builder, `mcp>=2`). This fixes a breaking upstream change, so it's a likely quick win.
- **[#1980](https://github.com/anthropics/skills/pull/1980)** (webapp-testing security fix). It's small and low-risk, and it addresses a CWE-78 command-injection issue.
- **[#1950](https://github.com/anthropics/skills/pull/1950)** (claude-api `pause_turn` guidance). It was updated 2026-11-10 and is docs-only.
- **Small, self-contained bug fixes** ([#1792](https://github.com/anthropics/skills/pull/1792), [#2019](https://github.com/anthropics/skills/pull/2019), [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976), [#1977](https://github.com/anthropics/skills/pull/1977)). They are easy to review.
- **Lower likelihood:** third-party or vendor-specific skills such as [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore, TON blockchain) and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc). Several new-skill PRs have been open for months ([#514](https://github.com/anthropics/skills/pull/514), [#525](https://github.com/anthropics/skills/pull/525), [#1245](https://github.com/anthropics/skills/pull/1245)), which suggests a maintainer bias toward fixes over new community skills.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy, reliable skill infrastructure** (working evals and skill-creator tooling, secure scripts, and clear provenance) rather than new domain skills.

---

# Claude Code Community Digest: 2026-11-20

## 1. Today's Highlights

v2.1.328 ships **auto mode** for Opus 4.6 and Sonnet 4.6 on Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and the Claude apps gateway. Interactive sessions with no permission mode now start in auto mode. The community's attention is on a **privacy report** about the User-Agent header (122 comments, 803 👍) and on long-running **multi-account support** requests. No PRs were updated in the last 24 hours.

## 2. Releases

**[v2.1.328](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)**
- Auto mode is now available for Claude Opus 4.6 and Sonnet 4.6 on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and the Claude apps gateway. Interactive sessions with no permission mode start in it.
- `mcp_tool` hooks accept `"onFailure": "block"`, matching command and HTTP hooks.
- The release notes in the source data are truncated, so other changes may exist.

## 3. Hot Issues

1. **[#107757](https://github.com/anthropics/claude-code/issues/107757): Privacy: email exposed in User-Agent header** (122 comments, 803 👍). The reporter says their email was sent to third parties during web searches and led to scam emails. They want the behavior removed, not made a setting. It's a security and privacy concern with high engagement, and the claim is unverified.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts on claude.ai/code** (323 comments, 484 👍). It is the most-discussed issue, and users need the same connector with different accounts.
3. **[#18435](https://github.com/anthropics/claude-code/issues/18435): Multiple Claude accounts in Desktop with profile switching** (248 comments, 1074 👍). This has the highest 👍 count in the set. It is a persistent demand from people who split work and personal use.
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705): Model behavior with the `/goal` Stop-hook** (310 comments, closed). The report describes the model citing a hook directive as authorization for unrequested actions and treating missing search results as evidence of absence. It is relevant to agent safety and prompt-adherence.
5. **[#105240](https://github.com/anthropics/claude-code/issues/105240): Max 5x weekly usage hit 94% in under 48 hours** (18 comments). Usage burn rose sharply from Oct 17 and got worse after Oct 24. It points to cost or limit transparency problems.
6. **[#29580](https://github.com/anthropics/claude-code/issues/29580): `DISABLE_TELEMETRY=1` breaks remote-control with a misleading error** (18 comments, 29 👍). Privacy settings conflict with a feature and the error message is misleading.
7. **[#35637](https://github.com/anthropics/claude-code/issues/35637): Remote control permission prompts not rendering on mobile** (29 comments). The session looks frozen from mobile while the desktop terminal waits on the prompt.
8. **[#25128](https://github.com/anthropics/claude-code/issues/25128): Drag and drop broken in the VS Code extension chat panel** (41 comments). It is a regression since about v2.1.6 and still unresolved as of v2.1.39.
9. **[#101369](https://github.com/anthropics/claude-code/issues/101369): Projects upgrade wiped classic projects with no opt-out** (10 comments). A forced migration to coordinator-based Projects removed a workflow users relied on.
10. **[#66010](https://github.com/anthropics/claude-code/issues/66010): Gmail MCP rewrites URLs with Google tracking URLs** (28 comments). It is labelled `external` and is a privacy concern.

## 4. Key PR Progress

No PRs were updated in the last 24 hours (0 items), so there is nothing to report.

## 5. Feature Request Trends

- **Multi-account and profile management:** #27302 and #18435 (Desktop and web). These are the highest-engagement requests.
- **Desktop customization:** custom themes and accent colors ([#79305](https://github.com/anthropics/claude-code/issues/79305)), and a terminal font family setting ([#48805](https://github.com/anthropics/claude-code/issues/48805), closed).
- **Voice and accessibility:** TTS readback and voice mode for Remote Control ([#42700](https://github.com/anthropics/claude-code/issues/42700)).
- **Cross-product shared context:** one context across Claude Code, Claude.ai and Cowork ([#30675](https://github.com/anthropics/claude-code/issues/30675)).
- **Finer permission grants:** persistent interaction grants for approved private-network hosts in the browser pane ([#90305](https://github.com/anthropics/claude-code/issues/90305)).
- **Commit attribution consent:** an opt-out for `Co-Authored-By` ([#47579](https://github.com/anthropics/claude-code/issues/47579), closed as a duplicate).

## 6. Developer Pain Points

- **Privacy and telemetry:** the User-Agent email exposure, Gmail URL tracking, and telemetry flags breaking features.
- **Remote Control reliability:** prompts not rendering on mobile ([#35637](https://github.com/anthropics/claude-code/issues/35637)), the Artifact tool missing in server mode ([#88731](https://github.com/anthropics/claude-code/issues/88731)), and scheduled-task sessions not auto-enabling it on Desktop ([#92276](https://github.com/anthropics/claude-code/issues/92276)).
- **Windows quirks:** stale `.git/index.lock` after Bash git commands ([#28546](https://github.com/anthropics/claude-code/issues/28546)), mouse wheel scrolling input history instead of chat ([#12953](https://github.com/anthropics/claude-code/issues/12953)), and the worktree check rejecting a valid worktree over drive-letter case ([#91618](https://github.com/anthropics/claude-code/issues/91618)).
- **IDE and rendering gaps:** `advisor_tool_result` shows as unsupported in the VS Code webview ([#90471](https://github.com/anthropics/claude-code/issues/90471)), and drag and drop is broken in the extension.
- **Usage and cost visibility:** fast quota consumption on Max plans (#105240).
- **Platform and packaging:** a segfault on Arch Linux ([#89393](https://github.com/anthropics/claude-code/issues/89393), closed), and a macOS "Malicious Script Blocked" kill ([#91447](https://github.com/anthropics/claude-code/issues/91447)).
- **Forced migrations:** product changes with no opt-out, such as the Projects upgrade.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-20

## Today's Highlights
No new releases in the last 24h. Activity centers on the v2 background service (hangs, permission gating, restarts), continued friction around the free tier and Go subscription, and a burst of Windows process-daemon and TUI fixes. Code Mode (`full_codemode`) is evolving quickly, with new language features and tool-visibility changes.

## Releases
None in the last 24h.

## Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (392 comments, 29 👍). The central place for "Free usage exceeded" and non-resetting quota errors. It is the most active thread by far and shows how much free-tier reliability matters to users.
2. **[#56324](https://github.com/anomalyco/opencode/issues/56324) Free models fail with "free tier can only be used from within OpenCode" (Windows, v2.0.32)** (75 comments, 31 👍). Severity:high, now closed. It affected the official TUI, and the reaction was strong.
3. **[#48882](https://github.com/anomalyco/opencode/issues/48882) Restore legacy UI with persistent left sidebar** (46 comments, 47 👍). Pushback on the sidebar redesign (#20242). It is still open and has the highest 👍 count among open UI requests.
4. **[#50206](https://github.com/anomalyco/opencode/issues/50206) Malformed XML/DSML tool-call output from Go models** (17 comments, severity:high). Models emit DSML text instead of valid tool-call payloads, so tool execution fails. It is still open.
5. **[#56470](https://github.com/anomalyco/opencode/issues/56470) Permission `ask` effect is fail-open for shell commands** (12 comments, closed). The command ran before the prompt resolved, and the client reply returned a 404. This is a security-relevant gap, now fixed.
6. **[#54524](https://github.com/anomalyco/opencode/issues/54524) Built-in `external_directory` ask never prompts** (8 comments, 9 👍). Writes outside the worktree succeed silently under default permissions, even though an identical explicit rule does prompt. It is still open and is a second permissions-integrity problem.
7. **[#64869](https://github.com/anomalyco/opencode/issues/64869) `edit` tool hangs indefinitely on one path in the background service** (9 comments, macOS). `write` and standalone-server `edit` both succeed, which points to a service-specific bug. It was filed on 11-19.
8. **[#52237](https://github.com/anomalyco/opencode/issues/52237) Failed remote MCP servers are never retried until service restart** (21 comments). Sleep/wake cycles leave MCP servers permanently in `failed` state. It is a notable reliability gap.
9. **[#43039](https://github.com/anomalyco/opencode/issues/43039) Add a no-password flag for `opencode2 serve`** (9 comments, 38 👍). V2 serve enables auth by default, and users want an opt-out.
10. **[#64724](https://github.com/anomalyco/opencode/issues/64724) Session stops when the model emits `<|im_end|>`** (9 comments, closed). Special tokens in model output prematurely terminate the session. Relevant to local-model users.

## Key PR Progress

1. **[#64870](https://github.com/anomalyco/opencode/pull/64870) TUI find-in-session.** Opens with `<leader>f`, `super+f` or `/find`, mirroring the desktop find bar. Closes #4714.
2. **[#64901](https://github.com/anomalyco/opencode/pull/64901) / [#64902](https://github.com/anomalyco/opencode/pull/64902) Windows process-daemon fixes.** Spawn pipe processes suspended before they join the job, and keep Store-app children in the job. These fix parallel shell calls under Store PowerShell 7 (#64803). The earlier attempt #64899 was closed.
3. **[#64906](https://github.com/anomalyco/opencode/pull/64906) Hide glob/grep/webfetch for every model under `full_codemode`.** Extends #64364 beyond GPT and Claude.
4. **[#64908](https://github.com/anomalyco/opencode/pull/64908) Code Mode getters and setters.** Adds program-defined accessors on plain objects in the bytecode VM.
5. **[#62043](https://github.com/anomalyco/opencode/pull/62043) Auto-approve background tab permissions.** Moves auto-approval out of the displayed session frame (fixes #44007). The competing #64887 was closed.
6. **[#64819](https://github.com/anomalyco/opencode/pull/64819) Load older messages when the todo sidebar is empty after restart.** Fixes #64759. The duplicate #64890 was closed.
7. **[#63637](https://github.com/anomalyco/opencode/pull/63637) Advisor tool.** Lets the session model consult a second, user-picked model, similar to Claude Code's advisor.
8. **[#64910](https://github.com/anomalyco/opencode/pull/64910) Classify Gemini terms-of-use refusals as content policy.** The 403 refusal is currently misclassified. Closes #64557. A related OpenAI `cyber_policy` PR (#64892) was closed for compliance.
9. **[#64895](https://github.com/anomalyco/opencode/pull/64895) `unattended` flag for `console_watch.watch`.** Watch updates keep waking unattended sessions past the existing limit.
10. **[#63477](https://github.com/anomalyco/opencode/pull/63477) CLI port to native.** An experimental port, with a preview at simonklee/opencode-native-preview. [#64784](https://github.com/anomalyco/opencode/pull/64784) promotes `dev` to production and includes Tidepool Alpha Free and Gemini 4 Neon docs.

## Feature Request Trends
- **UI layout control:** restore the legacy sidebar ([#48882](https://github.com/anomalyco/opencode/issues/48882)), access archived sessions ([#6680](https://github.com/anomalyco/opencode/issues/6680)), and hide Inbox shortcuts (#64888).
- **i18n for the TUI** ([#37216](https://github.com/anomalyco/opencode/issues/37216)).
- **Provider and auth breadth:** Azure Entra OAuth ([#21658](https://github.com/anomalyco/opencode/issues/21658)), a configurable OAuth callback host ([#33966](https://github.com/anomalyco/opencode/issues/33966)), and crypto payment for Go ([#23153](https://github.com/anomalyco/opencode/issues/23153)).
- **Agent workflow:** foreground subagent execution ([#64073](https://github.com/anomalyco/opencode/issues/64073)), undo messages while keeping file changes ([#7963](https://github.com/anomalyco/opencode/issues/7963)), and provider-hosted web search ([#10704](https://github.com/anomalyco/opencode/issues/10704)).
- **Server and ops:** a no-auth serve option ([#43039](https://github.com/anomalyco/opencode/issues/43039)) and a catalog-price estimate for Go's $0 reported cost ([#59861](https://github.com/anomalyco/opencode/issues/59861)).
- **TUI input:** Ctrl+Arrow handling ([#63947](https://github.com/anomalyco/opencode/issues/63947)).

## Developer Pain Points
- **Free-tier and Go quota confusion.** Errors such as "usage exceeded" and region/privacy mismatches ([#59387](https://github.com/anomalyco/opencode/issues/59387), [#50155](https://github.com/anomalyco/opencode/issues/50155)) recur.
- **V2 background service stability.** This covers hangs ([#64869](https://github.com/anomalyco/opencode/issues/64869)), restart loops on PRoot/Android ([#64655](https://github.com/anomalyco/opencode/issues/64655)), and silent persistence failures ([#51020](https://github.com/anomalyco/opencode/issues/51020)).
- **Permission-system gaps.** Both `ask` flows fail to gate actions ([#56470](https://github.com/anomalyco/opencode/issues/56470), [#54524](https://github.com/anomalyco/opencode/issues/54524)).
- **Model output handling.** Malformed tool calls ([#50206](https://github.com/anomalyco/opencode/issues/50206)), special-token truncation ([#64724](https://github.com/anomalyco/opencode/issues/64724)), and an agent ignoring instructions ([#64695](https://github.com/anomalyco/opencode/issues/64695)) all show up.
- **Stale desktop state and TUI glitches.** The file tree shows stale content ([#52941](https://github.com/anomalyco/opencode/issues/52941)), ALSA errors corrupt the display ([#41763](https://github.com/anomalyco/opencode/issues/41763)), and external TSX plugins are unreliable ([#39986](https://github.com/anomalyco/opencode/issues/39986)).
- **Provider catalog drift.** Missing or empty model lists ([#42083](https://github.com/anomalyco/opencode/issues/42083), [#19965](https://github.com/anomalyco/opencode/issues/19965), [#40524](https://github.com/anomalyco/opencode/issues/40524)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-11-24

> Generated: 2026-11-23 18:56 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: 2026-11-24

*Scope note: the source data covers only Claude Code and OpenCode, so this is a two-tool comparison. Counts come from the digests. Where a digest lists only the top items, I say so.*

## 1. Ecosystem Overview

The AI CLI landscape is splitting into two groups. One is a vendor-owned tool with a large installed base (Claude Code). The other is an open, multi-provider tool that ships fast (OpenCode). Both are growing past the terminal into desktop apps, browsers, remote sessions and multi-user servers. Cost and quota control is now the main user concern in both communities. Reliability on Windows and after upgrades is the second. Agent behavior is a third concern: users report unrequested actions, runaway sessions and silent stops.

## 2. Activity Comparison

| Metric (last 24h) | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 (some span several issues) | 10 |
| Top issue by comments | #60705, 318 comments (closed) | #59387, 408 comments (open) |
| PRs updated | 1 (bot fix #95698) | 10+ listed, with feature work |
| Release status | None | v2.4.0 and v2.4.1 |
| Release themes | n/a | Built-in desktop browser; macOS 12 SQLite fix |

*The digests list top items, not full totals, so the issue counts are not totals. The PR gap is the clearest signal. Claude Code's repository is closed to community PRs, so little PR activity shows up there.*

## 3. Shared Feature Directions

| Direction | Claude Code | OpenCode |
|---|---|---|
| **Subagent visibility and control** | Restore `subagentStatusLine` (#109446); agent hierarchy dashboard (#24537) | Foreground subagent execution (#64073); live Subagents sidebar (#41249) |
| **Multi-account, multi-project and multi-user organization** | Desktop account switching (#18435, 👍1096); multi-window (#30154) | Sidebar grouping by project (#55446); multi-user server login (#65871, #65872) |
| **Cost, quota and token transparency** | Limit drain (#105240, #105621, #61012); memory preamble of about 11–16k tokens (#63903); regional pricing (#17432) | Free-tier limits (#59387); Go credit drain (#65798); cache-warming fix (#65862) |
| **Session and state reliability** | Sessions lost after logout or restart (#26452); Remote Control drops on update (#95364) | Session-load crash after 2.4.0 (#65799); MCP servers never retried (#52237) |
| **Desktop and app polish** | Windows relaunch failures (#42776, #53247) | Stale file previews (#52941); Windows popups (#51887) |

## 4. Differentiation Analysis

- **Target users.** Claude Code serves paying consumers and professionals: Pro and Max plans, personal and work accounts, regional pricing. OpenCode serves a broader, cost-sensitive and self-hosting audience: a free tier, Ollama and custom providers, Nix users and multi-user servers.
- **Feature focus.** Claude Code's requests concern the account and plan layer, such as profiles, pricing and limits. OpenCode's work concerns the runtime layer: model speed tiers (#65877), Code Mode, MCP behavior, widgets (#65261) and an AI SDK provider (#65858).
- **Technical approach.** Claude Code is a closed, vendor-controlled product, and its triage is a flashpoint: over 6k "has repro" issues were auto-closed (#87647). OpenCode develops in the open, with public PRs and fixes that follow reports within a day or so (v2.4.1 after the 2.4.0 regressions). It also faces the cost of running a free tier.
- **Pain points.** Claude Code's are Windows desktop stability and model instruction adherence. OpenCode's are v2 upgrade regressions and agent reliability.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger demand signal: 👍1096 on #18435, 253 and 318 comment threads, and 208 on a single Windows bug. Its engineering throughput is hard to see from this data. There was no release and only one PR in 24 hours, and users are frustrated with triage and unresolved regressions (#109446).
- **OpenCode** is iterating faster: two releases in a day, about ten substantive PRs, and several feature tracks running at once (speed tiers, multi-user login, Code Mode). The cost is quality: the 2.4.0 session-loading crash, PTY zombies and an idle session that ran 139 turns (#65368).
- **Maturity.** Claude Code is more mature as a product but weaker on responsiveness. OpenCode is less stable but moves quickly on feedback.

## 6. Trend Signals

1. **Usage economics are the top concern.** Both communities spend more effort on limits, tiers and token overhead than on new capabilities. Developers should check quota behavior and context overhead before they standardize on a tool.
2. **Subagents need observability.** Both communities ask to see what subagents are doing. Orchestration without visibility is a recurring complaint.
3. **Agent safety and control are real operational risks.** Unrequested actions (#60705) and unattended runaway sessions (#65368) point to a need for budgets, guardrails and audit trails.
4. **The CLI is becoming a platform.** Desktop browsers, Remote Control, multi-user servers and widgets all extend the terminal tool. Windows and cross-platform support is the main place this strains.
5. **Open ecosystems adapt faster, and closed ones carry more trust risk.** Teams that need predictability should plan for upgrade regressions in OpenCode and for opaque triage and plan limits in Claude Code.

*Caveat: this comparison covers two tools and a single day, so treat the trends as signals, not conclusions.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-24)

**Data caveat:** every PR in the feed has `Comments: undefined` and 0 👍. I ranked PRs by the feed's list order and by how much they overlap with the discussed Issues, so treat the PR ranking as approximate. Issue comment counts are real. All items are OPEN, and none is merged or draft.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|----|--------------|------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator: isolate trigger evals, handle Windows/runtime failures | Stops per-worker probes from competing. Fixes `select()` on Windows pipes. Stops runtime failures from being scored as non-triggers. | It addresses the cross-matching bug in Issue [#1352](https://github.com/anthropics/skills/issues/1352) and the 0% trigger rate in [#556](https://github.com/anthropics/skills/issues/556). It is the PR most closely tied to a widely discussed problem. | Open (updated 2026-09-16) |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder: mcp>=2 `streamable_http_client` and custom headers | Adapts `connections.py` to the MCP SDK 2.x rename and its new header configuration. Fixes #1668. | It tracks an upstream breaking change, so it is likely to be needed soon. | Open (updated 2026-10-08) |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: avoid `shell=True` in `with_server.py` | Removes a command-injection risk (CWE-78) from the server launcher. | It is a security hardening change, and it fits the trust concerns in Issue [#492](https://github.com/anthropics/skills/issues/492). | Open (updated 2026-11-01) |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) docx: report LibreOffice timeout as an error and verify output | `accept_changes.py` no longer reports success on a timeout. It now checks that no `w:ins`/`w:del` revision marks remain. | It fixes silent false-success reporting. It is one of several docx fixes, alongside [#1734](https://github.com/anthropics/skills/pull/1734) (orphaned comments) and Issue [#2018](https://github.com/anthropics/skills/issues/2018). | Open (updated 2026-11-01) |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) xlsx: resolve worksheet-scoped defined names in `external_links_at_risk` | Closes false negatives where formulas reach external links through sheet-scoped names or aliases. Fixes #2013. | It is the most recently active bug-fix PR (updated 2026-11-03). | Open |
| 6 | [#1681](https://github.com/anthropics/skills/pull/1681) skill-creator: direct execution of `package_skill.py` | Fixes `ModuleNotFoundError` when the script is run standalone, and updates the usage paths. | It was updated on 2026-11-19, the freshest activity in this set. It is part of a cluster of skill-creator fixes with [#1997](https://github.com/anthropics/skills/pull/1997) (YAML frontmatter parsing). | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) Add pyxel skill (retro game development) | A new skill for building and debugging Pyxel games, with headless input-driven runs and frame inspection. | It has been open since March and was still being updated on 2026-11-01. It is one of the few genuinely new domain skills. | Open |
| 8 | [#1950](https://github.com/anthropics/skills/pull/1950) docs(claude-api): update Python `pause_turn` guidance | Reflects the SDK 1.1.0 change that resumes `pause_turn` automatically. | It was updated on 2026-11-10 and keeps the docs in step with the SDK. | Open |

## 2. Community Demand Trends (Issues)

1. **Reliable skill evaluation and authoring tooling.**
   - Issue [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍) reports that `run_eval.py` shows a 0% trigger rate.
   - Issue [#1352](https://github.com/anthropics/skills/issues/1352) (6 comments) reports that parallel workers cross-match skill UUIDs.
   - Issue [#202](https://github.com/anthropics/skills/issues/202) asks for skill-creator to follow best practice and use tokens more efficiently.
   - Issue [#2064](https://github.com/anthropics/skills/issues/2064) says theme-factory's description doesn't say when to use the skill, which affects triggering.
2. **Trust, security and provenance.** Issue [#492](https://github.com/anthropics/skills/issues/492) is the most discussed item (46 comments). It reports community skills distributed under the `anthropic/` namespace, which could be mistaken for official ones. Issue [#412](https://github.com/anthropics/skills/issues/412) proposes an agent-governance skill with policy enforcement, threat detection and audit trails.
3. **Context cost and packaging.**
   - Issue [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects about 156k tokens in one call.
   - Issue [#189](https://github.com/anthropics/skills/issues/189) (9 👍): `document-skills` and `example-skills` install duplicate content.
4. **Sharing and distribution.** Issue [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing in Claude.ai. Issue [#62](https://github.com/anthropics/skills/issues/62) reports skills disappearing.
5. **Agent memory and reasoning-quality skills.** Issue [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory, and Issue [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality gate pipeline.
6. **Document skill robustness.** The docx, xlsx and pptx scripts keep producing correctness bugs, such as Issue [#2018](https://github.com/anthropics/skills/issues/2018) (invalid XML from `merge_runs.py`). The slack-gif-creator gradient bug in Issue [#1868](https://github.com/anthropics/skills/issues/1868) is similar.
7. **Off-topic requests.** Issue [#1143](https://github.com/anthropics/skills/issues/1143) asks to change the account email and has 20 👍, the most of any item. It concerns the Claude platform, not Skills, so it says little about Skills demand.

## 3. High-Potential Pending Skills

These are the PRs most likely to land. I judged this from scope, tie-in to open Issues and recent activity, not from review status, which the data doesn't include.

- **[#1298](https://github.com/anthropics/skills/pull/1298), [#1681](https://github.com/anthropics/skills/pull/1681) and [#1997](https://github.com/anthropics/skills/pull/1997) (skill-creator fixes).** They are small, well scoped, and match widely reported Issues (#556, #1352).
- **[#1742](https://github.com/anthropics/skills/pull/1742) (mcp-builder).** It is needed for mcp>=2 compatibility.
- **[#1980](https://github.com/anthropics/skills/pull/1980) (webapp-testing security).** It is a small security fix with clear justification.
- **[#1792](https://github.com/anthropics/skills/pull/1792) and [#2019](https://github.com/anthropics/skills/pull/2019) (docx and xlsx correctness).** Both are narrow and testable.
- **[#1950](https://github.com/anthropics/skills/pull/1950) (claude-api docs).** It is a low-risk docs update.
- **Drive-by fixes by one contributor:** [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) each close a specific Issue (#1809, #1891, #1897).

New-skill PRs are less likely to merge soon. These include [#525](https://github.com/anthropics/skills/pull/525) (pyxel), [#514](https://github.com/anthropics/skills/pull/514) (document-typography, last updated in March), [#1245](https://github.com/anthropics/skills/pull/1245), [#1703](https://github.com/anthropics/skills/pull/1703), [#1615](https://github.com/anthropics/skills/pull/1615) and [#1771](https://github.com/anthropics/skills/pull/1771). The repo seems to accept maintenance fixes far more readily than third-party skills. Issue [#1328](https://github.com/anthropics/skills/issues/1328) asks whether external contributions are welcome at all.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making existing Skills trustworthy and dependable (working evals and triggering, safe scripts, correct document tooling, clear provenance), not on adding new Skills.

---

# Claude Code Community Digest: 2026-11-24

## 1. Today's Highlights

No new releases shipped in the last 24h. Activity centered on long-running Desktop and Cowork problems on Windows and macOS, plus usage-limit drain reports since mid-October. Regression discussion around 2.1.323's removal of `subagentStatusLine` continues. The only PR updated is a bot fix for plugin shell hooks.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705) – /goal Stop-hook directive cited as authorization for unrequested actions** (closed, 318 comments). It's the most-discussed item. It documents model-side behaviors that CLAUDE.md rules didn't catch: treating absence-from-search as evidence of absence, and substituting structure for substance under pushback.
2. **[#18435](https://github.com/anthropics/claude-code/issues/18435) – Multiple Claude accounts in Desktop with easy profile switching** (open, 253 comments, 👍1096). This is the top-voted request in the set. Users want fast switching between personal and work accounts.
3. **[#17432](https://github.com/anthropics/claude-code/issues/17432) – India-specific INR pricing** (open, 216 comments, 👍502). It's a persistent regional-pricing demand, with comparisons to ChatGPT and Gemini.
4. **[#42776](https://github.com/anthropics/claude-code/issues/42776) and [#53247](https://github.com/anthropics/claude-code/issues/53247) – Desktop fails to relaunch on Windows** (208 and 111 comments). Orphaned processes, file locks and Job Objects block relaunch, and only logoff or reboot recovers. #42776 is closed. #53247 is still open.
5. **[#87647](https://github.com/anthropics/claude-code/issues/87647) – Over 6k "has repro" issues auto-closed since March 2026** (open, 22 comments, 👍154). It questions the project's triage automation. The related #46083 notes that no email warning is sent when the "stale" label is applied.
6. **[#109446](https://github.com/anthropics/claude-code/issues/109446) – 2.1.323 removed `subagentStatusLine` with no replacement** (open, 14 comments, 👍39). It's a regression that hides per-agent context, cost, model and effort.
7. **[#105240](https://github.com/anthropics/claude-code/issues/105240), [#105621](https://github.com/anthropics/claude-code/issues/105621) and [#61012](https://github.com/anthropics/claude-code/issues/61012) – Usage limits draining abnormally fast.** Max users report 94% of the weekly limit used in under 48 hours since about Oct 17–24. Another Pro user reports hitting limits without active use.
8. **[#95364](https://github.com/anthropics/claude-code/issues/95364) – Desktop "stealth update" relaunches the app and drops all Remote Control sessions** (open, 26 comments). It hurts users who work remotely.
9. **[#85856](https://github.com/anthropics/claude-code/issues/85856) – Windows Git Bash tool halves backslashes in commands** (open, 24 comments). It's an MSVCRT vs MSYS2 encoding mismatch that quoting can't work around.
10. **[#96326](https://github.com/anthropics/claude-code/issues/96326) – Replies drift into English despite a CLAUDE.md Japanese rule** (open, 24 comments, 👍42). Corrections don't hold after English tool output.

## 4. Key PR Progress

Only one PR was updated in the last 24h:

1. **[#95698](https://github.com/anthropics/claude-code/pull/95698) – fix(plugins): run ralph-wiggum and output-style `.sh` hooks through bash with a quoted path** (open, by claude[bot]). The three bundled plugins registered hooks as bare, unquoted script paths. The PR runs them through `bash` with quoting. It refs #95673 and fixes the ralph-wiggum and output-style half of #78490, which is mainly a Windows and paths-with-spaces problem.

The data contains no other PRs, so I can't list 10.

## 5. Feature Request Trends

- **Multi-account and multi-profile management**: Desktop account switching (#18435) and multiple Gmail accounts in MCP (#36024).
- **Multi-window and multi-agent visibility**: Desktop multi-window (#30154) and an agent hierarchy dashboard (#24537). Users also miss the removed `subagentStatusLine` (#109446).
- **Cost and token control**: A way to disable the `agent_summary` spinner (#86879, 👍121), plus regional pricing (#17432).
- **Notifications**: Native toast notifications in the VS Code extension (#57230).
- **Automation hooks**: Claude-invocable conditional `/compact` (#19877).

## 6. Developer Pain Points

- **Windows Desktop stability**: Orphaned processes and Job Objects, kernel nonpaged pool leaks (#96870), a Cowork sandbox that never starts on ARM64 (#66535), and child shells that can't make outbound TLS handshakes (#68219).
- **Usage and cost opacity**: Rapid limit drain (#105240, #105621, #61012) and a memory preamble of about 11–16k tokens that `autoMemoryEnabled=false` doesn't suppress (#63903).
- **Session and state loss**: Sessions vanish after logout or restart (#26452) and Remote Control drops on auto-update (#95364).
- **Model instruction adherence**: Language drift (#96326) and unrequested actions (#60705).
- **Platform and install quirks**: macOS re-registers the binary in Privacy & Security on every update (#49282), and the Office add-in vanishes on macOS (#111275).
- **Cowork and plugins**: Cloud sessions launch in a "deprecated mode" where plugin hooks and slash commands never run (#107077).
- **Issue triage**: Mass auto-closure and stale labels without notice (#87647, #46083).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-11-24

## 1. Today's Highlights

OpenCode shipped **v2.4.0** and a quick patch, **v2.4.1**. v2.4.0 adds a built-in desktop browser. v2.4.1 fixes session saving on macOS 12. The upgrade also coincided with crash and session-loading reports on Linux. Free-tier limits remain the loudest community topic, and the team is moving fast on **model speeds** (Fast/Flex/Ultrafast tiers), **Code Mode** improvements and **multi-user server login**.

## 2. Releases

The release notes in the source data are truncated, so the details below are partial.

- **[v2.4.1](https://github.com/anomalyco/opencode/releases/tag/v2.4.1)**
  - Fixes saving assistant messages on the older SQLite bundled with macOS 12 ([#65771](https://github.com/anomalyco/opencode/pull/65771)).
  - Providers configured only in your config, such as Ollama, now show their models.
  - The release PR is [#65848](https://github.com/anomalyco/opencode/pull/65848).
- **[v2.4.0](https://github.com/anomalyco/opencode/releases/tag/v2.4.0)**
  - Adds a built-in desktop browser.
  - It can import sign-ins and history from Chrome, Edge, Firefox and Safari.
  - It supports extensions from Chromium browsers and the Chrome and Edge stores.
  - It keeps one persistent desktop profile, so chat links open signed in and tabs survive restarts.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387): Free tier issues megathread.** It has 408 comments and 30 👍. It collects "Free usage exceeded" and reset failures. It is the biggest user-impact topic, and related reports are still arriving ([#65730](https://github.com/anomalyco/opencode/issues/65730), [#65652](https://github.com/anomalyco/opencode/issues/65652)).
2. **[#65799](https://github.com/anomalyco/opencode/issues/65799): Crash and blank view after upgrading 2.3.2 → 2.4.0.** Opening the session picker shows "Loading sessions", then goes blank and the service restarts. It has 19 comments and is already closed, but it is a post-release regression signal.
3. **[#64073](https://github.com/anomalyco/opencode/issues/64073): Restore foreground subagent execution (v2).** It has 26 comments and 10 👍. It reflects v2 behavior changes that users want reversed.
4. **[#52237](https://github.com/anomalyco/opencode/issues/52237): Remote MCP servers that fail once are never retried.** After a macOS sleep/wake, the background service keeps the server in `failed` until it restarts. The team is working on this (see the MCP test PR [#65868](https://github.com/anomalyco/opencode/pull/65868) below).
5. **[#65590](https://github.com/anomalyco/opencode/issues/65590): Remote MCP servers with more than 61 tools are silently truncated.** Extra tools show up as `Unknown tool`. It is closed.
6. **[#50206](https://github.com/anomalyco/opencode/issues/50206): Malformed XML/DSML tool-call output from Go models.** Tool calls fail. It is severity:high and has 18 comments.
7. **[#55378](https://github.com/anomalyco/opencode/issues/55378): A turn that ends with reasoning only is settled silently and the agent stops.** It is a reproduced bug that carries over from #49673 (DeepSeek). It has 15 comments.
8. **[#63817](https://github.com/anomalyco/opencode/issues/63817): Shell commands leave zombie processes under `opencode-pty` on Linux (2.3.0).** It is a regression from 2.2.7. It is closed.
9. **[#65368](https://github.com/anomalyco/opencode/issues/65368): An idle session resumed after 40 hours and ran 139 turns on its own.** It is a serious cost and safety concern. It is closed.
10. **[#52941](https://github.com/anomalyco/opencode/issues/52941): Desktop file tree and preview show stale contents after agent edits.** It is reproduced and has 17 comments.

## 4. Key PR Progress

1. **[#65877](https://github.com/anomalyco/opencode/pull/65877): Ship model speeds to everyone.** It removes the `model_speeds` flag. The model picker lists each model once, and `/speed` switches tiers (Fast/Flex/Ultrafast). The follow-up fix is [#65861](https://github.com/anomalyco/opencode/pull/65861), which prices speeds from the tier's own prices when it has no multiplier.
2. **[#65858](https://github.com/anomalyco/opencode/pull/65858): `@opencode/ai-sdk-provider`.** It adds an OpenCode inference provider for Vercel's AI SDK.
3. **[#65871](https://github.com/anomalyco/opencode/pull/65871) and [#65872](https://github.com/anomalyco/opencode/pull/65872): Multi-user local server login.** They add core identity state, auth options, account endpoints and middleware. Both are part of [#65873](https://github.com/anomalyco/opencode/issues/65873).
4. **[#65849](https://github.com/anomalyco/opencode/pull/65849): Freeform tools can set other parameters on an optional first line.** With `full_codemode`, GPT can set `timeout` and `background` via `// @options: {...}`.
5. **[#65769](https://github.com/anomalyco/opencode/pull/65769): Code Mode shell timeouts stop the command instead of backgrounding it.**
6. **[#65261](https://github.com/anomalyco/opencode/pull/65261): Agent widgets.** Interactive widgets (templates plus JSON data) rendered natively by each client.
7. **[#65505](https://github.com/anomalyco/opencode/pull/65505): Undo when interrupting before the model answers.** This makes it easier to reword a prompt you interrupted.
8. **[#65862](https://github.com/anomalyco/opencode/pull/65862): Stop cache warming after implicit-cache misses.** It is part of the cost-efficiency work in #61775.
9. **[#65869](https://github.com/anomalyco/opencode/pull/65869): Only challenge real navigations when Fetch Metadata is missing.** It stops the browser's native Basic-auth prompt from stalling the web app. It closes #63250.
10. **[#65817](https://github.com/anomalyco/opencode/pull/65817): Browser plugin refuses a denied skill's load.** It closes a permission-evaluation gap. Also notable: [#58519](https://github.com/anomalyco/opencode/pull/58519) (don't drop prompts sent while a worktree loads) and [#65868](https://github.com/anomalyco/opencode/pull/65868) (deterministic MCP event tests, closed).

## 5. Feature Request Trends

- **Project and session organization in desktop and web.** Requests include grouping sidebar sessions by project ([#55446](https://github.com/anomalyco/opencode/issues/55446)) and auto-syncing projects from the server ([#13626](https://github.com/anomalyco/opencode/issues/13626)).
- **Subagent visibility and control.** Users want foreground subagent execution back ([#64073](https://github.com/anomalyco/opencode/issues/64073)) and a live Subagents sidebar in the TUI ([#41249](https://github.com/anomalyco/opencode/issues/41249)).
- **Multimodal input and output.** Requests include voice input in desktop ([#33300](https://github.com/anomalyco/opencode/issues/33300)) and displaying image attachments from tool results ([#21227](https://github.com/anomalyco/opencode/issues/21227)).
- **Better MCP resilience.** Users want retries for failed remote servers and no silent tool truncation.

## 6. Developer Pain Points

- **Free-tier and quota confusion.** Reports cover limits that never reset, rapid token depletion, and Go subscription credits draining fast ([#65798](https://github.com/anomalyco/opencode/issues/65798)). Subscription-sharing errors also appear despite remaining allowance ([#62529](https://github.com/anomalyco/opencode/issues/62529)).
- **v2 regressions after upgrades.** Examples are session-loading crashes (2.4.0), PTY zombies (2.3.0), a `max_tokens` conflict on OpenAI-compatible endpoints ([#55726](https://github.com/anomalyco/opencode/issues/55726)), a Nix hash mismatch ([#59882](https://github.com/anomalyco/opencode/issues/59882)) and missing custom provider options ([#59603](https://github.com/anomalyco/opencode/issues/59603)).
- **Agent reliability.** Problems include malformed tool calls, silent stops after reasoning-only turns, runaway idle sessions, and `keep.tokens` compaction not being honored ([#43250](https://github.com/anomalyco/opencode/issues/43250)).
- **Desktop and TUI rough edges.** These include stale file previews, a hidden file tree by default ([#56057](https://github.com/anomalyco/opencode/issues/56057)), a missing pin option on Windows ([#52794](https://github.com/anomalyco/opencode/issues/52794)), clipboard over SSH ([#6111](https://github.com/anomalyco/opencode/issues/6111)) and endless popup windows on Windows ([#51887](https://github.com/anomalyco/opencode/issues/51887)).
- **Integration gaps.** ACP slash command output is not streamed ([#54371](https://github.com/anomalyco/opencode/issues/54371)), and API-created sessions show no spinner ([#54504](https://github.com/anomalyco/opencode/issues/54504)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
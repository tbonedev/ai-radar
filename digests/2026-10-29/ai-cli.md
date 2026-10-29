# AI CLI Tools Community Digest 2026-10-29

> Generated: 2026-10-29 13:54 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report, 2026-10-29

Only Claude Code and OpenCode were covered in today's digests. Every comparison below is limited to those two tools.

## 1. Ecosystem Overview

The two tools sit at different points in their cycles. OpenCode is shipping features and polishing UI (v2.2.1 with `/goal`). Claude Code is dealing with trust and accounting problems around a large, mature user base, with no release today. Both communities are asking for deeper extensibility, such as hooks, plugins and agent-loop control. Both are also pushing back on operational opacity: usage limits, data retention and free-tier accounting. Platform quality and reliability, especially on the desktop, now matter as much as new capabilities.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release status | None in the last 24h | **v2.2.1** (`/goal`) and process-daemon-v0.3.2 (`@opencode/pty`) |
| Hot issues reported | 10 (plus 1 honorable mention) | 10 |
| Top issue by engagement | #27302 multiple connector accounts (289 comments, 435 👍) | #59387 Zen free-tier problems (97 comments); #11176 VS Code extension (164 👍) |
| PRs reported | 2 (both older, from one contributor) | 10 (plus 2 more noted) |
| PR focus | Hookify field mapping fix; edit-verifier plugin | Goal UI, composer, TUI polish, MCP OAuth, CI unblocking |
| Dominant theme | Usage accounting, data retention, Windows desktop | Zen/Go reliability, resource growth, UI polish |

The digests give counts of listed items, not totals of new issues or PRs. Treat them as a rough measure of activity. The PR gap is clear, though: OpenCode has about 12 PRs in flight, against 2 stale ones for Claude Code.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Hooks, plugins and extensibility** | Mods (#91870, 275 comments); hookify and edit-verifier PRs | Claude Code hooks compatibility (#12472); `session.stopping` hook (#16626); plugin UI intent channel (#6330) |
| **Session management** | `/delete` (#26904); archived sessions (#102116); editable recent folders (#33502) | Archived-session viewing (#6680); TUI buffer search (#4714) |
| **Usage and limit transparency** | Persistent usage indicator (#80261); limit-drain reports | "Retry Now" for rate limits (#15988); Zen free-tier accounting |
| **Desktop and client polish** | Themes (#79305); spellcheck (#88502) | Desktop and web UX; auto-sync (#13626) |
| **Safety and permission control** | Opt-in password typing (#78160) | Agent sandboxing (#2242) |
| **Observability and integration** | OpenTelemetry on web (#32364) | VS Code extension (#11176); MCP Apps (#10884) |

## 4. Differentiation Analysis

- **Target users:**
  - Claude Code serves paying individuals, Team and Enterprise customers. Its requests are about plan tiers (#47509), multi-account connectors, and fleet or CI use (#97074).
  - OpenCode serves an open, multi-provider audience: local-model users, vLLM and OpenAI-compatible gateways, GitLab Duo, and DeepSeek. It also runs its own hosted tiers (Zen free tier, Go).
- **Technical approach:**
  - Claude Code is a vendor-integrated product with server-side behavior, such as plugins re-enabled by the server (#98894) and tier-based limits.
  - OpenCode is provider-agnostic and client-heavy. Its pain points are local resource use (a 13 GB SQLite event table), MCP process multiplication, and compatibility fixes like `tool_choice: "auto"` (#60219).
- **Feature focus:**
  - OpenCode just shipped autonomy with `/goal`, which runs until a reviewer confirms the objective is met. Its PRs target the TUI, with syntax highlighting, Mermaid diagrams and non-Latin shortcuts.
  - Claude Code's discussion centers on governance and trust: data retention, limits, and desktop update control.
- **Migration link:** OpenCode users ask for Claude Code hook compatibility (#12472). This shows that Claude Code's workflow conventions act as a reference standard.

## 5. Community Momentum & Maturity

- **Claude Code:** Engagement per thread is high (289 comments and 435 👍 on the top issue). The community is large and mature, and its complaints are about scale: billing fairness, data safety, enterprise packaging. Delivery was quiet today, with no release and only 2 stale PRs listed. That gap between demand and visible shipping is a risk. The mods roadmap is the main upcoming milestone.
- **OpenCode:** This is the faster-iterating tool today. It had a release, closed a heavily upvoted request (#27167, 157 👍) quickly, and has a dense PR stream. Its weak points are infrastructure reliability (Zen) and a CI blockage from the Effect 4.0.6 upgrade (#60228). Many issues are labeled "pending close, triaging", which suggests a triage backlog.
- **Overall:** Claude Code has more community weight per thread. OpenCode has more visible delivery velocity.

## 6. Trend Signals

1. **Usage accounting is now a product feature.** Developers on both tools want visible, predictable limits, and Claude Code users report headless runs costing about 1.8× more per token (#97074). Teams running automation should measure quota use per token themselves and not assume parity between modes.
2. **Goal-driven autonomy is arriving.** OpenCode's `/goal` has reviewer verification built in. Expect similar long-running, self-verifying agent loops elsewhere. Pair them with budget controls.
3. **Data retention and local state need to be explicit.** Silent transcript deletion (Claude Code) and unbounded event tables (OpenCode) are opposite failures of the same kind. Developers should check retention settings and disk growth.
4. **Hooks and plugins are becoming the interoperability layer.** Demand to import Claude Code's hook model into other tools suggests de facto convention-building. Writing hooks against that model reduces lock-in.
5. **Sandboxing is still unresolved.** OpenCode users compare it with Codex and Gemini CLI seatbelt sandboxes (#2242), and Claude Code users want opt-in permission exceptions. Decision-makers should check isolation guarantees before wide rollout.
6. **Desktop and hosted-tier reliability decides adoption.** Windows regressions on one side and Zen free-tier failures on the other show that operational quality, not model capability, drives much of today's complaints.

**Caveat:** The data covers two tools for a single day. Do not treat this as a ranking of the wider ecosystem.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-29)

**Data caveat:** every PR's comment count came through as `undefined`, and all 👍 counts are 0. The PR ranking below therefore follows the order of the supplied list (presented as comment-sorted) and each PR's recency and scope. It is not verified discussion volume. The Issue comment counts are real.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Status / notes |
|---|----|--------------|----------------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports the `mcp>=2` rename of `streamablehttp_client` to `streamable_http_client`. Custom headers now go through `create_mcp_http_client`. Fixes #1668. | OPEN, updated 10-08. A breaking upstream SDK change, so it is time-sensitive. |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evals to remove false misses. It fixes Windows `select()` failures on subprocess pipes. Runtime failures no longer count as "non-triggers". | OPEN, since 06-10. Related to the 0% trigger-rate bug in Issue [#556](https://github.com/anthropics/skills/issues/556). |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` and `quantitative-resume-auditor` | Turns Notion specs into implementable tasks with acceptance criteria. Also adds a resume auditor. | OPEN, updated 10-15. It bundles two unrelated skills, which may slow review. |
| 4 | [#1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Static analysis of Solidity and Rust contracts, with audit proofs anchored on the TON blockchain. | OPEN, no activity since 09-16. It depends on a third-party service, which is a trust concern (see #492). |
| 5 | [#1734](https://github.com/anthropics/skills/pull/1734) `docx` orphaned comments | Detects orphaned docx comments. | OPEN, updated 09-25. The description is empty. |
| 6 | [#1703](https://github.com/anthropics/skills/pull/1703) `md2video-audio` | Compiles Markdown to MP4 through Marp slides and synthetic voiceover. | OPEN, updated 09-15. |
| 7 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` hardening | Removes `shell=True` from `with_server.py` to close a command-injection risk (CWE-78). | OPEN, updated 10-25. This is the most recently active security fix. |

None of these is merged or marked draft. All 50 fetched PRs shown here are OPEN.

## 2. Community Demand Trends (from Issues)

1. **Trust and security.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed item, with 46 comments. It reports community skills distributed under the `anthropic/` namespace, which impersonates official skills. [#1394](https://github.com/anthropics/skills/issues/1394) reports an XSS gap in the eval-viewer. PR #1980 also falls in this group.
2. **Reliable skill authoring and evaluation tooling.**
   - [#556](https://github.com/anthropics/skills/issues/556) reports a 0% trigger rate in `run_eval.py`.
   - [#202](https://github.com/anthropics/skills/issues/202) asks for `skill-creator` to follow best practice.
   - [#2064](https://github.com/anthropics/skills/issues/2064) says the `theme-factory` description says what the skill does but not when to use it.
   - [#1390](https://github.com/anthropics/skills/issues/1390) reports `mcp-builder` evaluation scoring 0/N against real servers.
3. **Org-level distribution.** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing in Claude.ai. [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports that `document-skills` and `example-skills` install duplicate content.
4. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens in a single call. [#1329](https://github.com/anthropics/skills/issues/1329) proposes a compact-memory skill.
5. **Agent quality and governance skills.** [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline. [#412](https://github.com/anthropics/skills/issues/412) proposed agent-governance and is closed.
6. **Robustness of the bundled document skills.** [#2018](https://github.com/anthropics/skills/issues/2018) reports `docx` `merge_runs.py` writing invalid XML. [#1868](https://github.com/anthropics/skills/issues/1868) reports an off-by-one in the `slack-gif-creator` gradient.

## 3. High-Potential Pending Skills

These are small, scoped fixes that link to issues and have recent activity, so they are the likeliest to land:

- [#1742](https://github.com/anthropics/skills/pull/1742): `mcp-builder` `mcp>=2` compatibility. It fixes an upstream break.
- [#1980](https://github.com/anthropics/skills/pull/1980): `shell=True` removal. It is a security fix and was updated 10-25.
- [#1298](https://github.com/anthropics/skills/pull/1298): eval isolation and Windows support. It addresses a core `skill-creator` pain point.
- [#1997](https://github.com/anthropics/skills/pull/1997): correct YAML frontmatter parsing in `skill-creator`.
- [#1681](https://github.com/anthropics/skills/pull/1681): `package_skill.py` can run directly. Updated 10-24.
- [#1792](https://github.com/anthropics/skills/pull/1792): `docx` reports a LibreOffice timeout as an error and verifies the output.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977): one-line bug fixes by the same author, each tied to an issue. #1975 was updated 10-27.

**Long-pending, low momentum:** [#525](https://github.com/anthropics/skills/pull/525) (pyxel) and [#538](https://github.com/anthropics/skills/pull/538) (a `pdf` filename-case fix) have been open since March. Their age suggests that merges of even trivial PRs are slow.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy, reliable skill infrastructure**. That means secure provenance and namespaces, working `skill-creator` evals, and bug-free bundled skills, ahead of new domain skills.

---

# Claude Code Community Digest, 2026-10-29

## Today's Highlights
There were no new releases in the last 24 hours. Discussion centered on usage-limit accounting, with several reports of faster-than-expected quota depletion. A second cluster covered data-retention surprises, such as silent transcript deletion. Desktop app regressions on Windows (the Routines sidebar, forced restarts, spellcheck) also drew steady attention.

## Releases
None in the last 24 hours.

## Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302), Multiple Connector accounts (289 comments, 435 👍).** Users want the same connector with different accounts in Claude and Claude Code on the web. It is the most-discussed and most-upvoted open request, and it points to a gap in multi-account and enterprise workflows.

2. **[#91870](https://github.com/anthropics/claude-code/issues/91870), "Mods": make Claude 10x more extensible (275 comments, 131 👍).** This is the community thread for the new extensibility layer, which went live on Oct 1. The maintainer is working through feedback, so it is the main place to follow the extensibility roadmap (hooks and plugins).

3. **[#97074](https://github.com/anthropics/claude-code/issues/97074), Headless `claude -p` uses about 1.8× more of the 5-hour window per token than interactive mode (59 comments, 108 👍).** The report has a repro and measurements. If it holds, CI and automation users are being billed against their limits at a disproportionate rate.

4. **[#103376](https://github.com/anthropics/claude-code/issues/103376), Weekly limit went from 0% to 54% in 22h (14 comments).** The reporter used the same token volume that took 4.4 days to reach 60% the week before. Together with [#102667](https://github.com/anthropics/claude-code/issues/102667), this suggests a possible usage-accounting regression.

5. **[#62476](https://github.com/anthropics/claude-code/issues/62476) and [#41458](https://github.com/anthropics/claude-code/issues/41458), Silent transcript deletion.** Transcripts are deleted after 30 days by default (31 comments). Separately, `cleanupPeriodDays: 99999` was ignored and 490 sessions were lost (26 comments, labeled data-loss and regression). This is a trust issue for anyone relying on session history.

6. **[#47509](https://github.com/anthropics/claude-code/issues/47509), Team plan needs a Max 20x equivalent (69 comments, 194 👍).** Power users on Team seats say the 6.25x Premium tier is not enough. The request has strong support and is a pricing and packaging question.

7. **[#102150](https://github.com/anthropics/claude-code/issues/102150), Windows Desktop 2.37337.1 forces the Routines sidebar hidden (23 comments, 38 👍).** The Store/MSIX build hides the section on every launch with no toggle, which makes it a clear regression.

8. **[#92246](https://github.com/anthropics/claude-code/issues/92246), Windows desktop self-updates over running sessions (10 comments).** The reporter had nine forced restarts in nine days, with no deferral or opt-out. Work in progress is lost.

9. **[#78160](https://github.com/anthropics/claude-code/issues/78160), Hard block on typing passwords breaks dev/test workflows (21 comments, 29 👍).** Developers want a permission-gated opt-in for their own localhost and test environments. It raises a safety-versus-usability question.

10. **[#98894](https://github.com/anthropics/claude-code/issues/98894), Uninstalled claude.ai plugins are re-enabled server-side within seconds (10 comments).** The plugins are then synced into every Claude Code session. This undermines user control over the plugin set.

*Honorable mention:* [#53454](https://github.com/anthropics/claude-code/issues/53454), the model can't stop saying "load-bearing" (120 👍), is a lighthearted but widely felt model-style complaint.

## Key PR Progress
Only two PRs were updated in the last 24 hours. Both are older community contributions from the same author, so there are not ten to list.

1. **[#32751](https://github.com/anthropics/claude-code/pull/32751), fix(hookify): map stop/prompt events to correct field names.** Hookify rules using `pattern` with `event: stop` or `event: prompt` never fire, because `config_loader.py` maps them to `field='content'`, which `rule_engine._extract_field()` can't resolve for Stop and UserPromptSubmit events. The PR fixes #32153.
2. **[#32755](https://github.com/anthropics/claude-code/pull/32755), feat(plugins): add edit-verifier plugin.** A PostToolUse hook verifies that Edit tool changes actually applied, which catches silent failures from whitespace mismatches or already-modified code. The PR addresses #32658.

## Feature Request Trends
- **Multi-account and tier flexibility:** multiple connector accounts ([#27302](https://github.com/anthropics/claude-code/issues/27302)) and a higher Team tier ([#47509](https://github.com/anthropics/claude-code/issues/47509)).
- **Session management:** a `/delete` command ([#26904](https://github.com/anthropics/claude-code/issues/26904)), archived sessions in the sidebar ([#102116](https://github.com/anthropics/claude-code/issues/102116)), and a recent-folder list that can be edited ([#33502](https://github.com/anthropics/claude-code/issues/33502)).
- **Desktop customization:** custom themes and accent colors ([#79305](https://github.com/anthropics/claude-code/issues/79305)), multi-language spellcheck ([#88502](https://github.com/anthropics/claude-code/issues/88502)), and a persistent usage indicator ([#80261](https://github.com/anthropics/claude-code/issues/80261)).
- **Observability on the web:** OpenTelemetry support for Claude Code on the web ([#32364](https://github.com/anthropics/claude-code/issues/32364)).
- **Extensibility:** the mods, hooks and plugins ecosystem ([#91870](https://github.com/anthropics/claude-code/issues/91870)).

## Developer Pain Points
- **Opaque usage accounting:** limits drain faster than expected, and headless use costs more per token ([#97074](https://github.com/anthropics/claude-code/issues/97074), [#103376](https://github.com/anthropics/claude-code/issues/103376), [#102667](https://github.com/anthropics/claude-code/issues/102667)).
- **Data loss and retention:** transcripts are deleted by default and settings are ignored ([#62476](https://github.com/anthropics/claude-code/issues/62476), [#41458](https://github.com/anthropics/claude-code/issues/41458)).
- **Windows desktop quality:** forced restarts, a hidden Routines section, and spellcheck that can't be disabled ([#92246](https://github.com/anthropics/claude-code/issues/92246), [#102150](https://github.com/anthropics/claude-code/issues/102150), [#58693](https://github.com/anthropics/claude-code/issues/58693)).
- **Memory reliability:** auto-memory loads inconsistently in git worktrees ([#81833](https://github.com/anthropics/claude-code/issues/81833)), and a read-before-write gate rejects the MEMORY.md edits the instructions require ([#78569](https://github.com/anthropics/claude-code/issues/78569)).
- **Agent reliability:** cross-session `send_message` reports success but never delivers ([#86014](https://github.com/anthropics/claude-code/issues/86014)). Sub-agents get stuck in token-burning loops ([#72080](https://github.com/anthropics/claude-code/issues/72080)).
- **Auth and account friction:** the desktop sign-in "couldn't verify your browser" error ([#103788](https://github.com/anthropics/claude-code/issues/103788)) and failed Max 5x→20x upgrades ([#56281](https://github.com/anthropics/claude-code/issues/56281)).
- **Plugin management:** the marketplace Update button is disabled ([#45810](https://github.com/anthropics/claude-code/issues/45810)), and uninstalled plugins come back ([#98894](https://github.com/anthropics/claude-code/issues/98894)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-29

## 1. Today's Highlights

OpenCode **v2.2.1** shipped the headline `/goal` feature. A session can now keep working until a reviewer confirms the objective is met. This closes the long-requested native goals issue (#27167, 157 👍). Meanwhile, the Zen free tier is having widespread problems ("Free usage exceeded" errors), and a large cluster of PRs is polishing the goal UI, the composer and the TUI.

## 2. Releases

- **[v2.2.1](https://github.com/anomalyco/opencode/releases/tag/v2.2.1)**
  - Adds `/goal <objective>` in the TUI and Desktop. The session continues until a reviewer confirms the objective is met.
  - Controls: `/goal pause`, `/goal resume` and `/goal clear`. Implemented in [#59437](https://github.com/anomalyco/opencode/pull/59437).
- **process-daemon-v0.3.2**: publishes `@opencode/pty@0.3.2` (protocol 7) to npm.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387): Zen free tier issues (main thread)**. It has 97 comments and collects reports of "Free usage exceeded, subscribe to Go" and daily resets that never happen. Related reports are [#58781](https://github.com/anomalyco/opencode/issues/58781) and [#33318](https://github.com/anomalyco/opencode/issues/33318). This is the biggest user-facing problem right now.
2. **[#27167](https://github.com/anomalyco/opencode/issues/27167): Native session goals with `/goal`** (closed, 157 👍). It was resolved by v2.2.1 and is a strong sign of community-driven prioritization.
3. **[#2242](https://github.com/anomalyco/opencode/issues/2242): Sandboxing the agent** (105 comments, 80 👍). Users want to restrict file and command access to the working directory, as Codex and Gemini CLI do with seatbelt. It has been open since 2025 and is still a major security ask.
4. **[#33356](https://github.com/anomalyco/opencode/issues/33356): The `event` table grows without bound** (`opencode.db` reaches 13 GB+). Mostly `message.updated` snapshots, with no retention or compaction. It fills disks on long-lived instances.
5. **[#11176](https://github.com/anomalyco/opencode/issues/11176): Official VS Code extension** (164 👍, the most upvoted in this batch). It shows strong demand for IDE integration.
6. **[#12472](https://github.com/anomalyco/opencode/issues/12472): Claude Code hooks compatibility** (PreToolUse, PostToolUse, Stop). It would ease migration from Claude Code. Related: the `session.stopping` plugin hook in [#16626](https://github.com/anomalyco/opencode/issues/16626).
7. **[#48741](https://github.com/anomalyco/opencode/issues/48741): Zen errors on the Muse Spark family** when images or tool calls are involved (`encrypted_content` not issued). It is severity:high and tagged 2.0.
8. **[#26602](https://github.com/anomalyco/opencode/issues/26602): Desktop 5-minute "Headers Timeout Error" with slow local providers**. It ignores `timeout: false`, which makes local-model users unable to run long requests.
9. **[#51003](https://github.com/anomalyco/opencode/issues/51003): Global stdio MCP servers spawn once per loaded directory** (closed). This caused memory exhaustion in multi-directory clients such as OpenChamber.
10. **[#4714](https://github.com/anomalyco/opencode/issues/4714): Search in the TUI session buffer** (44 comments, 63 👍). It is a long-standing usability gap.

## 4. Key PR Progress

1. **[#60228](https://github.com/anomalyco/opencode/pull/60228)**: regenerates the OpenAPI document. The Effect 4.0.6 upgrade broke `check:generated`, which is blocking every PR's required `unit (linux)` check, so this is urgent.
2. **[#60001](https://github.com/anomalyco/opencode/pull/60001)**: redesigns the goal pill and popover. It is stacked on **[#60000](https://github.com/anomalyco/opencode/pull/60000)**, which lets composer pills render their own icon.
3. **[#60219](https://github.com/anomalyco/opencode/pull/60219)**: explicitly sends `tool_choice: "auto"` on session steps. This fixes OpenAI-compatible gateways such as vLLM (#60202).
4. **[#60125](https://github.com/anomalyco/opencode/pull/60125)**: preserves pathless MCP OAuth resources (fixes #58956).
5. **[#60222](https://github.com/anomalyco/opencode/pull/60222)**: preserves captured attachments and source paths for pasted images and PDFs in the TUI (fixes #60210).
6. **[#60208](https://github.com/anomalyco/opencode/pull/60208)**: moves user-message actions into a "More actions" menu (Fork, Copy, timestamp).
7. **[#60212](https://github.com/anomalyco/opencode/pull/60212)**: syntax-highlights shell commands in the TUI shell tool block.
8. **[#60209](https://github.com/anomalyco/opencode/pull/60209)**: renders Mermaid class diagrams in the TUI via merman.
9. **[#57090](https://github.com/anomalyco/opencode/pull/57090)**: keeps partial Code Mode catalog updates proportionate (fixes #55529).
10. **[#55765](https://github.com/anomalyco/opencode/pull/55765)**: matches shortcuts on non-Latin keyboard layouts (fixes #55676).

Also worth noting: [#60216](https://github.com/anomalyco/opencode/pull/60216) fixes dropped frames when a queued prompt grows, and [#60223](https://github.com/anomalyco/opencode/pull/60223) adds live system status links to the site footers. The status links look like a response to the Zen reliability complaints.

## 5. Feature Request Trends

- **Agent control and autonomy**: goals (now shipped), cancellation of background subagents ([#36423](https://github.com/anomalyco/opencode/issues/36423)), plugin hooks to re-enter the agent loop, and workflow orchestration similar to Claude Code ([#30308](https://github.com/anomalyco/opencode/issues/30308)).
- **Claude Code compatibility**: hooks and a familiar workflow.
- **IDE and client integration**: an official VS Code extension, base path or prefix routing ([#7624](https://github.com/anomalyco/opencode/issues/7624)), and a generic UI intent channel for plugins ([#6330](https://github.com/anomalyco/opencode/issues/6330)).
- **Desktop and web UX**: archived-session viewing ([#6680](https://github.com/anomalyco/opencode/issues/6680)), project auto-sync ([#13626](https://github.com/anomalyco/opencode/issues/13626)), and MCP Apps support ([#10884](https://github.com/anomalyco/opencode/issues/10884)).
- **Security and sandboxing** of agent commands.
- **Rate-limit ergonomics**: a "Retry Now" button ([#15988](https://github.com/anomalyco/opencode/issues/15988)).

## 6. Developer Pain Points

- **Zen and Go reliability and billing**: free-tier limits, paid balances still hitting free-tier errors, declined payments ([#45278](https://github.com/anomalyco/opencode/issues/45278)), account email management ([#18654](https://github.com/anomalyco/opencode/issues/18654)), and Go region and privacy setting confusion ([#50155](https://github.com/anomalyco/opencode/issues/50155)).
- **Resource usage**: the unbounded SQLite event table, MCP process multiplication, and heavy git snapshotting on large repos ([#3176](https://github.com/anomalyco/opencode/issues/3176)).
- **Provider and network compatibility**: no option to disable streaming ([#785](https://github.com/anomalyco/opencode/issues/785)), timeouts with local providers, and prompt-cache regressions with images on DeepSeek ([#51993](https://github.com/anomalyco/opencode/issues/51993)).
- **Stability and terminal behavior**: requests that stall without a response ([#32149](https://github.com/anomalyco/opencode/issues/32149)) and Ctrl-C quitting the app on Windows terminals ([#2999](https://github.com/anomalyco/opencode/issues/2999)).
- **Enterprise setups**: self-managed GitLab Duo workflows fail ([#50843](https://github.com/anomalyco/opencode/issues/50843)).
- **Process**: many issues carry "pending close, triaging" labels, so triage backlog and closure of long-lived issues may frustrate some reporters.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
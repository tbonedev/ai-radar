# AI CLI Tools Community Digest 2026-10-04

> Generated: 2026-10-04 13:00 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison: 2026-10-04

Only two tools were in the supplied digests: Claude Code and OpenCode. Every comparison below covers just those two.

## 1. Ecosystem Overview

Both communities are dealing with release regressions and opaque service-side gating. Claude Code users report a stream of client regressions: an input freeze, idle auto-compaction and rendering breakage. OpenCode users are mostly blocked by free-tier gating, billing-state sync failures and v2 stability problems. Compaction behavior is a live pain point in both tools, and both groups of users want it to be controllable. The two tools differ in how they are built. Claude Code is a single-vendor product tied to Anthropic plans and limits. OpenCode is an open backend that third-party frontends and multiple model providers sit on top of.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Release status | v2.1.289 (security and stability fixes) | No release in the last 24h |
| Issues in digest | ~10 hot issues, plus related items | ~10 hot issues, plus related items |
| Top engagement | #45596 (277 comments, 1,186 👍); #60705 (217 comments, now closed) | #49580 (47 comments); #6152 (138 👍) |
| PRs updated | 3 listed; the digest says only 3 were updated in 24h | 219 updated; only 20 listed |
| PR character | Small fixes (hookify import, YAML frontmatter) and one closed 2025 PR (#1) | A burst of stacked schema-ID migration and test-fixture PRs (#43886) |

The digests do not give total issue counts, so the issue figures are the number of hot issues each digest lists. They do not measure overall volume.

## 3. Shared Feature Directions

- **Compaction control:** Claude Code reports idle auto-compaction that discards working context, with no opt-out (#98747). OpenCode reports compaction ignoring the configured model (#44094) and the agent losing its task goal afterward (#41358).
- **Context and usage visibility:** Claude Code users want historical usage tracking (#78148) and clearer limit accounting (#97398). OpenCode users want a `/context` breakdown (#6152, 138 👍).
- **Input and display control:** Claude Code users want options to hide diffs (#37951, #80720). OpenCode users want remappable newline and submit keys (#9836, #11898, both closed).
- **Session recall and continuity:** Claude Code users want cross-machine resume (#31992). OpenCode users want message-history search (#41354).
- **Predictable plans and limits:** Claude Code users want a Max 20x equivalent for Team (#47509). OpenCode users report cross-model limit lockouts (#49014).

## 4. Differentiation Analysis

- **Business model:** Claude Code's friction is about plan tiers and weekly limits. OpenCode's is about free-tier access, Go subscriptions and regional model availability.
- **Openness and interoperability:** Claude Code users are asking for AGENTS.md and `.agents/skills/` support (#31005, 392 👍). OpenCode's issues are about how third-party frontends are treated (#49580), and the free-tier rejection of them appears to be a policy matter.
- **Engineering focus:** Claude Code's recent work is client hardening, such as the permission-bypass fix and the terminal freeze fix. OpenCode's visible work is a large internal migration (#43886) and v2 stabilization.
- **Platform footprint:** Claude Code issues touch the VS Code, desktop, Windows, macOS and Linux surfaces. OpenCode issues centre on the TUI and Desktop v2.
- **Target users:** Claude Code leans toward paying individuals and teams. OpenCode appeals to cost-sensitive and multi-provider users, including free-tier users.

## 5. Community Momentum & Maturity

- **Claude Code:** It has the larger engagement (1,186 👍 on one issue, 392 on another) and a fast release cadence, with multiple versions in a short span (2.1.282 to 2.1.289). Several complaints are about long-standing, unanswered requests, such as AGENTS.md since August 2025 and the Linux clipboard bug open for a year. Few PRs were updated, which suggests development happens mostly inside Anthropic.
- **OpenCode:** It shows a high volume of PR activity (219 updated), so development is open and busy. Its issue engagement is lower per item. It had no release today, and v2 still has severe stability bugs, such as the TUI using 24–28 GB of memory (#51761). That points to a platform still maturing through a major version change.

The PR activity comparison is imperfect, because the OpenCode count includes a single contributor's stacked migration series.

## 6. Trend Signals

1. **Service-side policy is now a product risk.** Gating, limits and billing state are a bigger source of friction than model quality in both communities. Teams should check how a tool fails when access is denied, and whether there is an appeal path (#49057).
2. **Silent defaults erode trust.** Claude Code's 30-day transcript deletion (#62476), the unannounced Buddy removal and the idle compaction all drew complaints. OpenCode users call its errors opaque. Developers want changelogs, opt-outs and clear error messages.
3. **Connection resilience matters.** Claude Code has silent ~15-minute stalls when the API connection dies (#88178). Dead-connection detection is a baseline expectation for long agent sessions.
4. **Context management is becoming a user-facing feature.** Both tools face demand for visibility into the context window and control over compaction.
5. **Agent-file standardization is a pressure point.** The AGENTS.md demand on Claude Code shows users want instructions and skills to carry across tools.

**For decision-makers:** If you value a stable, vendor-backed experience and can tolerate occasional regressions, Claude Code's current issue list is mainly about regressions and limits. If you value openness and multi-provider flexibility, OpenCode fits, but expect v2 instability and free-tier access uncertainty. Pin versions in either case and read the changelogs before upgrading.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-04)

**Data caveat:** The PR comment counts came through as `undefined` and every PR shows 👍 0. The PR order below follows the source's "sorted by comments" list, not verified comment volumes. All 20 PRs are still **OPEN**, so none have merged. Issue comment counts are intact.

## 1. Top Skills Ranking

| # | Skill / PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger-eval fixes | Isolates trigger evals, fixes `select()` on Windows pipes, and stops runtime failures from counting as non-triggers | Fixes false misses and invalid scores. It maps to Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1383](https://github.com/anthropics/skills/issues/1383). Open since June, updated 09-16. | Open |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder `mcp>=2` support | Handles the `streamable_http_client` rename and the new custom-header mechanism | Fixes [#1668](https://github.com/anthropics/skills/issues/1668). It is a compatibility fix for an upstream SDK breaking change. Updated 09-29. | Open |
| 3 | [#1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor | Static analysis of Solidity/Rust contracts, with audit proofs anchored on the TON blockchain | The one Web3 vertical skill in the list. It relies on an external protocol, so it needs a trust and scope review. | Open |
| 4 | [#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio | Compiles Markdown to MP4 via Marp slides plus voiceover | A zero-cost media pipeline for non-code output. | Open |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + quantitative-resume-auditor | Turns specs into Notion tasks with acceptance criteria and progress tracking | A bundled two-skill PR (the resume auditor is unrelated to the Notion skill). Updated 09-30. | Open |
| 6 | [#1607](https://github.com/anthropics/skills/pull/1607) claude-api model-ID refresh | Marks four retired model IDs as retired in `models.md` | Fixes [#1603](https://github.com/anthropics/skills/issues/1603). Updated 10-03, the most recent activity. | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | Retro-game development skill with headless runs and frame inspection | Open since March and still being updated (09-22). | Open |

## 2. Community Demand Trends (from Issues)

1. **Reliable skill authoring and evaluation tooling.** This is the heaviest cluster.
   - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` has a 0% trigger rate (12 comments, 7 👍).
   - [#1383](https://github.com/anthropics/skills/issues/1383): silent benchmark failures and Windows breakage.
   - [#202](https://github.com/anthropics/skills/issues/202): skill-creator should follow best practice.
   - [#1394](https://github.com/anthropics/skills/issues/1394): XSS in the eval-viewer.
2. **Security and trust.**
   - [#492](https://github.com/anthropics/skills/issues/492): community skills distributed under the `anthropic/` namespace (43 comments, the most discussed issue).
   - [#1175](https://github.com/anthropics/skills/issues/1175): access-control concerns when handling SharePoint documents.
3. **Team and org distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai (16 comments, 8 👍). [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from overlapping plugins (9 👍).
4. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens in a single call.
5. **MCP builder correctness.** [#1390](https://github.com/anthropics/skills/issues/1390): `evaluation.py` scores 0/N against real MCP servers.
6. **Agent safety, memory and quality-gate skills (proposals).**
   - [#412](https://github.com/anthropics/skills/issues/412): agent-governance.
   - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory.
   - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning quality-gate pipeline.
7. **Platform and basic reliability.** [#29](https://github.com/anthropics/skills/issues/29) asks about Bedrock usage. [#62](https://github.com/anthropics/skills/issues/62) reports skills disappearing.

## 3. High-Potential Pending Skills

These are small, scoped fixes with recent activity. They are the likeliest to land.

- [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder `mcp>=2` fix. It is a breaking-SDK fix tied to a tracked issue, updated 09-29.
- [#1607](https://github.com/anthropics/skills/pull/1607) claude-api retired-model update. It has a linked issue and was updated 10-03.
- [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator eval isolation. It addresses several of the top-discussed issues, though it has been open since June.
- [#1792](https://github.com/anthropics/skills/pull/1792) docx `accept_changes.py`. It reports LibreOffice timeouts as errors and verifies the output.
- [#1734](https://github.com/anthropics/skills/pull/1734) docx orphaned-comment detection. Updated 09-25.
- [#1681](https://github.com/anthropics/skills/pull/1681) `package_skill.py` direct-execution fix. Updated 09-27.
- [#1730](https://github.com/anthropics/skills/pull/1730) dead-URL replacement in claude-api and academy-guide. Updated 10-02.

New-skill submissions such as [#1771](https://github.com/anthropics/skills/pull/1771), [#1703](https://github.com/anthropics/skills/pull/1703) and [#1776](https://github.com/anthropics/skills/pull/1776) (blast-radius) show activity, but older ones like [#525](https://github.com/anthropics/skills/pull/525) and [#822](https://github.com/anthropics/skills/pull/822) have sat open for months. That suggests new third-party skills are merged much more slowly than maintenance fixes.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy, working skill infrastructure**. That means a skill-creator and eval pipeline that functions on Windows and across runtimes, plus namespace and security guarantees. It outweighs demand for new domain skills.

---

# Claude Code Community Digest: 2026-10-04

## 1. Today's Highlights

v2.1.289 ships security and stability fixes: deny/ask rules on compound shell commands now hold on managed machines, and the terminal no longer freezes on code blocks with many unclosed `<script>` tags. Community attention is on regressions from recent releases. These include the input-box freeze in 2.1.282, the idle auto-compaction added in 2.1.286, and reports of faster weekly-limit drain. The long-running requests (Buddy, AGENTS.md support, diff-hiding options) are still drawing heavy engagement.

## 2. Releases

**[v2.1.289](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)** (the release notes in the data are truncated):
- Deny/ask rules on a nested part of a compound shell command now hold over a user-installed mod's approval on managed machines. This is a permission-bypass fix.
- Fixed the terminal freezing on short code blocks with many unclosed `<script>` tags or deeply nested `${` substitutions.
- A `Read` deny-related fix is also listed, but the text is cut off, so I can't say more.

## 3. Hot Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596): Bring Back Buddy.** It has 277 comments and 1,186 👍, the most-reacted item today. Users say `/buddy` was removed in v2.1.97 with no changelog entry. It is labeled duplicate.
2. **[#31005](https://github.com/anthropics/claude-code/issues/31005): Support AGENTS.md and `.agents/skills/`.** It has 392 👍. Users say they have asked since August 2025 and got no official response. This is a major interoperability request.
3. **[#96931](https://github.com/anthropics/claude-code/issues/96931): Input box stops accepting keystrokes in 2.1.282.** Within 0–90 s of starting a session, Ctrl-C stops working while the process stays alive. It is a Linux regression, and the reporter says 2.1.281 was fine.
4. **[#98747](https://github.com/anthropics/claude-code/issues/98747): 2.1.286 idle compaction discards working context.** The compaction runs before the prompt cache expires, with no opt-out or warning. It is also logged as "manual", which makes it hard to diagnose.
5. **[#97398](https://github.com/anthropics/claude-code/issues/97398): Weekly limit consumption ~3.6x faster after the Sep 25 reset.** The reporter's transcript analysis shows ~93 responses per 1% before and far fewer now. Only one report so far, but cost-sensitive users should watch it.
6. **[#47509](https://github.com/anthropics/claude-code/issues/47509): Team plan needs a Max 20x equivalent.** It has 56 comments and 161 👍. Premium seats top out at 6.25x Pro, which power users find insufficient.
7. **[#33932](https://github.com/anthropics/claude-code/issues/33932): VS Code diff review UI like Copilot Edits.** It has 202 👍 and is a persistent IDE gap.
8. **[#65632](https://github.com/anthropics/claude-code/issues/65632): Inline KaTeX `$...$` no longer renders.** Only block `$$...$$` works. It is a desktop regression with 91 👍 and 33 comments.
9. **[#88178](https://github.com/anthropics/claude-code/issues/88178): Silent ~15-minute stalls when the API connection dies.** The reporter lost 5h46 in one day. They argue it is a single systemic failure (no dead-connection detection) filed as at least five separate issues. [#87424](https://github.com/anthropics/claude-code/issues/87424) (intermittent ECONNRESET) looks related.
10. **[#62476](https://github.com/anthropics/claude-code/issues/62476): Transcripts silently deleted after 30 days by default.** It is a data-retention surprise, labeled reproduced.

**Also worth noting:** [#60705](https://github.com/anthropics/claude-code/issues/60705) has 217 comments on `/goal` Stop-hook behavior. It is now closed. [#71542](https://github.com/anthropics/claude-code/issues/71542) reports the GitHub connector failing to read any repo, but it is labeled invalid.

## 4. Key PR Progress

Only 3 PRs were updated in the last 24h, so I can't list 10.

1. **[#81672](https://github.com/anthropics/claude-code/pull/81672): hookify import independent of install directory name.** It fixes #69665 and #81448. Marketplace installs don't name the plugin directory `hookify`, which breaks the imports.
2. **[#87077](https://github.com/anthropics/claude-code/pull/87077): repair invalid YAML frontmatter in pr-review-toolkit agents.** Unquoted descriptions containing `Daisy: "..."` parse as nested mappings. Agents then load with empty frontmatter.
3. **[#1](https://github.com/anthropics/claude-code/pull/1): Create SECURITY.md.** This is the original PR from Feb 2025, and it was touched and closed today.

## 5. Feature Request Trends

- **Interoperability:** AGENTS.md and `.agents/skills/` support ([#31005](https://github.com/anthropics/claude-code/issues/31005)). Cross-machine session resume ([#31992](https://github.com/anthropics/claude-code/issues/31992)).
- **TUI output control:** Options to hide or collapse inline diffs ([#37951](https://github.com/anthropics/claude-code/issues/37951), [#80720](https://github.com/anthropics/claude-code/issues/80720)).
- **Workflow:** Task or prompt queueing ([#33323](https://github.com/anthropics/claude-code/issues/33323)).
- **Cost visibility and plans:** Historical usage tracking across sessions ([#78148](https://github.com/anthropics/claude-code/issues/78148)). Higher-tier Team seats ([#47509](https://github.com/anthropics/claude-code/issues/47509)).
- **IDE:** A diff review UI in VS Code ([#33932](https://github.com/anthropics/claude-code/issues/33932)).
- **Platform and packaging:** Bash completion ([#7738](https://github.com/anthropics/claude-code/issues/7738)). A FreeBSD native binary ([#81704](https://github.com/anthropics/claude-code/issues/81704)).
- **Restoring removed features:** Buddy ([#45596](https://github.com/anthropics/claude-code/issues/45596)).

## 6. Developer Pain Points

- **Release regressions:** Input freezes (2.1.282), idle compaction with no opt-out (2.1.286), and rendering regressions such as KaTeX. Users are asking for opt-outs and clearer changelogs.
- **Connection reliability:** Silent API stalls with no timeout, retry, or error ([#88178](https://github.com/anthropics/claude-code/issues/88178)), and ECONNRESET ([#87424](https://github.com/anthropics/claude-code/issues/87424)).
- **Instruction adherence:** CLAUDE.md rules ignored ([#2544](https://github.com/anthropics/claude-code/issues/2544)), and replies drifting from the required language ([#96326](https://github.com/anthropics/claude-code/issues/96326)).
- **Usage limits:** Opaque or accelerated limit drain ([#97398](https://github.com/anthropics/claude-code/issues/97398)).
- **Platform issues:**
  - Linux clipboard image paste is still broken after a year ([#8324](https://github.com/anthropics/claude-code/issues/8324)).
  - The macOS sandbox breaks Go binary TLS ([#23416](https://github.com/anthropics/claude-code/issues/23416)).
  - The Windows desktop app spawns ~17 git processes per second ([#94478](https://github.com/anthropics/claude-code/issues/94478)).
  - `claude install` creates a broken symlink ([#83484](https://github.com/anthropics/claude-code/issues/83484)).
- **Silent defaults:** The 30-day transcript deletion ([#62476](https://github.com/anthropics/claude-code/issues/62476)) and the unannounced removal of Buddy.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-04

## 1. Today's Highlights

The free-tier error "OpenCode's free tier can only be used from within OpenCode" dominates today's activity. Several new reports came in alongside older ones, and they affect the official Desktop app, third-party frontends and subagents. Separately, a long-running schema-ID migration (#43886) produced a burst of small, stacked "fixture preparation" PRs from one contributor. Billing and quota problems on OpenCode Go and DSML tool-call malformation in hosted models are also recurring.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#49580](https://github.com/anomalyco/opencode/issues/49580) Free tier fails with MonoCode frontend.** It is the most-discussed issue (47 comments). The free tier appears to reject requests from third-party frontends driving the OpenCode backend. This is a policy/compliance question as much as a bug.
2. **[#52905](https://github.com/anomalyco/opencode/issues/52905) Official Desktop 2.0.22 rejects free-tier models.** The error appears even in the official app, so it is not only a third-party-client problem. Related reports: [#52899](https://github.com/anomalyco/opencode/issues/52899) (closed), [#52912](https://github.com/anomalyco/opencode/issues/52912), [#49680](https://github.com/anomalyco/opencode/issues/49680) and [#49596](https://github.com/anomalyco/opencode/issues/49596) (closed). Several of them carry the `needs:compliance` label.
3. **[#49723](https://github.com/anomalyco/opencode/issues/49723) The `explore` subagent is denied the free tier inside the CLI.** The `general` subagent works with the same models. This suggests subagent-specific request identification in v2.
4. **[#49057](https://github.com/anomalyco/opencode/issues/49057) Muse Spark 1.3 Free blocked with `[user_blocked]` and no appeal path.** The 20 comments show users want a documented way to contest access restrictions.
5. **[#37790](https://github.com/anomalyco/opencode/issues/37790) Go subscription paid but workspace shows "Insufficient balance".** This is a billing-state sync failure with 22 comments.
6. **[#49014](https://github.com/anomalyco/opencode/issues/49014) Go 5-hour limit blocks all models after one hits its limit.** The limit appears to be shared across models rather than tracked per model.
7. **[#51761](https://github.com/anomalyco/opencode/issues/51761) TUI OOM in v2, 24–28 GB in under a minute.** Memory grows linearly with no known trigger. It is a severe stability issue.
8. **[#44094](https://github.com/anomalyco/opencode/issues/44094) v2 compaction ignores `agents.compaction.model`.** This regression came from the shared model-request refactor. Related: [#41358](https://github.com/anomalyco/opencode/issues/41358), where the agent loses the task goal after auto-compaction.
9. **[#49050](https://github.com/anomalyco/opencode/issues/49050) and [#50206](https://github.com/anomalyco/opencode/issues/50206) DSML tool-call output.** Hosted models emit `<｜DSML｜...>` markup instead of valid tool calls, so tool execution fails or the session aborts.
10. **[#47646](https://github.com/anomalyco/opencode/issues/47646) and [PR #44821](https://github.com/anomalyco/opencode/pull/44821) ChatGPT OAuth context limits.** The limit is capped at 400k for models whose catalog limit is about 1.05M. That triggers premature compaction and a misleading TUI context display.

## 4. Key PR Progress

Only 20 of 219 updated PRs were listed, and most have no comment counts, so this selection is partial.

1. **[#53129](https://github.com/anomalyco/opencode/pull/53129) fix(core): preserve partial model limits.** Closes #53005. It allows individual legacy model-limit fields and leaves omitted ones unset during migration.
2. **[#53055](https://github.com/anomalyco/opencode/pull/53055) fix(client): stage canonical schema ID migration.** This is the integration archive for #43886 and is explicitly not to be merged as one change.
3. **[#53144](https://github.com/anomalyco/opencode/pull/53144) test(client): align assertions with the current v2 API.** It is a prerequisite for the contract tests.
4. **[#53135](https://github.com/anomalyco/opencode/pull/53135) test(client): prepare canonical ID fixture producers.** It prepares the fixture producers for the migration.
5. **[#53136](https://github.com/anomalyco/opencode/pull/53136) – [#53142](https://github.com/anomalyco/opencode/pull/53142) TUI fixture preparation.** This series covers the session, command, data, component, context, mini and mini-transport fixtures.
6. **[#53132](https://github.com/anomalyco/opencode/pull/53132) and [#53133](https://github.com/anomalyco/opencode/pull/53133) test(app).** They prepare schema IDs in the composer and runtime fixtures.
7. **[#53134](https://github.com/anomalyco/opencode/pull/53134) test(cli).** It prepares schema IDs in the command fixtures.
8. **[#53143](https://github.com/anomalyco/opencode/pull/53143) test(gui-extensions).** It prepares schema IDs in the extension fixtures.
9. **[#53127](https://github.com/anomalyco/opencode/pull/53127) refactor(ai): delete unregistered recording cassettes (closed).** It removes 18 cassettes that no registered recorded test uses.
10. **[#53126](https://github.com/anomalyco/opencode/pull/53126) refactor(ai): remove unused test code (closed).** It is a test-only cleanup that touches nothing under `src/`.

Also notable: [#53128](https://github.com/anomalyco/opencode/pull/53128) adds the community plugin `opencode-message-copy` to the ecosystem list. All of the schema-ID PRs carry `needs:issue` and reference #43886, so they may need a linked issue before review.

## 5. Feature Request Trends

- **Context visibility:** [#6152](https://github.com/anomalyco/opencode/issues/6152) asks for a `/context`-style breakdown of the context window. It has 138 👍, the highest in this batch.
- **Input keybinds:** [#9836](https://github.com/anomalyco/opencode/issues/9836) (Shift+Enter for a newline, 74 👍) and [#11898](https://github.com/anomalyco/opencode/issues/11898) (remappable newline and submit keys) are both closed.
- **Session recall:** [#41354](https://github.com/anomalyco/opencode/issues/41354) asks for search across message history. [#3227](https://github.com/anomalyco/opencode/issues/3227), referencing another session with `@`, is closed.
- **Compaction control:** users want configurable compaction models and better post-compaction continuity (#44094, #41358).

## 6. Developer Pain Points

- **Free-tier gating:** the "only from within OpenCode" error recurs across the Desktop app, third-party frontends and subagents. Users find the error opaque and see no clear remedy or appeal path.
- **Billing and quota:** Go subscriptions show "Insufficient balance" (#37790), cross-model limit lockouts (#49014), no visible API key after subscribing ([#50885](https://github.com/anomalyco/opencode/issues/50885), closed), and models that are listed but unavailable in some regions ([#40006](https://github.com/anomalyco/opencode/issues/40006)).
- **v2 stability:** TUI memory exhaustion (#51761), Desktop startup failures to load providers, models and MCP ([#40516](https://github.com/anomalyco/opencode/issues/40516)), and "Failed to fetch" errors ([#27755](https://github.com/anomalyco/opencode/issues/27755)).
- **Malformed model output:** DSML tool-call markup (#49050, #50206) and a duplicated-response bug ([#25270](https://github.com/anomalyco/opencode/issues/25270), closed).
- **Platform quirks:** Windows `upgrade --method curl` path mangling ([#50924](https://github.com/anomalyco/opencode/issues/50924), closed) and Japanese text turning into mojibake on copy ([#30068](https://github.com/anomalyco/opencode/issues/30068), closed).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
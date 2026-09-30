# AI CLI Tools Community Digest 2026-09-30

> Generated: 2026-09-30 13:17 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: Claude Code vs. OpenCode (2026-09-30)

Only two tools have digests today, so this compares those two. Counts below come from the items each digest lists. Neither digest gives a total for issues or PRs.

## 1. Ecosystem Overview

Both communities are working on extensibility and enterprise control while dealing with stability problems. Claude Code is building a mods/hooks layer, with a `sec-default` security layer and managed-policy options. OpenCode is in the middle of a V2 migration that is causing memory exhaustion, data loss and config regressions. Both suffer from silent or opaque failures: dropped hook output and memory-load state in Claude Code, and generic HTTP 400 errors and skipped migration messages in OpenCode. Both also have platform-specific gaps, mostly on Windows.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10, plus 2 "worth watching" | 10, plus 2 "also noteworthy" |
| Key PRs listed | 10 (5 closed) | 10, plus 2 "smaller items" (1 closed) |
| Release status | v2.1.285 shipped. PR #98275 says 2.1.286 is already in progress. | No release in the last 24 hours |
| Most active thread | #91870 Mods (225 comments, 👍128) | #20695 Memory Megathread (149 comments, 👍112, closed) |
| Highest 👍 | #18435 multi-account (👍843) | #7624 base-path routing (49 👍) |

The PR counts are the numbers of key PRs each digest picked. They are not full totals, so they can't be used to compare volume directly.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Extensibility and hook coverage | Function hooks (#91870); plugin configuration (`claude plugin configure`) | Plugin hook coverage (#52277 runs `tool.execute.after` for user shell commands); MCP tool listing (#49151) |
| Enterprise or managed control | `allowManagedModsOnly` (#98083); deny-rule precedence (#98080) | Managed config directory and macOS managed preferences (#51337); tool-permission fixes (#47337) |
| Observability | Visibility into auto-memory loading (#82056) and dropped hook output (#84021) | Usage history through the API key (#43983); Plan/Build mode visibility (#37970) |
| Diff and review UI | Diff pane fixes (#98374, #98357); VS Code diff review (#33932) | Review panel "last turn" changes (#51640); nested-repo change aggregation (#52229) |
| Account, plan and billing | Multi-account switching (#18435); higher Team tier (#47509) | Go subscription and billing gaps (#49768, #38255, #50155) |
| Windows reliability | Desktop relaunch failures (#42776, #53247, #89599) | PowerShell encoding (#23636), `Expand-Archive` under Bun (#24291), `upgrade --method curl` (#50924) |
| Copy-paste reliability | Linux and macOS copy problems (#62699, #66192) | CLI paste failure (#13984) |

## 4. Differentiation Analysis

- **Claude Code**
  - It is closer to a platform. It has a desktop app (with the new `claude --desktop` handoff), remote and Cowork features, and a mods layer.
  - Governance and security are central: `sec-default`, `security-guidance`, a WebFetch kill switch, and hardened GitHub Actions workflows.
  - Model behavior is a recurring topic because it is tied to Anthropic models. Examples are safety-classifier outages (#97854) and false positives (#87640), and quality loss after context summarization (#96308).
- **OpenCode**
  - It is provider-agnostic and has its own hosted offerings (Go and Zen). That produces a lot of provider-compatibility work, such as vLLM tool-call chunks (#26412), `finish_reason` compliance (#43379) and forced tool choice (#52091).
  - Its problems are more about the core runtime and storage. Examples are TUI OOMs (#51761), an unbounded `event` table (#33356) and migration data loss (#52226).
  - Deployment and integration needs are more prominent: ACP clients like Zed (#52286), base-path routing (#7624) and XDG install paths (#27786).
- **Contribution model:** Claude Code's PRs are dominated by one author (`poteat`) working on mods and `sec-default`. Several are gated on a future CLI release, and #97334 is red by design. OpenCode's digest reports many PRs stuck on `needs:issue` or `needs:compliance` labels.

## 5. Community Momentum & Maturity

- **Claude Code** has a large and engaged user base. Its top items are 199 to 225 comments, and one item has 843 👍. It ships steadily, with 2.1.286 already in progress. Its long-lived unresolved issues are mostly desktop and Windows problems.
- **OpenCode** has high engagement on stability threads: 149 comments on the memory megathread and 82 on #11112. It is iterating quickly on V2 fixes, and #52286 closes four linked issues at once. But it has no release today, and several long-running problems remain: 13 GB+ database growth, paste failure since February, and "Preparing write..." hangs.
- **Maturity:** Claude Code's problems are mostly at the edges: platform, UX and policy. OpenCode's include core reliability and data integrity, which suggests V2 is still stabilizing.

## 6. Trend Signals

1. **Extensibility is turning into governance.** Both tools are adding hooks and plugins and at the same time admin controls over them. Teams evaluating either one should check managed-policy support.
2. **Silent failure is a common complaint.** Dropped hook output, unclear memory state, skipped migration messages and hidden provider errors all draw complaints. Tools that surface these states will earn more trust.
3. **Autonomous workflows depend on server-side reliability.** A classifier outage blocked Bash and ScheduleWakeup for several minutes (#97854). Teams running unattended agents should plan for fallbacks.
4. **Migration safety matters.** OpenCode's V1→V2 data loss (#52226) shows that storage growth, retention and migration deserve the same care as features.
5. **Windows and desktop support lag behind.** Both trackers have long-running Windows issues.
6. **For decision-makers:** Claude Code fits teams that want a governed, first-party ecosystem, and they should watch the desktop and Windows problems. OpenCode fits teams that need provider flexibility or ACP/editor integration. Those teams should test V2 carefully before rolling it out, particularly for memory use and migration.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (as of 2026-09-30)

Note: the PR data lists comment counts as `undefined` and 👍 as 0 for every PR, so I ranked PRs by recency of activity and by how much they overlap with heavily discussed Issues. The Issue comment counts are real.

## 1. Top Skills Ranking

| # | Skill / PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1298 skill-creator trigger-eval fixes](https://github.com/anthropics/skills/pull/1298) | Isolates trigger evals and handles Windows `select()` failures and runtime errors. | Fixes false misses and invalid scores. It overlaps with Issues [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate) and [#1383](https://github.com/anthropics/skills/issues/1383) (Windows and shadowing). | OPEN |
| 2 | [#1742 mcp-builder mcp>=2 support](https://github.com/anthropics/skills/pull/1742) | Supports the renamed `streamable_http_client` and the new custom-header setup. | Fixes #1668. Updated 2026-09-29. | OPEN |
| 3 | [#1792 docx LibreOffice timeout](https://github.com/anthropics/skills/pull/1792) | `accept_changes.py` reports a timeout as an error and checks the output for leftover revision marks. | Removes false "success" results. | OPEN |
| 4 | [#1734 Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734) | Detects orphaned comments in docx files. | Updated 2026-09-25. It has no description. | OPEN |
| 5 | [#1607 claude-api retired model IDs](https://github.com/anthropics/skills/pull/1607) | Marks four retired model IDs as retired. | Fixes #1603. The claude-api skill is also the subject of Issue [#1487](https://github.com/anthropics/skills/issues/1487) (~156k-token injection). | OPEN |
| 6 | [#1681 package_skill.py direct execution](https://github.com/anthropics/skills/pull/1681) | Fixes the `ModuleNotFoundError` when the script is run standalone and updates the usage paths. | Updated 2026-09-27. | OPEN |
| 7 | [#525 Pyxel retro-game skill](https://github.com/anthropics/skills/pull/525) | Creates, debugs and verifies Python retro games with headless runs and frame inspection. | Open since March and still updated on 2026-09-22. | OPEN |
| 8 | [#1245 Notion spec-to-implementation, resume auditor](https://github.com/anthropics/skills/pull/1245) | Turns specs into Notion tasks; also adds a resume auditor. | Updated 2026-09-30. | OPEN |

## 2. Community Demand Trends

- **Skill-creator reliability and evals.** This is the largest cluster: [#556](https://github.com/anthropics/skills/issues/556) (12 comments), [#1383](https://github.com/anthropics/skills/issues/1383), [#1394](https://github.com/anthropics/skills/issues/1394) (eval-viewer XSS) and [#202](https://github.com/anthropics/skills/issues/202) (best practices). Users want trigger evals and benchmarks they can trust, including on Windows.
- **Trust, security and provenance.** [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the top thread) covers community skills impersonating the `anthropic/` namespace. [#1175](https://github.com/anthropics/skills/issues/1175) raises SharePoint access control and context concerns, and #1394 is an XSS report.
- **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide sharing in Claude.ai. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins. [#29](https://github.com/anthropics/skills/issues/29) asks about Bedrock support.
- **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports the claude-api skill injecting ~156k tokens. [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory for agent state.
- **Agent governance and quality gates.** [#412](https://github.com/anthropics/skills/issues/412) (agent-governance) and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gates).
- **Broken bundled skills.** [#1390](https://github.com/anthropics/skills/issues/1390) covers mcp-builder's `evaluation.py` scoring 0/N against real servers. The docx, pdf and mcp-builder PRs ([#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anthropics/skills/pull/538)) point the same way.

## 3. High-Potential Pending Skills

These are small fixes to official skills, which are the most likely to be merged:

- [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder mcp>=2 compatibility. It has a linked issue and was updated this week.
- [#1298](https://github.com/anthropics/skills/pull/1298) trigger-eval isolation. It addresses several open Issues.
- [#1792](https://github.com/anthropics/skills/pull/1792) docx timeout handling.
- [#1607](https://github.com/anthropics/skills/pull/1607) retired model IDs. This is a content-only change.
- [#1681](https://github.com/anthropics/skills/pull/1681) package_skill.py path fix.
- [#1734](https://github.com/anthropics/skills/pull/1734) orphaned docx comment detection.

New community skills have a lower chance of landing soon. Examples are [#1771 proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771), [#1703 md2video-audio](https://github.com/anthropics/skills/pull/1703), [#1776 blast-radius](https://github.com/anthropics/skills/pull/1776) and [#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615). Several PRs from March (#514, #486, #541) have gone stale.

## 4. Skills Ecosystem Insight

The community's strongest demand is for the official skills to work reliably: trustworthy skill-creator evals, fixes to the docx and mcp-builder scripts, and clear trust boundaries for community skills. Requests for new skills come second.

---

# Claude Code Community Digest: 2026-09-30

## Today's Highlights
Claude Code v2.1.285 shipped with a kill switch for WebFetch (`CLAUDE_CODE_DISABLE_WEB_FETCH`), a `claude --desktop` handoff to the desktop app, and a new `claude plugin configure` command. The "Mods" extensibility effort (#91870, 225 comments) is the most active thread. Many open PRs from the same author (`poteat`) work on mods and the `sec-default` security layer. Meanwhile, Windows Desktop launch failures and Auto mode classifier outages continue to draw heavy reports.

## Releases

**[v2.1.285](https://github.com/anthropics/claude-code/releases/tag/v2.1.285)**
- Added `CLAUDE_CODE_DISABLE_WEB_FETCH` env var to turn off the WebFetch tool.
- Added `claude --desktop` to open the desktop app on the current directory, or on a session via `--continue` / `--resume <id>`.
- Added `claude plugin configure <plugin>` (the release notes are truncated in the source data, so the full behavior isn't confirmed).

Note: PR #98275 refers to a change "built into Claude Code 2.1.286", so the next release is already in progress.

## Hot Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) – Mods: make Claude 10x more extensible** (225 comments, 👍128). The maintainers' update commits to shipping function hooks within weeks. It is the central extensibility roadmap thread, and the community is engaged with it.
2. **[#42776](https://github.com/anthropics/claude-code/issues/42776) – Desktop fails to relaunch on Windows (orphaned process file lock)** (199 comments, 👍98). A long-running Windows blocker. It is labeled `invalid` despite the volume of reports.
3. **[#53247](https://github.com/anthropics/claude-code/issues/53247) – Desktop won't launch on Windows after a crash (orphaned Silo/Job Object)** (108 comments). Only a logoff or reboot recovers. It is closely related to #42776, and #89599 reports the same MSIX symptom.
4. **[#18435](https://github.com/anthropics/claude-code/issues/18435) – Multiple accounts with easy switching in Desktop** (199 comments, 👍843). This has the highest 👍 count of the day and is a persistent demand.
5. **[#97854](https://github.com/anthropics/claude-code/issues/97854) – Auto mode safety classifier intermittently returns no verdict** (26 comments, 👍35). Bash and ScheduleWakeup were blocked 100% of the time for several minutes. This is a server-side reliability problem for autonomous workflows.
6. **[#86142](https://github.com/anthropics/claude-code/issues/86142) – MCP servers with draft-07 `outputSchema` rejected as "unsupported dialect"** (55 comments, closed). It made affected MCP servers entirely unusable and is now resolved.
7. **[#87640](https://github.com/anthropics/claude-code/issues/87640) – Fable 5 `[reasoning_extraction]` safeguard false-positive on "Hi"** (23 comments). This is an example of over-aggressive safety classification.
8. **[#84021](https://github.com/anthropics/claude-code/issues/84021) – Hook output over 10K characters silently dropped** (12 comments). Memory plugins lose injected context with no error or warning, which is a silent-failure design problem.
9. **[#82056](https://github.com/anthropics/claude-code/issues/82056) – Session can't tell whether the auto-memory index loaded fully, truncated, or not at all** (60 comments). It asks for observability into memory loading.
10. **[#47509](https://github.com/anthropics/claude-code/issues/47509) – Team plan needs a Max 20x-equivalent tier** (51 comments, 👍158). Power users find 6.25x Pro usage insufficient.

Also worth watching: [#96308](https://github.com/anthropics/claude-code/issues/96308) reports abrupt Opus 4.6 quality collapse after context summarization. [#67609](https://github.com/anthropics/claude-code/issues/67609) reports the advisor tool failing on Fable 5 above ~100K tokens.

## Key PR Progress

1. **[#98374](https://github.com/anthropics/claude-code/pull/98374)** – The diff pane reads the diff again after a finished rebase, instead of showing "Diff unavailable" (git leaves `REBASE_HEAD` behind).
2. **[#98357](https://github.com/anthropics/claude-code/pull/98357)** – The diff pane detects merges finished elsewhere by watching HEAD. It also stops spawning git every two seconds on branches with unusual names.
3. **[#97952](https://github.com/anthropics/claude-code/pull/97952)** (closed) – Security hardening for the Claude-calling GitHub Actions workflows, including an egress-firewall runner.
4. **[#96434](https://github.com/anthropics/claude-code/pull/96434)** – security-guidance: keeps files covered by `Read` deny/ask rules, and well-known secret files (`.env`, keys, credential stores), out of the reviewer. The review sub-agent gets no shell, and `SG_SKIP_SECRET_FILES=0` opts out. Fixes #96276.
5. **[#98275](https://github.com/anthropics/claude-code/pull/98275)** (closed) – Sends the "AGENTS.md loaded" line to the debug log instead of the transcript, mirroring 2.1.286.
6. **[#97241](https://github.com/anthropics/claude-code/pull/97241)** (closed) – sec-default: `prompt.compose` sections continue past the user tier, so a person's plugins no longer shape the system prompt where sec-default is seated.
7. **[#97334](https://github.com/anthropics/claude-code/pull/97334)** – sec-default: the rows a conversation keeps continue past the user tier. It is gated on the engine having `session.append`, and its CI is red by design until a released CLI carries that event.
8. **[#97293](https://github.com/anthropics/claude-code/pull/97293)** – mods: declarations now carry `process.run` truncation flags and `mtimeMs` on `fs.list` entries. It arms only when the released npm CLI carries both.
9. **[#98080](https://github.com/anthropics/claude-code/pull/98080)** (closed) – sec-default: a settings deny rule holds over an allow or ask from a user-installed plugin, with a managed opt-out.
10. **[#98083](https://github.com/anthropics/claude-code/pull/98083)** (closed) – Adds the managed option `allowManagedModsOnly`, so an organization can allow its own mods while refusing user-installed ones.

## Feature Request Trends
- **Extensibility and mods/hooks:** function hooks (#91870) and richer plugin configuration, with enterprise controls being built in parallel (`allowManagedModsOnly`, deny-rule precedence).
- **Desktop account management:** multi-account switching (#18435).
- **IDE parity:** a diff review UI in the VS Code extension (#33932) and a context-usage percentage in the VS Code UI (#18456, closed).
- **Accessibility and voice:** TTS readback and voice mode for Remote Control sessions (#42700).
- **Plans and cost:** a higher Team tier (#47509).
- **Observability:** visibility into what auto-memory loaded (#82056) and into dropped hook output (#84021).

## Developer Pain Points
- **Windows Desktop stability:** orphaned processes, Job Objects, or MSIX updates block relaunch (#42776, #53247, #89599). CoworkVMService failures leave silent hangs (#85840), and Cowork commits can lag one write behind (#93482).
- **Terminal and copy-paste problems:** copy doesn't work via Ctrl+Shift+C or right-click on Linux (#62699), and copy-paste is broken on macOS (#66192). A VS Code terminal-relaunch warning keeps reappearing (#3301).
- **Model behavior and instruction adherence:** language instructions are ignored between tool calls (#98145), models cite hook directives as authorization (#60705), and quality degrades after context summarization (#96308).
- **Safety classifier friction:** false positives (#87640) and outages (#97854) interrupt work.
- **Silent failures:** hook output is dropped, and memory load state is opaque (#84021, #82056).
- **Agents and worktrees:** Agent Teams teammates ignore `bypassPermissions` (#26479), `claude --worktree` overwrites `core.hooksPath` (#27474), and the MCP Agent tool reports an empty agent list in `mcp serve` mode (#41973).
- **Auth and desktop UX:** an OAuth redirect URI error (#36215) and a removed sidebar project filter that the docs still describe (#78857).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-09-30

## 1. Today's Highlights

The V2 migration is the main source of friction today. Reports cover TUI memory exhaustion of 24–28 GB, ACP config regressions, and V1→V2 migration data loss. The ACP fix landed in [#52286](https://github.com/anomalyco/opencode/pull/52286) and closes several linked issues. OpenCode Go and Zen billing and gateway problems keep drawing comments, and the long-running memory megathread was closed.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) Memory Megathread [CLOSED]**: 149 comments and 112 👍. It was the central place for heap-snapshot collection on memory reports. Its closure suggests the memory work is being handled elsewhere, but new OOM reports are still arriving (see #51761).
2. **[#51761](https://github.com/anomalyco/opencode/issues/51761) TUI OOM in v2**: Memory grows linearly at about 0.5–1 GB/s and reaches 24–28 GB in under a minute, then the OOM killer takes the process. No reliable trigger has been found, and the report is 2 days old with 9 comments. It is a severe V2 stability regression.
3. **[#33356](https://github.com/anomalyco/opencode/issues/33356) Unbounded `event` table growth (13 GB+)**: `message.updated.1` snapshots are never pruned or compacted, and volumes have filled to 97–99%. It has 37 comments and has been open since June. It needs a retention policy.
4. **[#52226](https://github.com/anomalyco/opencode/issues/52226) V1→V2 migration silently drops messages [CLOSED]**: 6,238 assistant messages across 92 sessions failed schema validation because they lacked the `agent` field. The reporter recovered the data, and the skip log undercounted. Migration safety is now a trust issue.
5. **[#50236](https://github.com/anomalyco/opencode/issues/50236) ACP `session/new` ignores config since 2.0.4 [CLOSED]**: Custom providers, agents and the default model went missing for Zed and other ACP clients. It is fixed by PR #52286.
6. **[#11112](https://github.com/anomalyco/opencode/issues/11112) Stuck at "Preparing write..."**: 82 comments and 50 👍. It is a long-standing problem, seen with oh-my-opencode, where tool execution is aborted repeatedly.
7. **[#13984](https://github.com/anomalyco/opencode/issues/13984) Copy/paste broken in the CLI**: 65 comments and 32 👍. The "copied to clipboard" notice appears but nothing pastes. It is a basic usability failure that has been open since February.
8. **[#52042](https://github.com/anomalyco/opencode/issues/52042) Provider image rejection bricks the session**: A pasted image is replayed on every request, and each one fails with a generic HTTP 400. There is no recovery path, and the provider's real error is hidden.
9. **[#49768](https://github.com/anomalyco/opencode/issues/49768) / [#38255](https://github.com/anomalyco/opencode/issues/38255) / [#50155](https://github.com/anomalyco/opencode/issues/50155) OpenCode Go billing and access**: Reports include a paid subscription shown as inactive (`Account.Disabled`), usage dashboards that disagree, and a DeepSeek V4 Flash region/privacy error with no matching setting. Together they point to gaps in the Go subscription backend.
10. **[#43379](https://github.com/anomalyco/opencode/issues/43379) Zen `muse-*` streams never send `finish_reason`**: Strict OpenAI-compatible clients enter a retry loop. It is a gateway protocol-compliance bug.

Also noteworthy: [#50296](https://github.com/anomalyco/opencode/issues/50296), a stack overflow that blocks instruction initialization so every session fails to start. [#51764](https://github.com/anomalyco/opencode/issues/51764), where Anthropic lowering rejects recoverable tool history.

## 4. Key PR Progress

1. **[#52286](https://github.com/anomalyco/opencode/pull/52286) fix(acp): follow server defaults and refresh the session catalog [CLOSED]**: Restores the config, plugin and default-model catalog after the plugin-activation wait was removed in v2.0.4. It closes #50236, #51819, #50378 and #49630.
2. **[#47337](https://github.com/anomalyco/opencode/pull/47337) fix(core): hide tools whose rules deny every resource**: The old `whollyDisabled` check looked only at the last rule for an action. It could advertise tools that call-time permission evaluation would deny.
3. **[#51337](https://github.com/anomalyco/opencode/pull/51337) fix(core): load managed config directory and macOS managed preferences**: Restores V1 admin-managed config from system directories, which enterprise deployments depend on.
4. **[#51640](https://github.com/anomalyco/opencode/pull/51640) feat(app): show last turn changes in review panel**: Wires the previously inert "Last turn" mode to the `session.diff` route from #47821.
5. **[#52229](https://github.com/anomalyco/opencode/pull/52229) feat(vcs): aggregate file changes from nested git repositories**: Makes embedded repos and gitlinks visible in status and diff.
6. **[#49151](https://github.com/anomalyco/opencode/pull/49151) feat(mcp): list tools exposed by MCP servers**: Adds `opencode mcp tools [name]`, grouped by server.
7. **[#49176](https://github.com/anomalyco/opencode/pull/49176) / [#50655](https://github.com/anomalyco/opencode/pull/50655) Firecrawl `devsearch` and `alexandria` tools**: A stacked pair that adds separate, connection-gated tools instead of another web search provider.
8. **[#52287](https://github.com/anomalyco/opencode/pull/52287) fix(tui): scope prompt history recall to the active session**: Up-arrow history was one global list. It is now per session (closes #51139).
9. **[#52277](https://github.com/anomalyco/opencode/pull/52277) fix(opencode): run `tool.execute.after` for user shell commands**: Closes a plugin-hook gap for user-run shell commands.
10. **[#52091](https://github.com/anomalyco/opencode/pull/52091) fix(ai): flatten namespaced choices for flat protocols**: Fixes forced tool choice, where a request could define `crm_lookup` but force `crm.lookup`.

Smaller items: [#52268](https://github.com/anomalyco/opencode/pull/52268) warns when a command file is skipped for an invalid `model:`. [#49344](https://github.com/anomalyco/opencode/pull/49344) keeps long user messages inside the scroll viewport.

## 5. Feature Request Trends

- **Deployment and integration**: Base-path and prefix routing ([#7624](https://github.com/anomalyco/opencode/issues/7624), 49 👍), and XDG-compliant install locations ([#27786](https://github.com/anomalyco/opencode/issues/27786)).
- **Desktop project management**: Deleting projects ([#28030](https://github.com/anomalyco/opencode/issues/28030), 14 👍).
- **Go and Zen observability**: Usage history exposed through the API key ([#43983](https://github.com/anomalyco/opencode/issues/43983)).
- **Tooling and extensibility**: MCP tool listing (#49151), Firecrawl tools, plugin hook coverage, and community plugins such as [opencode-model-cost](https://github.com/anomalyco/opencode/pull/52292), which shows live per-model cost and TPS.
- **Workflow control**: Plan/Build mode visibility ([#37970](https://github.com/anomalyco/opencode/issues/37970)) and predictable plan-to-build model handover ([#9296](https://github.com/anomalyco/opencode/issues/9296)).

## 6. Developer Pain Points

- **V2 stability and migration**: OOMs, dropped data on migration, schema errors (`no such column: project_id` in [#42170](https://github.com/anomalyco/opencode/issues/42170)), stuck interrupts ([#42960](https://github.com/anomalyco/opencode/issues/42960)), and tab-navigation freezes ([#52253](https://github.com/anomalyco/opencode/issues/52253)).
- **Resource use**: High CPU and unresponsive sessions ([#33399](https://github.com/anomalyco/opencode/issues/33399), [#32149](https://github.com/anomalyco/opencode/issues/32149)) and unbounded database growth.
- **Windows compatibility**: PowerShell encoding for non-ASCII output ([#23636](https://github.com/anomalyco/opencode/issues/23636)), `Expand-Archive` failing under Bun ([#24291](https://github.com/anomalyco/opencode/issues/24291)), and a broken `upgrade --method curl` ([#50924](https://github.com/anomalyco/opencode/issues/50924)).
- **Provider compatibility and opaque errors**: Custom OpenAI-compatible providers with vLLM tool-call chunks ([#26412](https://github.com/anomalyco/opencode/issues/26412)), OAuth context-limit misdetection that triggers early compaction ([#44821](https://github.com/anomalyco/opencode/issues/44821)), and generic HTTP 400 errors that hide the provider's message.
- **Billing transparency**: Subscription state, usage dashboards and region requirements for OpenCode Go are inconsistent.
- **Contribution friction**: Many PRs carry `needs:issue` or `needs:compliance` labels, so contributors are running into the repository's process gates.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
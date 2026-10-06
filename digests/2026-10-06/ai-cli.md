# AI CLI Tools Community Digest 2026-10-06

> Generated: 2026-10-06 13:52 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report: 2026-10-06

Only Claude Code and OpenCode are covered in today's data. The conclusions below describe those two tools, not the wider CLI field.

## 1. Ecosystem Overview

Both tools are mature and have large user bases. Their communities now talk less about core capability and more about controlling automatic behavior. Compaction, model routing, free-tier gating and usage limits all came up as sources of friction. OpenCode's open-source V2 migration and Claude Code's Windows Desktop problems show the same pressure: parity, packaging and platform reliability are what decide whether users stay. Both projects also show a widening gap between fast release cadence and how well changes are communicated.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | 2 (v2.1.291 hotfix, v2.1.290) | 0 |
| Hot issues listed | 10 plus 3 noteworthy | 10 (several are duplicate clusters) |
| Top issue engagement | #85891: 118 comments, 286 👍. #60705: 221 comments (closed) | #33356: 39 comments, 13 👍. #4714: 37 comments, 60 👍 |
| PRs updated (24h) | 1 (#96434) | About 10 listed, several closed ACP PRs |
| Release nature | Regression fixes | None. V2 work is going through PRs |

Neither digest gives total issue counts, so the comparison uses only the items each one lists. PR volume is the clearest difference: OpenCode has about ten active PRs, and Claude Code's public PR activity is nearly nil.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Control over compaction and context** | Opt-out for idle auto-compaction (#98747) | Compaction infinite loop (#15533), "Continuing after restart" (#53307) |
| **Permission and hook control** | Hook hangs (#95354), `excludedCommands` regression (#95455) | `skip` in `tool.execute.before` (#52837), auto-approve keybind (#40331) |
| **Transparency about cost, privacy and policy** | Weekly-limit drain (#97398), silent model switch (#67246) | Privacy, telemetry and retention wording (#39875) |
| **Session UX** | Paste-collapse toggle (#23134), scroll regression (#65833) | Find-in-buffer in the TUI and Desktop (#4714, #19143) |
| **Platform and enterprise reliability** | Windows MSIX update failures (#83932, #91763) | `NODE_EXTRA_CA_CERTS` ignored on Windows (#17798), MCP OAuth browser launch (#26195) |

## 4. Differentiation Analysis

- **Product model:**
  - Claude Code is a vendor-integrated product tied to Anthropic's own models (Fable 5, Opus 5.5), a desktop app and a VS Code extension.
  - OpenCode is a multi-provider, open-source tool. It has its own hosted tiers (free tier, Go, Zen) and supports OpenAI OAuth and DeepSeek endpoints.
- **Characteristic problems:**
  - Claude Code's are model-behavior and routing issues (classifier downgrade, thinking-block mix-ups, rule drift) and desktop packaging.
  - OpenCode's are provider and catalog issues (free-tier gating, OAuth model catalog), storage bloat (13GB event table, leaked `/tmp` files) and the V2 migration.
- **Technical emphasis:**
  - Claude Code is extending its plugin and mod hooks (`serverToolUses`, `agentId`) and tightening security (#96434).
  - OpenCode is investing in ACP compliance, snapshot performance, managed enterprise config and UI polish.
- **Users:**
  - Claude Code serves a mix of terminal, Windows desktop and VS Code users who want guardrails and predictability.
  - OpenCode serves power users, local-model users and teams running multiple providers, who are sensitive to portability and openness.

## 5. Community Momentum & Maturity

- **Claude Code** has the heaviest per-issue engagement in this sample (286 👍 and 118 comments on one item, 221 comments on another). It also ships often: two releases in 24 hours, with the second a hotfix. That points to a fast pace and a visible quality cost. The high-upvote items are mostly old requests, some eight months open, so backlog responsiveness looks weaker than release speed.
- **OpenCode** has no release today but the broader contributor flow. About ten PRs were touched, including maintainer-led ACP work, which suggests healthy distributed development. Its main risk is the V2 transition: the schema, todo tools and release notes all lag, and V2 users are visibly frustrated.
- Neither digest allows a rigorous maturity ranking. The data supports only a qualitative read: Claude Code is mature and release-driven, and OpenCode is mature and PR-driven, but in a migration phase.

## 6. Trend Signals

1. **"Automation with an off switch" is becoming a baseline expectation.** Idle compaction, file auto-attach, paste collapse and model switching all drew requests for opt-outs. Developers choosing a tool should check whether such behavior is configurable and logged.
2. **Context management is the shared weak point.** Both tools report compaction problems (silent loss in one, loops in the other). Teams relying on long sessions should plan their own checkpoints.
3. **Opaque cost and routing erode trust.** Claude Code users cite faster limit drain (a single unconfirmed report) and silent model downgrades. OpenCode users cite unclear privacy and free-tier terms. Documented usage and routing behavior is now a purchase criterion.
4. **Windows and enterprise support lags.** Both tools show certificate, packaging and update failures on Windows. Enterprise buyers should test this area before rollout.
5. **Interoperability is rising.** ACP compliance, plugin hooks and MCP OAuth issues show that integration surfaces now matter as much as core features.
6. **Major-version migrations need release notes and parity checks.** OpenCode's V2 gaps are a reminder that missing changelogs and missing tools cost community goodwill.

**Caveat:** Several Claude Code details rest on a single report (#97398 on usage drain) or on truncated release data (v2.1.290). Treat them as signals to watch, not confirmed trends.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (2026-10-06)

**Data caveat:** The PR comment counts came through as `undefined` and every PR shows 0 👍. I couldn't rank PRs by discussion volume. The PR list below is ordered by the feed's sort and weighted by recent activity and topical relevance. Issue rankings use real comment counts.

## 1. Top Skills Ranking

All eight are **OPEN**. None is merged or draft.

| # | PR | What it does | Highlights / status |
|---|----|--------------|---------------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger-eval fixes | Isolates trigger evals, fixes the Windows `select()` pipe failure, and stops runtime failures from counting as non-triggers. | Targets false misses and invalid scores. It overlaps with Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1383](https://github.com/anthropics/skills/issues/1383). Updated 2026-09-16. |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` for mcp>=2 | Supports the renamed `streamable_http_client` and the new custom-header mechanism. Fixes #1668. | A compatibility fix for an SDK breaking change. Updated 2026-09-29. |
| 3 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` LibreOffice timeout | `accept_changes.py` now reports a timeout as an error. It claims success only after checking that no revision marks remain in the output. | Removes a silent-success failure mode. Updated 2026-09-25. |
| 4 | [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments | Adds detection of orphaned comments in docx files. | The description is empty. Updated 2026-09-25. |
| 5 | [#1681](https://github.com/anthropics/skills/pull/1681) `package_skill.py` direct execution | Fixes `ModuleNotFoundError` when the script is run standalone, and corrects stale usage paths. | Part of the `skill-creator` tooling cleanup. Updated 2026-09-27. |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) Pyxel retro game skill | Create, debug, and verify Python retro games with headless input-driven runs and frame inspection. | Open since March and still active. Updated 2026-09-22. |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) `testing-patterns` | Covers the Testing Trophy model, unit tests, and React component testing. | A test-generation use case. Updated 2026-09-21. |
| 8 | [#1776](https://github.com/anthropics/skills/pull/1776) `blast-radius` | A checklist to run before bulk or destructive writes such as deletes, access revocations, and batch mailings. | A safety-oriented skill. Updated 2026-09-18. |

## 2. Community Demand Trends

- **Skill-creator and eval reliability** is the loudest theme.
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows a 0% trigger rate (12 comments, 7 👍).
  - [#1383](https://github.com/anthropics/skills/issues/1383): silent benchmark failures, Windows breakage, and skill shadowing.
  - [#1394](https://github.com/anthropics/skills/issues/1394): an XSS gap in the eval-viewer.
  - [#202](https://github.com/anthropics/skills/issues/202): a call for `skill-creator` best-practice rewrites.
- **Trust, security, and governance.**
  - [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue (43 comments). It reports community skills distributed under the `anthropic/` namespace, which blurs the trust boundary.
  - Related: [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal) and [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint permissions in SKILL.md).
- **Organization sharing and distribution.**
  - [#228](https://github.com/anthropics/skills/issues/228): org-wide skill sharing in Claude.ai (16 comments, 8 👍).
  - [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` install duplicate content (9 👍).
- **Context cost.** [#1487](https://github.com/anthropics/skills/issues/1487) reports that `claude-api` injects about 156k tokens in one call.
- **Bundled-skill script bugs.** [#1390](https://github.com/anthropics/skills/issues/1390) says `mcp-builder` evaluation scores 0/N against real servers.
- **Agent quality and memory proposals.** [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory) and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gates).
- **Platform support.** [#29](https://github.com/anthropics/skills/issues/29) asks about use with AWS Bedrock.

## 3. High-Potential Pending Skills

These are the PRs most likely to land. They fix concrete bugs in official skills, and several map directly to open issues.

- [#1298](https://github.com/anthropics/skills/pull/1298): `skill-creator` trigger evals. It addresses [#556](https://github.com/anthropics/skills/issues/556) and [#1383](https://github.com/anthropics/skills/issues/1383), the highest-demand issue cluster.
- [#1742](https://github.com/anthropics/skills/pull/1742): `mcp-builder` mcp>=2 compatibility. It is small, scoped, and needed as users upgrade.
- [#1792](https://github.com/anthropics/skills/pull/1792): the `docx` timeout and verification fix. It has clear correctness value.
- [#1681](https://github.com/anthropics/skills/pull/1681): `package_skill.py` path fix. It is low-risk.
- [#1730](https://github.com/anthropics/skills/pull/1730): replaces dead URLs in `claude-api` and `academy-guide`. It is trivial to merge.

New third-party skills have a lower chance of merging soon. Examples are [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor), [#1703](https://github.com/anthropics/skills/pull/1703) (md2video-audio), and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc). Some PRs have waited since March, such as [#525](https://github.com/anthropics/skills/pull/525), [#514](https://github.com/anthropics/skills/pull/514), and [#486](https://github.com/anthropics/skills/pull/486). That suggests the maintainers favor fixes over new community skills.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on the reliability and trustworthiness of the skill tooling itself. That means `skill-creator` evals, bundled-skill bugs, and namespace and security guarantees, ahead of new domain skills.

---

# Claude Code Community Digest: 2026-10-06

## Today's Highlights

Two releases shipped within 24 hours. v2.1.291 is a quick hotfix for two regressions: cloud sessions dropping permission-prompt answers (from 2.1.290) and lost final messages on quit (from 2.1.288). The issue tracker is dominated by long-running pain points: idle auto-compaction (new in 2.1.286), Windows Desktop update and window-behavior bugs, and model-behavior complaints on Fable 5 and Opus 5.5. Weekly-limit consumption is also drawing attention.

## Releases

**[v2.1.291](https://github.com/anthropics/claude-code/releases/tag/v2.1.291)** (hotfix)
- Fixed a 2.1.290 regression where cloud sessions could drop answers to permission prompts.
- Fixed a 2.1.288 regression where the last messages of a session could be lost when quitting.

**[v2.1.290](https://github.com/anthropics/claude-code/releases/tag/v2.1.290)** (the release notes in the data are truncated)
- Added `serverToolUses` to the result of a mod's `turn.step` hook. It lists the tool calls the API ran itself (the advisor), each with id, name, input, start and end.
- Added `agentId` to the `tool.check` event of plugin hooks, so a hook can tell a subagent's permission check apart from the main agent's.

## Hot Issues

1. **[#98747](https://github.com/anthropics/claude-code/issues/98747): 2.1.286 idle compaction silently discards working context** (14 comments, 11 👍). Idle sessions are now compacted before the prompt cache expires, with no opt-out or warning. It's logged as "manual", so it's hard to audit. It also relates to [#66115](https://github.com/anthropics/claude-code/issues/66115), which asked for auto-compact on idle to save cache cost. The feature was apparently shipped, but users now want control over it.
2. **[#85891](https://github.com/anthropics/claude-code/issues/85891): Claude Desktop on Windows 11 stays always-on-top** (118 comments, 286 👍). This is the most-upvoted item in the set and has no setting to disable the behavior. Its macOS counterpart is #66516. The issue carries an `invalid` label, which the community clearly disputes.
3. **[#24726](https://github.com/anthropics/claude-code/issues/24726): VS Code setting to disable auto-attach of open file/selection** (89 comments, 260 👍). It's a long-standing privacy and context-control request that is still open eight months on.
4. **[#23134](https://github.com/anthropics/claude-code/issues/23134): Option to disable paste-text collapse** (52 comments, 143 👍). Users want to review pasted content before submitting instead of seeing `[Pasted text #N +X lines]`.
5. **[#65833](https://github.com/anthropics/claude-code/issues/65833): Scroll wheel sends arrow keys instead of scrolling (v2.1.150, WSL)** (48 comments, 116 👍). It's a TUI regression that cycles prompt history instead of scrolling, and it has stayed open since June.
6. **[#97398](https://github.com/anthropics/claude-code/issues/97398): Weekly usage limit drains ~3.6x faster after the Sep 25 reset** (11 comments). The reporter compares deduplicated local transcripts: about 93 responses per 1% now versus about 25 before. It's a cost-transparency concern worth watching for corroboration.
7. **[#67246](https://github.com/anthropics/claude-code/issues/67246): Safety classifier switches Fable 5 → Opus 4.8 on benign content, and `/model` can't override it** (16 comments). The silent downgrade interrupts workflows.
8. **[#74558](https://github.com/anthropics/claude-code/issues/74558): Fable 5 mid-turn text delivered as summarized thinking blocks** (21 comments). Turns appear silent, and the problem shows up in both on-disk transcripts and stream-json output, which affects SDK consumers.
9. **[#83932](https://github.com/anthropics/claude-code/issues/83932) and [#91763](https://github.com/anthropics/claude-code/issues/91763): Windows MSIX update failures** (23 and 18 comments). Auto-update deploys into a running `claude.exe`/CoworkVMService and fails with 0x80073CF9 or 0x80070020, leaving the app unlaunchable. #91763 identifies a `git fsmonitor--daemon` inheriting the AppX job as the root cause and offers a no-reboot workaround.
10. **[#95354](https://github.com/anthropics/claude-code/issues/95354): Session hangs after a PreToolUse hook returns (2.1.220, Windows)** (19 comments). The tool never dispatches. This is a hooks reliability problem.

**Also noteworthy:**
- [#60705](https://github.com/anthropics/claude-code/issues/60705) is the most-commented item (221 comments, now closed). It reports `/goal` Stop-hook directives being cited as authorization for unrequested actions.
- [#95455](https://github.com/anthropics/claude-code/issues/95455) reports that the 2.1.277 `excludedCommands` fix also drops single commands with pre-subcommand flags such as `git -C`.
- [#96326](https://github.com/anthropics/claude-code/issues/96326) reports replies drifting into English despite a CLAUDE.md Japanese rule.

## Key PR Progress

Only one PR was updated in the last 24 hours, so there are not 10 to list.

- **[#96434](https://github.com/anthropics/claude-code/pull/96434): security-guidance: keep denied and secret files out of the reviewer's reach** (by claude[bot], fixes #96276).
  - The security-guidance review no longer includes files covered by the session's `Read` deny/ask rules, or well-known secret files (`.env`, keys, credential stores).
  - The review sub-agent gets the same rules as `disallowed_tools` and no shell.
  - `SG_SKIP_SECRET_FILES=0` opts out of the secret-file skipping.

## Feature Request Trends

- **Control over automatic behavior.** Users want opt-outs for idle compaction ([#98747](https://github.com/anthropics/claude-code/issues/98747)), VS Code file auto-attach ([#24726](https://github.com/anthropics/claude-code/issues/24726)) and paste collapse ([#23134](https://github.com/anthropics/claude-code/issues/23134)). They also want to override the model switch ([#67246](https://github.com/anthropics/claude-code/issues/67246)).
- **Desktop customization.** Requests include custom themes and accent colors ([#79305](https://github.com/anthropics/claude-code/issues/79305), 44 👍) and an always-on-top toggle ([#85891](https://github.com/anthropics/claude-code/issues/85891)).
- **Workflow throughput.** The main request is a task queue for prompts ([#33323](https://github.com/anthropics/claude-code/issues/33323), 61 👍, marked duplicate).
- **Permissioned autonomy.** One request is an opt-in for typing test credentials in the user's own dev environments ([#78160](https://github.com/anthropics/claude-code/issues/78160)).
- **Model instruction adherence.** Users want better following of CLAUDE.md rules ([#13689](https://github.com/anthropics/claude-code/issues/13689), [#96326](https://github.com/anthropics/claude-code/issues/96326)).
- **Cost optimization.** The main request is idle-time cache handling ([#66115](https://github.com/anthropics/claude-code/issues/66115)).

## Developer Pain Points

- **Context loss.** Auto-compaction erases or degrades history without warning ([#7502](https://github.com/anthropics/claude-code/issues/7502), [#98747](https://github.com/anthropics/claude-code/issues/98747)). Release v2.1.291 also fixed a bug that lost the last messages on quit.
- **Windows Desktop and MSIX instability.** Update failures, processes blocking relaunch, always-on-top windows, and hook hangs ([#83932](https://github.com/anthropics/claude-code/issues/83932), [#91763](https://github.com/anthropics/claude-code/issues/91763), [#95354](https://github.com/anthropics/claude-code/issues/95354)).
- **TUI regressions.** These include scroll-wheel behavior, text selection and copy in the VS Code terminal ([#61021](https://github.com/anthropics/claude-code/issues/61021)), and duplicate tabs on Ctrl+click ([#76110](https://github.com/anthropics/claude-code/issues/76110)).
- **Model behavior and routing opacity.** Complaints cover silent classifier switches, thinking/text block mix-ups, rule drift, and unrequested actions.
- **Usage-limit uncertainty.** Users report sudden changes in the weekly consumption rate ([#97398](https://github.com/anthropics/claude-code/issues/97398)).
- **Plugin and tooling gaps.** Examples are LSP `lspServers` from marketplace.json not being processed ([#15148](https://github.com/anthropics/claude-code/issues/15148), 73 👍), `opusplan` rows missing from the model picker ([#89690](https://github.com/anthropics/claude-code/issues/89690)), and sandbox `excludedCommands` regressions ([#95455](https://github.com/anthropics/claude-code/issues/95455)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-06

## 1. Today's Highlights

No new releases landed in the last 24h. Activity centered on the V2 migration (todo tools, config schema, changelog gaps, legacy API key metadata) and a wave of "OpenCode's free tier can only be used from within OpenCode" errors that hit many users on Desktop. Maintainer `nexxeln` also pushed a batch of ACP (Agent Client Protocol) compliance fixes.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#33356](https://github.com/anomalyco/opencode/issues/33356): Unbounded growth of the `event` table (opencode.db hits 13GB+)**. The most-discussed issue (39 comments, 13 👍). Event-sourced `message.updated` snapshots are never pruned, filling disks on long-lived instances. It needs a retention or compaction policy.
2. **[#52912](https://github.com/anomalyco/opencode/issues/52912) / [#52905](https://github.com/anomalyco/opencode/issues/52905) / [#52904](https://github.com/anomalyco/opencode/issues/52904): "Free tier can only be used from within OpenCode"**. At least 3 duplicates from 2026-10-03, plus the earlier [#49925](https://github.com/anomalyco/opencode/issues/49925). Desktop 2.0.22 users on Windows are blocked even though they use the official app. Several of the reports are closed, but the problem is widespread.
3. **[#4714](https://github.com/anomalyco/opencode/issues/4714): TUI search within the session buffer**. A long-standing request (37 comments, 60 👍), the highest vote count among the open items. The Desktop equivalent is [#19143](https://github.com/anomalyco/opencode/issues/19143) (Cmd/Ctrl+F).
4. **[#15533](https://github.com/anomalyco/opencode/issues/15533): Auto-compaction infinite loop after the assistant ends its turn**. Compaction injects a synthetic "Continue..." message even when the turn finished naturally, causing loops. It is likely related to the "Continuing after restart" report in [#53307](https://github.com/anomalyco/opencode/issues/53307).
5. **[#42421](https://github.com/anomalyco/opencode/issues/42421): [2.0] `todowrite`/`todoread` tools missing in V2**. This is a V1→V2 parity regression. The model can no longer manage the TUI todo list.
6. **[#43748](https://github.com/anomalyco/opencode/issues/43748): [2.0] The published config schema rejects documented V2 fields**. It has 23 👍. Valid V2 configs (skills, mcp.*, permissions) are flagged as errors in editors. See also [#52184](https://github.com/anomalyco/opencode/issues/52184), where V2 has no published release notes (16 👍).
7. **[#52878](https://github.com/anomalyco/opencode/issues/52878): OpenAI models dropped when connected via ChatGPT OAuth**. Models released after the bundled build are missing from the catalog because account results are reconciled against models.dev.
8. **[#39829](https://github.com/anomalyco/opencode/issues/39829): Responses API support for deepseek-v4-flash on opencode-go**. 30 👍, closed. It shows strong demand for new provider endpoints.
9. **[#28089](https://github.com/anomalyco/opencode/issues/28089): Leaked `.so` temp files in /tmp consume hundreds of GB**. A resource-leak bug on Linux, still open.
10. **[#36889](https://github.com/anomalyco/opencode/issues/36889) and [#52269](https://github.com/anomalyco/opencode/issues/52269): Intermittent Go/OpenAI service outages**. These cover 503/524 errors on `zen/go/v1` and upstream connection resets on OpenAI. Related trust concern: [#39875](https://github.com/anomalyco/opencode/issues/39875) (49 👍, closed) asked to restore Go privacy wording and add telemetry and retention to the privacy policy.

## 4. Key PR Progress

1. **[#53539](https://github.com/anomalyco/opencode/pull/53539)**: `feat(core)`: adds a `plan.directory` config so the Plan agent isn't limited to the hard-coded `~/.opencode/plan`.
2. **[#53541](https://github.com/anomalyco/opencode/pull/53541)**: Migrates legacy V1 API key metadata (e.g. Azure `resourceName`) into V2 `configuration`. Fixes #53443.
3. **[#53536](https://github.com/anomalyco/opencode/pull/53536)**: Strips unclosed or stray `<think>` tags in auto-generated session titles. This helps small local reasoning models.
4. **[#51996](https://github.com/anomalyco/opencode/pull/51996)**: `perf(core)`: speeds up snapshot capture, which added 153–363 ms of Git work per step. It roughly halves the cost and makes capture self-healing after crashes or concurrent runs.
5. **[#53534](https://github.com/anomalyco/opencode/pull/53534)**: ACP fix that rejects a mismatched fork `cwd` and resolves overlapping provider IDs, which previously failed with `-32602`.
6. **[#53359](https://github.com/anomalyco/opencode/pull/53359)** (closed): ACP spec compliance for relative `cwd`, cancel, delete and terminal auth.
7. **[#53360](https://github.com/anomalyco/opencode/pull/53360)** and **[#53358](https://github.com/anomalyco/opencode/pull/53358)** (closed): ACP tool names with full-file diffs, and waiting for plugins before the first catalog read.
8. **[#51337](https://github.com/anomalyco/opencode/pull/51337)**: Loads admin-managed config directories and macOS managed preferences, restoring V1 behavior.
9. **[#52185](https://github.com/anomalyco/opencode/pull/52185)**: Answers CORS preflight on every Zen API route. It currently covers only the model-list routes.
10. **[#53522](https://github.com/anomalyco/opencode/pull/53522)**: Adds a floating header strip with a copy button to long markdown code blocks. Also noted: [#46112](https://github.com/anomalyco/opencode/pull/46112) upgrades OpenTUI for Bengali grapheme width.

## 5. Feature Request Trends

- **Session navigation and search**: Find-in-buffer for the TUI ([#4714](https://github.com/anomalyco/opencode/issues/4714)) and Desktop ([#19143](https://github.com/anomalyco/opencode/issues/19143)).
- **V2 parity**: Todo tools, a correct config schema, and release notes.
- **Provider and API coverage**: The Responses API for DeepSeek, and up-to-date OpenAI catalogs under OAuth.
- **Plugin and permission control**: A `skip` field in `tool.execute.before` ([#52837](https://github.com/anomalyco/opencode/issues/52837)) and a configurable auto-approve keybind ([#40331](https://github.com/anomalyco/opencode/issues/40331)).
- **Transparency**: Clearer privacy, telemetry and retention policy.

## 6. Developer Pain Points

- **Storage and resource bloat**: A 13GB event table and leaked `/tmp` `.so` files.
- **Free-tier and provider errors**: Confusing "free tier" rejections and intermittent 503/524/upstream failures.
- **Compaction and session stability**: Compaction loops and endless "Continuing after restart" states.
- **V2 migration gaps**: Missing tools, schema mismatch, undocumented releases, and legacy credential metadata.
- **Enterprise environments**: Windows ignoring `NODE_EXTRA_CA_CERTS` ([#17798](https://github.com/anomalyco/opencode/issues/17798)), and MCP OAuth failing to open a browser ([#26195](https://github.com/anomalyco/opencode/issues/26195)).
- **Integration quirks**: ACP clients such as Xcode ignoring the configured model ([#34743](https://github.com/anomalyco/opencode/issues/34743)), and a web UI CSP that blocks `blob:` iframes ([#50828](https://github.com/anomalyco/opencode/issues/50828)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
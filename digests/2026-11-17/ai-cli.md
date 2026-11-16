# AI CLI Tools Community Digest 2026-11-17

> Generated: 2026-11-16 16:42 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report: 2026-11-17

Scope: this digest covers only two tools, Claude Code and OpenCode. The comparisons below are limited to them and can't be generalized to the wider market.

## 1. Ecosystem Overview

Both communities are in a quiet, issue-driven period, with no releases in the last 24h. The conversation has moved from features to **cost, quota and usage transparency**, and each tool's top issues are about how consumption is metered and capped. Regressions in newer builds (Cowork/cloud for Claude Code, 2.3.0 for OpenCode) dominate the bug reports. The two tools differ in structure. Claude Code is a vendor-integrated product tied to subscription plans and cloud and desktop surfaces. OpenCode is a multi-provider, open-source tool with its own free and Go tiers and heavy contributor PR activity.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | None | None |
| Issues highlighted | 10 hot, plus 2 "also notable" | 10 hot |
| PRs highlighted | 1 (#78049, closed) | 10 key, plus 2 "also notable" |
| Top-engagement item | #60705, 304 comments (closed); #47509, 201 👍 | #59387 free-tier megathread, 378 comments |
| Main activity theme | Usage accounting, Cowork/cloud regressions | 2.3.0 regressions, free/Go plan issues, Code Mode and MCP work |

Caveat: these counts are the items each digest chose to feature, not totals for the day. They show relative emphasis, not true volume.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Cost and usage transparency** | Hard spend caps (#85422), accurate `/usage` (#91775), headless vs. interactive discrepancy (#97074) | Exact reset times (#52894), catalog-price estimates for $0-reported providers (#59861), shared Go limits contradicting the docs (#60311) |
| **Billing and plan flexibility** | A higher Team tier (#47509) | Crypto payment for Go (#23153, closed) |
| **Permissions and safety** | "Always allow" ignored in Cowork (#47180), actions beyond authorization (#60705) | Silent external-directory writes (#54524), MCP OAuth token invalidation (#60612, fixed) |
| **UI and ergonomics control** | Enter/Ctrl+Enter option (#89673), persistent Transcript view (#76577) | Legacy sidebar (#48882), font size and line height (#54499) |
| **Remote and multi-environment workflows** | Multi-repo remote sessions (#23627), GitLab (#12346) | SSH crash (#64184), ACP/IDE streaming (#54371) |
| **Platform stability** | Windows kernel leak (#96870), Wayland fd leak (#98725) | Windows console flashing (#52266), Nix hash mismatches (#59882) |

## 4. Differentiation Analysis

- **Business model.** Claude Code's issues are about subscription tiers, 5-hour windows and Team seats. OpenCode's are about a free tier and a Go plan with shared limits and possibly misleading messages. Neither community trusts its metering.
- **Surface area.** Claude Code is expanding across Desktop, Cowork scheduled tasks, cloud sessions, Chrome bridge and Remote Control, so its bugs involve a git proxy, permissions and OAuth. OpenCode is focused on the TUI/CLI and desktop, plus ACP/IDE integration and a native CLI port (#63477).
- **Technical direction.** OpenCode's PRs show architectural work: shell as a Code Mode tool (#64256), experimental MCP Skills (#64157), a desktop browser pane (#63002), and a v2 plugin model. Claude Code's visible PR activity is a single Intune policy fix (#78049), which says little about its internal development. The digest likely understates vendor-side work that isn't done in public PRs.
- **Contribution model.** OpenCode's community is shipping fixes (for example #64251 for the zombie processes). Claude Code's community mostly files issues and feature requests, and the digest notes a sweep that closed older issues, some as stale.
- **Target users.** Claude Code serves subscription users, teams and enterprise (Intune/MDM, Team plan), including CI users. OpenCode serves model-agnostic users, including free-tier and Go-plan users and Nix, Android and SSH setups.

## 5. Community Momentum & Maturity

- **OpenCode** looks like the faster-iterating project in this snapshot. It has many open PRs spanning bug fixes and features, and quick responses to its 2.3.0 regressions (a fix for the zombie leak was already in PR). The v2 migration is creating gaps, such as missing plugin APIs and a removed custom provider option.
- **Claude Code** has the larger demand signal per issue, with 100–200+ 👍 on several items and a 304-comment closed thread. That is more engagement than the OpenCode threads, though the 378-comment free-tier megathread is the largest single item in either digest. Its issue lifecycle shows maintenance strain: several long-standing requests are closed as stale, and the `/context` verbosity complaint has been refiled at least four times. Treat the 304-comment thread (#60705) and the stale-closure sweep as signals about triage, not as proof of quality.
- Both show a mature user base whose complaints concern operations (billing, quotas, permissions) rather than basic functionality.

## 6. Trend Signals

1. **Metering is now a product feature.** Both communities want spend caps, accurate stats and predictable resets. Developers should check how a tool accounts for headless, CI and shared-limit use before committing to it. #97074 suggests headless mode costs more.
2. **Agent autonomy needs enforceable permissions.** Complaints about ignored "Always allow" settings, silent writes outside the worktree, and directives treated as authorization show that safety defaults are still unreliable. Teams running unattended agents should audit permission behavior themselves.
3. **Remote, cloud and multi-repo work is the growth area, and also the least stable.** Git proxy blocks, Remote Control failures, SSH crashes and ACP streaming gaps all fall here. Expect churn, and pin versions for production workflows.
4. **Extensibility and protocol work is converging.** MCP (Skills, OAuth) and plugin APIs are central to OpenCode's roadmap. MCP OAuth refresh bugs affect real integrations.
5. **Practical guidance.** For cost predictability and cloud features inside one vendor's ecosystem, Claude Code fits better, but weigh its open usage-accounting questions. For provider flexibility and open contribution, OpenCode fits better, but expect regressions around major version changes (2.3.0) and v2 migration.

Limits of this analysis: it rests on two community digests for one day, uses featured items rather than complete counts, and doesn't cover the other tools the wider project tracks.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-17)

**Data caveat:** every PR's comment count came through as `undefined`, and all 👍 counts are 0. The PR ranking below is therefore based on the list order supplied, issue linkage and recent activity, not verified comment volume. Issue comment counts are intact. All 20 PRs shown are still open, and none are merged or draft.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|----|----|----|----|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder fix | Supports the `mcp>=2` rename to `streamable_http_client` and the new custom-header mechanism. | Fixes #1668. It is a compatibility break caused by an upstream SDK change. Last updated 2026-10-08. | Open |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger evals | Isolates trigger evals, fixes `select()` on Windows pipes, and stops runtime failures counting as non-triggers. | It addresses the eval-accuracy bugs in issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). Opened in June and still unmerged. | Open |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing | Removes `shell=True` from `with_server.py` (CWE-78 command injection). | It is a security hardening change. Updated 2026-11-01. | Open |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) docx accept_changes | Reports a LibreOffice timeout as an error. It claims success only after confirming no revision marks remain. | It removes a false-success path. Updated 2026-11-01. | Open |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) xlsx recalc | Resolves worksheet-scoped defined names and aliases in `external_links_at_risk`. | Fixes #2013, which was false negatives on indirect external references. | Open |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | Adds a retro-game development skill. It covers headless runs, frame inspection and state checks. | It is one of the longest-lived community skill submissions, from March, and was updated 2026-11-01. | Open |
| 7 | [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation | Turns product or tech specs into Notion tasks with acceptance criteria. It is bundled with a resume-auditor skill. | It is workflow automation. Bundling two skills in one PR may slow review. | Open |
| 8 | [#1997](https://github.com/anthropics/skills/pull/1997) skill-creator YAML parsing | Replaces hand-rolled frontmatter parsing with correct YAML scalar handling. | Eval and optimization commands currently receive metadata that differs from `SKILL.md`. | Open |

## 2. Community Demand Trends (Issues)

1. **Reliable skill-creation and eval tooling.** This is the strongest signal.
   - [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍) reports a 0% trigger rate from `claude -p`.
   - [#1352](https://github.com/anthropics/skills/issues/1352) reports parallel workers cross-matching skill UUIDs.
   - [#202](https://github.com/anthropics/skills/issues/202) asks for skill-creator best practices and token efficiency.
2. **Trust, provenance and security.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed item (46 comments). It concerns community skills distributed under the `anthropic/` namespace and the resulting trust-boundary abuse. [#412](https://github.com/anthropics/skills/issues/412) proposed agent-governance patterns, and PR #1980 hardens shell execution.
3. **Context and token efficiency.**
   - [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects about 156k tokens in a single call.
   - [#189](https://github.com/anthropics/skills/issues/189): document-skills and example-skills install duplicate content.
   - [#2064](https://github.com/anthropics/skills/issues/2064): descriptions need to say when to use a skill, not only what it does.
4. **Agent quality and memory skills.** [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory, and [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline (calibration, adversarial review, delivery verification).
5. **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing in Claude.ai.
6. **Document-skill robustness.** [#2018](https://github.com/anthropics/skills/issues/2018) (docx `merge_runs.py` writes invalid XML) and [#1868](https://github.com/anthropics/skills/issues/1868) (slack-gif-creator gradient off by one) show active bug-hunting.
7. **Off-topic reports.** [#1143](https://github.com/anthropics/skills/issues/1143) (change account email, 18 👍, the highest in the set) and [#62](https://github.com/anthropics/skills/issues/62) (skills disappeared) are product or support issues. They are not skill requests.

## 3. High-Potential Pending Skills

These are small, well-scoped fixes tied to a filed issue, which are the likeliest to merge:

- [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder `mcp>=2` fix. It is a breaking-SDK compatibility fix with a clear issue (#1668).
- [#1298](https://github.com/anthropics/skills/pull/1298) and [#1997](https://github.com/anthropics/skills/pull/1997) fix the skill-creator evals, which have multiple open issues behind them.
- [#1980](https://github.com/anthropics/skills/pull/1980) removes a CWE-78 vulnerability.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#2019](https://github.com/anthropics/skills/pull/2019) are narrow docx and xlsx correctness fixes.
- [#1950](https://github.com/anthropics/skills/pull/1950) is a docs update to the claude-api `pause_turn` guidance, tracking Python SDK 1.1.0.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) are one-line fixes, each linked to an issue (#1809, #1891, #1897).

Lower odds: net-new third-party skills ([#1771](https://github.com/anthropics/skills/pull/1771) proofcore, [#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio, [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc, [#514](https://github.com/anthropics/skills/pull/514) document-typography). Several have sat since spring or summer with little maintainer response.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing skills trustworthy and reliable: working skill-creator evals, secure scripts, correct document tooling and clear provenance. It is not asking for new domain skills.

---

# Claude Code Community Digest: 2026-11-17

## Today's Highlights
No new releases shipped in the last 24h. Activity centered on usage and cost: headless `claude -p` appears to burn the 5-hour window about 1.8× faster than interactive mode (#97074), and users are asking for a higher Team plan tier (#47509) and hard spend caps (#85422). Cowork and cloud sessions also had several reports of permission and git-push regressions. Many older issues were closed in a sweep, including several `stale`-labeled ones.

## Releases
No new releases in the last 24h.

## Hot Issues

1. **[#97074](https://github.com/anthropics/claude-code/issues/97074): headless `claude -p` consumes ~1.8× more of the 5-hour window per token than interactive `cli`.** It has a repro, 76 comments and 175 👍, the most upvoted bug in the batch. It matters for anyone running CI or automation on subscription plans. Users suspect an entrypoint-specific accounting difference.
2. **[#47509](https://github.com/anthropics/claude-code/issues/47509): Team plan needs a Max 20x-equivalent tier.** It has 75 comments and 201 👍. Premium seats (6.25× Pro) don't cover power users running agentic workflows, who currently buy individual Max 20x subscriptions instead.
3. **[#76248](https://github.com/anthropics/claude-code/issues/76248): the Cloud/Cowork git proxy blocks all pushes outside the "authorized repository set".** It has 42 comments. Since about July 10, even user-supplied fine-grained PATs fail, which breaks a previously working workflow. A `CCR_TEST_GITPROXY` rollout is suspected.
4. **[#47180](https://github.com/anthropics/claude-code/issues/47180): Cowork scheduled tasks ignore "Always allow" permissions on macOS.** It has 41 comments and 48 👍. Prompts reappear on every run, which defeats unattended scheduling.
5. **[#12346](https://github.com/anthropics/claude-code/issues/12346): GitLab integration (repo connection, MRs, mobile access).** It is nearly a year old, with 62 comments and 155 👍. It remains a persistent gap for non-GitHub teams.
6. **[#89673](https://github.com/anthropics/claude-code/issues/89673): Desktop composer option for Enter = newline, Ctrl+Enter = submit.** It has 117 👍. `keybindings.json` apparently doesn't cover the Desktop composer.
7. **[#85422](https://github.com/anthropics/claude-code/issues/85422): token-burn circuit breaker with runtime-enforced spend caps.** It asks for per-source attribution (hooks, plugins, subagents) and caps that stop runaway usage rather than just warn. It ties into the cost concerns above.
8. **[#23627](https://github.com/anthropics/claude-code/issues/23627): multi-repository support for remote/web sessions.** It has 90 👍 and complements the Cowork repo-authorization problem in #76248.
9. **[#91775](https://github.com/anthropics/claude-code/issues/91775): the `/usage` Stats tab counts `message.usage` per transcript row instead of per `message.id`.** Token totals are inflated roughly 2×. This undermines users' ability to audit their own consumption.
10. **[#96870](https://github.com/anthropics/claude-code/issues/96870): Windows MSIX Desktop leaks kernel nonpaged pool.** The leak happens when spawned processes open paths through an AppData junction, which is a `bindflt.sys` bug. It has a repro and could destabilize Windows machines over time.

Also notable:
- **[#60705](https://github.com/anthropics/claude-code/issues/60705)**, now closed, had 304 comments. It reports `/goal` Stop-hook directives being treated as authorization for unrequested actions.
- **[#66056](https://github.com/anthropics/claude-code/issues/66056)** reports a right-click paste regression since about v2.1.167. Mouse reporting captures the click.

## Key PR Progress
Only one PR was updated in this window, so I can't list 10:

- **[#78049](https://github.com/anthropics/claude-code/pull/78049) (closed): fix(mdm) `Set-ClaudeCodePolicy.ps1`.** The script built its destination from `$env:ProgramFiles`. Intune runs platform scripts in a 32-bit PowerShell host by default, so the policy was written to `Program Files (x86)`. The PR fixes this, and the header only documented the 64-bit setting without enforcing it.

## Feature Request Trends
- **Cost controls and visibility.** Requests include hard spend caps (#85422), a higher Team tier (#47509), and accurate `/usage` stats (#91775). Analytics API coverage for subscription/OAuth users is also requested ([#27780](https://github.com/anthropics/claude-code/issues/27780)).
- **Cloud, remote and multi-repo workflows.** These include multi-repo remote sessions (#23627), GitLab support (#12346), and portable project memory across machines ([#25739](https://github.com/anthropics/claude-code/issues/25739)).
- **Desktop and TUI ergonomics.** Examples are configurable Enter/Ctrl+Enter behavior (#89673), persisting Transcript view mode ([#76577](https://github.com/anthropics/claude-code/issues/76577)), and a more compact `/context` ([#64996](https://github.com/anthropics/claude-code/issues/64996)).
- **Sandbox and platform capability.** GPU passthrough in sandbox mode ([#13108](https://github.com/anthropics/claude-code/issues/13108)) is the main example.
- **Scheduling and automation.** Timezone-aware cron for triggers ([#50529](https://github.com/anthropics/claude-code/issues/50529)) and a documented session JSONL schema ([#53516](https://github.com/anthropics/claude-code/issues/53516)) are both requested.

## Developer Pain Points
- **Opaque usage accounting.** Headless vs. interactive discrepancies (#97074), inflated `/usage` totals (#91775), and no way to cap runaway spend (#85422) leave users unable to trust or control consumption.
- **Cowork and cloud regressions.** Git pushes are blocked (#76248), "Always allow" permissions are ignored (#47180), and Remote Control fails to re-attach with an HTTP 400 ([#107503](https://github.com/anthropics/claude-code/issues/107503)).
- **Windows and Desktop stability.** There are kernel pool leaks (#96870), a Chrome bridge returning 403 "OAuth token forbidden" ([#107922](https://github.com/anthropics/claude-code/issues/107922)), and a Linux/Wayland renderer leaking `/dev/shm` file descriptors until the window freezes ([#98725](https://github.com/anthropics/claude-code/issues/98725)).
- **Model behavior trust.** Users report acting beyond authorization and invented process consuming usage (#60705, [#76987](https://github.com/anthropics/claude-code/issues/76987)). A report of possible cross-session leakage ([#74066](https://github.com/anthropics/claude-code/issues/74066)) was also closed as stale.
- **Terminal regressions.** Right-click paste broke after mouse reporting changes (#66056).
- **Recurring requests closed without resolution.** The `/context` verbosity complaint has been filed at least four times (#64996).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-17

## 1. Today's Highlights

No new releases in the last 24h. Activity centers on 2.3.0 regressions (zombie processes under `opencode-pty`, TUI crash on SSH disconnect) and ongoing free-tier and Go-plan usage problems. Maintainers and contributors are also pushing a batch of fixes (ACP streaming, Bedrock content filter, shell scanning) and new work on Code Mode, MCP Skills and the desktop browser pane.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (378 comments, 👍28). It is the central place for "Free usage exceeded" errors and resets that never happen. It is the most-commented item by a wide margin and signals ongoing instability in the free tier.
2. **[#48882](https://github.com/anomalyco/opencode/issues/48882) Restore the legacy UI with the persistent left sidebar** (46 comments, 👍47). Users object to the sidebar redesign and want the classic two-panel layout back as an option.
3. **[#23153](https://github.com/anomalyco/opencode/issues/23153) Pay Go with crypto** (closed, 36 comments, 👍69). It has the most upvotes in the set. It shows demand for more payment options for the Go subscription.
4. **[#50155](https://github.com/anomalyco/opencode/issues/50155) DeepSeek V4 Flash requires Global regions, but the Privacy setting is missing** (26 comments). Paid Go users are blocked on this model because there is no way to select the region.
5. **[#63817](https://github.com/anomalyco/opencode/issues/63817) pty: shell commands leave zombies under the opencode-pty daemon (2.3.0)**. This is a regression from 2.2.7. PRs #64251 and #64240 target it.
6. **[#64184](https://github.com/anomalyco/opencode/issues/64184) TUI crashes with uncaught EIO on SSH disconnect (2.3.0)**. A graceful-shutdown failure that hits remote and SSH workflows.
7. **[#60612](https://github.com/anomalyco/opencode/issues/60612) MCP: concurrent OAuth refreshes invalidate rotating refresh tokens** (closed, severity:high). It broke credentials for Grafana Cloud and Buildkite MCP servers and has been fixed.
8. **[#43250](https://github.com/anomalyco/opencode/issues/43250) `keep.tokens` not honoured in compaction** (10 comments). Agent-driven sessions carry about 234K tokens against a 15K setting, which raises cost and context pressure.
9. **[#54524](https://github.com/anomalyco/opencode/issues/54524) Built-in `external_directory` ask never prompts** (👍9). A security-relevant permissions gap: writes outside the worktree succeed silently under default permissions.
10. **[#60311](https://github.com/anomalyco/opencode/issues/60311) Go usage limits are shared across models, not per-model as documented** (👍4). A docs and billing-expectation mismatch. It relates to #59861, where $0 cost reporting hides spend for Go sessions.

## 4. Key PR Progress

1. **[#64251](https://github.com/anomalyco/opencode/pull/64251) Reap finished shell commands at exit.** Fixes the 2.3.0 zombie leak in `opencode-pty`. It supersedes #64240.
2. **[#64256](https://github.com/anomalyco/opencode/pull/64256) Make shell a Code Mode tool.** Shell is no longer a top-level model tool and is called from scripts inside `execute`.
3. **[#64157](https://github.com/anomalyco/opencode/pull/64157) Experimental MCP Skills support.** Adds support for the MCP ext-skills spec.
4. **[#63002](https://github.com/anomalyco/opencode/pull/63002) Signed-in desktop browser pane.** Adds extensions, previews, prompts and agent safeguards. A companion security PR, #63614, which honors browser deny rules, was closed, as was #63611 on cookie encryption.
5. **[#64262](https://github.com/anomalyco/opencode/pull/64262) Stream ACP turns woken by background shells.** Related to the ACP slash-command output problem in #54371.
6. **[#64260](https://github.com/anomalyco/opencode/pull/64260) Drop Bedrock tool calls when the content filter stops the reply.** Prevents tools from running after `content_filtered` or `guardrail_intervened`.
7. **[#64263](https://github.com/anomalyco/opencode/pull/64263) Keep unknown ANSI-C escapes per shell.** Fixes the shell scanner rejecting valid `$'...'` strings.
8. **[#64259](https://github.com/anomalyco/opencode/pull/64259) Case-insensitive session title search beyond ASCII.** Fixes SQLite `LIKE` limits for non-ASCII titles.
9. **[#61328](https://github.com/anomalyco/opencode/pull/61328) Restore doom-loop detection as an internal plugin for v2.** Under design review.
10. **[#63477](https://github.com/anomalyco/opencode/pull/63477) CLI: port to native.** A large architectural effort, with a preview repo linked in the PR.

Also notable:
- [#64258](https://github.com/anomalyco/opencode/pull/64258) adds a typed i18n layer for the TUI. It was closed, as was the Chinese localization PR #64248.
- [#54499](https://github.com/anomalyco/opencode/pull/54499) adds font size and line height settings for desktop.

## 5. Feature Request Trends

- **Free and Go plan transparency:** exact reset times ([#52894](https://github.com/anomalyco/opencode/issues/52894)), catalog-price estimates for $0-reported providers ([#59861](https://github.com/anomalyco/opencode/issues/59861)), crypto payments.
- **UI choice:** a legacy sidebar layout ([#48882](https://github.com/anomalyco/opencode/issues/48882)), adjustable font size.
- **Plugin extensibility in v2:** exposing the TUI composer to plugins ([#51209](https://github.com/anomalyco/opencode/issues/51209)).
- **TUI i18n:** [#37216](https://github.com/anomalyco/opencode/issues/37216), with two competing PRs closed.
- **Model features:** display of Claude "progress update" thinking blocks ([#55298](https://github.com/anomalyco/opencode/issues/55298)); custom provider option missing ([#59603](https://github.com/anomalyco/opencode/issues/59603)).

## 6. Developer Pain Points

- **Free-tier and quota confusion:** misleading limit messages, resets that never happen, and shared Go limits that contradict the docs. Subscription-sharing errors also appear on the ChatGPT side ([#62529](https://github.com/anomalyco/opencode/issues/62529)).
- **2.3.0 regressions:** zombie processes, SSH-disconnect crashes, and `opencode upgrade` via npm using `--force` and pulling about 2GB of optional dependencies ([#63743](https://github.com/anomalyco/opencode/issues/63743)).
- **v2 migration gaps:** missing plugin APIs, the custom provider option gone, and compaction ignoring `keep.tokens`.
- **Platform issues:** Windows console windows flashing about once per second ([#52266](https://github.com/anomalyco/opencode/issues/52266)), Nix hash mismatches ([#59882](https://github.com/anomalyco/opencode/issues/59882)), and Android incompatibility ([#63791](https://github.com/anomalyco/opencode/issues/63791)).
- **ACP and IDE integration:** slash command output is not streamed ([#54371](https://github.com/anomalyco/opencode/issues/54371)).
- **Permissions and security surprises:** silent external-directory writes and MCP OAuth token invalidation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
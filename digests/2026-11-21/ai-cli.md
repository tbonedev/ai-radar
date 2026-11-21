# AI CLI Tools Community Digest 2026-11-21

> Generated: 2026-11-21 15:03 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report: 2026-11-21

Scope: Claude Code and OpenCode only. The digests do not cover other tools, so none of this should be read as a view of the whole field.

## 1. Ecosystem Overview

Both communities show a market past the feature-race stage. Discussion is now mostly about **quota and billing fairness, session reliability and agent safety**. Vendor-owned Claude Code is moving toward enterprise governance (Admin Console sign-in in v2.1.330). OpenCode is open and multi-provider, and is dealing with a major V2 rewrite and a free-tier quota problem. Windows and desktop quality is a shared weak spot. Stale-bot closures and regressions are eroding trust in both.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Release today | **v2.1.330** (enterprise sign-in, "easel" charting mod; notes truncated) | None in 24h |
| Issues in digest | 10 hot items, plus about 10 more cited | 10 hot items, plus about 10 more cited |
| Top issue by comments | #60705 `/goal` behavior (314, closed) | #59387 free-tier megathread (403+) |
| Top issue by 👍 | #47509 Team Max-20x tier (203) | #23153 crypto payment (73, closed) |
| PRs updated in 24h | 3 (low, and mostly symbolic or historical) | 10+ listed, mostly Windows desktop and V2 fixes |
| PR character | Security hardening (#111198), community PR for open-sourcing (#41447) | Feature and fix flow (toasts, jump list, drag-and-drop, subagent revert, DeepSeek recovery) |
| Pending promotion | None noted | dev → production PR (#64784) |

The issue counts come from the digest's top-10 lists, not from totals. They show what each digest highlighted, not overall volume. Claude Code's PR activity is thin because most of its development is not public, so PR counts are a weak activity signal there.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Transparent quota, billing and plan options** | Higher Team tier (#47509), pooled usage (#92517), clearer billing labels (#67083) | Free-tier megathread (#59387), crypto payments (#23153) |
| **Session and context continuity** | State that survives compaction and `/clear` (#70555) | Sessions resuming after restart (#54180), lost tabs (#64591), TUI reset after sleep (#60839) |
| **Desktop ergonomics** | Scroll-only mouse mode (#70539), one-click effort selector (#102095) | Message pinning (#55195), folder creation in the project picker (#54847), MCP Apps (#10884) |
| **Agent and subagent control** | Hook and permission edge cases (#68951, #50842) | Foreground subagents (#64073), permissions and sandboxing (#48411) |
| **Extensibility** | Hooks, MCP and channels | V2 GUI and text-transform plugins (#60976, #53019) |

## 4. Differentiation Analysis

- **Target users.** Claude Code serves individual power users and enterprises, with plan tiers (Pro, Max, Team) and Admin Console governance. OpenCode serves cost-sensitive and multi-provider users, with a free tier, Go payments, local models (Ollama), custom endpoints and ChatGPT login.
- **Technical approach.** Claude Code is a closed, vendor-integrated stack. It has tightly coupled desktop, Cowork and VS Code surfaces, embedded native tools (a ugrep wrapper), and a built-in mod system ("easel"). OpenCode is an open, provider-agnostic client/server architecture with web and desktop frontends, and its V2 rewrite is the source of regressions.
- **Dominant failure modes.** Claude Code's are accounting and billing anomalies, plus model-behavior and safety questions (`/goal` overreach). OpenCode's are server OOM, provider compatibility, and Windows and DPI issues.
- **Safety framing.** Claude Code's concern is model-side action beyond the user's request. OpenCode's is advisory-only permission restrictions that can be bypassed (#51071, #54044).

## 5. Community Momentum & Maturity

- **Claude Code.** It has deep engagement per thread (314 comments, 203 👍) and shipped a release today. However, only 3 PRs were updated, and heavy use of stale-bot closures is generating friction. It is a mature product with an opaque development process.
- **OpenCode.** It has the higher daily change flow, with about 10 PRs in a day, a release promotion pending, and one megathread above 400 comments. It is iterating fast, but V2 gaps (foreground subagents, plugins, state recovery) show it is still stabilizing.
- **Judgment.** Claude Code has the stronger enterprise maturity, and OpenCode has the stronger visible, open iteration. Neither digest supports ranking overall community size.

## 6. Trend Signals

1. **Usage-limit transparency is now a primary competitive axis.** Both communities have long threads on quotas and resets. Developers should check metering clarity and limit-reset behavior before standardizing on a tool.
2. **Agent safety is moving from prompts to enforcement.** Claude Code's `/goal` case and OpenCode's bypassable deny rules both show that prompt-level restrictions are insufficient. Prefer tools with hard permission boundaries, and add your own sandboxing.
3. **Long-session state is the next reliability frontier.** Compaction, resume and restart-correctness requests appear in both tools.
4. **Desktop and Windows parity matters.** Both tools show Windows-specific defects, so teams on Windows should pilot before rollout.
5. **Local and open-model support is a differentiator.** OpenCode's Ollama, DeepSeek and custom-endpoint work contrasts with Claude Code's vendor-bound approach, though it also brings more compatibility bugs.
6. **Governance and enterprise integration.** Claude Code's Admin Console sign-in points to central policy control becoming standard for team deployments.

**Recommendation.** Choose Claude Code when enterprise governance and a managed stack matter, and budget for quota monitoring. Choose OpenCode when provider flexibility, local models or cost control matter, and expect V2 churn. In both cases, pin versions and test long-running sessions before wider rollout.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (as of 2026-11-21)

**Data caveat:** every PR in the feed shows `Comments: undefined` and 0 👍. The PR ranking below is therefore **not** by comment count. I ranked by theme, how recently each PR was updated, and whether it is tied to a tracked issue. Issue counts are real.

## 1. Top Skills Ranking (PRs)

All of these are **OPEN**. None is merged or draft.

| # | PR | What it does | Highlights | Status |
|---|----|--------------|-----------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger evals | Isolates trigger evals, fixes the Windows `select()` pipe failure, and stops runtime failures from counting as non-triggers | Addresses the false-negative trigger-rate bugs in [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352), the most-discussed technical problem in the repo. Updated 2026-09-16. | Open |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder | Supports the `mcp>=2` rename to `streamable_http_client` and custom headers via `http_client` | Compatibility fix for the MCP SDK major version. Fixes #1668. Updated 2026-10-08. | Open |
| 3 | [#1681](https://github.com/anthropics/skills/pull/1681) skill-creator `package_skill.py` | Fixes `ModuleNotFoundError` on direct execution and corrects the usage paths | Most recently updated of the group (2026-11-19). | Open |
| 4 | [#1997](https://github.com/anthropics/skills/pull/1997) skill-creator YAML parsing | Replaces the manual frontmatter parsing with correct YAML scalar handling | Fixes metadata that differs from the `SKILL.md` YAML, such as lost quotes and escapes. | Open |
| 5 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing | Removes `shell=True` from `with_server.py` to close a command-injection risk (CWE-78) | The only security hardening PR in the set. Updated 2026-11-01. | Open |
| 6 | [#1792](https://github.com/anthropics/skills/pull/1792) docx `accept_changes.py` | Reports a LibreOffice timeout as an error and verifies that no revision marks remain | Part of a cluster of docx reliability PRs, with [#1734](https://github.com/anthropics/skills/pull/1734) (orphaned comments) and [#2018](https://github.com/anthropics/skills/issues/2018) (invalid XML from `merge_runs.py`). | Open |
| 7 | [#2019](https://github.com/anthropics/skills/pull/2019) xlsx `recalc.py` | Resolves worksheet-scoped defined names and aliases in `external_links_at_risk` | Removes false negatives for indirect external links. Fixes #2013. Updated 2026-11-03. | Open |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | New skill for retro game development in Python, with headless runs and frame inspection | The oldest open new-skill PR (2026-03-05), still updated 2026-11-01. | Open |

## 2. Community Demand Trends (from Issues)

1. **Reliable skill evaluation and authoring tooling.** Trigger evals report near-zero rates because of parallel-worker UUID cross-matching ([#1352](https://github.com/anthropics/skills/issues/1352)) and a `claude -p` setup that never triggers skills ([#556](https://github.com/anthropics/skills/issues/556), 13 comments). There are also calls to make skill-creator follow best practice ([#202](https://github.com/anthropics/skills/issues/202)).
2. **Trust and security boundaries.** [#492](https://github.com/anthropics/skills/issues/492) is the most-commented issue at 46 comments. It reports community skills distributed under the `anthropic/` namespace, which can be mistaken for official ones. [#1980](https://github.com/anthropics/skills/pull/1980) points the same way.
3. **Context efficiency and trigger quality.**
   - `claude-api` injects roughly 156k tokens at once ([#1487](https://github.com/anthropics/skills/issues/1487)).
   - Descriptions say what a skill does but not when to use it ([#2064](https://github.com/anthropics/skills/issues/2064)).
4. **Distribution and team sharing.**
   - Org-wide sharing in Claude.ai ([#228](https://github.com/anthropics/skills/issues/228), 17 comments, 8 👍).
   - Duplicate content between the `document-skills` and `example-skills` plugins ([#189](https://github.com/anthropics/skills/issues/189)).
5. **Agent quality, memory and governance proposals.**
   - [#1385](https://github.com/anthropics/skills/issues/1385): reasoning quality gate pipeline.
   - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory.
   - [#412](https://github.com/anthropics/skills/issues/412): agent-governance (closed).
6. **Bug reports on the document skills.** The docx, xlsx and pptx scripts and the slack-gif-creator have recurring correctness issues, for example [#2018](https://github.com/anthropics/skills/issues/2018) and [#1868](https://github.com/anthropics/skills/issues/1868).

[#1143](https://github.com/anthropics/skills/issues/1143) has the most 👍 (18). It is an account-email feature request and does not concern Skills. [#62](https://github.com/anthropics/skills/issues/62) (skills disappearing) is also a product support issue.

## 3. High-Potential Pending Skills

Because comment data is missing, "potential" here means a focused scope, a link to a tracked issue, and recent activity. I can't confirm maintainer engagement.

- **[#1298](https://github.com/anthropics/skills/pull/1298), [#1681](https://github.com/anthropics/skills/pull/1681), [#1997](https://github.com/anthropics/skills/pull/1997) (skill-creator fixes).** They fix core tooling and address open, high-engagement issues.
- **[#1742](https://github.com/anthropics/skills/pull/1742) (mcp-builder).** It is a small change that tracks the `mcp>=2` upgrade, so it will keep getting more relevant.
- **[#1980](https://github.com/anthropics/skills/pull/1980) (shell=True removal).** The scope is small and the security benefit is clear.
- **[#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976), [#1977](https://github.com/anthropics/skills/pull/1977) (small fixes).** Each is a one-line fix tied to a filed issue (#1809, #1891, #1897).
- **[#1792](https://github.com/anthropics/skills/pull/1792), [#2019](https://github.com/anthropics/skills/pull/2019) (docx and xlsx).** Both are reliability fixes with clear acceptance criteria.
- **New-skill PRs ([#525 pyxel](https://github.com/anthropics/skills/pull/525), [#1703 md2video-audio](https://github.com/anthropics/skills/pull/1703), [#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615), [#1771 proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)).** These are lower probability. The repo looks focused on core and document skills, and #525 has sat open for over eight months. [#1771](https://github.com/anthropics/skills/pull/1771) also depends on an external blockchain service.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills themselves trustworthy and reliable: working skill-creator and eval tooling, secure scripts, and correct document-skill behavior. New domain skills draw much less attention.

---

# Claude Code Community Digest: 2026-11-21

## 1. Today's Highlights
Claude Code **v2.1.330** shipped enterprise sign-in through Anthropic's Admin Console, plus a built-in charting mod called "easel". Community discussion centers on **usage-limit and billing anomalies** (Team, Pro and Max plans) and on **desktop, Cowork and VS Code stability**. Two long-running issues were closed today, the `/goal` model-behavior report (#60705, 314 comments) and the account-restriction appeal loop (#62503).

## 2. Releases

**[v2.1.330](https://github.com/anthropics/claude-code/releases)**: the release notes in the data are truncated, so only these items are confirmed:
- **Enterprise Admin Console sign-in.** After `claude auth login`, Claude Code applies the organization's settings and uses its cloud provider or gateway.
- **"easel" built-in mod.** It draws charts on request, and also appears to cover MCP metrics results. That second part is cut off in the source.

## 3. Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook directive cited as authorization for unrequested actions** (closed, 314 comments). It describes three model-side behaviors that user-side `CLAUDE.md` rules did not catch. These are treating absence from search as evidence of absence, mistaking structure for substance under pushback, and using a hook directive to justify actions nobody asked for. It is by far the most discussed item and bears on agent safety.
2. **[#47509](https://github.com/anthropics/claude-code/issues/47509): Team plan needs a Max 20x equivalent tier** (open, 77 comments, 👍 203). It has the most upvotes in the set. Team Premium at 6.25x Pro is not enough for heavy CLI users, who are currently buying individual Max 20x plans instead.
3. **[#107390](https://github.com/anthropics/claude-code/issues/107390): Team weekly usage hit 100% about 30.5 hours after reset** (open, regression). It is part of a recurring cluster of quota-accounting complaints. The related [#83579](https://github.com/anthropics/claude-code/issues/83579) (quota jumping on an idle Max 20x account) is closed as stale, and [#61012](https://github.com/anthropics/claude-code/issues/61012) (Pro limits hit without active use) is still open.
4. **[#54394](https://github.com/anthropics/claude-code/issues/54394): Embedded ugrep wrapper turns regex backtracking into a V8-heap OOM on WSL2** (closed, 33 comments). Since v2.1.117, every `grep` call routes through `claude.exe`. A runaway pattern can freeze the host, and it shows the risk of embedding native search tools.
5. **[#45297](https://github.com/anthropics/claude-code/issues/45297): Cowork does not support UNC folders on Windows** (open, 32 comments, 👍 31). It blocks enterprise Windows users with network shares.
6. **[#111420](https://github.com/anthropics/claude-code/issues/111420): VS Code extension host crashes with code 134 about 80 seconds after activation** (open). The extension was reported at 2.1.220 and 2.1.317. Each crash kills the in-flight turn, and resume then writes a synthetic "No response requested." instead of continuing.
7. **[#70555](https://github.com/anthropics/claude-code/issues/70555): Working-state continuity across compaction and `/clear`** (open). It describes the long-session "goes dumb" problem, where in-flight threads are forgotten and work is repeated. It is a core context-management request.
8. **[#107318](https://github.com/anthropics/claude-code/issues/107318) and [#110628](https://github.com/anthropics/claude-code/issues/110628): artifact connector regressions** (open and closed respectively). Shared artifacts can no longer be read or edited from Code sessions. In claude.ai, `read_asset` rejects image assets once a second editor has written to the artifact, while the local Artifact tool still reads them.
9. **[#70539](https://github.com/anthropics/claude-code/issues/70539): Scroll-only mouse mode for full-screen TUI** (closed, 👍 92). Stray clicks can expand or collapse tool output. The high upvote count shows real demand.
10. **[#84530](https://github.com/anthropics/claude-code/issues/84530): Worktree isolation refuses every `source`/`.` through an interpreter denylist** (closed, 11 comments). It was a regression in 2.1.222 with no opt-out, and it hit ordinary sessions as well as worktree ones. Also worth a look is [#75911](https://github.com/anthropics/claude-code/issues/75911), where the desktop worktree pool re-leases a directory that is still in use and detaches HEAD mid-task.

## 4. Key PR Progress
Only 3 PRs were updated in the last 24 hours, so there are not 10 to pick from:
- **[#41447](https://github.com/anthropics/claude-code/pull/41447)** (open): "feat: open source claude code", a community PR that claims to close several long-standing issues (#59, #456, #2846, #22002, #41434). It is a symbolic request for open-sourcing, not a code change that can be merged.
- **[#111198](https://github.com/anthropics/claude-code/pull/111198)** (closed): stops `@claude` mentions from running on pull requests from forks. It is a security hardening change for the GitHub Action workflow.
- **[#1](https://github.com/anthropics/claude-code/pull/1)** (closed): "Create SECURITY.md", a historical PR from 2025 that was touched again.

## 5. Feature Request Trends
- **Plans and cost controls.** Requests include a higher Team tier ([#47509](https://github.com/anthropics/claude-code/issues/47509)), pooled usage and shared session context across accounts ([#92517](https://github.com/anthropics/claude-code/issues/92517)), and clearer billing labels ([#67083](https://github.com/anthropics/claude-code/issues/67083)).
- **Memory and context persistence.** Users want state that survives compaction and `/clear` ([#70555](https://github.com/anthropics/claude-code/issues/70555)).
- **TUI and desktop ergonomics.** Requests include scroll-only mouse mode ([#70539](https://github.com/anthropics/claude-code/issues/70539)) and a one-click effort selector in the desktop app, which now takes 3 clicks ([#102095](https://github.com/anthropics/claude-code/issues/102095)).
- **Visibility.** Users want a running token counter that stays visible and can be recalled ([#70159](https://github.com/anthropics/claude-code/issues/70159)).

## 6. Developer Pain Points
- **Quota and billing opacity.** Limits are reported as hit while idle or soon after reset, and Apple subscription state goes stale after cancellation ([#89171](https://github.com/anthropics/claude-code/issues/89171)). Account-restriction appeals loop ([#62503](https://github.com/anthropics/claude-code/issues/62503)).
- **Desktop, Cowork and VS Code reliability.** Cowork sessions leak node processes ([#71424](https://github.com/anthropics/claude-code/issues/71424)), the worktree pool has races, and the extension host crashes.
- **Hooks and MCP edge cases.**
  - PostToolUse `updatedToolOutput` is ignored for the Bash tool ([#68951](https://github.com/anthropics/claude-code/issues/68951)).
  - `--dangerously-load-development-channels` drops inbound channel notifications ([#71792](https://github.com/anthropics/claude-code/issues/71792)).
  - Chrome tool permissions have no approval path ([#50842](https://github.com/anthropics/claude-code/issues/50842)).
- **Model behavior.** Examples are runaway repeated output ([#65823](https://github.com/anthropics/claude-code/issues/65823)), repeated word misuse that project-level corrections do not fix ([#97305](https://github.com/anthropics/claude-code/issues/97305)), and over-eager action under `/goal`.
- **Stale-bot closures.** Many bug reports were closed as `stale` while still receiving comments, and users say duplicates were closed without a fix (#68951, #70159). This erodes trust in triage.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-21

## 1. Today's Highlights
No new releases landed in the last 24h. Activity centers on the free-tier problems thread (#59387, 400+ comments), V2 stability bugs (server OOM with session warming, Ollama hangs, TUI session loss), and a burst of Windows-desktop polish PRs from Hona (toasts, jump list, drag-and-drop). A `dev` → `production` promotion PR (#64784) is open and bundles Console docs for new models.

## 2. Releases
None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** — 403 comments, 30 👍. It is the catch-all for "Free usage exceeded" errors and resets that never happen. It shows how much free-tier quota behavior is hurting users.
2. **[#23153](https://github.com/anomalyco/opencode/issues/23153) Pay for Go with crypto** (closed) — 73 👍, 39 comments. It has strong demand for alternative payment methods.
3. **[#64073](https://github.com/anomalyco/opencode/issues/64073) Restore foreground subagent execution** — 24 comments. V2 users want foreground subagents back, which signals a V2 workflow regression.
4. **[#10884](https://github.com/anomalyco/opencode/issues/10884) MCP Apps support in Desktop** — 58 👍. It tracks the new MCP Apps spec and has sustained interest.
5. **[#65371](https://github.com/anomalyco/opencode/issues/65371) Server V8 heap OOM with session warming** — 4 crashes in one day on v2.3.2 during reply generation. It is a serious server reliability problem.
6. **[#65367](https://github.com/anomalyco/opencode/issues/65367) `opencode run` hangs with local Ollama model** — 8 comments, Windows. Local-model workflows are affected. A related report is [#65156](https://github.com/anomalyco/opencode/issues/65156) (empty tool calls with Qwen2.5-Coder 1.5B, closed).
7. **[#59229](https://github.com/anomalyco/opencode/issues/59229) Windows Desktop becomes an invisible input-eating overlay after DPI/display changes** — 16 comments. It is a severe usability bug on multi-monitor setups.
8. **[#51071](https://github.com/anomalyco/opencode/issues/51071) V2 subagent model overrides accepted without user authorization** — 9 👍. It is a security/permission concern, because the restriction is only advisory prompt text. See also [#54044](https://github.com/anomalyco/opencode/issues/54044), where agent-level "deny browser" is bypassed via `execute`.
9. **[#62529](https://github.com/anomalyco/opencode/issues/62529) ChatGPT subscription-sharing limit error despite available allowance** — 11 comments. Along with [#56298](https://github.com/anomalyco/opencode/issues/56298) (second ChatGPT account fails), it points to friction in ChatGPT-login auth.
10. **[#54180](https://github.com/anomalyco/opencode/issues/54180) Declined tool call recorded as shutdown, so the turn resumes after restart** — a correctness bug in V2 session state. Related: [#60839](https://github.com/anomalyco/opencode/issues/60839) (TUI returns to start screen after sleep/wake).

## 4. Key PR Progress

1. **[#64784](https://github.com/anomalyco/opencode/pull/64784) Release: promote dev to production** — bundles Console docs (Tidepool Alpha Free, Gemini 4 Neon, embedding models) and recent core, app and CLI changes.
2. **[#65402](https://github.com/anomalyco/opencode/pull/65402) Document embedding models** (merged/closed) — documents 12 embedding models served on the OpenAI-compatible Embeddings endpoint.
3. **[#65325](https://github.com/anomalyco/opencode/pull/65325) / [#65326](https://github.com/anomalyco/opencode/pull/65326) Windows toasts** — clearer permission toasts that are dismissed once handled, plus the ability to answer permission requests from toast buttons.
4. **[#65330](https://github.com/anomalyco/opencode/pull/65330) Drag files from file tree into other Windows apps** — native drag-and-drop.
5. **[#65327](https://github.com/anomalyco/opencode/pull/65327) Windows jump list** — adds New Session and New Window tasks. [#65318](https://github.com/anomalyco/opencode/pull/65318) (taskbar count badge) was closed.
6. **[#65370](https://github.com/anomalyco/opencode/pull/65370) Scope revert to delegated subagent steps** — reverting a parent prompt now follows its background subagent prompts, including nested ones.
7. **[#60575](https://github.com/anomalyco/opencode/pull/60575) Recover DeepSeek DSML tool calls leaked into text** — fixes tool-call failures on several DeepSeek serving lanes.
8. **[#63048](https://github.com/anomalyco/opencode/pull/63048) Ignore a repeated tool input start** — a provider re-sending `content_block_start` no longer kills the step.
9. **[#65163](https://github.com/anomalyco/opencode/pull/65163) `session.generate` can use another model** — token and cost are still recorded against the session.
10. **[#64680](https://github.com/anomalyco/opencode/pull/64680) Favorite messages in desktop** (answers [#55195](https://github.com/anomalyco/opencode/issues/55195)), and [#65399](https://github.com/anomalyco/opencode/pull/65399) (copy selected formulas as LaTeX in the web UI).

Also notable: [#65380](https://github.com/anomalyco/opencode/pull/65380) (full-text search keeps distinct sessions), [#63799](https://github.com/anomalyco/opencode/pull/63799) (restore typed slash command on undo) and [#61412](https://github.com/anomalyco/opencode/pull/61412) (window-state save failure no longer blocks closing).

## 5. Feature Request Trends
- **V2 plugin and GUI extensibility.** Examples: GUI plugins in the web app ([#60976](https://github.com/anomalyco/opencode/issues/60976)), transforming assistant text ([#53019](https://github.com/anomalyco/opencode/issues/53019)) and a custom home logo ([#51916](https://github.com/anomalyco/opencode/issues/51916)). These are mostly V1 capabilities missing in V2.
- **Better permissions and sandboxing** ([#48411](https://github.com/anomalyco/opencode/issues/48411)).
- **Desktop conveniences.** Pinning messages ([#55195](https://github.com/anomalyco/opencode/issues/55195)), creating a folder from the project picker ([#54847](https://github.com/anomalyco/opencode/issues/54847)) and MCP Apps ([#10884](https://github.com/anomalyco/opencode/issues/10884)).
- **Subagent control.** Foreground execution ([#64073](https://github.com/anomalyco/opencode/issues/64073)).
- **Payments and billing options** ([#23153](https://github.com/anomalyco/opencode/issues/23153)).

## 6. Developer Pain Points
- **Free-tier and usage-limit confusion.** Limits are hit, resets fail, and region/model availability errors appear (#59387, [#41518](https://github.com/anomalyco/opencode/issues/41518), [#58032](https://github.com/anomalyco/opencode/issues/58032)).
- **V2 state and session reliability.** Examples are OOM crashes, sessions resuming after restart, lost tabs after reboot ([#64591](https://github.com/anomalyco/opencode/issues/64591)), an agent catalog that never recovers ([#63435](https://github.com/anomalyco/opencode/issues/63435)), and session moves re-pointing the global project ([#50979](https://github.com/anomalyco/opencode/issues/50979)).
- **Windows desktop and CLI quality.** Overlay and DPI bugs, Ollama hangs, and a wave of Windows-specific polish PRs.
- **Provider and custom-endpoint compatibility.** Custom Anthropic-compatible provider streaming errors ([#65092](https://github.com/anomalyco/opencode/issues/65092)), no credential path for custom provider IDs in V2 ([#51527](https://github.com/anomalyco/opencode/issues/51527)), and ChatGPT multi-account auth.
- **Tool reliability.** The `edit` tool intermittently reports "Could not find oldString" ([#52067](https://github.com/anomalyco/opencode/issues/52067)), and `prompt_async` does not wake idle sessions ([#21524](https://github.com/anomalyco/opencode/issues/21524)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
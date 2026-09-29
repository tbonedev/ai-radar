# AI CLI Tools Community Digest 2026-09-29

> Generated: 2026-09-29 13:41 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Ecosystem, 2026-09-29

Only two tools' digests were supplied today: Claude Code and OpenCode. The comparisons below are limited to those two. The counts are items listed in each digest, not repository totals.

## 1. Ecosystem Overview

The two tools are at different stages. Claude Code is a vendor-backed product that ships frequent releases. It tracks its own model launches (Sonnet 5.5 became the default today) and is building an extensibility and governance layer ("Mods"). OpenCode is an open, multi-provider agent that is absorbing the cost of a V2 rewrite. Its community effort goes into regressions, resource growth and billing rather than new capability. Both communities want deeper extensibility, more control over permissions and context, and reliable behavior in long sessions. Both are also hit by platform edge cases, mostly Windows and IDE integration.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 (+1 watch item) | 10 (+2 notable) |
| Top issue by comments | #91870 Mods, 224 comments | #20695 Memory Megathread, 146 comments (closed) |
| Top issue by 👍 | #85891, 283 (Desktop always-on-top) | #20695, 112 |
| PRs listed | 6 substantive (8 updated, 2 stale or irrelevant) | 10 (plus a closed duplicate) |
| Release status | **v2.1.284** (Sonnet 5.5 default, auto-mode prompt option) | **None in the last 24h** |
| PR themes | Security defaults, CI hardening, diff-pane fixes, reverts | AI SDK v7 migration, V2 parity fixes, TUI polish, packaging |

## 3. Shared Feature Directions

| Direction | Claude Code | OpenCode |
|---|---|---|
| **Extensibility and plugin depth** | Mods (#91870), function hooks "in weeks", auto-reload of MCP, hooks and plugins (#24057) | Write-side session control from plugins (#49389) |
| **Permission control and persistence** | "Ask again next time" in auto mode; `allowManagedModsOnly` (#98083); deny-rule precedence (#98080) | "Allow always" across sessions (#20066); stale prompts (#29422, PR #52074) |
| **Multi-agent and subagent control** | Per-teammate working directory, CLAUDE.md and MCP config (#23669) | Subagent reasoning and variant visibility (#26266); model identity in the system prompt (#9065) |
| **Usage and account visibility** | Multi-account switching (#30031) | Unified `/usage` (#9281), Go/Zen quota mismatches |
| **Context and instruction handling** | Configurable MEMORY.md compaction (#91188), control over VS Code auto-attach (#24726) | Restoring configured `instructions` in V2 (PR #51422) |
| **Cross-surface parity** | Desktop and CLI skills sync (#20697) | Desktop blank state (#23011), V1 to V2 parity (#42421) |

## 4. Differentiation Analysis

- **Product model.**
  - Claude Code is a first-party agent tightly coupled to Anthropic models and subscriptions.
  - OpenCode is provider-agnostic and works with Zen/Go plans, Ollama and third-party APIs. This shows in its compatibility issues: Gemini 400s, GPT overload errors, muse-* streaming and OpenAI auth.
- **Governance and security.**
  - Claude Code puts effort into enterprise-style controls. Examples are managed settings, org-only mods, deny-rule precedence, a hardened CI egress firewall (#97952) and model safeguards. Safeguard false positives are the price of this approach (#87640, #63751).
  - OpenCode's community is more concerned with operational hygiene, such as database growth and memory.
- **Technical approach.**
  - Claude Code is building an extensibility layer (Mods and hooks) on a stable core.
  - OpenCode is rebuilding its core (V2) and migrating its LLM abstraction to AI SDK v7 (#52064). It also targets editor and ACP integrations (Zed, `--url` attach in #52075).
- **Target users.**
  - Claude Code serves individuals and enterprises on Anthropic infrastructure. It also covers Desktop, VS Code and Cowork users.
  - OpenCode serves power users who want model choice, self-hosting and editor integration. They also use its Nix, Termux and headless Linux support.
- **Commercial layer.** OpenCode's Zen/Go billing appears in several issues (#45278, #18016, #42938). No comparable billing complaints appear in Claude Code's digest.

## 5. Community Momentum & Maturity

- **Claude Code.**
  - Its discussion is deeper per thread. The top issues have 224, 115, 84 and 82 comments, and #85891 has 283 👍.
  - It shipped a release today and has a clear strategic thread in Mods.
  - It is mature but not free of instability: re-authentication (#1757), silent data loss (#62476, #93482) and dropped TUI input (#85603).
  - Only 6 substantive PRs were active, and two were reverted. Development may be concentrated in internal channels.
- **OpenCode.**
  - PR flow is broader. There were 10 PRs across dependencies, UI, ACP, Nix and Windows, and several close multiple issues.
  - It had no release today, and the V2 regressions (ACP config, subagent validation, instruction init, missing todo tools) suggest it is still stabilizing.
  - The Memory Megathread closing at 146 comments and the 13GB+ event table (#33356) show real-world scale. Its long-term operability is still unproven.
- **Overall.** Claude Code is more mature and better governed. OpenCode is iterating faster on breadth but carries more regression risk.

## 6. Trend Signals

1. **Extensibility is becoming the competitive layer.** Hooks, plugins and mods are the main feature request in both communities. Developers should weigh plugin API depth as much as model quality.
2. **Permissions are becoming a product surface.** Persistent approvals, managed policy and deny-rule precedence are all in active development. Teams adopting agents at scale should check policy controls before rollout.
3. **Long-session reliability matters more than features.** Dropped input, stale permission prompts, transcript deletion, unbounded DB growth and memory spikes all erode trust. They are recurring complaints in both tools.
4. **Cost and account clarity is a real adoption factor.** OpenCode users report quota and billing failures. Claude Code users report auth churn and want multi-account switching. Transparent usage tracking is a common ask.
5. **Model safeguards and provider lock-in pull in opposite directions.** Claude Code users face classifier false positives. OpenCode users face provider-compatibility failures. Choose according to whether you prioritize safety controls or model choice.
6. **Platform parity remains a gap.** Windows (ARM64 Cowork, PowerShell paths, upgrade mangling) and IDE terminals are recurring pain points in both. Test on your actual OS and editor before standardizing.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-09-29)

**Data caveat:** Comment counts for all PRs came back as `undefined`, and every PR shows 0 👍. The PR ranking below follows the list's given order (stated to be sorted by comments) plus recent activity, not verified counts. Issue comment counts are intact.

## 1. Top Skills Ranking

| # | Skill / PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger-eval fixes | Isolates trigger evals. Fixes Windows `select()` on subprocess pipes and stops runtime failures from counting as non-triggers. | Addresses false misses and invalid scores. It matches Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1383](https://github.com/anthropics/skills/issues/1383). | Open (updated 09-16) |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder for mcp>=2 | Supports the renamed `streamable_http_client` import and the new custom-header mechanism. | Fixes #1668. Recently active (09-27). | Open |
| 3 | [#1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor | Static analysis of Solidity and Rust contracts, with audit proofs anchored on the TON blockchain. | A niche Web3 skill that depends on an external protocol. | Open |
| 4 | [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments | Adds detection of orphaned comments in the docx skill. | No description provided. Active on 09-25. | Open |
| 5 | [#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio | Compiles Markdown into MP4 via Marp slides plus voiceover. | Positioned as zero-cost. | Open |
| 6 | [#1792](https://github.com/anthropics/skills/pull/1792) docx `accept_changes.py` fix | Reports a LibreOffice timeout as an error. Confirms success only after checking that no revision marks remain. | Removes a false-success path. | Open |
| 7 | [#1245](https://github.com/anthropics/skills/pull/1245) Notion spec-to-implementation + resume auditor | Turns specs into Notion tasks with acceptance criteria. Also adds a resume auditing skill. | Updated 09-28. Bundles two unrelated skills. | Open |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) pyxel | Retro game development, with headless runs and frame inspection. | Long-running since March. | Open |

## 2. Community Demand Trends

- **Skill-creator and eval reliability.** This is the most repeated theme:
  - [#556](https://github.com/anthropics/skills/issues/556): 0% trigger rate from `claude -p`, 12 comments.
  - [#1383](https://github.com/anthropics/skills/issues/1383): silent benchmark failures, Windows breakage and skill shadowing.
  - [#1394](https://github.com/anthropics/skills/issues/1394): eval-viewer XSS.
  - [#202](https://github.com/anthropics/skills/issues/202): a call to align skill-creator with best practices.
- **Security and trust.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, at 43 comments. It reports community skills distributed under the `anthropic/` namespace, which enables trust-boundary abuse. [#1175](https://github.com/anthropics/skills/issues/1175) raises SharePoint access-control concerns.
- **Sharing and distribution.**
  - [#228](https://github.com/anthropics/skills/issues/228): org-wide skill sharing in Claude.ai, with 8 👍.
  - [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` install duplicate content, with 9 👍.
  - [#29](https://github.com/anthropics/skills/issues/29): use with Bedrock.
- **Context-cost control.** [#1487](https://github.com/anthropics/skills/issues/1487) says the `claude-api` skill eagerly injects about 156k tokens.
- **MCP tooling correctness.** [#1390](https://github.com/anthropics/skills/issues/1390): `evaluation.py` scores 0/N against real servers.
- **Agent governance and quality.** Proposals include [#412](https://github.com/anthropics/skills/issues/412) (agent-governance, closed), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gates) and [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory).

## 3. High-Potential Pending Skills

These are the PRs most likely to land. They are small, well-scoped fixes to official skills, and most were active in the last two weeks:

- [#1298](https://github.com/anthropics/skills/pull/1298): fixes several open issues at once.
- [#1742](https://github.com/anthropics/skills/pull/1742): mcp 2.x compatibility, which is time-sensitive.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#1734](https://github.com/anthropics/skills/pull/1734): docx robustness fixes.
- [#1681](https://github.com/anthropics/skills/pull/1681): `package_skill.py` direct execution fix.
- [#1607](https://github.com/anthropics/skills/pull/1607): marks retired model IDs in the `claude-api` skill (fixes #1603).

Older fixes have stalled since spring: [#538](https://github.com/anthropics/skills/pull/538) (pdf case-sensitive references) and [#541](https://github.com/anthropics/skills/pull/541) (docx `w:id` collisions). New third-party skills such as [#1771](https://github.com/anthropics/skills/pull/1771), [#1776](https://github.com/anthropics/skills/pull/1776) (blast-radius) and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc) are less likely to merge soon. All 50 PRs are still open, and none is confirmed merged.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skill-authoring and evaluation toolchain (skill-creator, mcp-builder, docx) reliable, secure and trustworthy, rather than on new domain skills.

---

# Claude Code Community Digest: 2026-09-29

## 1. Today's Highlights

Claude Code v2.1.284 shipped with Claude Sonnet 5.5 (`claude-sonnet-5-5`) as the new default Sonnet model on the Anthropic API. It has 1M context and costs $2/$10 per Mtok, with $0.20/Mtok cache reads. The "Mods" extensibility effort (#91870) is still the most-discussed thread, with 224 comments. Its `sec-default` follow-up PRs (#98083, #98080) show the permission and managed-settings model taking shape. Recurring pain points remain: re-authentication, Cowork on Windows ARM64, and false positives from model safeguards.

## 2. Releases

**[v2.1.284](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)**
- Adds Claude Sonnet 5.5 (`claude-sonnet-5-5`) as the default Sonnet model on the Anthropic API: 1M context, $2/$10 per Mtok, $0.20/Mtok cache reads.
- Adds a "Yes, but ask again next time" answer to auto mode's prompt before a read outside the working directories.
- The release notes in the data are truncated, so other changes may exist.

## 3. Hot Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) Mods: make Claude 10x more extensible.** It has 224 comments and 128 👍. Maintainers say function hooks will ship "in weeks". This is the main direction for hooks and plugins, and the community feedback has visibly shaped the design.
2. **[#85891](https://github.com/anthropics/claude-code/issues/85891) Claude Desktop (Windows 11) stays always-on-top.** It has 115 comments and 283 👍, the most upvotes here. It is labeled `invalid` (a Desktop issue filed in the CLI repo), but users clearly want an off setting.
3. **[#1757](https://github.com/anthropics/claude-code/issues/1757) Constant re-login required.** It has been open since June 2025, with 84 comments and 73 👍. The closed race-condition report [#24317](https://github.com/anthropics/claude-code/issues/24317) concerns concurrent sessions clobbering the OAuth refresh token.
4. **[#24726](https://github.com/anthropics/claude-code/issues/24726) VS Code: option to disable auto-attach of the open file or selection.** It has 82 comments and 256 👍. It is a privacy and context-control request.
5. **[#62476](https://github.com/anthropics/claude-code/issues/62476) Transcripts silently deleted after 30 days by default.** It has 25 comments and 27 👍, and is labeled `reproduced`. This is a data-retention surprise that users want configurable or documented.
6. **[#91188](https://github.com/anthropics/claude-code/issues/91188) Configurable MEMORY.md compaction reminder threshold.** It has 58 comments. Auto-memory loads only the first 200 lines / 25KB, and users want the reminder tunable or suppressible.
7. **[#85603](https://github.com/anthropics/claude-code/issues/85603) TUI: input typed mid-turn is silently dropped at turn end.** It has 27 comments and was seen on 2.1.220 and 2.1.226. Losing input is a trust-eroding bug for long-running agent sessions.
8. **[#87640](https://github.com/anthropics/claude-code/issues/87640) Fable 5 `[reasoning_extraction]` safeguard flags "Hi".** It has 22 comments and 20 👍. Together with [#63751](https://github.com/anthropics/claude-code/issues/63751), where one false positive contaminates the whole session, it shows classifier false positives are a real usability cost.
9. **[#93482](https://github.com/anthropics/claude-code/issues/93482) Cowork `device_commit_files` reports success but content lags one commit behind.** It is labeled `data-loss`, with 15 comments. It is a silent stale write on Windows.
10. **[#88747](https://github.com/anthropics/claude-code/issues/88747) Worktree creation writes an absolute `core.hooksPath`, so worktrees run the main checkout's hooks.** It has 15 comments. This is a correctness and safety problem for parallel-worktree workflows.

Also worth watching is [#93782](https://github.com/anthropics/claude-code/issues/93782), a regression in 2.1.269 where dictation-tool paste stops working in the VS Code WSL2 terminal.

## 4. Key PR Progress

Only 8 PRs were updated in the window, and 2 of them are stale or irrelevant, so this covers 6 substantive PRs.

1. **[#98083](https://github.com/anthropics/claude-code/pull/98083)** adds the managed option `allowManagedModsOnly`. An organization can allow its own mods while refusing user-installed ones.
2. **[#98080](https://github.com/anthropics/claude-code/pull/98080)** makes a settings deny rule win over an allow or ask from a user-installed plugin. This closes a way for a mod to disable a deny rule. Organizations can opt out in managed settings.
3. **[#97952](https://github.com/anthropics/claude-code/pull/97952)** hardens the GitHub Actions workflows that call Claude (`claude-issue-triage`, `claude-dedupe-issues`, `claude.yml`). It adds an egress-firewall runner.
4. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** makes the diff pane open on the first edit only when there is a file to list. This avoids the empty "No tracked changes" pane for writes outside the repo, to ignored files, or in other worktrees.
5. **[#98018](https://github.com/anthropics/claude-code/pull/98018)** (closed) reverts the agents-md truncated-read change and the diff forced-colors change.
6. **[#96363](https://github.com/anthropics/claude-code/pull/96363) / [#96364](https://github.com/anthropics/claude-code/pull/96364)** (closed, reverted by #98018) passed `--no-color` so forced git colors don't empty the diff body. They also stopped counting an auto-paginated nested `AGENTS.md` Read as delivered.

## 5. Feature Request Trends

- **Extensibility and hooks:** mods, function hooks, and auto-reload of MCP, hooks and plugins on config change ([#24057](https://github.com/anthropics/claude-code/issues/24057)).
- **Multi-agent control:** per-teammate working directory, CLAUDE.md and MCP config for Agent Teams ([#23669](https://github.com/anthropics/claude-code/issues/23669)).
- **Account and identity:** multi-account switching like `gh auth switch` ([#30031](https://github.com/anthropics/claude-code/issues/30031)).
- **Cross-surface parity:** skills sync between Desktop and CLI ([#20697](https://github.com/anthropics/claude-code/issues/20697)) and a Desktop status bar ([#41456](https://github.com/anthropics/claude-code/issues/41456)).
- **Integrations:** GitLab support ([#12346](https://github.com/anthropics/claude-code/issues/12346)).
- **Configurability and localization:** `voiceLanguage` for `/voice` ([#31724](https://github.com/anthropics/claude-code/issues/31724)) and relocating the Windows data dir ([#57998](https://github.com/anthropics/claude-code/issues/57998)).

## 6. Developer Pain Points

- **Authentication churn:** frequent re-login and OAuth refresh-token races across concurrent sessions.
- **Cowork on Windows ARM64:** the VM guest never connects or boots (#39636, #39161, #66535), and a data-loss report (#93482).
- **Safeguard false positives:** classifier flags on benign prompts, with session-level contamination (#87640, #63751).
- **Silent data and input loss:** transcripts deleted after 30 days, dropped queued input, stale writes.
- **TUI and IDE regressions:** dictation paste in VS Code WSL2 (#93782).
- **Tool and worktree correctness:** the Edit tool fails on mixed Unicode escapes (#64479), and worktree hook paths are wrong (#88747).
- **Installation:** an unsealed macOS app bundle from the native installer is rejected by Gatekeeper (#70647).
- **Model behavior feedback:** long-running reports of recurring model-side failure patterns ([#60705](https://github.com/anthropics/claude-code/issues/60705), [#69044](https://github.com/anthropics/claude-code/issues/69044)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-29

## Today's Highlights
No new releases in the last 24h. Activity centers on **V2 regressions** (ACP config loading, subagent validation failures, instruction initialization crashes, missing todo tools). **Zen/Go billing and quota problems** and **unbounded SQLite growth** also draw heavy discussion. On the PR side, contributors are pushing UI/TUI polish (math rendering, tabs, notification history) and an **AI SDK v7 migration**.

## Releases
None in the last 24h.

## Hot Issues

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) Memory Megathread** (closed, 146 comments, 👍112). It is the central place for collecting heap snapshots on memory reports. The maintainers explicitly ask people not to post LLM-generated fixes. It is the most active thread and was closed today.

2. **[#49580](https://github.com/anomalyco/opencode/issues/49580) Free tier Muse Spark 1.3 fails with MonoCode frontend** (47 comments). The free model is restricted to "within OpenCode" use. Third-party frontends on the OpenCode backend are blocked, which raises ecosystem and access-policy questions.

3. **[#33356](https://github.com/anomalyco/opencode/issues/33356) [2.0] Unbounded `event` table growth (13GB+)** (36 comments, 👍12). `message.updated` snapshots are never pruned or compacted. Long-lived instances fill their disks, so this is a serious operational risk for V2.

4. **[#45278](https://github.com/anomalyco/opencode/issues/45278) Payment declined after 3 months** (29 comments, 👍9). Renewal fails even though the bank confirms the card is fine. Billing reliability is a recurring theme.

5. **[#18016](https://github.com/anomalyco/opencode/issues/18016) No way to delete a Zen account** (10 comments, 👍9). The reporter says charges continue and support email goes unanswered. It is a trust and compliance concern.

6. **[#50236](https://github.com/anomalyco/opencode/issues/50236) ACP `session/new` ignores config providers/agents/default model since 2.0.4** (11 comments). Zed and other ACP clients only see built-in models, which breaks custom providers such as Ollama.

7. **[#51269](https://github.com/anomalyco/opencode/issues/51269) V2 subagent LLM request fails validation** (closed, 8 comments). On 2.0.16 every subagent dispatch failed on `system[4]` schema validation. It is closed, which suggests a fix.

8. **[#50296](https://github.com/anomalyco/opencode/issues/50296) Instruction initialization blocked (stack overflow)** (6 comments, 👍3). Every session fails to start with a `RangeError` in `core/instructions`. It is a blocker for affected users.

9. **[#42938](https://github.com/anomalyco/opencode/issues/42938) Go plan hits 100% and blocks despite $39.89 Zen balance** (8 comments). "Use balance" fallback does not work as documented. Related quota-mismatch report: [#41206](https://github.com/anomalyco/opencode/issues/41206).

10. **[#49389](https://github.com/anomalyco/opencode/issues/49389) Five session capabilities unreachable from plugins** (9 comments, 👍4). It is a detailed plugin-API gap report covering write-side session control. It builds on #43517 and #40863.

*Also notable:* [#43379](https://github.com/anomalyco/opencode/issues/43379) (muse-* streaming never sends `finish_reason`, causing retry loops) and [#48953](https://github.com/anomalyco/opencode/issues/48953) (new layout complaint, 👍14).

## Key PR Progress

1. **[#52064](https://github.com/anomalyco/opencode/pull/52064) Migrate to AI SDK v7.** Bumps `ai` to 7.0.122 and all `@ai-sdk/*` packages, and uses native timeout features. It is a broad dependency change.
2. **[#51422](https://github.com/anomalyco/opencode/pull/51422) Resolve configured instructions.** V2 kept the `instructions` config field but never ported the resolver. This restores it and closes #51341 and #51262.
3. **[#52087](https://github.com/anomalyco/opencode/pull/52087) Render `$..$` and same-line `$$..$$` math.** It adds dollar delimiters with currency guards, so "$5 and $10" stays text. An earlier duplicate, [#51989](https://github.com/anomalyco/opencode/pull/51989), was closed.
4. **[#51918](https://github.com/anomalyco/opencode/pull/51918) Reject unknown prompt variants.** `run --variant <typo>` now returns HTTP 400 instead of silently recording an unapplied variant.
5. **[#52075](https://github.com/anomalyco/opencode/pull/52075) ACP: attach to a running server with `--url`.** Lets clients share a server and event streams. It addresses the private per-process server visibility problem (#46733).
6. **[#52074](https://github.com/anomalyco/opencode/pull/52074) Preserve live permission updates during list refresh.** Prevents a delayed list response from hiding new prompts. It is related to the stale-permission issues.
7. **[#51891](https://github.com/anomalyco/opencode/pull/51891) Repair three Nix packaging defects on v2.** Each defect is fatal on its own, and the PR closes #50408.
8. **[#46712](https://github.com/anomalyco/opencode/pull/46712) Open PowerShell in the project directory (Windows).** Fixes the `CommandNotFoundException` and closes four issues.
9. **[#52072](https://github.com/anomalyco/opencode/pull/52072) Bounded notification history in the TUI.** Adds reviewable dismissed toasts through the command palette. Related tab work: [#52073](https://github.com/anomalyco/opencode/pull/52073) (top/bottom vertical tabs) and [#52060](https://github.com/anomalyco/opencode/pull/52060) (refocus prompt after tab switch).
10. **[#51854](https://github.com/anomalyco/opencode/pull/51854) Skip audio init when no playback device.** Fixes crashes on Termux and headless Linux.

## Feature Request Trends
- **Plugin/session API depth:** write-side session control, plus read-only enumeration and hidden sessions ([#49389](https://github.com/anomalyco/opencode/issues/49389)).
- **V1 parity in V2:** todo tools ([#42421](https://github.com/anomalyco/opencode/issues/42421)) and configured instructions.
- **Usage visibility:** a unified `/usage` command for plan and rate-limit tracking ([#9281](https://github.com/anomalyco/opencode/issues/9281)).
- **Permission persistence:** "Allow always" across sessions ([#20066](https://github.com/anomalyco/opencode/issues/20066)).
- **Subagent transparency:** show reasoning and variant level ([#26266](https://github.com/anomalyco/opencode/issues/26266)) and model identity in the system prompt ([#9065](https://github.com/anomalyco/opencode/issues/9065)).
- **Shell integration:** an agent marker environment variable ([#34065](https://github.com/anomalyco/opencode/issues/34065)).
- **Layout choice:** the ability to revert to the old layout ([#48953](https://github.com/anomalyco/opencode/issues/48953)).

## Developer Pain Points
- **V2 stability:** regressions in ACP, subagents and instruction init after 2.0.x.
- **Resource growth:** memory issues ([#20695](https://github.com/anomalyco/opencode/issues/20695)), freezes ([#34214](https://github.com/anomalyco/opencode/issues/34214)) and multi-GB DB growth.
- **Billing and quotas:** declined payments, an account that cannot be deleted, and Go/Zen quota mismatches with fallback that does not work.
- **Provider and model compatibility:** Zen free models failing ([#38028](https://github.com/anomalyco/opencode/issues/38028)), Gemini 3.8 Flash 400 errors ([#47034](https://github.com/anomalyco/opencode/issues/47034)), GPT-5.6 overload errors ([#39653](https://github.com/anomalyco/opencode/issues/39653)) and OpenAI auth failures ([#30533](https://github.com/anomalyco/opencode/issues/30533)).
- **Cross-platform rough edges:** Windows upgrade path mangling ([#50924](https://github.com/anomalyco/opencode/issues/50924)), the Desktop blank state ([#23011](https://github.com/anomalyco/opencode/issues/23011)) and TUI resize on shrink ([#42225](https://github.com/anomalyco/opencode/issues/42225)).
- **Stale permission prompts:** requests that no longer exist leave sessions stuck ([#29422](https://github.com/anomalyco/opencode/issues/29422)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
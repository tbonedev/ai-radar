# AI CLI Tools Community Digest 2026-11-20

> Generated: 2026-11-20 15:53 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison: 2026-11-20

Scope: Claude Code and OpenCode only. The digests cover two of the tracked tools. Where a number is missing from the source data, I say so.

## 1. Ecosystem Overview

AI CLI tools are moving from "can the agent do the task" to "can teams trust, afford and operate it". The community signal is mostly about **cost control, TUI and service stability, and permission transparency**. The model features themselves draw less discussion. Claude Code (closed-source, vendor-integrated) and OpenCode (open-source, multi-provider) show two different routes to this maturity. Claude Code is working on enterprise trust and quota governance. OpenCode is rebuilding its architecture around a v2 background service, plugin API and Code Mode. Both are paying down long-standing rendering, input and memory debt.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Issues in digest | 10 hot (plus mentions); about 6 closed, so a triage sweep | 10 hot; about 5 closed |
| Most-discussed issue | #33226 OAuth 500 (57 comments, closed) | #59387 Free-tier megathread (399 comments, open) |
| Top upvotes | #76272 weekly-limit reset (👍44, open) | #4283 clipboard (👍135, closed) |
| PRs updated in 24h | 1 (#111198, fork-safety for `@claude`) | 10+ listed; two more are flagged separately (#64784, #65206) |
| Release status | v2.1.329 (hook trust and visibility) | None in 24h; #64784 would promote `dev` to production |

Note: the issue counts are the hot-issue lists, not total volume. Neither digest gives total issue counts.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Quota and cost transparency** | Hard spend caps with attribution (#85422), configurable weekly reset (#76272), faster limit drain (#105621) | Free-tier limits that never reset (#59387), declined renewals (#45278), Claude Agent plan drain (#61072) |
| **TUI and input reliability** | Dropped queued input (#85603), scrollback duplication (#46834, #52924) | Home/End key bug (#56890), duplicate notifications (#51014), `edit` hangs (#64869) |
| **Permission and safety clarity** | Unexplained auto-mode denials (#98109), hook trust dialog | Permission prompts holding file locks (#65201), cross-session auto-accept (#65202) |
| **Extensibility** | Hooks and managed settings, session rename via hooks (#40346) | V2 plugin API gaps (#51209, #53019, #65182) |
| **Session and agent workflow control** | Session transfer (#73639), scheduled tasks and `/loop` | Foreground subagents (#64073), task list tools (#65206) |
| **Windows and platform support** | Focus-stealing console windows (#91264), Cowork on Windows | PowerShell resolution failures (#63892, #55255) |

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| **Positioning** | First-party vendor tool with Desktop, Cowork, VS Code and GitHub Action surfaces | Open-source, multi-provider, with a Desktop app and a paid or free tier |
| **Target users** | Individual Max subscribers, enterprises (managed settings, hook trust) | Hackers and platform builders, plus cost-sensitive free-tier users |
| **Technical focus** | Governance: hook transparency, fork-PR hardening, spend caps | Architecture: v2 service, Code Mode (psychoscript), plugin API, MUSL embedding, project overlay config |
| **Provider approach** | Single vendor, with credit gating issues (#79597) | Many providers, so quirks such as Copilot picker gaps (#42083), Ollama empty tool calls (#65156) and Bedrock models (#62519) |
| **Change velocity** | One release; one PR updated | Many parallel PRs from a small group of contributors, no release |
| **Failure modes** | Opaque quota, desktop regressions, auth outages | Free-tier friction, billing, service hangs, plugin migration blockers |

## 5. Community Momentum & Maturity

- **OpenCode** has the heavier discussion volume (399, 161 and 150 comment threads) and a visibly high contributor throughput, with about 10 related PRs in 24h. Its megathreads show a large user base, but some of that volume is free-tier complaints, not enthusiasm. It is in a v2 transition. Core migration issues such as plugin parity and service stability are still open. Closing the clipboard and memory megathreads is a maturity signal.
- **Claude Code** has fewer PRs visible in the data, which fits a closed-source tool where development is mostly internal. Its community signal comes through issues and upvotes. The large batch of closures points to active triage. The user base is concerned about trust in quotas, and the tool is well past the "does it work" phase.
- **Caveat:** PR counts partly reflect openness. They do not measure engineering velocity. Claude Code's internal work won't appear in the data.

## 6. Trend Signals

1. **Cost governance is now a top feature.** Both communities ask for predictable limits, and the Claude Code request for runtime spend caps with per-source attribution (#85422) is the clearest example. Teams should evaluate tools for budget controls and not only for model quality.
2. **Trust and permission UX is a differentiator.** Hook provenance warnings, fork-PR protections and non-deterministic auto-mode denials show that security UX is becoming a selection criterion.
3. **Long-session TUI robustness decides daily satisfaction.** Scrollback, queued input, memory and service hangs recur in both tools. Test with multi-hour sessions and tmux or resize scenarios.
4. **Plugin and hook ecosystems will lock in users.** OpenCode's v2 plugin gaps and Claude Code's hook-based customization show that extensibility is where tools compete next. Check API stability before you build on a tool.
5. **Multi-provider quirks are a cost of openness.** OpenCode users face malformed tool-call deltas and picker gaps. Claude Code users face single-vendor quota rules. The choice is between flexibility and a consistent experience.
6. **Windows remains second-class.** Both tools have recurring Windows shell and console issues, so Windows-heavy teams should pilot first.

**Recommendation:** Choose Claude Code if you need a vendor-supported tool with enterprise settings and can accept quota opacity. Choose OpenCode if you need provider flexibility and a hackable plugin or service architecture, and can accept the v2 migration churn. Re-check both after OpenCode's `dev` to production promotion (#64784).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-20)

**Data caveat:** The PR data has no comment counts (all show `undefined`) and every PR has 0 👍. The PR ranking below follows the order supplied, which is nominally by comments, and isn't verified. The Issue counts are real.

---

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Status |
|---|----|--------------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder`: mcp>=2 support | `mcp>=2.0.0` renamed `streamablehttp_client` to `streamable_http_client` and moved custom headers to `create_mcp_http_client`. This breaks `connections.py`. The PR fixes the import and header handling (fixes #1668). | Open (since 09-08) |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator`: isolated trigger evals | Fixes false misses and invalid trigger scores. Per-worker probes compete, `select()` on pipes fails on Windows, and runtime failures are counted as non-triggers. It overlaps with Issues #556 and #1352. | Open (since 06-10) |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` + `quantitative-resume-auditor` | The first skill turns product or tech specs into Notion tasks with acceptance criteria and progress tracking. The second is a resume auditor. | Open (since 06-02) |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing`: drop `shell=True` | Removes the command-injection risk (CWE-78) in `with_server.py`. | Open |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx`: LibreOffice timeout handling | `accept_changes.py` now returns an error on `soffice` timeout. It also reports success only after checking that no revision marks remain. | Open |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Static analysis of Solidity and Rust contracts, with audit proofs anchored on TON. This is a third-party, blockchain-specific skill. | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | Retro game development with Pyxel, including headless runs and frame inspection. | Open (since 03-05) |
| 8 | [#1734](https://github.com/anthropics/skills/pull/1734) docx orphaned-comment detection | Detects orphaned comments in `docx`. The description is empty. | Open |

None of the top PRs are merged, and the data shows no discussion content. Most are maintenance fixes to existing official skills (`skill-creator`, `docx`, `webapp-testing`, `mcp-builder`), not new capabilities.

## 2. Community Demand Trends (from Issues)

1. **Reliable skill evaluation and authoring tooling.** This is the strongest signal.
   - [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍): `run_eval.py` shows a 0% trigger rate.
   - [#1352](https://github.com/anthropics/skills/issues/1352) (6 comments): parallel workers cross-match skill UUIDs and give false negatives.
   - [#202](https://github.com/anthropics/skills/issues/202): `skill-creator` should follow best practices and be more token-efficient.
   - [#2064](https://github.com/anthropics/skills/issues/2064): the `theme-factory` description says what the skill does but not when to use it.
2. **Trust, security and provenance.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed item (46 comments). It reports community skills distributed under the `anthropic/` namespace, which enables impersonation. Related PR: [#1980](https://github.com/anthropics/skills/pull/1980).
3. **Team and org distribution.** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing in Claude.ai. [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports that `document-skills` and `example-skills` install duplicate content.
4. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill injects about 156k tokens in a single call.
5. **Agent memory, governance and quality.**
   - [#1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory`.
   - [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline.
   - [#412](https://github.com/anthropics/skills/issues/412) proposed `agent-governance`; it is closed.
6. **Office-document robustness.** [#2018](https://github.com/anthropics/skills/issues/2018) (`docx` `merge_runs.py` writes invalid XML) and [#1868](https://github.com/anthropics/skills/issues/1868) (gradient off-by-one in `slack-gif-creator`).

[#1143](https://github.com/anthropics/skills/issues/1143) (change account email, 18 👍) is a Claude platform request, not a Skills one. It is the most-upvoted item but off-topic for the repo.

## 3. High-Potential Pending Skills

These are well-scoped fixes to official skills, so they are the most likely to land:
- [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` mcp>=2 compatibility. It breaks real users and is tied to #1668.
- [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` eval isolation. It addresses the highly discussed #556 and #1352.
- [#1980](https://github.com/anthropics/skills/pull/1980) removing `shell=True`. It is a small security fix.
- [#1792](https://github.com/anthropics/skills/pull/1792), [#2019](https://github.com/anthropics/skills/pull/2019) (xlsx defined-names, fixes #2013) and [#1997](https://github.com/anthropics/skills/pull/1997) (YAML frontmatter parsing). All are narrow bug fixes.
- [#1681](https://github.com/anthropics/skills/pull/1681), [#1950](https://github.com/anthropics/skills/pull/1950) and [#1975](https://github.com/anthropics/skills/pull/1975)–[#1977](https://github.com/anthropics/skills/pull/1977) are small fixes. Several have been open for 1–3 months, which suggests slow maintainer throughput.

New third-party skills ([#1245](https://github.com/anthropics/skills/pull/1245), [#1771](https://github.com/anthropics/skills/pull/1771), [#1703](https://github.com/anthropics/skills/pull/1703), [#1615](https://github.com/anthropics/skills/pull/1615), [#525](https://github.com/anthropics/skills/pull/525), [#514](https://github.com/anthropics/skills/pull/514)) are less likely to merge soon. Some have been open since March, and #492 shows trust concerns around community skills.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills and the skill-authoring and evaluation loop (`skill-creator`, trigger evals, MCP and document tooling) reliable, secure and token-efficient, rather than on new domain skills.

---

# Claude Code Community Digest: 2026-11-20

## 1. Today's Highlights

v2.1.329 ships with hook-related trust and visibility improvements. A trust dialog now shows where a folder's hooks are declared, and a warning appears when managed-settings hooks fail to load. Community activity centers on cost and usage anxiety (spend caps, weekly-limit resets, faster limit drain), long-running TUI rendering and input bugs, and Desktop/Cowork regressions after recent app updates. A large batch of older issues was closed in the last 24h, which suggests a triage sweep.

## 2. Releases

**[v2.1.329](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)**
- Added a trust dialog warning that says where a folder's hooks are declared. This is a security-visibility improvement for untrusted repos.
- Added a warning in the conversation, in Claude Desktop and other non-interactive hosts, when hooks in managed settings fail to load. Previously these failures were silent for enterprise-managed setups.
- Also adds a view of this session's scheduled tasks, `/loop` wakeups, and the goal. The release notes were truncated in the source data, so the remaining items are unknown.

## 3. Hot Issues

1. **[#33226](https://github.com/anthropics/claude-code/issues/33226): OAuth error 500 (closed, 57 comments, 👍13).** This is the most-discussed item. It is a Linux auth regression that is now resolved, and its comment count shows how disruptive login failures are. Related: [#44264](https://github.com/anthropics/claude-code/issues/44264) ("OAuth is down", closed).
2. **[#85422](https://github.com/anthropics/claude-code/issues/85422): Token-burn circuit breaker (open, 29 comments).** It asks for runtime-enforced spend caps with per-source attribution (hooks, plugins, subagents), not just warnings. It is the clearest articulation of the cost-control demand.
3. **[#85603](https://github.com/anthropics/claude-code/issues/85603): Queued mid-turn input silently dropped (open, 27 comments).** In the macOS TUI, text typed during a running turn is lost at end_turn. It affects long agent sessions in tmux and costs users work.
4. **[#98145](https://github.com/anthropics/claude-code/issues/98145): Configured response language (Korean) ignored between tool calls (open, 27 comments).** The model drifts back to English in intermediate messages despite `language` settings and saved memory. It is a multilingual-user pain point in the VS Code extension.
5. **[#76272](https://github.com/anthropics/claude-code/issues/76272): Configurable weekly-limit reset timing (open, 👍44).** It has the highest upvotes among open items. Users want a configurable reset day or banked resets like Codex.
6. **[#105621](https://github.com/anthropics/claude-code/issues/105621): Usage limits drain much faster since mid-October (open, 11 comments).** A Max/Windows desktop report with no workflow change, tagged duplicate. It echoes broader quota-trust concerns.
7. **[#79597](https://github.com/anthropics/claude-code/issues/79597): Fable 5 wrongly walled behind usage credits for Max accounts using setup-token (closed, 17 comments).** The interactive picker disagreed with headless `-p` behavior. It is closed, so a fix presumably landed.
8. **[#46834](https://github.com/anthropics/claude-code/issues/46834) / [#52924](https://github.com/anthropics/claude-code/issues/52924): TUI relayout and scrollback duplication (closed, 16 and 15 comments, 👍25 and 👍19).** The full transcript is re-emitted on SIGWINCH or in long sessions, on macOS, Windows and Linux. Both are closed, which is a sign of progress on a long-running rendering problem.
9. **[#85039](https://github.com/anthropics/claude-code/issues/85039): Worktree creation rewrites `core.hooksPath` to an absolute path (closed, 12 comments).** `EnterWorktree` and worktree-isolated agents altered shared git config. It is a data-integrity and surprise-side-effect issue.
10. **[#98109](https://github.com/anthropics/claude-code/issues/98109): Auto mode classifier denied a routine edit without a reason, then allowed the identical retry (open, 10 comments).** It points to non-deterministic, unexplained permission decisions in auto mode.

**Honorable mentions:** Desktop sidebar regressions ([#102116](https://github.com/anthropics/claude-code/issues/102116) and [#102129](https://github.com/anthropics/claude-code/issues/102129)), the survey that can't be disabled ([#94710](https://github.com/anthropics/claude-code/issues/94710)), and Cowork regressions ([#92710](https://github.com/anthropics/claude-code/issues/92710), [#93071](https://github.com/anthropics/claude-code/issues/93071)).

## 4. Key PR Progress

Only one PR was updated in the last 24h, so there are not 10 to list:

- **[#111198](https://github.com/anthropics/claude-code/pull/111198): Don't run `@claude` mentions on pull requests from forks (open).** It stops the `@claude` GitHub Action from triggering on fork PRs. This is a security hardening change that prevents untrusted contributors from invoking the agent with repository secrets or permissions.

## 5. Feature Request Trends

- **Cost and usage controls:** hard spend caps with source attribution ([#85422](https://github.com/anthropics/claude-code/issues/85422)) and configurable or banked weekly resets ([#76272](https://github.com/anthropics/claude-code/issues/76272)).
- **TUI ergonomics:** message timestamps ([#30745](https://github.com/anthropics/claude-code/issues/30745), 👍36), a configurable post-turn completion verb ([#52420](https://github.com/anthropics/claude-code/issues/52420), 👍31), and collapsing file-diff output ([#80720](https://github.com/anthropics/claude-code/issues/80720)).
- **Session management:** programmatic session renaming via hooks or tools ([#40346](https://github.com/anthropics/claude-code/issues/40346)), session transfer between instances ([#73639](https://github.com/anthropics/claude-code/issues/73639)), and archived sessions in the Desktop sidebar ([#102116](https://github.com/anthropics/claude-code/issues/102116)).
- **Desktop UX control:** opting out of the feedback survey ([#94710](https://github.com/anthropics/claude-code/issues/94710)) and keeping the flat sidebar structure ([#102129](https://github.com/anthropics/claude-code/issues/102129)).

## 6. Developer Pain Points

- **Quota opacity and drain:** users report limits depleting faster with no workflow change ([#105621](https://github.com/anthropics/claude-code/issues/105621)), have no control over reset timing, and see inconsistent credit gating ([#79597](https://github.com/anthropics/claude-code/issues/79597)).
- **TUI reliability in long sessions:** scrollback duplication, relayout spills, dropped queued input, and plan-mode scrolling and edit leaks ([#75202](https://github.com/anthropics/claude-code/issues/75202), [#21292](https://github.com/anthropics/claude-code/issues/21292)).
- **Auth and platform instability:** OAuth 500s and outages, Cowork VM and sandbox failures on Windows ARM64 and x64 ([#39161](https://github.com/anthropics/claude-code/issues/39161), [#93071](https://github.com/anthropics/claude-code/issues/93071)), and macOS Cowork project-model changes that broke existing workflows ([#92710](https://github.com/anthropics/claude-code/issues/92710)).
- **Windows ergonomics:** Bash and PowerShell tool calls spawn focus-stealing console windows ([#91264](https://github.com/anthropics/claude-code/issues/91264)).
- **Unexplained or non-deterministic behavior:** auto-mode denials without reasons ([#98109](https://github.com/anthropics/claude-code/issues/98109)), instructions such as response language not honored ([#98145](https://github.com/anthropics/claude-code/issues/98145)), and surprise side effects on git config ([#85039](https://github.com/anthropics/claude-code/issues/85039)).
- **Silent UI and settings changes in Desktop:** the nested sidebar and removed archived-session filter arrived without notice.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-20

## 1. Today's Highlights

The main story is the TUI/service stability work around the v2 background service. Issue #64869 (`edit` hangs on one path) already has a cluster of fixes from neriousy: #65201 moves permission prompts out of the file-mutation lock, and #65203 treats zombie service processes as stopped. In parallel, the team is testing Code Mode more widely: #65208 and #65193 extend it to all models and fix top-level tool calls. Free-tier problems (#59387, 399 comments) are still the biggest source of user friction. No new releases were published, but #64784 would promote `dev` to production.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) – Free tier issues megathread (399 comments, 30 👍).** It collects reports such as "Free usage exceeded" and resets that never happen. It is the biggest user-facing pain point, and the thread is still active.
2. **[#4283](https://github.com/anomalyco/opencode/issues/4283) – Copy to clipboard not working (closed, 161 comments, 135 👍).** This is a long-running cross-platform complaint dating to v1.0.62. It was updated again and is now closed, which is good news for many users.
3. **[#20695](https://github.com/anomalyco/opencode/issues/20695) – Memory Megathread (closed, 150 comments, 112 👍).** The maintainers collected heap snapshots in one place and asked users not to post LLM-generated fixes. Closing it suggests the memory work has reached a milestone.
4. **[#64869](https://github.com/anomalyco/opencode/issues/64869) – `edit` hangs indefinitely in the background service.** `write` and a standalone server both work, so the problem is specific to the service. It already has two linked fix PRs.
5. **[#64073](https://github.com/anomalyco/opencode/issues/64073) – Restore foreground subagent execution (22 comments).** This v2 regression reports a lost workflow and is drawing active discussion.
6. **[#45278](https://github.com/anomalyco/opencode/issues/45278) – Payment declined after 3 months (49 comments, 36 👍).** Many users report renewals failing even though their cards are valid. This is a billing reliability concern.
7. **[#51209](https://github.com/anomalyco/opencode/issues/51209) and [#53019](https://github.com/anomalyco/opencode/issues/53019) – V2 plugin API gaps.** V2 lacks a way to expose the TUI composer to plugins (#51209) and a way to transform assistant text for display (#53019, 13 👍). These are the main blockers for migrating v1 plugins.
8. **[#61072](https://github.com/anomalyco/opencode/issues/61072) – Claude Agent plan limit drains ~1.8x faster.** The SDK labels requests `sdk-ts`, which affects quota. It is closed now, but it highlights how the Claude Agent provider interacts with plan limits.
9. **[#57985](https://github.com/anomalyco/opencode/issues/57985) – Adding a git remote changes the project ID and hides earlier sessions.** No data is deleted, but sessions vanish from `/sessions`. This is a surprising and confusing failure.
10. **[#49704](https://github.com/anomalyco/opencode/issues/49704) – Plugin git deps with build or prepare scripts fail.** The compiled binary can't run its bundled `npm-cli.js`, so any such git dependency fails to install. It has 8 comments and is reproduced.

## 4. Key PR Progress

1. **[#65201](https://github.com/anomalyco/opencode/pull/65201) – Keep permission prompts outside file mutation locks.** Fixes #64869 by no longer holding the per-file lock while waiting for user approval.
2. **[#65203](https://github.com/anomalyco/opencode/pull/65203) – Treat zombie service processes as stopped.** Fixes `opencode service restart` and eviction logic.
3. **[#65202](https://github.com/anomalyco/opencode/pull/65202) – Auto-accept permissions across background sessions in the TUI.** Auto-accept previously only answered requests inside the active `<Session>` route.
4. **[#65208](https://github.com/anomalyco/opencode/pull/65208) – Built-ins in Code Mode for every model under `full_codemode`.** This removes the GPT/Claude-only restriction on dev and local builds so more models can be tested.
5. **[#65193](https://github.com/anomalyco/opencode/pull/65193) – Run Code Mode tools called at the top level.** Handles weaker models that call a tool directly instead of through the wrapper.
6. **[#65207](https://github.com/anomalyco/opencode/pull/65207) – Code Mode moves to psychoscript 0.2.1.** It imports the Effect API from `psychoscript/effect`.
7. **[#65204](https://github.com/anomalyco/opencode/pull/65204) – Per-project overlay config directory.** thdxr's PR loads config from `~/.config/opencode/project/<project-id>/`, outside the repo.
8. **[#64955](https://github.com/anomalyco/opencode/pull/64955) – Embed the static MUSL helper in Linux GLIBC builds.** Closes #51796 and removes the GLIBC >= 2.29 requirement.
9. **[#65182](https://github.com/anomalyco/opencode/pull/65182) – Let TUI plugins handle link opens.** Adds `context.ui.links.register(handler)`, which narrows the v2 plugin API gap.
10. **[#64486](https://github.com/anomalyco/opencode/pull/64486) – Let the model pick a web search provider per call.** The schema and HTTP API already support `providerID`, but the model-facing tool didn't expose it.

Also worth noting:
- [#64784](https://github.com/anomalyco/opencode/pull/64784) promotes `dev` to production and includes Tidepool Alpha Free and Gemini 4 Neon docs.
- [#65206](https://github.com/anomalyco/opencode/pull/65206) adds a task list, agent task tools and a diligence monitor. It is flagged `needs:compliance`.

## 5. Feature Request Trends

- **V2 plugin API parity:** composer access (#51209), assistant text transforms (#53019), and link handling (#65182).
- **Configurable UX:** App prompt action shortcuts (#43088) and project deletion in Desktop (#28030, closed).
- **Deployment and integration:** base path and prefix routing (#7624, closed), and a browser tab-close API (#59787, closed).
- **Agent workflow control:** foreground subagent execution (#64073) and per-call web search provider selection (#64486).
- **Model and provider support:** Kimi k3.1 on Bedrock (#62519, closed), custom providers (#59603), and more `claude-agent` fidelity (#62916, #63871, both closed).

## 6. Developer Pain Points

- **Free tier and billing:** limits that never reset, "usage exceeded" errors and declined renewals (#59387, #45278).
- **Service and TUI stability in v2:** hangs in `edit`, duplicate notifications across TUI instances (#51014), tabs shared between local and remote servers (#47998), and Home/End keys breaking after a prompt is submitted (#56890, closed).
- **Windows shell resolution:** Store PowerShell fails with 0xC0070005 (#63892) and `pwsh` app-execution aliases aren't resolved (#55255). Both are now closed.
- **Data integrity:** `edit` and `apply_patch` silently corrupt non-UTF-8 files (#45924, severity:high, closed).
- **Provider and model quirks:** GitHub Copilot models missing from the picker (#42083), malformed OpenAI Chat tool-call deltas (#52700), and empty tool calls from small Ollama models (#65156).
- **Memory and clipboard issues:** these were long-running and are now closed (#20695, #4283). Watch for regressions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
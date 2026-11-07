# AI CLI Tools Community Digest 2026-11-07

> Generated: 2026-11-07 13:43 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: Claude Code vs OpenCode (2026-11-07)

Scope note: only two tools had digests today. The counts below come from the digests themselves, and some are approximate.

## 1. Ecosystem Overview

Both communities are dealing with **reliability and cost transparency**, not new features. Claude Code's community is focused on privacy (#107757, 715 👍), usage-limit accounting, and model behavior. OpenCode's community is focused on free-tier stability and the V2 migration. Windows path handling, session recovery, and authentication or billing friction show up in both. The two tools differ in structure. Claude Code is a vendor-run product with a closed, server-side model. OpenCode is a multi-provider, plugin-extensible platform, so its problems come from integration breadth.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Issues highlighted | ~10 hot issues (plus about 15 more referenced) | ~10 hot issues (plus 2 more noted) |
| PRs updated (24h) | **0** | ~12 listed (several closed) |
| Release | v2.1.319 (auto-mode behavior change) | v2.2.6 (shared MCP connections, GUI plugin themes) |
| Top engagement | #107757: 715 👍, 102 comments | #59387: 320 comments; #11176: 164 👍 |
| Release notes | Truncated | Truncated |

Claude Code's source code is not open to community PRs, which likely explains why it had no PR activity. OpenCode had visible PR throughput.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Cross-platform correctness (Windows)** | Backslash halving in Git Bash (#85856); MSIX packaging (#79220) | Backslash and drive-letter corruption (#62559); WSL lag (#62055) |
| **Resource and concurrency governance** | Resource governance for agent process trees (#91081) | Cap on parallel subagents (#27110) |
| **Session and state recovery** | Recurring re-login (#1757, #89812) | Stuck sessions that cannot be interrupted or deleted (#62442) |
| **Skills and plugin ecosystem** | Skills subdirectory support (#10238) | Agent Plugins standard (#40993) |
| **Usage and quota visibility** | Per-model weekly limits in the statusline (#73770); window accounting (#97074, #103376) | Free-tier quota resets that never happen (#59387) |
| **Desktop UX management** | Sidebar and filter regressions | Project deletion (#28030), pinned sessions |

## 4. Differentiation Analysis

| | Claude Code | OpenCode |
|---|---|---|
| **Focus** | First-party Anthropic experience: auto mode, hooks, `/goal`, Cowork, Projects | Open platform: many providers, MCP pooling, plugins, desktop and TUI |
| **Target users** | Paying subscribers and automation users (`claude -p`), plus enterprise users on gateways, Bedrock, Vertex or Foundry | Cost-sensitive and free-tier users, local-model users, and users in regions with billing problems |
| **Technical approach** | Server-verified auto mode and a classifier. v2.1.319 denies or asks when the server can't verify a call | Local-first and extensible. Shared MCP service, a V2 database, and plugins that can change prompts (#58175) |
| **Main risk** | Trust, privacy and opaque limits | Stability, migration and dependence on upstream capacity |

## 5. Community Momentum & Maturity

- **Claude Code** has the largest engagement per thread, with 715 👍 on one issue and several threads over 100 comments. Many of the issues are long-lived (#1757 is from June 2025), so it is a mature, high-visibility tool. Its issue backlog is aging and the community response is more complaint than contribution.
- **OpenCode** is iterating faster in public. It has many PRs landing, a new release, closed-out fixes, and maintainers triaging. Its V2 migration is the main source of instability, which is typical of a rapidly changing project.
- **Compliance gating** (`needs:compliance` closures on OpenCode) suggests the project is formalizing its contribution process.

## 6. Trend Signals

1. **Cost and limit transparency is a primary concern.** Both communities want to see quota accounting, and headless or automated usage is priced differently (#97074).
2. **Privacy and data leakage are rising.** Claude Code's User-Agent email exposure is the clearest example. OpenCode's #58175 shows a related concern: plugins can silently alter prompts.
3. **Verification is replacing implicit trust.** Claude Code's auto mode now denies calls it cannot verify. Teams behind LLM gateways should set `CLAUDE_CODE_AUTO_MODE_SERVER=0` deliberately or test the new behavior before upgrading.
4. **Multi-agent control is becoming a requirement.** Caps, resource limits, and correct completion semantics for subagents (#48826) were all requested.
5. **Standards are converging.** Requests for the Agent Plugins standard, MCP sharing, and Skills organization point to portable skills and tools.
6. **Windows support is a persistent weak spot** across both tools.

**Guidance for decision-makers:** choose Claude Code for a managed experience if you can accept its limit opacity and recent privacy concerns. Choose OpenCode for provider flexibility and local models, but plan for V2 instability and free-tier unreliability. Whichever you choose, test Windows workflows before rolling out to a team.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-07)

**Data caveat:** every PR in the feed shows `Comments: undefined` and 👍 0, so I can't rank PRs by real discussion volume. The PR ranking below follows the feed's order, adjusted for recent activity and impact. Issue comment counts are intact. All listed PRs are **OPEN**, and none are merged or draft.

## 1. Top Skills Ranking (PRs)

1. **[#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder: support `mcp>=2`**
   - **What it does:** Fixes the `streamable_http_client` rename and the new custom-header path (`create_mcp_http_client`). Fixes #1668.
   - **Why it matters:** It is a compatibility break against the current MCP SDK.
   - **Status:** Open, updated 2026-10-08.
2. **[#1298](https://github.com/anthropics/skills/pull/1298) skill-creator: isolate trigger evals**
   - **What it does:** Fixes false misses from competing per-worker probes, `select()` failures on Windows pipes, and runtime failures being scored as non-triggers.
   - **Why it matters:** It relates to the trigger-eval problem in Issue [#556](https://github.com/anthropics/skills/issues/556).
   - **Status:** Open, updated 2026-09-16.
3. **[#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: drop `shell=True`**
   - **What it does:** Removes the command-injection risk (CWE-78) in `with_server.py`.
   - **Status:** Open, updated 2026-11-01.
4. **[#1792](https://github.com/anthropics/skills/pull/1792) docx: report LibreOffice timeout as error**
   - **What it does:** `accept_changes.py` no longer reports success on a `soffice` timeout. It now checks that revision marks are really gone.
   - **Status:** Open, updated 2026-11-01.
5. **[#2019](https://github.com/anthropics/skills/pull/2019) xlsx: resolve worksheet-scoped defined names**
   - **What it does:** Closes false negatives in `external_links_at_risk`. Fixes #2013.
   - **Status:** Open, updated 2026-11-03.
6. **[#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation + quantitative-resume-auditor**
   - **What it does:** Turns specs into Notion tasks with acceptance criteria. The same PR adds a resume-audit skill.
   - **Status:** Open, updated 2026-10-15. It bundles two unrelated skills, which makes it harder to review.
7. **[#525](https://github.com/anthropics/skills/pull/525) Pyxel retro-game skill**
   - **What it does:** Covers headless input-driven runs, frame inspection and state checks.
   - **Status:** Open since 2026-03, updated 2026-11-01.
8. **[#1997](https://github.com/anthropics/skills/pull/1997) skill-creator: correct YAML frontmatter parsing**
   - **What it does:** Stops `parse_skill_md` from mangling quotes and continuation lines, which feeds wrong metadata into evals.
   - **Status:** Open, updated 2026-10-19.

## 2. Community Demand Trends (Issues)

- **Trust and provenance.** [#492](https://github.com/anthropics/skills/issues/492) is the top issue with 46 comments. It reports community skills distributed under the `anthropic/` namespace, which enables impersonation.
- **Org-wide sharing.** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 👍 8) asks for shared skill libraries or links in Claude.ai instead of passing `.skill` files around.
- **Skill-authoring and eval reliability.**
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows a 0% trigger rate.
  - [#202](https://github.com/anthropics/skills/issues/202): skill-creator should follow best practice.
  - [#2064](https://github.com/anthropics/skills/issues/2064): the theme-factory description says what it does but not when to use it.
  - [#1394](https://github.com/anthropics/skills/issues/1394): an XSS gap in the eval-viewer.
- **Context cost.** [#1487](https://github.com/anthropics/skills/issues/1487) says `claude-api` injects about 156k tokens eagerly. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins.
- **Agent memory, governance and quality gates.**
  - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory.
  - [#412](https://github.com/anthropics/skills/issues/412): agent-governance (closed).
  - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning quality-gate pipeline.
- **Bugs in the bundled document and MCP skills.**
  - [#2018](https://github.com/anthropics/skills/issues/2018): `merge_runs.py` writes invalid XML.
  - [#1390](https://github.com/anthropics/skills/issues/1390): mcp-builder's `evaluation.py` scores 0/N against real servers.
  - [#1868](https://github.com/anthropics/skills/issues/1868): `create_gradient_background` never reaches its `bottom_color`.

## 3. High-Potential Pending Skills

These are small, scoped fixes with clear problem statements that map to open issues. They are the most likely to land first.

- [#1742](https://github.com/anthropics/skills/pull/1742) (mcp-builder, `mcp>=2`) is a breaking-SDK fix and should be easy to merge.
- [#1980](https://github.com/anthropics/skills/pull/1980) (webapp-testing security hardening) closes a command-injection risk.
- [#1298](https://github.com/anthropics/skills/pull/1298) and [#1997](https://github.com/anthropics/skills/pull/1997) (skill-creator eval and parsing fixes) address the eval problems in #556.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#2019](https://github.com/anthropics/skills/pull/2019) (docx and xlsx correctness fixes) are narrow and verifiable.
- [#1730](https://github.com/anthropics/skills/pull/1730) (dead URLs) and [#538](https://github.com/anthropics/skills/pull/538) (case-sensitive references in pdf/SKILL.md) are trivial docs fixes.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) are one-line fixes, each tied to an issue.
- **Less likely to merge soon:** new third-party skills such as [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor), [#1703](https://github.com/anthropics/skills/pull/1703) (md2video-audio), [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc), [#514](https://github.com/anthropics/skills/pull/514) (document-typography) and [#525](https://github.com/anthropics/skills/pull/525) (Pyxel). Several have been open for months with no merge, and given Issue #492, namespace and trust concerns probably slow new additions.

## 4. Skills Ecosystem Insight

The community's concentrated demand is for **trustworthy, correct and context-efficient core skills**. That means fixing the bundled document, MCP and skill-creator tooling, adding provenance and sharing controls, and cutting token overhead, rather than adding new niche skills.

---

# Claude Code Community Digest — 2026-11-07

## 1. Today's Highlights
v2.1.319 changes auto mode behavior when telemetry or feature flags are off, including behind LLM gateways. The community's attention is on a privacy report about the `User-Agent` header leaking user emails during web searches (#107757, 715 👍), alongside ongoing usage-limit and cost-accounting complaints. No PRs were updated in the last 24h.

## 2. Releases

**[v2.1.319](https://github.com/anthropics/claude-code/releases)**
- Auto mode with telemetry or feature flags off (including behind LLM gateways): calls the server can't verify are now asked about or denied. There is no fallback to the built-in classifier.
- To keep the old behavior, set `CLAUDE_CODE_AUTO_MODE_SERVER=0`. Bedrock, Vertex and Foundry are unchanged.
- The release notes in the data were truncated, so other changes may exist.

## 3. Hot Issues

1. **[#107757](https://github.com/anthropics/claude-code/issues/107757) — Email exposed in User-Agent header.** The reporter says their email went to third parties during web searches and led to scam email. It has 715 👍 and 102 comments, opened 2026-11-05. It matters most because it is a privacy and security issue, and the reporter wants the behavior removed rather than made a setting.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — `/goal` Stop-hook model behavior (closed).** The report covers the model citing a hook directive as authorization for unrequested actions, and treating absence of search results as evidence of absence. It has 286 comments, the most in this set.
3. **[#69044](https://github.com/anthropics/claude-code/issues/69044) — Months of documented recurring errors.** A structured feedback document from a daily user, with 128 comments. It reflects broad concern about model reliability.
4. **[#97074](https://github.com/anthropics/claude-code/issues/97074) — Headless `claude -p` uses about 1.8× more of the 5-hour window per token than interactive mode.** It has a repro and 154 👍. This affects anyone automating with the CLI.
5. **[#103376](https://github.com/anthropics/claude-code/issues/103376) — Weekly limit jumped from 0% to 54% in 22h.** The reporter used the same token volume that took 4.4 days to reach 60% the week before. It is one of several usage-accounting complaints.
6. **[#1757](https://github.com/anthropics/claude-code/issues/1757) — Constant re-login.** An open issue since June 2025 with 90 comments. A related Linux Desktop report, [#89812](https://github.com/anthropics/claude-code/issues/89812), describes roughly daily forced re-login.
7. **[#2511](https://github.com/anthropics/claude-code/issues/2511) — Connect Claude Code to Claude.ai Projects.** A long-running request with 430 👍.
8. **[#85856](https://github.com/anthropics/claude-code/issues/85856) — Windows Git Bash halves backslashes in Bash tool commands.** Quoting does not prevent it, so it silently breaks commands.
9. **[#72957](https://github.com/anthropics/claude-code/issues/72957) — Write/Edit tools decode `\uXXXX` in file content.** Literal escape sequences cannot be stored, which corrupts files. It is marked reproduced.
10. **[#98769](https://github.com/anthropics/claude-code/issues/98769) — macOS `fseventsd` runaway on agent-heavy Macs.** It can block Claude Code at startup, and nothing detects it. Related: [#91081](https://github.com/anthropics/claude-code/issues/91081) asks for resource governance of agent-spawned process trees.

## 4. Key PR Progress
No pull requests were updated in the last 24h, so there is nothing to report.

## 5. Feature Request Trends
- **Cross-device and cross-product context:** portable project memory ([#25739](https://github.com/anthropics/claude-code/issues/25739)) and Claude.ai Projects integration ([#2511](https://github.com/anthropics/claude-code/issues/2511)).
- **Credential handoff for browser automation:** password-manager integration ([#83380](https://github.com/anthropics/claude-code/issues/83380), [#96762](https://github.com/anthropics/claude-code/issues/96762)).
- **Configurability:** voice dictation timeouts ([#74534](https://github.com/anthropics/claude-code/issues/74534)), the Cowork VM storage location ([#56089](https://github.com/anthropics/claude-code/issues/56089)), and per-model weekly limits in the statusline ([#73770](https://github.com/anthropics/claude-code/issues/73770), closed).
- **Skills organization:** subdirectory support ([#10238](https://github.com/anthropics/claude-code/issues/10238), closed).
- **Resource governance for agent processes** ([#91081](https://github.com/anthropics/claude-code/issues/91081)).
- **UI/UX:** an option to disable cross-session up-arrow history ([#15631](https://github.com/anthropics/claude-code/issues/15631)).

## 6. Developer Pain Points
- **Usage limits and cost transparency:** headless mode costs more per token (#97074), weekly limits jump unexpectedly (#103376), and users want visibility into per-model limits.
- **Authentication:** repeated re-login on CLI and Linux Desktop, plus macOS Desktop sign-in failing with "couldn't verify your browser" ([#103788](https://github.com/anthropics/claude-code/issues/103788)).
- **Desktop regressions:**
  - The Routines sidebar is forced hidden ([#102150](https://github.com/anthropics/claude-code/issues/102150)).
  - The project filter was removed ([#78857](https://github.com/anthropics/claude-code/issues/78857)).
  - A "Run on Startup" toggle that can't be turned off ([#48078](https://github.com/anthropics/claude-code/issues/48078)).
  - Windows MSIX packaging blocks the flicker workaround ([#79220](https://github.com/anthropics/claude-code/issues/79220)).
- **Windows tooling quirks:** backslash mangling in Bash (#85856).
- **Tool correctness:** the Write/Edit unicode escape bug (#72957).
- **Overblocking:** `naver.com` is blocked by default safety restrictions ([#95539](https://github.com/anthropics/claude-code/issues/95539)).
- **Model behavior:** long threads (#60705, #69044) report user rules being ignored and weak handling of pushback.
- **Privacy and trust:** the User-Agent email leak (#107757) is the top concern today.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-07

## 1. Today's Highlights
OpenCode **v2.2.6** shipped with shared MCP connection pooling and GUI plugin theming. The free tier ("Beam Free", "Crouton Alpha") has stalling, capacity and quota problems that dominate community discussion. A cluster of V2 stability bugs (stuck sessions, subagent completion, Windows path corruption) is still open, while maintainers (Tarquinen) closed out several long-standing fixes.

## 2. Releases
**[v2.2.6](https://github.com/anomalyco/opencode/releases)**. The release notes were truncated in the source data. Visible highlights:
- **Shared MCP Connections**: pooling lets one MCP server connection be shared across projects with identical setup. This means fewer processes and faster startup ([#61185](https://github.com/anomalyco/opencode/pull/61185)).
- **GUI Plugin Themes and New Slots**: GUI plugins gain theme support and new slots. The rest of the note is cut off.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Zen free tier master thread** (320 comments, 👍24). This is the central triage point for "Free usage exceeded" errors and daily resets that never happen. It is by far the most active thread.
2. **[#11176](https://github.com/anomalyco/opencode/issues/11176) Official VS Code extension** (👍164, the highest-voted item). It is a long-running request for native IDE integration.
3. **[#23153](https://github.com/anomalyco/opencode/issues/23153) Pay for Go with crypto** (closed, 34 comments, 👍67). It points to payment-friction demand.
4. **[#52958](https://github.com/anomalyco/opencode/issues/52958) Go subscription payments declined from Italy** (closed). Regional billing failures block EU users.
5. **[#51949](https://github.com/anomalyco/opencode/issues/51949) Agent loses top-level tools after auto-compaction**. It falls back to code mode, concludes its tools are unregistered, and tells the user so. This is a serious reliability regression.
6. **[#48826](https://github.com/anomalyco/opencode/issues/48826) V2 subagents marked completed while background work is pending**. Results are never collected and the parent gets a premature reply. The issue is reproduced.
7. **[#27110](https://github.com/anomalyco/opencode/issues/27110) Cap on parallel subagents** (👍42). It matters especially to local-model users who are limited by memory and context.
8. **[#40993](https://github.com/anomalyco/opencode/issues/40993) Support the Agent Plugins standard** (👍21). It asks for vendor-neutral packaging of skills and MCP servers.
9. **[#62559](https://github.com/anomalyco/opencode/issues/62559) Windows backslash paths corrupted in tool arguments**. Drive letters and backslashes get stripped intermittently, breaking read, shell and edit tools.
10. **[#62442](https://github.com/anomalyco/opencode/issues/62442) Desktop session stuck running; interrupt returns false, delete times out**. Users cannot recover the session without outside intervention.

Also notable: [#62524](https://github.com/anomalyco/opencode/issues/62524) (`prefill_cap_refused`, upstream at capacity) and [#62460](https://github.com/anomalyco/opencode/issues/62460) (Beam Free stalling, closed).

## 4. Key PR Progress

1. **[#62584](https://github.com/anomalyco/opencode/pull/62584)** stops labeling incompatible servers "OpenCode 1" (fixes [#53375](https://github.com/anomalyco/opencode/issues/53375)).
2. **[#62217](https://github.com/anomalyco/opencode/pull/62217)** adds a session Media panel, behind the `session_media` flag, that lists images, videos and links.
3. **[#57161](https://github.com/anomalyco/opencode/pull/57161)** adds model discovery for configured OpenAI-compatible providers such as LiteLLM, so models no longer need to be listed by hand.
4. **[#61659](https://github.com/anomalyco/opencode/pull/61659)** (closed) recovers question and permission alerts missed by the event stream. This is related to the TUI question-selector bug in [#59759](https://github.com/anomalyco/opencode/issues/59759).
5. **[#62571](https://github.com/anomalyco/opencode/pull/62571)** (closed) skips `node_modules` when discovering markdown agents.
6. **[#62568](https://github.com/anomalyco/opencode/pull/62568)** (closed) imports legacy `auth.json` when creating a fresh V2 database.
7. **[#62569](https://github.com/anomalyco/opencode/pull/62569)** (closed) makes `/api/skill` wait for plugins, so a cold start no longer returns `[]`.
8. **[#62578](https://github.com/anomalyco/opencode/pull/62578)** skips unreachable well-known sources instead of dropping all of them.
9. **[#62581](https://github.com/anomalyco/opencode/pull/62581)** fixes desktop onboarding being skipped when `userData` holds a stray `.dat` file.
10. **[#62028](https://github.com/anomalyco/opencode/pull/62028)** and **[#61551](https://github.com/anomalyco/opencode/pull/61551)** fix instruction-notice replay after revert and fork. **[#61273](https://github.com/anomalyco/opencode/pull/61273)** reads Claude instructions after plugin context hooks.

Others: [#61083](https://github.com/anomalyco/opencode/pull/61083) (code block wrap setting) and [#62237](https://github.com/anomalyco/opencode/pull/62237) / [#62587](https://github.com/anomalyco/opencode/pull/62587) (agent tunnel messaging and graph view; both closed as `needs:compliance`).

## 5. Feature Request Trends
- **IDE and ecosystem integration**: an official VS Code extension ([#11176](https://github.com/anomalyco/opencode/issues/11176)) and Agent Plugins standard support ([#40993](https://github.com/anomalyco/opencode/issues/40993)).
- **More providers and payment options**: CommandCode ([#26338](https://github.com/anomalyco/opencode/issues/26338)), crypto payments, and auto-discovery of models for custom gateways.
- **Multi-agent control**: parallel subagent limits ([#27110](https://github.com/anomalyco/opencode/issues/27110)) and agent graph visualization.
- **Desktop and UX management**: delete projects ([#28030](https://github.com/anomalyco/opencode/issues/28030)), pin sessions, a media panel, and code wrap.
- **Config flexibility**: `exec` variable substitution ([#7487](https://github.com/anomalyco/opencode/issues/7487)) and V1 CLI parity such as `-m` on the root command ([#56218](https://github.com/anomalyco/opencode/issues/56218)).

## 6. Developer Pain Points
- **Free-tier reliability**: stalls mid-turn ("let me do this now" then stop), capacity errors, and quota resets that never come. These cluster around Beam Free and Crouton Alpha ([#59387](https://github.com/anomalyco/opencode/issues/59387), [#62460](https://github.com/anomalyco/opencode/issues/62460), [#61511](https://github.com/anomalyco/opencode/issues/61511)).
- **V2 migration instability**: the shared service dies during skill updates on Windows ([#47505](https://github.com/anomalyco/opencode/issues/47505)), network failures need `service restart` ([#62232](https://github.com/anomalyco/opencode/issues/62232)), empty model lists ([#61481](https://github.com/anomalyco/opencode/issues/61481)), and stuck "Working" states ([#60330](https://github.com/anomalyco/opencode/issues/60330)).
- **Windows and WSL**: path corruption, a lingering image card in the TUI ([#56748](https://github.com/anomalyco/opencode/issues/56748)), and WSL lag ([#62055](https://github.com/anomalyco/opencode/issues/62055)).
- **TUI and desktop input and state bugs**: Home/End keys breaking ([#56890](https://github.com/anomalyco/opencode/issues/56890)), the question selector not appearing ([#59759](https://github.com/anomalyco/opencode/issues/59759)), and misleading background hints ([#36940](https://github.com/anomalyco/opencode/issues/36940)).
- **Billing and regional access**: declined payments and a lack of alternative payment methods.
- **Diagnosability**: a cache collapse on deepseek-v4.1-flash turned out to be a local plugin mutating the system prompt ([#58175](https://github.com/anomalyco/opencode/issues/58175)). This suggests that surfacing plugin-induced prompt changes would help users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
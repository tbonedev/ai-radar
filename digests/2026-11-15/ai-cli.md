# AI CLI Tools Community Digest 2026-11-15

> Generated: 2026-11-15 14:28 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Ecosystem, 2026-11-15

*Scope: Claude Code and OpenCode only. The digests supplied cover just these two tools, so every comparison is between them.*

## 1. Ecosystem Overview

Both tools are past the early-adopter stage. Their communities now argue about operations, not capability: triage policy, state durability, permission models and desktop stability. Neither shipped a release in the last 24h, and the day's activity was bug reports, cleanup and small fixes. The two tools differ in structure. Claude Code is a vendor-run product with a closed-source core, and community friction centers on how Anthropic runs support and automation. OpenCode is an open, multi-provider project, and its friction centers on V2 architecture, provider and quota handling, and platform regressions.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Release status (24h) | None | None |
| Hot issues listed | 10 (+ many more in trend sections) | 10 (+ 2 additional noted) |
| Top issue by comments | #60705 (302, closed) | #59387 (367, open) |
| Top issue by 👍 | #87647 (148, open) | #59387 (28) |
| PRs updated | 2 (#78445, #106972) | 10+ listed (+2 additional) |
| PR character | Docs fix, triage-workflow fix | Features, permission and security fixes, UI, provider discovery, native CLI port |
| Issue state mix | Heavy bulk closing under `stale` labeling | Mostly open, with several closed |

Note that Claude Code's issue activity is inflated by the bulk stale closures. The counts overstate the amount of new engineering work.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Session/project continuity | Pinning sessions (#63842), history surviving directory moves (#71568) | Unarchiving sessions (#12393), per-session prompt history (#52154), preserved permission/question waits across restart (#36347) |
| Subagent/orchestration control | Per-subagent `advisor` (#73072), parent observing children (#71773) | Subagent compaction failures (#56862) and the compaction-control interest (#3325) |
| Permission and security hardening | Scrubbing PII from `/feedback` (#72156), org-only GitHub integration (#72856) | Shell redirects authorized as writes (#64058), managed permissions precedence (#64048), plugin-tool whitelisting (#64051) |
| Terminal/TUI ergonomics | Mouse leaks (#76816), Shift+Enter on Windows (#92771), Kitty protocol (#71700) | Keypad and Ctrl+arrow navigation (#63947, PR #64075), timestamp toggle (#49742) |
| Desktop app reliability | Windows lag (#26302), repeated sign-ins (#84938) | Stale file previews (#52941), Windows path-case splits (#52501) |
| Cost and plan visibility | Fable 5 staying in Max (#73305) | Catalog-price estimates when a provider reports $0 (#59861) |

## 4. Differentiation Analysis

- **Provider model.** Claude Code concentrates on Anthropic's own models and plans, so its requests concern plan inclusion and model choice per routine (#72871). OpenCode is provider-agnostic, so its work goes into local and custom providers (LM Studio, LiteLLM-style gateways, ChatGPT subscription) and catalog reconciliation (#57161, #40524).
- **Where the friction sits.** Claude Code's biggest complaint is about process: auto-closed "has repro" issues (#87647) and stale labels with no warning (#46083). OpenCode's biggest complaints are product-level: the free tier (#59387), V2 durability and 2.x regressions.
- **Contribution surface.** OpenCode shows many small external fixes in one day. Claude Code's visible PRs are few and maintainer-oriented, which suggests a narrower channel for community code.
- **Technical direction.** OpenCode is rebuilding around V2 managed services and previewing a native CLI port (#63477). Claude Code is extending the desktop app and its automation surface (routines, subagents, Cowork).
- **Target users.** Claude Code serves Anthropic subscribers who want a polished, integrated experience. OpenCode serves developers who want model flexibility, self-hosting and local models.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger issue volume and the higher engagement ceiling (302 comments, 148 👍). Much of that activity is a reaction to triage policy, though, not signs of faster iteration. Only 2 PRs were updated on the day, and its issue numbers (above 106k for PRs) show a large cumulative base.
- **OpenCode** is iterating faster on code. It has a dozen concurrent PRs on permissions, TUI, WebFetch and providers, and its community reports regressions quickly (for example 2.3.0 PTY zombies, filed against a fresh release). The cost of that speed is instability across 2.x upgrades.
- **Maturity.** Both have mature user bases but unresolved reliability problems. Claude Code's maturity issues concern support operations and the Desktop app. OpenCode's concern state durability and Windows behavior.

## 6. Trend Signals

1. **Triage and support automation is now a product-quality factor.** Claude Code's thread on auto-closed issues shows that developers judge a tool partly by how it handles their bug reports.
2. **Durable agent state is becoming a requirement.** Both communities ask for sessions, approvals and context that survive restarts, moves and cleanups (#63842, #36347, #54180).
3. **Permission models are a competitive front.** OpenCode's PRs on shell redirects and managed precedence, and Claude Code's privacy requests, show that fine-grained control is expected for enterprise use.
4. **Multi-provider and local-model support is a differentiator.** OpenCode's provider work contrasts with Claude Code's single-vendor plan questions.
5. **Windows and desktop parity is a recurring weak spot** in both tools (input handling, path handling, lag).
6. **Subagent orchestration is moving from novelty to operations.** Users want to observe, message and resume subagents, and they hit compaction limits when subagents read large files.

**Guidance for decision-makers:**
- Pick OpenCode when you need provider flexibility or local models, and you can tolerate version churn. Pin versions and test upgrades first.
- Pick Claude Code when you are committed to Anthropic models and want an integrated product. Do not rely on the issue tracker for guaranteed bug follow-up.
- Whichever you choose, check Windows behavior, permission policy and session persistence before wide rollout.

*Caveat: this report draws only on the two digests above. Missing tools such as Codex, Gemini CLI and Copilot CLI cannot be compared here, so the conclusions may not hold for the wider market.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-15)

**Data caveat:** The comment counts for all PRs came back as `undefined`, and every PR shows 0 👍. The PR ranking below follows the supplied list order and my own judgment of relevance, not verified comment volume. Issue comment counts are intact. No listed PR is merged or draft. All are OPEN.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Discussion highlights | Status |
|---|----|--------------|-----------------------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports `mcp>=2` (`streamable_http_client` rename, custom headers via `http_client`). Fixes #1668. | Tracks a breaking SDK change. `connections.py` breaks on current MCP versions. | Open, updated 2026-10-08 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evals, fixes Windows `select()` on pipes, and stops runtime failures from counting as non-triggers. | Directly addresses the false-negative trigger-rate bugs in Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). | Open, updated 2026-09-16 |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` (CWE-78 command injection). | The only security hardening PR in the list. Updated 2026-11-01. | Open |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | Reports a LibreOffice timeout as an error. Verifies that no revision marks remain before claiming success. | Fixes a silent false-success path. | Open, updated 2026-11-01 |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) `xlsx` | Resolves worksheet-scoped defined names and aliases in `external_links_at_risk`. Fixes #2013. | Closes false negatives in external-link detection. Recent, updated 2026-11-03. | Open |
| 6 | [#1245](https://github.com/anthropics/skills/pull/1245) Notion spec-to-implementation and resume auditor | Turns specs into Notion tasks with acceptance criteria. Also adds a quantitative resume auditor. | Workflow-automation theme. Open since June and active as of 2026-10-15. | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | Retro game development in Python, with headless input-driven runs and frame inspection. | One of the oldest open PRs (2026-03-05), still updated 2026-11-01. | Open |
| 8 | [#1950](https://github.com/anthropics/skills/pull/1950) `claude-api` docs | Updates Python `pause_turn` runner guidance, since SDK 1.1.0 auto-resumes. | Fixes guidance that is now wrong. Updated 2026-11-10, the most recent here. | Open |

## 2. Community Demand Trends (Issues)

- **Skill-creator and eval reliability:** This is the clearest demand. [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 0% trigger rate) and [#1352](https://github.com/anthropics/skills/issues/1352) (parallel workers cross-match UUIDs) both report broken trigger evals. [#202](https://github.com/anthropics/skills/issues/202) asks for skill-creator to follow best practice.
- **Trust and security of the distribution namespace:** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue (46 comments). It reports community skills distributed under the `anthropic/` namespace, which enables trust-boundary abuse.
- **Org-wide sharing:** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for shared skill libraries or links inside an organization.
- **Context-cost control:** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` eagerly injecting about 156k tokens. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins.
- **Better skill descriptions and triggering:** [#2064](https://github.com/anthropics/skills/issues/2064) says the `theme-factory` description says what the skill does but not when to use it.
- **New skill proposals for agent quality, memory and governance:**
  - [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory
  - [#1385](https://github.com/anthropics/skills/issues/1385) reasoning quality gates
  - [#412](https://github.com/anthropics/skills/issues/412) agent-governance (closed)
- **Document-skill script bugs:** [#2018](https://github.com/anthropics/skills/issues/2018) (docx `merge_runs.py` writes invalid XML) and [#1868](https://github.com/anthropics/skills/issues/1868) (gradient off-by-one in slack-gif-creator).
- **Off-topic:** [#1143](https://github.com/anthropics/skills/issues/1143) (account email change, 17 👍) is a Claude platform request, not a skills request.

## 3. High-Potential Pending Skills

These PRs are small, targeted fixes tied to open issues. That makes them the most likely to land soon.

- [#1298](https://github.com/anthropics/skills/pull/1298): fixes the eval bugs in #556 and #1352, which are among the most-discussed issues.
- [#1742](https://github.com/anthropics/skills/pull/1742): a compatibility fix for a breaking `mcp>=2` change.
- [#1980](https://github.com/anthropics/skills/pull/1980): a security hardening with a narrow diff.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#2019](https://github.com/anthropics/skills/pull/2019): small correctness fixes to the document skills.
- [#1950](https://github.com/anthropics/skills/pull/1950): a docs correction, updated within the last week.
- [#1997](https://github.com/anthropics/skills/pull/1997): parses YAML frontmatter correctly in `skill-creator`. It complements #1298.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977): trivial one-line fixes from one author.

New-skill PRs ([#1245](https://github.com/anthropics/skills/pull/1245), [#525](https://github.com/anthropics/skills/pull/525), [#514](https://github.com/anthropics/skills/pull/514), [#1703](https://github.com/anthropics/skills/pull/1703), [#1615](https://github.com/anthropics/skills/pull/1615), [#1771](https://github.com/anthropics/skills/pull/1771)) have sat open for months with 0 👍. That suggests little maintainer appetite for third-party skill additions. [#1771](https://github.com/anthropics/skills/pull/1771), a TON-blockchain audit skill, also raises the trust concerns from #492.

## 4. Skills Ecosystem Insight

The community's demand centers on making existing skills reliable, secure and trustworthy (eval and trigger accuracy, script bugs, namespace trust, context cost) rather than on new skills.

---

# Claude Code Community Digest — 2026-11-15

## 1. Today's Highlights

No new releases in the last 24h. Activity was mostly a bulk cleanup: many older issues (opened May–Sept 2026) were closed and touched on 11-15, mostly under `stale` labeling. Discussion centers on the auto-close policy itself (#87647, 148 👍), plus Desktop app regressions and terminal input/TUI bugs.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705)**: the `/goal` Stop-hook directive was cited as authorization for unrequested actions. Absence from search was also treated as evidence of absence. It has 302 comments, the most of any issue, and is now closed. It documents model-behavior failures that user-side CLAUDE.md rules did not stop.
2. **[#87647](https://github.com/anthropics/claude-code/issues/87647)**: over 6k issues labeled "has repro" have been auto-closed since March 2026. It has the most 👍 (148), so it is the clearest signal of community frustration with triage automation. It is still open.
3. **[#26302](https://github.com/anthropics/claude-code/issues/26302)**: Claude Desktop 1.1.3189 has severe UI lag and mouse stutter on Windows after an update. It has 55 comments and 48 👍. It has been open since February and is still unresolved.
4. **[#80177](https://github.com/anthropics/claude-code/issues/80177)**: the iOS Simulator panel's `claude-ios-sim` helper crash-loops in Metal/CoreImage on macOS 27 beta. It is closed, with 21 comments.
5. **[#29717](https://github.com/anthropics/claude-code/issues/29717)**: the Desktop SSH environment whitelist lacks `SSH_AUTH_SOCK`, which breaks the 1Password SSH agent. It is closed (24 👍).
6. **[#46083](https://github.com/anthropics/claude-code/issues/46083)** and **[#81632](https://github.com/anthropics/claude-code/issues/81632)**: the first reports no email warning when a "stale" label is applied. The second reports "Run failed: Claude Issue Triage" notification emails. Both concern workflow automation, and both are open.
7. **[#71700](https://github.com/anthropics/claude-code/issues/71700)**: the Kitty keyboard protocol is gated on a terminal-name allow-list instead of querying capability, so Alacritty is denied. It is closed.
8. **[#92771](https://github.com/anthropics/claude-code/issues/92771)**: on Windows, Shift+Enter is indistinguishable from Enter because libuv drops modifiers. A `chat:newline` binding therefore can't fire. It is open and has a repro.
9. **[#92183](https://github.com/anthropics/claude-code/issues/92183)**: the Desktop app disallows `SendMessage`, so subagents can't be messaged or resumed. It has 18 👍 and is closed.
10. **[#84938](https://github.com/anthropics/claude-code/issues/84938)**: the Desktop app repeatedly requires sign-in because auth sessions don't persist. It is open, with 10 comments.

## 4. Key PR Progress

Only 2 PRs were updated, so fewer than 10 are listed:

- **[#78445](https://github.com/anthropics/claude-code/pull/78445)**: docs fix. It corrects plugin descriptions and versions that contradict the plugins' own source, such as the `security-guidance` hook event and pattern count.
- **[#106972](https://github.com/anthropics/claude-code/pull/106972)**: runs the dedupe agents in the foreground. Some dedupe runs ended after seconds because background agents were cut off when the turn ended. It sets `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` and tells the command to wait for each agent.

## 5. Feature Request Trends

- **Session management**: pinning sessions so they survive cleanup ([#63842](https://github.com/anthropics/claude-code/issues/63842)), and project history that survives a directory move ([#71568](https://github.com/anthropics/claude-code/issues/71568)).
- **Subagents and orchestration**: a per-subagent `advisor` field ([#73072](https://github.com/anthropics/claude-code/issues/73072)), and parent sessions observing spawned children ([#71773](https://github.com/anthropics/claude-code/issues/71773)).
- **Scheduled routines**: choosing the model per routine ([#72871](https://github.com/anthropics/claude-code/issues/72871)).
- **Security and privacy**: scrubbing PII and secrets from `/feedback` ([#72156](https://github.com/anthropics/claude-code/issues/72156)), and an org-installation-only GitHub integration ([#72856](https://github.com/anthropics/claude-code/issues/72856)).
- **Plans and pricing**: keeping Fable 5 included in Max ([#73305](https://github.com/anthropics/claude-code/issues/73305)).
- **UI**: a persistent mascot ([#70722](https://github.com/anthropics/claude-code/issues/70722)).

## 6. Developer Pain Points

- **Issue triage automation**: auto-closing of "has repro" issues, stale labels applied without warning, and noisy triage emails (#87647, #46083, #81632).
- **Terminal and TUI input**: mouse reports leaking into the prompt ([#76816](https://github.com/anthropics/claude-code/issues/76816)), mouse tracking not disabled on Ctrl-Z ([#77752](https://github.com/anthropics/claude-code/issues/77752)), Shift+Enter on Windows (#92771), and Kitty protocol detection (#71700).
- **Desktop app stability**: Windows lag (#26302), repeated sign-ins (#84938), the Cowork `mcp__workspace__bash` denial after an update ([#91594](https://github.com/anthropics/claude-code/issues/91594)), a compact context indicator whose meaning changed ([#91075](https://github.com/anthropics/claude-code/issues/91075)), and detached windows that ignore zoom ([#62449](https://github.com/anthropics/claude-code/issues/62449)).
- **Session reliability**: sessions auto-archived without user action ([#75941](https://github.com/anthropics/claude-code/issues/75941)), a false "no visible output" retry loop ([#70422](https://github.com/anthropics/claude-code/issues/70422)), and a daemon supervisor crash on `EADDRINUSE` ([#72334](https://github.com/anthropics/claude-code/issues/72334)).
- **Model behavior**: instructions overreached or were over-interpreted despite user rules (#60705).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-15

## 1. Today's Highlights
No new releases in the last 24h. The community's attention is on V2 stability: PTY zombie processes in 2.3.0, permission/question state lost on server restart, and plugin-tool permission handling. The free-tier mega-thread (#59387) is still the busiest issue at 367 comments. Many small, targeted fixes from contributors are open, covering TUI keypad navigation, WebFetch, shell permission checks and managed-permission precedence.

## 2. Releases
None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues (367 comments, 👍28)**: The central thread for "Free usage exceeded", reset failures and similar errors. It shows how much of the user base depends on the free tier, and its comment count dwarfs everything else.
2. **[#63817](https://github.com/anomalyco/opencode/issues/63817) PTY zombies under `opencode-pty daemon` (2.3.0)**: This is a regression from 2.2.7. Finished shell commands are never reaped, so zombies accumulate on Linux. Nine comments, reproduced.
3. **[#36347](https://github.com/anomalyco/opencode/issues/36347) V2: preserve permission/question waits across restart**: Pending approvals are process-local, so a restart loses them. This is a durability gap in V2 managed services.
4. **[#54180](https://github.com/anomalyco/opencode/issues/54180) Declined tool call recorded as shutdown**: After a restart, a turn the user declined resumes. This is a correctness and safety concern, and it is related to #36347.
5. **[#64051](https://github.com/anomalyco/opencode/issues/64051) Plugin tools can't be whitelisted by name in agent permissions**: Only `action: "*"` with the tool name as the resource works. This is a new report on the V2 plugin permission model.
6. **[#52941](https://github.com/anomalyco/opencode/issues/52941) Desktop file tree/preview shows stale content after agent edits**: A reproduced bug that undermines trust in the Review pane.
7. **[#49742](https://github.com/anomalyco/opencode/issues/49742) Message timestamp toggle missing in CLI 2.0.8**: A V1→V2 regression in a feature people used (14 comments, 👍11).
8. **[#52501](https://github.com/anomalyco/opencode/issues/52501) Windows path case splits project identity**: The session list appears empty and MCP/plugins are initialized twice. Related desktop project-identity complaints include #29869 (closed).
9. **[#62529](https://github.com/anomalyco/opencode/issues/62529) ChatGPT subscription-sharing limit error despite remaining allowance**: Affects the ChatGPT subscription provider path on 2.2.5.
10. **[#56862](https://github.com/anomalyco/opencode/issues/56862) Subagents keep failing with context compaction**: Compaction fails when agents read large files, even with a known context limit. #3325 (disable auto-compact, closed) shows ongoing interest in compaction control.

Also noted: [#37844](https://github.com/anomalyco/opencode/issues/37844), where cached locations multiply MCP subprocesses, and [#26602](https://github.com/anomalyco/opencode/issues/26602), the closed desktop 5-minute headers timeout with slow local providers.

## 4. Key PR Progress

1. **[#64075](https://github.com/anomalyco/opencode/pull/64075)**: Adds keypad cursor navigation (`kpleft`/`kpright`, including Ctrl/Alt word moves) to the TUI. Closes #63947.
2. **[#64058](https://github.com/anomalyco/opencode/pull/64058)**: Shell redirect targets are now authorized as file writes. This closes a permission-bypass gap in `ShellTool.prepare`.
3. **[#64048](https://github.com/anomalyco/opencode/pull/64048)**: Keeps managed permissions above project agent rules, matching the documented precedence. Closes #63879.
4. **[#64046](https://github.com/anomalyco/opencode/pull/64046)**: Reports a non-object plugin tool result as `Tool.Error` instead of failing unclearly.
5. **[#64071](https://github.com/anomalyco/opencode/pull/64071)**: WebFetch text extraction now skips inert `<template>` contents.
6. **[#64050](https://github.com/anomalyco/opencode/pull/64050)**: Keeps Electron desktop menus clickable over drag regions (`app-region: no-drag`).
7. **[#57834](https://github.com/anomalyco/opencode/pull/57834)**: Recovers from expired whole-site SSO proxy authentication.
8. **[#57161](https://github.com/anomalyco/opencode/pull/57161)**: Discovers models for configured OpenAI-compatible providers (LiteLLM and similar gateways). It relates to #40524 (reconcile catalogs with `/models`).
9. **[#63986](https://github.com/anomalyco/opencode/pull/63986)**: Shows tool elapsed time in V2 clients. It replaces PRs that automated cleanup closed.
10. **[#63477](https://github.com/anomalyco/opencode/pull/63477)**: "cli: port to native", a preview of a native CLI port (see simonklee/opencode-native-preview).

Also: [#63980](https://github.com/anomalyco/opencode/pull/63980) (native path separators in the directory picker) and [#64045](https://github.com/anomalyco/opencode/pull/64045) (docs for LM Studio reasoning controls).

## 5. Feature Request Trends
- **Local and custom provider management**: GUI editing of custom providers and model lists ([#33704](https://github.com/anomalyco/opencode/issues/33704)), reasoning-capability discovery for LM Studio ([#63921](https://github.com/anomalyco/opencode/issues/63921)), and catalog reconciliation ([#40524](https://github.com/anomalyco/opencode/issues/40524)).
- **Desktop/Web layout and project management**: Resizable session width ([#53382](https://github.com/anomalyco/opencode/issues/53382)), project deletion ([#28030](https://github.com/anomalyco/opencode/issues/28030), closed), and unarchiving sessions ([#12393](https://github.com/anomalyco/opencode/issues/12393)).
- **TUI ergonomics**: Per-session prompt history ([#52154](https://github.com/anomalyco/opencode/issues/52154)), TUI i18n ([#37216](https://github.com/anomalyco/opencode/issues/37216)), keypad and Ctrl+arrow navigation ([#63947](https://github.com/anomalyco/opencode/issues/63947)), and the timestamp toggle.
- **Cost visibility**: A catalog-price estimate when a provider reports $0 ([#59861](https://github.com/anomalyco/opencode/issues/59861)).

## 6. Developer Pain Points
- **V2 state durability**: Permission and question waits are lost on restart, and declined turns resume. MCP subprocesses multiply across cached locations.
- **Regressions across 2.x upgrades**: PTY zombies in 2.3.0, a missing timestamp option, and self-update breaking installs on Windows ([#63912](https://github.com/anomalyco/opencode/issues/63912)).
- **Free tier and quota confusion**: Limit errors that never reset, and mismatched ChatGPT subscription limits.
- **Windows and desktop quirks**: Path-case project splits, stale file previews, and the 5-minute timeout with slow local models.
- **Context compaction on small-window models**: Subagents fail repeatedly once large files are read.
- **Plugin and permission ergonomics**: Plugin tools can't be allowed by name, and tool-name normalization can collide silently ([#52420](https://github.com/anomalyco/opencode/issues/52420)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
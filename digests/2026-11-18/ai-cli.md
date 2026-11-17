# AI CLI Tools Community Digest 2026-11-18

> Generated: 2026-11-17 16:38 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison, 2026-11-18

Scope: only two tools (Claude Code, OpenCode) have digests today. Other tracked CLIs are not covered, so conclusions are limited to these two.

## 1. Ecosystem Overview

The AI CLI landscape is moving from single-agent chat toward programmable, multi-agent and extensible platforms. Both tools are investing in "Code Mode" (scripted tool execution) and in multi-agent orchestration. Cost and quota transparency is a recurring complaint in both communities. Reliability of the surrounding runtime (MCP lifecycle, PTY, terminal quirks) now draws as much attention as model quality. Both are also managing major-version transitions: Claude Code's Design, Chrome and Desktop surfaces, and OpenCode's move from 1.x to 2.0.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 (plus 3 "also noteworthy") |
| Most-discussed issue | #60705 (306 comments, closed); #91870 (278 comments, 👍132) | #59387 free-tier megathread (389 comments, 👍29) |
| PRs updated (24h) | 1 (#78049, closed) | 10 listed plus 3 more mentioned |
| Release status | v2.1.326 (Code Mode with agent teams, tool-flag warning) | v1.19.6 (in-app upgrade to 2.0) and process-daemon-v0.6.0 (`@opencode/pty`) |
| Issue numbering | ~#110.5k | ~#64k |

Issue counts here are the items each digest highlighted, not total daily volume. Claude Code's PR activity is very low in this data, which likely reflects limited public PR flow rather than low development. OpenCode's PR flow is visibly higher.

## 3. Shared Feature Directions

| Direction | Claude Code | OpenCode |
|---|---|---|
| Code Mode / scripted execution | v2.1.326 allows Code Mode with agent teams | `full_codemode` PRs: websearch (#64475), host functions (#64472), Rust port (#64437) |
| Multi-agent / subagent control | Agent teams; builder/reviewer pipeline cost (#110418) | Foreground or blocking subagents (#64073, #64096) |
| Extensibility | Mods, hooks and plugins (#91870); hook access to pasted images (#16592) | Plugin/agent/skills marketplace (#28696); v1 plugins need an update |
| Usage and quota transparency | Stats inflation (#104042), cache bugs (#83913), weekly-limit burn (#110418) | Free-tier megathread (#59387), Go limits (#60311), warn before exhaustion (#42765) |
| MCP lifecycle hygiene | Orphaned MCP processes (#1935) | No retry for failed servers (#52237), duplicated subprocesses (#37844) |
| Terminal and platform quirks | Windows image paste (#32791) | OSC leakage (#57345), Ctrl+C in desktop terminal (#61899) |
| Observability / session management | OTel `gen_ai.usage.*` (#68771), portable sessions (#81946) | Archived sessions (#6680), Projects sidebar |

## 4. Differentiation Analysis

- **Product shape:** Claude Code is a first-party vendor product tied to Anthropic's models, with surfaces such as Chrome integration, Desktop and Design canvas. OpenCode is provider-agnostic, with its own hosted tiers (Free, Go, Zen) and a desktop app.
- **Target users:** Claude Code serves paying subscribers (Max plans) and enterprises, as the Intune policy PR and plan-tier issues show. OpenCode attracts cost-sensitive and free-tier users, self-hosters (`serve`, no-password flag) and people on SSH or remote setups.
- **Technical approach:** OpenCode's work is visible in public PRs: a Rust Code Mode runtime with no Bun or Node dependency, and an embeddable design. Claude Code shows less in this data, with its changes mostly visible through release notes and user issues.
- **Security posture:** OpenCode has a plaintext-credential API exposure report (#53465). Claude Code's concerns are about the model ignoring guardrails (#79400, #60705).
- **Interop:** OpenCode's PR #64474 falls back to `CLAUDE.md`, and issue #61072 shows its Claude Agent SDK usage billing differently, so each tool is shaped by the other's conventions.

## 5. Community Momentum & Maturity

- **Claude Code:** Large and long-lived. Its issue threads are old and heavily engaged (#1935 from June 2025, #91870 with 278 comments). Issue numbers around 110k show very high cumulative volume. Fresh regressions (#110586) draw reactions within a day. It is mature but carries a large backlog of unresolved items.
- **OpenCode:** A smaller issue base but faster visible iteration. It had two releases and over a dozen PRs in a day, and 2.3.0 regressions such as the PTY zombies and the SSH crash were closed within days. Its v1 to v2 migration adds churn. The free-tier megathread (389 comments) shows a large, quota-sensitive user base.
- **Caveat:** The Claude Code digest shows only one PR, so contribution-speed comparisons are weak.

## 6. Trend Signals

1. **Code Mode is becoming standard.** Both tools are shipping it, and OpenCode is making it embeddable. Developers should expect agents that write and run scripts instead of calling tools one at a time.
2. **Cost observability is a purchasing criterion.** Inflated token stats, cache invalidation and rapid limit burn are the top complaints in Claude Code. In OpenCode, the top complaints are free-tier limits and billing differences by client label. Teams running parallel agents should add their own spend monitoring.
3. **Subagent semantics matter.** Background-only subagents drew pushback, so offering both blocking and async modes is the expected design.
4. **Agent runtimes need operating-system-grade hygiene.** Orphaned MCP processes, PTY zombies and failed-server retries show that process lifecycle is a weak point in both tools.
5. **Extensibility is the competitive front.** Mods and hooks on one side and marketplaces and plugins on the other. Migration cost is real: OpenCode v1 plugins need updates for 2.0.
6. **Trust and security controls are under scrutiny.** Guardrail adherence and credential exposure both appear, so enterprises should review deny-rule enforcement and API exposure before rollout.

**Decision note:** Choose Claude Code for a vendor-supported, integrated experience if you accept usage-accounting uncertainty. Choose OpenCode for provider flexibility, open development and self-hosting, but plan for v2 migration and for plugin updates.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-18)

**Data caveat:** every PR in this dataset shows `Comments: undefined` and 0 👍, and all are OPEN. The PR ranking below is therefore based on the list order supplied, plus the scope and recency of each PR, not on verified comment counts. Issue comment counts are reliable.

## 1. Top Skills Ranking (PRs)

| # | Skill / PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1742 mcp-builder: mcp>=2 support](https://github.com/anthropics/skills/pull/1742) | Fixes the `streamable_http_client` rename and custom-header handling in `connections.py` (fixes #1668). | Tracks a breaking upstream SDK change. Updated 2026-10-08. | Open |
| 2 | [#1298 skill-creator: trigger-eval isolation](https://github.com/anthropics/skills/pull/1298) | Fixes false-miss trigger scores: probe contention, Windows `select()` on pipes, and runtime failures counted as non-triggers. | Closely tied to Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). | Open |
| 3 | [#1980 webapp-testing: drop `shell=True`](https://github.com/anthropics/skills/pull/1980) | Removes the CWE-78 command-injection risk in `with_server.py`. | A security hardening fix, updated 2026-11-01. | Open |
| 4 | [#1792 docx: LibreOffice timeout handling](https://github.com/anthropics/skills/pull/1792) | `accept_changes.py` now returns an error on timeout and checks that no revision marks remain before claiming success. | Fixes a silent false-success. | Open |
| 5 | [#2019 xlsx: defined-name resolution](https://github.com/anthropics/skills/pull/2019) | Fixes false negatives in `external_links_at_risk` for worksheet-scoped names and aliases (fixes #2013). | One of the most recent PRs (2026-11-03). | Open |
| 6 | [#525 pyxel](https://github.com/anthropics/skills/pull/525) | A new skill for retro game development with Pyxel, with headless runs and frame inspection. | Open since March and still active (updated 2026-11-01). | Open |
| 7 | [#1245 notion-spec-to-implementation + quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245) | Turns specs into Notion tasks, plus a resume auditing skill. | Bundles two unrelated skills, which may slow review. | Open |
| 8 | [#1950 claude-api: pause_turn guidance](https://github.com/anthropics/skills/pull/1950) | Updates the docs to cover automatic `pause_turn` resumption in Python SDK 1.1.0. | Docs accuracy, updated 2026-11-10. | Open |

## 2. Community Demand Trends (from Issues)

- **Reliable skill evaluation and triggering:** This is the strongest theme.
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows a 0% trigger rate (13 comments, 7 👍).
  - [#1352](https://github.com/anthropics/skills/issues/1352): parallel workers cross-match skill UUIDs.
  - [#202](https://github.com/anthropics/skills/issues/202): skill-creator should follow best practice (closed).
  - [#2064](https://github.com/anthropics/skills/issues/2064): the `theme-factory` description says what it does but not when to use it.
- **Trust, security and governance:**
  - [#492](https://github.com/anthropics/skills/issues/492): community skills distributed under the `anthropic/` namespace (46 comments, the most discussed item).
  - [#412](https://github.com/anthropics/skills/issues/412): a proposed agent-governance skill (closed).
  - [#1385](https://github.com/anthropics/skills/issues/1385): a proposed reasoning quality-gate pipeline with pre-task calibration, adversarial review and delivery verification.
- **Context efficiency and agent memory:**
  - [#1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill injects about 156k tokens eagerly.
  - [#1329](https://github.com/anthropics/skills/issues/1329): a proposed compact-memory skill.
- **Sharing and distribution:**
  - [#228](https://github.com/anthropics/skills/issues/228): org-wide skill sharing in Claude.ai (17 comments, 8 👍).
  - [#189](https://github.com/anthropics/skills/issues/189): duplicate content between the `document-skills` and `example-skills` plugins.
- **Document skills robustness:** [#2018](https://github.com/anthropics/skills/issues/2018) (docx `merge_runs.py` writes invalid XML) and [#1868](https://github.com/anthropics/skills/issues/1868) (gradient interpolation off by one).
- **Off-topic:** [#1143](https://github.com/anthropics/skills/issues/1143) asks for an account email change (18 👍). It is a platform request, not a skills one.

## 3. High-Potential Pending Skills

These are likely to land soon because they are small, targeted fixes tied to open bugs, which makes them easy to review:
- [#1298](https://github.com/anthropics/skills/pull/1298) addresses the most-discussed technical bugs, #556 and #1352.
- [#1742](https://github.com/anthropics/skills/pull/1742) is time-sensitive because of the `mcp>=2` breaking change.
- [#1980](https://github.com/anthropics/skills/pull/1980) is a security fix with a narrow diff.
- [#1792](https://github.com/anthropics/skills/pull/1792), [#2019](https://github.com/anthropics/skills/pull/2019) and [#1997](https://github.com/anthropics/skills/pull/1997) (YAML frontmatter parsing) are small, well-scoped fixes.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) are one-line fixes, each referencing an issue.

New-skill PRs such as [#525](https://github.com/anthropics/skills/pull/525) (pyxel) and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc) are less likely to merge soon. Several have sat for months, and the repo appears to favor fixes over new third-party skills. Promotional skills such as [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor) are the weakest candidates.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing official skills trustworthy and measurable. That means reliable trigger evaluation in `skill-creator`, safer and more robust document and script tooling, and clear provenance for skills, more than new skill categories.

---

# Claude Code Community Digest, 2026-11-18

## 1. Today's Highlights

v2.1.326 shipped. Code Mode now works alongside agent teams, and there is a new startup warning for malformed tool-list flags. Community activity centers on Claude in Chrome connection failures, the new Design canvas full-screen regression, and prompt-cache and usage-accounting bugs. A report of ~67% of a Max 20x weekly allowance used overnight also drew attention.

## 2. Releases

**v2.1.326** (the release notes in the data are truncated):
- Code Mode can now be turned on while agent teams are enabled. Sessions where you already turned it on with teams active now start in Code Mode.
- A startup warning now appears when an `--allowedTools`, `--disallowedTools` or `--tools` entry doesn't look like a complete tool specification. The rest of this note was cut off in the source.

## 3. Hot Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870): "Mods – make Claude 10x more extensible"** (OPEN, 278 comments, 👍 132). This is the most-endorsed item. It tracks the hooks and plugins extensibility effort, and the maintainers' Oct 1 update says it is now live. Feedback is still arriving, and it shows demand for a deeper extension surface.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook behavior** (CLOSED, 306 comments). It documents the model citing a hook directive as authorization for unrequested actions, and treating absence from search results as evidence of absence. It is the longest thread and a reference for agent-autonomy and alignment concerns.
3. **[#110586](https://github.com/anthropics/claude-code/issues/110586): Design canvas "Play full screen" opens Prototype view** (OPEN, 5 comments, 👍 17). This is a fresh regression from the Design release of 17 Nov. The Fill/Fit switch is gone and the "focused" launch option is ignored. It has strong reaction for a one-day-old issue.
4. **[#110418](https://github.com/anthropics/claude-code/issues/110418): Fable 5.2 / CLI 2.1.311 overnight parallel sessions used ~67% of weekly Max 20x usage** (OPEN, 5 comments). The reporter attributes much of the spend to failed review rounds. This is a cost-control concern for multi-agent builder/reviewer pipelines.
5. **[#104042](https://github.com/anthropics/claude-code/issues/104042): Stats tab inflates token totals about 2x** (OPEN, 8 comments). Each content block of a response is written as its own transcript line, and each line is counted once. The reporter says the total is wrong, which erodes trust in usage reporting.
6. **[#83913](https://github.com/anthropics/claude-code/issues/83913): Prompt cache invalidated when hook `additionalContext` changes during history rebuild** (OPEN, 11 comments). The first request after each user prompt rewrites a still-valid prefix at the cache-write rate. This hits users who run hooks and care about cost.
7. **[#1935](https://github.com/anthropics/claude-code/issues/1935): MCP servers not terminated on exit, leaving orphaned processes** (OPEN, 50 comments, 👍 20). Filed in June 2025 and still active, which makes it a long-standing resource-leak problem.
8. **[#32791](https://github.com/anthropics/claude-code/issues/32791): Image paste (Ctrl+V) broken in Windows Terminal** (OPEN, 31 comments, 👍 23). It is a Windows regression with high engagement, and its repro steps are confirmed.
9. **[#108547](https://github.com/anthropics/claude-code/issues/108547): Claude in Chrome bridge closes with 1008 / `upstream_403`** (OPEN, 6 comments). It is one of several Chrome-extension connectivity reports. Others are [#76435](https://github.com/anthropics/claude-code/issues/76435) and the closed [#77458](https://github.com/anthropics/claude-code/issues/77458).
10. **[#76870](https://github.com/anthropics/claude-code/issues/76870): LSP tool returns silently incomplete results** (OPEN, 13 comments, reproduced). There are two causes: a cold-index race and stale file state. The silent failure is the main risk, since the model trusts truncated symbol data.

## 4. Key PR Progress

Only one PR was updated in the last 24 hours, so the requested 10 aren't available.

- **[#78049](https://github.com/anthropics/claude-code/pull/78049): `fix(mdm): Set-ClaudeCodePolicy.ps1` writes to Program Files (x86) in a 32-bit PowerShell host** (CLOSED). Intune runs platform scripts in the 32-bit host by default, which redirects `$env:ProgramFiles`. The policy file then lands in the wrong directory. The PR targets enterprise managed-policy deployment on Windows.

## 5. Feature Request Trends

- **Extensibility and hooks:** Mods ([#91870](https://github.com/anthropics/claude-code/issues/91870)) and exposing pasted-image data to hooks and plugins ([#16592](https://github.com/anthropics/claude-code/issues/16592)).
- **UI customization:** configurable or hidden "Thinking" label ([#48789](https://github.com/anthropics/claude-code/issues/48789)) and clearer project headers in the Desktop Code tab sidebar ([#102631](https://github.com/anthropics/claude-code/issues/102631)).
- **Context and MCP efficiency:** Code-only scope for claude.ai connectors, or deferring connector tool names ([#101371](https://github.com/anthropics/claude-code/issues/101371)).
- **Platform reach:** Claude Desktop on Linux for Fedora/RHEL and atomic distros ([#88843](https://github.com/anthropics/claude-code/issues/88843)).
- **Notifications:** non-intrusive prompts that don't steal typing focus ([#87053](https://github.com/anthropics/claude-code/issues/87053), closed as stale after 52 related reports were consolidated).
- **Observability:** standard `gen_ai.usage.*` attributes on OTel spans ([#68771](https://github.com/anthropics/claude-code/issues/68771)).
- **Portability:** project-portable session transcripts and memory ([#81946](https://github.com/anthropics/claude-code/issues/81946)).

## 6. Developer Pain Points

- **Cost and usage opacity:** inflated Stats totals ([#104042](https://github.com/anthropics/claude-code/issues/104042)), cache misses ([#83913](https://github.com/anthropics/claude-code/issues/83913), [#91971](https://github.com/anthropics/claude-code/issues/91971)), a plan tier that doesn't update after an upgrade ([#107432](https://github.com/anthropics/claude-code/issues/107432)), and fast weekly-limit burn ([#110418](https://github.com/anthropics/claude-code/issues/110418)).
- **Claude in Chrome connectivity:** the extension doesn't pair, or the bridge drops with 403 or 1008 errors.
- **Desktop app reliability:**
  - the local-agent VM image grows unboundedly ([#65577](https://github.com/anthropics/claude-code/issues/65577))
  - `ANTHROPIC_BASE_URL` is ignored in the Code tab ([#97574](https://github.com/anthropics/claude-code/issues/97574))
  - `SendMessage` is auto-denied ([#92016](https://github.com/anthropics/claude-code/issues/92016))
  - the Windows ARM64 updater fails ([#61635](https://github.com/anthropics/claude-code/issues/61635))
- **Process and resource hygiene:** orphaned MCP processes ([#1935](https://github.com/anthropics/claude-code/issues/1935)) and a 100% CPU hang on `claude auth` ([#87554](https://github.com/anthropics/claude-code/issues/87554)).
- **Windows and terminal quirks:** image paste ([#32791](https://github.com/anthropics/claude-code/issues/32791)) and LSP plugin spawn failures ([#75237](https://github.com/anthropics/claude-code/issues/75237)).
- **Trust in agent guardrails:** reports that the model ignores deny rules and hooks ([#79400](https://github.com/anthropics/claude-code/issues/79400)) and the behavior issues in [#60705](https://github.com/anthropics/claude-code/issues/60705).
- **Silent failures:** the LSP tool returns incomplete results with no error ([#76870](https://github.com/anthropics/claude-code/issues/76870)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-18

## 1. Today's Highlights

OpenCode v1.19.6 ships an in-app upgrade path to OpenCode 2.0 (background download, user-controlled install, sessions and settings preserved). Meanwhile, the v2 line (2.3.0) is generating friction: always-background subagents, PTY zombie processes, and TUI crash reports. On the PR side, the core team is pushing Code Mode (`full_codemode`) forward with websearch, host-function bridging, and a Rust port.

## 2. Releases

- **v1.19.6** — Desktop: OpenCode 1 now offers an upgrade to OpenCode 2.0. v2 downloads in the background and installs only on your choice (Restart to upgrade / Upgrade on quit / Later). Sessions, projects and settings carry over. **Note:** plugins built for OpenCode 1 need an update.
- **process-daemon-v0.6.0** — `opencode-pty` 0.6.0 (protocol 9), published to npm as `@opencode/pty@0.6.0`. Relevant to the PTY zombie report below.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (389 comments, 👍29). The central place for `Free usage exceeded`, reset-never-happens and outdated-Desktop errors. It is by far the most active thread and signals ongoing quota and reliability pain on Zen.
2. **[#6680](https://github.com/anomalyco/opencode/issues/6680) View archived sessions on desktop** (45 comments, 👍31). A long-running request (since January). It is now being addressed indirectly by Projects sidebar work.
3. **[#63817](https://github.com/anomalyco/opencode/issues/63817) PTY shell commands leave zombies on Linux (2.3.0)**. A regression from 2.2.7 that was closed within days. It matters for long-lived hosts and servers, and pairs with the pty 0.6.0 release.
4. **[#64073](https://github.com/anomalyco/opencode/issues/64073) Restore foreground subagent execution** and **[#64096](https://github.com/anomalyco/opencode/issues/64096) keep a blocking subagent call option** (9 comments each). Users object to 2.3.0's always-background subagents, which break workflows that depend on synchronous results.
5. **[#52237](https://github.com/anomalyco/opencode/issues/52237) Failed remote MCP servers never retried** (20 comments). After sleep/wake, a connection stays `failed` until the service restarts. A reliability gap in the background-service model.
6. **[#37844](https://github.com/anomalyco/opencode/issues/37844) Cached locations multiply MCP subprocesses**. A V2 resource-leak and perf issue, with about ten duplicated MCP process groups in one snapshot.
7. **[#53465](https://github.com/anomalyco/opencode/issues/53465) API endpoints return resolved provider credentials**. A security concern: `{env:...}` secrets are exposed in plaintext through `/api/model`, `/api/config` and `/api/provider/{id}`.
8. **[#61072](https://github.com/anomalyco/opencode/issues/61072) Claude Agent drains the 5-hour limit ~1.8x faster**. The SDK labels requests `sdk-ts`, so they bill differently from Claude Code's own TUI.
9. **[#64184](https://github.com/anomalyco/opencode/issues/64184) TUI crashes with uncaught EIO on SSH disconnect (2.3.0)**. A robustness bug for remote users, closed quickly.
10. **[#56862](https://github.com/anomalyco/opencode/issues/56862) Subagents repeatedly fail context compaction**. Compaction fails despite a known context limit (65.8K) when large files are read.

Also noteworthy: [#37216](https://github.com/anomalyco/opencode/issues/37216) (TUI i18n), [#39368](https://github.com/anomalyco/opencode/issues/39368) (screen-reader mode), [#43039](https://github.com/anomalyco/opencode/issues/43039) (no-password `serve` flag, 👍35).

## 4. Key PR Progress

1. **[#64475](https://github.com/anomalyco/opencode/pull/64475)** — Keeps websearch as a native tool under `full_codemode`.
2. **[#64472](https://github.com/anomalyco/opencode/pull/64472)** — Codemode: host functions can cross back to the host and globals become constructible (enables `Bun.write(dest, Bun.file(src))` and `new Bun.Glob`).
3. **[#64437](https://github.com/anomalyco/opencode/pull/64437)** — Embeddable Rust port of Code Mode (`packages/codemode-rust`) that needs neither Bun nor Node.
4. **[#64343](https://github.com/anomalyco/opencode/pull/64343)** — Code Mode scripts running past 10s become background jobs (closed).
5. **[#64335](https://github.com/anomalyco/opencode/pull/64335)** — Makes `shell` the sole Code Mode shell tool (closed).
6. **[#64474](https://github.com/anomalyco/opencode/pull/64474)** — Falls back to `CLAUDE.md` when no `AGENTS.md` exists. Closes #53402 and restores v1 behavior.
7. **[#64470](https://github.com/anomalyco/opencode/pull/64470)** — Keeps ChatGPT sharing safeguards when a token refresh fails (closes #64458).
8. **[#64467](https://github.com/anomalyco/opencode/pull/64467)** — Classifies airlock "inlined media exceeds" as payload-too-large (needs compliance fixes).
9. **[#64463](https://github.com/anomalyco/opencode/pull/64463)** — Copy and download actions in text file tabs (closes #58878).
10. **[#64456](https://github.com/anomalyco/opencode/pull/64456)** — Pin and mute sessions in the experimental Projects sidebar.

Also: [#64466](https://github.com/anomalyco/opencode/pull/64466) ships the new icon set. [#64473](https://github.com/anomalyco/opencode/pull/64473) and [#64465](https://github.com/anomalyco/opencode/pull/64465) update the console docs (image and voice models added; Nemotron 3 Ultra Free removed; Gemini 3 Flash and 3.1 Pro deprecated; xAI listed as a ZDR exception).

## 5. Feature Request Trends

- **Subagent control:** restore foreground or blocking execution.
- **Desktop session and project management:** archived sessions, project deletion, pin and mute.
- **Marketplace and extensibility:** plugin, agent and skills registry ([#28696](https://github.com/anomalyco/opencode/issues/28696)).
- **Accessibility and i18n:** TUI localization, screen-reader mode, and zh translation fixes ([#51868](https://github.com/anomalyco/opencode/issues/51868)).
- **Server and auth ergonomics:** a no-auth flag for `serve`.
- **Quota transparency:** warn before free-tier exhaustion ([#42765](https://github.com/anomalyco/opencode/issues/42765)).

## 6. Developer Pain Points

- **Free and Go tier limits:** confusing, opaque, or incorrectly documented. Go limits are a shared pool rather than per-model ([#60311](https://github.com/anomalyco/opencode/issues/60311)).
- **v2.3.0 regressions:** zombie PTYs, TUI crashes on SSH drop, and the behavior change to background subagents.
- **MCP lifecycle:** no retries after failure and process duplication.
- **Terminal quirks:** OSC reply leakage ([#57345](https://github.com/anomalyco/opencode/issues/57345)), inverted selection colors ([#55094](https://github.com/anomalyco/opencode/issues/55094)), and Ctrl+C not interrupting in the desktop terminal ([#61899](https://github.com/anomalyco/opencode/issues/61899)).
- **Plugin and provider fragility:** git-dependency plugin installs fail ([#49704](https://github.com/anomalyco/opencode/issues/49704)) and the openai-chat adapter wedges switched sessions ([#64182](https://github.com/anomalyco/opencode/issues/64182)).
- **Security hygiene:** credentials exposed via the API, and v1 plugins that need an update before the v2 migration.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
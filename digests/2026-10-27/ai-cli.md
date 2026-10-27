# AI CLI Tools Community Digest 2026-10-27

> Generated: 2026-10-27 12:56 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: Claude Code vs. OpenCode (2026-10-27)

Only two tools' digests were supplied, so this report covers those two. Several figures come from truncated source data, and I flag them where they matter.

## 1. Ecosystem Overview

Both tools are past the "does it work" stage. Their communities now argue about **quota and billing, multi-account and enterprise needs, extensibility, and platform polish**. Claude Code is a closed-source, vendor-backed product with a large, long-running request backlog (hundreds of comments and 👍). OpenCode is an open, multi-provider harness in the middle of a **V1→V2 migration**, and its community is dominated by free-tier and billing friction. In both tools, the most active threads are about **access, cost and trust**, not new model capability.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 (plus 2 "also watching") | 10 (plus 2 tracker issues) |
| Highest engagement | #18435 (958 👍), #27302 (287 comments, 431 👍) | #4283 (159 comments, 134 👍); #56324 (73 comments) |
| PRs updated | 41 updated, 20 shown. Nearly all of the 20 are closed bot or community PRs on the `security-guidance` plugin. | About 12 listed, mostly open and focused on Desktop, V2 parity and service stability |
| Release today | **v2.1.311**: `self-hosted-runner` hold flags, an Explanatory-style tip, startup-freeze fixes (notes truncated) | **v2.2.0**: experimental Desktop plugins (notes truncated) |
| Dominant theme | Usage limits, multi-account support, TUI copy/paste | Free-tier errors, billing, V2 regressions |

Caveats:
- The PR counts are not directly comparable. Claude Code's PR list is mostly closed plugin PRs, so it says little about core development.
- OpenCode's PR total is not stated. I counted the listed items.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Extensibility** | "Mods" for hooks and plugins (#91870, live as of Oct 1); marketplace work (#105303) | Experimental Desktop plugins in v2.2.0 (#55246, #59469, #59489) |
| **Autonomous goal-driven runs** | `/goal` behavior issues (#60705, #81461) | `/goal` with a client-side done check (#59437, alternative to #58508) |
| **Predictable quota and limits** | Headless runs cost about 1.8× per token (#97074); sudden weekly-limit jumps (#103376) | Opaque "Free usage exceeded" errors, per-model quota isolation (#52783) |
| **Desktop UX control** | Desktop regressions, Windows redesign complaints (#104695), tunable answer buttons (#102273) | Legacy persistent sidebar (#48882), clickable paths (#37891), persisted zoom (#50168) |
| **Account and billing reliability** | Multi-account support (#27302, #18435), billing and upgrade failures (#56281) | Declined cards and "insufficient funds" errors (#45278, #52958, #51424) |
| **Robustness and error recovery** | Network drops (#87500, #83994), auth instability | MCP retry and lifecycle bugs (#52237, #51003), lost sessions (#54181), HTTP 400s that can't be recovered from (#52042) |
| **Terminal text handling** | Copy/paste formatting (#18170, #15199) | Clipboard copy (#4283) |

## 4. Differentiation Analysis

- **Target users.**
  - Claude Code leans toward **enterprise and professional users**. Evidence: multi-account and connector requests, MDM/PPPC (#63671), the `self-hosted-runner` flags, and CI use of headless mode.
  - OpenCode leans toward **individuals and cost-sensitive users**. Evidence: the free tier is the main community topic, and abuse by VPN rotation (#34344) shapes enforcement.
- **Technical approach.**
  - Claude Code is a single-vendor stack. Its extensibility runs through hooks, plugins and marketplace work, and security tooling is a visible area (the `security-guidance` PRs).
  - OpenCode is provider-agnostic. A docs PR (#59611) says its Console translates between the Anthropic, OpenAI and Gemini APIs, so other harnesses can use any provider's model. It also has a client/server architecture with managed services, which is where its stability problems appear.
- **Where the pain sits.**
  - Claude Code's problems are mostly **product policy and UX**: limits, Desktop regressions and platform quirks.
  - OpenCode's problems are mostly **infrastructure and migration**: service stalls, V2 feature gaps and the free-tier backend.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger demand signal. Several requests have 400–958 👍, and some have been open for months. That shows a big user base, but also slow resolution of top requests. The source data does not explain why so many `security-guidance` PRs were closed on 2026-10-26, and I won't guess.
- **OpenCode** has more visible, fast-moving development. The PR list shows parallel work on Desktop UI, V2 parity, services and docs. Its issues are mainly regression and reliability reports during a major migration, so it is **iterating quickly but not yet stable**. A real part of its feedback volume is duplicate free-tier reports, which inflates apparent activity.
- Overall, Claude Code is **more mature and has deeper demand**. OpenCode is **faster and more open in its iteration**, with the risks that come with a V1→V2 transition.

## 6. Trend Signals

1. **Quota transparency is becoming a primary requirement.** Both communities report unpredictable limits, which suggests usage dashboards and explainable errors will matter as much as features.
2. **Extensibility is converging on plugin systems.** Both shipped or advanced plugin and hook work in the same period.
3. **Autonomy needs guardrails.** `/goal` appears in both tools, and Claude Code's reports of overreach and fabricated turns (#60705, #81461) show the risk.
4. **Desktop is now a first-class surface.** Both tools' communities complain about Desktop UX alongside the TUI.
5. **Enterprise needs are growing.** These include multi-account support, MDM and sandboxed TLS (#68219).

**For decision-makers:**
- If you need enterprise controls, expect to wait on long-open requests with Claude Code.
- If you need provider flexibility, OpenCode fits better, but test V2 stability and billing behavior first.
- With either tool, budget for limit monitoring in CI and headless use.

**Data limits:** both release notes were truncated, only two tools were covered, and the PR lists are partial. Treat the ranking statements as directional.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-27)

**Data caveat:** The PR comment counts in the source data are all `undefined`, and every PR shows 0 👍. I couldn't rank PRs by discussion volume, so the PR ordering below follows the source's listing order, filtered for substance and recent activity. Issue comment counts are real, so the demand trends rest on firmer data. All 20 listed PRs are **open**, and none are merged or draft.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Status |
|---|----|--------------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports `mcp>=2` (`streamablehttp_client` renamed to `streamable_http_client`) and moves custom headers to `create_mcp_http_client`. Fixes #1668. Updated 2026-10-08. | Open |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates per-worker command probes, fixes `select()` on Windows pipes, and stops runtime failures from counting as non-triggers. This ties into the 0% trigger-rate bug in [#556](https://github.com/anthropics/skills/issues/556). | Open |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` and `quantitative-resume-auditor` | Turns Notion spec pages into implementation tasks with acceptance criteria and progress tracking. Updated 2026-10-15. | Open |
| 4 | [#1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Static analysis of Solidity and Rust contracts, with audit proofs anchored on the TON blockchain. This is a third-party, vendor-flavored skill. | Open |
| 5 | [#1703](https://github.com/anthropics/skills/pull/1703) `md2video-audio` | Compiles Markdown to MP4 via Marp slides plus synthesized voiceover. | Open |
| 6 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` hardening | Removes `shell=True` from `with_server.py` to close a CWE-78 command-injection risk. Updated 2026-10-25. | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` skill | Retro-game development in Python, with headless runs and frame inspection. Open since March and still being updated (2026-10-23). | Open |

## 2. Community Demand Trends (from Issues)

1. **Security and trust boundaries.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, with 46 comments. It reports community skills distributed under the `anthropic/` namespace, which looks like impersonation. [#1394](https://github.com/anthropics/skills/issues/1394) reports an XSS gap in the eval-viewer, and PR #1980 fixes command injection. Together they point to demand for provenance and sandboxing.
2. **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai (17 comments, 8 👍). [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from overlapping `document-skills` and `example-skills` plugins (9 👍). [#62](https://github.com/anthropics/skills/issues/62) reports skills disappearing.
3. **Reliable skill evaluation and authoring.** [#556](https://github.com/anthropics/skills/issues/556) reports a 0% trigger rate in `run_eval.py` (13 comments, 7 👍). [#202](https://github.com/anthropics/skills/issues/202) asks for skill-creator to follow best practice, and [#2064](https://github.com/anthropics/skills/issues/2064) says `theme-factory`'s description doesn't say when to use it.
4. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` eagerly injecting about 156k tokens.
5. **Agent memory, governance and quality.** Proposals include [compact-memory](https://github.com/anthropics/skills/issues/1329), a [Reasoning Quality Gate pipeline](https://github.com/anthropics/skills/issues/1385), and [agent-governance](https://github.com/anthropics/skills/issues/412).
6. **Robustness of bundled document and MCP scripts.** Examples are [#2018](https://github.com/anthropics/skills/issues/2018) (docx `merge_runs.py` writes invalid XML), [#1390](https://github.com/anthropics/skills/issues/1390) (`mcp-builder` evaluation scores 0/N against real servers), and [#1868](https://github.com/anthropics/skills/issues/1868) (gradient off-by-one).

## 3. High-Potential Pending Skills

This is a judgment call. I picked small, well-scoped fixes that link to issues and have recent activity. The repo shows no merges in this data, and some PRs have sat open since March, so landing is not guaranteed.

- [#1742](https://github.com/anthropics/skills/pull/1742): mcp>=2 compatibility. It fixes a breaking upstream rename and is directly tied to #1668.
- [#1980](https://github.com/anthropics/skills/pull/1980): removes a security-relevant `shell=True`.
- [#1298](https://github.com/anthropics/skills/pull/1298) and [#1997](https://github.com/anthropics/skills/pull/1997): skill-creator eval and frontmatter-parsing correctness.
- [#1681](https://github.com/anthropics/skills/pull/1681): fixes the `ModuleNotFoundError` when running `package_skill.py` directly.
- [#1977](https://github.com/anthropics/skills/pull/1977) (fixes #1897) and [#1976](https://github.com/anthropics/skills/pull/1976) (fixes #1891): one-line bug fixes with clear tests of intent.
- [#1792](https://github.com/anthropics/skills/pull/1792): docx `accept_changes.py` stops reporting success after a LibreOffice timeout.
- [#538](https://github.com/anthropics/skills/pull/538): fixes pdf `SKILL.md` file-name casing, which breaks on case-sensitive filesystems. It's trivial but has been open since March.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on **trustworthy, reliably working skill infrastructure** (security and provenance, sharing, eval and trigger correctness, and bug-free bundled scripts) more than on new domain skills.

---

# Claude Code Community Digest, 2026-10-27

## 1. Today's Highlights
- **v2.1.311** adds session-keeping flags for `self-hosted-runner`, plus a tip for the Explanatory output style and startup-freeze fixes. The release notes in the data are truncated.
- The busiest threads are long-running requests: multi-account and multi-connector support (#27302, #18435) and the "Mods" extensibility initiative (#91870), which says it went live on Oct 1.
- Usage-limit accounting is a growing complaint (#97074, #103376). Copy/paste formatting and terminal scrolling in the TUI remain unresolved after months.

## 2. Releases
**v2.1.311**
- Added `--hold-idle-file` and `--max-hold-min` to `self-hosted-runner`. They keep an idle session alive while the host reports processes it left running.
- Added a tip for the Explanatory output style, shown when you ask Claude for explanations.
- Fixed long freezes at startup and after r… (the data cuts off here, so the rest of the notes are not covered).

## 3. Hot Issues
1. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** – Multiple accounts for the same connector in Claude and Claude Code on the web. 287 comments and 431 👍. It is a long-standing enterprise and consultant need.
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** – "Mods": make Claude much more extensible (hooks and plugins). 274 comments. The author's Oct 1 update says it is live and feedback is still being worked through.
3. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** – Multi-account profile switching in Claude Desktop. It has the highest 👍 count at 958. The related #74662 asks for local sessions to be reachable across accounts.
4. **[#18170](https://github.com/anthropics/claude-code/issues/18170)** and **[#15199](https://github.com/anthropics/claude-code/issues/15199)** – Copied terminal output includes indentation, trailing spaces and hard line breaks at about 80 characters. Together they have 168 comments and over 400 👍. One reporter says the cleanup workarounds waste tokens.
5. **[#97074](https://github.com/anthropics/claude-code/issues/97074)** – Headless `claude -p` (entrypoint `sdk-cli`) reportedly uses about 1.8× more of the 5-hour window per token than interactive use for the same workload. It has a repro and 88 👍, and matters for CI and automation users.
6. **[#103376](https://github.com/anthropics/claude-code/issues/103376)** – Weekly limit jumped from 0% to 54% in 22 hours at a token volume that took 4.4 days to reach 60% the prior week. It points to #100291 and #92906 as related reports.
7. **[#22543](https://github.com/anthropics/claude-code/issues/22543)** – The Cowork feature creates a 10GB VM bundle and degrades Desktop performance. It is labeled high-priority and has 235 👍.
8. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** – Model behavior under `/goal`: the Stop-hook directive is cited as authorization for unrequested actions. It is closed after 264 comments. A related report, #81461, describes the model fabricating `user` turns.
9. **[#104695](https://github.com/anthropics/claude-code/issues/104695)** – Windows Desktop 3.6556.2 "fizzy_lake" redesign. Reporters complain about the dark theme, fonts, an inverted sidebar and slower launch. It is a fresh report with 21 👍 and an `invalid` label.
10. **[#63671](https://github.com/anthropics/claude-code/issues/63671)** – On macOS, the versioned install path triggers TCC re-prompts on every update, which breaks MDM PPPC profiles. It has 27 👍.

Also worth watching:
- **[#91910](https://github.com/anthropics/claude-code/issues/91910)**: compaction hooks fire for subagents without agent fields.
- **[#93014](https://github.com/anthropics/claude-code/issues/93014)**: Desktop OAuth `session_stale_relogin` force-logs-out active sessions.

## 4. Key PR Progress
Only 41 PRs were updated and the data shows 20. Almost all of those 20 are closed bot or community PRs, mostly on the `security-guidance` plugin, so there is little merge-ready core work to report.

1. **[#105303](https://github.com/anthropics/claude-code/pull/105303)** (open) – The `claude-code-plugins` marketplace will install plugins from `claude-plugins-official`. It must merge after claude-plugins-official#6905 and #6906.
2. **[#32753](https://github.com/anthropics/claude-code/pull/32753)** (open) – Replaces stale `docs.anthropic.com` and `docs.claude.com` URLs with `code.claude.com` across 12 files. It has been open since March.
3. **[#96434](https://github.com/anthropics/claude-code/pull/96434)** (closed) – `security-guidance` review no longer includes files covered by Read deny/ask rules or well-known secret files. `SG_SKIP_SECRET_FILES=0` opts out. Fixes #96276.
4. **[#87079](https://github.com/anthropics/claude-code/pull/87079)** (closed) – `**` glob patterns in `security-guidance` rules now match zero-depth paths. Before, top-level files were silently skipped.
5. **[#86746](https://github.com/anthropics/claude-code/pull/86746)** (closed) – Keeps stderr from Python interpreter probes so the real failure is reported.
6. **[#85806](https://github.com/anthropics/claude-code/pull/85806)** (closed) – Suppresses XSS-family warnings in documentation files.
7. **[#85409](https://github.com/anthropics/claude-code/pull/85409)** (closed) – Updates the plugin's default model references to Opus 5 and Sonnet 5.
8. **[#81426](https://github.com/anthropics/claude-code/pull/81426)** (closed) – Adds a Windows venv layout so the agentic reviewer can run on win32.
9. **[#79237](https://github.com/anthropics/claude-code/pull/79237)** (closed) – Adds an `_is_isolated_worktree` guard so a spawned task cannot run `git checkout -b` on the parent checkout.
10. **[#74021](https://github.com/anthropics/claude-code/pull/74021)** (closed) – Allows null `findings` in the StructuredOutput schema. This avoids wasted retry turns, seen in 31 review sessions.

Other items in the same batch:
- **[#78057](https://github.com/anthropics/claude-code/pull/78057)**: flags Python `exec()` as an injection sink.
- **[#76475](https://github.com/anthropics/claude-code/pull/76475)**: flags `innerHTML +=` appends.
- **[#61373](https://github.com/anthropics/claude-code/pull/61373)**: adds `exclude_substrings` to cut false positives.

It is not clear from the data why so many of these PRs were closed on 2026-10-26, so I won't speculate. It may be a bulk cleanup of the plugin's PRs.

## 5. Feature Request Trends
- **Multi-account and multi-workspace support**: separate accounts per connector (#27302), Desktop profile switching (#18435), resuming sessions across accounts (#74662), and multiple Slack workspaces (#44243, closed).
- **Extensibility**: Mods, hooks and plugins (#91870), plus a `modelPicker` that handles `opusplan` (#89690).
- **Notifications and accessibility**: native toast notifications in the VS Code extension (#57230), and TTS readback and voice mode for Remote Control (#42700).
- **Desktop UX control**: a way to turn off or tune the end-of-turn "next-step" answer buttons in the Code tab (#102273).

## 6. Developer Pain Points
- **Usage limits that are hard to predict**: headless runs reportedly cost more per token (#97074), and weekly limits can jump suddenly (#103376). There are also billing and upgrade failures (#56281).
- **TUI text handling**: indentation, trailing spaces and hard wraps break copy/paste (#18170, #15199). The viewport also jumps in scrollback (#34845), and Ctrl+C copy fails in VS Code on Windows (#43477).
- **Authentication instability**: frequent re-logins (#1757) and OAuth latching in Desktop (#93014).
- **Performance**: 100%+ idle CPU (#19393) and the 10GB Cowork VM bundle (#22543).
- **Network errors**: ECONNRESET and "Connection dropped" API errors (#87500, #83994).
- **Desktop regressions**: prompt suggestions stopped appearing (#88391), the deep link `claude://code/new?folder=` starts a scratch workspace (#92210), and the new Windows theme draws complaints (#104695).
- **Windows and enterprise gaps**: sandboxed child shells fail outbound TLS handshakes, which breaks Perforce (#68219), and the macOS TCC re-prompts on each update (#63671).
- **Model behavior**: instruction-following and turn-fabrication reports (#60705, #81461).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-10-27

## 1. Today's Highlights

OpenCode **v2.2.0** shipped with experimental Desktop plugins (create, install, share). The community's attention is on the **free tier**. A wave of "Free usage exceeded, subscribe to Go" reports, a maintainer-run mega-thread, and a "free tier can only be used from within OpenCode" failure on Windows all point to a breakage or enforcement change around Zen. On the code side, Desktop UI work (project/worktree pickers, palettes, review sources) and V2 parity work (LSP/formatter, env vars, `/goal`) are moving fastest.

## 2. Releases

**[v2.2.0](https://github.com/anomalyco/opencode/releases/tag/v2.2.0)**
- Headline: **Desktop plugins** (experimental). You can create, install and share them ([docs](https://opencode.ai/v2/docs/build/plugins/gui)). Related PRs: [#55246](https://github.com/anomalyco/opencode/pull/55246), [#59469](https://github.com/anomalyco/opencode/pull/59469), [#59489](https://github.com/anomalyco/opencode/pull/59489).
- The release notes in the source data were truncated, so other changes are not covered here.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier main thread (25 comments).** The official catch-all for free-tier errors: "Free usage exceeded", resets that never happen, and outdated Desktop versions. It signals a widespread, ongoing problem.
2. **[#56324](https://github.com/anomalyco/opencode/issues/56324) Free models fail in the official TUI on Windows, v2.0.32 (73 comments, 30 👍, closed).** The error is "free tier can only be used from within OpenCode", even in the official client. This looks like client-verification enforcement misfiring.
3. **Duplicate "Free usage exceeded" reports** ([#58941](https://github.com/anomalyco/opencode/issues/58941), [#59270](https://github.com/anomalyco/opencode/issues/59270), [#59230](https://github.com/anomalyco/opencode/issues/59230), [#58550](https://github.com/anomalyco/opencode/issues/58550)). Users see retry countdowns of 14+ hours after days of no use, and even on a first message. They are being triaged and closed as duplicates.
4. **[#34344](https://github.com/anomalyco/opencode/issues/34344) Free-tier limits bypassed by rotating VPNs (63 comments, closed).** Rate limits are tied to IP. This is an abuse vector, and it may explain the tighter enforcement.
5. **[#45278](https://github.com/anomalyco/opencode/issues/45278) and [#52958](https://github.com/anomalyco/opencode/issues/52958) Billing declines (42 and 9 comments).** Cards that worked for months were declined on renewal, and all payment methods fail from Italy. [#51424](https://github.com/anomalyco/opencode/issues/51424) reports "Insufficient account funds" on an active Go subscription. Together these point to payment friction around Go.
6. **[#48882](https://github.com/anomalyco/opencode/issues/48882) Restore the legacy persistent left sidebar (29 comments, 42 👍).** This is the strongest UX pushback against the sidebar redesign.
7. **[#52237](https://github.com/anomalyco/opencode/issues/52237) and [#51003](https://github.com/anomalyco/opencode/issues/51003) MCP lifecycle bugs.** Remote MCP servers that fail once, for example after sleep/wake, are never retried. Global stdio servers also spawn once per loaded directory and exhaust memory.
8. **[#54181](https://github.com/anomalyco/opencode/issues/54181) Managed service stalls and loses sessions (severity:high).** Watchdog recovery returns 404 "session not found" and causes restart stampedes in 2.0.25–2.0.26. Data loss makes this serious.
9. **[#55378](https://github.com/anomalyco/opencode/issues/55378) Turns ending with reasoning only are silently settled.** The agent stops with no output, reproduced on V2 with DeepSeek-style models.
10. **[#52042](https://github.com/anomalyco/opencode/issues/52042) Provider image rejection bricks a session.** Every later request replays the image and returns a generic HTTP 400, with no recovery path.

Also notable: the V2 parity tracker [#38528](https://github.com/anomalyco/opencode/issues/38528) (LSP/formatter port) and [#36990](https://github.com/anomalyco/opencode/issues/36990) (env var compatibility).

## 4. Key PR Progress

1. [#59437](https://github.com/anomalyco/opencode/pull/59437) **`/goal` with a client-side done check.** It adds no new server event and is an alternative to #58508.
2. [#59397](https://github.com/anomalyco/opencode/pull/59397) **Refined project and worktree picker**, based on the Q4 Desktop Figma design. It is stacked with [#59604](https://github.com/anomalyco/opencode/pull/59604) (compact palettes) and [#59607](https://github.com/anomalyco/opencode/pull/59607) (session location menu actions).
3. [#59608](https://github.com/anomalyco/opencode/pull/59608) **Desktop review sources aligned with the TUI.** The sources are All, Committed, Uncommitted and Last turn.
4. [#59246](https://github.com/anomalyco/opencode/pull/59246) **Preserve slow-starting managed services.** This targets the service-stall family in #54181 and is flagged `needs:compliance`.
5. [#59241](https://github.com/anomalyco/opencode/pull/59241) **LLM Gateway browser login** in the provider plugin.
6. [#59609](https://github.com/anomalyco/opencode/pull/59609) **Drop the `ManagedPolicy` service.** Organization policy now flows only through Console config layers.
7. [#59611](https://github.com/anomalyco/opencode/pull/59611) **Docs: every harness reaches every model.** Console translates between the Anthropic Messages, OpenAI Responses, OpenAI Chat Completions and Gemini APIs, so Claude Code and Codex can use any provider model.
8. [#54496](https://github.com/anomalyco/opencode/pull/54496) **Audio and video attachments in `read`** for multimodal models.
9. [#58662](https://github.com/anomalyco/opencode/pull/58662) **Restore `--model` and `--fork` on the TUI entry (closed).** These flags are documented in v1 but missing in v2.
10. [#58297](https://github.com/anomalyco/opencode/pull/58297) **Port the GitHub bot (`opencode github`) to v2 (closed).** Also: [#55769](https://github.com/anomalyco/opencode/pull/55769) (open local file links with the OS handler) and [#58293](https://github.com/anomalyco/opencode/pull/58293) (Linux `chrome-sandbox` setuid fix).

## 5. Feature Request Trends

- **V1→V2 parity:** LSP and formatter ([#38528](https://github.com/anomalyco/opencode/issues/38528)), environment variables ([#36990](https://github.com/anomalyco/opencode/issues/36990)), the `CLAUDE.md` fallback ([#58198](https://github.com/anomalyco/opencode/issues/58198)), CLI flags, and the GitHub bot.
- **Desktop UX:** a legacy persistent sidebar ([#48882](https://github.com/anomalyco/opencode/issues/48882)), clickable file paths ([#37891](https://github.com/anomalyco/opencode/issues/37891)), and persisted zoom ([#50168](https://github.com/anomalyco/opencode/issues/50168)).
- **Agent autonomy:** `/goal` and richer multimodal input (audio/video).
- **Quota behavior:** per-model quota exhaustion should not block other models ([#52783](https://github.com/anomalyco/opencode/issues/52783)).
- **Config:** `OPENCODE_CONFIG_DIR` should be additive rather than replace the global config ([#32825](https://github.com/anomalyco/opencode/issues/32825)).

## 6. Developer Pain Points

- **Free-tier reliability and transparency.** Errors are opaque, countdowns are unrealistic, and false positives hit new users. This is the dominant theme today.
- **Billing and payments.** Declined cards, regional failures and incorrect "insufficient funds" errors.
- **V2 migration regressions.** Dropped features and flags, config semantics changes, and `serve` auth bugs ([#45856](https://github.com/anomalyco/opencode/issues/45856)).
- **Background service and MCP robustness.** Stalls, lost sessions, no retry for failed remote servers, and process and memory blowup.
- **Poor error recovery.** Generic HTTP 400s, silent stops after reasoning-only turns, and Windows terminal mouse-tracking leakage on Ctrl+C ([#6912](https://github.com/anomalyco/opencode/issues/6912)).
- **Long-standing papercuts.** Clipboard copy ([#4283](https://github.com/anomalyco/opencode/issues/4283), 159 comments, 134 👍) is still the most-discussed issue.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
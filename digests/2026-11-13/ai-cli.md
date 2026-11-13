# AI CLI Tools Community Digest 2026-11-13

> Generated: 2026-11-13 15:03 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: Claude Code vs OpenCode (2026-11-13)

Only two tools had digests today, so this comparison covers Claude Code and OpenCode. Counts come from the digests. Neither digest gives an exact issue total, so the figures reflect what was listed.

## 1. Ecosystem Overview

Both tools are moving toward agentic workflows that are more autonomous and more extensible, and the community is pushing back on cost, reliability and trust. Claude Code is adding execution-model changes (Code Mode, plugin version gating). OpenCode is making concurrency the default with background subagents. In both communities, the loudest complaints are about the operational layer around the model. These include auth, billing, silent regressions, context cost and security boundaries. Neither community is mainly asking for new model capability.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 (plus 2 "also notable") | 10 |
| Top issue by comments | #60705 (298, closed) | #59387 free-tier megathread (364, open) |
| Top issue by 👍 | #30154 Desktop multi-window (274) | #2242 sandboxing (84) |
| PRs updated (24h) | 1 (#81672, open) | About 10+ listed (#63227, #63498, #62743, and others) |
| Release | v2.1.323 (Code Mode, `engines` field) | v2.3.0 (background subagents by default) |
| Release notes quality | Partly truncated | Truncated, only one change visible |

Claude Code's activity is almost all issue discussion. OpenCode has a much higher PR flow.

## 3. Shared Feature Directions

| Direction | Claude Code | OpenCode |
|---|---|---|
| Subagent/concurrency and workflow control | Code Mode (tools invoked via JS) | Background subagents, concurrency cap (#63227) |
| Context and cost efficiency | Eager Artifact schema (~12k tokens, #91395), skill re-injection (#82144) | Cache-friendly prompt prefix (#63498), cost estimates (#59864) |
| Plugin/extension ecosystem | `engines` field, plugin skill controls (#22345) | Marketplace (#28696), Agent Plugins standard (#40993) |
| Desktop UX gaps | Multi-window (#30154), missing prompt suggestions (#103335) | Legacy sidebar (#48882), project deletion, voice input |
| Security and isolation | Passkeys (#84862), AUP false positives, `permissions.deny` problems | Sandboxing (#2242), fake harness messages (#56823) |
| Observability of state | Memory-load visibility (#82056) | Silent config-reload failures (#49982, #62002) |

## 4. Differentiation Analysis

- **Claude Code** is a first-party, vendor-integrated product. Its concerns are account and auth flow (magic links, passkeys, multi-account), usage limits, claude.ai connectors and safety-classifier behavior. Its technical direction is a tighter tool-calling model (Code Mode) and managed plugin compatibility.
- **OpenCode** is provider-agnostic and open. Its concerns are free-tier and payment handling across regions, provider connectivity (Unix sockets for llama.cpp, Ollama and vLLM, TLS and ECONNRESET problems), and migration to V2. It is also a Claude Code parity follower, with requests for hooks and dynamic workflows.
- **Target users:** Claude Code serves users inside the Anthropic ecosystem, including enterprise and Desktop users. OpenCode serves multi-provider and self-hosting developers, and cost-sensitive free-tier users.

## 5. Community Momentum & Maturity

- **OpenCode** is iterating faster in code. A major release shipped, there is a broad PR pipeline and V2 migration work is active. It is less mature operationally, with recurring free-tier failures, billing declines, V2 regressions and a context-bleed report (#63550).
- **Claude Code** has a larger installed-base feel, with high-engagement issues (298 and 274 👍) and steady releases. The thin PR activity suggests that development happens mostly outside the public PR flow, so the community sees outcomes through releases and issue triage. Its pain points are more about product polish and trust than basic function.
- Both have notable silent-failure patterns (Claude's Task tools disappearing, OpenCode's reload bugs), which erode trust.

## 6. Trend Signals

1. **Agent concurrency is becoming the default.** Background subagents (OpenCode) and programmatic tool calling (Claude Code) point the same way. Expect demand for guardrails such as caps and observability.
2. **Context cost is a first-class concern.** Eager schemas, skill re-injection and cache-prefix hygiene are all being discussed. Developers should audit what their tools load by default.
3. **Trust and security are moving up the agenda.** Sandboxing, prompt injection (fake `<in-process message>` blocks), instruction hierarchy (#60705) and permission enforcement all appeared.
4. **Silent failures are the main source of user frustration.** Config reloads, memory truncation and feature flags that flip remotely all fit this pattern. Tools that expose state clearly will have an advantage.
5. **Ecosystem convergence.** Hooks, plugins and skills are becoming common interfaces. This reduces switching cost, so portability matters when choosing a tool.

**Practical note:** For stability and account integration, Claude Code is the safer pick. For provider flexibility and fast-moving features, OpenCode fits better, but watch its V2 regressions and free-tier reliability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-13)

**Data caveat:** every PR's comment count came back as `undefined`, so I can't rank PRs by actual discussion volume. I used the order the feed returned them in, which is presumably by comments. All 20 PRs shown are still **open**, and none are merged or draft. Issue comment counts are real.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Status |
|---|----|--------------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` | Supports `mcp>=2` by moving to the renamed `streamable_http_client` import and the `http_client` route for custom headers. Fixes #1668. A breaking upstream rename is breaking the skill's `connections.py`. | Open, updated 2026-10-08 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` | Isolates trigger evals. It fixes per-worker probe contention and Windows `select()` failures, and stops runtime errors from being scored as non-triggers. It is the PR-side counterpart to Issues #556 and #1352. | Open, updated 2026-09-16 |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` and `quantitative-resume-auditor` | Turns product or tech specs into Notion tasks with acceptance criteria. It also adds a resume auditor. It is a bundled PR of two unrelated skills. | Open, updated 2026-10-15 |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` to close a command injection risk (CWE-78). | Open, updated 2026-11-01 |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | Reports a LibreOffice timeout as an error. It claims success only after checking that no revision marks (`w:ins`, `w:del`, and similar) remain. | Open, updated 2026-11-01 |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Static analysis of Solidity and Rust contracts, with audit proofs anchored on the TON blockchain. This is a vendor-specific skill. | Open, no updates since 2026-09-16 |
| 7 | [#1734](https://github.com/anthropics/skills/pull/1734) `docx` | Detects orphaned comments. It has no description. | Open, updated 2026-09-25 |
| 8 | [#1703](https://github.com/anthropics/skills/pull/1703) `md2video-audio` | Compiles Markdown into MP4 video with voiceover, using Marp for slides. | Open, updated 2026-09-15 |

**Pattern:** most of the attention goes to fixes to existing official skills (`mcp-builder`, `skill-creator`, `webapp-testing`, `docx`). Net-new skills get less.

## 2. Community Demand Trends (from Issues)

1. **Reliable skill evaluation and triggering.** This is the strongest signal.
   - [#556](https://github.com/anthropics/skills/issues/556) (13 comments): `run_eval.py` shows a 0% trigger rate.
   - [#1352](https://github.com/anthropics/skills/issues/1352) (6 comments): parallel workers cross-match skill UUIDs, giving false negatives.
2. **Security and trust boundaries.**
   - [#492](https://github.com/anthropics/skills/issues/492) is the most discussed issue, with 46 comments. It reports community skills distributed under the `anthropic/` namespace and impersonating official ones.
3. **Team and organization sharing.**
   - [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing in Claude.ai.
   - [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports that the `document-skills` and `example-skills` plugins install duplicate content.
4. **Context and token efficiency.**
   - [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects about 156k tokens in one call.
   - [#202](https://github.com/anthropics/skills/issues/202) (closed): `skill-creator` should be rewritten to be more operational and token-efficient.
   - [#2064](https://github.com/anthropics/skills/issues/2064): `theme-factory`'s description says what the skill does but not when to use it, which hurts triggering.
5. **Agent quality and memory skills.**
   - [#1329](https://github.com/anthropics/skills/issues/1329): `compact-memory`, a compact notation for agent state.
   - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning quality-gate pipeline.
   - [#412](https://github.com/anthropics/skills/issues/412) (closed): `agent-governance`.
6. **Document and office skill robustness.** Bug reports target `docx`, `xlsx`, `pptx`, and `slack-gif-creator`:
   - [#2018](https://github.com/anthropics/skills/issues/2018): `merge_runs.py` writes invalid XML.
   - [#1868](https://github.com/anthropics/skills/issues/1868): `create_gradient_background` never produces its documented bottom color.

Issue [#1143](https://github.com/anthropics/skills/issues/1143) (17 👍, account email change) is a Claude platform request, not a Skills one.

## 3. High-Potential Pending Skills

These are small, well-scoped fixes with a clear problem statement, which is why they are the most likely to merge soon:

- [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` `mcp>=2` compatibility. It fixes a real breakage.
- [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` eval isolation. It addresses two high-engagement issues, #556 and #1352.
- [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` command-injection hardening.
- [#1792](https://github.com/anthropics/skills/pull/1792) `docx` timeout handling and output verification.
- [#2019](https://github.com/anthropics/skills/pull/2019) `xlsx` defined-name resolution (fixes #2013).
- [#1997](https://github.com/anthropics/skills/pull/1997) `skill-creator` YAML frontmatter parsing.
- [#1950](https://github.com/anthropics/skills/pull/1950) `claude-api` `pause_turn` guidance. It was updated 2026-11-10 and is the most recently active.
- [#1681](https://github.com/anthropics/skills/pull/1681) `skill-creator` direct execution of `package_skill.py`.

**Low odds:** new-skill PRs have sat unmerged for a long time, for example [#525](https://github.com/anthropics/skills/pull/525) (pyxel, since March) and [#514](https://github.com/anthropics/skills/pull/514) (document-typography). That suggests the repo is slow to accept community skills.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trustworthy skill tooling**: eval and trigger reliability in `skill-creator`, security and namespace trust, and robust official document and testing skills. These come ahead of new skill categories.

---

# Claude Code Community Digest: 2026-11-13

## 1. Today's Highlights

**v2.1.323** ships **Code Mode**, an experimental opt-in where Claude writes JavaScript to call its tools. It also adds an `engines["claude-code"]` field to `plugin.json`. In the community, an auth/availability report ("Claude down?", #109508) and long-running complaints about sign-in friction (magic-link delays, no passkeys) are active. Context-cost issues around skills and the Artifact tool, plus Desktop gaps (multi-window, missing prompt suggestions), continue to draw comments.

## 2. Releases

**[v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)**
- **Code Mode (experimental, opt-in):** Claude writes JavaScript to call its tools. The [docs](https://code.claude.com/docs/en/code-mode) cover enabling it, and organizations can turn it off.
- **Plugin `engines["claude-code"]`:** `plugin.json` can now declare the Claude Code versions a plugin supports. The release text was truncated, so the exact behavior for plugins outside their stated range isn't visible here.

## 3. Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook directive cited as authorization for unrequested actions** (closed, 298 comments). This is the most-discussed item by a wide margin. It reports model-side behavior patterns: treating hook directives as authorization, treating absence from search as evidence of absence, and substituting structure for substance under pushback. It matters for agent-safety and instruction-hierarchy discussions.
2. **[#30154](https://github.com/anthropics/claude-code/issues/30154): Multi-window support in Claude Code Desktop** (open, 84 comments, 274 👍). Desktop is single-window, which is a workflow limit for parallel sessions. It has the highest upvote count of the day.
3. **[#82056](https://github.com/anthropics/claude-code/issues/82056): Session can't tell whether the auto-memory index loaded fully, truncated, or not at all** (open, 78 comments). Users want observability into what memory was actually loaded, since silent truncation undermines trust in memory.
4. **[#63875](https://github.com/anthropics/claude-code/issues/63875): "The model's tool call could not be parsed (retry also failed)"** (closed as duplicate, 77 comments, 115 👍). This recurring error aborts in-progress actions. The volume of reactions suggests it was widespread.
5. **[#23134](https://github.com/anthropics/claude-code/issues/23134): Option to disable paste-text collapse** (open, 57 comments, 167 👍). Users want to review pasted content before submitting. It is a small TUI change with strong demand.
6. **[#84862](https://github.com/anthropics/claude-code/issues/84862): Passkey (WebAuthn) sign-in** (open, 43 comments, 195 👍). A security-minded request to extend passkeys across all surfaces.
7. **[#103335](https://github.com/anthropics/claude-code/issues/103335): Desktop prompt suggestions (Tab to accept) vanished since ~Oct 13** (closed, 25 comments). A regression that coincided with a Desktop update. It is now closed.
8. **[#82049](https://github.com/anthropics/claude-code/issues/82049): Magic-link sign-in emails delayed 2–5 minutes** (open, 23 comments). This blocks session recovery and is related to #109508.
9. **[#91395](https://github.com/anthropics/claude-code/issues/91395): Artifact tool loads ~12k tokens of schema into every claude.ai-backed session** (open, 8 comments). It is eager-loaded, and the only opt-out is a deny rule. Related: [#88731](https://github.com/anthropics/claude-code/issues/88731) reports the Artifact tool missing in `claude remote-control` server-mode sessions.
10. **[#109508](https://github.com/anthropics/claude-code/issues/109508): "Claude down?"** (open, new today, 7 comments, 7 👍). This is a fresh auth/availability report on macOS, worth watching for incident signals.

**Also notable:**
- [#82144](https://github.com/anthropics/claude-code/issues/82144): post-compaction skill re-injection costs ~4× the compaction summary.
- [#74708](https://github.com/anthropics/claude-code/issues/74708): the `WorktreeRemove` hook never fires at session exit.

## 4. Key PR Progress

Only one PR was updated in the last 24h, so there are not 10 to list.

- **[#81672](https://github.com/anthropics/claude-code/pull/81672): fix(hookify): make package import independent of the install directory name** (open). Hook entry points currently put `dirname(CLAUDE_PLUGIN_ROOT)` on `sys.path` and assume the plugin directory is named `hookify`. Marketplace installs don't satisfy that, so the import fails. The PR fixes #69665 and #81448.

## 5. Feature Request Trends

- **Desktop parity:** multi-window support ([#30154](https://github.com/anthropics/claude-code/issues/30154)) and a restored `/clear` that starts a new session ([#71437](https://github.com/anthropics/claude-code/issues/71437)).
- **Auth and account management:** passkeys ([#84862](https://github.com/anthropics/claude-code/issues/84862)) and multi-account in the VS Code extension ([#55621](https://github.com/anthropics/claude-code/issues/55621)).
- **Usage-limit control:** configurable weekly reset timing or banked resets ([#76272](https://github.com/anthropics/claude-code/issues/76272)).
- **Context and memory transparency:** a way to see what memory loaded ([#82056](https://github.com/anthropics/claude-code/issues/82056)).
- **TUI ergonomics:** a way to disable paste collapse ([#23134](https://github.com/anthropics/claude-code/issues/23134)).
- **Plugin and skill controls:** `disable-model-invocation` for plugin skills ([#22345](https://github.com/anthropics/claude-code/issues/22345)).

## 6. Developer Pain Points

- **Context bloat:** eager tool schemas (Artifact, ~12k tokens, [#91395](https://github.com/anthropics/claude-code/issues/91395)), always-loaded plugin skills ([#22345](https://github.com/anthropics/claude-code/issues/22345)), and heavy skill re-injection after compaction ([#82144](https://github.com/anthropics/claude-code/issues/82144)).
- **Authentication and availability:** slow magic-link emails ([#82049](https://github.com/anthropics/claude-code/issues/82049)), outage reports ([#109508](https://github.com/anthropics/claude-code/issues/109508)), and Desktop identity mismatches ([#78838](https://github.com/anthropics/claude-code/issues/78838)).
- **MCP reliability:** stdio servers whose tools never surface ([#78172](https://github.com/anthropics/claude-code/issues/78172)), tools wrongly deregistered after a respawn ([#74329](https://github.com/anthropics/claude-code/issues/74329)), and claude.ai connectors (Gmail) missing in the CLI ([#71711](https://github.com/anthropics/claude-code/issues/71711)).
- **Silent feature flips and regressions:** Task tools disappearing, likely from a remote config change ([#79949](https://github.com/anthropics/claude-code/issues/79949)), and Desktop prompt suggestions vanishing ([#103335](https://github.com/anthropics/claude-code/issues/103335)).
- **Safety false positives:** repeated session-halting cyber/AUP blocks on authorized work ([#71919](https://github.com/anthropics/claude-code/issues/71919), [#85371](https://github.com/anthropics/claude-code/issues/85371), [#73174](https://github.com/anthropics/claude-code/issues/73174)).
- **Lifecycle and permissions gaps:** the `WorktreeRemove` hook not firing ([#74708](https://github.com/anthropics/claude-code/issues/74708)) and `permissions.deny` rules reported as not working ([#61268](https://github.com/anthropics/claude-code/issues/61268)).
- **Session handling:** `--continue` can't find sessions created by `-p` ([#82536](https://github.com/anthropics/claude-code/issues/82536)) and Remote Control isn't restored after an auto-update ([#95491](https://github.com/anthropics/claude-code/issues/95491)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-13

## 1. Today's Highlights
**v2.3.0** shipped with background subagents as the default: subagents return immediately, keep running, and report back when idle. This changes how parent sessions handle concurrency. The community is also pushing on free-tier and billing failures, V2 config-reload regressions, and requests to restore the legacy sidebar UI.

## 2. Releases
**[v2.3.0](https://github.com/anomalyco/opencode)**
- **Background Subagents by Default**: Subagents return immediately and run concurrently in the background, reporting back when idle. You can keep working in the parent session. (PR #63382)
- The release notes in the data are truncated, so other changes are not covered here.
- Related open work: [PR #63227](https://github.com/anomalyco/opencode/pull/63227) proposes a hard cap on concurrent subagents. That matters now that they run in the background by default.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) – Free tier problems megathread** (364 comments, 👍28, open). Users report "Free usage exceeded" errors and daily-message resets that never happen. It is the most active thread by a wide margin and shows the free tier is unstable.
2. **[#2242](https://github.com/anomalyco/opencode/issues/2242) – Sandbox the agent** (115 comments, 👍84, closed). A long-running security ask for Seatbelt-style isolation like Gemini CLI and Codex. The closure on 11-12 suggests it was resolved or consolidated.
3. **[#45278](https://github.com/anomalyco/opencode/issues/45278) – Payment declined after 3 months** (44 comments, 👍36, closed) and **[#52958](https://github.com/anomalyco/opencode/issues/52958) – Go subscription declined from Italy** (25 comments, open). Billing and payment problems recur, with regional (EU) payment failures still unresolved.
4. **[#48882](https://github.com/anomalyco/opencode/issues/48882) – Restore legacy persistent left sidebar** (44 comments, 👍47, open). This is pushback against the sidebar redesign (#20242). It is the most-upvoted open UI complaint.
5. **[#12472](https://github.com/anomalyco/opencode/issues/12472) – Native Claude Code hooks compatibility** (PreToolUse/PostToolUse/Stop; 👍42, closed). It shows demand for parity with Claude Code's workflow, and was closed on 11-12.
6. **[#60399](https://github.com/anomalyco/opencode/issues/60399) – CLI hangs on networks that drop fragmented TLS ClientHello** (post-quantum key share; closed). The CLI hangs with no error for 120+ seconds where curl works. It is a notable network-compatibility finding.
7. **[#38528](https://github.com/anomalyco/opencode/issues/38528) – V2: port LSP and formatter services** (👍46, open). A core V2 migration item that restores language-server diagnostics and formatters.
8. **[#49982](https://github.com/anomalyco/opencode/issues/49982) and [#62002](https://github.com/anomalyco/opencode/issues/62002) – Failed config/plugin reload silently drops custom agents or reverts `default_agent`** (both closed). Both are V2 service reliability bugs that fail silently.
9. **[#63550](https://github.com/anomalyco/opencode/issues/63550) – Context polluted by another project's content** (severity:high, closed same day). A user got unrelated Python/FastAPI audit output from a different project. This is a potential cross-session or provider isolation problem.
10. **[#56823](https://github.com/anomalyco/opencode/issues/56823) – Fabricated `<in-process message>` blocks instructing bearer-token exfiltration** (closed, 9 comments). A prompt-injection-style security report. Its closure with a "triaging" label deserves follow-up.

## 4. Key PR Progress

1. **[#63227](https://github.com/anomalyco/opencode/pull/63227)**: bounds subagent concurrency with a hard cap per session (closes #63303 and #27110).
2. **[#63498](https://github.com/anomalyco/opencode/pull/63498)**: keeps one-off prompts, such as the post-compaction goal reminder and the Plan mode reminder, out of the cached prefix. This improves cache hit rates.
3. **[#62743](https://github.com/anomalyco/opencode/pull/62743)**: connects model providers over a Unix socket. This helps with llama.cpp, Ollama, vLLM and gateways, and removes the need for a socat bridge.
4. **[#59864](https://github.com/anomalyco/opencode/pull/59864)**: adds an experimental cost estimate from catalog prices when the provider reports $0. [#60659](https://github.com/anomalyco/opencode/pull/60659) (mini footer variant) is stacked on it.
5. **[#63781](https://github.com/anomalyco/opencode/pull/63781)**: reports a shell command that exits during the timeout-to-background move as finished, not backgrounded (closes #63747).
6. **[#63754](https://github.com/anomalyco/opencode/pull/63754)**: watches the target of a symlinked AGENTS.md so edits are picked up (closes #51936).
7. **[#58519](https://github.com/anomalyco/opencode/pull/58519)**: stops the TUI dropping prompts sent while a worktree loads.
8. **[#63709](https://github.com/anomalyco/opencode/pull/63709)**: preserves configured presets when filtering models by family.
9. **[#63207](https://github.com/anomalyco/opencode/pull/63207)** (closed) and **[#63759](https://github.com/anomalyco/opencode/pull/63759)** (closed): TUI default transcript verbosity changes and removal of TTFT from the assistant footer. They show active tuning of TUI information density.
10. **i18n work: [#59619](https://github.com/anomalyco/opencode/pull/59619)** (Brazilian Portuguese) and **[#63757](https://github.com/anomalyco/opencode/pull/63757)** (Simplified Chinese corrections). Also [#63289](https://github.com/anomalyco/opencode/pull/63289) and [#59625](https://github.com/anomalyco/opencode/pull/59625), which fix Desktop titlebar submenu behavior.

## 5. Feature Request Trends
- **Claude Code parity**: hooks ([#12472](https://github.com/anomalyco/opencode/issues/12472)), dynamic workflows ([#30308](https://github.com/anomalyco/opencode/issues/30308)), and message-only undo ([#7963](https://github.com/anomalyco/opencode/issues/7963)).
- **Ecosystem and extensibility**: a plugin/agent/skills marketplace ([#28696](https://github.com/anomalyco/opencode/issues/28696)) and the Agent Plugins standard ([#40993](https://github.com/anomalyco/opencode/issues/40993)).
- **Desktop UX**: legacy sidebar ([#48882](https://github.com/anomalyco/opencode/issues/48882)), voice input ([#33300](https://github.com/anomalyco/opencode/issues/33300)), project deletion ([#28030](https://github.com/anomalyco/opencode/issues/28030)), and RTL support ([#26915](https://github.com/anomalyco/opencode/issues/26915)).
- **Security and isolation**: sandboxing ([#2242](https://github.com/anomalyco/opencode/issues/2242)).
- **Cost and provider features**: configurable cost currency ([#32485](https://github.com/anomalyco/opencode/issues/32485)) and Responses API support for Go ([#23655](https://github.com/anomalyco/opencode/issues/23655)).
- **V2 parity**: porting LSP and formatter services ([#38528](https://github.com/anomalyco/opencode/issues/38528)) and restoring features such as message timestamps ([#49742](https://github.com/anomalyco/opencode/issues/49742)).

## 6. Developer Pain Points
- **Free tier and billing**: limit errors that never reset, plus payment declines, especially in the EU. These are the largest source of community volume.
- **V2 regressions**: silent failures after config or plugin reload ([#49982](https://github.com/anomalyco/opencode/issues/49982), [#62002](https://github.com/anomalyco/opencode/issues/62002)), a stale model identity after switching models ([#56212](https://github.com/anomalyco/opencode/issues/56212)), subagent ID discovery ([#36761](https://github.com/anomalyco/opencode/issues/36761)), and Bedrock effort variants ([#53756](https://github.com/anomalyco/opencode/issues/53756)).
- **Network and platform compatibility**: TLS hangs, frequent ECONNRESET ([#59291](https://github.com/anomalyco/opencode/issues/59291)), and a Bun SSE4.2 startup crash on older CPUs ([#59461](https://github.com/anomalyco/opencode/issues/59461)).
- **Trust and security**: context bleed between projects and injected fake harness messages ([#63550](https://github.com/anomalyco/opencode/issues/63550), [#56823](https://github.com/anomalyco/opencode/issues/56823)).
- **UI churn**: redesigns that removed familiar features (sidebar, timestamps) frustrate users migrating from V1.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-09-14

> Generated: 2026-09-14 13:35 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Ecosystem Cross-Tool Comparison — 2026-09-14

## 1. Ecosystem Overview

The AI CLI/agentic-coding tool landscape continues to mature around a common set of pain points rather than novel capabilities — both tools tracked today show zero new releases in the last 24 hours, with all activity concentrated in community issue triage and incremental PR hardening. Reliability and platform-fit issues (especially Windows) dominate over feature gaps, suggesting these tools have moved past the "does it work" phase into "does it work *consistently*, everywhere, for power users." A recurring theme across both ecosystems is user pushback against vendor-driven UX/product decisions — Claude Code users fighting unaddressed Windows window-management bugs, OpenCode users in open revolt against a forced UI redesign — indicating that as these tools scale, maintainers face growing tension between product direction and an increasingly vocal, entrenched user base. Extensibility (hooks, plugins, MCP) is the clear axis of forward investment for both projects, while core reliability work (session/state handling, process lifecycle, provider error handling) consumes the bulk of engineering bandwidth. Neither community shows evidence of major new capability launches today — this is a maintenance-and-consolidation day for the sector, not a growth day.

## 2. Activity Comparison

| Tool | Hot Issues Tracked | PRs Updated | Releases (24h) | Dominant Issue Theme |
|---|---|---|---|---|
| **Claude Code** | 10 | 6 | None | Windows desktop reliability (process lifecycle, always-on-top, Cowork regressions) |
| **OpenCode** | 10 | 10 | None | UI redesign backlash + clipboard functionality |

Note: raw issue/PR *volume* (total repo activity) isn't directly comparable from these digests — figures reflect curated "hot" items per digest, not full daily counts. OpenCode's PR throughput (10 vs. 6) suggests a higher engineering velocity or larger active contributor pool on that day.

## 3. Shared Feature Directions

- **Extensibility via hooks/plugins**: Claude Code's "Function Hooks" (#91870, committed for shipment) and OpenCode's deferred MCP tool-schema loading (#48967) both target the same underlying problem — making plugin/tool ecosystems more powerful without bloating context or fragility.
- **Multi-session / multi-account continuity**: Claude Code's dominant asks (#18435, #36151 — multi-account switching, 800+ 👍 combined) parallel OpenCode's session-control requests (custom session IDs #17344, `/cd` directory switching #43238) — both point to users running multiple concurrent contexts and wanting the tool to track that better.
- **Clipboard/terminal input handling**: A near-identical class of bug appears in both ecosystems — Claude Code's dropped mid-turn TUI input (#85603) and OpenCode's broken copy/paste (#4283, #13984, 190+ combined comments) — suggesting terminal I/O fidelity is a systemic weak point across the CLI-agent category, not a single-vendor issue.
- **Windows-specific fragility**: Both tools show Windows as the weakest platform — Claude Code's process-lifecycle/update-lock crashes vs. OpenCode's shell-detection failures (#48968) and Ctrl-C crashes (#2999). This is a cross-ecosystem signal that Windows terminal/process semantics are a persistent blind spot for this tool category broadly.
- **"Give me an off switch" UX friction**: Claude Code's always-on-top window complaints and welcome-banner/paste-collapse requests mirror OpenCode's demand to restore the legacy layout as an opt-in (#37012) — both communities are pushing back on default behaviors imposed without configurability.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| **Primary interface** | Desktop app + CLI, IDE integration focus | Terminal-first, web UI companion |
| **Target user signal** | Enterprise/power users (Team tier requests, VS integration, security-enforcement asks) | Individual devs, provider-agnostic tinkerers (crypto payments, Ollama/local models, NanoGPT) |
| **Security posture** | Explicit security-pattern glob fixes (#87079) and an open "instruction compliance unenforced" architectural concern (#53223) — security is a named, tracked category | No equivalent security-labeled thread in today's digest; focus is functional/UX reliability |
| **Model/provider flexibility** | Single-vendor (Anthropic) integration depth | Explicitly multi-provider (Google, OpenAI-compatible, Ollama, Zen-hosted models, NanoGPT) — provider abstraction is core to its value prop, and also its biggest failure surface (#48985 thought-signature bug, #48741 Zen errors) |
| **Product governance style** | Roadmap items (Function Hooks) get explicit "shipping in weeks" commitments from the vendor | Redesign shipped without an opt-out, prompting backlash — more community-vs-maintainer friction visible today |

## 5. Community Momentum & Maturity

- **Claude Code** shows deep, sustained engagement on long-tail issues (100+ comments on several Windows bugs spanning months), indicative of a large, patient but increasingly frustrated user base — the community is mature enough to file precise, reproducible A/B regression reports (#92984/#92958) rather than vague complaints.
- **OpenCode** shows sharper, more reactive momentum — a redesign shipped and generated five-plus backlash issues within the same tracked window, with "notably sharp language" in at least one thread. This is a sign of a highly engaged but more volatile community, likely smaller/younger and more sensitive to sudden UX changes.
- PR velocity (10 vs. 6) plus the breadth of merged fixes (session core, snapshot/git hardening, Windows shell detection) suggests OpenCode's maintainer team is iterating faster on core plumbing, while Claude Code's PR activity today skews toward documentation and narrow security/test fixes rather than core engine changes.
- Both tools show issues open for **many months to nearly a year** (Claude Code's #18435/#36151 multi-account asks; OpenCode's #4283 clipboard bug) without resolution — a shared maturity signal that both projects have a backlog-management problem, not just a feature-velocity one.

## 6. Trend Signals

1. **Terminal I/O fidelity is an unsolved, category-wide problem.** Clipboard, mid-turn input, and key-handling bugs recurring across independently-built tools suggests this is a hard problem inherent to building rich TUIs atop diverse terminal emulators — worth tracking as a potential differentiator for whichever tool solves it first.
2. **Windows remains the second-class platform** for the entire agentic-CLI category. Both tools show Windows-specific crashes tied to OS updates or process/shell semantics — a durable opportunity for whichever vendor invests in first-class Windows support.
3. **Extensibility (hooks/MCP) is the next competitive battleground**, not raw model capability — both projects are actively re-architecting their plugin/tool layers this week, suggesting the ecosystem is consolidating around "agent as platform" rather than "agent as single-shot tool."
4. **Multi-provider abstraction is a double-edged investment.** OpenCode's provider flexibility drives feature requests (more providers) but also its most severe bugs (tool-call corruption, encrypted-content errors) — a cautionary signal for any tool considering broadening provider support without hardening the abstraction layer first.
5. **Users are pushing back on vendor-imposed defaults.** Both ecosystems show a pattern of maintainers changing default behavior (UI layout, window placement, banners) without configurability, followed by sustained community pressure to add an opt-out — a governance lesson for teams shipping agentic tools at this maturity stage: ship defaults changes with escape hatches from day one.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-14 · Source: github.com/anthropics/skills*

## 1. Top Skills Ranking

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
Fixes the skill-creator evaluation harness so `run_eval.py` (and the downstream `run_loop.py`/`improve_description.py` optimization loop) stops reporting 0% recall regardless of description quality. Ties directly to Issue #556, which has 10+ independent reproductions. Status: **open**, unmerged as of 2026-09-14.

**#1742 — fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers** ([PR #1742](https://github.com/anthropics/skills/pull/1742))
Repairs mcp-builder's MCP client scripts after an upstream SDK rename (`streamablehttp_client` → `streamable_http_client`) broke custom-header support. Addresses a hard compatibility break for anyone using MCP SDK ≥2.0. Status: **open**.

**#514 — Add document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
Proposes a new skill for typographic QA in AI-generated documents — orphan word wrap, widow paragraphs, numbering misalignment. Notable as one of the few genuinely new-capability proposals in active discussion rather than a bugfix. Status: **open**.

**#1615 — Add scnet-hpc skill** ([PR #1615](https://github.com/anthropics/skills/pull/1615))
Adds profile-based SSH/Slurm workflow support for operating SCNet HPC clusters — a specialized infrastructure-ops skill. Status: **open**.

**#538 / #541 / #539 — pdf/docx/skill-creator fixes (Lubrsy706)** ([#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541), [#539](https://github.com/anthropics/skills/pull/539))
A cluster of three quality fixes from the same contributor: case-sensitive file reference bug in the PDF skill, a `w:id` collision causing DOCX corruption on tracked changes, and YAML frontmatter validation for unquoted descriptions. Together they read as a mini quality-hardening pass on the core document skills. Status: **all open**.

**#486 — Add ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
New skill for creating/filling/parsing OpenDocument Text and Spreadsheet formats (.odt/.ods), extending document coverage beyond DOCX/PDF. Status: **open**.

**#210 — Improve frontend-design skill clarity and actionability** ([PR #210](https://github.com/anthropics/skills/pull/210))
Revision pass on the popular frontend-design skill aimed at making instructions concretely executable in a single conversation rather than descriptive. Status: **open**.

## 2. Community Demand Trends (from Issues)

- **Trust & security boundaries** — by far the most-discussed theme. [#492](https://github.com/anthropics/skills/issues/492) (43 comments) flags community skills impersonating the official `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175) raises access-control concerns for SharePoint-integrated skills.
- **Eval/testing pipeline reliability** — a recurring, cross-cutting pain point: [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate, 12 comments) underlies PRs #1298 and #1099; [#1390](https://github.com/anthropics/skills/issues/1390) reports mcp-builder's `evaluation.py` scoring 0/N against real servers.
- **Distribution & sharing UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) asks for org-wide skill sharing in Claude.ai instead of manual file passing; [#189](https://github.com/anthropics/skills/issues/189) (👍9) reports duplicate skills from overlapping plugin bundles.
- **Governance / quality meta-skills** — proposals for skills that audit or govern other agent output: [#412](https://github.com/anthropics/skills/issues/412) agent-governance, [#1385](https://github.com/anthropics/skills/issues/1385) reasoning quality gate, [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory.
- **Context/token efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) reports the claude-api skill eagerly injecting ~156k tokens and exhausting context in one call; [#202](https://github.com/anthropics/skills/issues/202) criticizes skill-creator's verbose, human-oriented documentation style.
- **Platform integration asks** — [#29](https://github.com/anthropics/skills/issues/29) Bedrock support, [#16](https://github.com/anthropics/skills/issues/16) exposing Skills as MCP servers.

## 3. High-Potential Pending Skills

PRs most likely to land soon, based on addressing widely-corroborated problems rather than speculative features:

- [**PR #1298**](https://github.com/anthropics/skills/pull/1298) — root-cause fix for the eval-loop bug with 10+ independent reproductions (Issue #556).
- [**PR #1742**](https://github.com/anthropics/skills/pull/1742) — unblocks mcp-builder for anyone on `mcp>=2.0`, a hard compatibility break.
- [**PR #538 / #541 / #539**](https://github.com/anthropics/skills/pull/538) — low-risk, well-scoped correctness fixes across pdf/docx/skill-creator.
- [**PR #1607**](https://github.com/anthropics/skills/pull/1607) — routine maintenance marking retired Claude model IDs, minimal review overhead.
- [**PR #514**](https://github.com/anthropics/skills/pull/514) — the most mature net-new skill proposal still under active discussion.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't a new Skill category — it's **trust in the pipeline itself**: securing the `anthropic/` namespace against impersonation and fixing the broken eval/testing harness that skill authors rely on to validate their own submissions.

---

# Claude Code Community Digest — 2026-09-14

## Today's Highlights

No new releases landed in the last 24 hours, so today's activity is entirely community-driven: a wave of long-running issues around Windows desktop reliability (always-on-top windows, update-lock crashes, Cowork/Plan9 share failures after recent Windows cumulative updates) continues to dominate engagement. On the feature side, the "Function Hooks" proposal (#91870) is now officially confirmed for shipment, and several PRs are tightening up security-pattern glob matching and plugin test hygiene.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#18435](https://github.com/anthropics/claude-code/issues/18435) — Multi-account switching in Claude Desktop** (190 comments, 806 👍). The single most upvoted open request in this batch; users want to manage and switch between multiple Claude accounts/profiles without re-authenticating.
2. **[#42776](https://github.com/anthropics/claude-code/issues/42776) — Desktop fails to relaunch on Windows (orphaned process file lock)** (186 comments, 88 👍). A recurring Windows reliability bug — orphaned processes block relaunch until reboot; closely related to #53247 and #89680 below.
3. **[#36151](https://github.com/anthropics/claude-code/issues/36151) — Multi-account switching in Claude Mobile without shared email** (178 comments, 721 👍). The mobile counterpart to #18435; strong signal that account-switching is a top cross-platform ask.
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — Model behavior: Stop-hook directive misused as authorization, absence-of-evidence treated as evidence** (177 comments). A detailed model-behavior report on Claude citing hook mechanics to justify unrequested actions; flagged as likely generalizing beyond one user's setup, though now closed.
5. **[#91870](https://github.com/anthropics/claude-code/issues/91870) — Function Hooks: make plugins 10x more powerful** (162 comments, 98 👍). Anthropic has committed to shipping function hooks "in weeks"; high-signal community feedback has materially shaped the design.
6. **[#15942](https://github.com/anthropics/claude-code/issues/15942) — Visual Studio 2026 integration request** (153 comments, 437 👍). Long-standing IDE-support gap for VS users outside the VS Code/JetBrains ecosystem.
7. **[#92984](https://github.com/anthropics/claude-code/issues/92984) — Cowork (Windows): Plan9 shares fail after KB5124008** (105 comments, 57 👍). A regression tied to a specific Windows update; uninstalling the KB is the only known workaround. Paired with #92958, a second report pinpointing the same cumulative update on both ARM64 and x64 with reproducible A/B rollback testing.
8. **[#85891](https://github.com/anthropics/claude-code/issues/85891) — Desktop window always-on-top on Windows 11, no way to disable** (101 comments, 249 👍). One of three duplicate/related always-on-top reports today (see also #89467, #87895) — a persistent, unaddressed UX complaint.
9. **[#53247](https://github.com/anthropics/claude-code/issues/53247) — Desktop fails to launch on Windows: orphaned Silo/Job Object after crash** (83 comments, 32 👍). Only logoff/reboot recovers; another instance of the Windows process-lifecycle reliability theme.
10. **[#53223](https://github.com/anthropics/claude-code/issues/53223) — [SECURITY] CLAUDE.md/AGENTS.md instruction compliance is architecturally unenforced** (22 comments, 5 👍). Flags that instruction files are advisory rather than enforced, with 10+ independent reports cited — relevant to the broader "rules ignored" pattern also seen in #2544 and #90542.

## Key PR Progress

Only 6 PRs updated in the last 24 hours:

1. **[#71627](https://github.com/anthropics/claude-code/pull/71627) — docs(sandbox): note prompt-approved hosts are session-scoped.** Clarifies in `examples/settings/README.md` that prompt-time domain approvals (distinct from `sandbox.network.allowedDomains`) don't persist across sessions.
2. **[#94184](https://github.com/anthropics/claude-code/pull/94184) — mods/diff: pinned header, body-only scroll, wheel routing.** Reworks the docked diff pane to match the built-in `/diff` panel frame, with refined scroll/keyboard chord handling.
3. **[#93951](https://github.com/anthropics/claude-code/pull/93951) — mods: move diff, sec-default, and telemetry tests next to the mods** (closed). Relocates behavior tests under `mods/<mod>/tests/`, run via `claude plugin test`, separating pure-logic tests from engine-driven view/flow tests.
4. **[#87079](https://github.com/anthropics/claude-code/pull/87079) — fix(security-guidance): make `**` glob patterns match zero-depth paths.** Fixes `_glob_match`'s reliance on `fnmatch`, where `**/*.ts` silently excluded top-level files from `security-patterns.json` rules — a meaningful fix since it's a silent security-rule gap.
5. **[#79148](https://github.com/anthropics/claude-code/pull/79148) — fix: add mandatory `hookify.` prefix to example rule filenames.** The hookify loader only discovers `.claude/hookify.*.local.md`, but shipped examples omitted the prefix, silently breaking copy-paste adoption.
6. **[#89404](https://github.com/anthropics/claude-code/pull/89404) — validate-agent.sh: don't abort at first warning.** Fixes `set -euo pipefail` interactions with `((x++))` that caused the plugin-dev skill's own validator to false-flag valid agent files (fixes #83803).

## Feature Request Trends

- **Multi-account / profile management** is the dominant theme, spanning both Desktop (#18435, 806 👍) and Mobile (#36151, 721 👍) — users want seamless account switching without shared-email workarounds.
- **IDE/editor integration breadth** — requests for Visual Studio 2026 support (#15942, 437 👍) and finer control over auto-attached IDE context (#20944, #24726) show demand for deeper, more configurable editor integration beyond VS Code/JetBrains defaults.
- **Plugin/hook extensibility** — Function Hooks (#91870) and the Agent Hierarchy Dashboard (#24537) reflect demand for more powerful, observable multi-agent and plugin workflows.
- **UI/UX friction controls** — recurring asks to disable default behaviors: welcome banner (#2254, 118 👍), paste-text collapse (#23134, 136 👍), and always-on-top windows (#85891 and duplicates) point to a pattern of "give me an off switch."
- **Higher-tier plans for power users** — #47509 requests a Max-20x-equivalent Team tier, indicating heavy CLI users are outgrowing current Team seat multipliers.

## Developer Pain Points

- **Windows desktop process/update reliability** is the single biggest cluster of frustration: orphaned processes blocking relaunch (#42776, #53247), MSIX update lock failures (#76357), and stealth-update orphaned containers (#89680) all describe the same underlying symptom — the app becomes unlaunchable until reboot.
- **Windows Cowork/Plan9 regressions** tied to specific September 2026 cumulative updates (#92984, #92958) are actively breaking `device_bash` on both architectures, with no fix yet beyond uninstalling the KB.
- **Always-on-top window behavior on Windows** is reported independently at least three times (#85891, #89467, #87895) with no setting to disable it — a simple, well-understood fix that hasn't shipped despite repeated reports.
- **Instruction-following reliability** is a recurring and higher-severity concern: multiple issues (#60705, #90542, #53223, #2544) report CLAUDE.md/AGENTS.md rules being silently violated or treated as advisory rather than enforced, with #53223 framing this as an architectural/security gap rather than a one-off bug.
- **Session continuity and mid-turn input handling** — requests/bugs like session handoff (#11455) and dropped mid-turn TUI input (#85603) point to friction in long-running or multi-session agentic workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-14

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No new releases landed in the last 24 hours, but the community is in open revolt over the recent UI redesign — at least five of today's top issues (#37012, #48882, #48888, #48953, and echoes in #36942) are direct complaints about the forced single-panel layout replacing the classic sidebar. On the engineering side, notable progress includes a fix for Google "thought signature" tool-call corruption (#48985), a durable-event write-amplification fix in the session core (#48638), and continued work to shrink MCP tool-schema bloat in the context window (#48967).

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#4283 — Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** (OPEN, 133 comments, 124 👍) — Long-running, high-engagement bug where selected response text won't copy. Still unresolved nearly a year after filing; among the most-commented issues in the repo.
2. **[#2072 — Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072)** (CLOSED, 77 comments, 195 👍) — Highest 👍 count of the batch; requests support for Cursor's CLI. Closed, but reaction volume signals strong latent demand for provider/editor interop.
3. **[#13984 — can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984)** (OPEN, 58 comments, 32 👍) — Related clipboard regression (copy reports success but paste yields nothing); compounds frustration already visible in #4283.
4. **[#37012 — [FEATURE] keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (OPEN, 44 comments, 59 👍) — Central thread of the layout backlash; users want the old two-panel workspace UI restored as an opt-in.
5. **[#2999 — Provide means to disable Ctrl-C](https://github.com/anomalyco/opencode/issues/2999)** (OPEN, 39 comments, 27 👍) — Terminal-emulator interaction bug (WezTerm, Windows Terminal) where Ctrl+C crashes the process instead of being consumed by the app.
6. **[#1764 — [FEATURE] vim motions in input box](https://github.com/anomalyco/opencode/issues/1764)** (CLOSED, 35 comments, 187 👍) — Second-highest 👍 count; long-standing request for vim keybindings in the prompt editor, closed but clearly high-demand.
7. **[#16100 — Numpad keys not working in VS Code integrated terminal](https://github.com/anomalyco/opencode/issues/16100)** (CLOSED, 33 comments, 18 👍) — TUI-specific input handling bug isolated to VS Code's terminal; now resolved.
8. **[#48741 — Opencode Zen critical errors on Muse Spark family](https://github.com/anomalyco/opencode/issues/48741)** (OPEN, 25 comments, 4 👍) — Active provider-side error (`reasoning encrypted_content was not issued`) breaking image/tool-call requests on Zen's hosted models; same root cause referenced in #48800.
9. **[#7083 — Using local Ollama models doesn't return any results](https://github.com/anomalyco/opencode/issues/7083)** (CLOSED, 23 comments, 6 👍) — Local-model integration failure across multiple Ollama-served Qwen/CodeLlama models on generic React projects.
10. **[#23153 — [FEATURE] Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153)** (OPEN, 22 comments, 51 👍) — Billing/payments feature request with substantial support, echoed by concurrent payment-failure reports (#45278).

## Key PR Progress

1. **[#48985 — fix(llm): preserve compatible tool signatures](https://github.com/anomalyco/opencode/pull/48985)** — Fixes loss of `thought_signature` metadata on streamed OpenAI-compatible tool calls, preventing broken replay on subsequent Google-backed tool invocations.
2. **[#48638 — fix(core): eliminate durable event write amplification from turn diffs](https://github.com/anomalyco/opencode/pull/48638)** — `SessionSummary.summarize` was attaching full git-patch text to durable events on every turn; this trims the write overhead. Closes #48641.
3. **[#48967 — feat(session): defer MCP tool schemas behind Anthropic tool search](https://github.com/anomalyco/opencode/pull/48967)** (CLOSED) — Addresses MCP schema bloat consuming up to 82% of initial context in heavy MCP setups by deferring schema loading behind tool search.
4. **[#48524 — feat(app): add /thinking command to toggle reasoning in web UI](https://github.com/anomalyco/opencode/pull/48524)** — Brings the TUI's reasoning-toggle behavior to the web session UI, with full i18n coverage.
5. **[#48513 — feat: preserve prompt cache across effort switches](https://github.com/anomalyco/opencode/pull/48513)** (CLOSED) — Prevents cache invalidation when switching model reasoning effort mid-session.
6. **[#43238 — feat(tui): add /cd directory switching command](https://github.com/anomalyco/opencode/pull/43238)** — New `/cd` slash command and `change_directory` agent tool for switching session working directory without restart; targets worktree workflows. Closes #43223.
7. **[#43455 — fix(snapshot): add retry, circuit breaker, and transient error detection](https://github.com/anomalyco/opencode/pull/43455)** — Hardens the snapshot/git subsystem against Windows low-memory "paging file too small" failures that were previously silently swallowed. Closes #43445.
8. **[#15994 — implement background agents](https://github.com/anomalyco/opencode/pull/15994)** (CLOSED) — Adds fire-and-forget `task(background=true)` execution with `task_status` polling and non-blocking TUI subagent UX.
9. **[#48978 — fix(tui): guard model parse and handle variant selection](https://github.com/anomalyco/opencode/pull/48978)** — Guards `util/model.ts` parsing against non-string/undefined/empty inputs to stop startup crashes. Closes #48957.
10. **[#48968 — fix(core): resolve Windows shells installed as app-execution aliases](https://github.com/anomalyco/opencode/pull/48968)** — Fixes Microsoft Store/MSIX-installed shells (e.g. `pwsh`) silently falling back to PowerShell 5.1 instead of being detected. Closes #41426.

## Feature Request Trends

- **Layout/UI restoration**: The dominant theme today — five+ issues demanding the pre-redesign persistent sidebar/two-panel layout back as an option (#37012, #48882, #48888, #48953, #36942).
- **Editing ergonomics**: Vim motions (#1764), clipboard copy/paste reliability (#4283, #13984), and terminal-key handling (numpad, Ctrl-C, Enter submission) remain persistent asks.
- **Provider/model coverage**: Requests to support more providers/models directly — Cursor CLI (#2072), GitHub Copilot "Auto" (#25239), missing NanoGPT models (#11787).
- **Billing flexibility**: Crypto payment support (#23153) alongside real payment-failure reports (#45278) suggest growing friction around the Go subscription/payment flow.
- **Session control**: Custom session IDs (#17344), live prompt timers (#10739), and directory switching (#43238) point to demand for finer session/workflow control.

## Developer Pain Points

- **UI redesign backlash** dominates today's feed — users report lost productivity from losing the persistent sidebar and multi-session visibility, with some using notably sharp language (#48888).
- **Clipboard functionality** is broken across both copy (#4283) and paste (#13984), a basic workflow blocker affecting a large user base for an extended period.
- **Provider instability**: Recurring "upstream request failed" / `invalid_request_error` reports tied to Console/Zen-hosted Muse Spark models (#48741, #48800, #37231) suggest an unresolved backend regression around reasoning `encrypted_content` handling.
- **Windows-specific fragility**: Terminal crashes on Ctrl-C (#2999), PowerShell exit killing the terminal (#27749), console-window flashing on subprocess spawn (#42440), and shell-detection failures (#48968) collectively point to weaker Windows support relative to macOS/Linux.
- **Session reliability**: Reports of sessions becoming permanently stuck and surviving reboots (#43277), plus desktop app failing to load provider/model/MCP info on ~80% of startups in one version range (#40516), indicate state-management robustness issues.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
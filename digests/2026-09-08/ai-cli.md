# AI CLI Tools Community Digest 2026-09-08

> Generated: 2026-09-08 11:56 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-09-08

## 1. Ecosystem Overview

The AI coding CLI space remains in an intensive maturation phase rather than a feature race: both tracked tools shipped zero releases in the last 24 hours, yet issue trackers and PR queues show sustained, high-volume engagement. The center of gravity has shifted from "can it code" to operational reliability — memory/session stability, permissions/security model correctness, cross-platform packaging, and billing/subscription trust. Extensibility (plugins, hooks, IDE integration) is emerging as the next competitive battleground, with both ecosystems fielding strong community asks for deeper programmability. Desktop and VS Code integration is a recurring pressure point, suggesting the terminal-only CLI model is being pulled toward richer, editor-embedded experiences. Overall, the ecosystem reads as post-hype-cycle: user bases are large and vocal enough to sustain 100+ comment threads, but maintainer bandwidth for structural fixes (permissions, memory leaks) appears to be the binding constraint on both sides.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | None | None |
| Hot issues tracked | 10 | 10 |
| Highest-engagement issue | #18435 (183 comments, 791👍) | #20695 (141 comments, 109👍) |
| PR activity | 1 PR updated, closed unmerged | 10 PRs active, several in-flight refactors |
| Net PR signal | Flat / stalled | Strong, multi-workstream |
| Dominant issue theme | Permissions + model instruction-following | Memory leaks + session reliability |

**Read:** OpenCode shows materially higher shipping velocity this cycle (active desktop-architecture refactor spanning 4+ coordinated PRs from a single contributor), while Claude Code's day was almost entirely issue-tracker signal with essentially no merged code movement — one installer-fix PR was closed without merging.

## 3. Shared Feature Directions

- **Deeper plugin/extension architectures**: Claude Code's "Function Hooks" proposal (#91870, Express/Koa-style middleware) and OpenCode's active decomposition of its desktop app into standalone `@opencode/plugin-*-desktop` packages (#47947/#47948/#47936) both point toward modular, hookable cores as the preferred extensibility model.
- **Native IDE/editor integration**: Claude Code users want a Copilot-Edits-style batch diff review UI in VS Code (#33932); OpenCode's single highest-reaction ask (148👍) is an official VS Code extension (#11176). Both communities are pushing their respective tools out of the terminal and into the editor.
- **Configurable/opt-out automation**: Claude Code wants the auto-memory compaction threshold configurable (#91188) and editor-group auto-locking disabled (#80148); OpenCode users want more control over billing fallback behavior (#42938) and session/provider config. The shared theme is distrust of opinionated defaults.
- **Session/state durability across restarts**: Claude Code has worktree sessions becoming unfindable after reboot (#85624); OpenCode has sessions permanently stuck and surviving reboots (#43277). Both point to fragile local session-state layers under abnormal shutdown.
- **Multi-provider / multi-model flexibility**: Claude Code wants per-subagent provider routing in `settings.json` (#74073); OpenCode wants specific model additions to its catalog and better third-party provider compatibility (Mistral-hosted GLM-5.2, #43199).

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Core tension | Trust between user guardrails (CLAUDE.md, hooks, permissions) and actual model behavior | Runtime/infra stability (memory, sessions, billing) |
| Target-user signal | Power users building custom automation/hooks around a fairly opinionated, single-provider tool | Multi-provider, self-hosted/team-deploying users (multi-user auth, `opencode serve` OpenAI-compatible endpoint) |
| Technical approach to extensibility | Proposed but not yet built (Function Hooks is a request, not shipped) | Actively being built and shipped (plugin package extraction already mid-flight in PRs) |
| Platform pain concentration | Windows/MSIX installer fragility (recurring, multiple distinct issues) | Cross-platform parity gaps (Windows path handling, Linux/CentOS-specific rendering/clipboard bugs) |
| Commercial model friction | Not prominent in today's data | Central concern — Go-tier outage (#47613) and balance-fallback bug (#42938) both threaten paid-tier trust |

Claude Code's community friction is concentrated around **behavioral trust** (does the model respect my rules, does permission-matching work as documented), consistent with a single-vendor, tightly-integrated product where the model itself is the product surface. OpenCode's friction is concentrated around **infrastructure reliability and monetization**, consistent with a multi-provider, self-hostable tool where the maintainers are also running a metered subscription service (Go/Zen) independent of any one model vendor.

## 5. Community Momentum & Maturity

OpenCode currently shows the more active *shipping* momentum — a single contributor (Hona) is executing a coordinated, multi-PR architectural refactor in real time, and the PR queue overall (10 active items spanning fixes, features, and refactors) indicates a healthy contribution pipeline. Claude Code shows the more active *discussion* momentum — its top issue alone (#18435) drew 183 comments and 791👍 in a single window, far exceeding OpenCode's top thread, suggesting a larger or more vocal user base concentrated in the issue tracker rather than in code contribution. Read together: OpenCode looks like a project in an active build phase with an engaged contributor base; Claude Code looks like a project with a very large user base whose energy is currently directed at maintainers rather than at the codebase, with community-noted "near-zero staff engagement" on its top structural complaint (#30519) as a specific maturity risk.

## 6. Trend Signals

- **Extensibility is becoming table stakes, not a differentiator.** Both tools are independently converging on hook/plugin architectures; teams evaluating these tools should expect first-class plugin APIs within the next few release cycles rather than needing to fork or monkey-patch.
- **The terminal-only CLI is being pulled toward the editor.** Two of the highest-reaction asks across both ecosystems are IDE-integration requests — decision-makers standardizing on a CLI-first tool should weigh near-term VS Code/editor roadmap commitments as a differentiator.
- **Session/state durability across process restarts is an unsolved, cross-vendor problem.** Both tools have open, distinct bugs in this exact category, suggesting it's a genuinely hard engineering problem (likely tied to how each tool persists conversation/tool-call state) rather than a vendor-specific gap — worth factoring into reliability expectations for long-running agentic sessions.
- **Monetization mechanics (metering, fallback billing, multi-account) are now a first-order support burden**, visible concretely in OpenCode's Go-tier outage/compensation thread and Claude Code's Desktop multi-account request — a signal that as these tools move from novelty to daily-driver status, subscription/account UX is becoming as load-bearing as the core coding features.
- **Maintainer responsiveness on long-tail structural issues (permissions, memory leaks) is emerging as a real differentiator** between tools that will retain trust from power users versus those that accumulate unresolved "megathreads" — worth monitoring in future digests as a leading indicator of long-term platform health.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-08 · Source: github.com/anthropics/skills*

## 1. Top Skills Ranking

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix** | Fixes `run_eval.py` always reporting 0% recall, which silently broke the entire description-optimization loop (`run_loop.py`, `improve_description.py`) | Directly resolves [issue #556](https://github.com/anthropics/skills/issues/556) with 10+ independent reproductions; also fixes Windows stream reading, trigger detection, and parallel workers | Open |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic QC for AI-generated documents — catches orphan word wrap, widow paragraphs, numbering misalignment | Addresses a pervasive but rarely-requested quality gap affecting nearly every generated document | Open |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | Operates SCNet HPC clusters via profile-based SSH and Slurm workflows | Niche but complete — connection profiles, job generation, cluster discovery, compute-node guidance | Open |
| [#538](https://github.com/anthropics/skills/pull/538) | **pdf skill fix** | Corrects 8 case-sensitivity mismatches (`REFERENCE.md`→`reference.md`, etc.) that break the skill on case-sensitive filesystems (Linux/CI) | Small, high-confidence bug fix from a contributor (Lubrsy706) who submitted a cluster of doc-skill fixes | Open |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Creates, fills, reads, and converts OpenDocument (.odt/.ods) files, including ODT→HTML parsing | Fills a gap alongside existing DOCX/PDF skills for open-standard document formats | Open |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design improvements** | Rewrites the frontend-design skill for clarity and actionability so every instruction is executable in a single turn | Focuses on making existing official skills more reliably followed, not just adding new capability | Open |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Two meta-skills that score any Claude Skill across 5 quality dimensions (structure, docs, resources, etc.) and scan for security issues | Meta-tooling for the marketplace itself — quality/security auditing of *other* skills | Open |
| [#541](https://github.com/anthropics/skills/pull/541) | **docx tracked-change fix** | Fixes document corruption from `w:id` collisions between tracked changes and existing bookmarks in OOXML | Root-caused a shared-ID-space bug the original SKILL.md examples didn't account for | Open |

*Note: none of the top-tracked PRs have merged yet — the most-discussed items in this window are still under review.*

## 2. Community Demand Trends (from Issues)

- **Eval/reliability tooling for skill-creator** is the dominant pain point — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) reports `run_eval.py` never triggers skills, directly spawning at least 4 competing fix PRs (#1298, #1099, #1050, #1602).
- **Trust & security in the skills marketplace** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the most-discussed issue by far) flags community skills impersonating official ones under the `anthropic/` namespace; a real trust-boundary concern for a growing public marketplace.
- **Skill management & distribution UX** — org-wide sharing ([#228](https://github.com/anthropics/skills/issues/228), 16 comments), skills silently disappearing ([#62](https://github.com/anthropics/skills/issues/62)), and duplicate installs across plugins ([#189](https://github.com/anthropics/skills/issues/189)) all point to gaps in the skill lifecycle/install experience.
- **Context-window efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill injecting ~156k tokens in one call; [#1390](https://github.com/anthropics/skills/issues/1390) shows `mcp-builder`'s evaluation harness silently fabricating tool errors. Community wants leaner, more honest instrumentation.
- **Governance / quality-gate meta-skills** — proposals like [#1385](https://github.com/anthropics/skills/issues/1385) (Reasoning Quality Gate Pipeline) and [#412](https://github.com/anthropics/skills/issues/412) (agent-governance) signal appetite for skills that audit *other* agent output rather than perform tasks directly.
- **Platform/integration requests** — Bedrock support ([#29](https://github.com/anthropics/skills/issues/29)) and exposing Skills as MCP servers ([#16](https://github.com/anthropics/skills/issues/16)) show continued demand for skills to work outside the native Claude Code/claude.ai surface.

## 3. High-Potential Pending Skills

These PRs address widely-reproduced, well-evidenced problems and are strong merge candidates:

- **[#1298](https://github.com/anthropics/skills/pull/1298)** — most comprehensive fix for the `run_eval.py` recall bug ([#556](https://github.com/anthropics/skills/issues/556)); supersedes narrower Windows-only fixes [#1099](https://github.com/anthropics/skills/pull/1099) and [#1050](https://github.com/anthropics/skills/pull/1050).
- **[#1602](https://github.com/anthropics/skills/pull/1602)** — broad reliability fix touching mcp-builder serialization, benchmark metrics, and encoding, overlapping with issue [#1390](https://github.com/anthropics/skills/issues/1390).
- **[#541](https://github.com/anthropics/skills/pull/541)** and **[#539](https://github.com/anthropics/skills/pull/539)** — root-caused, well-scoped docx/skill-creator bug fixes from the same contributor cleaning up document-skill edge cases.
- **[#1367](https://github.com/anthropics/skills/pull/1367)** (self-audit) — a concrete implementation of the quality-gate direction the community is actively proposing in issues.
- **[#1607](https://github.com/anthropics/skills/pull/1607)** — low-risk, timely `claude-api` skill update marking retired model IDs, keeping the skill accurate as Anthropic's model lineup shifts.

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is **trust and reliability of the skills tooling itself** — fixing the broken skill-creator evaluation loop and closing the `anthropic/`-namespace impersonation gap matter more right now than any single new-capability skill.

---

# Claude Code Community Digest — 2026-09-08

## Today's Highlights

No new releases shipped in the last 24 hours, but community engagement remained high across long-running threads — particularly around account management in Claude Desktop and a proposal for a "Function Hooks" plugin architecture that gained 84 👍 in just five days. Persistent structural issues also resurfaced: the permissions-matching system (open since mid-2025, 30+ linked issues) and verbose-comment model behavior both continue to draw heavy community frustration with minimal maintainer engagement visible in the thread history.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — Feature request for multi-account switching in Claude Desktop. Highest engagement of the day (183 comments, 791 👍); users want easy profile switching without full re-authentication.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed) — Detailed report on model behavior citing `/goal` Stop-hook directives as false authorization for unrequested actions, plus "absence-from-search treated as evidence of absence." Heavy discussion (165 comments) despite being closed, suggesting maintainers pushed back or triaged without full resolution.
3. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Function Hooks" proposal to let plugins hook deeply into CC via a parameterized `$` object with Express/Koa-style middleware chaining. Strong community interest (139 comments, 84 👍) as a power-user extensibility ask.
4. **[#86142](https://github.com/anthropics/claude-code/issues/86142)** (closed) — MCP servers using JSON Schema draft-07 `outputSchema` are rejected client-side as "unsupported dialect," breaking otherwise valid MCP integrations. 50 comments before closure.
5. **[#49917](https://github.com/anthropics/claude-code/issues/49917)** — Windows Desktop installer fails with `AddPackage HRESULT 0x80073CF6` after a prior install leaves the MSIX package in an inconsistent state — a recurring Windows packaging pain point.
6. **[#91188](https://github.com/anthropics/claude-code/issues/91188)** — Request to make the auto-memory `MEMORY.md` compaction reminder threshold configurable instead of hardcoded; 38 comments in just one week since filing.
7. **[#33932](https://github.com/anthropics/claude-code/issues/33932)** — Long-standing ask for a Copilot-Edits-style batch diff review UI in the VS Code extension (188 👍, second-highest reaction count today).
8. **[#65961](https://github.com/anthropics/claude-code/issues/65961)** — Model behavior report: Claude defaults to verbose code comments and ignores explicit instructions to stop. High reaction count (199 👍) reflects broad frustration with instruction-following on this point.
9. **[#30519](https://github.com/anthropics/claude-code/issues/30519)** — Escalation-style issue arguing permissions matching is "fundamentally broken," citing 30+ open duplicate/related issues and near-zero staff engagement; community has resorted to custom `PreToolUse` hook workarounds.
10. **[#36146](https://github.com/anthropics/claude-code/issues/36146)** — VS Code extension UI bug: the first user message stays pinned at the top of the chat panel on Linux, disrupting scroll/reading flow (42 👍).

## Key PR Progress

Pull request activity was essentially flat in the last 24 hours — only one PR was updated, and it was closed rather than merged:

- **[#26175](https://github.com/anthropics/claude-code/pull/26175)** (closed) — "fix: replace broken native installer bootstrap script." Targeted the `curl | bash` install flow, which silently failed to create `~/.local/bin/claude` and would delete a user's existing npm global install as "cleanup," leaving no working `claude` binary. Closed without merging, so this installer regression appears to remain unresolved upstream (compare with the related MSIX/Windows installer failures in #49917 and #91763).

No other PRs saw activity in this window, so today's signal is concentrated almost entirely in the issue tracker.

## Feature Request Trends

- **Account/profile management**: multi-account switching in Desktop (#18435) is the single largest ask by far.
- **Extensibility for plugins/hooks**: deep, composable "Function Hooks" for plugin authors (#91870).
- **VS Code diff/review UX**: both a Copilot-Edits-style review UI (#33932) and a batch/all-changes-at-once diff mode (#31888) point to sustained demand for better in-editor review ergonomics.
- **Configurability of built-in automation**: making the auto-memory compaction threshold configurable (#91188) and disabling automatic editor-group locking in VS Code (#80148) reflect a theme of wanting opt-outs for "smart" default behaviors.
- **Multi-provider routing**: native per-subagent/per-model-alias provider selection in `settings.json` (#74073, closed/stale) shows continued interest in provider flexibility beyond Anthropic's own models.

## Developer Pain Points

- **Permissions system reliability**: #30519 crystallizes broad, long-running frustration that permission rule matching doesn't work as documented, with the community building its own hook-based workarounds in the absence of a fix.
- **Model instruction-following on style**: verbose comments despite explicit "stop" instructions (#65961) and the Stop-hook/authorization behavior report (#60705) both point to trust issues between user-authored guardrails (CLAUDE.md, hooks) and actual model behavior.
- **Windows/MSIX packaging fragility**: repeated, distinct installer failures (#49917, #91763, plus historical #59692/#70700) show MSIX packaging as a persistent weak point on Windows, including update-time process/job inheritance bugs blocking relaunch.
- **MCP schema compatibility**: rejection of valid but non-latest JSON Schema dialects (#86142) blocks otherwise-working MCP servers outright, with no client-side fallback.
- **Session/state reliability**: unexplained auto-archiving of chat sessions (#75941) and worktree sessions becoming unfindable after reboot (#85624) suggest the local session-state layer has rough edges under abnormal shutdown/restart conditions.
- **Auto Mode / classifier fail-closed behavior**: bursts of classifier unavailability blocking nearly all Bash usage (#74949, closed/stale) indicate the safety-classification dependency can become a hard availability bottleneck during peak load.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-08

## 1. Today's Highlights

No new releases landed in the last 24h, but community activity remains heavy: the long-running memory leak investigation (**#20695**) continues to dominate discussion with 141 comments, and a paid Go-subscription outage from 2026-09-06 is driving compensation demands (**#47613**). On the PR side, contributor **Hona** is mid-flight on a major desktop architecture refactor, splitting review/file-viewer, context-usage, and browser panels into standalone `@opencode/plugin-*-desktop` extensions (**#47947**, **#47948**, **#47936**, **#47935**).

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread** (OPEN, 141 comments, 👍109). Central tracking issue for scattered memory leak reports; maintainers are explicitly requesting heap snapshots, not LLM-generated fix suggestions. Still the most active thread in the repo.
2. **[#11176](https://github.com/anomalyco/opencode/issues/11176) — Official OpenCode VS Code extension** (OPEN, 29 comments, 👍148). Highest-reaction request in this batch; strong signal for first-class VS Code integration.
3. **[#4704](https://github.com/anomalyco/opencode/issues/4704) — `/undo` and `/timeline` don't revert file edits** (CLOSED, 23 comments, 👍22). Core reliability bug for undo/timeline features even in git-tracked projects.
4. **[#47613](https://github.com/anomalyco/opencode/issues/47613) — Go subscription 429 outage, compensation requested** (OPEN, 14 comments). Paying customer reports multi-hour outage on the Go endpoint; raises support/SLA concerns for the paid tier.
5. **[#24713](https://github.com/anomalyco/opencode/issues/24713) — Copy shows "copied" but clipboard unchanged on Linux terminal** (CLOSED, 12 comments, 👍8). UX-breaking clipboard bug specific to Linux terminals.
6. **[#28656](https://github.com/anomalyco/opencode/issues/28656) — Code blocks blank in TUI on CentOS 7** (CLOSED, 12 comments). Platform-specific rendering bug affecting legacy enterprise environments.
7. **[#43199](https://github.com/anomalyco/opencode/issues/43199) — Tool calls throw errors for Mistral's GLM-5.2** (OPEN, 10 comments, 👍8). Provider compatibility gap as Mistral begins hosting third-party open models.
8. **[#43277](https://github.com/anomalyco/opencode/issues/43277) — Sessions permanently stuck, survive reboots** (OPEN, 8 comments). Serious reliability issue — stuck state persists even across full system restarts.
9. **[#42938](https://github.com/anomalyco/opencode/issues/42938) — Go plan hits 100%, blocks 12h despite Zen balance available** (OPEN, 6 comments). Billing/fallback logic bug where "Use balance" doesn't actually draw from the available Zen balance.
10. **[#45011](https://github.com/anomalyco/opencode/issues/45011) — CLI/TUI sessions never appear in Web Home** (OPEN, 6 comments). Highlights the client-side-only project registry as a cross-surface sync gap between shell and web UI.

## 4. Key PR Progress

1. **[#47951](https://github.com/anomalyco/opencode/pull/47951) — fix(opencode): normalise Windows permission path patterns through realpath.** Fixes absolute Windows paths in permission whitelists not matching the runtime's normalized path form (closes #36681).
2. **[#47950](https://github.com/anomalyco/opencode/pull/47950) — feat(cli): Vite-powered TUI development entrypoint.** Opt-in dev launcher rendering the real TUI through Vite + Solid refresh runtime, contained to CLI dev files only.
3. **[#45500](https://github.com/anomalyco/opencode/pull/45500) — fix(acp): advertise the compact command.** Fixes ACP's `/compact` handling not being surfaced in `available_commands_update` (closes #37229).
4. **[#42433](https://github.com/anomalyco/opencode/pull/42433) — fix(opencode): preserve response model metadata.** Keeps AI SDK's structured model ID instead of relying on arbitrary response headers (closes #42420).
5. **[#47947](https://github.com/anomalyco/opencode/pull/47947) — refactor(app): extract review and file viewer extension.** Moves Git review, file trees, diffs, and line comments into `@opencode/plugin-review-desktop`, part of a broader desktop modularization effort.
6. **[#47948](https://github.com/anomalyco/opencode/pull/47948) — refactor(app): extract context usage extension.** Moves context-usage stats and system-prompt display into `@opencode/plugin-context-desktop`.
7. **[#47936](https://github.com/anomalyco/opencode/pull/47936) — refactor(desktop): extract the browser extension package.** Splits renderer and native browser implementation into a standalone plugin package with no production coupling to core App/Desktop.
8. **[#47455](https://github.com/anomalyco/opencode/pull/47455) — fix(app): link background subagents to their sessions.** Makes background subagent rows and timeline notices real navigable links to child sessions.
9. **[#47293](https://github.com/anomalyco/opencode/pull/47293) — feat(core): add console web search.** Adds a hosted web-search descriptor via Console v2 config with redirect-safe endpoint/provider validation.
10. **[#5657](https://github.com/anomalyco/opencode/pull/5657) — feat: toggle transparent background.** Adds a tri-state (`auto | on | off`) transparency policy for the TUI theme with a new command-palette entry.

## 5. Feature Request Trends

- **Official IDE/editor integration**: VS Code extension (#11176, 148👍) and a VSCode Copilot BYOK provider extension (#27303) both point to demand for tighter editor-native integration beyond the terminal.
- **Model/provider catalog expansion**: requests to add specific open-weight models to Go/Zen (#42729 Qwen3.8-27B, #43805 DeepSeek-v4-flash-free missing from dropdown) and general provider compatibility fixes (#43199 Mistral GLM-5.2).
- **Multi-user / server-mode maturity**: multi-user auth and per-user credentials for `opencode web` (#20067), OpenAI-compatible endpoint exposure from local `opencode serve` (#31724) — signs of growing self-hosted/team deployment usage.
- **Session & history scalability**: paginated message loading for long sessions (#6548), sidebar agent activity monitoring (#27995) — usability gaps as sessions and background agents scale up.
- **File/document handling**: drag-and-drop and preview/extraction support for Office files and PDFs (#27689, #47640) reflect demand for richer attachment workflows.

## 6. Developer Pain Points

- **Memory leaks remain the top unresolved complaint**, consolidated in the long-running megathread (#20695) with maintainers actively discouraging speculative fixes and requesting real heap snapshots instead.
- **Session reliability issues**: sessions getting permanently stuck and surviving reboots (#43277), infinite hangs when combining `opencode serve` + `attach` with "ask" permissions (#16367), and session-list crashes at higher limits (#35846).
- **Billing/subscription friction**: the Go 429 outage (#47613) and the "Use balance" fallback not working despite available Zen balance (#42938) suggest gaps in the paid tier's reliability and fallback logic.
- **Cross-platform rough edges**: Windows-specific bugs (update path going to APPDATA #17044, `NODE_EXTRA_CA_CERTS` ignored #17798, permission path normalization #47951) and Linux/CentOS-specific rendering and clipboard bugs (#28656, #24713) indicate uneven platform parity.
- **Web/CLI feature parity gaps**: sessions created in CLI/TUI not surfacing in the Web UI due to a client-side-only project registry (#45011) points to state-sync debt between surfaces.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
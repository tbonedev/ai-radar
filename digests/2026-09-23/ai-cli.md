# AI CLI Tools Community Digest 2026-09-23

> Generated: 2026-09-23 12:31 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem — Cross-Tool Comparison Digest
**2026-09-23**

## 1. Ecosystem Overview

The AI coding-CLI space remains split between two maturity tiers on display today: **Claude Code**, a large, heavily-trafficked incumbent whose community energy is now concentrated on triage debt (duplicate bug reports, unresolved regressions) rather than net-new feature churn, and **OpenCode**, a fast-moving open multi-provider CLI still absorbing the growing pains of a major v2 redesign and a multi-vendor backend (Console/Zen, DeepSeek, GitLab, Copilot). Both ecosystems show the same underlying pattern: model releases (Opus 5.5) and provider integrations move faster than platform stability, producing a steady drip of regressions on Windows/desktop surfaces and auth/session-identification layers. PR throughput is modest for both tools relative to issue volume, indicating maintainer/community bandwidth is currently weighted toward bug intake over feature delivery. Extensibility (hooks/mods for Claude Code, provider-routing/plugin identification for OpenCode) is the clearest shared strategic bet across both projects.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked today | 10 | 10 |
| Top issue engagement | #27302 — 253 comments / 389 👍 | #13768 — 73 comments / 35 👍 |
| Highest 👍 issue | #77136 — 438 👍 | #13003 — 53 👍 |
| PRs updated (24h) | 2 (1 open, 1 closed) | 10 (7 open, 3 closed) |
| Release today | Yes — v2.1.280 (Opus 5.5 default) | None |
| Dominant issue theme | Desktop UX regressions + model behavior | Free-tier auth/client-ID regression |

**Read:** Claude Code's issue engagement (comment/reaction counts) dwarfs OpenCode's by roughly 3–8x on comparable ranks, consistent with a much larger user base; OpenCode's PR velocity (10 vs. 2) suggests a smaller but more code-active contributor pool relative to its issue volume.

## 3. Shared Feature Directions

- **Extensibility/hooks as the next platform layer** — Claude Code's "Mods" initiative (#91870, function hooks shipping "in weeks") and OpenCode's confidence-gated model-tier routing (PR #50859) and provider-identification work (PR #50896) both point toward deeper, pluggable control over agent behavior rather than just prompt/model swaps.
- **Session/cost transparency** — Both communities want more visibility into runtime state: Claude Code's portable-memory requests (#85557, #91188) and OpenCode's long-standing token-usage-in-TUI ask (#13003, 53 👍, "second-highest 👍") reflect the same underlying demand — users want durable, inspectable session state.
- **Desktop/TUI redesign backlash** — Claude Code's always-on-top window bug (3 duplicate reports: #85891, #89467, #88093) and OpenCode's v2 tab-layout/agent-switching complaints (#36936, #49133) are both regressions introduced by recent UI overhauls, suggesting insufficient regression coverage on native/desktop surfaces industry-wide.
- **Auth/account/client-identification fragility** — Claude Code's multi-connector-account request (#27302, the single highest-engagement item across both digests) and OpenCode's free-tier "can only be used from within OpenCode" client-ID bug (#49433, #49580) are different symptoms of the same category: identity and account-boundary handling is an under-built layer in both tools.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Model strategy | Single-vendor (Anthropic), tightly coupled to Opus/Fable releases | Multi-provider by design (DeepSeek, Copilot, GitLab Duo, OpenAI-backed subagents) |
| Primary friction | Model behavior/tone drift, desktop reliability | Provider reliability, quota/region-lock surprises, backend auth |
| Target user signal | Power users with large MCP setups, enterprise connector needs | Cost-conscious/self-hosted users, crypto-payment demand (#23153, 52 👍), multi-model routing enthusiasts |
| Technical approach to extensibility | Community-driven "Mods" hook system layered onto a closed core | Native multi-provider abstraction with plugin/client identification headers |
| Platform gaps | Termux/Android regression (#50270), Windows crash recovery (#53247) | Windows ARM64 native binary failure (#19130) |

Claude Code's pain points skew toward **model-output quality and trust** (hallucinated tool calls, silent transcript deletion, instruction drift) — issues that stem from being a single-vendor, opinionated product. OpenCode's pain points skew toward **integration and account-plumbing reliability** — a direct consequence of supporting many backends and a freemium/paid-tier model.

## 5. Community Momentum & Maturity

- **Claude Code** shows the hallmarks of a mature, high-traffic project: top issues carry 100–400+ reactions, closed issues (#60705) still accumulate comments post-resolution, and the bottleneck has visibly shifted to *triage* (duplicate consolidation, stale-but-unresolved patterns) rather than raising awareness of new bugs. Only 2 PRs moved in 24h against a very large issue backlog — a maintainer-bandwidth or process signal worth watching.
- **OpenCode** shows a smaller but more code-active community: 10 PRs merged/updated in 24h vs. 2 for Claude Code, spanning fixes, features (speech generation, PTY shell input, GitLab OAuth), and refactors — indicative of an earlier-stage, contributor-driven project still iterating quickly on core plumbing. Its top issue engagement (73 comments max) is an order of magnitude below Claude Code's, consistent with a smaller but denser user base concentrated around a specific regression (free-tier auth).

## 6. Trend Signals

1. **Hooks/extensibility is becoming table stakes.** Both projects are independently converging on pluggable-behavior architectures (Mods, provider-routing plugins) — teams evaluating CLI agent tools should weight extensibility roadmaps heavily, as neither vendor treats the current plugin surface as final.
2. **Multi-account and multi-tenant identity is an unsolved layer across the category.** The top-engagement issue in each digest is, at root, an identity/account-boundary problem (#27302, #49433/#49580) — expect this to be a near-term differentiator as teams adopt these tools organization-wide.
3. **Desktop-native UX lags CLI/TUI maturity.** Both tools show desktop-specific regressions (always-on-top, tab-layout truncation, launch crashes) that don't appear in their terminal-first codepaths — a signal that desktop wrapper investment is newer and less tested than core CLI logic.
4. **Provider diversification raises reliability surface area.** OpenCode's region-lock and outage issues (DeepSeek V4/V4.1 Flash) illustrate the tradeoff of a multi-vendor strategy: broader model choice comes with compounding third-party failure modes that single-vendor tools like Claude Code don't face in the same way.
5. **Cost/usage transparency is an unmet baseline expectation**, not a "nice to have" — both communities are independently requesting it, suggesting tooling that ships clear token/cost visibility out of the box has a differentiation opportunity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-23 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Comment counts weren't available for PRs in this data pull, so ranking below is by discussion substance, linked-issue weight, and activity span (all currently **OPEN**).

1. **`skill-creator` trigger-eval reliability fixes** — [PR #1298](https://github.com/anthropics/skills/pull/1298) (MartinCajiao) + [PR #1769](https://github.com/anthropics/skills/pull/1769) (ChiFungHillmanChan)
   Two independent fixes to the same broken subsystem: trigger evaluation was reporting false misses (Windows `select()` failures, competing worker probes) and, separately, a 100%-precision/0%-recall bug that silently poisoned the optimizer. Together they address the root cause behind community bug reports [#556](https://github.com/anthropics/skills/issues/556) and [#1721]. High technical weight — this is core tooling used by every skill author.

2. **`mcp-builder` streamable-HTTP compatibility fix** — [PR #1742](https://github.com/anthropics/skills/pull/1742) (Kuldeeep18)
   Fixes a breaking rename in `mcp>=2.0.0` (`streamablehttp_client` → `streamable_http_client`) plus custom-header support. Closes [#1668]; sits alongside the still-open evaluation-harness bug [#1390], making `mcp-builder` one of the more actively maintained skills this cycle.

3. **`docx` correctness fixes (timeout detection + missing rels)** — [PR #1792](https://github.com/anthropics/skills/pull/1792) and [PR #1790](https://github.com/anthropics/skills/pull/1790) (TINGyu123644)
   Two defect fixes landed within days of each other: LibreOffice timeouts were being silently reported as success, and `document.xml.rels` creation was skipped when missing, corrupting comment relationships. Fast iteration (opened/updated Sep 19–23) suggests active maintainer engagement.

4. **`pyxel` retro game development skill** — [PR #525](https://github.com/anthropics/skills/pull/525) (kitao, the Pyxel library's own author)
   A substantial new skill for creating/debugging Python retro games with headless frame inspection. Open since March, still receiving updates as of Sep 22 — long-lived but not yet merged, likely due to scope/review depth.

5. **`docx` tracked-change ID collision fix** — [PR #541](https://github.com/anthropics/skills/pull/541) (Lubrsy706)
   Root-causes document corruption from `w:id` collisions across bookmarks/tracked-changes/comments in OOXML — a subtle spec-level bug affecting real-world document generation.

6. **AWT (AI Watch Tester) — AI-powered E2E testing skill** — [PR #822](https://github.com/ksgisang/AI-Watch-Tester) · [PR link](https://github.com/anthropics/skills/pull/822)
   Adds vision-driven, zero-code E2E test generation and browser control. Open since March with updates through Sep 19 — sustained community interest in agentic testing tooling.

7. **`testing-patterns` skill** — [PR #723](https://github.com/anthropics/skills/pull/723) (4444J99)
   Comprehensive testing philosophy/patterns skill (Testing Trophy model, unit + component testing). Active through Sep 21, indicating ongoing review iteration.

8. **`proofcore-contract-auditor` — Web3 smart contract auditing** — [PR #1771](https://github.com/anthropics/skills/pull/1771) (ProofCore-Protocol)
   Notable as one of the few blockchain/Web3-oriented skill proposals, anchoring audit proofs to TON via a zero-storage Merkle protocol — a signal of Skills' reach beyond typical dev/document workflows.

## 2. Community Demand Trends (from Issues)

- **Trust & governance infrastructure** — The top issue by comments, [#492](https://github.com/anthropics/skills/issues/492) (43 comments), flags community skills impersonating official ones under the `anthropic/` namespace — a trust-boundary/security concern with real engagement. Related: [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill proposal) and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline).
- **Enterprise sharing/distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file passing — a workflow/collaboration gap.
- **Trigger reliability tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and its resolution PRs (#1298, #1769) show sustained demand for a working eval harness that authors can trust before publishing.
- **Context/token efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) (eager 156k-token injection) and [#1362](https://github.com/anthropics/skills/issues/1362) (bundling/build failures) point to demand for leaner, more predictable skill loading.
- **Plugin/packaging deduplication** — [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) highlights duplicate skill installs across `document-skills`/`example-skills` — a packaging-hygiene ask.
- **New skill proposals** — `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329), symbolic notation for agent state) and Skills-as-MCP exposure ([#16](https://github.com/anthropics/skills/issues/16)) reflect appetite for memory/context management and interop primitives.

## 3. High-Potential Pending Skills

PRs showing sustained recent activity (multiple updates, tied to open issues) that look closest to merge-readiness:

- [PR #1298](https://github.com/anthropics/skills/pull/1298) / [PR #1769](https://github.com/anthropics/skills/pull/1769) — `skill-creator` trigger-eval fixes, directly resolve a widely-reported bug ([#556]).
- [PR #1742](https://github.com/anthropics/skills/pull/1742) — `mcp-builder` compatibility fix, closes a filed issue ([#1668]), narrow and low-risk.
- [PR #1792](https://github.com/anthropics/skills/pull/1792) / [PR #1790](https://github.com/anthropics/skills/pull/1790) — `docx` correctness fixes, tight scope, rapid maintainer turnaround (days, not weeks).
- [PR #1776](https://github.com/anthropics/skills/pull/1776) — `blast-radius` skill (bulk/destructive-write safety checklist), fills a governance-adjacent gap the community is asking for ([#492], [#412]).
- [PR #525](https://github.com/anthropics/skills/pull/525) — `pyxel`, long-lived but still being actively refined by the upstream library author, a strong signal of eventual merge.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **reliability and trust in the skill-authoring pipeline itself** — fixing the trigger-evaluation harness, correctness bugs in high-usage skills (`docx`, `mcp-builder`), and namespace/trust-boundary guarantees — over net-new skill capabilities.

---

# Claude Code Community Digest — 2026-09-23

## 1. Today's Highlights

Claude Code shipped **v2.1.280**, headlined by **Claude Opus 5.5** as the new default Opus model (1M context, $4/$20 per Mtok, $0.20/Mtok cache reads) plus expanded mouse support in fullscreen `/skills` and `/plugin` lists. Community attention remains dominated by long-running pain points rather than new bugs: the Windows/macOS Desktop "always-on-top" window issue has fragmented into at least three duplicate reports, model-behavior complaints (hallucinated tool calls, repetitive prose, instruction drift) continue accumulating comments, and the community-built "Mods" extensibility system (#91870) is closing in on a function-hooks release.

## 2. Releases

**v2.1.280**
- Added **Claude Opus 5.5** (`claude-opus-5-5`) — now the default Opus model, 1M context window, $4/$20 per Mtok, $0.20/Mtok cache reads.
- Added mouse support to more fullscreen-mode lists: wheel-scroll for `/skills`, click-to-select for `/plugin` skill state options.

## 3. Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Support multiple Connector accounts (same connector, different accounts). 253 comments, 389 👍 — the single highest-engagement open request; users need to connect multiple accounts of the same connector type on claude.ai/code.
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Mods - make Claude 10x more extensible." 211 comments, 124 👍 — community-driven extensibility initiative; latest update says function hooks are shipping "in weeks."
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed) — Detailed model-behavior report on `/goal` stop-hook misuse and unauthorized actions. 195 comments — closed but still drawing engagement, suggesting the underlying pattern persists for some users.
4. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Claude 4.7–5.0/Fable defaulting to repetitive rhetorical tics, weak prose coherence despite style instructions. 131 comments, 438 👍 — very high reaction count signals broad frustration with model tone/style regressions.
5. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** — Claude Desktop (Windows 11) window stuck always-on-top, no toggle. 113 comments, 282 👍 — one of three near-duplicate always-on-top reports (see also #89467, #88093), indicating this is a widespread, unresolved UX regression.
6. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — Desktop fails to launch on Windows after crash (orphaned Silo/Job Object, HRESULT 0x80070020); only logoff/reboot recovers. 103 comments — serious reliability issue with no workaround short of a system restart.
7. **[#50270](https://github.com/anthropics/claude-code/issues/50270)** — v2.1.113+ broke Termux/Android via native glibc binary with no JS fallback. 71 comments, 62 👍 — regression that fully removed a previously-working platform.
8. **[#71542](https://github.com/anthropics/claude-code/issues/71542)** — GitHub connector links repos but Claude can't access content for *any* repo, account-wide. 65 comments, 64 👍 — flagged as invalid but reports account-wide breakage across public and private repos.
9. **[#59248](https://github.com/anthropics/claude-code/issues/59248)** — Silent retention cleanup deletes session transcripts with no warning or recovery (data-loss label). 52 comments, 37 👍 — trust-sensitive bug given no opt-in/warning before deletion.
10. **[#37793](https://github.com/anthropics/claude-code/issues/37793)** — Subagents fail with "prompt is too long" when many MCP servers are configured (tool defs exceed 200k tokens). 22 comments, 26 👍 — scalability limit affecting power users with large MCP setups.

## 4. Key PR Progress

Only 2 PRs updated in the last 24h in this repo:

1. **[#79150](https://github.com/anthropics/claude-code/pull/79150)** (open) — "docs: align code-review README with the current validation-based command." Fixes stale documentation describing a git-blame/history agent and a 0–100 confidence-scoring pipeline that the `/code-review` command no longer implements.
2. **[#95409](https://github.com/anthropics/claude-code/pull/95409)** (closed) — "mods/agents-md: the AGENTS.md project-instructions mod." Adds a mod (manifest, hooks module, tests, README) that reads `AGENTS.md` the same way the engine reads `CLAUDE.md`, gated behind an `instructionFiles` option, following the layout of existing `sec-default`, `diff`, and `telemetry` mods.

*(PR volume is low today; most community energy is concentrated in the issue tracker rather than active pull requests.)*

## 5. Feature Request Trends

- **Multi-account / multi-context connector support** — top request by engagement (#27302): users want to attach multiple accounts of the same connector type.
- **Deeper extensibility (hooks/mods)** — #91870's "Mods" system is the most active open initiative, aiming to give the community first-class hook/plugin capability beyond the current plugin API.
- **Cross-surface shared context** — #30675 requests shared context/state between Claude Code CLI, claude.ai, and Cowork so skills/work built in one surface carry over to others.
- **Portable memory across sessions/agents** — #85557 and the auto-memory configurability request (#91188) point to demand for more durable, user-controllable memory beyond the current per-project auto-memory system.
- **Desktop window management controls** — repeated, duplicate requests (#85891, #89467, #88093) for a simple "disable always-on-top" toggle.
- **Configurable worktree location** — #27282 asks for sibling-directory worktree placement instead of the current fixed convention.

## 6. Developer Pain Points

- **Desktop "always-on-top" window bug** is the most duplicated complaint today, reported independently at least three times across Windows builds — a clear signal the existing reports aren't being consolidated or triaged together.
- **Model behavior/style regressions** are a recurring theme across multiple issues (#77136, #60705, #69044, #77339): users report repetitive phrasing, reduced prose coherence, hallucinated tool calls, and instructions in `CLAUDE.md` being overridden by model-side defaults — suggesting these are systemic rather than isolated to one workflow.
- **Platform regressions** continue to surface: Termux/Android broken since v2.1.113 (#50270), dictation paste broken in VS Code/WSL2 since v2.1.269 (#93782), and background/daemon sessions dropping transcript text since v2.1.161 (#65051) — indicating regression testing gaps around platform-specific and background-session code paths.
- **Data durability concerns**: silent transcript deletion (#59248) and workflow resume restarting fully after auto-compaction (#65796) both erode trust in session/state persistence.
- **Scaling limits with MCP/subagents**: heavy MCP configurations exceed the 200k-token prompt budget before subagents can even start (#37793), penalizing power users disproportionately.
- **Desktop launch/crash recovery on Windows** (#53247) remains unresolved with no in-app recovery path, forcing a full logoff/reboot.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-23

## Today's Highlights

The dominant theme today is a cluster of **"free tier can only be used from within OpenCode"** errors affecting Console/OpenCode Zen users across multiple surfaces (native CLI, MonoCode frontend, custom agents, subagents), suggesting a backend auth/client-identification regression. Separately, community frustration continues around the **v2 TUI/desktop redesign** (tab layout, agent switching) and **provider reliability** (DeepSeek V4 Flash region-locking, DeepSeek V4.1 Flash outage, Go tier cross-model usage-limit bleed). On the PR side, active work targets provider identification, JSONC config parsing, PTY-based secure shell input, and speech generation support.

## Releases

None in the last 24h.

## Hot Issues

1. **[#13768](https://github.com/anomalyco/opencode/issues/13768)** — Opus 4.6 via GitHub Copilot rejects assistant message prefill, breaking sessions mid-conversation. 73 comments, 35 👍 — long-running, high-visibility provider compatibility bug (closed but still active discussion).
2. **[#49433](https://github.com/anomalyco/opencode/issues/49433)** — "OpenCode's free tier can only be used from within OpenCode" fires for any model on latest CLI. 51 comments, 15 👍 — appears to be the trigger for several related reports below.
3. **[#49580](https://github.com/anomalyco/opencode/issues/49580)** — Same free-tier error specifically when using MonoCode as a third-party frontend against an OpenCode backend. 45 comments — suggests the check is misfiring on client identification, not just plugin misuse.
4. **[#19130](https://github.com/anomalyco/opencode/issues/19130)** — Windows ARM64 native binary fails to init OpenTUI via `bun:ffi`/TinyCC. 27 comments, 13 👍 — platform-specific blocker for ARM64 Windows users.
5. **[#39845](https://github.com/anomalyco/opencode/issues/39845)** — DeepSeek V4 Flash mid-session starts requiring an explicit "China-hosted models" opt-in for Go subscribers. 25 comments, 30 👍 — surprise breaking change with no warning.
6. **[#23153](https://github.com/anomalyco/opencode/issues/23153)** — Feature request to accept crypto payment for OpenCode Go. 23 comments, 52 👍 — highest 👍 count among issues, signals demand from a specific user segment.
7. **[#11865](https://github.com/anomalyco/opencode/issues/11865)** — Codex/OpenAI-backed subagents hang indefinitely with no timeout/retry. 22 comments, 22 👍 — reliability concern for heavy subagent users.
8. **[#36936](https://github.com/anomalyco/opencode/issues/36936)** — Desktop app's new tab layout truncates session titles, regressing from v1.17. 19 comments, 30 👍 — strong pushback on a UI redesign.
9. **[#32747](https://github.com/anomalyco/opencode/issues/32747)** — `@` file-mention picker doesn't index files created after startup, requiring a restart. 17 comments, 16 👍 — everyday workflow friction.
10. **[#13003](https://github.com/anomalyco/opencode/issues/13003)** — Long-standing request to surface token usage (input/output/budget) in the TUI. 14 comments, 53 👍 — second-highest 👍, indicates broad unmet demand for cost visibility.

## Key PR Progress

1. **[#50855](https://github.com/anomalyco/opencode/pull/50855)** — `fix(app)`: keeps the app on the already-opened checkout of a known project instead of jumping to the first-seen worktree; closes #50821.
2. **[#50899](https://github.com/anomalyco/opencode/pull/50899)** — `fix(core)`: ignores `{file:...}` references inside JSONC comments so valid configs with commented-out file refs no longer get rejected; fixes #50898.
3. **[#50896](https://github.com/anomalyco/opencode/pull/50896)** *(closed)* — `feat(core)`: adds a `User-Agent` identifier to Console plugin requests so the backend can distinguish client builds — likely directly relevant to the free-tier errors above.
4. **[#38510](https://github.com/anomalyco/opencode/pull/38510)** *(closed)* — `feat(shell)`: PTY-based interactive command execution with a new SecureInput mechanism, enabling password-prompting commands (sudo, `ssh -t`, `ansible -K`) that previously failed under the non-interactive `ChildProcessSpawner`.
5. **[#50883](https://github.com/anomalyco/opencode/pull/50883)** *(closed)* — `feat(ai)`: adds speech generation (`Speech.generate`/`Speech.stream`) across OpenAI, ElevenLabs, Gemini, Cartesia, and Deepgram via a new streaming media route.
6. **[#50892](https://github.com/anomalyco/opencode/pull/50892)** — `feat(tui)`: shows elapsed time on tool call parts, addressing the lack of timing feedback during long-running tool executions; closes #50891.
7. **[#50422](https://github.com/anomalyco/opencode/pull/50422)** — `feat/fix(core)`: restores GitLab Duo workflow discovery and adds OAuth login for the built-in GitLab provider.
8. **[#50859](https://github.com/anomalyco/opencode/pull/50859)** — `feat(session)`: confidence-gated model-tier routing behind an opt-in config flag, implementing intent-based model routing from the broader multi-model roadmap (#34370).
9. **[#46721](https://github.com/anomalyco/opencode/pull/46721)** — `refactor(core)`: carries typed job outcomes for stops so intentional interrupts (e.g., Ctrl+D on a background shell) no longer register as failures that wake idle agents.
10. **[#50853](https://github.com/anomalyco/opencode/pull/50853)** *(closed)* — `fix(core)`: correctly parses embedded `#variant` suffixes in model selections (`provider/model#variant`), fixing silent fallback to default models.

## Feature Request Trends

- **Cost/usage visibility**: token usage in TUI (#13003, 53 👍) and persistent session memory (#16077) point to demand for better session state transparency and continuity.
- **Payment flexibility**: crypto payment support for OpenCode Go (#23153, 52 👍) reflects demand from a specific paying-user segment.
- **Permission/approval ergonomics**: auto-approval via LLM classifier ("Auto mode", #37564, 35 👍) and multi-file diff review in `apply_patch` approvals (#17076, 28 👍) show desire for less friction in the approve/deny loop.
- **Provider/model routing sophistication**: confidence-gated model tier routing (PR #50859) and GitLab OAuth restoration (PR #50422) indicate ongoing investment in flexible, multi-provider workflows.

## Developer Pain Points

- **Free-tier/Console auth regression**: the "can only be used from within OpenCode" error is the single most-reported issue today, spanning native CLI, third-party frontends (MonoCode), and custom agents/subagents — likely a client-identification gap that PR #50896 (User-Agent header) may be addressing.
- **v2 redesign friction**: desktop tab layout (#36936) and TUI agent-switching keybindings (#49133) suggest the recent v2 UI overhaul shipped with usability regressions relative to v1.17.
- **Provider reliability**: DeepSeek V4 Flash region-lock surprise (#39845), DeepSeek V4.1 Flash outage (#49041), and Go tier cross-model usage-limit bleed (#49014) collectively signal fragility in third-party model integration and quota accounting.
- **Subagent hangs**: Codex/OpenAI-backed subagents getting stuck with no timeout (#11865, 22 👍) remains an open reliability gap for power users relying on parallel task execution.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
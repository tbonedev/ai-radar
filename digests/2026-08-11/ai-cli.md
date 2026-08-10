# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-10 23:22 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Cline](https://github.com/cline/cline)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Comparison — 2026-08-11

## 1. Ecosystem Overview

The AI CLI ecosystem is in a phase of parallel, rapid iteration rather than consolidation: seven major tools (Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, Cline, Qwen Code) shipped releases or active PR cycles within the same 24-hour window, reflecting a near-daily cadence across the category. The dominant engineering theme is no longer raw model capability but **agentic reliability** — subagent hangs, silent failure reporting, duplicate worker spawns, and orchestration correctness appear independently across at least five of the seven tools. Security hardening (SSRF, OAuth token handling, sandbox escapes, credential trust boundaries) is a second cross-cutting theme, suggesting the category is maturing past "does it work" into "can enterprises trust it." Session/context durability (unbounded logs, oversized transcripts, broken compaction/restore) is a third recurring failure class, indicating current architectures were not designed for the multi-hour, multi-agent sessions users now run. Platform fragmentation is notable: Windows remains the roughest edge for Codex, Copilot CLI, and OpenCode alike, while enterprise/organizational policy friction (Copilot CLI's model-access bugs, Claude Code's CVP approval issues) is emerging as a distinct pain category separate from individual-developer UX.

## 2. Activity Comparison

| Tool | Hot Issues Tracked | Key PRs Tracked | Release Today | Release Focus |
|---|---|---|---|---|
| Claude Code | 10 | 4 | ✅ v2.1.227 (patch) | Feature-flag/entitlement bug fixes, GH Action fix |
| OpenAI Codex | 10 | 10 | ✅ 2 alpha builds | No changelog (alpha) |
| Gemini CLI | 10 | 10 | ✅ v0.56.0 nightly | No functional changes; 3 security PRs merged |
| GitHub Copilot CLI | 10 | 0 | ✅ v1.0.79 | Enterprise sandbox/policy controls |
| OpenCode | 10 | 10 | ✅ v1.18.16 | Config parsing fix, desktop project registration |
| Cline | 10 | 10 | ❌ None | N/A — active PR pipeline instead |
| Qwen Code | 10 | 10 | ✅ v0.21.9 + nightly | Qoder plugin support, QR pairing |

**Observation:** Copilot CLI is the outlier with zero PR movement despite a dense, high-severity issue backlog (Enterprise model access), suggesting fixes are still internal/triaged rather than in public review — a transparency gap relative to peers.

## 3. Shared Feature Directions

- **Multi-agent/subagent reliability & observability** — Claude Code (#54393 post-mortem, #55586 duplicate spawns), Gemini CLI (#22323 false success reporting, #21409 indefinite hangs), Copilot CLI (#4416 subagent 429s), Qwen Code (RFC #8718 "fleet" architecture). This is the single largest shared theme across the category — every tool is independently re-solving orchestration trust.
- **Native model failover/fallback** — OpenCode (#7602, 107 👍, highest-reaction open issue) and Codex (#35097 multi-agent model compatibility) both show strong demand for cross-model resilience, not just same-provider fallback.
- **Session/context continuity across compaction or restart** — Claude Code (#34556 persistent memory), Codex (#21128 dropped conversations, #24948 log bloat), Copilot CLI (#4325, #4424 unrecoverable sessions), Qwen Code (#8678 restore timeout, #8885 rewind misalignment). Compaction and long-session state management is an unsolved problem industry-wide.
- **Configurable status line / HUD** — Codex (#17827, 150 👍) and Copilot CLI (#4418) both explicitly request parity with Claude Code's status line, indicating it has become a de facto UX benchmark.
- **OAuth/credential hardening** — Gemini CLI (3 security PRs shipped today), Codex (#31573 issuer validation, MCP OAuth PRs), Claude Code (auth churn #1757), Copilot CLI (Enterprise model-access denials) — auth is a pervasive friction point regardless of architecture.
- **Command/UX parity copying Claude Code** — OpenCode explicitly requests a `/btw` command clone (#16992, 178 👍, highest-reaction issue in this entire dataset), underscoring Claude Code's role as UX reference point even amid its own auth complaints.

## 4. Differentiation Analysis

- **Claude Code**: Enterprise/IDE breadth (VS Code auto-attach, GitLab code-review support) plus emerging Agent Teams multi-agent product — issues skew toward entitlement/billing complexity from its tiered plan model (Max/Fable) rather than core execution bugs.
- **OpenAI Codex**: Strongest Windows-specific fragility (sandbox, Git networking, Computer Use) and heaviest resource-leak backlog (MCP process leaks, fd leaks, zombie processes) — points to a less mature process-lifecycle model versus peers.
- **Gemini CLI**: Uniquely security-forward this cycle — three distinct security PRs (SSRF, OAuth refresh, redirect URI) shipped same-day, plus P1-tagged issue triage discipline, suggesting stronger internal security review process. Also the only tool with an explicit "Auto Memory" subsystem needing redaction hardening.
- **GitHub Copilot CLI**: The only tool where the dominant pain point is **organizational/policy-layer**, not technical — Enterprise Claude-model access toggling unpredictably. Positions it as the most enterprise-IT-dependent tool, with governance UX (sandbox policy, proxy enforcement) as its release focus.
- **OpenCode**: Most architecturally active — visible core refactor (moving filesystem/plugin/skill logic out of core into config layer) led by a single contributor, alongside real memory-leak and CPU-regression firefighting requiring heap snapshots from users. Also most explicitly benchmarking itself against Claude Code feature-for-feature.
- **Cline**: Mid-migration risk profile — the "Next" SDK migration is actively causing Plan/Act mode regressions (empty responses, permission bypass, ignored corrections), a self-inflicted stability dip during an architecture transition. Strongest focus on local/self-hosted LLM compatibility (Ollama, LM Studio, LiteLLM) as a differentiator.
- **Qwen Code**: Most aggressive roadmap velocity — RFC-to-implementation in a single day (fleet architecture spawning 3 sub-issues), plus browser-automation ambitions (WebBridge, 17-action control surface) and regional provider integrations (Kimi, Xiaomi MiMo) reflecting a China/APAC-oriented provider strategy distinct from Western peers.

## 5. Community Momentum & Maturity

- **Highest raw engagement**: Codex (#23794, 172 comments) and Claude Code (#24726, 205 👍) show the largest absolute community pull, consistent with being the two most widely-adopted tools.
- **Most mature triage process**: Gemini CLI stands out for P1/P2 severity labeling discipline and same-day security-PR turnaround — suggests a more process-driven maintainer team.
- **Fastest-moving architecture**: OpenCode and Qwen Code both show visible, aggressive core refactors happening in near-real-time (plugin/skill decoupling; fleet RFC), at some cost to short-term stability (OpenCode's CPU/memory regressions).
- **Highest instability-during-transition risk**: Cline, mid-"Next" SDK migration, is the clearest case of a tool trading short-term regressions for a longer-term architecture bet.
- **Least transparent to community**: Copilot CLI's zero-PR day against a severe, active bug cluster (Enterprise model access) signals either a smaller open-source contribution surface or heavier internal-first triage — worth watching if this persists.
- **Chronic unresolved themes**: Claude Code's auth friction (#1757, open since June 2025) and OpenCode's Memory Megathread (#20695, months-old) are examples of long-tail issues that persist despite otherwise fast release cadences — a signal that velocity on new features isn't translating into resolution of foundational complaints.

## 6. Trend Signals

- **Agentic orchestration is the next reliability frontier.** Every tool vendor is independently building (or hardening) multi-agent/subagent systems, and every one is hitting the same failure modes: false success signals, silent hangs, resource duplication, and permission bypass. Expect convergence toward shared patterns (timeout/circuit-breaker defaults, structured failure reporting) over the next 1-2 quarters — this is the category's biggest open engineering problem.
- **Enterprise trust is becoming a competitive axis, not just a feature.** Sandbox policy controls (Copilot CLI, Claude Code CVP), security PRs shipped same-day (Gemini CLI), and binary code-signing (Cline) all point to vendors racing to satisfy procurement/compliance requirements as adoption moves from individual developers to organizations.
- **Session durability at scale is under-engineered industry-wide.** Multiple tools independently report unbounded log/transcript growth (Qwen Code ~95GB/2mo, Codex 700MB-2GB sessions) and compaction/restore failures — current architectures were built for shorter sessions than users now run in practice.
- **Claude Code has become the de facto UX reference.** Two separate high-reaction feature requests (OpenCode's `/btw` clone, Codex's status-line parity ask) explicitly cite Claude Code as the benchmark, useful signal for where competitive pressure concentrates even as Claude Code itself struggles with entitlement/auth complexity.
- **Windows remains the weakest platform tier across the board.** Codex, Copilot CLI, and OpenCode all report Windows-specific instability (sandboxing, render loops, file locks) — a persistent gap between platforms that vendors have not prioritized closing despite Windows likely representing a large developer segment.
- **Local/self-hosted model support is a differentiating retention lever**, most visible in Cline's community, where tool-call protocol breakage and connection errors for Ollama/LM Studio/LiteLLM generate outsized engagement — a segment vendors ignore at their own risk as cost-conscious and privacy-sensitive users grow.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-11 · Source: github.com/anthropics/skills*

## 1. Top Skills Ranking

Comment counts on individual PRs weren't available in the source data, so ranking below reflects discussion substance, linked-issue traction, and community engagement (👍 reactions, duration of activity, cross-referencing).

1. **[#1298 — skill-creator: fix run_eval.py 0% recall bug](https://github.com/anthropics/skills/pull/1298)**
   Author: MartinCajiao | Status: Open
   The most consequential fix in the queue — `run_eval.py` reports 0% recall for every skill description regardless of content, which silently breaks the entire description-optimization loop (`run_loop.py`, `improve_description.py`). Directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), the most-discussed bug in the repo. Also fixes Windows stream reading, trigger detection, and parallel workers.

2. **[#1099 — skill-creator: fix run_eval.py crash on Windows](https://github.com/anthropics/skills/pull/1099)**
   Author: joshuawowk | Status: Open
   Overlapping fix for the same eval pipeline: on Windows, every query is misrecorded as "not triggered," producing the same false 0% recall signal. Part of a cluster of independent, converging fixes for the same root cause.

3. **[#1050 — skill-creator: fix Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050)**
   Author: gstreet-ops | Status: Open
   Two minimal, targeted 1-line fixes: `claude.cmd` isn't resolved via `PATHEXT` on Windows subprocess calls, plus an encoding bug. Small diff, high signal — indicative of how widespread the Windows-compat gap is.

4. **[#1323 — skill-creator: run_eval trigger detection misses real skill name](https://github.com/anthropics/skills/pull/1323)**
   Author: Polluelo978 | Status: Open
   A fourth independent PR addressing the same eval-loop failure family, this one focused on trigger-detection logic bailing on the first non-Skill tool call.

5. **[#1261 — skill-creator: isolate trigger-eval command files from live project registry](https://github.com/anthropics/skills/pull/1261)**
   Author: alvingarcia | Status: Open
   Fixes a side-effect bug ([#1260](https://github.com/anthropics/skills/issues/1260)) where synthetic eval command files leak into the user's real `.claude/commands/` directory during parallel eval runs, corrupting live projects.

6. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
   Author: PGTBoos | Status: Open
   New skill for typographic QC on generated documents (orphan word wrap, widow paragraphs, numbering misalignment) — addresses a universal Claude-generated-document quality issue rather than a niche use case.

7. **[#541 — fix(docx): prevent tracked-change ID collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**
   Author: Lubrsy706 | Status: Open
   Fixes real document corruption in the official docx skill caused by shared `w:id` space collisions across bookmarks/tracked changes/comments — a correctness bug in a widely-used bundled skill.

8. **[#1302 — Add color-expert skill](https://github.com/anthropics/skills/pull/1302)**
   Author: meodai | Status: Open
   Well-scoped reference skill covering color naming systems, color-space selection heuristics (OKLCH/OKLAB/CAM16), sustained community interest through mid-July.

## 2. Community Demand Trends

From Issues, three demand clusters dominate:

- **Skill-creator reliability / eval tooling** — by far the largest cluster. [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) both report the same recall=0% eval bug, which alone has spawned 5+ independent PR fixes. The community clearly wants a trustworthy description-optimization loop before trusting skill-creator output.
- **Trust, security, and namespace integrity** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the single most-discussed item in the entire dataset) flags community skills impersonating official Anthropic skills via namespace abuse — a trust-boundary vulnerability with outsized attention. [#1487](https://github.com/anthropics/skills/issues/1487) (context-window exhaustion from eager token injection) and [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint access-control design) reflect broader safety/scoping concerns.
- **Sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) asks for org-wide skill sharing in Claude.ai to replace manual file passing; [#189](https://github.com/anthropics/skills/issues/189) (9👍) reports duplicate-skill installs from overlapping plugin bundles.

## 3. High-Potential Pending Skills

PRs most likely to land soon, based on active/recent updates and direct linkage to high-traction issues:

- **[#1298](https://github.com/anthropics/skills/pull/1298)** and **[#1099](https://github.com/anthropics/skills/pull/1099)** — both directly resolve #556 (12 comments), the top bug report; maintainers will likely consolidate one of these.
- **[#525 — pyxel skill](https://github.com/anthropics/skills/pull/525)** — updated as recently as 2026-07-15, the longest-active PR in the list, suggesting ongoing maintainer engagement.
- **[#1479 — plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)** — built collaboratively off community framing in [#1417](https://github.com/anthropics/skills/issues/1417), a good sign of pre-alignment with maintainer/community consensus.
- **[#509 — CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** — low-risk, addresses a named community-health gap ([#452](https://github.com/anthropics/skills/issues/452)), typically fast to merge.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **reliability of the skill-authoring toolchain itself** — the `skill-creator` eval/optimization pipeline is broken in a way that undermines every other skill (Windows compatibility, false recall metrics, project-file leakage), and fixing it is drawing more independent contributor effort than any single new Skill proposal.

---

# Claude Code Community Digest — 2026-08-11

## Today's Highlights

A minor release (v2.1.227) landed overnight fixing two notable regressions: incorrect feature-flag evaluation on expired login tokens (which wrongly prompted Max users to buy usage credits for Fable) and a broken `claude-code-action` Bash execution path under `allowed_no*` permission configs. Community activity remains dominated by long-running auth/session friction (#1757, 500+ combined reactions across related threads) and Fable 5 rollout billing confusion on Max plans (#79337). PR activity is light but includes a meaningful `/code-review` platform expansion to GitLab.

## Releases

**v2.1.227**
- Fixed feature flags being evaluated without the user's subscription tier when a session started with an expired login token — this had been incorrectly prompting Max plan users to enable usage credits for Fable.
- Fixed Bash commands failing entirely under `claude-code-action` when `allowed_no*`-style permission configs were in use.

## Hot Issues

1. **[#32479](https://github.com/anthropics/claude-code/issues/32479)** — GitHub Connector shows connected in Claude Desktop but isn't recognized by Claude. 83 comments, 135 👍 — largest engagement in this window; marked `invalid` but reaction count suggests broad real-world impact on connector reliability.
2. **[#1757](https://github.com/anthropics/claude-code/issues/1757)** — Claude Code forces near-daily re-authentication. Open since June 2025, still active with 78 comments; long-standing `oncall`-tagged auth friction that keeps resurfacing.
3. **[#79337](https://github.com/anthropics/claude-code/issues/79337)** — Fable 5 incorrectly prompts "usage credits required" on Max plans the day Fable became standard; silently downgrades sessions to Opus 4.8. 71 comments — likely the root cause partially addressed in today's v2.1.227 release notes.
4. **[#24726](https://github.com/anthropics/claude-code/issues/24726)** — Feature request: VS Code extension setting to disable auto-attach of open file/selection. 205 👍, the highest reaction count in this batch, signaling strong demand for finer context control.
5. **[#34556](https://github.com/anthropics/claude-code/issues/34556)** — Feature request for persistent memory across context compactions, based on a user's account of 59 compactions over 26 days and a self-built memory workaround. Illustrative of real-world context-loss pain.
6. **[#69238](https://github.com/anthropics/claude-code/issues/69238)** — "No response from API" errors when Advisor (Opus 4.8) is triggered mid-session. 61 comments, 95 👍 — reliability concern for the Advisor feature.
7. **[#59248](https://github.com/anthropics/claude-code/issues/59248)** — Silent retention cleanup deletes session transcripts with no warning or recovery path, tagged `data-loss`. Serious trust/data-integrity concern even at moderate comment volume.
8. **[#54393](https://github.com/anthropics/claude-code/issues/54393)** — Community post-mortem cataloging 12 multi-agent coordination bugs from a single autonomous overnight run; useful aggregated signal for the Agent Teams / hooks roadmap.
9. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved organization still receiving cyber-safeguard blocks despite prior approval; portal shows stale "Under review" status — an enterprise-trust issue.
10. **[#55586](https://github.com/anthropics/claude-code/issues/55586)** — Agent Teams: a single teammate spawn creates 10–151 duplicate worker instances, each independently editing files and consuming context — a severe resource/correctness bug in multi-agent orchestration.

## Key PR Progress

1. **[#34951](https://github.com/anthropics/claude-code/pull/34951)** — `feat: add automatic GitHub/GitLab detection and GitLab support for /code-review`. Adds multi-platform support (including self-hosted GitLab) to the `/code-review` command without duplicating logic, closing #26932. Open.
2. **[#85409](https://github.com/anthropics/claude-code/pull/85409)** — `security-guidance: update default model refs from Opus 4.7/Sonnet 4.6 to Opus 5/Sonnet 5`. Updates the security-guidance plugin's README and `llm.py` model constants to the current model lineup. Open.
3. **[#85464](https://github.com/anthropics/claude-code/pull/85464)** — `plugins: add entroly-context for budget-aware context management`. Community plugin proposal for budget-aware context selection on large codebases; closed without merge.
4. **[#9262](https://github.com/anthropics/claude-code/pull/9262)** — `docs: enforce task tool and model metadata`. Documents `claude-3-5-haiku-latest` usage and requires the Task tool across commit workflows for context isolation; closed.

## Feature Request Trends

- **Context/session continuity**: persistent memory across compactions (#34556), cross-session coordination for concurrently-launched sessions on a shared worktree (#76727) — developers repeatedly building their own state-persistence and coordination layers to work around gaps.
- **IDE/editor ergonomics**: finer control over VS Code auto-attach behavior (#24726, 205 👍) and LaTeX rendering support in the VS Code plugin (#16446, 127 👍) — both editor-integration asks with outsized reaction counts relative to comment volume.
- **Plugin/agent extensibility**: rules support for Plugins (#14200, 94 👍), better MCP tool access for custom agents (#25200).
- **Pricing tiers**: recurring requests for higher-tier plans (#51141, "100x plan") reflecting heavy-usage segment pressure on Max plan limits.

## Developer Pain Points

- **Authentication churn** remains the single most persistent complaint — daily re-login requirements (#1757) and Fable/Max entitlement misfires (#79337, #84352) span over a year of reports and multiple releases without full resolution.
- **Multi-agent reliability** is a growing sore point: duplicate worker spawns consuming full context (#55586) and a crowdsourced 12-bug post-mortem on autonomous overnight runs (#54393) point to Agent Teams needing hardening before heavier autonomous use is safe.
- **Data trust concerns**: silent transcript deletion with no opt-in or recovery (#59248) is a serious pain point given no mitigating workaround exists.
- **Terminal/rendering glitches on Windows and VS Code**: console window flashing (#14828, 36 👍) and TUI character corruption in long VS Code sessions (#59163, #59915) continue to surface across releases, suggesting an underlying terminal-rendering fragility rather than isolated regressions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-11

## Today's Highlights

Two alpha releases (`rust-v0.148.0-alpha.6` and `rust-v0.147.0-alpha.6.6`) landed with no detailed changelogs. Community activity remains dominated by Windows-platform reliability issues — sandboxing, Computer Use, and Git networking all showing friction — alongside a fast-growing backlog of MCP process-leak and OAuth-credential bugs. On the engineering side, a wave of `copyberry[bot]` PRs shipped fixes touching `apply_patch`, MCP OAuth performance, and Windows sandbox networking, several of which directly target open community-reported bugs.

## Releases

- **[rust-v0.148.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.6)** — alpha build, no release notes provided.
- **[rust-v0.147.0-alpha.6.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.6)** — alpha build, no release notes provided.

## Hot Issues

1. **[#23794](https://github.com/openai/codex/issues/23794)** (closed, 172 comments) — Codex Desktop lost its visible context/token usage indicator after an update. Highest-engagement issue in the tracker; closed but still drawing comments, suggesting the fix hasn't fully satisfied users.
2. **[#20214](https://github.com/openai/codex/issues/20214)** (open, 92 comments) — Codex App frequently freezes/stutters on Windows 11 Pro even with ample system resources. Broad, unresolved performance complaint.
3. **[#17827](https://github.com/openai/codex/issues/17827)** (open, 40 comments, 150 👍) — Highest-👍 request: a customizable TUI status line (à la Claude Code) showing token usage, model, git branch, etc.
4. **[#31573](https://github.com/openai/codex/issues/31573)** (open, 35 comments) — OAuth authentication fails at issuer validation on CLI 0.143.0, blocking sign-in for affected users.
5. **[#21128](https://github.com/openai/codex/issues/21128)** (open, 34 comments) — Desktop silently drops project conversations that fall outside the global recent-50 window, undermining trust in it as persistent working memory.
6. **[#30009](https://github.com/openai/codex/issues/30009)** (open, 33 comments) — `apply_patch` fails with a Windows sandbox error, blocking file edits entirely on affected setups.
7. **[#4003](https://github.com/openai/codex/issues/4003)** (closed, 33 comments) — Long-standing bug: patched files get mixed line endings on Windows; still active discussion despite closure.
8. **[#17320](https://github.com/openai/codex/issues/17320)** (open, 30 comments) — Excessive SQLite WAL writes during streaming because TRACE logs ignore `RUST_LOG`, causing disk I/O bloat.
9. **[#37458](https://github.com/openai/codex/issues/37458)** (open, 30 comments) — VS Code extension fails to start with "couldn't load its resources" — a fresh, fast-growing regression.
10. **[#24948](https://github.com/openai/codex/issues/24948)** (open, 28 comments) — Session logs balloon to 700MB–2GB from repeated compaction history and raw tool output, filling disks on long sessions.

## Key PR Progress

1. **[#37892](https://github.com/openai/codex/pull/37892)** — Validate images before returning `view_image` output; decodes and re-encodes as PNG, with clearer errors for invalid input.
2. **[#37867](https://github.com/openai/codex/pull/37867)** — Reject duplicate resolved paths in `apply_patch` (e.g. `duplicate.txt` vs `./duplicate.txt`), tightening patch correctness relevant to ongoing apply_patch bug reports.
3. **[#37875](https://github.com/openai/codex/pull/37875)** — Honor the configured Windows sandbox level for managed networking instead of implicitly escalating privileges — directly relevant to Windows sandbox issues like #30009 and #31073.
4. **[#37889](https://github.com/openai/codex/pull/37889)** — Ignore Unix socket proxy settings on Windows to stop macOS-only permission logic from clamping Windows proxy listeners.
5. **[#37860](https://github.com/openai/codex/pull/37860)** — Speed up MCP OAuth credential reads by probing file/secrets stores without blocking the async executor — targets the class of MCP hang/lag bugs.
6. **[#37866](https://github.com/openai/codex/pull/37866)** — Add MCP OAuth credential contention regression tests, covering locked-store probes and streamable HTTP OAuth round trips.
7. **[#37878](https://github.com/openai/codex/pull/37878)** — Add configurable `goals.max_goal_token_budget` setting with validation on goal creation/update.
8. **[#37895](https://github.com/openai/codex/pull/37895)** — Add configurable Responses API request metadata (`responses_api_metadata`), capped at 16 ASCII-key entries, for parent and subagent turns.
9. **[#37862](https://github.com/openai/codex/pull/37862)** — Rename `EnvironmentConfig` to `TurnEnvironmentConfig` for clarity on its per-turn scope.
10. **[#31901](https://github.com/openai/codex/pull/31901)** (open) — Resolve local MCP JSON Pointer `$ref`s against the schema root when rendering Code Mode TypeScript tool declarations.

## Feature Request Trends

- **Customizable TUI/status line** (#17827, 150 👍) — parity with Claude Code's configurable status bar is the single most-upvoted ask.
- **Multi-agent / subagent model compatibility** (#35097, 50 👍) — requests to keep newer models usable with `spawn_agent`/MultiAgent V2 instead of being locked to V1.
- **Custom model provider support in the App** (#10867, 49 👍) — CLI already supports `/model` provider switching; users want the same in Codex Desktop.
- **Tabbed/parallel session UI** (#12098, 60 👍) — a tabbed interface for managing multiple concurrent chat sessions in the IDE extension.
- **Better thread/session management** — faster thread switching (#11011) and visibility into older conversations (#21128) point to a broader desire for more robust session/history handling.

## Developer Pain Points

- **Windows platform instability dominates the backlog** — sandbox ACL corruption (#15777), `apply_patch` sandbox errors (#30009), Git HTTPS failures inside the native sandbox (#31073), Computer Use `EnumWindows` failures (#37043), and stale JS exec contexts (#37013) collectively signal Windows is the roughest edge of the product right now.
- **Resource/process leaks under long-running sessions** — MCP server process leaks (#30408, 9+GB RSS), stdio pipe fd leaks causing EMFILE (#26984), and macOS Computer Use zombie processes (#25744) all point to insufficient process lifecycle cleanup.
- **Disk bloat from logging/history** — session logs growing to 700MB–2GB (#24948) and excessive SQLite WAL writes ignoring `RUST_LOG` (#17320) are recurring complaints about unbounded local storage growth.
- **Auth/MCP OAuth fragility** — issuer validation failures (#31573), stale connector links after reauth (#24675), and email-OTP sign-in failures on Xcode (#28078) suggest the OAuth/reauthentication flow needs hardening — though several PRs this cycle (#37860, #37866) begin addressing MCP OAuth reliability directly.
- **Desktop app responsiveness** — freezes/stutters on Windows (#20214), slow thread switching (#11011), and UI stuck in "Thinking" with unresponsive Stop (#24287) point to broader Desktop app performance concerns beyond just Windows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-11

## Today's Highlights

Gemini CLI shipped its nightly `v0.56.0` build with no functional changelog entries, so today's activity is dominated by triage rather than releases. The Issue tracker continues to surface a persistent theme: subagent reliability — hangs, misleading success reporting, permission bypasses, and browser-agent flakiness account for a large share of the 30 issues touched in the last 24h. On the PR side, three security-relevant fixes landed (SSRF in `web-fetch.ts`, MCP OAuth token refresh, Cloud Workstations OAuth redirect) alongside sandbox-crash and terminal-corruption fixes.

## Releases

- **[v0.56.0-nightly.20260810](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8)** — Routine nightly build; no notable changelog beyond the version bump itself.

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success** (P1, 12 comments, 👍2). The `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: GOAL` even when it hit the max-turn limit before doing any real work — silently hiding failures from users.
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs indefinitely** (P1, 8 comments, 👍8). Even trivial tasks like folder creation can hang for over an hour when deferred to the generalist subagent; disabling subagent delegation is the only known workaround.
3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-dependency OS sandboxing & bash affinity** (P2, 8 comments, 👍1, effort/large). Proposes native OS-level sandboxing plus intent routing to safely exploit Gemini 3's strong bash/POSIX tool-chaining ability without compromising security.
4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (P1, 7 comments). Epic tracking expansion of behavioral eval coverage (76 tests across 6 model configs so far); ties directly into the eval tooling PRs below (#28305, #28344).
5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — Assess impact of AST-aware file reads/search/mapping** (P2, 7 comments, 👍1). Investigates whether AST-aware tools would reduce wasted turns and token noise versus current text-based reads.
6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini underuses custom skills and subagents** (P2, 6 comments). Multiple reports that the model won't proactively invoke relevant skills/subagents unless explicitly told to, even when descriptions closely match the task.
7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** (P2, 5 comments). A session is only marked "processed" if the extraction agent actually reads it — sessions skipped as low-signal keep resurfacing.
8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory needs deterministic redaction** (P2, security, 4 comments). Secrets are redacted only *after* transcript content is already sent to the extraction model — a real leak-surface concern.
9. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell execution stuck at "Awaiting input" after completion** (P1, 4 comments, 👍3). Simple, non-interactive shell commands leave the UI hung showing the command as still active well after it finished.
10. **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents running without permission since v0.33.0** (P2, 3 comments). Users report subagents (e.g., generalist) activating despite agents mode being explicitly disabled in all configs.

## Key PR Progress

1. **[#28557](https://github.com/google-gemini/gemini-cli/pull/28557) — fix: SSRF vulnerability in web-fetch.ts** (P1, security). `isBlockedHost` used synchronous IP checks that only caught literal IPs; hostnames resolving to internal ranges (e.g., `169.254.169.254`) bypassed validation. Switches to async DNS resolution.
2. **[#28481](https://github.com/google-gemini/gemini-cli/pull/28481) — fix(core): refresh MCP OAuth tokens with stored client ID** (P1, security, CLOSED). Fixes token refresh for MCP servers using OAuth discovery + dynamic client registration; a prior failure deleted stored credentials, forcing needless re-auth.
3. **[#28688](https://github.com/google-gemini/gemini-cli/pull/28688) — fix(core): dynamically resolve Cloud Workstations OAuth redirect URI** (P3, security). Fixes OAuth flows inside Cloud Workstations VMs that were hardcoded to redirect to `localhost`, breaking auth when the browser runs on a different host.
4. **[#28734](https://github.com/google-gemini/gemini-cli/pull/28734) — fix(core): handle EACCES in resolveToRealPath to prevent sandbox crash** (P1). Fixes a startup crash under macOS Seatbelt sandboxing when `fs.realpathSync` fails with an error code beyond the previously handled set.
5. **[#28729](https://github.com/google-gemini/gemini-cli/pull/28729) — fix(core): resolve swallowed directory mismatch in IDE connections**. Fixes IDE companion connection failures under Cider/VS Code forks using virtual or non-standard workspace paths.
6. **[#28730](https://github.com/google-gemini/gemini-cli/pull/28730) — fix(core,cli): resolve false model capacity exhaustion & quota mapping**. Corrects client-side quota lookup and prevents spurious "capacity exhausted" errors, preserving the "Keep trying" UI option during transient surges.
7. **[#28764](https://github.com/google-gemini/gemini-cli/pull/28764) — fix(vscode-ide-companion): track all activate() Disposables**. Two `context.subscriptions.push(...)` calls accidentally used comma expressions, so only the last Disposable of each pair was tracked — a resource-leak fix for the VS Code extension.
8. **[#28624](https://github.com/google-gemini/gemini-cli/pull/28624) — fix(core): prevent boolean thought parts leaking as `[Thought: true]` text**. Fixes #23525 by checking `part.thought` correctly in the `toPart` converter so internal thought markers stop leaking into rendered output.
9. **[#28613](https://github.com/google-gemini/gemini-cli/pull/28613) — fix: replace console.error with debugLogger in sdk session**. Small logging-consistency cleanup in `packages/sdk/src/session.ts`, aligning with project logging conventions.
10. **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305) — feat(evals): add tool call formatter and integrate failure summaries** (help wanted). Adds a compact, numbered tool-call timeline to eval failure output, complementing the eval-validate tooling in #28344 and supporting the #24353 eval-infra epic.

## Feature Request Trends

- **Subagent reliability & observability** — the largest cluster by far: hang detection, accurate success/failure reporting, `/chat share`-visible trajectories (#22598), and bug-report context inclusion (#21763) are all requested extensions to the subagent system.
- **AST-aware codebase tooling** — recurring ask (#22745, #22746) to move beyond raw text reads/greps toward structural code navigation for fewer, more precise turns.
- **Auto Memory hardening** — redaction, invalid-patch surfacing (#26523), and retry-loop fixes are all part of the same nascent memory subsystem needing maturity work.
- **Sandboxing and native bash affinity** (#19873) — a push to let the model use bash more natively while containing risk via OS-level sandboxing.
- **Eval infrastructure** — component-level evals (#24353) plus new CLI tooling (`eval:validate`, tool-call formatters) for CI-gated behavioral testing.

## Developer Pain Points

- **Misleading success signals**: multiple issues (#22323, #21983) describe subagents reporting `GOAL`/`success` when they actually hit turn limits or failed outright — undermining trust in agent output.
- **Silent hangs**: generalist and browser subagents hanging indefinitely (#21409, #22232) with no timeout or recovery path force users to wait or manually kill sessions.
- **Shell/terminal UX glitches**: commands that finish but leave the UI stuck on "Awaiting input" (#25166), plus resize flicker (#21924) and post-editor terminal corruption (#24935).
- **Permission/config not respected**: subagents activating despite being disabled (#22093), and Browser Agent ignoring `settings.json` overrides like `maxTurns` (#22267).
- **Governance noise**: a few low-quality/likely-spam PRs surfaced today (e.g., an empty-template PR and one modifying CODEOWNERS with unrelated email addresses) — worth a maintainer glance given CODEOWNERS changes are a sensitive supply-chain surface, though not evaluated further here.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-11

## Today's Highlights

Copilot CLI shipped v1.0.79, focused on sandbox/enterprise policy controls (auto-only allow-all, proxy enforcement for sandbox policy) and settings transparency. The issue queue remains dominated by **model-access failures for Enterprise accounts** — Claude models (Sonnet 5/Opus 5) being disabled or inaccessible despite being enabled in org settings — alongside a cluster of **session/context reliability bugs** (oversized `events.jsonl`, 5MB CAPI payload limits breaking `/compact`, dropped kickoff prompts). No PRs were updated in the last 24h, suggesting most active fixes are still in triage.

## Releases

**v1.0.79** ([release](https://github.com/github/copilot-cli/releases/tag/v1.0.79)) — 2026-08-10
- `/sandbox` configuration dialog now shows where sandbox settings are stored in `settings.json`.
- Added enterprise "allow-auto-only" policy support, letting `/allow-all auto` work while full `/allow-all` stays blocked.
- Enterprise-managed sandbox policy can now enforce a proxy URL while credential handling is otherwise unaffected.

## Hot Issues

1. **[#1595](https://github.com/github/copilot-cli/issues/1595)** — Sporadic policy blocking issue retrieving models. 29 comments, 11 👍. Long-running Enterprise-tier bug where `/models` fails with "access denied by Copilot policy" despite valid subscription and remaining quota.
2. **[#4422](https://github.com/github/copilot-cli/issues/4422)** — All Claude models disabled under CLI model selection. Opened 2026-08-09, active the next day; Enterprise users report Claude models worked "yesterday" and are now blocked.
3. **[#4390](https://github.com/github/copilot-cli/issues/4390)** — Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5, Kimi K3). Related to #4422 — org-enabled Anthropic models fail with "disabled by your organization" even when explicitly enabled.
4. **[#2904](https://github.com/github/copilot-cli/issues/2904)** — Custom Agent YAML frontmatter should support reasoning effort. 19 👍, a top feature request — currently reasoning effort is only global via `--effort`, not per-agent.
5. **[#4095](https://github.com/github/copilot-cli/issues/4095)** — Windows: plugin update fails with "Access is denied (os error 5)" while VS Code is running. 13 👍; the Copilot VS Code extension holds file-watcher handles that block plugin installs.
6. **[#4325](https://github.com/github/copilot-cli/issues/4325)** — Session becomes permanently unloadable once `events.jsonl` exceeds V8's max string length. Data-loss-adjacent bug: session metadata survives but the CLI can't resume it.
7. **[#4424](https://github.com/github/copilot-cli/issues/4424)** — `/compact` cannot recover a session once the CAPI Responses payload hits the 5MB limit, leaving no path to shrink context — session becomes a dead end.
8. **[#4222](https://github.com/github/copilot-cli/issues/4222)** — Regression of #2802: infinite React/Ink render loop freezes the main pane on Windows (VS Code integrated terminal), reappearing on v1.0.72+.
9. **[#4416](https://github.com/github/copilot-cli/issues/4416)** — Parallel `explore` subagent fan-out hits per-model 429s with no backoff or auto-switch, even though the model is `eligibleForAutoSwitch`.
10. **[#4419](https://github.com/github/copilot-cli/issues/4419)** — Managed-settings interim fail-closed state uses an empty MCP allow-list and permanently drops user MCP servers that register during the resolution window.

## Key PR Progress

No pull requests were updated in the last 24 hours. Given the volume of open, actively-discussed bugs (especially the Enterprise model-access cluster), fixes appear to still be in internal triage rather than open PRs.

## Feature Request Trends

- **Per-agent / per-call reasoning-effort control** — [#2904](https://github.com/github/copilot-cli/issues/2904) requests YAML frontmatter support for custom agents; currently only global via CLI flag.
- **Configurable HUD / session context visibility** — [#4418](https://github.com/github/copilot-cli/issues/4418) asks for a built-in heads-up display (referencing the community `copilot-hud` project) to reduce reliance on `/context`.
- **Improved prompt composer UX** — [#4417](https://github.com/github/copilot-cli/issues/4417) requests a floating GUI text composer with word-wrap and dark theme to reduce prompt-entry errors.
- **MCP resilience controls** — [#4421](https://github.com/github/copilot-cli/issues/4421) requests a configurable retry/backoff budget for the MCP initialize handshake (currently a hard-coded, non-retryable 60s window).
- **Model-routing correctness for tools** — [#3954](https://github.com/github/copilot-cli/issues/3954) asks that the `explore` tool respect custom/DeepSeek model configuration instead of hardcoding `gpt-5.4-mini`.

## Developer Pain Points

- **Enterprise model access is fragile and opaque** — the largest recurring theme (#1595, #4422, #4390, #4345): Claude models toggle between available/disabled unpredictably for Enterprise accounts, with unclear error messages ("disabled by your organization" / "access denied by Copilot policy") and no visible remediation path.
- **Session durability under load** — large sessions can become permanently stuck (#4325 string-length limit, #4424 5MB payload limit with `/compact` unable to recover), effectively forcing users to abandon long-running work.
- **Windows-specific friction** — file-lock conflicts between the CLI and VS Code extension (#4095) and a recurring Ink render-loop freeze (#4222) point to weaker Windows platform testing relative to macOS/Linux.
- **Parallel/subagent orchestration gaps** — rate-limiting concentrated on single model buckets without backoff (#4416), non-deterministic tool-call response correlation (#4420), and MCP servers being dropped during policy-resolution races (#4419) all suggest the concurrency/orchestration layer needs hardening as autopilot/multi-agent workflows scale up.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-11

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

Release v1.18.16 lands two config/desktop bugfixes (unknown top-level config fields no longer break parsing; Home-opened projects are now registered app-wide), but the bigger story is stability: the long-running Memory Megathread and a fresh high-CPU report are both still drawing heavy engagement, and several new PRs from core contributor kitlangton continue a broader architectural push to move filesystem/plugin/skill responsibilities out of core services and into the config layer. Provider reliability (DeepSeek V4 Flash, Cloudflare Workers AI, GitHub Copilot) also saw concentrated fix activity today.

## Releases

**v1.18.16**
- **Core (Bugfixes):** Unknown top-level config fields are now ignored instead of failing config parsing; projects opened from Home are registered so they're available app-wide.
- **Desktop (Improvements):** Project menu can now be opened via right-click in Home.
- **Desktop (Bugfixes):** Fallback behavior for listing (truncated in source data).

## Hot Issues

1. **[#20695 – Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (126 comments, 96 👍) — Central tracking issue for memory leaks; maintainers are explicitly asking for heap snapshots rather than LLM-generated fix suggestions. Still the most active thread in the repo months after opening.
2. **[#30086 – High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)** (46 comments, 22 👍) — Users report CPU spikes over the past week severe enough to degrade multi-session usage from 10+ down to 3 concurrent sessions.
3. **[#7602 – Native Model Fallback / Failover Support](https://github.com/anomalyco/opencode/issues/7602)** (29 comments, 107 👍) — Highest-reaction open issue; requests cross-model failover (not just same-model provider fallback) for long-running agent reliability.
4. **[#16992 – [2.0] add /btw command](https://github.com/anomalyco/opencode/issues/16992)** (22 comments, 178 👍) — Highest 👍 count of all listed issues; requests parity with Claude Code's `/btw` command for lightweight aside instructions.
5. **[#5374 – Show tokens/second](https://github.com/anomalyco/opencode/issues/5374)** (20 comments, 94 👍) — Long-requested throughput metric for comparing provider performance.
6. **[#37852 – Aborted provider stream recorded as clean stop](https://github.com/anomalyco/opencode/issues/37852)** (14 comments, 54 👍) — Streams that die mid-generation are silently marked as normal completion, causing subagents to return empty with no error surfaced.
7. **[#7957 – Ctrl+C exits OpenCode, conflicts with copy shortcut](https://github.com/anomalyco/opencode/issues/7957)** (15 comments, 49 👍) — UX complaint that a universal copy shortcut unexpectedly terminates the app.
8. **[#30649 – Session token usage grows unbounded via cache.read](https://github.com/anomalyco/opencode/issues/30649)** (7 comments, 2 👍) — Recorded token usage (especially cache reads) can balloon until sessions hit unrecoverable context-window errors.
9. **[#33399 – opencode CPU at 99-100%, unresponsive](https://github.com/anomalyco/opencode/issues/33399)** (8 comments) — Related to the broader CPU/perf theme; process becomes fully unresponsive to keyboard input.
10. **[#40465 – deepseek-v4-flash on OpenCode Go drops connection](https://github.com/anomalyco/opencode/issues/40465)** (6 comments, 6 👍) — Upstream closes TCP connections before responding, hanging requests until the 30s client timeout.

## Key PR Progress

1. **[#27554 – feat(opencode): local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)** — Adds `Local (LAN)` discovery in `/connect` for local OpenAI-compatible servers via mDNS, closing two issues.
2. **[#41620 – fix(provider): scope DeepSeek V4 Flash sampling defaults](https://github.com/anomalyco/opencode/pull/41620)** — Defaults `top_p` to 0.95 for versioned DeepSeek V4 Flash (0731) IDs across DeepSeek/Zen/Go aliases while preserving third-party/self-hosted defaults; supersedes the earlier #40247.
3. **[#41618 – refactor(core): move plugin discovery/watching to config side](https://github.com/anomalyco/opencode/pull/41618)** — Narrows `PluginSupervisor` to module import/lifecycle only, moving filesystem discovery into the config layer.
4. **[#41622 – refactor(core): skill service stores values, config plugin owns filesystem](https://github.com/anomalyco/opencode/pull/41622)** — Continues the same core-service cleanup direction (following #40954): skill service becomes a pure registry.
5. **[#41619 – fix(util): no filesystem side effects at global module load](https://github.com/anomalyco/opencode/pull/41619)** — Removes top-level awaits that wrote to disk on import, fixing Cloudflare Workerd startup compatibility.
6. **[#41621 – feat(session): persist previous agent on switch](https://github.com/anomalyco/opencode/pull/41621)** — Tracks previous agent alongside model-switch events; skips no-op switches.
7. **[#41616 – fix(core): restore parcel watch for git HEAD](https://github.com/anomalyco/opencode/pull/41616)** — Fixes TUI/server branch label not updating after `git checkout`, caused by a regression in #41096's watcher change.
8. **[#41615 – fix(core): resolve Cloudflare account endpoints](https://github.com/anomalyco/opencode/pull/41615)** — Routes Cloudflare Workers AI models through the native provider and passes account ID per model resolution.
9. **[#41607 – fix(core): runtime-neutral legacy credential import](https://github.com/anomalyco/opencode/pull/41607)** — Replaces `Bun.file` with `node:fs/promises` so database bootstrap doesn't crash under plain Node/Cloudflare Workerd.
10. **[#41602 – test(app): make offset observer scheduling deterministic](https://github.com/anomalyco/opencode/pull/41602)** — Replaces wall-clock polling in a UI test with a controlled MutationObserver for reliability.

## Feature Request Trends

- **Model reliability & routing:** Native cross-model fallback/failover (#7602, 107 👍) is the most-demanded reliability feature, alongside deeper LAN/local provider auto-discovery (#27554, now in progress).
- **Command/UX parity with Claude Code:** `/btw`-style commands (#16992, 178 👍) reflect a pattern of users wanting feature parity with competing CLI tools.
- **Observability:** Tokens/second display (#5374, 94 👍) and clearer error surfacing for silently-aborted streams (#37852) point to demand for better visibility into model performance and failure states.
- **Input/keybinding ergonomics:** Multiple issues (#7957 Ctrl+C, #19256 Ctrl+Z, #31217 Enter swallowed) show recurring friction with terminal input handling conflicting with OS-level shortcuts.
- **Extensibility:** Plugin/slash-command interception requests (#28292) align with the ongoing core refactors (#41618, #41622) that are restructuring plugin and skill architecture.

## Developer Pain Points

- **Performance regressions:** CPU usage spikes (#30086, #33399) reported specifically "since the last updates," suggesting a recent regression rather than a long-standing issue — worth watching for a root-cause fix in coming releases.
- **Memory growth:** The Memory Megathread (#20695) and unbounded token/cache growth (#30649) both point to resource-management issues in long-running sessions, with maintainers actively soliciting heap snapshots.
- **Provider/auth friction:** Certificate verification errors (#8601), Azure OpenAI API-version query params (#13999), and DeepSeek Go connection drops (#40465) show recurring pain integrating third-party/enterprise endpoints.
- **Silent failures:** Aborted streams recorded as clean completions (#37852) and infinite loops after tool calls (#26220) are particularly frustrating since they give users no error signal to act on.
- **Documentation gaps:** Repeated confusion over VS Code extension installation (#16217, #10517, #31500) indicates the docs haven't kept pace with tooling changes.

</details>

<details>
<summary><strong>Cline</strong> — <a href="https://github.com/cline/cline">cline/cline</a></summary>

# Cline Community Digest — August 11, 2026

## Today's Highlights

Cline shipped no new releases in the last 24h, but development activity remains intense around the ongoing "Next" SDK migration, with several regressions surfacing in Plan/Act mode behavior and session persistence. The most urgent fix in flight addresses a UI-freezing bug from bloated `ui_messages.json` payloads (#13141), while a cluster of local-LLM/OpenAI-compatible provider issues (tool-call syntax breakage, connection errors) continues to generate high community engagement. On the infra side, the team is actively decoupling the Hub runtime from Core and hardening CLI binary signing for macOS/Windows releases.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#12362](https://github.com/cline/cline/issues/12362)** — VS Code extension v4.0.9 persistently shows `[OPENAI] Connection error` for local LLM setups. 15 comments, the most active thread — points to a broader regression in local/self-hosted provider connectivity.
2. **[#13008](https://github.com/cline/cline/issues/13008)** — v4.1.x changed tool-calling syntax, breaking compatibility with local Ollama + Qwen3.6 setups and removing compact-context toggling. 9 comments; self-hosted model users are notably affected by rapid tool-protocol changes.
3. **[#12406](https://github.com/cline/cline/issues/12406)** — JetBrains plugin can't fetch model lists from LiteLLM due to blocked routes. 9 comments; ongoing JetBrains/LiteLLM integration friction.
4. **[#13001](https://github.com/cline/cline/issues/13001)** — Truncated streamed tool-call arguments can be silently "repaired" into syntactically valid but corrupted JSON before execution — a correctness/safety concern since bad edits could be applied without surfacing the truncation.
5. **[#13132](https://github.com/cline/cline/issues/13132)** — Specific conversations become grayed out/unclickable, requiring a VS Code restart; already has a fix in review (PR #13141).
6. **[#13041](https://github.com/cline/cline/issues/13041)** — CLI with DeepSeek V4 Flash collapses into endless "Let me…" text with zero tool_use and no circuit breaker, affecting long unattended sessions.
7. **[#13131](https://github.com/cline/cline/issues/13131)** — Checkpoints feature adds a ~90s blocking delay per turn on large Git repos inside cloud-synced folders (Windows) — a significant productivity hit for enterprise/large-repo users.
8. **[#13140](https://github.com/cline/cline/issues/13140)** — Plan mode no longer respects edit permissions and shows degraded task quality after the v4.x SDK migration — a regression tied directly to the "Next" architecture rollout.
9. **[#13136](https://github.com/cline/cline/issues/13136)** / **[#13135](https://github.com/cline/cline/issues/13135)** — Two related reports of Cline performing unrequested/repeated actions and ignoring recent user corrections in Plan mode, suggesting instruction-following regressions in recent builds.
10. **[#13113](https://github.com/cline/cline/issues/13113)** — Switching between Plan/Act modes triggers `Model returned empty response`, compounding the mode-switching reliability concerns seen elsewhere.

## Key PR Progress

1. **[#13141](https://github.com/cline/cline/pull/13141)** — `fix(vscode)`: Trims full request bodies from persisted `api_req_started` messages, directly fixing the conversation-freeze bug (#13132).
2. **[#13137](https://github.com/cline/cline/pull/13137)** (merged) — `fix`: Respects user-configured max output tokens in compaction summarizer requests, fixing "Compaction skipped" failures with local/reasoning models (#13127).
3. **[#12962](https://github.com/cline/cline/pull/12962)** — `fix(hub)`: Ensures recoverable agent errors don't terminate the turn in the dashboard, closing a gap left by the earlier VS Code/CLI fix (#12953).
4. **[#13139](https://github.com/cline/cline/pull/13139)** — `fix(vscode)`: Prevents discarding a successfully refreshed Cline auth token after expiry — one of two outstanding "Next"-side auth bugs.
5. **[#13148](https://github.com/cline/cline/pull/13148)** — Extracts the Hub runtime from Core, a significant architectural decoupling effort.
6. **[#13145](https://github.com/cline/cline/pull/13145)** — `fix(desktop)`: Fixes reconnection to stale managed Hub daemons when adjacent app releases share the same wire protocol version.
7. **[#13106](https://github.com/cline/cline/pull/13106)** — `fix(core)`: Ensures the Hub daemon exits cleanly on HTTP-delivered shutdown, closing a leak path found in a related investigation.
8. **[#12961](https://github.com/cline/cline/pull/12961)** — `refactor(telemetry)`: Unifies telemetry transport and settings gating across the SDK bundle, eliminating duplicate OTel exporter stacks.
9. **[#13010](https://github.com/cline/cline/pull/13010)** — `feat`: Adds CoralBricks as a new built-in OpenAI-compatible provider (GLM 5.2, Kimi K3, GPT-OSS 120B).
10. **[#13021](https://github.com/cline/cline/pull/13021)** — Signs Windows CLI binaries with Azure Trusted Signing and surfaces app-control launch errors, addressing Smart App Control/WDAC blocking issues.

## Feature Request Trends

- **Broader model/provider support**: New provider integrations (CoralBricks in #13010, Qwen3.8 Max pricing docs in #13144) continue at a steady pace, reflecting demand for more OpenAI-compatible and local model options.
- **Hub/architecture modularization**: Multiple PRs (#13148, #13145, #13106) point to an active effort to decouple the Hub runtime from Core for more robust multi-client session management.
- **Release/security hardening**: Ongoing work to codesign macOS (#12848, #11997) and Windows (#13021) CLI binaries suggests growing demand for verifiable, enterprise-trustworthy release artifacts.
- **UI/design refresh**: Font migration to Inter and Geist Mono (#13142) signals a broader visual polish initiative across VS Code webview, Hub, and desktop surfaces.

## Developer Pain Points

- **Local/self-hosted LLM friction**: Recurring connection errors, tool-syntax breakage, and temperature/parameter incompatibilities with Ollama, LM Studio, LiteLLM, and OpenAI-compatible endpoints (#12362, #13008, #12406, #13104) remain the single largest source of community complaints.
- **Plan/Act mode instability**: Multiple concurrent reports of mode-switching causing empty responses, permission violations, and instruction-ignoring behavior (#13113, #13140, #13135, #13136) point to regressions introduced by the ongoing SDK migration.
- **Performance on large/cloud-synced repos**: The Checkpoints feature's ~90s per-turn delay (#13131) highlights scaling issues with the git-snapshot mechanism.
- **Session/state persistence bugs**: Conversation freezing (#13132, fixed via #13141) and crashes when resuming persisted tasks after restart (#13119) reflect fragility in the new "Next" session architecture.
- **Tool-call protocol reliability**: Silent JSON "repair" of truncated tool calls (#13001) and vendor-specific tool-call marker leakage with Kimi/Together (#12979) indicate the tool-execution pipeline needs more robust validation across providers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-11

## Today's Highlights

Qwen Code shipped v0.21.9 alongside a nightly build adding native Qoder plugin support and QR-code Local Control pairing. The bulk of today's activity centers on two threads: a nascent multi-agent "fleet" architecture (RFC #8718 spawning three staged implementation issues) and a cluster of TUI rendering bugs around terminal resize/startup that a large PR (#8831) attempts to fix in one pass. Several P1 bugs around session restore, rewind indexing, and provider-config overwrites also landed today, alongside a notable unbounded log-growth report (~95GB in two months).

## Releases

- **v0.21.9** — routine release, no detailed notes published.
- **v0.21.8-nightly.20260810** — adds native support for installing Qoder plugin extensions from directories, archives, Git repos, URLs, and npm packages with automatic system-prompt loading ([#8661](https://github.com/QwenLM/qwen-code/pull/8661)), plus CI auto-assignment of issues to area owners. Local Control gained QR-code pairing.

## Hot Issues

1. **[#8718](https://github.com/QwenLM/qwen-code/issues/8718)** RFC: Native coordination for independent Qwen sessions — umbrella proposal for a multi-agent "fleet" runtime letting a leader dispatch self-contained workers; spawned three follow-on stage issues today (8 comments).
2. **[#8124](https://github.com/QwenLM/qwen-code/issues/8124)** Startup banner sometimes missing top lines on first paint — intermittent rendering race in `AppHeader`, highest comment count (10) among today's issues.
3. **[#8557](https://github.com/QwenLM/qwen-code/issues/8557)** Shrinking terminal window reprints transcript blocks (duplicate scrollback output) on macOS/Warp — actively being fixed by PR #8831.
4. **[#8871](https://github.com/QwenLM/qwen-code/issues/8871)** ACP child process fails with "Unknown argument: acp" in `qwen serve` mode — breaks the default `--http-bridge` path with a 401 auth failure.
5. **[#8885](https://github.com/QwenLM/qwen-code/issues/8885)** (P1) fix(session): rewind indexes misaligned with automatic user-role history entries — regression surfaced by PR #8838's cron-prompt work.
6. **[#8678](https://github.com/QwenLM/qwen-code/issues/8678)** (P1) Preserve current session when a large restore times out — partially landed via #8691, follow-up work ongoing.
7. **[#8643](https://github.com/QwenLM/qwen-code/issues/8643)** (Security, closed) `qwen serve` fast path could load `.env` from a `DO_NOT_TRUST` ancestor directory because trust was evaluated once for the start directory — credential-security bug, now fixed.
8. **[#8863](https://github.com/QwenLM/qwen-code/issues/8863)** (P1, closed) Provider update silently overwrote `model.name`/`model.baseUrl` when the active model belonged to another provider — a regression of #5819, affected custom/self-hosted model setups.
9. **[#8860](https://github.com/QwenLM/qwen-code/issues/8860)** OpenAI API logs grow without bound — no rotation/retention on `logs/openai`, observed ~95GB / 340k files over two months.
10. **[#8888](https://github.com/QwenLM/qwen-code/issues/8888)** Autofix pushes cancel in-progress `review-pr` runs, creating a self-reinforcing cancellation loop on bot-authored PRs — CI/dev-workflow reliability issue.

## Key PR Progress

1. **[#8831](https://github.com/QwenLM/qwen-code/pull/8831)** fix(cli): eliminate banner duplication and drag flicker on resize/wake — directly addresses #8557 by fixing stale row-count clearing during reflow.
2. **[#8895](https://github.com/QwenLM/qwen-code/pull/8895)** fix(ci): stream autofix agent progress — lets the idle watchdog distinguish active tool work from a stalled sandbox via partial-message streaming.
3. **[#8848](https://github.com/QwenLM/qwen-code/pull/8848)** feat(web-shell): redesign Channel policy and workspace management — exposes shared DM/group-access and session-routing controls per adapter.
4. **[#8883](https://github.com/QwenLM/qwen-code/pull/8883)** fix(webui): allow retry after session load timeout — clears the never-attached target session identity so re-selection starts fresh.
5. **[#8891](https://github.com/QwenLM/qwen-code/pull/8891)** feat(web-shell): share session catalog scheduling — page-scoped, per-client cached session list with concurrency-limited scheduling.
6. **[#8896](https://github.com/QwenLM/qwen-code/pull/8896)** fix(desktop): close 0.1.1 regression gaps — fixes hold-to-record gesture, spurious SSE reconnect errors, and macOS build regeneration.
7. **[#8900](https://github.com/QwenLM/qwen-code/pull/8900)** fix(core): sync loaded-skill state with history eviction; adds user `/unskill` command.
8. **[#8838](https://github.com/QwenLM/qwen-code/pull/8838)** fix(cli): persist scheduled cron prompts — records auto-fired scheduled prompts in the session transcript, addresses #8837.
9. **[#8707](https://github.com/QwenLM/qwen-code/pull/8707)** feat(chrome): add Qwen WebBridge direct browser control — Kimi WebBridge-compatible endpoints with a full 17-action browser control surface.
10. **[#8368](https://github.com/QwenLM/qwen-code/pull/8368)** feat(auth): add Kimi and Xiaomi MiMo providers — first-class presets with region-specific API key and plan options.

## Feature Request Trends

- **Multi-agent / fleet orchestration** dominates today's roadmap discussion: RFC #8718 plus staged delivery issues [#8840](https://github.com/QwenLM/qwen-code/issues/8840) (contracts + in-process preview), [#8841](https://github.com/QwenLM/qwen-code/issues/8841) (supervised teammate runtime MVP), and [#8843](https://github.com/QwenLM/qwen-code/issues/8843) (terminal attach + legacy cleanup).
- **Web Shell / daemon management** — requests to redesign channel policy, session isolation, and workspace ownership ([#8845](https://github.com/QwenLM/qwen-code/issues/8845)) and to default project memory to workspace scope in daemon mode ([#8854](https://github.com/QwenLM/qwen-code/issues/8854)).
- **Better UX for blocking states** — e.g. `/clear` should explain what background task is blocking it and how to stop it ([#8741](https://github.com/QwenLM/qwen-code/issues/8741)).
- **CLI discoverability** — undocumented flags like `--approval-mode` and `--auth-type` missing from `--help` ([#8897](https://github.com/QwenLM/qwen-code/issues/8897)).

## Developer Pain Points

- **TUI rendering instability** is the most recurring complaint cluster: missing startup banner lines (#8124), duplicate scrollback on resize (#8557), input-box jitter during resize (#8849), and flicker in web-based terminals like Alibaba Cloud Workbench (#8659) — several trace back to the same virtualized-history redraw logic.
- **`qwen serve`/ACP reliability** — child process argument mismatches (#8871), session restore timeouts (#8678), missing scheduled prompts after cold restore (#8837), and workspace filesystem boundary rejections for approved reads/writes (#8618, #8851) all point to friction in daemon/ACP mode.
- **Provider/config fragility** — repeated update prompts even after successful updates (#8504) and silent overwrite of custom model config on provider update (#8863) erode trust in the provider-switching flow.
- **Operational hygiene** — unbounded log growth with no rotation (#8860) and a security-relevant trust-evaluation bug allowing untrusted `.env` loads (#8643) reflect gaps in default safety/operability guardrails.
- **Bot/CI feedback loops** — the autofix-vs-review-pr cancellation loop (#8888) shows growing pains in the project's increasingly bot-driven review pipeline.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
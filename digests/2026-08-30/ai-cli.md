# AI CLI Tools Community Digest 2026-08-30

> Generated: 2026-08-30 12:32 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Digest Comparison — 2026-08-30

## 1. Ecosystem Overview

The AI CLI tooling space remains in a high-churn, issue-driven phase rather than a release-driven one — neither Claude Code nor OpenCode shipped a release in the last 24 hours, yet both trackers show intense community engagement. Claude Code's activity is concentrated in a small number of extremely high-engagement threads (one issue alone carries 5,083 👍 and 387 comments), reflecting a large, opinionated user base pushing on config standards, desktop-app stability, and cost/safety guardrails for autonomous agents. OpenCode, by contrast, shows a much higher PR-to-issue throughput, with an internal bot (`optamus-ai`) actively shipping concurrency, memory-leak, and security fixes same-day — a sign of a smaller but more engineering-velocity-oriented project currently absorbing the fallout of a recent UI redesign. Both ecosystems are converging on the same three pressure points: plugin/extensibility surfaces, provider/model routing flexibility, and trust in usage/cost accounting. This divergence in activity shape — community-volume-driven vs. commit-velocity-driven — is itself a useful signal for teams evaluating which tool's roadmap is more responsive to filed feedback.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | None | None |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | 5,083 👍 / 387 comments (#6235) | 44 👍 / 42 comments (#37012) |
| PRs updated (24h) | 2 (both minor: shebang fix, docs) | 10 (multiple substantive fixes) |
| PR substance | Low — no functional/perf changes | High — concurrency, OOM, security, UX fixes |
| Dominant issue theme | Config standardization, desktop stability, CVP/safeguard desync | UI/UX regression backlash, performance, billing accuracy |

Claude Code shows a **high-engagement, low-shipping** profile today; OpenCode shows a **lower-engagement, high-shipping** profile — almost inverse activity signatures.

## 3. Shared Feature Directions

- **Plugin/extensibility depth**: Claude Code wants finer-grained skill invocation control for plugins (#22345); OpenCode wants a plugin marketplace (#28696, 25👍), a UI intent channel for plugins (#6330), and slash-command interception (#28292). Both communities are pushing their tool from "agent runtime" toward "extensible platform."
- **Multi-session / multi-agent coordination visibility**: Claude Code requests first-party primitives for coordinating concurrent sessions sharing a working tree (#76727); OpenCode requests a live subagents sidebar (#41249) and exposed subagent IDs (#36761). Both signal that multi-agent workflows have outgrown ad-hoc tooling.
- **Cost/usage trust**: Claude Code has a runaway sub-agent recursion issue causing a $27.60 surprise charge with no depth limit (#69578); OpenCode has three independent billing-discrepancy issues (#41976, #33318, #38570) around cache-read costs and quota enforcement. Both ecosystems are flagging usage-metering opacity as a trust risk.
- **Model/provider routing controls**: OpenCode explicitly requests better model-routing UX (Copilot auto-routing #20235, per-model profiles #46153); Claude Code's parallel need shows up indirectly via the Claude.ai Projects integration ask (#2511) — both want more control over which model/context backs a session.

## 4. Differentiation Analysis

- **Target user & focus**: Claude Code's top issues skew toward *enterprise/compliance* concerns (CVP verification desync affecting organizations, #84352/#84689) and *desktop-app reliability* (Windows/macOS GPU crashes, always-on-top bugs) — consistent with a broader, less terminal-native user base including a GUI/desktop app. OpenCode's issues skew toward *power-user/self-hosted* concerns (headless `opencode serve` under systemd hitting OOM, #46035; CPU-bound TUI performance, #21470) — consistent with a more infra/terminal-centric audience.
- **Technical approach to problems**: OpenCode is visibly fixing root-cause concurrency bugs same-day (bounded `ProjectCopy.refresh` concurrency, deferred FFF init, shared MCP subprocesses across Locations) — a systems-engineering response pattern. Claude Code's open issues instead surface *prompt/system-behavior* concerns (hardcoded "bashFirst" system-prompt bias toward sed/heredoc over Edit/Write tools, #88041; stop-hook directives misused as authorization, #60705) — pointing to model-behavior governance as its harder problem, not just infrastructure bugs.
- **Standardization posture**: Claude Code faces direct pressure to interoperate with a competing convention (`AGENTS.md`, used by Codex/Amp/Cursor) rather than its own `CLAUDE.md` — a interoperability question OpenCode's digest doesn't surface at all, suggesting OpenCode is not yet a config-standard battleground in the same way.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger, more vocal community (single issues in the thousands of 👍/hundreds of comments) but today's low PR count (2, both trivial) suggests either a slower public-facing merge cadence or that most engineering work happens outside the tracked window/repo. Its issue backlog reads as mature-product friction: enterprise compliance, desktop packaging, and AI-safety/cost governance rather than core-feature gaps.
- **OpenCode** shows classic high-velocity open-source iteration: 10 PRs in a single day, several closing multi-week-old bugs (#37793, #37794, #37844) same-day via an internal automation bot. However, it's simultaneously absorbing significant community backlash from a recent UI redesign (#37012 is its top issue), indicating growth pains typical of a project scaling its UX surface faster than its user base can adapt.
- Net read: OpenCode is **iterating faster on infrastructure**, Claude Code is **fielding a heavier governance/trust burden** — both are signs of maturity, just along different axes.

## 6. Trend Signals

1. **Config/format interoperability is becoming a competitive battleground** — the `AGENTS.md` pressure on Claude Code (5K+ 👍) shows users want to write tool configuration once and use it across Claude Code, Codex, Amp, and Cursor. Tools that resist this risk community friction regardless of technical quality.
2. **Autonomous-agent cost governance is an emerging must-have, not a nice-to-have** — both tools have live issues about opaque or runaway billing (recursive sub-agent spawning, cache-read cost invisibility). Expect near-term feature pressure for hard spend caps and depth limits on agent recursion industry-wide.
3. **Desktop/GUI packaging is a new failure surface for CLI-first tools** — Claude Code's crash/always-on-top cluster shows that as these tools add desktop shells, they inherit an entirely new class of platform bugs (GPU drivers, auto-update races) distinct from their terminal-native roots.
4. **Plugin ecosystems are the next differentiation layer** — both tools' top feature requests point toward marketplace/extensibility investment; whichever ships a robust plugin surface first likely captures the "power user" segment building custom workflows on top of either CLI.
5. **Headless/server deployment is maturing as a use case** — OpenCode's `opencode serve` OOM issue and systemd-deployment concerns suggest these CLIs are increasingly run as long-lived services (not just interactive sessions), a usage pattern vendors should design and test for explicitly.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-30 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Ranked by community attention (comment volume / engagement) among open PRs.

| # | Skill / PR | Function | Status |
|---|---|---|---|
| 1 | [#1298 – skill-creator eval fix](https://github.com/anthropics/skills/pull/1298) | Fixes `run_eval.py` reporting a flat 0% recall for every skill description — the bug that has been silently poisoning the description-optimization loop (`run_loop.py`, `improve_description.py`). Also fixes Windows stream reading, trigger detection, and parallel workers. | OPEN |
| 2 | [#514 – document-typography skill](https://github.com/anthropics/skills/pull/514) | New skill for typographic QC on AI-generated documents: orphan word-wrap, widowed headers, numbering misalignment. Targets a defect class the community says affects "every document Claude generates." | OPEN |
| 3 | [#1615 – scnet-hpc skill](https://github.com/anthropics/skills/pull/1615) | Operates SCNet HPC clusters via profile-based SSH/Slurm — connection profiles, job generation, cluster discovery, compute-node guidance. Niche but active (opened 2026-08-20). | OPEN |
| 4 | [#538 – pdf skill case-sensitivity fix](https://github.com/anthropics/skills/pull/538) | Corrects 8 case-mismatched file references (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`) that break the official `pdf` skill on case-sensitive filesystems (Linux/CI). | OPEN |
| 5 | [#486 – ODT skill](https://github.com/anthropics/skills/pull/486) | Adds OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing — closing a gap next to the existing docx/pdf skills. | OPEN |
| 6 | [#210 – frontend-design clarity revision](https://github.com/anthropics/skills/pull/210) | Rewrites the official `frontend-design` skill so every instruction is actionable within a single conversation; tightens internal coherence. | OPEN |
| 7 | [#83 – skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Two meta-skills for the marketplace: automated 5-dimension quality scoring and a security analyzer for third-party skills — directly relevant to the trust-boundary concerns raised in Issue #492. | OPEN |
| 8 | [#541 – docx tracked-change ID collision fix](https://github.com/anthropics/skills/pull/541) | Fixes document corruption when the `docx` skill's tracked-change `w:id` collides with existing bookmark IDs (shared OOXML ID space). | OPEN |

**Notable pattern:** none of the top-ranked PRs are merged yet — the repo's official skills (`skill-creator`, `pdf`, `docx`) are accumulating unmerged community fixes for real correctness bugs, not just new-skill additions.

## 2. Community Demand Trends (from Issues)

| Theme | Signal | Representative Issue |
|---|---|---|
| **Trust & namespace security** | 43 comments, top issue by far | [#492 – community skills impersonating `anthropic/` namespace](https://github.com/anthropics/skills/issues/492) |
| **Org/team collaboration** | 16 comments, 8 👍 | [#228 – org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228) |
| **skill-creator eval tooling reliability** | 12 comments, 7 👍; echoed by PRs #1298, #1099, #1050 | [#556 – `run_eval.py` never triggers skills (0% rate)](https://github.com/anthropics/skills/issues/556) |
| **Skill persistence/stability** | 10 comments | [#62 – uploaded skills disappearing](https://github.com/anthropics/skills/issues/62) |
| **Agent memory/context compression** | 9 comments | [#1329 – compact-memory skill proposal](https://github.com/anthropics/skills/issues/1329) |
| **Authoring-guidance quality** | 8 comments | [#202 – skill-creator reads like docs, not an operational skill](https://github.com/anthropics/skills/issues/202) |
| **Agent governance/safety** | 6 comments | [#412 – agent-governance skill proposal](https://github.com/anthropics/skills/issues/412) |
| **Plugin/packaging duplication** | 6 comments, 9 👍 | [#189 – document-skills vs example-skills duplicate content](https://github.com/anthropics/skills/issues/189) |
| **Token/context budget discipline** | 4 comments | [#1487 – claude-api skill injects ~156k tokens eagerly](https://github.com/anthropics/skills/issues/1487) |
| **Output verification/quality gates** | 4 comments | [#1385 – Reasoning Quality Gate Pipeline proposal](https://github.com/anthropics/skills/issues/1385) |

The two dominant clusters are **trust/security around skill provenance** (namespace impersonation, permission boundaries) and **reliability of the skill-creator eval loop itself** — the latter is unusual in that it's a meta-problem (the tool that builds and scores skills is broken), which is pulling in multiple independent contributors.

## 3. High-Potential Pending Skills

PRs with sustained engagement that look positioned to land soon:

- **[#1298](https://github.com/anthropics/skills/pull/1298)** (skill-creator eval fix) — directly resolves [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) and consolidates two earlier Windows-specific patches ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)), all targeting the same root cause. Convergent independent fixes on a widely-hit bug is a strong merge signal.
- **[#538](https://github.com/anthropics/skills/pull/538)** and **[#541](https://github.com/anthropics/skills/pull/541)** (pdf/docx correctness fixes) — small, low-risk, reproducible-bug fixes to official skills; typically fast-tracked once triaged.
- **[#1607](https://github.com/anthropics/skills/pull/1607)** (claude-api retired-model cleanup) — addresses stale model metadata tied to a filed issue (#1603), routine maintenance likely to merge quickly.
- **[#83](https://github.com/anthropics/skills/pull/83)** (skill-quality-analyzer / skill-security-analyzer) — gains relevance given the unresolved trust-boundary debate in #492; could be adopted as part of a response to that issue.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy, self-verifying tooling** — securing skill provenance against namespace impersonation and fixing the broken eval/scoring loop that skill authors rely on to know their skills actually work — ahead of demand for any single new-skill capability.

---

# Claude Code Community Digest — 2026-08-30

## 1. Today's Highlights

No new releases landed in the last 24 hours, but issue activity remains heavy, dominated by two long-running threads: the multi-thousand-reaction [AGENTS.md standardization request (#6235)](https://github.com/anthropics/claude-code/issues/6235) and a wave of Windows/macOS desktop-app crash reports (GPU-process crashes, always-on-top bugs, auto-update failures). A second cluster of reports concerns Cyber Verification Program (CVP) approvals not propagating to cyber-safeguard blocks, affecting at least two organizations ([#84352](https://github.com/anthropics/claude-code/issues/84352), [#84689](https://github.com/anthropics/claude-code/issues/84689)). PR throughput was minimal — only two PRs touched in the window, both small (portable shebangs, a docs fix).

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235) — Feature Request: Support AGENTS.md** *(closed, 387 comments, 5083 👍)*. The single largest community ask: adopt the emerging `agents.md` standard used by Codex, Amp, Cursor, etc., instead of (or alongside) the Claude-specific `CLAUDE.md`. Massive engagement suggests strong demand for cross-tool config portability.
2. **[#84352](https://github.com/anthropics/claude-code/issues/84352) — CVP-approved org still receives cyber safeguard blocks** *(open, 165 comments)*. A previously approved Cyber Verification Program org is being re-blocked despite an approval email; the verification portal still shows "under review." Signals a backend sync issue between CVP approval state and the safeguard system.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — Model behavior: Stop-hook directive misused as authorization** *(closed, 147 comments)*. Detailed report of the model citing hook directives to justify unrequested actions and treating absence-of-evidence as evidence-of-absence — a trust/alignment concern raised independent of user-side CLAUDE.md rules.
4. **[#80444](https://github.com/anthropics/claude-code/issues/80444) — Windows desktop app: fatal GPU-process crash bricks MSIX install** *(open, 78 comments)*. Crash in the in-app Browser tab leaves the app unlaunchable until a full Repair; reproduced across driver versions.
5. **[#81698](https://github.com/anthropics/claude-code/issues/81698) — Windows desktop: GPU crash kills entire app and all sessions** *(closed, 67 comments)*. Related GPU-process stability issue causing full app termination, losing all active session state.
6. **[#2511](https://github.com/anthropics/claude-code/issues/2511) — Connect Claude Code to Claude.ai Projects** *(open, 49 comments, 399 👍)*. Long-standing request to let Claude Code pull knowledge-base docs directly from Claude.ai Projects rather than requiring manual copy-paste.
7. **[#85891](https://github.com/anthropics/claude-code/issues/85891) — Claude Desktop window always-on-top with no toggle (Windows)** *(open, 42 comments, 95 👍)*. Companion issue to the closed macOS report (#66516); no in-app setting exists to disable topmost behavior.
8. **[#47180](https://github.com/anthropics/claude-code/issues/47180) — Cowork scheduled tasks ignore "Always allow" permissions (macOS)** *(open, 33 comments)*. Permission prompts reappear on every scheduled Cowork run despite saved folder/tool grants, undermining unattended automation.
9. **[#69578](https://github.com/anthropics/claude-code/issues/69578) — Uncontrolled sub-agent recursive loop: ~800K tokens, $27.60 surprise charge** *(open, 15 comments)*. Sub-agents spawned children with no depth limit, burning tokens with near-zero output — a cost-control gap in the agents/skills system.
10. **[#88041](https://github.com/anthropics/claude-code/issues/88041) — Auto-mode "bashFirst" prompt pushes sed/heredoc edits over Edit/Write tools** *(open, 13 comments, 26 👍)*. Reporter traced a hardcoded system-prompt instruction in the CLI binary itself that discourages proper file-editing tools in favor of shell hacks.

## 4. Key PR Progress

Only two PRs saw activity in this window:

1. **[#35350](https://github.com/anthropics/claude-code/pull/35350) — fix(plugins): use portable shebangs in shell scripts** *(closed)*. Updates 11 plugin scripts from `#!/bin/bash` to `#!/usr/bin/env bash` so hooks work on systems (e.g. NixOS) where bash isn't at `/bin/bash`. Completes the partial fix started in #11029.
2. **[#61720](https://github.com/anthropics/claude-code/pull/61720) — docs: troubleshooting for Cowork queue not spawning follow-up turn** *(open)*. Documents a known race condition between the queue's post-turn handler and the rate-limit handler that causes queued messages to be delivered without triggering an assistant response. Closes #61718.

*(No other PRs were updated in the tracked window; PR throughput was unusually light today.)*

## 5. Feature Request Trends

- **Config standardization** — strong push to support `AGENTS.md` alongside/instead of `CLAUDE.md` for cross-tool interoperability (#6235).
- **Deeper Claude.ai integration** — requests to pull Projects knowledge bases directly into Claude Code sessions (#2511).
- **Editor/IDE parity** — batch diff review mode matching Cursor's agent UX (#31888); Word/.docx editing with track changes (#9631).
- **Multi-session coordination** — first-party primitives for coordinating multiple concurrently-running Claude Code sessions sharing a working tree, beyond DIY PreToolUse hooks (#76727).
- **Security/secrets tooling** — built-in secrets management with optional third-party integrations (#29910); finer-grained skill invocation control for plugins (`disable-model-invocation` parity, #22345).
- **Terminal ergonomics** — long-line/soft-wrap output option instead of hard-wrapped prose (#43113); passing image file paths as strings instead of auto-embedding (#15597).

## 6. Developer Pain Points

- **Desktop app stability on Windows** is the dominant complaint cluster: GPU-process crashes bricking MSIX installs, auto-update deploying into a running process and corrupting state, and repeated "Repair" cycles (#80444, #81698, #85199, #83932).
- **Always-on-top window bug** spans both Windows and macOS desktop apps with no user-facing toggle (#85891, #66516).
- **CVP/cyber-safeguard verification desync** — approved organizations continue to be blocked, with no working appeal path, frustrating enterprise users (#84352, #84689).
- **Permission/automation reliability** — Cowork scheduled tasks re-prompt for permissions every run despite "Always allow" settings, breaking unattended workflows (#47180).
- **Cost/runaway-agent risk** — recursive sub-agent spawning without depth limits led to unexpected five-figure-token, real-dollar overages, raising concerns about missing safety rails (#69578); separately, Max 20x plan upgrades aren't reflected in weekly rate limits (#79773).
- **Tooling instructions steering the model wrong** — a hardcoded system-prompt fragment nudges auto-mode toward `sed`/heredoc file edits instead of the safer Edit/Write tools (#88041).
- **Rendering regressions** — inline KaTeX math no longer renders in chat output, only block math works (#65632).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-30

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No new releases landed in the last 24 hours, but engineering activity remains heavy: three separate fixes from the `optamus-ai` bot address concurrency and blocking bugs in core subsystems (project refresh, file finder init, MCP subprocess sharing), while the community continues to push back hard on the new UI/UX direction (legacy layout, vertical tabs) and raises fresh concerns about CPU usage, billing/quota accuracy, and a usage-limit exploit via VPN rotation. Feature requests continue to cluster around plugin extensibility (marketplace, UI intent channel, slash-command interception) and configurability.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#37012](https://github.com/anomalyco/opencode/issues/37012) [FEATURE] Keep legacy layout option** — 42 comments, 44 👍. The single hottest issue in the tracker; users argue the new UI regresses on discoverability and workspace access compared to the old layout. Still open despite sustained pressure.
2. **[#14289](https://github.com/anomalyco/opencode/issues/14289) claude-opus-4.6 not supported for vision** — 20 comments. Closed, but model-capability gaps for newer Claude releases remain a recurring friction point.
3. **[#21470](https://github.com/anomalyco/opencode/issues/21470) OpenCode is heavily CPU-bound** — 16 comments, 17 👍. Reports that opencode's own overhead (not model/API latency) dominates session time — echoes the CPU-leak issue below and suggests a systemic performance problem.
4. **[#34743](https://github.com/anomalyco/opencode/issues/34743) ACP from Xcode ignores configured model** — 16 comments. The Xcode 27 ACP integration silently falls back to a default model instead of respecting `opencode.json`, undermining custom local-model setups (LMStudio/Ollama).
5. **[#13626](https://github.com/anomalyco/opencode/issues/13626) [FEATURE] Auto-sync projects in Web UI** — 15 comments, 15 👍. Cross-device project sync is a top usability ask for the Web client.
6. **[#36942](https://github.com/anomalyco/opencode/issues/36942) [FEATURE] Vertical tabs** — 14 comments, 26 👍 — one of the highest 👍 counts today. Directly related to the horizontal-tab regression in the new UI.
7. **[#33318](https://github.com/anomalyco/opencode/issues/33318) [URGENT] Zen paid balance still hits free usage limit** — 11 comments. Paying customers are being blocked by the free-tier daily cap despite having credits — a billing-trust issue.
8. **[#46035](https://github.com/anomalyco/opencode/issues/46035) MCP child processes accumulate on web-client reconnects until OOM** — new (opened 2026-08-28), 6 comments. Headless `opencode serve` deployments under systemd are running out of memory from leaked MCP subprocesses — directly related to PR #46210 below.
9. **[#41976](https://github.com/anomalyco/opencode/issues/41976) Go plan quota exhausted in 6 days vs. client-reported usage** — 8 comments. Cache-read billing appears invisible to the local cost meter, causing a large discrepancy between displayed and actual consumption.
10. **[#34344](https://github.com/anomalyco/opencode/issues/34344) Unlimited usage exploit via VPN rotation** — 6 comments. A disclosed abuse vector where IP-based free-tier rate limits reset on VPN rotation, allowing unlimited free model usage — a moderation/abuse concern maintainers should prioritize.

## Key PR Progress

1. **[#46244](https://github.com/anomalyco/opencode/pull/46244) fix: resolve vcs diff paths against worktree root** — Fixes untracked files incorrectly showing as "Binary file" when the session directory is a subdirectory of the git worktree.
2. **[#46238](https://github.com/anomalyco/opencode/pull/46238) fix(plugin): reject invalid tool arguments** — Rejects non-Zod custom tool argument schemas with a clear error instead of failing silently, closing #45532.
3. **[#40125](https://github.com/anomalyco/opencode/pull/40125) feat: per-MCP-server trust configuration** — Adds fingerprint pinning/caFile support so self-signed MCP certs can be trusted individually instead of globally disabling TLS verification — a meaningful security improvement.
4. **[#46234](https://github.com/anomalyco/opencode/pull/46234) feat(tui): add off mode for thinking blocks** — Extends `/thinking` to cycle `show → hide → off → show`, closing #40671.
5. **[#44729](https://github.com/anomalyco/opencode/pull/44729) fix(console): preserve usage reset boundaries** — Hardens usage-window accounting against delayed/out-of-order writes — directly relevant to the billing-discrepancy issues (#41976, #38570) above.
6. **[#46214](https://github.com/anomalyco/opencode/pull/46214) fix(core): bound ProjectCopy.refresh concurrency** — Fixes unbounded concurrent git subprocess spawning (S×R processes) that was causing CPU thrashing on large repos, closing #37793 — directly relevant to the CPU-usage complaints (#21470, #4804).
7. **[#46211](https://github.com/anomalyco/opencode/pull/46211) fix(core): defer FFF init to avoid blocking cold start** — Moves the native Fast File Finder scan (which could block 50+ seconds on large monorepos) off the synchronous startup path, closing #37794.
8. **[#46210](https://github.com/anomalyco/opencode/pull/46210) fix(mcp): share identical MCP subprocesses across Locations** — Deduplicates MCP subprocess spawning across Locations (previously multiplying by Locations × servers), closing #37844 — addresses the OOM issue in #46035.
9. **[#46226](https://github.com/anomalyco/opencode/pull/46226) fix(app): reflect global permission:allow in Settings toggle** — Fixes a UI/config sync bug where the auto-accept toggle didn't reflect a globally set `permission: "allow"`, closing #38154.
10. **[#46225](https://github.com/anomalyco/opencode/pull/46225) fix(app): encode server credentials as UTF-8** — Fixes broken `btoa()` encoding of non-ASCII server credentials, closing #46224.

## Feature Request Trends

- **Plugin/extensibility ecosystem**: multiple asks for a unified marketplace ([#28696](https://github.com/anomalyco/opencode/issues/28696), 25 👍), a generic UI intent channel for plugins ([#6330](https://github.com/anomalyco/opencode/issues/6330)), plugin interception of slash commands ([#28292](https://github.com/anomalyco/opencode/issues/28292)), and per-call MCP header hooks ([#28319](https://github.com/anomalyco/opencode/pull/28319)) — the community wants deeper, first-class plugin surface area.
- **UI configurability/reversion**: legacy layout ([#37012](https://github.com/anomalyco/opencode/issues/37012)), vertical tabs ([#36942](https://github.com/anomalyco/opencode/issues/36942)), configurable keybinds ([#43128](https://github.com/anomalyco/opencode/pull/43128)) — strong signal that the redesigned UI shipped with too little customization.
- **Model/provider routing controls**: Copilot auto model routing ([#20235](https://github.com/anomalyco/opencode/issues/20235), 29 👍), per-model profile GUI ([#46153](https://github.com/anomalyco/opencode/issues/46153)), native Fireworks AI login ([#46223](https://github.com/anomalyco/opencode/pull/46223)).
- **Multi-agent visibility**: live subagents sidebar ([#41249](https://github.com/anomalyco/opencode/issues/41249)) and exposing valid subagent IDs to the model ([#36761](https://github.com/anomalyco/opencode/issues/36761)) point to growing subagent workflows needing better tooling.

## Developer Pain Points

- **Performance/resource leaks**: recurring CPU-bound behavior ([#21470](https://github.com/anomalyco/opencode/issues/21470), [#4804](https://github.com/anomalyco/opencode/issues/4804)), disk-filling snapshot leaks ([#14811](https://github.com/anomalyco/opencode/issues/14811)), and MCP subprocess/OOM accumulation ([#46035](https://github.com/anomalyco/opencode/issues/46035)) — though several are being actively addressed in today's PR batch (#46214, #46211, #46210).
- **Billing/usage transparency**: three independent issues (#41976, #33318, #38570) report the client-side usage meter diverging significantly from actual billed consumption, particularly around cache-read costs — a trust-eroding pattern that PR #44729 partially targets.
- **Model/provider integration friction**: vision support gaps, ACP model-override bugs, LM Studio model listing issues, and OAuth token-exchange failures collectively suggest provider integrations are the most fragile part of the stack.
- **Platform-specific quirks**: Windows PowerShell version mismatch ([#17372](https://github.com/anomalyco/opencode/issues/17372)) and clipboard failures in browser-based VS Code environments ([#26459](https://github.com/anomalyco/opencode/issues/26459)) indicate uneven cross-platform polish.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
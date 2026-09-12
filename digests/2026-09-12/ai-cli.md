# AI CLI Tools Community Digest 2026-09-12

> Generated: 2026-09-12 11:26 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools — Cross-Tool Comparison Report
**Window:** 2026-09-12 | **Sources:** Claude Code (anthropics/claude-code), OpenCode (anomalyco/opencode)

## 1. Ecosystem Overview

The AI CLI/agentic coding tool space continues to iterate rapidly, with both incumbents and challengers shipping frequent point releases while wrestling with the operational realities of scaling agentic workflows to large user bases. Claude Code's activity today skews toward platform stability (Windows/Cowork regressions) and incremental extensibility (plugin evaluation tooling, output styles), reflecting a maturing product managing a broad, high-volume user base across multiple surfaces (CLI, Desktop, Remote Control, cloud). OpenCode's activity skews toward core reliability of its 2.0 rewrite — billing sync, tool-call correctness, and runaway-loop protection — typical of a fast-moving project mid-migration to a new architecture. Across both communities, a consistent theme is the tension between rapid feature delivery and the reliability/trust infrastructure (billing accuracy, session limits, loop protection) needed to support paid, production-grade usage. Multi-surface session/account continuity is emerging as a category-wide unsolved problem rather than a single-vendor gap.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| Total issue comments (top 10) | ~1,911 | ~99 |
| Release today | Yes — v2.1.269 | None |
| PRs merged/updated | 0 reported | 10 |
| Dominant issue theme | Windows/Cowork platform regressions, model behavior quality | 2.0 stability, billing sync |
| Highest single-issue engagement | #38335 — 848 comments / 476 👍 (Max plan limits) | #18001 — 👍43 (closed, `/loop` feature) |

*Note: comment/reaction volume reflects a much larger, more established Claude Code user base rather than a proportionally larger set of problems.*

## 3. Shared Feature Directions

- **Workflow automation / iterative agent loops**: OpenCode's `/loop` command request (#18001, closed but high-engagement) and Claude Code's Remote Control/cloud session continuity work point to shared demand for longer-running, less supervised agent execution.
- **Plugin/extensibility ecosystems**: Claude Code shipped `claude plugin eval` and is committed to "Function Hooks" (#91870); OpenCode is pushing a plugin-replaceable TUI footer (#46562) and evaluating adoption of the vendor-neutral **Agent Plugins standard** (#40993) — both ecosystems are actively building out third-party extensibility surfaces, with OpenCode explicitly reaching for cross-vendor standardization.
- **Session/account state fragmentation**: Claude Code's top feature asks (#18435 multi-account, #28791 CLI↔Desktop sync, #11455 handoff) mirror OpenCode's schema-migration session-loading bugs (#42170) and per-project config ergonomics asks (#36539) — both communities are struggling with session state that doesn't travel cleanly across surfaces or versions.
- **Provider/quota transparency**: Claude Code's Max-plan limit controversy (#38335) and OpenCode's Copilot-quota-exhausted-in-one-prompt regression (#48330) and billing-desync bugs (#37790, #48604) both reflect user distrust in usage/billing accounting under agentic (multi-call, high-token) workloads.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| **Feature focus** | Cross-surface polish (Desktop, Remote Control, cloud sessions), plugin governance/eval | Core 2.0 rewrite stability, TUI/terminal UX depth (RTL, mobile, SSH) |
| **Target users** | Broad consumer + pro developer base across native apps and CLI | Terminal-first power users, multi-provider/self-hosted model users |
| **Technical approach** | Centralized product surfaces (official Desktop app, Remote Control, cloud) with tight platform integration | Modular, provider-agnostic architecture (Requesty, Copilot, Console) with heavier reliance on community PRs for core fixes |
| **Reliability posture** | OS-integration fragility (Windows Cowork/Plan9, window management) | Application-layer fragility (loop protection, tool-call schema integrity, event-write amplification) |
| **Community input channel** | Predominantly issues (near-zero PR merges in window) — feedback-driven roadmap | Predominantly PRs (10 in 24h) — high external contribution velocity |

Claude Code's problems are largely **platform-integration failures** (OS updates breaking native app behavior), consistent with a vendor-controlled, multi-surface product. OpenCode's problems are largely **architectural growing pains** from its 2.0 migration (infinite loops, corrupted tool arguments, unbounded retries), consistent with an open, rapidly-iterating codebase absorbing a major internal rewrite.

## 5. Community Momentum & Maturity

Claude Code shows an order-of-magnitude larger engaged user base (single issues exceeding OpenCode's entire top-10 comment volume) but near-zero visible PR throughput in this window, suggesting most user-facing changes originate internally rather than through community contribution — typical of a closed-core product with an open issue tracker. OpenCode shows the opposite profile: lower absolute engagement but a dense, active external contributor pipeline (10 PRs touching core durability, TUI internationalization, and provider integrations in 24 hours), indicating a smaller but highly technical, contribution-driven community still in an active-rewrite phase. Claude Code's maturity shows in polish-oriented complaints (window behavior, prose quality); OpenCode's shows in foundational reliability work (loop protection, schema validation) more typical of a pre-1.0-stability project despite already being widely used.

## 6. Trend Signals

- **Agentic reliability is now a first-class concern**: both projects show real-world instances of runaway/uncontrolled agent behavior (OpenCode's 364-call infinite loop; Claude Code's usage-limit exhaustion complaints) — expect loop protection, circuit breakers, and usage transparency to become baseline expectations rather than differentiators.
- **Plugin ecosystem standardization is coming**: OpenCode's explicit interest in the Agent Plugins standard alongside Claude Code's own plugin eval/hooks investment suggests the market may converge on a shared, vendor-neutral packaging spec for skills/MCP servers within the next release cycles — worth tracking for teams building internal tooling to avoid vendor lock-in.
- **Multi-surface session continuity is a wedge opportunity**: neither tool has solved cross-device/cross-surface session and account state cleanly; a tool or middleware layer solving this well could capture significant developer goodwill.
- **Billing/quota trust is an emerging liability**: independent, high-engagement billing/quota-transparency complaints in both ecosystems (Stripe desync, Copilot quota exhaustion, Max plan limits) signal that usage metering UX, not just model quality, is becoming a competitive and reputational risk factor for paid AI CLI products.
- **OS-level fragility from native app strategies**: Claude Code's repeated Windows Cumulative Update breakage (Cowork/Plan9) highlights a structural risk of deep OS integration (mounts/shares) that terminal-native tools like OpenCode largely avoid by staying closer to the shell.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-12 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

| # | Skill / PR | Function | Status |
|---|---|---|---|
| 1 | [PR #1298 — skill-creator eval fix](https://github.com/anthropics/skills/pull/1298) | Fixes `run_eval.py` always reporting 0% recall (root cause of the eval loop being blind); also fixes Windows stream reading, trigger detection, and parallel workers | Open — addresses the repo's most cited bug ([#556](https://github.com/anthropics/skills/issues/556), 12 comments/7👍) |
| 2 | [PR #1734 — Detect orphaned docx comments](https://github.com/anthropics/skills/pull/1734) | Adds detection for orphaned comment anchors in DOCX manipulation | Open, minimal discussion so far |
| 3 | [PR #514 — document-typography skill](https://github.com/anthropics/skills/pull/514) | New skill for typographic QA on generated documents (orphan wraps, widow paragraphs, numbering misalignment) | Open, still under review since March |
| 4 | [PR #1742 — mcp-builder streamable_http fix](https://github.com/anthropics/skills/pull/1742) | Fixes `mcp-builder` for `mcp>=2.0.0`'s renamed `streamable_http_client` import and custom-header handling | Open — fixes [#1668](https://github.com/anthropics/skills/issues/1668) |
| 5 | [PR #1615 — scnet-hpc skill](https://github.com/anthropics/skills/pull/1615) | New skill for operating SCNet HPC clusters via SSH/Slurm profiles | Open, niche infra audience |
| 6 | [PR #538 — pdf skill case-sensitivity fix](https://github.com/anthropics/skills/pull/538) | Fixes 8 case-mismatched file references (`REFERENCE.md`→`reference.md`) breaking the PDF skill on case-sensitive filesystems | Open since March, small/safe fix |
| 7 | [PR #486 — ODT skill](https://github.com/anthropics/skills/pull/486) | New skill for creating/filling/converting OpenDocument (.odt/.ods) files | Open, moderate scope |
| 8 | [PR #210 — frontend-design clarity revision](https://github.com/anthropics/skills/pull/210) | Rewrites the official `frontend-design` skill for clearer, more actionable single-turn instructions | Open, editorial improvement to a core skill |

## 2. Community Demand Trends

Issue activity clusters around four themes, ranked by engagement:

- **Trust & security boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the single hottest thread in the repo) flags community skills impersonating official ones via the `anthropic/` namespace. No PR yet addresses this directly — it's the biggest open gap between demand and supply.
- **Eval/trigger reliability** — the `run_eval.py` 0% recall bug ([#556](https://github.com/anthropics/skills/issues/556), 12 comments) and the related `mcp-builder` evaluation harness bug ([#1390](https://github.com/anthropics/skills/issues/1390)) show strong appetite for a trustworthy skill-quality feedback loop, not just more skills.
- **Sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file passing; [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from overlapping marketplace plugins.
- **Meta/governance skills** — proposals like `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329)), `agent-governance` ([#412](https://github.com/anthropics/skills/issues/412)), and a "Reasoning Quality Gate" pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)) point to demand for skills that supervise *other* agent behavior rather than perform end-tasks.
- Smaller but recurring asks: Bedrock compatibility ([#29](https://github.com/anthropics/skills/issues/29)), exposing Skills as MCP servers ([#16](https://github.com/anthropics/skills/issues/16)), and context-window bloat from oversized skills like `claude-api` injecting ~156k tokens ([#1487](https://github.com/anthropics/skills/issues/1487)).

## 3. High-Potential Pending Skills

These PRs target issues with the most community engagement, making them likely near-term merges:

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — most comprehensive fix for the `run_eval.py` recall bug; supersedes two earlier partial attempts ([PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050)), all tied to the 12-comment/7👍 issue [#556](https://github.com/anthropics/skills/issues/556).
- **[PR #1602](https://github.com/anthropics/skills/pull/1602)** — bundles fixes for `mcp-builder` evaluation serialization and encoding issues, overlapping with the actively-discussed [#1390](https://github.com/anthropics/skills/issues/1390).
- **[PR #1742](https://github.com/anthropics/skills/pull/1742)** — small, well-scoped compatibility fix for `mcp>=2.0.0`; low risk, directly closes a filed issue ([#1668](https://github.com/anthropics/skills/issues/1668)).
- **[PR #539](https://github.com/anthropics/skills/pull/539) / [PR #541](https://github.com/anthropics/skills/pull/541)** — same author (Lubrsy706) shipping two independent DOCX/skill-creator correctness fixes (YAML validation, tracked-change ID collisions); pattern of a repeat, well-vetted contributor.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't for new Skills — it's for **making the Skill development and evaluation loop trustworthy**: the eval harness bug, MCP evaluation failures, and namespace-impersonation security gap all point to the same underlying need for verifiable, secure skill quality signals before the ecosystem scales further.

---

# Claude Code Community Digest — 2026-09-12

## 1. Today's Highlights

Claude Code shipped **v2.1.269**, adding `claude plugin eval` for scored, reproducible plugin evaluation and a new `/output-style` command for switching output styles (including over Remote Control and in cloud sessions). Community attention remains dominated by **Cowork/Windows regressions** tied to recent Windows cumulative updates (Plan9 mount failures), ongoing **Desktop always-on-top window** complaints on both macOS and Windows, and a very high-engagement thread alleging abnormally fast Max plan session-limit exhaustion. Feature demand continues to concentrate around **cross-surface account/session management** — multi-account switching, CLI↔Desktop history sync, and session handoff/continuity.

## 2. Releases

**v2.1.269**
- Added `claude plugin eval`: runs a plugin's eval suite against Claude Code, producing scored, reproducible results (JSON + HTML report); see `claude plugin eval --help`.
- Added `/output-style [name]` to list and switch output styles, including over Remote Control and in cloud sessions.

## 3. Hot Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Max plan session limits reportedly exhausted abnormally fast since March 2026 (CLI usage). 848 comments, 476 👍 — the single largest thread in this window; marked `invalid` but engagement suggests unresolved user frustration over usage-limit transparency.
2. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — Feature request to manage multiple Claude accounts in Desktop with profile switching. 186 comments, 802 👍 — very high reaction count signals strong latent demand for multi-account workflows.
3. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — Desktop fails to relaunch on Windows due to an orphaned process file lock. 178 comments, 88 👍.
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Closed report of model-side behavior patterns (citing `/goal` as authorization for unrequested actions, treating absence-of-evidence as evidence-of-absence). 173 comments — notable for being a detailed, structured model-behavior bug report rather than a typical crash/UX bug.
5. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Function Hooks" proposal to make plugins more powerful; Anthropic has committed to shipping this "in weeks." 161 comments, 95 👍 — active roadmap engagement.
6. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Claude 4.7–5.0 and Fable increasingly produce repetitive rhetorical tics / incoherent prose despite style instructions. 120 comments, 424 👍 — high 👍-to-comment ratio suggests broad silent agreement.
7. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** — Desktop (Windows 11) main window always-on-top with no toggle. 99 comments, 237 👍; companion issue to #89467 below — a persistent, unresolved UX complaint.
8. **[#92984](https://github.com/anthropics/claude-code/issues/92984)** — Cowork (Windows): all Plan9 shares fail after KB5124008; uninstalling the KB fixes it. 99 comments, 54 👍 — clear repro and root cause identified by the community.
9. **[#92958](https://github.com/anthropics/claude-code/issues/92958)** — Related Cowork/Windows breakage: September 2026 cumulative update breaks Plan9 share attach on both ARM64 and x64, confirmed via A/B rollback on five machines — strong evidence trail for the platform team.
10. **[#68780](https://github.com/anthropics/claude-code/issues/68780)** — Opus 4.8/5.0 reasoning degradation and performance regression reported as "urgent," including threats of consumer-protection action from an EU user. 38 comments, 35 👍 — reputational risk despite lower volume.

## 4. Key PR Progress

No pull requests were updated in the last 24 hours (0 items returned for this window).

## 5. Feature Request Trends

- **Cross-surface account & session continuity**: multi-account switching in Desktop (#18435), CLI↔Desktop history sync (#28791), session handoff/continuity (#11455), inter-session communication for multi-Claude workflows (#24798).
- **Window/UI behavior controls**: disabling always-on-top (#85891, #89467), disabling paste-text collapse (#23134), diff comparison against non-main branches (#23626).
- **Plugin/extensibility depth**: function hooks to expand plugin capability (#91870), plugin eval tooling (shipped in v2.1.269).
- **Platform-spec compliance**: XDG Base Directory support on Linux (#1455).
- **Remote/Cowork session management**: reconnecting to Remote Control sessions after navigating away (#28402).

## 6. Developer Pain Points

- **Windows Cowork instability tied to OS updates**: Plan9 mount/share failures repeatedly triggered by Windows cumulative updates (#92984, #92958, #93525), with community-sourced root causes and workarounds outpacing official fixes.
- **Desktop app window management**: always-on-top behavior with no disable option, affecting both macOS (#85891) and Windows (#89467), open for months without resolution.
- **Model behavior/quality concerns**: perceived reasoning and prose-quality regressions in recent Claude versions (#77136, #68780) generating high like-counts, indicating a broad but under-vocalized user base.
- **Desktop reliability on Windows**: relaunch failures from orphaned process locks (#42776) and installer failures from inconsistent package state (#49917) point to recurring Windows packaging/process-lifecycle fragility.
- **Fragmented session/account model**: the volume and 👍 count on multi-account and sync requests suggest the single-account, per-surface session model is a persistent friction point for users running Claude Code across CLI, Desktop, and mobile.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-12

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No new releases landed in the last 24 hours, but activity remained heavy across billing, the 2.0/v2 migration, and TUI polish. The most pressing thread is a cluster of "paid but insufficient balance" billing bugs on OpenCode Go/Console, alongside deeper 2.0-era stability issues (subagent infinite loops, corrupted tool-call arguments, event-write amplification). PR activity skews toward TUI/UX refinement (RTL support, mobile scrolling, terminal capability detection) and internal 2.0 durability/performance fixes.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#37790](https://github.com/anomalyco/opencode/issues/37790) — OpenCode Go subscription paid but workspace shows "Insufficient balance"** (20 comments) — Stripe payment succeeds but billing state doesn't sync, blocking paid usage entirely. High comment volume signals this is a recurring, unresolved billing pipeline bug.
2. **[#36942](https://github.com/anomalyco/opencode/issues/36942) — [FEATURE] Vertical tabs** (16 comments, 👍31) — Strong community demand to break from forced horizontal tabs, which limits visibility when managing many sessions.
3. **[#18001](https://github.com/anomalyco/opencode/issues/18001) — [FEATURE] `/loop` command for automated iterative task execution** (12 comments, 👍43, closed) — Highest-upvoted item in this batch; closed but with heavy engagement, suggesting either implementation or a maintainer decision worth following up on.
4. **[#37231](https://github.com/anomalyco/opencode/issues/37231) — Error from provider (Console Go): Upstream request failed** (10 comments, closed) — Widespread provider errors across CLI, desktop, and OpenChamber/VSCode integration despite normal usage limits.
5. **[#45442](https://github.com/anomalyco/opencode/issues/45442) — [2.0] Subagent infinite loop: ~50 min of identical tool calls, no loop protection** (8 comments) — Serious reliability/cost issue: 364 identical `grep` calls with no circuit breaker, causing uncontrolled token burn.
6. **[#17648](https://github.com/anomalyco/opencode/issues/17648) — Session processor retries indefinitely with unbounded exponential backoff** (7 comments, 👍6) — Structural resilience gap: no max retries or circuit breaker when upstream providers (e.g., GitHub Copilot) return transient errors.
7. **[#42170](https://github.com/anomalyco/opencode/issues/42170) — Desktop fails to load sessions: no such column: project_id** (6 comments) — Schema migration issue where a workspace table was replaced but `project_id` wasn't fully remapped, breaking session loading on 1.18.17.
8. **[#40993](https://github.com/anomalyco/opencode/issues/40993) — [FEATURE] Support the Agent Plugins standard (agent-plugins.org)** (6 comments, 👍12) — Request to adopt a vendor-neutral packaging spec for Agent Skills + MCP servers, positioning OpenCode within a broader multi-vendor ecosystem effort.
9. **[#48330](https://github.com/anomalyco/opencode/issues/48330) — [2.0] Copilot Legacy Plan fully consumed by a single prompt in opencode2** (6 comments) — Regression versus OpenCode 1: a 1500-request/month Copilot plan gets exhausted in one session under 2.0, hitting 429s.
10. **[#47902](https://github.com/anomalyco/opencode/issues/47902) — [2.0] Tool calls: arguments corrupt across calls, schema-invalid calls can execute** (4 comments) — Notable correctness/safety bug: corrupted `patch` arguments with injected serialization markers, and invalid schemas not being rejected before execution.

## Key PR Progress

1. **[#48638](https://github.com/anomalyco/opencode/pull/48638) — fix(core): eliminate durable event write amplification from turn diffs** — Fixes `SessionSummary.summarize` re-publishing full git patch text into the event table on every step-finish; directly addresses a durability/performance regression (see closed #48537).
2. **[#48630](https://github.com/anomalyco/opencode/pull/48630) — fix(opencode): list file commands without blocking on MCP connections** — Cuts `/command` latency from 5.6s to 0.65s by no longer waiting on all MCP servers before returning file-based commands.
3. **[#48632](https://github.com/anomalyco/opencode/pull/48632) — fix(tui): restore terminal capability detection over SSH** — Fixes color rendering when opentui misdetects SSH sessions, restoring correct terminal capability handling.
4. **[#48600](https://github.com/anomalyco/opencode/pull/48600) — fix(app): stabilize mobile timeline touch scrolling** — Fixes virtualized session text drifting significantly (500+ px) from touch input on iPhone during scrolling.
5. **[#43038](https://github.com/anomalyco/opencode/pull/43038) — fix(opencode): handle literal Windows archive paths** — Passes Windows paths via environment variables instead of PowerShell string interpolation, closing a path-handling bug (#43036).
6. **[#46562](https://github.com/anomalyco/opencode/pull/46562) — feat(tui): make the assistant-message footer a replaceable plugin** — Turns the `▣ mode · model · duration` footer into a plugin-replaceable component, improving TUI extensibility.
7. **[#48587](https://github.com/anomalyco/opencode/pull/48587) — feat(tui): native Arabic and RTL (bidi) support for prompts and messages** — Adds bidi text rendering to the TUI, closing four long-standing RTL-related issues (#38524, #40004, #39525, #32984); a companion PR (#48590) ports the same fix to the beta/opencode2 line.
8. **[#28973](https://github.com/anomalyco/opencode/pull/28973) — feat(provider): add Requesty model discovery from /v1/models** — Dynamically discovers approved models/routing policies from Requesty accounts instead of relying on a static model snapshot.
9. **[#48595](https://github.com/anomalyco/opencode/pull/48595) — test(server): guard MCP subprocess lifetime under instance HttpApi** — Adds test coverage for leaked MCP subprocesses from serve instances that are never disposed (#47727).
10. **[#48501](https://github.com/anomalyco/opencode/pull/48501) — feat(desktop): improve Console onboarding** — Makes OpenCode Console the primary path in first-run provider setup for Desktop.

## Feature Request Trends

- **UI/layout customization**: vertical tabs (#36942), resizable/hideable status panel (#24373), sidebar toggle command (#48614) — users want more control over screen real estate, especially on smaller terminals/screens.
- **Workflow automation**: `/loop` for iterative tasks (#18001), Claude Code-style dynamic workflows (#30308), long-term memory system with `/teach`/`/recall`/`/learn` (#48497) — growing appetite for more autonomous, stateful agent behavior.
- **Provider/ecosystem expansion**: Requesty model discovery (#28973), Muse Spark/Muse Code provider support (#41551), Agent Plugins standard adoption (#40993) — pressure to keep pace with the broader multi-vendor agent tooling ecosystem.
- **Session/config ergonomics**: custom session IDs (#17344), per-MCP-server trust configuration (#40111), combining global + shared workspace config (#36539) — requests for finer-grained control in multi-project/team setups.
- **Concurrency controls**: capping parallel subagents for resource-constrained (local model) setups (#27110, 👍32).

## Developer Pain Points

- **Billing/credits desync**: Multiple independent reports (#37790, #48604) of successful payments (Stripe, Alipay) not reflecting in workspace balance, blocking Go/Console usage — appears to be a systemic gap between payment processing and credit provisioning.
- **2.0/v2 stability regressions**: Subagent infinite loops with no loop protection (#45442), corrupted/schema-invalid tool call arguments (#47902), and unbounded retry backoff with no circuit breaker (#17648) point to reliability gaps introduced or exposed by the 2.0 rewrite.
- **Provider request errors**: Recurring "Upstream request failed" errors on Console Go across CLI/desktop/VSCode (#37231, #37815), and Copilot Legacy Plan quota exhausted by a single prompt under 2.0 (#48330) — provider integration reliability is a frequent complaint.
- **Migration/schema issues**: Desktop session loading broken by an incomplete `project_id` column migration (#42170) reflects friction from ongoing schema/architecture changes.
- **TUI resource/rendering issues**: TUI crashes from disk space exhaustion via file watchers (#48384) and RTL/bidi rendering gaps (now being addressed) reflect polish debt in the terminal UI layer.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
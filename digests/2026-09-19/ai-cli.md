# AI CLI Tools Community Digest 2026-09-19

> Generated: 2026-09-19 11:45 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Tools Community Digest
**Date: 2026-09-19**

## 1. Ecosystem Overview

The AI CLI tooling space is in an active convergence-and-hardening phase: cross-tool configuration standards (AGENTS.md) are being adopted rather than reinvented, and both major projects are simultaneously chasing extensibility (hooks/mods, plugins) while fighting stability regressions in their desktop surfaces. Claude Code is in a post-landmark-feature consolidation mode — having just closed its single most-requested issue in repo history — and is now shifting engineering focus toward UX polish (diff-pane behavior) and infrastructure cost optimization (server-side auto-mode routing). OpenCode, by contrast, is mid-crisis on provider reliability (free-tier Console errors spanning multiple client surfaces) while also pushing meaningful performance fixes into its rendering and session layers. Both communities show mature, high-signal issue trackers (100+ comment threads), suggesting these tools have crossed into daily-driver status for large developer populations. Overall, the sector's center of gravity is moving from "does it work" toward "does it fit my existing workflow and multi-account/multi-session setup."

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues surfaced (24h) | 10 (6 open / 4 closed) | 10 (9 open / 1 closed) |
| Key PRs updated (24h) | 8 (2 open / 6 closed) | 10 (all appear open/merged-track) |
| Releases shipped (24h) | 2 (v2.1.277, v2.1.278) | 0 |
| Top issue engagement | #6235 — 404 comments, 5.1k 👍 | #30086 — 54 comments, 30 👍 |
| Dominant issue theme | AGENTS.md landmark closure | Free-tier provider outage cluster |

Claude Code shows materially higher single-issue engagement (thousands of reactions vs. tens), consistent with a larger, more mature user base. OpenCode shows a higher PR-to-issue ratio today, suggesting more active in-flight development relative to community reporting volume.

## 3. Shared Feature Directions

- **Skills/config standardization**: Claude Code's `.agents/skills/` request (#16345) and OpenCode's inline `$skill-name` invocation request (#15617) both point to skills becoming a first-class, portable concept independent of any single tool.
- **Extensibility via hooks/plugins**: Claude Code's "Mods" hook system (#91870, 203 comments) and OpenCode's plugin subpath-export fixes (#49863) show both ecosystems racing to open up programmable extension points.
- **Session/account continuity across surfaces**: Claude Code's Desktop/Mobile multi-account requests (#18435, #36151) mirror OpenCode's session-recovery (#12393) and export-parity (#31453) gaps — both point to users operating across multiple devices/frontends and needing state to follow them.
- **Cost/billing transparency**: OpenCode's subagent-cost undercounting (#45417) and Go billing sync bug (#37790) parallel Claude Code's classifier-overhead billing change in v2.1.278 — cost visibility for agentic/multi-call workflows is a shared pressure point.

## 4. Differentiation Analysis

- **Focus**: Claude Code's engineering effort this cycle is concentrated on refinement (diff-pane UX, first-edit auto-open logic, gateway/enterprise routing) — signs of a product hardening around an established core. OpenCode's effort is concentrated on firefighting (provider outages, CPU/memory regressions, schema validation failures) — signs of a product still stabilizing its core reliability.
- **Target users**: Claude Code's issue set skews toward enterprise/gateway configurations (Bedrock, Vertex, Foundry, egress boundaries) and desktop power users. OpenCode's skews toward multi-provider/self-hosted flexibility (Console, Zen, Go, Bedrock Mantle) and third-party frontend integrations (MonoCode via ACP), suggesting a more provider-agnostic, integration-heavy user base.
- **Technical approach**: Claude Code is moving classifier/routing logic server-side to reduce client cost and complexity. OpenCode is doing the inverse in places — hardening client-side session/diff/snapshot handling and worker-thread stability — reflecting its more distributed, multi-frontend architecture.
- **Release cadence**: Claude Code shipped two versioned releases in the observed window; OpenCode shipped none but landed 10 PRs directly to trunk, suggesting a more continuous-delivery-style workflow versus Claude Code's tagged-release model.

## 5. Community Momentum & Maturity

Claude Code's community is larger and more deeply invested — reflected in the 5.1k 👍 / 404-comment AGENTS.md thread and multiple 100+ comment account-management threads — but a growing meta-complaint about bot-driven auto-closure of reproducible bugs (#87647) signals some triage friction that could erode trust if unaddressed. OpenCode's community is smaller in absolute engagement but highly reactive: four related free-tier failure issues opened within the same week indicates a fast bug-report-to-visibility loop, and the team is visibly landing fixes (10 PRs in 24h) at a pace suggesting a lean, fast-moving core team. Claude Code reads as the more mature, higher-stakes ecosystem; OpenCode reads as the more agile, still-stabilizing one.

## 6. Trend Signals

- **AGENTS.md has effectively become the de facto standard** for AI CLI project instructions — its adoption by Claude Code (following Codex, Amp, Cursor) closes the loop on cross-tool config fragmentation. Teams building on any of these tools can now standardize on a single instructions file.
- **Hooks/mods/plugins are the next battleground** — both tools are racing toward programmable extensibility, implying developers should expect a wave of third-party extensions and should design integrations with portability in mind.
- **Multi-account and multi-session state management is an unsolved, high-demand problem** across the ecosystem — vendors that solve this well will have a durable UX edge with professional/enterprise users juggling personal and work contexts.
- **Cost attribution for agentic/subagent workflows is emerging as a billing-trust issue** — as multi-agent and multi-call patterns become standard, expect more scrutiny on how tools report and bill for indirect/derived usage.
- **Desktop-app stability (not CLI stability) is the recurring weak point** for both tools — crash loops, orphaned processes, and renderer freezes suggest the GUI/desktop layer is lagging behind the core CLI engines in engineering maturity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-19 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Individual PR comment counts weren't available in the feed, so ranking below combines discussion signal (issue cross-references, sustained update activity, scope) and community relevance.

| # | Skill / PR | What it does | Status |
|---|---|---|---|
| [#1769](https://github.com/anthropics/skills/pull/1769) | Fix skill-creator trigger detection reporting 0% recall | Fixes the trigger-eval harness inside `skill-creator` that was silently reporting 100% precision / 0% recall for *every* skill regardless of description quality — directly resolves community bug [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) | Open, actively reviewed |
| [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): isolate trigger evals, handle Windows + runtime failures | Deeper follow-on hardening of the same trigger-eval subsystem: fixes race conditions between worker probes, `select()` failing on Windows subprocess pipes, and runtime errors being misclassified as non-triggers | Open, long-running (Jun–Sep) |
| [#1742](https://github.com/anthropics/skills/pull/1742) | fix(mcp-builder): support mcp>=2 streamable_http_client + custom headers | Fixes a breaking rename (`streamablehttp_client` → `streamable_http_client`) and header-config API change in `mcp>=2.0.0` that broke `mcp-builder`'s connection scripts; addresses [Issue #1668](https://github.com/anthropics/skills/issues/1668) | Open |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT (AI Watch Tester) — AI-powered E2E testing skill | Adds vision + browser-control driven end-to-end test generation and execution as a Skill; open since March, still receiving updates as of Sep 19 — the longest-running actively-maintained proposal in the queue | Open |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel skill for retro game development | Guides Claude through building/debugging retro games in Pyxel with deterministic headless runs and frame-level inspection; six months of sustained interest (Mar–Sep) | Open |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius skill | A pre-flight checklist for destructive/bulk operations (mass deletes, access revocation, batch mailing) — distinguishes "the query is right about rows" from "the operation is right about the world" | Open, new (Sep 17) |
| [#1765](https://github.com/anthropics/skills/pull/1765) | fix(office): decode redlining diffs as UTF-8 | Fixes DOCX/PPTX/XLSX redlining validators mangling non-ASCII text (e.g. Polish, CJK) on Windows/non-UTF-8 locales; closes [Issue #1707](https://github.com/anthropics/skills/issues/1707) | Open |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind — zero-cost multi-agent orchestration | Lets Claude Code delegate mechanical subtasks to headless opencode workers on free models while remaining the sole planner/reviewer/merger | Open |

## 2. Community Demand Trends

From the Issues queue, three clusters dominate:

- **Trust & namespace safety** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the single most-discussed item in the repo) flags community skills impersonating official Anthropic skills via the `anthropic/` namespace, exposing a permission trust-boundary risk.
- **Trigger reliability / eval tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and its fix ([#1769](https://github.com/anthropics/skills/pull/1769), [#1298](https://github.com/anthropics/skills/pull/1298)) show strong demand for a skill-invocation eval harness that actually works, since `claude -p` currently fails to trigger skills in testing.
- **Org/team distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for native org-wide skill sharing in Claude.ai, replacing manual `.skill`-file passing via Slack/Teams.
- **Context-window discipline** — [#1487](https://github.com/anthropics/skills/issues/1487) (156k-token eager injection) and [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills across plugins) both point to a demand for stricter token-budget and dedup hygiene in shipped skills.
- **Governance/safety skills** — [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal) and the new [#1776](https://github.com/anthropics/skills/pull/1776) blast-radius PR suggest emerging appetite for policy-enforcement and safety-pattern skills, not just productivity skills.

## 3. High-Potential Pending Skills

PRs showing sustained, recent update activity that suggests near-term merge:

- [#1769](https://github.com/anthropics/skills/pull/1769) — direct fix for a named community bug ([#556](https://github.com/anthropics/skills/issues/556)), narrow scope, likely fast-tracked.
- [#1742](https://github.com/anthropics/skills/pull/1742) — small, well-scoped dependency-compat fix tied to an open issue ([#1668](https://github.com/anthropics/skills/issues/1668)).
- [#1765](https://github.com/anthropics/skills/pull/1765) — targeted encoding bugfix with a clear repro and validation steps.
- [#822](https://github.com/anthropics/skills/pull/822) — six months of iteration and still updated same day as this report; likely converging.
- [#538](https://github.com/anthropics/skills/pull/538) / [#539](https://github.com/anthropics/skills/pull/539) / [#541](https://github.com/anthropics/skills/pull/541) — a trio of small, low-risk hardening fixes from the same contributor (Lubrsy706) to `pdf`, `skill-creator`, and `docx` skills.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't new Skills content — it's **trust and reliability infrastructure**: verifying skill authorship/namespace integrity, fixing the eval harness that's supposed to prove a skill actually triggers, and controlling token/context bloat, all ahead of any specific new-capability request.

---

# Claude Code Community Digest — 2026-09-19

## 1. Today's Highlights

The dominant theme today is **AGENTS.md standardization** — v2.1.277 shipped native AGENTS.md support (falling back from CLAUDE.md when absent), closing out one of the longest-running and highest-engagement feature requests in the repo's history ([#6235](https://github.com/anthropics/claude-code/issues/6235)). v2.1.278 followed with changes to auto-mode routing for API/Enterprise/Bedrock/Vertex/Foundry users, shifting classifier overhead server-side. Meanwhile, the community continues pushing on multi-agent extensibility (hooks/mods), desktop stability (macOS/Windows crash and freeze reports), and a cluster of unresolved multi-account/profile-switching requests.

## 2. Releases

- **v2.1.278** — Auto mode for Claude API, Enterprise, Bedrock, Vertex, Foundry, and gateway users now defaults to the server-side classifier, removing classifier-overhead billing (`CLAUDE_CODE_AUTO_MODE_SERVER=0` to opt out on Bedrock/Vertex/Foundry/gateways).
- **v2.1.277** — Native **AGENTS.md** support: projects without a CLAUDE.md now read AGENTS.md instead (configurable under "Project instructions" in `/config`; not yet available on Bedrock, Vertex, or Foundry). Also added `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` for gateway egress configurations.

## 3. Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235)** — *Support AGENTS.md* (CLOSED, 404 comments, 5.1k 👍). The single most-engaged request in the tracker; resolved by v2.1.277. A landmark case study in cross-tool standardization pressure (Codex, Amp, Cursor already supported it).
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — *Mods — make Claude 10x more extensible* (OPEN, 203 comments). Anthropic's own community update thread on function hooks; signals hooks/mods are shipping "in weeks."
3. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — *Multi-account switching in Claude Desktop* (OPEN, 192 comments, 815 👍). Long-standing pain point for developers juggling personal/work accounts.
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — *Model behavior: stop-hook authorization & absence-as-evidence patterns* (CLOSED, 187 comments). A detailed model-behavior report flagging systemic issues that user-side CLAUDE.md rules can't catch — worth monitoring even though closed.
5. **[#36151](https://github.com/anthropics/claude-code/issues/36151)** — *Multi-account switching in Claude Mobile without shared email* (OPEN, 184 comments, 731 👍). Mobile counterpart to #18435 — account management is clearly a top unmet need.
6. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — *Desktop fails to launch on Windows (orphaned Silo/Job Object)* (OPEN, 98 comments). Serious crash-recovery bug requiring logoff/reboot to fix.
7. **[#34255](https://github.com/anthropics/claude-code/issues/34255)** — *Remote Control auto-reconnect broken* (OPEN, 71 comments, 108 👍). Silent connection drops with no recovery path.
8. **[#59248](https://github.com/anthropics/claude-code/issues/59248)** — *Silent retention cleanup deletes session transcripts* (OPEN, 47 comments, tagged `data-loss`). High-severity trust issue — no warning, opt-in, or recovery for deleted transcripts.
9. **[#16345](https://github.com/anthropics/claude-code/issues/16345)** — *Support standard `.agents/skills/` directory* (OPEN, 27 comments). Natural follow-on to the AGENTS.md work; community wants skills discovery unified too.
10. **[#87647](https://github.com/anthropics/claude-code/issues/87647)** — *Over 6k "has repro" issues auto-closed since March 2026* (OPEN, 50 👍). Meta-complaint about triage/bot behavior potentially burying real bugs — worth watching for maintainer response.

## 4. Key PR Progress

1. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — `diff` pane now only auto-opens on first edit when there's an actual file to show, avoiding empty "No tracked changes" panes for out-of-repo/ignored/cross-worktree writes.
2. **[#95488](https://github.com/anthropics/claude-code/pull/95488)** (CLOSED) — Docked diff pane pre-reads the repo before opening so it renders filled state immediately instead of a "Loading diff…" flash.
3. **[#95476](https://github.com/anthropics/claude-code/pull/95476)** (CLOSED) — Fixes first-edit auto-open logic to only fire from the main loop with checkpointing enabled; also withdraws a stale pending-open state left by the engine.
4. **[#95423](https://github.com/anthropics/claude-code/pull/95423)** (OPEN) — Diff pane refetch now skips read-only shell commands (`ls`, `git status`, `cat`, grep) by checking the `isReadOnly` flag, reducing unnecessary refetches.
5. **[#95198](https://github.com/anthropics/claude-code/pull/95198)** (CLOSED) — Retypes `diff` mod's `openPane` return as `unknown` in preparation for a richer `$.ui.open` result object; no behavior change.
6. **[#95417](https://github.com/anthropics/claude-code/pull/95417)** (CLOSED) — `mods/agents-md`'s Read hook now respects `--bare`/`CLAUDE_CODE_DISABLE_ATTACHMENTS` to avoid attaching nested AGENTS.md when the engine attaches nothing.
7. **[#95409](https://github.com/anthropics/claude-code/pull/95409)** (CLOSED) — Introduces the `mods/agents-md` mod source (manifest, hooks, tests, README), mirroring the layout of `sec-default`, `diff`, and `telemetry` — the underlying implementation for AGENTS.md support.
8. **[#51452](https://github.com/anthropics/claude-code/pull/51452)** (CLOSED) — README rewrite: removes AI-writing-pattern filler, tightens headers, simplifies install instructions, fixes a broken npm badge.

*(Only 8 PRs were updated in the last 24h; all are included above.)*

## 5. Feature Request Trends

- **Cross-tool config standardization** — AGENTS.md ([#6235](https://github.com/anthropics/claude-code/issues/6235), [#31005](https://github.com/anthropics/claude-code/issues/31005)) and `.agents/skills/` ([#16345](https://github.com/anthropics/claude-code/issues/16345)) requests both push toward de-Anthropic-specific, ecosystem-shared conventions.
- **Account/profile management** — Multi-account switching on both Desktop ([#18435](https://github.com/anthropics/claude-code/issues/18435)) and Mobile ([#36151](https://github.com/anthropics/claude-code/issues/36151)) are top-voted, unresolved asks.
- **Extensibility via hooks/mods** — [#91870](https://github.com/anthropics/claude-code/issues/91870) shows strong demand for programmable function hooks beyond current plugin capabilities.
- **Accessibility** — [#70425](https://github.com/anthropics/claude-code/issues/70425) requests first-class screen-reader support (audio cues, heading discipline).
- **Multi-agent workflow tooling** — Requests for built-in git-worktree auto-sync across `--spawn worktree` sessions ([#77869](https://github.com/anthropics/claude-code/issues/77869)).

## 6. Developer Pain Points

- **Desktop stability on Windows/macOS**: orphaned processes blocking relaunch ([#53247](https://github.com/anthropics/claude-code/issues/53247)), always-on-top window bug, unsealed macOS installer rejected by Gatekeeper ([#70647](https://github.com/anthropics/claude-code/issues/70647)).
- **Data loss/trust concerns**: silent transcript deletion with no opt-out ([#59248](https://github.com/anthropics/claude-code/issues/59248)), memory/chat history orphaned by project folder renames ([#69752](https://github.com/anthropics/claude-code/issues/69752)).
- **Connectivity reliability**: Remote Control silently failing to reconnect ([#34255](https://github.com/anthropics/claude-code/issues/34255)), MCP tool calls freezing when a Desktop tab isn't visible ([#93133](https://github.com/anthropics/claude-code/issues/93133)).
- **Triage/bot frustration**: mass auto-closure of reproducible bug reports ([#87647](https://github.com/anthropics/claude-code/issues/87647)) is generating meta-complaints about maintainer responsiveness.
- **Git attribution consent**: recurring friction over `Co-Authored-By: Claude` being added without opt-out ([#47579](https://github.com/anthropics/claude-code/issues/47579)).
- **Memory leaks**: reports of OOM kills with 14–21GB anon-rss usage in v2.1.224 ([#84960](https://github.com/anthropics/claude-code/issues/84960)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-19

## Today's Highlights

The dominant story today is a wave of "free tier can only be used from within OpenCode" errors affecting the Console provider across Desktop, CLI, and third-party frontends (MonoCode), with at least four related issues opened this week. Alongside that, users continue to report severe performance regressions — high idle CPU usage and a renderer freeze/OOM crash loop in the Desktop app — while the engineering team is actively landing fixes in the session, plugin, and theming layers ahead of the 2.0.x line.

## Releases

None in the last 24h.

## Hot Issues

1. **[#30086 — High CPU usage in newer versions of OpenCode](https://github.com/anomalyco/opencode/issues/30086)** (54 comments, 30 👍) — Long-running regression where CPU load has spiked so much that users can no longer run multiple concurrent sessions; still open after months, suggesting the root cause hasn't been isolated.
2. **[#49433 — Error from provider (Console): free tier can only be used from within OpenCode](https://github.com/anomalyco/opencode/issues/49433)** (45 comments, 10 👍) — Widespread failure of the free-tier Console provider across all models; part of a cluster of related reports today.
3. **[#49580 — Free tier fails via MonoCode frontend with OpenCode backend](https://github.com/anomalyco/opencode/issues/49580)** (43 comments, 2 👍) — Same free-tier failure surfaced through a third-party ACP frontend, indicating the block isn't client-specific.
4. **[#37231 — Upstream request failed (Console Go)](https://github.com/anomalyco/opencode/issues/37231)** (29 comments, closed) — Persistent Console Go provider instability reported across CLI, desktop, and VS Code extension.
5. **[#37790 — Go subscription paid but workspace shows "Insufficient balance"](https://github.com/anomalyco/opencode/issues/37790)** (22 comments) — Billing/entitlement sync bug blocking paid users from accessing Go despite successful Stripe payment.
6. **[#12393 — How to unarchive a session in opencode-desktop](https://github.com/anomalyco/opencode/issues/12393)** (21 comments, 35 👍) — High-👍 UX gap: no way to recover an accidentally archived session; long-standing and still unresolved.
7. **[#31041 — Zen API CORS preflight 404s block browser clients](https://github.com/anomalyco/opencode/issues/31041)** (12 comments, 11 👍, closed) — Routing bug that broke all browser-based integrations against `/zen/v1/*` and `/zen/go/v1/*`.
8. **[#15617 — [FEATURE] Inline skill invocation using $skill-name](https://github.com/anomalyco/opencode/issues/15617)** (11 comments, 26 👍) — Popular request to allow skill invocation anywhere in a prompt, not just at message start.
9. **[#37546 — Web: no way to revert new layout, missing workspaces/worktrees](https://github.com/anomalyco/opencode/issues/37546)** (7 comments, 26 👍) — The forced "tabs on top" layout drops git-worktree/workspace support with no opt-out, a recurring complaint (see also #48958).
10. **[#45417 — Session cost excludes subagent cost](https://github.com/anomalyco/opencode/issues/45417)** (6 comments, 11 👍) — Cost reporting in TUI/`opencode stats`/`/export` undercounts spend for multi-subagent workflows, a billing-transparency concern.

## Key PR Progress

1. **[#48638 — fix: harden session diffs, snapshots, and write paths; cut worker-thread stalls](https://github.com/anomalyco/opencode/pull/48638)** — Fixes `SessionSummary.summarize` attaching full git patches to user messages and addresses worker-thread stalls under parallel agents.
2. **[#49945 — fix(session): surface drain failures + check @mention skill permissions](https://github.com/anomalyco/opencode/pull/49945)** — Corrects `terminal()` interrupt-cause classification and adds permission checks for @mention-invoked skills.
3. **[#43231 — feat: support Claude models on the Bedrock Mantle endpoint](https://github.com/anomalyco/opencode/pull/43231)** — Adds Claude access via Bedrock's Mantle endpoint through the Anthropic Messages API path (closed, not merged as-is).
4. **[#49943 — fix(tui): widen tab close target](https://github.com/anomalyco/opencode/pull/49943)** — Fixes mouse hit-testing so the full tab-close glyph area is clickable, not just one cell.
5. **[#49863 — fix(plugin): support package subpath exports](https://github.com/anomalyco/opencode/pull/49863)** — Treats bare subpaths like `opencode-pty/v2` as npm registry-resolvable, fixing plugin loading.
6. **[#49808 — fix(core): register compatible Responses provider](https://github.com/anomalyco/opencode/pull/49808)** — Registers the documented `openai-compatible/responses` provider that was missing from the runtime.
7. **[#48435 — refactor(app): avoid deep equality in timeline row reconciliation](https://github.com/anomalyco/opencode/pull/48435)** — Performance fix replacing expensive `Equal.equals` deep comparisons in timeline rendering — directly relevant to CPU/UI-freeze complaints above.
8. **[#49940 — fix(schema): default omitted capability tools for custom providers](https://github.com/anomalyco/opencode/pull/49940)** — Fixes schema validation failures for V1-migrated custom providers missing `capabilities.tools`.
9. **[#49937 — fix(theme): alias pre-2.0.9 text token names](https://github.com/anomalyco/opencode/pull/49937)** — Backward-compatibility aliasing for renamed theme tokens after the 2.0.9 rename (`text.subdued` → `text.muted`, etc.).
10. **[#49729 — feat(core): enforce Console-managed policies](https://github.com/anomalyco/opencode/pull/49729)** — Fixes the client silently dropping enforced Provider/Tool policy statements returned by Console's `GET /api/v2/config`.

## Feature Request Trends

- **Inline/flexible skill invocation** — mid-prompt `$skill-name` syntax (#15617, 26 👍) reflects demand for more natural skill composition.
- **Session/export parity between TUI and Desktop/Web** — `/export` missing from desktop (#31453) and cost accounting gaps (#45417) point to a push for feature parity across surfaces.
- **Workspace/worktree support in Web UI** — repeated asks to restore git-worktree-based workspace switching lost in the new layout (#37546, #48958).
- **Network flexibility** — built-in proxy auto-start/stop for restricted environments (#37993).
- **Localization** — i18n for the desktop app menu bar, starting with zh-CN (#35601).

## Developer Pain Points

- **Free-tier provider breakage** — the "can only be used from within OpenCode" error is today's most acute pain point, spanning Desktop, third-party frontends, and multiple recent versions (#49433, #49580, #49590, #49588, #49678).
- **Performance regressions** — high idle/active CPU usage (#30086, #26416) and Desktop renderer freezes/OOM crash loops (#43355, #36218) are eroding usability for power users running multiple sessions.
- **New layout disruption** — the forced "tabs on top" Web layout removing workspaces/worktrees with no rollback option is a recurring, high-👍 complaint (#37546, #48958).
- **Billing/entitlement friction** — paid Go subscriptions not reflecting correctly (#37790) and one model's usage limit blocking all other Go models (#49014) undermine trust in the paid tier.
- **Provider/model instability** — recurring upstream failures across Console Go and Zen (#37231, #48973) frustrate users relying on those endpoints for daily work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
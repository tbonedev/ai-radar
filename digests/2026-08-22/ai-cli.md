# AI CLI Tools Community Digest 2026-08-22

> Generated: 2026-08-22 07:27 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-08-22

## 1. Ecosystem Overview

The AI CLI tooling space continues to mature along two distinct axes: Claude Code is optimizing for enterprise trust and cost governance at scale, while OpenCode is in an intensive reliability-hardening phase driven by an active open-source contributor base. Both ecosystems show that "session doesn't silently die/cost too much" has become the dominant class of complaint as usage scales beyond early adopters into production and enterprise workflows. Community sentiment across both tools is shifting from feature requests toward operational trust — billing accuracy, session durability, and resource management dominate today's discussion over net-new capabilities. OpenCode's velocity is notably higher (two releases, ten PRs merged/updated in 24h) versus Claude Code's single release with zero PR activity, reflecting the structural difference between a closed-core product with periodic ships and a fast-moving open-source project with continuous contributor throughput.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked (24h digest) | 10 | 10 |
| Top issue comment volume | 133 (#84352, verification gap) | 133 (#20695, memory megathread) |
| Top issue reaction count | 339 👍 (#77136, model prose quality) | 134 👍 (#27167, `/goal` feature) |
| PRs updated/merged (24h) | 0 | 10 |
| Releases shipped (24h) | 1 (v2.1.239) | 2 (v1.18.20, v1.18.21) |
| Release focus | Cost transparency + enterprise renderer rollout | Provider/network reliability + Vertex routing |
| External contributor PRs | — | ≥4 of 10 tagged "contributor" |

## 3. Shared Feature Directions

- **Session/output reliability under provider stress**: Both communities report sessions that stop or degrade without clear cause — Claude Code's token-burn and quota-depletion threads (#42249, #85422) and OpenCode's silent-termination cluster (#41469, #34473, #38749, #32149) reflect the same underlying developer anxiety: "did my session actually finish, and what did it cost me?"
- **Cost/spend governance**: Claude Code users are requesting a runtime-enforced spend circuit breaker with per-source attribution (#85422); OpenCode users are less cost-focused but share adjacent billing friction (#36506, paid-tier Zen model failures). Cost transparency is emerging as a cross-ecosystem requirement, not a single-product complaint.
- **Fine-grained execution control**: Claude Code wants per-subagent reasoning-effort configuration (#43083); OpenCode wants the ability to unqueue in-flight messages (#4821) and hooks parity with Claude Code's `PreToolUse`/`PostToolUse`/`Stop` model (#12472) — both point to demand for more granular control over agent execution rather than coarse start/stop semantics.
- **Platform-specific stability gaps**: Both tools have unresolved OS-specific bugs — Claude Code's Windows desktop relaunch lock (#42776) and Linux TUI copy/paste breakage (#62699); OpenCode's Windows Bun segfault regression (#33742) and ARM64 OpenTUI/bun:ffi failures. Neither tool has closed the gap on non-primary-platform parity.

## 4. Differentiation Analysis

- **Target user and deployment model**: Claude Code is clearly oriented toward enterprise and regulated deployments — data-residency pricing, Bedrock/Vertex/Foundry rollout, cyber-safeguard verification portals — indicating a customer base with compliance and procurement constraints. OpenCode's activity (Modal sandbox gateway, ephemeral sessions, GitHub Actions bot triggers) targets power users and infrastructure-savvy developers building automation on top of the CLI, not enterprise compliance buyers.
- **Technical approach to reliability**: Claude Code's fixes are largely user-facing/billing (cost formula changes, renderer availability) with no visible core-engine PR activity in this window. OpenCode is shipping deep engine-level fixes — SSE event hardening, provider retry logic, reasoning-metadata preservation across errored turns — suggesting a more actively-refactored core relative to Claude Code's current cadence.
- **Extensibility posture**: OpenCode explicitly pursues Claude Code feature parity (hooks, CLAUDE.md/skills compatibility) as a stated roadmap item, positioning itself as an open alternative that absorbs proven UX patterns from the incumbent, while adding infrastructure Claude Code doesn't offer (remote sandbox gateway, ephemeral sessions).
- **Model-quality vs. infrastructure-quality complaints**: Claude Code's top-reaction issue (339 👍) is about model output quality (repetitive prose, tool-selection bias) — a complaint tied to the underlying model, not the CLI engineering. OpenCode's top-reaction issues are almost entirely about CLI-level engineering (memory leaks, disk-filling event tables, segfaults) — reflecting that OpenCode's pain points are self-inflicted and fixable by the maintainers, whereas Claude Code's are partly upstream of the CLI team.

## 5. Community Momentum & Maturity

OpenCode shows materially higher engineering momentum this cycle: two releases and ten active PRs in 24 hours, with meaningful external contributor participation (shell authorization hardening, skill-permission bypass, Modal gateway) signals a healthy, broad-based contributor pipeline typical of an actively-growing open-source project. Claude Code shows high community *engagement* (comment volumes on par with OpenCode, higher peak reaction counts) but zero visible PR throughput in the same window — consistent with a closed-core product where community energy is channeled into issue discussion rather than code contribution. Both projects have a single "megathread" issue absorbing scattered reports (Claude Code's #84352 verification gap, OpenCode's #20695 memory leaks) — a sign of maturity in triage practice, but also an indicator that both have a known, unresolved systemic issue significant enough to require thread consolidation.

## 6. Trend Signals

- **Cost and quota transparency is becoming a baseline expectation**, not a nice-to-have — both ecosystems have escalating, high-engagement threads about unexplained spend, and Claude Code has directly changed its pricing model in response. Tools that don't offer granular, attributable cost visibility risk losing enterprise trust as adoption scales.
- **Session durability under provider hiccups is the new reliability bar.** OpenCode's two-release sprint specifically targeting network-error/unknown-finish-reason handling shows this is now considered release-blocking, not a backlog item — expect other CLI tools to follow with similar retry/resume hardening.
- **Enterprise deployment surface is expanding fast for regulated environments** (Bedrock/Vertex/Foundry rollout, data-residency pricing tiers), suggesting AI CLI vendors are actively competing for enterprise procurement, which will keep compliance/verification-portal reliability under scrutiny.
- **Feature convergence toward a common CLI "hooks + skills" extensibility model** is underway, with OpenCode explicitly building toward Claude Code parity — developers evaluating tools long-term should expect increasing portability of custom automation across CLI ecosystems rather than lock-in to one tool's extension API.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data snapshot: 2026-08-22 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Ranked by sustained community attention (discussion duration, linked issues, and follow-on PRs targeting the same problem).

1. **[#1298 — skill-creator: fix `run_eval.py` 0% recall bug](https://github.com/anthropics/skills/pull/1298)**
   Fixes the skill-creator evaluation pipeline, which silently reported 0% recall for every skill description, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Also fixes Windows stream reading, trigger detection, and parallel workers. This is the consolidation fix for a widely-reproduced bug ([#556](https://github.com/anthropics/skills/issues/556), 12 comments, "10+ independent reproductions"). Status: **open**, active since June 2026.

2. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
   New skill targeting typographic quality control in AI-generated documents — orphan word wrap, widow paragraphs, numbering misalignment. Addresses a class of formatting defects that affect nearly every generated document. Status: **open**.

3. **[#568 — Add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)**
   A broad enterprise-platform skill covering ITSM, ITOM, ITAM/SAM, FSM, SPM/PPM, and Security Incident Response. Notable for its scope and for staying under active review the longest (opened March, still updated as of Aug 12). Status: **open**.

4. **[#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)**
   Adds OpenDocument (.odt/.ods) creation, template filling, and ODT-to-HTML parsing — filling a gap next to the existing docx/pdf skills. Status: **open**.

5. **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**
   A rewrite of the existing frontend-design skill to make instructions concretely executable within a single conversation rather than descriptive/aspirational. Status: **open**.

6. **[#83 — Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**
   Two meta-skills for scoring skill quality (structure, docs, examples) and auditing skill security — directly relevant to the namespace-trust concerns raised elsewhere in Issues (see below). Status: **open**, oldest PR in the top set (Nov 2025).

7. **[#541 — fix(docx): prevent tracked-change ID collision with bookmarks](https://github.com/anthropics/skills/pull/541)**
   Fixes document corruption caused by hardcoded low `w:id` values colliding with existing bookmarks in OOXML. A precise, well-scoped correctness fix. Status: **open**.

8. **[#723 — Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**
   Comprehensive testing skill: Testing Trophy philosophy, unit test patterns, React component testing with Testing Library. Status: **open**.

## 2. Community Demand Trends (from Issues)

- **Trust & namespace security** — by far the largest single discussion: [#492](https://github.com/anthropics/skills/issues/492) (43 comments) reports community skills impersonating official ones under the `anthropic/` namespace, a real trust-boundary risk for permission-granting users.
- **Team/org distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for native org-wide skill sharing in Claude.ai, replacing manual file-passing via Slack/Teams.
- **Reliable eval tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) is the root-cause report behind the wave of skill-creator eval/Windows-compat PRs (#1298, #1099, #1050).
- **Agent memory/state management** — [#1329](https://github.com/anthropics/skills/issues/1329), a proposed `compact-memory` skill for symbolic, token-efficient long-running agent state.
- **Skill quality & governance frameworks** — [#202](https://github.com/anthropics/skills/issues/202) (skill-creator too verbose/human-oriented), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline) — a recurring theme of wanting Claude's own output self-audited.
- **Context-window discipline** — [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills bloating context) and [#1487](https://github.com/anthropics/skills/issues/1487) (a single skill injecting ~156k tokens) both point to demand for stricter token budgets in bundled/marketplace skills.

## 3. High-Potential Pending Skills

PRs with strong signal to merge soon, based on redundant community effort converging on the same fix or tight, well-scoped diffs:

- **[#1298](https://github.com/anthropics/skills/pull/1298)**, **[#1099](https://github.com/anthropics/skills/pull/1099)**, **[#1050](https://github.com/anthropics/skills/pull/1050)** — three independent PRs all fixing skill-creator's Windows/eval bugs; convergence like this usually forces maintainer triage soon.
- **[#538](https://github.com/anthropics/skills/pull/538)** and **[#539](https://github.com/anthropics/skills/pull/539)** (same author, Lubrsy706) — small, precise correctness fixes to pdf/skill-creator validation; low review risk.
- **[#541](https://github.com/anthropics/skills/pull/541)** — docx corruption fix with a clear root-cause explanation, same author pattern as above.
- **[#1538](https://github.com/anthropics/skills/pull/1538)** — brings two skills back into spec compliance against `skills-ref validate`, the repo's own reference implementation; likely to be treated as a correctness bar rather than a discretionary feature.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trustworthy, verifiably-correct skill infrastructure** — reliable eval/trigger tooling, namespace/security integrity, and quality auditing — outweighing demand for any single new domain skill.

---

# Claude Code Daily Digest — 2026-08-22

## Today's Highlights

v2.1.239 shipped with a data-residency cost change (1.1× US-only-inference premium reflected in `/cost` and `--max-budget-usd`) and expanded the fullscreen renderer rollout to previously excluded enterprise deployments (Bedrock, Vertex, Foundry). Community activity is dominated by billing/plan-downgrade complaints and Fable 5 credit-attribution bugs, alongside a long-running high-comment thread on cyber-safeguard verification blocking approved organizations. No PRs were updated in the last 24h.

## Releases

**v2.1.239**
- Cost estimates (`/cost`, status line, `--max-budget-usd`) now factor in the 1.1× US-only-inference premium for data-residency workspaces.
- One-time fullscreen renderer offer extended to Bedrock, Vertex, Foundry and other setups previously excluded; new installs on these platforms now start with it enabled.

## Hot Issues

1. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved org still hit by cyber-safeguard blocks (133 comments, 22 👍). Verification Portal shows "Under review" despite a prior approval email — highest engagement issue today, signals a real gap between the verification backend and enforcement.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Model-behavior report on `/goal` stop-hook directives being cited as unauthorized-action justification (131 comments, closed). Detailed single-session writeup of model-side reasoning failures that the community found broadly applicable.
3. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — Desktop fails to relaunch on Windows due to an orphaned process file lock (128 comments, 63 👍, marked invalid). Persistent high engagement despite the invalid label suggests users still hit this regularly.
4. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Claude 4.7/4.8/5.0/Fable models increasingly produce repetitive rhetorical tics and incoherent prose despite explicit style instructions (59 comments, 339 👍 — highest reaction count today). A recurring model-quality complaint resonating widely.
5. **[#19649](https://github.com/anthropics/claude-code/issues/19649)** — Model over-uses Bash (`sed`/`grep`) instead of builtin Read/Grep tools even when well-aligned (45 comments, 101 👍). Long-running tool-selection behavior issue.
6. **[#42249](https://github.com/anthropics/claude-code/issues/42249)** — Extreme token consumption draining quota within an hour under normal usage (44 comments, 17 👍). Feeds into broader cost-transparency frustration.
7. **[#62699](https://github.com/anthropics/claude-code/issues/62699)** — Linux TUI text can't be copied via Ctrl+Shift+C or right-click (41 comments, 67 👍). Basic usability gap still unresolved.
8. **[#43083](https://github.com/anthropics/claude-code/issues/43083)** — Feature request for configurable reasoning-effort level per subagent (27 comments, 59 👍, closed). Strong demand for finer subagent cost/quality control.
9. **[#85422](https://github.com/anthropics/claude-code/issues/85422)** — Requests a runtime-enforced token-burn circuit breaker with per-source (hooks/plugins/subagents) attribution, not just warnings (18 comments). Directly related to #42249's cost concerns.
10. **[#24968](https://github.com/anthropics/claude-code/issues/24968)** — Accessibility request to make TUI duration verbs customizable (17 comments, 58 👍). Recurring a11y ask.

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Trends

- **Cost/spend controls**: Runtime-enforced spend caps with per-source attribution ([#85422](https://github.com/anthropics/claude-code/issues/85422)) building on existing cost-visibility gaps ([#42249](https://github.com/anthropics/claude-code/issues/42249)).
- **Subagent configurability**: Per-subagent reasoning-effort level ([#43083](https://github.com/anthropics/claude-code/issues/43083)) to trade off cost vs. quality independently of model choice.
- **Accessibility**: Customizable TUI duration verbs ([#24968](https://github.com/anthropics/claude-code/issues/24968)).
- **Rendering/UX in Desktop**: Mermaid diagram rendering inside the Claude Code tab of Claude Desktop ([#52517](https://github.com/anthropics/claude-code/issues/52517)).

## Developer Pain Points

- **Billing/plan reliability**: Multiple independent reports of Max plan silently reverting to Free mid-cycle or after payment ([#56895](https://github.com/anthropics/claude-code/issues/56895), [#56897](https://github.com/anthropics/claude-code/issues/56897), [#61339](https://github.com/anthropics/claude-code/issues/61339)) — a recurring, high-impact billing trust issue.
- **Fable 5 model-picker/usage inconsistencies**: `/model` shows Fable 5 as credits-only while `/usage` shows it plan-covered ([#79412](https://github.com/anthropics/claude-code/issues/79412), [#74051](https://github.com/anthropics/claude-code/issues/74051)), causing confusion over actual cost.
- **Cost/token consumption transparency**: Rapid, hard-to-explain quota depletion ([#42249](https://github.com/anthropics/claude-code/issues/42249)) and Opus 4.7/4.8 token usage regressing 2-3x after an update ([#64961](https://github.com/anthropics/claude-code/issues/64961)).
- **TUI ergonomics**: Copy/paste breakage on Linux ([#62699](https://github.com/anthropics/claude-code/issues/62699), [#22073](https://github.com/anthropics/claude-code/issues/22073)) remain unresolved despite significant reaction counts.
- **Model prose/behavior quality**: Widely-reacted complaint about repetitive tics and incoherent prose across recent model versions ([#77136](https://github.com/anthropics/claude-code/issues/77136), 339 👍) and persistent Bash-over-builtin-tool bias ([#19649](https://github.com/anthropics/claude-code/issues/19649)).
- **Desktop stability**: GPU process crashes on Browser tool use requiring full reinstall ([#82967](https://github.com/anthropics/claude-code/issues/82967)), and Cowork on Windows failing to mount project folders since a recent update ([#76187](https://github.com/anthropics/claude-code/issues/76187)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-22

## 1. Today's Highlights

Two patch releases (v1.18.20, v1.18.21) shipped in the last 24h focused on reliability: retrying network-error and unknown-finish-reason provider responses instead of silently truncating sessions, plus a Vertex AI multi-region routing fix. The community continues to grapple with long-standing memory leak reports (#20695, 133 comments) and an unbounded SQLite event-table growth bug (#33356) that has filled disks on long-lived instances. PR activity is heavy on core reliability (partial-provider-failure recovery, SSE event hardening, shell authorization) alongside desktop app polish (scroll anchoring, patch grouping, titlebar ownership).

## 2. Releases

**v1.18.21**
- Core: continue responses when a model reports an unknown finish reason instead of stopping early; route Vertex AI `eu`/`us` multi-region Gemini requests through REP endpoints
- Desktop: keep file search results visible while the next search loads; region fixes

**v1.18.20**
- Core: surface failed subagent tool calls with a resumable `task_id`; retry provider responses ending with `finish_reason: network_error`; retry additional network-error variants (`network-error`, `network_error`); surface resumable subagent failures instead of silently returning

Together these two releases form a coordinated push to stop sessions from silently dying on transient provider/network hiccups — directly related to several hot issues below (#41469, #34473, #38749).

## 3. Hot Issues

1. **[#20695 – Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (133 comments, 102 👍) — Central tracking thread for scattered memory-leak reports; maintainers are explicitly asking for heap snapshots rather than speculative fixes, signaling this is an actively-investigated, high-priority stability issue.
2. **[#27167 – Native session goals with `/goal`](https://github.com/anomalyco/opencode/issues/27167)** (73 comments, 134 👍) — Highest-reaction open feature request; proposes a persistent session goal/lifecycle primitive beyond custom slash commands.
3. **[#33742 – v1.17.10 Bun segfault on Windows](https://github.com/anomalyco/opencode/issues/33742)** (60 comments, 47 👍) — Regression causing native crashes on Windows; v1.17.9 is stable, suggesting a bisectable recent change.
4. **[#26063 – Tool execution aborted/terminated](https://github.com/anomalyco/opencode/issues/26063)** (32 comments) — Recurring abort issue with local model providers (LM Studio), overlapping with the network-error retry work in v1.18.20.
5. **[#785 – Disable streaming mode?](https://github.com/anomalyco/opencode/issues/785)** (31 comments, 38 👍) — Long-running request (since July 2025) for non-streaming support to work with proxies that don't support SSE streaming.
6. **[#4821 – Ability to unqueue messages](https://github.com/anomalyco/opencode/issues/4821)** (26 comments, 92 👍) — High-reaction UX gap: no way to cancel an over-corrected queued message once sent.
7. **[#33356 – Unbounded `event` table growth (13GB+)](https://github.com/anomalyco/opencode/issues/33356)** (23 comments) — SQLite event-sourcing table has no retention/compaction, filling disks on long-lived instances; a real operational risk for heavy users.
8. **[#31119 – "no such column: name" error](https://github.com/anomalyco/opencode/issues/31119)** (18 comments, 16 👍) — Likely a DB migration/schema-drift bug hitting users returning after a version gap.
9. **[#12472 – Native Claude Code hooks compatibility](https://github.com/anomalyco/opencode/issues/12472)** (18 comments, 39 👍) — Requests parity with Claude Code's `PreToolUse`/`PostToolUse`/`Stop` hooks, extending existing CLAUDE.md/skills compatibility.
10. **[#36506 – Paid OpenCode Zen models fail, free models work](https://github.com/anomalyco/opencode/issues/36506)** (16 comments) — Provider-routing/billing bug isolated to paid Zen model tier, potentially revenue-impacting.

## 4. Key PR Progress

1. **[#44002 – Recover partial provider failures](https://github.com/anomalyco/opencode/pull/44002)** (contributor) — Automatically recovers retryable provider-internal/rate-limit failures after partial model output, crossing durable eagerly-executed local tool results; directly addresses silent-stop issues like #41469 and #34473.
2. **[#44083 – Ignore unknown Anthropic SSE events](https://github.com/anomalyco/opencode/pull/44083)** — Fixes crashes when Anthropic adds new named SSE event types clients should ignore; closes #43765.
3. **[#44054 – Preserve reasoning metadata on errored turns](https://github.com/anomalyco/opencode/pull/44054)** — Fixes dropped `providerMetadata` during replay of errored assistant turns, needed for valid Anthropic conversation replay; closes #38620.
4. **[#44016 – Harden portable shell authorization](https://github.com/anomalyco/opencode/pull/44016)** (contributor) — Security hardening for the opt-in portable shell permission scanner to prevent uncertain shell input executing under a narrower saved approval.
5. **[#43884 – Allow explicitly referenced skills](https://github.com/anomalyco/opencode/pull/43884)** (contributor) — Lets `@skill`-referenced skills bypass permission assertions while unreferenced skills keep normal checks; propagates request-scoped action/resource context.
6. **[#43887 – Modal session gateway](https://github.com/anomalyco/opencode/pull/43887)** (contributor) — Adds an Effect-based gateway routing sessions/workspaces to Modal sandboxes, including credential snapshotting and a new `opencode gateway` command — significant new remote-execution infrastructure.
7. **[#43656 – OpenCode ephemeral sessions](https://github.com/anomalyco/opencode/pull/43656)** — Implements ephemeral (non-persisted) sessions as a core server concept; closes long-standing #4489.
8. **[#44079 – Install-dir override chain fix](https://github.com/anomalyco/opencode/pull/44079)** — Fixes the installer's documented four-level install-dir priority chain; closes #43772 (duplicate of #42974).
9. **[#43323 – Resolve Windows shells installed as app-execution aliases](https://github.com/anomalyco/opencode/pull/43323)** — Fixes `pwsh` silently falling back to PowerShell 5.1 when PowerShell 7 is installed via Store/MSIX; closes #41426.
10. **[#42047 – Allow configured bots to trigger GitHub Actions](https://github.com/anomalyco/opencode/pull/42047)** — Adds `allowed_bots` input so trusted GitHub App bots can trigger OpenCode workflows, closing a CI automation gap (#7103).

## 5. Feature Request Trends

- **Session lifecycle & management**: native session goals (#27167), ephemeral one-off sessions (now merged via #43656), session export to Markdown/JSON (#9387), archive/unarchive (#24153), auto-generated titles (#30926).
- **Claude Code parity**: hooks compatibility (#12472) builds on existing CLAUDE.md/skills support, reflecting sustained demand to mirror Claude Code's extensibility model.
- **Queue/interrupt control**: unqueue messages (#4821) and graceful handling of queued messages after interrupt (#5333) point to a broader need for finer control over in-flight/queued prompts.
- **Platform reach**: mobile/web UI (#10288, 95 👍) is one of the highest-reaction asks, indicating desire to extend beyond the terminal-first design.
- **Provider/model coverage**: requests like GLM-5.2 support (#32172) show continued pressure to keep pace with new model releases.

## 6. Developer Pain Points

- **Silent session termination**: multiple independent reports (#41469, #34473, #38749, #32149) describe sessions stopping without error on empty/unknown-finish-reason LLM responses — the v1.18.20/21 retry logic and PR #44002 are direct responses, but the volume of duplicate reports suggests this remains the top reliability complaint.
- **Resource growth/leaks**: memory leaks (#20695) and unbounded SQLite event-table growth (#33356) both point to long-running-session resource management as an unresolved operational burden.
- **Platform-specific crashes**: Windows-specific issues recur — Bun segfault regression (#33742), ARM64 OpenTUI/bun:ffi failures (#19130), and pwsh alias resolution (fixed in #43323) — suggesting Windows support needs more systematic testing.
- **Auth/provider friction**: repeated API key prompts despite stored credentials (#33775) and paid-tier Zen model failures (#36506) indicate rough edges in provider/auth state management.
- **Subagent/permission gaps**: nested subagent permission requests silently hang (#13715), and subagent tool-call failures were previously non-resumable (addressed in v1.18.20) — permission/session propagation across subagent boundaries is a recurring source of bugs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
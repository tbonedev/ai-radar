# AI CLI Tools Community Digest 2026-09-02

> Generated: 2026-09-02 11:55 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Ecosystem Comparison — 2026-09-02

## 1. Ecosystem Overview

The AI CLI landscape continues to bifurcate between commercially-backed, single-vendor tools (Claude Code) and open, multi-provider aggregators (OpenCode). Both ecosystems are past the early-adopter phase and now show classic maturity symptoms: large legacy issue backlogs, recurring regressions tied to rapid model rollouts, and community pressure for better cost/resource governance. Model churn — new Claude/Opus/Fable and Bedrock GPT-5.6 releases — is a persistent source of compatibility breakage on both sides, rather than a one-time migration cost. Today's activity shows a split in engineering cadence: Claude Code shipped stability patches with very low PR throughput, while OpenCode combined a smaller release with a high-velocity day of merged performance and reliability fixes. Overall, the two ecosystems are converging on the same pain points — session/state durability, cost transparency, and provider/model reliability — while diverging sharply on how fast fixes ship.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases today | 2 patches (v2.1.258, v2.1.257) | 1 patch (v1.18.26) |
| Release scope | macOS 12 launch fix, remote/scheduled session crash fix, new default Fable 5.1 model, time-format settings | Claude 5 stale-thinking-block tolerance, Bedrock GPT-5.6 reasoning fix, Bedrock reliability, tool-timing fix |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | 843 comments / 476 👍 (#38335) | 128 comments / 119 👍 (#4283) |
| Highest 👍 issue | 409 👍 (#77136, model quality) | 225 👍 (#6231, model auto-discovery) |
| PRs updated (24h) | 3 (mostly trivial/docs) | 10 (multiple merged perf/reliability fixes) |
| PR substance | 1 changelog typo fix, 1 diagnostic script, 1 unreviewed community plugin | 6+ shipped fixes: memory/CPU perf, timeout hardening, config expansion, UI features |

**Read:** OpenCode is iterating faster on code (10 substantive PRs vs. 3 low-impact ones), while Claude Code's community activity is an order of magnitude larger by volume but concentrated in unresolved billing/access disputes rather than code review throughput.

## 3. Shared Feature Directions

- **Session/state durability under environment change** — Claude Code wants session deletion and configurable data directories (#13514, #57998); OpenCode has a 7-issue duplicate cluster on sessions breaking when project folders move/rename (#23248 and peers). Both point to session state being too tightly coupled to volatile local paths/IDs.
- **Cost and resource governance** — Claude Code users are requesting a runtime token-burn circuit breaker with per-source spend attribution (#85422); OpenCode users are flagging unbounded SQLite growth (#33356) and idle CPU spin during backoff (#19466). Different resources, same underlying ask: bound and make visible the tool's runtime footprint.
- **Model-compatibility edge cases post-upgrade** — Claude Code's Fable 5 rollout caused silent Opus downgrades and credit-demand bugs (#79337); OpenCode's Bedrock/Copilot integrations hit "assistant message prefill" and stale-thinking-block failures fixed only in today's patch. Both ecosystems show new-model rollouts as a recurring reliability tax.
- **Safety-net reliability for agentic tool use** — Claude Code's Auto Mode bashFirst prompt silently breaks `/rewind` (#88041/#87575); OpenCode's non-interactive `opencode run` hangs or silently exits 0 on rejected tool calls (#38723, #36413). Both are trust-critical automation/checkpointing failures rather than cosmetic bugs.

## 4. Differentiation Analysis

- **Target user & business model**: Claude Code's top-volume issues are billing/entitlement disputes (Max plan limits, CVP org verification, post-payment account disablement) — symptomatic of a metered commercial product with enterprise customers. OpenCode's issues skew toward configuration flexibility and self-hosted operational concerns (DB size, provider auto-discovery) — symptomatic of an open, self-managed, multi-provider tool.
- **Technical approach**: Claude Code is a single-vendor, tightly integrated agent with its own model family (Fable) and an "Auto Mode" system prompt strategy under active scrutiny for tool-choice design flaws. OpenCode is explicitly provider-agnostic, investing in auto-discovery for OpenAI-compatible endpoints (LM Studio, Ollama, llama.cpp) and juggling Bedrock/Copilot/Claude quirks simultaneously — a broader compatibility surface with correspondingly more provider-specific edge-case bugs.
- **Platform focus**: Claude Code's non-billing bugs skew toward OS-level severity (macOS kernel zone leaks, macOS 12 launch regressions), suggesting deep system-level agent execution. OpenCode's engineering effort today concentrated on desktop app performance (transcript caching, models.dev snapshot deduplication, timeline rebuild costs) — UI/resource efficiency rather than OS-level integration.
- **Extensibility**: OpenCode is visibly building out a plugin/skill permission model (PRs #46530, #46800) and sandboxed browser tooling (#44838), positioning itself as an extensible platform. Claude Code's extensibility signal today is a single unreviewed community-contributed governance plugin — extensibility appears more community-driven than roadmap-driven.

## 5. Community Momentum & Maturity

Claude Code has the larger, more vocal community by an order of magnitude (843 vs. 128 comments on the top issue), but that volume is dominated by unresolved trust issues (billing, access) with a maintainer-labeled `invalid` status on the largest thread — a sign of friction between user expectations and support capacity. Its PR throughput (3/day, mostly trivial) suggests the core codebase isn't the community's primary point of leverage; most engagement is issue-tracker advocacy rather than code contribution.

OpenCode shows a more classic open-source maturity pattern: lower peak engagement per issue but substantially higher code velocity, with 10 PRs merged in 24 hours spanning real performance and reliability work. Its "hot issues" also skew toward a single large duplicate-cluster problem (project path fragility) rather than many unrelated top complaints, suggesting the team has clearer visibility into its top reliability gap even if it isn't fully fixed yet.

## 6. Trend Signals

- **Cost/resource governance is becoming a first-class feature request**, not just a nice-to-have — both ecosystems show explicit asks for circuit breakers, spend attribution, and bounded local storage, reflecting industry-wide anxiety about unbounded agentic token/resource consumption.
- **Checkpointing and session-safety features (rewind, session identity) are now trust infrastructure.** Bugs that silently defeat them are drawing outsized attention relative to their comment counts, signaling that power users treat these as load-bearing safety mechanisms, not conveniences.
- **Multi-provider flexibility is a competitive axis.** OpenCode's investment in provider auto-discovery and broad model compatibility contrasts with Claude Code's vertically-integrated model strategy — expect continued divergence between "open aggregator" and "vertically integrated" CLI agent strategies.
- **Billing/entitlement enforcement is an emerging risk for commercial AI CLI vendors.** Claude Code's top three issues by volume are all payment/access related; as usage-based limits tighten, expect more scrutiny and reputational risk around metering transparency industry-wide.
- **Model-rollout compatibility debt is now routine, not exceptional.** Both tools shipped patches today specifically to patch behavior broken by upstream model changes (Fable 5.1, Bedrock GPT-5.6, Claude 5 thinking blocks) — teams building on foundation models should budget ongoing compatibility maintenance as a fixed cost, not a one-time integration expense.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-02 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

| # | Skill / PR | Author | Status | What it does | Discussion highlight |
|---|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | MartinCajiao | OPEN | Fixes `run_eval.py` reporting a flat 0% recall for every skill description, which was silently corrupting the description-optimization loop (`run_loop.py`, `improve_description.py`). Also patches Windows stream reading, trigger detection, and parallel workers. | Consolidates and resolves a bug independently reproduced 10+ times, referenced directly by [Issue #556](https://github.com/anthropics/skills/issues/556). Effectively a foundational fix for the skill-authoring tooling itself. |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | PGTBoos | OPEN | New skill for typographic QC on AI-generated documents — catches orphan word-wrap, widowed section headers, and numbering misalignment. | Targets a defect class ("every document Claude generates") users rarely think to ask about explicitly, making it a candidate for default-on document tooling. |
| [#1615](https://github.com/anthropics/skills/pull/1615) | `scnet-hpc` | lql341 | OPEN | Skill for operating SCNet HPC clusters via profile-based SSH/Slurm workflows — connection, partition, module, and accelerator guidance plus job generation. | Example of the domain-specific/infrastructure-operator skill category expanding beyond consumer productivity use cases. |
| [#538](https://github.com/anthropics/skills/pull/538) | `pdf` case-sensitivity fix | Lubrsy706 | OPEN | Fixes 8 case-mismatched file references (`REFERENCE.md`/`FORMS.md` vs. actual lowercase files) that break the skill on case-sensitive filesystems (Linux/CI). | Small, mechanical, high-confidence fix — the kind of PR maintainers can merge with minimal review overhead. |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | GitHubNewbie0 | OPEN | Adds OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing — extends document format coverage beyond DOCX/PDF. | Fills a gap in the official document-skills family; format-parity requests are a recurring theme in adjacent issues. |
| [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` clarity revision | justinwetch | OPEN | Rewrites the frontend-design skill so every instruction is actionable within a single conversation turn, tightening internal coherence. | Reflects a broader push toward "instruction density" over prose — skills read more like executable checklists than documentation. |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | eovidiu | OPEN | Two meta-skills for the marketplace: one scores skill quality across 5 weighted dimensions (structure, docs, examples, resources), the other audits security posture. | Meta-tooling that could become the de facto gatekeeper for marketplace submissions, directly addressing the trust concerns raised in [Issue #492](https://github.com/anthropics/skills/issues/492). |
| [#541](https://github.com/anthropics/skills/pull/541) | `docx` tracked-change ID collision fix | Lubrsy706 | OPEN | Fixes document corruption caused by hardcoded low `w:id` values colliding with existing bookmarks/comments in OOXML's shared ID space. | Root-caused correctly (shared ID namespace across bookmarks/changes/comments/move-ranges) — a correctness fix rather than a feature add. |

## 2. Community Demand Trends (from Issues)

- **Trust & namespace security** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the most-discussed issue by far) flags community skills impersonating the `anthropic/` namespace, a trust-boundary risk for users granting elevated permissions. This is the ecosystem's dominant unresolved concern.
- **Reliable skill triggering** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) reports `claude -p` never triggering skills/commands during evaluation, undermining confidence in the description-optimization workflow; directly feeds the fix in PR #1298.
- **Org/team distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests native org-wide skill sharing in Claude.ai instead of manual `.skill` file passing via Slack/Teams.
- **Context-window economics** — [#1487](https://github.com/anthropics/skills/issues/1487) (a single skill injecting ~156k tokens) and [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder evaluation harness fabricating tool errors) show growing sensitivity to token cost and evaluation correctness as skills scale in complexity.
- **Duplicate/plugin packaging hygiene** — [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — overlapping content between `document-skills` and `example-skills` plugins bloats context with duplicates.
- **Quality/governance meta-skills** — [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory notation), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance), and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline) point to demand for skills that govern *other* skills/agents — audit, calibration, and memory-compression layers.
- **Platform/integration gaps** — smaller but persistent asks: Bedrock compatibility ([#29](https://github.com/anthropics/skills/issues/29)), exposing skills as MCP servers ([#16](https://github.com/anthropics/skills/issues/16)), and format-fidelity issues like whitespace reformatting in docx ([#12](https://github.com/anthropics/skills/issues/12)).

## 3. High-Potential Pending Skills

PRs most likely to merge soon are concentrated in **bug fixes to existing official skills** rather than net-new submissions — lower review risk, clear root cause, and often tied to an open issue:

- [#1298](https://github.com/anthropics/skills/pull/1298) — resolves the eval-loop 0%-recall bug tracked in Issue #556; high leverage since it unblocks the entire description-optimization workflow.
- [#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541) — three small, well-scoped Lubrsy706 fixes to `pdf`/`docx`/`skill-creator` (case sensitivity, YAML validation, ID collisions).
- [#1099](https://github.com/anthropics/skills/pull/1099) and [#1050](https://github.com/anthropics/skills/pull/1050) — independent Windows-compatibility fixes for `skill-creator`'s `run_eval.py`, converging on the same root problem as #1298.
- [#1607](https://github.com/anthropics/skills/pull/1607) — timely `claude-api` update marking four retired model IDs, tied to model-lifecycle accuracy.
- [#1602](https://github.com/anthropics/skills/pull/1602) — broad reliability sweep (serialization, benchmark metrics, encoding) across the evaluation tooling.

Net-new skill PRs (`document-typography` #514, ODT #486, `scnet-hpc` #1615, ServiceNow #568) remain open longer, consistent with maintainers prioritizing correctness of existing official skills over expanding scope.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability of the skill-authoring/evaluation pipeline itself** — namespace impersonation ([#492](https://github.com/anthropics/skills/issues/492)) and a broken `run_eval.py` trigger-detection loop ([#556](https://github.com/anthropics/skills/issues/556), [#1298](https://github.com/anthropics/skills/pull/1298)) are drawing far more sustained engagement than any individual new-skill proposal.

---

# Claude Code Community Digest — 2026-09-02

## Today's Highlights

Two patch releases landed today: v2.1.258 fixes a macOS 12 launch regression and a remote/scheduled session crash tied to permission-approval re-sends, while v2.1.257 shipped **Claude Fable 5.1** as the new default Fable model (1M context, $10/$50 per Mtok) alongside configurable time-format settings. Community attention remains dominated by long-running billing/access disputes (Max plan session limits, CVP-approved orgs still hitting cyber safeguards) and a cluster of new reports that Auto Mode's system prompt pushes the model toward `sed`/heredoc/Bash file edits instead of the Edit/Write tools — silently breaking `/rewind`.

## Releases

- **[v2.1.258](https://github.com/anthropics/claude-code/releases/tag/v2.1.258)** — Fixed Claude Code failing to launch on macOS 12 (Monterey), a regression introduced in 2.1.255. Fixed remote/scheduled sessions failing with "user messages must have non-empty content" after a re-sent permission approval couldn't be applied.
- **[v2.1.257](https://github.com/anthropics/claude-code/releases/tag/v2.1.257)** — Added Claude Fable 5.1 (`claude-fable-5-1`) as the new default Fable model: 1M context, $10/$50 per Mtok, $0.25/Mtok cache reads. Added `timeFormat`/`timeZone` settings (12-hour, 24-hour, 24-hour UTC, or strftime pattern) for the turn-end clock.

## Hot Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Max plan session limits exhausted abnormally fast since March 2026. 843 comments, 476 👍 — the single largest thread in the tracker; marked `invalid` by maintainers but still drawing daily activity, signaling unresolved user trust issues around usage metering.
2. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved orgs still hitting cyber-safeguard blocks despite prior approval emails; Verification Portal stuck on "Under review." 191 comments — enterprise-blocking bug with no visible resolution path.
3. **[#5088](https://github.com/anthropics/claude-code/issues/5088)** — Accounts disabled immediately after paying for Max 5x plan. 183 comments, 61 👍, labeled `oncall` — billing/auth failure with direct revenue and trust impact.
4. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Opus 4.7/4.8/5.0 and Fable increasingly default to repetitive rhetorical tics, struggling with coherent prose even under explicit style instructions. 112 comments, 409 👍 (highest reaction count in the batch) — strong signal of model-quality dissatisfaction.
5. **[#79337](https://github.com/anthropics/claude-code/issues/79337)** — Fable 5 demanded "usage credits" on Max plans the day it became standard, silently downgrading sessions to Opus 4.8. Closed, but illustrates rollout/entitlement sync bugs around new model launches.
6. **[#88041](https://github.com/anthropics/claude-code/issues/88041)** — Auto-mode's hardcoded "bashFirst" system prompt tells the model to use `sed`/heredoc instead of Edit/Write tools. 15 comments, 29 👍 — directly linked to #87575 below; a systemic tooling-design flaw, not a one-off bug.
7. **[#87575](https://github.com/anthropics/claude-code/issues/87575)** — Consequence of #88041: Auto Mode's Bash-based file edits silently break `/rewind`. 14 comments, 30 👍 — data-loss risk for users relying on rewind/checkpointing.
8. **[#65620](https://github.com/anthropics/claude-code/issues/65620)** — Pre-tool-call assistant text is silently dropped from session transcripts when interleaved with thinking blocks, since ~v2.1.162. 30 comments — a `regression` label with reproducible steps, affecting transcript fidelity and downstream tooling.
9. **[#75043](https://github.com/anthropics/claude-code/issues/75043)** — Nested subagents spawned by a subagent are always async regardless of `run_in_background`; completion notifications never reach the parent, and `TaskStop` errors after resume. 22 comments — blocks reliable multi-level orchestration.
10. **[#66020](https://github.com/anthropics/claude-code/issues/66020)** — macOS 26.5.1 kernel zone leak (`data.kalloc.1024`) from the CLI, panicking at ~20GB with leak rate scaling to 1027/sec under agent load. 26 comments — severe OS-level stability bug tied to heavy agent usage.

## Key PR Progress

Only 3 PRs updated in the last 24h:

1. **[#86537](https://github.com/anthropics/claude-code/pull/86537)** — Fixes a duplicated word ("to to") in the CHANGELOG.md entry for `CLAUDE_BASH_NO_LOGIN`. Trivial documentation fix.
2. **[#61691](https://github.com/anthropics/claude-code/pull/61691)** — Adds a PowerShell diagnostic/repair script for Windows users hit by the recurring GitHub connector "Connected but no tools" bug (closes #61682); root-caused against a chain of related issues (#28695, #41658, #57584).
3. **[#20448](https://github.com/anthropics/claude-code/pull/20448)** — Adds a "web4-governance" plugin for AI governance using T3 trust tensors, entity witnessing, and R6 audit trails — a community-contributed governance/compliance extension, not yet reviewed.

## Feature Request Trends

- **Session/state management**: requests to delete sessions (#13514, 93 👍) and relocate the Windows data directory via env var (#57998, 19 👍) point to demand for more user control over local state and storage location.
- **Cost governance**: a runtime-enforced token-burn circuit breaker with per-source spend attribution across hooks/plugins/subagents (#85422) reflects growing concern over unbounded agentic token consumption beyond passive warnings.
- **IDE/diff ergonomics**: diff comparison against arbitrary branches, not just `main` (#23626, 137 👍) is a heavily upvoted workflow gap for multi-branch development.

## Developer Pain Points

- **Billing/entitlement fragility**: the top three issues by comment volume (#38335, #84352, #5088) all involve unexplained account/session restrictions after payment or approval — this remains the single largest source of user frustration and erodes trust in the subscription model.
- **Auto Mode tool-choice bug cascading into data loss**: the bashFirst system prompt issue (#88041/#87575) shows a single upstream instruction defeating both the intended Edit/Write tooling and the `/rewind` safety net — a high-severity, low-visibility class of bug.
- **Desktop app window/platform quirks**: recurring, duplicate-filed reports of the Windows desktop window staying always-on-top (#85891, #88093) and MSIX launch failures (#80444, #53247) suggest desktop packaging/window-management issues are under-triaged relative to their frequency.
- **Model behavior/prose quality regressions**: #77136 (409 👍) and #74558 indicate users perceive recent model updates (Fable 5, Opus 4.7–5.0) as producing more repetitive or inconsistent output despite explicit style guidance — a recurring qualitative complaint distinct from outright bugs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Daily Digest — 2026-09-02

## Today's Highlights

A patch release (v1.18.26) landed with targeted stability fixes for Claude 5 sessions and Bedrock reasoning models. Community activity was dominated by a large cluster of duplicate bug reports around project path/session identity breaking when folders are moved or renamed, alongside continued high engagement on long-standing UX complaints (clipboard copy, theme detection). On the PR side, the team shipped several performance fixes targeting memory/CPU overhead in the desktop app (transcript caching, models.dev snapshot duplication, timeline rebuilds).

## Releases

**v1.18.26**
- Claude 5 sessions now tolerate stale thinking blocks instead of failing after prompt or tool changes.
- Bedrock GPT-5.6 models now accept `none` reasoning effort.
- Bedrock reasoning and replay handling made more reliable (@pengzh1).
- Tool call timing accuracy fix (truncated in source data).

## Hot Issues

1. **[#4283](https://github.com/anomalyco/opencode/issues/4283)** — Copy to Clipboard not working (128 comments, 119 👍). Long-running, high-visibility UX bug affecting basic text selection/copy from responses.
2. **[#13768](https://github.com/anomalyco/opencode/issues/13768)** — "This model does not support assistant message prefill" with GitHub Copilot + Opus 4.6 (72 comments). Sessions abruptly halt mid-conversation; closed but still drawing comments on the day of the digest.
3. **[#6231](https://github.com/anomalyco/opencode/issues/6231)** — Request to auto-discover models from OpenAI-compatible endpoints (LM Studio, Ollama, llama.cpp) (47 comments, 225 👍 — highest reaction count in the batch). Manual model listing in `opencode.json` is seen as tedious and error-prone.
4. **[#3472](https://github.com/anomalyco/opencode/issues/3472)** — VS Code extension's advertised "context awareness" doesn't pass selected lines to the agent (39 comments).
5. **[#3688](https://github.com/anomalyco/opencode/issues/3688)** — System theme option broken/missing since v1.0.0 (38 comments).
6. **[#33356](https://github.com/anomalyco/opencode/issues/33356)** — Unbounded growth of the SQLite `event` table; `opencode.db` reaching 13GB+ with no retention/compaction (26 comments). Serious operational issue for long-lived instances.
7. **[#23248](https://github.com/anomalyco/opencode/issues/23248)** — Sessions become orphaned when a project directory is renamed, since the stored absolute path is never updated (8 comments). Representative of a large duplicate-issue cluster (see Pain Points).
8. **[#10490](https://github.com/anomalyco/opencode/issues/10490)** — No config option to disable copy-on-select mouse behavior (18 comments, 32 👍).
9. **[#19466](https://github.com/anomalyco/opencode/issues/19466)** — OpenCode burns ~50% CPU on a single core while idly waiting on rate-limit backoff (16 comments).
10. **[#34344](https://github.com/anomalyco/opencode/issues/34344)** — Reported exploit: free-model rate limits are tied to IP, allowing unlimited usage via VPN rotation (7 comments). Worth security/abuse-prevention attention.

## Key PR Progress

1. **[#46801](https://github.com/anomalyco/opencode/pull/46801)** — fix(tui): make prompt metadata responsive, aligning breakpoints with TUI-mini's progressive width policy.
2. **[#46717](https://github.com/anomalyco/opencode/pull/46717)** — feat(app): adds five timeline detail presets (Everything → Text only) and separates placement from detail level in session UI.
3. **[#46802](https://github.com/anomalyco/opencode/pull/46802)** — fix(ai): honors `chunkTimeout` on HTTP SSE streams, closing a gap where the setting was accepted but never read on the native path (fixes [#46692](https://github.com/anomalyco/opencode/issues/46692)).
4. **[#46800](https://github.com/anomalyco/opencode/pull/46800)** — Bounds MCP connect calls with a timeout so `mcp list` can no longer hang indefinitely (fixes [#43484](https://github.com/anomalyco/opencode/issues/43484)).
5. **[#46799](https://github.com/anomalyco/opencode/pull/46799)** — feat: makes webfetch's max response size configurable via `webfetch.max_response_size` (fixes [#15459](https://github.com/anomalyco/opencode/issues/15459)).
6. **[#46782](https://github.com/anomalyco/opencode/pull/46782)** — fix(app): releases cached transcript/inbox/cursor data when the last session tab closes, addressing a memory retention issue.
7. **[#46784](https://github.com/anomalyco/opencode/pull/46784)** — fix(core): shares the models.dev snapshot (183 providers, 6321 models) across Locations instead of deep-copying it per plugin instance and per refresh — meaningful memory/CPU win.
8. **[#46788](https://github.com/anomalyco/opencode/pull/46788)** — fix(core): reuses the rendered Code Mode tool catalog across snapshots when the registry is unchanged, cutting redundant recomputation.
9. **[#46657](https://github.com/anomalyco/opencode/pull/46657)** — feat(session-ui): wraps model reasoning and tool details in a collapsible "Thinking" block (closes [#21549](https://github.com/anomalyco/opencode/issues/21549), [#21548](https://github.com/anomalyco/opencode/issues/21548)).
10. **[#44838](https://github.com/anomalyco/opencode/pull/44838)** — feat(desktop): adds a Browser tab connecting a sandboxed Chromium instance through plugin RPC, with address bar and navigation controls.

## Feature Request Trends

- **Provider/model ergonomics** — auto-discovery for OpenAI-compatible endpoints ([#6231](https://github.com/anomalyco/opencode/issues/6231)), custom model aliases ([#3439](https://github.com/anomalyco/opencode/issues/3439)), OpenRouter provider selection ([#1010](https://github.com/anomalyco/opencode/issues/1010)) — users want less manual config for multi-provider setups.
- **Input/interaction customization** — disabling copy-on-select ([#10490](https://github.com/anomalyco/opencode/issues/10490)), shell tab completions ([#1515](https://github.com/anomalyco/opencode/issues/1515)), drag-and-drop for Office files ([#27689](https://github.com/anomalyco/opencode/issues/27689)).
- **Skills/plugin extensibility** — multi-skill support in a single prompt ([#25570](https://github.com/anomalyco/opencode/issues/25570), 22 👍), plugin permission hooks now being actively built out (PRs [#46530](https://github.com/anomalyco/opencode/pull/46530), [#46800](https://github.com/anomalyco/opencode/pull/46800)).
- **Session/UI transparency** — collapsible reasoning and tool-call detail views (PR [#46657](https://github.com/anomalyco/opencode/pull/46657)), configurable timeline detail presets (PR [#46717](https://github.com/anomalyco/opencode/pull/46717)).

## Developer Pain Points

- **Project path fragility (top recurring cluster)** — at least seven near-duplicate open/closed issues ([#30697](https://github.com/anomalyco/opencode/issues/30697), [#34737](https://github.com/anomalyco/opencode/issues/34737), [#23248](https://github.com/anomalyco/opencode/issues/23248), [#17940](https://github.com/anomalyco/opencode/issues/17940), [#6696](https://github.com/anomalyco/opencode/issues/6696), [#35240](https://github.com/anomalyco/opencode/issues/35240), [#31888](https://github.com/anomalyco/opencode/issues/31888)) report that moving/renaming a project folder leaves OpenCode pointing at stale/deleted paths, orphans sessions, or causes cloned repos with the same root commit to collide on project identity. This is clearly the single biggest unaddressed reliability gap right now.
- **Clipboard and selection UX** — both "copy doesn't work" ([#4283](https://github.com/anomalyco/opencode/issues/4283)) and "can't turn off auto-copy-on-select" ([#10490](https://github.com/anomalyco/opencode/issues/10490)) remain top-voted complaints.
- **Resource efficiency** — unbounded SQLite growth ([#33356](https://github.com/anomalyco/opencode/issues/33356)) and idle CPU spin during rate-limit backoff ([#19466](https://github.com/anomalyco/opencode/issues/19466)) suggest event/state management needs retention and backoff-sleep fixes.
- **Non-interactive/automation reliability** — `opencode run` intermittently hangs at init with ~56% failure rate observed ([#38723](https://github.com/anomalyco/opencode/issues/38723)), and silently exits 0 with empty stdout when a tool call is auto-rejected ([#36413](https://github.com/anomalyco/opencode/issues/36413)) — both undermine CI/scripted usage.
- **Provider integration edge cases** — assistant message prefill incompatibility with Copilot/Opus ([#13768](https://github.com/anomalyco/opencode/issues/13768)), incomplete LM Studio model listing ([#18011](https://github.com/anomalyco/opencode/issues/18011)), and structured-output/thinking-model conflicts ([#15226](https://github.com/anomalyco/opencode/issues/15226)) point to fragile handling of provider-specific quirks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-08-16

> Generated: 2026-08-16 07:27 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison — 2026-08-16

## 1. Ecosystem Overview

The AI CLI tooling space continues to mature past its "does it work" phase into a harder set of problems: session durability, cost/usage transparency, and multi-session orchestration. Both Claude Code and OpenCode show no new releases in the last 24 hours, suggesting a temporary lull in shipping cadence, but PR activity and issue engagement remain heavy — development is happening in long-lived threads and infrastructure work rather than headline features. A clear convergence is emerging around the idea that a single interactive CLI session is no longer sufficient: users on both platforms are pushing for persistent, resumable, multi-session workflows. At the same time, monetization and usage-limit friction has become a first-order pain point for both ecosystems, not a side complaint — it's driving the single largest thread in each repo. Overall, the space is shifting from raw capability competition toward reliability, cost transparency, and operational scalability as the differentiators that matter to daily users.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| New releases (24h) | None | None |
| Hot issues tracked | 10 | 10 |
| Largest thread size | 1,487 comments / 693 👍 (#16157) | 132 comments / 98 👍 (Memory Megathread #20695) |
| PRs updated (24h) | 5 | 10 |
| PR focus | Security-guidance fixes, YAML/frontmatter bug, CVP false-positive fix, plugin scoping | Provider compatibility (OpenAI-compatible, Modal, Kimi Code OAuth), platform hardening (Windows stdin), observability tooling (CPU profiling) |
| Dominant pain theme | Usage limits / desktop stability | Billing/entitlement desync / resource growth |

Claude Code's engagement is concentrated in a small number of extremely large threads (one issue alone accounts for nearly 1,500 comments), while OpenCode's activity is more evenly distributed across ~10 mid-sized issues and roughly double the PR throughput — indicating a broader, more decentralized set of active workstreams even without a release today.

## 3. Shared Feature Directions

- **Multi-session / long-running workflow support**: Claude Code users want inter-session communication (#24798) and continuation past usage limits (#13354); OpenCode users want more flexible session/workspace control (mid-session `cd`, #2177, 125 👍) and forced reading of queued messages (#24298). Both point to the same underlying need — CLIs are being used as persistent background agents, not single-shot commands, and session lifecycle management hasn't caught up.
- **Context/memory persistence**: Claude Code's #34556 (persistent memory across 59 compactions, built by a user out of necessity) and OpenCode's infinite compaction loops (#27924, #32615) are two sides of the same problem — neither tool has a robust answer to long-session context management yet.
- **Usage/cost transparency**: Claude Code's #16157 (Max plan limits) and OpenCode's cluster of billing issues (#37790, #42013, #42074, #42855) show that both user bases are frustrated by a mismatch between what they pay for and what they can actually consume, though the failure mode differs (perceived value vs. billing sync bugs).
- **Provider/auth fragility**: Claude Code's CVP/enterprise auth friction (#84352, #83795) and OpenCode's provider-specific auth bugs (Gemini+Copilot #8417, reasoning options dropped for OpenAI-compatible providers #27361) both reflect growing pains from supporting multiple auth/provider backends simultaneously.

## 4. Differentiation Analysis

- **Target user / posture**: Claude Code's issue set skews toward enterprise governance (CVP approval, model pinning, cyber safeguards) and desktop-app polish (Windows GPU crashes, MSIX regressions), suggesting a user base that includes regulated/enterprise teams running the desktop client. OpenCode's issues skew toward self-hosted/operational concerns (unbounded SQLite growth, CPU profiling, headless/JSON-mode config) and multi-provider flexibility (Modal, Kimi Code, DeepSeek, OpenAI-compatible backends), suggesting a more infrastructure- and power-user-oriented audience running it as a backend service or on custom model stacks.
- **Technical approach**: Claude Code's active PRs are concentrated in security-pattern correctness (glob matching, CVP false positives) — a sign of a product hardening its trust/safety surface. OpenCode's PRs are concentrated in provider interoperability and platform-level fixes (stdin handling, event persistence, tool media fallback) — a sign of a product broadening its backend compatibility surface.
- **Monetization model exposure**: OpenCode's issues expose subscription/billing internals directly to users (Stripe sync failures, free-tier throttling errors surfacing as `FreeUsageLimitError`), reflecting a metered, multi-tier pricing model under active strain. Claude Code's cost friction is more about perceived quota fairness on a flat Max subscription than billing-system bugs.
- **Stability profile**: Claude Code's acute reliability issues are platform-specific (Windows desktop GPU/session bugs tied to a specific build, 1.28929.0). OpenCode's reliability issues are architectural (unbounded database growth, infinite compaction loops) — harder to patch with a point release since they stem from core session/storage design.

## 5. Community Momentum & Maturity

Claude Code shows signs of a larger, more concentrated user base — a single issue at nearly 1,500 comments is a scale of engagement not seen anywhere in the OpenCode dataset — but with comparatively lighter PR throughput today (5 vs. 10), suggesting the maintainer team is currently more focused on triage and safety fixes than net-new development. OpenCode shows a broader, flatter engagement pattern (no single mega-thread, but 10 substantive issues and 10 active PRs spanning providers, platform, i18n, and tooling), consistent with a project iterating rapidly across many fronts simultaneously, likely reflecting a smaller but more contributor-driven community. Neither project shipped a release in the last 24 hours, so today's signal is better read from issue/PR velocity than from release cadence — by that measure, OpenCode currently looks more operationally active, while Claude Code has the larger and more vocal installed base.

## 6. Trend Signals

- **Session persistence is becoming table stakes.** Both ecosystems are independently converging on the same gap: agentic CLI sessions need to survive context limits, compactions, and interruptions without losing state. Tooling that solves this well (native checkpointing, resumable sessions) is likely to become a competitive differentiator within the next few release cycles.
- **Usage-based pricing is generating real trust costs.** Whether via perceived unfairness (Claude Code's Max limits) or literal sync bugs (OpenCode's billing desync), metered/subscription pricing for agentic coding tools is a visible source of churn risk — worth watching for either tool to respond with usage dashboards or pricing changes.
- **Multi-provider abstraction is a maturing requirement, not a nice-to-have.** OpenCode's heavy PR investment in provider compatibility (Kimi Code OAuth, Modal, OpenAI-compatible system-message coalescing) signals that developers expect CLI tools to be model-agnostic infrastructure, not single-vendor wrappers — a pattern enterprise buyers should weigh when evaluating lock-in risk.
- **Desktop/GUI stability lags behind CLI-core stability.** Claude Code's most severe fresh regressions are concentrated in its Windows desktop app (GPU crashes, hung cross-session messaging tied to a specific build), suggesting GUI wrapper layers around these tools are less mature than their terminal-native cores — a relevant risk factor for teams standardizing on desktop clients.
- **Operational/storage debt is emerging as a hidden cost of "always-on" agents.** OpenCode's unbounded event-table growth (13GB+, one user at 97-99% disk usage) is an early warning that event-sourced, long-running agent architectures need explicit retention/compaction strategies — a design consideration other tools in this space should proactively address before it becomes their own incident.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-16 · anthropics/skills*

> Note: PR comment counts were not available in the source data (all showed `undefined`). Rankings below use available discussion signal instead — 👍 reactions, cross-references from high-comment Issues, duplicate/overlapping submissions (a proxy for how many contributors independently hit the same pain point), and update recency.

## 1. Top Skills Ranking

| # | Skill / PR | Author | Status | Why it matters |
|---|---|---|---|---|
| 1 | [**skill-creator eval fix**](https://github.com/anthropics/skills/pull/1298) — PR #1298 | MartinCajiao | Open | Fixes `run_eval.py` always reporting 0% recall, which silently breaks the description-optimization loop (`run_loop.py`, `improve_description.py`). Also fixes Windows stream reading, trigger detection, and parallel workers. Directly resolves the community's most-discussed bug, [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍). |
| 2 | [**docx/pdf reliability fixes**](https://github.com/anthropics/skills/pull/541) — PRs #538, #541, #539 | Lubrsy706 | Open (3 PRs) | A cluster of production-hardening fixes for the widely-used `docx`/`pdf` skills: case-sensitive file reference bug (#538), tracked-change ID collisions corrupting documents (#541), and silent YAML parsing failures from unquoted descriptions (#539). |
| 3 | [**skill-creator Windows compatibility**](https://github.com/anthropics/skills/pull/1099) — PRs #1099, #1050 | joshuawowk, gstreet-ops | Open (2 overlapping PRs) | Two independent contributors hit the same Windows subprocess/encoding failures in `skill-creator` scripts within weeks of each other — a strong signal the tooling is broken cross-platform, not just an edge case. |
| 4 | [**ServiceNow platform skill**](https://github.com/anthropics/skills/pull/568) | Vanka07 | Open | Broad enterprise skill covering ITSM, ITOM, SecOps, CSDM, and more. Longest-running active discussion of any pending PR (updated through 2026-08-12), suggesting ongoing scope negotiation. |
| 5 | [**document-typography**](https://github.com/anthropics/skills/pull/514) | PGTBoos | Open | Addresses typographic quality (orphans, widows, numbering) in AI-generated documents — a cross-cutting concern that would improve every document-producing skill. |
| 6 | [**ODT skill**](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | Open | Extends document format coverage to OpenDocument Text/Spreadsheet (LibreOffice-native), filling a gap next to the existing docx/pdf skills. |
| 7 | [**pyxel retro game dev**](https://github.com/anthropics/skills/pull/525) | kitao | Open | Community-authored skill from the actual Pyxel engine maintainer, wrapping the `pyxel-mcp` server for retro/pixel-art game creation — notable for maintainer-authored provenance. |
| 8 | [**Agent Skills spec compliance fix**](https://github.com/anthropics/skills/pull/1538) | bechor25 | Open | Brings two bundled skills back into conformance with the `skills-ref validate` spec that this repo itself is the reference implementation for — a repo-integrity fix. |

## 2. Community Demand Trends (from Issues)

- **Trust & namespace security** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the single largest thread in the repo) reports community skills impersonating official Anthropic skills via the `anthropic/` namespace, risking users granting elevated trust to unofficial code.
- **Enterprise/org distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai instead of manual `.skill` file passing.
- **Eval/tooling reliability** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) both report `run_eval.py`/`run_loop.py` scoring 0% recall regardless of input, undermining the skill-authoring feedback loop.
- **Context-budget discipline** — [#1487](https://github.com/anthropics/skills/issues/1487) flags a skill eagerly injecting ~156k tokens in a single call, pointing to demand for lazy-loading/size guardrails on skill content.
- **Duplicate/overlapping installs** — [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) notes `document-skills` and `example-skills` plugins ship identical content, bloating context.
- **New skill categories requested** — governance/safety patterns ([#412](https://github.com/anthropics/skills/issues/412)), compact agent-state memory notation ([#1329](https://github.com/anthropics/skills/issues/1329)), and multi-gate output-quality review pipelines ([#1385](https://github.com/anthropics/skills/issues/1385)) suggest growing interest in *meta-skills* that govern agent behavior rather than perform end-user tasks.

## 3. High-Potential Pending Skills

- [**#1298**](https://github.com/anthropics/skills/pull/1298) — highest merge priority: it's the direct fix for the repo's most-reported functional bug (#556, #1169) and touches core skill-authoring tooling used by every future contributor.
- [**#538 / #541 / #539**](https://github.com/anthropics/skills/pull/541) — small, well-scoped, single-author fixes to popular document skills; low review risk, likely fast-track candidates.
- [**#1099 / #1050**](https://github.com/anthropics/skills/pull/1099) — overlapping Windows fixes; maintainers will likely need to reconcile the two before merging either, but the underlying fix is clearly wanted.
- [**#1538**](https://github.com/anthropics/skills/pull/1538) — recent (opened 2026-08-09), narrow spec-conformance fix with maintainer-relevant framing ("this repo is the reference implementation") that tends to get prioritized.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **operational trust and reliability of the skill-authoring pipeline itself** — securing the `anthropic/` namespace against impersonation ([#492](https://github.com/anthropics/skills/issues/492)) and fixing the broken `skill-creator` evaluation loop ([#556](https://github.com/anthropics/skills/issues/556)/[#1298](https://github.com/anthropics/skills/pull/1298)) — outweighs demand for any single new end-user Skill.

---

# Claude Code Community Digest — 2026-08-16

## Today's Highlights

No new releases in the last 24 hours, but community activity remains heavy on long-running threads. The dominant story continues to be [#16157](https://github.com/anthropics/claude-code/issues/16157) — Max subscribers hitting usage limits almost instantly — now at 1,487 comments and 693 👍, making it by far the most contentious open issue. Desktop app stability on Windows (GPU crashes, cross-session messaging failures) and multi-account/connector support are also drawing sustained engagement.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157)** — `[BUG] Instantly hitting usage limits with Max subscription`. 1,487 comments, 693 👍 — the single largest thread in the repo, reflecting widespread frustration over perceived value mismatch on Max plans.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — `Support multiple Connector accounts` in Claude Code on the web. 229 comments, 346 👍 — strong demand for multi-account connector support (e.g., separate GitHub/Google accounts per project).
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Detailed report on model behavior around `/goal` Stop-hook directives being cited as unrequested-action authorization. 119 comments — a nuanced, closed-but-still-active discussion on model-side prompt-injection-adjacent behavior.
4. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved orgs still hitting cyber safeguard blocks despite prior approval. 105 comments, 19 👍 — an enterprise-blocking verification/entitlement bug.
5. **[#24798](https://github.com/anthropics/claude-code/issues/24798)** — Feature request for inter-session communication in multi-Claude workflows. 78 comments, 21 👍 — recurring ask for coordinating parallel sessions.
6. **[#13354](https://github.com/anthropics/claude-code/issues/13354)** — `Continue when the session limit reached`. 78 comments, 197 👍 — high upvote-to-comment ratio signals broad silent agreement.
7. **[#34556](https://github.com/anthropics/claude-code/issues/34556)** — Persistent memory across context compactions; user built a custom 59-compaction memory system. 75 comments — illustrates real-world pain with context loss on long sessions.
8. **[#50246](https://github.com/anthropics/claude-code/issues/50246)** — Message queue mode to avoid interrupting active tasks. 56 comments, 197 👍 — another high-upvote workflow-ergonomics request.
9. **[#86069](https://github.com/anthropics/claude-code/issues/86069)** / **[#86012](https://github.com/anthropics/claude-code/issues/86012)** — Windows/MSIX regression where cross-session messages land but never submit, leaving sessions unresponsive until idle-timeout kill. Two related, actively-updated reports (28 and 24 comments) pointing at a fresh regression in the 1.28929.0 build.
10. **[#52121](https://github.com/anthropics/claude-code/issues/52121)** — `Grep`/`Glob` tools missing from registry under `ENABLE_TOOL_SEARCH=true`, contradicting documented deferred-tool behavior. 20 comments, 21 👍 — a correctness bug affecting tool-search users.

## Key PR Progress

Only 5 PRs updated in the last 24 hours:

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079)** — `fix(security-guidance): make ** glob patterns match zero-depth paths`. Fixes a silent security-rule gap: `**/*.ts`-style patterns relied on Python `fnmatch`, which requires a literal `/`, so top-level files were silently excluded from security-pattern matching despite docs promising any-depth matches.
2. **[#87077](https://github.com/anthropics/claude-code/pull/87077)** — `fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents`. Unquoted dialogue-style descriptions (`Daisy: "..."`) were being parsed as nested YAML mappings, silently emptying agent frontmatter (name/description/model) across the whole toolkit.
3. **[#86870](https://github.com/anthropics/claude-code/pull/86870)** — `fix: prevent false-positive CVP status changes during authorized security research`. Adds context checks (`is_authorized_lab()`, session metadata) to `security-guidance/hooks/review_api.py` so legitimate security research isn't flagged as a CVP violation.
4. **[#84600](https://github.com/anthropics/claude-code/pull/84600)** *(closed)* — Enabled the `frontend-design` plugin at project scope via `.claude/settings.json`, registering the official marketplace so the skill auto-loads for repo contributors.
5. **[#82981](https://github.com/anthropics/claude-code/pull/82981)** — `Claude/automatizar inventario insumos` — an automation-generated PR with no description; likely a Claude-session-originated change of unclear scope, worth a maintainer look.

## Feature Request Trends

- **Multi-session / multi-account coordination**: connector multi-account support (#27302), inter-session communication for multi-Claude workflows (#24798), and reliable cross-session messaging (blocked by regressions in #86069/#86012) point to a strong push toward orchestrating multiple concurrent Claude Code sessions.
- **Continuity across limits and compactions**: requests to continue after hitting session/usage limits (#13354) and to persist memory across context compactions (#34556) reflect demand for long-running, stateful agent sessions rather than single-shot ones.
- **Non-interrupting workflow control**: message queueing instead of forced interruption (#50246) is a recurring ergonomics ask for users running long agentic tasks.
- **UI/window management**: detachable OS-level windows for split-screen desktop use (#27725, 62 👍) continues to draw steady support.

## Developer Pain Points

- **Usage limits and cost transparency**: #16157 remains the most acute pain point — Max subscribers report exhausting quota almost immediately, with over a thousand comments of shared frustration.
- **Desktop app stability on Windows**: multiple concurrent threads (#81698, #80444, #85199, #86069, #86012) report GPU-process crashes, MSIX repair loops, and cross-session messages that hang indefinitely — suggesting a systemic regression around the desktop app's session/GPU handling in recent builds.
- **Enterprise auth/verification friction**: CVP-approved orgs still receiving cyber-safeguard blocks (#84352) and model pinning being silently overridden (#83795) point to trust/config issues for teams operating under stricter governance.
- **Tool-search correctness**: `Grep`/`Glob` vanishing entirely under `ENABLE_TOOL_SEARCH=true` (#52121) undermines confidence in the deferred-tool mechanism for teams adopting it.
- **Model quality perception**: reports of measurable regressions in the newest model generation — verbosity, weaker nonsense detection, under-disclosed fallback from Fable 5 to Opus 4.8 (#83510) — signal a trust gap around model behavior consistency post-upgrade.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-16

## Today's Highlights

No new releases landed today, but the community is grappling with two long-tail structural issues: an unbounded SQLite event table causing multi-gigabyte database bloat, and a persistent infinite compaction loop in the session/context management logic. Meanwhile, monetization friction around OpenCode Go/Zen subscriptions (billing errors, "insufficient balance" despite payment, free-tier throttling) continues to generate a steady stream of complaints. On the PR side, active work spans provider compatibility fixes (OpenAI-compatible system message coalescing, Modal/Kimi Code provider support) and platform hardening (Windows stdin handling, CPU profiling tooling).

## Releases

None in the last 24h.

## Hot Issues

1. **[Memory Megathread #20695](https://github.com/anomalyco/opencode/issues/20695)** — Central tracking issue for memory leak reports; maintainers are explicitly requesting heap snapshots rather than speculative fixes. 132 comments, 98 👍 — the most active thread in the repo.
2. **[Unbounded event table growth, opencode.db reaches 13GB+ #33356](https://github.com/anomalyco/opencode/issues/33356)** — The event-sourcing table storing `message.updated.1` snapshots has no retention or compaction, causing multi-GB database bloat on long-running instances (one user hit 97-99% disk usage on a 22GB volume). 19 comments — a serious operational/storage concern for `[2.0]`.
3. **[Infinite compaction loop when compression fails to reduce context #27924](https://github.com/27924)** — Session loop in `prompt.ts` can enter an unrecoverable `overflow → compact → overflow` cycle, burning tokens with no progress. 8 comments; related to issue #32615 below.
4. **[Infinite clarification/compaction loop on empty git repo #32615](https://github.com/anomalyco/opencode/issues/32615)** — A correctness and cost-control bug: running OpenCode against a bare `.git/`-only directory triggers a runaway compaction loop that burns tokens indefinitely.
5. **[Allow explicitly changing working directory #2177](https://github.com/anomalyco/opencode/issues/2177)** — Long-standing feature request (closed but still drawing engagement) to support `cd` mid-session; 42 comments, 125 👍 — one of the highest reaction counts in the dataset.
6. **[OpenCode hangs randomly after receiving instructions #2940](https://github.com/anomalyco/opencode/issues/2940)** — Reports of the CLI freezing mid-task, sometimes recoverable via `/compact`, sometimes requiring `Ctrl+C`. 40 comments — a recurring reliability complaint.
7. **[Gemini Bad Request with GitHub Copilot auth #8417](https://github.com/anomalyco/opencode/issues/8417)** — Gemini models fail specifically under Copilot authentication; resolved by the reporter but highlights provider/auth fragility. 26 comments.
8. **[Free usage exceeded, subscribe to Go #42013](https://github.com/anomalyco/opencode/issues/42013)** and **[deepseek-v4-flash-free 429 on every request #42074](https://github.com/anomalyco/opencode/issues/42074)** — Multiple reports of the free DeepSeek V4 Flash tier via Zen throttling unpredictably or returning `FreeUsageLimitError` even from official clients.
9. **[OpenCode Go subscription paid but shows "Insufficient balance" #37790](https://github.com/anomalyco/opencode/issues/37790)** — Stripe payment succeeds but workspace balance doesn't reflect it; part of a broader cluster of billing/entitlement sync issues (see also #42855, #42143).
10. **[Model options (reasoning/thinking) not forwarded for openai-compatible providers #27361](https://github.com/anomalyco/opencode/issues/27361)** — `reasoning.effort` and similar options are silently dropped for headless/JSON-format runs, breaking custom OpenRouter-style provider configs.

## Key PR Progress

1. **[fix(opencode): coalesce system messages for OpenAI-compatible providers #42801](https://github.com/anomalyco/opencode/pull/42801)** — Fixes local backends (e.g. LM Studio) rejecting multiple system messages produced by plugin-injected instructions; supersedes closed PR #38671.
2. **[fix(cli): expose durable event persistence #42840](https://github.com/anomalyco/opencode/pull/42840)** — Maps `OPENCODE_EVENTS_PERSIST=1` to `ServerOptions.events.persist`, relevant context given the event-table bloat issue (#33356).
3. **[feat(cli): add native CPU profiling #42862](https://github.com/anomalyco/opencode/pull/42862)** — Adds a `--cpu-profile` flag capturing Chrome-compatible CPU profiles from compiled Bun executables, useful for diagnosing hangs like #2940.
4. **[fix: keep tool child stdin closed, run tool commands non-interactively #42854](https://github.com/anomalyco/opencode/pull/42854)** — Fixes Windows hangs where interactive prompts (e.g. `npm exec`) block tool execution because stdin input never reaches the process.
5. **[feat(core): add Kimi Code OAuth #38600](https://github.com/anomalyco/opencode/pull/38600)** — Implements RFC 8628 device OAuth for Kimi Code, routing requests through a managed OpenAI-compatible bearer-token API.
6. **[feat(core): restore Modal model discovery #42851](https://github.com/anomalyco/opencode/pull/42851)** — Adds the Modal provider plugin back, fetching live workspace deployment IDs instead of static templates.
7. **[fix(core): restore AI SDK tool media fallback #42849](https://github.com/anomalyco/opencode/pull/42849)** — Restores image/PDF fallback handling for tool results in generic AI SDK prompt lowering, with new mini-E2E regression coverage.
8. **[fix(app): scope manual model override to the selected agent #40604](https://github.com/anomalyco/opencode/pull/40604)** — Fixes the v2 composer incorrectly applying a persisted draft model override across agents.
9. **[feat(config): add {file:...} interpolation to agent markdown prompts #38379](https://github.com/anomalyco/opencode/pull/38379)** — Enables referencing external file contents directly inside agent markdown prompt configs.
10. **[fix(i18n): correct Catalan (ca) locale and add ca glossary #42842](https://github.com/anomalyco/opencode/pull/42842)** — Native-speaker corrections to the recently-added Catalan locale strings.

## Feature Request Trends

- **Session/workspace ergonomics**: mid-session working-directory changes (#2177, 125 👍), `/tmp` access outside the project root (#4743), and forced immediate reading of queued/steering messages (#24298) all point to demand for more flexible session control.
- **Billing/usage transparency**: requests for a Zen dashboard with usage totals and per-model breakdowns (#13497), and a cheaper Go Pro tier with first-month discounts (#24879), reflect user desire for clearer cost visibility and more flexible pricing tiers.
- **Agent workflow automation**: Plan Mode auto-switching to Build mode (#7801, 31 👍) shows interest in reducing manual mode-switching friction.
- **Security/compliance hooks**: pre/post API call hooks for secret redaction (#19425) and a distinct `tool.execute.error` event for failed tool calls (#27900) indicate growing enterprise/compliance-driven feature demand.

## Developer Pain Points

- **Billing/entitlement desync** is the single largest recurring complaint cluster: paid Go subscriptions not reflecting in workspace balance (#37790), declined cards (#33264), and confusion over free-vs-paid tiers (#42143) all point to fragile subscription-state syncing.
- **Free-tier throttling instability**: the DeepSeek V4 Flash free model via Zen is repeatedly reported as unpredictably rate-limited or fully blocked, even for subscribed users (#42013, #42074, #42855).
- **Reliability/hangs**: random freezes after instructions (#2940), infinite compaction loops (#27924, #32615), and platform-specific startup crashes on macOS 26 (#33780) remain unresolved reliability gaps.
- **Resource growth**: unbounded local database growth (#33356) is emerging as a serious long-running-instance concern, with no retention policy yet in place.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
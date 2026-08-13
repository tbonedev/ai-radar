# AI CLI Tools Community Digest 2026-08-13

> Generated: 2026-08-13 08:16 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

## Cross-Tool AI CLI Comparison Report — 2026-08-13

### 1. Ecosystem Overview

The AI CLI tooling space continues to mature rapidly, with both incumbent (Claude Code) and challenger (OpenCode) tools shipping frequent point releases while wrestling with the operational realities of sustained, high-volume usage. A clear pattern has emerged industry-wide: as these tools move from novelty to daily-driver status, community pain has shifted from "does it work" to "does it work reliably at scale" — long-running sessions, memory/storage growth, and billing infrastructure are now the dominant failure modes rather than core model capability. Both tools show heavy investment in multi-agent/multi-session orchestration, reflecting a broader industry shift toward running several agent instances in parallel rather than one at a time. Windows remains a consistent weak point across the ecosystem, with both tools reporting platform-specific stability or encoding issues. Billing and subscription reliability has become a surprisingly universal friction point, suggesting monetization infrastructure is lagging behind product velocity across the sector.

### 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| Total issue comments (top 10) | ~1,000+ | ~403 |
| Highest single-issue engagement | 266 comments / 1,167 👍 (#45596) | 129 comments / 97 👍 (#20695) |
| PRs merged/updated (24h) | 2 (both docs-only) | 10 (feature + bugfix mix) |
| Release cadence | 1 release (v2.1.229) | 2 releases (v1.18.17, v1.18.18) |
| Release content | Remote Control resume, self-hosted hooks, SSE keepalive | Provider bugfixes (Kimi, xAI), compaction quality, retry hardening |

**Read:** Claude Code shows far higher raw community engagement volume but near-zero visible engineering throughput today (docs-only PRs); OpenCode shows lower per-issue engagement but substantially higher and more diverse day-to-day shipping velocity.

### 3. Shared Feature Directions

- **Multi-agent/multi-session coordination**: Claude Code users want inter-session communication for parallel Claude workflows (#24798) plus a 12-bug coordination post-mortem (#54393); OpenCode shipped a subagents side-panel tab (#39382) and has open requests for subagent status visibility (#23784). Both communities are actively pushing past single-agent usage patterns.
- **Billing/subscription reliability**: Claude Code has payment failures on plan upgrades (#55982, #56281) and phantom usage-limit exhaustion (#82506, #54750); OpenCode has Go-subscription activation failures (#37790, #40234), declined cards (#33264), and free-tier limits triggering incorrectly (#14273, #42013). This is the single strongest cross-tool signal — billing infra is under strain industry-wide.
- **Long-session/state degradation**: Claude Code has scrollback duplication and session-rename bugs; OpenCode has more severe versions of the same class — an unbounded 13GB+ SQLite event table (#33356) and a dedicated memory-leak megathread (#20695). Both point to session-state management not yet being production-hardened for extended use.
- **Windows-specific instability**: Claude Code has GPU-process crashes corrupting the MSIX install (#80444/#81698/#81159); OpenCode has ARM64 TUI init failures via bun:ffi/TinyCC (#19130) and PowerShell output corruption (#42274). Windows support quality lags macOS/Linux across both tools.
- **In-session UX/search**: Both communities want better in-terminal navigation — Claude Code's console-flashing and scrollback bugs, OpenCode's explicit find-in-buffer request (#4714, 45 👍) — reflecting unmet expectations for terminal-native UX polish.

### 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| **Target user** | Enterprise/managed environments (self-hosted runners, CVP approval flows, Connector accounts) | Individual power users, multi-provider tinkerers (Kimi, xAI, Gemini, DeepSeek routing) |
| **Feature focus** | Identity/access control, cross-surface parity (desktop/CLI/web sync), skill system governance | Provider-agnostic flexibility, session resilience, TUI ergonomics |
| **Technical approach** | Vertically integrated around Anthropic's own model + infra (gateway streaming, hooks) | Horizontally integrated across many third-party model providers, exposed to provider-specific bugs (Gemini `thoughtSignature`, Kimi role errors) |
| **Community tone** | High-volume, emotionally charged (feature-removal backlash, trust erosion around undocumented changes) | More technically diagnostic (maintainers requesting heap snapshots, structured bug triage) |
| **Governance signal** | #45596 shows community reacting strongly to *undocumented* removal — a transparency/trust gap | #33356 and #20695 show maintainers proactively soliciting better bug reports — a more collaborative debugging posture |

### 5. Community Momentum & Maturity

Claude Code's community is larger and louder by raw engagement (multiple issues exceeding 200+ comments, one at nearly 1,200 👍) but today's shipping activity was minimal — two documentation-only PRs suggest either a quiet release cycle or a broader team focus elsewhere. This mismatch between community volume and visible engineering output is worth monitoring; sustained silence on high-engagement threads like #45596 risks compounding trust issues.

OpenCode shows the opposite profile: a smaller but highly active PR pipeline (10 PRs touching core session lifecycle, config persistence, and provider cache affinity in a single day) alongside two point releases. This is a team in active hardening mode — the volume of small, targeted fixes (child-process signal handling, PowerShell encoding, config persistence) suggests OpenCode is in a "stabilize the V2 foundation" phase rather than a "grow the community" phase.

**Assessment**: Claude Code has ecosystem maturity and reach; OpenCode currently shows faster iteration velocity per unit of team size. Neither tool has convincingly closed the reliability gap flagged by their respective communities.

### 6. Trend Signals

- **Billing infrastructure is becoming a systemic risk, not a one-off bug.** Both tools show multiple independent billing-failure clusters in the same 24h window. Teams evaluating these tools for organizational rollout should budget for payment/metering friction as an expected cost, not an edge case.
- **Session state is the new bottleneck.** As agentic CLI sessions run longer and orchestrate more sub-agents, naive state storage (unbounded event logs, in-memory session history) is hitting real-world scaling limits. Expect both tools to invest in compaction/retention mechanisms over the next few release cycles — OpenCode's `v1.18.17` compaction improvements and retry-jitter work are early signals of this shift.
- **Multi-agent orchestration is moving from experimental to expected.** Both tools' top feature requests now center on coordinating multiple concurrent agent sessions rather than single-session UX — a strong signal that "one agent, one terminal" is no longer the dominant usage model developers want.
- **Provider-agnosticism carries a compatibility tax.** OpenCode's breadth of supported providers (Kimi, xAI, Gemini, DeepSeek) surfaces provider-specific integration bugs faster than Claude Code's single-provider model — a tradeoff decision-makers should weigh: flexibility vs. integration surface area.
- **Undocumented breaking changes are a trust liability.** Claude Code's #45596 (`/buddy` removal) is a cautionary data point for any fast-moving CLI tool: silent feature removal generates disproportionate backlash relative to the engineering cost of a changelog entry.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-13 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

The repository's PR comment counts weren't available in this dataset, so ranking below reflects the source's own attention-sorted ordering plus recency/substance of discussion.

| # | Skill / PR | Function | Status |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): eval pipeline recall=0% | Fixes `run_eval.py` reporting 0% recall for every skill regardless of quality — breaks the description-optimization loop consumed by `run_loop.py`/`improve_description.py`. Also fixes Windows stream reading, trigger detection, parallel workers. Directly addresses [issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 10+ reproductions). | Open |
| [#514](https://github.com/anthropics/skills/pull/514) | Add `document-typography` skill | Typographic QA for AI-generated documents — catches orphan word-wrap, widow paragraphs, numbering misalignment. Targets a problem that affects "every document Claude generates." | Open |
| [#538](https://github.com/anthropics/skills/pull/538) | fix(pdf): case-sensitive file references | Fixes 8 broken references (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`) in the bundled `pdf` skill — breaks on case-sensitive filesystems (Linux/CI). | Open |
| [#486](https://github.com/anthropics/skills/pull/486) | Add ODT skill | OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing — extends document skills beyond DOCX/PDF into the open-standard/LibreOffice ecosystem. | Open |
| [#210](https://github.com/anthropics/skills/pull/210) | Improve `frontend-design` skill | Rewrites the skill for clarity and actionability so every instruction is directly executable within a single conversation. | Open |
| [#83](https://github.com/anthropics/skills/pull/83) | Add `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills that score any Claude Skill across 5 quality dimensions (structure, docs, resources, etc.) — tooling to audit the ecosystem itself. | Open |
| [#541](https://github.com/anthropics/skills/pull/541) | fix(docx): tracked-change ID collisions | Fixes document corruption when adding tracked changes to DOCX files that already contain bookmarks — root-caused to shared `w:id` space in OOXML. | Open |
| [#568](https://github.com/anthropics/skills/pull/568) | Add ServiceNow platform skill | Broad enterprise skill covering ITSM/ITOM/ITAM/SecOps/CSDM — one of the largest scoped enterprise-integration skills proposed. Still receiving updates as of 2026-08-12. | Open |

## 2. Community Demand Trends (from Issues)

- **Trust & security boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the most-discussed issue by far): community skills impersonating the `anthropic/` namespace, risking users granting elevated trust to unofficial skills. This is the single largest unresolved concern in the repo.
- **Eval/tooling reliability for skill authors** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments): `run_eval.py`'s trigger-detection consistently reports 0% recall, undermining the whole description-optimization workflow. Multiple independent PRs (#1298, #1099, #1050) are racing to fix this — a clear signal that skill-creator tooling quality is a top pain point.
- **Org/team distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍): no native way to share skills within an organization; users resort to manual file passing via Slack/Teams.
- **Context-window efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487): a bundled skill (`claude-api`) injecting ~156k tokens in one call, and [#189](https://github.com/anthropics/skills/issues/189) (9 👍): duplicate skills loaded when installing overlapping plugin bundles — both point to demand for tighter context budgeting in skill packaging.
- **Reasoning/output quality gates** — [#1385](https://github.com/anthropics/skills/issues/1385) and the related [#1367](https://github.com/anthropics/skills/pull/1367) PR: appetite for skills that mechanically verify and adversarially review AI output before delivery.
- **Governance & safety patterns** — [#412](https://github.com/anthropics/skills/issues/412): policy enforcement, threat detection, audit trails for agentic systems — closed but drew sustained discussion (6 comments over ~4 months).

## 3. High-Potential Pending Skills

Skills with the most sustained recent update activity — best candidates to land soon:

- [#568 — ServiceNow platform skill](https://github.com/anthropics/skills/pull/568): still being iterated as of 2026-08-12, the most recently active PR in the set.
- [#1538 — Bring two skills back under the Agent Skills spec](https://github.com/anthropics/skills/pull/1538): fixes spec-validation failures (`skills-ref validate`) in `template/SKILL.md` and another skill; small, mechanical, high merge-likelihood.
- [#1298 — skill-creator eval fix](https://github.com/anthropics/skills/pull/1298): highest-impact fix in the queue given how many other PRs (#1099, #1050) and issues (#556, #1169) depend on the eval pipeline working correctly.
- [#525 — Pyxel retro game-dev skill](https://github.com/anthropics/skills/pull/525): from the upstream Pyxel maintainer (`kitao`), actively updated through 2026-07-15.
- [#1479 — plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479): addresses a named gap ([#1417](https://github.com/anthropics/skills/issues/1417)) with credited community framing — collaborative origin suggests maintainer receptiveness.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability of the skill-authoring pipeline itself** — securing the `anthropic/` namespace against impersonation ([#492](https://github.com/anthropics/skills/issues/492)) and fixing the broken eval/trigger-detection tooling that skill authors depend on to validate their work ([#556](https://github.com/anthropics/skills/issues/556), [#1298](https://github.com/anthropics/skills/pull/1298)) — outweighing demand for any single new skill category.

---

Today's Claude Code digest — writing this up now based on the release notes and issue/PR data provided.

## Claude Code Community Digest — 2026-08-13

### 1. Today's Highlights

Claude Code shipped **v2.1.229**, adding `claude remote-control --continue` for resuming Remote Control sessions, server-supplied hook support for self-hosted runners, and SSE keepalive pings for gateway streaming. Community activity was dominated by long-running threads: a 266-comment plea to restore the removed `/buddy` skill, a 227-comment request for multi-account connector support, and continued reports of GPU-crash instability in the Windows desktop app. Several billing/usage-limit bugs (payment failures, phantom session-limit exhaustion) remain unresolved and are drawing sustained frustration.

### 2. Releases

**v2.1.229**
- Documented `claude remote-control --continue` for resuming the most recent Remote Control session
- Added server-supplied Claude Code hook support for self-hosted runner sessions, matching managed-environment behavior
- Added SSE keepalive pings to gateway streaming responses

### 3. Hot Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596)** — "Bring Back Buddy" — community plea to restore the `/buddy` skill removed without changelog notice in v2.1.97. 266 comments, 1,167 👍 — the single largest engagement signal in the tracker, reflecting strong attachment to a removed feature.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Feature request for multiple Connector accounts (same connector, different accounts) in Claude Code on the web. 227 comments, 344 👍 — long-standing multi-account pain point for teams juggling separate GitHub/Slack identities.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Closed report on model behavior citing stale `/goal` stop-hook directives as authorization and treating absent search results as evidence of absence. 113 comments — notable for surfacing subtle model-reasoning failure patterns beyond one user's setup.
4. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved organizations still hitting cyber-safeguard blocks despite prior approval. 89 comments, 12 👍 — active trust/verification regression affecting enterprise orgs.
5. **[#55982](https://github.com/anthropics/claude-code/issues/55982)** — Plan upgrade payments failing with PaymentIntent voided via `void_invoice` before confirmation completes. 78 comments, 26 👍 — billing pipeline bug blocking upgrades.
6. **[#24798](https://github.com/anthropics/claude-code/issues/24798)** — Feature request for inter-session communication to coordinate multi-Claude parallel workflows. 64 comments, 21 👍 — reflects growing multi-agent/parallel-session usage patterns.
7. **[#14828](https://github.com/anthropics/claude-code/issues/14828)** — Windows console window flashing during tool execution. 61 comments, 36 👍, has repro — long-standing Windows UX annoyance.
8. **[#71542](https://github.com/anthropics/claude-code/issues/71542)** — GitHub connector links repos successfully but Claude cannot access content for any repository, account-wide. 55 comments, 48 👍 — recent regression breaking a core integration.
9. **[#65697](https://github.com/anthropics/claude-code/issues/65697)** — Closed feature request for an official Claude Desktop Linux build (Ubuntu LTS/Debian). 52 comments but 498 👍 — highest reaction count of the batch, showing strong latent demand despite closure.
10. **[#80444](https://github.com/anthropics/claude-code/issues/80444)** / **[#81698](https://github.com/anthropics/claude-code/issues/81698)** / **[#81159](https://github.com/anthropics/claude-code/issues/81159)** — Cluster of Windows desktop GPU-process crash reports (exit codes 0x060C201E / 101457950) that kill the app and can corrupt the MSIX package, sometimes requiring Repair. Combined ~75 comments — indicates a systemic Windows GPU-process stability issue rather than isolated incidents.

### 4. Key PR Progress

Only 2 PRs updated in the last 24h, both docs-only cleanups from the same author:

1. **[#85925](https://github.com/anthropics/claude-code/pull/85925)** — "docs: point remaining stale doc links at code.claude.com" — follow-up sweep replacing redirecting `docs.claude.com` links with canonical `code.claude.com` targets across plugins, plugin skills/agents/commands, and issue-template contact links. Closed.
2. **[#85822](https://github.com/anthropics/claude-code/pull/85822)** — "docs: fix stale doc links and README drift in plugins and examples" — companion cleanup fixing `docs.anthropic.com` hooks link and plugins README link to point at `code.claude.com`. Closed.

*(No feature/bug-fix PRs surfaced in this window — only documentation link maintenance.)*

### 5. Feature Request Trends

- **Skill system improvements**: recursive/subdirectory skill discovery (#10238, #18192) and restoring removed skills (#45596) — users want more flexible skill organization and less breaking churn.
- **Multi-session / multi-agent coordination**: inter-session communication for parallel Claude workflows (#24798), plus a detailed post-mortem cataloging 12 multi-agent coordination bugs (#54393) — reflects the shift toward orchestrating many Claude Code instances at once.
- **Cross-platform/cross-surface parity**: official Linux desktop build (#65697), CLI↔desktop conversation history sync (#28791), Linear integration to trigger cloud agent sessions (#12925) — users want consistent experience across every surface Claude Code touches.
- **Account/connector flexibility**: multiple Connector accounts (#27302) and personal-account repo visibility in Claude web (#18467) — friction around identity and account scoping in integrations.

### 6. Developer Pain Points

- **Windows desktop GPU crashes**: a recurring cluster of GPU-process crashes (#80444, #81698, #81159) that kill the entire app and sometimes corrupt the MSIX install, forcing a Repair — the most severe reliability issue this cycle.
- **Billing/usage-limit bugs**: payment failures on plan upgrades (#55982, #56281) and phantom session-limit exhaustion despite low actual usage (#82506, #54750) — erodes trust in metering and billing.
- **Connector/integration regressions**: GitHub connector losing repo access account-wide (#71542) and CVP-approved orgs still getting blocked (#84352) — both are regressions in previously-working trust/access flows, high-impact for enterprise users.
- **TUI/session-state bugs**: input dropped mid-turn (#85603), renamed sessions losing their name on second resume (#25090), scrollback duplication on terminal resize (#51828) — small but frequent papercuts in daily interactive use.
- **Community frustration over undocumented removals**: the `/buddy` removal (#45596) stands out as a trust issue — users want changelog transparency before features disappear.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-13

## Today's Highlights

Two point releases (v1.18.17, v1.18.18) landed with targeted bugfixes: Kimi system-prompt selection for Moonshot/Kimi providers, xAI `xhigh` reasoning effort, session-compaction quality for smaller models, and capped/jittered automatic retries. Community activity remains concentrated on billing/subscription friction (OpenCode Go payment failures, free-tier usage limits) and long-session reliability — most notably an unbounded SQLite `event` table growing past 13GB and a megathread tracking scattered memory leaks. On the PR side, the team is actively hardening V2's session lifecycle, config persistence, and provider cache affinity.

## Releases

- **[v1.18.18](https://github.com/anomalyco/opencode/releases/tag/v1.18.18)** — Fixed Kimi system prompt selection for official Moonshot/Kimi providers; fixed `xhigh` reasoning effort for xAI models.
- **[v1.18.17](https://github.com/anomalyco/opencode/releases/tag/v1.18.17)** — Session compaction now preserves complete recent turns and produces clearer summaries for smaller models; added MERGE Gateway reasoning variants; capped automatic session retries with jitter to reduce retry storms.

## Hot Issues

1. **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (129 comments, 97 👍) — Central tracking issue for scattered memory reports; maintainers explicitly asking for heap snapshots rather than fix suggestions. Long-running, high-engagement.
2. **[#11112 Always stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112)** (77 comments, 46 👍) — Write tool hangs and aborts repeatedly; widely reproduced pain point affecting basic file-write reliability.
3. **[#14273 Free usage exceeded despite balance](https://github.com/anomalyco/opencode/issues/14273)** (40 comments) — Zen free-tier models (Kimi K2.5, MiniMax2.5) throw credit errors even with positive account balance; closed but recurring theme (see #42013, #40234).
4. **[#4832 Gemini 3 Pro function calling fails](https://github.com/anomalyco/opencode/issues/4832)** (35 comments, 14 👍) — Missing `thoughtSignature` support breaks tool-use with Gemini 3 Pro; closed after long tail of activity.
5. **[#4714 TUI: search within session buffer](https://github.com/anomalyco/opencode/issues/4714)** (32 comments, 45 👍) — Long-standing feature request for find-in-output, similar to text editor search.
6. **[#4821 Ability to unqueue messages](https://github.com/anomalyco/opencode/issues/4821)** (23 comments, 84 👍) — High upvote count; users want to cancel queued messages when they overcorrect an in-flight agent run.
7. **[#39845 DeepSeek V4 Flash requires China-hosted opt-in](https://github.com/anomalyco/opencode/issues/39845)** (20 comments, 27 👍) — Mid-session failures when Go subscription routing suddenly requires explicit opt-in for China-hosted models.
8. **[#33356 Unbounded `event` table growth (13GB+)](https://github.com/anomalyco/opencode/issues/33356)** (17 comments, 4 👍) — No retention/compaction on the local SQLite event-sourcing table; filled a 22GB volume on long-lived instances.
9. **[#19130 Windows ARM64: OpenTUI fails via bun:ffi/TinyCC](https://github.com/anomalyco/opencode/issues/19130)** (17 comments, 12 👍) — Native ARM64 binary works for CLI commands but TUI initialization fails.
10. **[#37790 Go subscription paid but "Insufficient balance"](https://github.com/anomalyco/opencode/issues/37790)** (13 comments) — Stripe payment succeeds but workspace still blocks usage; part of a broader billing-reliability cluster.

## Key PR Progress

1. **[#35311 Multiple clones of same repo treated as different projects](https://github.com/anomalyco/opencode/pull/35311)** — Core fix closing 16 linked issues; refactors project identity resolution.
2. **[#42275 Resolve child process exit signal on exit event](https://github.com/anomalyco/opencode/pull/42275)** — Fixes hung processes when a detached child exits but a grandchild inherits the stdio pipe.
3. **[#42274 Encode PowerShell commands to preserve multi-line output](https://github.com/anomalyco/opencode/pull/42274)** — Fixes newline mangling on Windows when using `.cmd`-wrapped PowerShell shells.
4. **[#26861 Old messages disappearing during long sessions](https://github.com/anomalyco/opencode/pull/26861)** — Adds lazy-scroll loading (50 older messages per page) to fix TUI history loss.
5. **[#39382 Add subagents tab to session side panel](https://github.com/anomalyco/opencode/pull/39382)** — New UI surface for tracking subagent activity without it being buried in the main transcript.
6. **[#42253 Propagate session errors and surface tool-load warnings in UI](https://github.com/anomalyco/opencode/pull/42253)** — Fixes silently dropped session run defects.
7. **[#42252 Skip tool files that fail to load](https://github.com/anomalyco/opencode/pull/42252)** — Prevents one broken custom tool file from breaking the whole tool registry.
8. **[#41748 Interrupt running prompt when a new one is submitted](https://github.com/anomalyco/opencode/pull/41748)** — Fixes submission handling during long-running bash tool calls (e.g., `sleep 30`).
9. **[#42248 Preserve prompt cache affinity](https://github.com/anomalyco/opencode/pull/42248)** — Fixes V2 session cache key propagation so OpenRouter (not just OpenAI namespace) benefits from prompt caching.
10. **[#42257 Persist Config.update to loaded config file](https://github.com/anomalyco/opencode/pull/42257)** — Fixes silent config mutation loss where the SDK's `client.config.update` returned 200 but didn't persist.

## Feature Request Trends

- **In-session search and navigation**: find-in-buffer (#4714), inline skill invocation via `$skill-name` (#15617), multi-skill support in a single prompt (#25570).
- **Session/queue control**: unqueue messages (#4821), configurable session flag behavior (#3434), subagent status visibility (#23784, #39382).
- **Billing flexibility**: crypto payment support for Go (#23153).
- **UI ergonomics**: reload config without restart (#6815), configurable permission-prompt panel height (#28191), Mermaid diagram rendering in chat (#3366).

## Developer Pain Points

- **Billing/subscription reliability** is the single largest recurring complaint cluster: paid Go subscriptions not activating (#37790, #40234), declined cards (#33264), free-tier limits triggering unexpectedly (#14273, #42013).
- **Long-session degradation**: unbounded local DB growth (#33356), memory leaks (#20695), and TUI history loss (#26861) all point to the same underlying theme — OpenCode isn't yet robust for very long-lived sessions.
- **Provider/model integration gaps**: Gemini 3 Pro tool-calling (#4832), Kimi K2 message-role errors (#6056), MCP tools connecting but not exposing to the agent (#33027) — third-party model/tool compatibility remains a friction point.
- **Platform-specific bugs**: Windows ARM64 TUI failures (#19130), PowerShell multi-line output corruption (#42274), Safari IME composition breaking CJK input (#38728).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
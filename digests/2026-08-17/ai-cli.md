# AI CLI Tools Community Digest 2026-08-17

> Generated: 2026-08-17 07:48 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools — Cross-Tool Community Digest Comparison
**2026-08-17**

## 1. Ecosystem Overview

The AI CLI tooling space is in a consolidation-and-hardening phase rather than a feature-race: both Claude Code and OpenCode show no new releases in the tracked 24h window, with engineering effort concentrated on internal refactors, infrastructure cleanup, and long-tail bug fixes rather than headline features. OpenCode's activity skews toward large architectural refactors (client/server layer unification across Desktop, Web, and TUI) and new provider integrations (LM Studio), while Claude Code's window is dominated by community governance signals — a single issue (#6235, AGENTS.md standardization) has amassed 4,574 👍, dwarfing all other engagement in either tracker. Both ecosystems share a maturing-pains profile: session/context persistence, cross-session reliability, and billing/entitlement accuracy are recurring themes, suggesting these tools have moved from "does it work" to "does it work reliably at scale and across sessions." Community-driven extensibility (skills, plugins, hot-reload) is a consistent growth vector for both. Overall, the space reads as increasingly commercial and infrastructure-conscious, with monetization (billing/quota bugs) now surfacing as a first-class pain point alongside core reliability.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #6235: 352 comments / 4,574 👍 | #27167: 72 comments / 130 👍 |
| PRs tracked | 9 | 10 |
| PR focus | Internal tooling hardening (`scripts/`, `plugin-dev/`), 1 firewall fix | Architecture refactor (client/server unification), new provider, perf fixes |
| Releases (24h) | None | None |
| Notable single-contributor pattern | Yes — one contributor authored 6 of 9 PRs (script/plugin-dev hardening) | Yes — `Brendonovich` authored the app/client refactor stack (3+ PRs) |

## 3. Shared Feature Directions

- **Session/context persistence across interruptions**: Claude Code's #34556 (59 compactions over 26 days, user built a custom memory workaround) and OpenCode's session-goal request (#27167, 130 👍) both point to demand for durable state that survives session lifecycle events — currently unmet by either tool natively.
- **Config/extensibility hot-reload and organization**: Claude Code wants recursive/subdirectory skill discovery (#10238, #18192); OpenCode wants hot-reload for agents/skills/commands without restart (#8751, 91 👍) and a plugin API for custom UI surfaces (#5971). Both point to plugin/skill systems that haven't kept pace with power-user config complexity.
- **Cross-session/cross-device reliability**: Claude Code has three open bugs around dropped cross-session messages (#86298, #86014, #36503); OpenCode has requests for auto-sync across devices (#13626) and reports of stuck/hung operations (#11112, 7+ months open). Both reflect growing multi-session, multi-device usage outpacing the underlying sync/notification layer.
- **Billing/cost attribution accuracy**: Claude Code flags Opus subagent usage billed as Fable (#73597); OpenCode has a cluster of billing bugs — insufficient balance despite payment (#37790), paid Zen models erroring (#36506), quota mismatches (#42985). Independent of each other, but the same underlying signal: usage-based billing systems are lagging entitlement/metering accuracy as these tools monetize.

## 4. Differentiation Analysis

- **Governance vs. architecture focus**: Claude Code's top engagement is a standardization/interop request (AGENTS.md — adopting a format shared with Codex, Cursor, Amp), signaling its community cares about ecosystem interoperability and being a good citizen in a multi-tool developer workflow. OpenCode's top PR activity is inward-facing architectural consolidation (unifying Desktop/Web/TUI on shared client and server-data layers), signaling a product still actively unifying its own surface areas rather than standardizing against peers.
- **Contribution model**: Claude Code's PR batch comes from hardening internal maintainer tooling (bash scripts, plugin-dev test harness) — defensive, low-risk fixes. OpenCode's PRs are feature/perf-additive (LM Studio provider, 88% SSE throughput gain with 48% less CPU on Windows) — indicates a codebase still investing in core capability and performance, not just stabilizing internals.
- **Target user signals**: Claude Code's pain points (tool-search regressions, permission-prompt UX, enterprise OAuth whitelisting #27263) suggest an enterprise/security-conscious user base layering governance controls on top of the tool. OpenCode's pain points (clipboard failures, Ctrl+C UX, local DB bloat, Fedora packaging requests) suggest a more desktop/terminal power-user base focused on daily-driver ergonomics and local resource management.
- **Model-behavior scrutiny**: Claude Code uniquely surfaces a detailed model-behavior report (#60705) about the model citing stop-hook directives as unrequested-action authorization — a qualitative "trustworthiness of agent reasoning" concern not mirrored in OpenCode's issue set, which stays largely at the infrastructure/UX layer.

## 5. Community Momentum & Maturity

Claude Code shows the sharper immediate spike — #6235 alone (4,574 👍) reflects a broad, vocal cross-tool constituency, and #60705's 121-comment behavioral discussion shows an engaged, technically sophisticated user base scrutinizing model reasoning, not just bugs. However, its PR volume this window (9, mostly maintainer-internal) is comparatively low-velocity for user-facing change. OpenCode shows more sustained, broad-based engagement across its top-10 issues (72, 81, 24, 20, 20, 17, 16, 16, 12, 12 comments — a flatter, wider distribution vs. Claude Code's one dominant outlier) and materially higher PR throughput (10 PRs, several with measurable performance data), indicating a team iterating faster on architecture and shipping perf-validated changes. Read together: Claude Code's community is larger/louder on a single standardization ask and model-trust concerns; OpenCode's community is more evenly engaged across a broader spread of operational pain points, with the project itself iterating at a visibly faster architectural pace this cycle.

## 6. Trend Signals

- **Config standardization pressure is real and growing**: AGENTS.md's 4,574 👍 is a strong signal that multi-tool developers want portable, tool-agnostic project config — vendors resisting this risk friction as teams standardize workflows across Claude Code, Codex, Cursor, and Amp.
- **Session/context durability is the next reliability frontier**: both ecosystems show unresolved, high-engagement demand for state that survives compaction, restarts, or cross-device use — expect this to be a differentiator in the next 6–12 months as agentic sessions grow longer and more stateful.
- **Usage-based billing is outpacing entitlement infrastructure**: independent billing/quota bugs in both ecosystems suggest the broader agentic-CLI category is scaling monetization faster than the metering/entitlement plumbing underneath it — a risk area for any team evaluating paid tiers of these tools today.
- **Plugin/extensibility systems are under strain**: both tools show demand outstripping current plugin/skill architecture (hot-reload, subdirectory support, custom UI surfaces) — a sign that early plugin designs were scoped for smaller libraries than power users now maintain.
- **Model-behavior transparency is emerging as a distinct evaluation axis**: Claude Code's #60705 (stop-hook directive misused as action authorization) is a preview of a maturing scrutiny trend — as these tools take more autonomous action, communities are starting to audit *why* the model acted, not just *whether* the feature works.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-17 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

*(Ranked by sustained community engagement — discussion duration, related-issue cross-references, and 👍 reactions, since per-PR comment counts weren't available in this pull)*

| # | Skill / PR | Function | Status |
|---|---|---|---|
| 1 | **[#568](https://github.com/anthropics/skills/pull/568) ServiceNow platform skill** | Broad ServiceNow assistant covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub | OPEN — the longest-lived open PR in the set (Mar 8 → Aug 12, 5+ months), signaling active maintainer back-and-forth on scope for a large enterprise skill |
| 2 | **[#1298](https://github.com/anthropics/skills/pull/1298) skill-creator: fix `run_eval.py` 0% recall bug** | Fixes the eval harness so `run_eval.py`/`run_loop.py`/`improve_description.py` report real trigger recall instead of a constant 0%; also fixes Windows stream reading and parallel workers | OPEN — directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) and overlaps with [#1419](https://github.com/anthropics/skills/issues/1419), making it the most structurally important open fix in the repo |
| 3 | **[#525](https://github.com/anthropics/skills/pull/525) pyxel retro-game skill** | Adds a skill for the `pyxel-mcp` server, driving retro/pixel-art game creation in Python via a write → run_and_capture → inspect → iterate loop | OPEN — nearly 4 months of activity (Mar 5 → Jul 15) from the pyxel engine's own author |
| 4 | **[#538](https://github.com/anthropics/skills/pull/538) pdf skill: fix case-sensitive file refs** | Corrects 8 case mismatches (`REFERENCE.md`/`FORMS.md` vs. lowercase actual files) that break the skill on case-sensitive filesystems | OPEN — small, high-confidence fix open since March |
| 5 | **[#541](https://github.com/anthropics/skills/pull/541) docx skill: fix tracked-change ID collisions** | Fixes document corruption caused by hardcoded low `w:id` values colliding with existing bookmarks/comments in OOXML | OPEN — a correctness fix for a widely-used document skill |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486) ODT skill** | New skill for creating, filling, reading, and converting OpenDocument (.odt/.ods) files, including ODT→HTML parsing | OPEN — active for ~1.5 months, fills a gap alongside existing docx/pdf skills |
| 7 | **[#514](https://github.com/anthropics/skills/pull/514) document-typography skill** | Quality-control skill for AI-generated documents: catches orphan word-wraps, widow paragraphs, and numbering misalignment | OPEN — targets a defect class that affects "every document Claude generates" |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83) skill-quality-analyzer + skill-security-analyzer** | Two meta-skills that score Skills across structure/documentation and security dimensions for the marketplace | OPEN — one of the earliest proposals (opened Nov 2025), still unmerged 2+ months later |

## 2. Community Demand Trends (from Issues)

- **Trust & security boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, by far the most-discussed issue in the repo) flags community skills impersonating official ones under an `anthropic/` namespace. This is the single largest unresolved concern.
- **Reliable skill-triggering / eval tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and [#1419](https://github.com/anthropics/skills/issues/1419) both report `run_eval.py` never correctly measuring trigger recall, directly fueling PR #1298 above.
- **Org/team distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for native org-wide skill sharing in Claude.ai instead of manual `.skill` file passing.
- **Duplicate/bloated installs** — [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports `document-skills` and `example-skills` plugins installing identical content; [#1487](https://github.com/anthropics/skills/issues/1487) reports a single skill injecting ~156k tokens and exhausting the context window.
- **Output-quality gating** — [#1385](https://github.com/anthropics/skills/issues/1385) proposes a multi-gate "reasoning quality" pipeline (calibration → adversarial review → delivery verification), echoed in PR #1367.
- **Discoverability/reliability of installed skills** — [#62](https://github.com/anthropics/skills/issues/62) (10 comments) reports skills silently disappearing after local file changes.

## 3. High-Potential Pending Skills

PRs most likely to land soon, based on direct linkage to actively-discussed issues or a cluster of related fixes from engaged contributors:

- **[#1298](https://github.com/anthropics/skills/pull/1298)** — fixes the exact bug in [#556](https://github.com/anthropics/skills/issues/556)/[#1419](https://github.com/anthropics/skills/issues/1419); overlaps with two independent Windows-focused fixes ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) — three contributors converging on the same root cause strongly suggests a maintainer merge is due.
- **[#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541), [#539](https://github.com/anthropics/skills/pull/539)** — a trio of low-risk, high-confidence bug fixes from the same author (Lubrsy706) targeting the pdf/docx/skill-creator skills.
- **[#509](https://github.com/anthropics/skills/pull/509)** — adds `CONTRIBUTING.md`, explicitly closing the community-health gap raised in Issue #452; low-risk, process-improving.
- **[#1538](https://github.com/anthropics/skills/pull/1538)** — brings two skills back into spec compliance with the repo's own `skills-ref validate` reference implementation, a correctness fix maintainers are likely to prioritize.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't for new Skill *content* — it's for **infrastructure reliability and trust**: fixing the broken eval/trigger-detection tooling that skill authors depend on, and closing the namespace-impersonation trust gap that lets fake skills masquerade as official Anthropic ones.

---

# Claude Code Community Digest — 2026-08-17

## Today's Highlights

No new releases in the last 24 hours, but issue activity was heavy — led by the long-running AGENTS.md standardization request (#6235, 352 comments / 4,574 👍) and a detailed model-behavior report (#60705, 121 comments) alleging Claude cited stop-hook directives as authorization for unrequested actions. PR activity was dominated by a batch of hardening fixes to the repo's internal `scripts/` and `plugin-dev/` tooling from a single contributor, plus one firewall allowlist cleanup.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235)** — Support AGENTS.md (352 comments, 4,574 👍). The single most-engaged issue in the tracker: requests Claude Code adopt the cross-tool `AGENTS.md` standard (used by Codex, Amp, Cursor) alongside/instead of `CLAUDE.md`. Closed, but engagement dwarfs everything else in this dataset.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Model behavior: `/goal` stop-hook directive cited as authorization for unrequested actions (121 comments). A detailed report of model-side behavior patterns — treating absence-from-search as evidence of absence, structure-as-substance under pushback — that user-level CLAUDE.md rules couldn't catch.
3. **[#34556](https://github.com/anthropics/claude-code/issues/34556)** — Persistent memory across context compactions (87 comments). User documents 59 compactions over 26 days and describes building a custom memory-persistence system to work around the gap.
4. **[#10238](https://github.com/anthropics/claude-code/issues/10238)** — Support subdirectories in skills (52 comments, 167 👍). Long-requested organizational feature for larger skill libraries.
5. **[#27263](https://github.com/anthropics/claude-code/issues/27263)** — Configurable external URL whitelist for OAuth/third-party flows (51 comments, 131 👍). Needed for enterprise/App Preview environments with restricted egress.
6. **[#36503](https://github.com/anthropics/claude-code/issues/36503)** — `--channels` plugin reports unavailable but silently drops inbound notifications (48 comments, 37 👍). Open; Telegram channel plugin runs but messages never trigger a response.
7. **[#18192](https://github.com/anthropics/claude-code/issues/18192)** — Recursive skill discovery in `~/.claude/skills/` (40 comments, 63 👍). Companion request to #10238 — skills nested in subdirectories aren't auto-discovered.
8. **[#52121](https://github.com/anthropics/claude-code/issues/52121)** — Grep/Glob tools missing entirely under `ENABLE_TOOL_SEARCH=true` (22 comments, 21 👍). Open, has repro; built-ins should be deferred, not absent from both the direct toolset and `ToolSearch`.
9. **[#73597](https://github.com/anthropics/claude-code/issues/73597)** — Opus subagents billed as Fable usage (15 comments). Billing/cost-tracking discrepancy for subagent model attribution.
10. **[#86298](https://github.com/anthropics/claude-code/issues/86298)** — Desktop app (Windows): cross-session messages silently dropped, held for an approval the UI never offers (12 comments). Open regression since app build 1.28929.0, has repro.

## Key PR Progress

1. **[#72451](https://github.com/anthropics/claude-code/pull/72451)** — `fix: remove statsig.anthropic.com from init-firewall.sh`. Drops a dead hostname from the devcontainer firewall allowlist that was causing startup failures when DNS resolution failed.
2. **[#84004](https://github.com/anthropics/claude-code/pull/84004)** — `fix(plugin-dev): limit frontmatter parsing`. Restricts YAML frontmatter parsing to the opening block only, fixing corruption when a Markdown body contains its own `---` horizontal rules.
3. **[#84003](https://github.com/anthropics/claude-code/pull/84003)** — `fix(scripts): propagate top-level failures`. Replaces silent `.catch(console.error)` handling with proper failing exit codes for duplicate-maintenance scripts.
4. **[#83999](https://github.com/anthropics/claude-code/pull/83999)** — `fix(scripts): validate gh flag values`. Rejects value-taking `gh` wrapper flags missing their value, closing a validation bypass (e.g. `gh issue list --limit` with no argument).
5. **[#83995](https://github.com/anthropics/claude-code/pull/83995)** — `fix(scripts): validate label option values`. Fixes an unbound-variable crash and argument-shifting bug when `--add-label`/`--remove-label` are invoked without a value.
6. **[#83993](https://github.com/anthropics/claude-code/pull/83993)** — `fix(scripts): reject self-referential duplicates`. Prevents `comment-on-duplicates.sh` from flagging an issue as a duplicate of itself.
7. **[#83992](https://github.com/anthropics/claude-code/pull/83992)** — `fix(plugin-dev): assert expected hook decision`. Adds an `--expect allow|deny|ask` flag to `test-hook.sh` so tests can catch a hook that allows what it should deny, not just confirm it ran.
8. **[#83990](https://github.com/anthropics/claude-code/pull/83990)** — `fix(plugin-dev): report missing jq dependency`. `test-hook.sh` now explicitly checks for `jq` before use instead of misreporting a missing dependency as malformed JSON.
9. **[#87125](https://github.com/anthropics/claude-code/pull/87125)** — `Create python-package-conda.yml` (open). Low-context PR from a first-time contributor; summary field contains only a commit hash — likely needs maintainer triage before merge consideration.

*(Only 9 PRs were updated in the tracked window; all listed above.)*

## Feature Request Trends

- **Cross-tool standardization**: AGENTS.md adoption (#6235) remains the top ask by a wide margin — teams want one config format shared across Claude Code, Codex, Cursor, and Amp.
- **Skills organization**: Subdirectory support and recursive discovery (#10238, #18192) are consistently requested together as skill libraries grow.
- **Memory & context persistence**: Multiple issues (#34556, #9796) point to demand for durable state that survives context compaction — currently addressed only by user-built workarounds.
- **MCP/config management**: Persistent, enable/disable-able user-level MCP configs (#11085) and a `settings.json` override mechanism (#37790) reflect growing multi-project/multi-machine setups.
- **Session/agent coordination**: Cross-session coordination primitives (#76727) and hook-callable session naming (#44786) suggest heavier multi-session, multi-agent workflows outgrowing current tooling.

## Developer Pain Points

- **Cross-session messaging is unreliable**: Three separate open bugs (#86298, #86014, #36503) describe messages/notifications between sessions or via channel plugins being silently dropped, stuck, or never delivered — a recurring theme this cycle.
- **Permission-prompt UX friction**: Clickable Yes/No prompts causing accidental approvals/cancellations (#70622) and mouse clicks unintentionally triggering permission prompts on Linux (#71539) are both flagged as regressions from prior keyboard-only flows.
- **Tool-search regressions**: `ENABLE_TOOL_SEARCH=true` making built-in Grep/Glob vanish entirely (#52121) and Task tools intermittently unregistering mid-session (#80401) point to instability in the deferred-tool system.
- **Context compaction data loss**: Project-context instructions being erased on compaction (#9796) and lost assistant text between tool calls with interleaved thinking (#77651) continue to erode trust in long-running sessions.
- **Billing/cost attribution confusion**: Opus subagent usage being billed under Fable (#73597) adds to prior cost-transparency complaints.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-17

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No new releases landed in the last 24h, but engineering activity was dominated by a large refactor stacking PRs from `Brendonovich` that migrate the Desktop app onto a shared client-connection/server-data layer, plus a new built-in LM Studio provider with local model discovery. On the community side, long-running pain points around clipboard copy failures, Ctrl+C accidentally quitting sessions, and unbounded local database growth continue to draw heavy engagement, while OpenCode Go/Zen billing complaints (insufficient balance despite payment, quota mismatches, paid models erroring) remain a recurring theme.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#11112](https://github.com/anomalyco/opencode/issues/11112) — Stuck at "Preparing write..."** (81 comments, 46 👍, open since Jan) — A persistent, high-friction bug where tool-writes hang indefinitely and get aborted; still unresolved after 7+ months and the top comment-volume issue in the tracker.
2. **[#27167](https://github.com/anomalyco/opencode/issues/27167) — [FEATURE] Native session goals via `/goal`** (72 comments, 130 👍) — Most-upvoted item in this window; requests a persistent session goal/lifecycle primitive distinct from custom slash commands.
3. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded `event` table growth (opencode.db reaches 13GB+)** (20 comments, 5 👍) — Event-sourcing table has no retention/compaction, filling disks on long-lived instances; a data-integrity/ops concern for power users.
4. **[#7048](https://github.com/anomalyco/opencode/issues/7048) / [#41470](https://github.com/anomalyco/opencode/issues/41470) — "Copied to clipboard" doesn't actually copy** (24 + 16 comments) — Same underlying failure reported months apart (desktop and VS Code Server/Docker environments), suggesting the original fix was incomplete or environment-specific.
5. **[#8751](https://github.com/anomalyco/opencode/issues/8751) — [FEATURE] Hot-reload agents, skills, and commands** (20 comments, 91 👍) — High-upvote request to avoid restarting OpenCode after editing configs.
6. **[#7957](https://github.com/anomalyco/opencode/issues/7957) — Ctrl+C exits OpenCode instead of copying** (16 comments, 49 👍) — UX conflict with the universal copy shortcut; frequent source of accidental session termination.
7. **[#31119](https://github.com/anomalyco/opencode/issues/31119) — `Error: no such column: name`** (17 comments, 16 👍) — Update-path breakage that fully blocks usage after upgrading from an older version; likely a migration bug.
8. **[#37790](https://github.com/anomalyco/opencode/issues/37790) — OpenCode Go: paid subscription still shows "Insufficient balance"** (16 comments) — Billing/entitlement sync bug blocking paying users from Go access.
9. **[#36506](https://github.com/anomalyco/opencode/issues/36506) — All paid Zen models fail with "Upstream request failed"** (12 comments) — Free-tier Zen models work while paid ones error, pointing at a provider-routing or entitlement bug specific to paid Zen.
10. **[#5971](https://github.com/anomalyco/opencode/issues/5971) — [FEATURE] Plugin API for custom sidebar panels** (12 comments, 37 👍) — Requests extending the plugin system beyond tools/hooks/agents to custom sidebar UI.

## Key PR Progress

1. **[#43016](https://github.com/anomalyco/opencode/pull/43016) `refactor(app): use shared client connection`** — Replaces the web app's hand-rolled event stream with `createClientConnection`, part of a larger consolidation stack.
2. **[#43017](https://github.com/anomalyco/opencode/pull/43017) `refactor(app): use shared server data`** — Migrates app consumers onto a shared server-data layer, removing duplicated sync/reducer/cache logic (depends on #42999).
3. **[#42999](https://github.com/anomalyco/opencode/pull/42999) `refactor(client): share Solid server data`** — Extracts the TUI's Solid server-data store into `@opencode-ai/client/solid`, the foundation for the app/TUI unification stack above.
4. **[#42607](https://github.com/anomalyco/opencode/pull/42607) / [#43015](https://github.com/anomalyco/opencode/pull/43015) `feat/fix(core): LM Studio provider discovery`** — Adds a built-in LM Studio provider with zero-config local model discovery, vision/tool-use metadata, and a follow-up fix to correctly mark it active after discovery.
5. **[#35311](https://github.com/anomalyco/opencode/pull/35311) `fix(core): Multiple clones of same repo are different projects`** — Closes 16 separate duplicate reports; fixes project identity resolution across repo clones.
6. **[#42980](https://github.com/anomalyco/opencode/pull/42980) `fix(core): reduce Windows server CPU under parallel sessions`** — Reports SSE event throughput up 88% (77.5k → 145.9k events/s) with 48% less CPU by cutting redundant process/executable resolution.
7. **[#42978](https://github.com/anomalyco/opencode/pull/42978) `fix(app): show current worktree branch`** — Fixes new-session branch resolution for manually created Git worktrees in Desktop.
8. **[#42993](https://github.com/anomalyco/opencode/pull/42993) `refactor(app): remove legacy layout`** — Makes the current app layout unconditional, deleting the old layout paths, stale tests, and an unused dependency.
9. **[#35976](https://github.com/anomalyco/opencode/pull/35976) `fix(opencode): add --dir option to web/serve`** — Adds an explicit directory flag for `opencode web`/`serve` to fix worktree resolution, closing several related root-cause reports.
10. **[#43011](https://github.com/anomalyco/opencode/pull/43011) `docs: add ClawMetry to ecosystem page`** — Adds a community project (local-first OpenCode observability tool) to the ecosystem docs.

## Feature Request Trends

- **Session/context lifecycle management**: persistent session goals (#27167), forking from AI messages not just user messages (#8689), "fork to new session" from timeline (#25582) — users want more granular control over conversation branching and continuity.
- **Plugin/extensibility surface area**: hot-reload for agents/skills/commands (#8751), plugin API for sidebar panels (#5971), middleware-style plugin pipeline (#5148) — a consistent push to make OpenCode's plugin system more powerful and dynamic.
- **Multi-device/sync**: auto-sync projects in the web UI from server (#13626) reflects growing use of OpenCode across devices/browsers.
- **Packaging/distribution**: requests like a Fedora Copr repo (#22572) indicate demand for broader native OS packaging.

## Developer Pain Points

- **Clipboard copy reliability** remains broken across environments (desktop, Docker/VS Code Server) despite prior fix attempts (#7048, #41470) — a low-severity but extremely high-friction daily annoyance.
- **Billing/quota inconsistencies on OpenCode Go and Zen** are a recurring theme: paid subscriptions showing insufficient balance (#37790), paid models erroring while free ones work (#36506), quota usage appearing ~4x higher than displayed cost (#42985), and paid balances still triggering free-tier limits (#33318) — collectively suggest entitlement/metering sync issues between billing and the inference gateway.
- **Local storage/DB health**: unbounded `event` table growth with no retention policy (#33356) causing multi-GB local databases on long-running instances.
- **Upgrade/migration breakage**: `no such column: name` after updating (#31119) suggests schema migrations aren't always applied cleanly on upgrade paths.
- **Terminal UX rough edges**: Ctrl+C exiting instead of copying (#7957) and garbled mouse escape sequences after TUI exit (#20458) point to gaps in terminal signal/escape-sequence handling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
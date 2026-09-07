# AI CLI Tools Community Digest 2026-09-07

> Generated: 2026-09-07 13:14 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem — 2026-09-07

## 1. Ecosystem Overview

The AI CLI tool space continues to mature at a rapid, PR-heavy pace even without headline releases today — both Claude Code and OpenCode show zero new releases in the last 24 hours but sustain heavy issue/PR churn, indicating development has shifted from major version launches to continuous refinement. A common thread across both ecosystems is **extensibility via plugins/hooks**: developers on both sides are pushing maintainers toward deeper, middleware-style customization rather than surface-level configuration. Platform reliability (Windows-specific bugs, cross-OS packaging) and trust-eroding infrastructure issues (verification/auth friction for Claude Code, billing/quota bugs for OpenCode) are consuming disproportionate community attention relative to net-new features. Both tools are also visibly wrestling with **regression management** — silent tool/feature removal, config overrides, and behavior changes across versions are recurring complaint patterns. Overall, the ecosystem signals a shift from "does it work" to "does it work reliably, extensibly, and predictably at scale."

## 2. Activity Comparison

| Tool | Open/Updated Issues (sample) | PRs Tracked | Releases (24h) | Most-Engaged Issue |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues highlighted; #84352 at 197 comments | 10 key PRs tracked (several closed) | None | #24726 (225 👍) — VS Code auto-attach context |
| **OpenCode** | 188 open/updated issues total | 177 PRs total; 10 highlighted | None | #4283 (129 comments, 121 👍) — Copy to Clipboard broken |

**Note:** Claude Code's digest surfaces curated top issues without a total count; OpenCode explicitly reports scale (188 issues / 177 PRs), suggesting OpenCode's tracked repo activity volume is higher or at least more transparently surfaced — though this may partly reflect differing digest methodologies rather than true relative activity.

## 3. Shared Feature Directions

- **Plugin/hook extensibility** — the single strongest cross-tool signal. Claude Code's [#91870](https://github.com/anthropics/claude-code/issues/91870) (Function Hooks, 79 👍) mirrors OpenCode's [#7006](https://github.com/anomalyco/opencode/issues/7006), [#46530](https://github.com/anomalyco/opencode/pull/46530), and [#47754](https://github.com/anomalyco/opencode/pull/47754) — both communities want plugins to hook deeper into request/response lifecycles with proper permission/assertion semantics, not just fire-and-forget events.
- **Silent regressions eroding trust** — Claude Code's disappearing task-list tools ([#80015](https://github.com/anthropics/claude-code/issues/80015)) and Auto Mode overriding CLAUDE.md ([#90450](https://github.com/anthropics/claude-code/issues/90450)) parallel OpenCode's V2 parity gaps (invisible agent/mode switches, #40474) — both user bases are flagging behavior changing without notice or documentation.
- **Cross-platform/Windows friction** — Claude Code has three duplicate Windows always-on-top issues; OpenCode has Windows port collisions ([#47776](https://github.com/anomalyco/opencode/pull/47776)) and musl/Alpine breakage ([#27589](https://github.com/anomalyco/opencode/issues/27589)). Windows support quality remains a weak point industry-wide.
- **Context/session state management** — Claude Code's compaction/memory issues ([#67500](https://github.com/anthropics/claude-code/issues/67500), [#81833](https://github.com/anthropics/claude-code/issues/81833)) and OpenCode's automatic compaction scheduling work ([#47324](https://github.com/anomalyco/opencode/pull/47324)) both reflect long-session context reliability as a maturing but still fragile area.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| **Feature focus** | Model-alignment nuance (stop-hook authorization semantics, #60705), enterprise verification/compliance (CVP approval, #84352) | Multi-provider plumbing (MCP tool exposure, Copilot/DeepSeek/GPT-5.6 provider integration), permission-system correctness |
| **Target users** | Enterprise/org-governed deployments (cyber-safeguard, verification portal friction) alongside individual IDE users | Power users juggling multiple LLM providers and a paid "Go" subscription tier |
| **Technical approach** | Tighter coupling to Anthropic's own product surface (Desktop app, VS Code extension, skills) | Provider-agnostic architecture with heavier reliance on MCP as integration layer, actively refactoring core FS/permission internals |
| **Monetization friction** | Not prominent in today's digest | Direct and visible — Go subscription billing, quota, and outage complaints are a distinct pain category |

Claude Code's problems skew toward **trust in automated behavior** (did the model do what I told it, did config get respected) and **enterprise gatekeeping**, while OpenCode's skew toward **infrastructure/integration correctness** (does the provider work, does the permission system evaluate as documented, is billing accurate).

## 5. Community Momentum & Maturity

- **OpenCode** shows higher raw volume (188 issues, 177 PRs) and a visibly more active core-refactoring cadence (filesystem policy unification, server-side permission decisions, automatic compaction) — consistent with a tool still iterating on foundational architecture (V2 migration).
- **Claude Code** shows deep, sustained engagement on fewer, higher-stakes threads (197 and 163-comment issues) — indicative of a larger, more established user base where issues escalate into extended debate rather than quick PR churn, and where enterprise/compliance concerns carry outsized weight.
- Both projects show strong **maintainer PR throughput on security-relevant fixes** (Claude Code: symlink escape, shell injection fixes; OpenCode: schema sanitization, permission-order fixes) — a sign of active security hygiene rather than reactive patching alone.

## 6. Trend Signals

- **Plugin ecosystems are becoming the primary battleground for CLI AI tools.** Both leading tools are racing to expose richer hook/permission APIs — developers evaluating these tools should weight extensibility architecture heavily, as this is where near-term differentiation will land.
- **"Did my configuration actually apply?" is an emerging category of bug** distinct from traditional crashes/errors — silent overrides (Auto Mode/CLAUDE.md, V2 mode switches) suggest the industry needs better introspection/observability tooling for agent configuration state.
- **Subscription/usage-based billing for AI CLI tools is maturing painfully** — OpenCode's Go tier outages and quota bugs are an early signal that as these tools move from free/BYO-key models to bundled subscriptions, billing reliability will become a competitive factor, not just a technical one.
- **MCP is solidifying as the de facto integration standard**, but its immaturity is now the load-bearing bottleneck for cross-tool feature velocity (schema sanitization, tool exposure bugs) — teams building on MCP should budget for these rough edges rather than assume spec compliance guarantees interop.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-07 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

| # | Skill / PR | Function | Discussion Highlights | Status |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval fix | Fixes `run_eval.py` always reporting 0% recall; corrects Windows stream reading, trigger detection, parallel workers | Directly resolves the widely-reported [#556](https://github.com/anthropics/skills/issues/556) bug (12 comments, 7 👍) that broke the entire description-optimization loop | Open |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | New skill enforcing typographic QC on generated docs — fixes orphan wraps, widow paragraphs, numbering misalignment | Addresses a pain point common to nearly every document-generation workflow | Open |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | New skill for operating SCNet HPC clusters via profile-based SSH/Slurm | Niche but complete: connection profiles, job generation, cluster discovery | Open |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf skill fix | Fixes 8 case-sensitive file reference mismatches in `SKILL.md` (breaks on case-sensitive filesystems) | Small, low-risk correctness fix; easy merge candidate | Open |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | New skill for creating/filling/parsing OpenDocument (.odt/.ods) files | Extends document-format coverage beyond docx/pdf | Open |
| [#210](https://github.com/anthropics/skills/pull/210) | frontend-design revamp | Rewrites frontend-design skill for clarity and single-turn actionability | Structural rewrite rather than net-new capability | Open |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / skill-security-analyzer | Two meta-skills scoring other skills across 5 quality dimensions and for security risk | Speaks directly to the trust/security concerns raised in Issue #492 | Open |
| [#541](https://github.com/anthropics/skills/pull/541) | docx tracked-changes fix | Fixes `w:id` collisions between tracked changes and existing bookmarks that corrupt documents | Root-caused to shared OOXML ID space; concrete repro | Open |

## 2. Community Demand Trends (from Issues)

- **Skill trust & security boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, highest engagement in the repo) flags community skills impersonating the `anthropic/` namespace; strong signal for a verification/provenance mechanism.
- **Enterprise/org distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) wants native org-wide skill sharing instead of manual `.skill` file passing.
- **Eval/trigger reliability tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and related mcp-builder eval bugs ([#1390](https://github.com/anthropics/skills/issues/1390)) show demand for a working skill-testing harness, not just more skills.
- **Packaging/duplication hygiene** — [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) on duplicate skills across bundled plugins.
- **Context-window discipline** — [#1487](https://github.com/anthropics/skills/issues/1487) reports a skill injecting ~156k tokens in one call, pointing to appetite for lazy-loading/size-budget conventions.
- **Reasoning/output quality gates** — [#1385](https://github.com/anthropics/skills/issues/1385) and [#412](https://github.com/anthropics/skills/issues/412) propose governance/verification layers on top of Claude's output.
- **Cross-platform reliability** — recurring Windows subprocess/encoding fixes ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) and Bedrock support questions ([#29](https://github.com/anthropics/skills/issues/29)).

## 3. High-Potential Pending Skills

Skills whose PRs are still open but tied to high-signal issues or sustained update activity — likely near-term merge candidates:

- **[#1298](https://github.com/anthropics/skills/pull/1298)** — fixes the repo's most-discussed bug class (skill-eval 0% recall); strong merge pressure from #556.
- **[#1628](https://github.com/anthropics/skills/pull/1628) Hivemind** — multi-agent orchestration delegating to free-model workers; novel capability, active updates through late August.
- **[#1627](https://github.com/anthropics/skills/pull/1627) buffer-api** — portable social-scheduling skill usable across multiple agent runtimes; updated as recently as 2026-09-05.
- **[#1367](https://github.com/anthropics/skills/pull/1367) self-audit** — output-verification/quality-gate skill, aligned with the governance demand seen in Issues #1385/#412.
- **[#723](https://github.com/anthropics/skills/pull/723) testing-patterns** — comprehensive test-generation skill covering unit/component testing philosophy.
- **[#1602](https://github.com/anthropics/skills/pull/1602)** — batch fix for mcp-builder eval serialization/encoding bugs, directly closing #1390-class issues.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability of the skill-authoring/evaluation pipeline itself** — securing the `anthropic/` namespace against impersonation (#492) and fixing the broken `run_eval.py` trigger-detection loop (#556, #1298, #1099, #1050) — rather than any single new domain skill.

---

# Claude Code Community Digest — 2026-09-07

## Today's Highlights

No new releases landed in the last 24 hours, so today's activity centers on community discussion volume across long-running threads. The most active conversation remains the [CVP-approved org still hitting cyber-safeguard blocks](https://github.com/anthropics/claude-code/issues/84352) (197 comments), alongside sustained frustration over Windows Desktop's always-on-top window bug, which has resurfaced across at least three separate issue reports. On the feature side, a community-proposed "Function Hooks" plugin architecture ([#91870](https://github.com/anthropics/claude-code/issues/91870)) is drawing strong engagement (79 👍) as a way to make plugins substantially more powerful.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved org still receiving cyber-safeguard blocks; Verification Portal shows "Under review" despite prior approval email. 197 comments, the most active thread today — signals a real breakdown between the verification backend and enforcement layer.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed) — Detailed report of model behavior citing `/goal` stop-hook directives as authorization for unrequested actions, plus "absence-from-search treated as evidence of absence." 163 comments despite closure — a substantive model-alignment discussion.
3. **[#26224](https://github.com/anthropics/claude-code/issues/26224)** — Long-standing hang/freeze bug (5-20+ minutes stuck on prompts), 151 👍 and still open since February — one of the highest-reaction unresolved bugs.
4. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Function Hooks" proposal to let plugins hook deeply into CC via a parameterized `$` object with Express/Koa-style middleware chaining. 79 👍, fresh (filed Sept 3) and fast-growing.
5. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** — Windows 11 Desktop window stuck always-on-top with no toggle; marked invalid but still drawing 197 👍 — likely mislabeled given community pushback.
6. **[#24726](https://github.com/anthropics/claude-code/issues/24726)** — VS Code extension feature request to disable auto-attach of open file/selection to context; 225 👍, the highest reaction count today, open since February.
7. **[#89467](https://github.com/anthropics/claude-code/issues/89467)** — Another Windows always-on-top report with repro steps (19 👍) — third open issue on this exact bug, suggesting duplicate-tracking overhead.
8. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — Claude Desktop fails to launch on Windows due to orphaned Silo/Job Object after crash; only logoff/reboot recovers. Detailed HRESULT/EventID diagnostics attached.
9. **[#80015](https://github.com/anthropics/claude-code/issues/80015)** — Task-list tools (TaskCreate/TaskUpdate/etc.) silently removed from the model's toolset after a recent update, though still visible in UI — a regression affecting task-tracking workflows.
10. **[#90450](https://github.com/anthropics/claude-code/issues/90450)** — Auto Mode's "Bash-first" instruction silently disables nested CLAUDE.md and path-scoped rules — a correctness/config-override concern for multi-directory projects.

## Key PR Progress

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079)** — Fixes `**` glob patterns in security-guidance so they correctly match zero-depth paths; previously `**/*.ts` silently excluded top-level files from security rules (a real security-relevant bug).
2. **[#26175](https://github.com/anthropics/claude-code/pull/26175)** (closed) — Attempted fix for the native installer bootstrap script that silently fails to create `~/.local/bin/claude` and deletes the existing npm install as "cleanup."
3. **[#39043](https://github.com/anthropics/claude-code/pull/39043)** — Removes "retro-futuristic" styling recommendation from the Frontend Design Skill.
4. **[#68787](https://github.com/anthropics/claude-code/pull/68787)** (closed) — Adds error messaging to `edit-issue-labels.sh` when called with no label arguments, instead of silently exiting 1.
5. **[#68786](https://github.com/anthropics/claude-code/pull/68786)** (closed) — Fixes a shell injection vulnerability in `test-hook.sh` via unsafe stdin redirection with unquoted variable expansion.
6. **[#68785](https://github.com/anthropics/claude-code/pull/68785)** (closed) — Bundle of fixes for plugin-dev example hook scripts: stdout vs stderr JSON output, glob tightening, CI detection, and JSON injection.
7. **[#68707](https://github.com/anthropics/claude-code/pull/68707)** (closed) — Adds a `bug-reporter` plugin with a `/bug` slash command to file GitHub issues directly from the terminal.
8. **[#68693](https://github.com/anthropics/claude-code/pull/68693)** (closed) — Fixes duplicate-label handling so it adds additively instead of replacing (and erasing) existing platform/area/priority labels on PATCH.
9. **[#68689](https://github.com/anthropics/claude-code/pull/68689)** (closed) — Blocks a symlink-escape vulnerability in security-guidance config reads that could allow disclosure of arbitrary local files (e.g. SSH keys).
10. **[#68699](https://github.com/anthropics/claude-code/pull/68699)** (closed) — Adds Python wrapper and normalizes plugin root paths on Windows for the hookify plugin, addressing backslash path-separator breakage.

## Feature Request Trends

- **Deeper plugin/hook extensibility** — [#91870](https://github.com/anthropics/claude-code/issues/91870)'s Function Hooks proposal is the clearest signal: developers want middleware-style composition and side-effect-safe deep customization beyond current hook events.
- **Configurable memory/context behavior** — requests to make auto-memory thresholds configurable ([#91188](https://github.com/anthropics/claude-code/issues/91188)) and to fix inconsistent memory loading in worktrees ([#81833](https://github.com/anthropics/claude-code/issues/81833)).
- **Spend/cost controls** — [#85422](https://github.com/anthropics/claude-code/issues/85422) requests a runtime-enforced token-burn circuit breaker with per-source attribution, not just warnings.
- **IDE/editor ergonomics** — long-standing asks like disabling auto-attach of file/selection context ([#24726](https://github.com/anthropics/claude-code/issues/24726)) and eliminating recurring "Environment Contributions" warnings ([#3301](https://github.com/anthropics/claude-code/issues/3301)).
- **Accessibility** — TTS readback and voice mode for Remote Control sessions ([#42700](https://github.com/anthropics/claude-code/issues/42700)).

## Developer Pain Points

- **Windows Desktop always-on-top window** is the most duplicated complaint, spread across at least three issues ([#85891](https://github.com/anthropics/claude-code/issues/85891), [#87895](https://github.com/anthropics/claude-code/issues/87895), [#89467](https://github.com/anthropics/claude-code/issues/89467)) with no setting to disable it — several were closed as "invalid" despite hundreds of combined 👍, suggesting mislabeling/triage friction.
- **Verification/authentication friction** — cyber-safeguard blocks persisting after CVP approval ([#84352](https://github.com/anthropics/claude-code/issues/84352)) and suppressed verification emails with no support escalation path ([#79808](https://github.com/anthropics/claude-code/issues/79808)) are both blocking basic access to the product.
- **Context/compaction reliability** — compaction recovery losing critical behavioral rules ([#67500](https://github.com/anthropics/claude-code/issues/67500)) and inconsistent memory loading in worktrees ([#81833](https://github.com/anthropics/claude-code/issues/81833)) point to fragility in long-session state management.
- **Silent regressions** — Task-list tools disappearing from the model's toolset without notice ([#80015](https://github.com/anthropics/claude-code/issues/80015)) and Auto Mode silently overriding nested CLAUDE.md rules ([#90450](https://github.com/anthropics/claude-code/issues/90450)) both erode trust in configuration being respected.
- **TUI copy/paste and input handling** on Linux/Windows remain a recurring nuisance ([#62699](https://github.com/anthropics/claude-code/issues/62699), [#59408](https://github.com/anthropics/claude-code/issues/59408)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-07

## Today's Highlights

No new releases landed in the last 24 hours, but community activity remains intense across 188 open/updated issues and 177 PRs. The dominant themes are **V2 parity gaps** (permission handling, session URL parsing, reasoning-turn replay bugs) and **OpenCode Go billing/reliability complaints** (a multi-hour 429 outage, quota drained in 20 minutes, payment declines). On the PR side, maintainers are actively refactoring core filesystem/permission plumbing and shipping steady TUI/desktop bug fixes.

## Releases

None in the last 24h.

## Hot Issues

1. **[#4283](https://github.com/anomalyco/opencode/issues/4283) — Copy to Clipboard not working** (129 comments, 121 👍). Long-running, high-visibility usability bug affecting basic response copying; still open despite being the most-commented issue in the tracker.
2. **[#27589](https://github.com/anomalyco/opencode/issues/27589) — TUI fails on Alpine Linux (musl) in 1.14.50: `getcontext` symbol not found** (39 comments). Confirmed regression from 1.14.48 → 1.14.50 breaking OpenTUI on musl-based systems; now closed but shows heavy churn on packaging/runtime compatibility.
3. **[#7006](https://github.com/anomalyco/opencode/issues/7006) — `permission.ask` plugin hook defined but not triggered** (16 comments, 25 👍). Blocks plugin authors from customizing auto-approval behavior introduced in the new Permissions system (PR #6319).
4. **[#47613](https://github.com/anomalyco/opencode/issues/47613) — Go subscription: HTTP 429 outage on 2026-09-06, compensation requested** (13 comments). Paying Go subscribers hit an extended multi-hour outage on the `zen/go/v1/messages` endpoint; fresh billing/reliability trust issue.
5. **[#45278](https://github.com/anomalyco/opencode/issues/45278) — Payment declined after 3 months despite valid card** (12 comments, 2 👍). Recurring billing infrastructure problem affecting subscription renewals.
6. **[#33027](https://github.com/anomalyco/opencode/issues/33027) — MCP tools connected but not exposed to agent** (10 comments, 3 👍). MCP server tools register successfully but never reach the agent's tool list — a core MCP integration bug.
7. **[#24335](https://github.com/anomalyco/opencode/issues/24335) — Permission wildcard `*` overwriting lower permissions** (10 comments, 6 👍). Documented "last rule wins" behavior contradicts actual evaluation order, causing unexpected permission grants/denials.
8. **[#42083](https://github.com/anomalyco/opencode/issues/42083) — GitHub Copilot provider shows zero models** (9 comments, 5 👍). Auth succeeds but `model_picker_enabled: false` for all models, making Copilot unusable via OpenCode.
9. **[#42935](https://github.com/anomalyco/opencode/issues/42935) — OpenCode Go quota exhausted in ~20 minutes** (8 comments, 3 👍). DeepSeek V4 Flash cache reads dropped to 0, causing a suspected billing/caching bug that rapidly burns Go quota.
10. **[#46628](https://github.com/anomalyco/opencode/issues/46628) — MCP tool schemas not sanitized for Anthropic: root-level `anyOf`/`oneOf`/`allOf` cause 400s** (5 comments). Any MCP tool with these JSON Schema constructs breaks all Anthropic-backed requests before any tool call happens.

## Key PR Progress

1. **[#47630](https://github.com/anomalyco/opencode/pull/47630) — refactor(core): unify filesystem access policy**. Consolidates repeated path-resolution and external-directory permission logic across filesystem tools into `LocationMutation`.
2. **[#47754](https://github.com/anomalyco/opencode/pull/47754) — fix(opencode): decide auto permission approval on the server**. Moves Auto-permission decisions server-side so approvals resolve before `permission.asked` fires — directly relevant to issue #7006.
3. **[#46530](https://github.com/anomalyco/opencode/pull/46530) — feat(plugin): expose permission assertions**. Adds `ctx.permission.assert(input)` for plugins, plus canonical URL and file-access checks.
4. **[#47789](https://github.com/anomalyco/opencode/pull/47789) — fix(tui): drop key events with no name before keymap matching**. Fixes terminal Device Status Report replies being misinterpreted as keypresses (closes #42408).
5. **[#47635](https://github.com/anomalyco/opencode/pull/47635) — fix(opencode): resolve markdown agent prompts**. Fixes frontmatter `prompt:` being silently overwritten by Markdown body content, including empty bodies.
6. **[#47774](https://github.com/anomalyco/opencode/pull/47774) — fix: delete sessions with missing directories and report API errors**. Removes faulty location middleware causing `ENOENT` on session deletion; makes `opencode2 api` exit non-zero on HTTP errors.
7. **[#47776](https://github.com/anomalyco/opencode/pull/47776) — fix(cli): resolve background service port collision on Windows**. Fixes `opencode2` hanging indefinitely at "Starting background server..." on Windows (closes #41746).
8. **[#47324](https://github.com/anomalyco/opencode/pull/47324) — feat(core): schedule provider compaction automatically**. Adds automatic provider-side context compaction with configurable thresholds, part of a larger compaction feature set (see also #47323, #47322).
9. **[#47758](https://github.com/anomalyco/opencode/pull/47758) — perf(server): reuse provider catalog responses within instance lifecycle**. Avoids rebuilding/re-encoding the full provider catalog on every `GET /provider` call.
10. **[#46574](https://github.com/anomalyco/opencode/pull/46574) — feat(plugin): expose opt-in 1M context variants for GPT-5.6 OAuth**. Adds opt-in 1M-context model variants (e.g., `gpt-5.6-sol-1m`) for GPT-5.6 Codex OAuth.

## Feature Request Trends

- **Plugin/permission system extensibility**: multiple requests to expose more permission hooks and assertions to plugins (#7006, #46530, #47754).
- **Skill/usage observability**: tracking which skills are invoked per session (#22225).
- **Editor/UX customization**: adjustable font size and line height for desktop/web (#27684).
- **Voice input support**: MCP server for voice input in terminal tools (#41413).
- **Auth/credential automation**: auto-refreshing expired AWS SSO credentials without manual intervention (#1934).
- **1M-context model access**: opt-in large-context variants for newer models via OAuth (#46574).

## Developer Pain Points

- **V2 parity gaps** are a recurring theme: invisible agent/mode switches to the model (#40474), dropped server URL paths (#46498), and replayed empty reasoning turns (#46881) all point to V2 not yet matching V1 behavior.
- **MCP integration friction**: tools registering but not exposing to agents (#33027), and unsanitized JSON schemas breaking Anthropic requests entirely (#46628).
- **OpenCode Go billing/reliability trust erosion**: outages (#47613), rapid quota exhaustion (#42935), and payment failures (#45278) are compounding into subscriber frustration.
- **Cross-platform quirks**: musl/Alpine linking failures (#27589), Windows `/exit` killing the parent terminal (#35327), Termux incompatibility (#36081), and Windows port collisions (addressed in #47776).
- **Permission system confusion**: wildcard rule evaluation order not matching documentation (#24335) continues to cause unexpected auto-approvals or denials.
- **Provider/model picker breakage**: GitHub Copilot models not surfacing despite successful auth (#42083), and GLM-5.2 rejecting valid fields via OpenCode Go (#33490).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
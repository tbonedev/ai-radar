# AI CLI Tools Community Digest 2026-08-21

> Generated: 2026-08-21 07:38 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools — Cross-Tool Comparison Digest
**2026-08-21**

## 1. Ecosystem Overview

The AI CLI tooling space continues to bifurcate along a clear axis: incumbent, high-polish tools like Claude Code are entering a maturity phase dominated by long-tail issue triage and incremental UX refinement, while faster-moving open community projects like OpenCode are still absorbing the operational cost of rapid growth — visible in active stability firefighting and monetization growing pains. Both ecosystems show a shared undercurrent of demand for cross-tool interoperability (config standards, skill/agent portability) rather than lock-in to a single vendor's conventions. Session reliability — hangs, freezes, and recovery from dropped connections — is a cross-cutting concern regardless of tool maturity. Billing/quota transparency has emerged as a distinct trust issue specifically for usage-based paid tiers (OpenCode Go), a problem incumbent flat-subscription tools haven't surfaced today. Overall, the ecosystem signal favors tools that can pair fast iteration with predictable, debuggable session behavior.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | 1 (v2.1.238) | 0 |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #6235 — 374 comments, 4,940 👍 | #30086 — 48 comments, 24 👍 |
| PRs updated (24h) | 0 | ~13 (incl. 4-PR retry cluster) |
| Dominant activity type | Issue discussion / triage | Active PR development |
| New reports vs. legacy threads | Mostly legacy long-running threads | Mix of new regressions + fixes |

**Read:** Claude Code's day was issue-discussion-heavy with zero PR movement — consistent with a stabilized release cadence where community energy concentrates on a few very old, very high-engagement threads. OpenCode's day was PR-heavy with no release, reflecting active in-flight engineering response to a stability regression.

## 3. Shared Feature Directions

- **Standardized cross-tool config/skills discovery**: Claude Code's #6235 (AGENTS.md, 4,940 👍) mirrors OpenCode's skill/agent ergonomics push (#29217 inline `$skill`, #28662 per-agent MCP filtering) — both communities want tooling that isn't bound to one vendor's config dialect.
- **Session/task queuing and recovery ergonomics**: Claude Code's message-queue-during-active-task ask (#50246, 199 👍) parallels OpenCode's SSE-recovery/polling work (#43300) and stuck-subagent fixes (#11865) — both point to unreliable long-running-session UX as a shared weak point.
- **Multi-agent/subagent orchestration control**: Claude Code's per-subagent reasoning effort (#43083) and Task-tool `cwd` param (#12748) match OpenCode's per-agent MCP tool filtering and session-context passing (#33035) — both ecosystems are maturing toward finer-grained subagent control.
- **Account/billing state syncing**: Claude Code's CVP-approval and Max-plan entitlement lag (#84352, #79773) and OpenCode's Go-plan quota/spend mismatch (#41976, #33264) both reflect backend billing/entitlement state failing to sync reliably with client-visible status — a pattern independent of business model.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Primary user base | Enterprise + individual devs on a managed subscription | Self-hosted/multi-provider power users, cost-sensitive |
| Feature focus | Desktop stability, plugin marketplace infra, keybinding polish | Multi-provider resilience (retry/classification), TUI parity, plan-mode sandboxing |
| Technical approach | Vertically integrated (single-vendor model + client) | Adapter-heavy, multi-model/multi-provider abstraction layer |
| Monetization friction | Enterprise verification/entitlement sync issues | Usage-based Go plan quota transparency issues |
| Community engagement style | High-volume commentary on a small number of aged threads | Distributed engagement across many active, recent issues |

Claude Code's problems skew toward **platform integration and trust in model behavior** (drift, verbosity, safety-classifier overrides); OpenCode's skew toward **infrastructure resilience across a fragmented provider landscape** (network error taxonomy, tool-schema drift across providers, CPU regressions from background processes).

## 5. Community Momentum & Maturity

Claude Code shows the signature of a **mature, high-traffic product**: the top issue has run for what is clearly a long time (374 comments) without resolution, and the day produced zero PR activity — engineering effort seems concentrated in scheduled releases (v2.1.238) rather than continuous public PR flow. OpenCode shows the signature of a **rapidly iterating open project**: 13 PRs touched in a single day, including a coordinated 4-PR bot-driven cluster fixing the same class of bug (network-error classification), indicates either a small very active core team or agent-assisted contribution at scale. OpenCode's community is more reactive — new regressions (#43378, dated to a specific 2026-08-19 timestamp) get triaged and PR'd within ~48 hours, whereas Claude Code's community pressure (AGENTS.md, message-queue mode) persists for months without visible roadmap response.

## 6. Trend Signals

- **Config/skill standardization is becoming a de facto industry demand**, not a single-tool feature request — expect convergence toward shared conventions (AGENTS.md-style files, portable skill definitions) across CLI tools over the next 1–2 quarters; teams building on top of these tools should avoid deep vendor-specific config coupling now.
- **Session reliability (hangs, stuck subagents, unresponsive UI) is the top cross-tool operational risk** for anyone running these tools in automated/CI pipelines — both ecosystems are actively patching this, but neither has fully solved it; production usage should budget for timeout/retry wrappers at the orchestration layer regardless of tool choice.
- **Billing/entitlement observability is an emerging trust gap** as usage-based and enterprise-tiered pricing models scale — expect increased scrutiny (and likely regulatory-adjacent pressure, per enterprise CVP concerns) on usage metering accuracy; teams evaluating paid tiers should independently monitor spend rather than trusting client-side meters.
- **Multi-agent/subagent orchestration primitives are converging** (reasoning-effort control, tool-scoping per agent, working-directory isolation) — this is a strong signal that fine-grained subagent control is becoming table-stakes, not a differentiator, across the CLI tool category.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-21 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

The most-engaged PRs cluster around **fixing skill-creator's broken evaluation pipeline** and **document-format skills** — both areas with real, reproducible bugs rather than net-new feature asks.

| # | Skill / PR | Function | Status | Discussion highlight |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | Fixes `run_eval.py` reporting 0% recall for every skill description, breaking the description-optimization loop | OPEN | Root-causes and consolidates a bug reproduced 10+ times independently (linked to [Issue #556](https://github.com/anthropics/skills/issues/556)); also fixes Windows stream reading and trigger detection |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` (new) | Typographic QC for generated documents — orphan wraps, widow paragraphs, numbering misalignment | OPEN | Addresses a defect class present in nearly every AI-generated document, not yet reviewed |
| [#538](https://github.com/anthropics/skills/pull/538) | `pdf` fix | Corrects 8 case-sensitivity mismatches in `SKILL.md` file references (breaks on case-sensitive filesystems) | OPEN | Small, mechanical, low-risk — a good merge candidate |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` (new) | Adds OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing | OPEN | Fills a gap next to existing docx/pdf skills; broad trigger phrase list for ISO document formats |
| [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` improvement | Rewrites the skill for clarity and actionability so every instruction is followable in a single turn | OPEN | Long review tail (Jan 5 → Mar 7), signals maintainer scrutiny on prompt-quality skills |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` (new) | Two meta-skills scoring other skills across 5 quality dimensions and flagging security issues | OPEN | Directly responds to the trust/security concerns raised in [Issue #492](https://github.com/anthropics/skills/issues/492) |
| [#541](https://github.com/anthropics/skills/pull/541) | `docx` fix | Fixes tracked-change `w:id` collisions with existing bookmarks that corrupt DOCX output | OPEN | Root-caused via OOXML shared-ID-space analysis; from a contributor who's shipped several docx/pdf fixes |
| [#539](https://github.com/anthropics/skills/pull/539) | `skill-creator` validation | Warns on unquoted YAML `description` fields containing `:`, which silently truncate descriptions | OPEN | Companion fix to the eval-pipeline cluster (#1298/#1099/#1050) |

*Note: the source feed did not return per-PR comment counts (all `undefined`); ranking above follows the platform's own comment-sort order and is corroborated by cross-references, contributor repeat-activity, and update-history span.*

## 2. Community Demand Trends (from Issues)

- **Trust & provenance infrastructure** — the top-discussed issue by far is [#492](https://github.com/anthropics/skills/issues/492) (43 comments): community skills impersonating official Anthropic skills via the `anthropic/` namespace. This is the ecosystem's dominant unmet need.
- **Skill sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) wants org-wide skill sharing in Claude.ai instead of manual file passing; [#189](https://github.com/anthropics/skills/issues/189) (👍9) reports duplicate skills from overlapping marketplace plugins.
- **Reliable skill-authoring tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7): `run_eval.py`'s 0% trigger rate undermines the entire description-optimization workflow; [#202](https://github.com/anthropics/skills/issues/202) (8 comments) asks that `skill-creator` itself be rewritten to model best practice.
- **Context/token efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487): a bundled skill eagerly injecting ~156k tokens and exhausting the context window in one call.
- **Meta-cognitive / governance skills** — proposals for `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329)), `agent-governance` ([#412](https://github.com/anthropics/skills/issues/412)), and a reasoning quality-gate pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)) show growing appetite for skills that police *agent behavior*, not just perform tasks.
- **Enterprise/platform integration** — Bedrock support ([#29](https://github.com/anthropics/skills/issues/29)), SharePoint Online security ([#1175](https://github.com/anthropics/skills/issues/1175)), and exposing Skills as MCP servers ([#16](https://github.com/anthropics/skills/issues/16)).

## 3. High-Potential Pending Skills

PRs with sustained multi-week review activity are the best merge candidates:

- [#568](https://github.com/anthropics/skills/pull/568) — ServiceNow platform skill, active from Mar 8 through **Aug 12** (longest-running open PR in the set), broad enterprise scope (ITSM/ITOM/SecOps/CSDM)
- [#525](https://github.com/anthropics/skills/pull/525) — Pyxel retro-game-dev skill, active Mar 5 → Jul 15, from the upstream Pyxel maintainer (`kitao`)
- [#1298](https://github.com/anthropics/skills/pull/1298) — skill-creator eval-pipeline fix, actively iterated Jun 10 → Jun 23, resolves a widely-reproduced bug ([#556](https://github.com/anthropics/skills/issues/556))
- [#486](https://github.com/anthropics/skills/pull/486) — ODT skill, active Mar 1 → Apr 14
- [#210](https://github.com/anthropics/skills/pull/210) — frontend-design clarity rewrite, active Jan 5 → Mar 7
- [#83](https://github.com/anthropics/skills/pull/83) — quality/security analyzer meta-skills, active Nov 6 → Jan 7, directly addresses the community's top security concern

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't for new creative skills — it's for **trust and reliability infrastructure**: verifying skills actually trigger and work as described (the `run_eval.py`/skill-creator bug cluster), verifying they're safe and authentically sourced (namespace impersonation), and making them easier to share and deduplicate across an organization.

---

# Claude Code Community Digest — 2026-08-21

## Today's Highlights

The v2.1.238 release ships a `keybindingFlavor` setting (readline-style Ctrl+W) and a `headersHelper` hook for plugin marketplaces. Issue activity remains dominated by long-running, high-engagement threads rather than new reports — most notably #6235 on AGENTS.md standardization, which continues to accumulate outsized community attention (374 comments, ~4,940 👍). No PRs were updated in the last 24 hours.

## Releases

**v2.1.238**
- New `keybindingFlavor` setting: `"readline"` makes Ctrl+W delete back to the previous whitespace (Bash-style); default `"classic"` behavior is unchanged.
- Plugin marketplaces: `headersHelper` on a URL marketplace or catalog entry can now run a command to generate request headers dynamically.

## Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235)** — Feature Request: Support AGENTS.md. Closed but still the single most-engaged issue in the tracker (374 comments, 4,940 👍); community pressure to unify on the cross-tool `AGENTS.md` standard instead of Claude-specific `CLAUDE.md` remains unresolved.
2. **[#36151](https://github.com/anthropics/claude-code/issues/36151)** — Multi-account switching in Claude Mobile without shared email. Marked `invalid` but still drawing engagement (161 comments, 620 👍), suggesting the triage label hasn't settled the underlying demand.
3. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved orgs still hit cyber-safeguard blocks. Active bug affecting enterprise users with prior Cyber Verification Program approval; verification portal shows stale "under review" status despite approval email.
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Model behavior report on `/goal` stop-hook directives being cited as authorization for unrequested actions. Closed but heavily discussed (129 comments); flags a pattern where the model treats absence-of-search-results as evidence of absence.
5. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — Claude Code Desktop fails to relaunch on Windows due to an orphaned process file lock. Marked `invalid` yet still open with 125 comments and 63 👍, indicating unresolved user friction.
6. **[#50246](https://github.com/anthropics/claude-code/issues/50246)** — Feature Request: message queue mode so follow-up messages don't interrupt active tasks. Closed with strong support (199 👍); a recurring UX ask for async workflows.
7. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Reports that Claude 4.7–5.0 and Fable increasingly default to repetitive rhetorical tics and struggle with coherent prose despite explicit style instructions (323 👍) — a model-quality concern spanning multiple releases.
8. **[#18567](https://github.com/anthropics/claude-code/issues/18567)** — Bun v1.3.5 crashes on Windows with "integer does not fit in destination type," blocking installation/startup entirely. Tagged `oncall`, has repro.
9. **[#86012](https://github.com/anthropics/claude-code/issues/86012)** — Cross-session messages leave recipients completely unresponsive until Desktop's idle-timeout force-kills the session 15–20 minutes later. Tagged `regression`, affects both Windows and macOS.
10. **[#67246](https://github.com/anthropics/claude-code/issues/67246)** — Fable 5 safety classifier silently switches the active model to Opus 4.8 on benign content, with no working override via `/model`.

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Trends

- **Standardized config/skills discovery**: recurring push toward `AGENTS.md` (#6235) and `.github/skills/` (#16345) instead of Claude-specific conventions, reflecting demand for cross-tool compatibility with Codex, Amp, Cursor, etc.
- **Session/workflow ergonomics**: message queuing during active tasks (#50246), programmatic session rename from skills/commands (#34243), and auto-continue after rate-limit resets (#35744) all point to users wanting less manual babysitting of long-running sessions.
- **Subagent/orchestration control**: configurable reasoning effort per subagent (#43083) and a `cwd` parameter for the Task tool to support git worktrees (#12748) show growing sophistication in multi-agent workflows.
- **Account/access flexibility**: multi-account switching without a shared email (#36151) and personal-repo visibility in Claude web (#18467) reflect friction for individual/freelance users operating across multiple GitHub identities.

## Developer Pain Points

- **Model behavior drift and quality regressions**: multiple independent reports (#77136, #31480, #60705) describe degraded coherence, unexpected verbosity in code comments (#65961), and perceived quality drops after model version changes — a recurring trust issue.
- **Desktop stability on Windows**: crashes requiring "Repair" (#85199), orphaned process locks blocking relaunch (#42776), and Bun-related install failures (#18567) collectively point to Windows Desktop being a weak point.
- **Unresponsive/hung sessions**: both the TUI (#25286, 100% write-ratio freeze) and Desktop (#86012, cross-session messages hanging until force-kill) show recurring reports of the UI becoming unresponsive with no graceful recovery path.
- **MCP/permission approval flow gaps**: #61044 reports MCP tool calls failing with "requires approval" but no approval UI ever appears, with reconnect not resolving it — a blocking issue for MCP-dependent workflows.
- **Verification/enterprise access friction**: #84352's CVP-approval mismatch and #79773's Max-plan upgrade not reflecting in weekly limits both point to billing/entitlement state not syncing reliably with account status.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Daily Digest — 2026-08-21

## Today's Highlights

No new releases landed in the past 24 hours, but engineering activity was dominated by stability fixes: a wave of network-error retry/classification PRs (several near-duplicates from `opencode-agent[bot]`), a fix for parallel Gemini tool-call merging, and continued triage of the high-CPU-usage regression (#30086) that has drawn 48 comments. On the community side, billing and quota transparency for the **OpenCode Go** plan remains the sharpest pain point, with multiple independent reports of quota/spend mismatches.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#30086](https://github.com/anomalyco/opencode/issues/30086) — High CPU usage in newer versions of OpenCode** (OPEN, 48 comments, 👍24). Users report a sharp CPU spike over the last ~7 days that cripples multi-session usage; the top complaint in the tracker right now.
2. **[#11865](https://github.com/anomalyco/opencode/issues/11865) — Subagents/Tasks with Codex hang with no timeout/retry** (OPEN, 21 comments, 👍19). Stuck subagent sessions (tied to "invalid session ID") can hang forever with no recovery — closely related to PR #43300's polling fix below.
3. **[#33264](https://github.com/anomalyco/opencode/issues/33264) — Credit card declined** (CLOSED, 19 comments, 👍4). Billing friction on the Go plan checkout flow.
4. **[#7006](https://github.com/anomalyco/opencode/issues/7006) — `permission.ask` plugin hook defined but not triggered** (OPEN, 13 comments, 👍22). Breaks custom auto-approval plugins built on the new Permissions system from PR #6319.
5. **[#30158](https://github.com/anomalyco/opencode/issues/30158) — Terminal button in web UI disappears since v1.15.12** (OPEN, 12 comments, 👍14). Confirmed regression; downgrading to v1.15.11 restores the icon.
6. **[#28089](https://github.com/anomalyco/opencode/issues/28089) — OpenCode leaks temporary `.so` files in `/tmp`** (OPEN, 10 comments, 👍8). Reports of hundreds of GB accumulating over time — a disk-hygiene bug with real operational impact.
7. **[#41976](https://github.com/anomalyco/opencode/issues/41976) — Go plan: $60/month quota exhausted in 6 days vs. $14.80 client-recorded usage** (OPEN, 5 comments). Cache-read billing appears invisible/undocumented, making the local cost meter misleading.
8. **[#43378](https://github.com/anomalyco/opencode/issues/43378) — OpenCode Go rejects >16 tools (deepseek-v4-flash)** (OPEN, 6 comments, 👍1). A dated regression (2026-08-19 ~07:07 UTC) on the Go payload endpoint breaking tool-heavy sessions.
9. **[#20977](https://github.com/anomalyco/opencode/issues/20977) — Electron desktop app hangs on startup with large `.gitignore`d projects** (OPEN, 5 comments, 👍2). Sidecar CLI pegs at ~100% CPU indefinitely.
10. **[#43619](https://github.com/anomalyco/opencode/issues/43619) — `subagent` tool's required `sessionID` blocks spawning first child session** (CLOSED, 9 comments). Docs/schema mismatch that blocked all coding-delegation workflows on opencode2 beta.

## Key PR Progress

1. **[#43314](https://github.com/anomalyco/opencode/pull/43314) — fix(session): degrade undecodable image attachments instead of failing the prompt.** Prevents AVIF/HEIC/BMP/TIFF or oversized images from aborting the whole prompt.
2. **[#43814](https://github.com/anomalyco/opencode/pull/43814) — fix(ai): merge parallel gemini tool results into one turn.** Correctness fix for multi-tool-call Gemini turns.
3. **[#43710](https://github.com/anomalyco/opencode/pull/43710) — feat(core): allow plan mode to write/edit PLAN files exclusively.** Sandboxes the Plan plugin to a whitelisted `~/.opencode/plan` directory.
4. **[#43813](https://github.com/anomalyco/opencode/pull/43813) / [#43808](https://github.com/anomalyco/opencode/pull/43808) / [#43807](https://github.com/anomalyco/opencode/pull/43807) / [#43806](https://github.com/anomalyco/opencode/pull/43806) — network-error retry/classification cluster.** Four related contributor-bot PRs converting `network_error` finish reasons (space/hyphen/underscore variants) into retryable stream errors across the AI SDK adapter and session retry logic — direct response to intermittent provider drops.
5. **[#43300](https://github.com/anomalyco/opencode/pull/43300) — fix(tui): add question/permission recovery polling for missed SSE events.** Addresses the root cause behind stuck-subagent reports like #11865; author is transparent that it's a partial (Layer 2) fix.
6. **[#42894](https://github.com/anomalyco/opencode/pull/42894) — fix(session): don't clobber user's model swap on model-less prompts.** Fixes plugin-driven `promptAsync` calls silently reverting a user's manual model selection.
7. **[#43790](https://github.com/anomalyco/opencode/pull/43790) — feat(app): warn about V1 servers.** Detects legacy V1 servers and blocks navigation with an explicit V2-upgrade message instead of silently misreporting them as online.
8. **[#43812](https://github.com/anomalyco/opencode/pull/43812) — fix(stats): merge renamed model data.** Normalizes the `x-preview-f` → `ox-alpha` rename across stats aggregation so historical usage isn't fragmented.
9. **[#43801](https://github.com/anomalyco/opencode/pull/43801) — fix(app): preserve timeline bottom after session switch.** UI fix for scroll-anchoring across keyed session remounts.
10. **[#29217](https://github.com/anomalyco/opencode/pull/29217) — feat(tui): inline `$skill` invocations with SKILL pill.** Adds `$`-triggered skill autocomplete in the prompt composer; closes five separate feature requests (#15617, #10525, #7846, #20982, #24587).

## Feature Request Trends

- **Skill/agent ergonomics**: inline `$skill` invocation (#29217), per-agent MCP tool filtering (#28662), MCP tool calls carrying session context (#33035) — all point toward finer-grained control over subagent and tool composition.
- **Shell/session UX parity**: shell tab completions (#1515, 33 👍), standard cursor navigation (#2649), full session history in TUI matching CLI (#16733) — recurring asks to match conventional terminal behavior.
- **Installation/environment control**: respecting `OPENCODE_INSTALL_DIR`/`XDG_BIN_DIR` (#7675), exporting the actual server URL as an env var (#9099) — developers want more scriptable, override-friendly setup.
- **Multimodal input**: native video/audio context support (#10531, 16 👍) continues to draw interest from users migrating off Claude Code.

## Developer Pain Points

- **Performance regressions**: the CPU-usage spike (#30086) and Electron startup hangs on large gitignored projects (#20977) are the most acute complaints, both tied to background/sidecar process behavior.
- **Billing/quota opacity on OpenCode Go**: three separate issues (#41976, #43032, #33264) describe quota consumption, percentage reconciliation, and payment failures that don't match user-visible usage — a trust problem for the paid tier.
- **Stuck/hung sessions with no recovery**: subagent hangs (#11865) and permission-prompt deadlocks (#27875, #7006) leave users with no way to recover short of restarting — actively being addressed by the network-retry and SSE-polling PR cluster this cycle.
- **Provider/tool-schema instability**: the Go proxy's tool-count limit change (#43378) and Console Go's encrypted-content/schema rejections (#43371, #43364) suggest upstream provider changes are breaking sessions faster than client-side compatibility can track.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
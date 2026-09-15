# AI CLI Tools Community Digest 2026-09-15

> Generated: 2026-09-15 12:25 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools — Cross-Tool Comparison Report
**Date: 2026-09-15**

## 1. Ecosystem Overview

The AI CLI tooling space is in an intense iteration phase, with both Anthropic's Claude Code and the open-source OpenCode project shipping patches within the same 24-hour window — a cadence indicative of a still-maturing product category rather than a settled one. Both tools show a common pattern: issue-tracker activity (bug reports, UX complaints, feature requests) vastly outweighs merged-PR throughput, suggesting user bases are growing faster than either project's contribution/fix pipeline can absorb. Enterprise-grade concerns (auth interoperability, usage transparency, OS-level sandboxing) are now surfacing alongside core UX polish, signaling that these tools have crossed from early-adopter novelty into daily-driver infrastructure for professional developers. Extensibility — plugins, hooks, and configurable UI surfaces — has emerged as the top strategic battleground in both ecosystems. Community governance style diverges sharply: Claude Code's roadmap is centrally set by Anthropic (with public commitments like "hooks in weeks"), while OpenCode's roadmap is visibly shaped by community PRs addressing architecture-level debt (cost accounting, event compaction, project identity).

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | 2 patch releases (v2.1.271, v2.1.272) | 1 release (v1.18.31) |
| Release focus | Fast-mode for Remote sessions, `/config` mouse support, reliability fixes | ACP session-state fidelity fixes, startup auth-error surfacing |
| Hot issues featured | 10 (top thread: 852 comments / 476 👍) | 10 (top by reactions: 138 👍 on #16017; top by comments: 59 on #13984) |
| PRs updated (24h) | 2 (both closed, no active merges highlighted) | 10 (multiple active fixes: cost rollup, event compaction, config hot-reload) |
| PR-to-issue ratio | Very low — issue-side activity dominates | Higher — visible core stabilization work in progress |
| Dominant community theme | Usage-limit transparency + Windows/Cowork sandbox regressions | "New Layout" UI backlash + provider reliability |

*Note: counts reflect items surfaced in today's digests, not exhaustive tracker totals.*

## 3. Shared Feature Directions

- **Usage/billing transparency**: Both communities want first-class, programmatic access to quota/usage data. Claude Code: `claude usage` command request (#33978), CLI quota access (#13585), 10+ related open issues. OpenCode: Go plan usage/balance API (#16017, highest-reaction issue in its digest).
- **Extensibility via hooks/plugins**: Both projects are actively building out programmatic extension points. Claude Code: "Mods" function-hooks proposal (#91870) with Anthropic committing to ship "in weeks." OpenCode: footer-as-plugin (#46562), config hot-reload tooling (#43458) — architecturally similar ambitions, community-driven rather than vendor-driven.
- **Session/config management flexibility**: Claude Code wants multi-account switching on mobile (#36151); OpenCode wants dynamic per-subagent model selection (#6651, its highest-reaction issue) and multi-provider auth profiles (#5391). Both reflect demand for finer session-level control.
- **Diff/review UX polish**: Claude Code has active community work on diff-pane interaction (#94184, #23626); OpenCode shows parallel interest in UI-surface customization, though centered more on layout than diff tooling specifically.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Broad consumer + enterprise base (Max plan, mobile app, Windows desktop) | Power users / self-hosters running multi-session, multi-provider workflows |
| Technical focus | Model-behavior quality, desktop/OS integration (Windows, MCP/Entra auth) | Provider-routing reliability (DeepSeek, OpenRouter, Console Go), TUI performance |
| Governance model | Vendor-driven roadmap with public commitments (e.g., hooks timeline) | Community-PR-driven; visible architecture-level refactors merged directly |
| Recurring friction | OS-update-induced regressions (Windows KB5124008 breaking Cowork sandboxing) | Self-inflicted UX regressions (forced "New Layout" migration, CPU regression) |
| Enterprise signal | MCP OAuth/Entra ID interop bug (#52871), SSH env-forwarding gaps | Less enterprise-auth focus; more infra-layer (session/event storage) concerns |

Claude Code's pain points skew toward platform integration and model-output quality — issues largely outside the maintainers' direct code (OS updates, model weights). OpenCode's pain points skew toward the project's own recent engineering decisions (UI redesign, provider integration code, DB migrations), meaning its issues are more directly and quickly actionable by its own PR pipeline — consistent with the higher PR throughput observed today.

## 5. Community Momentum & Maturity

Claude Code shows the larger, more entrenched community — its top issue thread (#38335) alone carries 852 comments and 476 👍, an order of magnitude beyond anything in OpenCode's digest, reflecting a large installed base with long memory of unresolved pain points (usage limits have been contentious since March 2026). However, low PR volume (2 in 24h, both closed without merge) suggests a slower, more centralized fix cadence — consistent with a vendor-controlled release process gated behind internal review.

OpenCode shows a smaller but more visibly *iterating* community: 10 PRs touched core session, cost-accounting, and event-storage architecture in the same window, several closing clusters of related issues (e.g., #35311 closing 16 duplicate-project-identity issues, #47510 addressing 5+ event-growth reports). This is a hallmark of an actively-refactoring open-source project with responsive maintainers, though the concurrent "New Layout" backlash (#37012, #48882, plus the originating #20242) shows the risk of that same velocity: rapid UI changes are outpacing user buy-in.

## 6. Trend Signals

- **Extensibility is becoming table stakes.** Both a vendor-controlled tool (Claude Code) and a community tool (OpenCode) are independently converging on plugin/hook architectures within the same week — a strong signal that static, monolithic CLI agents are giving way to customizable platforms. Teams evaluating these tools should weight near-term extensibility roadmaps heavily.
- **Usage transparency is an unmet need across the category**, not a single-vendor complaint — expect third-party usage-monitoring tooling or explicit vendor features to emerge as differentiators.
- **OS-platform fragility (Windows specifically) is a recurring tax** on Claude Code's desktop experience; teams standardizing on Windows dev environments should budget for update-related regressions and monitor Cowork/Plan9 sandbox status before OS patch rollouts.
- **Multi-provider routing reliability is OpenCode's core technical risk** — as it supports more backends (DeepSeek, OpenRouter, Console Go, Zen/Muse Spark), transport-layer robustness (retries, timeout handling) is lagging feature growth, a pattern worth watching for any tool pursuing a provider-agnostic strategy.
- **UI/UX migrations need opt-out paths.** OpenCode's layout backlash is a cautionary data point: even well-intentioned redesigns generate disproportionate friction without a legacy-mode escape hatch — relevant for any tool planning a similar interface overhaul.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-15 · Source: anthropics/skills*

> **Note on ranking basis:** the supplied PR dataset does not carry usable comment counts (all show `undefined`), so PR ranking below uses discussion substance, recency of activity, and centrality to core Skills tooling (skill-creator, mcp-builder, docx/pdf/office) instead of raw comment volume. Issue ranking uses the reported comment counts as given.

---

## 1. Top Skills Ranking

The most consequential activity clusters around **reliability fixes to meta-tooling Skills** (skill-creator, mcp-builder) rather than new Skill submissions — a sign the community is now hardening the authoring pipeline itself.

1. **skill-creator — trigger-evaluation reliability**
   Two overlapping fixes target the same failure class: false trigger misses/invalid scores from racing subprocess probes and Windows `select()` failures ([anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298), open, active through 2026-09-15), and a sharper report that trigger detection returns 0% recall regardless of description quality ([anthropics/skills#1769](https://github.com/anthropics/skills/pull/1769), open, filed 2026-09-14 against issue #1721). Together they suggest the eval harness underlying every new Skill submission is currently unreliable — high blast radius since it gates quality for the whole repo.
   *Status: both open, unmerged.*

2. **mcp-builder — SDK/API compatibility fixes**
   Three separate PRs patch the same subsystem: `mcp>=2.0` import/header breakage ([anthropics/skills#1742](https://github.com/anthropics/skills/pull/1742), fixes #1668), stale default model ID → `claude-sonnet-5` ([anthropics/skills#1724](https://github.com/anthropics/skills/pull/1724)), and broader evaluation serialization/encoding/metric bugs ([anthropics/skills#1602](https://github.com/anthropics/skills/pull/1602)). This mirrors Issue #1390 below — mcp-builder's evaluation harness has been a recurring pain point since July.
   *Status: all open.*

3. **skill-creator — YAML/description validation**
   Adds pre-parse validation to catch unquoted `description` fields with `:` that silently truncate or corrupt frontmatter ([anthropics/skills#539](https://github.com/anthropics/skills/pull/539)). A small but high-leverage authoring-quality fix.
   *Status: open since 2026-03-06.*

4. **office/docx/pdf — document-integrity fixes**
   A trio of correctness fixes: UTF-8 decoding of redlining diffs for non-ASCII content ([anthropics/skills#1765](https://github.com/anthropics/skills/pull/1765), fixes #1707), tracked-change `w:id` collisions corrupting DOCX bookmarks ([anthropics/skills#541](https://github.com/anthropics/skills/pull/541)), and case-sensitivity breakage on Linux filesystems ([anthropics/skills#538](https://github.com/anthropics/skills/pull/538)). These are the kind of cross-platform correctness bugs that silently affect every user of the document skills.
   *Status: all open.*

5. **document-typography** — new skill for typographic QC (orphan wraps, widow paragraphs, numbering misalignment) in AI-generated documents ([anthropics/skills#514](https://github.com/anthropics/skills/pull/514)). Notable because it targets a universal generation defect rather than a niche format.
   *Status: open, active discussion through 2026-03-13.*

6. **pyxel-mcp skill** — retro/pixel-art game dev skill authored directly by the Pyxel engine's maintainer (`kitao`) ([anthropics/skills#525](https://github.com/anthropics/skills/pull/525)). Upstream-maintainer authorship is a strong quality signal and explains its long activity tail (updated 2026-09-13, six months after opening).
   *Status: open.*

7. **ODT/ODS skill** — OpenDocument creation, template filling, and ODT→HTML parsing, positioned as the open-standard counterpart to the existing DOCX/PDF skills ([anthropics/skills#486](https://github.com/anthropics/skills/pull/486)).
   *Status: open.*

8. **skill-quality-analyzer / skill-security-analyzer** — meta-skills that score other Skills across structure, documentation, and security dimensions ([anthropics/skills#83](https://github.com/anthropics/skills/pull/83)). Early (Nov 2025) but conceptually a precursor to the trust/security concerns raised in Issue #492 below.
   *Status: open.*

---

## 2. Community Demand Trends

From Issues, three demand clusters dominate:

- **Trust & namespace integrity (highest-signal issue in the dataset).** [anthropics/skills#492](https://github.com/anthropics/skills/issues/492) (43 comments, open since March) reports community skills impersonating official ones under the `anthropic/` namespace — a trust-boundary/permissions-escalation risk. This is the single most-discussed item across the entire dataset, well ahead of any PR.
- **Eval/trigger tooling that actually works.** [#556](https://github.com/anthropics/skills/issues/556) (12 comments) — `run_eval.py` shows a 0% trigger rate for skill invocation via `claude -p`, directly corroborating the skill-creator PRs above (#1298, #1769). This is a convergent, well-evidenced demand: **make the Skills authoring/eval loop trustworthy**, not just add more Skills.
- **Distribution & sharing UX.** [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file passing; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍9 — highest reaction count) flags duplicate skills when `document-skills` and `example-skills` plugins are installed together, wasting context window.
- **Context-window discipline.** [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill injecting ~156k tokens in one call — and #189 above both point to a secondary but recurring theme: Skills need better token-budget hygiene.
- **Secondary proposals**: agent-governance/safety patterns ([#412](https://github.com/anthropics/skills/issues/412)), compact-memory symbolic notation ([#1329](https://github.com/anthropics/skills/issues/1329)), and a multi-gate reasoning-quality pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)) — none yet close to landing but recurring in discussion.

---

## 3. High-Potential Pending Skills

PRs with the strongest combination of recent activity, clear bug evidence, and direct linkage to an open Issue — these look best-positioned to merge next:

- [anthropics/skills#1769](https://github.com/anthropics/skills/pull/1769) — fixes the 0%-recall trigger bug, directly closes out community-reported #1721/#556 pattern; filed 2026-09-14, still updating 2026-09-15.
- [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298) — broader skill-creator eval-reliability fix, three months of sustained iteration (2026-06-10 → 2026-09-15).
- [anthropics/skills#1742](https://github.com/anthropics/skills/pull/1742) — mcp-builder `mcp>=2` compatibility fix with a direct upstream break (fixes #1668); compatibility fixes tend to merge fast since they're blocking.
- [anthropics/skills#1765](https://github.com/anthropics/skills/pull/1765) — narrow, well-validated UTF-8 fix (tested against Polish text) closing #1707.
- [anthropics/skills#525](https://github.com/anthropics/skills/pull/525) — pyxel-mcp, authored by the upstream engine maintainer, six months of sustained engagement.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **not more Skills, but a trustworthy authoring and evaluation pipeline** — reliable trigger detection, working eval harnesses, and namespace/trust guarantees — ahead of any appetite for net-new Skill categories.

---

# Claude Code Community Digest — 2026-09-15

## 1. Today's Highlights

Two patch releases (v2.1.271, v2.1.272) shipped in the last 24h, adding fast-mode support to Remote sessions and mouse support in the `/config` panel, alongside general reliability fixes. Community activity remains dominated by long-running threads on usage-limit complaints, Windows/Cowork sandboxing regressions tied to recent Windows updates, and model-behavior quality concerns (verbosity, reasoning degradation, rhetorical tics). A high-profile community proposal for a native hooks/extensibility system (`Mods`) continues to gather strong engagement.

## 2. Releases

- **[v2.1.272](https://github.com/anthropics/claude-code/releases)** — Bug fixes and reliability improvements.
- **[v2.1.271](https://github.com/anthropics/claude-code/releases)** — Added fast mode support for Claude Code Remote sessions (cloud and self-hosted runners), honoring the host's fast-mode setting or an in-session `/fast` command where org policy allows; added mouse/wheel support to the `/config` panel in fullscreen mode.

## 3. Hot Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Max plan session limits reportedly exhausting abnormally fast since March 2026. 852 comments, 476 👍 — the single largest thread in the tracker, marked `invalid` but still highly active, reflecting sustained user frustration over usage-limit transparency.
2. **[#36151](https://github.com/anthropics/claude-code/issues/36151)** — Feature request for multi-account switching in the Claude Mobile app without a shared email. 181 comments, 724 👍 — very high reaction-to-comment ratio suggests broad silent support.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Closed report on model behavior around `/goal` Stop-hook directives being cited as unrequested-action authorization, plus "absence-from-search treated as evidence of absence." Notable for documenting subtle model-reasoning failure patterns that generalize beyond one setup.
4. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — "Mods" proposal to make Claude 10x more extensible via function hooks. 177 comments, 110 👍 — Anthropic has publicly committed to shipping function hooks "in weeks," making this a key roadmap signal.
5. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Claude 4.7–5.0 and Fable models reportedly defaulting to repetitive rhetorical tics and incoherent prose despite style instructions. 122 comments, 426 👍 — recurring model-quality concern.
6. **[#92984](https://github.com/anthropics/claude-code/issues/92984)** — Cowork on Windows: all Plan9 shares fail after KB5124008; uninstalling the KB fixes it. 115 comments, 58 👍 — concrete, reproducible OS-update regression.
7. **[#92958](https://github.com/anthropics/claude-code/issues/92958)** — Related Cowork Windows regression: September 2026 cumulative update breaks Plan9 share attach on both ARM64 and x64, confirmed via rollback A/B testing on five machines — strong reproduction evidence pointing to a Windows-side driver/mount incompatibility.
8. **[#80444](https://github.com/anthropics/claude-code/issues/80444)** — Closed: Windows Desktop GPU-process crash via the in-app Browser tab that leaves the MSIX package unlaunchable until Repair. 111 comments — highlights fragility of the desktop app's update/repair path.
9. **[#69044](https://github.com/anthropics/claude-code/issues/69044)** — Long-form, months-long documentation of recurring errors from a daily power user. 51 comments — valuable as a structured, non-one-off feedback compilation.
10. **[#52871](https://github.com/anthropics/claude-code/issues/52871)** — MCP OAuth appends a trailing slash to the `resource` parameter, breaking Entra ID auth (AADSTS9010010). 48 comments, 28 👍 — concrete enterprise-auth interoperability bug with a clear repro.

## 4. Key PR Progress

Only 2 PRs were updated in the last 24h:

1. **[#94184](https://github.com/anthropics/claude-code/pull/94184)** — Community PR (`mods/diff`) implementing a pinned-header, body-only-scroll diff pane matching the built-in `/diff` panel: fixed header/base line/8-row file list, wheel-based hunk/list scrolling, and keyboard chord support (ctrl/opt+↑↓, ctrl+x b) working alongside the built-in dialog outside fullscreen. Closed as of 2026-09-14 — likely superseded or folded into the broader "Mods" extensibility effort tracked in #91870.
2. **[#83890](https://github.com/anthropics/claude-code/pull/83890)** — "Create pylint.yml," a minor CI/lint configuration contribution. Closed without further detail.

*(Note: PR volume in this window is minimal; most substantive activity in the tracker is issue-side.)*

## 5. Feature Request Trends

- **Extensibility/hooks**: Strong demand for a native plugin/hook system to extend Claude's behavior programmatically (#91870), with Anthropic committing to ship function hooks soon.
- **Usage/cost visibility**: Recurring asks for built-in usage analytics and quota introspection (`claude usage` command, #33978; quota access in CLI, #13585), consolidating over 10 related open issues.
- **Account/session management**: Requests for more flexible multi-account handling on mobile without shared email (#36151).
- **Diff/review UX**: Community interest in comparing diffs against branches other than `main` (#23626) and richer diff-pane interaction (#94184).
- **IDE/editor polish**: LaTeX rendering support in the VS Code plugin (#16446) and clipboard/copy behavior fixes in the Linux TUI (#62699).
- **Cost controls**: Demand for enforced spend caps with per-source attribution (hooks, plugins, subagents) rather than passive warnings (#85422).

## 6. Developer Pain Points

- **Usage limits perceived as inconsistent or opaque**: The top two most-engaged threads (#38335, #79773) both center on plan limits depleting faster than expected, with users unable to verify usage against plan tier — a recurring trust/transparency gap.
- **Windows/Cowork sandbox fragility after OS updates**: Multiple concurrent reports (#92984, #92958, #92977) tie recent Windows cumulative updates to broken Plan9 mounts and sandbox failures, suggesting a systemic compatibility issue with Windows update cadence rather than isolated bugs.
- **Desktop app update/repair reliability**: Windows MSIX installs show recurring "file in use" update failures (#76357) and GPU-crash-induced unlaunchable states (#80444), pointing to update-mechanism fragility on Windows specifically.
- **Model behavior quality regressions**: Persistent complaints about verbosity despite explicit instructions (#65961), rhetorical repetitiveness (#77136), and reasoning/performance regressions in Opus versions (#68780) — a recurring theme across otherwise unrelated bug reports.
- **Resource/performance overhead**: Idle CPU usage spikes (#19393) and skills loading full token cost at startup instead of progressive disclosure as documented (#14882) — both point to efficiency gaps between documented and actual behavior.
- **Auth interoperability with enterprise identity providers**: MCP OAuth's trailing-slash bug breaking Entra ID (#52871) and SSH agent environment variables not being forwarded (#29717) both reflect friction integrating Claude Code into existing enterprise auth/SSH setups.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-15

## Today's Highlights

OpenCode shipped **v1.18.31**, restoring ACP session state fidelity and surfacing remote-config auth errors at startup. Community energy remains split between the **"New Layout" UI backlash** (multiple high-upvote requests to restore the legacy sidebar) and a wave of **provider reliability issues** (Console Go, DeepSeek V4 Flash/V4.1 Flash, OpenRouter) causing failed or stalled sessions. A long-running **high CPU usage** regression and several **agent/session architecture** PRs (cost rollup, event compaction, config hot-reload) show active core stabilization work.

## Releases

**v1.18.31**
- **Core**: Fixed ACP session model, effort, mode, and reasoning chunk boundaries breaking on load/resume/fork (@JacobNWolf).
- **TUI**: Remote config authentication errors are now surfaced at startup with proper failure exit status, instead of failing silently.
- **Extensions**: Improvements listed but truncated in source data.

## Hot Issues

1. **[#13984](https://github.com/anomalyco/opencode/issues/13984) — Can not copy and paste in CLI** (59 comments, 👍32) — Clipboard shows "copied" but paste does nothing; long-running annoyance with no confirmed fix.
2. **[#30086](https://github.com/anomalyco/opencode/issues/30086) — High CPU usage in newer versions** (53 comments, 👍29) — Regression over ~7 days makes running multiple sessions (previously 10+, now struggles at 3) impractical; UI lag reported.
3. **[#17318](https://github.com/anomalyco/opencode/issues/17318) — SSE read timed out** (48 comments, 👍37) — Errors during file writes, especially when chaining skills (brainstorm → planning-with-files); closed but heavy engagement suggests recurrence.
4. **[#37012](https://github.com/anomalyco/opencode/issues/37012) — Keep legacy layout option** (45 comments, 👍63) — Users want the old workspace/navigation model preserved as an option; strong signal against forced UI migration.
5. **[#6651](https://github.com/anomalyco/opencode/issues/6651) — Dynamic model selection for subagents via Task tool** (41 comments, 👍80 — highest reaction count) — Subagents can't currently pick their own model when invoked by a primary agent; top feature ask.
6. **[#16017](https://github.com/anomalyco/opencode/issues/16017) — Add Go plan usage/balance API endpoint** (35 comments, 👍138 — highest overall reactions) — Requests programmatic access to subscription usage data already shown in the dashboard.
7. **[#48741](https://github.com/anomalyco/opencode/issues/48741) — Zen critical errors on Muse Spark models with images/tool calls** (27 comments) — `reasoning encrypted_content` errors block image and tool-call flows on a specific model family.
8. **[#39845](https://github.com/anomalyco/opencode/issues/39845) — DeepSeek V4 Flash requires China-hosted opt-in mid-session** (23 comments, 👍27) — Sessions break unexpectedly when routing changes require explicit consent not previously needed.
9. **[#48882](https://github.com/anomalyco/opencode/issues/48882) — Restore legacy UI with persistent left sidebar** (18 comments, 👍23, filed yesterday) — Direct follow-on to the #20242 sidebar redesign; reinforces the layout backlash trend.
10. **[#48811](https://github.com/anomalyco/opencode/issues/48811) — macOS: every prompt fails with "undefined is not an object"** (9 comments, 👍37 — high reaction-to-comment ratio, filed 2 days ago) — `SystemPrompt.environment` crash blocking all prompts/tool calls on macOS; urgent given breadth of impact.

## Key PR Progress

1. **[#49164](https://github.com/anomalyco/opencode/pull/49164) — fix(app): ignore IME composition keys in question dock** — Prevents Enter/Escape during IME composition (e.g., Japanese input) from incorrectly committing/dismissing answers.
2. **[#49105](https://github.com/anomalyco/opencode/pull/49105) — fix(core): bump session time_updated on step lifecycle events** — Closes #36893; ensures session timestamps update during turns, not just on move/switch/revert.
3. **[#49163](https://github.com/anomalyco/opencode/pull/49163) — fix(tui): unify thinking and patch progress lines** — Merges duplicate in-progress spinner rows when thinking and patch tools run concurrently.
4. **[#43458](https://github.com/anomalyco/opencode/pull/43458) — feat: add reload_config agent tool with auto-resume** — New `/reload` command hot-reloads config, plugins, MCP servers, skills, and agents without restarting the TUI.
5. **[#43645](https://github.com/anomalyco/opencode/pull/43645) — fix(core): roll up subagent cost into parent session, fix fork double-counting** — Closes #39740, #31032, #36944; addresses long-standing cost-accounting inaccuracies.
6. **[#49162](https://github.com/anomalyco/opencode/pull/49162) — fix(opencode): defer config reload until sessions are idle** — Prevents SIGUSR2 theme-switch signals from disrupting active sessions (closes #42621).
7. **[#46562](https://github.com/anomalyco/opencode/pull/46562) — feat(tui): make assistant-message footer a replaceable plugin** — Turns the `▣ mode · model · duration` footer into an extensible plugin surface (closes #46268).
8. **[#47510](https://github.com/anomalyco/opencode/pull/47510) — fix(core): compact superseded durable event snapshots** — Addresses unbounded growth of the `event` table; consolidates a cluster of related bug reports (#47223, #33356, #46833, #47022, and others).
9. **[#35311](https://github.com/anomalyco/opencode/pull/35311) — fix(core): multiple clones of same repo are different projects** — Large fix closing 16 related issues around project identity when a repo is cloned more than once.
10. **[#49061](https://github.com/anomalyco/opencode/pull/49061) — fix(session): retry empty completion regardless of finish reason** — Widens retry logic beyond `"unknown"` finish reason to also cover `"stop"`, targeting silent empty-response failures.

## Feature Request Trends

- **Legacy/classic UI restoration** — the dominant theme, spanning #37012, #48882, and the underlying #20242 redesign; users want the persistent sidebar and old navigation back as an option, not a wholesale replacement.
- **Subagent/model flexibility** — dynamic per-subagent model selection (#6651) and multi-provider auth profiles (#5391) point to demand for finer-grained control over model/provider routing.
- **Provider/ecosystem expansion** — steady stream of "add provider" docs PRs (xKiro, QVAC, CommandCode requests) and ecosystem plugin listings (opencode-agent-factory-plugin, lintlang).
- **Usage/billing transparency** — #16017 (usage API) and #45278 (payment failures) reflect appetite for clearer, programmatic visibility into subscription and billing state.
- **Session/monitoring UX** — #28175 (live session status panel + background notifications) signals demand for better multi-session observability.
- **Skill/agent config parity with Claude Code** — #34498 (`disable-model-invocation` frontmatter support) shows users porting expectations from Claude Code's skill system.

## Developer Pain Points

- **Provider instability** is the most frequent complaint cluster: recurring "Upstream request failed" errors across Console Go, Kimi K3, Mistral GLM-5.2 tool calls, and DeepSeek Flash models (#37231, #37815, #43199, #49041) suggest fragile upstream integration handling, especially around tool-call payloads and encrypted reasoning content.
- **Performance regressions**, particularly the CPU spike in #30086, are actively degrading multi-session workflows that were previously a core strength.
- **Timeout/retry brittleness** — SSE timeouts (#17318), 5-minute header timeouts on local providers (#26602), and narrow retry classification (#30611, addressed by #49061) point to a systemic need for more robust transport-layer error handling.
- **Basic UX regressions** — clipboard copy/paste breakage (#13984) and viewport auto-scroll interrupting reading (#29094) are long-lived annoyances that erode day-to-day usability despite low technical complexity.
- **Forced UI migration friction** — the layout redesign is generating disproportionate pushback relative to typical UI updates, suggesting insufficient opt-out/migration path for power users.
- **Data integrity under schema migration** — #31204 (NOT NULL constraint failures after session_message migrations) indicates migration rollout risk for users on in-flight sessions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
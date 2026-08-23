# AI CLI Tools Community Digest 2026-08-23

> Generated: 2026-08-23 07:29 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date: 2026-08-23**

## 1. Ecosystem Overview

The AI CLI tooling space is in a consolidation phase: both tracked projects show heavy investment in reliability and UX polish rather than headline feature launches, suggesting the initial land-grab of core functionality is largely complete and competition has shifted to trust, stability, and workflow ergonomics. Community-driven governance is highly visible in both ecosystems — multi-hundred-comment megathreads (Claude Code's AGENTS.md and Buddy campaigns; OpenCode's Memory Megathread) function as de facto public roadmaps that maintainers must respond to. A cross-cutting theme is agent safety and control: sandboxing, permission boundaries, and multi-account/multi-agent orchestration are now baseline expectations rather than differentiators. Session/state reliability (silent data loss, stalled sessions, desktop crashes) is emerging as the primary trust bottleneck across the category, not raw capability. Overall, the market is maturing from "does it work" to "can I trust it in production and at scale."

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | 2 (v2.1.240, v2.1.241 — patch/hotfix) | 0 |
| PRs merged/updated (24h) | 0 | 10 (active — UI stability, core fixes, provider auth) |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #6235 AGENTS.md — 375 comments, ~4,963 👍 | #20695 Memory Megathread — 135 comments, 104 👍 |
| Dominant issue theme | Standardization, account management, Windows stability | Memory leaks, sandboxing, session reliability |
| Engineering signal source | Release notes only (no PR visibility) | PR stream (10 substantive fixes) |

**Read:** Claude Code shipped patches but with zero visible PR activity in the window — engineering work is happening but not transparently tracked in public PRs. OpenCode shows the inverse: no releases cut, but a dense, visible PR stream, indicating a more continuous-delivery/trunk development style.

## 3. Shared Feature Directions

- **Sandboxing / execution isolation** — Claude Code has an active reliability bug in its sandbox (seccomp/`unshare` failures, #86928); OpenCode's #2242 (85 comments, 71 👍) is a long-standing *request* for sandboxing that doesn't yet exist, explicitly citing Gemini CLI/Codex as the bar. Both ecosystems treat filesystem/execution containment as unresolved.
- **Multi-account / multi-context management** — Claude Code has two related asks (#27302 connector multi-account, #18435 desktop multi-account, 234 + 168 comments) reflecting enterprise/multi-org friction. OpenCode's analog is subagent/model context control (#6651 dynamic subagent model selection, 70 👍) — same underlying need (managing multiple concurrent identities/contexts), different surface.
- **Configuration & customization control** — Both communities want deeper control over agent configuration: OpenCode's custom system prompts (#7101, 127 👍, closed as accepted) and hot-reload of agents/skills (#8751, 95 👍) mirror Claude Code's cross-tool config standardization push (AGENTS.md, #6235).
- **Session/state persistence and continuity** — Claude Code's data-loss bug (#41458, cleanup ignoring config) and cross-machine session resume requests parallel OpenCode's silent session-stall bug (#41469) and stuck "In Progress" state (#15431). Both point to session state as an under-engineered layer.

## 4. Differentiation Analysis

- **Target user / positioning**: Claude Code's issue mix skews toward enterprise governance (CVP approvals, connector accounts, org-level auth) and desktop/Windows stability — implying a broader, more commercial/enterprise-leaning user base. OpenCode's issues skew toward power-user TUI ergonomics (buffer search, Vim keybindings, panel layout) and provider flexibility (DeepSeek, Copilot routing) — implying a more technical, self-hosted/multi-provider audience.
- **Technical approach to transparency**: Claude Code's community-facing engineering signal is opaque this cycle (release-notes-only, no PR trail), consistent with a closed-source-adjacent, controlled-release model. OpenCode exposes granular PR-level detail (root-caused fixes like a wrong hostname in #31000, a `finish: unknown` bug in #41469), consistent with an open, community-inspectable development model.
- **Model behavior vs. infrastructure focus**: Claude Code's pain points include model *behavior* regressions (rhetorical tics, directive-authorization confusion) — issues intrinsic to the underlying LLM. OpenCode's pain points are almost entirely *infrastructure* (memory leaks, SSE handling, scroll rendering) — expected, since it's a provider-agnostic client rather than a model+client bundle.
- **Feature removal handling**: Claude Code's "Bring Back Buddy" saga highlights a governance gap (silent removal of a loved feature, no changelog transparency) that has become a trust flashpoint — a risk specific to vendor-controlled release cadence that OpenCode's more visible PR/issue linkage seems less prone to.

## 5. Community Momentum & Maturity

Claude Code shows deeper but narrower engagement — a small number of issues carry extraordinary weight (4,963 👍 on a single issue is an order of magnitude above anything in OpenCode's set), suggesting a larger total user base with concentrated demands on a few high-visibility asks. OpenCode shows broader, more distributed engagement across ~10 actively-developed threads with steady PR throughput, suggesting a smaller but highly engaged, technically fluent contributor community that ships fixes fast (note the cluster of same-author UI fixes from `Brendonovich`). Claude Code's zero-PR window versus two hotfix releases suggests a maturity model built on release cadence and enterprise trust; OpenCode's zero-release, ten-PR window suggests a maturity model built on rapid, visible iteration. Neither pattern is inherently "more mature" — they reflect different governance philosophies (closed cadence vs. open trunk).

## 6. Trend Signals

- **Sandboxing is becoming table stakes, not a differentiator.** Both leading tools have live sandbox problems (Claude Code: a reliability bug; OpenCode: outright absence). Any new entrant or evaluator should treat OS-level execution isolation as a baseline requirement, not a nice-to-have.
- **AGENTS.md-style cross-tool interoperability is gaining real pull.** A 375-comment, ~5K-reaction issue on a single repo is a strong signal that teams running multiple agents want shared configuration standards — vendors resisting this risk losing multi-tool shops.
- **Session-state integrity is the next reliability frontier.** Independently, both projects have active bugs where sessions silently fail, stall, or lose data without user awareness — this is the kind of trust-eroding failure mode that historically drives churn in developer tools.
- **Silent breaking changes carry outsized reputational cost.** The Buddy removal backlash shows that even minor UX removals, if undocumented, generate disproportionate community backlash — changelogs and deprecation notices are cheap insurance against this.
- **Multi-account/multi-provider flexibility is a growing enterprise requirement.** Both ecosystems are being pulled toward supporting more identities, providers, and orchestration contexts simultaneously — a sign the market is moving from single-model, single-account tools toward multi-agent, multi-provider platforms.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-23 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Comment counts on PRs were not available in this dataset, so ranking below reflects a mix of engagement signals: PR longevity/update activity, number of related follow-on PRs, and topical significance to the ecosystem.

| Skill / PR | Function | Status | Highlights |
|---|---|---|---|
| **[#1298 fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** | Fixes the skill-evaluation harness (`run_eval.py`, `run_loop.py`, `improve_description.py`) that silently reports 0% recall for every skill description | OPEN | Root-cause fix for a bug affecting the entire description-optimization loop; links to 10+ independent reproductions and Issue [#556](https://github.com/anthropics/skills/issues/556). Two other PRs (#1099, #1050) attempt narrower Windows-specific fixes for the same underlying problem — signals a systemic tooling gap in skill-creator. |
| **[#514 document-typography skill](https://github.com/anthropics/skills/pull/514)** | Typographic quality control for AI-generated documents (orphan wraps, widow paragraphs, numbering misalignment) | OPEN | Addresses a defect class present in nearly every generated document; broad applicability across the docx/pdf skill family. |
| **[#538 fix(pdf): case-sensitive file references](https://github.com/anthropics/skills/pull/538)** | Corrects `SKILL.md` references (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`) that break on case-sensitive filesystems | OPEN | Small, high-confidence fix; part of a cluster of hardening PRs (#538, #541, #539) from the same contributor targeting document skills. |
| **[#486 Add ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing | OPEN | Extends the document-skills family beyond docx/pdf to the open-standard ODF format. |
| **[#210 Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)** | Revises the official frontend-design skill for clearer, single-turn-actionable instructions | OPEN | Focused on making existing guidance more executable rather than adding scope — a maintenance-quality contribution. |
| **[#83 skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skills that score other skills across structure, documentation, and security dimensions | OPEN | Tooling-for-tooling; relevant given the trust/security concerns raised in Issue #492. |
| **[#541 fix(docx): tracked-change ID collision](https://github.com/anthropics/skills/pull/541)** | Prevents document corruption when the docx skill adds tracked changes to files with existing bookmarks | OPEN | Root-caused to a shared `w:id` namespace bug in OOXML; a genuine correctness fix rather than cosmetic. |
| **[#568 ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** | Broad enterprise skill spanning ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub | OPEN | Longest-running open PR in the list (Mar → Aug 2026), reflecting the scope/review overhead of large enterprise-platform skills. |

## 2. Community Demand Trends

Distilled from Issues (ranked by actual comment counts):

- **Trust & namespace security (43 comments, #492)** — the dominant concern by a wide margin. Community-authored skills distributed under the `anthropic/` namespace create impersonation/trust-boundary risk. This is driving demand for a verified-publisher or provenance mechanism.
- **Org-level skill distribution (16 comments, #228)** — users want native org-wide skill sharing in Claude.ai instead of manual `.skill` file passing via Slack/Teams.
- **Eval tooling reliability (12 comments, #556)** — `run_eval.py`'s 0% trigger-rate bug is a recognized blocker for anyone iterating on skill descriptions (feeds directly into PR #1298 above).
- **Context-window discipline (4–9 comments across #1487, #1329, #189, #1362)** — recurring theme: skills that eagerly inject large amounts of content (156k tokens in one case), duplicate skills across bundled plugins, or fail to build cleanly on current toolchains (pnpm ≥10.1). Community wants leaner, more composable skill packaging.
- **Reasoning/output quality gates (#1385, #1367)** — emerging appetite for meta-skills that audit Claude's own output before delivery (mechanical verification + adversarial review), rather than task-specific skills.
- **Platform/API integration gaps** — recurring smaller asks for Bedrock support (#29) and exposing Skills as MCP servers (#16), suggesting demand for skills to interoperate with existing agent infrastructure rather than being Claude-exclusive.

## 3. High-Potential Pending Skills

PRs showing sustained maintainer/community engagement (multiple updates over weeks) that could land soon:

- **[#1298](https://github.com/anthropics/skills/pull/1298)** — skill-creator eval fix; consolidates and likely supersedes narrower Windows fixes (#1099, #1050), directly resolves a top-commented issue (#556).
- **[#568](https://github.com/anthropics/skills/pull/568)** — ServiceNow skill; five-month-old and still being updated as of Aug 12, indicating active back-and-forth toward mergeable state.
- **[#525](https://github.com/anthropics/skills/pull/525)** — pyxel retro-game-dev skill; updated as recently as Jul 15, steady incremental progress.
- **[#538](https://github.com/anthropics/skills/pull/538)/[#541](https://github.com/anthropics/skills/pull/541)/[#539](https://github.com/anthropics/skills/pull/539)** — a coordinated set of small, low-risk document-skill hardening fixes from the same author; low review overhead should favor quick merges.
- **[#83](https://github.com/anthropics/skills/pull/83)** — quality/security analyzer meta-skills; relevance has grown given the trust-boundary discussion in #492.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability in the skill supply chain** — verifying who actually published a skill (#492), making the tooling that validates skill quality actually work (#556 → #1298), and keeping skills lean enough not to blow out the context window (#1487, #1362) — ahead of demand for any specific new skill category.

---

# Claude Code Community Digest — 2026-08-23

## 1. Today's Highlights

Claude Code shipped two consecutive patch releases (v2.1.240, v2.1.241) focused on stability fixes, with no PR activity recorded in the last 24 hours — suggesting these were hotfixes rather than feature work. Community attention remains concentrated on long-running, high-engagement threads: the `AGENTS.md` standardization request (#6235, 375 comments, ~4,963 👍) and the "Bring Back Buddy" campaign (#45596, 268 comments, ~1,171 👍) continue to dominate discussion volume. Elsewhere, sandbox reliability (seccomp failures), Windows-specific desktop crashes, and authentication/connector friction remain the most active bug clusters.

## 2. Releases

- **[v2.1.241](https://github.com/anthropics/claude-code/releases/tag/v2.1.241)** — Bug fixes and reliability improvements.
- **[v2.1.240](https://github.com/anthropics/claude-code/releases/tag/v2.1.240)** — Bug fixes and reliability improvements.

Both releases ship with minimal changelog detail; no new features or breaking changes noted.

## 3. Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235)** — Feature Request: Support AGENTS.md. The single largest engagement thread in the repo (375 comments, ~4,963 👍). Community pushes for adopting the emerging cross-tool `AGENTS.md` standard instead of the Claude-specific `CLAUDE.md`, citing friction on teams using multiple coding agents.
2. **[#45596](https://github.com/anthropics/claude-code/issues/45596)** — "Bring Back Buddy" — a consolidated community plea after `/buddy` was silently removed in v2.1.97. High emotional engagement (268 comments) reflects frustration over undocumented removals of beloved features.
3. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Support for multiple Connector accounts (same connector, different accounts) in Claude Code on the web. 234 comments; reflects growing enterprise/multi-org usage patterns hitting single-account limitations.
4. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — Request for multi-account management/switching in the Claude Desktop app. 168 comments; closely related to #27302, signaling a broader account-management gap across surfaces.
5. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — Bug: CVP-approved organizations still hit cyber-safeguard blocks despite prior approval. 140 comments; a trust/verification-pipeline bug affecting enterprise customers who believed they were cleared.
6. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed) — Detailed report on model behavior issues: unauthorized actions justified via stale directives, treating absence-of-search-results as evidence, and structure masking substance. 133 comments; a rare deep model-behavior writeup that resonated broadly.
7. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Claude 4.7–5.0 and Fable increasingly defaulting to repetitive rhetorical tics, struggling with prose coherence despite explicit style instructions. 61 comments, 348 👍 — a recurring quality complaint across model versions.
8. **[#86928](https://github.com/anthropics/claude-code/issues/86928)** — Sandboxed Bash intermittently fails with `apply-seccomp: unshare(CLONE_NEWUSER): Invalid argument`, ~1-in-10 failure rate. Marked "reproduced" — a credible reliability bug in the sandbox execution path.
9. **[#41458](https://github.com/anthropics/claude-code/issues/41458)** — `cleanupPeriodDays: 99999` ignored, resulting in 490 sessions silently deleted despite explicit user configuration. Tagged `data-loss`; a serious trust-eroding bug for users relying on session retention.
10. **[#86069](https://github.com/anthropics/claude-code/issues/86069)** — Windows/MSIX regression: cross-session messages land in the target composer but are never submitted, leaving sessions unresponsive. Tagged `regression` with a working repro — a fresh, concrete functional break.

## 4. Key PR Progress

No pull requests were updated in the tracked 24-hour window (0 items reported). PR activity may resume in the next cycle; today's engineering signal comes solely from the two patch releases above.

## 5. Feature Request Trends

- **Standardized/cross-tool config** — `AGENTS.md` adoption (#6235) is the clearest ecosystem-alignment ask, driven by teams juggling multiple AI coding agents.
- **Multi-account / multi-org support** — A recurring theme across surfaces: Connector accounts on the web (#27302) and profile switching in Desktop (#18435) both point to insufficient support for users managing several Claude identities.
- **Cross-machine / cross-session continuity** — Requests like cross-machine session resume (#31992) and restoring `/buddy` (#45596) reflect demand for persistent, portable agent state and familiar workflow companions.
- **File/project write permissions** — #16550 requests broader Claude-driven file/project management, extending beyond the current edit model.

## 6. Developer Pain Points

- **Undocumented feature removal** — The `/buddy` deprecation (#45596) shows the cost of silent breaking changes to beloved UX features; community trust visibly erodes without changelog transparency.
- **Auth & verification friction** — Multiple issues (#84352, #77966, #32479, #79808) describe OAuth loops, connector recognition failures, and stuck verification states — authentication remains a persistent friction point across platforms.
- **Windows/Desktop stability** — A cluster of Windows-specific bugs (GPU process crashes #81698, MSIX GPU kill #81341, TUI rendering #19637, message delivery regression #86069) suggests the Windows/Desktop surface needs focused reliability investment.
- **Model behavior consistency** — Reports of repetitive rhetorical tics (#77136) and directive-authorization confusion (#60705) indicate users are noticing subtle regressions in model reasoning/style discipline across recent versions.
- **Data-loss risk from config not respected** — #41458 (session cleanup ignoring explicit settings) is a high-severity trust issue; configuration should be a hard guarantee, not best-effort.
- **Sandbox flakiness** — Intermittent seccomp failures (#86928) undermine confidence in the sandboxed execution path for a meaningful fraction of Bash calls.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-23

## Today's Highlights

Activity remains concentrated on stability and UX polish rather than new features: no releases shipped in the last 24h, but the desktop/web app UI saw a heavy wave of scroll/timeline/markdown-rendering fixes from `Brendonovich`, and several core bug fixes landed around plugin tool decoding, subagent IDs, and Anthropic SSE event handling. On the issue side, the long-running **Memory Megathread** (#20695) and **agent sandboxing** (#2242) continue to dominate community attention, alongside strong demand for dynamic subagent model selection and custom system prompts.

## Releases

None in the last 24h.

## Hot Issues

1. **[Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (#20695) — 135 comments, 104 👍. Central tracking issue for memory leak reports; maintainers are explicitly asking for heap snapshots, not LLM-generated fix suggestions.
2. **[Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242)** (#2242) — 85 comments, 71 👍. Long-standing request for macOS seatbelt-style sandboxing to restrict file/terminal access outside the working directory, similar to Gemini CLI/Codex.
3. **[Dynamic model selection for subagents via Task tool](https://github.com/anomalyco/opencode/issues/6651)** (#6651) — 40 comments, 70 👍. Users want primary agents to control which model a spawned subagent uses at invocation time.
4. **[Allow custom system prompts in global/project/custom dirs](https://github.com/anomalyco/opencode/issues/7101)** (#7101, closed) — 35 comments, 127 👍ᅳhighest reaction count of the batch. Inspired by community discussion on shortening default system prompts.
5. **[TUI - Search for string in session buffer](https://github.com/anomalyco/opencode/issues/4714)** (#4714) — 33 comments, 45 👍. Requests a find-in-buffer feature akin to text editors for navigating long agent output.
6. **[DeepSeek V4 Flash requires "Enable models hosted in China" for Go subscription](https://github.com/anomalyco/opencode/issues/39845)** (#39845) — 22 comments, 27 👍. Mid-session regression where a previously working model now demands an explicit opt-in flag.
7. **[Hot-reload agents, skills and commands](https://github.com/anomalyco/opencode/issues/8751)** (#8751) — 21 comments, 95 👍. High-reaction feature request to invalidate/reload configs without restarting OpenCode.
8. **[Delayed queue feature](https://github.com/anomalyco/opencode/issues/5408)** (#5408) — 21 comments, 29 👍. Requests loop-style repeated submission with learnings/plan updates carried between iterations.
9. **[Session silently stops on empty LLM response](https://github.com/anomalyco/opencode/issues/41469)** (#41469) — 13 comments. Root-caused to `packages/opencode/src/session/prompt.ts` treating a 0-token/`finish: unknown` response as a normal completed turn instead of erroring.
10. **[Copilot provider model-list fetch fails for github.com users](https://github.com/anomalyco/opencode/issues/31000)** (#31000, closed) — 8 comments. Root-caused to a `d7()` helper constructing a non-existent `copilot-api.github.com` domain instead of `api.githubcopilot.com`.

## Key PR Progress

1. **[fix(app): complete leading paginated turns](https://github.com/anomalyco/opencode/pull/44322)** (#44322) — Handles partial leading assistant turns when their parent falls outside the loaded page, with bounded delayed overfetch to recover it.
2. **[fix(app): hide unsettled cold timeline](https://github.com/anomalyco/opencode/pull/44334)** (#44334) — Hides cold pinned timeline rows until estimated heights settle and Markdown is mounted, avoiding layout jumps on load.
3. **[fix(session-ui): defer timeline markdown rendering](https://github.com/anomalyco/opencode/pull/44333)** (#44333) — Keeps timeline Markdown blank until converted HTML is ready to prevent flashes of unstyled content during streaming.
4. **[fix(core): decode plugin tool input with the schema's own instance](https://github.com/anomalyco/opencode/pull/43460)** (#43460) — Fixes tool-input decode failures ("Invalid tool input") when a config plugin bundles a different `effect` schema version than the server. Closes #43322.
5. **[fix(core): expose valid subagent IDs in the subagent tool](https://github.com/anomalyco/opencode/pull/43282)** (#43282) — Lists valid `agent` values in the subagent tool description instead of leaving it undocumented. Closes #36761.
6. **[fix(app): preserve loopback server host](https://github.com/anomalyco/opencode/pull/44296)** (#44296) — Fixes dev-server host resolution and preserves Basic Auth credentials when accessed via loopback URLs.
7. **[feat(core): add OPENCODE_TRACE_RATIO head sampling for OTel export](https://github.com/anomalyco/opencode/pull/44134)** (#44134) — New env var for `ParentBased(TraceIdRatioBased)` OTel trace sampling, defaulting to full export (ratio=1) for backward compatibility. Closes #44182.
8. **[fix(app): preserve scroll across history prepends](https://github.com/anomalyco/opencode/pull/44317)** (#44317, closed) — Loads bounded session message pages and stabilizes virtual-scroll anchors/row identity when history prepends re-key rows.
9. **[fix(llm): ignore unknown Anthropic SSE events](https://github.com/anomalyco/opencode/pull/44083)** (#44083) — Messages route now ignores unrecognized named SSE events instead of failing, per Anthropic's forward-compatibility contract. Closes #43765.
10. **[fix(opencode): require OAuth for GitHub Copilot](https://github.com/anomalyco/opencode/pull/44114)** (#44114) — Prevents `GITHUB_TOKEN` from silently activating the `github-copilot` provider via generic env auth, avoiding unintended provider selection. Fixes #44113.

## Feature Request Trends

- **Agent/subagent orchestration control**: dynamic model selection per subagent (#6651), nested sub-agent spawning up to 5 levels with orchestration (#32166), auto-approval "auto mode" for permissions (#37564).
- **Configuration flexibility**: custom system prompts across global/project/custom scopes (#7101, 127👍), hot-reload of agents/skills/commands without restart (#8751, 95👍).
- **TUI/UI ergonomics**: in-buffer search (#4714), Vim keybindings (#11111), swappable left/right panel layout (#16349), select-all text shortcut (#8504).
- **Sandboxing & security**: restricting agent filesystem/terminal access to the working directory (#2242, 71👍) remains one of the most-requested safety features, a full year after being opened.
- **Workflow automation**: delayed/queued repeated submissions that carry learnings between iterations (#5408), background bash execution similar to Claude Code's Ctrl+B (#1970).

## Developer Pain Points

- **Memory leaks** remain the top unresolved complaint, with a dedicated megathread (#20695) still active after 4+ months and no confirmed root cause.
- **Session reliability**: multiple reports of sessions silently stalling or freezing — empty LLM responses treated as normal completion (#41469), stuck "In Progress" state after macOS lock screen (#15431), and requests hanging without response (#32149).
- **Provider/model regressions**: DeepSeek V4 Flash suddenly gated behind a China-hosting opt-in (#39845), Copilot model-list fetch broken for github.com users due to a bad hostname (#31000), region-restricted models failing silently in the picker (#40006).
- **UI stability on desktop app**: renderer fatally crashing on stale session references (#32473), mouse-drag on terminal window triggering exit + garbled output on Windows (#9790), scroll/timeline jank now being actively addressed by a cluster of `Brendonovich` PRs (#44322, #44334, #44333, #44317, #44329, #44320).
- **Subagent invocation reliability**: `@mention`-ing a subagent doesn't guarantee it's actually invoked (#19538), undermining trust in manual subagent control.
- **Input capture bugs**: Warp mode + interactive Q&A can fully lock out user input (mouse, Enter, Ctrl+C), forcing a forced terminal close (#27302).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
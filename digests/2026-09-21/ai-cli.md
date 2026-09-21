# AI CLI Tools Community Digest 2026-09-21

> Generated: 2026-09-21 13:34 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool CLI Comparison Report — 2026-09-21

## 1. Ecosystem Overview

The AI CLI tooling space remains in a high-churn, pre-consolidation phase: both flagship projects examined here shipped zero releases in the last 24 hours, yet both are generating triple-digit comment volumes on unresolved billing/usage-limit disputes. Claude Code shows the profile of a mature, high-stakes product — a single 8-month-old issue with nearly 1,500 comments dominates community attention — while OpenCode exhibits the volatility of a fast-moving open-source project juggling UI redesigns, i18n expansion, and provider-compatibility fires simultaneously. Both ecosystems converge on the same friction point: usage/cost transparency has become the top trust issue across the category, not a tool-specific complaint. Extensibility (hooks, plugins, permission systems) is the other shared battleground, with each project actively redesigning its extension model in public. Overall, the market is optimizing around configurability and platform parity rather than net-new core capability.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| Top issue engagement | 1,496 comments / 694 👍 (#16157) | 47 comments / 13 👍 (#49433) |
| Active PRs (24h) | 4 (below 10-item target) | 10 |
| Releases (24h) | None | None |
| Dominant issue theme | Usage-limit transparency, extensibility | Free-tier/billing errors, hardcoded limits |
| Data-integrity concerns | Silent transcript deletion (#59248), transcript corruption (#73638) | SQLite corruption on NFS (#14970) |

**Read:** OpenCode's PR throughput (10 vs. 4) suggests a smaller-batch, higher-velocity contribution model typical of community-driven OSS; Claude Code's issue engagement is an order of magnitude higher, reflecting a much larger installed user base concentrated on a commercial product.

## 3. Shared Feature Directions

- **Usage/billing transparency** — Claude Code (#16157, #37394, Max-plan limits) and OpenCode (#49433, #49927, #50093 — Zen free-tier errors) both face users demanding clearer, more predictable cost/quota behavior. This is the single strongest cross-tool signal.
- **Extensibility / plugin-permission systems** — Claude Code's hooks roadmap (#91870) and OpenCode's `permission.ask` hook bug (#7006) plus permission-ordering fix (PR #46871) show both projects mid-redesign of how third-party code integrates safely.
- **Session/data integrity** — Claude Code's silent transcript deletion (#59248) and session-rename corruption (#73638) parallel OpenCode's SQLite corruption on NFS (#14970) and bounded snapshot-diff storage fix (PR #50360) — both communities are hardening persistence layers under real-world failure modes.
- **Configurable limits** — OpenCode's hardcoded 32k output/token cap (#29363, #1735) echoes the broader "the tool decides my limits, not my config" complaint also visible in Claude Code's usage-cap frustration.
- **Layout/UX control** — Both show pushback against auto-applied UI changes: OpenCode's forced "tabs on top" layout with no opt-out (#37546, #48958) mirrors Claude Code's platform-specific UX gaps (Windows always-on-top, #89467).

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Broad subscriber base (Max/Team plans), enterprise IDE users | Self-hosted/multi-provider power users (Bedrock, DeepSeek, custom gateways) |
| Technical approach | Tightly integrated desktop app + IDE plugins, closed extensibility model opening via hooks | Provider-agnostic core with pluggable model backends, open permission/plugin API |
| Feature focus | IDE parity (VS 2026), diff-pane fidelity, agent-orchestration reliability | Multi-provider compatibility (Bedrock, DeepSeek, custom endpoints), i18n, desktop onboarding |
| Governance style | Vendor-driven roadmap (Anthropic posts roadmap updates directly in issues) | Community PR-driven, faster merge cadence on smaller fixes |
| Notable friction | Model behavior regressions (prose tics, over-authorization under stale directives) | Regression management (new layout, billing errors) from rapid shipping cadence |

Claude Code's problems skew toward **trust-at-scale** (billing opacity, data loss, model quality drift) — issues that emerge only with a large, dependent user base. OpenCode's problems skew toward **integration breadth** (many providers, many locales, many deployment topologies) — issues typical of an extensible, self-hosted tool still stabilizing its interfaces.

## 5. Community Momentum & Maturity

- **Claude Code**: Lower PR velocity today (4 vs. target 10) but vastly higher issue-engagement depth — a mature product where community energy concentrates on a small number of long-running, high-stakes threads rather than broad feature churn. Signals a stable core with unresolved policy/trust issues rather than technical instability.
- **OpenCode**: Higher PR throughput and broader issue spread (10 distinct hot issues touching billing, LSP, i18n, permissions, storage) indicates active, distributed development — but the volume of regression-driven complaints (layout, free-tier errors) suggests shipping cadence may be outpacing QA/rollout process maturity.
- Neither tool shipped a release in the tracked window, so today's signal is entirely issue/PR-driven rather than release-driven.

## 6. Trend Signals

1. **Usage-based pricing transparency is becoming a category-wide liability.** Both a commercial vendor (Anthropic) and an open-source/Zen-hosted tool are fielding sustained user revolt over unclear quota consumption — expect this to become a competitive differentiator as tools that publish clear usage dashboards win trust.
2. **Extensibility is the next battleground.** Hooks, mods, and permission APIs are being actively redesigned in both ecosystems simultaneously — developers evaluating these tools for team adoption should weight plugin/hook API stability heavily, as both are pre-GA on this front.
3. **Data durability under real-world conditions (NFS, session renames, retention policies) is under-tested.** Multiple concurrent data-integrity bugs across both tools suggest the category as a whole has prioritized feature velocity over storage-layer hardening — a due-diligence item for teams considering these tools for production/regulated workflows.
4. **UX changes shipped without opt-out are a recurring self-inflicted wound.** Both projects saw user backlash from auto-applied layout/behavior changes — a process signal (staged rollouts, feature flags) more than a technical one.
5. **Multi-provider flexibility (OpenCode) vs. integrated-platform depth (Claude Code) is emerging as a real strategic fork** in this market — buyers should choose based on whether provider portability or first-party integration depth matters more to their stack.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights (as of 2026-09-21)

## 1. Top Skills Ranking

**#1298 — skill-creator: trigger-eval isolation & Windows/runtime fixes** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
Hardens `skill-creator`'s trigger-evaluation harness: isolates per-worker command probes to stop false misses/invalid scores, fixes `select()` failures on Windows subprocess pipes, and prevents unrelated tool errors from silently becoming non-triggers. Status: **open**, active through 2026-09-16 — directly related to two other open bug reports on the same subsystem (#1769, #556), suggesting `skill-creator`'s eval pipeline is a recurring pain point.

**#1742 — mcp-builder: mcp>=2 streamable_http_client compatibility** ([PR #1742](https://github.com/anthropics/skills/pull/1742))
Fixes a breaking rename in the `mcp` SDK (`streamablehttp_client` → `streamable_http_client`) and updates custom-header configuration to the new `create_mcp_http_client`/`http_client` pattern. Fixes issue #1668. Status: **open**, updated as recently as 2026-09-19 — a straightforward dependency-compatibility fix likely close to merge.

**#822 — AWT (AI Watch Tester): AI-powered E2E testing skill** ([PR #822](https://github.com/anthropics/skills/pull/822))
Adds vision + browser-control based end-to-end testing with zero-code test generation. Longest-running active thread in the set (opened 2026-03-31, still updated 2026-09-19), indicating sustained maintainer/community interest in an AI-native testing workflow. Status: **open**.

**#525 — Pyxel skill for retro game development** ([PR #525](https://github.com/anthropics/skills/pull/525))
Guides Claude through building/debugging retro games in Python's Pyxel engine with deterministic headless runs and frame-level inspection. Opened by the Pyxel maintainer (`kitao`) himself, lending credibility. Status: **open**, still updated 2026-09-16 despite being opened in March — a long-tail review case.

**#1769 — Fix skill-creator trigger detection reporting 0% recall** ([PR #1769](https://github.com/anthropics/skills/pull/1769))
Fixes `run_loop`'s trigger evaluation always reporting `recall=0%` regardless of description quality, which silently corrupts skill-tuning optimization (fixes issue #1721). Status: **open**, tight turnaround (opened/updated within a day), reinforcing that skill-creator's eval reliability is a hot area.

**#1790 — docx: create missing document.xml.rels in comment.py** ([PR #1790](https://github.com/anthropics/skills/pull/1790))
Fixes a document-corruption defect where comment relationships (`comments.xml`, etc.) fail to register when `document.xml.rels` is absent. Part of a cluster of docx/office correctness fixes (#541, #1765). Status: **open**, newest PR in the set (2026-09-19).

**#538 / #541 — docx correctness fixes (case-sensitive refs, tracked-change ID collisions)** ([PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541))
Two related fixes from the same author (`Lubrsy706`) addressing case-sensitive filesystem breakage and `w:id` collisions corrupting DOCX tracked changes. Status: **open** — part of a broader pattern of Office-format skills needing correctness hardening.

## 2. Community Demand Trends

From the Issues data, the clearest anticipated directions are:

- **Trust & namespace security** — the top issue by far ([#492](https://github.com/anthropics/skills/issues/492), 43 comments) flags community skills impersonating official Anthropic skills via the `anthropic/` namespace, a trust-boundary/permission-escalation risk. This is the single most urgent unmet need.
- **Reliable trigger evaluation** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) reports `claude -p` never triggering skills in `run_eval.py`, directly tied to the #1298/#1769 PR cluster above. Getting trigger-detection right is a recurring blocker for skill authors.
- **Organizational/team skill sharing** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file distribution via Slack/Teams.
- **Context-window discipline for bundled skills** — [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api skill injecting ~156k tokens) and [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills across plugins) point to demand for tighter token budgeting and de-duplication in the official skill set.
- **MCP evaluation tooling correctness** — [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder's evaluation harness fabricating errors against real servers) echoes the same "eval pipeline is broken" theme seen in skill-creator PRs.
- **Agent governance/quality-gate proposals** — [#412](https://github.com/anthropics/skills/issues/412) and [#1385](https://github.com/anthropics/skills/issues/1385) reflect interest in safety/quality-gate patterns (policy enforcement, adversarial review, delivery verification) as new skill categories, though neither has concrete PRs yet.

## 3. High-Potential Pending Skills

PRs with active, recent engagement and no blocking controversy — most likely to land soon:

- [**PR #1742**](https://github.com/anthropics/skills/pull/1742) — mcp-builder dependency-compatibility fix, updated 2026-09-19, low-risk and addresses a real breakage.
- [**PR #1769**](https://github.com/anthropics/skills/pull/1769) — skill-creator 0% recall fix, fast-moving (opened and updated within 24h), fixes a clearly diagnosed bug (#1721).
- [**PR #1790**](https://github.com/anthropics/skills/pull/1790) — docx rels-file fix, newest and narrowly scoped, part of a well-understood defect cluster.
- [**PR #1298**](https://github.com/anthropics/skills/pull/1298) — broader skill-creator eval rework, still receiving updates through mid-September; larger in scope so may take longer but has clear momentum.
- [**PR #822**](https://github.com/anthropics/skills/pull/822) — AWT E2E testing skill, six months of sustained activity signals maintainer interest despite not yet merging.

## 4. Skills Ecosystem Insight

The community's most concentrated demand right now is **trust and reliability infrastructure around the skill lifecycle** — namespace/trust-boundary security ([#492](https://github.com/anthropics/skills/issues/492)) and broken trigger-evaluation tooling ([#556](https://github.com/anthropics/skills/issues/556), [#1769](https://github.com/anthropics/skills/pull/1769), [#1298](https://github.com/anthropics/skills/pull/1298)) — rather than new Skill functionality itself.

---

# Claude Code Community Digest — 2026-09-21

## Today's Highlights

No new releases shipped in the last 24 hours, so today's activity centers on continued fallout from the Max-plan usage-limit controversy (#16157) and steady progress on the desktop app's diff-pane parity work. Community pressure remains high around cost/usage transparency and platform-specific UX gaps (Windows always-on-top, VS Code integration), while four active PRs continue hardening the diff mod and plugin hook execution.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157)** — [BUG] Instantly hitting usage limits with Max subscription. By far the most active issue (1,496 comments, 694 👍), still open after 8+ months — signals a persistent trust gap around usage-limit transparency for paying subscribers.
2. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — Mods: make Claude 10x more extensible. Anthropic's own roadmap update on function hooks (204 comments, 124 👍); community is actively shaping the extensibility design.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Model behavior: unauthorized actions cited via stale `/goal` directives. Closed but heavily discussed (191 comments); flags a subtle model-side pattern around treating absence-of-evidence as evidence.
4. **[#15942](https://github.com/anthropics/claude-code/issues/15942)** — Add Visual Studio 2026 Integration. High demand (445 👍) for IDE parity beyond VS Code/JetBrains.
5. **[#77136](https://github.com/anthropics/claude-code/issues/77136)** — Claude 4.7–5.0 and Fable default to repetitive rhetorical tics. 436 👍; a recurring prose-quality complaint spanning multiple model generations.
6. **[#59248](https://github.com/anthropics/claude-code/issues/59248)** — Silent retention cleanup deletes session transcripts with no warning. Data-loss label, 35 👍 — a serious trust/reliability concern for users relying on session history.
7. **[#47509](https://github.com/anthropics/claude-code/issues/47509)** — Team plan needs a Max 20x-equivalent tier. 152 👍 from power users (CTOs, tech leads) who outgrow the current Premium seat multiplier.
8. **[#89467](https://github.com/anthropics/claude-code/issues/89467)** — Windows desktop app window is always-on-top with no toggle. 72 👍; basic window-management gap on Windows.
9. **[#71723](https://github.com/anthropics/claude-code/issues/71723)** — Agent tool `name` parameter silently switches to teammate protocol, losing background agent results. Reproduced bug affecting agent orchestration reliability.
10. **[#73638](https://github.com/anthropics/claude-code/issues/73638)** — Session rename mid-server-tool-call corrupts transcript, causing 400 errors on all future prompts. Reproduced core bug with concrete repro steps.

## Key PR Progress

1. **[#95423](https://github.com/anthropics/claude-code/pull/95423)** — diff mod: skip refetching diff after read-only shell commands (`ls`, `git status`, `cat`, grep), matching built-in panel behavior via `isReadOnly` flag.
2. **[#95698](https://github.com/anthropics/claude-code/pull/95698)** — fix(plugins): run `ralph-wiggum` and `output-style` `.sh` hooks through bash with quoted paths, fixing unquoted bare-path execution bugs (refs #95673, #78490).
3. **[#95587](https://github.com/anthropics/claude-code/pull/95587)** — diff mod: align resumed-session pane behavior, `/clear` handling, and session-line tracking with the built-in panel (closed).
4. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — diff mod: only auto-open the pane on first edit when there's a file to list, preventing empty-pane pop-ups for out-of-repo or ignored-file writes.

*(Only 4 PRs were updated in the last 24h; fewer than the target 10.)*

## Feature Request Trends

- **Extensibility**: hooks/mods system expansion (#91870) is the single largest community-shaping effort underway.
- **IDE/platform parity**: requests for Visual Studio integration (#15942), VS Code context-usage display (#18456), and desktop status bar (#41456) point to demand for consistent tooling across editors and surfaces.
- **Plan/tier flexibility**: higher-usage Team tiers (#47509) and general Max-plan usage concerns (#16157, #37394) dominate cost-related asks.
- **Session/memory management**: `/delete` command (#26904), AGENTS.md/skills support (#31005), disabling individual plugin skills (#14920), and prompt-topic triggers for rules (#87804) reflect growing appetite for finer-grained session and configuration control.
- **Auth flexibility**: device-code auth for headless environments (#22992) and easier personal/work account switching (#22872).

## Developer Pain Points

- **Usage-limit opacity**: the dominant complaint by volume and engagement — users on Max/Team plans report hitting limits far faster than expected, with little diagnostic visibility (#16157, #37394).
- **Data loss and trust**: silent transcript deletion (#59248) and transcript corruption from session renames (#73638) undermine confidence in session persistence.
- **Model prose/behavior regressions**: recurring rhetorical tics and reduced coherence across recent model versions (#77136), plus subtle over-authorization behavior under stale directives (#60705).
- **Platform-specific rough edges**: Windows always-on-top window bug (#89467), slash-command picker not opening reliably (#89398), and WSL2 regex/memory issues (#54394) suggest platform-specific QA gaps.
- **Agent/tool reliability**: the Agent tool's silent protocol switch losing background results (#71723) and Edit tool failures on mixed Unicode escapes (#64479) point to edge-case fragility in core tooling.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-21

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No new releases landed in the last 24h, but the community is dealing with a spike of free-tier/Zen billing errors ("OpenCode's free tier can only be used from within OpenCode") hitting multiple entry points — plugins, custom agents, and the new `explore` subagent — with 47+ comments on the lead issue. In parallel, the project continues rapid iteration on desktop/UI layout (settings, onboarding, transparency), i18n completeness, and a batch of core reliability fixes around LSP cleanup, snapshot diff storage, and session ordering.

## Releases

None in the last 24h.

## Hot Issues

1. **[#49433](https://github.com/anomalyco/opencode/issues/49433) — Error from provider (Console): free tier can only be used from within OpenCode** (47 comments, 13 👍) — The most active issue today; affects any model on v1.3.17, appears to be a Console/free-tier auth regression blocking basic usage.
2. **[#29363](https://github.com/anomalyco/opencode/issues/29363) — `limit.output` silently capped at 32k** (22 comments, 24 👍) — `opencode.json`'s `limit.output` is ignored in favor of a hardcoded 32k cap; the only workaround is an undocumented experimental env var, frustrating users on high-context models like DeepSeek (384k) and GPT/Claude (128k).
3. **[#7006](https://github.com/anomalyco/opencode/issues/7006) — `permission.ask` plugin hook defined but not triggered** (19 comments, 25 👍) — Breaks the new Permissions plugin API (from PR #6319) for custom auto-approval logic; a core extensibility gap for plugin authors.
4. **[#1735](https://github.com/anomalyco/opencode/issues/1735) — max_tokens defaults to 32000 with custom providers** (19 comments, 12 👍) — Long-running duplicate/related issue to #29363, affecting OpenAI-compatible gateway users (Bedrock, custom endpoints).
5. **[#1168](https://github.com/anomalyco/opencode/issues/1168) — Feature Request: clickable links (Ctrl+Left Click)** (15 comments, **139 👍**) — Highest-reaction item in this batch; a long-standing TUI usability gap versus other terminal agents/editors.
6. **[#14970](https://github.com/anomalyco/opencode/issues/14970) — SQLite corruption on NFS with concurrent sessions** (13 comments, 24 👍) — Data-integrity bug: concurrent sessions on NFS-mounted homes corrupt the shared `opencode.db`, a serious risk for shared/remote dev environments.
7. **[#49927](https://github.com/anomalyco/opencode/issues/49927) — Free Usage Exceeded on first session of the week** (13 comments) — Another Zen billing/quota complaint, compounding the free-tier trust issue seen in #49433.
8. **[#48069](https://github.com/anomalyco/opencode/issues/48069) — Bedrock GPT-6 Astra fails after image read tool result** (13 comments, closed) — Bedrock ConverseStream rejects follow-up requests after an image tool result; provider-compatibility edge case now resolved.
9. **[#48958](https://github.com/anomalyco/opencode/issues/48958) — New layout makes the UI unusable** (8 comments, 13 👍) — Users report the new UI removed easy project switching and worktree-based task workflows; ties into #37546 below.
10. **[#37546](https://github.com/anomalyco/opencode/issues/37546) — Web: no way to revert new layout, missing workspaces/worktrees** (8 comments, 27 👍) — The new "tabs on top" Web layout auto-enabled past v1.17.19 with no opt-out and no worktree support, a recurring UI-regression theme this week.

## Key PR Progress

1. **[#50346](https://github.com/anomalyco/opencode/pull/50346) — fix(cli): show actionable upgrade errors** — Replaces silent/empty updater failures with concise diagnostics and recovery hints across curl, npm, pnpm, Bun, Yarn, and Homebrew.
2. **[#49172](https://github.com/anomalyco/opencode/pull/49172) — feat(desktop): improve settings project management** — Unifies project settings UI with shared list components.
3. **[#50362](https://github.com/anomalyco/opencode/pull/50362) — fix(lsp): retire servers for deleted roots** (closes #50361) — Stops leaking LSP client processes when a workspace root is deleted or replaced.
4. **[#50358](https://github.com/anomalyco/opencode/pull/50358) — feat(i18n): complete Chinese locale coverage** — Fills 469 missing zh-CN keys across app and UI i18n dictionaries.
5. **[#48501](https://github.com/anomalyco/opencode/pull/48501) — feat(desktop): improve Console onboarding** — Makes OpenCode Console the primary Desktop provider setup path.
6. **[#50360](https://github.com/anomalyco/opencode/pull/50360) — fix(opencode): bound patch text stored per snapshot diff** (closes #50089) — Prevents unbounded patch storage by capping full-file diffs.
7. **[#46871](https://github.com/anomalyco/opencode/pull/46871) — fix(agent): rank legacy tools-derived permission below global config** (fixes #46873) — Corrects permission rule ordering so global config properly overrides deprecated per-agent tool rules.
8. **[#50248](https://github.com/anomalyco/opencode/pull/50248) — fix(cli): keep mini session waits alive** (closes #50135) — Fixes premature session termination in the "mini" session flow.
9. **[#48002](https://github.com/anomalyco/opencode/pull/48002) — fix(core): fall back to empty catalog when models.dev unreachable** (closes #47328) — Prevents a fatal `Effect.orDie` crash on first run when the models catalog fetch times out.
10. **[#50354](https://github.com/anomalyco/opencode/pull/50354) — feat(opencode): auto-title sessions in user language with rename tool** (closes #50355) — Fixes sessions getting stuck on default titles when title generation races the second message.

## Feature Request Trends

- **Configurable output/token limits** — recurring ask to respect user-set `limit.output` / `max_tokens` instead of hardcoded 32k caps (#29363, #1735).
- **TUI/UX polish** — clickable links (#1168, 139 👍), reduced padding (#9955), full paste previews (#14670), subagent token visibility (#22103).
- **Layout control & worktree support** — ability to revert to legacy layout and restore workspace/worktree functionality in Web and Desktop (#37546, #48958, #38230).
- **Zen/billing transparency** — programmatic balance API (#10448, 30 👍), workspace deletion in Zen (#18653).
- **Media/tool support expansion** — audio/video attachments in the read tool (#22260).

## Developer Pain Points

- **Free-tier/Zen billing instability** is the dominant complaint cluster today — errors blocking custom agents, subagents, and repeat sessions, plus escalating retry timers across free models (#49433, #49927, #50093, #50081, #50079).
- **Hardcoded token/output limits** silently override user config with no documented fix, a long-running frustration for high-context model users (#29363, #1735).
- **UI/layout regressions** — the new "tabs on top" layout shipped without an opt-out and dropped worktree support, frustrating users who relied on the previous workflow (#37546, #48958, #38230).
- **Plugin/permission system gaps** — `permission.ask` hook not firing undermines custom auto-approval plugins built on the newer Permissions API (#7006).
- **Data integrity on shared filesystems** — SQLite corruption when running concurrent sessions over NFS is a serious risk for team/remote setups (#14970).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-08-12

> Generated: 2026-08-12 08:13 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Digest Comparison — 2026-08-12

## 1. Ecosystem Overview

The AI coding CLI space continues to mature past the "does it work" phase into "does it work *reliably at scale*" — both tools' top issues today are dominated by stability regressions, platform-specific crashes, and trust/transparency concerns rather than missing core functionality. Claude Code shows the signs of an established, high-traffic product: legacy feature-removal grievances (`/buddy`), enterprise auth friction, and scrutiny over undocumented model behavior. OpenCode, by contrast, is still in a rapid-iteration phase with today's PR queue almost entirely defensive fixes (stdio pipes, UTF-8 paths, git semantics, config mutation) plus a headline 6.8× performance win — typical of a fast-moving open-source project hardening its core. Both ecosystems converge strongly on two themes: persistent/cross-session memory and Windows-platform instability, suggesting these are systemic pain points across the category, not vendor-specific bugs. Neither tool shipped release notes focused on net-new capability today — both cycles were dominated by bug fixes and reliability work.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #45596 — 265 comments, 1167 👍 | #8501 — 230 👍 (35 comments); #20695 — 128 comments |
| Key PRs tracked | 10 | 10 |
| Release today | v2.1.228 (shipped, 3 fixes) | None in last 24h |
| PR focus | Docs cleanup, security-hook false-positive fixes, skill-name spec conformance | Crash/stability fixes, protocol correctness, one major perf fix |
| Notable regression | `/tui` reverting bug (fixed in v2.1.228) | Bun segfault on Windows (v1.17.10, unresolved) |

## 3. Shared Feature Directions

- **Persistent/cross-session memory** — the single largest shared theme. Claude Code's #34556 (59 compactions over 26 days, custom workaround) and #14227 mirror OpenCode's #20695 "Memory Megathread" (128 comments) and #27167 native `/goal` session-lifecycle request. Both communities are asking for state that survives compaction/context resets without hand-rolled tooling.
- **Message/task steering during active runs** — Claude Code's message-queue (#50246) and priority-steering channel (#30492) requests parallel OpenCode's session-lifecycle and `/goal` primitive (#27167); both want to redirect or queue work without interrupting in-flight agent execution.
- **Usage/cost transparency** — Claude Code's CLI-native quota visibility (#13585) directly parallels OpenCode's Go-plan usage/balance API request (#16017, 137 👍, closed but heavily upvoted) — both signal that subscription-based CLI products are under pressure to expose spend data programmatically, not just via dashboard.
- **Auth/connector friction** — Claude Code's MCP "requires approval" regression (#61015) and multi-account MCP gaps (#36024) echo OpenCode's OAuth-for-MCP request (#988, 107 👍) and its own MCP permission-passing bug (#39057) — MCP auth ergonomics remain unsolved industry-wide.

## 4. Differentiation Analysis

- **Target maturity stage**: Claude Code's pain points skew toward *trust and governance* — undocumented system-prompt injection (#80988), silent data-loss from retention cleanup (#59248), enterprise CVP approval gaps (#84352) — issues that only surface at large-scale, compliance-sensitive deployment. OpenCode's pain points skew toward *core protocol correctness* — invalid UTF-8 paths crashing serve, git semantics leaking into snapshots, cross-workspace config mutation — issues typical of a still-hardening runtime.
- **Product surface**: Claude Code is investing engineering attention in a distinct "Cowork" (agentic workspace/VM) product layer, which is also its single largest bug-report source (VM startup failures, permission prompts, OTLP monitoring gaps). OpenCode has no equivalent surface in today's digest; its scope stays closer to the core CLI/TUI/session engine.
- **Technical approach to reliability**: OpenCode's PR activity shows granular defensive engineering (EPIPE guards, UTF-8 validation, git semantics parity) — the profile of a team closing correctness gaps discovered via community bug reports. Claude Code's PR activity is weighted toward docs consolidation and security-rule false-positive suppression, suggesting the core engine is comparatively more stable and effort has shifted to peripheral polish.
- **Community-model tension**: Claude Code's top issue is a feature-removal backlash (`/buddy`, 265 comments) — a governance/communication problem. OpenCode has no equivalent; its top-engagement issue (#20695) is a maintainer-run diagnostic megathread, reflecting a more collaborative debugging posture toward instability.

## 5. Community Momentum & Maturity

Claude Code's community is larger and more emotionally invested — its top issue (1167 👍) and long-tail grievances (#1455 open 15+ months, 417 👍) show a mature, high-expectation user base holding the product accountable to past behavior and stated commitments. This is characteristic of a widely-adopted, revenue-critical product where trust erosion (undocumented behavior, silent data loss) carries outsized weight. OpenCode's community is smaller in absolute engagement but proportionally more engineering-engaged — issues reference specific commits, root causes (`children()` memo bug), and reproducible regressions, and the maintainers are running structured diagnostics (heap-snapshot collection on #20695) rather than just triaging complaints. OpenCode is iterating faster on raw defect count (10 substantive fixes with no release gate observed today) while Claude Code ships fewer, more deliberate release-gated fixes (3 fixes in one versioned release).

## 6. Trend Signals

- **Memory is the industry's next battleground.** Both leading CLIs have their most-engaged community threads centered on persistent/cross-session memory — this is no longer a nice-to-have but the top user-facing gap across the category. Expect competitive pressure to ship native solutions within the next few release cycles.
- **Windows remains the weakest platform tier** across both tools (Claude Code: GPU crashes, console flashing, non-XDG config; OpenCode: Bun segfault, PowerShell encoding corruption) — teams building on these CLIs should budget extra QA time for Windows-specific regressions after any release.
- **Trust-and-transparency scrutiny is rising** as these tools embed deeper into agentic/autonomous workflows — undocumented prompt injection and silent retention deletion in Claude Code signal that community tolerance for opaque agent behavior is dropping as stakes (data loss, delegation-policy overrides) increase.
- **Subscription-tier usage transparency is an emerging expectation** — both ecosystems show strong upvote signal for programmatic quota/usage APIs, indicating dashboard-only visibility is no longer sufficient for developers integrating these tools into automated pipelines.
- **MCP auth/permission plumbing is still immature** industry-wide — recurring bugs and feature requests around MCP tool permission-passing and OAuth suggest the MCP ecosystem's security model is lagging its adoption curve.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-12 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

The most-discussed Skill-related PRs skew heavily toward **fixing the skill-creator evaluation pipeline** — a signal that the community sees skill authoring tooling itself as the top-priority gap.

1. **[skill-creator eval fixes](https://github.com/anthropics/skills/pull/1298)** (`#1298`, open) — `run_eval.py` reports a flat 0% recall for every skill description, corrupting the signal that `run_loop.py`/`improve_description.py` optimize against. Also fixes Windows stream reading, trigger detection, and parallel workers. The most comprehensive of several competing fixes for the same root bug (see #556 below).
2. **[document-typography](https://github.com/anthropics/skills/pull/514)** (open) — Typographic QC for AI-generated documents: catches orphan word-wraps, widow paragraphs, and numbering misalignment. Targets a problem the author argues affects *every* Claude-generated document but is rarely explicitly requested by users.
3. **[pdf case-sensitivity fix](https://github.com/anthropics/skills/pull/538)** (open) — Corrects 8 uppercase/lowercase file-reference mismatches in the official `pdf` skill (`REFERENCE.md` vs `reference.md`) that silently break on case-sensitive filesystems (Linux/CI).
4. **[ODT skill](https://github.com/anthropics/skills/pull/486)** (open) — Adds OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing, extending document-format coverage beyond docx/pdf.
5. **[frontend-design clarity rewrite](https://github.com/anthropics/skills/pull/210)** (open) — Revises the official `frontend-design` skill so every instruction is actionable within a single conversation, tightening internal coherence.
6. **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (open) — Two meta-skills that score other Skills across 5 quality dimensions (structure, docs, resource organization, etc.) — tooling for auditing the ecosystem itself.
7. **[docx tracked-change ID collision fix](https://github.com/anthropics/skills/pull/541)** (open) — Fixes document corruption when the `docx` skill adds tracked changes to files with existing bookmarks, caused by shared OOXML `w:id` space.
8. **[skill-creator YAML validation](https://github.com/anthropics/skills/pull/539)** (open) — Adds pre-parse validation to catch unquoted `description:` fields containing `:`, which silently truncate or corrupt YAML frontmatter.

**Status note:** none of the top items are merged yet — all remain open, several for 1–4 months.

## 2. Community Demand Trends

From Issues, three concentrated themes emerge:

- **Trust & governance infrastructure** — the top issue by far, [#492](https://github.com/anthropics/skills/issues/492) (43 comments), flags that community skills are impersonating official ones under the `anthropic/` namespace, a real trust-boundary risk. Related asks: agent-governance skills ([#412](https://github.com/anthropics/skills/issues/412)), reasoning/output quality gates ([#1385](https://github.com/anthropics/skills/issues/1385)), and duplicate-skill hygiene ([#189](https://github.com/anthropics/skills/issues/189)).
- **Skill authoring/eval tooling reliability** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) both report the skill-creator's trigger-detection/recall scoring is fundamentally broken, directly motivating the cluster of PRs in section 1.
- **Sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file passing; [#16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as MCP servers for programmatic reuse.
- **Context/token efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) reports a bundled skill eagerly injecting ~156k tokens in one call, echoing the long-standing critique in [#202](https://github.com/anthropics/skills/issues/202) that skill-creator's guidance itself is too verbose/token-inefficient.

## 3. High-Potential Pending Skills

PRs with active, sustained discussion that aren't merged but show strong momentum toward landing:

- **[#1298 — skill-creator eval overhaul](https://github.com/anthropics/skills/pull/1298)**: consolidates fixes from at least 3 competing PRs (#1099, #1050, #1323) addressing the same root cause referenced in issue #556 (12 comments) — likely to be the one that lands given its scope.
- **[#514 — document-typography](https://github.com/anthropics/skills/pull/514)**: broad applicability across all document generation, 9-day discussion window.
- **[#538 / #541 / #539 — docx/pdf reliability fixes](https://github.com/anthropics/skills/pull/538)** by the same author (Lubrsy706): targeted, low-risk bug fixes to official skills, the kind maintainers typically merge fast.
- **[#1538 — Agent Skills spec compliance](https://github.com/anthropics/skills/pull/1538)**: fixes two skills that fail the repo's own `skills-ref validate` reference implementation — a credibility issue likely to get priority attention given it was opened/updated within days (2026-08-09 to 2026-08-12).

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **reliability of the skill-creation and evaluation pipeline itself** — with trust/namespace safety as a close second — indicating the ecosystem has moved past "we need more skills" to "we need the tooling that builds and validates skills to actually work and be trustworthy."

---

# Claude Code Community Digest — 2026-08-12

## Today's Highlights

Claude Code shipped v2.1.228 with fixes for a rare TUI redraw freeze, Windows Git detection, and `/tui` reverting behavior. Community sentiment remains dominated by longstanding grievances: the `/buddy` removal saga continues to draw engagement (265 comments), Cowork stability issues persist across macOS and Windows, and a new report alleges an undocumented system-prompt injection overriding user delegation policy for Opus 5. Persistent memory across sessions remains the single most requested feature area, spanning multiple open and closed issues.

## Releases

**v2.1.228**
- Fixed interactive sessions that could stop redrawing entirely (process kept running) after a rare internal layout error
- Fixed `git`/Git Bash not being found on Windows when Claude Code is launched from a parent folder of the git installation
- Fixed `/tui` reverting unexpectedly

## Hot Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596)** — "Bring Back Buddy" consolidated plea. 265 comments, 1167 👍. The `/buddy` companion feature vanished without changelog notice in v2.1.97; remains the highest-engagement open issue in the tracker.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Model behavior report alleging `/goal` stop-hook directives get cited as authorization for unrequested actions, plus "absence-from-search treated as evidence of absence." Closed but heavily discussed (111 comments); flagged as likely generalizing beyond one user's setup.
3. **[#27801](https://github.com/anthropics/claude-code/issues/27801)** — Cowork "Failed to start Claude's workspace" — VM service failure persists even after reboot. 73 comments, 41 👍.
4. **[#34556](https://github.com/anthropics/claude-code/issues/34556)** — Feature request for persistent memory across context compactions; author documents 59 compactions over 26 days and built a custom memory system as a workaround. 72 comments.
5. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved organizations still hitting cyber-safeguard blocks despite prior approval; Verification Portal shows stale "Under review" status. 69 comments.
6. **[#1455](https://github.com/anthropics/claude-code/issues/1455)** — Long-standing (since May 2025) request for XDG Base Directory compliance on Linux instead of `~/.claude.json`/`~/.claude`. 417 👍, still active a year later.
7. **[#59248](https://github.com/anthropics/claude-code/issues/59248)** — Data-loss report: silent retention cleanup deletes session transcripts with no warning, opt-in, or recovery path. Tagged `data-loss`.
8. **[#80988](https://github.com/anthropics/claude-code/issues/80988)** — Alleges v2.1.219 injects an undocumented system-prompt section (`heron_brook`) that overrides user-configured AgentTool delegation policy, specifically for Opus 5, with no opt-out. 48 👍.
9. **[#54394](https://github.com/anthropics/claude-code/issues/54394)** — v2.1.117's embedded `ugrep` wrapper reportedly amplifies regex backtracking into V8-heap OOM, freezing WSL2 hosts at an 8GB ceiling. Has repro.
10. **[#61015](https://github.com/anthropics/claude-code/issues/61015)** — Scheduled routines fail every MCP tool call with "requires approval" on custom connectors, a regression traced to ~2026-05-20. Closed, 52 👍.

## Key PR Progress

1. **[#85925](https://github.com/anthropics/claude-code/pull/85925)** — Docs cleanup: redirects remaining `docs.claude.com` links to canonical `code.claude.com` across plugins/skills/agents/commands.
2. **[#85822](https://github.com/anthropics/claude-code/pull/85822)** — Companion docs fix: stale links and README drift in plugins and examples, verified against live redirects.
3. **[#85806](https://github.com/anthropics/claude-code/pull/85806)** — `fix(security-guidance)`: reuses `_DOC_EXTS` path filter to suppress XSS-family false-positive warnings in documentation/prose while preserving warnings for executable source.
4. **[#85243](https://github.com/anthropics/claude-code/pull/85243)** — `fix(skills)`: corrects eight bundled skills (plugin-dev, hookify) using title-cased `name` fields with spaces to spec-conformant names.
5. **[#70173](https://github.com/anthropics/claude-code/pull/70173)** — `fix(commit-commands)`: `/clean_gone` never deleted branches because `[gone]` detection via `git branch -v` was broken; switches to `git branch -vv`. Closed.
6. **[#57888](https://github.com/anthropics/claude-code/pull/57888)** — Scopes the `child_process_exec` security-hook rule to JS/TS files, fixing a false positive where the `"exec("` substring matched Python's `asyncio.create_subprocess_exec`. Closed.
7. **[#42996](https://github.com/anthropics/claude-code/pull/42996)** — Example addition: "MEP" (Meat Puppet Elimination Protocol), a lightweight async state-relay pattern for multi-machine Claude Code session continuity — three files, no new infrastructure.
8. **[#41611](https://github.com/anthropics/claude-code/pull/41611)** — Adds a missing source reference to Claude Code (minor/config-level change).
9. **[#85834](https://github.com/anthropics/claude-code/pull/85834)** — Devcontainer config fix targeting HackerOne Bug Bounty Program access for the hookify plugin.
10. **[#85925 / #85822 pairing]** notable as a coordinated two-PR doc-link migration effort from the same author (AliAltivate) with zero file overlap, suggesting an ongoing systematic docs-domain cleanup.

## Feature Request Trends

- **Persistent/cross-session memory** — the dominant theme, spanning #34556, #14227, and related threads; users want state to survive context compaction and session boundaries without hand-rolled workarounds.
- **Message/control-flow steering** — requests for a message queue mode (#50246) and a real-time priority steering channel (#30492) to avoid interrupting active tasks for follow-ups or redirection.
- **Org/skills source management** — linking source-control repos as the source of truth for organization skills (#28729).
- **Multi-account MCP support** — Gmail/Workspace multi-account connections in MCP integration (#36024).
- **Cost/quota visibility** — CLI-native access to quota/usage information (#13585).
- **VS Code ergonomics** — settings to disable auto-attach of open file/selection in the sidebar (#24726).

## Developer Pain Points

- **Cowork instability** dominates bug reports: VM startup failures persisting after reboot (#27801), permission prompts ignoring "Always allow" on scheduled tasks (#47180), OTLP monitoring not emitting events (#39471), and Windows-specific "unsupported" blocks (#47327).
- **Windows desktop app crashes** — recurring GPU-process crashes making the MSIX package unlaunchable until repair (#80444, #81698), plus update failures from file locks requiring a reboot every time (#76357).
- **Trust/transparency concerns** — reports of undocumented behavior overriding user configuration (#80988, #60705) and silent data loss from retention cleanup (#59248) are drawing pointed community scrutiny.
- **Platform-specific rough edges** — non-XDG-compliant config storage on Linux (#1455, open over a year), Windows console flashing during tool execution (#14828), and VS Code diff previews not rendering (#8660) remain unresolved despite steady engagement.
- **Enterprise/auth friction** — Bedrock permission errors despite authorized entitlements (#51183) and CVP-approved orgs still blocked (#84352) point to gaps between backend authorization state and client-side enforcement.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-12

## Today's Highlights

Stability continues to dominate the conversation: a Windows-specific Bun segmentation fault introduced in v1.17.10 is driving users back to v1.17.9, while OpenCode Go subscribers across multiple regions report `401 Request blocked by upstream provider` errors blocking chat completions entirely. On the engineering side, today's PR activity skews heavily toward defensive fixes — broken stdio pipes, invalid UTF-8 paths, git semantics leaking into snapshot repos, and a cross-workspace config mutation bug — alongside a notable 6.8× performance win for long session forks.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (128 comments, 96 👍) — Central tracking issue for scattered memory reports; maintainers are explicitly collecting heap snapshots rather than fix suggestions. Still the most active thread in the repo.
2. **[#27167 — Native session goals with `/goal`](https://github.com/anomalyco/opencode/issues/27167)** (71 comments, 128 👍) — Highest-upvoted open request; proposes a persistent session goal/lifecycle primitive beyond custom slash commands.
3. **[#33742 — Bun segfault on Windows in v1.17.10](https://github.com/anomalyco/opencode/issues/33742)** (59 comments, 47 👍) — Likely regression; v1.17.9 is stable under the same setup, pointing at a native crash introduced in the latest release.
4. **[#38257 — 401 "Request blocked by upstream provider" on OpenCode Go](https://github.com/anomalyco/opencode/issues/38257)** (48 comments, 12 👍) — Server-side issue affecting Go subscription chat/completions while `/v1/models` remains healthy; corroborated by #38293.
5. **[#988 — MCP remote via OAuth](https://github.com/anomalyco/opencode/issues/988)** (40 comments, 107 👍) — Long-running request to let MCP server installs use OAuth 2.1 instead of manual secret handling.
6. **[#8501 — Expand pasted text placeholders](https://github.com/anomalyco/opencode/issues/8501)** (35 comments, 230 👍) — Highest 👍 count in the batch; users want to edit/expand `[Pasted ~N lines]` blocks rather than have them locked as summaries.
7. **[#16017 — Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)** (34 comments, 137 👍) — Closed but heavily upvoted; requests a public API for the usage data currently only shown on the dashboard.
8. **[#37852 — Aborted provider stream recorded as clean stop](https://github.com/anomalyco/opencode/issues/37852)** (18 comments, 55 👍) — Subagents silently return empty results with no error when a stream drops mid-generation; a correctness/observability gap.
9. **[#13715 — Permission asks from nested subagents silently hang](https://github.com/anomalyco/opencode/issues/13715)** (12 comments, 25 👍) — Nested subagent permission prompts never render in the TUI, causing indefinite hangs; root-caused to the `children()` memo in the session route.
10. **[#27924 — Infinite compaction loop](https://github.com/anomalyco/opencode/issues/27924)** (8 comments) — Session loop can loop forever between overflow-detect and compact when compression fails to reduce context.

## Key PR Progress

1. **[#41968 — fix(cli): survive broken stdio pipes](https://github.com/anomalyco/opencode/pull/41968)** — Guards the Bun-compiled binary against unhandled EPIPE crashes when a stdio consumer disconnects, matching an existing guard in the Node wrapper.
2. **[#39057 — fix(mcp): pass tool name and args to permission ask](https://github.com/anomalyco/opencode/pull/39057)** — Fixes #19549; MCP tool wrapper was hardcoding wildcards instead of passing actual tool name/args to permission checks.
3. **[#38314 — fix(core): reject invalid UTF-8 directory paths in serve](https://github.com/anomalyco/opencode/pull/38314)** — Closes #38235/#37764; prevents malformed session directories (e.g. containing U+FFFD replacement characters) from corrupting `opencode serve`.
4. **[#41963 — fix(core): respect repository git semantics](https://github.com/anomalyco/opencode/pull/41963)** — Stops overriding `core.autocrlf`/`core.symlinks` in the V2 VCS adapter and repairs snapshot storage to mirror source-repo semantics (supersedes closed duplicate #41962).
5. **[#41930 — fix(app): align server sync with tui lifecycle](https://github.com/anomalyco/opencode/pull/41930)** — Reframes server sync as a lifecycle rather than a one-off fetch, fixing empty model dialogs, incomplete provider lists, and reconnect races.
6. **[#41701 — fix(opencode): speed up long session forks](https://github.com/anomalyco/opencode/pull/41701)** — A synthetic 986-message session now forks in 625ms vs 4.3s (6.8× faster) by avoiding redundant event projection during clone.
7. **[#41955 — feat(provider): add none reasoning variant for DeepSeek V4](https://github.com/anomalyco/opencode/pull/41955)** — Adds a "none" thinking-toggle variant to the model menu alongside existing `reasoning_effort` tiers.
8. **[#41954 — fix(core): return content-only Code Mode results](https://github.com/anomalyco/opencode/pull/41954)** — Fixes #41949; promotes text content into Code Mode's return value when a tool lacks declared structured output.
9. **[#41950 — fix(config): clone global cache to prevent cross-workspace mutation leak](https://github.com/anomalyco/opencode/pull/41950)** — Fixes #41916; `Config.loadInstanceState`'s deep-merge was mutating the shared global config cache across workspaces.
10. **[#37541 — fix(session): encode persisted output formats](https://github.com/anomalyco/opencode/pull/37541)** — Closes #26929; fixes a 400 error on `GET /session/:id/message` when messages include an inline JSON schema format.

## Feature Request Trends

- **Session lifecycle & continuity**: native `/goal` tracking (#27167), workspace-scoped snapshot tracking to fix multi-repo `/undo` (#34398), faster session forking already landing (#41701).
- **Auth & connectivity**: OAuth-based MCP server installation (#988) remains one of the oldest and most upvoted asks.
- **Usage transparency**: public API for Go plan usage/balance data (#16017).
- **Editor ergonomics**: editable/expandable pasted-text blocks (#8501), markdown preview toggle in the file viewer (#14187), configurable permission-prompt panel height (#28191).
- **Desktop UX parity**: minimize-to-tray instead of exit on close (#18134).

## Developer Pain Points

- **Windows-specific instability**: the v1.17.10 Bun segfault (#33742) and PowerShell non-ASCII output corruption (#23636) both point to weaker Windows coverage.
- **Silent failures over hard errors**: aborted provider streams marked as clean stops (#37852), hung nested-subagent permission prompts (#13715), and silent multi-repo `/undo` failures (#34398) share a pattern — errors that should surface are instead swallowed.
- **OpenCode Go subscription auth**: recurring `401 Request blocked by upstream provider` reports across multiple issues and languages (#38257, #38293) suggest a broader server-side regression affecting the Go plan specifically.
- **Interrupt/keyboard handling**: double-ESC loops and unreliable interrupt behavior recur across both TUI and Desktop (#24217, #888).
- **Context management robustness**: infinite compaction loops when compression can't reduce context below the token limit (#27924) is a correctness gap with no fallback.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
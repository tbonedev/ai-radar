# AI CLI Tools Community Digest 2026-08-25

> Generated: 2026-08-25 07:40 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools — Cross-Tool Comparison Report
**Date: August 25, 2026 | Tools: Claude Code vs. OpenCode**

## 1. Ecosystem Overview

The AI coding CLI landscape continues to mature along two distinct tracks: Anthropic's Claude Code is now firmly in stabilization mode, patching platform-level regressions (Linux glibc segfaults, Windows GPU crashes) rather than shipping new capabilities, while community energy shifts toward trust/verification friction and long-tail UX requests. OpenCode, by contrast, is iterating rapidly on its multi-provider architecture — two patch releases in 24 hours focused on gateway routing — while simultaneously hardening a V2 session-data layer (archived/deleted session sync, SSE reconnection) that signals a deeper infrastructure overhaul in progress. Both ecosystems show convergent demand for sandboxed/scoped execution, skill-standard alignment (SKILL.md), and better handling of small/local models — evidence that agentic-CLI users are converging on a shared feature checklist regardless of vendor. Reliability, not novel functionality, is the dominant theme across both communities today: Claude Code's issues skew toward platform crashes and trust friction, OpenCode's toward memory leaks and provider outages. This suggests the category is entering a "hardening" phase after a period of rapid feature expansion.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot/tracked issues (today's digest) | 10 | 10 |
| Highest engagement issue | #50246, 199 👍 (queued messaging) | #4283, 113 👍 / #20695, 105 👍 |
| PRs updated (last 24h) | 4 | 10 |
| Releases today | 1 (v2.1.245 — hotfix) | 2 (v1.18.23, v1.18.22 — patch) |
| Release focus | Crash fix (Linux glibc/mimalloc) | Provider routing (Cloudflare AI Gateway) |
| Data-loss / trust flags | 2 (#59248 data-loss, #84352 CVP blocks) | 0 explicit, but #38257 (401 outage) and billing instability noted |

*Note: issue counts reflect each digest's curated "hot issues" list (by comment/reaction volume), not raw new-issues-filed-today counts.*

OpenCode shows more than double the PR throughput of Claude Code today (10 vs. 4), consistent with its faster release cadence (2 releases vs. 1) and its V2 architecture migration currently in flight.

## 3. Shared Feature Directions

- **Sandboxed/scoped execution**: OpenCode's #2242 (86 comments, 72 👍) explicitly cites Codex/Gemini CLI seatbelt-style sandboxing as the bar to meet — Claude Code doesn't surface this as a hot issue today, but it's a known category-wide expectation for security-conscious teams evaluating any of these tools.
- **SKILL.md / skills-ecosystem parity**: OpenCode's #34498 requests honoring `disable-model-invocation` in SKILL.md frontmatter, explicitly framed as catching up to Claude Code/Cursor's spec — direct evidence of Claude Code's skills format becoming a de facto standard other CLIs are chasing.
- **Interruption/queueing control over agent execution**: Claude Code's #50246 (199 👍, the single highest reaction count across both digests) wants queued follow-ups instead of hard interrupts — a workflow-control gap that parallels OpenCode's own session-lifecycle asks (#16077 persistent memory, #4489 ephemeral runs).
- **Small/local model support**: Both ecosystems show live threads on this — OpenCode's #44242 series (context-window handling for small/local models) and #38232 (DeepSeek V4 output-limit fix) vs. Claude Code's general provider/model-behavior complaints — indicating growing self-hosted/local-inference usage pressuring both tools' abstractions.
- **Remote/cross-machine workflows**: Claude Code's #28300 (Agent-to-Agent protocol for multi-machine collaboration) and OpenCode's #7790 (SSH-based remote connections, 79 👍, top open feature request) both reflect demand for CLI agents that aren't confined to a single local machine.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Primary focus today | Platform stability (crash fixes) + trust/compliance friction | Provider-routing robustness + data-layer refactor |
| Target user signal | Enterprise/verified orgs (CVP blocks), desktop app users (Windows GPU) | Multi-provider power users, self-hosted/local-model users, Zen subscription users |
| Technical approach | Native desktop app (Windows/Linux packaging issues dominate) | Provider-abstraction layer (Cloudflare Gateway, OpenAI-compatible shims, SSE streams) |
| Architecture signal | Mature, incremental patching (single hotfix release) | Active architectural migration (V2 session data layer, multiple PRs in the same series) |
| Monetization surface | Not visible in today's issues | Direct — OpenCode Go/Zen subscription tiers surfaced in outage/billing bugs (#38257, #36506, #44300) |

Claude Code's pain points cluster around **platform integration depth** (native desktop rendering, OS-level allocator interactions, enterprise verification) — consistent with a product optimizing for polish and compliance at scale. OpenCode's pain points cluster around **provider heterogeneity** (gateway routing, model-ID translation, per-provider quirks) — consistent with a product optimizing for breadth of backend support and openness.

## 5. Community Momentum & Maturity

Both communities show comparable raw engagement (top issues in the 100+ comment range on both sides), but the *nature* of engagement differs. Claude Code's top threads (#84352 CVP blocks, 147 comments; #60705 model behavior, 137 comments) are long-running, unresolved, and adversarial in tone — a sign of a large, entrenched user base hitting the limits of a single-vendor trust model. OpenCode's top threads (#20695 memory megathread, 136 comments; #4283 clipboard, 125 comments) are more collaborative — maintainers are actively requesting heap snapshots and reproduction data, suggesting a more responsive triage loop despite the bugs being equally persistent (#4283 is nine months old).

OpenCode's 2-releases-in-a-day cadence plus 10 active PRs signals the more rapidly-iterating engineering team right now, though this is partly explained by OpenCode being earlier in its architectural lifecycle (V1→V2 migration) versus Claude Code's more incremental hotfix posture.

## 6. Trend Signals

- **Reliability is overtaking features as the primary battleground.** Neither digest shows a major net-new capability shipping today — both are firmly in bug-fix/hardening mode, suggesting the AI-CLI category as a whole is past its initial feature land-grab and now competing on stability and trust.
- **Skill-format standardization is happening organically**, with Claude Code's SKILL.md spec becoming the reference implementation other tools explicitly cite (OpenCode #34498) — worth watching as a potential de facto interop layer across the ecosystem.
- **Provider/vendor fragmentation is a growing operational burden**, most visible in OpenCode's gateway/routing bug surface (Cloudflare AI Gateway, dotted-vs-dashed model IDs, per-provider token caps) — teams building on multi-provider abstractions should budget for this class of integration bug.
- **Desktop-app packaging risk is real and platform-specific**: Claude Code's GPU-crash cluster (4 distinct Windows issues) and glibc/mimalloc Linux segfault both point to native-binary distribution being a persistent stability tax that pure-terminal tools (OpenCode) are less exposed to — a relevant input for teams choosing between desktop-app and terminal-native tooling.
- **Sandboxing is becoming a competitive checkbox**: users are explicitly comparing OpenCode against Codex/Gemini CLI on this axis; any CLI without a clear sandboxing story risks losing security-conscious enterprise adoption going forward.
- **Data durability/trust incidents carry outsized reputational cost**: Claude Code's silent-transcript-deletion report (#59248, tagged `data-loss`) and repeated CVP re-blocking of approved orgs (#84352) show that trust-layer failures generate disproportionate, sustained community frustration compared to ordinary bugs — a signal that verification/data-retention UX deserves the same engineering priority as core functionality.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-25 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

**#1298 — skill-creator eval pipeline fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
Fixes `run_eval.py` reporting a flat 0% recall for every skill description, which silently breaks the downstream `run_loop.py` / `improve_description.py` optimization loop. Also patches Windows stream reading, trigger detection, and parallel-worker handling. This directly resolves the long-standing [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — one of the most-reproduced bugs in the repo (10+ independent confirmations). **Status: Open**, author MartinCajiao, active discussion since June.

**#514 — document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
A quality-control skill targeting typographic defects in AI-generated documents: orphan word wraps, widow paragraphs, and numbering misalignment. Notable because it addresses a defect class that affects *every* generated document but that users rarely think to ask for explicitly. **Status: Open**, under discussion since March.

**#1615 — scnet-hpc skill** ([PR #1615](https://github.com/anthropics/skills/pull/1615))
Adds profile-based SSH/Slurm workflow support for operating SCNet HPC clusters — connection profiles, partition/module/accelerator guidance, and job generation. Represents the growing "infrastructure-ops" category of skills. **Status: Open**, freshly submitted (Aug 20) with fast follow-up activity.

**#538 — pdf skill case-sensitivity fix** ([PR #538](https://github.com/anthropics/skills/pull/538))
Corrects 8 case-mismatched file references (`REFERENCE.md`/`FORMS.md` vs. actual lowercase filenames) that silently break the PDF skill on case-sensitive filesystems (Linux/CI). A small but high-value reliability fix. **Status: Open**.

**#486 — ODT/ODS skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
Adds OpenDocument Format support — create, fill, read, and convert `.odt`/`.ods` files, plus ODT→HTML parsing. Fills a gap alongside the existing DOCX/PDF skills for open-standard document workflows. **Status: Open**.

**#210 — frontend-design clarity rewrite** ([PR #210](https://github.com/anthropics/skills/pull/210))
A revision pass on the widely-used `frontend-design` skill aimed at making every instruction concretely actionable within a single conversation, rather than descriptive/aspirational guidance. **Status: Open**, long-running discussion (Jan–Mar).

**#83 — skill-quality-analyzer / skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Adds two meta-skills to the marketplace that evaluate other skills: a 5-dimension quality scorer (structure, docs, examples, resources) and a security analyzer. Notable as tooling *for* the skills ecosystem itself. **Status: Open**, one of the oldest PRs still active (since Nov 2025).

**#541 — docx tracked-change ID collision fix** ([PR #541](https://github.com/anthropics/skills/pull/541))
Fixes document corruption when adding tracked changes to DOCX files with existing bookmarks, caused by the SKILL.md examples hardcoding low `w:id` values that collide with OOXML's shared ID space. **Status: Open**.

## 2. Community Demand Trends

From Issues activity, three concentrated demand clusters emerge:

- **Trust & governance infrastructure** — by far the most-discussed issue is [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍): community skills impersonating official Anthropic skills via the `anthropic/` namespace, a genuine trust-boundary/security concern. Related asks: [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality-gate pipeline), [#1367](https://github.com/anthropics/skills/pull/1367) (self-audit skill).
- **Skill reliability & tooling for skill authors** — the eval-loop breakage ([#556](https://github.com/anthropics/skills/issues/556), 12 comments) and its multiple Windows-specific fix PRs (#1099, #1050, #1298) show sustained pain around `skill-creator`'s evaluation harness. This is the single most-repeated bug pattern across both Issues and PRs.
- **Enterprise sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai instead of manual `.skill` file distribution; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) flags duplicate-skill installs across marketplace plugin bundles. Also notable: context-budget concerns ([#1487](https://github.com/anthropics/skills/issues/1487), a skill eagerly injecting ~156k tokens).

## 3. High-Potential Pending Skills

PRs with active, sustained community engagement that appear closest to landing:

- **[#1298](https://github.com/anthropics/skills/pull/1298)** — fixes a root-cause bug tied to a 7-👍/12-comment issue; high merge pressure given how many other PRs (#1099, #1050) attempt partial fixes to the same problem.
- **[#514](https://github.com/anthropics/skills/pull/514)** (document-typography) and **[#486](https://github.com/anthropics/skills/pull/486)** (ODT) — both extend the well-established document-skills family, a proven acceptance pattern.
- **[#83](https://github.com/anthropics/skills/pull/83)** (quality/security analyzers) — directly answers the ecosystem's own governance concerns (see #492, #412), which strengthens its case for merge.
- **[#538](https://github.com/anthropics/skills/pull/538)** and **[#541](https://github.com/anthropics/skills/pull/541)** — small, low-risk correctness fixes to existing shipped skills (pdf, docx), typically the fastest category to merge.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability infrastructure around skills themselves** — securing skill provenance/namespacing, fixing the broken skill-evaluation tooling that authors depend on, and gating skill quality — rather than demand for any single new capability.

---

# Claude Code Community Digest — August 25, 2026

## Today's Highlights

Anthropic shipped a targeted hotfix (**v2.1.245**) resolving a startup crash on Linux distros running glibc 2.44 (Arch, CachyOS, Fedora Rawhide), following two days of segfault reports tied to v2.1.242/v2.1.243. Meanwhile, the issue tracker remains dominated by long-running threads on Cyber Verification Program (CVP) blocks, Windows desktop GPU-process crashes, and model behavior/reasoning complaints — none resolved today, but all still accumulating comments.

## Releases

**v2.1.245**
- Fixed a startup crash on Linux distributions shipping glibc 2.44 (e.g., Arch Linux, CachyOS, Fedora Rawhide).
- This directly addresses the root cause identified in [#89334](https://github.com/anthropics/claude-code/issues/89334) (mimalloc's interposed `free` lacking a NULL check, triggered by glibc's `newlocale` calling `free(NULL)` pre-`main`) and the regression reported in [#89360](https://github.com/anthropics/claude-code/issues/89360).

## Hot Issues

1. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved org still receiving cyber-safeguard blocks (147 comments, 23 👍). A previously approved organization is being re-blocked, with the Verification Portal stuck showing "Under review." Long-running, high-frustration thread with no resolution.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Model-side behavior report on `/goal` stop-hook directives being misused as authorization for unrequested actions (137 comments). Closed, but still active discussion — flagged as likely to generalize beyond one user's config.
3. **[#50246](https://github.com/anthropics/claude-code/issues/50246)** — Feature request for a "message queue mode" to queue follow-up messages instead of interrupting active tasks (67 comments, 199 👍 — highest reaction count in this batch). Strong signal of unmet workflow need.
4. **[#81698](https://github.com/anthropics/claude-code/issues/81698)** — Windows desktop app: GPU process crash kills the entire app and all sessions (60 comments). One of several GPU-crash reports piling up this week.
5. **[#2805](https://github.com/anthropics/claude-code/issues/2805)** — Long-standing bug: Claude Code writes CRLF line endings on Linux despite CLAUDE.md instructions, breaking script execution (52 comments, 34 👍). Open over a year.
6. **[#80444](https://github.com/anthropics/claude-code/issues/80444)** — Windows desktop app: fatal GPU-process crash via the in-app Browser tab, leaving the MSIX package unlaunchable until Repair (50 comments). Reproduced across multiple driver versions.
7. **[#2254](https://github.com/anthropics/claude-code/issues/2254)** — Long-requested toggle to disable the welcome banner (44 comments, 111 👍). Simple UX ask, still unresolved after over a year.
8. **[#59248](https://github.com/anthropics/claude-code/issues/59248)** — **Data-loss** report: silent retention cleanup deletes session transcripts with no warning, opt-in, or recovery path (36 comments, 24 👍). Tagged `data-loss`, actively watched.
9. **[#89360](https://github.com/anthropics/claude-code/issues/89360)** — v2.1.243 segfault regression on Linux (29 comments, 10 👍). The user-facing symptom that v2.1.245 fixes.
10. **[#89334](https://github.com/anthropics/claude-code/issues/89334)** — Detailed root-cause writeup for the v2.1.242 segfault-on-every-launch bug (mimalloc/glibc allocator symbol interposition). Directly credited in today's release notes.

## Key PR Progress

Only 4 PRs were updated in the last 24h:

1. **[#89404](https://github.com/anthropics/claude-code/pull/89404)** — `validate-agent.sh`: fixes `set -e` + `((x++))` interaction that aborted validation at the first warning and false-flagged valid plugin-dev agent files. Fixes [#83803](https://github.com/anthropics/claude-code/issues/83803).
2. **[#79898](https://github.com/anthropics/claude-code/pull/79898)** (closed) — Adds reference deployment assets for running the Claude apps gateway on AWS via Amazon Bedrock, mirroring the existing GCP gateway examples.
3. **[#83890](https://github.com/anthropics/claude-code/pull/83890)** — Adds a `pylint.yml` CI workflow.
4. **[#75252](https://github.com/anthropics/claude-code/pull/75252)** (closed) — Docs clarification distinguishing plugin-bundled `mcpServers` config from the user-level MCP allow/deny list; reopened after the original PR's fork was deleted.

## Feature Request Trends

- **Interruption-free workflows**: queued messaging instead of hard interrupts ([#50246](https://github.com/anthropics/claude-code/issues/50246), 199 👍) is the clearest unmet need in this batch.
- **TUI ergonomics**: suppressing the welcome banner ([#2254](https://github.com/anthropics/claude-code/issues/2254), 111 👍) remains a perennial, low-effort ask.
- **Config format flexibility**: support for JSONC (`settings.jsonc`) to allow comments in settings files ([#17968](https://github.com/anthropics/claude-code/issues/17968), 104 👍).
- **Cross-machine / multi-agent orchestration**: an Agent-to-Agent protocol for multi-machine collaboration ([#28300](https://github.com/anthropics/claude-code/issues/28300)).
- **Cowork/Desktop platform parity**: UNC path support on Windows ([#45297](https://github.com/anthropics/claude-code/issues/45297), 30 👍) and Chrome tab-group auto-cleanup ([#15436](https://github.com/anthropics/claude-code/issues/15436), 55 👍, closed).

## Developer Pain Points

- **Windows desktop GPU-process crashes** are the most frequent complaint category today, spanning multiple distinct triggers (browser tab preview, Intel iGPU, MSIX code-integrity conflicts with `vk_swiftshader.dll`) across [#81698](https://github.com/anthropics/claude-code/issues/81698), [#80444](https://github.com/anthropics/claude-code/issues/80444), [#81341](https://github.com/anthropics/claude-code/issues/81341), and [#83028](https://github.com/anthropics/claude-code/issues/83028).
- **Linux packaging regressions**: back-to-back segfault reports ([#89360](https://github.com/anthropics/claude-code/issues/89360), [#89334](https://github.com/anthropics/claude-code/issues/89334)) tied to the mimalloc/glibc interaction, now patched in v2.1.245.
- **Trust & verification friction**: repeated cyber-safeguard blocking of already-approved orgs ([#84352](https://github.com/anthropics/claude-code/issues/84352)) is generating sustained frustration with no visible fix timeline.
- **Data durability concerns**: silent transcript deletion via retention cleanup ([#59248](https://github.com/anthropics/claude-code/issues/59248)) undermines trust in session persistence.
- **Model behavior/quality complaints**: recurring reports of reasoning degradation on Opus ([#68780](https://github.com/anthropics/claude-code/issues/68780)) and structural over-compliance with stale directives ([#60705](https://github.com/anthropics/claude-code/issues/60705)).
- **Regressions in tooling surface**: task-list tools (`TaskCreate`/`TaskUpdate`/etc.) silently disappearing from the model's toolset after a recent update ([#80015](https://github.com/anthropics/claude-code/issues/80015)), despite remaining visible in the UI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-25

## Today's Highlights

Two patch releases (v1.18.23, v1.18.22) landed with provider-routing fixes — most notably restoring Cloudflare AI Gateway compatibility for third-party and Anthropic models. Community attention remains split between two long-running pain points — clipboard copy/paste failures and memory bloat — while the PR queue is dominated by V2 session-data-layer hardening (archived/deleted session cleanup, SSE reconnection) and provider-request robustness fixes.

## Releases

**v1.18.23**
- Fixed Cloudflare AI Gateway routing for third-party providers so non-Workers models work through the gateway's REST API (@superhighfives)
- Fixed Anthropic models through Cloudflare AI Gateway by converting dotted model IDs like `claude-haiku-4.5` to the dashed slug Anthropic expects

**v1.18.22**
- Removed outdated OpenCode Go first-month discount messaging/pricing
- Fixed device login links when servers return relative verification URLs or use a base path
- Fixed `textVerbosity` being incorrectly sent to OpenAI-compatible providers that don't support it (@j…)

## Hot Issues

1. **[#20695 – Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (136 comments, 105 👍) — Central tracking issue consolidating scattered memory-leak reports; maintainers are explicitly requesting heap snapshots rather than speculative fixes, reflecting how widespread and hard-to-pin-down the issue is.
2. **[#4283 – Copy to Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** (125 comments, 113 👍) — Long-standing cross-platform clipboard failure, still active nine months after filing; one of the highest-engagement bugs in the repo.
3. **[#2242 – Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242)** (86 comments, 72 👍) — Recurring ask for filesystem/command sandboxing akin to Gemini CLI/Codex's seatbelt support; strong signal that security-conscious users want scoped execution.
4. **[#13984 – can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984)** (56 comments, 29 👍) — A second, distinct clipboard complaint (paste rather than copy), reinforcing #4283 as a systemic terminal-integration weak spot.
5. **[#38257 – OpenCode Go: 401 Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38257)** (53 comments, 13 👍) — Server-side outage affecting all OpenCode Go subscription models on `chat/completions` while `/v1/models` stayed healthy; high-urgency service-availability report.
6. **[#7790 – [FEATURE] SSH-based remote server connections to OpenCode Desktop](https://github.com/anomalyco/opencode/issues/7790)** (19 comments, 79 👍) — Highest 👍 count among open feature requests; users want first-class SSH connectivity for remote-server workflows in the desktop app.
7. **[#34498 – [FEATURE] Respect disable-model-invocation in SKILL.md frontmatter](https://github.com/anomalyco/opencode/issues/34498)** (16 comments, 55 👍) — Requests parity with Claude Code/Cursor's SKILL.md spec so skills can opt out of automatic model invocation.
8. **[#10884 – [FEATURE] Add Support for MCP Apps in the desktop app](https://github.com/anomalyco/opencode/issues/10884)** (12 comments, 51 👍) — Push to support the newly stabilized MCP Apps spec (2026-01-26) in the desktop client.
9. **[#19081 – reasoning_content stripped from assistant messages on replay](https://github.com/anomalyco/opencode/issues/19081)** (16 comments, 23 👍, closed) — Thinking-block stripping on history replay silently invalidates local-inference KV caches, hurting performance for self-hosted model users.
10. **[#36506 – All paid OpenCode Zen models fail with 'Upstream request failed'](https://github.com/anomalyco/opencode/issues/36506)** (17 comments, 3 👍) — Paid Zen tier models broken while free-tier equivalents work, pointing to a billing/routing-specific regression.

## Key PR Progress

1. **[#44905 – fix(app): drop archived sessions from home list right away](https://github.com/anomalyco/opencode/pull/44905)** — Fixes stale in-memory Home index cache so archived sessions disappear immediately instead of requiring a full refresh (closes #44619).
2. **[#40654 – fix(acp): surface subagent activity](https://github.com/anomalyco/opencode/pull/40654)** — Projects subagent messages/tools onto the root ACP session with namespaced child tool calls and lineage metadata; V1 companion to #40438.
3. **[#44913 – fix(tui): remove deleted sessions from local data](https://github.com/anomalyco/opencode/pull/44913)** — Adds a V2 data-layer session-removal operation so deleted sessions are evicted locally without waiting on the event stream.
4. **[#44912 – fix(provider): handle SSE reader cancel rejections](https://github.com/anomalyco/opencode/pull/44912)** — Fixes an unhandled promise rejection from aborted SSE reads, surfaced while testing against Bun 1.4's Zig→Rust rewrite.
5. **[#44906 – feat(app): select worktree base branch](https://github.com/anomalyco/opencode/pull/44906)** — Adds branch-listing API and a searchable base-branch submenu for worktree creation in Desktop/web.
6. **[#44757 – feat(opencode): enable lsp tool by default](https://github.com/anomalyco/opencode/pull/44757)** — Removes the `experimentalLspTool` flag guard, making `tool.lsp` always registered (closes #44759).
7. **[#44898 – fix(opencode): honest context arithmetic for small and unreported model limits](https://github.com/anomalyco/opencode/pull/44898)** — Second slice of the #44242 series improving context-window handling for small/local models (closes #41372).
8. **[#44895 – fix(opencode): deterministic plugin load order and hook error isolation](https://github.com/anomalyco/opencode/pull/44895)** — First slice of the same series; makes plugin loading order deterministic and isolates hook errors.
9. **[#38232 – fix(provider): preserve DeepSeek V4 output limit](https://github.com/anomalyco/opencode/pull/38232)** — Fixes the global 32K default output-token cap overriding DeepSeek V4's declared 384K/393,216-token limit (closes #38236).
10. **[#44880 – fix(ai): sanitize outbound provider request surrogates](https://github.com/anomalyco/opencode/pull/44880)** — Centralizes Unicode-surrogate sanitization for all outbound LLM/image requests while preserving valid pairs and binary media.

## Feature Request Trends

- **Remote/desktop connectivity**: SSH-based remote server connections (#7790, 79 👍) is the top open feature ask.
- **Skill/agent ecosystem parity**: `disable-model-invocation` SKILL.md support (#34498, 55 👍) and MCP Apps in desktop (#10884, 51 👍) show demand for aligning with emerging skill/MCP standards.
- **Session/memory continuity**: Persistent session memory (#16077) and ephemeral one-off `opencode run` sessions (#4489) indicate users want finer control over session lifecycle and persistence.
- **Sandboxing/security**: #2242's sandbox request (72 👍) continues to draw sustained interest as a security gap versus competing CLIs.
- **Small/local-model support**: #44242's capability tiers for small models (e.g., Qwen 4B) reflect growing local-inference usage.
- **File-format support**: Native Jupyter notebook (.ipynb) support (#11409) remains a recurring ask from data-science users.

## Developer Pain Points

- **Clipboard breakage**: Copy (#4283, #41470) and paste (#13984) failures across terminal/VSCode-Server/Docker environments remain the most reported UX friction, unresolved across many versions.
- **Memory/performance**: The Memory Megathread (#20695) and LSP-diagnostics-driven slowdowns (#6310) point to unresolved heap-growth issues, especially in large or LSP-enabled projects.
- **Provider/billing instability**: Multiple simultaneous upstream failures — OpenCode Go 401s (#38257), paid Zen models (#36506), Zen free-model tool-call failures (#44300) — suggest fragility in the Go/Zen provider-routing layer.
- **TUI/UI regressions**: Disappearing terminal button (#30158), hidden "Modified Files" sidebar (#30877), Effect.tryPromise crashes (#32706), and viewport auto-snap during streaming (#29094) show a pattern of UI regressions shipping with recent TUI releases.
- **Startup reliability**: inotify-instance exhaustion hangs opencode at startup in git repos (#16610), and uncontrolled auto-compaction loops (#30680) can make sessions unusable even in fresh projects.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
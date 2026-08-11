# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-11 08:07 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Cline](https://github.com/cline/cline)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a phase of rapid, high-velocity iteration paired with mounting reliability debt. Nearly every tool in this cohort is racing to harden multi-agent/subagent orchestration — the single most common engineering theme across Claude Code, Gemini CLI, Copilot CLI, Qwen Code, and OpenCode — while simultaneously fighting session-state corruption, resource leaks, and platform-specific (especially Windows) instability. Release cadences range from Codex's daily alpha builds to more measured weekly/nightly cycles (Gemini CLI, Qwen Code), reflecting divergent maturity philosophies: some vendors prioritize speed of iteration, others stability. Trust erosion is a recurring undercurrent — usage/billing opacity (Claude Code), data-loss regressions (Copilot CLI), and silent failure modes (OpenCode, Qwen Code) all surfaced today, suggesting the category is maturing faster on capability than on operational trust.

## 2. Activity Comparison

| Tool | Hot Issues Tracked | PRs Tracked | Release Today |
|---|---|---|---|
| Claude Code | 10 | 3 (1 open security fix, 1 open feature, 1 closed) | v2.1.227 (bug-fix) |
| OpenAI Codex | 10 | 10 (active internal hardening) | 2 alpha builds (0.148.0-alpha.6, 0.147.0-alpha.6.6) |
| Gemini CLI | 10 | 10 (session/extension hardening wave) | v0.56.0-nightly (1 narrow OAuth fix) |
| GitHub Copilot CLI | 10 | 1 (devcontainer config only) | v1.0.79 (enterprise/sandbox policy) |
| OpenCode | 10 | 10 (perf + reliability fixes) | None in 24h |
| Cline | 10 | 10 (SDK migration fixes) | v4.1.8 (Vertex model support) |
| Qwen Code | 10 | 10 (fleet/daemon work) | v0.21.9 + 2 nightly builds |

Codex, Gemini CLI, OpenCode, Cline, and Qwen Code all show sustained high PR throughput (10 tracked each); Copilot CLI's single-PR day is a notable outlier, especially against its data-loss and model-routing issue backlog.

## 3. Shared Feature Directions

- **Per-subagent/task reasoning-effort and model control**: Copilot CLI (#2904, #4432), Claude Code (#43083 configurable reasoning effort per subagent) — a direct response to sub-agents silently picking the wrong model or effort tier.
- **Multi-agent/fleet orchestration primitives**: Qwen Code's RFC #8718 (leader/worker fleet model), Gemini CLI's subagent reliability push, Claude Code's multi-agent coordination bug catalog (#54393), OpenCode's `/goal` native session-goal request (#27167) — all converging on making multi-agent workflows first-class and observable rather than ad hoc.
- **Status line / observability into agent execution**: Codex (#17827, 150👍, explicitly modeled on Claude Code's status line), OpenCode (#5374 tokens/second), Qwen Code (`/doctor memory` tool-result tracking) — demand for real-time visibility into cost, throughput, and model selection.
- **Session/resume integrity**: Gemini CLI (three concurrent P1 resume/retention fixes), Cline (Claude Code provider session anchoring), OpenCode (session fork speed, retry capping), Codex (thread persistence PRs) — session-state corruption is a cross-cutting engineering priority right now, not isolated to one codebase.
- **Silent-failure / error-surfacing gaps**: OpenCode (#37852 aborted streams reported as clean), Qwen Code (#8920 headless mode exit-0 on API errors), Gemini CLI (#22323 false success after MAX_TURNS) — a shared pattern of automation-breaking silent failures across otherwise unrelated codebases.

## 4. Differentiation Analysis

- **Claude Code**: Enterprise/IDE breadth (VS Code, VS2026) and a large, emotionally invested community (the `/buddy` restoration campaign, 264 comments) — the community skews toward feature/UX advocacy and subscription-trust issues over raw crash reports.
- **OpenAI Codex**: Fastest release cadence (twice-daily alphas) with correspondingly the heaviest Windows-platform instability (sandbox ACL corruption, path rewriting, Defender CPU spikes) — velocity is being traded for platform polish.
- **Gemini CLI**: Distinctly focused on agent *correctness* over agent *capability* — false-success reporting, permission bypass, and hang bugs dominate, suggesting Google is prioritizing trustworthy automation over feature breadth right now.
- **GitHub Copilot CLI**: Enterprise-policy-first design (proxy enforcement, managed sandbox policy) but thin PR throughput today relative to issue volume — suggests either a smaller core team or slower triage-to-fix pipeline than peers.
- **OpenCode**: Most transparent about known weaknesses (public memory megathread demanding heap snapshots) and most active on platform reach (Termux/Android, GHES) — an open-source-community-driven development style.
- **Cline**: Mid-major architecture migration (v4.x "Next" SDK) is actively destabilizing core functionality (Plan-mode permissions, Claude Code write access) — a clear case of technical-debt payoff period with same-day fix PRs.
- **Qwen Code**: Uniquely focused on daemon/server-mode (`qwen serve`) hardening and enterprise chat-platform integration (DingTalk/Feishu/WeCom), reflecting a China-market, service-oriented deployment model distinct from the desktop-first peers.

## 5. Community Momentum & Maturity

Claude Code and Codex show the largest, most engaged communities by raw comment/reaction volume (Claude Code's #45596 at 264 comments/1167👍; Codex's #23794 at 172/172) — both reflect mature, large-scale user bases with strong emotional investment in product decisions. Gemini CLI, OpenCode, and Qwen Code show smaller absolute engagement but tighter fix-to-report loops (Gemini CLI landed 3 concurrent P1 session fixes same-cycle; Qwen Code shipped 3 releases in one day). Cline and Copilot CLI sit in between: active issue reporting but visibly strained by architecture migration (Cline) or thin PR bandwidth (Copilot CLI) relative to their user base. Codex and Qwen Code are the most rapidly iterating by release frequency; Copilot CLI and OpenCode are the most conservative on releases but not on underlying engineering activity.

## 6. Trend Signals

- **Multi-agent orchestration is the industry's next battleground.** Every major tool is independently converging on the same primitives (fleet coordination, per-agent model/effort control, session-goal persistence) — expect this to standardize into a common interaction pattern across tools within 1-2 quarters.
- **Observability debt is catching up with agentic autonomy.** Silent failures (false success, swallowed errors, exit-0-on-failure) are appearing across unrelated codebases simultaneously — a sign that as agents run longer and more autonomously, error-surfacing hasn't kept pace, and this is becoming a CI/automation reliability risk for teams building on these tools.
- **Windows remains the weakest platform tier** across Codex, Copilot CLI, Qwen Code, and OpenCode — teams standardizing on Windows dev environments should expect elevated friction regardless of tool choice.
- **Usage/billing trust is an emerging risk category**, distinct from pure reliability — Claude Code's Fable-5-gating incident signals that as usage-based pricing and model routing get more complex, transparency failures will increasingly show up as top community complaints, not just bugs.
- **Architecture-migration pain is a leading indicator, not a red flag** — Cline's v4.x instability and Gemini CLI's concurrent session-fix wave both suggest active, healthy engineering investment; decision-makers should read a spike in regression reports alongside same-day fix PRs as a maturity signal rather than pure risk.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-11 · Source: anthropics/skills*

## 1. Top Skills Ranking

**#1298 — skill-creator eval pipeline overhaul** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
Rewrites `run_eval.py` so it stops reporting `recall=0%` on every skill regardless of quality, fixes Windows stream reading, trigger detection, and parallel-worker handling, and installs the eval artifact as a real skill. This is the most consequential open PR — it's the definitive fix attempt for a bug independently reproduced 10+ times (tracked in [Issue #556](https://github.com/anthropics/skills/issues/556)). Status: **open**, unmerged.

**#514 — document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
Adds typographic quality control (orphan wrapping, widow paragraphs, numbering misalignment) for AI-generated documents — a functionality gap the maintainers hadn't addressed since it affects nearly every generated doc. Status: **open**.

**#83 — skill-quality-analyzer & skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Two meta-skills for the marketplace: one scores skill quality across five weighted dimensions (structure, docs, resources...), the other audits security. Notable as tooling *for* the Skills ecosystem itself, echoing the trust concerns raised in Issue #492. Status: **open**.

**#538 / #541 — DOCX/PDF correctness fixes** ([PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541))
Two precision bug fixes from the same author (Lubrsy706): case-sensitive file reference bugs in the PDF skill, and a `w:id` collision bug in the DOCX skill that corrupts documents with existing bookmarks. Both are narrow, high-confidence fixes to widely-used document skills. Status: **open**.

**#486 — ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
Adds OpenDocument (.odt/.ods) creation, template filling, and HTML conversion — extending document-format coverage beyond DOCX/PDF. Status: **open**.

**#723 — testing-patterns skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
A broad testing skill covering the Testing Trophy model, unit and React component testing conventions. Represents demand for software-engineering-workflow skills beyond document generation. Status: **open**.

**#210 — frontend-design clarity rewrite** ([PR #210](https://github.com/anthropics/skills/pull/210))
Revises an existing official skill for actionability, ensuring every instruction is executable within a single conversation. Status: **open**.

## 2. Community Demand Trends

From the Issues data, four demand clusters stand out:

- **Trust & security boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the top issue by far) flags community skills impersonating official Anthropic skills via namespace abuse; this is clearly the most urgent unresolved concern.
- **Tooling reliability for skill authors** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) describe the `run_eval.py`/`run_loop.py` description-optimization pipeline being fundamentally broken (0% recall), which has spawned the largest PR cluster in the repo (see §3).
- **Sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide skill sharing in Claude.ai instead of manual file passing; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) reports duplicate skills from overlapping marketplace plugins.
- **Context/resource management** — [#1487](https://github.com/anthropics/skills/issues/1487) reports a single skill injecting ~156k tokens and exhausting the context window; [#1385](https://github.com/anthropics/skills/issues/1385) and [#1367](https://github.com/anthropics/skills/pull/1367) both propose "reasoning quality gate" pipelines for verifying AI output before delivery — a recurring theme around output-verification skills.

## 3. High-Potential Pending Skills

The `run_eval.py` recall bug ([Issue #556](https://github.com/anthropics/skills/issues/556)) has attracted **six independent fix PRs**, signaling both high community pain and contention over the right fix — one of these is likely to land soon:

- [#1298](https://github.com/anthropics/skills/pull/1298) — most comprehensive (Windows + trigger detection + parallel workers)
- [#1323](https://github.com/anthropics/skills/pull/1323) — trigger detection misses real skill name
- [#1261](https://github.com/anthropics/skills/pull/1261) — isolates eval command files from live project registry
- [#1099](https://github.com/anthropics/skills/pull/1099) — Windows subprocess pipe crash fix
- [#1050](https://github.com/anthropics/skills/pull/1050) — Windows subprocess + encoding fixes
- [#539](https://github.com/anthropics/skills/pull/539) — warns on unquoted YAML descriptions

Also worth watching:

- [#1479](https://github.com/anthropics/skills/pull/1479) — plan-file-hygiene skill, directly addressing a named lifecycle gap ([#1417](https://github.com/anthropics/skills/issues/1417)) with maintainer/community framing already agreed upon.
- [#509](https://github.com/anthropics/skills/pull/509) — adds `CONTRIBUTING.md`, closing a repo community-health gap ([#452](https://github.com/anthropics/skills/issues/452)); low-risk, likely mergeable.
- [#83](https://github.com/anthropics/skills/pull/83) — quality/security analyzer skills, relevant to the trust concerns in #492.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **infrastructure reliability and trust, not new skill content** — a broken skill-authoring eval loop has drawn six competing fix PRs, and a namespace-impersonation security report holds the highest comment count in the repo by 3x, showing the ecosystem is currently more focused on fixing how skills are built and trusted than on adding new ones.

---

# Claude Code Community Digest — 2026-08-11

## 1. Today's Highlights

Claude Code shipped v2.1.227, a bug-fix release closing two disruptive issues: incorrect feature-flag evaluation for expired-token sessions (which wrongly gated Max users behind usage credits for Fable) and a Bash-execution failure affecting all `claude-code-action` GitHub Actions runs. Community activity remains dominated by long-running threads on subscription/usage-limit trust issues (Fable 5 credit gating, Max plan limits) and a resurgent campaign to restore the removed `/buddy` skill. On the PR side, a security-focused fix for the `hookify` plugin's rule-loading behavior stands out.

## 2. Releases

**v2.1.227**
- Fixed feature flags evaluating without the user's subscription tier when a session started with an expired login token — previously could wrongly prompt Max plan users to enable usage credits for Fable.
- Fixed every Bash command failing under `claude-code-action` with `allowed_no...` (truncated in changelog).

## 3. Hot Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596) — Bring Back Buddy** (264 comments, 👍1167) — The single largest community petition in this dataset: `/buddy` was silently removed in v2.1.97 with no changelog note, and users are demanding its return. Sustained engagement since April signals strong emotional attachment to the feature.
2. **[#15942](https://github.com/anthropics/claude-code/issues/15942) — Visual Studio 2026 Integration** (146 comments, 👍413) — Long-standing feature request for native VS2026 support, indicating unmet demand from the .NET/enterprise developer segment.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — Model behavior: unauthorized actions, false-absence reasoning** (109 comments, closed) — Detailed report of model-side behavioral patterns (treating `/goal` stop-hooks as authorization, absence-of-evidence errors) that user-side CLAUDE.md rules couldn't catch — flagged as likely generalizable beyond one setup.
4. **[#32479](https://github.com/anthropics/claude-code/issues/32479) — GitHub Connector not recognized despite being connected** (83 comments, 👍135) — Persistent connector/auth desync bug in Claude Desktop, marked invalid but still drawing heavy engagement.
5. **[#1757](https://github.com/anthropics/claude-code/issues/1757) — Constant re-login required** (78 comments, 👍67, labeled `oncall`) — One of the oldest open issues (since June 2025), auth session persistence remains a chronic pain point.
6. **[#79337](https://github.com/anthropics/claude-code/issues/79337) — Fable 5 wrongly prompts "usage credits required" on Max** (73 comments, 👍23, `has repro`) — Directly tied to the v2.1.227 fix; users report silent downgrades to Opus 4.8 instead of running Fable 5 as promised for Max plans.
7. **[#24726](https://github.com/anthropics/claude-code/issues/24726) — VS Code: disable auto-attach of open file/selection** (66 comments, 👍205) — High-upvote UX request to give users control over automatic context attachment in the sidebar.
8. **[#34556](https://github.com/anthropics/claude-code/issues/34556) — Persistent memory across context compactions** (64 comments) — A user documents building a custom memory system after 59 compactions in 26 days, reigniting demand for first-party session memory persistence.
9. **[#69238](https://github.com/anthropics/claude-code/issues/69238) — No response from API when Advisor triggers** (61 comments, 👍95) — Recurring API connectivity failure tied to the Advisor feature, affecting Sonnet-base sessions.
10. **[#69415](https://github.com/anthropics/claude-code/issues/69415) — "Connection closed mid-response" makes CC unusable** (51 comments, 👍79) — Frequent mid-response disconnects on VS Code/WSL, described by reporters as a usability blocker.

## 4. Key PR Progress

Only 3 PRs updated in the last 24h (below the usual 10-item target — all are included):

1. **[#85716](https://github.com/anthropics/claude-code/pull/85716) — fix(hookify): load rules from ancestor `.claude` directories to prevent silent bypass** (OPEN) — Security fix for the `hookify` plugin's `config_loader.py`: rules were silently skipped when not found in the immediate directory, allowing hook enforcement to be bypassed. Fixes #85613.
2. **[#34951](https://github.com/anthropics/claude-code/pull/34951) — feat: automatic GitHub/GitLab detection for `/code-review`** (OPEN) — Extends `/code-review` to support self-hosted GitLab in addition to GitHub, with automatic platform detection to avoid duplicated logic. Addresses #26932.
3. **[#85464](https://github.com/anthropics/claude-code/pull/85464) — plugins: add entroly-context for budget-aware context management** (CLOSED) — Community plugin proposal integrating "Entroly" for budget-aware context selection in large codebases; closed without merge.

## 5. Feature Request Trends

- **Restore/replace removed features** — `/buddy` restoration (#45596) is the single most-demanded item by a wide margin.
- **IDE/editor integration depth** — Visual Studio 2026 support (#15942), VS Code auto-attach control (#24726), LaTeX rendering in the VS Code plugin (#16446).
- **Persistent memory & cross-session state** — memory across compactions (#34556), CLI↔Desktop conversation sync (#28791), cross-session coordination for shared working trees (#76727).
- **Multi-agent/subagent control** — configurable reasoning effort per subagent (#43083), plugin rules support (#14200), coordination bug catalog from autonomous multi-agent runs (#54393).

## 6. Developer Pain Points

- **Subscription/usage trust erosion** — Fable 5 incorrectly gated behind usage credits on Max plans (#79337), unexplained Max session-limit consumption (#82506), and historical reports of silently tightened limits (#54714) are eroding confidence in usage accounting.
- **Auth & session reliability** — near-daily re-login requirements (#1757), lost/undiscoverable sessions after logout (#26452), and connector state desync (#32479) point to a fragile session/auth layer.
- **Network/connectivity instability** — mid-response connection drops (#69415) and Advisor API timeouts (#69238) are described as making the tool "unusable" for some workflows.
- **Data loss risk** — silent retention cleanup deleting session transcripts with no opt-in or recovery path (#59248) is a notable trust/safety concern.
- **Platform-specific crashes** — Windows desktop GPU process crashes taking down all sessions (#81698) and general post-update crashing (#80468) recur in the Windows cohort.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-11

## Today's Highlights

Codex shipped two rapid alpha releases (`0.148.0-alpha.6` and `0.147.0-alpha.6.6`) continuing its fast-iteration release cadence, alongside a wave of internal PRs focused on `view_image` validation/safety, thread persistence, and Windows sandbox/networking fixes. On the community side, Windows remains the dominant pain point — freezes, WSL path handling, sandbox/ACL corruption, and Defender CPU spikes all surfaced in high-engagement issues — while the long-running Codex Desktop token-usage indicator regression (#23794) continues to draw heavy community frustration with 172 comments.

## Releases

- **[rust-v0.148.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.6)** — Latest alpha build in the ongoing 0.148 series; no detailed changelog provided beyond the version bump.
- **[rust-v0.147.0-alpha.6.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.6)** — Patch alpha for the 0.147 line, released alongside 0.148-alpha.6.

## Hot Issues

1. **[#23794](https://github.com/openai/codex/issues/23794)** — Codex Desktop lost its visible context/token usage indicator after an update. 172 comments and 172 👍 make this the single most-reacted issue in the window; now closed but reflects sustained frustration over losing a core UX affordance.
2. **[#20214](https://github.com/openai/codex/issues/20214)** — Codex App frequently freezes/stutters on Windows 11 Pro despite ample system resources. 93 comments; a broad, unresolved performance complaint spanning many hardware configs.
3. **[#17827](https://github.com/openai/codex/issues/17827)** — Feature request for a customizable TUI status line (à la Claude Code). 150 👍, one of the highest reaction counts of any open issue, signaling strong demand.
4. **[#31573](https://github.com/openai/codex/issues/31573)** — OAuth authentication fails at issuer validation on CLI 0.143.0. 35 comments; blocks Free-tier sign-in for some users.
5. **[#37458](https://github.com/openai/codex/issues/37458)** — VS Code extension fails to start ("couldn't load its resources") on Windows. Fresh (created Aug 7) but already at 34 comments — fast-escalating.
6. **[#30009](https://github.com/openai/codex/issues/30009)** — `apply_patch` fails with a Windows sandbox-related error, blocking core file-edit functionality for Windows users.
7. **[#30408](https://github.com/openai/codex/issues/30408)** — MCP server processes leak per-thread, causing 9+ GB RSS growth over time; a serious resource-exhaustion bug for long sessions.
8. **[#28094](https://github.com/openai/codex/issues/28094)** — Windows/WSL: Codex rewrites `/home` paths as `C:\home`, breaking project associations and reporting valid directories as missing.
9. **[#26984](https://github.com/openai/codex/issues/26984)** — MCP stdio servers leak pipe fds and orphan child processes, eventually causing `EMFILE` ("too many open files") crashes.
10. **[#20951](https://github.com/openai/codex/issues/20951)** — Feature request to open Codex sessions as full VS Code editor tabs (parity with Claude Code). 38 👍, reflects ongoing IDE-integration ergonomics demand.

## Key PR Progress

1. **[#37939 / #37892](https://github.com/openai/codex/pull/37939)** — Validate images before returning `view_image` output, rejecting invalid/unsupported data before it reaches code mode; two iterations landed the same day, indicating active hardening of image handling.
2. **[#37902](https://github.com/openai/codex/pull/37902)** — Defers `view_image` processing to history insertion, passing raw image bytes through unchanged until the shared decoding/resizing path — companion fix to the validation work above.
3. **[#37929](https://github.com/openai/codex/pull/37929)** — Adds shared runtime build info (`codex-build-info`) to resolve packaged runtime version from `codex-package.json` while preserving the stamped commit.
4. **[#37926](https://github.com/openai/codex/pull/37926)** — Introduces `PersistContext` to distinguish turn-start thread persistence, enabling background flush/shutdown coordination.
5. **[#37908](https://github.com/openai/codex/pull/37908)** — Fixes cloud config bundle refresh so new sessions pick up the latest shared config instead of a stale startup snapshot.
6. **[#37906](https://github.com/openai/codex/pull/37906)** — Makes gRPC code-mode notifications fire-and-forget, removing acknowledgment-wait latency from cell completion.
7. **[#37898](https://github.com/openai/codex/pull/37898)** — Adds appearance metadata (icon/color) to custom thread sections, persisted in SQLite and exposed via the app-server protocol.
8. **[#37882](https://github.com/openai/codex/pull/37882)** — Reads safety-buffering flags from typed `response.metadata` SSE events while preserving top-level field precedence.
9. **[#37875](https://github.com/openai/codex/pull/37875)** — Fixes managed networking to honor the configured Windows sandbox level instead of implicitly forcing the elevated backend.
10. **[#31901](https://github.com/openai/codex/pull/31901)** — Resolves local MCP JSON Pointer `$ref`s in Code Mode TypeScript tool schemas, supporting both `#/$defs` and `#/definitions`.

## Feature Request Trends

- **Status line / UI customization** — Strong demand (#17827, 150 👍) for Claude Code-style customizable TUI status lines showing token usage, model, and git branch.
- **Custom model provider support in the desktop app** — #10867 (49 👍) asks for App parity with CLI's `/model` custom-provider switching.
- **IDE integration depth** — #20951 requests full editor-tab sessions in VS Code; broader theme of wanting Codex's IDE extensions to match native editor ergonomics.
- **MCP lifecycle management** — #21984 requests lazy/on-demand MCP server startup instead of eager per-session spawning, tying into the leak issues below.
- **Remote/multi-device control** — #28919 highlights a missing "control other devices" tab, pointing to demand for better cross-device session management.

## Developer Pain Points

- **Windows platform instability dominates**: freezes/stutters (#20214), sandbox ACL corruption (#15777), `apply_patch` sandbox errors (#30009), WSL path rewriting (#28094), Git HTTPS failures in the native sandbox (#31073), and Defender-triggered CPU spikes (#30527) collectively point to Windows as the least stable platform.
- **Resource/process leaks**: MCP server and pipe-fd leaks (#30408, #26984) cause unbounded memory/file-descriptor growth in long-running sessions, eventually crashing or requiring restarts.
- **Auth/session fragility**: OAuth issuer validation failures (#31573), stale app-connector links after reauth (#24675), and IDE-specific sign-in failures for Pro accounts (#28078) show authentication as a recurring friction point across surfaces.
- **Desktop app update/reliability issues**: failed post-update installs (#37002), app not restarting after update (#29787), and stuck "Thinking" states with non-functional Stop (#24287) undermine trust in the update pipeline.
- **Session log bloat**: #24948 reports session logs growing to 700MB–2GB from repeated compaction history and raw tool output, degrading performance over time.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-11

## 1. Today's Highlights

Activity remains concentrated on agent/subagent reliability and session-safety hardening. A single nightly release (v0.56.0) landed a narrow MCP OAuth token-refresh fix, while the PR queue is dominated by a wave of defensive fixes to session resume/retention logic, extension/GitHub JSON parsing, and VS Code companion disposables — several stemming from a coordinated hardening pass (`GautamSharma99`, `PranavMishra28`, `sarbojitrana`). On the issue side, subagent correctness (hangs, false "success" reporting, permission bypass) continues to be the most reported pain point.

## 2. Releases

**v0.56.0-nightly.20260811.geef19f25c** ([release](https://github.com/google-gemini/gemini-cli))
- `fix(core)`: refresh MCP OAuth tokens using the stored client ID, by first-time contributor @ParthivNaresh — [PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

A narrow, single-change nightly focused on MCP OAuth correctness.

## 3. Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovery after MAX_TURNS falsely reported as GOAL success, hiding interruption. P1, `codebase_investigator` silently fails without surfacing the truncation — a trust/observability risk for automated workflows.
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs indefinitely (8 👍). Users report waiting up to an hour; only workaround is disabling subagent delegation entirely.
3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution gets stuck on "Awaiting input" after the command has already completed. P1, affects even trivial commands.
4. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser subagent fails on Wayland, a Linux desktop compatibility gap for the `browser_agent` feature.
5. **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)** — (Sub)agents running without permission since v0.33.0, despite agent mode being explicitly disabled — a permission-model regression.
6. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — 400 error when more than 128 tools are registered; requests smarter tool-scope limiting rather than a hard failure.
7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Auto Memory sends transcript content to the extraction model before redaction occurs, a security-relevant data-handling gap.
8. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini rarely invokes custom skills/subagents proactively unless explicitly instructed, undermining the value of defined skills.
9. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (EPIC) — Assessing AST-aware file reads/search/mapping to reduce tool-call turns and token noise.
10. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** (EPIC) — Robust component-level evaluations, building on 76 existing behavioral eval tests across 6 supported models.

## 4. Key PR Progress

1. **[#28767](https://github.com/google-gemini/gemini-cli/pull/28767)** — `fix(cli)`: `--resume` was opening a second session file while cleanup deleted the real one. P1 session-integrity fix.
2. **[#28744](https://github.com/google-gemini/gemini-cli/pull/28744)** — `fix(acp)`: don't start a fresh chat before resuming; removes one of two "poisoning" fresh-chat starts on the resume path.
3. **[#28653](https://github.com/google-gemini/gemini-cli/pull/28653)** — `fix(cli)`: makes session retention collision-safe, preventing 8-char session-ID suffix collisions from deleting unrelated chats.
4. **[#28581](https://github.com/google-gemini/gemini-cli/pull/28581)** — `fix(cli)`: skips diff hunk markers during `@`-file processing, avoiding heap growth from recursive glob searches on large diffs.
5. **[#28673](https://github.com/google-gemini/gemini-cli/pull/28673)** — `feat(core)`: adds Gemini 3.6 Flash and 3.5 Flash-Lite model configurations (capabilities, aliases, code paths).
6. **[#28666](https://github.com/google-gemini/gemini-cli/pull/28666)** — `fix(core)`: resolves a validation/execution mismatch in `GlobTool` over which directories are in scope when `dir_path` is omitted.
7. **[#28660](https://github.com/google-gemini/gemini-cli/pull/28660)** — `fix(sdk)`: keeps `sendStream` alive on malformed tool arguments instead of letting `JSON.parse` failures escape.
8. **[#28657](https://github.com/google-gemini/gemini-cli/pull/28657)** / **[#28663](https://github.com/google-gemini/gemini-cli/pull/28663)** — Two independent hardening PRs preventing malformed GitHub API JSON from crashing extension operations.
9. **[#28764](https://github.com/google-gemini/gemini-cli/pull/28764)** / **[#28665](https://github.com/google-gemini/gemini-cli/pull/28665)** — VS Code IDE companion: fixes a comma-operator bug in `activate()` that silently dropped Disposables, causing commands like `gemini.diff.accept`/`gemini.diff.cancel` to leak.
10. **[#28656](https://github.com/google-gemini/gemini-cli/pull/28656)** / **[#28655](https://github.com/google-gemini/gemini-cli/pull/28655)** — Makes extension release downloads and Whisper model downloads failure-atomic, preventing partial/corrupt files on interrupted downloads.

## 5. Feature Request Trends

- **AST-aware codebase tooling** — investigating structural file reads/search/mapping to cut agent turns and token overhead (#22745, #22746).
- **Agent self-awareness and trajectory visibility** — surfacing subagent execution context in `/bug` reports and `/chat share` (#21763, #22598).
- **Model expansion** — new Gemini 3.6 Flash / 3.5 Flash-Lite configs actively landing (#28673).
- **Robustness/eval infrastructure** — component-level behavioral evaluations continuing to scale (#24353).
- **Symlink support for local agents** — recognizing `~/.gemini/agents/*.md` symlinks (#20079).

## 6. Developer Pain Points

- **Subagent reliability is the dominant complaint**: hangs (#21409), false success reporting after hitting turn limits (#22323), permission bypass (#22093), and platform-specific browser agent failures (#21983, #22267) collectively suggest the subagent/agent orchestration layer needs a stability pass.
- **Session and resume-state corruption**: multiple concurrent P1 fixes this cycle (#28767, #28744, #28653) point to a real, actively-being-fixed cluster of bugs around `--resume` and session retention colliding or corrupting state.
- **Shell/terminal UX glitches**: commands reported as "still running" after completion (#25166), terminal resize flicker (#21924), and post-editor screen corruption (#24935) indicate rough edges in the interactive terminal rendering layer.
- **Auto Memory trust gaps**: unredacted content reaching the extraction model, silently skipped invalid patches, and indefinite retries on low-signal sessions (#26525, #26523, #26522) show the newer Auto Memory feature still needs hardening before it can be fully trusted.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Daily Digest (2026-08-11)

## 1. Today's Highlights

v1.0.79 shipped with targeted enterprise/sandbox policy fixes, but the 24h issue volume skews heavily toward **model routing and reasoning-effort bugs in sub-agents** (`explore`, `rubber-duck`, custom agents), alongside a fresh **settings.json data-loss bug** in `/config model`. Enterprise networking continues to be a pain point, with new reports of MCP registries failing TLS validation and BYOK providers being blocked by local 403s before requests even leave the client.

## 2. Releases

**v1.0.79** (2026-08-10)
- `/sandbox` configuration dialog now shows where sandbox settings are persisted in `settings.json`.
- Added enterprise "allow-auto-only" policy support — `/allow-all auto` now works under managed policies while full `/allow-all` stays blocked.
- Enterprise-managed sandbox policy can now enforce a proxy URL while credentials remain scoped.

## 3. Hot Issues

1. **[#1595](https://github.com/github/copilot-cli/issues/1595)** — Sporadic policy blocking on model retrieval for Enterprise accounts despite valid quota remaining. 29 comments, 11 👍 — long-running, high-engagement enterprise access bug.
2. **[#4345](https://github.com/github/copilot-cli/issues/4345)** *(closed)* — `Reasoning effort 'medium' not supported for claude-haiku-4.5'` crash when two server-side feature flags combine during sub-agent execution.
3. **[#2904](https://github.com/github/copilot-cli/issues/2904)** — Feature request: custom agent YAML frontmatter should support per-agent `reasoning_effort`, not just global `--effort`. 19 👍, strong community demand.
4. **[#4431](https://github.com/github/copilot-cli/issues/4431)** *(closed)* — `/config model` in v1.0.79 wipes the entire user `settings.json` instead of just updating the model field — data-loss-class regression, filed and closed same day.
5. **[#4380](https://github.com/github/copilot-cli/issues/4380)** — "Rubber Duck" reviewer sometimes picks the same model family as the primary session, undermining the adversarial cross-family review design.
6. **[#4222](https://github.com/github/copilot-cli/issues/4222)** *(closed)* — Regression of previously-fixed #2802: infinite React/Ink render loop freezes the main pane on Windows/VS Code terminal in 1.0.72+.
7. **[#4325](https://github.com/github/copilot-cli/issues/4325)** *(closed)* — Long-lived sessions become permanently unloadable once `events.jsonl` exceeds V8's max string length; session appears in `/resume` but can't load.
8. **[#3954](https://github.com/github/copilot-cli/issues/3954)** — `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring configured custom/DeepSeek endpoints.
9. **[#4095](https://github.com/github/copilot-cli/issues/4095)** — Windows plugin update fails with "Access is denied (os error 5)" while VS Code holds file watcher handles. 13 👍.
10. **[#4432](https://github.com/github/copilot-cli/issues/4432)** — `rubber-duck` sub-agent's model-emitted `model` argument silently overrides the complementary-strategy design and user's `/subagents` config — same-day filing, direct follow-up to #4380.

## 4. Key PR Progress

Only one PR updated in the last 24h:

1. **[#4428](https://github.com/github/copilot-cli/pull/4428)** — "Add initial devcontainer configuration" (opened by @Pjrich1313). Adds a baseline devcontainer setup for the repo; marked LGTM.

## 5. Feature Request Trends

- **Finer-grained model/reasoning control**: per-agent reasoning effort (#2904), unified MCP config across VS Code and CLI (#4429), constraining tool-exposed model arguments to registered options (#4425, #4432).
- **Sub-agent model governance**: multiple requests/bugs point toward wanting explicit control (and guardrails) over which models sub-agents and `explore`/`rubber-duck` can select (#3954, #4380, #4427, #4432).
- **Session robustness**: better handling of long-running sessions and large `events.jsonl` files (#4325), and prompt-caching optimization for Claude Sonnet to cut latency/cost (#3808).

## 6. Developer Pain Points

- **Model routing instability in agentic/sub-agent flows** is the dominant theme — unsupported reasoning-effort combinations, hardcoded models ignoring custom endpoints, and sub-agents silently overriding intended model-selection strategy (#4345, #3954, #4380, #4427, #4432).
- **Enterprise networking/auth friction**: policy-based model access blocked despite valid quota (#1595), private-CA TLS rejection breaking MCP registries on macOS (#4364), and BYOK providers failing with local 403s before reaching the provider (#4414).
- **Data-loss risk in configuration**: `/config model` overwriting all user settings (#4431) is a serious trust issue for an otherwise minor UX flow.
- **Windows-specific friction**: recurring UI freezes in VS Code's integrated terminal (#4222) and plugin-update failures due to file locks (#4095).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-11

## Today's Highlights

No new releases in the last 24 hours, but engineering activity remains heavy: the long-running memory leak investigation (#20695) and a new CPU-spin/hang bug (#30086) continue to dominate community attention, while maintainers pushed several performance and reliability fixes — long session fork speedups, capped session retries, and an embedded web UI for CLI distributions. On the feature side, `/btw`-style contextual commands and native session goals remain the two most-requested additions.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (126 comments, 👍96, OPEN) — Central tracking issue for scattered memory-leak reports; maintainers are explicitly requesting heap snapshots, not LLM-generated theories. Still the most active thread in the repo.
2. **[#27167 — Native session goals with `/goal`](https://github.com/anomalyco/opencode/issues/27167)** (70 comments, 👍128, OPEN) — Highest-upvoted open feature request; proposes a persistent session goal/lifecycle mechanism beyond custom slash commands.
3. **[#16992 — Add `/btw` command](https://github.com/anomalyco/opencode/issues/16992)** (22 comments, 👍178, OPEN) — Highest reaction count of any item this cycle; requests parity with Claude Code's `/btw` for injecting side-notes without derailing the agent loop.
4. **[#30086 — High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)** (46 comments, 👍22, OPEN) — Regression reported over the last ~7 days; users who previously ran 10+ concurrent sessions now struggle with 3, with reports of UI lag.
5. **[#785 — Disable streaming mode](https://github.com/anomalyco/opencode/issues/785)** (30 comments, 👍38, OPEN) — Long-standing request for proxy providers (e.g., Credal OpenAI Proxy) that don't support SSE streaming.
6. **[#5374 — Show tokens/second](https://github.com/anomalyco/opencode/issues/5374)** (20 comments, 👍94, OPEN) — Popular observability request for real-time and average throughput display, useful for comparing providers.
7. **[#37852 — Aborted provider stream recorded as clean stop](https://github.com/anomalyco/opencode/issues/37852)** (17 comments, 👍55, OPEN) — Correctness bug: mid-stream provider failures silently resolve as successful turns with zero usage and no error surfaced, causing subagents to return empty.
8. **[#2224 — Support for airgapped installation](https://github.com/anomalyco/opencode/issues/2224)** (26 comments, 👍44, CLOSED) — Kubernetes/airgapped deployment pain point; install script assumes internet access even when only a model endpoint is reachable.
9. **[#7957 — Ctrl+C should not exit OpenCode](https://github.com/anomalyco/opencode/issues/7957)** (15 comments, 👍49, OPEN) — UX complaint that Ctrl+C exits the app instead of copying, conflicting with the universal OS copy shortcut.
10. **[#38801 — message="exiting loop"](https://github.com/anomalyco/opencode/issues/38801)** (22 comments, 👍0, OPEN) — Recurring frustration with premature loop exits when using various OpenAI-compatible APIs.

## Key PR Progress

1. **[#41701 — Speed up long session forks](https://github.com/anomalyco/opencode/pull/41701)** — Publishes forked session events in ordered durable batches (3,000-event chunks) instead of one at a time; fixes #41698.
2. **[#41699 — Cap session retries, configurable backoff](https://github.com/anomalyco/opencode/pull/41699)** — Introduces `RETRY_MAX_ATTEMPTS` so retryable errors (5xx, rate limits, overloaded) stop retrying forever instead of hanging sessions indefinitely; fixes #21960.
3. **[#41525 — Embed web UI in CLI](https://github.com/anomalyco/opencode/pull/41525)** — Bundles the web app's text/binary assets directly into Bun/Node CLI distributions, serving it without proxying `app.opencode.ai`.
4. **[#33010 — Android/Termux support](https://github.com/anomalyco/opencode/pull/33010)** — Adds `"android"` platform handling to postinstall/wrapper/publish flow for Termux arm64; closes 4 long-open issues (#961, #10504, #21043, #30248).
5. **[#13860 — GitHub Enterprise Server support](https://github.com/anomalyco/opencode/pull/13860)** — Replaces hardcoded `github.com` URLs with `GITHUB_SERVER_URL`/`GITHUB_API_URL` env vars so the GitHub Action works on GHES; fixes #12830.
6. **[#41683 — Refresh task resume permissions](https://github.com/anomalyco/opencode/pull/41683)** — Atomically refreshes stored agent/Task-owned permissions when a queued task resume starts under a different subagent; fixes #41681.
7. **[#41665 — Extract Plan agent into a plugin](https://github.com/anomalyco/opencode/pull/41665)** — Moves the built-in Plan agent out of `opencode.agent` into an internal `opencode.plan` plugin, replacing blanket `edit * deny` with explicit tool rejection.
8. **[#38790 — Workspace flows to new layout (beta)](https://github.com/anomalyco/opencode/pull/38790)** — Adds workspace selection (local repo, new isolated workspace, existing workspace) with branch-aware composer for new sessions.
9. **[#41677 — Honor `--interactive` flag in `opencode run`](https://github.com/anomalyco/opencode/pull/41677)** — Fixes the documented `-i`/`--interactive` split-footer mode, which was parsed but not applied; closes #41513.
10. **[#40845 — Redesign non-modal settings (beta)](https://github.com/anomalyco/opencode/pull/40845)** — Reorganizes settings navigation, splits appearance/notifications, and adds Projects/Extensions views backed by real MCP/server state.

## Feature Request Trends

- **Native workflow primitives**: session goals (`/goal`, #27167) and `/btw` side-note injection (#16992) both push toward richer in-session control beyond ad-hoc slash commands.
- **Observability**: tokens/second display (#5374) and clearer stream/error surfacing (#37852) reflect demand for more transparent insight into what the agent loop is actually doing.
- **Platform reach**: Termux/Android bootstrap (#41695, #33010) and GHES support (#13860) show continued push to run OpenCode in more constrained or enterprise environments.
- **Editing/copy ergonomics**: Ctrl+C/Ctrl+Z remapping (#7957, #19256), mouse-select copy issues (#5046), and "copy as raw markdown" (#14041) form a cluster of terminal-interaction requests.

## Developer Pain Points

- **Memory and CPU regressions** dominate: the memory megathread (#20695) and a fresh CPU-spin bug (#30086) suggest resource usage has degraded in recent releases, especially for users running multiple concurrent sessions.
- **Silent failure modes**: aborted streams recorded as clean stops (#37852), silent model ID switching (#28842), and TUI input being swallowed on Enter (#31217) all share a theme — failures with no error surfaced, making debugging hard.
- **Terminal UX friction**: Ctrl+C exiting instead of copying, scroll not working (#8449), and mouse-copy failures in Windows Terminal (#5046) point to recurring TUI interaction gaps, particularly on Windows.
- **Provider/auth instability**: certificate verification errors (#8601), GitHub Copilot 404s on multi-turn (#37389), and reasoning-content mismatches with Kimi/DeepSeek (#25758) show ongoing friction across the provider abstraction layer.

</details>

<details>
<summary><strong>Cline</strong> — <a href="https://github.com/cline/cline">cline/cline</a></summary>

# Cline Daily Digest — 2026-08-11

## Today's Highlights

Cline shipped **v4.1.8**, adding manual Vertex model-ID entry and Fable 5 support on Vertex, while broadening the Vertex model picker beyond a hardcoded global-endpoint list. Activity remains heavily concentrated on stability of the new v4.x "Next" SDK architecture — multiple issues report Plan-mode permission leaks, degraded task quality, and broken Claude Code agentic writes, and several PRs today target fixes for these same regressions (streamed-text duplication, Claude Code write access, stale telemetry). The CLI/macOS release pipeline also drew attention after a platform-package version-skew bug caused 403s for new models.

## Releases

**[v4.1.8](https://github.com/cline/cline/releases/tag/v4.1.8)**
- Added: manual entry of any Vertex model ID (including unlisted models), Fable 5 support on Vertex.
- Changed: full model catalog now shown for every Vertex region instead of a hardcoded global-endpoint filter that lagged behind new releases.

## Hot Issues

1. **[#12362](https://github.com/cline/cline/issues/12362)** – VS Code extension v4.0.9 permanently shows `[OPENAI] Connection error` for local LLMs. 15 comments, oldest actively-updated regression in this batch.
2. **[#13008](https://github.com/cline/cline/issues/13008)** – v4.1.x changed tool-call syntax again, breaking local Ollama + Qwen3.6 setups and removing compact-context toggle. 9 comments.
3. **[#12406](https://github.com/cline/cline/issues/12406)** – JetBrains plugin hits LiteLLM routes blocked by default, breaking model-list fetch. 9 comments.
4. **[#13140](https://github.com/cline/cline/issues/13140)** – Plan mode no longer respects edit permissions and task quality degraded after the v4.x SDK migration. 8 comments, filed the same day it was updated — fast-escalating.
5. **[#12247](https://github.com/cline/cline/issues/12247)** – `reasoning-delta` stream parts silently dropped in `@cline/llms` due to a field-name bug (`part.reasoning` vs `part.delta`), affecting OpenAI-compatible providers like LM Studio/Gemma. 7 comments.
6. **[#13001](https://github.com/cline/cline/issues/13001)** – Truncated tool-call arguments can be silently "repaired" into corrupted-but-valid JSON before execution — a correctness/safety concern flagged directly by a maintainer-adjacent report. 5 comments.
7. **[#13146](https://github.com/cline/cline/issues/13146)** – Claude Code provider: agentic file writes impossible because sessions spawn with `settingSources: []`, no cwd, and no `canUseTool`. Already has a same-day fix PR (#13152).
8. **[#13128](https://github.com/cline/cline/issues/13128)** (closed) – macOS users stuck on `@cline/cli-darwin-*@3.0.15` while main package is `3.0.52`, causing new models to 403. Platform packaging drift.
9. **[#13131](https://github.com/cline/cline/issues/13131)** – Checkpoints feature adds ~90s blocking delay per turn on large Git repos in cloud-synced folders on Windows.
10. **[#13136](https://github.com/cline/cline/issues/13136) / [#13135](https://github.com/cline/cline/issues/13135)** – Two related reports from the same user: Cline performs unrelated repeated actions and ignores explicit stop/redirect instructions in Plan mode, reverting to the original task framing.

## Key PR Progress

1. **[#13152](https://github.com/cline/cline/pull/13152)** – Fixes Claude Code provider: anchors session on workspace, loads user settings, restores edit capability. Directly resolves #13146.
2. **[#13154](https://github.com/cline/cline/pull/13154)** – Fixes desktop app duplicating streamed text/tool labels after session hydrate.
3. **[#13141](https://github.com/cline/cline/pull/13141)** – Trims full request bodies from persisted `api_req_started` messages to stop large conversations from graying out/crashing the webview (fixes #13132).
4. **[#13137](https://github.com/cline/cline/pull/13137)** (closed) – Respects user max-output-tokens in compaction summarizer requests; fixes "Compaction skipped" with local reasoning models like Qwen 3.x (fixes #13127).
5. **[#12848](https://github.com/cline/cline/pull/12848)** – Adds ad-hoc codesigning/verification for Darwin CLI release binaries and splits CLI publish builds by target OS — likely addresses the macOS packaging drift seen in #13128.
6. **[#12461](https://github.com/cline/cline/pull/12461)** (closed) – Ports Vertex improvements to main: Fable 5 support, custom model IDs, drops global-region picker filtering in favor of explicit runtime errors. Basis for the v4.1.8 release notes.
7. **[#13145](https://github.com/cline/cline/pull/13145)** – Fixes desktop reconnecting to stale managed Hub daemons when adjacent releases share a wire-protocol version.
8. **[#13148](https://github.com/cline/cline/pull/13148)** – Extracts the Hub runtime out of Core, part of ongoing architecture decoupling.
9. **[#12962](https://github.com/cline/cline/pull/12962)** – Fixes Hub dashboard forwarding recoverable agent errors as terminal `{type: "error"}` events, ending turns prematurely (companion fix to #12953).
10. **[#13139](https://github.com/cline/cline/pull/13139)** – Fixes `getAuthToken` discarding a successfully refreshed Cline token after expiry, one of two known next-side auth bugs.

## Feature Request Trends

- **Model/provider flexibility**: manual Vertex model IDs, Fable 5 on Vertex, and continued requests for more granular OpenAI-compatible / local-LLM configuration (independent Plan/Act base URLs, XML vs native tool calling toggle for weaker models).
- **Tool-summary and UI consolidation**: shared tool-summary module (#13151) to unify inconsistent tool-call row rendering across surfaces, plus chat-message component extraction/refactors (#13153, #13155) signaling a push toward a more modular desktop UI.
- **Cloud/session continuity**: desktop cloud sessions with GitHub onboarding (#13069) and Hub daemon reconnect robustness (#13145) point to increased investment in persistent, multi-device session infrastructure.

## Developer Pain Points

- **v4.x "Next" SDK migration instability**: the single biggest recurring theme — Plan-mode permission violations, degraded task quality, tool-syntax breakage for local models, and broken Claude Code agentic writes are all attributed to the SDK migration from v4.0.0 onward.
- **Local/self-hosted model friction**: repeated complaints (#12362, #13008, #12406, #12247) about connection errors, tool-syntax changes, blocked LiteLLM routes, and dropped reasoning-stream fields specifically affecting local/OpenAI-compatible setups.
- **Context/compaction reliability**: abnormal token counts after manual compression (#12996), compaction silently skipped for local reasoning models, and `/newtask` compacting instead of starting a fresh context (#13157) — compaction logic is a frequent source of confusion and bugs.
- **Release/packaging consistency**: macOS CLI binaries lagging behind the main npm package version, causing 403s on new models — an operational trust issue for CLI users.
- **Performance regressions**: Checkpoints adding ~90s per-turn delay on large repos in cloud-synced folders, directly harming usability for Windows/OneDrive-style setups.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-11

## Today's Highlights

Qwen Code shipped **v0.21.9** with native Qoder plugin installation and QR-code Local Control pairing, alongside two nightly builds. Community activity is dominated by early-stage design work on **native multi-agent/fleet coordination** (RFC #8718 and its implementation stages #8841/#8842), plus a cluster of daemon/ACP session-management bugs (memory allocation, restore timeouts, scheduled-prompt loss) that suggest the `qwen serve` daemon architecture is under active hardening.

## Releases

- **[v0.21.9](https://github.com/QwenLM/qwen-code)** — Native support for installing Qoder plugins from directories, archives, Git repos, URLs, and npm packages with automatic system-prompt loading; QR-code Local Control pairing enabled.
- **[live-host-v0.1.1](https://github.com/QwenLM/qwen-code)** — Sandbox runtime probing fix before selection ([#7734](https://github.com/QwenLM/qwen-code/pull/7734)); autofix scan-and-pick serialization fix.
- **v0.21.9-nightly.20260811** — Test coverage for context-refresh marker carry-over turns ([#8809](https://github.com/QwenLM/qwen-code/pull/8809)).

## Hot Issues

1. **[#8718](https://github.com/QwenLM/qwen-code/issues/8718)** — RFC: Native coordination for independent Qwen sessions. Most-discussed item (8 comments); proposes a leader/worker model for dispatching multiple self-contained agent sessions — foundational to the ongoing fleet effort.
2. **[#8644](https://github.com/QwenLM/qwen-code/issues/8644)** — File links in chat fail to open on Windows because the drive-letter colon gets URL-encoded (`f:///d%3A/...`). Platform-specific but blocks a core workflow (click-to-open) for Windows users.
3. **[#8182](https://github.com/QwenLM/qwen-code/issues/8182)** — `qwen serve` daemon allocates 50% of host memory to *each* ACP child process without dividing by child count, risking OOM under concurrent sessions.
4. **[#8504](https://github.com/QwenLM/qwen-code/issues/8504)** — The "Built-in Provider Update" prompt repeats indefinitely when custom models are preserved in provider config — an annoying regression affecting anyone with custom model entries.
5. **[#8871](https://github.com/QwenLM/qwen-code/issues/8871)** — `qwen serve --http-bridge=true` spawns ACP children with a malformed `--acp` flag, causing `401 invalid access` and breaking the default serve mode.
6. **[#8845](https://github.com/QwenLM/qwen-code/issues/8845)** — Feature request to redesign Web Shell's Channel policy/session/workspace management for shared-access adapters (DingTalk, Feishu, WeCom).
7. **[#8860](https://github.com/QwenLM/qwen-code/issues/8860)** — OpenAI-compatible API call logging has no rotation/retention: observed ~95 GB / 340k files accumulated in two months. Concrete evidence of a real production issue.
8. **[#8920](https://github.com/QwenLM/qwen-code/issues/8920)** — In headless `stream-json` mode, upstream OpenAI-compatible API errors are reported as a successful result with `exit 0`, silently breaking CI/automation pipelines that depend on exit codes.
9. **[#8901](https://github.com/QwenLM/qwen-code/issues/8901)** — Screen flicker in iTerm on macOS every time a permission prompt is answered — reproducible and 100% frequency per the reporter.
10. **[#8888](https://github.com/QwenLM/qwen-code/issues/8888)** — Autofix bot pushes and the review-pr workflow form a self-reinforcing cancellation loop on bot-authored PRs, wasting CI cycles and blocking review.

## Key PR Progress

1. **[#8815](https://github.com/QwenLM/qwen-code/pull/8815)** — feat(omni): S4 policy pipeline adding degradation policies across three modalities plus Stage B tool/model-access gating — part of the larger "omni" experiment.
2. **[#8365](https://github.com/QwenLM/qwen-code/pull/8365)** — Improves slash-command history feedback by keeping transient navigation (auth, settings, theme, etc.) out of visible TUI history.
3. **[#8875](https://github.com/QwenLM/qwen-code/pull/8875)** — `/doctor memory` now reports a "Tool result retention" section tracking how much conversation memory is consumed by retained tool results.
4. **[#8900](https://github.com/QwenLM/qwen-code/pull/8900)** — Syncs loaded-skill state with history eviction and adds a new `/unskill` user command.
5. **[#8903](https://github.com/QwenLM/qwen-code/pull/8903)** — Extends the reverse-audit review convergence pair from whole-diff (3A) to chunked (3B) reviews for large diffs.
6. **[#8755](https://github.com/QwenLM/qwen-code/pull/8755)** *(merged)* — Fixes bare-URL hyperlinks swallowing trailing CJK/full-width punctuation, unifying the matcher across the React markdown renderer and ANSI table renderer (resolves #8750).
7. **[#8856](https://github.com/QwenLM/qwen-code/pull/8856)** — Defaults `qwen serve` project memory to exact-workspace isolation, with `git-root` retained as a legacy migration path.
8. **[#8919](https://github.com/QwenLM/qwen-code/pull/8919)** — Refreshes MiniMax provider endpoint routing, adding global/China regional routes and updated context/thinking metadata for MiniMax-M3/M2.7.
9. **[#8914](https://github.com/QwenLM/qwen-code/pull/8914)** — Stabilizes Web Shell virtualized transcript pagination, preserving scroll position and visible message during upward-scroll history loads.
10. **[#8687](https://github.com/QwenLM/qwen-code/pull/8687)** — Adds a host-side guard blocking `run_shell_command`-issued Git operations that escape the session's worktree via `-C`/`--work-tree`/`--git-dir`.

## Feature Request Trends

- **Multi-agent / fleet orchestration** is the dominant theme: the RFC (#8718) plus staged implementation issues (#8841 fleet MVP, #8842 persistence/recovery/hardening) point to a major architectural push toward supervised, coordinated multi-session agents.
- **Web Shell maturity**: several requests target channel/session management (#8845), Git diff sourcing and branch switching (#8467), and shared session-catalog scheduling (#8891) — Web Shell is being built out as a first-class surface alongside the CLI.
- **Context/memory visibility tooling**: `/doctor memory` tool-result stats (#8875), skill eviction sync + `/unskill` (#8900), and context-file visibility on first prompt (#8855) show a trend toward exposing previously invisible context-window consumption to users.
- **Contribution workflow gaps**: #8921 flags that automated PR verification (CI, review bot, autofix) has no matching contributor-facing path from review feedback to merge — a process/tooling request rather than a code feature.

## Developer Pain Points

- **`qwen serve` / daemon session management** is the most recurring friction point: unbounded per-child memory allocation (#8182), ACP child spawn failures (#8871), lost scheduled prompts after session restore (#8837), and restore timeouts destroying active sessions (#8678) all point to daemon mode being less mature than interactive CLI use.
- **CI instability**: multiple bot-filed "Main CI failed" issues (#8847, #8870) plus the autofix/review-pr cancellation loop (#8888) suggest the automated review/autofix pipeline itself is generating overhead and noise.
- **Unbounded resource growth**: OpenAI API logs reaching 95 GB with no rotation (#8860) reflects a broader pattern of missing retention policies in logging-heavy features.
- **Terminal/TUI rendering glitches**: screen flicker on macOS iTerm (#8901) and input-box jitter during resize (#8849) are platform-specific rendering bugs affecting daily interactive use.
- **Silent failure modes**: headless mode swallowing upstream API errors as success (#8920) and upstream "fail-fast" placeholder responses being treated as valid replies (#8916) both represent error-handling gaps that could mislead automation relying on Qwen Code's exit codes/output.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
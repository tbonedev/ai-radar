# AI CLI Tools Community Digest 2026-08-29

> Generated: 2026-08-29 12:56 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: AI CLI Developer Tools — 2026-08-29

*Based on community digests for Claude Code (anthropics/claude-code) and OpenCode (anomalyco/opencode). No digest data was provided for other CLI_REPOS-tracked tools (Codex, Gemini CLI, Copilot CLI, Kimi CLI, Pi, Qwen Code, DeepSeek TUI, Grok Build) in this window, so the comparison below is scoped to these two.*

## 1. Ecosystem Overview

The AI CLI tooling space continues to mature past the "does it work" phase and into "does it work reliably at scale" — both projects' top complaints today are about hangs, silent failures, and data integrity rather than missing capabilities. Claude Code, as the incumbent with a broad Desktop/Web/Cowork surface, is fighting platform-level battles (Windows/Electron/GPU stability, enterprise auth gating) that come with a larger, more heterogeneous install base. OpenCode, by contrast, is in an active engineering sprint — ten fix/feat PRs merged in a single day versus Claude Code's one — consistent with an open-source project iterating quickly on core service architecture (Session/Store separation) and multi-provider support. A shared thread across both is the growing pain of **long-running session/state management**: unbounded local storage growth, stuck sessions, and persistence races appear in both digests independently, suggesting this is a maturity milestone the whole category is hitting simultaneously as usage moves from one-off prompts to persistent, multi-hour agentic sessions.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release today | ✅ v2.1.251 shipped (hook events, resume metadata, subagent streaming) | ❌ None in last 24h |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #18435 — 171 comments, 762 👍 | #29079 — 119 comments, 52 👍 |
| PRs merged/updated | 1 | 10 |
| PR focus | Single security-pattern glob-matching fix | Broad: auth persistence, session recovery, compaction, snapshot races, provider auth, TUI config |
| Dominant complaint theme | Windows Desktop/Electron stability | Latency/hangs + unbounded local storage growth |

**Read:** OpenCode's 10:1 PR-to-issue-response ratio today signals an active refactor cycle; Claude Code's single PR against ten hot issues suggests either a slower release cadence day or that fixes are landing outside the public issue tracker.

## 3. Shared Feature Directions

- **Session/account management ergonomics** — Claude Code's top request is multi-account switching in Desktop (#18435, 762 👍); OpenCode wants session renaming (#25848) and better multi-session visibility (#41249). Both point to users running several concurrent contexts and wanting the CLI/Desktop layer to track that better.
- **Provider/platform breadth** — Claude Code users want GitLab integration (#12346, 127 👍) and non-default-branch support for Web (#10018); OpenCode is actively shipping provider auth (Fireworks AI, #46118) and has open requests for Kimi/Moonshot auth (#12156) and canonical provider config (#46134). Both communities are pushing past a single-vendor-centric workflow.
- **Permission/automation reliability** — Claude Code has recurring reports that `settings.json` allow-rules and Cowork's "Always allow" are silently ignored (#13340, #47180); OpenCode's async/session-resume PRs (#46125, #46139) address a structurally similar class of "the tool silently stops doing what it was told" bugs.
- **Local resource/state hygiene** — Both flag unconstrained local growth: Claude Code's transcript/session persistence regressions (#65051, #58463) vs. OpenCode's 13GB+ unbounded SQLite event table (#33356) and a 266GB auto-updater loop (#45087).

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Broad — individual devs through enterprise orgs (CVP/enterprise auth issues) | Power users / self-hosters running long-lived, possibly remote/NFS-mounted instances |
| Primary surface pain | Native Desktop app (Electron/GPU, MSIX installer) | Server/daemon architecture (SQLite store, service reconnect races) |
| Technical approach signal | Hook-based extensibility (`PreModelSwitch`/`PostModelSwitch`), Remote Control streaming | Event-sourced session store, pluggable provider auth, service-manager process model |
| Release cadence today | Versioned release with hook/API additions | Continuous small PRs, no tagged release |
| Enterprise readiness signal | CVP approval bug blocking orgs outright (#84352) — enterprise trust gap | NFS/concurrent-session DB corruption (#14970) — team/shared-infra fragility |

Claude Code is optimizing for a polished, hook-extensible product across managed platforms; OpenCode is optimizing for an infrastructure-flexible, multi-provider, self-hostable service — the bug profiles of each (installer/GPU crashes vs. SQLite/process races) directly reflect that architectural split.

## 5. Community Momentum & Maturity

- **Issue engagement**: Claude Code's top issue (#18435, 762 👍) dwarfs OpenCode's top issue (#8501, 235 👍) in raw vote count, consistent with a larger overall user base.
- **Shipping velocity**: OpenCode is iterating faster on a day-to-day basis (10 PRs vs. 1), with fixes landing same-day for issues surfaced in this very digest (e.g., #46125 plausibly addressing #32149). This is characteristic of a smaller, more tightly-coupled maintainer/contributor loop.
- **Maturity signal**: Claude Code's problems are increasingly about **platform packaging and enterprise process** (installer repair loops, approval workflows) — the kind of friction that shows up once a tool has significant enterprise deployment. OpenCode's problems are still substantially **architectural/data-layer** (event store retention, NFS corruption, PATH nondeterminism) — typical of a project scaling its core service design under real-world load.

## 6. Trend Signals

1. **Agentic sessions are now long-running, not stateless** — both tools are being pushed to handle multi-hour/multi-day session continuity (resume metadata, event-sourced stores), and both are visibly under-provisioned for it (unbounded storage, stale-session bugs). Expect session lifecycle management (TTL, compaction, retention policy) to become a standard feature category across the whole CLI-agent space.
2. **Multi-provider is now table stakes, not a differentiator** — even Claude Code's own community is requesting non-Anthropic platform integrations (GitLab), and OpenCode is racing to add native auth for Fireworks, Kimi, and others. Tools that lock users to one vendor/platform will face growing pressure.
3. **Enterprise trust and automation reliability are the next competitive axis** — Claude Code's CVP approval bug and permission-ignoring reports, alongside OpenCode's silent-retry and routing-breakage issues, both point to a category-wide gap between "works for a demo" and "safe to fully automate." Vendors that can demonstrate deterministic, auditable permission/approval behavior have an opening here.
4. **Desktop/GUI packaging is an underinvested risk area** — Claude Code's Windows/Electron crash cluster suggests that as CLI tools grow GUI wrappers, they inherit an entirely new (and currently under-tested) class of platform bugs distinct from the core agent logic.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-29 · Source: anthropics/skills*

## 1. Top Skills Ranking

| # | Skill / PR | Status | What it does | Discussion highlights |
|---|---|---|---|---|
| 1 | [**skill-creator eval fix**](https://github.com/anthropics/skills/pull/1298) (#1298) | OPEN | Fixes `run_eval.py` reporting a flat 0% recall for every skill description, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Also fixes Windows stream reading, trigger detection, and parallel workers. | Directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556), cited as having "10+ independent reproductions" — one of the most structurally important open bugs in the repo's tooling. |
| 2 | [**document-typography**](https://github.com/anthropics/skills/pull/514) (#514) | OPEN | New skill for typographic QA on AI-generated documents: orphan word wraps, widow paragraphs, numbering misalignment. | Frames a problem that "affects every document Claude generates" but is rarely requested explicitly — a proactive-quality angle. |
| 3 | [**scnet-hpc**](https://github.com/anthropics/skills/pull/1615) (#1615) | OPEN | Domain skill for operating SCNet HPC clusters via profile-based SSH/Slurm workflows (job generation, cluster discovery, compute-node management). | Recent (Aug 2026) addition extending Skills into scientific-computing infrastructure. |
| 4 | [**pdf case-sensitivity fix**](https://github.com/anthropics/skills/pull/538) (#538) | OPEN | Fixes 8 case-mismatched file references (`REFERENCE.md`/`FORMS.md` → lowercase) in the official `pdf` skill that break on case-sensitive filesystems (Linux/CI). | Small but high-value correctness fix affecting a core bundled skill. |
| 5 | [**ODT skill**](https://github.com/anthropics/skills/pull/486) (#486) | OPEN | Adds OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML parsing, mirroring the existing docx/pdf skills. | Fills a gap for ISO/open-standard document formats alongside Microsoft-format skills. |
| 6 | [**frontend-design clarity rewrite**](https://github.com/anthropics/skills/pull/210) (#210) | OPEN | Revises the official `frontend-design` skill so every instruction is actionable within a single conversation. | Long discussion window (Jan–Mar 2026) suggests iterative maintainer feedback on skill-writing style. |
| 7 | [**skill-quality-analyzer / skill-security-analyzer**](https://github.com/anthropics/skills/pull/83) (#83) | OPEN | Adds two meta-skills to `example-skills`: a 5-dimension quality scorer and a security analyzer for third-party Claude Skills. | Early (Nov 2025) proposal for **skills that audit other skills** — a governance layer for the ecosystem. |
| 8 | [**docx tracked-change ID collision fix**](https://github.com/anthropics/skills/pull/541) (#541) | OPEN | Fixes document corruption caused by hardcoded low `w:id` values colliding with existing bookmarks/comments in OOXML. | Root-cause writeup of a shared-ID-space bug affecting every docx tracked-change edit. |

## 2. Community Demand Trends

From Issues, four recurring demand clusters stand out:

- **Skill-creator tooling reliability** — [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate in `run_eval.py`, 12 comments) is the most-discussed bug and has spawned at least three competing fixes (PRs [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)). The community wants the description-optimization loop to actually work, especially cross-platform (Windows).
- **Trust, namespace, and security boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the top issue by far) flags community skills impersonating official `anthropic/`-namespaced skills. Combined with [#83](https://github.com/anthropics/skills/pull/83)'s security-analyzer proposal, this signals appetite for **skill provenance/verification tooling**.
- **Context-window discipline** — [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api skill injecting ~156k tokens) and [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder eval silently fabricating errors) point to demand for **lighter, more honest skills** that don't eagerly bloat context or mask failures.
- **Sharing & distribution UX** — [#228](https://github.com/anthropics/skills/issues/228) (org-wide skill sharing, 16 comments) and [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills from overlapping plugins) show demand for better skill-distribution and de-duplication mechanics, not just new skill content.
- **Reasoning/output quality gates** — [#1385](https://github.com/anthropics/skills/issues/1385) and [#1329](https://github.com/anthropics/skills/issues/1329) propose calibration/verification pipelines, echoed by PR [#1367](https://github.com/anthropics/skills/pull/1367) (`self-audit`) — a recurring theme of wanting Claude to **self-check its own deliverables**.

## 3. High-Potential Pending Skills

PRs with the most recent, active discussion — plausible near-term merges:

- [**#1602**](https://github.com/anthropics/skills/pull/1602) — broad reliability fix bundle (mcp-builder serialization, benchmark metrics, encoding, script stability), active through Aug 24.
- [**#1607**](https://github.com/anthropics/skills/pull/1607) — updates `claude-api` skill to mark retired model IDs, tied to an open issue (#1603); low-risk maintenance fix likely to land quickly.
- [**#1595**](https://github.com/anthropics/skills/pull/1595) — partner-skill listing (UIZZE), still being updated as of Aug 29, the most recently active PR in the dataset.
- [**#1628**](https://github.com/anthropics/skills/pull/1628) — "Hivemind" multi-agent orchestration skill delegating work to free-model workers; novel architecture concept gaining early traction.
- [**#1298**](https://github.com/anthropics/skills/pull/1298) — highest structural importance given it resolves the widely-reproduced #556 bug; a strong merge candidate once reviewed.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and correctness of the tooling layer itself** — fixing the broken skill-evaluation pipeline (`run_eval.py`/#556) and closing the trust-boundary gap around skill provenance (#492) — rather than requesting entirely new skill categories.

---

# Claude Code Community Digest — 2026-08-29

## Today's Highlights

Claude Code shipped **v2.1.251**, introducing `PreModelSwitch`/`PostModelSwitch` hooks and richer `SessionStart` resume metadata (session staleness, re-cache cost estimates), plus live streaming of subagent tool calls to Remote Control. Meanwhile, community activity remains dominated by **Windows Desktop app stability issues** (GPU crashes, MSIX install/repair failures, always-on-top window bugs) and a persistent **Cyber Verification Program (CVP) approval bug** blocking enterprise orgs from using Claude Code. Feature requests continue to cluster around multi-account management, deeper Git platform integration, and finer-grained permission/session controls.

## Releases

**v2.1.251**
- New `PreModelSwitch` / `PostModelSwitch` hook events — can block, confirm, or annotate a model switch mid-session
- `SessionStart` resume hooks now surface session staleness and estimated re-cache cost, helping users/tools decide whether to resume or start fresh
- Live streaming of a foreground subagent's tool calls and results to Remote Control, improving visibility into subagent execution

## Hot Issues

1. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — Multi-account management/switching in Claude Desktop. 171 comments, 762 👍 — the single most upvoted open request in this window; strong signal that power users juggle multiple orgs/accounts.
2. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved orgs still hit cyber-safeguard blocks despite prior approval; portal shows "Under review" indefinitely. 164 comments — an enterprise-blocking bug with direct business impact.
3. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Detailed report of model-side behavior issues (treating Stop-hook directives as authorization, absence-of-evidence reasoning errors). Closed but heavily discussed (145 comments) — signals a recurring trust/alignment concern among power users.
4. **[#74649](https://github.com/anthropics/claude-code/issues/74649)** — Cowork fails on Windows 11 Pro due to missing HCS `vfpext` service. 85 comments — indicates Cowork's Windows sandboxing has fragile system dependencies.
5. **[#80444](https://github.com/anthropics/claude-code/issues/80444)** — Desktop GPU-process crash via in-app browser Turnstile rendering leaves the MSIX package unlaunchable until Repair. 75 comments — a severe reproducible crash with app-breaking recovery cost.
6. **[#81698](https://github.com/anthropics/claude-code/issues/81698)** — Related GPU-process crash kills the entire app and all sessions. 65 comments — reinforces GPU/Electron stability as a top Windows pain point (see also #83403, #88093).
7. **[#10018](https://github.com/anthropics/claude-code/issues/10018)** — Claude Code Web can't start sessions from non-default branches. 59 comments, 86 👍 — a workflow blocker for teams not using `main`/`master` as their primary branch.
8. **[#12346](https://github.com/anthropics/claude-code/issues/12346)** — GitLab integration request (repos, MRs, mobile access). 50 comments, 127 👍 — high demand from non-GitHub shops.
9. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** — Desktop main window stays always-on-top with no way to disable it (Windows 11). 41 comments, 92 👍, marked invalid but still highly upvoted — likely a UX regression worth re-triaging (duplicate: [#88093](https://github.com/anthropics/claude-code/issues/88093)).
10. **[#53065](https://github.com/anthropics/claude-code/issues/53065)** — `advisor()` tool forwards full transcripts, inflating token counts and triggering premature auto-compaction on long-context models. 15 comments but technically significant — affects extended-context workflows.

## Key PR Progress

Only one pull request was updated in the last 24 hours:

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079)** — `fix(security-guidance): make ** glob patterns match zero-depth paths`. Fixes `_glob_match`'s reliance on `fnmatch`, where `**/*.ts` requires a literal `/` and silently excludes top-level files from `security-patterns.json` rules — despite documentation promising `**` matches any depth. Notable because the bug's failure mode is **silent non-coverage of security rules**, i.e., security patterns quietly failing to apply to root-level files.

*(No other PRs had activity in this window — PR throughput was unusually low today relative to issue activity.)*

## Feature Request Trends

- **Multi-account / profile management** in Claude Desktop (#18435) — the top-requested feature by a wide margin.
- **Git platform breadth**: GitLab integration (#12346) and non-default-branch support for Claude Code Web (#10018) — teams want parity with GitHub-centric workflows.
- **Output/session ergonomics**: `--quiet` flag to suppress tool call output (#9340), message queueing during active runs (#34835), collapsible `AskUserQuestion` popups (#47305).
- **Permissions granularity**: recurring complaints that `settings.json` allow-rules aren't respected (#13340) and that Cowork scheduled tasks ignore "Always allow" permissions (#47180).
- **Platform/runtime support**: .NET 9/10 SDK support for Claude Code Web (#11627).

## Developer Pain Points

- **Windows Desktop instability is the dominant complaint cluster**: GPU-process crashes (#80444, #81698, #83403), MSIX install/repair failures (#74170, #81992), and an unlaunchable app requiring Repair are recurring themes — this looks like a systemic Electron/GPU-driver interaction issue rather than isolated bugs.
- **Enterprise auth friction**: The CVP approval bug (#84352) blocks previously-approved orgs with no clear resolution path or human escalation — a trust-damaging pattern also echoed in #68429 (billing/account deletion with "no human escalation possible").
- **Permission system reliability**: Both global settings permissions (#13340) and Cowork's "Always allow" (#47180) are reported as silently not honored, forcing repeated manual approval — a friction point for automation-heavy users.
- **Transcript/session data integrity regressions**: background sessions dropping assistant text blocks (#65051) and delayed `tool_use` event writes (#58463) — both flagged as regressions between recent versions, suggesting insufficient regression testing around the session persistence layer.
- **Destructive UX without confirmation**: `/rewind` (Esc Esc) silently reverting code changes by default with no confirmation (#64615) — a sharp edge for an otherwise convenience-oriented feature.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-29

**Source:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

## Today's Highlights

No new releases landed in the last 24 hours, but engineering activity remains intense: maintainers are converging on a wave of core-service refactors (Session/Store separation, standalone skill activation) alongside a cluster of stability fixes for session recovery, auth persistence, and snapshot/git staging races. On the community side, long-standing pain points around response latency, unbounded local database growth, and Go-plan billing/routing bugs continue to dominate engagement, while a steady stream of provider-authentication PRs (Fireworks AI, canonical provider config) shows growing multi-provider ambitions.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#29079](https://github.com/anomalyco/opencode/issues/29079) — GPT models take too long to respond** (119 comments, 52 👍, closed). The single most-discussed issue in this window; simple prompts against GPT models intermittently stall for minutes. High engagement suggests this affected a broad swath of users even after closure.
2. **[#8501](https://github.com/anomalyco/opencode/issues/8501) — Allow expanding pasted text** (35 comments, 235 👍). Top vote count by far; users want to edit/inspect text that gets auto-summarized as `[Pasted ~1 lines]` rather than losing access to the original content.
3. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded growth of the `event` table (13GB+)** (24 comments, 8 👍). SQLite event-sourcing store has no retention/compaction, filling disks on long-lived instances — a serious operational concern for self-hosted/2.0 users.
4. **[#32149](https://github.com/anomalyco/opencode/issues/32149) — OpenCode stops processing requests without response** (20 comments, 9 👍). Sessions hang indefinitely in the "thinking" state with no error surfaced, a recurring reliability complaint.
5. **[#7957](https://github.com/anomalyco/opencode/issues/7957) — Ctrl+C should not exit OpenCode** (17 comments, 52 👍). UX friction: the shortcut conflicts with the universal copy binding on Windows/Linux, causing accidental session termination.
6. **[#14970](https://github.com/anomalyco/opencode/issues/14970) — SQLite database corruption on NFS with concurrent sessions** (12 comments, 24 👍). Multiple sessions against a shared repo on NFS-mounted homes corrupt the local database — a data-integrity risk for team/remote setups.
7. **[#42700](https://github.com/anomalyco/opencode/issues/42700) — TUI leaks ~21MB `.so` per launch into `/tmp`** (7 comments, 2.0). Repeated launches fill tmpfs until the TUI fails to start with a library-load error — a regression affecting the 2.0 line specifically.
8. **[#45996](https://github.com/anomalyco/opencode/issues/45996) — Console Go `provider.only: tencent` breaks routing for mimo-v2.5** (7 comments, 3 👍). Fresh regression (opened 2026-08-28) blocking a working model with a 404 within 30 minutes of introduction.
9. **[#45989](https://github.com/anomalyco/opencode/issues/45989) — Infinite retry loop on rate limit without logging** (7 comments). Go-plan rate-limit handling retries every 3 seconds with no backoff display and no server-side logging, obscuring root cause for both users and support.
10. **[#45087](https://github.com/anomalyco/opencode/issues/45087) — Auto-updater consumed 266GB via 10-minute reinstall loop** (6 comments, 2.0). `opencode2 serve --service` fails to recognize its own updated binary and reinstalls repeatedly, a severe disk-usage bug for long-running servers.

## Key PR Progress

1. **[#46131](https://github.com/anomalyco/opencode/pull/46131) — fix(opencode): write auth.json atomically under a lock.** Fixes two distinct credential-loss bugs in auth persistence, split into independently reviewable commits.
2. **[#46136](https://github.com/anomalyco/opencode/pull/46136) — fix(compaction): use cumulative token usage for auto-compaction overflow check.** Fixes auto-compaction never triggering for large-context models like `opencode-go/hy3`.
3. **[#46125](https://github.com/anomalyco/opencode/pull/46125) — fix(server): reset session status to idle when async prompt fails.** Prevents sessions from getting permanently stuck after a failed `promptAsync` call — likely related to the hang reported in #32149.
4. **[#46139](https://github.com/anomalyco/opencode/pull/46139) — fix(session): resume loop when user message arrives during question prompt.** Fixes the session loop silently dropping a new message sent while an interactive `question` tool prompt is pending.
5. **[#46126](https://github.com/anomalyco/opencode/pull/46126) — fix(service): make subprocess PATH deterministic across reconnect election.** Resolves a race where reconnecting clients with differing `PATH` values could corrupt the server's global shell environment.
6. **[#46016](https://github.com/anomalyco/opencode/pull/46016) — fix(service): ensure explicit restart never reuses unresponsive incumbent.** Hardens `opencode2 service restart` against races where an unresponsive managed service is mistakenly treated as healthy.
7. **[#46120](https://github.com/anomalyco/opencode/pull/46120) — fix(app): reduce session cache memory.** Cuts the app session cache from 40 to 10 transcripts to curb memory growth in large multi-session workflows.
8. **[#46140](https://github.com/anomalyco/opencode/pull/46140) — fix(snapshot): add `--ignore-errors` to `git add` in stage.** Prevents transient file-disappearance races (e.g., from Docker/DB processes) from breaking the snapshot engine.
9. **[#46118](https://github.com/anomalyco/opencode/pull/46118) — feat(plugin): add Fireworks AI native authentication.** Adds a PKCE-based browser login flow for the Fireworks provider, extending the growing list of natively supported auth providers.
10. **[#46117](https://github.com/anomalyco/opencode/pull/46117) — feat(tui): make the sidebar width configurable.** Adds a `sidebar_width` config key (default unchanged at 42), addressing a long-requested TUI customization.

## Feature Request Trends

- **Session management ergonomics**: renaming sessions (#25848), configurable sidebar width (shipped in #46117), live subagents sidebar view (#41249) — users want more visibility and control over multi-session workflows.
- **Provider/auth expansion**: native Kimi (Moonshot AI) auth (#12156), Fireworks AI auth (shipped), canonical provider config (#46134) — continued push to broaden and standardize provider integrations beyond Anthropic/OpenAI.
- **Skill/plugin discoverability**: auto-discovering skills from nested subdirectories (#31377), external subagent-view plugins — signals demand for more flexible extension/plugin ecosystems.
- **Remote/web/worktree workflows**: Git worktree & branch picker for Desktop/Web UI (#13343, sponsorship offered), file tree visibility in `opencode web` (#34223) — growing interest in browser-based and remote development flows.

## Developer Pain Points

- **Latency and unresponsiveness**: the top two issues by comment volume (#29079, #32149) both center on requests silently hanging or taking minutes with no feedback — the most acute recurring complaint this cycle.
- **Local storage/resource leaks**: unbounded SQLite event-table growth (#33356), quadratic event-write costs from diff re-serialization (#42748), `.so` file leaks into `/tmp` (#42700), and a 266GB auto-updater bug (#45087) point to a pattern of insufficient resource cleanup in long-running instances.
- **Billing/usage transparency**: multiple independent reports of incorrect usage-percentage calculations on the Go plan (#45858, #38570) suggest a systemic bug in usage accounting rather than isolated incidents.
- **Concurrency/data-integrity risk**: NFS-mounted database corruption under concurrent sessions (#14970) and PATH nondeterminism across service reconnects (#46126, in progress) highlight fragility in multi-process/multi-client scenarios.
- **Model routing reliability**: sudden routing breakage for specific models (mimo-v2.5 in #45996 and #45990) shortly after provider-preference changes indicates routing logic is sensitive to configuration edge cases.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
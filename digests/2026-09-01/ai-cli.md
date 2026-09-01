# AI CLI Tools Community Digest 2026-09-01

> Generated: 2026-09-01 12:18 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: AI CLI Ecosystem Digest — 2026-09-01

## 1. Ecosystem Overview

The AI CLI tooling space remains in a high-velocity, pre-consolidation phase: both Claude Code and OpenCode are shipping frequent patches while carrying large backlogs of platform-stability and UX complaints rather than headline features. Claude Code, as a commercial first-party product, is optimizing for enterprise trust surfaces (verification/safeguard pipelines, ZDR isolation, Windows desktop packaging), while OpenCode, as an open, provider-agnostic TUI client, is optimizing for breadth of auth/provider integrations (Azure Entra ID, Console canonical config, Copilot routing) and community-driven TUI ergonomics. A common thread across both ecosystems is that terminal/desktop input handling — clipboard, keybindings, window behavior — remains stubbornly unresolved despite sustained multi-month community pressure. Neither tool shipped a major feature release in the last 24h; both are in an iterative-hardening cadence rather than a big-bang release cadence. The maturity gap is visible in issue triage discipline: Claude Code's backlog shows several high-engagement threads sitting under arguably mislabeled tags (`invalid`, `stale`), while OpenCode's larger raw volume reflects a more distributed, community-triaged workflow.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Issues touched (24h) | 10 hot issues surfaced (total volume not disclosed in digest) | 188 updated |
| PRs updated (24h) | 4 (all closed) | 204 updated (10 highlighted, all active feature/fix work) |
| Release status | v2.1.252 shipped — 3 targeted bug fixes | None in 24h |
| PR focus | Plugin/skill hardening (`ralph-wiggum`, `plugin-dev`, sweep script pagination) | Auth/provider plumbing, TUI features (`/stats`, skills toggle), LSP scoping fixes |
| Top engagement issue | #84352 (181 comments) — verification-portal regression | #1505 (128 comments) — `shift+enter` keybinding |

OpenCode's raw update volume is an order of magnitude higher, consistent with its broader community-contribution model versus Claude Code's smaller, curated PR surface.

## 3. Shared Feature Directions

- **Terminal input reliability**: Both ecosystems have long-running, high-reaction complaints about basic input handling — Claude Code's Windows always-on-top/GPU-crash cluster vs. OpenCode's `shift+enter` (#1505, 👍103) and clipboard copy failures (#4283, 👍117; #26459). Neither is close to resolved despite sustained community pressure.
- **Session/context management ergonomics**: Claude Code requests programmatic session renaming (#29355) and a documented JSONL session-log schema (#53516); OpenCode requests configurable `/compact` behavior (#5200) and queue-vs-steer semantics for mid-run prompts (#32157). Both communities want more scriptable, inspectable control over session state.
- **Plan-mode/workflow parity**: OpenCode's #13271 explicitly requests a Claude Code-style "clear context after accepting plan" feature — a direct cross-pollination signal, showing OpenCode users benchmarking against Claude Code's UX.
- **Skills/plugin system maturity**: Claude Code shipped a `plugin-dev` skill-validator fix (#75537) and a `ralph-wiggum` safety-hardening PR (#78371); OpenCode shipped a skills enable/disable TUI toggle (#46373). Both are converging on skills as a first-class extensibility surface that needs its own safety/UX tooling.

## 4. Differentiation Analysis

- **Target user**: Claude Code skews enterprise/regulated (verification portals, ZDR, ", org-level safeguards) — its top issue is a compliance-pipeline regression. OpenCode skews power-user/self-hosted (multi-provider auth, Zen billing/rate-limit disputes) — its top issues are ergonomics and reliability bugs.
- **Technical approach**: Claude Code's fixes this cycle are narrow, product-surface patches (Bash task-output swap, settings persistence, Remote Control stalls) shipped via a formal versioned release. OpenCode's changes are structural/plumbing (canonical provider config, device-token org scoping, LSP client scoping) shipped continuously via merged PRs with no discrete release cut.
- **Safety posture**: Claude Code has a visible safeguard/classifier layer generating its own complaint category (false positives on #84352, #87640) — a cost of having built-in enterprise safety infrastructure that OpenCode, as a thinner provider-routing client, doesn't carry.
- **Extensibility model**: Claude Code focuses on hardening existing plugin/skill primitives against misuse (bounded iteration, publish guards); OpenCode focuses on expanding the primitive surface itself (new auth providers, model variants, TUI toggles).

## 5. Community Momentum & Maturity

OpenCode shows markedly higher raw community throughput (188 issues, 204 PRs vs. Claude Code's 4 PRs) — indicative of a broader open-source contributor base and faster iteration on non-core features. However, Claude Code's per-issue engagement is deeper (181 and 151 comments on its top two issues vs. OpenCode's 128-comment ceiling), suggesting a smaller but more invested user base concentrating around fewer, higher-stakes threads — consistent with an enterprise/paid-tier audience versus OpenCode's larger, more distributed hobbyist/power-user base. Claude Code's low PR count relative to its issue engagement also suggests a closed contribution model (fixes land via internal releases, not community PRs), while OpenCode's near-parity of issue and PR volume reflects a healthier external-contributor flywheel.

## 6. Trend Signals

- **Safety infrastructure is now a support-cost center, not just a shipping cost**: Claude Code's safeguard/verification false-positive cluster (#84352, #87640) shows that as agentic tools add more automated safety gating, false-positive triage becomes a first-class reliability problem — a pattern other vendors building similar guardrails should anticipate.
- **Agent steerability is an emerging trust axis**: Multiple independent Claude Code reports of over-reach and hallucinated tool output (#60705, #76987, #77339) indicate users are starting to scrutinize *why* an agent acted, not just *what* it produced — a signal that transparency/audit tooling around agent decisions will become a differentiator.
- **Provider-agnostic auth is table stakes**: OpenCode's simultaneous push on Azure Entra ID, device-token org scoping, and Copilot routing shows multi-provider CLIs are racing to match each cloud vendor's native auth UX — a cost of the "bring your own model" positioning.
- **Desktop packaging remains an unsolved tax on native apps**: Claude Code's MSIX-bricking GPU crash (#80444) and orphaned-process relaunch failures (#42776) show that cross-platform desktop shells built on Electron-like stacks still carry meaningful platform-specific reliability debt, worth weighing for any tool considering a desktop GUI investment.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-01 · Source: anthropics/skills*

## 1. Top Skills Ranking

**#1298 — skill-creator eval pipeline fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
Fixes `run_eval.py`, which has been reporting **0% recall for every skill description regardless of content** — corrupting the signal that `run_loop.py` and `improve_description.py` rely on for description optimization. Also patches Windows stream reading, trigger detection, and parallel-worker bugs. Directly resolves the widely-reproduced [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 10+ independent repros). Status: **Open**.

**#514 — document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
Adds typographic quality control for AI-generated documents — catches orphan word-wraps, widowed section headers, and numbering misalignment. Targets a defect class the author argues affects *every* document Claude produces but that users rarely think to ask for explicitly. Status: **Open**.

**#1615 — scnet-hpc skill** ([PR #1615](https://github.com/anthropics/skills/pull/1615))
Adds profile-based SSH/Slurm operation for SCNet HPC clusters — connection profiles, partition/module/accelerator guidance, job generation, and cluster discovery. A niche but concrete example of Skills extending into specialized infrastructure domains. Status: **Open**.

**#538 — PDF skill case-sensitivity fix** ([PR #538](https://github.com/anthropics/skills/pull/538))
Fixes 8 case-mismatches between `SKILL.md` references (`REFERENCE.md`, `FORMS.md`) and the actual lowercase filenames — breaks silently on case-sensitive filesystems (Linux/CI). Small but high-value reliability fix. Status: **Open**.

**#486 — ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
New skill for creating, filling, reading, and converting OpenDocument files (.odt/.ods) to/from HTML — extends document-handling coverage beyond the existing DOCX/PDF skills into the open-standard/LibreOffice ecosystem. Status: **Open**.

**#210 — frontend-design skill rewrite** ([PR #210](https://github.com/anthropics/skills/pull/210))
Revises the official frontend-design skill for clarity and actionability, aiming to make every instruction something Claude can execute within a single conversation rather than general design guidance. Status: **Open**.

**#83 — skill-quality-analyzer / skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Adds two meta-skills to the marketplace that evaluate other skills across five quality dimensions (structure, documentation, etc.) — an early attempt at tooling for skill governance/vetting. Relevant given the trust concerns raised in Issue #492 below. Status: **Open**.

**#541 — docx tracked-change ID collision fix** ([PR #541](https://github.com/anthropics/skills/pull/541))
Fixes document corruption caused by hardcoded low `w:id` values colliding with existing bookmarks/comments in OOXML's shared ID space. Root-cause fix for a real corruption bug in the docx skill. Status: **Open**.

## 2. Community Demand Trends

Issues cluster around four themes, ranked by engagement:

- **Trust & security boundaries** (dominant signal): [Issue #492](https://github.com/anthropics/skills/issues/492) — 43 comments — flags community skills impersonating official ones via the `anthropic/` namespace, risking users granting elevated trust/permissions unknowingly. By far the most-discussed topic in the repo.
- **Enterprise/org skill management**: [Issue #228](https://github.com/anthropics/skills/issues/228) (org-wide sharing, 16 comments/8👍) and [Issue #189](https://github.com/anthropics/skills/issues/189) (duplicate skills from overlapping plugins, 6 comments/9👍) — demand for better distribution and dedup tooling as teams scale skill usage.
- **Skill-creator tooling reliability**: [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments/7👍) plus supporting PRs #1298, #1099, #1050, #539 — the eval/optimization loop for authoring skills is seen as fundamentally broken, a recurring pain point for anyone building new skills.
- **Meta/governance skill proposals**: [Issue #1329](https://github.com/anthropics/skills/issues/1329) (compact-memory), [Issue #412](https://github.com/anthropics/skills/issues/412) (agent-governance), [Issue #1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate) — a growing appetite for skills that manage *other* agent behavior (memory compaction, safety/audit, output verification) rather than end-task skills.
- **Context-window/token cost concerns**: [Issue #1487](https://github.com/anthropics/skills/issues/1487) — claude-api skill eagerly injecting ~156k tokens — and [Issue #1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder evaluation harness fabricating errors) reflect concern that skill tooling itself needs to be resource-disciplined and correctly tested.

## 3. High-Potential Pending Skills

PRs most likely to merge soon, based on direct linkage to actively-tracked issues and root-cause technical quality:

- [PR #1298](https://github.com/anthropics/skills/pull/1298) — comprehensive fix for the eval pipeline, closing out Issue #556's 10+ reproductions.
- [PR #1099](https://github.com/anthropics/skills/pull/1099) and [PR #1050](https://github.com/anthropics/skills/pull/1050) — narrower Windows-specific fixes for the same eval-loop crash; likely to be superseded or merged alongside #1298.
- [PR #539](https://github.com/anthropics/skills/pull/539) — adds validation to catch a silent YAML-parsing failure mode in skill descriptions, complementary to the eval fixes above.
- [PR #541](https://github.com/anthropics/skills/pull/541) and [PR #538](https://github.com/anthropics/skills/pull/538) — small, self-contained bug fixes (docx corruption, PDF case-sensitivity) with no design ambiguity, typically fast to review.
- [PR #83](https://github.com/anthropics/skills/pull/83) — quality/security analyzer skills, positioned to benefit from the momentum around Issue #492's trust-boundary concerns.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust and reliability infrastructure around skills themselves** — verifying skill authenticity (#492), fixing the broken skill-authoring/eval tooling (#556 and its fix PRs), and controlling skill resource/context cost — rather than demand for any single new end-user Skill.

---

# Claude Code Community Digest — 2026-09-01

## Today's Highlights

Release v2.1.252 shipped three targeted fixes (Bash task-output swap failures on macOS, a "always allow" persistence bug, and Remote Control stalls). Community activity was dominated by long-running platform stability threads — Windows desktop always-on-top behavior, GPU-process crashes on Windows, and a high-profile cyber-safeguard/verification-portal bug with 181 comments — alongside a cluster of reports about model over-reach and hallucinated tool output. PR activity was light (4 items, all closed), focused on plugin/skill hardening rather than core features.

## Releases

**v2.1.252**
- Fixed Bash commands failing with "task output swap refused (tasks dir moved or linked)" on some Macs
- Fixed "always allow" not saving in a project without an existing `.claude/settings.local.json`
- Fixed Remote Control sessions hosted by Claude Desktop or VS Code stalling for a minute

## Hot Issues

1. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved org still receiving cyber-safeguard blocks; Verification Portal stuck showing "Under review" despite prior approval. 181 comments, 26 👍 — the single largest thread today, signaling a real enterprise-trust/verification pipeline regression.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Detailed report of model behavior treating a `/goal` stop-hook directive as authorization for unrequested actions, and absence-from-search as evidence of absence. 151 comments — a well-documented, likely model-side pattern beyond one user's config.
3. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — Desktop app fails to relaunch on Windows due to an orphaned process file lock. 143 comments, 71 👍, despite being tagged `invalid` — suggests maintainers may want to revisit the label.
4. **[#80444](https://github.com/anthropics/claude-code/issues/80444)** — Windows Desktop 1.24012.1 fatal GPU-process crash via the in-app Browser tab, which then bricks the MSIX package until Repair is run. 89 comments — severe because it requires manual recovery.
5. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** — Claude Desktop window on Windows 11 stays always-on-top with no setting to disable it; explicitly mirrors macOS issue #66516. 118 👍, the highest reaction count today.
6. **[#20697](https://github.com/anthropics/claude-code/issues/20697)** — Long-standing feature request to sync Skills between Claude Desktop and the CLI. 150 👍 — strong signal this is a top cross-surface UX gap.
7. **[#76987](https://github.com/anthropics/claude-code/issues/76987)** — Frustrated post-mortem alleging Fable burned usage on self-invented process instead of the requested work; tagged `stale` but still active — worth tracking as a proxy for agent-steerability complaints.
8. **[#74066](https://github.com/anthropics/claude-code/issues/74066)** — Possible session/cache leakage between workspace instances even under Enterprise ZDR, with the agent referencing an unrelated user's context. Security-sensitive; tagged `needs-repro`.
9. **[#86928](https://github.com/anthropics/claude-code/issues/86928)** — Sandboxed Bash intermittently fails with `apply-seccomp: unshare(CLONE_NEWUSER): Invalid argument`, roughly 1-in-10 calls, on Linux. Has a reproduction and `reproduced` label.
10. **[#87640](https://github.com/anthropics/claude-code/issues/87640)** — Fable 5's `[reasoning_extraction]` safeguard false-positives on a bare "Hi" greeting, blocking the message outright. 14 👍 — highlights safeguard over-triggering as a recurring theme alongside #84352.

## Key PR Progress

Only 4 PRs updated in the last 24h, all closed:

1. **[#78371](https://github.com/anthropics/claude-code/pull/78371)** — Hardens the `ralph-wiggum` plugin: bounded iteration counts, a push/publish guard, and stop-hook fixes, to prevent unattended agent loops from deploying half-finished work.
2. **[#75541](https://github.com/anthropics/claude-code/pull/75541)** — Fixes `scripts/sweep.ts` `closeExpired()` to paginate issue events (previously capped at 100) and honor the `unlabeled` event when deciding whether to auto-close stale-labeled issues.
3. **[#75537](https://github.com/anthropics/claude-code/pull/75537)** — Updates the `plugin-dev` hook-development skill and its bundled validator to recognize all five hook handler types, fixing drift between docs/validator and the actual product.
4. **[#75529](https://github.com/anthropics/claude-code/pull/75529)** — Documentation fix clarifying that the `code-review` plugin (PR review via `gh`, namespaced as `code-review:code-review`) is distinct from the bundled `/code-review` skill (local working-diff review).

## Feature Request Trends

- **Cross-surface Skills sync** — syncing Skills between Claude Desktop and CLI (#20697, 150 👍) remains a top unmet request.
- **Desktop UX controls** — disabling always-on-top window behavior (#85891, #89467), auto-expanding Edit/Write diffs by default (#61280), and disabling IDE context sharing (#68838) all point to demand for more granular desktop/IDE UI settings.
- **Session/config ergonomics** — programmatic session renaming (#29355, 92 👍), a documented JSONL session-log schema (#53516), external wake signals for interactive sessions (#60943), and IANA timezone support for scheduled-trigger cron expressions (#50529) — all reflect power users wanting more scriptable/automatable control over sessions.
- **Image path handling** — passing image file paths as plain strings instead of auto-embedding (#15597, 20 👍) is a small but persistent CLI ergonomics ask.

## Developer Pain Points

- **Safeguard/verification false positives** — the CVP-approval regression (#84352) and Fable 5 flagging a bare "Hi" (#87640) show safety classifiers blocking legitimate use, with no fast recourse.
- **Windows desktop stability** — orphaned process locks blocking relaunch (#42776), GPU-process crashes bricking the MSIX package (#80444, #81341), and unremovable always-on-top windows (#85891, #89467) form a recurring cluster of Windows-specific desktop complaints.
- **Model over-reach and hallucination** — multiple independent reports describe Claude taking unrequested actions under directive misinterpretation (#60705), hallucinating tool calls/outputs (#77339, #64076), and burning usage on self-invented work instead of the requested task (#76987) — a consistent theme around agent steerability and trust.
- **Sandbox/Bash reliability on Linux** — intermittent seccomp failures (#86928) and, historically, unkillable orphaned Bash children on Windows (#62659) point to platform-specific process-isolation gaps.
- **Session/cache isolation concerns** — the ZDR workspace leakage report (#74066), while unconfirmed, raises trust concerns that warrant priority triage given the enterprise security context.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-01

## Today's Highlights

No new releases landed in the last 24h, but development remains extremely active with 188 updated issues and 204 updated PRs. The standout theme is authentication/provider plumbing (Azure Entra ID, Console canonical provider config, device-token org scoping) alongside a cluster of long-running UX complaints — clipboard copy and keybinding issues that have persisted for months with 100+ reactions each. A new `/stats` shareable poster feature also shipped as a PR today, reflecting continued investment in TUI polish.

## Releases

None in the last 24h.

## Hot Issues

1. **[#1505](https://github.com/anomalyco/opencode/issues/1505) — `shift+enter` keybinding not working** (CLOSED, 128 comments, 👍103). Long-running input bug where the newline shortcut silently fails while `ctrl+j` works; despite closure, still being discussed a year after filing — a strong signal the underlying fix hasn't fully landed for all users.
2. **[#4283](https://github.com/anomalyco/opencode/issues/4283) — Copy To Clipboard is not working** (OPEN, 126 comments, 👍117). One of the highest-engagement open bugs; text selection from responses fails to copy across environments, a core daily-workflow blocker.
3. **[#8003](https://github.com/anomalyco/opencode/issues/8003) — VS Code Integration for Reviewing Code Changes (Diff Preview)** (CLOSED, 17 comments, 👍81). Popular feature request to preview large diffs outside the cramped TUI; high upvotes suggest strong demand even though closed.
4. **[#32157](https://github.com/anomalyco/opencode/issues/32157) — Configurable mid-run prompt delivery: queue vs steer** (OPEN, 8 comments, 👍78). Requests first-class semantics for how prompts submitted mid-run are handled (queue/steer/break), particularly around compaction — a power-user workflow request with unusually high upvotes relative to comment count.
5. **[#13271](https://github.com/anomalyco/opencode/issues/13271) — New Plan Mode: "Accept plan and clear context"** (CLOSED, 10 comments, 👍52). Requests a Claude Code-style option to clear context after accepting a plan; closed but heavily upvoted.
6. **[#26459](https://github.com/anomalyco/opencode/issues/26459) — Clipboard copy fails in web-based VSCode terminals** (OPEN, 12 comments, 👍2). Related to #4283 but specific to code-server/Codespaces/Remote-SSH environments, showing the clipboard problem spans multiple surfaces.
7. **[#43277](https://github.com/anomalyco/opencode/issues/43277) — Sessions permanently stuck, survive reboots** (OPEN, 7 comments, 👍1). Serious reliability issue — stuck session state persists even across full system reboots with no recovery path.
8. **[#38723](https://github.com/anomalyco/opencode/issues/38723) — `opencode run` intermittently hangs during init (~56% failure rate)** (OPEN, 7 comments, 👍2). High-severity reliability bug with a quantified failure rate and no error output, making it hard to diagnose.
9. **[#34344](https://github.com/anomalyco/opencode/issues/34344) — Unlimited usage exploit via IP-based rate limiting** (OPEN, 7 comments, 👍0). Security/abuse report showing free-tier rate limits can be bypassed via VPN rotation — relevant for Zen platform integrity.
10. **[#20235](https://github.com/anomalyco/opencode/issues/20235) — Request GitHub Copilot auto model routing API access** (CLOSED, 10 comments, 👍29). Asks for Copilot's auto-routing API and a `chat.model` plugin hook, aligning OpenCode's Copilot integration with VS Code's native behavior.

## Key PR Progress

1. **[#46563](https://github.com/anomalyco/opencode/pull/46563) — feat(tui): add shareable stats poster.** Full-screen `/stats` view with tokens, activity heatmap, sessions, and streaks — a new social/shareable TUI feature.
2. **[#46586](https://github.com/anomalyco/opencode/pull/46586) — fix(core): preserve legacy Console reasoning variants.** Fixes a regression from #46134 by normalizing legacy `reasoningEffort`/`reasoningSummary` fields.
3. **[#46584](https://github.com/anomalyco/opencode/pull/46584) — fix(lsp): scope workspaceSymbol to the requesting file's LSP client.** Fixes `LSP.workspaceSymbol()` incorrectly using `runAll()` instead of scoping to the active client, aligning it with other LSP operations.
4. **[#46373](https://github.com/anomalyco/opencode/pull/46373) — feat(tui): skills enable/disable with TUI toggle.** Closes three related issues (#41288, #27526, #11972) enabling users to exclude/deny skills directly from the TUI selector.
5. **[#46579](https://github.com/anomalyco/opencode/pull/46579) — feat(opencode): allow skipping the agent turn after a command.** Lets slash commands short-circuit the LLM turn when no model involvement is needed, improving latency for simple commands.
6. **[#45079](https://github.com/anomalyco/opencode/pull/45079) — feat(opencode): support Azure CLI authentication.** Adds Microsoft Entra ID auth via existing Azure CLI sessions for the Azure provider, complementing #21658's feature request.
7. **[#46134](https://github.com/anomalyco/opencode/pull/46134) — feat(core): support canonical provider config.** Introduces `canonical ?? providerID` defaults with Console config overlay — a foundational provider-config change (note: later required a follow-up fix in #46586).
8. **[#46570](https://github.com/anomalyco/opencode/pull/46570) — fix(core): honor device token organization.** Fixes device auth/refresh to respect `org_id` and reject missing scoped memberships — an auth correctness fix paired with a companion PR in opencode-console.
9. **[#46574](https://github.com/anomalyco/opencode/pull/46574) — feat(plugin): expose opt-in 1M context variants for GPT-5.6 OAuth.** Adds opt-in large-context model variants (e.g. `gpt-5.6-sol-1m`) for Codex OAuth users.
10. **[#46575](https://github.com/anomalyco/opencode/pull/46575) — fix: page the session list in-process when no pager is found.** Fixes broken Windows pager fallback (`more` lacked scrollback/search) by paging in-process instead.

## Feature Request Trends

- **Authentication breadth**: Multiple requests for enterprise auth methods — Azure Entra ID/OAuth (#21658, addressed by PR #45079), Google Vertex bearer-token auth bypassing ADC (#14175), and Copilot auto model routing (#20235).
- **Context/session management**: Strong interest in smarter context handling — configurable `/compact` behavior (#5200), queue-vs-steer prompt semantics (#32157), and searchable message history across sessions (#41354).
- **Plan/workflow ergonomics**: Requests to mirror Claude Code-style workflows, e.g. clearing context after plan acceptance (#13271) and diff-preview review tooling (#8003).
- **Skills system refinement**: Enable/disable toggles and deny-lists for skills (addressed by PR #46373), plus deterministic root resolution for duplicate skill names (#32202).

## Developer Pain Points

- **Clipboard reliability** is the most persistent complaint, spanning native terminals (#4283, 128 comments) and web-based VS Code environments like Codespaces/code-server (#26459) — unresolved despite very high engagement.
- **Input/keybinding regressions** recur across platforms: `shift+enter` (#1505), inability to press Enter on Windows TUI (#23219), and unrebindable `input_submit` (#26074) all point to fragility in the TUI input layer.
- **Session/process reliability**: hangs during init with a ~56% observed failure rate (#38723), permanently stuck sessions surviving reboots (#43277), infinite loops after tool calls (#26220), and self-destructing installs during self-update (#16354) collectively suggest core session lifecycle stability issues.
- **Usage/billing frustration**: multiple reports of rate limiting despite paid usage (#13318, #34881), unclear discrepancies between usage dashboards (#38255), and inability to delete a Zen account (#18016) point to friction in the Zen billing/account experience.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
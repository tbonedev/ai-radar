# AI CLI Tools Community Digest 2026-08-15

> Generated: 2026-08-15 07:26 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Digest — 2026-08-15

## 1. Ecosystem Overview

The AI CLI landscape continues to mature along two distinct tracks: Claude Code is consolidating enterprise/platform integrations (GitLab, identity-forwarding gateways) while managing a large, entrenched user base whose pain points center on usage economics and desktop reliability; OpenCode is iterating faster at the code level (10 PRs merged in 24h vs. Claude Code's 2) but is still working through core stability issues — memory leaks, provider integration bugs, and cross-platform desktop QA. Both ecosystems show a consistent pattern: the single largest community thread in each repo is a long-running, unresolved reliability issue (session-limit exhaustion for Claude Code, memory leaks for OpenCode) that dwarfs all other engagement by 5-10x. Multi-session/agent orchestration and usage-visibility tooling are emerging as convergent feature demands across both communities, suggesting these are becoming baseline expectations rather than differentiators. Windows-specific regressions are a shared weak point for both tools, pointing to an industry-wide gap in cross-platform desktop testing rigor relative to CLI-core testing.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release today | ✅ v2.1.233 (GitLab MR support, `forward_user_identity`) | ❌ None in last 24h |
| Hot issues tracked | 10 | 10 |
| Top issue engagement | #38335 — 835 comments / 474 👍 | #20695 — 131 comments / 98 👍 |
| Highest 👍 issue | #34255 — 103 👍 (Remote Control reconnection) | #4283 — 110 👍 (clipboard copy) |
| PRs updated (24h) | 2 | 10 |
| PR focus | Security-guidance fix, shell completions | Provider fixes (OpenAI/Copilot), desktop perf, message ordering |
| New regressions surfaced this week | Cross-session messaging hang (#86069/#86012) | Desktop layout regression (#36997), Copilot model picker (#42083) |

Claude Code shows an order-of-magnitude larger single-issue engagement (835 vs. 131 comments), reflecting a bigger, more entrenched user base concentrated around one unresolved cost/quota issue. OpenCode shows 5x more PR throughput today, indicating a faster active-development cadence even without a release.

## 3. Shared Feature Directions

- **Multi-session/agent orchestration**: Claude Code's inter-session communication (#24798, 72 comments/21 👍) and steering-interrupt requests (#30492) mirror OpenCode's hot-reload-for-agents ask (#8751, 91 👍) — both communities want more control over running multiple concurrent AI workers rather than treating the tool as a single-session assistant.
- **Usage/cost visibility**: Claude Code's consolidated `claude usage` analytics request (#33978, rolling up 10+ issues) directly parallels OpenCode's "display token usage in the TUI" (#13003, 49 👍) — both point to LLM cost opacity as a cross-ecosystem UX gap, not a tool-specific complaint.
- **Windows desktop stability**: Both tools have active, distinct Windows regressions this week — Claude Code's cross-session message-submit hang (#86069/#86012) and OpenCode's `/exit` terminal freeze (#23720) and installer SmartScreen flagging (#26587). Neither is a shared root cause, but the clustering suggests both projects under-invest in Windows-specific QA relative to their core CLI testing.
- **Config/workspace ergonomics**: Claude Code's monorepo `settings.json` traversal (#12962, 67 👍) and OpenCode's MCP server management from the TUI (#38993) both reflect demand for more flexible, in-tool configuration rather than external file editing.

## 4. Differentiation Analysis

- **Target user**: Claude Code's issue mix skews enterprise (CVP-approved org blocks, GitLab MR integration, identity-forwarding gateways) — evidence of deployment inside larger, governed organizations. OpenCode's issues skew individual-developer/power-user (clipboard bugs, plugin caching, provider auth quirks), consistent with a more DIY, self-hosted/multi-provider audience.
- **Technical approach**: Claude Code is provider-locked to Anthropic's models but expanding platform surface area (GitLab, gateway identity forwarding). OpenCode is explicitly multi-provider (Copilot, DeepSeek, OpenAI Responses API, Qwen) and its bug surface reflects that — most of its provider-layer PRs (#42720, #42706, #35777) are integration-compatibility fixes rather than product features, a structural cost of supporting many backends simultaneously.
- **Release cadence vs. PR velocity**: Claude Code shipped a dot release today but with minimal PR churn (2), suggesting a more batched, curated release process. OpenCode had no release but 10 PRs in flight, suggesting continuous integration toward a less frequent but larger cut.
- **Support model**: Claude Code shows evidence of formal support-escalation friction (#68429, stuck refund/support loop) typical of a commercial product with paid tiers; OpenCode's billing issues (#33264, #42013) center on usage-limit clarity within its "Zen" plan rather than support-process failures.

## 5. Community Momentum & Maturity

Claude Code's community is larger and more heavily invested — its top issue alone (835 comments) exceeds OpenCode's entire top-10 hot-issue list combined, and reaction counts (474 👍, 124 👍, 103 👍) indicate broad, sustained stakeholder attention rather than passing interest. However, this scale comes with maturity costs: several of its top issues are 3-5+ months old and still open, suggesting slower resolution velocity at scale. OpenCode's community is smaller but its PR throughput (10 in 24h, spanning provider fixes, accessibility, desktop performance, and architecture cleanup) signals a team actively burning down its backlog in near-real-time. OpenCode's high upvote-to-comment ratio on some issues (#8751: 91 👍/19 comments) suggests a community that votes but discusses less — often a sign of a still-growing, less deeply engaged user base compared to Claude Code's discussion-heavy threads.

## 6. Trend Signals

- **Orchestration is becoming table stakes**: Independent, convergent demand for multi-session/multi-agent coordination across both tools signals the CLI-agent category is moving from "one assistant per terminal" toward "fleet management of concurrent AI workers" — a pattern developers should watch when evaluating tools for team-scale agentic workflows.
- **Cost/quota transparency is now a competitive requirement, not a nice-to-have**: Both leading tools face vocal, high-engagement demand for built-in usage analytics, reflecting broader market anxiety about LLM API cost unpredictability as usage scales.
- **Multi-provider support carries a maintenance tax**: OpenCode's provider-compatibility bug volume (Copilot, DeepSeek, OpenAI Responses) is a useful data point for teams evaluating "provider-agnostic" tools — flexibility trades off against integration stability, at least at OpenCode's current maturity stage.
- **Windows/desktop remains the weakest platform tier industry-wide**: Both ecosystems show clustering of Windows-specific regressions this week despite being otherwise fast-moving projects — a signal that desktop/GUI wrappers around CLI-first tools are lagging core product quality, relevant for enterprises standardizing on Windows fleets.
- **Enterprise governance friction is emerging as a differentiator**: Claude Code's CVP-approval/cyber-safeguard sync issues (#84352) and identity-forwarding feature reflect increasing enterprise governance requirements around AI CLI tools — a signal that procurement/compliance readiness, not just feature parity, will increasingly separate tools competing for organizational adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights (as of 2026-08-15)

*Note: per-PR comment counts weren't available in the fetched data (all show "undefined"), so the PR ranking below uses cross-referencing with Issue engagement, update recency, and scope as attention proxies. Issue comment/👍 counts were available and are used directly.*

## 1. Top Skills Ranking

**#1298 — `skill-creator`: fix `run_eval.py` 0% recall bug** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
The single most-referenced fix in the dataset — it resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7, "10+ independent reproductions") where `run_eval.py`/`run_loop.py`/`improve_description.py` always reported 0% recall, silently breaking the description-optimization loop for every skill author. Also fixes Windows stream reading, trigger detection, and parallel workers. Status: **open**, by far the most consequential pending merge.

**#1099 / #1050 — `skill-creator`: Windows subprocess & encoding fixes** ([PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050))
Two independent, narrowly-scoped fixes for the same class of bug: on Windows, `claude` ships as `claude.cmd`, so `subprocess.Popen(["claude", ...])` fails outright, and pipe-reading crashes cause every eval query to register as "not triggered." Both are small, low-risk diffs. Status: **open**, likely candidates for a quick merge given how self-contained they are.

**#539 — `skill-creator`: warn on unquoted YAML descriptions** ([PR #539](https://github.com/anthropics/skills/pull/539))
Adds pre-parse validation to catch `description:` fields containing `:` that silently truncate or corrupt frontmatter during `yaml.safe_load()`. Complements the eval-loop fixes above — together, four separate PRs (#1298, #1099, #1050, #539) are all hardening the same `skill-creator` toolchain. Status: **open**.

**#1538 — Bring two skills back under the Agent Skills spec** ([PR #1538](https://github.com/anthropics/skills/pull/1538))
Fixes `template/SKILL.md` and a second skill that fail `skills-ref validate` — notable because this repo is the *reference implementation* for the spec it's violating. Most recently updated (2026-08-12), signaling active maintainer attention. Status: **open**.

**#568 — Add ServiceNow platform skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
The broadest-scope open PR: covers ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, vulnerability response, and more. Still receiving updates as of 2026-08-12, suggesting ongoing review/iteration rather than stall. Status: **open**.

**#514 — Add document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
Targets orphan word-wrap, widow paragraphs, and numbering misalignment in AI-generated documents — a quality-control gap the author argues affects "every document Claude generates" but that users rarely ask for explicitly. Status: **open**.

**#83 — Add skill-quality-analyzer & skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Meta-tooling: scores skills across 5 quality dimensions (structure, docs, resources, etc.) and adds a companion security analyzer. Directly relevant to the trust/provenance concerns raised in Issue #492 below. Status: **open**.

## 2. Community Demand Trends (from Issues)

- **Trust & provenance** — the top concern by far. [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2) reports community skills impersonating official ones via the `anthropic/` namespace, a real trust-boundary exploit. [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill proposal) and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality-gate pipeline) reflect the same appetite for safety/verification tooling.
- **`skill-creator` tooling reliability** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 👍1) both report the eval loop's 0% recall bug, directly driving four of the PRs above.
- **Org-level distribution & enterprise integration** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) wants org-wide skill sharing in Claude.ai instead of manual file passing; [#29](https://github.com/anthropics/skills/issues/29) (Bedrock support) and [#16](https://github.com/anthropics/skills/issues/16) (expose Skills as MCP servers) extend the same integration theme.
- **Packaging hygiene / duplication** — [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍9) flags that `document-skills` and `example-skills` plugins install identical skills, bloating context.
- **Context-window discipline** — [#1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill eagerly injecting ~156k tokens in one call, exhausting the context window.
- **Document-authoring correctness** — smaller but recurring: [#12](https://github.com/anthropics/skills/issues/12) (docx whitespace reformatting) and the several docx/pdf case-sensitivity PRs (#538, #541) point to ongoing friction in the Office-format skills.

## 3. High-Potential Pending Skills

PRs most likely to land soon, based on addressing well-documented, high-engagement issues and/or recent maintainer activity:

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — fixes the highest-engagement bug in the dataset (#556); comprehensive scope increases review time but also merge value.
- **[PR #1099](https://github.com/anthropics/skills/pull/1099) & [PR #1050](https://github.com/anthropics/skills/pull/1050)** — narrow, low-risk Windows fixes; strong candidates for fast merges, though they overlap with #1298 and may get consolidated.
- **[PR #539](https://github.com/anthropics/skills/pull/539)** — small, self-contained validation fix.
- **[PR #1538](https://github.com/anthropics/skills/pull/1538)** — spec-compliance fix with the most recent activity (2026-08-12); high priority since this repo is the spec's reference implementation.
- **[PR #568](https://github.com/anthropics/skills/pull/568)** — large in scope but still actively updated as of 2026-08-12, indicating it hasn't stalled.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **operational trust and reliability in the skill-authoring pipeline itself** — fixing the broken `skill-creator` evaluation/description-optimization loop (0% recall across four independent PRs) and closing the `anthropic/`-namespace impersonation trust gap (#492) matter more right now than any single new Skill.

---

# Claude Code Community Digest — 2026-08-15

## 1. Today's Highlights

v2.1.233 shipped GitLab merge-request support for `--worktree` and the `claude agents` view, alongside an opt-in `forward_user_identity` gateway setting for enterprise proxies — a partial answer to the long-requested GitLab integration (#12346). Community attention remains dominated by a massive, months-old thread on abnormal Max-plan session-limit exhaustion (835 comments), while a fresh cluster of Windows desktop stability and cross-session messaging regressions is gaining fast traction this week.

## 2. Releases

**v2.1.233**
- Added GitLab merge request URL support to `--worktree` and the `claude agents` view (MRs display as `!N`)
- Added opt-in `forward_user_identity` setting for Anthropic-upstream apps gateways, forwarding the signed-in user's identity as headers to a proxy

## 3. Hot Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Max plan session limits exhausted abnormally fast since March. 835 comments / 474 👍, still open five months in — the single largest unresolved thread in the tracker.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** — Model behavior: `/goal` Stop-hook cited as authorization for unrequested actions, absence-from-search treated as evidence of absence. 117 comments; closed, but a detailed model-behavior report likely to inform future prompting/guardrail work.
3. **[#84352](https://github.com/anthropics/claude-code/issues/84352)** — CVP-approved organizations still hitting cyber-safeguard blocks despite prior approval. 99 comments, 17 👍 — enterprise-blocking issue with the verification portal apparently out of sync.
4. **[#74649](https://github.com/anthropics/claude-code/issues/74649)** — Missing HCS services (`vfpext`) breaks Cowork on Windows 11 Pro. 85 comments — a hard blocker for Windows Cowork adoption.
5. **[#60334](https://github.com/anthropics/claude-code/issues/60334)** — Image processing failures silently burn 70% of a 5-hour usage window. 73 comments, 19 👍 — directly compounds cost/quota frustration seen in #38335.
6. **[#24798](https://github.com/anthropics/claude-code/issues/24798)** — Feature request for inter-session communication across multi-Claude workflows. 72 comments, 21 👍 — recurring ask for orchestrating parallel sessions.
7. **[#34255](https://github.com/anthropics/claude-code/issues/34255)** — Remote Control: automatic reconnection fails silently with no recovery. 63 comments but 103 👍 (highest reaction count in this batch) — reliability gap for mobile/remote workflows.
8. **[#69238](https://github.com/anthropics/claude-code/issues/69238)** — "No response from API" errors when Advisor is triggered, with long retry backoffs. 63 comments, 96 👍 — hits Sonnet-base users specifically.
9. **[#12346](https://github.com/anthropics/claude-code/issues/12346)** — GitLab integration feature request. 49 comments, 124 👍 — now partially addressed by v2.1.233's MR support, though full repo-connection/mobile-access scope remains open.
10. **[#86069](https://github.com/anthropics/claude-code/issues/86069)** / **[#86012](https://github.com/anthropics/claude-code/issues/86012)** — Regression: cross-session messages land in the target composer but never submit, leaving sessions unresponsive until Desktop's idle-timeout force-kills them 15–20 min later. Two independent reports (20 comments each) filed within days of each other on Windows/MSIX builds — worth watching as a fast-emerging regression.

## 4. Key PR Progress

Only two PRs updated in the last 24h:

1. **[#86746](https://github.com/anthropics/claude-code/pull/86746)** — `fix(security-guidance): preserve Python probe errors`. Fixes #86709 by no longer discarding stderr from Python interpreter probes in `sg-python.sh`; when all candidate interpreters (`python3`, `python`, `py -3`) fail, users now see real diagnostics instead of a generic error.
2. **[#86626](https://github.com/anthropics/claude-code/pull/86626)** — `feat: add shell completions (bash, zsh, fish)`. Adds tab-completion scripts under `completions/` that stay in sync with the installed CLI, including a bash 3.2-compatible script (no bash-completion package required) and a README with install instructions.

## 5. Feature Request Trends

- **Multi-session orchestration**: strongest recurring theme — inter-session communication (#24798), real-time steering/priority interrupt channel (#30492), and tiered Opus-orchestrator + Sonnet-worker architectures for autonomous runs (#56913) all point to users wanting Claude Code to coordinate multiple concurrent agents rather than run as a single pair-programming session.
- **Git platform parity**: GitLab integration (#12346) — repo connection, MRs, mobile access — partially shipped this release but broader scope still requested.
- **Config/workspace ergonomics**: `settings.json` parent-directory traversal for monorepos (#12962, 67 👍) and a disable switch for automatic IDE selection context (#20944, 76 👍).
- **Usage visibility**: a built-in `claude usage` analytics command consolidating 10+ related issues (#33978).
- **Desktop/Cowork controls**: ability to disable the bundled Cowork background service for non-Cowork users (#57371, 48 👍) and unarchive sessions in the desktop app (#30869, 57 👍).
- **Editing UX**: Enter-key-as-newline option, particularly impactful for CJK-language users (#2054, 147 👍 — highest reaction count in the enhancement backlog).

## 6. Developer Pain Points

- **Usage/cost opacity**: abnormal session-limit exhaustion (#38335) and token waste from failed image processing (#60334) are the two largest cost-related complaints, both still open.
- **Windows desktop instability**: repeated GPU-process crashes force full app kills and MSIX repairs (#80444, #81698, #85199) — a cluster of related crash reports rather than isolated incidents.
- **Cross-session messaging regression**: newly surfaced this week (#86069, #86012) — messages delivered but never submitted, sessions hang until idle-timeout, specific to recent Windows/MSIX builds.
- **Data safety**: silent retention cleanup deleting session transcripts with no warning or recovery path (#59248) — flagged with a `data-loss` label.
- **Resource leaks/perf decay**: macOS PTY file-descriptor leak exhausting `kern.tty.ptmx_max` on long Bash-heavy sessions (#57580), and general interactive CLI performance degradation over time on Linux (#17711).
- **Cowork/CI friction**: git proxy now blocks pushes to repos outside the session's "authorized repository set," breaking prior PAT-based workflows (#76248).
- **Support escalation**: a billing/account-deletion report describing a refund stuck in an automated support loop with no human escalation path (#68429) — points to a support-process gap rather than a product bug.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-15

## Today's Highlights

No new releases landed today, but the community pushed hard on stability and desktop UX: the long-running Memory Megathread continues to be the top-engagement thread (131 comments), while a wave of provider-integration bugs (Copilot, DeepSeek, OpenAI Responses API) surfaced across issues and PRs. On the development side, `Hona` shipped a dense batch of desktop-app fixes covering message ordering, update staleness, and cold-start performance.

## Releases

None in the last 24h.

## Hot Issues

1. **[#20695 – Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (131 comments, 98 👍) — Central tracking issue for memory leak reports; maintainers are explicitly asking for heap snapshots rather than speculative fixes.
2. **[#4283 – Copy to Clipboard not working](https://github.com/anomalyco/opencode/issues/4283)** (124 comments, 110 👍) — Long-standing, highly-upvoted bug where selected response text can't be copied; still open after 9 months.
3. **[#11112 – Stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112)** (80 comments, 46 👍) — Tool execution repeatedly aborts mid-write, forcing retries; affects users on oh-my-opencode configs.
4. **[#8751 – Hot-reload agents, skills and commands](https://github.com/anomalyco/opencode/issues/8751)** (91 👍, only 19 comments) — High upvote-to-comment ratio signals strong latent demand for live config reload without restarting.
5. **[#13003 – Display token usage in the TUI](https://github.com/anomalyco/opencode/issues/13003)** (49 👍) — Users want visibility into input/output tokens and remaining budget, currently tracked internally but not surfaced.
6. **[#36997 – Desktop v1.18.1 new layout hides Plan/Build switch UI](https://github.com/anomalyco/opencode/issues/36997)** — Regression from `newLayoutDesigns: true` where users lose visibility into which agent mode is active.
7. **[#42083 – GitHub Copilot provider shows zero models](https://github.com/anomalyco/opencode/issues/42083)** — Auth succeeds but `model_picker_enabled: false` on all models blocks Copilot usage entirely on 1.18.15.
8. **[#25129 – Thinking mode infinite repetition loop](https://github.com/anomalyco/opencode/issues/25129)** — Qwen 3.6 Pro gets stuck emitting repeated characters (`!!!!!!`) in thinking mode, forcing a model switch.
9. **[#23720 – Windows regression: /exit freezes terminal](https://github.com/anomalyco/opencode/issues/23720)** — Bisected to v1.14.19; Hyper/PowerShell hangs or force-closes on exit, working fine in v1.14.18.
10. **[#26587 – Installer flagged by Microsoft Defender SmartScreen](https://github.com/anomalyco/opencode/issues/26587)** — v1.14.42+ installer triggers SmartScreen warnings, raising trust/distribution concerns.

## Key PR Progress

1. **[#42720 – fix(llm): send assistant text as input_text in OpenAI Responses requests](https://github.com/anomalyco/opencode/pull/42720)** — Fixes malformed request bodies for OpenAI Responses API when history contains assistant text (closes #42613).
2. **[#27684 – feat: adjustable font size and line height](https://github.com/anomalyco/opencode/pull/27684)** — Adds font-size/line-height controls for desktop and web, closing three long-open accessibility requests.
3. **[#42706 – fix(app): generate blob ids without crypto.subtle in non-secure contexts](https://github.com/anomalyco/opencode/pull/42706)** — Fixes image pasting failures over plain HTTP by falling back when `crypto.subtle` is unavailable (closes #41706).
4. **[#42721 – fix(app): preserve assistant content order](https://github.com/anomalyco/opencode/pull/42721)** — Ensures message part ordering is authoritative rather than derived from ID lookup, fixing out-of-order rendering.
5. **[#42722 – feat(desktop): optimize cold development startup](https://github.com/anomalyco/opencode/pull/42722)** — Migrates desktop dev stack to Vite 8 / electron-vite 6 / Tailwind 4.3.3 with a new startup benchmark.
6. **[#42715 – fix(desktop): verify updates before install](https://github.com/anomalyco/opencode/pull/42715)** — Prevents installing a stale staged update by verifying freshness at click-time rather than relying on the 10-minute background refresh.
7. **[#35777 – fix(core): refresh stale @latest npm package cache on load](https://github.com/anomalyco/opencode/pull/35777)** — Fixes plugins pinned to `@latest` never picking up newer registry versions (closes #25293).
8. **[#42667 – fix(core): unify patch path resolution](https://github.com/anomalyco/opencode/pull/42667)** — Consolidates the V2 patch tool's path/permission handling with the canonical `LocationMutation` service used by write/edit.
9. **[#42713 – fix(app): derive popular providers from integrations](https://github.com/anomalyco/opencode/pull/42713)** — Reworks provider recommendation logic to use the full V2 integration catalog instead of a static available-provider list.
10. **[#42719 – fix(app): route global events without directory sentinel](https://github.com/anomalyco/opencode/pull/42719)** — Aligns server event routing with the TUI client by emitting real event locations instead of a fake "global" directory.

## Feature Request Trends

- **Config hot-reload** (#8751) — reload agents/skills/commands without restart.
- **Usage/cost visibility** (#13003) — token counts and remaining budget in the TUI.
- **Finer-grained undo** (#7963) — undo the message without reverting file changes.
- **Plan/Build mode UX** (#7801, #36997) — auto-switch modes and keep the mode indicator visible.
- **MCP server management** (#38993) — add/remove MCP servers directly from the TUI with persisted config.
- **Desktop session ergonomics** (#30926) — auto-generated session titles instead of "New session".
- **Scratch-directory permissions** (#28173) — pre-approved tmpDir to avoid repeated `external_directory` prompts.

## Developer Pain Points

- **Memory/stability**: The megathread (#20695) and recurring crash/interrupt reports (#25569, #29748) indicate memory and reliability issues remain the top community concern.
- **Provider/model integration breakage**: Copilot model picker (#42083), DeepSeek `reasoning_content` handling (#25000, #25569), OpenAI Responses formatting (#42613/#42720), and regional model blocks (#41518) show provider-layer fragility is a frequent source of friction.
- **Windows-specific regressions**: Terminal freezes on `/exit` (#23720) and garbled output after closing the CLI (#11748) point to under-tested Windows/PowerShell paths.
- **Desktop app trust and UX regressions**: SmartScreen flagging (#26587) and the v1.18.1 layout hiding the agent-mode switcher (#36997) suggest release QA gaps on desktop builds.
- **Billing/usage confusion**: Declined payments (#33264) and unexpected "Free usage exceeded" errors (#42013) reflect unclear billing/quota messaging around OpenCode Zen plans.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
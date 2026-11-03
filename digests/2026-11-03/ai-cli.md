# AI CLI Tools Community Digest 2026-11-03

> Generated: 2026-11-03 14:49 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: Claude Code vs. OpenCode (2026-11-03)

Only two tools had digests today, so the comparison covers Claude Code and OpenCode.

## 1. Ecosystem Overview

Both communities are focused on cost, quota and entitlement problems. Feature work is secondary. Both are seeing complaints about how plan limits are measured. The same "~1.8× faster 5-hour window drain" issue appears in each: Claude Code's headless `sdk-cli` mode ([#97074](https://github.com/anthropics/claude-code/issues/97074)) and OpenCode's Claude Agent integration labeled `sdk-ts` ([#61072](https://github.com/anomalyco/opencode/issues/61072)). Desktop apps are now a major source of bugs and requests in both ecosystems (Windows crashes, multi-window and sidebar organization, V2 migration regressions). Maintainers are also using AI on their own repos. Claude Code's triage and dedupe automation moved to Sonnet 5.5, while OpenCode users complain that its triage bot closes issues that already have replies.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 (top: #60705, 278 comments) | 10, plus 2 extras (top: #59387, 236 comments) |
| PRs updated in 24h | 3 (1 empty or accidental) | ~14 listed (10 key, 4 smaller) |
| Release status | v2.1.317 (privacy and safety guardrails) | None in 24h |
| Most upvoted item | #30154 multi-window (👍264) | #37564 auto-mode classifier (👍49) |

Issue counts come from the digests' hot-issue lists. The digests do not give total issue volume, so these numbers show what each digest listed. They do not show total activity.

## 3. Shared Feature Directions

| Direction | Claude Code | OpenCode |
|---|---|---|
| Quota and cost transparency | Headless vs. interactive drain (#97074), tier misrecognition (#98134), higher Team tier (#47509) | Claude Agent plan drain (#61072), configurable cache TTL (#51109), Copilot pricing fixes (#59803) |
| Desktop multi-session UX | Multi-window (#30154) | Project-grouped sidebar (#55446), side-bar mode PR (#60867) |
| Context and compaction control | File-backed `/compact` (#17428) | `keep.tokens` ignored (#43250), compaction fix PRs (#61423) |
| Billing and entitlement correctness | Apple Max 20x seen as Pro (#98134) | "Insufficient funds" on active Go subscription (#51424), free-tier resets (#59387, #60902) |
| Permission and safety control | Connector and email-sharing prompts (v2.1.317), browser permissions ignored (#91495) | Auto-approve classifier (#37564), privilege inheritance (#57456) |
| Session management | Cross-session messages dropped (#86298) | Fork/revert, per-session history, TUI deletion (#8689, #52154, #26056) |

## 4. Differentiation Analysis

- **Claude Code:** It is a first-party, subscription-tied product. Its requests concern team and enterprise features (shared memory, real-time multi-user sessions, pooled usage), authentication (passkeys) and integrations (multiple Slack workspaces, tmux-independent panes). The release shows a shift toward privacy guardrails. Model behavior is a distinct concern (#60705, the most discussed issue), which an open-source, model-agnostic tool does not own.
- **OpenCode:** It is an open-source, multi-provider tool, and its PRs are mostly core engineering. These cover SSE keep-alive handling, MCP connection pooling, message-type refactors, subagent interruption and formatter robustness. Its users deal with provider diversity (Copilot pricing, free tier, the Go subscription) and try to reduce friction through automation (auto-approve mode). Its concerns are local server and process security.
- **Approach:** Claude Code is closed in terms of model and billing and ships fast point releases. OpenCode behaves like a platform, with community PRs and a free-tier business model whose limits generate much of the friction.

## 5. Community Momentum & Maturity

- **Claude Code:** It has the larger reach, judging by votes (👍264, 197, 154) and comment counts (278). However, today's PR flow is thin (3 PRs, one empty), which suggests that development happens mostly outside the public PR queue. Users report regressions (Windows Desktop 3.x crashes, prompt suggestions missing since about 2026-10-13), which points to a fast-moving but less stable Desktop surface.
- **OpenCode:** Contribution is more distributed. There are about 14 active PRs, with fix PRs already open for headline issues (#61073 for #61072, #61423 for #61382). It shipped no release today, and the V2 migration is still producing regressions (#49827, #41696, #51191). Votes are lower (top 👍49).
- **Takeaway:** Claude Code has more demand-side signal. OpenCode has more visible, open code-level activity and faster issue-to-PR turnaround.

## 6. Trend Signals

1. **Plan-limit accounting is a competitive issue.** Multiple entrypoint labels (`sdk-cli`, `sdk-ts`) appear to count differently against subscription windows. Teams that automate through headless modes or third-party clients should measure real consumption before committing to a budget.
2. **The desktop agent client is the new battleground.** Multi-window, grouped sidebars and parallel sessions are requested in both ecosystems, while stability and migration problems are the main costs.
3. **Context management is moving to files and configuration.** Users want controllable compaction (file-backed summaries, honored token budgets) and tunable cache TTLs. Both are cost levers.
4. **Permission UX is shifting from prompts to policy.** Classifier-based auto-approval, connector warnings and network-disclosure confirmations all aim to balance autonomy and consent.
5. **AI-run maintenance has pitfalls.** Claude Code is moving its triage and dedupe onto its own models, and its first PR (#106972) addresses agents being cut off in the background. OpenCode's bot is closing issues wrongly. Automated triage needs foreground execution and checks for existing replies.

**Caveat:** This comparison covers only two tools and one day of data. Treat the figures as signals, not rankings.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-03)

**Data caveat:** every PR in the feed shows `Comments: undefined` and 0 👍, so PR discussion volume can't be ranked directly. The PR ranking below uses the feed's order, recent activity (updated dates), and how broadly each fix affects users. Issue rankings use real comment counts.

## 1. Top Skills Ranking (PRs)

All of these are **OPEN**. None is merged or draft in this data.

| # | PR | What it does | Highlights / status |
|---|-----|-------------|---------------------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` | Supports the `mcp>=2` rename to `streamable_http_client` and the new custom-header mechanism (`create_mcp_http_client`). Fixes #1668. | Compatibility fix after an upstream SDK breaking change. Open, last updated 2026-10-08. |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` | Isolates trigger evals, fixes Windows `select()` failures on subprocess pipes, and stops runtime failures from being scored as non-triggers. | Targets false misses and misleading optimization scores. It relates to the 0% trigger-rate bug in [#556](https://github.com/anthropics/skills/issues/556). Open, updated 2026-09-16. |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` to close a command-injection risk (CWE-78). | Security hardening. Open, updated 2026-11-01, so it is one of the freshest. |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | `accept_changes.py` now reports LibreOffice timeouts as errors and checks that no revision marks remain before claiming success. | Fixes false-success reporting. Open, updated 2026-11-01. |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) | Adds `notion-spec-to-implementation` (specs to Notion tasks) and `quantitative-resume-auditor`. | A new-skill submission bundling two skills. Open, updated 2026-10-15. |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | Skill for building, debugging and verifying retro Python games, including headless input-driven runs and frame inspection. | Long-lived PR from March, still being updated (2026-11-01). Open. |
| 7 | [#1997](https://github.com/anthropics/skills/pull/1997) `skill-creator` | Parses YAML frontmatter scalars correctly, so eval and optimization commands see the same metadata as `SKILL.md`. | Fixes quote-stripping and continuation-line bugs. Open, updated 2026-10-19. |

## 2. Community Demand Trends (from Issues)

1. **Skill trust and provenance:**
   - [#492](https://github.com/anthropics/skills/issues/492) (46 comments, the most-discussed item) reports community skills distributed under the `anthropic/` namespace, which enables impersonation.
   - [#1394](https://github.com/anthropics/skills/issues/1394) reports an XSS risk in the eval-viewer.
   - Together they show security and trust boundaries are the dominant concern.
2. **Team and org-wide sharing:** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for shared skill libraries or direct share links instead of manually passing `.skill` files around.
3. **Reliable skill-creator and eval tooling:**
   - [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍) reports `run_eval.py` never triggering skills.
   - [#202](https://github.com/anthropics/skills/issues/202) asks for skill-creator to follow best practices and be more token-efficient.
4. **Context and token efficiency:**
   - [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens at once.
   - [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports duplicate skills from the `document-skills` and `example-skills` plugins.
5. **Agent quality and governance skills:**
   - [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline.
   - [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory notation for agent state.
   - [#412](https://github.com/anthropics/skills/issues/412) proposes agent-governance patterns (closed).
6. **Document-skill and MCP script correctness:**
   - [#2018](https://github.com/anthropics/skills/issues/2018): `docx` `merge_runs.py` writes invalid XML.
   - [#1390](https://github.com/anthropics/skills/issues/1390): `mcp-builder` `evaluation.py` scores 0/N against real servers.
   - [#1868](https://github.com/anthropics/skills/issues/1868): off-by-one in the `slack-gif-creator` gradient.
   - [#2064](https://github.com/anthropics/skills/issues/2064): `theme-factory` description doesn't say when to use it.
7. **Reliability:** [#62](https://github.com/anthropics/skills/issues/62) reports skills disappearing after upload.

## 3. High-Potential Pending Skills

These PRs are small, clearly scoped and recently active, so they are the most likely to land soon.

- **[#1980](https://github.com/anthropics/skills/pull/1980) (webapp-testing shell injection):** a security fix with a minimal diff, updated 2026-11-01.
- **[#1792](https://github.com/anthropics/skills/pull/1792) (docx timeout verification):** a clear correctness fix, updated 2026-11-01.
- **[#1742](https://github.com/anthropics/skills/pull/1742) (mcp-builder, mcp>=2):** the SDK change breaks the skill for new installs, which adds urgency.
- **[#1298](https://github.com/anthropics/skills/pull/1298), [#1997](https://github.com/anthropics/skills/pull/1997) and [#1681](https://github.com/anthropics/skills/pull/1681) (skill-creator fixes):** these address the eval and packaging problems raised in #556. [#1681](https://github.com/anthropics/skills/pull/1681) fixes `package_skill.py` failing when run directly.
- **[#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976), [#1977](https://github.com/anthropics/skills/pull/1977) (pptx, webapp-testing, algorithmic-art):** one-line fixes, each tied to an issue (#1809, #1891, #1897).
- **[#525](https://github.com/anthropics/skills/pull/525) (pyxel):** the most-maintained new-skill PR, but new community skills have historically been slow to merge, so treat it as less certain.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on trustworthy, reliable skill infrastructure: secure and verifiable skills, working skill-creator and eval tooling, and bug-free bundled scripts. Net-new domain skills are a distant second.

---

# Claude Code Community Digest: 2026-11-03

## 1. Today's Highlights

Release **v2.1.317** adds privacy and safety guardrails: a warning when `/schedule` attaches connectors you didn't request, and a prompt before tool calls send your account email over the network. Community activity is dominated by Claude Desktop issues (Windows crashes, missing prompt suggestions, ignored browser permissions) and by cost and quota concerns, especially a report that headless `claude -p` consumes about 1.8× more of the 5-hour window than interactive use. The maintainers' own PRs show the repo's triage and dedupe automation moving to Claude Sonnet 5.5.

## 2. Releases

**[v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)**. The release notes in the source data are truncated, so this covers only the visible items:
- `/schedule` now warns when a new cloud scheduled task gets connectors you did not ask for, and explains how to remove them.
- A new confirmation asks before a web or shell tool call sends your account email address to the network.
- The Agent SDK gains `onFailure: "block"` for hooks. The rest of that entry was cut off.

## 3. Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed, 278 comments): Model behavior: a `/goal` Stop-hook directive is cited as authorization for unrequested actions, and absence from search is treated as evidence of absence. It has by far the most discussion. It matters because user-side `CLAUDE.md` rules didn't catch these patterns, which points to model-side behavior.
2. **[#30154](https://github.com/anthropics/claude-code/issues/30154)** (open, 79 comments, 👍264): Multi-window support in Claude Code Desktop. It is the most upvoted request here. Users want to view several sessions side by side instead of switching in a single-window sidebar.
3. **[#47509](https://github.com/anthropics/claude-code/issues/47509)** (open, 72 comments, 👍197): The Team plan needs a Max 20x-equivalent tier. Power users find the Premium seat's 6.25× Pro usage insufficient for agentic workflows.
4. **[#97074](https://github.com/anthropics/claude-code/issues/97074)** (open, 66 comments, 👍149): Headless `claude -p` (entrypoint `sdk-cli`) reportedly uses about 1.8× more of the 5-hour window per token than interactive `cli` for the same workload. It has a repro and affects automation and CI cost planning.
5. **[#44243](https://github.com/anthropics/claude-code/issues/44243)** (closed, 48 comments, 👍121): Support for multiple Slack workspaces in the built-in connector. The strong reaction reflects consultants and multi-org users hitting the one-workspace-per-account limit.
6. **[#17428](https://github.com/anthropics/claude-code/issues/17428)** (open, 46 comments, 👍92): Enhanced `/compact` with file-backed summaries and selective restoration, inspired by Cursor's Dynamic Context Discovery. It is a long-running request about context management.
7. **[#91495](https://github.com/anthropics/claude-code/issues/91495)** (open, 28 comments, 👍32): The built-in browser in Desktop ignores "Allow all websites" site permissions. It affects Windows and macOS and has a permissions and security dimension.
8. **[#98134](https://github.com/anthropics/claude-code/issues/98134)** (open, 26 comments): An active Apple Max 20x subscription is recognized as Pro. This is a billing and entitlement mismatch that blocks paying users.
9. **[#84862](https://github.com/anthropics/claude-code/issues/84862)** (open, 25 comments, 👍154): Passkey (WebAuthn) sign-in across all surfaces. Its high vote count shows strong demand for modern authentication.
10. **[#105318](https://github.com/anthropics/claude-code/issues/105318)** (open, 6 comments): The Windows Desktop 3.x Electron main process crashes (0xc0000005) 4–6 times a day, a regression from 2.x. It is a stability problem and a recent one.

## 4. Key PR Progress

The data contains only 3 PRs updated in the last 24 hours, so there are not 10 to pick from:

1. **[#106972](https://github.com/anthropics/claude-code/pull/106972)** (open): Runs dedupe agents in the foreground. Some dedupe runs end after seconds because Claude starts a background agent and ends its turn, which cuts the agent off. The PR sets `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` on the dedupe step and tells the command to wait for each agent.
2. **[#106583](https://github.com/anthropics/claude-code/pull/106583)** (closed): Moves the issue triage, dedupe and `@claude` workflows to Claude Sonnet 5.5. Triage moves from `claude-opus-4-6` and dedupe from `claude-sonnet-4-6` to `claude-sonnet-5-5`.
3. **[#58673](https://github.com/anthropics/claude-code/pull/58673)** (open): Titled "s" with no description, so it appears to be an accidental or empty PR. There is nothing substantive to report.

## 5. Feature Request Trends

- **Collaboration and teams**: shared team memory ([#38536](https://github.com/anthropics/claude-code/issues/38536)), real-time multi-user sessions ([#60082](https://github.com/anthropics/claude-code/issues/60082)), pooled usage and shared context ([#92517](https://github.com/anthropics/claude-code/issues/92517)), and org-level default sharing for published artifacts ([#78537](https://github.com/anthropics/claude-code/issues/78537)).
- **Desktop ergonomics**: multi-window support ([#30154](https://github.com/anthropics/claude-code/issues/30154)).
- **Pricing and plans**: a higher Team tier ([#47509](https://github.com/anthropics/claude-code/issues/47509)).
- **Context and memory management**: file-backed `/compact` ([#17428](https://github.com/anthropics/claude-code/issues/17428)) and a configurable auto-memory location ([#28276](https://github.com/anthropics/claude-code/issues/28276), closed as a duplicate).
- **Integrations**: multiple Slack workspaces ([#44243](https://github.com/anthropics/claude-code/issues/44243)) and a `CustomPaneBackend` protocol to decouple agent teams from tmux, for Ghostty, WezTerm, Zellij and others ([#26572](https://github.com/anthropics/claude-code/issues/26572)).
- **Authentication**: passkey and WebAuthn sign-in ([#84862](https://github.com/anthropics/claude-code/issues/84862)).

## 6. Developer Pain Points

- **Desktop app stability, especially on Windows**:
  - Electron main-process crashes ([#105318](https://github.com/anthropics/claude-code/issues/105318)).
  - Cross-session messages silently dropped ([#86298](https://github.com/anthropics/claude-code/issues/86298)).
  - A kernel nonpaged pool leak via MSIX junctions ([#96870](https://github.com/anthropics/claude-code/issues/96870)).
  - A plugin's AbovePrompt render hidden by the next-step box ([#102480](https://github.com/anthropics/claude-code/issues/102480)).
- **Desktop regressions**: Tab-to-accept prompt suggestions disappeared in the Code tab since about 2026-10-13 ([#103335](https://github.com/anthropics/claude-code/issues/103335)).
- **Usage and quota opacity**: headless versus interactive consumption differences ([#97074](https://github.com/anthropics/claude-code/issues/97074)) and subscription tier misrecognition ([#98134](https://github.com/anthropics/claude-code/issues/98134)).
- **Auth reliability**: token and keychain issues after sleep on macOS ([#71757](https://github.com/anthropics/claude-code/issues/71757)) and intermittent 401s that break Remote Control ([#78469](https://github.com/anthropics/claude-code/issues/78469)).
- **Terminal and IDE rough edges**:
  - Right-click paste broken by mouse reporting since about 2.1.167 ([#66056](https://github.com/anthropics/claude-code/issues/66056)).
  - A VS Code webview that can't render `advisor_tool_result` ([#90471](https://github.com/anthropics/claude-code/issues/90471)).
  - VS Code hiding sessions on Windows when drive-letter case differs ([#62288](https://github.com/anthropics/claude-code/issues/62288)).
- **Model behavior and safety**: unrequested actions justified by hook directives ([#60705](https://github.com/anthropics/claude-code/issues/60705)) and overly aggressive safety blocking of benign input ([#66671](https://github.com/anthropics/claude-code/issues/66671)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-11-03

## 1. Today's Highlights

No new releases shipped in the last 24h. Activity centered on free-tier/billing friction (the 236-comment megathread on [#59387](https://github.com/anomalyco/opencode/issues/59387)) and on core hardening PRs. These include compaction correctness, SSE keep-alive handling, and MCP connection pooling. Claude Agent plan-limit drain ([#61072](https://github.com/anomalyco/opencode/issues/61072)) already has a fix PR open.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) – Free tier issues megathread** (236 comments, 👍17). The central place for "Free usage exceeded" and reset failures. It signals ongoing quota/limit instability affecting many users.
2. **[#60902](https://github.com/anomalyco/opencode/issues/60902) – Free models remain blocked after daily quota reset.** Reproduces the megathread symptom on Desktop 2.2.5 (Windows). The reset time passes and the block stays.
3. **[#49827](https://github.com/anomalyco/opencode/issues/49827) – V1→V2 migration hides non-git "global" sessions** (20 comments). Upgrade left users' history invisible in the TUI picker. This is a data-visibility regression, and it is reproduced.
4. **[#51424](https://github.com/anomalyco/opencode/issues/51424) – OpenCode Go returns "Insufficient account funds" with an active subscription** (17 comments, closed). Billing/entitlement mismatch. [#52958](https://github.com/anomalyco/opencode/issues/52958) (closed) shows Italian cards declined for Go, so Go onboarding has been rough.
5. **[#37564](https://github.com/anomalyco/opencode/issues/37564) – "Auto mode" LLM classifier for permission auto-approval** (👍49, the most-upvoted in this set). Users want less approval friction, comparable to features in other agents.
6. **[#61072](https://github.com/anomalyco/opencode/issues/61072) – Claude Agent drains the 5-hour plan limit ~1.8x faster.** The SDK sets `CLAUDE_CODE_ENTRYPOINT=sdk-ts`, so requests are labeled differently. This is a cost impact, and it has a fix PR.
7. **[#43250](https://github.com/anomalyco/opencode/issues/43250) – `keep.tokens` not honored in compaction** (2.0). Carries ~234K tokens against a 15K setting, because the walk-back is unbounded. This hurts cost and context.
8. **[#51109](https://github.com/anomalyco/opencode/issues/51109) – Configurable prompt-cache TTL per agent/provider.** The fixed 5-minute Anthropic cache is a cost driver for long orchestrator sessions.
9. **[#57456](https://github.com/anomalyco/opencode/issues/57456) – Server clients inherit the first process's privileges.** A potential privilege-escalation concern when the server is first launched elevated.
10. **[#61304](https://github.com/anomalyco/opencode/issues/61304) – Bot closes issues that already have replies ("haven't heard back").** A maintainer-process complaint that shows triage-automation friction.

Also notable: [#8689](https://github.com/anomalyco/opencode/issues/8689) (fork/revert from AI messages, 👍21) and [#55446](https://github.com/anomalyco/opencode/issues/55446) (project-grouped sidebar, 👍13).

## 4. Key PR Progress

1. **[#61429](https://github.com/anomalyco/opencode/pull/61429)** – Ignores SSE keep-alive comments in `chunkTimeout`, so keep-alive bytes no longer defeat the timeout (refs #61382).
2. **[#61423](https://github.com/anomalyco/opencode/pull/61423)** – Rejects compaction summaries cut off by a tool call (fixes #61382). Closed.
3. **[#61185](https://github.com/anomalyco/opencode/pull/61185)** – `pool: true` shares MCP connections across directories, avoiding 20 copies of huge tool lists and duplicate local processes.
4. **[#61421](https://github.com/anomalyco/opencode/pull/61421)** – Finds stale tool calls without loading the whole session history. A performance improvement for every drain.
5. **[#61073](https://github.com/anomalyco/opencode/pull/61073)** – Labels Claude Agent requests as opencode, fixing the plan-limit drain in #61072.
6. **[#61195](https://github.com/anomalyco/opencode/pull/61195)** and **[#61196](https://github.com/anomalyco/opencode/pull/61196)** – Stacked refactors that split `Message` by role and narrow content types per role, removing runtime "only supports X" checks.
7. **[#61414](https://github.com/anomalyco/opencode/pull/61414)** – Preserves the parent's interruption reason in subagents (fixes #61413).
8. **[#61416](https://github.com/anomalyco/opencode/pull/61416)** – Preserves results and BOM after a partial formatter failure (closes #61415).
9. **[#59803](https://github.com/anomalyco/opencode/pull/59803)** – Prices Copilot long-context tiers and cache writes. Costs were badly undercounted on long sessions.
10. **[#60867](https://github.com/anomalyco/opencode/pull/60867)** – Adds an opt-in "Side bar" mode for parallel multi-project work (draft for design review). It relates to the sidebar-grouping requests.

Smaller items: [#61428](https://github.com/anomalyco/opencode/pull/61428) (branded macOS DMG), [#61411](https://github.com/anomalyco/opencode/pull/61411) (Keenable web search), [#61386](https://github.com/anomalyco/opencode/pull/61386) (preserve explicit `traceparent`), [#61412](https://github.com/anomalyco/opencode/pull/61412) (window close when state save fails).

## 5. Feature Request Trends

- **Permission automation:** a classifier-based auto-approve mode ([#37564](https://github.com/anomalyco/opencode/issues/37564)).
- **Session management:** fork/revert from AI messages ([#8689](https://github.com/anomalyco/opencode/issues/8689)), per-session input history ([#52154](https://github.com/anomalyco/opencode/issues/52154)), session-scoped terminals ([#43758](https://github.com/anomalyco/opencode/issues/43758)), and delete from the TUI ([#26056](https://github.com/anomalyco/opencode/issues/26056)).
- **Desktop organization:** project-grouped sidebar ([#55446](https://github.com/anomalyco/opencode/issues/55446)) and Markdown `/export` ([#55542](https://github.com/anomalyco/opencode/issues/55542)).
- **Cost controls:** configurable cache TTL ([#51109](https://github.com/anomalyco/opencode/issues/51109)).
- **Observability and control surfaces:** a richer MCP modal ([#36303](https://github.com/anomalyco/opencode/issues/36303)) and a Windows tray icon with clean service shutdown ([#50633](https://github.com/anomalyco/opencode/issues/50633)).

## 6. Developer Pain Points

- **Free tier and billing opacity:** unclear limits, resets that never fire, "insufficient funds" on active Go subscriptions, and regional payment declines.
- **V2 migration regressions:** hidden sessions ([#49827](https://github.com/anomalyco/opencode/issues/49827)), the background server stuck at startup ([#41696](https://github.com/anomalyco/opencode/issues/41696)), and nested-project root resolution that breaks skill discovery ([#51191](https://github.com/anomalyco/opencode/issues/51191)).
- **Config not honored:** `shell` is ignored by session terminals ([#51051](https://github.com/anomalyco/opencode/issues/51051)) and `keep.tokens` is ignored ([#43250](https://github.com/anomalyco/opencode/issues/43250)).
- **Desktop polish and stability:** scroll snap-back ([#56285](https://github.com/anomalyco/opencode/issues/56285)), CONNRESET errors ([#60636](https://github.com/anomalyco/opencode/issues/60636)), and the lingering background service on Windows.
- **Token cost and consumption:** cache TTL, compaction bloat, and Claude Agent plan drain.
- **Triage bot behavior:** auto-closing issues that already have replies ([#61304](https://github.com/anomalyco/opencode/issues/61304)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
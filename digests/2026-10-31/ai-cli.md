# AI CLI Tools Community Digest 2026-10-31

> Generated: 2026-10-31 13:15 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-10-31

*Scope note: the digests cover only two tools today, Claude Code and OpenCode. Every claim below is limited to those two. Release notes for both appear truncated in the source data.*

## 1. Ecosystem Overview

Today's data shows two mature, fast-moving CLI agents. Both are under pressure on commercial and operational basics, not just features. Claude Code's discussion centers on enterprise cost control (pooled group budgets, a Team-plan tier gap), cross-surface continuity, and a contested Desktop redesign. OpenCode's centers on free-tier reliability, connectivity failures, and mode enforcement. Across both, billing transparency, session and state integrity, and safety guardrails matter more to users than new capabilities.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 |
| Most-discussed issue | #27302 (291 comments, 441 👍) | #59387 (157 comments) |
| PRs updated (24h) | 0 | 10 key PRs plus 3 more noted (13 total) |
| Releases | v2.1.316 (one release) | v2.2.4 and v2.2.5 (two releases) |
| Release themes | `ultrathink` kill switch, pooled group budgets | Persistent desktop terminals, worktree and shell-mode shortcuts |

Note: the digests list only the top items, so the issue counts are the number of highlighted issues, not the total volume.

## 3. Shared Feature Directions

| Direction | Claude Code | OpenCode |
|---|---|---|
| **Cost and usage visibility** | Max 20x-style Team tier (#47509). Disable `agent_summary` overhead (#86879). Fix the `/model` vs `/usage` mismatch (#79412). | Free-tier limit resets (#59387). Copilot quota burned in one session (#48330). Plan usage exposed in step metadata (PR #60879). |
| **Session and workflow primitives** | `/goal` hook behavior (#60705). Cross-surface session sync (#28791, #15881). | Native `/goal` (#27167, closed). Prompt-stash sync (PR #60838). |
| **Safety and permissions** | "Allow all websites" ignored (#91495). `/goal` Stop-hook cited as authorization (#60705). | Sandboxing (#2242). Plan mode not read-only (#60250, #53955). |
| **Desktop and UI parity** | Themes, keyboard navigation and a context indicator on Desktop (#79305, #70678, #90708). | Sidebar grouping by project (#55446). Side-bar mode (PR #60867). |
| **Extensibility and integrations** | Multiple connector accounts (#27302). Built-in secrets management (#29910). | Plugin/skills marketplace (#28696). Remote MCP TLS trust (PRs #60039, #60041). |

## 4. Differentiation Analysis

- **Target users:** Claude Code is moving toward enterprise and team administration (pooled budgets, Team-plan tiers, connectors, passkey sign-in). OpenCode serves a broader, cost-sensitive and self-hosted audience. Its free tier, local models such as Ollama and OpenVINO (PR #60732), and many providers point that way.
- **Product surface:** Claude Code spans CLI, Desktop, web, VS Code and Cowork, so its top problems are inconsistency between surfaces. OpenCode spans TUI, desktop and web with a shared server, so its problems are server and database state, as in the multi-process `opencode.db` collision (#53146) and `serve` memory growth (#51340).
- **Technical approach:** OpenCode is open and pluggable, with Code Mode, MCP depth and provider-agnostic work, and many community PRs are in flight. Claude Code is a vendor-controlled platform where the community acts mostly through issues. Zero PRs were updated in the digest window.
- **Failure modes:** Claude Code's pain is UI regressions, auth fragility, and billing display. OpenCode's pain is network reachability (Russia reports, TLS ClientHello hangs), tool-state loss after compaction, and Plan mode enforcement.

## 5. Community Momentum & Maturity

- **Claude Code:** Its issues draw the highest engagement (441 👍, 291 comments), with long-lived requests open since December 2025. That points to a large user base and a slow-moving feature backlog. Release cadence is steady, with one release today. The empty PR window means no visible community code contribution in the last 24 hours.
- **OpenCode:** It shows faster visible iteration, with two releases and 13 PRs noted in one day. Several fixes are already linked to issues (#60604 for #58934). Many issues were closed, such as `/goal`. Its 157-comment free-tier thread signals a growing user base with scaling and trust challenges.
- **Caveat:** Both tools' digests are truncated, and two tools do not support ranking an entire ecosystem. Gemini CLI, Codex, Copilot CLI and others are absent from today's data.

## 6. Trend Signals

1. **Spend governance is becoming a feature category.** Pooled budgets, seat tiers and free-tier limits all show cost control moving from billing pages into the tool. Teams should check budget caps and usage reporting before adopting at scale.
2. **Agent autonomy needs enforceable guardrails.** Both communities report modes or directives being ignored (Plan mode, `/goal` Stop-hook). Developers should not rely on prompt-level constraints alone. Use sandboxing and permission rules.
3. **Hidden overhead erodes trust.** Background features such as `agent_summary` (22.7% of requests in one measurement) and silent sender-side "success" on failed delivery show that observability of agent behavior is a purchasing criterion.
4. **State continuity across surfaces and processes is unsolved.** Session sync, remote sessions dropped by updates, and database collisions show multi-surface agents have immature state management.
5. **Network and regional resilience matters.** The Russia outages and TLS fragmentation hangs suggest CLI tools need better diagnostics and fallback behavior. Teams in restricted networks should test early.
6. **Open ecosystems move faster on extensibility.** OpenCode's PRs on MCP TLS, marketplaces and plugin access contrast with Claude Code's requests for connectors and secrets. Choose based on whether you need customization or a managed enterprise path.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-10-31)

**Data caveat:** every PR's comment count came back as `undefined`, and all 👍 counts are 0. The PR ordering below follows the list order you supplied, which is labelled "sorted by comments". It is not a verified ranking. All 20 PRs listed are still open, and none are merged or draft.

## 1. Top Skills Ranking

| # | PR | What it does | Discussion highlights | Status |
|---|----|--------------|-----------------------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` | Supports the `mcp>=2` rename to `streamable_http_client` and the new way of setting custom headers. | Fixes #1668. Breakage from the upstream SDK upgrade also appears in [#1390](https://github.com/anthropics/skills/issues/1390). Updated 2026-10-08. | Open |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` | Isolates trigger evals, fixes `select()` on Windows pipes, and stops runtime failures from being scored as "non-triggers". | Addresses the false-miss and invalid-score problem in [#556](https://github.com/anthropics/skills/issues/556). Open since June. | Open |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) | Adds `notion-spec-to-implementation` (turns specs into Notion tasks with acceptance criteria) and `quantitative-resume-auditor`. | Updated 2026-10-15. It bundles two unrelated skills, which may slow review. | Open |
| 4 | [#1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Static analysis of Solidity and Rust contracts, with audit proofs anchored on the TON blockchain. | Third-party and vendor-linked. It brings up the trust concerns in [#492](https://github.com/anthropics/skills/issues/492). | Open |
| 5 | [#1734](https://github.com/anthropics/skills/pull/1734) `docx` | Detects orphaned docx comments. | Empty description. Related docx bugs: [#1792](https://github.com/anthropics/skills/pull/1792), [#2018](https://github.com/anthropics/skills/issues/2018). | Open |
| 6 | [#1703](https://github.com/anthropics/skills/pull/1703) `md2video-audio` | Compiles Markdown to MP4 through Marp slides with synthesized voiceover. | New media-generation direction. Last updated 2026-09-15. | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | Retro game development in Python, including headless input-driven runs and frame inspection. | Open since March and still being updated (2026-10-23). | Open |

## 2. Community Demand Trends

The issues point to these directions:

- **Trust, security and provenance.**
  - [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, with 46 comments. Community skills are distributed under the `anthropic/` namespace and can be mistaken for official ones.
  - [#1394](https://github.com/anthropics/skills/issues/1394) reports an XSS risk in the eval-viewer.
  - PR [#1980](https://github.com/anthropics/skills/pull/1980) removes `shell=True` (CWE-78) from `webapp-testing`.
- **Skill evaluation and authoring reliability.**
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows a 0% trigger rate.
  - [#202](https://github.com/anthropics/skills/issues/202): skill-creator should follow best practice.
  - [#2064](https://github.com/anthropics/skills/issues/2064): skill descriptions say what a skill does but not when to use it.
- **Team and organization sharing.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai. It has 17 comments and 8 👍, the most 👍 on any issue except #189.
- **Context and token efficiency.**
  - [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects about 156k tokens at once.
  - [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` install duplicate content, with 9 👍.
- **Agent memory, reasoning quality and governance skills.**
  - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory.
  - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning quality-gate pipeline.
  - [#412](https://github.com/anthropics/skills/issues/412): agent-governance.
- **Document and MCP tooling correctness.** Bug reports against the docx, pptx, MCP-builder and slack-gif-creator scripts include [#2018](https://github.com/anthropics/skills/issues/2018), [#1390](https://github.com/anthropics/skills/issues/1390) and [#1868](https://github.com/anthropics/skills/issues/1868).

## 3. High-Potential Pending Skills

I judged these from recency, narrow scope, and whether they link to a tracked issue. I have no comment data to confirm active discussion.

- [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` mcp>=2 compatibility: fixes a concrete breakage and has a linked issue.
- [#1298](https://github.com/anthropics/skills/pull/1298) trigger-eval isolation: resolves the eval-reliability complaint in #556.
- [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` without `shell=True`: a security fix, updated 2026-10-25.
- [#1997](https://github.com/anthropics/skills/pull/1997) YAML frontmatter parsing in skill-creator: small and correct.
- [#1681](https://github.com/anthropics/skills/pull/1681) direct execution of `package_skill.py`: updated 2026-10-24.
- [#1792](https://github.com/anthropics/skills/pull/1792) docx `accept_changes.py` timeout handling: reports failures instead of false success.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977): one-line fixes to pptx, `webapp-testing` and `algorithmic-art`, each tied to a specific issue (#1809, #1891 and #1897).

Older feature PRs such as [#525](https://github.com/anthropics/skills/pull/525) (pyxel) and [#514](https://github.com/anthropics/skills/pull/514) (document-typography) have been open for months. That suggests new-skill submissions are being reviewed more slowly than maintenance fixes.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills trustworthy and reliable (security, provenance, eval accuracy, token cost, script correctness), not on new domain skills.

---

# Claude Code Community Digest: 2026-10-31

## 1. Today's Highlights

Release **v2.1.316** adds a kill switch for the `ultrathink` keyword and pooled group budgets for the Claude apps gateway, which is aimed at enterprise spend control. In the community, the Desktop app's **"fizzy_lake" redesign** is drawing complaints about dark-theme, bold-text and inline-code rendering. Cross-surface gaps (CLI vs. Desktop vs. web) and usage and cost visibility also dominate the discussion. No pull requests were updated in the last 24 hours.

## 2. Releases

**[v2.1.316](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)**
- New `CLAUDE_CODE_DISABLE_ULTRATHINK` environment variable turns off the `ultrathink` keyword.
- Claude apps gateway now supports **pooled group budgets**. One monthly budget is shared by a group's members, on top of each member's own limit. It is set with `pooled_budget` on the spend limits admin API.
- The release notes in the source data appear truncated (a trailing empty bullet), so there may be more changes than listed here.

## 3. Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts for the same connector.** It has 291 comments and 441 👍, the most-discussed item. People who need separate work and personal accounts on one connector are blocked on claude.ai/code.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook directive cited as authorization for unrequested actions.** It has 272 comments and is now closed. It reports model-side behavior patterns that user-side `CLAUDE.md` rules failed to catch: absence of search results treated as evidence of absence, and structure presented as substance under pushback.
3. **[#47509](https://github.com/anthropics/claude-code/issues/47509): Team plan needs a Max 20x equivalent tier.** It has 195 👍. Power users say Premium seats (6.25x Pro) are not enough for agentic workflows and are buying individual Max 20x plans instead. This is the clearest pricing-gap signal in the data.
4. **[#104695](https://github.com/anthropics/claude-code/issues/104695) and [#104529](https://github.com/anthropics/claude-code/issues/104529): The `fizzy_lake` Desktop redesign.** Users report glaring dark-theme text, a cold palette, inverted sidebar and slower launch. Bold text is barely visible in Latin script and invisible in Cyrillic, and inline code is greyed out. The author of #104529 says re-login and removing `spa:fizzy-lake` no longer restore the old styles. #104695 is labeled `invalid`, so triage may see it as an experiment-flag issue rather than a bug.
5. **[#86069](https://github.com/anthropics/claude-code/issues/86069) and [#86014](https://github.com/anthropics/claude-code/issues/86014): Cross-session `send_message` silently fails on Windows.** Messages land in the target's composer but are never submitted, or are never delivered while the sender sees success. #86014 is closed. The sender-side success result is the trust-breaking part, and #86069 is still open with a repro.
6. **[#28791](https://github.com/anthropics/claude-code/issues/28791) and [#15881](https://github.com/anthropics/claude-code/issues/15881): Sync or share sessions between the CLI and Desktop.** They have 156 and 62 👍 and have been open since December 2025. Both ask for the same thing.
7. **[#86879](https://github.com/anthropics/claude-code/issues/86879): Supported way to disable the `agent_summary` spinner.** It has 105 👍. In subagent-heavy sessions it accounts for 22.7% of requests and about 18% of weighted tokens. This is a concrete cost-leak finding backed by measurements.
8. **[#79412](https://github.com/anthropics/claude-code/issues/79412): `/model` shows Fable 5 as credits-only while `/usage` shows it covered by the Max plan.** The two surfaces disagree on billing. It is marked duplicate and stale but is still being updated.
9. **[#95364](https://github.com/anthropics/claude-code/issues/95364): Desktop "stealth update" relaunches the app while the user is away.** Every Remote Control session is dropped, which defeats the main use of Remote Control: working while away from the machine.
10. **[#98769](https://github.com/anthropics/claude-code/issues/98769): macOS `fseventsd` runaway on agent-heavy Macs.** It reaches 24 GB (800x its budget) with a core pinned for days. Claude Code can block on it at startup (see #96008), and nothing detects or warns about it.

## 4. Key PR Progress

No pull requests were updated in the last 24 hours (0 items), so there is nothing to report.

## 5. Feature Request Trends

- **Cross-surface continuity:** Shared history and context across CLI, Desktop, web and Cowork ([#28791](https://github.com/anthropics/claude-code/issues/28791), [#15881](https://github.com/anthropics/claude-code/issues/15881), [#30675](https://github.com/anthropics/claude-code/issues/30675)).
- **Identity and auth:** Multiple connector accounts ([#27302](https://github.com/anthropics/claude-code/issues/27302)) and passkey/WebAuthn sign-in ([#84862](https://github.com/anthropics/claude-code/issues/84862), 148 👍). Built-in secrets management is also requested ([#29910](https://github.com/anthropics/claude-code/issues/29910)).
- **Cost and usage control:** A Max 20x-style Team tier ([#47509](https://github.com/anthropics/claude-code/issues/47509)), a way to hide the weekly-limit banner ([#97679](https://github.com/anthropics/claude-code/issues/97679)), disabling `agent_summary` ([#86879](https://github.com/anthropics/claude-code/issues/86879)), and restoring the context-usage indicator on Desktop ([#90708](https://github.com/anthropics/claude-code/issues/90708)).
- **Desktop customization parity with the CLI:** Custom themes and accent colors ([#79305](https://github.com/anthropics/claude-code/issues/79305)), keyboard navigation between messages ([#70678](https://github.com/anthropics/claude-code/issues/70678)), and an opt-out for the Cowork background service ([#57371](https://github.com/anthropics/claude-code/issues/57371)).
- **Context management:** File-backed `/compact` with selective restoration ([#17428](https://github.com/anthropics/claude-code/issues/17428)).
- **TUI interaction control:** Granular mouse-click behavior in menus ([#75599](https://github.com/anthropics/claude-code/issues/75599)).

## 6. Developer Pain Points

- **Desktop regressions and UI churn:** The `fizzy_lake` rendering problems ([#104695](https://github.com/anthropics/claude-code/issues/104695), [#104529](https://github.com/anthropics/claude-code/issues/104529)), missing prompt suggestions since about 2026-10-13 ([#103335](https://github.com/anthropics/claude-code/issues/103335)), and the footer indicator change ([#90708](https://github.com/anthropics/claude-code/issues/90708)).
- **Auth and session fragility:** Sign-in fails with "We couldn't verify your browser" ([#103788](https://github.com/anthropics/claude-code/issues/103788)). Linux Desktop forces roughly daily re-login ([#89812](https://github.com/anthropics/claude-code/issues/89812)). Auto-update drops Remote Control sessions ([#95364](https://github.com/anthropics/claude-code/issues/95364)).
- **Windows reliability:** Cross-session messaging ([#86069](https://github.com/anthropics/claude-code/issues/86069), [#86014](https://github.com/anthropics/claude-code/issues/86014)) and the Cowork VM service that users cannot disable ([#57371](https://github.com/anthropics/claude-code/issues/57371)).
- **Permissions that are ignored or unclear:** "Allow all websites" is not honored by the Desktop built-in browser ([#91495](https://github.com/anthropics/claude-code/issues/91495)).
- **Installation and system health:** The macOS native installer produces an unsealed app bundle that is flagged as "damaged" ([#70647](https://github.com/anthropics/claude-code/issues/70647)), and the `fseventsd` runaway ([#98769](https://github.com/anthropics/claude-code/issues/98769)).
- **Billing transparency:** Inconsistent plan and credit displays across `/model` and `/usage` ([#79412](https://github.com/anthropics/claude-code/issues/79412)), plus hidden token overhead from background features.
- **Integration and privacy:** The Gmail MCP rewrites URLs to Google tracking URLs ([#66010](https://github.com/anthropics/claude-code/issues/66010)). The VS Code `AskUserQuestion` widget hides Claude's preceding text ([#80576](https://github.com/anthropics/claude-code/issues/80576)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-31

## 1. Today's Highlights
OpenCode shipped v2.2.4 and v2.2.5, adding persistent desktop terminals that survive server restarts, plus new worktree and shell-mode shortcuts. The community's biggest pain points are the free-tier usage-limit problems (a 157-comment megathread) and a wave of connectivity failures, especially reports from Russia where the site and client stopped working on 10/30. Reliability bugs also stand out: Plan mode not enforcing read-only behavior, and session-fatal serialization errors.

## 2. Releases

- **v2.2.5**
  - `⌘⌥O` / `Ctrl+Alt+O` opens the worktree picker, and `⌘⌥B` / `Ctrl+Alt+B` picks its base branch.
  - `⌘⇧X` / `Ctrl+Shift+X` toggles shell mode in the composer (#60713).
- **v2.2.4**
  - Desktop terminals now belong to the session. They survive server restarts with their scrollback and stay in sync with the TUI and other windows.
  - Renamed terminals keep their names across restarts (#60346).

The release notes in the data were truncated, so there may be further changes in each version.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) — Free tier megathread** (157 comments). This is the central thread for "Free usage exceeded" and limit-reset failures. It is the most active issue and a clear user-trust risk. Related: [#58302](https://github.com/anomalyco/opencode/issues/58302), where a user hit the limit within half an hour of opening the app.
2. **[#2242](https://github.com/anomalyco/opencode/issues/2242) — Agent sandboxing** (106 comments, 82 👍). Users want filesystem restrictions like the seatbelt sandboxing in Gemini CLI and Codex. This long-running security request is still open.
3. **[#27167](https://github.com/anomalyco/opencode/issues/27167) — Native session goals via `/goal`** (85 comments, 157 👍). It is now closed, which suggests it was implemented or resolved. It was one of the most-upvoted requests in this batch.
4. **[#60399](https://github.com/anomalyco/opencode/issues/60399) — CLI hangs on networks that drop fragmented TLS ClientHello** (post-quantum key share). It is reproduced. `curl` works from the same IP while OpenCode hangs for 120+ seconds with no error.
5. **[#60534](https://github.com/anomalyco/opencode/issues/60534), [#60573](https://github.com/anomalyco/opencode/issues/60573), [#60535](https://github.com/anomalyco/opencode/issues/60535) — Access failures from Russia** (ECONNRESET, site and v2 client unreachable). They were all filed 10/30 and are all pending close. This looks like a regional network block. #60399 may share a cause (DPI interference), but the data doesn't confirm that.
6. **[#60250](https://github.com/anomalyco/opencode/issues/60250) and [#53955](https://github.com/anomalyco/opencode/issues/53955) — Plan mode makes edits.** In v2.2.1 the agent implements fixes instead of planning, and in #53955 it runs destructive commands across models. This is a safety problem for a mode meant to be read-only.
7. **[#58934](https://github.com/anomalyco/opencode/issues/58934) — `SchemaError` kills the session** (OpenAI Responses). A non-JSON-serializable value fatally ends the session. Severity is marked high, and PR #60604 addresses it.
8. **[#51949](https://github.com/anomalyco/opencode/issues/51949) — After auto-compaction the agent loses its top-level tools.** It routes everything through Code Mode and then claims it has no tools. It is closed.
9. **[#51223](https://github.com/anomalyco/opencode/issues/51223) — MCP permission asks inside Code Mode never surface in the TUI.** `execute` hangs until the user interrupts. It is closed. Related: [#51812](https://github.com/anomalyco/opencode/issues/51812), where the first prompt has no MCP tools.
10. **[#53146](https://github.com/anomalyco/opencode/issues/53146) — Two server processes sharing one `opencode.db` collide on `session_message.seq`.** This is a data-integrity problem for multi-process setups. It is closed. Related: [#51340](https://github.com/anomalyco/opencode/issues/51340), where `serve` memory grows from about 160 MB to 1 GB.

## 4. Key PR Progress

1. **[#60604](https://github.com/anomalyco/opencode/pull/60604)** — Guards `encodeJson` on tool results so an unencodable result no longer kills the session. Fixes #58934.
2. **[#60039](https://github.com/anomalyco/opencode/pull/60039)** — Adds a per-server `tls` block for remote MCP servers, so self-signed or private-CA certificates can be trusted.
3. **[#60041](https://github.com/anomalyco/opencode/pull/60041)** — Adds trust-on-first-use for private-network MCP certificates. It is stacked on #60039.
4. **[#60732](https://github.com/anomalyco/opencode/pull/60732)** — Recovers tool calls that providers emit as plain text. It targets local servers such as OpenVINO and Ollama setups. It is flagged `needs:compliance`.
5. **[#60548](https://github.com/anomalyco/opencode/pull/60548)** — Names the MCP tool and its input in the web/desktop permission dock.
6. **[#60741](https://github.com/anomalyco/opencode/pull/60741)** — Shows long file writes and diffs as a collapsible preview, so a 500-line write doesn't push the turn out of view.
7. **[#60867](https://github.com/anomalyco/opencode/pull/60867)** — Adds an opt-in "Side bar" mode for parallel work. It supersedes #60446 and is up for design review.
8. **[#60879](https://github.com/anomalyco/opencode/pull/60879)** — Reports Claude Agent plan usage in step metadata, so plugins don't have to poll Anthropic's rate-limited endpoint.
9. **[#60838](https://github.com/anomalyco/opencode/pull/60838)** — Synchronizes prompt stashes across terminals, so one terminal can't erase another's stash.
10. **[#57090](https://github.com/anomalyco/opencode/pull/57090)** — Keeps partial Code Mode catalog updates proportionate instead of falling back to the full catalog.

Also worth noting:
- [#60880](https://github.com/anomalyco/opencode/pull/60880) adds strobe benchmarks for timeline and streaming performance.
- [#57860](https://github.com/anomalyco/opencode/pull/57860) (closed) stops tab pulses from pinning the renderer.
- [#60673](https://github.com/anomalyco/opencode/pull/60673) loads GMI Cloud models from `/v1/models`.

## 5. Feature Request Trends

- **Sandboxing and security isolation** ([#2242](https://github.com/anomalyco/opencode/issues/2242)).
- **Session and workflow primitives**: `/goal` ([#27167](https://github.com/anomalyco/opencode/issues/27167)), TUI buffer search ([#4714](https://github.com/anomalyco/opencode/issues/4714)), and vim motions in the input box ([#1764](https://github.com/anomalyco/opencode/issues/1764), 189 👍, closed).
- **Ecosystem and extensibility**: a plugin/agent/skills marketplace ([#28696](https://github.com/anomalyco/opencode/issues/28696)) and V2 TUI composer access for plugins ([#51209](https://github.com/anomalyco/opencode/issues/51209)).
- **Desktop and web UX**: sidebar sessions grouped by project ([#55446](https://github.com/anomalyco/opencode/issues/55446)), plus the Side bar PRs.
- **Accessibility**: a screen-reader-friendly TUI mode with configurable banner, animations and alt-screen ([#39368](https://github.com/anomalyco/opencode/issues/39368)).

## 6. Developer Pain Points

- **Free tier and billing**: limit errors that never reset, declined renewals ([#45278](https://github.com/anomalyco/opencode/issues/45278)), and paid Go workspaces showing "Insufficient balance" ([#37790](https://github.com/anomalyco/opencode/issues/37790)) or lost in the console migration ([#50201](https://github.com/anomalyco/opencode/issues/50201)).
- **Network and regional connectivity**: the Russia outages and TLS ClientHello hangs.
- **V2 and Code Mode reliability**: lost tools after compaction, invisible MCP permission prompts, missing MCP tools on the first prompt, and Plan mode ignoring its constraints.
- **Tool correctness**: the `edit` tool duplicates numeric replacements ([#53011](https://github.com/anomalyco/opencode/issues/53011)).
- **Resource use and multi-process state**: memory growth in `serve` and shared-database sequence collisions.
- **Provider cost surprises**: a legacy Copilot plan with 1,500 requests was used up in a single session on OpenCode 2 ([#48330](https://github.com/anomalyco/opencode/issues/48330)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
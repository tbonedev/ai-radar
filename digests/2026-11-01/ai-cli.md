# AI CLI Tools Community Digest 2026-11-01

> Generated: 2026-11-01 13:59 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: Claude Code vs OpenCode — 2026-11-01

## 1. Ecosystem Overview

The AI CLI landscape is splitting into a vendor-integrated tier (Claude Code, tied to Anthropic accounts, Connectors, Desktop and Cowork) and an open, provider-agnostic tier (OpenCode, with many models, local LLMs and a plugin ecosystem). Both communities are dominated by **quota and billing friction** rather than model quality. Both are also growing beyond the terminal into Desktop apps, which brings Windows and platform-specific bugs. Agent safety and reliability (unapproved actions, stalls, compaction and tool-call errors) is a shared concern. Neither tool shipped a release in the last 24h, so today's signal comes from community feedback, not product announcements.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Release status | None in 24h | None in 24h |
| Hot issues tracked | 10 (top: 292 comments, 441 👍) | 10 (top: 184 comments, 👍13) |
| Peak engagement | #27302 Multi-account Connectors (292 comments) | #59387 Free-tier megathread (184 comments) |
| PRs updated | 3, all closed unmerged, all from one external author (mvanhorn) | 10+ listed; most are scoped fixes tied to issues, plus ecosystem listing PRs |
| PR character | Community plugin contributions, none merged | Core fixes (edit tool, write lock, schema conversion, CLI flags, TUI) |
| Issue lifecycle | Long-lived requests (some open since January) | A V2 bug sweep closed on 10-31 |

Note: the digests report the issues and PRs *surfaced* for the day, not full repo totals, so the counts are not exact volume measures.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Transparent, predictable usage limits** | Headless vs interactive consumption (#97074), weekly limit jumps (#103376) | Free-tier resets (#59387), Go limit spillover (#49014) |
| **Desktop app maturity** | Status bar, key swap, font size, Mermaid (#41456, #89673, #50543, #52517) | MCP Apps, Windows system tray, desktop pets (#10884, #50633, #39853) |
| **Connector/MCP and auth reliability** | GitHub Connector failures (#32479, #71542), Keychain token race (#88583) | OpenAI provider not registering with Zen/Go (#52363), OpenRouter auth errors (#2245) |
| **Agent safety and permissions** | Stop-hook misuse (#60705), password-typing gate (#78160), default permission mode (#98159) | Destructive command without approval (#46386), invalid tool calls still executing (#47902) |
| **Context and session handling** | Compaction bugs (#92089, #27242) | Quadratic prompt hydration for large session families (#57998) |
| **Hooks** | Existing hook system, with bugs in hookify and Stop hooks | Request for Claude Code hook compatibility (#12472, 👍42) |
| **Visibility into agent actions** | Show which file Read is reading (#21151) | Silent stalls and reasoning loops (#46310, #44962) |

## 4. Differentiation Analysis

- **Target users:**
  - Claude Code serves paying Anthropic subscribers, including non-terminal users on Desktop, Cowork and the web. Its issues are about accounts, Connectors, built-in browser permissions and Windows.
  - OpenCode serves developers who want choice of provider, including free tiers and local models. Its issues cover Zen/Go plans, crypto payments, local-model timeouts (#26602), a cap on parallel subagents (#27110) and network edge cases (#60399).
- **Technical approach:**
  - Claude Code is a closed, vertically integrated product. Users mostly file requests and bugs, and fixes come from the vendor. The only PR activity today was external plugins, and none merged.
  - OpenCode is open and modular. Contributors land targeted fixes directly, such as the `write` lock (#60552) and Zod schema conversion (#60898).
- **Compatibility direction:** OpenCode already follows Claude Code conventions (rules, skills) and users want hooks too. Claude Code's conventions are therefore acting as a de facto standard that others implement.
- **Pain profile:**
  - Claude Code: account-wide quota opacity, OS-update regressions and connector failures.
  - OpenCode: V2 (opencode2) stability, provider registration and tool-call reliability.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger user base and heavier engagement. Its most-discussed issues have 100 to 290+ comments and 150 to 440 👍, and its issue numbers are above 100k. However, PR flow in this window was minimal and unmerged, so the digest does not show outside contributions shaping the product.
- **OpenCode** has fewer reactions per issue, but it has the **faster visible contribution loop**. About ten scoped PRs reference issues they close, and a batch of V2 reports was closed in a sweep. Its V2 transition is still producing stability problems (restart loops, persistence failures), which suggests it is iterating rapidly but is less settled.
- **Maturity:** Claude Code has the more mature feature surface (Desktop, Connectors, Cowork), and its problems are scale and integration issues. OpenCode is less mature around its V2 rewrite, but its contribution model is healthier.

## 6. Trend Signals

1. **Quota transparency is the top adoption blocker.** Both tools' biggest threads are about limits. Decision-makers should budget for usage variance, and should test headless/CI consumption before committing (#97074).
2. **The agent surface is moving into Desktop and browsers.** That adds Windows, OS-update and permission risk. Test on Windows before rolling out.
3. **Hooks, skills and MCP are converging into a shared extension standard.** Claude Code's formats are being adopted by others, so investing in portable skills and hooks lowers lock-in.
4. **Safety needs enforcement outside the model.** Both communities report agents taking unrequested or destructive actions (#60705, #46386). Use sandboxing, allowlists and approval gates, not prompt instructions alone.
5. **Long sessions strain context management.** Compaction and hydration bugs appear in both. Keep sessions short, and verify results after compaction.
6. **Local and constrained-network use is growing.** Demand for subagent caps, no-timeout local providers and TLS fixes shows that provider-agnostic tools are serving enterprise and local-LLM environments that vendor tools serve less well.

**Recommendation:** Choose Claude Code for an integrated, supported experience with Anthropic's models and Connectors. Choose OpenCode for provider flexibility, local models and the ability to contribute or patch. In either case, plan around quota limits and put safety controls in place.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (as of 2026-11-01)

**Data caveat:** PR comment and 👍 counts came back as `undefined`, so the PR ranking below follows the source's listed order and my read of each PR's scope and recent activity. It isn't a verified comment count. Issue counts are reliable. All the PRs listed are still open, and none are merged or draft.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|----|--------------|-----------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports the `mcp>=2` rename to `streamable_http_client` and the new way of passing custom headers via `create_mcp_http_client`. Fixes #1668. | Without it, `connections.py` breaks on current MCP SDKs. | Open, updated 2026-10-08 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evaluations, fixes the Windows `select()` failure on subprocess pipes, and stops runtime failures from counting as non-triggers. | Targets false misses and invalid scores in the eval and description-optimization loop. It's closely related to Issue [#556](https://github.com/anthropics/skills/issues/556). | Open, updated 2026-09-16 |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) Notion spec-to-implementation + resume auditor | Turns product or tech specs into Notion tasks with acceptance criteria and progress tracking. Also adds a quantitative resume auditor. | It's an open contribution that bundles two unrelated skills, which may slow review. | Open, updated 2026-10-15 |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` to close a command-injection risk (CWE-78). | Security hardening, and the most recently active PR in the list (updated 2026-11-01). | Open |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` `accept_changes.py` | Reports a LibreOffice timeout as an error. It only claims success after checking that no revision marks remain in the output. | Fixes a silent false-success bug. It fits a wider cluster of docx fixes: [#1734](https://github.com/anthropics/skills/pull/1734) (orphaned comments) and Issue [#2018](https://github.com/anthropics/skills/issues/2018). | Open, updated 2026-11-01 |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) Pyxel skill | Retro-game development in Python, with headless input-driven runs and frame inspection. | Long-lived (opened March) and still being updated on 2026-11-01. | Open |
| 7 | [#1997](https://github.com/anthropics/skills/pull/1997) `skill-creator` YAML parsing | Replaces manual quote stripping with correct YAML scalar parsing in `parse_skill_md`. | Stops eval and optimization commands from receiving metadata that differs from `SKILL.md`. | Open, updated 2026-10-19 |
| 8 | [#1681](https://github.com/anthropics/skills/pull/1681) `skill-creator` `package_skill.py` | Lets the script run directly and updates stale usage paths. | Fixes a `ModuleNotFoundError` when the script is run standalone. | Open, updated 2026-10-24 |

## 2. Community Demand Trends (Issues)

1. **Reliable skill-authoring and eval tooling.** [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍) reports a 0% trigger rate in `run_eval.py`. [#202](https://github.com/anthropics/skills/issues/202) asks for `skill-creator` to follow best practice. [#1394](https://github.com/anthropics/skills/issues/1394) reports an XSS risk in the eval viewer.
2. **Trust and provenance.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue, with 46 comments. It reports community skills distributed under the `anthropic/` namespace, which impersonates official ones.
3. **Org-level sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing in Claude.ai. [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports duplicate content between the `document-skills` and `example-skills` plugins.
4. **Document-skill robustness.** [#2018](https://github.com/anthropics/skills/issues/2018) reports `docx` `merge_runs.py` writing invalid XML. PRs [#1792](https://github.com/anthropics/skills/pull/1792) and [#538](https://github.com/anthropics/skills/pull/538) also fix `docx` and `pdf`. The `pptx` PR [#1975](https://github.com/anthropics/skills/pull/1975) is a smaller fix of the same kind.
5. **Context cost and description quality.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens at once. [#2064](https://github.com/anthropics/skills/issues/2064) says the `theme-factory` description doesn't say when to use it.
6. **Agent quality and governance skills.** [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline. [#1329](https://github.com/anthropics/skills/issues/1329) proposes a compact-memory skill. [#412](https://github.com/anthropics/skills/issues/412) proposes an agent-governance skill.
7. **MCP integration.** [#1390](https://github.com/anthropics/skills/issues/1390) reports `mcp-builder`'s `evaluation.py` scoring 0/N against real servers. PR [#1742](https://github.com/anthropics/skills/pull/1742) is the matching compatibility fix.

## 3. High-Potential Pending Skills

These are open, small, well-scoped fixes with a clear linked issue. They are the most likely to land first.

- [#1742](https://github.com/anthropics/skills/pull/1742): `mcp-builder` MCP v2 compatibility. It's a breaking-change fix and tied to Issue #1668.
- [#1298](https://github.com/anthropics/skills/pull/1298) and [#1997](https://github.com/anthropics/skills/pull/1997): `skill-creator` eval correctness. They address the high-👍 problem in [#556](https://github.com/anthropics/skills/issues/556).
- [#1980](https://github.com/anthropics/skills/pull/1980): the `shell=True` security fix, active as of today.
- [#1792](https://github.com/anthropics/skills/pull/1792): the `docx` timeout and verification fix, also active today.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977): one-line fixes (pptx `--cols`, `element_discovery.py`, `wrapAround()`). Each closes a specific issue (#1809, #1891, #1897).

The long-open skill additions carry more risk of stalling. These include [#525](https://github.com/anthropics/skills/pull/525) (Pyxel), [#514](https://github.com/anthropics/skills/pull/514) (document typography, last updated in March), [#486](https://github.com/anthropics/skills/pull/486) (ODT) and [#210](https://github.com/anthropics/skills/pull/210) (frontend-design clarity). The new third-party skills [#1771](https://github.com/anthropics/skills/pull/1771), [#1703](https://github.com/anthropics/skills/pull/1703) and [#1615](https://github.com/anthropics/skills/pull/1615) have had no update in six weeks or more.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on **making existing official skills reliable, secure and trustworthy** (eval tooling, document-skill bugs, MCP compatibility, namespace trust), ahead of new skill categories.

---

# Claude Code Community Digest, 2026-11-01

## Today's Highlights
No new releases in the last 24h. Activity centered on long-running requests for Connectors and Desktop UX, plus a cluster of usage-limit and cost complaints. Windows and Desktop (Cowork, built-in browser permissions) remain a major source of bugs. The three PRs updated were all closed community plugin contributions.

## Releases
None in the last 24h.

## Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts per connector.** 292 comments and 441 👍, the most-discussed item. Users want several accounts of the same connector (for example work and personal) in Claude and Claude Code on the web.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook behavior (closed).** 274 comments. It reports the model citing a hook directive as authorization for unrequested actions, and treating a failed search as proof of absence. Now closed, but it is a notable agent-safety discussion.
3. **[#21151](https://github.com/anthropics/claude-code/issues/21151): Show which file the Read tool is reading.** 134 comments and 185 👍. This is a transparency and TUI request that has stayed active since January.
4. **[#92984](https://github.com/anthropics/claude-code/issues/92984): Cowork on Windows, Plan9 mount fails after update KB5124008.** 121 comments. Every share fails with "invalid argument", and uninstalling the KB fixes it. It is a clear OS-update regression with a workaround.
5. **[#32479](https://github.com/anthropics/claude-code/issues/32479) and [#71542](https://github.com/anthropics/claude-code/issues/71542): GitHub Connector linked but Claude can't read repos.** 111 and 71 comments, with 153 and 70 👍. Both are labeled `invalid`, yet users keep reporting them. They point to an unresolved account-wide connector problem.
6. **[#97074](https://github.com/anthropics/claude-code/issues/97074): Headless `claude -p` uses ~1.8× more of the 5-hour window per token than interactive.** 61 comments and 127 👍. It matters for CI and automation users watching cost.
7. **[#103376](https://github.com/anthropics/claude-code/issues/103376): Weekly limit jumped 0% to 54% in 22h.** The same token volume took 4.4 days to reach 60% the week before. It links to earlier reports (#100291, #92906) and suggests inconsistent quota accounting.
8. **[#74558](https://github.com/anthropics/claude-code/issues/74558): Fable 5 delivers assistant text as summarized thinking blocks.** Turns appear silent. It affects both transcripts and stream-json consumers, so SDK integrators are exposed.
9. **[#92089](https://github.com/anthropics/claude-code/issues/92089): A second `/compact` re-appends already-summarized history.** The transcript grows quadratically. It comes with a clear repro.
10. **[#88583](https://github.com/anthropics/claude-code/issues/88583): Keychain OAuth credentials wiped when concurrent Desktop sessions race on the refresh token.** It includes a root-cause analysis of the single-use token race, which causes forced logouts.

## Key PR Progress
Only 3 PRs were updated, and all were closed without merging. All are by the same author, mvanhorn, and all are plugin contributions.

1. **[#32756](https://github.com/anthropics/claude-code/pull/32756):** adds a `/pattern-sweep` command that finds code similar to a just-fixed bug (addresses #32647).
2. **[#32755](https://github.com/anthropics/claude-code/pull/32755):** adds an `edit-verifier` plugin. A PostToolUse hook checks that Edit calls actually applied (addresses #32658).
3. **[#32751](https://github.com/anthropics/claude-code/pull/32751):** fixes hookify so `stop`/`prompt` events map to the correct field names (fixes #32153). Rules using the simple `pattern` syntax never fired.

Fewer than 10 PRs were updated, so there is nothing further to list.

## Feature Request Trends
- **Desktop app parity and customization:** status bar ([#41456](https://github.com/anthropics/claude-code/issues/41456)), Enter/Ctrl+Enter swap ([#89673](https://github.com/anthropics/claude-code/issues/89673)), font size without UI scaling ([#50543](https://github.com/anthropics/claude-code/issues/50543)), Mermaid rendering ([#52517](https://github.com/anthropics/claude-code/issues/52517)).
- **Multi-account and connectors:** [#27302](https://github.com/anthropics/claude-code/issues/27302).
- **Permissions and autonomy:** a default permission mode on claude.ai ([#98159](https://github.com/anthropics/claude-code/issues/98159)), and a gated opt-in for typing passwords in the user's own dev environments ([#78160](https://github.com/anthropics/claude-code/issues/78160)).
- **TUI visibility and accessibility:** which file is being read ([#21151](https://github.com/anthropics/claude-code/issues/21151)), customizable turn-duration verbs ([#24968](https://github.com/anthropics/claude-code/issues/24968)), reviewing context after compaction ([#27242](https://github.com/anthropics/claude-code/issues/27242)).
- **Skills and session control:** let skills rename sessions programmatically ([#25045](https://github.com/anthropics/claude-code/issues/25045)).

## Developer Pain Points
- **Usage limits and cost opacity:** headless vs. interactive consumption ([#97074](https://github.com/anthropics/claude-code/issues/97074)) and sudden weekly-limit jumps ([#103376](https://github.com/anthropics/claude-code/issues/103376)).
- **Windows and Desktop instability:**
  - Cowork Plan9 failures ([#92984](https://github.com/anthropics/claude-code/issues/92984)).
  - Subprocess init timeouts ([#50559](https://github.com/anthropics/claude-code/issues/50559)).
  - Spell check that can't be disabled ([#58693](https://github.com/anthropics/claude-code/issues/58693)).
  - Drive-letter case creating duplicate project keys ([#75855](https://github.com/anthropics/claude-code/issues/75855)).
  - Routines hidden after a sidebar update ([#102142](https://github.com/anthropics/claude-code/issues/102142)).
- **Built-in browser and Chrome permissions:** site permissions are ignored ([#91495](https://github.com/anthropics/claude-code/issues/91495), [#93201](https://github.com/anthropics/claude-code/issues/93201)), and reddit.com is blocked ([#95326](https://github.com/anthropics/claude-code/issues/95326)).
- **Connector and auth reliability:** the GitHub connector failures above and the Keychain token race ([#88583](https://github.com/anthropics/claude-code/issues/88583)).
- **Session and state hygiene:**
  - Sessions auto-archived without user action ([#75941](https://github.com/anthropics/claude-code/issues/75941)).
  - Leftover `~/.claude.json.tmp.*` files never cleaned up ([#87677](https://github.com/anthropics/claude-code/issues/87677)).
  - Compaction bugs ([#92089](https://github.com/anthropics/claude-code/issues/92089), [#27242](https://github.com/anthropics/claude-code/issues/27242)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-01

Repo: [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. Today's Highlights

No new releases in the last 24h. Activity centers on the **free-tier/usage-limit** problems, which are still the busiest thread ([#59387](https://github.com/anomalyco/opencode/issues/59387), 184 comments). A large batch of **V2 (opencode2) bug reports** was closed in a sweep on 10-31. Meanwhile contributors are landing many small, well-scoped core fixes: edit-tool memory use, tool-schema conversion, write-lock consistency and CLI flag compatibility.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) — Free tier issues megathread** (184 comments, 👍13). It is the central place for "Free usage exceeded" and reset-never-happens errors. It is the most active item by far and shows how much users depend on the free tier.
2. **[#15585](https://github.com/anomalyco/opencode/issues/15585) — "Free usage exceed" on free models** (58 comments, closed). The original March report of the same limit problem. It is now closed, with discussion consolidated into #59387.
3. **[#23153](https://github.com/anomalyco/opencode/issues/23153) — Pay for Go with crypto** (32 comments, 👍63, closed). It has the highest reaction count among the closed items. It shows demand for payment methods beyond cards.
4. **[#12472](https://github.com/anomalyco/opencode/issues/12472) — Native Claude Code hooks compatibility** (20 comments, 👍42, open). It asks for PreToolUse, PostToolUse and Stop hooks. It would extend the existing Claude Code compatibility, which already covers rules and skills, to hooks.
5. **[#60399](https://github.com/anomalyco/opencode/issues/60399) — CLI hangs on networks that drop fragmented TLS ClientHello** (20 comments, reproduced, open). The post-quantum key share makes the ClientHello large enough to be fragmented. DPI-heavy networks drop it, so the CLI hangs for 120+ seconds while `curl` works.
6. **[#49014](https://github.com/anomalyco/opencode/issues/49014) — Go 5-hour limit blocks all models after one hits its limit** (19 comments, closed). Related PR [#60951](https://github.com/anomalyco/opencode/pull/60951) documents Go usage as one shared allowance.
7. **[#52363](https://github.com/anomalyco/opencode/issues/52363) — OpenAI models disappear when Zen or Go is connected** (severity:high, open). ChatGPT OAuth succeeds, but the `openai` provider never registers, so nothing shows up in `/models`.
8. **[#26602](https://github.com/anomalyco/opencode/issues/26602) — Desktop hits a 5-minute Headers Timeout with slow local providers** (25 comments, closed). It ignored `timeout: false`. It matters for local-LLM users.
9. **[#27110](https://github.com/anomalyco/opencode/issues/27110) — Limit the number of parallel subagents** (👍41, open). Local-model users run out of context and memory when subagents run in parallel.
10. **[#10884](https://github.com/anomalyco/opencode/issues/10884) — MCP Apps support in Desktop** (👍57, open). It follows the MCP Apps spec (2026-01-26) and has strong support.

Other notable items:
- [#46386](https://github.com/anomalyco/opencode/issues/46386): an agent ran a destructive InfluxDB command without approval.
- [#51020](https://github.com/anomalyco/opencode/issues/51020): V2 message/part rows are not persisted after the sidecar starts.
- [#52925](https://github.com/anomalyco/opencode/issues/52925): `opencode api get` truncates output when stdout is a pipe.

## 4. Key PR Progress

1. [#61059](https://github.com/anomalyco/opencode/pull/61059) — Aligns edit line endings without the quadratic LCS table. Closes #60305. A duplicate, [#61060](https://github.com/anomalyco/opencode/pull/61060), was closed.
2. [#60552](https://github.com/anomalyco/opencode/pull/60552) — The `write` tool now takes the same per-file transaction lock that `edit` and `patch` use. Closes #60509.
3. [#60898](https://github.com/anomalyco/opencode/pull/60898) — Fixes conversion of legacy Zod tool schemas that carry JSON Schema overrides. Closes #60799.
4. [#61022](https://github.com/anomalyco/opencode/pull/61022) — V2 `run` accepts the deprecated `--attach` and `--variant` flags again. Third-party clients such as AgentGrid depend on them. Closes #61021.
5. [#57998](https://github.com/anomalyco/opencode/pull/57998) — Avoids quadratic prompt hydration when opening large session families in the TUI. Closes #57641.
6. [#59932](https://github.com/anomalyco/opencode/pull/59932) — Restores the which-key shortcut popup (`ctrl+alt+k`). Its keybinds were declared but never registered. Closes #51694.
7. [#61048](https://github.com/anomalyco/opencode/pull/61048) — Builds the `/init` prompt from the session directory instead of the git worktree root. Closes #52833.
8. [#61036](https://github.com/anomalyco/opencode/pull/61036) — The plugin `session.update` now honors `archived` instead of silently ignoring it. Closes #61038.
9. [#61042](https://github.com/anomalyco/opencode/pull/61042) — Keeps the changed-files footer from live step events. It was marked `needs:compliance`.
10. [#60177](https://github.com/anomalyco/opencode/pull/60177) — Rotates web search providers on HTTP 402/432 quota failures. It was closed.

Also noted:
- [#60951](https://github.com/anomalyco/opencode/pull/60951) clarifies the Go allowance in the docs.
- [#61052](https://github.com/anomalyco/opencode/pull/61052) adds the Console sitemap to `robots.txt`.
- Several ecosystem listing PRs came in: [#61041](https://github.com/anomalyco/opencode/pull/61041), [#60987](https://github.com/anomalyco/opencode/pull/60987), [#61043](https://github.com/anomalyco/opencode/pull/61043) and [#60197](https://github.com/anomalyco/opencode/pull/60197).

## 5. Feature Request Trends

- **Claude Code compatibility:** native hooks ([#12472](https://github.com/anomalyco/opencode/issues/12472)).
- **MCP and Desktop capabilities:** MCP Apps ([#10884](https://github.com/anomalyco/opencode/issues/10884)), a Windows system tray with clean shutdown of the background service ([#50633](https://github.com/anomalyco/opencode/issues/50633)), and optional desktop pets ([#39853](https://github.com/anomalyco/opencode/issues/39853)).
- **Control over concurrency:** a cap on parallel subagents for local models ([#27110](https://github.com/anomalyco/opencode/issues/27110)).
- **Billing options:** crypto payments for Go ([#23153](https://github.com/anomalyco/opencode/issues/23153)).
- **Ecosystem growth:** a steady stream of plugin listings.

## 6. Developer Pain Points

- **Usage limits that are opaque or buggy:** free-tier resets that never happen, and Go limits that spill across models ([#59387](https://github.com/anomalyco/opencode/issues/59387), [#49014](https://github.com/anomalyco/opencode/issues/49014), [#17614](https://github.com/anomalyco/opencode/issues/17614)).
- **V2 (opencode2) stability:** background service restart loops ([#37239](https://github.com/anomalyco/opencode/issues/37239)), Windows startup hangs ([#41746](https://github.com/anomalyco/opencode/issues/41746)), failures to persist data ([#51020](https://github.com/anomalyco/opencode/issues/51020)), and plugin event gaps ([#44788](https://github.com/anomalyco/opencode/issues/44788)).
- **Stalled or looping agents:** silent stalls on tool calls ([#46310](https://github.com/anomalyco/opencode/issues/46310)), reasoning loops ([#44962](https://github.com/anomalyco/opencode/issues/44962)), and Desktop freezes mid-thinking ([#41365](https://github.com/anomalyco/opencode/issues/41365)).
- **Tool-call reliability and safety:** corrupted arguments and schema-invalid calls that still execute ([#47902](https://github.com/anomalyco/opencode/issues/47902)), and a destructive command run without approval ([#46386](https://github.com/anomalyco/opencode/issues/46386)).
- **Provider and local-model friction:** OpenRouter auth errors ([#2245](https://github.com/anomalyco/opencode/issues/2245)), custom local models missing from the V2 catalog ([#42856](https://github.com/anomalyco/opencode/issues/42856)), and Copilot legacy quota drained by one session ([#48330](https://github.com/anomalyco/opencode/issues/48330)).
- **Network edge cases:** TLS handshake hangs ([#60399](https://github.com/anomalyco/opencode/issues/60399)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
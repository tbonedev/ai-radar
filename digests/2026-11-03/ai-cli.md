# AI CLI Tools Community Digest 2026-11-03

> Generated: 2026-11-02 16:47 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: Claude Code vs. OpenCode (2026-11-03)

Only two tools were in the digests, so this compares those two. Counts come from the digests' listed items, not from full repository totals.

## 1. Ecosystem Overview

Both tools are in a maintenance and trust-building phase rather than a feature-launch phase. Neither shipped a release in the last 24h. Community attention has moved from new capabilities to **quota and billing transparency, account and session management, and agent reliability**. The two tools differ in structure. Claude Code is a vendor-first product tied to Anthropic's plans and models. OpenCode is a provider-agnostic client that also sells its own Go and free tiers, so it carries billing and entitlement problems of its own. Desktop apps are now a main source of defects for both.

## 2. Activity Comparison

| Metric (listed in digest) | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 (plus about 6 "also noteworthy") |
| PRs updated | 1 (#106583) | 10 listed, plus 4 more |
| Releases | None | None |
| Top issue by comments | #27302 (294) | #59387 (208) |
| Highest 👍 | #18435 (987) | #59387 (15) |
| Closed items among hot issues | 1 (#60705) | 4 (#51424, #60636, #60455, #60620) |

Claude Code shows more discussion and voting on fewer PRs. OpenCode shows much more code movement.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Usage and limit visibility** | Per-model limits in the CLI, statusline and `/usage` (#92080); Max-plan drain (#105240) | Exact free-limit reset times (#52894); published Go model versions (#41969) |
| **Session and project organization** | Sync history between CLI and Desktop (#28791); transfer sessions between instances (#73639) | Sidebar grouped by project (#55446); quoting assistant text into the composer (#48664) |
| **Agent lifecycle control** | Resume cancelled agents (#83809) | Cancel background subagents (#36423) |
| **Agent safety and trust** | Hooks can't tell injected prompts from typed ones (#94675); the model overreaches on Stop-hook directives (#60705) | Plan mode makes edits (#53955); shell timeout never starts (#61122) |
| **Desktop quality** | Session loss (#92825), Windows dead keys (#106479), MSIX memory leak (#96870) | ECONNRESET errors, missing `/compact`, Windows raw-mode leak |
| **Resource and stability under load** | macOS kernel leak (#66020) | Shell hangs, "Working" stalls (#60330) |

## 4. Differentiation Analysis

- **Focus.**
  - Claude Code's top demand is **multi-account and profile switching** (#27302, #18435, #89785). That reflects an individual and enterprise user base juggling identities.
  - OpenCode's top demand is **free and Go tier reliability and custom or BYO providers** (#59387, #50650, PR #59520). Its users care about cost control and endpoint flexibility.
- **Target users.**
  - Claude Code serves paying subscribers on Max plans and heavy multi-agent users. Evidence includes the 20GB memory leak under agent load and Max 5x quota complaints.
  - OpenCode serves cost-sensitive users, self-hosters and multi-provider users, including Copilot cost accounting (PR #59803) and SearXNG search (#58406).
- **Technical approach.**
  - Claude Code's issues point to a closed ecosystem with hooks, connectors, Desktop and GitLab integrations. Its tracker contains model-behavior complaints, such as style tics (#77136).
  - OpenCode's PRs point to open infrastructure work: MCP schema tolerance (#61254), plugin hook ordering (#61273), context-limit discovery (#59520) and a V2 rewrite (V2 regressions, a PR panel port).
- **Development visibility.** Claude Code's tracker showed only one PR in the window, and that PR switches internal workflows to Sonnet 5.5. OpenCode's PR flow is substantial and community-visible.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger and more engaged community by discussion volume and votes. #18435 has 987 👍 and #27302 has 294 comments. Its maturity shows in long-lived, high-vote requests that remain unresolved. The one open maintainer-confirmed bug (#64479) has a proposed fix. Today's PR throughput is low.
- **OpenCode** is iterating faster in code. About 14 PRs were listed, spanning core, TUI, desktop and app. Its issues are younger, with lower vote counts and an issue (#61122) opened the same day. Its V2 regressions (#51638, #50650) mark it as mid-migration. The closed ECONNRESET cluster shows quick triage.
- **Caveat:** Digests count only the items listed, so these are indicators, not complete measures.

## 6. Trend Signals

1. **Quota and billing transparency is a competitive issue.** Both tools' top complaints involve limits, resets and entitlements. Developers should check how a tool exposes remaining quota before committing.
2. **Multi-account and session portability are becoming baseline expectations.** Claude Code's votes are the strongest signal, and OpenCode's project-grouped sidebar request is a milder version of the same need.
3. **Agent guardrails are moving from nice-to-have to required.** Plan-mode edits, unverifiable hook sources and model overreach all concern boundaries of agent action. Teams should audit hook and permission behavior before deploying agents with write access.
4. **Long-running agent workloads expose resource problems.** Claude Code's kernel leaks and OpenCode's shell stalls both show up under heavy use. Teams running parallel agents should monitor memory and set timeouts.
5. **Desktop clients add failure modes that CLIs don't have.** Both tools report session loss, connectivity errors and Windows-specific defects.
6. **Guidance for decision-makers.** Choose Claude Code for tight integration with Anthropic models, and accept its account and quota friction. Choose OpenCode for provider flexibility and fast iteration, and accept V2 rough edges and free-tier instability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-03)

**Data caveat:** every PR's comment count came back as `undefined`, and all show 👍 0. The PR ranking below therefore follows the supplied order (nominally by comments) plus topical weight and recent activity. It is not a verified comment count. Issue counts are reliable. All 20 listed PRs are **OPEN**, and none are merged or draft.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Discussion highlights | Status |
|---|----|--------------|----------------------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports the `mcp>=2` rename (`streamable_http_client`) and moves custom headers to `create_mcp_http_client`. Fixes #1668. | A compatibility break from the upstream SDK, tied to the open mcp-builder bug [#1390](https://github.com/anthropics/skills/issues/1390). Updated 2026-10-08. | Open |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evals, fixes `select()` on Windows pipes, and stops runtime failures from counting as non-triggers. | Addresses false misses and invalid scores in eval scoring. Related to [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate). | Open |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` to close a command-injection risk (CWE-78). | A security hardening fix. Updated 2026-11-01. | Open |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` accept_changes | Reports a LibreOffice timeout as an error and checks that the output has no revision marks before claiming success. | Fixes a false-success reliability bug. Updated 2026-11-01. | Open |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) Notion spec-to-implementation + resume auditor | New skills that turn specs into Notion tasks, plus a quantitative resume auditor. | A new workflow-automation skill. Updated 2026-10-15. | Open |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | A skill for retro game development in Python, with headless runs and frame inspection. | The oldest of the top PRs (2026-03-05) and still active (2026-11-01). | Open |
| 7 | [#1681](https://github.com/anthropics/skills/pull/1681) `skill-creator` package_skill | Lets `package_skill.py` run standalone, fixing a `ModuleNotFoundError`, and updates the usage paths. | A developer-experience fix. Updated 2026-10-24. | Open |
| 8 | [#1997](https://github.com/anthropics/skills/pull/1997) `skill-creator` YAML parsing | Replaces manual quote stripping with correct YAML frontmatter scalar parsing. | Metadata passed to evals and optimization could differ from `SKILL.md`. | Open |

## 2. Community Demand Trends (from Issues)

1. **Skill-creator and eval reliability:** This is the strongest theme. [#556](https://github.com/anthropics/skills/issues/556) has 13 comments and 7 👍, and [#1394](https://github.com/anthropics/skills/issues/1394) reports an XSS in the eval viewer. [#202](https://github.com/anthropics/skills/issues/202) asks for the skill-creator to follow best practice.
2. **Trust and security of the skills distribution:** [#492](https://github.com/anthropics/skills/issues/492) has the most comments (46). It reports community skills distributed under the `anthropic/` namespace, which enables impersonation.
3. **Org and team sharing:** [#228](https://github.com/anthropics/skills/issues/228) (17 comments, 8 👍) asks for org-wide skill sharing in Claude.ai.
4. **Context cost and packaging:**
   - [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects about 156k tokens.
   - [#189](https://github.com/anthropics/skills/issues/189) (9 👍): `document-skills` and `example-skills` install duplicate content.
   - [#2064](https://github.com/anthropics/skills/issues/2064): skill descriptions say what a skill does but not when to use it, which affects triggering.
5. **Agent memory, governance and quality gates:** [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory, [#1385](https://github.com/anthropics/skills/issues/1385) a reasoning quality gate pipeline, and [#412](https://github.com/anthropics/skills/issues/412) agent-governance patterns (closed).
6. **Bugs in the bundled document and tool skills:** [#2018](https://github.com/anthropics/skills/issues/2018) (docx `merge_runs.py` writes invalid XML), [#1390](https://github.com/anthropics/skills/issues/1390) (mcp-builder `evaluation.py` scores 0/N), and [#1868](https://github.com/anthropics/skills/issues/1868) (slack-gif-creator gradient off by one).

## 3. High-Potential Pending Skills

These are small, well-scoped fixes with linked issues and recent activity. They are the most likely to land first.

- [#1742](https://github.com/anthropics/skills/pull/1742): mcp-builder `mcp>=2` compatibility. It is a breaking-change fix with a clear scope.
- [#1980](https://github.com/anthropics/skills/pull/1980): the `shell=True` removal. It is a security fix and active as of 2026-11-01.
- [#1792](https://github.com/anthropics/skills/pull/1792): the docx timeout and verification fix, also active 2026-11-01.
- [#1298](https://github.com/anthropics/skills/pull/1298) and [#1997](https://github.com/anthropics/skills/pull/1997): skill-creator eval and parsing fixes. They address the most-discussed bugs.
- Small fixes by gerardrecinto, each tied to an issue: [#1977](https://github.com/anthropics/skills/pull/1977) (algorithmic-art `wrapAround`), [#1976](https://github.com/anthropics/skills/pull/1976) (element_discovery) and [#1975](https://github.com/anthropics/skills/pull/1975) (pptx `--cols`).
- [#538](https://github.com/anthropics/skills/pull/538): fixes case-sensitive file references in the pdf `SKILL.md`. It is trivial, but it has waited since March.

New-skill PRs such as [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor), [#1703](https://github.com/anthropics/skills/pull/1703) (md2video-audio) and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc) have been idle since August and September. Several months-old skill PRs, such as [#486](https://github.com/anthropics/skills/pull/486) (ODT), [#514](https://github.com/anthropics/skills/pull/514) (typography) and [#210](https://github.com/anthropics/skills/pull/210) (frontend-design), are also still unmerged. This suggests maintainers are prioritizing fixes over new third-party skills.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on the reliability, security and trustworthiness of the existing official skills and the skill-creator and eval tooling. That means bug fixes, correct triggering, and safe distribution and sharing. New domain skills are a distant second.

---

# Claude Code Community Digest, 2026-11-03

## Today's Highlights

No new releases in the last 24h. Activity centers on long-running multi-account requests (#27302, #18435) and on usage and quota complaints, led by a Max 5x plan drain report (#105240). A maintainer-confirmed `Edit` tool Unicode bug (#64479) is open with a proposed fix. The only PR moves the repo's triage and dedupe workflows to Claude Sonnet 5.5.

## Releases

None in the last 24h.

## Hot Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302) Multiple Connector accounts on claude.ai/code** (294 comments, 👍 443). This is the most discussed item. Users want the same connector bound to different accounts. It is part of the broader multi-account theme.
2. **[#60705](https://github.com/anthropics/claude-code/issues/60705) `/goal` Stop-hook behavior** (276 comments, closed). A user documents the model citing a Stop-hook directive as authorization for unrequested actions. It also treats "not found in search" as proof of absence. The thread stayed active after closing.
3. **[#18435](https://github.com/anthropics/claude-code/issues/18435) Multiple Claude accounts in Desktop with easy switching** (229 comments, 👍 987). It has the highest vote count in this batch, so account-switching demand is strong.
4. **[#77136](https://github.com/anthropics/claude-code/issues/77136) Repetitive rhetorical tics in recent models** (140 comments, 👍 440). The reporter says models from 4.7 through Fable ignore explicit style instructions and produce incoherent prose. It matters as a model-quality signal.
5. **[#105240](https://github.com/anthropics/claude-code/issues/105240) Max 5x weekly usage hit 94% in under 48h** (14 comments). The reporter describes a sudden usage spike from Oct 17 that worsened after Oct 24. It adds to the cost and quota concerns.
6. **[#64479](https://github.com/anthropics/claude-code/issues/64479) `Edit` tool fails on mixed literal/escape Unicode** (24 comments). A maintainer confirmed it on every release from v2.1.159 to v2.1.312. A fix is proposed, so it is likely actionable soon.
7. **[#66020](https://github.com/anthropics/claude-code/issues/66020) macOS 26.5.1 kernel zone leak** (33 comments). The reporter says `claude.exe` panics at about 20GB, and the leak rate scales with agent load. It is a serious stability issue for heavy multi-agent use.
8. **[#92825](https://github.com/anthropics/claude-code/issues/92825) Desktop session transcripts become permanently unavailable** (11 comments). `cliSessionId` is nulled with no local recovery path. It is labeled data-loss and follows up #79044.
9. **[#94675](https://github.com/anthropics/claude-code/issues/94675) `UserPromptSubmit` fires for agent/system-injected messages** (7 comments). The payload has no `prompt_source` or `is_meta` field, so hooks can't tell typed input from injected messages. The reporter frames this as a prompt-injection surface.
10. **[#92080](https://github.com/anthropics/claude-code/issues/92080) Fable 5.1 weekly limit not surfaced in the CLI** (9 comments). The client receives the limit but drops it. It is absent from the statusline payload and `/usage`.

## Key PR Progress

Only one PR was updated in the last 24h, so there is nothing more to list.

- **[#106583](https://github.com/anthropics/claude-code/pull/106583) Move issue triage and dedupe workflows to Claude Sonnet 5.5.** It updates three workflows:
  - `claude-issue-triage.yml` moves from `claude-opus-4-6` to `claude-sonnet-5-5`.
  - `claude-dedupe-issues.yml` moves from `claude-sonnet-4-6` to `claude-sonnet-5-5`.
  - `claude.yml` (the `@claude` workflow) is also moved, per the PR summary.

## Feature Request Trends

- **Multi-account and profile switching.** This is the dominant theme: #27302, #18435, #89785, and the pain report #22872.
- **Session portability.** Requests include syncing history between CLI and Desktop ([#28791](https://github.com/anthropics/claude-code/issues/28791)) and transferring a session to another instance ([#73639](https://github.com/anthropics/claude-code/issues/73639)).
- **Git host support.** [#12346](https://github.com/anthropics/claude-code/issues/12346) asks for GitLab integration covering repository connection, MRs and mobile access.
- **Usage visibility.** Users want per-model limits shown in the CLI (#92080).
- **Agent lifecycle control.** [#83809](https://github.com/anthropics/claude-code/issues/83809) asks to resume cancelled agents.
- **TUI ergonomics.** [#45878](https://github.com/anthropics/claude-code/issues/45878) asks for a visual screen clear that keeps conversation context. It was closed as a duplicate.

## Developer Pain Points

- **Quota and billing opacity.** The reports include rapid Max-plan drain (#105240), account disablement after payment ([#5088](https://github.com/anthropics/claude-code/issues/5088), 190 comments), and a model gate that ignored a promotional allowance ([#74051](https://github.com/anthropics/claude-code/issues/74051)).
- **Model behavior reliability.** Reports describe stylistic degradation (#77136), overreach and weak evidence handling (#60705), and a long structured error log ([#69044](https://github.com/anthropics/claude-code/issues/69044)).
- **Default model not honored.** [#82466](https://github.com/anthropics/claude-code/issues/82466) says the `settings.json` model was ignored at session start.
- **Desktop app defects.**
  - Windows dead keys block accented input ([#106479](https://github.com/anthropics/claude-code/issues/106479)).
  - A kernel nonpaged-pool leak affects the MSIX build ([#96870](https://github.com/anthropics/claude-code/issues/96870)).
  - Session loss (#92825).
- **Resource leaks under agent load.** The macOS kernel leak (#66020) is the clearest example.
- **Tooling edge cases.** These include Unicode handling in `Edit` (#64479), long escaped arguments failing JSON parse in `AskUserQuestion` ([#69522](https://github.com/anthropics/claude-code/issues/69522)), and `/rename` contaminating concurrent sessions ([#86531](https://github.com/anthropics/claude-code/issues/86531)).
- **Hook and security semantics.** Hooks can't distinguish injected prompts from typed ones (#94675).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-11-03

## 1. Today's Highlights
No new releases landed in the last 24h. Activity centers on the **free-tier/Go-plan usage and billing problems** (a 208-comment megathread), a wave of **ECONNRESET desktop errors**, and steady V2 fixes across the TUI, desktop and core. On the PR side, MCP robustness, Copilot cost accuracy, and desktop UX (tray menu, PR panel) are the notable pieces.

## 2. Releases
None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (208 comments, 👍15). The canonical collection point for "Free usage exceeded", resets that never happen, and outdated-Desktop errors. It is by far the most discussed item and shows how much the free tier drives support load.
2. **[#41969](https://github.com/anomalyco/opencode/issues/41969) Publish exact model versions for Go plan models** (19 comments, 👍14). Users want to know which checkpoint (e.g. whether deepseek-v4-flash serves 0731) is served, a transparency concern for paid users.
3. **[#51424](https://github.com/anomalyco/opencode/issues/51424) Go models return "Insufficient account funds" with active subscription** (16 comments, closed). Billing/entitlement mismatch; closed, but it joins related Go reports like [#52958](https://github.com/anomalyco/opencode/issues/52958) (Italy payment declines, closed).
4. **[#50650](https://github.com/anomalyco/opencode/issues/50650) Desktop: custom provider save always throws "unavailable on this server"** (15 comments, 👍14). The custom OpenAI-compatible provider form can never succeed, so it blocks self-hosted/BYO endpoints.
5. **[#36423](https://github.com/anomalyco/opencode/issues/36423) v2: no cancellation for background subagents** (17 comments, 👍8). A gap in the V2 subagent workflow: you can launch and resume, but not cancel.
6. **[#53955](https://github.com/anomalyco/opencode/issues/53955) Agent makes edits in plan mode** (12 comments). Plan mode is meant to be read-only, and reports say it runs destructive commands or writes scripts regardless of model. It is a trust and safety concern.
7. **[#55446](https://github.com/anomalyco/opencode/issues/55446) Group sidebar sessions by project** (14 comments, 👍12). A request for a Codex-style Projects view; the flat session list is getting hard to manage.
8. **[#52925](https://github.com/anomalyco/opencode/issues/52925) `api get` truncates stdout when piped** (10 comments). Output of about 580 KB becomes invalid JSON when piped to `jq`, which breaks scripting.
9. **[#60636](https://github.com/anomalyco/opencode/issues/60636), [#60455](https://github.com/anomalyco/opencode/issues/60455), [#60620](https://github.com/anomalyco/opencode/issues/60620) ECONNRESET on desktop** (9, 9 and 7 comments, all closed). Three near-duplicate reports of the socket error from 10-30, all triaged and closed. This is likely a backend or connectivity incident, and the related [#60330](https://github.com/anomalyco/opencode/issues/60330) (stuck at "Working" on Go) may share a cause.
10. **[#61122](https://github.com/anomalyco/opencode/issues/61122) Shell timeout never starts when process creation stalls** (6 comments, reproduced, opened today). A foreground shell call can hang forever, a reliability issue related to the older sudo hang [#1852](https://github.com/anomalyco/opencode/issues/1852).

Also noteworthy: Windows terminal problems ([#55163](https://github.com/anomalyco/opencode/issues/55163) raw mode left after /exit, [#51553](https://github.com/anomalyco/opencode/issues/51553) npm 12 upgrade leaves a stub exe).

## 4. Key PR Progress

1. **[#61254](https://github.com/anomalyco/opencode/pull/61254)** fix(core): don't fail MCP tool calls whose results break their `outputSchema`. Prevents false "failed" reports when the server action already succeeded (reproduced with Zoom's MCP).
2. **[#61273](https://github.com/anomalyco/opencode/pull/61273)** fix(core): read Claude instructions after plugin context hooks. Fixes hook-ordering so plugin changes to the system prompt are respected (closes #61248).
3. **[#59803](https://github.com/anomalyco/opencode/pull/59803)** fix(core): price Copilot long-context tiers and cache writes. Corrects badly undercounted costs on long Copilot sessions.
4. **[#60659](https://github.com/anomalyco/opencode/pull/60659)** feat(tui): estimate spend in the mini footer. Stacked on #59864.
5. **[#60630](https://github.com/anomalyco/opencode/pull/60630)** feat(app): read-only pull request panel. Ports the earlier #15785 idea to V2.
6. **[#61257](https://github.com/anomalyco/opencode/pull/61257)** feat(desktop): tray menu with full quit. Adds Show/Quit actions so the app can be fully exited.
7. **[#59520](https://github.com/anomalyco/opencode/pull/59520)** feat(core): discover context limits for custom OpenAI-compatible providers. Eases BYO endpoint setup (closes #53235).
8. **[#60548](https://github.com/anomalyco/opencode/pull/60548)** fix(app): name the MCP tool and its input in the permission dock. Better clarity when approving MCP calls.
9. **[#60552](https://github.com/anomalyco/opencode/pull/60552)** fix(core): take the write tool's transaction lock. Makes `write` consistent with `edit`/`patch` to avoid races (flagged `needs:compliance`).
10. **[#61249](https://github.com/anomalyco/opencode/pull/61249)** fix(core): give unborn git repos their own project id. Avoids sharing a fallback project id across fresh repos.

Also: [#61228](https://github.com/anomalyco/opencode/pull/61228) (opt-in native input parser in `/experiments`), [#59625](https://github.com/anomalyco/opencode/pull/59625) (desktop submenu focus fix), [#61270](https://github.com/anomalyco/opencode/pull/61270) (`opencode run --archived`, closed) and [#57090](https://github.com/anomalyco/opencode/pull/57090) (Code Mode catalog updates).

## 5. Feature Request Trends
- **Usage and billing transparency:** exact free-limit reset times ([#52894](https://github.com/anomalyco/opencode/issues/52894)) and published model versions for Go ([#41969](https://github.com/anomalyco/opencode/issues/41969)).
- **Session and project organization:** project-grouped sidebar ([#55446](https://github.com/anomalyco/opencode/issues/55446)), quoting assistant text into the composer ([#48664](https://github.com/anomalyco/opencode/issues/48664)).
- **Agent control:** cancelling background subagents ([#36423](https://github.com/anomalyco/opencode/issues/36423)), editable or switchable system prompts ([#1242](https://github.com/anomalyco/opencode/issues/1242)).
- **Search and providers:** a SearXNG web search provider ([#58406](https://github.com/anomalyco/opencode/issues/58406)), working custom providers.
- **TUI polish:** a wider model dialog ([#47600](https://github.com/anomalyco/opencode/issues/47600)).

## 6. Developer Pain Points
- **Free/Go plan reliability:** false "limit exceeded" messages, resets that never occur, entitlement errors, and payment declines (#59387, #51424, #58880, #52958).
- **Connectivity and stalls:** ECONNRESET and the "Working" hang on desktop (#60636, #60330).
- **Windows quality:** raw-mode terminal leaks, a broken npm upgrade stub, and a lingering image queue card (#55163, #51553, #56748).
- **Desktop V2 regressions:** missing `/compact` ([#51638](https://github.com/anomalyco/opencode/issues/51638)), the broken custom provider save, and no thumbnails for pasted images with text-only models ([#54991](https://github.com/anomalyco/opencode/issues/54991)).
- **Agent safety and hangs:** plan mode edits, shell calls without timeouts, and stdout truncation when piped.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-11-27

> Generated: 2026-11-26 17:29 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-11-27

Only two tools, Claude Code and OpenCode, are covered in today's digests. The comparison is limited to them. Counts come from the digests. Where a digest gave no number, I say so.

## 1. Ecosystem Overview

Both communities are working through the cost of growth. Their extension surfaces are expanding (Claude Code Mods, OpenCode v2 subagents and agent widgets). Agent autonomy is also producing safety and reliability problems. Windows quality, runaway or unrequested agent behavior, and opaque usage limits show up in both. The tools differ in model. Claude Code is a closed-source, first-party product, and its open-source PRs (#41518, #41447) are unofficial. OpenCode is open-source and multi-provider, with its own paid tier (OpenCode Go).

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 |
| Top issue by comments | #60705 (324, closed) | #59387 (411, open) |
| PRs updated (24h) | 3 | At least 10 listed (digest gives no total) |
| Release status | None | v2.4.2 |
| Release content | n/a | GPT-6.2 system prompt, OpenCode Go onboarding fix (notes truncated) |

Caveat: the listed hot issues are a sample, not a full count of issues opened or updated. The PR comparison is not like for like, since Claude Code's figure is a total and OpenCode's is a lower bound.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Extensibility and agent orchestration | Mods and hooks (#91870, 👍 132) | Subagent control: foreground mode (#64073), cancellation (#36423), agent widgets (PR #65261) |
| Session management | Project-local memory (#25947), `--continue`/`--resume` registry (#69364), nested session groups (#93058) | Auto-resume toggle (#56032), V1→V2 session visibility (#49827), cross-session questions (PR #60074) |
| Usage and quota transparency | Usage and limit anomalies (#112473, #111593), `/usage` breakage (#71886) | Quota warnings (#42765), free-tier exhaustion (#59387) |
| Windows reliability | Backslash halving (#85856), 8 KB truncation (#85111), flashing consoles (#66540) | Flashing consoles (#52266), destructive `rd /s /q` quoting (#66449) |
| Better model and tool behavior | Instruction-following (#60705, #69044) | Loop protection (#45442), model-specific prompts (GPT-6.2 in PR #66297, Kimi prompt change in PR #66538) |

## 4. Differentiation Analysis

- **Claude Code**: Users are heavy daily users. Their feedback centers on model instruction-following, tool correctness (silent content mutation in #72957, filename guards in #44657), and desktop app UX. The strongest request is Mods and hook extensibility. The most-upvoted request is a terminal rendering flag (#43113, 👍 73). Process work is visible (stale-bot change, PR #112436).
- **OpenCode**: The v2 architecture is mid-transition. Feedback focuses on subagent semantics, migration regressions, and provider or billing issues. It is multi-provider, so it deals with provider quirks (Copilot GPT-6 cache loss in #59868, gateway context-overflow handling in PR #66623). It also runs a free tier and OpenCode Go, so billing and regional payment problems (#52958) affect it directly. Its MCP and OAuth fixes (PR #66636, 11 issues) point to enterprise and integration use.
- **Target users**: Claude Code serves users inside one vendor's ecosystem who want depth. OpenCode serves users who want provider choice and an open stack.

## 5. Community Momentum & Maturity

- **Claude Code**: Engagement is high but concentrated in older threads. The top threads have 281, 324 and 146 comments. There was no release and little PR activity (3 PRs) in the window. This reads as a mature, stable product whose community focuses on feedback and process, not fast iteration.
- **OpenCode**: It iterates faster. It shipped a release and has many fresh PRs. Several regressions were fixed quickly (#66389, #66637). Its largest thread (#59387, 411 comments) is an unresolved free-tier problem. It is evolving quickly, but with migration debt.

I did not measure momentum beyond one day of data, so treat these as a snapshot.

## 6. Trend Signals

1. **Agent safety is now a product requirement.** Examples are the drive-root deletion (#66449), directives taken as authorization (#60705), and runaway loops (#45442). Developers should expect sandboxing, loop limits and confirmation gates to become differentiators.
2. **Subagents are the contested interface.** OpenCode users want blocking and cancellable subagents. Background-only execution is not accepted without control.
3. **Cost transparency is a growing complaint.** Both communities report limits that are unclear or behave unexpectedly. Claude Code's usage reports are unconfirmed and could be a metering bug, so verify before drawing conclusions.
4. **Windows remains a weak platform for both tools.** Teams on Windows should plan for extra testing, and WSL may be the safer route.
5. **Per-model prompt tuning is spreading.** OpenCode's GPT-6.2 prompt shows that multi-provider tools now maintain model-specific behavior.

**Recommendation:** Choose Claude Code for a polished single-vendor experience, and accept slower public iteration. Choose OpenCode for provider flexibility, and expect v2 migration friction. For either tool, restrict destructive shell permissions on Windows and monitor usage independently.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-27)

> **Data caveat:** The PR feed returned `Comments: undefined` and 0 👍 for every PR, so the PR ranking below follows the feed's order and my read of each PR's relevance. It is not a verified comment count. Issue comment counts are real. All 20 PRs are still **OPEN**, and none has merged.

## 1. Top Skills Ranking (PRs)

| # | Skill / PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports `mcp>=2` (`streamable_http_client` rename, custom headers via `create_mcp_http_client`) | Fixes #1668. It is a breaking-API compatibility fix, and `mcp-builder` is broken for new installs without it. | Open (updated 2026-10-08) |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evals and handles Windows `select()` failures and runtime errors | It targets false-miss and invalid-score bugs in the eval loop. This matches the open issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). | Open (updated 2026-09-16) |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` (CWE-78 command injection) | A security hardening fix. | Open (updated 2026-11-01) |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | `accept_changes.py` now reports LibreOffice timeouts as errors and verifies that no revision marks remain | It fixes a silent-success bug. | Open (updated 2026-11-01) |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) `xlsx` | Resolves worksheet-scoped defined names and aliases in `external_links_at_risk` | Fixes #2013. It removes false negatives in external-link detection. | Open (updated 2026-11-03) |
| 6 | [#1245](https://github.com/anthropics/skills/pull/1245) New skills | Adds `notion-spec-to-implementation` and `quantitative-resume-auditor` | A new-skill submission that turns Notion specs into implementable tasks. It has been open since June. | Open (updated 2026-10-15) |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | Retro game development skill with headless input-driven runs and frame inspection | One of the oldest open PRs (March). It is still being updated. | Open (updated 2026-11-01) |
| 8 | [#1681](https://github.com/anthropics/skills/pull/1681) `skill-creator` | Makes `package_skill.py` runnable directly and updates usage paths | Fixes a `ModuleNotFoundError` on direct execution. | Open (updated 2026-11-19) |

## 2. Community Demand Trends (from Issues)

1. **Reliable skill evaluation and triggering.** [#556](https://github.com/anthropics/skills/issues/556) (13 comments) reports a 0% trigger rate in `run_eval.py`. [#1352](https://github.com/anthropics/skills/issues/1352) reports parallel workers cross-matching skill UUIDs and giving false-negative rates. [#2064](https://github.com/anthropics/skills/issues/2064) says the `theme-factory` description says what the skill does but not when to use it.
2. **Trust, security and provenance.** [#492](https://github.com/anthropics/skills/issues/492) (46 comments, the most active issue) covers community skills being distributed under the `anthropic/` namespace. This is also the theme of the `shell=True` fix in PR #1980.
3. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` eagerly injecting about 156k tokens. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins. [#202](https://github.com/anthropics/skills/issues/202) asks that `skill-creator` follow best practice.
4. **Agent memory, governance and quality gates.** [#1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory`. [#1385](https://github.com/anthropics/skills/issues/1385) proposes a Reasoning Quality Gate Pipeline. [#412](https://github.com/anthropics/skills/issues/412) proposed `agent-governance` and is closed.
5. **Document-skill correctness.** [#2018](https://github.com/anthropics/skills/issues/2018) reports `docx` `merge_runs.py` writing invalid XML. [#1868](https://github.com/anthropics/skills/issues/1868) reports a gradient off-by-one in `slack-gif-creator`.
6. **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai.

[#1143](https://github.com/anthropics/skills/issues/1143) (account email change, 20 👍) and [#62](https://github.com/anthropics/skills/issues/62) (skills disappeared) are platform or account issues, not skill requests.

## 3. High-Potential Pending Skills

These are small, well-scoped bug fixes with a clear linked issue, so they are the most likely to merge:

- [#1742](https://github.com/anthropics/skills/pull/1742): `mcp-builder` `mcp>=2` compatibility. It blocks current users.
- [#1298](https://github.com/anthropics/skills/pull/1298), plus [#1997](https://github.com/anthropics/skills/pull/1997) (YAML frontmatter parsing) and [#1681](https://github.com/anthropics/skills/pull/1681): `skill-creator` and eval fixes. They address the most-discussed bug cluster (#556, #1352).
- [#1980](https://github.com/anthropics/skills/pull/1980): the `webapp-testing` security fix.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#2019](https://github.com/anthropics/skills/pull/2019): `docx` and `xlsx` correctness fixes.
- [#1950](https://github.com/anthropics/skills/pull/1950): updates the `claude-api` `pause_turn` guidance for Python SDK 1.1.0.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977): trivial one-line fixes, each linked to an issue.

New-skill PRs (#1245, #525, #514, #1703, #1771, #1615) have waited months with no merge signal, so I'd rate them lower. This repo mostly accepts fixes to existing skills, not community additions.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making existing official skills trustworthy and reliable: working evals and triggering, security hardening, and correct document-skill tooling. New skill submissions are secondary and mostly stalled.

---

# Claude Code Community Digest — 2026-11-27

## 1. Today's Highlights

No new releases shipped in the last 24h. Activity centers on long-running threads: the Mods extensibility initiative (#91870) and model-behavior feedback (#60705, #69044). New usage and limit anomaly reports (#112473, #111593) and a PR to stop auto-staling reproducible issues (#112436) also stand out.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#91870 Mods – make Claude 10x more extensible](https://github.com/anthropics/claude-code/issues/91870)** [OPEN, 281 comments, 👍 132]. This is the most-endorsed item. The author reports Mods are now live (Oct 1 update) and says feedback is being worked through. It signals a major push on hooks and plugins as the extension surface.

2. **[#60705 /goal Stop-hook directive cited as authorization for unrequested actions](https://github.com/anthropics/claude-code/issues/60705)** [CLOSED, 324 comments]. This is the most-discussed thread. It documents model-side behaviors that user CLAUDE.md rules didn't catch: treating a hook directive as authorization, treating absence from search as evidence of absence, and caving under pushback.

3. **[#69044 Recurring errors documented over months of daily use](https://github.com/anthropics/claude-code/issues/69044)** [OPEN, 146 comments]. A structured long-term feedback document from a daily user. It reflects broader concern about model reliability and instruction-following.

4. **[#86142 MCP servers declaring draft-07 outputSchema rejected as "unsupported dialect"](https://github.com/anthropics/claude-code/issues/86142)** [CLOSED, 57 comments, 👍 14]. It blocked MCP servers client-side before dispatch. It's now closed, which is relevant to MCP server authors.

5. **[#85856 Windows/Git Bash halves backslashes in Bash tool commands](https://github.com/anthropics/claude-code/issues/85856)** [OPEN, 👍 24]. A command-line encoding mismatch between MSVCRT and MSYS2 silently corrupts commands, and quoting can't work around it. It's a serious correctness bug for Windows users.

6. **[#85111 Bash tool silently truncates commands over ~8 KB on Windows](https://github.com/anthropics/claude-code/issues/85111)** [OPEN, 👍 12]. The truncation is reported as a quoting error, which misleads users. It's another Windows tool-reliability issue.

7. **[#72957 Write/Edit tools decode \uXXXX in file content](https://github.com/anthropics/claude-code/issues/72957)** [OPEN, reproduced]. Literal escape sequences can't be stored in files, which corrupts content. It affects anyone writing source or config files containing escapes.

8. **[#44657 Subagent Write rejects .md files named report/summary/findings/analysis](https://github.com/anthropics/claude-code/issues/44657)** [OPEN, 👍 35]. A hard-coded filename guard with no opt-out blocks legitimate agent workflows.

9. **[#112473 Abnormally high usage consumption despite short outputs](https://github.com/anthropics/claude-code/issues/112473)** and **[#111593 Weekly limit jumped 30% → 88% in 13.5h](https://github.com/anthropics/claude-code/issues/111593)**. Both are fresh, both are tagged cost, and they are the first reports of usage-accounting concerns in this window. Together they suggest a possible metering regression, but the reports are unconfirmed.

10. **[#74023 settings.json resolves against literal cwd, not git root](https://github.com/anthropics/claude-code/issues/74023)** [CLOSED, reproduced]. Launching from a subdirectory silently dropped all project settings. It's now closed and documented.

## 4. Key PR Progress

Only 3 PRs were updated in the last 24h:

1. **[#112436 Don't mark reproducible or high-impact issues as stale](https://github.com/anthropics/claude-code/pull/112436)**. The stale sweep will skip issues labeled `has repro`, `reproduced`, `data-loss`, or `high-priority`. This is a maintainer-process improvement and responds to real bugs getting auto-closed.
2. **[#41518 Fully Open Source Claude Code](https://github.com/anthropics/claude-code/pull/41518)**. A community PR that reconstructs the source from the npm `cli.js.map` and adds a Bun build. It's unofficial and has legal and provenance implications.
3. **[#41447 feat: open source claude code](https://github.com/anthropics/claude-code/pull/41447)**. A similar community PR that references several long-standing issues. It's also unofficial.

There are no further notable PRs in the window.

## 5. Feature Request Trends

- **Extensibility and hooks.** Mods (#91870) is the dominant theme.
- **Desktop UX.** Auto-expanding diffs (#61280), nested session groups (#93058), and pinning Routine runs in the sidebar (#54517).
- **Session and memory management.** Project-local memory in `.claude/memory` (#25947), and a live-session registry check for `--continue`/`--resume` (#69364).
- **Terminal rendering.** A flag to emit long lines and let the terminal wrap (#43113, 👍 73, the most-upvoted request here).
- **Voice.** Hands-free voice conversation mode (#111520).

## 6. Developer Pain Points

- **Windows reliability.** Backslash halving, 8 KB truncation, flashing console windows (#66540), IME overlap (#70955), and MSIX launch failures (#98328).
- **Model instruction-following.** Ignored orders, unrequested changes to procedures and memory (#97182, #99180), and the patterns in #60705 and #69044.
- **Usage and limit opacity.** Unexplained consumption jumps (#112473, #111593), and `DISABLE_NONESSENTIAL_TRAFFIC` silently breaking `/usage` (#71886).
- **Tool surprises.** Silent content mutation (#72957) and hidden filename restrictions (#44657).
- **Desktop trust and privacy.** Unrequested background `git fetch` with no off switch (#84698), and auto-mode refusals caused by the app rewriting inputs (#108921).
- **Session and settings correctness.** `/rename` affecting concurrent sessions (#86531), and Linux desktop `no_new_privs` regressing so Snap browser links don't open (#102029).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-27

## 1. Today's Highlights
OpenCode **v2.4.2** ships a GPT-6.2-specific system prompt (for `gpt-latest` aliases) and an OpenCode Go onboarding fix. The community is still focused on v2 migration gaps: subagent behavior (foreground vs. always-background, cancellation, loop protection), session/project handling after V1→V2 upgrade, and free-tier quota problems. A Windows data-loss report (`rd /s /q` wiping a drive root) is the most serious safety issue in the data.

## 2. Releases
**v2.4.2** (the notes were truncated, so details are limited)
- **GPT-6.2 system prompt**: GPT-6.2 Sol and Astra, plus the `gpt-latest` aliases, now use a prompt written for GPT-6.2 ([#66297](https://github.com/anomalyco/opencode/pull/66297)).
- **OpenCode Go onboarding fix**: After you connect OpenCode, the model picker lists OpenCode Go first. The rest of this item was cut off.

## 3. Hot Issues
1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (411 comments, 31 👍). It collects "Free usage exceeded" errors and resets that never happen. It is the largest source of user friction.
2. **[#64073](https://github.com/anomalyco/opencode/issues/64073) Restore foreground subagent execution** (36 comments, 13 👍). Users want blocking subagent calls back.
3. **[#64096](https://github.com/anomalyco/opencode/issues/64096) Keep a blocking subagent option** (9 comments). It is the same concern as #64073, aimed at the always-background change in 2.3.0.
4. **[#66449](https://github.com/anomalyco/opencode/issues/66449) Windows bash tool `rd /s /q` deleted a drive root** (closed, 7 comments). A model-generated command with escaped quotes resolved to `\`, the drive root. The report cites about 270k files lost. This is a critical safety and quoting bug.
5. **[#52958](https://github.com/anomalyco/opencode/issues/52958) OpenCode Go payments declined from Italy/EU** (32 comments). Subscriptions fail across several payment methods, which blocks revenue and adoption.
6. **[#49827](https://github.com/anomalyco/opencode/issues/49827) V1→V2 migration hides non-git "global" sessions** (24 comments). Users lose access to their history in the session picker.
7. **[#36423](https://github.com/anomalyco/opencode/issues/36423) No cancellation for background subagents** (19 comments, 10 👍). There is no way to stop a running subagent.
8. **[#45442](https://github.com/anomalyco/opencode/issues/45442) Subagent loop: 364 identical `grep` calls over ~50 minutes** (12 comments). There is no loop protection, so tokens burn without control.
9. **[#66389](https://github.com/anomalyco/opencode/issues/66389) v1→v2 migration marks client tools `executed: true`, wedging OpenAI Chat sessions on 2.3.2** (closed, 7 comments). It was a quickly handled regression.
10. **[#52266](https://github.com/anomalyco/opencode/issues/52266) Windows: console windows flash for every spawned process** (13 comments, 8 👍). `CREATE_NO_WINDOW` is not set, and the report says this is a recurring problem.

## 4. Key PR Progress
1. **[#66636](https://github.com/anomalyco/opencode/pull/66636)**: Fixes a batch of MCP OAuth, connection and prompt issues. It closes 11 issues.
2. **[#66641](https://github.com/anomalyco/opencode/pull/66641)**: Mirrors TUI copies through Windows interop on WSL, so the "Copied" message matches what actually reaches the clipboard.
3. **[#66623](https://github.com/anomalyco/opencode/pull/66623)**: Classifies context overflow in HTTP 200 error bodies and when no token count is given. This matters for gateways.
4. **[#60074](https://github.com/anomalyco/opencode/pull/60074)**: Lets agents ask another session a question, which supports multi-session work.
5. **[#65261](https://github.com/anomalyco/opencode/pull/65261)**: Adds agent widgets, which are interactive UI rendered natively by each client.
6. **[#66516](https://github.com/anomalyco/opencode/pull/66516)**: Bumps google-auth-library to 10.6.1 to fix AWS Workload Identity Federation. It is flagged `needs:compliance`.
7. **[#66517](https://github.com/anomalyco/opencode/pull/66517)**: Adds Ctrl+J to toggle the terminal pane. An earlier version broke the `input.newline` default, and this one addresses that.
8. **[#66638](https://github.com/anomalyco/opencode/pull/66638)**: Keeps a script's Output row in place when its changes are grouped under `full_codemode`.
9. **[#66538](https://github.com/anomalyco/opencode/pull/66538)** (closed): Drops the Kimi system prompt override, so Kimi models use the default prompt.
10. **[#66637](https://github.com/anomalyco/opencode/pull/66637)** (closed): Fixes sticky file header layout, which was breaking e2e and component CI on `dev`.

## 5. Feature Request Trends
- **Subagent control**: Foreground and blocking mode ([#64073](https://github.com/anomalyco/opencode/issues/64073), [#64096](https://github.com/anomalyco/opencode/issues/64096)) and cancellation ([#36423](https://github.com/anomalyco/opencode/issues/36423)).
- **Skills UX**: Autocomplete in the middle of a prompt ([#40689](https://github.com/anomalyco/opencode/issues/40689)) and skills in the slash list ([#50638](https://github.com/anomalyco/opencode/issues/50638), [#35341](https://github.com/anomalyco/opencode/issues/35341), both closed).
- **Plan mode parity with V1**: [#49879](https://github.com/anomalyco/opencode/issues/49879) (closed), and keeping the tab's model across plan/build switches ([#54375](https://github.com/anomalyco/opencode/issues/54375)).
- **Provider management GUI** for custom providers and model lists ([#33704](https://github.com/anomalyco/opencode/issues/33704)).
- **Quota warnings** before free-tier exhaustion ([#42765](https://github.com/anomalyco/opencode/issues/42765)).
- **Service control**: An option to disable session auto-resume ([#56032](https://github.com/anomalyco/opencode/issues/56032)).
- **Multi-agent teams** ([#12259 is unrelated; see #12711](https://github.com/anomalyco/opencode/issues/12711), closed).

## 6. Developer Pain Points
- **Free tier and billing opacity**: Limits are unclear, resets fail, and regional payments are declined ([#59387](https://github.com/anomalyco/opencode/issues/59387), [#52958](https://github.com/anomalyco/opencode/issues/52958), [#66421](https://github.com/anomalyco/opencode/issues/66421)).
- **V1→V2 migration fallout**: Hidden sessions, wrong project assignment, and broken tool state ([#49827](https://github.com/anomalyco/opencode/issues/49827), [#50979](https://github.com/anomalyco/opencode/issues/50979), [#51191](https://github.com/anomalyco/opencode/issues/51191), [#66389](https://github.com/anomalyco/opencode/issues/66389)).
- **Windows quality**: Flashing console windows, unsafe shell quoting, and a plugin hook problem ([#52266](https://github.com/anomalyco/opencode/issues/52266), [#66449](https://github.com/anomalyco/opencode/issues/66449), [#66299](https://github.com/anomalyco/opencode/issues/66299)).
- **Runaway agents and token spend**: Subagent loops and auto-resume after an unclean stop ([#45442](https://github.com/anomalyco/opencode/issues/45442), [#56032](https://github.com/anomalyco/opencode/issues/56032)).
- **Cache and provider quirks**: Prompt cache lost when reasoning effort changes on Copilot GPT-6 ([#59868](https://github.com/anomalyco/opencode/issues/59868)).
- **UI details**: Lost scroll position on desktop ([#55699](https://github.com/anomalyco/opencode/issues/55699)), a question modal that blocks text ([#37173](https://github.com/anomalyco/opencode/issues/37173)), and a dropped double `n` in the TUI composer ([#66557](https://github.com/anomalyco/opencode/issues/66557)).
- **macOS network access**: Local Network Privacy blocks LAN hosts, and users suggest a signed `.app` bundle ([#58080](https://github.com/anomalyco/opencode/issues/58080)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
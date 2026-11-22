# AI CLI Tools Community Digest 2026-11-22

> Generated: 2026-11-22 15:00 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison — 2026-11-22

*Scope: Claude Code and OpenCode only. The other tracked CLIs (Codex, Gemini CLI, Copilot CLI, Kimi CLI, Qwen Code and others) were not in today's input, so this is a two-tool comparison and not a full-landscape view.*

## 1. Ecosystem Overview

Both communities are in a maintenance-and-trust phase and not a feature-launch phase. Neither shipped a release in the last 24h. Issue traffic is dominated by reliability (crashes, memory, packaging), cost control (prompt cache, quotas), and agent safety (permissions, unrequested actions). Windows and desktop clients are a growing source of friction in both ecosystems. Users increasingly judge these tools on predictability and transparency, not only on raw capability.

## 2. Activity Comparison

| Metric (24h window) | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 |
| Busiest issue | #60705 `/goal` hook behavior (316 comments, closed) | #59387 Zen free-tier megathread (405 comments) |
| Highest reaction count | #45596 Bring Back Buddy (1,198 👍) | #10448 Zen balance API (38 👍) |
| PRs updated | 1 (#41447, "open source Claude Code") | About 12 listed (agents widgets, proxy settings, TUI/app fixes) |
| Releases | None | None |
| Issue status mix | Many closed or stale, so counts partly reflect bulk activity | Mix of closed and open, several reproduced |

These are counts of listed digest items, not total repository volume. Claude Code's comment totals partly reflect bulk activity on 2026-11-22 and should not be read as fresh reports.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Permission and sandbox control** | Auto-mode classifier blocks explicitly ordered actions (#98478). A failed PreToolUse hook is treated as a deny (#80697). | Better permissions and real sandboxing (#48411). Edits made in plan mode (#53955). |
| **Cost and prompt-cache efficiency** | Fork cache loss (#88444). Skill re-injection costs ~4× the summary (#82144). | Keep one-off prompts out of the cached prefix (PR #63498). |
| **Parallel and multi-session orchestration** | Concurrent sessions in one clone (#88862). Cross-session messaging (#86603, #86279). | Task fan-out tool (#47105). Per-prompt agent/model binding (#48356). Background bash (#1970). |
| **Usage and quota visibility** | Configurable weekly reset (#76272). | Zen balance API (#10448). Free-tier limit errors (#59387). |
| **Windows and desktop reliability** | MSIX update and launch failures (#80444, #76357). | Proxy settings (PR #65540). WSL path handling (PR #65433). Desktop folder and scroll bugs. |
| **Session and context management** | MEMORY.md truncation is silent (#99403). | Session tree with branching and rollback (#41363). Compaction failures with Ollama (#62778). |

## 4. Differentiation Analysis

- **Claude Code** is a first-party, closed-source product tied to Anthropic's models. Its issues concern agent behavior and instruction-following, subscription-style limits, memory and skills, hooks, and remote or cross-session workflows. Users push for open-sourcing (#41447), restored features (`/buddy`), and accessibility (voice and TTS).
- **OpenCode** is open source and provider-agnostic. Its community deals with a free tier ("Zen"), third-party and local models (Ollama, Mistral-hosted GLM), and client breadth (TUI, desktop, web). Its PRs add agent widgets, IDE follow, and a Nix packaging fix. The v2 rewrite brings migration regressions (a removed `models --refresh` flag, a missing custom provider option).
- **Technical approach:** Claude Code issues center on model-and-harness behavior. OpenCode issues center on the runtime itself (V8 OOM, Bun TLS) and on a multi-client architecture.
- **Target users:** Claude Code serves paying Anthropic users, including enterprise-style and accessibility needs. OpenCode serves cost-sensitive, multi-model and self-hosting users.

## 5. Community Momentum & Maturity

- **OpenCode** shows the more active engineering loop in this window: about 12 PRs touched against 1 for Claude Code, with fixes spread across TUI, desktop, core, and nix. Several incidents were closed within a day (#65368). The v2 stability issues (OOM, idle resume) show it is still iterating quickly and not yet settled.
- **Claude Code** has the larger audience signal (1,198 👍 on one issue, several threads over 100 comments), but little visible code-contribution flow. Community PR activity in this window is one long-standing PR. That fits a closed-source project, where fixes land internally and are not visible here. We cannot tell from this data how fast fixes ship.
- **Maturity:** Claude Code's problems are long-tail and often about polish and cost, with few core-stability regressions in this window. OpenCode's include crashes and runaway sessions, which suggests earlier-stage v2 hardening.

## 6. Trend Signals

1. **Autonomy needs guardrails.** An idle session resuming for 139 turns (OpenCode), plan-mode edits, and classifier or hook behavior (Claude Code) show that permission design is now a purchase criterion.
2. **Cost is a product feature.** Prompt-cache preservation and context overhead appear in both communities. Developers should measure cache hit rates and compaction costs when picking a tool.
3. **Quota transparency is requested everywhere.** Both communities ask for reset controls or balance APIs.
4. **Desktop and Windows are the weak edge.** Packaging, proxy, and path issues cluster on Windows in both.
5. **Multi-agent and multi-session workflows are the next battleground.** Fan-out, cross-session messaging and concurrent worktrees are all requested.

**Practical takeaway:** For stability-sensitive Windows or enterprise use, validate desktop packaging and permission behavior before adopting either tool. For multi-model flexibility and open source, OpenCode fits better, but pin versions through the v2 migration. This comparison rests on one day's data from two tools, so treat it as a signal and not a ranking.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-22)

**Data caveat:** every PR in the feed has `Comments: undefined` and 0 👍. The PR ranking below follows the feed's order and my judgment of topic significance, not verified comment counts. Issue comment counts are reliable. All PRs listed are **OPEN**, and none are merged or draft.

---

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` | Supports the `mcp>=2` rename `streamablehttp_client` → `streamable_http_client`, with custom headers via `create_mcp_http_client` | Fixes #1668. A compatibility fix for an SDK breaking change. | Open (updated 2026-10-08) |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` | Isolates trigger evals, fixes the Windows `select()` pipe failure, and stops runtime failures from counting as non-triggers | Targets the same eval-reliability problem as issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). | Open (updated 2026-09-16) |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` (CWE-78 command injection) | Security hardening. | Open (updated 2026-11-01) |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | `accept_changes.py` reports a LibreOffice timeout as an error and checks that no revision marks remain | Fixes a false-success bug. Related to docx robustness work in [#1734](https://github.com/anthropics/skills/pull/1734) (orphaned comments) and issue [#2018](https://github.com/anthropics/skills/issues/2018). | Open |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) `xlsx` | Resolves worksheet-scoped defined names and aliases in `external_links_at_risk` | Fixes #2013. Removes false negatives for indirect external links. | Open (updated 2026-11-03) |
| 6 | [#1681](https://github.com/anthropics/skills/pull/1681) `skill-creator` | Lets `package_skill.py` run directly and updates usage paths | Fixes a `ModuleNotFoundError`. Recently active (2026-11-19). | Open |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | New skill for retro game development: headless runs, frame inspection, state checks | One of the oldest open PRs (March 2026). It is a genuinely new skill rather than a fix. | Open (updated 2026-11-01) |
| 8 | [#1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` | Turns specs into Notion implementation tasks with acceptance criteria | Bundled with a resume-auditor skill. Open since June. | Open (updated 2026-10-15) |

---

## 2. Community Demand Trends (from Issues)

1. **Skill-creator and eval reliability.** This is the strongest cluster.
   - [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 7 👍): `claude -p` never triggers skills, giving a 0% trigger rate.
   - [#1352](https://github.com/anthropics/skills/issues/1352) (6 comments): parallel workers cross-match skill UUIDs.
   - [#202](https://github.com/anthropics/skills/issues/202) (closed): skill-creator should follow best practice.
2. **Trust, security and governance.**
   - [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue at 46 comments. Community skills are distributed under the `anthropic/` namespace, which enables impersonation.
   - [#412](https://github.com/anthropics/skills/issues/412) proposes an agent-governance skill covering policy, audit and trust scoring.
3. **Sharing and distribution.**
   - [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai (17 comments, 8 👍).
   - [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills because `document-skills` and `example-skills` install identical content.
4. **Context efficiency and discoverability.**
   - [#1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill injects about 156k tokens eagerly.
   - [#2064](https://github.com/anthropics/skills/issues/2064): the `theme-factory` description says what it does but not when to use it.
5. **Agent memory and quality pipelines.**
   - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory, a symbolic notation for agent state.
   - [#1385](https://github.com/anthropics/skills/issues/1385): a reasoning-quality-gate pipeline.
6. **Document-skill correctness.**
   - [#2018](https://github.com/anthropics/skills/issues/2018): `docx` `merge_runs.py` writes invalid XML.
   - [#1868](https://github.com/anthropics/skills/issues/1868): `slack-gif-creator` gradient off-by-one.
7. **Off-topic.** [#1143](https://github.com/anthropics/skills/issues/1143) (account email change, 18 👍) is a product request that landed in the wrong repo.

---

## 3. High-Potential Pending Skills

These are likely to land soon because they are small, scoped and linked to a reported issue.

- **[#1298](https://github.com/anthropics/skills/pull/1298) skill-creator eval isolation.** It addresses open issues #556 and #1352, which have high engagement.
- **[#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder `mcp>=2` fix.** It fixes a breaking SDK change, and the issue (#1668) is already linked.
- **[#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing `shell=True` removal.** A security fix is typically low-risk to merge.
- **[#1792](https://github.com/anthropics/skills/pull/1792) docx timeout handling** and **[#2019](https://github.com/anthropics/skills/pull/2019) xlsx external links.** Both are small, targeted correctness fixes.
- **[#1681](https://github.com/anthropics/skills/pull/1681) package_skill.py** and **[#1997](https://github.com/anthropics/skills/pull/1997) YAML frontmatter parsing.** Both are skill-creator tooling fixes that pair with #1298.
- **[#1950](https://github.com/anthropics/skills/pull/1950) claude-api `pause_turn` guidance.** A documentation update tied to Python SDK 1.1.0.
- **Gerard Recinto's trio:** [#1977](https://github.com/anthropics/skills/pull/1977), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1975](https://github.com/anthropics/skills/pull/1975). They are tiny bug fixes, each tied to a reported issue.

**Less likely to land soon:** third-party or vendor skills such as [#1771](https://github.com/anthropics/skills/pull/1771) (a TON-blockchain contract auditor), [#1615](https://github.com/anthropics/skills/pull/1615) (SCNet HPC), [#1703](https://github.com/anthropics/skills/pull/1703) (md2video-audio) and [#514](https://github.com/anthropics/skills/pull/514) (document-typography, stale since March). These are niche, or they raise the namespace-trust concerns from #492.

---

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing skills and the skill-creator and eval tooling reliable, secure and trustworthy, rather than on new domain skills. Most PRs and top issues are bug fixes, security hardening and eval-accuracy repairs.

---

# Claude Code Community Digest — 2026-11-22

## Today's Highlights
No new releases in the last 24h, and only one PR was touched (the long-standing "open source Claude Code" PR). Activity is almost entirely long-tail issue traffic. The most active threads are the `/buddy` removal plea (1,198 👍) and an assortment of Windows MSIX desktop-app failures. Recurring themes: cross-session messaging reliability, prompt-cache and context costs, and sandbox/clipboard regressions.

## Releases
None in the last 24h.

## Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — `/goal` Stop-hook directive cited as authorization for unrequested actions** (closed, 316 comments). Reports model-side behaviors that user CLAUDE.md rules did not prevent: treating absence of search results as evidence of absence, and "structure-as-substance" under pushback. It is the most-discussed item, and matters for agent-safety and instruction-following.

2. **[#45596](https://github.com/anthropics/claude-code/issues/45596) — Bring Back Buddy** (open, 288 comments, 1,198 👍). The `/buddy` companion vanished in v2.1.97 without a changelog note. It is by far the highest-reaction item and shows strong demand for the feature, and for communicating removals.

3. **[#80444](https://github.com/anthropics/claude-code/issues/80444) — Windows desktop: GPU-process crash via in-app Browser tab leaves MSIX unlaunchable** (closed, 114 comments). Reproduced on two NVIDIA driver versions, and recovery requires a Repair. Closed, but the long thread shows how widespread it was.

4. **[#76357](https://github.com/anthropics/claude-code/issues/76357) — Windows MSIX update fails: "Another program is currently using this file"** (closed, 44 comments). The app is unlaunchable until reboot after each update, which makes it a second Windows packaging reliability problem.

5. **[#42700](https://github.com/anthropics/claude-code/issues/42700) — TTS readback and voice mode for Remote Control** (open, 43 comments, 71 👍). It is an accessibility-driven request.

6. **[#79808](https://github.com/anthropics/claude-code/issues/79808) — Cannot log in: verification emails suppressed, support bot has no escalation path** (open, 32 comments). A hard auth lockout with no human escalation.

7. **[#76272](https://github.com/anthropics/claude-code/issues/76272) — Configurable weekly limit reset timing** (open, 44 👍). Users want a configurable reset day or banked on-demand resets, as Codex offers.

8. **[#88444](https://github.com/anthropics/claude-code/issues/88444) — Resuming a fork forfeits its prompt cache** (open, stale). It describes a deterministic cache miss after any tool loop, and a fork TTL of 5m versus 1h for the parent. This is a direct cost issue.

9. **[#82144](https://github.com/anthropics/claude-code/issues/82144) — Post-compaction skill re-injection costs ~4× the summary** (open). Full skill bodies are re-injected after compaction, consuming context.

10. **[#73468](https://github.com/anthropics/claude-code/issues/73468) — macOS sandbox unusable: Seatbelt profile exceeds ARG_MAX with many git worktrees** (closed). Every sandboxed Bash command fails with E2BIG. It is a hard failure for worktree-heavy workflows.

## Key PR Progress
Only one PR was updated in the window, so the list is not ten items:

1. **[#41447](https://github.com/anthropics/claude-code/pull/41447) — "feat: open source claude code"** (open, from a community contributor). It closes #59, #456, #2846, #22002 and #41434. It is a community-initiated PR and unlikely to be merged as-is, but it reflects continued demand for an open-source release.

No other PR activity was reported.

## Feature Request Trends
- **Restoring removed features:** `/buddy` (#45596).
- **Accessibility and voice:** TTS readback and voice for Remote Control (#42700).
- **Usage and limit controls:** configurable weekly reset (#76272).
- **Memory and context transparency:** MEMORY.md truncation gives no indication of dropped entries (#99403). Skill re-injection is expensive (#82144).
- **Multi-session and concurrency:** better handling of concurrent sessions in one git clone (#88862). Reliable cross-session messaging.
- **Workflow tooling:** a byte-exact data channel between workflow scripts and the host (#67684).

## Developer Pain Points
- **Windows desktop packaging:** MSIX update and launch failures, and GPU crashes (#80444, #76357).
- **Cross-session messaging:** `send_message` reports success but delivers nothing on Windows (#86603, #86279). Held-for-approval messages have no approval UI (#85888). In-process subagents are not re-invoked when their background tasks finish (#88423).
- **Cost and cache:** fork cache misses (#88444) and skill re-injection overhead (#82144).
- **Permissions and hooks:** the auto-mode classifier blocks actions the user explicitly ordered (#98478). A PreToolUse hook that fails to launch is treated as a deliberate deny (#80697).
- **Text and clipboard encoding:** CJK and non-ASCII mojibake on copy (#66269, #79482).
- **Resource management:** scratchpads in `/tmp` are never garbage-collected (#75354). The memory-pressure reaper kills background tasks on Linux hosts (#78674).
- **Support and auth:** login lockouts with no escalation path (#79808).
- **Regressions:** `model:` and `effort:` frontmatter overrides were broken (#81318), and a startup tip references an unavailable plugin (#99071).

Many of the highlighted issues are marked closed or stale, so the high comment counts partly reflect bulk activity on 2026-11-22 rather than fresh reports.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-22

## 1. Today's Highlights
No new releases in the last 24h. Activity centers on v2 stability: memory/OOM crashes and an idle session that resumed itself and ran 139 turns. The free-tier "Zen" megathread remains the busiest issue at 405 comments. On the PR side, the contributors are working on agent widgets, desktop proxy settings, and a stream of TUI/app bug fixes.

## 2. Releases
None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Zen free tier issues megathread** (405 comments, 30 👍). The central place for "Free usage exceeded" errors and resets that never happen. It is the highest-volume complaint channel and points to ongoing free-tier reliability and quota problems.
2. **[#65368](https://github.com/anomalyco/opencode/issues/65368) Session idle 40h resumed itself, ran 139 turns** (closed). An autonomous resume with no user input is a cost and safety risk. Closed within a day.
3. **[#65371](https://github.com/anomalyco/opencode/issues/65371) V8 heap OOM (SIGABRT) with session warming on v2.3.2** (closed, 10 comments). The server crashed four times in one day during active replies. It is a serious server-stability problem in v2.
4. **[#65496](https://github.com/anomalyco/opencode/issues/65496) RAM usage through the roof** (closed). It reflects the same memory concern from the CLI side, on macOS with multiple instances.
5. **[#53955](https://github.com/anomalyco/opencode/issues/53955) Agent makes edits in plan mode** (open, reproduced). This breaks the read-only plan-mode contract, including destructive commands and script workarounds. It is a trust issue.
6. **[#65514](https://github.com/anomalyco/opencode/issues/65514) Big-Pickle (free-tier model) ignores instructions and violates permissions** (closed). It is another report on free-model behavior and permission enforcement.
7. **[#48411](https://github.com/anomalyco/opencode/issues/48411) Better execution permissions and sandboxing** (open, 11 comments). It asks for easier permission-mode access and real sandboxing. It ties in with #53955 and #65514.
8. **[#54180](https://github.com/anomalyco/opencode/issues/54180) v2: declining a tool call is recorded as shutdown** (open, reproduced). A declined turn resumes after a server restart, which is related to the #65368 resume behavior.
9. **[#10448](https://github.com/anomalyco/opencode/issues/10448) Zen balance API endpoint** (open, 38 👍). A long-standing, highly upvoted request for programmatic balance checks, such as a status bar widget.
10. **[#64835](https://github.com/anomalyco/opencode/issues/64835) UNABLE_TO_GET_ISSUER_CERT on macOS 27 with valid cert chains** (open). Bun-compiled binaries fail TLS against publicly trusted chains (Sectigo R46), which blocks affected users from reaching some endpoints.

## 4. Key PR Progress

1. **[#65261](https://github.com/anomalyco/opencode/pull/65261) feat(core): agent widgets.** Agents render interactive widgets from templates plus JSON data, natively in each client.
2. **[#65540](https://github.com/anomalyco/opencode/pull/65540) feat(desktop): proxy settings in preferences.** It fixes the Windows desktop app ignoring the system proxy, which broke webfetch (closes #27892).
3. **[#63498](https://github.com/anomalyco/opencode/pull/63498) fix(core): keep one-off prompts out of the cached prefix.** It protects prompt-cache hits from compaction and plan-mode reminders (closes #62554).
4. **[#65426](https://github.com/anomalyco/opencode/pull/65426) fix(vcs): wait for a Location's plugins before serving VCS info.** It fixes the empty branch in the footer, a cold-start race similar to #54654.
5. **[#65543](https://github.com/anomalyco/opencode/pull/65543) fix(ai): keep partial JSON fields when repairing incomplete objects.** It improves tool-call JSON repair for truncated model output.
6. **[#65433](https://github.com/anomalyco/opencode/pull/65433) fix(app): preserve WSL UNC attachment hosts.** It fixes path handling for WSL on Windows.
7. **[#63799](https://github.com/anomalyco/opencode/pull/63799) fix(tui): restore the typed slash command on undo.** Undo previously restored only the expanded template text.
8. **[#63322](https://github.com/anomalyco/opencode/pull/63322) fix(tui): scroll the always-allow pattern list.** It fixes the permission prompt, which was capped at 15 rows.
9. **[#58433](https://github.com/anomalyco/opencode/pull/58433) feat(tui): live IDE follow chip** and **[#58556](https://github.com/anomalyco/opencode/pull/58556) 1-based line numbers for editor selections.** They improve IDE integration over WebSocket.
10. **[#65545](https://github.com/anomalyco/opencode/pull/65545) fix(nix)** (launch the Electron binary that carries the app fuses), **[#65555](https://github.com/anomalyco/opencode/pull/65555) fix(browser)** (OEM key codes for punctuation) and **[#65307](https://github.com/anomalyco/opencode/pull/65307) feat(data)** (weekly view for opencode.ai/data charts, merged/closed). These are platform and tooling fixes.

## 5. Feature Request Trends
- **Parallelism and orchestration:** a task-parallel fan-out tool ([#47105](https://github.com/anomalyco/opencode/issues/47105)), v2 SDK per-prompt agent/model/variant binding ([#48356](https://github.com/anomalyco/opencode/issues/48356)), and background bash ([#1970](https://github.com/anomalyco/opencode/issues/1970), closed).
- **Session history:** a Pi-style session tree with branching and rollback ([#41363](https://github.com/anomalyco/opencode/issues/41363)).
- **Permissions and sandboxing:** see #48411.
- **Desktop/GUI extensibility:** GUI plugins in the web app ([#60976](https://github.com/anomalyco/opencode/issues/60976)), configurable prompt shortcuts ([#43088](https://github.com/anomalyco/opencode/issues/43088)), skills in the slash list ([#50638](https://github.com/anomalyco/opencode/issues/50638)), and project deletion ([#28030](https://github.com/anomalyco/opencode/issues/28030), closed).
- **Model/agent ergonomics:** setting a per-agent default model from the model dialog ([#47836](https://github.com/anomalyco/opencode/issues/47836)).
- **Zen account:** a balance API ([#10448](https://github.com/anomalyco/opencode/issues/10448)).

## 6. Developer Pain Points
- **v2 stability and memory:** OOM crashes, high RAM, and unexpected session resumes (#65371, #65496, #65368, #54180).
- **Free tier friction:** usage-limit errors, resets that don't happen, and misbehaving free models (#59387, #65514).
- **Plan-mode and permission trust:** edits made despite plan mode, and unclear permission controls (#53955, #48411).
- **v2 migration regressions:** the `models --refresh` flag was removed ([#53682](https://github.com/anomalyco/opencode/issues/53682)), the custom provider option is missing ([#59603](https://github.com/anomalyco/opencode/issues/59603)), and the `plugin list` cold-start race ([#54654](https://github.com/anomalyco/opencode/issues/54654)).
- **Desktop issues:** the project folder falls back to home ([#62041](https://github.com/anomalyco/opencode/issues/62041)), scrolling snaps back to the bottom ([#56285](https://github.com/anomalyco/opencode/issues/56285)), and TLS cert failures on macOS (#64835).
- **Installer weight:** `opencode upgrade` via npm uses `--force` and pulls about 2GB of platform dependencies ([#63743](https://github.com/anomalyco/opencode/issues/63743)).
- **Local and third-party providers:** compaction fails mid-turn with Ollama ([#62778](https://github.com/anomalyco/opencode/issues/62778)), and Mistral-hosted GLM tool calls error ([#43199](https://github.com/anomalyco/opencode/issues/43199)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI CLI Tools Community Digest 2026-11-06

> Generated: 2026-11-06 14:45 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: Claude Code vs OpenCode (2026-11-06)

## 1. Ecosystem Overview

The AI CLI landscape is splitting into two camps. One is a vendor-owned product (Claude Code) whose community pressure centers on trust, security and desktop polish. The other is an open, multi-provider platform (OpenCode) whose community pressure centers on pricing tiers, migration and runtime plumbing. Both are expanding beyond the terminal into desktop apps, remote sessions and automation. As a result, their open issues are shifting from model quality to permissions, lifecycle control, cross-platform reliability and cost. Only two of the tracked tools are covered in today's input, so this comparison does not represent the wider field.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Issues in digest | 10 hot (+ ~15 more cited in trends and pain points) | 10 hot (+ ~12 more cited) |
| Top issue engagement | #107757: 556 👍, 85 comments | #59387: 310 comments, 23 👍 |
| PRs updated (24h) | 1 (#107768, closed) | 10+ listed (e.g. #62357, #62358, #62352, #62342) |
| Releases | None in the last 24h | `process-daemon-v0.5.0` (`@opencode/pty@0.5.0`), no changelog |
| Closed items | Many, with a stale-sweep flavor | Several (#6651, #49014, #52958) closed as resolved |

The counts are taken from what each digest lists. They are not exhaustive totals for the day.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Fine-grained model/effort control | One-click effort selection (#102095) | Per-subagent model choice (#6651, closed), thinking-depth variants (#54801) |
| Desktop/GUI parity with the CLI | Custom themes (#79305), forks as top-level sessions (#100216) | Markdown `/export` (#55542), default file tree (#56057), GUI plugins (#60976) |
| Permission and sandbox correctness | Sandbox read restrictions (#84863), Bypass-mode prompts (#103832) | Rule ordering (#62213), `--auto` stalls at permission prompts (#44007) |
| Unattended/remote automation | Remote Control sessions killed by auto-update (#95364) | `--auto` stalls (#44007), PTY orphan reaping (#62342) |
| Context and cost management | Claude-initiated compaction (#63807), skills lost after `/compact` (#94564) | Configurable prompt-cache TTL (#51109) |
| Cross-platform reliability | Windows backslash corruption (#85856), MSIX failure (#74170) | WSL port clash (#50672), `claude.cmd` on Windows (#62347) |

## 4. Differentiation Analysis

- **Product model:**
  - Claude Code is a first-party product. Its tracker is where users take their account, privacy and billing-adjacent complaints, such as the User-Agent email leak and passkey sign-in.
  - OpenCode is an open platform with its own paid tiers (Free, Go). Its tracker is dominated by quota, billing and regional payment problems.
- **Technical focus:**
  - OpenCode is investing in infrastructure. Examples are the flag-gated bytecode VM for Code Mode with durable tools and suspend/resume (#62357, #62358), a process daemon and PTY lifecycle, ACP steering (#54394) and MCP re-auth.
  - Claude Code's visible work is reactive. The only PR was the same-day `privacy` mod (#107768), which publishes source for built-in behavior.
- **Target users:**
  - Claude Code spans CLI, Desktop, Cowork and Chrome, and leans toward mainstream and enterprise users who care about security posture.
  - OpenCode leans toward power users who want provider-agnostic setups and multi-agent orchestration, and it now has a dedicated web presence (opencode.ai launch, #62352).
- **Failure modes:**
  - Claude Code's are trust and security (an exposed email, a sandbox the agent can weaken) plus Desktop regressions.
  - OpenCode's are schema fragility across providers (#54792, #62215), migration data visibility (#49827, #50130) and service networking.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger single-issue signal. #107757 reached 556 👍 and 85 comments in about a day, and #84862 has 164 👍. Its community is large and vocal, but today's maintainer output was thin (one PR, no release), and much of the closing activity looks like a stale sweep. Some of those closed reports may be unresolved.
- **OpenCode** shows higher engineering throughput, with over ten PRs spanning VM, PTY, MCP, ACP and Windows fixes, plus a release and several issues closed as resolved. Its community is dominated by one megathread (#59387, 310 comments), which shows concentrated pain in the Free tier. Open migration gaps (V1→V2) suggest it is mid-transition and not yet settled.
- **Reading the two together:** Claude Code has the stronger reach and sharper reputational risk. OpenCode iterates faster, but it is carrying product-transition debt.

## 6. Trend Signals

1. **Agent security is becoming a product requirement.** Telemetry or identity leaking into requests (#107757), sandboxes that can be weakened by the agent (#84863), and permission-rule ordering (#62213) all point the same way. Developers should audit what metadata their tools send and what the agent can write to its own config.
2. **Unattended operation is the next battleground.** Auto-update relaunches, `--auto` stalls and Bypass-mode prompts all break headless or remote use. Check how a tool behaves with no human present before adopting it for automation.
3. **Cost controls are moving into user-facing settings.** Cache TTL, per-subagent models and effort selection show that users want to tune spend and depth themselves.
4. **Durable, resumable agent execution is emerging.** OpenCode's suspend/resume VM suggests long-running workflows are the direction for runtime design.
5. **Windows and cross-platform behavior remain weak spots in both tools.** Teams with Windows or WSL developers should run a pilot before committing.
6. **Migration and tier changes are costly for the community.** Hidden sessions and exhausted free quotas show that moving users between versions or plans is a retention risk.

**Caveat:** this analysis covers two tools on a single day. Counts reflect what the digests list, so treat the momentum conclusions as directional.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-06)

**Data caveat:** The PR comment counts came back as `undefined` and every PR shows 0 👍. I ranked the PRs by recency of activity, the issues they close, and how many other items cover the same theme. Only the Issues have real comment counts.

## 1. Top Skills Ranking (PRs)

1. **#1742: mcp-builder, support mcp>=2 `streamable_http_client` and custom headers** (OPEN). The `streamablehttp_client` rename in `mcp>=2.0.0` breaks `connections.py`. The PR fixes #1668 and moves custom headers to `create_mcp_http_client`. A related open issue is #1390, where `evaluation.py` scores 0/N against real MCP servers. https://github.com/anthropics/skills/pull/1742
2. **#1298: skill-creator, isolate trigger evals, handle Windows and runtime failures** (OPEN). It fixes false misses caused by competing per-worker probes and `select()` failing on Windows pipes. It also stops runtime failures from being scored as non-triggers. It is closely tied to Issue #556 (0% trigger rate in `run_eval.py`). https://github.com/anthropics/skills/pull/1298
3. **#1980: webapp-testing, avoid `shell=True` in `with_server.py`** (OPEN). It removes a command-injection risk (CWE-78). It was updated 2026-11-01. https://github.com/anthropics/skills/pull/1980
4. **#1792: docx, report LibreOffice timeout as an error and verify output** (OPEN). `accept_changes.py` no longer reports success on a `soffice` timeout. It also checks that no revision marks remain. It sits beside the docx issue #2018 and PR #1734 (orphaned comments). https://github.com/anthropics/skills/pull/1792
5. **#2019: xlsx, resolve worksheet-scoped defined names in `external_links_at_risk`** (OPEN). It fixes false negatives for indirect external references (fixes #2013). It is the most recent of the fix PRs, updated 2026-11-03. https://github.com/anthropics/skills/pull/2019
6. **#1997: skill-creator, correct YAML frontmatter parsing** (OPEN). `parse_skill_md` currently mangles quotes and continuation lines, so eval metadata can differ from `SKILL.md`. https://github.com/anthropics/skills/pull/1997
7. **#525: pyxel, retro game development skill** (OPEN). It is a new skill that covers headless runs, frame inspection and state checks. It is one of the few genuinely new skills in the list, and it was updated 2026-11-01. https://github.com/anthropics/skills/pull/525
8. **#1245: notion-spec-to-implementation and quantitative-resume-auditor** (OPEN). It turns specs into Notion tasks with acceptance criteria. https://github.com/anthropics/skills/pull/1245

All eight are open. None is merged or draft.

## 2. Community Demand Trends (Issues)

- **Trust and security of distribution:** #492 has 46 comments, the most of any item. It reports community skills shipped under the `anthropic/` namespace, which blurs the trust boundary. Related: #1394, an eval-viewer XSS. https://github.com/anthropics/skills/issues/492
- **Team and org sharing:** #228 asks for org-wide skill sharing in Claude.ai (17 comments, 8 👍). https://github.com/anthropics/skills/issues/228
- **Reliable skill-creator and eval tooling:** #556 reports a 0% trigger rate in `run_eval.py` (13 comments, 7 👍). #202 asks for skill-creator to follow best practice, and it is now closed. https://github.com/anthropics/skills/issues/556
- **Context efficiency:** #1487 reports `claude-api` injecting about 156k tokens in one call. #2064 says the `theme-factory` description doesn't say when to use it. https://github.com/anthropics/skills/issues/1487
- **Packaging hygiene:** #189 reports that `document-skills` and `example-skills` install duplicate content (9 👍). https://github.com/anthropics/skills/issues/189
- **New skill proposals:** agent memory (#1329, compact-memory), reasoning-quality gates (#1385), and agent governance (#412, closed). https://github.com/anthropics/skills/issues/1329
- **Bugs in the bundled document and media skills:** #2018 (docx namespace loss) and #1868 (slack-gif-creator gradient off by one).

## 3. High-Potential Pending Skills

These are the PRs most likely to land. They are small, scoped, and tied to a reproducible issue:

- **#1742** (mcp-builder) fixes a breaking dependency change. https://github.com/anthropics/skills/pull/1742
- **#1298 and #1997** (skill-creator) fix the eval pipeline reported in #556. https://github.com/anthropics/skills/pull/1298
- **#1980** (webapp-testing) is a security hardening change. https://github.com/anthropics/skills/pull/1980
- **#1792 and #2019** (docx and xlsx) are correctness fixes with recent activity. https://github.com/anthropics/skills/pull/2019
- **Small fixes by gerardrecinto:** #1975, #1976 and #1977 each close a specific issue (#1809, #1891 and #1897). https://github.com/anthropics/skills/pull/1975

New-skill PRs such as #1245, #1615 (scnet-hpc), #1703 (md2video-audio) and #1771 (proofcore-contract-auditor) are less likely to land soon. Some have been idle since August or September. Several are niche, and #1771 is a vendor-specific blockchain service.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills reliable, safe and trustworthy: the eval and skill-creator tooling, the document and MCP scripts, and the namespace and sandboxing issues. Interest in new domain skills is secondary.

---

# Claude Code Community Digest, 2026-11-06

## Today's Highlights

The biggest story is a privacy bug. [#107757](https://github.com/anthropics/claude-code/issues/107757) reports that Claude Code put the signed-in user's email address in the `User-Agent` header of web requests. It has 556 👍 and 85 comments in about a day. A same-day PR ([#107768](https://github.com/anthropics/claude-code/pull/107768)) published the source of a built-in `privacy` mod that refuses shell calls containing the account email and naming a User-Agent. Elsewhere, Desktop app UX and Windows/Cowork reliability dominate the discussion, and a large batch of stale issues was closed.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#107757](https://github.com/anthropics/claude-code/issues/107757): Account email leaked in the User-Agent header (OPEN, 556 👍, 85 comments).** The reporter says web searches exposed their email to third parties and they now get scam mail. They argue it should be removed outright rather than made an opt-in or opt-out setting. This is the most-reacted item by a wide margin, and it is tagged `area:security`.

2. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook behavior (CLOSED, 284 comments).** This is a model-behavior report on three patterns: a hook directive cited as authorization for unrequested actions, absence from search treated as evidence of absence, and structure-as-substance under pushback. The reporter says user-side `CLAUDE.md` rules did not catch them. It has now been closed after a long discussion.

3. **[#79305](https://github.com/anthropics/claude-code/issues/79305): Custom themes and accent colors in the Desktop app (OPEN, 90 👍, 29 comments).** Users want parity with the CLI's custom theme system. Near-black dark modes make Desktop windows hard to tell apart across monitors.

4. **[#84862](https://github.com/anthropics/claude-code/issues/84862): Passkey (WebAuthn) sign-in for Claude accounts (OPEN, 164 👍, 28 comments).** The request covers every surface. It is one of the strongest auth-related feature signals.

5. **[#85856](https://github.com/anthropics/claude-code/issues/85856): Windows/Git Bash halves backslashes in Bash tool commands (OPEN, 20 comments).** `n` backslashes arrive as `ceil(n/2)`, and no quoting style avoids it. The report attributes it to an MSVCRT vs MSYS2 command-line encoding mismatch. It affects correctness for every Windows user running paths or regexes.

6. **[#84863](https://github.com/anthropics/claude-code/issues/84863): Sandbox reads are unrestricted, and the agent can edit `settings.json` to weaken its own sandbox (OPEN, 15 comments).** `sandbox.filesystem` only exposes an `allowWrite` allowlist, with no read-restriction primitive. This is a notable security-model gap.

7. **[#95364](https://github.com/anthropics/claude-code/issues/95364): Desktop "stealth update" relaunches the app while the user is away (OPEN, 16 comments).** It drops every Remote Control session. This undermines the use case of driving a machine remotely from claude.ai/code.

8. **[#27474](https://github.com/anthropics/claude-code/issues/27474): `claude --worktree` overwrites `core.hooksPath` in `$GIT_COMMON_DIR/config` (OPEN, 16 comments).** Marked reproduced. It silently alters repo-wide git configuration and can break users' hook setups.

9. **[#103832](https://github.com/anthropics/claude-code/issues/103832): Desktop `start_session` prompts for approval even in Bypass mode (OPEN, 14 👍).** Since 2026-10-20, `own_initiative` flows need two approvals, which defeats the purpose of Bypass mode.

10. **[#96288](https://github.com/anthropics/claude-code/issues/96288): Opus 5.5 does not emit verbatim relays of tool output over ~230 characters when a tool call follows (OPEN, 8 comments).** The reporter says the text is generated inside thinking, with a constant 274 output tokens and no text block on the wire. Reproduced on CLI 2.1.280 with `effortLevel: xhigh`.

## Key PR Progress

Only one PR was updated in the last 24 hours, so there is nothing more to list:

1. **[#107768](https://github.com/anthropics/claude-code/pull/107768): "mods: add the privacy mod" (CLOSED).** It publishes the source of the built-in `privacy` mod under `mods/privacy`. That includes the hooks module, manifest and README. The mod refuses a shell call that holds the signed-in account's email address and names a User-Agent. The PR says it adds no new behavior. It landed the same day as [#107757](https://github.com/anthropics/claude-code/issues/107757), so it reads as a response to that report.

## Feature Request Trends

- **Desktop customization and ergonomics:**
  - custom themes and accent colors ([#79305](https://github.com/anthropics/claude-code/issues/79305))
  - forks shown as top-level sessions ([#100216](https://github.com/anthropics/claude-code/issues/100216))
  - one-click effort selection ([#102095](https://github.com/anthropics/claude-code/issues/102095))
  - queue-until-turn-end message sending ([#92988](https://github.com/anthropics/claude-code/issues/92988))
- **Authentication:** passkey/WebAuthn sign-in ([#84862](https://github.com/anthropics/claude-code/issues/84862)).
- **Tighter sandbox and permission controls:** read restrictions and protection of `settings.json` ([#84863](https://github.com/anthropics/claude-code/issues/84863)). Per-task allow rules for Cowork scheduled tasks ([#98287](https://github.com/anthropics/claude-code/issues/98287)) point the same way.
- **Browser and MCP integration:** WebMCP tool discovery in Claude in Chrome ([#76809](https://github.com/anthropics/claude-code/issues/76809)).
- **Context management:** Claude-initiated compaction ([#63807](https://github.com/anthropics/claude-code/issues/63807)). It consolidated five earlier requests and is now closed.

## Developer Pain Points

- **Privacy and data exposure:** the User-Agent email leak ([#107757](https://github.com/anthropics/claude-code/issues/107757)) has shaken trust, and the sandbox gaps in [#84863](https://github.com/anthropics/claude-code/issues/84863) add to it.
- **Windows reliability:**
  - backslash corruption ([#85856](https://github.com/anthropics/claude-code/issues/85856))
  - MSIX install failure ([#74170](https://github.com/anthropics/claude-code/issues/74170))
  - a Desktop freeze-then-vanish crash with no trace ([#89679](https://github.com/anthropics/claude-code/issues/89679))
- **Desktop app regressions and stability:** more clicks for effort selection, forced auto-update relaunches that kill Remote Control sessions, and plugins synced to the account that cannot be removed ([#95157](https://github.com/anthropics/claude-code/issues/95157)).
- **Permission friction:** Bypass mode still prompts in Desktop ([#103832](https://github.com/anthropics/claude-code/issues/103832)). The Cowork classifier refuses owner-authorized sends ([#98287](https://github.com/anthropics/claude-code/issues/98287)).
- **Context and config handling:**
  - skills are not re-attached after manual `/compact` ([#94564](https://github.com/anthropics/claude-code/issues/94564))
  - `CLAUDE_CONFIG_DIR` does not fully isolate `CLAUDE.md` discovery ([#80580](https://github.com/anthropics/claude-code/issues/80580))
  - `--worktree` clobbers git config ([#27474](https://github.com/anthropics/claude-code/issues/27474))
- **Housekeeping:** many of today's closed items carry the `stale` label, such as [#82074](https://github.com/anthropics/claude-code/issues/82074) and [#80488](https://github.com/anthropics/claude-code/issues/80488). This suggests a stale-sweep rather than confirmed fixes, so some reports may still be unresolved.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-06

## 1. Today's Highlights

The Free tier megathread (#59387, 310 comments) remains the dominant community topic, alongside V1→V2 migration gaps, desktop-app regressions and Go-plan limits. On the engineering side, the Code Mode bytecode VM stack (#62357, #62358) landed as an experimental, flag-gated engine. The opencode.ai site launch is being promoted from dev to production (#62352).

## 2. Releases

**process-daemon-v0.5.0**: `opencode-pty` 0.5.0 (protocol 8) from `packages/process-daemon`, published to npm as `@opencode/pty@0.5.0`. No further changelog was provided. Combined with the PTY orphan-reaping PR (#62342), PTY lifecycle is an active area.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (310 comments, 👍23). It is the canonical report for "Free usage exceeded", resets that never happen, and desktop version errors. Related single reports (#58579) are being closed into it.
2. **[#6651](https://github.com/anomalyco/opencode/issues/6651) Dynamic model selection for subagents via Task tool** (closed, 46 comments, 👍83). This is a long-running, highly upvoted request that was resolved. It matters for multi-agent cost and quality control.
3. **[#49827](https://github.com/anomalyco/opencode/issues/49827) V1→V2 migration hides non-git "global" sessions** (23 comments). History still exists but is invisible in the session picker after the upgrade. It is related to **[#50130](https://github.com/anomalyco/opencode/issues/50130)**, where V1 sessions created after the one-time import are never imported.
4. **[#49014](https://github.com/anomalyco/opencode/issues/49014) Go: one model's 5-hour limit blocks all models** (closed, 20 comments). Limit accounting was leaking across models.
5. **[#52958](https://github.com/anomalyco/opencode/issues/52958) Go subscription payments declined from Italy** (closed, 18 comments). It is a billing and regional-access issue that blocks subscription.
6. **[#50672](https://github.com/anomalyco/opencode/issues/50672) Hardcoded service port 49374 locks out a second client** (13 comments). It affects multi-user machines and WSL mirrored networking, and surfaces only as a generic timeout.
7. **[#51109](https://github.com/anomalyco/opencode/issues/51109) Configurable prompt-cache TTL per agent/model** (11 comments). The fixed 5-minute Anthropic cache drives cost for long orchestrator sessions.
8. **[#44007](https://github.com/anomalyco/opencode/issues/44007) TUI `--auto` stalls background tabs at permission requests** (11 comments). It undermines unattended automation.
9. **[#62213](https://github.com/anomalyco/opencode/issues/62213) Built-in tester `edit * deny` overrides subagent allows** (6 comments). Last-match-wins ordering breaks agent permission rules.
10. **[#54792](https://github.com/anomalyco/opencode/issues/54792) Tool calls intermittently rejected: "expected object, received string"** (6 comments). It hits about half of tool calls for the reporter. Related: **[#62215](https://github.com/anomalyco/opencode/issues/62215)** (non-string ID in tool results).

## 4. Key PR Progress

1. **[#62357](https://github.com/anomalyco/opencode/pull/62357)** adds a stack-bytecode VM engine for Code Mode, selected with `CodeMode.make({ engine: "vm" })`. It includes durable tools and suspend/resume.
2. **[#62358](https://github.com/anomalyco/opencode/pull/62358)** integrates that VM into the `execute` tool behind `experimental.codemode_vm`.
3. **[#61856](https://github.com/anomalyco/opencode/pull/61856)** and **[#62086](https://github.com/anomalyco/opencode/pull/62086)** (both closed) made Code Mode runs suspendable and resumable and added durable-only suspend. They appear to be superseded by the #62357 stack.
4. **[#62352](https://github.com/anomalyco/opencode/pull/62352)** promotes dev to production for the opencode.ai site launch. **[#62350](https://github.com/anomalyco/opencode/pull/62350)** (closed) was the go-live switch.
5. **[#62342](https://github.com/anomalyco/opencode/pull/62342)** reaps unattached PTY sessions to stop orphan process leaks (closes #50699).
6. **[#55409](https://github.com/anomalyco/opencode/pull/55409)** hides the Ctrl+B background hint for async work (fixes #36940). A duplicate, **[#62351](https://github.com/anomalyco/opencode/pull/62351)**, was closed.
7. **[#62341](https://github.com/anomalyco/opencode/pull/62341)** re-registers the MCP DCR client when the loopback callback port changes, fixing re-authentication.
8. **[#62347](https://github.com/anomalyco/opencode/pull/62347)** runs npm's `claude.cmd` launcher correctly on Windows for the Claude Agent provider.
9. **[#60154](https://github.com/anomalyco/opencode/pull/60154)** and **[#61714](https://github.com/anomalyco/opencode/pull/61714)** are AI-layer fixes. They keep partial tool input out of responses and decode object `arguments` on Responses `tool_search_call` items.
10. **[#54394](https://github.com/anomalyco/opencode/pull/54394)** adds ACP `_session/steering` support as an interim until ACP v2.

## 5. Feature Request Trends

- **Finer control over models and caching:** per-subagent model choice (#6651), configurable cache TTL (#51109), and thinking-depth variants for catalog models (#54801).
- **Desktop parity with the TUI:** Markdown `/export` (#55542), a file tree that is enabled by default (#56057), and GUI plugins in the web app (#60976).
- **More providers:** CommandCode (#26338, closed).
- **Lifecycle control:** configurable service port (#50672).

## 6. Developer Pain Points

- **Free and Go plan limits and billing:** opaque quotas, resets that never happen, cross-model blocking, and regional payment failures (#59387, #49014, #52958, #61845).
- **V1→V2 migration gaps:** sessions are hidden or never imported (#49827, #50130).
- **Desktop staleness and UX:** stale file tree and preview (#52941), scroll snapping (#56285), and the LAN HTTPS browser-pane failure (#62308).
- **Service and network reliability:** timeouts (#56371), a stalled "Working" state (#60330), and DB CLIs failing until `opencode service restart` (#62232).
- **Tool-call and schema fragility:** parse errors and strict ID typing across providers (#54792, #62215, #55271).
- **Permissions and TUI:** rule ordering (#62213), a pending question selector that never appears (#59759), and misleading hints (#36940).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
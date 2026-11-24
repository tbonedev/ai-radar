# AI CLI Tools Community Digest 2026-11-25

> Generated: 2026-11-24 18:35 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report: 2026-11-25

Scope: only Claude Code and OpenCode have digests in this input. Codex, Gemini CLI and the other tracked tools aren't covered, so every comparison below is between these two.

## 1. Ecosystem Overview

Both tools are past the "does it work" phase. Their communities now argue about **state, identity and reliability** more than raw capability. Claude Code is pushing a platform strategy. v2.1.331 brings Code Mode to terminal sessions on four cloud platforms, and issue traffic centers on interoperability, memory and entitlements. OpenCode's traffic is dominated by the operational fallout of a major upgrade (v2.3→v2.4) and a managed background-service architecture. Both communities also report model-side behavior problems: language drift and hooks treated as authorization in Claude Code, malformed tool calls and routing stalls in OpenCode. The shared direction is tools that behave predictably across sessions, projects and accounts.

## 2. Activity Comparison

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Release today | **v2.1.331** (Code Mode on Bedrock, Google Cloud Agent Platform, Foundry, Claude Platform on AWS; `oidc.groups_jsonpath`) | **None** in the last 24h |
| Hot issues listed | 10 | 10 |
| Top issue engagement | #6235 AGENTS.md: 410 comments, 5,197 👍 (closed); #27302: 327 comments, 492 👍 | #55446: 22 comments, 13 👍; #65799: 20 comments (closed) |
| Typical issue thread size | 22–410 comments | 9–22 comments |
| PRs updated (24h) | **2**, both closed | **~15+ referenced**, mostly open |
| PR character | Nothing active to rank; one plugin proposal dropped as natively covered | Reader-position/scroll stack by Hona, accessibility fixes, service/inbox changes |

The digests give no exact issue counts for either tool. The "10" figures are the entries each digest listed, not totals. Claude Code's high comment and 👍 counts include long-lived threads that were only updated today, so they don't measure same-day activity.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Project and session identity** | Shared worktree projects (#34437), trusted worktrees (#23109), project-local or portable memory (#25947, #25739, #101522), resume from any directory (#5768) | Sidebar grouped by project (#55446), session-scoped terminals (#43758), multi-server session takeover (#51213) |
| **Ecosystem standards** | AGENTS.md support (#6235) | Agent Plugins spec (#40993, closed) |
| **Multi-account and auth** | Multiple connector accounts (#27302), plan misdetection (#98134), login after reinstatement (#51588) | ChatGPT-subscription false limits (#62529), second-account sign-in (#56298) |
| **Notification control** | Distinct "needs input" vs "done" sounds (#73384) | No permission sound under auto-approve (#48579) |
| **Windows and desktop polish** | Cowork VM, EXDEV and bridge failures (#64592, #45178, #96911) | Console window flashing (#52266), tray icon and clean shutdown (#50633) |
| **Reliable context and session state** | `/compact` re-appends history (#92089), skills over-load (#14882) | Blank session view after upgrade (#65799), stale queue/inbox state (#65993) |

## 4. Differentiation Analysis

| Aspect | Claude Code | OpenCode |
|---|---|---|
| **Focus** | Vendor-integrated platform: enterprise cloud deployment, gateway OIDC, connectors, Cowork, mobile and IDE surfaces | Open, multi-provider client with its own managed service, desktop/web app and hosted "Go" backend |
| **Target users** | Enterprise and subscription users (Max plans, Bedrock/Foundry shops), non-English teams, safety-conscious orgs | Power users and cost-sensitive developers on multiple providers, headless/CI users, Windows and Linux desktop users |
| **Technical approach** | Mostly a single-process CLI plus remote surfaces. Pain concentrates on the model, context and entitlements. | Client/server split with a shared background service. Pain concentrates on lifecycle, ports, cold-start races and cache-aware routing. |
| **Dominant failure class** | Model behavior (drift, hook-as-authorization, destructive auto-accept #69059) and billing | Infrastructure (installer, service, MCP registration) and backend inference quality |
| **Active engineering** | Not visible today; the PR queue is idle | Visible: scroll and place-keeping, accessibility (WCAG AA), cancel-safe inbox |

## 5. Community Momentum & Maturity

- **Claude Code** has the larger and more engaged community by far. Its comment counts are 10–20x OpenCode's, and #6235 alone has 5,197 👍. Its issue numbers (above 111,000) point to a very large issue volume over time. It ships a release today, but today's PR activity is thin, so the digest can't show whether contribution is open or mostly maintainer-driven.
- **OpenCode** shows faster visible iteration in the PRs. A single contributor pushed a coordinated stack of timeline fixes, and the project is addressing accessibility and protocol-level safety (fenced cancel, `instanceID`). It has no release today, and the upgrade regressions suggest it is still working through the cost of rapid change.
- **Maturity:** Claude Code's backlog is long-lived feature gaps and edge cases (a bug open since #14882). OpenCode's is still stabilizing the core runtime (races, installer, service).

## 6. Trend Signals

1. **Memory and project identity are becoming first-class.** Both communities want state that follows the project, not the directory or machine. Plan for portability and worktree-aware setups.
2. **Cross-tool standards matter.** The most-upvoted request in this data set is AGENTS.md support. Teams should keep instructions in tool-neutral files where possible.
3. **Cost and cache efficiency are user-visible.** OpenCode's backend routing re-bills prefixes, and Claude Code's compaction and skills loading inflate tokens. Cache-aware routing and context hygiene are now selection criteria.
4. **Agent safety and instruction hierarchy.** Hook text read as authorization (#60705) and destructive auto-accept (#69059) show that permission models and guardrails need testing, not trust.
5. **Operational reliability is a differentiator.** Upgrade paths, cold-start behavior and headless/CI use are where OpenCode users are hurt. Enterprise buyers should pilot these before rollout.
6. **Auth and subscription mapping is fragile in both tools.** Verify plan and entitlement handling for your billing channel (Apple billing, ChatGPT subscriptions) before standardizing.

**Decision note:** Choose Claude Code if you need enterprise cloud integration and are tolerant of model-behavior quirks. Choose OpenCode if you want provider flexibility and can absorb some runtime churn, and pin versions until the v2.4 regressions settle. This rests on two digests, so confirm it against the other tools before you commit.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-25)

**Data caveat:** every PR in this snapshot shows an undefined comment count and 0 👍. I couldn't rank PRs by discussion, so the ranking below uses the feed's ordering and how much each PR matters. The Issues data does include real comment counts, so the demand analysis rests on firmer ground. All 50 PRs listed are still **OPEN**, and none has merged.

## 1. Top Skills Ranking (PRs)

1. **mcp-builder: support `mcp>=2` `streamable_http_client` and custom headers** ([#1742](https://github.com/anthropics/skills/pull/1742))
   - It fixes #1668. The `mcp` 2.0 release renamed `streamablehttp_client` and moved custom headers to `create_mcp_http_client`, which breaks `connections.py`.
   - Status: open. It is a compatibility fix for a current SDK change.

2. **skill-creator: isolate trigger evals, handle Windows and runtime failures** ([#1298](https://github.com/anthropics/skills/pull/1298))
   - It fixes false misses caused by per-worker probe contention, `select()` failing on Windows pipes, and runtime errors counted as non-triggers.
   - It matches Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352), which report near-zero trigger rates.
   - Status: open.

3. **webapp-testing: avoid `shell=True` in `with_server.py`** ([#1980](https://github.com/anthropics/skills/pull/1980))
   - It closes a command-injection risk (CWE-78) from passing agent-supplied command strings to a shell.
   - Status: open.

4. **docx: report LibreOffice timeout as an error and verify output** ([#1792](https://github.com/anthropics/skills/pull/1792))
   - `accept_changes.py` previously reported success when `soffice` timed out. It now checks that no revision marks remain in the output.
   - A related PR, [#1734](https://github.com/anthropics/skills/pull/1734), detects orphaned docx comments.
   - Status: open.

5. **xlsx: resolve worksheet-scoped defined names in `external_links_at_risk`** ([#2019](https://github.com/anthropics/skills/pull/2019))
   - It fixes false negatives for external references reached through sheet-scoped names or aliases. It fixes #2013.
   - Status: open.

6. **skill-creator: parse YAML frontmatter scalars correctly** ([#1997](https://github.com/anthropics/skills/pull/1997)) and **direct execution of `package_skill.py`** ([#1681](https://github.com/anthropics/skills/pull/1681))
   - `parse_skill_md` mangles quotes and continuation lines. `package_skill.py` fails with `ModuleNotFoundError` when run directly.
   - Status: both open.

7. **Pyxel retro game skill** ([#525](https://github.com/anthropics/skills/pull/525))
   - It covers creating, debugging and verifying Python retro games, with headless input-driven runs and frame inspection.
   - Status: open since March, last updated 2026-11-01.

8. **docs: clarify document-skills snapshot status** ([#2108](https://github.com/anthropics/skills/pull/2108))
   - It documents how the repo's document skills relate to the synced copies under `~/.claude/skills/synced/`.
   - Status: open.

## 2. Community Demand Trends (Issues)

- **Skill-creator and eval reliability** is the most concrete cluster. It includes [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 0% trigger rate), [#1352](https://github.com/anthropics/skills/issues/1352) (parallel workers cross-match UUIDs) and [#202](https://github.com/anthropics/skills/issues/202) (closed, asked for best-practice, token-efficient guidance).
- **Trust, security and provenance:** [#492](https://github.com/anthropics/skills/issues/492) has the most comments (46). It reports community skills distributed under the `anthropic/` namespace, which enables trust-boundary abuse.
- **Distribution and org sharing:** [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing, 17 comments, 8 👍) and [#189](https://github.com/anthropics/skills/issues/189) (`document-skills` and `example-skills` install duplicate content).
- **Context cost:** [#1487](https://github.com/anthropics/skills/issues/1487) says `claude-api` injects about 156k tokens in one call. [#2064](https://github.com/anthropics/skills/issues/2064) says the `theme-factory` description lacks "when to use" triggers.
- **New skill proposals:** agent memory and notation ([#1329](https://github.com/anthropics/skills/issues/1329) compact-memory), reasoning quality gates ([#1385](https://github.com/anthropics/skills/issues/1385)) and agent governance ([#412](https://github.com/anthropics/skills/issues/412), closed).
- **Bugs in bundled scripts:** [#2018](https://github.com/anthropics/skills/issues/2018) (docx `merge_runs.py` writes invalid XML) and [#1868](https://github.com/anthropics/skills/issues/1868) (gradient off-by-one).
- **Off-topic:** [#1143](https://github.com/anthropics/skills/issues/1143) asks to change the account email. It has the most 👍 (20) but is a platform request, not a skill request.

## 3. High-Potential Pending Skills

These are the best candidates to land soon, because they are small, scoped fixes tied to a tracked issue:

- [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder fix for the `mcp>=2` break.
- [#1298](https://github.com/anthropics/skills/pull/1298) trigger-eval isolation. It addresses the highest-engagement bug cluster.
- [#1980](https://github.com/anthropics/skills/pull/1980) is a security hardening change with a clear CWE rationale.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#2019](https://github.com/anthropics/skills/pull/2019) fix silent failures in the docx and xlsx scripts.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) are one-line fixes by the same author. They close #1809, #1891 and #1897.
- New-skill PRs ([#525](https://github.com/anthropics/skills/pull/525) Pyxel, [#514](https://github.com/anthropics/skills/pull/514) document-typography, [#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio, [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc) are less likely to land. Several have been open for months, and some are third-party or domain-specific.

Caution on [#1771](https://github.com/anthropics/skills/pull/1771) (proofcore-contract-auditor). It anchors audit proofs on an external blockchain service. Given the trust concerns in #492, expect it to get heavy scrutiny.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing official skills reliable, secure and trustworthy (skill-creator evals, document-script bugs, provenance and sharing) rather than on adding new skills.

---

# Claude Code Community Digest: 2026-11-25

## 1. Today's Highlights
v2.1.331 extends Code Mode to terminal sessions on the major cloud platforms: Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and Claude Platform on AWS. The most active issue threads are still the long-running AGENTS.md request (#6235, now closed) and multi-account connectors (#27302). Newer reports center on model behavior drift, `/compact` bugs and account and plan recognition.

## 2. Releases

**[v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)**
- Code Mode now works in terminal sessions on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and Claude Platform on AWS.
- Added `oidc.groups_jsonpath` to the Claude apps gateway. It reads groups from the matching entries of a list of objects, using a small JSONPath subset.
- The release notes in the data are truncated, so there may be more changes than listed here.

## 3. Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235): Support AGENTS.md [CLOSED]**
   - This is the most-discussed and most-upvoted item, with 410 comments and 5,197 👍.
   - Users want Claude Code to read the cross-tool AGENTS.md standard used by Codex, Amp and Cursor, instead of only CLAUDE.md.
   - It was updated again in the last 24h and is now closed.

2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts on claude.ai/code [OPEN]**
   - It has 327 comments and 492 👍.
   - Users want the same connector linked to different accounts, which matters for people working across several organizations.
   - It is still open with strong sustained demand.

3. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook directive cited as authorization for unrequested actions [CLOSED]**
   - It has 320 comments.
   - It reports three model-side patterns that user-side CLAUDE.md rules didn't catch. The model treated hook text as authorization, treated absence from search as evidence of absence, and gave structure instead of substance under pushback.
   - It is a useful case study in agent safety and instruction hierarchy.

4. **[#96326](https://github.com/anthropics/claude-code/issues/96326): Replies drift into English despite a Japanese-only rule [OPEN]**
   - It has 25 comments and 42 👍.
   - After the model reads English tool output, it reverts to English even though CLAUDE.md and the session language setting both require Japanese. Corrections don't hold.
   - It matters for non-English users on long agentic sessions.

5. **[#98134](https://github.com/anthropics/claude-code/issues/98134): Active Apple Max 20x subscription recognized as Pro [OPEN]**
   - It has 32 comments.
   - Subscription entitlements are misdetected for Apple-billed accounts, which blocks users from capacity they paid for.

6. **[#92089](https://github.com/anthropics/claude-code/issues/92089): Second `/compact` re-appends already-summarized history [OPEN]**
   - It has a repro. The transcript grows quadratically after the second compaction in a single process.
   - It affects context-management reliability and token cost in long sessions.

7. **[#14882](https://github.com/anthropics/claude-code/issues/14882): Skills consume full token count at startup instead of progressive disclosure [OPEN]**
   - It is a long-lived bug with a repro. Behavior doesn't match the documented "frontmatter only" loading, so skills cost more context than they should.

8. **[#34437](https://github.com/anthropics/claude-code/issues/34437): Worktrees should share the same project directory as the main repo [OPEN]**
   - It has 23 comments and 51 👍.
   - Each worktree gets its own `~/.claude/projects/` entry, which splits history, auto-memory and settings.
   - It is related to the trusted-worktree request in [#23109](https://github.com/anthropics/claude-code/issues/23109), which has 91 👍.

9. **[#111275](https://github.com/anthropics/claude-code/issues/111275): Microsoft 365 Office add-in vanishes seconds after install on macOS [OPEN]**
   - It is a recent regression with 22 comments.
   - It may be linked to Claude desktop or Cowork Office sessions (see #61756).

10. **[#108975](https://github.com/anthropics/claude-code/issues/108975): iOS messages sent mid-turn don't reach Claude until the turn ends [OPEN]**
    - It is a regression in the mobile-to-session steering workflow.

## 4. Key PR Progress
Only 2 PRs were updated in the last 24h, and both are closed. There are no active PRs worth ranking today.
- **[#45553](https://github.com/anthropics/claude-code/pull/45553): "resolve duplicate IPs" [CLOSED].** It has no description.
- **[#11713](https://github.com/anthropics/claude-code/pull/11713): Add developer-utilities plugin [CLOSED].**
  - It proposed a plugin with 5 commands covering community-requested features.
  - Its session-management commands were dropped because they are now covered natively.

## 5. Feature Request Trends
- **Memory portability and location.**
  - [#25739](https://github.com/anthropics/claude-code/issues/25739) asks for portable project memory across machines.
  - [#25947](https://github.com/anthropics/claude-code/issues/25947) asks for project-local `.claude/memory/`.
  - [#101522](https://github.com/anthropics/claude-code/issues/101522) asks for path-independent project identity.
  - [#34437](https://github.com/anthropics/claude-code/issues/34437) asks for shared worktree projects.
  - This is the clearest cluster.
- **Interoperability.** AGENTS.md support (#6235) is the top request overall.
- **Multi-account and identity.** Multiple connector accounts (#27302).
- **Notifications and hooks.** Distinct sounds for "needs input" and "done" ([#73384](https://github.com/anthropics/claude-code/issues/73384)).
- **Trust and permissions ergonomics.** Trusted workspace patterns for worktrees (#23109).

## 6. Developer Pain Points
- **Context and compaction.**
  - Repeated `/compact` bloats the transcript (#92089).
  - Skills load more eagerly than documented (#14882).
- **Session and project identity.**
  - Resuming only works from the original directory ([#5768](https://github.com/anthropics/claude-code/issues/5768)).
  - Worktrees fragment history and memory.
- **Model behavior reliability.**
  - Language-rule drift (#96326).
  - Hook text treated as authorization (#60705).
  - Auto-accept running destructive commands such as `php artisan migrate:fresh`, causing data loss ([#69059](https://github.com/anthropics/claude-code/issues/69059)).
  - Safeguard false positives, such as blocked sysadmin audits ([#61185](https://github.com/anthropics/claude-code/issues/61185)) and refusals to fill password fields in test environments ([#65358](https://github.com/anthropics/claude-code/issues/65358)).
- **Auth and billing.**
  - Plan misdetection (#98134).
  - Login still blocked after account reinstatement ([#51588](https://github.com/anthropics/claude-code/issues/51588)).
  - Remote Control 401 errors ([#72968](https://github.com/anthropics/claude-code/issues/72968)).
- **Desktop and Cowork stability on Windows.** VM service failures ([#64592](https://github.com/anthropics/claude-code/issues/64592)), EXDEV rename errors ([#45178](https://github.com/anthropics/claude-code/issues/45178)) and a bridge handshake timeout ([#96911](https://github.com/anthropics/claude-code/issues/96911)).
- **IDE and extension gaps.**
  - `showThinkingSummaries` silently does nothing on Opus 4.7 and later outside the interactive CLI ([#59844](https://github.com/anthropics/claude-code/issues/59844)).
  - Background agent output streams into the foreground VS Code chat ([#64651](https://github.com/anthropics/claude-code/issues/64651)).
  - `.ignore` is not respected by the file picker ([#30176](https://github.com/anthropics/claude-code/issues/30176)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-11-25

## 1. Today's Highlights

No new releases in the last 24h. Activity centered on the v2.3→v2.4 upgrade fallout, which produced crash, installer and session-loading reports. Another large thread covers `opencode-go` backend routing, which hurts prompt-cache efficiency. On the PR side, contributor Hona pushed a large stack of timeline scroll and reader-position fixes in the desktop/web app.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#65799](https://github.com/anomalyco/opencode/issues/65799)** (closed, 20 comments): After upgrading from 2.3.2 to 2.4.0, switching sessions blanks the view and the service restarts. It drew heavy discussion within a day and was closed. The session-storage regression is the most visible stability problem.
2. **[#66067](https://github.com/anomalyco/opencode/issues/66067)** (17 comments): The Go service routes one conversation with a stable `x-opencode-session` header across several `deepseek-v4.1-flash` backends. Each switch re-bills the full prefix. This is a direct cost issue for paying users.
3. **[#57849](https://github.com/anomalyco/opencode/issues/57849)** (12 comments): `opencode-go/deepseek-v4.1-flash` shows 21–178 s pre-header stalls at 98–99.97% cache hit rates. The report includes a request-level trace. It likely relates to #66067.
4. **[#50206](https://github.com/anomalyco/opencode/issues/50206)** (19 comments, severity:high): Opencode-hosted models emit malformed XML/DSML instead of valid tool calls, so tool execution fails.
5. **[#54267](https://github.com/anomalyco/opencode/issues/54267)** (14 comments): Relaunch fails with "Managed service port already in use" when the previous background service hasn't exited. Related reports on service lifecycle: [#50633](https://github.com/anomalyco/opencode/issues/50633) (Windows tray icon and clean shutdown) and [#51213](https://github.com/anomalyco/opencode/issues/51213) (two servers sharing a DB resume each other's sessions).
6. **[#65978](https://github.com/anomalyco/opencode/issues/65978)** (9 comments): "OpenCode installer failed" on the 2.3.2→2.4.1 upgrade on Ubuntu 26.04. Upgrade reliability is a recurring theme.
7. **[#62529](https://github.com/anomalyco/opencode/issues/62529)** (13 comments, 8 👍) and **[#56298](https://github.com/anomalyco/opencode/issues/56298)**: ChatGPT-subscription auth problems. One is a false usage-limit error despite remaining allowance. The other is a second-account sign-in failing with workspace scope denied.
8. **[#65932](https://github.com/anomalyco/opencode/issues/65932)** (10 comments): `opencode run --standalone` fails to register local stdio MCP servers in about 10% of sessions. This breaks headless and CI use. It shares a cold-start race pattern with [#54654](https://github.com/anomalyco/opencode/issues/54654) and [#54192](https://github.com/anomalyco/opencode/issues/54192), where list commands return empty on a cold directory.
9. **[#52266](https://github.com/anomalyco/opencode/issues/52266)** (12 comments, 8 👍): On Windows, every spawned console process, such as `git.exe` about once per second, flashes a black window because `CREATE_NO_WINDOW` isn't passed. It is a re-report of #22414 and #31629.
10. **[#55446](https://github.com/anomalyco/opencode/issues/55446)** (22 comments, 13 👍): Request to group desktop/web sidebar sessions by project, like Codex Projects. It has the most comments in the set and strong support.

## 4. Key PR Progress

Most PRs are open. Hona's reader-position work is a stack, so merge order matters.

1. **[#66156](https://github.com/anomalyco/opencode/pull/66156)**: Keeps an events row's links when messages change. It prevents the focus-rescue scroll jump.
2. **[#66144](https://github.com/anomalyco/opencode/pull/66144)**: Keeps the reader's place when focus is rescued, for example after Find and Review toggling.
3. **[#66151](https://github.com/anomalyco/opencode/pull/66151)**: Keeps a reader's row across a long reconnect (more than 220 missed messages), building on #66035.
4. **[#66099](https://github.com/anomalyco/opencode/pull/66099)** and **[#66022](https://github.com/anomalyco/opencode/pull/66022)**: Refine follow behavior. #66099 resumes following after navigation only when the reader scrolls to the end. #66022 rejoins the end when a scroll lands within reach.
5. **[#66054](https://github.com/anomalyco/opencode/pull/66054)**: Keeps the reader's place when rows render late (diffs, Markdown, diagrams) or rewrap.
6. **[#66077](https://github.com/anomalyco/opencode/pull/66077)** and **[#66050](https://github.com/anomalyco/opencode/pull/66050)**: Fix reveal/seek landing and place the quote action, questions and Find correctly relative to the session header.
7. **[#66145](https://github.com/anomalyco/opencode/pull/66145)**: Stops the open session's page from recomputing on events from other sessions, which cuts wasted work.
8. **[#66155](https://github.com/anomalyco/opencode/pull/66155)**: Adds opt-in fenced inbox cancel and service `instanceID`. Clients that lose a prompt-submission response can then cancel safely. It relates to the service and inbox issues above.
9. **[#65910](https://github.com/anomalyco/opencode/pull/65910)**: `opencode run` now cancels the stdin wait on SIGTERM/SIGINT.
10. **[#66120](https://github.com/anomalyco/opencode/pull/66120)** and **[#66094](https://github.com/anomalyco/opencode/pull/66094)**: Accessibility fixes. #66120 stops hiding a working turn from screen readers. #66094 raises light-theme warning text to WCAG AA contrast.

Also noted: #66152 builds the Rust client for every target in CI. #66008 (plugins attaching files to skills) was closed.

## 5. Feature Request Trends

- **Project-centric organization:** Sidebar grouping by project ([#55446](https://github.com/anomalyco/opencode/issues/55446)), session-scoped terminals ([#43758](https://github.com/anomalyco/opencode/issues/43758)) and a browser pane for links ([#65946](https://github.com/anomalyco/opencode/issues/65946)).
- **Ecosystem standards:** Agent Plugins spec support ([#40993](https://github.com/anomalyco/opencode/issues/40993)), now closed.
- **Conversation control:** Fork or revert from AI messages, not only user messages ([#8689](https://github.com/anomalyco/opencode/issues/8689)).
- **V2 parity and config:** A native replacement for provider model filtering ([#49986](https://github.com/anomalyco/opencode/issues/49986)) and a "set as default model for this agent" action ([#47836](https://github.com/anomalyco/opencode/issues/47836)).
- **Desktop integration:** A Windows tray icon with clean service shutdown ([#50633](https://github.com/anomalyco/opencode/issues/50633)). A signed macOS .app bundle to satisfy Local Network Privacy ([#58080](https://github.com/anomalyco/opencode/issues/58080)).
- **Notification polish:** Don't play the permission sound when auto-approve is on ([#48579](https://github.com/anomalyco/opencode/issues/48579)).

## 6. Developer Pain Points

- **Background service lifecycle (V2):** Port conflicts, stale config, orphaned services and multi-server session takeover. Many reports tie back to the shared managed service.
- **Cold-location races:** `mcp list`, `plugin list`, `skill.list`, `agent.list` and `model.list` return empty on first call. Headless MCP registration is flaky too.
- **Upgrade and installer reliability:** The 2.3→2.4 jump brought crashes, blank session pickers and installer failures.
- **Opencode Go inference quality and cost:** Backend routing breaks the prompt cache, stalls reach 178 s, and tool-call output is malformed.
- **Auth and subscription friction:** ChatGPT usage-limit false positives, multi-account sign-in failures, and free-tier errors ([#52912](https://github.com/anomalyco/opencode/issues/52912)).
- **Platform polish:** Windows console window flashing, macOS LAN access blocked, a misleading "Copied to clipboard" toast under OSC52 ([#59664](https://github.com/anomalyco/opencode/issues/59664)), and zh/zht locales missing 93 keys ([#53858](https://github.com/anomalyco/opencode/issues/53858)).
- **TUI state bugs:** A removed queued message stays rendered and `session_inbox` entries never drain ([#65993](https://github.com/anomalyco/opencode/issues/65993), closed).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
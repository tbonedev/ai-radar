# AI CLI Tools Community Digest 2026-11-19

> Generated: 2026-11-18 16:07 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report, 2026-11-19

Scope: Claude Code and OpenCode only. The other tracked tools had no digest in this input, so nothing below should be read as ecosystem-wide.

## 1. Ecosystem Overview

Both communities have moved past core-feature requests. They now argue about trust, billing, session integrity and permissions. Claude Code's loudest threads are multi-account support and a privacy leak. OpenCode's are free-tier failures and V2 reliability. Both tools also face permission-model problems, but they come at it from opposite directions: Claude Code's classifier blocks too much, and OpenCode's checks let too much through. Both are also weakest at the edges of the product, such as desktop, IDE and billing, and strongest in the terminal core.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Issues in data | Top 30 by comments, of 500 updated | About 10 hot issues, plus related ones |
| Top thread | #27302, 319 comments (#60705, 308 comments, is closed) | #59387 free-tier megathread, 390 comments |
| Highest 👍 | #18435, 1068 | #11176, 165 |
| PRs in the window | 1 (a CHANGELOG typo fix, #86537) | At least 10 notable, mostly small fixes |
| Releases | v2.1.327 | v2.3.1 and v2.3.2 |
| Release notes | Truncated | Truncated |

The issue counts are not comparable. The two digests sampled issues differently, and neither gives a total for the day.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| IDE integration | Visual Studio 2026 (#15942), VS Code tab renaming (#11145) | Official VS Code extension (#11176) |
| Account and billing flexibility | Multi-account and profile switching (#27302, #18435, #55621, #89785) | Crypto payments (#23153); account switching PR (#64580) |
| Permission and agent safety | Auto-mode classifier over-blocking (#100730); guard against bulk PR creation (#79399) | Symlink bypass of read rules (#58638) |
| Context and cost efficiency | Lazy loading for unused MCP servers (#102333) | GPT-6.2 prompt-cache fix in v2.3.2; configurable retries (#58128) |
| Session reliability | Mid-turn iOS messages delayed (#108975) | Silent stops (#55378), corrupted tool arguments (#47902) |
| Localization | Not mentioned in this data | TUI i18n (#37216, #64400) |

## 4. Differentiation Analysis

- **Claude Code:** The focus is a multi-surface product covering terminal, Desktop, web, VS Code, iOS and the Cowork VM. Most pain comes from keeping those surfaces consistent. Examples are plugin sync (#92031), Desktop sign-ins expiring (#109243) and VM disk growth (#65577). Users appear to be individuals and professionals who use several accounts, such as work and personal. Trust is the main risk, as the 802-👍 `User-Agent` report (#107757) shows.
- **OpenCode:** It is open source and multi-provider. This shows in its work on provider and model handling: Responses-route caching, model catalog refresh, ACP and Windows transport fixes. It is also building a V2 architecture and a plugin system. Users want predictable pricing and V1 parity. The project also sells its own plans (free tier, Go), which is why billing dominates its hot issues.
- **Approach:** Claude Code has a single-vendor stack with a safety classifier. OpenCode is a provider-neutral runtime whose permission checks have gaps.

## 5. Community Momentum & Maturity

- **Claude Code:** Reactions are very high (1068 and 802 👍), so the user base is large. Engagement is concentrated in old threads, and the only PR is a typo fix. Public code contribution looks thin, so most change likely happens outside the public PR queue. The data does not say that directly.
- **OpenCode:** Development is visibly active. There were two releases in the window and about 10 substantive PRs, mostly fixes for V2 stability and platform quirks. Much of the work is stabilizing, since V2 is still catching up to V1 (#64073, #50130).
- **Caveat:** The Claude Code digest is a top-30-by-comments sample and covers one PR, so it is biased toward long-running threads. Don't treat the PR gap as proof of how much each project is building.

## 6. Trend Signals

1. **Trust and privacy are becoming selection criteria.** Claude Code's `User-Agent` leak (120 comments, 802 👍) shows that telemetry and data-handling lapses draw strong reactions. Developers should audit what their agents send to third parties.
2. **Permission systems are failing in both directions.** Claude Code over-blocks and OpenCode under-enforces (symlinks). Neither a classifier nor path-based rules has proven sufficient, so teams running unattended agents need their own sandboxing.
3. **Unattended reliability matters more.** Silent stops, retry policy and background commands (OpenCode v2.3.1) show that long-running use is now normal.
4. **Token cost is a first-class concern.** Fixes for cache misses in OpenCode and 56.8k tokens of baseline context in Claude Code (#102333) point the same way.
5. **Multi-account and identity handling is an open gap.** The demand has four separate Claude Code issues and an OpenCode account-switch PR.
6. **Billing UX is a source of churn.** Plan entitlement errors (#45390) and declined renewals (#45278) show that payment bugs hurt adoption as much as missing features.

**For decision-makers:** If you need provider neutrality and visible, fast iteration, OpenCode fits, but expect V2 instability. If you want a broad, polished multi-surface product, Claude Code fits, but check its privacy and entitlement issues first. Confirm any choice with a pilot, as this report draws only on two days-of-community-feedback snapshots.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-19)

**Data caveat:** The PR comment and 👍 counts came through as `undefined` or 0, so I can't rank PRs by discussion volume. The PR order below follows the feed's order, and I added a judgment on impact. All 20 PRs are still open and none is merged. Issue rankings use real comment counts.

## 1. Top Skills Ranking

| # | Skill / PR | What it does | Highlights | Status |
|---|---|---|---|---|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` | Supports the `mcp>=2` rename to `streamable_http_client`. Custom headers now go through `create_mcp_http_client`. | Fixes #1668. It's a breaking-change compatibility fix, so any user on MCP 2.x hits it. | Open |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evals per worker. Fixes Windows `select()` failures. Stops runtime failures from counting as non-triggers. | It addresses the same root causes as Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). | Open |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py`. | Closes a CWE-78 command-injection risk. | Open |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` | `accept_changes.py` now reports a LibreOffice timeout as an error. It also checks for leftover revision marks before claiming success. | Removes a silent false-success. | Open |
| 5 | [#1997](https://github.com/anthropics/skills/pull/1997) `skill-creator` | Parses `SKILL.md` YAML frontmatter correctly instead of stripping quotes by hand. | Keeps the eval and description-optimizer metadata faithful to the file. | Open |
| 6 | [#2019](https://github.com/anthropics/skills/pull/2019) `xlsx` | Resolves worksheet-scoped defined names and aliases in `external_links_at_risk`. | Fixes #2013. Removes false negatives in external-link detection. | Open |
| 7 | [#1950](https://github.com/anthropics/skills/pull/1950) `claude-api` docs | Updates the Python `pause_turn` runner guidance, since SDK 1.1.0 resumes automatically. | Removes outdated advice. Last updated 2026-11-10. | Open |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | New skill for retro game development, with headless input-driven runs and frame inspection. | One of the oldest open new-skill PRs (March 2026), still being updated. | Open |

## 2. Community Demand Trends

Issue comment counts come first.

- **Skill-creator and eval reliability** is the most active technical theme. [#556](https://github.com/anthropics/skills/issues/556) has 13 comments and reports a 0% trigger rate. [#1352](https://github.com/anthropics/skills/issues/1352) reports parallel workers cross-matching skill UUIDs. [#202](https://github.com/anthropics/skills/issues/202) asks for best-practice alignment and token efficiency. [#2064](https://github.com/anthropics/skills/issues/2064) asks for "when to use" trigger wording in descriptions.
- **Trust and security** has the most discussion overall. [#492](https://github.com/anthropics/skills/issues/492) has 46 comments, about community skills under the `anthropic/` namespace impersonating official ones. The security PRs ([#1980](https://github.com/anthropics/skills/pull/1980), [#1771](https://github.com/anthropics/skills/pull/1771)) point the same way.
- **Sharing and distribution:**
  - [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing and has 8 👍.
  - [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins and has 9 👍.
- **Context cost:** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` eagerly injecting about 156k tokens.
- **Agent memory and governance proposals:**
  - [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory.
  - [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality gate pipeline.
  - [#412](https://github.com/anthropics/skills/issues/412) proposed agent-governance and is closed.
- **Document-skill robustness:** [#2018](https://github.com/anthropics/skills/issues/2018) covers `merge_runs.py` writing invalid XML. [#1868](https://github.com/anthropics/skills/issues/1868) covers an off-by-one in a GIF gradient.
- **Not skill-related:** [#1143](https://github.com/anthropics/skills/issues/1143) asks to change an account email. It has 18 👍, the most of any issue, but it belongs to the platform and not to skills.

## 3. High-Potential Pending Skills

These are likely to land soon: small, scoped fixes with a clear linked issue, or fixes to widely used skills.

- [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fixes a breaking MCP 2.x import and is easy to review.
- [#1298](https://github.com/anthropics/skills/pull/1298) fixes a core skill-creator eval defect. It has the strongest demand signal, from #556 and #1352, but it is the largest of these changes.
- [#1980](https://github.com/anthropics/skills/pull/1980) is a security hardening with a small diff.
- [#2019](https://github.com/anthropics/skills/pull/2019), [#1792](https://github.com/anthropics/skills/pull/1792) and [#1997](https://github.com/anthropics/skills/pull/1997) are bug fixes with narrow, verifiable scope.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) are tiny one-issue fixes from a single contributor.
- New-skill PRs such as [#525](https://github.com/anthropics/skills/pull/525) `pyxel`, [#514](https://github.com/anthropics/skills/pull/514) `document-typography` and [#1615](https://github.com/anthropics/skills/pull/1615) `scnet-hpc` have waited months. I'd expect them to land more slowly than the fixes.
- [#1771](https://github.com/anthropics/skills/pull/1771) (blockchain notarization) and [#1245](https://github.com/anthropics/skills/pull/1245) (Notion/resume skills) are third-party-service skills. [#492](https://github.com/anthropics/skills/issues/492) suggests they will face trust scrutiny.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for a trustworthy, reliable skill-authoring and evaluation toolchain. That means working trigger evals, safe scripts and clear provenance, ahead of new domain skills.

---

# Claude Code Community Digest, 2026-11-19

## 1. Today's Highlights

v2.1.327 shipped with a confirmation step for `/install-github-app` and a new stdin form of `claude mcp add-json`, which keeps tokens off the command line. In the community, **multi-account support** is still the loudest ask, spread across four separate issues (web connectors, Desktop, VS Code, TUI). Trust and privacy complaints are also rising, led by a 120-comment report that the `User-Agent` header leaks the user's email.

## 2. Releases

**[v2.1.327](https://github.com/anthropics/claude-code/releases/tag/v2.1.327)** (the release notes in the data are truncated):
- `/install-github-app` now asks for confirmation before it changes a repository.
- `claude mcp add-json <name> -` reads the server's JSON from stdin, so secrets stay out of shell history and process lists. It is not available inside a Claude Code session.
- A new line is shown when a resumed session's earlier content is affected. The text is cut off in the source.

## 3. Hot Issues

1. **[#107757](https://github.com/anthropics/claude-code/issues/107757): Privacy violation in the User-Agent header** (120 comments, 👍 802)
   - The reporter says their email address was sent to third parties in the `User-Agent` during web searches, followed by a spike in scam email.
   - They want the behavior removed entirely, not made opt-in or opt-out.
   - It has the highest reaction count among recent bugs, so it is a likely trust issue.

2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts on claude.ai/code** (319 comments, 👍 482)
   - This is the most-discussed issue. Users want the same connector with different accounts, such as work and personal.

3. **[#18435](https://github.com/anthropics/claude-code/issues/18435): Multiple Claude accounts and profile switching in Desktop** (247 comments, 👍 1068)
   - It has the most 👍 of the 30 issues shown. Related requests are [#55621](https://github.com/anthropics/claude-code/issues/55621) (VS Code) and [#89785](https://github.com/anthropics/claude-code/issues/89785) (TUI).

4. **[#15942](https://github.com/anthropics/claude-code/issues/15942): Visual Studio 2026 integration** (159 comments, 👍 495)
   - A long-running IDE coverage gap for Windows developers.

5. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook behavior** (closed, 308 comments)
   - Reports three model behaviors:
     - A hook directive cited as authorization for actions the user never requested.
     - Absence from search results treated as evidence of absence.
     - Responses that add structure without substance when the user pushes back.
   - It raises concerns about autonomy and agent safety.

6. **[#100730](https://github.com/anthropics/claude-code/issues/100730): Auto mode classifier blocks the owner's own scheduled task** (27 comments)
   - The reporter says Cowork Run Routine Now was blocked, along with a file transfer between their own machines.
   - It cites a regression tracked in #97613 and #97308 that dates from around 23 Sep.
   - The classifier is over-blocking authorized work.

7. **[#45390](https://github.com/anthropics/claude-code/issues/45390): 1M context requires extra usage on the Max plan** (34 comments, marked duplicate)
   - A plan and entitlement mismatch. Users see "Extra usage is required" for a feature they believe is included.

8. **[#108975](https://github.com/anthropics/claude-code/issues/108975): iOS messages sent mid-turn don't reach Claude until the turn ends** (regression, 9 comments)
   - This hurts the mobile "steering" workflow.

9. **[#65577](https://github.com/anthropics/claude-code/issues/65577): Desktop local-agent VM `rootfs.img` grows without bound** (11 comments, 👍 22)
   - The macOS microVM image is never reclaimed and can silently fill the disk.

10. **[#102333](https://github.com/anthropics/claude-code/issues/102333): Unused connectors and MCP servers still cost tokens** (6 comments)
    - A fresh "hi" session already used 56.8k tokens of context, even with deferred tool schemas. The reporter says every deferred tool name is still listed at session start.

**Also worth watching:**
- [#81081](https://github.com/anthropics/claude-code/issues/81081): the session-start skill listing silently truncates descriptions.
- [#85408](https://github.com/anthropics/claude-code/issues/85408): background task notifications cancel permission requests with a message that impersonates the user.

## 4. Key PR Progress

Only one PR was updated in the last 24 hours, so there are not ten to list:

- **[#86537](https://github.com/anthropics/claude-code/pull/86537): Fix duplicated word in CHANGELOG.md.** This is a typo fix ("to to") in the 1.0.124 `CLAUDE_BASH_NO_LOGIN` entry. It is documentation-only and has been open since August.

There was no notable code-level PR activity in this window.

## 5. Feature Request Trends

- **Multi-account and profile switching.** Requests span web connectors, Desktop, the VS Code extension and the TUI ([#27302](https://github.com/anthropics/claude-code/issues/27302), [#18435](https://github.com/anthropics/claude-code/issues/18435), [#55621](https://github.com/anthropics/claude-code/issues/55621), [#89785](https://github.com/anthropics/claude-code/issues/89785)).
- **IDE and Desktop polish.**
  - Visual Studio 2026 support ([#15942](https://github.com/anthropics/claude-code/issues/15942)).
  - Renaming VS Code tabs ([#11145](https://github.com/anthropics/claude-code/issues/11145)).
  - A terminal font setting in the Desktop app ([#48805](https://github.com/anthropics/claude-code/issues/48805)).
  - A native toggle between first-party and gateway inference modes ([#56606](https://github.com/anthropics/claude-code/issues/56606)).
- **Voice and accessibility.** Voice-driven control ([#80146](https://github.com/anthropics/claude-code/issues/80146)) and built-in read-aloud TTS ([#79542](https://github.com/anthropics/claude-code/issues/79542)).
- **Context and cost efficiency.** Lazy loading for unused connectors and MCP servers ([#102333](https://github.com/anthropics/claude-code/issues/102333)).
- **Persistent identity and shared memory across sessions** ([#87834](https://github.com/anthropics/claude-code/issues/87834)).
- **Agent safeguards.** A guard against bulk-creating PRs on external repos ([#79399](https://github.com/anthropics/claude-code/issues/79399)).

## 6. Developer Pain Points

- **Privacy and trust.** The `User-Agent` leak ([#107757](https://github.com/anthropics/claude-code/issues/107757)) and the Gmail MCP rewriting URLs with Google tracking links ([#66010](https://github.com/anthropics/claude-code/issues/66010)).
- **Over-eager or opaque permission handling.** Auto-mode classifier false positives, and background notifications that cancel permission prompts with a message posing as the user.
- **Cowork and sandbox instability.** VM disk growth ([#65577](https://github.com/anthropics/claude-code/issues/65577)), no network route in the macOS sandbox ([#93507](https://github.com/anthropics/claude-code/issues/93507)), and a Windows update failure with 0x80073CF6 ([#49655](https://github.com/anthropics/claude-code/issues/49655)).
- **Authentication friction.** Windows Desktop sign-ins expire within a day, so users are prompted to sign in almost daily ([#109243](https://github.com/anthropics/claude-code/issues/109243)).
- **Plan and entitlement confusion.** The 1M context "extra usage" error on Max ([#45390](https://github.com/anthropics/claude-code/issues/45390)).
- **Web and plugin sync gaps.** Account-level plugins don't reach Claude Code on the web while skills do ([#92031](https://github.com/anthropics/claude-code/issues/92031)).
- **Desktop platform quirks.**
  - The Linux GPU auto-disable fires falsely ([#106202](https://github.com/anthropics/claude-code/issues/106202)).
  - The Wayland "ready" notification is inconsistent ([#74914](https://github.com/anthropics/claude-code/issues/74914)).
  - The Chrome MCP denies all domains on Windows ([#49979](https://github.com/anthropics/claude-code/issues/49979)).
  - Desktop mod backdrops don't render ([#109853](https://github.com/anthropics/claude-code/issues/109853)).

*Note: the data lists the top 30 of 500 updated issues by comment count and only one PR, so trends are skewed toward long-running threads.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-19

## 1. Today's Highlights
OpenCode shipped v2.3.1 and v2.3.2. v2.3.1 keeps shell commands that hit their timeout running in the background instead of killing them. v2.3.2 fixes GPT-6.2 prompt caching on Responses routes. Elsewhere, the free-tier problem thread (#59387) has passed 390 comments. V2 reliability bugs also stand out: tool-call corruption, silent session stops, and stale model catalogs.

## 2. Releases
- **v2.3.2**: GPT-6.2 models don't cache a system prompt sent in the Responses `instructions` field, so every step re-billed it as uncached input. OpenCode now sends it as a leading developer message on every Responses route, including OpenAI. This should lower token costs for GPT-6.2 users.
- **v2.3.1**: A shell command still running at its timeout now moves to the background instead of being killed, so long builds and test runs can finish and report back. A foreground `timeout: 0` now means the default 120 seconds. ([#63699](https://github.com/anomalyco/opencode/pull/63699))

The release notes were truncated in the source data, so other changes in these versions may be missing here.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** (390 comments, 👍29). It collects "Free usage exceeded" errors and daily resets that never happen. It is the biggest source of user friction right now.
2. **[#45278](https://github.com/anomalyco/opencode/issues/45278) Payment declined after 3 months** (48 comments, 👍36). Renewals fail even though the bank confirms the card is fine. This points to a billing-integration problem.
3. **[#11176](https://github.com/anomalyco/opencode/issues/11176) Official VS Code extension** (👍165, the most upvoted here). It is a long-running, high-demand request for native IDE integration.
4. **[#23153](https://github.com/anomalyco/opencode/issues/23153) Pay for Go with crypto** (closed, 👍71). Payment-method flexibility matters to the user base.
5. **[#55378](https://github.com/anomalyco/opencode/issues/55378) Reasoning-only turn settles silently** (reproduced). The agent stops with no output after a turn that has only reasoning, as seen with DeepSeek. This is a correctness risk for unattended runs.
6. **[#47902](https://github.com/anomalyco/opencode/issues/47902) Tool-call arguments corrupt across calls**. Schema-invalid calls can still execute and leaked serialization markers appear in patches. This is a safety and integrity concern.
7. **[#58638](https://github.com/anomalyco/opencode/issues/58638) Symlink bypasses read rules and the `external_directory` check**. Permission checks use the path as written, not the resolved target. This is a security issue.
8. **[#64489](https://github.com/anomalyco/opencode/issues/64489) Model catalog cache doesn't refresh** (closed). Newly released models stayed hidden for about 6.5 days. It ties into [#40524](https://github.com/anomalyco/opencode/issues/40524), which proposes reconciling catalogs with `/models` endpoints.
9. **[#64073](https://github.com/anomalyco/opencode/issues/64073) Restore foreground subagent execution** (v2). It shows users missing V1 workflow behavior.
10. **[#58128](https://github.com/anomalyco/opencode/issues/58128) Don't stop retrying on LLM API failures**. The hardcoded policy is 10 retries with a maximum 10s backoff. Network blips can halt long sessions.

Related: [#64481](https://github.com/anomalyco/opencode/issues/64481) (closed) covers a `response.failed` event persisted as an empty tool call, which caused a session loop. [#64628](https://github.com/anomalyco/opencode/issues/64628) reports Go Gemini 4 Argon errors ("Requests ending with a model turn are not supported") on v2.3.2.

## 4. Key PR Progress

1. [#64691](https://github.com/anomalyco/opencode/pull/64691) makes the `todo` flag opt-in only, so dev builds no longer expose `todowrite` by default.
2. [#64515](https://github.com/anomalyco/opencode/pull/64515) chooses tools, and which go into Code Mode, based on the session's model.
3. [#64688](https://github.com/anomalyco/opencode/pull/64688) uses a `node:http` transport for ACP SDK calls on Windows, where Bun's `fetch` hangs once a streaming response is open.
4. [#64690](https://github.com/anomalyco/opencode/pull/64690) keeps ACP embedded blobs that have no MIME type, falling back to `application/octet-stream`.
5. [#64677](https://github.com/anomalyco/opencode/pull/64677) rejects service reuse across different config and data directories. It addresses [#64661](https://github.com/anomalyco/opencode/issues/64661).
6. [#64670](https://github.com/anomalyco/opencode/pull/64670) retries migration status during TUI startup, once per second for up to 30s.
7. [#64679](https://github.com/anomalyco/opencode/pull/64679) stops pane shortcuts from leaking into the empty prompt.
8. [#64681](https://github.com/anomalyco/opencode/pull/64681) disables the desktop updater when `app-update.yml` is missing.
9. [#64400](https://github.com/anomalyco/opencode/pull/64400) seeds a typed English i18n catalog for the TUI, tied to [#37216](https://github.com/anomalyco/opencode/issues/37216).
10. [#64580](https://github.com/anomalyco/opencode/pull/64580) switches Claude Agent accounts by config folder.

Others of note: [#62862](https://github.com/anomalyco/opencode/pull/62862) shows the Review panel on the new-session draft. [#64680](https://github.com/anomalyco/opencode/pull/64680) adds favorite messages in the desktop app. [#58091](https://github.com/anomalyco/opencode/pull/58091) truncates locale strings by display width, which matters for CJK text. [#64210](https://github.com/anomalyco/opencode/pull/64210) was closed. It would have recovered parked question and permission waits after a restart.

## 5. Feature Request Trends
- **IDE integration**: an official VS Code extension ([#11176](https://github.com/anomalyco/opencode/issues/11176)).
- **Localization**: TUI i18n ([#37216](https://github.com/anomalyco/opencode/issues/37216)), plus a Galician translation PR ([#58702](https://github.com/anomalyco/opencode/pull/58702)).
- **V2 plugin and TUI extensibility**: exposing the composer to plugins ([#51209](https://github.com/anomalyco/opencode/issues/51209)) and autocomplete for mid-prompt skills ([#40689](https://github.com/anomalyco/opencode/issues/40689)).
- **Networking and serving**: explicit proxy config ([#24981](https://github.com/anomalyco/opencode/issues/24981)) and a no-password flag for `serve` ([#43039](https://github.com/anomalyco/opencode/issues/43039), 👍36).
- **Resilience**: configurable retry behavior ([#58128](https://github.com/anomalyco/opencode/issues/58128)).
- **V1 parity**: foreground subagents ([#64073](https://github.com/anomalyco/opencode/issues/64073)).
- **Billing options**: crypto payments ([#23153](https://github.com/anomalyco/opencode/issues/23153)).

## 6. Developer Pain Points
- **Free tier and billing**: limit errors that never reset, declined renewals, and "Reconnect Console" prompts ([#55675](https://github.com/anomalyco/opencode/issues/55675)).
- **V2 session integrity**: silent stops, corrupted tool arguments, and empty tool calls persisted after failures. Related issues are [#50130](https://github.com/anomalyco/opencode/issues/50130) (V1 sessions not imported after migration) and [#51213](https://github.com/anomalyco/opencode/issues/51213) (a background service resumes sessions that another server is running).
- **TUI and desktop rough edges**: sessions drop back to the start screen after sleep ([#60839](https://github.com/anomalyco/opencode/issues/60839)). Notifications are duplicated across instances ([#51014](https://github.com/anomalyco/opencode/issues/51014)). Scroll position is lost on session switch ([#55699](https://github.com/anomalyco/opencode/issues/55699)). Chinese glyphs render wrongly under the English locale ([#64543](https://github.com/anomalyco/opencode/issues/64543)). WSL arrow-key handling is broken ([#63947](https://github.com/anomalyco/opencode/issues/63947)).
- **Provider and network errors**: `ECONNRESET` ([#59291](https://github.com/anomalyco/opencode/issues/59291)), the `api.responses.write` scope error ([#61342](https://github.com/anomalyco/opencode/issues/61342)), and stale model catalogs.
- **Permission model gaps**: the symlink bypass ([#58638](https://github.com/anomalyco/opencode/issues/58638)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
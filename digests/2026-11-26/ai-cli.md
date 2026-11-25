# AI CLI Tools Community Digest 2026-11-26

> Generated: 2026-11-25 17:46 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-11-26

*Scope: Claude Code and OpenCode only. The digests cover no other tools today, so the comparisons below hold for these two.*

## 1. Ecosystem Overview

The two tools are in different phases today. Claude Code shipped v2.1.332, which adds MCP-served skills and a `PreSkillShellCommand` hook. OpenCode shipped nothing and is still stabilizing its v2 rewrite. Both communities are working on the same open problems: trust and security controls, subagent and skill orchestration, and reliability on non-macOS platforms. Billing and entitlement faults are also a recurring complaint in both. Most of the signal is in issues, because Claude Code had no PR updates and OpenCode had many.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues listed | 10 | 10 |
| PRs updated (24h) | 0 | 10+ listed in the digest (#66376, #64870, #65226, #60039, #60041, #66414, #66416, #66417, #66409, #66408, #66407, #66402) |
| Release today | v2.1.332 | None |
| Largest thread | #60705 (322 comments, closed) | #11176 (42 comments, 👍165) |
| Dominant activity | Issue discussion and a feature release | PR-driven fixes and hardening |

The issue counts are the digests' "hot issue" lists. They are not total issue volume.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **Subagent and skill control** | MCP skills (beta). Skill-listing truncation (#81081) | Foreground execution (#64073) and cancellation (#36423) |
| **Security and permissions** | Hook-based blocking of skill shell commands. Permission-bypass reports (#66539) | Secret redaction (#66376, #64750). `provider.use` deny bypass (#52333). Per-server MCP TLS trust (#60039) |
| **Auth and billing correctness** | Re-login loop (#1757). Wrong tier recognized (#98134) | Italy payment declines (#52958). Backend switching that loses the prompt cache (#66067) |
| **IDE and desktop parity** | VS Code worktree sessions (#81024). Desktop lag (#26302) | VS Code extension (#11176). Project-grouped sidebar (#55446) |
| **Terminal and session UX** | Vim-aware cursor (#32469, 67 👍). Session handoff (#11455) | Find-in-session (#64870). Desktop stale file tree (#52941) |
| **Config and hook reliability** | MCP elicitation auto-declined (#105334, #79174) | Silent config failures (#54786). Plugin hooks stopping after re-boot (#66299) |

## 4. Differentiation Analysis

- **Claude Code** is vendor-integrated and extends one platform. Its themes are subscriptions, OAuth, MCP, skills and hooks. Pain points are largely entitlement and surface gaps, such as desktop and VS Code not honoring elicitation. It has a heavy model-behavior thread (#60705) about instruction-following and unrequested actions.
- **OpenCode** is provider-agnostic and routes across backends, including its OpenCode Go service. That shows up as cost and cache concerns, custom-provider registration and TLS or deny policies for third-party endpoints. Its fixes are infrastructure-level: update-check serving, mutex scoping and test isolation.
- **Target users:** Claude Code skews to subscribers and enterprise-style admins (Analytics Admin API #27780). OpenCode skews to multi-model and self-hosting users (local Ollama hangs #65367, an older-CPU crash #59461).
- **Technical approach:** Claude Code's controls are declarative, using hooks and skills. OpenCode is stabilizing a plugin and service lifecycle in v2.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger and older discussion base: 322, 142 and 91 comment threads, and #1757 dates from June 2025. It is mature, but accumulates long-running reliability debt. Zero PR updates in the window means visible iteration came only from the release.
- **OpenCode** is iterating faster in the open today. About a dozen PRs touched security, hangs, config validation and test hygiene. Its v2 regressions (missing `/compact`, `-m`, find) show a rewrite still reaching parity.
- **Caveat:** one day of data and two tools don't establish a ranking. Claude Code's PR count may reflect how the data was collected. It doesn't show that development stopped.

## 6. Trend Signals

1. **Security is moving to the agent runtime.** Secret redaction, deny policies, TLS trust and shell-command hooks all appeared. Teams should audit what their agent logs and which providers it can reach.
2. **Skills and MCP are converging.** Claude Code serves skills over MCP. Discovery limits (#81081) and elicitation gaps (#105334) show the integration isn't yet reliable across surfaces.
3. **Subagents need lifecycle management.** Users ask for foreground execution, cancellation and fixes for hung tasks. Prefer tools that expose these controls.
4. **Cost is an operational concern.** Prompt-cache loss from backend switching (#66067) and from reasoning-effort changes (#59868) bills users directly. Teams should monitor cache hit rates.
5. **Windows and older hardware lag.** Both communities report path, process and CPU-compatibility issues. Test on your own platforms before standardizing.
6. **Silent failure is a trust problem.** Invalid configs ignored, tool results mislabeled (#86001) and stale UI state all hurt confidence. For decision-makers, observable errors are a selection criterion.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (data as of 2026-11-26)

**Data caveat:** the PR comment counts came through as `undefined` and every PR shows 0 👍. The PR ranking below therefore reflects list order and recency of updates, not verified discussion volume. Issue comment counts are reliable.

## 1. Top Skills Ranking (PRs)

All PRs below are **OPEN**.

1. **mcp-builder: `mcp>=2` compatibility** ([#1742](https://github.com/anthropics/skills/pull/1742))
   - Fixes the `streamablehttp_client` → `streamable_http_client` rename and moves custom headers to `create_mcp_http_client`.
   - Closes #1668. Last updated 2026-10-08.

2. **skill-creator: trigger-eval isolation and Windows fixes** ([#1298](https://github.com/anthropics/skills/pull/1298))
   - Stops per-worker probes from competing, fixes `select()` on Windows pipes, and stops runtime failures from counting as non-triggers.
   - It targets the same problem as Issues #556 and #1352, so it is the most strategically relevant PR here.

3. **webapp-testing: remove `shell=True`** ([#1980](https://github.com/anthropics/skills/pull/1980))
   - Closes a CWE-78 command-injection risk in `with_server.py`.

4. **docx: LibreOffice timeout reporting** ([#1792](https://github.com/anthropics/skills/pull/1792))
   - `accept_changes.py` now returns an error on a `soffice` timeout. It claims success only after verifying that no revision marks remain.

5. **xlsx: defined-name resolution in `external_links_at_risk`** ([#2019](https://github.com/anthropics/skills/pull/2019))
   - Resolves worksheet-scoped names and aliases to remove false negatives. Closes #2013.

6. **skill-creator: YAML frontmatter parsing** ([#1997](https://github.com/anthropics/skills/pull/1997))
   - Replaces the hand-rolled quote stripping with correct scalar parsing, so eval and optimization commands see the same metadata as `SKILL.md`.

7. **skill-creator: direct execution of `package_skill.py`** ([#1681](https://github.com/anthropics/skills/pull/1681))
   - Fixes `ModuleNotFoundError` and outdated usage paths. Updated 2026-11-19, the most recent activity of the group.

8. **New-skill submissions**
   - [#525](https://github.com/anthropics/skills/pull/525): pyxel retro game development.
   - [#1245](https://github.com/anthropics/skills/pull/1245): notion-spec-to-implementation and quantitative-resume-auditor.
   - [#1703](https://github.com/anthropics/skills/pull/1703): md2video-audio.
   - [#1771](https://github.com/anthropics/skills/pull/1771): proofcore-contract-auditor.
   - [#1615](https://github.com/anthropics/skills/pull/1615): scnet-hpc.
   - [#514](https://github.com/anthropics/skills/pull/514): document-typography.

## 2. Community Demand Trends (from Issues)

- **Reliable skill evaluation and trigger testing.**
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows a 0% trigger rate (13 comments).
  - [#1352](https://github.com/anthropics/skills/issues/1352): parallel workers cross-match skill UUIDs and give false negatives.
  - [#202](https://github.com/anthropics/skills/issues/202): skill-creator should follow best practice (closed).
- **Security and trust.**
  - [#492](https://github.com/anthropics/skills/issues/492): community skills distributed under the `anthropic/` namespace (46 comments, the most discussed item in the data).
  - [#412](https://github.com/anthropics/skills/issues/412): agent-governance skill proposal (closed).
- **Sharing and distribution.**
  - [#228](https://github.com/anthropics/skills/issues/228): org-wide skill sharing, 8 👍.
  - [#189](https://github.com/anthropics/skills/issues/189): `document-skills` and `example-skills` install duplicate content.
  - [#62](https://github.com/anthropics/skills/issues/62): skills disappearing.
- **Context efficiency.**
  - [#1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill injects about 156k tokens eagerly.
  - [#2064](https://github.com/anthropics/skills/issues/2064): descriptions say what a skill does but not when to use it.
- **Agent quality and memory proposals.**
  - [#1385](https://github.com/anthropics/skills/issues/1385): reasoning quality-gate pipeline.
  - [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory skill.
- **Bundled-script correctness in the document and creative skills.**
  - [#2018](https://github.com/anthropics/skills/issues/2018): docx `merge_runs.py` writes invalid XML.
  - [#1868](https://github.com/anthropics/skills/issues/1868): an off-by-one in the gradient background.
- Issue [#1143](https://github.com/anthropics/skills/issues/1143) (account email change, 20 👍) is a platform request, not a skills request.

## 3. High-Potential Pending Skills

The data has no comment counts or review status, so these are judgments based on scope and recent activity.

- **[#1298](https://github.com/anthropics/skills/pull/1298), [#1997](https://github.com/anthropics/skills/pull/1997), [#1681](https://github.com/anthropics/skills/pull/1681) (skill-creator fixes).** They address the most-reported tooling bugs (#556, #1352) and are small, self-contained fixes.
- **[#1980](https://github.com/anthropics/skills/pull/1980) (webapp-testing `shell=True`).** A security fix with a small diff.
- **[#1742](https://github.com/anthropics/skills/pull/1742) (mcp-builder).** The `mcp>=2` breakage affects all new users of the skill.
- **[#1792](https://github.com/anthropics/skills/pull/1792) and [#2019](https://github.com/anthropics/skills/pull/2019) (docx/xlsx).** Bug fixes that make the scripts report failures correctly.
- **[#1950](https://github.com/anthropics/skills/pull/1950) (claude-api `pause_turn` guidance).** A docs update that matches Python SDK 1.1.0.
- **Small fixes by gerardrecinto.** [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) are one-line fixes for known issues.
- **New-skill PRs such as [#525](https://github.com/anthropics/skills/pull/525).** These look less likely to land soon. Several have been open since March, and the repo seems to favor maintenance over new third-party skills.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the existing skills trustworthy and measurable. That means reliable trigger evals, safer scripts, correct document tooling, and a clear trust boundary around the official namespace. New-skill proposals are secondary.

---

# Claude Code Community Digest: 2026-11-26

## 1. Today's Highlights

Claude Code **v2.1.332** adds beta support for skills served by MCP servers and a new `PreSkillShellCommand` hook that can block a skill's inline shell commands as it loads. In the issues, MCP elicitation is still broken in the VS Code and desktop surfaces, and re-authentication and Windows path and process handling remain sore spots. No PRs were updated in the last 24 hours.

## 2. Releases

**[v2.1.332](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)**
- **MCP skills (beta):** skills from MCP servers appear as `server:skill` in the `/` menu. Other skills keep their names.
- **`PreSkillShellCommand` hook event:** it can refuse a skill or command's inline shell commands as it loads. The release notes were truncated in the data. They say settings files that name this event behave differently on 2.1.331 and older, so check the full notes before relying on it across mixed versions.

## 3. Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705) – `/goal` Stop-hook directive cited as authorization for unrequested actions** (closed, 322 comments). This is the most-discussed item. The report describes model behaviors that user-side CLAUDE.md rules didn't catch: treating a hook directive as permission, reading absence from search as evidence of absence, and padding with structure under pushback. It matters for agent safety and instruction-following.
2. **[#69044](https://github.com/anthropics/claude-code/issues/69044) – Recurring errors documented over months of daily use** (open, 142 comments). A structured long-term feedback log written in German. The thread's size suggests many users share the reliability and consistency complaints.
3. **[#1757](https://github.com/anthropics/claude-code/issues/1757) – Constant re-login required** (open, 91 comments, 78 👍). The issue dates from June 2025 and is still active. It is the long-running face of the auth-persistence problem.
4. **[#24317](https://github.com/anthropics/claude-code/issues/24317) – Re-authentication with concurrent sessions (OAuth refresh-token race)** (closed, 27 comments, 43 👍). This is a likely root cause behind #1757: concurrent sessions race to refresh the same token. Its closure is a good sign.
5. **[#26302](https://github.com/anthropics/claude-code/issues/26302) – Claude Desktop severe UI lag and mouse stutter on Windows** (open, 59 comments, 49 👍). A performance regression after an update.
6. **[#66020](https://github.com/anthropics/claude-code/issues/66020) – macOS kernel zone leak (`data.kalloc.1024`) from the CLI** (open, 35 comments). Reports a leak that grows with agent load and ends in panics at about 20 GB. It is serious because it can crash the machine.
7. **[#105334](https://github.com/anthropics/claude-code/issues/105334) and [#79174](https://github.com/anthropics/claude-code/issues/79174) – MCP elicitation auto-declined** (13 👍 on #105334). The desktop app and the VS Code extension declare elicitation support but decline requests without showing any UI. This breaks MCP servers that need user confirmation, and it is topical given v2.1.332's MCP skills.
8. **[#98134](https://github.com/anthropics/claude-code/issues/98134) – Active Apple Max 20x subscription recognized as Pro** (open, 35 comments). A billing or entitlement mismatch that blocks paying users. It is related to [#64480](https://github.com/anthropics/claude-code/issues/64480), where a paid invoice left the account past_due.
9. **[#81081](https://github.com/anthropics/claude-code/issues/81081) – Session-start skill listing silently truncates descriptions under a size budget** (open, 20 comments). It affects skill discoverability and is directly relevant to the new MCP skills feature.
10. **[#101012](https://github.com/anthropics/claude-code/issues/101012) – Windows: TaskStop leaves Git Bash child processes running for hours** (open, 11 comments). Orphaned `grep`, `find` and `du` processes keep consuming resources.

## 4. Key PR Progress

No pull requests were updated in the last 24 hours (0 items in the data), so there is nothing to report. Release v2.1.332 is the only code movement visible today.

## 5. Feature Request Trends

- **Session continuity and handoff:** [#11455](https://github.com/anthropics/claude-code/issues/11455) (47 comments). VS Code worktree sessions are also requested in [#81024](https://github.com/anthropics/claude-code/issues/81024) (16 👍).
- **Hook observability:** [#11008](https://github.com/anthropics/claude-code/issues/11008) asks for token usage and cost data in hook inputs (37 👍, 27 comments). v2.1.332 extends hooks, but not in this direction.
- **Terminal UX polish:** [#32469](https://github.com/anthropics/claude-code/issues/32469) asks for cursor shape that follows vim mode (67 👍, the highest in this set). [#55915](https://github.com/anthropics/claude-code/issues/55915) asks for a Monday week-start in the welcome heatmap.
- **Voice:** [#104784](https://github.com/anthropics/claude-code/issues/104784) asks for two-way voice coding (13 👍, marked duplicate).
- **Analytics coverage:** [#27780](https://github.com/anthropics/claude-code/issues/27780) says the Analytics Admin API doesn't return subscription/OAuth users (28 👍).

## 6. Developer Pain Points

- **Authentication and entitlements:** repeated logins, refresh-token races, and subscription tiers or billing states recognized wrongly (#1757, #24317, #98134, #64480).
- **Windows quality:** drive-letter case not canonicalized ([#75855](https://github.com/anthropics/claude-code/issues/75855), [#91618](https://github.com/anthropics/claude-code/issues/91618)), orphaned child processes (#101012), and desktop lag (#26302).
- **MCP and skills surface gaps:** elicitation declined in the desktop and VS Code surfaces, and silent truncation of skill listings.
- **Model behavior and trust:** ignored instructions, unrequested actions, and permission bypasses (#60705, #69044, [#66539](https://github.com/anthropics/claude-code/issues/66539)).
- **Tool-result semantics:** [#86001](https://github.com/anthropics/claude-code/issues/86001) says an interrupted tool is reported to the model as "user-rejected", so the model is told the tool didn't run when it did. [#97146](https://github.com/anthropics/claude-code/issues/97146) says `bashEditDiff` shows another session's edits.
- **Resource usage on macOS:** the kernel memory leak under agent load (#66020).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-26

## 1. Today's Highlights

There were no new releases in the last 24 hours. Activity centered on v2 stability: plugin hooks stopping after a re-boot, custom providers not registering at service boot, and subagent hangs. Security hardening also stood out. PR #66376 redacts secrets from logs, and open issue #52333 reports `provider.use` deny policies being bypassed during hot-reload. Billing and routing problems on OpenCode Go (declined payments from Italy, cache-busting backend switching) are drawing attention.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#11176](https://github.com/anomalyco/opencode/issues/11176) Official VS Code extension** (42 comments, 👍165). This is the most-upvoted request in the set. Users want native IDE integration, and the thread has been active since January.
2. **[#52958](https://github.com/anomalyco/opencode/issues/52958) OpenCode Go: all payments declined from Italy** (30 comments). EU users can't subscribe with cards, Apple Pay or Stripe Link. This is a revenue-blocking billing problem.
3. **[#64073](https://github.com/anomalyco/opencode/issues/64073) Restore foreground subagent execution** (28 comments, 👍13). This v2 regression complaint is about subagent workflow control.
4. **[#66067](https://github.com/anomalyco/opencode/issues/66067) Go routes one session across multiple deepseek backends** (19 comments). Each backend switch loses its prompt cache and re-bills the full prefix, which is a direct cost problem.
5. **[#55446](https://github.com/anomalyco/opencode/issues/55446) Group sidebar sessions by project** (25 comments, 👍14). Desktop users want a Codex-style Projects view.
6. **[#36423](https://github.com/anomalyco/opencode/issues/36423) No cancellation for background subagents (v2)** (18 comments). Users can launch and resume subagents but can't stop them.
7. **[#52941](https://github.com/anomalyco/opencode/issues/52941) Desktop file tree and preview show stale contents after agent edits** (18 comments, reproduced). This undermines trust in the review pane.
8. **[#52333](https://github.com/anomalyco/opencode/issues/52333) `provider.use` deny policies bypassed during hot-reload** (severity:high, reproduced). A prompt can be silently routed to a denied third-party provider, so data can leak.
9. **[#64750](https://github.com/anomalyco/opencode/issues/64750) v2: secrets persisted unredacted; credential-bearing remote URLs run unconfirmed**. This is a security follow-up that has a partial fix PR (#66376).
10. **[#59461](https://github.com/anomalyco/opencode/issues/59461) Desktop crash on startup (SSE4.2 missing, Bun runtime)** (closed). Older CPUs were locked out by the runtime change.

## 4. Key PR Progress

1. [#66376](https://github.com/anomalyco/opencode/pull/66376) redacts secrets from CLI argv logging and log output. It addresses the log half of #64750 and defers session-store redaction.
2. [#64870](https://github.com/anomalyco/opencode/pull/64870) adds find-in-session to the TUI, opened with `<leader>f`, `super+f` or `/find`. It closes #4714 and mirrors the desktop find bar.
3. [#65226](https://github.com/anomalyco/opencode/pull/65226) switches Claude Agent accounts by config folder, as a follow-up to #62514.
4. [#60039](https://github.com/anomalyco/opencode/pull/60039) adds per-server TLS trust for remote MCP servers. [#60041](https://github.com/anomalyco/opencode/pull/60041) stacks a trust-on-first-use flow for private-network certificates on top of it.
5. [#66414](https://github.com/anomalyco/opencode/pull/66414) serves update checks from KV manifests instead of D1. The update path handles about 65M requests/day, and cold isolates after a deploy cause 9–18k 503s.
6. [#66416](https://github.com/anomalyco/opencode/pull/66416) scopes module-level keyed mutexes to host services. Multiple hosts in one isolate (Workers/Durable Objects) no longer share lock tables.
7. [#66417](https://github.com/anomalyco/opencode/pull/66417) isolates HOME and XDG directories in core, server and sdk tests, so direct `bun test` runs no longer touch real user directories.
8. [#66409](https://github.com/anomalyco/opencode/pull/66409) makes `Shell.create` fail when spawning dies before ready, rather than hanging. It closes #51351 and is related to the hanging-tool class of bugs.
9. [#66408](https://github.com/anomalyco/opencode/pull/66408) stops streamed reasoning from being repeated when a gateway echoes it as a detail. It closes #64723.
10. [#66407](https://github.com/anomalyco/opencode/pull/66407) reports an invalid terminal config with a startup warning. It closes #56318 and fits the broader "silent config failure" theme from #54786. Also notable: [#66402](https://github.com/anomalyco/opencode/pull/66402) fixes the background pill showing a running script's shells.

## 5. Feature Request Trends

- **IDE and desktop parity:** a VS Code extension (#11176), project-grouped sidebar (#55446), voice input (#33300), image display from tool results (#21227), a custom theme picker in the GUI (#54235) and project deletion (#28030).
- **Subagent control (v2):** foreground execution (#64073) and cancellation (#36423).
- **Ecosystem standards:** the Agent Plugins spec (#40993, closed).
- **Security and permissions:** better sandboxing and permission mode (#48411), and secret redaction (#64750).
- **Model UX:** a "set as default model for this agent" action (#47836) and `-m` on the root command (#56218).

## 6. Developer Pain Points

- **v2 regressions:** the missing `/compact` command (#51638), the `-m` flag (#56218), the missing custom provider option (#59603) and the missing Ctrl+F find (#65962).
- **Config and service lifecycle:** invalid `opencode.json` is silently ignored (#54786). Custom providers aren't registered at boot (#66166). Plugin prompt hooks stop firing after a re-boot (#66299). A missing `{env:VAR}` resolves silently to an empty string (#33853).
- **Hangs and stale state:** `opencode run` hangs with local Ollama (#65367), a subagent `read` call is stuck forever (#66093), and the desktop UI shows stale files (#52941).
- **Cost and billing:** payment declines (#52958), lost prompt cache from backend switching (#66067), and reasoning-effort changes breaking the Copilot cache (#59868).
- **Edit tool fragility:** newline mismatches between `read` output and `edit` matching cause end-of-line edit failures (#66368, closed).
- **Platform compatibility:** CPU instruction requirements from the Bun runtime (#59461).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
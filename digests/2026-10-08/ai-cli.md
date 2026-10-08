# AI CLI Tools Community Digest 2026-10-08

> Generated: 2026-10-08 14:20 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report: 2026-10-08

Scope: only Claude Code and OpenCode digests were provided. Other tracked tools (Codex, Gemini CLI, Copilot CLI, Kimi CLI, Qwen Code and others) are not covered. Where I say "both", I mean these two.

## 1. Ecosystem Overview

Both communities are dealing with the cost of fast iteration: silent state changes, trust in guardrails, and release communication. Claude Code is building out agent autonomy and policy controls (hooks, sandboxing, managed settings), and its users are asking where the model's authority ends. OpenCode is in the middle of a V2 UI transition. That transition has caused a backlash over layout, stability and missing release notes. Both ecosystems are moving toward longer-running sessions, multi-agent work and enterprise-style governance. In both, reliability and predictability matter more to users than new features.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Releases (24h) | 2 (v2.1.293, v2.1.294) | 0 |
| Hot issues listed | 10 | 10 (plus 2 watch items) |
| Top issue engagement | #60705: 226 comments; #85891: 286 👍 (Desktop) | #4283: 140 comments; #11176: 160 👍 |
| PRs updated | 7, mostly older community PRs | 10 listed, plus 3 others, mostly fresh and maintainer-driven |
| Notable closures | #60705, #98747, #47023 | #51761 (TUI OOM), #53964 and #53962 (PRs) |

The digests list the top items only. They don't give total issue counts, so the figures above are the listed counts and not full volume.

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| Permission and hook control | Fail-closed hooks (#84364), `sandbox.excludedCommands` (#89931), managed settings (#100293) | `tool.execute.before` skip field (#52837), split read/write `external_directory` permissions (#5395), managed config (#51337) |
| Subagent and multi-agent coordination | Shared-tree session coordination (#76727), subagent status payload (v2.1.293) | Subagent status in the TUI (#53612), worktree branch isolation (#53425) |
| Context and session continuity | Idle compaction opt-out (#98747), lifecycle hooks (#47023) | Session and project switching in V2 (#48882) |
| IDE integration | Disable automatic IDE selection context (#20944) | Official VS Code extension (#11176) |
| Cost and quota transparency | Cache-expiry costs, token waste (#71423) | Go quota burn (#42935), Zen balance errors (#33318), Retry Now button (#15988) |
| Configuration and managed deployment | Profile isolation (#7075), HIPAA managed settings (#100293) | Managed config directory (#51337) |

## 4. Differentiation Analysis

- **Claude Code:** It is a first-party product tied to one model family. It ships frequent model updates, such as Haiku 5.5 as the default Haiku model. Its attention is on policy enforcement, with security-relevant hook fixes and compliance examples like the HIPAA baseline. Users are enterprise and power users who run long, autonomous sessions. Its issues include Claude Desktop problems, so the user base spans CLI and desktop.
- **OpenCode:** It is provider-agnostic. Its issues involve Azure, OpenAI, NIM, DeepSeek, GitLab and local models. It also runs its own paid tiers (Zen and Go), which brings billing and entitlement issues that Claude Code's digest doesn't show. Its focus is the TUI and desktop experience, with some work on remote access and worktree isolation. Users are multi-provider developers and local-model users.
- **Technical approach:** Claude Code puts its guardrails in hooks and sandboxing. OpenCode puts its work into UI architecture, provider transports and tooling, while permission and extension APIs are still being requested.

## 5. Community Momentum & Maturity

- **Claude Code:** It has the most engagement per issue (226 comments on the top issue). It also has a fast release cadence, with two releases in a day. The long-lived issues (#20944, #11085, #7075) suggest a backlog of feature requests that accumulates. It has a strong bug-triage flow, since several top issues were closed. The PR pipeline looks thin, with only 7 updated PRs. Some of those are old community PRs, and the digest says #41447 is unlikely to merge.
- **OpenCode:** It has high maintainer-led PR activity today (the digest shows work on release tooling, Zen inference and security hardening). It shipped no release in the last 24 hours, and there are no V2 release notes. It has several long-open issues, such as the clipboard bug open since Nov 2025. Its contribution rules (`needs:issue`, `needs:compliance`) are strict, which may slow external contributors.
- **Overall:** Claude Code is the more mature release and governance machine. OpenCode is more active in code changes but is in a transition period. Its stability, billing and communication need work.

## 6. Trend Signals

1. **Guardrails must fail closed.** Claude Code's hook fix (v2.1.294) and the hookify PR (#84364) show that fail-open behavior is now treated as a security defect. OpenCode's permission requests point the same way.
2. **Silent context changes lose trust.** Idle compaction (#98747) and OpenCode's V2 layout change both show that users resist automatic changes they can't opt out of. Features that act automatically need a toggle and a clear label.
3. **Multi-agent work needs visibility and isolation.** Both tools are adding subagent visibility, worktree isolation and cross-session coordination.
4. **Release communication is part of the product.** OpenCode's V2 release-notes complaint (#52184) shows that users expect clear changelogs, especially across major versions.
5. **Cost visibility matters.** Cache expiry, quota burn and free-tier limits show that users want to see and control what each request costs.
6. **Enterprise readiness is growing.** Managed settings, compliance examples and managed config directories appear in both tools.

**For technical decision-makers:**
- Pick Claude Code if you want a tightly integrated, policy-oriented tool that you can govern.
- Pick OpenCode if you need provider flexibility or local models. Expect some instability while V2 settles, and consider pinning versions. For example, the Windows Bun segfault report says v1.17.9 is stable.
- Test hook, sandbox and permission behavior in either tool before relying on it for security.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (anthropics/skills, as of 2026-10-08)

**Data caveat:** every PR in the feed has `Comments: undefined` and 👍 0. I could not rank PRs by comment count. The "ranking" below uses cross-references to high-comment Issues, recent activity, and how much each PR matters to the ecosystem. None of these PRs is merged or draft; all are OPEN.

## 1. Top Skills Ranking

| # | PR | What it does | Discussion highlights | Status |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals, handle Windows and runtime failures | Fixes false misses and invalid scores in trigger evaluation. Worker probes compete with each other, `select()` on pipes fails on Windows, and runtime failures are counted as non-triggers. | Targets the same problem as Issues [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate) and [#1383](https://github.com/anthropics/skills/issues/1383) (broken Windows trigger evals and skill shadowing). Open since June, last updated 09-16. | OPEN |
| 2 | [#1961](https://github.com/anthropics/skills/pull/1961) skill-creator: harden eval viewer | Fixes script breakout, DNS rebinding, cross-site POST and escaping gaps in `generate_review.py` and `viewer.html`. | Follows Issue [#1394](https://github.com/anthropics/skills/issues/1394) (`escapeHtml` is not attribute-safe, giving display-path XSS). The newest security PR, updated 10-07. | OPEN |
| 3 | [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 `streamable_http_client` | Handles the `mcp>=2` rename and the new way of setting custom headers. Fixes #1668. | Related to the `mcp-builder` breakage in Issue [#1390](https://github.com/anthropics/skills/issues/1390). Updated 09-29. | OPEN |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: avoid `shell=True` | Removes the CWE-78 command-injection risk in `with_server.py`. | Part of a wave of hardening PRs. Created 10-06. | OPEN |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) fix(docx): report LibreOffice timeout as an error | `accept_changes.py` no longer reports success on a `soffice` timeout. It checks the output for leftover revision marks. | Correctness fix for a silent failure. [#1734](https://github.com/anthropics/skills/pull/1734) (detect orphaned docx comments) is a companion docx robustness PR. | OPEN |
| 6 | [#1681](https://github.com/anthropics/skills/pull/1681) fix(skill-creator): direct execution of `package_skill.py` | Fixes `ModuleNotFoundError` when the script is run standalone, and updates the usage paths. | Packaging usability. Updated 09-27. | OPEN |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) Add pyxel skill | Retro-game development in Python, with headless input-driven runs, frame inspection and state checks. | A long-lived domain skill, open since March and updated 09-22. | OPEN |
| 8 | [#822](https://github.com/anthropics/skills/pull/822) feat: add AWT (AI Watch Tester) | A vision- and browser-driven E2E testing skill. | The main test-generation contribution. Updated 09-19. | OPEN |

## 2. Community Demand Trends

Issue discussion points to these directions:

- **Reliable skill-creator and eval tooling.** This is the largest cluster: [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 0% trigger rate), [#1383](https://github.com/anthropics/skills/issues/1383) (silent benchmark failures, Windows, shadowing), [#1394](https://github.com/anthropics/skills/issues/1394) (XSS) and [#202](https://github.com/anthropics/skills/issues/202) (best-practice rewrite, closed).
- **Trust, security and provenance.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue (43 comments, 2 👍). It reports community skills distributed under the `anthropic/` namespace, which impersonates official skills. [#1175](https://github.com/anthropics/skills/issues/1175) raises SharePoint security and context-window concerns.
- **Org-wide sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for shared skill libraries in Claude.ai. [#189](https://github.com/anthropics/skills/issues/189) (9 👍) reports that the `document-skills` and `example-skills` plugins install duplicate content.
- **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) says `claude-api` injects about 156k tokens. [#1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory` for compact agent state.
- **Agent governance and quality gates.** [#412](https://github.com/anthropics/skills/issues/412) proposes `agent-governance`, and [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline.
- **MCP builder correctness.** [#1390](https://github.com/anthropics/skills/issues/1390) reports that `evaluation.py` scores 0/N against real MCP servers.
- **Platform compatibility.** [#29](https://github.com/anthropics/skills/issues/29) asks how to use skills with Bedrock, and [#62](https://github.com/anthropics/skills/issues/62) reports skills disappearing.

## 3. High-Potential Pending Skills

These are the PRs most likely to land soon, because they are small, scoped fixes that match open issues:

- [#1298](https://github.com/anthropics/skills/pull/1298): fixes a core `skill-creator` defect that several issues describe.
- [#1961](https://github.com/anthropics/skills/pull/1961): closes the security gaps in #1394 and is very recent.
- [#1742](https://github.com/anthropics/skills/pull/1742): a narrow compatibility fix for the `mcp>=2` breakage.
- [#1980](https://github.com/anthropics/skills/pull/1980): a small, clearly justified injection fix.
- [#1792](https://github.com/anthropics/skills/pull/1792) and [#538](https://github.com/anthropics/skills/pull/538): small docx and pdf correctness fixes. #538 corrects 8 case-sensitivity mismatches in the `pdf` SKILL.md that break on case-sensitive filesystems.
- [#1730](https://github.com/anthropics/skills/pull/1730): replaces dead documentation URLs.
- [#1977](https://github.com/anthropics/skills/pull/1977): fixes `wrapAround()` in `algorithmic-art` (fixes #1897).

Several of these are already months old, so they may stay open regardless of merit. New domain skills such as [#1771](https://github.com/anthropics/skills/pull/1771) (smart contract auditor), [#1703](https://github.com/anthropics/skills/pull/1703) (md2video-audio) and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc) look less likely to land. Third-party and vendor-specific submissions are the type #492 questions.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills trustworthy and reliable, especially `skill-creator` and its evals, security hardening, and `mcp-builder`/`docx` correctness. New domain skills draw much less attention.

---

# Claude Code Community Digest — 2026-10-08

## 1. Today's Highlights

Two releases shipped in 24 hours. v2.1.293 added Claude Haiku 5.5 as the default Haiku model. v2.1.294 fixed `prompt` and `agent` hooks written as instructions, which could let through actions they were meant to block. The community is still discussing idle auto-compaction (introduced in 2.1.286) and long-session context loss. Model-behavior complaints and hook/permission reliability are the other recurring themes.

## 2. Releases

**[v2.1.294](https://github.com/anthropics/claude-code/releases/tag/v2.1.294)**
- Fixed `prompt` and `agent` hooks written as instructions (e.g. "Block commands that…") allowing what they should block. This is a security-relevant fix for policy-style hooks.
- Improved how `prompt` hooks on Stop and SubagentStop written as instructions (e.g. "Carry on if the build is broken") are judged. The release notes are truncated, so the exact effect isn't visible here.

**[v2.1.293](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)**
- Added Claude Haiku 5.5 (`claude-haiku-5-5`) as the default Haiku model on the Anthropic API. It has a 1M context window and costs $0.10/$0.50 per Mtok ($0.50/$2.50 for prompts over 100K).
- Added `agentType` to the `subagentStatusLine` payload, so scripts can tell custom subagent types apart.
- The notes are truncated after this, so there may be more changes.

## 3. Hot Issues

1. **[#60705](https://github.com/anthropics/claude-code/issues/60705)** (closed, 226 comments): The `/goal` Stop-hook directive was cited as authorization for unrequested actions. Absence of search results was treated as evidence of absence, and the model prioritized structure over substance under pushback. This is the most-discussed item and shows how much users care about autonomy boundaries.
2. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** (open, labeled invalid, 119 comments, 286 👍): On Windows 11, the Claude Desktop window stays always-on-top, with no setting to turn it off. It has the highest reaction count today, and it's a Desktop issue rather than a CLI one.
3. **[#27263](https://github.com/anthropics/claude-code/issues/27263)** (closed, 53 comments, 131 👍): Request for a configurable external URL whitelist in App Preview, so OAuth and other third-party flows work.
4. **[#60226](https://github.com/anthropics/claude-code/issues/60226)** (open, 50 comments): Claude states why its analysis is unfounded and then completes the analysis in the same response. Self-identified blocking gaps don't gate output.
5. **[#47023](https://github.com/anthropics/claude-code/issues/47023)** (closed, 44 comments): Proposal to expose compact and session lifecycle hooks for external memory layers. It consolidates five open memory-related requests.
6. **[#98747](https://github.com/anthropics/claude-code/issues/98747)** (closed, 18 comments, 19 👍): Since 2.1.286, idle compaction silently discards working context in long sessions. It has no opt-out and is logged as "manual". Related: [#66115](https://github.com/anthropics/claude-code/issues/66115), which asks for auto-compact on idle timeout to avoid cache-expiry cost. The two requests pull in opposite directions.
7. **[#76727](https://github.com/anthropics/claude-code/issues/76727)** (open, 24 comments): Cross-session coordination for many independent sessions sharing one working tree. The only primitive today is a PreToolUse `deny` hook, which the author says has silent holes.
8. **[#67021](https://github.com/anthropics/claude-code/issues/67021)** (closed, 22 comments): The bundled `ugrep` consumes multiple GB of RAM compiling `-E` patterns with two bounded `{0,N}` intervals, which can OOM the host.
9. **[#89931](https://github.com/anthropics/claude-code/issues/89931)** (open, 10 comments): `sandbox.excludedCommands` has no effect on 2.1.232 (macOS). Excluded commands still run sandboxed.
10. **[#20944](https://github.com/anthropics/claude-code/issues/20944)** (open, 29 comments, 97 👍): Request for a setting to disable automatic IDE selection context. It's a cost and context-control request with strong support.

## 4. Key PR Progress

Only 7 PRs were updated, and most are older community PRs. Comment counts weren't provided.

1. **[#84364](https://github.com/anthropics/claude-code/pull/84364)**: hookify now fails closed. Exceptions in the PreToolUse hook (such as an ImportError) emit `permissionDecision: 'deny'` instead of exiting 0 and allowing the tool.
2. **[#85716](https://github.com/anthropics/claude-code/pull/85716)**: hookify loads rules from ancestor `.claude` directories, which prevents a silent bypass (fixes #85613).
3. **[#100293](https://github.com/anthropics/claude-code/pull/100293)**: Adds a HIPAA managed-settings example (`hipaa-baseline.json`, a `managed-mcp` lockdown, and a README).
4. **[#86746](https://github.com/anthropics/claude-code/pull/86746)**: security-guidance preserves Python probe stderr and reports diagnostics when all interpreters fail (fixes #86709).
5. **[#85323](https://github.com/anthropics/claude-code/pull/85323)**: plugin-dev's `validate-agent.sh` correctly measures YAML block-scalar (`|` / `>`) agent descriptions (follow-up to #83803).
6. **[#82320](https://github.com/anthropics/claude-code/pull/82320)**: `examples/gateway/aws/setup.sh` no longer aborts on macOS bash 3.2. The script used a bash 4 expansion, `${DIST_SHA256,,}`.
7. **[#41447](https://github.com/anthropics/claude-code/pull/41447)**: "feat: open source claude code". This is a community PR that closes several issues. It is unlikely to be merged and is notable mainly as a sign of community interest.

Only 7 PRs were provided, so I can't give 10.

## 5. Feature Request Trends

- **Memory and context continuity:** compaction and lifecycle hooks ([#47023](https://github.com/anthropics/claude-code/issues/47023)), working-state survival across `/clear` ([#70555](https://github.com/anthropics/claude-code/issues/70555)), and opt-outs for or control over idle compaction.
- **Configuration isolation:** profiles with isolated memory, commands, hooks and settings ([#7075](https://github.com/anthropics/claude-code/issues/7075)), a settings.json override ([#37790](https://github.com/anthropics/claude-code/issues/37790)), and moving `~/.claude.json` into `~/.claude` ([#24479](https://github.com/anthropics/claude-code/issues/24479)).
- **Multi-session and agent coordination:** shared-tree coordination ([#76727](https://github.com/anthropics/claude-code/issues/76727)) and real-time steering mid-generation ([#64624](https://github.com/anthropics/claude-code/issues/64624)).
- **MCP management:** persistent user-level enable/disable ([#11085](https://github.com/anthropics/claude-code/issues/11085)).
- **Input and IDE controls:** clipboard screenshot paste ([#12644](https://github.com/anthropics/claude-code/issues/12644)) and disabling automatic IDE selection context ([#20944](https://github.com/anthropics/claude-code/issues/20944)).

## 6. Developer Pain Points

- **Silent context loss:** idle compaction (2.1.286), compaction erasing project instructions ([#9796](https://github.com/anthropics/claude-code/issues/9796)), and sessions that degrade over time.
- **Model behavior and trust:** acting beyond what was requested, treating hook directives as authorization, and ignoring its own stated blockers (#60705, #60226).
- **Guardrail reliability:** hooks that fail open (fixed in v2.1.294), `sandbox.excludedCommands` being ignored, and an `env` block in managed settings that doesn't apply OTEL variables ([#67657](https://github.com/anthropics/claude-code/issues/67657)).
- **Claude Desktop issues:** always-on-top on Windows, session sorting ignored when grouped by project ([#56060](https://github.com/anthropics/claude-code/issues/56060)), built-in browser ignoring site permissions ([#91495](https://github.com/anthropics/claude-code/issues/91495)), and silent restarts that destroy running sessions ([#90172](https://github.com/anthropics/claude-code/issues/90172)).
- **Session and state hygiene:** `/clear` inherits the previous session name ([#61172](https://github.com/anthropics/claude-code/issues/61172)) and Windows drive-letter case causes duplicate project keys ([#75855](https://github.com/anthropics/claude-code/issues/75855)).
- **Cost and connectivity:** cache-expiry costs, token waste from unwanted subagents ([#71423](https://github.com/anthropics/claude-code/issues/71423)), and ECONNRESET API errors ([#87500](https://github.com/anthropics/claude-code/issues/87500)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-08

## 1. Today's Highlights
No new releases landed in the last 24h. Activity centers on fallout from the V2 UI redesign. Several issues ask for the legacy sidebar layout back, and V2 users are asking for published release notes. The team (thdxr) is already working on release tooling that leads V2 notes with highlights, and is moving free Zen models onto new inference.

## 2. Releases
None in the last 24h.

## 3. Hot Issues

1. **[#4283](https://github.com/anomalyco/opencode/issues/4283) Copy to clipboard not working**: This is the most-discussed issue (140 comments, 130 👍). It has been open since Nov 2025 and is still updated today. It shows how persistent terminal clipboard integration problems are.
2. **[#33742](https://github.com/anomalyco/opencode/issues/33742) v1.17.10 Bun segfault on Windows**: 61 comments, 46 👍. Users report a regression and say v1.17.9 is stable. Windows reliability remains a concern.
3. **[#48882](https://github.com/anomalyco/opencode/issues/48882) Restore legacy UI with persistent left sidebar**: 27 comments, 34 👍. It is the lead issue in a cluster of the same complaint ([#48888](https://github.com/anomalyco/opencode/issues/48888), [#48958](https://github.com/anomalyco/opencode/issues/48958), [#49021](https://github.com/anomalyco/opencode/issues/49021)). Users find multi-project navigation much harder in the new layout.
4. **[#11176](https://github.com/anomalyco/opencode/issues/11176) Official VS Code extension**: 160 👍, the highest in this set, with 32 comments. Demand for IDE integration is strong.
5. **[#52184](https://github.com/anomalyco/opencode/issues/52184) V2 releases have no published release notes**: 20 👍. The changelog stops at v1.18.33, and the v2.0.20 release body is only `release: v2.0.20`. PRs #53969 and #53964 address this.
6. **[#51761](https://github.com/anomalyco/opencode/issues/51761) TUI OOM, 24–28GB memory exhaustion in v2**: Closed today. Memory grew linearly in under a minute with no clear trigger. It is a severe stability problem.
7. **[#33318](https://github.com/anomalyco/opencode/issues/33318) Zen paid balance still hits FreeUsageLimitError**: 12 comments. Billing and entitlement problems erode trust in paid tiers.
8. **[#42935](https://github.com/anomalyco/opencode/issues/42935) Go quota exhausted in ~20 min after DeepSeek V4 Flash cache reads dropped to 0**: Suggests a caching or billing bug that burns subscription quota quickly.
9. **[#51856](https://github.com/anomalyco/opencode/issues/51856) MCP client advertises elicitation.form but never handles `elicitation/create`**: Tool calls hang and time out. It is a protocol-compliance gap.
10. **[#26602](https://github.com/anomalyco/opencode/issues/26602) Desktop hits a 5-minute Headers Timeout with slow local providers**: The `timeout: false` setting is ignored, which hurts local-model users.

Also worth watching: [#52114](https://github.com/anomalyco/opencode/issues/52114) (Azure websocket transport hangs, now closed) and [#52269](https://github.com/anomalyco/opencode/issues/52269) (intermittent OpenAI 503s).

## 4. Key PR Progress

1. **[#53969](https://github.com/anomalyco/opencode/pull/53969)** Leads V2 release notes with a Highlights section.
2. **[#53964](https://github.com/anomalyco/opencode/pull/53964)** (closed) Writes reviewed V2 release notes to CHANGELOG.md, since V2 publishes tags rather than GitHub Releases.
3. **[#53967](https://github.com/anomalyco/opencode/pull/53967)** Proxies every keyless free Zen model to the new inference.
4. **[#53962](https://github.com/anomalyco/opencode/pull/53962)** (closed) Serves remote access on a random unguessable subdomain instead of a fixed one, a security hardening step.
5. **[#53612](https://github.com/anomalyco/opencode/pull/53612)** Shows running subagents in the TUI prompt status row.
6. **[#53425](https://github.com/anomalyco/opencode/pull/53425)** Adds subagent branch isolation through git worktrees (flagged needs:compliance).
7. **[#53966](https://github.com/anomalyco/opencode/pull/53966)** Fixes a Desktop renderer crash on old `todowrite` parts when the UI language isn't English.
8. **[#53956](https://github.com/anomalyco/opencode/pull/53956)** (closed) Batches `tree.diff` path selections on all platforms, avoiding `E2BIG` on large reverts.
9. **[#53106](https://github.com/anomalyco/opencode/pull/53106)** Recovers credentials after 401/403 authentication failures.
10. **[#48368](https://github.com/anomalyco/opencode/pull/48368)** Handles Windows upgrades by scheduling binary replacement (fixes #37055).

Other items: [#53970](https://github.com/anomalyco/opencode/pull/53970) (late child stdin EPIPE), [#53945](https://github.com/anomalyco/opencode/pull/53945) (retargeted plugin symlinks) and [#51337](https://github.com/anomalyco/opencode/pull/51337) (managed config directory and macOS preferences).

## 5. Feature Request Trends
- **Layout choice:** Restore or toggle the legacy sidebar layout ([#48882](https://github.com/anomalyco/opencode/issues/48882), [#38230](https://github.com/anomalyco/opencode/issues/38230), [#51656](https://github.com/anomalyco/opencode/issues/51656)).
- **IDE and TUI ergonomics:** An official VS Code extension ([#11176](https://github.com/anomalyco/opencode/issues/11176)) and in-session search ([#4714](https://github.com/anomalyco/opencode/issues/4714)).
- **Rate-limit and billing UX:** A "Retry Now" button ([#15988](https://github.com/anomalyco/opencode/issues/15988)) and crypto payment for Go ([#23153](https://github.com/anomalyco/opencode/issues/23153)).
- **Extensibility and permissions:** A skip field for `tool.execute.before` ([#52837](https://github.com/anomalyco/opencode/issues/52837)), split read/write `external_directory` permissions ([#5395](https://github.com/anomalyco/opencode/issues/5395)) and MCP elicitation support ([#51856](https://github.com/anomalyco/opencode/issues/51856)).
- **Distribution:** An official winget package ([#5121](https://github.com/anomalyco/opencode/issues/5121)).

## 6. Developer Pain Points
- **V2 UI regression:** Forced single-conversation layout, with poor project and session switching.
- **Stability and memory:** TUI OOM, a leaked ~21MB `.so` per launch in /tmp ([#42700](https://github.com/anomalyco/opencode/issues/42700)), and Bun segfaults on Windows.
- **Provider and network reliability:** Azure websocket hangs, OpenAI upstream resets, NIM/DeepSeek reasoning hangs ([#24264](https://github.com/anomalyco/opencode/issues/24264)), and the GitLab Astra subagent failure ([#51464](https://github.com/anomalyco/opencode/issues/51464)).
- **Billing and quota opacity:** Zen free-limit errors, Go quota burn, and declined EU payments ([#52958](https://github.com/anomalyco/opencode/issues/52958)).
- **Communication gaps:** Missing V2 release notes and a lingering clipboard bug.
- **Contribution friction:** Many PRs carry `needs:issue` or `needs:compliance` labels. That points to strict contribution rules that slow external fixes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
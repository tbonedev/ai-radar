# AI CLI Tools Community Digest 2026-10-09

> Generated: 2026-10-09 14:05 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report, 2026-10-09

*Scope: only Claude Code and OpenCode digests were provided, so this is a two-tool comparison. Other tools (Codex, Gemini CLI, and so on) are not covered.*

## 1. Ecosystem Overview

The two communities are at different stages. Claude Code is moving toward policy enforcement and extensibility: fail-closed hooks, Mods, and hardening PRs. Its users are mostly asking for control over automatic behavior and for context that survives compaction. OpenCode's discussion is mostly about operations: reliability and billing of the hosted Go/Zen service, Windows stability, and resource leaks in `serve` mode. On both sides, the complaints are about trust and predictability more than missing features.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Release status | v2.1.295 (hooks `onFailure: "block"`, OSC 7501) | None in 24h |
| Hot issues listed | 10 (top: 281 comments, 1,187 👍) | 10 (top: 62 comments, 👍46 on the Bun segfault; highest 👍 is 244) |
| PRs updated in 24h | 6 (5 closed, 1 open) | 10 listed (the digest doesn't give open/closed state or a total) |
| Dominant PR theme | Security hardening (hookify, plugin scripts), HIPAA example | Prompt cache and compaction, CSP, permissions, UI |

Notes: "Hot issues" is the number the digests listed, not the total number of issues. Claude Code's v2.1.295 notes were truncated in the source, so the release may include changes I can't see.

## 3. Shared Feature Directions

- **Context and session visibility.** Claude Code users want working state to survive compaction and `/clear` (#70555) and want MEMORY.md truncation to be visible (#99403). OpenCode users want a `/context`-style usage view (#6152, 👍138). Both groups want to know what is in the context window.
- **Compaction and cache behavior.** Claude Code has the idle-compaction regression (#98747). OpenCode has cache-preserving compaction (#46369) and configurable prompt cache rules (#53927).
- **Opt-out and control over automatic behavior.** Claude Code: no setting to disable idle compaction (#98747) or VS Code auto-attach (#24726). OpenCode: persistent "Allow always" permissions (#20066) and config reload without a restart (#6815).
- **Paste and copy ergonomics.** Claude Code: unwanted indentation when copying (#18170) and pasted text that arrives empty (#77946). OpenCode: expandable pasted text (#8501, 👍244).
- **Permission handling.** Claude Code: auto mode false positives (#100730) and Remote Control ignoring `--dangerously-skip-permissions` (#29214). OpenCode: shell permission patterns (#53802) and a deny rule breaking the free tier (#50627).

## 4. Differentiation Analysis

- **Claude Code** is a first-party product. It focuses on governance (fail-closed hooks, a HIPAA settings example, CLAUDE.md compliance) and on an extensibility layer (Mods, hooks, plugins). Its users include enterprise and compliance-minded teams. It also has desktop, VS Code, and mobile/Remote Control surfaces, and these produce their own bugs.
- **OpenCode** is a multi-model client with its own hosted offering (Go/Zen). Its issues show a larger operational surface: subscriptions, entitlement sync, pooled rate limits, and crypto payment requests. It also covers server and embedding use (`serve`, MCP leaks, managed service) and the V2 config schema and web UI. Its PRs focus on provider-neutral mechanics such as AI SDK media inputs, model fallback, and cache rules.
- **Technical approach.** Claude Code's responses are restrictive and policy-based. OpenCode's are mechanical and configurable.

## 5. Community Momentum & Maturity

- **Claude Code** has much larger engagement. The top issue has 1,187 👍 and 281 comments, against 244 👍 and 62 comments at the top for OpenCode. It shipped a release today. The PR throughput (6 updates, 5 closed, all from one contributor) is modest, though that is a one-day sample.
- **OpenCode** has broader PR activity in the digest (10 items across UI, cache, permissions, and i18n-style fixes such as grapheme-safe truncation), but no release today. The community is active and its issues are concentrated on service reliability, which suggests that operations are the limiting factor.
- Both have long-lived open issues: Claude Code's #27302 has been open since February and #18170 since January. OpenCode's Windows segfault (#33742) is an unresolved regression.

## 6. Trend Signals

1. **Fail-closed enforcement is replacing advisory instructions.** Claude Code reports that CLAUDE.md rules are not reliably followed (#53223), and the answer is enforceable hooks. For teams that need guardrails, use hooks or permissions, not prompt text.
2. **Silent automatic behavior is the main source of distrust.** Idle compaction, MEMORY.md truncation, and the `/buddy` removal all drew heavy reaction. Developers evaluating tools should check whether automatic behaviors can be seen and disabled.
3. **Context management is now a core feature.** Both communities ask for visibility, durability across compaction, and cache-aware compaction. This affects cost and quality in long sessions.
4. **Hosted-service reliability matters as much as the CLI.** OpenCode's Go/Zen billing and availability problems show that a tool's account and entitlement system can be its weakest part.
5. **Windows support is still uneven in both tools.** Both show Windows-specific failures (orphaned processes in Claude Code, the Bun segfault in OpenCode). Windows-heavy teams should test before adopting.

*Caveat: these conclusions come from one day of data for two tools. Treat them as signals, not rankings.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (2026-10-09)

**Data caveat:** The PR data has no comment counts (all show `undefined`) and every PR has 0 👍. The PR ranking below follows the list order and my own judgment of significance, not measured discussion volume. Issue comment counts are real, so the trend analysis rests on firmer ground. All 20 PRs listed are **OPEN**. None are merged or draft.

---

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|----|--------------|------------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` fix | Supports the `mcp>=2` rename `streamablehttp_client` → `streamable_http_client`. Custom headers now go through `create_mcp_http_client`. | Fixes #1668. Updated 2026-10-08, so it is still active. | Open |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` trigger evals | Isolates trigger evals, fixes `select()` on Windows pipes, and stops runtime failures from counting as "non-triggers". | Addresses the false-negative trigger rates in Issues [#1352](https://github.com/anthropics/skills/issues/1352), [#1383](https://github.com/anthropics/skills/issues/1383) and [#556](https://github.com/anthropics/skills/issues/556). | Open |
| 3 | [#1961](https://github.com/anthropics/skills/pull/1961) `skill-creator` viewer hardening | Fixes script breakout, DNS rebinding, cross-site POST and escaping in the eval viewer. | Matches the XSS report in [#1394](https://github.com/anthropics/skills/issues/1394). Updated 2026-10-07. | Open |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx` accept_changes | Reports LibreOffice timeouts as errors. Claims success only after checking that the output has no `w:ins`/`w:del` revision marks. | Fixes a silent false-success bug. | Open |
| 5 | [#1734](https://github.com/anthropics/skills/pull/1734) `docx` orphaned comments | Detects orphaned comments in docx files. | No description given. Updated 2026-09-25. | Open |
| 6 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` | Removes `shell=True` from `with_server.py` to close a command-injection risk (CWE-78). | Part of the security-hardening theme. | Open |
| 7 | [#1681](https://github.com/anthropics/skills/pull/1681) `skill-creator` packaging | Lets `package_skill.py` run directly. It currently fails with `ModuleNotFoundError`. It also fixes outdated usage paths. | Same author as #1742. Updated 2026-10-08. | Open |
| 8 | [#1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Static analysis of Solidity and Rust contracts, with audit proofs anchored on the TON blockchain. | The only Web3 submission. It is third-party and tied to an external protocol, so it needs a trust review. | Open |

---

## 2. Community Demand Trends (from Issues)

1. **Reliable skill evaluation and authoring tools.** This is the largest cluster: [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 0% trigger rate), [#1352](https://github.com/anthropics/skills/issues/1352), [#1383](https://github.com/anthropics/skills/issues/1383) and [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practice).
2. **Security and trust.** [#492](https://github.com/anthropics/skills/issues/492) is the most-discussed issue (43 comments) and concerns community skills distributed under the `anthropic/` namespace. Also relevant are [#1394](https://github.com/anthropics/skills/issues/1394) (XSS) and [#1175](https://github.com/anthropics/skills/issues/1175) (access control for SharePoint documents).
3. **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai (16 comments, 8 👍). [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins (9 👍).
4. **Context cost.** [#1487](https://github.com/anthropics/skills/issues/1487) reports that `claude-api` injects about 156k tokens in one call.
5. **MCP and document tooling correctness.** [#1390](https://github.com/anthropics/skills/issues/1390) reports `mcp-builder` evaluation scoring 0/N.
6. **New skill proposals.** These include agent memory and governance ([#1329](https://github.com/anthropics/skills/issues/1329), [#412](https://github.com/anthropics/skills/issues/412)) and a reasoning quality-gate pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)).

---

## 3. High-Potential Pending Skills

The first four are bug fixes to official skills. They are small, tied to open issues and recently active, so they are the likeliest to land.

- [#1742](https://github.com/anthropics/skills/pull/1742): mcp>=2 compatibility, a breaking-change fix.
- [#1298](https://github.com/anthropics/skills/pull/1298): fixes a widely reported eval bug.
- [#1961](https://github.com/anthropics/skills/pull/1961): security hardening.
- [#1980](https://github.com/anthropics/skills/pull/1980): removes a command-injection risk.
- [#1792](https://github.com/anthropics/skills/pull/1792), [#1681](https://github.com/anthropics/skills/pull/1681): small, low-risk fixes.

New-skill PRs such as [#525](https://github.com/anthropics/skills/pull/525) (Pyxel), [#822](https://github.com/anthropics/skills/pull/822) (AWT E2E testing) and [#486](https://github.com/anthropics/skills/pull/486) (ODT) have waited months, some since March. This suggests community skills are rarely merged, so I wouldn't expect them to land soon.

---

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the official skills reliable and safe: working evals, correct MCP and docx tooling, and a clear trust boundary. It is not mainly asking for new skills.

---

# Claude Code Community Digest, 2026-10-09

## 1. Today's Highlights

v2.1.295 adds `onFailure: "block"` for command and HTTP hooks, so a hook that fails to start, times out, or exits unexpectedly now blocks the action instead of letting it through. The release also adds OSC 7501 (Program Status Protocol) support. In the community, #91870 ("Mods") is now live and is collecting feedback. The long-running `/buddy` petition (#45596) and the idle-compaction regression (#98747) are still drawing heavy discussion.

## 2. Releases

**v2.1.295**
- **`onFailure: "block"` for command and HTTP hooks.** Hooks now fail closed. Before, a hook that couldn't start, timed out, or returned an unexpected exit code let the action through. This is a security improvement for people who use hooks as policy gates.
- **Program Status Protocol (OSC 7501).** Terminals that implement the protocol can show whether Claude Code is working or idle. The release notes in the data I received were cut off, so I can't tell you more about this item or about any other changes.

## 3. Hot Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596): Bring Back Buddy.** This is the most discussed issue, with 281 comments and 1,187 👍. `/buddy` disappeared in v2.1.97 without a changelog entry. It is labeled `duplicate` but is still being used as the consolidated thread. It shows how strongly users react to removals that aren't announced. The closed bug [#45525](https://github.com/anthropics/claude-code/issues/45525) covers the same removal.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts.** Users want to connect several accounts of the same connector in Claude and Claude Code on the web. It has 264 comments and 404 👍, and it has been open since February. Multi-account use is a real blocker for people who work across several organizations.
3. **[#91870](https://github.com/anthropics/claude-code/issues/91870): Mods, "make Claude 10x more extensible."** Mods are live as of the Oct 1 update. The thread has 246 comments, and it touches hooks and plugins. It is the main place to follow the new extensibility surface.
4. **[#98747](https://github.com/anthropics/claude-code/issues/98747): Idle compaction in 2.1.286 discards working context.** Sessions are compacted automatically before the prompt cache expires. There is no opt-out and no warning, and the compaction is logged as "manual". The issue is closed, but it has 20 comments and 19 👍. It is a clear case of an automatic behavior that needs a setting to turn it off.
5. **[#70555](https://github.com/anthropics/claude-code/issues/70555): Working-state continuity across compaction and `/clear`.** This is the "long session goes dumb" problem. Together with [#99403](https://github.com/anthropics/claude-code/issues/99403) (MEMORY.md is silently truncated, with no indication of which entries were dropped), it shows that users are unhappy with how context and memory are managed.
6. **[#18170](https://github.com/anthropics/claude-code/issues/18170): Copying from the terminal includes unwanted indentation and trailing spaces.** It has 137 comments and 299 👍. It has been open since January, and it affects everyone who copies output.
7. **[#24726](https://github.com/anthropics/claude-code/issues/24726): VS Code setting to disable auto-attach of the open file or selection.** It has 91 comments and 264 👍. Users want control over what context is sent automatically.
8. **[#65961](https://github.com/anthropics/claude-code/issues/65961): Verbose code comments by default.** The model ignores instructions to stop. It has 250 👍, which is a lot for a model-behavior report.
9. **[#53223](https://github.com/anthropics/claude-code/issues/53223): CLAUDE.md/AGENTS.md compliance is not enforced.** The report is labeled security and cites 10+ independent reports. The impact depends on how much teams rely on CLAUDE.md for guardrails. It fits with the v2.1.295 fail-closed hooks, which are the enforceable alternative.
10. **[#100730](https://github.com/anthropics/claude-code/issues/100730): The auto mode classifier blocks the account owner's own scheduled task.** It was filed today and it references the regression [#97613](https://github.com/anthropics/claude-code/issues/97613), which has been present since about Sep 23. Auto mode false positives in Cowork and routines are an emerging problem.

## 4. Key PR Progress

Only 6 PRs were updated in the last 24 hours. Five of them were closed, and one is open.

1. **[#100293](https://github.com/anthropics/claude-code/pull/100293) (open):** Adds a HIPAA settings example to `examples/settings`. It includes `settings-hipaa.json`, `managed-mcp-hipaa.json` and a README. It is meant for organizations that want to limit how session content leaves a developer's machine.
2. **[#85716](https://github.com/anthropics/claude-code/pull/85716) (closed):** hookify loads rules from ancestor `.claude` directories, which prevents a silent bypass (fixes #85613).
3. **[#84747](https://github.com/anthropics/claude-code/pull/84747) (closed):** hookify enforces the correct rule evaluation scope when the event is `None`, and reads files securely.
4. **[#84711](https://github.com/anthropics/claude-code/pull/84711) (closed):** Addresses YAML injection and symlink credential overwrite in plugin scripts (fixes #76580).
5. **[#84365](https://github.com/anthropics/claude-code/pull/84365) (closed):** Lets any user's thumbs-down prevent the dedupe bot's auto-close (fixes #79146).
6. **[#84364](https://github.com/anthropics/claude-code/pull/84364) (closed):** The hookify PreToolUse hook fails closed on exceptions by emitting `permissionDecision: 'deny'`.

The data has no other PRs, so I haven't listed ten. The closed PRs are all from one contributor and cover hardening of hookify and the plugin scripts. They fit the same fail-closed theme as v2.1.295.

## 5. Feature Request Trends

- **Control over automatic behavior.** Users want opt-outs for idle compaction (#98747), auto-attach of the open file in VS Code (#24726), and the persistent "buddy" feature (#45596).
- **Extensibility and coordination.** Requests include Mods and hooks (#91870), and cross-session coordination for many sessions on one working tree (#76727). Another request is a check for a live-session registry on `--continue` and `--resume` (#69364).
- **Memory and continuity.** Working state should survive compaction, and truncation of MEMORY.md should be visible (#70555, #99403).
- **Multi-account and identity.** Multiple Connector accounts (#27302).
- **TUI quality of life.** Message timestamps (#30745), RTL text support (#37183), and clean copy and paste (#18170).
- **Git attribution.** Use an `Assisted-by` trailer instead of `Co-authored-by` ([#36105](https://github.com/anthropics/claude-code/issues/36105)).

## 6. Developer Pain Points

- **Silent behavior changes.** Idle compaction, MEMORY.md truncation, and the `/buddy` removal were all changes users noticed without any warning.
- **Context loss in long sessions.** Compaction and `/clear` lose the working state, and the model then seems to get worse.
- **Instruction adherence.** The model writes verbose comments and ignores CLAUDE.md rules (#65961, #53223, #60705, #69044).
- **Permission classifier false positives.** Auto mode blocks work the user authorized (#100730). Remote Control also ignores `--dangerously-skip-permissions` on mobile ([#29214](https://github.com/anthropics/claude-code/issues/29214)).
- **Windows and desktop reliability.** Relaunch is blocked by orphaned processes ([#42776](https://github.com/anthropics/claude-code/issues/42776), [#91763](https://github.com/anthropics/claude-code/issues/91763)). A transient network loss leaves the auto-update banner stuck ([#65093](https://github.com/anthropics/claude-code/issues/65093)).
- **VS Code extension rough edges.** A pinned first message ([#36146](https://github.com/anthropics/claude-code/issues/36146)), links to binary files that fail silently ([#81227](https://github.com/anthropics/claude-code/issues/81227)), and an exit with code 1 on the first daily launch ([#79688](https://github.com/anthropics/claude-code/issues/79688)).
- **Paste handling.** Long pasted text becomes an attachment that is empty on the model side ([#77946](https://github.com/anthropics/claude-code/issues/77946)).
- **Billing and support.** A Max 5x to Max 20x upgrade fails, and support doesn't respond ([#56281](https://github.com/anthropics/claude-code/issues/56281)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-09

## 1. Today's Highlights
There were no new releases in the last 24 hours. Community attention is on OpenCode Go/Zen reliability and billing: "Unexpected server error", "Endpoint is unavailable", and "Insufficient account funds" reports, plus a cross-model 5-hour limit bug. The long-running Windows Bun segfault regression (#33742) is still the most-discussed open bug. On the PR side, work continues on v2 web UI CSP fixes, prompt-cache and compaction improvements, and permission handling.

## 2. Releases
None in the last 24h.

## 3. Hot Issues

1. **[#33742](https://github.com/anomalyco/opencode/issues/33742) — Bun segfault on Windows with v1.17.10** (62 comments, 👍46). The most active open bug. v1.17.9 reportedly works, which points to a regression. It affects Windows users broadly.
2. **[#14273](https://github.com/anomalyco/opencode/issues/14273) — "Free usage exceeded" on Zen free models despite a balance** (42 comments, closed). It shows confusion over free-tier and credit accounting, and it is now resolved.
3. **[#8501](https://github.com/anomalyco/opencode/issues/8501) — Expand pasted text (`[Pasted ~1 lines]`)** (36 comments, 👍244). It has the highest 👍 count in the set and is now closed. Users want to edit or inspect collapsed pastes.
4. **[#45278](https://github.com/anomalyco/opencode/issues/45278) — Payment declined on subscription renewal** (34 comments, 👍27). Billing trust issue. The bank confirms the card is fine, so the fault may be on the payment provider side.
5. **[#49014](https://github.com/anomalyco/opencode/issues/49014) — Go: one model's 5-hour limit blocks all models** (16 comments). Switching models doesn't help, so limits appear to be pooled incorrectly.
6. **[#51424](https://github.com/anomalyco/opencode/issues/51424) — "Insufficient account funds" with an active Go subscription at 0% usage** (9 comments). It looks like an entitlement or billing sync bug, and it is similar to [#53776](https://github.com/anomalyco/opencode/issues/53776) (all Go models return server errors, closed).
7. **[#6152](https://github.com/anomalyco/opencode/issues/6152) — Session context usage view, like Claude's `/context`** (24 comments, 👍138). A long-standing, heavily requested observability feature.
8. **[#43748](https://github.com/anomalyco/opencode/issues/43748) — Published schema at opencode.ai/config.json rejects documented V2 fields** (9 comments, 👍24). It breaks editor validation for V2 configs.
9. **[#51343](https://github.com/anomalyco/opencode/issues/51343) — 60-minute idle location eviction interrupts running sessions** (9 comments). It kills sessions parked on questions or otherwise silent.
10. **[#47727](https://github.com/anomalyco/opencode/issues/47730) — `serve` never disposes per-request instances, so MCP processes leak until memory runs out** (8 comments). This is serious for server and embedding use. Also see [#52049](https://github.com/anomalyco/opencode/issues/52049), where the Windows 45s idle watchdog restarts the managed service and aborts all sessions.

Corrections to the link above: the issue for item 10 is [#47727](https://github.com/anomalyco/opencode/issues/47727).

## 4. Key PR Progress

1. [#54149](https://github.com/anomalyco/opencode/pull/54149) — Adds an opt-in `session.hide_subagents_in_child_sessions` setting to hide the Subagents card in child sessions.
2. [#46369](https://github.com/anomalyco/opencode/pull/46369) — Cache-preserving compaction: keeps the stable prompt prefix during compaction to reduce cache misses.
3. [#53927](https://github.com/anomalyco/opencode/pull/53927) — Adds configurable prompt cache rules (refs #51109).
4. [#52948](https://github.com/anomalyco/opencode/pull/52948) — Adds `frame-src` and `object-src` to the web UI CSP so `blob:` iframes work (closes #50828).
5. [#53802](https://github.com/anomalyco/opencode/pull/53802) — Preserves env prefixes in saved shell permission patterns.
6. [#54139](https://github.com/anomalyco/opencode/pull/54139) — Default model fallback now skips models without tool support.
7. [#51482](https://github.com/anomalyco/opencode/pull/51482) — Supports AI SDK v4 media inputs, fixing tool images serialized as null.
8. [#52887](https://github.com/anomalyco/opencode/pull/52887) — Waits for plugin activation before text generation (fixes #52881).
9. [#52749](https://github.com/anomalyco/opencode/pull/52749) — Makes file paths in chat messages clickable.
10. [#48894](https://github.com/anomalyco/opencode/pull/48894) — Excludes hidden files from glob results. Also of note: [#51492](https://github.com/anomalyco/opencode/pull/51492) preserves graphemes when truncating text, which helps Thai and other complex scripts, and [#52073](https://github.com/anomalyco/opencode/pull/52073) lets new vertical tabs open at the top.

## 5. Feature Request Trends
- **Context and session visibility:** a `/context`-style usage breakdown (#6152).
- **Editing ergonomics:** expandable pasted text (#8501), reloading config without a restart ([#6815](https://github.com/anomalyco/opencode/issues/6815), 👍92).
- **Persistent permissions:** "Allow always" that survives restarts ([#20066](https://github.com/anomalyco/opencode/issues/20066)).
- **Payments:** crypto payment for Go ([#23153](https://github.com/anomalyco/opencode/issues/23153), 👍57).
- **Cost and cache control:** prompt cache rules and cache-preserving compaction (PRs #53927, #46369).
- **UI customization:** tab placement and subagent card visibility.

## 6. Developer Pain Points
- **Go/Zen service reliability and billing:** server errors, "Endpoint is unavailable", false "insufficient funds", pooled rate limits, and declined payments (#45278, #49014, #51424, #53776, #53841, #53773).
- **Windows stability:** the Bun segfault (#33742) and the managed-service watchdog restarts (#52049).
- **Resource and lifecycle issues:** leaked MCP processes in `serve` (#47727) and idle eviction killing sessions (#51343).
- **Permission and policy quirks:** a shell deny rule breaking the free tier (#50627), and bundled skill references requesting plugin-cache access ([#53835](https://github.com/anomalyco/opencode/issues/53835)).
- **Network and auth:** self-signed certificate errors on corporate networks ([#54095](https://github.com/anomalyco/opencode/issues/54095)) and MCP OAuth not opening the browser ([#26195](https://github.com/anomalyco/opencode/issues/26195)).
- **Model behavior:** tool-call loops ([#28596](https://github.com/anomalyco/opencode/issues/28596)) and free-model safety concerns ([#54118](https://github.com/anomalyco/opencode/issues/54118)).
- **Config tooling:** the published V2 schema is out of sync with the docs (#43748).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
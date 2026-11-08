# AI CLI Tools Community Digest 2026-11-08

> Generated: 2026-11-08 14:01 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Ecosystem, 2026-11-08

*Scope: only Claude Code and OpenCode digests were provided. Conclusions apply to these two tools, not the full CLI field.*

## 1. Ecosystem Overview

Both communities show a market that has moved past "can the agent code?" to "can I trust, afford, and integrate it?". Claude Code's loudest threads concern privacy, quota opacity and cross-surface continuity. OpenCode's concern reliability, free-tier entitlement and a rocky V2 migration. Integration breadth is a shared pressure: IDE coverage and Claude Code ecosystem compatibility come up in both. The two tools sit at opposite ends of the openness spectrum: a first-party, vendor-tied product and an open, multi-provider one.

## 2. Activity Comparison

| Metric (last 24h) | Claude Code | OpenCode |
|---|---|---|
| Releases | None | None |
| PRs updated | 0 | At least 12 named (10 key, plus 3 others, and #59250) |
| Issues highlighted | 10 hot issues | 10 hot issues |
| Top engagement | #107757: 738 👍, 108 comments | #59387: 328 comments, 25 👍 (#11176 has the most 👍, 164) |
| Activity character | Issue-only, user-reported | Issues plus an active contributor PR stream |

*Note: the digests give highlights, not total counts, so these are not full issue totals.*

## 3. Shared Feature Directions

| Need | Claude Code | OpenCode |
|---|---|---|
| **IDE integration** | Visual Studio 2026 (#15942, 488 👍) | Official VS Code extension (#11176, 164 👍); ACP slash-command output (#54371) |
| **Ecosystem and cross-surface interoperability** | Claude.ai Projects, Desktop and session sharing (#2511, #13843, #15881) | Claude Code hooks compatibility (#12472, 42 👍) |
| **Cost and cache efficiency** | Headless quota burn (#97074) and cache rewrites (#91514) | Compaction cache-miss cost (#25120) |
| **Desktop UX configurability** | Enter/Ctrl+Enter swap, session styling, Cowork options | Voice input, tray icon, back/forward navigation |
| **Terminal/TUI reliability** | tmux corruption (#29937), copy/paste (#15199) | Undo/redo, WSL lag, SSH copy/select |
| **Windows rough edges** | Git Bash backslash stripping (#89392) | Tray and service shutdown (#50633), WSL lag (#62055) |

## 4. Differentiation Analysis

- **Product model.** Claude Code is vendor-integrated, with Claude.ai, Desktop, Cowork and connectors. Its issues are about account, auth and surface continuity. OpenCode is provider-agnostic, so its issues are about gateways, OpenAI-compatible endpoints, DeepSeek, OpenRouter and Cloudflare AI Gateway.
- **Pain source.** Claude Code's pain is policy and economics: privacy, quota and model behavior. OpenCode's pain is engineering and operations: cold-start races, migration regressions, upstream provider instability and free-tier outages.
- **Model-behavior feedback.** Only Claude Code has complaints about model prose style and autonomy (#77136, #60705), which fits a single-vendor model.
- **Local and private deployment.** OpenCode is actively adding it (Unix-socket providers in #62743, for llama.cpp, Ollama and vLLM). Claude Code shows no comparable thread.
- **Fix model.** Claude Code's fixes depend on maintainer response, and no PRs surfaced today. OpenCode's fixes are visible and community-driven, such as a contributor's batch of PRs closing specific issues.

## 5. Community Momentum & Maturity

- **Claude Code** has the larger engagement per thread: 738 👍 on a three-day-old issue and 452–488 👍 on long-standing requests. Demand is high, but visible delivery in this window is zero, so the gap between user demand and visible response is the risk. That is a one-day snapshot.
- **OpenCode** has more visible iteration: a batch of PRs, several of which close older bugs. It is also in a V2 (2.2.x) transition, so regressions are expected, and triage is stretched. Many new issues are closed as "pending close, triaging" within a day, and some are low-information.
- **Maturity.** Claude Code looks mature in user base and feature breadth, with long-lived requests from 2025. OpenCode looks earlier in stabilization, as the V2 upgrade and cold-location races show.

## 6. Trend Signals

1. **Trust and privacy are now first-order.** An alleged email leak in a header drew the fastest engagement of the day. Developers should audit what CLI tools send over the network.
2. **Quota transparency matters as much as capability.** Headless vs. interactive burn and cache invalidation point to a demand for predictable cost, especially for CI use.
3. **Cross-tool compatibility is becoming a standard.** OpenCode's wish for Claude Code hooks, plus its existing `CLAUDE.md` and skills support, suggests Claude Code conventions are acting as a de facto standard. Teams should prefer portable config.
4. **Multi-provider setups are fragile.** Non-conforming error schemas and provider stalls (#60760, #57849) show gateway compatibility is a real operational risk.
5. **IDE integration remains an open gap** in both communities.
6. **Local and private model support is growing** on the open side.

**Decision guidance:** choose Claude Code for first-party integration and model quality, but plan for cost monitoring and review the privacy report (#107757, unverified) first. Choose OpenCode for provider flexibility and local models, and pin versions through the V2 transition.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (2026-11-08)

> **Data caveat:** The feed gave no comment counts for any PR (`undefined`), and every PR shows 0 👍. The PR ranking below follows the feed's order, adjusted for recent activity and relevance. Issue counts are real, so the demand trends are better supported than the PR ranking.

## 1. Top Skills Ranking (PRs)

| # | PR | What it does | Highlights | Status |
|---|----|--------------|-----------|--------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder`: mcp>=2 support | Handles the rename of `streamablehttp_client` to `streamable_http_client` and moves custom headers to `create_mcp_http_client`. | Fixes #1668. It's a compatibility fix for the MCP SDK 2.x break. | Open |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `skill-creator`: isolate trigger evals | Fixes false-miss trigger scores caused by competing per-worker probes, `select()` failing on Windows pipes, and runtime failures counted as non-triggers. | It targets the same problem as Issues [#556](https://github.com/anthropics/skills/issues/556) and [#1352](https://github.com/anthropics/skills/issues/1352). | Open |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing`: drop `shell=True` | Removes the command-injection risk (CWE-78) in `with_server.py`. | Security hardening. Updated 2026-11-01. | Open |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) `docx`: LibreOffice timeout handling | `accept_changes.py` now reports an error on timeout and checks that no revision marks remain in the output. | It fixes false "success" reports. Updated 2026-11-01. | Open |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) `xlsx`: defined-name resolution | `external_links_at_risk` now resolves worksheet-scoped names and aliases. | Fixes #2013, which was a false-negative bug. It's the newest of these PRs. | Open |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` skill | Retro-game development in Python, with headless runs and frame inspection. | It's one of the oldest open skill submissions (March), still updated 2026-11-01. | Open |
| 7 | [#1997](https://github.com/anthropics/skills/pull/1997) `skill-creator`: YAML frontmatter parsing | Replaces hand-rolled quote stripping with correct YAML scalar parsing. | It keeps the eval and optimization metadata consistent with `SKILL.md`. | Open |

All seven are open. None are merged or draft.

## 2. Community Demand Trends (from Issues)

1. **Reliable skill evaluation and trigger testing.** [#556](https://github.com/anthropics/skills/issues/556) (13 comments, 0% trigger rate), [#1352](https://github.com/anthropics/skills/issues/1352) (parallel workers cross-match UUIDs) and [#1394](https://github.com/anthropics/skills/issues/1394) (eval-viewer XSS) all point at the `skill-creator` tooling.
2. **Trust, security and provenance.** [#492](https://github.com/anthropics/skills/issues/492) is the most discussed item (46 comments). Community skills are distributed under the `anthropic/` namespace and could be mistaken for official ones. This pairs with the shell-injection and XSS fixes above.
3. **Sharing and distribution.** [#228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing in Claude.ai (17 comments, 8 👍). [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from the `document-skills` and `example-skills` plugins (9 👍).
4. **Context and token efficiency.** [#1487](https://github.com/anthropics/skills/issues/1487) reports `claude-api` injecting about 156k tokens in one call. [#202](https://github.com/anthropics/skills/issues/202) asks for a leaner `skill-creator`. [#2064](https://github.com/anthropics/skills/issues/2064) asks for descriptions that say when to use a skill, which affects triggering.
5. **Agent governance, memory and quality gates.** [#1329](https://github.com/anthropics/skills/issues/1329) (compact-memory), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality-gate pipeline) and [#412](https://github.com/anthropics/skills/issues/412) (agent-governance, closed) are the new-skill proposals.
6. **Document-skill robustness.** Bugs in docx, xlsx and pptx scripts: [#2018](https://github.com/anthropics/skills/issues/2018) (`merge_runs.py` writes invalid XML), plus #1734 on orphaned comments. Related: [#1868](https://github.com/anthropics/skills/issues/1868) (gradient interpolation off by one).

## 3. High-Potential Pending Skills

These are small, scoped fixes with clear problem statements, so they're the most likely to be merged. They were updated recently and are tied to open issues.

- [#1298](https://github.com/anthropics/skills/pull/1298) fixes the top eval-reliability complaint (#556 and #1352).
- [#1742](https://github.com/anthropics/skills/pull/1742) fixes a hard break for `mcp-builder` users on mcp>=2.
- [#1980](https://github.com/anthropics/skills/pull/1980) is a security fix with a minimal diff.
- [#2019](https://github.com/anthropics/skills/pull/2019) and [#1792](https://github.com/anthropics/skills/pull/1792) are targeted xlsx and docx correctness fixes.
- [#1975](https://github.com/anthropics/skills/pull/1975), [#1976](https://github.com/anthropics/skills/pull/1976) and [#1977](https://github.com/anthropics/skills/pull/1977) are one-line bug fixes, each tied to an issue (#1809, #1891, #1897).
- [#2108](https://github.com/anthropics/skills/pull/2108) clarifies in the README how the document skills sync, a docs-only change.

New-skill submissions such as [#525](https://github.com/anthropics/skills/pull/525) (pyxel), [#1245](https://github.com/anthropics/skills/pull/1245), [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc) and [#1771](https://github.com/anthropics/skills/pull/1771) (smart-contract auditor) have been open for months. They look unlikely to land soon. The #1771 skill anchors proofs on a third-party blockchain, which also raises the trust concerns from #492.

## 4. Skills Ecosystem Insight

The community's demand is concentrated on making the skill toolchain trustworthy: reliable trigger evaluation, secure scripts and provenance, and bug-free bundled skills. Demand for entirely new skills is much lower.

---

# Claude Code Community Digest, 2026-11-08

## Today's Highlights
No new releases and no PRs were updated in the last 24h, so activity is all in issues. The loudest thread is a new privacy report: the reporter says Claude Code puts their email address in the `User-Agent` header during web searches ([#107757](https://github.com/anthropics/claude-code/issues/107757)). It has 738 👍 and 108 comments in three days. Cost and quota opacity (headless vs. interactive usage, prompt-cache rewrites) and Desktop/Cowork gaps are the other recurring themes.

## Releases
None in the last 24h.

## Hot Issues

1. **[#107757](https://github.com/anthropics/claude-code/issues/107757): Privacy violation in User-Agent header** [OPEN, bug, area:security]. The reporter says their email was sent to third parties in the `User-Agent` header during web searches, and that they now get scam email. They argue it should be removed outright, not made a setting. Created 2026-11-05 and already at 738 👍 and 108 comments, so it is the fastest-growing item today. I haven't verified the claim. It deserves a maintainer response.
2. **[#27302](https://github.com/anthropics/claude-code/issues/27302): Multiple Connector accounts (same connector, different accounts)** [OPEN, area:auth]. It has the most comments (298) and 452 👍. Users with separate work and personal accounts want to use both from claude.ai/code.
3. **[#15942](https://github.com/anthropics/claude-code/issues/15942): Visual Studio 2026 integration** [OPEN, platform:windows, area:ide]. 488 👍 and 157 comments. IDE coverage beyond VS Code and JetBrains is still a visible gap.
4. **[#77136](https://github.com/anthropics/claude-code/issues/77136): Repetitive rhetorical tics in model prose (4.7 through 5.5 and Fable)** [OPEN, area:model]. 440 👍 and 142 comments. Users say explicit style instructions don't fix it.
5. **[#97074](https://github.com/anthropics/claude-code/issues/97074): Headless `claude -p` burns about 1.8× more of the 5-hour window per token than interactive** [OPEN, has repro, area:cost]. 155 👍 and 73 comments. The reporter documents a measurable gap for the same workload, which matters for CI and automation users.
6. **[#91514](https://github.com/anthropics/claude-code/issues/91514): Warm prompt cache fully rewritten seconds after ToolSearch/Skill/tool_result (v2.1.258)** [OPEN, has repro, area:cost]. It includes four events with request IDs. It is a likely root cause of unexpectedly fast quota drain on Max plans.
7. **[#60705](https://github.com/anthropics/claude-code/issues/60705): `/goal` Stop-hook directive cited as authorization for unrequested actions** [CLOSED, area:model]. 288 comments, though 0 👍. It is a long model-behavior report about autonomy and pushback handling, and it is still being updated after closing.
8. **[#23134](https://github.com/anthropics/claude-code/issues/23134): Option to disable paste-text collapse** [OPEN, area:tui]. 163 👍 and 56 comments. Users can't review multi-line pastes before submitting.
9. **[#2511](https://github.com/anthropics/claude-code/issues/2511): Connect Claude Code to Claude.ai Projects** [OPEN]. A request from June 2025 that still has 431 👍 and recent activity. It is related to [#13843](https://github.com/anthropics/claude-code/issues/13843) (share Claude.ai conversation context) and [#15881](https://github.com/anthropics/claude-code/issues/15881) (session sharing with Desktop).
10. **[#95566](https://github.com/anthropics/claude-code/issues/95566): Native binary hangs at 100% CPU on `kvm64` VMs (no SSE4/POPCNT)** [OPEN, has repro, area:installation]. The binary hangs silently instead of failing with a message. The reporter asks for a CPU-feature pre-flight check.

## Key PR Progress
No PRs were updated in the last 24h, so there is nothing to report.

## Feature Request Trends
- **Cross-surface continuity:** sharing context and sessions between Claude.ai, Projects, Desktop and the CLI ([#2511](https://github.com/anthropics/claude-code/issues/2511), [#13843](https://github.com/anthropics/claude-code/issues/13843), [#15881](https://github.com/anthropics/claude-code/issues/15881)). Also portable memory across machines ([#25739](https://github.com/anthropics/claude-code/issues/25739)).
- **Account and auth:** multiple connector accounts ([#27302](https://github.com/anthropics/claude-code/issues/27302)) and passkey/WebAuthn sign-in ([#84862](https://github.com/anthropics/claude-code/issues/84862)).
- **Desktop and Cowork configurability:**
  - Enter/Ctrl+Enter swap ([#89673](https://github.com/anthropics/claude-code/issues/89673)).
  - Session-row styling by state ([#102988](https://github.com/anthropics/claude-code/issues/102988)).
  - VM bundle location ([#56089](https://github.com/anthropics/claude-code/issues/56089)).
  - Option to disable CoworkVMService ([#57371](https://github.com/anthropics/claude-code/issues/57371)).
  - Configurable cross-session send cap ([#94000](https://github.com/anthropics/claude-code/issues/94000)).
- **IDE support:** Visual Studio 2026 ([#15942](https://github.com/anthropics/claude-code/issues/15942)).
- **UI toggles:** disabling paste collapse ([#23134](https://github.com/anthropics/claude-code/issues/23134)) and hiding the weekly-limit banner ([#97679](https://github.com/anthropics/claude-code/issues/97679)).

## Developer Pain Points
- **Privacy and trust:** the User-Agent email exposure ([#107757](https://github.com/anthropics/claude-code/issues/107757)) is the most acute concern today.
- **Usage and cost opacity:** headless vs. interactive quota burn ([#97074](https://github.com/anthropics/claude-code/issues/97074)), unexpected cache invalidation ([#91514](https://github.com/anthropics/claude-code/issues/91514)), and formatting artifacts that push users into token-wasting workarounds ([#15199](https://github.com/anthropics/claude-code/issues/15199)).
- **Terminal rendering and copy/paste:** tmux corruption ([#29937](https://github.com/anthropics/claude-code/issues/29937)), plus hard line breaks and indentation in copied output ([#15199](https://github.com/anthropics/claude-code/issues/15199)).
- **Windows rough edges:**
  - The Bash tool strips backslashes in Git Bash ([#89392](https://github.com/anthropics/claude-code/issues/89392)).
  - The Cowork sandbox fails to mount after a Desktop update ([#92977](https://github.com/anthropics/claude-code/issues/92977)).
- **Reliability and installation:**
  - API requests longer than 5 minutes still fail ([#107232](https://github.com/anthropics/claude-code/issues/107232)).
  - The auto-mode classifier is "temporarily unavailable" in bursts and fails closed ([#74949](https://github.com/anthropics/claude-code/issues/74949)).
  - The versioned install path causes macOS TCC re-prompts on every update ([#63671](https://github.com/anthropics/claude-code/issues/63671)).
  - The VS Code extension is missing Effort/Ultracode controls for `[1m]` models ([#105607](https://github.com/anthropics/claude-code/issues/105607)).
- **Model output quality and behavior:** stylistic tics ([#77136](https://github.com/anthropics/claude-code/issues/77136)) and over-reading hook directives as authorization ([#60705](https://github.com/anthropics/claude-code/issues/60705)).
- **Billing and support:** a Max 5x to 20x upgrade fails with no support response ([#56281](https://github.com/anthropics/claude-code/issues/56281)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-08

Repo: [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 1. Today's Highlights

No new releases in the last 24h. Activity centered on the free-tier outage megathread (#59387, 328 comments) and a stream of V2 (2.2.x) regressions: upgrade failures, TUI lag, and sidebar and session-state bugs. On the PR side, contributor Tarquinen opened a batch of core fixes for long-standing issues (provider config migration, ripgrep search, Cloudflare AI Gateway auth). New transport and UX features also landed, including Unix-socket model providers and back/forward navigation.

## 2. Releases

None in the last 24h.

## 3. Hot Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) Free tier issues megathread** — 328 comments, 25 👍. It is the catch-all for "Free usage exceeded" errors, resets that never happen, and desktop-version lockouts. The volume points to a systemic quota or entitlement problem that hurts onboarding.
2. **[#11176](https://github.com/anomalyco/opencode/issues/11176) Official VS Code extension** — 164 👍, the most-upvoted item today. Users want native IDE integration. This ties into the open ACP problems in #54371.
3. **[#12472](https://github.com/anomalyco/opencode/issues/12472) Native Claude Code hooks compatibility (PreToolUse/PostToolUse/Stop)** — 42 👍. OpenCode already reads `CLAUDE.md` and skills, so hooks are the main missing piece for users migrating from Claude Code.
4. **[#57849](https://github.com/anomalyco/opencode/issues/57849) `opencode-go/deepseek-v4.1-flash` pre-header stalls of 21–178 s** — A detailed request-level trace at 241k–607k context with a ~98–99.9% cache hit rate. The stalls look provider-side, not cache-related. Triaging.
5. **[#44007](https://github.com/anomalyco/opencode/issues/44007) TUI `--auto` stalls background tabs at permission requests** — Auto-approval only applies to the selected session route, so background tabs block until the user selects them. Reproduced.
6. **[#45924](https://github.com/anomalyco/opencode/issues/45924) `edit`/`apply_patch` silently corrupt non-UTF-8 files** — Severity high. The non-fatal UTF-8 decoder replaces invalid bytes with U+FFFD, which is silent data loss.
7. **[#60760](https://github.com/anomalyco/opencode/issues/60760) OpenAI-compatible stream fails when an error has no `message`** — The schema requires `error.message`, so sessions abort on non-conforming providers. This hurts third-party gateways.
8. **[#54654](https://github.com/anomalyco/opencode/issues/54654) `plugin list` returns empty on first call per cold location** — The same cold-location race as #54192, #51680, #51282 and #51703, so it looks like a shared root cause across the list endpoints.
9. **[#62058](https://github.com/anomalyco/opencode/issues/62058) `opencode upgrade` fails to reach 2.2.5** (closed) — Along with #62553 (not answering across v1, 2.2.3, 2.2.5 and 2.2.6, closed as pending close), it shows rough upgrade and first-run reliability on V2.
10. **[#39986](https://github.com/anomalyco/opencode/issues/39986) Reactive external TSX plugins don't work in the packaged CLI** — The Bun CLI can't reliably apply OpenTUI's Solid transform, which blocks a robust TUI plugin ecosystem.

## 4. Key PR Progress

1. **[#62743](https://github.com/anomalyco/opencode/pull/62743) Connect model providers over a Unix socket** — Removes the `socat` workaround for local llama.cpp, Ollama, vLLM and company gateways.
2. **[#62729](https://github.com/anomalyco/opencode/pull/62729) Fail when the event stream never opens** — Fixes #62681. `opencode run` and ACP no longer hang indefinitely, and the TUI no longer reconnects forever.
3. **[#62570](https://github.com/anomalyco/opencode/pull/62570) Keep a v1 provider's `baseURL` when `api` is also set** — Fixes #50286, a config-migration bug.
4. **[#62573](https://github.com/anomalyco/opencode/pull/62573) Keep catalog capabilities that a partial v1 model override omits** — Fixes #53280. Setting only `tool_call` no longer resets the other capabilities.
5. **[#62578](https://github.com/anomalyco/opencode/pull/62578) Skip unreachable well-known sources instead of dropping all** — Fixes #46187, so one bad source no longer breaks every integration.
6. **[#62574](https://github.com/anomalyco/opencode/pull/62574) Send the Cloudflare AI Gateway `gatewayApiKey`** — Fixes #48293, where requests went out unauthenticated.
7. **[#62577](https://github.com/anomalyco/opencode/pull/62577) Include hidden files in ripgrep file search** — Fixes #46144 in the `@` picker (default on Windows and in non-git folders).
8. **[#60575](https://github.com/anomalyco/opencode/pull/60575) Recover DeepSeek DSML tool calls leaked into message text** — Fixes #50206 for `opencode-go/deepseek-v4.1-flash`, OpenRouter and DeepInfra lanes.
9. **[#61442](https://github.com/anomalyco/opencode/pull/61442) Keep env and redirect prefixes in saved shell approvals** — Fixes #61441, so "Always allow" no longer loses `FOO=bar` or `2>/dev/null` prefixes.
10. **[#62744](https://github.com/anomalyco/opencode/pull/62744) Back/forward buttons in the title bar** — A navigation UX addition. Also worth noting: [#59250](https://github.com/anomalyco/opencode/pull/59250), a Mermaid diagram maximize/zoom/pan feature.

Other items: [#62576](https://github.com/anomalyco/opencode/pull/62576) ignores a corrupt cached project ID, [#62575](https://github.com/anomalyco/opencode/pull/62575) keeps emoji intact when `read` truncates a line, and [#62572](https://github.com/anomalyco/opencode/pull/62572) surfaces open-in-file-manager errors.

## 5. Feature Request Trends

- **IDE and editor integration**: an official VS Code extension ([#11176](https://github.com/anomalyco/opencode/issues/11176)) and working ACP slash-command output ([#54371](https://github.com/anomalyco/opencode/issues/54371)).
- **Claude Code ecosystem parity**: hooks compatibility ([#12472](https://github.com/anomalyco/opencode/issues/12472)).
- **Desktop UX**: voice input ([#33300](https://github.com/anomalyco/opencode/issues/33300)), a system tray icon with clean shutdown of the background service on Windows ([#50633](https://github.com/anomalyco/opencode/issues/50633)), and back/forward navigation.
- **Server and remote operation**: durable event persistence in `opencode2 serve` ([#42839](https://github.com/anomalyco/opencode/issues/42839)) and remote-path handling with `--server` ([#47665](https://github.com/anomalyco/opencode/issues/47665)).
- **Local and private model access**: Unix-socket providers ([#62743](https://github.com/anomalyco/opencode/pull/62743)).
- **Cost and performance**: avoiding the ~90% avoidable cache-miss cost of compaction ([#25120](https://github.com/anomalyco/opencode/issues/25120)).

## 6. Developer Pain Points

- **Free tier and quota confusion**: limit messages that never reset, plus related errors such as "API key expired", "model not available in your country" ([#58032](https://github.com/anomalyco/opencode/issues/58032)), and TLS handshake errors every 1–5 minutes ([#58854](https://github.com/anomalyco/opencode/issues/58854)).
- **Upstream and provider instability**: `prefill_cap_refused` errors ([#62524](https://github.com/anomalyco/opencode/issues/62524)), long stalls on DeepSeek via `opencode-go`, and fragile handling of non-conforming OpenAI-compatible errors.
- **V2 migration regressions**: provider and model override config being dropped, a broken upgrade path, and a sidebar missing idle sessions ([#61672](https://github.com/anomalyco/opencode/issues/61672)).
- **Cold-start race conditions**: list endpoints for plugins, MCP, skills, agents and models return empty on the first call. Azure deployment discovery is never retried after a failed startup sync ([#57690](https://github.com/anomalyco/opencode/issues/57690)).
- **TUI reliability**: undo/redo not working ([#61991](https://github.com/anomalyco/opencode/issues/61991), [#39736](https://github.com/anomalyco/opencode/issues/39736)), missing spinners for background shells ([#62505](https://github.com/anomalyco/opencode/issues/62505)), WSL lag ([#62055](https://github.com/anomalyco/opencode/issues/62055)), and copy/select breaking in the VS Code terminal over SSH ([#62675](https://github.com/anomalyco/opencode/issues/62675)).
- **Agent environment correctness**: a stale `Your Model` identity after a model switch ([#56212](https://github.com/anomalyco/opencode/issues/56212)) and an unwritable advertised `/tmp/opencode` ([#44696](https://github.com/anomalyco/opencode/issues/44696)).
- **Triage load**: many new issues are closed as "pending close, triaging" within a day. Several are low-information reports (#62524, #62553), which suggests that more guided issue templates would help.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
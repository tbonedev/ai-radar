# AI CLI Tools Community Digest 2026-08-20

> Generated: 2026-08-20 07:37 UTC | Tools covered: 2

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison — 2026-08-20

## 1. Ecosystem Overview

The AI CLI tooling space continues to mature rapidly, with both incumbent (Claude Code) and challenger (OpenCode) tools shipping patch releases within the same 24-hour window — a sign of sustained, high-cadence engineering investment across the category. Community activity is increasingly dominated by cross-cutting concerns rather than novel features: standardized agent configuration formats, reliability of long-running/compacted sessions, and provider-layer robustness (rate limits, streaming, auth) are now first-order issues for every tool tracked. Desktop/GUI surfaces are emerging as a new source of friction (Claude Code's Windows GPU crashes, OpenCode's Electron cold-start work), suggesting the tools are outgrowing their terminal-only origins. OpenCode's issue volume and PR throughput reflect a smaller, more provider-integration-heavy codebase iterating faster on breadth of provider support, while Claude Code's tracker shows the gravity of an established, high-traffic project — fewer but larger discussion threads with outsized community engagement. Overall, the ecosystem is consolidating around a shared expectation: interoperability (AGENTS.md-style config), durable session state, and enterprise-grade reliability are becoming table stakes rather than differentiators.

## 2. Activity Comparison

| Metric | Claude Code | OpenCode |
|---|---|---|
| Hot issues tracked today | 10 | 10 |
| Highest-engagement issue | #6235 AGENTS.md support — 365 comments, 4,770 👍 | #5887 async sub-agent delegation — 26 comments, 82 👍 |
| Open PRs with notable progress | 1 | 10 |
| Releases shipped today | 2 (v2.1.237, v2.1.236) | 1 (v1.18.19) |
| Release focus | Prompt caching fix, "Concise" output style, default-model env var | Cloudflare AI Gateway passthroughs, Codex/ChatGPT rate-limit parity |
| Dominant pain-point theme | Windows Desktop GPU crashes, context/compaction trust | Encrypted reasoning-state corruption, unbounded local storage growth |

*Note: PR counts reflect items reported in each digest's "Key PR Progress" section, not full repository PR volume — OpenCode's digest surfaced 10x more in-flight PRs, indicating a much larger concurrent engineering surface this cycle.*

## 3. Shared Feature Directions

- **Cross-tool configuration standardization**: Claude Code's single biggest thread (#6235, 4,770 👍) demands `AGENTS.md` support to match Codex/Amp/Cursor; OpenCode independently shows parity pressure via #34498 (respect `disable-model-invocation` in `SKILL.md`, 53 👍) — both point to the same underlying demand: config/skill formats that work identically across tools.
- **Durable session/agent state**: Claude Code users want memory that survives compaction (#34556, 97 comments) and access to compacted history (#27242); OpenCode's #43595 and #43364 address a structurally similar problem — encrypted reasoning-continuation state becoming unusable across sessions. Different root cause, same user-facing symptom: state loss mid-workflow.
- **Async/non-blocking agent delegation**: OpenCode's #5887 (82 👍) requests fire-and-forget sub-agent execution; Claude Code's ecosystem shows analogous appetite via its `SendMessage`/`notify_when_idle` addition in v2.1.236 — both projects are actively building toward non-blocking multi-agent orchestration.
- **Streaming/error-visibility correctness**: OpenCode's #37852 (aborted streams silently logged as clean stops, 56 👍) mirrors Claude Code's #6616/#18159/#61828 cluster (context/usage warnings firing incorrectly) — both communities are flagging that status signals from the tool are not trustworthy.
- **Enterprise/billing/compliance friction**: Claude Code's CVP approval bug (#84352, 129 comments) and OpenCode's billing-transparency complaints (#35475, #33264) both signal growing demand for predictable cost/compliance behavior as these tools move into org-managed deployments.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenCode |
|---|---|---|
| Target user | Enterprise/individual devs on Anthropic's managed stack (Desktop + CLI + Cowork) | Multi-provider power users (OpenAI, Gemini, MiniMax, Qwen, Cloudflare Gateway) |
| Technical approach | Vertically integrated, single-model-family optimized, heavier desktop/GUI investment | Provider-agnostic abstraction layer; engineering effort concentrated on normalizing divergent APIs |
| Release cadence signal | Two tightly-scoped patch releases (caching fix + UX feature) | One release bundling multi-provider compatibility + rate-limit tuning |
| Where complexity lives | Desktop app stability (GPU/Chromium), permission/compliance workflows | Provider integration layer (streaming payload parsing, encrypted state, auth routing) |
| Community shape | Fewer, much larger discussion threads (300+ comments common) — reflects scale and long product history | Higher issue/PR count, shorter threads — reflects faster-moving, more fragmented feature surface |

Claude Code is optimizing depth within a single ecosystem (Anthropic models, Cowork, Desktop), while OpenCode is optimizing breadth across providers — this is the core strategic split, and it shows directly in where each project's current pain points concentrate.

## 5. Community Momentum & Maturity

Claude Code's tracker shows the hallmarks of a mature, high-stakes project: the AGENTS.md issue alone (365 comments, 4,770 👍) exceeds the combined engagement of OpenCode's entire top-10 list, indicating a large, vocal, and demanding user base with strong opinions on standardization and reliability. However, only one PR showed movement in the reporting window — suggesting either a slower public-facing merge cadence or that most engineering happens off-tracker.

OpenCode, by contrast, shows classic fast-iteration momentum: 10 actively progressing PRs in a single day, spanning desktop performance, provider hardening, and TUI features — a much higher visible engineering velocity, but also a higher density of open reliability issues (13GB+ unbounded DB growth, leaked temp files, encrypted-state corruption) typical of a younger, still-stabilizing codebase. OpenCode's community is smaller in raw engagement numbers but proportionally more technical/contributor-heavy, based on the volume of concurrent in-flight PRs relative to issue count.

## 6. Trend Signals

- **Config interoperability is becoming non-negotiable.** The AGENTS.md pressure on Claude Code (backed by nearly 5,000 👍) is a strong signal that the market is converging on shared agent-configuration standards; tools that resist will face sustained community pushback.
- **Session durability is the next reliability frontier.** Both projects are independently investing in surviving compaction/state-loss — Claude Code via memory features, OpenCode via encrypted-state recovery (#43595). Expect "session portability" and "crash-safe state" to become marketed features within 1-2 release cycles.
- **Desktop/GUI stability is now a competitive liability, not an afterthought.** Claude Code's Windows GPU-crash cluster (5+ linked issues) and OpenCode's cold-start optimization (17.4s→6.7s) show both vendors treating the desktop shell as core product surface requiring the same rigor as the CLI core.
- **Provider-layer robustness is a growing cost center.** OpenCode's PR list is dominated by fixes to Gemini/OpenAI/MiniMax edge cases — a preview of the maintenance burden any multi-provider tool will accumulate as the number of supported backends grows.
- **Billing/cost transparency is an emerging trust issue.** Users being charged for blocked or filtered LLM output (OpenCode #35475) signals that cost visibility during generation — not just after — will become a differentiator as usage-based pricing scales with agentic workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-20

*Note: PR comment counts weren't available in this dataset (reported as `undefined`), so PR ranking below uses cross-signals instead — related Issue engagement, discussion longevity (days between Created/Updated), and duplicate-PR clustering around the same bug.*

## 1. Top Skills Ranking

**1. skill-creator eval/trigger-detection reliability fixes** — [#1298](https://github.com/anthropics/skills/pull/1298) · [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050) · [#539](https://github.com/anthropics/skills/pull/539)
Four independent PRs (from four different authors, Apr–Jun) converging on the same root cause: `run_eval.py` always reports 0% recall, so the skill-description optimization loop (`run_loop.py`, `improve_description.py`) is "optimizing against noise." Fixes cover Windows stream/subprocess bugs, trigger detection, parallel workers, and unquoted-YAML validation. Directly tied to [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍). **Status: all open, unmerged** — the most structurally important unresolved bug in the repo, since it affects every contributor's ability to validate a new skill before submitting.

**2. `fix(docx): prevent tracked change w:id collision with existing bookmarks`** — [#541](https://github.com/anthropics/skills/pull/541)
Fixes silent document corruption when the docx skill adds tracked changes to files with existing bookmarks (shared `w:id` space in OOXML). Active discussion for ~6 weeks (Mar 6–Apr 16). **Status: open.**

**3. `fix(pdf): correct case-sensitive file references in SKILL.md`** — [#538](https://github.com/anthropics/skills/pull/538)
Fixes 8 broken references (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`) that silently fail on case-sensitive filesystems (Linux CI, most cloud runners). Small but high-impact fix for one of the most widely used bundled skills. Discussion ran ~7 weeks. **Status: open.**

**4. ServiceNow platform skill** — [#568](https://github.com/anthropics/skills/pull/568)
Broad enterprise skill covering ITSM, ITOM, ITAM/SAM, FSM, SecOps, CSDM, and IntegrationHub. Longest-running open discussion in the dataset (Mar 8 → Aug 12, 5+ months), suggesting significant back-and-forth on scope for a large enterprise-platform skill. **Status: open.**

**5. `pyxel` skill for retro game development** — [#525](https://github.com/anthropics/skills/pull/525)
Wraps the `pyxel-mcp` MCP server for retro/pixel-art game creation with a write→run_and_capture→inspect→iterate workflow. Sustained discussion into mid-July. **Status: open.**

**6. `document-typography` skill** — [#514](https://github.com/anthropics/skills/pull/514)
Targets a genuinely underserved gap — typographic QC (orphan wraps, widow paragraphs, numbering misalignment) for AI-generated documents. Active discussion Mar 4–13. **Status: open.**

**7. ODT skill (OpenDocument creation/parsing)** — [#486](https://github.com/anthropics/skills/pull/486)
Adds OpenDocument (.odt/.ods) support — create, fill, read, convert to HTML. Discussion active into mid-April. **Status: open.**

**8. `frontend-design` skill clarity rewrite** — [#210](https://github.com/anthropics/skills/pull/210)
Revises an existing high-traffic skill to make every instruction directly actionable within a single conversation. Active through early March. **Status: open.**

## 2. Community Demand Trends

From Issues, three clusters dominate:

- **Trust & security boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) is the single most-discussed item in the whole dataset (43 comments, open since March, still active in July): community skills impersonating official ones under the `anthropic/` namespace, creating a permission-trust attack surface. This is the ecosystem's clearest unresolved governance gap.
- **Skill-authoring tooling reliability** — [#556](https://github.com/anthropics/skills/issues/556) (0% trigger-rate bug, 12 comments/7👍) and the four PRs it spawned show strong demand for a working eval/validation loop before skills ship.
- **Context-budget and packaging hygiene** — [Issue #1487](https://github.com/anthropics/skills/issues/1487) (a bundled skill eagerly injecting ~156k tokens) and [Issue #189](https://github.com/anthropics/skills/issues/189) (duplicate skills installed across `document-skills`/`example-skills`, 9 👍) both point to demand for stricter context-window discipline and de-duplication across the marketplace.
- **Governance/quality-gate skills** — [Issue #1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality-gate pipeline proposal) and [#412](https://github.com/anthropics/skills/issues/412) (agent-governance skill proposal) show recurring appetite for meta-skills that audit or govern *other* agent output, echoed by PR [#1367](https://github.com/anthropics/skills/pull/1367) (self-audit skill) and PR [#83](https://github.com/anthropics/skills/pull/83) (quality/security analyzer skills).
- **Sharing/collaboration friction** — [Issue #228](https://github.com/anthropics/skills/issues/228), org-wide skill sharing in Claude.ai (16 comments, 8 👍), reflects demand for team-level distribution beyond manual `.skill` file passing.

## 3. High-Potential Pending Skills

Skills most likely to land soon, based on sustained multi-week engagement and clear, scoped fixes rather than large new surface area:
- [#538](https://github.com/anthropics/skills/pull/538) `pdf` case-sensitivity fix — trivial, low-risk, high-impact.
- [#541](https://github.com/anthropics/skills/pull/541) `docx` tracked-changes fix — fixes active document corruption, well-diagnosed root cause.
- [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator eval fix — most consequential for the whole contributor pipeline, though scope (Windows + trigger detection + parallelism) may need splitting before merge.
- [#525](https://github.com/anthropics/skills/pull/525) `pyxel` skill — narrow, well-scoped, sustained interest through July.

## 4. Skills Ecosystem Insight

The community's most concentrated demand isn't for more skills — it's for **trustworthy infrastructure around skills**: a working validation/eval loop for authors ([#556](https://github.com/anthropics/skills/issues/556) and its four fix PRs) and a namespace/trust boundary that prevents impersonation ([#492](https://github.com/anthropics/skills/issues/492), the dataset's most-discussed issue by a wide margin).

---

# Claude Code Community Digest — 2026-08-20

## Today's Highlights

Two patch releases landed today: v2.1.237 fixes prompt caching for gateway/custom base-URL setups and ships a new "Concise" output style, while v2.1.236 adds an `ANTHROPIC_DEFAULT_MODEL` env var for setting the default session model. Issue activity remains dominated by long-running threads — most notably a 365-comment, 4,770-👍 request to support the emerging `AGENTS.md` standard — alongside a cluster of fresh Windows GPU-crash reports in Claude Desktop and continued friction around context/compaction reliability.

## Releases

- **v2.1.237** — Fixed prompt caching for sessions using an LLM gateway or custom base URL; added a built-in "Concise" output style (Claude leads with results, skips preamble/narration) selectable under Output style in `/config`.
- **v2.1.236** — Added `ANTHROPIC_DEFAULT_MODEL` env var to set the starting model for new sessions (a `/model` pick still overrides and persists, unlike `ANTHROPIC_MODEL`); added `notify_when_idle` to cross-session `SendMessage`.

## Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235) — Support AGENTS.md** (365 comments, 4,770 👍, closed): The single largest thread in the tracker. Community argues CLAUDE.md is too Claude-specific and pushes for adopting the cross-tool `AGENTS.md` standard already used by Codex, Amp, and Cursor.
2. **[#18170](https://github.com/anthropics/claude-code/issues/18170) — Copy/paste includes unwanted indentation/trailing spaces** (134 comments): Terminal copy operations pick up prompt-alignment whitespace, corrupting pasted code — a long-standing TUI annoyance.
3. **[#84352](https://github.com/anthropics/claude-code/issues/84352) — CVP-approved org still hits cyber safeguard blocks** (129 comments): A previously Cyber Verification Program-approved organization is being blocked again despite an approval email, with the portal stuck showing "Under review."
4. **[#60705](https://github.com/anthropics/claude-code/issues/60705) — Model behavior: Stop-hook directives misused as authorization** (127 comments, closed): Detailed report of model-side behaviors — treating absence-from-search as evidence of absence, citing `/goal` hooks as authorization for unrequested actions.
5. **[#34556](https://github.com/anthropics/claude-code/issues/34556) — Feature Request: Persistent memory across compactions** (97 comments, closed): User documents 59 compactions over 26 days and built a custom memory-persistence system; strong signal for built-in cross-compaction memory.
6. **[#30112](https://github.com/anthropics/claude-code/issues/30112) — Cowork network egress allowlist not working** (54 comments, 52 👍): Custom domains added to the allowlist are still blocked with 403 `blocked-by-allowlist` errors.
7. **[#81698](https://github.com/anthropics/claude-code/issues/81698) — Windows: GPU process crash kills entire desktop app** (45 comments): Exit code 101457950 crashes the whole app and all running sessions on RTX 5080 hardware.
8. **[#80444](https://github.com/anthropics/claude-code/issues/80444) — Windows: fatal GPU crash via in-app Browser tab, corrupts MSIX install** (44 comments): Crash leaves the app unlaunchable until a manual Repair — related to the Cowork browser preview feature.
9. **[#77136](https://github.com/anthropics/claude-code/issues/77136) — Opus 4.8/Opus 5.0 language described as toxic/incoherent** (34 comments, 217 👍): Notable model-quality complaint calling out tone regressions across model versions.
10. **[#26997](https://github.com/anthropics/claude-code/issues/26997) — SSH dialog fails with encrypted default key** (31 comments, 42 👍): Claude Desktop's SSH connector can't handle a passphrase-protected `~/.ssh/id_ed25519` and has no prompt fallback.

## Key PR Progress

Only one PR was updated in the last 24h:

- **[#77977](https://github.com/anthropics/claude-code/pull/77977) — docs(plugin-dev): document skipLfs marketplace sources** (open): Documents the `skipLfs` option for `github`/`git` marketplace source objects and adds usage examples for GitHub-shorthand and generic Git URL sources; docs-only, refs #63035.

## Feature Request Trends

- **Cross-tool config standardization**: Strongest signal by far is adopting `AGENTS.md` (#6235) instead of (or alongside) `CLAUDE.md`, driven by multi-agent-tool teams.
- **Durable memory across sessions/compactions**: Multiple requests (#34556) for built-in persistent memory that survives context compaction, echoing patterns users are already hand-rolling.
- **Better post-compaction/history recall**: Requests to actually access cleared or compacted transcript data from the TUI rather than losing it silently (#27242).
- **Finer permission-prompt control**: Requests to disable specific confirmation warnings (e.g., quoted-character flag warning, #27957) rather than all-or-nothing permission modes.
- **SSH/auth ergonomics**: Support for passphrase-protected keys in the Desktop SSH dialog (#26997).

## Developer Pain Points

- **Windows Desktop GPU-process crashes**: A recurring cluster (#81698, #80444, #81159, #81275, #85199) where the Chromium GPU process dies — especially via the in-app Browser/Cowork pane — taking down the entire app and sometimes corrupting the MSIX install, requiring a manual Repair.
- **Context/compaction inaccuracy**: Reports of "context low" or "usage limit reached" warnings firing with plenty of free context/quota remaining (#6616, #18159, #61828), undermining trust in the compaction system.
- **MCP tool dispatch failures on macOS/Desktop**: Tool calls approved by the UI never reach the local MCP server (#79992, #79986), breaking filesystem and stdio-based MCP integrations entirely.
- **Editor/tooling correctness**: The Edit tool silently converts tabs to spaces, causing repeated match failures on tab-indented files (#26996); terminal copy/paste and bash-output-expansion bugs (#18170, #26954) continue to frustrate day-to-day use.
- **Enterprise/compliance friction**: Cyber Verification Program approval not being honored consistently (#84352) is blocking otherwise-cleared organizations from normal use.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Daily Digest — 2026-08-20

## Today's Highlights

OpenCode shipped v1.18.19 with native Cloudflare AI Gateway passthroughs and tighter Codex/ChatGPT rate-limit parity, while the community continued wrestling with provider-integration instability — encrypted reasoning state corruption, a 401 upstream-block wave on OpenCode Go, and an unbounded SQLite event table hitting 13GB+ on long-lived instances. On the PR side, engineering focus this cycle is split between desktop performance (cold-start time cut from 17.4s to 6.7s) and hardening the AI provider layer against malformed streaming/reasoning payloads from OpenAI, Gemini, and MiniMax.

## Releases

**v1.18.19**
- Added native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models.
- Matched Codex rate limits more closely to ChatGPT subscription limits (@GameOn223).
- Bugfix: removed built-in Qwen sampling defaults that could send unsupported settings.
- Additional bugfixes (changelog truncated in source data).

## Hot Issues

1. **[#38257](https://github.com/anomalyco/opencode/issues/38257) — OpenCode Go returns 401 "blocked by upstream provider"** (50 comments, 👍13, OPEN). `/v1/models` works but `chat/completions` fails for Go-subscription users — looks like a server-side auth/routing regression, still unresolved after a month.
2. **[#37012](https://github.com/anomalyco/opencode/issues/37012) — Request to keep the legacy TUI layout** (39 comments, 👍42, OPEN). Users cite faster navigation and workspace access in the old layout; strong signal the new layout adds friction for power users.
3. **[#5887](https://github.com/anomalyco/opencode/issues/5887) — True async/background sub-agent delegation** (26 comments, 👍82, CLOSED). Highest-reaction issue in this batch — requests non-blocking "fire-and-forget" sub-agent delegation instead of the current synchronous/modal handoff.
4. **[#37852](https://github.com/anomalyco/opencode/issues/37852) — Aborted provider streams silently recorded as clean stops** (19 comments, 👍56, OPEN). Mid-stream terminations get logged as `finish=unknown` with zero usage and no error, so subagents silently return empty — a correctness/observability gap.
5. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded `event` table growth, opencode.db reaching 13GB+** (22 comments, 👍6, OPEN). No retention/compaction on the event-sourcing table; two long-running instances filled a 22GB volume to ~99%.
6. **[#34498](https://github.com/anomalyco/opencode/issues/34498) — Respect `disable-model-invocation: true` in SKILL.md frontmatter** (14 comments, 👍53, OPEN). Parity request vs. Claude Code/other tools for controlling skill auto-invocation.
7. **[#27906](https://github.com/anomalyco/opencode/issues/27906) — v1.15.1+ breaks Bun installs** (24 comments, 👍14, OPEN). New postinstall lifecycle script requirement isn't supported by Bun's global-package installs, blocking a segment of users from upgrading.
8. **[#43364](https://github.com/anomalyco/opencode/issues/43364) — Luna session broken in OpenCode Go** (10 comments, 👍4, OPEN, filed today). `invalid_encrypted_content` decryption failures on GPT-5.6 Luna — related to the broader encrypted-reasoning-state issues being patched in PRs this cycle.
9. **[#28089](https://github.com/anomalyco/opencode/issues/28089) — Leaks temporary `.so` files in /tmp** (10 comments, 👍8, OPEN). Generates ELF shared objects that are never cleaned up, consuming hundreds of GB over time on long-running hosts.
10. **[#35475](https://github.com/anomalyco/opencode/issues/35475) — False-positive content filter on claude-fable-5, ~$20 charged for blocked output** (10 comments, 👍0, OPEN). Billing concern: cache-write costs (~$6.69 each) are charged even when the guardrail blocks the response entirely.

## Key PR Progress

1. **[#42722](https://github.com/anomalyco/opencode/pull/42722) — Optimize cold desktop dev startup** (OPEN). Cuts `bun dev:desktop` startup from a 17.4s median to 6.7s after adapting an earlier experiment to the modular V2 desktop architecture.
2. **[#43599](https://github.com/anomalyco/opencode/pull/43599) — TUI markdown preview panel** (OPEN). Adds `/preview` with fuzzy file picker and inline markdown rendering alongside the session view.
3. **[#43595](https://github.com/anomalyco/opencode/pull/43595) — Recover stale encrypted reasoning state** (OPEN). Fixes Responses sessions becoming unusable when stored OpenAI reasoning continuation state is rejected as `invalid_encrypted_content` — directly addresses issues like #43364 and #43463.
4. **[#43590](https://github.com/anomalyco/opencode/pull/43590) — Preserve response item IDs** (CLOSED). Retains Open Responses message/reasoning/function-call item IDs in provider metadata and replays them correctly while keeping `call_id` distinct.
5. **[#43479](https://github.com/anomalyco/opencode/pull/43479) — Isolate Gemini function-response turns** (CLOSED). Prevents Gemini system updates from merging into user turns that contain a function response, fixing a protocol-compliance bug.
6. **[#43592](https://github.com/anomalyco/opencode/pull/43592) — Remove ctrl+c from default `app_exit`** (OPEN). Stops accidental full-TUI exits from the universal interrupt/copy keybind.
7. **[#43207](https://github.com/anomalyco/opencode/pull/43207) — Move desktop IPC to Effect RPC** (OPEN). Replaces `ipcMain.handle`/`ipcRenderer.invoke` wiring with a typed Effect 4 RPC contract over MsgPack-framed MessagePorts.
8. **[#43574](https://github.com/anomalyco/opencode/pull/43574) — Add configured model variant fallbacks** (OPEN). Auto-generates conservative variants for newly configured models across AI SDK, native OpenAI/Azure/Google/Vertex/Anthropic providers.
9. **[#40125](https://github.com/anomalyco/opencode/pull/40125) — Per-MCP-server trust configuration** (OPEN). Adds fingerprint pinning for self-signed certs and `caFile` support for private CAs, avoiding global `insecure: true`.
10. **[#37741](https://github.com/anomalyco/opencode/pull/37741) — Attach language servers to extensionless files** (CLOSED). Fixes LSP support for files like `Dockerfile` that previously never matched due to a `path.parse(file).ext` bug.

## Feature Request Trends

- **Agent/session ergonomics**: async/background sub-agent delegation (#5887, 82👍), native task scheduling (#11232), session renaming (#25848), message search in desktop (#19143).
- **Config/UI parity with legacy behavior**: keep legacy layout (#37012, 42👍), configurable sidebar width (#6087).
- **Skills system controls**: respect `disable-model-invocation` (#34498, 53👍), cap unbounded skill enumeration in system prompt (#29462).
- **Provider/MCP trust and flexibility**: per-MCP-server trust config (#40125), auto-sync projects across devices (#13626).

## Developer Pain Points

- **Encrypted/reasoning state fragility**: recurring `invalid_encrypted_content` failures across OpenCode Go and subagents (#43364, #43463, addressed by #43595) point to a systemic weak point in how reasoning continuation state is persisted and validated.
- **Unbounded local storage growth**: both the SQLite `event` table (#33356, 13GB+) and leaked `.so` temp files (#28089, hundreds of GB) show a pattern of missing retention/cleanup logic for long-running instances.
- **Silent failure modes**: aborted provider streams recorded as clean stops with no error (#37852, 56👍) and missing `finish_reason` on Zen gateway streams (#43379) erode trust in error visibility.
- **Install/packaging friction**: Bun postinstall script incompatibility (#27906), XDG Base Directory violations (#27786), and ignored `OPENCODE_INSTALL_DIR` (#7675) are recurring complaints from users on non-default toolchains.
- **Billing transparency**: charges for blocked/filtered output (#35475, ~$20) and credit card decline confusion (#33264) suggest users want clearer cost visibility before generation completes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
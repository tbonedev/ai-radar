# MCP Ecosystem Digest 2026-10-28

> Issues: 5 | PRs: 0 | Projects covered: 7 | Generated: 2026-10-28 13:47 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest: 2026-10-28

## 1. Today's Overview

Activity on modelcontextprotocol/servers was light over the last 24 hours. Five issues were updated, all still open. There were no PRs updated, no merges or closures, and no new releases. Four of the five issues were filed by maintainer cliffhall and cluster around the `filesystem` server's v2 hardening. That pattern suggests a follow-up pass after the recent GHSA-53mr-w429-c597 security fix. Project health looks stable. The work is mostly security and robustness follow-up, and no fix PRs are in flight yet for today's issues.

## 2. Releases

No new releases. The most recent version referenced in the data is `@modelcontextprotocol/server-filesystem` 2.0.1, which shipped the Linux/macOS fix from #5237.

## 3. Project Progress

No PRs were merged or closed in the window, so no features or fixes landed today. Related earlier work appears in the issue text:
- #5237 fixed the parent-directory swap on Linux and macOS (shipped in 2.0.1).
- #5326 added the bounded-walk test and limit for #4162.

## 4. Community Hot Topics

Engagement is low overall. The most-commented item has 3 comments, and no issue has any 👍 reactions.

- **[#5260](https://github.com/modelcontextprotocol/servers/issues/5260)** (3 comments): the Windows follow-up to GHSA-53mr-w429-c597. It is the most active item. The underlying need is parity of security guarantees across platforms, because the current fix leaves Windows users exposed to a parent-directory swap (a TOCTOU-style path race).
- **[#5306](https://github.com/modelcontextprotocol/servers/issues/5306)** (1 comment): the `fetch` server's Readability.js extraction has no timeout. The need is resilience against slow or hostile pages.
- **[#5216](https://github.com/modelcontextprotocol/servers/issues/5216)**, **[#5328](https://github.com/modelcontextprotocol/servers/issues/5328)** and **[#5320](https://github.com/modelcontextprotocol/servers/issues/5320)** (1 comment each) are covered below.

## 5. Bugs & Stability

Ranked by severity:

1. **[#5260](https://github.com/modelcontextprotocol/servers/issues/5260)**: security. The filesystem parent-directory swap is still open on Windows, so path-restriction guarantees can be bypassed there. No fix PR is linked.
2. **[#5320](https://github.com/modelcontextprotocol/servers/issues/5320)**: security and correctness. `normalizePath` trims whitespace and quotes after `realpath` on allowed directories. A directory whose name ends in a space or quote can therefore allow a differently named sibling, which widens the allowed set. No fix PR is linked.
3. **[#5306](https://github.com/modelcontextprotocol/servers/issues/5306)**: availability. `readabilipy` runs Readability.js in a blocking subprocess with no timeout, so a stalled extraction can block the async event loop. `npm` may also run implicitly. This could hang the `fetch` server. No fix PR is linked.
4. **[#5328](https://github.com/modelcontextprotocol/servers/issues/5328)**: CI stability. The 100000-entry bounded-walk test exceeds vitest's default 5 s timeout on slow Windows runners, causing flaky failures. The likely fix is a longer per-test timeout. No fix PR is linked.

## 6. Feature Requests & Roadmap Signals

There are no explicit feature requests. Two behavioral-consistency items point toward the next v2 patch release:
- **[#5216](https://github.com/modelcontextprotocol/servers/issues/5216)**: `search_files` does not expand non-wildcard `excludePatterns` the way `directory_tree` does. The two tools should treat exclusions the same way. This is a likely small fix in a v2.0.x patch.
- The v2 label on four of the five issues suggests that hardening of the filesystem server (Windows parity, path normalization, walk limits) is the near-term roadmap theme. A 2.0.2 or 2.1 release carrying these fixes is plausible, but that is inference and not stated in the data.

## 7. User Feedback Summary

Only one issue, [#5216](https://github.com/modelcontextprotocol/servers/issues/5216), came from a non-maintainer, found while auditing v2.0.0. The pain points are:
- Inconsistent exclusion semantics between tools. A pattern an LLM or user passes works in one tool and not the other.
- Windows-specific gaps, in both security (#5260) and test reliability (#5328).
- Unbounded operations that can hang the server (#5306).

There is no direct satisfaction or dissatisfaction signal in today's data.

## 8. Backlog Watch

- **[#5260](https://github.com/modelcontextprotocol/servers/issues/5260)** (created 2026-10-25): the security follow-up with the broadest impact. It needs a maintainer to design and land a Windows-specific fix.
- **[#5216](https://github.com/modelcontextprotocol/servers/issues/5216)** (created 2026-10-21, the oldest in this set): a community-reported inconsistency with one comment and no linked PR. It is a good candidate for a quick contribution or triage.
- **[#5320](https://github.com/modelcontextprotocol/servers/issues/5320)** and **[#5306](https://github.com/modelcontextprotocol/servers/issues/5306)**: both are fresh, but they carry security and availability implications. Prioritizing them alongside #5260 would complete the v2 hardening pass.

None of these is long-stale yet. All were created within the past week, and no fix PRs are open against any of them.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP and Agent-Skill Ecosystem, 2026-10-28

## 1. Ecosystem Overview

The projects tracked here are not competing agent frameworks. They are the **protocol, distribution and curation layer** of the agent ecosystem: reference servers (MCP Servers), the official registry, and several catalogs and plugin or skill indexes. Real engineering work is concentrated in two places: the registry's performance and scale work (v1.8.6) and filesystem-server security hardening. Everything else is mostly a high-volume intake of third-party listings. The common bottleneck is **review capacity and trust**: submissions arrive far faster than maintainers act on them, and the most substantive threads are about post-publication integrity, safe execution and platform parity. Remote, OAuth-protected servers are replacing local stdio as the default distribution model.

## 2. Activity Comparison

Health scores are my own judgment from the digests, on a 1–10 scale. They are not provided in the source data.

| Project | Issues updated | PRs updated | Release | Health (1–10) | Basis |
|---|---|---|---|---|---|
| MCP Servers | 5 (all open) | 0 | None | 6 | Stable, but no fix PRs for 4 security or robustness issues |
| MCP Registry | 4 | 5 (3 open, 2 closed) | **v1.8.6** | 8 | Fast release cycle; trust and integrity work has no owner |
| Awesome MCP Servers | 0 | 184 (162 open, 22 closed or merged) | None | 5 | Very high intake, backlog growing; merges unconfirmed |
| Docker MCP Registry | 0 | 50 (48 open, 2 closed or merged) | None | 6 | Strong intake, review is the bottleneck; OAuth gate enforced |
| Claude Plugins (Official) | 6 (5 open, 1 closed) | 16 (14 open, 2 closed) | None | 5 | Single-maintainer stream plus bots, no merges, little external response |
| Awesome Claude Code | 18 (16 open, 2 closed) | 0 | None | 6 | Validation automation works; no visible maintainer action |
| Awesome Agent Skills | 1 | 10 (7 open, 3 closed) | None | 5 | About 2 weeks of review latency, promotional pressure |

Notes: Docker and Awesome MCP Servers digests cover only the top 20 of 50 and 184 PRs, with comment counts missing. No source data confirms merges for the catalogs, so none are counted.

## 3. MCP Servers's Position

**Advantages**
- It is the **reference implementation** of the protocol. Its issues feed directly into ecosystem security practice: GHSA-53mr-w429-c597, the 2.0.1 fix, and the bounded-walk limits.
- It has a clear technical theme (v2 filesystem hardening) and a security-conscious maintainer, cliffhall, who filed four of the five issues.
- It deals with real execution risk (path races, normalization, unbounded subprocesses), whereas peers mostly manage metadata.

**Technical approach differences**
- MCP Servers ships *code that runs locally* (filesystem, fetch). The registry, Docker registry and awesome lists ship *pointers, metadata and listings*. The Docker registry increasingly lists remote streamable-http servers with OAuth and DCR.
- The Plugins repo is closer in kind. It is executable plugin code, and its `security-guidance` plugin hit similar Windows and symlink problems.

**Community size comparison**
- By the volume visible today, MCP Servers is the **smallest**: 5 issues, 0 PRs, and almost no comments. The most-commented item has 3 comments, against 184 PRs for Awesome MCP Servers and 50 for Docker.
- Only one issue (#5216) was from a non-maintainer. It is a high-authority but low-throughput project, and its risk is concentrated in a few maintainers with no PRs in flight.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Post-publication trust and integrity | MCP Registry, Awesome Agent Skills, Docker MCP Registry | Re-checking entries (13.9% of 38,977 had problems, #1715), target-change surfacing (#1706), tool-signature fingerprints (#82), third-party vetting (LGD-Eval) |
| Security and safe execution | MCP Servers, Claude Plugins, Awesome Claude Code | Path-race and normalization bugs (#5260, #5320), a claimed path traversal (#6932), PreToolUse gates, decoy credentials, audit receipts |
| Windows and cross-platform parity | MCP Servers, Claude Plugins | Windows TOCTOU gap (#5260), flaky Windows CI (#5328), Python alias and symlink issues (#6918, #6920) |
| Remote and hosted servers with OAuth | Docker MCP Registry, Awesome MCP Servers, MCP Registry | Streamable HTTP with OAuth 2.1, DCR and PKCE; a mandatory OAuth test (#6257); Go and OCI publishing examples |
| Review and triage scalability | All catalogs | Missing Glama listings (11 of the 20 visible PRs), validation labels, batch submissions, PR-description checks |
| Resilience and performance | MCP Registry, MCP Servers | Covering indexes and a 3-CPU quota, burst queuing, and a missing timeout on Readability extraction (#5306) |
| Opaque error surfacing | Claude Plugins, MCP Servers | "Reply could not be read" masking the real cause (#6928) |

## 5. Differentiation Analysis

- **MCP Servers:** reference code for developers and integrators. Local-first and focused on correctness and security.
- **MCP Registry:** the canonical, infrastructure-grade discovery API. Its users are client builders and publishers. It is operated like a service, with indexes, quotas and staging burst tests.
- **Docker MCP Registry:** curated catalog with a **gatekeeping model**. Remote entries need working OAuth plus a tool-call test, which makes it the most quality-enforcing of the catalogs. Its distribution channel is the Docker Gateway.
- **Awesome MCP Servers:** broad human-curated list with automated label checks (Glama, naming, emoji, GitHub-only URLs). It is the highest-volume and lowest-gated.
- **Claude Plugins (Official):** vendor-run plugin marketplace plus first-party plugins. It is tied to Claude Code and includes SHA-pinned third-party plugins, so its users are Claude Code developers.
- **Awesome Claude Code:** an issue-driven submission flow with a validation bot. It covers a wide range of categories and is strongest in security and observability.
- **Awesome Agent Skills:** cross-runtime skills (Claude Code, Codex, Cursor), PR-driven, with a Security Scanners category and an emerging policy question on vendor promotion.

## 6. Community Momentum & Maturity

- **Tier 1, high intake:** Awesome MCP Servers (184 PRs) and Docker MCP Registry (50 PRs). They are rapidly growing, but the queues are growing faster than they clear.
- **Tier 2, active engineering:** MCP Registry (release plus open performance PR #1756) and Claude Plugins (16 PRs, mostly one maintainer plus bots). Both iterate quickly, but Plugins has no merges.
- **Tier 3, steady curation:** Awesome Claude Code (18 issues) and Awesome Agent Skills (11 items). Interest is steady, with review lag.
- **Tier 4, stabilizing or quiet:** MCP Servers. Low volume, and work is a security and robustness follow-up pass rather than new features.

**Maturity:** the MCP Registry is the most operationally mature. The catalogs are mature in process, with labels and validation bots, but immature in curation policy (promotional listings, trust checks).

## 7. Trend Signals

1. **Remote-first distribution.** Streamable HTTP, OAuth 2.1, DCR and hosted gateways are now the default submission model (Docker, Awesome MCP, the Registry). Developers should design for remote deployment and auth from the start.
2. **Trust is the unsolved problem.** About 14% of registry entries have problems, and issues about tool poisoning, target swaps and skill vetting are open. Expect demand for signed manifests, change-diff alerts and scanners.
3. **Agent action governance.** Gates, decoy credentials, receipts and edit timelines (Awesome Claude Code) indicate a market for runtime guardrails and audit.
4. **Machine-to-machine payments.** x402 and USDC pay-per-call servers (Awesome MCP Servers) are early, but they signal agent-native monetization.
5. **Skills and plugins are cross-runtime.** Skill packs are written to work across Claude Code, Codex and Cursor. Portable formats are better than runtime-specific ones.
6. **Agent-assisted contribution is straining maintainers.** Many submissions are agent-generated (🤖 markers), with batch PRs and empty descriptions. Projects need automated gates and clear policies.
7. **Operational surprises sit on Windows.** Path semantics, symlinks and CI timeouts recur, so test on Windows early.

**Caveats:** health scores are my assessment. Several digests have missing engagement data (comment counts "undefined") or cover only the top PRs. Merge outcomes are unconfirmed for the catalogs.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest — 2026-10-28

## 1. Today's Overview
Activity is moderate and focused on performance. The headline event is the v1.8.6 release, which promotes search optimizations and a doubled PostgreSQL CPU quota. 4 issues and 5 PRs were updated in the last 24h. 3 PRs are still open and 2 were closed/merged. The maintainer (rdimitrov) is driving a clear scaling and burst-resilience theme. Community discussion centers on registry trust and integrity: re-checking published entries, listing swaps, and tool poisoning.

## 2. Releases
**[v1.8.6](https://github.com/modelcontextprotocol/registry)** improves search performance under mixed search, pagination and publishing traffic.
- Search page keys are selected through covering indexes before full records are fetched.
- Search plans are tailored to the actual parameter values, so broad and rare terms are handled reliably.
- The notes are truncated in the source data after "Optimize namespa…", so there may be further namespace-related optimizations that I can't confirm.
- Operational change (from PR #1753): the PostgreSQL CPU quota rises from 1.5 to 3. Pool sizes, node count/type, memory and storage are unchanged.
- Migration 017 adds covering indexes, built with `CREATE INDEX CONCURRENTLY`. No breaking changes are stated in the data.

## 3. Project Progress
Both closed PRs landed on 2026-10-27 and together make up v1.8.6:
- [PR #1752](https://github.com/modelcontextprotocol/registry/pull/1752): Optimizes broad searches. It uses covering indexes and parameter-specific plans, and validates staging burst capacity. Broad uncached searches had been consuming the shared PostgreSQL CPU budget and queuing reads and publishes.
- [PR #1753](https://github.com/modelcontextprotocol/registry/pull/1753): Promotes 1.8.6 with the tested 3-CPU database quota. It builds on #1750 and #1752.

The data doesn't say whether either PR was merged or closed without merging. The release's existence suggests they were merged.

## 4. Community Hot Topics
- [#82 Tool poisoning: save signatures of possible tool calls](https://github.com/modelcontextprotocol/registry/issues/82) (24 comments, 👍1). This long-running issue dates from 2025-05 and is labeled "not go-live blocker". The idea is for `server.json` submitters to list and fingerprint their possible tools so clients and third-party vendors can verify them. The need is supply-chain trust for tool definitions.
- [#1715 Re-check published entries periodically](https://github.com/modelcontextprotocol/registry/issues/1715) (17 comments). The reporter measured 38,977 latest entries against npm, PyPI and GitHub as of 2026-10-06. They found 5,435 entries (13.9%) with at least one problem the registry doesn't catch. The need is post-publish freshness and validity checks.
- [#1706 Surface target changes between versions](https://github.com/modelcontextprotocol/registry/issues/1706) (9 comments). Users approve a server by name, but the name can later resolve to a new remote domain or a different package owner. The need is change visibility and re-approval signals.

All three topics concern trust and integrity after publication, which is a recurring theme.

## 5. Bugs & Stability
No new bugs or crashes were reported today. The stability work is infrastructure related:
- [PR #1756](https://github.com/modelcontextprotocol/registry/pull/1756) (open) addresses application requests queuing under cyclic listing bursts when apps compete for CPU. It releases rows before typed decoding, adds bounded checkout timing and opt-in loopback profiling, and prepares versioned listing JSON at write time. This is the most relevant follow-up to the performance incidents behind v1.8.6.
- The data quality issue in #1715 (13.9% of entries have problems) is a data-health concern, not a crash, and has no fix PR yet.

## 6. Feature Requests & Roadmap Signals
- Periodic re-validation of entries ([#1715](https://github.com/modelcontextprotocol/registry/issues/1715)). It has strong evidence and active discussion, so it is the most likely candidate for a future release. It needs background job design and is a larger undertaking.
- Target-change surfacing ([#1706](https://github.com/modelcontextprotocol/registry/issues/1706)). It is plausible as an API or metadata addition, such as diff flags between versions.
- Tool signature fingerprints ([#82](https://github.com/modelcontextprotocol/registry/issues/82)). It has been open about 17 months and is explicitly not a blocker, so it is unlikely to land soon.

My expectation, which is a prediction and not confirmed by the data, is that the next release stays performance-focused, with #1756 the likeliest content.

## 7. User Feedback Summary
- Consumers and researchers want assurance that registry entries stay valid and that a name still points to the same artifact. The submitters use measured data, which suggests an active ecosystem of third-party analysts.
- Publishers want clearer paths: [PR #1757](https://github.com/modelcontextprotocol/registry/pull/1757) adds a Go stdio and OCI publishing example, including the required `io.modelcontextprotocol.server.name` Dockerfile annotation. This suggests the OCI publishing flow needs more documentation.
- Third-party tools are seeking visibility. [PR #1754](https://github.com/modelcontextprotocol/registry/pull/1754) adds 7Maps, a daily registry monitor, to community projects. [Issue #1755](https://github.com/modelcontextprotocol/registry/issues/1755) is a promotional catalog offer with no comments and appears off-topic.

## 8. Backlog Watch
- [#82](https://github.com/modelcontextprotocol/registry/issues/82) has been open since 2025-05-27 with 24 comments and no resolution. It needs a maintainer decision to either schedule it or formally defer it.
- [#1715](https://github.com/modelcontextprotocol/registry/issues/1715) and [#1706](https://github.com/modelcontextprotocol/registry/issues/1706) are recent (October 2026) but substantive. They would benefit from a maintainer response on scope or design, particularly since they overlap with each other and with #82.
- Open PRs [#1757](https://github.com/modelcontextprotocol/registry/pull/1757) and [#1754](https://github.com/modelcontextprotocol/registry/pull/1754) are small docs changes that need review. [#1755](https://github.com/modelcontextprotocol/registry/issues/1755) likely needs triage and possibly closing as off-topic.

**Health assessment:** Delivery is strong and operations are responsive, with a fast release cycle on performance. Trust, integrity and verification features have no assigned owner or roadmap commitment.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest: 2026-10-28

Source: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers). The data only shows the top 20 of 184 PRs, and comment counts came through as `undefined`. Anything about "hot" PRs below is therefore a judgment from submission content, not engagement.

## 1. Today's Overview
The repository is very active: 184 PRs were updated in 24 hours (162 open, 22 merged or closed). No issues were updated and no releases were published. This is a curated list, so activity is almost entirely contributors submitting new entries. The visible sample suggests the open queue is growing faster than it is cleared, at roughly 7 open PRs for every 1 closed. Many submissions carry the 🤖🤖🤖 marker, so a good share appear to be agent-assisted.

## 2. Releases
No new releases.

## 3. Project Progress
There were 22 merged or closed PRs in the window. Only four of them are visible, and all four show state CLOSED. The data doesn't say whether any of the 22 were merged, so I can't report accepted entries.

- [#17893](https://github.com/punkpeye/awesome-mcp-servers/pull/17893): Dadeland MCP server (Databases). It was closed the day it was opened and carries the `non-github-url` label.
- [#13485](https://github.com/punkpeye/awesome-mcp-servers/pull/13485): Phosphor, a macOS terminal with an MCP server (Command Line). It was open about two months and then closed.
- [#16446](https://github.com/punkpeye/awesome-mcp-servers/pull/16446): removes the archived `PSPDFKit/nutrient-dws-mcp-server`. Its maintainer says it was replaced by a hosted, remote-only server. This is the kind of list-hygiene change the repo needs.
- [#16983](https://github.com/punkpeye/awesome-mcp-servers/pull/16983) (Nojoin, meeting transcription) and [#16187](https://github.com/punkpeye/awesome-mcp-servers/pull/16187) (JANCTION Render, Blender on cloud GPUs): both closed after roughly 9 to 17 days.

## 4. Community Hot Topics
No comment or reaction data is available, so I grouped the day's submissions by theme instead.

- **Pay-per-call and crypto agents (x402 on Base):** [#17809](https://github.com/punkpeye/awesome-mcp-servers/pull/17809) (akari-x402-mcp) and [#17890](https://github.com/punkpeye/awesome-mcp-servers/pull/17890) (imagio-relay, 57 tools). Both sell tools to agents, settled in USDC. This points to demand for machine-to-machine micropayments.
- **Remote and hosted MCP servers:** [#17897](https://github.com/punkpeye/awesome-mcp-servers/pull/17897) (LeadShield), [#17891](https://github.com/punkpeye/awesome-mcp-servers/pull/17891) (Nova Amazon, OAuth), and #16446's move to a remote-only server. Vendors are moving from local stdio servers to hosted Streamable HTTP with OAuth.
- **Observability and developer tooling:** [#17895](https://github.com/punkpeye/awesome-mcp-servers/pull/17895) (Fanout, OpenTelemetry), [#12269](https://github.com/punkpeye/awesome-mcp-servers/pull/12269) (plumb, LSP-backed code intelligence), and [#17887](https://github.com/punkpeye/awesome-mcp-servers/pull/17887) (YouTrack).
- **Vertical and regional integrations:** [#17894](https://github.com/punkpeye/awesome-mcp-servers/pull/17894) (five Yandex servers), [#17889](https://github.com/punkpeye/awesome-mcp-servers/pull/17889) (German and EU law), [#17898](https://github.com/punkpeye/awesome-mcp-servers/pull/17898) (Bambu Lab 3D printers), [#17874](https://github.com/punkpeye/awesome-mcp-servers/pull/17874) (hardware design), and [#17892](https://github.com/punkpeye/awesome-mcp-servers/pull/17892) (Timesheet).
- **Communication and social:** [#17888](https://github.com/punkpeye/awesome-mcp-servers/pull/17888) (Telegram) and [#17833](https://github.com/punkpeye/awesome-mcp-servers/pull/17833) (TryPost).

## 5. Bugs & Stability
No issues were reported, so there are no bugs, crashes, or regressions to rank. The one stability signal is [#12269](https://github.com/punkpeye/awesome-mcp-servers/pull/12269), which has the `merge-conflict` label.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. The only process-level signals are the automated labels: `has-glama` / `missing-glama`, `valid-name`, `has-emoji`, and `non-github-url`. They suggest the project is enforcing:

- a Glama listing for each entry
- a naming convention
- an emoji convention
- GitHub-hosted URLs only

Of the 20 PRs shown, 11 are labelled `missing-glama`, so I'd expect more contributors to be asked to register on Glama before merge.

## 7. User Feedback Summary
Contributors are mostly vendors and maintainers listing their own servers, which is a promotional use case. They emphasize safety and scoping:

- credentials are never exposed to the model ([#13485](https://github.com/punkpeye/awesome-mcp-servers/pull/13485))
- read-only SQL and owner-scoped dashboards ([#17895](https://github.com/punkpeye/awesome-mcp-servers/pull/17895))
- OAuth 2.1 ([#16983](https://github.com/punkpeye/awesome-mcp-servers/pull/16983))

I found no direct feedback on the list itself in this data.

## 8. Backlog Watch
- [#12269](https://github.com/punkpeye/awesome-mcp-servers/pull/12269) (plumb): open since 2026-08-16 with a merge conflict. It needs either a rebase from the author or a decision from a maintainer.
- With 162 open PRs, the overall queue is the main backlog risk. The visible closures were mostly older PRs (about 9 to 56 days old), so some are being cleared late.
- The 22 closures this period are 12% of the day's activity. The data doesn't show whether this is the usual rate, so it can't tell us whether the backlog is shrinking.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-28

## 1. Today's Overview
The registry had no Issues and no releases in the last 24h. All activity was in pull requests: 50 PRs were updated, 48 still open and 2 merged or closed. The data shows submissions as the main activity, with roughly 20 new catalog entries visible, mostly remote (streamable-http) MCP servers. Comment counts show as "undefined" and every PR has 0 👍, so the listed PRs carry no review discussion yet. Intake is strong, and the visible data suggests review throughput is the bottleneck. This digest covers the top 20 of 50 PRs. The other 30 are not visible.

## 2. Releases
No new releases.

## 3. Project Progress
Of the 50 updated PRs, 2 were merged or closed. Only one is visible in the top 20.
- [#6257](https://github.com/docker/mcp-registry/pull/6257) (Semata remote MCP server) was **closed, not merged**. The author withdrew it because the remote-server contribution guide requires a completed Docker Gateway OAuth sign-in and an authenticated tool-call test. Static validation passed, but that was not enough. The OAuth testing rule is being enforced and is catching submissions that skip it.

No visible PR was merged, so no new server entered the catalog in this window based on the data given.

## 4. Community Hot Topics
Comment and reaction data is unavailable (comments "undefined", 👍 0 everywhere), so I can't rank by engagement. These are the themes in the new submissions:
- **Remote servers dominate.** Nearly all new PRs add `type: remote` entries with streamable-http and dynamic tool discovery, for example [#6264](https://github.com/docker/mcp-registry/pull/6264) (localaipicks), [#6262](https://github.com/docker/mcp-registry/pull/6262) (LeadShield) and [#6256](https://github.com/docker/mcp-registry/pull/6256) (Linof Docs).
- **OAuth-protected remotes** are common: [#6263](https://github.com/docker/mcp-registry/pull/6263) (More Good Reviews, DCR), [#6258](https://github.com/docker/mcp-registry/pull/6258) (Timesheet, OAuth 2.1), [#6251](https://github.com/docker/mcp-registry/pull/6251) (Uptrack, PKCE and DCR), [#6260](https://github.com/docker/mcp-registry/pull/6260) (CiteWing), [#6253](https://github.com/docker/mcp-registry/pull/6253) (AccountsOS) and [#6255](https://github.com/docker/mcp-registry/pull/6255) (PRIMAMCP). Given #6257, these are likely to meet the OAuth test requirement during review.
- **Batch submissions by one author.** `benthepythondev00` opened at least five MCPize-hosted entries: [#6245](https://github.com/docker/mcp-registry/pull/6245), [#6246](https://github.com/docker/mcp-registry/pull/6246), [#6247](https://github.com/docker/mcp-registry/pull/6247), [#6248](https://github.com/docker/mcp-registry/pull/6248), [#6249](https://github.com/docker/mcp-registry/pull/6249) and [#6250](https://github.com/docker/mcp-registry/pull/6250). That is six in the visible data. Third-party hosted gateways are becoming a distribution channel.
- **Agent-infrastructure themes.** [#6261](https://github.com/docker/mcp-registry/pull/6261) (OpenMem) offers a unified `memory_*` interface over Hindsight, mem0 and Cognee. [#6259](https://github.com/docker/mcp-registry/pull/6259) bundles three servers in one PR (Card Mailer, Inkbind and Remite).

## 5. Bugs & Stability
No Issues were filed and no bug-fix PRs appear in the visible data. The only quality signal is the validation and OAuth testing gate seen in #6257. Several submitters note that `go run ./cmd/validate` passes (for example [#6253](https://github.com/docker/mcp-registry/pull/6253)), so tooling looks stable.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests, since there are no Issues. The PR patterns suggest these directions:
- Remote and hosted servers with OAuth and DCR are the default submission model, so the registry can expect more of them and tighter remote-onboarding documentation or tooling.
- Demand is rising for entries that need no credentials (read-only, no sign-in), such as [#6256](https://github.com/docker/mcp-registry/pull/6256) and [#6264](https://github.com/docker/mcp-registry/pull/6264). Faster review for these is plausible.
- Memory and agent-tooling servers like #6261 point to growth in cross-agent interoperability.

## 7. User Feedback Summary
There are no direct user comments. Contributors' PR descriptions show these points:
- Authors name the reviewer test-credential step and offer test accounts ([#6253](https://github.com/docker/mcp-registry/pull/6253)). The OAuth test requirement is a friction point, as #6257 shows.
- Use cases span legal research (#6255), uptime monitoring (#6251), time tracking (#6258), reviews and reputation (#6263), jobs and ad intelligence (#6248, #6249), and creator analytics (#6245).
- Some listings look promotional or paid, for example the $79 service in [#5267](https://github.com/docker/mcp-registry/pull/5267). Maintainers may want to apply curation criteria.

## 8. Backlog Watch
Age is only partly visible. Two older PRs were touched today and still need maintainer attention:
- [#5267](https://github.com/docker/mcp-registry/pull/5267) (VibeFix remote server) was opened 2026-09-27 and is about a month old. The description was updated today to a changed product, so it should be re-reviewed against current scope and for the paid-service angle.
- [#5969](https://github.com/docker/mcp-registry/pull/5969) (shuita-ai-price) was opened 2026-10-22 and is about 6 days old, with no visible review.

With 48 open PRs updated in a day and zero visible comments or reactions, the main health risk is review capacity. I recommend labeling or triaging the batch submissions and enforcing the OAuth pre-check up front.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-10-28

## 1. Today's Overview
Activity is moderate and dominated by one maintainer. In the last 24h there were 6 issues (5 open, 1 closed) and 16 PRs (14 open, 2 closed), and there were no releases. About half the PRs come from `mhegazy`, mostly hardening the `security-guidance` plugin. Another 6 PRs are automated SHA bumps from github-actions. No PRs were merged. The two closed PRs (#6905, #6906) are closures with no merge reported. Review throughput looks like the weak point: several open PRs have been waiting 1–2 weeks.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged in the window. Two were closed:
- [#6906](https://github.com/anthropics/claude-plugins-official/pull/6906) "Give ten plugins explicit versions" was closed. It would have stopped unrelated commits from counting as new versions for git-subdir redirect users.
- [#6905](https://github.com/anthropics/claude-plugins-official/pull/6905) "code-review: bring in the newer command from anthropics/claude-code" was closed. It would have added inline review comments, a `--comment` flag and dedicated bug-finding agents. Whether it was superseded or abandoned isn't stated. The `code-review` plugin therefore stays on the older command, which is the one criticized in issue #6931.

Open work in progress, mostly `security-guidance`:
- [#6930](https://github.com/anthropics/claude-plugins-official/pull/6930) treats a blank `ANTHROPIC_BASE_URL` as unset. It fixes #6928.
- [#6922](https://github.com/anthropics/claude-plugins-official/pull/6922) takes the turn baseline without `git stash create` (refs #6854).
- [#6921](https://github.com/anthropics/claude-plugins-official/pull/6921) stops the commit reviewer from renewing a stored login (fixes #6860).
- [#6919](https://github.com/anthropics/claude-plugins-official/pull/6919) keeps new files in the Stop review when `git add -N` fails.
- [#6918](https://github.com/anthropics/claude-plugins-official/pull/6918) stops starting the packaged Python alias on every hook on Windows.
- [#6920](https://github.com/anthropics/claude-plugins-official/pull/6920) adds a Windows symlink-Python metric (measurement only).
- [#6835](https://github.com/anthropics/claude-plugins-official/pull/6835) keeps a renamed file paired with its old name in the Stop review.
- [#6627](https://github.com/anthropics/claude-plugins-official/pull/6627) stops saving review runs as session transcripts.

Automated SHA bumps (validated with `claude plugin validate`) are open for zscaler ([#6927](https://github.com/anthropics/claude-plugins-official/pull/6927)), unreal-engine-skills-for-claude-code ([#6926](https://github.com/anthropics/claude-plugins-official/pull/6926)), render ([#6925](https://github.com/anthropics/claude-plugins-official/pull/6925)), auth0 ([#6924](https://github.com/anthropics/claude-plugins-official/pull/6924)), alloydb ([#6923](https://github.com/anthropics/claude-plugins-official/pull/6923)) and semgrep ([#6710](https://github.com/anthropics/claude-plugins-official/pull/6710)).

## 4. Community Hot Topics
Engagement is very low: no item has reactions, and the most-commented issue has 1 comment.
- [#6917](https://github.com/anthropics/claude-plugins-official/issues/6917) asks to enable Private Vulnerability Reporting. It has 1 comment and is closed. External researchers want a confidential disclosure channel for this repo, which matters because plugins run with user privileges.
- [#6932](https://github.com/anthropics/claude-plugins-official/issues/6932) is an automated "Capsalock" report of a CWE-22 zip-slip/path-traversal finding (claimed CVSS 9.1). It has 0 comments. The vendor-assigned severity is unverified and the issue should be triaged with caution. Public posting of a claimed critical issue also reinforces the need for #6917.
- [#6931](https://github.com/anthropics/claude-plugins-official/issues/6931) is a quality critique of the `code-review` plugin's model choices (see below).

## 5. Bugs & Stability
Ranked by severity:
1. **Possible path traversal (claimed critical)**: [#6932](https://github.com/anthropics/claude-plugins-official/issues/6932). It comes from an automated scanner, is unverified, and has no fix PR visible.
2. **Discord permission-relay bug**: [#6929](https://github.com/anthropics/claude-plugins-official/issues/6929). If a permission-button click arrives before any text DM, the DM's `recipientId` is cleared. `reply` and `fetch_messages` then fail with "not allowlisted" for the rest of the session. This is a functional break with no fix PR.
3. **Security-guidance fails on an empty `ANTHROPIC_BASE_URL`**: [#6928](https://github.com/anthropics/claude-plugins-official/issues/6928). Every commit, push and Stop review fails with `unknown url type: '/v1/messages'`, and users only see "the model's reply could not be read". A fix is open in [#6930](https://github.com/anthropics/claude-plugins-official/pull/6930), opened the same day.
4. **Code-review unreliability**: [#6931](https://github.com/anthropics/claude-plugins-official/issues/6931). Haiku-based eligibility and scoring agents gave contradictory results, for example answering "no" to all four disqualifying criteria and still concluding "NOT ELIGIBLE". No fix PR.
5. **Security-guidance edge cases**: the open PRs cover new files being silently dropped (#6919), Windows Python alias update checks (#6918), a login-renewal side effect (#6921) and the `git stash create` cost (#6922).

## 6. Feature Requests & Roadmap Signals
- [#6931](https://github.com/anthropics/claude-plugins-official/issues/6931) asks for a stronger model for the eligibility and scoring steps and for pinning the head commit in agent prompts. Closing #6905 leaves the `code-review` command unchanged for now. A future refresh of that command is the likely vehicle for this change.
- [#6917](https://github.com/anthropics/claude-plugins-official/issues/6917) asks to enable Private Vulnerability Reporting, and it is already closed.
- Explicit plugin versioning (#6906) was attempted and closed. The underlying problem of commits counting as new versions may come back in a different form.
- The `security-guidance` metrics (#6920) suggest continued investment in Windows telemetry.

## 7. User Feedback Summary
- Users of `security-guidance` hit opaque failures. Errors are surfaced as generic messages ("the model's reply could not be read"), and the real cause is only in `~/.claude/security/log.txt`.
- Windows and non-standard environments (Python Install Manager aliases, symlinks) are a recurring source of friction.
- Plugin authors using the directory portal are confused about status. [#6916](https://github.com/anthropics/claude-plugins-official/issues/6916) says "In review" appears while the developer still needs to click Publish. The user read it as the review already underway and didn't publish. It's a UX wording and state-clarity issue.
- Reviewers using `code-review` doubt the Haiku-tier agents' reliability.

## 8. Backlog Watch
- [#6627](https://github.com/anthropics/claude-plugins-official/pull/6627): open since 2026-10-15 (about 13 days), a privacy-relevant change (no review transcripts saved under `~/.claude/projects`).
- [#6835](https://github.com/anthropics/claude-plugins-official/pull/6835): open since 2026-10-20. It affects whether renamed secret-named files like `.env` and `id_rsa` stay out of reviews.
- [#6710](https://github.com/anthropics/claude-plugins-official/pull/6710): the semgrep bump has been open since 2026-10-16 while newer bumps are stacking up, which suggests automated bumps aren't being merged promptly.
- [#6916](https://github.com/anthropics/claude-plugins-official/issues/6916): a directory-portal publishing confusion that needs an Anthropic response.
- [#6932](https://github.com/anthropics/claude-plugins-official/issues/6932) and [#6929](https://github.com/anthropics/claude-plugins-official/issues/6929) have no maintainer response yet. The first needs security triage.

**Health assessment:** Development is active, but all of it comes from a single maintainer's `security-guidance` stream plus bots. Nothing was merged, so review and merge capacity is the bottleneck. External issues are getting little response so far.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-10-28

## 1. Today's Overview
The repository saw only resource-submission traffic in the last 24 hours. 18 issues were updated (16 open, 2 closed), and there were no PRs and no releases. Every item is a "[Resource]" submission for the curated list. 14 of the 16 open ones carry the `validation-passed` label, so the automated submission checks are working. Activity is steady but one-directional. Many submissions came in, and none of them merged. No maintainer discussion appears in the data.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were updated, merged or closed today, so no features or fixes advanced. The only closures are two issues auto-closed by the bot while still labeled `validation-pending`:
- [#3302 Workflow kit](https://github.com/hesreallyhim/awesome-claude-code/issues/3302) (Agent Orchestration > SDLC)
- [#3297 akakika-skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3297) (Skills)

The summaries do not give the reason for either closure. Both look like validation failures or an incomplete submission, but that is an inference.

## 4. Community Hot Topics
Engagement is minimal. Every issue has 0 👍, and 16 have exactly 1 comment, most likely the validation bot's. No issue stands out by comments or reactions, so the topic mix is the better signal.

Category distribution of today's submissions:
- **Skills (4):** [#3303 Foundry](https://github.com/hesreallyhim/awesome-claude-code/issues/3303) (ad-agency plugin), [#3300 moodle-dev](https://github.com/hesreallyhim/awesome-claude-code/issues/3300) (13 skills for Moodle LMS), [#3292 Security Cards](https://github.com/hesreallyhim/awesome-claude-code/issues/3292), [#3290 Croftweaver](https://github.com/hesreallyhim/awesome-claude-code/issues/3290) (38 skills for Astro/Cloudflare sites).
- **Security (2):** [#3299 Inbin Gate](https://github.com/hesreallyhim/awesome-claude-code/issues/3299) (PreToolUse gate that classifies by consequence and provenance), [#3295 Weir](https://github.com/hesreallyhim/awesome-claude-code/issues/3295) (decoy credentials for agent testing).
- **Observability & Monitoring (2):** [#3305 Actuarii](https://github.com/hesreallyhim/awesome-claude-code/issues/3305) (receipts before writes to governed paths), [#3296 mcpock](https://github.com/hesreallyhim/awesome-claude-code/issues/3296) (Mac menu bar checker for MCP servers).
- **Agent Orchestration > SDLC (2 open):** [#3294 WingFoil](https://github.com/hesreallyhim/awesome-claude-code/issues/3294), [#3301 mcp-probe-kit](https://github.com/hesreallyhim/awesome-claude-code/issues/3301).
- **Mods (2):** [#3307 Notary](https://github.com/hesreallyhim/awesome-claude-code/issues/3307), [#3293 nibbl](https://github.com/hesreallyhim/awesome-claude-code/issues/3293).
- **Other:** [#3306 Systra Tools](https://github.com/hesreallyhim/awesome-claude-code/issues/3306) (Design & UI/UX), [#3304 Demoverse](https://github.com/hesreallyhim/awesome-claude-code/issues/3304) (Testing), [#3291 claude-switch](https://github.com/hesreallyhim/awesome-claude-code/issues/3291) (Multi-Purpose), [#3289 Awesome AI Coding Tools](https://github.com/hesreallyhim/awesome-claude-code/issues/3289) (Lists & Collections).

**Underlying needs:** Safety and governance are the main theme. Inbin Gate, Weir and Actuarii all constrain or audit agent actions, and mcpock does the same for MCP servers. Developers also want to see what agents did (Notary's per-turn edit timeline) and to manage multiple accounts (claude-switch).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, and no fix PRs exist. The only process anomalies are the two auto-closed submissions above.

## 6. Feature Requests & Roadmap Signals
There are no feature requests for the list itself. Indirect signals about the ecosystem:
- Growth in the Security and Observability categories suggests demand for guardrails around agent actions.
- Spec-driven SDLC tooling appears in two submissions (WingFoil, mcp-probe-kit) in the same category.
- Cross-agent portability is a theme. The closed akakika-skills submission targeted Claude Code, Codex and Cursor, and mcp-probe-kit targets "Claude Code and other agents".

No roadmap or version information is available.

## 7. User Feedback Summary
Contributors are building domain-specific skill packs (Moodle, ad agencies, Astro sites) and safety tooling. No explicit complaints about the list or its process appear in the data. The visible friction is the auto-closure of two submissions and the unlabeled state of two others:
- [#3301](https://github.com/hesreallyhim/awesome-claude-code/issues/3301) and [#3289](https://github.com/hesreallyhim/awesome-claude-code/issues/3289) have 0 comments and no validation label. They may not have been processed yet.
- The same author, aka-kika, had [#3297](https://github.com/hesreallyhim/awesome-claude-code/issues/3297) closed and [#3296](https://github.com/hesreallyhim/awesome-claude-code/issues/3296) pass validation on the same day.

## 8. Backlog Watch
The data covers only the last 24 hours, so long-standing backlog items can't be identified. What can be said:
- At least 16 open submissions are waiting for maintainer review, and none has been merged. Validation-passed items can accumulate faster than they are approved.
- [#3301](https://github.com/hesreallyhim/awesome-claude-code/issues/3301) and [#3289](https://github.com/hesreallyhim/awesome-claude-code/issues/3289) should be checked to see whether the validation workflow ran.
- The maintainer may want to confirm why [#3302](https://github.com/hesreallyhim/awesome-claude-code/issues/3302) and [#3297](https://github.com/hesreallyhim/awesome-claude-code/issues/3297) were auto-closed. This would show whether the bot's message is clear enough for submitters to fix and resubmit.

**Health assessment:** Contributor interest is strong (about 18 submissions in two days), and the automated triage is functioning. The risk is a review bottleneck, since submissions are arriving with no sign of maintainer action in this window.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-28

Source: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity today was moderate and almost entirely submission-driven. The project had 1 issue and 10 PRs updated in the last 24h, and no releases. The repo works as a curated list, so its flow is community PRs adding skills and a few outreach items. Three PRs were closed without merging, and seven remain open. The open queue is growing: four new submission or listing PRs arrived today, and none show comments or reactions.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs are confirmed as merged. The data marks three PRs as "CLOSED" (none as "MERGED"). All three were updated on 2026-10-27 and had been open since 2026-10-11 and 2026-10-12:
- [#1196](https://github.com/VoltAgent/awesome-agent-skills/pull/1196) `tushaarmehtaa/tushar-skills`: 34 workflow skills for Development and Testing.
- [#1193](https://github.com/VoltAgent/awesome-agent-skills/pull/1193) `supercorp-ai/supercov`: a test-coverage skill for Development and Testing.
- [#1190](https://github.com/VoltAgent/awesome-agent-skills/pull/1190) `AugustusW/audio-tldr`: a YouTube, podcast and audio summarizer for Productivity and Collaboration.

The data doesn't say whether these were accepted or rejected. They sat about 2 weeks before closing, so this looks like a batch triage pass. Check the repo's commit history to confirm whether the entries landed.

## 4. Community Hot Topics
No item has any comments or 👍 reactions, so nothing stands out by engagement. The most notable threads are:
- **LGD-Eval outreach.** [Issue #1284](https://github.com/VoltAgent/awesome-agent-skills/issues/1284) proposes cross-linking with an "independent third-party evaluation" project. [PR #1283](https://github.com/VoltAgent/awesome-agent-skills/pull/1283) from the same author adds `LGD-Eval/lgd-gate` to Security Scanners. It claims 18 evaluation dimensions. The two items together suggest a coordinated promotional push, and the pairing is worth maintainer scrutiny.
- **Underlying need.** Contributors want visibility and a trust signal for their skills. Skill quality and security evaluation is becoming a recognized category.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were made. Indirect signals:
- A **Security Scanners** category exists, and a new entry is proposed in [#1283](https://github.com/VoltAgent/awesome-agent-skills/pull/1283). Third-party skill vetting is a growing theme.
- The submissions cluster in Development and Testing, Productivity and Collaboration, and Specialized Domains. Examples are deploy tooling ([#1282](https://github.com/VoltAgent/awesome-agent-skills/pull/1282)), a DOCX editing CLI ([#1213](https://github.com/VoltAgent/awesome-agent-skills/pull/1213)), resume-claim verification ([#1281](https://github.com/VoltAgent/awesome-agent-skills/pull/1281)), and customer-journey auditing ([#1287](https://github.com/VoltAgent/awesome-agent-skills/pull/1287)). This points to domain breadth beyond coding.
- Multi-agent and MCP skills are also arriving: [#1286](https://github.com/VoltAgent/awesome-agent-skills/pull/1286) (`desplega-ai/agent-swarm`, no description) and [#1285](https://github.com/VoltAgent/awesome-agent-skills/pull/1285) (`lava-mcp`).

## 7. User Feedback Summary
There is no direct user feedback today, since all items are submissions. The submissions suggest that:
- Authors want a listing in the correct category, and several give the exact section and placement.
- Skills increasingly span multiple agent runtimes (Claude Code, Codex, Cursor), as in [#1196](https://github.com/VoltAgent/awesome-agent-skills/pull/1196).
- Some submitters disclose affiliation ([#1282](https://github.com/VoltAgent/awesome-agent-skills/pull/1282) says "I work on Light Cloud"). Others are self-promotional, such as the LGD-Eval items.

## 8. Backlog Watch
- [#1213](https://github.com/VoltAgent/awesome-agent-skills/pull/1213) `kklimuk/docx-cli`: open since 2026-10-15 (13 days) with no comments. This is the oldest open PR in today's data.
- The last three PRs closed (#1190, #1193, #1196) had a 2-week review latency, which suggests a throughput constraint.
- Open PRs with no maintainer response: [#1281](https://github.com/VoltAgent/awesome-agent-skills/pull/1281), [#1282](https://github.com/VoltAgent/awesome-agent-skills/pull/1282), [#1283](https://github.com/VoltAgent/awesome-agent-skills/pull/1283), [#1285](https://github.com/VoltAgent/awesome-agent-skills/pull/1285), [#1286](https://github.com/VoltAgent/awesome-agent-skills/pull/1286) and [#1287](https://github.com/VoltAgent/awesome-agent-skills/pull/1287). [#1286](https://github.com/VoltAgent/awesome-agent-skills/pull/1286) has an empty description, so it needs a quality check.
- [Issue #1284](https://github.com/VoltAgent/awesome-agent-skills/issues/1284) needs a maintainer decision on whether to accept cross-promotion.

**Health assessment:** Contributor interest is steady, with about 4 new submissions a day. Review bandwidth is the main constraint. The repo would benefit from submission guidelines, automated checks for PR descriptions, and a policy on promotional or vendor-affiliated listings.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
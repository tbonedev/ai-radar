# MCP Ecosystem Digest 2026-10-29

> Issues: 110 | PRs: 89 | Projects covered: 7 | Generated: 2026-10-29 13:54 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Digest — 2026-10-29

## 1. Today's Overview
Activity was very high: 110 issues and 89 PRs updated in 24 hours, with 87 issues and 82 PRs closed or merged. Almost all of it is a coordinated v2.3.0 sweep. The maintainer `cliffhall` filed trackers (#5269 for filesystem, #5271 for fetch) and cleared a long backlog of old enhancement requests through a fan-out of small PRs. Release v2.2.0 shipped, and a "version packages" PR (#5401) is open for the next one. Project health looks good. The main open risk is a Windows security follow-up for the filesystem server.

## 2. Releases
**v2.2.0** is a security-oriented update. It covers Node.js runtime and CA certificate updates for October 2026, after eMudhra disclosed that private keys for eight of its intermediate CAs could be recovered from the public certificates. Node.js shipped security releases on October 21. The release text was truncated in the data, so I can't confirm breaking changes or migration steps. Operators should rebuild images or upgrade the runtime to pick up the updated trust store.

Release tooling also changed today:
- [#5410](https://github.com/modelcontextprotocol/servers/pull/5410) fixes `release:notes` failing with `ENOBUFS` on large `gh` replies.
- [#5409](https://github.com/modelcontextprotocol/servers/pull/5409) documents the release ledger.
- [#5408](https://github.com/modelcontextprotocol/servers/pull/5408) links the Python release PR to the release issue.

## 3. Project Progress
Most of the work below is closed or merged. The two rollup PRs are integration tests that were closed unmerged by design.

**Filesystem** (tracker #5269):
- Added tools and modes:
  - `append_file` ([#5376](https://github.com/modelcontextprotocol/servers/pull/5376))
  - `copy_file` ([#5385](https://github.com/modelcontextprotocol/servers/pull/5385))
  - `--read-only` mode that registers only read tools ([#5359](https://github.com/modelcontextprotocol/servers/pull/5359))
  - `--confine-roots`, so client Roots can only narrow the operator's directories ([#5395](https://github.com/modelcontextprotocol/servers/pull/5395))
  - an optional `depth` on `directory_tree` ([#5388](https://github.com/modelcontextprotocol/servers/pull/5388))
  - `file://{+path}` resource template ([#5368](https://github.com/modelcontextprotocol/servers/pull/5368))
- Improved diagnostics and descriptions:
  - logs of the effective allowed directories and their source ([#5390](https://github.com/modelcontextprotocol/servers/pull/5390))
  - closest-line hints when an `edit_file` edit has no match ([#5379](https://github.com/modelcontextprotocol/servers/pull/5379))
  - `search_files` described as name-only matching ([#5367](https://github.com/modelcontextprotocol/servers/pull/5367))
- Bug fixes:
  - `head: 0` and `tail: 0` in `read_text_file` ([#5377](https://github.com/modelcontextprotocol/servers/pull/5377))
  - `~\` expansion on Windows ([#5384](https://github.com/modelcontextprotocol/servers/pull/5384))
  - allowed-directory names trimmed after realpath ([#5383](https://github.com/modelcontextprotocol/servers/pull/5383))
  - dangling symlinks misreported as a missing parent ([#5380](https://github.com/modelcontextprotocol/servers/pull/5380))
  - unreadable subdirectories hidden by `search_files` ([#5355](https://github.com/modelcontextprotocol/servers/pull/5355))
  - unknown sizes shown as 0 in `list_directory_with_sizes` ([#5378](https://github.com/modelcontextprotocol/servers/pull/5378))

**Fetch** (tracker #5271):
- `--allowed-hosts` operator allowlist ([#5392](https://github.com/modelcontextprotocol/servers/pull/5392)).
- Configurable timeout, via a per-call `timeout_ms` argument and a server-wide `--timeout-ms` flag ([#5372](https://github.com/modelcontextprotocol/servers/pull/5372)).
- Native markdown through `Accept` negotiation ([#5387](https://github.com/modelcontextprotocol/servers/pull/5387)).
- Page title at the top of the simplified result ([#5398](https://github.com/modelcontextprotocol/servers/pull/5398)).
- Readability.js now runs in a bounded subprocess, off the event loop and stdout ([#5391](https://github.com/modelcontextprotocol/servers/pull/5391)). It closes four issues, including #5306 and #4830.
- An invalid prompt URL now returns -32602 ([#5358](https://github.com/modelcontextprotocol/servers/pull/5358)).
- Integration rollup [#5406](https://github.com/modelcontextprotocol/servers/pull/5406).

**Housekeeping:**
- The `@claude` mention workflow was removed ([#5407](https://github.com/modelcontextprotocol/servers/pull/5407)).
- The security-advisory process docs were updated ([#5411](https://github.com/modelcontextprotocol/servers/pull/5411)).
- Stale PR [#4730](https://github.com/modelcontextprotocol/servers/pull/4730) (a cryptography bump) was closed.

## 4. Community Hot Topics
- [#4117](https://github.com/modelcontextprotocol/servers/issues/4117) (23 comments, closed): memory server persistence safety, with atomic writes, quotas, redaction and destructive-operation guardrails. Users want the reference memory server to be safe by default.
- [#3537](https://github.com/modelcontextprotocol/servers/issues/3537) (18 comments, open): audit finding that string parameters are unconstrained across the official servers. This is the same input-validation theme that runs through the filesystem issues.
- [#2317](https://github.com/modelcontextprotocol/servers/issues/2317) (11 comments, closed): fetch host allowlisting. It was resolved by PR #5392, an SSRF-hardening request that took more than 15 months to land.
- [#5180](https://github.com/modelcontextprotocol/servers/issues/5180) (10 comments, closed): `~\` handling on Windows, fixed by #5384.
- [#3752](https://github.com/modelcontextprotocol/servers/issues/3752) and [#3669](https://github.com/modelcontextprotocol/servers/issues/3669): path traversal constraints and missing schema property descriptions. Both are about how well tools hold up when an LLM supplies the arguments.

The underlying needs are safe defaults, operator-controlled confinement, and tool descriptions that models can use correctly.

## 5. Bugs & Stability
Ranked by severity:
1. **[#5260](https://github.com/modelcontextprotocol/servers/issues/5260) (open):** the fix for GHSA-53mr-w429-c597 (filesystem 2.0.1) closes the parent-directory swap only on Linux and macOS. Windows remains exposed. No fix PR is visible in today's data.
2. **[#5375](https://github.com/modelcontextprotocol/servers/issues/5375) (open):** NTFS alternate-data-stream paths (`file.txt:stream`) pass path validation on Windows. It is still a design question and has no fix.
3. **[#4741](https://github.com/modelcontextprotocol/servers/issues/4741) (open):** the fetch, git and time Dockerfiles create an `app` user but never switch to it, so all seven images run as root.
4. **[#5216](https://github.com/modelcontextprotocol/servers/issues/5216) (open):** `search_files` doesn't expand non-wildcard `excludePatterns` the way `directory_tree` does.
5. **[#5214](https://github.com/modelcontextprotocol/servers/issues/5214) (open):** `git_log` accepts a non-positive `max_count`, and a negative value returns the whole history.
6. Fixed today:
   - blocking Readability.js with no timeout (#5306, by #5391)
   - fetch prompt error code (#4914, by #5358)
   - `head: 0` / `tail: 0` (#5184, by #5377)
   - duplicate observations in the memory server (#5201)
   - the sequentialthinking multi-line thought box (#5205)

## 6. Feature Requests & Roadmap Signals
The trackers #5269 (filesystem) and #5271 (fetch) point to a v2.3.0 release. Features shipped through those trackers include `append_file`, `copy_file`, `--read-only`, `--allowed-hosts`, a configurable fetch timeout, directory depth and file resources. The "version packages" PR [#5401](https://github.com/modelcontextprotocol/servers/pull/5401) suggests a release is close.

Still open:
- [#576](https://github.com/modelcontextprotocol/servers/issues/576): Streamable HTTP for all reference servers. It has 10 👍, the most of any open item.
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047): registry registration for the reference servers.
- [#5071](https://github.com/modelcontextprotocol/servers/issues/5071): clearer tool descriptions for filesystem and memory.
- [#3669](https://github.com/modelcontextprotocol/servers/issues/3669): schema property descriptions.

## 7. User Feedback Summary
- Models misread tool semantics. `search_files` was taken for grep, and `list_directory` was confused with `list_directory_with_sizes`.
- Token cost matters. [#4507](https://github.com/modelcontextprotocol/servers/issues/4507) reports that the sequentialthinking tool definition costs about 921 tokens per session.
- Operators want confinement controls: read-only mode, host allowlists and root confinement. The new flags answer this directly.
- Windows support remains a recurring weak spot (#5180, #5260, #5375).
- Documentation errors keep surfacing, such as invalid Zed snippets ([#5213](https://github.com/modelcontextprotocol/servers/issues/5213)) and the README tool name in #5204.

## 8. Backlog Watch
- [#576](https://github.com/modelcontextprotocol/servers/issues/576) (Streamable HTTP, open since Jan 2025) needs a maintainer decision.
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047) (registry registration, since Nov 2025) is still open.
- [#3064](https://github.com/modelcontextprotocol/servers/issues/3064) (standardize install instructions, since Nov 2025) is still open.
- [#3537](https://github.com/modelcontextprotocol/servers/issues/3537) and [#3669](https://github.com/modelcontextprotocol/servers/issues/3669) (security audit and schema quality, since March 2026) are still open.
- [#4741](https://github.com/modelcontextprotocol/servers/issues/4741) (containers running as root, since September 2026) is a security issue.
- [#5260](https://github.com/modelcontextprotocol/servers/issues/5260) (the Windows advisory follow-up) is the highest-priority open item.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-10-29

## 1. Ecosystem Overview
The MCP ecosystem has two layers. The reference implementation (MCP Servers) and the official registry make up one. The other is a set of discovery and distribution channels: Awesome MCP Servers, Docker MCP Registry, Claude Plugins, Awesome Claude Code and Awesome Agent Skills. Most of the volume sits in the discovery layer, which is submission-driven and mostly vendor-authored. Engineering depth is concentrated in the reference servers. Security hardening, trust and curation throughput are the shared pressure points. Remote and hosted servers, payments and skill packaging are the fastest-growing submission categories.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my assessment) |
|---|---|---|---|---|
| MCP Servers | 110 (87 closed) | 89 (82 closed/merged) | v2.2.0 | Strong, with an open Windows security follow-up (#5260) |
| MCP Registry | 2 | 6 (4 are Dependabot) | None | Stable but quiet |
| Awesome MCP Servers | 0 | 169 (157 open) | None | Intake is healthy, review backlog is heavy |
| Docker MCP Registry | 0 | 50 (46 open) | None | Steady intake, no visible review comments |
| Claude Plugins (Official) | 1 | 10 (6 are bot bumps) | None | Stable, automation-driven |
| Awesome Claude Code | 34 (25 open) | 0 | None | High intake, maintainer decisions lag |
| Awesome Agent Skills | 1 | 50 (46 closed/merged) | None | Fast triage, merge rate unclear |

The health labels are my judgment from the digests. The projects publish no health scores. Comment counts are largely undefined in the source data, so engagement can't be compared reliably.

## 3. MCP Servers's Position

**Advantages**
- It has the highest engineering throughput. It closed 87 of 110 issues and 82 of 89 PRs in 24 hours, through a tracker-led v2.3.0 sweep (#5269, #5271).
- It is the only project here that ships runtime code with security-relevant features: `--read-only`, `--confine-roots`, `--allowed-hosts` and a bounded Readability subprocess.
- It is the only project with a release in the window, and it has a "version packages" PR (#5401) pending.

**Technical approach differences**
- The Servers repo is code. Awesome MCP Servers and Awesome Claude Code are curated lists, and Docker and the Registry are catalogs with metadata. Claude Plugins pins third-party plugins by SHA.
- Servers hardens its code against LLM-supplied arguments. The others validate the form of a submission, through labels such as `missing-glama` and `validation-passed`.

**Community size**
- By raw updates, Servers has the largest contributor-driven activity (199 items). Awesome MCP Servers is close in item count (169), but nearly all of it is submissions.
- Servers' backlog is old design work rather than intake: Streamable HTTP (#576, open since Jan 2025) and registry registration (#3047).

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Security and supply-chain trust | MCP Servers, Awesome Agent Skills, Claude Plugins, MCP Registry | Windows path-handling gaps (#5260, #5375) and containers running as root (#4741). Skill and package vetting tools (#1283, #1295, #1303). SHA-pinned plugin bumps validated with `claude plugin validate`. Pending `go-jose` bumps. |
| Remote and hosted servers | Docker MCP Registry, Awesome MCP Servers, MCP Servers | Streamable HTTP and OAuth 2.1 submissions. #576 is the most-requested open item in Servers. |
| Lifecycle management | MCP Registry, Docker MCP Registry | No self-service deletion (#1759). Duplicate submissions (the BestPrice trio). No feedback on downstream propagation (#1758). |
| Tool and schema quality for LLM callers | MCP Servers, Claude Plugins | Tool descriptions (#5071, #3669), token cost (#4507), and the MCP SDK v1 to v2 migration in plugin examples (#6933). |
| Curation throughput | Awesome MCP Servers, Awesome Claude Code, Docker MCP Registry | 157, 25 and 46 open items respectively. Duplicates and re-filings are common. |
| Cross-agent portability | Awesome Claude Code, Awesome Agent Skills | Tools targeting Codex, Cursor, Grok, VS Code and Copilot alongside Claude Code. |

## 5. Differentiation Analysis

- **MCP Servers:** targets operators and server developers. It is code, with an emphasis on safe defaults.
- **MCP Registry:** targets publishers. It is metadata and API infrastructure, with scaling concerns at the database layer (#1756).
- **Docker MCP Registry:** targets vendors with hosted products who want distribution. It is skewed toward remote servers and OAuth.
- **Awesome MCP Servers:** targets discovery by developers. It enforces a quality bar through Glama badges and naming checks.
- **Claude Plugins (Official):** targets Claude Code users. It is bot-maintained, with a broadening set of observability, security and GPU plugins.
- **Awesome Claude Code:** targets Claude Code users. It focuses on workflows, memory and monitoring. Intake runs through issues and an automated validator.
- **Awesome Agent Skills:** targets cross-agent skill users. It is PR-based, with quick triage and tight gating on security sections.

## 6. Community Momentum & Maturity

- **Tier 1, rapid iteration:** MCP Servers, with an active release cycle and tracker-driven work.
- **Tier 2, high intake:** Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code and Awesome Agent Skills. Volume is high, but the throughput evidence is mixed. Agent Skills triages quickly, while the other three show queues or lag.
- **Tier 3, stabilizing or quiet:** MCP Registry and Claude Plugins. Their activity is mostly maintenance and automation, with little human-authored change. The Registry's single substantive PR (#1756) was closed with an unclear outcome.

## 7. Trend Signals

1. **Security is moving from advisory to configuration.** Read-only mode, host allowlists and root confinement are shipping as operator controls. For agent developers, assume tool servers will be sandboxed by flags, and design for narrowed permissions.
2. **Remote-first distribution.** Hosted Streamable HTTP servers with OAuth 2.1 dominate catalog submissions. Plan for authentication and dynamic client registration, not only local stdio.
3. **Curation is the bottleneck.** Large queues and re-filed PRs suggest list-based discovery doesn't scale. Automated validation helps screening but not final decisions. Expect more automated gating, such as Glama scores and validator labels.
4. **Trust layers for skills and packages.** Several security-tool submissions appeared at once. Skill and MCP vetting is an emerging product category.
5. **SDK v2 migration.** Official guidance is moving plugin authors to `@modelcontextprotocol/server`. New servers should target v2.
6. **Agent payments (x402) and cross-agent tooling** are growing but small. They are submission themes, not shipped features.

**Caveat:** These are one-day snapshots. Several outcomes (merged versus closed) and the comment counts are missing from the data, so the conclusions about throughput and engagement are directional.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Project Digest — 2026-10-29

## 1. Today's Overview
Activity is light. There were 2 issues and 6 PRs updated in the last 24 hours, and no new releases. Four of the six PRs are Dependabot version bumps. The only non-bot PR is #1756, a database performance change that was closed. Both issues come from external publishers and concern registry listing and removal. Overall health is stable, with routine maintenance and little feature work. Neither issue has any comments yet.

## 2. Releases
No new releases.

## 3. Project Progress
Only one PR was merged or closed today:

- **[PR #1756](https://github.com/modelcontextprotocol/registry/pull/1756) — "Prepare listing JSON and stage isolated database capacity"** (author: rdimitrov, closed). It targets a performance problem: cyclic listing bursts hold database connections while application decoding competes with ingress and PostgreSQL for CPU. The summary describes these changes:
  - Close listing rows before typed decoding.
  - Prepare versioned listing JSON at write time.
  - Add connection checkout timing.
  - Add opt-in loopback profiling.
  - Add configurable per-replica capacity.

  The data doesn't say whether it was merged or closed unmerged. Check whether a replacement PR follows, since the underlying listing-load concern probably remains.

## 4. Community Hot Topics
Engagement is minimal: no issue has comments or 👍 reactions, and the PR comment counts are not available in the data. The two items below are the most notable.

- **[Issue #1759](https://github.com/modelcontextprotocol/registry/issues/1759): Delete request for `io.github.CYAN-ECLIPSE-TECHNOLOGIES-LLC/eclipse-benchkit-mcp`.** The publisher withdrew v0.1.1, published 2026-10-27, and asks for removal. This points to a missing self-service unpublish or delete path. Publishers currently have to file a maintainer-handled issue.
- **[Issue #1758](https://github.com/modelcontextprotocol/registry/issues/1758): `io.github.radwanalmsora/devlens-mcp` (v0.1.6) is active in the Official Registry but missing from GitHub MCP Registry search.** Publishers want to know how and when registry entries reach downstream surfaces such as github.com/mcp.

## 5. Bugs & Stability
1. **[Issue #1758](https://github.com/modelcontextprotocol/registry/issues/1758) (medium).** A sync or discoverability gap between the Official Registry and the GitHub MCP Registry. It may be caused by downstream ingestion criteria or lag rather than a registry defect, and no fix PR exists. It needs triage to decide which system owns it.
2. **Performance risk (context from [PR #1756](https://github.com/modelcontextprotocol/registry/pull/1756)).** The database connection and CPU pressure under listing bursts is a stability concern. Closing the PR leaves its status unclear.

No crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
- **Self-service server deletion or withdrawal** ([#1759](https://github.com/modelcontextprotocol/registry/issues/1759)). This is implied by the request, not stated. Likely candidates are a publisher-initiated unpublish or delete flow, or documented guidance on soft-deleting and deprecating versions.
- **Clearer propagation to downstream registries** ([#1758](https://github.com/modelcontextprotocol/registry/issues/1758)). Better documentation or status visibility would help.
- **Listing scalability work.** The ideas in #1756 (prepared listing JSON, per-replica capacity) may return in a follow-up PR.

I can't predict which of these will land in the next version from today's data.

## 7. User Feedback Summary
- Publishers lack a self-service way to remove a server. This is a workflow pain point, not a complaint about quality.
- Publishers expect a successful publish to the Official Registry to show up in GitHub's MCP search, and they get no feedback when it doesn't.
- Both reporters filed well-structured issues with server names and versions. That suggests the publishing flow is understood, and the gaps are in lifecycle management and visibility.

## 8. Backlog Watch
- **Open Dependabot PRs awaiting review:**
  - [#1764](https://github.com/modelcontextprotocol/registry/pull/1764) and [#1763](https://github.com/modelcontextprotocol/registry/pull/1763): `go-jose/v4` 4.1.4 → 4.1.6, in `/deploy` and the root module. Because `go-jose` handles JWT/JOSE, merging these promptly is sensible.
  - [#1762](https://github.com/modelcontextprotocol/registry/pull/1762): `docker/login-action` 4.6.0 → 4.7.0.
  - [#1761](https://github.com/modelcontextprotocol/registry/pull/1761): `cloud.google.com/go/kms` 1.35.0 → 1.36.0 and `golang.org/x/time`.
  - [#1760](https://github.com/modelcontextprotocol/registry/pull/1760): `pulumi/sdk/v3` 3.270.0 → 3.272.0.
- **Issues needing a maintainer response:** [#1759](https://github.com/modelcontextprotocol/registry/issues/1759) (deletion) and [#1758](https://github.com/modelcontextprotocol/registry/issues/1758) (search discoverability). Both are newly created and uncommented. Neither is long-stale, but a deletion request involving a publisher withdrawal should be handled promptly.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-29

## 1. Today's Overview
The repository (punkpeye/awesome-mcp-servers) had no issue activity and no releases in the last 24 hours. All activity came through pull requests: 169 were updated, 157 still open and 12 merged or closed. Nearly every PR is a new server submission, so the project works mainly as a submission queue. The PR numbers (#17989–#18009) show roughly 20 new PRs in one day. The open queue is large, and it includes PRs from as early as April 2026.

Data caveat: the comment counts in the source data show as "undefined", so I couldn't rank PRs by discussion. The "hot" items below are the 20 PRs listed in the data, not the most-discussed ones.

## 2. Releases
No new releases.

## 3. Project Progress
Twelve PRs were merged or closed, but the data lists only two of them, and neither says whether it was merged:
- [#14281](https://github.com/punkpeye/awesome-mcp-servers/pull/14281) AgentPay (x402 pay-per-call AI microservices, Finance & Fintech) was **closed**. It carried the `non-github-url` label, which is a likely reason.
- [#17430](https://github.com/punkpeye/awesome-mcp-servers/pull/17430) FastAF (scraping, SERP and extraction APIs, hosted MCP plus x402) was **closed**. It carried the `missing-glama` label.

The other ten closed or merged PRs aren't in the data, so I can't say which servers were added to the list today. Both closures I can see have a plausible rule violation attached, but the data doesn't show the closing reason.

## 4. Community Hot Topics
With no comment data, the clearest signals are the themes among the submissions:
- **Developer and DevOps observability:** user `mshegolev` filed four PRs on the same day. They are [#18002 kibana-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/18002), [#18001 prometheus-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/18001), [#18000 sonarqube-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/18000) and [#17999 harbor-registry-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/17999). Several are re-filings of earlier PRs (#5733, #5061, #5055), made now that they include Glama badges. Another PR from the same author, [#5040](https://github.com/punkpeye/awesome-mcp-servers/pull/5040) (allure-testops-mcp), has been open since April and has a merge conflict.
- **Agent payments (x402 / USDC on Base):** [#16745](https://github.com/punkpeye/awesome-mcp-servers/pull/16745) (x402-bounty-radar), plus the closed AgentPay and FastAF PRs above. The need is monetized, pay-per-call MCP services for agents.
- **Browser automation and QA:** [#18009](https://github.com/punkpeye/awesome-mcp-servers/pull/18009) (youtube-mcp, with an approval gate on writes), [#18005](https://github.com/punkpeye/awesome-mcp-servers/pull/18005) (ego-webqa) and [#17997](https://github.com/punkpeye/awesome-mcp-servers/pull/17997) (chromium-ai-bridge).
- **Frameworks and infrastructure:** [#17989](https://github.com/punkpeye/awesome-mcp-servers/pull/17989) (openapi-agentify, which turns an OpenAPI spec into an MCP server) and [#18004](https://github.com/punkpeye/awesome-mcp-servers/pull/18004) (faucet-stream, a Rust data-movement platform).
- **Niche verticals:** [#15073](https://github.com/punkpeye/awesome-mcp-servers/pull/15073) (medtech research), [#18007](https://github.com/punkpeye/awesome-mcp-servers/pull/18007) (Bambu Studio 3D printing), [#18006](https://github.com/punkpeye/awesome-mcp-servers/pull/18006) (Zi Wei Dou Shu charting), [#18008](https://github.com/punkpeye/awesome-mcp-servers/pull/18008) (CoinGecko) and [#17891](https://github.com/punkpeye/awesome-mcp-servers/pull/17891) (Amazon seller analytics).

## 5. Bugs & Stability
No issues were filed, and no crashes or regressions were reported. The repository is a curated list and contains no executable code. The stability signals are in PR hygiene:
- [#5040](https://github.com/punkpeye/awesome-mcp-servers/pull/5040) has a `merge-conflict` label.
- Several PRs have `missing-glama` or `non-github-url` labels, which probably block merging.
- Some PRs (#17997, #18003) have empty descriptions.

## 6. Feature Requests & Roadmap Signals
There are no feature requests because there are no issues. The submissions point to growing categories:
- Remote or hosted MCP servers using Streamable HTTP, such as Nova ([#17891](https://github.com/punkpeye/awesome-mcp-servers/pull/17891)) and AgentPay.
- Monetization through x402.
- Safety patterns such as preflight/approve/execute (#18009) and dry-run-by-default (#17999).
- Read-only observability servers.

I'd expect the list to keep adding DevOps, finance and automation entries. Whether the maintainers will add a category for payments or hosted servers is a guess I can't support from this data.

## 7. User Feedback Summary
The data has no direct user feedback. The PR bodies show what contributors care about:
- **Glama score badges are a requirement.** Authors cite them explicitly (#16041, #17999) or are flagged for lacking them.
- **Re-filing is common.** Authors resubmit after earlier PRs were closed for inactivity (#17999, #15073). This points to slow review turnaround.
- **Platform and licence labelling** (🐍, ☁️, 🍎🪟🐧, MIT) is applied consistently.
- Some labels look like automated checks, such as `valid-name`, `has-emoji` and `has-glama`. The 🤖🤖🤖 marker in some titles appears to indicate AI-assisted or bot-filed submissions. That marker is my inference, not something the data states.

## 8. Backlog Watch
With 157 open PRs, review capacity is the project's main health concern. Older items that need attention:
- [#5040](https://github.com/punkpeye/awesome-mcp-servers/pull/5040) (opened 2026-04-17, merge conflict). It needs a rebase from the author or a decision from the maintainers.
- [#15073](https://github.com/punkpeye/awesome-mcp-servers/pull/15073) (opened 2026-09-25, `missing-glama`). It supersedes #15058.
- [#16041](https://github.com/punkpeye/awesome-mcp-servers/pull/16041) (opened 2026-10-09) and [#16745](https://github.com/punkpeye/awesome-mcp-servers/pull/16745) (opened 2026-10-17). Both pass the automated label checks yet are still open after 12 to 20 days.

Suggested maintainer actions: batch-merge PRs that pass all checks, close or request fixes on those with `missing-glama` or a conflict, and consider a stale-PR bot. The many re-filed PRs suggest the current approach is losing contributors' work.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-10-29

## 1. Today's Overview
The registry saw no issue activity and no releases. All activity was in PRs: 50 updated in 24h, 46 open and 4 merged/closed. Almost every PR is a new MCP server submission, and most are **remote** servers (Streamable HTTP, some with OAuth). Submission volume is high: PR numbers #6320–#6332 were opened today. The 4 closed PRs include duplicates and withdrawn submissions. None of the 4 closures is confirmed as a merge from the data provided. The data shows a steady intake of submissions and no visible comment activity, so review throughput is the open question.

## 2. Releases
No new releases.

## 3. Project Progress
Four PRs were closed or merged. The data does not say which were merged, and the listing shows three of them:
- [#4900](https://github.com/docker/mcp-registry/pull/4900) and [#4798](https://github.com/docker/mcp-registry/pull/4798): earlier BestPrice Shopping remote MCP submissions, both closed. They were superseded by [#5228](https://github.com/docker/mcp-registry/pull/5228), which is still open. This looks like consolidation of duplicate PRs, not a feature merge.
- [#5699](https://github.com/docker/mcp-registry/pull/5699): WhatSync (hosted WhatsApp MCP, OAuth 2.1), closed. The outcome is not stated.

No code or tooling fixes were visible today. Progress is limited to catalog intake.

## 4. Community Hot Topics
Comment counts are reported as "undefined" and reactions are 0 across the sample, so there is no engagement signal to rank by. The notable themes from today's submissions are:
- **Remote-server dominance.** Examples are [VibeRaven #6332](https://github.com/docker/mcp-registry/pull/6332) (no auth, 4 read-only tools), [Fin Codes API #6330](https://github.com/docker/mcp-registry/pull/6330) (IBAN validation and sanctions screening), [TrendsAGI #6329](https://github.com/docker/mcp-registry/pull/6329) (OAuth 2.1 with dynamic client registration), [Cubi Estate #6328](https://github.com/docker/mcp-registry/pull/6328) (2M+ European listings) and [IndustryLens #6327](https://github.com/docker/mcp-registry/pull/6327).
- **Batch submissions from one author.** miguelpieras opened five PRs: [#6326 CloudBrowser](https://github.com/docker/mcp-registry/pull/6326), [#6325 Hustle Got Real](https://github.com/docker/mcp-registry/pull/6325), [#6324 Splendorize](https://github.com/docker/mcp-registry/pull/6324), [#6323 Designelier](https://github.com/docker/mcp-registry/pull/6323) and [#6322 AutoContent](https://github.com/docker/mcp-registry/pull/6322).
- **Vendor-driven listings.** Vendors are listing hosted products, such as [Linked API #6331](https://github.com/docker/mcp-registry/pull/6331), [Bannerproof #6321](https://github.com/docker/mcp-registry/pull/6321) and [House AI #6320](https://github.com/docker/mcp-registry/pull/6320). The underlying need is distribution through the Docker MCP Catalog for hosted SaaS products.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there are no issues. The one process risk is duplicate submissions (the BestPrice trio), which add review overhead.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals from the submissions:
- Remote and OAuth-based servers are now the main submission type. They use OAuth 2.1 with dynamic client registration (TrendsAGI, Bannerproof, House AI) or no auth (VibeRaven, Cubi). This suggests the catalog's remote-server and OAuth handling will matter more.
- Several submitters say that test credentials are supplied through a review form ([Spacebring #5736](https://github.com/docker/mcp-registry/pull/5736)). A clearer, standardized credential-handoff process for authenticated servers would help.
- The registry may need automated checks for the read-only and `readOnlyHint` annotations that some submitters highlight.

## 7. User Feedback Summary
No direct feedback appears in the data. From submission text:
- Submitters care about making hosted servers installable from Docker without local images or secrets.
- Domains are diverse: fintech compliance, real estate, shopping (Greece), design generation, browser automation and e-commerce operations.
- Cross-listing with the official MCP Registry is common (Cubi Estate, BestPrice).

## 8. Backlog Watch
Older open PRs that need maintainer attention:
- [#1904 ConvertAPI MCP](https://github.com/docker/mcp-registry/pull/1904): opened 2026-03-20, so open about 7 months and updated today. It is the oldest item in the sample.
- [#5228 BestPrice Shopping](https://github.com/docker/mcp-registry/pull/5228): opened 2026-09-24, open about 5 weeks and still active. Its two duplicates were closed.
- [#5736 Spacebring](https://github.com/docker/mcp-registry/pull/5736): opened 2026-10-15, awaiting credential review.
- [#6229 PieterPost](https://github.com/docker/mcp-registry/pull/6229): opened 2026-10-28.

With 46 open PRs and no recorded review comments, a triage pass to prioritize long-waiting and duplicate submissions would help project health.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-10-29

## 1. Today's Overview
Activity was low-to-moderate and almost entirely automated. Of 10 PRs updated in 24h, 6 were `github-actions[bot]` SHA bumps (each validated with `claude plugin validate`), and only 2 PRs were human-authored. One issue was updated, and it was closed as filed by mistake. There were no releases. Project health looks stable: the bump pipeline is working, but the number of open PRs waiting for review is growing.

## 2. Releases
No new releases.

## 3. Project Progress
Closed or merged in the window:
- **[#6935](https://github.com/anthropics/claude-plugins-official/pull/6935)** (CLOSED, nub3Ar): Fix for a malformed `Authorization: Bearer ` header when `GITHUB_PERSONAL_ACCESS_TOKEN` is unset (fixes #6878). It removes the Authorization header from the manifest. Users would configure auth through Claude Code's `headersHelper`, for example with `gh auth token`. The data doesn't say whether it was merged or closed unmerged, so I can't tell whether the fix has landed.
- **[#6710](https://github.com/anthropics/claude-plugins-official/pull/6710)** (CLOSED): Older semgrep bump (`b58f407c → df341965`), opened 2026-10-16. It was superseded by **[#6934](https://github.com/anthropics/claude-plugins-official/pull/6934)** (`b58f407c → 653bd653`), which is still open. The bump sat for 12 days before being closed.

## 4. Community Hot Topics
No item has meaningful engagement. Comment counts are mostly undefined and there are 0 👍 reactions throughout. The most notable PRs are:
- **[#6933](https://github.com/anthropics/claude-plugins-official/pull/6933)** (felixweinberger): Moves all TypeScript examples in `mcp-server-dev` from MCP SDK v1 (`@modelcontextprotocol/sdk`) to v2 (`@modelcontextprotocol/server`). It touches 15 files (+310/−260), is docs-only, and leaves the Python `fastmcp` examples unchanged. The stated reason is that v1 now gets only bug and security fixes. This is a signal that plugin authors are being steered to v2 for new servers.
- **[#6935](https://github.com/anthropics/claude-plugins-official/pull/6935)** points to a recurring need: clearer handling of optional credentials in bundled MCP plugin manifests.

## 5. Bugs & Stability
- **Auth header bug (medium):** The GitHub plugin sent a malformed `Bearer ` header when the token env var was unset, tracked in #6878. A fix PR (#6935) exists but is closed. I can't confirm from this data whether #6878 is resolved.
- **[#6025](https://github.com/anthropics/claude-plugins-official/issues/6025):** Closed as "filed by mistake", so not a real bug.
- There were no crash or regression reports today.

## 6. Feature Requests & Roadmap Signals
There are no explicit user feature requests today. Roadmap signals come from maintainers and automation:
- The move to MCP SDK v2 (#6933) is likely to merge soon, since it is docs-only and has a clear rationale.
- Continued SHA bumps across third-party plugins: `dynatrace` ([#6941](https://github.com/anthropics/claude-plugins-official/pull/6941)), `stackhawk-api` ([#6940](https://github.com/anthropics/claude-plugins-official/pull/6940)), `nvidia-skills` ([#6939](https://github.com/anthropics/claude-plugins-official/pull/6939)), `grafana-mcp` ([#6938](https://github.com/anthropics/claude-plugins-official/pull/6938)), `grafana-cloud-mcp` ([#6937](https://github.com/anthropics/claude-plugins-official/pull/6937)), `crowdsec` ([#6936](https://github.com/anthropics/claude-plugins-official/pull/6936)), and `semgrep` (#6934). Both Grafana plugins moved to the same SHA (`77a6f1a2`).
- The marketplace is clearly broadening across observability, security and GPU tooling.

## 7. User Feedback Summary
There is little direct feedback. The one human-authored fix suggests users want authentication that fails cleanly rather than sending an invalid header. They also appear to want credential helpers (`headersHelper`) as the standard way to supply tokens. Issue #6025 shows that a mistaken report can sit open for about 7 weeks (2026-09-11 to 2026-10-29) before being closed.

## 8. Backlog Watch
- **Open bot PRs (6 today).** They need a maintainer or owner review. Stale bumps can be superseded, as #6710 was after 12 days. The open semgrep bump #6934 is already replacing it.
- **[#6933](https://github.com/anthropics/claude-plugins-official/pull/6933)** needs a docs maintainer's review, and it is the only human-authored open PR.
- **#6878** should be checked to see whether it should be re-opened or re-fixed, because its linked fix PR #6935 closed in this window.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-10-29

## 1. Today's Overview
The project is a curated list that takes resource submissions through GitHub Issues, and activity today was entirely submission intake. In the last 24 hours, 34 issues were updated (25 open, 9 closed). There were no PRs and no releases. Almost every issue is a `[Resource]` submission, and most carry the `validation-passed` and `resource-submission` labels, so an automated validator is screening them. Intake volume is high. About 20 submissions were opened or updated across 2026-10-28 and 2026-10-29. Nothing in the data shows curation PRs being merged. That suggests list updates happen in batches, or that maintainer review lags behind intake.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were updated, merged, or closed today. No list edits are visible in this data.
- Nine issues were closed. Four of them look like duplicate or malformed submissions that were cleaned up:
  - [#3326](https://github.com/hesreallyhim/awesome-claude-code/issues/3326) (generating-slides) was closed. A re-filed [#3330](https://github.com/hesreallyhim/awesome-claude-code/issues/3330) with the `validation-passed` label is still open.
  - [#3321](https://github.com/hesreallyhim/awesome-claude-code/issues/3321) (Buddy) was closed. It was re-filed as [#3322](https://github.com/hesreallyhim/awesome-claude-code/issues/3322), which was also closed today.
  - [#3339](https://github.com/hesreallyhim/awesome-claude-code/issues/3339) (RosmarOps) and [#3314](https://github.com/hesreallyhim/awesome-claude-code/issues/3314) (Prompt Motion Site Web Builder) were `auto-closed` while `validation-pending`. In both, the title is still the template placeholder, such as `<name of your resource>`.
- Other issues closed after validation passed: [#3048](https://github.com/hesreallyhim/awesome-claude-code/issues/3048) (business-crew), [#3294](https://github.com/hesreallyhim/awesome-claude-code/issues/3294) (WingFoil), and [#3325](https://github.com/hesreallyhim/awesome-claude-code/issues/3325) (faq-shortcuts). The data doesn't say whether they were accepted or declined. Closing a validated submission could mean it was added to the list.

## 4. Community Hot Topics
No issue has more than 2 comments and none has reactions, so there are no real discussion hot spots. The comment counts are probably mostly bot validation replies. By number of submissions, the themes were:

| Theme | Submissions |
|---|---|
| Memory & Context Persistence | [#3328 MemVault](https://github.com/hesreallyhim/awesome-claude-code/issues/3328), [#3323 Renor](https://github.com/hesreallyhim/awesome-claude-code/issues/3323), [#3315 ctx-guard](https://github.com/hesreallyhim/awesome-claude-code/issues/3315), [#3312 MemCell](https://github.com/hesreallyhim/awesome-claude-code/issues/3312) |
| Agent orchestration | [#3048 business-crew](https://github.com/hesreallyhim/awesome-claude-code/issues/3048) (2 comments), [#3333 WSP](https://github.com/hesreallyhim/awesome-claude-code/issues/3333), [#3294 WingFoil](https://github.com/hesreallyhim/awesome-claude-code/issues/3294) |
| Skills | [#3327 Solo Founder Playbook](https://github.com/hesreallyhim/awesome-claude-code/issues/3327) (2 comments), [#3330](https://github.com/hesreallyhim/awesome-claude-code/issues/3330), [#3325](https://github.com/hesreallyhim/awesome-claude-code/issues/3325) |
| Observability | [#3332 cc-tsuchihyo](https://github.com/hesreallyhim/awesome-claude-code/issues/3332), [#3317 Watchyard](https://github.com/hesreallyhim/awesome-claude-code/issues/3317) |
| Mobile and alternative clients | [#3337 cccodroid](https://github.com/hesreallyhim/awesome-claude-code/issues/3337), [#3322 Buddy](https://github.com/hesreallyhim/awesome-claude-code/issues/3322) |
| Testing | [#3319 BugBug](https://github.com/hesreallyhim/awesome-claude-code/issues/3319), [#3313 TestMu AI Agent Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3313) |

The underlying needs are persistent memory across sessions, managing many sessions or accounts, running Claude Code from a phone, and vertical "solo founder" workflows.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today, and no fix PRs exist. The only process problems are submission-form issues:
- Two `auto-closed` submissions ([#3339](https://github.com/hesreallyhim/awesome-claude-code/issues/3339), [#3314](https://github.com/hesreallyhim/awesome-claude-code/issues/3314)) kept the placeholder title, which the validator seems to reject.
- Two duplicate re-filings (#3326/#3330, #3321/#3322) suggest users don't understand the form or validation flow.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed against the list itself. Submissions suggest where the list's categories may expand or need splitting:
- **Memory & Context Persistence** is the busiest category, with four entries in two days.
- **Observability & Monitoring** is already subdivided (Usage & Cost, Session Monitors). More entries there could justify more subcategories.
- **Alternative Clients** now has Android entries ([#3337](https://github.com/hesreallyhim/awesome-claude-code/issues/3337), [#3322](https://github.com/hesreallyhim/awesome-claude-code/issues/3322)).
- Cross-agent tools that work with Codex, Cursor, or Grok are appearing: [#3333](https://github.com/hesreallyhim/awesome-claude-code/issues/3333), [#3325](https://github.com/hesreallyhim/awesome-claude-code/issues/3325), [#3328](https://github.com/hesreallyhim/awesome-claude-code/issues/3328), [#3329](https://github.com/hesreallyhim/awesome-claude-code/issues/3329). This may push toward broader-than-Claude scope questions.

## 7. User Feedback Summary
Submitters are individual builders and small vendors, such as BugBug, Speakeasy, and TestMu AI. They want visibility for plugins, skills, MCP servers, and mods. There are also non-English contributions: a Japanese-language tool ([#3332](https://github.com/hesreallyhim/awesome-claude-code/issues/3332)) and a Xiaohongshu workflow ([#3329](https://github.com/hesreallyhim/awesome-claude-code/issues/3329)). Use cases are broad: video editing ([#3338](https://github.com/hesreallyhim/awesome-claude-code/issues/3338)), slide generation, social media operations ([#3316](https://github.com/hesreallyhim/awesome-claude-code/issues/3316)), and anti-hang guards for long Bash calls ([#3331](https://github.com/hesreallyhim/awesome-claude-code/issues/3331)). The data contains no explicit satisfaction or dissatisfaction feedback.

## 8. Backlog Watch
- 25 validated submissions are open and awaiting a maintainer decision. The oldest in this window were created on 2026-10-28 (#3311–#3320). No PRs have moved to act on them.
- [#3048 business-crew](https://github.com/hesreallyhim/awesome-claude-code/issues/3048) was created on 2026-10-03. It was updated and closed today, after about 26 days. That shows the longest review lag in this data.
- The data covers only the last 24 hours, so older open submissions can't be assessed. A maintainer should check that validated submissions aren't piling up, and might consider a batch-merge cadence.
- Four of the duplicates and malformed submissions were cleaned up today. Stricter form validation could prevent more of them.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-29

Source: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity was high but almost entirely submission-driven. 50 PRs were updated in the last 24h: 4 are open and 46 were merged or closed. Only 1 issue was touched, and it is closed. There were no releases, which is normal for a curated list. The maintainers are triaging submissions quickly, but all the sampled closed PRs were left with no comments. Many of them were probably closed without a merge. The data does not show which were merged and which were rejected.

## 2. Releases
No new releases.

## 3. Project Progress
The data doesn't separate merged PRs from closed-unmerged ones, so I can't say which entries landed. The closed PRs in the sample cover these categories:

- **Development and Testing**
  - [#1293](https://github.com/VoltAgent/awesome-agent-skills/pull/1293): BugBug's 9 browser-testing skills.
  - [#1270](https://github.com/VoltAgent/awesome-agent-skills/pull/1270): cj-tauri.
  - [#1256](https://github.com/VoltAgent/awesome-agent-skills/pull/1256): aictrl-dev/recording-product-demo.
  - [#1298](https://github.com/VoltAgent/awesome-agent-skills/pull/1298): zambodotdev/zambo.
  - [#1297](https://github.com/VoltAgent/awesome-agent-skills/pull/1297): Dhani078/anti-slop-stack.
  - [#1282](https://github.com/VoltAgent/awesome-agent-skills/pull/1282): light-cloud-deploy.
- **Marketing**
  - [#1204](https://github.com/VoltAgent/awesome-agent-skills/pull/1204): Taplio's 26 LinkedIn skills.
  - [#1259](https://github.com/VoltAgent/awesome-agent-skills/pull/1259): de-ai-writer, a Chinese-language writing tool.
- **Productivity and Collaboration**
  - [#1273](https://github.com/VoltAgent/awesome-agent-skills/pull/1273): open-pptd.
- **Context Engineering**
  - [#1288](https://github.com/VoltAgent/awesome-agent-skills/pull/1288): agents-learning.
- **Specialized Domains**
  - [#1285](https://github.com/VoltAgent/awesome-agent-skills/pull/1285): lava-mcp.
- **Other**
  - [#1292](https://github.com/VoltAgent/awesome-agent-skills/pull/1292): ajnart/self-host.
  - [#1296](https://github.com/VoltAgent/awesome-agent-skills/pull/1296): Vaneform website-traffic-lookup.
  - [#1287](https://github.com/VoltAgent/awesome-agent-skills/pull/1287): journey-audit.
- **Security**
  - [#1283](https://github.com/VoltAgent/awesome-agent-skills/pull/1283): LGD-Eval/lgd-gate for Security Scanners.
  - [#1295](https://github.com/VoltAgent/awesome-agent-skills/pull/1295): KillerSkills for the Security Notice recommended tools.
- **Maintenance**
  - [#1301](https://github.com/VoltAgent/awesome-agent-skills/pull/1301): a pack-count update, closed as a duplicate. It was superseded by [#1302](https://github.com/VoltAgent/awesome-agent-skills/pull/1302).

Themes: browser and E2E testing, deployment, MCP-backed skills, and marketing and writing tools. Security and trust-layer tools are also appearing (LGD-Eval, KillerSkills, npmscan).

## 4. Community Hot Topics
No item has any comments or reactions (all 👍 are 0). Comment counts are undefined in the data, so "hot" here means topical rather than discussed.

- **Supply-chain trust and skill vetting.**
  - [#1283](https://github.com/VoltAgent/awesome-agent-skills/pull/1283), [#1295](https://github.com/VoltAgent/awesome-agent-skills/pull/1295) and [#1303](https://github.com/VoltAgent/awesome-agent-skills/pull/1303) all pitch security or trust tooling.
  - [Issue #1284](https://github.com/VoltAgent/awesome-agent-skills/issues/1284) is a closed cross-link request for third-party evaluation.
  - The need behind these: users want assurance that installed skills and MCP packages are safe.
- **Self-promotion volume.** Many PRs are authored by the tools' own makers (for example, "I work on Light Cloud" in [#1282](https://github.com/VoltAgent/awesome-agent-skills/pull/1282)). That signals the list's value as a distribution channel.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
- No explicit feature requests were filed.
- The cross-link and partnership ask in [#1284](https://github.com/VoltAgent/awesome-agent-skills/issues/1284) was closed, which suggests the maintainers decline outside-initiated cross-promotion. That is an inference, not something the data states.
- The security-tools placement requests ([#1283](https://github.com/VoltAgent/awesome-agent-skills/pull/1283), [#1295](https://github.com/VoltAgent/awesome-agent-skills/pull/1295)) were closed. The Security Scanners and Security Notice sections may be tightly gated.
- Likely near-term additions are the open PRs below, if they pass review.

## 7. User Feedback Summary
There is no direct feedback. The PR descriptions show these use cases:
- Teaching and explaining code ([#1300](https://github.com/VoltAgent/awesome-agent-skills/pull/1300)).
- Pre-install auditing of npm packages ([#1303](https://github.com/VoltAgent/awesome-agent-skills/pull/1303)).
- Cross-agent installs across Claude Code, Codex, Cursor, VS Code and Copilot ([#1293](https://github.com/VoltAgent/awesome-agent-skills/pull/1293)).
- Non-English skill support (Chinese, Cangjie and HarmonyOS in [#1259](https://github.com/VoltAgent/awesome-agent-skills/pull/1259) and [#1270](https://github.com/VoltAgent/awesome-agent-skills/pull/1270)).

## 8. Backlog Watch
There are 4 open PRs:
- [#1303](https://github.com/VoltAgent/awesome-agent-skills/pull/1303): npmscan-mcp-plugin, opened today.
- [#1302](https://github.com/VoltAgent/awesome-agent-skills/pull/1302): jgs-se-knowledge-packs count update (71 → 74). This is a small, low-risk fix that can be merged quickly.
- [#1300](https://github.com/VoltAgent/awesome-agent-skills/pull/1300): GAURAV-1313/codecall, opened today.
- A fourth open PR is not in the top-20 sample, so I can't identify it.

The oldest item in the sample is [#1204](https://github.com/VoltAgent/awesome-agent-skills/pull/1204), opened 2026-10-14 and closed today after about 15 days. That is a sign that some submissions wait weeks. The open PRs are all new, so there is no stale backlog yet.

**Health assessment:** Contribution volume is strong and triage is responsive. The risks are reviewer load, a likely high rejection rate, and promotional or duplicate submissions (for example #1301 and #1302). Publishing explicit acceptance criteria and a merged/rejected breakdown would help contributors.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
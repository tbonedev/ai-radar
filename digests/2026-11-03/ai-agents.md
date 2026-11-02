# MCP Ecosystem Digest 2026-11-03

> Issues: 2 | PRs: 4 | Projects covered: 7 | Generated: 2026-11-02 16:47 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-03

## 1. Today's Overview
Activity on modelcontextprotocol/servers was low over the last 24 hours: 2 issues and 4 PRs were updated, with no new releases and no merged or closed items. All four PRs are open, and three of them (#4497, #4498, #4551) have been open since July. Today's updates look like a maintenance sweep rather than active development. The themes are security hardening (SSRF protection, a vulnerable dependency, unbounded response buffering) and the v2 SDK migration. Project health is stable, but review throughput looks like the constraint, because several fixes are waiting for maintainer attention.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. Four open PRs saw updates:

- [#4497](https://github.com/modelcontextprotocol/servers/pull/4497): fetch SSRF protection. It blocks requests to internal and metadata IPs by default and re-validates redirect targets.
- [#4498](https://github.com/modelcontextprotocol/servers/pull/4498): the same SSRF protection for the `everything` server's `gzip-file-as-resource` tool. The existing `GZIP_ALLOWED_DOMAINS` allowlist is optional, so it was not enough on its own.
- [#4551](https://github.com/modelcontextprotocol/servers/pull/4551): migrates `everything` to the v2 scoped SDK packages (`2.0.0`) and serves both protocol revision 2026-07-28 and the legacy revisions (2024-10-07 through 2025-11-25) from one codebase. It targets `v2/main`.
- [#3353](https://github.com/modelcontextprotocol/servers/pull/3353): a filesystem follow-up to #3205. It fixes the import quote style and adds a `pathToFileURL()` regression test for encoded `file://` URIs.

## 4. Community Hot Topics
Engagement is thin. None of the PRs report comment counts or reactions, and neither issue has any 👍.

- [#5370](https://github.com/modelcontextprotocol/servers/issues/5370) (2 comments, the most active item): `mcp-server-fetch` buffers the whole response body before truncating, so `max_length` limits only what is returned and not what is downloaded. The underlying need is resource safety. A hostile or very large URL can exhaust memory, and the reporter wants the read capped while streaming. This pairs naturally with the SSRF work in #4497, since both treat the model-supplied URL as untrusted input.
- [#4497](https://github.com/modelcontextprotocol/servers/pull/4497) and [#4498](https://github.com/modelcontextprotocol/servers/pull/4498): the same author opened both on the same day, which suggests a deliberate, systematic hardening pass.

## 5. Bugs & Stability
Ranked by severity:

1. **SSRF in `fetch` and `everything`** (security, high). The destination host is not validated, and redirects are followed without re-checking. Fix PRs exist: [#4497](https://github.com/modelcontextprotocol/servers/pull/4497) and [#4498](https://github.com/modelcontextprotocol/servers/pull/4498). Both have been unmerged for about four months.
2. **Unbounded memory use in `fetch`** ([#5370](https://github.com/modelcontextprotocol/servers/issues/5370), medium). This is a denial-of-service risk from large responses. There is no fix PR yet.
3. **Vulnerable dependency in `filesystem`** ([#5420](https://github.com/modelcontextprotocol/servers/issues/5420), medium). `minimatch ^10.0.1` still permits installs of a version affected by GHSA-g3hv-75wg-m249. It was reported against server-filesystem 2.1.0 (npm `latest`) and `v2/main` at `72ad22c`. The likely fix is a version bump to the patched range, and no PR exists yet.
4. **`file://` URI handling in `filesystem`** ([#3353](https://github.com/modelcontextprotocol/servers/pull/3353), low). The change is mostly a test and style fix, and it adds regression coverage.

## 6. Feature Requests & Roadmap Signals
- Streaming size cap for `fetch` ([#5370](https://github.com/modelcontextprotocol/servers/issues/5370)). It carries the `enhancement`, `server-fetch` and `v2` labels, so it is already scoped to v2. It is a likely candidate for the next v2 release, especially bundled with the SSRF PR.
- Dual-era protocol support in `everything` ([#4551](https://github.com/modelcontextprotocol/servers/pull/4551)). This points to a roadmap in which servers support the 2026-07-28 revision alongside legacy clients during a transition period.
- The security PRs and the `minimatch` bump are the most probable near-term merges, because they are small and clearly scoped.

## 7. User Feedback Summary
- Downstream consumers care about supply-chain hygiene. [#5420](https://github.com/modelcontextprotocol/servers/issues/5420) came from someone who uses the filesystem server as a transitive dependency, where the vulnerable range shows up in audits even when the server is not run directly.
- Operators want safe defaults when an LLM chooses the URL. Both the SSRF PRs and #5370 describe model-produced URLs as an attack surface.
- No satisfaction or dissatisfaction signals appear in today's data beyond these reports.

## 8. Backlog Watch
- [#4497](https://github.com/modelcontextprotocol/servers/pull/4497) and [#4498](https://github.com/modelcontextprotocol/servers/pull/4498) (open since 2026-07-08): security fixes that deserve prioritized review.
- [#4551](https://github.com/modelcontextprotocol/servers/pull/4551) (open since 2026-07-26): a large migration that will probably need rebasing against `v2/main`.
- [#3353](https://github.com/modelcontextprotocol/servers/pull/3353) (open since 2026-02-19, about 8.5 months): the oldest item and a small change that could be merged or closed quickly.
- [#5370](https://github.com/modelcontextprotocol/servers/issues/5370) and [#5420](https://github.com/modelcontextprotocol/servers/issues/5420): newer, but both are security-relevant and have no linked fix PR yet.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP and Agent-Skill Ecosystem, 2026-11-03

## 1. Ecosystem Overview
The projects in this digest are the infrastructure and distribution layer of the agent ecosystem. They are reference servers, registries, catalogs, plugin marketplaces and curated lists. They are not agent runtimes. Activity is split. Curated lists and catalogs have heavy submission intake, with many entries opened by AI agents, while the core code repositories (MCP Servers, MCP Registry, Claude Plugins) move slowly. Security and supply-chain integrity are the common concern: SSRF, vulnerable dependencies, unverifiable packages and silent message loss. Review capacity is the bottleneck in nearly every project.

## 2. Activity Comparison

Health scores are my own judgment from the digest data, not figures any project reports.

| Project | Issues updated | PRs updated | Release | Health (1-5) | Notes |
|---|---|---|---|---|---|
| MCP Servers | 2 | 4 (0 merged/closed) | None | 3 | Four-month-old security PRs unreviewed |
| MCP Registry | 5 | 2 (1 closed) | None | 3 | 13-month-old namespace bug, fix PR open |
| Awesome MCP Servers | 0 | 139 (121 open, 18 closed) | None | 3 | Intake exceeds review |
| Docker MCP Registry | 2 | 50 (48 open, 2 closed) | None | 2.5 | Few merges, failed security review on Atlassian |
| Claude Plugins (official) | 2 | 8 (2 open, 6 closed) | None | 3 | Data-loss bug open 3.5 months, fix PR closed |
| Awesome Claude Code | 18 (16 open) | 0 | None | 3 | Queue of validated submissions, no PRs |
| Awesome Agent Skills | 2 (both closed) | 35 (5 open, 30 closed) | None | 4 | Fast triage, but closures lack explanation |

No project shipped a release.

## 3. MCP Servers's Position

**Advantages**
- It is the reference implementation. The other projects list, distribute or catalog servers, and this one holds the code and the v2 protocol migration (#4551, protocol revision 2026-07-28 with legacy support).
- Its work is engineering-heavy: SSRF protection, dependency fixes, SDK migration. The other repos mostly process submissions.

**Technical approach**
- It ships reference servers (`fetch`, `filesystem`, `everything`). The registries and lists point to third-party servers.
- It is the only one where the model-supplied URL is a direct attack surface.

**Community size**
- It is the smallest by volume: 6 updated items against 141 for Awesome MCP Servers and 52 for Docker MCP Registry. Its influence comes from being the spec and reference code, not from contributor count.

**Weakness**
- Merge throughput is low. Three of its four open PRs date from July, and two of them are security fixes.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Supply-chain and package integrity | MCP Servers, MCP Registry, Docker MCP Registry | `minimatch` advisory (#5420), content hashes for npm/PyPI/OCI (#1783), failed security review blocking the Atlassian pin update (#6484) |
| Untrusted input and network safety | MCP Servers | SSRF defaults (#4497, #4498), streaming size cap (#5370) |
| Remote and hosted MCP servers | Awesome MCP Servers, Docker MCP Registry, MCP Registry | Remote-only entries (#18152, #18352), Streamable HTTP and OAuth submissions, a quickstart example for a remote server (#1786) |
| Agent memory and context persistence | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | Local-first, user-owned memory: #18358 and #18355, #3414 and #3405, #1326 |
| Reliable delivery and failure visibility | Claude Plugins | Telegram inbound messages acked and dropped (#4308) |
| Automated validation of submissions | Awesome MCP Servers, Awesome Claude Code, Docker MCP Registry | Label bots, `validation-passed`, and a security review for catalog entries |
| Agent-authored contributions | Awesome MCP Servers, Awesome Agent Skills, Claude Plugins | 🤖 submissions, "prepared by an AI coding agent" disclosures, repeated `SECURITY.md` PRs from one account |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference servers and v2 SDK | Server authors, integrators | Code monorepo |
| MCP Registry | Official publish and discovery, namespace authorization | Publishers, client developers | Service with GitHub OIDC grants |
| Awesome MCP Servers | Broad community index | Developers browsing | Markdown list, bot-checked |
| Docker MCP Registry | Catalog with a security review | Docker users, vendors | YAML entries, container and remote |
| Claude Plugins | Plugin marketplace with SHA pins and bot bumps | Claude Code users, plugin authors | Pinned plugin repos, validation |
| Awesome Claude Code | Claude Code resources | Claude Code users | Issue-form submissions |
| Awesome Agent Skills | Skills list, many vendor-official | Cross-agent users, vendors | Markdown list, strict contribution rules |

The practical split is trust level. The Docker MCP Registry and the Claude Plugins marketplace pin versions and review security. The awesome lists only check formatting.

## 6. Community Momentum & Maturity

- **Very high intake, review lagging:** Awesome MCP Servers (121 open PRs), Docker MCP Registry (48 open, items from July).
- **Fast, healthy triage:** Awesome Agent Skills (30 of 35 PRs cleared).
- **Steady but slow on human-driven fixes:** MCP Servers, MCP Registry, Claude Plugins. Their bugs have stayed open for 3.5 to 13 months.
- **Submission queues with little maintainer activity visible:** Awesome Claude Code.

Rapid iteration is on the submission side. Stabilization shows in the v2 migration and the move toward bot-driven pin updates. Comment and reaction counts are missing for several projects, so these tiers rest on update and merge counts.

## 7. Trend Signals

1. **Security is becoming a gate.** SSRF, dependency advisories, package hashes and catalog security reviews all point to registries needing verification, not only discovery. Developers should assume their servers will be audited.
2. **Remote, OAuth-based servers are growing fastest.** Docker's catalog is now mostly Streamable HTTP entries. This puts pressure on policies about closed-source hosted servers.
3. **Memory is the most repeated server category.** Developers want local-first, portable memory across agents.
4. **Agents now submit the work.** Contribution volume is rising faster than review capacity, so expect more automated validation and abuse controls.
5. **Protocol transition is under way.** Supporting both the 2026-07-28 revision and legacy clients, as in #4551, is the practical path for server authors.
6. **Failures must be visible.** The Telegram silent-drop bug shows that channel and plugin authors should await delivery and surface errors.

**Caveat:** Several digests lack comment counts and the merge-versus-close distinction. The health scores and tiers above are directional, not measured.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Project Digest, 2026-11-03

## 1. Today's Overview
Activity is low to moderate. Five issues and two PRs were updated in the last 24 hours, and there were no new releases. Most of the attention went to one theme: GitHub namespace case-sensitivity in publish authorization. It appears in issue #689, issue #1787 and PR #1788. A supply-chain integrity proposal (#1783) is the most-discussed open item. Maintainer response is hard to judge from the data. Only one PR is open, and it is a fix for a bug reported the day before.

## 2. Releases
No new releases.

## 3. Project Progress
- **Merged/closed PRs:** [PR #1786](https://github.com/modelcontextprotocol/registry/pull/1786) was closed. The data doesn't say whether it was merged. It replaced the fictional `weather.example.com` remote-only example in the quickstart with Paperjoy, a live Streamable HTTP server. It is a docs-only change.
- **In flight:** [PR #1788](https://github.com/modelcontextprotocol/registry/pull/1788) fixes #1787, the 403 on publish for GitHub logins with uppercase letters. The author says a failing test was reproduced and then passed with the patch. It is still open and awaiting review.
- [Issue #1787](https://github.com/modelcontextprotocol/registry/issues/1787) was closed the same day it was opened. The data doesn't say why. It may have been closed as a duplicate of #689 or because the fix PR was linked.

## 4. Community Hot Topics
1. **[#1783](https://github.com/modelcontextprotocol/registry/issues/1783): optional content-integrity fields for npm / PyPI / OCI entries** (7 comments). MCPB packages already carry `fileSha256`, but npm, PyPI and OCI entries have no equivalent. OCI can only embed a digest in the image reference. Clients therefore cannot verify that the bytes they install match what was published. The underlying need is supply-chain assurance for registry-driven installs.
2. **[#689](https://github.com/modelcontextprotocol/registry/issues/689): GitHub namespace permissions are case-sensitive** (6 comments, open since 2025-10-17). GitHub OIDC grants use the raw `repository_owner` casing, for example `io.github.PrefectHQ/*`. Publishing under a lowercase namespace such as `io.github.prefecthq/...` fails. Users want the registry to normalize case.

## 5. Bugs & Stability
1. **Publish 403 for mixed-case GitHub accounts** ([#689](https://github.com/modelcontextprotocol/registry/issues/689), [#1787](https://github.com/modelcontextprotocol/registry/issues/1787)). This is the highest severity item, because it blocks publishing for any GitHub account with uppercase letters. The cause is that grants keep the raw case, `isResourceMatch` compares case-sensitively, and the server-name schema requires lowercase. #689 has been open for about 13 months. Fix PR [#1788](https://github.com/modelcontextprotocol/registry/pull/1788) is open.
2. No crashes or regressions were reported.

## 6. Feature Requests & Roadmap Signals
- **Content-integrity fields** ([#1783](https://github.com/modelcontextprotocol/registry/issues/1783)). This is an optional schema addition to `server.json`. It has a precedent in MCPB `fileSha256` and active discussion. It is a plausible candidate for a schema revision. A schema change is likely to take longer than a bug fix.
- **Case-insensitive namespace matching.** The fix is already in PR #1788 and is the most likely change to land soon.
- **New server submissions.** [#1784](https://github.com/modelcontextprotocol/registry/issues/1784) asks to add mach-gtm-mcp. Its npm package is not yet published, so the listing is probably premature.

## 7. User Feedback Summary
- Publishers with mixed-case GitHub orgs and users, such as PrefectHQ, hit confusing 403s. This is a recurring complaint.
- Security-minded consumers want verifiable package hashes.
- Publishers still use issues for submissions and withdrawals, for example [#1784](https://github.com/modelcontextprotocol/registry/issues/1784) and [#1785](https://github.com/modelcontextprotocol/registry/issues/1785). This suggests the self-service flow doesn't cover these cases.
- Docs contributors want realistic examples in the quickstart ([#1786](https://github.com/modelcontextprotocol/registry/pull/1786)).

## 8. Backlog Watch
- **[#689](https://github.com/modelcontextprotocol/registry/issues/689)** has been open for more than a year and is a real blocker. It deserves maintainer attention, and PR #1788 should be reviewed and merged.
- **[#1785](https://github.com/modelcontextprotocol/registry/issues/1785)** is a withdrawal request with no comments. It needs a maintainer to verify ownership and act.
- **[#1784](https://github.com/modelcontextprotocol/registry/issues/1784)** is a submission with no response yet.
- **[#1783](https://github.com/modelcontextprotocol/registry/issues/1783)** needs a maintainer decision on the proposal's direction.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-03

Source: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

## 1. Today's Overview
Activity was high but one-sided: 139 PRs were updated in 24 hours (121 open, 18 merged or closed) and no issues or releases were recorded. The repository works as a submission queue. Almost all traffic is contributors proposing new MCP server entries, and the top 20 PRs (by update time) are nearly all "Add X" listings. Many submissions are labelled as AI-agent-authored (🤖 markers), and several authors say so openly. PR numbers reached #18362, so submissions are arriving at a high rate. The 121 open PRs against 18 closed suggest review throughput is behind intake.

## 2. Releases
No new releases.

## 3. Project Progress
The data lists 18 merged or closed PRs but gives details for only one of them, so I can't say what moved forward.
- [#18352](https://github.com/punkpeye/awesome-mcp-servers/pull/18352) *toro4n (Neo4j graph data modeling)* was **closed**. Its labels include `non-github-url` and `missing-glama`. The entry points to a hosted endpoint (toro4n.com) and not a GitHub repo, which probably explains the closure. The data doesn't say this outright.

New entries proposed in the sampled PRs, by category:
- **Knowledge & Memory:** memtomem ([#18358](https://github.com/punkpeye/awesome-mcp-servers/pull/18358)), ctxkeeper-mcp ([#18355](https://github.com/punkpeye/awesome-mcp-servers/pull/18355)), context-bridge ([#18171](https://github.com/punkpeye/awesome-mcp-servers/pull/18171)), Multiplist ([#15802](https://github.com/punkpeye/awesome-mcp-servers/pull/15802))
- **Finance & Fintech:** mangrove-agent ([#17303](https://github.com/punkpeye/awesome-mcp-servers/pull/17303)), open-finance-skills ([#17629](https://github.com/punkpeye/awesome-mcp-servers/pull/17629))
- **Databases / Data Platforms:** dynobase-mcp ([#18362](https://github.com/punkpeye/awesome-mcp-servers/pull/18362)), biztory-tableau-knowledge-mcp ([#18356](https://github.com/punkpeye/awesome-mcp-servers/pull/18356)), mcp-server-ava ([#18341](https://github.com/punkpeye/awesome-mcp-servers/pull/18341))
- **Communication:** spacemail-mcp ([#18361](https://github.com/punkpeye/awesome-mcp-servers/pull/18361))
- **Security:** GoMobSec ([#18360](https://github.com/punkpeye/awesome-mcp-servers/pull/18360))
- **Search & Data Extraction:** stophy ([#18357](https://github.com/punkpeye/awesome-mcp-servers/pull/18357))
- **Multimedia:** kodecz ([#18354](https://github.com/punkpeye/awesome-mcp-servers/pull/18354)), avclabs/media-mcp ([#16341](https://github.com/punkpeye/awesome-mcp-servers/pull/16341))
- **Developer Tools, Embedded, File Systems and Aggregators:** Binnacle ([#18353](https://github.com/punkpeye/awesome-mcp-servers/pull/18353)), harald ([#18359](https://github.com/punkpeye/awesome-mcp-servers/pull/18359)), tinytoolbox ([#18152](https://github.com/punkpeye/awesome-mcp-servers/pull/18152)), novai-python ([#16106](https://github.com/punkpeye/awesome-mcp-servers/pull/16106))

## 4. Community Hot Topics
Comment counts are unavailable. Every PR shows "Comments: undefined" and 0 👍, so I can't rank by discussion. Themes that do show up in the PRs:
- **Agent memory and context:** four of the 20 PRs (#18358, #18355, #18171, #15802) add local-first or portable memory servers for coding agents. Contributors want durable, user-owned context that works across Claude Code, ChatGPT and Cursor.
- **Vertical and domain servers:** finance and crypto trading ([#17303](https://github.com/punkpeye/awesome-mcp-servers/pull/17303)), mobile security scanning ([#18360](https://github.com/punkpeye/awesome-mcp-servers/pull/18360)), and DynamoDB and Tableau tooling.
- **Hosted or remote MCP:** tinytoolbox ([#18152](https://github.com/punkpeye/awesome-mcp-servers/pull/18152)) and toro4n offer remote endpoints. This stretches a list built around GitHub repos.
- **Agent-authored submissions:** the 🤖 markers and the "prepared by an AI coding agent" disclosure in [#18357](https://github.com/punkpeye/awesome-mcp-servers/pull/18357) show that automation is now a main source of contributions.

## 5. Bugs & Stability
No issues were reported and no bug-fix PRs appear in the sample. The only correctness-related change is [#17467](https://github.com/punkpeye/awesome-mcp-servers/pull/17467), which updates the GridPin coverage list (adds US, Canada and Mexico). It carries the `duplicate` label, so it may overlap with another PR or an existing entry.

## 6. Feature Requests & Roadmap Signals
There are no feature requests. Signals about the list itself, inferred from the labels:
- Automated validation labels (`has-emoji`, `valid-name`, `has-glama`, `missing-glama`, `missing-emoji`, `non-github-url`) show that a bot checks submissions against contribution rules. Glama listing and emoji tagging appear to be required.
- Pressure for more categories or subsections may build. Memory, finance and developer-tooling submissions are numerous.
- Policy on remote-only servers (no GitHub repo) will likely need to be settled, given #18352 and #18152.

## 7. User Feedback Summary
Contributors' feedback is only implicit. They stress that servers are local-first, stdio-based, open-source (MIT or Apache-2.0) and cross-platform. Common pain points they describe are agent context loss, token cost (token-budgeted context packs in #18355 and #18353) and fragmented history across tools. Several PRs cite alphabetical placement, so contributors know the ordering rule. No complaints about the repo or its process appear in the data.

## 8. Backlog Watch
Several open PRs have waited weeks with recent updates but no visible resolution:
- [#15802](https://github.com/punkpeye/awesome-mcp-servers/pull/15802) Multiplist, opened 2026-10-06 (about 4 weeks)
- [#16106](https://github.com/punkpeye/awesome-mcp-servers/pull/16106) novai-python, opened 2026-10-10
- [#16341](https://github.com/punkpeye/awesome-mcp-servers/pull/16341) avclabs/media-mcp, opened 2026-10-13
- [#17303](https://github.com/punkpeye/awesome-mcp-servers/pull/17303) mangrove-agent, opened 2026-10-22
- [#17467](https://github.com/punkpeye/awesome-mcp-servers/pull/17467) GridPin update, opened 2026-10-24, flagged `duplicate` and still open

Maintainers should look at these. With 121 open PRs and intake rising, the queue will keep growing unless triage is automated further, for example by auto-closing PRs labelled `duplicate` or `missing-glama`.

**Health assessment:** the community is very active, but maintainer throughput is the bottleneck. No bugs or releases were recorded. The data is limited because comment and reaction counts are missing.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-03

## 1. Today's Overview
The registry is in a high-throughput intake phase. In the last 24h there were 50 PRs updated (48 open, 2 merged/closed), 2 issues updated, and no releases. Nearly all activity is new-server submissions, mostly **remote (Streamable HTTP)** entries. Many were opened on 2026-11-02. Comment counts are not available in the data (shown as `undefined`) and reactions are 0 everywhere, so engagement is not measurable. Merge throughput looks low compared with submission volume, so the review queue is growing.

## 2. Releases
No new releases.

## 3. Project Progress
Only one closed PR is visible in the sampled data:
- [#4391](https://github.com/docker/mcp-registry/pull/4391) `chore: update pin for neo4j` was closed. It is an automated pin-update commit from `mcp-registry-bot[bot]`, created 2026-07-11. It was closed rather than merged, probably because it was superseded or stale. The data doesn't say.

The second merged/closed PR is not among the 20 shown, so I can't describe it. No feature or fix PRs were merged in the visible data.

## 4. Community Hot Topics
Comment and reaction data are unavailable, so "hot" is judged by recent updates and by theme. I'm not drawing conclusions about engagement from those fields.

**Remote MCP servers are the dominant theme.** These submissions were created or updated 2026-11-02:
- [#6488](https://github.com/docker/mcp-registry/pull/6488) Youanai Social and Docs: two servers with OAuth 2.1 (PKCE, dynamic client registration), 21 tools.
- [#6487](https://github.com/docker/mcp-registry/pull/6487) Stophy: web, social, product and place search.
- [#6486](https://github.com/docker/mcp-registry/pull/6486) LurkAPI: no source repository.
- [#6485](https://github.com/docker/mcp-registry/pull/6485) Mobbin: remote OAuth.
- [#6483](https://github.com/docker/mcp-registry/pull/6483) ThreatCluster: threat intelligence.
- [#6482](https://github.com/docker/mcp-registry/pull/6482) Tempost: YouTube publishing with OAuth.
- [#6481](https://github.com/docker/mcp-registry/pull/6481) Faxend: faxing with an API key.
- [#6480](https://github.com/docker/mcp-registry/pull/6480) Untitled UI.
- [#6479](https://github.com/docker/mcp-registry/pull/6479) Versum: no auth.
- [#6478](https://github.com/docker/mcp-registry/pull/6478) Model Salt remote.

Underlying needs:
- Vendors want distribution through Docker's catalog without shipping containers.
- Several are closed source, and some list no source repo at all (LurkAPI [#6486](https://github.com/docker/mcp-registry/pull/6486), Tailwind [#5764](https://github.com/docker/mcp-registry/pull/5764), Untitled UI [#6480](https://github.com/docker/mcp-registry/pull/6480)). This probably tests how the registry's open-source requirement applies to hosted servers.
- Categories span marketing, SEO, security, crypto, proxies and scraping.

**Submitters with several PRs open:**
- `quantumproxies` has two: [#4824](https://github.com/docker/mcp-registry/pull/4824) and [#4823](https://github.com/docker/mcp-registry/pull/4823).
- `obzena-llc` has two: [#6482](https://github.com/docker/mcp-registry/pull/6482) and [#6481](https://github.com/docker/mcp-registry/pull/6481).
- [#5799](https://github.com/docker/mcp-registry/pull/5799) bundles four SEO and security servers in one PR.

## 5. Bugs & Stability
No crashes or regressions were reported. One maintenance and security concern:
1. **Stale pinned commit with a failing security review**: [#6484](https://github.com/docker/mcp-registry/issues/6484) reports that `servers/atlassian/server.yaml` pins `sooperset/mcp-atlassian` to a commit about 4 months old. Updates are reportedly blocked because the security review failed. This leaves users on an outdated build. No linked fix PR is visible. The related automated pin-update PR in the data (#4391, neo4j) was closed, which suggests the pin-bot flow may not always complete.

## 6. Feature Requests & Roadmap Signals
- [#6473](https://github.com/docker/mcp-registry/issues/6473) asks to add a Spring Boot docs MCP server (`tky0065/springdocs-mcp`). It follows the standard submission template and the author ticked the open-source requirement. It is a likely candidate for acceptance if the review checks pass.
- Beyond individual servers, the volume of remote submissions suggests that remote/OAuth onboarding is the main near-term growth area. Clearer guidance on closed-source hosted servers may follow, but nothing in the data confirms that.

## 7. User Feedback Summary
- Users of the Atlassian entry want fresher versions and a clear path past a failed security review ([#6484](https://github.com/docker/mcp-registry/issues/6484)).
- Submitters often add notes like "no test credentials needed" (#6479) or explain their auth model. This suggests they expect reviewers to need working access, and that reviewers are asking for it.
- There is no satisfaction signal in the data, since no comments or reactions are present.

## 8. Backlog Watch
These open PRs are weeks or months old and still show activity, so they need maintainer attention:
- [#4547](https://github.com/docker/mcp-registry/pull/4547) mcp-graphql-enhanced, opened 2026-07-26 (about 3 months).
- [#4824](https://github.com/docker/mcp-registry/pull/4824) and [#4823](https://github.com/docker/mcp-registry/pull/4823) QuantumProxies and QuanticData, opened 2026-08-28.
- [#5026](https://github.com/docker/mcp-registry/pull/5026) Portkey Admin, opened 2026-09-08.
- [#5754](https://github.com/docker/mcp-registry/pull/5754) GridPin, opened 2026-10-16.
- [#5764](https://github.com/docker/mcp-registry/pull/5764) Tailwind, opened 2026-10-16.
- [#5799](https://github.com/docker/mcp-registry/pull/5799) SEO Records bundle, opened 2026-10-17.
- [#6005](https://github.com/docker/mcp-registry/pull/6005) MangroveAI, opened 2026-10-22.
- [#6229](https://github.com/docker/mcp-registry/pull/6229) PieterPost, opened 2026-10-28.
- Issue [#6484](https://github.com/docker/mcp-registry/issues/6484) should be prioritized because of the security-review impact.

**Health assessment:** Contributor interest is strong, but review and merge throughput is lagging. Submissions from July are still open. Visible merges are near zero, and the failing security review on a flagship entry (Atlassian) adds to the concern. Maintainers could consider triage labels, an SLA, and a published policy for closed-source remote servers.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) Digest, 2026-11-03

## 1. Today's Overview
Activity is low to moderate. 2 issues and 8 PRs were updated in the last 24 hours, with no new releases. Most PR traffic is routine: two automated SHA-bump PRs from github-actions[bot] are open, and the other six PRs were closed. Four of those six are low-value `SECURITY.md`/README PRs from one account. Only one PR is a substantive fix, the Telegram delivery fix (#6973). It was closed rather than merged, so the matching bug (#4308) is still open.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs are confirmed merged in this window. The data shows six closed PRs, and none is marked merged.

- **[#6973](https://github.com/anthropics/claude-plugins-official/pull/6973)** `fix(telegram): await inbound delivery so a stalled MCP transport does not ack-and-drop messages`. It changes `handleInbound()` in `external_plugins/telegram/server.ts` to await delivery instead of using fire-and-forget `mcp.notification(...).catch(log)`. grammy acks updates to Telegram on the next `getUpdates`, so a stalled transport can drop messages. It is closed, and the data doesn't say whether it was merged or rejected. Maintainers should confirm whether the fix landed some other way.
- **Open automated bumps**, both validated with `claude plugin validate`:
  - [#6977](https://github.com/anthropics/claude-plugins-official/pull/6977) `vibe-prospecting`: `ca43f6d9` → `510710bb`
  - [#6976](https://github.com/anthropics/claude-plugins-official/pull/6976) `sumup`: `6922c705` → `7ab7e65c`
- **Closed noise PRs**, all from `kerrrang9214-tech`: [#6970](https://github.com/anthropics/claude-plugins-official/pull/6970), [#6971](https://github.com/anthropics/claude-plugins-official/pull/6971), [#6972](https://github.com/anthropics/claude-plugins-official/pull/6972), [#6974](https://github.com/anthropics/claude-plugins-official/pull/6974) (each a `SECURITY.md` creation) and [#6975](https://github.com/anthropics/claude-plugins-official/pull/6975) (README update). This looks like repeated spam-style contributions, and they were closed the same day.

## 4. Community Hot Topics
Engagement is thin. No item has any 👍, and comment counts are low.
- **[#4308](https://github.com/anthropics/claude-plugins-official/issues/4308)** (Telegram inbound loss, 2 comments) is the most discussed item. It reflects a need for reliable message delivery in channel plugins, with failures visible and recoverable rather than silent.
- **[#4379](https://github.com/anthropics/claude-plugins-official/issues/4379)** (eval-viewer HTML rendering, 1 comment) reflects skill authors who produce rendered HTML deliverables, such as quizzes, dashboards and slides, and need to review them as rendered pages.

## 5. Bugs & Stability
Ranked by severity:
1. **[#4308](https://github.com/anthropics/claude-plugins-official/issues/4308): Telegram plugin silently loses inbound messages (high).** This is a data-loss bug. Updates are acked to Telegram unconditionally, and a failed `mcp.notification()` delivery is only written to stderr (`server.ts` ~L983). The user never learns that a message was lost. A candidate fix exists in [#6973](https://github.com/anthropics/claude-plugins-official/pull/6973) but is closed. The issue was opened 2026-07-21, so it has been open about 3.5 months.
2. **[#4379](https://github.com/anthropics/claude-plugins-official/issues/4379): eval-viewer shows `.html` outputs as raw source in a `<pre>` block (medium).** This is a functional gap, not a crash. The reporter suggests a sandboxed iframe. No fix PR is linked.

## 6. Feature Requests & Roadmap Signals
- **Sandboxed iframe rendering in eval-viewer** ([#4379](https://github.com/anthropics/claude-plugins-official/issues/4379)). It is framed as a bug but works as a feature request. It is a contained change in `generate_review.py` and `viewer.html`. The sandboxing requirement adds some security review, so it is plausible for an upcoming version but not certain.
- **Reliable delivery semantics for the Telegram channel**: await delivery and only ack on success. This is likely to be fixed, given the bug's severity and the existing community patch.

## 7. User Feedback Summary
- Plugin authors want trustworthy messaging channels. Silent failure is the main complaint, because failures reach only stderr.
- Skill developers want the eval tooling to match their real deliverables, rendered HTML rather than source.
- No satisfaction or dissatisfaction signals appear beyond these two bug reports. Both have low engagement, so they point to niche but real pain points.

## 8. Backlog Watch
- **[#4308](https://github.com/anthropics/claude-plugins-official/issues/4308)** has been open since 2026-07-21 (about 3.5 months). It is a data-loss issue with a proposed fix in the closed PR #6973. It needs a maintainer decision on whether to reopen or adopt that fix.
- **[#4379](https://github.com/anthropics/claude-plugins-official/issues/4379)** has been open since 2026-07-22 with 1 comment and no maintainer response visible in the data.
- **Automated bumps** [#6976](https://github.com/anthropics/claude-plugins-official/pull/6976) and [#6977](https://github.com/anthropics/claude-plugins-official/pull/6977) are open and awaiting review. They are low risk because validation already passed.
- **Repeat spam PRs.** Four near-identical `SECURITY.md` PRs from one account in one day suggest the repo may benefit from contributor-abuse controls or a PR template.

**Project health:** Maintenance is steady, with automated plugin SHA bumps flowing and spam handled quickly. Human-driven bug resolution is slow, and a known message-loss bug has stayed open for months.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Project Digest, 2026-11-03

## 1. Today's Overview
The project had a quiet, submission-driven day. 18 issues were updated in the last 24h (16 open, 2 closed). There were no PRs and no releases. Almost all traffic is new resource submissions through the issue form, and 12 of the 16 open issues were created on 2026-11-02. Each carries the `validation-passed` label and has one automated comment. Activity looks healthy on the contributor side, but the lack of PR activity means nothing was merged today. Curation throughput is the likely bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were updated, merged or closed today, so no features or fixes advanced. The only closures were two auto-closed submissions, both from the same author (zirkelc):
- [#3421 Agent History](https://github.com/hesreallyhim/awesome-claude-code/issues/3421) (Mods)
- [#3420 Agent Journal](https://github.com/hesreallyhim/awesome-claude-code/issues/3420) (Memory & Context Persistence)

Both carry `validation-pending` and `auto-closed`. The data doesn't say why they were closed, so I can't tell whether it was a validation problem or a resubmission.

## 4. Community Hot Topics
No issue stands out. Every item has 0–2 comments and 0 👍. The most-discussed are the three older submissions, each with 2 comments and recently refreshed:
- [#2607 OpenOutreach](https://github.com/hesreallyhim/awesome-claude-code/issues/2607) (Start Here). A self-hosted B2B lead-finder CLI, open since 2026-08-22.
- [#3295 Weir](https://github.com/hesreallyhim/awesome-claude-code/issues/3295) (Security). Plants fake credentials ("canaries") to test agents you build.
- [#3231 Agent-Friendly Skill](https://github.com/hesreallyhim/awesome-claude-code/issues/3231) (Skills). Scores a repo on 16 static checks.

Submission themes today show what contributors are building:
- **Memory and context persistence:** [#3414 Synapse](https://github.com/hesreallyhim/awesome-claude-code/issues/3414), [#3405 dreamd](https://github.com/hesreallyhim/awesome-claude-code/issues/3405), [#3409 brain-core](https://github.com/hesreallyhim/awesome-claude-code/issues/3409), plus the closed #3420. This is the biggest cluster, which points to demand for cross-session memory, mostly delivered as local MCP servers.
- **Observability and usage monitoring:** [#3408 Margin](https://github.com/hesreallyhim/awesome-claude-code/issues/3408) (usage and cost tray app), [#3407 My Office](https://github.com/hesreallyhim/awesome-claude-code/issues/3407) (3D session monitor).
- **Skills and plugins:** [#3419 Lidnight](https://github.com/hesreallyhim/awesome-claude-code/issues/3419), [#3418 ScrapingBee CLI](https://github.com/hesreallyhim/awesome-claude-code/issues/3418), [#3406 agent-config](https://github.com/hesreallyhim/awesome-claude-code/issues/3406), [#3412 Proxmox Writing Style](https://github.com/hesreallyhim/awesome-claude-code/issues/3412).
- **Infrastructure and control planes:** [#3423 Binnacle](https://github.com/hesreallyhim/awesome-claude-code/issues/3423), [#3417 cc-bridge](https://github.com/hesreallyhim/awesome-claude-code/issues/3417), [#3416 Headroom](https://github.com/hesreallyhim/awesome-claude-code/issues/3416) (a local proxy, probably for context or token savings).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The one process-level problem is a validation failure:
- [#3409 brain-core](https://github.com/hesreallyhim/awesome-claude-code/issues/3409) is labeled `validation-failed`. It is the only failed submission among the open items, and the author needs to fix it or the maintainers need to review it.

There is also a minor template inconsistency. [#3422 vibe-ui-suite](https://github.com/hesreallyhim/awesome-claude-code/issues/3422) has no validation label and 0 comments, and its form field reads "Resource Link" where the others read "Link". It may have used an older or different template, or the validator may not have run on it yet. No fix PRs exist, and none are needed for any of this.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The category mix suggests where the list may grow:
- Subcategories such as "Observability & Monitoring > Usage & Cost" and "Session Monitors" are already in use. Continued submissions could justify more granular sections.
- Memory, usage monitoring and agent control planes are all drawing repeat submissions, so those sections are likely to expand.
- A few tools also target Codex and pi ([#3420](https://github.com/hesreallyhim/awesome-claude-code/issues/3420), [#3423](https://github.com/hesreallyhim/awesome-claude-code/issues/3423)). That suggests demand for cross-agent tooling, which could raise scope questions for a Claude-specific list.

## 7. User Feedback Summary
Contributors give no direct feedback on the project. The submissions point to these needs:
- Persistent memory that stays local and private, as plain files or git-crypt-encrypted.
- Visibility into usage limits and cost, and into several concurrent sessions.
- Security testing for agents.
- Better handling of repo hygiene and style.
- Self-hosted or local-first tools rather than SaaS.

The 1-comment pattern suggests that the only interaction on most submissions is the validation bot. I see no sign of human review in this data.

## 8. Backlog Watch
- [#2607 OpenOutreach](https://github.com/hesreallyhim/awesome-claude-code/issues/2607) has been open about 10 weeks (since 2026-08-22) with `validation-passed` and still no resolution.
- [#3231 Agent-Friendly Skill](https://github.com/hesreallyhim/awesome-claude-code/issues/3231) has been open since 2026-10-23, and [#3295 Weir](https://github.com/hesreallyhim/awesome-claude-code/issues/3295) since 2026-10-27. Both passed validation and wait on maintainer review.
- [#3409 brain-core](https://github.com/hesreallyhim/awesome-claude-code/issues/3409) failed validation and needs a decision.
- [#3422 vibe-ui-suite](https://github.com/hesreallyhim/awesome-claude-code/issues/3422) is unvalidated and should be checked for template or bot problems.
- The 12 or so validated submissions from 2026-11-01 and 2026-11-02 add to the queue. With zero PRs today, the gap between validation and inclusion is the main health risk.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest: 2026-11-03

## 1. Today's Overview
Awesome Agent Skills (VoltAgent) saw high triage activity in the last 24h. 35 PRs were updated, and 30 of them were merged or closed. Only 5 remain open, and 2 issues were touched, both now closed. No releases shipped, which is normal for a curated list. The maintainers appear to have cleared a batch of submissions from 2026-10-28 to 10-31. Inflow of new submissions continues, with four new PRs opened on 11-02. The data does not show whether the closed PRs were merged or rejected, so "closed" is used throughout.

## 2. Releases
None.

## 3. Project Progress
Roughly 30 PRs were closed in one sweep. The 20 shown cover these categories:

- **Development and Testing**
  - [#1300 codecall](https://github.com/VoltAgent/awesome-agent-skills/pull/1300) teaches the reasoning behind code changes.
  - [#1311 mesh-gradient-generation](https://github.com/VoltAgent/awesome-agent-skills/pull/1311)
  - [#1305 agent-superpowers](https://github.com/VoltAgent/awesome-agent-skills/pull/1305) covers TDD, fuzzing and sandboxing.
  - [#1306 Quinnod345/ponder](https://github.com/VoltAgent/awesome-agent-skills/pull/1306) is a code and UI review skill. It was superseded by a new submission, #1336, with a different path and description.
  - [#1286 desplega-ai/agent-swarm](https://github.com/VoltAgent/awesome-agent-skills/pull/1286) had an empty description.
- **Specialized Domains**
  - [#1304 transcreva](https://github.com/VoltAgent/awesome-agent-skills/pull/1304)
  - [#1312 Ludo-AI/ludo](https://github.com/VoltAgent/awesome-agent-skills/pull/1312)
  - [#1313 pictograph-cv](https://github.com/VoltAgent/awesome-agent-skills/pull/1313)
  - [#1320 israel-apartment-search](https://github.com/VoltAgent/awesome-agent-skills/pull/1320)
  - [#1321 signbee/skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1321)
  - [#1323 whobot-phonecall-skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1323)
- **Productivity and Collaboration**
  - [#1314 decipher](https://github.com/VoltAgent/awesome-agent-skills/pull/1314)
- **Marketing**
  - [#1315 nabit-codex-plugin](https://github.com/VoltAgent/awesome-agent-skills/pull/1315)
- **Context Engineering**
  - [#1319 agent-doc-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1319)
- **Official team section**
  - [#1217 browser-use](https://github.com/VoltAgent/awesome-agent-skills/pull/1217) was titled "[PR-in-review]" and was open for about 18 days before closing.

Issues closed:
- [#1169](https://github.com/VoltAgent/awesome-agent-skills/issues/1169) reported a dead link (`axelfreeman/marketing-mindset`), open since 10-07 and closed on 11-02.
- [#1326 MemTether](https://github.com/VoltAgent/awesome-agent-skills/issues/1326) was an add-request, closed within about a day.

## 4. Community Hot Topics
No item has comments or reactions. Every item shows 0 👍, and comment counts are 0 or undefined. Engagement is therefore better read from topic clustering than from discussion:

- **Agent-memory and ledger tooling.** Examples are MemTether ([#1326](https://github.com/VoltAgent/awesome-agent-skills/issues/1326)), Taskade TASKS.md ([#1317](https://github.com/VoltAgent/awesome-agent-skills/pull/1317)) and Ponder's "deliberative audit ledger" ([#1336](https://github.com/VoltAgent/awesome-agent-skills/pull/1336)). Submitters want auditability and persistent state for agents.
- **Vendor-official skills.** Pachca ([#1333](https://github.com/VoltAgent/awesome-agent-skills/pull/1333)), Taskade, browser-use and WhoBot all present themselves as official. Vendors treat the list as a distribution channel.
- **Marketing and SEO and writing.** Humanizer ([#1335](https://github.com/VoltAgent/awesome-agent-skills/pull/1335)) and schema-markup ([#1334](https://github.com/VoltAgent/awesome-agent-skills/pull/1334)) are in this group.

## 5. Bugs & Stability
No software bugs were reported. This is a content repository.
- Low severity: a dead link in the list, [#1169](https://github.com/VoltAgent/awesome-agent-skills/issues/1169), which is closed. It signals the need for periodic link checks. A fix is not shown in the data.

## 6. Feature Requests & Roadmap Signals
- Requests are submissions for new entries, not features. The five open PRs (#1333, #1334, #1335, #1336, #1317) are the likely next additions. Each has the right category and description length, so they are probably quick to process.
- Possible demand for the new categories hinted at by "team sections" such as the browser-use submission. This is only a signal, not a stated roadmap.
- Possible demand for the list to track skill liveness, given the dead-link report.

## 7. User Feedback Summary
- Contributors follow `CONTRIBUTING.md`. Several PRs explicitly cite the 10-word description limit and the end-of-section placement rule.
- Some submitters are using AI tooling to generate PRs, as with [#1314](https://github.com/VoltAgent/awesome-agent-skills/pull/1314), which carries a "Generated with Claude Code" footer. This implies review load may grow.
- Duplicate or re-submitted entries occur (ponder #1306 and #1336).
- Maintainers did not leave comments in the visible data. Submitters get no feedback on why a PR was closed, which may leave them unsure about the outcome.

## 8. Backlog Watch
- [#1317 Taskade TASKS.md](https://github.com/VoltAgent/awesome-agent-skills/pull/1317) has been open since 10-31. Its description says it is a spec plus a skill, "not an MCP server", which may need a maintainer's call on fit.
- [#1336](https://github.com/VoltAgent/awesome-agent-skills/pull/1336) should be checked against the earlier closed #1306 to avoid duplicate listings.
- The remaining 15 PRs from the 35 updated are not visible in this data. Maintainers should confirm none were closed without explanation.
- No older issues surfaced, so the backlog looks small in this window. Counts for the full open backlog are not provided.

**Health assessment:** Project health is good. Triage is fast, with a large batch cleared in one day. Submissions keep arriving, and there are no reported defects. The main gaps are visible communication on closures and link maintenance.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
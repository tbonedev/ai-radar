# MCP Ecosystem Digest 2026-11-10

> Issues: 8 | PRs: 2 | Projects covered: 7 | Generated: 2026-11-10 15:23 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-10

## 1. Today's Overview
Activity was low and maintenance-oriented: 8 issues and 2 PRs were updated in the last 24h, with no new releases. Most movement was housekeeping on the `v2` line: a Dependabot-driven `minimatch` fix, closing of spam and off-topic issues, and a pending Changesets release PR. Maintainer `cliffhall` was the only visible active contributor, merging a fix and filing a follow-up on the same day. Overall health looks stable, though a small set of user-reported bugs and docs fixes is waiting for attention.

## 2. Releases
No new releases. [PR #5470](https://github.com/modelcontextprotocol/servers/pull/5470) ("chore: version packages") is still open and is the vehicle for the next release. Its scope is not shown in the data.

## 3. Project Progress
- **[PR #5507](https://github.com/modelcontextprotocol/servers/pull/5507)**: closed. It adds a root `overrides` entry pinning `minimatch` to `^11.0.1`, which closes [#5481](https://github.com/modelcontextprotocol/servers/issues/5481). The hoisted copy at 10.2.5 comes from `eslint`, `@eslint/config-array` and `@typescript-eslint/typescript-estree`, which all still declare `^10.x`. This resolves a security advisory (GHSA-g3hv-75wg-m249) in lint tooling.
- **[#5481](https://github.com/modelcontextprotocol/servers/issues/5481)**: closed by the PR above.
- **[#5482](https://github.com/modelcontextprotocol/servers/issues/5482)**: closed. The question was about the 2.3.0 version of `server-everything` not appearing on npm.
- **[#4006](https://github.com/modelcontextprotocol/servers/issues/4006)**: closed. A community server submission ("solve", a Turnstile CAPTCHA solver) was dealt with after about 6 months.
- **[#5486](https://github.com/modelcontextprotocol/servers/issues/5486)**: closed. A third-party skills submission (CrakSEO).
- **[#5484](https://github.com/modelcontextprotocol/servers/issues/5484)**: closed. A content-free issue, most likely spam or a misposted comment.

## 4. Community Hot Topics
Engagement is thin. No item has reactions, and the maximum is 4 comments.
- **[#5483](https://github.com/modelcontextprotocol/servers/issues/5483)** (4 comments): fixes stale `--db-path` comments in the fetch and git Dockerfiles and clarifies the git README. The underlying need is accurate Docker documentation. Stale flags mislead anyone running the images.
- **[#5485](https://github.com/modelcontextprotocol/servers/issues/5485)** (2 comments): the memory server leaves lock files behind. The need is reliable cleanup for orchestrated or autonomous agent setups.
- **[#5486](https://github.com/modelcontextprotocol/servers/issues/5486)** (2 comments): shows continued interest from third parties in listing MCP skills and servers in this repo.

## 5. Bugs & Stability
1. **[#5485](https://github.com/modelcontextprotocol/servers/issues/5485)** (open, `bug`, `server-memory`, `v2`): `server-memory` 2.1.0 over stdio does not clean up active lock files on exit or termination signals. This can leave stale locks after a crash or SIGTERM, which matters for long-running agent orchestrators. No fix PR is linked.
2. **[#5506](https://github.com/modelcontextprotocol/servers/issues/5506)** (open, `chore`): the dependabot-alerts sweep (`scripts/dependabot-alerts.mjs`) produces the wrong fix and scope label for a hoisted copy that no declared range resolves to. This is tooling, not product, and #5481 is the live example. #5507 worked around the immediate case, but the script bug remains.
3. **[#5482](https://github.com/modelcontextprotocol/servers/issues/5482)** (closed): a possible npm publication gap for `server-everything`. Closed without detail in the data.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests today. Signals for the next version:
- Signal-handling and lock-file cleanup in `server-memory` (#5485) is a small, tractable fix and a likely candidate for the next patch release.
- Docker and README documentation corrections (#5483) are low-risk and likely to merge quickly.
- The pending version PR (#5470) and the `minimatch` override suggest a `v2` release is being staged.

## 7. User Feedback Summary
- Users running servers through Docker and `npx` hit friction from stale documentation (#5483) and uncertainty about published versions (#5482).
- Agent-orchestration users (Claude Desktop and autonomous orchestrators) depend on clean process lifecycle behaviour (#5485).
- Inbound submissions (#4006, #5486) show an active ecosystem, but they add triage load for maintainers.

## 8. Backlog Watch
- **[#5483](https://github.com/modelcontextprotocol/servers/issues/5483)**: open since 2026-11-06 with 4 comments. It is a docs fix across several servers and needs a maintainer decision or merge.
- **[#5485](https://github.com/modelcontextprotocol/servers/issues/5485)**: a confirmed bug open since 2026-11-06, with no fix PR and no maintainer assignment visible.
- **[#5470](https://github.com/modelcontextprotocol/servers/pull/5470)**: the release PR has been open since 2026-11-05. It should be merged, or the reason for the hold made clear.
- **[#5506](https://github.com/modelcontextprotocol/servers/issues/5506)**: new today. The alert-sweep script needs a fix so it does not generate more incorrect auto-filed issues.
- Triage note: #4006 sat open for about 6 months before closure, so community-submission handling is slow.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP Ecosystem, 2026-11-10

## 1. Ecosystem Overview
The projects in this batch are the infrastructure and distribution layer around agent tooling (MCP servers, registries, plugin directories, curated lists), not agent runtimes. Most visible activity is inbound submissions: a few hundred PRs and issues across the curated lists and registries, against a handful of maintainer-driven commits. Three themes recur: throughput bottlenecks in review and merge, trust and security of third-party servers and skills, and a shift toward remote (hosted) MCP servers. Official repos (Servers, Registry, Plugins) are maintained mainly by one or two people, and that shows in their output.

## 2. Activity Comparison

Counts are for the last 24h. Where a digest only covered a subset (top 20), the figure is a lower bound. Health scores are my own judgment from the digests, not a measured metric.

| Project | Issues updated | PRs updated | Release | Health (1–5) | Note |
|---|---|---|---|---|---|
| MCP Servers | 8 | 2 | None (release PR #5470 pending) | 3 | Low activity, one maintainer, small bugs unattended |
| MCP Registry | 3 | 10 (all closed) | v1.8.9 | 4 | Strong ops cadence, namespace issue with a 19 Nov deadline |
| Awesome MCP Servers | 0 | 137 (131 open) | None | 3 | Strong demand, review queue growing |
| Docker MCP Registry | 2 | 50 (all open, 0 merged) | None | 2 | No merges, unresolved catalog bugs, stale bot PRs up to 9 months old |
| Claude Plugins (official) | 7 | 32 (13 closed) | None | 4 | Active maintainer, policy docs lag (#7024) |
| Awesome Claude Code | 23 | 0 | None | 3 | Automated intake works, no visible human activity |
| Awesome Agent Skills | 3 (all closed) | 4 (all open) | None | 3 | Light and steady, small queue |

## 3. MCP Servers's Position

**Advantages**
- It is the reference implementation, with a `v2` line that is actively maintained. Work on `v2` includes dependency security (#5507) and a staged release (#5470).
- Dependabot-driven fixes and an alert-sweep script show security hygiene in the tooling.

**Technical approach differences**
- It ships code (server implementations) and is the only project here with a package-release flow (Changesets). The registries ship metadata and infrastructure, and the lists ship links.
- Its bugs are runtime and lifecycle issues, such as lock files not cleaned up on exit (#5485) and stale Docker docs (#5483). Peers' problems are scale, catalog integrity and policy.

**Community size**
- It is the smallest by activity: 10 updated items, against 52 for Docker MCP Registry and 137 for Awesome MCP Servers. No item has reactions and the maximum is 4 comments.
- This is a narrow 24h window. It says little about installed base, which these digests don't measure.
- The one visible active contributor, `cliffhall`, is a bus-factor risk.

## 4. Shared Technical Focus Areas

| Need | Projects | Detail |
|---|---|---|
| Trust and verification | Plugins (#7024), Registry (#1778, #1834), Agent Skills (#1388), Awesome MCP (patchbay), Awesome Claude Code (security category) | Verified-org gating, namespace ownership after domain changes, skill vetting, OAuth auditing |
| Review and merge throughput | Awesome MCP, Docker MCP Registry, Plugins (bot PRs), Awesome Agent Skills, Awesome Claude Code | Growing queues, and calls for auto-merge, batching and auto-closing stale PRs |
| Automation reliability | Docker MCP Registry (#6875), MCP Servers (#5506), Registry (#1838), Awesome Claude Code (#3571) | Bots that fail or misfire: stuck CI, wrong labels, false alerts, premature closures |
| Remote and hosted servers | Docker MCP Registry (8 remote PRs today), Registry (remote URL reclaim), Awesome MCP | Streamable HTTP and OAuth remote entries are becoming a main route |
| Windows and platform robustness | Plugins (#5927, #7049) | Encoding and shim problems |
| Lifecycle and process hygiene | MCP Servers (#5485), Plugins (#6609 auth) | Cleanup on exit, OAuth edge cases for long-running agents |
| Duplicate or off-topic submissions | Servers, Agent Skills, Registry, Awesome Claude Code | CrakSEO appears in four projects (#5486, #1815, #1369/#1371, and #3581/#3582 appear to be similar duplicate-style submissions, though only the first three are explicitly CrakSEO) |

## 5. Differentiation Analysis

- **Reference code (MCP Servers):** targets server authors and users running servers via `npx` or Docker.
- **Canonical registry (MCP Registry):** serves publishers and client developers. It is a namespace and identity system with a production scaling push (2–6 replicas, pool and cache tuning).
- **Container catalog (Docker MCP Registry):** serves users who want pinned, containerised servers. It includes local images and a growing share of remote entries.
- **Vendor plugin marketplace (Claude Plugins):** serves Claude users and partners. It has partner SHA-bump automation, a security-guidance plugin and an enforced Verified-org policy.
- **Curated lists (Awesome MCP, Awesome Claude Code, Awesome Agent Skills):** are discovery layers. They differ in intake: bot-labelled PRs (Awesome MCP, with an explicit agent-PR fast track), issue-form submissions with validation (Awesome Claude Code), and plain PRs (Agent Skills).

## 6. Community Momentum & Maturity

- **Rapidly iterating:** MCP Registry (v1.8.9 plus five staged infra PRs in a day) and Claude Plugins (four open security-guidance PRs from one maintainer).
- **High inflow, throttled output:** Awesome MCP Servers (131 open) and Docker MCP Registry (0 merges of 50). Demand exceeds review capacity.
- **Stabilizing or maintenance mode:** MCP Servers (housekeeping and dependency fixes) and Awesome Agent Skills (small queue).
- **Automation-driven:** Awesome Claude Code (23 submissions, with 20 passing validation), which runs without visible human activity in the window.
- **Caveat:** a single day's data cannot establish trends. Older backlog is mostly not visible.

## 7. Trend Signals

1. **Trust is now a gating concern.** Verified-org policy (#7024), namespace takeover risk (#1778), skill vetting (#1388) and guardrail tools (yolonot, Agentmetry) point the same way. Developers should plan for signed identity, domain-verified namespaces and auditable hooks.
2. **Remote MCP is overtaking local images.** Docker's registry shows eight hosted-server submissions today. Expect OAuth and Streamable HTTP to be the default publishing path, so server authors should prioritise these over container-only distribution.
3. **Curation is hitting a scaling limit.** Several lists and catalogs are saturated, and some already accept agent-authored PRs. Expect more automated validation, auto-merge rules and stale-PR closure, and more agent-generated spam to filter.
4. **Cross-agent tooling.** Awesome Claude Code submissions span Codex, Grok Build and Antigravity. Tooling that targets one CLI only risks losing reach.
5. **Docs lag behaviour.** Stale Docker flags (#5483), the unexplained Verified policy (#7024) and the "no setup" README claim contradicted by #6609 show the same gap. Clear docs are cheap, and they reduce support load.
6. **Operational maturity of the registry layer.** The official registry is investing in autoscaling, caching and restore automation, which suggests growing production load. Registry-dependent clients should expect schema and caching changes, but no breaking change is stated for v1.8.9.

**Time-sensitive item:** Registry issue #1778 has a domain ownership change on 19 Nov 2026 and needs a maintainer decision before then.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Project Digest, 2026-11-10

## 1. Today's Overview
Activity is high on the engineering side and light on the community side. Ten PRs were updated and all ten are closed or merged, none remain open. One release, v1.8.9, shipped. All PR activity comes from one maintainer, rdimitrov, and concerns infrastructure: production autoscaling, database query optimization, staging restore automation and caching. Community traffic is three issues, two open and one closed, and they are namespace and listing housekeeping. The project looks healthy and operationally focused, with a clear capacity-scaling push under way.

## 2. Releases
**[v1.8.9](https://github.com/modelcontextprotocol/registry)**
- Incremental-sync pagination now selects indexed page keys through an all-status covering index before it fetches payloads. Prepared statement reuse is kept.
- It includes staged production autoscaling configuration and deployment guardrails. Validation and rollout details are in #1840.
- No breaking changes are stated. For operators, the covering index was prebuilt concurrently (#1841), and production app connection pools shrink from 30 to 20.
- The rollout is staged. #1841 prepares pools and keeps the 2–4 replica HPA at 70% CPU. #1842 then activates the new profile.

## 3. Project Progress
All ten PRs are closed, and by their titles and summaries most appear to be merged. The summaries don't state merge status.

**Production capacity (a staged sequence on 11-10):**
- [#1840](https://github.com/modelcontextprotocol/registry/pull/1840): optimizes incremental-sync pages and adds an opt-in `prepare` transition for six-app scaling.
- [#1841](https://github.com/modelcontextprotocol/registry/pull/1841): promotes v1.8.9 and moves pools from 30 to 20 connections.
- [#1842](https://github.com/modelcontextprotocol/registry/pull/1842): enables 2–6 replicas at a 40% CPU target, scaling up by at most 2 pods per 30 s. Scale-down stays conservative.
- [#1843](https://github.com/modelcontextprotocol/registry/pull/1843): allows two apps per worker through preferred anti-affinity and spreads gateway replacements by revision.
- [#1844](https://github.com/modelcontextprotocol/registry/pull/1844): enables that packing profile in production.
- [#1839](https://github.com/modelcontextprotocol/registry/pull/1839): raises the Gateway public listing cache TTL from 30 s to 60 s to cut origin reads.

**Staging reliability (11-09):**
- [#1835](https://github.com/modelcontextprotocol/registry/pull/1835): retires legacy backup assets and adds a weekly staging DB refresh from the production Restic repository.
- [#1836](https://github.com/modelcontextprotocol/registry/pull/1836): finishes restore-reader adoption and watchdog alerting. It works around Cloud Monitoring's 25-hour lookback limit.
- [#1837](https://github.com/modelcontextprotocol/registry/pull/1837): fixes restart from zero replicas and enables a Sunday 06:00 UTC refresh. The live restore completed unattended in about 1m55s.
- [#1838](https://github.com/modelcontextprotocol/registry/pull/1838): guards the watchdog alert against transient missing metrics after a false alarm.

## 4. Community Hot Topics
Engagement is low: no item has more than 3 comments, and none has reactions.
- [#1834](https://github.com/modelcontextprotocol/registry/issues/1834) (3 comments, closed): the Tier 1 Protocol maintainers published under the wrong namespace (`network.tier1protocol/tier1`, while their products live on `.app`). They asked to reclaim the remote URL and deprecate the stale entry. The underlying need is a self-service way to fix a mistaken namespace and release a remote URL.
- [#1778](https://github.com/modelcontextprotocol/registry/issues/1778) (3 comments, open): asks to lock the `com.aiapplyd` namespace before its verifying domain changes owner on 19 Nov 2026. The underlying need is protection against namespace takeover after domain expiry or transfer.
- [#1815](https://github.com/modelcontextprotocol/registry/issues/1815) (2 comments, open): CrakSEO asks to add its MCP connect skills. This is a listing or promotion request.

## 5. Bugs & Stability
No new bugs or crashes were reported by users.
- Internal stability: #1838 fixed a false staging watchdog alert caused by transient metric propagation, and #1837 fixed restart from zero replicas, where Kubernetes omits `spec.replicas`. Both were fixed the same day.
- Risk to watch: v1.8.9 shipped together with a major production scaling change (2–6 replicas, new pool sizes, packing). Regression or capacity signals may follow in the next few days.

## 6. Feature Requests & Roadmap Signals
- Namespace protection or locking, from #1778 and #1834, suggests demand for domain-change handling and namespace reclaim or deprecation tooling. I would not predict a specific release.
- Skill and plugin listing, from #1815, is outside the registry's core scope and is unlikely to be actioned soon.
- The roadmap signal from the PRs is continued work on scalability, caching and operational automation. Further tuning of HPA, pools and cache settings is likely.

## 7. User Feedback Summary
- Publishers have no obvious self-service path for namespace mistakes or stale entries, so they open issues. Examples are a wrong TLD in #1834 and an abandoned namespace in #1778.
- Publishers care about identity and trust, specifically who holds a namespace once domain ownership changes.
- #1778 shows a publisher who migrated to a new namespace and deprecated all six old versions. The migration path works, but cleanup of the old namespace is manual.

## 8. Backlog Watch
- [#1778](https://github.com/modelcontextprotocol/registry/issues/1778) is open and time-sensitive. The domain changes owner on 19 Nov 2026, nine days from today. It needs a maintainer decision soon to avoid a namespace takeover risk.
- [#1815](https://github.com/modelcontextprotocol/registry/issues/1815) has been open since 2026-11-07 with no maintainer outcome visible. It should be triaged or redirected.
- The data shows no PRs open, so there is no PR backlog. The data covers only the last 24 hours, so older backlog items are not visible here.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-10

## 1. Today's Overview
The repository saw high activity: 137 PRs were updated in 24 hours, 131 still open and 6 merged or closed. There were no issue updates and no new releases. The list is a curated index, so activity is almost entirely submissions of new MCP servers. Merge throughput is low compared with the incoming flow, which suggests a growing review backlog. The data shows no comment activity on any of the top 20 PRs.

## 2. Releases
No new releases.

## 3. Project Progress
Only 6 of the 137 updated PRs were merged or closed. The provided data covers the top 20 PRs, all open, so I can't tell which PRs were merged or what changed in them. Progress in the data is therefore limited to new submissions entering the queue.

## 4. Community Hot Topics
Comment counts are undefined in the data and every PR shows 0 reactions, so there are no real hot topics. Submissions cluster in these categories:

- **Finance & Fintech:** [#19113](https://github.com/punkpeye/awesome-mcp-servers/pull/19113) (Option Desk and Risk Desk), [#19111](https://github.com/punkpeye/awesome-mcp-servers/pull/19111) (kalshi-fees), [#16368](https://github.com/punkpeye/awesome-mcp-servers/pull/16368) (HEY Research Lab, Robinhood Chain research)
- **Knowledge & Memory / Data Platforms:** [#19112](https://github.com/punkpeye/awesome-mcp-servers/pull/19112) (ModelBrain), [#19085](https://github.com/punkpeye/awesome-mcp-servers/pull/19085) (cortex-mcp and agentflight), [#19114](https://github.com/punkpeye/awesome-mcp-servers/pull/19114) (OntoPoc), [#18918](https://github.com/punkpeye/awesome-mcp-servers/pull/18918) (AgentFuel402)
- **Browser Automation:** [#19115](https://github.com/punkpeye/awesome-mcp-servers/pull/19115) (assistant-navigation), [#19108](https://github.com/punkpeye/awesome-mcp-servers/pull/19108) (cloak-use)
- **Security and Monitoring:** [#19118](https://github.com/punkpeye/awesome-mcp-servers/pull/19118) (patchbay, an OAuth 2.1 auditor for MCP servers), [#19107](https://github.com/punkpeye/awesome-mcp-servers/pull/19107) (Nightingale, an official server from a project with 13k+ stars)
- **Multimedia, Social, Speech, Communication, Gaming:** [#19117](https://github.com/punkpeye/awesome-mcp-servers/pull/19117), [#19106](https://github.com/punkpeye/awesome-mcp-servers/pull/19106), [#19116](https://github.com/punkpeye/awesome-mcp-servers/pull/19116), [#19109](https://github.com/punkpeye/awesome-mcp-servers/pull/19109), [#18914](https://github.com/punkpeye/awesome-mcp-servers/pull/18914), [#19054](https://github.com/punkpeye/awesome-mcp-servers/pull/19054)

**Underlying needs:**
- MCP servers are spreading into vertical domains such as finance, poker, WordPress and Telegram.
- Maintainers of those servers want visibility through this list.
- Several submissions use official registries or vendor-backed servers, such as Nightingale and the MCP Registry listings for ModelBrain and kotlogramme-cli.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there were no issue updates. The only quality signals are the bot labels on the PRs:

- `missing-glama` is on about half the PRs shown, including [#19118](https://github.com/punkpeye/awesome-mcp-servers/pull/19118) and [#19117](https://github.com/punkpeye/awesome-mcp-servers/pull/19117).
- `missing-emoji` is on [#19113](https://github.com/punkpeye/awesome-mcp-servers/pull/19113).

These are formatting or listing-compliance gaps, not defects.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. Process signals from the PRs:

- Several PRs carry the 🤖🤖🤖 marker. [#19108](https://github.com/punkpeye/awesome-mcp-servers/pull/19108) explicitly cites a "fast-track for agent PRs per CONTRIBUTING", so agent-authored submissions have a defined path.
- Automated labels (`has-glama`, `valid-name`, `has-emoji`) are applied to PRs, which points to ongoing automation of triage.
- Security auditing of MCP servers, as in the patchbay PR, may become a category of its own as the ecosystem grows.

## 7. User Feedback Summary
There are no issues or comments to draw feedback from. The submission descriptions suggest the following:

- Contributors favor local-first, stdio, MIT-licensed servers, such as OntoPoc and kalshi-fees (stdlib-only Python).
- Contributors stress that listings are alphabetically ordered and cite registry or Glama presence as a sign of credibility.
- Contributors can't tell what the Glama requirement involves, which leads to repeated `missing-glama` labels. This is my inference from how often the label appears, not something stated in the data.

## 8. Backlog Watch
- [#16368](https://github.com/punkpeye/awesome-mcp-servers/pull/16368) (HEY Research Lab) was created on 2026-10-14 and is still open about 27 days later. It is the oldest PR in the sample and passes all label checks.
- [#18914](https://github.com/punkpeye/awesome-mcp-servers/pull/18914) (kotlogramme-cli) and [#18918](https://github.com/punkpeye/awesome-mcp-servers/pull/18918) (AgentFuel402) date from 2026-11-08 and are still open.
- 131 open PRs are waiting for review. The maintainers need either more reviewers or more auto-merge rules for PRs that pass all label checks.

**Health assessment:** Contributor demand is strong, but the review rate is low and the queue is growing. The data has no comment counts, issue activity or release activity, so these conclusions are limited.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-10

## 1. Today's Overview
The registry saw heavy submission activity: 50 PRs were updated in 24h (all still open, none merged or closed), plus 2 new open issues. Most traffic is new-server submissions, with a notable wave of **remote (hosted) MCP servers** created today (#6884–#6893). Bot-driven "update pin" PRs also keep churning. There were no releases and no merges, which suggests a review/merge bottleneck rather than low activity. Overall health: high inbound demand, weak throughput.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. The 50 updated PRs all remain open. (Only the top 20 by comment count were provided; comment counts were reported as undefined, so ordering isn't informative.)

## 4. Community Hot Topics
No item has recorded comments or 👍 reactions (all 0 or undefined), so there are no discussion-driven hot topics. The most notable items by signal are:
- **[#6874](https://github.com/docker/mcp-registry/issues/6874)** – Five catalog entries (e.g., `alfresco`, `dotnet-types-explorer`) pin image digests that `docker pull` can't resolve in the v3 catalog. It affects end-user installs directly.
- **[#6875](https://github.com/docker/mcp-registry/issues/6875)** – Grafana MCP has failed CI since July 10 and isn't auto-updating; the bot has force-pushed [PR #4380](https://github.com/docker/mcp-registry/pull/4380) repeatedly without success.

Underlying need: reliable automation (CI and pin updates) and catalog integrity checks.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6874](https://github.com/docker/mcp-registry/issues/6874)** – Unresolvable image digests in the published catalog break installs for five entries. No fix PR is referenced.
2. **[#6875](https://github.com/docker/mcp-registry/issues/6875)** – Grafana MCP stuck in failing CI for ~4 months; the automated update loop isn't recovering. The linked PR #4380 exists, but it is not passing.

Both point to a gap in post-publish validation and bot failure handling.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests. Implicit signals from submissions:
- Strong shift toward **remote, Streamable HTTP servers** (OpenAny [#6893](https://github.com/docker/mcp-registry/pull/6893), RomeoSEO [#6892](https://github.com/docker/mcp-registry/pull/6892), Bot-Hosting [#6891](https://github.com/docker/mcp-registry/pull/6891), UberLLM [#6890](https://github.com/docker/mcp-registry/pull/6890), KnowMan [#6889](https://github.com/docker/mcp-registry/pull/6889), Schedchie [#6888](https://github.com/docker/mcp-registry/pull/6888), Buildcord [#6885](https://github.com/docker/mcp-registry/pull/6885), Machine Relations Index [#6884](https://github.com/docker/mcp-registry/pull/6884)). OAuth remote entries are also appearing (IAM360 [#6422](https://github.com/docker/mcp-registry/pull/6422)).
- Hosted closed-source servers with no image to build (Schedchie, Bot-Hosting) suggest the registry's remote-entry path is becoming a primary route.
- Local stdio submissions continue: [Clipwright #5240](https://github.com/docker/mcp-registry/pull/5240), [context-pill #6887](https://github.com/docker/mcp-registry/pull/6887), [Remotify #6886](https://github.com/docker/mcp-registry/pull/6886) (remote shell execution, which likely needs security scrutiny).

## 7. User Feedback Summary
Contributors want faster review turnaround and transparent CI: Grafana's maintainers are confused as to why updates stall. Catalog consumers are hitting broken pulls. Use cases in submissions span SEO, travel rentals, interior design, bot hosting, knowledge bases, and wearable/health data, showing broad ecosystem interest. Neither issue has a response, which hints at low maintainer engagement.

## 8. Backlog Watch
Items needing maintainer attention:
- **[#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240)** – open since 2026-09-25.
- **[#5598 Luw.ai](https://github.com/docker/mcp-registry/pull/5598)** – open since 2026-10-10.
- **[#4413 HemmaBo](https://github.com/docker/mcp-registry/pull/4413)** – open since 2026-07-13 (~4 months).
- **[#1083 stripe pin update](https://github.com/docker/mcp-registry/pull/1083)** – bot PR open since 2026-02-07 (9 months), the oldest in the sample.
- Stale bot pin PRs from July: [#4444 schemacrawler-ai](https://github.com/docker/mcp-registry/pull/4444), [#4370 youtube_transcript](https://github.com/docker/mcp-registry/pull/4370), [#4368 sonarqube](https://github.com/docker/mcp-registry/pull/4368), [#4366 render](https://github.com/docker/mcp-registry/pull/4366), plus Grafana's [#4380](https://github.com/docker/mcp-registry/pull/4380).
- [#6422 IAM360](https://github.com/docker/mcp-registry/pull/6422) (since 2026-11-01) and [#6798 Tap.Giving](https://github.com/docker/mcp-registry/pull/6798) (since 2026-11-08).

Recommendation: triage or auto-close stale bot PRs, and add a catalog digest-resolution check to CI to prevent a repeat of #6874.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) Digest, 2026-11-10

## 1. Today's Overview
The repository is very active but mostly through automation. Of 32 PRs updated in 24h, 10 listed are `github-actions[bot]` SHA bumps for partner plugins (zoominfo, synthflow, spanner, oracledb, looker, knowledge-catalog, firestore-native, cloud-sql-*, alloydb-omni), each validated with `claude plugin validate`. The human activity centers on the `security-guidance` plugin, with maintainer @mhegazy opening four PRs and closing several others. The 7 issues updated include 5 open and 2 closed, and most are about `security-guidance` auth and Windows behavior. The one high-engagement thread is #7024, about the new Verified-organization gate. There were no new releases. Only 20 of the 32 PRs were shown, so counts below cover that subset.

## 2. Releases
No new releases. A version bump for `security-guidance` 2.0.19 ([#7034](https://github.com/anthropics/claude-plugins-official/pull/7034)) was closed, and the data doesn't say whether it merged.

## 3. Project Progress
Closed/merged today (13 total, 5 visible in the data):
- [#7034](https://github.com/anthropics/claude-plugins-official/pull/7034): bumps `security-guidance` to 2.0.19 in `plugin.json` and `marketplace.json`. The updater compares version strings, so earlier fixes reach users only after a bump.
- [#7029](https://github.com/anthropics/claude-plugins-official/pull/7029): project rules (`.claude/security-patterns.*`) and `claude-security-guidance.md` are now read from the project folder. Before this, one `cd src` silently disabled them.
- [#7028](https://github.com/anthropics/claude-plugins-official/pull/7028): fixes order-dependent tests that opened the first `.json` in the state directory, which could be `review_model.json`.
- [#7050](https://github.com/anthropics/claude-plugins-official/pull/7050): runs the `sg-python.sh` interpreter probes with `PYTHONSAFEPATH=1`. This is likely the fix path for the `(3` stray-file bug in [#7049](https://github.com/anthropics/claude-plugins-official/issues/7049), but the data doesn't confirm the link.
- [#7052](https://github.com/anthropics/claude-plugins-official/pull/7052): Airwallex removed `airwallex-dev` from the official directory.

Open work from the same maintainer:
- [#7056](https://github.com/anthropics/claude-plugins-official/pull/7056): holds back a host's token by host rather than by the output setting.
- [#7055](https://github.com/anthropics/claude-plugins-official/pull/7055): custom rule globs can be project-relative. `src/**` and `./src/**` currently never match.
- [#7054](https://github.com/anthropics/claude-plugins-official/pull/7054): `yaml.load`, `torch.load` and `np.load` rules now read across arguments, reducing false positives on nested or multi-line calls.
- [#7053](https://github.com/anthropics/claude-plugins-official/pull/7053): packs custom-rule counts into a single `cr_pack` telemetry key, because Stop rows were truncated at 20 keys.

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** (20 comments, 8 👍): How can an organization become Verified? Since about 2026-11-05 the directory rejects command hooks and local MCP servers from non-Verified orgs. The docs and pre-submission checklist reportedly don't explain the path. Authors want a documented, predictable verification process. This is the most significant policy and ecosystem-trust topic of the day.
- **[#6609](https://github.com/anthropics/claude-plugins-official/issues/6609)** (2 comments): `security-guidance` LLM reviews silently never run for subscription OAuth logins, contradicting the README's "no setup" claim.
- **[#5927](https://github.com/anthropics/claude-plugins-official/issues/5927)** (3 comments): `skill-creator` crashes on Windows due to missing `encoding` arguments.

The bot PRs have no comment or reaction signal.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6609](https://github.com/anthropics/claude-plugins-official/issues/6609)**: a core feature silently disabled for subscription users, caused by `hooks/llm.py:127`. It is open and no fix PR is visible. The related 401 issue [#6955](https://github.com/anthropics/claude-plugins-official/issues/6955) (`apiKeyHelper` returning an OAuth token) was closed.
2. **[#5927](https://github.com/anthropics/claude-plugins-official/issues/5927)**: `skill-creator`'s description optimizer crashes on Windows when `SKILL.md` has non-cp1252 characters. It is open since 2026-09-08 with no fix PR visible. The fix is simple: pass `encoding="utf-8"`.
3. **[#7049](https://github.com/anthropics/claude-plugins-official/issues/7049)**: the `security-guidance` 2.0.18 probe creates stray `(3` files in the cwd on Windows with pyenv-win. It is annoying but low impact. [#7050](https://github.com/anthropics/claude-plugins-official/pull/7050) may address it.
4. **[#6860](https://github.com/anthropics/claude-plugins-official/issues/6860)** (closed): the macOS sandboxed commit review renewed and broke the stored claude.ai login. This was a serious issue and is now closed.

## 6. Feature Requests & Roadmap Signals
- **Telegram quoted-reply context** ([#7068](https://github.com/anthropics/claude-plugins-official/issues/7068)): `reply_to_message` and `quote` are dropped, so a reply of "summarize this" has nothing to act on. It is a small, well-scoped change and a likely near-term fix.
- **Verification path** ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)): documentation, or a process, for becoming Verified.
- **Custom rules** ([#7055](https://github.com/anthropics/claude-plugins-official/pull/7055), [#7053](https://github.com/anthropics/claude-plugins-official/pull/7053)): the next `security-guidance` version (likely 2.0.19 or later) probably focuses on custom rules, rule accuracy and telemetry.

## 7. User Feedback Summary
- Authors are frustrated by an opaque policy change that arrived without clear guidance (#7024).
- Windows users hit repeated problems with encoding, pyenv-win shims and stray files (#5927, #7049).
- Subscription and OAuth users run into authentication edge cases in `security-guidance` (#6609, #6955, #6860).
- Users of the Telegram plugin need conversation context in replies (#7068).
- Satisfaction signals are mixed. Maintainers respond quickly (two auth issues closed within the window), but the docs lag the behavior.

## 8. Backlog Watch
- [#5927](https://github.com/anthropics/claude-plugins-official/issues/5927) is about two months old with no visible fix.
- [#6609](https://github.com/anthropics/claude-plugins-official/issues/6609) is about four weeks old and affects every subscription user of `security-guidance`.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) has 20 comments, and the data doesn't show an official maintainer answer. It needs a clear response on the Verified criteria.
- The 10 bot SHA-bump PRs ([#7057](https://github.com/anthropics/claude-plugins-official/pull/7057) to [#7067](https://github.com/anthropics/claude-plugins-official/pull/7067)) are open and have passed validation. They need a human merge, and a batching or auto-merge policy would reduce review load.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-10

## 1. Today's Overview
Activity today was entirely submission-driven. 23 issues were updated, all of them `resource-submission` entries, and no PRs or releases were recorded. 21 are open and 2 were auto-closed. 20 of the 23 carry `validation-passed`, so the automated intake pipeline is working. Each issue has about one comment, which is likely the validation bot. There is no sign of human discussion, bug reports or maintainer activity in this window, so the repo is being used as a curated resource list and not as a development project.

## 2. Releases
No new releases.

## 3. Project Progress
There were no PRs updated, merged or closed in the last 24h. The only state changes were two auto-closures:
- [#3582](https://github.com/hesreallyhim/awesome-claude-code/issues/3582) Whalory (`validation-passed`, auto-closed). It appears to be a duplicate of [#3581](https://github.com/hesreallyhim/awesome-claude-code/issues/3581), which is still open and was filed by the same author. The two list different author names, "Behnam Jafari Balalami" and "Whalya".
- [#3571](https://github.com/hesreallyhim/awesome-claude-code/issues/3571) SoluTerminal (`validation-pending`, auto-closed). It was closed before validation finished.

## 4. Community Hot Topics
No issue has more than 2 comments or any 👍 reactions, so nothing is hot by engagement. The submissions cluster into themes that show what contributors are building:

- **Security and guardrails (4):** [#3583 Penthera](https://github.com/hesreallyhim/awesome-claude-code/issues/3583), [#3575 yolonot](https://github.com/hesreallyhim/awesome-claude-code/issues/3575) (a permission firewall covering 23 coding agents), [#3568 Agentmetry](https://github.com/hesreallyhim/awesome-claude-code/issues/3568) (MITRE ATT&CK-mapped hook sensor) and [#3567 Hooks as Guardrails](https://github.com/hesreallyhim/awesome-claude-code/issues/3567). Contributors want to constrain autonomous agents and audit what they do.
- **Memory and context persistence (2):** [#3585 Kvendra Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3585) and [#3574 Engraphis](https://github.com/hesreallyhim/awesome-claude-code/issues/3574).
- **Orchestration and workspaces (3):** [#3570 Weft](https://github.com/hesreallyhim/awesome-claude-code/issues/3570), [#3586 dot-claude-iff](https://github.com/hesreallyhim/awesome-claude-code/issues/3586) and [#3584 ClaudeTTY](https://github.com/hesreallyhim/awesome-claude-code/issues/3584). Several of these span multiple agent CLIs (Codex, Grok Build, Antigravity), which points to a multi-agent workflow trend.
- **MCP and plugin integrations:** [#3588 Ginta MCP](https://github.com/hesreallyhim/awesome-claude-code/issues/3588), [#3587 solhint-mcp](https://github.com/hesreallyhim/awesome-claude-code/issues/3587), [#3580 fmrl](https://github.com/hesreallyhim/awesome-claude-code/issues/3580), [#3579 Model Salt](https://github.com/hesreallyhim/awesome-claude-code/issues/3579) and [#3573 mindmap.io](https://github.com/hesreallyhim/awesome-claude-code/issues/3573).
- **Skills, writing and creative:** [#3572 code-review-gate-skill](https://github.com/hesreallyhim/awesome-claude-code/issues/3572), [#3576 VoiceMoat](https://github.com/hesreallyhim/awesome-claude-code/issues/3576), [#3581 Whalory](https://github.com/hesreallyhim/awesome-claude-code/issues/3581) and [#3577 pixelband](https://github.com/hesreallyhim/awesome-claude-code/issues/3577).
- **Other:** [#3589 Option Desk](https://github.com/hesreallyhim/awesome-claude-code/issues/3589), [#3578 What Agents Pick](https://github.com/hesreallyhim/awesome-claude-code/issues/3578) (a dataset of 355 scored runs) and [#3569 claude-desktop-rpm](https://github.com/hesreallyhim/awesome-claude-code/issues/3569).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only quality signals are intake-related:
1. [#3586 dot-claude-iff](https://github.com/hesreallyhim/awesome-claude-code/issues/3586) is the only submission with `validation-failed`. It is still open, and the author needs to fix the submission.
2. [#3571](https://github.com/hesreallyhim/awesome-claude-code/issues/3571) was auto-closed while validation was still pending, which may be a race or timing issue in the bot.
3. The duplicate #3582 / #3581 pair suggests that submitters can't easily tell whether a submission went through.

No fix PRs exist or are needed.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed against the repo itself. The submissions suggest where the ecosystem is heading:
- Guardrails and permission firewalls are becoming a distinct resource category.
- Cross-agent tooling that also supports Codex, Grok Build and similar CLIs is growing.
- Local-first memory is popular.
- Several categories are active, including Security, Memory & Context Persistence, Providers/Runtime Infrastructure and Agent Orchestration.

The maintainer may want a "multi-agent / cross-CLI" category, given how often it appears. This is a prediction from submission patterns, not a stated roadmap item.

## 7. User Feedback Summary
Contributors are mostly independent authors promoting small plugins, skills and MCP servers. Their main concerns are:
- Safety and observability of agent actions, such as hooks, auditing and privacy-preserving local checks (Penthera).
- Persistent project memory across sessions.
- Better terminal and desktop workspaces, including mobile access (Weft).

Some submitters leave the `[Resource]:` title prefix off ([#3585](https://github.com/hesreallyhim/awesome-claude-code/issues/3585), [#3570](https://github.com/hesreallyhim/awesome-claude-code/issues/3570), [#3576](https://github.com/hesreallyhim/awesome-claude-code/issues/3576)), but validation still passed. The data contains no satisfaction or dissatisfaction signals about the list itself.

## 8. Backlog Watch
All items in this window were created on 2026-11-09 or 2026-11-10, so none is long-unanswered. The items that need maintainer attention are:
- 21 open submissions waiting for curation. The maintainer should confirm that validated entries are triaged and not left to pile up. Issue numbers are now near #3589.
- [#3581](https://github.com/hesreallyhim/awesome-claude-code/issues/3581), a duplicate of the auto-closed #3582. It should be consolidated into one canonical entry.
- [#3586](https://github.com/hesreallyhim/awesome-claude-code/issues/3586), a failed validation, which is likely to stall unless the author acts.
- [#3576](https://github.com/hesreallyhim/awesome-claude-code/issues/3576), the only issue with 0 comments, so it may not have received the bot's validation comment.
- Older backlog items were not part of this 24h data, so a wider triage check is advisable.

**Project health:** Submission volume is high, around 23 a day, and automated validation works. Human review capacity and the lack of PR activity are the things to watch.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Project Digest: 2026-11-10

## 1. Today's Overview
Activity on VoltAgent/awesome-agent-skills was light but steady: 3 issues and 4 PRs were updated in the last 24 hours. All 3 issues were closed. All 4 PRs are still open, and none merged. There were no new releases, which is normal for a curated list. The traffic is almost entirely community submissions, so project health depends on maintainer throughput. Open PRs are accumulating while issues get closed.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so the list gained no new entries. Maintainer activity shows up in issue triage: three issues were closed, including two duplicate CrakSEO submissions and one suggestion that arrived the same day.

- Closed: [#1371](https://github.com/VoltAgent/awesome-agent-skills/issues/1371) and [#1369](https://github.com/VoltAgent/awesome-agent-skills/issues/1369), two near-identical requests to add CrakSEO MCP connect skills.
- Closed: [#1388](https://github.com/VoltAgent/awesome-agent-skills/issues/1388), a suggestion about the Security Notice.

The data doesn't say why they were closed (merged elsewhere, rejected, or deduplicated).

## 4. Community Hot Topics
No item has comments or reactions (all show 0 comments and 0 👍), so there is no engagement-based hot topic. The most notable theme is **skill security and trust**:

- [#1388](https://github.com/VoltAgent/awesome-agent-skills/issues/1388) proposes adding Agent Skills Hub (agentskillshub.top) as a third "Recommended tool" in the Security Notice. It would grade skills from public GitHub repos as Safe or Caution. The author references the earlier merged #1338. The underlying need is a lightweight way for readers to vet third-party skills before installing, given that the list links to many external repositories. The issue was closed within the day. Note that it is a tool-promotion suggestion from an external party, so it deserves scrutiny.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. There are no fix PRs to track.

## 6. Feature Requests & Roadmap Signals
- **Security tooling in the Security Notice** ([#1388](https://github.com/VoltAgent/awesome-agent-skills/issues/1388)). It was closed, so a near-term change looks unlikely. The signal is still that users want per-skill vetting.
- **New skill additions** are the dominant "feature" stream, and the open PRs are the likely content of the next list update:
  - [#1387](https://github.com/VoltAgent/awesome-agent-skills/pull/1387) `kyy-logs/code-review-gate-skill`: static-first code review with four JSON probes (behavior, tests, rules, impact) and a merge gate rendered from JSON findings.
  - [#1386](https://github.com/VoltAgent/awesome-agent-skills/pull/1386) `diaryofamademan/first-principles-thinking`: decision and strategy analysis built on named evidence.
  - [#1385](https://github.com/VoltAgent/awesome-agent-skills/pull/1385) `diaryofamademan/fundraising`: an end-to-end capital raise or business sale workflow with human checkpoints.
  - [#1384](https://github.com/VoltAgent/awesome-agent-skills/pull/1384) `izzzzzi/assh`: SSH work through the `assh` CLI, with persistent tmux sessions, aimed at Development and Testing.

## 7. User Feedback Summary
There is no direct feedback in the data, since no comments exist. Indirect signals:
- Contributors keep using the list as a distribution channel for skills across domains. The submissions span engineering (code review, SSH) and business (fundraising, first-principles analysis), so the ecosystem is widening beyond coding.
- Duplicate submissions ([#1369](https://github.com/VoltAgent/awesome-agent-skills/issues/1369) and [#1371](https://github.com/VoltAgent/awesome-agent-skills/issues/1371)) suggest contributors may find the submission path unclear. Some use issues where PRs are expected.
- Interest in trust and security is rising ([#1388](https://github.com/VoltAgent/awesome-agent-skills/issues/1388)).

## 8. Backlog Watch
All four open PRs were created within the last 2 days, so none is long-stale yet. They have no comments and no recorded maintainer response.

- [#1384](https://github.com/VoltAgent/awesome-agent-skills/pull/1384) and [#1385](https://github.com/VoltAgent/awesome-agent-skills/pull/1385), both opened 2026-11-09, are the oldest.
- [#1386](https://github.com/VoltAgent/awesome-agent-skills/pull/1386) was also opened 2026-11-09.
- [#1387](https://github.com/VoltAgent/awesome-agent-skills/pull/1387) was opened 2026-11-10.

The PR numbering (#1384 to #1388) shows a fast intake rate, so the review queue could grow without regular batch merges. Two PRs come from the same author (diaryofamademan) and could be reviewed together. Because the Security Notice stresses source validation, maintainers may want to vet each new skill's repository before merging.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
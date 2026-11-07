# MCP Ecosystem Digest 2026-11-07

> Issues: 3 | PRs: 1 | Projects covered: 7 | Generated: 2026-11-07 13:43 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest: 2026-11-07

## 1. Today's Overview
Activity in modelcontextprotocol/servers was low over the last 24 hours. Three issues and one PR were updated, with no releases and no merged or closed items. The updates were maintenance-oriented: Docker documentation fixes, a lock-file cleanup bug in the memory server, and a third-party skills listing request. The oldest item is PR #3175, a long-running registry effort. It was touched again today, which suggests it is still being worked on. Overall the project looks stable, but nothing moved to completion today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. The one PR updated is still open:
- [PR #3175](https://github.com/modelcontextprotocol/servers/pull/3175) (open, `enhancement`) by olaservo. It adds `server.json` files and version-sync infrastructure to register 7 reference servers in the official MCP Registry. The servers are everything, filesystem, memory, sequentialthinking, fetch, git and time. It was created on 2026-01-04 and updated today, so it has been open for about 10 months.

## 4. Community Hot Topics
Engagement is thin; no item has more than 2 comments and none has any 👍.
- [Issue #5483](https://github.com/modelcontextprotocol/servers/issues/5483) (2 comments, `bug`, `v2`): Stale `--db-path` comments in the fetch and git Dockerfiles, plus a git README clarification. It is a documentation-accuracy problem that affects people running the servers from Docker images.
- [Issue #5485](https://github.com/modelcontextprotocol/servers/issues/5485) (1 comment): The memory server (v2.1.0) leaves lock files behind on exit and on termination signals. The reporter runs it from Claude Desktop and an autonomous agent orchestrator. That points to a need for reliable lifecycle handling when servers are started and stopped programmatically.
- [PR #3175](https://github.com/modelcontextprotocol/servers/pull/3175): The registry work has been updated, but the data gives no comment count.

## 5. Bugs & Stability
Ranked by severity:
1. [#5485](https://github.com/modelcontextprotocol/servers/issues/5485) (medium): The memory server does not clean up active lock files on exit or on SIGINT/SIGTERM. Stale locks could block later starts, especially in orchestrated or auto-restarting setups. No fix PR is linked in the data.
2. [#5483](https://github.com/modelcontextprotocol/servers/issues/5483) (low): Misleading `--db-path` comments in the Dockerfiles. This is documentation only and carries no runtime risk, though it can cause configuration mistakes. The title is phrased as a fix, so a PR may be coming, but the data doesn't confirm one.

## 6. Feature Requests & Roadmap Signals
- [PR #3175](https://github.com/modelcontextprotocol/servers/pull/3175): Official Registry registration for the reference servers is the clearest roadmap item. It is a good candidate for a near-term release once the maintainers review it, though its 10-month age makes the timing uncertain.
- [Issue #5486](https://github.com/modelcontextprotocol/servers/issues/5486): A request to add CrakSEO's remote MCP skills (SEO, Search Console and URL Indexing) via `npx skills add CrakSEO/skills`. It reads like a third-party listing or promotion, and it is unlikely to be accepted into this repo as-is.
- The `v2` label on #5483 and the "Modern (2026-07-28)" protocol era in #5485 show that v2 and the new protocol era are the current targets for reports.

## 7. User Feedback Summary
- Docker users hit confusing configuration guidance because the comments are out of date (#5483).
- Users who run servers under an agent orchestrator or Claude Desktop need clean shutdown behavior and no leftover state (#5485).
- Third-party ecosystem vendors are using the repo as a discovery channel for their MCP offerings (#5486).
- There was no explicit satisfaction or dissatisfaction signal today.

## 8. Backlog Watch
- [PR #3175](https://github.com/modelcontextprotocol/servers/pull/3175) has been open since 2026-01-04, about 10 months, and needs a maintainer decision. It would give the reference servers an official registry presence and automate version syncing.
- Issues #5483 and #5485 are new (created 2026-11-06). They have a few comments each and should be triaged soon. The memory lock-file bug (#5485) is the more functional of the two.
- Issue #5486 should be triaged for scope. It probably belongs in an external listing rather than in this repo.

**Project health:** Stable and quiet, with no regressions or releases. The main concerns are the long-open registry PR and the new memory-server shutdown bug.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-11-07

## 1. Ecosystem Overview
The projects tracked today are mostly the distribution layer around the Model Context Protocol, not agent runtimes. They are the reference servers, the official registry, the Docker catalog and the curated lists. Intake is very high: 122 PRs on Awesome MCP Servers, 50 on Docker MCP Registry, and 25 issues on Awesome Claude Code. Review and merge throughput is much lower, so every discovery channel has a growing backlog. Engineering effort is concentrated in a few places: registry operations (v1.8.8) and the `security-guidance` plugin work. The same third-party submissions (CrakSEO, ru-marketplace-mcp, Memory Eternal) appear across several repos at once.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (1-5) |
|---|---|---|---|---|
| MCP Servers | 3 | 1 | None | 3, stable but quiet |
| MCP Registry | 3 | 6 | v1.8.8 | 4, active and shipping |
| Awesome MCP Servers | 0 | 122 (6 merged/closed) | None | 3, high demand, review-limited |
| Docker MCP Registry | 0 | 50 (all open) | None | 2.5, nothing merged, stale items |
| Claude Plugins (Official) | 6 (4 open, 2 closed) | 17 (6 closed/merged) | None (2.0.19 pending in #7034) | 3.5, active, with open bugs |
| Awesome Claude Code | 25 (21 open, 4 closed) | 0 | None | 3, intake works, review stalled |
| Awesome Agent Skills | 2 | 7 (all open) | None | 3, light, no merges |

The health scores are my own judgment from the digests. They are not measured values.

## 3. MCP Servers's Position

**Advantages**
- It is the canonical reference implementation. Its servers are the ones PR #3175 would register in the official Registry: everything, filesystem, memory, sequentialthinking, fetch, git and time.
- It carries protocol-level signals. The `v2` label and the "Modern (2026-07-28)" protocol era are visible here before they show up downstream.

**Differences from peers**
- It is a code repo with servers you run. The Registry holds metadata and publishing tooling. The Docker registry packages containers or remote endpoints. The Awesome lists are only links.
- Its issues are about runtime behavior: lock files that are not cleaned up on exit (#5485) and out-of-date Docker comments (#5483).

**Community size**
- It is the smallest by volume today: 4 updated items against 122 PRs on Awesome MCP Servers and 50 on Docker MCP Registry.
- Its influence does not come from volume. The other projects depend on its specification and reference code.
- PR #3175 has been open about 10 months. The reference repo is therefore slower than the Registry, which shipped a release and a production promotion within a day.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Submission and intake governance | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills, Docker MCP Registry, MCP Registry | Automated validation labels (`valid-name`, `has-glama`, `validation-passed`). Duplicate submissions of the same project. Unclear channels (CrakSEO used an issue and a PR on the Registry, and issues on the Servers repo and Awesome Agent Skills). |
| Auth and credentials for remote servers | Docker MCP Registry, MCP Registry, Claude Plugins | OAuth onboarding (#6739), bearer-token auth (#6735), agent-credential lockfiles (GrantLock, Registry #1814), the claude.ai bearer-token fix (#7031). |
| Trust and verification gates | Claude Plugins, Awesome Claude Code, Awesome Agent Skills | The Verified-organization rule (#7024). Commercial versus open-source scope (BuildProof #3515). Vetting of AI-assisted submissions. |
| Server lifecycle and cleanliness | MCP Servers, Claude Plugins | Lock files left behind (#5485). A leaked `pip-unpack-*` folder (#6985). A telegram poller using 99% CPU (#7037). |
| Dynamic tool discovery | Docker MCP Registry | Empty `tools.json` for remote servers (#6735, #6739). |
| Publisher CI ergonomics | MCP Registry | `publish --wait` retries when npm propagation is slow (#1818). |
| Agent safety and "done" verification | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | Human approval (Deskhand), guardrails (Kintsugi), Andon and BuildProof. |
| Memory and context | Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills | OpenYantra, memory-eternal, Memory Eternal, aigent-os. |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference implementations | Server authors and integrators | Source code, run with npx, uvx or Docker |
| MCP Registry | Canonical metadata and publishing | Publishers and aggregators | A service with its own releases, Helm deployment and a staging canary. v1.8.8 allows several server names to share one remote URL. |
| Docker MCP Registry | Curated container and remote catalog | Docker users and vendors | PR-based `server.json` and `tools.json`, with bot pin updates |
| Awesome MCP Servers | Broad discovery list | Everyone | A Markdown list with bot labels and Glama badges |
| Claude Plugins (Official) | Plugin directory plus first-party plugins | Claude Code users and plugin authors | Plugin hooks and SHA pins. It has the most real bugs and the most engineering work. |
| Awesome Claude Code | Claude Code resources | Claude Code practitioners | Issue-form intake with bot validation |
| Awesome Agent Skills | Skills directory | Agent users who want skills | PR-based list. It overlaps with the Awesome Claude Code list. |

## 6. Community Momentum & Maturity

- **Rapid iteration:** MCP Registry (a release and a deployment cycle in one day) and Claude Plugins (the `security-guidance` series, with 2.0.19 pending).
- **High intake, weak throughput:** Awesome MCP Servers (about 5% closed or merged), Docker MCP Registry (nothing merged, items open since February), and Awesome Claude Code (about 17 open `validation-passed` submissions).
- **Stabilizing or quiet:** MCP Servers (low activity, with the long-open #3175) and Awesome Agent Skills (7 PRs, no merges).
- **Caveat:** each digest covers only 24 hours, and several list the top 20 items. Comment counts were missing in two of them, so the rankings are indicative only.

## 7. Trend Signals

1. **Distribution is the bottleneck.** Authors are producing servers and skills faster than any channel can review them. Developers who want visibility should publish to the official Registry. It is the one channel that shipped today, and PR #3175 targets it for the reference servers.
2. **Skills and MCP servers are merging.** CrakSEO, everyinfra and ru-marketplace-mcp ship both, and the Registry, the Servers repo and both skills lists receive them. Expect packaging and scope policies to follow.
3. **Remote servers are becoming the default.** Most of the new Docker submissions are hosted. Auth is the open problem, covering OAuth onboarding, bearer tokens and dynamic tool lists.
4. **Trust gates are tightening.** The Verified-org rule for command hooks and local MCP servers appeared without documentation. Plugin authors should check that policy before depending on local servers or hooks.
5. **Clean lifecycle is a requirement.** Orchestrators start and stop servers programmatically, so servers need to clean up their own state on exit and on signals.
6. **Do not assume unique remote URLs.** Registry v1.8.8 breaks that assumption, so aggregators should key listings by server name and version.
7. **Safety and verification tooling is in demand.** Approval gates, guardrails and proof of completion appear across several repos. Teams building agents should plan for them rather than add them later.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest — 2026-11-07

## 1. Today's Overview
Activity is moderate and infrastructure-heavy: 3 issues and 6 PRs were updated in 24h, with one release (v1.8.8) shipped. Maintainer `rdimitrov` drove all deployment-related work (production promotion, staging canary, state-refresh fix), while community input was submissions and promotional/tooling issues with no comments yet. Overall health looks good: release and promotion completed within a day, and nothing is reported as broken.

## 2. Releases
**[v1.8.8](https://github.com/modelcontextprotocol/registry/releases)**
- Built from the staging-validated commit.
- **Behavior change:** different server names may now share the same remote URL. Consumers should key listings by **server name + version**, not assume URL uniqueness.
- **Migration:** no database migration required.
- Action for downstream clients and aggregators: audit any dedup logic keyed on remote URL.

## 3. Project Progress (merged/closed PRs)
- [#1811](https://github.com/modelcontextprotocol/registry/pull/1811) — Promoted production from 1.8.7 to 1.8.8 (commit `d6b071e`). Only the image tag changes; security patches, compression, monitoring and capacity settings are retained.
- [#1810](https://github.com/modelcontextprotocol/registry/pull/1810) — Fix: refresh state before applying saved deployment plans. TTL-expired Helm jobs appeared as missing in preview, so applying with refresh disabled proposed spurious replacements that violated the plan's create constraints.
- [#1813](https://github.com/modelcontextprotocol/registry/pull/1813) — Closed: an isolated staging Gateway Fabric + Vector canary (separate tainted node pool; production rejects the config). The follow-up [#1817](https://github.com/modelcontextprotocol/registry/pull/1817) suggests the work continues in another form.

## 4. Community Hot Topics
No item has comments or reactions, so there is no true "hot" thread. Items worth noting:
- [#1814](https://github.com/modelcontextprotocol/registry/issues/1814) — GrantLock, a lockfile and semantic diff for agent identities and scopes (MCP secrets, OAuth grants, CI tokens). It points to demand for supply-chain and permission auditing around MCP deployments. It is a feedback request, not a registry bug.
- [#1815](https://github.com/modelcontextprotocol/registry/issues/1815) and [#1816](https://github.com/modelcontextprotocol/registry/pull/1816) — CrakSEO submits MCP "connect" skills in both an issue and a PR. This duplication, and the use of the registry repo as a listing venue for skills, suggest unclear submission channels.

## 5. Bugs & Stability
No new user-reported crashes or regressions. Operational items, by relevance:
1. [#1817](https://github.com/modelcontextprotocol/registry/pull/1817) (open fix) — Gateway canary logging: split CRI records fail JSON parsing, and upstream retry lists are excluded from single-attempt timing histograms. This affects observability only, not the user-facing service.
2. [#1810](https://github.com/modelcontextprotocol/registry/pull/1810) (merged) — Deployment plan replacement bug, resolved.
3. Possible risk: the URL-uniqueness change in v1.8.8 could break consumers that assumed unique URLs. No reports yet.

## 6. Feature Requests & Roadmap Signals
- [#1818](https://github.com/modelcontextprotocol/registry/pull/1818) — `mcp-publisher publish --wait` retries with backoff (5s doubling, capped at 30s) when npm propagation causes a 400. It fixes a real CI pain point and is a strong candidate for the next release.
- [#1812](https://github.com/modelcontextprotocol/registry/issues/1812) — Server submission (`io.github.mateuslos/abstrator`, PyPI). This is routine listing activity.
- Infrastructure roadmap: the Gateway Fabric canary (#1813 → #1817) signals a planned move away from ingress-nginx, staging first.

## 7. User Feedback Summary
- Publisher workflow friction: publishing right after `npm publish` fails until the registry sees the package, so CI goes red and needs manual re-runs (#1818).
- Growing demand for governance and security of agent credentials (#1814).
- Third parties want MCP-related skills and plugins to be discoverable via the registry (#1815, #1816).
- No satisfaction or dissatisfaction signals appear in the data.

## 8. Backlog Watch
- All of today's issues ([#1812](https://github.com/modelcontextprotocol/registry/issues/1812), [#1814](https://github.com/modelcontextprotocol/registry/issues/1814), [#1815](https://github.com/modelcontextprotocol/registry/issues/1815)) have 0 comments. They are new and not yet overdue, but they need triage. #1815 and #1816 should be merged or redirected, and #1814 is likely off-topic for the repo.
- [#1816](https://github.com/modelcontextprotocol/registry/pull/1816) and [#1818](https://github.com/modelcontextprotocol/registry/pull/1818) await review. #1818 is the most valuable for users.
- This data covers only the last 24h, so older long-standing items cannot be assessed here.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-07

## 1. Today's Overview
Activity is high but entirely PR-driven: 122 PRs were updated in the last 24h (116 open, 6 merged/closed), with no issues and no releases. This is a curated list repository, so the flow is dominated by community submissions of new MCP servers. Most of the sampled PRs are first-time additions carrying the automated labels `has-emoji`, `valid-name` and `has-glama`/`missing-glama`. Merge throughput is low (about 5% of updated PRs closed or merged), which suggests a growing review backlog.

## 2. Releases
None. This repository is a list and publishes no versioned releases.

## 3. Project Progress
Six PRs were merged or closed today, but none are in the top-20 sample, so I can't say which ones or what they changed. Net list growth is not visible from the data provided. Sampled PRs are all still open.

## 4. Community Hot Topics
Comment counts came through as `undefined` and every PR has 0 👍, so I can't rank by discussion. Topics are inferred from the submission themes instead:

- **Coding agents and agent bridging**: [#18837](https://github.com/punkpeye/awesome-mcp-servers/pull/18837) (agy-bridge, a cross-agent context bus for Claude Code, Antigravity and Codex) and [#18804](https://github.com/punkpeye/awesome-mcp-servers/pull/18804) (brevio-core). Demand is for interoperability between coding agents.
- **Memory and knowledge**: [#18836](https://github.com/punkpeye/awesome-mcp-servers/pull/18836) (OpenYantra, local-first persistent memory).
- **Finance and crypto safety**: [#18833](https://github.com/punkpeye/awesome-mcp-servers/pull/18833) (RugShield-402), [#18828](https://github.com/punkpeye/awesome-mcp-servers/pull/18828) (bobai-buyburn pre-trade checks), [#18086](https://github.com/punkpeye/awesome-mcp-servers/pull/18086) (Hyperliquid data), [#16256](https://github.com/punkpeye/awesome-mcp-servers/pull/16256) (AetherGuard).
- **Desktop and OS automation**: [#18835](https://github.com/punkpeye/awesome-mcp-servers/pull/18835) (Deskhand, with human approval for sensitive clicks).
- **Creative and design tools**: [#18834](https://github.com/punkpeye/awesome-mcp-servers/pull/18834) (Excalidraw), [#18831](https://github.com/punkpeye/awesome-mcp-servers/pull/18831) (Moontide), [#18746](https://github.com/punkpeye/awesome-mcp-servers/pull/18746) (Chorono).
- **Bulk submission**: [#10959](https://github.com/punkpeye/awesome-mcp-servers/pull/10959) (17 Ace Data Cloud servers, `manual-review`).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there were no issues. Two PR-level hygiene signals exist:
- [#14269](https://github.com/punkpeye/awesome-mcp-servers/pull/14269) (MutalaaMCP) has a `merge-conflict` label and needs a rebase from the author.
- [#18829](https://github.com/punkpeye/awesome-mcp-servers/pull/18829) and [#18828](https://github.com/punkpeye/awesome-mcp-servers/pull/18828) are labelled `duplicate`. They edit existing entries rather than adding new ones, so the labelling may be a false positive.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. Process signals:
- Entries missing a Glama badge (`missing-glama`) are common, for example [#18836](https://github.com/punkpeye/awesome-mcp-servers/pull/18836), [#18833](https://github.com/punkpeye/awesome-mcp-servers/pull/18833), [#18832](https://github.com/punkpeye/awesome-mcp-servers/pull/18832) and [#18827](https://github.com/punkpeye/awesome-mcp-servers/pull/18827). Glama inclusion appears to be a de facto requirement.
- Contributors are asking to update existing entries (descriptions, licences, tool counts), as in #18829 and #18828. This points to a need for lighter-weight maintenance of listings.
- Category pressure is highest in Coding Agents, Finance, and Art & Culture.

## 7. User Feedback Summary
There is no direct user feedback in this data. From the PR text, contributors:
- Emphasise local-first, stdio, open-source (MIT/Apache) servers.
- Highlight safety features such as human approval, STOP switches and read-only tools.
- Cover niche domains, such as Turkish law ([#14269](https://github.com/punkpeye/awesome-mcp-servers/pull/14269)), Russian company data ([#18827](https://github.com/punkpeye/awesome-mcp-servers/pull/18827)) and Unity ([#18757](https://github.com/punkpeye/awesome-mcp-servers/pull/18757)), which shows the ecosystem broadening.

## 8. Backlog Watch
Older PRs still open and still being updated:
- [#10959](https://github.com/punkpeye/awesome-mcp-servers/pull/10959): a 17-server bulk addition, open since 2026-07-26 (about 3.5 months) and flagged `manual-review`. It needs a maintainer decision.
- [#14269](https://github.com/punkpeye/awesome-mcp-servers/pull/14269): open since 2026-09-12, with a merge conflict.
- [#16256](https://github.com/punkpeye/awesome-mcp-servers/pull/16256): open since 2026-10-12, missing its Glama badge.
- [#18086](https://github.com/punkpeye/awesome-mcp-servers/pull/18086): open since 2026-10-30, otherwise label-clean and a good candidate for quick merge.

**Health assessment**: Contributor interest is strong, but maintainer throughput looks like the constraint. Batch-merging the label-clean PRs and closing stale conflicted ones would reduce the backlog.

**Data caveat**: Comment counts were `undefined` and only 20 of 122 PRs were shown, so the hot-topic ranking and merge analysis are limited.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-07

## 1. Today's Overview
The registry shows only submission activity today. There were 0 issues, 0 releases and 0 merged or closed PRs. 50 PRs were updated, and all 50 are open. The visible sample is mostly new server submissions (OpenFile, Bellchain, Officely, Instadata and others) plus automated pin-update PRs from `mcp-registry-bot[bot]`. Intake is healthy, with many new PRs created on 11-06 and 11-07. Review and merge throughput looks weak: nothing was merged today, and some PRs have been open for months. Only the top 20 of the 50 PRs are listed in the data, so the figures below describe that sample.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. All progress is pending in the review queue.

## 4. Community Hot Topics
Comment counts are reported as "undefined" and every PR shows 0 👍. That means there is no engagement signal to rank by. The groupings below are based on content and recency instead.

**New remote (hosted) MCP servers.** This is the dominant pattern in the sample.
- [#6710 OpenFile](https://github.com/docker/mcp-registry/pull/6710): company formation and trademark filing.
- [#6742 Officely](https://github.com/docker/mcp-registry/pull/6742): desk and room booking.
- [#6740 seelig.ai booking](https://github.com/docker/mcp-registry/pull/6740).
- [#6739 AiLinkAny](https://github.com/docker/mcp-registry/pull/6739): flagged "OAuth onboarding needed".
- [#6737 LinkJolt](https://github.com/docker/mcp-registry/pull/6737).
- [#6733 BananaCrystal](https://github.com/docker/mcp-registry/pull/6733): FX rates and payments.
- [#6735 Instadata](https://github.com/docker/mcp-registry/pull/6735): bearer-token auth, with an empty `tools.json` for dynamic discovery.

The underlying need is that vendors want distribution through Docker's catalog without shipping container images. That puts pressure on the registry's remote-server and auth handling, especially OAuth and secrets configuration.

**New local or containerized servers.**
- [#6738 memory-eternal](https://github.com/docker/mcp-registry/pull/6738): local-first long-term memory.
- [#6736 ToolLens](https://github.com/docker/mcp-registry/pull/6736): a gateway that fronts npx and uvx servers.
- [#6627 Ferret](https://github.com/docker/mcp-registry/pull/6627): self-hosted home inventory.
- [#6734 Nabu](https://github.com/docker/mcp-registry/pull/6734): ancient-text research library.
- [#6741 ru-marketplace-mcp](https://github.com/docker/mcp-registry/pull/6741): read-only marketplace search.
- [#6743 Bellchain](https://github.com/docker/mcp-registry/pull/6743): crypto alert chains.

Agent memory and MCP-gateway or aggregation tooling stand out among these as ecosystem trends.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, because there were no issues. One item has a potential blocker: [#6739 AiLinkAny](https://github.com/docker/mcp-registry/pull/6739) is titled "OAuth onboarding needed", so it may depend on registry-side OAuth support. No fix PRs apply.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals from the submissions:
- **Dynamic tool discovery.** #6735 and #6739 ship an empty `tools.json` for remote servers. Clearer registry guidance or validation for this pattern is likely to be needed.
- **OAuth for remote servers.** #6739 points to an onboarding gap.
- **Gateway-style servers.** #6736 ToolLens needs a mounted config (`gateway.json`), which tests how the registry handles servers that need user-supplied configuration.

These are inferences from the PR text, not requests from maintainers or users. I can't say which will land in the next version.

## 7. User Feedback Summary
There is no direct user feedback, since no issues or comments were reported. The submissions suggest several use cases:
- Business and administration workflows: company formation, booking, affiliate programs.
- Finance and crypto.
- Research and data access.
- Self-hosted tools.
- Agent memory.

Contributors appear comfortable with the submission process, and the PR bodies follow the template fields (Server Name, Repository URL, Description).

## 8. Backlog Watch
These PRs have been open for a long time and were touched again today. That is probably automated or bot activity, not review.
- [#1083 chore: update pin for stripe](https://github.com/docker/mcp-registry/pull/1083): open since 2026-02-07, about 9 months. This is the oldest item in the sample.
- [#4369 pin update for testkube](https://github.com/docker/mcp-registry/pull/4369), [#4383 teamwork](https://github.com/docker/mcp-registry/pull/4383) and [#4368 sonarqube](https://github.com/docker/mcp-registry/pull/4368): open since July 2026. Stale automated pin updates indicate a gap in either the merge automation or maintainer review.
- [#4637 rstream](https://github.com/docker/mcp-registry/pull/4637): open since 2026-08-05, about 3 months.
- [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240): open since 2026-09-25.
- [#5754 GridPin](https://github.com/docker/mcp-registry/pull/5754): open since 2026-10-16.

**Health assessment:** Contributor demand is strong, but throughput is a concern. The oldest items in the sample date back to February and July, and no PR merged today. Maintainers should prioritize triaging the stale bot pin PRs and the aging community submissions (#4637, #5240, #5754) so the queue doesn't grow faster than it is reviewed.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-11-07

## 1. Today's Overview
Activity is moderate-to-high. In the last 24h there were 6 issues (4 open, 2 closed) and 17 PRs (11 open, 6 closed or merged), with no new releases. Most PR volume comes from one maintainer, `mhegazy`, who is pushing a batch of `security-guidance` changes. Automated SHA bumps from github-actions also continue. Two new `telegram` plugin bugs and a question about the Verified-organization policy are the main community signals.

## 2. Releases
No new releases. Pending: PR [#7034](https://github.com/anthropics/claude-plugins-official/pull/7034) bumps `security-guidance` to 2.0.19, so the changes merged after 2.0.18 reach users only once it lands.

## 3. Project Progress
Six PRs were closed (the data doesn't say which were merged):
- [#7014](https://github.com/anthropics/claude-plugins-official/pull/7014): `security-guidance` version bump to 2.0.18.
- [#6997](https://github.com/anthropics/claude-plugins-official/pull/6997): clears `net_err` once a review gets through. Fixes issues [#6993](https://github.com/anthropics/claude-plugins-official/issues/6993) and [#6994](https://github.com/anthropics/claude-plugins-official/issues/6994), both now closed. This is a telemetry-only fix.
- [#7000](https://github.com/anthropics/claude-plugins-official/pull/7000): drops every gitlink from the hooks' index copy, so a stale `.git` existence check no longer matters.
- [#6985](https://github.com/anthropics/claude-plugins-official/pull/6985): a timed-out SDK install no longer leaves `pip-unpack-*` folders behind, and retries now pause.
- [#6920](https://github.com/anthropics/claude-plugins-official/pull/6920): measurement of Windows sessions whose Python sits behind a link or junction.
- [#7023](https://github.com/anthropics/claude-plugins-official/pull/7023): the `mintlify` pin bump was closed. The publisher had been waiting since late October, and installs were still getting April content.

## 4. Community Hot Topics
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) (4 comments, 1 👍) is the most active item. Since about 2026-11-05 the directory rejects command hooks and local MCP servers from non-Verified organizations. The reporter says the docs don't explain how an organization becomes Verified. The underlying need is a documented verification path, or at least a clear policy.
- [#6915](https://github.com/anthropics/claude-plugins-official/issues/6915) (1 comment): `code-modernization`'s `tooling_only()` misses JS e2e harnesses (`*.e2e.mjs`) and test-oracle folders.
- The rest of the discussion is in the `security-guidance` PR series, which has no comment counts in the data.

## 5. Bugs & Stability
Ranked by severity:
1. [#7037](https://github.com/anthropics/claude-plugins-official/issues/7037): a `telegram` v0.0.7 `bun server.ts` poller ran at about 99% CPU for 16.5 hours while sibling instances stayed idle. The existing 0.0.7 mitigations were already in place, so this is a different cause. No fix PR.
2. [#7038](https://github.com/anthropics/claude-plugins-official/issues/7038): the `telegram` expanded permission prompt is sent as plain text, so Telegram auto-links paths and file names (`/usr/bin/grep`, `/bin/rm` become bot commands). This is a usability and safety nuisance, because a tap could trigger an unintended command. No fix PR.
3. [#6915](https://github.com/anthropics/claude-plugins-official/issues/6915): `code-modernization` misclassifies test harnesses. No fix PR.

Open `security-guidance` fixes:
- [#7031](https://github.com/anthropics/claude-plugins-official/pull/7031): sends a claude.ai token as a bearer. This addresses 401 `invalid x-api-key` errors (issues #6955 and #6953).
- [#7029](https://github.com/anthropics/claude-plugins-official/pull/7029): keeps project rules after the session changes folder. Today a `cd src` silently disables them.
- [#7028](https://github.com/anthropics/claude-plugins-official/pull/7028): makes tests stop depending on directory order.
- [#6921](https://github.com/anthropics/claude-plugins-official/pull/6921): stops the commit reviewer from renewing a stored login, which could sign the user out. Fixes #6860.
- [#6838](https://github.com/anthropics/claude-plugins-official/pull/6838): flags Stop findings in files the session never edited.

## 6. Feature Requests & Roadmap Signals
- The Verified-org path ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)) is a policy and documentation request. It is likely to get a docs clarification rather than a code change.
- Several measure-only PRs add telemetry: [#7033](https://github.com/anthropics/claude-plugins-official/pull/7033) (commits no hook saw), [#7032](https://github.com/anthropics/claude-plugins-official/pull/7032) (verdicts the CLI refused) and [#7030](https://github.com/anthropics/claude-plugins-official/pull/7030) (how custom rules are written). These point to upcoming tuning of the reviewer's coverage and rule performance.
- Prediction: 2.0.19 ([#7034](https://github.com/anthropics/claude-plugins-official/pull/7034)) will likely bundle the auth and rules fixes above.

## 7. User Feedback Summary
- Plugin authors want clear, documented criteria for command hooks and local MCP servers. The Verified gate appeared abruptly and the docs don't explain it.
- Telegram plugin users report resource problems (a CPU spin) and poor permission-prompt rendering.
- `security-guidance` users on gateways, `apiKeyHelper` or claude.ai tokens have hit authentication failures. Users with `cd` workflows lose project rules silently.
- Publishers wait weeks for pin bumps, as with `mintlify`.

## 8. Backlog Watch
- [#6915](https://github.com/anthropics/claude-plugins-official/issues/6915) has been open since 2026-10-27 with one comment and no fix.
- [#6921](https://github.com/anthropics/claude-plugins-official/pull/6921) (opened 2026-10-27) and [#6838](https://github.com/anthropics/claude-plugins-official/pull/6838) (opened 2026-10-20) are still open. They need review, especially #6921 because of its sign-out risk.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) needs an official maintainer response on the Verified policy.
- The bot SHA-bump PRs [#7035](https://github.com/anthropics/claude-plugins-official/pull/7035) and [#7036](https://github.com/anthropics/claude-plugins-official/pull/7036) are routine, but they should be merged to avoid drift.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-07

## 1. Today's Overview
The repo saw a burst of resource-submission activity: 25 issues were updated in 24h (21 open, 4 closed), and there were no PRs and no releases. Nearly all traffic is the automated submission pipeline. Most issues carry `validation-passed` and have exactly 1 comment, which looks like the validator bot's reply. The 4 closed issues were auto-closed or duplicates. Activity is high in volume but one-sided. There is no visible maintainer review or merge, so the intake queue is growing faster than it is processed.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today, so no list changes landed. The closed issues are intake cleanup, not content merges:
- [#3530](hesreallyhim/awesome-claude-code Issue #3530) Pushary skill, [#3527](hesreallyhim/awesome-claude-code Issue #3527) Claude Code Playbooks and [#3514](hesreallyhim/awesome-claude-code Issue #3514) AgentGauge were `auto-closed` while `validation-pending`.
- [#1917](hesreallyhim/awesome-claude-code Issue #1917) skill-graveyard was closed (`validation-passed`). It is most likely superseded by the resubmission [#3513](hesreallyhim/awesome-claude-code Issue #3513) under a different category, Observability > Usage & Cost.

## 4. Community Hot Topics
Reaction counts are 0 everywhere and comments max out at 1, so there are no real discussion hot spots. The themes in the submissions are more informative:
- **Parallel-session and multi-agent coordination:** [#3519](hesreallyhim/awesome-claude-code Issue #3519) Collision Guard, [#3510](hesreallyhim/awesome-claude-code Issue #3510) fanout, [#3523](hesreallyhim/awesome-claude-code Issue #3523) SpecWithCode, [#3516](hesreallyhim/awesome-claude-code Issue #3516) openCouncil. Users running several sessions at once need tools to avoid conflicts and merge their work.
- **Spec-driven development (SDLC):** [#3520](hesreallyhim/awesome-claude-code Issue #3520) Adaptive Agentic SDD, and openCouncil's PRD sign-off flow.
- **Usage, cost and session monitoring:** [#3518](hesreallyhim/awesome-claude-code Issue #3518) AI Meter, [#3513](hesreallyhim/awesome-claude-code Issue #3513) skill-graveyard, [#3528](hesreallyhim/awesome-claude-code Issue #3528) Agent Durbar.
- **Verification of "done" claims:** [#3509](hesreallyhim/awesome-claude-code Issue #3509) Andon and [#3515](hesreallyhim/awesome-claude-code Issue #3515) BuildProof both aim to stop agents from claiming success without proof.
- **Mobile, desktop and remote clients:** [#3521](hesreallyhim/awesome-claude-code Issue #3521) Sesori, [#3517](hesreallyhim/awesome-claude-code Issue #3517) Openbar.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only process problems are intake friction:
1. Three submissions were auto-closed in `validation-pending` state ([#3530](hesreallyhim/awesome-claude-code Issue #3530), [#3527](hesreallyhim/awesome-claude-code Issue #3527), [#3514](hesreallyhim/awesome-claude-code Issue #3514)), probably because of incomplete or non-conforming submissions.
2. Four submissions skipped the issue template or used a free-form format and have no validation label: [#3526](hesreallyhim/awesome-claude-code Issue #3526), [#3525](hesreallyhim/awesome-claude-code Issue #3525), [#3524](hesreallyhim/awesome-claude-code Issue #3524), [#3515](hesreallyhim/awesome-claude-code Issue #3515). They have 0 comments.

No fix PRs exist or are needed.

## 6. Feature Requests & Roadmap Signals
There are no feature requests for the list itself. The submissions point to where the ecosystem is heading:
- **Category growth:** the "Observability & Monitoring" sub-categories (Usage & Cost, Session Monitors) and "Agent Orchestration > SDLC" are receiving many submissions. They may need subdividing.
- **Candidate category:** "Memory & Context Persistence" ([#3524](hesreallyhim/awesome-claude-code Issue #3524) Memory Eternal).
- **Cross-tool support:** SpecWithCode runs Claude Code alongside Codex and Copilot, and Andon covers Claude Code and Codex, so the list's scope is drifting toward multi-agent tooling.
- **Policy question:** [#3515](hesreallyhim/awesome-claude-code Issue #3515) BuildProof is commercial and not open source. The author discloses this, but maintainers must decide whether such projects are in scope.

## 7. User Feedback Summary
Submitters show these pain points:
- Agents that declare "done" without evidence.
- Collisions and merge conflicts between parallel sessions.
- No visibility into which skills are used and how much Claude plan usage is left.
- Wanting to approve or monitor sessions away from the terminal, for example from the MacBook notch, a phone or a desktop app.
- Domain-specific workflows, such as medical manuscripts ([#3529](hesreallyhim/awesome-claude-code Issue #3529)), game prototyping ([#3531](hesreallyhim/awesome-claude-code Issue #3531)), the Russian marketplace MCP ([#3526](hesreallyhim/awesome-claude-code Issue #3526)) and SEO MCP skills ([#3525](hesreallyhim/awesome-claude-code Issue #3525)).

Submissions are all positive, since the authors are promoting their own tools. There is no explicit dissatisfaction with the list.

## 8. Backlog Watch
- [#2490](hesreallyhim/awesome-claude-code Issue #2490) claudex-setup: open since 2026-08-11 (about 3 months) with `validation-passed`. It was touched again on 2026-11-06 but still has no resolution.
- Roughly 17 open `validation-passed` submissions from the last two days are waiting for maintainer review, such as [#3509](hesreallyhim/awesome-claude-code Issue #3509) and [#3510](hesreallyhim/awesome-claude-code Issue #3510). The queue will keep growing without a batch triage pass.
- The four non-template submissions (#3526, #3525, #3524, #3515) have no bot feedback. They need a reformat request or a close.
- Duplicate handling: [#3513](hesreallyhim/awesome-claude-code Issue #3513) resubmits the closed [#1917](hesreallyhim/awesome-claude-code Issue #1917). Maintainers should confirm the category move is deliberate.

**Project health:** intake is healthy and automated validation works, but the review and merge side is stalled today, with no PRs and no releases.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-07

## 1. Today's Overview
Activity today is light and made up entirely of inbound submissions. There were 2 issues and 7 PRs updated in the last 24h, and all 9 items are open. Nothing was merged or closed and there were no releases. The maintainers are not clearing the intake queue today. Every item is a request to add a skill or listing, and none reports a bug or asks for a feature, so the repo is behaving as a curated directory with a growing backlog.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features advanced and no fixes landed. Seven submission PRs are waiting for review (see Backlog Watch).

## 4. Community Hot Topics
No item has any comments or 👍 reactions (all show 0 or undefined), so there are no hot threads by engagement. The themes in the submissions are:

- **SEO and marketing skills.** [#1371](https://github.com/VoltAgent/awesome-agent-skills/issues/1371) and [#1369](https://github.com/VoltAgent/awesome-agent-skills/issues/1369) are two issues from the same author (LoganOneal) asking to add CrakSEO's MCP connect skills. [#1365](https://github.com/VoltAgent/awesome-agent-skills/pull/1365) adds everyinfra/seo-skills. SEO and GEO (generative engine optimization) tooling is clearly drawing submissions.
- **MCP-paired skills.** CrakSEO ([#1369](https://github.com/VoltAgent/awesome-agent-skills/issues/1369)), everyinfra-agent-plugins ([#1366](https://github.com/VoltAgent/awesome-agent-skills/pull/1366)) and ru-marketplace-mcp ([#1370](https://github.com/VoltAgent/awesome-agent-skills/pull/1370)) all bundle skills with MCP servers. The line between "skill" and "MCP plugin" is blurring, and the list may need a policy on it.
- **Agent safety and context harnesses.** [#1362](https://github.com/VoltAgent/awesome-agent-skills/pull/1362) (Kintsugi, a PreToolUse guardrail) and [#1364](https://github.com/VoltAgent/awesome-agent-skills/pull/1364) (aigent-os, auto-clear with capsule memory) address guardrails and context engineering.
- **Vendor and domain skills.** [#1368](https://github.com/VoltAgent/awesome-agent-skills/pull/1368) is Tuist's official Xcode and Gradle skills. [#1367](https://github.com/VoltAgent/awesome-agent-skills/pull/1367) is Oil Studio for video editing and motion graphics.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed against the repo itself. These signals come from the submissions:

- Several submitters flag category gaps. [#1366](https://github.com/VoltAgent/awesome-agent-skills/pull/1366) notes there is no "AI and Data" subcategory, and [#1368](https://github.com/VoltAgent/awesome-agent-skills/pull/1368) proposes a new "Skills by Tuist" section. A taxonomy update, possibly adding AI/Data and a vendor-official section, looks likely.
- Marketing/SEO and Specialized Domains are the sections most likely to grow in the next update.

## 7. User Feedback Summary
No direct user feedback or complaints today. Contributors want visibility in a widely read directory. Submitters stress licensing (MIT, Apache-2.0), public repos with a README and SKILL.md, and traction such as 100+ stars ([#1365](https://github.com/VoltAgent/awesome-agent-skills/pull/1365)) as their case for inclusion. Several PR bodies carry a "Generated with Claude Code" line, which suggests some submissions are AI-assisted and may need closer quality checks.

## 8. Backlog Watch
- **Duplicate issues:** [#1369](https://github.com/VoltAgent/awesome-agent-skills/issues/1369) and [#1371](https://github.com/VoltAgent/awesome-agent-skills/issues/1371) are the same CrakSEO request. One should be closed as a duplicate. Both are also issues rather than PRs, while the repo's convention is PR-based submissions.
- **Possible overlap:** [#1365](https://github.com/VoltAgent/awesome-agent-skills/pull/1365) and [#1366](https://github.com/VoltAgent/awesome-agent-skills/pull/1366) are from the same author or organization (everyinfra) and could be reviewed together.
- **Oldest open item:** [#1362](https://github.com/VoltAgent/awesome-agent-skills/pull/1362) (Kintsugi, created 2026-11-06 and updated today) has been open longest. It is a security-relevant guardrail with large claims (neuro-symbolic verifier, Rust native), so it merits careful vetting.
- **Overall:** All 7 PRs are 1 to 2 days old and have no review comments. No item is critically stale, but the queue grows without any merges.

**Health assessment:** Inbound interest is steady and the repo is a popular listing target. The signs of concern are zero merges and zero maintainer interaction in the window, plus duplicate and promotional submissions that call for triage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
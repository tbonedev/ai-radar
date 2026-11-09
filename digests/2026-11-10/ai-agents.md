# MCP Ecosystem Digest 2026-11-10

> Issues: 18 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-09 17:05 UTC

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
Activity in modelcontextprotocol/servers over the last 24h is dominated by security reporting, not development. There were 18 issues updated (2 open, 16 closed), 0 PRs updated, and 0 releases. Fourteen of the 16 closed issues are duplicate or corrected CVE-style reports from a single author (ShieldPi1). Engineering throughput is low: no code was merged, and the only open maintenance item is a Docker documentation fix. Project health looks stable, but maintainers are spending triage time on noisy, duplicated security submissions.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the window, so no features or fixes advanced through code. The only closures were issues, almost all security-report triage (see section 5). Note that issue #5483 carries the `v2` label, which suggests ongoing v2 cleanup work, but it is still open.

## 4. Community Hot Topics
Comment counts are low everywhere. The most active items are:

- **[#5483](https://github.com/modelcontextprotocol/servers/issues/5483)** (5 comments, open, labels `bug`, `v2`): correct stale `--db-path` comments in the fetch/git Dockerfiles and clarify the git README. This shows users and contributors need accurate container run instructions, since stale comments mislead Docker users.
- **[#5492](https://github.com/modelcontextprotocol/servers/issues/5492)**, **[#5487](https://github.com/modelcontextprotocol/servers/issues/5487)**, **[#5488](https://github.com/modelcontextprotocol/servers/issues/5488)** (3 comments each, closed): security findings in mcp-server-fetch and mcp-server-git. Their descriptions were edited to remove incorrect CVE IDs and redirect disclosure to private vulnerability reporting per SECURITY.md.
- **[#5491](https://github.com/modelcontextprotocol/servers/issues/5491)** (2 comments, closed): sqlite `VACUUM INTO` bypass. The server is archived and outside the repo's security scope.

## 5. Bugs & Stability
Ranked by potential severity. All are reported against current or archived servers; no fix PRs appear in the data, and the reports were closed as issues rather than fixed via public PRs.

1. **mcp-server-git: repository hooks and `core.fsmonitor` execute via MCP tools** (CWE-78, command execution): [#5488](https://github.com/modelcontextprotocol/servers/issues/5488), with duplicates [#5490](https://github.com/modelcontextprotocol/servers/issues/5490), [#5504](https://github.com/modelcontextprotocol/servers/issues/5504), [#5505](https://github.com/modelcontextprotocol/servers/issues/5505).
2. **mcp-server-git: alternate object store (`objects/info/alternates`) escapes repository confinement** (CWE-22): [#5487](https://github.com/modelcontextprotocol/servers/issues/5487), with duplicates [#5489](https://github.com/modelcontextprotocol/servers/issues/5489), [#5493](https://github.com/modelcontextprotocol/servers/issues/5493), [#5498](https://github.com/modelcontextprotocol/servers/issues/5498).
3. **mcp-server-fetch: IPv6 site-local `fec0::/10` classified as public** (CWE-918, SSRF guard gap): [#5492](https://github.com/modelcontextprotocol/servers/issues/5492), with duplicates [#5500](https://github.com/modelcontextprotocol/servers/issues/5500), [#5501](https://github.com/modelcontextprotocol/servers/issues/5501), [#5502](https://github.com/modelcontextprotocol/servers/issues/5502), [#5503](https://github.com/modelcontextprotocol/servers/issues/5503). The report cites versions 2026.11.4 and 2026.10.24.
4. **mcp-server-sqlite: `write_query` allowlist bypass via `VACUUM INTO`** (CWE-22, arbitrary file write): [#5491](https://github.com/modelcontextprotocol/servers/issues/5491), [#5497](https://github.com/modelcontextprotocol/servers/issues/5497), [#5499](https://github.com/modelcontextprotocol/servers/issues/5499). The server is archived and out of scope.

**Caveats:**
- The reporter states the CVE IDs in the original posts were wrong. They belonged to unrelated products (FreeScout, Thymeleaf). Treat any "CVE-2026-4190x" titles above as **unverified and likely not assigned to this project**.
- The issue summaries don't say whether maintainers confirmed these findings. Closure may reflect duplicate or process handling, not validated fixes. Confirm status through the project's security advisories before relying on it.

## 6. Feature Requests & Roadmap Signals
- **[#5486](https://github.com/modelcontextprotocol/servers/issues/5486)** (open, 1 comment): a request to add the CrakSEO MCP connect skills, covering SEO, Search Console, and URL indexing via remote MCP servers. It reads as a third-party listing or promotion request, not a core roadmap item. It's unlikely to land in the next version unless the maintainers want a community listing.
- The `v2` label on #5483 suggests documentation and Docker consistency work is part of v2 preparation.
- There is no other roadmap signal in today's data.

## 7. User Feedback Summary
- Container users hit confusing or stale `--db-path` guidance in the Dockerfiles and README (#5483).
- Security-conscious users and researchers care about sandboxing and confinement for the git and fetch servers (repo boundaries, SSRF filtering), since these servers act on untrusted input in agent workflows.
- Process friction is visible: the repeated submissions and CVE-ID corrections show confusion over where to report vulnerabilities. SECURITY.md directs reporters to private vulnerability reporting.

## 8. Backlog Watch
The window has no long-stale items, because the data covers only recently updated issues. Items that need maintainer attention:
- **[#5483](https://github.com/modelcontextprotocol/servers/issues/5483)**: open since 2026-11-06 with 5 comments, no linked PR visible. It is a low-effort docs fix that could be closed quickly.
- **[#5486](https://github.com/modelcontextprotocol/servers/issues/5486)**: open since 2026-11-07, needs a decision to accept or decline the third-party listing.
- **Security triage:** maintainers should check that the underlying git and fetch findings (hook and fsmonitor execution, alternates confinement, IPv6 site-local classification) were handled through the private channel, and consider moderating the duplicate public posts. Fixes would ideally ship as a tracked release with an advisory.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison — 2026-11-10

**Scope note:** The six digests cover the MCP and agent-skills *ecosystem* (servers, registries, curated lists, plugin directories). They are not personal AI assistant projects. The comparison below is therefore about ecosystem infrastructure. Several digests have limited data (undefined comment counts, top-20 samples only).

## 1. Ecosystem Overview
The MCP ecosystem has two layers. The first is reference code and governance: MCP Servers, the Registry and the Plugins directory. The second is discovery and curation: Awesome MCP Servers, the Docker MCP Registry, Awesome Claude Code and Awesome Agent Skills. Submission inflow is high in every discovery channel, and review throughput is the common bottleneck. Security and trust gating are now the main governance themes: Verified-org rules, SSRF and sandbox confinement findings, and open-source requirements. Hosted remote MCP servers, skills and plugins are replacing self-hosted images as the main distribution unit.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers | 18 (2 open, 16 closed) | 0 | None | 6/10: no code merged; triage noise from duplicate security reports |
| MCP Registry | 2 | 11 (10 merged/closed) | None (1.8.8 unchanged) | 9/10: active infrastructure hardening, no open regressions |
| Awesome MCP Servers | 0 | 137 (131 open, 6 closed) | None | 6/10: strong intake, about 96% of updated PRs unmerged |
| Docker MCP Registry | 0 | 50 (49 open, 1 closed) | None | 5/10: review lag, bot PR stuck since 2026-07-31 |
| Claude Plugins (official) | 6 | 6 (3 closed) | None | 6.5/10: active, but friction over Verified-org policy and scanner output |
| Awesome Claude Code | 22 (20 open, 2 closed) | 0 | None | 7/10: automated validation works; queue is growing |
| Awesome Agent Skills | 0 | 7 (all open) | None | 6.5/10: healthy inflow, nothing merged |

Health scores are my own judgement from the digests, not measured values.

## 3. MCP Servers's Position
- **Advantages:** It is the canonical reference implementation (fetch, git, sqlite), and it is the code the other projects list, register or package. It is the only project here whose findings concern the runtime security of the servers themselves.
- **Technical approach:** The others handle metadata, listings or infrastructure. MCP Servers is the one that ships executable code, so its risk profile differs. Reported issues cover repo confinement, hook execution and SSRF filtering.
- **Community size:** By visible volume it is mid-sized, with 18 issues but 0 PRs. Awesome MCP Servers (137 PRs) and Docker MCP Registry (50 PRs) show far larger contribution flow. Today's issue traffic is mostly 14 duplicate reports from one author, so it overstates real engagement.
- **Weak point:** No code was merged in the window. Maintainers appear to be absorbing public duplicates of what should be private disclosures. The digest doesn't confirm whether the findings were validated, and the CVE IDs cited are probably wrong.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Security and trust gating | MCP Servers, Plugins, Docker Registry, Awesome MCP Servers, Awesome Agent Skills | Git hook and alternates confinement, SSRF `fec0::/10`, Verified-org rules for hooks and local MCP servers, open-source requirements for hosted servers, vendor disclosure of commercial interest |
| Automated validation | Awesome Claude Code, Awesome MCP Servers, Plugins | Bot labels (`validation-passed`, `has-glama`) and scanner findings. Template failures auto-closed two issues, and scanner output is not actionable (#7045) |
| Remote and hosted servers | Docker Registry, Awesome MCP Servers, Registry | Streamable-HTTP endpoints, hybrid image-plus-remote listings, URL and namespace reclamation (#1834) |
| Memory, context and cost visibility | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | Agent memory servers, usage and cache monitors, context routing |
| Batch and agent-generated submissions | Awesome MCP Servers, Docker Registry | Single authors filing 4-5 entries at once, plus `🤖🤖🤖` markers |
| Cross-platform robustness | Plugins | Windows backslash path bug in the `remember` hook (#7044) |

## 5. Differentiation Analysis
- **MCP Servers:** a code repository aimed at server authors and security researchers.
- **MCP Registry:** authoritative namespace and metadata infrastructure, run as production Kubernetes with an NGINX Gateway Fabric migration. It is aimed at publishers and clients.
- **Awesome MCP Servers:** the largest open list, with automated format checks and a Glama dependency. It is aimed at developers who want to discover servers.
- **Docker MCP Registry:** a container and remote catalog with stricter packaging and open-source expectations, aimed at Docker-based deployments.
- **Claude Plugins (official):** the vendor-governed directory. It has the strictest trust model (Verified orgs) and is aimed at Claude Code plugin authors.
- **Awesome Claude Code:** an issue-driven list, categorized by workflow (Mods, observability, orchestration), aimed at Claude Code users.
- **Awesome Agent Skills:** a skills list with an official-vendor emphasis (CLI-as-skill), aimed at agent developers across clients.

## 6. Community Momentum & Maturity
- **Tier 1, high volume:** Awesome MCP Servers (137 PRs), Docker MCP Registry (50 PRs). Inflow is fast, and the bottleneck is review and merge capacity.
- **Tier 2, active and engineered:** MCP Registry (10 of 11 PRs closed) is the most disciplined and effective project in the set. Claude Plugins and Awesome Claude Code are moderately active.
- **Tier 3, low or stalled throughput:** MCP Servers (0 PRs), Awesome Agent Skills (7 open, 0 merged).
- **Rapidly iterating:** MCP Registry (infrastructure), Docker Registry and Awesome MCP Servers (submissions).
- **Stabilizing:** MCP Registry has completed its migration, and the next work is probably observability and capacity tuning.
- **Needs process work:** MCP Servers (security intake) and Plugins (Verified-org documentation).

## 7. Trend Signals
1. **Distribution is shifting to hosted remote servers.** Docker Registry, Awesome MCP Servers and the Registry all show this. Developers should plan for auth, namespace ownership and URL migration.
2. **Trust and provenance are becoming gating requirements.** The Verified-org policy, open-source requirements and security reports all point the same way. Publishers should document ownership and expect hook and local-server scrutiny.
3. **Security surfaces are shifting to server tool boundaries.** Git hooks, alternate object stores, SSRF guards and SQL file-write bypasses are the classes seen today. Agent builders should sandbox and not rely on default server behaviour.
4. **Maintainer capacity is the scaling limit.** Automation (validation bots, scanners) helps only if its output is precise. Expect tighter gating and limits on batch or agent-authored submissions.
5. **Demand is moving toward observability and cost control.** Mods, usage monitors, memory and context routing are the busiest categories. Tooling in these areas has a clear audience.
6. **Skills and plugins are emerging as a parallel discovery layer.** CrakSEO's request appeared in both MCP Servers and the Registry, and CLI-as-skill packaging appears in Agent Skills. Scope decisions about whether skills belong in MCP registries are still open.

**Data limitations:** Comment counts are missing for Awesome MCP Servers and Docker Registry. The merged PRs for those two are unidentified. Health scores and trend inferences are mine, not stated by maintainers.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest — 2026-11-10

## 1. Today's Overview
Activity over the last 24h was moderate and dominated by infrastructure work. Of 11 PRs updated, 10 were merged or closed, nearly all from maintainer rdimitrov, who completed the production migration to NGINX Gateway Fabric. Only 2 issues were updated, and both are registry-entry or listing requests rather than product bugs. There were no new releases. Project health looks good: the maintainers are actively hardening operations, with no open regressions reported.

## 2. Releases
No new releases. The production migration notes mention application release 1.8.8 staying unchanged during the cutover ([#1827](https://github.com/modelcontextprotocol/registry/pull/1827)).

## 3. Project Progress
All the closed PRs belong to one Gateway Fabric migration and its follow-up cleanup:

- **Staging migration:**
  - [#1822](https://github.com/modelcontextprotocol/registry/pull/1822) completed the standalone staging Gateway migration. It retired ingress-nginx and the duplicate canary.
  - [#1824](https://github.com/modelcontextprotocol/registry/pull/1824) restored two-node staging (one database VM, one shared worker) and removed the two dedicated Gateway VMs.
- **Production cutover:**
  - [#1825](https://github.com/modelcontextprotocol/registry/pull/1825) added guarded adoption, managed-certificate and standalone phases, with activation disabled in production.
  - [#1827](https://github.com/modelcontextprotocol/registry/pull/1827) adopted the production Gateway IP and certificates while traffic stayed on ingress-nginx.
  - [#1828](https://github.com/modelcontextprotocol/registry/pull/1828) moved the phase to `managed` and disabled the old Ingress certificate shim.
  - [#1829](https://github.com/modelcontextprotocol/registry/pull/1829) switched `gatewayProductionPhase` to `standalone`. Production now serves both registry hostnames and Grafana through Gateway Fabric, with Vector supplying edge metrics.
- **Stabilization and cleanup:**
  - [#1831](https://github.com/modelcontextprotocol/registry/pull/1831) cut production Vector's CPU request from 500m to 250m, so the autoscaler could consolidate workers.
  - [#1832](https://github.com/modelcontextprotocol/registry/pull/1832) fixed NGINX stopping connections 30s after eviction while the load balancer still routed to the node. It now serves for 90s before graceful QUIT, and pod grace is 180s.
  - [#1830](https://github.com/modelcontextprotocol/registry/pull/1830) updated the deployment guide to record the completed migration.
  - [#1833](https://github.com/modelcontextprotocol/registry/pull/1833) retired the idle K8up operators while preserving Restic credentials, the archive CronJob, buckets and retained snapshots.

## 4. Community Hot Topics
Community discussion is light. Neither issue has more than 2 comments, and none have reactions.
- [#1815](https://github.com/modelcontextprotocol/registry/issues/1815) (2 comments) is a request to add CrakSEO "connect" skills for hosted SEO MCP servers. It points to a skills repo and plugins. The underlying need is a way for vendors to get skills or plugins listed or discovered alongside registry servers. The request is also arguably outside the registry's server-metadata scope.
- [#1834](https://github.com/modelcontextprotocol/registry/issues/1834) (1 comment) is from the Tier 1 Protocol team. They want to reclaim the remote URL `https://mcp.tier1protocol.app/mcp` from `network.tier1protocol/tier1` (v1.0.1) and deprecate the stale entry, because the namespace was wrong (`.app` vs `.network`). The need here is a supported way to migrate namespaces and reassign URLs.

## 5. Bugs & Stability
No new bugs or crashes were reported. Operational risks were handled by the maintainers:
1. **Load balancer and NGINX shutdown race (medium):** connections were dropped during worker consolidation. Fixed in [#1832](https://github.com/modelcontextprotocol/registry/pull/1832).
2. **Autoscaler unable to consolidate (low):** the CPU reservation was too high. Fixed in [#1831](https://github.com/modelcontextprotocol/registry/pull/1831).
3. **Dependency update (open):** [#1826](https://github.com/modelcontextprotocol/registry/pull/1826) is a Dependabot bump of `h2` from 4.3.0 to 4.4.1 in `/deploy/gateway-canary`. It is the only open PR. Since #1822 retired the canary, this path may be obsolete.

## 6. Feature Requests & Roadmap Signals
- No functional feature requests this cycle.
- [#1815](https://github.com/modelcontextprotocol/registry/issues/1815) hints at demand for skills or plugin discovery. A near-term implementation looks unlikely.
- [#1834](https://github.com/modelcontextprotocol/registry/issues/1834) points to a missing self-service path for namespace correction and URL reclamation. A policy or tooling improvement is plausible, but this is my inference and not a maintainer statement.
- Infrastructure signals: staging and production now run on the same Gateway stack, so the next work will probably be observability and capacity tuning, not further migration.

## 7. User Feedback Summary
- Publishers can make namespace mistakes that are hard to fix on their own. Tier 1 published under the wrong domain and needs maintainer help.
- Vendors want better visibility for their MCP-related tooling, as with CrakSEO.
- Feedback volume is too small to judge overall satisfaction.

## 8. Backlog Watch
- [#1815](https://github.com/modelcontextprotocol/registry/issues/1815) has been open since 2026-11-07 with 2 comments. It needs a maintainer decision on whether skills listings are in scope.
- [#1834](https://github.com/modelcontextprotocol/registry/issues/1834) is new (2026-11-09). It needs maintainer verification of domain ownership before the URL transfer and deprecation.
- [#1826](https://github.com/modelcontextprotocol/registry/pull/1826) should be reviewed or closed, depending on whether the canary directory still exists.
- Nothing in the backlog looks critically stale at the moment.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-10

## 1. Today's Overview
The repo (punkpeye/awesome-mcp-servers) had no issue or release activity in the last 24h. All activity was in pull requests: 137 updated, 131 still open and 6 merged or closed. That is a high-volume, submission-driven pattern, and the repo works as a curated list. Nearly all new PRs add a server entry, and many carry automated validation tags (`has-glama`, `valid-name`, `has-emoji`). Intake is strong. The limiting factor looks like review and merge capacity, since about 96% of updated PRs are still open.

## 2. Releases
No new releases.

## 3. Project Progress
Only 6 PRs were merged or closed today, and none are in the top-20 sample provided. I can't say which entries landed or which were rejected. The merge rate (about 4% of updated PRs) means the list grew only slightly relative to the inflow. Details on the 6 would need the full PR data.

## 4. Community Hot Topics
The data lists no comment counts (all show `undefined`), so I can't rank by discussion. The themes in the sampled PRs are:

- **Memory and knowledge tools**: [#17231 MinniMemoryMCP](https://github.com/punkpeye/awesome-mcp-servers/pull/17231) (compiles agent memory files into a small always-on body plus on-demand files), [#18799 folder-brain](https://github.com/punkpeye/awesome-mcp-servers/pull/18799) (a Markdown folder with an 8-tool stdio server), and [#19025 who?? Cognitive Digital Twin](https://github.com/punkpeye/awesome-mcp-servers/pull/19025). Agent memory and context cost are clearly in demand.
- **Data and scraping**: a run of `mambalabsdev` PRs, namely [#19028 tennis data](https://github.com/punkpeye/awesome-mcp-servers/pull/19028), [#19026 list extractor](https://github.com/punkpeye/awesome-mcp-servers/pull/19026), [#19024 Facebook posts](https://github.com/punkpeye/awesome-mcp-servers/pull/19024), [#19023 Bluesky](https://github.com/punkpeye/awesome-mcp-servers/pull/19023) and [#19021 Google Maps](https://github.com/punkpeye/awesome-mcp-servers/pull/19021). One author is submitting many entries in a batch.
- **Coding agents and browser automation**: [#19027 MiniMax Code / TraeCN / Gemini Web](https://github.com/punkpeye/awesome-mcp-servers/pull/19027), [#19033 SoftGlaze Browser](https://github.com/punkpeye/awesome-mcp-servers/pull/19033), [#19030 zai-web-search-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/19030).
- **Communication, security and creative tools**: [#19031 evolution-whatsapp-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/19031), [#18966 Plainmail](https://github.com/punkpeye/awesome-mcp-servers/pull/18966), [#19019 LinkPreflight](https://github.com/punkpeye/awesome-mcp-servers/pull/19019), [#19034 CutVoke](https://github.com/punkpeye/awesome-mcp-servers/pull/19034), [#19022 creative-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/19022).

The underlying need is discoverability. Authors want a listing in the canonical index, and many cite Glama, the registry, or npm presence.

## 5. Bugs & Stability
No issues were reported, and no bug or regression PRs appear in the sample. This is a content repo, so stability means list quality. Validation tags flag likely problems:

- `invalid-name` and `missing-emoji`: [#19020 crypto-regime-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/19020) fails the format checks.
- `missing-glama` (no Glama listing): [#19030](https://github.com/punkpeye/awesome-mcp-servers/pull/19030), [#19029](https://github.com/punkpeye/awesome-mcp-servers/pull/19029), [#19031](https://github.com/punkpeye/awesome-mcp-servers/pull/19031), [#19032](https://github.com/punkpeye/awesome-mcp-servers/pull/19032), [#19025](https://github.com/punkpeye/awesome-mcp-servers/pull/19025).

These are likely to need author fixes before merge.

## 6. Feature Requests & Roadmap Signals
There are no feature requests, since there are no issues. Signals come from submission trends. Memory and context tooling, browser and desktop-app automation, and pay-per-call monetization (for example x402 in [#19020](https://github.com/punkpeye/awesome-mcp-servers/pull/19020)) are all growing. The `🤖🤖🤖` marker on many PRs suggests automated or agent-assisted submissions. That may push maintainers toward tighter automated gating. I can't confirm this from the data, so treat it as a hypothesis.

## 7. User Feedback Summary
There are no comments in the data, so I have no direct feedback. The submissions show that:
- Contributors value zero-config, local-first, no-telemetry servers, as in [#19029 Lazy ASO](https://github.com/punkpeye/awesome-mcp-servers/pull/19029).
- Some entries are hosted or bridge servers, such as [#18966](https://github.com/punkpeye/awesome-mcp-servers/pull/18966), which the list's conventions don't clearly cover.
- Several authors disclose a commercial affiliation. This is a transparency norm worth noting.

## 8. Backlog Watch
- [#17231 MinniMemoryMCP](https://github.com/punkpeye/awesome-mcp-servers/pull/17231) was opened 2026-10-22 and is about 19 days old. It was updated today but is still unmerged, with a `missing-glama` tag.
- [#18645 gsc-mcp-core](https://github.com/punkpeye/awesome-mcp-servers/pull/18645) (opened 2026-11-05, labeled fast-track) and [#18799 folder-brain](https://github.com/punkpeye/awesome-mcp-servers/pull/18799) (opened 2026-11-06) are also still open.
- At 131 open PRs updated in a day, the full backlog is probably large. Maintainers could use stricter auto-closing for PRs that fail validation, batch merges for those that pass (`has-glama`, `valid-name`, `has-emoji`), and limits on batch submissions from one author.

**Data caveat:** Comment counts are `undefined` and only the top 20 of 137 PRs were shown, so the hot-topic and merged-PR analysis is limited.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest: 2026-11-10

## 1. Today's Overview
Docker MCP Registry had no issue activity and no releases in the last 24h. All activity was PR-driven: 50 PRs were updated, 49 of them open and 1 merged or closed. Most of the updates are new-server submissions. Remote MCP servers are common, and several submitters sent batches. The registry looks healthy as an intake channel, but maintainer throughput looks low. Comment counts are not reported ("undefined"), so discussion levels can't be measured. The data lists 20 of the 50 PRs.

## 2. Releases
No new releases.

## 3. Project Progress
- The data shows one merged or closed PR out of 50, and it is not among the 20 listed PRs, so I can't identify it.
- Of the listed PRs, the only maintenance item is the bot-generated [#4588 chore: update pin for dockerhub](https://github.com/docker/mcp-registry/pull/4588). It is still open and was created 2026-07-31, so the automated pin update is stuck.
- No new features or fixes landed in the listed data.

## 4. Community Hot Topics
Comment and reaction data is unavailable. Every listed PR shows 0 👍 and undefined comments. I used themes and submission volume as the signal instead.

- **Batch submissions by single authors:**
  - `hiesem` filed four Duo servers: [#6859 social media data](https://github.com/docker/mcp-registry/pull/6859), [#6858 crypto derivatives](https://github.com/docker/mcp-registry/pull/6858), [#6857 SEO/keywords](https://github.com/docker/mcp-registry/pull/6857) and [#6856 data utilities](https://github.com/docker/mcp-registry/pull/6856).
  - `mambabuilt` filed five scraper and data servers: [#6853 tennis](https://github.com/docker/mcp-registry/pull/6853), [#6852 list extractor](https://github.com/docker/mcp-registry/pull/6852), [#6851 Facebook posts](https://github.com/docker/mcp-registry/pull/6851), [#6850 Bluesky posts](https://github.com/docker/mcp-registry/pull/6850) and [#6849 Google Maps places](https://github.com/docker/mcp-registry/pull/6849).
- **Finance and crypto:** [#6847 Alpha Bazaar](https://github.com/docker/mcp-registry/pull/6847), [#6845 Orderly Network](https://github.com/docker/mcp-registry/pull/6845), [#6844 Warden](https://github.com/docker/mcp-registry/pull/6844), [#6854 monerometrics](https://github.com/docker/mcp-registry/pull/6854) and [#5912 BlindPay](https://github.com/docker/mcp-registry/pull/5912).
- **Regional and vertical services:** [#5947 Marcel (French tax and retirement)](https://github.com/docker/mcp-registry/pull/5947), [#6846 zorgverzekering (Dutch health insurance)](https://github.com/docker/mcp-registry/pull/6846), [#6855 Fokals (market intelligence)](https://github.com/docker/mcp-registry/pull/6855) and [#6848 Rally Studio (game building)](https://github.com/docker/mcp-registry/pull/6848).

Underlying needs:
- Vendors want distribution through Docker's catalog.
- Hosted remote endpoints are replacing self-hosted images.
- Data, finance and agent-commerce tools are in demand.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, because there were no issues.

Possible stability concerns:
- [#4588](https://github.com/docker/mcp-registry/pull/4588): the automated pin-update job produced a PR that has stayed open for over three months, which may point to a CI or bot problem.
- Several submissions are closed-source hosted endpoints, for example [#6859](https://github.com/docker/mcp-registry/pull/6859), [#6858](https://github.com/docker/mcp-registry/pull/6858), [#6857](https://github.com/docker/mcp-registry/pull/6857), [#6856](https://github.com/docker/mcp-registry/pull/6856), [#6848](https://github.com/docker/mcp-registry/pull/6848) and [#6855](https://github.com/docker/mcp-registry/pull/6855). They will need review against the registry's open-source and security requirements.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed as issues. The PR flow suggests these directions:
- **Remote and streamable-HTTP servers** are now a main submission type. Examples are [#6844](https://github.com/docker/mcp-registry/pull/6844), [#6854](https://github.com/docker/mcp-registry/pull/6854) and [#6843](https://github.com/docker/mcp-registry/pull/6843). Expect more review tooling and guidelines for remote servers, including auth handling and hosted-only listings.
- **Hybrid listings** that offer both a Docker image and a hosted remote, such as [#6845](https://github.com/docker/mcp-registry/pull/6845), may need a documented pattern.
- **Finance and trading** is a fast-growing category, so a dedicated category or stricter review may follow.

These are inferences from submission patterns, not stated maintainer plans.

## 7. User Feedback Summary
There is no direct user feedback (no comments or issues). The submissions imply:
- **Use cases:** market and company intelligence, crypto and derivatives data, social scraping, SEO data, and regional compliance information such as tax and insurance.
- **Pain points:**
  - Submitters are publishing hosted services without public source, which creates friction with the registry's open-source requirement.
  - Authentication varies, from none to bearer API keys (see [#5912](https://github.com/docker/mcp-registry/pull/5912)).
- **Satisfaction:** it can't be measured from this data.

## 8. Backlog Watch
- [#4588 chore: update pin for dockerhub](https://github.com/docker/mcp-registry/pull/4588): open since 2026-07-31, bot-authored. It needs a merge or close decision, or a fix for the bot.
- [#5947 Marcel remote MCP server](https://github.com/docker/mcp-registry/pull/5947): open since 2026-10-21, about 3 weeks.
- [#5912 BlindPay remote MCP server](https://github.com/docker/mcp-registry/pull/5912): open since 2026-10-20, about 3 weeks. It was submitted from the vendor's official org.
- 49 of 50 updated PRs are still open, and most of the listed ones were created on 2026-11-09. This suggests submissions are arriving faster than they are reviewed. Maintainers could consider batch review, automated validation, or a triage label.

**Health assessment:** Contributor interest is high and growing. Review throughput is the bottleneck, and the PR flow is dominated by remote-server submissions, several from the same authors.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-10

## 1. Today's Overview
Activity is light-to-moderate: 6 issues and 6 PRs were updated in 24h, with no new releases. The dominant theme is the plugin directory's new **Verified organization** gating (command hooks, local MCP servers), which is drawing the most discussion. Bug reports target individual plugins (`remember`, `security-guidance`, `code-modernization`). Automated SHA bumps and a few maintainer-managed entry updates make up the PR flow. Overall health is steady, but several bot PRs are aging, and the directory's automated review feedback is generating friction.

## 2. Releases
None.

## 3. Project Progress
Three PRs were closed/merged today:
- [#7018](https://github.com/anthropics/claude-plugins-official/pull/7018) **bump(unity)**: advances the entry to v0.1.9-beta (`81b6079e`), which brings 33 skills, a root README fix, and tool names within Bedrock's 64-character cap.
- [#6998](https://github.com/anthropics/claude-plugins-official/pull/6998) **security-guidance**: proposed telemetry counting Bash hook starts that match no commit or push (1-in-10 reporting). It was closed. The data doesn't say whether it was merged.
- [#7046](https://github.com/anthropics/claude-plugins-official/pull/7046) **zai-web-search-mcp**: a new third-party plugin submission (Z.ai GLM Coding Plan web search/reader MCP). It was closed the same day it was opened, with no stated reason in the data.

Still open: [#6904](https://github.com/anthropics/claude-plugins-official/pull/6904) (SAP Fiori rename/repoint), [#6942](https://github.com/anthropics/claude-plugins-official/pull/6942) (qodo SHA bump), [#6847](https://github.com/anthropics/claude-plugins-official/pull/6847) (superpowers SHA bump).

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) Becoming a Verified organization** (14 comments, 5 👍). Since about 2026-11-05 the directory rejects command hooks and local MCP servers from non-Verified orgs. The reporter says the docs don't explain how to get Verified. The underlying need is a documented, transparent path to verification. Without one, many legitimate plugin authors are blocked.
- **[#7045](https://github.com/anthropics/claude-plugins-official/issues/7045) Credential-scan finding is unactionable.** The "Uses a credential from the user's machine" finding flags `SKILL.md` files without quoting the line or pattern. Its suggested fix doesn't apply to skills. The need is more precise, actionable scanner output. This is related to #7024 as feedback on the review pipeline.

## 5. Bugs & Stability
Ranked by likely impact:
1. [#7043](https://github.com/anthropics/claude-plugins-official/issues/7043) **security-guidance 2.0.18**: on a merge-commit push, `_compute_push_sweep_base` reviews the merged-in branch's full divergence, so pre-existing findings are re-reported. This produces noisy security output and erodes trust. No fix PR is linked.
2. [#7044](https://github.com/anthropics/claude-plugins-official/issues/7044) **remember 0.43.1**: on Windows, `${TRANSCRIPT##*/}` fails on backslash paths, which breaks the scan cache. The PostToolUse hook then rescans the whole transcript on every tool call, a performance regression. No fix PR is linked.
3. [#6898](https://github.com/anthropics/claude-plugins-official/issues/6898) **code-modernization 1.0.0**: `trace_rules.py` counts all P0 rules against modules that no rule is tied to. Reimagine infra services can therefore never be PROVEN. This is a logic bug in the proof-pack check. No fix PR is linked.

None of these are crashes or data-loss issues.

## 6. Feature Requests & Roadmap Signals
- A documented verification path for organizations ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)). A docs update or clarified checklist looks likely, since the policy is already enforced.
- Scanner findings that include file, line, and matched pattern, with skill-appropriate remediation ([#7045](https://github.com/anthropics/claude-plugins-official/issues/7045)).
- The SAP rename ([#6904](https://github.com/anthropics/claude-plugins-official/pull/6904)) is the likeliest near-term change to land.

## 7. User Feedback Summary
- Plugin authors are frustrated by opaque gatekeeping. The policy is enforced but poorly documented, and automated findings lack evidence.
- Windows users hit portability gaps in shell-based hooks.
- Users of security and analysis plugins want results that are accurate and low-noise.
- [#7040](https://github.com/anthropics/claude-plugins-official/issues/7040) ("Scrappy") looks like a misposted, non-actionable item. It has 1 comment and no clear content. It is probably a triage or cleanup candidate.

## 8. Backlog Watch
- [#6847](https://github.com/anthropics/claude-plugins-official/pull/6847) superpowers SHA bump: open since 2026-10-21 (about 3 weeks).
- [#6898](https://github.com/anthropics/claude-plugins-official/issues/6898) code-modernization bug: open since 2026-10-26 with only 2 comments.
- [#6904](https://github.com/anthropics/claude-plugins-official/pull/6904) SAP Fiori rename: open since 2026-10-26.
- [#6942](https://github.com/anthropics/claude-plugins-official/pull/6942) qodo bump: open since 2026-10-29.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) needs an official maintainer answer on Verified-org criteria, since it is the highest-engagement item.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-11-10

## 1. Today's Overview
The repository saw high issue activity and no code activity. 22 issues were updated in 24h (20 open, 2 closed), with 0 PRs and 0 releases. Almost all traffic is automated resource-submission intake: 19 of the 22 issues carry `validation-passed`. The list is a curated resource index, not a software project, so this pattern is normal. Health looks good on submission throughput. The open question is how quickly maintainers review the queue.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. The only closures were two issues that the validation bot auto-closed (`auto-closed`, `validation-pending`):
- [#3562](https://github.com/hesreallyhim/awesome-claude-code/issues/3562): "Agent Panel" (Mods). The title was left as the template placeholder `<name of your resource>`.
- [#3557](https://github.com/hesreallyhim/awesome-claude-code/issues/3557): VisualGrilling (Start Here). The title was not in the `[Resource]:` format.

Both look like format failures rather than rejections on merit. They can probably be resubmitted.

## 4. Community Hot Topics
No issue has more than 1 comment, and none has any 👍. The single comment on each is most likely the validation bot's. Engagement therefore says nothing about interest. Category clustering is the better signal:

- **Mods / usage visibility** (5 issues): [#3566](https://github.com/hesreallyhim/awesome-claude-code/issues/3566) claude-load (per-session CPU/memory), [#3556](https://github.com/hesreallyhim/awesome-claude-code/issues/3556) crab-office (pixel-art session view), [#3548](https://github.com/hesreallyhim/awesome-claude-code/issues/3548) nextcost (prompt-cache countdown), [#3439](https://github.com/hesreallyhim/awesome-claude-code/issues/3439) claude-code-mods (seven mods for context and plan limits), and the closed #3562.
- **Observability and monitoring** (4 issues): [#3561](https://github.com/hesreallyhim/awesome-claude-code/issues/3561) agent-strace, [#3555](https://github.com/hesreallyhim/awesome-claude-code/issues/3555) agent-tap, [#3552](https://github.com/hesreallyhim/awesome-claude-code/issues/3552) claude-usage-page, [#3547](https://github.com/hesreallyhim/awesome-claude-code/issues/3547) xscapes.
- **Agent orchestration** (4 issues): [#3565](https://github.com/hesreallyhim/awesome-claude-code/issues/3565) crewchat (an MCP group chat across several agents), [#3554](https://github.com/hesreallyhim/awesome-claude-code/issues/3554) claude-bulkhead, [#3550](https://github.com/hesreallyhim/awesome-claude-code/issues/3550) Jori, [#3549](https://github.com/hesreallyhim/awesome-claude-code/issues/3549) PitCrew.

The underlying need is visibility and control over cost, context, and parallel sessions. Submitters are building tooling around that need.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported. The only process-level problem is that the intake template is easy to get wrong, as the two auto-closed issues show. No fix PRs exist, and none are needed.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Submission trends do suggest where the curated list may grow:
- **Multi-agent clients and cross-agent tooling.** [#3560](https://github.com/hesreallyhim/awesome-claude-code/issues/3560) Friday and #3565 both target Claude Code, Codex, Cursor, and Gemini CLI together.
- **Security scanning.** [#3563](https://github.com/hesreallyhim/awesome-claude-code/issues/3563) Spellwarden scans skills, plugins, and hooks.
- **Guardrails.** [#3567](https://github.com/hesreallyhim/awesome-claude-code/issues/3567) covers hooks as guardrails.
- **Memory and context.** [#3564](https://github.com/hesreallyhim/awesome-claude-code/issues/3564) Context Routing.
- **Local inference.** [#3553](https://github.com/hesreallyhim/awesome-claude-code/issues/3553) Kapitsa, a native Apple-silicon engine. Its fit under "Providers, Runtime & Integration Infrastructure" may be debated.

Observability and Mods are the busiest categories and are the most likely to get new or split subsections.

## 7. User Feedback Summary
Submitters are asking for:
- Cost and usage transparency: #3548, #3552, #3439.
- Safe parallel sessions on one machine: #3554, #3566.
- Session and subagent observability: #3561, #3555, #3547.
- Guardrails and security: #3563, #3567.

Some submitters seem to want Claude Code to work as one component among several agents, not as a standalone tool. No satisfaction or dissatisfaction signals are present, because the issues are submissions rather than feedback.

## 8. Backlog Watch
- [#3439](https://github.com/hesreallyhim/awesome-claude-code/issues/3439) claude-code-mods was opened on 2026-11-03 and updated on 11-08. It is the oldest item in today's window and is still open after passing validation.
- [#3555](https://github.com/hesreallyhim/awesome-claude-code/issues/3555) agent-tap has 0 comments and no `validation-passed` label. It is the only open submission without bot feedback, so check whether validation failed to run or is still pending.
- The 18 other open items marked `validation-passed` are waiting on maintainer review. Seven of them were opened on 11-08 and the rest on 11-09.

**Health summary:** Submission intake is strong and automated validation works. No bugs or releases were reported. Maintainer review capacity is the main constraint to watch. The window shows no merged PRs, so the queue is growing.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-10

## 1. Today's Overview
The repository is a curated list, so activity shows up as PRs rather than issues or releases. In the last 24h there were 0 issues, 0 releases and 7 updated PRs. All 7 PRs are open, none were merged or closed, and none have visible comments or reactions. Contribution inflow is healthy: six PRs add skills and one is a maintenance fix. Review throughput is the weak point, because nothing was merged today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. The pending work is:

**New skill submissions (6):**
- [#1383](https://github.com/VoltAgent/awesome-agent-skills/pull/1383): speakeasy-api/sdk-generation-skills. Official Speakeasy CLI skills (14), covering SDK setup and generating MCP servers and Terraform providers. Category: Development and Testing.
- [#1382](https://github.com/VoltAgent/awesome-agent-skills/pull/1382): buddy/buddy. Lets an agent use the `bdy` CLI to deploy to sandboxes, run pipelines and expose ports. Category: Development and Testing.
- [#1380](https://github.com/VoltAgent/awesome-agent-skills/pull/1380): orwa-mahmoud/nightshift, a self-submission. Category: Development and Testing.
- [#1379](https://github.com/VoltAgent/awesome-agent-skills/pull/1379): tw93/mole, the official skill for the Mole CLI. Category: Productivity and Collaboration.
- [#1378](https://github.com/VoltAgent/awesome-agent-skills/pull/1378): phuryn/product-engineering, uptime-monitoring and strategy-red-team. It extends the existing Paweł Huryn section and includes a conflict-of-interest disclosure.
- [#1377](https://github.com/VoltAgent/awesome-agent-skills/pull/1377): rhiever/evident-charts, a chart skill that checks rendered charts for layout and accessibility problems. Category: Specialized Domains.

**Maintenance (1):**
- [#1381](https://github.com/VoltAgent/awesome-agent-skills/pull/1381): fixes the Notion cookbook source, which points to a removed directory. It relinks eight entries to their official source directories and fixes a misplaced community entry.

## 4. Community Hot Topics
No PR or issue has comments or 👍 reactions, so there are no real hot topics. The recurring themes in the submissions are:
- **Official, vendor-authored skills for CLIs and platforms.** Speakeasy, Buddy and Mole all package a CLI as an agent skill, which shows demand for CLI-driven agent workflows.
- **Dev tooling and deployment.** Three of the six submissions target Development and Testing.
- **Self-promotion disclosure.** #1378, #1377 and #1380 are written by the skill authors, and #1378 declares the author's ownership of the default monitoring service.
- **Link rot.** #1381 shows that upstream source reorganization breaks existing entries.

## 5. Bugs & Stability
No bug issues were filed. The one quality problem is a broken link in the Notion cookbook entries (a removed source directory) and a misplaced community entry. A fix is already open as [#1381](https://github.com/VoltAgent/awesome-agent-skills/pull/1381). Severity is low (documentation).

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests, since no issues were filed. Signals from the PRs:
- Several PRs target different categories (Development and Testing, Productivity and Collaboration, Specialized Domains). Development and Testing is gaining the most entries.
- Multi-skill and multi-plugin bundles are appearing (#1383 has 14 skills, #1378 has three). A grouping convention for such bundles may be needed.
- Link validation for entries would help prevent the kind of rot #1381 fixes. This is my inference, not something stated in the data.

## 7. User Feedback Summary
There are no direct user complaints today. Contributors want visibility for their skills in a trusted list, and they want skills to install easily (for example `npx skills add tw93/Mole`). Maintainers of existing entries are also keeping those entries accurate (#1381, #1378).

## 8. Backlog Watch
The data covers only the last 24h, and all 7 PRs were created on 2026-11-08 or 2026-11-09. None is long-unanswered yet. The following need a maintainer's attention soon:
- [#1381](https://github.com/VoltAgent/awesome-agent-skills/pull/1381): fixing broken links has the highest value per review effort.
- [#1378](https://github.com/VoltAgent/awesome-agent-skills/pull/1378): the author disclosed a commercial interest, so reviewers should check that the entries are neutral.
- [#1380](https://github.com/VoltAgent/awesome-agent-skills/pull/1380): the description is minimal, so reviewers may want more detail on what the skill does.

The PR numbers (#1377 to #1383) suggest a steady stream of submissions. If merges stay slow, the open queue will keep growing.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
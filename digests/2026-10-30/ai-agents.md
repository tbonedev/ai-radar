# MCP Ecosystem Digest 2026-10-30

> Issues: 5 | PRs: 0 | Projects covered: 7 | Generated: 2026-10-30 13:56 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest: 2026-10-30

## 1. Today's Overview
Activity in modelcontextprotocol/servers is low today. Five issues were updated and all five are open. No PRs were updated, and there were no releases and no merges. Two issues were opened today (#5415, #5416). The rest are carryover threads, two of them from the same outside contract-drift research project. The v2 label is on four of the five issues, so triage looks focused on the v2 line. Overall the project is quiet, and maintainer response is the main thing to watch.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24h, so no features or fixes advanced. Nothing in today's data links an issue to a fix PR.

## 4. Community Hot Topics
Comment counts are small, so the "hot" threads are only relatively active.

- **[#5214](https://github.com/modelcontextprotocol/servers/issues/5214)** (3 comments, updated 10-29): `git_log` input validation (see Bugs). It is the most discussed item and has been open since 10-20.
- **[#5218](https://github.com/modelcontextprotocol/servers/issues/5218)** (2 comments): Paraphern reports tool-contract drift across `server-filesystem` and `server-everything` releases. They list "receipts" and a PR diff action. The underlying need is a stable tool-schema contract for reference servers. Clients that pin tool definitions get surprised when descriptions or schemas change between releases.
- **[#5414](https://github.com/modelcontextprotocol/servers/issues/5414)** (0 comments): The same author reports 140 silent contract changes across 66 version pairs of the reference servers. The data comes from their open-source tool, rugsnare, which hashes name, description, inputSchema and outputSchema. It has no maintainer response yet.

The two Paraphern threads point to the same need: changelogs or release tooling that flag tool-level contract changes.

## 5. Bugs & Stability
- **[#5214](https://github.com/modelcontextprotocol/servers/issues/5214)** (bug, server-git, v2): `git_log` accepts a non-positive `max_count`. A negative value silently returns the entire history. Severity is moderate. It is an input-validation gap, not a crash, but it can produce very large outputs and use up context or memory. It was reported against `2026.10.19`, commit f18beb74 on `v2/main`. The data shows no fix PR.
- No crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
- **[#5416](https://github.com/modelcontextprotocol/servers/issues/5416)** asks for descriptions on the top-level array parameters of the memory server's `create_entities`, `create_relations`, `add_observations` and `delete_observations`. It is small, low-risk and a schema-only change, so it is a good candidate for a quick merge in the next v2 release. It also touches the contract-drift concern: description edits change the tool contract.
- **[#5415](https://github.com/modelcontextprotocol/servers/issues/5415)** asks to add mcp.market to the Resources section of `ADDITIONAL.md`. It is a documentation change that needs a decision from maintainers. It is labeled `server-everything`, though the request is about docs.
- Contract-stability tooling, such as changelog notes on tool-schema changes (from #5218 and #5414), is a possible longer-term signal. Nothing here shows maintainers have committed to it.

## 7. User Feedback Summary
- Integrators who pin tool definitions see unannounced schema and description changes between releases. This makes upgrades harder to audit.
- Users of the memory server run into missing schema documentation. An LLM client sees undescribed array parameters, which can lead to wrong tool calls.
- Users of the git server expect validated arguments and fail-fast behavior, not silent fallbacks.
- Ecosystem members want visibility for their resources through the docs.

## 8. Backlog Watch
- **[#5214](https://github.com/modelcontextprotocol/servers/issues/5214)**: A validated bug open for 10 days, with no linked fix. It is a small fix, so it should be easy to take.
- **[#5218](https://github.com/modelcontextprotocol/servers/issues/5218)**: A question open since 10-21. The reply count is low, and it needs a maintainer stance on the policy for tool-contract changes.
- **[#5414](https://github.com/modelcontextprotocol/servers/issues/5414)**: A data-backed report with no maintainer reply. It should probably be triaged together with #5218.
- Both new issues (#5415, #5416) need initial triage.

**Health note:** Contributors are engaged and issue intake continues, but nothing was merged and no PRs are open or updated. The risk is a growing triage backlog on the v2 line.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison, 2026-10-30

Note: the digests cover MCP infrastructure, catalogs and curated lists, not personal AI assistant runtimes. The comparison below reflects that scope.

## 1. Ecosystem Overview
The MCP ecosystem is growing mostly at its edges. The core protocol repos are quiet (MCP Servers had 5 issues and no merged PRs), while the distribution layers are busy: Awesome MCP Servers had 146 PRs updated, Docker MCP Registry 50, and Awesome Claude Code 26 submission issues. Hosted remote servers with OAuth are replacing local container builds as the main submission pattern. Trust and quality are the pressing concerns: 13.9% of Registry entries have a detectable problem, tool contracts drift silently between releases, and the Claude eval viewer has open security reports. Review capacity, not contributor supply, is the common bottleneck.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my judgment) |
|---|---|---|---|---|
| MCP Servers | 5 (all open) | 0 | None | Fair. Intake continues, but nothing merged and maintainers have not responded |
| MCP Registry | 4 | 5 (all closed) | v1.8.7 | Good. Controlled rollout and infra hardening; community issues have no replies |
| Awesome MCP Servers | 0 | 146 (134 open, 12 closed) | None | Fair. Very high demand; review is the bottleneck |
| Docker MCP Registry | 0 | 50 (49 open, 1 closed) | None | Fair. About 15 new submissions today; no server merged |
| Claude Plugins (official) | 4 (3 open) | 10 (8 open, mostly bot bumps) | None | Fair. Stable but automated; security issues unaddressed |
| Awesome Claude Code | 26 (24 open) | 0 | None | Fair. About 21 validated submissions are waiting; no PR throughput |
| Awesome Agent Skills | 0 | 6 (4 open, 2 closed) | None | Good. Light, healthy intake; merge status of closures unclear |

Health scores are qualitative judgments from the digests, not metrics from the data.

## 3. MCP Servers' Position
- **Role:** It is the reference implementation repo. The others catalog, distribute or promote servers; this one defines what the reference servers do.
- **Advantages:** It is the canonical source whose tool contracts clients pin, and it has an active v2 line (4 of 5 issues carry the v2 label). It is also the only project in this set with an outside contract-drift analysis (140 silent changes across 66 version pairs, issue #5414).
- **Weaknesses:** It has the lowest throughput of the core projects. It had 0 PRs updated, while the Registry closed 5 in 48 hours. Four of five issues have no linked fix, and #5214, a validated bug, has been open 10 days.
- **Technical approach:** The repo ships code with a versioned tool schema. The Registry ships a service with a database and staged rollouts. The catalogs ship metadata only.
- **Community size:** By activity, it is much smaller than the catalogs (5 issues versus 146 and 50 PRs). Those repos measure submission demand, not contributor depth, so the comparison favors them unfairly.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Trust and validation | MCP Registry, Awesome MCP Servers, Awesome Claude Code, Claude Plugins | Periodic re-validation (#1715); Glama-listing labels; `validation-passed` bot; `claude plugin validate` on bumps |
| Contract stability | MCP Servers, Claude Plugins | Tool-schema change flags in changelogs (#5218, #5414); SHA-pinned plugin bumps |
| Remote and hosted servers | Docker MCP Registry, Awesome MCP Servers, MCP Registry | OAuth 2.1 with dynamic client registration; Dockerfile N/A entries; namespace migration for renames and domains |
| Security hardening | Claude Plugins, Awesome Claude Code, MCP Servers | Eval viewer XSS and Host/Origin checks (#6363, #6950); SkillTotal pre-install scanning; `git_log` input validation (#5214) |
| Memory and session persistence | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills, Docker MCP Registry | MemTether, hopsesh, Satori, RepoMemory |
| Multi-agent orchestration | Awesome Claude Code, Awesome Agent Skills | Parallel sessions, Swarmail, cross-agent skills (Claude Code, Codex, OpenCode) |
| Cross-registry sync | MCP Registry, Docker MCP Registry, Awesome MCP Servers | Official versus GitHub registry (#1758); Glama and Smithery signals |

## 5. Differentiation Analysis
- **MCP Servers:** The audience is client and integrator developers. Its focus is reference code and its schemas.
- **MCP Registry:** The audience is publishers and consumers. It is a service, with a performance focus (prepared listing JSON) and a namespace identity model.
- **Docker MCP Registry:** The audience is vendors who want container-based distribution. It is moving toward remote entries.
- **Awesome MCP Servers:** The audience is the broad community. It is a gated list with bot-enforced labels.
- **Claude Plugins (official):** The audience is Claude Code users. It is a first-party marketplace with automated upstream tracking.
- **Awesome Claude Code and Awesome Agent Skills:** The audience is practitioners. They list workflows, hooks and skills rather than servers. Awesome Agent Skills is more cross-agent; Awesome Claude Code is Claude-specific.

## 6. Community Momentum & Maturity
- **Tier 1, high volume, queue-bound:** Awesome MCP Servers (146 PRs), Docker MCP Registry (50), Awesome Claude Code (26).
- **Tier 2, actively iterating:** MCP Registry. It has a release and a staged, reversible rollout, and it is the only project with a clear engineering cadence in this data.
- **Tier 3, stabilizing or automated:** Claude Plugins. Activity is mostly bot bumps, and human code PRs are absent.
- **Tier 4, quiet:** MCP Servers and Awesome Agent Skills. The first is quiet because nothing merged; the second because it is small and new submissions are fresh.
- The data covers 24 to 48 hours, so these tiers show one day, not a trend.

## 7. Trend Signals
1. **Remote-first distribution.** Hosted OAuth servers need no container build. Registry and catalog tooling will need to validate OAuth metadata and endpoints.
2. **Integrity is becoming the differentiator.** Roughly 1 in 7 Registry entries is flawed, and tool contracts drift unannounced. Developers should pin and hash tool definitions, and the rugsnare approach is a practical start.
3. **The agent toolchain is a security surface.** The eval viewer reports and pre-install scanners show attackers' interest in developer tooling. Treat plugins, skills and local servers as untrusted by default.
4. **Memory and session continuity is the most crowded category** across four projects. Expect consolidation, and avoid building yet another store without a clear difference.
5. **Skills are spreading across agents** (Claude Code, Codex, OpenCode), so portable formats matter more than agent-specific ones.
6. **Curation does not scale.** Submissions are partly agent-authored (🤖 markers) and the queues are growing. Automated validation and documented acceptance criteria will become required.

**Caveats:** Comment and reaction data were mostly unavailable, so engagement claims are weak. Whether closed PRs were merged is often unclear. Health ratings are my own assessment.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest, 2026-10-30

## 1. Today's Overview
Activity is moderate and focused on infrastructure. Maintainer `rdimitrov` closed 5 PRs in 48 hours, all related to production hardening and the v1.8.7 release. Four issues were active. Two are namespace-migration requests filed today, and one is a long-running data-quality thread with 19 comments. Overall health is good: the release was staged, backfilled and activated through a controlled, reversible rollout. Community-facing issues have had no maintainer replies yet.

## 2. Releases
**[v1.8.7](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.7)**
- Adds prepared listing JSON, so listing reads no longer repeatedly decode and rebuild server payloads.
- Prepared reads are **off by default**. They support bounded backfill and flag rollback.
- Listing rows now release their DB connection before JSON processing. Pool defaults are unchanged at 60/10.
- **Migration notes:** additive migration 018 is included. Existing rows need a backfill before enabling the flag. Production has already backfilled 198,098 records.
- No breaking changes are reported. Disabling the flag restores typed responses.

## 3. Project Progress
All 5 PRs are closed and authored by `rdimitrov`:
- [#1767](https://github.com/modelcontextprotocol/registry/pull/1767): adds the `MCP_REGISTRY_PREPARED_LISTING_JSON` gate (default false) for both API versions, with Pulumi activation and rollback config.
- [#1769](https://github.com/modelcontextprotocol/registry/pull/1769): stages v1.8.7 in production with prepared reads disabled, pinned to commit `741d575`. This allowed migration 018 and the backfill.
- [#1770](https://github.com/modelcontextprotocol/registry/pull/1770): enables prepared listing reads after the backfill. Only the read-path flag changed.
- [#1765](https://github.com/modelcontextprotocol/registry/pull/1765): isolates the production DB on a dedicated node, adds 2–3 worker nodes, and autoscales ingress from 3 to 6 replicas. It is described as an authorized production experiment.
- [#1766](https://github.com/modelcontextprotocol/registry/pull/1766): fixes VictoriaMetrics OOM restarts (256 MiB limit) by raising the memory limit to 2 GiB and bounding query memory, which restores Grafana evaluations.

The sequence is stage, backfill, then activate. It is a disciplined rollout pattern.

## 4. Community Hot Topics
- [#1715](https://github.com/modelcontextprotocol/registry/issues/1715), 19 comments: a measurement of 38,977 latest entries found **13.9% (5,435)** with at least one problem against npm, PyPI or GitHub, which the registry doesn't catch. The request is periodic re-validation of published entries. The underlying need is trust and listing quality at scale, covering stale or broken packages and abandoned namespaces.
- [#1758](https://github.com/modelcontextprotocol/registry/issues/1758), 1 comment: discoverability sync between the official registry and GitHub's MCP Registry.
- [#1771](https://github.com/modelcontextprotocol/registry/issues/1771) and [#1768](https://github.com/modelcontextprotocol/registry/issues/1768): both concern namespace migration. They have no comments yet.

## 5. Bugs & Stability
1. **[#1758](https://github.com/modelcontextprotocol/registry/issues/1758) (bug, medium-low):** `io.github.radwanalmsora/devlens-mcp` v0.1.6 is active in the official registry but missing from GitHub MCP Registry search. This may be a downstream sync issue. No fix PR exists.
2. **Operational (resolved):** VictoriaMetrics OOM restarts were fixed by [#1766](https://github.com/modelcontextprotocol/registry/pull/1766). Production capacity was addressed by [#1765](https://github.com/modelcontextprotocol/registry/pull/1765).
3. [#1715](https://github.com/modelcontextprotocol/registry/issues/1715) describes a systemic data-quality gap rather than a crash. No fix PR exists.

## 6. Feature Requests & Roadmap Signals
- **Periodic re-validation of entries** ([#1715](https://github.com/modelcontextprotocol/registry/issues/1715)): strong community interest. It is likely to need design work first, and a near-term release is unlikely.
- **Namespace migration after a GitHub rename or move to a domain namespace** ([#1771](https://github.com/modelcontextprotocol/registry/issues/1771), [#1768](https://github.com/modelcontextprotocol/registry/issues/1768)): two requests in one day suggest demand for a self-service rename or migration flow. Today they appear to need manual handling.
- Near-term, expect follow-up work on performance and scaling: observing prepared reads in production, then making them the default.

## 7. User Feedback Summary
- Publishers are stuck when a GitHub account is renamed, because the old namespace can't be managed and it still reserves their remote URL.
- Publishers who verified domains via DNS want to move off `io.github.*` names to domain-based names.
- Publishers expect parity between the official registry and downstream catalogs such as GitHub's.
- Consumers and analysts want reliability signals, since about 1 in 7 entries has a detectable problem.

## 8. Backlog Watch
- [#1715](https://github.com/modelcontextprotocol/registry/issues/1715): open since 2026-10-18 with 19 comments. It needs a maintainer position or a scoped plan.
- [#1758](https://github.com/modelcontextprotocol/registry/issues/1758): open since 2026-10-28 with no maintainer resolution. It may need coordination with GitHub.
- [#1771](https://github.com/modelcontextprotocol/registry/issues/1771) and [#1768](https://github.com/modelcontextprotocol/registry/issues/1768): new today. A documented migration policy would help, particularly where an old namespace still reserves a remote URL.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-10-30

## 1. Today's Overview
The repo (punkpeye/awesome-mcp-servers) shows no issue or release activity in the last 24h. All activity is PR-driven: 146 PRs updated, 134 still open and 12 merged or closed. Every PR in the visible sample has 0 reactions, and comment counts weren't reported (`undefined`), so the data doesn't show which PRs got the most discussion. Submission volume is high. PR numbers have reached about #18088, and many new entries are tagged 🤖🤖🤖. The open queue is large compared with the 12 closed or merged, so maintainer throughput looks like the bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
Only 12 of 146 PRs were closed or merged, and the sample shows only two:
- [#6675](https://github.com/punkpeye/awesome-mcp-servers/pull/6675) — HoneyLabs (Security) was **closed** after about five months open. It was created 2026-05-20. A follow-up edit, [#18087](https://github.com/punkpeye/awesome-mcp-servers/pull/18087), now targets an existing HoneyLabs entry, so the entry is probably already in the list through another route. #18087 is labeled `duplicate`.
- [#18082](https://github.com/punkpeye/awesome-mcp-servers/pull/18082) — w1ne/kernelCAD-web was **closed** the same day it was opened. It lacked a Glama listing (`missing-glama`). The author resubmitted it as [#18083](https://github.com/punkpeye/awesome-mcp-servers/pull/18083) with a Glama badge and a category fix (Art & Culture).

The data doesn't say whether any PRs were merged versus closed. The other closures aren't in the sample.

## 4. Community Hot Topics
Comment and reaction counts are unavailable, with every PR at 0 👍. The themes below come from the submissions themselves:
- **Finance and trading data**: [#18086](https://github.com/punkpeye/awesome-mcp-servers/pull/18086) (Ironflow, Hyperliquid), [#18085](https://github.com/punkpeye/awesome-mcp-servers/pull/18085) (ApexTick options data), [#8466](https://github.com/punkpeye/awesome-mcp-servers/pull/8466) (aotrust-skills proof-of-existence).
- **Memory and knowledge for agents**: [#15757](https://github.com/punkpeye/awesome-mcp-servers/pull/15757) (MemTether, cross-client shared SQLite), [#14044](https://github.com/punkpeye/awesome-mcp-servers/pull/14044) (n3wth/r3).
- **Agent security, governance and audit**: [#15251](https://github.com/punkpeye/awesome-mcp-servers/pull/15251) (agentegress network attribution), [#18052](https://github.com/punkpeye/awesome-mcp-servers/pull/18052) (Living Stack Community tamper-evident ledger), [#6675](https://github.com/punkpeye/awesome-mcp-servers/pull/6675) (honeypot threat intel).
- **Desktop and creative tools exposing local MCP servers**: [#17812](https://github.com/punkpeye/awesome-mcp-servers/pull/17812) (Apolo image optimizer), [#17190](https://github.com/punkpeye/awesome-mcp-servers/pull/17190) (PaintPilot for Photoshop), [#18088](https://github.com/punkpeye/awesome-mcp-servers/pull/18088) (Kanbini kanban), [#18083](https://github.com/punkpeye/awesome-mcp-servers/pull/18083) (kernelCAD).
- **Gateways and aggregators**: [#17406](https://github.com/punkpeye/awesome-mcp-servers/pull/17406) (JiZhiMCP, which targets Chinese agent platforms).
- **Other categories**: [#18084](https://github.com/punkpeye/awesome-mcp-servers/pull/18084) (Apache Dubbo RPC), [#18080](https://github.com/punkpeye/awesome-mcp-servers/pull/18080) (cross-database diffing), [#18081](https://github.com/punkpeye/awesome-mcp-servers/pull/18081) (Home Assistant admin).

The underlying need is discoverability. Vendors want a listing for their MCP servers, and a few cases (JOY Automart, ApexTick, Ironflow) are hosted endpoints rather than local servers.

## 5. Bugs & Stability
No issues were reported, and nothing in the PRs describes a bug or regression. The one correctness-adjacent item is [#17277](https://github.com/punkpeye/awesome-mcp-servers/pull/17277), which removes descriptions of macOS features that are no longer accurate in the LMCP entry. It is a content fix and carries the `manual-review` label.

## 6. Feature Requests & Roadmap Signals
There are no issues, so there are no explicit feature requests. The PR labels point to the process the maintainers enforce:
- **Automated validation labels**: `has-emoji`, `valid-name`, `has-glama` and `missing-glama` are applied on every PR. A Glama listing appears to be a de facto requirement. Examples without one are [#17406](https://github.com/punkpeye/awesome-mcp-servers/pull/17406), [#18081](https://github.com/punkpeye/awesome-mcp-servers/pull/18081) and [#18087](https://github.com/punkpeye/awesome-mcp-servers/pull/18087).
- **`duplicate` and `manual-review` labels**: Update-existing-entry PRs ([#18087](https://github.com/punkpeye/awesome-mcp-servers/pull/18087), [#17277](https://github.com/punkpeye/awesome-mcp-servers/pull/17277)) are flagged as duplicates by the bot. The workflow doesn't handle edits to existing entries cleanly, so a dedicated path for entry updates is a plausible improvement.
- **Agent-authored PRs**: The 🤖🤖🤖 marker appears on many PRs, which suggests growing agent-submitted traffic.

## 7. User Feedback Summary
No direct feedback is in the data. The PRs themselves show these patterns:
- Submitters often resubmit after a closure or a failed check. [#18082](https://github.com/punkpeye/awesome-mcp-servers/pull/18082) became #18083 within the day, and [#14044](https://github.com/punkpeye/awesome-mcp-servers/pull/14044) says "Recreates closed PR #13338".
- Authors stress being free, open source, MIT, local or stdio, and listed on Glama, Smithery or the official MCP Registry. Those are the credibility signals they expect to matter.
- Some declare affiliation, as in [#17277](https://github.com/punkpeye/awesome-mcp-servers/pull/17277) ("I work on LMCP").

## 8. Backlog Watch
Several PRs have been open a long time and were touched again today. They need a maintainer decision:
- [#8466](https://github.com/punkpeye/awesome-mcp-servers/pull/8466) — aotrust-skills (Finance), open since 2026-06-21 and labeled `manual-review`.
- [#14044](https://github.com/punkpeye/awesome-mcp-servers/pull/14044) — n3wth/r3 (Knowledge & Memory), open since 2026-09-08. It is a recreation of an earlier closed PR.
- [#15251](https://github.com/punkpeye/awesome-mcp-servers/pull/15251) — agentegress (Security), open since 2026-09-28.
- [#15757](https://github.com/punkpeye/awesome-mcp-servers/pull/15757) — MemTether, open since 2026-10-05.
- [#16352](https://github.com/punkpeye/awesome-mcp-servers/pull/16352) — JOY Automart (E-Commerce), open since 2026-10-13.
- [#17190](https://github.com/punkpeye/awesome-mcp-servers/pull/17190) — PaintPilot, open since 2026-10-21.
- [#17277](https://github.com/punkpeye/awesome-mcp-servers/pull/17277) — LMCP description update, open since 2026-10-22, with `duplicate`, `missing-glama` and `manual-review` labels.

**Health assessment:** Submission interest is very high and the automated validation labels look healthy. With 134 PRs open and only 12 resolved today, review capacity limits throughput. The PRs with `manual-review` are the clearest backlog items.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-10-30

## 1. Today's Overview
The registry saw heavy submission activity: 50 PRs updated in 24h (49 open, 1 closed) and no issues or releases. Nearly all traffic is new server submissions, about 15 of them opened today, which points to strong ecosystem interest. Remote (streamable-http) servers dominate the new entries. No comment counts were available, so review engagement is unclear. Review and merge throughput looks like the bottleneck: only one PR closed, and it was not a server addition.

## 2. Releases
No new releases.

## 3. Project Progress
- Only one PR closed today: [#6366 Migrate to Claude 5.5 models](https://github.com/docker/mcp-registry/pull/6366) by jackculpan. It moves Claude calls to the 5.5 models (Haiku 5.5 with thinking disabled, Sonnet 5.5 with `between_tools` thinking) and removes assistant prefill and non-default temperature, which return 400 on those models. It is tooling and maintenance work, not a catalog change.
- No new servers were merged today.

## 4. Community Hot Topics
Comment and reaction counts are all 0 or undefined, so there are no discussion hot spots. Themes in today's submissions:
- **Remote, OAuth-based hosted servers** (OAuth 2.1 with dynamic client registration is common): [Nexus #6369](https://github.com/docker/mcp-registry/pull/6369) (fitness and nutrition logging), [PingAura #6363](https://github.com/docker/mcp-registry/pull/6363), [Cardboard #6362](https://github.com/docker/mcp-registry/pull/6362) (AI video), [Grafana Cloud #6364](https://github.com/docker/mcp-registry/pull/6364), [Taplio #5732](https://github.com/docker/mcp-registry/pull/5732), [Entry #6365](https://github.com/docker/mcp-registry/pull/6365).
- **Agent and developer tooling:** [RepoMemory #6368](https://github.com/docker/mcp-registry/pull/6368) (shared per-repo memory for Claude Code, Cursor and Codex), [RFC Lookup #6367](https://github.com/docker/mcp-registry/pull/6367) (local server).
- **Finance and data:** [canli-mcp #6360](https://github.com/docker/mcp-registry/pull/6360), [Lava #6361](https://github.com/docker/mcp-registry/pull/6361) (A-share news heat), [Bankrolled #6357](https://github.com/docker/mcp-registry/pull/6357) (no-auth, read-only).
- **Other:** [Doorfarer #6359](https://github.com/docker/mcp-registry/pull/6359) (flights, no auth), [ATS Jobs #6358](https://github.com/docker/mcp-registry/pull/6358), [asms #6356](https://github.com/docker/mcp-registry/pull/6356) (SMS verification numbers), [Quady3D #6354](https://github.com/docker/mcp-registry/pull/6354) (3D assets, local container).

The underlying need: vendors want distribution through Docker's catalog. Hosted services are adopting the remote-entry pattern, which doesn't require a container build.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there were no issues. The only related item is the Claude 5.5 migration in #6366, which removes parameters that cause 400 errors on the new models. It is closed, so check that it was merged and not just closed.

## 6. Feature Requests & Roadmap Signals
No explicit requests were filed. The submissions suggest these signals:
- Remote server support is becoming the main submission path, with several entries noting that Dockerfile is N/A (for example [#6361](https://github.com/docker/mcp-registry/pull/6361)). Expect more guidance or tooling for remote entries, such as OAuth metadata validation.
- Vendor-hosted official servers are arriving beside community open-source ones, as with `grafana-remote` next to the existing local `grafana`.
- Several entries mention being in the official MCP Registry, so cross-registry alignment may matter.

## 7. User Feedback Summary
No direct user feedback exists in this data. Submitter descriptions show these use cases: personal-data assistants (Nexus, Entry), finance and market data, developer memory and standards lookup, and creative or media generation (Clipwright, Cardboard, Quady3D). Submitters explicitly stress no-auth or easy OAuth onboarding, which suggests low setup friction matters to them.

## 8. Backlog Watch
Older open PRs that may need maintainer attention:
- [#4381 chore: update pin for mongodb](https://github.com/docker/mcp-registry/pull/4381): an automated bot pin update open since 2026-07-10, about 3.5 months. It is the oldest item here and may be stuck.
- [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240): open since 2026-09-25 (5 weeks).
- [#5411 Quayutec](https://github.com/docker/mcp-registry/pull/5411): open since 2026-10-03. The server is hosted and closed source, which may need a policy decision.
- [#5732 Taplio](https://github.com/docker/mcp-registry/pull/5732): open since 2026-10-15.
- [#6017 ce-net](https://github.com/docker/mcp-registry/pull/6017): open since 2026-10-23.

The four non-bot PRs were updated today, so there is some activity on them, but they are still unmerged. With about 49 open PRs and very few closures, review capacity is the main health concern.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-10-30

## 1. Today's Overview
Activity today was low-to-moderate and mostly automated. Of 10 PRs updated, 8 are open and 8 are `github-actions[bot]` SHA bumps. The only closed items are two superseded bot PRs. There were no releases. Of the 4 issues updated, 3 are open. Two of those concern security hardening of the skill-creator eval viewer. Human-authored code PRs were absent, so project health looks stable but maintainer responsiveness on community issues is the thing to watch.

## 2. Releases
No new releases.

## 3. Project Progress
No feature or fix PRs were merged today. The closed items were:
- [#6825](https://github.com/anthropics/claude-plugins-official/pull/6825) `bump(qodo-standards): b8c21854 → 134c518f` and [#6824](https://github.com/anthropics/claude-plugins-official/pull/6824) `bump(qodo)` (same SHA change) were closed. Both were opened on 2026-10-20 and are superseded by newer bumps to `9af23a9c` ([#6943](https://github.com/anthropics/claude-plugins-official/pull/6943), [#6942](https://github.com/anthropics/claude-plugins-official/pull/6942)).
- Issue [#1022](https://github.com/anthropics/claude-plugins-official/issues/1022), requesting removal of the deprecated superpowers stubs (`execute-plan`, `write-plan`, `brainstorm`), was closed. It was opened in March and had no comments.

Pending automated bumps, each validated with `claude plugin validate`:
- [#6949](https://github.com/anthropics/claude-plugins-official/pull/6949) `pendo-orchestrate`
- [#6948](https://github.com/anthropics/claude-plugins-official/pull/6948) `microsoft-docs`
- [#6947](https://github.com/anthropics/claude-plugins-official/pull/6947) `data-engineering`
- [#6946](https://github.com/anthropics/claude-plugins-official/pull/6946) `data`
- [#6945](https://github.com/anthropics/claude-plugins-official/pull/6945) `atlassian`
- [#6944](https://github.com/anthropics/claude-plugins-official/pull/6944) `astronomer-data-agents`
- [#6943](https://github.com/anthropics/claude-plugins-official/pull/6943) `qodo-standards`
- [#6942](https://github.com/anthropics/claude-plugins-official/pull/6942) `qodo`

`data`, `data-engineering` and `astronomer-data-agents` share the same SHA move (`486ee63d → 35b9610b`). That suggests one upstream repo backs all three entries.

## 4. Community Hot Topics
- [#2790](https://github.com/anthropics/claude-plugins-official/issues/2790) — `claude-md-management` uses the wrong local-memory filename and its audit executes documented commands. It has 3 comments and 1 👍, the most engagement today. The issue was opened in June and is still active. It points to a need for plugin docs and skills to stay aligned with Claude Code's memory behavior.
- [#6363](https://github.com/anthropics/claude-plugins-official/issues/6363) — attribute-breakout XSS and cross-site writes in the skill-creator eval viewer, with 2 comments. It notes the same code exists in `anthropics/skills`, where a related issue is open.
- [#6950](https://github.com/anthropics/claude-plugins-official/issues/6950) — the eval viewer HTTP server has no Host/Origin validation. It was opened today and has no comments yet. Together with #6363, it shows community security review focusing on the eval viewer.

## 5. Bugs & Stability
Ranked by severity:
1. **Eval viewer XSS and cross-site writes** — [#6363](https://github.com/anthropics/claude-plugins-official/issues/6363). The reporter rated these medium severity. The code is byte-identical to `main`. No fix PR yet.
2. **Eval viewer lacks Host/Origin checks** — [#6950](https://github.com/anthropics/claude-plugins-official/issues/6950). Any web page in the user's browser could reach the local server via DNS rebinding or cross-origin requests. The server binds to 127.0.0.1, which does not prevent this. No fix PR yet.
3. **`claude-md-management` filename bug** — [#2790](https://github.com/anthropics/claude-plugins-official/issues/2790). The plugin refers to `.claude.local.md`, but Claude Code only loads `CLAUDE.local.md`, so the failure is silent. The audit also executes commands found in documentation. No fix PR is visible.

## 6. Feature Requests & Roadmap Signals
No new feature requests today. The closed deprecation-cleanup request ([#1022](https://github.com/anthropics/claude-plugins-official/issues/1022)) shows continued interest in tidying the skills list. The security-hardening reports (#6363, #6950) will likely be addressed together, probably as one fix to the eval viewer server. Routine bumps will keep landing as marketplace entries track upstream plugins.

## 7. User Feedback Summary
- Users want first-party plugins to behave correctly out of the box. The silent wrong-filename failure in #2790 is a clear example.
- Security-minded contributors are auditing the bundled developer tooling, not just the plugins' functionality.
- Skill-list clutter from deprecated stubs was a pain point, and it is now closed.
- There is no direct satisfaction signal today. The reactions are minimal (one 👍 in total).

## 8. Backlog Watch
- [#2790](https://github.com/anthropics/claude-plugins-official/issues/2790) — open since 2026-06-14, about 4.5 months, with a user-impacting silent failure and no visible fix. It needs maintainer attention.
- [#6363](https://github.com/anthropics/claude-plugins-official/issues/6363) — a security report open since 2026-10-06 (about 3 weeks). It should be triaged, ideally together with #6950 and the matching `anthropics/skills` issue.
- [#6942](https://github.com/anthropics/claude-plugins-official/pull/6942)–[#6949](https://github.com/anthropics/claude-plugins-official/pull/6949) — the batch of bot bump PRs needs review. The #6824 and #6825 closures show stale bumps do get replaced, so queue age is worth watching.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-10-30

## 1. Today's Overview
Awesome Claude Code is a curated list, and its activity consists entirely of resource submissions. In the last 24h, 26 issues were updated (24 open, 2 closed). There were 0 PRs and 0 releases. Almost all issues carry `validation-passed` and `resource-submission`. Submission volume is high: 18 issues in this window were created on 10-29 or 10-30. Categories are broad, led by Memory & Context Persistence, Agent Orchestration, Remote Control/Notifications, Skills and Mods. No PR activity means nothing was merged, so the backlog of validated submissions is growing.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today. The only closures are two issues:
- [#3352](https://github.com/hesreallyhim/awesome-claude-code/issues/3352) (muster) is a duplicate. It was closed after [#3353](https://github.com/hesreallyhim/awesome-claude-code/issues/3353) was filed for the same repo by the author, ZacxDev. The earlier one came from a different account, `civitai-deploy`.
- [#3342](https://github.com/hesreallyhim/awesome-claude-code/issues/3342) (Agent Station) was auto-closed with `validation-pending`/`auto-closed` labels, so it failed or never completed validation.

## 4. Community Hot Topics
Engagement is minimal. Nearly every issue has 1 comment, which is probably the validation bot. The only reaction is on [#3357](https://github.com/hesreallyhim/awesome-claude-code/issues/3357) (Checklist-Bridge, 👍1). The best signal is therefore the submission themes:
- **Memory & session continuity:** [#3364 hopsesh](https://github.com/hesreallyhim/awesome-claude-code/issues/3364) (moves sessions across machines or accounts over SSH), [#3358 daimon](https://github.com/hesreallyhim/awesome-claude-code/issues/3358), [#3356 wisen](https://github.com/hesreallyhim/awesome-claude-code/issues/3356), [#3355 Turnbook](https://github.com/hesreallyhim/awesome-claude-code/issues/3355), [#3349 claude-transplant](https://github.com/hesreallyhim/awesome-claude-code/issues/3349). Users want context to persist across sessions, machines and accounts.
- **Multi-agent orchestration:** [#3350 Swarmail](https://github.com/hesreallyhim/awesome-claude-code/issues/3350), [#3347 Parallel Code](https://github.com/hesreallyhim/awesome-claude-code/issues/3347), [#3345 Aixle Flow](https://github.com/hesreallyhim/awesome-claude-code/issues/3345), [#2500 Paradev](https://github.com/hesreallyhim/awesome-claude-code/issues/2500). Users want to run parallel sessions and coordinate between them.
- **Remote control and notifications:** [#3362 Angelia](https://github.com/hesreallyhim/awesome-claude-code/issues/3362) (WhatsApp/Telegram gateway), [#3353 muster](https://github.com/hesreallyhim/awesome-claude-code/issues/3353), [#3346 Traffic Light](https://github.com/hesreallyhim/awesome-claude-code/issues/3346).
- **Security:** [#3363 SkillTotal](https://github.com/hesreallyhim/awesome-claude-code/issues/3363) uses a PreToolUse hook to scan npm and PyPI packages before install.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. Process issues are limited to:
- The duplicate submission ([#3352](https://github.com/hesreallyhim/awesome-claude-code/issues/3352) vs. [#3353](https://github.com/hesreallyhim/awesome-claude-code/issues/3353)), where a third party submitted someone else's repo.
- The auto-closed [#3342](https://github.com/hesreallyhim/awesome-claude-code/issues/3342).
- Two submissions that did not use the standard template or title format and carry no `validation-passed` label: [#3348 jsoncrm](https://github.com/hesreallyhim/awesome-claude-code/issues/3348) has the standard form but no validation label, and [#3341 OMNICLAUDE](https://github.com/hesreallyhim/awesome-claude-code/issues/3341) uses an older "Resource Submission" form with different fields.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions imply likely list categories and areas to expand:
- Memory & Context Persistence is the busiest category, with 4 new entries.
- Agent Orchestration and Remote Control/Notifications each have 3–4 entries.
- [#3341](https://github.com/hesreallyhim/awesome-claude-code/issues/3341) proposes a category named "Providers, Runtime & Integration Infrastructure", which doesn't match the categories used elsewhere in this batch. It will probably be mapped to an existing one or rejected.
- Niche and domain-specific skills are appearing: LinkedIn ([#3230](https://github.com/hesreallyhim/awesome-claude-code/issues/3230)), game assets ([#3343](https://github.com/hesreallyhim/awesome-claude-code/issues/3343)), CRM ([#3348](https://github.com/hesreallyhim/awesome-claude-code/issues/3348)), short drama ([#3360](https://github.com/hesreallyhim/awesome-claude-code/issues/3360)).

## 7. User Feedback Summary
Submitter descriptions point to these pain points:
- Moving or resuming work across machines, accounts and sessions ([#3364](https://github.com/hesreallyhim/awesome-claude-code/issues/3364), [#3349](https://github.com/hesreallyhim/awesome-claude-code/issues/3349)).
- Keeping track of many parallel projects and agents ([#3358](https://github.com/hesreallyhim/awesome-claude-code/issues/3358), [#3347](https://github.com/hesreallyhim/awesome-claude-code/issues/3347)).
- Supply-chain safety when agents install packages ([#3363](https://github.com/hesreallyhim/awesome-claude-code/issues/3363)).
- Accessibility and localization: WCAG tooling ([#3365](https://github.com/hesreallyhim/awesome-claude-code/issues/3365)) and a Persian right-to-left front-end ([#3361](https://github.com/hesreallyhim/awesome-claude-code/issues/3361)).
- Personality and ambient feedback, such as the pixel companion ([#3366](https://github.com/hesreallyhim/awesome-claude-code/issues/3366)) and the Windows traffic-light tray app ([#3346](https://github.com/hesreallyhim/awesome-claude-code/issues/3346)).

No satisfaction or dissatisfaction signal can be read from this data, because there are no reactions or discussion.

## 8. Backlog Watch
- [#3230 Taplio for LinkedIn](https://github.com/hesreallyhim/awesome-claude-code/issues/3230) was opened 2026-10-23 and has `validation-passed`. It is the oldest item from the current batch and has 2 comments.
- [#2500 Paradev](https://github.com/hesreallyhim/awesome-claude-code/issues/2500) was opened 2026-08-12, about 11 weeks ago, and is still open with `validation-passed`. It was touched today, and it is the longest-waiting item in this window.
- [#3348](https://github.com/hesreallyhim/awesome-claude-code/issues/3348) and [#3341](https://github.com/hesreallyhim/awesome-claude-code/issues/3341) have 0 comments and no validation result, so they need maintainer or bot attention.
- Overall, there are about 21 open validated submissions and zero PR throughput. Maintainers should review and merge them in batches, or the queue will keep growing.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-10-30

## 1. Today's Overview
Awesome Agent Skills (VoltAgent) saw light, contribution-only activity in the last 24 hours. There were no issue updates and no new releases. Six PRs were touched: 4 are open and 2 were closed without clear evidence of a merge. Every PR is a "add my skill to the list" submission. That points to steady inbound interest in the curated list and a maintainer queue that is moving more slowly than submissions arrive. Overall activity is moderate and healthy on the contributor side. There is no sign of bugs or regressions.

## 2. Releases
No new releases.

## 3. Project Progress
Two PRs were closed today. The data does not say whether either was merged, so treat both as "closed" and check the repo before assuming inclusion.

- [#1308](https://github.com/VoltAgent/awesome-agent-skills/pull/1308) — Add skill: zilliztech/milvus-skill. It proposed the official Milvus skill in the existing Vector Databases category. It covers collection and index management, vector search, filtering and RAG workflows with PyMilvus. It was created and closed on the same day, which suggests a quick maintainer decision or a self-close. The repo had 47 stars, which is low next to larger submissions.
- [#1271](https://github.com/VoltAgent/awesome-agent-skills/pull/1271) — Add heygen-com/hyperframes to Community Skills: Marketing. It proposed HeyGen's HyperFrames (Apache 2.0), a framework where agents write HTML and render it to video. It was open for about 4 days, from 10-26 to 10-30, and its description says it was "suggested" to the author, so a maintainer was likely involved.

No code or feature changes landed in the project itself. All of the activity is catalog curation.

## 4. Community Hot Topics
No PR or issue has any comments or reactions. All six show 👍: 0 and the comment counts are unreported. The most notable themes among today's submissions:

- **Developer-workflow skills** — [#1306 Quinnod345/ponder](https://github.com/VoltAgent/awesome-agent-skills/pull/1306) is a 4-pass self-deliberation skill with a zero-dependency CLI for Claude Code, Codex and OpenCode. [#1305 GabrieleDattile/agent-superpowers](https://github.com/VoltAgent/awesome-agent-skills/pull/1305) bundles TDD, fuzzing and sandbox-isolation skills. Both target Community Skills > Development and Testing.
- **Memory and companion skills** — [#1307 MetcalfSolutions/Satori](https://github.com/VoltAgent/awesome-agent-skills/pull/1307) is a "wisdom companion" with a local SQLite memory, aimed at Productivity and Collaboration.
- **Domain-specific skills** — [#1304 arkyu2077/transcreva](https://github.com/VoltAgent/awesome-agent-skills/pull/1304) provides audio and video transcription, with SRT/VTT/DOCX output and Brazilian Portuguese support, under Specialized Domains.

The underlying need is visibility. Authors want distribution through a well-known list. Skills are also spreading across agents (Claude Code, Codex, OpenCode), and the interest is broadening beyond coding into media and productivity.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no issue updates.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals from the submissions:

- Demand for **cross-agent skills** that work in Claude Code, Codex and OpenCode ([#1306](https://github.com/VoltAgent/awesome-agent-skills/pull/1306)).
- Demand for **multilingual and media skills**, such as transcription and video rendering ([#1304](https://github.com/VoltAgent/awesome-agent-skills/pull/1304), [#1271](https://github.com/VoltAgent/awesome-agent-skills/pull/1271)).
- Demand for **persistent-memory skills** ([#1307](https://github.com/VoltAgent/awesome-agent-skills/pull/1307)).

These point to possible new or expanded categories, such as Media/Video and Memory. I did not see any maintainer signal confirming this.

## 7. User Feedback Summary
No comments or reactions exist, so there is no direct feedback to summarize. The PR descriptions show that contributors follow the repo's submission format: they state the category, the license and the repo link, and some mention star counts or the date the repo became public. That suggests the contribution guidelines are clear. The same-day closure of #1308 may mean there are quality or popularity thresholds, such as a minimum star count or maturity. Those criteria are not documented in the data here.

## 8. Backlog Watch
- Four PRs are open and none has any comments or reviews: [#1304](https://github.com/VoltAgent/awesome-agent-skills/pull/1304), [#1305](https://github.com/VoltAgent/awesome-agent-skills/pull/1305), [#1306](https://github.com/VoltAgent/awesome-agent-skills/pull/1306) and [#1307](https://github.com/VoltAgent/awesome-agent-skills/pull/1307). All were opened on 2026-10-29, so they are fresh and not yet overdue.
- The PR number range (#1271 to #1308) shows a high submission volume. If review latency grows, the open queue could build up. Maintainers should consider documenting acceptance criteria, for example minimum stars or repo age, to cut review time and avoid surprise closures.
- The data covers only the last 24 hours, so older long-unanswered items could not be assessed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
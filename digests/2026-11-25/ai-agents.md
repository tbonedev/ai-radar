# MCP Ecosystem Digest 2026-11-25

> Issues: 6 | PRs: 1 | Projects covered: 7 | Generated: 2026-11-24 18:35 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Digest — 2026-11-25

## 1. Today's Overview
Activity is low and concentrated: 6 issues and 1 PR were updated in the last 24h, with no new releases. Almost all of the traffic is about the `memory` server (v2.2.1). Four of the six issues concern it, three of them filed by one reporter (za69956) who is auditing edge-case semantics. The one PR, from maintainer cliffhall, adds Events extension support to the `everything` reference server. No PRs merged. The project looks healthy but is in a hardening and spec-tracking phase, not a feature-shipping one.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. One PR is in flight:
- **[PR #5652](https://github.com/modelcontextprotocol/servers/pull/5652)**, `feat(everything): serve the Events extension (poll and push) on 2026-07-28`. It closes #5651 and implements `io.modelcontextprotocol/events` (SEP-3415, Beta) with both poll and push delivery. This keeps the reference server aligned with the 2026-07-28 protocol version.

One issue was closed: [#4812](https://github.com/modelcontextprotocol/servers/issues/4812), a request to list the ContHunt remote MCP server (TikTok/Instagram/YouTube Shorts content discovery). It was closed after about 10 weeks. The data doesn't say whether it was accepted or declined.

## 4. Community Hot Topics
Comment counts are small, so "hot" is relative:
- **[#5653](https://github.com/modelcontextprotocol/servers/issues/5653)** (3 comments): `create_entities` keeps repeated observations that `add_observations` would drop, so `delete_observations` later reports "Deleted 2 of 1". The underlying need is consistent de-duplication across all write paths.
- **[#5655](https://github.com/modelcontextprotocol/servers/issues/5655)** (2 comments): `delete_relations` and `delete_observations` count a repeated request item as "matched nothing". The need is accurate, idempotent delete reporting.
- **[#5624](https://github.com/modelcontextprotocol/servers/issues/5624)** (2 comments): a crash-left lock guard can be removed by two processes at once, which can delete a live guard. The need is correct multi-process safety for the memory file. The issue follows the lock work in #5565 (PR #5623).

## 5. Bugs & Stability
Ranked by severity:
1. **[#5624](https://github.com/modelcontextprotocol/servers/issues/5624)**: concurrency bug. Two processes clearing a stale `.lock.break` guard can remove a live guard, which breaks mutual exclusion and could allow concurrent writes and data corruption. It is the most serious, though it needs a crash plus a race to trigger. No fix PR is listed.
2. **[#5653](https://github.com/modelcontextprotocol/servers/issues/5653)**: data-consistency bug. `create_entities` and `add_observations` handle duplicates differently, and the mismatch surfaces as a confusing delete count ("Deleted 2 of 1"). No fix PR is listed.
3. **[#5655](https://github.com/modelcontextprotocol/servers/issues/5655)**: misleading result reporting. A repeated item in a delete request is counted as unmatched. No fix PR is listed.
4. **[#5654](https://github.com/modelcontextprotocol/servers/issues/5654)**: API inconsistency. `create_relations` returns an empty list for an existing relation with no notice, unlike `create_entities`, which returns `skipped`. No fix PR is listed.

All four are labeled `bug` and `v2`. None has a linked fix PR.

## 6. Feature Requests & Roadmap Signals
- **[#5651](https://github.com/modelcontextprotocol/servers/issues/5651)** and **[PR #5652](https://github.com/modelcontextprotocol/servers/pull/5652)**: Events extension support (poll and push) in the `everything` server. The PR is already open from the maintainer, so it is the likeliest item to land in the next v2 release.
- **[#5654](https://github.com/modelcontextprotocol/servers/issues/5654)**: a `skipped`-style notice for `create_relations` is implicitly a feature request. It could be bundled with the other memory consistency fixes.
- The `v2` labels across all of today's items show that work is converging on a v2 milestone.

## 7. User Feedback Summary
- Users of the memory server want predictable, symmetric semantics. Create, add, and delete should handle duplicates the same way, and each should report what it did.
- The reports come from a custom Python MCP SDK client that runs the server over stdio via npx. That suggests programmatic, agent-driven use, where ambiguous return values are costly because the client can't ask a human.
- Multi-process use of one memory file (#5624) is real enough that maintainers are investing in cross-process locking.
- Satisfaction can't be measured from the data. There are no reactions (👍 is 0 on every item), and the reporters' detailed write-ups suggest engaged users.

## 8. Backlog Watch
- **[#5624](https://github.com/modelcontextprotocol/servers/issues/5624)**: open since 2026-11-18 with no fix PR. It is a locking-correctness bug in a follow-up to a recent change (#5565 / PR #5623), so it needs maintainer attention.
- **[#5651](https://github.com/modelcontextprotocol/servers/issues/5651)** / **[PR #5652](https://github.com/modelcontextprotocol/servers/pull/5652)**: the PR has had no review comments yet. It is only a day old, but it is a spec-alignment item that needs a reviewer.
- **[#5653](https://github.com/modelcontextprotocol/servers/issues/5653)**, **[#5654](https://github.com/modelcontextprotocol/servers/issues/5654)** and **[#5655](https://github.com/modelcontextprotocol/servers/issues/5655)**: three related memory-server bugs filed within a day. Triaging them together would avoid conflicting fixes.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-11-25

**Scope note:** The source digests cover the MCP and agent-skills infrastructure layer: servers, registries, plugin directories and curated lists. They don't cover end-user assistants such as OpenClaw or Claude Code. Awesome Claude Code had no activity. Health scores below are my judgments from the data. They are not measured values.

## 1. Ecosystem Overview
The ecosystem is moving from building MCP servers to distributing, vetting and securing them. Submission volume is very high. Awesome MCP Servers had 500 updated PRs and Docker MCP Registry had 50. Maintainer throughput is the bottleneck, with 489 of 500 PRs still open at Awesome MCP Servers. The official projects are in a hardening phase. The Registry is retiring a shared credential, the Plugins directory is adding a Verified-only gate, and the Servers repo is fixing memory-server semantics. Supply-chain trust, meaning integrity, provenance and verification, is the strongest cross-project theme. Remote streamable-http servers are replacing local-container servers as the dominant submission type.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Releases | Health (my judgment) |
|---|---|---|---|---|
| MCP Servers | 6 | 1 (0 merged) | None | 7/10: engaged, but no merges and four bugs open with no fix PRs |
| MCP Registry | 3 | 5 (all closed) | None | 8/10: strong operational discipline, with schema decisions pending |
| Awesome MCP Servers | 0 | 500 (489 open, 11 closed) | None (not versioned) | 5/10: demand is very high, triage is far behind |
| Docker MCP Registry | 1 | 50 (49 open) | None | 5/10: no visible maintainer activity, backlog back to August |
| Claude Plugins (official) | 3 | 12 (4 open, 8 closed) | None (security-guidance 2.0.22 pending) | 8/10: active maintainers, but #7024 is unresolved |
| Awesome Claude Code | 0 | 0 | None | Unknown: no activity |
| Awesome Agent Skills | 0 | 9 (8 open, 1 closed) | None | 5/10: no merges and no review activity |

## 3. MCP Servers' Position
**Advantages**
- It is the reference implementation. PR #5652 keeps the `everything` server aligned with the 2026-07-28 spec, adding the Events extension (SEP-3415, poll and push). No other project in this set tracks the protocol itself.
- Its bugs are specific and well documented, and a custom Python SDK client is reporting them. That points to programmatic, agent-driven use.

**Technical approach differences**
- Servers is code: a few reference servers with deep semantics and locking. The others are metadata, listings and gating, such as Registry `server.json`, Docker catalog entries and curated lists.
- Its concerns are correctness and concurrency (#5624 lock guard, #5653 and #5655 duplicate handling). The others' concerns are trust and throughput.

**Community size**
- It is small by volume, with 7 items a day, against 500 PRs a day at Awesome MCP Servers and 50 at Docker. Its influence comes from setting the spec and reference behavior, not from contribution volume.
- It has no reactions on any item. Registry #1783 (11 comments) and Plugins #7024 (42 comments, 15 👍) draw much more discussion.

**Risk:** All four memory bugs are labeled `v2` and have no linked fix PR. The one open PR is a feature. A hardening backlog is building up behind it.

## 4. Shared Technical Focus Areas
| Need | Projects | Specifics |
|---|---|---|
| Supply-chain integrity and verification | Registry, Plugins, Awesome MCP Servers | Registry #1783 asks for npm, PyPI and OCI hashes. Registry #1862 found 274 uninstallable entries. Plugins #7024 covers Verified-org gating. Plugins #6907 and #7206 harden the CI scan. Awesome MCP Servers #19519 (Lockbox) and #17239 (SwapChan) are submissions built for credential safety. |
| Credential and identity hygiene | Registry, Servers, Docker | Registry #1915–#1918 moved to keyless GKE identities. Docker submissions repeatedly use OAuth 2.1 with dynamic client registration and PKCE. |
| Review and triage capacity | Awesome MCP Servers, Docker, Agent Skills | Contributors ping repeatedly (Docker #7611). Backlogs go back months (Awesome MCP Servers #6600, open since May). |
| Automated gating | Awesome MCP Servers, Plugins, Docker | Bot labels (`valid-name`, `has-glama`), version-bump checks, and a question about whether CI needs approval. |
| Consistent, idempotent tool semantics | Servers, Plugins | Duplicate handling and delete counts in Servers. Silent XLSX date shift (Plugins #7215). Both are failures with no warning. |
| Multi-process and runtime robustness | Servers, Plugins | Locking (#5624). Python launcher errors and gateway quirks (#7192, #7208). |
| Domain-specific and vertical skills | Awesome MCP Servers, Agent Skills, Docker | Healthcare, geospatial, procurement, biomedicine and marketing. |

## 5. Differentiation Analysis
| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference implementations and spec tracking | Server and SDK authors | Code in the monorepo, with npm and stdio |
| MCP Registry | Official discovery and metadata | Publishers and client developers | `server.json` schema, GKE infrastructure, backups |
| Awesome MCP Servers | Curated human-readable index | Developers browsing | One README, bot-gated PRs with a Glama score |
| Docker MCP Registry | Containerized or hosted catalog | Docker Desktop users and vendors | Container or pointer entries, mostly remote streamable-http |
| Claude Plugins (official) | Trusted plugin directory for Claude | Claude users and vendors | Plugins with hooks, local MCP servers, CI scan policy, Verified tier |
| Awesome Agent Skills | Skill (`SKILL.md`) index | Skill authors and users across agents | Curated list, with some links to outside registries |

- Plugins is the only project with an enforced trust tier. The Registry has an integrity proposal only. The awesome lists rely on bot labels and manual review.
- Docker and Agent Skills accept entries that run on third-party infrastructure, so they have a provenance question the others don't.

## 6. Community Momentum & Maturity
- **Tier 1, rapidly iterating:**
  - Claude Plugins: 12 PRs, with a 2.0.22 release being assembled.
  - MCP Registry: 5 PRs in a staged, gated rollout in one day.
- **Tier 2, high intake, low output (demand exceeds capacity):**
  - Awesome MCP Servers: 500 updated, 11 closed.
  - Docker MCP Registry: 50 updated, 49 open.
  - Awesome Agent Skills: 9 updated, 0 merged.
- **Tier 3, stabilizing or hardening:**
  - MCP Servers: it is fixing edge cases and tracking the spec, with no merges today.
- **Dormant:** Awesome Claude Code, with no activity in 24h. This could be a quiet day or a slowdown, and one day of data can't tell which.

Caveat: counts are 24-hour snapshots. The Awesome MCP Servers data is a 20-item sample of 500, with comment counts undefined.

## 7. Trend Signals
1. **Trust is becoming a requirement.** Verified-only hooks (Plugins), integrity hashes (Registry), keyless identities and a Glama-score gate all point the same way. Agent developers should expect signed or verified publishing and should plan for it.
2. **Remote servers are taking over.** Most new Docker submissions are hosted streamable-http, often "pointer" repositories with no source. Clients must handle remote authentication, OAuth 2.1 with dynamic client registration, and provenance rules.
3. **Agents expose tool-semantics problems.** The memory-server bugs were found by a programmatic client. Return values need to be unambiguous and idempotent, with explicit `skipped` or count fields, because an agent can't ask a human what an ambiguous result meant.
4. **Silent failures are a recurring risk.** The XLSX 1904 date shift, skipped code-fence reviews and unreviewed commits all fail without warning. Developers should add validation and loud failure paths.
5. **Curation can't scale with human review alone.** Awesome-list backlogs show the limit. The likely responses are automated checks, batch merges and category splits. Submissions are already agent-assisted (🤖🤖🤖 markers).
6. **Verticalization.** Healthcare, geospatial, procurement, biomedicine and GEO analytics dominate new entries. This is a better area to build in than general-purpose servers.
7. **The protocol is still evolving.** The Events extension (poll and push) is in Beta against the 2026-07-28 spec. Server authors should track it and avoid hard-coding assumptions about request and response only.

**Recommendation for decision-makers:** Treat the official Registry and the Plugins Verified tier as the trust anchors. Treat the awesome lists and Docker catalog as discovery layers, since both have a backlog of weeks to months. Pin and verify packages yourself until integrity fields (#1783) are available.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest — 2026-11-25

## 1. Today's Overview
Activity was moderate and dominated by infrastructure work. Five PRs, all by `rdimitrov`, were closed in the last 24h. They make up a staged retirement of the shared usage credential across staging and production. Three issues were updated: one open proposal on package integrity, one closed audit of uninstallable entries, and one open lifecycle-hints request. There were no new releases. Project health looks good operationally, but community-facing feature work (#1783, #1340) is still undecided.

## 2. Releases
None.

## 3. Project Progress
All five closed PRs are one security hardening sequence. They move usage jobs from an exported, shared key to keyless GKE workload identities.

- **[#1915](https://github.com/modelcontextprotocol/registry/pull/1915): Retire the shared staging usage credential.** It sets the staging phase to `keyless`. The summary says the first scheduled federated-identity run on Nov 24 stored 1,109 requests for Nov 23. The backup validated the archive, wrote a new snapshot, and passed the full Restic data check.
- **[#1916](https://github.com/modelcontextprotocol/registry/pull/1916): Prepare production workload identities.** It enables the GKE workload pool and worker metadata server. It creates the monitoring service accounts and grants log access to the collector and bucket access to the backup. The existing credentials stay in place.
- **[#1917](https://github.com/modelcontextprotocol/registry/pull/1917): Switch production usage jobs to GKE identities.** The collector and backup now use separate Kubernetes service accounts. Schedules and the Restic repository are unchanged. The exported key stays available for rollback.
- **[#1919](https://github.com/modelcontextprotocol/registry/pull/1919): Verify reviewed production jobs before retiring the key.** It allows two on-demand verification runs ahead of the Nov 25 01:15 UTC schedule, and it expires at that schedule.
- **[#1918](https://github.com/modelcontextprotocol/registry/pull/1918): Retire the shared production usage credential.** It moves `usageIdentityPhase` from `cutover` to `keyless` and removes five resources, including the exported key. Merging triggers deployment. It was closed on the same day. The summary says it still needed final operator approval, so the data does not show whether the key has actually been removed.

The sequence was staged, with a rollback window and verification gates. The same day ran staging retirement, production preparation, cutover, verification and retirement.

## 4. Community Hot Topics
- **[#1783](https://github.com/modelcontextprotocol/registry/issues/1783): optional content-integrity fields for npm / PyPI / OCI entries** (11 comments, the most active). The proposal notes that MCPB packages have `fileSha256`, but npm, PyPI and OCI entries have no equivalent. A client therefore cannot verify that the installed bytes match what was published. The underlying need is supply-chain integrity. It was created Nov 1 and is still open.
- **[#1862](https://github.com/modelcontextprotocol/registry/issues/1862): Audit of 274 entries with uninstallable versions** (4 comments, closed). It resolved every npm/PyPI entry in the latest snapshot against its upstream registry. It shows that registry data can drift from upstream. This links to #1783, since both concern whether a listing matches what gets installed.

## 5. Bugs & Stability
- **Data quality (medium):** #1862 found 274 entries pointing to package versions that cannot be installed. The issue is closed. The data does not show whether entries were cleaned up or whether a validation fix is planned. No linked fix PR is visible.
- **Infrastructure:** No incidents were reported. The credential migration shows healthy staging runs (1,109 requests collected, backup check passed).

## 6. Feature Requests & Roadmap Signals
- **Integrity fields (#1783):** This has the most discussion and ties into the supply-chain concerns raised by #1862. Optional `server.json` fields are a plausible schema addition, but there is no maintainer commitment in the data.
- **Post-install lifecycle hints (#1340):** The request comes from a server that is also a system service (stdio mode plus an HTTP daemon). It has only 2 comments and has been open since June, so it is unlikely to land soon.

## 7. User Feedback Summary
Users want a registry they can trust. They want to verify what they install (#1783) and to find listings that cannot be installed (#1862). Server authors with non-standard deployments, such as daemon-plus-stdio servers, find the current metadata model too narrow (#1340). No 👍 reactions were recorded on any item.

## 8. Backlog Watch
- **[#1340](https://github.com/modelcontextprotocol/registry/issues/1340)** has been open for about 5.5 months with little discussion. It needs a maintainer decision on whether lifecycle hints are in scope.
- **[#1783](https://github.com/modelcontextprotocol/registry/issues/1783)** has had active discussion for more than three weeks. It needs a maintainer position on the schema direction.
- **Follow-up for #1862:** Confirm that the 274 broken entries were remediated. Consider publish-time or periodic validation to prevent recurrence.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-25
Repo: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

**Data caveat:** the feed shows only 20 of the 500 updated PRs. The comment count is `undefined` for every PR, and 👍 is 0 on all of them. "Hot topics" below are therefore inferred from recency and category, not from discussion volume.

## 1. Today's Overview
The repo is a curated list, so activity is almost all PRs that add servers. It had no issue activity and no releases in the last 24h. 500 PRs were updated, and 489 of them (about 98%) are still open. Only 11 were merged or closed, which means submissions are arriving much faster than they are being triaged. The highest PR number in the sample is #20606, opened 2026-11-24. The most common state in the sample is a bot-labeled submission (`has-emoji`, `valid-name`, `has-glama`) waiting for review.

## 2. Releases
None. This repo does not publish versioned releases.

## 3. Project Progress
Only 11 PRs were merged or closed, and the sample contains one of them:
- [#15484](https://github.com/punkpeye/awesome-mcp-servers/pull/15484) Add Rixtayz/Mail-MCP (Communication) is `CLOSED`, not merged. It is an Outlook/Hotmail mailbox cleanup server using Microsoft Graph, opened 2026-10-01. The data doesn't say why it was closed.

The data doesn't show which of the other 10 were merged and which were closed. Net list growth today is not measurable from this sample.

## 4. Community Hot Topics
No PR shows comment or reaction counts. Judging by which categories the sampled submissions target, demand clusters around these areas:
- **Agent safety, security and compliance:**
  - [#19519](https://github.com/punkpeye/awesome-mcp-servers/pull/19519) Lockbox keeps credentials out of the model's context.
  - [#20605](https://github.com/punkpeye/awesome-mcp-servers/pull/20605) hipaa-fhir-mcp is a read-only FHIR server with audit records.
  - [#17239](https://github.com/punkpeye/awesome-mcp-servers/pull/17239) SwapChan returns only unsigned transactions.
- **Vertical, domain-specific data:**
  - [#18688](https://github.com/punkpeye/awesome-mcp-servers/pull/18688) mapsql-mcp covers PostGIS and Oracle Spatial.
  - [#20057](https://github.com/punkpeye/awesome-mcp-servers/pull/20057) tenderkit covers Polish public procurement.
  - [#15528](https://github.com/punkpeye/awesome-mcp-servers/pull/15528) Yatmo covers real estate.
  - [#20423](https://github.com/punkpeye/awesome-mcp-servers/pull/20423) avenity-visibility-mcp tracks AI search visibility (GEO).
- **Real-world device and desktop control:**
  - [#18462](https://github.com/punkpeye/awesome-mcp-servers/pull/18462) esp32-iphone-agent lets an agent operate an iPhone.
  - [#16890](https://github.com/punkpeye/awesome-mcp-servers/pull/16890) Extra automates the native desktop.
  - [#20606](https://github.com/Callahan-ci/quartet-qe) quartet-qe generates end-to-end tests across web, mobile, API and Kafka.
- **Verification and research:** [#20601](https://github.com/punkpeye/awesome-mcp-servers/pull/20601) ClaimTrace checks numbers in a document against its sources.
- **Enterprise vendors:** [#19887](https://github.com/punkpeye/awesome-mcp-servers/pull/19887) IBM Aspera CLI is an official MCP server from IBM's GitHub organization.
- **Aggregators and registries:** [#20604](https://github.com/punkpeye/awesome-mcp-servers/pull/20604) MCPShelf and related tools.
- **Social media:** [#20060](https://github.com/punkpeye/awesome-mcp-servers/pull/20060) Social0 posts to 9 networks.

## 5. Bugs & Stability
No issues were filed and no bugs were reported. The only stability signals are PR hygiene problems:
- **Merge conflict:** [#6600](https://github.com/punkpeye/awesome-mcp-servers/pull/6600) BrainOS carries the `merge-conflict` label. It was opened 2026-05-19 and has gone about 6 months without resolution.
- **Missing Glama listing:** [#11422](https://github.com/punkpeye/awesome-mcp-servers/pull/11422) Groundbase and [#20604](https://github.com/punkpeye/awesome-mcp-servers/pull/20604) MCPShelf carry `missing-glama`, so they can't pass the list's checks until a listing is added.
- **Possible policy mismatch:** #20604 bundles several tools in one PR, while #20057 describes a library with a CLI and an MCP server. Neither is confirmed as a problem.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. Submission patterns suggest the list will keep gaining entries in these categories:
- Security and credential handling
- Healthcare and compliance
- Geospatial data and finance (cross-chain routing)
- Embedded systems and hardware
- Marketing and GEO analytics

The list may eventually need new or split categories, such as hardware/device control and compliance. This is an inference, not a stated request.

## 7. User Feedback Summary
Contributors are the only users in this data. They are accepting the automated labeling gate (emoji, valid name, Glama badge). Several PRs, such as #15528 and #16272, are about adding or fixing the Glama score badge, so the badge is a de facto entry requirement. Many titles carry the 🤖🤖🤖 marker, which appears to indicate agent-assisted submissions. Waiting times are long. Several PRs from early to mid October are still open and were updated again on 2026-11-24, which suggests authors are re-pinging them or CI is re-running.

## 8. Backlog Watch
These need maintainer attention:
- [#6600](https://github.com/punkpeye/awesome-mcp-servers/pull/6600) BrainOS. Open since 2026-05-19, has merge conflicts, and needs a rebase or a close.
- [#11422](https://github.com/punkpeye/awesome-mcp-servers/pull/11422) Groundbase. Open since 2026-08-03 and missing Glama.
- [#15528](https://github.com/punkpeye/awesome-mcp-servers/pull/15528) Yatmo. Open since 2026-10-02.
- [#16272](https://github.com/punkpeye/awesome-mcp-servers/pull/16272) TealKit (2026-10-12) and [#16890](https://github.com/punkpeye/awesome-mcp-servers/pull/16890) Extra (2026-10-18).
- [#17239](https://github.com/punkpeye/awesome-mcp-servers/pull/17239) SwapChan (2026-10-22) and [#17775](https://github.com/punkpeye/awesome-mcp-servers/pull/17775) ARKOSCOPE (2026-10-27).
- [#18462](https://github.com/punkpeye/awesome-mcp-servers/pull/18462) esp32-iphone-agent. Open since 2026-11-03.

**Health assessment:** contributor interest is very high. Review and merge throughput is the bottleneck, with 489 PRs open against 11 closed in 24h. Automated triage, batch merges of PRs that pass the checks, and stale-PR sweeps would reduce the backlog fastest.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-25

## 1. Today's Overview
Activity was high but narrow. Nearly all of it was submission traffic: 50 PRs were updated, 49 of them still open. Only 1 issue was updated, and there were no releases. Most of the visible PRs add remote (streamable-http) MCP servers. The registry is working mainly as an intake queue. The data shows no maintainer reviews, merges or comments, so review capacity looks like the bottleneck. Open PRs go back to August.

## 2. Releases
No new releases.

## 3. Project Progress
The data shows 1 merged or closed PR in the last 24h, but it is not among the top 20 PRs listed, so I can't say which one it was or what it changed. No visible PRs show merges, fixes or maintainer-driven changes. The progress signal is contributor submissions, not maintainer output.

## 4. Community Hot Topics
Comment counts are listed as `undefined` or 0 for every item, so "hot" here means recent activity, not discussion.

- **Review-request issue, [#7611](https://github.com/docker/mcp-registry/issues/7611):** The author asks maintainers to review five existing DigestSEO and GodPrompt catalog PRs. They also ask whether the upstream CI/security workflows need maintainer approval. It has 0 comments and 0 👍. The need is a faster, clearer path for approval. Contributors currently have to ask in an issue.
- **Newly opened remote-server PRs (all 2026-11-24):**
  - [#7649 BetaDrop](https://github.com/docker/mcp-registry/pull/7649)
  - [#7648 hbmeasure](https://github.com/docker/mcp-registry/pull/7648)
  - [#7646 Arsen](https://github.com/docker/mcp-registry/pull/7646)
  - [#7647 extension.dev](https://github.com/docker/mcp-registry/pull/7647)
  - [#7645 CounselMode](https://github.com/docker/mcp-registry/pull/7645)
  - [#7644 api-router](https://github.com/docker/mcp-registry/pull/7644)
  - [#7643 Signing for Agents](https://github.com/docker/mcp-registry/pull/7643)
  - [#7642 Booking for Agents](https://github.com/docker/mcp-registry/pull/7642)
  - [#7641 stickerbyvin](https://github.com/docker/mcp-registry/pull/7641)
  - [#7640 Lumina Tasks](https://github.com/docker/mcp-registry/pull/7640)
- **Themes:** Vendors want their hosted services in the catalog. The domains include marketing data, e-signatures, booking, security, regulatory compliance, social media and browser extensions. Several servers use OAuth 2.1 with dynamic client registration, such as [#7587 Tarkle](https://github.com/docker/mcp-registry/pull/7587). Others use no auth, such as [#7641](https://github.com/docker/mcp-registry/pull/7641).
- **Local-container submissions:** These are the minority.
  - [#4803 fiscal-mcp](https://github.com/docker/mcp-registry/pull/4803) is an offline validator for Brazilian invoices.
  - [#7438 Presencis Regulatory](https://github.com/docker/mcp-registry/pull/7438) is a zero-egress, read-only stdio server.
  - [#7551 PADAM Shield Lite](https://github.com/docker/mcp-registry/pull/7551) is a stateless security scanner.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported in the provided data. The one issue is a review request. One possible friction point is that a contributor had to ask whether upstream CI/security workflows need maintainer approval (#7611). That suggests the approval step may be unclear or may be blocking CI for external PRs. The data doesn't confirm this.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions point to these signals:
- **Remote-server support is the main growth area.** Most new PRs are remote streamable-http servers. This includes "pointer repository" submissions where the service source is not published, such as [#7648](https://github.com/docker/mcp-registry/pull/7648) and [#7640](https://github.com/docker/mcp-registry/pull/7640). The registry may need clearer rules on provenance and trust for these.
- **OAuth 2.1 with dynamic client registration and PKCE** appears repeatedly. Better handling of it is likely worth investing in.
- **Review SLAs or a triage process** is an implied need, based on #7611.

I can't predict what will ship in a next version from this data. Nothing in it points to a planned change.

## 7. User Feedback Summary
- **Pain point:** Submissions wait a long time with no visible response. Contributors resort to issue-based nudges ([#7611](https://github.com/docker/mcp-registry/issues/7611)).
- **Use cases:** Agents calling hosted business services such as marketing analytics, e-signature, booking, to-dos, licensing lookups and vehicle data. Local, offline, privacy-preserving tools also appear, such as invoice validation and regulatory data.
- **Satisfaction:** Not measurable. There are 0 reactions and 0 comments across the items.

## 8. Backlog Watch
Several PRs have been waiting a long time and were still being updated on 2026-11-24. Their update activity may be the contributors' own. Maintainers need to look at them.
- [#4803 fiscal-mcp](https://github.com/docker/mcp-registry/pull/4803): opened 2026-08-27, about 3 months old.
- [#5123 Postproxy](https://github.com/docker/mcp-registry/pull/5123): opened 2026-09-16.
- [#5676 hydracept](https://github.com/docker/mcp-registry/pull/5676): opened 2026-10-13.
- [#6646 CookiePal](https://github.com/docker/mcp-registry/pull/6646): opened 2026-11-05.
- [#6907 SalesCloser](https://github.com/docker/mcp-registry/pull/6907): opened 2026-11-10.
- [#7264 ClipperTask](https://github.com/docker/mcp-registry/pull/7264) and [#7281 Improvado](https://github.com/docker/mcp-registry/pull/7281): opened 2026-11-17.
- **Issue #7611** refers to five older PRs, including [#4389](https://github.com/docker/mcp-registry/pull/4389). Those need a maintainer decision on CI approval.

**Health assessment:** Contributor interest is strong, with 49 open PRs and about 10 new ones in a single day. Maintainer throughput is not visible in this data, and the backlog is growing. A triage label, a review SLA or batch approvals would reduce the risk of contributors dropping out.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-25

## 1. Today's Overview
Activity over the last 24h was moderate and almost entirely maintainer-driven. There were 12 PRs touched (4 open, 8 closed) and 3 issues, with no releases. Most PR traffic is `security-guidance` work from a single maintainer (mhegazy) preparing a 2.0.22 release. The one high-engagement item is the long-running Verified-organization thread (#7024, 42 comments). Overall health is good for maintenance and hardening. The community-facing policy question remains open.

## 2. Releases
No new releases.

## 3. Project Progress
Closed or merged in the window (the data does not separate merged from closed):

- **Plugin workflow hardening:** [#6907](https://github.com/anthropics/claude-plugins-official/pull/6907) added a PR check that fails when a versioned plugin changes without a version bump. Without a bump, existing installs never receive the change. [#7206](https://github.com/anthropics/claude-plugins-official/pull/7206) moved the verdict cache and scan policy outside the checkout, re-pinned the shared actions, and removed the CLI install from the scan.
- **security-guidance:** [#7207](https://github.com/anthropics/claude-plugins-official/pull/7207) documented the usage data the hooks report. [#7208](https://github.com/anthropics/claude-plugins-official/pull/7208) and [#7211](https://github.com/anthropics/claude-plugins-official/pull/7211) are duplicate PRs making the launcher name which Python failed when none works. They relate to claude-code#86709.
- **Discord:** [#7210](https://github.com/anthropics/claude-plugins-official/pull/7210) was an experiment to allow bot-to-bot messages. It was closed.
- **Vercel SHA bumps:** [#7209](https://github.com/anthropics/claude-plugins-official/pull/7209) and [#6569](https://github.com/anthropics/claude-plugins-official/pull/6569) are automated bumps that were closed. The newer one supersedes the older one, which had been open since October.

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) — How can an organization become Verified?** It has 42 comments and 15 👍. Since about 2026-11-05, the directory rejects command hooks and local MCP servers from non-Verified organizations. The underlying need is a documented, transparent verification path. Publishers say the pre-submission docs don't explain the requirement or the route to Verified status.
- **[#7214](https://github.com/anthropics/claude-plugins-official/issues/7214) — Discord category IDs in access.json groups.** The user wants one category ID to cover every channel under it. Today each new channel needs a manual `/discord:access group add`. The need is lower admin overhead for project-per-channel workflows.

## 5. Bugs & Stability
1. **[#7215](https://github.com/anthropics/claude-plugins-official/issues/7215) — claude-for-manufacturing XLSX parser (data correctness).** The morning-plant-pulse skill ignores the Excel 1904 date system, so dates and timestamps shift backward by 1,462 days without any warning. The report includes a reproduction. No fix PR yet.
2. **security-guidance review gaps (open PRs):**
   - [#7192](https://github.com/anthropics/claude-plugins-official/pull/7192): when a review's reply is entirely a code fence (seen behind gateways), the Stop, commit and push reviews are skipped.
   - [#7213](https://github.com/anthropics/claude-plugins-official/pull/7213): the commit hook infers the repository from the command text, which fails for branches, loops, subshells and variables, so commits go unreviewed.
   - [#7212](https://github.com/anthropics/claude-plugins-official/pull/7212): repositories with `core.useGVFSHelper = false` were skipped when reviewed from another session's repository.

   All three have fixes open.

## 6. Feature Requests & Roadmap Signals
- Discord category-level access ([#7214](https://github.com/anthropics/claude-plugins-official/issues/7214)) is a small, self-contained change, but it has no PR yet. It is plausible for a near-term release.
- Bot-to-bot messaging was tried and closed in [#7210](https://github.com/anthropics/claude-plugins-official/pull/7210). It is unlikely in the near term without a safer design.
- The next confirmed release is **security-guidance 2.0.22**. [#7205](https://github.com/anthropics/claude-plugins-official/pull/7205) is the version bump, held until the other 2.0.22 changes land.

## 7. User Feedback Summary
- Publishers are frustrated by the sudden Verified-only restriction on command hooks and local MCP servers. There is little guidance on how to qualify.
- Discord users want less manual setup in team servers.
- Domain-plugin users (manufacturing) expect correct file parsing and are exposed to silent errors.
- Users running behind gateways or unusual Python setups hit review-skipping and unclear error messages. Maintainers are addressing these.

## 8. Backlog Watch
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024):** this is the highest-priority item. It has been open since 2026-11-06 with 42 comments and 15 👍, and the data shows no maintainer resolution. It needs an official statement of the Verified criteria and process.
- **[#7205](https://github.com/anthropics/claude-plugins-official/pull/7205):** this is intentionally held. It should be merged last, after #7192, #7212 and #7213.
- **[#7215](https://github.com/anthropics/claude-plugins-official/issues/7215):** this is a new data-integrity bug with a clear reproduction and no assignee or fix visible yet.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-25

## 1. Today's Overview
VoltAgent/awesome-agent-skills had a quiet but steady day. No issues were updated and no releases shipped. All activity was in PRs: 9 were updated, 8 still open and 1 closed. Every PR is a community submission to add a skill to the curated list, and none has been merged. Contributors are submitting steadily, but there is no sign of maintainer review in this 24-hour window.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. The only closed PR was withdrawn by its author:
- [#1481](https://github.com/VoltAgent/awesome-agent-skills/pull/1481) "Withdrawn" was closed by its author, yangtianchangxiao. It looks like a replacement for #1483, which the same author opened the same day for the ChatFate skill.

The list itself therefore did not change today.

## 4. Community Hot Topics
No PR or issue has comments or reactions. Comments are undefined in the data and 👍 is 0 on all of them, so there is no real discussion to rank. The open submissions fall into these themes:

- **Specialized Domains** (the largest group):
  - [#1483](https://github.com/VoltAgent/awesome-agent-skills/pull/1483) ChatFate: Zi Wei Dou Shu, BaZi/Saju, synastry and Destiny Matrix.
  - [#1480](https://github.com/VoltAgent/awesome-agent-skills/pull/1480) mims-harvard/ToolUniverse: 154 biomedical research skills from Harvard Medical School's Zitnik Lab.
  - [#1479](https://github.com/VoltAgent/awesome-agent-skills/pull/1479) ZhuLinsen/alphasift: multi-market quantitative skill that needs no API key.
  - [#1478](https://github.com/VoltAgent/awesome-agent-skills/pull/1478) reelstyles/reelstyles-free: 9 free film-style kits, MIT license, installable as a Claude Code plugin.
- **Marketing**:
  - [#1482](https://github.com/VoltAgent/awesome-agent-skills/pull/1482) kubersharmax/amda-skill: a decision router that sorts marketing and GTM decisions into governance zones.
  - [#1477](https://github.com/VoltAgent/awesome-agent-skills/pull/1477) pipiads-dev/pipiads-mcp-server: TikTok and Facebook ad research through a local MCP server.
  - [#1475](https://github.com/VoltAgent/awesome-agent-skills/pull/1475) socialcrawl/socialcrawl: social data skill with 280 installs on skills.sh.
- **Development and Testing**:
  - [#1476](https://github.com/VoltAgent/awesome-agent-skills/pull/1476) gfargo/tui-design-skill: terminal UI design and review, covering Bubble Tea, Ratatui, Textual and Ink.

**Underlying need:** Skill authors want visibility in this directory. Vertical and domain-specific skills (biomedicine, finance, marketing, creative) are growing faster than general developer skills. Several submissions also link outside registries or marketplaces, such as skills.sh and ClawHub.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there are no fix PRs.

## 6. Feature Requests & Roadmap Signals
No issues were filed, so there are no explicit feature requests. The PR content suggests a few things:
- Domain categories are growing. Specialized Domains and Marketing keep receiving entries and may need subcategories or splits.
- Skills that depend on external services need a policy. [#1477](https://github.com/VoltAgent/awesome-agent-skills/pull/1477) requires an API key and paid credits, and [#1479](https://github.com/VoltAgent/awesome-agent-skills/pull/1479) stresses "zero-key" as a selling point.
- Bundles and collections, such as ToolUniverse's 154 skills, may need guidance on whether to list the whole collection or only selected skills.

I can't predict from this data what the next release or merge will contain.

## 7. User Feedback Summary
There are no direct user comments today. From the submissions, contributors value:
- Public repos with an open license (MIT) and a standard `SKILL.md` format.
- Evidence of real usage, such as install counts.
- Compatibility across agents (Claude Code, Codex, Cursor).

The tradeoff is that some entries rely on paid APIs or local servers.

## 8. Backlog Watch
- **Review capacity:** All 8 open PRs (#1475–#1480, #1482, #1483) are still awaiting maintainer review. The data shows no review activity or comments on any of them, and all were created on 2026-11-24.
- **Possible duplicate:** The author of #1483 withdrew #1481 and opened a new PR. This is worth a quick check to confirm the list gets no duplicate entry.
- **Triage risk:** The submission rate is about 9 PRs a day. If review does not keep pace, the backlog will grow. The data does not show how old the oldest open PRs are, so I can't flag specific long-stale items.
- **Vetting:** Entries that depend on paid or external services (#1477) or on unfamiliar domains (#1483) may need extra checks before merging.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
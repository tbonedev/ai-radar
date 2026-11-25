# MCP Ecosystem Digest 2026-11-26

> Issues: 4 | PRs: 2 | Projects covered: 7 | Generated: 2026-11-25 17:46 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Digest — 2026-11-26

## 1. Today's Overview
Activity is low but focused: 4 issues and 2 PRs were updated in the last 24h, with no new releases. Nearly all of it comes from maintainer `cliffhall` and concerns the **v2** line (protocol version 2026-07-28), covering Events extension support, conformance testing and test stability. The project looks to be in a v2 hardening phase. One feature PR landed, and the version-packages PR is still waiting for a release decision.

## 2. Releases
No new releases. [PR #5633](https://github.com/modelcontextprotocol/servers/pull/5633) (`chore: version packages`, opened by the Changesets bot on 2026-11-18) is still open. Merging it would publish the pending v2 package versions.

## 3. Project Progress
- **[PR #5652](https://github.com/modelcontextprotocol/servers/pull/5652) — everything: serve the Events extension (poll and push) on 2026-07-28.** Closes [#5651](https://github.com/modelcontextprotocol/servers/issues/5651). The reference "everything" server now implements `io.modelcontextprotocol/events` (SEP-3415, Beta) with both poll and push delivery. The PR was opened on 11-24 and closed on 11-25, so it moved quickly. The data lists it as CLOSED, and the Closes link suggests it was merged. That is not confirmed.
- This gives client authors a working reference implementation for testing the Events extension.

## 4. Community Hot Topics
Discussion volume is small, and no item has any 👍 reactions.
- **[#5641](https://github.com/modelcontextprotocol/servers/issues/5641)** (3 comments) is the most discussed item. It covers `git_branch` output leaking the CLI `* ` prefix, which breaks downstream tools. Users build multi-step git workflows from tool outputs, and those need clean, machine-usable values.
- **[#5658](https://github.com/modelcontextprotocol/servers/issues/5658)** (1 comment) reports flaky fetch tests under load, which affects contributor productivity.
- **[#5657](https://github.com/modelcontextprotocol/servers/issues/5657)** (0 comments) proposes running the official conformance suite. The maintainers want independent verification of protocol correctness instead of tests written by the server authors.

## 5. Bugs & Stability
Ranked by severity:
1. **[#5641](https://github.com/modelcontextprotocol/servers/issues/5641) — git: `git_branch` leaks the `* ` prefix** (open, reported on 2026-11-20, server version 2026.11.18). This is a functional bug. The current-branch marker leaks into the returned branch names, so passing those names to `git_checkout`, `git_diff`, `git_show` and `git_merge` fails. No fix PR is linked.
2. **[#5658](https://github.com/modelcontextprotocol/servers/issues/5658) — fetch: Readability tests fail under machine load** (open). The subprocess is killed at the production timeout, so the failures are intermittent. This is a CI and dev-experience problem, not a runtime defect. It cost two `local:gate` runs. No fix PR is linked yet.

## 6. Feature Requests & Roadmap Signals
- **Conformance suite in the gate and CI ([#5657](https://github.com/modelcontextprotocol/servers/issues/5657))** is likely near-term. It is maintainer-driven and part of the v2 chore track.
- **Events extension** has shipped in the everything server (#5651/#5652). Other servers may follow, but nothing indicates that yet.
- The merge of the version-packages PR [#5633](https://github.com/modelcontextprotocol/servers/pull/5633) is the likely trigger for the next v2 release.

## 7. User Feedback Summary
- Downstream users (such as the reporter of #5641, who uses the Python SDK 2.3.0 over stdio) depend on tool outputs being directly reusable as inputs to other tools.
- Maintainers feel friction from slow or flaky local gates under load.
- Overall, the feedback is a few precise defect reports. There are no complaints about direction.

## 8. Backlog Watch
- **[#5633](https://github.com/modelcontextprotocol/servers/pull/5633)** — the version-packages PR has been open for 8 days and needs a maintainer release decision.
- **[#5641](https://github.com/modelcontextprotocol/servers/issues/5641)** — a user-facing git server bug that has been open for 6 days with no linked fix. It is a good candidate for a small PR that strips the `* ` prefix.
- **[#5657](https://github.com/modelcontextprotocol/servers/issues/5657)** and **[#5658](https://github.com/modelcontextprotocol/servers/issues/5658)** are new, but both would benefit from an owner being assigned.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison, 2026-11-26

Note: the input is mostly MCP-ecosystem projects (servers, registries, curated lists, plugin directory), not agent runtimes. Comparisons are framed accordingly. Comment and reaction counts are missing for several projects, so health scores are my judgment from the data shown.

## 1. Ecosystem Overview
The ecosystem around MCP is shifting from building servers to curating, vetting and governing them. Five of the six projects are catalogs, registries or directories: their traffic is submission intake, not code. Submission volume is high (about 399 PRs on Awesome MCP Servers and 50 on Docker's registry in a day). Review throughput lags: zero merges at Docker, about 4% at Awesome MCP. Trust is the main concern. Open items cover endpoint liveness, OIDC scope, security-scan receipts and organization verification. The reference implementation (MCP Servers) is hardening the v2 protocol line (2026-07-28).

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Releases | Health (my judgment) |
|---|---|---|---|---|
| MCP Servers | 4 | 2 | None (version-packages PR #5633 pending) | 7/10: focused v2 work, small bugs unfixed |
| MCP Registry | 2 | 3 | None | 6/10: security issue #1920 untriaged, slow on older PRs |
| Awesome MCP Servers | 0 | 399 (384 open, 15 merged/closed) | None | 6/10: strong intake, review is the bottleneck |
| Docker MCP Registry | 0 | 50 (all open) | None | 5/10: no merges today, old PRs waiting |
| Claude Plugins (official) | 4 | 7 (5 closed, 2 open) | None | 6/10: automation works, governance and docs lag |
| Awesome Agent Skills | 0 | 9 (8 open, 1 closed) | None | 6/10: steady intake, no merges or reviews |
| Awesome Claude Code | 0 | 0 | None | n/a: no activity |

## 3. MCP Servers's Position
- **Role:** It is the reference implementation, not a catalog. It sets the protocol behavior (Events extension, SEP-3415) that other projects list or consume.
- **Advantages:** It has the clearest technical direction. Its work is maintainer-led, aimed at conformance, and has a defined release trigger. Defects are narrow (#5641, #5658) and none is a design dispute.
- **Approach differences:** The registries and lists handle discovery and trust. MCP Servers handles correctness and spec alignment, and it is adding independent verification through the conformance suite (#5657).
- **Community size:** It is small by volume (6 items) compared with Awesome MCP Servers (399 PRs) and Docker (50 PRs). That is expected for a core repo, but it means few outside contributors and a bus-factor risk, since almost all activity comes from `cliffhall`.

## 4. Shared Technical Focus Areas
- **Trust and security:** Registry #1920 (OIDC scoped to the whole org namespace) and #1404 (scan receipts). Plugins #7024 (Verified organizations). Awesome MCP lists read-only, SSRF-hardened and OAuth 2.1 servers.
- **Verification and conformance:** MCP Servers #5657 (conformance suite). Registry #1870 (4.9% of sampled endpoints fail the handshake) and #1754 (daily monitoring).
- **Remote and hosted servers with OAuth:** Docker (streamable-http, OAuth 2.1 with dynamic registration, #7712 and #7715). Registry (remote endpoints). Awesome MCP (per-host approval).
- **Versioning and staleness:** Plugins #6278 (the cache is keyed by version only). MCP Servers #5633 (release pending).
- **Review automation:** Awesome MCP (label checks), Awesome Agent Skills (rules checkable by automation) and Docker (the review queue). All three need more reviewer capacity.

## 5. Differentiation Analysis
- **MCP Servers:** The audience is client and server authors. It is a code repo with a reference implementation and protocol tests.
- **MCP Registry:** The audience is publishers and clients. Key concerns are namespaces, identity (OIDC and DNS) and metadata.
- **Awesome MCP Servers:** The audience is end users and developers browsing. It is a Markdown list. Its gate is the Glama badge and label checks, and it has a Chinese README.
- **Docker MCP Registry:** The audience is Docker users. It is a containerized or remote catalog based on `server.yaml`, `tools.json` and a readme, and it accepts closed-source hosted services.
- **Claude Plugins:** The audience is Claude Code users and plugin authors. It has a stricter policy gate (Verified organizations for hooks and local MCP servers) and pins entries by commit SHA.
- **Awesome Agent Skills:** The audience is skill authors. It lists skills (not MCP servers) and requires adoption evidence such as stars or installs.

## 6. Community Momentum & Maturity
- **High volume, review-constrained:** Awesome MCP Servers, Docker MCP Registry.
- **Steady intake, light review:** Awesome Agent Skills.
- **Governance under strain:** Claude Plugins (#7024 with 43 comments and 15 👍; #1898 open about six months). Registry (#1404 open about five months).
- **Rapidly iterating, narrow scope:** MCP Servers (v2 line).
- **Dormant today:** Awesome Claude Code. It had no activity, which may be a quiet day and not a trend.

## 7. Trend Signals
- **Trust infrastructure is the gap.** Liveness checks, scoped publishing, scan receipts and organization verification all come up independently. Third-party monitors such as 7Maps are filling gaps the registry doesn't cover. Developers should expect to build their own verification today.
- **Remote servers over OAuth are becoming the default** for vendor listings. Agent developers should plan for OAuth 2.1 and streamable-http, and expect some listed endpoints to be dead (about 4.9% in one sample).
- **Policy is moving faster than documentation.** The Verified-organization rule in Plugins shows that enforcement can arrive before guidance. Authors should track policy threads and not rely on checklists.
- **Content-addressed versioning is spreading.** SHA pinning and bumps (Plugins) respond to the stale-cache problem (#6278). Tool outputs also need to be machine-clean (#5641).
- **Agent-assisted submissions are visible** (🤖 markers in Awesome MCP titles). Maintainers will likely need more automation to keep up.
- **Caveat:** Most items have no comment or reaction data, so the activity tiers rest on item counts, not engagement.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-11-26

Repo: github.com/modelcontextprotocol/registry

## 1. Today's Overview
Activity is low. In the last 24h, 2 issues and 3 PRs were updated, and there were no new releases. Both issues are open. One of the three PRs closed, and two PRs remain open. The day's content is mostly about registry quality and security. One issue measures how many listed remote endpoints actually work. The other flags an over-broad GitHub OIDC permission. Most PR activity is community listings and metadata proposals, not core code changes.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One PR was closed without merging:
- [#1903](https://github.com/modelcontextprotocol/registry/pull/1903) "Add com.zutonline/zut-agent-network MCP server" was closed. The author proposed a Streamable HTTP server at `zutonline.com` and offered a DNS TXT record for domain verification. No closure reason is in the data. It was probably a manual listing request, which the registry normally handles through its publish flow and not through PRs.

## 4. Community Hot Topics
Engagement is thin: the most commented item has one comment and no 👍 reactions.
- [#1870](https://github.com/modelcontextprotocol/registry/issues/1870) **Measurement: 1,041 of 21,180 company remote endpoints fail a standard handshake twice (4.9%)**. It has 1 comment and was updated 2026-11-25. The author checked 45,531 active latest entries that list a remote, then narrowed them to company-domain namespaces with no required headers or URL templates, one endpoint per host. About 4.9% failed the handshake twice. The underlying need is registry-level quality control, such as liveness checks, health signals, or delisting of dead endpoints.
- [#1754](https://github.com/modelcontextprotocol/registry/pull/1754) **Add 7Maps to Community Projects**. The tool checks every remote server's handshake and tool list daily and publishes a signed history. It ties closely to #1870, which suggests third-party monitoring is filling a gap in the registry.
- [#1404](https://github.com/modelcontextprotocol/registry/pull/1404) **Optional security-scan receipt `_meta` extension (v1)**. It resolves the design discussion in #1273 and reflects demand for supply-chain trust signals.

## 5. Bugs & Stability
Ranked by severity:
1. **Security: [#1920](https://github.com/modelcontextprotocol/registry/issues/1920) GitHub OIDC grants access to the whole org namespace.** After validating signature, issuer, audience and expiry, `ValidateToken` checks only `repository_owner`. That grants publish rights to all of `io.github.<owner>/*`. Any repository, workflow or token in an org can therefore publish under any name in that org's namespace. It was filed 2026-11-24 with 0 comments. No fix PR is linked.
2. **Reliability: [#1870](https://github.com/modelcontextprotocol/registry/issues/1870).** About 4.9% of the sampled company remote endpoints fail the handshake. The registry's data quality is affected, but there is no service outage. No fix PR is linked.

## 6. Feature Requests & Roadmap Signals
- **Scoped OIDC publishing (#1920).** This is likely to be addressed, probably by checking the `repository` claim or by letting owners configure a mapping. It is a security issue, so it has a good chance of landing soon.
- **Endpoint health and liveness signals (#1870).** These are plausible as a status field or periodic validation. No concrete proposal exists yet.
- **Security-scan receipt `_meta` extension (#1404).** This is an optional v1 extension that has been open since June. It could ship if maintainers accept the scope.
- **Community project listings (#1754).** This is a docs-only change and low risk.

## 7. User Feedback Summary
- Consumers of the registry, such as clients and aggregators, are hitting dead or non-conforming remote endpoints.
- Security-minded users want finer-grained publish authorization and verifiable scan or provenance data.
- Third-party tools, such as the 7Maps monitor from #1754, are building their own verification layers. This suggests the registry's built-in assurances are seen as insufficient.
- No sentiment signals exist, since all items have 0 👍.

## 8. Backlog Watch
- [#1404](https://github.com/modelcontextprotocol/registry/pull/1404) has been open since 2026-06-29, about five months, and is still being updated. It needs a maintainer decision on the `_meta` security-scan receipt extension.
- [#1754](https://github.com/modelcontextprotocol/registry/pull/1754) has been open since 2026-10-27, about one month. It is a simple docs change that a maintainer could merge or reject quickly.
- [#1920](https://github.com/modelcontextprotocol/registry/issues/1920) is new, but it should be triaged soon because of its security impact.
- [#1870](https://github.com/modelcontextprotocol/registry/issues/1870) needs a maintainer response on whether the registry should do endpoint validation.

**Health assessment:** The project is quiet today, with no releases or merges. Community members are making substantive contributions on registry trust and quality. Maintainer response time on security and data-quality items is the main thing to watch.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-26

## 1. Today's Overview
Awesome MCP Servers is a curated list, so activity is almost entirely PR intake. In the last 24h there were **0 issues, 0 releases, and 399 PRs updated**. Of those, 384 are open and 15 are merged or closed. That is very high volume for a list repo. It points to a steady stream of server submissions and a maintainer review queue that is falling behind. Listing quality checks are automated through labels such as `has-glama`, `missing-glama`, `valid-name` and `has-emoji`.

## 2. Releases
No new releases.

## 3. Project Progress
Only 15 of the 399 updated PRs were merged or closed. The data doesn't list which ones, so I can't say which entries landed or were rejected. Merge throughput is about 4% of PR activity.

## 4. Community Hot Topics
The data shows no comment counts (all `undefined`) and 0 👍 on every PR shown. I can't rank PRs by discussion. The 20 PRs shown are all new-server submissions. Their themes show what contributors are adding:

- **Finance and data:** [#20727](https://github.com/punkpeye/awesome-mcp-servers/pull/20727) (US Government Public Data suite), [#20723](https://github.com/punkpeye/awesome-mcp-servers/pull/20723) (AllSwap), [#20722](https://github.com/punkpeye/awesome-mcp-servers/pull/20722) (fin-checkup, Korean DART filings), [#20726](https://github.com/punkpeye/awesome-mcp-servers/pull/20726) (EIN.LLC), [#19832](https://github.com/punkpeye/awesome-mcp-servers/pull/19832) (DrawCommons ledger).
- **Cloud and infrastructure:** [#20728](https://github.com/punkpeye/awesome-mcp-servers/pull/20728) (KubeOrbit, read-only Kubernetes), [#19074](https://github.com/punkpeye/awesome-mcp-servers/pull/19074) (reliant-labs/forge), [#19856](https://github.com/punkpeye/awesome-mcp-servers/pull/19856) (Proxmox controller), [#18786](https://github.com/punkpeye/awesome-mcp-servers/pull/18786) (DeviceChain IoT), [#20729](https://github.com/punkpeye/awesome-mcp-servers/pull/20729) (SashiDo).
- **Developer and agent tooling:** [#20725](https://github.com/punkpeye/awesome-mcp-servers/pull/20725) (grape-kit), [#20724](https://github.com/punkpeye/awesome-mcp-servers/pull/20724) (aiwget, an OAuth/MCP inspector), [#20720](https://github.com/punkpeye/awesome-mcp-servers/pull/20720) (page-perception, accessibility-tree browsing), [#20255](https://github.com/punkpeye/awesome-mcp-servers/pull/20255) (som-window-mcp), [#15244](https://github.com/punkpeye/awesome-mcp-servers/pull/15244) (grill).
- **Media and files:** [#20730](https://github.com/punkpeye/awesome-mcp-servers/pull/20730) (SizeMyFile), [#18133](https://github.com/punkpeye/awesome-mcp-servers/pull/18133) (Chutes Media), [#20095](https://github.com/punkpeye/awesome-mcp-servers/pull/20095) (whensaid).

Underlying needs:
- **Safety:** Many submissions stress read-only behavior and hardening. Examples are KubeOrbit's `readOnlyHint` tools, DrawCommons' GET-only design, and aiwget's SSRF hardening.
- **Auth:** OAuth 2.1 and per-host approval switches appear several times.
- **Token efficiency:** page-perception pitches AX trees over screenshots.

## 5. Bugs & Stability
No issues were reported and no bug-fix PRs appear in the data. Nothing to rank. The risk here is about list quality, not code. Submissions flagged `missing-glama` ([#20730](https://github.com/punkpeye/awesome-mcp-servers/pull/20730), [#20728](https://github.com/punkpeye/awesome-mcp-servers/pull/20728), [#20727](https://github.com/punkpeye/awesome-mcp-servers/pull/20727), [#20725](https://github.com/punkpeye/awesome-mcp-servers/pull/20725), [#20720](https://github.com/punkpeye/awesome-mcp-servers/pull/20720)) don't yet meet the Glama listing requirement. They will probably need changes before they can merge.

## 6. Feature Requests & Roadmap Signals
There are no issues and so no explicit requests. Two signals can be read from the PRs:
- **Categories keep growing.** Submissions touch Cloud Platforms, Finance & Fintech, Industrial & IoT, OS Automation, Speech-to-Text and Knowledge & Memory. Maintainers may need to split or reorganize crowded sections, since alphabetical placement is already being enforced.
- **Bilingual upkeep.** [#20725](https://github.com/punkpeye/awesome-mcp-servers/pull/20725) updates both `README.md` and `README-zh.md`. Contributors may need clearer guidance on whether to touch both files.

## 7. User Feedback Summary
There is no direct user feedback (0 comments, 0 reactions, 0 issues). Contributor behavior suggests these points:
- The submission process is understood. Most PRs carry the full set of passing validation labels.
- Contributors work to meet the Glama badge and backlink requirement. For example, [#20726](https://github.com/punkpeye/awesome-mcp-servers/pull/20726) notes that Glama approval and its server check passed.
- Some PRs carry a 🤖🤖🤖 marker in the title ([#19839](https://github.com/punkpeye/awesome-mcp-servers/pull/19839), [#19074](https://github.com/punkpeye/awesome-mcp-servers/pull/19074), [#18786](https://github.com/punkpeye/awesome-mcp-servers/pull/18786)). It most likely indicates agent-assisted authorship or a fast-lane convention. The data doesn't say which.

## 8. Backlog Watch
Several open PRs are old but were updated on 2026-11-25. This suggests contributors are rebasing and nudging them while they wait for review:
- [#15244](https://github.com/punkpeye/awesome-mcp-servers/pull/15244) (grill): created 2026-09-27, about 2 months open, all checks passing.
- [#18133](https://github.com/punkpeye/awesome-mcp-servers/pull/18133) (Chutes Media): created 2026-10-30.
- [#18786](https://github.com/punkpeye/awesome-mcp-servers/pull/18786) (DeviceChain): created 2026-11-06.
- [#19074](https://github.com/punkpeye/awesome-mcp-servers/pull/19074) (forge): created 2026-11-10 and rebased on 2026-11-25.
- [#19832](https://github.com/punkpeye/awesome-mcp-servers/pull/19832), [#19839](https://github.com/punkpeye/awesome-mcp-servers/pull/19839), [#19856](https://github.com/punkpeye/awesome-mcp-servers/pull/19856): all from 2026-11-17.

All of these carry `has-glama`, `valid-name` and `has-emoji`, so they look merge-ready on automated checks. With 384 open PRs, the maintainers need either more review capacity or more automation, such as auto-merging PRs that pass every check.

**Health assessment:** Contributor interest is strong and submission quality is generally high. Review throughput is the bottleneck. The data has no comment counts, so these conclusions rest on PR labels and dates, not discussion.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-26

## 1. Today's Overview
The registry saw **no issues, no releases, and no merged or closed PRs** in the last 24h. All 50 updated PRs are open. Activity is entirely contributor-driven: new server submissions arrive faster than they're reviewed. Several of the 20 PRs shown were opened on 2026-11-25. Others, such as #5240, #1624 and #4759, are months old and were only touched today. The project is healthy on inbound interest, but there is no sign of review throughput today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. The 50 updated PRs are all open submissions.

## 4. Community Hot Topics
Comment counts are reported as `undefined` for every PR, so there is no comment or reaction signal (all 👍 counts are 0). The list below is by theme rather than engagement.

- **Remote and hosted MCP servers dominate.** Examples:
  - [#7717 Lowdown](https://github.com/docker/mcp-registry/pull/7717)
  - [#7716 Nana](https://github.com/docker/mcp-registry/pull/7716)
  - [#7715 Kling AI (Global and China)](https://github.com/docker/mcp-registry/pull/7715)
  - [#7714 Nemus](https://github.com/docker/mcp-registry/pull/7714)
  - [#7712 CodeRabbit](https://github.com/docker/mcp-registry/pull/7712)
  - [#7711 Football Finder](https://github.com/docker/mcp-registry/pull/7711)
  - [#7706 Spring Prompt](https://github.com/docker/mcp-registry/pull/7706)
  - [#7705 PeopleSearch.im](https://github.com/docker/mcp-registry/pull/7705)
  - [#7703 PostWharf](https://github.com/docker/mcp-registry/pull/7703)
  
  Vendors want a catalog presence for hosted services. Most use streamable-http, and several use OAuth 2.1 with dynamic client registration.
- **Multi-server bundles from one publisher.** [#7704](https://github.com/docker/mcp-registry/pull/7704) adds four Yojowa servers. [#6233](https://github.com/docker/mcp-registry/pull/6233) adds Alion Jobs and Companies. [#7707](https://github.com/docker/mcp-registry/pull/7707), [#7708](https://github.com/docker/mcp-registry/pull/7708) and [#7709](https://github.com/docker/mcp-registry/pull/7709) add three Fudaut servers for the German B2B and accounting niche (DATEV, E-Rechnung/GAEB, BMEcat/OCI).
- **Local and privacy-oriented servers.** [#7710 complydoc](https://github.com/docker/mcp-registry/pull/7710) masks PII and detects prompt injection. [#7713 qrcode-barcode-scanner](https://github.com/docker/mcp-registry/pull/7713) works offline and read-only.
- **Closed-source remote listings.** [#7716](https://github.com/docker/mcp-registry/pull/7716) and [#7711](https://github.com/docker/mcp-registry/pull/7711) note that the server itself isn't open source. This raises a policy question about listing hosted-only services.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there are no fix PRs.

## 6. Feature Requests & Roadmap Signals
No issues were filed. The submissions suggest these signals:
- **Remote server support is now the main path.** Entries follow the `servers/linear` structure or the remote-server section of CONTRIBUTING.
- **Auth.** OAuth provider, secret and environment identifier handling appears in [#7712](https://github.com/docker/mcp-registry/pull/7712). Dynamic discovery of OAuth flows appears in [#7715](https://github.com/docker/mcp-registry/pull/7715).
- **Regional and variant listings.** Kling's separate Global and China entries may call for guidance on multi-region servers.
- **Likely near-term catalog additions.** Hosted submissions with complete `server.yaml`, `tools.json` and `readme.md` files, such as [#7705](https://github.com/docker/mcp-registry/pull/7705), are the easiest to merge.

## 7. User Feedback Summary
There is no direct user feedback, because there are no issues or comments. Contributor use cases include:
- Grocery pricing ([#7716](https://github.com/docker/mcp-registry/pull/7716))
- Social media scheduling ([#7703](https://github.com/docker/mcp-registry/pull/7703))
- People and company data ([#7705](https://github.com/docker/mcp-registry/pull/7705))
- Code review governance ([#7712](https://github.com/docker/mcp-registry/pull/7712))
- UGC video ad generation ([#5240](https://github.com/docker/mcp-registry/pull/5240))
- MCP server health monitoring ([#7717](https://github.com/docker/mcp-registry/pull/7717))

## 8. Backlog Watch
These PRs were created long ago and still need maintainer attention:
- [#1624 IPGeolocation.io](https://github.com/docker/mcp-registry/pull/1624): opened 2026-03-12, about 8.5 months old. It is an official server with 17 tools.
- [#4759 GateCore Marketplace](https://github.com/docker/mcp-registry/pull/4759): opened 2026-08-23, about 3 months old.
- [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240): opened 2026-09-25, about 2 months old.
- [#5732 Taplio](https://github.com/docker/mcp-registry/pull/5732): opened 2026-10-15, about 6 weeks old.
- [#6233 Alion Jobs and Companies](https://github.com/docker/mcp-registry/pull/6233): opened 2026-10-28, about 4 weeks old.

Their updates today suggest the authors are still waiting on review. There is a risk of contributor attrition. Triage, labelling or batch review of the oldest PRs would clear the backlog.

**Health assessment:** inbound demand is high (about 50 PRs updated in a day), but merge throughput was zero today. The review queue is the bottleneck.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) Digest — 2026-11-26

## 1. Today's Overview
Activity was moderate over the last 24h: 4 issues and 7 PRs were updated, with no new releases. Five of the seven PRs were closed or merged, and two are automated SHA bumps still open. The dominant theme is plugin-directory governance. Issue #7024, about the "Verified organization" requirement, is by far the hottest thread. Reports about cache versioning, skill content corruption and plugin-routing conflicts add to a picture of a directory whose tooling is under strain as it grows.

## 2. Releases
No new releases.

## 3. Project Progress
Five PRs were closed today. The data doesn't say which were merged and which were closed unmerged, so I don't claim any as merged.
- [#7216](https://github.com/anthropics/claude-plugins-official/pull/7216) (claude[bot]): moves `bigquery-data-analytics` to the GoogleCloudPlatform source and pins `40b5dbe` (v0.3.0). Today `/plugin install` resolves to `6f9b356` (v0.2.5), so this would update the installed version.
- [#6989](https://github.com/anthropics/claude-plugins-official/pull/6989): the automated bump `6f9b3562 → b487156e` for the same plugin was closed the same day. It was most likely superseded by #7216, though that is my inference.
- [#7217](https://github.com/anthropics/claude-plugins-official/pull/7217) and [#7218](https://github.com/anthropics/claude-plugins-official/pull/7218) (imichaelmoore): the Claude Security Plugin v0.13.0 submission, followed by a PR to remove its specific commit reference. Both were closed within the day.
- [#7219](https://github.com/anthropics/claude-plugins-official/pull/7219) (MaxonT): fixes `morning-plant-pulse` so XLSX dates honour the 1904 date system, a 1,462-day offset. It fixes #7215 and was closed on 2026-11-24. Whether it merged isn't stated.

Two PRs remain open. [#7221](https://github.com/anthropics/claude-plugins-official/pull/7221) (vercel `50af4780 → 5e43a50c`) and [#7220](https://github.com/anthropics/claude-plugins-official/pull/7220) (figma `43a06ff1 → 5e479084`) are automated bumps. Both were validated with `claude plugin validate`.

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): How can an organization become Verified?** It has 43 comments and 15 👍, far more than any other item. Since about 2026-11-05 the directory has rejected command hooks and local MCP servers from non-Verified organizations. Submitters report that the pre-submission checklist doesn't explain the path to Verified status. The underlying need is a documented, transparent verification process and clear guidance for plugin authors. The thread has stayed active for about three weeks, and the last update was 2026-11-24.
- [#1898](https://github.com/anthropics/claude-plugins-official/issues/1898): 5 comments and 1 👍. It is a long-running bug and is covered below.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6278](https://github.com/anthropics/claude-plugins-official/issues/6278): `aws-core` stays at 1.1.0 across content changes.** The plugin cache is keyed by version, so machines that installed 1.1.0 earlier never receive later fixes, including a corrected `asm-exec` code path. This is a silent staleness problem, and similar versioning gaps could affect other plugins. No fix PR is linked.
2. **[#1898](https://github.com/anthropics/claude-plugins-official/issues/1898): `commit-commands:clean_gone` has `$1` stripped.** The source uses `awk '{print $1}'` correctly. When the skill is loaded through `Skill`, the argument-substitution layer removes `$1`, so the agent receives a broken script. It was opened in May and is still open after about six months. No fix PR is linked.
3. **[#7219](https://github.com/anthropics/claude-plugins-official/pull/7219): XLSX 1904 date-system shift** in `morning-plant-pulse`. The PR targeted it and has been closed. Confirm whether the fix landed.

## 6. Feature Requests & Roadmap Signals
- **Clear Verified-organization path** ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)). This is the strongest signal. Some form of official documentation or a process is likely, given the 43 comments.
- **Pluggable routing in the superpowers workflow** ([#7222](https://github.com/anthropics/claude-plugins-official/issues/7222)). The `brainstorming` HARD-GATE always routes to `writing-plans`. The requester wants domain plugins to register a more specific implementation skill. It was opened on 2026-11-25 and has no comments yet, so its chance of landing soon is low.
- **Content-aware plugin versioning** (from [#6278](https://github.com/anthropics/claude-plugins-official/issues/6278)). The ask is that the cache invalidates on content changes, not only on version bumps. The SHA-bump automation (#7220, #7221) partly points that way.

## 7. User Feedback Summary
- Plugin authors are frustrated by an enforcement change that arrived without a clear path to compliance. The checklist doesn't match actual behaviour.
- End users and maintainers hit stale installs when version strings don't change.
- Skill authors can't fully trust that what they write is what the agent receives (`$1` stripping).
- Plugin composition is a pain point. Domain plugins can't extend or override a hard-coded workflow.

## 8. Backlog Watch
- [#1898](https://github.com/anthropics/claude-plugins-official/issues/1898): open since 2026-05-17, with a reproducible root cause but no fix. It needs maintainer attention.
- [#6278](https://github.com/anthropics/claude-plugins-official/issues/6278): open since 2026-09-22, with 3 comments and no linked fix. It affects update delivery.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): open since 2026-11-06. It needs an official response on Verified status, because 43 comments suggest many blocked submissions.
- [#7222](https://github.com/anthropics/claude-plugins-official/issues/7222): new and untriaged. It should be assigned to a `superpowers` maintainer.

**Project health:** Automation (SHA bumps with validation) is working well and keeps up. Human-facing governance and documentation lag behind policy changes, as #7024 shows. Long-lived bugs like #1898 point to limited triage capacity.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-26

## 1. Today's Overview
Awesome Agent Skills (VoltAgent) is a curated list. Today's activity was almost entirely contributor submissions, with no issues and no releases. Nine PRs were updated: 8 open and 1 closed (a withdrawn submission). Nothing was merged, so list content did not change today. Activity is steady, and PR numbers are now near #1488. The main concern is a growing queue of unreviewed submissions.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were merged today.
- The one closed PR, [#1481 "Withdrawn"](https://github.com/VoltAgent/awesome-agent-skills/pull/1481), was withdrawn by its author, yangtianchangxiao. The same author opened [#1483 (ChatFate)](https://github.com/VoltAgent/awesome-agent-skills/pull/1483) the same day. This looks like a resubmission after fixing the first attempt.

## 4. Community Hot Topics
No PR or issue has any comments or 👍 reactions. The comment counts show as undefined. Interest shows up in what is being submitted:

- **Specialized Domains** is the busiest category:
  - [#1488 obendidi/trackflow](https://github.com/VoltAgent/awesome-agent-skills/pull/1488): 520+ stars, Apache-2.0.
  - [#1456 klingai-tech/kling-cli](https://github.com/VoltAgent/awesome-agent-skills/pull/1456): an official Kling AI CLI skill for image and video generation. It cites about 11.9K installs on skills.sh, the strongest adoption evidence today.
  - [#1483 ChatFate](https://github.com/VoltAgent/awesome-agent-skills/pull/1483): a Zi Wei Dou Shu, BaZi and Destiny Matrix skill.
- **Development and Testing:**
  - [#1487 telegram-bot-ui](https://github.com/VoltAgent/awesome-agent-skills/pull/1487): 20 stars.
  - [#1486 a1-gallery/design-reference](https://github.com/VoltAgent/awesome-agent-skills/pull/1486): design values measured from real sites.
- **Productivity and Collaboration:** [#1484 overleaf-collaboration](https://github.com/VoltAgent/awesome-agent-skills/pull/1484) covers Git conflict handling and `#agent` review comments in Overleaf.
- **Marketing:** [#1482 amda-skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1482) is a decision-governance router.
- **Office documents:** [#1485 yuanmou-ppt-skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1485) is a zero-dependency OOXML `.pptx` engine that works with Claude Code, Codex, Cursor and Antigravity.

The underlying need is for vertical, domain-specific skills such as media generation, documents and design. Contributors cite adoption evidence (stars, installs) because the list's contribution rules appear to require it.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no issues.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests. Two signals come from the submissions:
- Specialized Domains and Development and Testing keep growing and may need subcategories as they fill up.
- The submissions follow stated rules: an author/org prefix, a description of 10 words or fewer, a public repo, and adoption evidence. Automated validation of these rules would reduce reviewer effort. This is an inference from the PR text, not a request in the data.

## 7. User Feedback Summary
There was no direct feedback, because no comments or reactions were recorded. Contributors seem to understand the submission format. The withdrawn-and-resubmitted PR from yangtianchangxiao suggests the process has some friction, but the data doesn't say why.

## 8. Backlog Watch
- [#1456 klingai-tech/kling-cli](https://github.com/VoltAgent/awesome-agent-skills/pull/1456) was created 2026-11-20 and is the oldest open PR in today's data. It has no comments or reviews and cites strong adoption (about 11.9K installs). It should be reviewed first.
- The other 7 open PRs, #1482 to #1488, were opened 2026-11-24 or 2026-11-25. None has maintainer feedback yet.
- Today's window shows only recently updated PRs. Older unreviewed submissions may exist outside it, so the true backlog could be larger.

**Project health:** Contributor interest is high. Maintainer response is the weak point, since there were no merges or review comments today.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
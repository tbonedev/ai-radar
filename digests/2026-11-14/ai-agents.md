# MCP Ecosystem Digest 2026-11-14

> Issues: 3 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-14 13:55 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest, 2026-11-14

## 1. Today's Overview
Activity on modelcontextprotocol/servers is low today. Three issues were updated, two open and one closed. No PRs were updated and there were no new releases. Two of the three items are automated Dependabot-sweep chores from github-actions[bot]. The only human-driven item is a tool-description clarity issue that was closed today. Overall the project looks like it is in maintenance mode, with attention on the `v2` branch and security hygiene.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24h. One issue was resolved:
- [#5071](https://github.com/modelcontextprotocol/servers/issues/5071) (closed, labels: enhancement, v2). The filesystem and memory server tool descriptions were too similar for a model to choose between `list_directory` and `list_directory_with_sizes`, or between `delete_entities` and `delete_relations`. The issue was closed today after 6 comments. The data doesn't show which PR resolved it, so the fix cannot be confirmed from this snapshot.

## 4. Community Hot Topics
- [#5071](https://github.com/modelcontextprotocol/servers/issues/5071) is the most discussed item, with 6 comments and 0 👍. The underlying need is tool-description quality. Descriptions are the only signal an LLM has for tool selection, so near-duplicate wording causes mis-selection. This is a model-facing UX concern that applies to every client.
- [#5549](https://github.com/modelcontextprotocol/servers/issues/5549) and [#5546](https://github.com/modelcontextprotocol/servers/issues/5546) each have 1 comment and 0 reactions. They are routine automated items.

## 5. Bugs & Stability
No crashes or regressions were reported. Security-relevant items, ranked by advisory count:
1. [#5549](https://github.com/modelcontextprotocol/servers/issues/5549) (open). Bump `hono` to `4.13.16` in `package-lock.json`, covering 5 advisories (GHSA-3gg2-335m-rxc6, GHSA-46wx-v44x-9hh2, GHSA-4h7h-rv7c-7m2v, GHSA-4m76-xfj5-7975, GHSA-h7mg-cq63-vhpq). No fix PR is linked yet.
2. [#5546](https://github.com/modelcontextprotocol/servers/issues/5546) (open, server-fetch). Bump `soupsieve` to `4.0.0` in `src/fetch/uv.lock`, covering 3 advisories. No fix PR is linked yet.

Both issues say the fix is written by hand against `v2/main`. They were filed by the daily alert sweep (#4874) from open Dependabot alerts.

## 6. Feature Requests & Roadmap Signals
There are no new feature requests today. The `v2` label appears on all three items, which confirms that development and maintenance are concentrated on `v2/main`. Improving tool descriptions (#5071) fits a broader effort to make tools easier for models to use, and similar clarity fixes could follow for other servers.

## 7. User Feedback Summary
The one piece of user feedback is from #5071. The reporter says the filesystem and memory tools are hard for models to disambiguate. The reporter is described as client-agnostic, so the problem affects any MCP client. The fast closure suggests maintainers see this as a valid and cheap fix. There is no signal about satisfaction or dissatisfaction beyond this.

## 8. Backlog Watch
The 24h data holds nothing long-stale. The items needing attention are:
- [#5549](https://github.com/modelcontextprotocol/servers/issues/5549) and [#5546](https://github.com/modelcontextprotocol/servers/issues/5546). They have open advisories (8 in total), and the fixes must be hand-written against `v2/main`. If the automated sweep keeps filing issues faster than fixes land, they could pile up. Maintainers should assign owners.
- This snapshot doesn't cover older open issues or PRs, so a wider backlog review would need a longer time window.

**Project health:** Stable and quiet, with security upkeep being tracked systematically. The visible risk is the pending dependency advisories.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison Report, 2026-11-14

Note: the digests cover six MCP-related projects. Awesome Claude Code had no activity. These are not personal AI assistant or agent frameworks. They are the **registry, directory and distribution layer** around MCP and agent skills. The comparison below is framed that way. Comment counts were `undefined` in several digests, and some digests only sampled the top 20 items.

## 1. Ecosystem Overview
The MCP ecosystem is shifting from building servers to curating, distributing and securing them. Core spec and reference code (modelcontextprotocol/servers) is quiet, with 3 issues and 0 PRs. The distribution layer is busy: awesome-mcp-servers saw 139 PR updates, Docker MCP Registry 50, and Claude Plugins 30 PRs plus 10 issues. Inbound submissions are outpacing maintainer review almost everywhere, which makes review throughput the main bottleneck. Hosted (remote) servers with OAuth 2.1, and supply-chain trust, are the dominant technical themes.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Releases | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers (core) | 3 (2 open, 1 closed) | 0 | None | 7/10. Stable, but 8 open dependency advisories. |
| MCP Registry (official) | 1 | 3 (all open) | None | 7/10. Low volume, healthy, with one long-stalled design issue (#82). |
| Awesome MCP Servers | 0 | 139 (132 open, 7 merged/closed) | None | 5/10. Heavy inflow, and the queue is growing. |
| Docker MCP Registry | 0 | 50 (49 open, 1 closed) | None | 5/10. No merges, and PRs are aging up to about 4 months. |
| Claude Plugins (official) | 10 | 30 (15 merged/closed) | None | 8/10. Active and automated, but policy clarity is a risk. |
| Awesome Claude Code | 0 | 0 | None | Unknown. No data. |
| Awesome Agent Skills | 0 | 9 (all open) | None | 6/10. Moderate inflow, no merges. |

Health scores are my judgment from throughput and backlog signals, not metrics from the data.

## 3. MCP Servers's Position
- **Role:** it is the reference implementation, not a marketplace. It has the lowest throughput of the group (3 items) because the work is done on `v2/main`, and all three updated items carry the `v2` label.
- **Technical approach:** it ships code (servers, `package-lock.json`, `uv.lock`), so its risks are dependency security (`hono`: 5 advisories, `soupsieve`: 3). The other projects mostly manage metadata, such as `server.json`, listings and plugin manifests.
- **Advantages:** it sets the tool-description and schema conventions that peers depend on (#5071). Its security hygiene is systematic, with a daily alert sweep (#4874).
- **Community size:** by this window it is the smallest of the active projects. Awesome MCP Servers is about 46x larger by PR volume (139 vs 3). The comparison is rough, since the window is a single day and the repos have different roles.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Supply-chain trust and tool integrity | Registry (#82), Docker (#7101, #7039, #7105), Claude Plugins (#7024, `security-guidance` PRs), MCP Servers (advisories) | Tool fingerprinting, signed receipts, Verified-org gates, pinned commits, `--ignore-scripts` |
| Remote/hosted servers and OAuth | Docker (#7106, #7099), Awesome MCP (hosted OAuth endpoints), Claude Plugins (Slack MCP DCR, #17) | OAuth 2.1 with PKCE and dynamic client registration |
| Submission validation and automation | Awesome MCP (`missing-glama`, `non-github-url`), Registry (#1856), Docker (pin bots), Claude Plugins (SHA bumps) | Labels, bots and stricter metadata checks |
| Review throughput | Awesome MCP, Docker, Agent Skills, Claude Plugins | Open queues with few merges |
| AI-assisted contributions | Awesome MCP, Agent Skills | Disclosed AI use, and concern about automated submissions |
| Multi-agent state and coordination | Awesome MCP (#19506, #19505), Docker (#7104), Claude Plugins (Discord policies) | Shared memory, per-thread mention rules |
| Tool-description quality | MCP Servers (#5071) | Near-duplicate wording causes mis-selection |

## 5. Differentiation Analysis
- **MCP Servers:** code and reference servers. It serves server authors and client developers.
- **MCP Registry:** the official metadata and publishing path (`server.json`, OCI). It serves publishers, especially for Go and OCI.
- **Awesome MCP Servers:** a human-readable curated list that is open to anyone, with Glama as a quality gate.
- **Docker MCP Registry:** containerized and remote-server catalog. It leans toward security-hardened packaging.
- **Claude Plugins:** a plugin directory for the Claude product with a managed marketplace, rename maps, and a Verified-organization policy. It is the most governed.
- **Awesome Agent Skills:** skills (CLI, MCP and SaaS wrappers) with a focus on cross-vendor portability (Claude, OpenAI, Gemini).

## 6. Community Momentum & Maturity
- **Rapid inflow, slow throughput:** Awesome MCP Servers, Docker MCP Registry.
- **Active and well automated:** Claude Plugins. It is the one with real merges and closures (15).
- **Moderate inflow:** Awesome Agent Skills.
- **Stable or quiet:** MCP Servers, MCP Registry. They are in maintenance mode, with the registry's #82 open for more than 17 months.
- **Dormant in this window:** Awesome Claude Code.

## 7. Trend Signals
1. **Remote-first MCP:** hosted servers with OAuth 2.1 are becoming the default listing pattern. Developers should design for DCR/PKCE compatibility (see Slack #17).
2. **Trust is the next battleground:** signed tool definitions, Verified orgs and hardened builds all point the same way. Plan for provenance requirements.
3. **Registry fragmentation:** official registry, Docker, Claude Plugins and awesome lists overlap. Publishing in multiple places will need tooling, and the official `server.json` is the likely common source.
4. **Curation needs automation:** the volume of AI-assisted submissions is pushing projects toward bots and validation labels.
5. **Silent failures hurt trust:** dropped Telegram messages, hook timeouts and wrong-page pagination show demand for observable, deterministic behavior.
6. **Vertical expansion:** CAD, finance, invoicing and creative media entries show MCP spreading beyond developer tooling.

**Caveats:** single-day windows, partial samples, and missing merge/close breakdowns limit these conclusions. Treat the health scores as directional.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Project Digest: 2026-11-14

## 1. Today's Overview
Activity on modelcontextprotocol/registry is light today: 1 issue and 3 PRs were updated, with no new releases and no merged or closed PRs. All three PRs are open: two documentation additions and one validator bug fix. The one active issue, #82, is a long-running design discussion with 29 comments, which shows sustained community interest. Overall activity is low and there is no sign of instability.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. Three PRs are in flight:
- **[PR #1856](https://github.com/modelcontextprotocol/registry/pull/1856)**: fixes `looksLikeVersionRange` so that `x`, `X` or `*` in a prerelease tag is no longer treated as a version wildcard. Valid versions such as `19.0.0-experimental.1`, `2.1.0-hotfix.1` and `1.4.0-linux-x64` were being rejected. The wildcard check now looks only at the part before the first `-`. It fixes Issue #1855.
- **[PR #1757](https://github.com/modelcontextprotocol/repo/pull/1757)**: adds a Go + OCI stdio publishing quickstart. It includes a minimal server on the official Go SDK, a Dockerfile with the required `io.modelcontextprotocol.server.name` annotation, an OCI `server.json`, and the build/publish/verify commands.
- **[PR #1858](https://github.com/modelcontextprotocol/registry/pull/1858)**: adds the SourceWeft MCP Directory, a web browser for the official registry, to the "Browsers" section of the community projects list.

## 4. Community Hot Topics
- **[Issue #82](https://github.com/modelcontextprotocol/registry/issues/82)** (29 comments, 1 👍, opened 2025-05-27, updated today) is the only discussed item. It proposes that `server.json` submitters list every tool their server may invoke, and that the registry fingerprint those tools and store the fingerprints for MCP clients. A third-party vendor could then scan and approve the fingerprints. The underlying need is protection against **tool poisoning** and "rug-pull" changes to tool definitions after approval. It is labelled "not go-live blocker", so it is a security hardening item and not a launch requirement.
- The PRs have no recorded comments or reactions. Their themes are ecosystem discoverability (#1858) and publisher onboarding for non-Node/Python stacks (#1757).

## 5. Bugs & Stability
No new crashes or regressions were reported today. By severity:
1. **Low–medium**: the version-validation false positive fixed by [PR #1856](https://github.com/modelcontextprotocol/registry/pull/1856) (tracked as #1855). Publishers with valid prerelease or platform-suffixed versions are wrongly rejected. The fix PR is open and awaiting review.

## 6. Feature Requests & Roadmap Signals
- **Tool-signature fingerprinting ([#82](https://github.com/modelcontextprotocol/registry/issues/82))** is a security feature that would need schema changes to `server.json`, a trust model, and client integration. Despite the long discussion it is unlikely to land in the next version, because it has been open for more than 17 months without a resolution.
- **Go/OCI publishing documentation ([#1757](https://github.com/modelcontextprotocol/registry/pull/1757))** signals growing use of OCI packages and the Go SDK. It is likely to merge soon, since it is a low-risk docs change.
- **Community directories ([#1858](https://github.com/modelcontextprotocol/registry/pull/1858))** show that third parties are building on the registry's federated data.

## 7. User Feedback Summary
- Publishers hit friction from overly strict version validation, which rejects legitimate prerelease and platform-tagged versions (#1855/#1856).
- Non-Python and non-Node developers, such as Go users, want end-to-end publishing examples for OCI packages (#1757).
- Security-minded users want stronger supply-chain guarantees for tool definitions (#82).
- No explicit satisfaction or dissatisfaction signals appear in today's data.

## 8. Backlog Watch
- **[Issue #82](https://github.com/modelcontextprotocol/registry/issues/82)** has been open since 2025-05-27, with 29 comments and no resolution. It needs a maintainer decision to implement, defer or close it, or to split it into a concrete design proposal.
- **[PR #1757](https://github.com/modelcontextprotocol/registry/pull/1757)** has been open since 2026-10-28 (about 17 days) with no recorded comments. It needs a docs review.
- **[PR #1856](https://github.com/modelcontextprotocol/registry/pull/1856)** is a small, self-contained bug fix and should be quick to review and merge.

*Note: the PR #1757 link in section 3 contains a typo (`/repo/pull/`). The correct URL is https://github.com/modelcontextprotocol/registry/pull/1757.*

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-14

## 1. Today's Overview
Activity today is high but almost entirely inbound submissions: 139 PRs were updated in 24h (132 open, 7 merged/closed), with 0 issues and 0 releases. Nearly all traffic is community-submitted "Add X" listing PRs, spanning categories such as Browser Automation, Product Management, Data Science, and CAD. The 7 merged/closed PRs against 132 open implies the review queue is growing faster than it is processed. This project is a curated list, so health is best read from the submission volume and the review throughput, not from code.

## 2. Releases
No new releases.

## 3. Project Progress
Only 7 PRs were merged or closed today, and the provided data doesn't identify which ones or whether they were merged or rejected. I can't attribute specific features or fixes to them. Because this repo is a README listing, "progress" means new entries added, and the top-20 sample shows none of the merged items.

## 4. Community Hot Topics
No PR in the sample has a usable comment count (the field is `undefined` for all), and all show 0 👍. Discussion-based ranking isn't possible, so themes are inferred from submission content:

- **Agent memory and coordination:** [#19506 Mirsad](https://github.com/punkpeye/awesome-mcp-servers/pull/19506) (shared bi-temporal memory for multiple agents) and [#19505 OpenAgentForum](https://github.com/punkpeye/awesome-mcp-servers/pull/19505) (signed, encrypted agent coordination). This points to demand for multi-agent state sharing and trust.
- **Browser and local-machine control:** [#19501 Foxhand](https://github.com/punkpeye/awesome-mcp-servers/pull/19501) (uses the user's own Firefox profile), [#19496 surfbird-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/19496), [#19508 mac-terminal-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/19508).
- **CAD and engineering automation:** [#19504 Kompas3D-MCP](https://github.com/punkpeye/awesome-mcp-servers/pull/19504) and [#19495 FullyDefined for SOLIDWORKS](https://github.com/punkpeye/awesome-mcp-servers/pull/19495).
- **Deterministic math and reliability:** [#19502 zeroH-MCP](https://github.com/punkpeye/awesome-mcp-servers/pull/19502), [#16322 pycodemath](https://github.com/punkpeye/awesome-mcp-servers/pull/16322), and [#19499 signed pagination cursors](https://github.com/punkpeye/awesome-mcp-servers/pull/19499), which targets a silent wrong-page failure mode in agent pagination.
- **Business and vertical tools:** [#19484 BoundaryXP](https://github.com/punkpeye/awesome-mcp-servers/pull/19484), [#19509 FoPost](https://github.com/punkpeye/awesome-mcp-servers/pull/19509), [#19503 Usercase](https://github.com/punkpeye/awesome-mcp-servers/pull/19503), [#19500 Toplegen](https://github.com/punkpeye/awesome-mcp-servers/pull/19500), [#19497 vat-whitelist-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/19497), [#19498 Geo-Insights](https://github.com/punkpeye/awesome-mcp-servers/pull/19498).

## 5. Bugs & Stability
No issues were filed and no bug reports appear in the PR sample. Validation concerns visible in the automated labels:
- **`missing-glama`:** 10 of 20 sampled PRs lack a Glama listing (e.g. [#19506](https://github.com/punkpeye/awesome-mcp-servers/pull/19506), [#19507](https://github.com/punkpeye/awesome-mcp-servers/pull/19507)).
- **`non-github-url`:** [#19493](https://github.com/punkpeye/awesome-mcp-servers/pull/19493) links to bare `https://github.com` instead of the repo, and was submitted from a "secondary account".
- **Prerelease package:** [#19484](https://github.com/punkpeye/awesome-mcp-servers/pull/19484) points at `0.4.0-rc.7`, a prerelease.

## 6. Feature Requests & Roadmap Signals
No feature requests in the data. Signals for the list itself:
- Submitters are specifying more detail (hosted endpoints with OAuth, MCP Registry IDs), so listing-quality expectations are rising.
- Category crowding (Browser Automation, Data Science Tools, Art & Culture for CAD) may eventually justify new sections, for example a dedicated CAD/Engineering category. This is an inference, not a stated request.
- Agent memory/coordination is a growing niche that may merit its own grouping.

## 7. User Feedback Summary
There are no direct user comments. From the submissions: developers want agents to work in real user environments (own browser profile, local terminal, licensed desktop CAD), reliability guarantees (exact math, replay-safe cursors), and shared memory across agents. Several PRs disclose AI-assisted preparation (the 🤖 markers, and "prepared with coding-agent assistance" in [#19492](https://github.com/punkpeye/awesome-mcp-servers/pull/19492)), which suggests the maintainers see a lot of automated or semi-automated submissions.

## 8. Backlog Watch
- [#18751 bewerbungsfoto-check-mcp and car-listing-check-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/18751): open since 2026-11-06 (8 days), bundles two servers in one PR.
- [#16322 pycodemath](https://github.com/punkpeye/awesome-mcp-servers/pull/16322): open since 2026-10-13 (about a month), with a `has-glama` label, so it looks ready for review.
- The overall queue of 132 open PRs needs maintainer triage. Most of the oldest ones are not visible in this top-20 sample, so the true backlog age is likely understated here.

**Data caveat:** comment counts were `undefined` and only 20 of 139 PRs were shown, so rankings and ratios above are based on a partial sample.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-14

Repo: https://github.com/docker/mcp-registry

## 1. Today's Overview
Activity today was high but narrow. The registry saw 50 PRs updated (49 open, 1 closed) and no issues or releases. Almost all of the traffic is new third-party server submissions, and most are remote (hosted) MCP servers. The data shows no merges today, so intake is outpacing review. The queue is healthy for adoption but shows a maintainer-throughput risk. The comment counts in the data are `undefined`, so discussion levels can't be measured.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were merged today. The one closed PR is [#6017](https://github.com/docker/mcp-registry/pull/6017), "Add ce-net (remote MCP server)", opened 2026-10-23. The data doesn't say whether it was rejected, superseded or withdrawn.
- The only maintenance-style change visible is the automated pin update [#4370](https://github.com/docker/mcp-registry/pull/4370) (youtube_transcript). It has been open since 2026-07-09.

## 4. Community Hot Topics
Comment and reaction counts are unavailable (comments `undefined`, 👍 all 0), so this section ranks by theme instead of engagement.

- **Remote, hosted servers dominate.** Examples:
  - [#7106](https://github.com/docker/mcp-registry/pull/7106) FixMyScan (OAuth 2.1, PDF OCR)
  - [#7099](https://github.com/docker/mcp-registry/pull/7099) Fantasma (Ghost themes, OAuth 2.1 with PKCE)
  - [#7098](https://github.com/docker/mcp-registry/pull/7098) zaDojo (SEO/GEO analytics)
  - [#7102](https://github.com/docker/mcp-registry/pull/7102) LeadSets (B2B contact data)
  - [#7100](https://github.com/docker/mcp-registry/pull/7100) Liliphant (meeting memory)
  - [#7097](https://github.com/docker/mcp-registry/pull/7097) Investboard (finance, 24 tools, no order execution)
  
  Vendors want to be listed without shipping a container, and OAuth 2.1 with dynamic client registration is becoming the standard auth pattern.
- **Agent-ecosystem and trust tooling:**
  - [#7101](https://github.com/docker/mcp-registry/pull/7101) ccs-verifier-mcp (Ed25519-signed receipt verification)
  - [#7104](https://github.com/docker/mcp-registry/pull/7104) Fork (agents sharing harness improvements)
  - [#7039](https://github.com/docker/mcp-registry/pull/7039) ONAA Registry (agent and provider trust levels)
- **Security-hardened local servers:**
  - [#7105](https://github.com/docker/mcp-registry/pull/7105) SPHIOR CODE (built from source, pinned commit, `npm ci --ignore-scripts`)
  - [#5247](https://github.com/docker/mcp-registry/pull/5247) filesystem-mcp (`disableNetwork: true`, secrets denied by default)

## 5. Bugs & Stability
No issues were reported and no bug-fix PRs appear. There are no crash or regression signals today.

## 6. Feature Requests & Roadmap Signals
No issues or feature requests were filed. Signals come from the submissions:
- Remote server support with no auth or OAuth 2.1 is now a first-class path (e.g. [#7103](https://github.com/docker/mcp-registry/pull/7103) Peeve Docs, [#7104](https://github.com/docker/mcp-registry/pull/7104) Fork, [#5629](https://github.com/docker/mcp-registry/pull/5629) SpecStream).
- Categories are widening into finance, travel, invoicing, career coaching and creator payments ([#5726](https://github.com/docker/mcp-registry/pull/5726) Kulhad, [#6151](https://github.com/docker/mcp-registry/pull/6151) Zovo Invoice, [#5772](https://github.com/docker/mcp-registry/pull/5772) Vedar, [#7096](https://github.com/docker/mcp-registry/pull/7096) OffLadder). This could justify better category taxonomy and discovery.
- Several entries have no public repository (e.g. #7102, #7103). Expect a policy or validation question on how to verify hosted-only servers.

## 7. User Feedback Summary
There is no direct feedback today. Inferred from the PR bodies:
- Submitters care about a low-friction listing path for hosted services (same shape as `cloudflare-docs`).
- Submitters stress safety properties: read-only tools, no order execution or money transfer, no network access, and secrets denied by default.
- Some submitters repeatedly update PRs over weeks without a visible resolution, which suggests review latency.

## 8. Backlog Watch
These PRs have been open the longest and were updated today, so they probably need maintainer attention:
- [#4370](https://github.com/docker/mcp-registry/pull/4370): automated youtube_transcript pin update, open since 2026-07-09 (about 4 months).
- [#5247](https://github.com/docker/mcp-registry/pull/5247): filesystem-mcp, open since 2026-09-25.
- [#5629](https://github.com/docker/mcp-registry/pull/5629): SpecStream, open since 2026-10-12.
- [#5726](https://github.com/docker/mcp-registry/pull/5726): Kulhad, open since 2026-10-15.
- [#5772](https://github.com/docker/mcp-registry/pull/5772): Vedar, open since 2026-10-16.
- [#6151](https://github.com/docker/mcp-registry/pull/6151): Zovo Invoice, open since 2026-10-27.

**Health assessment:** Contributor demand is strong, with about 5 new submissions in a single day. Review and merge throughput is the bottleneck, and the older submissions are accumulating. Triage automation or batch review of the remote-server template would likely help.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-11-14

## 1. Today's Overview
Activity is high. 10 issues and 30 PRs were updated in 24 hours, but there were no releases. The repo works as a marketplace and plugin directory. Most PR traffic is automated SHA bumps from `github-actions[bot]`, plus a steady stream of `security-guidance` hardening PRs from `mhegazy`. The main community concern is a new Verified-organization gate on submissions (#7024). Telegram and Discord channel plugins keep drawing requests and fixes.

## 2. Releases
None.

## 3. Project Progress
15 PRs were merged or closed. The data doesn't separate merged from closed, so only the visible context is noted here.
- **SAP Fiori rename:** [#7120](https://github.com/anthropics/claude-plugins-official/pull/7120) renames `sap-fiori-mcp-server` to `sap-ux-fiori-tools` and repoints it to `plugins-coding-agents/fiori`. It adds the old name to the `renames` map so existing installs migrate. It supersedes [#6904](https://github.com/anthropics/claude-plugins-official/pull/6904) and the auto-closed #6856. Both #7120 and #6904 show as closed.
- **Theme examples:** [#7116](https://github.com/anthropics/claude-plugins-official/pull/7116) adds `theme-examples`, with 20 animated Claude Desktop backdrops. It is already drawing a performance complaint (#7125).
- **Closed external PRs:** [#7126](https://github.com/anthropics/claude-plugins-official/pull/7126) (README for `code-simplifier`) and [#7123](https://github.com/anthropics/claude-plugins-official/pull/7123) (Discord sticky mention window, server-wide opt-in, catch-up context, edits) are closed. #7123 was aimed at #1626 and #1026.
- **Closed bot PRs:** the stale `semgrep` bump [#6934](https://github.com/anthropics/claude-plugins-official/pull/6934) and `blackrock-advisor-center-plugin` [#7113](https://github.com/anthropics/claude-plugins-official/pull/7113) are closed. Newer bumps replace them.
- **Open work:**
  - Bumps: `qodo` ([#7122](https://github.com/anthropics/claude-plugins-official/pull/7122)), `amd-skills` ([#7121](https://github.com/anthropics/claude-plugins-official/pull/7121), [#7115](https://github.com/anthropics/claude-plugins-official/pull/7115)), `semgrep` ([#7119](https://github.com/anthropics/claude-plugins-official/pull/7119)) and `cloudflare` ([#7114](https://github.com/anthropics/claude-plugins-official/pull/7114)).
  - [#7115](https://github.com/anthropics/claude-plugins-official/pull/7115) also drops `strict:false`, which causes conflicting-manifest load failures.
  - `champion-kit` 0.5.1 security hardening: [#7118](https://github.com/anthropics/claude-plugins-official/pull/7118).

## 4. Community Hot Topics
1. **Slack MCP auth failure, [#17](https://github.com/anthropics/claude-plugins-official/issues/17).** It has 34 comments and 43 👍, and was closed on 2026-11-13 after almost 11 months. The cause is a dynamic client registration incompatibility. It was the most demanded fix in the repo.
2. **Verified-organization gate, [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024).** It has 32 comments and 12 👍. Since about 2026-11-05 the directory rejects command hooks and local MCP servers from non-Verified orgs. The docs reportedly don't explain how to become Verified. Authors need a clear path.
3. **TypeScript 7 native LSP, [#4492](https://github.com/anthropics/claude-plugins-official/issues/4492).** It has 21 👍. Users want `typescript-lsp` to move off the `typescript-language-server` wrapper around legacy `tsserver`.
4. **Discord mention policy, [#1626](https://github.com/anthropics/claude-plugins-official/issues/1626) and [#1026](https://github.com/anthropics/claude-plugins-official/issues/1026).** Users want per-thread mention rules and a guild-wide allowlist. They are running multi-agent channels and personal servers.

## 4a. Bugs & Stability
Ranked by severity:
1. **[#7128](https://github.com/anthropics/claude-plugins-official/issues/7128): hookify `UserPromptSubmit` timeout.** The 10 s timeout discards the prompt submission under heavy load (14 sessions, load average ~80). It can lose user input. It references PR #7112, but no fix PR is visible here.
2. **[#7127](https://github.com/anthropics/claude-plugins-official/issues/7127): Telegram drops unhandled message types** such as `rich_message` without any signal. [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048) (draft) covers poller lifecycle, reply/forward context and inbound durability, but it doesn't clearly cover this case.
3. **[#7125](https://github.com/anthropics/claude-plugins-official/issues/7125): Ember-style theme lags on Windows Desktop.** Panel blur and large pulsing glows are suspected. The theme shipped only a day earlier in #7116.
4. **Windows and hook robustness in `security-guidance`:**
   - [#7106](https://github.com/anthropics/claude-plugins-official/pull/7106): the edit hook stalls on App Installer's `python3` alias.
   - [#7104](https://github.com/anthropics/claude-plugins-official/pull/7104): `git \` line continuations bypass review.
   - [#7105](https://github.com/anthropics/claude-plugins-official/pull/7105): renamed text files get no review.
   - [#7103](https://github.com/anthropics/claude-plugins-official/pull/7103): a failed commit review leaves the push unreviewed.
   - [#7101](https://github.com/anthropics/claude-plugins-official/pull/7101): brace globs match nothing.

   All five are open fix PRs.

## 5. Feature Requests & Roadmap Signals
- TypeScript 7 LSP ([#4492](https://github.com/anthropics/claude-plugins-official/issues/4492)). Demand is high and the ecosystem is moving, so it is a likely candidate once TS7 stabilizes.
- Discord `requireMentionInThread` and guild-level allowlist ([#1626](https://github.com/anthropics/claude-plugins-official/issues/1626), [#1026](https://github.com/anthropics/claude-plugins-official/issues/1026)). The closed PR #7123 shows a ready implementation, but it was closed without merge. The closure reason is not stated in the data.
- An empty-project branch for `claude-automation-recommender` ([#7117](https://github.com/anthropics/claude-plugins-official/issues/7117)).
- Clarified Verified-org criteria ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)). A docs update is the most probable outcome.
- Reviewer prose trimming for `security-guidance` ([#7102](https://github.com/anthropics/claude-plugins-official/pull/7102)).

## 6. User Feedback Summary
- Plugin authors are confused by the new Verified gate. Hooks and local MCP servers are central to many plugins.
- Multi-agent chat users want finer control over when the bot responds.
- Heavy parallel-session users hit timeouts in hooks that run synchronously.
- Windows users are over-represented in the performance and compatibility reports.
- Silent failures, such as dropped Telegram messages, are a recurring frustration.
- Noise: [#7124](https://github.com/anthropics/claude-plugins-official/issues/7124) ("claude") has no content.

## 7. Backlog Watch
- [#4492](https://github.com/anthropics/claude-plugins-official/issues/4492): TS7 LSP, open since 2026-07-24 with 21 👍 and little maintainer discussion.
- [#1026](https://github.com/anthropics/claude-plugins-official/issues/1026): Discord guild allowlist, open since 2026-03-26.
- [#1626](https://github.com/anthropics/claude-plugins-official/issues/1626): Discord thread mentions, open since 2026-04-28.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): 32 comments, and it needs an official answer on Verified criteria.
- [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048): draft Telegram PR since 2026-11-09, which the author offers to split into three PRs.
- The five `security-guidance` PRs ([#7101](https://github.com/anthropics/claude-plugins-official/pull/7101) to [#7106](https://github.com/anthropics/claude-plugins-official/pull/7106)) have been open for 1–2 days and need review.

**Health assessment:** The repo is active and well automated. The risks are policy clarity, since the Verified gate came with thin documentation, and the community-contribution lane, which closes external PRs while issues stay open.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-14

## 1. Today's Overview
Activity is moderate and entirely submission-driven: 9 PRs were updated in the last 24h (all open, none merged or closed), with no issues and no releases. Every PR is a "Add skill: …" listing request for the curated Community Skills list. Nothing merged today, so the review queue is growing. The project looks healthy in inbound interest but shows no maintainer throughput in this window.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features advanced and no fixes landed. All 9 PRs remain open and await review.

## 4. Community Hot Topics
No item has reactions (👍 0 on all) and comment counts are not available in the data, so there is no engagement-based ranking. By theme, the new submissions cluster as follows:

- **Specialized Domains (4):** the Kling CLI skill [#1410](https://github.com/VoltAgent/awesome-agent-skills/pull/1410), AlphaDrama short-drama workflow [#1408](https://github.com/VoltAgent/awesome-agent-skills/pull/1408), make-pictures-studio [#1407](https://github.com/VoltAgent/awesome-agent-skills/pull/1407), and AIHOT Chinese AI news [#1406](https://github.com/VoltAgent/awesome-agent-skills/pull/1406). Creative and media generation (image/video/short drama) dominates, and AI-news retrieval appears as well.
- **Productivity and Collaboration (3):** generate-qr [#1405](https://github.com/VoltAgent/awesome-agent-skills/pull/1405), frihet-mcp [#1376](https://github.com/VoltAgent/awesome-agent-skills/pull/1376), and backup-your-skills [#1404](https://github.com/VoltAgent/awesome-agent-skills/pull/1404).
- **Marketing (1):** adkit/ads-skills [#1409](https://github.com/VoltAgent/awesome-agent-skills/pull/1409), covering ad platforms through an MCP connector with draft-for-approval changes.
- **Business/API (1):** SKU.io inventory skills [#1403](https://github.com/VoltAgent/awesome-agent-skills/pull/1403), made by the vendor and compiled for Claude, OpenAI and Gemini from one source.

Underlying need: vendors and authors want distribution for first-party skills, particularly those that wrap a CLI, MCP server or SaaS API.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There are no issues in the window.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Signals from the submissions:
- Cross-vendor portability is a growing theme (#1403 targets Claude, OpenAI and Gemini).
- MCP-connected skills are common (#1409, #1376).
- Skills about managing skills, such as backup and restore (#1404), point to ecosystem-tooling demand.

As this is a curated list, the likely near-term outcome is more category entries, not code changes.

## 7. User Feedback Summary
There is no direct user feedback because there are no issues or comments. The PR descriptions show that contributors cite evidence of legitimacy, including MIT licenses, version pins, npm download counts (#1407) and official-vendor status (#1410, #1403). Some disclose AI-assisted authoring (#1404), which suggests contributors are aware of the repo's contribution rules in `CONTRIBUTING.md` (org/repo prefix, short description).

## 8. Backlog Watch
- [#1376](https://github.com/VoltAgent/awesome-agent-skills/pull/1376) (Frihet-io/frihet-mcp) has been open since 2026-11-08, so it is the oldest in this window at about 6 days. It was updated on 11-13 but is still unmerged.
- The remaining 8 PRs are 0–1 days old, which is normal.
- Because nothing merged today, maintainers should triage the queue soon. The data does not show the full backlog beyond this 24h window, so older stale PRs may exist.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
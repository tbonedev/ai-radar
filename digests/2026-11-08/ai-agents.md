# MCP Ecosystem Digest 2026-11-08

> Issues: 0 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-08 14:01 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

No activity in the last 24 hours.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP and Agent Extension Ecosystem, 2026-11-08

## 1. Ecosystem Overview
Today's activity is mostly about the extension layer around coding agents: MCP server directories, plugin marketplaces and skill catalogs. Few of the tracked projects ship code. Most are intake pipelines for third-party submissions, so contribution volume is high (123 PRs on Awesome MCP Servers, 50 on Docker MCP Registry) while merge and review throughput is low. Three themes recur across projects: trust and verification (Verified orgs, tool fingerprinting, Glama checks), remote or hosted servers replacing local containers, and agent safety and policy guardrails. No project cut a release today.

## 2. Activity Comparison

Health scores are my own judgment (out of 10), based on throughput versus inflow. They are not computed from the data.

| Project | Issues updated | PRs updated | Release | Health | Note |
|---|---|---|---|---|---|
| MCP Servers (core reference) | 0 | 0 | None | N/A | No activity in 24h, so no basis to score |
| MCP Registry (official) | 3 | 4 (3 closed, 1 open) | None | 7.5 | Active maintainer, infrastructure work only |
| Awesome MCP Servers | 0 | 123 (113 open, 10 closed) | None | 6 | Strong inflow, review is the bottleneck |
| Docker MCP Registry | 2 | 50 (48 open, 2 closed) | None | 5.5 | No merges, no visible maintainer review |
| Claude Plugins (official) | 3 | 4 (2 closed, 2 open) | None | 6.5 | Bot automation healthy, policy gap on Verified orgs |
| Awesome Claude Code | 16 (14 open, 2 closed) | 0 | None | 6 | Validation automation works, human review lags |
| Awesome Agent Skills | 0 | 6 (all open) | None | 5 | No merges, no comments, no responses |

## 3. MCP Servers' Position
The core reference repo had no activity in the last 24 hours, so I can't make data-backed comparisons for today. What I can say:
- **Role:** The data doesn't describe the repo's role. In this group, the peers are directories, registries and catalogs that point to or package servers.
- **Technical approach:** Peers differ among themselves. The official MCP Registry is metadata-driven (`server.json`, API, domain auth). Docker MCP Registry packages servers as containers or remote entries. The Awesome lists are curated links.
- **Community size:** Today's volume is dominated by the directories: Awesome MCP Servers (123 PRs) and Docker MCP Registry (50 PRs). The core repo's silence says nothing about its overall health, since one quiet day is a weak signal. A longer window would be needed.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Trust, verification and provenance | MCP Registry, Claude Plugins, Awesome MCP Servers | Tool fingerprinting against tool poisoning (Registry #82). Verified-org gating for hooks and local MCP servers (Plugins #7024). Glama and naming checks as listing gates (Awesome MCP). |
| Remote and hosted servers, and auth patterns | Docker MCP Registry, MCP Registry | Streamable HTTP servers dominate new PRs. Open question on static Bearer keys without OAuth (Docker #6772). Non-exportable key re-authentication (Registry #1823). |
| Metadata freshness and consistency | MCP Registry, Docker MCP Registry | Duplicate `isLatest` rows after a republish (Registry #1819). Stale `tools.json` versus the live `tools/list` (Docker #6753). |
| Safety guardrails and policy | Awesome Claude Code, Awesome MCP Servers, Awesome Agent Skills | Safety Net, Actera, read-only MCP and `kubectl`, FairMind governance. |
| Agent self-verification and testing | Awesome Claude Code, Awesome Agent Skills | Momentic, assay. |
| Memory and context persistence | Awesome MCP Servers, Awesome Claude Code, Claude Plugins | Hivemind, Unl, Stockroom, amnitex. |
| Review automation and triage capacity | Nearly all | Submissions outpace review everywhere, which creates demand for batch review and auto-triage. |

## 5. Differentiation Analysis
- **MCP Registry:** It is the canonical, API-backed source of server metadata. Its focus is publisher identity and infrastructure, and its users are server publishers and client or registry operators.
- **Docker MCP Registry:** It is a curated catalog for Docker's own distribution. It is moving from container entries toward remote servers, and its contributors are mostly vendors and individual authors.
- **Claude Plugins (official):** It is vendor-controlled and enforces a policy (Verified orgs). Its target is plugin authors, with SHA-pinned bot updates validated by `claude plugin validate`.
- **Awesome MCP Servers, Awesome Claude Code and Awesome Agent Skills:** All three are human-curated lists with automated validation. They differ by artifact type: MCP servers, Claude Code resources (hooks, mods, skills), and cross-agent skills. Awesome Claude Code uses an issue-based intake form, while the other two use PRs.
- **Architecture contrast:** The registries (Registry, Docker) validate machine-readable manifests. The lists rely on labels and README edits, which produces merge conflicts on long-lived PRs (Awesome MCP #16834).

## 6. Community Momentum & Maturity
- **High inflow, throughput-limited:** Awesome MCP Servers (123 PRs), Docker MCP Registry (50 PRs, no merges), Awesome Claude Code (13 new submissions in about two days).
- **Active maintainer iteration:** MCP Registry. Its staged Gateway Fabric rollout (#1817, #1821, then #1822) is a deliberate sequence. It is infrastructure work, though, and nothing in the registry API changed.
- **Stabilizing, with a policy gap:** Claude Plugins. Automation is steady, but the Verified-org rule is enforced ahead of its documentation.
- **Slow review:** Awesome Agent Skills (6 PRs, 0 comments, 0 merges).
- **Not assessable:** MCP Servers (core), which had no activity today.

## 7. Trend Signals
1. **Trust is becoming a gating feature.** Tool poisoning concerns, Verified-org rules and listing checks all appeared in a single day. Developers publishing servers or plugins should plan for identity, signing and verification requirements.
2. **Remote-first MCP distribution is growing.** Hosted Streamable HTTP servers dominate Docker's new PRs. Auth guidance, such as Bearer versus OAuth, is not yet clearly documented, so teams should expect it to change.
3. **CI-friendly publishing is a gap.** Publishers don't want long-lived private keys in automation (Registry #1823). Expect demand for OIDC or signing-service flows. This is my inference, not a maintainer statement.
4. **Agents are checking their own output.** Testing and verification tools are among today's most visible new submissions, alongside policy-enforcement hooks.
5. **Curation capacity is the ecosystem bottleneck.** Inflow is high across the lists and registries while merge rates are low. Developers who want a listing should pass every automated check (Glama, naming, templates) and avoid duplicates, since that is the fastest route to a merge.
6. **Data caveat:** Several summaries lacked comment counts and reactions, and Awesome MCP Servers showed only 20 of its 123 PRs. The rankings and themes above are therefore indicative, not statistical.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-11-08

## 1. Today's Overview
Activity was moderate and led by infrastructure work. Four PRs were updated: three closed or merged and one still open. Three issues were updated, and there were no new releases. Maintainer `rdimitrov` drove the deploy and infrastructure effort, moving staging traffic to Gateway Fabric. On the community side, two new bug and feature reports arrived, plus renewed discussion on an older security proposal. The project looks healthy, with active maintainers and a steady stream of external reports. Two of those reports have had no maintainer response yet.

## 2. Releases
No new releases.

## 3. Project Progress
All of today's closed PRs concern deployment infrastructure or dependencies. No registry API or feature changes landed.

- **[PR #1821](https://github.com/modelcontextprotocol/registry/pull/1821)** (closed, `rdimitrov`): Switches staging public registry and Grafana traffic to the OSS Gateway Fabric data plane. It keeps the existing public Service, IP, TLS certificates and normal release flow. Pulumi now manages the reserved IP, public Gateway, routes, policies, namespace RBAC and telemetry. ingress-nginx stays available as a fallback.
- **[PR #1817](https://github.com/modelcontextprotocol/registry/pull/1817)** (closed, `rdimitrov`): Closes staging gateway monitoring gaps. GKE emits CRI payload fragments up to 256 KiB, which exceeded the canary's old 64 KiB source limit. The fix admits the CRI envelope and reconstructs bounded fragments before JSON filtering. It also adds totals across upstream attempts.
- **[PR #1808](https://github.com/modelcontextprotocol/registry/pull/1808)** (closed, dependabot): Go dependency group bump covering `cloud.google.com/go/kms`, `caarlos0/env/v11`, `huma/v2` and a `jackc` package. The data doesn't say whether it was merged or closed unmerged.

**Still open:** [PR #1822](https://github.com/modelcontextprotocol/registry/pull/1822) completes the staging migration. It removes the remaining ingress-nginx dependency and the duplicate canary. Production keeps its existing ingress. This is the next step in a staged rollout: #1817, then #1821, then #1822.

## 4. Community Hot Topics
- **[Issue #82](https://github.com/modelcontextprotocol/registry/issues/82)** is the most active item, with 26 comments and 1 👍. It dates from 2025-05-27 and was updated 2026-11-07. The proposal is to have `server.json` submitters list the tools their server may invoke, fingerprint them, and store the fingerprints for client consumption. Third-party vendors could then scan and approve them to prevent tool poisoning. The need is supply-chain trust for MCP tools. It is labeled "not go-live blocker" but has stayed open for about 17 months.
- **[Issue #1823](https://github.com/modelcontextprotocol/registry/issues/1823)** is about re-authenticating a domain publisher without putting the Ed25519 seed into automation. The reporter maintains `com.getpriorivo/website-check` and needs to publish a metadata-only `server.json` v1.0.3 that adds an icon. This points to a gap in CI-friendly publishing for domain-authenticated servers.

## 5. Bugs & Stability
1. **[Issue #1819](https://github.com/modelcontextprotocol/registry/issues/1819)** (medium): After the same version is published twice and a newer version follows, `GET /v0/servers?search=...` returns both rows for the duplicate version. Both stay marked active and `isLatest`, although the status update succeeded. The example is 0.7.16 published on 4 Nov and again on 5 Nov, then 0.7.17. This is a data-consistency problem in the list view that could mislead clients. No fix PR exists and there are no comments yet.

No crashes or security regressions were reported today. The infrastructure PRs, especially #1817, improve staging observability.

## 6. Feature Requests & Roadmap Signals
- **Tool signature fingerprinting ([#82](https://github.com/modelcontextprotocol/registry/issues/82))** has high discussion volume. It was explicitly deferred as "not go-live blocker", so I'd put it in the longer-term roadmap rather than the next version.
- **Non-exportable key re-authentication ([#1823](https://github.com/modelcontextprotocol/registry/issues/1823))** could be addressed through documentation or a supported flow, such as OIDC or a signing service. It is a plausible near-term item if more publishers ask for it.
- **Infrastructure:** The Gateway Fabric migration will probably be finished for staging soon, with production to follow later. Production currently keeps its existing ingress.

## 7. User Feedback Summary
- Publishers want to ship metadata-only updates, such as icons, without managing long-lived private-key material in automation (#1823). They are concerned about security and operational practice.
- Registry consumers and operators need the list API to be consistent after republishing a version (#1819).
- Security-minded users still want stronger protection against tool poisoning (#82).
- The reports are detailed, with repro steps and validation notes. That suggests technically capable users who are invested in the registry.

## 8. Backlog Watch
- **[Issue #82](https://github.com/modelcontextprotocol/registry/issues/82)** is the longest-running item, open since 2025-05-27 with 26 comments. It needs a maintainer decision on scope, either a design proposal or a clear won't-do, to keep the discussion from going stale.
- **[Issue #1819](https://github.com/modelcontextprotocol/registry/issues/1819)** and **[Issue #1823](https://github.com/modelcontextprotocol/registry/issues/1823)** have zero comments and need triage. #1819 affects data correctness, so it should be looked at first.
- **[PR #1822](https://github.com/modelcontextprotocol/registry/pull/1822)** is an open maintainer PR that awaits review and merge to finish the staging migration.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-08

## 1. Today's Overview
Activity today is PR-only. There were 0 issues, 0 releases and 123 PRs updated in 24h (113 open, 10 merged or closed). The repo works as a curated link list, so almost all traffic is submissions of new MCP servers. Most of today's open PRs carry the automation labels `has-glama`, `has-emoji` and `valid-name`. Throughput looks healthy, but the open-PR count is high, so review is likely the bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
10 PRs were merged or closed today. The data does not list which ones, so I can't name them or say what they changed. In this repo, merged PRs add or refresh README entries. Closed PRs are usually duplicates or resubmissions. For example, #16834 says it replaces the closed #15289.

## 4. Community Hot Topics
The comment counts came through as `undefined` and every PR shows 0 👍, so I can't rank by discussion. Below are the themes in the 20 PRs shown. They are not ranked by engagement.

- **Agent memory, tooling and gateways:**
  - [#18870](https://github.com/punkpeye/awesome-mcp-servers/pull/18870) Hivemind, shared memory for agent teams.
  - [#18908](https://github.com/punkpeye/awesome-mcp-servers/pull/18908) Kitden, a local MCP gateway for Claude Code, Codex and Cursor.
  - [#18906](https://github.com/punkpeye/awesome-mcp-servers/pull/18906) tokenmark-mcp, measured local LLM speeds.
  - [#16613](https://github.com/punkpeye/awesome-mcp-servers/pull/16613) opendrs, PR blast radius and risk score.
- **Security and governance:**
  - [#18861](https://github.com/punkpeye/awesome-mcp-servers/pull/18861) FairMind, AI governance.
  - [#18909](https://github.com/punkpeye/awesome-mcp-servers/pull/18909) phm-lite-check, validation of LLM outputs and tool-call arguments.
- **Pay-per-call and hosted services:**
  - [#16834](https://github.com/punkpeye/awesome-mcp-servers/pull/16834) Xynaptic, x402 pay-per-call tools.
  - [#18875](https://github.com/punkpeye/awesome-mcp-servers/pull/18875) Oracle by SaltCrate, hosted web intelligence.
- **Bulk vertical submissions:** The author `cms-be` filed four near-identical PRs: [#18913](https://github.com/punkpeye/awesome-mcp-servers/pull/18913), [#18912](https://github.com/punkpeye/awesome-mcp-servers/pull/18912), [#18911](https://github.com/punkpeye/awesome-mcp-servers/pull/18911) and [#18910](https://github.com/punkpeye/awesome-mcp-servers/pull/18910). They cover fashion, dyscalculia, dyslexia and face analysis.
- **Niche and local servers:**
  - [#18914](https://github.com/punkpeye/awesome-mcp-servers/pull/18914) kotlogramme-cli, a Telegram client.
  - [#18901](https://github.com/punkpeye/awesome-mcp-servers/pull/18901) pico-bay, for Raspberry Pi Pico and ESP32.
  - [#18903](https://github.com/punkpeye/awesome-mcp-servers/pull/18903) FatalGuard, WordPress error logs.

Underlying need: maintainers of MCP servers want visibility and a place in the canonical directory. Many also point to the official MCP Registry or Glama, which suggests those channels work alongside this list.

## 5. Bugs & Stability
No issues were reported, and none of the 20 PRs shown fixes a bug. The only stability signal is process-related: several PRs, such as [#18914](https://github.com/punkpeye/awesome-mcp-servers/pull/18914), [#18909](https://github.com/punkpeye/awesome-mcp-servers/pull/18909) and [#18908](https://github.com/punkpeye/awesome-mcp-servers/pull/18908), carry `missing-glama`. That means they would fail the listing requirements until a Glama entry is added.

## 6. Feature Requests & Roadmap Signals
There are no feature requests, since there are no issues. The submissions point to growing categories:
- agent memory and knowledge
- security and governance for agents
- pay-per-call (x402) services
- multi-tool gateways and aggregators
- education and accessibility
- embedded systems

Expect more entries in these sections. The README is edited daily, so the next "release" is just the continuously updated list. [#16834](https://github.com/punkpeye/awesome-mcp-servers/pull/16834) notes that its branch drifted after 3 weeks of daily README changes.

## 7. User Feedback Summary
There is no direct user feedback. Submitters' PR descriptions show the following:
- **Pain point:** Long-lived PRs conflict with the rapidly changing README and have to be resubmitted ([#16834](https://github.com/punkpeye/awesome-mcp-servers/pull/16834)).
- **Use cases:** Local, stdio-based, read-only or permissioned servers are common, for example [#18914](https://github.com/punkpeye/awesome-mcp-servers/pull/18914) and [#18903](https://github.com/punkpeye/awesome-mcp-servers/pull/18903). Many entries stress self-hosting or "no network".
- **Process friction:** Submissions must satisfy Glama and naming checks. Several authors have not yet met the Glama requirement.

## 8. Backlog Watch
- [#13365](https://github.com/punkpeye/awesome-mcp-servers/pull/13365): Pronounce MCP metadata refresh. It was opened 2026-09-01 and is labeled `duplicate`, `missing-glama` and `manual-review`. It has been waiting about 10 weeks and needs a maintainer decision.
- [#16834](https://github.com/punkpeye/awesome-mcp-servers/pull/16834): Xynaptic. It was opened 2026-10-18, about 3 weeks ago, and is still open after being resubmitted.
- [#16613](https://github.com/punkpeye/awesome-mcp-servers/pull/16613): opendrs. It was opened 2026-10-16 and meets all the automated checks (`has-glama`, `valid-name`, `has-emoji`), so it is a candidate for a quick merge.

Overall health: contributor interest is strong and automated labeling is working. Review capacity is the constraint. A few PRs that pass every check have waited 3 weeks or more, so batch merging could help.

**Data caveat:** The comment and reaction fields were empty, and only 20 of 123 PRs were shown. The hot-topics and ranking views are therefore thematic, not statistical.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-08

## 1. Today's Overview
Activity is high. 50 PRs were updated in 24 hours (48 open, 2 closed) and there were no releases. Nearly all of it is new-server submissions. Many were opened today, and some come in batches from one author. Only 2 issues were updated, both open, and neither has comments. The data shows no maintainer reviews or merges today. Submissions are arriving faster than they are being processed.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. Two were closed, and neither looks like a feature advance:
- [#6199](https://github.com/docker/mcp-registry/pull/6199) closed: Evergreen MCP server (dependency deprecation and end-of-life checks). The data doesn't say why it was closed.
- [#4799](https://github.com/docker/mcp-registry/pull/4799) closed: "Add remote server entry", marked "Withdrawn" by the author. It was opened 2026-08-27.

## 4. Community Hot Topics
The data gives no usable comment counts. PR comment counts show as "undefined" and both issues have 0 comments. Interest can only be judged by topic and pattern.

- **Remote servers dominate.** Most of today's PRs add hosted Streamable HTTP servers instead of containers. Examples are [#6794](https://github.com/docker/mcp-registry/pull/6794) (GeoTok Trips, no auth), [#6793](https://github.com/docker/mcp-registry/pull/6793) (GetSales, Bearer API key from a config secret, modeled on `servers/close`), [#6796](https://github.com/docker/mcp-registry/pull/6796) (moltline-codereview), [#6787](https://github.com/docker/mcp-registry/pull/6787) (reright) and [#6054](https://github.com/docker/mcp-registry/pull/6054) (GetMattered).
- **Official vendor servers.** [#6778](https://github.com/docker/mcp-registry/pull/6778) adds Todoist's hosted server with OAuth. It is kept separate from the community container in #862.
- **Batch submissions.** One author (PiViEngel) filed at least 7 near-identical PRs for Polish building-materials catalogs, [#6784](https://github.com/docker/mcp-registry/pull/6784) through [#6792](https://github.com/docker/mcp-registry/pull/6792). They cover the IZOProfil.* domains, Sandwich Panel and Budowlanka. All are remote and read-only, with 3 tools each.
- **Local and developer-tool servers.** Examples are [#6795](https://github.com/docker/mcp-registry/pull/6795) (Garmin Connect, stdio), [#6779](https://github.com/docker/mcp-registry/pull/6779) (Progressor, persistent agent plans) and [#6777](https://github.com/docker/mcp-registry/pull/6777) (Billigast, Swedish price comparison).

## 5. Bugs & Stability
No crashes or regressions were reported. One metadata-quality issue:
- [#6753](https://github.com/docker/mcp-registry/issues/6753): the `servers/microsoft-learn/tools.json` descriptions (56–75 characters) differ from what the live server returns in `tools/list`. The catalog entry is stale. Severity is low, and no fix PR is linked.

## 6. Feature Requests & Roadmap Signals
- [#6772](https://github.com/docker/mcp-registry/issues/6772): the author asks whether the catalog accepts a remote streamable-http server that uses a static `Authorization: Bearer` key, with no OAuth. Replyz is the example. The contribution guide doesn't appear to answer this.
- PR [#6793](https://github.com/docker/mcp-registry/pull/6793) already uses that pattern, citing `servers/close` as precedent. So it is probably supported, but it needs documenting.
- Likely next steps are clearer contributor docs on remote and auth patterns, and a way to keep `tools.json` in sync with live servers (#6753). Both are my inference, not maintainer statements.

## 7. User Feedback Summary
- Contributors want to list hosted servers without maintaining a container. They are unsure about the auth requirements.
- Catalog entries can drift from the live servers. The Microsoft Learn descriptions are one example.
- Demand is wide: shopping, fitness, travel, sales outreach, code review, productivity and developer tooling.
- There are no satisfaction signals, positive or negative, in today's data.

## 8. Backlog Watch
- [#5461](https://github.com/docker/mcp-registry/pull/5461) TokenMark MCP server: open since 2026-10-05, over a month. It was updated today, but the data doesn't show whether a maintainer replied.
- [#6054](https://github.com/docker/mcp-registry/pull/6054) GetMattered: open since 2026-10-24, updated today.
- [#6772](https://github.com/docker/mcp-registry/issues/6772) and [#6753](https://github.com/docker/mcp-registry/issues/6753): no comments, so they have had no maintainer response.
- Today's batch of 7 or more similar PRs from one author could use a single review decision. That would avoid duplicated effort and queue growth.
- With 48 open PRs and no merges today, the maintainers may need triage or automation.

The data lacks comment counts, labels and review state. Some of these observations could change with fuller data.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) Digest, 2026-11-08

## 1. Today's Overview
Activity was low to moderate: 3 issues and 4 PRs were updated in the last 24h, and there were no new releases. Two PRs were routine automated SHA bumps from github-actions[bot], so the plugin pipeline looks healthy. The one active human discussion is the Verified-organization gating of plugins (#7024), which has 8 comments. One of the three updated issues (#7040) looks like spam or misposted content.

## 2. Releases
No new releases.

## 3. Project Progress
Two PRs were closed or merged today. Neither shipped a feature or fix.
- [PR #731](https://github.com/anthropics/claude-plugins-official/pull/731), *add(plugin): mcp-server-dev*. This PR from tobinsouth added three skills for building MCP servers. They cover choosing a deployment model (remote HTTP, MCPB, or local stdio) and tool-design patterns. It was opened 2026-03-18 and closed 2026-11-07, about 8 months later. The data doesn't say whether it was merged or rejected.
- [PR #7039](https://github.com/anthropics/claude-plugins-official/pull/7039), *Add amnitex*. A third-party submission for a local byte-page memory layer and conversation LUT. It was closed the day it was opened, with no stated reason. This may be tied to the Verified gating in #7024, since the plugin is local and compiled to native code.

Two PRs are still open and both are automated SHA bumps. Each was validated with `claude plugin validate` before the PR was opened.
- [PR #7041](https://github.com/anthropics/claude-plugins-official/pull/7041): `mintlify` c1c1700d → a4f4310a.
- [PR #7036](https://github.com/anthropics/claude-plugins-official/pull/7036): `dominodatalab` 7949e3ac → 6e5879f8.

## 4. Community Hot Topics
- **[Issue #7024](https://github.com/anthropics/claude-plugins-official/issues/7024): how can an organization become Verified?** This is the most active item, with 8 comments and 2 👍. Since about 2026-11-05 the directory has rejected command hooks and local MCP servers from non-Verified organizations. The reporter says the docs and pre-submission checklist don't explain how to get Verified. The underlying need is a documented, transparent verification path. Plugin authors with hooks or local servers are currently blocked.

No other item has more than 0 comments or reactions.

## 5. Bugs & Stability
1. **[Issue #7042](https://github.com/anthropics/claude-plugins-official/issues/7042): the Discord plugin drops embed-only messages.** The plugin reads only `message.content`. Webhook alerts from Coolify, Sonarr, Radarr, GitHub, Grafana, Uptime Kuma and similar tools arrive empty in both `fetch_messages` and inbound notifications. This is a functional bug that affects monitoring and alerting workflows. It is medium severity. No fix PR exists yet, and the issue was filed today.
2. **[Issue #7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** can also be read as a process regression. The new gating rule blocks submissions without clear guidance.

## 6. Feature Requests & Roadmap Signals
- **A Verified-organization process** (#7024). Maintainers will probably need to publish criteria or an application path soon, because the policy is already enforced. A docs update is the most likely near-term result.
- **Embed support in the Discord plugin** (#7042). The fix is small and well scoped: read embed title, description and fields. It is a good candidate for a quick community or maintainer PR.

## 7. User Feedback Summary
- Plugin authors want clear, documented trust and verification requirements before they submit. Strict enforcement without guidance causes friction.
- Discord plugin users use it as an inbound channel for automation and monitoring. They expect webhook embeds to be readable by the agent.
- Submissions of local, native or memory-style plugins such as amnitex are growing, and they run into the new policy limits.

## 8. Backlog Watch
- The data has no long-unanswered items beyond the ones above. [Issue #7024](https://github.com/anthropics/claude-plugins-official/issues/7024) needs an authoritative maintainer answer on Verified criteria, since several developers are blocked.
- [Issue #7040](https://github.com/anthropics/claude-plugins-official/issues/7040) ("Scrappy") has no real content. It was cross-posted from an unrelated repo (scrapy/parsel) and should be triaged and closed.
- The two open bot PRs (#7041, #7036) are low-risk. Merging them promptly would keep plugin SHAs current.

**Project health:** Healthy automation, a thin human issue flow, and one policy-communication gap to close.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-11-08

## 1. Today's Overview
The project had a steady day of submission activity. 16 issues were updated in the last 24 hours (14 open, 2 closed), and there were no PRs and no releases. Almost every item is a `[Resource]` submission that has passed automated validation, which suggests the intake pipeline is working. The queue is growing faster than it is being resolved: no PRs were merged or closed today, so submissions are accumulating in a review state. Activity is mostly new submissions (13 created on 11-07 or 11-08) rather than discussion, since nearly every issue has 0–3 comments.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were updated, merged, or closed today.
- Two issues were closed:
  - [#3532 Ophio](https://github.com/hesreallyhim/awesome-claude-code/issues/3532) was closed with the `auto-closed` label. It had `validation-passed`, and the data doesn't show why it was auto-closed. Possible reasons are an automated acceptance or rejection step, or a duplicate. This is worth confirming.
  - [#3526 ru-marketplace-mcp](https://github.com/hesreallyhim/awesome-claude-code/issues/3526) was closed on 11-08. It appears to be a duplicate of [#2212](https://github.com/hesreallyhim/awesome-claude-code/issues/2212), which has the same name, author, and link and is still open.

## 4. Community Hot Topics
Engagement is low across the board, and the highest comment count is 3.
- [#2212 ru-marketplace-mcp](https://github.com/hesreallyhim/awesome-claude-code/issues/2212) (3 comments) has the most discussion. It proposes read-only MCP servers and 15 Agent Skills for 12 Russian marketplaces (Skills category). It was created in July and is still active, and the duplicate #3526 was filed in November. The author may have been unsure of the original's status.
- [#1097 Claude Code Safety Net](https://github.com/hesreallyhim/awesome-claude-code/issues/1097) (2 comments) is a Hooks submission from March that was touched again on 11-07. It points to ongoing interest in safety guardrails for destructive commands.
- [#3532 Ophio](https://github.com/hesreallyhim/awesome-claude-code/issues/3532) (2 comments) is an Android app for remote approvals and notifications.

New submissions show the categories where users are building:
- **Mods:** [#3544 Cache Weather, Pause and Resume](https://github.com/hesreallyhim/awesome-claude-code/issues/3544) and [#3542 Arcade](https://github.com/hesreallyhim/awesome-claude-code/issues/3542).
- **Testing:** [#3540 Momentic](https://github.com/hesreallyhim/awesome-claude-code/issues/3540) and [#3536 assay](https://github.com/hesreallyhim/awesome-claude-code/issues/3536).
- **Security and governance:** [#3535 Actera](https://github.com/hesreallyhim/awesome-claude-code/issues/3535) for tool-call policy checks.
- **Memory and configuration:** [#3534 Unl](https://github.com/hesreallyhim/awesome-claude-code/issues/3534) and [#3537 Stockroom](https://github.com/hesreallyhim/awesome-claude-code/issues/3537).
- **Orchestration and multi-purpose:** [#3538 Agent Runbooks](https://github.com/hesreallyhim/awesome-claude-code/issues/3538) and [#3533 Refract](https://github.com/hesreallyhim/awesome-claude-code/issues/3533).
- **Infrastructure and writing:** [#3541 k8s-skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3541) and [#3539 Open Stanley](https://github.com/hesreallyhim/awesome-claude-code/issues/3539).

Underlying needs: safety and policy enforcement, persistent context, verification of agent output (testing), and a better UI around Claude Code (mods, remote control).

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. One process problem showed up: the duplicate submission #3526/#2212. Another is that #3543 does not use the resource template (see section 6), which suggests the submission flow is not always followed.

## 6. Feature Requests & Roadmap Signals
This is a curated list, so there is no product roadmap. The signals are about what to curate.
- [#3543 Add Rowih](https://github.com/hesreallyhim/awesome-claude-code/issues/3543) is a free-form request to add an MCP server for agent-to-agent communication. It has no labels and no `validation-passed` status, and it did not use the structured form. It will probably need a nudge to resubmit through the template.
- Categories with submissions today (Mods, Testing, Security, Memory & Context Persistence, Agent Orchestration, Infrastructure & DevOps) are the ones most likely to grow in the next list update.
- "Remote Control, Notifications & Voice I/O" is a category in use (Ophio), which suggests the taxonomy is still expanding.

## 7. User Feedback Summary
There are no direct complaints in this data. The submissions point to the following:
- **Safety first:** users want guardrails such as read-only `kubectl` in k8s-skills, read-only MCP in ru-marketplace-mcp, and policy checks in Actera and Safety Net.
- **Verification:** tools like assay (a Stop hook that opens the page in Chrome after changes) and Momentic target trust in agent output.
- **Context continuity:** Unl and Stockroom address lost decisions and unmanaged skill and plugin sprawl.
- **Customization:** mods add UI bands and panes, which shows demand for richer interfaces.

## 8. Backlog Watch
- [#2212 ru-marketplace-mcp](https://github.com/hesreallyhim/awesome-claude-code/issues/2212) has been open since 2026-07-12, about four months, despite passing validation. Its duplicate was closed, so maintainers should settle on one canonical issue and decide on it.
- [#1097 Claude Code Safety Net](https://github.com/hesreallyhim/awesome-claude-code/issues/1097) has been open since 2026-03-24, about 7.5 months, despite passing validation. It is a high-value Hooks resource that needs a maintainer decision.
- 12 validated submissions from 11-07 and 11-08 are waiting for review. With no PR throughput, the backlog will grow unless batch review or more automation is added.
- [#3543 Rowih](https://github.com/hesreallyhim/awesome-claude-code/issues/3543) needs triage or a request to resubmit.

**Project health:** Community interest is high (13 new submissions in about two days) and validation automation works. Maintainer throughput is the bottleneck, with no PR merges and long-standing validated items still open.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-08

## 1. Today's Overview
Activity is light and limited to PRs. There were 0 issues and 0 releases in the last 24 hours. Six PRs were updated, and all six are open. None were merged or closed, so nothing shipped today. Every PR is a "submit a skill" request. That points to steady inbound interest and a maintainer-review bottleneck. Four of the six PRs were created on 2026-11-07 or 2026-11-08, and one dates from 2026-11-02.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features advanced and nothing was fixed. The open submissions below are waiting for review.

## 4. Community Hot Topics
No PR or issue has comments or reactions. Every PR shows 👍 0, and the comment count was not reported (`undefined`). The list below groups the submissions by category, which shows what contributors want listed.

- **Development and Testing**
  - [#1375 momentic-ai/skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1375): skills for writing, running and repairing end-to-end tests on web and iOS/Android, plus bug bashes that file each bug with a regression test.
  - [#1374 awss1i/checking-a-page](https://github.com/VoltAgent/awesome-agent-skills/pull/1374): has a coding agent run `assay` on each page it wrote or changed. `assay` opens the page in Chromium, uses every control, and reports contradictions such as console errors.
- **Productivity and Collaboration**
  - [#1376 Frihet-io/frihet-mcp](https://github.com/VoltAgent/awesome-agent-skills/pull/1376): an MCP-linked skill with a full `SKILL.md` and 8 specialized documents.
- **Marketing**
  - [#1334 akii-technologies-ltd/schema-markup](https://github.com/VoltAgent/awesome-agent-skills/pull/1334): generates and validates JSON-LD schema markup for web pages.
- **Regional and legal or compliance**
  - [#1372 mhfed/vn-law-check](https://github.com/VoltAgent/awesome-agent-skills/pull/1372): audits websites and mobile apps against Vietnam's 2025-2026 digital laws, including the Personal Data Protection Law 91/2025 and the AI Law 134/2025.
  - [#1373 krumof/bg-tech-shopping](https://github.com/VoltAgent/awesome-agent-skills/pull/1373): compares Bulgarian tech prices with cross-border DE/UK options.

Underlying needs:
- **Agent-driven QA:** two PRs (#1375, #1374) target browser and app testing, so agents are being used to check their own output.
- **Regional and vertical skills:** the Vietnamese legal and Bulgarian shopping skills show demand beyond the English-language developer audience.
- **Vendor-published skills:** several submitters are companies listing their own products (Momentic, Frihet, Akii).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today.

Quality concerns for review:
- **#1373** has a truncated title, and its summary reads only "…s-border DE/UK options". Its description is missing or incomplete.
- **#1373** also doesn't follow the usual `Add skill: owner/repo` title format.

## 6. Feature Requests & Roadmap Signals
No issues were filed, so there are no explicit feature requests. The signals come from the submissions:
- **Testing and QA** is the busiest category today. It is the most likely to grow next.
- **Compliance and legal** skills, tied to regional regulation, are a new theme.
- **Categories:** if regional skills keep arriving, a "Regional/Local" or "Legal & Compliance" section may become useful. This is an inference, not something the maintainers have said.

## 7. User Feedback Summary
No comments or reactions were recorded, so there is no direct feedback. From the submission text:
- Contributors want their skills verifiably accessible. For example, #1376 notes its skill URL "returns 200".
- Contributors expect to be placed in specific categories, such as Development and Testing, Marketing and Productivity.
- Nobody has responded to any of the PRs yet. Contributors get no acknowledgment, which is a risk for the process.

## 8. Backlog Watch
- **[#1334 akii-technologies-ltd/schema-markup](https://github.com/VoltAgent/awesome-agent-skills/pull/1334):** open since 2026-11-02, six days with no merge or closure. It is the oldest item in today's data. It was updated on 2026-11-08, which suggests the author is following up or has pushed changes. It needs a maintainer decision.
- **#1372 to #1376:** all were opened in the last two days. If review stays slow, they will join the backlog.
- **#1373** needs the author to fix the title and description before it can be reviewed.

The data covers only the last 24 hours, so the wider backlog size is unknown. With 6 open PRs updated, 0 merged and 0 closed, the review rate today was zero.

**Project health:** inbound interest is healthy, with six new or updated submissions. Maintainer throughput is the weak point, since no PR was merged or closed and none has a comment.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# MCP Ecosystem Digest 2026-10-04

> Issues: 12 | PRs: 23 | Projects covered: 7 | Generated: 2026-10-04 13:00 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-10-04

## 1. Today's Overview
Activity is high but concentrated: 12 issues and 23 PRs were updated in 24 hours, and most of it comes from one maintainer (@cliffhall) working through the "agentic software factory" tracker ([#4858](https://github.com/modelcontextprotocol/servers/issues/4858)). Eight issues and six PRs closed or merged. These were mostly documentation and contribution-policy cleanups tied to the v2.0.0 merge to `main`. A batch of nine test and coverage PRs was opened for review, aimed at a per-file 90% coverage gate. There were no new releases. The first semver release is being prepared ([#4968](https://github.com/modelcontextprotocol/servers/issues/4968)). Outside contributions are not being merged, because the repo has moved to an "issues, not PRs" policy.

## 2. Releases
No new releases. The groundwork is in place: [#4472](https://github.com/modelcontextprotocol/servers/issues/4472) (changesets semver for TypeScript, CalVer for Python, GitHub-Release-triggered publishing) closed. The Changesets bot PR [#4941](https://github.com/modelcontextprotocol/servers/pull/4941) ("version packages") is open. Per [#4968](https://github.com/modelcontextprotocol/servers/issues/4968), the TypeScript servers will move to `1.0.0` and the date-stamped npm versions will be deprecated afterward.

## 3. Project Progress
Closed or merged today (all on `v2/main` unless noted):
- [#4939](https://github.com/modelcontextprotocol/servers/pull/4939): the contribution policy (CONTRIBUTING.md, PR template, issue forms) was brought to `main` ahead of v2.0.0. This was a deliberate one-time exception to the milestone-merge rule, and it closes [#4938](https://github.com/modelcontextprotocol/servers/issues/4938).
- [#4959](https://github.com/modelcontextprotocol/servers/pull/4959) removed the transitional "open a blank issue" text from CONTRIBUTING.md (closes [#4940](https://github.com/modelcontextprotocol/servers/issues/4940)).
- [#4961](https://github.com/modelcontextprotocol/servers/pull/4961) cut the PR template to the "issues, not PRs" banner (closes [#4960](https://github.com/modelcontextprotocol/servers/issues/4960)).
- [#4963](https://github.com/modelcontextprotocol/servers/pull/4963) dropped the transitional wording in `docs/contribution-model.md` (closes [#4962](https://github.com/modelcontextprotocol/servers/issues/4962)).
- [#4965](https://github.com/modelcontextprotocol/servers/pull/4965) changed the bug-form version placeholder to show both semver and CalVer (closes [#4964](https://github.com/modelcontextprotocol/servers/issues/4964)).
- [#4967](https://github.com/modelcontextprotocol/servers/pull/4967) records that outside PR creation is now turned off in repo settings (closes [#4966](https://github.com/modelcontextprotocol/servers/issues/4966)).
- [#4873](https://github.com/modelcontextprotocol/servers/issues/4873) (v2/main → main milestone release flow and release skill) closed as complete.

Open work in flight:
- Per-server characterization tests with per-file 90% coverage gates: [#4978](https://github.com/modelcontextprotocol/servers/pull/4978) (everything), [#4977](https://github.com/modelcontextprotocol/servers/pull/4977) (filesystem), [#4973](https://github.com/modelcontextprotocol/servers/pull/4973) (memory), [#4970](https://github.com/modelcontextprotocol/servers/pull/4970) (sequentialthinking), [#4971](https://github.com/modelcontextprotocol/servers/pull/4971) (fetch), [#4974](https://github.com/modelcontextprotocol/servers/pull/4974) (git, at 100% lines and branches), [#4972](https://github.com/modelcontextprotocol/servers/pull/4972) (time).
- Wiring PRs: [#4969](https://github.com/modelcontextprotocol/servers/pull/4969) (TypeScript gate) and [#4976](https://github.com/modelcontextprotocol/servers/pull/4976) (Python gate). Both are explicitly sequenced to merge after the per-server PRs, and the Python coverage CI legs are expected to stay red until then.
- [#4975](https://github.com/modelcontextprotocol/servers/pull/4975) adopts the MCP interface-diff CI workflow for `everything`. It is adapted from [#3260](https://github.com/modelcontextprotocol/servers/pull/3260), and the original author's commits are kept.

## 4. Community Hot Topics
Comment counts are low everywhere (0–2), so no thread stands out by volume. The most notable items:
- [#4958](https://github.com/modelcontextprotocol/servers/issues/4958): an external security scanner (LIFE FORGE) reports findings on authorization surfaces and parameter bounds in the reference servers. It is the only substantive outside-community issue today, and it has 1 comment. It reflects growing scrutiny of tool-definition security.
- [#4858](https://github.com/modelcontextprotocol/servers/issues/4858): the factory tracker. It shows the maintainers' direction toward agent-driven, heavily tested development.
- [#4919](https://github.com/modelcontextprotocol/servers/issues/4919): a DCO signoff CI check is missing. The earlier `pr-flow` skill merged without it, and no DCO check ran on #4904, #4905 or #4906.

## 5. Bugs & Stability
No crash or regression reports today. Open bug-fix PRs from outside contributors:
1. [#4957](https://github.com/modelcontextprotocol/servers/pull/4957) (memory): saving replaces a symlinked `MEMORY_FILE_PATH` with a regular file, which silently orphans the real file. This is the most serious, since it can cause silent data divergence.
2. [#4822](https://github.com/modelcontextprotocol/servers/pull/4822) (git): `git_show` prints the literal `None` instead of `/dev/null` for added or deleted files.
3. [#4879](https://github.com/modelcontextprotocol/servers/pull/4879) (git): non-ASCII paths appear as octal escapes in `git_status` and `git_diff*`.
4. [#4958](https://github.com/modelcontextprotocol/servers/issues/4958): possible hardening gaps (unbounded parameters and authorization surfaces). The details have not been confirmed.

## 6. Feature Requests & Roadmap Signals
- [#4105](https://github.com/modelcontextprotocol/servers/pull/4105) (filesystem): ignore dot-prefixed hidden directories by default (fixes [#2219](https://github.com/modelcontextprotocol/servers/issues/2219)). It has been open since May. It would change default behavior and reduce token use, so it needs a maintainer decision.
- [#4833](https://github.com/modelcontextprotocol/servers/pull/4833) (fetch): a documentation note on runtime npm downloads and egress requirements for restricted environments.
- The roadmap is mostly internal: the first semver release ([#4968](https://github.com/modelcontextprotocol/servers/issues/4968)), the DCO check ([#4919](https://github.com/modelcontextprotocol/servers/issues/4919)), the coverage gates and the interface diff. The v2.0.0 merge to `main` is the likely next milestone.

## 7. User Feedback Summary
There is little direct user feedback today. The signals that do appear are:
- Enterprise and restricted-network users need documented egress requirements for `fetch` ([#4833](https://github.com/modelcontextprotocol/servers/pull/4833)).
- Users with synced or symlinked storage hit data-loss behavior in `memory`.
- Users with non-ASCII filenames get unreadable git output.
- Security-minded adopters want tool definitions that are bounded and clearly authorized ([#4958](https://github.com/modelcontextprotocol/servers/issues/4958)).

## 8. Backlog Watch
- [#4105](https://github.com/modelcontextprotocol/servers/pull/4105): open about five months, with a default-behavior change awaiting review.
- [#4822](https://github.com/modelcontextprotocol/servers/pull/4822) (since 2026-09-18) and [#4833](https://github.com/modelcontextprotocol/servers/pull/4833) (since 2026-09-20): outside PRs with small fixes. Under the new policy to turn off PR creation, they may be closed or re-created by maintainers, so contributors should expect that process.
- [#4879](https://github.com/modelcontextprotocol/servers/pull/4879), [#4957](https://github.com/modelcontextprotocol/servers/pull/4957) and [#4956](https://github.com/modelcontextprotocol/servers/pull/4956) face the same uncertainty.
- [#4958](https://github.com/modelcontextprotocol/servers/issues/4958): the security report should get a maintainer triage response.
- [#4919](https://github.com/modelcontextprotocol/servers/issues/4919): the DCO check has no comments and is a known gap.
- [#4941](https://github.com/modelcontextprotocol/servers/pull/4941): the version-packages PR has been open since 2026-10-01. It is gated on the first-release flow.

**Project health:** Maintainer throughput is strong and the release and quality process is maturing. External contribution flow is narrowing, though, and several community fixes are waiting without a clear path to merge.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-10-04

## 1. Ecosystem Overview

The seven projects here are not peer agent frameworks. They make up the **MCP distribution and tooling layer**: a reference implementation (MCP Servers), a canonical registry (MCP Registry), three curated or catalog indexes (Awesome MCP Servers, Docker MCP Registry, Awesome Agent Skills), a first-party plugin marketplace (Claude Plugins) and a community list (Awesome Claude Code). Inbound submission volume is very high. The review and merge side is the common bottleneck: Awesome MCP Servers has 92 open PRs against 7 closed, and Docker MCP Registry merged none. Themes recur across projects: security and integrity, remote/hosted servers, multi-agent orchestration, and cross-agent portability. The canonical repos are tightening process, with coverage gates, semver and an "issues, not PRs" policy. The catalogs are being flooded with vendor submissions.

## 2. Activity Comparison

Health scores are my own judgment from the digests. They are not provided metrics.

| Project | Issues updated | PRs updated | Release status | Health (1–5) | Note |
|---|---|---|---|---|---|
| MCP Servers | 12 (8 closed) | 23 (6 merged) | None; first semver release in prep (#4968) | 4 | Strong maintainer throughput; outside PRs not being merged |
| MCP Registry | 1 | 3 | None | 3.5 | Low volume; older PR #1555 open about 45 days |
| Awesome MCP Servers | 0 | 99 (92 open, 7 closed) | None (n/a) | 3 | High intake, weak throughput |
| Docker MCP Registry | 0 | 50 (all open) | None | 2.5 | 0 merges; pin PRs open since 2025-11 |
| Claude Plugins (official) | 2 | 2 (1 closed) | None | 3 | Fail-open hookify bug (#6306) untriaged |
| Awesome Claude Code | 15 (5 closed) | 0 | None (n/a) | 3.5 | Issue-form submissions with automated validation; slow curation |
| Awesome Agent Skills | 0 | 2 (1 open, 1 closed) | None (n/a) | 3 | Low volume; closure reason unrecorded |

None of the seven shipped a release today.

## 3. MCP Servers's Position

**Advantages**
- It has the highest maintainer throughput of the group. Eight issues closed and six PRs merged in one day, against zero merges at Docker MCP Registry and very few elsewhere.
- It has the most mature engineering process: changesets semver, GitHub-Release-triggered publishing, per-file 90% coverage gates, an interface-diff CI workflow and a DCO check under discussion.
- As the reference implementation, it sets the conventions the other projects index.

**Technical approach differences**
- It is a code repository with CI, tests and releases. The registries and awesome lists are metadata and curation layers, so they have no build or test surface.
- It is moving to an agent-driven workflow, the "agentic software factory" ([#4858](https://github.com/modelcontextprotocol/servers/issues/4858)), and it is closing the door on outside PRs. The catalog repos work the opposite way, since they depend on inbound PRs.

**Community size**
- By submission volume, Awesome MCP Servers (99 PRs) and Docker MCP Registry (50 PRs) have far larger inbound communities.
- MCP Servers has fewer participants and little discussion (0–2 comments per item), and it is mostly maintainer-led. Its influence is structural, not a matter of contributor count.

**Risk:** Outside fixes are stranded, including [#4957](https://github.com/modelcontextprotocol/servers/pull/4957) (a memory symlink issue that can cause data divergence) and [#4879](https://github.com/modelcontextprotocol/servers/pull/4879). The security report [#4958](https://github.com/modelcontextprotocol/servers/issues/4958) is not yet triaged.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Security, integrity and fail-closed behavior | MCP Servers, Awesome MCP Servers, Claude Plugins | #4958 (authorization surfaces, parameter bounds); rugsnare (#15692) and contract-check (#15639); hookify block rules failing open on Windows (#6306) |
| Metadata and data quality gates | MCP Registry, Awesome MCP Servers, Awesome Claude Code, Docker MCP Registry | 422 on incomplete `repository` (#1555); `missing-glama` labels; automated validation of issue submissions; unresolved policy on closed-source remote entries (#5425, #5421) |
| Remote and hosted servers, OAuth | Docker MCP Registry, Awesome MCP Servers | OAuth 2.1 with PKCE and dynamic client registration (#5430); streamable-HTTP entries (#15690); empty `tools.json` for dynamic discovery |
| Multi-agent orchestration and observability | Awesome MCP Servers, Awesome Claude Code, Docker MCP Registry, Claude Plugins | Cotal (#15688), Crewly (#3055), Splitlane (#3065), handoff (#5423); context-lens (#6353) |
| Cross-agent portability | Awesome Agent Skills, Awesome Claude Code | Plain `SKILL.md` skills; Model Citizen shares rules, skills and hooks between Claude Code and Codex (#3060) |
| Release and process automation | MCP Servers, Docker MCP Registry | Changesets, coverage gates and DCO; the Docker bot's pin PRs aren't landing |
| International and Windows robustness | Claude Plugins, Awesome Claude Code | Windows codepage corruption (#6306); ClaudeGuard (#3056) |

## 5. Differentiation Analysis

- **MCP Servers:** Reference code for developers and SDK authors. It is engineering-driven, with a focus on test coverage and release hygiene.
- **MCP Registry:** The canonical machine-readable index, with an API and publish-time validation. Its target users are publishers and clients that resolve servers. Its current work is on the web UI and validators.
- **Awesome MCP Servers:** A human-readable index for discovery that requires a Glama listing. It is manually curated with a PR-based workflow, and its categories are broad (verticals, security, data).
- **Docker MCP Registry:** A catalog of containerized and remote servers, aimed at Docker users. It depends on pinned commits and bot-driven updates, which is why stale pins build up. It is also a distribution channel for hosted SaaS.
- **Claude Plugins (official):** First-party, Anthropic-curated, covering plugins, hooks and prompts. It is tied to the Claude Code runtime, so its quality problems (#6306, #6352) affect users directly.
- **Awesome Claude Code:** Issue-form submissions with bot validation for Claude Code resources. Its categories are stretching to include tools that are not clearly Claude Code resources.
- **Awesome Agent Skills:** Focused on `SKILL.md` collections, vendor-neutral and agent-agnostic, in contrast to the MCP-server focus of its peers.

Overall, MCP Servers and Claude Plugins ship code and take the support burden. The other five publish metadata and have a curation burden.

## 6. Community Momentum & Maturity

- **Rapid iteration, maintainer-driven:** MCP Servers. It is formalizing its release process and it is also the project most changing how it takes contributions.
- **High inbound, constrained review:** Awesome MCP Servers and Docker MCP Registry. Interest is strong, but merge capacity is the limit. Docker has a pin backlog that dates to November 2025.
- **Steady intake, slow curation:** Awesome Claude Code (about 10 months for older submissions) and Awesome Agent Skills (low volume, no recorded merges today).
- **Stabilizing or low-activity:** MCP Registry. It has a small surface, and the main risk is PR latency, with #1555 open about 45 days.
- **Maintenance risk:** Claude Plugins. It has few updates and a nine-month lag on a small PR (#194), plus an untriaged fail-open bug.

The data covers a single day. Rank on this basis with caution, especially where comment counts were missing (the Awesome MCP Servers and Docker MCP Registry digests had them as `undefined`).

## 7. Trend Signals

1. **Trust and integrity are becoming a requirement.** Security scanning, contract pinning and drift detection appear in three projects. A hook that fails open (#6306) shows the cost of weak guarantees. *For developers:* validate inputs, bound parameters and design enforcement to fail closed.
2. **Remote-first servers are the default for vendors.** Eight of nine new Docker submissions were remote, with OAuth 2.1 and PKCE. *For developers:* plan for hosted, authenticated servers, and plan how you will verify closed-source ones.
3. **Registry metadata is being tightened.** Examples are 422 rejection of incomplete metadata, Glama-listing requirements, and automated submission validation. *For publishers:* complete metadata and listings will gate discoverability.
4. **Maintainers are limiting human contributions and using agents.** MCP Servers' "issues, not PRs" policy and agent-driven development are an early signal. Community fixes may need to be filed as issues. Catalogs are taking the opposite path and are overloaded as a result.
5. **Portability is growing.** Plain `SKILL.md` and shared config across Claude Code and Codex reduce lock-in to one agent.
6. **Orchestration and observability tooling is emerging.** Multi-agent supervision, usage and cost dashboards, and context inspection keep appearing across projects.
7. **Review capacity is the scaling constraint.** Automated triage (labels, validation, bot-managed pins) is the practical response. Docker's stale bot PRs show that automation also needs maintenance.

**Caveats:** These are single-day snapshots. Several digests lacked comment counts, merged or closed PR details, or issue data, so the conclusions about community engagement are indicative only.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Project Digest: 2026-10-04

## 1. Today's Overview
Activity is low and focused on the registry's web UI. One issue (#1685) was updated, and three PRs moved. There were no new releases. The one new issue already has a matching fix PR (#1686), which was opened the same day. A long-open validator PR (#1555) was touched on 10-03, and a stale dependabot PR (#1647) was closed. Project health looks stable. The contribution pipeline responds quickly to small UI bugs, but review of older PRs is slower.

## 2. Releases
No new releases.

## 3. Project Progress
- **Closed today:** [#1647](https://github.com/modelcontextprotocol/registry/pull/1647) is a dependabot bump of the `deploy-go-dependencies` group in `/deploy`. It updates `pulumi-kubernetes/sdk/v4` and `pulumi/sdk/v3`. It was closed rather than merged, as far as the data shows. It had been open since 2026-09-16 (about 18 days). The data doesn't say why it was closed, for example whether it was superseded by a newer grouped bump.
- No feature PRs were merged today.

## 4. Community Hot Topics
Engagement is minimal: no item has comments or 👍 reactions.
- [#1685](https://github.com/modelcontextprotocol/registry/issues/1685) is a bug report: the "Recently Updated" section sits above the search bar and pushes it below the fold. Underlying need: search is the primary way people find servers in the registry, so it should be reachable without scrolling.
- [#1686](https://github.com/modelcontextprotocol/registry/pull/1686) is the fix. It moves the search and filter controls above "Recently Updated" and adds a regression test for the ordering.

## 5. Bugs & Stability
| Severity | Item | Status |
|---|---|---|
| Low-Medium (UX) | [#1685](https://github.com/modelcontextprotocol/registry/issues/1685) Search bar pushed below the fold | Fix PR [#1686](https://github.com/modelcontextprotocol/registry/pull/1686) open, awaiting review |
| Medium (API validation) | [#1546](https://github.com/modelcontextprotocol/registry/issues/1546), referenced by PR [#1555](https://github.com/modelcontextprotocol/registry/pull/1555): incomplete `repository` metadata (missing `url` or `source`) is accepted | Fix PR open since 2026-08-20 |

No crashes or regressions were reported today. #1546 is not part of today's issue data. Its description comes from PR #1555, which rejects a present `repository` object with an empty or missing `url` or `source` and returns HTTP 422. A missing `repository` field behaves as before.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. Two signals can be read from the open PRs:
- A UI layout change (#1686) is a small, self-contained fix. It could be merged quickly and shipped in the next deploy.
- Stricter publish-time validation (#1555) continues a trend of tightening registry metadata quality. It adds focused tests, including one for the HTTP 422 response. It is a candidate for a near-term release once reviewed.

## 7. User Feedback Summary
The only user feedback today is the report in #1685. The registry homepage lets a large "Recently Updated" list crowd out search, which hurts discoverability for users who arrive with a specific server in mind. The quick community PR for this suggests contributors are engaged with the UI. On the publisher side, the repository-metadata validation gap (#1546) points to a concern about registry data quality.

## 8. Backlog Watch
- [#1555](https://github.com/modelcontextprotocol/registry/pull/1555) `fix(validators): reject incomplete repository metadata` has been open since 2026-08-20, about 45 days. It has a clear scope and regression tests, and the author updated it on 10-03. It needs maintainer review and a merge decision. Because it changes API behavior (a new 422 on incomplete repository objects), maintainers may want to check the impact on existing publishers.
- [#1686](https://github.com/modelcontextprotocol/registry/pull/1686) is new, but it should get a quick review. It resolves a visible UX problem and includes a test.

**Health assessment:** Activity is low and nothing is blocking. The main risk is review latency on older PRs, especially #1555.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-04

## 1. Today's Overview
Awesome MCP Servers is a curated list, so its activity shows up as submission PRs rather than issues or releases. In the last 24h there were 99 PR updates (92 open, 7 merged/closed), no issue activity and no releases. Most of the visible PRs were opened on 2026-10-03 or 2026-10-04, so submission volume is high. The 7 merged/closed PRs are not listed in the data I was given, so I can't say how many were merged and how many were rejected. Overall: heavy inbound volume, light visible throughput, and a review queue that is growing.

## 2. Releases
No new releases. This is a content repository, so releases are not expected.

## 3. Project Progress
Seven PRs were merged or closed, but none of them appear in the top-20 sample, so I can't name them or say which sections advanced. I won't guess at specifics. The pending submissions do show where the ecosystem is growing:
- **Developer Tools / Frameworks / Coding Agents / Security:**
  - [#15686](https://github.com/punkpeye/awesome-mcp-servers/pull/15686) CARBON Lite test harness
  - [#15639](https://github.com/punkpeye/awesome-mcp-servers/pull/15639) mcp-contract-check, for contract testing and breaking-change detection
  - [#15688](https://github.com/punkpeye/awesome-mcp-servers/pull/15688) Cotal, for multi-agent coordination
  - [#15692](https://github.com/punkpeye/awesome-mcp-servers/pull/15692) rugsnare, a tool-contract pinning and integrity gateway
- **Data / Knowledge:**
  - [#15661](https://github.com/punkpeye/awesome-mcp-servers/pull/15661) Synapse memory server
  - [#15689](https://github.com/punkpeye/awesome-mcp-servers/pull/15689) mcpolyglot, covering Postgres, MySQL, SQLite, MongoDB and REST
  - [#13431](https://github.com/punkpeye/awesome-mcp-servers/pull/13431) DataSinking, for Asian financial reports
- **Verticals:**
  - Marketing: [#15690](https://github.com/punkpeye/awesome-mcp-servers/pull/15690) and [#15691](https://github.com/punkpeye/awesome-mcp-servers/pull/15691)
  - Home automation: [#15635](https://github.com/punkpeye/awesome-mcp-servers/pull/15635)
  - Multimedia: [#15693](https://github.com/punkpeye/awesome-mcp-servers/pull/15693)
  - Art: [#15687](https://github.com/punkpeye/awesome-mcp-servers/pull/15687)
  - Translation: [#15697](https://github.com/punkpeye/awesome-mcp-servers/pull/15697)
  - Productivity: [#15694](https://github.com/punkpeye/awesome-mcp-servers/pull/15694)

## 4. Community Hot Topics
Comment counts came through as `undefined` and every PR shows 0 👍, so I can't rank PRs by discussion. The "top 20 by comment count" selection is therefore effectively arbitrary. What the data does show:
- **Security and integrity:** [#15692](https://github.com/punkpeye/awesome-mcp-servers/pull/15692) (rugsnare) and [#15639](https://github.com/punkpeye/awesome-mcp-servers/pull/15639) (contract checks) point to growing demand for trust, drift detection and testing of MCP servers.
- **Agent coordination and coding agents:** [#15688](https://github.com/punkpeye/awesome-mcp-servers/pull/15688).
- **Marketing and SEO tooling:** [#15690](https://github.com/punkpeye/awesome-mcp-servers/pull/15690) and [#15691](https://github.com/punkpeye/awesome-mcp-servers/pull/15691) were submitted on the same day.
- **Local and self-hosted servers:** installable stdio servers dominate, such as [#15696](https://github.com/punkpeye/awesome-mcp-servers/pull/15696), a Zig binary, and [#15684](https://github.com/punkpeye/awesome-mcp-servers/pull/15684)-style Node and Python packages.

## 5. Bugs & Stability
No issues were reported and there are no regression or crash signals. The quality problems that do show up are in submissions:
- **Missing Glama listing:** the `missing-glama` label is on [#15639](https://github.com/punkpeye/awesome-mcp-servers/pull/15639), [#15697](https://github.com/punkpeye/awesome-mcp-servers/pull/15697), [#15696](https://github.com/punkpeye/awesome-mcp-servers/pull/15696), [#15695](https://github.com/punkpeye/awesome-mcp-servers/pull/15695), [#15694](https://github.com/punkpeye/awesome-mcp-servers/pull/15694), [#15691](https://github.com/punkpeye/awesome-mcp-servers/pull/15691), [#15686](https://github.com/punkpeye/awesome-mcp-servers/pull/15686) and [#13431](https://github.com/punkpeye/awesome-mcp-servers/pull/13431). Several of these are likely to stall until the author adds a listing.
- **Merge conflicts:** [#12284](https://github.com/punkpeye/awesome-mcp-servers/pull/12284) and [#12362](https://github.com/punkpeye/awesome-mcp-servers/pull/12362), both from ni-c, have been open about 7 weeks and need a rebase.
- **Low-quality entry:** [#15695](https://github.com/punkpeye/awesome-mcp-servers/pull/15695) ("Add contribos project to README") has a one-line description and doesn't state a section. [#15679](https://github.com/punkpeye/awesome-mcp-servers/pull/15679) has an empty body.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. The PRs suggest several categories that could grow or need their own section:
- agent security, integrity and contract testing
- multi-agent coordination
- vertical SaaS connectors (Asana, Home Assistant, social publishing)
- remote or streamable-HTTP servers, such as [#15690](https://github.com/punkpeye/awesome-mcp-servers/pull/15690)

Several entries also use the 🤖🤖🤖 title marker. It appears to be a convention for agent-authored or automated submissions, but the data doesn't confirm that.

## 7. User Feedback Summary
There are no issue comments to draw on, so this section reflects submitter intent only. Contributors stress installability, such as npm, PyPI, `npx` and prebuilt binaries. They also stress MIT licensing, registry presence (Glama and the official MCP Registry) and local, stdio-first operation. Their main pain point appears to be the entry bar of a Glama listing and alphabetical placement, though the data doesn't show anyone saying so directly.

## 8. Backlog Watch
- [#12284](https://github.com/punkpeye/awesome-mcp-servers/pull/12284) (opened 2026-08-16) and [#12362](https://github.com/punkpeye/awesome-mcp-servers/pull/12362) (opened 2026-08-17): merge conflicts, awaiting a rebase or a maintainer decision.
- [#13431](https://github.com/punkpeye/awesome-mcp-servers/pull/13431) (opened 2026-09-02): DataSinking, missing Glama.
- [#13696](https://github.com/punkpeye/awesome-mcp-servers/pull/13696) (opened 2026-09-05): Chirpie. It is valid and listed on Glama, yet it has been open about 4 weeks.

**Health assessment:** Contributor interest is strong and submission quality is mostly consistent, since most PRs have valid names and emoji. Review throughput is the weak point: 92 open PRs against 7 closed, with some valid PRs waiting weeks. Automated label triage (`has-glama`, `merge-conflict`) could help maintainers prioritize.

**Data caveats:** Comment counts were `undefined`, the merged/closed PRs weren't listed, and there was no issue data. Findings in sections 3 to 7 are based only on the 20 PRs shown. I also cited #15684 in section 4 in error. It isn't in the provided data, so ignore that reference.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-04

## 1. Today's Overview
Activity today was submission-driven. 50 PRs were updated, all of them open. None were merged or closed. There were no issue updates and no new releases. About 10 of the top-20 PRs are new third-party server submissions created today (#5421–#5430). The rest are old automated pin-update PRs from `mcp-registry-bot[bot]` that were touched again today. Intake is healthy, but merge throughput in this 24h window was zero, so the review queue is growing.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. Progress was limited to new submissions entering the queue (see below) and the bot refreshing old pin PRs.

## 4. Community Hot Topics
The data shows no comment counts (all "undefined") and 0 👍 on every item. I therefore can't rank by discussion. The themes below come from the submissions themselves.

- **Remote (hosted) MCP servers are the dominant pattern.** Eight of the nine new submissions listed are remote:
  - [#5430 PoliteReach](https://github.com/docker/mcp-registry/pull/5430): streamable-http, OAuth 2.1 with PKCE and dynamic client registration.
  - [#5428 EchelonGraph remote](https://github.com/docker/mcp-registry/pull/5428): hosted, keyless.
  - [#5427 MCPBinder](https://github.com/docker/mcp-registry/pull/5427): OAuth, dynamic tool discovery, empty `tools.json`.
  - [#5426 BlockVectra](https://github.com/docker/mcp-registry/pull/5426): 15 tools, optional API key.
  - [#5425 SubmitMyStartup](https://github.com/docker/mcp-registry/pull/5425): no public source repo.
  - [#5424 MusedIn](https://github.com/docker/mcp-registry/pull/5424): read-only, no OAuth, disclosed as the author's own product.
  - [#5423 handoff](https://github.com/docker/mcp-registry/pull/5423): agent-swarm coordination.
  - [#5421 Pizza Developer](https://github.com/docker/mcp-registry/pull/5421): closed-source, work management for agents.
  - [#5412 Adrails](https://github.com/docker/mcp-registry/pull/5412): ad-campaign agents.
- **Local/containerised servers:**
  - [#5429 EchelonGraph CVE & Exposure](https://github.com/docker/mcp-registry/pull/5429): security data.
  - [#5422 Testers.ai CARBON Lite](https://github.com/docker/mcp-registry/pull/5422): MIT, stdio, 10 tools.
  - [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240): UGC video ads, pinned to v0.20.0.
- **Underlying need:** Vendors want distribution through Docker's catalog. Several submissions don't ship source, which suggests the catalog is being used as a discovery channel for hosted SaaS and not only for containerised code.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there were 0 issue updates. The only stability-adjacent signal is the stale automated pin PRs below.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. These signals come from the submission patterns:
- **Remote-server support and OAuth conventions** are heavily used (dynamic client registration, PKCE, `tools.json` left empty for dynamic discovery). Expect continued investment in docs and validation for these flows.
- **Entries without a public source repo** (#5425, #5421) may force a policy decision on whether closed-source remotes are accepted and how they are verified.
- **Agent-economy and ops categories** (job network, work management, swarm coordination) are emerging.

## 7. User Feedback Summary
There are no issues or comments to draw from. Submitter notes show a preference for keyless or optional-key access (#5426, #5428/#5429, #5424). They also show a clear effort to follow `CONTRIBUTING.md`, including the "Adding a Remote MCP Server" section, and to disclose conflicts of interest (#5424). Satisfaction can't be measured from this data.

## 8. Backlog Watch
Several automated pin PRs have been open for months and need maintainer attention. Either merge them or fix the bot, since the bot keeps touching them without them landing:
- [#1083 stripe](https://github.com/docker/mcp-registry/pull/1083): open since 2026-02-07, the oldest in this set.
- [#788 omi](https://github.com/docker/mcp-registry/pull/788): open since 2025-11-26, over 10 months.
- [#2749 aws-msk](https://github.com/docker/mcp-registry/pull/2749): open since 2026-04-18.
- [#4365 line](https://github.com/docker/mcp-registry/pull/4365), [#4366 render](https://github.com/docker/mcp-registry/pull/4366), [#4370 youtube_transcript](https://github.com/docker/mcp-registry/pull/4370): open since 2026-07-09.
- [#4381 mongodb](https://github.com/docker/mcp-registry/pull/4381): open since 2026-07-10.
- [#4510 markitdown](https://github.com/docker/mcp-registry/pull/4510): open since 2026-07-22.
- [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240): a human submission open since 2026-09-25 (9 days) that still needs review.

**Health assessment:** Contributor interest is high, with 9 or more new submissions in one day. Reviewer or merge capacity looks like the bottleneck. 0 merges and a pin-PR backlog dating back to November 2025 are the main risks.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-10-04

## 1. Today's Overview
Activity was low: 2 issues and 2 PRs were updated in 24 hours, with no new releases. The one new item of substance is PR #6353, which proposes a new plugin, `context-lens`. The other items were a Windows encoding bug (#6306) that is still open and a prompt-audit issue (#6352) filed against the official plugins. PR #194 was closed after about nine months. The repo looks like a plugin marketplace with steady intake and a slow maintainer response on existing bugs.

## 2. Releases
No new releases.

## 3. Project Progress
- **Closed:** [PR #194](https://github.com/anthropics/claude-plugins-official/pull/194), "Fix grammatical error in code-simplifier agent". It fixed a missing "of" in "as a result of years" in the agent description. It was opened on 2026-01-10 and closed on 2026-10-03. The data doesn't say whether it was merged or closed unmerged. It is a cosmetic change with no functional impact.
- **Open and new:** [PR #6353](https://github.com/anthropics/claude-plugins-official/pull/6353), "Add context-lens: browse and search the context window, request by request". It was requested by an Anthropic employee through an automated Slack-attributed flow. It addresses a gap in `/context`, which shows how full the context window is and splits it into categories but doesn't let users inspect individual requests. If merged, it would add an observability plugin to the directory.

## 4. Community Hot Topics
- **[Issue #6306](https://github.com/anthropics/claude-plugins-official/issues/6306)**: hookify decodes stdin with the Windows ANSI codepage. It has the most engagement: 3 comments and 1 👍, and it was updated today. Underlying need: reliable behavior for non-English and non-ASCII users on Windows (cp936, cp1252, cp949, cp950). This affects a large international user base.
- **[Issue #6352](https://github.com/anthropics/claude-plugins-official/issues/6352)**: a prompt audit against Claude Fable 5.1 and Opus 5.5. It has no comments or reactions yet. Underlying need: keep bundled prompts current with newer models, for example by avoiding hard-coded model tiers and arbitrary numeric score thresholds.
- [PR #6353](https://github.com/anthropics/claude-plugins-official/pull/6353) has no comment data and no reactions, but it is the day's main feature signal.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6306](https://github.com/anthropics/claude-plugins-official/issues/6306), high.** All four hookify hooks read stdin with a bare `json.load(sys.stdin)`. Claude Code sends UTF-8, but Windows Python decodes with the ANSI codepage. Non-ASCII payloads are silently corrupted, and **block rules fail open**. That means a safety or policy rule can be bypassed without any error. The issue has been open since 2026-09-25, and there is no linked fix PR. The likely fix is to reconfigure stdin to UTF-8, for example with `sys.stdin.reconfigure(encoding="utf-8")` or by reading `sys.stdin.buffer` and decoding explicitly.
2. **[#6352](https://github.com/anthropics/claude-plugins-official/issues/6352), low to medium.** The `code-review` command pins Haiku and Sonnet tiers and uses a 0–100 score with an 80 cutoff. The issue says this degrades silently as models change. It is a quality and maintainability problem, not a crash, and no fix PR exists.

## 6. Feature Requests & Roadmap Signals
- **context-lens (#6353)** is the only feature work in the data. Because it is an internally requested, Anthropic-attributed submission, it has a good chance of being merged soon.
- **Prompt modernization (#6352)** is more of a maintenance request. The `code-review` and `skill-creator` plugins are likely candidates for a prompt refresh. This is a prediction from the audit's findings, not something stated in the data.

## 7. User Feedback Summary
- Windows and non-English users hit silent failures. The worst effect is that enforcement rules don't fire, which erodes trust in hookify as a guardrail.
- Users who audit the plugins want prompts that are model-agnostic and less brittle.
- The context-lens proposal suggests users want finer-grained visibility into context usage than `/context` provides.

## 8. Backlog Watch
- **[#6306](https://github.com/anthropics/claude-plugins-official/issues/6306)** has been open for 9 days with a fail-open security-relevant behavior and no fix PR. It needs maintainer attention.
- **[#194](https://github.com/anthropics/claude-plugins-official/pull/194)** sat for about nine months before being closed. That suggests slow handling of small community PRs. The same lag could affect newer contributions.
- **[#6352](https://github.com/anthropics/claude-plugins-official/issues/6352)** is new, but it should be triaged soon, since it touches the widely used `code-review` plugin.

**Health assessment:** Activity is light and the repo is stable, with no regressions beyond the Windows encoding bug. The main risk is slow triage of community-reported bugs, especially #6306.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-10-04

## 1. Today's Overview
Activity was moderate and entirely submission-driven. 15 issues were updated in the last 24h (10 open, 5 closed). There were no PRs and no releases. Every issue is a resource-submission, mostly passing automated validation. That points to a healthy intake pipeline, but nothing was merged today, so curation may be the bottleneck. Two of the three issues opened today were auto-closed, and a duplicate submission (Caprock) appeared the day before.

## 2. Releases
No new releases.

## 3. Project Progress
There were no PRs updated, merged or closed today. The only closures were issues:
- Auto-closed submissions [#3065](https://github.com/hesreallyhim/awesome-claude-code/issues/3065) (Splitlane) and [#3064](https://github.com/hesreallyhim/awesome-claude-code/issues/3064) (Whole-app QA loop) are tagged `validation-pending, auto-closed`. They did not pass validation.
- [#3057](https://github.com/hesreallyhim/awesome-claude-code/issues/3057) (Caprock) was closed. It duplicates [#3058](https://github.com/hesreallyhim/awesome-claude-code/issues/3058), which is still open.
- Older submissions [#380](https://github.com/hesreallyhim/awesome-claude-code/issues/380) (requirements-expert) and [#381](https://github.com/hesreallyhim/awesome-claude-code/issues/381) (plugin-dev), both from sjnims, were closed on 2026-10-03. They were opened in December 2025 and had passed validation.

## 4. Community Hot Topics
Every issue has 1 comment (the validation bot) and 0 👍, so no item stands out on engagement. The themes in the submissions are:
- **Skills:** [#3063](https://github.com/hesreallyhim/awesome-claude-code/issues/3063) folder-organizer, [#3061](https://github.com/hesreallyhim/awesome-claude-code/issues/3061) Archify (architecture and diagram generation), [#3059](https://github.com/hesreallyhim/awesome-claude-code/issues/3059) Charrette (23 design-before-code skills), and [#2393](https://github.com/hesreallyhim/awesome-claude-code/issues/2393) JobYap.
- **Agent orchestration:** [#3055](https://github.com/hesreallyhim/awesome-claude-code/issues/3055) Crewly (role-based agent teams) and [#3064](https://github.com/hesreallyhim/awesome-claude-code/issues/3064) (a per-feature QA agent loop using worktrees).
- **Observability:** [#3065](https://github.com/hesreallyhim/awesome-claude-code/issues/3065) Splitlane (multi-agent session supervision) and [#3058](https://github.com/hesreallyhim/awesome-claude-code/issues/3058) Caprock (a local usage dashboard).
- **Configuration and infrastructure:** [#3060](https://github.com/hesreallyhim/awesome-claude-code/issues/3060) Model Citizen (rules, skills and hooks shared between Claude Code and Codex), [#3054](https://github.com/hesreallyhim/awesome-claude-code/issues/3054) zsh completion, and [#3062](https://github.com/hesreallyhim/awesome-claude-code/issues/3062) vome-panes (Home Assistant side panes).

The underlying demand is for tools that manage multiple agents, show session and cost data, and structure work before and after coding. Several tools also target more than one CLI agent, which suggests cross-agent portability is a growing concern.

## 5. Bugs & Stability
No bugs or regressions were reported. One tooling issue is worth noting. Two submissions were auto-closed ([#3065](https://github.com/hesreallyhim/awesome-claude-code/issues/3065), [#3064](https://github.com/hesreallyhim/awesome-claude-code/issues/3064)), and the data doesn't show why. A duplicate (#3057/#3058) got through validation before being closed by hand. [#3056](https://github.com/hesreallyhim/awesome-claude-code/issues/3056) ClaudeGuard, a Windows PowerShell diagnostic and fix script, suggests Windows stability problems exist on the user side, but this is an inference from the description.

## 6. Feature Requests & Roadmap Signals
There were no direct feature requests. The signals come from the submissions:
- Categories under pressure: Skills (4 submissions), Agent Orchestration (2) and Observability & Monitoring (2, with sub-categories Session Monitors and Usage & Cost). Maintainers may need to split these further.
- The "Providers, Runtime & Integration Infrastructure" category ([#3062](https://github.com/hesreallyhim/awesome-claude-code/issues/3062)) and "Open Source Software" ([#3056](https://github.com/hesreallyhim/awesome-claude-code/issues/3056)) are being used for tools that are not clearly Claude Code resources. Category guidance may need tightening.

## 7. User Feedback Summary
Submitters report these pain points and use cases:
- Running several coding agents at once and keeping track of them (Splitlane, Crewly).
- Monitoring session activity and cost (Caprock).
- Planning and design discipline before code is written (Charrette, Archify).
- Keeping rules, hooks and skills consistent across Claude Code and Codex (Model Citizen).
- Quality of life on the command line (zsh completion).

There was no direct feedback on the list itself.

## 8. Backlog Watch
- [#2393](https://github.com/hesreallyhim/awesome-claude-code/issues/2393) JobYap was opened on 2026-08-01 and is still open. It lacks the `validation-passed` and `resource-submission` labels that the other open submissions have. It was updated on 2026-10-03, but it has been stuck for about two months and needs a maintainer to look at it.
- The open submissions #3054, #3055, #3056, #3058, #3059, #3060, #3061, #3062 and #3063 have all passed validation and are waiting for maintainer review. Nothing was merged today, so the queue is growing.
- [#380](https://github.com/hesreallyhim/awesome-claude-code/issues/380) and [#381](https://github.com/hesreallyhim/awesome-claude-code/issues/381) took about ten months to close. That gives a sense of how long a submission can wait before a decision.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-04

Repo: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity was low and limited to contributor submissions. There were no issues, no releases, and 2 PRs updated in the last 24h (1 open, 1 closed). Both PRs add a third-party skill collection to the "Community Skills > Development and Testing" section, which shows the repo's role as a curated index. PR numbers have reached #1145 to #1155, so submission volume stays high over the repo's lifetime. No maintainer merge was recorded today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One PR was closed without a recorded merge:
- [#1145](https://github.com/VoltAgent/awesome-agent-skills/pull/1145) **Add skill: pwguler/skills** (closed, by pwguler). It proposed 14 plain `SKILL.md` folders built around a "drill, implement, verify, land" loop: settle the plan before coding, and don't call work done until a command proves it. The data doesn't say why it was closed (rejection, withdrawal, or a duplicate). Treat the outcome as unknown.

## 4. Community Hot Topics
Neither PR has recorded comments or reactions (comment counts are undefined, 👍 is 0), so there are no hot threads. The most notable item is:
- [#1155](https://github.com/VoltAgent/awesome-agent-skills/pull/1155) **Add skill: ollygarden/opentelemetry-agent-skills** (open, by jpkrohling). It adds 18 vendor-neutral OpenTelemetry skills for coding agents, covering SDK setup for Go, Java, JavaScript, Python, .NET, Ruby and other languages.

The underlying needs are:
- **Observability for agent-written code.** Developers want agents to instrument code correctly instead of guessing OTel APIs.
- **Workflow discipline.** #1145 shows interest in verification-first agent loops.
- **Portability.** Both submissions stress plain `SKILL.md` format that works across agents.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported, and there were no issues updated today. No fix PRs are involved.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals from the PRs:
- Demand for **domain-specific skill packs** (observability, engineering process) in the Development and Testing category.
- Large bundles (14 and 18 skills) suggest the list may need better grouping or sub-categories as entries grow. This is inference, not a stated request.
- #1155 is likely to be merged in the next batch of curation if it meets the list's inclusion rules.

## 7. User Feedback Summary
There is no direct user feedback today, because there are no comments or issues. The PR descriptions show contributors want visibility for their skill repos. They emphasize vendor neutrality and compatibility with any agent that loads `SKILL.md`. Satisfaction can't be assessed from this data.

## 8. Backlog Watch
- [#1155](https://github.com/VoltAgent/awesome-agent-skills/pull/1155) was opened 2026-10-03 and has no review activity yet. It needs a maintainer decision.
- The clarity of the #1145 closure should be checked. A short note on the reason would help the contributor and set expectations for future submissions.
- Today's data has no information on older stale issues or PRs. A wider scan of open PRs is needed to assess the real backlog. The submission numbering, with #1155 as the newest, suggests a large review queue could build up.

**Health assessment:** Contributor interest is steady. Maintainer responsiveness can't be measured from today's data alone, since there were no merges, comments, or releases.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
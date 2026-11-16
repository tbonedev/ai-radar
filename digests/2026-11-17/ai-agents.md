# MCP Ecosystem Digest 2026-11-17

> Issues: 2 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-16 16:42 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-17

## 1. Today's Overview
Activity on modelcontextprotocol/servers was very low in the last 24 hours: 2 issues were updated (both open), with no PRs updated and no new releases. Both issues come from the same author (Tanishq67m), they were filed on 2026-11-16, and both are tagged `enhancement` and `v2`. Both concern tool-description quality for small local models. The project looks quiet for the day, and no maintainer responses appear in the data (0 comments on both).

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. Both open issues propose changes that no PR addresses yet.

## 4. Community Hot Topics
Neither issue has comments or reactions (0 comments, 0 👍 each), so there is no measurable community engagement yet. The two issues share a theme:

- **[#5553](https://github.com/modelcontextprotocol/servers/issues/5553): filesystem `search_files` description.** The author measured on server-filesystem 2.0.0 and 2.2.0. They report that 2.3.0 ships the same description. They say that adding realistic examples to the description stops small models from refusing to search. It is a follow-up to #896 / #3419.
- **[#5552](https://github.com/modelcontextprotocol/servers/issues/5552): git `git_log` description.** The author says the description doesn't state that results are newest-first, or that timestamp filters are optional. As a result, small models filter to an empty window. The author tested with the AgentGrade eval harness, MCP Python SDK 2.3.0, and qwen3:4b-instruct via Ollama at temperature 0.7.

**Underlying need:** Tool descriptions are the main interface for small and local models. Ambiguous or example-free descriptions cause measurable task failures. Users want descriptions that state default behavior, ordering, and optional parameters.

## 5. Bugs & Stability
No crashes or regressions were reported. The two issues describe behavioral failures that come from description quality rather than code defects, ranked by apparent impact:

1. [#5553](https://github.com/modelcontextprotocol/servers/issues/5553): models refuse to use `search_files`, which makes the tool unusable for those models.
2. [#5552](https://github.com/modelcontextprotocol/servers/issues/5552): the model gets empty `git_log` results from over-restrictive timestamp filters. This is a wrong-result failure.

No fix PRs exist for either issue.

## 6. Feature Requests & Roadmap Signals
Both issues are labeled `v2` and `enhancement`, which suggests maintainers may consider them for v2-era work. Description edits are low-risk and small, so they could land quickly. The data shows no maintainer commitment, so any prediction is speculative. I would expect #5552, a one-line clarification, to be easier to accept than #5553, which adds examples to the description and may raise token-cost questions.

## 7. User Feedback Summary
- Small models (e.g., qwen3:4b-instruct) are sensitive to the wording of tool descriptions.
- Evaluation-harness users are measuring tool usability and reporting concrete failure rates (the full numbers are truncated in the data provided).
- The feedback is constructive and evidence-based. It reflects use of the servers outside large frontier-model clients.

## 8. Backlog Watch
The provided data covers only the last 24 hours, so it doesn't show long-unanswered items. Two items need triage attention:

- [#5553](https://github.com/modelcontextprotocol/servers/issues/5553): it references the older issues #896 and #3419, which suggests a recurring problem that has not been resolved.
- [#5552](https://github.com/modelcontextprotocol/servers/issues/5552): it has no maintainer response yet.

Maintainers could review the older referenced issues to check for duplication or a shared fix.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-11-17

Note: Awesome Claude Code had no activity. The data covers only the last 24h, and several lists show only the top 20 items, so conclusions are partial.

## 1. Ecosystem Overview
The projects in this set are not agent runtimes. They are the **distribution and tooling layer of the MCP ecosystem**: reference servers, registries, curated lists and plugin and skill catalogs. Activity is concentrated in intake, meaning submissions of new servers and skills. Review and triage are the bottleneck almost everywhere. Hosted and remote servers with streamable HTTP, OAuth and agent-trust concerns are gaining ground. Human-reported bugs in the first-party reference and plugin repos are slow to be resolved.

## 2. Activity Comparison

Health scores are my own qualitative judgment from the 24h data, not a measured metric.

| Project | Issues updated | PRs updated | Release | Health (1–5) | Note |
|---|---|---|---|---|---|
| MCP Servers (reference) | 2 (open) | 0 | None | 3 | Quiet, no maintainer response visible |
| MCP Registry (official) | 1 (open) | 0 | None | 3 | Quiet, one measurement report |
| Awesome MCP Servers | 0 | 141 (132 open, 9 closed/merged) | None | 3 | Very high intake, review throughput is the concern |
| Docker MCP Registry | 0 | 50 (48 open, 2 closed/merged) | None | 2.5 | Growing backlog, oldest PR is about a year old |
| Claude Plugins (official) | 12 (all open) | 4 (2 closed, 2 open bot bumps) | None | 3 | Bug-heavy, with old high-demand items unresolved |
| Awesome Agent Skills | 1 (closed) | 50 (12 open, 38 closed/merged) | None | 4 | Maintainers responsive, batch closes on Nov 15 |
| Awesome Claude Code | 0 | 0 | None | n/a | No activity |

No project shipped a release in the window.

## 3. MCP Servers's Position
**Role.** It is the reference implementation that other projects depend on. It is not a distribution channel.

**Advantages vs peers**
- It is the canonical source of tool behavior, so its tool descriptions set expectations for the whole ecosystem.
- Its issues are evidence-based. Both open issues (#5552, #5553) include eval results from a harness, a client SDK and a named small model.
- Its `v2` labels show a planned roadmap, which the curated lists lack.

**Technical approach differences**
- Servers is code and tool-schema focused. The Registry deals with identity and namespace verification (#1860). Docker deals with packaging and catalog distribution. The lists and skill catalogs are content curation.

**Community size**
- Servers is the smallest by 24h activity: 2 issues and 0 PRs, against 141 PRs for Awesome MCP Servers and 50 each for Docker and Agent Skills. Activity does not equal influence. Servers has low volume but high leverage, since each description change reaches every downstream user. Star and contributor counts are not in the data, so a true size comparison isn't possible.

**Weak point.** There are 0 comments and no maintainer response on either new issue.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Tool and skill quality for small or local models | MCP Servers | Tool descriptions need examples, ordering and default behavior (#5552, #5553) |
| Verification and trust | Registry, Awesome MCP Servers, Docker | Endpoint ownership checks for 1,335 endpoints (#1860). Agent-output verification servers in the lists. Docker needs a policy for closed-source hosted servers |
| Remote and hosted endpoints | Docker, Awesome MCP Servers, Registry | Streamable HTTP, OAuth 2.1, no-auth endpoints, `tools.json` set to `[]` for dynamic discovery |
| Auth friction | Claude Plugins, Docker | GitHub plugin lacks dynamic client registration (#283, 82 👍). Docker PRs mention CIMD/DCR |
| Automated validation | Awesome MCP Servers, Agent Skills, Docker | Glama listing checks, link-rot validation (#1358, #1381), `claude plugin validate` |
| Review scalability | Awesome MCP Servers, Docker, Agent Skills | Large inflows with few closures |
| Scope and categorization | Awesome MCP Servers, Agent Skills | Category fragmentation, policy on multi-skill root entries, paid-service entries |
| Context fidelity in channel plugins | Claude Plugins | Telegram topics, quotes and Discord forwards (#1158, #929, #7133) |

## 5. Differentiation Analysis

- **Reference code (MCP Servers).** Target users are server authors and client developers. It is the source of tool behavior.
- **Identity layer (Registry).** It targets publishers and clients that need provenance. Its design tension is between strict domain binding and inclusivity for GitHub-namespace and PaaS publishers.
- **Container catalog (Docker).** It targets enterprise and Docker-based users. Its submissions are now mostly hosted servers rather than containers, which sits awkwardly with its container-based model.
- **Curated lists (Awesome MCP Servers, Awesome Agent Skills, Awesome Claude Code).** Target discoverability, using PR-driven curation. Awesome Agent Skills covers instruction-based skills. Awesome MCP Servers covers executable servers. Agent Skills closed some MCP and browser-extension submissions as off-scope (#1414, #1395), which marks the boundary between the two types.
- **Plugin marketplace (Claude Plugins).** It is vendor-run and pins plugin SHAs via bots. It has runtime bugs because it ships code, unlike the lists.

## 6. Community Momentum & Maturity

- **Tier 1, high intake:** Awesome MCP Servers (141 PRs), Docker (50), Agent Skills (50). They are growing quickly. Agent Skills is keeping pace and the other two are building backlogs.
- **Tier 2, bug-driven maintenance:** Claude Plugins (16 items). Bots keep pins current, but the Telegram and Discord issues have been open since March. The figma pin flow is churning, with three competing bump PRs.
- **Tier 3, low activity:** MCP Servers, Registry, Awesome Claude Code. These are stable or quiet, and for the reference repos that mostly reflects a maturing spec. There was no release anywhere, so none is visibly rapidly iterating on a release basis.
- **Maturing:** Registry policy is being revisited through measurement (#180 to #494 to #1860). Servers is moving toward v2.

## 7. Trend Signals

1. **Remote, hosted MCP is becoming the default submission type.** Docker PRs dominantly describe hosted endpoints. Developers should plan for streamable HTTP and OAuth rather than stdio only.
2. **Tool descriptions are a measurable quality surface.** Small-model evals show failures from ambiguous descriptions. State ordering, defaults and optional parameters, and include examples.
3. **Trust and verification are the open problem.** Registry measurements, agent-output checkers and Glama or validate gates all point to it. Expect endpoint-ownership checks.
4. **Agent-assisted contributions are rising** (🤖 disclosures in several lists). Curators will need automated gating.
5. **Payments and commercial skills are appearing** (x402 USDC, paid-account skills). Maintainers lack a stance on gated entries.
6. **Remote-control channels need context fidelity.** Threads, quotes, forwards and multi-instance handling matter for plugin builders.

**Value for developers:** Ship descriptions that work for small models. Support remote transports and OAuth. Publish verifiable identity metadata. Expect long review queues on third-party lists, and don't rely on them for timely distribution.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Project Digest — 2026-11-17

## 1. Today's Overview
Activity in `modelcontextprotocol/registry` was very low over the last 24 hours: one issue updated, no PRs updated, and no releases. The only activity is a new, open measurement report (#1860) about how well remote-endpoint domains match the namespaces they claim. There were no merges, closures, or bug reports. Nothing today signals a project-health problem. It looks like a quiet day, and the one item is a discussion-style proposal rather than a defect.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours, so no features or fixes advanced today.

## 4. Community Hot Topics
There is only one active item, and it has 0 comments and 0 👍:

- **[#1860](https://github.com/modelcontextprotocol/registry/issues/1860) — Measurement: 95.07% of reverse-DNS endpoints sit on a domain their namespace implies; the other 1,335 have no runnable check** (author: lanbass869-cell, opened 2026-11-16)
  - **Context:** According to the issue summary, `#180` once required that a remote endpoint sit on the domain its server name claims. `#494` removed that requirement in Nov 2025, because `io.github.*` publishers and PaaS users could not satisfy it. The replacement was meant to be self-identification by the endpoint.
  - **Underlying need:** The report gives a figure, 95.07% of reverse-DNS endpoints consistent with their namespace. It also counts 1,335 endpoints with no runnable verification. The need is a verifiable way to tie a registry entry to the party that controls the endpoint. The goal is to avoid the old domain-matching rule that excluded legitimate publishers.
  - **Caveat:** The digest only has the truncated summary. The proposed remedy and the exact measurement method are not visible here, so these figures are unverified.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. #1860 concerns trust and verification gaps, not a functional failure. No fix PRs are involved.

## 6. Feature Requests & Roadmap Signals
- #1860 implicitly points toward a **runnable endpoint-ownership check** for the roughly 1,335 endpoints that currently have none. It most likely builds on the post-#494 self-identification design.
- With no maintainer response, no linked PR, and no comments, a change in the next version is unlikely. A maintainer triage reply is the more realistic near-term outcome.

## 7. User Feedback Summary
There is no direct end-user feedback today. The author's measurement suggests that most entries (95.07%) are consistent, but a sizable minority cannot be checked automatically. The tension in the issue is between strict domain binding, which excludes GitHub-namespace and PaaS publishers, and loose verification, which leaves trust gaps.

## 8. Backlog Watch
The data covers only the last 24 hours, so no long-unanswered items can be identified from it. #1860 is new and uncommented, so it should get maintainer triage. Maintainers may also want to check how it relates to the earlier decisions in #180 and #494.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-17

Source: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

## 1. Today's Overview
Activity is high but is almost entirely new-server submissions. In the last 24h there were 141 PR updates (132 open, 9 merged/closed), no issue activity and no releases. The repo is a curated list, so the metric that matters is how fast submissions are reviewed. The numbering (PRs up to #19705) shows a steady inflow of new entries, and open PRs as old as #14718 (September) and #16055 (October) were touched today. Many submissions are marked 🤖🤖🤖, which suggests they were prepared with AI coding agents.

## 2. Releases
No new releases. The repository is a content list and does not publish versioned releases.

## 3. Project Progress
The data lists only a small subset of the 9 merged/closed PRs. Two closed PRs are visible, and neither is confirmed as a merge:
- [#18972](https://github.com/punkpeye/awesome-mcp-servers/pull/18972): Rooster, a transcript-first Mac video editor with a local MCP server (Multimedia Process). It was closed on 2026-11-16 after being opened on 2026-11-09. The data does not say why.
- [#14718](https://github.com/punkpeye/awesome-mcp-servers/pull/14718): Hyperconsciousness, a Rust knowledge store (Knowledge & Memory). It was closed after about two months open (created 2026-09-19).

Both carried the `missing-glama` label, so a missing Glama listing may be a factor. The data does not confirm that. The other 7 merged/closed PRs are not shown, so a merge count cannot be given.

## 4. Community Hot Topics
Comment counts are reported as `undefined` for every PR, so there is no comment or reaction signal (all 👍 are 0). The only usable signal is the submission pattern in the top PRs:
- **Developer Tools** is the most crowded category: [#19698](https://github.com/punkpeye/awesome-mcp-servers/pull/19698) (trust-engine-mcp and signal-feed-mcp), [#19695](https://github.com/punkpeye/awesome-mcp-servers/pull/19695) (stackcheck-mcp), [#19269](https://github.com/punkpeye/awesome-mcp-servers/pull/19269) (cohors), [#19633](https://github.com/punkpeye/awesome-mcp-servers/pull/19633) (FailLoud, a done-check for agent output).
- **Finance and crypto**: [#19704](https://github.com/punkpeye/awesome-mcp-servers/pull/19704) (CortexCloud, x402 USDC payments), [#19696](https://github.com/punkpeye/awesome-mcp-servers/pull/19696) (gammarips-harness), [#19701](https://github.com/punkpeye/awesome-mcp-servers/pull/19701) (bitcoindatalabs-mcp).
- **Browser, testing and QA**: [#19705](https://github.com/punkpeye/awesome-mcp-servers/pull/19705) (Squally, Playwright run history), [#19700](https://github.com/punkpeye/awesome-mcp-servers/pull/19700) (agent-eyes).
- **Aggregators and remote or hosted servers**: [#19702](https://github.com/punkpeye/awesome-mcp-servers/pull/19702) (Glyphcall, 650+ tools behind one endpoint), [#19699](https://github.com/punkpeye/awesome-mcp-servers/pull/19699) (Agent Flights).
- **Niche verticals**: [#19694](https://github.com/punkpeye/awesome-mcp-servers/pull/19694) (Bible), [#19693](https://github.com/punkpeye/awesome-mcp-servers/pull/19693) (Project Zomboid), [#19690](https://github.com/punkpeye/awesome-mcp-servers/pull/19690) (ClipMind), [#19703](https://github.com/punkpeye/awesome-mcp-servers/pull/19703) (Zig H3 geospatial).

The underlying needs are:
- **Agent trust and verification.** Several entries (FailLoud, trust-engine-mcp) target checking agent output.
- **Agent-native payments.** CortexCloud uses x402.
- **Streamable HTTP hosted endpoints.** More submissions offer these alongside stdio.

## 5. Bugs & Stability
No issues were reported and the data has no bug or regression signal. Reviewers do seem to run an automated validation check. PR titles carry labels such as `has-emoji`, `valid-name`, `has-glama` and `missing-glama`. Those labels were probably applied by a bot. Several PRs, for example [#16055](https://github.com/punkpeye/awesome-mcp-servers/pull/16055), [#19700](https://github.com/punkpeye/awesome-mcp-servers/pull/19700), [#19699](https://github.com/punkpeye/awesome-mcp-servers/pull/19699), [#19695](https://github.com/punkpeye/awesome-mcp-servers/pull/19695) and [#19690](https://github.com/punkpeye/awesome-mcp-servers/pull/19690), are tagged `missing-glama`. That is the most common blocker visible in the data.

## 6. Feature Requests & Roadmap Signals
There are no issues or explicit requests. Inferred signals from submissions:
- Categories keep fragmenting, with entries for Gaming, Art & Culture, Travel and Marketing. A taxonomy review may be due.
- Remote and hosted endpoints and official MCP Registry IDs are now commonly cited, for example in [#19701](https://github.com/punkpeye/awesome-mcp-servers/pull/19701) and [#19698](https://github.com/punkpeye/awesome-mcp-servers/pull/19698). The list may eventually need a field or tag for them.
- Contributors increasingly disclose that an AI agent prepared the PR, as in [#19700](https://github.com/punkpeye/awesome-mcp-servers/pull/19700). This is an inference from the PR text.

## 7. User Feedback Summary
There is no direct feedback because there are no comments or issues. From the PR texts, contributors:
- want listing in the right category and in alphabetical order.
- cite Glama and the official MCP Registry as proof of quality.
- stress safe, local, read-only or scoped access, as with Squally (read-only) and AdRails (plan → single-use plan ID → validate-before-write) in [#17293](https://github.com/punkpeye/awesome-mcp-servers/pull/17293).

## 8. Backlog Watch
Older open PRs that were updated today and may need maintainer attention:
- [#16055](https://github.com/punkpeye/awesome-mcp-servers/pull/16055): Edworking MCP (Workplace & Productivity), open since 2026-10-09, flagged `missing-glama`.
- [#17293](https://github.com/punkpeye/awesome-mcp-servers/pull/17293): AdRails (Marketing), open since 2026-10-22, flagged `has-glama`.
- [#19269](https://github.com/punkpeye/awesome-mcp-servers/pull/19269): cohors (Developer Tools), open since 2026-11-12, flagged `has-glama`.

With 132 PRs open, review throughput is the main health concern. Only 9 PRs were closed or merged today against at least 3 PRs opened in the top-20 window alone. Note that the data shows only the top 20 of 141 PRs, so these figures are partial.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-17

Repo: [docker/mcp-registry](https://github.com/docker/mcp-registry)

## 1. Today's Overview
The registry shows a high volume of inbound submissions and no maintainer-side movement. In the last 24h, 50 PRs were updated (48 open, 2 merged/closed), while there were 0 issues and 0 releases. Nearly all of the 20 PRs shown are new "Add … remote MCP server" requests created on 2026-11-16, which suggests a submission wave for hosted servers. The visible data has no sign of review throughput: no comments are recorded on any listed PR. Activity is high on the intake side and low on the processing side.

## 2. Releases
No new releases.

## 3. Project Progress
Of the 50 updated PRs, only 2 were merged or closed. Neither appears in the top-20 list I was given, so I can't say which they were or what they changed. No feature or fix advancement can be attributed from this data. Every listed PR is still open.

## 4. Community Hot Topics
Comment counts are reported as `undefined` and 👍 reactions are 0 for every listed PR, so there is no real discussion signal. The ranking is therefore not meaningful. The themes visible in the submissions are:

- **Hosted/remote servers dominate.** Most PRs describe closed-source or hosted endpoints with a streamable-http transport. Examples: [#7226](https://github.com/docker/mcp-registry/pull/7226) (Clickflame and Supercanic), [#7224](https://github.com/docker/mcp-registry/pull/7224) (Fiko, OAuth 2.1), [#7222](https://github.com/docker/mcp-registry/pull/7222) (Agent Flights, no auth), [#7221](https://github.com/docker/mcp-registry/pull/7221) (Weeklane).
- **Batch submissions.** [#7219](https://github.com/docker/mcp-registry/pull/7219) adds nine SportsDataHQ servers in one PR. [#7226](https://github.com/docker/mcp-registry/pull/7226) and [#5797](https://github.com/docker/mcp-registry/pull/5797) each add two.
- **Vertical and consumer domains.** Examples: video ([#7036](https://github.com/docker/mcp-registry/pull/7036) VideoDB, [#7212](https://github.com/docker/mcp-registry/pull/7212) Dadan), app-store data ([#7218](https://github.com/docker/mcp-registry/pull/7218)), social/messaging ([#7224](https://github.com/docker/mcp-registry/pull/7224), [#7215](https://github.com/docker/mcp-registry/pull/7215)), jobs ([#7211](https://github.com/docker/mcp-registry/pull/7211)), education ([#7217](https://github.com/docker/mcp-registry/pull/7217)).

The underlying need is that vendors want distribution through Docker's catalog for hosted services. They are not asking to containerize their code.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there are 0 issues. One signal to watch is that several PRs have no public source repo (for example [#7225](https://github.com/docker/mcp-registry/pull/7225), [#7221](https://github.com/docker/mcp-registry/pull/7221)). That could conflict with the registry's open-source requirement, a question for maintainers rather than a bug.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests exist. The submissions imply these signals:

- Remote-server support is expected to keep growing as a first-class catalog type.
- Several PRs use OAuth, with CIMD/DCR mentioned in [#7224](https://github.com/docker/mcp-registry/pull/7224), and several use no auth. Clearer guidance on auth metadata may be needed.
- "Dynamic" tool discovery with `tools.json` set to `[]` ([#7224](https://github.com/docker/mcp-registry/pull/7224), [#7222](https://github.com/docker/mcp-registry/pull/7222)) may need schema or validation support.

These are my inferences. Nothing in the data states a roadmap.

## 7. User Feedback Summary
There is no direct user feedback, as no comments or issues were recorded. The PR templates show contributors following the "MCP Server Information" checklist. Authors stress read-only access, no-key access, and the multilingual or vertical value of their servers. No dissatisfaction was reported.

## 8. Backlog Watch
- [#744](https://github.com/docker/mcp-registry/pull/744): "Add ebay-mcp local server", created 2025-11-20 and open about a year, so it is the oldest PR in the list. It was touched on 2026-11-16, which suggests the author is still waiting on review.
- [#5797](https://github.com/docker/mcp-registry/pull/5797): Levirge Brain and Search, open since 2026-10-17 (about 1 month) with no recorded comments.
- [#7036](https://github.com/docker/mcp-registry/pull/7036): VideoDB, open since 2026-11-13.
- [#7176](https://github.com/docker/mcp-registry/pull/7176): easyrender, open since 2026-11-15.

**Health assessment:** Contributor interest is strong, but 48 open PRs against 2 closed or merged in the window point to a growing review backlog. Maintainers may want to triage the new remote-server wave and the long-open PRs such as #744. Clarifying the policy for closed-source hosted servers would also help.

*Caveat: the data shows only the top 20 of 50 PRs, and comment counts were unavailable. The conclusions above are limited accordingly.*

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-17

## 1. Today's Overview
Activity is moderate and dominated by community issue reports rather than releases. Twelve issues and four PRs were updated in 24 hours, and no new releases shipped. All 12 issues are still open and none were closed. The PRs are almost all automated SHA bumps from bots. Issue traffic centers on the channel plugins (Telegram, Discord, fakechat). Maintainer response on those bug reports is not visible in the data.

## 2. Releases
No new releases.

## 3. Project Progress
Two PRs were closed. Neither is a feature or fix merge. Both are superseded `figma` pin bumps:
- [#7071](https://github.com/anthropics/claude-plugins-official/pull/7071), a `claude[bot]` bump of figma to 9d296d07 (v2.2.193), requested via Slack. Closed.
- [#6819](https://github.com/anthropics/claude-plugins-official/pull/6819), an automated figma bump to 7047cb45, opened 2026-10-20. Closed.

Two bot PRs remain open:
- [#7138](https://github.com/anthropics/claude-plugins-official/pull/7138), a figma bump to 5f3024c3.
- [#7137](https://github.com/anthropics/claude-plugins-official/pull/7137), a sap-ux-fiori-tools bump from 08afc41d to 0b3a88c4.

Both passed `claude plugin validate`. The figma plugin has had three competing bump PRs, and each one is closed or pending against the same old SHA, `f2789420`. That suggests the pin-update flow is churning rather than landing.

## 4. Community Hot Topics
- **[#283](https://github.com/anthropics/claude-plugins-official/issues/283), GitHub plugin auth failure** (11 comments, 82 👍). By far the highest-demand item. It was opened in January 2026 and is still active. The GitHub MCP server at `api.githubcopilot.com/mcp/` reports "does not support dynamic client registration". Users need a working official GitHub integration, and the fix likely requires a pre-registered OAuth client or a token-based config.
- **[#1158](https://github.com/anthropics/claude-plugins-official/issues/1158), Telegram forum topics** (7 comments). Users want `message_thread_id` support in supergroups.
- **[#881](https://github.com/anthropics/claude-plugins-official/issues/881), Telegram polling in non-channel instances** (7 comments). The plugin steals updates from the intended instance.
- **[#929](https://github.com/anthropics/claude-plugins-official/issues/929), Telegram quoted replies dropped** (4 comments, 9 👍). Claude cannot see the quoted message.
- **[#6768](https://github.com/anthropics/claude-plugins-official/issues/6768), Discord allowlist rejection on Windows** (5 comments).

The underlying need is that the channel plugins (Telegram, Discord) are used as real remote-control surfaces. Users want them to handle context correctly: threads, quotes, forwards, and multiple sessions.

## 5. Bugs & Stability
Ranked by severity. No linked fix PRs appear for any of them.
1. [#7136](https://github.com/anthropics/claude-plugins-official/issues/7136), security-guidance 2.0.20. The commit-review hook buffers the entire `git show -p` output before applying its file-count cut-off. On large commits this uses several GB of memory, a resource-exhaustion risk.
2. [#283](https://github.com/anthropics/claude-plugins-official/issues/283), GitHub plugin auth failure. It blocks the plugin entirely and has been open for about 10 months.
3. [#881](https://github.com/anthropics/claude-plugins-official/issues/881), Telegram polling in non-channel instances. Updates are stolen and messages are lost across multiple instances.
4. Discord DM reply rejection, reported twice. [#6768](https://github.com/anthropics/claude-plugins-official/issues/6768) is the Windows report. [#7132](https://github.com/anthropics/claude-plugins-official/issues/7132) gives a likely root cause: the cached `DMChannel.recipientId` goes stale, and the issue suggests preferring `dmChannelUsers`.
5. [#7135](https://github.com/anthropics/claude-plugins-official/issues/7135), fakechat `reply` silently drops every file after the first.
6. [#7134](https://github.com/anthropics/claude-plugins-official/issues/7134), fakechat uploads can overwrite each other when two arrive in the same millisecond.
7. [#7133](https://github.com/anthropics/claude-plugins-official/issues/7133), Discord forwarded messages arrive empty because `messageSnapshots` is never read.

## 6. Feature Requests & Roadmap Signals
- [#1158](https://github.com/anthropics/claude-plugins-official/issues/1158), Telegram forum topics.
- [#929](https://github.com/anthropics/claude-plugins-official/issues/929), Telegram reply-to content.
- [#1276](https://github.com/anthropics/claude-plugins-official/issues/1276), a separate `admins` role for permission relay. The author has already built a patch.
- [#7133](https://github.com/anthropics/claude-plugins-official/issues/7133), Discord forward support.

The Telegram requests from March are still unaddressed. The most likely near-term changes are the small, well-diagnosed Discord and fakechat fixes (#7132, #7134, #7135). Items that need design work are less likely soon: #1276 changes the permission model, and #1158 adds a new concept (thread-aware routing). Based on this data, I can't say how any of them will be prioritized.

## 7. User Feedback Summary
- Users depend on channel plugins for remote sessions, and context loss is the main frustration. This covers quoted replies, forwards, and topics.
- Permission relay is seen as too coarse. Everyone on `allowFrom` can approve tool use, which is a concern when the bot is shared.
- Windows users hit Discord path and allowlist problems.
- Authentication friction with the GitHub plugin affects many users, with 82 👍.
- Several contributors (for example #7132 and #7135) submit detailed diagnoses with root causes. That signals engaged users, but it is also a reminder that the fixes are not landing quickly.
- Not a user report: [#7139](https://github.com/anthropics/claude-plugins-official/issues/7139) is a directory badge solicitation and can be treated as low-value.

## 8. Backlog Watch
- [#283](https://github.com/anthropics/claude-plugins-official/issues/283), the GitHub plugin auth failure. It is about 10 months old with the highest engagement of any item. It needs a maintainer decision.
- [#881](https://github.com/anthropics/claude-plugins-official/issues/881), the Telegram polling bug. It dates from March and has a clear root cause.
- [#1158](https://github.com/anthropics/claude-plugins-official/issues/1158), [#929](https://github.com/anthropics/claude-plugins-official/issues/929) and [#1276](https://github.com/anthropics/claude-plugins-official/issues/1276), all Telegram requests open since March or April.
- [#6768](https://github.com/anthropics/claude-plugins-official/issues/6768) and [#7132](https://github.com/anthropics/claude-plugins-official/issues/7132), duplicate Discord reports that should be triaged together.
- The figma bump PRs ([#7138](https://github.com/anthropics/claude-plugins-official/pull/7138) and earlier) need someone to merge one and stop the churn.

**Health assessment:** Bot automation keeps plugin pins current, but human-reported bugs, especially in the Telegram and Discord channel plugins, are slow to be resolved. A triage pass would help.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-17

## 1. Today's Overview
VoltAgent/awesome-agent-skills is a curated list that takes community submissions through PRs. It had 50 PRs and 1 issue updated in the last 24 hours, and no releases. Of the PRs, 12 are open and 38 are closed or merged. A wave of new skill submissions arrived on Nov 15–16 (#1415–#1426), and a maintainer pass on Nov 15 closed a batch of older PRs. Activity is high and almost all of it is submissions. Review capacity looks like the bottleneck, and the 12 open PRs are all fresh (no comments).

## 2. Releases
No new releases.

## 3. Project Progress
The data doesn't separate merged PRs from closed-unmerged ones, so I can't say which of these actually landed. The closed items, all updated Nov 15, fall into three groups.

- **Cleanup of retired listings.**
  - [#1358](https://github.com/VoltAgent/awesome-agent-skills/pull/1358) removes the obsolete OpenAI `frontend-skill` and `develop-web-game` listings and closes issue [#1351](https://github.com/VoltAgent/awesome-agent-skills/issues/1351).
  - [#1381](https://github.com/VoltAgent/awesome-agent-skills/pull/1381) fixes Notion source links that pointed to a removed directory, and moves a misplaced community entry.
- **Skill submissions closed.**
  - Marketing and SEO: [#1334](https://github.com/VoltAgent/awesome-agent-skills/pull/1334) (akii schema-markup), [#1365](https://github.com/VoltAgent/awesome-agent-skills/pull/1365) (everyinfra/seo-skills).
  - Specialized Domains: [#1366](https://github.com/VoltAgent/awesome-agent-skills/pull/1366) (everyinfra-agent-plugins).
  - Productivity: [#1405](https://github.com/VoltAgent/awesome-agent-skills/pull/1405) (generate-qr).
- **Off-scope submissions closed.** [#1414](https://github.com/VoltAgent/awesome-agent-skills/pull/1414) (an MCP server) and [#1395](https://github.com/VoltAgent/awesome-agent-skills/pull/1395) (a Chrome extension, "Claude to PDF") are not skills. They were probably closed for that reason, though the data doesn't say.

## 4. Community Hot Topics
No item has any comments or reactions. The comment counts show as undefined and the 👍 count is 0 everywhere. The themes are below.

- **Marketing and SEO skills dominate.** [#1423](https://github.com/VoltAgent/awesome-agent-skills/pull/1423) (gomarble, 60 skills), [#1422](https://github.com/VoltAgent/awesome-agent-skills/pull/1422) (RedYA Xiaohongshu), [#1420](https://github.com/VoltAgent/awesome-agent-skills/pull/1420) (ghostfeed), [#1418](https://github.com/VoltAgent/awesome-agent-skills/pull/1418) (leadsets, 50 skills) and [#1416](https://github.com/VoltAgent/awesome-agent-skills/pull/1416) (harborrank, 18 skills). Vendors want visibility in the list, and many of their skills need paid accounts or API keys.
- **Development and testing.** [#1425](https://github.com/VoltAgent/awesome-agent-skills/pull/1425) (scandiary, an accessibility audit with axe-core) and [#1419](https://github.com/VoltAgent/awesome-agent-skills/pull/1419) (hyper-elements).
- **Resubmission after feedback.** [#1426](https://github.com/VoltAgent/awesome-agent-skills/pull/1426) (suprsend) resubmits [#1360](https://github.com/VoltAgent/awesome-agent-skills/pull/1360) as a single root-repo entry, as a maintainer suggested. This shows that contributors act on review guidance.
- **Other submissions.** [#1417](https://github.com/VoltAgent/awesome-agent-skills/pull/1417) (contextcore, context engineering), [#1424](https://github.com/VoltAgent/awesome-agent-skills/pull/1424) (modellix-design), [#1421](https://github.com/VoltAgent/awesome-agent-skills/pull/1421) (inbox-envoy), [#1415](https://github.com/VoltAgent/awesome-agent-skills/pull/1415) (grill-me-visually).

## 5. Bugs & Stability
There are no crashes or regressions, since this is a content repository. One data-quality bug was reported and has been fixed.

- [#1351](https://github.com/VoltAgent/awesome-agent-skills/issues/1351) (closed): officialskills.sh listed the removed OpenAI `frontend-skill` with a broken install path. The fix is [#1358](https://github.com/VoltAgent/awesome-agent-skills/pull/1358), which also removes `develop-web-game`.
- [#1381](https://github.com/VoltAgent/awesome-agent-skills/pull/1381) shows that link rot against upstream sources is a recurring problem. Entries drift when upstream directories are removed.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The signals below are inferences from the submissions.

- Submitters say there is no "AI and Data" subcategory ([#1366](https://github.com/VoltAgent/awesome-agent-skills/pull/1366)). A new category, or a better home for data and platform skills, may follow.
- Marketing is heavily oversubscribed. A split into SEO, ads and GTM subcategories is plausible.
- Large multi-skill repos (gomarble, leadsets, ghostfeed) suggest a policy on one root entry versus per-skill entries, as in #1426.
- Contributors want automated link validation, because of the retired-listing cleanup.

## 7. User Feedback Summary
- Contributors mainly want discoverability and credibility. Submissions cite stars (100+), licenses (MIT) and public availability.
- Many skills are commercial or gated behind a paid account or API key (Ghostfeed, Modellix, RedYA). Maintainers may need a stance on these.
- Contributors are disclosing authorship ("I maintain this") and AI assistance (the 🤖 note in [#1365](https://github.com/VoltAgent/awesome-agent-skills/pull/1365)).
- Downstream consumers, such as officialskills.sh users, are affected when listings go stale.

## 8. Backlog Watch
- All 12 open PRs, [#1415](https://github.com/VoltAgent/awesome-agent-skills/pull/1415) through [#1426](https://github.com/VoltAgent/awesome-agent-skills/pull/1426), are under 3 days old. They have no comments or maintainer responses yet.
- Maintainer attention is needed on the large multi-skill submissions (#1423, #1418, #1420). They need a decision on scope and on paid-service skills.
- No old, important open issues appear in this window. Older backlog items outside the 24h window can't be assessed from this data.

**Health assessment:** Submission volume is very high and maintainers are responsive (a batch of closes on Nov 15). The main risks are review throughput and curation quality, because many entries are promotional or gated.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
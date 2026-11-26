# MCP Ecosystem Digest 2026-11-27

> Issues: 2 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-26 17:29 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-27

## 1. Today's Overview
Activity in modelcontextprotocol/servers was very low over the last 24 hours. Only 2 issues were updated, and both are open enhancement requests labeled `v2`. There were no PRs, no merges or closures, and no new releases. The repository looks quiet on the code-change side, with discussion centered on the v2 / "Modern (2026-07-28)" protocol era. Both issues have no comments, so maintainers have not yet engaged.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so there is no feature or fix progress to report.

## 4. Community Hot Topics
Neither issue has comments, and reactions are minimal. By engagement:

- **[#5660](https://github.com/modelcontextprotocol/servers/issues/5660)** — "Heads-up before I publish: runtime test results for mcp-server-time, mcp-server-git and mcp-server-fetch" (👍 1, 0 comments). The author, sarooo43, maintains the MIT-licensed tool mcp-caretaker. They are giving the maintainers advance notice of runtime test results for several reference servers. The underlying need is third-party validation and coordinated disclosure: external tooling now tests reference servers, and its authors want a courtesy channel before publishing findings. The issue is filed under the `everything` server and the "Modern (2026-07-28)" era.
- **[#5659](https://github.com/modelcontextprotocol/servers/issues/5659)** — "git: add public agent skill to guide agents to use mcp-server-git tools over shell git" (👍 0, 0 comments). The author, mstred, reports that agents with shell access often fall back to raw `git` CLI commands even when `mcp-server-git` is connected. The need is better agent steering toward MCP tools, for example through a shipped skill or guidance file.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. No fix PRs exist.

Note: #5660 refers to runtime test results for `mcp-server-time`, `mcp-server-git` and `mcp-server-fetch`. The excerpt does not show whether these contain defects. Maintainers should read the full issue to check whether any findings are real bugs.

## 6. Feature Requests & Roadmap Signals
- **Agent skill for mcp-server-git ([#5659](https://github.com/modelcontextprotocol/servers/issues/5659))**: This is a lightweight, documentation-style change that does not touch server code. It fits the `v2` label and would be cheap to adopt. It is a plausible candidate for a near-term docs or packaging update, though no maintainer has responded yet.
- **Coordinated testing and disclosure ([#5660](https://github.com/modelcontextprotocol/servers/issues/5660))**: This is not a feature request in the usual sense. It does suggest growing demand for a conformance or runtime-testing story across reference servers.

Neither item has a linked PR, so I wouldn't predict either one for the next release.

## 7. User Feedback Summary
- Agents ignore available MCP tools in favor of familiar shell commands. This weakens the value of dedicated servers such as git, which can offer safer and more structured operations.
- Third-party ecosystem tooling is starting to exercise the reference servers at runtime. That is a sign of maturity, and it raises the question of how maintainers want findings reported.
- No satisfaction or dissatisfaction signals appear beyond these two items.

## 8. Backlog Watch
Both issues were created on 2026-11-26 and are less than a day old, so neither counts as long-unanswered. Both have zero comments and need a first maintainer triage:
- [#5660](https://github.com/modelcontextprotocol/servers/issues/5660) needs a response on how the author should disclose findings. It also appears to be filed against the wrong server (`everything`) and may need re-labeling.
- [#5659](https://github.com/modelcontextprotocol/servers/issues/5659) needs a decision on whether a skill or guidance file belongs in this repo.

Today's data contains no older backlog items, so a wider backlog review would need data from a longer time window.

**Project health:** Low activity today, with no regressions or releases. The v2 label shows the issue templates are being used, but the lack of PRs and maintainer replies in this window suggests triage latency is worth watching.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report, 2026-11-27

Scope: MCP Servers, MCP Registry, Awesome MCP Servers, Docker MCP Registry, Claude Plugins (official), Awesome Claude Code and Awesome Agent Skills. Data covers the last 24 hours only. Docker MCP Registry figures cover the top 20 of 50 updated PRs. The Awesome MCP Servers sample is also partial.

## 1. Ecosystem Overview
The MCP ecosystem is currently driven more by distribution and curation than by core protocol code. The reference repo is quiet. Most activity is in catalogs and lists (Awesome MCP Servers: 259 PRs, Docker MCP Registry: 50 PRs, Awesome Agent Skills: 11 PRs). These absorb vendor and community submissions faster than maintainers can review them. Security and trust is the main technical theme: tool poisoning, scan receipts and hook safety. The ecosystem is also becoming multi-host. Skills and plugins now target Claude Code, Codex CLI and DeepSeek, and remote or hosted MCP servers are growing. Review capacity is the main bottleneck.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my assessment) |
|---|---|---|---|---|
| MCP Servers | 2 (both open, 0 comments) | 0 | None | Low activity. Triage latency is a risk. |
| MCP Registry | 1 | 4 (3 Dependabot) | None | Stable. Security design work is unresolved. |
| Awesome MCP Servers | 0 | 259 (247 open, 12 closed) | None (n/a) | High intake, with a growing queue (~4.6% closed). |
| Docker MCP Registry | 0 | 50 (48 open, 2 closed) | None | High intake, with a review bottleneck. |
| Claude Plugins (official) | 11 (6 closed) | 4 | None | Moderate. Maintainers respond, but a blocking bug is open (#7223). |
| Awesome Claude Code | 0 | 0 | None | No activity in 24h. |
| Awesome Agent Skills | 0 | 11 (10 open, 1 closed) | None | Steady intake. No merges today. |

Health ratings are qualitative judgments from one day of data, not measured scores.

## 3. MCP Servers' Position
- **Role:** It is the reference implementation (git, fetch, time, everything). It is not a catalog. It sets conventions that the registries and lists index.
- **Advantages:** It has canonical status and is now a target for third-party runtime testing (#5660, mcp-caretaker). It is also the only project here tied to the v2 / "Modern (2026-07-28)" protocol era.
- **Differences in approach:** Peers handle submissions (PRs adding entries). This repo handles server code and protocol evolution, so its volume is naturally lower.
- **Community size:** It is the smallest by volume today (2 issues, 0 PRs) against 259 PRs for Awesome MCP Servers and 50 for Docker. This reflects workflow differences, not necessarily a smaller community. A 24-hour window can't establish long-term size.
- **Gap:** Neither open issue has a maintainer response. Peers such as Claude Plugins show faster issue handling.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Security and trust | MCP Registry, Awesome MCP Servers, Claude Plugins, MCP Servers | Tool-signature fingerprinting (#82), security-scan receipts (#1404), read-only and confirmation modes, a hook-timeout and temp-file fix wave, third-party runtime testing (#5660) |
| Agent steering toward tools | MCP Servers, Awesome Agent Skills | Agents prefer shell `git` over `mcp-server-git` (#5659). Skills are the proposed fix. |
| Cross-host portability | Claude Plugins, Awesome Agent Skills | Codex hook-schema failures. Skills for Claude Code, Codex CLI and DeepSeek. |
| Remote and hosted servers | Docker MCP Registry, Awesome MCP Servers | Streamable HTTP, OAuth 2.1, empty `tools.json` for remote servers, Glama listings |
| Persistent memory | Awesome MCP Servers, Awesome Agent Skills | Local-first memory servers and context-engineering skills |
| Review and triage automation | Awesome MCP Servers, Docker MCP Registry, Awesome Agent Skills | Auto-merge or auto-close rules, remote-server criteria, submission checklists |
| Windows reliability | Claude Plugins | Git Bash hangs, pyenv-win artifacts |

## 5. Differentiation Analysis
- **MCP Servers:** reference code for protocol implementers.
- **MCP Registry:** official metadata layer (`server.json`, `_meta` extensions). It is moving toward an attestation layer.
- **Awesome MCP Servers:** a broad human-curated index. It uses Glama as a quality gate.
- **Docker MCP Registry:** a catalog of containerized and remote servers. It leans toward enterprise or runtime users and is increasingly remote-first.
- **Claude Plugins (official):** shipped, versioned plugins with SHA-pinned marketplace entries and a validation CI. It has the most hands-on bug traffic.
- **Awesome Agent Skills:** a skills-centric list. Entries are vertical and portable across agents.
- **Awesome Claude Code:** no data today, so no comparison is possible.

## 6. Community Momentum & Maturity
- **High-intake, review-limited:** Awesome MCP Servers, Docker MCP Registry, Awesome Agent Skills. Contributors are engaged, but closure rates and maintainer comments are low.
- **Active maintenance:** Claude Plugins. It has six closures in a batch, automated SHA bumps and a quick response to `security-guidance`. A few older bugs remain (#3937 open for about 4.5 months).
- **Stabilizing or slow:** MCP Registry. Dependabot handles routine work, while #82 (open since 2025-05) and #1404 (about five months) are waiting on decisions.
- **Quiet:** MCP Servers and Awesome Claude Code. One day is too short to call either dormant.

## 7. Trend Signals
1. **Trust is becoming infrastructure.** Fingerprints, scan receipts and read-only modes recur across repos. Developers should plan for attestation metadata in registries.
2. **Hosted MCP is rising.** Remote servers with OAuth dominate Docker submissions. Design for streamable HTTP and dynamic auth, and expect tool lists that can't be enumerated statically.
3. **Agents don't reliably prefer MCP tools.** Shell fallbacks are common. Ship skills or guidance files alongside servers.
4. **Portability is expected.** Hook and skill formats have to work on Codex and other hosts. Validate against strict schemas.
5. **Resource hygiene matters.** Hangs, orphaned processes and temp-file growth (8.96 GB) are real operational risks. Set timeouts and handle stdin-EOF shutdown.
6. **Discovery is saturating.** With hundreds of open listing PRs, quality gates and automation (Glama, checklists) will matter more than another list.

Caveat: this is a single-day snapshot with partial samples. Treat the rankings as directional.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest — 2026-11-27

## 1. Today's Overview
Activity in the official MCP Registry (modelcontextprotocol/registry) was low over the last 24 hours. One issue and four PRs were updated, and no releases shipped. Nothing was merged or closed. Three of the four PRs are Dependabot version bumps. The other two items are older security-related threads: the tool-signature issue #82 and the security-scan receipt PR #1404. Project health looks stable. Routine maintenance is automated, and the larger design work on trust and security is still unresolved.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. Four PRs are open:
- [#1923](https://github.com/modelcontextprotocol/registry/pull/1923): bumps `actions/setup-go` from 7.0.0 to 7.1.0 (GitHub Actions group).
- [#1922](https://github.com/modelcontextprotocol/registry/pull/1922): bumps `pulumi/sdk/v3` from 3.276.0 to 3.277.0 in `/deploy`.
- [#1921](https://github.com/modelcontextprotocol/registry/pull/1921): bumps the go-dependencies group (Azure `azkeys` SDK and `huma/v2`).
- [#1404](https://github.com/modelcontextprotocol/registry/pull/1404): adds an optional security-scan receipt `_meta` extension (v1). This is the only feature-level PR in the set.

## 4. Community Hot Topics
- **[Issue #82](https://github.com/modelcontextprotocol/registry/issues/82)** — "Preventing tool poisoning: save signatures of possible tool calls." This is the most discussed item, with 40 comments and 1 👍. It was opened in 2025-05 and updated on 2026-11-26. The idea is for `server.json` submitters to list every tool their server may invoke. The registry would fingerprint those tools, and clients could consume the fingerprints. Third-party vendors could then scan and approve the fingerprints. The underlying need is supply-chain trust: clients want a way to detect tool poisoning or later tool-definition drift. The issue is labeled "not go-live blocker", so it has been treated as a post-launch enhancement.
- **[PR #1404](https://github.com/modelcontextprotocol/registry/pull/1404)** — adds an optional `io.modelcontextprotocol.registry/security-scan...` receipt extension in `_meta`. It resolves the v1 proposal converged in #1273 and was scoped down to a small v1 cut. It was opened 2026-06-29 and updated 2026-11-26. It addresses the same trust need as #82, by attaching scan results instead of tool fingerprints. The comment and reaction counts weren't in the data.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The Dependabot PRs touch deployment tooling (Pulumi) and Go dependencies. They are low risk, but CI results weren't in the data.

## 6. Feature Requests & Roadmap Signals
- **Tool fingerprinting (#82):** it is still open after about 18 months, so it is unlikely to land in the next version without a clear owner.
- **Security-scan receipts (#1404):** this has the strongest near-term chance. It is an optional metadata extension, which keeps the change small. It also has a concrete design that contributors agreed on in #1273. Because it is optional and lives in `_meta`, it could be merged without a breaking change. Its roughly five months open suggests review is the bottleneck.
- Together, these two items signal that the registry is moving toward a security-attestation layer. Scanning vendors would publish the attestations and clients would consume them.

## 7. User Feedback Summary
Direct user feedback was limited today. The one active thread, #82, shows interest in defending against tool poisoning and tool-definition changes after approval. It also shows a preference for a centralized registry as the place to store verifiable data. The data doesn't include satisfaction signals or complaints about the registry itself.

## 8. Backlog Watch
- **[Issue #82](https://github.com/modelcontextprotocol/registry/issues/82)** has been open since 2025-05-27 with 40 comments and no resolution. It needs a maintainer decision to implement, scope down, or close it, possibly in favor of the #1404 approach.
- **[PR #1404](https://github.com/modelcontextprotocol/registry/pull/1404)** has been open since 2026-06-29 (about five months). It needs maintainer review or an explicit merge/decline decision.
- The three Dependabot PRs ([#1921](https://github.com/modelcontextprotocol/registry/pull/1921), [#1922](https://github.com/modelcontextprotocol/registry/pull/1922), [#1923](https://github.com/modelcontextprotocol/registry/pull/1923)) are new and routine. They should be merged once CI passes.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-27

## 1. Today's Overview
The repository had a high-volume, submission-driven day. There were 259 PRs updated in 24 hours (247 open, 12 merged or closed) and no issue activity or releases. Almost every item is a "please list my server" PR. Many were created on 2026-11-26, and some older PRs (from August to November) were touched again. Review throughput is low. Only 12 of 259 updated PRs (about 4.6%) closed, so the queue keeps growing. Activity is high, but it is almost entirely inbound contributions.

## 2. Releases
No new releases. This is a curated list, so it doesn't ship versions.

## 3. Project Progress
The closed PRs in the visible sample are:
- [#20110](https://github.com/punkpeye/awesome-mcp-servers/pull/20110) is a **CLOSED** entry for `shield-mcp` (Security). The same author reopened the submission in [#20848](https://github.com/punkpeye/awesome-mcp-servers/pull/20848), which bundles Open Edge Network MCP and Caelara Shield MCP. This looks like a consolidation of two PRs into one.
- [#12325](https://github.com/punkpeye/awesome-mcp-servers/pull/12325) is a **CLOSED** `draftly-wps` entry (Workplace & Productivity) that was labeled `merge-conflict`. It had been open since 2026-08-17.

The data doesn't say whether the other 10 closed PRs were merged or rejected. Only 2 of the 12 closures are visible, so I can't measure merge rate or which categories advanced.

## 4. Community Hot Topics
The data shows no comment counts (every PR reads "Comments: undefined", 👍 0), so I can't rank by engagement. These submissions are the most notable by topic:
- **Knowledge & Memory** has a cluster: [#20832](https://github.com/punkpeye/awesome-mcp-servers/pull/20832) (iron-suite, a Rust SQLite FTS5 memory hub), [#16207](https://github.com/punkpeye/awesome-mcp-servers/pull/16207) (M1K3, a macOS app with 18 tools) and [#20841](https://github.com/punkpeye/awesome-mcp-servers/pull/20841) (AIDrive, versioned memory and handoffs across coding assistants). The demand is for persistent, local-first agent memory.
- **Security and trust** has several entries: [#20848](https://github.com/punkpeye/awesome-mcp-servers/pull/20848), [#20849](https://github.com/punkpeye/awesome-mcp-servers/pull/20849) (cryptographic verification of SEO/GEO certificates, `llms.txt` and `agent.json`) and [#19832](https://github.com/punkpeye/awesome-mcp-servers/pull/19832) (a read-only, hash-chained public ledger). These point to interest in verifiability and safe-by-design tooling, such as read-only modes and confirmation before actions ([#20850](https://github.com/punkpeye/awesome-mcp-servers/pull/20850), [#20842](https://github.com/punkpeye/awesome-mcp-servers/pull/20842)).
- **Vertical and commercial servers** include [Finance #20846](https://github.com/punkpeye/awesome-mcp-servers/pull/20846), [#18584](https://github.com/punkpeye/awesome-mcp-servers/pull/18584), [Legal #20851](https://github.com/punkpeye/awesome-mcp-servers/pull/20851), [Health #20840](https://github.com/punkpeye/awesome-mcp-servers/pull/20840), [Delivery #20842](https://github.com/punkpeye/awesome-mcp-servers/pull/20842), [Communication #20847](https://github.com/punkpeye/awesome-mcp-servers/pull/20847) and [Browser Automation #20844](https://github.com/punkpeye/awesome-mcp-servers/pull/20844).

## 5. Bugs & Stability
No issues were filed, and none of the PRs describe a bug or regression. There are two list-hygiene signals:
- [#20836](https://github.com/punkpeye/awesome-mcp-servers/pull/20836) is labeled `duplicate` and `missing-glama`. It updates an existing Odds-API entry, so it may conflict with the current listing.
- [#12325](https://github.com/punkpeye/awesome-mcp-servers/pull/12325) was closed with `merge-conflict`.

## 6. Feature Requests & Roadmap Signals
There are no feature requests, since there are no issues. The PR mix shows where submissions are heading:
- Local-first, stdio-based servers with minimal dependencies (Rust, Go, Python standard library only).
- Distribution through the Official MCP Registry and Glama. Most PRs carry `has-glama`, which suggests a Glama listing is expected for acceptance.
- Safety features such as annotation hints, read-only modes and explicit confirmation.

Expect continued growth in the Knowledge & Memory, Security and vertical-app categories. The repository's rules for submissions are the more likely thing to change, such as stricter label or backlink checks.

## 7. User Feedback Summary
The feedback is indirect, because there are no comments or issues. Contributors invest in meeting the checklist: emoji, valid name, Glama listing and alphabetical placement. Many include a Glama backlink badge, which suggests those requirements are well understood and enforced. Contributors use the repository for discoverability, and the only visible friction is missing Glama listings and merge conflicts.

## 8. Backlog Watch
- [#16207](https://github.com/punkpeye/awesome-mcp-servers/pull/16207) (M1K3) has been open since 2026-10-11, about 6.5 weeks, and is labeled `missing-glama`. It needs the author to add a Glama listing or a maintainer decision.
- [#18584](https://github.com/punkpeye/awesome-mcp-servers/pull/18584) (SolidRPC, Finance) has been open since 2026-11-04 with all labels passing.
- [#19832](https://github.com/punkpeye/awesome-mcp-servers/pull/19832) (DrawCommons ledger) has been open since 2026-11-17 with all labels passing.
- With 247 open PRs, the maintainers' main need is triage automation. Examples are auto-merging PRs where all checks pass, and auto-closing PRs that stay `missing-glama` or `merge-conflict` past a deadline.

**Project health:** Interest is strong, with a steady stream of submissions. Closure throughput is low, so review capacity is the main risk.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-27

## 1. Today's Overview
The registry saw heavy submission traffic: 50 PRs were updated in 24h (48 open, 2 merged/closed). No issues were updated and no releases were published. Nearly all activity is new "Add X server" submissions, and most were opened on 2026-11-26. The data shows no sign of maintainer review: no comment counts are available (shown as `undefined`) and only one PR closed. Intake is outpacing review. The data lists only the top 20 of the 50 PRs, so the figures below cover that subset.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were visibly merged in the listed data. Of the 2 merged/closed PRs, only one appears in the top 20.
- [#7766](https://github.com/docker/mcp-registry/pull/7766) (Underwriters Technologies `undtec-tools`, single remote server with 10 tools) was **closed**. The author then submitted [#7770](https://github.com/docker/mcp-registry/pull/7770), which splits it into 8 separate remote servers (wildfire, flood, dtc, and others). This looks like a resubmission after restructuring, possibly in response to registry conventions. The data doesn't confirm the reason.

## 4. Community Hot Topics
Comment and reaction data is unavailable (all comments `undefined`, 👍 0), so there are no true "hot" items. Themes among today's submissions:
- **Remote (hosted) servers dominate.** At least 14 of the 20 listed PRs are remote or streamable-HTTP servers, for example [#7722 Winly](https://github.com/docker/mcp-registry/pull/7722), [#7772 AlchemyAgent](https://github.com/docker/mcp-registry/pull/7772), [#7765 quso.ai](https://github.com/docker/mcp-registry/pull/7765), [#7769 LeadReef](https://github.com/docker/mcp-registry/pull/7769), [#7761 zillodata](https://github.com/docker/mcp-registry/pull/7761) and [#7230 Edgegap](https://github.com/docker/mcp-registry/pull/7230). Vendors want catalog visibility for hosted SaaS endpoints, not just containerized servers.
- **Auth variety.** OAuth 2.1 with dynamic client registration ([#5824 Signatoro](https://github.com/docker/mcp-registry/pull/5824), LeadReef), versus no-auth read-only tools (AlchemyAgent, ipvolt, Underwriters).
- **Verticals:** finance and regulatory data ([#7773](https://github.com/docker/mcp-registry/pull/7773)), sports odds ([#7771](https://github.com/docker/mcp-registry/pull/7771)), real estate (zillodata), marketing analytics ([#7760 Mindmetrics](https://github.com/docker/mcp-registry/pull/7760)), legal ([#5813 imzala](https://github.com/docker/mcp-registry/pull/5813)), video and motion graphics ([#7762 AgentFX](https://github.com/docker/mcp-registry/pull/7762), [#7767 AI Video GT](https://github.com/docker/mcp-registry/pull/7767)), and agent governance ([#7768 Lugh](https://github.com/docker/mcp-registry/pull/7768)).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no issues. Possible submission-quality risks are:
- [#7759 AlertHub](https://github.com/docker/mcp-registry/pull/7759): the PR body appears to be the unfilled issue template, with a blank server name and repo URL. It will likely need rework.
- [#7760 Mindmetrics](https://github.com/docker/mcp-registry/pull/7760): closed-source, with no repository URL. This may conflict with the registry's open-source requirement, although it is a remote server.
- Several remote servers point to "listing/docs" repos rather than the server source ([#7769](https://github.com/docker/mcp-registry/pull/7769), [#7761](https://github.com/docker/mcp-registry/pull/7761), [#7763](https://github.com/docker/mcp-registry/pull/7763)). Maintainers will need to decide whether this qualifies.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions suggest registry demand in three areas:
- **First-class remote-server support** (streamable HTTP, OAuth), now a large share of submissions.
- **Empty `tools.json` for remote servers** ([#7722](https://github.com/docker/mcp-registry/pull/7722) uses `[]`), implying tools cannot be statically enumerated for hosted servers.
- **Bulk or multi-server submissions** ([#7770](https://github.com/docker/mcp-registry/pull/7770), 8 servers in one PR) may prompt guidance on batching.

These are inferences from the PRs, not stated requests.

## 7. User Feedback Summary
There is no direct user feedback because no comments or issues exist. The submissions suggest that contributors:
- see the Docker catalog as a distribution channel for hosted services;
- also list on npm and the official MCP registry (e.g. [#7771](https://github.com/docker/mcp-registry/pull/7771));
- target agent-oriented, read-only, lookup-style tools.

Many contributors accompany their PRs with extensive checklists. Satisfaction can't be measured.

## 8. Backlog Watch
Older PRs updated today and still open with zero visible comments:
- [#5449 ipvolt Proxy Toolkit](https://github.com/docker/mcp-registry/pull/5449), opened 2026-10-05 (about 8 weeks).
- [#5813 imzala](https://github.com/docker/mcp-registry/pull/5813) and [#5824 Signatoro](https://github.com/docker/mcp-registry/pull/5824), both opened 2026-10-18 (about 5.5 weeks).
- [#7230 Edgegap](https://github.com/docker/mcp-registry/pull/7230), opened 2026-11-16 (about 10 days).

These need a maintainer decision (merge, request changes or close). With 48 open PRs and growing daily intake, the project would benefit from triage automation, batch review or clearer guidance on remote-server criteria. Overall health: contributor interest is high, and review throughput looks like the bottleneck.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) Digest — 2026-11-27

## 1. Today's Overview
Activity is moderate and maintenance-driven. 11 issues and 4 PRs were updated in the last 24h, with no new releases. Six issues were closed on 2026-11-25, all but one in the `security-guidance` plugin. This looks like a batch fix, probably tied to the v0.13.1 security plugin work. New reports are still arriving, mainly about `security-guidance` and the `claude-security` GitHub Action. Automated SHA-bump PRs keep the marketplace pins moving, but the human-authored PR in the queue has been waiting since 2026-11-09.

## 2. Releases
No new releases.

## 3. Project Progress
- **Closed PR:** [#7224 Claude Security Plugin – v0.13.1](https://github.com/anthropics/claude-plugins-official/pull/7224) was closed on 2026-11-25. It has no description, so I can't tell whether it was merged or abandoned. The same day, the related [#7223](https://github.com/anthropics/claude-plugins-official/issues/7223) was reported against v0.13.0.
- **Batch of `security-guidance` issues closed on 2026-11-25.** These cover Codex hook-schema incompatibilities, hook timeouts, and Windows and temp-file problems:
  - [#6550](https://github.com/anthropics/claude-plugins-official/issues/6550): SessionStart emits JSON that Codex rejects.
  - [#6403](https://github.com/anthropics/claude-plugins-official/issues/6403) and [#6371](https://github.com/anthropics/claude-plugins-official/issues/6371): Stop hook JSON fails Codex validation.
  - [#6348](https://github.com/anthropics/claude-plugins-official/issues/6348): PostToolUse hooks have no `timeout`, so a hung hook blocks every Edit/Write for 600 s.
  - [#6979](https://github.com/anthropics/claude-plugins-official/issues/6979): a timed-out SDK install leaves pip downloads in `$TMPDIR` (8.96 GB in 20 h).
  - [#7172](https://github.com/anthropics/claude-plugins-official/issues/7172): `sg-python.sh` creates a stray `(3` file on Windows with pyenv-win.
- **Open automated PRs:** [#7225](https://github.com/anthropics/claude-plugins-official/pull/7225) (`deploy-on-aws`) and [#7226](https://github.com/anthropics/claude-plugins-official/pull/7226) (`servicenow-sdk`) are SHA bumps. Both passed `claude plugin validate` and are waiting for review or merge.

## 4. Community Hot Topics
Engagement is low overall. The highest comment counts are 3 and 2, and the highest reaction count is 1.
- [#6550](https://github.com/anthropics/claude-plugins-official/issues/6550) has 3 comments. It points to a need for cross-agent portability: `security-guidance` is now run under **Codex CLI**, not just Claude Code, so hook output has to match both schemas.
- [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) has 2 comments and 1 👍. Users want marketplace pins kept current with upstream fixes.
- [#6348](https://github.com/anthropics/claude-plugins-official/issues/6348) has 2 comments and 1 👍. Users want hook execution to be bounded and predictable.
- [#6403](https://github.com/anthropics/claude-plugins-official/issues/6403) and [#6371](https://github.com/anthropics/claude-plugins-official/issues/6371) each have 2 comments.

## 5. Bugs & Stability
Ranked by severity:
1. **[#7223](https://github.com/anthropics/claude-plugins-official/issues/7223) (open):** every PR scan with the `claude-security` v0.13.0 GitHub Action fails with HTTP 400 (`sandbox: refused a call…`) about 10 s in. The action is unusable for this reporter. The closed v0.13.1 PR may be related, but nothing confirms it. No fix is confirmed.
2. **[#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) (open):** the `remember` marketplace entry pins v0.43.1. On Windows with Git Bash, that version's PostToolUse hook hangs until the 600 s timeout. v0.43.2 has the fix, and v0.44.1 is the latest. The fix is to update the pin, and no PR exists yet.
3. **[#3937](https://github.com/anthropics/claude-plugins-official/issues/3937) (open, since 2026-07-10):** an orphaned `bun server.ts` for the iMessage plugin busy-loops at roughly 75% CPU after the parent session dies. In one case it used 170 CPU-minutes over 3.5 h. The stdin-EOF shutdown path can't fire. No fix PR is listed.
4. **[#7227](https://github.com/anthropics/claude-plugins-official/issues/7227) (open):** the `child_process_exec` rule uses substring matching, so it also flags `execFile` and `execFileSync`, which are the calls its own reminder recommends. This produces false positives and is low severity.
5. **Telegram plugin:** [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048) is a draft containing six fixes for messages that never arrive. Commit 1 is marked as the most urgent.

## 6. Feature Requests & Roadmap Signals
- [#7222](https://github.com/anthropics/claude-plugins-official/issues/7222) asks for the `brainstorming` HARD-GATE to stop routing unconditionally to `writing-plans`. Domain plugins could then register more specific implementation skills. This is a design-level change to the superpowers skills and is unlikely to ship soon.
- The Codex-compatibility fixes closed today suggest that multi-agent-host support is an ongoing priority.
- Expect more routine SHA bumps and a possible `remember` pin update. A fix for the `claude-security` Action is also likely, given it breaks all PR scans.

## 7. User Feedback Summary
- **Windows users** are hit hardest. Issues #6348, #6963, #7172 and #6371 involve Git Bash, pyenv-win, or Windows Python launchers.
- Users dislike silent resource problems, such as 600 s hangs, retries every 5 min that accumulate 8.96 GB of temp files, and CPU spin from orphaned processes.
- Users run the plugins under non-Claude hosts like Codex, which exposes schema strictness.
- Users reported issues with technical detail, and many were closed within about 3 weeks. Responsiveness on `security-guidance` appears good.

## 8. Backlog Watch
- [#3937](https://github.com/anthropics/claude-plugins-official/issues/3937) has been open since 2026-07-10 (about 4.5 months). It involves runaway CPU use and has no visible fix.
- [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) has been open since 2026-10-31. The fix is a one-line pin bump, and the pin is about a month behind upstream.
- [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048) has been a draft since 2026-11-09. The author offered to split it into six PRs and is waiting on the maintainers' direction.
- [#7223](https://github.com/anthropics/claude-plugins-official/issues/7223) is new but blocks all PR scans. It needs a maintainer response soon.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-27

## 1. Today's Overview
The project is in a **submission-intake phase**: no issues and no releases in the last 24h, but 11 PRs were updated (10 open, 1 closed). Almost all of them are community "add skill" requests. None have comments or reactions, and none were merged today, so the maintainer review queue is growing. Activity is steady and contributor-driven. Maintainer throughput is the limiting factor.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One PR was closed without a visible merge:
- [#1460](https://github.com/VoltAgent/awesome-agent-skills/pull/1460) — *Add skill: Reggiebro/oppi-digital-products* (Marketing). Created 2026-11-21, closed 2026-11-26. The data doesn't say why it was closed. The PR body mentions "AI-assisted PR", so a quality or policy screen is plausible, but that's an inference.

No list content or tooling advanced today.

## 4. Community Hot Topics
No PR or issue has comments or 👍 reactions, so nothing is "hot" by engagement. Submissions cluster in these categories:
- **Productivity and Collaboration** (4): [#1498](https://github.com/VoltAgent/awesome-agent-skills/pull/1498) Silicon Café, [#1496](https://github.com/VoltAgent/awesome-agent-skills/pull/1496) kinlace/parent-recap, [#1495](https://github.com/VoltAgent/awesome-agent-skills/pull/1495) selfishprimate/seekter, [#1493](https://github.com/VoltAgent/awesome-agent-skills/pull/1493) ElliotJLT/dog-years.
- **Specialized Domains** (3): [#1494](https://github.com/VoltAgent/awesome-agent-skills/pull/1494) taxrail (US/Brazil crypto tax), [#1492](https://github.com/VoltAgent/awesome-agent-skills/pull/1492) buscador-uruguay, [#1497](https://github.com/VoltAgent/awesome-agent-skills/pull/1497) CSS-Electronics/cansub-reverse-engineering (CAN bus to DBC). The category for #1497 isn't stated.
- **Context Engineering** (1): [#1489](https://github.com/VoltAgent/awesome-agent-skills/pull/1489) Protocol-zero-0/compound-memory (349 stars, MIT, covers Claude Code, Codex CLI and DeepSeek Harness).
- **Developer docs** (1): [#1491](https://github.com/VoltAgent/awesome-agent-skills/pull/1491) BingoWon/apple-dev-docs (117+ stars, MCP and CLI).
- **Platform or promotional** (1): [#1490](https://github.com/VoltAgent/awesome-agent-skills/pull/1490) MindPal "Deploy on MindPal". It is a vendor integration rather than a single skill.

The underlying needs are visibility for niche vertical skills, such as parenting in Finland, Uruguay search, crypto tax and automotive CAN bus. Authors also want cross-agent compatibility (Claude Code, Codex, DeepSeek) and discovery through a curated list.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There are no issues at all in the window.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Implicit signals:
- **Multi-agent portability.** Skills now target Codex CLI, DeepSeek and MCP or CLI dual modes, not only Claude Code. A "compatible agents" tag or column could follow.
- **Vendor and platform entries** like [#1490](https://github.com/VoltAgent/awesome-agent-skills/pull/1490) test the list's scope. The maintainers will likely need to decide whether to accept non-skill platform integrations.
- **Growing domain verticals** (finance, regional services, hardware) may justify new subcategories.

## 7. User Feedback Summary
Contributors say they value the list as a discovery channel. For example, #1490 says "it's how a lot of people find skills". Several submissions stress credibility signals, such as stars, MIT license, CI tests and PyPI publishing. One disclosed AI-assisted authorship (#1460). No dissatisfaction has been expressed. No one has commented on the review process, so nothing in the data shows pain points with it.

## 8. Backlog Watch
- Ten open PRs ([#1489](https://github.com/VoltAgent/awesome-agent-skills/pull/1489)–[#1498](https://github.com/VoltAgent/awesome-agent-skills/pull/1498), plus any older ones not in this window) all have zero comments. This shows no maintainer engagement in the window. The oldest in this window, #1489 and #1490, are from 2026-11-25.
- [#1490](https://github.com/VoltAgent/awesome-agent-skills/pull/1490) needs a maintainer policy decision on scope.
- [#1460](https://github.com/VoltAgent/awesome-agent-skills/pull/1460) was closed without any recorded comment. A short explanation would help contributors and set expectations.
- The data only covers the last 24h, so I can't judge older backlog depth. The PR numbering (#1489–#1498 within about two days) suggests roughly 4–5 new submissions per day.

**Health assessment:** Contributor interest is strong and the project is active, but review latency is a risk. A triage pass or contribution-quality checklist would help.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
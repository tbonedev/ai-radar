# MCP Ecosystem Digest 2026-11-22

> Issues: 6 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-22 15:00 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest: 2026-11-22

## 1. Today's Overview
Activity is low-to-moderate: 6 issues were updated in the last 24h (all open, none closed), with no PR activity and no new releases. Four of the six issues come from one author (reservoir-cmyk), who is proposing test-coverage work for the `memory` and `everything` servers. The other two are a concrete `git` server bug and a `git` schema-quality enhancement. With no PRs moving, the project appears to be in a triage or backlog-accumulation phase, not an active merge phase.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24h, so no features or fixes landed. The only progress signal is issue-side. Issue #5647 refers to prior work, #5475, which described every input property in the filesystem, memory and everything servers.

## 4. Community Hot Topics
All items have low engagement (0 👍, 1–2 comments), so "hot" here is relative.

| Issue | Comments | Theme |
|---|---|---|
| [#5646](modelcontextprotocol/servers Issue #5646) everything: error paths carry no credential values | 2 | Security hardening tests |
| [#5641](modelcontextprotocol/servers Issue #5641) git: `git_branch` leaks `* ` prefix | 2 | Functional bug |
| [#5644](modelcontextprotocol/servers Issue #5644) memory: graph file path as symlink | 2 | Edge-case tests |
| [#5643](modelcontextprotocol/servers Issue #5643) memory: names as exact byte strings | 1 | Characterization tests |
| [#5645](modelcontextprotocol/servers Issue #5645) memory: neighbouring faces of pinned invariants | 1 | Edge-case tests |
| [#5647](modelcontextprotocol/servers Issue #5647) git: 21 of 32 tool input properties undocumented | 1 | Schema documentation |

**Underlying needs:**
- Contributors want the reference servers' behavior pinned by tests, especially for security-sensitive and edge-case paths: credential masking, symlinks, Unicode normalization, and NUL bytes.
- Users want the `git` server to reach parity with the other reference servers on tool-schema quality.

## 5. Bugs & Stability
Ranked by severity:

1. **[#5641](modelcontextprotocol/servers Issue #5641): `git_branch` leaks the CLI `* ` prefix.** This is a functional bug. The current-branch marker is returned as part of the branch name, which breaks downstream `git_checkout`, `git_diff`, `git_show` and `git_merge` when the model passes the name back. It was reported on mcp-server-git 2026.11.18 (PyPI), stdio transport, with Python SDK 2.3.0. No fix PR exists.
2. **[#5646](modelcontextprotocol/servers Issue #5646): possible credential exposure on error paths in `everything`.** This is a test-gap issue, not a confirmed leak. The `get-env` masking contract is only tested on the success path, so validation errors, refusals or error-handler serialization could expose secrets without any test failing. No fix PR exists.
3. **[#5644](modelcontextprotocol/servers Issue #5644), [#5643](modelcontextprotocol/servers Issue #5643), [#5645](modelcontextprotocol/servers Issue #5645): `memory` edge-case coverage gaps.** These are unverified behaviors with possible data-integrity impact. A symlinked graph file would be replaced by the atomic rename on write instead of its target being updated. NFC/NFD name handling, NUL bytes and whitespace exact-match deletion are also untested.

## 6. Feature Requests & Roadmap Signals
- **[#5647](modelcontextprotocol/servers Issue #5647)** asks for descriptions on 21 of 32 `git` tool input properties. It is labeled `enhancement, v2` and targets the Modern (2026-07-28) protocol era. It follows #3669, which was closed by #5475 for the other three servers. It is a low-risk, mechanical change and a likely candidate for a quick contributor PR.
- The test-coverage proposals (#5643–#5646) are likely to be accepted. Such tests are cheap to review and carry little regression risk. If the symlink or normalization tests turn up behavior the maintainers consider wrong, they could turn into bug fixes.

## 7. User Feedback Summary
- **LLM-client users of `git`:** the `* ` prefix makes `git_branch` output unusable as input to other tools, which breaks the common "list branches, then check out" workflow.
- **Tool-schema consumers:** undocumented parameters leave models guessing at arguments and make correct tool use less likely.
- **Operators:** symlinked data paths, such as a memory file on another volume or in a backup location, are routine, and the current behavior is unspecified.
- No satisfaction or dissatisfaction signal appears in the reactions, which are all 0.

## 8. Backlog Watch
The data shows only items created 2026-11-20 to 2026-11-21, so no long-stale items can be identified from this snapshot. Items that need maintainer attention:
- **[#5641](modelcontextprotocol/servers Issue #5641):** needs triage and a fix, since it is a reproducible bug in a published PyPI package.
- **[#5647](modelcontextprotocol/servers Issue #5647):** needs a decision on scope for the `git` server's v2 schema work.
- **#5643–#5646:** four related proposals from one author could be consolidated or batch-reviewed to avoid fragmented review effort.

**Health assessment:** Community engagement exists, with contributors scrutinizing edge cases. But there were no merges or releases today, and reviewer bandwidth looks like the bottleneck.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP Ecosystem, 2026-11-22

**Scope note:** The digests cover MCP infrastructure and catalog projects, not personal AI assistants or agents. The report follows the requested structure, but it describes the MCP tooling layer. Awesome Claude Code had no activity and is excluded from comparisons. Comment counts were missing for several projects, so engagement is judged by volume and content.

## 1. Ecosystem Overview
The MCP ecosystem is now mostly a **distribution and trust layer**. Most activity is not new protocol code. It is submissions to catalogs (Awesome MCP Servers had 166 PRs updated, Docker MCP Registry 50, Awesome Agent Skills 3) and supply-chain hardening in the official registry (OSV malware sweeps, owner-change checks). The reference servers are quiet: 6 issues, 0 PRs, 0 releases. Remote, OAuth-based servers over Streamable HTTP are becoming the default submission type. Governance and policy are a growing friction point, as the 41-comment Verified-organization thread in Claude Plugins shows.

## 2. Activity Comparison

| Project | Issues | PRs | Release | Health (my assessment) |
|---|---|---|---|---|
| MCP Servers (reference) | 6 (all open) | 0 | None | **Fair.** Engaged contributors, but nothing merged. Reviewer bandwidth looks like the bottleneck. |
| MCP Registry | 0 | 14 (1 open, 13 merged or closed) | **v1.8.12** | **Strong.** Fast release-to-production cadence, but almost entirely maintainer-driven. |
| Awesome MCP Servers | 0 | 166 (156 open) | None (list repo) | **Fair.** High inflow, large backlog, and the top 20 shown had no merges. |
| Docker MCP Registry | 0 | 50 (46 open) | None | **Fair.** Strong submission interest, but 46 open against 4 closed, and some PRs are 5+ weeks old. |
| Claude Plugins (official) | 6 (all open) | 0 | None | **Weak to fair.** Low maintainer throughput and no visible responses. #7024 is unanswered, and #907 is about 8 months old. |
| Awesome Agent Skills | 0 | 3 (all open) | None | **Fair.** Low volume, no maintainer activity visible, and nothing is overdue. |
| Awesome Claude Code | n/a | n/a | n/a | No activity. |

The health scores are my own judgment from the digests, not computed metrics.

## 3. MCP Servers's Position

**Advantages**
- It is the canonical reference implementation. Its issues set the quality bar for other servers: #5647 asks the `git` server to match the schema documentation that #5475 gave the filesystem, memory and everything servers.
- It is the only project in this set that deals with server behavior directly, such as the `git_branch` bug and the credential-masking tests. The other projects process listings.

**Technical differences**
- It ships code (Python and TypeScript servers on PyPI and npm). The registries and awesome lists only index or distribute metadata.
- It is on the protocol-versioning path: #5647 targets the "Modern (2026-07-28)" protocol era.

**Community size**
- It is the smallest by volume (6 issues, 0 PRs) but the most technically substantive per item. Awesome MCP Servers is about 28 times larger by PR count (166 vs. 6 issues and 0 PRs), though most of that is submissions.
- Four of its six items come from one author, so the contributor base looks narrow today.

**Risks**
- #5641 is a reproducible bug in a published package, with no fix PR.
- Zero merges today suggest a review bottleneck.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| **Remote servers with OAuth** | Docker MCP Registry, Awesome MCP Servers | Streamable HTTP, OAuth 2.1 with PKCE and dynamic client registration, and header or no-auth modes. |
| **Supply-chain trust** | MCP Registry, Claude Plugins | OSV malware checks (npm, PyPI, NuGet, Cargo), owner-change and removed-package detection, and the Verified-org rule restricting `command` hooks and local MCP servers. |
| **Tool-schema quality** | MCP Servers, Docker MCP Registry | Undocumented `git` parameters (#5647). Empty `tools.json` with dynamic discovery. |
| **Review throughput and automation** | Awesome MCP Servers, Docker MCP Registry, Awesome Agent Skills, MCP Servers | Label triage (`has-glama`, `valid-name`), one-server-per-PR rules, and requests for batch review. |
| **Verifiability and testing** | MCP Servers, Awesome Agent Skills | Edge-case tests (symlinks, Unicode, credential masking) and skills built on falsifiable task contracts or screenshot QA. |
| **Toolchain drift** | Claude Plugins, MCP Servers | TypeScript 7 and Bun support (#7197). Windows gaps (#907). |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference server behavior | Server authors and client integrators | Code in Python and TypeScript, shipped to PyPI and npm |
| MCP Registry | Official catalog, security, operations | Operators and publishers | Go service on Pulumi and Grafana, OSV sweeps, daily jobs |
| Awesome MCP Servers | Curated list | Discovery by developers | Markdown with label automation and Glama listing checks |
| Docker MCP Registry | Catalog for Docker's ecosystem | SaaS vendors and Docker users | `server.yaml`, `tools.json` and `readme.md`, mostly remote entries without images |
| Claude Plugins | Plugin directory with policy gating | Claude Code plugin authors | Hooks, local MCP servers and LSP plugins, gated by Verified status |
| Awesome Agent Skills | Curated skills list | Skill authors for Claude Code and Codex | Markdown list |

The registry in the MCP project has the strongest security engineering. The Docker registry is the most vendor-oriented. Claude Plugins is the most policy-constrained.

## 6. Community Momentum & Maturity

- **Tier 1, rapidly iterating:** MCP Registry. It had 14 PRs and a release in one day, with a same-day production rollout. Its momentum comes from maintainers, with little outside input.
- **Tier 2, high inflow, constrained review:** Awesome MCP Servers (166 PRs) and Docker MCP Registry (50 PRs). Demand outpaces merges.
- **Tier 3, stabilizing or quiet:** MCP Servers (backlog and edge-case hardening) and Awesome Agent Skills (low-volume inflow).
- **Tier 4, stalled or policy-blocked:** Claude Plugins (no PRs, an unanswered policy thread) and Awesome Claude Code (no activity).

The reference servers look mature, since contributors are now pinning edge cases. The registry is maturing through operational work such as alerts and dashboards.

## 7. Trend Signals

1. **Remote-first MCP.** SaaS vendors choose hosted servers with OAuth over containers. *For developers:* design for Streamable HTTP and OAuth 2.1 first, and treat local stdio as the secondary path.
2. **Supply-chain security is becoming table stakes.** Malware sweeps, owner-change checks and verification gates are arriving. *For developers:* expect scans on publish, and plan for OCI images and MCPB bundles, which OSV does not cover.
3. **Policy before documentation.** The Verified-org rule was enforced ahead of its docs (#7024). *For developers:* avoid hard dependencies on `command` hooks and local MCP servers if you are not a Verified org.
4. **Schema quality affects agent reliability.** Undocumented parameters make models guess. *For developers:* describe every input property, and test that tool output can be fed back as input (#5641).
5. **Curation does not scale linearly.** Catalog queues are growing faster than they are reviewed. *For developers:* expect delays and pass the automated checks (Glama listing, naming, one server per PR) up front.
6. **Toolchain churn.** TypeScript 7 removes `tsserver.js`. *For developers:* test plugins against new runtimes, and set resource limits such as `maxTsServerMemory`.

**Caveats:** The data is a single-day snapshot. Awesome MCP Servers and Docker MCP Registry were limited to the top 20 PRs, and comment counts were missing. Health scores and trend statements are inferences, not measurements.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest, 2026-11-22

## 1. Today's Overview
Activity was high and almost entirely maintainer-driven. 14 PRs were updated in 24h (1 open, 13 merged or closed) and no issues were touched. The v1.8.12 release shipped, and **rdimitrov** authored 11 of the 14 PRs. The work centers on operations: a malware sweep that checks registry packages against OSV, production rollouts, alerting, and dashboards. Project health looks good, with fast release-to-production cadence. External community activity was minimal.

## 2. Releases
**v1.8.12** (the release notes shown are truncated):
- Promoted v1.8.11 to production and enabled the usage collector ([#1886](https://github.com/modelcontextprotocol/registry/pull/1886)).
- Removed four redundant dashboard panels ([#1887](https://github.com/modelcontextprotocol/registry/pull/1887)).
- The release also carries the OSV malware checks ([#1889](https://github.com/modelcontextprotocol/registry/pull/1889)), which [#1891](https://github.com/modelcontextprotocol/registry/pull/1891) says need `imageTag` 1.8.12 or later.
- No breaking changes are stated in the data. Operators who run their own stack must set `imageTag` to 1.8.12 or later to enable the sweep ([#1892](https://github.com/modelcontextprotocol/registry/pull/1892)).

## 3. Project Progress
**Malware and package integrity**
- [#1889](https://github.com/modelcontextprotocol/registry/pull/1889) (closed): checks packages against OSV `MAL-*` records on publish and daily. It covers npm, PyPI, NuGet and Cargo. OCI images and MCPB bundles are not covered because OSV has no ecosystem for them.
- [#1895](https://github.com/modelcontextprotocol/registry/pull/1895) (closed): the sweep now reports entries whose package has been removed from its registry and ends each run with a single report.
- [#1894](https://github.com/modelcontextprotocol/registry/pull/1894) (closed): malware alert email subjects now start with the cluster name, for example `[mcp-registry-prod]`. This separates staging from production alerts that go to the same address.

**Deployment**
- [#1891](https://github.com/modelcontextprotocol/registry/pull/1891): promotes production to v1.8.12 and turns on `malwareSweep`.
- [#1886](https://github.com/modelcontextprotocol/registry/pull/1886): promotes production to v1.8.11 and turns on `usageCollector`.
- [#1888](https://github.com/modelcontextprotocol/registry/pull/1888): adds the Discord alert webhook secret so production's alert rules and contact point are managed from the repo.
- [#1892](https://github.com/modelcontextprotocol/registry/pull/1892): documentation update, so `deploy/README.md` now describes the sweep as running in staging and production.

**Observability**
- [#1890](https://github.com/modelcontextprotocol/registry/pull/1890): alerts when the usage-history backup hasn't succeeded in a day.
- [#1893](https://github.com/modelcontextprotocol/registry/pull/1893): fixes and tidies the three operational Grafana dashboards. Dashboard uids and alert-linked panel ids are unchanged.
- [#1887](https://github.com/modelcontextprotocol/registry/pull/1887): removes four panels that duplicated their neighbours.

**Dependencies and catalogue**
- Dependabot bumps closed: [#1867](https://github.com/modelcontextprotocol/registry/pull/1867) (deploy Go deps, including Pulumi SDK 3.274.1 → 3.276.0) and [#1879](https://github.com/modelcontextprotocol/registry/pull/1879) (5 Go updates).
- [#1816](https://github.com/modelcontextprotocol/registry/pull/1816) (closed): a third-party PR adding CrakSEO agent skills. The data doesn't say whether it was merged or rejected.

**Still open:** [#1896](https://github.com/modelcontextprotocol/registry/pull/1896) extends the daily sweep. For each server's latest version it re-checks the release and its owner. It addresses a package that reappears under a different owner, an entry whose named release is missing, and images, which the sweep did not look at before.

## 4. Community Hot Topics
No PR or issue has recorded comments or 👍 reactions (all 0; comment counts are undefined). The most significant threads are the supply-chain items, [#1889](https://github.com/modelcontextprotocol/registry/pull/1889), [#1895](https://github.com/modelcontextprotocol/registry/pull/1895) and [#1896](https://github.com/modelcontextprotocol/registry/pull/1896). They point to a need to trust what registry entries reference, particularly after a package is removed or changes owner.

## 5. Bugs & Stability
No bugs were reported, since there were no issues. Stability signals:
- **Gap closed:** a failed nightly usage backup previously raised no alert ([#1890](https://github.com/modelcontextprotocol/registry/pull/1890)).
- **Dashboard panels corrected:** some panels couldn't show what their titles said ([#1893](https://github.com/modelcontextprotocol/registry/pull/1893)).
- **Remaining blind spots:** OCI images and MCPB bundles are not scanned by OSV. [#1896](https://github.com/modelcontextprotocol/registry/pull/1896) begins to address images.
- **Rollout risk:** [#1886](https://github.com/modelcontextprotocol/registry/pull/1886) and [#1891](https://github.com/modelcontextprotocol/registry/pull/1891) both deploy directly to production on merge. Both were completed the same day.

## 6. Feature Requests & Roadmap Signals
No user requests were filed. Maintainer signals for the next release:
- [#1896](https://github.com/modelcontextprotocol/registry/pull/1896) is the likely next feature. It adds owner-change detection, release-existence checks and image checks.
- Further monitoring and alert-rule work is probable now that the Discord contact point is configured.
- Coverage for OCI and MCPB packages is a likely longer-term gap.

## 7. User Feedback Summary
No direct user feedback was posted. Operator-side pain points show up in the PR descriptions:
- Malware findings were previously reported one log line at a time.
- Entries could point at removed packages without anyone being told.
- Staging and production alerts were hard to tell apart.

## 8. Backlog Watch
- No issues appear in the data, so no issue backlog can be assessed.
- [#1816](https://github.com/modelcontextprotocol/registry/pull/1816) was open from 2026-11-07 to 2026-11-21, about two weeks, and shows no recorded comments. External contributions look slower to get attention than maintainer PRs. A written policy on third-party skills or listings would help contributors.
- [#1896](https://github.com/modelcontextprotocol/registry/pull/1896) needs review before the next release.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-22

## 1. Today's Overview
Activity is high but almost entirely inbound submissions. 166 PRs were updated in the last 24h (156 open, 10 merged/closed), with no issues and no releases. The visible top-20 is dominated by a single batch of one-line README additions from `acedatacloud-dev`, which split an earlier bundle PR (#10959) into per-server PRs, following the maintainer guidance in #15783. The comment counts are reported as "undefined", so engagement cannot be ranked. This is a curation backlog, not a development stream, and review throughput looks like the main constraint.

## 2. Releases
None. This is a list repository, so there are no versioned releases.

## 3. Project Progress
The data lists 10 merged/closed PRs but gives no details for them. None of the top-20 shown were merged. I can't say which entries were added or removed today.

## 4. Community Hot Topics
Comment and reaction data is unavailable (comments: undefined, 👍: 0 everywhere), so "hot" here means volume and recurring patterns.

- **AceDataCloud batch (14 PRs, #20362–#20377):** the entries are AiChatMCP, GlmMCP, OpenAIMCP, AceDataCloudMCP, FishMCP, GrokMCP, HailuoMCP, HappyHorseMCP, KlingMCP, LumaMCP, MaestroMCP, MinimaxMCP, ProducerMCP, SeedanceMCP and VeoMCP. Examples: [#20377](https://github.com/punkpeye/awesome-mcp-servers/pull/20377), [#20375](https://github.com/punkpeye/awesome-mcp-servers/pull/20375), [#20364](https://github.com/punkpeye/awesome-mcp-servers/pull/20364). Most carry the `has-emoji, valid-name, has-glama` labels, which means they pass the automated checks. The need here is distribution for AI generation APIs (video, image, music, chat) exposed over MCP. It also shows contributors adapting to the one-server-per-PR rule.
- **Single-server submissions:** [#20373](https://github.com/punkpeye/awesome-mcp-servers/pull/20373) (Board as a Service, a multi-advisor decision-review tool), [#20361](https://github.com/punkpeye/awesome-mcp-servers/pull/20361) (SoloMotion, a local stdio server for a browser editor), [#20360](https://github.com/punkpeye/awesome-mcp-servers/pull/20360) (RuMCP, Yandex Metrika/Webmaster) and [#20359](https://github.com/punkpeye/awesome-mcp-servers/pull/20359) (dlt-doctor, Databricks Delta Live Tables analysis). Categories are wide-ranging: productivity, creative, marketing and data platforms.

## 5. Bugs & Stability
No issues or bug reports today. The data has no stability signals. The one maintenance-style item is [#17467](https://github.com/punkpeye/awesome-mcp-servers/pull/17467) (GridPin), which fixes a stale coverage list and is not a defect fix.

## 6. Feature Requests & Roadmap Signals
There are no feature requests, since there are no issues. Process signals:
- The one-server-per-PR policy ([#15783](https://github.com/punkpeye/awesome-mcp-servers/issues/15783)) is now shaping contributor behavior.
- The label automation (`has-glama`, `missing-glama`, `valid-name`, `has-emoji`, `duplicate`, `manual-review`) works as a triage pipeline. Expect continued reliance on it.
- Two PRs ([#20361](https://github.com/punkpeye/awesome-mcp-servers/pull/20361), [#20360](https://github.com/punkpeye/awesome-mcp-servers/pull/20360)) are labeled `missing-glama`, so they will likely need a Glama listing before they are merged.

## 7. User Feedback Summary
There is no direct user feedback, because there are no comments. Indirect signals:
- Contributors are willing to restructure submissions to comply with the rules, for example by splitting one PR into 14.
- Honest scoping appears in entries, such as RuMCP stating that its Wordstat and Direct connectors are planned and not shipped.
- A mix of local stdio servers and hosted, OAuth-based servers is being submitted, which points to demand for both deployment models.

## 8. Backlog Watch
- [#17467](https://github.com/punkpeye/awesome-mcp-servers/pull/17467) (GridPin coverage update): open since 2026-10-24 and updated today. It is labeled `duplicate`, `missing-glama` and `manual-review`, so it needs a maintainer decision.
- [#10959](https://github.com/punkpeye/awesome-mcp-servers/pull/10959): the original AceDataCloud bundle PR. It should probably be closed now that its contents were split out, to avoid duplicate entries.
- With 156 open PRs and a burst of 14 near-identical submissions from one author, maintainers may want to batch-review or batch-merge the validated ones to keep the queue from growing.

**Caveat:** this digest is based on the top 20 of 166 PRs, with no comment data and no details on the 10 merged/closed PRs. Conclusions about the rest of the queue are inferred.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-22

## 1. Today's Overview
The registry shows **PR-only activity** today. 50 PRs were updated, 46 open and 4 merged or closed. There were no issues and no releases. Most of the traffic is new submissions: many were opened today, and a few older ones were touched again (#5754, #5814, #6340). Almost all of the submissions are **remote MCP servers**, hosted over Streamable HTTP and usually with OAuth 2.1. Submission volume is high. The signal that matters for project health is the low number of merges against the number of open PRs.

## 2. Releases
No new releases.

## 3. Project Progress
- Only 4 PRs were merged or closed, and the data lists only one of them: [#7535](https://github.com/docker/mcp-registry/pull/7535) "Add official Kling AI Global and China MCP plugins" was **closed**. The summary doesn't say whether it was merged or rejected.
- The data doesn't identify the other three. I can't say which servers were added to the catalog today.
- Pending work is dominated by submissions of remote servers that ship `server.yaml`, `tools.json` and `readme.md` with no Docker image.

## 4. Community Hot Topics
The comment and reaction counts are all `undefined` or 0 in the data, so **no PR or issue can be ranked by engagement**. The themes below come from the content of the PRs.

| Theme | PRs |
|---|---|
| **Domain and web services** | [#7539](https://github.com/docker/mcp-registry/pull/7539) pfs-free-domains, [#7537](https://github.com/docker/mcp-registry/pull/7537) Namepraise |
| **Content and creative tools** | [#7536](https://github.com/docker/mcp-registry/pull/7536) Charmotion, [#7533](https://github.com/docker/mcp-registry/pull/7533) Mostly, [#7531](https://github.com/docker/mcp-registry/pull/7531) OpenSubtitles |
| **Developer and agent tooling** | [#7538](https://github.com/docker/mcp-registry/pull/7538) Grafizum, [#7529](https://github.com/docker/mcp-registry/pull/7529) Kliv, [#7527](https://github.com/docker/mcp-registry/pull/7527) LumiCloud, [#7457](https://github.com/docker/mcp-registry/pull/7457) nextmsg |
| **Finance, legal and security** | [#7532](https://github.com/docker/mcp-registry/pull/7532) Apiiro, [#7528](https://github.com/docker/mcp-registry/pull/7528) Fox Davidson, [#5814](https://github.com/docker/mcp-registry/pull/5814) eContract, [#6340](https://github.com/docker/mcp-registry/pull/6340) vedetta-mcp |
| **Travel and commerce** | [#7534](https://github.com/docker/mcp-registry/pull/7534) Go2Trip, [#7540](https://github.com/docker/mcp-registry/pull/7540) Babelii-Diofis |
| **Other** | [#7530](https://github.com/docker/mcp-registry/pull/7530) Right Suite, [#7526](https://github.com/docker/mcp-registry/pull/7526) Lode, [#7525](https://github.com/docker/mcp-registry/pull/7525) XSDHub |

**Underlying need:** SaaS vendors want their products reachable from agents through Docker's catalog. They are choosing **hosted remote servers** over containerised ones, because that avoids packaging and gives them OAuth-based auth.

## 4a. Bugs & Stability
No bugs, crashes or regressions were reported today, because there were no issues. [#6340](https://github.com/docker/mcp-registry/pull/6340) is a documentation sync only and touches no product code.

## 5. Feature Requests & Roadmap Signals
No feature requests were filed. The PR pattern suggests several things about the registry:
- **Remote servers are becoming the default submission type.** Streamable HTTP plus OAuth 2.1 with PKCE and dynamic client registration appears in #7536, #7529, #7533, #5814 and #7539.
- **Header or no-auth remote entries** also appear, for example #7527 (header auth), #7528 and #7526 (no auth) and #7525 (anonymous with limits). Registry tooling and docs for these auth modes will matter more as they become common.
- Contributors are shipping empty `tools.json` (`[]`) and relying on dynamic tool discovery, as in #7527 and #7535.

## 6. User Feedback Summary
There are no comments, so there is no direct feedback. The submissions point to these use cases:
- Agent-driven commerce and booking ([#7534](https://github.com/docker/mcp-registry/pull/7534), [#7540](https://github.com/docker/mcp-registry/pull/7540)).
- Agent notifications and sandboxes ([#7457](https://github.com/docker/mcp-registry/pull/7457), [#7527](https://github.com/docker/mcp-registry/pull/7527)).
- Vertical data in regulated fields such as mortgages, e-signatures and application security.

## 7. Backlog Watch
Several older PRs were still open and needed maintainer attention:
- [#5754](https://github.com/docker/mcp-registry/pull/5754) GridPin offline geocoding, opened **2026-10-16**, now more than 5 weeks old.
- [#5814](https://github.com/docker/mcp-registry/pull/5814) eContract, opened **2026-10-18**.
- [#6340](https://github.com/docker/mcp-registry/pull/6340) vedetta-mcp, opened **2026-10-29**.
- [#7457](https://github.com/docker/mcp-registry/pull/7457) nextmsg, opened **2026-11-20**.

**Health assessment:** Contributor interest is strong, but review throughput looks like a bottleneck. About 46 open PRs against 4 closed or merged today, plus submissions that are weeks old, suggest a growing queue. Without a visible comment count, I can't tell whether reviewers are engaging at all. Maintainers could use automated validation, labels and triage for remote-server PRs to clear the backlog faster.

**Data caveat:** Only the top 20 of 50 PRs were provided, and comment counts were `undefined`. The conclusions above are therefore partial.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-11-22
Repo: github.com/anthropics/claude-plugins-official

## 1. Today's Overview
Activity is low and issue-only. 6 issues were updated in the last 24h, all open. There were no PRs, no merges and no releases, so nothing shipped today. The only item with real traction is the Verified-organization policy thread (#7024, 41 comments, 15 👍). The rest are `typescript-lsp` compatibility and resource issues, a Windows hook bug, and two apparent noise or accidental posts.

## 2. Releases
None.

## 3. Project Progress
No PRs were updated, merged or closed in the last 24h, so no fixes or features advanced. None of the open bugs below has a linked fix PR.

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): how can an organization become Verified? (41 comments, 15 👍).**
  - Since about 2026-11-05 the directory has rejected `command` hooks and local MCP servers from non-Verified organizations.
  - The pre-submission docs reportedly don't explain the Verified process.
  - The underlying need is a documented, transparent verification path. Without one, plugin authors whose plugins depend on hooks or local MCP servers are blocked.
  - The thread is still active (updated 2026-11-21), which suggests a maintainer response is still outstanding.
- **[#7197](https://github.com/anthropics/claude-plugins-official/issues/7197): typescript-lsp fails with TypeScript 7 (1 comment).**
  - TypeScript 7 is the native Go port and ships no `tsserver.js`. `typescript-language-server` therefore can't find a usable install and the plugin fails to start.
  - The title also asks for Bun support.
  - This signals ecosystem drift as TS 7 adoption grows.

## 5. Bugs & Stability
Ranked by severity:
1. **[#7197](https://github.com/anthropics/claude-plugins-official/issues/7197)**: `typescript-lsp` 1.0.0 fails to start on TS 7-only environments. This is a hard failure, and it will affect more users as TS 7 spreads. No fix PR.
2. **[#6800](https://github.com/anthropics/claude-plugins-official/issues/6800)**: `tsserver` runs with no memory cap, using 2-4 GB per Claude Code session on mid-size monorepos. The proposed fix is a default `maxTsServerMemory`. This is a resource risk with multiple concurrent sessions. No fix PR.
3. **[#907](https://github.com/anthropics/claude-plugins-official/issues/907)**: the Vercel plugin's `session-start-profiler.mjs` falsely reports the CLI as "not installed" on Windows 11 (Git Bash), because `accessSync(X_OK)` fails. This is a false-positive warning on every session start and does not block use. It has been open since 2026-03-22, about 8 months, and was updated today.

## 6. Feature Requests & Roadmap Signals
- TypeScript 7 and Bun support for `typescript-lsp` ([#7197](https://github.com/anthropics/claude-plugins-official/issues/7197)).
- A default `maxTsServerMemory` setting ([#6800](https://github.com/anthropics/claude-plugins-official/issues/6800)).
- A documented Verified-organization process ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)).

Prediction: the `typescript-lsp` changes are the likeliest to land first. The memory cap is a small configuration change, and TS 7 compatibility is increasingly pressing. The Verified program depends on a policy decision, so it is harder to forecast.

## 7. User Feedback Summary
- Third-party plugin authors are frustrated by an enforcement rule that appears to have been introduced before its documentation. They can't tell how to comply.
- TypeScript users want the LSP plugin to behave well on large monorepos and on newer toolchains such as TS 7 and Bun.
- Windows users are hitting platform-specific gaps in plugin hooks (#907).
- [#7200](https://github.com/anthropics/claude-plugins-official/issues/7200) ("Code Claude", empty body) and [#7199](https://github.com/anthropics/claude-plugins-official/issues/7199) ("connect", a PowerShell `GITHUB_PAT` snippet) look like misplaced or accidental posts. They suggest users are confusing this repo with a support channel.
  - #7199 may contain a token placeholder. It reads "paste-your-token-here", so it is probably not a real secret, but maintainers should check.

## 8. Backlog Watch
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** needs a maintainer response. It has 41 comments and 15 👍, it blocks plugin submissions, and it has been open about 16 days.
- **[#907](https://github.com/anthropics/claude-plugins-official/issues/907)** is a Windows bug that has gone about 8 months without a visible fix.
- **[#6800](https://github.com/anthropics/claude-plugins-official/issues/6800)** has been open about a month with no maintainer action visible in the data.
- **[#7199](https://github.com/anthropics/claude-plugins-official/issues/7199)** and **[#7200](https://github.com/anthropics/claude-plugins-official/issues/7200)** can be triaged or closed.

**Project health:** Maintainer throughput looks low today, with no PRs and no visible responses. Community demand is concentrated on policy clarity (Verified status) and `typescript-lsp` robustness.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-22

## 1. Today's Overview
Activity was low and limited to contributions. In the last 24h there were 0 issues, 0 releases and 3 PRs updated, all open and all new submissions to the curated list. No PRs were merged or closed, and none have comments or reactions yet. This is steady community inflow, but there is no maintainer activity visible in this window.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. The three open PRs are pending review:
- [#1466](https://github.com/VoltAgent/awesome-agent-skills/pull/1466): adds `abdiraimov-otabek/dashboard-design-skill` under Development and Testing.
- [#1465](https://github.com/VoltAgent/awesome-agent-skills/pull/1465): adds `Kosmoray/dayan-wenzhen` under Context Engineering.
- [#1464](https://github.com/VoltAgent/awesome-agent-skills/pull/1464): adds `CHSZLab/aae` under Community Skills > Development and Testing.

## 4. Community Hot Topics
No PR has measurable engagement (0 👍, no comments reported), so there is no hot topic. The submissions suggest where contributor interest lies:
- **Frontend/UI skills.** [#1466](https://github.com/VoltAgent/awesome-agent-skills/pull/1466) is a dashboard design skill covering web and SwiftUI. It includes KPI cards, charts, filters, and a screenshot QA pass. It is MIT-licensed.
- **Context engineering and verification.** [#1465](https://github.com/VoltAgent/awesome-agent-skills/pull/1465) turns vague requests into falsifiable task contracts, with an offline Python verifier.
- **Systematic code optimization.** [#1464](https://github.com/VoltAgent/awesome-agent-skills/pull/1464) applies the Algorithm Engineering cycle (hypothesis-driven) to existing code bases, for Claude Code and Codex.

The common theme is skills that make agent output verifiable or testable, using falsifiable hypotheses, task contracts, or screenshot QA.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no issues in the window.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests. The only signal is that the list's categories keep growing, with Development and Testing and Context Engineering receiving new entries. Acceptance of these PRs depends on maintainer review, so nothing can be predicted about timing.

## 7. User Feedback Summary
There is no direct user feedback. The submissions imply that contributors want to:
- promote their own skills to a widely seen directory,
- cover both Claude Code and Codex ecosystems ([#1464](https://github.com/VoltAgent/awesome-agent-skills/pull/1464)),
- use free, openly licensed skills ([#1466](https://github.com/VoltAgent/awesome-agent-skills/pull/1466)).

## 8. Backlog Watch
All three PRs are under 2 days old, so none is overdue. The risk is accumulation: the PR numbers are already above #1460, and with no merges visible today the queue could grow. Maintainers should watch these:
- [#1464](https://github.com/VoltAgent/awesome-agent-skills/pull/1464): oldest of the three (created 2026-11-21).
- [#1465](https://github.com/VoltAgent/awesome-agent-skills/pull/1465) and [#1466](https://github.com/VoltAgent/awesome-agent-skills/pull/1466): both created 2026-11-22.

No older issues or PRs were included in this data, so a wider backlog check isn't possible from this snapshot.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
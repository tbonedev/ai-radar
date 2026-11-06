# MCP Ecosystem Digest 2026-11-06

> Issues: 3 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-06 14:45 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-06

## 1. Today's Overview
Activity in modelcontextprotocol/servers was very low over the last 24 hours. Three issues were updated, all still open. No PRs were updated and no releases were published. One of the three issues is spam or noise, and the other two are repository-hygiene and packaging reports. There is no sign of active feature development or of a maintainer response today, so project health is neutral. This looks like a quiet day, not a period of instability.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. #5483 describes a documentation/Dockerfile fix, but it was filed as an issue and has no linked PR.

## 4. Community Hot Topics
No item has any comments or 👍 reactions, so there are no hot topics. The items with the most substance:
- **[#5482](https://github.com/modelcontextprotocol/servers/issues/5482)**: reports that version 2.3.0 is not on npmjs.com. It points to a release and publishing pipeline gap. The reporter used the `everything` server at 2.2.0 under the Modern (2026-07-28) protocol era. Users expect the npm versions to track the GitHub releases.
- **[#5483](https://github.com/modelcontextprotocol/servers/issues/5483)**: reports stale `--db-path` comments in the fetch and git Dockerfiles, and asks for a clearer git README. It reflects a need for accurate container documentation across servers.

## 5. Bugs & Stability
Ranked by likely impact:
1. **[#5482](https://github.com/modelcontextprotocol/servers/issues/5482)** (bug, v2): the 2.3.0 package is missing from npm. Users cannot install or upgrade to the expected version, and the reporter was still on 2.2.0. It is possibly a failed or pending publish. No fix PR exists, and the cause is unconfirmed. Maintainers should check whether 2.3.0 was actually published or only tagged.
2. **[#5483](https://github.com/modelcontextprotocol/servers/issues/5483)** (bug, v2): stale comments and unclear docs. This is low severity and has no runtime impact, though it could mislead Docker users about `--db-path`. No fix PR exists.
3. **[#5484](https://github.com/modelcontextprotocol/servers/issues/5484)**: titled "Ja", the body is only a quoted reference to a comment in the unrelated `cli/cli` repo. It has no actionable content and looks like spam or a misfiled issue. It is a candidate for closing.

## 6. Feature Requests & Roadmap Signals
Nobody requested a new feature today. The only roadmap signals are indirect: v2 and the "Modern (2026-07-28)" protocol era are in active use, and the Docker and npm distribution channels need attention. A docs and Dockerfile cleanup (#5483) is a plausible quick win for the next release.

## 7. User Feedback Summary
- Users expect npm releases to match the GitHub versions (#5482).
- Container users depend on correct inline documentation for the fetch and git servers (#5483).
- The sample is too small to measure satisfaction.

## 8. Backlog Watch
The data covers only the last 24 hours, so it cannot show long-unanswered items. These need triage:
- [#5482](https://github.com/modelcontextprotocol/servers/issues/5482): needs a maintainer to confirm the publish status of 2.3.0. This is the most time-sensitive item.
- [#5483](https://github.com/modelcontextprotocol/servers/issues/5483): needs a decision on whether to accept a contributed fix PR.
- [#5484](https://github.com/modelcontextprotocol/servers/issues/5484): needs triage, and probably closing as invalid.

**Health assessment:** Low activity, with one release-pipeline question to resolve. All three items have 0 comments, so maintainer response time is worth watching over the coming days.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP Ecosystem, 2026-11-06

Note: the inputs are not personal-assistant agent projects. They are the MCP reference server repo, two registries, and four curated lists or marketplaces. Comparisons below reflect that. Comment counts were unavailable in several digests, and some digests sampled only 20 items, so the figures are partial.

## 1. Ecosystem Overview
The MCP ecosystem is shifting from building servers to distributing and curating them. The reference implementation (modelcontextprotocol/servers) was nearly idle, while the intake channels were busy. Those channels are the awesome lists, Docker's catalog, the plugin marketplace and the official registry. The strongest pressure is on the gatekeepers. Submissions arrive far faster than maintainers merge them, and AI-assisted submissions are visibly common. Remote and hosted servers (Streamable HTTP, OAuth 2.1) are displacing local servers. Trust, verification and security policy are becoming the main points of friction.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release | Health |
|---|---|---|---|---|
| MCP Servers (reference) | 3 (all open) | 0 | None | Neutral/low: quiet, and the 2.3.0 npm gap is unresolved |
| MCP Registry (official) | 3 open | 8 (7 merged/closed, 1 open) | **v1.8.8** | Good: disciplined release flow, thin community triage |
| Awesome MCP Servers | 0 | 122 (114 open, 8 closed/merged) | None | Strained: backlog growing, about 10 weeks old at the oldest |
| Docker MCP Registry | 0 | 50 (all open, 0 merged) | None | Warning: heavy intake, zero merges |
| Claude Plugins (official) | 7 (4 open, 3 closed) | 40 (13 open, 27 merged/closed) | None | Good, with friction: high throughput, new Verified-org gate unclear |
| Awesome Claude Code | 29 (26 open, 3 closed) | 0 | None | Moderate: about 22 validated submissions awaiting review |
| Awesome Agent Skills | 0 | 4 (all open) | None | Healthy but small: zero merges |

## 3. MCP Servers' Position
- **Advantages:** It is the canonical reference, and the other projects build on its protocol. The reporter in #5482 uses the Modern (2026-07-28) protocol era with v2, so it sets the conventions the registries and lists follow.
- **Technical approach:** It ships code (npm packages and Docker images such as fetch, git and everything). The peers mostly carry metadata and listings: the registry has an API and namespace authentication, the Docker catalog has YAML and images, and the lists have Markdown.
- **Community size:** It is the smallest by activity, with 3 issues, 0 PRs and 0 comments. The awesome lists (122 PRs) and the Docker registry (50 PRs) are far busier. This is a snapshot, not a measure of reach.
- **Weakness:** A distribution gap (2.3.0 missing from npm) and unanswered issues. The ecosystem around it is thriving while the reference repo looks neglected on this day.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Remote/hosted servers and OAuth | Docker Registry, Awesome MCP, MCP Registry, Plugins | OAuth 2.1 with DCR/PKCE (Skael, OpenTV, Listar); Streamable HTTP; v1.8.8 allows shared remote URLs |
| Automated validation and AI-agent submissions | Awesome Claude Code, Awesome MCP, Docker, Agent Skills | `validation-passed` and `missing-glama` labels; `go run ./cmd/validate`; disclosed agent-authored PRs |
| Release/publish reliability | MCP Servers, MCP Registry, Plugins | npm 2.3.0 missing; npm propagation race against registry validation (#1792); SHA bumps lagging for weeks |
| Security and trust | Plugins, Registry, Awesome MCP, Agent Skills | Verified-org gate; security-guidance hardening; URL squatting fix; CVE and audit servers; x402 pre-signing checks |
| Dependency pinning | MCP Servers, Plugins | Stale Dockerfile comments; unpinned `pip install mcp` pulling 2.x (#6978) |
| Memory and context persistence | Awesome Claude Code, Agent Skills | RE-call, cogit, Strata; deja-*; music-for-robots |
| Agent payments (x402) | Awesome MCP | #15709, #18750 |

## 5. Differentiation Analysis
- **Reference code (MCP Servers):** Maintainer-run reference implementations for developers who want canonical examples.
- **Authoritative metadata (MCP Registry):** An API-first, name-and-version keyed index for publishers and integrators. It is maintainer-driven, with an infrastructure-as-code (Pulumi/Helm) deploy flow.
- **Runtime distribution (Docker Registry):** Container-packaged and remote entries for Docker Desktop and MCP Toolkit users. It is aimed at vendors wanting reach.
- **Marketplace (Claude Plugins):** Plugins for Claude Code with hooks, skills, LSP and MCP. It enforces policy (Verified orgs) and runs bot-driven SHA pinning.
- **Curated discovery (Awesome lists):** Human-readable lists for discovery. MCP Servers is a broad list, Claude Code is workflow tools (issue-form submissions), and Agent Skills is a narrow list of skills.

## 6. Community Momentum & Maturity
- **Tier 1, high intake:** Awesome MCP Servers (122 PRs), Docker MCP Registry (50), Claude Plugins (40 PRs, 7 issues), Awesome Claude Code (29 issues).
- **Tier 2, steady and structured:** MCP Registry. It is the only one with a release today and a clean promotion pipeline. It is stabilizing, with release-engineering fixes.
- **Tier 3, low activity:** MCP Servers (3 issues) and Awesome Agent Skills (4 PRs).
- **Rapidly iterating:** Claude Plugins (security-guidance, marketplace rules) and the MCP Registry (v1.8.8 semantics).
- **Throughput risk:** Docker (0 merges of 50) and Awesome MCP (8 of 122 closed). Intake is outpacing review in both.

## 7. Trend Signals
1. **Curation is the bottleneck.** Intake is far above merge rates. Developers should expect slow listing and should submit complete, validated entries. Automated validation and auto-merge are the likely fix.
2. **Remote-first MCP.** Hosted servers with OAuth 2.1 are the main submission type. Design servers for Streamable HTTP and standard auth from the start.
3. **Identity moves to name plus version.** The registry dropped URL uniqueness, so integrators should key on server name and version.
4. **Trust gating is tightening.** Verified-org rules in the Claude marketplace, and scrutiny of sensitive categories (tax filing, payments). Publishers should plan for organization verification and a security review.
5. **Release plumbing breaks quietly.** Missing npm versions, propagation lag and unpinned dependencies. Add retry and backoff to publish pipelines and pin versions.
6. **Agent-authored contributions are normal.** Projects will need policy and validation for them.
7. **Demand areas:** persistent memory, orchestration, cost and usage observability, and agent payments.

**Caveat:** this is a one-day view. It covers only 20 of 122 PRs for Awesome MCP and 20 of 50 for Docker, and most comment counts were missing, so engagement conclusions are limited.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest — 2026-11-06

## 1. Today's Overview
Activity is moderate and dominated by maintainer-driven release and infrastructure work. One release (v1.8.8) shipped, along with 7 of 8 PRs updated in the last 24h being merged or closed. Community input is light: 3 open issues, none with reactions and only one with comments. Overall health looks good, with a disciplined staging-to-production promotion flow, though community-submitted items (server submissions, UI bugs) are not yet triaged.

## 2. Releases
**[v1.8.8](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.8)**, built from the staging-validated commit `d6b071e`.
- **Behavior change:** Different server names may now share the same remote URL. Consumers should key listings by **server name + version**, not assume URL uniqueness. This is the main breaking-style change for downstream integrators.
- **Migration:** No database migration required.
- Includes the staging of v1.8.7 into production, and production was promoted via [PR #1811](https://github.com/modelcontextprotocol/registry/pull/1811).

## 3. Project Progress
Closed/merged PRs today:
- [#1806](https://github.com/modelcontextprotocol/registry/pull/1806) **Allow remote URLs to be shared across server names**: the functional core of v1.8.8. It fixes a squatting vector where the first publisher to register a remote URL could block the endpoint's actual operator, since the registry authenticates namespaces but not URL ownership.
- [#1811](https://github.com/modelcontextprotocol/registry/pull/1811) **Promote registry v1.8.8 to production**: only changes the production image tag and retains the existing security patches, compression, monitoring and capacity settings.
- [#1809](https://github.com/modelcontextprotocol/registry/pull/1809) **Restore normal staging and production release flow**: removes temporary infrastructure-only deployment wrappers and the frozen experiment image. Staging again auto-deploys each main build's exact digest, and production promotion goes through the `imageTag` change.
- [#1810](https://github.com/modelcontextprotocol/registry/pull/1810) **Refresh state before applying saved deployment plans**: fixes a deployment bug where TTL-expired Helm jobs appeared as missing in preview, but with refresh disabled at apply time, stale checkpoint entries led to replacement proposals that violated the saved plan's create constraints.
- Dependabot: [#1797](https://github.com/modelcontextprotocol/registry/pull/1797) (Go deps group) and [#1796](https://github.com/modelcontextprotocol/registry/pull/1796) (Pulumi SDK 3.272→3.273) were closed. Their closure likely means they were superseded, since [#1808](https://github.com/modelcontextprotocol/registry/pull/1808) is a newer grouped bump. The data doesn't say whether they were merged or closed unmerged.
- [#1529](https://github.com/modelcontextprotocol/registry/pull/1529) Docs: adds mcp-server-audit to Community Projects. It was closed after about 3 months open, and the data doesn't say whether it was merged.

## 4. Community Hot Topics
Engagement is low across the board; no item has reactions.
- [#1792](https://github.com/modelcontextprotocol/registry/issues/1792) (2 comments): NPM publish automation. The registry validates the npm package immediately, but npm propagation lags, so CI workflows that chain `npm publish` → registry publish fail and need manual re-runs. The underlying need is **retry/backoff or a grace period for package verification** in automated pipelines.
- The other two issues ([#1812](https://github.com/modelcontextprotocol/registry/issues/1812), [#1807](https://github.com/modelcontextprotocol/registry/issues/1807)) have 0 comments.

## 5. Bugs & Stability
Ranked by impact:
1. [#1792](https://github.com/modelcontextprotocol/registry/issues/1792): NPM version validation fails publishing for freshly published packages. This is a workflow-breaking race condition for CI users. No fix PR yet.
2. [#1807](https://github.com/modelcontextprotocol/registry/issues/1807): The UI search does not match server descriptions, so discovery is limited to names and exact keywords. This is a usability issue, not a stability one, and no fix PR exists.
3. No crashes or regressions were reported. The infrastructure fix in [#1810](https://github.com/modelcontextprotocol/registry/pull/1810) addresses a deploy-time (not runtime) defect.

## 6. Feature Requests & Roadmap Signals
- **Description search in the registry UI** ([#1807](https://github.com/modelcontextprotocol/registry/issues/1807)) is a plausible near-term improvement, since it is low risk and high value as the registry grows.
- **Tolerant/retrying package validation** ([#1792](https://github.com/modelcontextprotocol/registry/issues/1792)) is a candidate, possibly via a bounded retry on npm lookups. This is my inference, as no maintainer has responded.
- The shared-URL change in v1.8.8 signals a continuing move toward looser constraints on remote server identity, with name + version as the canonical key.
- [#1812](https://github.com/modelcontextprotocol/registry/issues/1812) is a server-listing request (abstrator, a PyPI-based research MCP), not a product feature. It suggests some users submit through issues rather than the publish flow.

## 7. User Feedback Summary
- **Publishers using CI/CD** want reliable end-to-end automation; the npm propagation delay is a recurring friction point.
- **Discovery users** find search too name-centric.
- **Server operators** benefited from today's fix, as squatting by earlier registrants is no longer a blocker.
- No satisfaction signals (reactions) were recorded.

## 8. Backlog Watch
- [#1792](https://github.com/modelcontextprotocol/registry/issues/1792): open for 2 days with no maintainer response visible; it affects automation users and deserves triage.
- [#1812](https://github.com/modelcontextprotocol/registry/issues/1812): a server submission via issue, which may need redirecting to the standard publish process.
- [#1808](https://github.com/modelcontextprotocol/registry/pull/1808): the only open PR, a Dependabot Go dependency bump (kms, env/v11, huma/v2, pgx). It is routine but should be reviewed and merged.
- Older items are not visible in this 24h window. [#1529](https://github.com/modelcontextprotocol/registry/pull/1529) sat for about 3 months, which hints that low-priority community docs PRs wait a long time.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Project Digest — 2026-11-06

## 1. Today's Overview
Awesome MCP Servers (punkpeye/awesome-mcp-servers) is a curated list, so activity shows up as pull requests rather than issues or releases. In the last 24h there were 0 issues, 0 releases, and 122 PRs updated (114 open, 8 merged/closed). Submission volume is high. PR numbers have reached the #18750s, and many of today's PRs were opened today. Many PRs carry the 🤖 agent marker, which suggests a lot of AI-assisted submissions. The review queue is large, and merge throughput (8 of 122) is low compared with intake.

## 2. Releases
No new releases. The repository is a curated list and does not ship versioned releases.

## 3. Project Progress
Only 8 PRs were merged or closed, and the digest data lists only one of them:
- [#17455](https://github.com/punkpeye/awesome-mcp-servers/pull/17455) (CLOSED): a tutorial submission, "The Local MCP Blueprint" (filesystem, PostgreSQL and GitHub integration). It carried the `missing-glama` label. The data doesn't say why it was closed.

The other 7 merged/closed PRs aren't in the top-20 sample, so I can't describe them. No content merges are visible in the provided data.

## 4. Community Hot Topics
Comment counts are reported as `undefined` for every PR, and all show 0 👍. The data can't rank PRs by engagement, so the list below shows themes in the sample instead.

**Themes in the new submissions:**
- **Finance and payments / x402 (crypto-agent payments):** [#15709](https://github.com/punkpeye/awesome-mcp-servers/pull/15709) (x402-agent-tollbooth) and [#18750](https://github.com/punkpeye/awesome-mcp-servers/pull/18750) (nightshift-x402, pre-signing and phishing checks). Both reflect demand for agent-native payments and for safety around them.
- **Aggregators and connectors:** [#18754](https://github.com/punkpeye/awesome-mcp-servers/pull/18754) (AnythingMCP, 713 connectors for ERP, CRM and SQL), labeled `duplicate`.
- **Knowledge and memory:** [#18755](https://github.com/punkpeye/awesome-mcp-servers/pull/18755) (auto-ontology-mcp, built on NVIDIA Auto Ontology, with read-only SQL execution).
- **Security:** [#18749](https://github.com/punkpeye/awesome-mcp-servers/pull/18749) (CVE Tracker, with CVSS, KEV and EPSS data).
- **Deterministic and exact computation:** [#18669](https://github.com/punkpeye/awesome-mcp-servers/pull/18669) (Jiheng, an exact math MCP server).
- **Vertical and niche tools:**
  - [#18756](https://github.com/punkpeye/awesome-mcp-servers/pull/18756): Backlog and Excel.
  - [#18746](https://github.com/punkpeye/awesome-mcp-servers/pull/18746): Chorono animation.
  - [#18743](https://github.com/punkpeye/awesome-mcp-servers/pull/18743): Dryplate image tools.
  - [#18744](https://github.com/punkpeye/awesome-mcp-servers/pull/18744): gopan cloud drive, with OAuth 2.1 remote MCP.
  - [#18745](https://github.com/punkpeye/awesome-mcp-servers/pull/18745): HireAIJob, an agent job marketplace with USDC escrow.

The underlying needs are monetization and payments for agents, trust and safety checks, enterprise data connectivity, and remote (Streamable HTTP, OAuth) MCP deployment.

## 5. Bugs & Stability
No issues were reported, and the data shows no bugs, crashes or regressions. The only quality signals are PR labels. Several PRs are labeled `missing-glama` (no Glama listing/score badge), for example [#18753](https://github.com/punkpeye/awesome-mcp-servers/pull/18753), [#18751](https://github.com/punkpeye/awesome-mcp-servers/pull/18751), [#18748](https://github.com/punkpeye/awesome-mcp-servers/pull/18748) and [#18747](https://github.com/punkpeye/awesome-mcp-servers/pull/18747). [#18754](https://github.com/punkpeye/awesome-mcp-servers/pull/18754) is flagged `duplicate`. [#18753](https://github.com/punkpeye/awesome-mcp-servers/pull/18753) (Reverseport) has an empty description.

## 6. Feature Requests & Roadmap Signals
There are no feature-request issues. Roadmap signals come from contribution patterns:
- Agent-authored PRs are common (🤖 markers, and #18747 discloses AI-agent preparation). Contribution guidelines and automated validation (`valid-name`, `has-emoji`, `has-glama` labels) are already in place, and tighter automation seems likely.
- New and growing categories include Finance/x402, Security, Knowledge & Memory, Coding Agents and Workplace & Productivity. The list may need more subcategories for payments and agent-commerce servers.
- Remote/hosted MCP servers are increasingly common ([#18749](https://github.com/punkpeye/awesome-mcp-servers/pull/18749), [#18744](https://github.com/punkpeye/awesome-mcp-servers/pull/18744), [#18751](https://github.com/punkpeye/awesome-mcp-servers/pull/18751)).

## 7. User Feedback Summary
There are no comments or reactions to analyze, so this section infers from the submissions. Contributors want visibility on the list and the Glama quality score. Many PRs lack the Glama badge, so friction around that step may exist. Submissions emphasize read-only or dry-run safety (#18756, #18749, #18755) and zero-auth or low-friction installs (`npx`, `uvx`). Satisfaction with the maintainers can't be assessed from this data.

## 8. Backlog Watch
These PRs are old but were still updated today and need maintainer attention:
- [#14852](https://github.com/punkpeye/awesome-mcp-servers/pull/14852): agent-vitals, open since 2026-09-22 (about 6.5 weeks).
- [#13221](https://github.com/punkpeye/awesome-mcp-servers/pull/13221): falzmarke, open since 2026-08-30 (over 2 months).
- [#15709](https://github.com/punkpeye/awesome-mcp-servers/pull/15709): x402-agent-tollbooth, open since 2026-10-04.
- [#17500](https://github.com/punkpeye/awesome-mcp-servers/pull/17500): vicem, open since 2026-10-24.

The oldest PR in this sample is about 10 weeks old, and 114 PRs are open. The review backlog is growing. A triage pass, or automated merging of PRs that pass validation, would help.

**Data caveat:** comment counts were `undefined` for all PRs, only 20 of 122 PRs were shown, and the list wasn't sorted by comment count in practice. The engagement analysis above is therefore limited.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest – 2026-11-06

## 1. Today's Overview
The registry saw heavy submission activity: 50 PRs were updated in the last 24 hours, all still open. There were no issues and no releases, and no PR was merged or closed. The mix is almost entirely new-server submissions, and most of them are remote (hosted) MCP servers. Several of the newest PRs (#6703–#6713) were opened today. Other PRs were refreshed after being open for weeks or months. Intake is strong. Review and merge throughput looks like the bottleneck, since nothing was merged today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the window, so no features or fixes landed. All activity is intake and queue updates.

## 4. Community Hot Topics
No PR in the data shows a comment count (the field is `undefined`) and none has reactions (👍 is 0 everywhere). I can't rank by discussion. The themes below come from the submissions themselves.

- **Remote, hosted MCP servers dominate.** New remote submissions today include:
  - [#6713 ReputeMap](https://github.com/docker/mcp-registry/pull/6713) (Google Business Profile reviews)
  - [#6712 GAMES.GG](https://github.com/docker/mcp-registry/pull/6712)
  - [#6711 Skael API](https://github.com/docker/mcp-registry/pull/6711) (OAuth 2.1 with dynamic client registration and PKCE)
  - [#6710 OpenFile](https://github.com/docker/mcp-registry/pull/6710) (company formation and trademark filing)
  - [#6709 Urlbox](https://github.com/docker/mcp-registry/pull/6709)
  - [#6708 Stackurity](https://github.com/docker/mcp-registry/pull/6708)
  - [#6707 Connecty](https://github.com/docker/mcp-registry/pull/6707)
  - [#6706 OpenTV](https://github.com/docker/mcp-registry/pull/6706)
  - [#6705 Ankra](https://github.com/docker/mcp-registry/pull/6705)
  - [#6703 Listar](https://github.com/docker/mcp-registry/pull/6703)

  Vendors want catalog distribution for their SaaS endpoints. Several of these servers have no public source: GAMES.GG, Ankra and Skael.
- **Auth patterns.** OAuth 2.1 with DCR/PKCE is common (Skael, OpenTV, Listar). Bearer API-key secrets are also used (ScrapingBee [#5508](https://github.com/docker/mcp-registry/pull/5508), Desearch [#5794](https://github.com/docker/mcp-registry/pull/5794)).
- **Verticals.** Submissions span security (GuardBee [#5304](https://github.com/docker/mcp-registry/pull/5304), Stackurity), web scraping and screenshots (ScrapingBee, Urlbox), email (Mailtrap [#5377](https://github.com/docker/mcp-registry/pull/5377), FairValid [#6376](https://github.com/docker/mcp-registry/pull/6376)), blockchain (cometbft-mcp [#6677](https://github.com/docker/mcp-registry/pull/6677)), life sciences (Folklore [#4685](https://github.com/docker/mcp-registry/pull/4685), Curo [#6490](https://github.com/docker/mcp-registry/pull/6490)) and developer tools (archlang [#6704](https://github.com/docker/mcp-registry/pull/6704), mcp-graphql-enhanced [#4547](https://github.com/docker/mcp-registry/pull/4547)).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, since there were no issues. The data contains no CI or validation failure information. Contributors do cite local checks (`go run ./cmd/validate`, `task catalog`, as in [#6707](https://github.com/docker/mcp-registry/pull/6707)), which suggests a defined validation workflow.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals:
- Remote server support (streamable-HTTP, OAuth) is now the main submission path. Expect continued investment in remote-server validation and catalog generation.
- Some submissions come from AI-assisted contributors (for example [#6704](https://github.com/docker/mcp-registry/pull/6704) discloses this). The registry may need clearer policy on automated submissions and on hosted servers without public source.

## 7. User Feedback Summary
There is no direct user feedback in the data (no comments, no reactions). Contributor motivations visible in PR text:
- Reaching Docker Desktop and MCP Toolkit users with hosted services.
- A simple submission path through a template and validation tooling.
- Acceptance is still uncertain. [#4685](https://github.com/docker/mcp-registry/pull/4685) notes "Docker catalogue acceptance and client validation are pending."

## 8. Backlog Watch
These older PRs remain open and were touched today, so they likely need a maintainer decision:
- [#4547 mcp-graphql-enhanced](https://github.com/docker/mcp-registry/pull/4547): opened 2026-07-26, about 3.5 months old.
- [#4685 Folklore Clinical Variant Interpretation](https://github.com/docker/mcp-registry/pull/4685): opened 2026-08-13, about 12 weeks old.
- [#5304 GuardBee security scanners](https://github.com/docker/mcp-registry/pull/5304): opened 2026-09-29.
- [#5377 Mailtrap](https://github.com/docker/mcp-registry/pull/5377): opened 2026-10-02. It is an official vendor server.
- [#5508 ScrapingBee](https://github.com/docker/mcp-registry/pull/5508): opened 2026-10-07.
- [#5794 Desearch](https://github.com/docker/mcp-registry/pull/5794): opened 2026-10-17.
- [#6376 FairValid](https://github.com/docker/mcp-registry/pull/6376): opened 2026-10-30.
- [#6490 Curo Peptide Research](https://github.com/docker/mcp-registry/pull/6490): opened 2026-11-02.

**Health assessment:** Contributor interest is high, but review capacity looks stretched. Zero merges against 50 open updated PRs is a warning sign. The registry would benefit from triage, batch review of official-vendor submissions such as Mailtrap, and published criteria for remote servers.

*Note: only 20 of 50 PRs were provided in the data, and comment counts were unavailable. The analysis reflects that subset.*

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-06

## 1. Today's Overview
Activity is high and mostly marketplace housekeeping. In the last 24h there were 7 issues (4 open, 3 closed) and 40 PRs (13 open, 27 merged or closed). There were no releases. Most of the traffic is automated SHA bumps, new plugin listings and `security-guidance` hardening. A new Verified-organization gate on plugin submissions surfaced today and is the main friction point for external publishers. The 20 PRs shown have no comment counts in the data, so engagement is best read from the issues.

## 2. Releases
No new releases.

## 3. Project Progress
Items marked closed may be merged or just closed. The data doesn't say which.

**Marketplace infrastructure and CI**
- [#7015](https://github.com/anthropics/claude-plugins-official/pull/7015) re-pins the `validate-plugins` action and adds `command-exempt: "xcode"`. Xcode is a command source, and the validator was failing on its PRs.
- [#6338](https://github.com/anthropics/claude-plugins-official/pull/6338) and [#6259](https://github.com/anthropics/claude-plugins-official/pull/6259) add the Apple `xcode` plugin, which exposes Xcode capabilities over MCP. #6338 supersedes #6259 and carries the change onto an in-repo branch so checks can run. Both closed today, right after #7015, so the plugin has probably landed. Confirm in the repo.
- [#7013](https://github.com/anthropics/claude-plugins-official/pull/7013) adds `plugin.json` to 14 plugins that had none: 12 LSP plugins plus others.

**Plugin SHA bumps and new listings**
- [#7018](https://github.com/anthropics/claude-plugins-official/pull/7018) advances `unity` to v0.1.9-beta (81b6079e), with 33 skills. A newer automated bump, [#7021](https://github.com/anthropics/claude-plugins-official/pull/7021), is already open. Superseded bumps [#6567](https://github.com/anthropics/claude-plugins-official/pull/6567) and [#6909](https://github.com/anthropics/claude-plugins-official/pull/6909) were closed.
- [#7016](https://github.com/anthropics/claude-plugins-official/pull/7016) and [#7017](https://github.com/anthropics/claude-plugins-official/pull/7017) both add `champion-kit` 0.5.0. Both closed, so one is likely a duplicate.
- [#7022](https://github.com/anthropics/claude-plugins-official/pull/7022) (Notion Memory setup docs) closed with no description.

**security-guidance**
- [#6835](https://github.com/anthropics/claude-plugins-official/pull/6835) keeps a renamed file paired with its old name in the Stop review, so renames away from secret-shaped names are still excluded.
- [#7011](https://github.com/anthropics/claude-plugins-official/pull/7011) counts commits and pushes made through the PowerShell tool.
- Issues [#6995](https://github.com/anthropics/claude-plugins-official/issues/6995), [#6996](https://github.com/anthropics/claude-plugins-official/issues/6996) and [#6543](https://github.com/anthropics/claude-plugins-official/issues/6543) were closed today.

## 4. Community Hot Topics
- [#2788](https://github.com/anthropics/claude-plugins-official/issues/2788) is the most discussed item, with 6 comments and 3 👍. It asks the Telegram plugin to include reply and quote context in the `<channel>` meta. It was opened in June and is still active. Today the assistant can't tell which message a user is replying to.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) was opened today and has 1 comment. An organization asks how to become Verified. Since about 2026-11-05 the directory has rejected command hooks and local MCP servers from non-Verified organizations, and the docs reportedly don't explain the path.
- Open PRs [#7025](https://github.com/anthropics/claude-plugins-official/pull/7025), [#7026](https://github.com/anthropics/claude-plugins-official/pull/7026) and [#7027](https://github.com/anthropics/claude-plugins-official/pull/7027) from one author add AWS, Pydantic and StackHawk plugins. They show demand for more first-party-vendor plugins.

## 5. Bugs & Stability
Ranked by severity:
1. [#6902](https://github.com/anthropics/claude-plugins-official/issues/6902) (open): the iMessage `files` reply attachments are never delivered on macOS 26, but the tool reports success. `SEND_FILE_SCRIPT` needs `as alias`. This is a silent failure that affects unattended agents. No fix PR is visible.
2. [#6978](https://github.com/anthropics/claude-plugins-official/issues/6978) (open): the `mcp-tunnels` sample hello-server crash-loops. An unpinned `pip install mcp` now pulls mcp 2.x, which has no `mcp.server.fastmcp`. The fix is likely to pin the version. No fix PR is visible.
3. [#6996](https://github.com/anthropics/claude-plugins-official/issues/6996) (closed): when `git add -N` fails, new files go unreviewed and the Stop review says "no changes". This was a silent security-review gap.
4. [#6995](https://github.com/anthropics/claude-plugins-official/issues/6995) (closed): a push review that waited on a commit review could exceed the 10-minute hook timeout and end silently.

## 6. Feature Requests & Roadmap Signals
- [#2788](https://github.com/anthropics/claude-plugins-official/issues/2788): Telegram reply and quote metadata. It has community support but has been open for about five months. It's a small change, but there's no sign it's scheduled.
- [#6543](https://github.com/anthropics/claude-plugins-official/issues/6543): an option to not persist security-guidance review sessions as transcripts. It was closed, which may mean it was addressed.
- [#6838](https://github.com/anthropics/claude-plugins-official/pull/6838) (open): the Stop review will say when a finding is in a file the session never edited. This is likely to ship soon.
- Verified-org policy clarity ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)): expect documentation or process updates.

## 7. User Feedback Summary
- Publishers face a new restriction without clear guidance. Command hooks and local MCP servers are now limited to Verified organizations, and the pre-submission checklist doesn't explain how to qualify.
- Unattended-agent users, such as iMessage on macOS 26, depend on tool results being accurate. A success report on a failed send damages trust.
- Unpinned dependencies in sample commands break fresh installs as upstream packages change.
- Publishers wait weeks for SHA bumps. For example, the Mintlify publisher waited from late October, and installs still served April content ([#7023](https://github.com/anthropics/claude-plugins-official/pull/7023)).

## 8. Backlog Watch
- [#2788](https://github.com/anthropics/claude-plugins-official/issues/2788): open since 2026-06-14 with community interest and no visible maintainer resolution.
- [#6902](https://github.com/anthropics/claude-plugins-official/issues/6902): open since 2026-10-26. It's a silent-failure bug and its line is still unchanged on `main`.
- [#6838](https://github.com/anthropics/claude-plugins-official/pull/6838): open since 2026-10-20 and awaiting review or merge.
- [#7023](https://github.com/anthropics/claude-plugins-official/pull/7023): Mintlify bump. The publisher has been waiting since late October and the bump is now open.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): needs a prompt maintainer answer, because it blocks external publishers.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-11-06

## 1. Today's Overview
Activity is high but one-dimensional. 29 issues were updated in 24 hours, and nearly all are resource submissions. No PRs were updated and no releases shipped. Of the 29 issues, 26 are open and 3 are closed. The 3 closures (#3508, #3498, #3492) carry the `validation-pending, auto-closed` labels. Most open submissions have `validation-passed`, so the automated validation pipeline is the main workflow signal. With zero PR activity, the issue-to-merge step looks like the bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced in code. The visible progress is intake and automation:
- About 22 submissions passed automated validation and are waiting for maintainer review. Examples: [#3489](https://github.com/hesreallyhim/awesome-claude-code/issues/3489), [#3503](https://github.com/hesreallyhim/awesome-claude-code/issues/3503), [#3504](https://github.com/hesreallyhim/awesome-claude-code/issues/3504).
- Three submissions were auto-closed while validation was still pending: [#3508](https://github.com/hesreallyhim/awesome-claude-code/issues/3508) (solhint-mcp plugin), [#3498](https://github.com/hesreallyhim/awesome-claude-code/issues/3498) (Fox Trail), and [#3492](https://github.com/hesreallyhim/awesome-claude-code/issues/3492) (Needt). The data doesn't give the reasons, but each was closed within a day of creation.

## 4. Community Hot Topics
Discussion is thin. The most-commented issues have only 2–4 comments, and none have 👍 reactions.
- [#3489 RE-call](https://github.com/hesreallyhim/awesome-claude-code/issues/3489) (4 comments): a persistent-memory plugin and MCP server backed by SQLite or Postgres.
- [#3320 waitroom](https://github.com/hesreallyhim/awesome-claude-code/issues/3320) (3 comments, open since 2026-10-28): four plugins that use agent wait time, for example to review diffs hunk by hunk.
- [#3503 BB Preflight](https://github.com/hesreallyhim/awesome-claude-code/issues/3503) (2 comments): a read-only macOS check of what AI agents can reach.

The category mix of submissions points to what the community is building:
- **Memory & Context Persistence**: [#3489](https://github.com/hesreallyhim/awesome-claude-code/issues/3489), [#3486 cogit](https://github.com/hesreallyhim/awesome-claude-code/issues/3486), [#3483 Strata](https://github.com/hesreallyhim/awesome-claude-code/issues/3483), [#3495 ai-tracedoc-mods](https://github.com/hesreallyhim/awesome-claude-code/issues/3495).
- **Agent Orchestration**: [#3504 Even Keel](https://github.com/hesreallyhim/awesome-claude-code/issues/3504), [#3496 Agentic Workflow OS](https://github.com/hesreallyhim/awesome-claude-code/issues/3496), [#3493 Frostbyte](https://github.com/hesreallyhim/awesome-claude-code/issues/3493), [#3488 atc](https://github.com/hesreallyhim/awesome-claude-code/issues/3488).
- **Observability & Monitoring**: [#3499 Pulse](https://github.com/hesreallyhim/awesome-claude-code/issues/3499), [#3487 tmux-canopy](https://github.com/hesreallyhim/awesome-claude-code/issues/3487), [#3485 tokengraph](https://github.com/hesreallyhim/awesome-claude-code/issues/3485), [#3497 Pace](https://github.com/hesreallyhim/awesome-claude-code/issues/3497).
- **Remote Control, Notifications & Voice**: [#3505 voice-relay](https://github.com/hesreallyhim/awesome-claude-code/issues/3505), [#3501 Tray for Claude](https://github.com/hesreallyhim/awesome-claude-code/issues/3501).

The underlying needs are cross-session memory, coordination across multiple agents or machines, and visibility into usage and cost.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported. There are no fix PRs. The one related item is a possible process problem: three submissions were auto-closed in `validation-pending` state. If the closures were premature, submitters may need clearer guidance.

## 6. Feature Requests & Roadmap Signals
This repository has no product roadmap. It is a curated list, so "features" here means list content and tooling.
- **Likely additions** once reviewed: the validated submissions, especially in the busiest categories (Memory, Orchestration, Observability).
- **Category signals**: Submissions use sub-categories such as "Observability & Monitoring > Session Monitors", "Observability & Monitoring > Usage & Cost" and "Agent Orchestration > SDLC". There are also newer categories such as "Remote Control, Notifications & Voice I/O" and "Providers, Runtime & Integration Infrastructure".
- **Meta resource**: [#3490 awesome-claude-code-production](https://github.com/hesreallyhim/awesome-claude-code/issues/3490) is itself a list, which tests the "Lists & Collections" category.

## 7. User Feedback Summary
Submissions are not feedback in the usual sense, but they show recurring pain points:
- **Context loss between sessions**: many memory tools, such as RE-call, cogit, and Strata.
- **Usage limits and cost**: [Pace](https://github.com/hesreallyhim/awesome-claude-code/issues/3497) (Windows tray) and tokengraph.
- **Multi-session management**: tmux-canopy, atc.
- **Security exposure**: [BB Preflight](https://github.com/hesreallyhim/awesome-claude-code/issues/3503).
- **Fun and personalization**: [Fox Trail](https://github.com/hesreallyhim/awesome-claude-code/issues/3498), [codex-claude-muse-boot](https://github.com/hesreallyhim/awesome-claude-code/issues/3507), [Vibe Quiz](https://github.com/hesreallyhim/awesome-claude-code/issues/3500).

Some tools extend beyond Claude Code to Codex and other agents, which suggests the ecosystem is converging across agents.

## 8. Backlog Watch
- [#3320 waitroom](https://github.com/hesreallyhim/awesome-claude-code/issues/3320): open since 2026-10-28 (about 9 days), `validation-passed`, still unreviewed.
- [#3466 Terminal Tax MCP server](https://github.com/hesreallyhim/awesome-claude-code/issues/3466): open since 2026-11-04 and validated. A tax-filing MCP server carries more risk than a typical list entry, so it deserves a careful maintainer look.
- [#3497 Pace](https://github.com/hesreallyhim/awesome-claude-code/issues/3497), [#3494 Deutero Agent Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3494), and [#3490 awesome-claude-code-production](https://github.com/hesreallyhim/awesome-claude-code/issues/3490) lack the `validation-passed` label and have no comments. They may not have used the standard template or may not have been processed. Pace's title also deviates from the `[Resource]:` format.
- The maintainers should watch the overall queue. About 22 validated submissions are pending and no PRs are open.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-06

## 1. Today's Overview
Awesome Agent Skills (VoltAgent/awesome-agent-skills) is a curated list. Its activity today is entirely community submissions. There were 0 issues, 0 releases and 0 merged or closed PRs in the last 24h. Four PRs were updated, and all four are open. Three of them were opened in the last two days. Intake is steady, but the data shows no merge activity today, so review throughput is the thing to watch.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features advanced or were fixed. All four updated PRs are pending review:
- [#1363](https://github.com/VoltAgent/awesome-agent-skills/pull/1363): adds pashov/skills.
- [#1361](https://github.com/VoltAgent/awesome-agent-skills/pull/1361): adds music-for-robots.
- [#1362](https://github.com/VoltAgent/awesome-agent-skills/pull/1362): adds kintsugi-core-guard-free.
- [#1353](https://github.com/VoltAgent/awesome-agent-skills/pull/1353): adds deja-search and deja-reflect.

## 4. Community Hot Topics
Comment counts are unavailable (shown as "undefined"), and every PR has 0 👍. I can't rank them by engagement, so this section groups them by theme.
- **Security and guardrails.** [#1363](https://github.com/VoltAgent/awesome-agent-skills/pull/1363) adds pashov/skills under Specialized Domains. It has three skills: `solidity-auditor`, `x-ray` for pre-audit threat modeling, and `fizz` for Echidna/Medusa fuzz suites. The author works at Pashov Audit Group, and the repo is public and MIT-licensed. [#1362](https://github.com/VoltAgent/awesome-agent-skills/pull/1362) adds kintsugi-core-guard-free, also under Specialized Domains next to the security and guardrail skills. Together they suggest demand for skills that cover smart-contract auditing and agent safety.
- **Context engineering.** [#1361](https://github.com/VoltAgent/awesome-agent-skills/pull/1361) adds music-for-robots. It aims to break autoregressive lock-in and induction-head complacency without wiping or compacting the context window. This points to interest in context-window management beyond plain compaction.
- **Memory and reflection.** [#1353](https://github.com/VoltAgent/awesome-agent-skills/pull/1353) adds deja-search and deja-reflect, and raises the supported agent count on deja-history from 20 to 43. That is a sign of cross-agent compatibility becoming a selling point.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there were no issues.

## 6. Feature Requests & Roadmap Signals
No issues or explicit feature requests were filed. The PR mix suggests where contributors see gaps:
- Web3 security tooling (a Specialized Domains entry).
- Context engineering as a distinct category.
- Community Skills growth, such as the deja-* family.

I can't predict maintainer plans from this data. The most likely near-term change is simply that these listings are merged.

## 7. User Feedback Summary
The data has no comments or reactions, so there is no direct user feedback. The submission texts show the contributors' priorities:
- PR descriptions stress verification and quality criteria, such as a valid `SKILL.md` with YAML frontmatter, under 50 lines, and progressive disclosure ([#1362](https://github.com/VoltAgent/awesome-agent-skills/pull/1362)). This implies the repo has contribution standards that authors write to.
- Authors emphasize licensing and public availability ([#1363](https://github.com/VoltAgent/awesome-agent-skills/pull/1363)).
- At least one PR description mentions it was generated with Claude Code, which shows agent-assisted contributions.

## 8. Backlog Watch
- [#1353](https://github.com/VoltAgent/awesome-agent-skills/pull/1353) is the oldest of the four open PRs. It was created 2026-11-04 and last updated 2026-11-05, with no recorded merge. It is the first candidate for maintainer review.
- The PR numbers range up to #1363 and four are open in this window. The data doesn't show the full backlog, so I can't judge how long older PRs have waited. Whether review capacity is keeping pace with submissions is worth tracking over the coming days.

**Health assessment:** Contributor interest is healthy. No bugs or issues were reported, but merge throughput was zero today. Stability risk is low, and review latency is the main item to watch.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
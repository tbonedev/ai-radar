# MCP Ecosystem Digest 2026-09-29

> Issues: 49 | PRs: 52 | Projects covered: 7 | Generated: 2026-09-29 13:41 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-09-29

## 1. Today's Overview
The repository (modelcontextprotocol/servers) was very active. There were 49 issues and 52 PRs updated in 24 hours, but there were **no new releases**. Much of the volume comes from two sources. One is maintainer `cliffhall`'s "Agentic software factory" build-out on the `v2` branch. The other is a bulk closure of stale issues and PRs, mostly old community-server listings, Dependabot PRs and spam or template issues. Only 14 issues and 10 PRs remain open, so the day was mostly cleanup and process work. There was little functional change to the servers themselves. Security hardening for `fetch` and `everything`, and correctness fixes for `memory` and `filesystem`, are pending in open PRs or issues.

## 2. Releases
None.

## 3. Project Progress
**Agentic software factory (tracker [#4858](https://github.com/modelcontextprotocol/servers/issues/4858)).** Part 1 ([#4859](https://github.com/modelcontextprotocol/servers/issues/4859)), Parts 2–5 and Part 10 issues were closed. Several PRs carrying the work are closed. The stacked PRs will need retargeting to `v2/main`.
- [PR #4899](https://github.com/modelcontextprotocol/servers/pull/4899): Part 6, `board-ops` and `issue-create` skills plus the `chore` label. Closes [#4866](https://github.com/modelcontextprotocol/servers/issues/4866).
- [PR #4903](https://github.com/modelcontextprotocol/servers/pull/4903): Part 7, `pr-flow` skill.
- [PR #4904](https://github.com/modelcontextprotocol/servers/pull/4904): Part 9, contribution model (issues rather than outside PRs, issue forms).
- [PR #4906](https://github.com/modelcontextprotocol/servers/pull/4906): Part 8, `issue-triage` skill and board audit.
- [PR #4905](https://github.com/modelcontextprotocol/servers/pull/4905): Part 10, `security-advisory` skill and `SECURITY.md` rewrite.

**Fixes and CI**
- [PR #4901](https://github.com/modelcontextprotocol/servers/pull/4901) fixes the macOS `unicode-paths` test failures ([#4900](https://github.com/modelcontextprotocol/servers/issues/4900)). `validate` had been red on every Mac since [#4896](https://github.com/modelcontextprotocol/servers/pull/4896).
- [PR #4222](https://github.com/modelcontextprotocol/servers/pull/4222) closed. It added a hardened, label-gated fork-PR review workflow for `@claude`.

**Backlog cleanup.** About 30 stale PRs were closed. These were community-server README additions ([#2875](https://github.com/modelcontextprotocol/servers/pull/2875)–[#2880](https://github.com/modelcontextprotocol/servers/pull/2880)), Dependabot bumps ([#3748](https://github.com/modelcontextprotocol/servers/pull/3748), [#3377](https://github.com/modelcontextprotocol/servers/pull/3377)), and older everything, fetch and filesystem PRs ([#3017](https://github.com/modelcontextprotocol/servers/pull/3017), [#2631](https://github.com/modelcontextprotocol/servers/pull/2631), [#2606](https://github.com/modelcontextprotocol/servers/pull/2606)).

## 4. Community Hot Topics
- **[#4117](https://github.com/modelcontextprotocol/servers/issues/4117) memory hardening** (20 comments, still open). It asks for atomic writes, quotas, redaction and destructive-operation guardrails. Users want the reference memory server to be safe by default.
- **[#4118](https://github.com/modelcontextprotocol/servers/issues/4118) puppeteer guardrails** (11 comments, closed). It came from the same author and had the same theme: reference servers as a secure baseline.
- **[#4258](https://github.com/modelcontextprotocol/servers/issues/4258) Asana connector** (7 comments, closed). This is a V1/V2 schema mismatch in a hosted connector rather than something in this repo.
- **[#4122](https://github.com/modelcontextprotocol/servers/issues/4122) Gmail `get_attachment`** (9 👍, the highest reaction count). It shows demand for attachment handling in hosted connectors. It is closed and likely out of scope for this repo.
- **[#4892](https://github.com/modelcontextprotocol/servers/issues/4892) / [PR #4907](https://github.com/modelcontextprotocol/servers/pull/4907).** `CLAUDE.md` says tools should use kebab-case, but the filesystem and memory servers use snake_case. That could lead agents to break clients. A docs PR is already open. This is an example of agent-facing guidance being audited by agents.

## 5. Bugs & Stability
In rough order of severity:
1. **Credential exposure:** [#4882](https://github.com/modelcontextprotocol/servers/issues/4882). `server-everything`'s `get-env` returns the full process environment. A fix is open in [PR #4889](https://github.com/modelcontextprotocol/servers/pull/4889), which redacts sensitive variables.
2. **SSRF in fetch:** [PR #4890](https://github.com/modelcontextprotocol/servers/pull/4890) (resolves #4838) blocks private, loopback and cloud-metadata addresses. Related: [#4830](https://github.com/modelcontextprotocol/servers/issues/4830) notes that `fetch` installs npm packages during a tool call, which is a deployment concern.
3. **Data loss regression:** [#4885](https://github.com/modelcontextprotocol/servers/issues/4885). Since [#4717](https://github.com/modelcontextprotocol/servers/pull/4717), unparseable lines in `memory` are deleted by the next write. The regression is unreleased, and no fix PR is listed.
4. **Silent data problems:** [#4887](https://github.com/modelcontextprotocol/servers/issues/4887) (`create_entities` drops observations for existing entities) and [PR #4910](https://github.com/modelcontextprotocol/servers/pull/4910) (`search_files` hides read errors and returns a short result set). The PR is the fix for the second.
5. **Schema compatibility:** [#4841](https://github.com/modelcontextprotocol/servers/issues/4841). `server-filesystem` declares a draft-07 `$schema`, and strict 2020-12 clients reject it. No fix PR is listed.
6. **Closed:** [#4900](https://github.com/modelcontextprotocol/servers/issues/4900) (macOS tests, fixed by #4901). [#4031](https://github.com/modelcontextprotocol/servers/issues/4031) reported a policy flag after Sequential Thinking use with GPT-5.5. [#4543](https://github.com/modelcontextprotocol/servers/issues/4543) reported Claude Desktop `side_channel_waiting_key_absent`. [#4488](https://github.com/modelcontextprotocol/servers/issues/4488) reported a Windows scheduled-task crash. All are client or environment issues and closed without a listed fix here.

## 6. Feature Requests & Roadmap Signals
- **Release pipeline:** [#4472](https://github.com/modelcontextprotocol/servers/issues/4472) and [PR #4604](https://github.com/modelcontextprotocol/servers/pull/4604) move TypeScript packages to changesets semver and GitHub-Release-triggered publishing. Python stays on CalVer. This is the strongest roadmap signal, and Part 14 ([#4873](https://github.com/modelcontextprotocol/servers/issues/4873)) builds the `v2/main` → `main` milestone release flow on it.
- **Factory Parts 11–15** are open: `local:gate` and per-file coverage ([#4871](https://github.com/modelcontextprotocol/servers/issues/4871)), knowledge skills ([#4872](https://github.com/modelcontextprotocol/servers/issues/4872)), and issue-filing sweeps replacing Dependabot PRs ([#4874](https://github.com/modelcontextprotocol/servers/issues/4874)).
- **Memory safety defaults:** [#4117](https://github.com/modelcontextprotocol/servers/issues/4117) and [#4887](https://github.com/modelcontextprotocol/servers/issues/4887) may be addressed together.
- **Closed:** GitHub label management ([#4403](https://github.com/modelcontextprotocol/servers/issues/4403)) and tool annotations for the github server ([#3399](https://github.com/modelcontextprotocol/servers/issues/3399)). The github server has been archived, which is a likely reason. These are not likely to ship.

## 7. User Feedback Summary
- Security-minded users treat the reference servers as production baselines. They want safe defaults: credential redaction, SSRF guards, atomic persistence.
- Silent failures are the common complaint: `search_files` succeeding with partial results, `memory` deleting lines, and `create_entities` skipping duplicates without telling the model.
- Strict-validator and multi-platform users are hitting compatibility gaps (draft-07 vs 2020-12, macOS tests).
- Much of the inbound traffic is noise. It includes ad-spam issues ([#4598](https://github.com/modelcontextprotocol/servers/issues/4598), [#4621](https://github.com/modelcontextprotocol/servers/issues/4621)), empty template issues ([#4746](https://github.com/modelcontextprotocol/servers/issues/4746), [#4780](https://github.com/modelcontextprotocol/servers/issues/4780)), and promotional scanner or badge posts ([#4790](https://github.com/modelcontextprotocol/servers/issues/4790), [#4826](https://github.com/modelcontextprotocol/servers/issues/4826)). The new contribution model and triage skills are aimed at this.

## 8. Backlog Watch
- **Security advisory backlog:** [#4902](https://github.com/modelcontextprotocol/servers/issues/4902) reports **61 advisories in `triage`**. `SECURITY.md` had told reporters the repo was not eligible. This is the highest-priority item for maintainers.
- [#4117](https://github.com/modelcontextprotocol/servers/issues/4117) has been open since 2026-05-06 with 20 comments and no resolution.
- [PR #4604](https://github.com/modelcontextprotocol/servers/pull/4604) has been open since 2026-08-02 and blocks the release-pipeline work.
- Two unreleased or new `memory` bugs, [#4885](https://github.com/modelcontextprotocol/servers/issues/4885) and [#4887](https://github.com/modelcontextprotocol/servers/issues/4887), need triage. [#4885](https://github.com/modelcontextprotocol/servers/issues/4885) should be fixed before the next release.
- The SSRF and `get-env` PRs ([#4890](https://github.com/modelcontextprotocol/servers/pull/4890), [#4889](https://github.com/modelcontextprotocol/servers/pull/4889)) come from the same contributor. Both need security-focused review.
- Stacked factory PRs need retargeting to `v2/main` as their parents merge.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison — 2026-09-29

## 1. Ecosystem Overview
The digests cover the MCP ecosystem: the reference implementation, the discovery layer (official and Docker registries, and curated lists), and the agent-extension layer (Claude plugins and skills). Intake is high across the board. Community submissions arrive faster than maintainers can review them, and this shows in every list and registry. The reference servers are moving toward security hardening and automated, agent-driven maintenance. Hosted (remote) servers, agent payments and agent identity are the newest submission themes. No project shipped a release today.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my assessment) |
|---|---|---|---|---|
| MCP Servers | 49 (14 open) | 52 (10 open) | None | **Medium.** Very active, but a 61-advisory security backlog and unfixed `memory` regressions. |
| MCP Registry | 8 (3 closed) | 3 (0 merged) | None | **Good, with aging PRs.** Auth blocker #1649 and 387 unreachable records. |
| Awesome MCP Servers | 0 | 107 (99 open) | None | **Steady, throughput-limited.** Review is the bottleneck. |
| Docker MCP Registry | 0 | 50 (49 open) | None | **Fair.** Strong intake, weak merge and bot-PR hygiene (some PRs about 10 months old). |
| Claude Plugins (official) | 0 | 2 (both open) | None | **Stable, low volume.** No merges today. |
| Awesome Claude Code | 17 (16 open) | 0 | None | **Healthy intake.** Automated validation works, and 15 of 16 open items passed it. |
| Awesome Agent Skills | 0 | 32 (7 open) | None | **Good.** A large triage sweep closed or merged 25 PRs. |

Health scores are my own reading of the digests and are not project-reported. The digests often can't separate merged from closed-unmerged PRs. Several lists are also partial samples (Awesome MCP Servers covers the top 20 of 107, and Awesome Agent Skills 20 of 32).

## 3. MCP Servers's Position

**Advantages**
- It is the only project here that ships runnable reference code. The others catalogue or distribute other people's servers.
- It has the widest surface: 49 issues and 52 PRs updated, and a v2 branch with a stated roadmap (a `v2/main` → `main` release flow, changesets).
- Users treat it as a security baseline. That expectation is a strength, and it also raises the cost of gaps.

**Technical approach differences**
- The other projects mostly take metadata: list entries, registry records, catalog pins or plugin manifests. Servers has to get the code itself right (SSRF guards, credential redaction, atomic writes).
- It is moving to agent-run maintenance, with a "software factory" of skills and an issue-only contribution model. The lists rely on validation labels and bots instead.

**Community size**
- By raw volume it is mid-to-high: it is ahead of Registry, Claude Plugins and Docker Registry on issue traffic, and behind Awesome MCP Servers (107 PRs) on PRs.
- Much of its traffic is noise, such as spam and empty template issues. The many stale closures also inflate the count, so the volume is a weaker signal of adoption than it looks.

**Weak points**
- The 61 security advisories in `triage` (#4902).
- The unreleased `memory` data-loss regression (#4885).
- Schema incompatibility (draft-07 versus 2020-12, #4841).

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Safe defaults and security | MCP Servers, Awesome Agent Skills, Awesome Claude Code, Docker Registry | SSRF and env-redaction fixes (#4890, #4889); the ThumbGate and Brig submissions on isolation; higher-risk skills closed (#1097, #1099). |
| Remote/hosted servers and OAuth | Docker Registry, MCP Registry, Servers | Four of five new Docker submissions are remote; remote-only publishing docs (#1656); SSE → Streamable HTTP (#4754). |
| Memory and knowledge | Servers, Awesome MCP Servers, Awesome Claude Code | Memory hardening (#4117); Amneshia, briefd, dir2mcp; skillmem. |
| Agent identity, payments, commerce | Awesome MCP Servers, Docker Registry | Auth Your Agent, x402 servers, ReceiptRail, trip1. |
| Multi-agent orchestration | Awesome Claude Code, Claude Plugins | OpenRig, OctoShell, LodeFlow; the math-proof "siege" skill. |
| Cost and usage observability | Awesome MCP Servers, Awesome Claude Code | tokmeter, usage-badge, contextburn. |
| Discovery and data quality | MCP Registry, lists | Description search (#1453); 387 unreachable records (#1579); duplicate versions (#1676). |
| Review throughput and automation | All | Bots, validation labels and auto-close are used everywhere, and merge capacity still lags. |

## 5. Differentiation Analysis

- **MCP Servers:** reference code for developers who build servers and clients. It is a TypeScript and Python monorepo with a package release pipeline.
- **MCP Registry:** the canonical metadata service, with namespace verification and a publisher CLI (`mcp-publisher`). It targets publishers, and it is API and data-model work.
- **Docker MCP Registry:** a container-distribution catalog, with bot-maintained image pins. Its audience is Docker users who want a vetted install path.
- **Awesome MCP Servers / Awesome Agent Skills / Awesome Claude Code:** human-facing curated lists. The main differences are the object (servers, skills, or Claude Code resources) and the gatekeeping. MCP Servers' list uses label checks (Glama listing, name and emoji), Agent Skills uses spec compliance and description length, and Claude Code uses form-based intake with validation.
- **Claude Plugins (official):** first-party marketplace with `claude plugin validate`, so the tightest curation and lowest volume. It mixes vendor plugins (Xcode) and skills.

## 6. Community Momentum & Maturity

- **Tier 1, high volume:** Awesome MCP Servers (107 PRs), MCP Servers (101 items), Docker MCP Registry (50 PRs). All three are backlog-heavy. Only MCP Servers is doing rapid structural change (factory, release pipeline, v2).
- **Tier 2, steady:** Awesome Agent Skills (32 PRs, active triage) and Awesome Claude Code (17 issues, automated intake).
- **Tier 3, low or slow:** MCP Registry (11 items) and Claude Plugins (2 PRs). The Registry is stabilizing, with a long-open Go package PR (#1321) and a design question on search. Claude Plugins looks review-constrained.
- **Rapidly iterating:** MCP Servers (v2 and the factory). **Stabilizing:** MCP Registry and Awesome Agent Skills. **Backlogged:** Docker Registry and Awesome MCP Servers.

## 7. Trend Signals

1. **Reference implementations are being treated as production baselines.** Security fixes and safe defaults are now the top demand. Developers should not copy reference-server code into production without review.
2. **Remote servers with OAuth and Streamable HTTP are becoming the default packaging.** Plan for hosted endpoints, and for SSE deprecation.
3. **Agents that transact and authenticate** (x402 payments, phone-approved authorization, agent email) form an emerging category. Expect early, inconsistent standards.
4. **Silent partial failure is a recurring complaint** (`search_files`, `memory`, `create_entities`). Tools should return explicit errors and warnings to the model.
5. **Cross-vendor tooling is growing.** Tools now host Claude Code, Codex and Pi together, so avoid single-vendor assumptions.
6. **Agent-driven maintenance is becoming standard**, including agent-written bug reports and agent-audited docs (#4892). Discovery is also weak: description search is missing, and 387 registry entries can't be installed. Curation quality will matter more as volume grows.

**Caveat:** comment and reaction data was missing or partial for several projects, so rankings here rely on submission themes, not measured discussion volume.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) Digest, 2026-09-29

## 1. Today's Overview
Activity was moderate: 8 issues and 3 PRs were updated in the last 24h, with no new releases. Three issues closed (#1307, #1666, #1673). Two of the three PR updates were closures of long-running PRs (#1290, #1207), and none were merged. Most of the traffic is maintenance and moderation (delisting, namespace migration) plus search and data-quality feedback. Health looks stable, but the backlog of feature PRs is aging.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs are reported as merged. The three PRs below were updated, and the data doesn't say whether the two closed ones were merged or closed without merging:
- **[#1290](https://github.com/modelcontextprotocol/registry/pull/1290)** (closed): treats GitHub device-flow `slow_down` as retriable per RFC 8628 §3.5, bumping the polling interval by 5s instead of failing. It fixes #1289 and makes `mcp-publisher` login more robust.
- **[#1207](https://github.com/modelcontextprotocol/registry/pull/1207)** (closed): proposed cargo (crates.io) as a package registry type. The update note says all review feedback was addressed, but it was closed anyway.
- **[#1321](https://github.com/modelcontextprotocol/registry/pull/1321)** (open): adds `registryType: "go"` for `go install` modules, with ownership tied to the publisher's GitHub namespace. It closes #1307, which was itself closed today.

Resolved issues:
- [#1307](https://github.com/modelcontextprotocol/registry/issues/1307): request for Go modules support (closed).
- [#1666](https://github.com/modelcontextprotocol/registry/issues/1666): AssetFare namespace migration after a GitHub org transfer (closed).
- [#1673](https://github.com/modelcontextprotocol/registry/issues/1673): delisting request for a non-functioning server, under the moderation policy (closed).

## 4. Community Hot Topics
- **[#1453](https://github.com/modelcontextprotocol/registry/issues/1453)**, search should also match the `description` field (12 comments, 1 👍). `?search=` on `/v0/servers` only does an ILIKE match on `server_name`. #135 asked for description search, but only the name part shipped. The underlying need is discoverability: agents and users can't find servers by capability when the name doesn't say what they do.
- **[#1579](https://github.com/modelcontextprotocol/registry/issues/1579)**, 387 active servers declare neither `remotes` nor `packages` (9 comments, 1 👍). This is a registry data-quality issue, found in a census. Those entries are listed but can't be installed or reached.
- **[#1307](https://github.com/modelcontextprotocol/registry/issues/1307)** (4 comments) and PR #1321 show continued demand for more ecosystem package types (Go, and cargo via #1207).

## 5. Bugs & Stability
Ranked by apparent impact:
1. **[#1649](https://github.com/modelcontextprotocol/registry/issues/1649)**: `mcp-publisher publish` returns 403 for an org namespace (`io.github.librocat/librocat`) even though the reporter is the sole Owner with public membership, as the docs require. It blocks publishing and has 2 👍, the most of any item here. No fix PR is linked.
2. **[#1579](https://github.com/modelcontextprotocol/registry/issues/1579)**: 387 active but unreachable records. This is a validation gap, and no fix PR is linked.
3. **[#1676](https://github.com/modelcontextprotocol/registry/issues/1676)**: search returns superseded version records alongside the latest ones, oldest first. This hurts result quality, and no fix PR is linked. The reporter discloses that an AI agent wrote the report and that they benefit from a fix.
4. **Fixed:** the device-flow `slow_down` handling in [#1290](https://github.com/modelcontextprotocol/registry/pull/1290) was closed today.

## 6. Feature Requests & Roadmap Signals
- **Description search** ([#1453](https://github.com/modelcontextprotocol/registry/issues/1453)): a clear, well-discussed gap that is likely to come up in a near-term API iteration.
- **Go modules package type** ([#1321](https://github.com/modelcontextprotocol/registry/pull/1321)): a ready PR with a design discussed in #1307, so it is the most likely new package type to land. The cargo PR was closed, so Rust support is less certain.
- **Documentation for remote-only publishing** ([#1656](https://github.com/modelcontextprotocol/registry/issues/1656)): covers verification, optional packages and the description length limit. This is a docs change and probably a quick win.

## 7. User Feedback Summary
- Publishers hit friction around namespaces and auth. Examples are the 403 on org namespaces (#1649) and the org-transfer migration that was blocked by a remote URL reservation (#1666).
- Remote-only servers such as Swarms lack a clear documented path, which costs publishers time ([#1656](https://github.com/modelcontextprotocol/registry/issues/1656)).
- Consumers want better discovery and cleaner results: description search and version de-duplication.
- Maintainers get self-service moderation requests, such as delisting stale servers (#1673). These were resolved quickly, in roughly 2 days.
- Overall sentiment is constructive. The docs are described as "good" with gaps.

## 8. Backlog Watch
- **[#1453](https://github.com/modelcontextprotocol/registry/issues/1453)**, open since 2026-07-16 with 12 comments. It needs a maintainer decision on scope for description search.
- **[#1321](https://github.com/modelcontextprotocol/registry/pull/1321)**, open since 2026-05-30 (about 4 months). It needs a maintainer review or merge decision.
- **[#1579](https://github.com/modelcontextprotocol/registry/issues/1579)**, open since 2026-08-27. The 387 unreachable records need a policy, either validation at publish time or cleanup.
- **[#1649](https://github.com/modelcontextprotocol/registry/issues/1649)**, an auth blocker open since 2026-09-17 with only 1 comment.
- **[#1656](https://github.com/modelcontextprotocol/registry/issues/1656)** and **[#1676](https://github.com/modelcontextprotocol/registry/issues/1676)** are recent and have few comments. They need triage.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-09-29

## 1. Today's Overview
Today's activity is PR-only. There were 107 PRs updated in 24h (99 open, 8 merged or closed), with 0 issues and 0 releases. Nearly all of the top 20 are new "Add X to category" submissions. The queue keeps growing, and only 8 PRs closed today, so submissions are arriving faster than maintainers process them. Comment counts came through as `undefined`, so hot-topic ranking cannot use discussion volume. Only PRs from the top 20 by the feed's ordering are analysed below, so all figures describe that sample and not the full 107.

## 2. Releases
No new releases.

## 3. Project Progress
The repo is a curated list, so "progress" means list changes. The data does not distinguish merged from closed-unmerged. Two closed PRs are visible in the sample:
- [#15047](https://github.com/punkpeye/awesome-mcp-servers/pull/15047): vitofico/galley (Workplace & Productivity), a local Typst document editor MCP. It was labelled `has-glama` and `valid-name`, but I can't tell from the data whether it was merged or rejected.
- [#11260](https://github.com/punkpeye/awesome-mcp-servers/pull/11260): marckohlbrugge/sessy (Communication), a read-only Amazon SES observability MCP. It was labelled `missing-glama`. It was opened 2026-07-31 and closed today, about two months later.

The other 6 closed or merged PRs are not in the sample.

## 4. Community Hot Topics
Comment and reaction data is unavailable (`undefined`, 0 👍 everywhere), so no PR can be ranked as hot. The submission themes suggest what contributors are building:
- **Agent infrastructure and identity**:
  - [#15332](https://github.com/punkpeye/awesome-mcp-servers/pull/15332): Auth Your Agent (phone-approved agent authorization, human takeover for CAPTCHA/2FA).
  - [#15328](https://github.com/punkpeye/awesome-mcp-servers/pull/15328): agentboxd (email inboxes for agents).
  - [#15337](https://github.com/punkpeye/awesome-mcp-servers/pull/15337): mepmail (Resend-compatible email).
- **Memory and knowledge**:
  - [#15335](https://github.com/punkpeye/awesome-mcp-servers/pull/15335): Amneshia (deterministic knowledge graph).
  - [#14761](https://github.com/punkpeye/awesome-mcp-servers/pull/14761): briefd (Markdown context compiler).
  - [#15336](https://github.com/punkpeye/awesome-mcp-servers/pull/15336): dir2mcp (local multimodal RAG).
- **Coding-agent tooling and observability**:
  - [#15334](https://github.com/punkpeye/awesome-mcp-servers/pull/15334): tokmeter (token and cost tracking across 16 agents).
  - [#15318](https://github.com/punkpeye/awesome-mcp-servers/pull/15318): Kranz (dev services and logs).
  - [#15330](https://github.com/punkpeye/awesome-mcp-servers/pull/15330): visimark (Markdown arithmetic integrity).
- **Payments and finance**:
  - [#15289](https://github.com/punkpeye/awesome-mcp-servers/pull/15289): Xynaptic (176 x402 pay-per-request tools).
  - [#15331](https://github.com/punkpeye/awesome-mcp-servers/pull/15331): Invompt.
  - [#15329](https://github.com/punkpeye/awesome-mcp-servers/pull/15329): Aerodrome on Base.
  - [#15333](https://github.com/punkpeye/awesome-mcp-servers/pull/15333): ru-docs-mcp (Russian invoices with a GOST R 56042 QR code).

The underlying needs are agent authentication and human handoff, persistent and verifiable memory, cost visibility for coding agents, and machine-payable APIs.

## 5. Bugs & Stability
No issues or bug reports today. The only stability signal is PR hygiene:
- [#5078](https://github.com/punkpeye/awesome-mcp-servers/pull/5078) (BuyWhere) carries `merge-conflict`, `missing-glama`, `missing-emoji` and `invalid-name`. It has been open since 2026-04-18.
- Several PRs carry `missing-glama` ([#15337](https://github.com/punkpeye/awesome-mcp-servers/pull/15337), [#15336](https://github.com/punkpeye/awesome-mcp-servers/pull/15336), [#15273](https://github.com/punkpeye/awesome-mcp-servers/pull/15273), [#15289](https://github.com/punkpeye/awesome-mcp-servers/pull/15289), [#15328](https://github.com/punkpeye/awesome-mcp-servers/pull/15328)). These need a Glama listing before they can pass the automated checks.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. The PR mix suggests these list categories are growing:
- Communication (email for agents).
- Finance & Fintech (three submissions in the sample).
- Knowledge & Memory.
- Monitoring.

There is no evidence of taxonomy or tooling changes. An "agent identity/authorization" category might be worth considering, given [#15332](https://github.com/punkpeye/awesome-mcp-servers/pull/15332), but that is my inference and not a request from the data.

## 7. User Feedback Summary
There are no comments, so there is no direct feedback. From the submissions:
- Contributors care about the automated checks (`has-emoji`, `valid-name`, `has-glama`). Many PR titles include the 🤖🤖🤖 marker, which I read as a convention for agent-assisted submissions, though that is inferred.
- Many submitters are adopting local-first, self-hosted designs and the official MCP registry. Examples are [#14761](https://github.com/punkpeye/awesome-mcp-servers/pull/14761), [#15330](https://github.com/punkpeye/awesome-mcp-servers/pull/15330) and [#15331](https://github.com/punkpeye/awesome-mcp-servers/pull/15331).

## 8. Backlog Watch
- [#5078](https://github.com/punkpeye/awesome-mcp-servers/pull/5078): open about 5 months with merge conflicts and multiple label failures. It should be closed or fixed.
- [#14761](https://github.com/punkpeye/awesome-mcp-servers/pull/14761) (2026-09-20), [#15027](https://github.com/punkpeye/awesome-mcp-servers/pull/15027) (2026-09-24) and [#15176](https://github.com/punkpeye/awesome-mcp-servers/pull/15176) (2026-09-26): all pass the label checks (`has-glama`, `valid-name`) but are still open, so they are ready for review.
- [#15273](https://github.com/punkpeye/awesome-mcp-servers/pull/15273) and [#15289](https://github.com/punkpeye/awesome-mcp-servers/pull/15289): open since 2026-09-28 with `missing-glama`. They need a nudge to the submitter.
- Overall, 99 open PRs and 8 closures in the day point to a growing review backlog.

**Project health:** activity is high and steady, and submissions are mostly well-formed, but review throughput is the bottleneck.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-09-29

## 1. Today's Overview
The registry saw moderate, submission-driven activity. It had 50 PRs updated in 24h (49 open, 1 closed), no issue activity and no releases. Five new third-party server submissions arrived today (#5292–#5297), and most of the remaining updated PRs are automated `mcp-registry-bot[bot]` pin updates. Some of those bot PRs date back to November 2025, so the review pipeline looks like the bottleneck: submissions come in faster than they are merged. Every listed PR shows zero comments and zero 👍, so there is little visible maintainer or community discussion.

## 2. Releases
No new releases.

## 3. Project Progress
Only one PR was closed or merged, and it was closed, not merged:
- [#4754](https://github.com/docker/mcp-registry/pull/4754) `fix(deepwiki): use Streamable HTTP endpoint` (NYGsatoshi, opened 2026-08-22, closed today). It proposed moving DeepWiki's remote transport from `sse` to `streamable-http` and its endpoint from `/sse` to `/mcp`, matching DeepWiki's docs, which mark `/sse` as legacy. The data doesn't say why it was closed (superseded, or rejected). If the SSE endpoint is still in the registry, it remains a legacy-transport risk, so check that.

No merges were reported in the window.

## 4. Community Hot Topics
Comment counts are not available in the data (all "undefined"), so I ranked by novelty and by what today's submissions show about demand.
- **Remote (hosted) MCP servers are the dominant pattern.** Four of today's five new submissions are remote servers:
  - [#5297 Clickwise](https://github.com/docker/mcp-registry/pull/5297) uses Streamable HTTP.
  - [#5296 ManyCP](https://github.com/docker/mcp-registry/pull/5296) submits servers to MCP directories.
  - [#5295 Carrick](https://github.com/docker/mcp-registry/pull/5295) does cross-repo TypeScript indexing over OAuth.
  - [#5294 trip1](https://github.com/docker/mcp-registry/pull/5294) covers hotel booking with no auth and per-reservation payment.
- [#5293 ReceiptRail](https://github.com/docker/mcp-registry/pull/5293) is a remote server for x402 delivery receipts on Solana, so it is agent-payment and crypto-adjacent. Together with trip1, it shows interest in agents that transact.
- [#5292 HeyLead](https://github.com/docker/mcp-registry/pull/5292) is a LinkedIn outreach server using OAuth 2.1 with dynamic tool discovery.
- [#4637 rstream](https://github.com/docker/mcp-registry/pull/4637) is a local stdio server (tunnels, WebTTY) that references a publisher-provided image. It has been open since 2026-08-05.

**Underlying need:** vendors want Docker catalog distribution for their hosted endpoints, and OAuth and Streamable HTTP are becoming the norm.

## 5. Bugs & Stability
No issues were reported. The one stability-relevant item is [#4754](https://github.com/docker/mcp-registry/pull/4754), the DeepWiki transport fix. It is closed, and it is unclear whether the fix landed some other way.

## 6. Feature Requests & Roadmap Signals
No explicit requests were filed. The submissions suggest these directions:
- **Remote server support** is likely to keep growing, including OAuth flows and no-auth endpoints.
- **Migration from SSE to Streamable HTTP** is a likely maintenance theme (see #4754).
- **Agent payments and commerce** (x402, per-reservation purchases) is an emerging category.

## 7. User Feedback Summary
There is no direct user feedback today. From the submissions:
- Contributors document endpoint checks in their PR bodies (for example, #5293 reports its JSON-RPC `initialize` result), which shows they expect the registry to verify remote servers.
- Several submitters also point to the official MCP Registry (trip1 lists `com.trip1/mcp`), so the two registries are used side by side.
- Long-open PRs suggest slow turnaround for submitters.

## 8. Backlog Watch
These PRs have been open a long time and need maintainer attention:
- **Stale bot pin updates:**
  - [#621 awslabs-nova-canvas](https://github.com/docker/mcp-registry/pull/621) (2025-11-07)
  - [#788 omi](https://github.com/docker/mcp-registry/pull/788) (2025-11-26)
  - [#799 vizro](https://github.com/docker/mcp-registry/pull/799) (2025-11-27)
  - [#1051 opik](https://github.com/docker/mcp-registry/pull/1051) (2026-02-04)
  - [#1083 stripe](https://github.com/docker/mcp-registry/pull/1083) (2026-02-07)
  - [#2750 aws-terraform](https://github.com/docker/mcp-registry/pull/2750) (2026-04-18)
  - [#4137 playwright](https://github.com/docker/mcp-registry/pull/4137) (2026-06-30)
  - [#4363 firecrawl](https://github.com/docker/mcp-registry/pull/4363), [#4367 smartbear](https://github.com/docker/mcp-registry/pull/4367), [#4369 testkube](https://github.com/docker/mcp-registry/pull/4369) and [#4383 teamwork](https://github.com/docker/mcp-registry/pull/4383) (July 2026)

  Some are about 10 months old, and pins may be out of date for popular servers such as Stripe, Playwright and Firecrawl. Consider auto-merging bot pin updates once CI passes, or closing superseded ones.
- **Older submission:** [#4637 rstream](https://github.com/docker/mcp-registry/pull/4637) has been open about 8 weeks.
- **Newer bot PR:** [#5291 ref](https://github.com/docker/mcp-registry/pull/5291) was opened today.

**Health assessment:** submission intake is strong, but merge throughput and bot-PR hygiene are weak.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-09-29

## 1. Today's Overview
Activity was low: 2 PRs were updated in the last 24h (both open), with no issue activity and no new releases. Both PRs add new plugins to the official marketplace, one from an external contributor and one from Apple's Xcode side. Nothing merged or closed, so the marketplace's contribution flow is intake-heavy and review-light for the day. The project looks steady, but review throughput is the thing to watch.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. Pending work:
- [#6322](https://github.com/anthropics/claude-plugins-official/pull/6322): adds `plugins/math-proof/`, with two skills for hard mathematics problems. `/math-proof:solo <problem>` has the session work the problem itself. The other skill, "siege", is multi-agent. Each run keeps its work in a run folder and ends with a self-contained `proof.md`.
- [#6259](https://github.com/anthropics/claude-plugins-official/pull/6259): adds the Apple `xcode` plugin, which exposes Xcode capabilities via MCP for native Apple-platform development. The author reports that `claude plugin validate .` passes and that it was tested with a local marketplace.

## 4. Community Hot Topics
Comment counts were not available in the data (shown as undefined), and both PRs have 0 👍. Ranking by relevance:
- [#6259](https://github.com/anthropics/claude-plugins-official/pull/6259) (Xcode plugin): updated 2026-09-28, so it is still moving after 11 days. The underlying need is first-class Apple-platform development, integrated over MCP.
- [#6322](https://github.com/anthropics/claude-plugins-official/pull/6322) (math-proof): a new PR. It reflects demand for structured, multi-agent workflows on hard reasoning tasks beyond coding.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today, and there are no fix PRs.

## 6. Feature Requests & Roadmap Signals
No issues were filed, so there are no explicit requests. The PRs still signal direction:
- Platform-vendor plugins, such as Xcode over MCP, are entering the official marketplace.
- Multi-agent "siege"-style skills for verification-heavy work are appearing.
- The Xcode plugin is the likelier of the two to merge soon. It is older, already validated, and comes from a platform vendor. The math-proof plugin will probably need more review because of its multi-agent behavior.

## 7. User Feedback Summary
There is no direct user feedback today, since there are no issues or comments in the data. The submission notes suggest contributors value a working validation step (`claude plugin validate .`) and local-marketplace testing before submitting.

## 8. Backlog Watch
- [#6259](https://github.com/anthropics/claude-plugins-official/pull/6259) (Xcode plugin): open since 2026-09-18, about 11 days, with no merge or visible maintainer resolution. It should get maintainer attention, given its strategic value and its validation status.
- [#6322](https://github.com/anthropics/claude-plugins-official/pull/6322): brand new, with no backlog concern yet.

The PR numbers (~#6300) imply a high submission volume. The absence of merges today suggests review capacity may be a constraint.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-09-29

## 1. Today's Overview
Activity in the last 24h was submission-only: 17 issues were updated, 16 open and 1 closed. No PRs were updated and there were no releases. Every item is a `[Resource]` submission, and 15 of the 16 open ones carry `validation-passed`. Almost all have exactly 1 comment, which is probably the automated validation bot. There are no reactions on any item. The project looks healthy as a curation intake pipeline, but no PRs moved today, so nothing was merged.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. The only closure is issue [#2996](https://github.com/hesreallyhim/awesome-claude-code/issues/2996) (Brig, a microVM sandbox for coding agents on macOS and Linux). It was labeled `validation-passed, resource-submission, auto-closed`, so the automation closed it rather than a maintainer. The data doesn't say why it was auto-closed, and it has 3 comments, more than the usual 1.

## 4. Community Hot Topics
No item has reactions, and the maximum comment count is 3. The most active item is [#2996](https://github.com/hesreallyhim/awesome-claude-code/issues/2996) with 3 comments. [#2990](https://github.com/hesreallyhim/awesome-claude-code/issues/2990) (OctoShell) has 2.

The submissions cluster into these themes:
- **Multi-session and agent orchestration.** [#2990](https://github.com/hesreallyhim/awesome-claude-code/issues/2990) OctoShell, [#2998](https://github.com/hesreallyhim/awesome-claude-code/issues/2998) OpenRig (Claude Code, Codex and Pi as persistent teams), [#2987](https://github.com/hesreallyhim/awesome-claude-code/issues/2987) Vicoa and [#2986](https://github.com/hesreallyhim/awesome-claude-code/issues/2986) LodeFlow (multi-agent clients). Users want to run several agents or sessions side by side.
- **Usage and cost observability.** [#2995](https://github.com/hesreallyhim/awesome-claude-code/issues/2995) usage-badge and [#2985](https://github.com/hesreallyhim/awesome-claude-code/issues/2985) contextburn. Subscription and context-efficiency visibility is a recurring need.
- **Memory, skills and plugins.** [#2984](https://github.com/hesreallyhim/awesome-claude-code/issues/2984) skillmem, [#2994](https://github.com/hesreallyhim/awesome-claude-code/issues/2994) FortunaTerra plugins and [#2993](https://github.com/hesreallyhim/awesome-claude-code/issues/2993) GoLive.
- **Remote control and infrastructure.** [#2991](https://github.com/hesreallyhim/awesome-claude-code/issues/2991) claude-tg-bot (Telegram), [#2999](https://github.com/hesreallyhim/awesome-claude-code/issues/2999) Kranz (local dev services via MCP) and [#2996](https://github.com/hesreallyhim/awesome-claude-code/issues/2996) Brig (sandboxing).
- **Other.** [#2997](https://github.com/hesreallyhim/awesome-claude-code/issues/2997) clausona (multi-account config), [#2989](https://github.com/hesreallyhim/awesome-claude-code/issues/2989) GEML, [#2988](https://github.com/hesreallyhim/awesome-claude-code/issues/2988) TAOS and [#3000](https://github.com/hesreallyhim/awesome-claude-code/issues/3000) Promptline.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. Two process-level observations:
- [#3000](https://github.com/hesreallyhim/awesome-claude-code/issues/3000) still has the template placeholder title `[Resource]: <name of your resource>`, although the display name is "Promptline". This is cosmetic, but the title may need fixing.
- [#2998](https://github.com/hesreallyhim/awesome-claude-code/issues/2998) has no `[Resource]:` title prefix, which suggests it was submitted outside the standard form flow. It passed validation anyway.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed against the repo. The submissions do point to categories that are attracting demand:
- Agent Orchestration, Alternative Clients and Observability & Monitoring > Usage & Cost each drew multiple entries today.
- Multi-vendor tooling is growing: OpenRig and LodeFlow host Codex and Pi alongside Claude Code, and Vicoa and TAOS are similar. The list may see more pressure to accommodate cross-agent tools.
- Nested category paths such as "Observability & Monitoring > Usage & Cost" are being used, which suggests a maturing taxonomy.

## 7. User Feedback Summary
This repo takes submissions rather than support requests, so feedback is indirect. The pain points visible in the descriptions are:
- Isolation and safety when running agents ([#2996](https://github.com/hesreallyhim/awesome-claude-code/issues/2996) Brig, [#2992](https://github.com/hesreallyhim/awesome-claude-code/issues/2992) ThumbGate).
- Managing multiple accounts, sessions and subscriptions ([#2997](https://github.com/hesreallyhim/awesome-claude-code/issues/2997), [#2987](https://github.com/hesreallyhim/awesome-claude-code/issues/2987), [#2995](https://github.com/hesreallyhim/awesome-claude-code/issues/2995)).
- Mobile and remote access to running sessions.

The intake process seems to work smoothly for submitters, with quick automated validation.

## 8. Backlog Watch
- [#2992](https://github.com/hesreallyhim/awesome-claude-code/issues/2992) ThumbGate (Security) is the only open item without `validation-passed` and has 0 comments. Unlike the other open submissions, it has no validation-bot comment. It was created 2026-09-28. A maintainer may need to check why validation didn't run or didn't pass.
- The 15 open `validation-passed` submissions (#2984–#3000, excluding #2992 and #2996) are awaiting maintainer review. Nothing in the data shows how quickly they are handled.
- The data covers only the last 24h, so I can't assess older stale issues or PRs.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Project Digest: 2026-09-29

## 1. Today's Overview

The project saw no Issues or Releases in the last 24h, but PR traffic was high: 32 PRs were updated, and 25 of them (about 78%) were closed or merged versus 7 still open. Activity is driven almost entirely by community submissions of "Add skill: owner/repo" PRs, which matches the repo's role as a curated index. The maintainers ran a large triage sweep today, touching PRs created between 2026-09-17 and 2026-09-27. Health looks good on throughput. The main signal to check is that the list shows no comment or reaction activity (comment counts are `undefined`, 👍 is 0 on every item). That means the data can't tell us whether closures came with feedback.

## 2. Releases

No new releases.

## 3. Project Progress

The data marks 25 PRs as "merged/closed" but doesn't separate merges from rejections. Only 20 of the 32 PRs are listed, and 15 of those show `[CLOSED]`. Without merge flags, I can't say which skills actually landed in the list. The closed PRs, by category:

- **Development and Testing:** [#1094](https://github.com/VoltAgent/awesome-agent-skills/pull/1094) fujibee/agmsg (a messaging layer between CLI coding agents), [#1093](https://github.com/VoltAgent/awesome-agent-skills/pull/1093) oneroster-csv-validator, [#1092](https://github.com/VoltAgent/awesome-agent-skills/pull/1092) marlin-bed-leveling, [#1085](https://github.com/VoltAgent/awesome-agent-skills/pull/1085) gronify-json-flatten-search, [#1087](https://github.com/VoltAgent/awesome-agent-skills/pull/1087) Qiuner/birdview
- **Productivity and Collaboration:** [#1107](https://github.com/VoltAgent/awesome-agent-skills/pull/1107) revdoku, [#1064](https://github.com/VoltAgent/awesome-agent-skills/pull/1064) giasip-research
- **Marketing:** [#1088](https://github.com/VoltAgent/awesome-agent-skills/pull/1088) chatexport-need-miner, [#1074](https://github.com/VoltAgent/awesome-agent-skills/pull/1074) mentionagent-claude-skill
- **Specialized Domains:** [#1105](https://github.com/VoltAgent/awesome-agent-skills/pull/1105) media-crawler-easy, [#1099](https://github.com/VoltAgent/awesome-agent-skills/pull/1099) rozo-checkout, [#1091](https://github.com/VoltAgent/awesome-agent-skills/pull/1091) esl-price-sync
- **Security / Context Engineering / Other:** [#1097](https://github.com/VoltAgent/awesome-agent-skills/pull/1097) Awesome-Bug-Bounty, [#1081](https://github.com/VoltAgent/awesome-agent-skills/pull/1081) agent-memory-discipline, [#1103](https://github.com/VoltAgent/awesome-agent-skills/pull/1103) asset-inventory

Several of these carried the `[PR-in-review]` label, so they went through a review step before closing.

## 4. Community Hot Topics

Comment counts are unavailable, so no PR can be ranked by discussion. The most useful proxy is the topics of the open, in-review submissions:

- [#1112](https://github.com/VoltAgent/awesome-agent-skills/pull/1112) Upload-Post: multi-platform publishing and scheduling to TikTok, Instagram, YouTube, LinkedIn and others. It shows demand for social and marketing automation.
- [#1076](https://github.com/VoltAgent/awesome-agent-skills/pull/1076) lintlang: static checks of agent instructions, tool descriptions and prompts. It cites adoption by Character.AI's Larch and MegaLinter, a stronger evidence base than most submissions. It reflects a need for quality tooling on prompts.
- [#1098](https://github.com/VoltAgent/awesome-agent-skills/pull/1098) jev-social: read-only social research through a local CLI.
- [#1108](https://github.com/VoltAgent/awesome-agent-skills/pull/1108) forjd/better-writing: removes AI-writing patterns from prose.
- [#1095](https://github.com/VoltAgent/awesome-agent-skills/pull/1095) OneWave-AI/claude-skills: a 302-star collection whose author discloses they maintain it.

Broader themes are marketing and social automation, agent-to-agent tooling and memory, and agent hygiene (linting, inventory, writing quality).

## 5. Bugs & Stability

No bugs, crashes or regressions were reported, since there are no Issues. There is a security-adjacent point: [#1097](https://github.com/VoltAgent/awesome-agent-skills/pull/1097) (bug bounty playbooks) and [#1099](https://github.com/VoltAgent/awesome-agent-skills/pull/1099) (crypto payments from an agent) are higher-risk categories. Both were closed today. The data doesn't say why.

## 6. Feature Requests & Roadmap Signals

No feature requests were filed. The PR labels and descriptions suggest the maintainers enforce these submission rules:

- A description of 10 words or fewer.
- An author or org prefix on the entry.
- Compliance with the Agent Skills specification.
- Entries appended to the end of the relevant subcategory.

Expect the next list update to include the remaining open, in-review submissions, most likely #1112, #1108, #1098 and #1095. Watch whether #1076, the one PR without the `[PR-in-review]` tag, gets picked up.

## 7. User Feedback Summary

There are no Issues or comments to sample. Submitter statements imply these priorities:

- Skills should be public, documented and maintained (see the star counts and "actively maintained" claims in #1095).
- Skills should work across hosts (Claude Code, Codex, Gemini CLI, OpenCode).
- Contributors are following the guidelines and asking for placement in specific subcategories.

The pain point in the data is one of visibility. Submitters can't tell why a PR closed, and the fetched data has no comments.

## 8. Backlog Watch

- [#1076](https://github.com/VoltAgent/awesome-agent-skills/pull/1076) lintlang, open since 2026-09-20 (9 days) and without the `[PR-in-review]` label. It has the strongest adoption evidence in the open set and may have been missed by the triage pass.
- [#1098](https://github.com/VoltAgent/awesome-agent-skills/pull/1098) jev-social (5 days) and [#1095](https://github.com/VoltAgent/awesome-agent-skills/pull/1095) OneWave-AI/claude-skills (6 days). Both are in review, and the latter needs a maintainer decision on accepting a collection repo from its own maintainer.
- [#1108](https://github.com/VoltAgent/awesome-agent-skills/pull/1108) and [#1112](https://github.com/VoltAgent/awesome-agent-skills/pull/1112) are fresh (2–4 days) and in the normal review window.

**Caveat:** Only 20 of the 32 PRs were shown, ordered by comment count that came back as `undefined`. The remaining 12, including some of the 7 open PRs, are not covered here.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
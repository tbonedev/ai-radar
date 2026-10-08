# MCP Ecosystem Digest 2026-10-08

> Issues: 21 | PRs: 6 | Projects covered: 7 | Generated: 2026-10-08 14:20 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest, 2026-10-08

## 1. Today's Overview
The repo is in a high-activity migration phase. Maintainers (mainly `cliffhall`) merged or closed five PRs on 2026-10-07 that moved both the TypeScript and Python servers to their v2 SDKs and set up the "agentic software factory" tooling. There were no new releases. Two external bug reports about misleading `destructiveHint` annotations came in, and the backlog triage trackers (#4875, #4876, #4877) are queued behind the v2 work. Almost all activity is maintainer-driven. Community engagement is low: most issues have 0 comments and 0 👍.

## 2. Releases
No new releases. The first semver release is planned and tracked in [#4968](https://github.com/modelcontextprotocol/servers/issues/4968): TypeScript servers at 1.0.0 and Python servers at the next CalVer. The "chore: version packages" Changesets PR, [#4941](https://github.com/modelcontextprotocol/servers/pull/4941), is still open.

## 3. Project Progress
Five PRs were merged or closed on 2026-10-07:
- **[#5063](https://github.com/modelcontextprotocol/servers/pull/5063)** migrates `everything`, `filesystem`, `memory` and `sequentialthinking` to TS SDK v2 (2.3.1) using the SDK codemod. It closes [#4856](https://github.com/modelcontextprotocol/servers/issues/4856).
- **[#5062](https://github.com/modelcontextprotocol/servers/pull/5062)** ports `fetch`, `git` and `time` to Python SDK v2 (`mcp>=2.2,<3`, locked at 2.3.0) and keeps the low-level `Server`. It closes [#4851](https://github.com/modelcontextprotocol/servers/issues/4851).
- **[#5065](https://github.com/modelcontextprotocol/servers/pull/5065)** replaces Dependabot PRs with three issue-filing sweeps (`dependency-refresh`, `dependabot-alerts`, `sdk-watch`) and adds the factory overview. It closes [#4874](https://github.com/modelcontextprotocol/servers/issues/4874).
- **[#5064](https://github.com/modelcontextprotocol/servers/pull/5064)** adds `release:notes`, which writes per-server release notes with a reporter "Thanks" section. It closes [#5056](https://github.com/modelcontextprotocol/servers/issues/5056).
- **[#5070](https://github.com/modelcontextprotocol/servers/pull/5070)** records the SDK watch's credential-channel risk as accepted, because every upstream it reads is an MCP-org SDK. It closes [#5069](https://github.com/modelcontextprotocol/servers/issues/5069).

The parent tracker [#4858](https://github.com/modelcontextprotocol/servers/issues/4858) (agentic software factory) was also closed. Next in line is the spec-refactor Wave 4, which makes the servers "modern era" so they serve both 2026-07-28 and 2025-era clients: TypeScript in [#4852](https://github.com/modelcontextprotocol/servers/issues/4852) and Python in [#4853](https://github.com/modelcontextprotocol/servers/issues/4853). The umbrella tracker is [#4857](https://github.com/modelcontextprotocol/servers/issues/4857).

## 4. Community Hot Topics
Comment counts are low everywhere. The most discussed items are:
- **[#5058](https://github.com/modelcontextprotocol/servers/issues/5058)** (4 comments): the `memory` server marks `create_entities`, `create_relations` and `add_observations` as `destructiveHint: false`. Each call rewrites the whole JSONL file, though, so data the current schema doesn't recognise can be dropped. Users rely on these hints for auto-approval decisions, so they want the annotations to match what the tools do.
- **[#5059](https://github.com/modelcontextprotocol/servers/issues/5059)** (2 comments): the same kind of annotation problem in `git_create_branch`.
- **[#5071](https://github.com/modelcontextprotocol/servers/issues/5071)**: tool descriptions in `filesystem` and `memory` don't help a model choose between near-duplicate tools. The pairs are `list_directory` vs `list_directory_with_sizes`, and `delete_entities` vs `delete_relations`.

Both annotation reports come from the same author, `ranausmanai`, so this looks like an annotation audit. Together with #5071, the underlying need is accurate tool metadata for safe, reliable agent use.

## 5. Bugs & Stability
In order of severity:
1. **[#5058](https://github.com/modelcontextprotocol/servers/issues/5058)** (memory) can cause data loss despite a "non-destructive" label. No fix PR yet.
2. **[#5059](https://github.com/modelcontextprotocol/servers/issues/5059)** (git): if a branch already exists as a packed ref (after `git gc`, `git pack-refs`, or in a fresh clone), `git_create_branch` silently moves it to the new base. The old tip becomes unreachable. No fix PR yet.
3. **[#5060](https://github.com/modelcontextprotocol/servers/issues/5060)** (time): `test_get_current_time_errors` fails on macOS because its tz database is case-insensitive, so `europe/warsaw` is accepted. This only blocks `npm run local:gate` locally. Linux CI passes. No fix PR yet.
4. **[#5068](https://github.com/modelcontextprotocol/servers/issues/5068)**: a memory test depends on the Node version. The proposal is to test on Node 24 and 26 as well as 22, since Node 22 reaches end of life around April 2027.

## 6. Feature Requests & Roadmap Signals
- **Release flow:** the first semver release ([#4968](https://github.com/modelcontextprotocol/servers/issues/4968)) is the most likely near-term milestone, followed by the Wave 4 modern-era servers.
- **CI and automation follow-ups:**
  - [#5061](https://github.com/modelcontextprotocol/servers/issues/5061): a GitHub App so the sweeps can write to the org-level Servers V2 board.
  - [#5066](https://github.com/modelcontextprotocol/servers/issues/5066): track advisories with no patched release instead of skipping them.
  - [#5067](https://github.com/modelcontextprotocol/servers/issues/5067): refresh an open issue's rows and scope labels when the same target's installs change.
- **Spec 2026-07-28:** stateless operation (no `initialize` handshake, new `server/discover` RPC) and Multi Round-Trip Requests replacing server-initiated sampling, elicitation and roots. These are the headline protocol changes behind the whole v2 effort ([#4857](https://github.com/modelcontextprotocol/servers/issues/4857)).

## 7. User Feedback Summary
The only external feedback concerns trust in tool metadata (#5058, #5059, #5071). Clients and users rely on `destructiveHint` and on tool descriptions to decide what to auto-approve and which tool to call, and the reports say these are sometimes inaccurate or ambiguous. The macOS test failure ([#5060](https://github.com/modelcontextprotocol/servers/issues/5060)) shows that contributors working on Macs can't get the local gate to pass.

## 8. Backlog Watch
- The triage trackers [#4875](https://github.com/modelcontextprotocol/servers/issues/4875), [#4876](https://github.com/modelcontextprotocol/servers/issues/4876) and [#4877](https://github.com/modelcontextprotocol/servers/issues/4877) cover about 258 open issues and 317 open PRs as of 2026-09-26. They are blocked by #4857 and #4858. #4858 is now closed, so the Spec Refactor (#4857) is the remaining blocker.
- [#5058](https://github.com/modelcontextprotocol/servers/issues/5058) and [#5059](https://github.com/modelcontextprotocol/servers/issues/5059) are annotation and data-safety issues. They are two days old, have no maintainer fix, and need a decision soon. A wrong `destructiveHint` is a safety concern.
- The release PR [#4941](https://github.com/modelcontextprotocol/servers/pull/4941) has been open since 2026-10-01. It probably waits on the semver release work in #4968.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison, 2026-10-08

Scope: the six projects in today's digests. Four are MCP-adjacent (Servers, Registry, Awesome MCP Servers, Docker MCP Registry). Two are Claude-adjacent (Claude Plugins, Awesome Claude Code). Awesome Agent Skills is a seventh, skills-focused list. Counts come from each digest's 24h window. "Health" scores are my judgment from the digests, not measured values.

## 1. Ecosystem Overview
The ecosystem is moving from building servers to curating, distributing and governing them. Three of the seven projects are curated lists, and two are registries. Together they absorb most of the community traffic, while the reference implementation (MCP Servers) is the one doing deep technical work. Remote, hosted servers and skills/plugins are growing next to local stdio servers. Trust metadata (`destructiveHint`, Glama listing, proprietary-server policy) and maintainer review capacity are the main pressure points. Spec 2026-07-28 (stateless operation, Multi Round-Trip Requests) is the technical driver behind the v2 migration.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release status | Health (judgment) |
|---|---|---|---|---|
| MCP Servers | Not stated (several tracked, 0-4 comments each) | 5 merged/closed (plus open Changesets PR #4941) | None; first semver release planned (#4968) | Good: maintainer-driven, but community engagement is low |
| MCP Registry | 5 (4 closed) | 4 (3 closed, Dependabot) | None | Fair: stable, but one open DNS bug (#1694) and thin maintainer response |
| Awesome MCP Servers | 0 | 500 (226 open, 274 merged/closed) | None | Fair: very high demand, triage is the bottleneck |
| Docker MCP Registry | 0 | 50 (all open) | None | Fair to weak: zero merges, PRs waiting months |
| Claude Plugins (official) | 8 | 11 (4 closed) | None | Good: active, but nightly bump workflow disabled and Telegram bugs aging |
| Awesome Claude Code | 45 (1 open) | 17 (all closed) | None | Strong: automated pipeline clears its backlog |
| Awesome Agent Skills | 1 | 14 (6 open, 8 closed) | None | Fair: steady inflow, review is silent and slow |

No project shipped a release today.

## 3. MCP Servers's Position

**Advantages**
- It is the only project in the set doing core engineering: SDK v2 migrations in TypeScript (#5063) and Python (#5062), and spec-driven Wave 4 work.
- It has the most structured process: a release-notes tool (#5064), issue-filing sweeps instead of Dependabot PRs (#5065), and umbrella trackers.
- It is the reference for how servers should behave, so its metadata decisions (annotations) set norms for everyone else.

**Technical approach differences**
- Peers mostly manage listings or packaging. MCP Servers writes the code and the conformance targets (serving both 2026-07-28 and 2025-era clients).
- It uses a maintainer-led, agentic "software factory" workflow. Awesome Claude Code uses a bot pipeline for submissions, which is a related idea applied to content.

**Community size**
- On the data shown, it is smaller by volume than the list and registry projects: many issues have 0 comments and 0 👍, versus 500 PRs in Awesome MCP Servers. The digest also cites about 258 open issues and 317 open PRs in the backlog as of 2026-09-26, so the backlog is large even though daily external engagement is thin.
- Almost all of today's activity came from maintainers (mainly `cliffhall`).

**Risks**
- Two annotation bugs (#5058 on data loss, #5059 on branch moves) have no fix, and triage is blocked until the Spec Refactor (#4857) finishes.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Trust and safety metadata | MCP Servers, Awesome MCP Servers, Docker MCP Registry, Claude Plugins | Accurate `destructiveHint` (#5058, #5059); read-only and no-auth claims as selling points; governance servers such as HANRIA (#5357); a review that reported failure as clean (#6375) |
| Remote or hosted servers and auth | Docker MCP Registry, Awesome MCP Servers, MCP Registry | Streamable HTTP with OAuth 2.1/PKCE (#5403) or Bearer keys; pay-per-call (x402); DNS namespace verification failing (#1694) |
| Submission and contribution clarity | MCP Registry, Docker MCP Registry, Awesome MCP Servers, Awesome Agent Skills | Empty templates and misplaced PRs (#1698); no policy for non-open-source servers; Glama requirement friction; no review feedback on closed PRs |
| Maintenance automation | MCP Servers, Claude Plugins, Awesome Claude Code, Awesome MCP Servers | Dependabot replacement, disabled nightly bump workflow, bot labels and validation, `merge-conflict` labels |
| Link rot and stale entries | Awesome Claude Code (#3104), Awesome Agent Skills (#1169) | Renamed or deleted accounts cause 404s; automated link checking is a likely fix |
| Agent memory and long-lived sessions | Docker MCP Registry, MCP Servers, Awesome Claude Code, Claude Plugins | Memory servers (#4959, #5514); memory server design flaw (#5058); multi-session orchestration; Telegram orphan processes (#5745) |
| Cost and usage observability | Awesome Claude Code, Claude Plugins | contextburn, usage-badge, Estela; plugin spend invisible (#6382) |
| Tool-selection quality | MCP Servers, Awesome MCP Servers | Near-duplicate tool descriptions (#5071); hierarchical tools to limit tool count (#13649) |

## 5. Differentiation Analysis

| Project | Feature focus | Target users | Architecture / mechanism |
|---|---|---|---|
| MCP Servers | Reference servers (filesystem, git, memory, fetch, time) | Server authors, SDK users | TS and Python SDK v2, Changesets, issue-filing sweeps |
| MCP Registry | Official publishing and namespace verification | Server publishers | `mcp-publisher` CLI, DNS and other auth, Go service |
| Awesome MCP Servers | Discovery list by category | Consumers and authors seeking visibility | README PRs, validation bot, Glama listing |
| Docker MCP Registry | Packaged and catalogued servers for Docker | Docker users, vendors | PR-based catalog; remote and containerized entries |
| Claude Plugins | Curated plugin marketplace for Claude Code | Claude Code users | SHA-pinned plugin entries, manual bumps, hooks |
| Awesome Claude Code | Claude Code tooling list | Claude Code users | Issue-to-PR bot pipeline with labels |
| Awesome Agent Skills | Skills list, vendor sections | Skill authors, multi-agent users | Manual PR review, 10-word descriptions |

Key contrasts:
- **Code versus catalog:** only MCP Servers and the Registry hold substantial runtime or service code. The rest are metadata repositories.
- **Automation maturity:** Awesome Claude Code is the most automated; Docker MCP Registry and Awesome Agent Skills look the most manual.
- **Openness policy:** Docker's registry is now receiving proprietary hosted servers ("N/A, not open source") with no clear policy, while the other lists enforce format and listing rules.

## 6. Community Momentum & Maturity

**Tier 1: very high inflow**
- Awesome MCP Servers (500 PRs) and Docker MCP Registry (50 PRs). Demand is clear, but Docker had zero merges and Awesome MCP Servers is mostly closures, so throughput is the constraint.

**Tier 2: active and well run**
- Awesome Claude Code (62 items updated, near-empty backlog). This is the maturity benchmark for submission flow.
- MCP Servers: low community volume, but the highest engineering intensity and a clear roadmap.
- Claude Plugins: moderate volume with a concentrated `security-guidance` release train.

**Tier 3: steady and quiet**
- MCP Registry and Awesome Agent Skills. Small volumes, limited responses.

**Rapidly iterating:** MCP Servers (v2 migration, Wave 4), Claude Plugins (`security-guidance` 2.0.12).
**Stabilizing:** MCP Registry (mostly Dependabot and triage), Awesome Claude Code (pipeline steady state).
**Under strain:** Docker MCP Registry and Awesome MCP Servers (review capacity), and Awesome Agent Skills (silent closures).

## 7. Trend Signals

1. **Metadata is becoming a safety interface.** Clients auto-approve on `destructiveHint` and tool descriptions. Wrong hints are now treated as bugs. *For developers:* audit annotations and write descriptions that disambiguate similar tools.
2. **Remote-first servers are overtaking local ones in new submissions.** Docker's sample is mostly hosted servers with OAuth or API keys. *For developers:* plan for streamable HTTP, OAuth 2.1 with PKCE, and DNS or domain-based identity.
3. **The spec is moving to stateless operation.** No `initialize` handshake, `server/discover`, and Multi Round-Trip Requests replacing server-initiated sampling, elicitation and roots. *For developers:* design servers that work for both 2026-07-28 and 2025-era clients.
4. **Distribution is a bottleneck, not creation.** The number of submissions far exceeds review capacity across lists and registries. *For developers:* expect delays, meet validation rules up front (Glama, formats), and don't rely on one directory.
5. **Agents are running unattended and in parallel.** Telegram process leaks and silent polling loss, multi-account orchestration, and Windows loops show weak lifecycle handling. *For developers:* test process cleanup, retry limits and Windows paths.
6. **Cost and review visibility are in demand.** Usage tools, hidden plugin spend, and local diff review keep appearing. *For developers:* expose spend and make review outcomes explicit (a failed review must not read as clean).
7. **Governance and sandboxing tools are emerging.** Mandate checks (HANRIA) and read-only API replicas (SandboxAPIs) point to demand for guardrails. *For developers:* these are open product areas.

**Caveats:** Several digests have missing comment counts ("undefined"). Some closed PRs may be rejections, not merges. Findings are from a single 24h window, so treat rankings as indicative.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest: 2026-10-08

## 1. Today's Overview
Activity was low: 5 issues and 4 PRs were updated in the last 24h, and there were no new releases. Four of the five issues were closed, and three of the four PRs were closed. Most of that was triage cleanup of empty or spam submissions, plus routine Dependabot bumps. The one substantive item is an open DNS-authentication bug (#1694). Health looks stable, but maintainer attention on real user problems appears thin.

## 2. Releases
No new releases.

## 3. Project Progress
No feature work was merged or closed today. The closed PRs are all Dependabot dependency maintenance. The data doesn't say whether they were merged or closed unmerged.
- [#1697](https://github.com/modelcontextprotocol/registry/pull/1697): bumps `anchore/sbom-action` 0.24.2 → 0.24.3 (GitHub Actions group).
- [#1696](https://github.com/modelcontextprotocol/registry/pull/1696): bumps 7 Go dependencies, including `cloud.google.com/go/kms` 1.34.0 → 1.35.0 and the OpenTelemetry runtime instrumentation.
- [#1695](https://github.com/modelcontextprotocol/registry/pull/1695): bumps `pulumi/sdk/v3` 3.265.0 → 3.267.0 in `/deploy`.

## 4. Community Hot Topics
No item has any comments or 👍 reactions, so nothing stands out by engagement. The most substantive items are:
- [#1694](https://github.com/modelcontextprotocol/registry/issues/1694), the DNS auth failure. It is the only open issue with a real technical problem, and it points to a need for clearer DNS verification behavior and cache handling.
- [#1677](https://github.com/modelcontextprotocol/registry/issues/1677), a listing request for "agent-commerce unlock packs" with `llms.txt` and `catalog.llm.json`. It was closed. It suggests demand for publishing non-MCP-server or commerce-style catalogs, and a possible need for clearer scope guidance.

## 5. Bugs & Stability
1. **Medium: [#1694](https://github.com/modelcontextprotocol/registry/issues/1694) (open)**
   - `mcp-publisher login dns` returns 401 `no MCP public key found in DNS TXT records`.
   - The reporter says the base64 TXT record is correct and globally propagated.
   - They suspect the registry resolver is serving a stale negative cache entry.
   - It blocks DNS-based namespace verification for affected publishers.
   - No fix PR and no comments yet.
2. **Noise: [#1645](https://github.com/modelcontextprotocol/registry/issues/1645), [#1675](https://github.com/modelcontextprotocol/registry/issues/1675), [#1683](https://github.com/modelcontextprotocol/registry/issues/1683)**
   - These are unfilled bug templates titled "Millet cleaning", "bot" and "jj".
   - All are closed and none is a real defect.

## 6. Feature Requests & Roadmap Signals
- No explicit feature requests today.
- [#1677](https://github.com/modelcontextprotocol/registry/issues/1677) hints at interest in registering agent-commerce or `llms.txt`-style resources. It is unlikely to land in the next version, since it was closed without visible action.
- [#1698](https://github.com/modelcontextprotocol/registry/pull/1698) ("Create server.json for MCP server configuration") is an open, template-only PR that adds a server config. It looks like a misplaced listing attempt and not a registry code change. Publishers likely need clearer guidance that servers are published via `mcp-publisher` and not by PR.

## 7. User Feedback Summary
- Publisher onboarding friction is the main signal. The DNS auth failure shows that debugging failures is hard when the registry's resolver view differs from public DNS.
- Several users are filing empty bug templates or opening listing PRs against the registry repo. This suggests the contribution and publishing paths aren't clear enough.
- No satisfaction or dissatisfaction is expressed explicitly.

## 8. Backlog Watch
- [#1694](https://github.com/modelcontextprotocol/registry/issues/1694): open, with no maintainer response so far. It was filed only a day ago, but it blocks publishing and needs a look at DNS TXT caching and negative-TTL behavior.
- [#1698](https://github.com/modelcontextprotocol/registry/pull/1698): open and unreviewed. It likely needs a quick redirect or close with guidance.
- The data lists no long-stale items today. Older backlog health can't be assessed from this window.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest: 2026-10-08

## 1. Today's Overview
Awesome MCP Servers is a curated list. Its activity is almost entirely submission PRs, not bug or feature work. In the last 24h there were **0 issues, 0 releases and 500 updated PRs**: 226 open and 274 merged or closed. The volume points to heavy submission traffic and an active triage pass. Many of the updated items were created in August and September and touched again today. That fits a bulk labeling or cleanup sweep, and the data doesn't confirm it. One caveat: the comment counts show as "undefined", so "most commented" can't be ranked from this data.

## 2. Releases
No new releases.

## 3. Project Progress
274 PRs were merged or closed. The sample shows mostly **closed** items, not merges. Examples:
- [#11774](https://github.com/punkpeye/awesome-mcp-servers/pull/11774): dvalincode (Security), closed. Labeled `missing-glama`.
- [#12265](https://github.com/punkpeye/awesome-mcp-servers/pull/12265): commodities.sh, closed. Labeled `missing-glama`.
- [#12157](https://github.com/punkpeye/awesome-mcp-servers/pull/12157): MFOXA Ukraine Microfinance Catalog (Finance), closed.
- [#12815](https://github.com/punkpeye/awesome-mcp-servers/pull/12815): ausschreibungsagenten-mcp (Legal), closed.
- [#13035](https://github.com/punkpeye/awesome-mcp-servers/pull/13035): erdonline (Architecture & Design), closed.
- [#13055](https://github.com/punkpeye/awesome-mcp-servers/pull/13055): Trail (Workplace & Productivity), closed.
- [#12629](https://github.com/punkpeye/awesome-mcp-servers/pull/12629): ducklab (Coding Agents), closed. It has an empty description.
- [#13738](https://github.com/punkpeye/awesome-mcp-servers/pull/13738): BridgeAI (Cloud Platforms), closed.
- [#12913](https://github.com/punkpeye/awesome-mcp-servers/pull/12913): agenterr (Monitoring), closed. Labeled `missing-glama`.

Most closed PRs here are 6 to 8 weeks old. The data doesn't say why they were closed. Staleness is plausible, since #14946 explicitly mentions an earlier PR "closed for inactivity". Some of these PRs (#12157, #13035, #13055, #12629) do carry `has-glama`.

## 4. Community Hot Topics
Comment counts are unavailable, and all shown PRs have 0 👍. Themes in the sample:
- **Finance and data APIs**: [#15993](https://github.com/punkpeye/awesome-mcp-servers/pull/15993) (Token Tool, multi-chain token deployment), [#15106](https://github.com/punkpeye/awesome-mcp-servers/pull/15106) (NBP exchange rates), and #12157 and #12265 (closed).
- **Communication**: [#11723](https://github.com/punkpeye/awesome-mcp-servers/pull/11723) (Twitter/X API, 51 tools), [#13649](https://github.com/punkpeye/awesome-mcp-servers/pull/13649) (Discord), [#15107](https://github.com/punkpeye/awesome-mcp-servers/pull/15107) (Gmail).
- **Developer tools and testing**: [#11769](https://github.com/punkpeye/awesome-mcp-servers/pull/11769) (Relay, Android testing), [#15706](https://github.com/punkpeye/awesome-mcp-servers/pull/15706) (RepoGuard).
- **Aggregators and gateways**: [#12620](https://github.com/punkpeye/awesome-mcp-servers/pull/12620) (mcp-anything, a meta-gateway over registries).
- **Research and multi-model**: [#15376](https://github.com/punkpeye/awesome-mcp-servers/pull/15376) (Agent Council, multi-model verdicts).
- **Marketing**: [#15992](https://github.com/punkpeye/awesome-mcp-servers/pull/15992) (SEO Score API).
- **Gaming**: [#14946](https://github.com/punkpeye/awesome-mcp-servers/pull/14946) (Steam, read-only).

Many submitters want visibility in a discovery list. Remote or hosted MCP servers and pay-per-call models (x402 in #12265) are appearing alongside local stdio servers.

## 5. Bugs & Stability
No issues were filed and no bugs were reported. The closest thing to a stability signal is **merge conflicts**. Several open PRs carry a `merge-conflict` label: [#15376](https://github.com/punkpeye/awesome-mcp-servers/pull/15376), [#11723](https://github.com/punkpeye/awesome-mcp-servers/pull/11723), [#15106](https://github.com/punkpeye/awesome-mcp-servers/pull/15106), [#14946](https://github.com/punkpeye/awesome-mcp-servers/pull/14946) and [#15107](https://github.com/punkpeye/awesome-mcp-servers/pull/15107). Alphabetical insertion into one large README makes conflicts likely, and it blocks merging until authors rebase.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests exist. Signals from the process itself:
- Automated labels (`has-emoji`, `valid-name`, `has-glama`, `missing-glama`, `merge-conflict`) show a CI-style validation bot. It enforces entry format and Glama listing.
- Some titles carry a 🤖🤖🤖 marker. This may be a convention for agent-authored or fast-track PRs, but the data doesn't say.
- The list keeps growing in categories such as Finance, Communication, Legal, Security and Monitoring. This points to continued demand for more granular categories.

## 7. User Feedback Summary
There is no direct feedback. Indirect signals:
- Contributors are frustrated by the Glama requirement. #14946 resubmitted after an earlier PR closed for inactivity while the server was not yet claimed on Glama.
- Authors stress read-only, no-auth or MIT-licensed servers, which suggests trust and safety are selling points.
- Authors care about tool-count control (#13649 describes a single hierarchical tool to keep the count low).

## 8. Backlog Watch
- **226 open PRs** is a large queue. The oldest in this sample is [#11769](https://github.com/punkpeye/awesome-mcp-servers/pull/11769), open since 2026-08-09 and labeled `missing-glama`.
- [#11723](https://github.com/punkpeye/awesome-mcp-servers/pull/11723) (Twitter/X) has been open since 2026-08-08 with a merge conflict.
- [#12620](https://github.com/punkpeye/awesome-mcp-servers/pull/12620) (mcp-anything) and [#13649](https://github.com/punkpeye/awesome-mcp-servers/pull/13649) (Discord) are `missing-glama`. They need author action or a closure decision.
- Merge-conflicted PRs from September (#14946, #15106, #15107, #15376) need a rebase from their authors or a maintainer nudge.

**Project health**: Submission interest is very high and triage seems active, given the 274 closures and merges. Maintainer attention is the bottleneck, because the queue is large and no issues are used for discussion.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-08

## 1. Today's Overview
Activity today is submission-driven. 50 PRs were updated and all 50 are open. None were merged or closed. There were 0 issue updates and 0 releases. The visible PRs are almost all new server submissions, and many are hosted remote MCP servers. The registry is getting steady contributor input, but no merges landed in this window. That points to a review or merge bottleneck, not a lack of demand. The data lists 20 of the 50 PRs, so the figures below only cover that sample.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes shipped. The only progress is new intake:
- Remote servers: [#5538 Reduck](https://github.com/docker/mcp-registry/pull/5538), [#5537 Cloche](https://github.com/docker/mcp-registry/pull/5537), [#5536 DashThis](https://github.com/docker/mcp-registry/pull/5536), [#5535 BulkPublish](https://github.com/docker/mcp-registry/pull/5535), [#5533 MailSenpai](https://github.com/docker/mcp-registry/pull/5533), [#5532 Rapid Indexer](https://github.com/docker/mcp-registry/pull/5532), [#5531 Silicon Valley Atlas](https://github.com/docker/mcp-registry/pull/5531), [#5530 Gridzen Verification](https://github.com/docker/mcp-registry/pull/5530), [#5528 GMGN Market](https://github.com/docker/mcp-registry/pull/5528), [#5527 Hourtick](https://github.com/docker/mcp-registry/pull/5527)
- Local or containerized servers: [#5534 Pantry Relay](https://github.com/docker/mcp-registry/pull/5534), [#5529 Rivalize](https://github.com/docker/mcp-registry/pull/5529)

## 4. Community Hot Topics
The comment counts are not available (`undefined`), and no PR shows reactions (all show 0 👍). So I can't rank threads by discussion. The list below is based on PRs that were updated again after their creation date:
- [#5357 HANRIA Mandate Check](https://github.com/docker/mcp-registry/pull/5357), created Oct 1. It is a hosted pre-action check that returns permit, deny or escalate against an operator's written mandate. Agent governance and guardrails are a growing need.
- [#5485 SandboxAPIs](https://github.com/docker/mcp-registry/pull/5485). It provides read-only replicas of 21 developer and SaaS APIs for safe agent testing.
- [#5514 Arroway](https://github.com/docker/mcp-registry/pull/5514). It offers shared team memory for AIs.
- [#4959 total-agent-memory](https://github.com/docker/mcp-registry/pull/4959). It gives coding agents persistent local memory.

Themes: agent memory, governance and sandboxing, and marketing, SEO and growth tooling.

## 5. Bugs & Stability
No issues or bug reports were filed today. [#5249](https://github.com/docker/mcp-registry/pull/5249) updates firewalla-mcp-server from 1.1.0 to 2.1.0. It replaces the automated pin bump in #646, which would have moved only to 1.3.0, so the automated bump is lagging well behind upstream. This is a maintenance item, not a regression.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions suggest where demand is going:
- Remote streamable-HTTP servers, with OAuth or API-key auth, are now the dominant submission type. Examples are [#5403 Formstep](https://github.com/docker/mcp-registry/pull/5403) (OAuth 2.1 with PKCE and dynamic client registration) and [#5532](https://github.com/docker/mcp-registry/pull/5532) (Bearer key).
- Several submissions state "N/A, not open source" for the requirement ([#5537](https://github.com/docker/mcp-registry/pull/5537), [#5531](https://github.com/docker/mcp-registry/pull/5531), [#5527](https://github.com/docker/mcp-registry/pull/5527)). I'd expect the registry to need a clearer, formalized policy for proprietary hosted servers.
- Categories are widening into finance and on-chain data ([#5528](https://github.com/docker/mcp-registry/pull/5528)), competitive intelligence, and email marketing.

## 7. User Feedback Summary
There is no direct user feedback in this window. The PR descriptions show a few patterns:
- Contributors submit hosted services without a source repository, which suggests the contribution template is built for containerized open-source servers.
- Some contributors update existing submissions, such as [#4765](https://github.com/docker/mcp-registry/pull/4765) and [#5249](https://github.com/docker/mcp-registry/pull/5249), which shows they are waiting on review.

## 8. Backlog Watch
These PRs have been open for a long time and need maintainer attention:
- [#3590 ai-seo](https://github.com/docker/mcp-registry/pull/3590). It was created May 16, so it has been open about 5 months.
- [#4765 Financial Evidence](https://github.com/docker/mcp-registry/pull/4765). It was created Aug 24 and has been revised to pin a verified version.
- [#4959 total-agent-memory](https://github.com/docker/mcp-registry/pull/4959). It was created Sep 7.
- [#5249 firewalla-mcp-server 2.1.0](https://github.com/docker/mcp-registry/pull/5249). It was created Sep 25, and its update has grown past the original bump.
- [#5357 HANRIA](https://github.com/docker/mcp-registry/pull/5357) and [#5403 Formstep](https://github.com/docker/mcp-registry/pull/5403). Both are early October remote submissions.

**Health assessment:** Contributor interest is high, and about 50 PRs were touched in one day. However, there were zero merges, issue triage or releases in the window, and several PRs have waited months. The registry would benefit from batch review and from a documented path for remote and proprietary servers.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-10-08

## 1. Today's Overview
Activity is moderate and concentrated in two areas: the `security-guidance` plugin and manual SHA bumps for marketplace plugins. 8 issues and 11 PRs were updated in the last 24h, and there were no releases. A batch of four `security-guidance` PRs from one maintainer (#6375, #6378, #6379, #6380) is awaiting merge. The nightly bump workflow is disabled, so maintainers are bumping SHAs by hand. Most open issues are older bugs in the Telegram plugin that are still collecting comments.

## 2. Releases
No new releases.

## 3. Project Progress
Four PRs were closed or merged. The data does not say whether any of them merged rather than closed unmerged.
- [#6374](https://github.com/anthropics/claude-plugins-official/pull/6374) — `security-guidance` 2.0.11: stops hooks that Claude Code cancels from leaving index-sized temp files that fill the disk. This was closed on 10-07, and its fixes appear to be carried into the 2.0.12 series.
- [#6373](https://github.com/anthropics/claude-plugins-official/pull/6373) — figma bump to v2.2.127 (`f0493295`). It supersedes [#6346](https://github.com/anthropics/claude-plugins-official/pull/6346), which targeted v2.2.126 and was closed.
- [#6335](https://github.com/anthropics/claude-plugins-official/pull/6335) — carta-cap-table and carta-crm bump to `43e49ed3`, closed.
- [Issue #19](https://github.com/anthropics/claude-plugins-official/issues/19) — the long-standing request to add `--context claude-code` to the serena MCP was closed after about 10 months.

Open PRs in flight:
- **security-guidance 2.0.12 series.** [#6375](https://github.com/anthropics/claude-plugins-official/pull/6375) stops a failed review from being reported as clean. [#6378](https://github.com/anthropics/claude-plugins-official/pull/6378) sends `ANTHROPIC_CUSTOM_HEADERS` on the plugin's own API calls, which fixes gateway-keyed setups. [#6379](https://github.com/anthropics/claude-plugins-official/pull/6379) delivers commit and push findings on stderr, so they are not replaced by unrelated warnings. [#6380](https://github.com/anthropics/claude-plugins-official/pull/6380) bumps the version so users actually receive the fixes, and it is sequenced to merge after #6378 and the other fix PRs.
- **Manual SHA bumps.** [#6362](https://github.com/anthropics/claude-plugins-official/pull/6362) (aws-startup-advisor, adds usage telemetry), [#6376](https://github.com/anthropics/claude-plugins-official/pull/6376) (aws-core) and [#6377](https://github.com/anthropics/claude-plugins-official/pull/6377) (incident-io, v0.19.0 → v1.20261007.771).

## 4. Community Hot Topics
- [#5745](https://github.com/anthropics/claude-plugins-official/issues/5745) (5 comments) — Telegram `server.ts` orphan processes. One host had 27 orphans out of 31 processes, using 131% CPU on 2 cores. The reporter says all four shutdown paths share one event loop. Users running several concurrent sessions need reliable process lifecycle cleanup.
- [Issue #19](https://github.com/anthropics/claude-plugins-official/issues/19) (4 comments, 3 👍) — the serena context flag, now closed.
- [#837](https://github.com/anthropics/claude-plugins-official/issues/837) (3 comments, 1 👍) — inline keyboard buttons in Telegram for approving actions remotely.
- [#5781](https://github.com/anthropics/claude-plugins-official/issues/5781) (3 comments) — the `security-guidance` Stop hook loops on Windows.

Telegram is the dominant theme: three of the eight active issues concern it. Users want to run Claude Code remotely and unattended.

## 5. Bugs & Stability
Ranked by severity:
1. [#5745](https://github.com/anthropics/claude-plugins-official/issues/5745) — Telegram orphan processes, a resource leak that can degrade a host. No fix PR.
2. [#2857](https://github.com/anthropics/claude-plugins-official/issues/2857) — the Telegram plugin permanently stops polling after 8 transient 409 Conflicts, so the bot silently stops receiving messages until it is restarted manually. The report rates it High, and it has been open since June. No fix PR.
3. [#5781](https://github.com/anthropics/claude-plugins-official/issues/5781) — on Windows, Git Bash and Python 3.14, the `security-guidance` Stop hook fails with Errno 2 on a file that exists. It then enters an unbounded asyncRewake loop. No linked fix. The 2.0.12 PRs address other problems.
4. [#6113](https://github.com/anthropics/claude-plugins-official/issues/6113) — figma 2.2.111 sends a stale `X-Figma-Plugin-Bundle` header (`2_2_108`), so every new session gets a 401 and re-authenticating does not help. The figma bump to v2.2.127 in #6373 may resolve it, but the data does not confirm this.
5. [#6381](https://github.com/anthropics/claude-plugins-official/issues/6381) — the `skill-creator` description loop fails on Windows with WinError 10038, because `select.select` is used on a pipe. This was reported today and has no fix yet.

## 6. Feature Requests & Roadmap Signals
- [#837](https://github.com/anthropics/claude-plugins-official/issues/837) — Telegram inline confirmation buttons. This is a sensible fit for the channel, but no PR exists. Stability fixes for Telegram are likely to come first.
- [#6382](https://github.com/anthropics/claude-plugins-official/issues/6382) — persist the review cost that `security-guidance` already computes, because Stop-hook reviews call `/v1/messages` directly and their spend is invisible. It is a small change and would fit a follow-up release after 2.0.12.

The most likely near-term change is `security-guidance` 2.0.12, which is already staged.

## 7. User Feedback Summary
- **Windows is a weak spot.** Both [#5781](https://github.com/anthropics/claude-plugins-official/issues/5781) and [#6381](https://github.com/anthropics/claude-plugins-official/issues/6381) are Windows-specific.
- **Remote and unattended use is growing.** Telegram users are hitting process leaks, silent polling failures and the lack of a way to approve actions.
- **Cost transparency matters.** [#6382](https://github.com/anthropics/claude-plugins-official/issues/6382) asks for visibility into plugin API spend.
- **Auto-update regressions hurt.** [#6113](https://github.com/anthropics/claude-plugins-official/issues/6113) shows a bad figma build blocking all new sessions.
- **Review reliability matters.** Reporting failed reviews as clean (#6375) was a trust issue.

## 8. Backlog Watch
- [#2857](https://github.com/anthropics/claude-plugins-official/issues/2857) — a High-severity Telegram polling bug, open since 2026-06-15 with no fix PR. It needs maintainer attention.
- [#837](https://github.com/anthropics/claude-plugins-official/issues/837) — the Telegram inline-button request, open since 2026-03-21.
- [#5745](https://github.com/anthropics/claude-plugins-official/issues/5745) and [#5781](https://github.com/anthropics/claude-plugins-official/issues/5781) — both open for over a month (since 2026-09-03) with no fix.
- [#6113](https://github.com/anthropics/claude-plugins-official/issues/6113) — the figma 401 problem, open since 09-14. Maintainers should confirm whether v2.2.127 resolves it, then close it or reply.
- [#6362](https://github.com/anthropics/claude-plugins-official/pull/6362) — the aws-startup-advisor bump, open since 10-05.
- The disabled nightly bump workflow is creating manual work. Restoring it would cut the churn of duplicate bump PRs, such as the figma pair #6346 and #6373.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-10-08

## 1. Today's Overview
Awesome Claude Code (hesreallyhim/awesome-claude-code) had a high-throughput day driven by its automated resource-submission pipeline. 45 issues and 17 PRs were updated, and all but one issue (1 open) and every PR (0 open) are closed or merged. No releases shipped. Activity is almost entirely bot-driven: `github-actions[bot]` opened most of the PRs from issues labeled `approved` / `pr-created` / `validation-passed`. The maintainer (hesreallyhim) added structural changes: two new taxonomy entries. Project health is good: the submission-to-PR flow is clearing its backlog quickly.

## 2. Releases
None.

## 3. Project Progress
**Resources added (bot PRs, closed today):**
- Configuration: [clausona #3122](https://github.com/hesreallyhim/awesome-claude-code/pull/3122), [claude-code-zsh-completion #3117](https://github.com/hesreallyhim/awesome-claude-code/pull/3117)
- Agent Orchestration: [OpenRig #3121](https://github.com/hesreallyhim/awesome-claude-code/pull/3121), [ralph-harness #3113](https://github.com/hesreallyhim/awesome-claude-code/pull/3113) (Ralph Wiggum sub-category)
- Documentation, Knowledge & Learning: [Archify #3120](https://github.com/hesreallyhim/awesome-claude-code/pull/3120) (Data Visualization), [vir #3111](https://github.com/hesreallyhim/awesome-claude-code/pull/3111) (Obsidian)
- Design & UI/UX: [Logo Designer Skill #3118](https://github.com/hesreallyhim/awesome-claude-code/pull/3118)
- Skills: [localpr #3112](https://github.com/hesreallyhim/awesome-claude-code/pull/3112), [Cooklang skills #3109](https://github.com/hesreallyhim/awesome-claude-code/pull/3109)
- Alternative Clients: [Agent Workbench #3114](https://github.com/hesreallyhim/awesome-claude-code/pull/3114)
- Lists & Collections: [Awesome Claude Code Mods #3116](https://github.com/hesreallyhim/awesome-claude-code/pull/3116)
- Writing & Prose Quality: [Scientific Writing Skills #3107](https://github.com/hesreallyhim/awesome-claude-code/pull/3107), [oh-my-patent #3108](https://github.com/hesreallyhim/awesome-claude-code/pull/3108)
- Creative Media: [blender-kiln #3034](https://github.com/hesreallyhim/awesome-claude-code/pull/3034)

**Maintainer structural PRs:**
- [#3119](https://github.com/hesreallyhim/awesome-claude-code/pull/3119) adds the "Data Visualization" sub-category (needed for Archify).
- [#3115](https://github.com/hesreallyhim/awesome-claude-code/pull/3115) adds the "Lists & Collections" category (needed for Awesome Claude Code Mods).
- [#2700](https://github.com/hesreallyhim/awesome-claude-code/pull/2700) (workflows sub-category and better tooling, open since 2026-09-02) was closed.

The pattern shows taxonomy changes landing just before the resource that needs them.

## 4. Community Hot Topics
Comment counts are low (max 3), and these are mostly bot status comments rather than discussion:
- Issues with 3 comments, the full approved → PR-created → validated lifecycle: [#2997 clausona](https://github.com/hesreallyhim/awesome-claude-code/issues/2997), [#2998 OpenRig](https://github.com/hesreallyhim/awesome-claude-code/issues/2998), [#3061 Archify](https://github.com/hesreallyhim/awesome-claude-code/issues/3061), [#3044 Logo Designer](https://github.com/hesreallyhim/awesome-claude-code/issues/3044), [#3054 zsh-completion](https://github.com/hesreallyhim/awesome-claude-code/issues/3054), [#3053 Mods list](https://github.com/hesreallyhim/awesome-claude-code/issues/3053), [#3074 Agent Workbench](https://github.com/hesreallyhim/awesome-claude-code/issues/3074), [#3091 ralph-harness](https://github.com/hesreallyhim/awesome-claude-code/issues/3091), [#3071 localpr](https://github.com/hesreallyhim/awesome-claude-code/issues/3071), [#3099 vir](https://github.com/hesreallyhim/awesome-claude-code/issues/3099), [#3092 Cooklang](https://github.com/hesreallyhim/awesome-claude-code/issues/3092).
- 👍 reactions are 0 across the board.

**Themes in submissions:**
- **Multi-agent / multi-account orchestration**: OpenRig, clausona, maddog ([#3101](https://github.com/hesreallyhim/awesome-claude-code/issues/3101)), Executor ([#3076](https://github.com/hesreallyhim/awesome-claude-code/issues/3076)), ralph-harness.
- **Alternative clients**: Agent Workbench, LodeFlow ([#2986](https://github.com/hesreallyhim/awesome-claude-code/issues/2986)), Vicoa ([#2987](https://github.com/hesreallyhim/awesome-claude-code/issues/2987)), Reemoat ([#3001](https://github.com/hesreallyhim/awesome-claude-code/issues/3001)).
- **Usage and cost observability**: contextburn ([#2985](https://github.com/hesreallyhim/awesome-claude-code/issues/2985)), usage-badge ([#2995](https://github.com/hesreallyhim/awesome-claude-code/issues/2995)), Estela ([#3004](https://github.com/hesreallyhim/awesome-claude-code/issues/3004)).
- **Reviewing Claude's diffs locally**: localpr, [herdr-reviewr #3051](https://github.com/hesreallyhim/awesome-claude-code/issues/3051).

The underlying needs are running parallel or long-lived agent sessions, controlling spend, and reviewing agent output.

## 5. Bugs & Stability
No code bugs or crashes were reported. One data-quality issue:
- [#3104](https://github.com/hesreallyhim/awesome-claude-code/issues/3104) (closed): two entries have author links that 404 because the authors renamed their GitHub accounts, e.g. `cheukyin175` is now `hluaguo` for learn-faster-kit. Closed the same day it was filed. This points to link rot as a recurring maintenance cost.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests. Signals from the maintainer's PRs:
- Taxonomy is still growing (Lists & Collections, Data Visualization, and the earlier workflows sub-category). More sub-categories are likely as clusters form, such as usage and cost, alternative clients, and orchestration.
- Possible next steps include automated link checking for renamed or dead author accounts (from #3104) and further tooling on the submission pipeline.

## 7. User Feedback Summary
Contributors are submitting tools that:
- Wrap or extend the unmodified Claude Code CLI (Agent Workbench, clausona, zsh completion).
- Work across several agents (OpenRig spans Claude Code, Codex and Pi; LodeFlow, Vicoa, usage-badge and TAOS also cover other tools).
- Add hooks for linting and formatting ([immosquare-cleaner #3039](https://github.com/hesreallyhim/awesome-claude-code/issues/3039)).

The submission process looks smooth. The one visible irritation is stale links. An old test issue ([#2154](https://github.com/hesreallyhim/awesome-claude-code/issues/2154), "PR check: test") was also swept closed.

## 8. Backlog Watch
- [#3084 bdg (Browser Debugger CLI)](https://github.com/hesreallyhim/awesome-claude-code/issues/3084) is the only open item. It has `validation-passed` but no `approved` or `pr-created` label yet, so it is awaiting maintainer approval.
- Several `validation-passed` submissions were closed today without a visible `approved` / `pr-created` label (e.g. [#2985](https://github.com/hesreallyhim/awesome-claude-code/issues/2985), [#2986](https://github.com/hesreallyhim/awesome-claude-code/issues/2986), [#2993](https://github.com/hesreallyhim/awesome-claude-code/issues/2993), [#3101](https://github.com/hesreallyhim/awesome-claude-code/issues/3101)). The data doesn't show whether they were accepted or declined, so it's worth checking. Several of them date to 2026-09-28/29.
- Overall the backlog is low, with nothing alarming.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-08

## 1. Today's Overview
The project is active but moving slowly on review. In the last 24h there were 14 PRs updated (6 open, 8 closed) and 1 issue. Nearly all activity is community submissions of new skills. Eight older submissions, created 2026-09-28 to 2026-10-01, were closed on the same day, which looks like a batch triage pass. There were no releases.

## 2. Releases
None.

## 3. Project Progress
All eight closed PRs were updated on 2026-10-08. The data doesn't say whether each was merged or rejected, only "closed". The one PR title that hints at a review state is #1115, tagged `[PR-in-review]`.

- [#1115](https://github.com/VoltAgent/awesome-agent-skills/pull/1115) Atomic-Mail/atomicmail: a mailbox skill for agents, aimed at Productivity and Collaboration.
- [#1127](https://github.com/VoltAgent/awesome-agent-skills/pull/1127) xu-jin-cs/dsh-skills: Development and Testing.
- [#1135](https://github.com/VoltAgent/awesome-agent-skills/pull/1135) stas4000/what-could-break: checks the blast radius of an edit by running real code.
- [#1125](https://github.com/VoltAgent/awesome-agent-skills/pull/1125) iphone-duo-capacitor-skills and ionic-capacitor-skills: foldable-device layout for Capacitor and Ionic apps.
- [#1121](https://github.com/VoltAgent/awesome-agent-skills/pull/1121) pourmirzai/What-If: writes a tiered `WHAT_IF.md` of product, UX and architecture ideas.
- [#1119](https://github.com/VoltAgent/awesome-agent-skills/pull/1119) tangwenwen-md/chinese-de-ai-writing: Chinese de-AI editing skill with a scanner.
- [#1120](https://github.com/VoltAgent/awesome-agent-skills/pull/1120) Resollo (official): marketplace buying and selling skills.
- [#1117](https://github.com/VoltAgent/awesome-agent-skills/pull/1117) half144/cutaway: records web-flow demo videos with Playwright.

Since the repo is a curated list, the closed PRs change the list's content, not the code. Whether these entries were added or declined is unclear from the data, so check the repo before relying on it.

## 4. Community Hot Topics
No item has comments or reactions. Comment counts are 0 or undefined and 👍 is 0 everywhere, so engagement signals are weak. The themes show up in the submissions instead.

- **Vendor and official skill sections.** [#1173](https://github.com/VoltAgent/awesome-agent-skills/pull/1173) proposes a "Skills by Prisma" section with 6 official skills. [#1120](https://github.com/VoltAgent/awesome-agent-skills/pull/1120) did the same for Resollo. Vendors want official placement.
- **Video and media generation.** [#1170](https://github.com/VoltAgent/awesome-agent-skills/pull/1170) and [#1171](https://github.com/VoltAgent/awesome-agent-skills/pull/1171) are the same angles-video-skill, submitted twice with different formatting.
- **Chinese-language and platform-specific tooling.** [#1172](https://github.com/VoltAgent/awesome-agent-skills/pull/1172) reviews drafts for Douyin, Xiaohongshu and WeChat Channels. [#1119](https://github.com/VoltAgent/awesome-agent-skills/pull/1119) handles Chinese de-AI editing. Both are bids for regional use cases.
- **Niche creative and domain skills.** [#1168](https://github.com/VoltAgent/awesome-agent-skills/pull/1168) is a plush 3D mascot generator under Specialized Domains. Its author says it has little usage so far.

## 5. Bugs & Stability
There are no code bugs, since this is a content list. One data-quality issue was reported:

- **Low severity:** [#1169](https://github.com/VoltAgent/awesome-agent-skills/issues/1169) reports a 404 for `axelfreeman/marketing-mindset`, whose user or repo no longer exists. The reporter suggests removing the entry. No fix PR exists yet.

This suggests the list may hold other dead links. Link checking is worth considering.

## 6. Feature Requests & Roadmap Signals
Nobody asked for a feature directly. The signals are:

- **New dedicated vendor sections:** Prisma in [#1173](https://github.com/VoltAgent/awesome-agent-skills/pull/1173) is likely to land if it passes review. Resollo's section in #1120 was closed today, which hints at how the maintainers treat such requests.
- **Dead-link cleanup:** removing the entry in #1169 is the likeliest quick change.
- **Possible new categories or sub-lists for non-English and platform-specific skills,** based on #1172 and #1119. This is speculative.

## 7. User Feedback Summary
- Contributors follow CONTRIBUTING: entries go at the end of sections, with short descriptions. [#1127](https://github.com/VoltAgent/awesome-agent-skills/pull/1127) mentions the 10-word limit.
- Submitters value visibility. Several admit their projects are new or have few users, as in #1168.
- Users get no review feedback. Zero comments appear on any PR, so contributors may not know why their PRs were closed or still pending.
- Readers of the list notice stale entries, as in #1169.

## 8. Backlog Watch
- [#1118](https://github.com/VoltAgent/awesome-agent-skills/pull/1118) UiPath/task: open since 2026-09-29 (9 days). It is a follow-up to #1056 and needs a maintainer decision.
- [#1168](https://github.com/VoltAgent/awesome-agent-skills/pull/1168) plush-mascot-skill: open since 2026-10-07. It is new and may be held for adoption.
- [#1170](https://github.com/VoltAgent/awesome-agent-skills/pull/1170) and [#1171](https://github.com/VoltAgent/awesome-agent-skills/pull/1171): duplicate PRs from the same author. One should be closed.
- [#1169](https://github.com/VoltAgent/awesome-agent-skills/issues/1169): a dead-link issue that is quick to resolve.
- [#1172](https://github.com/VoltAgent/awesome-agent-skills/pull/1172) and [#1173](https://github.com/VoltAgent/awesome-agent-skills/pull/1173): fresh PRs that need first review.

**Health assessment:** Inflow is steady and the maintainers are triaging, but reviews are silent and slow. Duplicate submissions and a dead link show that list maintenance needs more automation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
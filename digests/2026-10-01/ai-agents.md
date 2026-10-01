# MCP Ecosystem Digest 2026-10-01

> Issues: 19 | PRs: 16 | Projects covered: 7 | Generated: 2026-10-01 14:07 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest, 2026-10-01

## 1. Today's Overview
Activity was high: 19 issues and 16 PRs were updated in 24 hours, with no new releases. Most of the traffic comes from maintainer @cliffhall working through the "agentic software factory" and "2026-07-28 Spec Refactor" trackers for `v2/main`. That work covers release pipeline, quality gates, agent skills and docs. Outside contributors opened several small fixes and directory-listing PRs, and two of those were closed because maintainer PRs superseded them. Eight PRs merged or closed today, so the project looks healthy and is preparing for the v2.0.0 merge.

## 2. Releases
None today. The latest published `server-filesystem` is `2026.8.31` (per #4841). Pending release infrastructure is in flight (see below).

## 3. Project Progress
Closed or merged PRs today:
- **Release pipeline:** [#4927](https://github.com/modelcontextprotocol/servers/pull/4927) adds changesets semver for the TypeScript servers and GitHub-Release-triggered publishing, closing #4472. It supersedes olaservo's [#4604](https://github.com/modelcontextprotocol/servers/pull/4604), which was closed, and credits her as co-author. [#4928](https://github.com/modelcontextprotocol/servers/pull/4928) adds the milestone release flow, a release skill, and a split, pinned `release.yml`, closing #4873.
- **Quality gates:** [#4920](https://github.com/modelcontextprotocol/servers/pull/4920) adds `npm run local:gate` with a machine-wide lease, boot smoke test and pre-push-gate skill (closes #4871).
- **Agent guidance:** [#4921](https://github.com/modelcontextprotocol/servers/pull/4921) adds the project-structure, local-dev, testing and client-smoke skills (closes #4872). [#4932](https://github.com/modelcontextprotocol/servers/pull/4932) removes the round cap from the Copilot review loop.
- **Superseded external PRs:** [#4926](https://github.com/modelcontextprotocol/servers/pull/4926) (memory test isolation) and [#4925](https://github.com/modelcontextprotocol/servers/pull/4925) (SSE port conflict) were closed. Maintainer PRs #4937 and #4936 cover the same fixes.

## 4. Community Hot Topics
- [#4117](https://github.com/modelcontextprotocol/servers/issues/4117) (21 comments): the most active thread. It asks for safer memory-server persistence: atomic writes, quotas, redaction and guardrails against destructive operations. Users running the memory server locally want production-grade durability.
- [#4797](https://github.com/modelcontextprotocol/servers/issues/4797) (7 comments): two processes sharing `MEMORY_FILE_PATH` silently lose each other's writes, because the #4555 mutex is per-process. [PR #3286](https://github.com/modelcontextprotocol/servers/pull/3286) proposes a shared-file directory lease as a fix. Together they show demand for multi-client memory use.
- [#1869](https://github.com/modelcontextprotocol/servers/issues/1869) (5 comments): the filesystem server overwrote `.env` without a backup.
- [#4841](https://github.com/modelcontextprotocol/servers/issues/4841) (3 comments): schema dialect compatibility.

No item has any 👍 reactions, so comment counts are the only engagement signal.

## 5. Bugs & Stability
Ranked by severity:
1. **Data integrity (memory):** [#4797](https://github.com/modelcontextprotocol/servers/issues/4797) is multi-process write loss. A fix is proposed in PR #3286, which has been open since February and isn't merged. [#4117](https://github.com/modelcontextprotocol/servers/issues/4117) is the related hardening request.
2. **Data safety (filesystem):** [#1869](https://github.com/modelcontextprotocol/servers/issues/1869) is an unconfirmed `.env` overwrite with no backup. It has been open since May 2025, and no fix PR is linked.
3. **Interoperability:** [#4841](https://github.com/modelcontextprotocol/servers/issues/4841): the filesystem `tools/list` schemas declare `$schema` draft-07, which strict 2020-12 validators reject. No fix PR is listed.
4. **Misleading status:** [#4923](https://github.com/modelcontextprotocol/servers/issues/4923) is SSE reporting "Server is running" on a port already in use. It has a fix in [#4936](https://github.com/modelcontextprotocol/servers/pull/4936).
5. **Flaky tests:** [#4922](https://github.com/modelcontextprotocol/servers/issues/4922) is memory file-path tests writing the real default graph files. The fix is [#4937](https://github.com/modelcontextprotocol/servers/pull/4937).
6. **Tooling and packaging:**
   - [#4934](https://github.com/modelcontextprotocol/servers/issues/4934): the action-pins guard matches case-sensitively.
   - [#4930](https://github.com/modelcontextprotocol/servers/issues/4930): compiled tests ship in the `everything` tarball. Fix: [#4933](https://github.com/modelcontextprotocol/servers/pull/4933).
   - [#4918](https://github.com/modelcontextprotocol/servers/pull/4918): the fetch prompt doesn't validate its URL, so `httpx.InvalidURL` escapes as a generic error.

## 6. Feature Requests & Roadmap Signals
- **v2 spec refactor:** [#4854](https://github.com/modelcontextprotocol/servers/issues/4854) (TypeScript) and [#4855](https://github.com/modelcontextprotocol/servers/issues/4855) (Python) set a per-file 90% coverage gate before any SDK changes. Both are tracked under #4857.
- **Release flow:** the changesets and milestone-release PRs closed today, and [#4472](https://github.com/modelcontextprotocol/servers/issues/4472) is the open Phase 2 issue. [#4938](https://github.com/modelcontextprotocol/servers/issues/4938) / [PR #4939](https://github.com/modelcontextprotocol/servers/pull/4939) bring the contribution policy ("issues, not PRs") to `main` before the v2.0.0 merge. [#4940](https://github.com/modelcontextprotocol/servers/issues/4940) cleans up the CONTRIBUTING wording afterward.
- **Governance:** [#4919](https://github.com/modelcontextprotocol/servers/issues/4919) asks to install the DCO app. [#4931](https://github.com/modelcontextprotocol/servers/issues/4931) and [#4924](https://github.com/modelcontextprotocol/servers/issues/4924) cover agent-guidance docs.
- **Memory hardening:** #4117 and #3286 are likely candidates once the v2 test gates land. This is a prediction and the data doesn't confirm it.

## 7. User Feedback Summary
- Users who run MCP servers locally want safer defaults, such as backups, atomic writes and quotas.
- Several users run the memory server from multiple clients, and the single-process lock doesn't cover that.
- Strict-validator clients hit schema-dialect friction ([#4841](https://github.com/modelcontextprotocol/servers/issues/4841)).
- Contributors keep offering small fixes and directory listings ([#4935](https://github.com/modelcontextprotocol/servers/pull/4935), [#4917](https://github.com/modelcontextprotocol/servers/pull/4917)). Under the new maintainer-only PR policy these may be redirected to issues.
- No explicit satisfaction signals appear in today's data.

## 8. Backlog Watch
- [#1869](https://github.com/modelcontextprotocol/servers/issues/1869): the filesystem `.env` overwrite, open since 2025-05-21.
- [#4117](https://github.com/modelcontextprotocol/servers/issues/4117): open since 2026-05-06 with heavy discussion and no linked resolution.
- [PR #3286](https://github.com/modelcontextprotocol/servers/pull/3286): memory multi-instance locking, open since 2026-02-03 and directly relevant to #4797.
- [#4797](https://github.com/modelcontextprotocol/servers/issues/4797) and [#4841](https://github.com/modelcontextprotocol/servers/issues/4841): confirmed user-facing bugs with no fix PR (except the #3286 proposal for #4797).
- [PR #4918](https://github.com/modelcontextprotocol/servers/pull/4918) (fetch URL validation): open since 2026-09-30.
- Directory-listing PRs [#4935](https://github.com/modelcontextprotocol/servers/pull/4935) and [#4917](https://github.com/modelcontextprotocol/servers/pull/4917) need a policy decision.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-10-01

Scope note: the digests cover the MCP and agent-extension supply chain: the reference servers, registries, curated lists and plugin marketplaces. They do not cover end-user assistants. Where the data gives no signal, such as comment counts that arrive as `undefined`, I say so and don't infer.

## 1. Ecosystem Overview
The ecosystem around MCP is now a layered supply chain. Reference implementations (MCP Servers) feed registries (the official MCP Registry, the Docker MCP Registry). Curated discovery lists (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills) and a plugin marketplace (Claude Plugins) sit on top. Submission volume is high everywhere: 110 PRs in Awesome MCP Servers and 50 in the Docker registry in 24 hours. Review throughput, not contributor interest, is the common bottleneck. The core project is preparing the v2.0.0 merge with heavy investment in release and quality infrastructure. Memory, security and verification are the recurring technical themes.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (1–5, my estimate) | Notes |
|---|---|---|---|---|---|
| MCP Servers | 19 | 16 (8 merged/closed) | None | 4 | Active maintainer-led v2 prep; some user bugs unaddressed |
| MCP Registry | 1 | 4 (1 closed) | None | 3 | Quiet; mostly Dependabot; 3.5-month-old fix pending |
| Awesome MCP Servers | 0 | 110 (99 open, 11 closed) | None | 3 | Heavy inflow, growing review queue |
| Docker MCP Registry | 0 | 50 (all open) | None | 2.5 | No merges, no comments; 13 near-duplicate PRs from one account |
| Claude Plugins (official) | 5 | 7 (5 closed/merged) | None | 3.5 | PRs handled within a day; new bugs untriaged |
| Awesome Claude Code | 13 | 0 | None | 3.5 | Automated intake works; maintainer approval queue |
| Awesome Agent Skills | 0 | 8 (all open) | None | 3 | Small, new queue; 0 merges |

Health scores are my judgment from merge flow, triage responsiveness and backlog age. They are not reported metrics. No project shipped a release.

## 3. MCP Servers' Position
**Advantages**
- It is the only project in the set with substantive engineering throughput: 8 PRs were closed or merged in 24 hours, covering the release pipeline, quality gates and agent skills.
- It has the deepest discussion, with 21 comments on #4117 and 7 on #4797. The registries and lists have almost no comment activity.
- It is the specification-adjacent reference, so its choices (the v2 refactor and the 90% per-file coverage gate before SDK changes) shape the whole stack.

**Technical approach.** It is a code repo with CI and release engineering. The registries are metadata services (the official Registry is a Go service with Postgres), and the lists are curation pipelines with bot validation.

**Community size.** Judged by update volume, it is mid-sized: well below the curated lists (110 and 50 PRs) and well above the registry (5 items). Engagement counts are unreliable here because 👍 is 0 across the board.

**Weaknesses**
- Data-integrity bugs are open: the multi-process memory write loss in #4797 and the filesystem `.env` overwrite in #1869, which has been open since May 2025.
- PR #3286 has been open since February with no merge.
- A maintainer-only PR policy is coming ("issues, not PRs"), which may reduce outside contribution.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Persistent agent memory | MCP Servers, Awesome MCP Servers, Awesome Claude Code | Atomic writes, quotas and multi-process locking (#4117, #4797); a crowded Knowledge & Memory category (#15475, #15463, #15468); context rotation and local-first memory (Threadnote, claude-memory-trim) |
| Remote servers and OAuth | Docker MCP Registry, Claude Plugins, MCP Servers | OAuth 2.1 with PKCE, dynamic client registration and RFC 9728 discovery in 13+ submissions; Context7 OAuth fallback (#6333); schema dialect friction (#4841) |
| Verification and trust | Awesome Agent Skills, Docker registry, Awesome MCP Servers | Proof-by-execution skills (tastegate, what-could-break); prompt-injection defense (little-canary); pre-action mandate checks (HANRIA); `missing-glama` labels and a provenance review for fork-built entries |
| Release and quality automation | MCP Servers, Claude Plugins, Registry | Changesets, milestone releases and local gates; SHA pinning and bot-driven bumps; Dependabot |
| Discoverability | Registry, curated lists | Description search (#1453); category pressure on Knowledge & Memory and Developer Tools |
| Silent-failure reduction | Claude Plugins, MCP Servers | hookify cwd drift (#6339), `learn` macOS quoting (#6336), SSE "running" on a port in use (#4923) |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference implementations, v2 spec refactor | Server authors, SDK maintainers | Monorepo, TS and Python, release engineering |
| MCP Registry | Canonical machine-readable catalog and API | Publishers, clients, agents | Hosted Go service with Postgres, `/v0/servers` search |
| Awesome MCP Servers | Broad human-readable catalog | Developers browsing by category | Markdown list, bot labels (glama, emoji, name) |
| Docker MCP Registry | Containerized and remote entries | Docker users, SaaS vendors | YAML submissions, `tools.json`, remote or Dockerfile |
| Claude Plugins | Curated, vetted marketplace for Claude Code | Claude Code users, vendors | Pinned sources with SHA, renames, member-only scope guard |
| Awesome Claude Code | Claude Code resources of all kinds | Claude Code power users | Issue-form intake with automated validation |
| Awesome Agent Skills | Cross-agent skills | Users of several agent tools | PR-based list by subcategory |

The Claude Plugins marketplace is the most controlled (pinned SHAs, a scope guard). The Docker registry and Awesome MCP Servers are open-intake and show the most spam risk.

## 6. Community Momentum & Maturity
- **Tier 1, rapidly iterating:**
  - MCP Servers: maintainer-driven, with the v2 pipeline in flight.
  - Awesome MCP Servers: the highest inflow.
- **Tier 2, active but gated:**
  - Claude Plugins: fast PR turnaround, slower issue triage.
  - Awesome Claude Code: automated intake with a maintainer queue.
  - Docker MCP Registry: 50 open PRs with no merges.
- **Tier 3, stabilizing or quiet:**
  - MCP Registry: routine dependency bumps, with two older items waiting for decisions.
  - Awesome Agent Skills: young and small, with its first queue forming.

Across tiers, the pattern is that intake scales with automation, but merge capacity does not.

## 7. Trend Signals
1. **Review capacity is the scarce resource.** Automated validation (labels, forms, scope guards) works, but human approval limits flow. For developers, expect slow listing times and favor the official Registry over relying on list inclusion.
2. **Remote, OAuth-based MCP is becoming the default for SaaS vendors.** This is based on 13+ submissions in one batch, and that batch may be one account's campaign. Plan for OAuth 2.1, PKCE, DCR and RFC 9728 discovery support in clients.
3. **Memory servers need production-grade durability.** Multi-client use is real, and single-process locks are not enough. Don't rely on the reference memory server for shared state until #4797 and #3286 are resolved.
4. **Verified output is becoming a selling point.** Skills claim execution-based proof, injection defense and mandate checks. Guardrail tooling is an emerging category.
5. **Schema and metadata conventions are unsettled.** The draft-07 versus 2020-12 mismatch (#4841), empty `tools.json` for dynamic discovery, and name-only search (#1453) show gaps that tool builders should expect to handle in their own clients.
6. **Silent failures are the top user complaint.** Surface errors explicitly in your own hooks and servers (cwd drift, shell quoting, false "running" status).

Caveats: comment and reaction data is missing or zero for most projects, and the Docker registry and Awesome MCP Servers digests show only a sample of their open PRs. Treat the health scores and tier placement as estimates.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest, 2026-10-01

## 1. Today's Overview
Activity was low: 1 issue and 4 PRs were updated in the last 24 hours, and there were no new releases. Three of the four PRs are Dependabot dependency bumps. The only substantive threads are older items that were touched again: a search-capability feature request (#1453) and a GitLab URL validator fix (#1361). Project health looks stable but quiet. Maintainer attention appears to be going to routine maintenance and not to new features.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One PR was closed:
- [#1668](https://github.com/modelcontextprotocol/registry/pull/1668) bumped `pulumi/sdk/v3` from 3.262.0 to 3.263.0 in `/deploy`. It was closed without a merge noted, and the grouped bump [#1680](https://github.com/modelcontextprotocol/registry/pull/1680) (pulumi-kubernetes and pulumi sdk) appears to supersede it. This is the usual Dependabot pattern, so no feature or fix advanced today.

## 4. Community Hot Topics
- [#1453](https://github.com/modelcontextprotocol/registry/issues/1453) — **search should also match against the server description field** (13 comments, 1 👍). This is the most active item of the day. The `?search=` parameter on `/v0/servers` only does an ILIKE substring match on `server_name`. The issue says the description search requested in #135 was never implemented. The underlying need is discoverability. AI agents and users often don't know a server's exact name and want to search by capability, such as "postgres" or "browser automation". The 13 comments over about 11 weeks suggest an ongoing discussion about design and trade-offs, probably covering indexing and relevance ranking, and not only a simple `ILIKE` extension.
- [#1361](https://github.com/modelcontextprotocol/registry/pull/1361) — **allow GitLab repository URLs with nested subgroups**. It was opened in June and refreshed today. It fixes `gitlabURLRegex` in `internal/validators/utils.go`, which accepts only `owner/repo`. Publishers who use GitLab subgroups are currently rejected.

## 5. Bugs & Stability
No new crash or regression reports today. One existing bug has a pending fix:
1. **Medium: valid GitLab nested-subgroup URLs are rejected** (issue #1359). The fix is [#1361](https://github.com/modelcontextprotocol/registry/pull/1361), which is open and has been waiting about 3.5 months. This is a publishing blocker for affected users, though it is not a service-stability issue.

## 6. Feature Requests & Roadmap Signals
- **Description search**: [#1453](https://github.com/modelcontextprotocol/registry/issues/1453). The ongoing activity and the clear gap relative to #135 make this a plausible near-term API improvement. It would likely need a Postgres full-text search or a trigram index to perform well. I can't tell from the data whether a PR exists, so treat this as a signal and not a commitment.
- The GitLab validator fix in #1361 is a small, self-contained change and a likely candidate for the next release once it is reviewed.

## 7. User Feedback Summary
- Discoverability is the main pain point. Name-only search limits both human users and AI agents that query the registry programmatically.
- Publishers on GitLab with nested groups hit validation errors and cannot publish servers.
- Both issues are about getting servers into the registry and finding them there, which fits the registry's role as a catalog. There is no negative feedback about stability or performance in today's data.

## 8. Backlog Watch
- [#1361](https://github.com/modelcontextprotocol/registry/pull/1361) has been open since 2026-06-12 and needs a maintainer review and merge.
- [#1453](https://github.com/modelcontextprotocol/registry/issues/1453) has been open since 2026-07-16. It has a lot of discussion but no visible maintainer decision, so it needs a scope or design call.
- [#1667](https://github.com/modelcontextprotocol/registry/pull/1667) (`cloud.google.com/go/kms` 1.33.0 to 1.34.0) and [#1680](https://github.com/modelcontextprotocol/registry/pull/1680) (deploy group bump) are low-risk and can be merged once CI passes. #1667 has been open since 2026-09-23, and leaving it open lets dependency drift build up.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-01

## 1. Today's Overview
The repo is a curated list, so activity is almost entirely PR-driven. In the last 24h there were 110 PRs updated (99 open, 11 merged or closed), 0 issues and 0 releases. Nearly every PR is a "Add X to category Y" submission. Several are brand-new today (#15463–#15475). Others are older PRs that were touched again on 2026-10-01, probably through bot labeling or author nudges. Submission volume is high and the review queue is growing. The 11 closures are small next to the 99 open PRs.

## 2. Releases
No new releases.

## 3. Project Progress
The data lists 11 merged or closed PRs but names only the closed ones below. None is explicitly marked merged, so I can't confirm any list additions today.
- [#15402](https://github.com/punkpeye/awesome-mcp-servers/pull/15402) KJdayo/janction-render (Art & Culture): closed.
- [#13461](https://github.com/punkpeye/awesome-mcp-servers/pull/13461) hono-telescope (Developer Tools): closed.
- [#15291](https://github.com/punkpeye/awesome-mcp-servers/pull/15291) First Breath (Knowledge & Memory): closed.
- [#15026](https://github.com/punkpeye/awesome-mcp-servers/pull/15026) CanUSign MCP server (Legal): closed. It carried a `missing-glama` label.

The reasons for closure aren't in the data. Possible causes are merge, duplicate or rejection. The remaining 7 closed PRs fall outside the top-20 sample.

## 4. Community Hot Topics
Comment counts come through as `undefined` and 👍 is 0 on every PR, so I can't rank by engagement. Themes in the sample:
- **Knowledge & Memory is the busiest category.** Entries include [#15475 Nexusyn](https://github.com/punkpeye/awesome-mcp-servers/pull/15475), [#15463 Aelios](https://github.com/punkpeye/awesome-mcp-servers/pull/15463), [#15468 PersonaMCP](https://github.com/punkpeye/awesome-mcp-servers/pull/15468) and the closed [#15291 First Breath](https://github.com/punkpeye/awesome-mcp-servers/pull/15291). Developers clearly want persistent agent memory, long-term recall and user-style profiling.
- **Developer Tools is the other crowded category.** See [#15472 shipstores](https://github.com/punkpeye/awesome-mcp-servers/pull/15472) (app-store shipping), [#15471 tailwindshades](https://github.com/punkpeye/awesome-mcp-servers/pull/15471), [#14843 worktrail](https://github.com/punkpeye/awesome-mcp-servers/pull/14843) (session decision logs) and [#14028 runecho](https://github.com/punkpeye/awesome-mcp-servers/pull/14028) (symbol oracle).
- **Proxies and token reduction.** [#14029 terse](https://github.com/punkpeye/awesome-mcp-servers/pull/14029) shrinks tool output before it reaches the model.
- **Vertical servers.** Legal ([#15469 korean-tax-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/15469)), marketing and GEO ([#12107 Vantage](https://github.com/punkpeye/awesome-mcp-servers/pull/12107)), finance ([#10789 blazephoenix-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/10789)), browser automation ([#15366 Usable Browser Agent](https://github.com/punkpeye/awesome-mcp-servers/pull/15366)) and scraping ([#15473 httrack-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/15473)). A batch of four keyless Python servers arrived in [#15474](https://github.com/punkpeye/awesome-mcp-servers/pull/15474).

## 5. Bugs & Stability
No issues or bug reports today. The only quality signals are the automated PR labels:
- `missing-glama` on [#15475](https://github.com/punkpeye/awesome-mcp-servers/pull/15475), [#15473](https://github.com/punkpeye/awesome-mcp-servers/pull/15473) and the closed [#15026](https://github.com/punkpeye/awesome-mcp-servers/pull/15026). The Glama listing required by the contribution rules is absent.
- [#15470 snapback-selfheal](https://github.com/punkpeye/awesome-mcp-servers/pull/15470) has an empty description. That makes review harder and may count against it.

## 6. Feature Requests & Roadmap Signals
With no issues, I read demand from the PR mix:
- Persistent and long-term memory servers are the strongest trend.
- Developer workflow tooling is growing: session continuity, code-symbol indexing, mobile release automation and context compression.
- Real-browser control with a logged-in session is a niche but active area.
- Localized legal and tax data servers are appearing (Korea).

The likely list-structure changes are more category pressure on Knowledge & Memory and Developer Tools, which may call for subcategories. That is my inference, since nothing in the data states it.

## 7. User Feedback Summary
There are no comments, so no direct feedback to report. The contributor-side signals are:
- Authors are following the contribution rules closely. Most PRs carry `has-emoji`, `valid-name` and `has-glama` labels, which shows that the automated validation is working.
- Authors stress that their servers are keyless, local-first or on the official MCP Registry. These look like the trust signals that matter for acceptance.
- A few authors put in multiple entries ([#14029](https://github.com/punkpeye/awesome-mcp-servers/pull/14029) and [#14028](https://github.com/punkpeye/awesome-mcp-servers/pull/14028) by inth3shadows; [#13461](https://github.com/punkpeye/awesome-mcp-servers/pull/13461) and [#13356](https://github.com/punkpeye/awesome-mcp-servers/pull/13356) by Jubstaaa).

## 8. Backlog Watch
These PRs are still open after a long time and were touched again today:
- [#10789 blazephoenix-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/10789) (created 2026-07-23, about 10 weeks old).
- [#12107 vantage-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/12107) (2026-08-13, about 7 weeks old).
- [#13356 standup-mr](https://github.com/punkpeye/awesome-mcp-servers/pull/13356) (2026-09-01).
- [#14028 runecho](https://github.com/punkpeye/awesome-mcp-servers/pull/14028) and [#14029 terse](https://github.com/punkpeye/awesome-mcp-servers/pull/14029) (2026-09-08).
- [#14843 worktrail](https://github.com/punkpeye/awesome-mcp-servers/pull/14843) (2026-09-22).

All of these have the full set of passing labels, so they look ready for maintainer review. With 99 PRs open, a batch triage pass would help. Priority should go to labeled-clean PRs, with `missing-glama` PRs sent back to authors.

**Health assessment:** contributor interest is high and the validation labels are working. The bottleneck is maintainer review throughput, and the data gives no sign of issue-tracker problems.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-01

## 1. Today's Overview
Activity today was submission-driven. 50 PRs were updated in the last 24h and all 50 are open. There were no merges or closures, no new issues and no releases. About 13 of the 20 PRs shown come from one account, **BSalaeddin**, and are near-identical remote MCP server submissions, so a batch or automated submission campaign looks likely. The data shows no comment activity on any listed PR, and the comment counts are undefined. That suggests review throughput is the constraint rather than contributor interest.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so nothing advanced to the registry. All progress is queued in the open submissions below.

## 4. Community Hot Topics
No PR or issue has recorded comments or reactions (comments are undefined and 👍 is 0 everywhere). The clearest themes in the submissions are:

- **Remote MCP server batch (BSalaeddin).** All of these use streamable HTTP, OAuth 2.1 with PKCE and dynamic client registration, and RFC 9728 `resource_metadata` discovery:
  - [#5356 VoiceLabs](https://github.com/docker/mcp-registry/pull/5356)
  - [#5355 Uptimely](https://github.com/docker/mcp-registry/pull/5355)
  - [#5354 UpAPI](https://github.com/docker/mcp-registry/pull/5354)
  - [#5353 UNotes](https://github.com/docker/mcp-registry/pull/5353)
  - [#5352 SuperBooks](https://github.com/docker/mcp-registry/pull/5352)
  - [#5351 SnapVisor](https://github.com/docker/mcp-registry/pull/5351)
  - [#5350 Shorty](https://github.com/docker/mcp-registry/pull/5350)
  - [#5349 Sendly](https://github.com/docker/mcp-registry/pull/5349)
  - [#5348 Postify](https://github.com/docker/mcp-registry/pull/5348)
  - [#5347 Notifly](https://github.com/docker/mcp-registry/pull/5347)
  - [#5346 GetItDone](https://github.com/docker/mcp-registry/pull/5346)
  - [#5345 Dodomain](https://github.com/docker/mcp-registry/pull/5345)
  - [#5344 BioFlow](https://github.com/docker/mcp-registry/pull/5344)
- **Other remote servers using OAuth 2.1:** [#5343 Hydrafetch](https://github.com/docker/mcp-registry/pull/5343), [#5341 HopToDesk](https://github.com/docker/mcp-registry/pull/5341) and [#5340 RedditAPIs](https://github.com/docker/mcp-registry/pull/5340). Together with the batch above, this shows OAuth-based remote hosting becoming the default submission pattern.
- **Agent governance:** [#5357 HANRIA Mandate Check](https://github.com/docker/mcp-registry/pull/5357) is an advisory pre-action check that returns permit, deny or escalate against an operator's mandate. It reflects demand for guardrail tooling.
- **Local and container servers:** [#5306 yacy-search](https://github.com/docker/mcp-registry/pull/5306) is a stdio server for self-hosted P2P search with no API key. [#5339 OctoCounts](https://github.com/docker/mcp-registry/pull/5339) is a code-analysis server packaged in a Dockerfile.
- **No-auth remote:** [#5338 Switchboard Finance](https://github.com/docker/mcp-registry/pull/5338), a hosted finance server with no authentication.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, because there were no issues. One point to watch is that [#5338](https://github.com/docker/mcp-registry/pull/5338) is an unauthenticated remote server, and reviewers may want to check its trust and security posture. [#5340](https://github.com/docker/mcp-registry/pull/5340) uses an empty `tools.json` (`[]`) with dynamic tool discovery, which may affect registry metadata quality.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Indirect signals:
- Remote servers with OAuth 2.1, dynamic client registration and RFC 9728 discovery are now common, so the registry's validation and docs for remote entries will matter more.
- Dynamic tool discovery with an empty `tools.json` may need a documented convention.
- Agent-governance and guardrail servers such as HANRIA are emerging as a category.

## 7. User Feedback Summary
There is no direct user feedback today. The submissions suggest that SaaS vendors want to be listed as hosted MCP endpoints, with browser OAuth sign-in rather than local API keys. Some also accept an API key as a Bearer token ([#5343](https://github.com/docker/mcp-registry/pull/5343)). Self-hosted and no-key options such as [#5306](https://github.com/docker/mcp-registry/pull/5306) also have an audience.

## 8. Backlog Watch
- All 50 updated PRs are open with no recorded review comments. Only 20 were shown, so the other 30 can't be assessed here.
- [#5306 yacy-search](https://github.com/docker/mcp-registry/pull/5306) was created on 2026-09-29 and is the oldest PR in the visible set. It is a stdio server built from a fork branch (`improved-search`), so it likely needs a closer source and provenance review.
- The 13 near-duplicate BSalaeddin PRs (#5344–#5356) would benefit from batch review, with a single check of the shared OAuth and metadata template. Maintainers should also check them for spam or abuse and apply a rate limit or contribution policy if needed.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-10-01

## 1. Today's Overview
Activity was moderate and mostly about maintenance. In the last 24h there were 5 active issues (all open, 1 new) and 7 PRs, of which 5 were closed or merged and 2 are still open. No releases shipped. Most PR traffic was marketplace housekeeping: plugin source moves, SHA bumps, and re-opening external contributions as in-repo branches so checks can run. The new issues are bug reports and design feedback on `hookify`, `learn`, and `claude-automation-recommender`. No issue has a comment or reaction yet beyond one comment on #3774.

## 2. Releases
No new releases.

## 3. Project Progress
Five PRs were closed or merged. The data does not distinguish merged from closed, so the labels below are inferred from the summaries.

- **[#6333](https://github.com/anthropics/claude-plugins-official/pull/6333) Fix Context7 OAuth fallback** (closed): It removes the optional `Authorization` header so Claude Code can start OAuth when `CONTEXT7_API_KEY` is unset. It is a re-open of #5981 by a member, so it passes the member-only scope guard, and the original authorship is preserved. This fixes the plugin showing "Needs authentication".
- **[#6337](https://github.com/anthropics/claude-plugins-official/pull/6337) data-agent-kit rename and move** (closed): It renames `data-agent-kit-starter-pack` to `data-agent-kit` and adds a `renames` entry so existing installs migrate automatically. The source moves to `GoogleCloudPlatform/data-agent-kit-plugin` and the SHA is bumped to 1.0.0.
- **[#6335](https://github.com/anthropics/claude-plugins-official/pull/6335) Bump Carta plugins** (closed): The bot-authored PR moves `carta-investors` to v6.50.2, up from v6.38.0 pinned at a 9/23 hotfix commit.
- **[#6334](https://github.com/anthropics/claude-plugins-official/pull/6334) imessage: surface every inbound image** (closed): Previously only the first image attachment reached the channel tag. All attachments are now collected and passed as `image_path`, `image_path_2`, and so on.
- **[#6322](https://github.com/anthropics/claude-plugins-official/pull/6322) Add math-proof plugin** (closed): It adds `solo` and `siege` (multi-agent) skills for hard mathematics problems, and each run ends with a self-contained `proof.md`.

Still open:
- [#6338](https://github.com/anthropics/claude-plugins-official/pull/6338) adds the Xcode plugin. It carries #6259 onto an in-repo branch and supersedes it.
- [#5981](https://github.com/anthropics/claude-plugins-official/pull/5981) is the original external Context7 fix. It is now superseded by #6333 and can probably be closed.

## 4. Community Hot Topics
Engagement is low: only #3774 has any comments (1), and no item has reactions.

- **[#3774](https://github.com/anthropics/claude-plugins-official/issues/3774) Point azure-cosmos-db-assistant to the canonical agent-kit repo**: This is the most active item. The Cosmos DB team wants the marketplace entry, currently pinned to `AzureCosmosDB/cosmosdb-claude-code-plugin` at a fixed SHA, moved to its canonical repo. Vendors want one authoritative source, and they want marketplace pointers updated without much friction. #6337 is a similar migration.
- **hookify** is the theme across [#6339](https://github.com/anthropics/claude-plugins-official/issues/6339) and [#6332](https://github.com/anthropics/claude-plugins-official/issues/6332). Users want rules that are more reliable and more expressive.

## 5. Bugs & Stability
Ranked by severity:

1. **[#6339](https://github.com/anthropics/claude-plugins-official/issues/6339) hookify rules resolve relative to the live cwd, not the project root.** Rules silently stop applying when the session's cwd drifts, with no error or warning. This is the most serious because it fails silently and can disable safety or policy rules. No fix PR yet.
2. **[#6336](https://github.com/anthropics/claude-plugins-official/issues/6336) `learn` 1.0.0 SessionStart hook fails on macOS.** `${CLAUDE_PLUGIN_ROOT}` is single-quoted in the shell-form command, so `/bin/sh` runs the literal placeholder path. The plugin is broken on macOS when installed from the Anthropic Directory. The fix is likely small (quoting). No fix PR yet.
3. **[#6341](https://github.com/anthropics/claude-plugins-official/issues/6341) `claude-automation-recommender` hardcodes a catalog.** `SKILL.md:88-149` lists specific plugins, so it may recommend entries that no longer exist. This is a correctness and staleness problem rather than a crash. No fix PR yet.

## 6. Feature Requests & Roadmap Signals
- **[#6332](https://github.com/anthropics/claude-plugins-official/issues/6332) hookify `output` field:** The request is for PostToolUse rules to match `tool_response`, which `_extract_field` doesn't expose. An example is suggesting a fix when a test run prints failures. This is a contained change and a plausible near-term addition, though there is no maintainer response yet.
- **[#6341](https://github.com/anthropics/claude-plugins-official/issues/6341):** The proposal is for the recommender to query the installed marketplace dynamically instead of using a static list. It is architecturally sensible and likely to be accepted.
- **[#3774](https://github.com/anthropics/claude-plugins-official/issues/3774):** This is a repoint request, likely to be handled as a routine marketplace update.
- **Likely new plugins:** Xcode (#6338) is the nearest addition.

## 7. User Feedback Summary
- **Silent failures frustrate users.** The hookify cwd bug (#6339) and the macOS hook failure (#6336) both give little signal about what went wrong.
- **Users are extending hookify beyond pre-action checks.** They want it to react to command output, which suggests it is being used for workflow automation as well as guardrails.
- **Platform coverage gaps.** The `learn` hook was apparently not tested on macOS shell quoting.
- **Contributors are working through the process.** Several PRs are external contributions re-opened internally to get past scope guards and run checks (#6333, #6338). That is safe for the repo, but it adds friction and delay for contributors.

## 8. Backlog Watch
- **[#3774](https://github.com/anthropics/claude-plugins-official/issues/3774)** was opened 2026-07-07 and has gone about three months with one comment. It needs a maintainer decision on the source change.
- **[#5981](https://github.com/anthropics/claude-plugins-official/pull/5981)** has been open since 2026-09-09. It is superseded by #6333 and should be closed with a note crediting the author.
- **[#6338](https://github.com/anthropics/claude-plugins-official/pull/6338)** needs review so the Xcode plugin can land. It also supersedes #6259, which should be closed if it isn't already.
- **New bugs [#6339](https://github.com/anthropics/claude-plugins-official/issues/6339) and [#6336](https://github.com/anthropics/claude-plugins-official/issues/6336)** are unanswered. They are only a day old, but the silent failures make them worth early triage.

**Project health:** The marketplace is being maintained actively, and PRs are processed within a day. Issue triage is slower, with no responses on the new bug reports yet.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-10-01

## 1. Today's Overview
Activity is light-to-moderate and consists entirely of resource-submission issues. Thirteen issues were updated in the last 24h (10 open, 3 closed). There were no PRs and no releases. Most open submissions carry the `validation-passed` label, so the automated intake pipeline is working. The two auto-closed issues show that incomplete or templated submissions are filtered out without maintainer effort. Nothing in this window points to a code or product change; the project is in a curation-intake phase.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were merged or closed today. The 3 closed issues were all closed automatically, not resolved by a maintainer.
- Pending-for-merge candidates are the 10 open `validation-passed` submissions (see below). They are queued for the maintainer to add to the list.

## 4. Community Hot Topics
No issue has more than 1 comment or any 👍 reactions. The 1 comment on each issue appears to be the bot's validation result. The most useful signal is the category mix of the submissions:

| Category | Submissions |
|---|---|
| Skills | [#3023 Scaffold](https://github.com/hesreallyhim/awesome-claude-code/issues/3023), [#3020 HarborRank SEO Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3020), [#3015 oracle3](https://github.com/hesreallyhim/awesome-claude-code/issues/3015), [#3018 SDLC-Assist](https://github.com/hesreallyhim/awesome-claude-code/issues/3018) (closed) |
| Remote Control, Notifications & Voice I/O | [#3025 better-tg-cli](https://github.com/hesreallyhim/awesome-claude-code/issues/3025), [#3022 herdr web ui](https://github.com/hesreallyhim/awesome-claude-code/issues/3022) |
| Memory & Context Persistence | [#3016 Threadnote](https://github.com/hesreallyhim/awesome-claude-code/issues/3016), [#3024 claude-memory-trim](https://github.com/hesreallyhim/awesome-claude-code/issues/3024) (closed) |
| Providers, Runtime & Integration Infrastructure | [#3017 Hats](https://github.com/hesreallyhim/awesome-claude-code/issues/3017), [#3019 Parlel MCP](https://github.com/hesreallyhim/awesome-claude-code/issues/3019) |
| Open Source Software | [#3008 Consort](https://github.com/hesreallyhim/awesome-claude-code/issues/3008), [#3021 AgentBridge](https://github.com/hesreallyhim/awesome-claude-code/issues/3021) (closed) |
| Multi-Purpose | [#3000 Promptline](https://github.com/hesreallyhim/awesome-claude-code/issues/3000) |

The underlying needs are:
- **Remote and mobile control:** driving Claude Code from Telegram or a web UI.
- **Memory and context management:** session-log rotation and local-first memory.
- **Account and runtime tooling:** switching accounts and integrating via MCP.
- **Spec-first and plan-first workflows:** Scaffold, Consort, SDLC-Assist.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only stability-related observation is in intake quality. [#3021](https://github.com/hesreallyhim/awesome-claude-code/issues/3021) still has the unfilled template title `<name of your resource>`, and [#3024](https://github.com/hesreallyhim/awesome-claude-code/issues/3024) and [#3018](https://github.com/hesreallyhim/awesome-claude-code/issues/3018) were auto-closed while `validation-pending`. These are likely failed validation checks, not defects in the project.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Two signals are worth noting:
- The "Remote Control, Notifications & Voice I/O" and "Memory & Context Persistence" categories keep receiving entries. These categories are likely to grow in the list.
- [#3019 Parlel MCP](https://github.com/hesreallyhim/awesome-claude-code/issues/3019) has no `validation-passed` or `resource-submission` label and no comments. It may have bypassed the form template, so it is the most likely candidate for manual triage.

## 7. User Feedback Summary
There is no direct feedback, such as complaints or praise, in this window. The submissions show what contributors are building around Claude Code:
- **Multi-agent and multi-tool portability:** [AgentBridge](https://github.com/hesreallyhim/awesome-claude-code/issues/3021) syncs one AGENTS.md across tools.
- **Workflow discipline:** plan-first, test-driven and phase-routing skills.
- **Operational convenience:** [Hats](https://github.com/hesreallyhim/awesome-claude-code/issues/3017) switches accounts without re-login, and [Promptline](https://github.com/hesreallyhim/awesome-claude-code/issues/3000) provides a hotkey prompt library.
- **Vertical domains:** [SEO](https://github.com/hesreallyhim/awesome-claude-code/issues/3020) and [prediction-market trading](https://github.com/hesreallyhim/awesome-claude-code/issues/3015).

## 8. Backlog Watch
- The oldest open items in this window are [#3000 Promptline](https://github.com/hesreallyhim/awesome-claude-code/issues/3000) and [#3008 Consort](https://github.com/hesreallyhim/awesome-claude-code/issues/3008), both created 2026-09-29. Both have passed validation and are waiting for maintainer approval.
- [#3019 Parlel MCP](https://github.com/hesreallyhim/awesome-claude-code/issues/3019) needs manual triage because it has no labels or validation result.
- The 10 open `validation-passed` submissions form a growing review queue. If no maintainer acts on them, the backlog will keep growing.
- The data covers only the last 24h, so older backlog items are not visible here.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-01

Repo: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity was moderate and consisted only of community submissions. There were 8 PRs updated in the last 24h, all open, and no issues, releases or merges. Six of the eight PRs target "Development and Testing". The queue is growing, and maintainer throughput is the main health question. The PR numbers run #1129–#1136, and none has any recorded comments or reactions.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today, so no entries or fixes were delivered. Eight submissions are waiting for review (see Backlog Watch).

## 4. Community Hot Topics
No item has comments or reactions (the comment count is undefined in the data and 👍 is 0 everywhere). Instead of engagement, the themes show where submitters are focused:

- **Quality gates and verification for coding agents.** These submissions are the most distinctive:
  - [#1136 stas4000/tastegate](https://github.com/VoltAgent/awesome-agent-skills/pull/1136) makes the agent open the built page in a real browser at 390px and 1440px before it can call a task done.
  - [#1135 stas4000/what-could-break](https://github.com/VoltAgent/awesome-agent-skills/pull/1135) looks for breakage outside the diff and proves safety by running real code.
- **Security.**
  - [#1129 kulchankas/paranoid](https://github.com/VoltAgent/awesome-agent-skills/pull/1129) adds a `/hack-me` command that pentests the user's own localhost app. It runs find → prove → patch → re-verify.
  - [#1134 hermes-labs-ai/little-canary](https://github.com/VoltAgent/awesome-agent-skills/pull/1134) screens inbound text with a sacrificial canary, a defense against prompt injection.
- **Design and UI tooling.**
  - [#1130 mowgli-ai/mowgli](https://github.com/VoltAgent/awesome-agent-skills/pull/1130) connects agents to a product-design canvas through a CLI.
  - [#1132 allxsmith/bestax](https://github.com/VoltAgent/awesome-agent-skills/pull/1132) adds seven skills for a React and Bulma v1 component library.
- **Vertical domains.** [#1131 OptimNow/cloud-finops-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1131) covers cloud, SaaS and AI cost management and goes into Specialized Domains.

The underlying need is trust in agent output: contributors want proof by execution rather than assertion, plus protection against injection.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there were no issues. This is a curated list rather than software, so stability risk is limited to link and entry hygiene.

[#1133 kensaurus/cursor-kenji → kensaurus/skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1133) is a maintenance fix for a renamed repo. GitHub redirects the old URL, and the PR switches the entry to the canonical link in a one-line change. The author says they verified the link returns HTTP 200.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests. Some signals can be read from the PRs:

- The "Development and Testing" subcategory is getting crowded (6 of 8 PRs). It could be split, for example into design/UI, security and verification, if it keeps growing. This is an inference, not something anyone requested.
- Contributors are following the CONTRIBUTING rule to append entries at the end of the subcategory. That may cause merge conflicts as PRs queue up.
- Link rot from repo renames (#1133) suggests a link-checking CI job would help. No one has proposed one.

## 7. User Feedback Summary
There is no direct user feedback today. Submitters describe the following:

- Measurable results. #1136 cites measured runs on Claude Opus 5.5.
- Cross-agent compatibility. #1129 says it runs in Claude Code and other agents.
- Skills packaged for specific stacks (Bestax) or domains (FinOps).

Contributors are positioning skills as verifiable and safe to run, which suggests the ecosystem is maturing past simple prompt packs.

## 8. Backlog Watch
All 8 open PRs were created on 2026-09-30 or 2026-10-01, so none is stale yet. The list below is ordered oldest to newest within the open queue:

- [#1129](https://github.com/VoltAgent/awesome-agent-skills/pull/1129), [#1130](https://github.com/VoltAgent/awesome-agent-skills/pull/1130) and [#1131](https://github.com/VoltAgent/awesome-agent-skills/pull/1131), all from 2026-09-30, are the oldest.
- [#1133](https://github.com/VoltAgent/awesome-agent-skills/pull/1133) is a trivial one-line fix and a quick win to merge.
- [#1132](https://github.com/VoltAgent/awesome-agent-skills/pull/1132), [#1134](https://github.com/VoltAgent/awesome-agent-skills/pull/1134), [#1135](https://github.com/VoltAgent/awesome-agent-skills/pull/1135) and [#1136](https://github.com/VoltAgent/awesome-agent-skills/pull/1136) are new.

Two points need maintainer attention:
- The two skills from stas4000 (#1135 and #1136) were submitted together. They should be checked for overlap in scope.
- The security-related skills (#1129 and #1134) deserve a closer review before merging.

Overall health: submission inflow is steady, but with 0 merges today the review queue is the bottleneck. The data covers only the last 24h, so older backlog beyond these 8 PRs is not visible.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
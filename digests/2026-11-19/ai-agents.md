# MCP Ecosystem Digest 2026-11-19

> Issues: 41 | PRs: 20 | Projects covered: 7 | Generated: 2026-11-18 16:07 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Digest, 2026-11-19

## 1. Today's Overview
The project had a very busy release day. v2.5.0 shipped on 2026-11-18 and fixed eight vulnerabilities across `mcp-server-git`, `server-filesystem` and `server-everything`. In the last 24h, 20 PRs were merged or closed and none are still open. 41 issues were touched, 21 of them closed, mostly the advisory tracking issues and dependency chores. Almost all of the activity came from one maintainer (cliffhall) and automation bots. Outside contributions were mostly small enhancement proposals. Project health looks strong on security response. Follow-up hardening and CI gaps are now surfacing.

## 2. Releases
**[v2.5.0](https://github.com/modelcontextprotocol/servers/issues/5572)** (release tracker #5572; the release notes are truncated in the data)
- Upgrade targets from the release notes:
  - `mcp-server-git` 2026.11.18
  - `@modelcontextprotocol/server-filesystem` 2.4.0
  - `@modelcontextprotocol/server-everything` 2.3.1
- Eight advisories are fixed:
  - **git (6):**
    - GHSA-r2q8-f657-4r56: a crafted `.git/index` escapes the `--repository` boundary ([#5577](https://github.com/modelcontextprotocol/servers/issues/5577)).
    - GHSA-8wv7-r664-7594: submodule config runs programs ([#5578](https://github.com/modelcontextprotocol/servers/issues/5578)).
    - GHSA-pm7p-vphh-2cg7: an empty driver name bypasses the hardening ([#5576](https://github.com/modelcontextprotocol/servers/issues/5576)).
    - GHSA-9vjp-x34c-xg6v: a config include created during `git_merge` runs a command ([#5575](https://github.com/modelcontextprotocol/servers/issues/5575)).
    - GHSA-87qg-cmw8-jc5m: promisor config runs a program on lazy fetch ([#5574](https://github.com/modelcontextprotocol/servers/issues/5574)).
    - GHSA-h2g3-rwxm-xfm3: `gc.recentObjectsHook` runs during merge ([#5573](https://github.com/modelcontextprotocol/servers/issues/5573)).
  - **filesystem (1):** GHSA-rq2p-q7c4-6g27, a symlink swap lets directory listings return names from outside `allowedDirectories` ([#5580](https://github.com/modelcontextprotocol/servers/issues/5580)).
  - **everything (1):** GHSA-38j4-j742-j7r3, the gzip fetch SSRF guard treats the NAT64 prefix `64:ff9b::/96` as public ([#5579](https://github.com/modelcontextprotocol/servers/issues/5579)).
- The release also includes the Streamable HTTP rollout for six servers (referenced in [#5593](https://github.com/modelcontextprotocol/servers/issues/5593)), and the `mcp-server-fetch` Python floor was raised to 3.11.5 ([#5567](https://github.com/modelcontextprotocol/servers/pull/5567)).
- **Migration notes:**
  - Upgrade the git, filesystem and everything servers.
  - Python 3.10 users of `mcp-server-fetch` must move to 3.11.5 or later.
  - The Windows parent-directory swap is now documented as a limit of the implementation, not fixed ([#5568](https://github.com/modelcontextprotocol/servers/pull/5568)).

## 3. Project Progress
Merged or closed PRs:
- **Release plumbing:**
  - [#5592](https://github.com/modelcontextprotocol/servers/pull/5592): `v2/main` merged into `main`.
  - [#5597](https://github.com/modelcontextprotocol/servers/pull/5597) and [#5537](https://github.com/modelcontextprotocol/servers/pull/5537): version packages.
  - [#5591](https://github.com/modelcontextprotocol/servers/pull/5591): Python CalVer stamps for fetch, git and time (2026.11.18).
- **Security fix PRs:**
  - Git: [#5581](https://github.com/modelcontextprotocol/servers/pull/5581), [#5582](https://github.com/modelcontextprotocol/servers/pull/5582), [#5585](https://github.com/modelcontextprotocol/servers/pull/5585), [#5586](https://github.com/modelcontextprotocol/servers/pull/5586), [#5587](https://github.com/modelcontextprotocol/servers/pull/5587), [#5590](https://github.com/modelcontextprotocol/servers/pull/5590).
  - Filesystem: [#5584](https://github.com/modelcontextprotocol/servers/pull/5584).
  - Everything: [#5583](https://github.com/modelcontextprotocol/servers/pull/5583).
- **Fetch hardening:**
  - [#5564](https://github.com/modelcontextprotocol/servers/pull/5564) pins the connection to the address the private-IP guard checked, which closes a DNS-rebinding gap.
  - [#5562](https://github.com/modelcontextprotocol/servers/pull/5562) rejects `--allowed-hosts` wildcards on IP addresses.
  - [#5571](https://github.com/modelcontextprotocol/servers/pull/5571) fixes the ruff failures that turned `v2/main` red.
- **Memory:**
  - [#5563](https://github.com/modelcontextprotocol/servers/pull/5563) stops stale-lock breaking from deleting a successor's live lock.
  - [#5596](https://github.com/modelcontextprotocol/servers/pull/5596) releases held locks when the Streamable HTTP server stops.
- **Dependencies:** [#5561](https://github.com/modelcontextprotocol/servers/pull/5561) pins `hono` and `@hono/node-server` through overrides. It closes [#5549](https://github.com/modelcontextprotocol/servers/issues/5549) and [#5545](https://github.com/modelcontextprotocol/servers/issues/5545).
- **Docs:** [#5568](https://github.com/modelcontextprotocol/servers/pull/5568).

## 4. Community Hot Topics
Comment counts are low across the board, and the most-discussed items are only at 3 to 4 comments.
- [#5549](https://github.com/modelcontextprotocol/servers/issues/5549) (4 comments) and [#5260](https://github.com/modelcontextprotocol/servers/issues/5260) (4 comments): dependency advisories and the Windows filesystem swap. #5260 was closed as not planned and is now documented as a limitation.
- [#5552](https://github.com/modelcontextprotocol/servers/issues/5552) and [#5553](https://github.com/modelcontextprotocol/servers/issues/5553) (3 comments each): tool-description quality for small models. The author measured these with qwen3:4b. In `git_log`, the description doesn't say results are newest-first or that timestamp filters are optional. In `search_files`, the examples cause models to refuse to search. The underlying need is that tool descriptions should work for weaker local models, not only frontier ones.
- [#5555](https://github.com/modelcontextprotocol/servers/issues/5555) (2 comments): `move_file` wrongly reports that the destination's parent directory doesn't exist.
- [#5521](https://github.com/modelcontextprotocol/servers/issues/5521) (2 comments): the fetch wildcard-IP allowlist bug, fixed by #5562.

## 5. Bugs & Stability
In rough order of severity:
1. **Security follow-ups, open:**
   - [#5599](https://github.com/modelcontextprotocol/servers/issues/5599): repeat the git `--repository` confinement check after a tool writes the working tree.
   - [#5600](https://github.com/modelcontextprotocol/servers/issues/5600): directory listings are not anchored on Windows. This is the remaining part of the filesystem advisory.
   - Neither has a fix PR yet.
2. **Fixed today:** the fetch DNS-rebinding gap ([#5557](https://github.com/modelcontextprotocol/servers/issues/5557)), the fetch wildcard-IP allowlist ([#5521](https://github.com/modelcontextprotocol/servers/issues/5521)), the memory stale-lock deletion ([#5560](https://github.com/modelcontextprotocol/servers/issues/5560)), and the memory lock left behind on shutdown ([#5595](https://github.com/modelcontextprotocol/servers/issues/5595)).
3. **Open memory lock hand-off windows:** [#5565](https://github.com/modelcontextprotocol/servers/issues/5565), with no PR yet. [#5570](https://github.com/modelcontextprotocol/servers/issues/5570) tracks two Streamable HTTP tests that time out intermittently on Windows CI.
4. **Open functional bugs:**
   - [#5555](https://github.com/modelcontextprotocol/servers/issues/5555): `move_file` reports a false "Parent directory does not exist".
   - [#5176](https://github.com/modelcontextprotocol/servers/issues/5176): git receives the string "null" as None. It is blocked on the SDK (python-sdk#3055).
   - [#5559](https://github.com/modelcontextprotocol/servers/issues/5559): the time server leaks a host filesystem path in its timezone error.
5. **Build health:** `v2/main` went red after #5567 and #5564 merged without being tested together ([#5569](https://github.com/modelcontextprotocol/servers/issues/5569)). #5571 fixed it. [#5594](https://github.com/modelcontextprotocol/servers/issues/5594) reports that `picomatch` GHSA-fc5q-39xc-vjpf has no patched release. It affects dev tooling only, but `npm audit` reports 25 high findings.

## 6. Feature Requests & Roadmap Signals
- [#5558](https://github.com/modelcontextprotocol/servers/issues/5558): evict idle Streamable HTTP and SSE sessions in server-everything. A maintainer filed it, so it is likely for the next release.
- [#5598](https://github.com/modelcontextprotocol/servers/issues/5598): add CI that builds and boots the Docker images.
- [#5588](https://github.com/modelcontextprotocol/servers/issues/5588) and [#5589](https://github.com/modelcontextprotocol/servers/issues/5589): a merge queue or required checks, and a catch-up-before-merge rule for `v2/main`. These are a direct response to the red build.
- [#5552](https://github.com/modelcontextprotocol/servers/issues/5552) and [#5553](https://github.com/modelcontextprotocol/servers/issues/5553): improve tool descriptions. These are cheap to ship.
- Characterization-test proposals from one contributor: [#5539](https://github.com/modelcontextprotocol/servers/issues/5539), [#5540](https://github.com/modelcontextprotocol/servers/issues/5540), [#5541](https://github.com/modelcontextprotocol/servers/issues/5541), [#5542](https://github.com/modelcontextprotocol/servers/issues/5542) and [#5543](https://github.com/modelcontextprotocol/servers/issues/5543).
- [#5593](https://github.com/modelcontextprotocol/servers/issues/5593): fix the `local-dev` skill doc about the Python servers' sessions.
- Closed: [#5551](https://github.com/modelcontextprotocol/servers/issues/5551), a request to add Cowork to ADDITIONAL.md, and [#5544](https://github.com/modelcontextprotocol/servers/issues/5544), a Verity bench-slot proposal.

## 7. User Feedback Summary
- Users on smaller local models (qwen3:4b via Ollama) are hitting failures caused by the tool descriptions, not by server logic. Filtering to an empty window and refusing to search are the two reported cases.
- Windows users see more problems than others: the filesystem parent-swap limit, unanchored listings, flaky CI, and the `move_file` error.
- Security-minded users and downstream operators get fast advisory turnaround. The advisories were published together with the release and the follow-ups were opened the same day.
- Python 3.10 users of fetch are affected by the new 3.11.5 floor.

## 8. Backlog Watch
- [#5176](https://github.com/modelcontextprotocol/servers/issues/5176) has been open since 2026-10-19 and is waiting on the Python SDK.
- [#5539](https://github.com/modelcontextprotocol/servers/issues/5539) to [#5543](https://github.com/modelcontextprotocol/servers/issues/5543) have been open since 2026-11-12 with one comment each and no maintainer decision on whether the tests are wanted.
- [#5552](https://github.com/modelcontextprotocol/servers/issues/5552), [#5553](https://github.com/modelcontextprotocol/servers/issues/5553) and [#5555](https://github.com/modelcontextprotocol/servers/issues/5555) are user-reported issues from 11/16 to 11/17 with no fix PR.
- The security follow-ups [#5599](https://github.com/modelcontextprotocol/servers/issues/5599) and [#5600](https://github.com/modelcontextprotocol/servers/issues/5600) need attention soon because they follow a freshly published release.
- The process and CI items [#5588](https://github.com/modelcontextprotocol/servers/issues/5588), [#5589](https://github.com/modelcontextprotocol/servers/issues/5589) and [#5598](https://github.com/modelcontextprotocol/servers/issues/5598) are open, and #5588 and #5589 address the cause of the 11/18 red build.

---

## Cross-Ecosystem Comparison

# MCP and Agent-Tooling Ecosystem Comparison, 2026-11-19

The seven projects here are MCP and agent-tooling infrastructure and curation repos. They are not end-user assistants. The health scores below are my own judgment from the digest data. They are not project-reported.

## 1. Ecosystem Overview
The ecosystem splits into reference implementations (MCP Servers), a discovery and trust layer (MCP Registry, Docker MCP Registry, Claude Plugins), and curated lists (Awesome MCP Servers, Awesome Agent Skills, Awesome Claude Code). Submission demand is far larger than review capacity. The curated lists and Docker's registry show 250 or more PRs in one day, with few or no merges. Security is moving from advisory to enforcement. MCP Servers fixed eight GHSAs in v2.5.0, and Claude Plugins now restricts command hooks and local MCP servers for non-Verified orgs. Remote, OAuth-based servers and agent skills are the fastest-growing submission types.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release | Health (1–5, my estimate) |
|---|---|---|---|---|
| MCP Servers | 41 touched, 21 closed | 20, all merged or closed | v2.5.0 (11-18), 8 security fixes | 4.5. Fast security response, with follow-ups and a CI gap open. |
| MCP Registry | 2 open | 2 open | None | 3.5. Light activity, with a time-sensitive namespace issue (#1778). |
| Awesome MCP Servers | 0 | 208 (196 open, 12 closed or merged) | None | 3. Review backlog is the bottleneck. |
| Docker MCP Registry | 0 | 50, all open | None | 2.5. Zero merges, and the oldest PR is about 12 months old. |
| Claude Plugins (official) | 5 (4 open) | 21 (11 open, 10 closed or merged) | None, but security-guidance 2.0.21 is staged (#7143) | 4. Active maintenance, with a policy friction point (#7024). |
| Awesome Claude Code | 0 | 0 | None | Unknown. No activity. |
| Awesome Agent Skills | 0 | 3 open | None | 3.5. Low volume and fresh PRs, but no merges. |

## 3. MCP Servers' Position
- **Advantages:** It is the only project in the set that ships code and releases. It has the fastest security turnaround. Eight advisories were disclosed and fixed together with v2.5.0, and follow-ups #5599 and #5600 were opened the same day. It has also begun a Streamable HTTP rollout across six servers. Its PRs closed at a 100% rate in the window, against 0 merges at Docker.
- **Technical approach:** It is a reference implementation of the protocol, covering git, filesystem, fetch, memory and everything. The registries only index servers, and the curated lists only link to them. Its concerns are sandbox confinement, SSRF and DNS-rebinding, and lock handling, not discovery.
- **Community size:** The 41 issues touched is the highest issue activity in the set. However, most of it is one maintainer (cliffhall) plus bots, and the most-discussed items have only 3 to 4 comments. In raw PR volume it is much smaller than Awesome MCP Servers (208) and Docker (50). Its contributor base looks narrow even though its output is strong.
- **Gaps:** `v2/main` went red when two PRs merged without being tested together. Windows support is weaker than on other platforms, and #5600 is still open. No fix PRs exist yet for the security follow-ups #5599 and #5600 or for #5565.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Namespace and publisher trust | MCP Registry, Claude Plugins, Docker Registry | Domain-takeover risk (#1778), org-rename orphans (#1864), Verified-org rules (#7024), and closed-source hosted servers with no repo. |
| Supply-chain and sandbox security | MCP Servers, Claude Plugins, Awesome MCP Servers | git config-execution advisories, SSRF and DNS-rebinding fixes, `security-guidance` hardening, and Guardian MCP proxy submissions. |
| Remote, OAuth 2.1 servers | Docker Registry, Awesome MCP Servers, MCP Servers | Hosted endpoints with DCR (#7227, #7292, #7323), plus the Streamable HTTP rollout. |
| Review automation | Awesome MCP Servers, Docker Registry, Awesome Agent Skills | `missing-glama` and `duplicate` labels already exist. Both digests suggest automated validation. |
| Windows and cross-platform | MCP Servers, Claude Plugins | Unanchored directory listings (#5600), flaky Windows CI (#5570), and Git Bash path bugs (#7161). |
| Agent memory and persistence | Awesome MCP Servers, MCP Servers | Align, CAP-Shield and Membase submissions; the memory server lock fixes. |
| Tool-description quality for small models | MCP Servers | #5552 and #5553 were measured on qwen3:4b. |

## 5. Differentiation Analysis
- **Feature focus:**
  - MCP Servers: code and security fixes.
  - MCP Registry: API performance (#1865) and namespace governance.
  - Docker Registry: catalog onboarding of containers and remote servers.
  - Claude Plugins: first-party plugin quality and a policy gate.
  - Awesome lists: discovery only.
- **Target users:**
  - Server operators and security teams use MCP Servers.
  - Publishers use the registries.
  - Claude Code users use Claude Plugins.
  - Evaluators and newcomers use the lists.
- **Architecture:** Only MCP Servers and Claude Plugins carry runtime code (hooks and servers). The Registry is a service with an API. Docker packages servers as containers and also lists remote endpoints. The lists are README-only, so they are low-risk to merge, but nobody is merging them quickly.
- **Governance:** The Registry and Docker are both bottlenecked on maintainer action. Claude Plugins is more opinionated, with an enforcement policy that is unclear to authors.

## 6. Community Momentum & Maturity
- **Rapid iteration:** MCP Servers, which shipped a release and 20 PRs in a day, and Claude Plugins, which has `security-guidance` PRs staged for 2.0.21 and a bot SHA-bump stream.
- **High inflow, low throughput:**
  - Awesome MCP Servers: 196 open PRs, with some from late October.
  - Docker MCP Registry: 50 of 50 PRs open.
  - Both have demand but little visible review.
- **Steady and small:** MCP Registry (4 items, but #1778 is deadline-bound) and Awesome Agent Skills (3 PRs).
- **Dormant:** Awesome Claude Code, with no activity in 24h. One quiet day isn't proof of abandonment.
- **Maturity:** MCP Servers is the most mature. It has advisory workflow, CalVer stamps and a release train. The registries and lists are mature as artifacts but weak on process.

## 7. Trend Signals
1. **Security is the product.** Config-triggered code execution in git tooling, SSRF guards and namespace takeover are now routine concerns. Developers should treat MCP servers as an attack surface and pin to patched versions, starting with the v2.5.0 upgrades.
2. **Trust and identity are the next infrastructure layer.** Verified orgs, domain-verified namespaces and org renames all need lifecycle handling. Publishers should expect stricter gates and should hold credentials for deprecation and migration.
3. **Remote OAuth servers are replacing local stdio as the vendor default.** Plan for OAuth 2.1 with DCR. Registry tooling and tool discovery for remote servers (such as empty `tools.json`) are still inconsistent.
4. **Tool descriptions are a reliability surface.** Failures on small local models come from description wording (#5552, #5553), so test with weaker models too.
5. **Skills and plugins are moving beyond prompt files.** Submissions now bundle CLIs, hooks and web apps. That raises the review and security burden.
6. **Curation does not scale manually.** Label-based triage, link validation and merge queues are the obvious next steps, and #5588 and #5589 are an early example.

**Caveats:** The data does not separate merged from closed PRs in several projects. Several comment fields were undefined, so engagement is unmeasured for the lists and Docker. The Awesome Claude Code result may only reflect one quiet window.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-11-19
Source: github.com/modelcontextprotocol/registry

## 1. Today's Overview
Activity was light: 2 issues and 2 PRs were updated in the last 24 hours. All four are open, with no merges, closures or releases. The work is namespace housekeeping (deprecations and domain-ownership transitions) and registry API performance. Issue #1778 has a deadline today: the `com.aiapplyd` domain changes owner on 19 Nov 2026. Project health looks stable, but maintainer responsiveness on namespace requests is the thing to watch.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. Two PRs are open:
- [PR #1865](https://github.com/modelcontextprotocol/registry/pull/1865) (rdimitrov) changes how `updated_since` listing queries pick pages. For plain `updated_since` queries with `limit=100`, it probes up to 513 matching keys in timestamp order. If the set has at most 512 keys, it uses the whole set. Otherwise it falls back to another selection strategy (the summary is truncated). The aim is to avoid scanning large name ranges for sparse results, and to avoid sorting a large recent history for an early page. This helps clients that sync the registry incrementally.
- [PR #1863](https://github.com/modelcontextprotocol/registry/pull/1863) (yassinht) is a docs change. It adds "MCP Transparency Log" to the community projects "Other" section, in alphabetical order. The project publishes a nightly record of the tool surface (names, descriptions and so on) that each remote endpoint in the registry actually served.

## 4. Community Hot Topics
- [Issue #1778](https://github.com/modelcontextprotocol/registry/issues/1778) has the most discussion, with 5 comments and 0 👍. It was opened 2026-10-31 and last updated 2026-11-17. The GetMattered team moved from `com.aiapplyd/aiapplyd` (versions 1.6.0–1.9.0) to `com.getmattered/getmattered` (latest 1.12.0), and deprecated all six old versions on 24 October. The domain that verifies the `com.aiapplyd` namespace changes owner today. They want the namespace locked so the new domain owner can't publish under it and impersonate a prior publisher. **Underlying need:** a registry-side safeguard against domain-verified namespaces being taken over after a domain lapses or is sold. This is a supply-chain trust issue, not only a cleanup request.
- [Issue #1864](https://github.com/modelcontextprotocol/registry/issues/1864) has 0 comments. It asks to deprecate every version of `io.github.nightswatchhq/nuthatch` (4.0.0). The GitHub org was renamed to `nuthatch-org`, so nobody can authenticate for the old namespace any more. **Underlying need:** a way to migrate or deprecate after a GitHub org rename, without publisher credentials.

Neither PR has comment or reaction data, so engagement on them can't be assessed.

## 5. Bugs & Stability
No crashes or regressions were reported. The two items closest to stability concerns, by severity:
1. **Namespace takeover risk (#1778).** This is time-sensitive and security-adjacent. Once the domain changes hands, the new owner could in principle authenticate for `com.aiapplyd` and publish under it. No fix PR is linked.
2. **Orphaned namespace after org rename (#1864).** Users may still resolve a stale server, and the publisher can't deprecate it. No fix PR is linked.
3. **Query performance (PR #1865).** This is a proactive fix for expensive `updated_since` queries rather than a reported outage.

## 6. Feature Requests & Roadmap Signals
Both issues point to a missing self-service capability. Publishers whose namespace authentication is gone have no way to deprecate or lock their servers. The possible directions are:
- Admin-side tooling for namespace locking and deprecation.
- A migration or rename flow for GitHub org renames.
- Re-verification or expiry checks for DNS/domain-verified namespaces.

None of these has a roadmap commitment in the data. PR #1865 is the most likely to land soon, since it is a scoped, maintainer-authored change. I'm inferring this from authorship, not from any stated schedule.

## 7. User Feedback Summary
- Publishers are rebranding or renaming (domain changes, GitHub org renames) and find the registry has no clean path to retire old namespaces.
- Publishers are doing the right thing by deprecating old versions and publishing under new names. Their issues show they are looking after consumers.
- Community tooling is growing: MCP Transparency Log (PR #1863) shows interest in independent auditing of what remote servers actually serve.
- There is no satisfaction or dissatisfaction signal beyond these administrative requests.

## 8. Backlog Watch
- **[#1778](https://github.com/modelcontextprotocol/registry/issues/1778)** is the most urgent. It has been open about 19 days with 5 comments, and the domain change is today. It needs maintainer action immediately. The data doesn't show whether a maintainer has responded.
- **[#1864](https://github.com/modelcontextprotocol/registry/issues/1864)** is new (1 day old) and unanswered. It is a routine deprecation request, but it will probably need a manual maintainer action.
- **[PR #1863](https://github.com/modelcontextprotocol/registry/pull/1863)** is a low-risk docs PR awaiting review.
- **[PR #1865](https://github.com/modelcontextprotocol/registry/pull/1865)** needs review. Because it touches query behavior, it is worth checking for pagination correctness at the 512/513-key boundary.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Project Digest — 2026-11-19

## 1. Today's Overview
The project had no Issue activity and no releases in the last 24 hours. It is a curated list, so the work is almost entirely PR-driven. 208 PRs were updated: 196 are open and 12 are merged or closed. Nearly all of them are new-entry submissions. A few are updates to existing entries. Submission volume is very high, and the open queue is large. Several PRs date back to late October, so review throughput looks like the main bottleneck. No PR in the sample has any comments, so most contributors are waiting without feedback.

## 2. Releases
None.

## 3. Project Progress
12 PRs were merged or closed. The data only details one of them:
- [#19891](https://github.com/punkpeye/awesome-mcp-servers/pull/19891) (closed, not merged): Add misiki-in/gocommerce to E-Commerce. It is an MIT-licensed Go commerce engine whose `ext/mcp` package exposes store tools such as products, orders, refunds and sales reports.

The data doesn't say whether the other 11 were merged or closed. It also doesn't say why #19891 was closed. Nothing in the data shows a change to the list's structure or tooling.

## 4. Community Hot Topics
No Issue or PR in the sample has a comment count (the field is undefined) or any 👍 reactions. The sample therefore can't rank discussion, so these are the themes that recur in the submissions:
- **Agent memory and knowledge**
  - [#19152](https://github.com/punkpeye/awesome-mcp-servers/pull/19152): Align, a decision graph for coding agents.
  - [#19951](https://github.com/punkpeye/awesome-mcp-servers/pull/19951): CAP-Shield, memory selection.
  - [#18852](https://github.com/punkpeye/awesome-mcp-servers/pull/18852): update to the Membase entry.
- **Agent payments via x402 on Base**
  - [#19955](https://github.com/punkpeye/awesome-mcp-servers/pull/19955): payment-recipient checks, AVU and SI Dog Park.
  - [#19952](https://github.com/punkpeye/awesome-mcp-servers/pull/19952): COINOP, a pay-per-play arcade for agents.
- **Browser and computer control, and developer tooling**
  - [#19956](https://github.com/punkpeye/awesome-mcp-servers/pull/19956): mirasim-ai/computer-use.
  - [#19953](https://github.com/punkpeye/awesome-mcp-servers/pull/19953): software-mansion/argent, for iOS and Android debugging.
- **Security**
  - [#19960](https://github.com/punkpeye/awesome-mcp-servers/pull/19960): Guardian MCP proxy.
- **Local-first servers**
  - [#19822](https://github.com/punkpeye/awesome-mcp-servers/pull/19822): Nuthatch, over EVM contract events.
  - [#19949](https://github.com/punkpeye/awesome-mcp-servers/pull/19949): llm-sidecar.

These themes suggest demand for agent persistence, payment safety and monetization, and secure proxies.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, because there were no Issues. The PR labels do show some validation problems:
- Several PRs carry `missing-glama`, so they lack a Glama listing. Examples are [#19955](https://github.com/punkpeye/awesome-mcp-servers/pull/19955), [#19954](https://github.com/punkpeye/awesome-mcp-servers/pull/19954), [#19952](https://github.com/punkpeye/awesome-mcp-servers/pull/19952), [#19949](https://github.com/punkpeye/awesome-mcp-servers/pull/19949) and [#19950](https://github.com/punkpeye/awesome-mcp-servers/pull/19950).
- [#19955](https://github.com/punkpeye/awesome-mcp-servers/pull/19955) also has `non-github-url`.
- [#19950](https://github.com/punkpeye/awesome-mcp-servers/pull/19950) is flagged `duplicate`.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. The PRs hint at where the list may grow:
- Possible new or expanded categories for payments and x402, agent memory, and security proxies.
- More entries pointing to remote or hosted MCP endpoints. Examples are [#19957](https://github.com/punkpeye/awesome-mcp-servers/pull/19957) (Admit Protocol) and [#19955](https://github.com/punkpeye/awesome-mcp-servers/pull/19955).
- Owner-initiated updates to existing entries, such as [#18852](https://github.com/punkpeye/awesome-mcp-servers/pull/18852) and [#19950](https://github.com/punkpeye/awesome-mcp-servers/pull/19950). These suggest entries need maintenance after repos are renamed or gain features.

There is no roadmap in the data, so these are inferences from submission patterns.

## 7. User Feedback Summary
There is no direct feedback, because no comments were recorded. Contributors' PR descriptions show a few habits:
- They stress licensing (MIT, Apache-2.0), stdio or local operation, and Glama listing or rating. For example, [#19152](https://github.com/punkpeye/awesome-mcp-servers/pull/19152) cites a "B" Glama rating.
- Many carry the 🤖 marker, which suggests some submissions are agent-assisted.
- Submission volume is high and varied across categories, which shows the list's reach. Waiting times of weeks suggest contributors may be dissatisfied with how long reviews take, but nothing in the data confirms that.

## 8. Backlog Watch
These open PRs are older and may need maintainer attention:
- [#17260](https://github.com/punkpeye/awesome-mcp-servers/pull/17260): waymark-local, open since 2026-10-22 (about 4 weeks), with a one-line description.
- [#18080](https://github.com/punkpeye/awesome-mcp-servers/pull/18080): Dataparity, open since 2026-10-30.
- [#18226](https://github.com/punkpeye/awesome-mcp-servers/pull/18226): dsh-feishu, open since 2026-11-01.
- [#18852](https://github.com/punkpeye/awesome-mcp-servers/pull/18852): Membase update, open since 2026-11-07.
- [#19152](https://github.com/punkpeye/awesome-mcp-servers/pull/19152): Align, open since 2026-11-10.

Overall, 196 open PRs against 12 closed in a day points to a growing review backlog. Automated triage on the existing labels (`missing-glama`, `duplicate`) could help clear it.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-19

## 1. Today's Overview
The registry is busy but not moving forward. In the last 24 hours 50 PRs were updated, and all 50 are still open. No PRs were merged or closed, and there were no issues and no releases. Almost all the activity is new server submissions, and many of them are hosted remote servers. Throughput is the weak point. Submissions arrive faster than the maintainers review them. The data shows no maintainer activity today. Comment counts are reported as "undefined", so discussion levels can't be measured.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. The 50 open PRs are all submissions or updates waiting for review.

## 4. Community Hot Topics
Comment and reaction data is missing (comments are "undefined", and every PR shows 0 👍). I can't rank the PRs by discussion. What the data does show is where submissions are concentrated:

- **Remote, OAuth-based servers** are the dominant pattern. Examples are [#7331 Mushi Mushi](https://github.com/docker/mcp-registry/pull/7331) (MCP OAuth), [#7227 while.sh](https://github.com/docker/mcp-registry/pull/7227) (OAuth 2.1 with DCR), [#7292 Tapline](https://github.com/docker/mcp-registry/pull/7292) (OAuth 2.1 with DCR), and [#7323 Tintloom](https://github.com/docker/mcp-registry/pull/7323) (OAuth 2.1 with DCR). Vendors want their hosted MCP endpoints listed in the Docker catalog.
- **Marketing, growth and sales tooling** is a second cluster: [#6695 RudderStack](https://github.com/docker/mcp-registry/pull/6695), [#6892 RomeoSEO](https://github.com/docker/mcp-registry/pull/6892), [#7324 lemlist](https://github.com/docker/mcp-registry/pull/7324), [#7321 geoboom](https://github.com/docker/mcp-registry/pull/7321), and [#7322 Geonode](https://github.com/docker/mcp-registry/pull/7322).
- **Local stdio servers** are fewer: [#7328 PDFluent](https://github.com/docker/mcp-registry/pull/7328) (offline PDF handling), [#7329 laravel-mcp-companion](https://github.com/docker/mcp-registry/pull/7329), [#7320 okf-wiki-mcp](https://github.com/docker/mcp-registry/pull/7320) (offline wiki queries), and [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240).
- Other new submissions include [#7330 InProcess](https://github.com/docker/mcp-registry/pull/7330), [#7327 Metri](https://github.com/docker/mcp-registry/pull/7327), [#7326 Bookare](https://github.com/docker/mcp-registry/pull/7326), and [#7325 Kitbay](https://github.com/docker/mcp-registry/pull/7325). Kitbay needs no authentication and indexes 48,000+ MCP servers and skills.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, because there were no issues. One PR is related to maintenance: [#7322](https://github.com/docker/mcp-registry/pull/7322) updates the existing Geonode entry. It replaces an earlier PR, #6273, that its author opened and then closed.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions point to these trends:
- **Remote MCP servers with OAuth 2.1 and dynamic client registration** are becoming the standard way to integrate hosted products. The registry will likely need clearer guidance and automated validation for this server type.
- **Closed-source hosted servers** are being submitted with no repository, as in [#7321](https://github.com/docker/mcp-registry/pull/7321), [#7324](https://github.com/docker/mcp-registry/pull/7324) and [#7330](https://github.com/docker/mcp-registry/pull/7330). The registry may need a policy on how to treat them.
- **Empty `tools.json`**, as in [#7331](https://github.com/docker/mcp-registry/pull/7331), suggests that tool discovery for remote servers is still handled inconsistently.

## 7. User Feedback Summary
The data has no direct user comments. From the submissions, contributors are:
- Using the registry to make their servers discoverable to agent users.
- Choosing offline, privacy-preserving designs for local servers, such as PDFluent ("nothing leaves the machine") and okf-wiki-mcp.
- Bringing back work that stalled, such as re-submissions like Geonode's.

The long-open PRs suggest authors are dissatisfied with how slowly review moves.

## 8. Backlog Watch
These PRs have been open the longest and were still touched on 2026-11-18. They need maintainer attention:
- [#373 spotify-mcp](https://github.com/docker/mcp-registry/pull/373): opened 2025-10-29, about 12 months old.
- [#4823 QuanticData](https://github.com/docker/mcp-registry/pull/4823): opened 2026-08-28, about 3 months old, with 25 tools.
- [#5194 Mellow Hub](https://github.com/docker/mcp-registry/pull/5194): opened 2026-09-22.
- [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240): opened 2026-09-25.
- [#6695 RudderStack](https://github.com/docker/mcp-registry/pull/6695): opened 2026-11-06, an official vendor server.
- [#6892 RomeoSEO](https://github.com/docker/mcp-registry/pull/6892): opened 2026-11-10.

**Health assessment:** Contributor interest is high, with 50 PRs updated in a day. Review throughput looks low, with zero merges and no maintainer response visible. A triage pass or automated validation would help clear the queue.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-19

## 1. Today's Overview
Activity over the last 24h was moderate and mostly maintenance. 21 PRs were updated (11 open, 10 closed/merged) and 5 issues (4 open, 1 closed). There were no releases. Most PR volume came from two sources. One is the automated SHA-bump bot (newrelic, zapier, duckdb-skills, cloudflare, coderabbit, amd-skills). The other is a steady series of `security-guidance` hardening PRs from `mhegazy`, apparently staged for a 2.0.21 release. The most active community thread is still the Verified-organization policy issue (#7024, 35 comments).

## 2. Releases
No new releases. A `security-guidance` 2.0.21 version bump ([#7143](https://github.com/anthropics/claude-plugins-official/pull/7143)) is open and described as "to be merged last", so a release is likely soon.

## 3. Project Progress
The data doesn't distinguish merged PRs from closed-unmerged ones. Some of these "closed" PRs may have been superseded or folded into others rather than merged.

**Closed today:**
- **security-guidance memory fix**: [#7140](https://github.com/anthropics/claude-plugins-official/pull/7140) stops commit and push reviews from holding a large diff in memory. It was tested on a 5,800-file, 4.6M-line import. It closes the loop on issue [#7136](https://github.com/anthropics/claude-plugins-official/issues/7136), which is also closed.
- **security-guidance review quality**:
  - [#7108](https://github.com/anthropics/claude-plugins-official/pull/7108) stops metric rows from losing `review_ms` and `vulns_found` to a 20-key cap.
  - [#7105](https://github.com/anthropics/claude-plugins-official/pull/7105) reviews text files renamed to code names, such as `notes.txt` to `payload.py`.
  - [#7102](https://github.com/anthropics/claude-plugins-official/pull/7102) tells the reviewer its prose isn't read, which cuts review time.
  - [#7103](https://github.com/anthropics/claude-plugins-official/pull/7103) re-reviews a commit-and-push when the commit review gave no verdict.
- **Discord**: [#7153](https://github.com/anthropics/claude-plugins-official/pull/7153) (`create_thread`) was closed. The sibling `list_emojis` PR [#7154](https://github.com/anthropics/claude-plugins-official/pull/7154) remains open.
- **Slack**: [#7156](https://github.com/anthropics/claude-plugins-official/pull/7156) enrolled `slack` in the releases-only cohort and bumped it to v1.8.0.
- **Bot bumps**: [#7020](https://github.com/anthropics/claude-plugins-official/pull/7020) (postman) and [#6445](https://github.com/anthropics/claude-plugins-official/pull/6445) (coderabbit) were closed. Both are stale bumps, and #7155 now supersedes the coderabbit one.

**Open and in flight:**
- [#7163](https://github.com/anthropics/claude-plugins-official/pull/7163) fixes Git Bash drive paths.
- [#7151](https://github.com/anthropics/claude-plugins-official/pull/7151) ignores non-numeric number settings.
- [#7152](https://github.com/anthropics/claude-plugins-official/pull/7152) shortens the `/custom-theme` description.
- Bot bumps: #7159 (newrelic), #7160 (zapier), #7158 (duckdb-skills), #7157 (cloudflare), #7155 (coderabbit), #7150 (amd-skills).

## 4. Community Hot Topics
1. **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) — How can an organization become Verified?** It has 35 comments and 13 👍. Since about 2026-11-05, the directory rejects command hooks and local MCP servers from non-Verified organizations. The underlying need is a documented, transparent verification path. The docs and pre-submission checklist apparently don't explain how to qualify. Third-party plugin authors are blocked, and this is the strongest friction signal today.
2. **[#4492](https://github.com/anthropics/claude-plugins-official/issues/4492) — Native TypeScript 7 LSP support.** It has 28 👍 and 7 comments, and has been open since July. The current `typescript-language-server` wraps the legacy `tsserver`. Users want the native Go-based server for performance.

## 5. Bugs & Stability
Ranked by severity:
1. **[#7161](https://github.com/anthropics/claude-plugins-official/issues/7161) — Wrong repo reviewed on Windows.** `security-guidance` commit review runs on the session's repo instead of the target when the command `cd`s to a Git Bash path like `/c/...`. This is a correctness problem for a security tool. A fix is already open in [#7163](https://github.com/anthropics/claude-plugins-official/pull/7163), filed the same day.
2. **Config crash (no issue filed):** [#7151](https://github.com/anthropics/claude-plugins-official/pull/7151) fixes a case where `MAX_COMMIT_REVIEWS_PER_HOUR=1.5` or an empty `MAX_DIFF_FILES=` raises `ValueError` at module load. Every hook then exits 1. The fix is still open.
3. **[#7136](https://github.com/anthropics/claude-plugins-official/issues/7136) — Multi-GB memory use on large commits.** It is closed, and the fix in #7140 is also closed. Check that the fix actually ships in 2.0.21.

## 6. Feature Requests & Roadmap Signals
- **TypeScript 7 LSP** ([#4492](https://github.com/anthropics/claude-plugins-official/issues/4492)): high demand, but there's no maintainer signal in the data. I'd call it plausible, not imminent.
- **Discord tooling**: `list_emojis` ([#7154](https://github.com/anthropics/claude-plugins-official/pull/7154)) is open and likely to land soon. `create_thread` was closed, so its status is unclear.
- **Verified-org path** ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)): needs a documentation or policy response.
- **[#7162](https://github.com/anthropics/claude-plugins-official/issues/7162)**: a request for `claude-automation-recommender` to derive hook and subagent guards from the actual build and workflow. It was filed from a Java/Maven experience and is early-stage.

## 7. User Feedback Summary
- Plugin authors are frustrated by opaque access rules. A new restriction on command hooks and local MCP servers arrived without a clear route to compliance.
- Windows users hit path-handling gaps, because Git Bash paths aren't translated.
- Users of the recommender skill find its suggestions too generic. They come from documentation prose and git verbs, not from the project's real build.
- Language-server users want the faster TypeScript 7 option.

## 8. Backlog Watch
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) has been open 13 days with 35 comments. The data shows no maintainer resolution. It needs an official response on Verified-org criteria.
- [#4492](https://github.com/anthropics/claude-plugins-official/issues/4492) has been open about 4 months with 28 👍 and no visible roadmap commitment.
- Open PRs from before today are still waiting. [#7143](https://github.com/anthropics/claude-plugins-official/pull/7143) (version bump) is blocked on the other 2.0.21 changes. Six bot SHA-bump PRs are awaiting review. Maintainers might batch-merge them.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Project Digest: 2026-11-19

## 1. Today's Overview
Awesome Agent Skills (VoltAgent) had light activity in the last 24 hours. There were no issues, no releases, and no merged or closed PRs. Three new PRs are open, and all of them add community skills to the README list (#1440, #1441, #1442). The repo works as a curated list, so this pattern is normal. Contributors keep submitting, and the data doesn't show whether maintainers are reviewing or merging at the same pace. The submissions are from 17–18 November, so they are fresh and have no comments yet.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. All three PRs are open and have 0 comments and 0 👍.

## 4. Community Hot Topics
No item has any comments or reactions, so there is no hot topic. The three PRs show where contributors are focused:

- **[#1442](https://github.com/VoltAgent/awesome-agent-skills/pull/1442): inkfilm/pick-video-prompt and inkfilm/video-prompt-writing.** This PR adds two skills to *Specialized Domains*. One picks from a library of 52 verified AI short-video prompts and includes a random-draw web app. The other teaches how to write AI video prompts. Both descriptions are 10 words or fewer and match the neighboring entries. Only `README.md` changes. Creative and media-generation skills are a growing niche.
- **[#1441](https://github.com/VoltAgent/awesome-agent-skills/pull/1441): alexgaoth/find-reverse-engineered.** This PR adds a skill to *Specialized Domains*, next to `morluto/rea`. Before an agent reverse engineers an app, API, device, protocol or file format, the skill searches an index of 17,000+ open-source projects that already did it. It ranks them by stars, license and activity. The need behind it is to avoid duplicated effort and reuse existing work.
- **[#1440](https://github.com/VoltAgent/awesome-agent-skills/pull/1440): wkd09/modern-java-guidance.** This PR adds a skill under *Community Skills → Development and Testing*. It includes a 4.1 KB version-aware skill, a CLI scanner (`mjg check`, `mjg search`, `mjg retrieve`) and a `PostToolUse` hook of about 31 ms. The hook is meant to keep AI agents from writing outdated Java. The need is current, version-correct code from coding agents.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. There are no fix PRs.

## 6. Feature Requests & Roadmap Signals
No issues or explicit feature requests exist. The PRs suggest these directions:

- **Specialized Domains is growing.** Two of the three PRs target it, so it may need subcategories if it keeps growing.
- **Skills that ship tooling are appearing.** #1440 bundles a CLI and a hook, and #1442 bundles a web app. This goes beyond plain prompt files.
- **Likely next step:** These additions are low risk because they only change `README.md`, so they should be merged in a routine batch.

## 7. User Feedback Summary
There are no direct user comments, so feedback is inferred from what contributors submit:
- Contributors want visibility in a widely read directory.
- Agent users want domain-specific help, such as Java modernization, reverse-engineering research and video prompt writing.
- Authors follow the contribution conventions (short descriptions, placement next to related entries). That suggests the guidelines are clear.

## 8. Backlog Watch
- The PR numbers have reached #1442, so the PR queue is large. This snapshot covers only the last 24 hours and doesn't show older unreviewed PRs.
- The three open PRs are 1–2 days old and not overdue. If review is manual, they will need a maintainer pass to avoid a growing queue.
- Maintainers could consider checks that validate description length, entry placement and link validity. That would reduce review effort for README-only submissions like these.

**Project health:** Stable and steady. Contributions are flowing in, the maintenance load is mostly review and merge, and there are no bugs, regressions or open issues.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
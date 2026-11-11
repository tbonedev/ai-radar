# MCP Ecosystem Digest 2026-11-11

> Issues: 8 | PRs: 7 | Projects covered: 7 | Generated: 2026-11-11 14:53 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-11

## 1. Today's Overview
Activity was concentrated in one coordinated event: the **v2.4.0 security release**. Across 8 issues and 7 PRs updated in 24h, all 7 PRs were merged or closed. Three advisory-fix PRs landed, the Python CalVer stamp and version-packages PRs closed, and the `v2/main` → `main` merge closed. Community discussion was light (at most 3 comments per item, no reactions). Project health looks strong on release process, but several follow-up bugs were opened against the freshly shipped fixes.

## 2. Releases
**[v2.4.0](https://github.com/modelcontextprotocol/servers/issues/5509)** is a security release that fixes six vulnerabilities in three servers.

| Package | Fixed in |
| --- | --- |
| `@modelcontextprotocol/server-filesystem` | 2.3.0 |
| `mcp-server-git` | 2026.11.11 |
| `mcp-server-fetch` | 2026.11.11 |

- **Migration:** Upgrade the three packages. The release notes table is truncated in the data, so the affected-version ranges are not visible here.
- `mcp-server-time` was also stamped 2026.11.11 (PR #5510), but it is not listed among the security fixes.
- No breaking changes were stated in the available excerpt.

## 3. Project Progress
Closed PRs (all in the v2 line):
- **[#5514](https://github.com/modelcontextprotocol/servers/pull/5514)** `fix(git)`: GHSA-6hqx-gqrx-c5r2 (arbitrary command execution via a repo's `core.fsmonitor` during read-only tools) and GHSA-q74p-4wrc-q7w6.
- **[#5515](https://github.com/modelcontextprotocol/servers/pull/5515)** `fix(fetch)`: GHSA-3rxj-6jhw-qfv7 (IPv6 site-local `fec0::/10` classified as public, an SSRF guard gap) and GHSA-f9hh-cmx9-2f23.
- **[#5516](https://github.com/modelcontextprotocol/servers/pull/5516)** `fix(filesystem)`: GHSA-p9cv-8g75-4xcg (symlink swap after validation lets `read_text_file` escape `allowedDirectories`) and GHSA-7m4x-rv66-mxhh.
- **[#5517](https://github.com/modelcontextprotocol/servers/pull/5517)**: rollup of the three fixes for cross-review and CI. It was never meant to merge.
- **[#5510](https://github.com/modelcontextprotocol/servers/pull/5510)**: stamped CalVer 2026.11.11 on fetch, git and time.
- **[#5470](https://github.com/modelcontextprotocol/servers/pull/5470)**: Changesets "version packages".
- **[#5518](https://github.com/modelcontextprotocol/servers/pull/5518)**: `v2/main` → `main` milestone merge.

The advisory PRs say they had no code review before merge. Review happened in the private forks and the rollup PR.

## 4. Community Hot Topics
Engagement was low. The highest-commented items:
- **[#5485](https://github.com/modelcontextprotocol/servers/issues/5485)** (3 comments): the memory server leaves lock files behind on exit or termination signals. This is a real need for autonomous agent orchestrators that restart servers frequently.
- **[#5509](https://github.com/modelcontextprotocol/servers/issues/5509)** (2 comments): the release tracking issue, closed after publication.
- The remaining items have 0–1 comments. The advisory tracking issues #5511, #5512 and #5513 had none.

## 5. Bugs & Stability
Ranked by severity:
1. **[#5520](https://github.com/modelcontextprotocol/servers/issues/5520)** (open): a Windows junction inside a Git directory can lead outside `--repository`. This is a gap the advisory GHSA-q74p-4wrc-q7w6 lists as "Not covered by this fix". It is a possible sandbox escape, and no fix PR exists yet.
2. **[#5521](https://github.com/modelcontextprotocol/servers/issues/5521)** (open): fetch `--allowed-hosts` accepts wildcard IP entries such as `*.0.0.1`, which match any IPv4 address with that suffix. This weakens the allowlist and no fix PR exists yet.
3. **[#5508](https://github.com/modelcontextprotocol/servers/issues/5508)** (open): `git_remote` redacts credentials only in the URL userinfo, not in the query, fragment or path. Tokens can leak into output, and no fix PR exists yet.
4. **[#5485](https://github.com/modelcontextprotocol/servers/issues/5485)** (open): memory-server lock files are not cleaned up. This is a stability and reliability issue, and no fix PR is linked.

Already resolved today (issues closed with fix PRs): [#5511](https://github.com/modelcontextprotocol/servers/issues/5511) (git), [#5512](https://github.com/modelcontextprotocol/servers/issues/5512) (fetch) and [#5513](https://github.com/modelcontextprotocol/servers/issues/5513) (filesystem).

## 6. Feature Requests & Roadmap Signals
There are no pure feature requests today. The open items are hardening work and are likely candidates for the next patch release:
- Stricter `--allowed-hosts` validation (#5521)
- Windows junction handling in the git server (#5520)
- Broader credential redaction in `git_remote` (#5508)
- Signal and exit handling in the memory server (#5485)

Since #5520 and #5508 were filed by a maintainer (cliffhall), they are the most likely to be scheduled soon. This is my inference.

## 7. User Feedback Summary
- Agent orchestrator users (Claude Desktop and autonomous agents) hit lifecycle problems, such as stale locks after termination.
- Security-minded users want allowlists and path boundaries that hold up under edge cases: IP wildcards, symlinks and junctions.
- There was no explicit satisfaction or dissatisfaction feedback, and no reactions.

## 8. Backlog Watch
- **[#5485](https://github.com/modelcontextprotocol/servers/issues/5485)** has been open since 2026-11-06 (5 days) with 3 comments and no linked fix. It is the oldest open item and needs maintainer triage.
- **#5520, #5521 and #5508** are new today. They are small and well specified, and should get fix PRs soon.
- The advisory-fix PRs merged without a conventional public review, with details to be published after release. Watch for the full advisory publication and any regressions reported against git 2026.11.11, fetch 2026.11.11 and filesystem 2.3.0.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-11-11

## 1. Ecosystem Overview
The projects tracked today are the core MCP infrastructure, its registries, and the curation layers built on top. Together they show an ecosystem moving from "ship servers" to "secure, distribute and govern them". Security hardening dominates the reference implementation. Distribution is strained: submission queues grow faster than reviews on the registry and list projects. Remote, hosted servers with OAuth are becoming the main packaging model. AI-agent-authored contributions are increasingly visible in submission queues.

## 2. Activity Comparison

Health scores are my own judgment from the digests, not project-reported figures. Counts are the 24-hour window, and some digests only show a sample.

| Project | Issues updated | PRs updated | Release | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers | 8 | 7 (all closed/merged) | v2.4.0 security release | 8/10. Strong release discipline, but 3–4 open follow-up hardening issues |
| MCP Registry | 0 | 8 (3 open, 5 closed) | None | 7.5/10. Responsive maintainers, external fixes awaiting review |
| Awesome MCP Servers | 0 | 135 (128 open, 7 closed/merged) | None | 5.5/10. Heavy intake, low review throughput |
| Docker MCP Registry | 0 | 50 (all open, 0 resolved; only 20 visible) | None | 5/10. Zero throughput, growing backlog |
| Claude Plugins (Official) | 5 | 10 (5 closed/merged) | None | 6.5/10. Active, but a blocking bug and a policy complaint (#7024, 22 comments) are unanswered |
| Awesome Claude Code | 24 | 0 | None | 6.5/10. Automated intake works, no merges |
| Awesome Agent Skills | 0 | 5 (all open) | None | 6.5/10. Healthy inflow, small window |

## 3. MCP Servers' Position
**Advantages**
- It is the only project in the set that shipped a release today, and a coordinated one. v2.4.0 fixed six vulnerabilities across three servers, and all 7 PRs updated in the window were resolved.
- It is the reference implementation, so its security fixes set the baseline for the rest of the ecosystem: SSRF guards, path-boundary enforcement and command-execution isolation.
- It has the clearest maintainer-to-fix loop: advisory issues #5511–#5513 were opened and closed the same day.

**Technical approach differences**
- It is code, not a catalog. It ships runtime servers (filesystem, git, fetch, memory, time). The registries and awesome-lists index or distribute servers.
- It deals with trust boundaries directly, such as symlinks, junctions, IP allowlists and credential redaction. Peers deal with listing metadata and validation.

**Community size**
- It is the smallest by comment volume: at most 3 comments per item, no reactions. The list and registry projects see far more PR volume (135 and 50 PRs vs 7). By raw PR count, the curation layers have the largest contributor funnels.
- Engagement is low across the whole set, apart from #7024 (22 comments, 9 👍) in Claude Plugins.

**Risk:** the advisory PRs merged without public review (review happened in private forks and the rollup PR). Three follow-up gaps (#5520, #5521, #5508) are open with no fix PR.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Security and trust boundaries | MCP Servers, Claude Plugins, Awesome MCP Servers, Awesome Claude Code | Symlink/junction escapes, SSRF, `core.fsmonitor` command execution, ReDoS in `security-guidance`, agent capability grants (AgentFox), MCP package vetting (AgentAvow), secret firewalls (mcp-slim) |
| Authentication | MCP Registry, Docker MCP Registry, Claude Plugins | HTTP login 401s (#1849, #1847), OAuth 2.1 with DCR/PKCE, GitHub plugin auth failure (#7075) |
| Remote/hosted server support | Docker MCP Registry, MCP Registry, Claude Plugins | Closed-source SaaS entries without public repos, local-MCP-server restrictions on non-Verified organizations |
| Review throughput and triage automation | Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills | 128 open PRs, 50 open PRs, 23 open issues, unreviewed "Add skill" PRs |
| Windows parity | MCP Servers, Claude Plugins | Junctions (#5520), pyenv-win shims (#7049), PowerShell coverage (#7076) |
| Observability and cost | MCP Registry, Awesome Claude Code | Gateway logging, log sampling, autoscaling; zero-token local linting and caching |
| Memory and orchestration | MCP Servers, Awesome Claude Code | Memory-server lock files (#5485); memgit, Glen, brain, Kraft, bot2bot |

## 5. Differentiation Analysis

| Layer | Projects | Target users | Architecture |
|---|---|---|---|
| Runtime | MCP Servers | Server operators, agent builders | Reference servers, versioned packages, advisory-driven releases |
| Discovery and publishing | MCP Registry | Publishers and consumers | Go service, Gateway, `mcp-publisher` login, proof-record verification, search |
| Distribution | Docker MCP Registry | Docker Desktop users, SaaS vendors | Container-first template, now being stretched to remote servers |
| Plugin directory | Claude Plugins | Plugin authors, Claude users | Version and SHA bumps, hooks, Verified-organization gating |
| Curation | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | Developers looking for tools | Markdown lists with a PR or issue-form pipeline and bot validation (Glama check, `validation-passed` labels) |

Notable differences: Awesome Claude Code uses issue-based intake with automated validation, whereas the other two lists use PRs. Awesome Agent Skills is the only one scoped to skills rather than servers. Awesome MCP Servers requires a Glama listing, which makes it dependent on an external catalog.

## 6. Community Momentum & Maturity

**Tier 1, high volume:** Awesome MCP Servers (135 PRs), Docker MCP Registry (50 PRs), Awesome Claude Code (24 issues). They have high intake but low or zero resolution, so they are scaling, not stabilizing.

**Tier 2, active maintainer-driven:** MCP Servers, MCP Registry, Claude Plugins. Maintainers are iterating, mostly on hardening, cost tuning and plugin version bumps.

**Tier 3, small and steady:** Awesome Agent Skills. Its 5 PRs are all fresh, so there is not enough data on its backlog.

**Maturity read:** MCP Servers and the MCP Registry are in a post-launch hardening phase. The three curation projects and the Docker registry are in a growth phase, with process strain visible. Claude Plugins is in a policy-formation phase.

## 7. Trend Signals
1. **Security is now the main engineering work in the reference servers.** Plan for allowlist and path-boundary edge cases (wildcards, junctions, symlinks) when using or building MCP servers.
2. **Remote MCP with OAuth 2.1 is becoming the default distribution model.** Docker's catalog saw 14+ remote entries opened in one day. Developers should plan for DCR/PKCE flows.
3. **Governance is tightening.** Claude Plugins now rejects command hooks and local MCP servers from non-Verified organizations, and the verification path is undocumented. Expect more gating of local code execution.
4. **Review capacity is a bottleneck.** Triage automation (validation bots, label-based fast paths) is already working in Awesome Claude Code and needed elsewhere.
5. **AI-written submissions are growing.** Several PRs say they were agent-authored, so expect more quality-control and provenance rules.
6. **Memory, orchestration and cross-tool interop** are the busiest submission themes. Examples are bot2bot with Codex, Cursor, OpenClaw and Hermes, and memgit.
7. **Cost and efficiency matter.** The Registry is tuning autoscaling and log volume, and the lists show demand for token-saving tools.

**Caveats:** engagement data is mostly missing (comment counts are `undefined` in several digests), "closed" is not distinguished from "merged" in some, and several digests show only a sample of the PRs. Treat the counts as lower bounds and the health scores as directional.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-11-11

Repo: github.com/modelcontextprotocol/registry

## 1. Today's Overview
Activity is moderate, and PRs are the only signal. There were no issue updates and no new releases in the last 24 hours. Eight PRs were updated: 3 open and 5 closed. Maintainer `rdimitrov` is doing deployment and cost-tuning work on the Gateway and autoscaling. An external contributor, `Shanmukh-l33t`, opened three fixes for long-standing auth and search issues. Overall health looks good. The maintainers are responsive, and external contributions are arriving, but none have been reviewed yet.

## 2. Releases
No new releases.

## 3. Project Progress (Merged/Closed PRs)
The data does not distinguish merged from closed-unmerged PRs, so treat "closed" as resolved or abandoned.

- **[#1851](https://github.com/modelcontextprotocol/registry/pull/1851), log user agent and content encoding at the Gateway** (closed). It addresses observability. About 85% of outbound traffic goes to one integration, and nearly all of it is uncompressed. The Gateway's JSON access record lacked both fields, so the analysis had to rely on old ingress logs.
- **[#1848](https://github.com/modelcontextprotocol/registry/pull/1848), raise production app HPA CPU target to 60%** (closed). A cost and efficiency change. The 40% target kept a fourth node running through idle hours, and raising it avoids the extra scale-out.
- **[#1846](https://github.com/modelcontextprotocol/registry/pull/1846), repair Gateway access-log sampling regexes** (closed). This fixes a bug. The Cloud Logging exclusion for about 10% of fast successful listing records had matched nothing since the Gateway migration, because the Go raw-string regexes used doubled backslashes. As a result, every access record was being ingested.
- **[#1826](https://github.com/modelcontextprotocol/registry/pull/1826), bump h2 4.3.0 to 4.4.1 in /deploy/gateway-canary** (closed, dependabot). A dependency maintenance update.
- **[#1845](https://github.com/modelcontextprotocol/registry/pull/1845), add Eclipse AI Registry to community projects** (closed). A docs contribution from `JonasHelming`. It adds a vendor-neutral registry hosted at the Eclipse Foundation.

The theme is infrastructure cost and observability after the Gateway migration. The changes cover log volume, autoscaling and traffic visibility.

## 4. Community Hot Topics
Comment and reaction counts are 0 or unavailable for every item, so no item stands out on engagement. The most notable open work comes from one contributor:

- **[#1850](https://github.com/modelcontextprotocol/registry/pull/1850), match server descriptions in registry search** (fixes #1807). Search currently matches only `server_name`. Users want to discover servers by functionality or use case, not only by name.
- **[#1849](https://github.com/modelcontextprotocol/registry/pull/1849), verify against every published proof record** (fixes #1679). The underlying need is reliable `mcp-publisher login http` authentication.
- **[#1847](https://github.com/modelcontextprotocol/registry/pull/1847), retry transient verification fetch failures** (fixes #1625). The same need applies. Publishers need login to be robust against network flakiness.

## 5. Bugs & Stability
Ranked by severity:

1. **HTTP auth login failures (401)**, which block publishing. Two open fix PRs cover two separate causes:
   - [#1849](https://github.com/modelcontextprotocol/registry/pull/1849): the code verifies only the first published proof record. It returns a "stale record" error even when the key matches and the served record is correct (#1679).
   - [#1847](https://github.com/modelcontextprotocol/registry/pull/1847): the verification fetch is a single attempt. One transient failure, such as `dial tcp ... i/o timeout` or a reset connection, produces a 401 (#1625).
2. **Search misses description-only matches**, a functional gap. Fix PR: [#1850](https://github.com/modelcontextprotocol/registry/pull/1850), for #1807.
3. **Log sampling regression**, which caused unnecessary log ingestion cost. Fixed in [#1846](https://github.com/modelcontextprotocol/registry/pull/1846).

No crashes or new regressions were reported today.

## 6. Feature Requests & Roadmap Signals
- **Description-aware search** ([#1850](https://github.com/modelcontextprotocol/registry/pull/1850)) is a likely candidate for the next release. It is a contained change, and the PR already exists for a tracked issue.
- **Gateway observability**: user-agent and content-encoding logging ([#1851](https://github.com/modelcontextprotocol/registry/pull/1851)) points to a possible follow-up on response compression, given that most traffic is uncompressed.
- **Ecosystem growth**: the Eclipse AI Registry listing ([#1845](https://github.com/modelcontextprotocol/registry/pull/1845)) shows growing downstream and federated registry activity.

## 7. User Feedback Summary
- Publishers hit confusing 401 errors even with correct keys and a correctly served well-known record. Users have reported this twice (#1679, #1625).
- Consumers want to find servers by what they do. Name-only search limits discoverability (#1807).
- No satisfaction signals appeared today. There were no comments or reactions.

## 8. Backlog Watch
- The three open PRs, [#1847](https://github.com/modelcontextprotocol/registry/pull/1847), [#1849](https://github.com/modelcontextprotocol/registry/pull/1849) and [#1850](https://github.com/modelcontextprotocol/registry/pull/1850), were all created today and need maintainer review. The two auth fixes affect the same login path and may overlap or conflict, so they should be reviewed together.
- The linked issues #1625, #1679 and #1807 appear to be older, with the bug reports possibly pending a long time. They are worth checking for staleness. Their ages and details are not in today's data.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-11

Repo: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

## 1. Today's Overview
Activity is high but one-sided. 135 PRs were updated in 24 hours (128 open, 7 merged/closed), and no issues or releases were recorded. The repo works as a submission queue. Almost all traffic is new server listings, many marked 🤖🤖🤖, which suggests AI-agent-authored PRs. Review throughput is low against intake: only 7 PRs were resolved, and some of those were author-closed duplicates. The data shows no maintainer comments or reactions.

## 2. Releases
None.

## 3. Project Progress
Seven PRs were merged or closed. Only two are visible in the sample, and both were closed rather than merged:
- [#19188](https://github.com/punkpeye/awesome-mcp-servers/pull/19188) (svergio/chat-export-server) was closed. The same author reopened it as [#19208](https://github.com/punkpeye/awesome-mcp-servers/pull/19208), so this looks like a resubmission.
- [#19204](https://github.com/punkpeye/awesome-mcp-servers/pull/19204) (Covey, Coding Agents) was closed. It was flagged `missing-glama`, and the reason for closing isn't shown.

The data doesn't show which, if any, of the 7 were merged, so no feature progress can be confirmed. The other 5 resolved PRs are not in the top-20 sample.

## 4. Community Hot Topics
Comment counts are `undefined` for every PR and 👍 is 0 across the board, so engagement can't be ranked. The sample is also not truly ordered by comments. Categories with the most new submissions are listed below:
- **Security and agent safety:** [#19213](https://github.com/punkpeye/awesome-mcp-servers/pull/19213) (SolveHub, anti-bot cookies), [#19051](https://github.com/punkpeye/awesome-mcp-servers/pull/19051) (ingravity-security, x402 Base), [#19206](https://github.com/punkpeye/awesome-mcp-servers/pull/19206) (mcp-slim, token optimizer and secret firewall).
- **Commerce and payments:** [#19212](https://github.com/punkpeye/awesome-mcp-servers/pull/19212) (CigalPay), [#19209](https://github.com/punkpeye/awesome-mcp-servers/pull/19209) (J-Dawgs), [#19162](https://github.com/punkpeye/awesome-mcp-servers/pull/19162) (BayDeep), [#18963](https://github.com/punkpeye/awesome-mcp-servers/pull/18963) (GMPSignal aggregator).
- **Research, data and developer tools:** [#19210](https://github.com/punkpeye/awesome-mcp-servers/pull/19210), [#19207](https://github.com/punkpeye/awesome-mcp-servers/pull/19207), [#19202](https://github.com/punkpeye/awesome-mcp-servers/pull/19202), [#19140](https://github.com/punkpeye/awesome-mcp-servers/pull/19140).
- **Creative and media:** [#19214](https://github.com/punkpeye/awesome-mcp-servers/pull/19214) (Kinetograph), [#19205](https://github.com/punkpeye/awesome-mcp-servers/pull/19205) (ai-art-engine).

The underlying need is a growing MCP ecosystem. Developers want to list their servers, and there is a visible push toward token-cost reduction and security controls.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, because there were 0 issues. Two quality-control points did show up:
- **Duplicate submissions:** [#19188](https://github.com/punkpeye/awesome-mcp-servers/pull/19188) and [#19208](https://github.com/punkpeye/awesome-mcp-servers/pull/19208) are the same entry. [#4474](https://github.com/punkpeye/awesome-mcp-servers/pull/4474) is labeled `duplicate`.
- **Missing Glama listing:** several PRs carry `missing-glama` ([#19214](https://github.com/punkpeye/awesome-mcp-servers/pull/19214), [#19206](https://github.com/punkpeye/awesome-mcp-servers/pull/19206), [#19205](https://github.com/punkpeye/awesome-mcp-servers/pull/19205), [#19202](https://github.com/punkpeye/awesome-mcp-servers/pull/19202), [#19051](https://github.com/punkpeye/awesome-mcp-servers/pull/19051)). These likely fail the contribution requirements until the server is listed on Glama.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. Signals from the submissions:
- Categories are filling up. Security, Finance and Fintech, E-Commerce, Research and Browser Automation each have new entries, so subcategory splits or tighter curation may be needed.
- Crypto and x402 payments ([#19051](https://github.com/punkpeye/awesome-mcp-servers/pull/19051), [#19212](https://github.com/punkpeye/awesome-mcp-servers/pull/19212)) look like an emerging category.
- Agent-to-agent coordination ([#19204](https://github.com/punkpeye/awesome-mcp-servers/pull/19204)) and MCP-layer optimization ([#19206](https://github.com/punkpeye/awesome-mcp-servers/pull/19206)) are both rising themes.

## 7. User Feedback Summary
There is no direct user feedback in the data. Contributor behavior suggests two things. First, the submission rules (alphabetical order, emoji legend, Glama link) are followed well enough that most PRs are tagged `has-emoji` and `valid-name`. Second, an increasing share of PRs is written by AI coding agents on the maintainer's behalf. [#19214](https://github.com/punkpeye/awesome-mcp-servers/pull/19214) says this explicitly, which raises review-load and quality-control questions.

## 8. Backlog Watch
- [#4474](https://github.com/punkpeye/awesome-mcp-servers/pull/4474): opened 2026-04-10, so about 7 months old. It is labeled `duplicate` and `manual-review`, and it needs a maintainer decision (ThumbGate rebrand of mcp-memory-gateway).
- [#14440](https://github.com/punkpeye/awesome-mcp-servers/pull/14440): designlang (design-extract), opened 2026-09-15. It has all the valid labels but is still unmerged after about 8 weeks.
- [#18963](https://github.com/punkpeye/awesome-mcp-servers/pull/18963) and [#19051](https://github.com/punkpeye/awesome-mcp-servers/pull/19051): opened 2026-11-09 and still pending.

Overall, the queue of 128 open PRs against 7 resolved today suggests a growing backlog. Automated triage of labeled-valid PRs, or additional maintainers, would reduce it.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-11

Source: github.com/docker/mcp-registry

## 1. Today's Overview
The registry saw heavy submission activity but no maintainer throughput. In the last 24h, 50 PRs were updated, all of them still open, and none were merged or closed. There were 0 issue updates and 0 releases. Most of the new volume comes from third parties adding **remote** MCP servers, and at least 14 were opened today (#6945–#6959). Review capacity looks like the bottleneck. Several PRs opened in July–October are still open.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. The only automation visible is the bot-generated pin update [#4444](https://github.com/docker/mcp-registry/pull/4444) (schemacrawler-ai). It was opened 2026-07-15 and is still unmerged.

## 4. Community Hot Topics
The comment counts in the data are `undefined`, and all 👍 counts are 0. No PR can be ranked by engagement. Instead, these are the themes in the freshest submissions:

- **Remote and hosted servers dominate.** Examples:
  - [#6959](https://github.com/docker/mcp-registry/pull/6959) Fudge for Shopify
  - [#6958](https://github.com/docker/mcp-registry/pull/6958) Trading Signals Toolkit
  - [#6956](https://github.com/docker/mcp-registry/pull/6956) Tin (OAuth DCR)
  - [#6955](https://github.com/docker/mcp-registry/pull/6955) Remote Impact Jobs
  - [#6954](https://github.com/docker/mcp-registry/pull/6954) Loice
  - [#6953](https://github.com/docker/mcp-registry/pull/6953) hedwigai (OAuth 2.1)
  - [#6952](https://github.com/docker/mcp-registry/pull/6952) PatchLabs
  - [#6950](https://github.com/docker/mcp-registry/pull/6950) ContentIn
  - [#6951](https://github.com/docker/mcp-registry/pull/6951) Forthcast Inventory
  - [#6949](https://github.com/docker/mcp-registry/pull/6949) Rizamo
  - [#6948](https://github.com/docker/mcp-registry/pull/6948) Pineprompt
  - [#6947](https://github.com/docker/mcp-registry/pull/6947) Japan Places
  - [#6946](https://github.com/docker/mcp-registry/pull/6946) Unique Domains
  - [#6945](https://github.com/docker/mcp-registry/pull/6945) ReadShore
- **Underlying need:** SaaS vendors want distribution in Docker Desktop's catalog without shipping containers. Several are closed-source with no public repo (#6954, #6950, #6951, #6955).
- **Auth patterns:** OAuth 2.1 with DCR/PKCE is becoming common (#6956, #6953, #6949, #6948).
- **Domain spread:** marketing and social (Tin, Rizamo, ContentIn), e-commerce (Fudge, Agent Central [#5484](https://github.com/docker/mcp-registry/pull/5484)), finance/trading (#6958), AI search visibility (#6948), and public data (Polish registers [#6536](https://github.com/docker/mcp-registry/pull/6536), Japan Places).
- **Containerized submissions** also exist: [#6704](https://github.com/docker/mcp-registry/pull/6704) archlang and [#6957](https://github.com/docker/mcp-registry/pull/6957) publish-gate.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported, and no issues were updated. The relevant stability signal is process-related: the stale bot pin PR #4444 suggests the automated pin-update flow may be stalling.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals from the submissions:
- **First-class remote server support.** The registry's remote path is being used heavily, and it is likely to need continued investment, such as OAuth/DCR metadata handling and checklist handling for N/A container items (#6954 notes this explicitly).
- **Entries without source repos.** Submitters of closed-source hosted servers (#6955, #6950, #6951) expect a path that does not require a public repo. A formal policy or template change is plausible.
- **AI-assisted submissions.** #6704 openly states it was prepared with an AI coding assistant, so contribution guidelines or validation automation may be needed.

## 7. User Feedback Summary
No direct user feedback exists, because there are no issues or comments. Implicit feedback comes from the PR text: contributors adapt the container-oriented template to remote servers and mark items N/A. They emphasize read-only or no-auth tools (#6952, #6958) to ease review. The pain point appears to be a submission template and review path built for containers.

## 8. Backlog Watch
These PRs have waited longest and need maintainer attention:
- [#4444](https://github.com/docker/mcp-registry/pull/4444): bot pin update, open since 2026-07-15 (about 4 months).
- [#5077](https://github.com/docker/mcp-registry/pull/5077): SwarmMemo remote server, open since 2026-09-12.
- [#5484](https://github.com/docker/mcp-registry/pull/5484): Agent Central, open since 2026-10-06.
- [#6536](https://github.com/docker/mcp-registry/pull/6536): Polish Public Data, open since 2026-11-03.
- [#6704](https://github.com/docker/mcp-registry/pull/6704): archlang, open since 2026-11-06.

**Health assessment:** Contributor demand is strong, but throughput is zero today and the backlog is growing. The 50 open PRs in the 24h window show submissions outpacing reviews. Batch review or triage automation would help.

Note: the data shows only 20 of the 50 PRs, so the counts above are lower bounds.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-11-11

## 1. Today's Overview
Activity is moderate and driven mostly by maintainers. 5 issues and 10 PRs were updated in the last 24h, with no new releases. Half of the PRs were closed or merged (5 of 10). The `security-guidance` plugin got the most attention, with 4 open PRs from one author. The most active community thread is the Verified-organization gating issue (#7024, 22 comments), which points to a policy change that is blocking plugin authors.

## 2. Releases
No new releases.

## 3. Project Progress
Five PRs were closed or merged. The data doesn't say which were merged and which were closed without merging.
- **[#7071](https://github.com/anthropics/claude-plugins-official/pull/7071)** bumps `figma` from v2.2.157 to v2.2.193. It was opened by `claude[bot]`.
- **[#7018](https://github.com/anthropics/claude-plugins-official/pull/7018)** bumps `unity` to v0.1.9-beta (33 skills, a root README fix, and tool names within Bedrock's 64-character limit).
- **[#7074](https://github.com/anthropics/claude-plugins-official/pull/7074)** changes `plugin-dev` MCP examples to use local servers and bumps it to 0.1.2.
- **[#7069](https://github.com/anthropics/claude-plugins-official/pull/7069)** splits fake secrets in tests, so source scanners no longer flag them as real.
- **[#7079](https://github.com/anthropics/claude-plugins-official/pull/7079)** was a third-party submission (`shopify-ai-seo-toolkit` and `amazon-listing-optimizer`). It was closed the same day, which suggests it was rejected or is not the right path for adding plugins.

Open PRs:
- An automated SHA bump for `twilio-developer-kit` ([#7078](https://github.com/anthropics/claude-plugins-official/pull/7078)).
- Four `security-guidance` hardening PRs ([#7076](https://github.com/anthropics/claude-plugins-official/pull/7076), [#7073](https://github.com/anthropics/claude-plugins-official/pull/7073), [#7072](https://github.com/anthropics/claude-plugins-official/pull/7072), [#7070](https://github.com/anthropics/claude-plugins-official/pull/7070)).

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** asks how an organization becomes Verified (22 comments, 9 👍). Since about 2026-11-05 the directory has rejected command hooks and local MCP servers from non-Verified organizations. Authors say the docs and pre-submission checklist don't explain the path to verification. They need a clear process, a timeline, and a transition for plugins already listed. This is the strongest signal of friction today.
- The `security-guidance` PR series ([#7070](https://github.com/anthropics/claude-plugins-official/pull/7070), [#7072](https://github.com/anthropics/claude-plugins-official/pull/7072), [#7073](https://github.com/anthropics/claude-plugins-official/pull/7073), [#7076](https://github.com/anthropics/claude-plugins-official/pull/7076)) covers ReDoS-prone custom regexes, push review gaps, pip temp-folder safety, and PowerShell coverage. It shows active hardening of the plugin.

## 5. Bugs & Stability
Ranked by severity:
1. **[#7075](https://github.com/anthropics/claude-plugins-official/issues/7075)** (open): the `github` plugin can't connect. The Connect button is disabled, and sessions fail with "Authorization header is badly formatted" in the macOS desktop app. This blocks the plugin entirely. There is no fix PR and no comments yet.
2. **[#7049](https://github.com/anthropics/claude-plugins-official/issues/7049)** (closed): `security-guidance` 2.0.18 creates stray `(3` files on Windows with pyenv-win shims. It is a nuisance rather than a security problem, and it is already closed.
3. **Security-guidance gaps:**
   - [#7076](https://github.com/anthropics/claude-plugins-official/pull/7076) fixes #7005, where commits and pushes made through the PowerShell tool were not reviewed.
   - [#7070](https://github.com/anthropics/claude-plugins-official/pull/7070) fixes a regex that took 8.5 s on a 28-character line, with the time roughly doubling for each extra character.
   - [#7072](https://github.com/anthropics/claude-plugins-official/pull/7072) closes a gap where a combined commit-and-push call only got the commit review.
   
   All three have open fix PRs.

## 6. Feature Requests & Roadmap Signals
- **[#7077](https://github.com/anthropics/claude-plugins-official/issues/7077)** asks for a `delete_messages` tool in the Discord plugin (up to 10 messages per call). It is a small, well-scoped change that could be accepted, but it has no maintainer response yet.
- The answer to #7024 will likely lead to clearer documentation or a defined verification process.
- Windows and PowerShell parity in `security-guidance` is a visible theme.

## 7. User Feedback Summary
- Plugin authors are frustrated by the new, poorly documented Verified-organization restrictions (#7024).
- Windows users run into environment-specific problems, such as pyenv-win shims (#7049) and PowerShell gaps (#7076).
- Desktop app users hit connector authentication failures (#7075).
- Users want more complete plugin capabilities, such as message deletion in Discord (#7077).
- [#7080](https://github.com/anthropics/claude-plugins-official/issues/7080) ("MCPCLAUDE AI") has no body and looks like noise or spam.

## 8. Backlog Watch
- **#7024** has the most discussion and needs an official maintainer answer on the verification process.
- **#7075** is a fully blocking `github` plugin bug that has had no response for a day.
- **#7077** and **#7080** need triage. The latter probably needs to be closed.
- **#7078** and the four `security-guidance` PRs are waiting for review. The `security-guidance` changes touch security-sensitive hook logic, so they should be reviewed carefully and not just approved quickly.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-11

## 1. Today's Overview
Awesome Claude Code saw a high-volume day: 24 issues were updated in 24 hours, but **0 PRs and 0 releases**. Nearly all activity is automated resource-submission intake. 23 issues are open and 1 was auto-closed. 22 of the 24 carry `validation-passed`, 1 carries `validation-failed`, and 1 `validation-pending`/`auto-closed`. The project is healthy on the community-contribution side, but the maintainer-side output (merges) is idle in this window.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. Progress is limited to submissions passing automated validation and queuing for curation.

## 4. Community Hot Topics
Every issue has 1 comment (the validation bot) and 0 👍, so there is no engagement signal in the usual sense. The more useful view is by category of submissions:

- **Agent Orchestration / Sessions**: [#3613 Kraft](https://github.com/hesreallyhim/awesome-claude-code/issues/3613) (spec-to-PR orchestrator), [#3605 bot2bot](https://github.com/hesreallyhim/awesome-claude-code/issues/3605) (cross-agent messaging with Codex, Cursor, OpenClaw, Hermes), [#3584 ClaudeTTY](https://github.com/hesreallyhim/awesome-claude-code/issues/3584) (cmux replacement).
- **Memory & Context Persistence**: [#3612 memgit](https://github.com/hesreallyhim/awesome-claude-code/issues/3612), [#3600 Glen](https://github.com/hesreallyhim/awesome-claude-code/issues/3600), [#3590 brain](https://github.com/hesreallyhim/awesome-claude-code/issues/3590).
- **Security / Trust**: [#3610 AgentFox](https://github.com/hesreallyhim/awesome-claude-code/issues/3610) (capability grants), [#3598 AgentAvow Trust](https://github.com/hesreallyhim/awesome-claude-code/issues/3598) (MCP/package vetting).
- **Skills**: [#3603 macos-cli](https://github.com/hesreallyhim/awesome-claude-code/issues/3603), [#3597 Make_PPTX](https://github.com/hesreallyhim/awesome-claude-code/issues/3597), [#3609 Needt](https://github.com/hesreallyhim/awesome-claude-code/issues/3609), [#3599 kubegap](https://github.com/hesreallyhim/awesome-claude-code/issues/3599).
- **Clients / UI / Mods**: [#3606 SoluTerminal](https://github.com/hesreallyhim/awesome-claude-code/issues/3606), [#3595 Valo](https://github.com/hesreallyhim/awesome-claude-code/issues/3595), [#3593 cc-esol](https://github.com/hesreallyhim/awesome-claude-code/issues/3593), [#3591 Agent Tree](https://github.com/hesreallyhim/awesome-claude-code/issues/3591), [#3608 LinkShell](https://github.com/hesreallyhim/awesome-claude-code/issues/3608) (mobile and watch remote control).
- **Other**: [#3614 oops](https://github.com/hesreallyhim/awesome-claude-code/issues/3614), [#3611 Kane CLI](https://github.com/hesreallyhim/awesome-claude-code/issues/3611), [#3594 Attentry](https://github.com/hesreallyhim/awesome-claude-code/issues/3594) (zero-token local linting), [#3592 MorrowCache](https://github.com/hesreallyhim/awesome-claude-code/issues/3592), [#3604 ReelStyles Free](https://github.com/hesreallyhim/awesome-claude-code/issues/3604), [#3601 imagegen-swarm](https://github.com/hesreallyhim/awesome-claude-code/issues/3601).

**Underlying needs**: Developers are filling gaps around memory across sessions, multi-agent coordination, governance and security for agents, and richer UIs (terminals, mobile) around Claude Code. Cross-tool interop (Codex, OpenClaw, Hermes, Grok) shows up in several entries (#3605, #3601, #3606).

## 5. Bugs & Stability
No product bugs were reported. Process-level issues:
1. [#3609 Needt](https://github.com/hesreallyhim/awesome-claude-code/issues/3609) failed validation. The author link is `GitHub.com/needt`, which is not a full URL and likely a cause. It needs a fix by the submitter.
2. [#3596 Global law](https://github.com/hesreallyhim/awesome-claude-code/issues/3596) was auto-closed while still `validation-pending`, probably for unmet criteria or an unresponsive submitter.
3. Template hygiene: [#3612](https://github.com/hesreallyhim/awesome-claude-code/issues/3612) and [#3604](https://github.com/hesreallyhim/awesome-claude-code/issues/3604) kept the placeholder title `<name of your resource>`, and #3595, #3592, #3609 omit the `[Resource]:` prefix. These are cosmetic. No fix PRs exist.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Implied signals for the list itself:
- Categories are filling quickly: Memory & Context Persistence, Agent Orchestration, Security, and Skills have the most entries. These may warrant sub-categories. #3613 already uses `Agent Orchestration > SDLC`.
- Several submissions do not fit existing categories cleanly, such as "Start Here" for #3611 Kane CLI. That may call for category-fit review.
- Non-GitHub links (bot2bot, Glen, Valo are hosted sites) may test the project's inclusion rules.

## 7. User Feedback Summary
This is submission data, not user complaints, so there are no direct satisfaction signals. Themes: demand for token-efficient tooling (Attentry costs zero tokens, MorrowCache caches), remote and mobile access, team-shared memory, and agent safety. Submissions come from a diverse group of independent authors, plus at least one company (TestMu AI, formerly LambdaTest). One author is a bot-named account (`soluterminal-bot`) and #3606 may deserve a closer look for automated or promotional intent.

## 8. Backlog Watch
- The 23 open issues have not had maintainer action beyond bot validation. Since no PRs were opened, the visible backlog is the curation queue itself.
- Items needing attention: the validation-failed [#3609](https://github.com/hesreallyhim/awesome-claude-code/issues/3609), and older submissions like [#3590](https://github.com/hesreallyhim/awesome-claude-code/issues/3590) through [#3597](https://github.com/hesreallyhim/awesome-claude-code/issues/3597) from 2026-11-10 that still await review.
- Data limits: only 24h of activity is visible, so older stale items are not included in this digest.

**Health assessment**: Contribution inflow is strong (about 24 submissions in two days) and automated validation works. The risk is the maintainer review bottleneck, with zero PR throughput against a growing queue.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-11

## 1. Today's Overview
Awesome Agent Skills (VoltAgent/awesome-agent-skills) saw only contribution intake today. There were 0 issues, 0 releases and 0 merged or closed PRs in the last 24 hours. Five PRs were updated, all open, and all are "Add skill" submissions. Four were created on 2026-11-11 and one on 2026-11-10. Contribution inflow is healthy, with PR #1393 as the newest number. Maintainer throughput today is unclear, because nothing was merged and no comments were recorded (comment counts are `undefined` in the data).

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features advanced. Five submissions are waiting for review:

| PR | Skill | Target category |
|---|---|---|
| [#1393](https://github.com/VoltAgent/awesome-agent-skills/pull/1393) | makevoid/motion-graphics-music-video-skill-noimage | Community Skills → Specialized Domains |
| [#1392](https://github.com/VoltAgent/awesome-agent-skills/pull/1392) | busabase/busabase | Community Skills → Productivity and Collaboration |
| [#1391](https://github.com/VoltAgent/awesome-agent-skills/pull/1391) | KyungHwanKim-devs/kubegap | Community Skills → Development and Testing |
| [#1390](https://github.com/VoltAgent/awesome-agent-skills/pull/1390) | clipugc/ugc-director | Community Skills → Marketing |
| [#1389](https://github.com/VoltAgent/awesome-agent-skills/pull/1389) | soba-labs/langchain-agent-skills | Community Skills → Development and Testing |

## 4. Community Hot Topics
No PR or issue has comments or reactions (👍 is 0 on all five). Comment counts are `undefined` in the source data, so I can't rank by discussion. The submissions do show where contributors are focused:

- **Developer and ops tooling:** [#1391](https://github.com/VoltAgent/awesome-agent-skills/pull/1391) is a read-only Kubernetes cluster audit skill. [#1389](https://github.com/VoltAgent/awesome-agent-skills/pull/1389) is a bundle of 10 skills for LangChain, LangGraph, LangSmith and Deep Agents. Together they show demand for skills that cover agent-framework development and infrastructure auditing.
- **Human-in-the-loop agent workspaces:** [#1392](https://github.com/VoltAgent/awesome-agent-skills/pull/1392) (Busabase, MIT) has agents propose records, docs, skills and apps as Change Requests that humans review before merge. This reflects interest in governance and review patterns for agent output.
- **Media and marketing generation:** [#1390](https://github.com/VoltAgent/awesome-agent-skills/pull/1390) (AI-influencer UGC videos via the ClipUGC CLI/MCP) and [#1393](https://github.com/VoltAgent/awesome-agent-skills/pull/1393) (native Swift music-video visuals on macOS, with no image or video generation models) show creative-production skills continuing to arrive.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there are no open issues in the 24-hour window. As a curated list, this repository has little runtime risk. The practical quality risks are broken links, duplicate entries and miscategorized submissions, and none were reported today.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. Indirect signals:
- Submissions concentrate in **Development and Testing** (2 of 5), so that category may need sub-grouping or pruning as it grows.
- The new entries sit at the end of their categories, which suggests an append-only convention. Ordering or curation rules may need clarifying.
- Skills that bundle MCP/CLI integrations (ClipUGC) and multi-skill packs (langchain-agent-skills, with 10 skills in one entry) are becoming more common. The list may eventually need a policy for them.

## 7. User Feedback Summary
No comments or reviews were recorded, so there is no direct user feedback. The submission descriptions show these use cases:
- Read-only, auditable agent operations (kubegap).
- Reviewable agent-generated artifacts (Busabase).
- Consistent AI personas for short-form marketing video (ugc-director).
- Self-contained, deterministic media generation without generative models (motion-graphics skill).
- Framework-specific skill packs for LangChain-family tooling.

## 8. Backlog Watch
All five open PRs are 0–1 days old, so none is stale. The data shows no older issues or PRs, and I can't judge older backlog health from this window. The PR number has reached #1393, so a steady stream of unreviewed "Add skill" PRs could build up if maintainers don't merge them regularly. Maintainers should watch the oldest of today's batch, [#1389](https://github.com/VoltAgent/awesome-agent-skills/pull/1389), created 2026-11-10, and check each entry's link, category placement and description for fit.

**Project health:** Contribution inflow is strong (5 PRs updated in a day) and there are no reported issues. No merges or maintainer responses showed up in today's data.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
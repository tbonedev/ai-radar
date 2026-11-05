# MCP Ecosystem Digest 2026-11-05

> Issues: 50 | PRs: 44 | Projects covered: 7 | Generated: 2026-11-05 15:07 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-05

## 1. Today's Overview
The repository saw very high activity, with 50 issues and 44 PRs updated in 24 hours. 43 issues and 43 PRs were closed or merged. Almost all of this came from one maintainer, `cliffhall`, who triaged and cleared the v2.4.0 backlog. v2.3.0 shipped, and a "Version Packages" PR (#5470) is already open for the next cycle. Project health looks strong, though the activity is concentrated in one person. Two caveats on counts: several PRs are rollups closed on purpose, and the PR comment counts are missing from the data.

## 2. Releases
**v2.3.0** was published. The notes are truncated in the data. They list these packages:
- `@modelcontextprotocol/server-everything` 2.2.1
- `@modelcontextprotocol/server-filesystem` 2.2.0
- `@modelcontextprotocol/server-memory` 2.1.0 (version cut off)

The release tracker [#5425](https://github.com/modelcontextprotocol/servers/issues/5425) was closed. No breaking changes or migration notes appear in the available data. Tracker [#5346](https://github.com/modelcontextprotocol/servers/issues/5346) asks whether to move memory's default graph file, which would be breaking. It is closed, and the outcome isn't visible here.

## 3. Project Progress
Work is grouped by the v2.4.0 per-server trackers (#5438–#5442).

**Filesystem**
- [#5450](https://github.com/modelcontextprotocol/servers/pull/5450) refuses NTFS alternate-data-stream paths on Windows.
- [#5458](https://github.com/modelcontextprotocol/servers/pull/5458) refuses Windows device names and trailing dots/spaces.
- [#5451](https://github.com/modelcontextprotocol/servers/pull/5451) adds per-directory `--read-only-dir`.
- [#5446](https://github.com/modelcontextprotocol/servers/pull/5446) makes `search_files` exclude patterns behave like `directory_tree`.
- [#5456](https://github.com/modelcontextprotocol/servers/pull/5456) prunes the directory named by a `/**` glob.
- [#5447](https://github.com/modelcontextprotocol/servers/pull/5447) fixes `edit_file` matching when `oldText` ends in a newline.
- [#5448](https://github.com/modelcontextprotocol/servers/pull/5448) reports a missing parent directory instead of a raw `chdir` error.

**Git**
- [#5455](https://github.com/modelcontextprotocol/servers/pull/5455) requires `git_log` `max_count` to be at least 1.
- [#5454](https://github.com/modelcontextprotocol/servers/pull/5454) documents `--repository` confinement.

**Fetch**
- [#5453](https://github.com/modelcontextprotocol/servers/pull/5453) caps response bodies at 5 MiB while streaming.

**Everything**
- [#5452](https://github.com/modelcontextprotocol/servers/pull/5452) binds the HTTP transports to loopback by default, with `HOST` to widen.
- [#5449](https://github.com/modelcontextprotocol/servers/pull/5449) counts `tasks/update` answers in UTF-8 bytes.
- [#5478](https://github.com/modelcontextprotocol/servers/pull/5478) drops the unused `jszip` dependency.

**Memory**
- [#5462](https://github.com/modelcontextprotocol/servers/pull/5462) stops the lock heartbeat refreshing a lock it no longer owns.
- [#5461](https://github.com/modelcontextprotocol/servers/pull/5461) describes the array parameters of four tools.
- [#5474](https://github.com/modelcontextprotocol/servers/pull/5474) fixes the Docker upgrade docs.

**Cross-cutting**
- [#5475](https://github.com/modelcontextprotocol/servers/pull/5475) describes every tool input property and adds tests that fail on any missing description (closes #3669).
- [#5460](https://github.com/modelcontextprotocol/servers/pull/5460) adds usage guidance to the list and delete tool descriptions.
- [#5473](https://github.com/modelcontextprotocol/servers/pull/5473) runs every Docker image as a non-root user.
- [#5469](https://github.com/modelcontextprotocol/servers/pull/5469) builds the Docker images from the workspace lockfile.
- [#5459](https://github.com/modelcontextprotocol/servers/pull/5459) runs the CI MCP interface diff for every server a PR touches.
- [#5479](https://github.com/modelcontextprotocol/servers/pull/5479) adopts ruff 0.17.
- [#5476](https://github.com/modelcontextprotocol/servers/pull/5476) is the monthly dependency refresh.
- [#5467](https://github.com/modelcontextprotocol/servers/pull/5467) corrects README and `ADDITIONAL.md` links.

The rollup PRs [#5480](https://github.com/modelcontextprotocol/servers/pull/5480), [#5477](https://github.com/modelcontextprotocol/servers/pull/5477), [#5472](https://github.com/modelcontextprotocol/servers/pull/5472), [#5466](https://github.com/modelcontextprotocol/servers/pull/5466) and [#5465](https://github.com/modelcontextprotocol/servers/pull/5465) were closed by design. They only verify that the sub-PRs combine cleanly.

## 4. Community Hot Topics
- [#3537](https://github.com/modelcontextprotocol/servers/issues/3537) (20 comments) is a security audit of unconstrained string parameters. It is now closed, and the work was likely resolved alongside the schema changes in #5475.
- [#2317](https://github.com/modelcontextprotocol/servers/issues/2317) (12 comments) asks for host allowlisting in the Fetch server. It closed after being open since July 2025. Users want SSRF protection, and the related changes are the Fetch body cap (#5453) and the loopback default for `everything` (#5452).
- [#3669](https://github.com/modelcontextprotocol/servers/issues/3669) (11 comments) is about missing property descriptions. It was fixed by #5475 and shows that LLM tool-selection quality is a priority.
- [#576](https://github.com/modelcontextprotocol/servers/issues/576) (👍 10) asks for Streamable HTTP in all reference servers. It is still open and is the most-upvoted open item.
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047) (👍 3) tracks registering the reference servers in the official registry. It is open.

## 5. Bugs & Stability
Most severe first:
1. **Filesystem Windows parent-directory swap**, [#5260](https://github.com/modelcontextprotocol/servers/issues/5260). This follow-up to GHSA-53mr-w429-c597 is still **open**. The earlier fix covers only Linux and macOS. No fix PR appears in the data.
2. **Dependency advisory**, [#5481](https://github.com/modelcontextprotocol/servers/issues/5481) (open) and [#5420](https://github.com/modelcontextprotocol/servers/issues/5420) (closed). `minimatch` is affected by GHSA-g3hv-75wg-m249 and should be bumped to 11.0.1. The fix is not yet in a PR.
3. **Fetch unbounded body buffering**, [#5370](https://github.com/modelcontextprotocol/servers/issues/5370). Fixed by #5453.
4. **Containers running as root**, [#4741](https://github.com/modelcontextprotocol/servers/issues/4741). Fixed by #5473.
5. **Git `max_count`**, [#5214](https://github.com/modelcontextprotocol/servers/issues/5214). A negative value returned the whole history. Fixed by #5455.
6. **Memory lock heartbeat**, [#5418](https://github.com/modelcontextprotocol/servers/issues/5418). Fixed by #5462.
7. **Sequentialthinking memory exhaustion**, [#5433](https://github.com/modelcontextprotocol/servers/issues/5433). The thought box grew quadratically. Closed, and the fix PR isn't listed.
8. **Smaller bugs**, all closed: #5419 (UTF-8 byte budget), #5431 (`edit_file` newline), #5432 (raw `chdir` error), #5445 (`/**` pruning), #5216 (exclude patterns), #5434 (missing icons).
9. **Still open:** [#5176](https://github.com/modelcontextprotocol/servers/issues/5176). The string `"null"` arrives as `None` in the git server, waiting on python-sdk#3055.

## 6. Feature Requests & Roadmap Signals
- The v2.4.0 trackers (#5438–#5442) indicate what the next release will contain. That is read-only directories, Windows path hardening, loopback-by-default, fetch body caps, and docs and description improvements. The chance of inclusion is high, since the PRs are already merged. The #5470 Version Packages PR will publish them.
- [#576](https://github.com/modelcontextprotocol/servers/issues/576) (Streamable HTTP for all servers) is the largest unmet demand and has no PR yet.
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047) (registry registration) is a possible follow-on.
- [#5463](https://github.com/modelcontextprotocol/servers/issues/5463) renames the interface-diff CI workflow, and the rename is staged across the milestone merge.
- [#4785](https://github.com/modelcontextprotocol/servers/issues/4785) asks for better npm deprecation messages on archived servers, which still draw about 214k installs a week.

## 7. User Feedback Summary
- Users want tools that LLMs can choose between reliably. Descriptions and schemas are a recurring complaint (#3669, #5071, #5416).
- Security-minded users want safer defaults: non-root containers, loopback binding, response caps and Windows path hardening.
- External auditors are filing many issues. Paraphern's contract-drift data ([#5414](https://github.com/modelcontextprotocol/servers/issues/5414), [#5218](https://github.com/modelcontextprotocol/servers/issues/5218)) shows that silent tool-contract changes between releases hurt downstream pinning. Some reports are AI-authored (#4741) or promotional (#5443, #5415).
- Users hit friction with Docker upgrades (#5457) and with Zed configs that were invalid JSON (#5213).

## 8. Backlog Watch
- [#576](https://github.com/modelcontextprotocol/servers/issues/576) has been open since Jan 2025 with 10 upvotes and no resolution.
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047) has been open since Nov 2025 with the registry registration unfinished.
- [#5260](https://github.com/modelcontextprotocol/servers/issues/5260) is a security follow-up for Windows with no linked fix.
- [#5061](https://github.com/modelcontextprotocol/servers/issues/5061) is a GitHub App for board writes. It has been open since Oct 2026 and has no comments.
- [#5176](https://github.com/modelcontextprotocol/servers/issues/5176) is blocked on an SDK fix upstream.
- [#5481](https://github.com/modelcontextprotocol/servers/issues/5481) is a new advisory bump that needs a hand-written fix.
- **Bus factor:** nearly all of today's work came from one maintainer, so review capacity is a concentration risk.

---

## Cross-Ecosystem Comparison

# MCP Servers Cross-Project Comparison Report, 2026-11-05

## 1. Ecosystem Overview
The MCP ecosystem has three layers. The first is reference implementations (MCP Servers). The second is the distribution and trust layer (the official Registry, Docker MCP Registry, and Claude Plugins). The third is curated discovery lists (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills). Supply is growing much faster than review capacity: the lists and registries are dominated by third-party submissions, many of them bulk or agent-authored. Security hardening, such as safe defaults, path confinement, case-sensitive identity and review coverage, is becoming a first-order concern. Skills and plugins are spreading across agents (Claude Code, Codex, Cursor, OpenCode), and MCP is now the common integration substrate. All seven projects share one weakness, which is thin maintainer or review throughput.

## 2. Activity Comparison

Counts are those reported in each digest. "Health" is my own judgment, not a figure from the data.

| Project | Issues updated | PRs updated | Release | Health |
|---|---|---|---|---|
| MCP Servers | 50 (43 closed) | 44 (43 closed/merged) | v2.3.0 shipped; Version Packages PR #5470 open | Strong output, but concentrated in one maintainer. 8/10 |
| MCP Registry | 2 open | 13 (10 closed/merged) | None | Good on ops and security. Community items wait on review. 7.5/10 |
| Awesome MCP Servers | 0 | 126 (115 open) | None | High inflow, review bottleneck. 6/10 |
| Docker MCP Registry | 0 | 50 (48 open) | None | Intake-heavy, one 14-PR batch, little visible review. 5.5/10 |
| Claude Plugins (official) | 9 | 21 (2 closed, 0 merged) | None | Narrow focus on `security-guidance`. 19 PRs wait for review. 6/10 |
| Awesome Claude Code | 23 (3 closed) | 0 | None | Validation automation works. Curation is the bottleneck. 7/10 |
| Awesome Agent Skills | 0 | 27 (23 closed/merged, 4 open) | None | Healthy batch processing. 8/10 |

## 3. MCP Servers's Position

**Advantages**
- **Only project with real engineering throughput.** It closed 43 issues and 43 PRs in one day and shipped a release. No peer merged more than a handful of items.
- **Canonical status.** It sets the tool-schema and description standard, for example #5475 (every input property described, with tests that fail if one is missing). Others consume that contract.
- **Security responsiveness.** It fixed Fetch body buffering (#5453), non-root containers (#5473), loopback-by-default (#5452) and Windows path hardening (#5450, #5458) in one cycle.

**Technical approach differences**
- It is code and a release pipeline with versioned packages. The registries hold metadata and deployment, and the awesome lists are links. Claude Plugins is the nearest peer in shipping code (hooks), but its work is stalled in review.

**Community size**
- Issue volume (50 updated) is more than double any peer. Awesome MCP Servers has more PR volume (126), but those are submissions, not engineering. Reactions are thin everywhere, and the top open demand (#576, Streamable HTTP, 10 👍) is small in absolute terms.

**Risks**
- Bus factor: nearly all of the day's work came from `cliffhall`.
- Open security items: the Windows parent-directory swap (#5260, no fix PR) and the `minimatch` advisory (#5481).
- The data also shows several rollup PRs closed by design, which inflates the closure count somewhat.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Security hardening and safe defaults | MCP Servers, MCP Registry, Claude Plugins | Non-root images, loopback binding, response caps, Windows paths (Servers). Patched infra versions (Registry). Commit/push review coverage (Plugins, #7005). |
| Windows support gaps | MCP Servers, Claude Plugins | NTFS streams and device names (#5450, #5458). PowerShell review skipped (#7005), hangs and process-spawn overhead (#6963, #5558). |
| Identity and namespace integrity | MCP Registry, MCP Servers | Case-collision policy (#1805, #1788). Registry of reference servers (#3047). |
| Tool-selection quality and metadata | MCP Servers, Awesome lists, Docker Registry | Property descriptions (#3669, #5475). Template, naming and description rules in the lists. |
| Remote/hosted servers | Docker MCP Registry, Awesome MCP Servers, MCP Servers | OAuth 2.1 and streamable HTTP entries without source repos (#6675, #6433). Streamable HTTP request (#576). |
| Review and validation automation | Awesome MCP Servers, Awesome Claude Code, Registry | Labels such as `has-glama` and `validation-passed`. Auto-closed pending items. Unlabeled bulk batches. |
| Session memory and context | Awesome Claude Code, Awesome Agent Skills, MCP Servers | Four memory submissions (#3456, #2277, #3469, #3472). A context engineering skill (#1361). The memory server lock fixes (#5462). |
| Cost, quota and observability | Awesome Claude Code, Registry | Limit forecasting (#3481), cache keepers (#3475). Registry log sampling and gzip (#1798). |
| Silent failures and visibility | Claude Plugins, MCP Registry | Silent skips and timeouts (#6995, #6996). npm propagation failures (#1792). |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference servers (filesystem, git, fetch, memory, everything) | Server authors, integrators | TypeScript and Python monorepo, versioned packages, Docker images, CI interface diff |
| MCP Registry | Official publish and discovery service | Publishers, clients | Go service on Kubernetes, Pulumi, CloudNativePG, GitHub-identity namespaces |
| Docker MCP Registry | Containerized catalog entries | Docker users, enterprises | PR-per-server submission model, some remote entries |
| Awesome MCP Servers | Broad curated list of servers | Server authors seeking visibility | Markdown list, bot-validated PRs |
| Claude Plugins (official) | Vetted plugin marketplace with SHA pins | Claude Code users | Pinned marketplace entries, hooks, in-house maintenance |
| Awesome Claude Code | Claude Code resources, issue-driven intake | Claude Code users | Issue submissions, `collaborators_only` PRs |
| Awesome Agent Skills | Cross-agent skill list | Multi-agent users | PR-driven list, one link per entry |

Differences worth noting: the Docker registry accepts proprietary remote servers with no source, while the official Registry stresses identity and provenance. Claude Plugins declines outside PRs, while the Awesome lists depend on them.

## 6. Community Momentum & Maturity

**Tier 1: rapid iteration**
- MCP Servers: release plus a large backlog cleanup.
- MCP Registry: operational iteration, with staging and production rollouts in a day.

**Tier 2: high inflow, throughput-limited**
- Awesome MCP Servers (115 open PRs).
- Docker MCP Registry (48 open, 14 from one author).
- Claude Plugins (19 PRs unreviewed, 0 merged).

**Tier 3: stable curation**
- Awesome Agent Skills: 23 of 27 PRs closed or merged.
- Awesome Claude Code: automated validation works, and the 20 open issues await a maintainer.

Mature: MCP Servers (versioned releases) and the Registry (infrastructure on production tooling). Still forming: the plugin and skill ecosystems, where categories and policies are being decided (proprietary remotes, event semantics, new categories).

## 7. Trend Signals

1. **Security is moving into defaults.** Loopback binding, non-root containers, response caps and review-time guards appear in several projects. For developers: treat these as baseline requirements for any MCP server you ship.
2. **Tool descriptions are an engineering concern.** MCP Servers now tests that every property is described. Expect clients to rely on descriptions for tool choice, so write and test them.
3. **Remote MCP is rising.** Hosted servers with OAuth 2.1 and streamable HTTP are common in submissions, and the largest open request in the reference repo is Streamable HTTP (#576). Plan for remote transport and auth.
4. **Agent-authored and bulk submissions are straining review.** Many PRs are marked as agent-generated, and one author filed 14 PRs. Expect stricter automated gating and per-PR policies.
5. **Namespace trust is an open problem.** Case-collision and impersonation risks (#1805) mean publishers should pick canonical, lowercase identities now.
6. **Windows is a weak spot.** Both server and plugin projects show Windows-specific defects. Test on Windows early.
7. **Paid and event-driven patterns are emerging.** x402 pay-per-call (#18672) and MCP Events SEP-3415 (#18590) are early signals, not yet established.
8. **Memory and quota tooling is in demand.** Session continuity and limit forecasting are the most common themes in the Claude Code resource list.

**Caveat:** several digests lack comment counts, merge-versus-close splits or full samples (Docker registry showed 20 of 50 PRs). Health scores and tier placement are therefore directional.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-11-05

## 1. Today's Overview
Activity was moderate to high. 13 PRs were updated, and 10 of them were merged or closed within about 24 hours. Almost all of that work was infrastructure and deployment hardening by maintainer rdimitrov. It covered security patching, staging and production rollout, and cost and capacity tuning. Community input was light: 2 open issues with no comments or reactions yet. There were no new releases. Overall health is good on operations and security responsiveness. Community-contributed fixes, such as #1788, are waiting on review.

## 2. Releases
No new releases.

## 3. Project Progress
Ten PRs were closed or merged today. Nearly all were from rdimitrov. The data doesn't separate "merged" from "closed", so I treat them as completed work.

**Security patch rollout (staging, then production)**
- [#1801](https://github.com/modelcontextprotocol/registry/pull/1801) moved staging to CloudNativePG 1.30.1, ingress-nginx 1.15.1 and Grafana 12.4.14. The previous versions (1.27.0, 1.13.0 and 12.1.1) had known vulnerabilities.
- [#1802](https://github.com/modelcontextprotocol/registry/pull/1802) excluded completed, TTL-expired ingress admission hooks from Pulumi saved-plan upgrades. The staging rollout had stopped on this. ingress-nginx reached 1.15.1 and stayed healthy.
- [#1804](https://github.com/modelcontextprotocol/registry/pull/1804) constrained the new `DatabaseRole` CRD reference (`databaseroles.postgresql.cnpg.io`) in saved plans. Helm v3 serializes the resource ID as an empty string in preview, and Pulumi enforced that as a constraint.
- [#1803](https://github.com/modelcontextprotocol/registry/pull/1803) promoted the reviewed security profile to production. It is a one-line opt-in. App versions, capacity, PostgreSQL 17.5, volumes and OAuth config are unchanged.

**Performance and cost**
- [#1798](https://github.com/modelcontextprotocol/registry/pull/1798) added negotiated gzip (level 1) for credential-free public listing reads. It also keeps 10% of fast (under 1s) successful listing access logs. Errors, slow requests, auth and publish routes, and audit logs are preserved.
- [#1799](https://github.com/modelcontextprotocol/registry/pull/1799) enabled that behavior in production.
- [#1794](https://github.com/modelcontextprotocol/registry/pull/1794) and [#1795](https://github.com/modelcontextprotocol/registry/pull/1795) added and completed a smaller always-on staging profile. It uses lower CPU requests and two e2-standard-2 nodes, and keeps database isolation and volumes.
- [#1793](https://github.com/modelcontextprotocol/registry/pull/1793) raised production burst ceilings, from 8 to 16 ingress replicas and from 5 to 7 worker nodes. Baseline capacity is unchanged.

**Docs**
- [#1800](https://github.com/modelcontextprotocol/registry/pull/1800) clarified that production previews are restricted to `main`, and documented a maintainer-run local preview.

## 4. Community Hot Topics
No item has comments or reactions, so there are no hot threads in the usual sense. The most substantive activity is:
- [#1805](https://github.com/modelcontextprotocol/registry/issues/1805) is a follow-up to #1788 and #689. It asks for a defined, enforced case-only name collision policy for GitHub-based server identities. GitHub logins are case-insensitive, but the Registry preserves mixed-case names. That could let `io.github.Foo/x` and `io.github.foo/x` coexist and cause ambiguity or impersonation.
- [#1788](https://github.com/modelcontextprotocol/registry/pull/1788) makes publish grants match the GitHub owner portion case-insensitively. For example, a grant for `io.github.Skymly/*` should allow `io.github.skymly/dotnet-mcp`. It is the only open community PR with real functional impact.

The underlying need is identity and namespace consistency as the Registry matures. This ties into security and authorization.

## 5. Bugs & Stability
Ranked by severity:
1. **Namespace case-sensitivity in authorization.** [#1788](https://github.com/modelcontextprotocol/registry/pull/1788) fixes #1787, where legitimate publishers are denied. It is open and awaiting review. The related collision risk is tracked in [#1805](https://github.com/modelcontextprotocol/registry/issues/1805) and has no fix yet.
2. **npm version validation breaks CI publishing.** [#1792](https://github.com/modelcontextprotocol/registry/issues/1792) reports that the Registry's npm check fails when publishing right after `npm publish`, because of npm propagation delay. Users must re-run the workflow by hand. There is no fix PR.
3. **Infra deployment failures** (Pulumi saved-plan constraints) were resolved the same day by #1802 and #1804. There was no reported production impact.

## 6. Feature Requests & Roadmap Signals
- **Case-collision policy** ([#1805](https://github.com/modelcontextprotocol/registry/issues/1805)). It is likely to be handled alongside #1788, probably as validation at publish time. I rate it a plausible near-term addition.
- **More tolerant npm verification** ([#1792](https://github.com/modelcontextprotocol/registry/issues/1792)). Possible approaches are retry or backoff on the Registry side, or an eventual-consistency window. This is a likely small improvement because the pain is clear.
- The infra direction is cost-efficient, secure and scalable operation. That means lean staging, burst headroom, and compression and log sampling for public reads.

## 7. User Feedback Summary
- Publishers who automate releases (npm, then Registry) hit friction from timing and consistency in external package verification ([#1792](https://github.com/modelcontextprotocol/registry/issues/1792)).
- GitHub-identity publishers expect case-insensitive behavior that matches GitHub's own semantics ([#1788](https://github.com/modelcontextprotocol/registry/pull/1788)).
- No explicit satisfaction signals appear in today's data. The sample is small.

## 8. Backlog Watch
- [#1788](https://github.com/modelcontextprotocol/registry/pull/1788) has been open since 2026-11-02, with a community author and an authorization-impacting change. It needs maintainer review, ideally together with #1805's policy decision.
- [#1792](https://github.com/modelcontextprotocol/registry/issues/1792) and [#1805](https://github.com/modelcontextprotocol/registry/issues/1805) have no comments or maintainer triage yet.
- Dependabot PRs [#1797](https://github.com/modelcontextprotocol/registry/pull/1797) (go-dependencies: kms, huma, pgx) and [#1796](https://github.com/modelcontextprotocol/registry/pull/1796) (Pulumi SDK 3.272.0 → 3.273.0) are open and low risk. They can be merged once CI passes.
- Referenced older discussion [#689](https://github.com/modelcontextprotocol/registry/issues/689) is not in today's data. It is worth checking that its status matches the new policy work.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-05

## 1. Today's Overview
Awesome MCP Servers saw no issue activity and no new releases in the last 24h, but PR traffic was very high: 126 PRs were updated, 115 of them still open and 11 merged or closed. This is a curated list, so the activity is almost entirely submissions of new MCP servers. Many of the PRs are marked 🤖🤖🤖, which suggests automated or agent-authored submissions. The open count is large relative to the number closed, which points to a review bottleneck rather than a lack of contributions. The data lists no comment counts (all "undefined") and no reactions (all 0), so engagement signals are weak.

## 2. Releases
No new releases.

## 3. Project Progress
Only a few of the PRs shown are closed, and the data doesn't say whether any were merged. Three are visible:
- [#17416](https://github.com/punkpeye/awesome-mcp-servers/pull/17416) MnemosyneOS/mnemosyne (Knowledge & Memory) was closed. It was opened on 2026-10-23 and has no summary.
- [#11076](https://github.com/punkpeye/awesome-mcp-servers/pull/11076) AI Applyd MCP (Workplace & Productivity) was closed. It carried a `merge-conflict` label and had been open since 2026-07-28.
- [#16914](https://github.com/punkpeye/awesome-mcp-servers/pull/16914) Diogenes Modular Gateway & 6 Domain Packages was closed. It bundled a gateway and six domain packages in one PR, and a maintainer had earlier asked for one server per PR (see #16013, mentioned in #16874).

Nothing here shows features or fixes advancing. Of the 11 merged/closed PRs in the window, I can see only these three.

## 4. Community Hot Topics
Comment counts are unavailable, so this ranking is by thematic clustering, not by discussion volume.
- **Developer and infrastructure tooling:** [#18590](https://github.com/punkpeye/awesome-mcp-servers/pull/18590) (Hookdeck events bridge, implementing the draft SEP-3415 MCP Events extension) and [#18653](https://github.com/punkpeye/awesome-mcp-servers/pull/18653) (Gridzen developer kit). The Hookdeck PR points to demand for push or event semantics in MCP, since poll tools are offered as a fallback.
- **Finance and crypto data:** [#18677](https://github.com/punkpeye/awesome-mcp-servers/pull/18677) (DeFi yields), [#18672](https://github.com/punkpeye/awesome-mcp-servers/pull/18672) (Solana x402 paid endpoints), [#18673](https://github.com/punkpeye/awesome-mcp-servers/pull/18673) (CometBFT validator monitoring). x402 pay-per-call payments are a notable emerging pattern.
- **Aggregators and data access:** [#18675](https://github.com/punkpeye/awesome-mcp-servers/pull/18675) (400+ public-data APIs) and [#18665](https://github.com/punkpeye/awesome-mcp-servers/pull/18665) (semantic layer with governed metrics).
- **Monitoring and quality:** [#18656](https://github.com/punkpeye/awesome-mcp-servers/pull/18656) (ModelLens, which probes model providers).
- **Niche verticals:** [#18671](https://github.com/punkpeye/awesome-mcp-servers/pull/18671) (real estate), [#17293](https://github.com/punkpeye/awesome-mcp-servers/pull/17293) (Google Ads guardrails), [#18651](https://github.com/punkpeye/awesome-mcp-servers/pull/18651) (macOS Spaces), [#17981](https://github.com/punkpeye/awesome-mcp-servers/pull/17981) (email).

The underlying need is differentiation. Servers move into specific verticals, safety guardrails and payments to stand out from the crowd.

## 5. Bugs & Stability
No issues were filed and no bugs were reported. The only quality signals are PR labels:
- [#18677](https://github.com/punkpeye/awesome-mcp-servers/pull/18677) carries `duplicate`.
- [#11076](https://github.com/punkpeye/awesome-mcp-servers/pull/11076) had a `merge-conflict`.
- Several PRs lack a Glama listing (`missing-glama`): [#18676](https://github.com/punkpeye/awesome-mcp-servers/pull/18676), [#18670](https://github.com/punkpeye/awesome-mcp-servers/pull/18670), [#18669](https://github.com/punkpeye/awesome-mcp-servers/pull/18669).

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. Indirect signals are:
- Support for the MCP Events extension (draft SEP-3415), as in [#18590](https://github.com/punkpeye/awesome-mcp-servers/pull/18590).
- Paid, agent-native APIs using x402 ([#18672](https://github.com/punkpeye/awesome-mcp-servers/pull/18672)).
- Educational content, such as the interactive MCP explainer in [#18676](https://github.com/punkpeye/awesome-mcp-servers/pull/18676).

On the list's own process, the automation labels (`has-glama`, `valid-name`, `has-emoji`, "automated agent PR fast-track marker" in [#18669](https://github.com/punkpeye/awesome-mcp-servers/pull/18669)) suggest a pipeline in which bots do the validation. That is an inference, not something the data states.

## 7. User Feedback Summary
Contributors want visibility in the best-known MCP directory, and they follow its conventions: one server per PR, alphabetical placement, and a Glama listing. Several disclose commercial ties, for example [#18651](https://github.com/punkpeye/awesome-mcp-servers/pull/18651), where the server needs a paid app. This is useful context for maintainers when they judge quality. No one reported dissatisfaction, but the data contains no comments, so this is a limited read.

## 8. Backlog Watch
These older PRs are still open and may need maintainer attention:
- [#16874](https://github.com/punkpeye/awesome-mcp-servers/pull/16874) Ouroboros Milestone, open since 2026-10-18. It was resubmitted as one server per PR, as requested in #16013.
- [#17293](https://github.com/punkpeye/awesome-mcp-servers/pull/17293) AdRails, open since 2026-10-22.
- [#17981](https://github.com/punkpeye/awesome-mcp-servers/pull/17981) emailit-mcp, open since 2026-10-29.

All three have the passing labels (`has-emoji`, `valid-name`, `has-glama`) but have waited about one to three weeks. With 115 open PRs, the review queue is the main health risk. Faster triage of items that already pass the automated checks would help.

**Project health:** contributor interest is strong, but the lack of releases, issues, comments and merge data limits the assessment of maintainer throughput.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-05

Repo: [docker/mcp-registry](https://github.com/docker/mcp-registry)

**Data caveat:** The comment counts came through as `undefined`, and only 20 of the 50 updated PRs were provided. I can't rank by comments, and the two merged/closed PRs aren't in the sample. Where I describe "hot" items, I'm using recency and batch size instead.

## 1. Today's Overview

The registry is a submission queue today: 50 PRs were updated in 24h (48 open, 2 merged/closed), and there were no issues or releases. Almost all activity is new "Add X MCP server" submissions. In the sample, 14 of 20 PRs come from one author, `mambabuilt`, filed on 2026-11-05. Throughput looks dominated by intake rather than review: the only closures are the 2 merged/closed PRs, and the sample shows no review discussion. Activity is high in volume but low in visible engagement.

## 2. Releases

None.

## 3. Project Progress

- 2 PRs were merged or closed in the window, but they aren't in the provided sample, so I can't say which servers landed or whether they were rejections.
- No feature or fix work on the registry itself (tooling, schema, CI) is visible. All visible PRs are catalog additions.

## 4. Community Hot Topics

Comment and reaction data is unavailable (every PR shows 👍 0). By activity, the notable items are:

- **Bulk submission from mambalabsdev (14 PRs, #6659–#6672).** Each is a separate scraper or data-feed server:
  - Social and web scraping: [#6667 Reddit Search](https://github.com/docker/mcp-registry/pull/6667), [#6669 Substack](https://github.com/docker/mcp-registry/pull/6669), [#6670 Threads](https://github.com/docker/mcp-registry/pull/6670), [#6659 LinkedIn Jobs](https://github.com/docker/mcp-registry/pull/6659).
  - Business and sales intelligence: [#6666 Funding Rounds](https://github.com/docker/mcp-registry/pull/6666), [#6661 New Company Registrations](https://github.com/docker/mcp-registry/pull/6661), [#6663 Open Tender/RFP](https://github.com/docker/mcp-registry/pull/6663), [#6660 Manufacturer Finder](https://github.com/docker/mcp-registry/pull/6660), [#6662 News Monitor](https://github.com/docker/mcp-registry/pull/6662), [#6665 Product Hunt](https://github.com/docker/mcp-registry/pull/6665).
  - Lookup and enrichment: [#6672 WHOIS](https://github.com/docker/mcp-registry/pull/6672), [#6664 Person Social Footprint](https://github.com/docker/mcp-registry/pull/6664), [#6671 Phrase/Business Model Classifier](https://github.com/docker/mcp-registry/pull/6671), [#6668 Shopify/Chrome Store Listings](https://github.com/docker/mcp-registry/pull/6668).

  The underlying need is lead generation and market research for agents. A batch this size will strain review capacity.
- **Remote (hosted) MCP servers** are a growing submission category:
  - [#5555 Aeon](https://github.com/docker/mcp-registry/pull/5555) (OAuth, streamable-http).
  - [#5569 /call-me](https://github.com/docker/mcp-registry/pull/5569) (no auth).
  - [#6433 SystemSculpt](https://github.com/docker/mcp-registry/pull/6433) (proprietary, no source).
  - [#6675 freelance.link](https://github.com/docker/mcp-registry/pull/6675) (OAuth 2.1).
  - [#6674 apteka.online](https://github.com/docker/mcp-registry/pull/6674) (read-only, no public repo).

  Submitters cite existing remote entries (`mercado-libre`, `cloudflare-docs`) as precedent for having no source repo.
- **Infrastructure tooling:** [#6673 harbor-mcp](https://github.com/docker/mcp-registry/pull/6673) is a read-only server for the Harbor container registry with 12 tools. It is a natural fit for Docker's audience.

## 5. Bugs & Stability

No issues and no bug-fix PRs are in the data, and no crashes or regressions were reported. Two review-risk points from the submissions:
- Several scraper servers (Reddit, Threads, LinkedIn, Substack) advertise "no login" access. Their terms-of-service and licensing compliance deserves a reviewer's look.
- Closed-source remote servers such as #6433 and #6674 can't be audited from source.

## 6. Feature Requests & Roadmap Signals

There are no explicit feature requests. Implied signals are:
- **Remote server support** (OAuth 2.1, streamable HTTP, no-repo entries) is increasingly requested through submissions. Clear policy or docs for proprietary or no-source remote entries would reduce friction.
- Batch submissions suggest a need for a **bulk or templated onboarding path**. It could be a multi-server PR format or automated validation.

These are inferences, and no maintainer roadmap is visible in this data.

## 7. User Feedback Summary

There is no direct user feedback, since there are no issues or comments in the dataset. From submissions, contributors want agents to reach external data without friction: no API keys, no logins, and hosted endpoints. Their stated requirements checklists (open source, licensing) appear to be followed by template.

## 8. Backlog Watch

- [#5555 Aeon](https://github.com/docker/mcp-registry/pull/5555), opened 2026-10-08 and updated today, has been open about 4 weeks.
- [#5569 /call-me](https://github.com/docker/mcp-registry/pull/5569), opened 2026-10-09, has been open about 4 weeks.
- [#6433 SystemSculpt](https://github.com/docker/mcp-registry/pull/6433), opened 2026-11-01, is a proprietary remote server that needs a policy decision.
- Both ~4-week-old PRs show recent updates, which suggests ongoing back-and-forth or resubmission. Maintainers should confirm whether they are blocked on review, CI, or the author.
- 48 open PRs with only 2 closures today suggests the queue is growing. The 14-PR mambalabsdev batch needs triage, such as grouping the batch and checking for duplication or overlapping functionality.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest: 2026-11-05

## 1. Today's Overview
Activity is high but narrow: 9 issues and 21 PRs were updated in 24h, and no releases shipped. Almost all of it concerns the `security-guidance` plugin. Maintainer `mhegazy` has a batch of about 15 hardening and reliability PRs open, and a user-filed bug series (many AI-assisted, from `MarvelTiyjudy`) is feeding them. Only 2 PRs closed and none merged. Of the open PRs, 19 are waiting for review, so throughput looks like the constraint, not contributor interest. Two automated SHA bumps (`hostinger`, `notion`) are also pending.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. Two were closed without merging:
- [#7009](https://github.com/anthropics/claude-plugins-official/pull/7009) `mcp-tunnels`: pinned the sample server's MCP Python SDK to 1.x to fix the 2.x `FastMCP` rename (fixes #6978). It was closed without merge.
- [#7008](https://github.com/anthropics/claude-plugins-official/pull/7008) `telegram`: added reply-to (quoted message) info to inbound meta. It was closed without merge. External contributions appear to be declined, which matches the report in [#5564](https://github.com/anthropics/claude-plugins-official/issues/5564) that a PR was auto-closed.

Fix PRs are pending for several of today's issues:
- [#6997](https://github.com/anthropics/claude-plugins-official/pull/6997) clears `net_err` on success (fixes #6993 and #6994).
- [#6919](https://github.com/anthropics/claude-plugins-official/pull/6919) keeps new files in the Stop review when `git add -N` fails (addresses #6996).
- [#6965](https://github.com/anthropics/claude-plugins-official/pull/6965) ends hung reviews in time (fixes #6995).

## 4. Community Hot Topics
The data lists PRs without comment counts, so the ranking below uses issue comments and reactions.
- [#5558](https://github.com/anthropics/claude-plugins-official/issues/5558) (4 comments, 👍1): a single Bash call starts 5 Python processes because the `if` gates are evaluated after spawn. Users want the plugin's overhead cut, especially on Windows. [#6998](https://github.com/anthropics/claude-plugins-official/pull/6998) adds measurement of this, and [#6918](https://github.com/anthropics/claude-plugins-official/pull/6918) reduces Python alias launches.
- [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) (1 comment, 👍1): the `remember` pin is stale. Users need marketplace pins to track upstream fixes more quickly.
- [#5564](https://github.com/anthropics/claude-plugins-official/issues/5564): the `telegram` plugin drops quote-replies, edits and reactions.

## 5. Bugs & Stability
Ranked by severity:
1. [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) `remember` pinned at v0.43.1: on Windows, PostToolUse hangs until the 600 s timeout. The fix is in v0.43.2, and v0.44.1 is the latest. No fix PR is listed.
2. [#7005](https://github.com/anthropics/claude-plugins-official/issues/7005) `security-guidance`: commit and push reviews are silently skipped for the Windows PowerShell tool. This is a coverage gap in a security control. No fix PR is listed. [#6999](https://github.com/anthropics/claude-plugins-official/pull/6999) is Windows-related but only concerns the CLI path.
3. [#6996](https://github.com/anthropics/claude-plugins-official/issues/6996): when `git add -N` fails, new files go unreviewed and the Stop review reports "no changes". The fix is [#6919](https://github.com/anthropics/claude-plugins-official/pull/6919).
4. [#6995](https://github.com/anthropics/claude-plugins-official/issues/6995): a push review can exceed the 10-minute hook timeout and end silently. The fix is [#6965](https://github.com/anthropics/claude-plugins-official/pull/6965).
5. [#7007](https://github.com/anthropics/claude-plugins-official/issues/7007): `validate-hook-schema.sh` crashes on the `.hooks` wrapper, and `quick_validate.py` fails on official skill frontmatter. No fix PR is listed.
6. [#6993](https://github.com/anthropics/claude-plugins-official/issues/6993) and [#6994](https://github.com/anthropics/claude-plugins-official/issues/6994): stale `net_err` telemetry. This is low severity, and [#6997](https://github.com/anthropics/claude-plugins-official/pull/6997) fixes both.

## 6. Feature Requests & Roadmap Signals
- [#5564](https://github.com/anthropics/claude-plugins-official/issues/5564): `telegram` quote-reply, edit and reaction support. The same feature was proposed in the closed #7008, so demand is clear. Delivery depends on maintainers taking it in-house.
- Likely next in `security-guidance`: Windows hardening ([#7004](https://github.com/anthropics/claude-plugins-official/pull/7004), [#6999](https://github.com/anthropics/claude-plugins-official/pull/6999)), and config and state safety ([#7001](https://github.com/anthropics/claude-plugins-official/pull/7001), [#7002](https://github.com/anthropics/claude-plugins-official/pull/7002), [#7003](https://github.com/anthropics/claude-plugins-official/pull/7003)). Other candidates are not saving review runs as session transcripts ([#6627](https://github.com/anthropics/claude-plugins-official/pull/6627)) and treating a blank `ANTHROPIC_BASE_URL` as unset ([#6930](https://github.com/anthropics/claude-plugins-official/pull/6930)).
- Pending automated bumps: [#6480](https://github.com/anthropics/claude-plugins-official/pull/6480) (`hostinger`) and [#6930](https://github.com/anthropics/claude-plugins-official/pull/6930) are separate items; the notion bump is [#7006](https://github.com/anthropics/claude-plugins-official/pull/7006).

## 7. User Feedback Summary
- Windows users are the most affected group. They report process-spawn overhead, hangs, PowerShell coverage gaps and packaged-Python alias side effects.
- Users want visibility. Silent skips ("no changes", silent timeouts, unreviewed commits) are a recurring complaint.
- Users want marketplace pins to follow upstream releases.
- External contributors say patches are auto-closed, so they file issues instead.
- Tooling in the repo, such as the validation scripts in #7007, does not handle the layout of the official plugins.

## 8. Backlog Watch
- [#6480](https://github.com/anthropics/claude-plugins-official/pull/6480): the `hostinger` SHA bump has been open since 2026-10-12, which is about 3.5 weeks. It likely needs a merge decision.
- [#5558](https://github.com/anthropics/claude-plugins-official/issues/5558): open since 2026-08-21, so about 2.5 months. It is a performance issue and still active.
- [#5564](https://github.com/anthropics/claude-plugins-official/issues/5564): open since 2026-08-21, with no maintainer-side resolution.
- Older `security-guidance` PRs are still unmerged: [#6627](https://github.com/anthropics/claude-plugins-official/pull/6627) (2026-10-15), [#6835](https://github.com/anthropics/claude-plugins-official/pull/6835) (2026-10-20), [#6918](https://github.com/anthropics/claude-plugins-official/pull/6918), [#6919](https://github.com/anthropics/claude-plugins-official/pull/6919) and [#6920](https://github.com/anthropics/claude-plugins-official/pull/6920) (2026-10-27), and [#6922](https://github.com/anthropics/claude-plugins-official/pull/6922). They need review capacity.
- [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963): a one-line pin bump with no PR yet, which makes it quick to resolve.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Project Digest, 2026-11-05

## 1. Today's Overview
The repository (hesreallyhim/awesome-claude-code) shows high submission activity but no code movement. 23 issues were updated in the last 24h (20 open, 3 closed), with 0 PRs and 0 releases. Nearly all traffic is resource-submission issues. 19 of the 20 open issues carry the `validation-passed` label, so the automated validation pipeline is working. Maintainer-side processing (merging into the list) is not visible in today's data. Activity is healthy on the community side and quiet on the curation side.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. The repo appears to use a `collaborators_only` PR policy (see #3471), so additions to the list are made by maintainers from issues rather than through community PRs.

Closed issues today:
- [#3474](https://github.com/hesreallyhim/awesome-claude-code/issues/3474) Detent (Start Here), `validation-passed`, closed the same day it was created.
- [#3476](https://github.com/hesreallyhim/awesome-claude-code/issues/3476) OpenVerein (Skills), `validation-pending` and `auto-closed`, so it was closed automatically by the validator.
- [#2132](https://github.com/hesreallyhim/awesome-claude-code/issues/2132) claude-physics-research-template (CLAUDE.md Files), `validation-passed`, closed after about 4 months. It was likely processed by a maintainer.

## 4. Community Hot Topics
Comment counts are low everywhere, with a maximum of 4 and no 👍 reactions on any item. The most active items are:
- [#3456](https://github.com/hesreallyhim/awesome-claude-code/issues/3456) active-memory (4 comments): a plugin that writes a structured 15-section handoff file for session continuity.
- [#2277](https://github.com/hesreallyhim/awesome-claude-code/issues/2277) deja-vu (2 comments): local session memory across sessions, submitted 2026-07-16 and still open.
- [#3320](https://github.com/hesreallyhim/awesome-claude-code/issues/3320) waitroom (2 comments): four plugins that use agent wait time, for example diff review.
- [#3467](https://github.com/hesreallyhim/awesome-claude-code/issues/3467) dyz-gongwen-skills (2 comments): 22 skills for Chinese official-document writing.

Themes by category among today's submissions:
- **Memory & Context Persistence (4):** #3456, #2277, [#3472](https://github.com/hesreallyhim/awesome-claude-code/issues/3472), [#3469](https://github.com/hesreallyhim/awesome-claude-code/issues/3469). This is the largest cluster and points to continued demand for continuity across sessions.
- **Skills (5):** [#3478](https://github.com/hesreallyhim/awesome-claude-code/issues/3478), [#3470](https://github.com/hesreallyhim/awesome-claude-code/issues/3470), [#3460](https://github.com/hesreallyhim/awesome-claude-code/issues/3460), [#3465](https://github.com/hesreallyhim/awesome-claude-code/issues/3465), plus #3476. These are domain-specific (sales, conferences, literature review, club management).
- **Security (2):** [#3480](https://github.com/hesreallyhim/awesome-claude-code/issues/3480) Lagune and [#3477](https://github.com/hesreallyhim/awesome-claude-code/issues/3477) claude-oswe.
- **Usage & Cost observability (2):** [#3481](https://github.com/hesreallyhim/awesome-claude-code/issues/3481) glidepath (forecasts 5-hour and weekly limits) and [#3464](https://github.com/hesreallyhim/awesome-claude-code/issues/3464) Claude Account Switcher.
- **Other categories:** [#3479](https://github.com/hesreallyhim/awesome-claude-code/issues/3479) Molt (Agent Orchestration), [#3475](https://github.com/hesreallyhim/awesome-claude-code/issues/3475) claude-cache-keeper (Mods), [#3473](https://github.com/hesreallyhim/awesome-claude-code/issues/3473) KinetAios (Start Here), [#3468](https://github.com/hesreallyhim/awesome-claude-code/issues/3468) unslop audit (Design & UI/UX), [#3466](https://github.com/hesreallyhim/awesome-claude-code/issues/3466) Terminal Tax MCP server (Providers & Integration Infrastructure).

The underlying needs are session memory, quota and cost awareness, and security auditing of agent-generated code.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. One process-level note is that #3476 was auto-closed because validation was pending. This is expected pipeline behavior, not a defect, but the submitter may need guidance on re-submitting.

## 6. Feature Requests & Roadmap Signals
- [#3471](https://github.com/hesreallyhim/awesome-claude-code/issues/3471) asks the maintainer to link the external list taskade/awesome-vibe-coding. The submitter says a fork PR is blocked by the `collaborators_only` policy. It has 0 comments and is not a standard resource submission. It is unlikely to be accepted without a maintainer decision, and the policy makes the PR route unavailable.
- The cost and limit-monitoring tools (#3481, #3464, #3475) suggest that Usage & Cost could become a larger category. Memory & Context Persistence also looks likely to keep growing.
- No roadmap items were stated by the maintainer today.

## 7. User Feedback Summary
Contributors are mainly tool authors, not end-user reviewers, so the signals are indirect:
- Users want to avoid losing context between sessions (#3456, #2277, #3469, #3472).
- Users want to manage usage limits and prompt-cache expiry (#3481, #3475, #3464).
- Specialized and non-English domains are growing, including Chinese official documents (#3467), German club administration (#3476) and tax filing (#3466).
- Security-minded workflows for AI-generated code are getting attention (#3480, #3477).
- There is no direct satisfaction or dissatisfaction data, and no reactions were recorded.

## 8. Backlog Watch
- [#2277](https://github.com/hesreallyhim/awesome-claude-code/issues/2277) deja-vu has been open since 2026-07-16 (about 3.5 months) despite `validation-passed`. It was touched today, so it may be moving.
- [#3320](https://github.com/hesreallyhim/awesome-claude-code/issues/3320) waitroom has been open since 2026-10-28 (about 1 week) and has `validation-passed`.
- [#3471](https://github.com/hesreallyhim/awesome-claude-code/issues/3471) has no responses and needs a maintainer decision on whether outside list links are accepted.
- The 20 open items are all awaiting maintainer review. The gap between validated submissions and list inclusion is the main health indicator to watch. 17 of the open items were created in the last two days, so the review queue could grow if there is no batch processing.

**Health assessment:** Community inflow is strong and validation automation is reliable. Curation throughput (PRs and merges) is the bottleneck, with 0 PRs and 0 releases today.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-05
Repo: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity was PR-only: 27 PRs were updated in the last 24h, with 0 issues and 0 releases. Of the 27 PRs, 23 were closed or merged and 4 are open, which points to a maintainer batch-processing pass over the submission queue. The data does not say which closures were merges and which were rejections. Submissions are still arriving at a steady pace, with new entries dated 2026-11-02 to 2026-11-05 (PRs #1333–#1361). Project health looks good on throughput, but the visible data has no discussion: every PR shows 0 👍 and the comment count is undefined.

## 2. Releases
No new releases.

## 3. Project Progress
The 23 closed or merged PRs are all "Add skill" entries, so the list's growth is the only feature progress today. Only 18 of them appear in the top 20 shown. The status of the other 5 is not in the data.

| Category | PRs |
|---|---|
| Productivity & Collaboration | [#1340](https://github.com/VoltAgent/awesome-agent-skills/pull/1340) Perisclaw WhatsApp, [#1333](https://github.com/VoltAgent/awesome-agent-skills/pull/1333) Pachca, [#1345](https://github.com/VoltAgent/awesome-agent-skills/pull/1345) answer-me-with-html, [#1354](https://github.com/VoltAgent/awesome-agent-skills/pull/1354) dyz-gongwen-skills (Chinese official documents), [#1344](https://github.com/VoltAgent/awesome-agent-skills/pull/1344) keenable-web |
| Development & Testing | [#1341](https://github.com/VoltAgent/awesome-agent-skills/pull/1341) ScrapingBee CLI, [#1355](https://github.com/VoltAgent/awesome-agent-skills/pull/1355) unslop-skill (UI audit), [#1356](https://github.com/VoltAgent/awesome-agent-skills/pull/1356) excalidraw-cli, [#1336](https://github.com/VoltAgent/awesome-agent-skills/pull/1336) ponder (code review), [#1342](https://github.com/VoltAgent/awesome-agent-skills/pull/1342) webly |
| Specialized Domains | [#1339](https://github.com/VoltAgent/awesome-agent-skills/pull/1339) autonomous-research, [#1350](https://github.com/VoltAgent/awesome-agent-skills/pull/1350) antvis/ava (data analysis and charts), [#1352](https://github.com/VoltAgent/awesome-agent-skills/pull/1352) genealogy-research-recipes, [#1348](https://github.com/VoltAgent/awesome-agent-skills/pull/1348) foreign-academic-translator, [#1359](https://github.com/VoltAgent/awesome-agent-skills/pull/1359) ChatCut video skills, [#1337](https://github.com/VoltAgent/awesome-agent-skills/pull/1337) Celopedia |
| Marketing | [#1335](https://github.com/VoltAgent/awesome-agent-skills/pull/1335) humanizer-skill, [#1338](https://github.com/VoltAgent/awesome-agent-skills/pull/1338) new-term-radar |
| Other | [#1343](https://github.com/VoltAgent/awesome-agent-skills/pull/1343) EasyPost multi-platform publishing |

Two categories are not in the table: the 5 closed PRs outside the top 20, and the open #1361 under Context Engineering.

## 4. Community Hot Topics
Comment and reaction counts are unavailable (comments are undefined and every PR has 0 👍), so no PR can be ranked by engagement. The signals below come from the content of the PRs:

- **Context Engineering:** [#1361 music-for-robots](https://github.com/VoltAgent/awesome-agent-skills/pull/1361) is the only open PR in the top 20. It targets a different category from the rest. The need it describes is breaking autoregressive lock-in without compacting the context window.
- **Communication and messaging integrations:** [#1340](https://github.com/VoltAgent/awesome-agent-skills/pull/1340) (WhatsApp), [#1333](https://github.com/VoltAgent/awesome-agent-skills/pull/1333) (Pachca) and [#1343](https://github.com/VoltAgent/awesome-agent-skills/pull/1343) (multi-platform social publishing) show demand for agents that act inside chat and social tools.
- **Non-English and regional use cases:** [#1354](https://github.com/VoltAgent/awesome-agent-skills/pull/1354) (Chinese official documents), [#1348](https://github.com/VoltAgent/awesome-agent-skills/pull/1348) (Chinese academic translation) and [#1343](https://github.com/VoltAgent/awesome-agent-skills/pull/1343) (Chinese social platforms) show growing non-English contributions.
- **Agent-facing web infrastructure:** [#1342 webly](https://github.com/VoltAgent/awesome-agent-skills/pull/1342), [#1344 keenable-web](https://github.com/VoltAgent/awesome-agent-skills/pull/1344) and [#1341 ScrapingBee](https://github.com/VoltAgent/awesome-agent-skills/pull/1341) cover hosting, search and scraping, often through MCP servers.

## 5. Bugs & Stability
No issues were reported and no bug-fix PRs were updated. The repo is a curated list with no runtime code, so stability risk is low. The main quality risks are broken links, entries that break CONTRIBUTING rules such as the 10-word description limit, and low-quality or promotional submissions.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals:

- **New category:** [#1361](https://github.com/VoltAgent/awesome-agent-skills/pull/1361) suggests that Context Engineering may get more entries.
- **Stronger placement for related skills:** [#1359](https://github.com/VoltAgent/awesome-agent-skills/pull/1359) adds two video-editing skills, and [#1350](https://github.com/VoltAgent/awesome-agent-skills/pull/1350) adds a data and charting skill. Both are placed under the broad Specialized Domains category. If similar entries keep arriving, sub-categories such as Video/Media or Data & Analytics may be worth considering. This is my inference.
- Several PRs mention install stats, for example skills.sh installs in [#1337](https://github.com/VoltAgent/awesome-agent-skills/pull/1337) and star counts in [#1345](https://github.com/VoltAgent/awesome-agent-skills/pull/1345). That hints at contributors wanting some form of quality or popularity signal.

## 7. User Feedback Summary
There are no comments to analyze, so there is no direct feedback. From the PR descriptions:

- Contributors are mostly skill authors promoting their own work, and many say so (for example [#1345](https://github.com/VoltAgent/awesome-agent-skills/pull/1345) and [#1355](https://github.com/VoltAgent/awesome-agent-skills/pull/1355)).
- Submissions follow a consistent template: appended at the end of a section, link-only, short description. That suggests the contribution guidelines are clear.
- Many skills target multiple agents (Claude Code, Codex, Cursor, OpenCode) or use MCP, which shows the skill format spreading across tools.

## 8. Backlog Watch
- **Open PR:** [#1361](https://github.com/VoltAgent/awesome-agent-skills/pull/1361) was created today and is awaiting review. It is not stale, but it falls outside the common categories, so it may need a maintainer decision on fit.
- **Unseen PRs:** 3 of the 4 open PRs and 4 of the 27 updated PRs are not in the top-20 listing, so I can't assess them.
- **Numbering gaps:** PR numbers run from #1333 to #1361 in the visible data, and gaps such as #1346, #1347 and #1349 are not shown. Those PRs may be older open items or may have been closed earlier.
- **Data limits:** The data has no comment counts, reviewer activity or merge-versus-reject outcomes. Maintainers should check whether the 23 closures include rejections that need a reply to the contributor.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
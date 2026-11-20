# MCP Ecosystem Digest 2026-11-20

> Issues: 17 | PRs: 6 | Projects covered: 7 | Generated: 2026-11-20 15:53 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-20

## 1. Today's Overview
Activity was moderate and housekeeping-heavy. The repo saw 17 issues updated (8 open, 9 closed) and 6 PRs updated (1 open, 5 closed). There were no new releases. Most of the movement came from maintainer `cliffhall` preparing the **v2.6.0** release: tracker issues were closed, CI hardening PRs landed, and flaky memory tests were fixed. Community input was light: three outside reports arrived, with no comments yet. Overall health looks good, with the focus on release readiness and test stability.

## 2. Releases
No new releases. The Changesets PR [#5633 "chore: version packages"](https://github.com/modelcontextprotocol/servers/pull/5633) is still open. It is the likely vehicle for v2.6.0.

## 3. Project Progress
Closed or merged PRs:
- [#5631](https://github.com/modelcontextprotocol/servers/pull/5631) adds `npm run image-smoke`, which builds, boots and stops each changed server's Docker image in both CI tiers. It closes [#5598](https://github.com/modelcontextprotocol/servers/issues/5598), where no workflow built the images.
- [#5632](https://github.com/modelcontextprotocol/servers/pull/5632) gives memory's real-endpoint Streamable HTTP tests a 30 s timeout. It closes [#5570](https://github.com/modelcontextprotocol/servers/issues/5570), a Windows CI flake.
- [#5638](https://github.com/modelcontextprotocol/servers/pull/5638) fixes the racy heartbeat-count assertion in the memory file-lock test. It closes [#5634](https://github.com/modelcontextprotocol/servers/issues/5634).
- [#5629](https://github.com/modelcontextprotocol/servers/pull/5629) adds release-time listing of the seven servers in the official MCP Registry. It closes #3047. It registers nothing until the next GitHub Release is published and approved.
- [#3175](https://github.com/modelcontextprotocol/servers/pull/3175) is the older registry-registration PR from January. It was closed, likely superseded by #5629.

Per-server v2.6.0 tracker issues were also closed: [#5603](https://github.com/modelcontextprotocol/servers/issues/5603) (filesystem), [#5604](https://github.com/modelcontextprotocol/servers/issues/5604) (git), [#5605](https://github.com/modelcontextprotocol/servers/issues/5605) (memory), [#5606](https://github.com/modelcontextprotocol/servers/issues/5606) (time), [#5607](https://github.com/modelcontextprotocol/servers/issues/5607) (everything) and [#5608](https://github.com/modelcontextprotocol/servers/issues/5608) (sequentialthinking).

## 4. Community Hot Topics
Engagement is low. The most commented items have only 2–4 comments:
- [#5609](https://github.com/modelcontextprotocol/servers/issues/5609) (4 comments): the memory README doesn't say that unreadable lines are skipped, kept on every write, and fixable only by hand. Users need documented recovery behavior for a corrupted memory file.
- [#5636](https://github.com/modelcontextprotocol/servers/issues/5636) (2 comments): `interface-diff` discards the git error when resolving its default base and reports the wrong cause. This is a tooling diagnosability issue.
- [#5611](https://github.com/modelcontextprotocol/servers/issues/5611) (2 comments): five Docker images ignore `docker stop` and are killed at the timeout (exit 137). The need is clean shutdown in containerized deployments. #5631 now adds CI coverage that checks for this.
- [#5176](https://github.com/modelcontextprotocol/servers/issues/5176) (2 comments): the string `"null"` arrives as `None` in git server parameters. It is blocked on python-sdk#3055.

## 5. Bugs & Stability
Ranked by severity:
1. **[#5624](https://github.com/modelcontextprotocol/servers/issues/5624)** (memory): two processes clearing a crash-left lock guard can remove a live guard. This could break cross-process mutual exclusion and risk data corruption. No fix PR yet.
2. **[#5641](https://github.com/modelcontextprotocol/servers/issues/5641)** (git, new): `git_branch` leaks the CLI `* ` prefix, which breaks downstream `git_checkout`, `git_diff`, `git_show` and `git_merge`. It is user-facing and affects a core workflow. It was reported against 2026.11.18 on PyPI. No fix PR yet.
3. **[#5611](https://github.com/modelcontextprotocol/servers/issues/5611)**: Docker images ignore stop signals, so shutdown is slow and ends in SIGKILL. A CI check was added, but the fix itself is not yet visible.
4. **[#5176](https://github.com/modelcontextprotocol/servers/issues/5176)**: `"null"` is coerced to `None`. It is blocked on an upstream SDK fix.
5. **[#5636](https://github.com/modelcontextprotocol/servers/issues/5636)**: a repo-script error-handling flaw with low user impact.

Resolved today: the flaky memory tests #5570 and #5634.

## 6. Feature Requests & Roadmap Signals
There are no explicit user feature requests today. Roadmap signals come from the v2.6.0 trackers:
- Filesystem: `move_file` error accuracy and `search_files` description tuning.
- Git: Windows junction refusal ([#5520](https://github.com/modelcontextprotocol/servers/issues/5520)) and the `"null"` fix.
- Everything: idle session eviction ([#5558](https://github.com/modelcontextprotocol/servers/issues/5558)).
- Time: not exposing host filesystem paths in errors ([#5559](https://github.com/modelcontextprotocol/servers/issues/5559)).
- MCP Registry listing is likely to start with the next release.

Likely v2.6.0 content is hardening, test coverage and registry publishing, rather than new features.

## 7. User Feedback Summary
- Users of the git server hit a correctness problem in a basic branch-listing workflow (#5641).
- Operators want predictable behavior in production: documented recovery for corrupted memory files (#5609) and graceful container shutdown (#5611).
- [#5639](https://github.com/modelcontextprotocol/servers/issues/5639) is a licensing and provenance review of the filesystem 2.1.0 npm tarball. It asks about the intended LICENSE text, a README conflict, and exact-release attribution. This suggests downstream consumers are doing compliance checks.
- [#5640](https://github.com/modelcontextprotocol/servers/issues/5640) says the `verify-skills` guard accepts a push-only workflow as PR validation, a CI-quality concern from a contributor.

## 8. Backlog Watch
- [#5176](https://github.com/modelcontextprotocol/servers/issues/5176) has been open since 2026-10-19. It is blocked on python-sdk#3055 and needs upstream follow-up before v2.6.0.
- [#5633](https://github.com/modelcontextprotocol/servers/pull/5633) (version packages) is awaiting a maintainer decision to cut the release.
- New external reports without any maintainer response: [#5641](https://github.com/modelcontextprotocol/servers/issues/5641), [#5640](https://github.com/modelcontextprotocol/servers/issues/5640) and [#5639](https://github.com/modelcontextprotocol/servers/issues/5639). #5639 is a licensing question that may need an authoritative answer.
- [#5624](https://github.com/modelcontextprotocol/servers/issues/5624) is a concurrency bug with no linked fix.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison — 2026-11-20

**Scope note:** The six projects are all MCP/agent-extension infrastructure or curation repos, not agent runtimes. Several digests have gaps. Awesome MCP Servers and Docker MCP Registry have undefined comment counts, and each digest covers only a sample of PRs. Health scores below are my own judgment from the digest data.

## 1. Ecosystem Overview
The ecosystem around MCP and agent extensions is moving from building servers to distributing and governing them. Reference implementations (MCP Servers) are shifting into release hardening. The official registry is tuning production performance. The catalogs and curated lists (Awesome MCP, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills) are absorbing heavy submission traffic. Review capacity is the common bottleneck: open queues are growing faster than they close. Trust and verification are emerging as the next problem, seen in Verified-org gating, closed-source hosted servers, and endpoint liveness.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my judgment) |
|---|---|---|---|---|
| MCP Servers | 17 (8 open / 9 closed) | 6 (1 open / 5 closed) | None; v2.6.0 pending in #5633 | 8/10: good throughput, with two open bugs (#5624, #5641) |
| MCP Registry | 2 | 4 (3 closed) | **v1.8.10** | 9/10: delivered and rolled out the same day |
| Awesome MCP Servers | 0 | 146 (129 open / 17 closed) | None | 6/10: very high intake, 88% still open |
| Docker MCP Registry | 0 | 50 (47 open / 3 closed) | None | 5.5/10: 94% open, no visible review |
| Claude Plugins (official) | Not stated; issues updated include #7024, #261 | 18 (11 open / 7 closed) | None | 6.5/10: bot-driven churn, and the policy dispute #7024 has 40 comments and no maintainer answer |
| Awesome Claude Code | 25 (23 open / 2 closed) | 0 | None | 6.5/10: validation is automated, but human curation is the bottleneck |
| Awesome Agent Skills | 0 | 5 (all open) | None | 6/10: low volume, no visible maintainer response |

## 3. MCP Servers's Position

**Advantages**
- It has the most balanced flow of closed work: 9 of 17 issues and 5 of 6 PRs closed. Peers mostly accumulate open items.
- It is a maintained reference implementation with visible release discipline. Per-server v2.6.0 trackers, a Changesets release PR, and CI hardening (`image-smoke`, flake fixes) are all in place.
- It is moving toward distribution through the MCP Registry: #5629 adds listing of seven servers at release time.

**Technical approach differences**
- It ships code (filesystem, git, memory, time, everything, sequentialthinking). The registry is a metadata service, and the other four are curation layers with no runtime.
- Its issues are about correctness and operations: `git_branch` output, memory lock races, container shutdown. Peer issues are about policy and queue management.

**Community size**
- On visible data it is mid-sized by volume but low in engagement. The top issue has 4 comments, and three outside reports had no maintainer response yet.
- Awesome MCP Servers (146 PRs) and Docker MCP Registry (50 PRs) have much larger inbound volume. Their comment data is missing, so engagement can't be compared. The Claude Plugins issue #7024 (40 comments) is the most discussed item in the whole set.

**Risks:** The concurrency bug #5624 and the `git_branch` bug #5641 are unfixed. #5639 raises licensing and provenance for the filesystem tarball and needs an authoritative answer before more downstream compliance reviews arrive.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Trust, verification and provenance | Claude Plugins, Docker MCP Registry, MCP Registry, MCP Servers | Verified-org gating (#7024). Closed-source hosted servers (#7443, #7436). Endpoint liveness: 4.9% of 21,180 remote endpoints failed handshakes (#1870). Tarball licensing (#5639). |
| Remote servers and OAuth | Docker MCP Registry, Awesome MCP Servers, MCP Registry | Remote/hosted submissions dominate Docker's intake. OAuth 2.0/2.1 with dynamic client registration (#7444, #7441). Stdio bridges for clients that can't send headers (#17946). |
| Review and curation scale | Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills | Label bots (`has-glama`, `validation-passed`), batch submissions, and no visible human review. |
| Multi-agent orchestration | Awesome Claude Code, Awesome MCP Servers | 10 of 25 submissions in Awesome Claude Code. Subagent tools such as codex-mcp. Cross-tool work (Claude Code, Codex, Antigravity). |
| Safe agent actions | Awesome MCP Servers, Claude Plugins, Awesome Agent Skills | Approval-gated payments (GuaraPay, x402). Preview-and-confirm writes. Hook feedback so the model sees block reasons (#4260). |
| Operational robustness | MCP Servers, MCP Registry, Claude Plugins | Graceful container shutdown (#5611). Safe index rollout (v1.8.10). Windows and pyenv hook failures (#7176). Per-session resource cost (#261, gopls at 500–800MB). |
| Discoverability | Awesome Agent Skills, Awesome Claude Code, MCP Registry | Skill-finding meta-skills (#1450). Directory suggestions (#3670). Publish visibility and pagination confusion (#1871). |

## 5. Differentiation Analysis

- **MCP Servers:** Target users are server authors and integrators. It is a code-first reference with Python and TypeScript servers, Docker images and npm/PyPI packages.
- **MCP Registry:** Target users are publishers and client developers. It is an API service with PostgreSQL, where the focus is query performance and publish semantics.
- **Docker MCP Registry:** Target users are vendors who want Docker catalog distribution. Each entry is a `server.yaml` plus `tools.json` metadata. It has a stronger open-source and container posture, and it is now being stretched by remote servers.
- **Awesome MCP Servers:** The audience is broad. A single README list is gated by labels and a Glama listing, and it has the highest intake of the set.
- **Claude Plugins (official):** Target users are Claude Code plugin authors and enterprises. It is a governed marketplace, with SHA-pinned bot updates and a Verified-org policy.
- **Awesome Claude Code:** Target users are Claude Code practitioners. It is issue-driven intake with PRs restricted to collaborators, and it skews to orchestration and workflow.
- **Awesome Agent Skills:** Target users are skill authors across agents, with PR-based submissions. Volume is the lowest of the six, and some entries are commercial.

## 6. Community Momentum & Maturity

- **Tier 1, high volume and fast moving:** Awesome MCP Servers (146 PRs), Docker MCP Registry (50 PRs) and Awesome Claude Code (25 issues). Growth here is submission-driven, and review is the limit.
- **Tier 2, rapidly iterating on engineering:** MCP Registry (release, capacity and rollout in one day) and MCP Servers (v2.6.0 prep). Both are pairing delivery with hardening.
- **Tier 3, governed but contended:** Claude Plugins. The bot automation is mature, but the policy debate (#7024) is unresolved.
- **Tier 4, low volume:** Awesome Agent Skills. Five open PRs, no maintainer response visible.
- **Stabilizing:** MCP Servers and MCP Registry, as shown by test-flake fixes, CI image builds and the production promotion.
- **Still forming:** Verification policy, remote-server standards and the curation process.

## 7. Trend Signals

1. **Distribution is the new battleground.** Registries, Docker's catalog, plugin directories and skill lists are all filling up. Agent developers should publish to the official registry first and treat lists as secondary.
2. **Remote and OAuth servers are replacing local-only servers.** Developers should plan for hosted endpoints, dynamic client registration and liveness checks, since #1870 shows about 5% handshake failure.
3. **Trust gating is arriving.** Verified-org rules, open-source requirements and provenance checks signal that unverified publishing will get harder. Prepare licensing and attribution early.
4. **Human-in-the-loop is a design default.** Preview-and-confirm writes, frozen-until-approved payments and the hook-reason gap (#4260) all suggest approval flows should be built in.
5. **Orchestration is the busiest agent category.** Multi-session coordination, persistent memory and cross-tool operation (Claude Code with Codex) are the common needs. The memory server's file-lock bug (#5624) shows the foundations are still maturing.
6. **Curation capacity is the scaling limit.** Expect more automation (label bots, validators) and stricter intake rules.

*Caveats: the Awesome MCP Servers and Docker digests had no comment data, and each digest sampled only part of its PRs. The Claude Plugins issue count was not given. Conclusions about review activity are therefore tentative.*

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest — 2026-11-20

## 1. Today's Overview
The project had moderate, maintainer-driven activity. Four PRs and two issues were updated, and v1.8.10 shipped. Three PRs were closed or merged, all by maintainer rdimitrov. They covered an incremental-listing query optimization, a database upgrade, and the production promotion. Community input was light, with one bug-style report, one measurement study, and one docs PR. Overall health looks good: the performance work was delivered and rolled out the same day.

## 2. Releases
**[v1.8.10](https://github.com/modelcontextprotocol/registry/releases)**
- It improves incremental server-listing query selection and planning, including sparse windows and deep pagination (#1865).
- **Migration note for database operators:** prebuild both replacement indexes concurrently and validate their definitions before deploying to a busy database. See `deploy/README.md`. The release notes are truncated in the source data, so check the full notes for the complete index-handling guidance.
- No breaking API changes were reported. The API's name/version ordering is preserved.

## 3. Project Progress
- [#1865](https://github.com/modelcontextprotocol/registry/pull/1865) (closed): adapts `updated_since` page selection to the size of the recent result set. It selects page keys before fetching payloads. This avoids scanning large name ranges for sparse results and avoids sorting too much recent history for early pages. API ordering is unchanged.
- [#1873](https://github.com/modelcontextprotocol/registry/pull/1873) (closed): grows the dedicated production database node from e2-standard-4 to e2-standard-8 and gives PostgreSQL six CPUs. This matches the configuration tested with #1865. App workers, HPA, pools, memory, and storage are unchanged.
- [#1874](https://github.com/modelcontextprotocol/registry/pull/1874) (closed): promotes production from 1.8.9 to 1.8.10, including #1865's query and covering-index changes. Replicas and pool settings are unchanged.

Together these form a coordinated sequence: the code change, then the capacity change, then the rollout.

## 4. Community Hot Topics
Comment counts are low (1 comment each), so there are no strong hot spots.
- [#1871](https://github.com/modelcontextprotocol/registry/issues/1871): a publisher reports that versions 0.60.0–0.80.0 show "✓ Successfully published" in CI, but the API only shows 0.59.4. The underlying need is clear publish-confirmation and visibility semantics.
- [#1870](https://github.com/modelcontextprotocol/registry/issues/1870): a measurement study of 21,180 company-hosted remote endpoints. 1,041 (4.9%) failed a standard handshake twice. The underlying need is registry-level quality signals and liveness checking.

## 5. Bugs & Stability
1. **[#1871](https://github.com/modelcontextprotocol/registry/issues/1871), possible publish/visibility discrepancy (open).** The issue is unconfirmed. PR [#1872](https://github.com/modelcontextprotocol/registry/pull/1872) says the cause was pagination: the default page size is 30 and `metadata.nextCursor` is returned, so the reporter saw only one page and all versions were present. This is likely a docs and UX problem, not a service fault. A maintainer should confirm and close the issue.
2. **[#1870](https://github.com/modelcontextprotocol/registry/issues/1870), ecosystem reliability data.** About 4.9% of the sampled endpoints failed handshakes. This is not a registry bug, but it shows data-quality risk.

No crashes or regressions were reported. The database-capacity and query changes show attention to production performance.

## 6. Feature Requests & Roadmap Signals
- No explicit feature requests were filed.
- Likely near-term items:
  - Documentation clarifying page size and how to verify a publish ([#1872](https://github.com/modelcontextprotocol/registry/pull/1872)). It is the most likely to merge soon.
  - Possible endpoint health or liveness validation, prompted by [#1870](https://github.com/modelcontextprotocol/registry/issues/1870). This is speculative.
  - Possibly a clearer publish-confirmation response or CLI output, given the #1871 confusion.

## 7. User Feedback Summary
- Publishers rely on CI success messages and can misread paginated API responses as lost data. This points to a discoverability gap in the docs.
- Consumers and ecosystem analysts want confidence that listed remote servers actually work.
- Operators need guidance on safe index rollout, which v1.8.10 provides in `deploy/README.md`.

## 8. Backlog Watch
- [#1872](https://github.com/modelcontextprotocol/registry/pull/1872) (open docs PR, no comments) needs maintainer review.
- [#1871](https://github.com/modelcontextprotocol/registry/issues/1871) should be triaged and closed or redirected to #1872 if the pagination explanation holds.
- [#1870](https://github.com/modelcontextprotocol/registry/issues/1870) needs a maintainer response on whether handshake health belongs in the registry's scope.
- The data shows no long-stale items. Everything is from the last 2 days.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-20

Source: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers). The data lists only 20 of the 146 PRs. Every PR shows `Comments: undefined`, so I couldn't rank PRs by discussion. The 20 shown are therefore a sample, not a verified top 20 by comments, and the closed/merged count is known only from the overview.

## 1. Today's Overview

The repo is a curated list, so its activity is PR volume rather than issues or releases. In the last 24h there were 146 PRs updated (129 open, 17 closed or merged), 0 issues, and 0 releases. Almost all traffic is new server submissions, and most of the sampled PRs were opened today (PR numbers around #20107–#20148). That points to a high submission rate and a queue that is growing faster than it drains, since about 88% of the updated PRs are still open. Several older PRs from September and October were also touched today, which suggests the merge conflicts or label bots are cycling through them.

## 2. Releases

None. This is a content list with no versioned releases.

## 3. Project Progress

The 17 closed or merged PRs can't be split into merged and rejected from this data. Only one is visible:

- [#20107](https://github.com/punkpeye/awesome-mcp-servers/pull/20107) (CLOSED), *Add slashman413/cowork to Coding Agents*: a multi-agent task orchestration server with an MCP interface. It carried the `missing-glama` label, which may have led to the closure, but the data doesn't give a reason or say whether it merged.

The reachable PRs are today's new submissions. The categories they target are:

| Category | PRs |
|---|---|
| Coding Agents | [#20148](https://github.com/punkpeye/awesome-mcp-servers/pull/20148) (codex-mcp) |
| Databases | [#20147](https://github.com/punkpeye/awesome-mcp-servers/pull/20147), [#20139](https://github.com/punkpeye/awesome-mcp-servers/pull/20139) |
| Search & Data Extraction | [#20146](https://github.com/punkpeye/awesome-mcp-servers/pull/20146), [#20136](https://github.com/punkpeye/awesome-mcp-servers/pull/20136), [#14484](https://github.com/punkpeye/awesome-mcp-servers/pull/14484) |
| Communication | [#20143](https://github.com/punkpeye/awesome-mcp-servers/pull/20143), [#20116](https://github.com/punkpeye/awesome-mcp-servers/pull/20116) |
| Finance & Fintech / crypto | [#20144](https://github.com/punkpeye/awesome-mcp-servers/pull/20144), [#20141](https://github.com/punkpeye/awesome-mcp-servers/pull/20141) |
| Security | [#20137](https://github.com/punkpeye/awesome-mcp-servers/pull/20137) |
| Browser Automation / Developer Tools | [#17392](https://github.com/punkpeye/awesome-mcp-servers/pull/17392), [#17588](https://github.com/punkpeye/awesome-mcp-servers/pull/17588), [#20142](https://github.com/punkpeye/awesome-mcp-servers/pull/20142) |
| Other | [#20138](https://github.com/punkpeye/awesome-mcp-servers/pull/20138) (veterinary/biology), [#20145](https://github.com/punkpeye/awesome-mcp-servers/pull/20145) (customer-service call analysis), [#17946](https://github.com/punkpeye/awesome-mcp-servers/pull/17946) (LinkedIn/social), [#20135](https://github.com/punkpeye/awesome-mcp-servers/pull/20135) (trending topics) |

## 4. Community Hot Topics

Comment and reaction counts are missing (`undefined`, 👍 0 everywhere), so I can't rank discussion. These are the themes in the sample:

- **Agent-to-agent and agent tooling.** [#20148 codex-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/20148) runs the Codex CLI as a persistent subagent with human approvals. [#17588 bugcap](https://github.com/punkpeye/awesome-mcp-servers/pull/17588) hands bug reports with screenshots to coding agents. The need is orchestration and a human in the loop.
- **Agent payments.** [#20144 GuaraPay](https://github.com/punkpeye/awesome-mcp-servers/pull/20144) offers virtual cards that stay frozen until a purchase is approved. [#20141 yg-base-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/20141) charges per call in USDC over x402. Agents need to pay for things safely.
- **Personal data access.** [#20143 WhatsKept](https://github.com/punkpeye/awesome-mcp-servers/pull/20143) is a self-hosted WhatsApp server, and [#20116 telegram-channels-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/20116) covers Telegram. Write tools use a preview-and-confirm step, which shows users want control over what agents can send.
- **Web search and browsing.** There are three search/extraction PRs and a browser-native one, [#17392 Meridian](https://github.com/punkpeye/awesome-mcp-servers/pull/17392). Browsing is still the busiest category.

## 5. Bugs & Stability

No issues were filed and no bugs, crashes, or regressions were reported. The only stability signals are in the PR metadata:

1. [#17588](https://github.com/punkpeye/awesome-mcp-servers/pull/17588) is flagged `merge-conflict`. It is a month old and needs a rebase from the author.
2. [#20136](https://github.com/punkpeye/awesome-mcp-servers/pull/20136) is flagged `duplicate`, so it likely duplicates an existing entry or PR.

## 6. Feature Requests & Roadmap Signals

With no issues there are no explicit requests. The signals are indirect:

- **Submission rules are being enforced through labels.** `has-glama`, `missing-glama`, `has-emoji` and `valid-name` look like automated checks. Six of the 20 sampled PRs lack a Glama listing, and they are the likeliest to stall, as [#20107](https://github.com/punkpeye/awesome-mcp-servers/pull/20107) did.
- **Likely category growth.** Agent payments, coding-agent subagents and personal messaging are all represented in today's PRs. A dedicated section for agent payments and commerce is plausible, but that is my inference, not something stated in the data.
- **A 🤖🤖🤖 suffix appears in several titles** ([#20138](https://github.com/punkpeye/awesome-mcp-servers/pull/20138), [#20143](https://github.com/punkpeye/awesome-mcp-servers/pull/20143), [#20145](https://github.com/punkpeye/awesome-mcp-servers/pull/20145), [#20144](https://github.com/punkpeye/awesome-mcp-servers/pull/20144) and others). It looks like a convention the repo uses for agent-assisted or fast-tracked submissions, though the data doesn't confirm that.

## 7. User Feedback Summary

There are no comments or reactions, so there is no direct feedback. What the PR descriptions show:

- **Privacy and safety.** Submitters stress local-first, self-hosted, read-only and approval-gated designs ([#20143](https://github.com/punkpeye/awesome-mcp-servers/pull/20143), [#17588](https://github.com/punkpeye/awesome-mcp-servers/pull/17588), [#20144](https://github.com/punkpeye/awesome-mcp-servers/pull/20144)).
- **Client breadth.** Servers target Cursor, Claude Desktop and other clients. Some ship a local stdio bridge for clients that can't attach headers ([#17946](https://github.com/punkpeye/awesome-mcp-servers/pull/17946)).
- **Niche verticals.** Veterinary medicine ([#20138](https://github.com/punkpeye/awesome-mcp-servers/pull/20138)), customer-service call analysis, and country-level trend data ([#20135](https://github.com/punkpeye/awesome-mcp-servers/pull/20135)) show MCP spreading into specialized domains.

## 8. Backlog Watch

PRs that have waited the longest and still got activity today:

- [#14484 SearchPipe](https://github.com/punkpeye/awesome-mcp-servers/pull/14484): opened 2026-09-16, about 65 days open. It has `has-glama` and passes the name and emoji checks, so it looks ready to merge.
- [#17392 Meridian](https://github.com/punkpeye/awesome-mcp-servers/pull/17392) (2026-10-23): all checks pass and it is still unmerged.
- [#17588 bugcap](https://github.com/punkpeye/awesome-mcp-servers/pull/17588) (2026-10-25): blocked by a merge conflict. The author needs to rebase, or maintainers should close it.
- [#17946 crispy-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/17946) (2026-10-29): all checks pass and it is still open.

With 129 open PRs and daily intake near the closure rate, maintainers could batch-merge the PRs that pass every check and close the `duplicate` and `missing-glama` ones with a clear note. That would keep the queue from outgrowing review capacity.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-20

## 1. Today's Overview
The registry saw a high-volume, submission-driven day. 50 PRs were updated (47 open, 3 merged/closed), with no issues and no releases. Nearly all activity is new-server intake: a large share of today's PRs were created today, and several are batch submissions. Remote (hosted) MCP servers dominate, which points to a shift away from containerized servers. No PR shows any comments, so review throughput is the main health concern.

## 2. Releases
None.

## 3. Project Progress
- Only three PRs were merged or closed in the window, and the provided data lists just one by name. Merged/closed PRs don't mean advanced features here, because the registry's "progress" is catalog additions.
- [#7280](https://github.com/docker/mcp-registry/pull/7280) (Kling AI Global/China Plugin) was **closed**. It was superseded by [#7439](https://github.com/docker/mcp-registry/pull/7439), which resubmits the entries as separate "Plugin" listings. The new PR keeps the `kling-ai-global-plugin` and `kling-ai-china-plugin` identifiers and corrects the China endpoint.
- Details of the other two closed/merged PRs are not in the supplied data (only the top 20 by comment count were shown).

## 4. Community Hot Topics
Comment counts are reported as "undefined" and all 👍 counts are 0, so there is no engagement signal to rank by. The notable PRs below are chosen by size and novelty instead.
- [#7417](https://github.com/docker/mcp-registry/pull/7417): Ockham Labs (CerebrixOS) submits five remote servers at once (Forward Deployed, HyperLake, PulseLake Experience Ops, Trazio, Watchtower). It is the largest single submission and uses `tools.json` set to `[]` with dynamic tools.
- [#7442](https://github.com/docker/mcp-registry/pull/7442): Reevol Source and Reevi, two hosted servers covering supplier search and buyer discovery.
- A batch from one author, mambabuilt (mambalabsdev): [#7445](https://github.com/docker/mcp-registry/pull/7445) (Google Hotels Prices), [#7446](https://github.com/docker/mcp-registry/pull/7446) (Google Sheets Import/Export), [#7447](https://github.com/docker/mcp-registry/pull/7447) (Houzz Professionals), [#7448](https://github.com/docker/mcp-registry/pull/7448) (Perplexity Answer Reader), [#7449](https://github.com/docker/mcp-registry/pull/7449) (Brazil CNPJ Company Data). That is five PRs from one author in one day.
- Underlying needs: vendors want distribution through Docker's catalog. Remote and OAuth-based servers, such as [#7444](https://github.com/docker/mcp-registry/pull/7444) (adflitz, OAuth 2.0 with dynamic client registration) and [#7441](https://github.com/docker/mcp-registry/pull/7441) (Kuickr, OAuth 2.1), are becoming the norm.

## 5. Bugs & Stability
No issues were filed and no bugs or regressions were reported. Two submission-quality points are worth maintainer attention:
- [#7443](https://github.com/docker/mcp-registry/pull/7443) (Firmary) and [#7436](https://github.com/docker/mcp-registry/pull/7436) (Foxli) are closed-source hosted services with no public repository. This may conflict with the registry's open-source requirement, which the PR template lists as a basic requirement.
- [#7432](https://github.com/docker/mcp-registry/pull/7432) (Prax Data Service) appears to have pasted the issue template front matter into the PR body. That is a minor hygiene problem.

## 6. Feature Requests & Roadmap Signals
- Remote server support: most of today's PRs use the "Adding a Remote MCP Server" path. Tooling and docs for remote servers are likely to matter more.
- Dynamic tool lists: [#7417](https://github.com/docker/mcp-registry/pull/7417) ships an empty `tools.json` because its tools are dynamic. Guidance or validation for that pattern would likely help.
- Auth: OAuth with dynamic client registration is common, so first-class support in the catalog is a likely area of growth.
- Policy for closed-source remote servers (#7443, #7436) probably needs a documented answer.
- Other submissions are in verticals such as compliance ([#7438](https://github.com/docker/mcp-registry/pull/7438), Presencis Regulatory, a stdio server under Apache-2.0), blockchain intelligence ([#6285](https://github.com/docker/mcp-registry/pull/6285)), marine data ([#7437](https://github.com/docker/mcp-registry/pull/7437), Peskio) and social media ([#7436](https://github.com/docker/mcp-registry/pull/7436)).

## 7. User Feedback Summary
There are no issues or comments, so there is no direct user feedback. The submissions suggest a few things:
- Submitters want a low-friction path to listing, and many use one PR per server or a batch.
- Some accept closed-source hosting and document it openly, which suggests the requirements are unclear for hosted services.
- Some submitters stress safety: read-only, zero-egress ([#7438](https://github.com/docker/mcp-registry/pull/7438)), or no auth and no stored data ([#7435](https://github.com/docker/mcp-registry/pull/7435), [#7440](https://github.com/docker/mcp-registry/pull/7440)).

## 8. Backlog Watch
- [#6285](https://github.com/docker/mcp-registry/pull/6285) (Arkham remote server) was opened on 2026-10-28 and is still open after about three weeks, with no comments. It is the oldest item in the shown set.
- [#7281](https://github.com/docker/mcp-registry/pull/7281) (Improvado remote MCP server) was opened on 2026-11-17 and is still unreviewed.
- With 47 open PRs and no visible reviewer comments, the queue is likely to grow. Maintainers may want to triage batch submissions, decide on the closed-source policy, and consider automated validation for the template and `server.yaml`.

*Caveat: the data shows only the top 20 of 50 PRs, and its comment counts are undefined. Conclusions about review activity are therefore tentative.*

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) Digest — 2026-11-20

## 1. Today's Overview
The repo is busy, though most of it is automation. Of 18 PRs updated in 24h, 11 are open and 7 are closed. At least 9 of the 18 are `github-actions[bot]` SHA bumps (the `bump(...)` PRs, plus a bump closed as superseded). Human activity centers on issue #7024, a Verified-organization policy dispute with 40 comments. There were no new releases and no issues closed. Overall health is steady, but the new Verified-org gating is creating friction for third-party publishers.

## 2. Releases
No new releases.

## 3. Project Progress
Seven PRs were closed or merged. Most are bot bumps that were superseded by newer ones:
- Superseded bumps: [#6822](https://github.com/anthropics/claude-plugins-official/pull/6822) (modern-web-guidance, replaced by open [#7186](https://github.com/anthropics/claude-plugins-official/pull/7186)), [#6868](https://github.com/anthropics/claude-plugins-official/pull/6868) (databricks, replaced by [#7179](https://github.com/anthropics/claude-plugins-official/pull/7179)), [#6498](https://github.com/anthropics/claude-plugins-official/pull/6498) (neon, replaced by [#7175](https://github.com/anthropics/claude-plugins-official/pull/7175)) and [#6981](https://github.com/anthropics/claude-plugins-official/pull/6981) (datadog).
- [#7018](https://github.com/anthropics/claude-plugins-official/pull/7018): the unity entry was advanced to v0.1.9-beta (33 skills, a README fix, tool names within Bedrock's 64-character limit). The data doesn't say whether it was merged or just closed.
- [#7170](https://github.com/anthropics/claude-plugins-official/pull/7170): `code-modernization` would look up whether target framework versions are supported. Before, it took them from model memory, and the output varied between runs, for example Angular 18 in one run and Spring Boot 3 / Java 21 in another. It is closed, and the data doesn't say whether it was merged.
- [#7152](https://github.com/anthropics/claude-plugins-official/pull/7152): `/custom-theme` and `/fireworks` descriptions in theme-examples were shortened to fit one line in the slash menu.

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** (40 comments, 15 👍): Since about 2026-11-05 the directory only accepts command hooks and local MCP servers from Verified organizations. Organizations ask how to get Verified, and the pre-submission docs apparently don't explain it. The underlying need is a clear, documented verification path and a transition plan for existing publishers.
- **[#261](https://github.com/anthropics/claude-plugins-official/issues/261)** (10 comments, 12 👍): gopls-lsp spawns one `gopls` per session, at about 500–800MB RAM each. Users running several sessions want a shared daemon mode. It has been open since January.
- **[#1872](https://github.com/anthropics/claude-plugins-official/issues/1872)** (6 comments): The Telegram plugin needs inline keyboard buttons and `callback_query` handling for interactive bot flows.

## 5. Bugs & Stability
Ranked by severity:
1. **[#4260](https://github.com/anthropics/claude-plugins-official/issues/4260)**: When hookify blocks a tool call, the `PreToolUse`/`PostToolUse` deny branch sets no `permissionDecisionReason`. The block reason therefore never reaches the model, only the user. This is a functional gap that can make the model retry blocked actions. No fix PR is listed.
2. **[#7176](https://github.com/anthropics/claude-plugins-official/pull/7176)** (open PR): On pyenv-win 3.1.1, security-guidance hooks leave an empty file named `(3` in the project, and the interpreter check rejects the pyenv-win Python. This PR fixes it by handling the `.bat` shim.
3. **[#7178](https://github.com/anthropics/claude-plugins-official/issues/7178)**: The pr-review-toolkit `silent-failure-hunter` prompt hardcodes another codebase's logging and error-ID conventions. It flags correct error handling as problems in other repos. It was opened yesterday and has no fix yet.
4. **[#7177](https://github.com/anthropics/claude-plugins-official/pull/7177)** (open PR, hardening): security-guidance will skip other repositories whose config changes what git runs.

## 6. Feature Requests & Roadmap Signals
- **Verified-organization pathway** ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)). It has the most engagement, so it is the most likely to get a maintainer response, such as docs or a process.
- **gopls daemon mode** ([#261](https://github.com/anthropics/claude-plugins-official/issues/261)). It has solid demand, but it has sat for 10 months. A near-term release looks unlikely.
- **Telegram inline keyboards** ([#1872](https://github.com/anthropics/claude-plugins-official/issues/1872)). Moderate demand, and no sign of work yet.
- Fix PRs [#7176](https://github.com/anthropics/claude-plugins-official/pull/7176) and [#7177](https://github.com/anthropics/claude-plugins-official/pull/7177), both by mhegazy, look closest to landing.

## 7. User Feedback Summary
- Publishers feel the Verified-org requirement was introduced abruptly and without enough documentation.
- Heavy users are hitting resource costs (RAM per `gopls`) when running multiple sessions.
- Plugin authors find the hook feedback loop incomplete, since the model can't see why a call was blocked.
- Reviewers want agent prompts to be project-agnostic.
- Windows and pyenv users are hitting environment-specific hook failures.

## 8. Backlog Watch
- [#261](https://github.com/anthropics/claude-plugins-official/issues/261): open since 2026-01-20, 12 👍, with no resolution.
- [#1872](https://github.com/anthropics/claude-plugins-official/issues/1872): open since 2026-05-15. It is also written in a form that suggests it may belong in a different repo, so it needs triage.
- [#4260](https://github.com/anthropics/claude-plugins-official/issues/4260): open since 2026-07-20 with a clear, small fix.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): needs an official maintainer answer on the Verified process. With 40 comments, it is the highest priority.
- About 11 open bot SHA-bump PRs need review, including the batch of four in the astronomer, data and Oracle plugins. Their bumps share one commit hash, so they could be reviewed together.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-11-20

## 1. Today's Overview
Awesome Claude Code saw a high-volume, submission-only day. There were 25 issues updated, 23 of them open, and no PRs or releases. Almost all activity is automated resource-submission intake. 21 of the 25 issues carry `validation-passed`, which shows the validation bot is working. Maintainer activity is not visible in the data. PRs are restricted to collaborators (see #3670), so the repo works as an issue-driven curation queue.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today. The two closed issues are:
- [#3273 dario](https://github.com/hesreallyhim/awesome-claude-code/issues/3273): Closed after being updated today. It was submitted on 2026-10-26, and the data doesn't say whether it was accepted. It is a local proxy that puts a Claude subscription and a ChatGPT plan behind one Anthropic-compatible endpoint (Providers, Runtime & Integration Infrastructure).
- [#3668 shipgate](https://github.com/hesreallyhim/awesome-claude-code/issues/3668): Auto-closed (labels `validation-pending`, `auto-closed`). The same author's later submission is the likely cause, but the data doesn't confirm that.

## 4. Community Hot Topics
No issue has more than 1 comment or any 👍 reactions, so there are no true hot topics. The submissions cluster by theme, which shows what the community is building.

**Agent Orchestration is the dominant category (10 of 25 submissions):**
- Multi-session coordination: [#3673 Nattermatic](https://github.com/hesreallyhim/awesome-claude-code/issues/3673) (signed peer-to-peer messaging across machines), [#3669 Kith](https://github.com/hesreallyhim/awesome-claude-code/issues/3669) (local coordination layer), [#3665 handoff](https://github.com/hesreallyhim/awesome-claude-code/issues/3665) (two agent sessions on one Mac across Claude Code, Codex and Antigravity).
- Scheduled and background work: [#3660 Druks](https://github.com/hesreallyhim/awesome-claude-code/issues/3660) (runs on schedule or alert), [#3655 Quarterdeck](https://github.com/hesreallyhim/awesome-claude-code/issues/3655) (standing goals in background subagents).
- SDLC discipline: [#3671 punchtape](https://github.com/hesreallyhim/awesome-claude-code/issues/3671), [#3661 Solid Vibes](https://github.com/hesreallyhim/awesome-claude-code/issues/3661) (interview, plan, independent review), [#3668 shipgate](https://github.com/hesreallyhim/awesome-claude-code/issues/3668) (manager session that writes no code).
- Other: [#3675 CLAW](https://github.com/hesreallyhim/awesome-claude-code/issues/3675) (cross-session consistency for long projects), [#3652 ForAgent](https://github.com/hesreallyhim/awesome-claude-code/issues/3652) (private phone numbers for agents).

**Underlying needs:** Users want multi-agent and multi-session coordination, persistent context on long-horizon projects, review gates, and Claude Code working alongside Codex.

**Other categories:**
- Skills: [#3664 eitri](https://github.com/hesreallyhim/awesome-claude-code/issues/3664), [#3667 Opportunity Validation PRO](https://github.com/hesreallyhim/awesome-claude-code/issues/3667).
- Creative Media: [#3674 premiere-rough-cut](https://github.com/hesreallyhim/awesome-claude-code/issues/3674).
- Research: [#3672 ResearchForge](https://github.com/hesreallyhim/awesome-claude-code/issues/3672).
- Remote control and notifications: [#3663 Farcall](https://github.com/hesreallyhim/awesome-claude-code/issues/3663).
- Alternative clients: [#3654 Trina AX](https://github.com/hesreallyhim/awesome-claude-code/issues/3654).
- Memory: [#3662 whylog](https://github.com/hesreallyhim/awesome-claude-code/issues/3662).
- Documentation: [#3659 Docusense](https://github.com/hesreallyhim/awesome-claude-code/issues/3659).
- Testing: [#3658 hadome](https://github.com/hesreallyhim/awesome-claude-code/issues/3658).
- Infrastructure and DevOps: [#3657 Etuki FinOps MCP](https://github.com/hesreallyhim/awesome-claude-code/issues/3657).
- Security: [#3656 claude-code-mistake-guards](https://github.com/hesreallyhim/awesome-claude-code/issues/3656).
- Configuration: [#3666 claude-code-codex-config](https://github.com/hesreallyhim/awesome-claude-code/issues/3666).
- Multi-purpose: [#3653 jobwatch](https://github.com/hesreallyhim/awesome-claude-code/issues/3653).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. Two process issues are worth noting:
- [#3657](https://github.com/hesreallyhim/awesome-claude-code/issues/3657) has the unedited template title `<name of your resource>`, although its display name is "Etuki FinOps MCP & Local Bill X-Ray". Validation passed anyway, so title handling may be too lenient.
- [#3668](https://github.com/hesreallyhim/awesome-claude-code/issues/3668) was auto-closed in `validation-pending` state, so the validation flow can close submissions before validation completes.

No fix PRs exist.

## 6. Feature Requests & Roadmap Signals
- [#3670](https://github.com/hesreallyhim/awesome-claude-code/issues/3670) suggests adding the Claude Skills Directory (a searchable index of 600+ skills). The author notes that PRs are restricted to collaborators. It is an off-template suggestion with 0 comments, and the maintainer would need to review it manually.
- The submissions suggest which categories may need more room. Agent Orchestration is crowded, and "Agent Orchestration > SDLC" is already a sub-category. A further split, such as multi-session coordination or scheduled agents, is plausible but unconfirmed.
- Cross-agent tooling (Codex, Antigravity) appears in #3665, #3666 and #3660. The list may need a policy on non-Claude-specific tools.

## 7. User Feedback Summary
The submission descriptions point to these pain points:
- Claude Code repeating the same mistakes ([#3656](https://github.com/hesreallyhim/awesome-claude-code/issues/3656)).
- Context loss between sessions ([#3675](https://github.com/hesreallyhim/awesome-claude-code/issues/3675), [#3662](https://github.com/hesreallyhim/awesome-claude-code/issues/3662)).
- Cost visibility ([#3657](https://github.com/hesreallyhim/awesome-claude-code/issues/3657)).
- Managing Claude Code and Codex in one repo ([#3666](https://github.com/hesreallyhim/awesome-claude-code/issues/3666)).
- Team sharing ([#3654](https://github.com/hesreallyhim/awesome-claude-code/issues/3654)).
- Remote and mobile access ([#3663](https://github.com/hesreallyhim/awesome-claude-code/issues/3663)).

The data has no direct user comments or reactions, so these are inferred from submission descriptions and not from reported sentiment.

## 8. Backlog Watch
- Three issues have no `validation-passed` label and 0 comments: [#3670](https://github.com/hesreallyhim/awesome-claude-code/issues/3670), [#3669 Kith](https://github.com/hesreallyhim/awesome-claude-code/issues/3669) and [#3667 Opportunity Validation PRO](https://github.com/hesreallyhim/awesome-claude-code/issues/3667). They may be waiting on the validator, and they need a check that it is running correctly.
- Today's 21 validated submissions need maintainer review and inclusion decisions. At this rate (about 20 per day, with issue numbers in the 3650s–3670s) the queue could grow quickly.
- The older data is limited to [#3273 dario](https://github.com/hesreallyhim/awesome-claude-code/issues/3273) (about 3.5 weeks old), which was closed today. Whether it was merged into the list is unclear. The data has no information on older backlog beyond that.

**Project health:** Submission volume is very high and validation is automated. The visible bottleneck is human curation, because no PRs were merged and there is no maintainer commentary in the data.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-20

## 1. Today's Overview
Activity on VoltAgent/awesome-agent-skills was low and entirely contribution-driven. There were no issues updated, no releases, and no merged or closed PRs in the last 24h. Five PRs were updated, and all five are open "Add skill" submissions. None has comments or reactions. Intake is steady, but review and merge throughput looks like the bottleneck. Two of the five submissions date from 2026-11-19, and one from 2026-11-16.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. The list has not grown from today's submissions yet. The five open PRs are in the Community Skills pipeline, and each is awaiting maintainer review.

## 4. Community Hot Topics
No item has comments or 👍 reactions, so there are no hot topics in the engagement sense. The submissions are grouped by category:

| PR | Category | Theme |
|---|---|---|
| [#1453](https://github.com/VoltAgent/awesome-agent-skills/pull/1453) yashh1323/atelier-ui | Development and Testing | UI design skill with a progressive `SKILL.md` router, an environment detection script, a one-turn brief, and scoped modules for brand sites, app UI and 3D visuals. MIT licensed. |
| [#1422](https://github.com/VoltAgent/awesome-agent-skills/pull/1422) rnthking/redya-xiaohongshu | Marketing | Xiaohongshu copy and multi-image posts, plus Live Photo conversion. The Live Photo feature needs a RedYA API key. Already listed on skills.sh. |
| [#1452](https://github.com/VoltAgent/awesome-agent-skills/pull/1452) seankwon816/foragent-call | Productivity and Collaboration | Listed in the official MCP Registry. Installs with `npx skills add`. |
| [#1451](https://github.com/VoltAgent/awesome-agent-skills/pull/1451) Dark Money | Specialized Domains | Cashback skill for agent and human pairs. The human completes checkout, which the author describes as a deliberate compliance choice. |
| [#1450](https://github.com/VoltAgent/awesome-agent-skills/pull/1450) tinh2/find-skills | Productivity and Collaboration | Lets an agent search the skills-hub.ai directory of 15,000+ skills. |

Underlying needs:
- Contributors want visibility in a curated list. Several already have external distribution through skills.sh, the MCP Registry or their own directories.
- Skill discovery is a theme. #1450 is a meta-skill for finding other skills.
- Commercial and affiliate-style entries (#1451, #1422's API key) are appearing. They may raise curation-policy questions.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no issues. This is a content-curation repository, so stability risk is low.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Indirect signals:
- Growth in the "Productivity and Collaboration" category (#1452, #1450), which has two of the five PRs.
- Interest in domain-specific and non-English-market skills, such as Xiaohongshu (#1422).
- Possible demand for clearer inclusion guidelines on commercial or API-key-gated skills. This is an inference, not something users requested.

Because the repository is a list, the next "version" is simply whichever PRs the maintainers merge. The most likely candidates are the entries with clear licensing and public installability, such as #1453 (MIT) and #1452 (MCP Registry).

## 7. User Feedback Summary
No direct user feedback was posted. The PR descriptions show contributors who:
- Emphasize an install path (`npx skills add`, skills.sh).
- Point out licensing (MIT) and compliance design (#1451).
- Place their entry in a specific category.

No dissatisfaction was expressed.

## 8. Backlog Watch
- [#1422](https://github.com/VoltAgent/awesome-agent-skills/pull/1422) was opened on 2026-11-16 and is the oldest of today's open PRs. It was updated today but has no recorded review.
- The PR numbers (#1450–#1453) suggest a large cumulative submission history. Today's data covers only 24h, so the full queue size is unknown. Maintainers should check for older unreviewed PRs.
- All five open PRs have 0 comments, so none has a recorded maintainer response.

**Project health:** Contributor interest is healthy, but maintainer response is not visible in today's data. A batch review would reduce the risk of the queue going stale.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
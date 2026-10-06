# MCP Ecosystem Digest 2026-10-06

> Issues: 1 | PRs: 1 | Projects covered: 7 | Generated: 2026-10-06 13:52 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-10-06

## 1. Today's Overview
Activity on modelcontextprotocol/servers was very low in the last 24 hours: one issue and one PR were updated, with no new releases. The one PR was closed, not merged, and the one issue is an open maintenance chore about release tooling. Nothing points to a regression or an urgent stability problem. This looks like a quiet period, with attention on release process hygiene (the v2 effort) more than on features.

## 2. Releases
No new releases. The latest release remains [2026.8.31](https://github.com/modelcontextprotocol/servers/releases/tag/2026.8.31), which the issue below describes as having minimal notes.

## 3. Project Progress
- **[PR #4849](https://github.com/modelcontextprotocol/servers/pull/4849)** — *fix(git): report no-op git_add calls and reject empty file lists* (Sumo-99), **closed** on 2026-10-05, created 2026-09-26.
  - It targeted [#4763](https://github.com/modelcontextprotocol/servers/issues/4763). `git_add` always returned "Files staged successfully", even when the index didn't change (e.g. `git_add(["."])` on a clean tree, or re-adding an already staged file). That left an LLM client unable to tell a real stage from a no-op, and it might go on to attempt an empty commit.
  - The data does not say whether it was merged or closed unmerged. Check the PR to confirm that the fix for #4763 landed. If it was closed without merging, #4763 may still be open.

## 4. Community Hot Topics
Engagement is minimal: no comments or reactions on either item.
- **[Issue #5056](https://github.com/modelcontextprotocol/servers/issues/5056)** — *[v2, chore] Script per-server release notes with PRs and a reporter "Thanks" section* (cliffhall, label `release:notes`).
  - The underlying need is better release communication. The latest release's notes only list the updated packages, such as `@modelcontextprotocol/server-filesystem@2026...`, with no changes or credits.
  - The proposal is to script per-server release notes that link PRs and thank issue reporters. That would help downstream users judge upgrade impact and would recognize contributors.

## 5. Bugs & Stability
- No new bugs, crashes or regressions were reported today.
- The only fix-related activity is PR #4849, which addresses misleading `git_add` output. This is a correctness and UX issue for LLM clients, not a crash. It is low to medium severity because agents could act on a false "success" signal. The PR is closed, so the fix status needs confirming (see above).

## 6. Feature Requests & Roadmap Signals
- **Release notes automation (#5056):** It is tagged `v2`, which suggests it is planned for the v2 cycle. The author appears to be a maintainer, so it is likely to be picked up. It is a tooling change and doesn't affect the server APIs.
- **Git server tool semantics:** The #4849 work shows interest in clearer, more informative tool responses, such as reporting no-ops and rejecting empty inputs. A similar change could reappear in a later PR.

## 7. User Feedback Summary
Today's data has little direct user feedback. Two signals stand out:
- Users and downstream consumers lack visibility into what changed in each release and who contributed.
- LLM clients need accurate tool responses. A uniform "success" message for `git_add` hides state they need for decisions.

## 8. Backlog Watch
- **[PR #4849](https://github.com/modelcontextprotocol/servers/pull/4849)** was open for about 9 days before it was closed. Confirm whether it was merged or closed unmerged, and whether [#4763](https://github.com/modelcontextprotocol/servers/issues/4763) should stay open.
- **[Issue #5056](https://github.com/modelcontextprotocol/servers/issues/5056)** is new, with no comments and no assignee shown. It needs a maintainer to decide on scope and an owner.
- The data covers only the last 24 hours, so it does not show older long-unanswered items. A wider look at the backlog is needed.

**Project health:** Stable but quiet. There is no sign of breakage, and the activity is process and quality hygiene.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison, 2026-10-06

## 1. Ecosystem Overview
The MCP ecosystem today is mostly a **distribution and curation layer** around a small reference core. Of the seven projects, five are catalogs, registries or marketplaces: Awesome MCP Servers, Docker MCP Registry, MCP Registry, Claude Plugins and Awesome Agent Skills. Only MCP Servers holds reference code, and it was nearly idle. Contribution volume is high at the edges and review throughput is the common bottleneck. Remote (Streamable HTTP) servers, agent skills and orchestration are the growth areas. No project shipped a release in the window.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my assessment) |
|---|---|---|---|---|
| MCP Servers | 1 (open) | 1 (closed) | None (latest 2026.8.31) | Stable but quiet, 6/10 |
| MCP Registry | 3 (all closed) | 8 (7 merged or closed, 1 open) | None | Healthy, responsive, 8/10 |
| Awesome MCP Servers | 0 | 133 (122 open, 11 merged or closed) | None | High intake, review lag, 6/10 |
| Docker MCP Registry | 0 | 50 (all open) | None | Strong intake, zero throughput, 5/10 |
| Claude Plugins (official) | 5 | 3 (2 closed, 1 open) | None | Active but manual, 6/10 |
| Awesome Claude Code | 19 (15 open, 4 closed) | 0 | None | Healthy intake, review bottleneck, 6/10 |
| Awesome Agent Skills | 0 | 6 (5 open, 1 closed) | None | Stable, growing queue, 6/10 |

*Health scores are my judgment from one day of data, not a measured metric.*

## 3. MCP Servers's Position
**Advantages**
- It is the reference implementation. The other six projects distribute, list or govern servers, and none of them hosts server code.
- Its issue is tagged `v2`, so the project has a defined roadmap. Most peers show no roadmap signals.

**Technical approach differences**
- It maintains server code and release tooling (per-server npm packages).
- Peers manage metadata: `server.json` in the Registry, pinned commits in Docker and Claude Plugins, and README entries in the awesome lists.

**Community size**
- Today it is the smallest by activity, with 2 items against 133 PRs for Awesome MCP Servers and 50 for Docker MCP Registry. This is a one-day sample and says little about its overall reach.
- Its downstream catalogs show demand for servers, while its own channel shows little engagement: no comments or reactions today.

**Gaps**
- Release notes list only package names, with no changes or credits (#5056).
- The `git_add` no-op fix (#4849) was closed with unclear status, so correctness for LLM clients may be unresolved.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| **Remote / Streamable HTTP servers** | MCP Registry, Docker MCP Registry, Awesome MCP Servers | Remote-only publishing docs (#1674, #1687). About 11 of the top 20 Docker PRs are remote. Awesome MCP Servers lists remote servers too. |
| **Ownership and integrity verification** | MCP Registry, Awesome Claude Code, Docker MCP Registry | The Registry verifies namespace but not the remote URL. mcp-pin checks server integrity (#3082). Stale Docker pins raise a freshness concern. |
| **Pin and version freshness** | Claude Plugins, Docker MCP Registry | The bump workflow was disabled on 9/17. Docker bot pin PRs have sat open for up to about 11 months. |
| **Submission validation and templates** | Awesome MCP Servers, Awesome Claude Code, Docker MCP Registry, Awesome Agent Skills | Glama and name labels, the validation bot, a container-centric template, and bulk-submission policy. |
| **Release and change communication** | MCP Servers, Claude Plugins | Minimal release notes (#5056). Opaque publishing status (#3679). |
| **Agent orchestration, memory and skills** | Awesome Claude Code, Awesome Agent Skills, Awesome MCP Servers | Five orchestration entries, memory and persistence tools, and 97 bulk skills. |
| **Security of bundled tooling** | Claude Plugins, MCP Servers | XSS in skill-creator (#6363), and LLM-facing tool semantics such as the false `git_add` success. |

## 5. Differentiation Analysis

| Project | Role | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference servers | Server authors and clients | Code, npm releases |
| MCP Registry | Official metadata registry | Publishers | `server.json`, namespace auth (GitHub, DNS, HTTP) |
| Awesome MCP Servers | Curated discovery list | Developers | README, PR-based, Glama-gated |
| Docker MCP Registry | Container catalog | Docker users | Pinned images, plus a growing remote type |
| Claude Plugins | Marketplace for one client | Claude Code users | Pinned SHAs, LSP, skills |
| Awesome Claude Code | Curated list for one client | Claude Code users | Issue-driven submissions, bot validation |
| Awesome Agent Skills | Skills list | Cross-agent developers | PR-driven README links |

The main split is **vendor-neutral** (Registry, Awesome MCP, Docker) against **client-specific** (Claude Plugins, Awesome Claude Code). A second split is **PR-driven** against **issue-driven** intake.

## 6. Community Momentum & Maturity
- **High-volume intake (review-limited):** Awesome MCP Servers (133 PRs) and Docker MCP Registry (50 PRs, zero merges). The open queues are growing.
- **Moderate and responsive:** MCP Registry, which cleared its issues and most PRs, including some from 2 to 3 weeks earlier.
- **Active, manually maintained:** Claude Plugins (automation off) and Awesome Claude Code (19 issues, none merged).
- **Low and stabilizing:** Awesome Agent Skills (6 PRs, with one bulk submission) and MCP Servers (2 items).
- **Rapidly iterating:** none by the evidence. The Registry is closest, but its changes are documentation fixes. Most of the ecosystem is in a stabilizing phase where the bottleneck is governance and not features.

## 7. Trend Signals
1. **Remote-first MCP is rising.** Hosted servers are replacing local stdio and containers, and tooling and templates are lagging. Developers should plan for Streamable HTTP and a documented auth model (none, key, OAuth).
2. **Trust and provenance are becoming differentiators.** Integrity pinning, URL ownership and bundled-plugin audits all appeared today. Expect verification requirements to tighten.
3. **Curation is hitting scale limits.** Manual review does not keep up with intake, so more automation (bots, auto-merged pins, validation labels) is likely. Don't depend on listing in a curated list for time-sensitive launches.
4. **Orchestration and memory dominate new agent tooling.** Fresh-context loops, DAG workflows and cross-tool coordination reflect pain with context rot and multi-agent coordination.
5. **LLM-facing correctness matters.** Tool responses need to be accurate for agents, as the `git_add` case shows.
6. **Bulk and vendor catalogs are replacing single submissions** (97 skills in one PR). Projects will need inclusion criteria.

*Caveat: each digest covers 24 hours, and several lack comment data. Treat the rankings as directional.*

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest: 2026-10-06

## 1. Today's Overview
The registry saw a docs-focused cleanup day. All 3 issues updated in the last 24h were closed, and 7 of 8 PRs were merged or closed. No releases shipped. Activity is moderate and mostly housekeeping: maintainers closed out documentation gaps around remote-only publishing and the quickstart, and fixed a web UI layout bug. The backlog is healthy, with 0 open issues in the window and 1 open PR.

## 2. Releases
No new releases.

## 3. Project Progress
Closed or merged PRs today:

- **Remote-only publishing docs**
  - [#1687](https://github.com/modelcontextprotocol/registry/pull/1687) (rdimitrov): adds an "Ownership Verification" section to `remote-servers.mdx`. It clarifies that the Registry verifies control of the namespace in `name`, but no auth method (GitHub, DNS, HTTP) verifies control of the remote URL. It suggests DNS/HTTP verification. This is a follow-up to #1674 and covers the remaining gaps from #1656.
  - [#1674](https://github.com/modelcontextprotocol/registry/pull/1674): documents the remote-only path in the quickstart. `packages` can be omitted when `remotes` is present, and it includes a minimal Streamable HTTP `server.json` example.
- **Quickstart copy-paste fixes**
  - [#1665](https://github.com/modelcontextprotocol/registry/pull/1665): clones `quickstart-resources` over HTTPS instead of SSH, drops a duplicate `cd`, and makes other small fixes. It fixes #1654.
- **Web UI**
  - [#1686](https://github.com/modelcontextprotocol/registry/pull/1686): moves search and filters above the "Recently Updated" section and adds a regression test. It fixes #1685.
- **Server listing**
  - [#1639](https://github.com/modelcontextprotocol/registry/pull/1639): a PR to add `io.github.CSOAI-ORG/gspc` was closed. The summary doesn't say whether it was merged. The registry is normally populated through publishing rather than PRs, so this was likely closed rather than merged.
- **Dependencies**
  - [#1667](https://github.com/modelcontextprotocol/registry/pull/1667): bumps `cloud.google.com/go/kms` from 1.33.0 to 1.34.0.
  - [#1680](https://github.com/modelcontextprotocol/registry/pull/1680): bumps the Pulumi Go dependencies in `/deploy`.
  - Both are Dependabot PRs and were closed. The data doesn't say whether they were merged.

## 4. Community Hot Topics
Comment counts are low across the board, so there are no strong hot spots.

- [#1656](https://github.com/modelcontextprotocol/registry/issues/1656) has the most discussion, with 2 comments. A user publishing a hosted remote-only server (Swarms) reported undocumented gaps: verification, optional packages, and the description length limit. The underlying need is a documented end-to-end path for remote-only servers. #1674 and #1687 now address this.
- [#1654](https://github.com/modelcontextprotocol/registry/issues/1654) shows first-time publishers hitting friction in the quickstart. Newcomer onboarding is a recurring theme.

## 5. Bugs & Stability
No crashes or regressions were reported.

1. **UI usability, low severity:** [#1685](https://github.com/modelcontextprotocol/registry/issues/1685). The search bar was pushed below the fold by the Recently Updated section. It was fixed by [#1686](https://github.com/modelcontextprotocol/registry/pull/1686) and the issue is closed.
2. **Docs bugs, low severity:** [#1654](https://github.com/modelcontextprotocol/registry/issues/1654) (broken copy-paste path) was fixed by #1665.

## 6. Feature Requests & Roadmap Signals
There are no new feature requests. The signals are about documentation and publisher experience:
- Stated field length limits (`description` and `title` 100 characters, `name` 200, versions 255) are proposed in the still-open [#1526](https://github.com/modelcontextprotocol/registry/pull/1526). This is a likely near-term merge, since the related docs PRs have already landed.
- Remote URL ownership verification is currently only documented as a recommendation in #1687. A real verification mechanism for remote URLs could become a future feature, but nothing is proposed yet.

## 7. User Feedback Summary
- **Pain points:** a first-time publisher following the quickstart hit an SSH clone failure, a duplicate `cd`, and a version mismatch. Remote-only publishers couldn't find documentation for their path. Users of the web UI found search hard to reach.
- **Use cases:** hosted remote MCP servers (Streamable HTTP) with no installable package.
- **Satisfaction:** the reporter of #1656 said "the docs are good", but gaps cost them time. Maintainers and contributors responded quickly, and issues from Sep 21 were closed on Oct 6.

## 8. Backlog Watch
- [#1526](https://github.com/modelcontextprotocol/registry/pull/1526) is the one open PR. It was opened on 2026-08-11, so it has waited almost two months. It documents schema field length limits, which is directly relevant to the #1656 feedback about the description limit. It needs a maintainer review.
- There are no stale open issues in this window. Several closed items took 2 to 3 weeks to resolve (#1654 and #1656, both opened Sep 21).

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-06

## 1. Today's Overview
The repo had high PR activity and no issue activity. 133 PRs were updated in 24 hours: 122 are open and 11 were merged or closed. There were no issues and no releases. As a curated list, the repo works as a submission queue, so the data shows steady inbound volume. Reviewers appear to be keeping up with the intake only partly. Many PRs sit open, and several have merge conflicts. The data lists comment counts as "undefined", so activity is judged from update timestamps, labels and PR content.

## 2. Releases
No new releases.

## 3. Project Progress
Of the 11 merged or closed PRs, the four visible in the top 20 were all **closed**, not merged. All four are from author Icaro0310 or from a duplicate submission:
- [#15779](https://github.com/punkpeye/awesome-mcp-servers/pull/15779) poordjaevin (Developer Tools), closed. It carries the `missing-glama` label.
- [#15601](https://github.com/punkpeye/awesome-mcp-servers/pull/15601) poordjaevin (Coding Agents), closed. This is the same project as #15779, submitted again under a different category.
- [#15723](https://github.com/punkpeye/awesome-mcp-servers/pull/15723) devin-memory (Knowledge & Memory), closed even though it has the `has-glama` label.
- [#15833](https://github.com/punkpeye/awesome-mcp-servers/pull/15833) Remote Jobs API, closed. It has `invalid-name` and `missing-glama`, and its resubmission [#15752](https://github.com/punkpeye/awesome-mcp-servers/pull/15752) is still open.

The data doesn't say why each was closed. The labels point to automated or maintainer checks on the name format, the emoji and the Glama listing. The other 7 closed or merged PRs are not shown, so I can't say how many were merged.

## 4. Community Hot Topics
Comment and reaction data is unavailable. Every PR shows 0 👍, and comments read "undefined". The items below are grouped by activity pattern instead.
- **Browser and web agents:** [#15837](https://github.com/punkpeye/awesome-mcp-servers/pull/15837) Zamery Browser, which reuses a logged-in Firefox session with user-chosen tabs, and [#15838](https://github.com/punkpeye/awesome-mcp-servers/pull/15838) noetive/riffle. Both are in Browser Automation.
- **OS and computer use:** [#15842](https://github.com/punkpeye/awesome-mcp-servers/pull/15842) Auten, a cross-platform computer-use server.
- **Aggregators and discovery:** [#15836](https://github.com/punkpeye/awesome-mcp-servers/pull/15836) noetive-mcp and [#14571](https://github.com/punkpeye/awesome-mcp-servers/pull/14571) brick.blue, an index of about 47k tools.
- **Jobs and productivity:** [#15835](https://github.com/punkpeye/awesome-mcp-servers/pull/15835) jobwatch and [#15752](https://github.com/punkpeye/awesome-mcp-servers/pull/15752) Remote Jobs API.
- **Vertical and niche servers:** [#15841](https://github.com/punkpeye/awesome-mcp-servers/pull/15841) Cooklang recipes, [#15840](https://github.com/punkpeye/awesome-mcp-servers/pull/15840) Framegrove, [#15834](https://github.com/punkpeye/awesome-mcp-servers/pull/15834) Keenetic routers, and [#15839](https://github.com/punkpeye/awesome-mcp-servers/pull/15839) SkillGild.

Contributors want listings that give agents access to authenticated sessions, local machines and live data. Several submitters also target multi-client compatibility (Claude Code, Cursor, Codex and others).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there are no issues. Process problems are visible in the PR queue, in rough order of severity:
1. **Merge conflicts** on the HasData series: [#12838](https://github.com/punkpeye/awesome-mcp-servers/pull/12838) (Flights, open since 2026-08-25), [#14567](https://github.com/punkpeye/awesome-mcp-servers/pull/14567) (Hotels), [#14360](https://github.com/punkpeye/awesome-mcp-servers/pull/14360) (DuckDuckGo) and [#14362](https://github.com/punkpeye/awesome-mcp-servers/pull/14362) (Glassdoor). They conflict because the shared README changes constantly. The author needs to rebase them.
2. **Duplicate submissions** of the same server across categories ([#15601](https://github.com/punkpeye/awesome-mcp-servers/pull/15601) and [#15779](https://github.com/punkpeye/awesome-mcp-servers/pull/15779); [#15752](https://github.com/punkpeye/awesome-mcp-servers/pull/15752) and [#15833](https://github.com/punkpeye/awesome-mcp-servers/pull/15833)).
3. **Validation label failures:** `missing-glama` on [#15840](https://github.com/punkpeye/awesome-mcp-servers/pull/15840), [#15838](https://github.com/punkpeye/awesome-mcp-servers/pull/15838) and [#15752](https://github.com/punkpeye/awesome-mcp-servers/pull/15752). `invalid-name` appeared on #15833.

## 6. Feature Requests & Roadmap Signals
There are no issues, so there are no explicit requests. The PR stream suggests these directions:
- Growth in the **Browser Automation, OS Automation and Aggregators** categories.
- Servers that treat **safety and memory** as first-class features: provenance and quarantine in devin-memory, user-controlled tab sharing in Zamery.
- **Remote, streamable-HTTP servers** (brick.blue, HasData) alongside local stdio servers.
- Registry integration: several PRs cite the official MCP Registry and Glama.

The repo itself is unlikely to change structurally. Any near-term change would more likely be tighter contribution automation or new categories for the busiest areas.

## 7. User Feedback Summary
There's no direct user feedback in the data. Submitter descriptions show these priorities:
- Local-first and privacy-preserving operation.
- Easy installation through `npx`, `uvx` or PyPI.
- Cross-client compatibility.
- Keyless, no-account access, as the Remote Jobs API pitches.

Friction comes from the contribution rules: the Glama listing requirement, name formatting and alphabetical placement. Authors whose PRs were closed or labelled have to fix and resubmit.

## 8. Backlog Watch
Maintainers should look at these older PRs:
- [#12838](https://github.com/punkpeye/awesome-mcp-servers/pull/12838) HasData Google Flights, open about six weeks, with a merge conflict.
- [#14360](https://github.com/punkpeye/awesome-mcp-servers/pull/14360) and [#14362](https://github.com/punkpeye/awesome-mcp-servers/pull/14362), open since 2026-09-14, with merge conflicts.
- [#14567](https://github.com/punkpeye/awesome-mcp-servers/pull/14567), open since 2026-09-17, with a merge conflict.
- [#14571](https://github.com/punkpeye/awesome-mcp-servers/pull/14571) brick.blue, open since 2026-09-17, with all validation labels passing.
- [#15323](https://github.com/punkpeye/awesome-mcp-servers/pull/15323) proxy-scraper, open since 2026-09-29, with all validation labels passing.

The 122 open PRs make this a significant backlog. Clean PRs, such as #14571 and #15323, could be merged first. The conflicted HasData PRs would likely need a single batch rebase, or to be closed if the author doesn't respond.

**Project health:** Contribution interest is high and there's no issue-tracker noise. Review throughput lags intake, and the open queue is growing.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-06

## 1. Today's Overview
Repository activity today is entirely PR-driven. Issues, releases and merges or closures were all zero. 50 PRs were updated in the last 24h, all of them still open. The visible sample shows two streams: new third-party submissions of remote MCP servers (about 11 in the top 20), and automated pin-update PRs from `mcp-registry-bot[bot]`. Intake is healthy, but nothing was merged or closed today, so the review queue is growing. Comment counts were reported as `undefined`, so discussion levels can't be measured.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. The data shows no maintainer-side outcomes. The 50 updated PRs are all open.

## 4. Community Hot Topics
Comment and reaction data is missing (`Comments: undefined`, 👍 0 everywhere), so "hot" can't be ranked by engagement. The clearest signal is the submission theme. Almost all new PRs are **remote** (hosted, Streamable HTTP) MCP servers, which need no container image:

- [#5482 Distilla](https://github.com/docker/mcp-registry/pull/5482): the template had to be adapted because several checklist items are container-specific.
- [#5481 Zornade](https://github.com/docker/mcp-registry/pull/5481): Italian cadastral, geospatial and real-estate data.
- [#4435 CatchAll (NewsCatcher)](https://github.com/docker/mcp-registry/pull/4435): API-key auth via header. Open since 2026-07-14 and updated today.
- [#5480 TrackForge](https://github.com/docker/mcp-registry/pull/5480): music registration data.
- [#5468 AskOne](https://github.com/docker/mcp-registry/pull/5468), [#5453 Silicon Floor](https://github.com/docker/mcp-registry/pull/5453), [#5479 Orbit](https://github.com/docker/mcp-registry/pull/5479), [#5478 Faceabot](https://github.com/docker/mcp-registry/pull/5478), [#5476 Lenz Fact-Check](https://github.com/docker/mcp-registry/pull/5476) (OAuth), [#5477 AgentStack](https://github.com/docker/mcp-registry/pull/5477), [#5475 NoMac](https://github.com/docker/mcp-registry/pull/5475) and [#5474 Subtraq](https://github.com/docker/mcp-registry/pull/5474).

**Underlying needs:**
- Vendors of hosted SaaS and API products want catalog distribution without shipping container images.
- The PR template is container-centric, and remote submitters are working around it (#5482 marks items N/A).
- Auth variety is growing (no-auth, API key, OAuth).
- Some servers are closed-source (#5475 lists no open-source repo).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, since there are zero issues. No fix PRs appear in the data. The pin-update PRs are routine maintenance, not bug reports.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The implicit signals are:
- **Better remote-server support:** a dedicated submission template and checklist for `type: remote` entries is likely worthwhile, given the volume.
- **Policy for closed-source or authless remote servers**, as in #5475 and #5479 and #5478.
- **Agent-discovery tools** such as Faceabot ([#5478](https://github.com/docker/mcp-registry/pull/5478)), which indexes 38,000+ servers, point to demand for registry search and recommendation.

These are inferences from submission patterns, not stated roadmap items.

## 7. User Feedback Summary
There is no direct user feedback, because no issues or comments were reported. Indirect evidence:
- Submitters use remote servers for domain data (real estate, finance, news, music, fact-checking), so use cases are broadening past developer tooling.
- Friction with the container-oriented template is visible in the explanatory notes on #5482 and #5475.
- Satisfaction can't be assessed.

## 8. Backlog Watch
Bot pin-update PRs are the oldest items and need maintainer attention. They have sat open for months despite being automated:
- [#621 awslabs-nova-canvas](https://github.com/docker/mcp-registry/pull/621) (2025-11-07, about 11 months)
- [#788 omi](https://github.com/docker/mcp-registry/pull/788) (2025-11-26)
- [#1051 opik](https://github.com/docker/mcp-registry/pull/1051) (2026-02-04)
- [#1083 stripe](https://github.com/docker/mcp-registry/pull/1083) (2026-02-07)
- [#2749 aws-msk](https://github.com/docker/mcp-registry/pull/2749) (2026-04-18)
- [#4368 sonarqube](https://github.com/docker/mcp-registry/pull/4368), [#4369 testkube](https://github.com/docker/mcp-registry/pull/4369) (2026-07-09)
- [#4381 mongodb](https://github.com/docker/mcp-registry/pull/4381) (2026-07-10)

Also, [#4435 CatchAll](https://github.com/docker/mcp-registry/pull/4435) has been waiting about 12 weeks for a decision. Stale pins may mean catalog entries reference outdated server commits, which is a potential security and freshness concern. Consider auto-merging bot pin PRs or batching them.

**Project health:** inflow is strong, but throughput today was zero. Review capacity is the bottleneck.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-10-06

## 1. Today's Overview
Activity was low-to-moderate. 5 issues and 3 PRs were updated in the last 24h, with no new releases. Most traffic is maintenance of the marketplace: SHA pin bumps for third-party plugins, which are now done manually, because the automated `Bump Plugin SHAs` workflow was reported as `disabled_manually` on 2026-09-17. There is also one new security report against the bundled skill-creator plugin. One long-running LSP bug is still open and has the most community engagement.

## 2. Releases
No new releases.

## 3. Project Progress
Both closed PRs were closed rather than reported as merged.

- [PR #6361](https://github.com/anthropics/claude-plugins-official/pull/6361) (CLOSED): `security-guidance` change to leave no index copies or lock files behind when git is killed. On repositories with very large git indexes (hundreds of MB), its git calls hit their time limits. The leftovers filled disks and blocked users' own git commands. The data doesn't say whether the fix landed another way.
- [PR #6335](https://github.com/anthropics/claude-plugins-official/pull/6335) (CLOSED): `claude[bot]` bump of the Carta plugins to `451fb34b` (carta-investors v6.56.1). Users were on v6.38.0 from the 9/23 hotfix commit. The data doesn't say whether it merged.

Open: [PR #6362](https://github.com/anthropics/claude-plugins-official/pull/6362) bumps `aws-startup-advisor` from `613dc216` to `45aeba4e`. It adds usage telemetry and skill updates, and `claude plugin validate` passes.

## 4. Community Hot Topics
- [Issue #379](https://github.com/anthropics/claude-plugins-official/issues/379) — **All LSP plugins missing `.lsp.json`** (12 comments, 👍 21). This is the most engaged item. All 11 LSP plugins (typescript, pyright, gopls, rust-analyzer, clangd, and others) ship only a `README.md`, so installed plugins have no LSP configuration. It was opened in February and is still active, which signals strong demand for working language-server integration.
- [Issue #6360](https://github.com/anthropics/claude-plugins-official/issues/6360) — **`mattpocock-skills` bump from 1.2.3 to v1.3.1** (👍 7, 2 comments). Users want popular skill plugins kept current.
- The two SHA-bump issues (#6360, #6331) show that stale pins are a visible pain point now that automation is off.

## 5. Bugs & Stability
Ranked by severity:
1. [Issue #6363](https://github.com/anthropics/claude-plugins-official/issues/6363) — **Security.** The skill-creator eval viewer has attribute-breakout XSS and cross-site writes to the feedback server, both rated medium severity. The same code exists in `anthropics/skills`, where a related issue (#1961) was filed. No fix PR yet.
2. [Issue #379](https://github.com/anthropics/claude-plugins-official/issues/379) — **Functional.** The LSP plugins are effectively non-functional because `.lsp.json` is missing. No fix PR is visible.
3. [PR #6361](https://github.com/anthropics/claude-plugins-official/pull/6361) — **Stability.** The `security-guidance` git cleanup problem (disk fill, lock files blocking git) was addressed in a PR that is now closed. Whether the fix shipped isn't clear.

## 6. Feature Requests & Roadmap Signals
- Restoring the automated bump workflow, or a faster manual cadence, is implied by [#6331](https://github.com/anthropics/claude-plugins-official/issues/6331) and [#6360](https://github.com/anthropics/claude-plugins-official/issues/6360). Pins are being advanced in manual batches, such as the one in #6283.
- Shipping real `.lsp.json` configs ([#379](https://github.com/anthropics/claude-plugins-official/issues/379)) is the likeliest substantive feature, given its 21 reactions.
- Near-term pin updates are likely for `mattpocock-skills` (to v1.3.1), `remember` (to v0.36.0), and `aws-startup-advisor`.

## 7. User Feedback Summary
- Plugin authors and users are frustrated by stale pins. `remember` is stuck at v0.33.0 while v0.36.0 exists, and `mattpocock-skills` is behind by a minor version.
- Publishing is opaque. In [#3679](https://github.com/anthropics/claude-plugins-official/issues/3679), a plugin has shown "Published" in the submission portal since May 11, 2026 but never appeared in the marketplace, and the author received no confirmation email.
- LSP users expected working language support out of the box and got only READMEs.
- Security-conscious contributors are auditing bundled plugins, as in #6363.

## 8. Backlog Watch
- [#379](https://github.com/anthropics/claude-plugins-official/issues/379): open since 2026-02-11, 21 👍, and still unresolved after roughly 8 months. It needs maintainer attention.
- [#3679](https://github.com/anthropics/claude-plugins-official/issues/3679): open since 2026-07-03, with a single comment. It points to a possible portal-to-marketplace publishing gap.
- [#6331](https://github.com/anthropics/claude-plugins-official/issues/6331): the pin has been stale since the workflow was disabled on 9/17, and a decision on the bump workflow's status is needed.
- [#6363](https://github.com/anthropics/claude-plugins-official/issues/6363): a new security report that should be triaged promptly, ideally together with the `anthropics/skills` fix.

**Project health:** Maintenance is active but manual, and the bump automation gap and LSP packaging problem are the main concerns.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-10-06

## 1. Today's Overview
Awesome Claude Code is a curated list, so activity here means resource submissions, not code changes. In the last 24 hours, 19 issues were updated (15 open, 4 closed). There were no PRs and no releases. Almost all of the traffic was new resource submissions: 17 of the 19 issues carry the `resource-submission` label. 12 of the 15 open issues already show `validation-passed`. Intake looks healthy. The bottleneck is maintainer review and merge, and nothing was merged today.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were updated, so nothing was merged or closed through PRs.
- Four issues were auto-closed by the validation bot (label `auto-closed`, `validation-pending`): [#3089](https://github.com/hesreallyhim/awesome-claude-code/issues/3089) (Aevral), [#3087](https://github.com/hesreallyhim/awesome-claude-code/issues/3087) (local-llm-worker), [#3078](https://github.com/hesreallyhim/awesome-claude-code/issues/3078) (cap-evolve) and [#3077](https://github.com/hesreallyhim/awesome-claude-code/issues/3077) (Cap Evolve). These are rejections or failed validations, not accepted additions.
- Validation-passed submissions, ready for maintainer action:
  - Agent Orchestration: [#3012 kumi](https://github.com/hesreallyhim/awesome-claude-code/issues/3012), [#3091 ralph-harness](https://github.com/hesreallyhim/awesome-claude-code/issues/3091), [#3083 AgentHub](https://github.com/hesreallyhim/awesome-claude-code/issues/3083), [#3079 oh-my-graph](https://github.com/hesreallyhim/awesome-claude-code/issues/3079), [#3076 Executor](https://github.com/hesreallyhim/awesome-claude-code/issues/3076)
  - Status Lines: [#3090 pace-statusline](https://github.com/hesreallyhim/awesome-claude-code/issues/3090)
  - Open Source Software: [#3088 Janus](https://github.com/hesreallyhim/awesome-claude-code/issues/3088)
  - Memory & Context Persistence: [#3085 OpenViking memory plugin](https://github.com/hesreallyhim/awesome-claude-code/issues/3085)
  - Design & UI/UX: [#3084 bdg](https://github.com/hesreallyhim/awesome-claude-code/issues/3084)
  - Security: [#3082 mcp-pin](https://github.com/hesreallyhim/awesome-claude-code/issues/3082)
  - Linting: [#3081 archprint](https://github.com/hesreallyhim/awesome-claude-code/issues/3081)
  - Observability & Monitoring > Session Monitors: [#3075 Session Tracker](https://github.com/hesreallyhim/awesome-claude-code/issues/3075)
  - Alternative Clients: [#3074 Agent Workbench](https://github.com/hesreallyhim/awesome-claude-code/issues/3074)

## 4. Community Hot Topics
Engagement is low. No issue has any 👍, and comment counts top out at 3.

- [#3012 kumi](https://github.com/hesreallyhim/awesome-claude-code/issues/3012) has the most comments (3). It is a plugin with a coordinator and named specialists for Go and other languages. It was created on 2026-09-30, so it is the oldest item in the window and has probably been through discussion or revision.
- **Agent Orchestration is the dominant theme.** It accounts for 5 passed submissions, plus the 2 cap-evolve duplicates that were closed. Other entries are variations on this theme:
  - [#3091 ralph-harness](https://github.com/hesreallyhim/awesome-claude-code/issues/3091): a fresh `claude -p` process per loop iteration, filed under the Ralph Wiggum subcategory.
  - [#3083 AgentHub](https://github.com/hesreallyhim/awesome-claude-code/issues/3083): pairs Claude Code and Codex sessions across a local network.
  - [#3079 oh-my-graph](https://github.com/hesreallyhim/awesome-claude-code/issues/3079): a YAML DAG of agent work.
  - [#3076 Executor](https://github.com/hesreallyhim/awesome-claude-code/issues/3076): an initiative-scoped workflow from intake through spec and planning.
- **Underlying needs:** structured multi-step agent workflows, cross-machine and cross-tool coordination, fresh-context loops to avoid context rot, and operational tooling such as multi-account switching ([#3088](https://github.com/hesreallyhim/awesome-claude-code/issues/3088)), session tracking ([#3075](https://github.com/hesreallyhim/awesome-claude-code/issues/3075)) and status lines ([#3090](https://github.com/hesreallyhim/awesome-claude-code/issues/3090)).
- **Security is a secondary theme:** [#3082 mcp-pin](https://github.com/hesreallyhim/awesome-claude-code/issues/3082) verifies that approved MCP servers stay unchanged. [#3089 Aevral](https://github.com/hesreallyhim/awesome-claude-code/issues/3089) was auto-closed.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only stability signal is process-related: the validation bot auto-closed 4 submissions, and two of them are duplicate filings of the same repo (cap-evolve, #3077 and #3078, in different categories). Contributors may be confused about category choice or the submission template.

## 6. Feature Requests & Roadmap Signals
There are no feature requests for the list itself. Category demand signals from submissions:
- Agent Orchestration and Memory & Context Persistence keep receiving entries ([#3085](https://github.com/hesreallyhim/awesome-claude-code/issues/3085)).
- Niche categories are getting entries: Linting ([#3081](https://github.com/hesreallyhim/awesome-claude-code/issues/3081)), Design & UI/UX ([#3084](https://github.com/hesreallyhim/awesome-claude-code/issues/3084)), Alternative Clients ([#3074](https://github.com/hesreallyhim/awesome-claude-code/issues/3074)) and Usage & Cost ([#3080](https://github.com/hesreallyhim/awesome-claude-code/issues/3080)).
- Likely next additions are the validation-passed submissions above, which are the ones most likely to be merged in the next batch.

## 7. User Feedback Summary
- Contributors are mostly individual developers publishing small CLIs, plugins and menu-bar utilities.
- Pain points that tools target:
  - token cost and context limits (the closed [#3087](https://github.com/hesreallyhim/awesome-claude-code/issues/3087) offloads bulk work to a local LLM)
  - juggling several accounts
  - verifying MCP server integrity
  - visibility into sessions and costs
- Some contributors are not following the template. [#3086 Kodelyth ECC](https://github.com/hesreallyhim/awesome-claude-code/issues/3086) has a free-form body and no resource labels. [#3080 AgentMeasure](https://github.com/hesreallyhim/awesome-claude-code/issues/3080) has a non-standard title ("Recommend a resource…") and no labels. Neither has any comments.
- [#3080](https://github.com/hesreallyhim/awesome-claude-code/issues/3080) is also questionable on fit: it is about AI support billing verification, not Claude Code.

## 8. Backlog Watch
- [#3012 kumi](https://github.com/hesreallyhim/awesome-claude-code/issues/3012) has been open since 2026-09-30 and has passed validation. It is the oldest item in this window.
- [#3086](https://github.com/hesreallyhim/awesome-claude-code/issues/3086) and [#3080](https://github.com/hesreallyhim/awesome-claude-code/issues/3080) have no labels and no validation status. They need triage: either a template fix or closure.
- The 12 validation-passed submissions have no visible maintainer action. A batch review would clear the queue before it grows.
- Zero PR activity today means no list updates are being merged. Maintainer bandwidth is the main project-health risk, not community interest.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Project Digest — 2026-10-06

## 1. Today's Overview
The project saw modest, contribution-only activity in the last 24h: 6 PRs updated (5 open, 1 closed) and no issues or releases. All activity is community submissions to the curated skills list, which is typical for an "awesome list" repository. Nothing was merged today, so the review queue is growing. One notable item is a bulk submission of 97 skills (#1162). Overall health looks stable, but maintainer throughput is the limiting factor.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One PR was closed without a visible merge:
- [#479](https://github.com/VoltAgent/awesome-agent-skills/pull/479) — *Add skill: insumer/insumer-agent-skills* (closed 2026-10-05). The PR proposed a "Skills by InsumerAPI" Web3 subsection with five wallet-auth skills across 33 chains. It was opened 2026-04-22, so it sat roughly 5.5 months before closing. The data doesn't say whether it was rejected or superseded.

## 4. Community Hot Topics
No PR has recorded comments or 👍 reactions (comment counts are missing from the data, and reactions are 0). The most notable items by scope are:
- [#1162](https://github.com/VoltAgent/awesome-agent-skills/pull/1162) — AceDataCloud/Skills: adds 97 direct skill links, each with a ≤10-word description and category label. It only adds README links and does not copy skill code. This is the largest single change in the batch.
- [#1161](https://github.com/VoltAgent/awesome-agent-skills/pull/1161) — AceDataCloud/fish-audio: a single skill under Specialized Domains, citing 4.1K installs on skills.sh as a community signal.
- [#1164](https://github.com/VoltAgent/awesome-agent-skills/pull/1164) — xizi-rujin: a skill for Chinese token compression, which reflects demand for non-English token-efficiency tooling.
- [#1163](https://github.com/VoltAgent/awesome-agent-skills/pull/1163) — hermes-telegram-checklist: manages Telegram To-Do checklists via Telethon/MTProto, with allowlisted writes and read-back verification.
- [#1160](https://github.com/VoltAgent/awesome-agent-skills/pull/1160) — NygenAnalytics/scarf-single-cell: single-cell RNA-seq analysis, which adds a new "Skills by Nygen Analytics" section (a scientific/bioinformatics domain).

The underlying themes are vendor-scale catalog contributions, productivity and messaging integrations, and domain-specific science and language tooling.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported. There were no issues in the window.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. The PRs suggest these signals:
- Submissions are shifting from single skills to bulk vendor catalogs (#1162 vs. #1161). The maintainers may need a policy on bulk submissions and on whether the same vendor can submit both individual and bulk PRs (#1161 and #1162 overlap on AceDataCloud).
- New categories and sections keep appearing (Nygen Analytics in #1160, and earlier Web3 in #479), so the README's structure may need reorganizing.
- Popularity signals such as install counts are being used as inclusion evidence (#1161). A formal inclusion criterion is likely to follow.

## 7. User Feedback Summary
There are no direct user comments in this window. Contributors do follow the stated submission conventions, which suggests the contribution guidelines are clear. They use the required `owner/skill-name` label, short descriptions and the right category. Demand is visible for messaging and productivity automation, localized (Chinese) workflows, audio and voice tooling, and scientific analysis.

## 8. Backlog Watch
- [#479](https://github.com/VoltAgent/awesome-agent-skills/pull/479) was open for about 5.5 months before closing, which shows that older submissions can wait a long time for a decision.
- Open PRs #1160–#1164 are all under 2 days old and unreviewed. The numbering gap (e.g. #479 versus #1164) implies a large number of PRs overall, so the older backlog is probably larger than today's data shows. Maintainers should triage it, and the 97-link PR #1162 needs closer review than the others.
- Overlapping AceDataCloud PRs (#1161 and #1162) should be reconciled to avoid duplicate README entries.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
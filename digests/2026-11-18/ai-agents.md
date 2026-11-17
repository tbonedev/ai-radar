# MCP Ecosystem Digest 2026-11-18

> Issues: 2 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-17 16:38 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-18

## 1. Today's Overview
Activity in modelcontextprotocol/servers was very low over the last 24 hours. Only two issues were updated, both open and both about the filesystem server. There were no PRs, no releases, and no closed items. Neither issue has comments or reactions yet. The project looks quiet on the merge side, with community feedback concentrated on `@modelcontextprotocol/server-filesystem`.

## 2. Releases
No new releases. The latest filesystem version referenced in the issues is 2.3.0.

## 3. Project Progress
No PRs were merged or closed, and no issues were closed. There is no visible feature or fix progress today.

## 4. Community Hot Topics
Neither issue has comments or 👍 reactions, so ranking by engagement isn't possible. The two items below are the day's only activity.

- **[#5553](https://github.com/modelcontextprotocol/servers/issues/5553) – `search_files` description examples** (labels: enhancement, v2). The author measured filesystem server versions 2.0.0 and 2.2.0 and found 2.3.0 ships the same description. They report that realistic examples in the `search_files` tool description stop small models from refusing to search. This follows up on #896 and #3419. The underlying need is tool descriptions tuned for smaller or weaker LLMs, which matters as MCP is used beyond frontier models.
- **[#5555](https://github.com/modelcontextprotocol/servers/issues/5555) – `move_file` false "Parent directory does not exist"**. The author reports the error for a destination whose parent does exist. They tested commit `3d22dc1`, "fix(filesystem): address review round 3 for GHSA-p9cv-8g75-4xcg", and say the behaviour was introduced by that work. The underlying need is that the security hardening should not break normal file operations.

## 5. Bugs & Stability
1. **[#5555](https://github.com/modelcontextprotocol/servers/issues/5555) – `move_file` regression (probable).** It is a functional failure in a core filesystem tool. It appears linked to a recent security-fix series (GHSA-p9cv-8g75-4xcg), so it may be a regression from path-validation changes. It is not a crash or data-loss report. No fix PR exists yet. Severity: medium, with possible high impact if the change reaches a release.

No other bugs were reported.

## 6. Feature Requests & Roadmap Signals
- **[#5553](https://github.com/modelcontextprotocol/servers/issues/5553)** asks for richer `search_files` description examples. It is a low-risk, text-only change backed by measurement, and it carries the `v2` label. It is a plausible quick win for an upcoming release, though no maintainer response is visible yet.

## 7. User Feedback Summary
- Small or weaker models sometimes refuse to call `search_files`, and users want tool descriptions that guide them better.
- Users hit friction when security hardening changes path-handling behaviour, as in the `move_file` error. Both reports come from careful, measured testing, which suggests engaged users running the project against real workloads.

## 8. Backlog Watch
Both items are new (created 2026-11-16 and 2026-11-17) and have no maintainer response yet.
- [#5555](https://github.com/modelcontextprotocol/servers/issues/5555) should be triaged first because it may be a regression from a security-related change.
- [#5553](https://github.com/modelcontextprotocol/servers/issues/5553) is a lower-priority enhancement. It should be linked to its predecessors, #896 and #3419.

The data covers only 24 hours, so older long-unanswered items are not visible in this digest.

**Project health:** Activity is low, with no merges or releases. Both reports are specific and well documented, which points to a healthy community. The risk to watch is whether the `move_file` regression gets a quick fix.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — MCP & Agent-Extension Ecosystem, 2026-11-18

## 1. Ecosystem Overview
Today's data covers the **MCP and agent-extension distribution layer**, not personal AI assistants themselves. It includes the reference servers, the official registry, two registries or catalogs (Docker, Claude Plugins) and three curated lists (Awesome MCP Servers, Awesome Agent Skills, Awesome Claude Code). Activity is lopsided. Intake is very high (500 PRs on Awesome MCP Servers, 50 on Docker MCP Registry), while core engineering is quiet (2 issues on the reference servers, 0 merges). The main themes are **trust and verification**, **remote and hosted servers**, and **skills moving from single items to packs**. The weak point across projects is **review throughput**: submissions grow faster than maintainers merge them.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers (reference) | 2 (0 closed) | 0 | None | **Fair**: very quiet, with a possible `move_file` regression |
| MCP Registry (official) | 4 | 1 (open) | None | **Fair-Good**: substantive audits and design discussion, but no merges |
| Awesome MCP Servers | 0 | 500 (348 open, 152 merged/closed) | None | **Good intake, weak throughput**: large backlog, automated labels |
| Docker MCP Registry | 0 | 50 (49 open, 1 closed) | None | **Fair**: strong demand, queue building |
| Claude Plugins (official) | 4 (0 closed) | 24 (13 open, 11 merged/closed) | None (security-guidance 2.0.21 staged) | **Good**: healthiest PR throughput, but slow issue triage |
| Awesome Claude Code | 0 | 0 | None | **Unknown**: no activity in the window |
| Awesome Agent Skills | 1 | 13 (12 open, 1 closed) | None | **Fair**: healthy intake, 0 merges |

Health scores are my judgment from the 24-hour data and are not project-reported metrics. Several digests note that comment counts were missing, so engagement figures are partial.

## 3. MCP Servers' Position

**Advantages**
- It is the **reference implementation**. Its tool descriptions and behaviour set the norms the registries and lists build on. Its filesystem server is on 2.3.0, and issues (#5553, #5555) show users test it carefully against real workloads.
- It has a **security-hardening track** (GHSA-p9cv-8g75-4xcg). Peer projects mostly list or distribute servers and do not ship hardened code.

**Technical approach differences**
- The reference servers **ship code** (e.g. `@modelcontextprotocol/server-filesystem`). The registries and lists ship **metadata and pointers**. The Docker registry increasingly hosts remote Streamable HTTP entries with no image.
- Its main risk is that security fixes can regress ordinary behaviour. `move_file` may have broken under the path-validation changes (#5555, probable).

**Community size**
- By visible volume it is the **smallest** of the active projects today (2 updates, against 500 PRs on Awesome MCP Servers and 50 on Docker's registry). This is a 24-hour sample and says nothing about install base or star count, which the data does not give.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| **Trust and supply-chain integrity** | MCP Registry, Claude Plugins, Awesome MCP Servers, Awesome Agent Skills, Docker MCP Registry | Tool-description fingerprinting (#82). DNS and key identity (#406). The Verified-org gate (#7024). Read-only and no-credential claims on submissions. Skill pre-install scanning (#1428). Sourceless remote entries on Docker (#7017) |
| **Metadata and listing validation** | MCP Registry, Awesome MCP Servers, Docker MCP Registry | 274 entries with uninstallable versions (#1862). 1,335 endpoints with no runnable ownership check (#1860). Bot labels (Glama, merge conflicts). Suggested automated `server.yaml` validation |
| **Remote and hosted servers** | Docker MCP Registry, MCP Registry | Streamable HTTP with OAuth 2.1 and dynamic client registration. Server Card linkage (PR #1861, SEP-2127) |
| **Cross-platform reliability** | Claude Plugins | macOS CA certificate and Windows Python alias failures in the `security-guidance` hook |
| **Tool descriptions for small models** | MCP Servers | Realistic examples in `search_files` to stop refusals (#5553) |
| **State isolation** | Claude Plugins | Shared jdtls workspace across same-named worktrees (#7149) |

## 5. Differentiation Analysis

- **MCP Servers:** reference code and tool design. Its users are server authors and client builders.
- **MCP Registry:** the canonical metadata and identity layer. Its concerns are provenance, versions and namespace ownership.
- **Awesome MCP Servers:** a discovery channel for end users and developers. It is PR-only and relies on label automation and a Glama listing requirement.
- **Docker MCP Registry:** a catalog for Docker users, moving toward SaaS and API vendors with remote entries.
- **Claude Plugins (official):** a curated, host-specific marketplace. It has an explicit verification policy, LSP and channel plugins, and active engineering on one plugin (`security-guidance`).
- **Awesome Agent Skills:** a curated list of skills (not servers), with growing media and design content. It follows a strict 9-word description rule and may add a "Design and Media" category.
- **Awesome Claude Code:** no data. I won't characterize it.

## 6. Community Momentum & Maturity

- **Tier 1, high volume:** Awesome MCP Servers (500 PRs) and Docker MCP Registry (50 PRs). Both are submission-driven, and the queue is growing.
- **Tier 2, active engineering:** Claude Plugins (24 PRs, 11 closed or merged, steady release staging) is the only project that is clearly iterating on code today.
- **Tier 3, moderate and discussion-led:** MCP Registry and Awesome Agent Skills. The first has audits and old design threads (#82 is 18 months old). The second has intake and no merges.
- **Tier 4, quiet or dormant:** MCP Servers (no PRs) and Awesome Claude Code (no activity).

**Stabilizing vs iterating:** the reference servers look stable but under-staffed today. The registry's trust model is still being designed. The plugin directory is iterating fastest, mostly on one plugin.

## 7. Trend Signals

1. **Verification is the next competitive layer.** Five of seven projects show trust or validation needs. Developers who publish servers should expect namespace ownership checks, package-version validation and verified-publisher rules.
2. **Remote-first MCP is becoming the default for vendors.** Hosted Streamable HTTP with OAuth 2.1 dominates Docker submissions. Server authors should plan for auth and dynamic client registration, not only stdio and npx.
3. **Tool descriptions are an engineering surface.** The `search_files` data point (#5553) suggests description wording affects whether small models call a tool at all. Test with smaller models.
4. **Security hardening needs regression tests.** `move_file` (#5555) is a reminder that path validation changes can break normal operations.
5. **Skills are bundling into packs** (49 to 56 skills per submission), and agent-config linting is appearing (AsItIs). Expect more tooling around `CLAUDE.md`, `AGENTS.md` and `SKILL.md`.
6. **Maintainer capacity is the bottleneck.** Heavy intake with few merges calls for automation: bot validation, auto-closing stale or conflicted PRs, and batch review.
7. **Agent commerce and coordination** (x402 escrow, agent marketplaces) shows up in two catalogs, but with low volume. Treat it as an early signal.

**Caveats:** one-day window. Awesome MCP Servers showed only 20 of 500 PRs. Docker's comment data was missing. Awesome Claude Code had no data. Both registry audits (#1860, #1862) come from one author and have not been verified by maintainers.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest — 2026-11-18

## 1. Today's Overview
Activity is low: 4 issues and 1 PR were updated in the last 24 hours, with no releases and no merged or closed items. All of the new activity comes from one contributor (lanbass869-cell), who opened two audit/measurement issues and one feature PR about registry data quality and metadata. The one older thread with activity is the long-running tool-poisoning discussion (#82). The project is in a discussion and data-audit phase, with no shipping changes today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. One PR is open:
- **[PR #1861](https://github.com/modelcontextprotocol/registry/pull/1861)**: adds an optional `serverCard` URL field on `ServerDetail`. It points to the server's [SEP-2127](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127) Server Card. The field is additive and optional, so it should not break existing `server.json` files. It has no review comments yet.

## 4. Community Hot Topics
- **[#82](https://github.com/modelcontextprotocol/registry/issues/82)** (33 comments, 1 👍) covers preventing tool poisoning by having publishers list and fingerprint every tool a server may invoke. Clients would consume the stored fingerprints, and third-party vendors could scan and approve them. The need is supply-chain integrity for tool definitions, since a server can change tool descriptions after approval. It was opened in May 2025, is labeled "not go-live blocker", and is still active in Nov 2026.
- **[#406](https://github.com/modelcontextprotocol/registry/issues/406)** (4 comments) proposes AID, a DNS record plus key handshake, for trust at first contact. The registry currently has no cryptographic binding between a published MCP URI and a key the publisher controls. The need is portable, decentralized identity beyond one-off registry tokens.
- **[#1862](https://github.com/modelcontextprotocol/registry/issues/1862)** and **[#1860](https://github.com/modelcontextprotocol/registry/issues/1860)** (1 comment each) are data audits (details in the next two sections). Both go to registry integrity and verification.

## 5. Bugs & Stability
No crashes or regressions were reported. One data-quality problem stands out:
1. **[#1862](https://github.com/modelcontextprotocol/registry/issues/1862)**: an audit reports that **274 registry entries** reference an npm or PyPI package version that cannot be installed. The check resolved each `(registry, identifier, version)` against the publisher's own registry. Users who install from these entries would hit failures. No fix PR exists, and the registry may need publish-time or periodic validation.

Related integrity finding: [#1860](https://github.com/modelcontextprotocol/registry/issues/1860) measures that 95.07% of reverse-DNS endpoints sit on a domain their namespace implies. The other **1,335** have no runnable check. That requirement was dropped in Nov 2025 (#494, replacing #180), and the replacement self-identification mechanism leaves a verification gap.

## 6. Feature Requests & Roadmap Signals
- **Server Card linkage** ([PR #1861](https://github.com/modelcontextprotocol/registry/pull/1861)): it is a concrete implementation and small in scope, so it is the most likely to land soon. That depends on SEP-2127 progressing upstream.
- **Tool-signature fingerprinting** ([#82](https://github.com/modelcontextprotocol/registry/issues/82)): it has strong interest, but it has been open 18 months and is not a go-live blocker, so a near-term release is unlikely.
- **AID DNS/key handshake** ([#406](https://github.com/modelcontextprotocol/registry/issues/406)): it is labeled v1 and enhancement, but it has low engagement (0 👍), so it is unlikely to be prioritized soon.
- **Endpoint and package verification**: the two audits point toward validation checks, which could follow if maintainers accept the findings.

## 7. User Feedback Summary
Today's feedback comes from an ecosystem-auditing perspective rather than from end-user complaints. The pain points are:
- Entries can reference uninstallable package versions.
- Endpoint ownership has no runnable check for a large minority of servers.
- There is no cryptographic or fingerprint trust layer for tools or servers.

Nobody has stated satisfaction or dissatisfaction explicitly. The audits imply that registry quality and trust signals need work as it grows.

## 8. Backlog Watch
- **[#82](https://github.com/modelcontextprotocol/registry/issues/82)**: open since 2025-05-27 with 33 comments. It is the most discussed issue and needs a maintainer decision on scope or a design direction.
- **[#406](https://github.com/modelcontextprotocol/registry/issues/406)**: open since 2025-09-10 (about 14 months) with a v1 label. It needs a maintainer response on whether AID fits the registry's trust model.
- **New items needing triage**: [#1862](https://github.com/modelcontextprotocol/registry/issues/1862), [#1860](https://github.com/modelcontextprotocol/registry/issues/1860) and [PR #1861](https://github.com/modelcontextprotocol/registry/pull/1861) have no maintainer response yet. The same author filed all three, so maintainers may want to verify the audit methodology before acting on the figures.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-11-18

Source: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

## 1. Today's Overview

Activity is high and almost entirely submission-driven. In the last 24h, 500 PRs were updated (348 open, 152 merged or closed). There were 0 issues and 0 releases, so the repo works as a curated list with a PR-only workflow. Almost all visible PRs are "Add server X" submissions, and none have comments. Review throughput looks automated or bot-gated, because labels such as `has-glama`, `missing-glama`, `valid-name`, `has-emoji` and `merge-conflict` appear on every PR. Only the top 20 of 500 PRs were visible, so the numbers below are partial.

## 2. Releases

No new releases.

## 3. Project Progress

Only 152 PRs were merged or closed, and the sample shows one individual item:
- [#19335](https://github.com/punkpeye/awesome-mcp-servers/pull/19335) (CLOSED), "Add drawcommons MCP server entry". Its author reopened the submission as [#19832](https://github.com/punkpeye/awesome-mcp-servers/pull/19832) (Data Platforms, read-only public ledger), which suggests a resubmission after a fix. The data does not say why #19335 was closed.

I can't tell from the data how many of the 152 were merges and how many were rejections. The list gained new MCP servers in categories such as Developer Tools, Security, Communication, Multimedia, Knowledge & Memory and Gaming.

## 4. Community Hot Topics

Comment counts are all `undefined` and reactions are 0, so there are no true hot topics by engagement. Themes in the new submissions:
- **AI model and cost tooling**: [#19838](https://github.com/punkpeye/awesome-mcp-servers/pull/19838) modelanalyzer-mcp and [#18038](https://github.com/punkpeye/awesome-mcp-servers/pull/18038) promptspend, which compare and price models.
- **Agent memory and context**: [#19830](https://github.com/punkpeye/awesome-mcp-servers/pull/19830) CROW LLM Wiki, [#14698](https://github.com/punkpeye/awesome-mcp-servers/pull/14698) SyncytiumMD, and [#19654](https://github.com/punkpeye/awesome-mcp-servers/pull/19654) AsItIs, a linter for CLAUDE.md, AGENTS.md and SKILL.md.
- **Agent commerce and coordination**: [#19831](https://github.com/punkpeye/awesome-mcp-servers/pull/19831) LHUB agent-to-agent marketplace and [#19820](https://github.com/punkpeye/awesome-mcp-servers/pull/19820) NullClear (x402 escrow clearing, multi-chain security).
- **Media and vision**: [#19836](https://github.com/punkpeye/awesome-mcp-servers/pull/19836) Suno music and [#19714](https://github.com/punkpeye/awesome-mcp-servers/pull/19714) OpenEye computer vision.
- **Local-first and no-key servers**: [#19837](https://github.com/punkpeye/awesome-mcp-servers/pull/19837) Inplain (Ollama option), [#19834](https://github.com/punkpeye/awesome-mcp-servers/pull/19834) Steam, and [#19829](https://github.com/punkpeye/awesome-mcp-servers/pull/19829) ParallelSandbox.

The underlying need is discoverability. Maintainers of new servers want a listing, and the pace suggests the list is a main distribution channel.

## 5. Bugs & Stability

No issues or bug reports. Process friction visible from labels:
- Merge conflicts: [#19714](https://github.com/punkpeye/awesome-mcp-servers/pull/19714) and [#18038](https://github.com/punkpeye/awesome-mcp-servers/pull/18038). Both need the author to rebase.
- Missing Glama listing: [#19838](https://github.com/punkpeye/awesome-mcp-servers/pull/19838), [#19836](https://github.com/punkpeye/awesome-mcp-servers/pull/19836), [#19831](https://github.com/punkpeye/awesome-mcp-servers/pull/19831) and [#14698](https://github.com/punkpeye/awesome-mcp-servers/pull/14698).

## 6. Feature Requests & Roadmap Signals

There are no explicit feature requests. Signals from the submissions:
- One server per PR is enforced. [#19835](https://github.com/punkpeye/awesome-mcp-servers/pull/19835) and [#19833](https://github.com/punkpeye/awesome-mcp-servers/pull/19833) say they were "split out of #16064 as requested".
- A Glama listing, ideally with a score badge, is a de facto requirement.
- The data does not show new categories, but the entries hint at growing demand for agent payments and marketplaces, agent-config linting, and model pricing.

## 7. User Feedback Summary

No user comments. Submitter behavior points to these needs:
- Contributors want standard stdio/npx installs and entries in the Official MCP Registry. Several PRs cite npm and registry names.
- Some add disclosure notes (e.g. [#19830](https://github.com/punkpeye/awesome-mcp-servers/pull/19830)) and security claims such as read-only, no network code and no credentials ([#19832](https://github.com/punkpeye/awesome-mcp-servers/pull/19832), [#19654](https://github.com/punkpeye/awesome-mcp-servers/pull/19654)). This suggests trust matters to reviewers and users.
- The 🤖🤖🤖 marker in some titles seems to flag AI-assisted submissions, and the data doesn't say whether this affects review.

## 8. Backlog Watch

Older PRs still being updated and waiting on maintainer attention:
- [#14698](https://github.com/punkpeye/awesome-mcp-servers/pull/14698) SyncytiumMD, open since 2026-09-19 (about two months), missing Glama.
- [#18038](https://github.com/punkpeye/awesome-mcp-servers/pull/18038) promptspend, open since 2026-10-29, has a merge conflict.
- [#18827](https://github.com/punkpeye/awesome-mcp-servers/pull/18827) ru-companies-mcp, open since 2026-11-07.
- [#16064](https://github.com/punkpeye/awesome-mcp-servers/pull/16064) is referenced as an earlier multi-server PR that was split. It's not in the visible data.

With 348 open PRs, the main project health risk is review backlog. Bot labels could be used to auto-close stale PRs with conflicts or a missing Glama listing.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-18

## 1. Today's Overview
Activity is high but one-directional. 50 PRs were updated in the last 24 hours, and 49 of them are still open. Only 1 was merged or closed. There were no Issues and no releases. Almost all of the traffic is community submissions of **remote MCP servers**. The registry is acting as a submission queue. The data shows a possible review bottleneck: new entries arrive faster than they are merged. The comment counts came through as "undefined", so discussion depth can't be measured.

## 2. Releases
None.

## 3. Project Progress
- 1 PR was merged or closed today. It is not among the top 20 shown, so I can't identify it or say what it advanced.
- No visible PR in the sample was merged. Progress today is inbound submissions only.

## 4. Community Hot Topics
Comment data is unavailable (`Comments: undefined`, 👍 0 on all items), so I can't rank by engagement. The items below are the ones showing a different kind of activity: older PRs that were updated again, or notable submission patterns.

- **[#7017 GWIX](https://github.com/docker/mcp-registry/pull/7017)** (opened 2026-11-12) is a hosted remote server with no source repo or image. It provides workforce and pay statistics.
- **[#6039 FlickDirect Connect](https://github.com/docker/mcp-registry/pull/6039)** (opened 2026-10-23, about 3.5 weeks old) was updated again today. It has three catalog files and no auth.
- **[#7227 while.sh](https://github.com/docker/mcp-registry/pull/7227)** (opened 2026-11-16) is a PaaS for deploying apps. It uses OAuth 2.1 with dynamic client registration.
- Submitters are choosing hosted, Streamable HTTP servers, often with OAuth 2.1 and dynamic client registration. Examples:
  - [#7278 SEOmatic](https://github.com/docker/mcp-registry/pull/7278)
  - [#7275 Genaya](https://github.com/docker/mcp-registry/pull/7275)
  - [#7273 AeonProxy](https://github.com/docker/mcp-registry/pull/7273)
- Several entries cite listing in the official MCP Registry, such as [#7274 BeReach](https://github.com/docker/mcp-registry/pull/7274) and [#7284 GSC Wizard](https://github.com/docker/mcp-registry/pull/7284). Vendors want a presence on every major catalog.

**Underlying need:** SaaS and API vendors want distribution inside the Docker MCP catalog without shipping a container image.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. There were no Issues and no fix PRs. One thing to watch is that remote-only entries such as [#6039](https://github.com/docker/mcp-registry/pull/6039) and [#7017](https://github.com/docker/mcp-registry/pull/7017) have no image or source to audit. Their `tools.json` is the "documented empty list", so tool discovery and trust rely on the remote endpoint.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. The submissions suggest where the registry is heading:
- **Remote servers are now the dominant entry type.** Streamable HTTP with OAuth 2.1 and dynamic client registration is the common pattern.
- **Sourceless entries** (no repo, no image) are being submitted, for example [#7017](https://github.com/docker/mcp-registry/pull/7017). Maintainers may need a formal policy for them.
- **Categories seen today:**
  - SEO and marketing: [#7281 Improvado](https://github.com/docker/mcp-registry/pull/7281), [#7276 Product Metrics](https://github.com/docker/mcp-registry/pull/7276)
  - Agent infrastructure: [#7287 kosa8](https://github.com/docker/mcp-registry/pull/7287), [#7273 AeonProxy](https://github.com/docker/mcp-registry/pull/7273)
  - Crypto: [#7279 NullClear Arbiter](https://github.com/docker/mcp-registry/pull/7279)
  - Media generation: [#7280 Kling AI](https://github.com/docker/mcp-registry/pull/7280), [#7283 Platemark](https://github.com/docker/mcp-registry/pull/7283)

## 7. User Feedback Summary
There is no direct user feedback, because there are no Issues and no comment data. What the submission descriptions say:
- Submitters value **no-auth or low-friction access**, as in [#7282 NextUp Walk-in](https://github.com/docker/mcp-registry/pull/7282) and [#7283 Platemark](https://github.com/docker/mcp-registry/pull/7283).
- Use cases are vertical and practical: debt collection ([#7288](https://github.com/docker/mcp-registry/pull/7288)), parental controls ([#7277](https://github.com/docker/mcp-registry/pull/7277)), meeting notes ([#7285](https://github.com/docker/mcp-registry/pull/7285)), and clinic data ([#7265](https://github.com/docker/mcp-registry/pull/7265)).
- The only signal of dissatisfaction is indirect: long-open PRs like #6039 suggest slow turnaround.

## 8. Backlog Watch
- **[#6039 FlickDirect Connect](https://github.com/docker/mcp-registry/pull/6039):** open since 2026-10-23 (about 26 days). It was updated today, so it may be waiting on a maintainer or a fix.
- **[#7017 GWIX](https://github.com/docker/mcp-registry/pull/7017):** open since 2026-11-12. Its sourceless remote-only shape likely needs a maintainer policy decision.
- **Queue depth:** 49 open PRs against 1 closed today. Maintainers may need triage tooling, such as automated validation of `server.yaml` and remote endpoints, or batch review.

**Health assessment:** Community interest is strong, but review throughput looks weak. There are no bug reports. The main risk is a growing queue and stale PRs. Comment counts were missing from the data, so engagement conclusions above are provisional.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-18

## 1. Today's Overview
Activity is moderate-to-high, driven by automated SHA bumps and a concentrated stream of `security-guidance` fixes from one maintainer (mhegazy). In the last 24h there were 4 active issues (none closed), 24 PRs (13 open, 11 merged/closed), and no releases. The most important discussion is the Verified-organization gate on the plugin directory (#7024). Issue triage is slow: 0 issues were closed, while PR throughput is healthy.

## 2. Releases
No new releases. `security-guidance` 2.0.21 is staged in [#7143](https://github.com/anthropics/claude-plugins-official/pull/7143) as a version-only PR, to be merged last.

## 3. Project Progress
11 PRs were merged or closed (the data does not distinguish merged from closed-unmerged):
- **Marketplace SHA bumps:** [#7020](https://github.com/anthropics/claude-plugins-official/pull/7020) (postman, superseded by new bump #7147), [#7114](https://github.com/anthropics/claude-plugins-official/pull/7114) (cloudflare), [#6417](https://github.com/anthropics/claude-plugins-official/pull/6417) (amd-skills, stale since Oct 11).
- **amd-skills repoint:** [#7115](https://github.com/anthropics/claude-plugins-official/pull/7115) moves to `d4417422` and drops `strict: false`. AMD added its own `plugin.json`, and the combination caused conflicting-manifest load failures.
- **security-guidance:** [#7141](https://github.com/anthropics/claude-plugins-official/pull/7141) uses the macOS system CA file when python.org Python has none. Previously every end-of-turn review failed with `CERTIFICATE_VERIFY_FAILED`, at about 18s per attempt. [#7107](https://github.com/anthropics/claude-plugins-official/pull/7107) cuts false `eval`/`new Function`/`innerHTML` warnings on ordinary JS (part of #5066). [#7106](https://github.com/anthropics/claude-plugins-official/pull/7106) stops the edit hook waiting on the Windows App Installer `python` alias.
- **discord:** [#6405](https://github.com/anthropics/claude-plugins-official/pull/6405) (paging fix for `fetch_messages`) was **closed**. Its linked issue #6406 is still open, so it is unclear whether the fix was merged or rejected.

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** (34 comments, 13 👍): Since about Nov 5, the directory refuses command hooks and local MCP servers from non-Verified organizations. The docs and pre-submission checklist apparently don't describe a path to Verified status. The underlying need is a transparent, documented verification process. Third-party authors with legitimately local tooling are blocked.
- **[#4492](https://github.com/anthropics/claude-plugins-official/issues/4492)** (27 👍, 5 comments): Native TypeScript 7 LSP support. The current `typescript-lsp` plugin wraps the legacy `tsserver` through `typescript-language-server`. This is the highest-reacted request, and users want the faster native server.

## 5. Bugs & Stability
Ranked by severity:
1. **[#7149](https://github.com/anthropics/claude-plugins-official/issues/7149) jdtls-lsp:** Sessions launched from same-named folders (common with git worktrees) share one Eclipse workspace. One session's import can leave another without code intelligence, and the workspace can become unloadable. It was filed Nov 17 and has no fix PR.
2. **[#6406](https://github.com/anthropics/claude-plugins-official/issues/6406) discord:** `fetch_messages` can't page past the newest 100 messages, and bots have no search API. Fix PR #6405 was closed and the issue remains open.
3. **Telegram:** Message delivery failures are being addressed in draft [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048) (four fixes, with commit 1 flagged as most urgent).
4. **security-guidance robustness:** Open PRs cover a full-diff-in-memory slowdown on large imports (6.4s on 5,800 files) in [#7140](https://github.com/anthropics/claude-plugins-official/pull/7140). They also cover double Python startup on Windows in [#7142](https://github.com/anthropics/claude-plugins-official/pull/7142), metric-row truncation that drops `review_ms` in [#7108](https://github.com/anthropics/claude-plugins-official/pull/7108), and a review gap for text files renamed to code names in [#7105](https://github.com/anthropics/claude-plugins-official/pull/7105).

## 6. Feature Requests & Roadmap Signals
- Native TS7 LSP ([#4492](https://github.com/anthropics/claude-plugins-official/issues/4492)) has high demand but no PR yet. It is plausible after TS7 stabilizes.
- Discord history cursor/pagination ([#6406](https://github.com/anthropics/claude-plugins-official/issues/6406)) is a small, well-scoped change that already has a draft fix.
- A Verified-organization pathway ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)) is a policy item that likely needs documentation, at minimum.
- Near-term version bumps: security-guidance 2.0.21 ([#7143](https://github.com/anthropics/claude-plugins-official/pull/7143)) and champion-kit 0.5.1 ([#7118](https://github.com/anthropics/claude-plugins-official/pull/7118), security hardening of scout output and commit framing).

## 7. User Feedback Summary
- Third-party publishers are frustrated by a sudden, hard-to-navigate trust gate (#7024).
- Multi-session and worktree workflows expose state-isolation gaps (#7149).
- Windows and macOS users hit environment-specific Python problems in the security-guidance hook (aliases, junctions, CA certs). Cross-platform reliability is the main pain point there.
- Bot and channel integrations (Discord, Telegram) lose messages or history.

## 8. Backlog Watch
- [#4492](https://github.com/anthropics/claude-plugins-official/issues/4492): open since Jul 24 with 27 👍 and no maintainer-driven PR.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): 34 comments, and the data shows no official resolution. It needs a maintainer response on Verified criteria.
- [#6406](https://github.com/anthropics/claude-plugins-official/issues/6406): open for over a month, and its fix PR was closed.
- [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048): draft Telegram fixes, waiting on a decision about splitting.
- 13 open PRs include several bot SHA bumps (#7144–#7148) and a large security-guidance queue. Review bandwidth, and the merge ordering for 2.0.21, are the main bottleneck.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-18

## 1. Today's Overview
Activity is moderate and almost entirely community-submission traffic. In the last 24h there was 1 issue update and 13 PR updates (12 open, 1 closed), with no releases and no merges. The repo works as a curated list, so PRs are mostly "add a skill" entries. The one closed PR was not merged. Intake is healthy, but maintainer throughput looks like the bottleneck: nothing was merged and no PR has comments.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were merged today.
- One PR was closed: [#1431](https://github.com/VoltAgent/awesome-agent-skills/pull/1431) (0xCosmosly/Remove-Claude-Contributor), a skill for removing AI co-author trailers from a repo's Contributors sidebar. The data doesn't say whether it was closed by the maintainers or withdrawn, or why. The data shows it as closed, not merged.

## 4. Community Hot Topics
No item has comments or 👍 reactions (comments are 0 or undefined everywhere), so "hot" here means thematic clustering of submissions:
- **Media and design skills**: [#1439](https://github.com/VoltAgent/awesome-agent-skills/pull/1439) design-garden (proposes a new *Design and Media* subcategory), [#1438](https://github.com/VoltAgent/awesome-agent-skills/pull/1438) slidemuse (PDF to slides/PPTX), [#1437](https://github.com/VoltAgent/awesome-agent-skills/pull/1437) iart-ai/motion-skills (19 packs, 56 skills, about 1.8k stars), [#1435](https://github.com/VoltAgent/awesome-agent-skills/pull/1435) cinematic-shot-prompting and game-universe-studio, [#1430](https://github.com/VoltAgent/awesome-agent-skills/pull/1430) aigent-talking-head. Demand is growing for creative and video workflows.
- **Large skill collections**: [#1436](https://github.com/VoltAgent/awesome-agent-skills/pull/1436) off-grid-ai/skills (49 skills), [#1418](https://github.com/VoltAgent/awesome-agent-skills/pull/1418) leadsets-skills (50 GTM skills), and #1437. Submitters increasingly send whole packs rather than single skills.
- **Safety and compliance**: [#1428](https://github.com/VoltAgent/awesome-agent-skills/pull/1428) AgentAvow/scan-before-connect (scan MCP servers and packages before installing) and [#1427](https://github.com/VoltAgent/awesome-agent-skills/pull/1427) lgpd-skills (Brazilian privacy law).
- **Context engineering**: [#1433](https://github.com/VoltAgent/awesome-agent-skills/pull/1433) harness-hospital.

## 5. Bugs & Stability
No crashes or regressions were reported. There is one maintenance defect:
- **Broken link (low severity)**: [#1434](https://github.com/VoltAgent/awesome-agent-skills/pull/1434) fixes a 404 for Koloyaaa/foreign-academic-translator, whose repo was renamed to academic-translation-toolkit. The fix PR already exists and is open. It points to a wider risk of link rot as upstream repos are renamed.

## 6. Feature Requests & Roadmap Signals
- **New Marketing entry**: [#1429](https://github.com/VoltAgent/awesome-agent-skills/issues/1429) asks to add GoldLemonAI/ai-vindbaarheid, which checks pages against AI search guides. It is an issue rather than a PR, so a maintainer would need to add it or ask for a PR.
- **New "Design and Media" subcategory** ([#1439](https://github.com/VoltAgent/awesome-agent-skills/pull/1439)). Several media submissions currently go under *Specialized Domains*, so a dedicated category is plausible.
- **Description update**: [#1432](https://github.com/VoltAgent/awesome-agent-skills/pull/1432) refreshes the tt-a1i/archify entry to the 9-word limit in `CONTRIBUTING.md`.
- Specialized Domains is the most common target section (#1437, #1435, #1430, #1427) and may need splitting.

## 7. User Feedback Summary
- Contributors want to be listed in the curated index, and they follow the contribution format (section placement, word-limit descriptions, licensing notes such as MIT or Apache-2.0).
- Skills are being built for several agent hosts (Claude Code, Codex, `npx skills add`).
- Contributors care about trust and safety (#1428), and some seek recognition for niche or regional needs such as Dutch AI-search optimization and Brazilian LGPD.
- Maintainer feedback or satisfaction signals are absent, since there are no comments.

## 8. Backlog Watch
All items are recent (created 2026-11-16 or 2026-11-17), so none are long-stale. Still, none has a response. Items worth early attention:
- [#1418](https://github.com/VoltAgent/awesome-agent-skills/pull/1418), the oldest open PR in this batch (created 2026-11-16, last updated 2026-11-17).
- [#1429](https://github.com/VoltAgent/awesome-agent-skills/issues/1429): needs a triage decision on how to submit.
- [#1434](https://github.com/VoltAgent/awesome-agent-skills/pull/1434): quick merge, since it fixes a 404.
- [#1439](https://github.com/VoltAgent/awesome-agent-skills/pull/1439): needs a maintainer decision on creating a new category.
- The unexplained closure of [#1431](https://github.com/VoltAgent/awesome-agent-skills/pull/1431) deserves a note for contributors.

Note that the other open PRs shown here are submitted only in 2026-11-16 or 2026-11-17, so older backlog items beyond this 24h window can't be assessed from this data.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# MCP Ecosystem Digest 2026-11-04

> Issues: 1 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-04 15:01 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest: 2026-11-04

## 1. Today's Overview
Activity in modelcontextprotocol/servers was very low over the last 24 hours. One issue was updated, and there were no PR updates and no new releases. The only item with movement is a long-running quality discussion, [#3669](https://github.com/modelcontextprotocol/servers/issues/3669), opened in March 2026. The repo looks quiet in terms of shipping, with the day's attention on schema quality and the v2 effort rather than on code changes.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, and none were updated. No features or fixes advanced in the last 24 hours. The data also shows no open PR addressing #3669.

## 4. Community Hot Topics
**[#3669 – Schema quality: missing property descriptions across official MCP servers](https://github.com/modelcontextprotocol/servers/issues/3669)** (labels: `enhancement`, `v2`; author: KryptosAI; 10 comments; 0 👍)
- Automated quality checks found that most reference servers omit `description` fields on tool input schema properties.
- Underlying need: LLMs rely on these descriptions to call tools correctly. Without them, argument selection and formatting get less reliable, which affects every downstream client.
- Because these are the official reference servers, they act as templates. Gaps here are likely to be copied by third-party server authors.
- The `v2` label suggests it is being tracked as part of the next major iteration. With 10 comments and renewed activity about 7.5 months after creation, there is sustained interest, though no reactions.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. #3669 is a quality and usability gap, not a functional defect. It is best read as low-severity, high-breadth technical debt. No fix PR is linked in the data.

## 6. Feature Requests & Roadmap Signals
- **Complete property descriptions across all reference server tool schemas** ([#3669](https://github.com/modelcontextprotocol/servers/issues/3669)). The `v2` label ties this to the v2 milestone.
- Prediction: this is a mechanical, low-risk change, so it could be batched into a v2 release. I can't confirm timing from the data. No PR is open yet, so a contribution is still needed.

## 7. User Feedback Summary
- Pain point: the quality of tool-schema documentation in the official servers. This affects how reliably LLMs invoke the tools.
- The report came from automated tooling (a linting or quality-check approach), which suggests ecosystem participants are starting to systematically audit MCP server quality.
- There is no sentiment data beyond the discussion volume, since there are 0 reactions.

## 8. Backlog Watch
- **[#3669](https://github.com/modelcontextprotocol/servers/issues/3669)** has been open since 2026-03-22, about 7.5 months. It has no linked PR and is tagged `v2`. It needs a maintainer decision on scope, such as a per-server checklist, a contribution call or a schema-description convention, so that contributors can pick it up.
- The data covers only 24 hours, so I can't assess other long-unanswered items. The empty PR queue in this window should not be read as a clean backlog.

**Health assessment:** quiet day, no regressions, and one healthy but stalled quality improvement thread that is waiting on an implementation PR.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison Report, 2026-11-04

**Scope note:** The digests cover only a 24-hour window, and several list only the top 20 items. Comment counts were missing for Awesome MCP Servers and Docker MCP Registry. Health scores below are my own judgments from the digest data, not published metrics.

## 1. Ecosystem Overview
The MCP ecosystem today is dominated by distribution and curation, not core code. The reference implementation (servers) and the official registry were quiet, while the catalogs and marketplaces (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code) took in dozens of submissions each. Much of the intake is automated: a large share of Awesome MCP Servers PRs carry the 🤖 marker, and Claude Plugins' flow is mostly bot SHA bumps. The common bottleneck is human review capacity, not contributor supply. Remote and hosted servers, security and governance tooling, and agent memory are the recurring technical themes.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers | 1 | 0 | None | 6/10: quiet, with a stalled v2 quality item |
| MCP Registry | 6 (1 open, 5 closed) | 2 (both closed) | None | 8/10: responsive triage, active infra tuning |
| Awesome MCP Servers | 0 | 174 (161 open, 13 closed or merged) | None | 6/10: very high inflow, large backlog |
| Docker MCP Registry | 0 | 50 (46 open, 4 closed) | None | 6/10: high inflow, low visible throughput |
| Claude Plugins (official) | 3 | 22 (16 closed or merged) | None | 7/10: steady automation, human review lags |
| Awesome Claude Code | 28 (23 open, 5 closed) | 0 | None | 6/10: strong intake, curation not visible |
| Awesome Agent Skills | 1 | 7 (6 open, 1 closed) | None | 6/10: steady intake, slow first review |

No project shipped a release in the window.

## 3. MCP Servers' Position
**Advantages**
- It is the reference implementation, so its conventions propagate to third-party servers. The schema-description gap in [#3669](https://github.com/modelcontextprotocol/servers/issues/3669) therefore matters beyond this repo.
- It has a clear roadmap anchor, the `v2` label. No peer shows a comparable versioned plan in this data.

**Technical approach differences**
- Servers is a code repo that ships tool implementations. The registry handles publishing and authentication (DNS and publisher CLI). Docker's catalog packages entries, and increasingly points at remote endpoints. The awesome lists only link out.

**Community size**
- By activity, Servers is the smallest of the group today (1 issue, 0 PRs) against 174 PRs for Awesome MCP Servers and 50 for Docker. This reflects what each repo is for: the reference repo is curated by maintainers and gets few drive-by changes. Activity volume here is not a measure of importance. Its one active thread had 10 comments, the most of any item in the digests.

**Risk:** no open PR addresses #3669, and the thread is about 7.5 months old.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Remote and hosted servers | Docker Registry, Awesome MCP Servers, MCP Registry | Streamable HTTP, OAuth 2.1/DCR, an empty `tools.json` with dynamic tool discovery ([#6597](https://github.com/docker/mcp-registry/pull/6597)); hosted endpoints listed beside stdio |
| Metadata quality and verification | Servers, MCP Registry, Awesome Agent Skills | Missing schema descriptions ([#3669](https://github.com/modelcontextprotocol/servers/issues/3669)); DNS auth reliability ([#1694](https://github.com/modelcontextprotocol/registry/issues/1694)); link rot ([#1187](https://github.com/VoltAgent/awesome-agent-skills/pull/1187), [#1351](https://github.com/VoltAgent/awesome-agent-skills/issues/1351)) |
| Security and governance | Awesome MCP Servers, Awesome Claude Code, Claude Plugins | Tool-poisoning scanners ([#18587](https://github.com/punkpeye/awesome-mcp-servers/pull/18587)), gateway approvals, secret leakage in agent histories ([#3444](https://github.com/hesreallyhim/awesome-claude-code/issues/3444)), an Expo pin shipping a removed telemetry hook ([#6984](https://github.com/anthropics/claude-plugins-official/issues/6984)) |
| Memory and session continuity | Awesome Claude Code | Handoff files and memory playbooks ([#3456](https://github.com/hesreallyhim/awesome-claude-code/issues/3456), [#2210](https://github.com/hesreallyhim/awesome-claude-code/issues/2210)) |
| Review and triage automation | Awesome MCP Servers, Docker Registry, Awesome Claude Code, Claude Plugins | Backlogs of 161 and 46 open PRs, a roughly 20-item validated queue, and green bumps waiting about 24 days |
| Cross-registry consistency | MCP Registry, Docker Registry | Visibility gaps between the official and GitHub registries ([#1758](https://github.com/modelcontextprotocol/registry/issues/1758)); Docker submissions citing the official registry |

## 5. Differentiation Analysis

| Project | Focus | Target user | Architecture |
|---|---|---|---|
| MCP Servers | Reference tool implementations | Server authors and client developers | Code repo |
| MCP Registry | Canonical publishing and discovery | Publishers | Service with a CLI and DNS/GitHub auth, run on Kubernetes (ingress scaling PRs) |
| Awesome MCP Servers | Broad, categorized discovery | End users and builders | README list, with bot labels such as `has-glama` and `missing-glama` |
| Docker MCP Registry | Catalog for Docker MCP clients | Vendors who want distribution | `server.yaml` entries, now mostly remote |
| Claude Plugins (official) | Curated, pinned plugin marketplace | Claude Code users | SHA-pinned entries with nightly bot bumps |
| Awesome Claude Code | Resources for Claude Code | Claude Code power users | Issue-form submissions with automated validation |
| Awesome Agent Skills | Cross-vendor skill index | Skill consumers and authors | README list |

## 6. Community Momentum & Maturity
- **High inflow, backlog-bound:** Awesome MCP Servers (174 PRs), Docker MCP Registry (50), Awesome Claude Code (28 issues). Inflow outpaces visible review.
- **Automation-driven and steady:** Claude Plugins. Throughput is high, but human decisions on pins take weeks.
- **Operationally active:** MCP Registry. It had the best close rate (5 of 6 issues, both PRs) and is tuning capacity.
- **Low-volume, stabilizing:** MCP Servers. It is quiet, with remaining work in quality and v2.
- **Early or small:** Awesome Agent Skills. It has about 7 PRs in the window and slow turnaround on small fixes (about 3.5 weeks for #1187).

The data covers one day, so these tiers describe the day, not a long-term trend.

## 7. Trend Signals
1. **Distribution is shifting from containers to remote endpoints.** Vendors want catalog presence without shipping images. Developers should plan for OAuth 2.1/DCR and dynamic tool lists.
2. **Tool metadata is part of the product.** Missing descriptions reduce LLM call reliability, and broken links break installs. Treat schema descriptions and link health as testable quality criteria.
3. **Supply-chain trust is becoming a concern.** Tool-poisoning scanners, pinned plugin versions that lag upstream, and closed-source remote entries in Docker's catalog all point to a need for provenance and review policy.
4. **AI-assisted contributions are raising review load.** The 🤖 markers and openly disclosed agent-prepared PRs suggest maintainers need explicit automation policies and triage tooling.
5. **Agent-operations tooling is growing.** Submissions on cost and limit monitoring, output verification, memory persistence and multi-agent supervision show that running agents in production is now routine.
6. **Unconfirmed items.** MCP Events (SEP-3415) shows early adoption in one PR. That is one data point, so watch it without relying on it.

**For decision-makers:** publish to the official registry first, with working DNS verification. Treat listings elsewhere as secondary distribution. Invest in schema descriptions, and pin and verify third-party plugins rather than trusting automated bumps.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest: 2026-11-04

## 1. Today's Overview
Activity was light and mostly housekeeping. Six issues were touched in 24h (1 open, 5 closed) and two PRs were updated, both closed. There were no new releases. The maintainers cleared several stale issues, including a DNS-auth bug, a search-visibility report, a withdrawal request, a catalog promotion, and a server submission. The two PRs, both by maintainer rdimitrov, adjusted production ingress scaling. Project health looks stable, and triage is responsive.

## 2. Releases
No new releases.

## 3. Project Progress
Both PRs were closed the same day they were created. They look like a change followed by a partial revert, both on the deployment and infrastructure side.
- [PR #1790](https://github.com/modelcontextprotocol/registry/pull/1790): Bound ingress scaling with matching worker headroom. It raised the production ingress scheduling reservation and replica ceiling, kept the absolute CPU scaling target, extended the worker ceiling, and left the minimum unchanged. Deployment validation was narrowed to these changes.
- [PR #1791](https://github.com/modelcontextprotocol/registry/pull/1791): Restore ingress reservation while retaining scaling headroom. It restored the earlier ingress CPU reservation but kept the higher replica and worker ceilings. The HPA percentage was adjusted to preserve the absolute CPU target, and the deployment guard now accepts only the intended reservation and target.

Together they suggest the registry is tuning capacity for growing traffic. The net effect is higher scaling ceilings with an unchanged baseline reservation. No user-facing features landed.

## 4. Community Hot Topics
Comment counts are low everywhere (max 2), so no issue is a strong hot topic. The most discussed are:
- [#1694](https://github.com/modelcontextprotocol/registry/issues/1694) (2 comments, closed): DNS auth fails with 401 despite a correct TXT record. The underlying need is reliable, predictable DNS verification for publishers, including cache behavior.
- [#1758](https://github.com/modelcontextprotocol/registry/issues/1758) (2 comments, closed): DevLens MCP is active in the official registry but missing from GitHub's MCP registry search. The underlying need is clarity on how the two registries sync.

## 5. Bugs & Stability
Ranked by severity:
1. [#1694](https://github.com/modelcontextprotocol/registry/issues/1694) (closed): `mcp-publisher login dns` returns 401 "no MCP public key found" even though the record is published and propagated. The report suspects a stale negative DNS cache in the registry resolver. This blocks publishing for affected users. It is closed, but the resolution is not visible in the data, and no fix PR is linked.
2. [#1758](https://github.com/modelcontextprotocol/registry/issues/1758) (closed): A server is not discoverable on the GitHub MCP Registry despite being active in the official registry. This is a downstream sync or indexing problem, not a core registry defect. It is closed.

The ingress PRs are capacity changes, not responses to a stated bug, so I can't link them to any of the issues above.

## 6. Feature Requests & Roadmap Signals
- No substantive feature requests today.
- [#1784](https://github.com/modelcontextprotocol/registry/issues/1784) (closed): A request to add `mach-gtm-mcp`, a B2B sales server. The npm package is not yet published, and this is a listing request, not a feature.
- Roadmap signal: the scaling work in #1790 and #1791 points to a focus on capacity and operational robustness. The DNS-auth issue suggests resolver and caching behavior may need hardening.

## 7. User Feedback Summary
- Publishers want DNS authentication to work without surprises, and propagation or caching delays are frustrating.
- Publishers want their entries visible consistently across downstream registries such as GitHub's.
- Publishers need a clear way to withdraw servers ([#1785](https://github.com/modelcontextprotocol/registry/issues/1785) closed, [#1759](https://github.com/modelcontextprotocol/registry/issues/1759) open).
- Some submissions look like promotion or misrouted requests, such as [#1755](https://github.com/modelcontextprotocol/registry/issues/1755) (an external catalog offer, closed) and [#1784](https://github.com/modelcontextprotocol/registry/issues/1784). This suggests the contribution path for new servers could be better documented, since the registry uses a publisher CLI and not issue-based submissions.

## 8. Backlog Watch
- [#1759](https://github.com/modelcontextprotocol/registry/issues/1759) (open, created 2026-10-28): Deletion request for `io.github.CYAN-ECLIPSE-TECHNOLOGIES-LLC/eclipse-benchkit-mcp`. It is a duplicate of [#1785](https://github.com/modelcontextprotocol/registry/issues/1785), which was filed 2026-11-01 and closed today. It is likely resolved and should be closed or linked, or the withdrawal confirmed. It has waited about a week.
- No other long-unanswered items appear in this data window. The wider backlog could not be assessed from today's 24h snapshot.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest: 2026-11-04

## 1. Today's Overview
Activity is high and almost entirely submission-driven. There were 0 issues and 0 releases, with 174 PRs updated in 24h (161 open, 13 merged/closed). Most PRs are new "Add X" listing requests. Several older PRs were touched again, apparently by bot labeling or re-validation. The list shows heavy inbound volume, and the visible data shows no merges. Comment counts came through as `undefined`, so engagement can't be measured. Health looks like strong contributor interest with a growing review backlog.

## 2. Releases
No new releases.

## 3. Project Progress
13 PRs were merged or closed, but only two are visible in the top-20 sample, and both are closed, not merged:
- [#10099](https://github.com/punkpeye/awesome-mcp-servers/pull/10099): GenTech Agent Kit (BlockRun MCP), Finance & Fintech. Submitted 2026-07-14.
- [#10224](https://github.com/punkpeye/awesome-mcp-servers/pull/10224): GenTech Shop, Gaming. Submitted 2026-07-16.

Both came from the same author (ProtoJay4789). They were closed about 3.5 months after submission, which suggests cleanup of stale or duplicate submissions rather than feature progress. The other 11 closed/merged PRs aren't in the data, so merge counts can't be confirmed.

## 4. Community Hot Topics
Comment and reaction data is unavailable (`Comments: undefined`, 👍 0 everywhere), so no PR can be ranked by engagement. The sample shows these themes by submission category:
- **Finance/crypto:** [#18594 Oak](https://github.com/punkpeye/awesome-mcp-servers/pull/18594) (Robinhood Chain wallet), [#18584 SolidRPC](https://github.com/punkpeye/awesome-mcp-servers/pull/18584) (blockchain RPC), [#18583 ezatwork-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/18583) (invoicing).
- **Security and MCP tooling:** [#18587 mcp-guard-scan](https://github.com/punkpeye/awesome-mcp-servers/pull/18587) (scans MCP servers for tool poisoning and hidden Unicode), [#18592 IcyLoom](https://github.com/punkpeye/awesome-mcp-servers/pull/18592) (MCP gateway with approvals), [#18590 hookdeck/mcp-events-bridge](https://github.com/punkpeye/awesome-mcp-servers/pull/18590) (webhooks to MCP Events, draft SEP-3415), [#18585 protocolprobe-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/18585) (registry facts).
- **Data and search:** [#18596 FastestRank](https://github.com/punkpeye/awesome-mcp-servers/pull/18596) (SEO), [#18593 PredictorLab](https://github.com/punkpeye/awesome-mcp-servers/pull/18593) (tabular ML), [#18595 Tidy Byte Tools](https://github.com/punkpeye/awesome-mcp-servers/pull/18595), [#18591 actors-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/18591).
- **Regional and vertical niches:** [#18465 sanjae-apply](https://github.com/punkpeye/awesome-mcp-servers/pull/18465) (Korean workers' compensation), [#14610 savantcat-answers-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/14610) (China GB/T 47746-2026 compliance).

The underlying need is discoverability. Builders want visibility for vertical, domain-specific servers. Interest in securing and governing MCP servers is also growing.

## 5. Bugs & Stability
No issues or bug reports today. The only stability-related signal is a repository-hygiene one:
- [#14610](https://github.com/punkpeye/awesome-mcp-servers/pull/14610) carries a `merge-conflict` label. It has been open since 2026-09-17 and needs the author to rebase. No fix is visible.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Indirect signals:
- **MCP Events (SEP-3415):** [#18590](https://github.com/punkpeye/awesome-mcp-servers/pull/18590) shows early adoption of this draft extension.
- **Remote/hosted endpoints:** Several submissions list hosted Streamable HTTP or OAuth endpoints alongside local stdio ([#18596](https://github.com/punkpeye/awesome-mcp-servers/pull/18596), [#18583](https://github.com/punkpeye/awesome-mcp-servers/pull/18583), [#18465](https://github.com/punkpeye/awesome-mcp-servers/pull/18465)). The list may need clearer conventions for these.
- **Likely near-term additions:** the 🤖-tagged PRs that have a Glama listing and a valid name are the likeliest to be merged. Several categories (Finance, Security, Developer Tools) keep growing.

## 7. User Feedback Summary
No direct user feedback exists in the data. The submissions suggest these patterns:
- Many PRs carry the 🤖🤖🤖 marker, so a large share are AI-agent-prepared. Several PRs disclose this openly ([#18591](https://github.com/punkpeye/awesome-mcp-servers/pull/18591), [#18586](https://github.com/punkpeye/awesome-mcp-servers/pull/18586)). Maintainers likely face higher review load and need clear automation conventions.
- Submitters emphasize local-first, self-hosted, and open-source licensing (MIT, Apache-2.0, AGPL).
- Some PRs are labeled `missing-glama` ([#18596](https://github.com/punkpeye/awesome-mcp-servers/pull/18596), [#18594](https://github.com/punkpeye/awesome-mcp-servers/pull/18594), [#18592](https://github.com/punkpeye/awesome-mcp-servers/pull/18592), [#18588](https://github.com/punkpeye/awesome-mcp-servers/pull/18588), [#18585](https://github.com/punkpeye/awesome-mcp-servers/pull/18585), [#18461](https://github.com/punkpeye/awesome-mcp-servers/pull/18461)). Glama registration is a recurring gate for contributors.

## 8. Backlog Watch
- [#15916 metamug/plunger](https://github.com/punkpeye/awesome-mcp-servers/pull/15916): open since 2026-10-07 (about 4 weeks), labeled `has-glama`, and apparently review-ready.
- [#14610 savantcat-answers-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/14610): open since 2026-09-17 (about 7 weeks), blocked by a merge conflict.
- The 161 open PRs signal a significant review queue. The closure of the July GenTech PRs ([#10099](https://github.com/punkpeye/awesome-mcp-servers/pull/10099), [#10224](https://github.com/punkpeye/awesome-mcp-servers/pull/10224)) shows old items do get resolved, but slowly.
- **Maintainer suggestions:** batch-merge valid, labeled PRs, auto-close stale conflicted ones, and document the policy on multi-server PRs (e.g. [#18592](https://github.com/punkpeye/awesome-mcp-servers/pull/18592), [#18595](https://github.com/punkpeye/awesome-mcp-servers/pull/18595)).

**Data caveat:** Only the top 20 of 174 PRs were provided, and comment counts were missing. Conclusions about the full queue are therefore estimates.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-04

## 1. Today's Overview
The registry saw very high contribution activity today: 50 PRs updated (46 open, 4 closed) with no issues and no releases. Almost all activity is new server submissions, and **remote, hosted MCP servers** dominate, using Streamable HTTP with OAuth 2.1 or no authentication. The pipeline is submission-heavy, and the data shows little merge throughput. Only 4 PRs were closed, and all four were stale items from one author. Registry health looks like strong inbound demand with a possible review bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
No merged PRs are visible in the data. The 4 closed items are all from **n24q02m**, opened 2026-07-14 and closed today. The data doesn't say whether they were merged or rejected, so treat them as cleanup and not as confirmed feature progress:
- [#4422 wet-mcp](https://github.com/docker/mcp-registry/pull/4422): web search, extraction and docs indexing
- [#4423 mnemo-mcp](https://github.com/docker/mcp-registry/pull/4423): persistent agent memory on SQLite
- [#4424 better-code-review-graph](https://github.com/docker/mcp-registry/pull/4424): code-review knowledge graph
- [#4425 better-godot-mcp](https://github.com/docker/mcp-registry/pull/4425): Godot 4.x interaction

All four sat open for about 4 months before closing.

## 4. Community Hot Topics
Comment and reaction counts are unavailable (comments show `undefined`, 👍 is 0 everywhere), so no PR can be ranked by engagement. The notable themes from today's submissions are:
- **Remote and hosted servers with OAuth 2.1/DCR**: [#6607 Tasters](https://github.com/docker/mcp-registry/pull/6607), [#6605 Same Day Website Builder](https://github.com/docker/mcp-registry/pull/6605), [#6597 Segwise](https://github.com/docker/mcp-registry/pull/6597), [#6606 Memocore](https://github.com/docker/mcp-registry/pull/6606).
- **Keyless public-data servers**: [#6603 Wherbi](https://github.com/docker/mcp-registry/pull/6603), [#6602 ASL (five servers)](https://github.com/docker/mcp-registry/pull/6602), [#6594 WeJob](https://github.com/docker/mcp-registry/pull/6594), [#6599 iLook](https://github.com/docker/mcp-registry/pull/6599).
- **Closed-source hosted backends**: [#6604 ReviewBot](https://github.com/docker/mcp-registry/pull/6604) and [#5445 xTiles](https://github.com/docker/mcp-registry/pull/5445) have no public source repository. [#6598 AllClear Lending](https://github.com/docker/mcp-registry/pull/6598) has none either.
- **Domain verticals**: finance ([#6360 canli-mcp](https://github.com/docker/mcp-registry/pull/6360)), network access control ([#6601 ClearPass Sidekick](https://github.com/docker/mcp-registry/pull/6601), 761 operations), commerce and leads ([#6596](https://github.com/docker/mcp-registry/pull/6596), [#6600 Aithon](https://github.com/docker/mcp-registry/pull/6600)), and time ([#6595 Cucutime](https://github.com/docker/mcp-registry/pull/6595)).

The underlying need is that vendors want distribution to MCP clients through Docker's catalog without shipping container images.

## 5. Bugs & Stability
No issues or bug-fix PRs were reported today. Nothing indicates a regression or crash.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions point to these signals:
- The `server.yaml` plus empty `tools.json` pattern for remote servers is now standard, and contributors reference an existing layout (`excalidraw-remote`) as a template.
- Dynamic tool discovery is in use ([#6597](https://github.com/docker/mcp-registry/pull/6597)), so the registry will likely need to keep supporting remote entries with no static tool list.
- Submissions cite the official MCP Registry ([#6604](https://github.com/docker/mcp-registry/pull/6604), [#6598](https://github.com/docker/mcp-registry/pull/6598), [#6595](https://github.com/docker/mcp-registry/pull/6595)). Closer integration or cross-validation with that registry is a plausible next step.
- Bundled multi-server submissions such as [#6602](https://github.com/docker/mcp-registry/pull/6602) may call for clearer guidance.

## 7. User Feedback Summary
There is no direct user feedback in the data. Contributors appear comfortable with the submission template, and the PR bodies follow its checklist. Many entries ask for public, no-signup access, which suggests contributors want low-friction onboarding. Some submissions are commercial or lead-generation services, which may raise catalog-quality and curation questions.

## 8. Backlog Watch
These PRs have waited longest among the visible open items and need maintainer attention:
- [#5445 xTiles remote MCP server](https://github.com/docker/mcp-registry/pull/5445): open since 2026-10-05 (about 30 days), with no source repository.
- [#6360 canli-mcp](https://github.com/docker/mcp-registry/pull/6360): open since 2026-10-30, still active.

The 4 closed PRs above were open about 4 months. With 46 open PRs and a steady stream of new ones, the registry would benefit from triage automation, SLA targets, and a review policy for closed-source remote servers. Only 20 of the 50 PRs were shown, so the actual backlog is likely larger than this digest captures.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-11-04

## 1. Today's Overview
The repository is active but almost entirely automated. Of 22 PRs updated in the last 24h, most are `github-actions[bot]` SHA bumps, and 16 are merged/closed. Three issues were updated and none was closed. There were no new releases. Human activity is light: one open fix PR, two rejected submission PRs and three issues. Several are about marketplace pin staleness. Stale pins are the main health signal today.

## 2. Releases
No new releases.

## 3. Project Progress
Closed PRs are mostly bot SHA-bump PRs. The data doesn't show whether they were merged or closed unmerged.
- Closed bumps: [#6873 zapier](https://github.com/anthropics/claude-plugins-official/pull/6873), [#6912 prisma](https://github.com/anthropics/claude-plugins-official/pull/6912), [#6880 dropbox](https://github.com/anthropics/claude-plugins-official/pull/6880), [#6936 crowdsec](https://github.com/anthropics/claude-plugins-official/pull/6936), [#6926 unreal-engine-skills-for-claude-code](https://github.com/anthropics/claude-plugins-official/pull/6926), [#6872 twilio-developer-kit](https://github.com/anthropics/claude-plugins-official/pull/6872), [#6852 lusha](https://github.com/anthropics/claude-plugins-official/pull/6852), [#6913 streaming-skills-plugin](https://github.com/anthropics/claude-plugins-official/pull/6913), [#6947 data-engineering](https://github.com/anthropics/claude-plugins-official/pull/6947), [#6946 data](https://github.com/anthropics/claude-plugins-official/pull/6946), [#6944 astronomer-data-agents](https://github.com/anthropics/claude-plugins-official/pull/6944), [#6948 microsoft-docs](https://github.com/anthropics/claude-plugins-official/pull/6948).
- Closed submissions: [#6986 ORION/Korpus MCP plugins](https://github.com/anthropics/claude-plugins-official/pull/6986) and [#6987 "CAT CLAW"](https://github.com/anthropics/claude-plugins-official/pull/6987), which has an empty body and looks like spam or a test.
- Several closed bumps (zapier, prisma, dropbox) were opened in late October and closed 8–12 days later. A newer bump for `lusha` ([#6990](https://github.com/anthropics/claude-plugins-official/pull/6990)) replaced the closed #6852, which suggests superseded bumps are being closed and re-issued.

## 4. Community Hot Topics
Comment counts are low everywhere (max 1), so there is no strong hot topic.
- [#6314 hookify PreToolUse block](https://github.com/anthropics/claude-plugins-official/issues/6314) is the only issue with a comment. The need is **actionable feedback to the model**. Without the block reason, the agent retries blindly.
- [#6992 cloudflare pin](https://github.com/anthropics/claude-plugins-official/issues/6992) and [#6984 Expo pin](https://github.com/anthropics/claude-plugins-official/issues/6984) show a theme: users want pins to **track upstream faster**.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6984](https://github.com/anthropics/claude-plugins-official/issues/6984), Expo pin ships a removed telemetry hook with an unbounded stdin read (1.13.9).** This is the most security- and privacy-relevant item. Upstream removed it in 1.13.12. No fix PR is linked.
2. **[#6314](https://github.com/anthropics/claude-plugins-official/issues/6314), hookify omits `permissionDecisionReason`.** Open since 2026-09-26, about 5.5 weeks. It degrades agent behavior. No fix PR is linked.
3. **[#6985](https://github.com/anthropics/claude-plugins-official/pull/6985), security-guidance SDK install.** A timed-out install leaves `pip-unpack-*` folders in temp and retries at every session start. The open PR is the fix.

## 6. Feature Requests & Roadmap Signals
- Updating the Expo and cloudflare pins is the most likely near-term action, since both are routine bump work.
- Surfacing hookify block reasons to the model looks like a small fix, but I can't predict timing from this data.
- The ORION/Korpus plugin submission was closed. Third-party plugin onboarding seems to go through a gated process, but the data doesn't give the reason.

## 7. User Feedback Summary
- Reporters are positive about the automation. [#6992](https://github.com/anthropics/claude-plugins-official/issues/6992) praises the nightly SHA-bump workflow and its per-plugin PRs for traceability.
- The pain point is **latency between a green bump PR and a merge**. Green checks alone don't get the PR merged.
- Reporters also want hook-based plugins to be transparent to the model (hookify) and free of unneeded telemetry (Expo).

## 8. Backlog Watch
- [#6443 cloudflare bump](https://github.com/anthropics/claude-plugins-official/pull/6443) has been open since 2026-10-11 (~24 days) with all checks green, per issue #6992. It needs a maintainer decision. It is not in today's PR list, so I couldn't check it directly.
- [#6480 hostinger bump](https://github.com/anthropics/claude-plugins-official/pull/6480) has been open since 2026-10-12 (~23 days).
- [#6314 hookify](https://github.com/anthropics/claude-plugins-official/issues/6314) has been open about 5.5 weeks with a single comment.
- Four new bumps opened today are still open: [#6991 redis-development](https://github.com/anthropics/claude-plugins-official/pull/6991), [#6990 lusha](https://github.com/anthropics/claude-plugins-official/pull/6990), [#6989 bigquery-data-analytics](https://github.com/anthropics/claude-plugins-official/pull/6989), [#6988 alloydb](https://github.com/anthropics/claude-plugins-official/pull/6988). Watch whether they follow the same pattern as the stale bumps.

**Health assessment:** Throughput is automated and steady, but human review is the bottleneck. Stale pins are reported by users, and the oldest open bumps are 3+ weeks old.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-04

## 1. Today's Overview
Awesome Claude Code saw high but purely intake-driven activity: 28 issues were updated in 24h (23 open, 5 closed) and there was no PR, merge or release activity. Nearly every item is a `resource-submission` issue. The validation bot is tagging most of them `validation-passed`. Maintainer-side processing, meaning merges and curation PRs, is not visible in today's data. Project health looks like strong community inflow with a possible curation lag.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were updated, merged or closed today.
- Five issues were closed. Four are `auto-closed` with `validation-pending` and are all duplicates or malformed submissions: [#3462](https://github.com/hesreallyhim/awesome-claude-code/issues/3462) (Hotel Team Skills), [#3461](https://github.com/hesreallyhim/awesome-claude-code/issues/3461) (Short Term Rental Team Skills), [#3454](https://github.com/hesreallyhim/awesome-claude-code/issues/3454) (stampede) and [#3450](https://github.com/hesreallyhim/awesome-claude-code/issues/3450) (Cubbi, resubmitted as [#3452](https://github.com/hesreallyhim/awesome-claude-code/issues/3452)).
- [#2210](https://github.com/hesreallyhim/awesome-claude-code/issues/2210) (Memory Playbook, opened 2026-07-11) was closed after validation passed. This is the only closure that looks like a completed resource decision.

## 4. Community Hot Topics
Engagement is low: the most-commented issues have only 2–3 comments, and none has any 👍.
- [#3456 active-memory](https://github.com/hesreallyhim/awesome-claude-code/issues/3456) (3 comments): a plugin for a 15-section handoff file. It reflects demand for **memory and context persistence across sessions**.
- [#3274 claude-code-kit](https://github.com/hesreallyhim/awesome-claude-code/issues/3274) (2 comments): a multi-purpose kit of skills, mods, hooks and a status line.
- [#2210 Memory Playbook](https://github.com/hesreallyhim/awesome-claude-code/issues/2210) (2 comments): a second memory-persistence submission.

Themes across the submissions:
- **Observability and usage monitoring**: [#3463 gas](https://github.com/hesreallyhim/awesome-claude-code/issues/3463), [#3458 Paneherd](https://github.com/hesreallyhim/awesome-claude-code/issues/3458), [#3452 Cubbi](https://github.com/hesreallyhim/awesome-claude-code/issues/3452), [#3445 Claude Discover](https://github.com/hesreallyhim/awesome-claude-code/issues/3445) and [#3439 claude-code-mods](https://github.com/hesreallyhim/awesome-claude-code/issues/3439). Users want visibility into plan limits, cost and session state.
- **Testing and verification**: [#3457 agent-roast](https://github.com/hesreallyhim/awesome-claude-code/issues/3457), [#3446 qa-agent-evals](https://github.com/hesreallyhim/awesome-claude-code/issues/3446) and [#3440 vibe-claude](https://github.com/hesreallyhim/awesome-claude-code/issues/3440). Users want to catch false "done" claims.
- **Security**: [#3453](https://github.com/hesreallyhim/awesome-claude-code/issues/3453) (privacy by design) and [#3444 ranwhat](https://github.com/hesreallyhim/awesome-claude-code/issues/3444) (secret leakage in agent histories).
- **Domain and vertical skills**: [#3374 B2B Marketing](https://github.com/hesreallyhim/awesome-claude-code/issues/3374), [#3448 Suede AI Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3448), [#3451 Gaffa Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3451), [#3460 Conference Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3460) and [#3442 Design Taste](https://github.com/hesreallyhim/awesome-claude-code/issues/3442).
- **Creative media and orchestration**: [#3459 SOMA](https://github.com/hesreallyhim/awesome-claude-code/issues/3459), [#3455 edit-reel](https://github.com/hesreallyhim/awesome-claude-code/issues/3455), [#3441 Setlist](https://github.com/hesreallyhim/awesome-claude-code/issues/3441), [#3443 konsil](https://github.com/hesreallyhim/awesome-claude-code/issues/3443), [#3449 Harneo](https://github.com/hesreallyhim/awesome-claude-code/issues/3449) and [#3447 SpecStream](https://github.com/hesreallyhim/awesome-claude-code/issues/3447).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only process-quality signals are:
- **Duplicate submissions**: Cubbi was filed twice ([#3450](https://github.com/hesreallyhim/awesome-claude-code/issues/3450), [#3452](https://github.com/hesreallyhim/awesome-claude-code/issues/3452)), and submitter AmilleAgawin filed three near-identical Bart Cant skill packs (#3460–#3462).
- **Template problem**: [#3460](https://github.com/hesreallyhim/awesome-claude-code/issues/3460) has the placeholder title `<name of your resource>`, so the form title was not filled in. It passed validation anyway.
- **Category oddity**: all three AmilleAgawin submissions use the "Start Here" category, which looks mis-chosen for vertical skill packs.

No fix PRs exist or are needed.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Submission volume suggests where the list may grow:
- **Observability and Usage & Cost** is the busiest category (5 submissions, including sub-categories such as Session Monitors).
- **Memory and Context Persistence**, **Testing**, and **Skills** also show recurring entries.
- Some submissions suggest category gaps. Healthcare ([#3443](https://github.com/hesreallyhim/awesome-claude-code/issues/3443)) and hospitality or vacation-rental skills ([#3462](https://github.com/hesreallyhim/awesome-claude-code/issues/3462), [#3461](https://github.com/hesreallyhim/awesome-claude-code/issues/3461)) may need a vertical-domain home. Cross-agent tools such as Cubbi and ranwhat, which cover Codex and 29 other agents, also lack an obvious category.

## 7. User Feedback Summary
Submitters show these pain points:
- **Cost and limit anxiety**: tools like gas and claude-code-mods exist to show plan limits and context fill.
- **Trust in agent output**: users want hooks that verify exit codes and review diffs before a task counts as finished.
- **Session continuity**: handoff files and two-tier memory systems point to context loss across sessions.
- **Multi-agent supervision**: tools such as Paneherd and Cubbi show that running parallel agents is now routine.
- **Security hygiene**: submissions address secrets left in agent histories on disk.

Nobody gave direct satisfaction or dissatisfaction feedback. All 👍 counts are 0.

## 8. Backlog Watch
- [#3274 claude-code-kit](https://github.com/hesreallyhim/awesome-claude-code/issues/3274) was opened 2026-10-26, has passed validation, and is still open after 9 days.
- [#3374 B2B Marketing Playbooks](https://github.com/hesreallyhim/awesome-claude-code/issues/3374) was opened 2026-10-30, has passed validation, and is still open after 5 days.
- Items from 2026-11-03 and 2026-11-04 are all `validation-passed` and open (about 20), a queue that needs maintainer review.
- No PRs were updated today, so it is unclear whether any accepted resources are being merged into the list. Maintainers should confirm that the curation pipeline from `validation-passed` to merge is not stalled.
- [#3460](https://github.com/hesreallyhim/awesome-claude-code/issues/3460) needs a title fix and a category check.

**Health assessment**: community interest is strong and automated validation works, but there are no merges and no engagement beyond submissions.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Project Digest — 2026-11-04

## 1. Today's Overview
Awesome Agent Skills (VoltAgent/awesome-agent-skills) is a curated list, so its activity is almost entirely community submissions. In the last 24h there were 1 issue and 7 PR updates, with no releases. Six PRs are open and all but one are new "add skill" submissions. One older PR was closed. Activity is steady but queue-driven: there is little maintainer-side signal today, and every item has 0 reactions and no visible comments.

## 2. Releases
No new releases.

## 3. Project Progress
- Closed today: [#1187](https://github.com/VoltAgent/awesome-agent-skills/pull/1187) "docs: fix REA skill source link" (by morluto, opened 2026-10-10, closed 2026-11-03). It proposed repointing the Reverse-Engineer-Anything entry to `.agents/skills/reverse-engineer-anything` after upstream moved it, since the old path 404s (refs #870). The data doesn't say whether it was merged or closed unmerged. If it was closed without merging, the broken link may still be live.
- No other PRs merged in this window, so the list itself did not advance today.

## 4. Community Hot Topics
No item has comments or reactions, so there are no hot threads. The most notable items are:
- [#1351](https://github.com/VoltAgent/awesome-agent-skills/issues/1351): reports a stale third-party listing of the removed OpenAI `frontend-skill`. It is the only issue today and has a concrete, verifiable defect.
- [#1350](https://github.com/VoltAgent/awesome-agent-skills/pull/1350) (antvis/ava): an AntV data-analysis and charting skill from an established visualization vendor. It fits the data/scientific-analysis grouping in Specialized Domains.
- [#1349](https://github.com/VoltAgent/awesome-agent-skills/pull/1349) (GaffaAI/gaffa-for-ai): four browser-automation skills for the Gaffa REST API, distributed via the Gaffa CLI and npm.

The submissions point to demand for domain-specific skills (genealogy, academic translation, data visualization, GTM marketing) and for web and browser automation.

## 5. Bugs & Stability
- **Low severity, a content/link-rot issue:** [#1351](https://github.com/VoltAgent/awesome-agent-skills/issues/1351). The issue says officialskills.sh still lists OpenAI's `frontend-skill` with an install command (`npx skills add https://github.com/openai/skills --skill frontend-skill`) pointing at a directory that has been removed upstream. The listing is on officialskills.sh, not in this repo's README as far as the data shows. No fix PR is linked, and the maintainers may need to relay it to that site or check whether this repo links to the same skill.
- Related link-rot: [#1187](https://github.com/VoltAgent/awesome-agent-skills/pull/1187) (see above) addressed a 404 on the REA entry. Together the two suggest upstream skill moves and removals regularly break listings.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. The implicit signals are:
- Growth in **Community Skills → Specialized Domains**, which received at least three of today's submissions ([#1352](https://github.com/VoltAgent/awesome-agent-skills/pull/1352), [#1350](https://github.com/VoltAgent/awesome-agent-skills/pull/1350), plus the link-only [#1348](https://github.com/VoltAgent/awesome-agent-skills/pull/1348)). The category may eventually need subdividing, for example data/analytics versus research/academic. That is an inference, not something requested.
- Marketing ([#1347](https://github.com/VoltAgent/awesome-agent-skills/pull/1347)) and verification/reasoning tooling ([#1346](https://github.com/VoltAgent/awesome-agent-skills/pull/1346)) are further niches seeing entries.
- A link-health check (automated 404 detection) would help given the recurring link-rot. This is my suggestion, not a user request.

## 7. User Feedback Summary
- Contributors follow the repo's convention: each adds a single entry at the end of a category, and several state the install path and license, such as MIT on [#1349](https://github.com/VoltAgent/awesome-agent-skills/pull/1349).
- Some submissions look like newer projects. For example, #1349 notes its repo was created in June 2026, which may be relevant to the list's inclusion criteria.
- [#1347](https://github.com/VoltAgent/awesome-agent-skills/pull/1347) is titled "Update README.md" rather than the "Add skill: …" format the others use, so it may not follow the contribution guidelines.
- The issue reporter in #1351 cares about install commands that actually work, which shows users rely on these listings for one-command installation.

## 8. Backlog Watch
- All six open PRs ([#1346](https://github.com/VoltAgent/awesome-agent-skills/pull/1346), [#1347](https://github.com/VoltAgent/awesome-agent-skills/pull/1347), [#1348](https://github.com/VoltAgent/awesome-agent-skills/pull/1348), [#1349](https://github.com/VoltAgent/awesome-agent-skills/pull/1349), [#1350](https://github.com/VoltAgent/awesome-agent-skills/pull/1350), [#1352](https://github.com/VoltAgent/awesome-agent-skills/pull/1352)) were created on 2026-11-03 or 2026-11-04. They show no review comments and need a first maintainer pass.
- [#1187](https://github.com/VoltAgent/awesome-agent-skills/pull/1187) waited about 3.5 weeks (2026-10-10 to 2026-11-03) before closing. That points to a slow review turnaround for small link-fix PRs.
- PR numbers have reached about #1352, which suggests a large submission volume. The data covers only the last 24h, so I can't say whether older PRs or issues are stalled. Maintainers should check the full open list for PRs that have waited a long time.

**Health assessment:** Contribution inflow is strong, but visible review throughput is low (no merges today, no comments on any item). The main risk is the review backlog and link rot, not code stability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
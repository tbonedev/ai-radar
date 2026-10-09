# MCP Ecosystem Digest 2026-10-09

> Issues: 6 | PRs: 0 | Projects covered: 7 | Generated: 2026-10-09 14:05 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest, 2026-10-09

## 1. Today's Overview
Activity was low. Six issues were updated in the last 24 hours, all still open. There were no PRs, no merges and no releases. The updates fall into three groups: tool-annotation and description quality (#5058, #5071), v2 spec-refactor tracking (#4852), and small bugs in the `time` and `fetch` servers (#5060, #4914). Maintainers appear to be concentrating on the 2026-07-28 spec migration. Without PR activity, none of these issues has a fix in flight.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours, so no features or fixes landed. The v2 refactor continues only as planning and tracking. [#4852](https://github.com/modelcontextprotocol/servers/issues/4852) (Wave 4 Part 1) covers moving the TypeScript servers to the "modern era" (serving 2026-07-28 clients and 2025-era clients from the same endpoint) and adding new features to `everything`. It depends on the TS SDK v2 migration in #4856 and is part of tracker #4857.

## 4. Community Hot Topics
- **[#5058](https://github.com/modelcontextprotocol/servers/issues/5058)** (5 comments, the most active). The `memory` server marks `create_entities`, `create_relations` and `add_observations` as `destructiveHint: false`. Every call rewrites the whole JSONL file from the parsed graph, so data the current schema doesn't recognize can be dropped. The underlying need is that annotations should be accurate, because clients use them to decide when to ask for user confirmation. A wrong hint means silent data loss without a prompt.
- **[#5071](https://github.com/modelcontextprotocol/servers/issues/5071)** (2 comments, updated today). The tool descriptions for `list_directory` vs `list_directory_with_sizes` (filesystem) and `delete_entities` vs `delete_relations` (memory) are too similar for a model to pick the right one. The need is clearer descriptions for model-facing tool selection. This is a cheap fix, and the reference servers are widely used as templates.
- **[#4852](https://github.com/modelcontextprotocol/servers/issues/4852)** (1 comment). This is the v2 roadmap item with the largest scope in the list.

## 5. Bugs & Stability
Ranked by severity:
1. **[#5058](https://github.com/modelcontextprotocol/servers/issues/5058), `memory` data loss with a misleading annotation.** It can cause silent loss of data the schema doesn't recognize, and the annotation hides the risk from clients. No fix PR.
2. **[#4914](https://github.com/modelcontextprotocol/servers/issues/4914), `fetch` prompt with an invalid URL.** The prompt handler catches only `McpError`, so a malformed URL surfaces as JSON-RPC error code 0 with the raw exception text. The `fetch` tool, by contrast, returns a clean `isError: true` result. This is an error-handling inconsistency, and it may leak exception text. No fix PR.
3. **[#5060](https://github.com/modelcontextprotocol/servers/issues/5060), `time` test fails on macOS.** `test_get_current_time_errors` expects `europe/warsaw` to be rejected, but macOS's case-insensitive tz database accepts it. It passes on Linux CI. The effect is that `npm run local:gate` can't exit 0 on macOS. Only the local developer workflow is affected, not production. No fix PR.

## 6. Feature Requests & Roadmap Signals
- The v2 spec refactor (#4852, #4856, #4857) is the main roadmap signal. Modern-era TypeScript servers and an expanded `everything` server are the likely next milestones, though they are gated on the SDK v2 migration.
- Tool-metadata cleanup (#5058, #5071) is a plausible near-term fix, since it needs only small changes to annotations and descriptions.
- [#5072](https://github.com/modelcontextprotocol/servers/issues/5072) asks to add the AegisGate MCP framework to `ADDITIONAL.md`. It is a documentation request that doesn't affect the roadmap. Whether it is accepted depends on the project's policy for third-party listings.

## 7. User Feedback Summary
The feedback concerns correctness of metadata and consistency of errors, not missing functionality:
- Reporters expect annotations to match what the code does (#5058).
- Models struggle to choose between similarly described tools (#5071).
- Error behavior is inconsistent between the `fetch` tool and the `fetch` prompt (#4914).
- Contributors on macOS can't get a clean local gate run (#5060).

## 8. Backlog Watch
- **[#4852](https://github.com/modelcontextprotocol/servers/issues/4852)** has been open since 2026-09-26 and is blocked by #4856. It needs a maintainer to unblock it.
- **[#4914](https://github.com/modelcontextprotocol/servers/issues/4914)** has been open since 2026-09-30 with a precise diagnosis (`server.py:262-267`). A small PR could fix it.
- **[#5058](https://github.com/modelcontextprotocol/servers/issues/5058)** is a data-integrity concern. It deserves prompt triage, either by correcting the hint or by making writes preserve unknown fields.
- **[#5072](https://github.com/modelcontextprotocol/servers/issues/5072)** has had no comments or triage yet.

**Health assessment:** Issue intake is steady and the reports are specific and actionable. PR throughput was zero in this window, and the fixes for #5058, #4914 and #5060 are small enough to land quickly.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison, 2026-10-09

Source: community digests for 7 projects. Where the digests omit data (comment counts, merge vs. close status), this report says so and does not guess.

## 1. Ecosystem Overview

The MCP landscape has split into two layers. A small **core layer** (Servers, Registry) is slow-moving and spec-driven. The 2026-07-28 spec migration is the main item. Around it sits a large **distribution layer**: awesome-lists, the Docker catalog, the Claude marketplace and skill lists. Submission demand there far exceeds review capacity. The submissions are shifting toward remote servers (Streamable HTTP, OAuth 2.1) and toward security, memory and vertical-domain tooling. Skills are becoming a parallel packaging format that is portable across Claude, Codex, Cursor and Pi. Review throughput and catalog integrity are the common weaknesses.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my assessment) |
|---|---|---|---|---|
| MCP Servers | 6 (all open) | 0 | None | **Fair.** Intake is steady, but PR throughput is zero. Fixes are small and unassigned. |
| MCP Registry | 1 (closed) | 2 (1 closed, 1 open) | None | **Good.** It is stable and low-volume. The hard-delete gap in #1693 is unresolved. |
| Awesome MCP Servers | 0 | 500 (461 open, 39 merged/closed) | None | **Strained.** Demand is very high, and the backlog has PRs from June. |
| Docker MCP Registry | 0 | 50 (all open) | None | **Strained.** 0% merge rate in the window, and bot PRs from Nov 2025 are still open. |
| Claude Plugins (official) | 6 | 18 (10 closed/merged, 8 open) | None | **Good, with risks.** Maintainers are active. Open items: an XSS (#6363), 54 plugins failing install (#2032), and the nightly bump workflow disabled since 2026-09-17. |
| Awesome Claude Code | 1 (closed) | 6 (5 closed/merged, 1 open) | None | **Very good.** Intake is automated and fast, with no bugs reported. |
| Awesome Agent Skills | 0 | 7 (6 open, 1 closed) | None | **Fair.** Intake is steady, but there were no merges and no maintainer response. |

Health scores are my own judgment from one day of data. The digests give no numeric scores.

## 3. MCP Servers' Position

**Advantages**
- It is the **reference implementation**. Other projects follow its conventions: tool annotations, descriptions and the v2 spec. Templates copied from it spread its flaws as well (#5071).
- Its issues are **specific and actionable**, with precise diagnoses such as `server.py:262-267` in #4914.

**Technical approach**
- It is the only code project in the group. The others are curated lists, catalogs or marketplaces that handle metadata, not runtime behavior.
- Its concerns are **protocol correctness**: annotation accuracy (#5058), error consistency (#4914) and spec-era compatibility (#4852).

**Community size**
- It has the **smallest visible activity** in the set: 6 issues and 0 PRs, compared with 500 PRs for Awesome MCP Servers and 50 for Docker.
- This count is activity in one day, not community size. It does suggest that the core is maintained by few people while the edge grows quickly.

**Weakness:** zero PR throughput means three small, well-diagnosed fixes (#5058, #4914, #5060) are all unaddressed. #5058 is a data-integrity risk.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| **Security and trust** | Awesome MCP Servers, Docker, Claude Plugins, Registry, Servers | Firewall, secret-handling and tool-pinning entries (#14441, #16046, #15692). Unauthenticated or closed-source remote servers in Docker (#4868, #5569, #5567). XSS in #6363. Leaked repo URL in Registry #1693. Misleading `destructiveHint` in Servers #5058. |
| **Remote servers and OAuth 2.1** | Docker, Awesome MCP Servers, Registry | Streamable HTTP and PKCE are the default pattern (Docker #5571, #5570). Alibaba's remote endpoints in the Registry (#1699). The lists lack conventions for remote vs. local. |
| **Catalog integrity and automation** | Claude Plugins, Docker, Awesome MCP Servers | 54 of 203 plugins fail install (#2032). The bump workflow is disabled. Stale bot pins in Docker. Bot labels (`missing-glama`) gate list entries. |
| **Cross-host portability** | Agent Skills, Claude Code, Claude Plugins | `.claude-plugin`, `.codex-plugin` and `.cursor-plugin` manifests (#1177). OpenRig spans Claude Code, Codex and Pi. A Codex install problem appears in #2032. |
| **Memory and coding-agent tooling** | Awesome MCP Servers, Agent Skills, Claude Code | Memory servers, SkillVault, multi-account management, verification skills such as agent-verifier (#1178). |
| **Metadata quality for model use** | Servers, Claude Plugins | Tool descriptions that models can tell apart (#5071). Configurable LSP options (#1901). |

## 5. Differentiation Analysis

- **Servers and Registry** are the authoritative layer. Servers is code and spec reference. Registry holds publisher metadata for `server.json`. Their users are server authors and client implementers.
- **Awesome MCP Servers and Docker MCP Registry** are both large discovery layers. Awesome lists are PR-to-README, with bot validation. Docker is a containerized, pinned-commit catalog that is moving toward remote endpoints. Docker has the stricter supply-chain model, and the stricter model creates a larger review burden.
- **Claude Plugins (official)** is a vendor-curated marketplace with SHA pinning and partner bumps. It has the most active maintainers of the group and the clearest security process, but also an install-validation problem.
- **Awesome Claude Code and Awesome Agent Skills** curate **skills and workflows** for Claude Code and similar agents, not servers. Claude Code's list has the cleanest pipeline (issue → validation → PR). Agent Skills is the most cross-vendor, with bulk conversions such as 265 `.cursorrules` skills (#1174).

## 6. Community Momentum & Maturity

- **Tier 1, high volume and rapid iteration:** Awesome MCP Servers (500 PRs), Docker MCP Registry (50 PRs). Both are inflow-dominated, and their review capacity is not keeping up.
- **Tier 2, active maintenance:** Claude Plugins (18 PRs, maintainer-driven), Awesome Claude Code (automated intake), Awesome Agent Skills (steady, unreviewed).
- **Tier 3, stabilizing or slow:** MCP Servers (spec-migration planning, no merges), MCP Registry (low volume).
- **Rapidly iterating topics:** security entries, remote servers, skills packaging.
- **Maturing:** the Registry and Servers cores. Their open questions are lifecycle ones, such as hard-delete and annotation accuracy.
- **Caveat:** the Docker digest covers only the top 20 of 50 PRs, and comment counts are missing in several digests. Engagement can't be compared across projects.

## 7. Trend Signals

1. **MCP is becoming a hosted-service protocol.** Remote servers with OAuth 2.1 and PKCE dominate new Docker submissions. Even paid access (x402, #5567) is appearing. Developers should plan for auth, rate limits and payment flows, not just stdio.
2. **Security is now a product category.** Output firewalls, secret brokers and tool-contract pinning are all new list entries. A misreported annotation (#5058) or a leaked field (#1693) shows the same risk from the other side. Audit your own tool annotations and treat third-party catalog entries as untrusted.
3. **Skills are converging on a portable format.** Multi-host manifests and bulk conversions suggest SKILL.md-style packaging is becoming a de facto standard. Write skills so they are not tied to one host.
4. **Review capacity limits the ecosystem.** Listing in a catalog is not a quality signal. Prefer listings with automated validation, such as pinned SHAs, bot labels and install checks, and expect delays.
5. **Agents are producing the submissions.** The 🤖🤖🤖 marker, "co-developed with Cursor" (#1699) and bot-run pipelines suggest much of the inflow is agent-assisted. Registries will likely need automated provenance and quality gates.
6. **Model-facing metadata is part of the interface.** Tool names and descriptions affect tool selection by models (#5071). Test them with real model selection, not just against a schema.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) Digest, 2026-10-09

## 1. Today's Overview
Activity was low over the last 24 hours: 1 issue and 2 PRs were updated, and there were no new releases. The one issue was closed, and one of the two PRs was closed as invalid. The other PR is still open. Nothing reported today is a bug or regression. The items are routine registry operations: a data-removal request and two server-metadata submissions. The project looks stable and is mostly handling registry maintenance.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One PR was closed:
- [PR #1699](https://github.com/modelcontextprotocol/registry/pull/1699), "[invalid] Add Alibaba Cloud CloudMonitor remote server metadata." It was submitted by barnettZQG and closed the same day. It proposed registry entries for the hosted CloudMonitor MCP endpoints on the China and international sites. The "[invalid]" tag in the title suggests it failed validation or a contribution check. The summary says it was co-developed with Cursor, so it may have been generated or assisted by AI tooling. The data doesn't give the closure reason, so that is only an inference.

## 4. Community Hot Topics
Engagement was thin. No item has more than 1 comment or any 👍 reactions.
- [Issue #1693](https://github.com/modelcontextprotocol/registry/issues/1693), a request to hard-remove an accidentally published version. It has 1 comment and was closed on 2026-10-09, two days after it was opened. A server.json for `com.mocoapp.api/mcp` v1.0.0 exposed the `repository.url` of a private GitHub repo. The version is already marked deleted/flagged, but the leaked field apparently remains retrievable. The underlying need is a way to purge a published version's data, not just soft-delete it, when a mistake exposes sensitive metadata.
- [PR #1698](https://github.com/modelcontextprotocol/registry/pull/1698), "Create server.json for MCP server configuration." It adds a server.json and still has the template placeholders unfilled. Its comment count isn't available in the data.

## 5. Bugs & Stability
No crashes or regressions were reported. The closest item is a data-hygiene and security concern:
- **Medium:** [Issue #1693](https://github.com/modelcontextprotocol/registry/issues/1693). Soft-deleted versions appear to keep their metadata, so private repository URLs can stay exposed. It is closed, and no linked fix PR is listed. The summary doesn't say whether maintainers purged the data or declined. This is worth confirming for similar cases.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Issue #1693 hints at a possible need: a documented or self-service process for hard-deleting versions, or a pre-publish warning about private repository URLs. Neither is confirmed as planned, so I wouldn't predict either for the next release.

## 7. User Feedback Summary
- Publishers can make mistakes at publish time. They need a clear remediation path for accidental leaks (#1693).
- Contributors seem to be unsure about the submission requirements. The "[invalid]" PR and the unfilled template in #1698 both point that way.
- Vendors such as Alibaba Cloud want their hosted remote MCP endpoints listed, which shows continued ecosystem interest in the registry.

## 8. Backlog Watch
- [PR #1698](https://github.com/modelcontextprotocol/registry/pull/1698) is open and was created 2026-10-08. It needs a maintainer to review it, or to ask the author to fill in the template and confirm that the server.json is valid. It is not stale yet.
- No older unanswered issues appear in today's data. This window doesn't show the wider backlog, so I can't assess long-standing items from it.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-09

## 1. Today's Overview
Activity is high, and it comes entirely from pull requests. The repo had 0 issue updates and 0 new releases, which fits a curated list with no versioned releases. The 500 PRs updated in the last 24h split into 461 open and 39 merged or closed. Most are new-entry submissions, so contributor demand is strong and the review queue keeps growing. The comment counts in the data are all "undefined", so engagement can't be ranked from comments or 👍 (all 0). The data doesn't say whether maintainers are discussing PRs, so this digest ranks items by recency and category.

## 2. Releases
No new releases.

## 3. Project Progress
- 39 PRs were merged or closed today. The data lists only one: [#15856](https://github.com/punkpeye/awesome-mcp-servers/pull/15856), "Add workbuddy-board", which is **CLOSED**. It is a desktop always-on-top task board MCP server with 15 tools (`create_task`, `move_task`, `update_progress`, `list_stalled`, and others) and uses only the Python standard library. The data doesn't say whether it was merged or closed without merging, so I can't confirm it was added to the list.
- The other 38 closed or merged PRs aren't in the top-20 sample, so I can't describe them.

## 4. Community Hot Topics
Comment and reaction counts aren't available, so "hot" here means recently active submissions that show the main themes:

| Theme | PRs | Underlying need |
|---|---|---|
| **Security / agent safety** | [#14441](https://github.com/punkpeye/awesome-mcp-servers/pull/14441) mcp-output-firewall (prompt-injection and exfiltration inspection), [#16046](https://github.com/punkpeye/awesome-mcp-servers/pull/16046) sealkeep (secrets the agent can use but not see), [#15692](https://github.com/punkpeye/awesome-mcp-servers/pull/15692) rugsnare (tool-contract pinning and drift detection) | Defenses against prompt injection, secret leakage and tool-definition tampering as MCP use grows |
| **Memory & knowledge for coding agents** | [#14528](https://github.com/punkpeye/awesome-mcp-servers/pull/14528) turbo_quant_memory, [#14684](https://github.com/punkpeye/awesome-mcp-servers/pull/14684) Laika Orbit recall, [#14707](https://github.com/punkpeye/awesome-mcp-servers/pull/14707) q-skillvault | Persistent, token-efficient context and issue-to-PR automation |
| **Vertical or business servers** | [#16048](https://github.com/punkpeye/awesome-mcp-servers/pull/16048) BitVisual (e-commerce), [#12672](https://github.com/punkpeye/awesome-mcp-servers/pull/12672) Corpus Law, [#14546](https://github.com/punkpeye/awesome-mcp-servers/pull/14546) health4ai, [#16047](https://github.com/punkpeye/awesome-mcp-servers/pull/16047) AEC Model Bridge (Revit), [#13888](https://github.com/punkpeye/awesome-mcp-servers/pull/13888) ictfax-mcp, [#11878](https://github.com/punkpeye/awesome-mcp-servers/pull/11878) DocuQueue | MCP is spreading into legal, health, AEC, fax and print |
| **Desktop and media** | [#14765](https://github.com/punkpeye/awesome-mcp-servers/pull/14765) settled-computer (event-driven settling for computer use), [#15458](https://github.com/punkpeye/awesome-mcp-servers/pull/15458) imagic, [#13463](https://github.com/punkpeye/awesome-mcp-servers/pull/13463) claudeimagine-mcp | Reliable computer use and media workflows |
| **Bulk submissions** | [#10959](https://github.com/punkpeye/awesome-mcp-servers/pull/10959) (17 Ace Data Cloud servers, labelled `manual-review`), [#15966](https://github.com/punkpeye/awesome-mcp-servers/pull/15966) | Vendors listing whole portfolios, which creates review load |

## 5. Bugs & Stability
No issues were reported, and no bug or regression is visible in the data. The only stability signal is process-related. PRs [#8992](https://github.com/punkpeye/awesome-mcp-servers/pull/8992) and [#13888](https://github.com/punkpeye/awesome-mcp-servers/pull/13888) carry `merge-conflict` labels, because the README is edited by every PR and conflicts are frequent. Many PRs also carry `missing-glama` or `missing-emoji`, which are validation failures the contributor needs to fix.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions point to where the list is likely to grow:
- **Security** is the strongest signal, with three new entries in one day. A sub-categorization or a dedicated security-vetting policy may follow.
- **Memory and coding-agent tooling** keeps growing.
- **Remote servers (Streamable HTTP, OAuth 2.1)** are increasingly common, for example [#13463](https://github.com/punkpeye/awesome-mcp-servers/pull/13463) and [#16048](https://github.com/punkpeye/awesome-mcp-servers/pull/16048). The list may need clearer conventions for remote versus local entries.
- Heavy automated labelling (`has-glama`, `valid-name`, `has-emoji`) suggests validation is moving toward bot-driven gating.

## 7. User Feedback Summary
No direct user feedback was posted today. Contributor behaviour suggests these pain points:
- Many PRs fail the Glama-listing check (`missing-glama`), which suggests the requirement is a common stumbling block.
- Old PRs stay open and go stale. [#8992](https://github.com/punkpeye/awesome-mcp-servers/pull/8992) was created on 2026-06-30 and is still open.
- Several authors note that their server needs separate accounts or deployments, for example [#15966](https://github.com/punkpeye/awesome-mcp-servers/pull/15966), which requires a separately deployed Discord Agent Proxy. They are trying to be clear about requirements.
- The 🤖🤖🤖 marker in many titles suggests a large share of submissions are agent-assisted.

## 8. Backlog Watch
With 461 open PRs, the backlog is the main health risk. Items that need maintainer attention, oldest first:
- [#8992](https://github.com/punkpeye/awesome-mcp-servers/pull/8992) skillme (Developer Tools): open since 2026-06-30, merge conflict, missing Glama.
- [#10959](https://github.com/punkpeye/awesome-mcp-servers/pull/10959) 17 Ace Data Cloud servers: open since 2026-07-26, flagged `manual-review`, and needs a decision because of its size.
- [#11878](https://github.com/punkpeye/awesome-mcp-servers/pull/11878) DocuQueue: open since 2026-08-10, with all checks passing.
- [#12672](https://github.com/punkpeye/awesome-mcp-servers/pull/12672) Corpus Law: open since 2026-08-22.
- [#13463](https://github.com/punkpeye/awesome-mcp-servers/pull/13463) claudeimagine-mcp: open since 2026-09-02.
- [#13888](https://github.com/punkpeye/awesome-mcp-servers/pull/13888) ictfax-mcp: open since 2026-09-07, merge conflict with all other checks passing, so it only needs a rebase.

PRs that pass all checks (`has-emoji`, `valid-name`, `has-glama`) such as [#11878](https://github.com/punkpeye/awesome-mcp-servers/pull/11878), [#14441](https://github.com/punkpeye/awesome-mcp-servers/pull/14441) and [#14546](https://github.com/punkpeye/awesome-mcp-servers/pull/14546) are the easiest to merge and would clear the queue fastest.

**Health summary:** Contributor interest is strong, but review throughput looks well below submission volume. The queue is aging, with some PRs open for more than three months, so the project would benefit from batch merging, automated rebasing, or more reviewers.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-09

## 1. Today's Overview
The registry saw heavy submission activity and no maintainer output. Fifty PRs were updated in the last 24 hours and all 50 are still open. There were no merges, closures, releases or issue activity. Most of the new PRs are remote-server submissions (Streamable HTTP, often OAuth 2.1), and the rest are bot-generated pin updates. Community interest is high, but the review pipeline is not keeping up. Pin-update PRs from `mcp-registry-bot[bot]` dating back to November 2025 are still open.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features advanced and no fixes landed. Today's output is entirely new submissions waiting for review.

## 4. Community Hot Topics
The data shows `Comments: undefined` and 0 👍 for every item, so I can't rank by discussion. The most notable items are the newest submissions and the ones that were updated again today:

- [#5572 AbuzzHive](https://github.com/docker/mcp-registry/pull/5572) is a remote Q&A board where agents look up errors that other agents have already solved. It points to demand for shared agent knowledge.
- [#5571 Dataddo Data to AI](https://github.com/docker/mcp-registry/pull/5571) is a remote server with OAuth 2.1, dynamic client registration, PKCE and RFC 9728 metadata. It shows enterprise data vendors adopting current MCP auth standards.
- [#5570 Mini Course Generator](https://github.com/docker/mcp-registry/pull/5570) is a remote server (OAuth 2.1) for building and tracking micro-courses.
- [#5569 /call-me](https://github.com/docker/mcp-registry/pull/5569) lets an agent ring the user's iPhone.
- [#5567 Tanod](https://github.com/docker/mcp-registry/pull/5567) uses x402 USDC payments after a free daily allowance. It is an early sign of agent-native monetization.
- Other new remote submissions are [#5566 Datacircle](https://github.com/docker/mcp-registry/pull/5566) (B2B/LinkedIn data), [#5568 Fincept](https://github.com/docker/mcp-registry/pull/5568) (finance), [#5565 Calorie API](https://github.com/docker/mcp-registry/pull/5565), [#5564 OutSend](https://github.com/docker/mcp-registry/pull/5564) (lead generation) and [#5440 JANCTION Render](https://github.com/docker/mcp-registry/pull/5440) (GPU Blender rendering).

**Underlying need:** vendors want a presence in Docker's catalog for their hosted services. Most are not asking to be containerized. The registry is turning into a directory for remote endpoints, and that changes how it should be reviewed and secured.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and no issues were filed.

Some of today's PRs carry risks for reviewers:
- [#5566 Datacircle](https://github.com/docker/mcp-registry/pull/5566) and [#5568 Fincept](https://github.com/docker/mcp-registry/pull/5568) are closed-source hosted servers, so their behavior can't be audited from the repo.
- [#4868 HCRB](https://github.com/docker/mcp-registry/pull/4868) is a remote server with no authentication.
- [#5569 /call-me](https://github.com/docker/mcp-registry/pull/5569) has no OAuth or API key and can place phone calls.
- [#5567 Tanod](https://github.com/docker/mcp-registry/pull/5567) has no OAuth and takes payments.

These are policy questions for reviewers, not reported defects.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. The submissions suggest where the catalog is heading:
- Remote (`type: remote`) servers are the dominant format, with 11 of the 20 PRs shown being remote submissions.
- OAuth 2.1 with PKCE is becoming the standard auth pattern.
- Paid and metered tool access (x402) is appearing.
- Local stdio servers are still arriving, for example [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240), which pins a commit and builds from a Dockerfile.

The registry will probably need clearer policy for closed-source remote servers, payment-based servers and unauthenticated endpoints.

## 7. User Feedback Summary
There is no direct user feedback in the data: no comments, reactions or issues. Submitter behavior shows the following:
- Several PRs disclose their affiliation (for example #5567, "I maintain Tanod") or note that the server is hosted and closed-source. That suggests submitters are aware of the review criteria.
- The use cases are practical: job applications ([#4958 AI Applyd](https://github.com/docker/mcp-registry/pull/4958)), video ads, lead generation, finance data and nutrition data.
- The wait for review is the likely pain point. The oldest feature-submission PR touched today, [#4868](https://github.com/docker/mcp-registry/pull/4868), was opened on 2026-09-01.

## 8. Backlog Watch
These items need maintainer attention:
- **Stale bot pin updates:** [#529 ramparts](https://github.com/docker/mcp-registry/pull/529) (2025-11-03), [#1152 flexprice](https://github.com/docker/mcp-registry/pull/1152) (2026-02-17) and [#2743 aws-cdk-mcp-server](https://github.com/docker/mcp-registry/pull/2743) (2026-04-18). Also [#4351](https://github.com/docker/mcp-registry/pull/4351), [#4359](https://github.com/docker/mcp-registry/pull/4359), [#4361](https://github.com/docker/mcp-registry/pull/4361) and [#4369](https://github.com/docker/mcp-registry/pull/4369), all from 2026-07-09. Servers whose pins are never updated may fall behind upstream security and bug fixes. Merging or closing these would be a quick win.
- **Aging submissions:** [#4868 HCRB](https://github.com/docker/mcp-registry/pull/4868) (about 5.5 weeks old), [#4958 AI Applyd](https://github.com/docker/mcp-registry/pull/4958) (about 4.5 weeks) and [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240) (about 2 weeks). All have been open with zero recorded comments or reactions.

**Health assessment:** Community inflow is strong, but the 0% merge rate in this window and the months-old bot PRs point to a review bottleneck. Triage automation, auto-merging pin updates or a documented policy for remote servers would likely help.

*Caveat: the digest covers only the top 20 of 50 PRs. Comment counts were not populated.*

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-10-09

## 1. Today's Overview
Activity was moderate and mostly routine marketplace upkeep. 18 PRs and 6 issues were updated, and there were no releases. Most PR traffic is manual SHA bumps for partner plugins, which maintainers are doing by hand because the nightly bump workflow has been disabled since 2026-09-17. Of the 18 PRs, 10 were merged or closed and 8 are still open. The open ones are mostly pending partner bumps and one `security-guidance` change. Two security and reliability issues deserve attention: an XSS in the skill-creator eval viewer (#6363) and 54 marketplace plugins that fail install validation (#2032).

## 2. Releases
No new releases.

## 3. Project Progress
Closed or merged PRs today:
- **Bug fix: receipts.** [#6390](https://github.com/anthropics/claude-plugins-official/pull/6390) (by claude[bot]) makes the receipts transcript miner query every local clone when counting commits. It carries the fix from #5696 and resolves [#5681](https://github.com/anthropics/claude-plugins-official/issues/5681), which is now closed.
- **security-guidance changes.**
  - [#6393](https://github.com/anthropics/claude-plugins-official/pull/6393) stops a full security review on every subagent finish. Before, a turn using N subagents sent N reviews, each re-sending earlier files.
  - [#6398](https://github.com/anthropics/claude-plugins-official/pull/6398) is a version bump to 2.0.12.
  - [#6396](https://github.com/anthropics/claude-plugins-official/pull/6396) (still open) enables prompt caching for review requests.
  - Together these cut the plugin's token cost.
- **Partner SHA bumps closed:**
  - [#6394](https://github.com/anthropics/claude-plugins-official/pull/6394) vercel, v0.50.0 → v0.54.1
  - [#6392](https://github.com/anthropics/claude-plugins-official/pull/6392) sentry, v1.4.3
  - [#6391](https://github.com/anthropics/claude-plugins-official/pull/6391) semgrep
  - [#6377](https://github.com/anthropics/claude-plugins-official/pull/6377) incident-io
  - [#6376](https://github.com/anthropics/claude-plugins-official/pull/6376) aws-core
  - [#6280](https://github.com/anthropics/claude-plugins-official/pull/6280), the batch A bump of 33 partner plugins
- **[#6397](https://github.com/anthropics/claude-plugins-official/pull/6397)** (hookify: include `permissionDecisionReason` on deny) was closed. The data doesn't say whether it was merged.

The data doesn't say which of these closed PRs were merged and which were closed unmerged.

## 4. Community Hot Topics
- **[#232 Add Vue/Volar LSP plugin](https://github.com/anthropics/claude-plugins-official/issues/232).** It has the most engagement: 18 comments and 38 👍. It was opened in January and is still active nine months later. Vue developers want official go-to-definition, hover and completion in `.vue` files.
- **[#1901 typescript-lsp: forward initializationOptions](https://github.com/anthropics/claude-plugins-official/issues/1901).** Users want to tune the language server, for example `tsserver.useSyntaxServer: "auto"`, to improve responsiveness. This points to a general need for configurable LSP plugins.
- The open PRs have no comment data. The bump PRs are maintainer-driven rather than community-driven.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6363](https://github.com/anthropics/claude-plugins-official/issues/6363), security.** The skill-creator eval viewer has an attribute-breakout XSS and cross-site writes to the feedback server. The same code lives in `anthropics/skills`, where a related issue is open. No fix PR is visible.
2. **[#2032](https://github.com/anthropics/claude-plugins-official/issues/2032), marketplace integrity.** 54 of 203 listed plugins fail `codex plugin add` against their pinned SHAs. The failures fall into 4 categories that can be detected when the catalog is published. No fix PR is visible. The disabled bump workflow and the manual re-pinning may affect this.
3. **[#5681](https://github.com/anthropics/claude-plugins-official/issues/5681), resolved.** The receipts skill undercounted commits for repos with multiple checkouts. It was fixed by #6390.

## 6. Feature Requests & Roadmap Signals
- **Vue/Volar LSP** (#232) has the strongest demand (38 👍). It is plausible for an upcoming plugin addition, given the existing LSP plugin pattern.
- **`initializationOptions` passthrough for typescript-lsp** (#1901) is a small, low-risk change that could land soon.
- **Microphone keyboard shortcut** ([#6395](https://github.com/anthropics/claude-plugins-official/issues/6395)) is a Claude Desktop macOS request. It was filed in this repo but isn't plugin-related, so it will probably be redirected.
- **Roadmap signal:** the "new pipeline (~9/25)" mentioned in #6280 should replace the manual bump process. That date has already passed and the manual bumps continue.

## 7. User Feedback Summary
- Language developers want richer, configurable LSP support (Vue, TypeScript tuning).
- Users who run plugins across tools (Codex) see broken installs, which hurts catalog trust.
- Security-conscious users and researchers are auditing the bundled tooling (#6363).
- Cost and latency complaints led to the `security-guidance` fixes, which cut redundant reviews and add caching.
- The report on receipts (#5681) was resolved within about six weeks.

## 8. Backlog Watch
- **[#232](https://github.com/anthropics/claude-plugins-official/issues/232)** (Vue LSP) has been open since 2026-01-14 with 38 👍 and needs a maintainer decision.
- **[#1901](https://github.com/anthropics/claude-plugins-official/issues/1901)** (opened 2026-05-18) and **[#2032](https://github.com/anthropics/claude-plugins-official/issues/2032)** (opened 2026-05-26) each have only one comment. #2032 affects 54 plugins and needs triage.
- **[#6363](https://github.com/anthropics/claude-plugins-official/issues/6363)** is a fresh security report that needs a response.
- **Open bump PRs from 2026-10-08** are waiting for review: [#6383](https://github.com/anthropics/claude-plugins-official/pull/6383) slack, [#6384](https://github.com/anthropics/claude-plugins-official/pull/6384) fullstory, [#6385](https://github.com/anthropics/claude-plugins-official/pull/6385) carta, [#6386](https://github.com/anthropics/claude-plugins-official/pull/6386) qodo, [#6387](https://github.com/anthropics/claude-plugins-official/pull/6387) posthog, [#6388](https://github.com/anthropics/claude-plugins-official/pull/6388) crowdstrike, [#6389](https://github.com/anthropics/claude-plugins-official/pull/6389) snowflake-cortex-code.
- The nightly bump workflow has been disabled since 2026-09-17, and its replacement is overdue.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest, 2026-10-09

## 1. Today's Overview
Activity was light and routine: 1 issue and 6 PRs were updated in the last 24 hours, with no new releases. The work was the project's resource-submission pipeline. Bot-generated "Add resource" PRs came in, and the maintainer, hesreallyhim, made one structural change by adding a "Data Visualization" sub-category. Five of the six PRs are already closed or merged, and only one PR is open. Project health looks good, with a fast and mostly automated intake flow and no bugs reported.

## 2. Releases
No new releases.

## 3. Project Progress
Five PRs were merged or closed today. The data given doesn't say which of them were merged and which were closed without merging. Confirm this on GitHub before treating any of them as merged.

- **[#3119](https://github.com/hesreallyhim/awesome-claude-code/pull/3119) Add sub-category: Data Visualization** (hesreallyhim). This is a taxonomy change under "Documentation, Knowledge & Learning". [#3120](https://github.com/hesreallyhim/awesome-claude-code/pull/3120) uses the new sub-category.
- **[#3120](https://github.com/hesreallyhim/awesome-claude-code/pull/3120) Archify** (tt-a1i). This Agent Skill generates architecture visuals and is filed under Documentation, Knowledge & Learning → Data Visualization.
- **[#3121](https://github.com/hesreallyhim/awesome-claude-code/pull/3121) OpenRig** (mvschwarz). It combines Claude Code, Codex and Pi terminal sessions and is listed under Agent Orchestration.
- **[#3122](https://github.com/hesreallyhim/awesome-claude-code/pull/3122) clausona** (larcane97). This CLI and TUI runs several Claude Code accounts on one machine and is listed under Configuration.
- **[#3118](https://github.com/hesreallyhim/awesome-claude-code/pull/3118) Logo Designer Skill** (neonwatty). It creates and evolves SVG logos and is listed under Design & UI/UX.

The new resources cover design, visualization, multi-account management and multi-agent orchestration. This fits the ecosystem's move toward skills and cross-tool workflows. OpenRig's mention of Codex and Pi alongside Claude Code is one example.

## 4. Community Hot Topics
No item drew heavy discussion. The most active is:

- **[Issue #3123](https://github.com/hesreallyhim/awesome-claude-code/issues/3123) claude-carbon** (3 comments, 0 👍). It is a Status Lines resource that tracks the carbon footprint of Claude Code sessions, with a live CO₂ estimate. It carries the labels `approved`, `pr-created`, `validation-passed` and `resource-submission`, so it went through the whole pipeline within a day. The issue is closed, and its companion **[PR #3124](https://github.com/hesreallyhim/awesome-claude-code/pull/3124)** is still open. The underlying need is visibility into the environmental cost of AI-assisted coding. That is a niche but growing concern.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests. Two signals came from the maintainer's activity:
- The new **Data Visualization** sub-category suggests that more sub-categories will be added as submissions cluster around a theme.
- Status Lines, Agent Orchestration, Configuration and Design & UI/UX all received entries. Likely growth areas are multi-agent tooling and multi-account management.

## 7. User Feedback Summary
Contributors are asking for tools that give them:
- cost and impact awareness (claude-carbon)
- management of multiple accounts (clausona)
- orchestration across several coding agents (OpenRig)
- skills for creative and documentation work (Logo Designer, Archify)

Reactions were minimal (0 👍 across all items), so the data shows no sign of satisfaction or dissatisfaction. The submission process itself looks smooth. Validation and PR creation are automated, with no complaints.

## 8. Backlog Watch
- **[PR #3124](https://github.com/hesreallyhim/awesome-claude-code/pull/3124)** (claude-carbon) is the only open item. It was created yesterday and needs normal maintainer review or merge, so it isn't overdue.
- The 24-hour data shows no long-stalled issues or PRs. This snapshot can't show older backlog, so check the full issue tracker to judge it.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-09
Source: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity is moderate and entirely PR-driven. There were 0 issues, 0 releases, and 7 PRs updated in the last 24h (6 open, 1 closed). Five of the seven PRs are new submissions or entry updates, so the repository is working as a curated list that takes in community contributions. No PR is merged and none has comments or reactions, so the day's activity is intake without review. Maintainer response is the main health signal to watch.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One was closed:
- [#1176](https://github.com/VoltAgent/awesome-agent-skills/pull/1176) *Update entry: career-ops-hq/career-ops (repo moved)* was closed by its author, santifer. It duplicates the still-open [#1175](https://github.com/VoltAgent/awesome-agent-skills/pull/1175), which makes the same update. It looks like a duplicate cleanup, not a rejection.

## 4. Community Hot Topics
No PR has comments or 👍 reactions (comment counts are reported as undefined), so there is no engagement-based ranking. These are the substantive submissions from the last day:
- [#1177](https://github.com/VoltAgent/awesome-agent-skills/pull/1177) *LivePair AI skills*: adds a new 9-skill section for a private media generation API. It also adds a nav-table link and ships host plugin manifests for Claude, Codex and Cursor. This shows vendors treating the list as a distribution channel and packaging skills across several agent hosts.
- [#1174](https://github.com/VoltAgent/awesome-agent-skills/pull/1174) *Mindrally/skills*: 265 skills converted from `.cursorrules` files in awesome-cursorrules. It signals demand for porting existing rule ecosystems to the SKILL.md format. Its size will test the list's curation standards.
- [#1178](https://github.com/VoltAgent/awesome-agent-skills/pull/1178) *aurite-ai/agent-verifier*: a pre-ship review skill for agent code. It flags unbounded retries, `while(true)` loops without a break, tools referenced in prompts but never defined, and oversized system prompts. This points to growing interest in quality and reliability tooling.
- [#1179](https://github.com/VoltAgent/awesome-agent-skills/pull/1179) *target1m/traderspy-mcp*: six trading-related skills that drive an MCP server, added to Specialized Domains. It continues the trend of skills paired with MCP back ends.
- [#1136](https://github.com/VoltAgent/awesome-agent-skills/pull/1136) *stas4000/tastegate*: a front-end design skill with a real-browser check at 390px and 1440px. The author reports measured results.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no issues today. Changes are limited to list entries, so stability risk is minimal.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The PRs suggest these themes:
- **Cross-host packaging**: [#1177](https://github.com/VoltAgent/awesome-agent-skills/pull/1177) uses `skills.json` plus `.claude-plugin`, `.codex-plugin` and `.cursor-p…` manifests. The list may eventually need to track host compatibility.
- **Maintenance of existing entries**: [#1175](https://github.com/VoltAgent/awesome-agent-skills/pull/1175) shows that entries go stale after repo moves and description drift. Contributors may want a lighter process for updating entries.
- **Large collection submissions** such as [#1174](https://github.com/VoltAgent/awesome-agent-skills/pull/1174) could prompt maintainers to set guidance on bulk or converted skills.

These are inferences. The data contains no maintainer statements.

## 7. User Feedback Summary
No issues or comments exist, so there is no direct feedback. The submissions point to these use cases:
- Verification and quality gates for agent output, in [#1178](https://github.com/VoltAgent/awesome-agent-skills/pull/1178) and [#1136](https://github.com/VoltAgent/awesome-agent-skills/pull/1136).
- Domain skills backed by MCP servers, in [#1179](https://github.com/VoltAgent/awesome-agent-skills/pull/1179) and [#1177](https://github.com/VoltAgent/awesome-agent-skills/pull/1177).
- Porting existing rule corpora, in [#1174](https://github.com/VoltAgent/awesome-agent-skills/pull/1174).

## 8. Backlog Watch
- [#1136](https://github.com/VoltAgent/awesome-agent-skills/pull/1136) *stas4000/tastegate* has been open since 2026-10-01 (8 days) with no comments or reactions. It is the oldest PR in today's window.
- [#1174](https://github.com/VoltAgent/awesome-agent-skills/pull/1174) *Mindrally/skills* has been open since 2026-10-08. Its 265-skill scope needs a maintainer decision on curation and quality.
- [#1175](https://github.com/VoltAgent/awesome-agent-skills/pull/1175) is a simple link and description fix that can be merged quickly. [#1176](https://github.com/VoltAgent/awesome-agent-skills/pull/1176) was closed as its duplicate.
- The PR numbers (#1136, #1174–#1179) suggest a steady intake of submissions. The data covers only the last 24h, so the size of the wider backlog cannot be confirmed from it.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
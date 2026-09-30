# MCP Ecosystem Digest 2026-09-30

> Issues: 10 | PRs: 12 | Projects covered: 7 | Generated: 2026-09-30 13:17 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-09-30

## 1. Today's Overview
The project is active but has no new releases. Most of the 22 items updated in the last 24h come from one maintainer, cliffhall, who is working through the "agentic software factory" and "2026-07-28 Spec Refactor" tracks on the `v2` branch. Five of the twelve PRs were merged or closed, and five of the ten issues were closed. All ten of those closures are factory work. Community contributions are mostly small filesystem and memory server fixes, and none of them was merged today. One PR (#4916) proposes removing the `sequentialthinking` reference server.

## 2. Releases
No new releases.

## 3. Project Progress
The factory Wave 3 PRs and their tracking issues were closed on 2026-09-29. The data doesn't say whether the PRs were merged or closed without merging. Several were stacked on #4899, so they may have been closed after being folded into other branches.
- [PR #4899](https://github.com/modelcontextprotocol/servers/pull/4899) (Part 6) adds the `board-ops` and `issue-create` skills and a `chore` label. It closes [#4866](https://github.com/modelcontextprotocol/servers/issues/4866).
- [PR #4903](https://github.com/modelcontextprotocol/servers/pull/4903) (Part 7) adds the `pr-flow` skill. It closes [#4867](https://github.com/modelcontextprotocol/servers/issues/4867).
- [PR #4906](https://github.com/modelcontextprotocol/servers/pull/4906) (Part 8) adds the `issue-triage` skill and board audit. It closes [#4868](https://github.com/modelcontextprotocol/servers/issues/4868).
- [PR #4904](https://github.com/modelcontextprotocol/servers/pull/4904) (Part 9) sets up the contribution model: issues rather than PRs, issue forms, and a backlog plan. It closes [#4869](https://github.com/modelcontextprotocol/servers/issues/4869).
- [PR #4905](https://github.com/modelcontextprotocol/servers/pull/4905) (Part 10) adds the `security-advisory` skill and rewrites SECURITY.md. It closes [#4870](https://github.com/modelcontextprotocol/servers/issues/4870).

The tracker [#4858](https://github.com/modelcontextprotocol/servers/issues/4858) remains open.

## 4. Community Hot Topics
Engagement is low: no item has more than 2 comments or any 👍 reactions.
- [#4854](https://github.com/modelcontextprotocol/servers/issues/4854) and [#4855](https://github.com/modelcontextprotocol/servers/issues/4855) each have 2 comments. They ask for extensive TypeScript (vitest) and Python (pytest) unit tests and a per-file 90% coverage gate. These are the first steps of the 2026-07-28 Spec Refactor (tracker #4857). The tests are meant to pin current behavior before any SDK or spec change.
- [PR #4916](https://github.com/modelcontextprotocol/servers/pull/4916) proposes removing the `sequentialthinking` reference server. It was opened by claude[bot] at a maintainer's request. It is the most consequential new item, since it changes the set of reference servers.
- The filesystem server draws the most contributor attention: PRs [#4910](https://github.com/modelcontextprotocol/servers/pull/4910), [#4911](https://github.com/modelcontextprotocol/servers/pull/4911), [#4913](https://github.com/modelcontextprotocol/servers/pull/4913) and [#4915](https://github.com/modelcontextprotocol/servers/pull/4915). The common theme is error handling and clearer reporting.

## 5. Bugs & Stability
Ranked by apparent severity:
1. **Silent failures in filesystem tools.**
   - [PR #4910](https://github.com/modelcontextprotocol/servers/pull/4910): `search_files` returns a quietly incomplete result set when a subdirectory is unreadable, because the error is swallowed.
   - [PR #4911](https://github.com/modelcontextprotocol/servers/pull/4911): `list_directory_with_sizes` reports `0 B` for entries it couldn't stat, so an unreadable file looks empty.
   - Both have fix PRs open.
2. **Misleading error for broken symlinks.** [PR #4915](https://github.com/modelcontextprotocol/servers/pull/4915) fixes a case where a dangling symlink makes the server report a missing parent directory.
3. **Fetch prompt error handling.** [Issue #4914](https://github.com/modelcontextprotocol/servers/issues/4914): with an invalid URL, the `fetch` prompt returns JSON-RPC error code 0 with the raw exception text. The `fetch` tool handles the same input as a normal `isError: true` result. No fix PR yet.
4. **Silent skips in memory.** [PR #4888](https://github.com/modelcontextprotocol/servers/pull/4888) makes `create_entities` report which entities it skipped, so agents know their observations weren't stored. It fixes #4887.
5. **Stale code in the everything server.** [PR #4189](https://github.com/modelcontextprotocol/servers/pull/4189) fixes stale elicitation fields, an ignored `pollInterval` and duplicated validation.

## 6. Feature Requests & Roadmap Signals
- **Spec Refactor (2026-07-28):** test-hardening comes first (#4854 and #4855), followed by SDK and spec changes. Test coverage gates are likely to land ahead of any v2 behavior changes.
- **Factory Wave 3 and beyond:** the skills for boards, PR flow, triage and security are done. The tracker (#4858) and the `v2/main` release flow are next.
- **Reference server pruning:** the `sequentialthinking` removal (#4916) may signal further trimming of the reference set. Whether it lands depends on maintainer review.
- **Operator visibility:** [Issue #4912](https://github.com/modelcontextprotocol/servers/issues/4912) and [PR #4913](https://github.com/modelcontextprotocol/servers/pull/4913) ask the filesystem server to log its effective allowed roots and their source (arguments or client Roots). This is a small change that could land soon.

## 7. User Feedback Summary
Contributors want servers that report failures explicitly. The recurring pain points are:
- silent data loss or truncation (`search_files`, `create_entities`);
- misleading output (`0 B` sizes, a "missing parent" error for a symlink);
- unclear access-control state at startup (filesystem roots).

Agent-facing callers can't recover from a problem the server doesn't report. The data contains no direct praise or complaints beyond these bug reports.

## 8. Backlog Watch
- [PR #4189](https://github.com/modelcontextprotocol/servers/pull/4189) (everything server fixes) has been open since 2026-05-17, about 4.5 months. It was touched again on 2026-09-29 but is still unmerged.
- [PR #4888](https://github.com/modelcontextprotocol/servers/pull/4888) (memory skipped entities) has been open since 2026-09-28 with no reported review.
- The four filesystem PRs (#4910, #4911, #4913, #4915) are new and have no reviews reported. Maintainers could review them together, because they touch the same error-handling area.
- [Issue #4914](https://github.com/modelcontextprotocol/servers/issues/4914) has no comments or fix PR.
- [Issues #4854](https://github.com/modelcontextprotocol/servers/issues/4854) and [#4855](https://github.com/modelcontextprotocol/servers/issues/4855) are open and gate the whole Spec Refactor. They have had no visible progress since they were created on 2026-09-26.

**Health assessment:** Maintainer throughput is high and focused on infrastructure. Community PRs have a review backlog, and the merge cadence for external fixes is not visible in today's data.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP and Claude-Adjacent Ecosystem, 2026-09-30

## 1. Ecosystem Overview
The seven projects cover three layers of the MCP and Claude tooling stack: reference implementation and registries (MCP Servers, MCP Registry, Docker MCP Registry), curated discovery lists (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills), and the plugin marketplace (Claude Plugins). Contribution volume is high, led by 108 PRs in Awesome MCP Servers and 50 in Docker MCP Registry. Maintainer review and merge throughput is the common constraint. Many curated lists now receive agent-authored submissions. Reliability and observability, meaning explicit errors, cost visibility, and stale-pin automation, are the recurring technical concerns.

## 2. Activity Comparison
Counts cover items updated in the last 24 hours. Health scores are my own judgment from the digests, not a metric the projects publish.

| Project | Issues | PRs | Release | Health (1–10) | Basis |
|---|---|---|---|---|---|
| MCP Servers | 10 (5 closed) | 12 (5 merged/closed) | None | 7 | High maintainer throughput, but external PRs sit unreviewed |
| MCP Registry | 2 (open) | 0 | None | 5 | Quiet, no maintainer responses on new issues |
| Awesome MCP Servers | 0 | 108 (95 open) | None | 6 | Very high inflow, review queue growing |
| Docker MCP Registry | 0 | 50 (all open) | None | 4 | Nothing merged, bot pin PRs open for months |
| Claude Plugins (official) | 10 | 5 (4 closed) | None | 6 | Fast listing changes, but the SHA-bump workflow has been disabled since Sep 17 |
| Awesome Claude Code | 16 (2 closed) | 0 | None | 6 | Validation bot works, no merges today |
| Awesome Agent Skills | 0 | 14 (9 open, 5 closed) | None | 6 | Steady submissions, sparse review feedback |

No project shipped a release today.

## 3. MCP Servers's Position
**Advantages**
- It is the only project here doing core engineering work: the `v2` branch, the "2026-07-28 Spec Refactor" (test hardening first, then SDK and spec changes), and reference server maintenance.
- It closed 10 items today, all factory work from one maintainer (cliffhall). No other project shows that closure rate on substantive work.
- Its bug reports are concrete and code-level: silent failures in `search_files` and `list_directory_with_sizes`, and JSON-RPC error code 0 from the `fetch` prompt.

**Technical approach**
- The others are catalogs or distribution channels: markdown lists, container catalogs, a namespace registry, a plugin marketplace. MCP Servers defines the behavior they list.
- It is moving toward an issue-first contribution model (PR #4904) and pruning the reference set (PR #4916 proposes removing `sequentialthinking`). The lists are expanding.

**Community size**
- It has the smallest external footprint in the set. No item has more than 2 comments, and the filesystem PRs come from a few contributors.
- The lists see far higher volume: 108 PRs in Awesome MCP Servers and 50 in Docker MCP Registry.
- Maintainer bandwidth is concentrated in one person, which is a bus-factor risk.

## 4. Shared Technical Focus Areas
| Need | Projects | Specifics |
|---|---|---|
| Explicit failure reporting | MCP Servers, MCP Registry | Silent truncation and `0 B` sizes (#4910, #4911). Signature failures with no diagnostics (#1679) |
| Stale-pin and freshness automation | Claude Plugins, Docker MCP Registry | Plugin pins stale since the workflow was disabled Sep 17 (#6328, #6331). Bot `chore: update pin` PRs open since Nov 2025 |
| Namespace and ownership migration | MCP Registry, Claude Plugins | Personal account to org, URL reclaim (#1678). Listing repoints (#6326, #6312) |
| Remote (Streamable HTTP) server support | Docker MCP Registry, Awesome MCP Servers, MCP Registry | 4 of 5 new Docker submissions are remote. Non-GitHub URL friction (#15399). Remote URL uniqueness in the registry |
| Automated validation and triage | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | Labels such as `missing-glama` and `validation-passed`. Template gaps (placeholder titles, malformed links) |
| Agent memory, orchestration, security | Awesome MCP Servers, Awesome Claude Code, Docker MCP Registry | Memory (total-agent-memory, KYB). Multi-agent coordination (Tower, kumi). Security guardrails (four PRs) |
| Cost and observability | Awesome Claude Code | claude-token-saver, RuleReceipt, Estela |
| Cross-platform robustness | MCP Registry, Claude Plugins | Windows and OpenSSL 4.x (#1679). Windows hooks and Maven (#6315, #6329) |

## 5. Differentiation Analysis
- **MCP Servers:** Reference implementation code in TypeScript and Python. Its users are SDK and server authors, and its work is spec, tests and error semantics.
- **MCP Registry:** A namespace and publishing system using DNS/HTTP domain auth and Ed25519 proofs. Its users are publishers.
- **Docker MCP Registry:** A containerized catalog with pinned commits and a bot-driven update flow. Its users are enterprises and Docker users who want vetted images, and it increasingly hosts remote entries.
- **Awesome MCP Servers:** A markdown list gated by Glama listing and name/URL validation. Its users are end users and discovery-driven developers.
- **Claude Plugins:** A first-party marketplace (`marketplace.json`, SHA pins) for Claude Code, including LSP, channel, hook and skill plugins. Its users are Claude Code users and plugin authors.
- **Awesome Claude Code:** A curated list of Claude Code workflows and tools, submitted as issues and validated by a bot. Its users are individual developers.
- **Awesome Agent Skills:** A PR-based skills list with a 10-word description limit and vendor sections. Its users are skill consumers across several coding assistants.

## 6. Community Momentum & Maturity
- **Rapid iteration:** MCP Servers (v2 and factory work) and Claude Plugins (same-day listing repoints, though the bump automation is stalled).
- **High inflow, throughput-limited:** Awesome MCP Servers (95 open against 13 resolved), Docker MCP Registry (nothing merged, pins stale for months), Awesome Agent Skills (slow review, closures without explanation) and Awesome Claude Code (about 13 new issues in two days, no merges).
- **Low activity, needs triage:** MCP Registry (2 issues, no maintainer response). The 24-hour window may understate its normal activity.
- **Maturity:** The list-type projects are structurally stable and mostly process-limited. The registries and marketplace are still working out operations: bump pipelines, ownership transfer and remote-server handling.

## 7. Trend Signals
1. **Agents as contributors.** Automated submissions are visible in Awesome MCP Servers (the 🤖 marker, "submitted by an automated agent") and the claude[bot]-authored PR #4916. Curated lists will probably need agent-submission policies and auto-merge on validation.
2. **Remote-first MCP.** Hosted Streamable HTTP servers, with or without OAuth, are the growing share of new entries. Developers should design for remote deployment and auth. Registries need to handle non-GitHub and non-container sources.
3. **Failures must be visible to agents.** Callers cannot recover from silent truncation or misleading errors. Return explicit errors and skipped-item reports (`isError: true`).
4. **Supply-chain freshness is an operational risk.** Stale pins in Claude Plugins and Docker MCP Registry mean listed servers may lag their upstream versions. Check pin age before adopting a listed server.
5. **Guardrail and cost tooling is in demand.** Secrets handling, PII pseudonymisation, rule-compliance checks and token accounting appear across several lists. These are open product areas for agent developers.
6. **Multi-session and multi-agent conflicts.** Discord's shared-token behavior (#6323), Tower's edit-overlap detection and KYB's shared memory all address coordination. Isolation and routing primitives are missing from current channel plugins.
7. **Test-first spec change.** MCP Servers requires a 90% per-file coverage gate before v2 behavior changes, so expect a stable, well-tested baseline ahead of SDK changes.

**Caveats:** These counts are from a 24-hour snapshot. Several digests show comment counts as undefined, so engagement comparisons are unreliable. Closed PRs are not distinguished from merged ones.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest: 2026-09-30

## 1. Today's Overview
Activity in modelcontextprotocol/registry was low over the last 24 hours. Two issues were updated and both are open. No PRs were updated, and there were no releases. Both issues come from publishers trying to register or reclaim servers, so the day's signal is about publisher onboarding and namespace ownership, not core development. No maintainer responses or comments appear on either issue.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, and no fixes or features advanced. No fix PRs are linked to the two open issues.

## 4. Community Hot Topics
Neither issue has comments or 👍 reactions, so neither counts as "hot" by engagement. They are listed by relevance:

- **[#1679](https://github.com/modelcontextprotocol/registry/issues/1679)**: HTTP domain authentication fails signature verification even though the Ed25519 key matches. The reporter uses Windows 10, mcp-publisher 1.8.1, and OpenSSL 4.0.2, with the domain `bodywise.io` and server name `io.bodywise/public`. The proof file is served correctly. The underlying need is reliable domain-based namespace verification. Key generation or encoding may differ across platforms and OpenSSL versions.
- **[#1678](https://github.com/modelcontextprotocol/registry/issues/1678)**: A publisher asks to reclaim the remote URL `https://marketnow.site/api/mcp` from a deprecated entry. They also ask to deprecate stale `io.github.edgarfloresguerra2011-a11y/marketnow` versions. The current server is published as `io.github.alicelabs-llc/marketnow` v1.15.0, with both an npm package and a `streamable-http` remote. The underlying need is a way to migrate namespaces, for example from a personal GitHub account to an org, without leaving duplicate or conflicting entries. The registry appears to enforce remote URL uniqueness.

## 5. Bugs & Stability
1. **[#1679](https://github.com/modelcontextprotocol/registry/issues/1679)** is a possible bug in HTTP domain auth signature verification. The severity is medium. It blocks publishing for affected users, but it affects a single reporter and there is no sign of a wider regression. The cause is unconfirmed. It could be a client-side key or signature format issue, such as the Windows and OpenSSL 4.x toolchain, or a server-side verification bug. No fix PR exists.

No crashes or regressions are reported otherwise.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. [#1678](https://github.com/modelcontextprotocol/registry/issues/1678) points to a gap in self-service tooling for:
- transferring or migrating entries between namespaces
- deprecating old versions in bulk
- releasing remote URLs held by deprecated entries

This is currently handled by manual maintainer action. A single issue is weak evidence, so I wouldn't predict it lands in the next version.

## 7. User Feedback Summary
- Publishers find the authentication flow hard to debug. Signature failures give little diagnostic output when the key and proof appear to match (#1679).
- Windows and newer OpenSSL environments may be under-tested (#1679).
- Namespace migration is a pain point: moving from a personal account to an org leaves stale entries that block URL reuse (#1678).
- Both reporters are actively publishing, which shows continued demand for listing remote MCP servers.

## 8. Backlog Watch
Both issues were opened within the last two days and have no maintainer response yet, so neither is long-stale. They need triage:
- [#1679](https://github.com/modelcontextprotocol/registry/issues/1679): ask for the public key, proof file content, and signing command output to isolate the fault.
- [#1678](https://github.com/modelcontextprotocol/registry/issues/1678): a maintainer needs to verify ownership of both namespaces before reclaiming the URL or deprecating entries. This is a sensitive action, so it needs care.

The data covers only a 24-hour window, so older backlog items are not visible here.

**Project health:** Activity is quiet, with no merged work today and no maintainer engagement visible on the new issues. Watch for first-response time on both.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-09-30

## 1. Today's Overview
Awesome MCP Servers had a high-volume, submission-driven day. 108 PRs were updated in the last 24h (95 open, 13 merged or closed), with 0 issues and 0 releases. Almost all activity is community contributors adding new servers. Visible comment counts are undefined in the data, so discussion depth can't be measured. The bottleneck is maintainer review of a growing open queue. The 13 closed or merged PRs point to some throughput, but 95 open PRs vs. 13 resolved means the queue is growing.

## 2. Releases
No new releases.

## 3. Project Progress
The data lists only one closed PR by name, and it doesn't say whether it was merged:
- [#8823](https://github.com/punkpeye/awesome-mcp-servers/pull/8823) "Update Simplified Chinese README" was closed. It was created 2026-06-27 and had been open about 3 months. It was labeled `missing-glama`. It aimed to sync the localized README with the English one.

The other 12 merged or closed PRs aren't in the top-20 sample, so I can't say which servers were accepted. Content-wise, the README is a curated list, so "progress" means new entries. Newly submitted entries today span these categories:
- Knowledge & Memory: [#15370](https://github.com/punkpeye/awesome-mcp-servers/pull/15370) (blackwindow-weave-mcp), [#15396](https://github.com/punkpeye/awesome-mcp-servers/pull/15396) (local-notes-search-mcp)
- Coding Agents: [#15403](https://github.com/punkpeye/awesome-mcp-servers/pull/15403) (Tower, which flags multi-agent edit overlaps before writes)
- Security: [#15393](https://github.com/punkpeye/awesome-mcp-servers/pull/15393) (vaultshell), [#15394](https://github.com/punkpeye/awesome-mcp-servers/pull/15394) (SaveSaveSaveSave), [#15346](https://github.com/punkpeye/awesome-mcp-servers/pull/15346) (privacyfence), [#15059](https://github.com/punkpeye/awesome-mcp-servers/pull/15059) (data-prism)
- Art & Culture: [#15402](https://github.com/punkpeye/awesome-mcp-servers/pull/15402) (janction-render), [#15401](https://github.com/punkpeye/awesome-mcp-servers/pull/15401) (danbooru-tag-mcp)
- Embedded: [#15400](https://github.com/punkpeye/awesome-mcp-servers/pull/15400) (smolmux)
- Browser Automation: [#15386](https://github.com/punkpeye/awesome-mcp-servers/pull/15386) (browser-buddy)
- Developer Tools: [#15193](https://github.com/punkpeye/awesome-mcp-servers/pull/15193) (oh-my-android), [#14667](https://github.com/punkpeye/awesome-mcp-servers/pull/14667) (KinetAios)

## 4. Community Hot Topics
No PR or issue has a usable comment or reaction count (comments are undefined, 👍 is 0 everywhere), so I can't rank by engagement. These themes stand out from the sample:
- **Agent-generated submissions.** Many PRs carry the 🤖🤖🤖 marker. [#15395](https://github.com/punkpeye/awesome-mcp-servers/pull/15395), [#15396](https://github.com/punkpeye/awesome-mcp-servers/pull/15396) and [#15397](https://github.com/punkpeye/awesome-mcp-servers/pull/15397) come from one author (Furkiozknn) and describe themselves as "submitted by an automated agent". Bulk automated submissions may need a policy.
- **Security for agents.** Four security-category PRs (secrets injection, message and package scanning, PII pseudonymisation) show demand for guardrails around agent tool use.
- **Multi-agent coordination and memory.** Tower ([#15403](https://github.com/punkpeye/awesome-mcp-servers/pull/15403)) and the local semantic-search servers reflect a shift toward agent infrastructure beyond simple API wrappers.
- **Physical and creative domains.** Embedded debugging, Android control, and Blender GPU rendering are new areas.

## 5. Bugs & Stability
No issues were reported and no bug-fix PRs appear. The only quality signals are the automated validation labels on PRs:
- `missing-glama` on [#15403](https://github.com/punkpeye/awesome-mcp-servers/pull/15403), [#15402](https://github.com/punkpeye/awesome-mcp-servers/pull/15402), [#15401](https://github.com/punkpeye/awesome-mcp-servers/pull/15401), [#15399](https://github.com/punkpeye/awesome-mcp-servers/pull/15399) and [#15392](https://github.com/punkpeye/awesome-mcp-servers/pull/15392). These lack the Glama listing the repo expects.
- `non-github-url` on [#15399](https://github.com/punkpeye/awesome-mcp-servers/pull/15399) (Qomvia), which links to a non-GitHub URL and needs fixing before merge.
- [#15346](https://github.com/punkpeye/awesome-mcp-servers/pull/15346) has an empty description.

## 6. Feature Requests & Roadmap Signals
No issues or explicit feature requests exist. Signals from submissions:
- More categories may be needed for multi-agent coordination, agent security and hardware, since submitters place these under general sections such as Developer Tools or Coding Agents.
- Remote streamable-HTTP servers ([#15399](https://github.com/punkpeye/awesome-mcp-servers/pull/15399)) are appearing next to the stdio/npx entries. The list's legend and validation may need to accommodate hosted servers that lack a GitHub URL.
- Registry cross-listing: [#15394](https://github.com/punkpeye/awesome-mcp-servers/pull/15394) and [#15193](https://github.com/punkpeye/awesome-mcp-servers/pull/15193) cite the official MCP Registry, so linking to it is a plausible future convention.

## 7. User Feedback Summary
There is no direct feedback (no issues, no comments). Contributor behavior suggests:
- Contributors follow the guidelines: alphabetical placement, emoji legend, Glama badge. The validation labels have clearly shaped PR formatting.
- Contributors want visibility in the canonical list and use it as a distribution channel.
- Some contributors resubmit after earlier rejections. [#15392](https://github.com/punkpeye/awesome-mcp-servers/pull/15392) re-adds a server after conflicts on the closed PR #2463.

## 8. Backlog Watch
Older open PRs that were updated today and may need attention:
- [#14379](https://github.com/punkpeye/awesome-mcp-servers/pull/14379) (yuque-ai-mcp, opened 2026-09-14, 16 days old, passes validation)
- [#14667](https://github.com/punkpeye/awesome-mcp-servers/pull/14667) (KinetAios, opened 2026-09-18, 12 days old)
- [#15059](https://github.com/punkpeye/awesome-mcp-servers/pull/15059) (data-prism, opened 2026-09-24, 6 days old)
- [#15193](https://github.com/punkpeye/awesome-mcp-servers/pull/15193) (oh-my-android, opened 2026-09-26, 4 days old)

All four pass the automated checks (`has-glama`, `valid-name`), so they appear ready for maintainer review. The ratio of 95 open to 13 resolved suggests the list could use more reviewer capacity or auto-merge for PRs that pass validation. The data shows no issue backlog.

**Health assessment:** Contributor interest is very high and submissions are largely well-formed. The limits are maintainer throughput and the growing share of agent-authored PRs, not code quality or bugs.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-09-30

## 1. Today's Overview
The registry was active today, but only on the PR side. No issues were updated and no releases shipped. 50 PRs were updated, all still open, and none were merged or closed. The batch is mostly two kinds of PR. Some are new server submissions, including three opened today. The rest are automated `chore: update pin` PRs from `mcp-registry-bot[bot]`, some open since November 2025. Contributors are submitting servers at a steady rate. The merge side shows no throughput in this window. The data lists only 20 of the 50 PRs, so the counts below cover those 20.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so nothing advanced or was fixed.

New submissions awaiting review:
- [#5244](https://github.com/docker/mcp-registry/pull/5244): BRANCO, a remote French legal research connector. It uses Streamable HTTP with OAuth and covers legislation, case law, citation checks and procedural calculations.
- [#5311](https://github.com/docker/mcp-registry/pull/5311): Chorus Research, a remote survey platform server. Agents can list audiences, create and price surveys, and check status.
- [#5313](https://github.com/docker/mcp-registry/pull/5313): BirkinBagStock, a remote server for Hermès resale listings, auction calendars and results. It is public, uses Streamable HTTP and needs no authentication.
- [#5314](https://github.com/docker/mcp-registry/pull/5314): NebenkostenPro, a remote server with six read-only tools for German housing-cost data. It is stateless with no OAuth and is free.
- [#4959](https://github.com/docker/mcp-registry/pull/4959): total-agent-memory, a local SQLite-backed persistent memory server for coding agents. It is the only locally run server in the set.

## 4. Community Hot Topics
Comment counts came through as `undefined` and every 👍 count is 0, so I can't rank PRs by engagement. The PRs below are the ones that show the clearest trends.
- **Remote MCP servers are dominant.** Four of the five new submissions ([#5244](https://github.com/docker/mcp-registry/pull/5244), [#5311](https://github.com/docker/mcp-registry/pull/5311), [#5313](https://github.com/docker/mcp-registry/pull/5313), [#5314](https://github.com/docker/mcp-registry/pull/5314)) are hosted endpoints using Streamable HTTP. Several also cite an entry in the official MCP Registry. Vendors want a Docker listing for servers they host themselves.
- **Agent memory is an active niche.** [#4959](https://github.com/docker/mcp-registry/pull/4959) offers persistent cross-session memory for coding agents. It has been open since 2026-09-07.
- **Vertical, domain-specific servers** cover legal research, surveys, luxury resale and housing costs. Contributors are building narrow data services, not only developer tooling.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, because no issues were updated. Nothing in the PR data points to a fix.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. The submissions suggest two things:
- Authentication variety is growing. The mix includes OAuth (BRANCO) and no-auth public endpoints (BirkinBagStock, NebenkostenPro). The registry's handling of remote servers and OAuth flows will likely matter more.
- Remote entries with no local container image may become a bigger share of the catalog.

These are inferences from the PR contents, not stated requests.

## 7. User Feedback Summary
There is no direct user feedback. Without issues or comments, satisfaction or pain points can't be measured. Contributors' descriptions stress low-friction access (no auth, free, read-only) and a clear disclaimer where relevant (BirkinBagStock states it is not affiliated with Hermès).

## 8. Backlog Watch
Many of the open bot pin-update PRs have gone stale. All 15 listed were updated today, but their creation dates go back months:
- [#612](https://github.com/docker/mcp-registry/pull/612) awslabs-cfn, created 2025-11-07
- [#788](https://github.com/docker/mcp-registry/pull/788) omi, created 2025-11-26
- [#799](https://github.com/docker/mcp-registry/pull/799) vizro, created 2025-11-27
- [#1051](https://github.com/docker/mcp-registry/pull/1051) opik, created 2026-02-04
- [#1083](https://github.com/docker/mcp-registry/pull/1083) stripe, created 2026-02-07
- [#2750](https://github.com/docker/mcp-registry/pull/2750) aws-terraform, created 2026-04-18
- [#3217](https://github.com/docker/mcp-registry/pull/3217) hostinger-mcp-server, created 2026-05-05
- A July 2026 cluster: [#4364](https://github.com/docker/mcp-registry/pull/4364) kubernetes, [#4367](https://github.com/docker/mcp-registry/pull/4367) smartbear, [#4368](https://github.com/docker/mcp-registry/pull/4368) sonarqube, [#4380](https://github.com/docker/mcp-registry/pull/4380) grafana, [#4381](https://github.com/docker/mcp-registry/pull/4381) mongodb, [#4383](https://github.com/docker/mcp-registry/pull/4383) teamwork, [#4419](https://github.com/docker/mcp-registry/pull/4419) ros2, [#4444](https://github.com/docker/mcp-registry/pull/4444) schemacrawler-ai

A pin update left open for months means the catalog may be running outdated commits for widely used servers such as Stripe, Kubernetes, MongoDB and Grafana. Maintainers should merge these, close any that are superseded, or fix the bot if it keeps reopening them.

Two other items need attention. [#4959](https://github.com/docker/mcp-registry/pull/4959) (total-agent-memory) has been waiting nearly four weeks. [#5244](https://github.com/docker/mcp-registry/pull/5244) (BRANCO) has been waiting five days.

**Health assessment:** Inbound contribution is healthy, but review and merge throughput looks weak. Nothing was merged today and the pin-update backlog keeps growing.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest: 2026-09-30

## 1. Today's Overview
Activity was moderate: 10 issues and 5 PRs were updated in 24h, with no new releases. Almost all of it was triage and marketplace upkeep. Four of the five PRs closed, and most are listing repoints or SHA updates. The main theme in the issues is that the automated "Bump Plugin SHAs" workflow has been disabled since Sep 17. Plugin pins are going stale, and three issues today (#6331, #6328, #6269) touch on marketplace freshness or consistency. Bug reports against individual plugins (jdtls-lsp, security-guidance, imessage, discord) continue to arrive, but none has a linked fix PR yet.

## 2. Releases
No new releases.

## 3. Project Progress
Closed PRs today were marketplace maintenance, not feature work:
- [#6326](https://github.com/anthropics/claude-plugins-official/pull/6326): repointed the `postman` listing to `postmanlabs/postman-plugin` at Postman's request, updating `source.url` and `source.sha`.
- [#6312](https://github.com/anthropics/claude-plugins-official/pull/6312): repointed `aws-startup-advisor` to `aws/agent-toolkit-for-aws`, at the AWS team's request.
- [#6325](https://github.com/anthropics/claude-plugins-official/pull/6325): SHA refresh for `aws-core` in `marketplace.json`. It is shown as closed, so whether it was merged or superseded is not clear from the data.
- [#731](https://github.com/anthropics/claude-plugins-official/pull/731): the `mcp-server-dev` plugin PR (three skills for designing and building MCP servers) was closed. It was opened on 2026-03-18, so it sat about six months before closing. The data doesn't say whether it was merged or declined.

One PR is still open. [#6322](https://github.com/anthropics/claude-plugins-official/pull/6322) adds a `math-proof` plugin with `solo` and `siege` (multi-agent) skills for hard math problems. It comes from an `-ant` account, which suggests an internal contributor.

## 4. Community Hot Topics
Engagement is low overall. The highest-comment item is older, and the rest have at most 1 comment.
- [#1872](https://github.com/anthropics/claude-plugins-official/issues/1872) (4 comments, 1 👍): a Telegram plugin request for inline keyboard buttons and `callback_query` handling. It was opened in May and is still active. Users want interactive, button-driven flows in chat channels, for example approvals and quick replies.
- [#6269](https://github.com/anthropics/claude-plugins-official/issues/6269) (1 comment, 1 👍): 22 of 310 `marketplace.json` entries have no `claude.com/plugins` page, including `mongodb-atlas`, which has been missing since Aug 10. The report says the 404s serve the same body as a bogus slug. The underlying need is that catalog entries should be discoverable.
- [#6328](https://github.com/anthropics/claude-plugins-official/issues/6328) and [#6331](https://github.com/anthropics/claude-plugins-official/issues/6331): both ask about the stalled bump pipeline. #6328 covers `google-cloud-storage`. #6331 covers `remember`, which is pinned at v0.33.0 while v0.36.0 exists. Plugin authors want to know when automated pin updates will resume. #6328 cites #6280 saying the new pipeline was expected around 9/25.

## 5. Bugs & Stability
Ranked by severity:
1. [#6315](https://github.com/anthropics/claude-plugins-official/issues/6315): `security-guidance` 2.0.8. The interpreter probes in `sg-python.sh` have no timeout. A `python3` that never returns blocks every hook, which is a potential hang. It was reported on Windows 11 with Git Bash. No fix PR.
2. [#6324](https://github.com/anthropics/claude-plugins-official/issues/6324): `imessage` 0.1.0. iCloud-synced copies of old messages arrive as new rows, and the poll ignores the date. Old messages are re-delivered as new inbound, which can trigger duplicate or unintended agent actions. No fix PR.
3. [#6323](https://github.com/anthropics/claude-plugins-official/issues/6323): `discord`. When several sessions share one bot token, every session answers each DM. Permission prompts can only go to DMs. This is a design limitation in multi-session setups. No fix PR.
4. [#6329](https://github.com/anthropics/claude-plugins-official/issues/6329): `jdtls-lsp`. Its auto-build compiles into Maven's `target/classes`. Agents then run a mix of classes from two compilers and spend turns and tokens debugging "phantom" classes. No fix PR.
5. [#6327](https://github.com/anthropics/claude-plugins-official/issues/6327): skill-creator `run_evals` ignores `when_to_use`. The harness builds a command file in `.claude/commands/` rather than a skill file, so description optimization misses trigger conditions stored in that attribute. No fix PR.
6. [#6330](https://github.com/anthropics/claude-plugins-official/issues/6330): `session-report`'s `handleUser()` reads only `content[0]`, so prompts with an `@browser` reference are mislabeled in the "top prompts" table. The issue is closed, and the data doesn't say how.

## 6. Feature Requests & Roadmap Signals
- Telegram inline keyboards and callbacks ([#1872](https://github.com/anthropics/claude-plugins-official/issues/1872)): this has real demand, but it is four months old with no maintainer action visible, so it is unlikely to land soon.
- Multi-session Discord routing ([#6323](https://github.com/anthropics/claude-plugins-official/issues/6323)): this is effectively a feature gap, for example per-session DM targeting or permission prompts routed to channels.
- The new bump pipeline: this is the most likely near-term change, based on the maintainer comments cited in #6328. Pin refreshes such as `remember` ([#6331](https://github.com/anthropics/claude-plugins-official/issues/6331)) would follow automatically.
- `math-proof` ([#6322](https://github.com/anthropics/claude-plugins-official/pull/6322)) is the most likely new plugin to ship, since it is an open PR from an internal account.

## 7. User Feedback Summary
- Plugin authors and third-party vendors are frustrated by stale pins and a lack of communication about the disabled bump workflow. Manual batches on Sep 22 only partly covered the need.
- Channel plugin users (Discord, iMessage, Telegram) are running real multi-session setups and hitting issues with message routing, duplicate delivery and limited interactivity.
- Users on Windows and Java/Maven hit environment-specific issues. Hooks that depend on local interpreters are fragile, and LSP plugins interact badly with build output.
- Skill authors want the eval tooling to match the current skill metadata format.

## 8. Backlog Watch
- [#1872](https://github.com/anthropics/claude-plugins-official/issues/1872): the Telegram feature request, open since 2026-05-15. It also notes that the target repo is uncertain, so triage and routing may help.
- [#6269](https://github.com/anthropics/claude-plugins-official/issues/6269): the catalog-consistency gap, which includes `mongodb-atlas` missing since Aug 10.
- [#6328](https://github.com/anthropics/claude-plugins-official/issues/6328) and [#6331](https://github.com/anthropics/claude-plugins-official/issues/6331): both need a maintainer statement on the bump pipeline's status and timeline.
- [#6315](https://github.com/anthropics/claude-plugins-official/issues/6315): a hook-blocking hang in a security plugin. It deserves a prompt fix.
- [#6322](https://github.com/anthropics/claude-plugins-official/pull/6322): an open PR awaiting review.

**Project health:** Maintainers are still processing listing changes quickly, with same-day closes for repoints. The automation gap and the lack of fix PRs for freshly reported plugin bugs are the main risks.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-09-30

## 1. Today's Overview
Awesome Claude Code is a curated list, so today's activity was resource submissions only. It had 16 issues updated in 24h (14 open, 2 closed), 0 PRs and 0 releases. Nearly every item is a `[Resource]` submission, and most have already passed automated validation (`validation-passed`). Submission volume is high: about 13 new issues were opened on 09-29 and 09-30. Maintainer throughput looks like the bottleneck, since no PRs were merged or closed today.

## 2. Releases
No new releases.

## 3. Project Progress
There were no merged or closed PRs today. The only visible progress is in the automated triage pipeline:
- The validation bot labeled most new submissions `validation-passed`.
- The bot auto-closed the duplicate [#3009](https://github.com/hesreallyhim/awesome-claude-code/issues/3009), which was filed under the "Start Here" category.
- [#3003](https://github.com/hesreallyhim/awesome-claude-code/issues/3003) (`test-delete-me`) was closed as a test issue.

## 4. Community Hot Topics
Comment counts are low, and each is probably a bot validation comment. The most-discussed items are:
- [#2827 claude-token-saver](https://github.com/hesreallyhim/awesome-claude-code/issues/2827) has 3 comments. It's a zero-dependency CLI in Observability > Usage & Cost, open since 09-13.
- [#2709 RuleReceipt](https://github.com/hesreallyhim/awesome-claude-code/issues/2709) has 2 comments. It checks Claude Code session transcripts against rules, in Session Monitors, open since 09-02.

**Themes across today's submissions:**
- **Observability and cost tracking:** claude-token-saver, RuleReceipt and [#3004 Estela](https://github.com/hesreallyhim/awesome-claude-code/issues/3004), which rebuilds billable hours and AI cost per project. Users clearly want visibility into spend and rule compliance.
- **Memory and context persistence:** [#3011 wallaby-agent-rules](https://github.com/hesreallyhim/awesome-claude-code/issues/3011) and [#3006 KYB](https://github.com/hesreallyhim/awesome-claude-code/issues/3006), a git-backed shared memory for agent fleets.
- **Orchestration, testing and quality:**
  - [#3012 kumi](https://github.com/hesreallyhim/awesome-claude-code/issues/3012): coordinator with 20 specialists.
  - [#3005 assay](https://github.com/hesreallyhim/awesome-claude-code/issues/3005): browser-driven bug finding.
  - [#3010 Perch](https://github.com/hesreallyhim/awesome-claude-code/issues/3010): semantic linter.
  - [#3008 Consort](https://github.com/hesreallyhim/awesome-claude-code/issues/3008): spec-first, test-driven framework.
- **Skills, plugins and clients:**
  - [#3013 daily.dev](https://github.com/hesreallyhim/awesome-claude-code/issues/3013)
  - [#3002 own-words](https://github.com/hesreallyhim/awesome-claude-code/issues/3002)
  - [#3007 mirrord](https://github.com/hesreallyhim/awesome-claude-code/issues/3007)
  - [#3001 Reemoat](https://github.com/hesreallyhim/awesome-claude-code/issues/3001) (an ACP-based mobile and desktop client)
  - [#3000 Promptline](https://github.com/hesreallyhim/awesome-claude-code/issues/3000)

## 5. Bugs & Stability
The repo has no product bugs, crashes or regressions. The process problems are:
1. [#3008](https://github.com/hesreallyhim/awesome-claude-code/issues/3008) is `validation-failed`. The Link field contains `kevin-hartman`, not a URL, which is probably why it failed. The duplicate [#3009](https://github.com/hesreallyhim/awesome-claude-code/issues/3009) has the same problem.
2. [#3006 KYB](https://github.com/hesreallyhim/awesome-claude-code/issues/3006) has no validation label and no comments. The validator may not have run on it.
3. [#3013](https://github.com/hesreallyhim/awesome-claude-code/issues/3013), [#3004](https://github.com/hesreallyhim/awesome-claude-code/issues/3004) and [#3000](https://github.com/hesreallyhim/awesome-claude-code/issues/3000) kept the placeholder title `<name of your resource>`. This suggests the issue template doesn't enforce title formatting.

No fix PRs exist or are needed.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The category mix of submissions suggests where the list is growing:
- Observability & Monitoring (Usage & Cost, Session Monitors) is the busiest category.
- Memory & Context Persistence and Agent Orchestration also show steady demand.
- Newer areas are ACP-based alternative clients and Infrastructure & DevOps skills marketplaces.

A possible process improvement is stricter title auto-formatting, or automatic duplicate detection across categories, as in the Consort case.

## 7. User Feedback Summary
Contributors are mostly individual developers building small tools. Their pain points are:
- Token and cost visibility.
- Persisting memory across sessions.
- Verifying that agents follow rules.
- Coordinating multiple agents.

Submitters seem confused by the template: wrong category, a malformed link field, and a duplicate submission. None of the issues has reactions (👍 is 0 across all). The community is not voting on entries, so the maintainer's judgment decides what gets listed.

## 8. Backlog Watch
- [#2709 RuleReceipt](https://github.com/hesreallyhim/awesome-claude-code/issues/2709) has been open since 09-02 (28 days) and passed validation.
- [#2827 claude-token-saver](https://github.com/hesreallyhim/awesome-claude-code/issues/2827) has been open since 09-13 (17 days) and passed validation.
- [#3006 KYB](https://github.com/hesreallyhim/awesome-claude-code/issues/3006) needs a check on why validation didn't run.
- [#3008 Consort](https://github.com/hesreallyhim/awesome-claude-code/issues/3008) needs the submitter to fix the link field and needs its duplicate cleaned up.

With 0 PRs today, the queue of validated submissions will keep growing unless the maintainer reviews them in batches.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-09-30
Repo: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
The project is a curated list, so activity means submission PRs. In the last 24 hours there were no issues, no releases, and 14 PRs updated (9 open, 5 closed). Every PR adds or fixes a link entry. Submission volume is steady, with PR numbers now at #1128. Review looks slow: the two newest PRs are still waiting, and several of the older ones closed today had been sitting in review since 23–25 September.

## 2. Releases
No new releases.

## 3. Project Progress
The 5 PRs closed today show no merges. The data doesn't say whether any of them merged or whether they were rejected or superseded.
- [#1126](https://github.com/VoltAgent/awesome-agent-skills/pull/1126) (ruslanlap/cavemenko, Ukrainian concise-reply skill) was closed. Its follow-up [#1128](https://github.com/VoltAgent/awesome-agent-skills/pull/1128) for the same skill is open, which suggests #1126 was a duplicate that the author replaced.
- [#1101](https://github.com/VoltAgent/awesome-agent-skills/pull/1101) fixes the squirrelscan skill link, which had become a 404 because the skills mirror moved to `squirrelscan/skills`. It was closed after review.
- [#1098](https://github.com/VoltAgent/awesome-agent-skills/pull/1098) (socai-io/jev-social, Marketing) was closed.
- [#1095](https://github.com/VoltAgent/awesome-agent-skills/pull/1095) (OneWave-AI/claude-skills, Productivity, 302 stars) was closed.
- [#1076](https://github.com/VoltAgent/awesome-agent-skills/pull/1076) (hermes-labs-ai/lintlang, agent-instruction linter) was closed.

## 4. Community Hot Topics
No item has comments or reactions (all show 0 👍, and comment counts are missing), so there is no engagement signal. The submissions are grouped by theme below:
- **Localization and language styles:** [#1128](https://github.com/VoltAgent/awesome-agent-skills/pull/1128) cites a measured A/B token-savings figure for Ukrainian output. [#1123](https://github.com/VoltAgent/awesome-agent-skills/pull/1123) adds a 100-skill bilingual EN/RU library.
- **Mobile and frontend development:** [#1125](https://github.com/VoltAgent/awesome-agent-skills/pull/1125) covers Capacitor/Ionic skills for foldable devices, including the iPhone Duo. [#1122](https://github.com/VoltAgent/awesome-agent-skills/pull/1122) adds `marvkr/better-design`, a workflow layer for a design MCP server.
- **Productivity and writing:** [#1124](https://github.com/VoltAgent/awesome-agent-skills/pull/1124) adds presentations. [#1108](https://github.com/VoltAgent/awesome-agent-skills/pull/1108) adds `forjd/better-writing`, which removes AI-writing patterns from prose.
- **Ideation and dev tooling:** [#1121](https://github.com/VoltAgent/awesome-agent-skills/pull/1121) adds What-If, which generates a tiered `WHAT_IF.md` of ideas. [#1127](https://github.com/VoltAgent/awesome-agent-skills/pull/1127) adds `xu-jin-cs/dsh-skills`.
- **Vendor-official skills:** [#1120](https://github.com/VoltAgent/awesome-agent-skills/pull/1120) adds a Resollo marketplace section (buying and selling).

Submitters are increasingly citing quantitative evidence, such as measured A/B results, star counts and downstream usage. They seem to be preparing for the acceptance bar.

## 5. Bugs & Stability
No issues or bugs were reported. The one maintenance item is a broken link: [#1101](https://github.com/VoltAgent/awesome-agent-skills/pull/1101) covers a 404 on the squirrelscan entry. It was closed, so check that the list has the corrected URL.

## 6. Feature Requests & Roadmap Signals
There are no issue-based requests. Signals from the PRs:
- Several submitters add new sections rather than filling existing ones, for example [#1120](https://github.com/VoltAgent/awesome-agent-skills/pull/1120) (an official vendor section) and [#1123](https://github.com/VoltAgent/awesome-agent-skills/pull/1123) (the "Skills Paths for Other AI Coding Assistants" table). This may push for clearer categories for vendor-official and non-Claude tooling.
- Multilingual skills ([#1128](https://github.com/VoltAgent/awesome-agent-skills/pull/1128), [#1123](https://github.com/VoltAgent/awesome-agent-skills/pull/1123)) are a growing niche.
- Link rot fixes like [#1101](https://github.com/VoltAgent/awesome-agent-skills/pull/1101) point to a possible periodic link check.

## 7. User Feedback Summary
Contributors follow CONTRIBUTING closely, for example the 10-word description limit, end-of-section placement and the author/skill-name format. Some disclose that they maintain the skill ([#1095](https://github.com/VoltAgent/awesome-agent-skills/pull/1095)). The likely pain points are unclear inclusion criteria and slow review. The data shows no direct complaints, and there are no comments.

## 8. Backlog Watch
- [#1108](https://github.com/VoltAgent/awesome-agent-skills/pull/1108) (forjd/better-writing) is open with a `[PR-in-review]` label. It was created on 25 September and updated on 29 September.
- Five PRs opened on 29–30 September are unreviewed: [#1120](https://github.com/VoltAgent/awesome-agent-skills/pull/1120), [#1121](https://github.com/VoltAgent/awesome-agent-skills/pull/1121), [#1122](https://github.com/VoltAgent/awesome-agent-skills/pull/1122), [#1123](https://github.com/VoltAgent/awesome-agent-skills/pull/1123) and [#1124](https://github.com/VoltAgent/awesome-agent-skills/pull/1124). The older ones may be waiting on the same review pass that closed the 23–25 September PRs today.
- [#1128](https://github.com/VoltAgent/awesome-agent-skills/pull/1128) and [#1127](https://github.com/VoltAgent/awesome-agent-skills/pull/1127) were opened today. [#1125](https://github.com/VoltAgent/awesome-agent-skills/pull/1125) was also opened today and is likewise unreviewed.
- The maintainers should confirm that [#1128](https://github.com/VoltAgent/awesome-agent-skills/pull/1128) supersedes the closed [#1126](https://github.com/VoltAgent/awesome-agent-skills/pull/1126), so the same skill isn't listed twice.

**Project health:** Contributor interest is high and consistent. Maintainer feedback is sparse: no comments, and the reason for each closure isn't visible. It would help to comment on closed submissions and to publish the acceptance criteria.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
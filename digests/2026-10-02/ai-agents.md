# MCP Ecosystem Digest 2026-10-02

> Issues: 7 | PRs: 16 | Projects covered: 7 | Generated: 2026-10-02 13:30 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-10-02

## 1. Today's Overview
Activity was moderate to high: 7 issues and 16 PRs were updated in 24h, with no new releases. Most of the traffic came from maintainer @cliffhall working on the v2 "agentic software factory" (changesets, release flow, contribution policy). External contributors, mainly @jayhemnani9910, filed several correctness fixes against the git, filesystem and everything servers. Nine PRs and three issues closed, so throughput is healthy. The project is visibly preparing the `v2/main` → `main` merge for v2.0.0.

## 2. Releases
No new releases. [PR #4941](https://github.com/modelcontextprotocol/servers/pull/4941) (changesets "version packages") is open and is the first signal of the new release pipeline.

## 3. Project Progress
**Release and process infrastructure (v2):**
- [#4927](https://github.com/modelcontextprotocol/servers/pull/4927) (closed): changesets for the TypeScript servers, with publishing triggered by GitHub Releases. It supersedes #4604 and credits @olaservo.
- [#4928](https://github.com/modelcontextprotocol/servers/pull/4928) (closed): milestone release flow, release skill, and split and pinned `release.yml`.
- [#4932](https://github.com/modelcontextprotocol/servers/pull/4932) (closed): removes the round cap from the Copilot review loop in `AGENTS.md`.

**Bug fixes:**
- [#4936](https://github.com/modelcontextprotocol/servers/pull/4936) (closed) fixes [#4923](https://github.com/modelcontextprotocol/servers/issues/4923): the `everything` SSE transport no longer prints "Server is running" when the port is already held. Duplicate attempt [#4925](https://github.com/modelcontextprotocol/servers/pull/4925) was closed.
- [#4937](https://github.com/modelcontextprotocol/servers/pull/4937) (closed) fixes [#4922](https://github.com/modelcontextprotocol/servers/issues/4922): memory file-path tests now run in a temp directory. Duplicate attempt [#4926](https://github.com/modelcontextprotocol/servers/pull/4926) was closed.

**Closed without merge, apparently:**
- [#4789](https://github.com/modelcontextprotocol/servers/pull/4789) (filesystem fail-closed reason codes).
- [#2759](https://github.com/modelcontextprotocol/servers/pull/2759) (registry addition, a year old).
- [#4806](https://github.com/modelcontextprotocol/servers/issues/4806) (withdrawn by its author).

## 4. Community Hot Topics
Comment counts are low everywhere, and the data doesn't give PR comment counts or reactions.
- [#4841](https://github.com/modelcontextprotocol/servers/issues/4841) is the most discussed item, with 3 comments. `server-filesystem` emits `$schema: draft-07` in `tools/list`, which strict 2020-12 validators reject. The underlying need is spec-dialect compatibility with strict MCP clients.
- [#4923](https://github.com/modelcontextprotocol/servers/issues/4923) and [#4922](https://github.com/modelcontextprotocol/servers/issues/4922) drew 2 and 1 comments and were closed within a day. Both surfaced while building the pre-push gate ([#4871](https://github.com/modelcontextprotocol/servers/issues/4871)), which shows the new CI tooling paying off.
- The contribution-policy thread ([#4938](https://github.com/modelcontextprotocol/servers/issues/4938), [#4939](https://github.com/modelcontextprotocol/servers/pull/4939), [#4940](https://github.com/modelcontextprotocol/servers/issues/4940)) shows a "issues, not PRs" policy: only maintainers open PRs.

## 5. Bugs & Stability
Ranked by severity:
1. **Data corruption: git server**
   - [#4943](https://github.com/modelcontextprotocol/servers/pull/4943): `git_create_branch` from an annotated tag writes a tag-object hash into `refs/heads/*`, which `git fsck` flags as invalid. Fix PR open.
   - [#4942](https://github.com/modelcontextprotocol/servers/pull/4942): `git_commit` drops the merge parent and leaves `MERGE_HEAD` behind. Fix PR open.
2. **Security-relevant: filesystem**
   - [#4945](https://github.com/modelcontextprotocol/servers/pull/4945): `validatePath` checks a trimmed or unquoted path but then operates on the untrimmed one. The checked path and the used path can differ. Fix PR open.
3. **Compatibility**
   - [#4841](https://github.com/modelcontextprotocol/servers/issues/4841): draft-07 `$schema` rejected by strict validators. No linked fix PR in today's data.
   - [#4944](https://github.com/modelcontextprotocol/servers/pull/4944): `everything` returns 400 instead of the spec-mandated 404 for an unknown streamable HTTP session. Fix PR open.
4. **Resolved today:** the SSE port-conflict bug (#4923) and the flaky memory tests (#4922).

## 6. Feature Requests & Roadmap Signals
- The v2.0.0 merge to `main` is the dominant signal. [#4938](https://github.com/modelcontextprotocol/servers/issues/4938) and [#4939](https://github.com/modelcontextprotocol/servers/pull/4939) bring the contribution policy to `main` first, and [#4941](https://github.com/modelcontextprotocol/servers/pull/4941) is the first changesets release PR.
- [#4946](https://github.com/modelcontextprotocol/servers/pull/4946) proposes adding MemTether to the community server list.
- Likely next: the git, filesystem and everything fixes, and the policy and docs cleanups.

## 7. User Feedback Summary
- Strict-client users hit schema-dialect rejections ([#4841](https://github.com/modelcontextprotocol/servers/issues/4841)).
- Developers running the servers want correct, spec-compliant behavior: honest startup errors, 404 for unknown sessions, and git operations that match git semantics.
- Contributors need clearer guidance. [#4924](https://github.com/modelcontextprotocol/servers/issues/4924) and [#4940](https://github.com/modelcontextprotocol/servers/issues/4940) say `AGENTS.md` and `CONTRIBUTING.md` are stale or transitional.

## 8. Backlog Watch
- [#4841](https://github.com/modelcontextprotocol/servers/issues/4841) has been open since 2026-09-23 with no fix PR. It affects the most widely used server.
- [#4789](https://github.com/modelcontextprotocol/servers/pull/4789) sat for about 3 weeks before closing. This is a possible friction point for external security-hardening contributions.
- [#2759](https://github.com/modelcontextprotocol/servers/pull/2759) took a year to close, which suggests registry-addition PRs were neglected. The new policy of issues over PRs may address this.
- [#4946](https://github.com/modelcontextprotocol/servers/pull/4946) is a new external PR for the community list. Under the "maintainers only open PRs" policy, it may be closed or redirected.
- Unmerged external fixes #4942, #4943, #4944 and #4945 need maintainer review.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP Ecosystem and Agent Tooling, 2026-10-02

## 1. Ecosystem Overview

The projects in this digest are not competing agents. They are the **supply chain around agent tooling**: reference servers (MCP Servers), a canonical registry (MCP Registry), curated directories (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills), a distribution catalog (Docker MCP Registry), and a first-party plugin marketplace (Claude Plugins). Demand is overwhelmingly on the intake side. Directory and registry repos have 50–100 open submissions, while core maintainer throughput is limited. The same three themes recur everywhere: **tool-definition integrity, agent safety and rollback, and payments for agents (x402)**. The ecosystem is growing faster than its review and governance capacity.

## 2. Activity Comparison

Health scores are my own judgment, based only on today's 24h data.

| Project | Issues updated | PRs updated | Release | Health (1–10) | Note |
|---|---|---|---|---|---|
| MCP Servers | 7 (3 closed) | 16 (9 closed) | None. Changesets PR #4941 open. | **8** | Active v2 release prep, fast bug closure, and 4 external fixes awaiting review. |
| MCP Registry | 3 (1 closed) | 0 | None | **5** | Quiet, with no visible maintainer response. The org-namespace 403 (#1649) has been open about 15 days. |
| Awesome MCP Servers | 0 | 101 (96 open) | None | **6** | Strong intake, but no confirmed merges and a large queue. |
| Docker MCP Registry | 1 | 50 (0 closed) | None | **5** | 0 merges, and pin PRs open for 10+ months. Review capacity is the bottleneck. |
| Claude Plugins | 2 | 3 (1 open) | None | **6** | Hookify fixes were closed without a stated reason. #5558 has no maintainer resolution. |
| Awesome Claude Code | 22 (21 closed) | 4 (3 closed) | None | **9** | Automated intake works and the backlog is minimal. |
| Awesome Agent Skills | 0 | 10 (9 open) | None | **6** | 9 open PRs, none merged, and the queue is growing. |

## 3. MCP Servers' Position

**Advantages**
- **It is the only project in the set that ships code and runs a real engineering process.** It has changesets, a milestone release flow, and a pre-push gate (#4871). The pre-push gate found #4922 and #4923, and both were closed within a day.
- **It has the best closure rate among the core repos.** 12 of 23 items closed today, compared with 1 of 3 in the Registry, 0 of 50 in Docker and 0 of 101 in Awesome MCP Servers.
- **It sets the reference behavior.** Its spec-compliance bugs (#4841, #4944) matter more than similar bugs elsewhere, because other servers copy its behavior.

**Technical differences**
- Peers are metadata or link layers. MCP Servers is executable code (git, filesystem, everything, memory), so its bugs are correctness and security bugs: data corruption in git (#4942, #4943) and a path-validation mismatch in filesystem (#4945).
- It is TypeScript-first and moving to GitHub Releases-triggered publishing.

**Community size**
- It has mid-sized volume (23 items in 24h), which is far below the intake repos (101, 50) but with much more maintainer-driven activity.
- Its contribution policy ("issues, not PRs") narrows who can contribute. That may reduce noise, but it already shows friction (#4789 sat about 3 weeks, #2759 took a year).

**Risks:** #4841 (draft-07 `$schema`) has no fix PR, and four external fixes (#4942–#4945) are waiting.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| **Tool-definition integrity / change tracking** | MCP Registry (#1681), Docker MCP Registry (#5363, #5364 WARDEN), MCP Servers (#4841 schema dialect) | Linking servers to tool-change history, "tools last changed" timestamps or hashes, and scanning definitions for prompt injection and hidden Unicode. |
| **Agent safety, rollback and sandboxing** | Awesome MCP Servers (#14958 provio, #15533 unlose), Awesome Claude Code (unlose, Brig, Small Print), Docker (#5370 Runtime), Awesome Agent Skills (#1137) | Policy checks before tool calls, tamper-evident ledgers, VSS snapshots, microVMs, and secret/personal-data scans. |
| **Agent payments (x402 / HTTP 402)** | Awesome MCP Servers (#15543), Docker (#5365), Awesome Agent Skills (#1139) | Pay-per-call in USDC. Registries need a policy for paid hosted servers. |
| **Memory and context persistence** | Awesome Claude Code (4 submissions), Awesome MCP Servers (#15545, #15503), Awesome Agent Skills (#1137, #1140) | Cross-session state, safe `/clear` and `/compact`, and memory consolidation. |
| **Hook and plugin runtime cost and reliability** | Claude Plugins (#5558, #6339, #1865) | Five processes per Bash call, rules that silently stop matching, and unexplained blocks. |
| **Verification of agent output** | Awesome Agent Skills (#1143, #1145) | Independent tests, with acceptance criteria withheld from the coding agent. |
| **Spec compliance** | MCP Servers (#4841, #4944) | 2020-12 `$schema`, and 404 for unknown sessions. |
| **Hosted remote servers** | Docker, Awesome MCP Servers, MCP Servers | Streamable HTTP and OAuth 2.1, and open-source requirements for hosted entries. |

## 5. Differentiation Analysis

| Project | Role | Target users | Architecture / mechanism |
|---|---|---|---|
| MCP Servers | Reference implementations | Server authors and client developers | Code monorepo, changesets, and CI gates. |
| MCP Registry | Canonical metadata catalog | Publishers and sub-registries | Namespace authorization through GitHub org identity. It leaves enrichment to others. |
| Docker MCP Registry | Distribution and trust layer | Enterprise admins and Docker users | Docker-built images and remote entries, plus bot pin updates. |
| Awesome MCP Servers | Public discovery list | Developers choosing servers | PR-based list with bot labels (`has-glama`, `valid-name`, `has-emoji`). |
| Awesome Claude Code | Curated list for Claude Code | Claude Code users | Issue-form intake, validation workflow, and bot-created PRs. |
| Awesome Agent Skills | Skills link directory | Cross-agent users (SKILL.md) | Manual PR table, with category placement still uneven. |
| Claude Plugins | First-party marketplace | Claude Code users | Hook-based plugins and pinned upstream commits. |

The key split is **trust model**. The Registry leaves enrichment to others, Docker leans toward verification (and has the open question of drift after approval), and the lists rely on labels and bots.

## 6. Community Momentum & Maturity

- **Tier 1, high throughput, mature process:** Awesome Claude Code (21 of 22 issues closed, bot pipeline) and MCP Servers (v2 prep with a working gate).
- **Tier 2, high inflow, review-bound:** Awesome MCP Servers (96 open), Docker MCP Registry (50 open, 0 merged), Awesome Agent Skills (9 open, 0 merged). Demand is strong and throughput is weak.
- **Tier 3, quiet or stalled:** MCP Registry (no PRs, 15-day-old bug) and Claude Plugins (small volume, with external fixes closed).
- **Rapidly iterating:** MCP Servers (v2.0.0 merge approaching).
- **Stabilizing:** Awesome Claude Code, whose intake pipeline is routine.
- **Caveat:** each digest covers 24h, so the "0 merged" results may be a snapshot effect. Comment and reaction data were mostly missing.

## 7. Trend Signals

1. **Trust moves from "what is the server" to "what changed."** Three separate projects raised tool-change tracking on the same day. Developers should hash or pin tool definitions and alert on drift.
2. **Agent safety is becoming a product category.** Snapshots, policy gates, microVMs and audit ledgers appear in four projects. Expect agents to ship with built-in rollback.
3. **Agent-native payments are early but real.** x402 appears in three projects. Server authors should plan for 402 handling, and registries need a policy for paid hosted servers.
4. **Governance is the bottleneck.** Maintainers are adopting bots, AI-assisted review loops and "issues, not PRs" policies to cope with volume. Plan for intake automation from the start.
5. **Hooks are powerful but costly.** Process fan-out and silent rule failures show that extension runtimes need conditional gating and clear error messages.
6. **Spec compliance still matters.** Strict-client rejections (draft-07 schema) and incorrect status codes cost users the most.
7. **The SKILL.md format is becoming the cross-agent standard.** Submissions target multi-agent pipelines, and non-English skills and non-coding domains are growing.

**Takeaway for decision-makers:** build on the reference servers, verify and pin tool definitions rather than trusting registry listings, and don't assume registry review will keep pace with submissions.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-10-02

## 1. Today's Overview
The registry had low activity over the last 24 hours. There were 3 issues updated (2 open, 1 closed), no PRs updated, and no new releases. Two of the three issues are open and unresolved. One is a publishing bug affecting org namespaces. The other is an ecosystem enhancement idea from a third party. The project looks stable, but there is no visible maintainer response in the data. No code changes advanced today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today. The only closure was an issue:
- [#1642](https://github.com/modelcontextprotocol/registry/issues/1642) "CSOAI GSPC Measurement MCP Server" was closed. The author (CSOAI-ORG) withdrew it and requested no action from the project. It did not involve a code or feature change.

## 4. Community Hot Topics
Engagement is thin across all items.
- [#1649](https://github.com/modelcontextprotocol/registry/issues/1649) is the most active item, with 2 comments and 2 👍. A user reports a 403 when publishing to an org namespace (`io.github.<org>/*`). This happens even though they meet both documented prerequisites: sole Owner of the GitHub org and public membership. The underlying need is a clear, reliable GitHub-org namespace authorization flow for organization-owned servers. Either the docs and actual behavior disagree, or there is an undocumented requirement.
- [#1681](https://github.com/modelcontextprotocol/registry/issues/1681) has 0 comments and 0 👍. It proposes linking each server to its observed tool-change history. The author maintains *heldfast*, which scans the registry (about 9,700 npm packages and 19,700 hosted endpoints). This reflects interest in supply-chain integrity and monitoring of tool-definition drift.

## 5. Bugs & Stability
- **Medium severity: [#1649](https://github.com/modelcontextprotocol/registry/issues/1649)** is a publish 403 for org namespaces despite Owner role and public membership. It blocks org-level publishing under `io.github.<org>/*`. The reporter followed `docs/modelcontextprotocol-io/authentication.mdx`. It has been open since 2026-09-17 (about 2 weeks). No fix PR is linked, and no PRs were updated today. It may be a defect in the authorization logic or a documentation gap.

No crashes or regressions were reported.

## 6. Feature Requests & Roadmap Signals
- [#1681](https://github.com/modelcontextprotocol/registry/issues/1681) asks for each server to be linked to its observed tool-change history. The issue itself says the registry is a metadata catalog and leaves enrichment to sub-registries and clients. That suggests maintainers are unlikely to build this into the core. A lightweight outcome is more plausible, such as a documented extension point, metadata field, or link convention for third-party enrichment services. It is unlikely to ship in the next version.

## 7. User Feedback Summary
- **Pain point:** Publishers using GitHub org namespaces hit confusing 403 errors even when they follow the documented steps (#1649).
- **Use case:** Security-minded tooling, such as change grading and tamper-evident history for tool definitions, is emerging around the registry (#1681).
- **Sentiment:** Neutral. There are no complaints about registry reliability or performance in today's data.

## 8. Backlog Watch
- [#1649](https://github.com/modelcontextprotocol/registry/issues/1649) has been open for about 15 days. It needs maintainer attention: confirm whether it is a bug or a docs issue, and update the authentication docs or fix the namespace verification.
- [#1681](https://github.com/modelcontextprotocol/registry/issues/1681) is new (2026-10-01) and has had no response. It needs maintainer triage to decide whether it is in scope.

**Project health:** Stable but quiet. The main risk is the unresolved org-namespace publishing problem, which affects onboarding for organization publishers.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-02

Source: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

## 1. Today's Overview
Activity today was PR-only. There were 0 issues, 0 releases, and 101 PRs updated (96 open, 5 merged or closed). Almost all of the PRs are new-server submissions, and many were opened today (#15533–#15545). The list is the maintainers' intake queue, and none of the visible PRs shows a merge. The comment counts are reported as `undefined` and every PR has 0 👍, so I can't rank discussion volume from this data. Intake looks healthy. The open queue is large, and a few submissions have been waiting for weeks.

## 2. Releases
No new releases.

## 3. Project Progress
The data shows no confirmed merges. It only says 5 PRs were "merged/closed", and the sample includes two closed PRs. Both look like cleanup, not feature merges:
- [#15535](https://github.com/punkpeye/awesome-mcp-servers/pull/15535) (BugScan MCP Server) was closed. It was labeled `missing-glama` and `missing-emoji`.
- [#15539](https://github.com/punkpeye/awesome-mcp-servers/pull/15539) (CabalSpy) was closed. It duplicates [#15540](https://github.com/punkpeye/awesome-mcp-servers/pull/15540), which was opened the same day and is still open. This was probably a resubmission.

The other three closed or merged PRs aren't in the top-20 sample, so I can't say what they were.

## 4. Community Hot Topics
No PR has usable comment or reaction data. Themes can still be read from what was submitted today:
- **Finance & Fintech / crypto:** [#15543](https://github.com/punkpeye/awesome-mcp-servers/pull/15543) (P2Flux, x402 payments in USDC on Base), [#15542](https://github.com/punkpeye/awesome-mcp-servers/pull/15542) (GDEX trading), and [#15540](https://github.com/punkpeye/awesome-mcp-servers/pull/15540) (CabalSpy wallet tracking). Agent payments and on-chain data are a clear growth area.
- **Agent safety and governance:** [#14958](https://github.com/punkpeye/awesome-mcp-servers/pull/14958) (provio, a policy check before each tool call with a tamper-evident ledger) and [#15533](https://github.com/punkpeye/awesome-mcp-servers/pull/15533) (unlose, Windows VSS snapshots before risky file operations).
- **Knowledge and memory:** [#15545](https://github.com/punkpeye/awesome-mcp-servers/pull/15545) (Continuity story bible) and [#15503](https://github.com/punkpeye/awesome-mcp-servers/pull/15503) (PremAgentic, on-prem retrieval with permission checks).
- **Multimedia and creative:** [#15536](https://github.com/punkpeye/awesome-mcp-servers/pull/15536) (ModelsLab), [#15534](https://github.com/punkpeye/awesome-mcp-servers/pull/15534) (Faceless.so), and [#11570](https://github.com/punkpeye/awesome-mcp-servers/pull/11570) (MascotLab).
- **Developer tools:** [#15538](https://github.com/punkpeye/awesome-mcp-servers/pull/15538) (Roslyn for C#/.NET), [#13356](https://github.com/punkpeye/awesome-mcp-servers/pull/13356) (standup-mr), and [#11371](https://github.com/punkpeye/awesome-mcp-servers/pull/11371) (dependency-fitness-mcp).

## 5. Bugs & Stability
No issues were reported, and no bugs or regressions appear in the PR data. The items below are list-hygiene problems:
- [#11371](https://github.com/punkpeye/awesome-mcp-servers/pull/11371) is labeled `merge-conflict`.
- [#15541](https://github.com/punkpeye/awesome-mcp-servers/pull/15541) is labeled `duplicate`. It adds one entry and removes another duplicate entry.
- Many PRs have the `missing-glama` label, so their Glama listing or score badge is missing. Examples are #15545, #15544, #15543, #15542, #15536, #15534, and #15533.
- [#15544](https://github.com/punkpeye/awesome-mcp-servers/pull/15544) is labeled `missing-emoji`.

## 6. Feature Requests & Roadmap Signals
The repo has no issues, so there are no direct feature requests. The submissions point to where the ecosystem is heading:
- Payments for agents (x402) and on-chain trading.
- Policy enforcement and audit trails for tool calls.
- Snapshot and rollback safety for agent file operations.
- Hosted remote servers using Streamable HTTP and OAuth 2.1, as in [#15545](https://github.com/punkpeye/awesome-mcp-servers/pull/15545).
- Agent-to-agent communication ([#15544](https://github.com/punkpeye/awesome-mcp-servers/pull/15544), SmithTalks).

Category placement is a likely friction point. Finance & Fintech is getting crowded with crypto servers. I expect maintainers to keep enforcing the `has-glama` requirement and the naming and emoji conventions.

## 7. User Feedback Summary
There is no direct user feedback in this data. What the contributors' PR descriptions show:
- Submitters often disclose a conflict of interest, as in [#15228](https://github.com/punkpeye/awesome-mcp-servers/pull/15228).
- Projects are being renamed. [#14958](https://github.com/punkpeye/awesome-mcp-servers/pull/14958) went from writ to provio on 2026-09-30 because of a name collision.
- Some submitters resubmit after a failed first attempt (#15539 and #15540).
- Contributors rely on the bot labels (`has-glama`, `valid-name`, `has-emoji`) to find what to fix.

## 8. Backlog Watch
These PRs have been open the longest and are still being updated:
- [#11371](https://github.com/punkpeye/awesome-mcp-servers/pull/11371) dependency-fitness-mcp, open since 2026-08-02. It has a `merge-conflict` label. It supersedes #7494, which was closed for inactivity, so it needs a rebase or a maintainer decision.
- [#11570](https://github.com/punkpeye/awesome-mcp-servers/pull/11570) MascotLab, open since 2026-08-05. It is missing a Glama listing.
- [#13356](https://github.com/punkpeye/awesome-mcp-servers/pull/13356) standup-mr, open since 2026-09-01. It has all the compliance labels and is ready for review.
- [#14958](https://github.com/punkpeye/awesome-mcp-servers/pull/14958) provio, open since 2026-09-23. It is compliant and was updated for the rename.
- [#15228](https://github.com/punkpeye/awesome-mcp-servers/pull/15228) DropTheHassle, open since 2026-09-27, and [#15273](https://github.com/punkpeye/awesome-mcp-servers/pull/15273) Senzii-App, open since 2026-09-28. Both are compliant and waiting for review.

With 96 PRs open, maintainers could batch-merge the compliant ones (`has-glama`, `valid-name`, `has-emoji`) and close or auto-nudge the ones missing a Glama listing.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-02

## 1. Today's Overview
The registry is in intake mode: 50 PRs were updated in the last 24h, all still open, with 0 merged or closed. Only 1 issue was active and there were no releases. About 12 PRs are new server submissions opened on 2026-10-01/02, and the rest are automated pin updates from `mcp-registry-bot[bot]`. Submission volume is healthy. The visible data shows no maintainer throughput today, so review capacity looks like the bottleneck. Comment counts were returned as `undefined`, so engagement can't be ranked.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. The work in flight is:
- **New remote (hosted) servers.** These dominate the queue:
  - [#5365 AIMarket Hub](https://github.com/docker/mcp-registry/pull/5365): streamable-http, x402 paid tiers.
  - [#5378 donmangu-jobs](https://github.com/docker/mcp-registry/pull/5378)
  - [#5376 Relvato](https://github.com/docker/mcp-registry/pull/5376): website monitoring.
  - [#5375 LiveReacting](https://github.com/docker/mcp-registry/pull/5375): live streaming.
  - [#5374 8B AI Website Builder](https://github.com/docker/mcp-registry/pull/5374)
  - [#5373 Yatmo](https://github.com/docker/mcp-registry/pull/5373): real-estate neighbourhood data.
  - [#5372 RoboHub](https://github.com/docker/mcp-registry/pull/5372): robot directory.
  - [#5371 Twelfth](https://github.com/docker/mcp-registry/pull/5371): retail workspace data.
  - [#5370 Runtime](https://github.com/docker/mcp-registry/pull/5370): Firecracker microVM sandboxes for agents.
- **New local, Docker-built servers:**
  - [#5364 WARDEN](https://github.com/docker/mcp-registry/pull/5364): MCP security firewall that scans tool definitions for prompt injection, secret requests and hidden Unicode.
  - [#5377 Mailtrap](https://github.com/docker/mcp-registry/pull/5377): the official server, with a public repo.
  - [#5320 edupage-mcp](https://github.com/oliverhruby/edupage-mcp), PR [#5320](https://github.com/docker/mcp-registry/pull/5320): school portal access. It was opened 2026-09-30 and updated again today.
- **Automated pin updates.** Examples are [#4369 testkube](https://github.com/docker/mcp-registry/pull/4369), [#4094 temporal](https://github.com/docker/mcp-registry/pull/4094), [#1083 stripe](https://github.com/docker/mcp-registry/pull/1083) and [#4368 sonarqube](https://github.com/docker/mcp-registry/pull/4368).

## 4. Community Hot Topics
Comment counts are unavailable, so these are chosen on substance:
- [#5363 Show when a catalog server's tools last changed](https://github.com/docker/mcp-registry/issues/5363) is the only active issue. It asks whether Docker alerts admins when a verified server's tool descriptions or schemas change. The underlying need is protection against "rug-pull" or tool-poisoning changes. Hosted servers have no image to rescan, so this gap is real.
- [#5364 WARDEN](https://github.com/docker/mcp-registry/pull/5364) addresses the same concern from another direction, scanning tool definitions before a model sees them. Together they show that tool-definition integrity is a live theme.
- [#5365 AIMarket Hub](https://github.com/docker/mcp-registry/pull/5365) uses HTTP 402 / x402 pay-per-call. It is an early monetization pattern the registry may need a policy for.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. The one stability-adjacent item is the trust and verification gap raised in [#5363](https://github.com/docker/mcp-registry/issues/5363). No fix PR exists.

## 6. Feature Requests & Roadmap Signals
- [#5363](https://github.com/docker/mcp-registry/issues/5363) proposes surfacing a "tools last changed" timestamp or hash for catalog servers, with change notification to admins. It would likely need a maintainer response and design work first, so I don't expect it in the next release.
- Several submissions are for remote servers, some closed-source (for example [#5371 Twelfth](https://github.com/docker/mcp-registry/pull/5371), [#5378](https://github.com/docker/mcp-registry/pull/5378)). That suggests the registry's remote/hosted path is gaining use. Expect clarification of the open-source requirement for hosted entries.

## 7. User Feedback Summary
Direct feedback is limited to #5363, which raises a security-governance concern about verified servers drifting after approval. Submissions point to demand in several areas:
- agent infrastructure (sandboxes)
- email delivery and testing
- retail and real-estate data
- website monitoring
- education
- live streaming

Several PR descriptions are unfilled templates (for example [#5373](https://github.com/docker/mcp-registry/pull/5373)). That suggests submitters find the process unclear.

## 8. Backlog Watch
- Bot pin-update PRs have been open for a long time and are still being touched. They are [#614](https://github.com/docker/mcp-registry/pull/614) and [#621](https://github.com/docker/mcp-registry/pull/621) from 2025-11-07, [#799](https://github.com/docker/mcp-registry/pull/799) from 2025-11-27, and [#1083](https://github.com/docker/mcp-registry/pull/1083) from 2026-02-07. These need a merge, close or automation fix, because stale pins can leave catalog servers on outdated commits.
- [#5320 edupage-mcp](https://github.com/docker/mcp-registry/pull/5320) has waited since 2026-09-30.
- [#5373](https://github.com/docker/mcp-registry/pull/5373) has an unfilled template and needs submitter follow-up.
- Maintainers should answer [#5363](https://github.com/docker/mcp-registry/issues/5363) with the current verification behavior for hosted servers.

**Health assessment:** Inbound demand is strong, but today shows 0 merges and a growing queue, including pin PRs open for 10+ months. Review and merge throughput needs attention.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-10-02

## 1. Today's Overview
Activity was low-to-moderate: 2 issues and 3 PRs were updated in the last 24 hours, with no new releases. Most of it centers on the `hookify` plugin. Two community fix PRs were opened and closed on the same day, and a long-open `hookify` bug is still active. The one open PR is a routine maintainer-driven `aws-core` version pin. A `security-guidance` performance issue is attracting renewed attention. Overall health is steady, but the closed community fixes suggest a contribution-intake friction point.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. Two were closed without a visible merge, and one is open:

- **[PR #6343](https://github.com/anthropics/claude-plugins-official/pull/6343)** (CLOSED), `fix(hookify): include permissionDecisionReason on PreToolUse/PostToolUse deny`. It closes #6314 by emitting `permissionDecisionReason` when a `block` rule matches, so the model sees the rule body instead of a generic "Blocked by hook" message. The same defect is described in [Issue #1865](https://github.com/anthropics/claude-plugins-official/issues/1865).
- **[PR #6342](https://github.com/anthropics/claude-plugins-official/pull/6342)** (CLOSED), `fix(hookify): search project root for rule files`. It closes #6339. Rules in `.claude/hookify.*.local.md` stopped matching when the session's working directory drifted from the project root, and the PR resolves rule files against the project root.
- **[PR #6344](https://github.com/anthropics/claude-plugins-official/pull/6344)** (OPEN), `bump(aws-core): 7bde20fa → 0d6167ad`. It pins `aws-core` to `aws/agent-toolkit-for-aws@0d6167ad` at the AWS team's request and supersedes #6325, which was auto-closed as an external PR. The range is skill-content updates: CloudWatch observability and setup, EventBridge event bus, Well-Architected review, and databases.

Note: the data doesn't say why #6342 and #6343 were closed. They may have been superseded or declined, so treat them as unmerged until confirmed.

## 4. Community Hot Topics
Engagement is modest, with no item above 2 comments.

- **[Issue #5558](https://github.com/anthropics/claude-plugins-official/issues/5558)** (2 comments, 👍 1): in `security-guidance` 2.0.7, `PostToolUse[Bash]` contains five hook entries, each gated by an `if` clause. The harness spawns every entry and evaluates the `if` afterward, so each Bash call starts five Python processes. Users want conditional gating before spawn, or consolidation into a single entry, to cut per-command latency and CPU cost. This is a real concern because Bash is the most frequently used tool.
- **[Issue #1865](https://github.com/anthropics/claude-plugins-official/issues/1865)** (1 comment, 👍 1): the `hookify` block path leaves `permissionDecisionReason` unset, so the agent never sees the rule body. Users need blocks to be self-explanatory so the agent can correct course.

## 5. Bugs & Stability
Ranked by impact:

1. **Hookify working-directory drift** ([PR #6342](https://github.com/anthropics/claude-plugins-official/pull/6342), issue #6339). Rules silently stop matching after a `cd` into a subfolder, so a guardrail is silently disabled. This is the highest severity because it fails without any signal. A fix PR exists but is closed.
2. **Hookify block message lacks a reason** ([#1865](https://github.com/anthropics/claude-plugins-official/issues/1865), issue #6314, [PR #6343](https://github.com/anthropics/claude-plugins-official/pull/6343)). Blocks work, but the agent gets a generic error and can't self-correct. Medium severity. A fix PR exists but is closed.
3. **security-guidance process fan-out** ([#5558](https://github.com/anthropics/claude-plugins-official/issues/5558)). A performance regression: five processes are spawned per Bash call. No fix PR is linked.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. The implied asks are:

- Pre-spawn conditional evaluation, or hook consolidation, for `security-guidance` (#5558).
- Richer deny reasons in `hookify`.

The hookify fixes are small and well scoped, and two independent fixes have been proposed, so the next `hookify` update will probably include both. The `aws-core` pin will likely land in the next marketplace sync.

## 7. User Feedback Summary
- Users run hook-based plugins heavily and are sensitive to their hidden costs: latency from process spawning and silent failures when rules don't apply.
- Agent-facing messaging matters. Users expect a block to explain itself so the model can adapt.
- Contributors are willing to submit fixes quickly, within a day of filing, which shows healthy community engagement.

## 8. Backlog Watch
- **[Issue #1865](https://github.com/anthropics/claude-plugins-official/issues/1865)**: open since 2026-05-14 (about 4.5 months), with 1 comment. It was refreshed on 2026-10-01 and still needs a maintainer decision, particularly because the fix PR #6343 was closed.
- **[Issue #5558](https://github.com/anthropics/claude-plugins-official/issues/5558)**: open since 2026-08-21 (about 6 weeks), with no maintainer resolution visible. The cost scales with every Bash call, so it deserves triage.
- **Contribution policy**: #6325 was auto-closed as an external PR, and #6342 and #6343 were closed the same day. Maintainers could clarify how external fixes to first-party plugins should be submitted, such as by filing upstream or taking them over.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Project Digest, 2026-10-02

## 1. Today's Overview
Activity was high but almost entirely routine. 22 issues were updated in the last 24h, and 21 of them were closed. They were nearly all `resource-submission` issues that went through the automated validation workflow. 4 PRs were updated, all authored by `github-actions[bot]`, and 3 of them were closed. There were no releases and no bug reports. The one open PR is the bot-created `pwa2play` PR, and the one open issue is a submission that passed validation. The repo works as a curated list with an automated intake pipeline, and that pipeline looks healthy and fast.

## 2. Releases
No new releases.

## 3. Project Progress
All PR activity today was the bot-driven "Add resource" flow:
- [PR #3037](https://github.com/hesreallyhim/awesome-claude-code/pull/3037) (closed): Add **daily.dev** under Skills. It comes from [Issue #3013](https://github.com/hesreallyhim/awesome-claude-code/issues/3013), which is labeled `approved, pr-created`.
- [PR #3035](https://github.com/hesreallyhim/awesome-claude-code/pull/3035) and [PR #3034](https://github.com/hesreallyhim/awesome-claude-code/pull/3034) (both closed): Add **blender-kiln** under Creative Media. Two PRs exist for the same resource ([Issue #3032](https://github.com/hesreallyhim/awesome-claude-code/issues/3032)), which suggests the bot ran twice or a re-run was needed. #3032 had 5 comments, the most of any item today.
- [PR #3036](https://github.com/hesreallyhim/awesome-claude-code/pull/3036) (open): Add **pwa2play** under Infrastructure & DevOps. It comes from [Issue #3014](https://github.com/hesreallyhim/awesome-claude-code/issues/3014), which is already marked `approved, pr-created`.

The data doesn't say whether the closed PRs were merged or just closed. The duplicate blender-kiln PRs suggest at least one was closed without merging.

## 4. Community Hot Topics
Engagement is minimal. There are no 👍 reactions anywhere, and at most 5 comments on a single item.
- [#3032 blender-kiln](https://github.com/hesreallyhim/awesome-claude-code/issues/3032) has 5 comments. It is a plugin that drives Blender over MCP, and the extra comments probably reflect the duplicate-PR handling.
- [#3013 daily.dev](https://github.com/hesreallyhim/awesome-claude-code/issues/3013) and [#3014 pwa2play](https://github.com/hesreallyhim/awesome-claude-code/issues/3014) have 3 comments each. Both were approved and moved to PR.

**Submission themes today** (by category):
- **Memory & Context Persistence** has 4: [Wallaby](https://github.com/hesreallyhim/awesome-claude-code/issues/3011), [Threadnote](https://github.com/hesreallyhim/awesome-claude-code/issues/3016), [cani-c](https://github.com/hesreallyhim/awesome-claude-code/issues/3029), [clexo](https://github.com/hesreallyhim/awesome-claude-code/issues/3030). Users want to manage context, `/clear` and `/compact` safely, and carry state across sessions.
- **Skills** has 4: daily.dev, [oracle3](https://github.com/hesreallyhim/awesome-claude-code/issues/3015), [HarborRank SEO](https://github.com/hesreallyhim/awesome-claude-code/issues/3020), [Scaffold](https://github.com/hesreallyhim/awesome-claude-code/issues/3023).
- **Remote control and I/O** has 2: [herdr web ui](https://github.com/hesreallyhim/awesome-claude-code/issues/3022) and [better-tg-cli](https://github.com/hesreallyhim/awesome-claude-code/issues/3025).
- **Security** has 2: [Small Print](https://github.com/hesreallyhim/awesome-claude-code/issues/3028) and [unlose](https://github.com/hesreallyhim/awesome-claude-code/issues/3033).
- Others: [Perch](https://github.com/hesreallyhim/awesome-claude-code/issues/3010) (Open Source Software), [Hats](https://github.com/hesreallyhim/awesome-claude-code/issues/3017) (account switching), [Translate Like Me](https://github.com/hesreallyhim/awesome-claude-code/issues/3026) (Writing), [DockTerm](https://github.com/hesreallyhim/awesome-claude-code/issues/3027) (Alternative Clients), [Estela](https://github.com/hesreallyhim/awesome-claude-code/issues/3004) (Usage & Cost).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only process problems are the following:
- [#3038 emsk-pr](https://github.com/hesreallyhim/awesome-claude-code/issues/3038) and [#3031 Brig](https://github.com/hesreallyhim/awesome-claude-code/issues/3031) were `auto-closed` while still `validation-pending`. This could be because the submission failed validation, or because the submitter didn't follow the template. The data doesn't say which.
- [#3019 Parlel MCP](https://github.com/hesreallyhim/awesome-claude-code/issues/3019) was closed with no labels and 0 comments. Its body doesn't follow the standard template (the Author Name and Author Link fields are missing), so it was probably closed for non-conformance.
- The two blender-kiln PRs are a minor pipeline quirk, but no fix is needed.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests for the list itself. The submissions point to where ecosystem demand is growing:
- Session memory and context hygiene tools are the largest cluster.
- Security and safety tooling (snapshot guards, an MCP and skills inventory/audit, and microVM sandboxes like Brig) continues to grow.
- Remote and mobile control (Telegram, web UI) and non-terminal clients (DockTerm).
- Domain skills outside coding: SEO, prediction markets, translation and 3D/Blender.

Expect the next list update to add daily.dev, pwa2play and blender-kiln, and possibly more of today's validated items.

## 7. User Feedback Summary
There is no direct feedback on the project, and no reactions. The submissions do show a few user needs:
- Losing context or state in long sessions (Memory category).
- Safety when running agents, such as sandboxing and snapshots.
- Managing several accounts and sessions (Hats, herdr).
- Tracking cost and billable hours (Estela).

Several auto-closed or non-conforming submissions suggest some contributors still struggle with the submission template.

## 8. Backlog Watch
- [Issue #3004 Estela](https://github.com/hesreallyhim/awesome-claude-code/issues/3004) is the only open issue. It was created 2026-09-29, has passed validation, and is awaiting approval. It is only a few days old, so this is not yet a concern.
- [PR #3036 pwa2play](https://github.com/hesreallyhim/awesome-claude-code/pull/3036) is open and needs a maintainer to merge it.
- Many `validation-passed` issues from 09-30 and 10-01 were closed today without the `approved, pr-created` labels. The data doesn't show whether they were merged by another route or dismissed. A maintainer should confirm that they didn't just drop out of the queue.

**Project health:** high throughput, a very small backlog, no bugs, and automated intake that works. Reaction counts are low, which is normal for a curated list.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-02

## 1. Today's Overview
Activity is moderate and entirely contribution-driven. In the last 24h there were 10 PRs updated (9 open, 1 closed) and no issues or releases. Eight of the nine open PRs were created on 2026-10-01 or 2026-10-02, so submissions keep arriving. No PR shows comments or reactions, so the signal today is intake volume, not discussion. This is a curated list that works as a link directory, which explains why it has no code releases. Nothing was merged today, so the review queue is the thing to watch.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged. One PR was closed without merging (the data does not say why):
- [#1123](https://github.com/VoltAgent/awesome-agent-skills/pull/1123) *Add ssrjkk/agent-skills, 100 curated bilingual skills* (closed 2026-10-02). It proposed adding a 100-skill EN+RU library to the "Skills Paths for Other AI Coding Assistants" table. Its listed scope was 16 domains with a five-dimension quality pipeline. The close suggests maintainers are still triaging submissions, but the reason is unknown.

## 4. Community Hot Topics
No PR or issue has comments or 👍 reactions, so no item is "hot" by engagement. The new submissions cluster in these themes:
- **Testing and verification workflows**
  - [#1145 pwguler/skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1145): 14 skills built on a drill, implement, verify, land loop.
  - [#1143 gal-a/qikly](https://github.com/VoltAgent/awesome-agent-skills/pull/1143): generates a pytest suite from acceptance criteria and withholds those criteria from the coding agent.
  - Together they show demand for guardrails that stop agents from declaring work done without proof.
- **Agent orchestration and memory**
  - [#1140 gongdear/cline-pilot](https://github.com/VoltAgent/awesome-agent-skills/pull/1140): delegates coding tasks to the Cline CLI, with persistent memory and multi-task orchestration.
  - [#1137 thdelmas/agent-nervous-system](https://github.com/VoltAgent/awesome-agent-skills/pull/1137): ten self-maintenance skills for long-running agents, including session-start world diff, memory consolidation, and a secret/personal-data scan.
- **Productivity and content**
  - [#1141 sujunmin/agy-ppt](https://github.com/VoltAgent/awesome-agent-skills/pull/1141): PowerPoint generation.
  - [#1138 alapha888/agent-skills-en](https://github.com/VoltAgent/awesome-agent-skills/pull/1138): five everyday knowledge-work skills.
  - [#1142 nagameTW/formosa-humanizer](https://github.com/VoltAgent/awesome-agent-skills/pull/1142): Taiwan Traditional Chinese humanizer, described as a rewrite of blader/humanizer rather than a translation.
- **Domain and tool integrations**
  - [#1144 elithril/blender-kiln](https://github.com/VoltAgent/awesome-agent-skills/pull/1144): turns a brief or photo into a validated 3D asset through a Blender MCP server.
  - [#1139 Stock Bloc](https://github.com/VoltAgent/awesome-agent-skills/pull/1139): financial data APIs paid per call in USDC through x402.

## 5. Bugs & Stability
No issues or bugs were reported today, and no regressions appear in the data. For a curated list the realistic risks are broken links, duplicate entries, and wrong category placement. None are flagged today.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. The submissions suggest where the list is growing:
- Non-English skills (Taiwan Chinese, Russian/English) are growing.
- Paid and agent-to-agent API skills (x402) and MCP-backed skills (Blender) are appearing.
- Context engineering and memory skills are a likely area for expansion.
- Placement is uneven. Entries target different sections (Development and Testing, Marketing, Productivity and Collaboration, Specialized Domains, Context Engineering). The maintainers may need clearer category guidance, though that is an inference and not something anyone has requested.

## 7. User Feedback Summary
There are no comments, so there is no direct feedback. The submission texts point to these needs:
- Independent verification of agent output (#1143, #1145).
- Persistent memory and self-maintenance for long sessions (#1137, #1140).
- Language-specific writing quality (#1142).
- Interoperability across several agents. #1141 targets an Antigravity+Kiro+Codex pipeline and #1145 says it works in any agent that loads SKILL.md files.

Several authors state a license (MIT, Apache-2.0) or maintenance history, which suggests they are meeting quality expectations.

## 8. Backlog Watch
The data covers only the last 24h, so I can't identify long-unanswered items. The PR numbers run from #1137 to #1145, and every open PR in the data is 1–2 days old. With nine open and none merged today, the queue is growing. Maintainers should review these first:
- [#1139 Stock Bloc](https://github.com/VoltAgent/awesome-agent-skills/pull/1139): involves a paid service and USDC payments, so it may need extra vetting.
- [#1144 blender-kiln](https://github.com/VoltAgent/awesome-agent-skills/pull/1144) and [#1143 qikly](https://github.com/VoltAgent/awesome-agent-skills/pull/1143): self-promotional submissions that need a check for quality and duplication.
- [#1137 agent-nervous-system](https://github.com/VoltAgent/awesome-agent-skills/pull/1137): bundles ten skills under one entry, so it needs a policy decision on how to list them.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
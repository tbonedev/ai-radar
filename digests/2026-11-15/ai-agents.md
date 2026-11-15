# MCP Ecosystem Digest 2026-11-15

> Issues: 1 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-15 14:28 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-15

## 1. Today's Overview
Activity in `modelcontextprotocol/servers` was minimal over the last 24 hours. There was one updated issue, no PR activity and no new releases. The only item is a community request to list a third-party project in `ADDITIONAL.md`. It has no comments or reactions. The repo shows no regressions or urgent problems today. The quiet day looks like a lull in maintainer and contributor activity, not a sign of poor health.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours, so no features or fixes advanced today.

## 4. Community Hot Topics
Nothing drew discussion today. The single active item has 0 comments and 0 👍:

- **[#5551 Add Cowork to ADDITIONAL.md](https://github.com/modelcontextprotocol/servers/issues/5551)** (OPEN, by @slashman413, created and updated 2026-11-15). The author asks to list **Cowork** (https://github.com/slashman413/cowork), a TypeScript open-source multi-agent collaboration platform. They want it under *Frameworks → For clients* (or *For servers*).
  - **Underlying need:** Third-party projects want visibility in the official servers repo's community listing. This points to `ADDITIONAL.md` working as a discovery channel for the MCP ecosystem. It also shows that the "For clients" and "For servers" categories may be unclear to submitters. The author didn't pick one.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there are no fix PRs to track.

## 6. Feature Requests & Roadmap Signals
- The only request is the `ADDITIONAL.md` listing in #5551. It is a documentation or listing change, not a product feature.
- **Outlook:** It doesn't affect the roadmap or server code. Acceptance depends on the maintainers' listing policy. The repo has previously steered third-party listings toward the MCP registry, so I'd expect a redirect or a docs-only merge. I haven't verified that policy here, so treat it as a guess.

## 7. User Feedback Summary
There is not enough data for pain-point analysis. The one signal is that contributors have an appetite for ecosystem listings of multi-agent tooling. The unresolved choice between client and server categories suggests the contribution guidance could be clearer.

## 8. Backlog Watch
The 24-hour data has no long-unanswered items. #5551 is new and not yet stale, though it has no maintainer response yet. A full backlog assessment would need the wider list of open issues and PRs, which is outside this snapshot.

**Health summary:** Today's activity was low, with no incidents or blockers.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem (2026-11-15)

## 1. Ecosystem Overview
The projects in this digest are mostly **distribution and discovery layers** around MCP, not agent runtimes. They are the reference servers, the official registry, community lists, Docker's catalog, the Claude plugin directory and a skills list. Inbound contribution volume is strong: 137 PRs updated in Awesome MCP Servers and 50 in Docker MCP Registry. Maintainer throughput is the common constraint, because nearly every project shows few merges and a growing queue. Trust and verification (Verified orgs, Glama gates, tool-signature fingerprints) is becoming the main governance issue. Awesome Claude Code had no activity, so it is excluded from comparisons.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers (reference) | 1 | 0 | None | ⚠️ Quiet (3/5) |
| MCP Registry (official) | 2 | 1 | None | Steady (3.5/5) |
| Awesome MCP Servers | 0 | 137 (121 open, 16 merged/closed) | None | High inflow, review-limited (3.5/5) |
| Docker MCP Registry | 0 | 50 (48 open, 2 merged/closed) | None | High inflow, weak throughput (3/5) |
| Claude Plugins (official) | 2 | 1 (closed) | None | Policy friction (3/5) |
| Awesome Agent Skills | 0 | 5 (all open) | None | Light but steady (3.5/5) |
| Awesome Claude Code | 0 | 0 | None | No data (n/a) |

Health scores are my judgment from the digests, not a measured metric. No project shipped a release.

## 3. MCP Servers's Position
- **Role:** It is the canonical reference implementation repo. The other projects list, register, package or gate servers like the ones it hosts.
- **Advantages:** It has official status, and third parties try to get listed in it (#5551). It also has no visible review backlog.
- **Weaknesses:** Today it had the lowest activity of any active project: one issue and no PRs. Its `ADDITIONAL.md` listing is a competing discovery channel next to the Registry, Docker's catalog and the community lists. The Servers digest guesses that listings may be steered toward the Registry, but it didn't verify this.
- **Approach differences:** It holds reference code and docs. The Registry holds metadata (`server.json`, package types), and Docker packages and hosts servers. The community lists curate by PR.
- **Community size:** Not measurable here, since no star or contributor counts were given. Today's volume alone puts it far below Awesome MCP Servers (137 PRs) and Docker MCP Registry (50 PRs).

## 4. Shared Technical Focus Areas

| Need | Projects | Detail |
|---|---|---|
| Trust, verification and auditability | Registry (#82), Claude Plugins (#7024), Awesome MCP Servers (#19600, #19589), Docker (OAuth/test credentials) | Tool fingerprinting, Verified orgs, signed audit logs, offline scanners |
| Automated submission validation | Awesome MCP Servers (`missing-glama`, `merge-conflict`), Docker (#7152 empty template), Registry (documented package-type process) | Format and compliance checks before human review |
| Remote and hosted servers | Docker (OAuth 2.1, streamable HTTP), Awesome Skills (#1414) | Policy on closed-source hosted servers |
| Package-ecosystem coverage | Registry (RubyGems #1582/#1859) | Native distribution channels beyond OCI and `mcpb` |
| Agent safety and guardrails | Awesome Skills (#1362), Awesome MCP Servers (PurseString policy-gated purchases) | `PreToolUse` guards, policy gating |
| Cross-platform reliability | Claude Plugins (#7130 Windows/WSL hooks, #7129 Telegram docs) | Shell resolution and doc accuracy |

## 5. Differentiation Analysis
- **MCP Servers:** Reference code, for server authors and MCP spec followers.
- **MCP Registry:** Machine-readable metadata, for clients and package publishers. It is the most technical of the group.
- **Awesome MCP Servers:** Human-curated list with automated format checks. It targets server authors seeking visibility.
- **Docker MCP Registry:** Containerized or remote catalog, for users who want to run servers. Review needs testable servers.
- **Claude Plugins:** A gated directory tied to one vendor's client. It is the strictest on security: command hooks and local MCP servers need a Verified org.
- **Awesome Agent Skills:** Lists skills, not servers. Scope drift shows up in #1414, where a remote MCP server was submitted.

## 6. Community Momentum & Maturity
- **High volume, review-limited:** Awesome MCP Servers and Docker MCP Registry.
- **Steady, focused:** MCP Registry (RubyGems feature in flight) and Awesome Agent Skills.
- **Policy-turbulent:** Claude Plugins. #7024 has 33 comments and 12 👍 in about 9 days.
- **Quiet:** MCP Servers, with a single new-listing request.
- **No data:** Awesome Claude Code.
- **Maturity:** The Registry has a documented process for adding package types. Claude Plugins is enforcing policy before its documentation is complete. The two aggregator lists are still scaling their processes.

One day of data can't separate seasonal lulls from real trends.

## 7. Trend Signals
1. **Trust is the bottleneck.** Gating (Claude Plugins), fingerprints (Registry #82) and Glama checks (Awesome MCP Servers) all try to answer which servers can be trusted. Developers should expect attestation, signing and org verification to become requirements for listing.
2. **AI-generated submissions are growing.** Awesome MCP Servers shows 🤖 markers, and one PR (#19601) says so explicitly. Maintainers will likely add automated validation and contribution policies.
3. **Remote, OAuth-based servers are rising.** Docker's sample is dominated by hosted servers. Server authors should plan for OAuth 2.1 and testable demo credentials.
4. **Native packaging matters.** RubyGems support shows demand for publishing through each language's own channel.
5. **Boundaries between servers, skills and plugins are blurring.** Submissions are landing in the wrong list (#1414, #5551). Listings need clearer scope guidance.
6. **Safe agent actions are a growing category.** Spending, auditing and policy gating appear repeatedly in submissions.

**For decision-makers:** Treat discovery listings as marketing, and the Registry as the metadata source of record. Budget for provenance work (signing, org verification, open source or a clear license) if you ship hooks or local servers.

**Caveats:** Comment counts were missing for several projects, and Docker's digest covered only 20 of its 50 PRs. Health scores and rankings are my estimates from these digests.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-11-15

Repo: [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview
Activity was low in the last 24h: 2 issues and 1 PR were updated, with no releases and nothing merged or closed. Almost all of it is about RubyGems support. Contributor koic opened PR #1859 the day before, which implements the request in Issue #1582. A long-running security-design discussion (#82) also had an update. Project health looks steady. The signals are a single-theme day and a few older items waiting on maintainers.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were merged or closed today.
- Open PR [#1859](https://github.com/modelcontextprotocol/registry/pull/1859) "feat: add RubyGems (rubygems.org) as a package registry type" was created and updated on 2026-11-14. It adds `registryType: "rubygems"`. It follows `docs/contributing/add-package-registry.md` and mirrors the existing registry types. It has no reported comments or reactions yet, so it hasn't been reviewed.

## 4. Community Hot Topics
- **[#82](https://github.com/modelcontextprotocol/registry/issues/82), tool poisoning prevention via saved tool-call signatures.** It has 31 comments and 1 👍, the most discussion of the three items. It was opened on 2025-05-27 and updated again on 2026-11-14. The idea is that `server.json` submitters list every tool their server may invoke. The registry would fingerprint those tools and store the fingerprints for MCP clients. Third-party vendors could then scan and approve them. The need behind it is supply-chain trust: clients want a way to detect tools that change after approval. The title says it is "not go-live blocker", so it was deprioritized at launch. It is still being discussed about 18 months later.
- **[#1582](https://github.com/modelcontextprotocol/registry/issues/1582), add RubyGems as a package registry type.** It has 0 comments and 0 👍. The need is that Ruby MCP servers can only be listed through an OCI image or an `mcpb` download, not through their native distribution channel.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. Nothing needs a fix PR.

## 6. Feature Requests & Roadmap Signals
- **RubyGems support (#1582 and #1859).** This is the most likely item to ship soon. The issue already has a matching implementation PR that follows the documented process for adding a registry type. Once it is reviewed, it should land in a near-term release. Its main risks are ownership verification and validation details for gems.
- **Tool signature and fingerprint storage (#82).** This is a long-term security feature. Its age and "not go-live blocker" label suggest it is not near-term. The continued activity suggests interest remains.

## 7. User Feedback Summary
- Ruby developers find the current workarounds (OCI or `mcpb`) awkward for gems distributed through rubygems.org, which is the standard channel for Ruby CLI apps.
- Security-minded participants want clients to be able to verify tool definitions. This is an ongoing concern rather than a new complaint.
- The data has no satisfaction or dissatisfaction signals beyond these.

## 8. Backlog Watch
- [#82](https://github.com/modelcontextprotocol/registry/issues/82) has been open for about 18 months with a lot of discussion (31 comments). It would benefit from a maintainer decision, whether that is a design direction, a split into smaller tasks, or an explicit deferral.
- [#1582](https://github.com/modelcontextprotocol/registry/issues/1582) has been open since 2026-08-27, about 2.5 months, with no comments. It has only recently gained an implementation PR. It needs maintainer triage, and the PR [#1859](https://github.com/modelcontextprotocol/registry/pull/1859) needs review.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-15

## 1. Today's Overview
The repository saw no issue activity in the last 24h, but PR traffic was heavy: 137 PRs were updated (121 open, 16 merged/closed). Almost all activity is community submissions adding new MCP servers to the list, and many are marked 🤖🤖🤖, which suggests AI-agent-authored PRs. Activity is healthy on the contribution side. Review throughput is the constraint, since 121 PRs remain open. No releases were published, which is normal for a curated list.

## 2. Releases
None.

## 3. Project Progress
16 PRs were merged or closed today. The data lists only two of them:
- [#16343](https://github.com/punkpeye/awesome-mcp-servers/pull/16343) (Openhook webhook inbox server, Developer Tools) was **closed**. It was opened 2026-10-13. The data doesn't say whether it was merged or rejected.
- [#15059](https://github.com/punkpeye/awesome-mcp-servers/pull/15059) (AindriuB/data-prism, Security) was **closed**. It was opened 2026-09-24. The same caveat applies.

Both were closed after sitting open for roughly one to two months. That suggests a periodic backlog cleanup. The other 14 closed or merged PRs are not itemized in the data.

## 4. Community Hot Topics
Comment counts were not reported (all `undefined`) and every PR shows 0 👍. Discussion intensity therefore can't be ranked. The list below is grouped by theme instead:
- **Security and trust tooling:** [#19600](https://github.com/punkpeye/awesome-mcp-servers/pull/19600) (Ciphermap, local offline scanner), [#19598](https://github.com/punkpeye/awesome-mcp-servers/pull/19598) (vibe-shield and ghost-qa), [#19589](https://github.com/punkpeye/awesome-mcp-servers/pull/19589) (signafAIde, signed audit records of agent tool calls). Demand is growing for auditability and safety around agent actions.
- **Agent commerce and policy:** [#19596](https://github.com/punkpeye/awesome-mcp-servers/pull/19596) (PurseString, policy-gated purchases) and [#19597](https://github.com/punkpeye/awesome-mcp-servers/pull/19597) (opensmm-protocol, SMM service ordering). Developers are looking for ways to let agents spend money safely.
- **Developer tooling and testing:** [#19594](https://github.com/punkpeye/awesome-mcp-servers/pull/19594) (benchfleet), [#19593](https://github.com/punkpeye/awesome-mcp-servers/pull/19593) (WhyKit, architecture decision records), [#18264](https://github.com/punkpeye/awesome-mcp-servers/pull/18264) (webhook-crash-lab).
- **Creative, gaming and browser:** [#19570](https://github.com/punkpeye/awesome-mcp-servers/pull/19570) (Dinoctor), [#19595](https://github.com/punkpeye/awesome-mcp-servers/pull/19595) (Roblox Studio bridge), [#19599](https://github.com/punkpeye/awesome-mcp-servers/pull/19599) (AeroBrowse), [#19592](https://github.com/punkpeye/awesome-mcp-servers/pull/19592) (unflick).
- **Data, research and search:** [#19602](https://github.com/punkpeye/awesome-mcp-servers/pull/19602) (nogpu-mcp), [#19601](https://github.com/punkpeye/awesome-mcp-servers/pull/19601) (claimcite), [#19590](https://github.com/punkpeye/awesome-mcp-servers/pull/19590) (Google Trends/News), [#19591](https://github.com/punkpeye/awesome-mcp-servers/pull/19591) (touchlinewire, Sports).

Many entries stress local stdio execution, MIT or Apache licensing, and zero telemetry. These are the qualities contributors expect reviewers to value.

## 5. Bugs & Stability
No issues were reported. One PR carries a stability-style flag:
- [#14484](https://github.com/punkpeye/awesome-mcp-servers/pull/14484) (SearchPipe) has a `merge-conflict` label and has been open since 2026-09-16. The contributor needs to rebase it.

Several PRs carry `missing-glama` labels, for example [#19602](https://github.com/punkpeye/awesome-mcp-servers/pull/19602), [#19601](https://github.com/punkpeye/awesome-mcp-servers/pull/19601), [#19600](https://github.com/punkpeye/awesome-mcp-servers/pull/19600) and [#19599](https://github.com/punkpeye/awesome-mcp-servers/pull/19599). They lack the required Glama listing or score badge. These are compliance gaps, not bugs.

## 6. Feature Requests & Roadmap Signals
There are no issue-based requests. The submissions point to category growth:
- Security and audit
- Finance and agent payments
- Browser automation
- Research and fact-checking
- Developer testing

Contributors are also naming niche categories (Sports, Gaming, Social Media, Art & Culture, Architecture & Design). The README may eventually need more subcategories. The labels `has-glama`, `valid-name` and `has-emoji` show that automated format checks are working. Glama presence is now an enforced gate.

## 7. User Feedback Summary
No direct user feedback was posted. The PR text suggests these points:
- Contributors increasingly use AI coding agents to prepare submissions. [#19601](https://github.com/punkpeye/awesome-mcp-servers/pull/19601) says so explicitly, and the 🤖 markers point the same way.
- Servers are mostly local, TypeScript or Python, and distributed through `npx` or `uvx`.
- Contributors emphasize safety properties such as read-only operation, offline use and policy gating.

## 8. Backlog Watch
- 121 PRs are open. Some are old and still active:
  - [#14484](https://github.com/punkpeye/awesome-mcp-servers/pull/14484) (2026-09-16, merge conflict)
  - [#16698](https://github.com/punkpeye/awesome-mcp-servers/pull/16698) (mrpkk attest/drift, 2026-10-17, empty description)
  - [#18264](https://github.com/punkpeye/awesome-mcp-servers/pull/18264) (2026-11-01)
- Maintainers should triage the `missing-glama` and `merge-conflict` PRs. Closing stale ones, or asking authors to fix them, would help.
- Bulk AI-generated submissions may need a contribution policy or a stricter automated check. The current queue is growing faster than it is reviewed.

**Caveat:** Comment counts, closed-versus-merged status and the 14 remaining closed PRs weren't in the provided data, so the Project Progress and Hot Topics sections are limited.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-15

## 1. Today's Overview
The registry saw no issue activity and no releases in the last 24h. All of the activity was in pull requests: 50 were updated, 48 open and 2 merged or closed. Most of them are new server submissions, and the sample shows a wave of remote (hosted, streamable-HTTP) MCP servers. Activity is high, but it is almost entirely inbound submissions. The data shows little maintainer throughput: only one closure is visible, and no merge is identifiable.

## 2. Releases
No new releases.

## 3. Project Progress
Only 2 PRs were merged or closed, and only one appears in the sample:
- [#5746](https://github.com/docker/mcp-registry/pull/5746) **Add Openhook remote MCP server** was **closed**, not shown as merged. It was opened on 2026-10-16, and it offered callback inboxes for testing webhooks. The data gives no reason for the closure, so I can't tell whether it was rejected, superseded or abandoned.

No feature or fix PRs to the registry tooling itself appear in the data.

## 4. Community Hot Topics
Comment counts are reported as `undefined` and reactions are 0 on every item, so no PR can be ranked by discussion. The themes below come from submission content instead.
- **Remote MCP servers dominate.** Examples are [#7165 Spiderlook](https://github.com/docker/mcp-registry/pull/7165) (OAuth 2.1), [#7166 Viewlify](https://github.com/docker/mcp-registry/pull/7166), [#7164 Clef Music Tools](https://github.com/docker/mcp-registry/pull/7164), [#7163 Toolfound](https://github.com/docker/mcp-registry/pull/7163), [#7161 Hourbun](https://github.com/docker/mcp-registry/pull/7161), [#7159 sphere-marketplace](https://github.com/docker/mcp-registry/pull/7159), [#7158 pilotfish-remote](https://github.com/docker/mcp-registry/pull/7158) and [#7154 Sóley](https://github.com/docker/mcp-registry/pull/7154). Vendors want a presence in the Docker catalog for hosted services, and several have no public source.
- **Data and social tooling.** [#7155 Social Fetch](https://github.com/docker/mcp-registry/pull/7155) and [#7166 Viewlify](https://github.com/docker/mcp-registry/pull/7166) cover social media data. [#7156 Developh Website Audit](https://github.com/docker/mcp-registry/pull/7156) runs PageSpeed audits.
- **Agent-oriented services.** [#7159 sphere-marketplace](https://github.com/docker/mcp-registry/pull/7159) is an agent marketplace. [#7018 bhived](https://github.com/docker/mcp-registry/pull/7018) shares lessons between agents. [#7052 witness](https://github.com/docker/mcp-registry/pull/7052) records evidence for coding agents.
- **Local containerized servers are the minority.** Examples are [#5733 Spark](https://github.com/docker/mcp-registry/pull/5733) (stdio, pinned commit) and [#7153 BirdWeather](https://github.com/docker/mcp-registry/pull/7153).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, because there were 0 issues. One quality signal is that [#7152](https://github.com/docker/mcp-registry/pull/7152) appears to contain the unfilled submission template, with an empty server name and URL. It will probably fail validation or need a rewrite.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. The submissions suggest where demand is heading:
- **Remote server support with OAuth 2.1** is increasingly common ([#7165](https://github.com/docker/mcp-registry/pull/7165), [#7161](https://github.com/docker/mcp-registry/pull/7161), [#5165](https://github.com/docker/mcp-registry/pull/5165)). Smooth handling of the `oauth` block and of test credentials is likely to matter.
- **Hosted servers with closed source** ([#7154](https://github.com/docker/mcp-registry/pull/7154), [#7160](https://github.com/docker/mcp-registry/pull/7160), [#7165](https://github.com/docker/mcp-registry/pull/7165)) raise a policy question about the registry's open-source requirement. Clearer guidance seems likely.
- **Repeat submitters.** The same author opened [#7163](https://github.com/docker/mcp-registry/pull/7163), [#7164](https://github.com/docker/mcp-registry/pull/7164) and [#5165](https://github.com/docker/mcp-registry/pull/5165). This suggests demand for batch or automated submission flows.

## 7. User Feedback Summary
Without comments, the signal is indirect:
- Contributors are trying to make their servers testable. Several state "no auth needed" or send test credentials through the contributor form ([#5165](https://github.com/docker/mcp-registry/pull/5165), [#7163](https://github.com/docker/mcp-registry/pull/7163), [#7164](https://github.com/docker/mcp-registry/pull/7164)). That points to a review process that depends on reviewers being able to test each server.
- Submitters want the catalog's distribution. Few ask for anything else.
- No satisfaction or dissatisfaction is recorded in the data.

## 8. Backlog Watch
These PRs have been updated today but opened weeks ago, so they may be waiting for review:
- [#5165 TimeToPost](https://github.com/docker/mcp-registry/pull/5165), created 2026-09-19 and open about 8 weeks.
- [#5733 Spark (evc-spark-mcp)](https://github.com/docker/mcp-registry/pull/5733), created 2026-10-15 and open about a month.
- [#7018 bhived](https://github.com/docker/mcp-registry/pull/7018), created 2026-11-12.
- [#7052 witness](https://github.com/docker/mcp-registry/pull/7052), created 2026-11-13.

**Health assessment:** Inbound demand is strong, with about 48 open PRs and many new ones arriving each day. Review and merge throughput looks weak: the data shows no merges and one closure, and some PRs have been open for two months. Maintainers could use triage tooling, such as automated validation and stale-PR handling. They could also use a clear policy on closed-source remote servers, so that the backlog doesn't keep growing.

**Data caveat:** Only 20 of the 50 PRs were shown. Comment counts were `undefined`, so hot-topic ranking isn't possible.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Project Digest — 2026-11-15

## 1. Today's Overview
Activity is low in the last 24h: 2 issues updated (both open) and 1 PR updated (closed, not merged as far as the data shows). There were no new releases. The dominant theme is a policy change in the plugin directory: Verified-organization gating for command hooks and local MCP servers. It has drawn 33 comments and 12 👍 since 2026-11-06. The other items are a documentation-accuracy issue in the `telegram` plugin and a Windows hook-compatibility fix for `security-guidance`. Overall health: a small maintenance flow, with community friction over the verification policy.

## 2. Releases
No new releases.

## 3. Project Progress
- [PR #7130](https://github.com/anthropics/claude-plugins-official/pull/7130) — *fix(security-guidance): select Git Bash for Windows hooks* (KooshaPari). It addresses Windows environments where `bash` resolves to the WSL launcher, which makes the Security Guidance hooks fail when given Windows plugin paths. It adds Windows-specific commands that locate Git Bash relative to Git's exec path, and leaves the commands for other platforms unchanged. The state is CLOSED. The summary mentions a "Draft: compatibility…" section, so it may have been closed as a draft or superseded. The data doesn't say it was merged, so the fix should not be treated as shipped.

## 4. Community Hot Topics
- **[Issue #7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** — *Plugin directory: how can an organization become Verified?* (33 comments, 12 👍; the most active item by a wide margin). Since about 2026-11-05 the directory has rejected submissions containing `command` hooks or local MCP servers unless the submitting organization is Verified. The reporter says the documentation, including the pre-submission checklist, doesn't explain how to get Verified. **Underlying need:** a documented, transparent verification path and criteria, plus clear guidance for plugin authors whose current plugins are blocked. The comment volume suggests that many authors are affected and are waiting for a maintainer response.
- **[Issue #7129](https://github.com/anthropics/claude-plugins-official/issues/7129)** — *telegram: ACCESS.md says privacy-mode bots receive @mentions, but Telegram's docs don't* (0 comments, 0 👍; filed today). Not yet discussed, but it matters for correctness.

## 5. Bugs & Stability
Ranked by severity:
1. **Medium: Telegram `requireMention` behavior depends on a possibly incorrect assumption** ([#7129](https://github.com/anthropics/claude-plugins-official/issues/7129)). `ACCESS.md:62` claims privacy-mode bots still receive @mentions. The reporter says Telegram's documentation doesn't support this, and cites `server.ts:281-293`, `308-325` and `691-700`. If they're right, users who rely on `requireMention` with privacy mode on could silently miss messages. There is no fix PR yet.
2. **Medium (platform-specific): Windows hook failure in `security-guidance`**. WSL `bash` shadows Git Bash. The fix, [PR #7130](https://github.com/anthropics/claude-plugins-official/pull/7130), is closed, so the underlying problem may still be open.
3. **Process-level blocker:** the Verified-org gating in [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) is a policy change, not a bug. It does stop submissions in practice.

## 6. Feature Requests & Roadmap Signals
- **Verified-organization pathway** ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)). Authors want documented criteria, an application process, or alternatives such as sandboxing or declared permissions. A documentation update or a verification-intake process seems the most likely near-term response, because the policy is already enforced and drawing heavy feedback.
- **Telegram docs/behavior alignment** ([#7129](https://github.com/anthropics/claude-plugins-official/issues/7129)). A docs correction is the likely resolution, and it is low effort. Possibly a code change for mention handling in privacy mode.
- **Windows shell robustness** ([#7130](https://github.com/anthropics/claude-plugins-official/pull/7130)). A reworked fix may come back, because the problem is real for Windows and WSL users.

## 7. User Feedback Summary
- Plugin authors who ship hooks or local MCP servers are blocked and confused by the new gating. The pain point is a lack of transparency, not necessarily opposition to the security goal.
- Telegram plugin users and integrators need accurate docs for access control and mention handling.
- Windows users who also have WSL installed run into shell-resolution problems with hook-based plugins.
- Satisfaction signals: 12 👍 on #7024 show shared concern. No positive feedback appeared in today's data.

## 8. Backlog Watch
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** — open 9 days with 33 comments. It needs an authoritative maintainer answer on Verified criteria, process and timeline, and the docs and checklist should be updated. This is the top item needing attention.
- **[#7129](https://github.com/anthropics/claude-plugins-official/issues/7129)** — new, with no triage yet. A quick maintainer acknowledgment and a docs fix would close it.
- **[PR #7130](https://github.com/anthropics/claude-plugins-official/pull/7130)** — closed. It is worth confirming whether the Windows Git Bash issue was resolved another way or needs a follow-up PR.

*Caveat: this digest is based on the 24h snapshot above. Comment contents and the reason PR #7130 was closed were not available.*

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-15

## 1. Today's Overview
Activity is light but steady: 0 issues and 5 PRs were updated in the last 24h, all of them open. No PRs were merged or closed and there were no releases. Four of the five PRs were opened today (#1411–#1414), which shows a continuing flow of external submissions. The one older PR, #1362, was only touched again today. The project's current bottleneck is maintainer review and merge throughput, not contributor interest.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced. All 5 PRs are pending review.

## 4. Community Hot Topics
No PR or issue has comment or reaction data. Comments are reported as undefined and 👍 as 0 on every item. Ranking by activity is therefore not possible. These are the submissions that stand out:

- **[#1362](https://github.com/VoltAgent/awesome-agent-skills/pull/1362) – Kintsugi Harness (`kintsugi-core-guard-free`)**: Open since 2026-11-06 and updated today. It is a `PreToolUse` guardrail with a Python AST engine, an optional Rust engine, and a third-party harness integrator. Benchmark figures are included (~28 ms AST, ~16.2 µs/call Rust). Contributors increasingly want agent safety and guardrail tooling listed.
- **[#1413](https://github.com/VoltAgent/awesome-agent-skills/pull/1413) – electron-agent-debug**: An attach-only Electron diagnostic skill and MCP adapter, using Node Inspector and CDP, for the Development and Testing section. It reflects demand for debugging tools that agents can run.
- **[#1414](https://github.com/VoltAgent/awesome-agent-skills/pull/1414) – No Stairs Please MCP**: A remote MCP server with accessibility, load-in, routing and booking data for 2,200+ North American live-music venues. It is a niche vertical-data entry, and it is an MCP server, not a skill. That may not fit the list's scope.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were 0 issues today.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Submission themes suggest where the list is growing:
- **Agent safety and guardrails** (#1362).
- **Developer debugging and testing tools** (#1413, #1412 code-review triage).
- **Vertical and marketing skills** (#1411 ASO skills, #1414 venue data).

These are list additions, not product features. The maintainers' next likely change is a batch merge of the submissions that meet the maturity bar.

## 7. User Feedback Summary
Contributors give little feedback beyond their submissions, but one signal is visible. The author of [#1412](https://github.com/VoltAgent/awesome-agent-skills/pull/1412) says the repository has 76 stars and offers no usage evidence beyond that. They ask the maintainers to leave it out if it doesn't meet the maturity bar. This shows that contributors know the list has a quality threshold. [#1411](https://github.com/VoltAgent/awesome-agent-skills/pull/1411) (ASOScan/aso-skills, MIT) describes its split between skills that need no API key and skills that need an ASOScan account. That is the kind of detail a reviewer needs to judge setup cost.

## 8. Backlog Watch
- **[#1362](https://github.com/VoltAgent/awesome-agent-skills/pull/1362)** has been open for 9 days (since 2026-11-06) with no recorded comments or merge. It is the oldest item in today's data and needs a maintainer decision to accept, reject or request changes.
- The data covers only items updated in the last 24h. Older untouched PRs can't be assessed from it. Given the steady submission rate, maintainers should check whether an unreviewed queue is building up.
- Scope check for [#1414](https://github.com/VoltAgent/awesome-agent-skills/pull/1414): it may need a decision on whether remote MCP servers belong in this list.

**Project health:** Contributor interest is high and there are no bug reports. Review and merge activity is absent today, so throughput is the main risk.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
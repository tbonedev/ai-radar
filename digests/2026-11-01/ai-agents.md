# MCP Ecosystem Digest 2026-11-01

> Issues: 4 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-01 13:59 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-01

Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## 1. Today's Overview

Activity is low today. Four issues were updated, none were closed, and there were no PR updates and no new releases. One of the four, the monthly dependency refresh (#5417), was opened by a bot. The other three are older discussion threads about quality and maintenance of the reference servers. All four issues carry the `v2` label or sit on the v2 track, so the project's focus is v2 hygiene (schemas, deprecations, dependencies) rather than feature work. Nothing urgent is in flight today.

## 2. Releases

No new releases.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours, so no feature or fix landed. The only new item is the automated dependency sweep, [#5417](https://github.com/modelcontextprotocol/servers/issues/5417). It runs `npm outdated` across the root and every workspace, checks `uv` lock refreshes for each Python server, and checks workflow `uses:` versions, all against `v2/main`. It replaces Dependabot's version-update PRs (#4874). That is a process improvement, not a code change.

## 4. Community Hot Topics

- **[#3669](https://github.com/modelcontextprotocol/servers/issues/3669) — Schema quality: missing property descriptions** (9 comments, 0 👍, open since 2026-03-22). This is the most discussed item today. The reporter ran automated quality checks and found that most reference servers omit `description` on tool input-schema properties. LLMs rely on those descriptions to call tools correctly, so the gap hurts tool-call accuracy. The underlying need is for the reference servers to model good schema practice, since third-party authors copy them. It has stayed open for more than seven months.
- **[#4785](https://github.com/modelcontextprotocol/servers/issues/4785) — Archived servers still draw ~214k installs/week** (2 comments, open since 2026-09-09). Per the reporter's npm measurements, `server-postgres` gets about 95k weekly downloads and `server-github` about 84k. The deprecation message points to npm support instead of a replacement. Users need a clear migration path and a better deprecation notice.
- **[#5414](https://github.com/modelcontextprotocol/servers/issues/5414) — 140 silent contract changes across 66 version pairs** (0 comments, opened 2026-10-29). This is an external tool's measured finding. It hashes tool name, description, and `inputSchema` (plus icons) and diffs published releases. The need is for contract stability or changelog discipline, because tool definitions can change between versions without notice.

## 5. Bugs & Stability

No crashes or regressions were reported today. The closest items to stability concerns, in rough order of impact:

1. **Silent contract drift ([#5414](https://github.com/modelcontextprotocol/servers/issues/5414))**: 140 unannounced changes could break clients that pin tool contracts. This is a reported measurement, so I haven't verified the details. No fix PR exists.
2. **Heavily used archived packages ([#4785](https://github.com/modelcontextprotocol/servers/issues/4785))**: users on `server-postgres` and `server-github` get no maintenance and a confusing deprecation notice. No fix PR exists.
3. **Schema gaps ([#3669](https://github.com/modelcontextprotocol/servers/issues/3669))**: this is a quality problem that affects LLM tool-use reliability. No fix PR exists.

## 6. Feature Requests & Roadmap Signals

There are no explicit feature requests today. The implied asks are:

- Complete `description` fields on all reference-server input schemas (#3669). This is cheap and mechanical, so it is a plausible v2 item. It is labelled `enhancement, v2`.
- A real replacement pointer, or an updated npm deprecation message, for the archived servers (#4785). It is labelled `v2, chore`, so a metadata-only fix could come quickly.
- Contract-change disclosure, such as changelogs or schema-diff checks in CI (#5414). This is more speculative.

## 7. User Feedback Summary

Feedback is mostly from tooling authors and ecosystem maintainers, not end users. Their pain points are:

- Tool quality: poor schema documentation lowers LLM call accuracy.
- Migration clarity: heavy continued use of archived packages suggests users don't know where to go.
- Version stability: contract changes between releases are hard to detect without external tooling.

There are no reports of satisfaction or dissatisfaction with specific functionality.

## 8. Backlog Watch

- **[#3669](https://github.com/modelcontextprotocol/servers/issues/3669)**: open about 7 months with 9 comments and no visible resolution. It needs a maintainer decision or an owner.
- **[#4785](https://github.com/modelcontextprotocol/servers/issues/4785)**: open about 7 weeks. The ~214k weekly installs make it the most user-impacting item, and a metadata fix would be inexpensive.
- **[#5414](https://github.com/modelcontextprotocol/servers/issues/5414)**: new, with no maintainer response yet. It deserves triage, since the data comes from a third-party scanner.

**Project health:** Stable but quiet. The project has no open PRs and no releases in the window, and its open issues are about maintenance debt. Maintainer attention on the three older items would give the most benefit.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP Ecosystem, 2026-11-01

## 1. Ecosystem Overview

Today's digests all concern the Model Context Protocol (MCP) and Claude plugin and skill distribution layer. They do not cover personal AI assistants. The reference code (MCP Servers) is quiet and in maintenance mode. The distribution layers (Registry, Docker MCP Registry, the awesome lists, Claude Plugins) carry the volume. Their growth now outpaces maintainer review capacity. Three problems recur across projects: supply-chain trust, lifecycle management (deprecation, rename, withdrawal) and Windows/cross-platform reliability. Hosted/remote servers with OAuth, and agent memory tooling, are the most visible new submission categories.

## 2. Activity Comparison

Counts come from the 24h samples. Several digests state their data is truncated, so treat the counts as lower bounds. The health scores are my own judgment from the digests, not a published metric.

| Project | Issues updated | PRs updated | Release | Health (1–5) | Rationale |
|---|---|---|---|---|---|
| MCP Servers | 4 (0 closed) | 0 | None | 3.5 | Stable but quiet. Maintenance debt is the open-issue theme, and there is no PR flow. |
| MCP Registry | 4 open | 2 (both closed) | None | 3.5 | Maintainers are active on infra. Lifecycle tooling gaps and one deadline (19 Nov) are open. |
| Awesome MCP Servers | 0 | 116 (110 open) | None | 3 | Demand is very high. Review throughput is the bottleneck. |
| Docker MCP Registry | 0 | 43 (39 open) | None | 2.5 | Intake is strong. Pin PRs are up to ~11 months stale. |
| Claude Plugins (Official) | 5 (all open, 0 comments) | 4 (2 closed, 2 open) | None | 3 | Maintainers are shipping security work, but triage is lagging and a security issue is unanswered. |
| Awesome Claude Code | 15 (11 open, 4 closed) | 0 | None | 3.5 | Submissions are flowing and the validation bot runs. 11 await decisions. |
| Awesome Agent Skills | 1 | 8 (all open) | None | 3 | No merges or comments. Submissions and link-fix PRs are accumulating. |

No project shipped a release today.

## 3. MCP Servers's Position

**Advantages**
- It is the canonical reference implementation. The other six projects distribute, list or catalogue servers, and this one defines how they should look. Its schema and deprecation choices therefore propagate, since third-party authors copy it (#3669).
- Its install base is large. The archived `server-postgres` and `server-github` packages alone draw about 214k downloads a week (#4785, as measured by the reporter).
- It is the only project here with an explicit v2 track, and every active issue carries that label or sits on it.

**Technical differences**
- It is a code repo with npm and Python packages. Registry, Docker and the awesome lists are metadata or packaging layers.
- It runs its own dependency governance, a monthly sweep (#5417) in place of Dependabot version PRs.

**Community size**
- By visible activity it is the smallest today: 4 issues and 0 PRs, against 116 PRs (Awesome MCP Servers) and 43 PRs (Docker Registry).
- Low activity here is not low importance. The reference repo's quiet queue contrasts with the heavy intake downstream.

**Weak points**
- Quality debt on the reference servers is visible: missing schema descriptions (#3669), a confusing deprecation notice (#4785) and 140 reported silent contract changes (#5414, an external scanner's finding that I haven't verified).
- None of the three open items has a fix PR.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Supply-chain integrity and trust | MCP Registry, Claude Plugins, Awesome Agent Skills, MCP Servers, Docker Registry | Content hashes for npm/PyPI/OCI (Registry #1783). Namespace takeover via domain transfer (#1778). Vulnerable pinned dependencies (Plugins #6952). Skill pre-install scanning (Skills #1329). Contract drift (Servers #5414). Provenance of hosted-only entries (Docker). |
| Lifecycle management | MCP Servers, MCP Registry, Docker Registry | Deprecation messaging and migration paths (#4785). Orphaned records after renames (#1662). Withdrawal requests (#1780). Stale pins (Docker #788, #1083). |
| Stale or dead references | Awesome Agent Skills, Docker Registry, Claude Plugins | Dead and renamed links (#1325, #1327). Stale bot pins. The `remember` pin that lags upstream (#6963). |
| Review throughput and automation | Awesome MCP Servers, Docker Registry, Awesome Claude Code, Awesome Agent Skills | Open PR queues of 110 and 39. Suggestions include auto-closing PRs flagged `missing-glama` and auto-merging pin PRs. These are the digests' own ideas, not maintainer commitments. |
| Windows and cross-platform reliability | Claude Plugins | Three of five issues are Windows/Git Bash hook failures (#6956, #6963, #6966). |
| Agent memory and code knowledge | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | SemanticMemory, Helios, ContextOS, Graphify, MemTether (submitted to two lists), Graphenium (submitted to two lists). |
| Remote/hosted servers and OAuth | Docker Registry, Awesome MCP Servers | Six or more hosted entries in one day. Streamable-HTTP and OAuth 2.1 with PKCE (SlickTrip). x402 micropayments appear in a few listings. |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture / mechanism |
|---|---|---|---|
| MCP Servers | Reference implementations | Server authors, SDK users | Monorepo with npm and Python workspaces, v2 branch |
| MCP Registry | Official publish and discovery metadata | Publishers, clients | `server.json` records, namespace verification by GitHub login or domain, API |
| Awesome MCP Servers | Discovery list | Authors seeking visibility | PR-based list with automated labels (`valid-name`, `has-glama`) |
| Docker MCP Registry | Curated, containerized and remote catalog | Docker users, vendors | PR-based entries, pinned versions, bot pin updates, remote-server entries |
| Claude Plugins (Official) | Marketplace for Claude Code plugins | Claude Code users, plugin authors | `marketplace.json` pins, SHA-bump bot, `claude plugin validate` |
| Awesome Claude Code | Curated Claude Code resources | Claude Code users | Issue-form submissions with a validation bot |
| Awesome Agent Skills | Curated cross-agent skills | Users of many agent clients | PR-based list. Entries cover Claude Code, Codex, Copilot CLI, Cursor and Gemini CLI. |

The main architectural split is how each project controls quality. The Registry and the Plugins marketplace use identity and version pinning. The awesome lists use automated format checks and human curation. Docker uses PR review against pinned versions. The cost of pinning is visible in two places: stale pins in Docker and the lag on `remember` in Plugins.

## 6. Community Momentum & Maturity

**Tier 1, high intake, review-limited:** Awesome MCP Servers (116 PRs), Docker MCP Registry (43 PRs). These are growing fastest, and the backlog is the risk.

**Tier 2, moderate and active:** Awesome Claude Code (15 issues), Claude Plugins (9 items), Awesome Agent Skills (9 items). All three have zero or near-zero engagement beyond bots, which suggests demand without matching maintainer response.

**Tier 3, stabilizing / maintenance mode:** MCP Servers and MCP Registry. The Registry's two PRs are staging-infrastructure cost work, which suggests it is past the build phase. The Servers repo is focused on v2 hygiene.

Engagement signals are weak everywhere. Comment counts are mostly 0–3, and several digests report missing comment data. Treat the tiering as activity, not community sentiment.

## 7. Trend Signals

1. **Trust is becoming the central MCP problem.** Hash fields, namespace locking, pre-install skill scanning, dependency CVEs and contract-diff scanning all appeared in a single day. For developers: pin versions, verify hashes where available, and track tool-schema changes.
2. **Lifecycle tooling is missing.** Publishers have no self-service for rename, retirement or withdrawal. Expect the Registry to add policy or tooling. Plan your own deprecation path and keep an owner contact.
3. **Schema quality affects tool-call accuracy.** Missing property `description` fields on tool inputs (#3669) reduce LLM tool-use reliability. Write descriptions on every property.
4. **Memory and code-graph tools are the hot category.** They appear across three lists with at least two cross-listed projects. Local-first, auditable storage is the common selling point.
5. **Hosted/remote servers with OAuth are replacing container-only distribution.** Vendors want catalog presence without shipping a container. The review policy for hosted-only entries is still undefined.
6. **Cross-platform testing is a gap.** Windows hook failures show that plugins developed on POSIX are not being tested on Windows. Test hooks under Git Bash and set explicit file encodings.
7. **Curation does not scale manually.** Every list project is showing queue growth. Automated validation, link checking and bot-managed pins are the likely direction.

**Caveats:** The digests are 24-hour snapshots, and several are truncated samples (20 of 116 PRs for Awesome MCP Servers). The scores and tiers above are my own judgment. The reported figures from third-party scanners (#4785, #5414) are unverified.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest — 2026-11-01

## 1. Today's Overview
Activity is low-to-moderate: 4 open issues and 2 PRs (both closed) were updated in the last 24h, with no new releases. The two PRs, both from maintainer rdimitrov, are staging-infrastructure cost and capacity work, not user-facing features. The issues mostly concern namespace and record lifecycle: orphaned records, namespace lock-in before a domain transfer, and publisher withdrawal. One new proposal addresses package integrity. Overall health looks stable, but lifecycle and ownership tooling gaps are now the main source of user friction.

## 2. Releases
No new releases.

## 3. Project Progress
Both PRs were closed on 2026-10-31. The data doesn't say whether they were merged, so treat them as closed.
- [PR #1781](https://github.com/modelcontextprotocol/registry/pull/1781) "Reduce idle staging capacity with guarded autoscaling minimums": adds a staging-only idle profile that lowers worker and replica minimums. Database isolation and autoscaling ceilings are kept. Singleton app/ingress eviction is permitted for natural consolidation, and database disruption protection stays intact. A refreshed, saved-plan deployment guard limits what changes.
- [PR #1782](https://github.com/modelcontextprotocol/registry/pull/1782) "Handle removed chart budgets in staging capacity updates": a follow-up fix. It refreshes the obsolete staging budget checkpoint before applying and omits the absent singleton chart child from update targets. This stops a removed resource from blocking later capacity updates while keeping scope validation.

Together, these cut staging cost and fix a blocking edge case in the deployment tooling. Production behavior and the registry API are not affected.

## 4. Community Hot Topics
Engagement is thin: no issue has more than 3 comments and none has 👍 reactions.
- [Issue #1662](https://github.com/modelcontextprotocol/registry/issues/1662) (3 comments, open since 2026-09-22): a GitHub account rename orphans every record published under the old login. The owner can't deprecate stale records such as `io.github.traffiycom-ui/paidsync`. The underlying need is a documented recovery or ownership-migration path after identity changes.
- [Issue #1778](https://github.com/modelcontextprotocol/registry/issues/1778) (1 comment): the publisher asks to lock the `com.aiapplyd` namespace before its verifying domain changes owner on 19 Nov 2026. They migrated to `com.getmattered/getmattered` and deprecated all six old versions on 24 Oct. The need is protection against namespace takeover through domain expiry or transfer, which would be a supply-chain risk.

## 5. Bugs & Stability
No crashes or regressions were reported. By severity:
1. **Security and lifecycle gap, [#1662](https://github.com/modelcontextprotocol/registry/issues/1662):** orphaned records cannot be deprecated by their owner. It has been open about 6 weeks, and there is no fix PR.
2. **Time-sensitive namespace risk, [#1778](https://github.com/modelcontextprotocol/registry/issues/1778):** the 19 Nov 2026 deadline means a new domain owner could re-verify the namespace. No fix PR yet.

## 6. Feature Requests & Roadmap Signals
- [Issue #1783](https://github.com/modelcontextprotocol/registry/issues/1783): proposes optional content-integrity fields (hashes) for npm, PyPI and OCI package entries. `server.json` already supports `fileSha256` for MCPB. It was filed today and has no discussion yet, so it needs a design review. It is unlikely to land in the next version, but it matches the supply-chain concern in #1778.
- Implied requests from #1662 and #1778: a namespace lock or retire mechanism, and an admin or recovery route for deprecation after renames. A documented process or admin-assisted workflow is more likely to ship than a schema change.

## 7. User Feedback Summary
- Publishers lack self-service tools for end-of-life actions. Renames, namespace retirement and withdrawal all seem to require maintainer intervention.
- [Issue #1780](https://github.com/modelcontextprotocol/registry/issues/1780): a publisher asks to withdraw `io.github.CYAN-ECLIPSE-TECHNOLOGIES-LLC/herald` (all versions), saying it is internal infrastructure and not a public server. This shows that delete or withdraw has no self-serve path.
- Users and publishers show good faith, since they already deprecated old entries and gave dates. The pain is process and documentation gaps, not product quality.

## 8. Backlog Watch
- [Issue #1662](https://github.com/modelcontextprotocol/registry/issues/1662): the oldest item here, open since 2026-09-22 with no visible maintainer resolution. It needs a decision on rename handling.
- [Issue #1778](https://github.com/modelcontextprotocol/registry/issues/1778): has a hard deadline of 19 Nov 2026, so it needs triage soon.
- [Issue #1780](https://github.com/modelcontextprotocol/registry/issues/1780): a withdrawal request with 0 comments, so it needs a maintainer action and possibly a policy statement on removals.
- [Issue #1783](https://github.com/modelcontextprotocol/registry/issues/1783): new, awaiting initial triage.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-01

## 1. Today's Overview
The repository is a high-volume, submission-driven list. Today it had 116 PRs updated (110 open, 6 merged or closed), no issue activity and no releases. Nearly all visible activity is new "Add X" PRs from authors listing their own MCP servers, with PR numbers around #18243–#18262. The queue is growing faster than it is being closed, so review throughput is the main health signal. Only 20 of the 116 PRs are shown, so the figures below come from that sample.

## 2. Releases
No new releases.

## 3. Project Progress
The data lists only one closed PR in the sample:
- [#15536](https://github.com/punkpeye/awesome-mcp-servers/pull/15536) "Add ModelsLab MCP server" (Multimedia Process, labeled `missing-glama`) was closed, not shown as merged. It was opened 2026-10-02, so it sat about a month before closure. The data doesn't give the reason. The missing Glama listing is a plausible cause, but that is a guess.

The other 5 merged or closed PRs aren't in the sample, so I can't describe them.

## 4. Community Hot Topics
Comment counts come through as `undefined` and every PR shows 0 👍, so I can't rank by engagement. These are the themes among the newest submissions:
- **Agent memory and knowledge:** [#18260](https://github.com/punkpeye/awesome-mcp-servers/pull/18260) SemanticMemory and [#18250](https://github.com/punkpeye/awesome-mcp-servers/pull/18250) Helios (a token-budgeted, drift-aware memory engine for coding agents).
- **Security and agent trust:** [#18258](https://github.com/punkpeye/awesome-mcp-servers/pull/18258) Shield KYA (a "Know Your Agent" audit gate) and [#18249](https://github.com/punkpeye/awesome-mcp-servers/pull/18249) ph4ntom-ida-bridge (IDA Pro with 54 tools).
- **Crypto, payments and finance:** [#18262](https://github.com/punkpeye/awesome-mcp-servers/pull/18262) CoinVello, [#13219](https://github.com/punkpeye/awesome-mcp-servers/pull/13219) Kristo Intelligence v6 (x402 on Base), [#18248](https://github.com/punkpeye/awesome-mcp-servers/pull/18248) CabalLens (Solana forensics) and [#18257](https://github.com/punkpeye/awesome-mcp-servers/pull/18257) nz-openbank-mcp.
- **Agent discovery and aggregators:** [#18259](https://github.com/punkpeye/awesome-mcp-servers/pull/18259) jishie (indexes 28k+ MCP/A2A agents, with x402 micropayments).
- **Documents and productivity:** [#18256](https://github.com/punkpeye/awesome-mcp-servers/pull/18256) Doconda (Word, Excel, PowerPoint, PDF) and [#18254](https://github.com/punkpeye/awesome-mcp-servers/pull/18254) google-docs-mcp.
- **Developer tools and media:** [#18255](https://github.com/punkpeye/awesome-mcp-servers/pull/18255) Graphenium (Rust codebase engine) and [#18261](https://github.com/punkpeye/awesome-mcp-servers/pull/18261) Metachlorian (video search).

The underlying need is visibility. MCP server authors treat the list as a distribution channel. The x402 micropayment entries suggest agent-to-agent payments are a growing category.

## 5. Bugs & Stability
No issues were reported today and no bugs show up in the PR data. The repository has no code to regress, since it is a curated list. The practical stability concern is formatting and validation: the labels `valid-name`, `has-emoji` and `has-glama` or `missing-glama` look like automated checks.

## 6. Feature Requests & Roadmap Signals
There are no feature requests, because no issues were active. The signals are indirect:
- The automated labels show the maintainers enforce a convention: an emoji in the title, a valid name and a Glama listing.
- Several PRs carry the 🤖🤖🤖 marker. It probably flags AI-assisted submissions, though the data doesn't say.
- Category pressure is visible in Finance & Fintech, Knowledge & Memory, Security and Developer Tools. These sections may eventually need splitting or sub-categories. That is speculation.

## 7. User Feedback Summary
There are no comments or reactions in the data, so I can't report direct user sentiment. From the PR text, contributors want:
- Alphabetical placement, which many PR descriptions mention.
- Glama quality badges, which some PRs include.
- One server per PR. [#13219](https://github.com/punkpeye/awesome-mcp-servers/pull/13219) was resubmitted after maintainer feedback on an earlier multi-server PR.

## 8. Backlog Watch
- [#13219](https://github.com/punkpeye/awesome-mcp-servers/pull/13219) was opened 2026-08-30 and touched again today. It is about two months old and was already resubmitted once, so it likely needs a maintainer decision.
- At least 5 of the 20 sampled PRs lack a Glama listing: [#18261](https://github.com/punkpeye/awesome-mcp-servers/pull/18261), [#18259](https://github.com/punkpeye/awesome-mcp-servers/pull/18259), [#18252](https://github.com/punkpeye/awesome-mcp-servers/pull/18252), [#18251](https://github.com/punkpeye/awesome-mcp-servers/pull/18251) and [#18248](https://github.com/punkpeye/awesome-mcp-servers/pull/18248). They will probably stall unless the authors add a listing.
- The 110 open PRs are a heavy load for the maintainers. A triage pass or more automation could help, such as auto-closing PRs that stay flagged `missing-glama` after a set time.

**Health assessment:** Community interest is very high, with about 20 new submissions in a day. Maintainer throughput is the bottleneck, and there were no releases or issue discussion today.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-01

## 1. Today's Overview
Activity is PR-only today: 0 issues and 0 releases, against 43 PRs updated (39 open, 4 merged/closed). The traffic is dominated by new server submissions, mostly hosted/remote MCP servers (World Monitor, M Studio, SlickTrip, HitPay, DirectMailAmerica, TreppenliftVergleich). The registry-bot's automated "update pin" PRs keep being refreshed. The 39-to-4 open-to-closed ratio suggests intake is outpacing review. The data shows no comment counts, so engagement is judged from recency and PR type only.

## 2. Releases
None.

## 3. Project Progress
Only 4 PRs were merged or closed, and just one is visible in the sample: [#5424](https://github.com/docker/mcp-registry/pull/5424) (MusedIn remote MCP server) was **closed**. The same author has an open resubmission, [#5563](https://github.com/docker/mcp-registry/pull/5563), so this looks like a duplicate cleanup rather than a rejection. The other three closed/merged PRs are not in the top-20 sample, so I can't describe them.

One notable engineering PR is open: [#6426](https://github.com/docker/mcp-registry/pull/6426) "fix(mcp): resolve parameter defaults in startup commands". It resolves `{{server.parameter}}` placeholders in `run.command` using defaults from `config.parameters` during tool discovery. It supports embedded and multiple placeholders per argument and preserves existing environment-variable handling. It is the only tooling or infrastructure change in the sample.

## 4. Community Hot Topics
Comment and reaction data are missing (`undefined`, 👍 = 0 everywhere), so there is no real "hot" ranking. The most notable themes among the day's PRs are:

- **Remote/hosted server submissions are the dominant pattern**:
  - [#6427 World Monitor](https://github.com/docker/mcp-registry/pull/6427)
  - [#6425 M Studio](https://github.com/docker/mcp-registry/pull/6425)
  - [#6423 SlickTrip](https://github.com/docker/mcp-registry/pull/6423) (OAuth 2.1 with PKCE and dynamic client registration)
  - [#6419 HitPay](https://github.com/hit-pay/cursor-plugin)
  - [#6407 DirectMailAmerica](https://github.com/docker/mcp-registry/pull/6407)
  - [#6420 TreppenliftVergleich](https://github.com/docker/mcp-registry/pull/6420)

  Vendors want a presence in Docker's catalog without shipping a container. Several are commercial or niche (payments, travel, direct mail, film production).
- **Security and data tools**: [#5429 EchelonGraph](https://github.com/docker/mcp-registry/pull/5429) (CVE, KEV, EPSS and SBOM lookups) and [#6421 Pangolinfo Amazon data](https://github.com/docker/mcp-registry/pull/6421).
- **Agent-native services**: [#5077 SwarmMemo](https://github.com/docker/mcp-registry/pull/5077) (a bulletin board for agents) and [#5563 MusedIn](https://github.com/docker/mcp-registry/pull/5563) (a job network for agents).

## 5. Bugs & Stability
No issues were reported, and no crash or regression reports appear. The only fix-type PR is [#6426](https://github.com/docker/mcp-registry/pull/6426). It addresses unresolved parameter placeholders in startup commands during tool discovery. That was a latent failure for servers whose commands depend on parameter defaults. It is still open and needs review.

## 6. Feature Requests & Roadmap Signals
Without issues, signals come from PR content:
- **First-class remote servers** are the clear trend. SlickTrip's PR describes its entry as being "in the same shape as the other hosted OAuth entries", so a template exists. Expect more OAuth and streamable-HTTP entries.
- **Parameterized commands**: if [#6426](https://github.com/docker/mcp-registry/pull/6426) lands, it will make servers that rely on config-parameter defaults more reliable. It is the most likely near-term tooling change.
- **Disclosure and provenance**: PRs such as [#5424](https://github.com/docker/mcp-registry/pull/5424) state the author runs the service. Some repos hold only docs or client config, not server code (for example HitPay and World Monitor). That may prompt clearer review policy on hosted-only entries.

## 7. User Feedback Summary
There is no direct user feedback in this window. The submissions suggest that contributors:
- find the remote-server workflow in `CONTRIBUTING.md` usable enough to follow;
- often have no open-source server repo, since several list "n/a" or a client-config repo;
- want authenticated and monetized services (payments, mail sending with paid-send approval) in the catalog.

## 8. Backlog Watch
These PRs are old and still open and need maintainer attention:
- [#788 omi pin update](https://github.com/docker/mcp-registry/pull/788) and [#786 mcp-python-refactoring pin update](https://github.com/docker/mcp-registry/pull/786): open since 2025-11-26, about 11 months.
- [#1083 stripe pin update](https://github.com/docker/mcp-registry/pull/1083): open since 2026-02-07.
- Pin updates for [render #4366](https://github.com/docker/mcp-registry/pull/4366), [playwright #4137](https://github.com/docker/mcp-registry/pull/4137), [grafana #4380](https://github.com/docker/mcp-registry/pull/4380) and [edubase #4467](https://github.com/docker/mcp-registry/pull/4467): open since June–July 2026. Stale pins for widely used servers like Stripe, Playwright and Grafana may leave users on outdated versions.
- Submissions waiting for review: [#5077 SwarmMemo](https://github.com/docker/mcp-registry/pull/5077) (since 2026-09-12), [#5429 EchelonGraph](https://github.com/docker/mcp-registry/pull/5429) (since 2026-10-04), [#5563 MusedIn](https://github.com/docker/mcp-registry/pull/5563) (since 2026-10-09) and [#4547 mcp-graphql-enhanced](https://github.com/docker/mcp-registry/pull/4547) (since 2026-07-26, over 3 months).

**Health assessment:** intake is strong, with new submissions arriving daily. Review throughput looks weak, with a growing backlog of stale automated pins and aging submissions. Triaging or auto-merging the bot's pin PRs would probably clear the largest share of the backlog.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Project Digest — 2026-11-01

## 1. Today's Overview
Activity is light-to-moderate: 5 issues and 4 PRs were updated in the last 24h, with no new releases. All 5 issues are open with zero comments and zero reactions, so none has had a maintainer response yet. The issues are mostly Windows and Git Bash hook failures (3 of 5), plus a dependency vulnerability and an authentication bug. The PR flow shows the marketplace's normal intake: two third-party plugin submissions were closed, one automated SHA bump is open, and one maintainer security fix is in progress.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. Two were closed, and both were plugin-submission PRs:
- [#6967](https://github.com/anthropics/claude-plugins-official/pull/6967) — `feat(plugins): add agent-observability to official marketplace`. It proposed a local observability dashboard and waterfall traces covering tokens, latency and prompt cache. It was closed without merge as far as the data shows.
- [#6964](https://github.com/anthropics/claude-plugins-official/pull/6964) — `feat(external_plugins): add pkgdiet 2.0.1 dependency policy and guardrails plugin`. It proposed a dependency policy gate for AI coding agents. It was also closed.

Both were opened and closed within the same window. The data doesn't give the closure reason, so I can't say whether they were rejected or withdrawn. Still-open work:
- [#6965](https://github.com/anthropics/claude-plugins-official/pull/6965) (mhegazy) — `security-guidance`: stop the commit reviewer when credentials are refused, and end hung reviews in time. It addresses part of #6953 (the auth-failure stop and the time limit) and explicitly leaves the choice of forwarded credential unchanged.
- [#6968](https://github.com/anthropics/claude-plugins-official/pull/6968) — automated `monday-crm` SHA bump (`8fdc0b4a` → `447ed1c2`). It was validated with `claude plugin validate` before the PR was opened.

## 4. Community Hot Topics
Engagement is minimal. Every issue has 0 comments and 0 👍, so no item stands out by activity. By theme:
- **Windows/Git Bash hook reliability** is the dominant theme, with three reports: [#6956](https://github.com/anthropics/claude-plugins-official/issues/6956), [#6966](https://github.com/anthropics/claude-plugins-official/issues/6966) and [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963). Plugin authors appear to be developing mostly on POSIX systems, and Windows users are running into the gaps.
- **Security-guidance reliability** is the second theme: [#6955](https://github.com/anthropics/claude-plugins-official/issues/6955) and PR [#6965](https://github.com/anthropics/claude-plugins-official/pull/6965), which links back to #6953.
- **Supply-chain hygiene** is the third: [#6952](https://github.com/anthropics/claude-plugins-official/issues/6952) and [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) both concern stale pinned versions.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6952](https://github.com/anthropics/claude-plugins-official/issues/6952) — discord plugin pins vulnerable dependencies.** `external_plugins/discord/bun.lock` is unchanged since March 2026. It resolves `proxy-addr@2.0.7` (GHSA-jqcg-44mw-7w3h, fixed in 2.0.8) and `@modelcontextprotocol/sdk@1.27.1`, which the report also places in an affected CVE range. This is a security issue, and no fix PR exists.
2. **[#6955](https://github.com/anthropics/claude-plugins-official/issues/6955) — security-guidance fails with 401 `invalid x-api-key`.** It happens when the session uses an `apiKeyHelper` that returns an OAuth token (`sk-ant-oat…`). Every commit, Stop and agentic review fails. [#6965](https://github.com/anthropics/claude-plugins-official/pull/6965) partly mitigates it by stopping on refused credentials and bounding hung reviews. It does not change which credential is forwarded, so the root cause isn't fixed.
3. **[#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) — `remember` pinned at v0.43.1.** On Windows with Git Bash, the PostToolUse hook hangs until the 600 s timeout. Upstream fixed this in v0.43.2 (2026-10-18), and v0.44.1 is the latest. The fix is only a pin bump in `marketplace.json`.
4. **[#6956](https://github.com/anthropics/claude-plugins-official/issues/6956) — unreal-engine-skills SessionStart hook hangs on Windows.** In `hooks/unreal-context.sh`, `"$directory"/*.uproject` expands to `//*.uproject` at the filesystem root, which triggers network enumeration, so the hook times out every session. The report has no fix PR.
5. **[#6966](https://github.com/anthropics/claude-plugins-official/issues/6966) — hookify reads the transcript without `encoding`.** The call is in `core/rule_engine.py` (line 212). On Windows with Python ≤ 3.14 it uses the ANSI code page, so Stop rules on `transcript` see an empty transcript and always fire. Fix: `open(..., encoding='utf-8')`. It is a small change, but no PR exists.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. The signals are indirect:
- **Credential handling in security-guidance.** The #6953 thread behind PR #6965 includes a request about which credential is forwarded. Support for OAuth tokens from `apiKeyHelper` is a likely follow-up.
- **Marketplace intake.** The two plugin-submission PRs (observability and dependency guardrails) show demand for monitoring and supply-chain tooling. Their closure suggests submissions still need to pass a curation bar.
- **Likely near-term:** the `remember` pin bump and the PR #6965 merge. Both are small and well-scoped.

## 7. User Feedback Summary
- **Windows users are the main source of friction.** Hooks hang until timeout, and encoding defaults cause silent logic errors. These failures are costly because they affect every session (#6956) or make a rule always fire (#6966).
- **Pinned versions go stale.** Reporters note that upstream fixes (`remember` v0.43.2) and security patches (discord) take a long time to reach the marketplace. The discord lockfile has gone about 7 months without an update.
- **Authentication setups are varied.** Users on `apiKeyHelper` with subscription OAuth tokens hit failures that API-key users don't.
- Reports are detailed, with line numbers, versions and root causes. That points to technically engaged users who want to contribute, but nobody has responded yet.

## 8. Backlog Watch
- [#6952](https://github.com/anthropics/claude-plugins-official/issues/6952) (discord dependencies) is the highest priority. It is a security issue open since 2026-10-30 with no response.
- [#6963](https://github.com/anthropics/claude-plugins-official/issues/6963) (`remember` pin) is a trivial fix that resolves a 600 s hang on Windows. Upstream has had the fix for about two weeks.
- [#6956](https://github.com/anthropics/claude-plugins-official/issues/6956) and [#6966](https://github.com/anthropics/claude-plugins-official/issues/6966) both include diagnoses that make a patch straightforward. They need an owner, since the plugin authors may be third parties.
- [#6955](https://github.com/anthropics/claude-plugins-official/issues/6955) and [#6953](https://github.com/anthropics/claude-plugins-official/issues/6953) (the latter isn't in today's data) need a decision on the credential-forwarding behavior. PR #6965 only covers part of it.

**Project health:** Automation (the SHA-bump bot) and maintainer security work are running. Issue triage is lagging: 5 of 5 active issues have no comments, and the Windows reports point to a recurring weakness in cross-platform testing of marketplace plugins.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest, 2026-11-01

## 1. Today's Overview
Awesome Claude Code is a curated list, so its activity shows up as resource submissions. Today had 15 updated issues (11 open, 4 closed) and no PRs or releases. Most of the volume (13 of 15) is new resource submissions, and 11 of those carry the `validation-passed` label. Several themes recur: memory and context persistence, code knowledge graphs, and self-hosted clients. The two maintainer-facing bottlenecks are PR throughput and the review of the submissions that passed validation.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were updated or merged in the last 24h.
- Four issues closed:
  - [#3401](https://github.com/hesreallyhim/awesome-claude-code/issues/3401) (Arcade, Mods) and [#3398](https://github.com/hesreallyhim/awesome-claude-code/issues/3398) (My Office, Start Here) were auto-closed. They still had `validation-pending` and `auto-closed` labels, and their titles were left as the template placeholder (`<name of your resource>`) in #3401.
  - [#3397](https://github.com/hesreallyhim/awesome-claude-code/issues/3397) (AgentBridge) was closed without validation labels. It was probably submitted without the form's automation labels.
  - [#2528](https://github.com/hesreallyhim/awesome-claude-code/issues/2528) (Kin, Memory & Context Persistence) was closed after a long life (opened 2026-08-14). It has `validation-passed`, so it likely means the resource was accepted.

## 4. Community Hot Topics
Comment and reaction counts are very low. No issue has a 👍, and each has at most 3 comments. The most discussed is [#2528](https://github.com/hesreallyhim/awesome-claude-code/issues/2528) with 3 comments. Most others have 1 comment, probably the validation bot's.

The themes by submission category:
- **Memory & Context Persistence** (5 submissions): [#3399 ContextOS](https://github.com/hesreallyhim/awesome-claude-code/issues/3399), [#3394 Graphify](https://github.com/hesreallyhim/awesome-claude-code/issues/3394), [#3392 symbion](https://github.com/hesreallyhim/awesome-claude-code/issues/3392), [#3395 MemTether](https://github.com/hesreallyhim/awesome-claude-code/issues/3395) and the closed Kin. The underlying need is cross-session memory, decision tracking and codebase understanding, mostly as local MCP servers or hooks.
- **Code graphs and indexing**: [#3402 Graphenium](https://github.com/hesreallyhim/awesome-claude-code/issues/3402) (a Rust codebase compiler) and Graphify (tree-sitter knowledge graph). Both aim to cut token use and improve retrieval.
- **Alternative Clients / self-hosting**: [#3403 Claudio](https://github.com/hesreallyhim/awesome-claude-code/issues/3403) (Claude Code as a REST service) and [#3393 claudebox](https://github.com/hesreallyhim/awesome-claude-code/issues/3393) (a web UI with disposable Podman/Docker sessions). Users want to run Claude Code remotely and in isolation.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only stability-adjacent issue is process-related: two submissions were auto-closed, and one has a placeholder title ([#3403](https://github.com/hesreallyhim/awesome-claude-code/issues/3403) also has a placeholder title but passed validation).

## 6. Feature Requests & Roadmap Signals
There are no feature requests for the repo itself. The submissions suggest where the ecosystem is heading:
- Memory and knowledge-graph tooling is the strongest category and will likely keep growing. It may justify more subcategories or tagging inside "Memory & Context Persistence".
- Self-hosted and containerized Claude Code runtimes are a second emerging cluster.
- Niche additions include [#3391 Mobbin](https://github.com/hesreallyhim/awesome-claude-code/issues/3391) (Design & UI/UX), [#3390 Signbee](https://github.com/hesreallyhim/awesome-claude-code/issues/3390) (Skills) and [#3396 Awesome Claude Video Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3396) (a list of about 400 items).
- [#3400](https://github.com/hesreallyhim/awesome-claude-code/issues/3400), a study of 3,905 public CLAUDE.md and AGENTS.md files, signals interest in context-file best practices.

## 7. User Feedback Summary
There are no direct complaints. The submissions suggest contributors want:
- persistent, auditable memory ([#3395](https://github.com/hesreallyhim/awesome-claude-code/issues/3395) stresses an audit chain and bi-temporal records);
- local-first tools that don't send code to third parties;
- better visibility into sessions ([#3398](https://github.com/hesreallyhim/awesome-claude-code/issues/3398), a 3D office view);
- sandboxed execution.

The auto-closures hint at friction with the submission form. Submitters sometimes leave the title as the template placeholder, or open issues without using the form.

## 8. Backlog Watch
- [#3395 MemTether](https://github.com/hesreallyhim/awesome-claude-code/issues/3395) was opened as a free-form issue, not through the resource form. It has no validation labels and no comments, so it needs a maintainer to ask for resubmission or to triage it.
- [#3390 Signbee](https://github.com/hesreallyhim/awesome-claude-code/issues/3390) and [#3391 Mobbin](https://github.com/hesreallyhim/awesome-claude-code/issues/3391): Mobbin has `validation-passed` and no comments. Signbee lacks validation labels. Both have been open since 2026-10-31.
- The 11 open submissions with `validation-passed` are waiting for maintainer decisions. The data doesn't show how long that usually takes, so the queue's age can't be judged from today's window alone.
- No older long-stalled issues or PRs appear in this 24h data. A full backlog check would need a wider time window.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Project Digest (2026-11-01)

## 1. Today's Overview
Awesome Agent Skills (VoltAgent) is a curated list, so activity is mostly community submissions and list upkeep. In the last 24h there was 1 open issue and 8 PRs updated (all open), with no merges, closures or releases. No PR has comments or reactions, so submissions are accumulating without maintainer review. Content is healthy: new submissions span security, embedded development, design, telephony and e-signing. Several PRs target list hygiene (dead and renamed links).

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no changes landed. Eight PRs are pending (see below).

**New skill submissions (pending)**
- [#1329](https://github.com/VoltAgent/awesome-agent-skills/pull/1329) Ironheights: a local, Apache-2.0 scanner that checks skills before install for malware, credential theft, pipe-to-shell and drift.
- [#1328](https://github.com/VoltAgent/awesome-agent-skills/pull/1328) esp32-agent-skills: 13 skills plus 4 CLI checkers for ESP32 failures that compile but halt the board. Proposed under Development and Testing.
- [#1324](https://github.com/VoltAgent/awesome-agent-skills/pull/1324) CodeIntel: a cross-agent skill (Claude Code, Codex, Copilot CLI, Cursor, Gemini CLI, etc.) proposed under Context Engineering.
- [#1323](https://github.com/VoltAgent/awesome-agent-skills/pull/1323) whobot-phonecall-skill: an official skill from WhoBot, a Chinese AI phone-agent platform.
- [#1322](https://github.com/VoltAgent/awesome-agent-skills/pull/1322) Mobbin redesign-screen and search: two official MIT skills for design-pattern-driven UI work.
- [#1321](https://github.com/VoltAgent/awesome-agent-skills/pull/1321) Signbee: document e-signing for agents, with SHA-256 audit trails, email OTP and webhooks.

**List maintenance (pending)**
- [#1327](https://github.com/VoltAgent/awesome-agent-skills/pull/1327) removes `half144/cutaway`, where both the account and repo return 404.
- [#1325](https://github.com/VoltAgent/awesome-agent-skills/pull/1325) updates 4 renamed repos (for example `Eronred/aso-skills` to `appeeky/a…`) and removes 1 deleted repo.

## 4. Community Hot Topics
No item has comments or 👍 reactions, so there is no engagement signal. The themes by volume:
- **Link rot and list integrity:** [#1327](https://github.com/VoltAgent/awesome-agent-skills/pull/1327) and [#1325](https://github.com/VoltAgent/awesome-agent-skills/pull/1325) were both found by scripted audits of every README link. Each contributor also found dead or renamed entries, so this is a recurring problem that automated link checking could address.
- **Skill supply-chain security:** [#1329](https://github.com/VoltAgent/awesome-agent-skills/pull/1329) (Ironheights) responds to the risk of installing untrusted skills. The same concern shows up in the governance and audit-chain angle of [#1326](https://github.com/VoltAgent/awesome-agent-skills/issues/1326).
- **Vendor-official skills:** Mobbin, WhoBot and Signbee are products shipping their own skills, so the list is becoming a distribution channel for SaaS vendors.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only quality issue is link rot (the dead link in #1327, and the renamed or deleted repos in #1325), and both already have fix PRs.

## 6. Feature Requests & Roadmap Signals
- [#1326](https://github.com/VoltAgent/awesome-agent-skills/issues/1326) asks to add MemTether, an Apache-2.0 cross-client memory hub with a hash-chained audit log, bi-temporal supersession and MCP support, backed by shared local SQLite. It was filed as an issue rather than a PR, so it needs a maintainer to convert or request a PR.
- Likely next-list additions: the memory, security-scanning and embedded categories, which have clear demand. Link-hygiene PRs are the most likely to be merged first, since they are small and low-risk.
- Possible process improvement (an inference from the PRs, not a stated request): CI link validation.

## 7. User Feedback Summary
There are no direct comments. The PRs show these needs:
- Contributors want trustworthy, vetted skills (#1329, #1326).
- Developers want domain-specific, failure-focused skills, such as hardware pitfalls in #1328.
- Contributors are doing manual link audits, which suggests the list lacks automated checks.
- Satisfaction can't be judged because there are no reactions or discussion.

## 8. Backlog Watch
- The 6 submission PRs (#1321–#1324, #1328, #1329) are unreviewed. The oldest were opened on 2026-10-31, so none is yet stale by date.
- The dead-link and rename PRs (#1325, #1327) overlap, so a maintainer should merge or reconcile them before more link fixes arrive. #1325 also removes a deleted repo, and #1327 removes `half144/cutaway`, so check whether these removals conflict.
- Issue [#1326](https://github.com/VoltAgent/awesome-agent-skills/issues/1326) has no response, and the maintainers should state how they want submissions made (PR or issue).
- The data covers only the last 24h, so older backlog beyond #1321 cannot be assessed here.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
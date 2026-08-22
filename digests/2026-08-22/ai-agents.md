# MCP Ecosystem Digest 2026-08-22

> Issues: 1 | PRs: 9 | Projects covered: 7 | Generated: 2026-08-22 07:27 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest
**Date:** 2026-08-22 | **Repo:** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## 1. Today's Overview

Activity in the last 24 hours was moderate and entirely contributor-driven: 1 new issue and 9 open PRs touched, with **zero merges, closes, or releases**. The bulk of the PR activity clusters around the reference `filesystem` server (Windows path handling) and the `sequentialthinking` server (a schema regression), suggesting active but not-yet-triaged bug-fixing work from external contributors. No maintainer engagement (comments, reviews, merges) is visible in this window, which is the main signal worth watching — the queue is growing faster than it's being cleared.

## 2. Releases

No new releases in this window.

## 3. Project Progress

No PRs were merged or closed today — all 9 tracked PRs remain open. Work "in flight" but unlanded includes:

- **Filesystem server hardening**: [#4684](https://github.com/modelcontextprotocol/servers/pull/4684) and [#4683](https://github.com/modelcontextprotocol/servers/pull/4683) (both by `adityachaudhary99`) together address a cluster of Windows path-handling bugs — quoted/spaced/8.3-short-name paths and case-insensitive allowed-root matching.
- **Filesystem `create_directory` fix**: [#4679](https://github.com/modelcontextprotocol/servers/pull/4679) adds support for nested paths whose parent directories don't yet exist.
- **Git server cleanup**: [#4681](https://github.com/modelcontextprotocol/servers/pull/4681) unifies `git_log`'s filtered/unfiltered output formatting.
- **Sequentialthinking maintenance**: [#4680](https://github.com/modelcontextprotocol/servers/pull/4680) makes the reported version read dynamically from `package.json`; [#4652](https://github.com/modelcontextprotocol/servers/pull/4652) fixes a schema regression (see §5).
- **Fetch server improvement**: [#4659](https://github.com/modelcontextprotocol/servers/pull/4659) adds SSR-content fallback and configurable timeout.

None of this has landed yet — it's a healthy pipeline of fixes awaiting review.

## 4. Community Hot Topics

Engagement is thin today — no issue or PR has comments or reactions above zero, so there's no runaway discussion thread. The closest thing to a "hot topic" is the **concentration of independent contributors fixing the same `filesystem` server** in the same 24h window ([#4684](https://github.com/modelcontextprotocol/servers/pull/4684), [#4683](https://github.com/modelcontextprotocol/servers/pull/4683), [#4679](https://github.com/modelcontextprotocol/servers/pull/4679)) — a sign that Windows path-handling edge cases are a recurring pain point for real users, not a one-off report.

Also notable: [#4678 "merge upstream"](https://github.com/modelcontextprotocol/servers/pull/4678) — a PR with no substantive description beyond the README's server-registry boilerplate. This looks like an accidental or malformed PR (likely an unintended fork-sync push) rather than a real contribution, and is a candidate for a quick maintainer close.

## 5. Bugs & Stability

Ranked by likely user impact:

1. **[High] Sequentialthinking `inputSchema` regression** — [#4652](https://github.com/modelcontextprotocol/servers/pull/4652): a prior fix (commit `1cdf806d`, #3533) that wrapped `nextThoughtNeeded` in `z.preprocess()` to prevent string-`"false"` coercing to `true` had the side effect of silently dropping the field from the *advertised* `inputSchema`'s `required` array (zod's `toJSONSchema` treats preprocessed fields as `unknown`). This is a client-visible schema-correctness bug — fix PR is open and ready for review.
2. **[Medium] Filesystem path validation gaps on Windows** — [#4684](https://github.com/modelcontextprotocol/servers/pull/4684) and [#4683](https://github.com/modelcontextprotocol/servers/pull/4683): allowed-directory checks can incorrectly reject valid paths (quoted paths, 8.3 short names, tilde/Git-Bash prefixes) or apply inconsistent case-sensitivity, both of which are functional blockers for Windows users rather than security issues, though path-validation code is worth extra scrutiny given its role in sandboxing. Fixes are open.
3. **[Medium] `create_directory` fails on nested non-existent paths** — [#4679](https://github.com/modelcontextprotocol/servers/pull/4679): affects any client trying to create multi-level directory trees in one call. Fix PR adds ancestor-walking validation.
4. **[Low] Fetch server mishandles streaming/SSR content** — [#4659](https://github.com/modelcontextprotocol/servers/pull/4659): Mozilla Readability strips content hidden via CSS during hydration (Next.js/Remix skeletons), causing incomplete extraction from modern SSR sites. Fix adds a fallback plus configurable timeout.

No new crash or data-loss reports today; all four items are correctness/compatibility bugs with fixes already proposed, which is a good stability signal.

## 6. Feature Requests & Roadmap Signals

- **[#4677](https://github.com/modelcontextprotocol/servers/issues/4677) "Add OEDON MCP server"** and **[#4676](https://github.com/modelcontextprotocol/servers/pull/4676) "Add OpenLM MCP Server"** are both third-party server listing requests. Notably, PR #4678's boilerplate confirms the repo **no longer accepts PRs to add servers to the README** — pointing contributors instead to the [MCP Server Registry](https://github.com/modelcontextprotocol/registry). This means #4676 and #4677 are likely to be closed/redirected rather than merged, and is a useful signal that the project has fully shifted server-discovery away from the core repo toward the registry.
- Given the current PR mix, the next release is most likely to bundle: the sequentialthinking schema fix (#4652), the filesystem Windows path fixes (#4684, #4683, #4679), and possibly the git_log unification (#4681) — these are narrowly-scoped, low-risk fixes with clear test plans.

## 7. User Feedback Summary

- **Pain point — Windows compatibility**: Three independent PRs this week target filesystem-server path handling on Windows (quoting, 8.3 names, case sensitivity, nested directory creation), indicating real friction for Windows-based MCP client users rather than a single edge case.
- **Pain point — schema/client mismatch**: #4652 shows a case where an internal validation fix inadvertently broke the schema contract exposed to clients — a reminder that zod-based schema generation needs test coverage on the *advertised* schema, not just runtime behavior.
- **Use case signal**: #4659's SSR-fallback work reflects fetch-tool usage against modern JS-heavy sites (Next.js/Remix), suggesting users are pointing the fetch server at real-world production web apps, not just static content.
- **Ecosystem signal**: Continued server-registry submissions (#4676, #4677) show sustained third-party interest in listing under MCP, even as the project pushes that traffic toward the external registry.

## 8. Backlog Watch

- **[#4652](https://github.com/modelcontextprotocol/servers/pull/4652)** — open since 2026-08-17 (5 days), fixes a real schema-correctness regression; no maintainer review yet. Worth prioritizing given client-facing impact.
- **[#4659](https://github.com/modelcontextprotocol/servers/pull/4659)** — open since 2026-08-17 (5 days), addresses two linked issues (#3878, #4448); still unreviewed.
- **[#4678](https://github.com/modelcontextprotocol/servers/pull/4678)** — appears to be a stray/mistaken "merge upstream" PR with no real diff description; low effort to triage and close, but sitting open adds noise to the queue.
- No issues or PRs are yet old enough (beyond a few days) to count as long-neglected, but the **zero-merge day** combined with five aging filesystem/sequentialthinking fixes suggests review throughput is currently the bottleneck, not contribution volume.

---

## Cross-Ecosystem Comparison

Here's the cross-project comparison report:

# Cross-Project Comparison: MCP & Agent Ecosystem — 2026-08-22

## 1. Ecosystem Overview

The Model Context Protocol (MCP) ecosystem has matured past its early "single reference implementation" phase into a layered supply chain: a core spec/reference-server repo, an official registry for discovery, a Docker-distributed catalog for installation, and multiple community-curated "awesome list" aggregators, all operating alongside adjacent Claude-specific ecosystems (Claude Plugins, Claude Code skills lists). Submission volume across nearly every tracked repo dramatically outpaces review/merge throughput today — visible in `awesome-mcp-servers` (82 PR touches, only 10 resolved), `docker/mcp-registry` (50 PRs, zero merged), and `awesome-agent-skills` (28 PRs, 7 resolved) — indicating the ecosystem's bottleneck has shifted from *contribution* to *maintainer review capacity*. A second cross-cutting theme is trust and safety: both `modelcontextprotocol/registry` (an unaddressed two-week-old malware takedown) and the awesome-list repos (Solana-sniping/MEV bots submitted for inclusion) show the ecosystem grappling with moderation at scale. Distribution-pipeline integrity is also a live concern — Docker's catalog image is missing 70% of registered entries, undermining the discovery layer meant to reduce fragmentation. Overall, the landscape reads as high-growth and increasingly specialized (context/memory tooling, agent evaluation, spend-control guardrails) but still building out the moderation, review-capacity, and pipeline-reliability infrastructure needed to match its submission velocity.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Health Score* |
|---|---|---|---|---|---|
| **MCP Servers** (core) | 1 new | 9 open | 0 | None | 🟡 Moderate — active fixes, zero review throughput today |
| **MCP Registry** (official) | 6 (4 closed) | 2 open | 0 PRs / 4 issues | None | 🟠 Mixed — good issue triage, but unresolved security item |
| **Awesome MCP Servers** | 3 | 82 touched | 10 / 82 (~12%) | N/A (list repo) | 🟡 Moderate — high volume, growing backlog |
| **Docker MCP Registry** | 2 | 50 touched | 0 | None | 🔴 Weak — zero merges, 70% catalog gap, bot-PR pileup |
| **Claude Plugins (official)** | 4 open | 27 touched (21 bot) | 6 | None | 🟡 Moderate — real fixes blocked by external-contributor auto-close policy |
| **Awesome Claude Code** | 11 (1 closed) | 0 | 1 (issue) | None | 🟢 Healthy — low volume, near same-day triage |
| **Awesome Agent Skills** | 0 | 28 touched | 7 / 28 (25%) | N/A (list repo) | 🟢 Healthy — best merge ratio of the curation repos |

*Reflects review responsiveness and backlog trend, not raw volume — a "quiet" repo can outscore a "busy" one if its queue isn't growing unchecked.

## 3. MCP Servers's Position

**Advantages vs. peers:** As the reference implementation, MCP Servers sits upstream of the entire distribution chain (Registry → Docker Catalog → Awesome lists) — fixes here (e.g., the `sequentialthinking` schema regression) have outsized downstream impact. Its contributor base skews toward substantive correctness fixes (Windows path handling, schema regressions) rather than pure listing submissions, and today's activity had zero spam/low-effort noise, unlike the moderation overhead seen in `awesome-claude-code` and `modelcontextprotocol/registry`.

**Technical approach differences:** Unlike the Registry (metadata/discovery) or Docker Catalog (packaged distribution), MCP Servers ships runnable code — its bug surface (path validation, zod-based schema generation) is deeper and riskier. The project has explicitly stopped accepting new-server-listing PRs, cleanly delegating discovery to the Registry — a separation the Registry and Docker Catalog haven't fully absorbed downstream (hence the sync gap in #4662).

**Community size:** Mid-sized relative to peers — fewer daily touches (10 items) than the mega-volume curated lists (82, 50), but each item reflects deeper engineering effort, mirroring the general pattern of smaller, higher-signal contributor pools on runtime repos versus catalog repos.

## 4. Shared Technical Focus Areas

| Theme | Projects | Specific Need |
|---|---|---|
| **Windows/cross-platform path handling** | MCP Servers (#4684, #4683, #4679) | Quoted paths, 8.3 short names, case-insensitive root matching, nested directory creation |
| **Registry/catalog sync & completeness** | Docker MCP Registry (#4662, 230/328 entries missing), MCP Registry (#1546 schema validation gap) | Published artifacts drifting from source-of-truth — a pipeline reliability gap at two independent layers |
| **Delivery/transport reliability** | MCP Servers (fetch SSR fallback, #4659), Docker MCP Registry (DeepWiki HTTP 410, #4735), Claude Plugins (`telegram` delivery bug, #5565) | Servers/plugins silently failing when a transport/endpoint changes, without surfacing the failure |
| **Agent evaluation & observability** | Awesome MCP Servers (agent-eval, memtrust, #11884), Awesome Agent Skills (context-doctor #928, skillreaper #926, stop-manual-testing #942) | Measuring whether loaded context/skills/servers are actually used; replacing manual QA with automated eval |
| **Spend/financial guardrails for agents** | Awesome MCP Servers (#12619, #12610), Awesome Claude Code (#2595, #2591, #2597) | Independent submitters across two unrelated repos converging on MEV/spend-control tooling — moderation-sensitive |
| **Context/memory persistence** | Awesome Claude Code (#2594 Reinstate, #2592 Tokenade), Awesome Agent Skills (context-doctor, skillreaper) | Long-running sessions losing/bloating context; demand for indexing, folding, pruning |
| **Trust & safety at scale** | MCP Registry (#1563 unaddressed malware takedown), awesome-list repos (financial-tool submissions needing scrutiny) | No tracked repo shows a fast, systematic moderation response as third-party volume grows |

## 5. Differentiation Analysis

- **Feature focus**: MCP Servers/Docker Registry focus on runtime correctness and distribution mechanics; the awesome lists focus purely on discovery curation with no code of their own; Claude Plugins occupies a marketplace/product-integration niche closer to end-user workflows.
- **Target users**: MCP Servers/Registry target implementers; Docker Catalog targets operators pulling pre-packaged catalogs; awesome lists target end-user discovery; Claude Plugins targets Claude Code users installing marketplace integrations directly.
- **Technical architecture**: The MCP-proper repos form a three-tier pipeline (spec → registry → packaged distribution) where a defect at any tier propagates downstream — illustrated today by the Docker catalog gap and the Registry's unenforced schema. The awesome-list and Claude Plugins repos are flat, PR-review-gated content repos with no pipeline dependency, so their "bugs" are process/moderation issues, not software defects.
- **Governance maturity**: MCP Servers has resolved its scope question (registry delegation); MCP Registry is actively wrestling with trust/safety and schema gaps; Claude Plugins has an external-contributor auto-close policy actively alienating contributors with working fixes (#5564, #5565) — a friction point not seen elsewhere.

## 6. Community Momentum & Maturity

**Rapidly iterating:** `awesome-mcp-servers` and `docker/mcp-registry` show submission volume outstripping review capacity (72 and 50 open PRs), suggesting a growth phase where maintainer tooling hasn't caught up. `awesome-agent-skills` and `claude-plugins-official` show high churn but meaningfully better resolution ratios (25%, 22%), suggesting more scalable triage is taking hold.

**Stabilizing:** `modelcontextprotocol/servers` activity has shifted from "which servers to list" to focused correctness/hardening work — consistent with settling into maintenance mode on a fixed scope. `awesome-claude-code` shows low volume with near-same-day turnaround — a mature, well-oiled intake process.

**At risk of stalling:** `modelcontextprotocol/registry` — a two-week-unaddressed malware takedown plus an unresolved schema gap suggest maintainer bandwidth is the binding constraint on the ecosystem's designated trust anchor. `docker/mcp-registry` — zero merges in-window, a 13-day-old high-impact catalog bug, and a bot-PR backlog dating to November 2025 point to a more severe throughput problem than peers.

## 7. Trend Signals

1. **Discovery-vs-distribution gap is now a first-class reliability problem.** Both the Registry (unenforced schema) and Docker's catalog (70% missing entries) show a registry alone isn't sufficient — teams relying on published catalogs for automated installs should verify against source registries, not trust the artifact.
2. **Agent evaluation/observability is the next major tooling category.** Independent submissions (agent-eval, memtrust, skillreaper, context-doctor, stop-manual-testing) across three unrelated repos in one 24h window is a strong build/invest signal as agent deployments move past prototyping.
3. **Financial guardrail tooling for agents is emerging but under-vetted.** Multiple spend-control/MEV submissions with zero moderation response so far — builders in this space should expect scrutiny and proactively document security posture.
4. **External-contributor friction is a hidden maturity risk.** Claude Plugins' auto-close-on-external-PR policy strands working, tested fixes outside the merge path — a pattern other fast-growing repos should avoid as they scale contributor volume without scaling review bandwidth.
5. **Windows compatibility remains an underserved tax on MCP adoption.** Three independent contributors hit the same filesystem-server path-handling bug class in one week — dedicated test coverage is overdue.
6. **Context/memory management for long-running sessions is a converging need**, evidenced by simultaneous, independently-authored submissions — context-window economics is becoming a real differentiator for agent tooling.

I attempted to also save this as `digests/2026-08-22/mcp-comparison.md` but the write was blocked by a permission prompt — let me know if you'd like me to retry that.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
**Date:** 2026-08-22 | **Repo:** [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview

Activity over the last 24 hours was light but not idle: 6 issues and 2 PRs saw movement, with no new releases. Four of the six issues were closed — two legitimate community server submissions processed through the normal intake flow, and two low-effort/spam enhancement requests cleared out. The two open PRs are substantive: one hardens the publish pipeline against latency regressions in production, the other extends search to match server descriptions, not just names. The standout open issue is a security-relevant takedown request for a server flagged as malware delivery that has sat untouched since publication — a signal worth flagging for maintainer triage. Overall, this reads as routine maintenance-mode activity for a registry with a steady trickle of publisher submissions and a small, focused core-infra improvement queue.

## 2. Releases

No new releases in this window.

## 3. Project Progress

No PRs merged or closed today — both remain open, but each addresses a concrete, well-scoped problem:

- **[PR #1565](https://github.com/modelcontextprotocol/registry/pull/1565)** — `feat(search): match server descriptions as well as names`. Closes [#1453](https://github.com/modelcontextprotocol/registry/issues/1453). Currently `?search=` only matches `server_name`, which penalizes servers with generic/branded names (e.g., `io.github.<owner>/<product>`) that don't describe functionality. This directly improves discoverability.
- **[PR #1562](https://github.com/modelcontextprotocol/registry/pull/1562)** — `fix(publish): validate registries outside the transaction and time the pool wait`. Backed by real production alerting data: publish-latency alerts have fired 1,285 times since 2025-09-11 versus 6 total for read-path rules. This is a targeted fix for the registry's single dominant operational pain point.

## 4. Community Hot Topics

- **[Issue #1546](https://github.com/modelcontextprotocol/registry/issues/1546)** — "Registry accepts server.json with empty `repository`: {} though schema requires url + source" — most-discussed item today (6 comments). Reflects a real concern: schema validation isn't actually enforced at publish time for a required field, undermining trust in the registry's data quality guarantees.
- **[PR #1562](https://github.com/modelcontextprotocol/registry/pull/1562)** — the production-latency data table attached to this PR (10s+ publish outliers vs. read-path stability) is drawing attention as a rare case of a PR shipping with hard operational evidence rather than just a description.

## 5. Bugs & Stability

Ranked by severity:

1. **[Issue #1563](https://github.com/modelcontextprotocol/registry/issues/1563)** — *High/Trust & Safety*: Takedown request for `io.github.jUXTAPOSITION1/vape` v1.1.1, reported as malware delivery on 9 August, still `status: active` and `isLatest: true` with zero maintainer response. This is the most urgent item in the queue today — an actively-distributed malicious server sitting live in the registry for two weeks. No fix PR or status change yet.
2. **[Issue #1546](https://github.com/modelcontextprotocol/registry/issues/1546)** — *Medium/Data integrity*: Schema validation gap allowing `repository: {}` despite `url`/`source` being required across three published schema versions (2025-07-09, 2025-09-29, 2025-12-11). No fix PR linked yet.
3. **[PR #1562](https://github.com/modelcontextprotocol/registry/pull/1562)** — *Medium/Performance regression*, already has a fix in flight: publish-path transaction holds a DB connection during registry validation and pool-wait time isn't instrumented, producing intermittent 10s+ publish latency in production.

## 6. Feature Requests & Roadmap Signals

- Description-based search (**[#1453](https://github.com/modelcontextprotocol/registry/issues/1453)** → **[PR #1565](https://github.com/modelcontextprotocol/registry/pull/1565)**) is the clearest near-term roadmap item — already implemented and awaiting review/merge, likely to ship in the next cut.
- **[#1501](https://github.com/modelcontextprotocol/registry/issues/1501)** and **[#1540](https://github.com/modelcontextprotocol/registry/issues/1540)** were filed as "[enhancement]" but contain only unfilled template boilerplate (one literally titled "5000000000"); both were closed same-day with no discussion — these are noise, not roadmap signal.

## 7. User Feedback Summary

- **Publishers** continue onboarding new servers through the standard submission flow — LinkedIn automation (**[#1545](https://github.com/modelcontextprotocol/registry/issues/1545)**, closed) and a SAP HANA-to-knowledge-graph integration (**[#1494](https://github.com/modelcontextprotocol/registry/issues/1494)**, closed) — indicating healthy, if unglamorous, ecosystem growth into enterprise-adjacent use cases.
- **Discoverability pain**: the search-by-name-only limitation (#1453/#1565) is a recurring pain point for publishers whose product names don't self-describe.
- **Trust/safety concern**: the malware takedown report (#1563) is the sharpest piece of negative feedback in this window — a reporter flagging that the registry's moderation loop hasn't acted on a known-bad package for two weeks.
- **Operational feedback (internal)**: the publish-latency data behind #1562 shows the team is now dogfooding its own alerting to drive fixes, a positive signal for engineering rigor.

## 8. Backlog Watch

- **[Issue #1563](https://github.com/modelcontextprotocol/registry/issues/1563)** — malware takedown request, 0 comments, filed 2026-08-21, still `active`/`isLatest`. **Needs immediate maintainer attention** given the security implications.
- **[Issue #1546](https://github.com/modelcontextprotocol/registry/issues/1546)** — schema-validation gap open since 2026-08-19 with 6 comments of discussion but no resolution or linked fix PR; worth escalating before more malformed entries accumulate.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-08-22)

## 1. Today's Overview

Awesome MCP Servers remains a high-throughput curation repo rather than a traditional codebase: today's 24h window shows 82 PR updates against just 3 issues, confirming the project's primary activity is community submissions of new MCP server listings rather than bug fixes or core development. Of those PRs, 72 remain open and 10 were merged or closed, indicating the maintainer(s) are triaging submissions but a large backlog is accumulating faster than it's being cleared. No releases occurred, which is expected — this repo doesn't version in the traditional sense. All 3 open issues are also "add my server" requests rather than defects, reinforcing that "bugs" in the conventional sense are essentially absent from this project. Overall assessment: **high submission volume, moderate-to-low triage throughput** — a healthy sign of ecosystem growth around MCP, but a widening backlog risk for maintainers.

## 2. Releases

None today — no version tags or release notes were published.

## 3. Project Progress

Only one PR's outcome is explicitly visible in the data:

- **[#12640 — Add BoardRepo (hardware designs over remote MCP) to Embedded System](https://github.com/punkpeye/awesome-mcp-servers/pull/12640)** — CLOSED. Adds a remote MCP server for reading PCB/hardware designs (schematics, BOM, nets) for AI agent consumption.

The remaining 9 merged/closed PRs aren't broken out individually in the provided data, but the pattern across today's submissions is consistent: new-entry additions across a wide spread of categories — Browser Automation, Cloud Platforms, Developer Tools, Communication, E-Commerce, Code Execution, Art & Culture, Travel & Transportation, Embedded Systems, Search & Data Extraction, Spirituality & Esoterica, and Agreements & Coordination. This breadth suggests the MCP ecosystem is diversifying well beyond dev-tooling into vertical/niche use cases (astrology computation, SMS gateways, hotel PMS, hardware design).

## 4. Community Hot Topics

Comment/reaction counts are largely `undefined` or 0 in today's data, so there's no strong engagement signal to rank by. The closest proxies for "hot" activity are volume and recency clustering:

- **[#12645 — Add roblouw2nd/fetchgate](https://github.com/punkpeye/awesome-mcp-servers/pull/12645)** and **[#12621 — Add Crawdar business research MCP](https://github.com/punkpeye/awesome-mcp-servers/pull/12621)** both represent a recurring underlying need: **URL/web-content-to-structured-data tooling for agents** (Markdown extraction, business research, evidence-backed discovery).
- **[#12626 — Add chp-mcp and agent-conductor](https://github.com/punkpeye/awesome-mcp-servers/pull/12626)** and **[#12631 — Add CodeSentinel MCP](https://github.com/punkpeye/awesome-mcp-servers/pull/12631)**, both from `icohangar-ops`, signal a cluster of related agent-orchestration/spend-control tooling being submitted together.
- **[#11884 — Add agent-eval, agent-observability, memtrust, LLMScout, electronics-rfq-agent](https://github.com/punkpeye/awesome-mcp-servers/pull/11884)** — bundles multiple servers, notably **agent-eval** and **memtrust**, pointing to growing demand for **agent evaluation and memory-benchmarking infrastructure** as agent deployments mature beyond prototyping.

Underlying need: submitters are increasingly building **agent observability, evaluation, and financial-safety (MEV/spend guardrails) tooling**, not just task-execution servers — a sign the ecosystem is maturing past basic "connect X API to an agent" servers.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. This is expected for a curated list repository with no runtime component of its own — issues and PRs are exclusively submission requests, not defect reports. Two of today's submissions ([#12619 SolSniper](https://github.com/punkpeye/awesome-mcp-servers/issues/12619), [#12610 AgentShield](https://github.com/punkpeye/awesome-mcp-servers/issues/12610)) are worth flagging for maintainer scrutiny rather than as bugs — both are financial/on-chain trading tools (Solana sniping, MEV protection) which typically draw more careful review before inclusion given abuse/safety implications.

## 6. Feature Requests & Roadmap Signals

No feature requests were filed against the repo's own tooling (e.g., the `awesome-lint` bot, PR templates, or automation flags like `missing-glama`/`has-emoji`/`valid-name` visible on most PRs). These automated tags suggest the repo already runs bot-based PR validation; no changes to that system were requested today. The steady stream of category-spanning submissions (Spirituality & Esoterica, Embedded Systems, Travel & Transportation) suggests the category taxonomy may need periodic review/expansion as MCP servers cover increasingly niche domains — a soft roadmap signal rather than an explicit request.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction feedback appears in today's data — the repo's interaction model is submit-and-wait (PR authors, maintainer triages), not a discussion-heavy support channel. Implicit pain point: several PR authors explicitly note automated validation status in their titles (`missing-glama`, `has-emoji`, `valid-name`, `has-glama`, `non-github-url`), suggesting the contribution bar includes registry/metadata requirements (e.g., Glama listing) that some submitters have not yet satisfied — a possible source of contributor friction if these aren't clearly documented.

## 8. Backlog Watch

Two open items stand out for age relative to today's date, both still awaiting resolution after multiple weeks:

- **[#11884 — Add agent-eval, agent-observability, memtrust, LLMScout, electronics-rfq-agent](https://github.com/punkpeye/awesome-mcp-servers/pull/11884)** — opened 2026-08-10, still open 12 days later despite bundling 4 distinct, seemingly-legitimate tools including agent-eval infrastructure.
- **[#10547 — Add Idencify (hosted code-intelligence MCP server)](https://github.com/punkpeye/awesome-mcp-servers/pull/10547)** — opened 2026-07-21, over a month old, already flagged as `has-glama`/`valid-name` (i.e., passing automated checks) yet still unmerged. This is the oldest unresolved item in today's dataset and the strongest candidate for maintainer attention.

Both PRs pass automated validation but remain stuck in manual review — indicating the maintainer review capacity, not automation, is the current bottleneck for this repo.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date:** 2026-08-22

## 1. Today's Overview

Activity in `docker/mcp-registry` remains high-volume but heavily mechanical: 50 PRs updated in the last 24h, none merged or closed, and only 2 issues touched. The overwhelming majority of open PRs are `mcp-registry-bot[bot]` automated commit-pin updates — routine dependency bumps rather than substantive feature work. The two active issues, however, point to real user-facing problems: a large catalog-completeness gap (only 98 of 328 registry entries actually published) and a deprecated transport endpoint causing hard failures for the DeepWiki server. Genuine human-authored contributions today were limited to two PRs: a fix for the DeepWiki transport issue and a new server submission ("Frantic"). Overall, the project shows steady maintenance throughput but a growing backlog of unmerged bot PRs and at least one unresolved distribution pipeline defect.

## 2. Releases

None. No new releases in the tracked window.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours — all 50 tracked PRs remain open, including the long tail of automated pin-update PRs (some dating back to November 2025, e.g. [#529](https://github.com/docker/mcp-registry/pull/529), [#612](https://github.com/docker/mcp-registry/pull/612), [#788](https://github.com/docker/mcp-registry/pull/788), [#799](https://github.com/docker/mcp-registry/pull/799)). The two human-submitted PRs opened today represent the day's actual forward motion:
- [#4754](https://github.com/docker/mcp-registry/pull/4754) — `fix(deepwiki): use Streamable HTTP endpoint`, directly addressing issue #4735.
- [#4753](https://github.com/docker/mcp-registry/pull/4753) — `Add Frantic`, a new remote MCP server submission for an agent-work bounty board.

Neither has merged yet, so no completed progress to report beyond submission.

## 4. Community Hot Topics

- **[#4662](https://github.com/docker/mcp-registry/issues/4662) — "docker-mcp-catalog:latest contains only 98 servers; 230 registry entries missing"** (3 👍, 2 comments, open since 2026-08-09, still updated as of 2026-08-21). This is the most substantive open discussion: the published Docker catalog artifact is dramatically out of sync with the source registry (328 definitions vs. 98 published), disproportionately dropping certain server types (Obsidian cited as an example). Underlying need: users rely on the published catalog artifact for discovery/installation and are hitting missing servers that exist in source — suggests a broken or stale build/publish pipeline for the catalog image.
- **[#4735](https://github.com/docker/mcp-registry/issues/4735) — "DeepWiki catalog entry uses deprecated SSE endpoint returning HTTP 410"** (opened 2026-08-20, updated today, 1 comment). A concrete breakage: the registered SSE endpoint is dead (HTTP 410), and a same-day fix PR ([#4754](https://github.com/docker/mcp-registry/pull/4754)) has already been submitted, showing responsive community turnaround on config-level bugs.

## 5. Bugs & Stability

Ranked by severity:
1. **[#4662](https://github.com/docker/mcp-registry/issues/4662) — Catalog publish pipeline gap (High).** ~70% of registry entries are absent from the published `docker-mcp-catalog:latest` image. This is a distribution-level defect affecting every user pulling the catalog, not a single-server issue. No fix PR identified yet — open and unaddressed for 13 days.
2. **[#4735](https://github.com/docker/mcp-registry/issues/4735) — DeepWiki dead endpoint (Medium, actively being fixed).** Hard failure (HTTP 410) for any client using the DeepWiki server's SSE transport. Fix already in flight via PR [#4754](https://github.com/docker/mcp-registry/pull/4754), submitted same day as this digest — likely to merge soon given it's a straightforward config correction matching upstream docs.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. The clearest roadmap signal is implicit in #4662: resolving the catalog/registry sync gap is the most impactful near-term fix the maintainers could ship, since it silently blocks discovery of the majority of registered servers. New server submissions like [#4753 "Add Frantic"](https://github.com/docker/mcp-registry/pull/4753) continue the steady cadence of ecosystem expansion via community-contributed server definitions, suggesting the registry's growth trajectory remains contributor-driven rather than maintainer-initiated.

## 7. User Feedback Summary

- Users depending on the published catalog image are experiencing silent, significant gaps between what's registered and what's actually deliverable — a trust/reliability concern for anyone automating server discovery off the artifact rather than the source repo (#4662).
- DeepWiki users hit outright failures due to an unmaintained transport declaration, reflecting a broader maintenance need: registry entries must be kept in sync with upstream server providers' endpoint/transport changes (#4735), a category of drift likely to recur across other entries as providers evolve their APIs.
- No direct positive/satisfaction signals surfaced in today's window (issue-driven data skews toward complaints by nature).

## 8. Backlog Watch

- **[#4662](https://github.com/docker/mcp-registry/issues/4662)** — 13 days open, high-impact catalog completeness bug with community upvotes (3 👍); no assigned fix PR. Warrants maintainer triage given it affects the primary distribution artifact.
- **Long-dormant bot pin PRs** — several automated dependency-pin PRs have sat open for 3+ months without merge (e.g. [#529](https://github.com/docker/mcp-registry/pull/529) since 2025-11-03, [#612](https://github.com/docker/mcp-registry/pull/612) since 2025-11-07, [#788](https://github.com/docker/mcp-registry/pull/788) since 2025-11-26). While individually low-risk, the accumulating queue (50+ open PRs, none merged today) suggests either a stalled auto-merge process or insufficient reviewer bandwidth for routine maintenance — worth a maintainer pass to confirm the bot-merge automation is functioning as intended.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest: 2026-08-22

## 1. Today's Overview

Activity in the last 24h is dominated by mechanical maintenance rather than feature work: 21 of 27 updated PRs are automated `bump(*)` SHA-pin PRs opened by `github-actions[bot]`, plus a burst of Telegram-channel bug reports and patches from external contributors. Four issues are open (none closed), all filed within the last day and a half, and none show maintainer response yet beyond one comment thread. Two low-quality duplicate `SECURITY.md` PRs were opened and closed same-day, suggesting either bot/spam submissions or a contributor retrying after a rejected first attempt. Overall this reads as a routine maintenance day for a high-churn plugin marketplace repo, with one notable cluster of correctness bugs surfacing in the `telegram` plugin and a tooling gap in the `feature-dev` agents that's been open over a month.

## 2. Releases

None — zero new releases in this window.

## 3. Project Progress

- **Merged/closed today (6 total)**, mostly routine:
  - [#5563](https://github.com/anthropics/claude-plugins-official/pull/5563) `telegram`: persist inbound so messages survive a dead transport — closed (stacked on #5562)
  - [#5562](https://github.com/anthropics/claude-plugins-official/pull/5562) `telegram`: surface quote-replies, edits and reactions to Claude — closed
  - [#5559](https://github.com/anthropics/claude-plugins-official/pull/5559) `telegram`: forward `reply_to_message_id` in inbound meta — closed
  - [#5560](https://github.com/anthropics/claude-plugins-official/pull/5560) Claude Security Plugin v0.10.2 — closed
  - [#5556](https://github.com/anthropics/claude-plugins-official/pull/5556) / [#5557](https://github.com/anthropics/claude-plugins-official/pull/5557) duplicate `SECURITY.md` PRs — both closed

Notably, the three `telegram` fix PRs (#5559, #5562, #5563) were all **auto-closed** because they come from external contributors (per the PR/issue text), not because they were rejected on merit. The author (`kaolin`) subsequently re-filed the same fixes as issues [#5564](https://github.com/anthropics/claude-plugins-official/issues/5564) and [#5565](https://github.com/anthropics/claude-plugins-official/issues/5565) asking maintainers to "lift whatever's useful" — real fix content exists but isn't merged.

## 4. Community Hot Topics

- [#4235](https://github.com/anthropics/claude-plugins-official/issues/4235) — `feature-dev` agents missing `Bash` in `tools:` allowlist, 3 comments, open over a month (since 2026-07-18). This is the most-discussed open issue and points to a real usability gap: `code-reviewer`'s own prompt tells it to run `git diff`, but its declared tool allowlist can't do it — a broken contract between prompt and manifest.
- [#5558](https://github.com/anthropics/claude-plugins-official/issues/5558) — `security-guidance` hook fires 5 subprocess spawns per single `Bash` call because `if` gating is evaluated after the processes already launched. Signals a hook-performance/design concern that could affect every user of that plugin.
- The `telegram` plugin cluster (#5559/#5562/#5563/#5564/#5565) collectively represents the most active *thread* of related activity today — multiple contributors converging on the same transport-reliability gaps.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#5565](https://github.com/anthropics/claude-plugins-official/issues/5565)** (High) — `telegram`: inbound messages marked "delivered" when `mcp.notification()` merely resolves (write success ≠ delivery). Cursor advances regardless, so messages can silently die with a stale transport — a data-loss bug. Fix exists locally (patch against 0.0.7), auto-closed PR at [#5563](https://github.com/anthropics/claude-plugins-official/pull/5563).
2. **[#5564](https://github.com/anthropics/claude-plugins-official/issues/5564)** (Medium-High) — `telegram`: quote-replies, edits, and reactions are dropped before reaching the Claude session — three distinct signal types lost. Fix PR auto-closed at [#5562](https://github.com/anthropics/claude-plugins-official/pull/5562).
3. **[#5558](https://github.com/anthropics/claude-plugins-official/issues/5558)** (Medium) — `security-guidance` hook race: gating logic runs after subprocess spawn, meaning the "if" check doesn't actually prevent execution — a security-relevant logic bug in a plugin whose entire purpose is enforcing gates.
4. **[#4235](https://github.com/anthropics/claude-plugins-official/issues/4235)** (Medium) — `feature-dev` tooling gap, not a crash but a functional dead-end for `code-reviewer`. No fix PR yet after 5 weeks open.

## 6. Feature Requests & Roadmap Signals

- [#5561](https://github.com/anthropics/claude-plugins-official/pull/5561) — `telegram` v0.0.8: per-project bot configuration via state-directory resolution precedence (`TELEGRAM_STATE_DIR` → project `.claude/channels/telegram` → home dir). Still open; likely candidate for next `telegram` release given it directly addresses multi-project ergonomics.
- [#5426](https://github.com/anthropics/claude-plugins-official/pull/5426) — new **ramp** plugin (Ramp spend-management/expense MCP connector) proposed for the official marketplace — a marketplace-expansion candidate, still open.
- Given the volume and consistency of `telegram` bug reports/patches, expect a `telegram` 0.0.8 or 0.0.9 release bundling transport-reliability fixes (delivery confirmation, quote/edit/reaction forwarding) alongside the per-project config feature, if maintainers pick up the external patches.

## 7. User Feedback Summary

- Real pain point: external contributors (`kaolin`, `Hocza-Jozsef-Szabolcs`, `noahzweben`) are actively building and testing fixes/features for the `telegram` plugin against real deployments (patches "running locally against 0.0.7"), but hitting a contribution-flow wall — PRs from external contributors appear to be auto-closed, forcing them to refile as issues and hope maintainers "lift" the diffs manually. This is a process friction point more than a code problem.
- `feature-dev` and `security-guidance` reports both come from users actively exercising the plugins in real workflows (code review, security gating) and hitting first-run blockers — indicates genuine usage, not just casual browsing.

## 8. Backlog Watch

- [#4235](https://github.com/anthropics/claude-plugins-official/issues/4235) — open since 2026-07-18 (35 days), 3 comments, no merged fix — the oldest and most-discussed unresolved issue; deserves maintainer triage given it breaks a documented agent capability.
- [#5564](https://github.com/anthropics/claude-plugins-official/issues/5564) and [#5565](https://github.com/anthropics/claude-plugins-official/issues/5565) — fresh but time-sensitive: working patches exist but are stuck outside the normal PR pipeline due to the external-contributor auto-close policy; if not triaged soon, contributors may abandon the upstream path.
- The large backlog of routine `bump(*)` SHA-pin PRs (13+ open, e.g. [#5545](https://github.com/anthropics/claude-plugins-official/pull/5545)–[#5555](https://github.com/anthropics/claude-plugins-official/pull/5555)) appears auto-generated and self-validating (`claude plugin validate` in CI) but is accumulating unmerged — worth confirming whether these auto-merge on a schedule or need manual sign-off.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-08-22)

## 1. Today's Overview

Activity over the last 24 hours was light and entirely issue-driven: 11 issues touched (10 open, 1 closed), zero PRs, and no new releases. The list continues to function primarily as a submission queue — 8 of the 11 issues are new resource-submission requests, most already tagged `validation-passed`, indicating the automated triage bot is keeping pace with intake. No code changes landed today; all movement is community-facing curation activity rather than core project development. Overall project health signal: steady, low-noise submission volume typical of a curated-list repo, with maintainer throughput on approvals appearing adequate (5 of the 6 `validation-passed` submissions moved from creation to update within the same day).

## 2. Releases

None today.

## 3. Project Progress

No PRs were opened, merged, or closed in the last 24 hours, so no code or list content actually shipped. The only closed item was an issue, not a PR (see Backlog Watch, #2418), meaning the submission pipeline advanced but nothing was merged into the list itself yet.

## 4. Community Hot Topics

Engagement today is uniformly low (0–2 comments per issue, no reactions), so there isn't a standout "hot" thread — but two items reflect a recurring theme worth flagging:

- **[#2577 "Operator"](https://github.com/hesreallyhim/awesome-claude-code/issues/2577)** (2 comments) — a web app for running many parallel Claude Code/Codex sessions across worktrees. Underlying need: users want better orchestration/management tooling for multi-agent, multi-worktree workflows rather than running agents ad hoc in separate terminals.
- **[#2598 "no_human"](https://github.com/hesreallyhim/awesome-claude-code/issues/2598)** (1 comment) — ticket-to-reviewed-PR automation running locally. Reflects continued appetite for end-to-end autonomous dev-loop tools ("plan → code → review") rather than single-shot code generation.

Both fall under "Agent Orchestration," reinforcing that orchestration/multi-session management is the most active submission category right now.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions were filed in the tracked window. All 11 issues are either resource submissions or list-addition requests — none describe defects in Claude Code or in the awesome-list tooling itself.

## 6. Feature Requests & Roadmap Signals

This repo is a curated list, not a product, so "feature requests" here manifest as proposed additions rather than roadmap items for Claude Code itself. Notable submission trends today:

- **Memory/context persistence tools** are well represented: [#2594 "Reinstate"](https://github.com/hesreallyhim/awesome-claude-code/issues/2594) (indexes Claude Code/Codex sessions on disk) and [#2592 "Tokenade"](https://github.com/hesreallyhim/awesome-claude-code/issues/2592) (context-folding proxy between agent and model) both target the same pain point: long-running agent sessions losing or bloating context.
- **Agent payment/spend-control guardrails** appeared three times in one day from the same author (ezequiellich44-cmd): [#2595 AgentShield](https://github.com/hesreallyhim/awesome-claude-code/issues/2595), [#2591 MandateGuard](https://github.com/hesreallyhim/awesome-claude-code/issues/2591), and the unrelated-but-adjacent [#2597 SolSniper](https://github.com/hesreallyhim/awesome-claude-code/issues/2597) (a Solana trading bot, only loosely tied to "Claude Code agent" use cases). This cluster signals emerging interest in financial-guardrail tooling for autonomous agents, though SolSniper's fit for this list is questionable and may draw maintainer scrutiny.
- **Skills submissions** continue steadily: [#2596 agent-handbook](https://github.com/hesreallyhim/awesome-claude-code/issues/2596), [#2593 Vibe-Coding Prompt Template](https://github.com/hesreallyhim/awesome-claude-code/issues/2593), and the still-unlabeled [#2600 principle-adopt-fork-build](https://github.com/hesreallyhim/awesome-claude-code/issues/2600) (Adopt→Fork→Build decision ladder skill). If accepted, expect these to land as new Skills-category list entries rather than a "next version" per se.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction commentary was posted today — engagement is limited to submission confirmations and bot-driven validation comments. Indirectly, the submission mix suggests two live pain points among Claude Code power users: (1) managing context/memory across long or multi-session agent work (Reinstate, Tokenade), and (2) coordinating multiple parallel agent sessions across worktrees (Operator, no_human). No complaints about Claude Code core functionality surfaced.

## 8. Backlog Watch

- **[#2418 "What's Allowed"](https://github.com/hesreallyhim/awesome-claude-code/issues/2418)** — opened 2026-08-03, closed today (2026-08-21) after 18 days open, an MCP server for auditing Claude Code's permission settings. Worth confirming whether it was closed via merge/acceptance into the list or rejected — no comments logged, which is atypical for a closure and may warrant a maintainer follow-up note for submitter clarity.
- **[#2600](https://github.com/hesreallyhim/awesome-claude-code/issues/2600)** is the only new submission today still lacking the `validation-passed` label — the newest issue, so not yet overdue, but worth tracking if it stalls past the ~1-day turnaround the other submissions received.
- The **crypto/finance-adjacent cluster** (#2591, #2595, #2597) has zero comments and no `validation-passed` label yet; given SolSniper's tenuous relevance to Claude Code, this trio may need explicit maintainer scoping guidance rather than silent approval or silent staleness.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**Date:** 2026-08-22 | **Repo:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview

Activity today is entirely PR-driven: 28 pull requests touched in the last 24h (21 open, 7 merged/closed), zero issues, and zero releases — consistent with this repo's nature as a curated, community-submitted awesome-list rather than a shipping codebase. No comment or reaction counts are populated on any item (all show 0/undefined), so there's no visible sign of maintainer-community back-and-forth on individual PRs; volume, not discussion depth, is the story today. The submission pattern is overwhelmingly "add one skill entry to a category" PRs, several explicitly tagged `[PR-in-review]` in the title, suggesting a semi-automated or checklist-driven intake process. Overall health reads as a healthy, high-throughput contribution funnel with a large open-PR backlog relative to daily merge rate.

## 2. Releases

None today.

## 3. Project Progress

Only two PRs show a `[CLOSED]` state in today's window, and both are tagged `[PR-in-review]` in their titles rather than showing an explicit "merged" marker in the data provided:

- **[#913 — Add dsh-deepread deep-reading skill](https://github.com/VoltAgent/awesome-agent-skills/pull/913)** (xiehuan123) — a five-mode deep-reading skill (quick/deep/knowledge-map/Feynman/full-book) with a DeepSeek Harness plugin. Closed 2026-08-21 after opening 2026-08-16.
- **[#915 — Add Zinc Universal Checkout skill](https://github.com/VoltAgent/awesome-agent-skills/pull/915)** (Illyism) — official Zinc programmatic-checkout skill for Amazon/Walmart/Target/50+ retailers. Closed 2026-08-21; notably **superseded same-day by #939**, a resubmission as a single Community Skills entry rather than a dedicated "Skills by Zinc" section — implying maintainer feedback (from @necatiozmen, referenced in #939's description) redirected the format.

Given the data doesn't distinguish "merged" from "closed without merge," it's worth confirming in-repo whether #913/#915 landed or were rejected pending reformatting (the #915→#939 pattern suggests the latter).

## 4. Community Hot Topics

The dataset provides no comment/reaction counts to rank by engagement (all entries show `Comments: undefined`, `👍: 0`). Ranking instead by submission volume and thematic clustering, the two most active fronts today are:

- **Skill submission surge from repeat contributors** — `sdshah09` opened two skills same-day ([#936 amazon-design-doc](https://github.com/VoltAgent/awesome-agent-skills/pull/936), [#935 brag-document-skill](https://github.com/VoltAgent/awesome-agent-skills/pull/935)); `Kaiji-Z` opened two ([#943](https://github.com/VoltAgent/awesome-agent-skills/pull/943), [#942 stop-manual-testing](https://github.com/VoltAgent/awesome-agent-skills/pull/942)); `Maksim-Burtsev` opened two across days ([#941 visual-teacher](https://github.com/VoltAgent/awesome-agent-skills/pull/941), [#925 simple-man](https://github.com/VoltAgent/awesome-agent-skills/pull/925)). Underlying need: individual builders are productizing personal workflow tools (fitness coaching, brag docs, design docs, note-taking) as portable "skills," and the list functions as their primary discovery channel.
- **Format/placement disputes for official vendor skills** — the Zinc case ([#915](https://github.com/VoltAgent/awesome-agent-skills/pull/915) → [#939](https://github.com/VoltAgent/awesome-agent-skills/pull/939)) and Beatra's request for a dedicated "Skills by Beatra" section ([#932](https://github.com/VoltAgent/awesome-agent-skills/pull/932)) both surface the same tension: companies want a branded section rather than a single bullet, and the maintainers appear to be pushing back toward single-entry listings under Specialized Domains. This is a recurring governance question worth a documented policy.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions in today's data — expected for a documentation/catalog repo with no releases or issues this cycle.

## 6. Feature Requests & Roadmap Signals

No formal feature-request issues today, but PR content signals emerging category needs:

- **Context Engineering** is now a recurring category with distinct submissions — [#928 context-doctor](https://github.com/VoltAgent/awesome-agent-skills/pull/928) (generates `.claudeignore`, flags context bloat) and [#926 skillreaper](https://github.com/VoltAgent/awesome-agent-skills/pull/926) (measures which loaded context/skills/MCP servers actually fire, prunes dead weight). Two independent submissions to the same niche category in one window suggests "context observability/pruning" is a maturing sub-genre worth its own guidance in CONTRIBUTING docs.
- **Meta-skills for building skills** — [#929 hedralab/eskill](https://github.com/VoltAgent/awesome-agent-skills/pull/929) is a meta-skill for authoring spec-compliant Agent Skills (interview → plan → eval loop → validator). If adoption grows, expect more "skill-building skill" submissions, which may warrant a dedicated meta/tooling category.
- **Vendor/official sections as a recurring ask** — Beatra ([#932](https://github.com/VoltAgent/awesome-agent-skills/pull/932)) and Citlyze ([#930](https://github.com/VoltAgent/awesome-agent-skills/pull/930)) both submit multi-skill bundles from commercial teams; expect the maintainers to eventually need a formal "Official Vendor Skills" policy/section given repeated requests.

## 7. User Feedback Summary

Real pain points surfaced through the skills being built (not through direct repo feedback), which double as informal signal about what AI-agent users struggle with:

- **Manual QA fatigue**: [#942 stop-manual-testing](https://github.com/VoltAgent/awesome-agent-skills/pull/942) states agent developers spend "~90% of dev time manually testing" — clicking through UI and judging by gut feel. Strong signal that agent-eval tooling is underserved.
- **Weak/vague goal-setting in agent workflows**: [#943 find-my-goal](https://github.com/VoltAgent/awesome-agent-skills/pull/943) targets users who paste underspecified prompts like "/goal optimize my project" and need the agent to draft a concrete goal.
- **Verbose/noisy agent responses**: [#925 simple-man](https://github.com/VoltAgent/awesome-agent-skills/pull/925) strips "praise, recaps, and filler" from agent answers — a direct complaint about current agent verbosity affecting trust in reported results (e.g., security findings).
- **Context bloat and token waste**: both [#928](https://github.com/VoltAgent/awesome-agent-skills/pull/928) and [#926](https://github.com/VoltAgent/awesome-agent-skills/pull/926) target users frustrated by unpredictable context costs and unused always-loaded content.

No explicit satisfaction/dissatisfaction commentary about the *repo itself* appears in today's data.

## 8. Backlog Watch

Several PRs have sat in `[PR-in-review]` status for multiple days without visible resolution as of 2026-08-22, worth maintainer attention given the growing open-PR count (21 open vs. only ~2 confirmed closed today):

- **[#933 — davertor/take-notes](https://github.com/VoltAgent/awesome-agent-skills/pull/933)** — open since 2026-08-20, still `[PR-in-review]`.
- **[#934 — muyen/meihua-yishu](https://github.com/VoltAgent/awesome-agent-skills/pull/934)** — open since 2026-08-20.
- **[#931 — lindblomstefan/skills-library](https://github.com/VoltAgent/awesome-agent-skills/pull/931)** — open since 2026-08-20.
- **[#930 — Citlyze skills bundle](https://github.com/VoltAgent/awesome-agent-skills/pull/930)** — open since 2026-08-20, a multi-skill vendor submission that may need extra maintainer review time given its scope.
- **[#929 — hedralab/eskill](https://github.com/VoltAgent/awesome-agent-skills/pull/929)** — oldest in this window, open since 2026-08-19.

With no comment activity visible on any of these, it's unclear whether they're silently queued for a batch review or stalled; given the 21-open/7-closed daily ratio, the review queue appears to be growing faster than it's draining.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
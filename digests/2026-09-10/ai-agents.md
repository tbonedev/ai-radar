# MCP Ecosystem Digest 2026-09-10

> Issues: 1 | PRs: 3 | Projects covered: 7 | Generated: 2026-09-10 12:01 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-09-10)

## 1. Today's Overview

Activity in the last 24 hours was light but not idle: 1 new issue, 3 PR updates (2 open, 1 closed), and zero new releases. The signal-to-noise is high, though — the open issue raises a real maintenance/UX gap (deprecated reference servers still pulling ~214k weekly installs), and the open PRs span infra reliability (a Docker/npm build fix) and repo tooling (multi-arch container images). One community server-addition PR was closed. Overall, this reads as routine steady-state maintenance activity for a mature registry project rather than a release cycle — no version was cut today.

## 2. Releases

None. No new releases in this window.

## 3. Project Progress

- **PR #4786 — closed** (not confirmed merged): [`Add uk-legislation-changes`](https://github.com/modelcontextprotocol/servers/pull/4786) — a community-submitted hosted MCP server for UK legislation amendment history (506 provisions across employment, equality, consumer, data protection, company and healthcare law) was closed carrying a `[readme: pending]` tag, suggesting it didn't clear documentation requirements before closure rather than being merged.
- No other PRs merged today. The two remaining open PRs (#4787, #4634) are still in review — see below.

## 4. Community Hot Topics

Engagement is uniformly low today (0 comments, 0 reactions across all items), so "hottest" is relative:

- [**Issue #4785**](https://github.com/modelcontextprotocol/servers/issues/4785) — "Four archived reference servers still pull ~214k installs/week, and their npm deprecation message points at npm support rather than a replacement." This is the most substantive item of the day: a data-backed report (live npm download stats for `server-postgres`, `server-github`, etc.) showing users are still heavily depending on archived/reference servers with a deprecation message that doesn't point them anywhere actionable. Underlying need: clearer migration guidance and/or continued minimal maintenance for high-traffic archived packages, since deprecation without redirection risks silent breakage for a large install base.
- [**PR #4634**](https://github.com/modelcontextprotocol/servers/pull/4634) — container images / multi-arch builds — reflects a recurring community need for standardized, official Docker distribution rather than ad hoc self-built images.

## 5. Bugs & Stability

- **PR #4787 — [fix(docker): work around npm 10.x's arborist crash in the TS builders](https://github.com/modelcontextprotocol/servers/pull/4787)** (Open, moderate severity — CI/build breakage, not runtime). The author bisected the issue further than the original report: the crash isn't specific to `@vitest/coverage-v8` — plain `vitest` alone triggers it, even in an empty `package.json`. Root cause is identified as an npm 10.x arborist bug in peer-dependency resolution, not something specific to this repo's dependency graph. A fix/workaround PR already exists and is open for review — this should be prioritized since it blocks TS builder Docker builds broadly.

No runtime crashes or regressions reported today; the only stability issue is build-tooling related and already has a fix in flight.

## 6. Feature Requests & Roadmap Signals

- **Multi-arch container images** (PR #4634, open since 2026-08-12, updated today): would add GHCR-published amd64/arm64 images for all `src/`-based servers with a Dockerfile, triggered on push to main with `latest` tags. Given it's been active for ~4 weeks and touches core release infrastructure, this looks like the strongest near-term roadmap candidate — likely to land once CI/build concerns (possibly overlapping with the npm 10.x issue in #4787) are resolved.
- **Deprecation/migration guidance for archived servers** (Issue #4785) is not yet a PR but is a likely precursor to one — either an updated npm deprecation message or a maintained-fork/replacement pointer.

## 7. User Feedback Summary

- Real, data-driven pain point: users depending on archived reference servers (`server-postgres`, `server-github`, etc.) have no clear replacement path — the deprecation notice is seen as unhelpful ("points at npm support rather than a replacement"), a dissatisfaction signal from operators tracking production dependency risk.
- Build tooling friction: the npm 10.x arborist crash affecting `vitest`/TS builders is a frustration point for contributors trying to build Docker images locally or in CI, though the contributor's own bisection work (rather than a raw complaint) suggests an engaged, technically sophisticated contributor base rather than broad user dissatisfaction.
- No explicit satisfaction signals today (no reactions/praise), consistent with the low-traffic nature of this window.

## 8. Backlog Watch

- **[PR #4634](https://github.com/modelcontextprotocol/servers/pull/4634)** — open since 2026-08-12 (~29 days), touches core release/CI infrastructure (multi-arch container publishing). Given its scope and age, this warrants maintainer attention soon, especially if it's stalled on unrelated build issues like #4787.
- **[Issue #4785](https://github.com/modelcontextprotocol/servers/issues/4785)** — new today but flags a live, quantified user-facing gap (214k weekly installs against unclear deprecation guidance); worth fast-tracking triage given the install-base size even though it's not yet "old."

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP & Claude Ecosystem Digest
**Date: 2026-09-10**

## 1. Ecosystem Overview

The MCP (Model Context Protocol) and Claude-adjacent open-source ecosystem is in a "cataloging and consolidation" phase rather than a core-protocol feature-race: activity is dominated by curated-list submissions and registry entries (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills) rather than changes to the underlying protocol implementation (MCP Servers, MCP Registry). Vendor and third-party adoption is visibly accelerating — dozens of new remote/hosted MCP server submissions landed today across finance, identity, payments, and agent-governance categories — while the reference implementations (`modelcontextprotocol/servers`, `modelcontextprotocol/registry`) show low-volume, high-substance maintenance activity typical of a maturing standard. A cross-cutting theme is **review-bandwidth strain**: five of seven projects show PR/issue queues growing faster than they're being cleared, an early sign that curation and registry projects are becoming victims of their own popularity. No project shipped a release in this 24-hour window, so no version-level comparison is possible today — all signal comes from issue/PR activity.

## 2. Activity Comparison

| Project | Issues (open/closed) | PRs (open/closed) | Releases | Health Score |
|---|---|---|---|---|
| MCP Servers | 1 (1/0) | 3 (2/1) | None | 7/10 — low volume, high signal, fix in flight |
| MCP Registry (official) | 3 (3/0) | 1 (1/0) | None | 6/10 — stable, real discoverability gap aging |
| Awesome MCP Servers | 0 | 101 (91/10) | None | 6/10 — huge throughput, review bottleneck risk |
| Docker MCP Registry | 0 | 50 (50/0) | None | 5/10 — 0% merge rate today, bot PRs stale 4–10 months |
| Claude Plugins (official) | 1 (1/0) | 25 (23/2) | None | 6/10 — automation healthy, 1 unresolved data-integrity bug |
| Awesome Claude Code | 13 (10/3) | 2 (0/2) | None | 6.5/10 — active curation, submission-template friction |
| Awesome Agent Skills | 0 | 3 (3/0) | None | 4/10 — early-stage, zero engagement, no triage yet |

*Health score weighs merge/resolution throughput, backlog age, and engagement quality — not raw volume.*

## 3. MCP Servers' Position

**Advantages vs. peers:** As the reference implementation, MCP Servers carries outsized real-world stakes despite its small activity footprint — today's Issue #4785 (214k weekly installs on archived reference servers) is a materially more consequential finding than anything in the higher-volume list repos, because it affects production dependency graphs rather than catalog completeness. Its open PR #4787 also shows unusually rigorous root-cause work (bisecting an npm 10.x arborist bug beyond the original report), suggesting a technically strong, if small, contributor base.

**Technical approach differences:** MCP Servers is the only project in this set doing genuine software engineering (Docker builds, CI tooling, multi-arch images) rather than list curation or bot-driven pin updates. This puts it closer in kind to Docker MCP Registry (which also ships infra tooling) than to the four "awesome list" repos, but MCP Servers' scope is narrower and more foundational (reference implementations vs. registry/catalog metadata).

**Community size comparison:** By raw PR-touch volume, MCP Servers (3) is the smallest of all seven projects today — dwarfed by Awesome MCP Servers (101) and Docker MCP Registry (50). This is expected and healthy: reference-implementation repos should see far less churn than open-submission catalogs. Engagement quality, however, favors MCP Servers — its single open issue carries more decision-relevant data (quantified install stats) than most of the higher-volume repos' entire daily batch.

## 4. Shared Technical Focus Areas

- **Multi-arch / container distribution**: MCP Servers (PR #4634, GHCR multi-arch images) and Docker MCP Registry (its entire existence) both reflect demand for standardized, officially-published container images rather than ad hoc builds.
- **Search/discoverability by semantic intent, not exact name**: MCP Registry's #1453 (search should match description, not just name, 11 comments/2 months) and Docker MCP Registry's steady influx of vendor submissions both point to the same underlying gap — users and agent-builders need to *find* the right server among a growing catalog, not just browse it.
- **Human-in-the-loop / agent governance and approval gating**: Awesome MCP Servers surfaces this independently across at least three submissions today (lauther-mcp, MCP Hangar, Bernstein governance layer referenced in Awesome Claude Code #1653) — a recurring, cross-repo signal that ungated autonomous agent action is a live production concern.
- **Agent-native payments/monetization (x402, pay-per-call)**: Appears in both Awesome MCP Servers (Torquantis, agentsapi-sec-filings) and Awesome Agent Skills (toll402, PR #1037) — independent evidence that metered/paid MCP tool access is an emerging, cross-community pattern rather than a one-off.
- **Local-first agent memory/context persistence**: Awesome MCP Servers (nautilus-compass, codemem) and Awesome Agent Skills (ctx-optimize, #1036) both show active, parallel development in deterministic/local context tooling — a crowded category ripe for consolidation.
- **Submission-pipeline UX friction**: Awesome Claude Code (template placeholder left unedited, causing auto-closes) and Awesome MCP Servers (#14118's account of a compliant PR auto-closed for staleness) both show curation-repo tooling causing avoidable contributor churn.

## 5. Differentiation Analysis

| Dimension | MCP Servers / Registry | Awesome MCP Servers | Docker MCP Registry | Claude Plugins | Awesome Claude Code / Agent Skills |
|---|---|---|---|---|---|
| **Feature focus** | Protocol correctness, reference server maintenance | Breadth of discoverable servers across all categories | Vendor-grade remote/hosted server distribution via Docker | Plugin catalog freshness (SHA-pinned submodules) | Curated tool/skill discovery for Claude Code specifically |
| **Target users** | MCP implementers, infra engineers | Developers browsing for any MCP server | Enterprises wanting vetted, containerized servers | Claude Code plugin consumers | Claude Code end-users seeking workflows/skills |
| **Technical architecture** | TypeScript builders, Docker, npm packaging | Markdown list + Glama registry validation bot | Docker registry + `mcp-registry-bot` pin automation | GitHub Actions SHA-bump automation + `claude plugin validate` CI | Issue-form submission pipeline with validation labels |
| **Governance model** | Traditional maintainer review | High-volume community PR review | Bot-assisted low-touch review | Bot-driven CI gate + manual merge | Bot-assisted triage (`validation-passed/pending`) |

The clearest architectural split is **build-vs-curate**: MCP Servers, MCP Registry, and Docker MCP Registry ship or gate executable/deployable artifacts (Docker images, npm packages, registry APIs), while Awesome MCP Servers, Claude Plugins, Awesome Claude Code, and Awesome Agent Skills are metadata/discovery layers whose "product" is an accurate, current list. This explains why the former group's problems are correctness bugs (npm arborist crash, sync gaps) while the latter group's problems are process bugs (stale PRs, template friction, review-bandwidth bottlenecks).

## 6. Community Momentum & Maturity

**Rapidly iterating (high submission volume, catalog-growth phase):**
- Awesome MCP Servers (101 PR-touches/day) and Docker MCP Registry (50 PR-touches/day) are the clear leaders — both are absorbing a wave of vendor and community submissions faster than they can review them. This is "growth-stage" momentum, not stability.
- Claude Plugins (official) shows high automated throughput (25 PRs) but low organic signal (only 1 human-authored feature PR), suggesting the catalog itself is maturing while its automation matures alongside it.

**Stabilizing (steady, low-volume, maintenance-mode):**
- MCP Servers and MCP Registry both show classic post-growth maturity signals: low daily volume, but the issues that do appear are substantive, data-backed, and tied to real production usage (214k weekly installs; an 11-comment, 2-month-old search-quality thread).

**Early-stage / low-momentum:**
- Awesome Agent Skills is notably quiet — 3 PRs, zero comments, zero triage response even after a full day. Combined with a young age profile (newest of the seven), this reads as pre-critical-mass rather than unhealthy, but it's the one project where a sudden drop in submissions would be hard to distinguish from normal noise.

**Cross-cutting backlog risk:** Every "awesome list"-style project (Awesome MCP Servers, Docker MCP Registry, Claude Plugins, Awesome Claude Code) shows PRs aging past 3-4 weeks without review, and Docker MCP Registry has bot-generated PRs open for 7-10 months. This is the single most consistent maturity signal across the ecosystem: **submission volume is outpacing maintainer review capacity almost everywhere**.

## 7. Trend Signals

1. **MCP is expanding beyond dev tooling into regulated/high-stakes domains** (finance, identity/auth, legal data, crypto payments) — visible in Docker MCP Registry (Scalekit, registry-mcp), Awesome MCP Servers (Guava Wallet Intelligence, Torquantis), and MCP Servers itself (UK legislation server, closed for doc issues). Developers building on MCP should expect increasing scrutiny/compliance requirements as this category grows.
2. **Agent governance and approval-gating is becoming table stakes**, not a niche feature — independently surfacing in Awesome MCP Servers, Awesome Claude Code (Bernstein), and implicitly in Claude Plugins' automation-heavy CI gating. Teams building autonomous agents should plan for human-in-the-loop control planes as a first-class requirement, not an afterthought.
3. **Deprecation without migration guidance is an active risk pattern** (MCP Servers #4785): as reference implementations get superseded, maintainers are leaving large install bases (214k/week) without clear redirection. Developers depending on "reference" or "example" servers should audit for deprecation notices proactively rather than assuming continued support.
4. **Monetized, pay-per-call MCP tooling (x402/Base) is emerging** in parallel across unrelated repos (Awesome MCP Servers, Awesome Agent Skills) — worth watching as a potential standardization point for agent-to-agent commerce.
5. **Review/curation bandwidth is the ecosystem's binding constraint**, not code quality or technical merit. For decision-makers evaluating which catalogs to trust or contribute to, PR-age and merge-throughput (not raw submission count) is the more reliable maturity signal — by that measure, MCP Servers/Registry are the most disciplined, while Docker MCP Registry's multi-month-old bot PRs are the clearest warning sign.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) — Daily Digest
**modelcontextprotocol/registry** | 2026-09-10

## 1. Today's Overview

Activity over the last 24 hours was light but steady: 3 issues touched (all still open, none closed) and 1 open PR (a routine dependency bump), with zero new releases. There's no sign of active feature shipping today — the signal is mostly maintenance-and-triage traffic: a long-running search-quality feature request, a registry data-cleanup request, and a discoverability bug report. Overall project health looks stable rather than stagnant; the registry continues to accumulate real-world operational issues from server publishers, which is a healthy sign of adoption even as maintainer response volume stays modest.

## 2. Releases

None today.

## 3. Project Progress

No PRs merged or closed in the last 24 hours. The only PR activity is [#1634](https://github.com/modelcontextprotocol/registry/pull/1634) (`build(deps): bump the go-dependencies group with 2 updates`, dependabot), which bumps `github.com/google/go-containerregistry` (0.22.0 → 0.22.1) and `golang.org/x/mod`. It's routine dependency maintenance, not a feature advance, and remains open/unreviewed as of today.

## 4. Community Hot Topics

- **[#1453 — feat: search should also match against server description field](https://github.com/modelcontextprotocol/registry/issues/1453)** (11 comments, 👍1, open since 2026-07-16, updated today) — by far the most active thread. The `?search=` parameter on `/v0/servers` currently only ILIKE-matches `server_name`, not `description`, despite this being explicitly requested back in #135. The sustained comment volume over ~2 months suggests real friction for both AI agents and human users trying to discover servers by capability rather than exact name — this looks like a genuine, unresolved discoverability gap in the core API.

No other issue or PR has meaningful engagement today; the remaining two issues have 0 comments and 0 reactions each.

## 5. Bugs & Stability

Ranked by apparent severity/impact:

1. **[#1633 — Published server not appearing in GitHub's MCP discovery search](https://github.com/modelcontextprotocol/registry/issues/1633)** (opened 2026-09-09) — `io.github.meemoprasad/meeba-brain` publishes successfully and is returned by the registry API (v1.0.1), but doesn't surface in GitHub's downstream MCP discovery search for its own name. This points to a possible sync/indexing gap between the registry API and GitHub's discovery layer — a correctness issue that undermines publisher trust in the registry pipeline. No fix PR yet; likely needs GitHub-side (not just registry-side) investigation, so may sit in a cross-team gray zone.
2. **[#1635 — Remove stale server entry after repo transfer](https://github.com/modelcontextprotocol/registry/issues/1635)** (opened 2026-09-10) — not a crash/regression but a data-hygiene issue: `io.github.jarvis-intelligence/jarvis` needs removal since the backing repo moved to `phuongddx/jarvis`. Low severity, straightforward moderation/admin action, no fix PR needed (just a data operation by maintainers).

No crashes or regressions reported; both items are integrity/consistency issues rather than functional breakage.

## 6. Feature Requests & Roadmap Signals

- **Description-field search** (#1453) is the clearest and most-requested feature gap, with a prior related issue (#135) already partially addressed (name-only search). Given the 11-comment thread and multi-month persistence, this is the strongest candidate for prioritization in an upcoming release — likely a backend query change (extending the ILIKE match to `description`) plus possibly relevance ranking between name/description hits.
- No other net-new feature requests surfaced in the last 24h; the other two issues are cleanup/bug reports rather than feature asks.

## 7. User Feedback Summary

- **Pain point — discoverability by intent, not just name** (#1453): users and agent builders want to search servers semantically/by description, not just exact-name substring match. This is a recurring, validated complaint (referenced back to #135).
- **Pain point — publish-to-discovery latency/sync gap** (#1633): a publisher successfully shipped a server through the official pipeline but can't find it via GitHub's own discovery search — a trust/confidence issue for new publishers evaluating whether the registry "worked."
- **Housekeeping request** (#1635): a publisher proactively flagging their own stale/duplicate entry after a repo transfer — a minor but positive signal of publishers actively maintaining registry hygiene.

No explicit satisfaction signals (e.g., positive reactions on merged features) appeared today; feedback skews toward gaps and friction, though the tone across all three issues is constructive/collaborative rather than frustrated.

## 8. Backlog Watch

- **[#1453](https://github.com/modelcontextprotocol/registry/issues/1453)** — open ~2 months (since 2026-07-16) with 11 comments and no resolution; this is the top candidate for maintainer prioritization given sustained community engagement and a clear, previously-acknowledged scope (#135).
- **[#1634](https://github.com/modelcontextprotocol/registry/pull/1634)** — routine dependabot PR awaiting review/merge; low risk, should be quick to clear but is sitting unmerged.
- **[#1633](https://github.com/modelcontextprotocol/registry/issues/1633)** and **[#1635](https://github.com/modelcontextprotocol/registry/issues/1635)** are fresh (opened 2026-09-09/10) and not yet backlog-aged, but #1633 in particular may require cross-repo coordination with GitHub's discovery team and is worth flagging early before it stalls.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-09-10)

## 1. Today's Overview

Awesome MCP Servers remains an extremely high-throughput curation repo rather than a traditional software project: today's window shows **zero issues**, **zero releases**, and **101 PR events** (91 open, 10 closed/merged), essentially all of them submissions adding new MCP servers to the README. Activity is dominated by first-time contributors proposing entries across a wide spread of categories — Security, Finance, Databases, Social Media, Knowledge & Memory, Travel, Accessibility, and Cloud Platforms. The volume (100+ PR touches in 24h) confirms this list is a top discovery surface for the MCP ecosystem, but it also means maintainer review bandwidth, not code quality, is the project's real bottleneck. No comment/reaction telemetry was available for any PR today, so engagement signal is thin; category diversity and submission patterns are used as the best available proxy for community interest.

## 2. Releases

None. No new releases in this window.

## 3. Project Progress

10 PRs closed today, all list-entry submissions rather than code changes:
- [#14125 Guava Wallet Intelligence](https://github.com/punkpeye/awesome-mcp-servers/pull/14125) — crypto wallet/token risk intelligence server (31 chains)
- [#14066 Torquantis](https://github.com/punkpeye/awesome-mcp-servers/pull/14066) — AI-agent-to-agent work exchange settled in USDC on Base
- [#13982 Wayfinder](https://github.com/punkpeye/awesome-mcp-servers/pull/13982) — read-only MCP over local AI coding history
- [#12577 Electrik Slate](https://github.com/punkpeye/awesome-mcp-servers/pull/12577) — Laravel Blade UI kit docs server

Status (merged vs. rejected) isn't distinguishable from the data provided, but the pattern of same-day open→close for well-formed submissions (correct emoji/name/Glama labels) suggests fast-track acceptance for compliant entries, while #14118 (see Backlog Watch) shows the opposite can also happen — closure for staleness rather than content.

## 4. Community Hot Topics

Comment/reaction counts were not populated for any PR today (all show `Comments: undefined`, `👍: 0`), so there's no reliable engagement ranking available. The most notable *substantive* signal instead comes from submissions with disclosed conflicts of interest or ecosystem-relevant framing, which typically draw maintainer scrutiny and discussion in this repo:
- [#14120 Infino MCP servers](https://github.com/punkpeye/awesome-mcp-servers/pull/14120) — submitter explicitly discloses being an Infino team member adding two first-party servers
- [#12482 no_human MCP](https://github.com/punkpeye/awesome-mcp-servers/pull/12482) — author-disclosed self-submission
- [#14066 Torquantis](https://github.com/punkpeye/awesome-mcp-servers/pull/14066) — a financial (crypto payment/exchange) MCP server, a category that tends to attract extra scrutiny in curated lists

The underlying need across these: MCP is maturing beyond dev-tool integrations into finance, identity/approval workflows, and agent-to-agent commerce, and maintainers are being asked to arbitrate legitimacy and disclosure norms as much as technical fit.

## 5. Bugs & Stability

No runtime bugs, crashes, or regressions were reported — expected, since this repo is a curated Markdown list, not executable software. The closest analogue to "stability" issues are automated compliance flags applied by the repo's bot/label system:
- `missing-glama` — entries lacking a Glama registry profile (e.g. [#14124](https://github.com/punkpeye/awesome-mcp-servers/pull/14124), [#14122](https://github.com/punkpeye/awesome-mcp-servers/pull/14122), [#14121](https://github.com/punkpeye/awesome-mcp-servers/pull/14121), [#14120](https://github.com/punkpeye/awesome-mcp-servers/pull/14120), [#14119](https://github.com/punkpeye/awesome-mcp-servers/pull/14119), [#14116](https://github.com/punkpeye/awesome-mcp-servers/pull/14116), [#12577](https://github.com/punkpeye/awesome-mcp-servers/pull/12577))
- `has-glama` / `valid-name` — passing entries

No fix PRs are needed since these are metadata gates, not defects, but the high proportion of `missing-glama` submissions suggests the Glama registration step is a recurring friction point for new contributors.

## 6. Feature Requests & Roadmap Signals

No formal feature-request issues exist (0 issues today), but the PR mix signals where the ecosystem is heading and what next additions are likely:
- **Agent-native payments/commerce**: Torquantis (agent work exchange), agentsapi-sec-filings (x402 pay-per-call SEC data) — pay-per-call MCP monetization is an emerging pattern likely to see more submissions.
- **Approval/human-in-the-loop gating**: lauther-mcp ([#14122](https://github.com/punkpeye/awesome-mcp-servers/pull/14122)) and MCP Hangar ([#14114](https://github.com/punkpeye/awesome-mcp-servers/pull/14114)) both address "pause for human approval" / policy-gateway patterns — suggests growing demand for agent safety/control-plane servers.
- **Local-first agent memory**: nautilus-compass ([#14065](https://github.com/punkpeye/awesome-mcp-servers/pull/14065)) and kunickiaj/codemem ([#14108](https://github.com/punkpeye/awesome-mcp-servers/pull/14108)) both target persistent, local-first coding/agent memory — a crowded and actively growing category worth watching for consolidation.

## 7. User Feedback Summary

Direct user satisfaction data isn't available (no issue comments), but submitter-authored PR descriptions surface a few recurring pain points MCP server authors are building against:
- Friction with prior PRs going stale: [#14118](https://github.com/punkpeye/awesome-mcp-servers/pull/14118) explicitly notes its predecessor ([#10932](https://github.com/punkpeye/awesome-mcp-servers/pull/10932)) was closed for inactivity *despite meeting all requirements*, forcing a fresh resubmission after the branch fell ~1700 commits behind.
- Desire for safer autonomous agent operation (approval gating, audit logs, policy enforcement) recurs across at least three independent submissions today, indicating real deployment pain around ungated agent actions.
- Fragmentation across near-duplicate categories (multiple wallet/security, multiple memory servers) suggests users are still shopping between many young, similarly-scoped MCP servers rather than converging on defaults.

## 8. Backlog Watch

Two open PRs stand out for age relative to today's mostly same-day submissions, and are worth maintainer attention:
- [#12570 RepoContext](https://github.com/punkpeye/awesome-mcp-servers/pull/12570) — created 2026-08-21 (20 days open), still open
- [#12482 no_human MCP server](https://github.com/punkpeye/awesome-mcp-servers/pull/12482) — created 2026-08-19 (22 days open), still open

Given [#14118](https://github.com/punkpeye/awesome-mcp-servers/pull/14118)'s account of a prior compliant PR being closed purely for going stale, both of these aging, unmerged PRs risk the same fate unless reviewed soon — a process gap worth flagging to maintainers given the review queue is currently running at ~100 PR-touches/day.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest (2026-09-10)

## 1. Today's Overview

Activity today is high in volume but shallow in depth: 50 PRs were updated in the last 24 hours, yet zero were merged or closed, zero new issues appeared, and no releases shipped. The bulk of the churn splits into two distinct streams — a wave of new remote MCP server submissions (Prompeteer, Aidelly, Scalekit, registry-mcp) and a large batch of automated `mcp-registry-bot[bot]` "update pin" commits refreshing commit-hash pins for dozens of existing servers (youtube_transcript, testkube, teamwork, hostinger-mcp-server, stripe, sonarqube, smartbear, render, postman, omi, neo4j-memory/data-modeling/cypher, awslabs-nova-canvas, brave, schemacrawler-ai, and more). This pattern is consistent with the registry's steady-state: a continuously growing catalog fed by community submissions plus routine dependency-pinning maintenance, rather than a day of feature development or incident response. Overall health signal is neutral-to-healthy — no reported bugs, no stalled reviews visibly escalating, but the 0-merge rate for 50 open PRs suggests a review/triage bottleneck worth watching.

## 2. Releases

None today — no new releases were published.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours, so no features or fixes landed. The 50 updated PRs are all still open:
- 4 new-server submission PRs (Prompeteer, Aidelly, Scalekit, registry-mcp) awaiting initial review.
- ~46 automated pin-update PRs from `mcp-registry-bot[bot]`, which are typically low-risk, mechanical commit-hash bumps for already-registered servers rather than substantive changes.

Net effect: the registry's PR queue grew rather than drained today.

## 4. Community Hot Topics

No comment or reaction counts were available in today's data extract (all PRs show `Comments: undefined`, 👍: 0), so no ranking by engagement can be produced. Based on submission content alone, the most notable new-server entries are:
- [#5046 — Add Prompeteer remote MCP server](https://github.com/docker/mcp-registry/pull/5046) — hosted prompt-generation/agent tooling.
- [#5045 — Add Aidelly remote MCP server](https://github.com/docker/mcp-registry/pull/5045) — OAuth-backed streamable HTTP remote server.
- [#5044 — Add Scalekit remote MCP server](https://github.com/docker/mcp-registry/pull/5044) — auth/identity infrastructure MCP endpoint.
- [#5043 — Add registry-mcp (Finance)](https://github.com/docker/mcp-registry/pull/5043) — company-registry lookups across Norway/UK/Sweden national databases.

The underlying need across these submissions is the same: third-party SaaS and infra vendors want first-party discoverability in Docker's MCP Catalog, signaling continued vendor-side adoption of MCP as a distribution channel.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours — zero issues were opened or updated in this window.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. The signal instead comes from submission patterns: continued growth in **remote (hosted) MCP servers** with OAuth/streamable-HTTP transports (Aidelly, Scalekit, Prompeteer) suggests the registry's next-version focus is likely to keep expanding remote-server support and auth-flow standardization, building on categories like Finance (registry-mcp) and identity/auth tooling.

## 7. User Feedback Summary

No direct user feedback (issue comments, satisfaction signals) is present in today's data — the activity is dominated by submission PRs and bot-driven maintenance rather than usage reports. This makes it hard to gauge real-world pain points from today's window alone; feedback trends would need to be pulled from issue threads over a longer horizon.

## 8. Backlog Watch

Several PRs have sat open for extended periods and are still receiving only automated pin-refresh activity rather than maintainer review, suggesting a backlog worth flagging:
- [#788 — chore: update pin for omi](https://github.com/docker/mcp-registry/pull/788) — open since 2025-11-26 (~9.5 months).
- [#621 — chore: update pin for awslabs-nova-canvas](https://github.com/docker/mcp-registry/pull/621) — open since 2025-11-07 (~10 months).
- [#1083 — chore: update pin for stripe](https://github.com/docker/mcp-registry/pull/1083) — open since 2026-02-07 (~7 months).
- [#3217 — chore: update pin for hostinger-mcp-server](https://github.com/docker/mcp-registry/pull/3217) — open since 2026-05-05 (~4 months).

These long-lived bot PRs are likely auto-superseded or low-priority by design, but their persistence alongside 46 similar open PRs today suggests the pin-update automation may be outpacing merge capacity — worth a maintainer sweep to either fast-track or auto-close stale pin bumps.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) — Daily Digest
**2026-09-10**

## 1. Today's Overview

Claude Plugins (official) saw moderate but heavily automated activity in the last 24 hours: 25 PRs updated (23 open, 2 merged/closed) versus a single open issue. The overwhelming majority of PR traffic — roughly 20 of the 25 — is routine `github-actions[bot]` SHA-bump automation that keeps third-party plugin submodule references current after upstream `claude plugin validate` checks pass. No new releases shipped. The one substantive human-authored issue (#5224, an iMessage channel ordering bug) and one substantive human-authored PR (#5640, a new HubSpot plugin) represent the only organic community signal today. Overall project health looks stable and maintenance-mode: the bot pipeline is functioning as designed, and the single open bug report is being triaged, but there's no significant new feature or breaking-change activity today.

## 2. Releases

None. No new releases in this window.

## 3. Project Progress

- 2 PRs were merged/closed today, though the digest data doesn't specify which of the 25 or their outcome details beyond count. Given the pattern, these are most likely completed SHA-bump automation PRs (the bot workflow typically auto-merges validated bumps quickly).
- The bulk of "progress" today is infrastructure upkeep: automated dependency/plugin-SHA synchronization across ~20 third-party plugins (`youdotcom-agent-skills`, `teamcity-cli`, `stackhawk-api`, `stackhawk-hawkscan`, `spanner`, `sanity`, `resend`, `remember`, `quarkus-agent`, `pinecone`, `mlflow`, `microsoft-docs`, `langfuse-observability`, `growthbook`, `fiftyone`, `data-agent-kit-starter-pack`, `aws-startup-advisor`, `amazon-location-service`, `agentforce-adlc`), each pre-validated via `claude plugin validate` CI runs before opening.
- No feature work landed today outside the bump automation.

## 4. Community Hot Topics

- **[Issue #5224 — iMessage channel replays old messages as new](https://github.com/anthropics/claude-plugins-official/issues/5224)** — the most substantive discussion item today (1 comment), open since 2026-08-12 and still active. Underlying need: reliable message-ordering guarantees for integrations that ingest from `chat.db`; the current ROWID-based watermark assumes insertion order matches chronological order, which breaks during backfills. This points to a deeper need for a more robust cursor/dedup strategy in the iMessage channel connector.
- **[PR #5640 — Add hubspot-sales plugin](https://github.com/anthropics/claude-plugins-official/pull/5640)** — the one non-bot PR, open since 2026-08-25, still awaiting merge as of today. This reflects ongoing community demand for CRM/sales-tooling plugins (HubSpot MCP integration), suggesting the plugin ecosystem's growth edge is in business-process integrations, not just dev tooling.
- The remaining "hot" items by volume are the automated bump PRs (#5985–#6003), which aren't community discussion per se but do represent the most frequent recurring workflow in the repo.

## 5. Bugs & Stability

- **[#5224 — iMessage watermark ordering bug](https://github.com/anthropics/claude-plugins-official/issues/5224)** (Moderate severity, open, no linked fix PR yet). Impact: messages get replayed/duplicated as "new" during `chat.db` backfills — reported 7 occurrences over 5 weeks in a continuously-running deployment, with the largest burst replaying ~90 messages at once. This is a data-integrity/correctness bug for any downstream consumer treating "new message" events as unique triggers (e.g., automations firing on message receipt). No PR currently addresses the root cause (ROWID-as-chronology assumption); this remains unresolved and is the top stability concern today.
- No other bugs, crashes, or regressions reported in the last 24h.

## 6. Feature Requests & Roadmap Signals

- **HubSpot Sales plugin ([#5640](https://github.com/anthropics/claude-plugins-official/pull/5640))** — a concrete, already-implemented feature request (sourced from `HubSpot/hubspot-mcp-plugins`) awaiting review/merge. Reasonable candidate for inclusion in the next plugin-catalog update given it's submission-ready and no blocking review comments are visible in this data.
- No other explicit feature requests appear in today's data. The steady cadence of SHA-bump PRs suggests the roadmap is currently focused on maintaining validation/freshness of the existing 20+ plugin catalog rather than expanding scope.
- Indirectly, #5224 signals a likely near-term roadmap item: a rework of the iMessage channel's ordering/dedup logic (e.g., timestamp-based watermarking instead of ROWID-based).

## 7. User Feedback Summary

- **Pain point**: The iMessage channel bug (#5224) is a real-world reliability complaint from a "continuously-running deployment" — the reporter (XTCNigel) has clearly instrumented and tracked recurrence (7 times/5 weeks) rather than filing a one-off report, indicating this is impacting production usage and warrants prioritized attention.
- **Use case signal**: The HubSpot plugin PR (#5640) reflects demand for sales/CRM workflow automation via Claude plugins, extending the ecosystem beyond dev-focused integrations (which dominate the bump list: TeamCity, StackHawk, Spanner, Sanity, etc.).
- No explicit satisfaction/dissatisfaction commentary or reactions (👍 counts are all 0) appear in today's window — engagement is low in volume but the one bug report is detailed and credible.

## 8. Backlog Watch

- **[Issue #5224](https://github.com/anthropics/claude-plugins-official/issues/5224)** — open ~29 days (since 2026-08-12) with only 1 comment; a data-integrity bug with reproducible frequency but no assigned fix yet. Recommend maintainer triage given the concrete repro pattern provided.
- **[PR #5640 — hubspot-sales plugin](https://github.com/anthropics/claude-plugins-official/pull/5640)** — open ~16 days (since 2026-08-25) with no recorded review activity in this data. Worth a maintainer pass since it's a complete, self-contained plugin addition sourced from an external maintained repo.
- The long tail of ~20 open bot-generated SHA-bump PRs (#5985–#6003) is expected backlog churn from automation and likely auto-resolves via the existing validation pipeline rather than needing manual attention.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-09-10)

## 1. Today's Overview

Activity in the last 24 hours is dominated by community resource submissions rather than code changes: 13 issues touched (10 open, 3 closed) and 2 PRs closed, with zero new releases. This is consistent with the repo's nature as a curated "awesome list" — most "issues" are structured submission forms processed through a `validation-passed` / `validation-pending` / `auto-closed` triage pipeline rather than bug reports. Submission volume is high (10+ new resource proposals in a single day), spanning categories like Agent Orchestration, Memory & Context Persistence, and Observability. The maintainer (hesreallyhim) merged two batch-processing PRs today, suggesting active curation keeping pace with inbound submissions. Overall project health looks strong on community engagement but shows friction in the submission-validation flow (multiple auto-closes for incomplete templates).

## 2. Releases

No new releases in this period.

## 3. Project Progress

Two PRs by maintainer **hesreallyhim** were closed today, both administrative/curation work rather than feature development:

- **[#2804 "Backfilling"](https://github.com/hesreallyhim/awesome-claude-code/pull/2804)** (closed 2026-09-10) — likely backfilling previously-approved resources into the README/index.
- **[#2797 "Tooling batch etc"](https://github.com/hesreallyhim/awesome-claude-code/pull/2797)** (closed 2026-09-09) — batch processing of tooling-category submissions.

No summaries were available for either PR body, so exact diffs can't be characterized from this data — but the naming and timing strongly suggest these are the mechanism by which validated resource-submission issues get folded into the curated list.

## 4. Community Hot Topics

- **[#1653 — Bernstein (open-source governance layer for AI agents)](https://github.com/hesreallyhim/awesome-claude-code/issues/1653)** — 3 comments, the most-discussed item in the window, and notably still open ~4.5 months after creation (2026-04-21). Sustained discussion this long after filing suggests either back-and-forth on categorization/licensing or repeated maintainer requests for clarification. Underlying need: contributors want visibility for agent-governance/orchestration tooling, a fast-growing category in this list.
- Most other new submissions (#2801 AgentMeasure, #2803 engrim, #2800 Humanize-Pro, #2799 Matou, #2798 Drevon, #2796 Jarvis, #2795 Koh-Vibe) each carry exactly 1 comment — consistent with an automated triage bot response rather than organic discussion, so no other item shows genuine community debate today.

## 5. Bugs & Stability

No functional bugs, crashes, or regressions were reported today — this repo is a curated list, not a runtime codebase, so "stability" issues manifest as submission-pipeline friction instead:

- **Template non-compliance causing auto-closes (moderate/process severity):** [#2806 Universal Agent Plugins](https://github.com/hesreallyhim/awesome-claude-code/issues/2806), [#2805 (whatileaked)](https://github.com/hesreallyhim/awesome-claude-code/issues/2805), and [#2794 (Jarvis, first attempt)](https://github.com/hesreallyhim/awesome-claude-code/issues/2794) were all auto-closed as `validation-pending`. Notably, #2805 was submitted with the literal placeholder title `<name of your resource>` left unedited — same issue visible in still-open #2795. This points to a recurring UX gap in the submission template/instructions rather than a code defect. No fix PR exists for the template itself in today's data.
- **Duplicate resubmission:** Jarvis was submitted twice within a day (#2794 auto-closed → #2796 now open and validation-passed), suggesting the author self-corrected after the first rejection — a workable but manual recovery path.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests against the repo's own tooling appeared today; all "requests" are third-party resource submissions asking to be added. Categories trending in this batch, which may hint at where the broader Claude Code ecosystem (and thus future list sections) is heading:

- **Agent Orchestration** — 4 submissions today (Bernstein, Matou, Drevon, Koh-Vibe), the single largest cluster, suggesting this category may need sub-categorization if volume continues.
- **Memory & Context Persistence** — 2 submissions (engrim, ContextStream), pointing to growing interest in cross-session/cross-tool state.
- **Observability & Monitoring** (AgentMeasure) and **Security** (whatileaked) — niche but recurring categories worth watching for a possible dedicated roadmap push.

If a next "version" of the list is cut, expect the two closed PRs' backlog of validated issues (#2801, #2803, #2800, #2799, #2798, #2796, #2795, #2793, #2802) to be folded into the README in a subsequent batch PR similar to #2804/#2797.

## 7. User Feedback Summary

- Positive signal: submitters are actively building for the Claude Code ecosystem across a wide surface (voice I/O, IDE sidebars, desktop session managers, credential scanning, status lines), indicating a healthy and diversifying plugin/tool ecosystem.
- Pain point: the submission template is a recurring stumbling block — at least 3 of today's 13 issues (#2806, #2805, #2795) show evidence of authors not properly filling in the "Display Name" field, causing auto-closures and requiring resubmission (extra friction for contributors).
- No direct dissatisfaction with the core list/tooling itself was expressed today.

## 8. Backlog Watch

- **[#1653 — Bernstein](https://github.com/hesreallyhim/awesome-claude-code/issues/1653)** — open since 2026-04-21 (~4.5 months), still active with recent comments. This is the clearest case needing maintainer resolution — either merge/reject or explain the holdup.
- **[#2802 — ContextStream](https://github.com/hesreallyhim/awesome-claude-code/issues/2802)** and **[#2793 — statuslin.es](https://github.com/hesreallyhim/awesome-claude-code/issues/2793)** — both open with 0 comments and no `validation-passed`/`validation-pending` label yet, meaning they haven't entered the triage pipeline at all. Worth flagging so they don't silently stall.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**Date:** 2026-09-10 | **Repository:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview

Activity was light but steady: no new releases and zero issue activity, but 3 open pull requests were created or updated in the last 24 hours, all proposing additions of new community skills. This is consistent with the project's nature as a curated "awesome list" — most contributions are incremental PRs adding a single entry to a category, rather than code changes. No PRs were merged or closed today, so the review queue is growing rather than shrinking. Overall health signal: healthy submission volume, but merge throughput needs watching since none of today's (or apparently recent) PRs have been actioned yet.

## 2. Releases

None. No new releases in this period.

## 3. Project Progress

No PRs were merged or closed today — all 3 open PRs remain pending review:

- **[#1035](https://github.com/VoltAgent/awesome-agent-skills/pull/1035)** — Add `cyperx84/claude-skills-mental-models` to *Community Skills → Productivity and Collaboration*
- **[#1036](https://github.com/VoltAgent/awesome-agent-skills/pull/1036)** — Add `muthuishere/ctx-optimize` to *Community Skills → Context Engineering*
- **[#1037](https://github.com/VoltAgent/awesome-agent-skills/pull/1037)** — Add `toll402` skill to *Community Skills → Specialized Domains*

No merges means no forward progress landed in the list today, though the submission pipeline is active.

## 4. Community Hot Topics

No PR or issue has attracted comments or reactions yet (all show 👍: 0, comments: undefined) — engagement is essentially flat today. Ranked by recency/interest:

- **[#1037 — Add toll402 skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1037)**: Notable for being tied to a monetization protocol (x402 on Base, pay-per-call tools with a free trial and no wallet requirement). Signals growing interest in skills that bridge agents to paid/metered APIs — an emerging category worth tracking.
- **[#1035 — Mental models skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1035)**: Reflects demand for "knowledge injection" skills — dropping curated reference material (98 mental models) into an agent's context as reusable files.
- **[#1036 — ctx-optimize](https://github.com/VoltAgent/awesome-agent-skills/pull/1036)**: A static Go binary for deterministic local code-knowledge-graph queries (who-calls-this, change impact) — points to demand for grep-free, deterministic code intelligence tools that agents can call instead of relying on fuzzy search.

No underlying "hot topic" thread exists yet since this is a submissions repo, not a support forum — the closest signal to community interest is category clustering of submissions (Context Engineering, Specialized Domains, Productivity).

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today (0 issues total). As a curated list/documentation repository, there is no runtime component to destabilize; stability risk is limited to broken links or malformed entries, none of which were flagged in this period.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues today, but the PR submissions themselves double as roadmap signals for list expansion:

- **Monetized/paid-tool skills** (toll402, #1037) — likely to be merged given it fills a distinct "Specialized Domains" niche not well covered yet.
- **Context/knowledge-engineering tooling** (ctx-optimize, #1036) — fits a fast-growing "Context Engineering" category; deterministic, non-LLM tooling for codebase reasoning is a trend worth watching for future submissions.
- **Reference/knowledge-injection skills** (mental models, #1035) — likely straightforward to merge as it follows the established "drop-in files" skill pattern.

Given all three are single-entry additions with no controversy, the most probable near-term "release" activity is a batch merge of some or all of these PRs rather than any breaking or structural change to the list.

## 7. User Feedback Summary

No direct user feedback (issues, discussions) was posted today. Indirectly, contributor behavior suggests:
- Positive engagement: three independent contributors submitted new skills within a 24-48h window, indicating sustained interest in growing the list.
- Implicit pain point: contributors are self-documenting their own tools' "what it is" rationale in PR descriptions in detail (see #1035, #1037) — suggesting the contribution template may not yet fully capture "why this skill is useful" in the list format itself, or that maintainers want more context before merging.

## 8. Backlog Watch

All three open PRs (#1035, #1036, #1037) are unmerged and unreviewed as of today, with #1036 already a day old (created 2026-09-09) and receiving no comments or maintainer response. Since this repo's primary maintenance activity *is* PR review/merge, a growing queue of un-triaged, zero-comment submission PRs is the key backlog risk to monitor — if this pattern continues over subsequent days, it's worth flagging maintainer bandwidth as a project health concern.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
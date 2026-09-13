# MCP Ecosystem Digest 2026-09-13

> Issues: 2 | PRs: 6 | Projects covered: 7 | Generated: 2026-09-13 12:30 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Project Digest: 2026-09-13

## 1. Today's Overview

Activity today is light but steady, consistent with a mature, incrementally-maintained project rather than one in active feature development. No new releases landed, and no PRs merged or closed in the last 24 hours — all 6 tracked PRs remain open. Engagement is concentrated on maintenance-oriented work: two documentation PRs, two bug-fix PRs (one addressing a long-standing `git add .` safety issue, another a subscription-cleanup leak), a proxy-alias fix, and one PR to a README that has since closed submissions to new server listings. The two open issues are both bugs with modest but real community engagement (9 and 5 comments respectively). Overall project health looks stable: known bugs are being actively worked with matching fix PRs in flight, but review/merge throughput appears slow.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours — all 6 tracked PRs remain in open/review status. Notable in-flight work:

- **[#4799](https://github.com/modelcontextprotocol/servers/pull/4799)** — `fix(git): route git_add(".") through the validated git CLI path`. Directly addresses the long-open `.git` staging bug (#628), replacing GitPython's `repo.index.add()` with a shell-out to the git CLI to avoid walking `.git` internals in Python.
- **[#4798](https://github.com/modelcontextprotocol/servers/pull/4798)** — `fix(everything): drop a disconnected session from the subscriptions map`. Fixes a subscription-map memory/state leak in the `everything` reference server where sessions weren't cleaned up on disconnect.
- **[#4340](https://github.com/modelcontextprotocol/servers/pull/4340)** — `fix(fetch): accept socks proxy alias`. Small compatibility fix so `socks://` proxy URLs work like `socks5://` in the fetch server.
- **[#4788](https://github.com/modelcontextprotocol/servers/pull/4788)** — Docs-only PR warning users that archived reference servers are unmaintained and carry no security guarantees.

None of these have merged yet, so no shipped progress to report — but the pipeline of fixes targeting known issues is a positive signal.

## 4. Community Hot Topics

- **[Issue #3878](https://github.com/modelcontextprotocol/servers/issues/3878)** — "`mcp-server-fetch` drops SSR content from streaming/progressive rendering sites" (9 comments, updated today). The most actively discussed item — reflects a real and growing pain point as more sites adopt streaming SSR architectures that the `fetch` tool's content extraction doesn't handle. This is a functional gap likely to matter increasingly as the web trends toward streaming-first delivery.
- **[Issue #628](https://github.com/modelcontextprotocol/servers/issues/628)** — "`.git` folder staged by running `git add .`" (5 comments, 👍 2, open since 2025-02-15). A safety-relevant bug with real user impact (accidental staging of `.git` internals) that has lingered for over a year; now has an active fix candidate (#4799).

Both hot topics point to the same underlying theme: users want the reference servers (`fetch`, `git`) to be more robust against edge cases in real-world environments, not just happy-path scenarios.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#628](https://github.com/modelcontextprotocol/servers/issues/628)** — `.git` staged via `git add .` (High — data/repo-integrity risk). Long-lived (580+ days open). **Fix in progress**: [#4799](https://github.com/modelcontextprotocol/servers/pull/4799).
2. **[#3878](https://github.com/modelcontextprotocol/servers/issues/3878)** — `fetch` tool silently drops SSR/streaming content (Medium — silent data loss, no crash, but produces incomplete/misleading results). No linked fix PR yet; open since 2026-04-08 with no resolution after 9 comments.
3. **Subscription leak in `everything` server** (surfaced via PR [#4798](https://github.com/modelcontextprotocol/servers/pull/4798), not a standalone issue) — disconnected sessions weren't removed from the subscriptions map, a potential slow memory/state leak. **Fix already proposed**, not yet merged.

No new crashes or regressions reported today; both open issues are pre-existing and carry active remediation efforts.

## 6. Feature Requests & Roadmap Signals

No explicit new feature-request issues appeared today. Roadmap signals instead come from PR activity:

- **Proxy protocol compatibility** ([#4340](https://github.com/modelcontextprotocol/servers/pull/4340)) suggests incremental hardening of the `fetch` server's networking layer — likely to land as a minor compatibility fix in the next release.
- **Archived-server governance** ([#4788](https://github.com/modelcontextprotocol/servers/pull/4788)) signals the maintainers continuing to formalize their stance that the README/reference-servers list is closed to new additions, pushing community submissions toward the external MCP registry instead (echoed by [#4801](https://github.com/modelcontextprotocol/servers/pull/4801), which will likely be redirected/closed per that policy).
- Community security tooling awareness is growing, per [#4802](https://github.com/modelcontextprotocol/servers/pull/4802) (adding `mcp-witness` alongside MCPWatch, ToolHive, Webrix MCP Gateway to `ADDITIONAL.md`), suggesting an emerging ecosystem of third-party MCP security/testing tools worth tracking.

## 7. User Feedback Summary

- **Pain point — data completeness**: Users relying on `mcp-server-fetch` for modern, JS-heavy/streaming sites are getting incomplete content, undermining trust in the tool for research/scraping use cases (#3878).
- **Pain point — safety**: Users have been bitten by accidentally staging `.git` internals when an agent runs a broad `git add .`, a sharp edge in agent-driven git workflows (#628); the community reaction (5 comments, upvotes) suggests this has caused real confusion/frustration for multiple users, with at least one duplicate issue (#2732) filed for the same problem.
- **Contribution friction**: PR #4801 shows continued community desire to add new servers directly to the README despite the project's explicit policy shift toward the external registry — a recurring source of PR churn that isn't resolved by tooling, only by the "no longer accepting" notice each time.
- No explicit satisfaction signals (positive feedback) surfaced in today's data; activity skews toward bug reports and maintenance.

## 8. Backlog Watch

- **[Issue #628](https://github.com/modelcontextprotocol/servers/issues/628)** (open since 2025-02-15, ~19 months) — the oldest and highest-risk item in today's data; a fix PR (#4799) is finally in flight and warrants maintainer prioritization to close out.
- **[Issue #3878](https://github.com/modelcontextprotocol/servers/issues/3878)** — despite 9 comments and 5 months open, no fix PR has materialized yet; a good candidate for maintainer triage/roadmap assignment given growing relevance of streaming SSR sites.
- **[PR #4801](https://github.com/modelcontextprotocol/servers/pull/4801)** — likely to be closed per the "no longer accepting README server additions" policy; leaving it open without a bot/maintainer response risks repeat confusion for future contributors making the same mistake.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP & Claude Ecosystem
**Date:** 2026-09-13

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape spans three distinct layers today: **protocol infrastructure** (MCP Servers, MCP Registry, Docker MCP Registry — building and cataloging the tools agents connect to), **curation/discovery** (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills — community-maintained lists tracking ecosystem growth), and **application-layer extensions** (Claude Plugins — shipping deployable agent capabilities like messaging bridges and security hooks). Across all seven projects, submission volume dwarfs code-level engineering activity, with curated lists (especially Awesome MCP Servers at 358 PRs/day) acting as the primary signal of ecosystem breadth rather than any single project's depth. A consistent cross-cutting theme is emerging: agents need durable **memory/context persistence** and **cross-registry discovery**, while **Windows compatibility** and **maintainer review throughput** are the two most visible operational weak points. No project shipped a release in this window, reflecting a broadly mature, incrementally-maintained ecosystem rather than one in a rapid version-churn phase.

## 2. Activity Comparison

| Project | Issues (open/closed) | PRs (open/closed) | Releases | Health Score |
|---|---|---|---|---|
| **MCP Servers** | 2 / 0 | 6 / 0 | None | **7/10** — stable, active fix pipeline, but slow merge throughput |
| **MCP Registry (official)** | 2 / 1 | 0 / 0 | None | **4/10** — near-zero genuine signal; mostly spam triage |
| **Awesome MCP Servers** | 0 / 1 | 240 / 118 | N/A (list) | **8/10** — very high-volume, well-automated curation pipeline |
| **Docker MCP Registry** | 0 / 0 | 14 / 2 | None | **7/10** — healthy submission intake, but bot-PR backlog (up to 9.7mo old) |
| **Claude Plugins (official)** | 5 / 0 | 2 / 2 | None | **5/10** — active fixes, but 5 concurrent Windows-only bugs signal a systemic gap |
| **Awesome Claude Code** | 11 / 0 | 0 / 0 | N/A (list) | **6/10** — strong submission inflow, but zero throughput today (bottleneck) |
| **Awesome Agent Skills** | 0 / 0 | 3 / 0 | N/A (list) | **6/10** — light but steady; too small a sample to assess velocity |

*Health score is a qualitative 1–10 composite of: merge/review throughput, bug-fix responsiveness, backlog age, and signal-to-noise ratio in reported activity — not a measure of raw volume.*

## 3. MCP Servers's Position

**Advantages vs. peers:** As the canonical reference implementation repo (vs. the *registries* and *awesome-lists* that catalog third-party work), MCP Servers carries disproportionate ecosystem weight — bugs here (e.g., `git add .` staging `.git`, #628) ripple across every downstream MCP client. It is also the only project in this set showing an active, matched fix-to-bug pipeline (#4799 → #628, #4798 → subscription leak) rather than pure backlog accumulation.

**Technical approach differences:** Unlike the registries (Docker MCP Registry, MCP Registry official), which are intake/cataloging systems with largely mechanical review criteria, MCP Servers does real code maintenance — CLI shell-outs replacing library internals, session-state cleanup, protocol compatibility (SOCKS proxy aliasing). This makes it structurally closer to Claude Plugins (official) than to the list-style repos, though its scope (protocol reference servers) is narrower than Plugins' broader capability surface (messaging, security, productivity).

**Community size comparison:** Engagement is modest but substantive — 9 and 5 comments on its two open issues, versus near-zero comment activity across nearly every other tracked repo today (Docker MCP Registry, Claude Plugins, both Awesome lists all show 0 populated comment counts). This suggests MCP Servers' user base is smaller but more technically engaged than the high-volume, low-interaction submission traffic seen in Awesome MCP Servers (358 PRs, effectively zero discussion).

## 4. Shared Technical Focus Areas

- **Cross-registry / meta-discovery**: Docker MCP Registry (#4863, Neuronto ARD federation) and, structurally, the existence of *three separate* registry/list projects (MCP Registry official, Awesome MCP Servers, Docker MCP Registry) all point to the same unmet need — agents and developers want unified discovery across fragmented catalogs, not siloed lists.
- **Persistent memory / context**: Appears independently in Docker MCP Registry (#5077 SwarmMemo, #5064 Neither), Awesome Claude Code (#2528 Kin, #2829 WRF Protocol, #2822 Wenlan), and Awesome Agent Skills (#1047 Wenlan skill submission) — the same "Wenlan" project surfacing in two separate lists on the same day underscores how central this need has become.
- **Windows platform reliability**: Claude Plugins (official) shows a concentrated cluster of 5 Windows-specific bugs (process leaks, path handling, encoding) filed within 24–48 hours — the clearest single-project pattern in this dataset, suggesting either a recent regression or growing Windows adoption outpacing platform testing.
- **List/catalog hygiene and staleness**: Docker MCP Registry (bot PRs open 9.7 months), Awesome MCP Servers (#14313 org-rename badge breakage, #13841 forced resubmission after inactivity triage), and Awesome Agent Skills (#1049 duplicate cleanup after repo transfers) all report the same class of problem — automated tooling doesn't gracefully handle repository moves/renames.
- **Security/trust tooling**: Awesome MCP Servers logged 3 security-category submissions today (agent-canary, Tracefold, pkgtruth) alongside MCP Servers' own tracking of third-party security scanners (#4802, mcp-witness) — independent evidence of a maturing "agent security" sub-ecosystem.

## 5. Differentiation Analysis

| Dimension | MCP Servers | Registries (Docker, official) | Awesome Lists (3x) | Claude Plugins |
|---|---|---|---|---|
| **Primary output** | Reference server code | Catalog metadata + validation | Curated Markdown links | Deployable plugin packages |
| **Target user** | MCP implementers/client devs | Server publishers seeking discovery | Ecosystem newcomers browsing options | End-users installing capabilities |
| **Review bottleneck** | Maintainer code review (slow) | Automated linting + manual merge | Bot-assisted linting, high throughput | Manual + CI dependency bumps |
| **Architecture concern** | Protocol compliance, safety (git, sessions) | Federation/cross-registry search | Duplicate/dead-link hygiene | Cross-platform runtime (bun/Windows) |

The registries and awesome-lists are functionally convergent (both catalog third-party MCP servers) but differ sharply in process maturity: Awesome MCP Servers processes 118 merges/day via automated labels (`has-emoji`, `valid-name`, `has-glama`), while Docker MCP Registry and MCP Registry (official) show far more manual, slower-moving queues — Docker's oldest bot PR has sat 9.7 months. Claude Plugins is the outlier as the only project shipping *executable* end-user functionality rather than metadata, which explains why its bug reports (resource leaks, crashes) carry materially higher severity than anything in the catalog/list layer.

## 6. Community Momentum & Maturity

**Rapidly iterating:** Awesome MCP Servers (358 PRs/day) and Docker MCP Registry (16 PRs/day, active new-server intake) show the highest raw momentum — both are absorbing ecosystem growth in real time, though largely as high-volume, low-depth curation rather than engineering iteration.

**Stabilizing / mature:** MCP Servers shows classic late-stage-reference-implementation behavior — low volume, high-quality matched bug/fix pairs, slow but deliberate review. MCP Registry (official) is closer to dormant, with today's activity being entirely spam triage rather than product signal.

**Backlog-constrained (submission > throughput):** Awesome Claude Code (11 new submissions, 0 closes) and Claude Plugins (5 new bugs, 0 fix PRs yet) both show submission rates currently outpacing maintainer response — worth monitoring as a leading indicator of maintainer capacity strain if the pattern persists beyond this single day.

**Too new to assess:** Awesome Agent Skills (3 PRs, same-day submissions) lacks enough history in this window to characterize velocity.

## 7. Trend Signals

For AI agent developers, three signals from today's data carry forward-looking weight:

1. **Registry federation is becoming a real requirement, not a nice-to-have.** Independent movement toward cross-registry discovery (Docker's Neuronto ARD, the sheer proliferation of competing MCP catalogs) suggests developers building MCP-consuming agents should not assume a single source of truth for tool discovery — plan for federated or multi-registry lookup now rather than retrofitting later.
2. **Memory/context persistence is the most contested feature category in the ecosystem**, with at least 5 independent projects (SwarmMemo, Neither, Kin, WRF Protocol, Wenlan) targeting overlapping problem space simultaneously. This is a strong signal that a de facto standard or winner-take-most consolidation is likely within the next few months — developers integrating memory layers should favor interoperable/MCP-native approaches over proprietary ones to avoid lock-in.
3. **Cross-platform (Windows) reliability is an underinvested area relative to demand.** The concentrated cluster of Windows-only failures in Claude Plugins (official), spanning unrelated plugins (telegram, discord, security-guidance, hookify), suggests the broader plugin/tool-runtime layer has been developed and tested primarily on POSIX systems. Teams building or depending on cross-platform agent tooling should treat Windows as a first-class test target rather than an afterthought, given how quickly this gap surfaced once usage grew.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
**Date:** 2026-09-13 | **Repo:** [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview

Activity on the official MCP Registry repo was minimal and low-signal over the past 24 hours: 3 issues touched (2 open, 1 closed), zero pull requests, and no new releases. Notably, all three issues appear to be spam or malformed template submissions rather than substantive bug reports or feature requests — none contain filled-in descriptions, reproduction steps, or actionable detail. There is no engineering activity (no PRs merged, no code changes, no releases) to report today. Overall project health signal from this window is neutral-to-noise; this looks like a quiet day for genuine maintainer/community engagement rather than a slowdown in real development.

## 2. Releases

None. No new releases were published in the last 24 hours.

## 3. Project Progress

No PRs were opened, merged, or closed in this window (0 PRs total), so there is no code progress to report today.

## 4. Community Hot Topics

None of today's issues generated any comments or reactions (all at 0 comments / 0 👍), so there is no genuine community engagement to analyze. The three issues submitted appear to be low-quality/spam rather than organic discussion starters:

- [#1638 [enhancement] https://kafehapp-xjb57zyx.manus.space](https://github.com/modelcontextprotocol/registry/issues/1638) — closed same-day; title is a bare, unrelated URL and the body is an unfilled feature-request template. Likely spam; closure was appropriate.
- [#1637 [bug] Anti-Epidemics Project in Jazan (Struggle Program)](https://github.com/modelcontextprotocol/registry/issues/1637) — title is unrelated to the repository's domain (MCP registry); body is an empty bug-report template. Likely spam or misfiled.
- [#1636 [enhancement] USMILLETCLEANINGMXF](https://github.com/modelcontextprotocol/registry/issues/1636) — nonsensical title, malformed markdown link in body, template otherwise empty. Likely spam.

**Recommendation:** these three issues warrant a maintainer/bot triage pass (label as spam, close, and consider whether issue-creation rate-limiting or stricter template validation is needed) rather than product analysis.

## 5. Bugs & Stability

One issue is tagged `[bug]` (#1637), but it contains no actual bug description, reproduction steps, or logs — the template is entirely unfilled. There is no evidence of a real regression, crash, or stability issue reported today, and no fix PRs are associated with it.

## 6. Feature Requests & Roadmap Signals

Two issues are tagged `[enhancement]` (#1638, #1636), but both are empty templates with no actual feature description. No genuine feature request content was submitted today, so no roadmap signal can be extracted from this window.

## 7. User Feedback Summary

No usable user feedback was captured today — none of the three issues describe a real pain point, use case, or satisfaction signal. All three read as template spam (empty bodies, off-topic or nonsensical titles, one containing an unrelated external link). This is worth flagging to maintainers as a data-quality/spam concern rather than as user sentiment.

## 8. Backlog Watch

No long-standing issues or PRs were surfaced in today's 24-hour data window (the dataset only covers items updated in the last 24h), so a genuine backlog assessment isn't possible from this snapshot alone. Based on today's activity, the most immediate maintainer action item is triaging/closing the apparent spam issues (#1637, #1636) to keep the open-issue queue clean; #1638 has already been closed.

---
*Note: This digest is generated from raw issue/PR metadata for the last 24 hours. Today's three issues lack substantive content (empty templates, off-topic titles), so several sections above report "no genuine signal" rather than fabricating analysis from incomplete data.*

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-09-13)

## 1. Today's Overview

Awesome MCP Servers remains one of the most actively curated lists in the AI tooling space, but today's activity is heavily skewed toward submission traffic rather than substantive engineering: 358 PRs were touched in the last 24h (240 open, 118 merged/closed) against just 1 issue (closed, zero comments). This is a classic "listicle" repo pattern — nearly every PR is a single-entry addition ("Add X to Y category") rather than a code change, and PR bodies show heavy use of bot/AI-assisted submission markers (🤖🤖🤖 tags, `has-emoji`/`valid-name`/`has-glama` labels appear to be automated linting checks). Activity level is **very high in volume, low in depth** — this looks like steady-state curation-list churn rather than a spike tied to any particular MCP ecosystem event. No releases exist for this repo since it's a curated list, not a software package.

## 2. Releases

None. (This is an awesome-list repository; it does not ship versioned releases.)

## 3. Project Progress

118 PRs were merged or closed today, consistent with the maintainers' automated linting/triage pipeline (labels like `missing-glama`, `has-emoji`, `valid-name` suggest a bot checks each submission for a Glama.ai listing badge, emoji formatting, and name validity before merge). Notable closes:

- **[#13841 - Add vitamind-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/13841)** (closed) — a re-submission of a previously inactivity-triaged PR (#11026), rebased cleanly onto `main`. Shows the maintainers run periodic inactivity sweeps that close stale PRs even when mergeable, requiring contributors to resubmit.
- **[Issue #14056 - Add xerj-org/xerj](https://github.com/punkpeye/awesome-mcp-servers/issues/14056)** (closed) — a simple addition request, closed same-week with no comments, suggesting either quick maintainer action or auto-triage.

The bulk of "progress" today is incremental catalog growth (new server entries) rather than infrastructure or tooling changes to the list itself, aside from **[#14192 - docs: remove 5 deleted repos and fix broken MCP_README link](https://github.com/punkpeye/awesome-mcp-servers/pull/14192)**, which is genuine maintenance work: pruning dead entries (`2niuhe/qrcode_mcp`, `calclavia/mcp-obsidian`, `inkbytefo/screenmonitormcp`, and two others) and fixing a broken internal doc link.

## 4. Community Hot Topics

Comment/reaction counts are not populated in today's data (`Comments: undefined`, 👍: 0 across the board), so no PR or issue stands out by engagement metrics. Ranking by content significance instead:

- **[#14192 - Remove 5 deleted repos + fix broken link](https://github.com/punkpeye/awesome-mcp-servers/pull/14192)** — the closest thing to a "hot" topic: list hygiene/dead-link cleanup, which matters for list credibility and is the kind of PR that benefits every consumer of the list.
- **[#14313 - greencalculus-mcp org migration](https://github.com/punkpeye/awesome-mcp-servers/pull/14313)** — highlights a recurring pain point: the Glama.ai badge system doesn't follow GitHub repo renames/org transfers, forcing manual PRs just to fix a badge URL after a legitimate move.
- **[#11705 - ProxyKit](https://github.com/punkpeye/awesome-mcp-servers/pull/11705)** — flagged `merge-conflict`, open since 2026-08-07 (37 days), indicating a stalled submission that needs contributor rebase attention.

Underlying need: contributors want faster, more predictable turnaround on single-line catalog additions, and the Glama badge/org-rename friction (#14313) suggests the automated validation tooling could better handle repo transfers.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today — expected, since this repository is a static Markdown list with no runtime component. The closest analog to a "stability" issue is **dead/broken links in the list itself**:
- **[#14192](https://github.com/punkpeye/awesome-mcp-servers/pull/14192)** fixes 5 entries pointing to deleted repos (404s) plus one broken internal doc reference — this is effectively the list's "bug fix" category, and it's already an open PR awaiting merge.

No severity ranking is needed beyond this, as no other stability-affecting item surfaced today.

## 6. Feature Requests & Roadmap Signals

No PRs today touch repo tooling, CI, or list infrastructure — all "feature requests" are catalog additions from external contributors proposing new MCP servers. Notable categories seeing growth today: Security (3 submissions: agent-canary #14275, Tracefold #12985, pkgtruth #14087), Monitoring (mcp-grafana #14310, tracehub-mcp #14299), and Knowledge & Memory (engrim #14312, munhq/chat-recall #13306). This signals the MCP ecosystem is currently trending toward **agent security/trust tooling** (canary tokens, package verification, transformation audit trails) and **cross-session memory** servers as emerging sub-categories worth watching for a possible future "Security" or "Memory" section reorganization if volume keeps climbing.

No roadmap changes to the list's own structure (e.g., new top-level categories) were proposed today.

## 7. User Feedback Summary

There is no direct user feedback (reviews, satisfaction signals) in today's data — submitters are proposing additions, not reporting on usage experience. Two soft signals worth noting:
- **Org/repo rename friction** (#14313): the Glama badge doesn't survive GitHub org transfers, a recurring annoyance for contributors maintaining their listing.
- **Re-submission burden** (#13841): contributors whose PRs get closed by inactivity triage must manually rebase and resubmit rather than simply reopening, adding friction for otherwise-mergeable single-line changes.

## 8. Backlog Watch

- **[#11705 - ProxyKit (Developer Tools)](https://github.com/punkpeye/awesome-mcp-servers/pull/11705)** — open since 2026-08-07 (37+ days), now flagged `merge-conflict`; needs contributor rebase or maintainer close.
- **[#12985 - Tracefold (Security)](https://github.com/punkpeye/awesome-mcp-servers/pull/12985)** — open since 2026-08-27 (17+ days), passed `has-glama` validation but still unmerged.
- **[#12826 - Kilo-Kit MCP server](https://github.com/punkpeye/awesome-mcp-servers/pull/12826)** — open since 2026-08-25 (19+ days), a larger/more complex submission (18-tool runtime, 177-skill library) that may be sitting in review longer due to its scope.
- **[#13306 - munhq/chat-recall (Knowledge & Memory)](https://github.com/punkpeye/awesome-mcp-servers/pull/13306)** — open since 2026-08-31 (13+ days), fully validated but unmerged.

These four PRs represent the oldest open items in today's dataset and are the clearest candidates for maintainer attention, especially #11705 given its merge-conflict status will only get worse with age.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date:** 2026-09-13

---

## 1. Today's Overview

Activity in the last 24 hours was driven entirely by pull requests — 16 PRs updated, no new issues, and no releases. Of these, 14 remain open and 2 were closed. The bulk of open PRs (8) are new third-party MCP server submissions from external contributors, continuing the registry's steady pattern of community-driven catalog growth rather than core-tooling changes. A secondary cluster of 6 PRs are automated "chore: update pin" commits from `mcp-registry-bot[bot]`, several of which have sat open for weeks to months, suggesting a maintainer review backlog rather than any instability. Overall, the project reads as healthy but submission-heavy: no bugs, crashes, or regressions were reported today, and reviewer bandwidth for new-server intake appears to be the main bottleneck.

## 2. Releases

No new releases in this period.

## 3. Project Progress

Two PRs closed today; the data does not distinguish merged vs. rejected, so both are flagged for confirmation:

- **[#4908 — Add Kyma API remote MCP server](https://github.com/docker/mcp-registry/pull/4908)** (sonpiaz) — Adds a remote MCP wrapper for Kyma API, an LLM API gateway offering multi-model routing with real-time pricing/uptime. Opened 2026-09-04, closed 2026-09-12 (~8 days turnaround).
- **[#4738 — Add Misata MCP server](https://github.com/docker/mcp-registry/pull/4738)** (rasinmuhammed) — Adds a relational test-data generation server (agent designs schema; engine enforces FK integrity and aggregate targets). Opened 2026-08-20, closed 2026-09-12 (~23 days turnaround).

No bug fixes or infrastructure changes landed today — all closed activity was new-server intake.

## 4. Community Hot Topics

Reaction/comment counts are not populated in the available data (all items show 0 👍 and undefined comments), so engagement cannot be ranked quantitatively this cycle. By submission recency and scope, the most notable open PRs are:

- **[#4863 — Neuronto Agentic Resource Discovery (ARD) Index](https://github.com/docker/mcp-registry/pull/4863)** (neuronto) — Notable for its cross-registry federation design: rather than searching one catalog, it fans out to every public ARD registry in a single call and fuses rankings. This signals an emerging underlying need — agents wanting *meta-discovery* across multiple MCP/tool registries instead of being locked into one.
- **[#5078 — Add 60fps remote server](https://github.com/docker/mcp-registry/pull/5078)** (beingabstrac) — Targets a niche but concrete use case: natural-language search over 2,000+ iOS interaction patterns with generated SwiftUI code, reflecting demand for design-to-code agent tooling.
- **[#5077 — Add SwarmMemo remote server](https://github.com/docker/mcp-registry/pull/5077)** (Hugo0) — A shared "bulletin board" for agent-to-agent and agent-to-human coordination (11 tools including read/post messages), pointing to growing interest in persistent, shared memory/communication layers between agents.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in this 24-hour window. No fix PRs were observed.

## 6. Feature Requests & Roadmap Signals

No explicit issue-based feature requests were filed today (0 issues updated), but the PR queue itself signals where the ecosystem is heading:

- **Cross-registry/meta-discovery** — #4863 (Neuronto) suggests demand for interoperability between MCP registries rather than siloed catalogs; likely to prompt discussion on registry federation standards if merged.
- **Domain-verified data servers** — #4538 (StatCite) emphasizes citation/provenance verification for economic statistics (`verify_stat` tool), reflecting a broader push toward trustworthy, source-attributed data servers.
- **Agent-native document workflows** — #4850 (Emboss, PDF form-filling) and #4657 (PlantUML, diagram rendering) point to continued growth in document/content-generation tooling for agents.
- **Persistent agent memory** — #5077 (SwarmMemo) and #5064 (Neither, project/decision memory for Cursor/Claude Desktop) both target agent memory/coordination, a recurring theme likely to keep expanding the registry's catalog in this category.

Given current velocity, expect several of the 8 pending new-server PRs to merge in the next cycle, most likely the simpler, single-purpose ones (PlantUML, StatCite) ahead of the more architecturally novel one (Neuronto's federated discovery), which may need more review.

## 7. User Feedback Summary

No direct user feedback (issue reports, complaints, or satisfaction signals) surfaced today — the data set contains zero issues. PR descriptions from submitters imply the pain points their servers aim to solve rather than reporting on existing registry pain points:
- Fragmented discovery across multiple agent-resource catalogs (#4863).
- Lack of citation/verification in statistical data tools (#4538).
- Need for lightweight, no-auth hosted MCP endpoints (several remote-server PRs use Streamable HTTP with no auth: #5078, #4538, #5077, #4850).

No dissatisfaction with the registry or Docker tooling itself was recorded in this window.

## 8. Backlog Watch

Several automated pin-update PRs from `mcp-registry-bot[bot]` have been open significantly longer than typical review turnaround and warrant maintainer attention:

- **[#788 — chore: update pin for omi](https://github.com/docker/mcp-registry/pull/788)** — open since 2025-11-26 (~9.5 months).
- **[#746 — chore: update pin for n8n](https://github.com/docker/mcp-registry/pull/746)** — open since 2025-11-21 (~9.7 months).
- **[#4381 — chore: update pin for mongodb](https://github.com/docker/mcp-registry/pull/4381)** — open since 2026-07-10 (~2 months).
- **[#4510 — chore: update pin for markitdown](https://github.com/docker/mcp-registry/pull/4510)** — open since 2026-07-22 (~1.7 months).
- **[#4365 — chore: update pin for line](https://github.com/docker/mcp-registry/pull/4365)** — open since 2026-07-09 (~2 months).
- **[#4343 — chore: update pin for atlassian](https://github.com/docker/mcp-registry/pull/4343)** — open since 2026-07-09 (~2 months).

The #788 and #746 PRs in particular are stale enough (nearly 10 months) to suggest they are either stuck behind an auto-merge policy that isn't firing, or safe to close/superseded by newer bot runs — worth a maintainer sweep. Among community submissions, none are old enough yet to flag as neglected, but **[#4863 (Neuronto)](https://github.com/docker/mcp-registry/pull/4863)**, open since 2026-08-31 (~2 weeks) with a structurally novel federation design, is the one most likely to need deeper maintainer review time before merge.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest: 2026-09-13

## 1. Today's Overview

Claude Plugins (official) saw moderate activity over the last 24 hours: 5 issues touched (all still open) and 4 PRs updated (2 automated dependency bumps still open, 2 human PRs closed/merged). No new releases shipped. The standout theme is a cluster of **cross-platform reliability bugs on Windows** — process/handle leaks in the `telegram` and `discord` plugins, path-handling bugs in `security-guidance`, and an encoding bug in `hookify` — suggesting Windows support is currently the weakest link in the plugin ecosystem. Overall health looks stable (routine automated SHA bumps continue flowing, community PRs are being submitted and closed same-day), but the density of platform-specific bugs reported today warrants maintainer attention.

## 2. Releases

None today.

## 3. Project Progress

Two community PRs were closed today (merge status not explicitly confirmed by the data, but both are substantive fixes):

- **[#6093](https://github.com/anthropics/claude-plugins-official/pull/6093)** — "Declare versions for skill-creator and frontend-design" (fixes #79776). Adds missing `version` fields to `plugin.json`/`marketplace.json` for two plugins that previously shipped versionless, which was destabilizing the plugin-update comparison logic.
- **[#6088](https://github.com/anthropics/claude-plugins-official/pull/6088)** — "imessage: recognize a phone-number self identity via `destination_caller_id`" (fixes #4503). Fixes `SELF` identity derivation for Mac users whose iMessage identity is a phone number rather than an Apple ID, so their own sent messages are now correctly attributed.

Routine maintenance continues via the automated SHA-bump bot: **[#6091](https://github.com/anthropics/claude-plugins-official/pull/6091)** (coderabbit) and **[#6090](https://github.com/anthropics/claude-plugins-official/pull/6090)** (agentforce-adlc), both still open pending validation/merge.

## 4. Community Hot Topics

No item stands out on comments/reactions today — all 5 issues have 0-1 comments and 0 👍 reactions, and the two open PRs are bot-generated. The most "discussed" item is:

- **[#4527](https://github.com/anthropics/claude-plugins-official/issues/4527)** — telegram orphaned `bun server.ts` pollers (1 comment, open since 2026-07-26). This is the only issue with any community engagement, and it's a long-lived one, suggesting the underlying need is a reliable process-lifecycle/cleanup mechanism for plugin-spawned background servers — a pattern that's now recurring (see discord leak below).

Underlying need: users running long-lived messaging-bridge plugins (telegram, discord, imessage) want the plugin runtime to manage subprocess/connection lifecycles robustly across restarts and platforms, not leave orphaned or leaking processes behind.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#4527](https://github.com/anthropics/claude-plugins-official/issues/4527)** — *High severity.* Telegram plugin leaves orphaned `bun server.ts` processes on Windows that accumulate indefinitely, causing RAM/CPU exhaustion. No fix PR yet. Long-standing (opened 2026-07-26, still unresolved).
2. **[#6089](https://github.com/anthropics/claude-plugins-official/issues/6089)** — *High severity.* Discord plugin leaks ~1.4 OS handles/min and 1.4–2.2 GB committed memory/day per live gateway session under bun (not reproducible under Node with identical code) — points to a bun-runtime-specific leak. No fix PR yet; brand new (filed today).
3. **[#6086](https://github.com/anthropics/claude-plugins-official/issues/6086)** — *High severity.* `security-guidance` v2.0.8 hooks never run at all on Windows because the interpreter can't see the plugin's own staging directory — a total feature failure on Windows for this plugin. No fix PR yet.
4. **[#6087](https://github.com/anthropics/claude-plugins-official/issues/6087)** — *Medium severity.* `security-guidance` hooks pass POSIX `/dev/null` paths through to Windows, creating a stray `dev/null/` folder every commit/push and silently disabling git-hardening protection. No fix PR yet; likely related root cause to #6086.
5. **[#6092](https://github.com/anthropics/claude-plugins-official/issues/6092)** — *Medium severity.* `hookify` rule files with non-ASCII content throw `UnicodeDecodeError` on Windows, silently disabling the rule (no error surfaced to user). No fix PR yet.

Pattern: **all five open bugs are Windows-specific**, and three trace to the plugin runtime's assumptions about POSIX paths/encoding/process lifecycle not holding on Windows. This is a systemic gap rather than isolated incidents.

## 6. Feature Requests & Roadmap Signals

No explicit new-feature requests were filed today; all reported items are bug fixes. Based on the pattern above, likely near-term roadmap/fix priorities:
- A **Windows-compatible path-handling layer** (fixing `/dev/null` translation and staging-directory visibility issues shared by #6087/#6086).
- **UTF-8-safe file loading** in `hookify`'s `load_rule_file` (#6092) — straightforward, likely to land quickly.
- Longer-term: a **process-supervisor/cleanup mechanism** for bun-based plugin servers (telegram, discord) to prevent orphaned processes and handle leaks — this spans multiple plugins and may prompt a shared-infrastructure fix rather than per-plugin patches.
- Plugin **version-field enforcement** (following #6093) — the marketplace could add a lint/CI check requiring `version` in `plugin.json` to prevent regressions.

## 7. User Feedback Summary

- Pain points are concentrated among **Windows users of messaging-bridge and security plugins** — telegram, discord, security-guidance, and hookify all report Windows-only failures within the same 24-48h window, which reads more like a shared regression surface (possibly a recent bun/runtime or plugin-loader change) than coincidence.
- Reports are detailed and diagnostic (e.g., #4527 includes environment specifics like Claude Code build 2.1.220; #6089 includes handle/memory-rate measurements; #6086 pinpoints host Python path) — indicating an engaged, technically sophisticated user base doing real root-cause work before filing.
- No explicit praise/satisfaction signals in today's data; feedback skew is entirely bug-oriented.
- Community PR contributions (#6093, #6088) show users are willing to fix issues themselves and submit patches, not just report bugs — a healthy sign for project sustainability.

## 8. Backlog Watch

- **[#4527](https://github.com/anthropics/claude-plugins-official/issues/4527)** — Open since 2026-07-26 (~7 weeks), a serious resource-exhaustion bug with only 1 comment and no fix PR. Needs maintainer triage given the severity (RAM/CPU exhaustion on Windows).
- **Automated bump PRs [#6091](https://github.com/anthropics/claude-plugins-official/pull/6091) and [#6090](https://github.com/anthropics/claude-plugins-official/pull/6090)** — validated by CI but still awaiting merge; low risk but worth clearing to keep the bot queue from backing up.
- The three Windows path/encoding bugs (#6092, #6087, #6086) filed within the last 24-48h have no maintainer response yet — given they cluster around the same root cause class (POSIX assumptions on Windows), a single triage pass addressing all three together would be efficient.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest
**Date:** 2026-09-13

## 1. Today's Overview

Activity in the last 24 hours consisted entirely of new resource submissions to the curated list — 11 issues opened or updated, all tagged `resource-submission` with `validation-passed`, no closed issues, and zero pull request activity. This is a typical "quiet maintenance day" pattern for awesome-lists: no releases (there is no versioned codebase to release), no bug reports, no PR merges. The submission volume itself is healthy — 11 new community tool/resource proposals in one day signals a still-growing Claude Code ecosystem, spanning categories like Memory & Context Persistence, Observability & Monitoring, Skills, and Alternative Clients. Overall project health reads as **stable and active on the curation side**, but with a maintainer bottleneck since none of the 11 submissions have been merged/closed yet.

## 2. Releases

None. This repository is a curated list (README/data file), not a shipped software package, so no version releases are expected.

## 3. Project Progress

No merged or closed PRs today, and no PRs were opened (0 total PR activity). No features "advanced" in a code sense; progress consists solely of the intake pipeline validating 11 new submissions (`validation-passed` label applied to each), which presumably reflects an automated linter/bot check rather than manual maintainer review.

## 4. Community Hot Topics

Comment activity is low and evenly distributed — no single issue stands out as a "hot" discussion thread. The most-commented items (2 comments each) are:

- **[#2828 murmur](https://github.com/hesreallyhim/awesome-claude-code/issues/2828)** — an "always-on AI radio host for the terminal" built on Claude Code (Remote Control, Notifications & Voice I/O category). The novelty of a voice/audio-output use case likely drove the extra engagement.
- **[#2212 humanizer-ru](https://github.com/hesreallyhim/awesome-claude-code/issues/2212)** — a Russian-language text hygiene toolkit as an Agent Skill, open since July 12 and still accumulating comments, suggesting ongoing review/clarification with the maintainer.
- **[#2528 Kin](https://github.com/hesreallyhim/awesome-claude-code/issues/2528)** — an MCP server answering repo questions via a semantic entity graph (Memory & Context Persistence), open since August 14.

The underlying need visible across today's submissions is **observability/cost control** (2 separate token/cost-tracking tools submitted) and **persistent memory/context** (3 submissions), indicating community demand is concentrated on making long-running Claude Code sessions cheaper to run and easier to resume with context intact.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed today. All 11 issues are resource-submission requests, not defect reports. No fix PRs are applicable.

## 6. Feature Requests & Roadmap Signals

No feature requests were filed against the awesome-claude-code repository itself today (it doesn't take feature requests in the traditional sense — its "features" are catalog entries). However, the pattern of submitted resources hints at where the broader Claude Code ecosystem is heading:

- **Cost/token observability** — [#2827 claude-token-saver](https://github.com/hesreallyhim/awesome-claude-code/issues/2827) and [#2823 TokenDog](https://github.com/hesreallyhim/awesome-claude-code/issues/2823), both submitted today, suggest rising community interest in usage-cost tooling. Given two independent tools solving the same problem on the same day, expect the maintainer to either merge both under Usage & Cost or ask submitters to differentiate.
- **Session monitoring** — [#2826 cc-semaphore](https://github.com/hesreallyhim/awesome-claude-code/issues/2826) addresses multi-session visibility, a recurring need for power users running parallel Claude Code instances.
- **Memory/context persistence** — three submissions today ([#2528 Kin](https://github.com/hesreallyhim/awesome-claude-code/issues/2528), [#2829 WRF Protocol](https://github.com/hesreallyhim/awesome-claude-code/issues/2829), [#2822 Wenlan](https://github.com/hesreallyhim/awesome-claude-code/issues/2822)) reinforce that context/state persistence across sessions remains a top unmet need in the ecosystem.

## 7. User Feedback Summary

No direct user complaints or satisfaction signals appear in today's data (all items are net-new submissions, not follow-up discussion). Indirectly, the submission mix reveals real use cases the community is building for:
- Cost anxiety around Claude Code usage (two independent cost-tracking tools submitted same-day).
- Desire for non-visual/ambient interfaces (murmur's voice-based terminal companion).
- Cross-client bridging (ClaudeGate connecting Claude Code CLI to other Anthropic interfaces).
- Localization gaps (humanizer-ru for Russian text, LinkedIn/Portuguese-market skills), indicating growing non-English-speaking adoption.

## 8. Backlog Watch

The most notable pattern today is that **all 11 open issues are unmerged submissions awaiting maintainer action** — none have been closed/merged despite `validation-passed`. Two are worth flagging for staleness risk:

- **[#2212 humanizer-ru](https://github.com/hesreallyhim/awesome-claude-code/issues/2212)** — open since 2026-07-12 (over two months), still active as of today. Longest-pending item in this batch.
- **[#2528 Kin](https://github.com/hesreallyhim/awesome-claude-code/issues/2528)** — open since 2026-08-14 (~1 month), still receiving comments without resolution.

The remaining 9 issues were opened within the last 1-2 days, so no urgency yet, but the maintainer backlog is clearly growing faster than merge throughput — worth monitoring if this pattern continues over the next few days.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Project Digest
**Date:** 2026-09-13 | **Repo:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview

Activity over the past 24 hours was light but steady, consistent with this repo's nature as a curated, community-submitted list rather than an active codebase. Three new pull requests were opened — one maintenance/cleanup PR and two new skill submissions — with no issues and no releases recorded. None of the PRs have been merged or closed yet, and there is no comment or reaction activity to signal maintainer triage. Overall project health looks stable: submission volume is normal for a list-style repo, but review throughput cannot be assessed from a single day's snapshot since nothing has closed.

## 2. Releases

No new releases in this period.

## 3. Project Progress

No PRs were merged or closed today — all three open PRs (#1049, #1048, #1047) remain pending review. No feature or fix has "advanced" to completion yet; progress is limited to new submissions entering the queue.

## 4. Community Hot Topics

No comments or reactions were recorded on any item today, so there is no clear "hot" discussion. By submission content, the most notable items are:

- **[PR #1049 — docs: remove duplicate skill listings](https://github.com/VoltAgent/awesome-agent-skills/pull/1049)** (Mnilax): Cleanup PR removing duplicate entries (Kayforkind/reimagine-it, scarletkc/agents) and consolidating on the canonical `Orchestra-Research/AI-Research-SKILLs` entry after a repo transfer. Underlying need: list hygiene — repository transfers/renames are creating duplicate or stale entries that need periodic reconciliation.
- **[PR #1048 — Add skill: erfnzdeh/arvancloud-api](https://github.com/VoltAgent/awesome-agent-skills/pull/1048)** (erfnzdeh): New Community Skill submission for an ArvanCloud API integration (88 stars), installable via `npx skills add`. Reflects continued interest in cloud-provider-specific agent skills.
- **[PR #1047 — Add skill: 7xuanlu/wenlan-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1047)** (7xuanlu): Submission for "Wenlan," a local-first, citation-gated AI knowledge base served over MCP to Claude Code, Codex, and Cursor. Signals growing demand for MCP-native knowledge-base/wiki tooling that plugs into multiple agent clients.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today (0 issues opened or updated). PR #1049 is effectively a data-quality fix (duplicate listings caused by a repository transfer) rather than a code bug — no severity ranking is warranted since it's a docs-level correction with no reported downstream breakage.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. Indirect roadmap signals from the PRs:
- **List deduplication tooling/process**: PR #1049's manual fix (using `git diff --check` for verification) suggests a recurring need for either an automated duplicate-detection check or a documented process for handling repo transfers/renames — likely candidate for a future contributing-guide update or CI check.
- **Continued expansion of Community Skills categories**: both new submissions target specific sub-categories (Development and Testing; Productivity and Collaboration), suggesting the taxonomy is actively growing and may need periodic review for category sprawl.

## 7. User Feedback Summary

No direct user feedback (comments, reactions, satisfaction signals) was captured today — all three PRs have zero comments and zero 👍 reactions so far. From submission descriptions, contributors are using this list as a discovery/distribution channel for both niche cloud-API skills (ArvanCloud) and more ambitious cross-client MCP tooling (Wenlan), indicating the repo continues to serve its intended purpose as an aggregation point for the agent-skills ecosystem.

## 8. Backlog Watch

No long-unanswered issues exist (0 issues total). All three open PRs are same-day submissions (created 2026-09-12/13) and don't yet qualify as "stale," but worth flagging for maintainers:
- **[PR #1049](https://github.com/VoltAgent/awesome-agent-skills/pull/1049)** is a low-risk cleanup PR (removes exact duplicates) that could likely be merged quickly to reduce list clutter.
- **[PR #1048](https://github.com/VoltAgent/awesome-agent-skills/pull/1048)** and **[PR #1047](https://github.com/VoltAgent/awesome-agent-skills/pull/1047)** are standard skill additions with no red flags in their descriptions; worth monitoring if they remain unreviewed beyond a few days, since submission backlogs in list-style repos tend to accumulate without a regular triage cadence.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
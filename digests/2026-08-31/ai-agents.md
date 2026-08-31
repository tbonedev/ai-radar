# MCP Ecosystem Digest 2026-08-31

> Issues: 1 | PRs: 11 | Projects covered: 7 | Generated: 2026-08-31 14:47 UTC

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
### github.com/modelcontextprotocol/servers · 2026-08-31

## 1. Today's Overview

The MCP Servers reference repo saw moderate, contributor-driven activity in the last 24 hours: 11 pull requests touched (9 open, 2 closed/merged) and 1 issue closed, but no new releases. The bulk of activity clusters around two themes — security hardening (path traversal, SSRF protection, POSIX/Windows path validation) and documentation/internationalization (a new Simplified Chinese README, MCP Registry publishing docs). Notably, a filesystem security bug reported on Aug 23 was fixed and closed within a week, suggesting a healthy triage-to-fix loop for security-sensitive issues. Overall the project reads as an actively maintained reference implementation with a broad, engaged external contributor base rather than a small core team pushing features — there's no release cadence signal today, just steady incremental hardening.

## 2. Releases

None in this period.

## 3. Project Progress

- **[PR #4704](https://github.com/modelcontextprotocol/servers/pull/4704)** *(closed)* — `fix(filesystem): reject Windows paths on POSIX`. Directly resolves [Issue #4686](https://github.com/modelcontextprotocol/servers/issues/4686) by rejecting drive-letter path forms before relative-path resolution, closing a security gap where a Windows-style path could silently write outside the intended location on POSIX hosts.
- **[PR #2205](https://github.com/modelcontextprotocol/servers/pull/2205)** *(closed)* — A long-running (14-month-old, opened 2025-06-25) patch set for Docker/Podman/SELinux bind-mount compatibility across the fetch, git, and time servers has finally been resolved, clearing a legacy container-security item off the backlog.

## 4. Community Hot Topics

Engagement is generally light today (no item exceeds 2 comments / 0 reactions), but two items stand out by substance rather than volume:

- **[Issue #4686](https://github.com/modelcontextprotocol/servers/issues/4686)** (2 comments) — the filesystem path-handling bug; the most-discussed item, reflecting real concern about cross-platform path-safety guarantees in the `filesystem` server.
- **[PR #3180](https://github.com/modelcontextprotocol/servers/pull/3180)** — SSRF protection for the `fetch` server, open since Jan 5, 2026 and still receiving updates as of today (~8 months). Its longevity signals sustained community/maintainer interest in landing this security feature, even without heavy comment traffic.

Underlying need: contributors and users are converging on "harden the reference servers for production use" — path validation, SSRF/private-IP blocking, and repo-path/symlink escape checks all point to the same concern: these servers are being deployed more widely than lightweight reference examples, and users want them safe by default.

## 5. Bugs & Stability

Ranked by severity (security/data-integrity impact first):

1. **[Issue #4686](https://github.com/modelcontextprotocol/servers/issues/4686)** *(closed)* — High: silent write to an unintended path via unvalidated Windows-style paths on POSIX. **Fixed** by [PR #4704](https://github.com/modelcontextprotocol/servers/pull/4704).
2. **[PR #4723](https://github.com/modelcontextprotocol/servers/pull/4723)** *(open, fix)* — Hardens `mcp-server-git` against path traversal / symlink escapes outside the allowed repo root. No corresponding tracked issue in today's data, but the description implies an unpatched escape vector.
3. **[PR #3180](https://github.com/modelcontextprotocol/servers/pull/3180)** *(open, fix)* — Adds SSRF protection (scheme validation, private-IP blocking) to `mcp-server-fetch`; addresses a real exposure in the fetch server's current behavior.
4. **[PR #4715](https://github.com/modelcontextprotocol/servers/pull/4715)** *(open, fix)* — Session/resource leak: `resources/subscribe` subscriptions were never cleaned up on disconnect, leaking `sessionId` entries indefinitely. Fixes referenced [Issue #4710].
5. **[PR #4722](https://github.com/modelcontextprotocol/servers/pull/4722)** *(open, fix)* — Correctness/metadata bug: `sequentialthinking` tool incorrectly advertises `readOnlyHint`/`idempotentHint` as true despite mutating server-side state, which can cause clients to skip confirmations.
6. **[PR #4674](https://github.com/modelcontextprotocol/servers/pull/4674)** *(open, fix)* — Minor: `tailFile` miscounts lines when a file ends with a trailing newline.

No new *unfixed* crash or regression reports today — all identified bugs already have an open or merged fix PR, a positive stability signal.

## 6. Feature Requests & Roadmap Signals

- **[PR #4729](https://github.com/modelcontextprotocol/servers/pull/4729)** — Simplified Chinese README translation; likely mergeable soon given low risk, signals growing non-English-speaking contributor/user base.
- **[PR #4726](https://github.com/modelcontextprotocol/servers/pull/4726)** — Documentation clarifying that community servers should publish to the **MCP Registry** rather than this repo; this looks like a roadmap/governance signal — the maintainers appear to be steering community contributions away from the reference-servers repo and toward the registry as the canonical listing mechanism.
- **[PR #4727](https://github.com/modelcontextprotocol/servers/pull/4727)** — Adds `mcp-cj` (Cangjie language MCP framework) to `ADDITIONAL.md`, part of the broader ecosystem-listing pattern rather than a core feature.
- **[PR #3180](https://github.com/modelcontextprotocol/servers/pull/3180)** (SSRF protection) is the strongest candidate for landing in the next notable update given its age, scope, and security relevance.
- **[PR #4724](https://github.com/modelcontextprotocol/servers/pull/4724)** — Adds a root-level workspace test script and verifies fetch server dependency bounds; an infra/CI improvement likely to land as routine maintenance.

## 7. User Feedback Summary

Real pain points surfaced today center on **trust boundaries of reference servers deployed as-is**: users expect `filesystem`, `git`, and `fetch` servers to safely constrain operations to an allowed root/scheme, and are finding (and patching) cases where that constraint silently fails — a meaningful trust gap for anyone running these servers against untrusted input. There's also a documentation/onboarding thread: the push for a Chinese README and clearer registry-publishing guidance suggests non-English and third-party-server contributors want lower friction to participate and to know *where* their servers belong (this repo vs. the MCP Registry). No explicit satisfaction/praise commentary appears in today's data — feedback is overwhelmingly action-oriented (bug reports + fixes) rather than qualitative reviews.

## 8. Backlog Watch

- **[PR #3180](https://github.com/modelcontextprotocol/servers/pull/3180)** — SSRF protection for `mcp-server-fetch`, open since **2026-01-05** (~8 months), still active. Given it's a security-relevant feature with a full test suite, this deserves maintainer prioritization — it's the oldest substantial open item in today's data.
- **[PR #2205](https://github.com/modelcontextprotocol/servers/pull/2205)** — Just closed after **14 months** open (2025-06-25 → 2026-08-30); worth confirming in a follow-up digest whether it was merged or abandoned, as container/SELinux compatibility is a recurring deployment pain point.
- No other items show significant staleness today — most open PRs were created within the last 1–2 weeks, indicating the backlog is otherwise being worked through at a healthy pace.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Digest — 2026-08-31

## 1. Ecosystem Overview

The MCP/agent-tooling ecosystem today shows a clear bifurcation: **implementation and governance repos** (MCP Servers reference, MCP Registry, Claude Plugins) are doing security-hardening and data-quality work, while **curation repos** (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills) are absorbing a large, largely automated wave of new-server/new-skill submissions. Submission volume across the curation layer (196+ PRs/issues combined today) dwarfs core-engineering volume (roughly 20 PRs across the reference and governance repos), suggesting the ecosystem is in a rapid cataloging phase even as its foundational servers mature toward production-safety guarantees. Two structural pressures recur across nearly every project: review-bandwidth bottlenecks (bot PRs and submissions aging for weeks/months unreviewed) and a shift toward trust/verification metadata (security-scan attestations, version pinning, path/SSRF hardening). No project shipped a release in the last 24 hours — this is a contribution-intake and hardening cycle, not a release cycle.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h, open/closed) | Releases | Health Score |
|---|---|---|---|---|
| **MCP Servers** (reference) | 1 closed | 11 (9 open / 2 closed) | None | **High** — fast triage-to-fix loop, no unfixed critical bugs |
| **MCP Registry** (official) | 1 active (3 comments) | 2 (2 open / 0 closed) | None | **Medium** — slow-moving but consensus-driven; one unresolved data-quality issue at scale |
| **Awesome MCP Servers** | 3 new | 153 (128 open / 25 closed) | N/A (curated list) | **Medium** — high throughput but bot-driven, near-zero discussion |
| **Docker MCP Registry** | 0 | 35 (32 open / 3 closed) | None | **Medium** — healthy submission flow, but multiple bot PRs stalled 7–9+ months |
| **Claude Plugins (official)** | 3 (2 with same-day fix PRs) | 5 (2 open / 3 closed) | None | **High** — same-day issue→fix turnaround on two of three bugs |
| **Awesome Claude Code** | 6 (5 open / 1 closed) | 0 | N/A | **Medium** — low-friction submissions, one 7-week-old unresolved item |
| **Awesome Agent Skills** | 0 | 8 (8 open / 0 closed) | N/A | **Low-Medium** — zero merges/reviews today despite steady submission inflow |

## 3. MCP Servers's Position

As the **reference implementation** underpinning the entire ecosystem, MCP Servers occupies a structurally different role than its peers: it is the only project in today's set producing security-relevant *code* fixes (path traversal, SSRF, session-leak, POSIX/Windows path validation) rather than metadata or listings. This gives it an outsized influence-to-volume ratio — 11 PRs today versus Awesome MCP Servers' 153, yet its fixes propagate trust guarantees that the registries and awesome-lists implicitly depend on when they list these same servers as safe defaults.

- **Technical approach**: Defense-in-depth hardening (input validation, sandboxing, symlink/traversal checks) applied directly to widely-deployed reference servers (`filesystem`, `git`, `fetch`), vs. MCP Registry's approach of *metadata-layer* trust signals (optional security-scan `_meta` extension) and Docker MCP Registry's *submission-gate* approach (author-asserted claims like "zero-telemetry," "no OAuth needed").
- **Community size**: Far smaller organic contributor base than Awesome MCP Servers (153 PRs, mostly bot-tagged submissions) but with substantively higher per-contribution engagement — real reviewers landing security patches vs. templated listing PRs.
- **Advantage**: A closed-loop pattern where issues (e.g., #4686) are fixed within a week, unmatched by any other project sampled today — most others show weeks-to-months latency between report and resolution.

## 4. Shared Technical Focus Areas

- **Security/trust hardening** — MCP Servers (path traversal, SSRF, symlink escape fixes), MCP Registry (security-scan receipt `_meta` extension, PR #1404), Awesome Agent Skills (memory-poisoning defense skill, PR #984). A consistent signal that "safe by default" is becoming a baseline expectation, not an opt-in.
- **Registry/listing data integrity** — MCP Registry (387 active-status servers unreachable, Issue #1579), Docker MCP Registry (bot pin-update PRs stalled 7–9 months, indicating stale dependency tracking), Claude Plugins (6 plugins stuck on "unknown" version breaking update caching, Issue #1758/PR #5715). All three point to the same underlying gap: discovery/registry layers lack automated health-checking at publish time.
- **Cross-platform reliability** — Claude Plugins (#5707 hookify path bug, #5708 Windows-specific skill-creator failures) signals recurring Windows-compatibility debt in tooling built primarily on POSIX assumptions — echoed by MCP Servers' own POSIX/Windows path-validation fix.
- **Review-bandwidth scaling** — every curation-heavy project (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills) shows submissions outpacing maintainer review capacity, with items aging 4–48+ days before any triage action.

## 5. Differentiation Analysis

| Dimension | Reference/Runtime (MCP Servers) | Governance/Registry (MCP Registry, Docker MCP Registry) | Marketplace (Claude Plugins) | Curation Lists (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills) |
|---|---|---|---|---|
| **Primary output** | Runnable server code | Structured metadata/discovery index | Installable plugin bundles | Markdown catalogs |
| **Target user** | Developers embedding servers directly | Client/tooling authors querying registries programmatically | Claude Code users installing plugins | Developers browsing for tools |
| **Contribution shape** | Code PRs, bug fixes | JSON schema submissions, metadata extensions | Plugin submissions + infra fixes (skill-creator, hooks) | Templated listing PRs/issues |
| **Architecture trend** | Increasing input-validation surface | Moving from feature-add to validation/health-check tooling | SHA-pinned, CI-validated marketplace entries | Bot-assisted label/quality gating (`has-glama`, `valid-name`) |

Docker MCP Registry and the official MCP Registry are functionally competing discovery layers with different governance models (Docker: vendor-curated, container/remote submission gate; official: community RFC-driven metadata standard) — both converging on the same need (trust signals) via different mechanisms.

## 6. Community Momentum & Maturity

- **Rapidly iterating (raw growth phase)**: Awesome MCP Servers (153 PRs/day) and Docker MCP Registry (35 PRs/day) — dominated by new-listing submissions, much of it automated/templated, with domain expansion into finance/crypto, government/legal, and mobile-agent tooling.
- **Actively hardening (stabilizing core)**: MCP Servers reference repo — shifting from net-new features to security/correctness hardening, the classic signature of a maturing reference implementation.
- **Governance-phase maturing**: MCP Registry — modest PR/issue volume but substantively shifting toward quality/trust infrastructure (security-scan metadata, data-integrity remediation) rather than feature growth.
- **Reactive/infra-focused**: Claude Plugins — smaller volume but fastest issue-to-fix turnaround observed today (same-day for 2 of 3 bugs), indicating a healthy but still-forming feedback loop.
- **Submission-queue-constrained**: Awesome Claude Code and Awesome Agent Skills — steady contributor inflow but stalled review throughput (0 merges today for Awesome Agent Skills despite 8 open PRs), the clearest maturity risk signal in today's data.

## 7. Trend Signals

1. **"Safe by default" is now baseline, not aspirational.** Path validation, SSRF protection, and security-scan attestations are appearing simultaneously across independent projects (MCP Servers, MCP Registry) — developers building on MCP should not assume reference servers are safe against untrusted input without checking patch status first.
2. **Registries need automated health-checking, not just submission gates.** The 387-unreachable-server finding (MCP Registry) and 9-month-stale bot PRs (Docker MCP Registry) show that "active" or "listed" status is not currently a reliable signal — agent developers consuming these registries programmatically should add their own reachability/liveness checks rather than trusting status fields.
3. **Remote/hosted (streamable-http) transport is overtaking Docker-built containers** as the default onboarding path for new MCP servers — infrastructure investment should account for SaaS-hosted server integration patterns, not just local/containerized execution.
4. **Vertical-specific MCP servers are surging** — finance/crypto (cloud-tools, Ava, QuantJourney), government/legal (Russian registry cluster, Truth Bear), and mobile automation (mobile-mcp) — signaling that MCP is being adopted as a general integration bus for domain-specific agent workflows, not just dev-tooling.
5. **Review capacity is the ecosystem's shared bottleneck.** Every curation-style project shows submissions outpacing triage; developers relying on "awesome list" curation as a quality signal should independently vet freshness/maintenance status rather than assuming inclusion implies active review.
6. **Cross-platform (Windows) parity remains an underinvested area** in agent-tooling infra (skill-creator, hookify) — teams building cross-platform agent tooling should budget explicit Windows CI coverage, as this gap keeps resurfacing independently across projects.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) — Daily Digest — 2026-08-31

## 1. Today's Overview

Activity in the official MCP Registry (modelcontextprotocol/registry) was light over the past 24 hours: one active issue received continued discussion, and two pull requests saw updates, but nothing merged or closed. No new releases shipped. The standout item is a data-quality bug report (#1579) surfacing a structural gap affecting 387 published servers — a signal worth watching given the registry's role as the canonical discovery layer for MCP-compatible clients. Overall pace is modest but steady, consistent with a maturing registry moving from rapid feature growth into governance/quality-hardening work (security-scan metadata, unreachable-server cleanup) rather than net-new capability.

## 2. Releases

No new releases in this period.

## 3. Project Progress

No PRs merged or closed today. Both open PRs continue to move forward:

- **[PR #1404](https://github.com/modelcontextprotocol/registry/pull/1404)** — "Add optional security-scan receipt `_meta` extension (v1)" — implements the v1 design converged on in #1273, adding an optional `io.modelcontextprotocol.registry/security-scan` metadata field. Still open, last updated today (2026-08-31), suggesting active review/iteration.
- **[PR #1600](https://github.com/modelcontextprotocol/registry/pull/1600)** — "Add Kilawatt Cloud MCP Server" — a routine server-listing submission (JSON schema for `kilawatt-mcp-server`), opened and updated same-day.

## 4. Community Hot Topics

- **[Issue #1579](https://github.com/modelcontextprotocol/registry/issues/1579)** — "387 active servers declare neither remotes nor packages and cannot be reached" — the most substantive discussion today, with 3 comments since being opened on 2026-08-27. The underlying need is **registry data integrity**: users/clients expect every server marked `status: active` to be actually installable or reachable. The reporter framed this as a census finding rather than a one-off complaint, implying a systemic validation gap (likely missing publish-time or periodic health checks) rather than a handful of stale entries.
- **[PR #1404](https://github.com/modelcontextprotocol/registry/pull/1404)** — the security-scan receipt extension reflects community interest in supply-chain trust signals for registry entries, building on prior design discussion in #1273.

## 5. Bugs & Stability

- **[Issue #1579](https://github.com/modelcontextprotocol/registry/issues/1579)** (Medium-High severity, data integrity) — 387 active-status servers have no `remotes` or `packages` field, meaning they are discoverable but functionally unusable by any client. This is not a crash but a correctness/trust issue at scale: it degrades the registry's core promise (that active listings are reachable) and could erode confidence in search/discovery results. No fix PR has been linked yet — this is a candidate for either a validation rule at publish time or a batch remediation/deprecation pass on the 387 affected records.

## 6. Feature Requests & Roadmap Signals

- **Security-scan receipt metadata (PR #1404)** is the clearest roadmap signal: an optional `_meta` extension letting publishers attach security-scan attestations to server entries. Given it resolves a previously-discussed proposal (#1273) and has multi-contributor buy-in (credited discussion from @JinNing6 and @HarperZ9), this looks likely to land as v1 of a broader trust/verification framework for the registry.
- Indirectly, **Issue #1579** points toward a likely future feature: automated validation/health-checking of `active` listings (e.g., rejecting or flagging publishes that lack both `remotes` and `packages`), which would close the gap the issue identifies.

## 7. User Feedback Summary

- The registry's core pain point surfaced today is **trust in listing accuracy** — the reporter behind #1579 is effectively saying "active" status is not a reliable signal of usability, which matters most to client/tooling authors that programmatically consume the registry.
- Publisher-side activity (PR #1600, a new server addition) suggests continued organic growth in registered servers, which — combined with #1579 — reinforces that data-quality tooling needs to scale alongside listing volume.
- No explicit satisfaction/dissatisfaction commentary beyond the bug report; sentiment signal is limited given low volume today.

## 8. Backlog Watch

- **[Issue #1579](https://github.com/modelcontextprotocol/registry/issues/1579)** — open since 2026-08-27, now 4 days old with active discussion but no maintainer-assigned fix or triage label mentioned. Given it affects 387 live registry entries, this warrants prioritized maintainer attention before it grows further (new active listings could keep adding to the affected set).
- **[PR #1404](https://github.com/modelcontextprotocol/registry/pull/1404)** — open since 2026-06-29 (~2 months), still unmerged despite apparent design consensus from the linked #1273 discussion. Worth flagging as a review-bandwidth backlog item rather than a design-disagreement stall.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-08-31)

## 1. Today's Overview

Awesome MCP Servers remains an extremely high-throughput curation repo: 153 PRs touched in the last 24 hours (128 open, 25 merged/closed) against just 3 new issues. Nearly all PR volume is auto-generated submission traffic (bot-tagged 🤖🤖🤖ammer with `has-emoji`/`valid-name`/`has-glama` labels), reflecting a semi-automated intake pipeline rather than organic contributor discussion — comment counts are `undefined`/0 across the board, meaning nothing is generating real maintainer or community engagement today. No new releases were published, which is expected since this is a curated list, not a software artifact with its own release cadence. Overall signal: healthy submission volume, but activity is dominated by bot-assisted listing churn rather than substantive review or discussion.

## 2. Releases

No new releases. Not applicable — this repository is a curated Markdown list, not a versioned package.

## 3. Project Progress

25 PRs closed/merged in the window, concentrated in a single contributor's batch of Russian-market MCP server submissions from user `atomnos` (org `atomno-mcp`, formerly `atomno-labs`):

- Closed (from original `atomno-labs` account, submitted 2026-07-14, closed today after ~6 weeks pending): [#10076](https://github.com/punkpeye/awesome-mcp-servers/pull/10076) mcp-trademarks, [#10065](https://github.com/punkpeye/awesome-mcp-servers/pull/10065) mcp-egrul, [#10069](https://github.com/punkpeye/awesome-mcp-servers/pull/10069) mcp-sudact, [#10068](https://github.com/punkpeye/awesome-mcp-servers/pull/10068) mcp-rosreestr, [#10073](https://github.com/punkpeye/awesome-mcp-servers/pull/10073) mcp-fssp, [#10072](https://github.com/punkpeye/awesome-mcp-servers/pull/10072) mcp-egrul (Security), [#10077](https://github.com/punkpeye/awesome-mcp-servers/pull/10077) mcp-sudact (Legal), [#10064](https://github.com/punkpeye/awesome-mcp-servers/pull/10064) mcp-fns-check, [#10079](https://github.com/punkpeye/awesome-mcp-servers/pull/10079) mcp-newbuild, [#10067](https://github.com/punkpeye/awesome-mcp-servers/pull/10067) mcp-zakupki.
- Immediately replaced with fresh PRs from the transferred `atomno-mcp` org today: [#13296](https://github.com/punkpeye/awesome-mcp-servers/pull/13296), [#13295](https://github.com/punkpeye/awesome-mcp-servers/pull/13295), [#13294](https://github.com/punkpeye/awesome-mcp-servers/pull/13294), [#13291](https://github.com/punkpeye/awesome-mcp-servers/pull/13291), [#13290](https://github.com/punkpeye/awesome-mcp-servers/pull/13290), [#13289](https://github.com/punkpeye/awesome-mcp-servers/pull/13289).

Net effect: this batch is an org-transfer rename/reconciliation (`atomno-labs/*` → `atomno-mcp/*`), not net-new functionality — same set of Russian legal/registry/procurement MCP servers (EGRUL, Rosreestr, FSSP, Sudact, Zakupki, FNS, trademarks) being re-submitted under a new GitHub org.

## 4. Community Hot Topics

No PR or issue in today's window carries meaningful comment/reaction activity — all listed items show 0 👍 and undefined/0 comments. The closest thing to a "hot" thread is the coordinated `atomno-mcp` re-submission wave described above (6 new PRs same day), which is process-driven rather than community-driven. Two other notable submissions worth watching for eventual discussion:

- [#13287](https://github.com/punkpeye/awesome-mcp-servers/pull/13287) — Aave MCP (official, maintained by Aave Labs) — a first-party DeFi protocol server, likely to attract review given "official" status.
- [#13258](https://github.com/punkpeye/awesome-mcp-servers/issues/13258) — NEX Agent Co., pitching an "autonomous AI agent company" exposing 11 paid x402 endpoints as one MCP server — an unusual monetized-agent submission that may draw maintainer scrutiny over scope/spam fit.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today. All 3 open issues are server-submission requests, not defect reports. No fix PRs applicable.

## 6. Feature Requests & Roadmap Signals

No feature requests against the list infrastructure itself. Submission issues effectively function as the "roadmap" (new servers to catalog):

- [#13268](https://github.com/punkpeye/awesome-mcp-servers/issues/13268) — BestPrice Shopping MCP (Greek e-commerce search/recommendations).
- [#13258](https://github.com/punkpeye/awesome-mcp-servers/issues/13258) — NEX Agent Co. x402 paid-endpoint MCP server.
- [#13226](https://github.com/punkpeye/awesome-mcp-servers/issues/13226) — OpticParse & PhishVision (vision scraping + phishing threat intel).

Given current merge patterns, expect the `atomno-mcp` Russian legal/registry cluster and Aave MCP ([#13287](https://github.com/punkpeye/awesome-mcp-servers/pull/13287)) to merge soon based on completeness of labels (`has-glama`, `valid-name`) — PRs missing `has-glama` (e.g. [#13292](https://github.com/punkpeye/awesome-mcp-servers/pull/13292), [#13287](https://github.com/punkpeye/awesome-mcp-servers/pull/13287)) or flagged `invalid-name` may need author follow-up before merge.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction feedback in today's data — no discussion comments on any issue or PR. Indirect signal: submitters are increasingly using automated quality badges (Glama score links) to strengthen submissions, and at least one contributor (`atomnos`) proactively reconciled stale PRs after a repo/org transfer rather than letting them go stale — a positive signal for submission hygiene, though the underlying friction (6-week wait before closure, requiring a full re-submission after an org rename) points to a pain point around PR staleness handling when upstream repos move.

## 8. Backlog Watch

- The `atomno-labs`→`atomno-mcp` cluster sat open for **~48 days** (2026-07-14 to 2026-08-31) before being closed and requiring re-submission — a queue-processing gap maintainers may want to address (e.g., faster triage or allowing PR retargeting instead of forcing new submissions).
- [#13268](https://github.com/punkpeye/awesome-mcp-servers/issues/13268), [#13258](https://github.com/punkpeye/awesome-mcp-servers/issues/13258), [#13226](https://github.com/punkpeye/awesome-mcp-servers/issues/13226) — all 3 open issues are same-day submissions with zero engagement so far; not yet backlog risks, but worth tracking if they age past the pattern seen with the `atomno-mcp` batch.
- With 128 PRs currently open against a repo that appears to process submissions in batches, sustained maintainer bandwidth for review/triage is the main scaling risk to monitor going forward.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
### 2026-08-31

---

## 1. Today's Overview

Activity in the last 24 hours was driven entirely by pull requests — no issues were opened or updated, and no new releases shipped. 35 PRs saw activity, with 32 still open and 3 merged/closed (only one of the closed PRs, #4855, appears in the available top-20 data). The open PR queue is dominated by new-server submission requests (roughly 15 of the top 20), reflecting the registry's typical high-volume, low-friction contribution pattern rather than any core engineering push. None of the sampled PRs show comment or reaction activity, so today reads as a routine, high-throughput but low-discussion day for the registry — health looks stable, with the main signal being registry growth (many candidate servers) rather than bug-fixing or maintenance.

## 2. Releases

None. No new releases in this period.

## 3. Project Progress

Only one closed/merged item is visible in the provided data:

- **[#4855 — Add DC Hub remote MCP server](docker/mcp-registry PR #4855)** (closed, opened and closed same day, 2026-08-31). Notably, the same author (`azmartone67`) has a separate, still-open PR for essentially the same server — **[#4644 — Add DC Hub — remote MCP server (data-center & energy intelligence)](docker/mcp-registry PR #4644)**, open since 2026-08-06. This looks like a duplicate submission that was closed in favor of the earlier, still-pending PR.

The other 2 merged/closed PRs referenced in the overview counts aren't included in the top-20-by-comments sample, so their content can't be assessed from this data.

## 4. Community Hot Topics

No PR or issue in the sampled data shows nonzero comments or reactions (all listed as `undefined`/`0`), so there is no clear "most discussed" item today by engagement metrics. Instead, the notable pattern is **volume of new-server submissions**, all opened today (2026-08-31):

- [#4860 — Add cloud-tools](docker/mcp-registry PR #4860) (multi-cloud cost/inventory analysis: AWS, GCP, Cloudflare, OVH)
- [#4859 — Add Truth Bear (GAUGE)](docker/mcp-registry PR #4859) (government-sourced fact verification, Bitcoin-anchored)
- [#4858 — Add mobile-mcp (Mobile Next)](docker/mcp-registry PR #4858) (mobile device automation for AI agents)
- [#4857 — Add page2ai](docker/mcp-registry PR #4857) (web-to-Markdown, MIT, zero-telemetry)
- [#4856 — Add Perception](docker/mcp-registry PR #4856) (digital-asset narrative intelligence, 31 tools)
- [#4854 — Add Ava](docker/mcp-registry PR #4854) (cross-chain crypto execution agent)
- [#4853 — Add Vaanzari Commerce](docker/mcp-registry PR #4853) (e-commerce/shopping workflows)

The underlying need this reflects: MCP is increasingly being used as the integration surface for **finance/crypto tooling** (cloud-tools, QuantJourney, SNACS Data, Ava) and **agent-facing automation** (mobile-mcp, page2ai), suggesting growing demand for domain-specific data/action connectors rather than general-purpose servers.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions were logged in the last 24 hours (0 issues total). No stability concerns to flag today.

## 6. Feature Requests & Roadmap Signals

No explicit "feature request" issues were filed. The closest roadmap signal comes from the pattern of submissions themselves — new-server PRs increasingly specify **remote (streamable-http)** as the transport of choice over Docker-built containers (e.g., #4859, #4857, #4856, #4854, #4853, #4705), suggesting the registry's remote-server pathway (referenced as "format follows the merged remote-server PR #4686") is becoming the default onboarding route for hosted/SaaS MCP servers rather than containerized ones. Expect continued growth in remote-type registrations relative to Docker-built ones in upcoming cycles.

## 7. User Feedback Summary

No direct user feedback (issue comments, satisfaction signals) is present in today's data — the issue tracker was silent. PR descriptions from submitters emphasize positioning/differentiation (e.g., "MIT, zero-telemetry" for page2ai; "no OAuth needed to review" for DC Hub; "official MCP registry identity" cross-references for Perception and Ava), suggesting submitters are optimizing for maintainer review speed and trust signals rather than reporting pain points with the registry itself.

## 8. Backlog Watch

Several automated `mcp-registry-bot` pin-update PRs have been open for extended periods and warrant maintainer attention for triage/merge or closure:

- **[#788 — chore: update pin for omi](docker/mcp-registry PR #788)** — open since 2025-11-26 (over 9 months), still updated today but unmerged. The oldest and most notable backlog item.
- **[#4380 — chore: update pin for grafana](docker/mcp-registry PR #4380)** — open since 2026-07-10 (~7 weeks).
- **[#4467 — chore: update pin for edubase](docker/mcp-registry PR #4467)** — open since 2026-07-18.
- **[#4521 — chore: update pin for couchbase](docker/mcp-registry PR #4521)** — open since 2026-07-23.
- **[#4579 — chore: update pin for fetch](docker/mcp-registry PR #4579)** — open since 2026-07-30.
- **[#4409 — chore: update pin for buildkite](docker/mcp-registry PR #4409)** — open since 2026-07-13.
- **[#4094 — chore: update pin for temporal](docker/mcp-registry PR #4094)** — open since 2026-06-27 (~9 weeks).

These bot-generated PRs accumulating without merge suggest either a review-capacity bottleneck or a policy gap for auto-merging low-risk pin updates — worth flagging to maintainers. Separately, **[#4644 — Add DC Hub](docker/mcp-registry PR #4644)**, open since 2026-08-06, remains unresolved despite its duplicate (#4855) already being closed — a candidate for maintainer decision (merge, request changes, or close).

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) — Daily Digest: 2026-08-31

## 1. Today's Overview

Activity is moderate but concentrated: 3 open issues and 5 PRs touched in the last 24h, with no new releases. The bulk of PR traffic is routine maintenance — automated SHA bumps and a version-metadata fix — rather than net-new capability, though one new plugin submission (flashgate) and two same-day bug-fix PRs suggest the community is actively responding to freshly filed issues. Notably, two of today's issues (#5708, #5707) were opened and already have corresponding fix PRs submitted within the same day, indicating a healthy, fast feedback loop for skill/hook-authoring bugs. Overall project health looks stable and reactive rather than stalled.

## 2. Releases

None today.

## 3. Project Progress

- **PR #5715** (closed) — "Add version to the 6 plugins that still resolve to 'unknown'" by @fldndjs. Directly addresses issue #1758 (open since 2026-05-07), fixing the versioned-cache bug referenced in #1050 where unversioned plugins skip re-extraction and silently stop receiving marketplace updates.
- **PR #5709** (closed) — "fix(skill-creator): measure skill triggers reliably on Windows" by @forest-savage1234. Fixes the same-day-filed #5708 by registering real temporary skills under `.claude/skills/` and reading stdout via a background thread/queue for Windows pipe compatibility.
- **PR #5712** (closed) — "Add flashgate plugin (hardware-in-the-loop verification gate)" by @Lion-1209. New plugin submission for firmware developers — enforces real-hardware build/flash/verify checks via a Stop hook.
- **PR #5711 / #5710** (open) — automated SHA bumps for `pixeltable` and `base44`, both pre-validated via `claude plugin validate` CI runs.

## 4. Community Hot Topics

- [Issue #1758 — Multiple plugins lack `version` field](https://github.com/anthropics/claude-plugins-official/issues/1758) — most engagement today (4 comments, 👍2), long-running since May. Underlying need: reliable version pinning so `claude plugin list` and the update cache don't silently break plugin updates. Largely resolved today by PR #5715.
- [PR #5715 — Add version to 6 plugins](https://github.com/anthropics/claude-plugins-official/pull/5715) and [PR #5709 — Windows skill-trigger fix](https://github.com/anthropics/claude-plugins-official/pull/5709) show the community's focus today is on **plugin infrastructure reliability** (versioning, cross-platform tooling) rather than new features.

## 5. Bugs & Stability

Ranked by severity:

1. **[#5707 — hookify rules never fire (cwd-relative glob bug)](https://github.com/anthropics/claude-plugins-official/issues/5707)** — High severity: silently breaks all `PreToolUse`/`PostToolUse`/`Stop`/`UserPromptSubmit` hook rule-loading because `load_rules()` resolves paths relative to CWD instead of the plugin's own directory. **No fix PR yet** — open and unaddressed.
2. **[#5708 — skill-creator reports false-positive scores + Windows failures](https://github.com/anthropics/claude-plugins-official/issues/5708)** — Medium-high: the description optimizer reports plausible scores without actually measuring skill triggering (structural 0% recall), plus two Windows-specific crashes. **Fix PR submitted same day**: [#5709](https://github.com/anthropics/claude-plugins-official/pull/5709).
3. **[#1758 — "unknown" version causing stale plugin cache](https://github.com/anthropics/claude-plugins-official/issues/1758)** — Medium, long-standing (since May): affects update delivery for 6+ plugins. **Fix PR submitted**: [#5715](https://github.com/anthropics/claude-plugins-official/pull/5715).

## 6. Feature Requests & Roadmap Signals

- No explicit new feature requests today; activity is dominated by bug fixes and a new plugin submission (flashgate).
- **flashgate** ([PR #5712](https://github.com/anthropics/claude-plugins-official/pull/5712)) signals growing interest in hardware/embedded-systems verification workflows (build → flash → board-report loop) as a plugin category — worth watching if similar hardware-in-the-loop plugins follow.
- Given the pace of automated SHA-bump PRs (#5711, #5710), the marketplace's auto-update/validation pipeline appears to be an ongoing area of infrastructure investment, likely continuing incrementally rather than producing a discrete "next version."

## 7. User Feedback Summary

- Real pain points center on **developer experience friction with tooling reliability**: version metadata gaps causing stale caches (#1758), hook path-resolution bugs silently breaking automation (#5707), and misleading self-reported quality metrics in the skill-creator loop (#5708).
- No explicit satisfaction signals today, but the same-day turnaround from issue to fix PR (#5708→#5709, #1758→#5715) reflects positively on maintainer/contributor responsiveness.
- Windows compatibility is a recurring friction point (#5708 cites "two separate bugs make it fail outright on Windows"), suggesting cross-platform testing coverage may be a gap worth prioritizing.

## 8. Backlog Watch

- **[Issue #5707 — hookify glob bug](https://github.com/anthropics/claude-plugins-official/issues/5707)** — filed 2026-08-30, still open with no comments or linked fix PR as of this digest. Given it silently breaks all hook-based rule loading, this warrants prompt maintainer attention despite its youth.
- **[Issue #1758](https://github.com/anthropics/claude-plugins-official/issues/1758)** — open since 2026-05-07 (~4 months), though now largely addressed by PR #5715; worth confirming closure once that PR merges.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest
**Date:** 2026-08-31

## 1. Today's Overview

Activity over the last 24 hours was light and entirely issue-driven: 6 issues touched (5 open, 1 closed), zero PRs, and no new releases — consistent with this repository's nature as a curated awesome-list rather than a software project with a release cadence. Five of the six issues are resource-submission requests (the standard workflow for getting a tool listed), and one is a same-day rejected self-promotion pitch. Overall health signal: steady, low-friction submission throughput (most issues get at least one maintainer/bot comment within hours), with no bug reports, regressions, or PR backlog to flag. The submission queue looks the main "workload" the project has to manage right now.

## 2. Releases

None today.

## 3. Project Progress

No PRs were opened, merged, or closed today, so there's no code-level progress to report. The only closed item was an issue (see below), not a merge.

## 4. Community Hot Topics

Engagement is uniformly low (1–2 comments per issue, 0 reactions across the board), so nothing rose to "hot" by volume. The most notable item by content rather than comment count:

- **[#2681](https://github.com/hesreallyhim/awesome-claude-code/issues/2681) — "NEX Agent Co. — alternative to Claude Code: 9-agent open-source CEO loop, 7 Ollama models, x402 USDC paywall"** (closed same day, 1 comment). A self-promotional pitch positioning a commercial/paywalled multi-agent product as a Claude Code "alternative." Same-day open→close suggests it was declined as out-of-scope or as spam — awesome-lists like this one typically reject submissions that aren't genuinely Claude-Code-specific tooling or that carry paywalled/commercial framing.
- **[#2241](https://github.com/hesreallyhim/awesome-claude-code/issues/2241) — "Emulo"** carries the most comments (2) of any open issue, likely maintainer back-and-forth on the submission (it's been open since 2026-07-13 — see Backlog Watch).

The underlying need visible here: contributors want their Claude Code-adjacent tools discovered via this list, and the maintainer(s) are gatekeeping for genuine relevance vs. promotional noise.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. This is expected — the repo is a curated list/documentation project, not a runtime application, so this section is largely inapplicable on a day-to-day basis.

## 6. Feature Requests & Roadmap Signals

One structural suggestion stands out from the resource submissions:

- **[#2657](https://github.com/hesreallyhim/awesome-claude-code/issues/2657) — "Add SandBase CLI to Providers and Runtime Infrastructure"** proposes listing an Apache-2.0 CLI/MCP bridge that connects 25 clients to 2,000+ AI models/APIs (OAuth, diagnostics, rollback). If accepted, this would land as a new entry under the existing "Providers, Runtime & Integration Infrastructure" category rather than a new list section — low-risk, incremental addition.

No roadmap or repo-tooling feature requests were filed today; all "features" requested are new list entries, not changes to the list's own mechanics.

## 7. User Feedback Summary

- Contributors are actively using the resource-submission template correctly (structured `Display Name` / `Category` / `Link` / `Description` fields) for #2241, #2682, #2680, and #2679, suggesting the submission process itself is well understood and low-friction.
- One submitter (#2680) left the issue title as the unedited placeholder ("`<name of your resource>`"), a minor template-hygiene gap worth a maintainer nudge but not indicative of a deeper problem.
- The rejected #2681 submission signals a recurring moderation need: distinguishing genuine Claude Code ecosystem tools from adjacent/competing products using the list for exposure.

## 8. Backlog Watch

- **[#2241 — Emulo](https://github.com/hesreallyhim/awesome-claude-code/issues/2241)**: open since 2026-07-13 (~7 weeks), still active today with 2 comments — the oldest unresolved item in this batch and the one most needing a maintainer decision (accept/reject) to close out.
- The four newer resource-submission issues (#2657, #2682, #2680, #2679), all opened within the last 3 days, aren't yet backlogged but are worth tracking — if they follow #2241's pattern, they may sit for weeks awaiting triage.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**2026-08-31**

## 1. Today's Overview

Activity today is entirely contribution-driven: **0 issues** and **0 releases**, but **8 open pull requests** — all new skill submissions — were created or updated in the last 24 hours, with zero merges or closures. This is a curated "awesome list" repo, so its health signal is submission velocity and maintainer review throughput rather than code changes. The steady stream of well-structured PRs (each following the CONTRIBUTING template with placement rationale, licensing, and README/SKILL.md verification) suggests a healthy, growing contributor community. However, the complete absence of merge/close activity today is a mild backlog signal worth watching — see §8.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours — all 8 tracked PRs remain open and unreviewed. No feature or listing changes have landed yet; today's "progress" is entirely on the submission side (see §4).

## 4. Community Hot Topics

All items are net-new submissions with no comments or reactions yet, so there's no engagement differentiation today. By submission theme, the most active category is **Community Skills additions**, spanning several sub-niches:

- **Engineering workflow tooling**: [PR #990 — Hahaknight/claude-skills-pro](https://github.com/VoltAgent/awesome-agent-skills/pull/990) (15-skill pack: PR review, root-cause debugging, mutation-checked test gen, DB migrations, refactors)
- **Security tooling**: [PR #986 — rz-x/Understand-JS-malware-skills-tools-set](https://github.com/VoltAgent/awesome-agent-skills/pull/986) (5-skill malware analysis set), [PR #984 — memory-shield](https://github.com/VoltAgent/awesome-agent-skills/pull/984) (agent memory poisoning defense)
- **Marketing/content generation**: [PR #991 — sepia](https://github.com/VoltAgent/awesome-agent-skills/pull/991), [PR #989 — beatra-ai/beatra-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/989)

The clustering around engineering-workflow and security skills suggests contributors are gravitating toward "agent as senior engineer" use cases rather than purely generative ones — a possible underlying need for more rigorous, review-gated coding agents.

## 5. Bugs & Stability

No bug reports, crashes, or regressions today (0 issues opened/updated). Notably, [PR #984 — memory-shield](https://github.com/VoltAgent/awesome-agent-skills/pull/984) is itself framed as a *stability/security* contribution — it addresses agent memory poisoning, a class of vulnerability rather than a bug — and claims CI-verified "SkillQA grade A." No fix PRs are needed since there are no open bug reports.

## 6. Feature Requests & Roadmap Signals

There are no explicit feature-request issues today, but PR submissions act as de facto feature signals for the catalog itself:

- Expansion into **AI security/defense skills** (memory-shield, JS-malware analysis) — likely candidates for a new or expanded "Security" subcategory given two submissions in this space on the same day.
- **Design/content tooling**: [PR #988 — Kayforkind/reimagine-it](https://github.com/VoltAgent/awesome-agent-skills/pull/988) (Content-Derived Design CLI) and [PR #985 — blitzsicht/falzmarke](https://github.com/VoltAgent/awesome-agent-skills/pull/985) (DIN 5008 business letter formatting) both target document/design generation from structured content.
- **Task orchestration**: [PR #987 — ssheleg/task-pipeline](https://github.com/VoltAgent/awesome-agent-skills/pull/987) proposes a gated multi-stage pipeline for large repo changes — a pattern likely to recur as agent-driven refactors scale.

Given the volume of security-related submissions, a dedicated "Security" section reorganization is a plausible near-term maintainer action.

## 7. User Feedback Summary

No direct user feedback (issues, comments, reactions) was recorded today. Indirect signal comes from contributor-authored PR descriptions, which consistently emphasize licensing clarity (MIT), public availability, and documentation completeness (README + SKILL.md) — suggesting the maintainer community has established (and contributors are self-policing to) a de facto quality bar even without visible pushback yet.

## 8. Backlog Watch

All **8 open PRs are unreviewed with zero comments**, including the oldest of today's batch:
- [PR #984 — memory-shield](https://github.com/VoltAgent/awesome-agent-skills/pull/984) and [PR #985 — blitzsicht/falzmarke](https://github.com/VoltAgent/awesome-agent-skills/pull/985), both opened 2026-08-30, are now over 24h old with no maintainer response.

Since no merges or closures occurred today at all, this is worth flagging as an emerging review-latency pattern rather than an isolated case — if submission volume (8/day) continues to outpace review throughput (0/day observed today), the PR queue will compound. Recommend maintainer attention to triage cadence, particularly for the security-tooling submissions (#984, #986) given their higher-trust-impact nature.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
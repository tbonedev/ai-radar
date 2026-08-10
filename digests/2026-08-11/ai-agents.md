# MCP Ecosystem Digest 2026-08-11

> Issues: 1 | PRs: 8 | Projects covered: 7 | Generated: 2026-08-10 22:29 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-08-11)

## Today's Overview
A quiet day by merge volume: 1 issue and 8 PRs saw activity in the last 24h, but **zero** merges, closes, or releases. The PR queue is dominated by a security-hardening cluster — three separate SSRF-related fixes across the `fetch` and `everything` reference servers — alongside a large SDK v2 migration (#4551) and a new contribution-policy automation PR (#4528) that will reshape how new-server submissions are handled going forward. Community submissions (two resource-list additions) continue to trickle in even as maintainers signal they want new server implementations routed to the separate MCP Registry rather than this repo. Overall: active security review in flight, but throughput (merges) is currently at a standstill.

## Project Progress
No PRs merged or closed today, so nothing landed — but three workstreams are visibly advancing toward merge-readiness:
- **SSRF hardening** — [#4497](https://github.com/modelcontextprotocol/servers/pull/4497) (fetch server) and [#4498](https://github.com/modelcontextprotocol/servers/pull/4498) (everything server, `gzip-file-as-resource`) both block requests to internal/metadata IPs; [#4622](https://github.com/modelcontextprotocol/servers/pull/4622) is a same-day follow-up closing a redirect-bypass gap in #4498's allowlist logic.
- **Protocol modernization** — [#4551](https://github.com/modelcontextprotocol/servers/pull/4551) migrates `everything` to scoped SDK v2 packages and adds protocol revision 2026-07-28 alongside legacy revisions, targeting the `v2/main` branch rather than `main`.
- **Contribution governance** — [#4528](https://github.com/modelcontextprotocol/servers/pull/4528) adds CI automation to auto-close new-server PRs and triage new-server issues, formalizing the existing CONTRIBUTING.md policy.

## Community Hot Topics
Engagement is thin today; the only item with measurable interaction is:
- [Issue #1590 — Whitespace issues in filesystem server](https://github.com/modelcontextprotocol/servers/issues/1590) (1 comment, open since 2025-04-26). The underlying need: users want the filesystem server to avoid emitting trailing whitespace on writes, since it trips linters and forces the assistant into multi-iteration cleanup loops — a workflow-friction complaint rather than a crash.

PR discussion volume isn't reported by the API for this fetch, so no comment-based ranking is available for the 8 PRs — activity there is best read from update recency (all 8 touched today or in the past week).

## Bugs & Stability
Ranked by severity:
1. **SSRF exposure (fetch + everything servers)** — highest severity. [#4497](https://github.com/modelcontextprotocol/servers/pull/4497) and [#4498](https://github.com/modelcontextprotocol/servers/pull/4498) show the `fetch` tool and `gzip-file-as-resource` tool issued server-side requests to caller/model-supplied URLs with no host validation — a classic SSRF vector that can reach cloud metadata endpoints. [#4622](https://github.com/modelcontextprotocol/servers/pull/4622) shows even the fixed allowlist in #4498 didn't re-validate on redirect hops. Fix PRs exist for all three variants but none are merged yet.
2. **Trailing whitespace in filesystem server** ([#1590](https://github.com/modelcontextprotocol/servers/issues/1590)) — low severity, no fix PR currently linked.

## Feature Requests & Roadmap Signals
- **SDK v2 / dual protocol-era support** (#4551) is the clearest roadmap signal: supporting protocol revision 2026-07-28 alongside legacy revisions (2024-10-07…2025-11-25) in one codebase suggests the next release targets broader client compatibility during the v2 transition.
- **Stricter contribution funnel** (#4528): once merged, new reference-server PRs will be auto-closed with a pointer to the MCP Registry. This directly foreshadows the fate of [#4453 — Exogram Authority Runtime reference server](https://github.com/modelcontextprotocol/servers/pull/4453), which is likely to be redirected rather than merged.
- **Resource-list growth** ([#4625](https://github.com/modelcontextprotocol/servers/pull/4625) tooltrim gateway, [#4624](https://github.com/modelcontextprotocol/servers/pull/4624) Open Index) reflects organic ecosystem tooling growth around MCP even as the core repo tightens what it will host directly.

## User Feedback Summary
- **Pain point**: filesystem server's whitespace handling forces manual, iterative cleanup (#1590) — a productivity/trust issue for linted codebases.
- **Security-conscious usage**: the SSRF PRs read as proactive hardening (redirect hops, metadata IPs) rather than reactive incident response, suggesting security-minded contributors are stress-testing edge cases ahead of exploitation.
- **Ecosystem enthusiasm**: two independent contributors submitted resource-list additions same-day, indicating continued third-party tool-building around MCP despite the narrowing contribution policy for reference servers.

## Backlog Watch
- [Issue #1590](https://github.com/modelcontextprotocol/servers/issues/1590) — open **15+ months** (since 2025-04-26) with only 1 comment; needs maintainer triage or an explicit "won't fix" if it's low priority.
- [PR #4453 — Exogram reference server](https://github.com/modelcontextprotocol/servers/pull/4453) — open since 2026-07-01, likely to be swept up by #4528's auto-close automation once merged; author would benefit from an explicit heads-up rather than a silent auto-close.
- [PR #4551 — SDK v2 migration](https://github.com/modelcontextprotocol/servers/pull/4551) — a significant architectural change open since 2026-07-26 targeting a non-default branch; worth watching for review bandwidth given its scope.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison — MCP & Claude Code Communities
**2026-08-11**

## 1. Ecosystem Overview

The MCP/Claude Code open-source ecosystem is in a curation-and-hardening phase rather than a feature-race: the reference `MCP Servers` repo is absorbing a coordinated SSRF security review, while three separate "awesome list" and registry projects (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code) are drowning in submission volume that maintainer bandwidth can't fully absorb. A clear architectural split is emerging between **local/stdio MCP servers** and **remote, authenticated, monetizable servers** (Docker registry sees 3/6 new submissions as `streamable-http`, several gated by Bearer tokens or x402/USDC pay-per-call). Governance is also tightening: the core `servers` repo is actively building automation (#4528) to redirect new-server PRs to the separate MCP Registry, formalizing a hub-and-spoke model. Meanwhile, Claude Plugins' marketplace has a recurring, unresolved "published but not listed" bug that's now surfaced twice from independent authors, suggesting a systemic gap between the ecosystem's rapid submission growth and its review/publish tooling.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Open PR Backlog | Release | Health Score |
|---|---|---|---|---|---|---|
| MCP Servers (core) | 1 | 8 | 0 | 8 | None | 6/10 |
| MCP Registry (official) | 1 | 10 | 9 | 1 | None | 8/10 |
| Awesome MCP Servers | 4 | 113 | 31 | 82 | None | 5/10 |
| Docker MCP Registry | 0 | 14 | 2 | 12 | None | 5/10 |
| Claude Plugins (official) | 3 | 40 | 38 | 2 | None | 6/10 |
| Awesome Claude Code | 10 | 0 | 0 | — (10 issue queue) | None | 6/10 |
| Awesome Agent Skills | 0 | 3 | 0 | 3 | None | 5/10 |

Health scoring weighs merge-to-open ratio, backlog age, and whether open bugs/issues have linked fixes — not raw volume. MCP Registry scores highest on fast, substantive turnaround (5 real fixes + docs same-day); Awesome MCP Servers and Docker MCP Registry score lower purely on submission-inflow-outpacing-review, not code quality.

## 3. MCP Servers' Position

**Advantages vs. peers:** As the reference implementation repo, MCP Servers is the only project in this set doing active *security engineering* rather than list curation or dependency housekeeping — three independent SSRF fixes (including a redirect-bypass follow-up within the same day) signal a maturing, adversarial review culture the awesome-list repos structurally can't replicate.

**Technical approach differences:** Where Awesome MCP Servers and Docker MCP Registry are optimizing for *intake throughput* (linters, bot auto-tagging, pin-update automation), MCP Servers is optimizing for *code correctness* — SDK v2 migration (#4551) and dual protocol-revision support are architecture work, not listing hygiene.

**Community size comparison:** By raw submission volume, MCP Servers is dramatically smaller than Awesome MCP Servers (8 PRs vs. 113) — a direct consequence of its own governance shift (#4528) pushing new-server contributions out to the Registry and awesome-lists rather than accepting them directly. It's deliberately shrinking its intake surface to protect code quality.

## 4. Shared Technical Focus Areas

- **Security hardening as a cross-cutting concern**: MCP Servers (SSRF/redirect validation, 3 PRs) is the most acute example, but Awesome Claude Code's #886 (verifying agent self-reported test results against git state) reflects the same underlying trust-but-verify instinct applied to agent behavior rather than network requests.
- **Governance/contribution-funnel tightening**: MCP Servers (#4528 auto-close policy) and Docker MCP Registry (public-repo requirement blocking #1102) are both narrowing what gets merged directly, pushing volume toward registries and curated lists.
- **Remote/hosted, authenticated MCP servers**: Docker MCP Registry (Scalix World, GTM LinkedIn, Bot Wire — 3 of 6 submissions) and Awesome MCP Servers (4 x402/USDC pay-per-call submissions same day) both show the same shift from local stdio wrappers to monetized remote services.
- **Publish/visibility pipeline reliability**: MCP Registry's org-namespace 403 bug (#1468, 9 comments) and Claude Plugins' "published but not in marketplace" bug (#1272 → #5111, recurring) are the same failure mode — a broken bridge between "submission accepted" and "actually discoverable" — appearing independently in two different registries.
- **Gateway/token-cost tooling**: Awesome MCP Servers surfaces two gateway submissions in one day (tooltrim: 94-99% token reduction; all-apis-gateway), pointing to context-cost control as an emerging must-have layer in front of MCP servers.

## 5. Differentiation Analysis

| Dimension | MCP Servers / Registry | Awesome-list repos | Claude Plugins |
|---|---|---|---|
| Primary artifact | Reference code + registry metadata | Curated pointers, no code | Marketplace-distributed plugins |
| Review bottleneck | Security/architecture review | Maintainer triage bandwidth | CI validation (automated, fast) |
| Target user | Server implementers, SDK consumers | Discovery-seeking developers | Claude Code end users |
| Growth vector | Governance-gated (shrinking intake) | Organic, high-volume, low-friction | Bot-automated dependency hygiene + curated submissions |

The clearest architectural divergence: Claude Plugins has effectively solved its *maintenance* throughput problem (39/40 PRs closed via bot automation) but not its *product* problem (marketplace listing reliability), while the awesome-list repos have the inverse — no automation bottleneck on merge mechanics, just raw reviewer capacity.

## 6. Community Momentum & Maturity

- **Rapidly iterating**: MCP Registry (fast same-day fix turnaround, active single-maintainer sweep) and Claude Plugins (dozens of bot-validated PRs/day) — both show tight feedback loops, though for different reasons (human responsiveness vs. automation).
- **High-volume, bottlenecked**: Awesome MCP Servers (113 touched, 82 still open) and Docker MCP Registry (aged bot PRs at 8.5 months) — submission growth is outpacing review capacity; this is a *scaling* problem, not a health problem.
- **Stabilizing / low-churn**: Awesome Agent Skills (3 PRs, zero engagement yet) and Awesome Claude Code (pure intake queue, no code) — steady but unremarkable, too early to call momentum either way.
- **Security-focused, deliberately slow**: MCP Servers core — zero merges today is a *feature* of careful SSRF review, not stagnation.

## 7. Trend Signals

1. **Agentic commerce is arriving via MCP**: four independent x402/USDC pay-per-call submissions to Awesome MCP Servers in a single day is a concrete leading indicator — developers should expect "metered MCP tool calls" to become a standard integration pattern within the year, not a novelty.
2. **Trust verification is becoming its own tooling category**: Awesome Agent Skills' #886 (auditing agent self-reported test results) and the general SSRF-hardening wave both reflect a maturing ecosystem moving from "can the agent do X" to "can we verify X actually happened" — developers building agent pipelines should budget for independent verification layers, not just capability.
3. **Registry/marketplace discoverability is an unsolved cross-cutting bug class**: two unrelated projects (MCP Registry, Claude Plugins) hit the same "accepted but not visible" failure independently — teams building their own plugin/extension marketplaces should treat publish-status propagation as a first-class reliability concern, not an edge case.
4. **Remote-hosted MCP servers are becoming the default for commercial integrations**: Docker MCP Registry's submission mix (half remote/authenticated) signals that local-only stdio servers may increasingly be the exception for production/business use cases going forward.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest, 2026-08-11

## 1. Today's Overview

Activity today was maintenance-focused rather than feature-driven: no new releases, but 9 of 10 updated PRs closed (mostly merged) and one remained open. A single contributor, **rdimitrov**, drove a broad documentation-accuracy sweep (6 PRs) alongside a functional bug fix to the admin takedown tooling. One low-effort community PR (a third-party MCP server submission) was rejected as `[invalid]`. The registry's only active issue — a three-week-old organization-namespace publishing bug — remains unresolved despite sustained engagement (9 comments, 3 👍). Overall project health looks solid: fast PR turnaround, an engaged maintainer, but one lingering permissions bug affecting real publishers.

## 2. Releases

None today.

## 3. Project Progress

**Documentation accuracy sweep** (all by rdimitrov, all closed today):
- [#1522](https://github.com/modelcontextprotocol/registry/pull/1522) — removed the stale 2,944-line `complete.md` (31% of all doc lines) and its remaining references.
- [#1520](https://github.com/modelcontextprotocol/registry/pull/1520) — fixed stale contributor prerequisites (README said Go 1.24.x vs. actual `go 1.26` in go.mod), deduplicated version references.
- [#1521](https://github.com/modelcontextprotocol/registry/pull/1521) — corrected deploy config parameter names (e.g., `gcpProjectId` → `gcp:project`) that didn't match actual code.
- [#1511](https://github.com/modelcontextprotocol/registry/pull/1511) — added `cargo`/`crates.io` to schema examples, catching docs up to the cargo registry type shipped in v1.8.0.
- [#1517](https://github.com/modelcontextprotocol/registry/pull/1517) — fixed broken relative links in `releasing.md` (wrong `../../../` depth causing 404s).

**Bug fixes:**
- [#1519](https://github.com/modelcontextprotocol/registry/pull/1519) — fixed `mcp-publisher` docs where the ECDSA P-384 login tab silently ran the Ed25519 command (real functional footgun for anyone following the ECDSA instructions); also fixed `validate --help`.
- [#1518](https://github.com/modelcontextprotocol/registry/pull/1518) — fixed the admin takedown script and runbook, which sent `PUT ?status=deleted` to endpoints that only accept `PATCH` — the script could not have worked as documented.

**Dependencies:**
- [#1514](https://github.com/modelcontextprotocol/registry/pull/1514) — dependabot bump of `go-git/v6` (alpha.4 → alpha.5), merged.

**Rejected:**
- [#1516](https://github.com/modelcontextprotocol/registry/pull/1516) — third-party "Kairos Signal" DePIN telemetry MCP server submission, closed as `[invalid]`.

## 4. Community Hot Topics

[**#1468**](https://github.com/modelcontextprotocol/registry/issues/1468) — *"Unable to publish under GitHub organisation namespace despite organisation ownership"* — by far the most active item (9 comments, 3 👍, open since 2026-07-20). A confirmed org owner (qatouch) gets a 403 from `mcp-publisher publish` even though `validate` passes and ownership is verified. This points to a permissions-check bug specific to org-owned namespaces in the publish flow — likely affects other organizations, not just this reporter, which is probably why it's drawing sustained comment traffic.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#1468](https://github.com/modelcontextprotocol/registry/issues/1468)** (open, unresolved) — org-namespace publish blocked by a 403 despite valid ownership. Highest severity: it fully blocks a legitimate publishing workflow. No linked fix PR yet.
2. **[#1515](https://github.com/modelcontextprotocol/registry/pull/1515)** (open PR) — server `$schema` not normalized to current version on read; entries published under older schemas keep their publish-time `$schema` tag even though the payload is re-serialized to current shape. Breaks strict clients like VS Code's `chat.mcp.gallery.serviceUrl`. Fix is up but not yet merged.
3. **[#1519](https://github.com/modelcontextprotocol/registry/pull/1519)** (fixed, merged) — ECDSA P-384 login instructions were non-functional as documented.
4. **[#1518](https://github.com/modelcontextprotocol/registry/pull/1518)** (fixed, merged) — admin takedown script used the wrong HTTP verb/params and could not execute successfully.

## 6. Feature Requests & Roadmap Signals

No new feature-request issues surfaced today. Signals instead point to **schema-versioning cleanup** as an active workstream: #1515's normalize-on-read fix and #1511's cargo/crates.io schema example addition both touch the server.json schema layer. Prediction: the next patch likely bundles the #1515 schema-normalization fix, and the org-namespace publish permission issue (#1468) is a strong candidate for prioritization given its age and reproducibility.

## 7. User Feedback Summary

- **Pain point:** org-namespace publishing is broken for at least one verified organization owner (#1468) — a hard blocker, not a cosmetic issue.
- **Pain point:** downstream tooling (VS Code's MCP gallery) is sensitive to schema-version drift (#1515), indicating registry API consumers expect strict `$schema` conformance and will fail closed when it's wrong.
- **Signal:** the registry continues to attract low-quality/self-promotional submissions (#1516), requiring ongoing maintainer triage effort.
- **Positive:** maintainer responsiveness looks strong — same-day doc and bug fixes across six PRs from one contributor.

## 8. Backlog Watch

- **[#1468](https://github.com/modelcontextprotocol/registry/issues/1468)** — open 3 weeks, 9 comments, no fix PR yet. Needs maintainer resolution; ownership is already verified, so this looks actionable rather than blocked on the reporter.
- **[#1515](https://github.com/modelcontextprotocol/registry/pull/1515)** — open fix for schema normalization affecting client compatibility; worth fast-tracking given downstream breakage (VS Code gallery).

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-08-11)

## 1. Today's Overview

Awesome MCP Servers saw a very high-churn day typical of a fast-growing curated list: **4 issues** (1 open, 3 closed) and **113 PRs** touched in 24h (82 open, 31 merged/closed), against **0 releases** — expected, since this repo ships no code, only a curated Markdown list. The PR volume is almost entirely new-server submission requests (`Add X to <category>`), the vast majority opened same-day by first-time contributors. Activity level: **high but shallow** — lots of inbound listings, very little discussion (most issues/PRs show 0-1 comments), suggesting the review bottleneck is maintainer bandwidth, not community debate.

## 2. Releases

None today.

## 3. Project Progress

31 PRs were merged/closed today, but the raw feed doesn't distinguish accepted vs. rejected. One concrete signal: **[#7596](https://github.com/punkpeye/awesome-mcp-servers/pull/7596)** (`Update infomaniak-mcp-agent: 54 → 81 tools`) was closed and auto-tagged `duplicate` + `manual-review` — the automated linter correctly caught a stale re-submission rather than letting it merge blind. Beyond that, the bulk of "progress" is listing hygiene: new entries queued across Social Media, Finance & Fintech, Developer Tools, Knowledge & Memory, Research, Text-to-Speech, and Aggregators.

## 4. Community Hot Topics

Discussion volume is thin (max 1 comment on any item today), so "hot" here means *pattern*, not thread depth:

- **Pay-per-call / x402 monetized MCP servers** are trending as a submission category: **[#11868](https://github.com/punkpeye/awesome-mcp-servers/issues/11868)** (x402 MCP Registry, 53 tools), **[#11873](https://github.com/punkpeye/awesome-mcp-servers/pull/11873)** (regexcronsql-validator, paid via x402/USDC), **[#10892](https://github.com/punkpeye/awesome-mcp-servers/pull/10892)** (TNT House Solana risk API), **[#11879](https://github.com/punkpeye/awesome-mcp-servers/pull/11879)** (SolRadar). Four submissions in one day tying MCP tool calls to on-chain USDC payment (HTTP 402) points to agentic-commerce/pay-per-call infra becoming a real sub-ecosystem.
- **MCP gateway/compression tooling** is also repeating: **[#11875](https://github.com/punkpeye/awesome-mcp-servers/pull/11875)** (tooltrim, 94-99% token reduction gateway) and **[#11883](https://github.com/punkpeye/awesome-mcp-servers/pull/11883)** (all-apis-gateway) — signals demand for context/token-cost control in front of upstream MCP servers.
- **[#11867](https://github.com/punkpeye/awesome-mcp-servers/issues/11867)** is a third-party marketplace ("getlulu.dev") announcing it has indexed the list — informational/promotional, not a real ask.

## 5. Bugs & Stability

No application bugs/crashes (this is a docs repo). The closest thing to a "stability" mechanism is the automated PR linter tagging submissions with flags like `missing-glama`, `has-emoji`, `valid-name`, `non-github-url` — it's functioning correctly, e.g. catching the duplicate at **[#7596](https://github.com/punkpeye/awesome-mcp-servers/pull/7596)** before merge. No fix PRs needed since there's no defect, just a queue of entries awaiting manual review.

## 6. Feature Requests & Roadmap Signals

No formal feature requests — inbound is 100% new-listing submissions. Given today's volume, likely near-term additions:
- Several finance/crypto-risk MCP servers (Solana, x402 payments) will likely land under Finance & Fintech.
- Gateway/compression servers (tooltrim, all-apis-gateway) suggest the list may eventually warrant a dedicated "Gateways/Proxies" subsection if this category keeps growing.

## 7. User Feedback Summary

- Positive maintenance signal: **[#7596](https://github.com/punkpeye/awesome-mcp-servers/pull/7596)**'s author proactively updated their own prior listing (54→81 tools) to keep it accurate as the upstream project grew — a sign of engaged, invested contributors, not just drive-by submitters.
- **[#11867](https://github.com/punkpeye/awesome-mcp-servers/issues/11867)** is unsolicited promotional feedback (third-party marketplace badge offer) rather than a genuine pain point.
- No dissatisfaction/complaint threads today — the list's "friction" is entirely on the maintainer-review side, not from users of listed servers.

## 8. Backlog Watch

- **[#11255](https://github.com/punkpeye/awesome-mcp-servers/issues/11255)** (Kairos Signal) — open since 2026-07-31 (10+ days), 0 comments, still untriaged.
- **[#10892](https://github.com/punkpeye/awesome-mcp-servers/pull/10892)** — open since 2026-07-25, flagged `has-glama`/`valid-name` (passes lint) but no maintainer action in 2+ weeks.
- **[#11452](https://github.com/punkpeye/awesome-mcp-servers/pull/11452)** — open since 2026-08-03, update to an already-listed entry, still pending.
- **[#11614](https://github.com/punkpeye/awesome-mcp-servers/pull/11614)** — open since 2026-08-06, passes lint flags, awaiting review.

With ~82 open PRs and submission inflow far outpacing today's 31 closures, the review backlog is the project's main health risk — not code quality or bugs.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**2026-08-11** · [docker/mcp-registry](https://github.com/docker/mcp-registry)

## 1. Today's Overview

A quiet, submission-heavy day: zero issue activity, no releases, and 14 PRs touched in the last 24h — 12 still open, 2 closed. Six of the 14 are new-server submissions (the registry's primary contribution path), and the other eight are `mcp-registry-bot` automated commit-pin updates, which is routine housekeeping rather than project activity. With zero reactions/comments recorded across every item in this window, there's no engagement signal to separate "hot" from "quiet" — activity here reads as steady intake-queue churn, not a spike. Overall health signal: normal maintenance cadence, unremarkable review throughput.

## 2. Releases

None in this window — omitted per instructions.

## 3. Project Progress

Two PRs closed today, both new-server submissions rather than bug fixes or features to the registry infrastructure itself:

- [**#4651 — Add The Bot Wire remote MCP server**](https://github.com/docker/mcp-registry/pull/4651) (opened 2026-08-07, closed 2026-08-10) — a fast turnaround (3 days). Proposed a `streamable-http` remote server aggregating primary-source data feeds (SEC EDGAR, Fed/ECB, BLS/BEA, court opinions, congressional bills, DOJ/FDA/CISA advisories).
- [**#353 — Add MCP Toolz server**](https://github.com/docker/mcp-registry/pull/353) (opened 2025-10-24, closed 2026-08-10) — sat open for **~9.5 months** before resolving today. A context-management/todo-persistence tool for Claude Code.

Neither PR's merge status (accepted vs. rejected) is distinguishable from the data provided — both show `[CLOSED]` without a merge indicator.

No infrastructure/tooling PRs to the registry itself (validation, CI, catalog schema) landed today — all non-bot activity is submission traffic.

## 4. Community Hot Topics

No comment/reaction data was populated for any item today (all `undefined` comments, `0` 👍), so there's no engagement-based ranking available. By submission complexity and scope instead, the most substantive proposals are:

- [**#4461 — Scalix World remote MCP server**](https://github.com/docker/mcp-registry/pull/4461) — a hosted `streamable-http` server with unauthenticated tool discovery but Bearer-token-gated `tools/call`, suggesting a freemium/API-key business model behind the MCP interface.
- [**#4560 — GTM API: LinkedIn MCP Server**](https://github.com/docker/mcp-registry/pull/4560) — a managed remote server for LinkedIn automation (search, connect, message, enrich) with built-in "warm-up" — this touches platform ToS/rate-limit territory that maintainers may scrutinize closely.
- [**#4584 — Unified AI System MCP server**](https://github.com/docker/mcp-registry/pull/4584) — a self-hosted, terminal-first AI gateway bundling nine governed tools (provider-free prompt enhancement, health/readiness checks, fake-only chat) — broader in scope than a typical single-purpose server submission.

Underlying need: submitters are increasingly packaging **remote, authenticated, monetizable services** (Scalix, GTM LinkedIn) rather than simple local stdio wrappers — the registry is fielding more "hosted API product" submissions than pure open-source tool wrappers.

## 5. Bugs & Stability

No issues were reported or updated in the last 24h (0 total). No stability signal to rank.

## 6. Feature Requests & Roadmap Signals

No dedicated feature-request issues today; signal instead comes from submission patterns:

- **Remote/hosted MCP servers are the emerging norm** — 3 of 6 new submissions (Scalix World, GTM LinkedIn, Bot Wire) are `streamable-http` remote servers rather than local containers, suggesting the catalog's remote-server support is maturing into the default path for commercial integrations.
- **Auth-gated tool access** (Scalix World's Bearer-token `tools/call`) hints at demand for a standard pattern to document paid/authenticated MCP servers in the catalog — worth watching whether maintainers formalize submission guidance for this.

## 7. User Feedback Summary

No direct user feedback (comments, reactions) was captured in today's data — every tracked item shows zero engagement. No pain points or satisfaction signals can be drawn from this window; this itself may indicate submitters are not getting reviewer feedback quickly, which ties into the Backlog Watch below.

## 8. Backlog Watch

Several submissions have sat open far longer than the 3-day turnaround seen on #4651 today — worth maintainer attention:

- [**#1102 — Add Smartling MCP**](https://github.com/docker/mcp-registry/pull/1102) — open since **2026-02-10** (~6 months), still updated today with no resolution. Notably lists the repository as **private**, which may be the blocker (registry submissions typically require a public repo for validation).
- [**#788 — chore: update pin for omi**](https://github.com/docker/mcp-registry/pull/788) — bot-generated pin PR open since **2025-11-26** (~8.5 months), still unmerged.
- [**#746 — chore: update pin for n8n**](https://github.com/docker/mcp-registry/pull/746) — bot-generated pin PR open since **2025-11-21** (~8.5 months), still unmerged.

The two aged bot PRs (#788, #746) suggest the pin-update automation is generating PRs faster than maintainers are merging them — a growing backlog of routine housekeeping that's easy to miss since each individual PR looks low-priority. #1102's 6-month stall on a real submission (blocked on repo visibility) is the more actionable item — a maintainer comment requesting a public repo could resolve or close it.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest, 2026-08-11

## 1. Today's Overview

Activity is dominated by automated housekeeping: 38 of the 40 PRs touched in the last 24h are `github-actions[bot]` SHA-pin bumps validated through `claude plugin validate`, with just one substantive addition (the mongodb-atlas plugin) and two bumps still open. No new releases shipped. Issue volume is low (3 total) but notable — a long-running, high-engagement marketplace-visibility complaint ([#1272](https://github.com/anthropics/claude-plugins-official/issues/1272), 34 comments / 16 👍) closed today, while a near-identical fresh report ([#5111](https://github.com/anthropics/claude-plugins-official/issues/5111)) opened the same day. Net read: a quiet, mechanically healthy day for the marketplace's CI/dependency pipeline, but the plugin-submission → marketplace-listing flow still looks like a recurring source of community friction.

## 2. Releases

None in the last 24h.

## 3. Project Progress

- **Feature:** [#5113](https://github.com/anthropics/claude-plugins-official/pull/5113) *Add mongodb-atlas plugin* (closed) — connects Claude Code to MongoDB Atlas via the Atlas Managed MCP Server, bundling skills for schema design, query optimization, and natural-language querying. The one non-automated merge today.
- **Maintenance:** 37 other PRs closed today, all bot-authored SHA bumps re-pinning plugin sources to newer validated commits (e.g. [#5128](https://github.com/anthropics/claude-plugins-official/pull/5128) langfuse-observability, [#5131](https://github.com/anthropics/claude-plugins-official/pull/5131) salesforce-development, [#5133](https://github.com/anthropics/claude-plugins-official/pull/5133) sap-fiori-mcp-server). Each was validated in CI before opening — this is routine dependency hygiene, not feature work.
- **Still open:** [#5138](https://github.com/anthropics/claude-plugins-official/pull/5138) (nimble) and [#5137](https://github.com/anthropics/claude-plugins-official/pull/5137) (carta-investors), both pending SHA bumps.

## 4. Community Hot Topics

- [**#1272**](https://github.com/anthropics/claude-plugins-official/issues/1272) — *"Published" on submissions but not in marketplace directory* — by far the most active item (34 comments, 16 👍), open since 2026-04-07, closed today. Underlying need: plugin authors want a transparent, reliable status pipeline once a submission is marked "Published" — right now that transition is opaque with no team acknowledgment reported in-thread.
- [**#5111**](https://github.com/anthropics/claude-plugins-official/issues/5111) — same complaint, different plugin ("angular-upgrade-kit"), filed hours after #1272 closed. Strong signal this is systemic rather than a one-off glitch.

## 5. Bugs & Stability

1. **High — marketplace publish pipeline** ([#1272](https://github.com/anthropics/claude-plugins-official/issues/1272), [#5111](https://github.com/anthropics/claude-plugins-official/issues/5111)): submissions reach "Published"/"Submitted" status but never surface in the live marketplace directory. No fix PR visible; #1272 closing today with #5111 opening same-day suggests the root cause is still unaddressed.
2. **Medium — silent failure** ([#5116](https://github.com/anthropics/claude-plugins-official/issues/5116)): `commit-commands`'s `/clean_gone` no-ops on non-English locales, finds zero `[gone]` branches, and reports success — a parse failure disguised as "nothing to clean." Insidious because it fails quietly rather than erroring. No fix PR yet; filed today with 0 comments.

## 6. Feature Requests & Roadmap Signals

No explicit new feature requests today beyond the two bug reports above. Roadmap signal from the PR stream: the automated SHA-bump/validation system is actively in use and maturing (dozens of bot PRs per day, each gated by `claude plugin validate` runs), indicating continued investment in marketplace supply-chain integrity. Likely near-term candidates given today's issues: a locale-aware fix for `clean_gone`, and improved status transparency/notifications for the submission→marketplace pipeline.

## 7. User Feedback Summary

- Recurring frustration over opaque marketplace publishing — two independent authors (designcode on #1272, tenshkumar-k on #5111) hit the same wall months apart, with #1272's thread noting "asked a few times before but without any response from Claude team."
- A localization gap surfaced today: non-English-locale users of bundled Git commands get false "success" reports, a trust issue for CLI tooling correctness.
- No sentiment signal around the mongodb-atlas plugin merge (0 comments) — too fresh to gauge reception.

## 8. Backlog Watch

- [**#1272**](https://github.com/anthropics/claude-plugins-official/issues/1272) — open 4+ months, heaviest engagement in the tracker, closed today without visible maintainer resolution comment in the provided data. Worth confirming whether closure reflects an actual fix or is closed-as-stale/duplicate — the same-day appearance of #5111 argues for the latter. Top item for maintainer follow-up.
- [**#5111**](https://github.com/anthropics/claude-plugins-official/issues/5111) and [**#5116**](https://github.com/anthropics/claude-plugins-official/issues/5116) — both brand new (opened today, 0 comments) and unactioned; flagging early before they age into another #1272.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-08-11)

## 1. Today's Overview
Activity today was 100% submission-driven: 10 issues touched in the last 24h, zero PRs, zero releases. Every issue is a `resource-submission` carrying the `validation-passed` label — meaning each has already cleared the repo's automated schema check and is sitting in the human-review queue. Seven of the ten were opened in just the last two days, indicating a steady, healthy inflow of new community tools rather than any code or CI activity (this repo is a curated list, not a software project, so "no PRs/releases" is expected baseline, not a red flag). Category spread skews toward **Agent Orchestration** (3) and **Observability & Monitoring** (2), suggesting submitters are currently building tooling *around* Claude Code sessions rather than new skills or core capabilities.

## 2. Releases
None today.

## 3. Project Progress
No PRs were merged or closed in the last 24h, and no code changes landed — activity was entirely limited to intake of new resource-submission issues.

## 4. Community Hot Topics
Comment counts are low across the board (max 3), consistent with maintainer/bot triage comments rather than open debate, but two submissions stand out for dwell time and engagement:
- **[#2188 – Agent Island](https://github.com/hesreallyhim/awesome-claude-code/issues/2188)** (3 comments, open since 2026-07-10) — a native, MIT-licensed Claude Code companion for observability/monitoring. Highest comment count in today's set and the longest-lived unresolved submission, suggesting back-and-forth on review details.
- **[#2353 – craft](https://github.com/hesreallyhim/awesome-claude-code/issues/2353)** (2 comments, open since 2026-07-29) — an orchestration harness plugin. Underlying need signaled: users want more structured, "guided" control over multi-step Claude Code sessions rather than freeform prompting.
- **[#2375 – Claude Code SEO/GEO Skills PT-BR](https://github.com/hesreallyhim/awesome-claude-code/issues/2375)** (2 comments, open since 2026-07-30) — points to demand for localized/non-English skill packs, a recurring underserved niche.

## 5. Bugs & Stability
No bug, crash, or regression reports in today's data — this repo doesn't run user-facing code, so stability issues would only surface as broken links/metadata in submissions, and none are flagged.

## 6. Feature Requests & Roadmap Signals
No feature requests against the awesome-list project itself; all ten items are third-party resource submissions, which double as ecosystem signals rather than roadmap asks. If accepted, the most likely near-term additions are:
- **[#2487 gitreceipts](https://github.com/hesreallyhim/awesome-claude-code/issues/2487)** — reconciles session logs against git history (Rust CLI + plugin), filling an audit/traceability gap.
- **[#2483 ccsidekick](https://github.com/hesreallyhim/awesome-claude-code/issues/2483)** — reactive ASCII status line tied to session events (tests/builds/commits), extending the increasingly crowded Status Lines category.
- **[#2481 model-switcher](https://github.com/hesreallyhim/awesome-claude-code/issues/2481)** — local prompt scoring via `UserPromptSubmit` hook to route complex work to stronger models, reflecting growing interest in cost/quality-aware model routing.

## 7. User Feedback Summary
No direct dissatisfaction signals in this window (no bug reports, no negative reactions — all 👍 counts are 0). The submission pattern itself is the feedback: builders are filling gaps around **observability** (Agent Island, gitreceipts), **orchestration control** (craft, guashuai-junshi's dual-model doctrine, model-switcher), and **localization/niche skills** (PT-BR SEO, Korean HWP documents via claw-hwp) — areas the core Claude Code product doesn't natively cover.

## 8. Backlog Watch
Two submissions warrant maintainer attention due to age relative to same-day peers:
- **[#2188 – Agent Island](https://github.com/hesreallyhim/awesome-claude-code/issues/2188)** — open 31 days, most-commented item today; likely closest to a merge/reject decision and worth prioritizing to unblock the queue.
- **[#2353 – craft](https://github.com/hesreallyhim/awesome-claude-code/issues/2353)** — open 12 days with active comments; second-longest-pending review.

Everything else (#2481–#2487) was opened within the last 1–2 days and is still within normal triage latency, not yet backlog-risk.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**2026-08-11** · github.com/VoltAgent/awesome-agent-skills

## 1. Today's Overview

Activity over the last 24h was light but steady: zero issue activity and zero releases, offset by three new pull requests, each proposing an addition to the community skills directory. No PRs were merged or closed in the window — all three remain open and unreviewed. This is typical maintenance-mode behavior for a curated "awesome list" repo, where the primary activity signal is submission volume rather than code changes. Overall health reads as stable-and-quiet: no bug reports, no regressions, no maintainer backlog spikes — just routine curation throughput.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed today — all three opened PRs (#886, #885, #884) remain in open/unreviewed state as of this digest. No feature or fix landed in the tracked window.

## 4. Community Hot Topics

Engagement metrics (comments, reactions) are flat at 0 across all three PRs, so there's no standout "hot" discussion today. By submission content, the most notable is:

- **[#886 — Add sjh9714/red-handed](https://github.com/VoltAgent/awesome-agent-skills/pull/886)**: A skill that verifies whether tests a coding agent *claimed* passed actually ran, by cross-checking the Claude Code session transcript against git state. Runs locally with no model calls.

This points to a recurring underlying need in the agent-skills ecosystem: **trust verification for agent self-reporting**. As coding agents increasingly report their own success/failure, tooling that independently audits those claims (rather than trusting the agent's transcript) is emerging as its own skill category — worth watching as a signal of where the ecosystem's pain points are shifting (from "can agents do X" to "can we verify agents did X").

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today. No fix PRs in the queue.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues today, but the open PRs function as de facto roadmap signals for directory growth:

- **[#886](https://github.com/VoltAgent/awesome-agent-skills/pull/886)** — Development/Testing category: agent-output verification tooling.
- **[#885](https://github.com/VoltAgent/awesome-agent-skills/pull/885)** — Two utility skills (favicon retrieval, content reading) positioned as API/MCP-compatible, maintained externally and already in production use.
- **[#884](https://github.com/VoltAgent/awesome-agent-skills/pull/884)** — Gaming/entertainment category: API-native poker/blackjack arena for agents, novel since it targets agent-vs-agent gameplay rather than developer tooling.

If merged, these would expand the list's **Development and Testing** and **Community Skills** sections and introduce or reinforce a gaming/entertainment subcategory — a category that's been thin historically. Given none carry maintainer comments yet, expect them to sit in review for at least a few days barring active curation.

## 7. User Feedback Summary

All signal today comes from PR authors rather than issue reporters (no issues opened). Common threads across the three submissions:
- Contributors are proactively maintaining their skills in **separate repos** and treating the awesome-list entry as a pointer, not the canonical source (#885, #884) — suggesting a pattern of skills-as-independent-products rather than list-native content.
- Two of three submissions emphasize **already in production/live use** (#885's FaviconDL/ReadGZH, #884's live moltygames.ai/skill.md) rather than being speculative — a positive signal for submission quality.
- #886 reflects a security/trust-oriented pain point: users don't fully trust agent self-reported test results and want independent verification.

No dissatisfaction signals (no complaints, no negative reactions) present in today's window.

## 8. Backlog Watch

No historical/aged issue or PR data was included in today's feed, so long-unanswered items can't be assessed from this window alone. Flagging for maintainer attention: all three of today's PRs (#886, #885, #884) have **zero comments and zero reactions**, meaning they haven't yet received maintainer triage — worth checking in a day or two if they remain untouched, since stale entry-addition PRs are this repo's main maintenance risk.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
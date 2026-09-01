# MCP Ecosystem Digest 2026-09-01

> Issues: 3 | PRs: 9 | Projects covered: 7 | Generated: 2026-09-01 12:18 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-09-01)

## 1. Today's Overview

The `modelcontextprotocol/servers` repository shipped a new release (`v2026.8.31`) today, bundling schema-validation fixes across four core reference servers (filesystem, memory, sequential-thinking, everything). Activity is moderate-to-high: 9 PRs touched in the last 24h (4 closed, 5 still open) against a comparatively small issue queue (3 items, 2 already closed). The dominant theme this cycle is **Zod v3→v4 JSON-schema regressions** — a class of bug that silently broke tool schemas across at least three servers (filesystem, sequential-thinking) and is now being patched and back-communicated to users on older pinned versions. Overall project health looks solid: maintainers are actively triaging, duplicate/competing fixes are being resolved, and a security-hardening PR (SSRF protection for `server-fetch`) remains in long-running review.

## 2. Releases

**v2026.8.31** — patch release covering:
- `@modelcontextprotocol/server-filesystem@2026.8.31`
- `@modelcontextprotocol/server-memory@2026.8.31`
- `@modelcontextprotocol/server-sequential-thinking@2026.8.31`
- `@modelcontextprotocol/server-everything@2026.8.31`

No formal changelog beyond the version bump was provided, but the timing lines up with several closed PRs from today's window: the `sequentialthinking` `required`-field schema fix ([#4701](https://github.com/modelcontextprotocol/servers/pull/4701)) and the `memory` atomic-persistence/validation fix ([#4656](https://github.com/modelcontextprotocol/servers/pull/4656)) appear to be included. No breaking changes are called out; this looks like a bug-fix-only release. Users still pinned to `server-filesystem <= 2025.8.21` are **not** covered by this release and should upgrade explicitly (see Bugs & Stability below) — no automatic migration path exists yet.

## 3. Project Progress

Four PRs closed in the last 24h:
- [#4701](https://github.com/modelcontextprotocol/servers/pull/4701) `fix(sequentialthinking): keep nextThoughtNeeded in inputSchema required` — fixes clients that build call args purely from the advertised schema and previously omitted the required `nextThoughtNeeded` field, causing `-32602` validation errors.
- [#4656](https://github.com/modelcontextprotocol/servers/pull/4656) `fix(memory): atomic graph persistence and validate entity existence in create_relations` — fixes two long-standing issues (#4614, #4457): a non-atomic `saveGraph()` write that could corrupt the memory file on interruption, plus missing existence checks when creating relations.
- [#4714](https://github.com/modelcontextprotocol/servers/pull/4714) `docs(brave-search): point to official @brave/brave-search-mcp-server package` — closes the Brave Search deprecation-messaging issue ([#4694](https://github.com/modelcontextprotocol/servers/issues/4694)).
- [#4695](https://github.com/modelcontextprotocol/servers/pull/4695) `fix(sequential-thinking): preserve nextThoughtNeeded in required schema fields` — addresses the same underlying bug as #4701 (both trace back to `z.preprocess()` breaking JSON-schema generation, introduced in #3533); this PR appears to have been superseded/closed in favor of #4701 rather than merged independently.

Net effect: two real correctness fixes landed (sequential-thinking schema, memory persistence), plus one documentation cleanup.

## 4. Community Hot Topics

Ranked by comment/engagement volume (all counts are modest today, consistent with a maintainer-driven queue rather than a large public discussion):

- [Issue #4661](https://github.com/modelcontextprotocol/servers/issues/4661) — "server-filesystem ≤2025.8.21 emits empty inputSchema when zod v4 is resolved" (5 comments, closed). The highest-engagement item today; underlying need is **schema/dependency stability guarantees** — users want assurance that a package's tool contract won't silently degrade based on which peer-dependency version npm resolves.
- [Issue #4702](https://github.com/modelcontextprotocol/servers/issues/4702) — "npm deprecate server-filesystem@<=2025.8.21" (2 comments, open) — direct follow-up asking maintainers to actively warn affected installs rather than relying on users to notice, reflecting a desire for **proactive supply-chain communication**, not just a fix in the latest tag.
- [Issue #4694](https://github.com/modelcontextprotocol/servers/issues/4694) — Brave Search deprecation pointer (1 comment, closed via #4714) — low-friction docs housekeeping.

## 5. Bugs & Stability

Ranked by severity:

1. **High — empty tool schemas under zod v4** ([#4661](https://github.com/modelcontextprotocol/servers/issues/4661), open follow-up [#4702](https://github.com/modelcontextprotocol/servers/issues/4702)). Affects any `server-filesystem` install ≤2025.8.21 that resolves zod v4 — tools advertise no parameters at all, breaking client-side call construction. **Fixed in current package**, but not yet communicated via npm deprecation notice to legacy installs — #4702 is the tracking issue for that follow-up, still open.
2. **Medium — sequential-thinking `required` field dropped from generated schema**, caused by `z.preprocess()` interaction with Zod's JSON-schema generator (introduced in prior PR #3533). Fixed by [#4701](https://github.com/modelcontextprotocol/servers/pull/4701), superseding a duplicate fix in [#4695](https://github.com/modelcontextprotocol/servers/pull/4695). Included in today's release.
3. **Medium — memory server: non-atomic file writes** could corrupt the JSONL graph file on a mid-write process kill, plus `create_relations` didn't validate entity existence before linking. Fixed by [#4656](https://github.com/modelcontextprotocol/servers/pull/4656) (closes #4614, #4457), included in today's release.
4. **Medium — memory `search_nodes` crash on malformed data** — [PR #4731](https://github.com/modelcontextprotocol/servers/pull/4731) (open) guards against `TypeError: Cannot read properties of undefined (reading 'some')` when an entity's `observations` field is missing, e.g. from older/malformed JSONL files. Not yet merged.
5. **High (security) — CVE-2026-69247** in the `cryptography` Python dependency (used by `server-fetch`), fixed by upgrading 49.0.0 → 50.0.0 in open [PR #4730](https://github.com/modelcontextprotocol/servers/pull/4730). Flagged HIGH severity by Trivy; awaiting merge.
6. **Low — git_log schema inconsistency** between filtered and unfiltered branches (repr-quoted vs. plain strings) — [PR #4470](https://github.com/modelcontextprotocol/servers/pull/4470), open since 2026-07-04, closes #4469.

## 6. Feature Requests & Roadmap Signals

- **SSRF protection + security test suite for `server-fetch`** ([PR #3180](https://github.com/modelcontextprotocol/servers/pull/3180), open since 2026-01-05) — adds URL scheme allowlisting and private-IP-range blocking. Given the concurrent CVE fix (#4730) for the same server, security hardening of `server-fetch` looks like an active roadmap priority; this PR is the most likely security-related candidate for an upcoming release if maintainer review completes.
- **Simplified Chinese README translation** ([PR #4729](https://github.com/modelcontextprotocol/servers/pull/4729), opened 2026-08-31) — signals growing non-English-speaking contributor/user interest; a low-risk merge candidate likely to land soon given it's docs-only.
- **npm deprecation notice for legacy `server-filesystem`** (tracked in #4702) — likely next concrete maintainer action, independent of a code release.

## 7. User Feedback Summary

- Pain point: **silent schema breakage from transitive dependency resolution** (zod v3 vs v4) is the clearest recurring frustration — users don't expect a patch-level npm install to change tool contracts, and diagnosing "empty inputSchema" requires deep debugging.
- Pain point: **inconsistent output formats** across code paths (git_log filtered vs. unfiltered) and **crashes on legacy data shapes** (memory `search_nodes`) point to insufficient defensive coding for real-world, non-pristine inputs.
- Positive signal: community members (external contributors like `AbhiPra24`, `CryoThrust`, `Sagargupta16`, `Tomo1912`) are actively submitting fixes and hardening work, not just filing issues — suggests healthy contributor engagement despite the small core team surface area visible here.
- No explicit satisfaction commentary or feature praise appeared in today's window; feedback skews toward bug reports and fixes rather than usage testimonials.

## 8. Backlog Watch

- [PR #3180](https://github.com/modelcontextprotocol/servers/pull/3180) — SSRF protection for `server-fetch`, open since **2026-01-05** (~8 months). Given it's a security-relevant PR with a comprehensive test suite, this is the most notable stale item needing maintainer attention.
- [PR #4470](https://github.com/modelcontextprotocol/servers/pull/4470) — git_log schema normalization, open since **2026-07-04** (~2 months), still awaiting review/merge despite being a straightforward consistency fix.
- [Issue #4702](https://github.com/modelcontextprotocol/servers/issues/4702) — npm deprecation follow-up for `server-filesystem` legacy versions, only 4 days old but time-sensitive (every day it's unresolved, more users may hit the empty-schema bug on fresh installs).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — MCP & Claude Ecosystem
**Date: 2026-09-01**

## 1. Ecosystem Overview

The MCP (Model Context Protocol) and Claude Code ecosystems are in a phase of rapid horizontal expansion rather than deep vertical maturation: curated registries and awesome-lists (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills) are absorbing 28–159 submission PRs per day, while the core reference implementations (`modelcontextprotocol/servers`, `modelcontextprotocol/registry`) show comparatively modest but higher-signal activity focused on correctness and security hardening. A clear cross-cutting theme is the shift from single-agent tooling toward **multi-agent/multi-session coordination** (file-claiming, schedulers, governance layers) and **agent-to-agent commerce** (x402 micropayments), both appearing independently across three or more unrelated repos today. The dominant operational risk across nearly every project is not code quality but **triage/review bandwidth** — submission and PR volume is outpacing maintainer merge capacity almost everywhere except the core `servers` repo. Security posture is emerging as a differentiator: `servers` is actively patching a CVE and reviewing SSRF hardening, while newer catalogs (Awesome Agent Skills) are just beginning to surface tooling for supply-chain vetting of skills.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Today | Health Score |
|---|---|---|---|---|---|
| **MCP Servers** (core) | 3 (2 closed) | 9 (4 closed, 5 open) | 4/9 (44%) | ✅ v2026.8.31 | 8/10 — Active, shipping fixes |
| **MCP Registry** (official) | 1 (closed) | 0 | — | None | 6/10 — Quiet, stable |
| **Awesome MCP Servers** | 1 (open) | 159 (25 closed/merged) | 25/159 (16%) | N/A (list repo) | 5/10 — High volume, growing backlog |
| **Docker MCP Registry** | 0 | 50 | 0/50 (0%) | None | 3/10 — Submission-heavy, merge-stalled |
| **Claude Plugins (official)** | 6 (0 closed) | 6 (2 closed) | 2/6 (33%) | None | 6/10 — Stable core, rising 3rd-party debt |
| **Awesome Claude Code** | 11 (2 auto-closed) | 0 | — | None | 5/10 — Healthy submissions, no merges |
| **Awesome Agent Skills** | 1 | 28 | 0/28 (0%) | None | 4/10 — Bottlenecked, no maintainer action |

*Health score reflects a composite of merge throughput, severity of open bugs, and responsiveness — not raw activity volume.*

## 3. MCP Servers's Position

As the **core reference implementation**, `modelcontextprotocol/servers` occupies a structurally different position than the six catalog/registry repos it's compared against here — it is the only project shipping executable code and cutting versioned releases with real breaking-change risk.

- **Advantages vs. peers**: Highest merge-to-touch ratio (44%) in the set, indicating a functioning triage process rather than a submission backlog. It's also the only project actively fixing a **CVE** (`cryptography` 49→50) and reviewing security-hardening PRs (SSRF protection, open since January), showing security maturity the catalog repos haven't yet developed.
- **Technical approach differences**: Unlike the list-curation repos (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills), `servers` has genuine regression risk — today's release was needed specifically to fix a Zod v3→v4 schema-generation bug that silently broke tool contracts across three servers. This is a class of failure catalog repos structurally cannot have.
- **Community size comparison**: Engagement (comment/reaction counts) is modest — single digits per issue — but converts to *code*, unlike Awesome MCP Servers' 159 PRs/day, which converts to *list entries*. In practical terms, `servers` has a smaller but higher-leverage contributor base (named external contributors actively submitting fixes, not just filing bugs).

## 4. Shared Technical Focus Areas

- **Multi-agent/multi-session coordination**: Independently surfacing in Awesome MCP Servers (`dibs`, #11484), Awesome Claude Code (`dibs` #2693, Bermuda #2691, Bernstein #1653), and implicitly in Docker MCP Registry submission trends — a real, converging need for file-locking, scheduling, and governance across parallel Claude Code/Codex sessions.
- **Agent-to-agent payments (x402 protocol)**: Appears in Docker MCP Registry (`openfang-rail` #4868), Awesome MCP Servers (#13299, #9780), and Awesome Agent Skills (`NEX Agent Co.` #992) — three unrelated catalogs are simultaneously fielding submissions for metered/paid MCP endpoints, suggesting this is a genuine emerging category rather than noise.
- **Cross-host/cross-agent portability**: Claude Plugins (#3173 Codex CLI hook breakage, #490 AGENTS.md generalization) and the general framing of skills as multi-platform (Awesome Agent Skills submissions citing "Claude Code, Codex, Cursor" support) both reflect users wanting tooling that isn't Claude-specific.
- **Supply-chain / dependency stability**: MCP Servers' Zod v3/v4 schema regression and CVE patch, paired with Awesome Agent Skills' new security-scanner submissions (`skill-vet` #982, `memory-shield` #984), show a shared, growing concern about trusting third-party MCP/skill artifacts.
- **Registry review-pipeline bottlenecks**: Docker MCP Registry (0/50 merged), Awesome Claude Code (0/11 merged), Awesome Agent Skills (0/28 merged) all show the identical pattern — high submission inflow, zero maintainer merge action in the 24h window.

## 5. Differentiation Analysis

| Dimension | MCP Servers | Registries (MCP Registry, Docker MCP Registry) | Awesome Lists (3) |
|---|---|---|---|
| **Feature focus** | Reference tool implementations (filesystem, memory, fetch, sequential-thinking) | Discoverability/indexing of third-party servers | Curated, community-vetted directories |
| **Target users** | Client/SDK developers needing canonical servers | Server authors publishing; agent devs discovering | Newcomers browsing by category |
| **Technical architecture** | Real runtime code, schema contracts, versioned npm packages | Metadata + auth flows (device-flow OAuth, pin-bots) | Markdown lists, PR-based submission, bot validation |
| **Risk profile** | Regression/security bugs affect all downstream consumers | Auth/publish friction blocks the pipeline, not runtime | List-integrity issues only (duplicates, broken links) |

Claude Plugins (official) sits distinctly between these categories — it ships real plugin code (Telegram, Discord, skill-creator) *and* curates a marketplace, which is why it's the only repo in this set with both a critical runtime bug (#4788 Telegram zombie-process hang) and marketplace-hygiene PRs in the same 24h window.

## 6. Community Momentum & Maturity

**Rapidly iterating / high inbound volume**: Awesome MCP Servers (159 PRs), Docker MCP Registry (50 PRs), Awesome Agent Skills (28 PRs) — all three are in a growth phase where submission rate has outpaced review capacity, evidenced by 0–16% merge ratios. This is a maturity gap, not a demand gap.

**Actively stabilizing**: MCP Servers is the clear standout — shipping a patch release, resolving duplicate PRs (#4701 superseding #4695), and working through a CVE and a long-pending security PR. This is the only project in the set showing a mature "fix → release → communicate" loop (though the npm-deprecation follow-up for legacy `server-filesystem` is still lagging).

**Quiet but not stalled**: MCP Registry — single-digit activity, but the one item (device-flow auth bug) is core to the platform's value proposition and its "closed" status without a visible fix PR warrants a follow-up check.

**Backlog-accumulating**: Claude Plugins (official) is notable for a widening gap between *code health* (marketplace/core PRs merge cleanly) and *third-party plugin health* (3 unresolved bugs including one critical, none with fix PRs yet) — a bifurcated maturity pattern worth watching.

## 7. Trend Signals

1. **Multi-session agent orchestration is becoming its own tooling category.** Independent submissions across Awesome MCP Servers and Awesome Claude Code (dibs, Bermuda, Bernstein, status-line/observability tools) signal that developers running several Claude Code/Codex sessions concurrently now need dedicated coordination infrastructure — file-locking, schedulers, governance — not just better single-session UX. **Value for developers**: watch this space for a de facto standard before building custom coordination scripts.
2. **Agent-to-agent micropayments (x402) are moving from novelty to recurring submission pattern.** Three independent catalogs received x402-related submissions in the same 24h window. **Value for developers**: if building commerce-adjacent agent tools, x402 is worth evaluating now rather than waiting for a dominant standard to emerge later.
3. **Dependency-resolution fragility (Zod v3/v4) is a cautionary tale for schema-driven tool contracts.** MCP Servers' silent `inputSchema` breakage — undetected until users hit `-32602` errors — shows that peer-dependency version drift can silently break MCP tool contracts with no build-time signal. **Value for developers**: pin schema-library versions explicitly in MCP server dependencies; don't rely on npm's default resolution for anything that generates a tool's advertised interface.
4. **Skill/plugin supply-chain security tooling is nascent but emerging.** `skill-vet` and `memory-shield` (Awesome Agent Skills) plus the SSRF-hardening PR (MCP Servers) suggest the ecosystem is starting to treat third-party skills/servers as an attack surface requiring static analysis — a maturity signal worth tracking as adoption of unvetted skills grows.
5. **Cross-host portability friction (Claude-specific → generic agent tooling) is a recurring complaint**, not a one-off. Codex CLI hook incompatibility and AGENTS.md format requests appearing together in Claude Plugins suggest plugin/skill authors should design for multi-host compatibility from the start rather than retrofitting it.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest — 2026-09-01

## 1. Today's Overview

Activity on `modelcontextprotocol/registry` was minimal in the last 24 hours: a single issue was updated (and closed), with no pull request activity and no new releases. This is a low-activity day by the project's usual cadence, consistent with a maintenance lull rather than a stall — the one active item is a resolved authentication bug report rather than a sign of stagnation. No breaking changes, migrations, or roadmap announcements are indicated by today's data. Overall project health signal is neutral: quiet but not concerning, pending visibility into whether the closed issue reflects a genuine fix or was closed without resolution.

## 2. Releases

None. No new releases were published in the tracked window.

## 3. Project Progress

No PRs were opened, merged, or closed in the last 24 hours, so there is no direct code progress to report today. The only tracked change was the closure of Issue #1543 (see below), which may or may not correspond to an underlying code fix — no linked PR was observed in the data provided.

## 4. Community Hot Topics

The sole active item today is:

- **[#1543 – `mcp-publisher`: device-flow login fails with `incorrect_device_code` at the authorize step](https://github.com/modelcontextprotocol/registry/issues/1543)** (Closed) — Author: john-broadway | 3 comments | 0 👍
  Reported across two `mcp-publisher` versions (1.7.9 and 1.8.1) and two separate days, with the device-flow polling and payload verified as functioning correctly up to the point of authorization, where it fails with `incorrect_device_code`. With only 3 comments and no reactions, this isn't a "hot" topic by engagement volume, but it's notable as the only signal of user-facing friction today — device-flow OAuth failures directly block the publishing workflow, which is core to the registry's value proposition (getting server authors to publish). The underlying need is a reliable, low-friction CLI authentication path; recurring `incorrect_device_code` errors across two release versions suggest either a GitHub device-flow timing/clock-skew issue or a registry-side code-validation bug rather than user error.

## 5. Bugs & Stability

- **[#1543 – device-flow `incorrect_device_code` on `mcp-publisher login github`](https://github.com/modelcontextprotocol/registry/issues/1543)** — Severity: **Medium-High** (blocks the publish workflow for affected users, though apparently not universally reproducible since it wasn't reported by others). Reproduced 3 times across 1.7.9 and 1.8.1 on the same host, ruling out a single-version regression. No fix PR is visible in today's data. **Status: Closed** — it's unclear from the available data whether this was closed due to a confirmed fix, a workaround, staleness, or being deemed user-environment-specific; this warrants a follow-up look at the issue's closing comment to confirm resolution.

No other bugs, crashes, or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

No new feature requests were logged in today's data. Given the nature of #1543, a plausible near-term improvement (if not already shipped) would be **more actionable error messaging or retry/backoff guidance in `mcp-publisher`'s device-flow login** when `incorrect_device_code` occurs, to help users self-diagnose transient vs. persistent failures. This is a prediction based on the pattern of the report, not a confirmed roadmap item.

## 7. User Feedback Summary

The one data point today (john-broadway on #1543) reflects mild frustration rooted in inconsistency: the failure was intermittent across versions and days on the same host, with all upstream steps (pending-poll, payload) verified healthy, pointing to a narrow but reproducible defect rather than user error. No positive feedback or satisfaction signals were present in today's window (unsurprising given the low volume of activity).

## 8. Backlog Watch

No long-unanswered issues or PRs are surfaced in today's dataset (only one issue was active, and it was closed same-cycle). Given the low overall volume, it's worth a maintainer spot-check on whether older open issues/PRs (outside today's 24h window) are accumulating without response — but that assessment requires data beyond what's available in this digest cycle.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-09-01)

## 1. Today's Overview

Awesome MCP Servers remains one of the highest-throughput curation repos in the AI ecosystem: 159 PRs touched in the last 24h (134 still open, 25 merged/closed), against just a single issue and zero releases — expected, since this is a curated list, not a shipping codebase. Activity is dominated by submission PRs adding new MCP servers across categories (Finance, Security, Travel, Legal, Communication, Code Execution), continuing the steady long-tail growth of the MCP ecosystem. Maintainer throughput (25 closed/merged of 159 touched) suggests a triage backlog is building relative to inbound volume. No crashes, regressions, or code-level bugs are possible in this repo type — "stability" here means listing correctness (duplicate/invalid entries, broken links, merge conflicts).

## 2. Releases

None — this repo doesn't cut releases; omitted per data.

## 3. Project Progress

25 PRs were merged or closed today. Notable outcomes:
- [#11484](https://github.com/punkpeye/awesome-mcp-servers/pull/11484) "Add dibs — coordination layer for parallel coding agents" was **closed** — a submission for a tool that lets multiple Claude Code/Codex/Cline sessions coordinate file access via TTL leases in the git common dir.
- [#13362](https://github.com/punkpeye/awesome-mcp-servers/pull/13362) "Add Signbee MCP server" was **closed**, but the same author immediately reopened equivalent content as [#13363](https://github.com/punkpeye/awesome-mcp-servers/pull/13363) and [#13364](https://github.com/punkpeye/awesome-mcp-servers/pull/13364) — likely a maintainer-requested resubmission (naming issue, see below) rather than a rejection.

Without per-PR close reasons in the data, most other closures are presumed to be either merges of straightforward listing additions or rejections for duplicate/policy-noncompliant entries.

## 4. Community Hot Topics

Engagement (comments/reactions) across today's issues and PRs is uniformly at zero, so no item stands out by discussion volume. The one open issue, [#13299](https://github.com/punkpeye/awesome-mcp-servers/issues/13299) "Add nex-mcp-server v1.0.0 to the list," reflects the recurring underlying need in this repo: authors want fast, direct inclusion rather than going through the standard PR review queue, especially when their server is already indexed via Glama's auto-sync.

## 5. Bugs & Stability

Not applicable in the traditional sense (no runtime code), but list-integrity issues surfaced today:
- **Duplicate/near-duplicate submissions**: [#13362](https://github.com/punkpeye/awesome-mcp-servers/pull/13362) (closed), [#13363](https://github.com/punkpeye/awesome-mcp-servers/pull/13363), and [#13364](https://github.com/punkpeye/awesome-mcp-servers/pull/13364), all from `talentseek`, add the same Signbee entry to Legal — #13364 is additionally flagged `invalid-name`, the likely reason for the resubmission churn.
- **Merge conflict**: [#9780](https://github.com/punkpeye/awesome-mcp-servers/pull/9780) "Add CHANGCHINFU/mcp-gauge to Finance & Fintech" has been open since 2026-07-10 and now carries a `merge-conflict` label — needs a rebase before it can land.
- **Missing Glama verification**: several PRs (e.g. [#13365](https://github.com/punkpeye/awesome-mcp-servers/pull/13365), [#13364](https://github.com/punkpeye/awesome-mcp-servers/pull/13364), [#13360](https://github.com/punkpeye/awesome-mcp-servers/pull/13360), [#13349](https://github.com/punkpeye/awesome-mcp-servers/pull/13349)) carry `missing-glama`, indicating the automated listing-quality bot flagged them as unverified — these are lower-priority for merge until resolved.

## 6. Feature Requests & Roadmap Signals

No feature requests against the repo's own tooling appeared today; all "requests" are submissions to extend the list. Category trends worth flagging for maintainers:
- **Agent-to-agent payments/x402**: multiple entries reference the x402 payment protocol for agent-to-agent commerce ([#13299](https://github.com/punkpeye/awesome-mcp-servers/issues/13299), [#9780](https://github.com/punkpeye/awesome-mcp-servers/pull/9780)), suggesting this is an emerging category that may warrant its own section if volume continues.
- **Multi-agent coordination tooling**: [#11484](https://github.com/punkpeye/awesome-mcp-servers/pull/11484) (dibs) and general growth in "Code Execution" submissions ([#13358](https://github.com/punkpeye/awesome-mcp-servers/pull/13358)) point to increasing interest in infrastructure for running multiple coding agents safely in parallel.
- **AI spend/authorization controls**: [#13357](https://github.com/punkpeye/awesome-mcp-servers/pull/13357) (SpendShield) reflects a maturing need for policy layers governing autonomous agent spending.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction commentary was present in today's data (all comment counts are unavailable/zero). Implicit signals from PR descriptions:
- Submitters increasingly emphasize **differentiation** from existing list entries (e.g. [#13358](https://github.com/punkpeye/awesome-mcp-servers/pull/13358) explicitly argues why its sandboxing approach differs from `dagger/container-use`), suggesting maintainers are pushing back on redundant listings and authors have adapted.
- Authors are proactively including verification metadata (Glama links, official registry entries, "no prices, no customer names" disclaimers as in [#13364](https://github.com/punkpeye/awesome-mcp-servers/pull/13364)) — a sign the community has internalized the repo's quality bar.

## 8. Backlog Watch

- [#9780](https://github.com/punkpeye/awesome-mcp-servers/pull/9780) — open since 2026-07-10 (nearly 2 months), now blocked by a merge conflict; needs author rebase or maintainer closure.
- [#11606](https://github.com/punkpeye/awesome-mcp-servers/pull/11606) — open since 2026-08-06, still unmerged despite no flagged issues.
- [#10788](https://github.com/punkpeye/awesome-mcp-servers/pull/10788) — open since 2026-07-23, a monitoring/observability tool submission with no apparent blockers.
- [#12140](https://github.com/punkpeye/awesome-mcp-servers/pull/12140) — open since 2026-08-14, a re-pointing of an existing canonical listing (Peer MCP) that may need priority since it corrects a stale entry rather than adding a new one.
- [#13299](https://github.com/punkpeye/awesome-mcp-servers/issues/13299) — the sole open issue, unanswered since 2026-08-31, requesting direct-listing guidance outside the normal PR flow.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date:** 2026-09-01

## 1. Today's Overview

Activity today was submission-heavy but merge-light: 50 PRs were touched in the last 24 hours, yet **zero were merged or closed**, and there were no new releases and no issue activity at all. The bulk of updated PRs (roughly 14 of the top 20 shown) are automated `mcp-registry-bot[bot]` "update pin" commits, some of which have sat open since **November 2025** — nearly ten months — and are simply being re-touched by the bot's periodic re-pin cycle rather than reviewed. Genuine community contributions today consist of six new server submissions (Peer, GitKraken, IMBA Agent Docs/Spend, Council of AI GSPC, Hive Intelligence, openfang-rail), several of which introduce remote/paid or crypto-adjacent MCP endpoints. Overall, the registry shows high inbound volume but a stalled review/merge pipeline — a pattern worth flagging for maintainer bandwidth.

## 2. Releases

No new releases in this window.

## 3. Project Progress

No PRs were merged or closed today (0 of 50 updated PRs). No forward progress to report on landed features; all listed activity represents open, unreviewed submissions or bot pin refreshes.

## 4. Community Hot Topics

Comment counts were not available in the fetched data (reported as `undefined`) and reaction counts (👍) were uniformly 0 across all items, so no PR/issue stands out by engagement metrics today. The most notable *content*-driven activity is the cluster of new remote-server submissions:

- **[Add Peer remote MCP server (#4872)](https://github.com/docker/mcp-registry/pull/4872)** — unauthenticated, read-only Streamable HTTP entry for the Peer agent platform.
- **[Add Hive Intelligence (#4869)](https://github.com/docker/mcp-registry/pull/4869)** — 607-tool crypto/DeFi market-data server, notable for its unusually large tool surface.
- **[Add openfang-rail (#4868)](https://github.com/docker/mcp-registry/pull/4868)** — remote server implementing x402 per-call payments, signaling growing interest in monetized/metered MCP endpoints.
- **[Add Council of AI GSPC MCP (#4733)](https://github.com/docker/mcp-registry/pull/4733)** — an "AI governance/measurement" server, open since 2026-08-20 and still awaiting review 12+ days later.

The underlying need visible here is registry expansion toward **paid, remote, and crypto/finance-oriented MCP servers** rather than local/open-source tool servers, which is a shift from the registry's more typical dev-tooling submissions (GitKraken, IMBA docs).

## 5. Bugs & Stability

No bug reports, crashes, or regressions were logged today (0 issues, all 0 open/closed). Nothing to rank.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. Implicit roadmap signals come from submission patterns instead:
- Growing demand for **remote/hosted, auth-free Streamable HTTP servers** (Peer, Hive Intelligence, openfang-rail all follow this shape).
- Emerging **x402 micropayment support** ([#4868](https://github.com/docker/mcp-registry/pull/4868)) — worth watching as a possible new registry category (paid-per-call MCP servers) if it merges cleanly.
- Continued steady stream of **dev-tooling integrations** (GitKraken git/PR management, #4871).

## 7. User Feedback Summary

No direct user feedback (comments, reactions) was captured in today's data — every reaction count is 0 and comment counts weren't retrievable. PR descriptions themselves double as informal "use case" statements: submitters emphasize credential-free access, live health-check validation, and dynamic tool discovery as selling points (e.g., #4872, #4868), suggesting registry maintainers are pushing submitters toward a self-certifying checklist (auth model, endpoint verification) before review — a good sign for submission quality even without direct engagement data.

## 8. Backlog Watch

The most concrete signal today is an aging backlog of automated pin-update PRs that have never been merged:

- **[#621 – update pin for awslabs-nova-canvas](https://github.com/docker/mcp-registry/pull/621)** — open since 2025-11-07 (~10 months).
- **[#746 – update pin for n8n](https://github.com/docker/mcp-registry/pull/746)** — open since 2025-11-21.
- **[#788 – update pin for omi](https://github.com/docker/mcp-registry/pull/788)** — open since 2025-11-26.
- **[#799 – update pin for vizro](https://github.com/docker/mcp-registry/pull/799)** — open since 2025-11-27.
- **[#2744 – update pin for aws-core-mcp-server](https://github.com/docker/mcp-registry/pull/2744)** — open since 2026-04-18.

These are low-risk, bot-generated commit-pin bumps that should be trivial to auto-merge or batch-review, yet several have been idle for 3–10 months. This is the clearest maintainer-attention gap in today's data — a backlog-clearing pass on `mcp-registry-bot` PRs would likely resolve a large fraction of the registry's open-PR count with minimal review effort.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest: 2026-09-01

## 1. Today's Overview

Activity today is moderate but skewed toward maintenance and newly-filed bug reports rather than shipped fixes: 6 issues and 6 PRs updated in the last 24h, zero releases, and zero issues closed. Of the 6 PRs, 4 are routine automated SHA-bump bumps from `github-actions[bot]` keeping marketplace plugin references current, while the 2 closed PRs are small, targeted (marketplace cleanup and a Discord UX tweak). The issue queue is more concerning: three brand-new reports today (#5723, #5718) plus continued discussion on a month-old critical bug (#4788) suggest the third-party plugin surface (Telegram, Discord, skill-creator, claude-md-improver) is where real user pain is concentrated. Overall project health looks stable at the core-repo/marketplace level but shows accumulating debt in officially-listed external plugins.

## 2. Releases

None today — no new releases were published.

## 3. Project Progress

Only 2 PRs closed today, both maintainer/community-driven rather than automated:

- **[#1723](https://github.com/anthropics/claude-plugins-official/pull/1723)** — "Remove helius from marketplace" (bryan-anthropic, Anthropic maintainer). Marketplace hygiene: strips the `helius` entry from `.claude-plugin/marketplace.json`.
- **[#5716](https://github.com/anthropics/claude-plugins-official/pull/5716)** — "Discord plugin: surface quote-replied message to the model" (0xLoqi). Addresses a real UX gap where a Discord user's native "reply" context wasn't forwarded to Claude, so the bot lost track of what "this" referred to in quoted replies.

The 4 remaining open PRs (**[#5722](https://github.com/anthropics/claude-plugins-official/pull/5722)**, **[#5721](https://github.com/anthropics/claude-plugins-official/pull/5721)**, **[#5720](https://github.com/anthropics/claude-plugins-official/pull/5720)**, **[#5719](https://github.com/anthropics/claude-plugins-official/pull/5719)**) are all automated SHA bumps (activecampaign, youdotcom-agent-skills, data-agent-kit-starter-pack, atlassian-twg-cli), each pre-validated via `claude plugin validate` in CI — routine supply-chain freshness upkeep, not feature work.

## 4. Community Hot Topics

Engagement is thin overall (max 3 comments, 0 reactions across the board), but two issues are drawing the most discussion:

- **[#4788](https://github.com/anthropics/claude-plugins-official/issues/4788)** (3 comments) — Telegram plugin hard-hang leaving zombie processes immune to SIGTERM. The underlying need is operational reliability: users running the Telegram plugin unattended (e.g., as a background service) need it to fail safely, not consume a CPU core indefinitely.
- **[#3173](https://github.com/anthropics/claude-plugins-official/issues/3173)** (3 comments) — security-guidance hooks breaking under Codex CLI. Signals a broader need for plugin/hook portability across agent hosts, not just Claude Code.

**[#490](https://github.com/anthropics/claude-plugins-official/issues/490)** (1 comment, open ~6 months) also got fresh activity today, reinforcing sustained community interest in cross-tool (AGENTS.md) compatibility.

## 5. Bugs & Stability

Ranked by severity, no fix PRs currently reference any of these:

1. **[#4788](https://github.com/anthropics/claude-plugins-official/issues/4788)** — **Critical.** Telegram plugin's `server.ts` can hard-hang the main JS thread at 100% CPU, and none of the plugin's safety nets (orphan watchdog, stdin handler, even SIGTERM) can recover it, leaving orphaned zombie processes. This is a resource-exhaustion/DoS-style failure mode for anyone running the plugin long-lived.
2. **[#5723](https://github.com/anthropics/claude-plugins-official/issues/5723)** — **High (silent data corruption).** `skill-creator`'s `aggregate_benchmark.py` silently zeroes `total_tokens` (only read from the fallback branch when timing is missing) and hardcodes `runs_per_configuration`, corrupting benchmark metrics without any visible error.
3. **[#5718](https://github.com/anthropics/claude-plugins-official/issues/5718)** — **High (silent wrong output).** `claude-md-improver`'s audit compares docs against whatever is checked out locally instead of a fixed baseline ref, so stale/non-representative worktrees produce reports that look valid but are wrong.
4. **[#3173](https://github.com/anthropics/claude-plugins-official/issues/3173)** — **Medium.** `security-guidance` 2.0.6 hooks are Claude-specific and break when Codex CLI tries to load them — a compatibility bug rather than a crash, but blocks cross-host use entirely.
5. **[#5717](https://github.com/anthropics/claude-plugins-official/issues/5717)** — **Low-Medium.** Discord plugin unconditionally drops bot-authored messages, which is defensive-by-default but blocks a legitimate emerging use case (multi-agent coordination across sessions).

## 6. Feature Requests & Roadmap Signals

- **[#490](https://github.com/anthropics/claude-plugins-official/issues/490)** — Generalize `claude-md-improver` to also support `AGENTS.md`. Open since 2026-03-02 and still getting engagement today; given the parallel Codex-compatibility complaint (#3173), cross-agent-format support looks like a recurring theme worth prioritizing.
- **[#5717](https://github.com/anthropics/claude-plugins-official/issues/5717)** — Allow opted-in bot-to-bot messages in Discord group channels to enable agent-to-agent coordination. A narrower, more novel ask (multi-agent orchestration over chat platforms) that could foreshadow future multi-instance workflows if maintainers pick it up.

Given the pattern across #490, #3173, and #5717, the next release cycle plausibly leans toward improving cross-platform/cross-host plugin compatibility rather than net-new plugins.

## 7. User Feedback Summary

- **Reliability concerns dominate**: the Telegram (#4788) and skill-creator (#5723) reports both describe failures that are *silent or unrecoverable* — users can't easily detect them until damage (hung process, corrupted metrics) is done. This is the sharpest pain point today.
- **Portability frustration**: two independent reports (#3173, #490) reflect users trying to reuse Claude-ecosystem plugins/skills in other agent hosts (Codex CLI, generic `AGENTS.md` tooling) and hitting friction, suggesting the plugin format is perceived as too Claude-specific by some adopters.
- **Positive signal**: routine automated SHA-bump PRs passing CI validation cleanly indicate the marketplace's plugin-freshness pipeline is functioning well with no reported friction.
- No explicit satisfaction/praise comments were present in today's data window.

## 8. Backlog Watch

- **[#490](https://github.com/anthropics/claude-plugins-official/issues/490)** — Open since 2026-03-02 (~6 months), only 1 comment despite a real, low-effort feature ask (AGENTS.md support). Oldest unresolved item in today's set and a good candidate for a maintainer response.
- **[#3173](https://github.com/anthropics/claude-plugins-official/issues/3173)** — Open since 2026-06-22 (~2+ months), 3 comments but no resolution; a compatibility break for Codex CLI users that's been discussed without a fix landing.
- **[#4788](https://github.com/anthropics/claude-plugins-official/issues/4788)** — Open since 2026-08-02 (~1 month); despite being the most-discussed issue today, no fix PR exists yet for a CPU-pegging/zombie-process bug that has operational impact.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Project Digest
**Date:** 2026-09-01 | **Source:** [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)

## 1. Today's Overview

Activity in the last 24 hours was driven entirely by community resource submissions — 11 issues touched, zero PRs, zero releases. This is expected for this repo: it's a curated awesome-list, and its "issues" are almost all auto-templated `[Resource]:` submissions processed by a validation bot rather than bug reports. Of the 11 issues, 8 passed automated validation and remain open pending maintainer merge, 2 were auto-closed after failing pending validation, and 1 failed validation outright. Submission volume is healthy and skews toward orchestration/coordination tooling (multi-agent session management, schedulers, governance layers) and status-line/observability tools — a signal that the ecosystem around *running many Claude Code sessions at once* is maturing quickly. No merge activity today means the review backlog is growing, which is the main health concern below.

## 2. Releases

None today — omitted.

## 3. Project Progress

No PRs were opened, merged, or closed in the last 24h, so no code shipped. All movement was on the issue tracker (resource-submission triage):
- 2 submissions auto-closed after failing pending validation: [#2692 goalify](https://github.com/hesreallyhim/awesome-claude-code/issues/2692), [#2691 Bermuda](https://github.com/hesreallyhim/awesome-claude-code/issues/2691)
- 8 submissions passed validation and are awaiting a maintainer merge decision (listed below in Hot Topics).

## 4. Community Hot Topics

Reaction/comment counts are uniformly low (each issue has exactly 1 comment — almost certainly the validation bot — and 0 👍), so there's no single breakout thread. The more useful signal is thematic clustering of same-day submissions, which points to a clear underlying need: **coordinating multiple parallel Claude Code sessions**.

- **Agent Orchestration** is the dominant category today, with three separate independent submissions solving overlapping problems:
  - [#2693 dibs](https://github.com/hesreallyhim/awesome-claude-code/issues/2693) — file-claiming coordination layer for parallel sessions on one repo
  - [#2691 Bermuda](https://github.com/hesreallyhim/awesome-claude-code/issues/2691) (closed) — Go cron scheduler/sequencer for Claude Code jobs
  - [#1653 Bernstein](https://github.com/hesreallyhim/awesome-claude-code/issues/1653) — open-source governance layer for AI agents
- **Session observability/status** is the second cluster: [#2685 Baton](https://github.com/hesreallyhim/awesome-claude-code/issues/2685) (macOS menu bar), [#2687 tmux-claude-status-tabs](https://github.com/hesreallyhim/awesome-claude-code/issues/2687), [#2686 TermaGITchi](https://github.com/hesreallyhim/awesome-claude-code/issues/2686), [#2690 Vibisual](https://github.com/hesreallyhim/awesome-claude-code/issues/2690) — four different UIs for visualizing what a session/hook is doing right now.

Underlying need: as users run more concurrent Claude Code sessions, tooling demand is shifting from "single-session productivity" toward **multi-session coordination and at-a-glance visibility**.

## 5. Bugs & Stability

Not applicable in the traditional sense — this repo has no application code path exercised by these issues, only list curation. The closest analog is submission-validation failures:

- **[#2688 Skills Directory Security Reports](https://github.com/hesreallyhim/awesome-claude-code/issues/2688)** — flagged `validation-failed` (not auto-closed, still open). Likely a metadata/format issue in the submission template rather than a project defect; worth a maintainer look since it wasn't auto-closed like the two `validation-pending` cases.
- [#2692 goalify](https://github.com/hesreallyhim/awesome-claude-code/issues/2692) and [#2691 Bermuda](https://github.com/hesreallyhim/awesome-claude-code/issues/2691) — auto-closed for failing to pass pending validation within the expected window; no indication of a resubmission fix yet.

No regressions or crashes reported — no fix PRs needed today.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests against the awesome-list tooling itself, but submission trends act as a proxy roadmap signal for what the *ecosystem* — and by extension what curators may want to formalize — is converging on:
- A dedicated **"Multi-Session Coordination"** sub-category could be warranted given #2693, #2691, and #1653 all target the same problem space; currently they're split across "Agent Orchestration."
- **Security/trust tooling** for the skills ecosystem is emerging (#2688), suggesting a future "Security & Provenance" category as third-party skill installs grow.

## 7. User Feedback Summary

- Submitters are self-selecting into clear niches (orchestration, status lines, observability), suggesting the awesome-list categories are legible and submitters know where their tool fits.
- No qualitative pain-point commentary is visible in the data (each issue has only the bot's validation comment) — sentiment can't be assessed from this snapshot beyond submission volume/category trends.

## 8. Backlog Watch

- **[#1653 Bernstein](https://github.com/hesreallyhim/awesome-claude-code/issues/1653)** — open since 2026-04-21 (~4.5 months), still only `validation-passed` with no merge decision. This is by far the oldest open item in today's activity window and the clearest candidate for maintainer attention.
- **[#2474 review-pro](https://github.com/hesreallyhim/awesome-claude-code/issues/2474)** — open since 2026-08-09 (~3 weeks), validation-passed but unmerged.
- All 8 `validation-passed` submissions from today collectively represent a growing merge queue; with zero PRs closed in the last 24h, the gap between "validated" and "merged into the list" is widening.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest (2026-09-01)

## 1. Today's Overview
Activity in `VoltAgent/awesome-agent-skills` remains high-volume but entirely submission-driven: 28 PRs and 1 issue touched in the last 24 hours, with **zero merges, closes, or new releases**. The repo continues to function as a fast-growing community catalog — nearly every open PR is a "list your skill here" addition rather than a code change to the list infrastructure itself. No maintainer action (merge/close/comment) is visible in this window, which is the main signal worth watching: the submission pipeline is outpacing triage.

## 2. Releases
None. No new releases in this period.

## 3. Project Progress
No PRs were merged or closed today — all 28 tracked PRs remain open in `[PR-in-review]` or unreviewed state. Nothing structurally advanced in the repository itself; all forward motion is candidate additions awaiting maintainer review.

## 4. Community Hot Topics
Comment/reaction data is largely unavailable (`Comments: undefined`) for PRs, and the one tracked issue has 0 comments/reactions, so no item stands out by engagement metrics today. By content, the two PRs most likely to draw maintainer/community attention are:
- **[PR #980 — Fix skills-count badge (1497+ -> 1224)](https://github.com/VoltAgent/awesome-agent-skills/pull/980)**: a data-integrity correction to the README badge, reflecting real drift between the advertised skill count and the actual (637 GitHub paths + 578 `officialskills.sh` links) listing.
- **[Issue #992 — NEX Agent Co. listing (x402 + A2A commerce skill)](https://github.com/VoltAgent/awesome-agent-skills/issues/992)**: a proposal to list a payments/commerce MCP skill, representative of the growing agentic-commerce category being pitched for inclusion.

The underlying need across both: as the list scales past ~1,200 entries, the repo needs better bookkeeping (accurate counts, categorization) more than it needs raw growth.

## 5. Bugs & Stability
No crashes or regressions reported today. The closest analog is **[PR #980](https://github.com/VoltAgent/awesome-agent-skills/pull/980)**, which flags and fixes a documentation/metadata inaccuracy (badge overstating skill count by ~22%) rather than a functional bug. No fix is pending review beyond this PR itself.

## 6. Feature Requests & Roadmap Signals
No explicit roadmap or tooling feature requests were filed against the repo today; all "requests" are catalog additions. Notable candidates that hint at ecosystem direction (not core-repo features):
- **[PR #982 — Add skill-vet to Recommended tools](https://github.com/VoltAgent/awesome-agent-skills/pull/982)**: a static security scanner for `SKILL.md` bundles (prompt injection, exfiltration, credential harvesting, destructive commands) — suggests growing demand for **skill supply-chain vetting**, plausibly a future "Security Notice" section expansion.
- **[PR #984 — memory-shield](https://github.com/VoltAgent/awesome-agent-skills/pull/984)**: agent memory-poisoning defense — same security-hardening theme as #982, reinforcing that skill/tool security tooling is an emerging sub-category worth a dedicated list section.
- **[PR #974 — rebelytics/task-observer](https://github.com/VoltAgent/awesome-agent-skills/pull/974)**: a meta-skill for continuous skill improvement/auto-creation, notable for its own maturity (2.1k stars, 29 contributors, v3.0.0 shipped same day) — likely a strong merge candidate given external traction.

## 7. User Feedback Summary
No direct dissatisfaction or bug reports from users today. Submission PRs implicitly signal what contributors value: clear public licensing (MIT/Apache-2.0), presence of a working `SKILL.md`, and multi-platform support (Claude Code, Codex, Cursor) are repeatedly cited as justification for inclusion (e.g., #994, #981, #977), suggesting these are the de facto acceptance bar contributors are self-enforcing ahead of maintainer review — a possibly useful signal for formalizing CONTRIBUTING.md criteria.

## 8. Backlog Watch
With 28 open PRs and 0 maintainer actions in 24h, the review queue is the primary risk area. Oldest items in this window still awaiting first maintainer response:
- **[PR #974 — task-observer](https://github.com/VoltAgent/awesome-agent-skills/pull/974)** and **[PR #975 — falsify](https://github.com/VoltAgent/awesome-agent-skills/pull/975)** (created 2026-08-28) — both over 3 days old with no merge/close.
- **[PR #976 — Tia-Portal-CLI](https://github.com/VoltAgent/awesome-agent-skills/pull/976)** (created 2026-08-28) — a niche industrial-automation skill (Siemens TIA Portal) that may need specialized review.
- **[Issue #992](https://github.com/VoltAgent/awesome-agent-skills/issues/992)** — new but zero engagement; worth monitoring if it stalls past a few days given the commerce/payments category is still sparsely represented.

Given the consistent ~1 PR/hour submission rate and no merges observed, maintainer bandwidth for triage appears to be the project's key bottleneck rather than contributor interest.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
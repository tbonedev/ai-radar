# MCP Ecosystem Digest 2026-08-11

> Issues: 0 | PRs: 5 | Projects covered: 7 | Generated: 2026-08-11 08:07 UTC

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
**2026-08-11**

## 1. Today's Overview

Activity in `modelcontextprotocol/servers` was light over the past 24 hours: zero issue activity and no new releases, but five pull requests touched the repo. Four remain open, all proposing additions to the `ADDITIONAL.md` resources/hosted-servers list (a NaijaBase BaaS server, a "productivity-suite" hosted server, a "tooltrim" compressing MCP gateway, and an "Open Index" context-graph toolkit), and one was closed. The pattern is consistent with a maturing "reference" repo that increasingly acts as a directory rather than a home for new server implementations — reinforced by an in-progress CI automation PR (#4528) that would auto-close new-server PRs and redirect contributors to the official [MCP Server Registry](https://github.com/modelcontextprotocol/registry). Overall health signal: stable, low-urgency, governance-focused rather than feature-focused.

## 2. Releases

None in the last 24 hours.

## 3. Project Progress

- **[#4626 – Add productivity-suite hosted MCP server to additional links](https://github.com/modelcontextprotocol/servers/pull/4626)** (zellkernel) — the only PR resolved today; it was **closed**, not merged. This is consistent with maintainers pushing hosted/new-server listing PRs out of scope for this repo (see #4528 below), suggesting a tightening of what `ADDITIONAL.md` will accept going forward.

No PRs were merged today, and no issues were closed.

## 4. Community Hot Topics

Reaction/comment counts were unavailable (`undefined`) or zero across all items today, so there's no clear engagement leader. By content, the most structurally significant item is:

- **[#4528 – ci: auto-close new-server PRs and triage new-server issues](https://github.com/modelcontextprotocol/servers/pull/4528)** (olaservo, open since 2026-07-14, still updated as of 2026-08-10) — this formalizes enforcement of the existing CONTRIBUTING.md policy that new server implementations belong in the MCP Server Registry, not this repo. The underlying need is reducing maintainer triage burden from a steady stream of "add my server" PRs (exactly the pattern seen in #4627, #4626, #4625, #4624 today).

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours (0 issue activity).

## 6. Feature Requests & Roadmap Signals

No traditional feature requests today; activity is entirely additive-listing PRs and governance tooling:

- **[#4627 – Add NaijaBase MCP server](https://github.com/modelcontextprotocol/servers/pull/4627)** (duro1983) — Nigeria-focused Supabase-alternative BaaS server (13 tools, NDPA 2023 compliant). Likely candidate for redirection to the Registry per #4528's policy once merged.
- **[#4625 – Add tooltrim compressing MCP gateway to Resources](https://github.com/modelcontextprotocol/servers/pull/4625)** (nac7) — a stdio proxy gateway claiming 94–99% token reduction on tool results. Signals growing community interest in token-efficiency/gateway tooling around MCP, a theme worth watching for future ecosystem roadmap discussion.
- **[#4624 – docs: add Open Index to resources](https://github.com/modelcontextprotocol/servers/pull/4624)** (pratik-mahalle) — adds a context-graph toolkit for agents to the Resources list.
- **[#4528](https://github.com/modelcontextprotocol/servers/pull/4528)** remains the most likely near-term merge, as it directly reduces ongoing maintenance overhead — a strong signal for what "ships next."

## 7. User Feedback Summary

Today's data doesn't surface direct end-user pain points (no issues opened/updated). Indirectly, the volume of "please list my server" PRs (4 of 5 today) suggests continued confusion or friction around where new MCP server implementations should be submitted — the repo vs. the Registry — which #4528 is explicitly designed to address.

## 8. Backlog Watch

- **[#4528 – ci: auto-close new-server PRs and triage new-server issues](https://github.com/modelcontextprotocol/servers/pull/4528)** — open since 2026-07-14 (nearly 4 weeks), still unmerged despite being a policy-enforcement/tooling change that would directly reduce the recurring PR noise seen today. Given three more new-server-listing PRs arrived in the same 24h window this PR aims to prevent, this is the highest-priority item for maintainer attention.
- The four open listing PRs (**#4627**, **#4625**, **#4624**, and the still-open remainder) will likely stay in limbo until #4528's policy is resolved one way or the other — worth tracking as a batch rather than individually.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP & Agent Ecosystem
**2026-08-11**

## 1. Ecosystem Overview

The personal AI assistant / agent ecosystem tracked here splits into two distinct layers: **protocol infrastructure** (MCP Servers, MCP Registry, Docker MCP Registry) and **curated discovery** (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills, Claude Plugins). Both layers show the same underlying dynamic — explosive submission volume from third-party server/skill/plugin authors is outpacing maintainer review and merge throughput almost everywhere. The official MCP repos are visibly steering new-server submissions away from themselves and toward the dedicated Registry, signaling a maturing, registry-centric distribution model rather than a single monolithic list. Two cross-cutting themes dominate community demand: **agent memory/persistence** (recurring across three separate repos) and **trust/verification tooling** (agent-output auditing, publish-pipeline integrity, supply-chain hardening). Overall, the ecosystem looks healthy and growing but strained on the human-review bottleneck — automation (bots, CI validation) is doing more of the load-bearing work than maintainers today.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score |
|---|---|---|---|---|
| **MCP Servers** | 0 | 5 (1 closed, 4 open) | None | Stable / Low-urgency (6.5/10) |
| **MCP Registry (official)** | 1 open (high-engagement) | 9 (8 merged/closed, 1 open) | None | Healthy hardening pass (7.5/10) |
| **Awesome MCP Servers** | 25 (all closed) | 122 (32 merged/closed, 90 open) | N/A (curated list) | Strained by volume (6/10) |
| **Docker MCP Registry** | 0 | 50 (0 merged/closed, all open) | None | Stalled automation (5/10) |
| **Claude Plugins (official)** | 4 (1 closed, 3 open) | 50 (~30 merged/closed, mostly bot) | None | Mixed — pipeline trust gap (5.5/10) |
| **Awesome Claude Code** | 8 opened (0 closed) | 0 | None | Steady-state curation (7/10) |
| **Awesome Agent Skills** | 0 | 5 (0 merged, all open) | None | Early-stage, untriaged (5.5/10) |

*Health scores are directional, based on merge throughput vs. submission volume, backlog age, and presence of unresolved trust/reliability issues — not an absolute ranking.*

## 3. MCP Servers's Position

**Advantages vs. peers:** As the original reference implementation repo, MCP Servers carries the most institutional weight and is actively enforcing scope discipline — PR #4528 (auto-close new-server PRs, redirect to the official Registry) shows a deliberate architectural choice to separate "reference/spec examples" from "server directory," a distinction Awesome MCP Servers and Docker MCP Registry haven't drawn as cleanly (both still accept a continuous stream of new-server listings directly).

**Technical approach differences:** MCP Servers is governance-first (policy enforcement via CI), MCP Registry is infrastructure-first (publish/auth tooling, CLI, schema), Awesome MCP Servers is curation-first (community-maintained Markdown index with bot-assisted labeling), and Docker MCP Registry is automation-first (bot-driven pin updates dominate its PR volume, ~40 of 50 today). MCP Servers sits upstream of all three as the canonical spec/example source.

**Community size comparison:** Awesome MCP Servers has by far the largest submission surface (122 PRs touched in 24h vs. single digits for MCP Servers and MCP Registry), reflecting its role as the de facto discovery index — but this scale comes with the lowest merge-to-submission ratio (32/122 ≈ 26%) among the protocol-layer repos, while MCP Servers' own PR volume is intentionally small and governance-constrained.

## 4. Shared Technical Focus Areas

- **Agent memory/persistence** — recurring across **Awesome MCP Servers** (saor-mcp, IndustrialBrainMCP, Spokes, RE-call), **Docker MCP Registry** (plori's persistent "cloud computer" primitive), and **Awesome Agent Skills** implicitly (red-handed verification touches session/state auditing). This is the single most cross-cutting theme in the dataset.
- **Trust, verification, and supply-chain integrity** — **MCP Registry** (#1523 installer pinning/Sigstore verification), **Awesome Agent Skills** (#886 red-handed, verifying agent-claimed test runs against ground truth), and **Awesome Claude Code** (#2487 gitreceipts, reconciling session logs against git history). Three independent projects are converging on "did the agent actually do what it claims?" as a need.
- **Publishing/submission pipeline reliability** — **MCP Registry** (#1468 org-namespace publish 403) and **Claude Plugins** (#1272, #5139, #5111 — "Published" status not reflected in marketplace) both show unresolved, multi-week friction between submission status and actual visibility/authorization.
- **Cross-provider / gateway interoperability** — **Docker MCP Registry** (agent-identity-mcp bundling verification services) and **Awesome Claude Code** (#2488 ccgpt, Anthropic Messages ↔ OpenAI Responses gateway) both reflect demand for bridging agent tooling across ecosystems.
- **Token/cost efficiency at the protocol layer** — **MCP Servers** (#4625 tooltrim, a compressing MCP gateway claiming 94–99% token reduction) is a solitary but notable signal worth watching for follow-on demand elsewhere.

## 5. Differentiation Analysis

| Dimension | MCP Servers | MCP Registry | Awesome MCP Servers | Docker MCP Registry | Claude Plugins | Awesome Claude Code | Awesome Agent Skills |
|---|---|---|---|---|---|---|---|
| **Feature focus** | Reference examples + governance | Publish/auth infra, CLI, schema | Discovery/curation | Containerized, pinned server catalog | Plugin marketplace for Claude Code | Curated Claude Code resources | Curated agent skills |
| **Target user** | Spec implementers | Server publishers | Server seekers/evaluators | Docker/enterprise ops teams | Claude Code plugin authors/users | Claude Code power users | Skill authors/users |
| **Architecture** | Static code examples | Go services + CLI (`mcp-publisher`) | Markdown list + Glama sync | Docker image pin manifest, bot-automated | Git submodule marketplace, CI-validated | Markdown resource list | Markdown skill list |

The clearest architectural split is **who owns distribution risk**: MCP Registry and Docker MCP Registry take on infrastructure/security responsibility (pinning, signing, auth), while the Awesome-* repos and MCP Servers deliberately externalize that risk by pointing to canonical registries or excluding themselves from hosting duties.

## 6. Community Momentum & Maturity

- **Rapidly iterating / high submission volume:** Awesome MCP Servers (122 PRs/24h) and Docker MCP Registry (50 PRs/24h, though bot-dominated) and Claude Plugins (50 PRs/24h, also bot-dominated) — all three show high raw throughput, but two of them (Docker, Claude Plugins) are mostly automated pin/SHA bumps rather than human feature work.
- **Stabilizing / governance-hardening:** MCP Servers (actively narrowing scope via CI policy) and MCP Registry (today's activity was almost entirely docs/script correctness fixes, a classic pre-release hardening signal) both show maturity through *reduction* of scope and *fixing* of latent bugs rather than net-new features.
- **Early-stage / low-triage:** Awesome Agent Skills (0/5 PRs merged, zero maintainer engagement visible) and, to a lesser extent, Awesome Claude Code (8 fresh submissions, none yet triaged) — both show healthy contributor interest but a maintainer bandwidth gap.
- **Stalled automation:** Docker MCP Registry stands out negatively — bot-generated pin-update PRs dating back to November 2025 remain unmerged, suggesting the automated pipeline itself needs a maintainer-side fix, not just more submissions.

## 7. Trend Signals

1. **Registry-centric distribution is becoming the norm.** MCP Servers actively redirecting new-server PRs to the MCP Server Registry (#4528) signals the ecosystem is consolidating around a single canonical registry pattern rather than N competing lists — developers building MCP servers should target the Registry directly rather than reference-repo PRs for discoverability.
2. **Agent memory is the top emerging product category.** Independent, unprompted clustering across Awesome MCP Servers and Docker MCP Registry around persistent memory/state servers suggests this is near a tipping point where a dedicated taxonomy section or even a protocol-level primitive may emerge — worth prioritizing for teams building agent infrastructure.
3. **"Trust but verify" tooling is a nascent but real category.** Session-transcript auditing (red-handed, gitreceipts) and publish-pipeline integrity (Sigstore pinning) appearing independently across three unrelated repos indicates growing developer anxiety about agent-claimed outcomes and supply-chain provenance — an area with clear whitespace for new tooling.
4. **Submission-to-visibility trust gaps are a recurring failure mode.** Both MCP Registry (org-namespace 403s) and Claude Plugins (Published-but-invisible plugins) show that publish/authorization logic is an under-tested seam across marketplace-style repos — teams building similar registries should budget explicit QA for this transition state.
5. **Automation is outrunning maintainer capacity.** Bot-driven PR volume (Docker MCP Registry, Claude Plugins SHA bumps) is efficient at proposing changes but is now the primary source of stale, unmerged backlog — a caution for teams designing similar automation that merge/triage capacity must scale alongside submission automation, or the automation itself becomes noise.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
**2026-08-11**

## 1. Today's Overview

Activity in the last 24 hours was **moderate and maintenance-focused**, dominated by documentation and tooling fixes rather than new features. One open issue remains active (a publishing-permissions bug with organisation namespaces), and 9 PRs were touched — 8 merged/closed and 1 newly opened. No new releases shipped. The bulk of merged work came from a single contributor (`rdimitrov`) cleaning up stale docs, fixing CLI/admin script bugs, and correcting schema examples — signs of a healthy pre-release hardening pass rather than a feature push. The one open PR (#1523) addresses a supply-chain security gap in the publishing guide, suggesting the team is actively tightening release/security hygiene.

## 2. Releases

None in the last 24 hours.

## 3. Project Progress

Eight PRs merged/closed today, almost entirely docs and script correctness fixes:

- **[#1522](https://github.com/modelcontextprotocol/registry/pull/1522)** — Removed the stale, 2,944-line `complete.md` doc dump and fixed remaining references to the old docs layout. Reduces doc bloat/confusion for contributors.
- **[#1520](https://github.com/modelcontextprotocol/registry/pull/1520)** — Corrected contributor prerequisites (Go version drift: README said 1.24.x, actual `go.mod` requires 1.26) and removed duplicated version references.
- **[#1521](https://github.com/modelcontextprotocol/registry/pull/1521)** — Fixed deploy README config parameter names (`gcpProjectId` → `gcp:project`), plus added two undocumented required parameters — a real deploy-blocking doc bug.
- **[#1519](https://github.com/modelcontextprotocol/registry/pull/1519)** — Fixed `mcp-publisher` CLI docs: the ECDSA P-384 login tab incorrectly duplicated the Ed25519 command (missing `--algorithm` flag), and `validate --help` output was wrong.
- **[#1518](https://github.com/modelcontextprotocol/registry/pull/1518)** — Fixed the admin takedown script and runbook: it sent `PUT ?status=deleted` to endpoints that actually require `PATCH` — the script could not have worked as written.
- **[#1511](https://github.com/modelcontextprotocol/registry/pull/1511)** — Added `cargo`/`crates.io` to schema examples (cargo registry support has been live since v1.8.0 but examples lagged).
- **[#1517](https://github.com/modelcontextprotocol/registry/pull/1517)** — Fixed broken relative links in `releasing.md` (incorrect `../../../` path depth).
- **[#1514](https://github.com/modelcontextprotocol/registry/pull/1514)** — Dependabot bump: `go-git/v6` 6.0.0-alpha.4 → 6.0.0-alpha.5 (deploy module).

**Net effect:** no runtime feature changes, but two of these (#1521, #1518) fix genuinely broken operational scripts/docs that would have caused real deploy/admin failures — meaningful reliability work even though it's not user-facing.

## 4. Community Hot Topics

- **[Issue #1468](https://github.com/modelcontextprotocol/registry/issues/1468)** — "Unable to publish under GitHub organisation namespace despite organisation ownership." 9 comments, 👍3, open since 2026-07-20, still updated yesterday (2026-08-10). This is by far the most engaged item in the window. The underlying need: organisation-owned repos hitting a 403 on `mcp-publisher publish` despite passing validation — a permissions/namespace-ownership check bug that's blocking real publishers from onboarding. Given the multi-week thread with continued maintainer engagement, this looks like the top candidate for a near-term fix.
- **[PR #1523](https://github.com/modelcontextprotocol/registry/pull/1523)** — "docs(security): pin and verify mcp-publisher installer," fixing #1505. Reflects a supply-chain concern: the GHA publishing guide pulled `mcp-publisher` via mutable `releases/latest` without Sigstore verification. Community/maintainer appetite here signals rising attention to publish-pipeline security.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#1468](https://github.com/modelcontextprotocol/registry/issues/1468) — Org namespace publish blocked (403)** — High severity for affected users: blocks publishing entirely for organisation-owned packages despite correct ownership and passing local validation. No fix PR linked yet; still open after 3 weeks with active discussion. **Needs maintainer triage.**
2. **[#1518](https://github.com/modelcontextprotocol/registry/pull/1518) — Admin takedown script broken (PUT vs PATCH)** — Already fixed today. Was a real operational bug (wrong HTTP method against the status endpoints) that would have made the admin takedown runbook non-functional in a real incident.
3. **[#1519](https://github.com/modelcontextprotocol/registry/pull/1519) — ECDSA P-384 login instructions non-functional** — Already fixed today. Docs bug, not a code bug, but would have caused login failures for anyone following the P-384 path.
4. **[#1523](https://github.com/modelcontextprotocol/registry/pull/1523) — Unverified installer download (supply-chain risk)** — Open fix in progress; not an active exploit report but a hardening fix for a latent risk in the publishing guide.

## 6. Feature Requests & Roadmap Signals

No explicit new feature requests surfaced in this 24h window. Signals worth watching:

- **Namespace/ownership validation logic** (from #1468) may need a roadmap item to reconcile GitHub org membership checks with the publish-time authorization check — likely the most concrete near-term fix candidate.
- **Installer supply-chain hardening** (#1523, following up on #1505) suggests a broader initiative around Sigstore verification across publishing tooling, not just the one guide — possible follow-on PRs pinning/verifying other install paths.
- **cargo/crates.io registry support** (#1511) is already live (since v1.8.0); today's PR was purely a docs catch-up, not a new feature.

## 7. User Feedback Summary

- **Pain point:** Organisation publishers hitting an opaque 403 despite passing `mcp-publisher validate` — a trust/onboarding friction point for teams trying to publish under an org namespace (#1468). 3 reactions plus a 9-comment thread indicate this affects more than one user and has drawn sustained community interest.
- **Positive signal:** Several docs/script bugs (deploy config names, admin takedown method, CLI algorithm flag) were caught and fixed the same day they were likely discovered by contributor `rdimitrov`, indicating active internal QA/dogfooding of the docs and admin tooling rather than waiting on external bug reports.
- **No explicit satisfaction commentary** (e.g., praise or complaints about UX) appeared in this window's data — activity was almost entirely maintenance/correction-oriented.

## 8. Backlog Watch

- **[Issue #1468](https://github.com/modelcontextprotocol/registry/issues/1468)** — Open 22 days (since 2026-07-20), 9 comments, still actively updated as of 2026-08-10, but **no linked fix PR**. This is the clearest candidate for maintainer attention given its age, engagement, and blocking nature for organisation publishers.
- **[PR #1523](https://github.com/modelcontextprotocol/registry/pull/1523)** — Opened today, addresses a real security gap (#1505); worth tracking for quick review/merge given the supply-chain angle.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-08-11)

## 1. Today's Overview

Activity remains heavily submission-driven: 25 issues were touched in the last 24h (all now closed, none open/active) and 122 PRs were updated (90 still open, 32 merged/closed). No new releases — this is a curated list repo, not a shipping codebase, so "releases" isn't really the right lens for its health. The dominant signal is a continuous, high-volume stream of "please add my MCP server" submissions, the large majority auto-tagged by a bot with metadata labels (`has-emoji`, `valid-name`, `missing-glama`/`has-glama`, `duplicate`). Genuine maintenance activity (bug reports, meta-discussion about the list's role as a discovery surface) is a small minority of total traffic. Overall project health looks stable but strained under submission volume — throughput of new-entry PRs (90 open) is outpacing visible merge activity.

## 2. Releases

None — no new releases in this window.

## 3. Project Progress

32 PRs were merged/closed today, almost entirely new-server listing additions following the standard entry format (name, repo, category, transport, license). Two are worth calling out as actual quality-of-list fixes rather than net-new additions:

- [#11913 — "proximo: drop the stale tool count"](https://github.com/punkpeye/awesome-mcp-servers/pull/11913): removes a hardcoded tool-count number from an existing entry because it goes stale every release; a small but genuinely useful correctness fix.
- [#8428 — Add FoundryNet Forge (forge-mcp)](https://github.com/punkpeye/awesome-mcp-servers/pull/8428): closed after ~7 weeks open, industrial-telemetry MCP server.

Several closures are flagged `duplicate` (e.g. [#10182](https://github.com/punkpeye/awesome-mcp-servers/pull/10182) for PrivacyScrubber, mirroring issue [#10803](https://github.com/punkpeye/awesome-mcp-servers/issues/10803)), suggesting some submitters file both an issue and a PR for the same server, adding to triage overhead.

## 4. Community Hot Topics

Engagement is uniformly thin today — no issue exceeds 3 comments and PR comment counts weren't available in this data pull, so "hot" here means highest relative signal rather than genuinely viral threads:

- [#11333 — Add saor-mcp: persistent brain for AI agents](https://github.com/punkpeye/awesome-mcp-servers/issues/11333) (3 comments) — the top-discussed item, reflecting continued strong interest in agent long-term-memory servers as a category.
- [#11613 — Permission request for attributed collection page](https://github.com/punkpeye/awesome-mcp-servers/issues/11613) and [#11867 — awesome-mcp-servers is indexed on our MCP marketplace](https://github.com/punkpeye/awesome-mcp-servers/issues/11867) — both point to third-party sites building derivative MCP directories/marketplaces off this list, underscoring the repo's role as the de facto canonical index for MCP servers.
- [#11596 — DReview as a related MCP directory](https://github.com/punkpeye/awesome-mcp-servers/issues/11596) — a competing directory maintainer asking to be cross-linked, same underlying theme: multiple parties want to piggyback on this repo's discovery traffic.

The underlying need across these threads is discoverability arbitrage — third parties treat this list as the authoritative MCP registry and want either inclusion, cross-linking, or reuse permission.

## 5. Bugs & Stability

No crashes or regressions in the repo's own tooling (it's a Markdown list, so "stability" mostly concerns the Glama.ai listing platform referenced throughout):

- [#9563 — Glama.ai renders AsciiDoc READMEs (README.adoc) as raw markup](https://github.com/punkpeye/awesome-mcp-servers/issues/9563) — moderate severity, cosmetic but real: any listed server using AsciiDoc instead of Markdown displays broken on the Glama directory. Filed against this repo only because it's the closest public venue for Glama feedback; no fix PR visible here since the actual fix would live in Glama's own codebase, not this repo.
- [#8698 — Update Glama listing after repository rename](https://github.com/punkpeye/awesome-mcp-servers/issues/8698) — stale listing metadata after a repo rename (`safe-bifrost` → `PatchWarden`); low severity, data-freshness issue on Glama's side.
- [#11440 — Glama owner shutdown request: permanently delete Haunt listings](https://github.com/punkpeye/awesome-mcp-servers/issues/11440) — a data-deletion/right-to-be-forgotten style request for a shut-down project; not a code bug but a governance gap (no clear process for removing dead listings).

## 6. Feature Requests & Roadmap Signals

No structural feature requests for the repo itself today — activity is 100% entry submissions plus a couple of process questions. Patterns worth watching:

- Heavy submission clustering around **Knowledge & Memory** (saor-mcp, IndustrialBrainMCP, Spokes, RE-call, 3Notch, Compartment) — persistent/long-term agent memory continues to be the single most active category by submission count, suggesting the next curated update will likely expand or split this section.
- Growing **x402 (HTTP 402 micropayment) MCP servers** (AllRouter, SqueezeOS, x402 MCP Registry) — an emerging sub-category around pay-per-call tool monetization that isn't yet a first-class section.
- Repeated requests to add alternate directories ([#11596](https://github.com/punkpeye/awesome-mcp-servers/issues/11596), [#11867](https://github.com/punkpeye/awesome-mcp-servers/issues/11867)) hint maintainers may eventually need an explicit policy on cross-linking third-party MCP marketplaces rather than handling each ad hoc.

## 7. User Feedback Summary

Submitters are generally satisfied contributors trying to get servers listed — no negative sentiment about the repo itself. Real pain points surfaced:

- Submission fatigue/duplication: the same author (TomyRioss) filed two nearly identical issues five servers each ([#11057](https://github.com/punkpeye/awesome-mcp-servers/issues/11057), [#11081](https://github.com/punkpeye/awesome-mcp-servers/issues/11081)) three days apart, suggesting unclear guidance on issue vs. PR as the correct submission path.
- Third-party platform (Glama) friction bleeding into this repo's issue tracker — three separate issues today ([#9563](https://github.com/punkpeye/awesome-mcp-servers/issues/9563), [#8698](https://github.com/punkpeye/awesome-mcp-servers/issues/8698), [#11440](https://github.com/punkpeye/awesome-mcp-servers/issues/11440)) are really Glama support requests filed here for lack of a better venue — a UX gap for users who don't know where else to go.
- Maintainer-of-a-listed-server anxiety around stale/incorrect metadata (tool counts, renamed repos) persisting on Glama, indicating the sync between this list and the Glama directory isn't fully automated or timely.

## 8. Backlog Watch

All 25 issues closed today were opened between 2026-06-25 and 2026-08-10 and sat for 1–7 weeks before closure — routine for a submission-queue repo, not alarming on its own. Items worth flagging for maintainer follow-up given they involve process/policy rather than a simple listing add:

- [#11613 — Permission request for attributed collection page](https://github.com/punkpeye/awesome-mcp-servers/issues/11613) (closed, 0 comments) — a licensing/reuse question that got no visible discussion before closure; worth confirming it was actually answered rather than auto-closed.
- [#11440 — Glama shutdown/deletion request](https://github.com/punkpeye/awesome-mcp-servers/issues/11440) (closed, 0 comments) — a data-removal request with no comment trail; if genuinely unresolved, this is a compliance-adjacent item that shouldn't be silently closed.
- With 90 PRs still open against only 32 closed today, the open-PR backlog is growing faster than throughput — worth a periodic bulk-triage pass, particularly for the flagged `duplicate` entries which are consuming review cycles twice.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest (2026-08-11)

## 1. Today's Overview

Activity today is dominated by routine maintenance rather than substantive development: of the 50 PRs updated in the last 24h, none were merged or closed, and the overwhelming majority (roughly 40+) are automated `mcp-registry-bot[bot]` "update pin" commits that bump commit-hash pins for existing server entries (firecrawl, exa, vizro, testkube, teamwork, stripe, mongodb, mapbox, etc.). Genuine human contribution is limited to a small handful of new-server submission PRs (agent-identity-mcp, Zopnight, plori). With zero issues opened/closed and zero releases, this looks like a low-intensity maintenance day for the registry — the bot pin-update queue appears to be backlogged, with some pins (e.g. #523, #614, #788) sitting open since November 2025. Overall project health signal: stable, automation-heavy, but with a growing unmerged backlog of routine bot PRs.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24h (0 of 50 updated PRs reached a terminal state). All 50 remain open, meaning no features, fixes, or pin updates actually landed today — activity was limited to PRs being touched/rebased/updated, not resolved.

## 4. Community Hot Topics

Comment/reaction counts were not populated in today's data (all PRs show `Comments: undefined`, 👍: 0), so no ranking by engagement is possible. Based on submission content, the most notable new proposals are:

- **[#4667 – Add agent-identity-mcp to Communication](https://github.com/docker/mcp-registry/pull/4667)** — bundles disposable email + real UK SIM phone verification so agents can complete signup/verification flows end-to-end. Signals growing demand for agent identity/verification tooling.
- **[#4666 – Add Zopnight remote MCP server](https://github.com/docker/mcp-registry/pull/4666)** — read-only cloud cost/governance across AWS, Azure, GCP with 85 tools. Reflects continued interest in FinOps/cloud-governance agent tooling.
- **[#4231 – Add plori remote MCP server](https://github.com/docker/mcp-registry/pull/4231)** — gives agents persistent hosted "cloud computers" (disk, tools, memory across sessions, scale-to-zero). Points to demand for durable agent execution environments as an MCP-exposed primitive.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions surfaced in today's issue/PR data (0 issues total). No stability concerns to flag.

## 6. Feature Requests & Roadmap Signals

No formal feature-request issues today, but the three new-server PRs act as de facto roadmap signals for registry expansion:

- **Agent identity/verification servers** (#4667) — likely candidate for near-term merge given it composes existing working services rather than introducing new infra.
- **Cloud cost/governance servers** (#4666, Zopnight) — fits the registry's existing pattern of cloud-ops MCP servers (alongside awslabs-cost-explorer, awslabs-cloudwatch-appsignals already in the pin-update queue).
- **Persistent hosted agent environments** (#4231, plori) — a newer category (durable agent compute) that may need more registry maintainer review given it's a novel server type rather than a wrapper around an existing API.

Expect the next registry update to focus on clearing the bot pin-update backlog rather than shipping new categories.

## 7. User Feedback Summary

No direct user feedback (satisfaction/dissatisfaction commentary) is present in today's data — the queue is entirely submission/automation traffic. The three new submissions implicitly signal use cases: (1) agents needing real-world identity for testing signup flows, (2) agents needing cloud cost visibility/governance, (3) agents needing persistent, stateful execution environments — all suggesting users are pushing MCP servers beyond simple API wrappers toward agent infrastructure and lifecycle management.

## 8. Backlog Watch

Several automated pin-update PRs have been open for extended periods without merging, worth maintainer attention to confirm the bot pipeline is healthy:

- **[#523 – update pin for oxylabs](https://github.com/docker/mcp-registry/pull/523)** — open since 2025-11-03 (>9 months)
- **[#614 – update pin for awslabs-cloudwatch-appsignals](https://github.com/docker/mcp-registry/pull/614)** — open since 2025-11-07
- **[#788 – update pin for omi](https://github.com/docker/mcp-registry/pull/788)** — open since 2025-11-26
- **[#799 – update pin for vizro](https://github.com/docker/mcp-registry/pull/799)** — open since 2025-11-27
- **[#1083 – update pin for stripe](https://github.com/docker/mcp-registry/pull/1083)** — open since 2026-02-07

These long-lived open bot PRs suggest the pin-update auto-merge (or review) process may be stalled; a maintainer sweep to bulk-merge or investigate why these aren't auto-closing would reduce registry noise.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) — Daily Digest
**2026-08-11**

## 1. Today's Overview

Activity in the last 24 hours was dominated by routine automation rather than substantive development: of 50 PRs updated, the vast majority are `github-actions[bot]`-generated SHA bump PRs that auto-validate and sync plugin submodule references (langfuse, wix, stripe, mlflow, aws-agents, and dozens more). Only 4 issues were touched, with one closed and three open — including a fresh report filed today. No new releases shipped. The most notable substantive activity is one merged human-authored PR (`mongodb-atlas` plugin) and a recurring, unresolved pattern of plugin-submission-to-marketplace-visibility complaints, which now spans at least three issues and appears to be the project's most persistent pain point.

## 2. Releases

None today — no new tagged releases.

## 3. Project Progress

- **[#5113 — Add mongodb-atlas plugin](https://github.com/anthropics/claude-plugins-official/pull/5113)** (merged, authored by an Anthropic team member `bryan-anthropic`): adds the MongoDB Atlas plugin, connecting Claude Code to Atlas clusters via the Atlas Managed MCP Server plus bundled MongoDB skills for schema design, query optimization, and natural-language querying.
- The remaining ~30 merged/closed PRs are automated dependency maintenance — SHA bump PRs for existing plugins (e.g., [#5138 nimble](https://github.com/anthropics/claude-plugins-official/pull/5138), [#5137 carta-investors](https://github.com/anthropics/claude-plugins-official/pull/5137)) that pass `claude plugin validate` in CI before being opened. These represent marketplace upkeep, not new capability.

## 4. Community Hot Topics

- **[#1272 — Plugin marked "Published" but not in marketplace directory](https://github.com/anthropics/claude-plugins-official/issues/1272)** — by far the most active item (34 comments, 16 👍), open since April 2026 and still unresolved as of today. Underlying need: authors expect that once a submission is marked "Published" in the submissions dashboard, it should reliably surface in the public marketplace listing; the recurring silence from the Claude team is amplifying frustration and community distrust in the review pipeline.
- The bulk of remaining PR "discussion volume" is structural (automated bump PRs have no comments by design), so outside of #1272 there is no other high-engagement thread today — a sign that community energy is concentrated almost entirely on the publishing pipeline issue.

## 5. Bugs & Stability

- **[#5116 — `clean_gone` silently no-ops on non-English locales](https://github.com/anthropics/claude-plugins-official/issues/5116)** (Medium severity): the `commit-commands` plugin's `/clean_gone` command fails to detect `[gone]` branches when the git locale isn't English, and reports false success ("no cleanup was needed") instead of surfacing the parse failure. This is a silent-failure bug — data/state isn't corrupted, but users get an incorrect success signal. No fix PR currently linked.
- No crashes or regressions reported today; the automated SHA-bump PRs all report passing `claude plugin validate` checks, so no stability signal from that channel.

## 6. Feature Requests & Roadmap Signals

- No explicit new feature requests were filed today. The dominant signal is **process/tooling reliability** rather than new capability: multiple users are effectively requesting a transparent, working submission-to-marketplace pipeline (status visibility, timely review, error feedback on rejection) rather than a specific new feature.
- Given three separate issues now converging on this same publishing-pipeline gap (#1272, #5139, #5111), a plausible near-term roadmap item is either an improved status page/notification system for submissions or a maintainer sweep to manually clear the backlog.

## 7. User Feedback Summary

- **Pain point — opaque submission pipeline**: consistent complaint across #1272, [#5139](https://github.com/anthropics/claude-plugins-official/issues/5139), and [#5111](https://github.com/anthropics/claude-plugins-official/issues/5111) — plugins get marked "Published"/"Submitted" but never appear in the marketplace, with no error message, rejection reason, or ETA. Authors describe waiting since June 2026 (#5139) with zero feedback, which reads as an accountability/communication gap rather than a technical one.
- **Pain point — locale-unaware tooling**: #5116 shows that plugin commands assuming English git output can silently mislead non-English-locale users, a category of bug that's easy to miss in testing but erodes trust once discovered.
- **Positive signal**: automated SHA-bump infrastructure appears healthy — every bump PR is pre-validated via CI before opening, indicating the marketplace's dependency-freshness tooling is working as intended.

## 8. Backlog Watch

- **[#1272](https://github.com/anthropics/claude-plugins-official/issues/1272)** — open ~4 months (since April 2026), 34 comments, no visible maintainer response per the reporter; now closed today but the closure reasoning isn't evident from the summary and should be checked to confirm whether it was actually resolved or just archived.
- **[#5139](https://github.com/anthropics/claude-plugins-official/issues/5139)** — submission pending review since June 10, 2026 (two months), filed today as an escalation; represents an aging backlog item surfacing through a fresh complaint.
- **[#5111](https://github.com/anthropics/claude-plugins-official/issues/5111)** — same marketplace-visibility gap, unaddressed since August 10, 2026.
- Recommend maintainers prioritize a consolidated response across #5139/#5111 (and verifying whether #1272's closure actually resolved the root cause), since this is the single largest source of repeated community friction right now.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest
**Date: 2026-08-11**

## 1. Today's Overview

Activity over the last 24 hours was driven entirely by community resource submissions — 8 new issues opened, all tagged `resource-submission` and `validation-passed`, with zero PRs and zero releases. This is typical steady-state activity for a curated awesome-list repository rather than a software project with runtime bugs: contributors are proposing new tools, skills, and guides for inclusion rather than reporting defects. Submission quality looks healthy (all 8 already cleared automated validation), and the mix skews toward Agent Orchestration and infrastructure/observability tooling, suggesting the Claude Code ecosystem is maturing beyond simple scripts into multi-agent and pipeline tooling. No maintainer engagement (merges, closes, or substantive comments) is visible yet on any of today's submissions — each has exactly 1 comment, most likely an automated bot acknowledgment.

## 2. Releases

None — no new releases in the tracked window.

## 3. Project Progress

No PRs were merged, closed, or opened in the last 24 hours. No issues were closed. All 8 issues opened today remain open pending maintainer review/merge into the list.

## 4. Community Hot Topics

No issue stands out by engagement — all 8 submissions have exactly 1 comment (likely the standard validation bot response) and 0 👍 reactions, so there is no differentiated "hot topic" yet. By submission volume, the notable clustering is:

- **Agent Orchestration** (2 submissions): [#2489 Vigil](https://github.com/hesreallyhim/awesome-claude-code/issues/2489) (macOS manager–worker session runner) and [#2484 guashuai-junshi](https://github.com/hesreallyhim/awesome-claude-code/issues/2484) (dual-model plan/review doctrine) — both point to continued community interest in multi-agent/multi-model orchestration patterns on top of Claude Code.
- **Infrastructure/Providers**: [#2488 ccgpt](https://github.com/hesreallyhim/awesome-claude-code/issues/2488), a local Anthropic-Messages-to-OpenAI-Responses gateway, signals demand for interop between Claude Code and OpenAI-compatible tooling/backends.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. This repo is a curated resource list, not a runtime codebase, so stability issues would surface in the linked external projects rather than here.

## 6. Feature Requests & Roadmap Signals

There are no explicit feature requests against the awesome-list repo itself, but the submitted resources hint at where the broader ecosystem is heading and what categories may see more submissions next:

- **Observability/session auditing** — [#2487 gitreceipts](https://github.com/hesreallyhim/awesome-claude-code/issues/2487) reconciles Claude Code session logs against git history, pointing to growing demand for verifying/auditing what an agent actually did versus what it committed.
- **Cross-provider gateways** — [#2488 ccgpt](https://github.com/hesreallyhim/awesome-claude-code/issues/2488) suggests continued appetite for bridging Claude Code's Anthropic Messages API to OpenAI-style backends, likely to keep growing as more self-hosted/local model users want Claude Code as a front end.
- **Status line customization** — [#2483 ccsidekick](https://github.com/hesreallyhim/awesome-claude-code/issues/2483) continues a recurring trend of expressive/reactive status-line tooling for Claude Code.
- **Document-format skills** — [#2482 claw-hwp](https://github.com/hesreallyhim/awesome-claude-code/issues/2482) (Korean HWP support) reflects ongoing expansion of the Skills category into locale/format-specific niches.

None of these are "roadmap" items for this repo per se (it has no software roadmap), but they are reasonable candidates for merge into the list once maintainer review completes.

## 7. User Feedback Summary

No direct user satisfaction/dissatisfaction commentary appears in today's data — all issues are structured resource-submission templates (Display Name / Category / Link / Description) rather than discussion threads. The submissions themselves imply pain points their authors are solving for:

- Difficulty trusting/auditing what autonomous coding sessions actually changed (gitreceipts).
- Friction running or managing multiple Claude Code sessions as a manager/worker fleet (Vigil).
- Lack of native OpenAI-Responses-API compatibility for local/self-hosted setups (ccgpt).
- Desire for more expressive, at-a-glance session feedback beyond a static status line (ccsidekick).

## 8. Backlog Watch

All 8 issues opened today (#2482–#2489) are unreviewed by maintainers as of this snapshot and should be watched for aging if they remain untriaged beyond a few days, per the repo's typical resource-submission turnaround:

- [#2489 Vigil](https://github.com/hesreallyhim/awesome-claude-code/issues/2489)
- [#2488 ccgpt](https://github.com/hesreallyhim/awesome-claude-code/issues/2488)
- [#2487 gitreceipts](https://github.com/hesreallyhim/awesome-claude-code/issues/2487)
- [#2486 Gymbro](https://github.com/hesreallyhim/awesome-claude-code/issues/2486)
- [#2485 CLAUDE.md Best Practices Guide](https://github.com/hesreallyhim/awesome-claude-code/issues/2485)
- [#2484 guashuai-junshi](https://github.com/hesreallyhim/awesome-claude-code/issues/2484)
- [#2483 ccsidekick](https://github.com/hesreallyhim/awesome-claude-code/issues/2483)
- [#2482 claw-hwp](https://github.com/hesreallyhim/awesome-claude-code/issues/2482)

No long-dormant issues or PRs are visible in this 24-hour data window; a longer lookback would be needed to identify items genuinely stuck in backlog.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest (2026-08-11)

## 1. Today's Overview
Activity in the last 24 hours was light but steady, consistent with this repository's role as a community-curated index rather than an active codebase. There were no issues, no releases, and no merges — all 5 tracked PRs are open skill submissions awaiting maintainer review. Four of the five PRs were opened within the last 24 hours (#885–#888), plus one carried over from 2026-08-10 (#886), showing a healthy, ongoing trickle of community contributions. Overall project health looks stable: the review queue is growing slightly since nothing was merged today, but there's no sign of bugs, regressions, or contentious discussion. This is a typical "curation lull" day for an awesome-list repo.

## 2. Releases
None — no new releases in this period.

## 3. Project Progress
No PRs were merged or closed today (0/5). All open PRs remain in the "Add skill" submission stage with no visible review comments or reactions yet, suggesting they haven't been triaged by a maintainer since being opened.

## 4. Community Hot Topics
No issues or PRs show elevated comment/reaction counts (all currently at 0 comments / 0 👍), so there isn't a clear "hot topic" today. The closest signal is the volume of submissions itself — 4 new skill-addition PRs opened in one day is a notable clustering, pointing to sustained interest in contributing to the list:
- [PR #888 — Add skill: Anmoll-W/decoder](VoltAgent/awesome-agent-skills PR #888) — a skill that explains technical concepts to PMs via research + analogies.
- [PR #887 — Add skill: liuboacean/mubu-integration](VoltAgent/awesome-agent-skills PR #887) — integrates the Mubu (幕布) outlining tool with Claude Code agents.
- [PR #886 — Add sjh9714/red-handed](VoltAgent/awesome-agent-skills PR #886) — verifies whether an agent's claimed test runs actually happened, by inspecting session transcripts and git state.
- [PR #885 — Add skills: sweesama/favicondl.com and sweesama/readgzh](VoltAgent/awesome-agent-skills PR #885) — bundles two utility skills (favicon retrieval, content reading) in one submission.
- [PR #884 — Add skill: cheesygrin/moltygames](VoltAgent/awesome-agent-skills PR #884) — an API-native poker/blackjack arena aimed at agents.

The underlying need across these is consistent: contributors want discoverability for niche, self-hosted Claude Code/agent skills (productivity tooling, dev/test verification, entertainment/API novelty), and the list is the primary distribution channel for that.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. This repo is a documentation/index list rather than executable software, so "stability" issues would typically be limited to broken links or malformed entries — none observed in this batch of submissions.

## 6. Feature Requests & Roadmap Signals
No explicit feature-request issues were filed today. Indirectly, PR #886 ("red-handed") signals a growing community interest in *agent-output verification* tooling — skills that check whether an AI agent's claims (e.g., "tests passed") match ground truth. If this category continues to grow, a dedicated "Verification & Trust" subsection in the Community Skills taxonomy could be a reasonable next addition to the list's structure.

## 7. User Feedback Summary
No direct user feedback (issue reports, satisfaction comments) surfaced in the last 24 hours. The PR descriptions themselves double as informal testimonials — contributors emphasize real-world usage ("already used in working products" in #885, "works in any Claude Code session" in #888) — suggesting submitters are motivated by wanting visibility for tools they've already built and use, not speculative ideas.

## 8. Backlog Watch
- [PR #886 — red-handed](VoltAgent/awesome-agent-skills PR #886) is the oldest open item (created 2026-08-10) and has received no maintainer response after roughly a day; given it addresses agent-trust/verification, it may warrant earlier review than the others.
- All five open PRs (#884–#888) currently have zero comments, indicating none have been triaged yet. If merge cadence stays at zero for multiple days, the review queue is worth flagging to maintainers to avoid contributor drop-off.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
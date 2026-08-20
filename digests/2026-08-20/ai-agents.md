# MCP Ecosystem Digest 2026-08-20

> Issues: 2 | PRs: 8 | Projects covered: 7 | Generated: 2026-08-20 07:37 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Project Digest (2026-08-20)

## 1. Today's Overview
Activity over the last 24 hours was **moderate**: 2 open issues remained active (no new issues filed), and 8 PRs saw movement — 7 open, 1 closed (unmerged). No new releases shipped. The bulk of PR activity clusters around two themes: infrastructure/release tooling (v2 SDK migration, changesets-based semver pipeline) and a wave of small, well-scoped bug fixes to the `filesystem` and `sequential-thinking` reference servers, several submitted by the same contributor (`re2zero`) within a day of each other. Overall project health looks stable and maintainer-active, with steady community-submitted fixes rather than large feature pushes.

## 2. Releases
None today.

## 3. Project Progress
No PRs were merged in the last 24h. One PR was closed without merge:
- [PR #4653 — Add POST_PILOT implementation for social media management](https://github.com/modelcontextprotocol/servers/pull/4653) (closed, not merged): a LinkedIn-focused social posting MCP server proposal — likely declined as out of scope for the core `servers` repo rather than a community contrib.

Notable in-flight progress (still open, worth tracking):
- [PR #4670 — fix(filesystem): use StringDecoder for UTF-8 safe headFile/tailFile](https://github.com/modelcontextprotocol/servers/pull/4670) and its sibling [PR #4667](https://github.com/modelcontextprotocol/servers/pull/4667) both target the same UTF-8 chunk-boundary bug (#4666), suggesting convergence toward a fix — maintainers will need to pick one.
- [PR #4604 — v2 release pipeline, Phase 2](https://github.com/modelcontextprotocol/servers/pull/4604) and [PR #4551 — feat(everything): serve both protocol eras on SDK v2](https://github.com/modelcontextprotocol/servers/pull/4551) represent significant infra work toward the v2 SDK migration and a semver-based release process.

## 4. Community Hot Topics
Ranked by comment/reaction volume:
- [Issue #4122 — Add get_attachment tool to Gmail MCP](https://github.com/modelcontextprotocol/servers/issues/4122) (5 comments, 👍9): the highest-engagement item today. Underlying need — users can retrieve email threads/messages but can't download attachments, a significant functional gap for any Gmail-integration workflow (e.g., processing invoices, documents shared via email).
- [Issue #4258 — Asana V2 MCP Server crashes on get_task/update_tasks](https://github.com/modelcontextprotocol/servers/issues/4258) (5 comments, 👍0): active discussion despite no reactions, reflecting a hard functional break (500 errors) rather than a feature ask — comments are being used for troubleshooting/repro rather than support votes.

## 5. Bugs & Stability
Ranked by severity:
1. **[Issue #4258 — Asana V2 500 error on get_task/update_tasks](https://github.com/modelcontextprotocol/servers/issues/4258)** — High severity. The connector sends the deprecated V1 `task_id` param instead of V2's `task_gid`, causing hard failures on core single-task operations in a connector actively used by Claude.ai. No fix PR yet referenced in this data — a backlog risk given production impact.
2. **[Issue #4666 (referenced by PR #4670 and #4667) — UTF-8 mojibake in filesystem headFile/tailFile](https://github.com/modelcontextprotocol/servers/pull/4670)** — Medium severity, data-integrity bug affecting CJK/multi-byte content when reading file chunks. Two independent fix PRs are already in flight, so resolution looks imminent.
3. **[PR #4668 — fix(filesystem): reject move_file when destination exists](https://github.com/modelcontextprotocol/servers/pull/4668)** — Medium/data-loss risk: `move_file` currently silently overwrites existing files, contradicting documented behavior. Fix already proposed.
4. **[PR #4669 — fix(sequential-thinking): keep nextThoughtNeeded in inputSchema.required](https://github.com/modelcontextprotocol/servers/pull/4669)** — Lower severity, schema/spec mismatch causing `-32602` errors for clients that build args strictly from the advertised schema. Fix already proposed.

## 6. Feature Requests & Roadmap Signals
- **Gmail attachment download** ([#4122](https://github.com/modelcontextprotocol/servers/issues/4122), 👍9) is the clearest community-requested feature signal today and the most likely candidate to land soon given its reaction count and existing maintainer engagement (5 comments).
- The **v2 release pipeline** ([#4604](https://github.com/modelcontextprotocol/servers/pull/4604)) and **protocol-era dual support in `everything`** ([#4551](https://github.com/modelcontextprotocol/servers/pull/4551)) indicate an active roadmap push toward a v2 SDK release with proper semver, likely a near-term milestone rather than a single-PR change.
- [PR #4671 — Add SRI to Resources](https://github.com/modelcontextprotocol/servers/pull/4671) suggests incremental interest in expanding the ecosystem's documented tooling/resources list.

## 7. User Feedback Summary
- **Pain point (functional break):** Asana V2 users are blocked entirely on single-task read/update operations — a hard failure, not a degraded experience ([#4258](https://github.com/modelcontextprotocol/servers/issues/4258)).
- **Pain point (missing capability):** Gmail MCP users want attachment retrieval; current base64 content handling via `get_thread`/`FULL_CONTENT` appears to be an inadequate workaround, not a real solution ([#4122](https://github.com/modelcontextprotocol/servers/issues/4122)).
- **Pain point (silent data loss):** `move_file` silently overwriting destinations violates documented behavior, which is especially dangerous for agent-driven filesystem operations trusting the stated safety contract ([#4668](https://github.com/modelcontextprotocol/servers/pull/4668)).
- **Positive signal:** Multiple independent contributors are proactively submitting fixes for the same root-cause bugs (UTF-8 handling) same-day, suggesting healthy community responsiveness even before maintainer triage.

## 8. Backlog Watch
- **[Issue #4258 — Asana V2 500 error](https://github.com/modelcontextprotocol/servers/issues/4258)**: open since 2026-05-28 (nearly 3 months), actively updated but apparently still unresolved with no linked fix PR in today's data — high-impact production bug warranting maintainer prioritization.
- **[Issue #4122 — Gmail attachment support](https://github.com/modelcontextprotocol/servers/issues/4122)**: open since 2026-05-07, strong community support (👍9) but no PR yet addressing it — a good candidate for maintainers to either pick up or explicitly route to a contributor.
- **[PR #4604 — v2 release pipeline Phase 2](https://github.com/modelcontextprotocol/servers/pull/4604)**: open since 2026-08-02, large infrastructure change still pending review/merge — worth watching given it gates the broader v2 rollout.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP & Agent Tooling Ecosystem
### 2026-08-20 · 7 Projects Tracked

## 1. Ecosystem Overview

The MCP (Model Context Protocol) and Claude agent tooling ecosystem is in a consolidation phase: the core protocol infrastructure (MCP Servers, MCP Registry) is hardening data-quality and auth pipelines rather than shipping new capability, while curation/discovery layers (Awesome MCP Servers, Docker MCP Registry, Claude Plugins, Awesome Claude Code, Awesome Agent Skills) are absorbing a high volume of third-party submissions that maintainer review bandwidth is struggling to keep pace with. A clear cross-cutting theme is emerging around **agent memory/context persistence**, **payment/policy guardrails for autonomous agents**, and **compliance/legal automation** — signaling the ecosystem is moving from "connect a tool" to "govern and remember what the agent does." Automation (bots for dependency bumps, image-pin updates, SHA validation) dominates raw PR counts across nearly every repo, meaning naive activity metrics overstate human engineering effort. No project shipped a release in this 24h window, consistent with an ecosystem that iterates via rolling PR merges rather than versioned cuts.

## 2. Activity Comparison

| Project | Issues (active) | PRs (open/closed) | Releases | Health Signal |
|---|---|---|---|---|
| **MCP Servers** (core) | 2 | 7 open / 1 closed | None | 🟢 Stable — active fixes, maintainer-engaged |
| **MCP Registry** | 4 | 6 open / 1 closed (bot) | None | 🟡 Hardening — schema/auth gaps, fixes in flight |
| **Awesome MCP Servers** | 2 | 86 open / 12 closed | None | 🟡 High volume, low visible triage |
| **Docker MCP Registry** | 0 | 34 open / 0 closed (94% bot) | None | 🟢 Automated maintenance, human PRs stalled |
| **Claude Plugins (official)** | 9 | 4 open / 28 closed (87% bot) | None | 🟡 Automation healthy; bug backlog growing (incl. 7-month-old #283, 79👍) |
| **Awesome Claude Code** | 10 open / 2 closed | 0 | None | 🟢 Low-friction intake, functioning triage bot |
| **Awesome Agent Skills** | 1 | 5 open / 0 closed | None | 🟡 Submission pipeline outpacing merge throughput |

*Health score reflects maintainer responsiveness and backlog age relative to submission volume, not raw activity count.*

## 3. MCP Servers's Position

**Advantages vs. peers:**
- The only repo in this set with **substantive, in-progress bug convergence** — two independent contributors (PRs #4670, #4667) racing to fix the same UTF-8 issue same-day, indicating real engineering depth rather than list curation.
- Carries genuine **infrastructure roadmap work** (v2 SDK migration, changesets-based semver release pipeline — PRs #4604, #4551), a category absent from every awesome-list/registry repo in this set, which only add/validate entries.
- Lower PR volume (8) than the registries and awesome-lists but **higher signal density** — nearly every open PR maps to a concrete, named bug or infra milestone rather than a metadata bump.

**Technical approach differences:** Unlike MCP Registry (which validates/publishes server metadata) and the awesome-lists (which curate discovery), MCP Servers is the only repo doing **reference-implementation engineering** — actual server code (filesystem, sequential-thinking) that other ecosystem tools depend on as behavioral examples.

**Community size comparison:** Its engagement (5 comments/9👍 on the top issue) is modest next to Claude Plugins' #283 (79👍) but far more concentrated — MCP Servers' community is smaller but technically engaged (bug reports include root-cause diagnosis, not just upvotes).

## 4. Shared Technical Focus Areas

- **Agent memory/context persistence** — Awesome Claude Code (#2578 Memory KB, #2576 chamnan), Claude Plugins (#5321 supermemory PR), Awesome Agent Skills (implicit via meta-skills #931/#929). Recurring need: agents that retain project state across sessions without re-establishing context each run.
- **Payment/policy guardrails for autonomous agents** — Awesome MCP Servers (#12465/#12516 MandateGuard, submitted twice via issue *and* PR — a process-confusion signal worth noting to that repo's maintainers). Reflects growing demand for deterministic, non-LLM decision paths in agent-initiated transactions.
- **Compliance/legal automation** — three same-day submissions to Awesome MCP Servers (#12523 license-guard, #12520 stdflow-mcp regulatory standards, #12515 median-compliance-skill) — an emerging cluster, not yet reflected elsewhere.
- **Sandboxed/isolated agent execution environments** — both Docker MCP Registry (#4728 SandBase Harness) and Awesome MCP Servers ecosystR show MCP servers wrapping coding-agent sandboxes rather than plain API integrations.
- **Cross-platform (Windows) fragility** — three independent Claude Plugins bugs (#5480 telegram polling race, #5472 aws-core `python3` resolution) same-day, suggesting Windows CI coverage lags macOS/Linux across the plugin ecosystem generally.
- **Discovery/registry fragmentation** — MCP Registry's dual-namespace drift (#1556) and Awesome Agent Skills' Agent Plugins 1.0.0 proposal (#927) both point to the same unresolved problem: no canonical identity layer as multiple discovery mechanisms (domain-verified, GitHub-namespace, curated lists, Docker registry) proliferate in parallel.

## 5. Differentiation Analysis

| Dimension | MCP Servers | MCP Registry | Awesome-lists (3) | Docker MCP Registry | Claude Plugins |
|---|---|---|---|---|---|
| **Primary function** | Reference server implementations | Publish/validate server metadata | Curated discovery lists | Containerized server catalog | First/third-party plugin marketplace |
| **Target user** | Server implementers | Publishers/registry integrators | End-user discovery | Docker/self-hosted deployers | Claude Code end users |
| **Change unit** | Code (bug fixes, protocol) | Schema/auth logic | Markdown entries | Image digest pins | Plugin manifests + SHA pins |
| **Growth driver** | Maintainer engineering | Compliance hardening | Submission volume | Bot automation | Bot automation + vendor onboarding |

The core architectural split is **build vs. list vs. distribute**: MCP Servers builds the reference software; MCP Registry and Docker MCP Registry are trust/distribution layers with opposite maturity postures (Registry is actively closing validation loopholes, Docker Registry's human review queue is comparatively idle); the three awesome-lists compete for the same discovery real estate with no coordination between them (evidenced by identical submission categories appearing independently across all three).

## 6. Community Momentum & Maturity

**Rapidly iterating:** Awesome MCP Servers (98 PRs/24h) and Claude Plugins (32 PRs/24h, 9 active issues) show the highest raw throughput — but both are submission/automation-driven rather than reflecting deep technical iteration.

**Stabilizing / hardening:** MCP Registry is explicitly in "harden the pipes" mode (its own digest's framing) — closing schema and auth gaps rather than adding features. MCP Servers shows steady, incremental fix velocity without major feature churn.

**Backlog-strained:** Claude Plugins carries the ecosystem's most severe unresolved item (#283, 79👍, 7 months open) alongside five newly-filed, well-diagnosed bugs with zero maintainer response — the starkest gap between contribution quality and triage capacity in this set. Awesome Agent Skills and Docker MCP Registry show similar early-stage strain (PRs sitting unreviewed, some pin-update PRs open 80+ days).

**Low-friction / healthy intake:** Awesome Claude Code stands out for functioning bot-assisted triage (`validation-passed`/`auto-closed` labels) keeping its queue clean despite steady submission volume.

## 7. Trend Signals

- **From reactive integration to governance layer**: the shift from "add a tool" (API wrappers) to "govern the agent" (payment guardrails, compliance skills, sandboxed execution, memory persistence) is the single clearest industry signal across all seven projects today. Developers building agents should expect governance/memory to become table-stakes infrastructure, not optional add-ons.
- **Identity/trust fragmentation is now a first-class problem**: MCP Registry's dual-namespace drift and Awesome Agent Skills' Agent Plugins 1.0.0 proposal both surface the same gap — no single source of truth for "who owns this server/skill." Teams building on this ecosystem should treat namespace/identity resolution as a real integration risk, not an edge case.
- **Automation is outpacing human review capacity ecosystem-wide**: bot-generated PRs (dependency bumps, SHA pins, image digests) now represent 80-95% of raw PR volume in registry-adjacent repos. This inflates naive "activity" metrics — developers evaluating project health should filter for human-authored, substantive changes rather than trusting PR/commit counts at face value.
- **Windows support is a recurring blind spot**: three independent, unrelated Windows-specific bugs surfaced in Claude Plugins alone in one day — a signal that cross-platform CI investment is lagging adoption for teams deploying agent tooling to non-Unix environments.
- **High-reaction, long-unresolved bugs correlate with auth/OAuth complexity**: both this digest's top pain points (MCP Servers' Asana V2 param mismatch, Claude Plugins' GitHub DCR incompatibility) are auth-protocol-version mismatches — suggesting auth-layer versioning is an underinvested, high-blast-radius area across the MCP ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
### modelcontextprotocol/registry · 2026-08-20

## 1. Today's Overview

Activity over the last 24h was light but focused: 4 issues and 7 PRs updated, no new releases. The signal-to-noise is decent — half the PR queue is routine Dependabot bumps (Go/OpenTelemetry, Pulumi, testify, golang.org/x/mod), but the non-dependency activity clusters around **data-quality and schema-validation gaps** in server publishing (empty `repository` objects, dual-namespace ownership drift) and **auth friction** for org-namespace publishing. One issue already has a same-day fix PR open. Overall the project reads as a maturing registry in "harden the pipes" mode rather than active feature-building — most human energy is going into closing validation loopholes rather than shipping new capability.

## 2. Releases

None in the last 24h.

## 3. Project Progress

- Only one PR closed today, and it was a **Dependabot** merge/close: [#1532](https://github.com/modelcontextprotocol/registry/pull/1532) bumping `github.com/pulumi/pulumi/sdk/v3` 3.255.0 → 3.256.0 (superseded same-day by [#1553](https://github.com/modelcontextprotocol/registry/pull/1553), which bumps further to 3.257.0 — likely a Dependabot re-run after a newer release landed).
- No feature or bugfix PRs merged today; the notable fix work ([#1555](https://github.com/modelcontextprotocol/registry/pull/1555), see below) is still open and unreviewed.

## 4. Community Hot Topics

- [#1546](https://github.com/modelcontextprotocol/registry/issues/1546) — "Registry accepts `server.json` with empty `repository: {}}` though schema requires url+source" is the most active thread (2 comments, opened yesterday) and already has a same-day fix PR ([#1555](https://github.com/modelcontextprotocol/registry/pull/1555)). Underlying need: publishers and integrators want the registry API to actually enforce its own published JSON Schema, since silent acceptance of malformed metadata undermines trust in the registry as a canonical source.
- [#1556](https://github.com/modelcontextprotocol/registry/issues/1556) — dual-namespace ownership (`one.faf/rust-faf-mcp` vs `io.github.Wolfe-Jam/rust-faf-mcp`) drifting out of sync. Underlying need: the registry currently treats domain-verified and GitHub-namespace publishes as fully independent entities with no linkage/dedup mechanism, so the same package can present two different "latest" versions to consumers — a discoverability/trust risk as domain-based publishing adoption grows.
- [#1551](https://github.com/modelcontextprotocol/registry/issues/1551) — org-namespace GitHub auth not granting despite public membership and OAuth restriction removal. Underlying need: org maintainers publishing under `io.github.<org>/*` are currently blocked, which is a hard stop for any organization (not solo dev) trying to onboard packages.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **High — schema enforcement gap** ([#1546](https://github.com/modelcontextprotocol/registry/issues/1546)): API accepts data that violates its own published schema across three schema versions (2025-07-09, 2025-09-29, 2025-12-11), meaning the bug has persisted through multiple schema revisions. Fix in progress: [#1555](https://github.com/modelcontextprotocol/registry/pull/1555) (adds validator + publish-handler regression tests, including the HTTP 422 response case) — open, awaiting review.
2. **Medium — auth/permissions bug** ([#1551](https://github.com/modelcontextprotocol/registry/issues/1551)): device-flow login fails to grant org-namespace permission even when documented prerequisites are met — blocks a whole class of users (org publishers) rather than degrading a single record. No fix PR yet.
3. **Medium — data integrity/drift** ([#1556](https://github.com/modelcontextprotocol/registry/issues/1556)): not a crash, but a correctness issue — consumers can resolve stale package versions depending on which namespace they query. No fix PR yet; likely needs a design decision (identity linking) rather than a quick patch.

## 6. Feature Requests & Roadmap Signals

- No explicit "feature request" issues today, but [#1556](https://github.com/modelcontextprotocol/registry/issues/1556) implicitly asks for a **cross-namespace identity/ownership linking mechanism** — plausible future work item given it touches trust/dedup, a core registry concern.
- [#1551](https://github.com/modelcontextprotocol/registry/issues/1551) points toward needed improvements to the **org-namespace claiming/auth flow** — likely near-term since it's a functional blocker, not a nice-to-have.
- Server submission issues/PRs ([#1545](https://github.com/modelcontextprotocol/registry/issues/1545) POST_PILOT, [#1549](https://github.com/modelcontextprotocol/registry/pull/1549) sovereign-hardware) reflect steady organic growth in third-party server listings rather than core roadmap items.

## 7. User Feedback Summary

- Publishers are frustrated that malformed data can slip into the registry undetected ([#1546](https://github.com/modelcontextprotocol/registry/issues/1546)) — a trust/reliability pain point for anyone building tooling on top of the registry API.
- Multi-namespace publishers (crates.io + GitHub) are hitting real-world confusion when the same logical package shows conflicting version info depending on lookup path ([#1556](https://github.com/modelcontextprotocol/registry/issues/1556)) — a discoverability pain point likely to recur as more ecosystems (crates.io, npm, PyPI) get domain-verified publishing.
- Org maintainers are blocked outright from publishing under their org identity ([#1551](https://github.com/modelcontextprotocol/registry/issues/1551)) — a first-run onboarding failure, generally the most damaging kind of bug for adoption.
- No negative sentiment around core registry uptime/performance — all reported issues are data-integrity/auth-flow related, not stability/availability.

## 8. Backlog Watch

- [#1551](https://github.com/modelcontextprotocol/registry/issues/1551) (org auth) and [#1556](https://github.com/modelcontextprotocol/registry/issues/1556) (dual-namespace drift) — both opened within the last 24-48h with zero maintainer comments; worth flagging early since #1551 is a hard onboarding blocker for org publishers.
- [#1530](https://github.com/modelcontextprotocol/registry/pull/1530) — Dependabot OpenTelemetry group bump (6 updates), open since 2026-08-12 (8 days), still unmerged; routine but aging.
- [#1549](https://github.com/modelcontextprotocol/registry/pull/1549) — third-party server submission (Aradia Sovereign AI Infrastructure), open since yesterday with no review activity yet — typical of the steady but maintainer-review-gated server-listing queue.
- [#1545](https://github.com/modelcontextprotocol/registry/issues/1545) — POST_PILOT server submission issue, no comments yet; server-submission issues generally need lower urgency than schema/auth bugs but pile up if unreviewed.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-08-20)

## 1. Today's Overview

Awesome MCP Servers remains an extremely high-throughput submission list rather than a traditional software project — there are no releases to track, and virtually all "activity" is PRs proposing new MCP server entries. In the last 24h, 98 PRs were updated (86 still open, 12 merged/closed), against just 2 new issues, both themselves informal server-addition proposals rather than bugs. The volume and pace (dozens of new "Add X MCP server" PRs opened same-day) indicate the list is being actively curated but is also under sustained submission pressure, likely outstripping maintainer review bandwidth. Overall project health signal: high community interest, low maintainer-visible triage activity in this window (no comments/reactions recorded on any item).

## 2. Releases

None — no new releases in this period.

## 3. Project Progress

12 PRs moved to merged/closed status today, but the data does not indicate outcomes (merge vs. rejection) beyond one visible example:

- [#12517 — Add stacktree-mcp to Cloud Platforms](https://github.com/punkpeye/awesome-mcp-servers/pull/12517) (CLOSED) — closed same day it was opened by author `stevysmith`, who also has an open duplicate/variant, [#12361](https://github.com/punkpeye/awesome-mcp-servers/pull/12361), for the same server ("stacktree-mcp" / "stevysmith/stacktree-mcp"). Likely closed as a duplicate/superseded submission rather than a rejection.

No feature or infrastructure work landed — all visible progress is list curation (additions/corrections to the README's server directory).

## 4. Community Hot Topics

Reaction/comment counts are not populated in today's data (all PRs show `Comments: undefined`, `👍: 0`), so no item stands out by engagement. Based on submission volume and category clustering, the underlying interest areas today are:

- **Payment/agent-governance guardrails** — two independent submissions for the same project, MandateGuard, a deterministic payment-policy engine for AI agents: [Issue #12465](https://github.com/punkpeye/awesome-mcp-servers/issues/12465) and [PR #12516](https://github.com/punkpeye/awesome-mcp-servers/pull/12516). This duplication itself suggests the author is unsure of the correct contribution path (issue vs. PR), a recurring friction point for this repo.
- **AI model/API aggregation bridges** — [Issue #12487 (SandBase CLI)](https://github.com/punkpeye/awesome-mcp-servers/issues/12487) and [PR #12466 (Gliana)](https://github.com/punkpeye/awesome-mcp-servers/pull/12466) both pitch "one MCP server, many downstream models/APIs" — a recurring category (aggregators) reflecting demand for consolidated access layers.
- **Knowledge/memory servers** — [PR #12519 (zhiji-mcp)](https://github.com/punkpeye/awesome-mcp-servers/pull/12519) and [PR #12280 (MindBase)](https://github.com/punkpeye/awesome-mcp-servers/pull/12280) both target long-term agent memory, suggesting persistent-memory tooling is a hot sub-category.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today — this repo is a curated list (Markdown + linting), so "stability" issues manifest as **listing-quality problems** rather than runtime bugs:

- [PR #12521 — Add Text to Speech MCP server](https://github.com/punkpeye/awesome-mcp-servers/pull/12521) is flagged `invalid-name`, `missing-glama`, `missing-emoji` — automated linting caught a naming/metadata compliance issue that needs author follow-up before merge.
- Several PRs carry `missing-glama` (no Glama directory listing) flags — not a defect but a recurring gap in submission quality: [#12524](https://github.com/punkpeye/awesome-mcp-servers/pull/12524), [#12523](https://github.com/punkpeye/awesome-mcp-servers/pull/12523), [#12522](https://github.com/punkpeye/awesome-mcp-servers/pull/12522), [#12521](https://github.com/punkpeye/awesome-mcp-servers/pull/12521), [#12519](https://github.com/punkpeye/awesome-mcp-servers/pull/12519), [#12517](https://github.com/punkpeye/awesome-mcp-servers/pull/12517), [#12515](https://github.com/punkpeye/awesome-mcp-servers/pull/12515).
- [PR #12516's](https://github.com/punkpeye/awesome-mcp-servers/pull/12516) title contains a garbled/corrupted fragment (`??-??-??-`), suggesting a bot-formatting or encoding glitch in the submission tooling used by that contributor — worth a maintainer glance but not functionally significant.

## 6. Feature Requests & Roadmap Signals

No explicit roadmap issues were filed; "feature requests" here take the form of proposed additions signaling where the ecosystem is expanding. Likely near-term list growth areas based on submission clustering:

- **Agentic payments & policy guardrails** (MandateGuard-style deterministic, non-LLM decision paths) — two submissions in 24h suggests this category may warrant its own subsection if volume continues.
- **Design/UI reference tooling for coding agents** — [PR #12524 (Mobbin)](https://github.com/punkpeye/awesome-mcp-servers/pull/12524) exposes real shipped UI as agent context, a novel niche.
- **Compliance/legal automation for agents** — [PR #12523 (license-guard)](https://github.com/punkpeye/awesome-mcp-servers/pull/12523), [PR #12520 (stdflow-mcp, Chinese regulatory standards)](https://github.com/punkpeye/awesome-mcp-servers/pull/12520), and [PR #12515 (median-compliance-skill)](https://github.com/punkpeye/awesome-mcp-servers/pull/12515) — three same-day submissions targeting legal/compliance is a notable cluster.
- **Privacy-preserving PII handling** — [PR #12518 (obsify)](https://github.com/punkpeye/awesome-mcp-servers/pull/12518) proposes a local shape-only reasoning pattern for sensitive data, likely to resonate with enterprise adopters.

## 7. User Feedback Summary

No direct user satisfaction/dissatisfaction commentary exists in today's data (no comments on any issue/PR). Indirectly, contributor behavior reveals some pain points:

- **Ambiguous contribution path**: the MandateGuard author submitted both an issue ([#12465](https://github.com/punkpeye/awesome-mcp-servers/issues/12465)) and a PR ([#12516](https://github.com/punkpeye/awesome-mcp-servers/pull/12516)) for the same server, and the stacktree-mcp author submitted two PRs ([#12361](https://github.com/punkpeye/awesome-mcp-servers/pull/12361), [#12517](https://github.com/punkpeye/awesome-mcp-servers/pull/12517)). This suggests CONTRIBUTING guidance on issue-vs-PR submission could be clearer.
- **Metadata/linting friction**: recurring `missing-glama`/`invalid-name`/`missing-emoji` flags across many PRs suggest the automated bot checks are catching real gaps but authors aren't consistently pre-validating before submission — a CONTRIBUTING.md checklist or PR template reminder could reduce churn.

## 8. Backlog Watch

Both open issues are fresh (created and updated 2026-08-19) so nothing is stale yet, but given the repo's typical review latency implied by older open PRs still active today, these are worth flagging as they age:

- [Issue #12487 — SandBase CLI](https://github.com/punkpeye/awesome-mcp-servers/issues/12487) — 0 comments, unreviewed.
- [Issue #12465 — MandateGuard](https://github.com/punkpeye/awesome-mcp-servers/issues/12465) — 0 comments, unreviewed; note its companion PR #12516 should probably be resolved together (likely one should be closed as duplicate).
- Longer-lived PRs still receiving updates but with zero engagement, indicating potential maintainer backlog: [#11216 (Nimbus)](https://github.com/punkpeye/awesome-mcp-servers/pull/11216), opened 2026-07-30 (21 days open), and [#10890 (Epovest)](https://github.com/punkpeye/awesome-mcp-servers/pull/10890), opened 2026-07-25 (26 days open) — both still updating daily with no visible review activity, the oldest open items in today's dataset.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest (2026-08-20)

## 1. Today's Overview

Activity today was driven almost entirely by automated maintenance rather than human contribution: 34 PRs were touched, but 32 of them (94%) are `mcp-registry-bot[bot]` automated "update pin" commits refreshing Docker image digests for existing servers (e.g., `stripe`, `mongodb`, `playwright`, `n8n`, `grafana`). None were merged or closed in the observed window — all 34 remain open. Genuine human activity is limited to a single new server submission. With zero new releases and zero issue activity, this reads as a routine, low-intensity maintenance day for the registry rather than a period of active feature development.

## 2. Releases

None — no new releases in the last 24 hours.

## 3. Project Progress

No PRs were merged or closed today; all 34 tracked PRs remain open. The bulk of "progress" is mechanical: the registry's bot is keeping commit pins current for dozens of third-party MCP servers (integrations, testkube, teamwork, stripe, smartbear, render, postman, playwright, opik, omi, neo4j, n8n, mongodb, markitdown, keboola-mcp, hostinger, grafana, dynatrace, zscaler, vizro — 32 total). This pin-update flow appears healthy and automated, but the lack of any merges suggests either a review backlog or that maintainers batch-merge these on a different cadence.

## 4. Community Hot Topics

Comment/reaction counts were not available in the source data (`Comments: undefined`, `👍: 0` across the board), so no PR stands out by engagement metrics today. The most substantively notable item is the new server submission:

- [#4728 — Add SandBase Harness MCP server](https://github.com/docker/mcp-registry/pull/4728) (opened 2026-08-19 by `denial123789`). Proposes adding a self-hosted "SandBase Harness" runtime that exposes six tools via a stdio MCP bridge for running and observing isolated coding-agent sessions. This reflects a broader ecosystem trend: MCP servers increasingly wrapping sandboxed/isolated agent-execution environments, not just API integrations — worth watching as a category.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were logged in the last 24 hours (0 issues open or closed). No stability concerns to flag today.

## 6. Feature Requests & Roadmap Signals

The only forward-looking signal is [#4728 (SandBase Harness)](https://github.com/docker/mcp-registry/pull/4728), which — if merged — would expand the registry's coverage into sandboxed coding-agent session management, an area adjacent to existing dev-tooling servers (`playwright`, `testkube`). Given the registry's submission-review pattern, this is a candidate for inclusion in an upcoming registry update once maintainers vet the repository and tool schema, but no explicit maintainer commentary or timeline is visible yet.

## 7. User Feedback Summary

No direct user feedback, satisfaction signals, or complaints were captured in today's data — there were no issue comments or PR discussion threads with visible content. The one external contribution (#4728) is a submission rather than feedback, so no pain points can be inferred from today's window.

## 8. Backlog Watch

Several automated pin-update PRs have aged notably without being merged, which may warrant maintainer attention if this is unintentional backlog rather than an intentional batching cadence:

- [#788 — chore: update pin for omi](https://github.com/docker/mcp-registry/pull/788) — open since 2025-11-26 (~87 days)
- [#799 — chore: update pin for vizro](https://github.com/docker/mcp-registry/pull/799) — open since 2025-11-27 (~86 days)
- [#746 — chore: update pin for n8n](https://github.com/docker/mcp-registry/pull/746) — open since 2025-11-21 (~92 days), the oldest open PR in today's dataset

If pin-update PRs are meant to be short-lived (merge-on-CI-green), a 3-month-old open pin PR suggests either a stalled automation step or an accumulating queue that could benefit from a bulk-merge or bot-tuning review.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) — Daily Digest
### 2026-08-20

## 1. Today's Overview

Activity today was moderate-to-high but almost entirely maintenance-driven: 9 open issues saw movement, 32 PRs were touched, and 28 of those PRs closed — the overwhelming majority being automated SHA-pin bumps from `github-actions[bot]`. No new releases landed. The most notable signal is a cluster of newly-filed, deeply-diagnosed bugs from a handful of power users (telegram, security-guidance, hookify, aws-core plugins), alongside three pending plugin-submission PRs (ramp, clay, supermemory) awaiting maintainer review. Overall the repo shows healthy automation hygiene (bots keeping plugin SHAs current) but a growing backlog of substantive, unaddressed bug reports — several with zero maintainer response despite detailed root-cause analysis.

## 2. Releases

None today.

## 3. Project Progress

- **28 automated SHA-bump PRs merged/closed** (e.g. [#5482 carbone-skill](https://github.com/anthropics/claude-plugins-official/pull/5482), [#5489 duende-skills](https://github.com/anthropics/claude-plugins-official/pull/5489), [#5496 redis-development](https://github.com/anthropics/claude-plugins-official/pull/5496), [#5487 databricks](https://github.com/anthropics/claude-plugins-official/pull/5487), [#5488 datadog](https://github.com/anthropics/claude-plugins-official/pull/5488), [#5490 growthbook](https://github.com/anthropics/claude-plugins-official/pull/5490), [#5491 hostinger](https://github.com/anthropics/claude-plugins-official/pull/5491), [#5498 sanity](https://github.com/anthropics/claude-plugins-official/pull/5498), [#5485/#5486 crowdstrike-falcon](https://github.com/anthropics/claude-plugins-official/pull/5485), [#5500 shopify-ai-toolkit](https://github.com/anthropics/claude-plugins-official/pull/5500), [#5481 azure](https://github.com/anthropics/claude-plugins-official/pull/5481), [#5483 cloudinary](https://github.com/anthropics/claude-plugins-official/pull/5483), [#5484 codspeed](https://github.com/anthropics/claude-plugins-official/pull/5484), [#5499 sap-fiori-mcp-server](https://github.com/anthropics/claude-plugins-official/pull/5499)) — each validated via `claude plugin validate` in CI before opening. This reflects a routine, working supply-chain integrity pipeline keeping third-party plugin references pinned to fresh, validated commits.
- **[#5476](https://github.com/anthropics/claude-plugins-official/pull/5476) "Chore: Update marketplace definitions"** closed — general marketplace metadata refresh.
- No feature PRs merged today; the four open PRs are all net-new plugin additions or CI changes still pending review (see Roadmap section).

## 4. Community Hot Topics

- **[#283 — GitHub plugin auth failure](https://github.com/anthropics/claude-plugins-official/issues/283)** (79 👍, 10 comments, open since Jan 25, still active today) is by far the dominant topic. The `github@claude-plugins-official` MCP server fails with "Incompatible auth server: does not support dynamic client registration." The high reaction count and 7-month lifespan signal this blocks a widely-used plugin and needs urgent triage — likely an OAuth/DCR compatibility gap with GitHub's auth server.
- **[#1181 — skill-creator out of sync with anthropics/skills](https://github.com/anthropics/claude-plugins-official/issues/1181)** (4 👍, 5 comments) — users want the bundled plugin kept in lockstep with the canonical upstream repo; underlying need is a sync/automation mechanism (similar to the SHA-bump bot already used for third-party plugins) applied to first-party skills too.
- **[#615 — plugin.json missing `version` field](https://github.com/anthropics/claude-plugins-official/issues/615)** (1 👍, 2 comments) — low severity but causes a warning on every `claude plugin update` run for `frontend-design` and others; an easy, low-risk fix.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#283 — GitHub plugin auth failure](https://github.com/anthropics/claude-plugins-official/issues/283)** — Critical, breaks GitHub MCP integration entirely for affected users; 79 👍 underscores blast radius. No fix PR visible yet.
2. **[#5480 — Windows stale-poller kill is a silent no-op (telegram plugin)](https://github.com/anthropics/claude-plugins-official/issues/5480)** — Two `getUpdates` consumers fight over Telegram's single polling slot on Windows; causes message-delivery race conditions. Filed today, no fix PR yet.
3. **[#5478](https://github.com/anthropics/claude-plugins-official/issues/5478) / [#5477](https://github.com/anthropics/claude-plugins-official/issues/5477) — security-guidance agent wastes its first Read** — Well-quantified (56% / 173 of 307 reviews) efficiency bug: the reviewer runs with `setting_sources=[]` and no absolute repo root, so it can't locate files on its first attempt. Two related reports from the same author (`eliasurrar`) with reproducible measurements — a strong, actionable fix candidate.
4. **[#5473 — hookify dispatches wrong agent](https://github.com/anthropics/claude-plugins-official/issues/5473)** — `/hookify` silently uses `general-purpose` instead of its own `conversation-analyzer` agent, bypassing that agent's read-only tool restriction — a minor security/scoping regression.
5. **[#5472 — aws-core hook calls bare `python3` on Windows](https://github.com/anthropics/claude-plugins-official/issues/5472)** — Resolves to the Microsoft Store stub, breaking the `secret-safety.py` PreToolUse hook on Windows.

No fix PRs currently reference any of these issues.

## 6. Feature Requests & Roadmap Signals

- **New plugin submissions in the pipeline**: [#5426 ramp](https://github.com/anthropics/claude-plugins-official/pull/5426) (spend/expense workflows via remote MCP), [#5452 clay](https://github.com/anthropics/claude-plugins-official/pull/5452) (company/people enrichment CLI + skills), [#5321 supermemory](https://github.com/anthropics/claude-plugins-official/pull/5321) (persistent cross-session memory via hooks) — all opened by `bryan-anthropic`, likely to merge soon given the maintainer's pattern of steady plugin onboarding.
- **[#5479 — chamnan plugin submission](https://github.com/anthropics/claude-plugins-official/issues/5479)** (community-submitted, context-optimization/security plugin) — awaiting triage, not yet a PR.
- **[#5231 — static pin check CI adoption](https://github.com/anthropics/claude-plugins-official/pull/5231)** — annotate-only static classification for auto-exec MCP launchers plus a waivers file; a supply-chain-security hardening step likely to land given it builds on existing scan infrastructure.
- **Sync automation for skill-creator** ([#1181](https://github.com/anthropics/claude-plugins-official/issues/1181)) is a plausible next-version candidate given the existing bot-driven bump pattern could be extended to first-party skills.

## 7. User Feedback Summary

- Users depending on the GitHub plugin are effectively blocked ([#283](https://github.com/anthropics/claude-plugins-official/issues/283)) — high frustration signal via 79 reactions over a long unresolved window.
- Power users are submitting unusually rigorous, data-backed bug reports (security-guidance issues [#5477](https://github.com/anthropics/claude-plugins-official/issues/5477)/[#5478](https://github.com/anthropics/claude-plugins-official/issues/5478) include measured failure rates across hundreds of review runs), indicating a segment of sophisticated users auditing plugin internals closely — a positive signal for ecosystem maturity but also raises the bar for maintainer response quality.
- Cross-platform (Windows) friction is a recurring theme across three separate issues today ([#5480](https://github.com/anthropics/claude-plugins-official/issues/5480), [#5472](https://github.com/anthropics/claude-plugins-official/issues/5472)) — suggests Windows testing coverage in plugin CI may be lagging macOS/Linux.

## 8. Backlog Watch

- **[#283](https://github.com/anthropics/claude-plugins-official/issues/283)** — open since 2026-01-25 (~7 months), 79 👍, no apparent fix in progress; highest-priority item for maintainer attention given its reach.
- **[#1181](https://github.com/anthropics/claude-plugins-official/issues/1181)** — open since 2026-03-31 (~4.5 months), still unresolved sync drift between skill-creator and upstream.
- **[#615](https://github.com/anthropics/claude-plugins-official/issues/615)** — open since 2026-03-12 (~5 months), trivial fix (add `version` field) still pending despite low complexity — a quick win maintainers could close easily.
- The five newly-filed technical bugs from 2026-08-19 ([#5480](https://github.com/anthropics/claude-plugins-official/issues/5480), [#5478](https://github.com/anthropics/claude-plugins-official/issues/5478), [#5477](https://github.com/anthropics/claude-plugins-official/issues/5477), [#5473](https://github.com/anthropics/claude-plugins-official/issues/5473), [#5472](https://github.com/anthropics/claude-plugins-official/issues/5472)) have zero comments from maintainers as of this digest — worth monitoring to ensure this detailed, high-quality bug-report cluster doesn't stall.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest (2026-08-20)

## 1. Today's Overview
Activity in the last 24 hours was entirely resource-submission traffic — 10 issues updated, zero PRs, zero releases. This is expected for a curated "awesome list" repository rather than a software project: there's no codebase shipping versions, just a steady intake pipeline of community-submitted tools, plugins, and skills. 8 of 10 issues remain open pending maintainer review, 2 closed (one auto-closed as a likely duplicate, one closed as superseded by a newer, better-formatted submission). The submission mix skews toward memory/context tooling, agent orchestration, and skills — consistent with where the broader Claude Code ecosystem is currently investing. Overall health signal: steady, low-friction community contribution volume with a functioning bot-assisted triage process (`validation-passed` / `auto-closed` labels).

## 2. Releases
None today.

## 3. Project Progress
No PRs were opened, merged, or closed today, so there's no code-level progress to report. The only "progress" is triage-related:
- [#2576 chamnan](https://github.com/hesreallyhim/awesome-claude-code/issues/2576) — closed via `auto-closed`, likely due to an incomplete or invalid submission format.
- [#1953 Recommend: Spoken](https://github.com/hesreallyhim/awesome-claude-code/issues/1953) — closed after being superseded by the properly-formatted resubmission [#2573](https://github.com/hesreallyhim/awesome-claude-code/issues/2573), showing the maintainers are consolidating duplicate entries rather than accepting the first-come submission.

## 4. Community Hot Topics
Engagement today is thin (each new issue has exactly 1 comment, 0 reactions), consistent with an automated acknowledgment bot rather than organic discussion. No single issue stands out as a discussion magnet. The clearest signal of underlying need is topical clustering rather than comment volume:
- **Memory & context persistence** tools: [#2578 Memory KB Superpower Plugin](https://github.com/hesreallyhim/awesome-claude-code/issues/2578), [#2576 chamnan](https://github.com/hesreallyhim/awesome-claude-code/issues/2576) — users want Claude Code to retain project/architecture context across sessions.
- **Agent orchestration**: [#2577 Operator](https://github.com/hesreallyhim/awesome-claude-code/issues/2577) (parallel Claude Code/Codex sessions across repos), [#1961 forge-harness](https://github.com/hesreallyhim/awesome-claude-code/issues/1961) — appetite for running many agent sessions concurrently and coordinating them.
- **Skills**: [#2575 Simple Man](https://github.com/hesreallyhim/awesome-claude-code/issues/2575), [#2573 Spoken](https://github.com/hesreallyhim/awesome-claude-code/issues/2573), [#2572 australian-accounting-skills](https://github.com/hesreallyhim/awesome-claude-code/issues/2572) — the Skills ecosystem continues to be the most popular submission category.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed in this window — the repo is a resource index, not executable software, so this category is not applicable today.

## 6. Feature Requests & Roadmap Signals
No formal feature requests against the awesome-claude-code repo itself, but submitted resources hint at where community tooling (and likely future "featured" entries) is heading:
- **Multi-account / provider switching**: [#2574 claude-code-account-switcher](https://github.com/hesreallyhim/awesome-claude-code/issues/2574) — binds Claude Code sessions to specific accounts/providers, signaling demand for easier multi-account and multi-provider workflows.
- **Runtime governance/observability**: [#2571 Marginal](https://github.com/hesreallyhim/awesome-claude-code/issues/2571) — governance and monitoring tooling for Claude Code runtimes, suggesting growing enterprise/team interest in oversight of agent behavior.
- **Narration/communication control**: [#2575 Simple Man](https://github.com/hesreallyhim/awesome-claude-code/issues/2575) — a policy to strip narration/praise/recap from responses, echoing a recurring community request for terser agent output.

None of these are roadmap items for the awesome-list repo itself, but they're strong indicators of what the wider plugin/skill ecosystem is building toward.

## 7. User Feedback Summary
No direct satisfaction/dissatisfaction commentary today — the issue thread activity is submission-template content, not discussion. Indirectly, the submissions themselves double as feedback: demand for persistent memory ([#2578](https://github.com/hesreallyhim/awesome-claude-code/issues/2578), [#2576](https://github.com/hesreallyhim/awesome-claude-code/issues/2576)) implies users are still frustrated by Claude Code's lack of native cross-session memory, and the terse-output tool ([#2575](https://github.com/hesreallyhim/awesome-claude-code/issues/2575)) implies some users find default response verbosity (narration/praise/recaps) undesirable.

## 8. Backlog Watch
- [#1961 forge-harness](https://github.com/hesreallyhim/awesome-claude-code/issues/1961) — open since 2026-06-07 (74 days), only just received a comment today despite already carrying `validation-passed`. Worth a maintainer look to close it out.
- [#2572 australian-accounting-skills](https://github.com/hesreallyhim/awesome-claude-code/issues/2572) — lacks the `validation-passed`/`resource-submission` labels that every other open item has, suggesting it hasn't entered the standard triage pipeline yet and may need manual attention.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest (2026-08-20)

## 1. Today's Overview

Activity today is light but steady, consistent with a curated "awesome list" repository rather than an active codebase: 1 issue and 5 PRs touched in the last 24h, no releases (expected, since this repo doesn't version software). All 5 PRs are new submissions adding skills/sections to the catalog — none merged or closed yet, suggesting a maintainer review backlog rather than a stalled project. The single issue closed today was a proposal, not a bug report, indicating the maintainer is actively triaging governance/structure discussions. Overall health signal: healthy submission pipeline, but throughput on merging contributions is the item to watch.

## 2. Releases

None — not applicable to this repository (curated list, no versioned releases).

## 3. Project Progress

No PRs were merged or closed today; all 5 open PRs (#928–#932) remain pending review. The only closed item was Issue [#927](https://github.com/VoltAgent/awesome-agent-skills/issues/927) (proposal, closed same-day as opened, 0 comments) — closed without discussion, which could mean it was rejected, merged into a broader decision, or closed as out-of-scope. Worth confirming with a maintainer comment/rationale since it addressed a structural gap (see Backlog Watch).

## 4. Community Hot Topics

Engagement is uniformly low today — no item has comments or reactions yet, so nothing stands out by volume. By content, the most substantive discussion driver is:

- [#927 — Proposal: a Directories/Resources line for Agent Plugins discovery](https://github.com/VoltAgent/awesome-agent-skills/issues/927): raises that the emerging **Agent Plugins 1.0.0** standard (agent-plugins.org — backed by OpenAI/Amazon/Cursor/Microsoft/Vercel, bundling Agent Skills + MCP servers) has no registry/discovery layer, and proposes this list fill that gap. This signals an underlying need: as Agent Skills gets subsumed into a broader multi-vendor packaging standard, this repo's positioning (skills-only vs. skills+MCP+plugins) may need to evolve.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported in this window — expected for a documentation/list repository with no executable release artifacts.

## 6. Feature Requests & Roadmap Signals

All 5 open PRs are effectively feature/content requests (new catalog entries) rather than code changes:

- [#932 — Add skill: beatra-ai/beatra](https://github.com/VoltAgent/awesome-agent-skills/pull/932): new "Skills by Beatra" section (AI image/video/music/voice generation + social/ecommerce workflows).
- [#931 — Add lindblomstefan/skills-library](https://github.com/VoltAgent/awesome-agent-skills/pull/931): Claude Code discovery skill that interviews users and recommends from a 100+ skill catalog with feedback-based validation over time — notable for being a "meta" skill about skill discovery itself.
- [#930 — Add Citlyze skills to Marketing](https://github.com/VoltAgent/awesome-agent-skills/pull/930): 4 skills for an AEO (AI search visibility) product, including a no-account-required audit tool.
- [#929 — Add hedralab/eskill](https://github.com/VoltAgent/awesome-agent-skills/pull/929): another meta-skill, this one for *building* spec-compliant Agent Skills (interview → research → plan → validator → commercialization checklist).
- [#928 — Add chrono-meta/context-doctor](https://github.com/VoltAgent/awesome-agent-skills/pull/928): single Community Skills addition generating `.claudeignore` and flagging context bloat.

Roadmap signal: two of five PRs today (#929, #931) are "meta-skills" for discovering/building other skills — a maturing category likely to get its own subsection if the trend continues. Given issue #927's discovery-layer proposal, a plausible near-term roadmap item is restructuring the catalog around Agent Plugins-compatible metadata rather than adding more flat sections.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction commentary today (0 comments across all items). Implicit signals from PR descriptions:
- Contributors are self-classifying submissions carefully (official vendor listings like #930 explicitly noting "official, not a solo weekend thing"), suggesting the maintainer enforces credibility/quality bar in reviews.
- Growing interest in tooling *around* skills (discovery, authoring, context management) rather than just more end-task skills — a maturity signal for the ecosystem this list tracks.

## 8. Backlog Watch

- [#927](https://github.com/VoltAgent/awesome-agent-skills/issues/927) — closed same-day with zero comments and no visible resolution note; if this was closed without maintainer explanation, it's worth flagging since it raises a legitimate structural question (Agent Plugins discovery) that other repos will likely face soon.
- All five open PRs (#928–#932) are unreviewed as of this snapshot (created 2026-08-19/08-20). None are old enough yet to be "stale," but with zero merge activity today, sustained no-review periods on straightforward list-addition PRs (typically low-risk, mechanical changes) would be the leading indicator of maintainer bandwidth strain to monitor over the next few days.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
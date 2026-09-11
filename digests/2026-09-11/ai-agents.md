# MCP Ecosystem Digest 2026-09-11

> Issues: 1 | PRs: 5 | Projects covered: 7 | Generated: 2026-09-11 11:59 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Project Digest (2026-09-11)

## 1. Today's Overview

Activity over the last 24 hours is modest but security-focused: 1 new issue and 5 open PRs updated, with zero merges and zero new releases. The standout signal is a third-party security scan ([#4790](https://github.com/modelcontextprotocol/servers/issues/4790)) publicly grading several reference servers, alongside two independent, competing PRs both targeting SSRF hardening of the `fetch` server. No releases shipped today, and nothing merged in this window, suggesting the project is in an active review/hardening phase rather than a shipping phase. Overall health looks stable — no crash reports or regressions — but there's a visible cluster of unresolved security-hardening work piling up in the PR queue.

## 2. Releases

None in this period.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours; all 5 tracked PRs remain open. Work in flight includes:
- Session/subscription cleanup for the `everything` server ([#4716](https://github.com/modelcontextprotocol/servers/pull/4716))
- Two competing SSRF-hardening approaches for `fetch` ([#4770](https://github.com/modelcontextprotocol/servers/pull/4770), [#4773](https://github.com/modelcontextprotocol/servers/pull/4773))
- Stable error codes for filesystem path validation ([#4789](https://github.com/modelcontextprotocol/servers/pull/4789))
- Documentation warning for archived reference servers ([#4788](https://github.com/modelcontextprotocol/servers/pull/4788))

No net feature progress landed today — all items are still under review.

## 4. Community Hot Topics

- [#4790 — "5 of your servers graded A/B on OpenTrustBench, badges inside"](https://github.com/modelcontextprotocol/servers/issues/4790): A third-party OSS security scanner published grades for `mcp-fetch` (A/90), `mcp-sequentialthinking` (A/90), `mcp-time` (B/88), `mcp-everything` (B/85), and `mcp-git` (B/79), with file:line evidence for each finding. Though only hours old with no comments/reactions yet, this is the most consequential item today — it externally validates (or challenges) the project's security posture and is likely to draw maintainer and community scrutiny.
- The `fetch` server SSRF thread ([#4770](https://github.com/modelcontextprotocol/servers/pull/4770) + [#4773](https://github.com/modelcontextprotocol/servers/pull/4773)) is the de facto hot topic by volume: two independent contributors submitted overlapping fixes within a day of each other, both referencing the same underlying risk (cloud metadata endpoint / IMDS exposure, tracked in #2317). This signals real urgency around the `fetch` server's default "allow all hosts" behavior.

Underlying need: users and security researchers are converging on the same concern — MCP reference servers, especially `fetch`, are being run in production/cloud contexts where SSRF to internal networks or metadata services is a live risk, not a theoretical one.

## 5. Bugs & Stability

No crashes or regressions reported today. The two security items are best classified as latent vulnerabilities rather than bugs:

1. **High — SSRF in `fetch` server** ([#4773](https://github.com/modelcontextprotocol/servers/pull/4773), [#4770](https://github.com/modelcontextprotocol/servers/pull/4770)): Arbitrary URL fetching with redirect-following and no address/scheme checks allows reads of loopback, RFC1918/ULA ranges, and cloud metadata endpoints (e.g., `169.254.169.254`). Two competing fix PRs already exist — one opt-in allowlist (`--allowed-hosts`, non-breaking default) and one stricter hardened-by-default approach. This is flagged externally by the OpenTrustBench scan as well ([#4790](https://github.com/modelcontextprotocol/servers/issues/4790)), corroborating severity.
2. **Medium — Resource subscription leak in `everything` server** ([#4716](https://github.com/modelcontextprotocol/servers/pull/4716)): Disconnected sessions are never removed from the `subscriptions` map, causing unbounded growth over the life of a long-running process. Fix PR is open and unmerged.
3. **Low — Ambiguous filesystem denial reasons** ([#4789](https://github.com/modelcontextprotocol/servers/pull/4789)): Path validation failures aren't machine-classifiable; fix PR adds stable reason codes.

## 6. Feature Requests & Roadmap Signals

- **`fetch` host allowlisting** ([#4770](https://github.com/modelcontextprotocol/servers/pull/4770)) is the most likely near-term addition — it's opt-in and non-breaking, which lowers the bar for maintainer acceptance versus the stricter default-hardening approach in #4773. Expect the maintainers to need to reconcile these two overlapping PRs before either merges.
- **Structured, stable error/reason codes for filesystem validation** ([#4789](https://github.com/modelcontextprotocol/servers/pull/4789)) suggests a broader roadmap direction toward machine-readable error contracts across servers, not just filesystem.
- **Explicit "archived server" warnings in docs** ([#4788](https://github.com/modelcontextprotocol/servers/pull/4788)) points to ongoing lifecycle-management/documentation cleanup for the reference server catalog.

## 7. User Feedback Summary

- Security researchers are actively probing and validating the reference servers (OpenTrustBench scan), indicating the project has enough adoption to attract independent security audits — a sign of maturity, but also increased scrutiny.
- Contributors are self-motivated to fix known, previously-tracked issues (#2317 referenced by two separate PR authors), suggesting community awareness of the SSRF gap predates this 24h window and has been a known pain point.
- No explicit complaints or dissatisfaction reports surfaced in this window; feedback is proactive/contributory rather than reactive bug reports.

## 8. Backlog Watch

- [#2317](https://github.com/modelcontextprotocol/servers) (referenced by both #4770 and #4773, not itself in today's data) appears to be a longstanding tracked SSRF issue that has now attracted two duplicate/competing fix attempts — a sign it's been open long enough for multiple contributors to independently tackle it without coordination. Maintainers should prioritize triaging #4770 vs. #4773 to avoid wasted contributor effort.
- [#4785](https://github.com/modelcontextprotocol/servers) (referenced by #4788 as the motivating issue for the archived-server docs warning) is not in today's dataset but should be checked — it may represent an unresolved lifecycle/support-status question for archived servers.
- [#4790](https://github.com/modelcontextprotocol/servers/issues/4790) has zero comments/reactions despite being a substantive third-party security report — worth a maintainer acknowledgment soon given it names specific server grades publicly.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison — 2026-09-11

## 1. Ecosystem Overview

The MCP (Model Context Protocol) and Claude Code ecosystems show a maturing, bifurcated pattern: core protocol infrastructure (MCP Servers, MCP Registry) is entering a security-hardening phase with declining raw feature velocity, while catalog/discovery projects (Awesome MCP Servers, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills) are experiencing high-volume inbound growth as vendors and individual developers race to list their integrations. Security scrutiny is now a first-class signal across the board — third-party audits (OpenTrustBench grading MCP Servers), self-correcting vendor PRs (Awesome MCP Servers), and a critical unresolved git-lock bug plus a near-total security-bypass (Claude Plugins) all surfaced in this single 24h window. Curated "awesome list" repos are increasingly functioning as SaaS/vendor discovery channels rather than pure community catalogs, evidenced by commercial submissions (Contracko, Scalekit, Taskade, Dynatrace). Across nearly all seven projects, maintainer review throughput — not contributor supply — is the binding constraint, with PRs aging 4 weeks to 9+ months in several backlogs. No project shipped a release in this window, consistent with routine maintenance/curation activity rather than a coordinated release cycle.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Health Score |
|---|---|---|---|---|---|
| **MCP Servers** | 1 | 5 | 0 | 0 | 7/10 — Stable, active security hardening |
| **MCP Registry (official)** | 1 (likely spam) | 0 | 0 | 0 | 5/10 — Quiet, minimal signal |
| **Awesome MCP Servers** | 0 | 98 | 13 | 0 | 6/10 — High growth, review bottleneck |
| **Docker MCP Registry** | 0 | 40 | 2 | 0 | 6/10 — Strong inbound, bot-PR backlog risk |
| **Claude Plugins (official)** | 3 | 22 | 4 | 0 | 5/10 — Critical bug open, but pipeline healthy |
| **Awesome Claude Code** | 6 | 0 | 0 | 0 | 7/10 — Healthy curation, no PR backlog yet |
| **Awesome Agent Skills** | 0 | 2 | 0 | 0 | 6/10 — Quiet but stable, vendor interest growing |

## 3. MCP Servers's Position

**Advantages vs. peers:** As the reference implementation repo (vs. the catalog/list projects), MCP Servers is the only project in this set undergoing genuine security-engineering work rather than submission triage — two independent contributors produced competing SSRF-hardening PRs for the `fetch` server within a day of each other, and an external security scanner (OpenTrustBench) is now publicly grading its servers (A/B range across 5 servers). This external validation is a maturity signal none of the catalog projects have received.

**Technical approach differences:** Unlike Docker MCP Registry and Awesome MCP Servers, which are pure listing/discovery surfaces with no runtime code, MCP Servers ships executable reference implementations — so its "bugs" carry real production risk (SSRF to cloud metadata endpoints, subscription-map memory leaks) rather than documentation-accuracy issues. Its review process also differs: PRs compete on design tradeoffs (opt-in allowlist vs. hardened-by-default) rather than being additive submissions.

**Community size comparison:** By raw PR/issue volume, MCP Servers (6 items/24h) is dramatically smaller than the catalog ecosystem around it — Awesome MCP Servers alone processed 98 PRs in the same window, roughly 16x the activity. This is expected: MCP Servers is a curated, maintainer-gated reference set, while the awesome-lists are low-friction, high-throughput submission funnels. MCP Servers' influence is disproportionate to its volume, however, since its SSRF issue (#2317) is treated as consequential enough to draw duplicate independent fixes and external audits.

## 4. Shared Technical Focus Areas

- **SSRF / network-boundary hardening** — MCP Servers (`fetch` server, #4770/#4773, cloud metadata exposure) and Claude Plugins (#6022, "harden first-party plugins," port-killer matching client connections) both show first-party maintainers/contributors auditing network-facing code paths for the same class of vulnerability class in the same 24h window.
- **Remote/hosted server architecture over local Docker images** — Docker MCP Registry shows a clear shift toward remote/streamable-HTTP MCP servers (Thrifle, Playgama, Groundtruth, Taskade's resubmission) instead of local Dockerfile-based servers, suggesting the broader MCP ecosystem is converging on SaaS-hosted endpoints as the default integration pattern.
- **Agent memory / long-running context persistence** — Awesome Claude Code saw two same-day submissions in this category (Trailhead's issue-ticket-graph model, claude-recall's hook-based vault injection), signaling unmet demand for durable project memory beyond context windows.
- **Multi-agent / parallel orchestration tooling** — Awesome Claude Code (taskpods, git-worktree-based pod runner) and, indirectly, Docker MCP Registry's agent-tooling submissions both reflect growing interest in running multiple agent instances concurrently and safely.
- **Delegated auth for agents (OAuth)** — Awesome Agent Skills' Scalekit/AgentKit submission targets agent-specific OAuth identity for Gmail/Slack/Notion access, including MCP OAuth — a security/identity gap echoed structurally by MCP Servers' own access-control hardening work.
- **Silent/opaque failure modes as a trust issue** — Claude Plugins' two `security-guidance` bugs (#6004 git-lock hang, #4689 review-bypass) both involve a security control that *appears* to work but doesn't — a theme that rhymes with MCP Servers' SSRF findings (defaults that look safe but aren't).

## 5. Differentiation Analysis

| Dimension | MCP Servers | Registries (Docker/Awesome-MCP) | Claude Plugins | Awesome Claude Code / Agent Skills |
|---|---|---|---|---|
| **Feature focus** | Reference protocol implementations, security correctness | Listing breadth, submission throughput | First-party plugin catalog + partner integrations | Community tool discovery |
| **Target users** | MCP server implementers, security auditors | Developers seeking MCP servers to integrate | Claude Code users installing plugins | Claude Code power users building/discovering extensions |
| **Technical architecture** | Runtime servers (stdio/HTTP transports) | Static metadata/README entries, no runtime | Bot-validated plugin manifests (`claude plugin validate`) | Static curated README lists |
| **Governance model** | Maintainer-reviewed, competing PR reconciliation | High-volume, largely automated/self-service | Bot-driven automated bumps + manual security review | Automated validation labels (`validation-passed`) + manual merge |
| **Risk surface** | Production security (SSRF, resource leaks) | Content accuracy (overstated claims) | Both: automated pipeline health + first-party code security | Spam/low-effort submissions, content accuracy |

## 6. Community Momentum & Maturity

**Rapidly iterating (high submission volume, growth-stage):** Awesome MCP Servers (98 PRs/24h) and Docker MCP Registry (40 PRs/24h) are clearly in a land-grab phase — regional/vertical MCP servers (Russian business APIs, DACH B2B, Portuguese auto pricing, healthcare/bioinformatics) are arriving faster than maintainers can review, with some ready PRs aging 4–9+ months.

**Stabilizing / hardening-phase:** MCP Servers has shifted from feature addition to security consolidation — zero merges today despite active PR traffic, consistent with a project prioritizing correctness over throughput. Claude Plugins shows a similar pattern (routine bot bumps humming along smoothly, but core security-plugin code getting its first hardening pass, #6022).

**Quiet but healthy:** Awesome Claude Code and Awesome Agent Skills show low volume but zero red flags — submissions pass validation cleanly, and vendor interest (Contracko, Scalekit) suggests these lists are becoming legitimate discovery channels despite modest daily activity.

**At-risk / needs attention:** MCP Registry (official) shows near-zero substantive activity (one likely-spam issue) — worth monitoring for genuine stagnation versus a temporary lull. Claude Plugins carries the highest near-term risk of the set: a critical bug (#6004, SIGKILL leaving `.git/index.lock` stranded, blocking all git writes) has zero comments and no fix PR as of this digest.

## 7. Trend Signals

1. **Security is becoming externally enforced, not just self-reported.** Third-party scanning (OpenTrustBench) grading MCP Servers publicly is a notable first — AI agent developers should expect their MCP integrations to be audited by tools they don't control, and should treat default-safe configurations (host allowlisting, scoped permissions) as table stakes rather than optional hardening.
2. **The "hosted remote server" pattern is displacing local Docker images** as the default MCP distribution model (Docker MCP Registry data) — developers building MCP integrations should design for OAuth-based remote auth flows now rather than treating local execution as the primary deployment target.
3. **Agent memory and multi-agent orchestration are the two dominant unmet needs** surfacing organically across independent community tool-builders (Awesome Claude Code), not from any single vendor roadmap — signaling durable, cross-cutting demand rather than a fad.
4. **"Looks safe but isn't" is the recurring failure class of 2026** — SSRF defaults, silently-bypassed security hooks, and unbounded resource leaks (subscription maps, SIGKILL-orphaned locks) all appeared in this single day across unrelated projects. For AI agent developers, this argues for defaulting to explicit allowlists/deny-by-default and testing failure paths (timeouts, disconnects) as rigorously as happy paths.
5. **Curated lists are now vendor acquisition channels.** Commercial teams (Stripe, Taskade, Scalekit, Contracko, Dynatrace) are treating awesome-lists and plugin registries as marketing/distribution surfaces, which will keep inflating submission volume and further strain already-bottlenecked maintainer review capacity — a structural risk for list quality and trust across the ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) — Daily Digest
**Date:** 2026-09-11 | **Repo:** [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview

Activity on the MCP Registry repository was essentially flat over the last 24 hours: a single new issue was opened, with zero pull requests and zero releases updated or merged. There is no evidence of active development, review, or triage happening today. The one item of note is not a substantive feature discussion — it appears to be spam/low-effort content rather than genuine community engagement (see below). Overall project health signal for this window: **quiet/inactive**, likely reflecting either a lull between development cycles or reduced maintainer bandwidth rather than a stalled project (a single day of low activity is not itself concerning for an infra project like this).

## 2. Releases

No new releases in this period. *(Section omitted per instructions — noted for completeness.)*

## 3. Project Progress

No PRs were opened, merged, or closed in the last 24 hours. No features advanced or bugs were fixed today.

## 4. Community Hot Topics

Only one issue was updated in this window:

- **[#1636 — [enhancement] USMILLETCLEANINGMXF](https://github.com/modelcontextprotocol/registry/issues/1636)** (open, 0 comments, 0 👍)

This issue has 0 engagement (no comments, no reactions) and does not qualify as a "hot topic" by any activity measure. There is no other Issue/PR traffic to analyze for community sentiment today.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed or updated in the last 24 hours. No stability concerns to report for this window.

## 6. Feature Requests & Roadmap Signals

**⚠️ Data quality flag:** Issue [#1636](https://github.com/modelcontextprotocol/registry/issues/1636), titled "USMILLETCLEANINGMXF," is nominally tagged `enhancement` but its body is an unfilled GitHub feature-request template (the boilerplate "Is your feature request related to a problem?" text with no actual content supplied). Combined with the incongruous title and a newly created/suspicious-looking author handle (`yenimillet835-crypto`), this has the hallmarks of spam or an automated/low-effort submission rather than a real feature proposal. **Recommendation:** maintainers should close this without triage rather than treat it as a genuine roadmap signal.

No legitimate feature requests were surfaced today, so no roadmap predictions can be made from this data.

## 7. User Feedback Summary

No actionable user feedback, pain points, or use cases were reported in this window. The only submission (#1636) lacks substantive content.

## 8. Backlog Watch

No historical backlog data was provided in this feed (only items updated in the last 24h were included), so long-unanswered issues/PRs cannot be assessed from this snapshot. One item for maintainer attention going forward:

- **[#1636](https://github.com/modelcontextprotocol/registry/issues/1636)** — flagged above as likely spam; should be closed/labeled to keep the enhancement backlog clean and avoid skewing future triage metrics.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-09-11)

## 1. Today's Overview

Awesome MCP Servers saw a high-volume, low-engagement day: 98 PRs touched in the last 24h (85 open, 13 merged/closed) against **zero** issue activity and no releases — expected for a curated list repo rather than a runnable project. Submission volume remains very high, dominated by single-entry "add my server" PRs across a wide spread of categories (Knowledge & Memory, Finance & Fintech, Developer Tools, Communication, regional/localized tooling). Two self-correction PRs from listed-project authors (#14189, #14186) suggest active community self-policing of listing accuracy. Overall health signal: strong top-of-funnel growth in the MCP ecosystem, but engagement metrics (comments, reactions) are flat across the board, and several older PRs remain unmerged, hinting at a maintainer-review bottleneck relative to submission throughput.

## 2. Releases

None today — omitted.

## 3. Project Progress

13 of the 98 updated PRs were merged or closed today; the dataset doesn't break out which specific PRs those were, but visible context points to churn from repeat/superseding submissions rather than net-new merges:

- [#11371](https://github.com/punkpeye/awesome-mcp-servers/pull/11371) — resubmission of dependency-fitness-mcp, explicitly supersedes a prior PR (#7494) closed for inactivity.
- [#14018](https://github.com/punkpeye/awesome-mcp-servers/pull/14018) — refreshes an existing DC Hub MCP entry (33→88 tools) and explicitly replaces a conflicted/closed prior PR.

This pattern (stale PR closed → clean resubmission opened) appears to account for a meaningful share of today's "closed" count, rather than genuine attrition of proposals.

## 4. Community Hot Topics

No PR or issue shows meaningful engagement today — comment counts are unrecorded and 👍 reactions are 0 across all 20 sampled PRs, so there's no clear "hot" thread by traditional signals. The closest thing to a notable pattern is **listing-accuracy correction PRs**, which stand out structurally even without comments:

- [#14189](https://github.com/punkpeye/awesome-mcp-servers/pull/14189) — mnemoverse's own team correcting overstated memory-recall claims in their entry.
- [#14186](https://github.com/punkpeye/awesome-mcp-servers/pull/14186) — heliograph author narrowing claims about transport capabilities they previously overstated.

The underlying need here is less "feature discussion" and more **curation quality control** — authors circling back to tighten descriptions after initial listing, likely to preempt maintainer pushback or reader confusion.

## 5. Bugs & Stability

Not applicable in the traditional sense (this repo ships no executable code), but two "content correctness" issues were reported and fixed via PR today:

- **[#14189](https://github.com/punkpeye/awesome-mcp-servers/pull/14189)** (Medium) — mnemoverse/mcp-memory-server entry claims two behaviors the project withdrew in v0.9.1 and a third contradicted by its own API reference. Fix PR open, authored by the project's own team.
- **[#14186](https://github.com/punkpeye/awesome-mcp-servers/pull/14186)** (Low) — heliograph entry overstates transport support (claims a "station side" for 2 of 5 transports that don't have one). Fix PR open, self-reported by the original submitter.

No crashes or regressions apply since there's no runtime component; these are documentation/accuracy defects in list entries.

## 6. Feature Requests & Roadmap Signals

No open Issues exist to source explicit feature requests, but PR submission patterns signal where the ecosystem is expanding:

- **Localized/regional MCP servers** — Russian business APIs ([#14182](https://github.com/punkpeye/awesome-mcp-servers/pull/14182): hh.ru, VK, Diadoc, SBIS, Chestny ZNAK), DACH B2B data ([#14176](https://github.com/punkpeye/awesome-mcp-servers/pull/14176)), Yandex Workspace ([#14178](https://github.com/punkpeye/awesome-mcp-servers/pull/14178)), Portuguese used-car pricing ([#14181](https://github.com/punkpeye/awesome-mcp-servers/pull/14181)).
- **Agent-tooling / coding-agent servers** — mechapad-cli ([#14188](https://github.com/punkpeye/awesome-mcp-servers/pull/14188)), omniventure-agent-tools ([#14180](https://github.com/punkpeye/awesome-mcp-servers/pull/14180)), LGH/ActionD local-first git+CI/CD for agents ([#13829](https://github.com/punkpeye/awesome-mcp-servers/pull/13829)).
- **Knowledge & Memory** continues to be a hot category — Graphiti Local ([#14187](https://github.com/punkpeye/awesome-mcp-servers/pull/14187)), Neither MCP ([#14183](https://github.com/punkpeye/awesome-mcp-servers/pull/14183)).

Likely near-term additions: continued growth in the Knowledge & Memory and Coding Agents categories, plus a steady drip of single-country/regional finance and workplace integrations.

## 7. User Feedback Summary

With zero issue-tracker activity, feedback surfaces almost entirely through PR-based self-correction rather than complaints:

- Listed-project maintainers (mnemoverse, heliograph) are proactively walking back overclaimed capabilities post-listing — a positive signal that authors treat the list as reputationally important and are willing to self-correct rather than let inflated descriptions stand.
- No dissatisfaction signals (no negative reactions, no comment threads) are visible in this snapshot — but the absence of comment data (`undefined` throughout) limits confidence in this read; it may reflect a data-collection gap rather than genuine silence.

## 8. Backlog Watch

Two PRs stand out as aging despite apparently meeting listing bar (Glama-indexed, rebased, clean):

- **[#11371](https://github.com/punkpeye/awesome-mcp-servers/pull/11371)** — open since 2026-08-02 (~5.5 weeks), a clean resubmission of a previously stale PR, still awaiting merge.
- **[#11977](https://github.com/punkpeye/awesome-mcp-servers/pull/11977)** — open since 2026-08-12 (~4 weeks), official Folklore Clinical Variant Interpretation MCP addition, no visible blocker noted.

Given ~98 PRs touched in a single day, these older, seemingly ready submissions sitting for weeks suggest maintainer review throughput is the primary constraint on the project's health, not contributor supply.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest (2026-09-11)

## 1. Today's Overview

Activity today was dominated by **new server submissions**, not maintenance or bug-fixing: of 40 PRs touched in the last 24h, 38 remain open and only 2 were closed/merged, while zero issues moved and zero releases shipped. At least 9 of the open PRs are brand-new "Add X remote/local server" submissions (ihateposting, Thrifle, Folklore, Playgama, mcp-arcade-cabinets, TrendPulse, Taskade ×2, Groundtruth), reflecting the registry's role as a fast-growing, community-contribution-driven catalog rather than a traditionally versioned software project. The remaining ~11 of the sampled PRs are automated `mcp-registry-bot[bot]` "update pin" maintenance PRs, several stale for months — a sign the bot-driven pin-update queue is not being actively triaged. No engagement signals (comments, 👍 reactions) were reported as non-zero in this dataset, so community sentiment can't be quantified today; overall the repo looks operationally healthy (steady inbound contributions) but shows early backlog-accumulation risk on the automated maintenance side.

## 2. Releases

None — no new releases in the last 24h.

## 3. Project Progress

Only two PRs closed today, and neither represents shipped functionality:

- **[#5059 — Add Taskade hosted remote MCP server](https://github.com/docker/mcp-registry/pull/5059)** (johnxie) — closed same-day. The author explicitly notes this is *not* a retry of two 2025 PRs (#1134, #1180) and re-submitted immediately as **[#5058](https://github.com/docker/mcp-registry/pull/5058)**, this time as a hosted-remote OAuth 2.0 PKCE server rather than a local Dockerfile/image. Net effect: no server added yet, submission format corrected and resubmitted.
- **[#3912 — Add ionoscloud-mcp server](https://github.com/docker/mcp-registry/pull/3912)** (mimihalescu) — closed after being open since 2026-06-08 (~3 months). No merge indication; likely closed without landing, which is worth confirming with maintainers.

No PRs merged today per the data provided — "Project Progress" in the shipped-code sense is effectively flat for this 24h window.

## 4. Community Hot Topics

The dataset does not include usable comment or reaction counts (all listed as `undefined`/0), so hot topics can't be ranked by engagement today. By submission volume/theme, the notable cluster is the **wave of new remote-server submissions** landing same-day (2026-09-11): ihateposting ([#5063](https://github.com/docker/mcp-registry/pull/5063)), Thrifle ([#5062](https://github.com/docker/mcp-registry/pull/5062)), Playgama ([#5060](https://github.com/docker/mcp-registry/pull/5060)), mcp-arcade-cabinets ([#5061](https://github.com/docker/mcp-registry/pull/5061)), Groundtruth ([#5057](https://github.com/docker/mcp-registry/pull/5057)), and Taskade's resubmission ([#5058](https://github.com/docker/mcp-registry/pull/5058)). Underlying need: contributors are increasingly packaging **remote/hosted MCP servers** (no Dockerfile, streamable-http transport) rather than local Docker-image servers — suggesting the ecosystem is shifting toward SaaS-hosted MCP endpoints as the default integration pattern, which may warrant registry documentation/tooling updates to streamline that submission path.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24h — 0 issues were updated in this window, and none of the 40 tracked PRs describe a fix for a defect. Stability signal today is effectively silent.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues surfaced today (0 issues total). The clearest roadmap signal comes from PR content itself:

- **Remote-server-first submissions** are becoming the norm — Thrifle, Playgama, Groundtruth, ihateposting, and Taskade's corrected resubmission are all remote/hosted rather than local-Dockerfile servers. This suggests the registry's remote-server onboarding path (per CONTRIBUTING docs) is being exercised heavily enough that maintainers may want to streamline or further formalize that review track.
- **Domain diversification** continues: healthcare/bioinformatics ([#4685](https://github.com/docker/mcp-registry/pull/4685) — Folklore Clinical Variant Interpretation), e-commerce/retail data ([#5062](https://github.com/docker/mcp-registry/pull/5062) — Thrifle), gaming/creative tooling ([#5060](https://github.com/docker/mcp-registry/pull/5060), [#5061](https://github.com/docker/mcp-registry/pull/5061)), and workspace/productivity ([#5058](https://github.com/docker/mcp-registry/pull/5058) — Taskade) are all represented in a single day — likely to continue as a growth pattern in upcoming registry snapshots rather than a single "next version" feature.

## 7. User Feedback Summary

- Several submitters proactively address prior rejected/duplicate attempts in their PR descriptions (Taskade explicitly disambiguating from two 2025 PRs; ionoscloud-mcp waiting ~3 months before closure), suggesting the **review/feedback loop for new server submissions can be slow**, prompting contributors to resubmit rather than wait indefinitely.
- No direct satisfaction/dissatisfaction commentary is present in the sampled data (no issue comments, no PR discussion excerpts beyond author descriptions).

## 8. Backlog Watch

The automated pin-update PRs from `mcp-registry-bot[bot]` show clear staleness and deserve maintainer attention:

| PR | Server | Open Since | Age |
|---|---|---|---|
| [#788](https://github.com/docker/mcp-registry/pull/788) | omi | 2025-11-26 | ~9.5 months |
| [#799](https://github.com/docker/mcp-registry/pull/799) | vizro | 2025-11-27 | ~9.5 months |
| [#1051](https://github.com/docker/mcp-registry/pull/1051) | opik | 2026-02-04 | ~7 months |
| [#1083](https://github.com/docker/mcp-registry/pull/1083) | stripe | 2026-02-07 | ~7 months |
| [#4367](https://github.com/docker/mcp-registry/pull/4367)–[#4444](https://github.com/docker/mcp-registry/pull/4444) | smartbear, testkube, teamwork, tavily, neo4j, schemacrawler-ai | 2026-07-09/15 | ~2 months |

These are all low-risk automated commit-pin bumps, but their accumulation (dating back to late 2025) suggests the bot-PR merge/triage process is backlogged and could benefit from a batch-review or auto-merge policy. Additionally, **[#3912 (ionoscloud-mcp)](https://github.com/docker/mcp-registry/pull/3912)** sat open for ~3 months before closing today without a clear resolution reason — worth a maintainer follow-up to confirm whether it should be resubmitted, similar to the Taskade case.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) — Daily Digest
**Date:** 2026-09-11 | **Repo:** [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

## 1. Today's Overview

Activity in the last 24h was dominated by routine maintenance rather than new feature work: 22 PRs touched the repo, but the large majority (15 of the 20 shown) are automated `github-actions[bot]` SHA-bump PRs validating third-party plugin updates via `claude plugin validate`. No new releases shipped. The one substantive PR is a security-hardening patch (#6022) from an Anthropic contributor covering six first-party plugins. Issue volume stayed low (3 open, 0 closed) but all three are non-trivial correctness/reliability bugs, two of them in the widely-used `security-guidance` plugin. Overall the project reads as healthy and steadily maintained, with the bot-driven plugin-bump pipeline functioning normally and a small but real backlog of open defects awaiting maintainer triage.

## 2. Releases

No new releases in the last 24h. Omitted per instructions.

## 3. Project Progress

Only two PRs closed in the visible window (the total field reports 4 merged/closed today, but only 2 are surfaced in the top-20-by-comments list):

- **[#6006 — [stripe] Shifting version bump to v0.8.1](https://github.com/anthropics/claude-plugins-official/pull/6006)** (closed) — Stripe's own DevAI team (johno-stripe) intervened on an automated bump PR to redirect it to a newer version that adds skill telemetry and in-agent feedback prompts via hooks. Notable as a rare case of a first-party integration partner actively steering the bot pipeline.
- **[#5636 — Add gc-ai plugin](https://github.com/anthropics/claude-plugins-official/pull/5636)** (closed) — Community plugin submission from tobinsouth (GC AI Inc.), closed without an explicit merge note in the data; status should be confirmed with a maintainer if inclusion was expected.

Outside of closures, the bot-driven bump pipeline processed ~15 automated SHA updates today (workos, unreal-engine-skills-for-claude-code, postiz, posthog, netlify-skills, mongodb/mongodb-atlas, miro, migration-to-aws, mergify, huggingface-skills, clickhouse-best-practices, ckeditor, aws-agents-for-devsecops, airwallex-agentos), each pre-validated by `claude plugin validate` in CI before opening — routine plugin-catalog upkeep, not feature progress.

## 4. Community Hot Topics

Comment/engagement signal is thin today — PR comment counts are not populated in this data pull, so Issues are the best signal:

- **[#5224 — iMessage channel replays old messages as new](https://github.com/anthropics/claude-plugins-official/issues/5224)** (3 comments, open 30 days) — The most-discussed item. Underlying need: users running long-lived, continuously-active integrations want ordering guarantees from data-backfill sources, not just "eventually delivered." Seven replay occurrences in five weeks (one 90-message burst) signals this affects at least one active production deployment.
- **[#6022 — Harden first-party plugins](https://github.com/anthropics/claude-plugins-official/pull/6022)** (opened today by ochafik) — Not yet commented on, but worth watching: bundles fixes for a port-killer matching client connections instead of just listeners, plus other cleanup/session-scoping issues across six official plugins — a signal that first-party plugin code is getting a security pass.
- **[#4689 — security-guidance resolves repo from cwd, not `-C` target](https://github.com/anthropics/claude-plugins-official/issues/4689)** (1 comment) — Smaller thread but high-severity finding (113/127 commits silently skipped in the reporter's audit), likely to attract more attention once triaged.

## 5. Bugs & Stability

Ranked by severity/impact:

1. **[#6004 — security-guidance hook strands `.git/index.lock`, blocking all git writes](https://github.com/anthropics/claude-plugins-official/issues/6004)** — **Critical.** `subprocess.run(..., timeout=N)` sends SIGKILL on timeout; git can't trap SIGKILL to release its lock, so the repo is left unusable for all git writes until manual cleanup. Filed today (2026-09-10), 0 comments, no fix PR yet — needs urgent maintainer attention given the blast radius (any git operation, not just the hook's own).
2. **[#4689 — security-guidance commit-review bypass via `git -C`](https://github.com/anthropics/claude-plugins-official/issues/4689)** — **High.** Detection regex tolerates `-C <path>` but resolution logic ignores it, resulting in near-total (113/127) silent bypass of the review hook in the reporter's environment — effectively defeats the security control it implements. No fix PR yet.
3. **[#5224 — iMessage channel ordering/watermark bug](https://github.com/anthropics/claude-plugins-official/issues/5224)** — **Medium-high**, but scoped to a specific channel integration rather than core plugin infrastructure. Root cause identified (ROWID watermark assumes insert order = chronological order) but no fix PR linked yet.

No regressions or crash reports tied to today's bump PRs or the #6022 hardening PR.

## 6. Feature Requests & Roadmap Signals

- **[#5637 — Add Dynatrace plugin](https://github.com/anthropics/claude-plugins-official/pull/5637)** — observability vendor integration (Dynatrace-for-AI), open since Aug 25, still pending review 17 days later. Reasonable candidate for near-term merge given no blockers mentioned.
- **[#5636 — Add gc-ai plugin](https://github.com/anthropics/claude-plugins-official/pull/5636)** — closed rather than merged; unclear if this will resurface in a revised form.
- The pattern in #6022 (scoped grants, safer subprocess cleanup, session-bound loops applied across six plugins) suggests a broader security-hardening pass may be rolling out to more first-party plugins next — worth watching subsequent PRs from the same author/theme.
- Stripe's telemetry/feedback-hooks work (surfaced via #6006) hints at an emerging pattern of partner-maintained plugins adding their own instrumentation via hooks, which other integrators may follow.

## 7. User Feedback Summary

- **Pain point — silent failure modes:** Both `security-guidance` issues (#4689, #6004) describe *silent* or *hard-to-diagnose* failures — a control that appears to work but doesn't, and a lock that hangs without clear signal. This is the sharpest negative-feedback theme today: users doing security-sensitive audits are finding trust-eroding gaps in the plugin meant to protect them.
- **Pain point — data integrity in long-running integrations:** #5224's reporter is running a continuously-active deployment and needs reliable chronological delivery; replays undermine any downstream logic that assumes "new" means "recently occurred."
- **Positive signal:** Stripe's DevAI team actively engaging with the bump-PR pipeline (#6006) to ship their own hook-based telemetry/feedback features suggests healthy vendor investment in the plugin ecosystem, not just passive publishing.
- No dissatisfaction expressed about the bot-bump pipeline itself — it appears to be running smoothly and predictably (pre-validated via CI before each PR opens).

## 8. Backlog Watch

- **[#4689](https://github.com/anthropics/claude-plugins-official/issues/4689)** — Open since 2026-07-30 (43 days), only 1 comment, high real-world impact (113/127 commits bypassed) and no maintainer response visible in the data — the most concerning stale item given its security implications.
- **[#5637 — Add dynatrace plugin](https://github.com/anthropics/claude-plugins-official/pull/5637)** — Open since 2026-08-25 (17 days) with no apparent blocker; a straightforward integration PR sitting idle.
- **[#5224](https://github.com/anthropics/claude-plugins-official/issues/5224)** — Open since 2026-08-12 (30 days); actively discussed (3 comments) but still no fix PR or maintainer resolution plan visible.

**Note:** Total PR count (22) exceeds the 20 shown in this data pull, and the reported "merged/closed: 4" includes 2 PRs not visible in the top-20-by-comments list — those could not be assessed here.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest
**Date:** 2026-09-11 | **Source:** [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)

## 1. Today's Overview

Activity in the last 24 hours was light but steady, consisting entirely of new Issues — no PRs and no releases were recorded. Six issues were opened or updated, five of which are routine `resource-submission` entries carrying the `validation-passed` label, indicating the repo's automated/community curation pipeline is functioning normally. One outlier issue (#2812, titled "Approve") appears unrelated to the project's resource-submission format and may be spam or a misdirected cross-post. Overall, this reads as a quiet maintenance day driven by community contributions rather than core development — typical for a curation/"awesome list" repo rather than an active codebase.

## 2. Releases

None. No new releases in the last 24 hours.

## 3. Project Progress

No PRs were opened, merged, or closed in the last 24 hours, so there is no direct code/list progress to report today. All movement was at the issue-intake stage (see below) — these submissions typically get merged into the README via a separate PR once a maintainer or bot processes them, which hasn't happened yet for any of today's batch.

## 4. Community Hot Topics

Comment/reaction volume was uniformly low today (1 comment each on the five valid submissions, 0 reactions across the board), so there's no single breakout topic — but the submissions cluster meaningfully by category:

- **[#2811 — Trailhead](https://github.com/hesreallyhim/awesome-claude-code/issues/2811)** (Memory & Context Persistence) — models large projects as a graph of GitHub-Issue "decision tickets" resolved incrementally, signaling demand for structured long-running project memory beyond simple context windows.
- **[#2809 — claude-recall](https://github.com/hesreallyhim/awesome-claude-code/issues/2809)** (Memory & Context Persistence) — a `UserPromptSubmit` hook that ranks and injects a Markdown vault into context, another entry in the same category as Trailhead, reinforcing memory/context persistence as a hot area.
- **[#2808 — taskpods](https://github.com/hesreallyhim/awesome-claude-code/issues/2808)** (Agent Orchestration) — zero-config CLI wrapping git worktrees into disposable pods for parallel agent runs, reflecting growing interest in running multiple Claude Code agents concurrently.
- **[#2810 — Diffo](https://github.com/hesreallyhim/awesome-claude-code/issues/2810)** (Open Source Software) — browser-based diff review tool that routes inline comments back into the Claude Code session, pointing to demand for tighter human-in-the-loop review UX.
- **[#2807 — Claude Code Usage Maniac](https://github.com/hesreallyhim/awesome-claude-code/issues/2807)** (Observability & Monitoring / Usage & Cost) — a JetBrains/IntelliJ plugin for usage/cost tracking, part of a recurring theme of third-party cost-observability tooling.

**Underlying need:** two of five submissions target memory/context persistence and two target multi-agent workflow tooling (orchestration + review), suggesting the ecosystem's current pain points are "how do I keep long-term project context" and "how do I safely run/review parallel agents" — consistent with broader Claude Code community trends.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. No fix PRs are relevant since there are no open bug reports to address.

## 6. Feature Requests & Roadmap Signals

There are no formal feature requests against the awesome-claude-code repo itself today — all "feature-shaped" signals come indirectly from third-party tool submissions rather than repo enhancement requests:

- Continued momentum in **memory/context persistence tooling** (Trailhead, claude-recall) suggests the next wave of community resources will keep targeting long-context/project-memory gaps.
- **Agent orchestration** (taskpods) suggests parallel/multi-worktree agent workflows remain a growth area for third-party tooling around Claude Code, rather than a change requested in-repo.
- No changes to the awesome-claude-code repo's own structure (categories, README format, submission process) were requested today.

## 7. User Feedback Summary

- All five legitimate submissions passed automated validation (`validation-passed`) on their first pass, suggesting the submission template/process is working smoothly for contributors.
- No explicit satisfaction/dissatisfaction commentary was captured in the available data (each issue has only 1 comment, likely the automated validation bot response, not a human review).
- The submissions themselves are user-built solutions to real pain points: persistent memory across sessions, cheaper/faster parallel agent execution, and inline diff review — implying users are actively patching gaps in core Claude Code UX with their own tools.

## 8. Backlog Watch

- **[#2812 — "Approve"](https://github.com/hesreallyhim/awesome-claude-code/issues/2812)** — opened today by a low-context account, referencing an unrelated `apache/comdev-site` PR review thread and the term "Ninjabase." This doesn't fit the repo's resource-submission format and has 0 comments/reactions. It likely needs maintainer triage as potential spam, a mistaken cross-post, or a compromised/automated account, rather than a genuine resource submission.
- The five valid resource-submission issues (**#2807–#2811**) are all pending final maintainer merge into the curated list — none show signs of being stale yet (all opened within the last 24h), but they're worth tracking if they remain unmerged beyond the project's typical turnaround.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Project Digest
**Date:** 2026-09-11 | **Repo:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview

Activity over the last 24 hours was minimal: zero issues touched, zero releases, and only two open pull requests updated — both are routine "add my skill to the list" contributions with no comments or reactions yet. This is consistent with the project's nature as a curated awesome-list rather than an actively developed codebase; steady-state activity here looks like a trickle of community PRs rather than commits, bug reports, or version cycles. No red flags, no regressions, no urgent items — the project is healthy but quiet today.

## 2. Releases

None today — this repo doesn't cut versioned releases in the traditional sense; growth is tracked via merged PRs adding new skill entries.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The two open PRs represent progress-in-waiting rather than completed work:
- [#1029 — Add Contracko contract management skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1029) (opened 2026-09-07, still open 4 days later)
- [#1038 — Add skill: scalekit-inc/skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1038) (opened and updated same day, 2026-09-11)

Neither has been reviewed or merged yet.

## 4. Community Hot Topics

There is no meaningful engagement signal today — both open PRs have 0 comments and 0 👍 reactions. Nothing qualifies as a "hot topic" by activity metrics. The underlying pattern worth noting: submissions continue to arrive from commercial/product teams (Contracko, Scalekit) looking to list their skill packs, suggesting the awesome-list is becoming a discovery channel that vendors actively target for visibility — a sign of the list's growing reach even without visible community debate.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed in the last 24 hours (0 issues total). No stability concerns to report.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. The closest roadmap signal is implicit in the PR queue: both submissions extend existing categories ("Community Skills → Productivity and Collaboration" for #1029, "Community Skills → Development and Testing" for #1038) rather than proposing new sections. If merged, likely near-term additions are:
- A new **Contracko** entry under Productivity and Collaboration ([#1029](https://github.com/VoltAgent/awesome-agent-skills/pull/1029))
- A new **AgentKit / Scalekit** entry under Development and Testing, covering agent OAuth for tools like Gmail/Slack/Notion plus MCP OAuth ([#1038](https://github.com/VoltAgent/awesome-agent-skills/pull/1038))

## 7. User Feedback Summary

No direct user feedback (issue comments, reactions, discussion) came in today. The two PR descriptions do hint at use cases the maintainers should weigh:
- **Contracko** ([#1029](https://github.com/VoltAgent/awesome-agent-skills/pull/1029)) — targets AI contract management workflows, contributing four `SKILL.md` files for managing a company's contracts.
- **Scalekit's AgentKit** ([#1038](https://github.com/VoltAgent/awesome-agent-skills/pull/1038)) — addresses a recurring pain point in the agent ecosystem: giving coding agents their own OAuth identity to safely access tools like Gmail, Slack, and Notion, including MCP OAuth support. This maps to a broader, well-documented need (secure delegated auth for agents) rather than a one-off vendor plug.

## 8. Backlog Watch

- [#1029 — Add Contracko contract management skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1029): open for **4 days** with zero maintainer response, comments, or reactions. Given this repo's typical review cadence for list-addition PRs, this is starting to age and could use a maintainer look to keep the contribution queue from backing up.
- [#1038](https://github.com/VoltAgent/awesome-agent-skills/pull/1038) is too new (same-day) to flag as stale, but worth tracking if it goes unreviewed past a few days given the relevance of the OAuth-for-agents use case.

No long-dormant issues exist to flag since zero issues were active in this window.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
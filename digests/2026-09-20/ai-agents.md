# MCP Ecosystem Digest 2026-09-20

> Issues: 7 | PRs: 8 | Projects covered: 7 | Generated: 2026-09-20 11:59 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers — Daily Digest (2026-09-20)

## 1. Today's Overview

Activity today was moderate and maintenance-focused: 7 issues and 8 PRs saw activity in the last 24h, but no new releases shipped. Three PRs closed (all fixing concrete Windows/reliability bugs in the filesystem and git servers), while five PRs remain open, including two docker/CI hardening fixes and a memory-server permissions fix. The issue queue is dominated by a recurring theme — Windows path/execution compatibility — plus a fresh cluster of documentation requests from a user auditing outbound network traffic from reference servers. No critical regressions or security incidents were reported today; overall project health looks stable with active triage on known pain points.

## 2. Releases

No new releases in the last 24h.

## 3. Project Progress

Three PRs closed today, all bug fixes for long-standing correctness issues:

- **[#4265](https://github.com/modelcontextprotocol/servers/pull/4265) — fix(filesystem): handle canonical Windows share paths** (he-yufeng). Fixes UNC/mapped-drive path resolution so Windows share paths that canonicalize inside the allow-list are no longer incorrectly rejected; adds Windows regression coverage.
- **[#4290](https://github.com/modelcontextprotocol/servers/pull/4290) — fix(filesystem): validate canonical allowed paths** (he-yufeng). Fixes path validation for requests whose canonical form (or whose parent, for new files) resolves inside an allowed directory, while preserving the existing symlink-escape check.
- **[#4334](https://github.com/modelcontextprotocol/servers/pull/4334) — fix(git): keep stdio validation errors recoverable** (he-yufeng, fixes [#4213](https://github.com/modelcontextprotocol/servers/issues/4213)). Routes stdin validation errors through the JSON-RPC error path instead of crashing the process task group, matching the time server's behavior.

Together these close out a meaningful chunk of the filesystem server's Windows-path fragility, though note **[#4138](https://github.com/modelcontextprotocol/servers/issues/4138)** (write_file silently no-ops on Windows) is still open and doesn't appear to be covered by either merged filesystem fix.

## 4. Community Hot Topics

Ranked by engagement:

1. **[#4797](https://github.com/modelcontextprotocol/servers/issues/4797)** (6 comments) — Two memory-server processes sharing `MEMORY_FILE_PATH` silently discard each other's writes, because the per-process mutex added in #4555 only guards in-process races, not cross-process ones. Underlying need: users are running multiple memory-server instances (e.g. multi-client setups) against a shared file and expect durability guarantees the current design doesn't provide.
2. **[#3460](https://github.com/modelcontextprotocol/servers/issues/3460)** (4 comments) — All official `npx`-based server configs fail silently on Windows because `spawn()` doesn't resolve the `npx.cmd` shim without a `cmd /c` wrapper. This is a six-month-old, still-unresolved onboarding blocker for the entire Windows user base.
3. **[#4138](https://github.com/modelcontextprotocol/servers/issues/4138)** (3 comments) — `write_file` reports success but never persists to disk on Windows, while sibling filesystem tools work fine — a silent data-loss bug.

All three top-engagement items are Windows-specific, reinforcing that Windows compatibility is the project's most pressing community concern right now.

## 5. Bugs & Stability

Ranked by severity:

1. **[#4138](https://github.com/modelcontextprotocol/servers/issues/4138)** — *High.* `write_file` silently fails on Windows (false success, no data written). Silent data loss with no workaround mentioned; no fix PR currently linked.
2. **[#4797](https://github.com/modelcontextprotocol/servers/issues/4797)** — *High.* Cross-process write loss in the memory server when `MEMORY_FILE_PATH` is shared; the existing #4555 mutex doesn't cover this case. No fix PR yet — related but distinct is **[#4828](https://github.com/modelcontextprotocol/servers/pull/4828)** (open), which fixes memory file *permission bits* being reset on atomic save, not the race itself.
3. **[#3460](https://github.com/modelcontextprotocol/servers/issues/3460)** — *Medium.* Windows `npx` config silently fails to launch servers (docs/packaging gap, not a crash, but blocks first-run for Windows users). No fix PR linked.
4. **[#4792](https://github.com/modelcontextprotocol/servers/issues/4792)** — *Low.* The `everything` server's instructions unconditionally reference `trigger-sampling-request`/`trigger-elicitation-request` tools that only exist when the client declares those capabilities — misleading but not functionally broken.

## 6. Feature Requests & Roadmap Signals

- **[#659](https://github.com/modelcontextprotocol/servers/issues/659)** — Add a `git_merge` tool to `mcp-server-git`. Open for over 7 months with only 1 comment and 1 👍; low engagement suggests it's unlikely to land soon without a champion or PR.
- Indirectly, **[#4797](https://github.com/modelcontextprotocol/servers/issues/4797)**'s cross-process locking gap points toward a likely near-term roadmap item: file-level (not just in-process) locking for the memory server, given its high comment volume.
- **[#4807](https://github.com/modelcontextprotocol/servers/pull/4807)** (open, fixes [#4796](https://github.com/modelcontextprotocol/servers/issues/4796)) signals a governance/roadmap shift: restricting who can confirm the "not a new server" README gate, tightening the registry-migration process now that new server PRs to the README are no longer accepted (see also **[#4831](https://github.com/modelcontextprotocol/servers/pull/4831)**, a stray/likely-bot "Rename README.md to README.md" PR that illustrates why that gate exists).

## 7. User Feedback Summary

- **Windows compatibility remains the top pain point** across three independent reports (#3460, #4138, and the now-fixed #4265/#4290) — spawn shims, path canonicalization, and silent write failures. Users are broadly satisfied with the servers on Linux/macOS but frustrated by inconsistent first-run experience on Windows.
- **A new security/telemetry-conscious use case emerged today**: user `marcosmatalab` filed two docs issues (**[#4830](https://github.com/modelcontextprotocol/servers/issues/4830)**, **[#4829](https://github.com/modelcontextprotocol/servers/issues/4829)**) after auditing outbound network traffic from `mcp-server-fetch` and `server-puppeteer` — flagging that `fetch` installs npm packages during a tool call, and that browser-embedding servers don't document the browser's own background traffic. This is a deployment-hardening/observability concern, not a bug, but reflects users running these reference servers in security-sensitive or air-gapped-adjacent environments.
- Positive signal: #4829's author explicitly credits the reference servers' "real schemas" as what made their traffic measurement possible — indicating the servers are trusted enough to be used as an audit baseline.

## 8. Backlog Watch

- **[#659](https://github.com/modelcontextprotocol/servers/issues/659)** — `git_merge` feature request, open since 2025-02-23 (~7 months), only 1 comment. Needs a maintainer decision (accept/close) to avoid indefinite limbo.
- **[#4792](https://github.com/modelcontextprotocol/servers/issues/4792)** — 0 comments since 2026-09-11, a clear factual documentation bug in the `everything` server that should be a quick fix but hasn't been triaged.
- **[#4830](https://github.com/modelcontextprotocol/servers/issues/4830)** / **[#4829](https://github.com/modelcontextprotocol/servers/issues/4829)** — Fresh (09-19), 0 comments, but concern deployment security disclosures (undocumented network egress); worth prioritizing given the security angle even though they're brand new.
- **[#4281](https://github.com/modelcontextprotocol/servers/pull/4281)** — Open since 2026-06-04, fixes a real hang risk in `mcp-server-fetch` when Node's readability path misbehaves; over three months without merge despite addressing a legitimate reliability issue ([#4199](https://github.com/modelcontextprotocol/servers/issues/4199)).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP & Claude Agent Ecosystem
**Date: 2026-09-20**

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape on 2026-09-20 splits into two distinct motion patterns: **infrastructure/protocol repos** (MCP Servers, MCP Registry, Docker MCP Registry) that are consolidating around reliability, auth security, and catalog intake at scale, and **curated-list repos** (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills) that function as low-latency demand sensors for what builders are shipping. No project shipped a release today, and engagement data (comments/reactions) was largely absent or thin across the board — a snapshot of routine maintenance rather than a breakout day. The dominant cross-cutting theme is **infrastructure maturation under intake pressure**: registries and lists are being flooded with submissions faster than maintainers can triage them, while the reference server implementation is working through a long tail of platform-specific (Windows) correctness bugs. A secondary, more forward-looking signal — strong demand for memory/context persistence and agent self-verification tooling — is emerging from the Claude Code plugin ecosystem, hinting at where the next layer of tooling investment is headed.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | PR Throughput | Releases | Health Score |
|---|---|---|---|---|---|
| **MCP Servers** (core) | 7 open | 8 (3 closed / 5 open) | 38% | None | 7/10 — Stable |
| **MCP Registry** (official) | 0 | 5 (1 closed / 4 open) | 20% | None | 7/10 — Stable, maturing |
| **Awesome MCP Servers** | 0 | 57 (2 closed / 55 open) | 3.5% | N/A (list) | 5/10 — Backlog risk |
| **Docker MCP Registry** | 0 | 50 (0 closed / 50 open) | 0% | None | 4/10 — Throughput stalled |
| **Claude Plugins** (official) | 5 open | 2 (2 closed / 0 open) | 100% (of today's PRs) | None | 5/10 — Aging high-severity bug |
| **Awesome Claude Code** | 11 (2 closed / 9 open) | 0 | N/A | None | 7/10 — Functioning pipeline |
| **Awesome Agent Skills** | 0 | 3 open | 0% (too new to judge) | None | 6/10 — Nascent, low volume |

*Health scores are qualitative, weighted toward throughput-vs-backlog balance, presence/age of unresolved high-severity bugs, and whether automation (validation labels, bots) is functioning as intended.*

## 3. MCP Servers's Position

**Advantages vs. peers:** MCP Servers is the only project in this set doing genuine correctness engineering rather than pure intake — three PRs closed today all fix concrete, reproducible bugs (Windows path canonicalization, stdio crash-on-invalid-input) with regression coverage. This distinguishes it from the registry/list repos, whose "progress" is almost entirely accept/reject decisions on external contributions. Its issue queue, while Windows-heavy, shows active triage rather than stagnation (#4213 → #4334 same-window fix).

**Technical approach differences:** Unlike the registries (MCP Registry, Docker MCP Registry) which validate and catalog *pointers* to servers, MCP Servers ships and maintains the reference *implementations* themselves — giving it direct responsibility for runtime bugs (silent data loss in `write_file`, cross-process file races in the memory server) that the registries never encounter.

**Community size comparison:** Engagement (7 issues, 8 PRs touched) is modest relative to Awesome MCP Servers' 57-PR submission volume, but per-item engagement is denser — top issues carry 3-6 comments each vs. near-zero comments across the awesome-list and registry repos today. This suggests a smaller but more technically invested contributor base, consistent with its role as the canonical reference implementation rather than a low-friction listing surface.

## 4. Shared Technical Focus Areas

- **Windows/cross-platform compatibility** — MCP Servers (3 of its top issues: #3460, #4138, plus 2 merged fixes) is the epicenter, but this is a recurring failure class (path canonicalization, shim resolution) likely to resurface in any Node/npx-based server across the ecosystem.
- **Auth/domain-spoofing hardening** — MCP Registry's GitLab Pages domain-validation gap (#1574) mirrors a prior GitHub Pages vulnerability class (#1506), signaling that *subdomain-hosting spoofing* is a systemic risk pattern registries need to check per-provider, not a one-off bug.
- **Submission-intake bottleneck** — Awesome MCP Servers (55 open / 2 closed), Docker MCP Registry (50 open / 0 closed), and Awesome Claude Code (9 open resource submissions) all show the same structural symptom: PR/issue inflow substantially outpacing maintainer review capacity. Docker MCP Registry's bot-generated pin-update PRs (some 10+ months old) are the most extreme case.
- **Agent self-verification & reliability infrastructure** — Claude Plugins' `security-guidance` plugin issues (#4693 hallucinated paths, #5746 schema-validation silent failure) and Awesome Claude Code's cluster of 4 independent memory/context-persistence submissions both point to the same underlying gap: agents need better guarantees around *where they're operating* and *whether their output is trustworthy*, without silent degradation.
- **Remote/hosted server growth** — Docker MCP Registry explicitly notes a shift toward `type: remote` streamable-HTTP submissions (#5171, #5170, #5169) over containerized/local servers, a trend not yet visible in the other registries but likely to propagate.

## 5. Differentiation Analysis

| Dimension | MCP Servers | MCP Registry | Docker MCP Registry | Awesome-* lists | Claude Plugins |
|---|---|---|---|---|---|
| **Target user** | Server implementers, Claude/LLM client integrators | Server publishers seeking discoverability | Docker-based MCP deployers | Ecosystem newcomers browsing options | Claude Code plugin authors/users |
| **Feature focus** | Correctness, protocol compliance | Publish/auth validation, uniqueness rules | Containerized catalog intake, pin freshness | Curated discovery, categorization | Agentic workflow reliability, marketplace sync |
| **Architecture concern** | Path/process safety, cross-platform I/O | Domain-ownership verification, DNS/HTTP token exchange | Docker image pinning, staleness tracking | None (static Markdown) | Subprocess stderr handling, JSON schema validation |
| **Governance model** | Direct code review + regression tests | PR-gated schema/validator changes | Bot-assisted pin automation + human review | Template-driven submission + labels (`validation-passed`, `duplicate`) | Issue triage + community plugin marketplace |

## 6. Community Momentum & Maturity

**Rapidly iterating (submission-driven):** Awesome MCP Servers (57 PRs/day), Docker MCP Registry (50 PRs/day), and Awesome Claude Code (9 new resource submissions) are all in a high-inflow phase. None of these are "rapid *development*" — they're rapid *intake* — and all three show the same maturity warning sign: throughput has not scaled with volume (Docker: 0% merge rate today; Awesome MCP Servers: 3.5%).

**Stabilizing / steady-state:** MCP Servers and MCP Registry both show low-but-nonzero, high-quality throughput — few PRs, but each closes a concrete correctness or security gap. This is the profile of a maturing project moving from feature-building to hardening.

**Early-stage / low-volume:** Awesome Agent Skills (3 PRs, zero history to benchmark against) and Claude Plugins' newer feature signals (#6263, #6264) are too new to classify confidently — worth re-checking in 1-2 weeks once a baseline review-latency exists.

**At-risk backlog:** Docker MCP Registry's bot-authored pin-update PRs aging past 10 months, and Claude Plugins' #2857 (High severity, Telegram plugin permanently stops polling, ~97 days unresolved) are the two clearest maturity red flags in this set — both represent unresolved operational risk sitting in an otherwise healthy-looking project.

## 7. Trend Signals

1. **Agent context/session persistence is an unmet need, not a solved problem.** Four independently-built solutions landed in Awesome Claude Code's queue on the same day (ctx-kit, csm, hermes-blind, claude-memory-graph) — strong market signal that native session/context retention across Claude Code restarts is a top builder pain point. Developers building on Claude agents should expect (and can differentiate around) better native memory primitives becoming a competitive area.
2. **Self-verification and guardrail tooling is emerging as its own category.** GateRail, isitdone, and lintlang (spec-before-code enforcement, test/lint/typecheck hooks, agent-instruction linting with claimed adoption by Character.AI's Larch repo) all point to the same maturity signal as traditional CI: agent-generated work increasingly needs deterministic, external verification rather than trusting model self-report.
3. **Security tooling built on LLMs needs explicit failure modes.** Claude Plugins' `security-guidance` issues (#4693, #5746) show that when an agentic review pipeline fails silently — wrong paths, no verdict — it's more dangerous than an obviously broken tool, because users trust a "no findings" result at face value. Any team shipping LLM-based review/audit tooling should treat schema-validation failures and context-path correctness as launch-blocking, not polish items.
4. **Domain-spoofing is a recurring, provider-generic vulnerability class.** The GitLab Pages gap mirroring a prior GitHub Pages issue in MCP Registry suggests auth flows that validate "does this domain resolve under an official host" need a systematic per-provider audit (Bitbucket, Codeberg, etc. are plausible next findings) rather than one-off patches.
5. **Remote/hosted MCP servers are overtaking local/containerized ones as the default submission type**, per Docker MCP Registry's observed shift — infrastructure and security review processes built around "review the Docker image" may need to add "review the remote endpoint's trust/auth model" as a parallel checklist.
6. **Intake automation without a throughput safety valve creates silent backlog debt.** Three of seven projects here (Awesome MCP Servers, Docker MCP Registry, and to a lesser extent Claude Plugins' marketplace sync) show submission/update volume decoupled from resolution volume — a pattern worth watching before it becomes a contributor-trust problem (stale PRs signal "submissions go into a black hole").

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) — Daily Digest
**modelcontextprotocol/registry** · 2026-09-20

## 1. Today's Overview

Activity in the last 24 hours was light but steady: no new issues, no releases, and five pull requests touched (four open, one closed/merged). All PR movement clustered around validation and authentication hardening — GitLab URL handling, HTTP verification docs, and domain-spoofing protection — plus one UI feature for server icons. There is no engagement data (comments/reactions all show 0 or unreported) on any of today's items, suggesting this was routine maintenance activity rather than a spike driven by community discussion. Overall the project reads as stable and incrementally maturing, with maintainers focused on tightening auth/validation edge cases rather than shipping new capabilities.

## 2. Releases

None. No new releases in this window.

## 3. Project Progress

- **[#1317 fix: ignore inactive remote URL conflicts](https://github.com/modelcontextprotocol/registry/pull/1317)** (closed) — Fixes #1193. Extends existing remote-URL uniqueness logic (which already excludes deleted servers) to also exclude *deprecated* servers from conflict checks. This unblocks publishing a replacement server when an old one has been intentionally deprecated — a real workflow gap for maintainers rotating server versions.

That is the only PR that resolved today; the remaining four are still open and in progress (see below).

## 4. Community Hot Topics

No comment or reaction counts were reported for any item today (all 👍: 0, comments: undefined), so there's no clear engagement leader in this window. By scope and cross-referencing to other issues, the most structurally significant open items are:

- **[#1586 feat(ui): display server icons in the registry web client](https://github.com/modelcontextprotocol/registry/pull/1586)** — Closes #784. Long-requested visual improvement so registry cards aren't text-only; underlying need is discoverability/trust signaling for server listings.
- **[#1640 docs(auth): document HTTP verification requirements](https://github.com/modelcontextprotocol/registry/pull/1640)** — Answers #1625. Reflects real confusion among publishers about *why* HTTP verification fails (key vs. file vs. registry egress reachability) — a support-burden reduction effort.

## 5. Bugs & Stability

Ranked by potential impact:

1. **[#1574 fix(auth): reject gitlab.io domains in DNS/HTTP token exchange](https://github.com/modelcontextprotocol/registry/pull/1574)** (open, fix in progress) — Security-relevant gap: `gitlab.io` shared-hosting subdomains aren't rejected by `ValidateDomainAndTimestamp`, mirroring a prior `github.io` vulnerability class (#1506). Since GitLab Pages serves `<group>.gitlab.io` from a repo any member of that group controls, this is a domain-ownership-spoofing risk in the auth flow until merged.
2. **[#1361 fix(validators): allow GitLab repository URLs with nested subgroups](https://github.com/modelcontextprotocol/registry/pull/1361)** (open, fix in progress) — Functional bug, not security: `gitlabURLRegex` incorrectly rejects valid nested-subgroup GitLab URLs (e.g. `gitlab.com/org/team/subgroup/repo`), blocking legitimate publishes. Fixes #1359.

Both have fix PRs already submitted and awaiting merge — no unresolved/unfixed bugs reported today.

## 6. Feature Requests & Roadmap Signals

- Server icon rendering (#1586) is the closest to shipping — implementation-complete PR against an existing schema field, likely mergeable soon and a good candidate for the next release notes.
- GitLab as a first-class Git host (nested subgroups, gitlab.io domain safety) appears to be an active mini-theme — two PRs today improve GitLab support/safety, suggesting the registry is broadening beyond GitHub-centric assumptions.
- Clearer HTTP-verification documentation (#1640) signals a likely near-term addition of egress IP allowlisting or a documented fixed egress range, since the PR explicitly calls out that "the Registry's egress addresses are not a fixed set that can be allowlisted" as an open problem.

## 7. User Feedback Summary

No direct user comments were available in today's data (issue count is zero and PR comment counts weren't reported), so feedback must be inferred from linked issues:
- Publishers using GitLab report friction from both a validation bug (#1359 → #1361) and a security-policy question around GitLab Pages (#1574) — indicating growing but still second-class GitLab support relative to GitHub.
- Publishers hitting HTTP verification failures reportedly can't tell whether the problem is their key, their file, or network reachability to the registry (#1625 → #1640) — a debuggability/UX pain point in the publishing flow.
- The UI icon gap (#784 → #1586) reflects a longstanding cosmetic complaint that servers are visually indistinguishable in the web client.

## 8. Backlog Watch

- **[#1361](https://github.com/modelcontextprotocol/registry/pull/1361)** — Open since 2026-06-12 (~3 months), still unmerged despite being a straightforward validator fix. Worth maintainer attention given it blocks legitimate GitLab publishes.
- **[#1574](https://github.com/modelcontextprotocol/registry/pull/1574)** — Open since 2026-08-26 (~3.5 weeks); given the security nature (domain-spoofing gap), this deserves faster review priority than its age alone suggests.
- **[#1586](https://github.com/modelcontextprotocol/registry/pull/1586)** — Open since 2026-08-27 (~3.5 weeks); a completed feature PR sitting idle is a minor backlog-hygiene signal worth a maintainer look.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers — Daily Digest (2026-09-20)

## 1. Today's Overview

Activity today was entirely PR-driven: **0 issues** touched, **57 PRs** updated, and **0 releases** (expected, since this is a curated list repository, not a software package). Of those 57 PRs, 55 remain open and only 2 were closed/merged in the window — a low resolution rate that reflects the list's typical pattern of a large, steady inflow of "add my server" submissions outpacing maintainer triage. Nearly every PR in the sample follows the same template: a single-entry addition or metadata correction to the README, many carrying a `🤖🤖🤖` marker suggesting LLM-assisted PR descriptions. No comment or reaction data was available for any item today (all counts are `undefined`/0), so engagement can't be used to rank interest — the signal here is submission volume and category spread, not discussion.

## 2. Releases

None — no new releases in this window.

## 3. Project Progress

Only one closed PR is visible in the sampled data:
- [#14732 — Add AlphaDesk Terminal (Finance & Fintech)](https://github.com/punkpeye/awesome-mcp-servers/pull/14732) — closed. A 37-tool, read-only financial data server (SEC EDGAR filings, XBRL, quotes/charts) submitted and closed same-day; status (merged vs. rejected) isn't distinguishable from the data provided.

The stats report 2 closed/merged PRs total in 24h, but the second isn't among the top-20-by-comments sample, so no detail is available on it. No other functional "progress" occurred — this repo has no code path, so "progress" is entirely list curation (entries added, categorized, or corrected).

## 4. Community Hot Topics

No PR shows nonzero comments or reactions today, so there's no engagement-based hot topic. The closest thing to a notable thread is:
- [#14295 — Update Agent360dk/browser-mcp: 40 tools, 20 concurrent sessions](https://github.com/punkpeye/awesome-mcp-servers/pull/14295) — flagged with a `duplicate` label, suggesting a maintainer or bot has already identified overlapping content. Worth checking for conflict resolution.
- [#13249 — Add KitchenSink4PPT/4XL/4Web, reorganize KitchenSink4Word](https://github.com/punkpeye/awesome-mcp-servers/pull/13249) — a multi-entry consolidation PR (org-level URL migration) rather than a single addition, which is structurally more complex than the norm and likely needs closer review.

Underlying need: contributors are increasingly submitting *families* of related servers or correcting stale metadata on prior entries, rather than pure new-server adds — a sign the list is maturing and needs periodic upkeep, not just intake.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today — expected, since there are 0 issues and this repo has no runtime to crash. The only "stability"-adjacent signal is the `duplicate` label on [#14295](https://github.com/punkpeye/awesome-mcp-servers/pull/14295), which is a curation/data-quality concern (duplicate listing) rather than a defect, and the general pattern of `manual-review` / `missing-glama` labels appearing on most PRs, indicating the repo's automated linting is flagging metadata gaps at intake rather than after the fact.

## 6. Feature Requests & Roadmap Signals

There's no traditional feature-request activity (no issues), but submission patterns hint at where the list is expanding: Security (`HallucC`, `oleg-vdv/kepil`), Browser Automation (`jev-ultrafast-mcp`), Developer Tools (spreadsheet/VBA tooling, JSON tooling, reverse-engineering via IDA Pro), and niche verticals (SMSF/Australian finance rules, Italian real-estate/cadastral data, US court filing rules). Given the volume in Developer Tools and Security categories specifically, expect the next batch of merges to skew toward those two sections. No roadmap changes to the repo's own structure (categories, labeling scheme) were signaled today.

## 7. User Feedback Summary

"Users" here are primarily contributors, and their comments reveal a few recurring themes:
- **Metadata upkeep**: [#14295](https://github.com/punkpeye/awesome-mcp-servers/pull/14295) explicitly calls out stale numbers in a previously-merged entry (tool count, concurrency), indicating self-reported entries drift out of date without a maintenance mechanism.
- **Org consolidation**: [#13249](https://github.com/punkpeye/awesome-mcp-servers/pull/13249) points an existing entry at a new organizational URL as a project scales from single-author to org-owned.
- **Disclosure norms**: [#14739 — Add Busabase](https://github.com/punkpeye/awesome-mcp-servers/pull/14739) explicitly discloses "contributing on behalf of Busabase," showing at least some contributors are proactively following commercial-disclosure conventions the list appears to expect.
- **Non-server tooling boundary-testing**: [#14696 — Add mcp-triage](https://github.com/punkpeye/awesome-mcp-servers/pull/14696) explicitly argues its CLI (not an MCP server) still belongs in "Other Tools and Integrations," suggesting some ambiguity among contributors about scope boundaries.

No dissatisfaction or complaints were visible in this sample — all feedback is constructive/submission-oriented.

## 8. Backlog Watch

Three open PRs have sat for roughly 3 weeks or more with no resolution, worth maintainer attention:
- [#13249 — KitchenSink additions/reorg](https://github.com/punkpeye/awesome-mcp-servers/pull/13249) — open since 2026-08-30 (21 days).
- [#13328 — Add court-rules-mcp to Legal](https://github.com/punkpeye/awesome-mcp-servers/pull/13328) — open since 2026-08-31 (20 days).
- [#11199 — Add clearjson-mcp to Developer Tools](https://github.com/punkpeye/awesome-mcp-servers/pull/11199) — open since 2026-07-30 (52 days), the oldest in this sample by a wide margin.

Given the ~55 open PRs against 2 closed in a single day, the merge backlog is growing faster than it's being cleared — this is the most notable structural risk to project health right now, more than any single technical issue.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry — Daily Digest
**Date:** 2026-09-20

---

## 1. Today's Overview

Activity in the last 24 hours was submission-heavy but merge-light: 50 PRs were updated and zero were merged or closed, while issue activity was flat (0 updated). No new releases shipped. The PR stream splits cleanly into two categories — a handful of genuinely new submissions from external contributors (new server additions: `xlide-mcp`, `opusclip`, `infyicon-free-icons`, `scrapiq`, plus a maintainer-driven tool-count update for `cyreslab-ai-shodan`) and a long tail of automated `mcp-registry-bot[bot]` "chore: update pin for X" PRs, some open since November 2025, that simply got their "updated" timestamp bumped today without any human interaction. No comment or reaction counts were available for any item (all show `Comments: undefined`, `👍: 0`), so no PR/issue can be reliably ranked as a "hot" discussion today — engagement signal for this window is effectively absent. Overall, this looks like routine registry-intake traffic plus stale bot housekeeping rather than a day of active community debate or incident response.

## 2. Releases

No new releases in this window.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours (0 of 50 updated PRs resolved). All 50 remain open. Net effect: today shows submission/update volume but zero throughput — nothing shipped to the catalog as a result of merges.

## 4. Community Hot Topics

Reliable ranking isn't possible today — every listed item reports `Comments: undefined` and `👍: 0`, so there's no engagement data to rank by. Based on content/activity type instead of comment volume, the most notable items are:

- **[#5173 – Update cyreslab-ai-shodan: 23 → 34 tools, fix category to security](https://github.com/docker/mcp-registry/pull/5173)** — maintainer-authored catalog sync; source repo drifted 18 commits behind pinned version, implying the registry's staleness-tracking for maintainer-owned servers needs tightening.
- **[#5172 – Add xlide-mcp](https://github.com/docker/mcp-registry/pull/5172)** — a large surface-area submission (49 tools) for Office/VBA document manipulation, notable for its scope relative to typical new-server PRs.
- **[#5171 – Add OpusClip remote MCP server](https://github.com/docker/mcp-registry/pull/5171)**, **[#5170 – Add Infyicon Free Icons](https://github.com/docker/mcp-registry/pull/5170)**, **[#5169 – Add Scrapiq remote MCP server](https://github.com/docker/mcp-registry/pull/5169)** — all same-day submissions of `type: remote` streamable-HTTP servers, continuing the registry's trend toward remote (vs. containerized/local) server listings.

Underlying need signaled: contributors are increasingly submitting hosted/remote MCP endpoints rather than Dockerized local servers, and at least one maintainer is proactively re-syncing a drifted server rather than waiting for the bot pin-update cycle.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today — 0 issues updated in the last 24h and none of the surfaced PRs describe a fix for broken behavior. The `cyreslab-ai-shodan` catalog drift (#5173) is a staleness/correctness gap rather than a bug report, and it already has a corrective PR open.

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues surfaced today (issue volume was zero). Indirect roadmap signals from the PR queue:

- Continued growth in **remote MCP server** listings (OAuth-less, streamable-HTTP endpoints) — #5171, #5170, #5169 — suggests the registry's remote-server onboarding path is becoming a primary intake channel and may warrant its own review checklist/documentation if volume keeps rising.
- The large backlog of aged, unmerged `mcp-registry-bot` pin-update PRs (some from Nov 2025 / Feb 2026 / Jun–Jul 2026, still open) hints at a potential need for an auto-merge policy or stricter TTL on bot-generated pin PRs to reduce open-PR clutter.

## 7. User Feedback Summary

No direct user sentiment (comments, reactions) is present in today's data — all engagement fields are empty/zero. What can be inferred from PR descriptions:
- New-server contributors are emphasizing security/scope details (content-token guards, static analysis diagnostics in #5172; explicit "no OAuth/no API key/anonymous" callouts in #5170 and #5169), suggesting submitters are self-policing against the registry's known concerns around credential handling and server trustworthiness.
- The #5173 author explicitly self-identifies as the upstream maintainer, a pattern likely intended to fast-track review trust.

No dissatisfaction or complaints are evidenced in this window.

## 8. Backlog Watch

The dominant backlog signal today is the volume of long-open, auto-generated pin-update PRs that have received no resolution despite recurring "updated" timestamps:

- **[#614 – chore: update pin for awslabs-cloudwatch-appsignals](https://github.com/docker/mcp-registry/pull/614)** — open since 2025-11-07 (~10.5 months)
- **[#788 – chore: update pin for omi](https://github.com/docker/mcp-registry/pull/788)** — open since 2025-11-26
- **[#621 – chore: update pin for awslabs-nova-canvas](https://github.com/docker/mcp-registry/pull/621)** — open since 2025-11-07
- **[#1083 – chore: update pin for stripe](https://github.com/docker/mcp-registry/pull/1083)** — open since 2026-02-07
- A cluster of `awslabs-*` pin PRs (#4355–#4381, #4129) opened late June–July 2026, still unmerged nearly two months later

None of these show maintainer engagement (no comments, no reactions), and given they're bot-authored with no human champion, they're the clearest candidate for a triage sweep — either bulk-merge, close as superseded, or automate resolution — before the open-PR count grows further.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) — Daily Digest
**Date:** 2026-09-20 | **Repo:** [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

## 1. Today's Overview

Activity over the last 24h is light but concentrated: 5 issues remain open with no closures, and both PRs updated today were closed (one merged fix, one apparently spam/empty submission). No new releases shipped. The bulk of substantive activity clusters around the `security-guidance` plugin, which has three separate open issues touching its LLM-driven review pipeline — a signal that this plugin's agentic review path is under active scrutiny and may need a stabilization pass. Overall project health looks steady-state rather than high-velocity: low PR throughput, no releases, and a handful of aging bug reports still awaiting maintainer response.

## 2. Releases

No new releases in the last 24h. Nothing to report.

## 3. Project Progress

Two PRs were updated today, both closed:

- **[#6262 — fix(security-guidance): capture agentic CLI stderr](https://github.com/anthropics/claude-plugins-official/pull/6262)** (merged/closed 2026-09-19, author `Pranay-Kumar-02`): Fixes a bug where the inner Claude CLI's stderr wasn't captured during the agentic security review path, allowing a startup warning to leak into the parent hook's stderr and clobber the actual review output. Change scoped to `agentic_review._arun()`. This is directly relevant to the reliability concerns raised in #4693 and #5746 below (same review pipeline), though it doesn't appear to fix either of them directly.
- **[#6265 — "Pull2"](https://github.com/anthropics/claude-plugins-official/pull/6265)** (closed 2026-09-20, author `oga35767-eng`): No description, no summary content. Closed same day it was opened — likely a test, spam, or accidental submission rather than substantive work.

## 4. Community Hot Topics

Ranked by comment activity (reactions are uniformly at 0 across all items today, so comments are the best engagement signal):

- **[#4693 — Agentic reviewer prompt never states its working directory](https://github.com/anthropics/claude-plugins-official/issues/4693)** (4 comments, open since 2026-07-30, updated yesterday): The most-discussed item. Root cause is that the reviewer subagent is told changed files as repo-relative paths but never given the absolute repo root, despite running with a different `cwd`. This produces hallucinated absolute paths in review output — an underlying need for **prompt/context correctness** in agentic tooling, not just a cosmetic bug.
- **[#5746 — Commit reviewer fails its own findings schema](https://github.com/anthropics/claude-plugins-official/issues/5746)** (2 comments, open since 2026-09-03): The `security-guidance` cross-file commit review silently produces no verdict when the LLM's JSON output fails schema validation (`findings: must be array`). Users need **graceful degradation with visible errors** rather than silent failure — a reliability/trust concern for a security tool.
- **[#2857 — Telegram plugin stops polling after 8 transient 409s](https://github.com/anthropics/claude-plugins-official/issues/2857)** (1 comment, open since 2026-06-15, still updated today): Longest-running of the active issues; underlying need is **resilient retry/backoff logic** rather than permanent failure on transient upstream conflicts.

## 5. Bugs & Stability

Ranked by severity:

1. **[#2857 — Telegram channel plugin permanently stops polling after 8 transient 409 Conflicts](https://github.com/anthropics/claude-plugins-official/issues/2857)** — **High severity** (explicitly labeled by reporter). The bot goes silently deaf to all inbound messages until manual restart, caused by the polling retry loop in `server.ts` treating transient 409s as fatal. No fix PR yet. Oldest unresolved bug in the batch (~97 days).
2. **[#5746 — Commit reviewer fails its own findings schema](https://github.com/anthropics/claude-plugins-official/issues/5746)** — Medium-high: a security review tool silently yielding "no verdict" instead of surfacing an error undermines trust in the tool's output. No fix PR linked.
3. **[#4693 — Agentic reviewer hallucinates absolute paths](https://github.com/anthropics/claude-plugins-official/issues/4693)** — Medium: produces incorrect output (wrong file paths in review findings) rather than crashing, but degrades review quality. No fix PR linked, though **[#6262](https://github.com/anthropics/claude-plugins-official/pull/6262)** (merged) fixed a related stderr-capture bug in the same subsystem — worth checking if that PR's author is also tracking this one.
4. **[#6263 — Codebase Analysis only probes repo root](https://github.com/anthropics/claude-plugins-official/issues/6263)** — Lower severity, more of a coverage gap than a crash: `claude-automation-recommender` misses sub-project manifests (monorepos) and the agent's own project memory during Phase 1 dependency probing.

## 6. Feature Requests & Roadmap Signals

No items today are framed as pure feature requests, but two carry roadmap implications:

- **[#6263](https://github.com/anthropics/claude-plugins-official/issues/6263)** implicitly requests monorepo-aware dependency detection (recursive manifest probing) and integration with existing project memory — plausible candidate for the next `claude-automation-recommender` patch given it's a scoped, well-diagnosed gap.
- **[#6264](https://github.com/anthropics/claude-plugins-official/issues/6264)** points to a marketplace **sync pipeline** gap (approved plugins not propagating to `claude-plugins-community/marketplace.json`) — likely to prompt an infrastructure/ops fix (sync job investigation) rather than a plugin-code feature, but is a blocker for third-party plugin authors' go-live.

## 7. User Feedback Summary

- **Pain point — silent failures in security tooling**: Both `security-guidance` issues (#4693, #5746) describe the reviewer producing *wrong or absent* output without clear errors, which is especially concerning for a security-focused plugin where users may trust a "no findings" result at face value.
- **Pain point — operational reliability**: #2857's reporter frames the Telegram plugin's silent failure mode in production terms ("severity: High... silently goes deaf"), indicating real deployment usage, not just casual testing.
- **Pain point — marketplace/distribution friction**: #6264's reporter (`hmp-dev`) has waited ~5 days across "several nightly cycles" for their approved plugin to appear publicly — a distribution/trust issue for third-party contributors, separate from code quality.
- No explicit positive/satisfaction signals appear in today's window; all reporter-authored content is problem-focused.

## 8. Backlog Watch

- **[#2857](https://github.com/anthropics/claude-plugins-official/issues/2857)** — Open since 2026-06-15 (~97 days), High severity, still receiving updates (today) but no maintainer fix PR. Highest-priority backlog item needing attention.
- **[#4693](https://github.com/anthropics/claude-plugins-official/issues/4693)** — Open since 2026-07-30 (~52 days), actively discussed (4 comments) but unresolved.
- **[#6264](https://github.com/anthropics/claude-plugins-official/issues/6264)** — Not old in absolute terms (~5 days), but reporter explicitly flags multiple missed nightly sync cycles, suggesting a stuck automated process rather than a simple queue delay — worth escalating before it ages further.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code — Daily Digest
**Date: 2026-09-20**

## 1. Today's Overview

Activity over the last 24 hours was light but steady, consisting entirely of community resource submissions rather than core project development — this repository is a curated list, so "activity" here means new tool/plugin submissions rather than code changes. 11 issues were touched (9 open, 2 closed), zero PRs, and zero releases, which is typical for a curation repo with no packaged software to version. Nine of the eleven issues are `resource-submission` entries proposing new Claude Code integrations (skills, memory/context tools, orchestration frameworks), most already tagged `validation-passed` and pending merge into the list. One issue was auto-closed as a stale/incomplete submission, and one was a maintainer probe/test closed immediately. Overall health signal: the submission pipeline is active and the automated validation-label workflow appears to be functioning as intended.

## 2. Releases

None. No new releases in the last 24 hours.

## 3. Project Progress

No PRs were opened, merged, or closed today, so there's no code-level progress to report. The only "progress" was triage of incoming resource submissions:
- [#2887](https://github.com/hesreallyhim/awesome-claude-code/issues/2887) — a maintainer-authored probe issue ("test issue, safe to close"), closed same-day. Indicates active maintainer housekeeping/testing of the issue workflow.
- [#2885](https://github.com/hesreallyhim/awesome-claude-code/issues/2885) — `isitdone` submission auto-closed with `validation-pending` + `auto-closed` labels, suggesting the submitter didn't complete required validation steps in time.

## 4. Community Hot Topics

Engagement was uniformly low today (max 2 comments, 0 reactions on every item), so there's no standout viral thread — but the pattern of *what's being submitted* is itself the signal:

- [#2553 — Bullshit Detector](https://github.com/hesreallyhim/awesome-claude-code/issues/2553) (2 comments) — a fact-checking skill set for articles/tweets/video content. The most-discussed item today, likely due to back-and-forth on validation criteria.
- Four separate submissions land in **Memory & Context Persistence** today: [#2890 ctx-kit](https://github.com/hesreallyhim/awesome-claude-code/issues/2890), [#2889 csm](https://github.com/hesreallyhim/awesome-claude-code/issues/2889), [#2888 hermes-blind](https://github.com/hesreallyhim/awesome-claude-code/issues/2888), [#2882 claude-memory-graph](https://github.com/hesreallyhim/awesome-claude-code/issues/2882).

**Underlying need**: session/context loss across Claude Code restarts is clearly a top pain point for the ecosystem right now — four independent teams built overlapping solutions (session resumption, cross-directory session recovery, deterministic local recovery, and markdown-memory-graph indexing) in the same window. This is a strong signal that Claude Code's native memory/session persistence is still seen as insufficient by power users.

## 5. Bugs & Stability

No bug reports, crash reports, or regressions were filed against this repository today — expected, since it's a static list rather than executable software. No fix PRs were needed or opened.

## 6. Feature Requests & Roadmap Signals

No direct feature requests against *this* repo, but the submitted resources telegraph what the broader Claude Code community is building demand for:
- **Memory/context persistence** (4 submissions, see above) — strongest cluster today.
- **Guardrails/process enforcement**: [#2886 GateRail](https://github.com/hesreallyhim/awesome-claude-code/issues/2886) (spec-before-code + rails enforcement) and [#2885 isitdone](https://github.com/hesreallyhim/awesome-claude-code/issues/2885) (Stop-hook test/lint/typecheck enforcement) both push toward stricter agent self-verification workflows.
- **Security/secrets handling**: [#2883 ContextVeil](https://github.com/hesreallyhim/awesome-claude-code/issues/2883) — hook-based secret redaction from env/files.
- **Agent orchestration**: [#2891 Orbi](https://github.com/hesreallyhim/awesome-claude-code/issues/2891) — issue-to-implementation-to-review-to-merge pipeline automation.
- **Multi-purpose project scaffolding**: [#2884 Dev-Suite](https://github.com/hesreallyhim/awesome-claude-code/issues/2884) — stack-aware config installer.

If this pace continues, expect the next list update to add several Memory & Context Persistence and process-enforcement (hooks/skills) entries, reflecting where the ecosystem's energy currently concentrates.

## 7. User Feedback Summary

No direct satisfaction/dissatisfaction commentary appeared in today's window (submissions are mostly template-filled resource descriptions, not discussion threads). Indirectly, the volume of memory/session-recovery and enforcement-hook tools being built suggests two recurring pain points motivating community tool-building: (1) Claude Code losing/not retaining task context across sessions or directories, and (2) agents skipping verification steps (tests/lint/spec-writing) unless externally enforced via hooks.

## 8. Backlog Watch

With comments capped at 0–2 and reactions at 0 across the board, none of today's issues show signs of being stuck or contentious — they're fresh (mostly created today, 2026-09-20, or the day prior). The one item worth flagging for maintainer attention is:
- [#2885 isitdone](https://github.com/hesreallyhim/awesome-claude-code/issues/2885) — auto-closed under `validation-pending`. Worth confirming this was an appropriate auto-close and not a false negative on a legitimate submission, since the tool description (test/lint/typecheck enforcement hook) is directly relevant to the roadmap theme above.

No long-aged open issues/PRs are visible in this 24h window — a full backlog audit would require looking beyond the last-24h update filter.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Daily Digest
**Date:** 2026-09-20

## 1. Today's Overview

Activity in the last 24 hours was light but steady, consisting entirely of new skill-submission PRs — no issues were opened or updated, and no releases shipped. Three PRs (#1074, #1075, #1076) were opened, each proposing to add a new community skill to the awesome-list, spanning marketing automation, biomedical NLP, and agent-instruction linting. None have been merged, closed, or commented on yet, so this is a quiet, submission-only day typical of a curated awesome-list repo rather than an actively developed codebase. Overall project health signal: stable and low-noise, driven by community contribution volume rather than internal engineering churn.

## 2. Releases

None today.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. All three open PRs are pending maintainer review:

- [#1076 — Add skill: hermes-labs-ai/lintlang](https://github.com/VoltAgent/awesome-agent-skills/pull/1076)
- [#1075 — Add skill: infonality/biomedical-nlp-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1075)
- [#1074 — Add skill: BuildsbyMatt/mentionagent-claude-skill](https://github.com/VoltAgent/awesome-agent-skills/pull/1074)

## 4. Community Hot Topics

No issues or PRs have accumulated comments or reactions yet (all three PRs show 0 👍 and no comments as of the data snapshot) — engagement typically arrives after maintainer triage. Of the three, the underlying needs represented are notable:

- **[#1076 (lintlang)](https://github.com/VoltAgent/awesome-agent-skills/pull/1076)** signals growing interest in *governance tooling for agent skills themselves* — deterministic static checks for agent instructions/tool descriptions/prompts, with claimed adoption by Character.AI's Larch repo and inclusion in MegaLinter's catalog. This points to a maturing ecosystem need: linting/CI for prompt engineering artifacts, not just code.
- **[#1075 (biomedical-nlp-skills)](https://github.com/VoltAgent/awesome-agent-skills/pull/1075)** reflects continued expansion into specialized/vertical domains (healthcare NLP: NER, de-identification, entity linking, biomedical QA).
- **[#1074 (mentionagent-claude-skill)](https://github.com/VoltAgent/awesome-agent-skills/pull/1074)** represents the marketing/growth-automation category, integrating an MCP server for outreach workflows.

## 5. Bugs & Stability

No bugs, crashes, or regressions reported in the last 24 hours (0 issues opened or updated).

## 6. Feature Requests & Roadmap Signals

No explicit feature-request issues were filed today. However, the PR submissions themselves hint at where the "next version" of the awesome-list's taxonomy may expand:
- A dedicated **linting/CI category for agent skills** could emerge if #1076 merges and sets precedent, given its stated external adoption.
- Continued growth of the **Specialized Domains** section (biomedical, and likely legal/finance next) per #1075's pattern.
- Marketing/outreach automation skills (#1074) suggest the **Marketing** category will keep growing as MCP-server-backed skills become more common.

## 7. User Feedback Summary

No direct user feedback (issue comments, discussions) surfaced today — activity is limited to submission PRs. Each PR author frames their own contribution as filling a use-case gap (skill governance, biomedical text workflows, link-building outreach), but these are self-reported rationales pending community/maintainer validation rather than confirmed user pain points.

## 8. Backlog Watch

The three open PRs are brand new (created 2026-09-19 and 2026-09-20) and don't yet qualify as "long-unanswered," but given awesome-list repos often accumulate a backlog of unreviewed submission PRs, it's worth tracking whether:
- [#1076](https://github.com/VoltAgent/awesome-agent-skills/pull/1076), [#1075](https://github.com/VoltAgent/awesome-agent-skills/pull/1075), and [#1074](https://github.com/VoltAgent/awesome-agent-skills/pull/1074) receive maintainer triage within a normal window (no baseline established from this snapshot alone — recommend checking review latency on prior merged PRs to calibrate what "stale" looks like for this repo).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
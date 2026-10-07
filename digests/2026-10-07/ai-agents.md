# MCP Ecosystem Digest 2026-10-07

> Issues: 9 | PRs: 0 | Projects covered: 7 | Generated: 2026-10-07 14:10 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-10-07

## 1. Today's Overview
Activity on modelcontextprotocol/servers is low-to-moderate. Nine issues were updated in the last 24h (8 open, 1 closed). There were no PR updates and no new releases. The discussion is dominated by security and safety hardening of the reference servers (memory, git, filesystem). It consists of new audit-style reports plus long-running threads that were revived. The lack of PR movement means none of the raised issues has an active fix in flight, which points to a maintainer-bandwidth bottleneck rather than a lack of community input.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24h. The only closure was issue [#4721](https://github.com/modelcontextprotocol/servers/issues/4721), which reported that `sequentialthinking` tool annotations (`readOnlyHint: true`, `idempotentHint: true`) are inaccurate, since the server keeps per-session `thoughtHistory` and `branches` state. The summary doesn't say how it was resolved, and no linked PR appears in the data.

## 4. Community Hot Topics
- **[#4117](https://github.com/modelcontextprotocol/servers/issues/4117): memory: safer persistence defaults, atomic writes, quotas, redaction, destructive-operation guardrails** (22 comments, the most active). The author built a hardened local wrapper around `server-memory` and proposes upstreaming its protections. The underlying need is production-grade durability and data-safety defaults for the reference memory server.
- **[#3537](https://github.com/modelcontextprotocol/servers/issues/3537): Security Audit: Unconstrained string parameters across all official servers** (16 comments, 1 👍). An automated audit found that every server except `mcp-server-fetch` lacks string-length and pattern bounds, though all scored A or B (85–100/100). The need is consistent input validation in the tool schemas.
- **[#604](https://github.com/modelcontextprotocol/servers/issues/604): mcp-server-git ignores `--repository`, giving full disk access** (3 comments, 1 👍). This is an old issue, from February 2025, that is still drawing activity.

## 5. Bugs & Stability
Ranked by severity (the data doesn't list any linked fix PRs):
1. **[#4550](https://github.com/modelcontextprotocol/servers/issues/4550) — mcp-server-git `validate_repo_path` opt-in bypass.** It is framed as the architectural complement of CVE-2025-68145 and is a security issue. It is posted publicly even though the text says it targets a private GHSA channel.
2. **[#604](https://github.com/modelcontextprotocol/servers/issues/604) — `--repository` is ignored under uvx.** It allows access outside the intended repository, which is a path-restriction failure. It is closely related to #4550.
3. **[#5059](https://github.com/modelcontextprotocol/servers/issues/5059) — `git_create_branch` is marked `destructiveHint: false` but silently resets an existing packed branch.** The previous tip becomes unreachable, so it can lose data.
4. **[#5058](https://github.com/modelcontextprotocol/servers/issues/5058) — memory `create_entities`/`create_relations`/`add_observations` are marked non-destructive but rewrite the whole JSONL file.** Data the current schema doesn't recognize can be dropped.
5. **[#4208](https://github.com/modelcontextprotocol/servers/issues/4208) — filesystem `FS_SEARCH_EXCLUDE_PREFIXES` is purely lexical.** Symlinks may bypass the excludes. This is a design question tied to PR #4212 and issue #4162.
6. **[#4721](https://github.com/modelcontextprotocol/servers/issues/4721) — sequentialthinking annotations are inaccurate (closed).**

Together, #5058, #5059 and #4721 show a **pattern of inaccurate MCP tool annotations**. Clients that trust these hints for auto-approval could therefore be misled.

## 6. Feature Requests & Roadmap Signals
- Safer defaults for the memory server (atomic writes, quotas, redaction, destructive-operation guardrails) in [#4117](https://github.com/modelcontextprotocol/servers/issues/4117).
- Bounded string parameters (max length and patterns) across the servers in [#3537](https://github.com/modelcontextprotocol/servers/issues/3537) and [#4958](https://github.com/modelcontextprotocol/servers/issues/4958).
- Symlink-aware canonical path excludes in the filesystem server in [#4208](https://github.com/modelcontextprotocol/servers/issues/4208).

This is my judgment, not something the data states. A annotation-accuracy audit and parameter bounds look the most likely to land in a near-term release. They are cheap, mechanical changes, and several reporters are pushing on them. The memory persistence redesign in #4117 is larger and probably takes longer.

## 7. User Feedback Summary
Users are treating the reference servers as production building blocks. They want them to be safe by default: accurate hints, bounded inputs, restricted paths, and durable storage. Several reporters are running audits, scanners or hardened forks, which suggests adopters are patching around gaps locally rather than waiting upstream. Satisfaction is mixed. The audit in #3537 gave generally good scores, but the reports on annotation correctness and path restriction show trust-boundary concerns.

## 8. Backlog Watch
- [#604](https://github.com/modelcontextprotocol/servers/issues/604) has been open for about 20 months with a security-relevant path-restriction problem. It needs a maintainer decision.
- [#4550](https://github.com/modelcontextprotocol/servers/issues/4550) has been open since July. A security finding is public and should be triaged, or moved to a private advisory.
- [#3537](https://github.com/modelcontextprotocol/servers/issues/3537) has been open since March and has an actionable audit, but no linked fix.
- [#4117](https://github.com/modelcontextprotocol/servers/issues/4117) has been open since May with 22 comments and needs a maintainer position on scope.
- [#4208](https://github.com/modelcontextprotocol/servers/issues/4208) is waiting on a design decision tied to PR #4212.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison Report, 2026-10-07

## 1. Ecosystem Overview
The projects tracked here are not competing agents. They are the **infrastructure and curation layer** around MCP and agent plugins. That layer has three parts: reference implementations (MCP Servers), distribution channels (the Official Registry, Docker MCP Registry, Claude Plugins), and curated discovery lists (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills). Contributor supply is strong everywhere, with 100+ open submissions in the listing repos. Maintainer review capacity is the common constraint. Trust, safety and lifecycle hygiene are the main technical themes: tool annotations, path restrictions, data removal, stale pins and link rot.

## 2. Activity Comparison

Health scores are my own judgment, based on the digests. They are not figures reported in the data.

| Project | Issues updated | PRs updated | Release | Health (1–5) | Rationale |
|---|---|---|---|---|---|
| MCP Servers | 9 (8 open, 1 closed) | 0 | None | 2.5 | Several security reports, no fix PRs in flight |
| MCP Registry (official) | 6 (4 open, 2 closed) | 1 (closed) | None | 3.5 | Responsive and cooperative, but a privacy leak (#1693) is open |
| Awesome MCP Servers | 0 | 109 (98 open, 11 closed or merged) | None | 3 | Very high inflow, limited merge throughput |
| Docker MCP Registry | 1 | 50 (all open) | None | 2.5 | 0 merged, PRs from June and July still open |
| Claude Plugins (official) | 11 | 5 (4 closed, 1 open) | None | 3 | Maintenance-heavy, nightly bump workflow disabled |
| Awesome Claude Code | 15 (11 open, 4 closed) | 3 (closed) | None | 4 | Working automated submission pipeline, minor link rot |
| Awesome Agent Skills | 1 (closed) | 17 (6 open, 11 closed) | None | 3.5 | Triage sweep done, but no closing rationale shown |

No project shipped a release. Several digests also don't say whether closed PRs were merged or rejected, so throughput is partly unknown.

## 3. MCP Servers's Position

**Advantages**
- It is the **canonical reference implementation**. Its tool schemas, annotations and defaults shape what downstream servers copy.
- It has the deepest technical discussion: 22 comments on #4117 and 16 on #3537. By comparison, the registries and lists mostly see 0–5 comments.
- It has an external audit on record. #3537 scored the official servers 85–100/100, with `mcp-server-fetch` the only server that already bounds its string parameters.

**Technical approach differences**
- It is the only project in the set that **executes code on the user's machine** (filesystem, git, memory). That makes its risk profile different. The registries and lists handle metadata and links, so their failures are privacy leaks or dead links. Here a failure can mean data loss or path escape.
- Its open issues are correctness and trust-boundary defects: #4550 and #604 (git path restriction), #5058 and #5059 (inaccurate `destructiveHint`), #4208 (symlink bypass of excludes).

**Community size**
- It is **smaller by volume** than the listing repos (9 issues and 0 PRs, against 109 and 50 PRs). Its contributors are fewer but more specialized, mostly auditors and security reporters.
- **Weakness:** with 0 PR updates, no reported issue has a fix in flight. The community is raising problems faster than maintainers are resolving them. #604 has been open about 20 months.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| **Trust and safety of agent tool execution** | MCP Servers, Awesome MCP Servers, Awesome Claude Code | Annotation accuracy (#5058, #5059, #4721), bounded inputs (#3537), path restriction (#604, #4550). Submissions include keystash, AW-1 Circuit Breaker, Prismor and Aevral. |
| **Lifecycle and data hygiene** | MCP Registry, Docker MCP Registry, Awesome Claude Code, Claude Plugins | Hard delete (#1693, #1689), stale `source.project` links (Docker #5506: 32 of 249 entries), broken author links (#3104), stale plugin pins (#6331, #6365). |
| **Rename and ownership handling** | MCP Registry, Awesome Claude Code | GitHub org renames break ownership (#1688, #1689) and author links (#3104). Ownership recovery is also requested (#1671). |
| **Memory and context persistence** | MCP Servers, Awesome MCP Servers, Awesome Claude Code | Safer memory defaults (#4117), compound-memory, OntoPrune (claims 60% token reduction), vir. |
| **Multi-session and multi-agent orchestration** | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | codex-supervisor-mcp, Woodlot, snapback, Styx, maddog. |
| **Cross-host compatibility** | Claude Plugins, Awesome Agent Skills, Awesome Claude Code | Codex and native Windows hook failures (#6371, #3173). Open PRs target Antigravity, Kiro, Codex and Grok. Styx runs Claude Code alongside Codex and Gemini CLI. |
| **Remote and hosted servers** | Docker MCP Registry, Awesome MCP Servers, Awesome Agent Skills | Seven remote-server PRs at Docker. Auth varies: bearer, OAuth, none. x402 paid access appears in two places. |
| **Automation of curation** | All listing repos | Automated validation (Awesome Claude Code), `missing-glama` labels, and the disabled SHA-bump workflow all point to automation as the way to scale review. |

## 5. Differentiation Analysis

| Project | Role | Target users | Architecture and process |
|---|---|---|---|
| MCP Servers | Reference code | Server authors, integrators | Source code, with security issues handled publicly |
| MCP Registry | Canonical metadata registry | Publishers, clients | Namespace-verified entries (GitHub, DNS, HTTP) with soft delete |
| Docker MCP Registry | Containerized catalog | Docker users, vendors | PR per server, `source.project` pinned to a repo, remote servers supported |
| Claude Plugins | First-party plugin marketplace | Claude Code users, plugin authors | SHA-pinned plugins, manual bumps |
| Awesome MCP Servers | Broad MCP list | Everyone | Manual PR review, Glama listing check, README categories |
| Awesome Claude Code | Claude Code resource list | Claude Code users | Issue form, bot validation, bot-authored PR |
| Awesome Agent Skills | Skills list | Multi-agent skill users | PR-based, `author/skill-name` format |

The main architectural contrasts are in **verification**. The Official Registry verifies namespace ownership. Docker pins to a source repo. Claude Plugins pins to a SHA. The lists rely mostly on author declarations plus light automated checks.

## 6. Community Momentum & Maturity

**Tier 1: high inflow, review-bound**
- Awesome MCP Servers (109 PRs) and Docker MCP Registry (50 PRs). Both are growing quickly, but Docker merged nothing today and has PRs aging past 3 months.

**Tier 2: active and processing**
- Awesome Claude Code (automated pipeline), Awesome Agent Skills (a triage sweep closed 11 PRs) and Claude Plugins (4 PRs closed, but with a systemic bottleneck from the disabled bump workflow).

**Tier 3: low volume, maintainers responsive**
- MCP Registry. Items are new, and the issues that closed were handled quickly.

**Tier 4: stalled or at risk**
- MCP Servers. Only 9 issues moved, no PR moved, and the oldest security item has been open about 20 months.

**Stage:** the listing repos are in a **rapid-growth** phase. The registries are **stabilizing** into lifecycle and governance work: deletion, renames and validation. The reference servers are in a **hardening** phase with limited capacity.

## 7. Trend Signals

1. **Security shifts from feature work to defaults.** Audits, scanners and hardened forks are showing up as community work (#3537, #4117). Adopters are patching locally instead of waiting upstream.
2. **Tool annotations are becoming a trust surface.** Wrong `destructiveHint` and `readOnlyHint` values (#5058, #5059, #4721) can mislead clients that auto-approve. *For developers:* treat annotations as unverified claims, and don't base auto-approval on them alone.
3. **Metadata hygiene is the next problem for registries.** Soft delete is not enough when private URLs leak (#1693). Stale links affect about 13% of the Docker catalog. Renames break ownership.
4. **Distribution is moving to remote and paid endpoints.** Streamable HTTP, OAuth and x402 are all appearing in submissions. *For developers:* design for auth variety and for hosted deployment.
5. **The ecosystem is going multi-agent and cross-host.** Plugins and skills target Codex, Gemini CLI, Kiro and Grok as well as Claude Code. Hooks that assume a Claude, Bash and Python environment fail elsewhere.
6. **Agent-assisted submissions are growing.** 🤖 markers and bot-created PRs are common, which raises review load. The fix is automated pre-validation, not more manual review.
7. **Maintainer bandwidth is the main constraint.** The common pattern is high contributor input against low merge output. *For decision-makers:* when you choose a registry or list, check how fast maintainers respond and how well the project supports lifecycle operations. Check these along with how many entries it has.

**Caveats:** comment counts are missing for Awesome MCP Servers and Docker MCP Registry. Several digests don't say whether PRs were merged or rejected. Health scores are my own judgment and should be treated as directional.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest — 2026-10-07

## 1. Today's Overview
Activity is light but steady: 6 issues and 1 PR were updated in the last 24 hours, with no new releases. Two issues were closed (#1671, #1691), and the one PR (#1690, a UI fix) was closed. The four still-open issues are all registry-data and namespace housekeeping: a hard-delete request, an orphaned-entry cleanup, a deletion blocked by a case mismatch, and a data-quality report. Nothing today points to a platform-wide outage, but several issues show that self-service lifecycle tooling has gaps.

## 2. Releases
No new releases.

## 3. Project Progress
- **[PR #1690](https://github.com/modelcontextprotocol/registry/pull/1690) — fix(ui): collapse recently updated and hide it during search** (closed, by rdimitrov). It follows up on #1686 and refs #1685.
  - The earlier change put the search field above **Recently Updated**. That section can still hold up to 96 cards, so search results and later pages sat far down the page.
  - The fix shows only the first 6 recently updated servers, with a "Show all N / Show less" toggle, and hides the section during search.
  - The summary doesn't say whether it was merged or closed unmerged.
- Two issues were resolved: [#1671](https://github.com/modelcontextprotocol/registry/issues/1671) (ownership recovery) and [#1691](https://github.com/modelcontextprotocol/registry/issues/1691) (DNS NXDOMAIN).

## 4. Community Hot Topics
Engagement is low, and no issue has any 👍.
- **[#1671](https://github.com/modelcontextprotocol/registry/issues/1671)** (5 comments, closed): Ownership recovery for `com.agenttrafficlab/atl`. A publisher lost publish access to an existing entry. The need is a documented recovery path when credentials or keys are lost.
- **[#1691](https://github.com/modelcontextprotocol/registry/issues/1691)** (1 comment, closed): `login dns` and `login http` fail because the registry's cluster resolver returns NXDOMAIN for `daboons.net`. The issue text spells the domain as both "daboons.net" and "dabloons"; it may be a typo. The need is reliable DNS-based namespace verification when republishing under a verified namespace.
- **[#1692](https://github.com/modelcontextprotocol/registry/issues/1692)** (0 comments): A third-party analysis of 3 registry records that can't resolve for any client. It also cautions that single-pass "dead server" counts are unreliable. The need is better validation and health signals.

## 5. Bugs & Stability
Ranked by severity:
1. **Privacy leak: [#1693](https://github.com/modelcontextprotocol/registry/issues/1693)** (open). A published version of `com.mocoapp.api/mcp` 1.0.0 exposed a private repository URL (`everii-Group/mocoapp`). The version is already marked deleted or flagged, but the field is still visible. The reporter asks for a hard removal. There is no fix PR and no maintainer response yet.
2. **Resolver failure: [#1691](https://github.com/modelcontextprotocol/registry/issues/1691)** (closed). The cluster resolver returned NXDOMAIN for a valid domain, which blocked DNS and HTTP auth. The issue is closed, but the root cause isn't stated.
3. **Unresolvable records: [#1692](https://github.com/modelcontextprotocol/registry/issues/1692)** (open). Three records can never resolve. There is no fix PR.
4. **Self-service blocked by a case mismatch: [#1689](https://github.com/modelcontextprotocol/registry/issues/1689)** (open). The GitHub org was renamed to `PERSONAIZER`, but the entry is `io.github.PersonAIzer/mcp`, so the owner can't delete it themselves.

## 6. Feature Requests & Roadmap Signals
- **Hard delete / purge of published versions** ([#1693](https://github.com/modelcontextprotocol/registry/issues/1693), [#1689](https://github.com/modelcontextprotocol/registry/issues/1689)). Soft deletion doesn't remove leaked data, and self-service deletion fails in edge cases.
- **Handling GitHub username or org renames** ([#1688](https://github.com/modelcontextprotocol/registry/issues/1688), [#1689](https://github.com/modelcontextprotocol/registry/issues/1689)). Both are orphaned `io.github.*` entries. Case-insensitive namespace matching and a rename or transfer workflow would address them.
- **Ownership recovery** ([#1671](https://github.com/modelcontextprotocol/registry/issues/1671)).
- **Registry health and validation** ([#1692](https://github.com/modelcontextprotocol/registry/issues/1692)).

My prediction is that rename-aware ownership, along with case-insensitive matching, is the most likely area for a fix. That's an inference. No maintainer has committed to anything. UI refinements like #1690 will probably continue.

## 7. User Feedback Summary
- **Pain points:** Publishers can't clean up entries after renames, shutdowns, or accidental publishes without maintainer intervention.
- **Privacy concern:** Accidentally published metadata, such as private repo URLs, persists even after a version is marked deleted.
- **Auth friction:** DNS and HTTP verification depends on the registry's own resolver behaving correctly.
- **Use cases:** The issues come from commercial vendors and individual maintainers publishing remote MCP servers, and from a third party auditing registry quality.
- **Satisfaction:** The tone is cooperative, and nothing is hostile. The requests do show a heavy reliance on manual support.

## 8. Backlog Watch
All open items are new (created 2026-10-06 or 2026-10-07) and have 0 comments, so none is a long-standing backlog item yet. They still need maintainer attention:
- **[#1693](https://github.com/modelcontextprotocol/registry/issues/1693)** is the most urgent, because a private repo URL is publicly exposed.
- **[#1689](https://github.com/modelcontextprotocol/registry/issues/1689)** and **[#1688](https://github.com/modelcontextprotocol/registry/issues/1688)** are both manual cleanups caused by renames. They are a good prompt to fix the underlying tooling gap instead of handling each case by hand.
- **[#1692](https://github.com/modelcontextprotocol/registry/issues/1692)** is a data-quality report that may deserve triage into a tracked validation effort.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-07

## 1. Today's Overview
The repository is a high-volume submission queue. It had no issue activity and no releases in the last 24h, but 109 PRs were updated: 98 open and 11 merged or closed. Almost all of them add a new MCP server entry to the README. Activity is steady and driven by contributors. The data shows only one closure, so maintainer throughput may be the bottleneck. The comment counts for the top 20 PRs are all reported as `undefined`, so ranking by discussion is not possible from this data.

## 2. Releases
None. The project is a curated list and has no versioned releases.

## 3. Project Progress
The data lists 11 merged or closed PRs but gives details for only one in the top 20:
- [#15324](https://github.com/punkpeye/awesome-mcp-servers/pull/15324) **[CLOSED]** adds `kxlion/mcp-relay` to Aggregators. It is an MIT-licensed relay that exposes local stdio and HTTP MCP servers to cloud agents through one authenticated Streamable HTTP endpoint. It was created 2026-09-29 and is marked closed. The data doesn't say whether it was merged or rejected.

No other closures or merges are identifiable, so I can't say how many of the 11 were actual merges.

## 4. Community Hot Topics
Comment and reaction data is unavailable. Every PR shows `Comments: undefined` and 👍 0. The submissions below are grouped by theme, which shows where contributors are focused.

- **Security and secrets for agents:**
  - [#15917](https://github.com/punkpeye/awesome-mcp-servers/pull/15917) keystash, an encrypted local vault that injects secrets into subprocesses.
  - [#15914](https://github.com/punkpeye/awesome-mcp-servers/pull/15914) AW-1 Circuit Breaker, which does deterministic AST inspection of tool calls before dispatch.
  - Underlying need: safe, non-LLM guardrails for agent tool execution.
- **Memory and context efficiency:**
  - [#15888](https://github.com/punkpeye/awesome-mcp-servers/pull/15888) compound-memory.
  - [#15911](https://github.com/punkpeye/awesome-mcp-servers/pull/15911) OntoPrune, which claims 60% token reduction.
  - Underlying need: shared memory across agents and lower token cost.
- **Multi-agent orchestration and aggregation:**
  - [#15912](https://github.com/punkpeye/awesome-mcp-servers/pull/15912) codex-supervisor-mcp, which supervises parallel Codex workers.
  - [#13442](https://github.com/punkpeye/awesome-mcp-servers/pull/13442) LoopSkill, a federated skill registry.
  - [#15324](https://github.com/punkpeye/awesome-mcp-servers/pull/15324) MCP Relay.
  - [#13190](https://github.com/punkpeye/awesome-mcp-servers/pull/13190) Agent Data Pro, paid via x402.
  - Underlying need: fleet control and discovery across agents.
- **Vertical domains:**
  - [#15672](https://github.com/punkpeye/awesome-mcp-servers/pull/15672) Chinese law.
  - [#15915](https://github.com/punkpeye/awesome-mcp-servers/pull/15915) renewable energy sizing.
  - [#15331](https://github.com/punkpeye/awesome-mcp-servers/pull/15331) invoicing.
  - [#15752](https://github.com/punkpeye/awesome-mcp-servers/pull/15752) remote jobs.
  - [#15495](https://github.com/punkpeye/awesome-mcp-servers/pull/15495) Missive.
  - [#15897](https://github.com/punkpeye/awesome-mcp-servers/pull/15897) Apple Calendar via EventKit.
  - [#15898](https://github.com/punkpeye/awesome-mcp-servers/pull/15898) image and music generation.
  - [#15913](https://github.com/punkpeye/awesome-mcp-servers/pull/15913) Mazapan OS automation.
  - [#15916](https://github.com/punkpeye/awesome-mcp-servers/pull/15916) Plunger.
  - [#14521](https://github.com/punkpeye/awesome-mcp-servers/pull/14521) Tomosu.
  - [#12059](https://github.com/punkpeye/awesome-mcp-servers/pull/12059) Costory FinOps.
- Several PRs carry 🤖🤖🤖 markers. These look like agent-assisted submissions (#15917, #15888, #15672, #15752, #15898, #12059).

## 5. Bugs & Stability
No issues or bugs were reported. The only quality signals are PR labels from automated checks:
- [#15910](https://github.com/punkpeye/awesome-mcp-servers/pull/15910) AmyGraphics suite is labeled `missing-glama`, `missing-emoji` and `invalid-name`. It fails the formatting conventions and is a bulk submission of 12 servers in one PR.
- Several PRs lack a Glama listing (`missing-glama`): #15897, #15915, #14521, #15912, #12059, #13442, #13190.

## 6. Feature Requests & Roadmap Signals
There are no issues, so there are no explicit requests. The submissions point to these trends:
- Security tooling for agents.
- Agent memory.
- Orchestration and skill registries.
- Hosted or remote MCP endpoints, including paid and x402-based access.
- Vertical and enterprise integrations.

Categories likely to keep growing are Security, Knowledge & Memory, Aggregators, Coding Agents and Workplace & Productivity. Some contributors disclose affiliation (#12059, #15898), which suggests a disclosure norm is in place.

## 7. User Feedback Summary
The data has no direct user feedback. The submissions suggest these needs:
- Local-first, privacy-preserving servers (stdio, encrypted vaults, local legal data).
- Tools that cut token use.
- Scoped permissions for agents, as in EK Bridge's per-client grants.
- Cross-agent interoperability.

## 8. Backlog Watch
Several PRs have waited weeks without a decision. Each shows `Updated: 2026-10-07` with 0 reactions, so they need maintainer attention:
- [#12059](https://github.com/punkpeye/awesome-mcp-servers/pull/12059) Costory FinOps, open since 2026-08-13 (about 8 weeks).
- [#13190](https://github.com/punkpeye/awesome-mcp-servers/pull/13190) Agent Data Pro, open since 2026-08-30.
- [#13442](https://github.com/punkpeye/awesome-mcp-servers/pull/13442) LoopSkill, open since 2026-09-02.
- [#14521](https://github.com/punkpeye/awesome-mcp-servers/pull/14521) Tomosu, open since 2026-09-16.
- [#15331](https://github.com/punkpeye/awesome-mcp-servers/pull/15331) Invompt, open since 2026-09-29.
- [#15495](https://github.com/punkpeye/awesome-mcp-servers/pull/15495) Missive, open since 2026-10-01.

**Health assessment:** Contributor interest is strong, with about 100 open PRs. Review and merge capacity looks limited, and the missing-Glama and formatting failures suggest contributors would benefit from clearer automated feedback.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-07

## 1. Today's Overview
The registry saw heavy submission traffic and no maintainer output today. 50 PRs were updated, all of them open, and none were merged or closed. There were no releases and one new issue. The activity is almost entirely inbound "Add X MCP server" requests. Several are batch submissions from a single author. A few automated pin-update PRs were also touched. The review and merge side looks like a bottleneck: PRs from June and July are still open.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed in the last 24h, so no features or fixes advanced. Only 20 of the 50 updated PRs were listed. The rest were not provided and are not analyzed here.

## 4. Community Hot Topics
Comment counts are not available in the data (shown as "undefined"). No item can be ranked by comments or reactions, and every item shows 0 👍. The most notable threads are the following.

- **Issue [#5506](https://github.com/docker/mcp-registry/issues/5506): 32 servers point to GitHub projects that moved, were archived or are gone.** The author checked 249 entries linking to 198 repositories on 2026-10-07. The issue points to catalog hygiene debt: about 13% of entries have stale `source.project` links. Users likely want automated link or archive checks in CI.
- **Batch submissions by `mambabuilt`:** [#5499](https://github.com/docker/mcp-registry/pull/5499) through [#5505](https://github.com/docker/mcp-registry/pull/5505) add 7 influencer and creator-data servers (change monitor, finder, lead list builder, profile reader, expert witness directory, link-in-bio checker, talent agency lookup). All are from the `mambalabsdev` org. This suggests a vendor pushing a suite of commercial scraping tools. It may call for a policy on bulk submissions.
- **Remote MCP servers** are a clear trend. These are [#5512 RelayDesk](https://github.com/docker/mcp-registry/pull/5512), [#5511 Monitly](https://github.com/docker/mcp-registry/pull/5511), [#5510 Compabase](https://github.com/docker/mcp-registry/pull/5510), [#5509 Picked by Agents](https://github.com/docker/mcp-registry/pull/5509), [#5508 ScrapingBee](https://github.com/docker/mcp-registry/pull/5508), [#5498 UK Legislation Changes](https://github.com/docker/mcp-registry/pull/5498) and [#5496 Mimetic](https://github.com/docker/mcp-registry/pull/5496). Most use streamable-http. Auth varies: bearer keys, OAuth, or none.
- **Government and open-data servers** include [#5497 sejm-mcp](https://github.com/docker/mcp-registry/pull/5497) (Polish parliament, 29 read-only tools) and [#5507 EuroScrape](https://github.com/docker/mcp-registry/pull/5507) (20 European data tools).

## 5. Bugs & Stability
No crashes or regressions were reported. The only quality-related item is [#5506](https://github.com/docker/mcp-registry/issues/5506), a data-integrity problem. Its severity is moderate. Users could be pointed at archived or moved repositories, which raises supply-chain and trust concerns. No fix PR is linked.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Implied signals:
- Automated validation of `source.project` links, such as scheduled link, archive and redirect checks. This follows from #5506. It is a plausible near-term maintenance item.
- Stronger support for remote servers, covering auth patterns (bearer, OAuth, none) and dynamic tool files.
- Bulk submission handling or templates, given the 7-PR batch.

## 7. User Feedback Summary
The data has no direct user feedback, because no comments are available. Contributors want a low-friction path to get hosted or remote MCP servers into Docker's catalog. Their verticals are commercial data, scraping, legal and government data, and analytics. The #5506 reporter wants stale entries cleaned up.

## 8. Backlog Watch
These need maintainer attention:
- [#3929 FiatDock remote MCP server](https://github.com/docker/mcp-registry/pull/3929) was created 2026-06-11 and is open about 4 months. It was updated today, so the author may be chasing a review.
- [#4363 firecrawl pin update](https://github.com/docker/mcp-registry/pull/4363), [#4369 testkube](https://github.com/docker/mcp-registry/pull/4369) and [#4383 teamwork](https://github.com/docker/mcp-registry/pull/4383) are bot pin updates from July (created 07-09 to 07-10). They have been open about 3 months. They look stuck, which means pins may be stale or the bot is generating duplicates.
- [#5506](https://github.com/docker/mcp-registry/issues/5506) has no comments or triage yet. 32 entries need a decision on whether to update or remove them.

**Health assessment:** Contributor interest is high, but throughput is low. 0 of 50 updated PRs were merged, and old PRs are aging. A review-capacity or automation problem is likely.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-10-07

## 1. Today's Overview
Activity was moderate: 11 issues and 5 PRs were updated in 24 hours, with no new releases. Four PRs were closed, and only one remains open. Most are SHA-bump PRs, because the nightly bump workflow is disabled and bumps are now manual. Three of the new issues (#6331, #6365, #6372) point to stale third-party plugin pins. The rest are small defect reports against bundled plugins, mostly security-guidance, hookify and ralph-loop. Overall health is stable but maintenance-heavy, and the manual bump process is becoming a bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
All four closed PRs are marketplace maintenance or fixes:
- [#6373](https://github.com/anthropics/claude-plugins-official/pull/6373) (closed): `figma` bump from 17292073 to f0493295 (v2.2.127). It was requested via Slack and replaces the 9/22 manual-batch pin (v2.2.120).
- [#6366](https://github.com/anthropics/claude-plugins-official/pull/6366) (closed): `salesforce-development` manual bump to v2.3.0, built from release 1.59.0 of forcedotcom/sf-skills. The PR says only the `sha` line changes.
- [#6364](https://github.com/anthropics/claude-plugins-official/pull/6364) (closed): both qodo plugins pinned to the v2.0.13 release commit. The author reviewed the diff (skill prompts and version stamps only) and `claude plugin validate` passes.
- [#6367](https://github.com/anthropics/claude-plugins-official/pull/6367) (closed): `fix(hooks)` adds native Windows support (`commandWindows` overrides using `python -X utf8`) to Hookify and Security Guidance, and fixes the Codex Stop output. It was closed rather than merged, as far as the data shows, and it targets the same problem as issues #6371 and #3173.

The summaries don't say which closed PRs were merged and which were simply closed.

## 4. Community Hot Topics
- [#232 Add Vue/Volar LSP plugin](https://github.com/anthropics/claude-plugins-official/issues/232): the most engaged item, with 19 comments and 38 👍. It was opened in January and is still active. The need is first-party LSP coverage for Vue 3 (go-to-definition, hover and completion in `.vue` files).
- [#3173 security-guidance hooks incompatible with Codex CLI](https://github.com/anthropics/claude-plugins-official/issues/3173): 4 comments. Users want the plugins to work across hosts, not only in Claude Code.
- [#1836 pyright-lsp workspaceFolder](https://github.com/anthropics/claude-plugins-official/issues/1836): 3 comments. It proposes a one-line config fix, `"workspaceFolder": "${CLAUDE_PROJECT_DIR}"`, for worktree and monorepo confusion.
- [#6331 remember pin stale](https://github.com/anthropics/claude-plugins-official/issues/6331) (2 comments) and [#6365 Superpowers out of date](https://github.com/anthropics/claude-plugins-official/issues/6365): plugin authors, including the Superpowers maintainer, are asking for updates because automatic bumping is off.

## 5. Bugs & Stability
Ranked by severity:
1. **Hook failures on Codex and Windows.** [#6371](https://github.com/anthropics/claude-plugins-official/issues/6371) reports Security Guidance 2.0.9 on Codex 0.160.1 returning "invalid stop hook JSON". [#3173](https://github.com/anthropics/claude-plugins-official/issues/3173) reports the Claude-specific `hooks.json` being loaded by Codex. The fix PR [#6367](https://github.com/anthropics/claude-plugins-official/pull/6367) was closed, so the fix status is unclear.
2. **Stale pins carrying known regressions.** [#6365](https://github.com/anthropics/claude-plugins-official/issues/6365): Superpowers is behind its 6.4.2 release, which fixes what its maintainer calls "pretty serious regressions". [#6331](https://github.com/anthropics/claude-plugins-official/issues/6331): `remember` is stuck at v0.33.0 and should be at v0.36.0.
3. **Interpreter discovery.** [#4907](https://github.com/anthropics/claude-plugins-official/issues/4907): `sg-python.sh` stops at python3.13, so python3.14+ is never found in Pass 1, which contradicts the script's own comment.
4. **LSP scoping.** [#1836](https://github.com/anthropics/claude-plugins-official/issues/1836): the missing `workspaceFolder` causes cross-worktree confusion.
5. **Plugin definition and doc bugs:**
   - [#6368](https://github.com/anthropics/claude-plugins-official/issues/6368): `/hookify` launches `general-purpose` instead of its own `conversation-analyzer` agent.
   - [#6369](https://github.com/anthropics/claude-plugins-official/issues/6369): two skills use the subagent key `tools:` instead of `allowed-tools:`.
   - [#6370](https://github.com/anthropics/claude-plugins-official/issues/6370): ralph-loop's help text names the state file `.claude/.ralph-loop.local.md`, but the code uses `.claude/ralph-loop.local.md`.

None of these has a confirmed fix PR yet.

## 6. Feature Requests & Roadmap Signals
- **Vue/Volar LSP** ([#232](https://github.com/anthropics/claude-plugins-official/issues/232)): the strongest demand signal at 38 👍. It has been open for nine months, so a near-term release is uncertain.
- **Directory inclusion for ThinWind­ow** ([#6372](https://github.com/anthropics/claude-plugins-official/issues/6372)): a third-party listing request, published as v0.4.0 in the plugin directory.
- **Unleash plugin** ([PR #5160](https://github.com/anthropics/claude-plugins-official/pull/5160)): open since August, and the most likely new addition.
- **Other likely near-term changes:** `workspaceFolder` handling for LSP plugins, Windows and Codex hook compatibility, and a renewed process for bumping SHAs.

## 7. User Feedback Summary
- Users run these plugins in more than Claude Code (Codex, native Windows), and the hooks assume a Claude/Bash/Python3 environment.
- Third-party authors are frustrated that the disabled bump workflow leaves their fixes unpublished. Two reports tie the staleness to the workflow being `disabled_manually` since mid-September.
- Other reports come from careful readers who cite exact file and line numbers, and they mostly concern consistency between docs, frontmatter and code.
- LSP users want per-session scoping and more language support.

## 8. Backlog Watch
- [#232](https://github.com/anthropics/claude-plugins-official/issues/232) (Vue LSP) has been open since January 2026 with 38 👍 and no resolution shown.
- [#3173](https://github.com/anthropics/claude-plugins-official/issues/3173) (Codex hook incompatibility, June) and [#4907](https://github.com/anthropics/claude-plugins-official/issues/4907) (python3.14, August) are stale and affect the same plugin.
- [#1836](https://github.com/anthropics/claude-plugins-official/issues/1836) (May) is a small config change with a clear root cause and needs a maintainer decision.
- [PR #5160](https://github.com/anthropics/claude-plugins-official/pull/5160) (Unleash plugin, open since August 11) needs review.
- The disabled bump workflow, or an announced replacement process, is the systemic item. It drives #6331 and #6365, and probably more reports to come.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-10-07

## 1. Today's Overview
Awesome Claude Code is a curated list, so activity here means resource submissions, not code changes. Over the last 24 hours, 15 issues were updated (11 open, 4 closed) and 3 PRs (all closed). Almost all traffic is the automated submission pipeline: users file `[Resource]` issues, validation labels them, and a bot opens an "Add resource" PR. There were no releases. Activity is moderate-to-high for a curated list: 8 new submissions arrived on 10-06 and 10-07, and none was merged today.

## 2. Releases
None.

## 3. Project Progress
Three bot-authored PRs were closed. No merge status is given in the data, so I can't say whether any were merged:
- [PR #3107](https://github.com/hesreallyhim/awesome-claude-code/pull/3107): Scientific Writing Skills (Writing & Prose Quality). The linked issue [#3093](https://github.com/hesreallyhim/awesome-claude-code/issues/3093) is closed and labeled `approved, pr-created`, so this submission is likely complete.
- [PR #3097](https://github.com/hesreallyhim/awesome-claude-code/pull/3097) and [PR #3036](https://github.com/hesreallyhim/awesome-claude-code/pull/3036): both for pwa2play (Infrastructure & DevOps). Two PRs for one resource suggests the first was superseded or regenerated. [Issue #3014](https://github.com/hesreallyhim/awesome-claude-code/issues/3014) is closed with `approved, pr-created`.

Other closed issues:
- [#3096](https://github.com/hesreallyhim/awesome-claude-code/issues/3096) Claude Monitor: closed with only `validation-passed`. It has no `approved` label, so the reason for closing is unclear.
- [#2787](https://github.com/hesreallyhim/awesome-claude-code/issues/2787) agentrust-claude-code: closed after about 4 weeks.

## 4. Community Hot Topics
Engagement is low. No item has any 👍 and the maximum is 5 comments. Most comments appear to come from the validation bot.
- [#3014 pwa2play](https://github.com/hesreallyhim/awesome-claude-code/issues/3014) (5 comments): the most discussed item. The duplicate PRs suggest a pipeline hiccup.
- [#3093 Scientific Writing Skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3093) (3 comments): approved and PR'd within a day.

The pending submissions show where the ecosystem is moving:
- **Multi-session and worktree management clients:** [Woodlot #3106](https://github.com/hesreallyhim/awesome-claude-code/issues/3106), [snapback #3095](https://github.com/hesreallyhim/awesome-claude-code/issues/3095), and [Styx #3103](https://github.com/hesreallyhim/awesome-claude-code/issues/3103) (runs Claude Code alongside Codex, Gemini CLI and others).
- **Orchestration and model routing:** [maddog #3101](https://github.com/hesreallyhim/awesome-claude-code/issues/3101).
- **Security and runtime policy:** [Prismor #3100](https://github.com/hesreallyhim/awesome-claude-code/issues/3100) and [Aevral #3094](https://github.com/hesreallyhim/awesome-claude-code/issues/3094).
- **Memory:** [vir #3099](https://github.com/hesreallyhim/awesome-claude-code/issues/3099).
- **Vertical plugins:** [oh-my-patent #3105](https://github.com/hesreallyhim/awesome-claude-code/issues/3105).

## 5. Bugs & Stability
No product bugs were reported, but there are some list-quality and pipeline problems:
1. [#3092 Cooklang skills](https://github.com/hesreallyhim/awesome-claude-code/issues/3092) is the only submission with `validation-failed`. The submitter needs to fix it. The failure reason is not in the data.
2. [#3104 Broken author links](https://github.com/hesreallyhim/awesome-claude-code/issues/3104): two entries link to renamed GitHub accounts that now return 404. One example is learn-faster-kit, whose author moved from `cheukyin175` to `hluaguo`. No fix PR exists yet.
3. Duplicate PRs for pwa2play ([#3036](https://github.com/hesreallyhim/awesome-claude-code/pull/3036) and [#3097](https://github.com/hesreallyhim/awesome-claude-code/pull/3097)) suggest the automation can regenerate PRs unnecessarily.
4. [#3096](https://github.com/hesreallyhim/awesome-claude-code/issues/3096) was closed without the `approved` label.

## 6. Feature Requests & Roadmap Signals
There are no feature requests for the list's tooling. Two items are about structure:
- [#3102 Skilloop](https://github.com/hesreallyhim/awesome-claude-code/issues/3102) is a submission for a skills directory covering Claude Code, Cursor and Codex. It uses a free-form format instead of the resource template, so it will probably need to be redone with the template before the pipeline accepts it.
- Several submissions (Styx, Skilloop, Woodlot) are cross-agent or non-CLI tools. This hints at pressure to broaden the list's scope or categories, such as "Alternative Clients" and "Multi-Purpose". That is my inference and is not stated in any issue.

The validated submissions are likely to be the next additions: Woodlot, oh-my-patent, Styx, maddog, Prismor, vir, snapback and Aevral.

## 7. User Feedback Summary
- Contributors mostly show up to promote their own tools. Few comments express opinions.
- The pipeline draws no complaints. Validation seems to run quickly, since each issue has a bot comment within hours.
- The one external quality-control report ([#3104](https://github.com/hesreallyhim/awesome-claude-code/issues/3104)) shows that readers use the list and notice stale links.
- Demand centers on running parallel sessions, cost and usage monitoring ([Claude Monitor #3096](https://github.com/hesreallyhim/awesome-claude-code/issues/3096)), safety guardrails, and context persistence.

## 8. Backlog Watch
- [#2787 agentrust-claude-code](https://github.com/hesreallyhim/awesome-claude-code/issues/2787) was opened 2026-09-09 and closed 2026-10-06 after about 4 weeks. It is the oldest item in the data and had no comments.
- The data shows only items updated in the last 24h, so I can't judge the wider backlog.
- Items that need a maintainer decision:
  - 8 validated submissions are waiting for approval and PR creation (#3094, #3095, #3099, #3100, #3101, #3103, #3105, #3106).
  - [#3092](https://github.com/hesreallyhim/awesome-claude-code/issues/3092) is waiting on a fix from the submitter.
  - [#3102](https://github.com/hesreallyhim/awesome-claude-code/issues/3102) needs triage because it is off-template.
  - [#3104](https://github.com/hesreallyhim/awesome-claude-code/issues/3104) needs a quick fix to the author links.
  - [#3096](https://github.com/hesreallyhim/awesome-claude-code/issues/3096) should be checked to see why it was closed.

**Health assessment:** The project is healthy. Submissions are steady and automated validation works. The main risks are a manual-approval bottleneck, link rot, and occasional bot duplication.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-07

## 1. Today's Overview
Awesome Agent Skills had moderate, PR-driven activity in the last 24h. There were 17 PR updates (6 open, 11 closed) and 1 issue (closed). No releases shipped. The maintainers appear to have run a triage sweep. Most closed PRs were `[PR-in-review]` items from 2026-09-23 to 2026-09-28, and they closed on 10-06 or 10-07. At the same time, new submissions kept arriving, including three opened on 10-07 or 10-06. The data does not show which of today's closures were merges and which were rejections.

## 2. Releases
None. No new releases in this window.

## 3. Project Progress
The data doesn't say whether the 11 closed PRs were merged or declined. Their summaries show a mix of categories.

**Closed 2026-10-06 (batch of `[PR-in-review]` items):**
- [#1114](https://github.com/VoltAgent/awesome-agent-skills/pull/1114) unbrowse-ai/unbrowse (Development and Testing)
- [#1112](https://github.com/VoltAgent/awesome-agent-skills/pull/1112) Upload-Post/upload-post-skill (Marketing)
- [#1113](https://github.com/VoltAgent/awesome-agent-skills/pull/1113) Second Take, a second-opinion QA skill for chain-of-thought
- [#1111](https://github.com/VoltAgent/awesome-agent-skills/pull/1111) Duaer/duaer-clarify, which would add a new "Skills by Duaer" vendor section
- [#1106](https://github.com/VoltAgent/awesome-agent-skills/pull/1106) Cyberpradeep/agent-eval-tracer and isolate-verify-integrate
- [#1109](https://github.com/VoltAgent/awesome-agent-skills/pull/1109) Aident-AI/aident-skill, which would add a "Skills by Aident" section
- [#1096](https://github.com/VoltAgent/awesome-agent-skills/pull/1096) archcore-ai/archcore (spec-driven development)

**Closed 2026-10-07:**
- [#1129](https://github.com/VoltAgent/awesome-agent-skills/pull/1129) kulchankas/paranoid, a localhost pentest skill
- [#1143](https://github.com/VoltAgent/awesome-agent-skills/pull/1143) gal-a/qikly, which generates tests from acceptance criteria
- [#1148](https://github.com/VoltAgent/awesome-agent-skills/pull/1148) brianbooms/brianbooms-data-apis (x402 pay-per-call APIs)
- [#1116](https://github.com/VoltAgent/awesome-agent-skills/pull/1116) vanshyadav1408/linkedin-outreach (Marketing)

Development and Testing is the most common category in this batch. Marketing and new vendor sections follow.

## 4. Community Hot Topics
No item has comments or 👍 reactions, so engagement is low. The most notable threads are:
- **[#1165](https://github.com/VoltAgent/awesome-agent-skills/issues/1165) (closed):** The author asks whether preview-first skill *directories* (Skilloop) belong in the list, or only individual skills. It shows some uncertainty about scope, because CONTRIBUTING covers `author/skill-name` entries only. The issue was closed the day it was opened.
- **Marketing and social publishing:** Open PRs [#1167](https://github.com/VoltAgent/awesome-agent-skills/pull/1167) (publora/skills, covering 10 networks) and [#1166](https://github.com/VoltAgent/awesome-agent-skills/pull/1166) (llm-mentions-skills, which tracks brand mentions across LLMs). Both overlap with the closed Upload-Post and LinkedIn PRs. This points to heavy demand for marketing automation skills.
- **Quality and verification skills:** [#1164](https://github.com/VoltAgent/awesome-agent-skills/pull/1164) (xizi-rujin, a "fake-green" test interceptor) and the closed qikly, paranoid and Second Take PRs. Contributors want ways to check agent output.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. This is a curated list rather than software, so the main quality risks are PR hygiene and entry accuracy.

## 6. Feature Requests & Roadmap Signals
- **Scope clarification (#1165):** Contributors want to know whether directories or aggregators can be listed. A short note in CONTRIBUTING would likely prevent more such questions. This is an inference, and no maintainer has committed to it.
- **Vendor sections:** The Duaer and Aident PRs (#1111, #1109) proposed new "Skills by …" sections. Their closure suggests the maintainers are cautious about adding more of them.
- **Multi-agent targets:** The open PRs name Antigravity, Kiro, Codex, Hermes/Telegram and Grok. The list is widening beyond Claude Code.

## 7. User Feedback Summary
- Contributors follow CONTRIBUTING closely, with details such as "appended to the end", "10 words" and the `author/skill-name` format.
- #1166 openly discloses that its author is the founder of the product behind the skill. Self-promotion is a recurring theme.
- Several submissions depend on hosted services or MCP servers (Omentir, Unbrowse, Aident Loadout, x402 APIs). That raises the question of whether the list should include skills with remote dependencies.
- Contributors did not leave any explicit satisfaction or dissatisfaction feedback.

## 8. Backlog Watch
- [#1117](https://github.com/VoltAgent/awesome-agent-skills/pull/1117) half144/cutaway, open since 2026-09-28 (9 days). It is the oldest open PR and was updated today.
- [#1141](https://github.com/VoltAgent/awesome-agent-skills/pull/1141) sujunmin/agy-ppt, open since 2026-10-02 (5 days).
- [#1163](https://github.com/VoltAgent/awesome-agent-skills/pull/1163) bablobanov/hermes-telegram-checklist, open since 2026-10-05.
- Newer open PRs: #1164, #1166 and #1167 were all opened within the last two days.

The recent closures were mostly PRs from 9 to 14 days old, so the 9-day-old #1117 is likely to be reviewed soon. None of the open PRs has comments. Contributors get no visible feedback, and the outcome of each closed PR is also unclear. A closing comment on each PR, giving the reason for merging or declining, would make the process clearer.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# MCP Ecosystem Digest 2026-10-05

> Issues: 83 | PRs: 90 | Projects covered: 7 | Generated: 2026-10-05 15:30 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-10-05

## 1. Today's Overview
Activity was high but mostly a backlog cleanup. 83 issues and 90 PRs were updated in 24 hours, and 75 of the issues and 87 of the PRs were closed. Many of the closed items are old (some from 2024–2025) and carry the `v2` label. That pattern points to a bulk triage or consolidation onto the `v2/main` branch rather than organic new activity. Maintainer @cliffhall is running an "agentic software factory" and a "2026-07-28 Spec Refactor" programme, which accounts for many of the new, auto-generated bug issues. There were no new releases. Only 3 PRs remain open, one of them the Changesets "version packages" PR.

## 2. Releases
No new releases. [PR #4941](https://github.com/modelcontextprotocol/servers/pull/4941) (`[v2] chore: version packages`) is still open, so the next semver release is staged but not published.

## 3. Project Progress
Closed PRs fall into several groups. The data doesn't say whether each was merged or closed unmerged, so this section describes them as closed.

- **Filesystem:**
  - Windows EPERM rename fallbacks: [#3610](https://github.com/modelcontextprotocol/servers/pull/3610) and [#3296](https://github.com/modelcontextprotocol/servers/pull/3296).
  - UNC path handling: [#3601](https://github.com/modelcontextprotocol/servers/pull/3601) and [#3615](https://github.com/modelcontextprotocol/servers/pull/3615).
  - In-place write to preserve birthtime: [#4516](https://github.com/modelcontextprotocol/servers/pull/4516).
  - Version read from `package.json`: [#4578](https://github.com/modelcontextprotocol/servers/pull/4578).
- **Git:**
  - Repo-root auto-detect: [#3997](https://github.com/modelcontextprotocol/servers/pull/3997).
  - Refuse an empty commit: [#4761](https://github.com/modelcontextprotocol/servers/pull/4761).
  - `git_add` no-op reporting: [#4764](https://github.com/modelcontextprotocol/servers/pull/4764) and [#4849](https://github.com/modelcontextprotocol/servers/pull/4849).
  - Detached-HEAD reporting: [#4805](https://github.com/modelcontextprotocol/servers/pull/4805).
- **Fetch:**
  - Gemini-compatible schema: [#3812](https://github.com/modelcontextprotocol/servers/pull/3812).
  - `socks://` alias: [#4340](https://github.com/modelcontextprotocol/servers/pull/4340).
  - SSRF guard: [#4890](https://github.com/modelcontextprotocol/servers/pull/4890).
- **Sequentialthinking:**
  - Annotation fixes (three duplicate PRs): [#4722](https://github.com/modelcontextprotocol/servers/pull/4722), [#4747](https://github.com/modelcontextprotocol/servers/pull/4747), [#4749](https://github.com/modelcontextprotocol/servers/pull/4749), plus [#4784](https://github.com/modelcontextprotocol/servers/pull/4784).
  - Prototype-key branch IDs: [#4814](https://github.com/modelcontextprotocol/servers/pull/4814).
- **Memory:**
  - Permission preservation: [#4828](https://github.com/modelcontextprotocol/servers/pull/4828).
  - Keep unreadable lines: [#4886](https://github.com/modelcontextprotocol/servers/pull/4886).
  - Report skipped entities: [#4888](https://github.com/modelcontextprotocol/servers/pull/4888).
- **Everything:**
  - Replay events by stream: [#4099](https://github.com/modelcontextprotocol/servers/pull/4099).
  - Session resources scoped per server: [#4810](https://github.com/modelcontextprotocol/servers/pull/4810).
  - Instructions aligned with capability-gated tools: [#4835](https://github.com/modelcontextprotocol/servers/pull/4835) and [#4793](https://github.com/modelcontextprotocol/servers/pull/4793).
- **CI:** [#5055](https://github.com/modelcontextprotocol/servers/pull/5055) adds a DCO signoff check to CI and the local gate.

Several PRs target the same issue, for example three for #4721 and two for #4763. Contributors are duplicating effort.

## 4. Community Hot Topics
- [#4797](https://github.com/modelcontextprotocol/servers/issues/4797), 8 comments. Two memory-server processes sharing `MEMORY_FILE_PATH` silently lose each other's writes, because the #4555 mutex is per-process. The need is multi-process or multi-client safety, which means file locking or a different storage layer.
- [#3029](https://github.com/modelcontextprotocol/servers/issues/3029), 5 comments. `--repository .` should find the git root as standard git does.
- [#1624](https://github.com/modelcontextprotocol/servers/issues/1624), 4 comments and 4 👍, the most reactions of the day. Fetch's `exclusiveMinimum` and `exclusiveMaximum` break Gemini 2.5 function calling. This is a cross-LLM schema portability problem.
- [#4841](https://github.com/modelcontextprotocol/servers/issues/4841), 4 comments. Filesystem emits `$schema` draft-07, which strict 2020-12 validators reject. This is the same portability theme.
- [#3204](https://github.com/modelcontextprotocol/servers/issues/3204), 4 comments. The filesystem server handles tool calls before the initial roots have loaded.
- [#4862](https://github.com/modelcontextprotocol/servers/issues/4862) and [#4854](https://github.com/modelcontextprotocol/servers/issues/4854), 3 comments each. These are the AGENTS.md rules (deleting CLAUDE.md) and the unit-test and 90% coverage gate, part of the factory and spec-refactor trackers.

## 5. Bugs & Stability
Ranked by severity, with all of these now closed unless noted:

1. **Security: SSRF in fetch** ([#4838](https://github.com/modelcontextprotocol/servers/issues/4838)). Redirects are followed with no private-IP or metadata guard. Fix PR [#4890](https://github.com/modelcontextprotocol/servers/pull/4890).
2. **Data loss in memory** ([#4797](https://github.com/modelcontextprotocol/servers/issues/4797)). Cross-process writes are discarded.
3. **Git correctness**:
   - [#5012](https://github.com/modelcontextprotocol/servers/issues/5012): `git_commit` mid-merge records one parent and leaves `MERGE_HEAD` in place.
   - [#4762](https://github.com/modelcontextprotocol/servers/issues/4762): empty commits are reported as success.
   - [#4763](https://github.com/modelcontextprotocol/servers/issues/4763): `git_add` reports success when nothing was staged.
   - [#4804](https://github.com/modelcontextprotocol/servers/issues/4804): checkout wrongly reports "Switched to branch" when HEAD is detached.
   - [#4997](https://github.com/modelcontextprotocol/servers/issues/4997): `git_show` fails on non-UTF-8 patches.
   - [#4998](https://github.com/modelcontextprotocol/servers/issues/4998): `git_show` prints Python reprs.
   - [#4999](https://github.com/modelcontextprotocol/servers/issues/4999), [#4996](https://github.com/modelcontextprotocol/servers/issues/4996), [#4995](https://github.com/modelcontextprotocol/servers/issues/4995), [#4994](https://github.com/modelcontextprotocol/servers/issues/4994), [#4993](https://github.com/modelcontextprotocol/servers/issues/4993): misleading messages and a startup traceback.
4. **Crashes and tracebacks**:
   - [#5001](https://github.com/modelcontextprotocol/servers/issues/5001): invalid `--local-timezone` kills the time server.
   - [#4993](https://github.com/modelcontextprotocol/servers/issues/4993): nonexistent `--repository` kills the git server.
   - [#4813](https://github.com/modelcontextprotocol/servers/issues/4813): sequentialthinking throws on `Object.prototype` key branch IDs.
5. **Time and fetch**:
   - [#5002](https://github.com/modelcontextprotocol/servers/issues/5002): `convert_time` accepts nonexistent spring-forward times without a warning.
   - [#5003](https://github.com/modelcontextprotocol/servers/issues/5003): an empty `source_timezone` surfaces a raw error.
   - [#4988](https://github.com/modelcontextprotocol/servers/issues/4988): fetch ignores the requested tool or prompt name.
   - [#4989](https://github.com/modelcontextprotocol/servers/issues/4989): an empty page reports "No more content available".
6. **Filesystem and annotations**:
   - [#4512](https://github.com/modelcontextprotocol/servers/issues/4512) and [#4827](https://github.com/modelcontextprotocol/servers/issues/4827): atomic rename loses birthtime and permissions.
   - [#3527](https://github.com/modelcontextprotocol/servers/issues/3527): UNC paths fail the access check.
   - [#4721](https://github.com/modelcontextprotocol/servers/issues/4721): incorrect read-only and idempotent hints.

Issues #4993–#5003 came out of the Wave 1 test-pinning work, so the new test suites are surfacing latent bugs.

## 6. Feature Requests & Roadmap Signals
- The 2026-07-28 spec refactor is sequenced as Wave 1 test coverage ([#4854](https://github.com/modelcontextprotocol/servers/issues/4854), [#4855](https://github.com/modelcontextprotocol/servers/issues/4855)), followed by SDK and spec changes.
- The release pipeline is moving to semver via changesets with release-triggered publishing ([#4472](https://github.com/modelcontextprotocol/servers/issues/4472)). OIDC trusted publishing is complete ([#4463](https://github.com/modelcontextprotocol/servers/issues/4463)), and a `v2/main` → `main` milestone release flow is planned ([#4873](https://github.com/modelcontextprotocol/servers/issues/4873)).
- Agent guidance and skills are in progress: AGENTS.md ([#4862](https://github.com/modelcontextprotocol/servers/issues/4862)), the contribution model ([#4869](https://github.com/modelcontextprotocol/servers/issues/4869)), issue triage ([#4868](https://github.com/modelcontextprotocol/servers/issues/4868)), pr-flow ([#4867](https://github.com/modelcontextprotocol/servers/issues/4867)), security-advisory ([#4870](https://github.com/modelcontextprotocol/servers/issues/4870)) and the pre-push gate ([#4871](https://github.com/modelcontextprotocol/servers/issues/4871)).
- Filesystem: wait for initial roots before handling tool calls ([#3204](https://github.com/modelcontextprotocol/servers/issues/3204)).
- Likely in the next version: the batch of correctness fixes above. That includes the git, fetch SSRF, memory and everything-server fixes, which are staged in the open version PR [#4941](https://github.com/modelcontextprotocol/servers/pull/4941).

## 7. User Feedback Summary
- **Cross-client compatibility** is a recurring pain: Gemini rejects JSON Schema keywords, and strict validators reject draft-07 ([#1624](https://github.com/modelcontextprotocol/servers/issues/1624), [#4841](https://github.com/modelcontextprotocol/servers/issues/4841)).
- **Windows and network environments** hit UNC paths, file locks and SOCKS proxies ([#3527](https://github.com/modelcontextprotocol/servers/issues/3527), [#1401](https://github.com/modelcontextprotocol/servers/issues/1401), [#767](https://github.com/modelcontextprotocol/servers/issues/767)).
- **Misleading success messages** affect agent reliability, since the LLM can't tell a no-op from a real change (git_add, git_commit, git_checkout, git_create_branch).
- **Reliability under concurrent use** is a concern for the memory server.
- **Security researchers** are engaging: [#4958](https://github.com/modelcontextprotocol/servers/issues/4958) (open) is an external scan reporting authorization-surface and parameter-bound hardening gaps on the reference servers.

## 8. Backlog Watch
- [#4958](https://github.com/modelcontextprotocol/servers/issues/4958) is open with a security-hardening report from an external scanner. It needs a maintainer triage response before the findings are published.
- [#4879](https://github.com/modelcontextprotocol/servers/pull/4879) (git non-ASCII paths, open since 2026-09-27) and [#4672](https://github.com/modelcontextprotocol/servers/pull/4672) (filesystem trailing-whitespace stripping, open since 2026-08-20, fixes #1590) have no recorded review activity. #4672 may be contentious, because silently altering written content could surprise users.
- [#4941](https://github.com/modelcontextprotocol/servers/pull/4941) (version packages, open since 2026-10-01) is awaiting a release decision.
- Many fixes were sitting unmerged for months before today's sweep, for example the Windows EPERM and UNC PRs from February to March. That is a review-latency signal, and contributor PRs went stale.
- Duplicate PRs (sequentialthinking annotations, git_add) show that contributors are not discovering existing work, which the planned contribution-model and triage tooling should address.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-10-05

## 1. Ecosystem Overview
Today's digests show a protocol-centered ecosystem built around MCP. The reference servers, the official and Docker registries, and the Claude plugin, skill and awesome-list repos each cover a different layer. Activity is concentrated in two places. One is inbound submissions: new servers, skills and plugins sent to the registries and curated lists. The other is quality hardening: correctness, security and cross-client schema compatibility. Review throughput is the common bottleneck. Agent-authored contributions are growing faster than maintainers can triage them. Supply-chain trust, remote OAuth-based servers and agent skills are the dominant themes.

## 2. Activity Comparison

Health scores are my own judgments from the digests, not figures the projects report.

| Project | Issues updated | PRs updated | Release status | Health (1–5) | Note |
|---|---|---|---|---|---|
| MCP Servers | 83 (75 closed) | 90 (87 closed, 3 open) | None; version PR #4941 staged | 4 | Bulk triage and spec-refactor work. Review latency was months before the sweep. |
| MCP Registry | 0 | 1 (open) | None | 2.5 | One day of data only. A security docs PR has been open about a month. |
| Awesome MCP Servers | 0 | 85 (81 open, 4 closed) | None | 3 | Strong intake. Review queue is growing. |
| Docker MCP Registry | 0 | 46 (42 open, 4 closed) | None | 3 | Mostly remote-server submissions. No visible reviews. |
| Claude Plugins (official) | 10 (all open) | 2 (both closed, none merged) | None | 2.5 | Bump workflow disabled. A security plugin fails open. |
| Awesome Claude Code | 11 (8 open, 3 auto-closed) | 0 | None | 3.5 | Validation bot works. No maintainer merges today. |
| Awesome Agent Skills | 0 | 9 (6 open, 3 closed) | None | 3.5 | Steady triage with 1–2 week latency. |

## 3. MCP Servers' Position
**Advantages**
- It is the only project in this set with substantive engineering work and a shipping pipeline. It has 172 closed or merged items in a day, a Changesets-based semver flow, and OIDC trusted publishing.
- It is the reference implementation. Its design choices, such as schema dialects and tool annotations, set de facto behavior for every client.
- It runs a structured roadmap, the 2026-07-28 spec refactor, with test-pinning waves that are already finding latent bugs (#4993–#5003).

**Technical approach differences**
- The registries and lists are catalogs and metadata, handling discovery and trust. MCP Servers is executable code: filesystem, git, fetch, memory, time and everything servers.
- The risks differ accordingly. Catalogs face spam, duplicates and naming rules. Servers face correctness, SSRF, data loss and portability.

**Community size**
- By activity volume, MCP Servers (173 updates) is above Awesome MCP Servers (85) and Docker (46). Both of those have far more open items per maintainer.
- Raw counts are skewed by one day's bulk closures, so they are not a measure of contributor population.

**Weaknesses**
- Review latency was months before today's sweep.
- Duplicate PRs.
- An open external security-hardening report (#4958) still needs triage.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Supply-chain trust and verification | MCP Registry, Awesome MCP Servers, Docker MCP Registry, MCP Servers | Pinned and verified `mcp-publisher` download (#1624). HVTracker listed in both lists. IsMalicious and EchelonGraph in Docker. SSRF guard in fetch. |
| Remote servers and OAuth | Docker MCP Registry, Awesome MCP Servers | OAuth 2.1 with DCR, PKCE and RFC 9728. Streamable HTTP. A remote-wizard workflow. |
| Cross-client schema compatibility | MCP Servers | Gemini rejects `exclusiveMinimum`. Draft-07 `$schema` is rejected by strict validators. |
| Agent memory and context | MCP Servers, Awesome MCP Servers, Awesome Agent Skills, Awesome Claude Code | Multi-process memory safety (#4797). Metis and MemTether. Archcore. Context Guru. |
| Agent guardrails and observability | Awesome Claude Code, Awesome Agent Skills, Awesome MCP Servers | RepoGuard appears in two lists. AgentMeasure and agent-shell-watch. |
| Submission and process automation | All catalogs | Glama and name-format labels. Validation bot. Commit-author checks. Disabled SHA-bump workflow. |
| Honest tool results | MCP Servers, Claude Plugins | Misleading success messages from git tools. `security-guidance` failing open. Garbled findings. |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference server implementations | Server and client implementers | TypeScript and Python monorepo. Changesets. `v2/main` branch. |
| MCP Registry | Official publishing and discovery | Server publishers | Registry service with a `mcp-publisher` CLI. |
| Awesome MCP Servers | Curated README list | Discovery by developers and vendors | Markdown PRs with label-based validation. |
| Docker MCP Registry | Container and remote catalog | Docker users and vendors | `server.yaml` and `tools.json` per server. |
| Claude Plugins | Marketplace of Claude plugins | Claude Code users and plugin authors | Pinned SHAs. Publishing portal. Chat-channel plugins. |
| Awesome Claude Code | Curated Claude Code resources | Claude Code users | Issue-template intake with a validation bot. |
| Awesome Agent Skills | Curated skills list | Cross-agent users (Claude, Cursor, Codex, Copilot) | PR-based, with vendor sections. |

Docker and the Claude plugin marketplace both distribute software, but with different trust models. Docker uses images and remote endpoints. The Claude marketplace pins SHAs of upstream repositories.

## 6. Community Momentum & Maturity

- **Tier 1, high volume and iterating fast:** MCP Servers (spec refactor, release pipeline), Awesome MCP Servers and Docker MCP Registry (inbound growth). The two catalogs are growing but their review capacity is not keeping pace.
- **Tier 2, steady and stabilizing:** Awesome Claude Code and Awesome Agent Skills. Intake processes are working, with review latency of one to two weeks.
- **Tier 3, low activity or constrained:** MCP Registry (one PR). Claude Plugins has operational debt, with a disabled workflow, unpublished listings and open security-plugin bugs, though it saw only 12 updates.

MCP Servers is moving from backlog-heavy to process-driven maturity, with agentic tooling, a test gate and semver. The catalogs are mature in format but not yet in review automation.

## 7. Trend Signals

1. **Agent-authored contributions are now routine.** The 🤖🤖🤖 fast-track in Awesome MCP Servers, "generated with Claude Code" notes, and the maintainer's own agentic software factory all point the same way. Projects need automated validation, such as labels, bots, DCO checks and AGENTS.md rules, to keep up.
2. **Trust before install.** Several projects see requests for pinned downloads, SSRF guards, scanners and trust checks. Developers should assume security review is part of publishing and consuming servers.
3. **Remote and hosted MCP is becoming the default.** Dynamic tool discovery and OAuth 2.1 are common, and some vendors list servers with no public source.
4. **Portability across LLM clients matters.** Schema dialect and keyword differences break function calling in some clients, so server authors should stick to widely supported JSON Schema subsets.
5. **Agent-facing correctness.** An LLM cannot tell a no-op from a change when a tool returns a false success, so accurate, specific tool results are a reliability requirement.
6. **Skills are growing as a parallel layer to MCP.** Vendors want official sections, and adoption evidence such as npm and skills.sh installs is becoming an informal vetting signal.
7. **Operational hygiene is a risk.** Stale pins, a disabled bump workflow and publish-state mismatches show that marketplace operations need the same rigor as code.

**For decision-makers:** prefer servers with pinned versions, tested schemas and a clear security posture. Budget for your own vetting, because the catalogs are not able to review everything at current volumes.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) Digest, 2026-10-05

## 1. Today's Overview
Activity in modelcontextprotocol/registry was very low over the last 24 hours. There were no issue updates, no new releases and no merged or closed PRs. The one item with any movement is open PR #1624, a docs change that hardens the GitHub Actions publishing guide. Project health can't be judged from one day of data. The quiet looks like a slow day, not a stall, but the PR's age (see Backlog Watch) points to limited review bandwidth.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so nothing shipped or was fixed. The only PR with activity is still open (see below).

**In flight:**
- [PR #1624](https://github.com/modelcontextprotocol/registry/pull/1624): "docs: pin and verify mcp-publisher in the GitHub Actions publishing workflow". The author is UgaTheDev. It fixes #1505. The PR targets the three install-step copies in the publishing guide (OIDC, PAT and DNS variants). Each currently downloads `mcp-publisher` from `releases/latest` and pipes it straight into `tar` inside the job that holds the publishing credential. The PR's goal is to pin a version and verify the download. The summary I have is truncated, so I can't state the exact verification mechanism (checksum or signature).

## 4. Community Hot Topics
No issue discussion was active, and the comment and reaction counts for #1624 aren't available (comments are reported as undefined, 👍 is 0). The PR does show a real user need: publishers want a supply-chain-safe CI path for publishing to the registry. Fetching an unpinned binary and executing it in a job with publishing credentials is a known risk. Tightening the official docs is therefore a trust and security concern as well as a docs one.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. The related issue #1505 is a security-hardening concern about the docs, not a runtime defect. PR #1624 is the open fix for it.

## 6. Feature Requests & Roadmap Signals
No new feature requests appeared today. The only signal is the push toward reproducible, verifiable publishing workflows. A follow-on idea is that the project could publish checksums or signatures with each `mcp-publisher` release, or offer an official GitHub Action. That is my inference and the data doesn't confirm it. Since #1624 is docs-only, it needs no release and could land at any time once reviewed.

## 7. User Feedback Summary
There is no direct user feedback today. The sole item shows that people who publish via CI care about credential safety and about the install instructions they copy from the docs. The existing guide's `releases/latest | tar` pattern is easy to copy and also risky.

## 8. Backlog Watch
- [PR #1624](https://github.com/modelcontextprotocol/registry/pull/1624) was created on 2026-09-06 and last updated on 2026-10-04. It has been open about a month, and it addresses a security-relevant docs issue (#1505). It needs maintainer review or a decision. If a version pin is adopted, maintainers should also decide how it will be kept current.
- Issue #1505 is the linked original report. It has had no activity in the last 24 hours and its status is unknown from this data. It should be checked and closed when #1624 merges.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest: 2026-10-05

## 1. Today's Overview
The repository saw high activity but no core changes. In the last 24 hours, 85 PRs were updated (81 open, 4 merged or closed). There were no issues and no releases. The project works as a curated list, so almost all activity is new submissions: new MCP servers proposed for the README. Many PRs carry the 🤖🤖🤖 marker, which suggests agent-authored fast-track submissions. The data gives only 4 merged or closed PRs and doesn't say which ones, so the maintainer's throughput can't be judged precisely. Open PRs outnumber closed ones by about 20 to 1, which points to a growing review queue.

## 2. Releases
None.

## 3. Project Progress
The data identifies no specific merged or closed PRs. Four PRs were merged or closed, but the top-20 list contains only open ones. I can't say which entries landed or what changed. Nothing in the data suggests code or tooling changes. All visible work is list content.

## 4. Community Hot Topics
Comment counts are reported as `undefined` and all 👍 counts are 0, so engagement can't be ranked. Instead, these are the themes in the visible PRs:

- **Developer Tools**: the largest cluster.
  - [#15103](https://github.com/punkpeye/awesome-mcp-servers/pull/15103) proxy-toolkit-mcp
  - [#15763](https://github.com/punkpeye/awesome-mcp-servers/pull/15763) Playwright E2E feedback loop
  - [#15708](https://github.com/punkpeye/awesome-mcp-servers/pull/15708) SkillMD, a registry for searching, linting and installing Agent Skills
  - [#15756](https://github.com/punkpeye/awesome-mcp-servers/pull/15756) Tently, which gives coding agents architecture decisions
- **Knowledge & Memory**: three PRs.
  - [#15760](https://github.com/punkpeye/awesome-mcp-servers/pull/15760) Metis, governed tacit memory
  - [#15757](https://github.com/punkpeye/awesome-mcp-servers/pull/15757) MemTether, a cross-client shared memory hub
  - [#12253](https://github.com/punkpeye/awesome-mcp-servers/pull/12253) TMCRA update
- **Security and trust**:
  - [#15759](https://github.com/punkpeye/awesome-mcp-servers/pull/15759) HVTracker, a supply-chain trust check before installing agents or MCP servers
  - [#15755](https://github.com/punkpeye/awesome-mcp-servers/pull/15755) Hugin, a Rust proxy and scanner with 174 tools
- **Workplace, marketing and communication**:
  - [#15761](https://github.com/punkpeye/awesome-mcp-servers/pull/15761) Carbon
  - [#15762](https://github.com/punkpeye/awesome-mcp-servers/pull/15762) ad tooling
  - [#15758](https://github.com/punkpeye/awesome-mcp-servers/pull/15758) Misar
  - [#15752](https://github.com/punkpeye/awesome-mcp-servers/pull/15752) Remote Jobs API
  - [#15702](https://github.com/punkpeye/awesome-mcp-servers/pull/15702) grr, a Google Workspace CLI and MCP server
  - [#10991](https://github.com/punkpeye/awesome-mcp-servers/pull/10991) TheDeskMonitor
  - [#14760](https://github.com/punkpeye/awesome-mcp-servers/pull/14760) Eodly
- **Aggregators and coordination**:
  - [#14571](https://github.com/punkpeye/awesome-mcp-servers/pull/14571) brick.blue, an index of about 47k tools
  - [#15753](https://github.com/punkpeye/awesome-mcp-servers/pull/15753) Parley, decisions among parties with conflicting interests
  - [#15744](https://github.com/punkpeye/awesome-mcp-servers/pull/15744) 16 remote MCP servers in one PR

**Underlying needs:** developers want agent-facing tooling for context, memory, supply-chain trust and skills. Vendors want discoverability and a listing for their remote or hosted servers.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there were no issues. Process problems do show up in the PR labels:
- Several PRs carry `missing-glama`: [#15763](https://github.com/punkpeye/awesome-mcp-servers/pull/15763), [#15762](https://github.com/punkpeye/awesome-mcp-servers/pull/15762), [#15758](https://github.com/punkpeye/awesome-mcp-servers/pull/15758), [#15757](https://github.com/punkpeye/awesome-mcp-servers/pull/15757), [#15755](https://github.com/punkpeye/awesome-mcp-servers/pull/15755), [#15744](https://github.com/punkpeye/awesome-mcp-servers/pull/15744), [#15752](https://github.com/punkpeye/awesome-mcp-servers/pull/15752), [#10991](https://github.com/punkpeye/awesome-mcp-servers/pull/10991).
- [#15761](https://github.com/punkpeye/awesome-mcp-servers/pull/15761) (Carbon) is flagged `invalid-name` and `missing-glama`.

No fix PRs apply.

## 6. Feature Requests & Roadmap Signals
There are no feature requests. Contributors are pushing a few categories:
- Agent memory and governance
- Supply-chain security for agents
- Remote, hosted MCP servers, such as Streamable HTTP endpoints with no auth
- Agent-to-agent and agreement tooling

If the list adds sections, candidates include Agent Skills and registries, and agent trust and verification. This is an inference, not something maintainers have said.

## 7. User Feedback Summary
Contributors aren't giving direct feedback. The submissions show the following:
- Many are agent-authored, and some cite the CONTRIBUTING fast-track opt-in ([#15702](https://github.com/punkpeye/awesome-mcp-servers/pull/15702)).
- Bundled submissions put reviewers under strain ([#15744](https://github.com/punkpeye/awesome-mcp-servers/pull/15744) adds 16 entries).
- Some contributors seem unsure how to meet the Glama and name-format rules.

## 8. Backlog Watch
These PRs have been open the longest and were updated again today:
- [#10991](https://github.com/punkpeye/awesome-mcp-servers/pull/10991) TheDeskMonitor, opened 2026-07-26 (about 10 weeks). It is also missing a Glama listing.
- [#12253](https://github.com/punkpeye/awesome-mcp-servers/pull/12253) TMCRA update to 1.0.0-rc.1, opened 2026-08-16.
- [#14571](https://github.com/punkpeye/awesome-mcp-servers/pull/14571) brick.blue, opened 2026-09-17.
- [#14760](https://github.com/punkpeye/awesome-mcp-servers/pull/14760) Eodly, opened 2026-09-20.
- [#15103](https://github.com/punkpeye/awesome-mcp-servers/pull/15103) proxy-toolkit-mcp, opened 2026-09-25.

Maintainers should look at these. The repeated updates may mean the contributors are re-pinging or fixing flagged problems.

**Health assessment:** the community is highly active and the intake of new servers is strong. Review throughput looks like the bottleneck, and the 4 closes against 81 open PRs shows it. Automated label checks (`has-glama`, `valid-name`) are already helping triage.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-05

## 1. Today's Overview
The repo had a busy day: 46 PRs were updated and 0 issues. 42 PRs are open and 4 are closed or merged. The traffic is nearly all external submissions of new MCP servers, with a heavy tilt toward **remote (streamable-http, OAuth)** servers. No releases shipped, and the data shows no maintainer reviews or merges of these submissions, so the review queue is growing. Because the comment counts came through as `undefined`, I can't rank discussion volume. Activity is high, but it is almost entirely inbound.

## 2. Releases
No new releases.

## 3. Project Progress
No PR in this data was clearly merged. The 4 closed or merged PRs are visible only as three closed items, and the data doesn't say whether any were merged:
- [#5447](https://github.com/docker/mcp-registry/pull/5447) (TradeStar Insider): the author closed it to fix the commit author and resubmitted it as [#5451](https://github.com/docker/mcp-registry/pull/5451) with the same files.
- [#5316](https://github.com/docker/mcp-registry/pull/5316) (xTiles): closed and replaced by [#5445](https://github.com/docker/mcp-registry/pull/5445) from a different account (`xtiles-owner`).
- [#1451](https://github.com/docker/mcp-registry/pull/1451) (Zephyr Scale MCP): an old PR from 2026-03-05, closed today. It looks like backlog cleanup.

Two of the three closures are authors resubmitting their own work, not registry progress.

## 4. Community Hot Topics
No comment or reaction data is available, since every PR shows `Comments: undefined` and 0 👍. The notable themes are in the submissions:
- **Finance and market data:** [#5453](https://github.com/docker/mcp-registry/pull/5453) Silicon Floor, [#5451](https://github.com/docker/mcp-registry/pull/5451) TradeStar Insider, [#5450](https://github.com/docker/mcp-registry/pull/5450) Truthifi.
- **Security and supply-chain trust:** [#5395](https://github.com/docker/mcp-registry/pull/5395) IsMalicious, [#5429](https://github.com/docker/mcp-registry/pull/5429) EchelonGraph (CVE, KEV, EPSS), [#5446](https://github.com/docker/mcp-registry/pull/5446) HVTracker (trust checks before installing agents or MCP servers).
- **Multi-model and agent tooling:** [#5452](https://github.com/docker/mcp-registry/pull/5452) Synero AI Council (queries several models), [#5154](https://github.com/docker/mcp-registry/pull/5154) brick.blue (an index of agent tools), [#5442](https://github.com/docker/mcp-registry/pull/5442) Voidpay Marketplace, [#5441](https://github.com/docker/mcp-registry/pull/5441) Voidly Atlas.
- **Productivity and content:** [#5445](https://github.com/docker/mcp-registry/pull/5445) xTiles, [#5444](https://github.com/docker/mcp-registry/pull/5444) PostPen, [#5448](https://github.com/docker/mcp-registry/pull/5448) Misar AI (three servers in one PR), [#5443](https://github.com/docker/mcp-registry/pull/5443) Verant.

Vendors want their hosted services listed in Docker's catalog as a distribution channel, mostly as remote servers with no container image.

## 5. Bugs & Stability
No issues were filed and no bugs, crashes or regressions were reported today. Two process problems stand out:
- Authors are hitting commit-author problems, as in #5447.
- Duplicate or resubmitted PRs add noise to the queue.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions point to these signals:
- **Remote MCP is now the main onboarding path.** Several PRs say they follow the output of `task remote-wizard`, modeled on `servers/linear` ([#5450](https://github.com/docker/mcp-registry/pull/5450)).
- **OAuth 2.1 with dynamic client registration, PKCE and RFC 9728 metadata** is common ([#5452](https://github.com/docker/mcp-registry/pull/5452), [#5450](https://github.com/docker/mcp-registry/pull/5450), [#5443](https://github.com/docker/mcp-registry/pull/5443), [#5444](https://github.com/docker/mcp-registry/pull/5444)).
- **Dynamic tool discovery** (`dynamic.tools: true` with an empty `tools.json`) appears in [#5154](https://github.com/docker/mcp-registry/pull/5154) and [#4471](https://github.com/docker/mcp-registry/pull/4471).
- **Multi-server PRs** such as [#5448](https://github.com/docker/mcp-registry/pull/5448) may need clearer contribution guidance.

I'd expect the registry to keep refining its remote and OAuth handling and its contribution tooling. That is an inference, not something stated in the data.

## 7. User Feedback Summary
There are no direct user comments. From the submissions:
- **Contributors** want a smooth path for hosted servers without public source repositories ([#5445](https://github.com/docker/mcp-registry/pull/5445) lists "N/A" for the repo URL).
- **Friction points** are commit-author checks and the lack of visible review feedback.
- **Use cases** are financial research, security triage, geodata (the stdio server [#5261](https://github.com/docker/mcp-registry/pull/5261) maplibre-mcp), censorship monitoring, and agent trust checks.

## 8. Backlog Watch
These PRs have waited longest and need maintainer attention:
- [#1451](https://github.com/docker/mcp-registry/pull/1451): opened 2026-03-05, closed today after about 7 months.
- [#4471](https://github.com/docker/mcp-registry/pull/4471) (Decide Policy Notaries): opened 2026-07-18, about 11 weeks old and still open.
- [#5154](https://github.com/docker/mcp-registry/pull/5154) (brick.blue): opened 2026-09-18, about 2.5 weeks old and still open.
- [#5261](https://github.com/docker/mcp-registry/pull/5261) (maplibre-mcp): opened 2026-09-26.
- [#5395](https://github.com/docker/mcp-registry/pull/5395) (IsMalicious): opened 2026-10-03.

With 42 open PRs, the registry needs more review capacity. Triage and automated validation of `server.yaml` and `tools.json` would also help.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest: 2026-10-05

## 1. Today's Overview
Activity is moderate and maintenance-heavy. Ten issues were updated, all still open, along with two PRs that were both closed and none merged. There were no releases. Most of the new traffic is about the marketplace's publishing and pinning process, not new features. The `Bump Plugin SHAs` workflow has been disabled since about 2026-09-17, and several pins are now stale. Publishing-portal mismatches and fail-open behavior in `security-guidance` are the other main concerns.

## 2. Releases
No new releases.

## 3. Project Progress
Two PRs were closed today, and neither was merged:
- [PR #1730](https://github.com/anthropics/claude-plugins-official/pull/1730) (closed): "Add cwc-makers plugin: /maker-setup Cardputer onboarding." It was opened on 2026-05-06 and closed after about five months without a merge. The data doesn't give a reason.
- [PR #6354](https://github.com/anthropics/claude-plugins-official/pull/6354) (closed): `fix(commit-commands)` for `/clean_gone`. The command deletes branches and worktrees with `-D` and `--force`, and the PR says it destroys unmerged and uncommitted work. It was opened and closed the same day. The data doesn't say whether the fix was adopted another way, so the issue may still be unresolved.

Nothing was merged, so no features or fixes landed today.

## 4. Community Hot Topics
Comment counts are low everywhere. The most active threads are:
- [#1872](https://github.com/anthropics/claude-plugins-official/issues/1872) (5 comments, 1 👍): The Telegram plugin needs inline keyboard buttons and `callback_query` support. Users want interactive, button-driven flows from chat channels, not text-only replies.
- [#1871](https://github.com/anthropics/claude-plugins-official/issues/1871) (3 comments, 1 👍): Word `replace_text` fails with AppleScript error -2750.
- [#4960](https://github.com/anthropics/claude-plugins-official/issues/4960) (3 comments, 1 👍): `security-guidance` review findings are delivered with the inner CLI's stderr in place of the body.

A second theme has fewer comments but is clearly recurring. Stale marketplace pins are reported in [#6360](https://github.com/anthropics/claude-plugins-official/issues/6360), [#6331](https://github.com/anthropics/claude-plugins-official/issues/6331) and [#6358](https://github.com/anthropics/claude-plugins-official/issues/6358). Publishing-portal mismatches are reported in [#3679](https://github.com/anthropics/claude-plugins-official/issues/3679) and [#6357](https://github.com/anthropics/claude-plugins-official/issues/6357). Together these point to a gap in marketplace operations.

## 5. Bugs & Stability
Ranked by severity. None has a linked fix PR in the data.
1. **[#6355](https://github.com/anthropics/claude-plugins-official/issues/6355), `security-guidance` fails open.** A model refusal or unparseable review output is recorded as "no vulnerabilities." This is the most serious item because it is a security tool that can report a false all-clear. The report says it reproduces on 2.0.6, and the code path is unchanged on `main` (2.0.9).
2. **[#4960](https://github.com/anthropics/claude-plugins-official/issues/4960), `security-guidance` findings corrupted.** On commit and push review, the body is replaced by unrelated stderr. The `rewakeSummary` headline survives, so the model gets a headline with no usable details. It was filed 2026-08-06 and is still open.
3. **[#1871](https://github.com/anthropics/claude-plugins-official/issues/1871), Word `replace_text` broken.** The generated AppleScript specifies `replace` twice, so every find/replace pair fails with error -2750. The tool is fully non-functional on macOS.
4. **[PR #6354](https://github.com/anthropics/claude-plugins-official/pull/6354), `/clean_gone` data loss.** This is not an open issue, but the PR describes irreversible loss of work, so it is worth tracking.

## 6. Feature Requests & Roadmap Signals
- [#1872](https://github.com/anthropics/claude-plugins-official/issues/1872): Telegram inline keyboards and callback handling. It has the most engagement of any request but was filed in May, so it is a long-standing ask.
- [#6356](https://github.com/anthropics/claude-plugins-official/issues/6356): Discord inbound channel events drop the reply reference. This is a small metadata addition, so it is the most likely to ship soon. It would fix ambiguity when a user replies to one of several bot questions.
- Pin bumps for `mattpocock-skills` (to v1.3.1), `remember` (to v0.36.0) and `chrome-devtools-mcp` (to v1.10.1). These are routine and will probably land in the next manual batch.

The roadmap signal is that the two chat-channel plugins, Telegram and Discord, are being pushed toward richer interactivity.

## 7. User Feedback Summary
- **Publishers are frustrated by the lack of visibility.** The portal says "Published" or "Live," but the plugins don't appear in the marketplace ([#3679](https://github.com/anthropics/claude-plugins-official/issues/3679), [#6357](https://github.com/anthropics/claude-plugins-official/issues/6357)). One reporter says they received no confirmation email.
- **Plugin maintainers and users want pins kept current.** Reporters cite exact SHAs and upstream tags, which shows they are monitoring the process closely. They note that the automated bump workflow is disabled and that manual batches (2026-09-22 and 2026-09-16) leave gaps.
- **Security-plugin users want trustworthy output.** Failing open and garbled findings undermine confidence in `security-guidance`.
- **Integrators want richer chat features,** such as buttons and reply context.

## 8. Backlog Watch
- [#3679](https://github.com/anthropics/claude-plugins-official/issues/3679): A plugin has been "Published" in the portal since 2026-05-11 and still isn't listed. The issue is over three months old, has one comment, and needs maintainer attention.
- [#1872](https://github.com/anthropics/claude-plugins-official/issues/1872): Telegram inline keyboards, open since 2026-05-15.
- [#1871](https://github.com/anthropics/claude-plugins-official/issues/1871): Word `replace_text` bug, open since 2026-05-15 and affecting a first-party connector.
- [#4960](https://github.com/anthropics/claude-plugins-official/issues/4960): `security-guidance` output corruption, open since 2026-08-06.
- **Bump workflow:** The disabled `Bump Plugin SHAs` workflow is the underlying cause of #6331, #6358 and #6360. Re-enabling it, or setting a manual cadence, would likely close several issues at once.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-10-05

## 1. Today's Overview
Awesome Claude Code is a curated resource list. Today's activity consisted entirely of new resource submissions. There were 11 issues updated, with 8 open and 3 auto-closed, and no PRs or releases. Seven of the eight open issues carry the `validation-passed` label, so the automated intake pipeline is working. Activity is moderate. Nine of the 11 items were created on 2026-10-04 or 2026-10-05, which means submission flow is steady. No maintainer-merged changes landed, so the curated list itself did not change today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today (0 PRs updated). Three issues were auto-closed by the validation bot, all labelled `validation-pending, auto-closed`:
- [#3073 cap-evolve](hesreallyhim/awesome-claude-code Issue #3073) (Skills)
- [#3070 agent-shell-watch](hesreallyhim/awesome-claude-code Issue #3070) (Observability & Monitoring > Session Monitors)
- [#3068 AgentMeasure](hesreallyhim/awesome-claude-code Issue #3068) (Observability & Monitoring > Usage & Cost)

The data does not say why they were closed. For #3068, the same author's [#2801](hesreallyhim/awesome-claude-code Issue #2801) is a `[Resource]` submission for the same project and remains open with `validation-passed`. #3068 therefore looks like a duplicate or a wrong-format resubmission. Its title, "Add AgentMeasure — …", does not follow the `[Resource]: Name` template. That is an inference from the titles, not something the data confirms.

## 4. Community Hot Topics
Engagement is low across the board. No item has any 👍, and the maximum is 3 comments. Most comments are probably the bot's validation message.

- [#2801 AgentMeasure](hesreallyhim/awesome-claude-code Issue #2801): 3 comments, the most of any item today. It is also the oldest active item, created 2026-09-10. It proposes open measurement infrastructure for agent-facing software, under Usage & Cost. The extra comments may mean a back-and-forth with the maintainer or author, but the data does not show that.
- [#3012 kumi](hesreallyhim/awesome-claude-code Issue #3012): 2 comments. It is a Claude Code plugin with a coordinator and 20 named specialists, under Agent Orchestration.

**Underlying needs from the submission themes:**
- **Observability and cost control:** AgentMeasure and agent-shell-watch.
- **Context and memory:** [#3072 Context Guru](hesreallyhim/awesome-claude-code Issue #3072), which aims to keep prompt caches warm.
- **Guardrails and quality:** [#3067 RepoGuard](hesreallyhim/awesome-claude-code Issue #3067), an AST linter, and [#3069 docs-governance](hesreallyhim/awesome-claude-code Issue #3069).
- **Review and control surfaces:** [#3071 localpr](hesreallyhim/awesome-claude-code Issue #3071), [#3074 Agent Workbench](hesreallyhim/awesome-claude-code Issue #3074), and [#3066 call-me](hesreallyhim/awesome-claude-code Issue #3066).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The only stability signal is process-related. Three submissions were auto-closed, and two of the three authors submitted more than once. Roy Tong submitted AgentMeasure as #2801 and #3068. OsherElhadad submitted cap-evolve (#3073) and Context Guru (#3072) on the same day, and #3072 passed validation while #3073 did not.

## 6. Feature Requests & Roadmap Signals
There are no feature requests for the list itself. The submissions point to where the ecosystem is heading:
- Plugins and orchestration, such as kumi's coordinator-plus-specialists model.
- Local and alternative front ends, such as Agent Workbench, which runs the unmodified CLI in a pty and wraps it in a web UI.
- Remote, notification and voice control, such as call-me.
- Cost and usage measurement.

Seven resources are likely to be added once the maintainer reviews them: #2801, #3012, #3074, #3072, #3071, #3069, #3067 and #3066, which is eight in total. The `validation-passed` label suggests they are in good shape. That is a prediction, not something stated in the data.

## 7. User Feedback Summary
The data has no direct user complaints or satisfaction signals. Contributors are building tooling around Claude Code to address:
- Context and prompt-cache efficiency.
- Reviewing the agent's uncommitted changes, as localpr does.
- Keeping architecture rules and decisions consistent, as docs-governance does.
- Reaching Claude remotely, as call-me does.
- Guarding AI-generated code quality, as RepoGuard does with a roughly 12 ms lint.

The auto-close and duplicate pattern suggests some submitters are unsure of the template or the intake rules.

## 8. Backlog Watch
- [#2801 AgentMeasure](hesreallyhim/awesome-claude-code Issue #2801) has been open since 2026-09-10, about 25 days, with `validation-passed`. It is the longest-waiting item in today's data. It needs a maintainer decision, and it should be reconciled with the closed duplicate #3068.
- [#3012 kumi](hesreallyhim/awesome-claude-code Issue #3012) has been open since 2026-09-30, about 5 days, and has also passed validation.
- Older, untouched items may exist, but today's 24-hour window does not show them.

**Project health:** The intake pipeline is healthy, and community interest remains steady. The main constraint is that the data shows no maintainer review activity, so validated submissions are accumulating.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-10-05

## 1. Today's Overview
Awesome Agent Skills is a curated list, so its activity is almost entirely community PRs that propose new skills. In the last 24h there were no Issues and no releases. Nine PRs were updated: 6 open and 3 closed. Two PRs were opened today (#1160, #1159) and two the day before (#1158, #1157). Most of the rest are older PRs from 9–17 days ago that were touched today, which suggests a maintainer triage pass. Activity is moderate, and the list's backlog is moving.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged today. Three PRs were closed, all of which had been submitted 10–17 days ago. The data doesn't say whether they were closed with or without merging.
- [#1108](https://github.com/VoltAgent/awesome-agent-skills/pull/1108) `forjd/better-writing`: a prose-rewriting skill that removes AI-writing patterns. It was proposed for Productivity and Collaboration and carried the `[PR-in-review]` tag.
- [#1102](https://github.com/VoltAgent/awesome-agent-skills/pull/1102) `stayingapi/travel-skills`: accommodation search and pricing across Airbnb, Booking.com, Vrbo and Google Hotels. It was proposed for Specialized Domains and carried the `[PR-in-review]` tag.
- [#1066](https://github.com/VoltAgent/awesome-agent-skills/pull/1066) `beatra-ai/beatra-skills`: four marketing and media-generation skills proposed for Marketing. It was the oldest of the three, from 2026-09-18.

## 4. Community Hot Topics
No item has comment or reaction data (comments are undefined and 👍 is 0 on every PR). The best available signal is what was updated and what categories are being proposed:
- **New vendor and organization sections:** [#1160](https://github.com/VoltAgent/awesome-agent-skills/pull/1160) (Nygen Analytics, single-cell RNA-seq with Scarf) and [#1159](https://github.com/VoltAgent/awesome-agent-skills/pull/1159) (CometChat's official skills, MIT licensed, `@cometchat/skills` v5.1.0 on npm, about 2.2K installs on skills.sh). Both ask for a dedicated "Skills by X" section. This reflects a trend of vendors publishing official skills and wanting visibility.
- **Developer tooling and guardrails:** [#1157](https://github.com/VoltAgent/awesome-agent-skills/pull/1157) (RepoGuard, an AST linter that stops agents from violating architecture rules), [#1096](https://github.com/VoltAgent/awesome-agent-skills/pull/1096) (Archcore, spec-driven context for Claude Code, Cursor, Codex and Copilot) and [#1114](https://github.com/VoltAgent/awesome-agent-skills/pull/1114) (Unbrowse, agent web access through an API or remote MCP). The underlying need is control over agent behavior and persistent project context.
- **Creative and domain niches:** [#1158](https://github.com/VoltAgent/awesome-agent-skills/pull/1158) (handraw-style, hand-drawn illustration prompts).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no Issues.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. The contribution pattern suggests where the list is growing:
- Vendor-specific sections, such as Nygen Analytics and CometChat, are likely to be accepted if the repo's quality criteria are met.
- The Development and Testing category is crowded (#1157, #1114), so it may need sub-categorization.
- Specialized Domains is growing (#1158 and the closed #1102), covering science, travel and design.
- Two PRs are explicitly framed around adoption evidence (CometChat's npm and skills.sh installs). That could become an informal vetting norm.

## 7. User Feedback Summary
There are no Issues or comments to draw feedback from. Contributor behavior points to these things:
- Contributors want a listing in a high-traffic directory, and several emphasize licensing, public repos and install counts to support inclusion.
- The `[PR-in-review]` tag is applied to several PRs, which indicates a defined review workflow. Contributors can see their status.
- #1102 notes it was generated with Claude Code, so AI-assisted submissions are common.

## 8. Backlog Watch
These open PRs have been waiting longest and are tagged `[PR-in-review]`:
- [#1096](https://github.com/VoltAgent/awesome-agent-skills/pull/1096) Archcore: open since 2026-09-23 (12 days), updated today.
- [#1114](https://github.com/VoltAgent/awesome-agent-skills/pull/1114) Unbrowse: open since 2026-09-28 (7 days), updated today.

The newer PRs (#1157, #1158, #1159, #1160) haven't been reviewed yet. The numbering gaps (such as #1066 through #1096) suggest that older PRs may be sitting in the queue outside today's 24h window. The maintainers may want to check them.

**Project health:** The inflow of contributions is steady and review is active, with 3 closures today. No release, bug or issue activity was recorded. The risks are review latency of 1–2 weeks and growing category crowding.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
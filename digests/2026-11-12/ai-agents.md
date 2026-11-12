# MCP Ecosystem Digest 2026-11-12

> Issues: 16 | PRs: 11 | Projects covered: 7 | Generated: 2026-11-12 15:44 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Digest — 2026-11-12

## 1. Today's Overview
Activity was high and almost entirely maintainer-driven. 16 issues and 11 PRs were updated in 24 hours, and 10 of those 11 PRs were merged or closed. Most were filed and resolved the same day by `cliffhall`, so the v2 milestone looks like it is in a fast hardening and cleanup phase. The headline change is Streamable HTTP for all reference servers. No new releases shipped, but a Changesets "version packages" PR is open ([#5537](https://github.com/modelcontextprotocol/servers/pull/5537)), so a release looks close.

## 2. Releases
No new releases today. [#5537](https://github.com/modelcontextprotocol/servers/pull/5537) (`chore: version packages`) is open and would publish the pending changesets once merged.

## 3. Project Progress
**Features**
- [#5536](https://github.com/modelcontextprotocol/servers/pull/5536): Streamable HTTP now served from every reference server. Until now only `everything` supported it. `filesystem`, `memory` and `sequentialthinking` use the SDK's `createMcpHandler`. It closes [#576](https://github.com/modelcontextprotocol/servers/issues/576), a request open since Jan 2025 with 10 👍.
- [#5534](https://github.com/modelcontextprotocol/servers/pull/5534): memory server gets opt-in write limits (`MEMORY_MAX_ENTITIES`, `MEMORY_MAX_RELATIONS`, `MEMORY_MAX_FILE_BYTES`) and documents the linear per-write cost. Closes [#5525](https://github.com/modelcontextprotocol/servers/issues/5525).

**Fixes**
- [#5533](https://github.com/modelcontextprotocol/servers/pull/5533): `git_remote` now redacts query values and fragments in URLs, not only userinfo. Closes [#5508](https://github.com/modelcontextprotocol/servers/issues/5508).
- [#5530](https://github.com/modelcontextprotocol/servers/pull/5530): memory server releases lock files on exit and on SIGINT/SIGTERM. Closes [#5485](https://github.com/modelcontextprotocol/servers/issues/5485).
- [#5535](https://github.com/modelcontextprotocol/servers/pull/5535): sequentialthinking counts header rows toward the log box's row cap. Closes [#5526](https://github.com/modelcontextprotocol/servers/issues/5526).

**Docs and CI**
- [#5532](https://github.com/modelcontextprotocol/servers/pull/5532): `everything` README now states the whole-segment rule for `get-env` masking.
- [#5531](https://github.com/modelcontextprotocol/servers/pull/5531): stale `--db-path` comments removed from the fetch and git Dockerfiles.
- [#5529](https://github.com/modelcontextprotocol/servers/pull/5529): Dependabot sweep script scopes a hoisted npm copy by the ranges it satisfies.
- [#5528](https://github.com/modelcontextprotocol/servers/pull/5528): `mcp-interface-diff.yml` added as a dispatch-only placeholder (staged rename, step 1).
- [#4528](https://github.com/modelcontextprotocol/servers/pull/4528): CI that auto-closes new-server PRs and triages new-server issues. It enforces the policy that new servers belong in the Registry.

## 4. Community Hot Topics
- [#5508](https://github.com/modelcontextprotocol/servers/issues/5508) (6 comments): credential redaction in `git_remote`. Users expect the documented "redacted" promise to cover every part of a URL.
- [#5483](https://github.com/modelcontextprotocol/servers/issues/5483) (4 comments): stale Docker comments. This is a docs-quality signal from an external contributor.
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047) (4 comments, 3 👍): registering the reference servers in the official Registry. It is part of the move away from the old reference-server model.
- [#576](https://github.com/modelcontextprotocol/servers/issues/576) (10 👍, the most reactions): demand for Streamable HTTP. It is now resolved.
- [#5485](https://github.com/modelcontextprotocol/servers/issues/5485) (3 comments) and [#5260](https://github.com/modelcontextprotocol/servers/issues/5260) (3 comments): lock-file hygiene and Windows filesystem safety.

The underlying needs are reliable remote transport, safe handling of secrets, and clean shutdown behavior.

## 5. Bugs & Stability
Ranked by severity:
1. **Security, open:** [#5260](https://github.com/modelcontextprotocol/servers/issues/5260) — `filesystem` parent-directory swap on Windows. This is a follow-up to GHSA-53mr-w429-c597. The earlier fix covers only Linux and macOS. No fix PR yet.
2. **Security, open:** [#5520](https://github.com/modelcontextprotocol/servers/issues/5520) — `git` should refuse a Windows junction that leads outside `--repository`. It is a follow-up to GHSA-q74p-4wrc-q7w6, which was fixed in 2026.11.11. No fix PR yet.
3. **Security, fixed:** [#5508](https://github.com/modelcontextprotocol/servers/issues/5508) — credential leak through URL query or fragment. Fixed by [#5533](https://github.com/modelcontextprotocol/servers/pull/5533).
4. **Stability, fixed:** [#5485](https://github.com/modelcontextprotocol/servers/issues/5485) — stale lock files after a signal. Fixed by [#5530](https://github.com/modelcontextprotocol/servers/pull/5530).
5. **Low, fixed:** [#5526](https://github.com/modelcontextprotocol/servers/issues/5526) — log-box row cap bypass. Fixed by [#5535](https://github.com/modelcontextprotocol/servers/pull/5535).
6. **Open, upstream-blocked:** [#5176](https://github.com/modelcontextprotocol/servers/issues/5176) — the string `"null"` arrives as `None` in git arguments. It is waiting on python-sdk#3055.

## 6. Feature Requests & Roadmap Signals
- [#5538](https://github.com/modelcontextprotocol/servers/issues/5538): CORS and preflight handling for the new Streamable HTTP endpoints. This is a likely follow-up, because browser clients on localhost cannot connect without it.
- [#5525](https://github.com/modelcontextprotocol/servers/issues/5525): size caps for memory writes, already delivered as opt-in limits. Making them the default may come later.
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047): Registry registration of the reference servers.
- CI and tooling: the staged workflow rename ([#5527](https://github.com/modelcontextprotocol/servers/issues/5527), step 2) and a GitHub App for board writes ([#5061](https://github.com/modelcontextprotocol/servers/issues/5061)).

The next release will likely include Streamable HTTP, the memory limits and the security fixes, with CORS shortly after.

## 7. User Feedback Summary
Few reports came from outside the maintainers. `reservoir-cmyk` filed three reports ([#5524](https://github.com/modelcontextprotocol/servers/issues/5524), [#5525](https://github.com/modelcontextprotocol/servers/issues/5525), [#5526](https://github.com/modelcontextprotocol/servers/issues/5526)), and each was closed the same day. The reports point to these pain points:
- Documentation that does not match the code's behavior.
- Missing resource limits.
- Unclean process shutdown. The memory server report came from a Claude Desktop and agent-orchestrator setup.
- Servers that cannot be reached over HTTP.

Turnaround on external reports is excellent.

## 8. Backlog Watch
- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047): the Registry tracking issue, open since 2025-11-23, a full year.
- [#5176](https://github.com/modelcontextprotocol/servers/issues/5176): open since 2026-10-19 and blocked on the Python SDK. It needs upstream attention.
- [#5260](https://github.com/modelcontextprotocol/servers/issues/5260): a Windows security gap open since 2026-10-25.
- [#5061](https://github.com/modelcontextprotocol/servers/issues/5061): the board-automation GitHub App, open since 2026-10-07.
- [#5537](https://github.com/modelcontextprotocol/servers/pull/5537): the release PR needs a maintainer to merge it.

**Project health:** strong. Resolution is fast and security follow-ups are tracked openly. The main risks are the two open Windows path-safety issues and the CORS gap in the new HTTP endpoints.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP and Agent-Tooling Ecosystem, 2026-11-12

## 1. Ecosystem Overview

The projects covered are mostly not agents. They are the **infrastructure and distribution layer** around agents: reference MCP servers, the official registry, catalogs (Awesome MCP, Docker MCP Registry, Awesome Claude Code, Awesome Agent Skills), and the official Claude plugin directory. Almost all of the activity is inbound submissions: 141 PRs on Awesome MCP, 50 on Docker MCP Registry and 24 submission issues on Awesome Claude Code. Maintainer capacity is the common constraint. Three themes recur across projects: remote and hosted servers with OAuth, agent memory and context, and security hardening. This points to a move from "build a server" to "distribute, verify and trust a server."

## 2. Activity Comparison

Health scores are my own judgment from the digests, not figures the digests report.

| Project | Issues updated | PRs updated | Release status | Health (1–5) | Note |
|---|---|---|---|---|---|
| MCP Servers | 16 | 11 (10 merged/closed) | None; release PR #5537 open | 4.5 | Fast, maintainer-driven resolution |
| MCP Registry | 3 | 4 (all closed/merged) | None | 4 | Clear queue; #1819 stale-data bug and a 19 Nov deadline (#1778) |
| Awesome MCP Servers | 0 | 141 (127 open) | None | 3 | High volume; review comments and merge detail not visible |
| Docker MCP Registry | 1 | 50 (49 open, 1 closed) | None | 2.5 | Review throughput is the bottleneck; backlog of weeks |
| Claude Plugins (official) | 3 | 27 (16 closed/merged) | None; security-guidance 2.0.20 staged (#7094) | 4 | Responsive on security; the Verified-org policy is unclear (#7024, 26 comments) |
| Awesome Claude Code | 24 | 0 | None | 3.5 | Healthy intake; no visible curation (19 awaiting) |
| Awesome Agent Skills | 0 | 6 (5 open, 1 closed) | None | 3 | Low engagement; some review lag |

## 3. MCP Servers's Position

**Advantages**
- **Resolution speed.** 10 of 11 PRs were closed or merged within the window. Docker MCP Registry closed 1 of 50, and Awesome MCP closed 14 of 141.
- **Issue-to-fix pipeline.** External reports were fixed the same day (#5508, #5485, #5526), and security follow-ups are tracked openly.
- **Spec-level role.** It is the reference implementation that the other projects list or package. Streamable HTTP now covers every reference server (#5536).

**Technical approach differences**
- It ships *code* (TypeScript and Python servers, SDK handlers). The Registry, Docker registry and Awesome lists ship *metadata* about other people's code.
- It has stopped accepting new third-party servers (#4528 auto-closes them) and sends them to the Registry. That makes it the reference and the Registry the discovery layer.
- Security work is at the code level (path safety, redaction, lock files), where the Claude Plugins work is at the policy and hook level.

**Community size**
- By raw volume it is mid-sized: 27 items updated, against 141 PRs for Awesome MCP and 50 for Docker.
- It has the highest share of resolved work and the lowest external contribution. Most activity is from one maintainer (`cliffhall`), which is a concentration risk.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Remote and hosted servers, OAuth | MCP Servers, Docker MCP Registry, Awesome MCP | Streamable HTTP (#5536); OAuth 2.1/PKCE/DCR submissions (#6999, #5541); CORS gap (#5538); hosted servers growing on Awesome MCP |
| Security and supply chain | Servers, Registry, Plugins, Agent Skills | Windows path safety (#5260, #5520); namespace takeover on domain change (#1778); Verified-org gating (#7024); ReDoS and bare-repo hardening (#7070, #7093); MCP rug-pull defense (#1398) |
| Agent memory and context | Servers, Awesome MCP, Awesome Claude Code | Memory write limits (#5534); Firekeep and Zenod; Agent Journal and Deiko; cross-agent sharing across Claude Code, Codex and others |
| Discovery and metadata quality | Registry, Awesome lists, Docker | Description search (#1850); Glama, naming and emoji checks; empty `tools.json` with dynamic discovery |
| Cross-agent interoperability | Awesome MCP, Awesome Claude Code, Agent Skills | Claude Code with Codex, Cursor and pi; `npx skills add` |
| Review automation | Awesome MCP, Docker, Awesome Claude Code, Plugins | Label checks, validation bots, CI on SHA bumps. Auto-closes of pending items (Awesome Claude Code) lose some submissions |
| Cost and usage visibility | Awesome Claude Code | Four monitoring submissions (usage menu bar apps, GNOME extension) |

## 5. Differentiation Analysis

| Project | Focus | Primary users | Architecture and gate |
|---|---|---|---|
| MCP Servers | Reference implementations | Server authors, SDK users | Code monorepo; maintainer-gated; new servers redirected |
| MCP Registry | Canonical discovery and publishing | Publishers, clients | API service (`/v0/servers`); namespace verified by domain |
| Awesome MCP | Curated list | Developers browsing | Markdown PRs; Glama listing and bot labels required |
| Docker MCP Registry | Packaged and remote catalog | Docker Desktop users, vendors | Config PRs; increasingly listing-only remote entries |
| Claude Plugins (official) | First-party plugin directory and security plugin | Claude Code users, plugin authors | Pinned SHAs; Verified-org rule for hooks and local MCP; CI validation |
| Awesome Claude Code | Claude Code resources | Claude Code power users | Issue-form submissions with bot validation |
| Awesome Agent Skills | Skills catalog | Cross-agent skill users | PR list; narrower scope |

The main split is **gatekeeping model**. The Registry and the Plugins directory verify identity (domain, Verified org). The Awesome lists and Docker mainly check format and rely on volunteers for judgement. This difference decides how much supply-chain risk each channel carries.

## 6. Community Momentum & Maturity

- **Tier 1, very high intake:** Awesome MCP (141 PRs), Docker MCP Registry (50), Awesome Claude Code (24 new issues). Demand outruns review, so these are scaling, not stabilizing.
- **Tier 2, rapid iteration with strong delivery:** MCP Servers (v2 hardening, release PR open) and Claude Plugins (security-guidance 2.0.20 staged). Both are releasing soon.
- **Tier 3, stabilizing:** MCP Registry. Its queue is clear and its issues are few. The open risks are #1819 and the 19 Nov namespace deadline.
- **Tier 4, low engagement:** Awesome Agent Skills, with 6 PRs, no comments and a month-long review lag.

No project shipped a release today. Two are one merge away from one: MCP Servers and the security-guidance plugin.

## 7. Trend Signals

1. **Remote MCP is becoming the default.** Reference servers now serve Streamable HTTP, and Docker submissions are mostly hosted with OAuth. Developers should plan for OAuth 2.1 with DCR and for CORS. The CORS issue (#5538) shows browser clients are not yet covered.
2. **Trust is the bottleneck, more than supply.** There are many submissions and little verification. Verified-org gating, namespace locking and tool-surface freezing (#1398) all point the same way. Pin versions and check publisher identity before depending on a server.
3. **Windows parity gaps.** Open path-safety issues (#5260, #5520) and the PowerShell commit-review fix (#7076) show security tooling was built first for Linux and macOS.
4. **Memory is a crowded, unsettled category.** It appears in the reference server, the Awesome lists and the Claude Code resource list. Cross-agent portability is the differentiator to watch. Resource limits (#5534) suggest unbounded stores cause real problems.
5. **Dynamic tool discovery conflicts with static catalogs.** Empty `tools.json` entries in Docker's registry show that catalog schemas have not caught up with servers that list tools at runtime.
6. **Agent output verification.** Stop-hook claim checks and policy layers appear in the Awesome Claude Code submissions. This is an early signal of demand for guardrails on agent claims.
7. **Maintainer review capacity is the scaling limit.** Agent-authored PRs (the 🤖 labels on Awesome MCP) raise submission volume faster than review can grow. Expect more automated gating and disclosure rules.

**Caveats.** Several digests lack comment counts and merge-versus-close detail (Awesome MCP, Docker, Agent Skills). Health scores and activity tiers are inferred from a single day's data, and they reflect that day only.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest — 2026-11-12

## 1. Today's Overview
Activity in modelcontextprotocol/registry was light: 3 issues and 4 PRs were updated, with no new releases. All 4 PRs were closed or merged and none remain open, so the PR queue is clear. Two of the three issues are still open, and one is time-sensitive (a namespace lock deadline on 19 Nov). Overall health looks stable, with maintainers triaging quickly. One fix landed for a user-reported search gap.

## 2. Releases
No new releases.

## 3. Project Progress
Four PRs were closed or merged. The summaries don't say which were merged and which were closed unmerged, so the status of each is noted as given.

- **Search fix**: [PR #1850](https://github.com/modelcontextprotocol/registry/pull/1850) "fix(search): match server descriptions in registry search". It fixes [#1807](https://github.com/modelcontextprotocol/registry/issues/1807). Before this, `GET /v0/servers?search=…` matched only `server_name`. Terms that appeared only in a description never returned the server. Issue #1807 was closed the same day.
- **UI**: [PR #1573](https://github.com/modelcontextprotocol/registry/pull/1573) "fix(ui): prefer human-readable server title in registry cards". It makes the optional `server.title` the primary card heading and keeps `server.name` as a smaller secondary label. It was opened on 2026-08-25 and closed after about 11 weeks.
- **Dependencies**: Dependabot PRs [#1853](https://github.com/modelcontextprotocol/registry/pull/1853) (GitHub Actions group: pulumi/actions 7.0.0→7.1.0, docker/login-action, sigstore/cosign-installer) and [#1852](https://github.com/modelcontextprotocol/registry/pull/1852) (deploy Go dependencies: pulumi-kubernetes sdk and pulumi sdk). Both are routine maintenance.

## 4. Community Hot Topics
Comment volume is low, so there is no strong hotspot.
- [#1778](https://github.com/modelcontextprotocol/registry/issues/1778) (4 comments, the most active): the publisher of `com.getmattered/getmattered` asks to lock the `com.aiapplyd` namespace. The domain that verifies it changes owner on 19 Nov 2026. Underlying need: a way to retire or protect namespaces whose domain ownership is changing. Without one, a new domain owner could take over the old namespace and publish under it, which is a supply-chain risk. Versions 1.6.0–1.9.0 are already deprecated.
- [#1807](https://github.com/modelcontextprotocol/registry/issues/1807) (1 comment): the need for better discovery as the registry grows. Users want to find servers by function, not just by name.

## 5. Bugs & Stability
Ranked by severity:
1. **[#1819](https://github.com/modelcontextprotocol/registry/issues/1819), open, no fix PR.** The status update succeeds, but the list endpoint keeps returning stale duplicate rows. Repro: publish the same version (0.7.16) twice on different days, then publish 0.7.17. `GET /v0/servers?search=...` then returns both 0.7.16 rows with active/`isLatest` flags still set. This is a data-consistency problem that can mislead clients about which version is current.
2. **[#1807](https://github.com/modelcontextprotocol/registry/issues/1807), closed.** Search ignored descriptions. It was fixed by PR #1850.

No crashes or outages were reported.

## 6. Feature Requests & Roadmap Signals
- **Namespace locking or retirement** ([#1778](https://github.com/modelcontextprotocol/registry/issues/1778)). This has a hard deadline and could be handled manually by maintainers, but it points to a missing feature: handling domain ownership changes systematically.
- **Description search** is already fixed in the API ([#1850](https://github.com/modelcontextprotocol/registry/pull/1850)) and will likely appear in the next release.
- **Human-readable titles in cards** ([#1573](https://github.com/modelcontextprotocol/registry/pull/1573)) was closed. The summary doesn't say whether it was merged, so it is unclear whether it will ship.

## 7. User Feedback Summary
- Users struggle to discover servers unless they already know the exact name. This is the clearest pain point today.
- Publishers worry about identity and namespace security when domains change hands.
- Publishers who correct metadata by re-publishing run into version-state inconsistencies.
- Response times are good. Search issue #1807 went from report (11-06) to fix (11-11) and closure (11-12) in about 6 days.

## 8. Backlog Watch
- **[#1778](https://github.com/modelcontextprotocol/registry/issues/1778)** needs maintainer action before 19 Nov 2026, about 7 days from today. It has been open since 2026-10-31 with no recorded resolution.
- **[#1819](https://github.com/modelcontextprotocol/registry/issues/1819)** is open with no fix PR and only 1 comment. It deserves triage because of its effect on version correctness.
- **[PR #1573](https://github.com/modelcontextprotocol/registry/pull/1573)** sat for about 11 weeks before being closed. This suggests contributor PRs on UI work can wait a long time for review.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-12

Source: [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

## 1. Today's Overview
The repo is a curated list, so activity is almost entirely submission PRs. In the last 24h, 141 PRs were updated (127 open, 14 merged/closed). There were no issues and no releases. Throughput is high: PR numbers have reached about #19321, and many PRs opened today (#19311–#19321). The sample shown has no comment activity, so the review burden falls on maintainers and automation. The data lists "Comments: undefined", so the "top by comment count" ranking is not meaningful.

## 2. Releases
No new releases.

## 3. Project Progress
There is no merged-PR detail in the data. Of the 14 PRs closed or merged, the sample shows four closed ones, and the data does not say whether any were merged:
- [#17426](https://github.com/punkpeye/awesome-mcp-servers/pull/17426) google-search-console-mcp (Marketing), labeled `missing-glama`
- [#18354](https://github.com/punkpeye/awesome-mcp-servers/pull/18354) Kodecz (Multimedia Process)
- [#18648](https://github.com/punkpeye/awesome-mcp-servers/pull/18648) Audo (Multimedia Process), labeled `missing-glama`
- [#19314](https://github.com/punkpeye/awesome-mcp-servers/pull/19314) Rbm3267/postbuild. It was closed the same day it was opened, and the author opened [#19316](https://github.com/punkpeye/awesome-mcp-servers/pull/19316) for the same server. This looks like a resubmission (for example, a corrected name or placement).

## 4. Community Hot Topics
No PR has measurable comments or reactions (all 👍: 0). Themes in the new submissions:
- **Developer Tools:** [#19313](https://github.com/punkpeye/awesome-mcp-servers/pull/19313) callgraph (AST call graph for coding agents), [#19155](https://github.com/punkpeye/awesome-mcp-servers/pull/19155) meetjson, [#15952](https://github.com/punkpeye/awesome-mcp-servers/pull/15952) webhooks.cc.
- **Knowledge & Memory / agent memory:** [#19319](https://github.com/punkpeye/awesome-mcp-servers/pull/19319) Firekeep (shared memory across Claude Code, Codex, Kiro and OpenCode), [#18864](https://github.com/punkpeye/awesome-mcp-servers/pull/18864) Zenod.
- **Multimedia:** [#19317](https://github.com/punkpeye/awesome-mcp-servers/pull/19317) AutoShort and [#19318](https://github.com/punkpeye/awesome-mcp-servers/pull/19318) StoryShort.
- **Databases:** [#18586](https://github.com/punkpeye/awesome-mcp-servers/pull/18586) Karakoram, [#18688](https://github.com/punkpeye/awesome-mcp-servers/pull/18688) mapsql-mcp.
- **Vertical niches:** [#19321](https://github.com/punkpeye/awesome-mcp-servers/pull/19321) AtlasAdapt (real estate and climate), [#14839](https://github.com/punkpeye/awesome-mcp-servers/pull/14839) eudr (EU deforestation compliance), [#19311](https://github.com/punkpeye/awesome-mcp-servers/pull/19311) TryVidimusMCP (Security), [#19312](https://github.com/punkpeye/awesome-mcp-servers/pull/19312) GRIDCITY (Monitoring), [#19316](https://github.com/punkpeye/awesome-mcp-servers/pull/19316) postbuild-mcp (Marketing).

The underlying needs are discoverability for new servers, and shared memory and context for coding agents. Many hosted servers are also appearing, and several are listed in the official MCP Registry.

## 5. Bugs & Stability
No issues were reported. The following PRs have quality problems:
- [#19320](https://github.com/punkpeye/awesome-mcp-servers/pull/19320) mathguard has an empty description.
- [#19315](https://github.com/punkpeye/awesome-mcp-servers/pull/19315) xactum-client has a placeholder body ("crea la rama/PR") and a vague title.
- [#19321](https://github.com/punkpeye/awesome-mcp-servers/pull/19321) is labeled `non-github-url`, so it fails a repo convention.

## 6. Feature Requests & Roadmap Signals
There are no issues or explicit requests. Signals from the PR labels:
- Automated checks (`has-glama`/`missing-glama`, `valid-name`, `has-emoji`, `non-github-url`) are enforced. Several PRs lack a Glama listing (#19321, #19318, #19312, #19311, #19155). They probably need a Glama listing before merge.
- Many PRs are marked 🤖🤖🤖, so AI-agent-authored submissions are common and the repo expects them to be disclosed.
- Likely category growth: agent memory, developer tooling for coding agents, and hosted or remote MCP servers.

## 7. User Feedback Summary
There are no comments, so there is no direct feedback. Submitters stress self-hosting, open-source licenses (MIT or Apache-2.0), read-only safety defaults ([#18688](https://github.com/punkpeye/awesome-mcp-servers/pull/18688)), OAuth-protected hosted endpoints, and cross-agent compatibility. Some submitters show uncertainty about placement. [#19316](https://github.com/punkpeye/awesome-mcp-servers/pull/19316) explicitly notes alphabetical ordering.

## 8. Backlog Watch
Older open PRs that are still being updated and need a maintainer decision:
- [#14839](https://github.com/punkpeye/awesome-mcp-servers/pull/14839) eudr, open since 2026-09-22 (about 7 weeks).
- [#15952](https://github.com/punkpeye/awesome-mcp-servers/pull/15952) webhooks.cc, open since 2026-10-07.
- [#18586](https://github.com/punkpeye/awesome-mcp-servers/pull/18586) Karakoram, [#18688](https://github.com/punkpeye/awesome-mcp-servers/pull/18688) mapsql-mcp, and [#18864](https://github.com/punkpeye/awesome-mcp-servers/pull/18864) Zenod, all open since early November.

With 127 open PRs and about 12 new ones a day, the queue is growing. The sample shows no review comments, so triage and automated merging may be the bottleneck.

**Health assessment:** Activity is very high. Responsiveness is unclear because the data has no comments or merge details. Submission quality is uneven.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-12

## 1. Today's Overview
The registry is very active but almost entirely on the intake side. 50 PRs were updated in 24h (49 open, 1 merged/closed) against 1 updated issue, and there were no releases. Nearly every PR is a new **remote** (hosted, listing-only) server submission. Several were opened today (#6997–#7011), which suggests steady inbound volume. Throughput is the weak spot. Many PRs from early October and early November are still open and show no recorded comments, so review capacity looks like the constraint, not contributor interest.

## 2. Releases
No new releases.

## 3. Project Progress
Only 1 PR was merged or closed in the window, and the data doesn't say which one. No feature or fix progress can be attributed to it. The merge-to-submission ratio today is about 1:49.

## 4. Community Hot Topics
Comment counts are reported as `undefined` and reactions are 0 everywhere, so no item stands out on engagement. The data shows these themes:

- **Remote and OAuth servers are the norm.** Examples are [#6600 Aithon](https://github.com/docker/mcp-registry/pull/6600) (Streamable HTTP, bearer key for orders), [#5541 TestMu AI](https://github.com/docker/mcp-registry/pull/5541) (OAuth with dynamic client registration), [#6999 BillDog](https://github.com/docker/mcp-registry/pull/6999) (OAuth 2.1, PKCE, DCR), [#7002 Post Reef](https://github.com/docker/mcp-registry/pull/7002) and [#7009 Suelomio](https://github.com/docker/mcp-registry/pull/7009). Submitters want a listing in the Docker catalog without building an image.
- **Security and CVE intelligence.** [#5429 EchelonGraph](https://github.com/docker/mcp-registry/pull/5429) and [#7005 Excession Labs CVE Intelligence](https://github.com/docker/mcp-registry/pull/7005) both serve CVE, KEV and EPSS data.
- **Business and vertical SaaS.** FinOps ([#5547 Costory](https://github.com/docker/mcp-registry/pull/5547)), blockchain intelligence ([#6285 Arkham](https://github.com/docker/mcp-registry/pull/6285)), cold email ([#7003 MailBeast](https://github.com/docker/mcp-registry/pull/7003)), mailbox aggregation ([#6752 Fezola](https://github.com/docker/mcp-registry/pull/6752)), supermarket prices ([#7000 Yappman](https://github.com/docker/mcp-registry/pull/7000)), face recognition ([#7001 SightRadar](https://github.com/docker/mcp-registry/pull/7001)) and BI charts ([#7004 RegiaBI](https://github.com/docker/mcp-registry/pull/7004)).
- **Infrastructure.** [#6817 VMware Monitor](https://github.com/docker/mcp-registry/pull/6817) is one of the few local stdio, read-only submissions.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. Two things could cause review friction:
- [#7010 AutoShort](https://github.com/docker/mcp-registry/pull/7010) and [#7011 StoryShort](https://github.com/docker/mcp-registry/pull/7011) need OAuth sign-in for `tools/call`. Reviewers must be given test credentials out of band.
- [#7012 Vouch](https://github.com/docker/mcp-registry/issues/7012) points to a **private** repository. This may conflict with open-source or verifiability requirements.

## 6. Feature Requests & Roadmap Signals
- The one issue, [#7012 Vouch](https://github.com/docker/mcp-registry/issues/7012), asks to add a remote server (`space.specky.vouch/mcp`) that validates startup ideas. It was filed as an issue rather than a PR.
- Several submitters cite their **official MCP Registry** names, such as `com.arkm/mcp` and `dev.huutran.audit/website-checks`. Aligning with the upstream registry is becoming a common practice.
- Several entries ship an empty `tools.json` with dynamic tool discovery (e.g. [#7000](https://github.com/docker/mcp-registry/pull/7000), [#7005](https://github.com/docker/mcp-registry/pull/7005)). Handling of this pattern will likely need to be settled in review guidance.
- Likely near-term outcome: the simplest remote entries (public, unauthenticated, such as [#7008 HolicAudit](https://github.com/docker/mcp-registry/pull/7008)) are the easiest to approve.

## 7. User Feedback Summary
There are no comments or reactions, so direct feedback is absent. The submissions imply these needs:
- A low-friction path to publish hosted servers (no image build).
- Clear guidance on OAuth, test credentials and dynamic tool lists.
- Visibility for commercial services in the Docker catalog.

## 8. Backlog Watch
These PRs have been open for weeks with no recorded comments and need maintainer attention:
- [#5429 EchelonGraph](https://github.com/docker/mcp-registry/pull/5429), opened 2026-10-04 (about 5.5 weeks).
- [#5547 Costory](https://github.com/docker/mcp-registry/pull/5547) and [#5541 TestMu AI](https://github.com/docker/mcp-registry/pull/5541), both opened 2026-10-08.
- [#6285 Arkham](https://github.com/docker/mcp-registry/pull/6285), opened 2026-10-28.
- [#6600 Aithon](https://github.com/docker/mcp-registry/pull/6600), opened 2026-11-04.

All were updated today, probably through bot or CI activity, but none has a visible review outcome. The 49 open PRs against 1 close or merge in the window point to a growing queue. Triage automation or batch review of remote-only entries would help.

**Health assessment:** Contributor demand is high and the intake rate is steady. Review and merge throughput is the main risk to project health.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-12

Repo: anthropics/claude-plugins-official

## 1. Today's Overview
Activity is high. 27 PRs and 3 issues were updated in 24 hours, with no new releases. Most of the work is the `security-guidance` plugin hardening series from maintainer mhegazy, plus the automated SHA-bump stream from github-actions[bot]. The most active discussion is a community thread on organization verification, which blocks plugin submissions. CI and submission-flow tooling were also reworked today.

## 2. Releases
None. `security-guidance` 2.0.20 is staged in open PR [#7094](https://github.com/anthropics/claude-plugins-official/pull/7094), pending #7092 and #7093.

## 3. Project Progress
Of the 27 PRs, 16 were merged or closed and 11 remain open.

**security-guidance hardening (closed or merged):**
- [#7076](https://github.com/anthropics/claude-plugins-official/pull/7076): reviews commits and pushes made via the PowerShell tool. Fixes #7005.
- [#7072](https://github.com/anthropics/claude-plugins-official/pull/7072): reviews extra commits sent by a combined commit-and-push command.
- [#7081](https://github.com/anthropics/claude-plugins-official/pull/7081): takes the review model from one place and defaults to the newest listed.
- [#7073](https://github.com/anthropics/claude-plugins-official/pull/7073): requires the pip temp folder to be a real, user-owned folder (0700).
- [#7070](https://github.com/anthropics/claude-plugins-official/pull/7070): stops custom-rule regexes from running too long (ReDoS). A pattern like `(a+){2,}$` took 8.5 s on 28 characters.
- [#7055](https://github.com/anthropics/claude-plugins-official/pull/7055): custom rule globs can be relative to the project.
- [#7054](https://github.com/anthropics/claude-plugins-official/pull/7054): reads `yaml.load`, `torch.load` and `np.load` calls across their arguments.

**Directory and CI:**
- [#7086](https://github.com/anthropics/claude-plugins-official/pull/7086) and [#7085](https://github.com/anthropics/claude-plugins-official/pull/7085): CI now validates in-repo plugin folders, fixes the frontmatter check, and points submissions to claude.ai/directory/manage.
- [#7084](https://github.com/anthropics/claude-plugins-official/pull/7084): `claude-for-manufacturing` plugin proposal, closed.
- [#6338](https://github.com/anthropics/claude-plugins-official/pull/6338): Xcode plugin, closed. It carried over #6259 so its checks could run.

**Still open:**
- security-guidance: [#7092](https://github.com/anthropics/claude-plugins-official/pull/7092) (records and markers opened through one helper) and [#7093](https://github.com/anthropics/claude-plugins-official/pull/7093) (git runs only in ordinary checkouts, with `safe.bareRepository=explicit`).
- Automated SHA bumps: #7087–#7091 (blackrock-advisor-center, cloudinary, growthbook, rootly, streaming-skills) and #6451 (data-agent-kit).

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024), "How can an organization become Verified?"** has 26 comments and 9 👍, the most of any item. Since about 2026-11-05 the directory rejects command hooks and local MCP servers from non-Verified organizations. The need is a documented, transparent path to Verified status. The reporter says the pre-submission docs don't explain it. This is the main friction point for third-party plugin authors.
- The security-guidance PR series ([#7054](https://github.com/anthropics/claude-plugins-official/pull/7054), [#7055](https://github.com/anthropics/claude-plugins-official/pull/7055), [#7070](https://github.com/anthropics/claude-plugins-official/pull/7070)) has no comments. It references claude-code issues #99553, #86545 and #98547, so the work is driven by user reports upstream.

## 5. Bugs & Stability
Ranked by severity:
1. **Merge-commit push review re-reports old findings:** [#7043](https://github.com/anthropics/claude-plugins-official/issues/7043) (closed). `_compute_push_sweep_base` diffs from the merged-in parent's lineage, so it reviews that branch's whole divergence. The result is noisy, misleading reviews. No linked fix PR appears in today's data. The closure suggests it was resolved, but I can't confirm that from this data.
2. **Silent skip of PowerShell commits on Windows:** [#7005](https://github.com/anthropics/claude-plugins-official/issues/7005) (closed). Commits and pushes went unreviewed with no message to the user, which is a security gap. Fixed by [#7076](https://github.com/anthropics/claude-plugins-official/pull/7076).
3. **Hardening items:** ReDoS in custom regexes ([#7070](https://github.com/anthropics/claude-plugins-official/pull/7070)), pip temp folder ownership ([#7073](https://github.com/anthropics/claude-plugins-official/pull/7073)), and file/marker handling and bare-repo safety ([#7092](https://github.com/anthropics/claude-plugins-official/pull/7092), [#7093](https://github.com/anthropics/claude-plugins-official/pull/7093)). The last two are still open.

## 6. Feature Requests & Roadmap Signals
- A clear Verified-organization path ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)). The directory's submission link moved to claude.ai/directory/manage in [#7085](https://github.com/anthropics/claude-plugins-official/pull/7085)/[#7086](https://github.com/anthropics/claude-plugins-official/pull/7086), which suggests a submission-flow overhaul is underway. Updated documentation is likely.
- security-guidance 2.0.20 ([#7094](https://github.com/anthropics/claude-plugins-official/pull/7094)) is the most likely next release. It was tested on Linux, macOS and Windows and is waiting on #7092 and #7093.
- Directory growth: Xcode and manufacturing plugin submissions were closed today.

## 7. User Feedback Summary
- **Plugin authors:** frustration over the sudden Verified-only restriction on command hooks and local MCP servers. The docs lag the enforcement, and the date of the change is not clearly announced.
- **Windows users:** expect parity in security tooling across shells, such as PowerShell.
- **Security-guidance users:** want accurate, low-noise reviews (no re-reporting after merges) and more reliable custom rules (relative globs, safe regexes).

## 8. Backlog Watch
- [#6451](https://github.com/anthropics/claude-plugins-official/pull/6451): the `data-agent-kit` SHA bump has been open since 2026-10-11, about a month. Newer bump PRs opened the same day are also waiting. It may be stuck and needs a maintainer to check.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): it is open with 26 comments and needs an authoritative maintainer answer on Verified criteria and process.
- The open SHA-bump PRs (#7087–#7091) have no review activity yet. Confirm they are auto-merged or reviewed on a regular schedule.

**Project health:** high throughput, with a responsive maintainer on security fixes. The main risk is the lack of communication around Verified-org policy.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-12

## 1. Today's Overview
Activity today is almost entirely inbound resource submissions. 24 issues were updated, and 0 PRs and 0 releases were recorded. 19 issues are open and 5 are closed. Of the 5 closed issues, 3 were auto-closed because validation was still pending and 1 failed validation. The fifth is #3221, which carries both passed and failed labels. Submission volume is high: 22 of the 24 updated issues were created on 11-11 or 11-12. Nearly all have a single bot comment, so the validation pipeline is running. No human maintainer activity is visible in the data, and the PR queue is empty.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24h. The only visible progress is on the intake side:
- 19 submissions are marked `validation-passed` and wait for maintainer curation.
- [#3221 Quick Actions](https://github.com/hesreallyhim/awesome-claude-code/issues/3221) (Mods) is closed. It was created 2026-10-23, so it was touched today after about 3 weeks. Its labels show both `validation-passed` and `validation-failed`. This suggests it was re-validated or its status changed.

## 4. Community Hot Topics
No issue has more than 2 comments, and none has reactions. The one with 2 comments is #3221. All other issues have 1 comment (the validation bot) or 0. The signal is therefore in submission themes rather than discussion:
- **Usage and cost monitoring** (4 submissions, a notable cluster): [TokenPlant #3642](https://github.com/hesreallyhim/awesome-claude-code/issues/3642), [Tripmeter #3640](https://github.com/hesreallyhim/awesome-claude-code/issues/3640), [Usagebar #3637](https://github.com/hesreallyhim/awesome-claude-code/issues/3637). Two of these are macOS menu bar apps and one is a GNOME extension. The need is visibility into Claude Code usage limits.
- **Memory and context persistence** (4): [Agent Journal #3636](https://github.com/hesreallyhim/awesome-claude-code/issues/3636), [picture-diary #3627](https://github.com/hesreallyhim/awesome-claude-code/issues/3627), [Dawnmere #3624](https://github.com/hesreallyhim/awesome-claude-code/issues/3624), [Deiko #3619](https://github.com/hesreallyhim/awesome-claude-code/issues/3619). Several are cross-agent (Claude Code, Codex, pi).
- **Multi-agent and orchestration**: [spec-first #3644](https://github.com/hesreallyhim/awesome-claude-code/issues/3644), [crosscheck #3632](https://github.com/hesreallyhim/awesome-claude-code/issues/3632) (Claude Code and Codex as mutual reviewers), [Airone Giallo #3634](https://github.com/hesreallyhim/awesome-claude-code/issues/3634).
- **Safety and verification**: [aiZee #3641](https://github.com/hesreallyhim/awesome-claude-code/issues/3641) (a policy layer) and [claim-check #3629](https://github.com/hesreallyhim/awesome-claude-code/issues/3629) (a Stop hook that verifies "fixed" and "tests pass" claims).

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported, and there are no fix PRs. The only stability-related items concern the intake workflow:
- [#3628 Tisty](https://github.com/hesreallyhim/awesome-claude-code/issues/3628) failed validation and was closed. Its summary is empty, so the body may be malformed or missing the template.
- [#3635 Nexity](https://github.com/hesreallyhim/awesome-claude-code/issues/3635), [#3621 Files pane](https://github.com/hesreallyhim/awesome-claude-code/issues/3621) and [#3620 claude-code-video-studio](https://github.com/hesreallyhim/awesome-claude-code/issues/3620) were auto-closed while `validation-pending`. Possible causes are a validation timeout or a failed check. Submitters may need to resubmit.
- Some titles lack the `[Resource]:` prefix (#3641, #3632, #3628, #3619). These issues still passed validation, apart from #3628.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The category mix points to where the ecosystem is growing:
- Observability and cost tracking is the strongest cluster. A dedicated "Usage & Cost" subcategory already exists and is getting traffic.
- Cross-agent interoperability (Claude Code with Codex, Cursor, Copilot, Devin, pi) appears in #3632, #3636, #3641 and #3633.
- Other categories seeing submissions are Infrastructure and DevOps ([#3643](https://github.com/hesreallyhim/awesome-claude-code/issues/3643)), Providers and Runtime ([#3638 UEAgent](https://github.com/hesreallyhim/awesome-claude-code/issues/3638)), Creative Media ([#3639 Klad](https://github.com/hesreallyhim/awesome-claude-code/issues/3639)), Testing, Configuration ([#3631](https://github.com/hesreallyhim/awesome-claude-code/issues/3631)) and Documentation and Learning ([#3630](https://github.com/hesreallyhim/awesome-claude-code/issues/3630)).
- Expect the next list update to add entries in these categories. Usage & Cost is likely to grow the most.

## 7. User Feedback Summary
Contributors are not reporting pain directly, but their projects show it:
- Users want visibility into rate and usage limits (menu bar and shell widgets).
- Agents lose state between sessions and across tools, which drives the memory and journal projects.
- There is a trust gap in agent output ("fixed", "tests pass"), which motivates claim-check and aiZee.
- Users run several accounts or agents and need to bridge them ([#3631](https://github.com/hesreallyhim/awesome-claude-code/issues/3631)).
- Some auto-closures may frustrate submitters who get no clear reason.

## 8. Backlog Watch
The data covers only 24h of updates, so older backlog cannot be assessed fully. Items needing maintainer attention:
- 19 open `validation-passed` submissions (#3619 to #3644) are awaiting curation. This is a large single-day batch.
- [#3221 Quick Actions](https://github.com/hesreallyhim/awesome-claude-code/issues/3221), open since 2026-10-23, shows conflicting validation labels. A maintainer should confirm whether it should be listed.
- Auto-closed submissions ([#3635](https://github.com/hesreallyhim/awesome-claude-code/issues/3635), [#3621](https://github.com/hesreallyhim/awesome-claude-code/issues/3621), [#3620](https://github.com/hesreallyhim/awesome-claude-code/issues/3620)) may need a clearer resubmission path.
- [#3638 UEAgent](https://github.com/hesreallyhim/awesome-claude-code/issues/3638) has 0 comments, unlike the others. The bot may have missed it, so it is worth checking.

**Health assessment:** Intake is healthy and submissions are strong. Curation throughput, with no PRs and no releases, is the likely bottleneck.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-12

## 1. Today's Overview
The project is a curated catalog with no code or releases, so activity shows up almost entirely as community submission PRs. In the last 24h there were 0 issues and 6 PRs updated (5 open, 1 closed). Four of the PRs were opened on 11-11 or 11-12, which indicates steady inbound submission volume. No PR has comments or reactions, and none was merged today. Activity is healthy on the intake side, but review and merge throughput is unclear.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged today. One was closed:
- [#1182](https://github.com/VoltAgent/awesome-agent-skills/pull/1182) — `hunxuankai/wxpusher-integration` (WxPusher notification integration, Productivity and Collaboration). It was opened on 2026-10-10 and closed on 11-12 after about a month. The data does not say whether it was rejected or superseded, so the reason is unknown.

## 4. Community Hot Topics
No item has comments or 👍 reactions, so there are no hot topics by engagement. By submission themes, today's new PRs cluster as follows:
- **Security and integrity:** [#1398](https://github.com/VoltAgent/awesome-agent-skills/pull/1398) `mcp-surface-integrity` freezes an MCP server's tool surface and verifies it on each call, to catch rug-pull-style changes. This reflects growing demand for MCP supply-chain safeguards.
- **Marketing and SEO:** [#1394](https://github.com/VoltAgent/awesome-agent-skills/pull/1394) `Illyism/seo-skills` is a bundle of 17 SEO skills from a repo with 890+ stars.
- **Specialized domains:** [#1397](https://github.com/VoltAgent/awesome-agent-skills/pull/1397) adds three skills (klad, klad-drawing, klad-pixel).
- **Decision-making:** [#1396](https://github.com/VoltAgent/awesome-agent-skills/pull/1396) `game-theory-for-decisions` is an 8-step procedure for decisions that depend on other actors' choices.
- **Off-scope:** [#1395](https://github.com/VoltAgent/awesome-agent-skills/pull/1395) "Claude to PDF" is a Chrome extension, not a skill, so it likely doesn't fit the list's criteria.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported. There were no issues, and no fix PRs.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Implicit signals from the submissions:
- Demand for security-oriented skills for MCP and agents (#1398).
- Growth in domain-specific skills and multi-skill bundles (#1397, #1394).
- Submitters are targeting existing categories (Development and Testing, Marketing, Specialized Domains), so the taxonomy appears adequate. Nothing here suggests a structural change.

## 7. User Feedback Summary
There is no direct feedback today. Submission patterns show that contributors value inclusion in the list as a discovery channel. Install commands such as `npx skills add` and MIT licensing are highlighted in the submissions. One submitter (#1395) appears to have misread the list's scope, so the contribution guidelines may need clearer wording on what counts as a skill.

## 8. Backlog Watch
- The #1182 closure shows a roughly one-month turnaround on an older submission, which suggests some review lag.
- The PR numbers range up to #1398, while this window shows only 5 open PRs, all from the last two days. The data does not cover older open PRs, so the full backlog size can't be assessed. Maintainers should check for older unreviewed submissions.
- [#1395](https://github.com/VoltAgent/awesome-agent-skills/pull/1395) likely needs a quick scope-based close or redirect.
- Security-relevant [#1398](https://github.com/VoltAgent/awesome-agent-skills/pull/1398) merits a careful review before listing.

**Project health:** Intake is strong, and engagement and visible merge activity are low today.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
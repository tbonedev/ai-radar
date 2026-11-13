# MCP Ecosystem Digest 2026-11-13

> Issues: 8 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-13 15:03 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-13

## 1. Today's Overview
Activity is low and almost entirely housekeeping or test-hardening. There were 8 issues updated, all of them open, and no PRs or releases. Two of the issues are automated Dependabot-sweep chores. Five are test-coverage proposals from one contributor, `reservoir-cmyk`. One is an external benchmarking outreach. The repo has no merge throughput today, and the v2 line is the focus of all labeled work.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24h, so no features or fixes landed. The open work is queued on `v2/main`: the two dependency bumps (#5545, #5546) are issues filed by a bot, and the fixes are to be written by hand.

## 4. Community Hot Topics
No item has any comments or 👍 reactions, so there is no organic discussion signal today. The most notable theme is a batch of characterization-test proposals from `reservoir-cmyk`. They target the reference servers `memory`, `everything` and `sequentialthinking`:
- [#5541](https://github.com/modelcontextprotocol/servers/issues/5541): pins that a schema-invalid record in `memory` cannot be removed by any tool.
- [#5540](https://github.com/modelcontextprotocol/servers/issues/5540): adds a 5,000-entity round-trip correctness test for `memory`.
- [#5539](https://github.com/modelcontextprotocol/servers/issues/5539): adds tests for the `memory` data file being destroyed from outside the process.
- [#5542](https://github.com/modelcontextprotocol/servers/issues/5542): tests that `everything`'s `requestState` expires after its 600-second TTL.
- [#5543](https://github.com/modelcontextprotocol/servers/issues/5543): documents that `sequentialthinking` has no per-item size cap. Only the item count is capped.

The underlying need is to lock in current behavior of the reference implementations. That would protect them during v2 and the "Modern (2026-07-28)" protocol era.

## 5. Bugs & Stability
No crashes or regressions were reported. The items closest to stability concerns, ranked by severity:
1. **Security advisories (dependencies):**
   - [#5545](https://github.com/modelcontextprotocol/servers/issues/5545): `@hono/node-server` needs a bump to `2.1.6` in `package-lock.json` for 2 advisories (GHSA-jpvv-r467-5p4w, GHSA-qv5m-9pm6-hqp3).
   - [#5546](https://github.com/modelcontextprotocol/servers/issues/5546): `soupsieve` needs a bump to `4.0.0` in `src/fetch/uv.lock` for 1 advisory (GHSA-mmhr-3c5m-f64f).
   - No fix PRs exist yet.
2. **Latent behavior gaps (explicitly not defect claims):**
   - [#5541](https://github.com/modelcontextprotocol/servers/issues/5541): a schema-invalid record in `memory` can't be deleted through any tool.
   - [#5543](https://github.com/modelcontextprotocol/servers/issues/5543): `sequentialthinking` has no per-item size cap.

## 6. Feature Requests & Roadmap Signals
All requests are test additions rather than product features. They are labeled `enhancement` and `v2`, so they fit the v2 stabilization work:
- [#5539](https://github.com/modelcontextprotocol/servers/issues/5539), [#5540](https://github.com/modelcontextprotocol/servers/issues/5540), [#5541](https://github.com/modelcontextprotocol/servers/issues/5541), [#5542](https://github.com/modelcontextprotocol/servers/issues/5542), [#5543](https://github.com/modelcontextprotocol/servers/issues/5543).
- [#5544](https://github.com/modelcontextprotocol/servers/issues/5544) is an outside proposal from `cetech-ai` for a "Verity" benchmark slot for the Fetch server. It cites a screen of 16,341 MCP servers with an 81.5% pass rate. It is promotional and unlikely to affect the roadmap.

The test proposals are small and self-contained, so they are the likeliest to be accepted as PRs. The dependency fixes are the most likely to ship soon.

## 7. User Feedback Summary
There is no direct end-user feedback today. The contributor input is from someone who has read the docs, implementation and tests side by side. They are asking for documented guarantees: TTL expiry, behavior at scale, handling of corrupted storage, and input size limits. Maintainers can read this as demand for clearer contracts in the reference servers.

## 8. Backlog Watch
All items were created or updated within the last day, so none are long-stale. The ones that need maintainer attention are:
- [#5545](https://github.com/modelcontextprotocol/servers/issues/5545) and [#5546](https://github.com/modelcontextprotocol/servers/issues/5546): security-related and should be triaged promptly.
- [#5544](https://github.com/modelcontextprotocol/servers/issues/5544): needs a maintainer decision on whether to engage with third-party benchmarking.
- The five test-proposal issues need a maintainer decision on scope before the contributor invests in PRs.

**Health assessment:** The repo is quiet but orderly. Automation (the daily Dependabot sweep) and contributors are producing structured, labeled issues. Today there was no merge activity and no release.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-11-13

## 1. Ecosystem Overview
The MCP ecosystem has split into three layers: the reference implementation (Servers), the discovery and distribution layer (Registry, Docker MCP Registry, the two Awesome lists), and the agent-host plugin layer (Claude Plugins, Awesome Claude Code, Awesome Agent Skills). Intake is high at the catalog layer, where submission queues run into the dozens or hundreds. Merge and review capacity is the shared bottleneck. Development work is concentrated on trust and security: auth, key handling, supply-chain safety, and verified publishers. Agent commerce (x402 payments) and remote hosted servers are the fastest-growing submission categories.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers | 8 (all open) | 0 | None | 6/10: quiet and orderly, but no merges. Two security-advisory dependency bumps are unaddressed |
| MCP Registry | 6 (4 closed, 2 open) | 7 (6 closed or merged, 1 open) | None | 8/10: responsive and fixing bugs within days |
| Awesome MCP Servers | 0 | 136 (125 open, 11 closed or merged) | None | 5/10: strong intake, review is the bottleneck |
| Docker MCP Registry | 1 | 50 (49 open, 1 closed) | None | 5/10: no merges, older PRs stale |
| Claude Plugins (Official) | 5 | 26 (15 open, 11 closed or merged) | None | 7/10: very active, but the Verified-org policy is unclear and several bugs are open |
| Awesome Claude Code | 9 (all open) | 0 | None | 6/10: validation passes, but nothing was processed |
| Awesome Agent Skills | 1 | 3 (all open) | None | 5/10: low volume, no maintainer response visible |

The health scores are my own qualitative estimates from the digests, not measured values. The digests don't always separate merged from closed-unmerged PRs, so closure counts are approximate.

## 3. MCP Servers' Position
**Advantages**
- It is the reference implementation, so its behavior sets the contract that the Registry, Docker catalog and plugin hosts build on.
- Its work is labeled `v2` and relates to the "Modern (2026-07-28)" protocol era. That gives it a clear roadmap focus that the catalog projects lack.
- Its backlog is small and new: all 8 items were updated in the last day.

**Technical approach differences**
- Servers holds code and tests for reference servers (`memory`, `everything`, `sequentialthinking`, `fetch`). Registry is a metadata and auth service. Docker's catalog packages entries. The Awesome lists only link to entries.
- The contributor input is mostly characterization tests, which lock in behavior rather than add features.

**Community size**
- It is the smallest by volume today: 0 PRs against 136 (Awesome MCP Servers), 50 (Docker) and 26 (Claude Plugins).
- Its engagement is also minimal, with no comments or reactions. Its influence comes from being the specification-adjacent reference, not from daily volume.

**Weakness:** zero merge throughput in the window, and no fix PRs yet for the two security advisories (#5545, #5546). Compare Registry, which resolved comparable bugs within days.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Auth, identity and trust | Registry, Claude Plugins, Docker | Key rotation and HTTP/DNS proof verification (Registry #1849, #1847); private keys kept out of `argv` (#1734); Verified-organization policy (Plugins #7024); OAuth dynamic client registration failures (Plugins #17) |
| Supply-chain security | Servers, Awesome MCP Servers, Awesome Agent Skills, Plugins | Dependency advisories (Servers #5545, #5546); pkgguard (Awesome MCP #15578); instruction-only skills as a trust signal (Skills #1399); SHA-pinned plugin bumps and the `security-guidance` series (Plugins) |
| Remote or hosted servers | Docker, Registry, Awesome MCP Servers | Many remote streamable-HTTP submissions with no source to review (Docker #7061); needs for guidance and tooling |
| Agent commerce | Awesome MCP Servers, Docker | x402 servers (#19412, #19403); Agent Tools discovery (Docker #7056) |
| Versioning and lifecycle clarity | Registry, Servers | `isLatest` versus deprecated (#1819); prerelease validation (#1855); a stated TTL, size and storage contract for reference servers (#5539–#5543) |
| Submission-queue throughput | Awesome MCP Servers, Docker, Awesome Claude Code, Awesome Agent Skills | Duplicates and blank templates add triage load; automated validation and batch merging are suggested |
| Memory and orchestration | Awesome Claude Code, Awesome MCP Servers | Persistent cross-session memory (Memgit, Ken); model routing and spec-first workflows |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference server correctness and v2 | Server and SDK authors | Code repository with tests and dependency locks |
| MCP Registry | Canonical publishing, search and auth | Publishers and client authors | API service (`/v0/servers`) and the `mcp-publisher` CLI |
| Awesome MCP Servers | Broad curated index | Discoverers and tool vendors | Markdown list with Glama-based automated labeling |
| Docker MCP Registry | Containerized and remote catalog entries | SaaS vendors and Docker users | PR-per-server manifests |
| Claude Plugins | Plugin marketplace, channels and security hooks | Claude Code users and plugin authors | Marketplace with SHA-pinned entries, bot bumps and a Verified-organization policy |
| Awesome Claude Code | Claude Code resources | Claude Code power users | Issue-form submissions with bot validation |
| Awesome Agent Skills | Skill listings | Skill authors and agent users | PR and issue submissions |

The main contrast is between executable surfaces that enforce policy (Registry auth, Plugins' Verified-org rules) and list-style surfaces where quality depends on maintainer review.

## 6. Community Momentum & Maturity
- **Tier 1, high volume (intake-limited):** Awesome MCP Servers (136 PRs), Docker MCP Registry (50 PRs, none merged), Claude Plugins (26 PRs).
- **Tier 2, rapidly iterating with real fixes:** MCP Registry and Claude Plugins. Registry closed or merged 6 of 7 PRs in the window. Plugins is shipping the `security-guidance` 2.0.x series.
- **Tier 3, quiet or stabilizing:** MCP Servers (test hardening, v2 prep), Awesome Claude Code (9 validated, unprocessed submissions), Awesome Agent Skills (4 items, none processed).
- **Maturity:** Registry and Servers are moving toward formal contracts, in the form of documentation, validators and tests. The Awesome lists and Docker catalog are mature in format but strained in operations.

## 7. Trend Signals
1. **Trust is becoming the main product feature.** Verified publishers, signed proofs, key rotation, dependency advisories and instruction-only skills all point the same way. Agent developers should plan for provenance checks.
2. **Remote hosted MCP servers are overtaking local containers in new submissions** (Docker, Registry). Developers should design for OAuth and streamable HTTP, and expect friction around dynamic client registration.
3. **Agents are becoming economic actors.** x402 payment and discovery entries show up in two separate catalogs.
4. **Persistent memory and cost-aware orchestration** (model routing, quota tracking) recur across the Claude-focused lists.
5. **Multi-session and always-on use** puts pressure on hooks and channels (hook timeouts under load, Telegram topics, Discord threads, iMessage self-chat).
6. **Curation does not scale linearly.** Duplicates, blank templates and long review tails show that automated gating is needed. Teams relying on these lists for discovery should treat inclusion as a weak quality signal.
7. **Behavioral contracts matter.** Requests for documented TTLs, size caps and corruption handling suggest that reference servers are becoming dependencies in production.

**Caveat:** these digests cover a single 24-hour window. Comment counts are missing for several projects, and merged versus closed-unmerged is not distinguished in some. Treat the activity and health comparisons as indicative, not definitive.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Project Digest, 2026-11-13

## 1. Today's Overview
The registry showed moderate, healthy maintenance activity in the last 24h. 6 issues were updated (4 closed, 2 open) and 7 PRs were updated (6 closed or merged, 1 open). There were no new releases. Most activity was clearing the backlog: a cluster of auth, search, and docs fixes landed or closed. Two new issues, #1855 and #1857, were filed today. #1855 already has a fix PR open. Maintainer responsiveness looks good, since the fixes for several bugs filed in the past few weeks were resolved within days.

## 2. Releases
No new releases.

## 3. Project Progress
Closed or merged PRs (the data doesn't distinguish merged from closed-without-merge, so check each one):
- **Search:** [#1850](https://github.com/modelcontextprotocol/registry/pull/1850) makes `GET /v0/servers?search=…` match server descriptions as well as `server_name`. It fixes [#1807](https://github.com/modelcontextprotocol/registry/issues/1807), which is now closed.
- **Auth, key rotation:** [#1849](https://github.com/modelcontextprotocol/registry/pull/1849) verifies against every published MCPv1 proof record, not just the first. Signatures from a second key published during rotation were previously rejected.
- **Auth, resilience:** [#1847](https://github.com/modelcontextprotocol/registry/pull/1847) retries HTTP auth verification fetches once on transient failures (connection or read errors, 408, 429, 5xx) within a 15s overall deadline.
- **Publisher security:** [#1734](https://github.com/modelcontextprotocol/registry/pull/1734) adds `--private-key-file` and `MCP_PRIVATE_KEY` for DNS/HTTP login, so the key stays out of process arguments. It addresses [#1704](https://github.com/modelcontextprotocol/registry/issues/1704), which is closed.
- **Docs:** [#1854](https://github.com/modelcontextprotocol/registry/pull/1854) clarifies that deprecation doesn't remove `isLatest`, so clients must check lifecycle status separately. It stems from [#1819](https://github.com/modelcontextprotocol/registry/issues/1819).
- **UI:** [#1573](https://github.com/modelcontextprotocol/registry/pull/1573) shows `server.title` as the card heading, with `server.name` as secondary. It was open since August.

## 4. Community Hot Topics
Comment counts are low everywhere, with no reactions. The most discussed items:
- [#1819](https://github.com/modelcontextprotocol/registry/issues/1819) (3 comments): after a duplicate version publish, the list endpoint returned stale rows with `isLatest` set. It was resolved by documentation (#1854), not a behavior change. That suggests clients want an unambiguous "currently active" signal.
- [#1679](https://github.com/modelcontextprotocol/registry/issues/1679) (2 comments): HTTP domain auth failed signature verification despite a matching Ed25519 key. It is closed, probably through the auth fixes (#1847 and #1849), though the data doesn't confirm a link.
- [#1807](https://github.com/modelcontextprotocol/registry/issues/1807) (1 comment): search didn't cover descriptions. The underlying need is discovery by function rather than by name.

## 5. Bugs & Stability
Ranked by severity:
1. **[#1855](https://github.com/modelcontextprotocol/registry/issues/1855) (open):** valid prerelease versions such as `19.0.0-experimental.1`, `2.1.0-hotfix.1` and `1.4.0-linux-x64` are rejected as `version-looks-like-range`. `looksLikeVersionRange` treats an `x` in the prerelease tag as a wildcard. The fix PR [#1856](https://github.com/modelcontextprotocol/registry/pull/1856) is open and ready for review. It limits the wildcard check to the part before the first `-`.
2. **[#1679](https://github.com/modelcontextprotocol/registry/issues/1679) (closed):** HTTP auth signature verification failure.
3. **[#1819](https://github.com/modelcontextprotocol/registry/issues/1819) (closed):** the stale `isLatest` flag after duplicate publishes is clarified in the docs. The data suggests the behavior itself wasn't changed.
4. **[#1807](https://github.com/modelcontextprotocol/registry/issues/1807) (closed):** description search, fixed in #1850.

## 6. Feature Requests & Roadmap Signals
- Key input for CI publishing ([#1704](https://github.com/modelcontextprotocol/registry/issues/1704)) is delivered through #1734. It is likely to ship in the next `mcp-publisher` release.
- Description search (#1850) is likely to reach the next registry deploy.
- [#1857](https://github.com/modelcontextprotocol/registry/issues/1857) asks for deprecation of all versions of `io.github.mrhy7176/cloudgpu-mcp` after a GitHub account rename. Authentication for the old namespace is no longer possible. It points to a gap: there's no self-service way to migrate or deprecate a namespace after a rename, so a maintainer-assisted or admin process may be needed.
- The prerelease validator fix (#1856) is a probable quick win.

## 7. User Feedback Summary
- **Security-conscious CI users** don't want secrets in `argv`.
- **Publishers** are hitting friction with HTTP/DNS auth, especially around key rotation and transient fetch failures.
- **Version semantics** (duplicates, latest versus deprecated, prerelease tags) are confusing for both publishers and client authors.
- **Discoverability** needs search beyond names.
- Windows users on newer OpenSSL (#1679) hit signature problems.

## 8. Backlog Watch
The 24h window doesn't show much long-stalled work. Items that need attention:
- [#1857](https://github.com/modelcontextprotocol/registry/issues/1857): a new request that needs a maintainer to act, since the owner can't authenticate. Namespace-rename cases may recur, so a documented policy would help.
- [#1856](https://github.com/modelcontextprotocol/registry/pull/1856) / [#1855](https://github.com/modelcontextprotocol/registry/issues/1855): a quick review and merge would unblock publishers of prerelease versions.
- [#1573](https://github.com/modelcontextprotocol/registry/pull/1573) was open about 11 weeks before closing, and it is unclear whether it was merged. Several community PRs from the same contributor (Shanmukh-l33t) were handled within a day or two, which is a good sign.

**Health assessment:** responsive, with small, focused fixes and low open-issue volume. The main risk is auth-flow friction.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Project Digest — 2026-11-13

## 1. Today's Overview
Awesome MCP Servers is a curated list, so activity is almost entirely contributor PRs that add entries. Today 136 PRs were updated (125 open, 11 merged/closed). There were 0 issues and 0 releases. Throughput is high on the intake side, and the open count suggests maintainers are not clearing the queue as fast as submissions arrive. Many of the PRs shown were created today (e.g. #19411, #19412, #19410, #19409, #19408). The oldest shown date back to July 2026 (#10952, #11145), which indicates a long review tail.

## 2. Releases
No new releases.

## 3. Project Progress
Only 11 PRs were merged or closed, and the data shows details for just one:
- [#19407](https://github.com/punkpeye/awesome-mcp-servers/pull/19407) was closed, a duplicate of [#19408](https://github.com/punkpeye/awesome-mcp-servers/pull/19408). Both add SmartMobileHouse/regon-mcp (a Polish GUS REGON business register server) to Data Platforms. The author appears to have resubmitted, and the second is still open.

The data does not say which of the other closures were merges. No feature or fix work is reported, because this repo only tracks list entries.

## 4. Community Hot Topics
Comment counts came through as `undefined` and every PR shows 0 👍, so ranking by engagement isn't possible. The list is ordered by update time, so the themes below come from the PR content:
- **Media and creative tooling:** [#19411](https://github.com/punkpeye/awesome-mcp-servers/pull/19411) (MyMusik), [#19161](https://github.com/punkpeye/awesome-mcp-servers/pull/19161) (deAPI), [#18149](https://github.com/punkpeye/awesome-mcp-servers/pull/18149) (agentic-video), [#19410](https://github.com/punkpeye/awesome-mcp-servers/pull/19410) (CityEngine text-to-3D), [#17632](https://github.com/punkpeye/awesome-mcp-servers/pull/17632) (NovaSolver CAE).
- **Agents that act on machines and infrastructure:** [#19282](https://github.com/punkpeye/awesome-mcp-servers/pull/19282) (macOS computer use), [#18602](https://github.com/punkpeye/awesome-mcp-servers/pull/18602) (Anabolic process manager), [#16311](https://github.com/punkpeye/awesome-mcp-servers/pull/16311) (Nerdit PaaS), [#11145](https://github.com/punkpeye/awesome-mcp-servers/pull/11145) (VMware family).
- **Agent payments (x402):** [#19412](https://github.com/punkpeye/awesome-mcp-servers/pull/19412) (vet402 seller checks) and [#19403](https://github.com/punkpeye/awesome-mcp-servers/pull/19403) (a pay-per-square wall using $1 USDC on Base). Both point to agents paying for services.
- **Memory, discovery and security:** [#19406](https://github.com/punkpeye/awesome-mcp-servers/pull/19406) (Ken), [#19409](https://github.com/punkpeye/awesome-mcp-servers/pull/19409) (mcpfinder), [#15578](https://github.com/punkpeye/awesome-mcp-servers/pull/15578) (pkgguard, which blocks hallucinated or squatted package installs).

## 5. Bugs & Stability
No issues were reported and no bugs are visible. The only quality signals are the automated labels:
- `missing-glama`: [#19410](https://github.com/punkpeye/awesome-mcp-servers/pull/19410), [#19405](https://github.com/punkpeye/awesome-mcp-servers/pull/19405), [#19403](https://github.com/punkpeye/awesome-mcp-servers/pull/19403). The submission has no Glama listing yet.
- `merge-conflict`: [#15578](https://github.com/punkpeye/awesome-mcp-servers/pull/15578), open since 2026-10-03.
- `duplicate`: [#19405](https://github.com/punkpeye/awesome-mcp-servers/pull/19405).

## 6. Feature Requests & Roadmap Signals
There are no feature requests. Contributors' choice of categories gives some signals:
- The proposed Finance & Fintech entry and the x402 server point to agent-commerce becoming a recurring category.
- [#19405](https://github.com/punkpeye/awesome-mcp-servers/pull/19405) shows existing entries being updated in place as servers add capabilities (Firecrawl Alexandria).
- Several submissions use the 🤖🤖🤖 marker in the title, which looks like an agent-authored-PR convention. The data doesn't confirm what it means.

No change to the repo's structure or rules is evident.

## 7. User Feedback Summary
There are no issue comments or reviews to draw on. Submitters cite what they value: Glama scores or badges, alphabetical placement, local-first operation (stdio, `npx`, `uvx`), and permissive licenses. Several disclose that they built the tool ([#10952](https://github.com/punkpeye/awesome-mcp-servers/pull/10952), [#18149](https://github.com/punkpeye/awesome-mcp-servers/pull/18149)), so promotional intent is likely common. Any satisfaction signal would be speculation.

## 8. Backlog Watch
Older PRs updated today that still need maintainer attention:
- [#11145](https://github.com/punkpeye/awesome-mcp-servers/pull/11145): VMware family refresh, open since 2026-07-29 and flagged `manual-review`.
- [#10952](https://github.com/punkpeye/awesome-mcp-servers/pull/10952): nine AdKit ad-platform servers, open since 2026-07-26.
- [#15578](https://github.com/punkpeye/awesome-mcp-servers/pull/15578): pkgguard, open since 2026-10-03 and blocked by a merge conflict that the author needs to resolve.
- [#16311](https://github.com/punkpeye/awesome-mcp-servers/pull/16311) (2026-10-13), [#17632](https://github.com/punkpeye/awesome-mcp-servers/pull/17632) (2026-10-26) and [#18149](https://github.com/punkpeye/awesome-mcp-servers/pull/18149) (2026-10-31): all carry the `has-glama` label and the valid-name label, but are still unmerged after 2 to 4 weeks.

**Health assessment:** Contributor interest is strong, with 125 open PRs. Review and merge capacity is the bottleneck. Only 11 PRs were closed or merged against 136 updated. Duplicate submissions such as #19407 and #19408 add to the triage load.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-13

## 1. Today's Overview
The registry shows very high contribution activity: 50 PRs updated in 24h (49 open, 1 closed) and 1 issue updated, with no new releases. Activity is dominated by new server submissions, many of them remote (hosted, streamable-HTTP) servers. Maintainer throughput looks like the bottleneck. Nothing was merged in the window, and several submissions from mid/late October are still open. Comment counts are not reported in the data (shown as "undefined"), so "hot topics" below are inferred from recency and age rather than discussion volume.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged today. The only closed PR was [#7064](https://github.com/docker/mcp-registry/pull/7064) "Add cityengine mcp". It was an unfilled issue template and was closed within the day. It was replaced by the properly filled [#7066](https://github.com/docker/mcp-registry/pull/7066) from the same author (cgajs). This is a normal self-correction and not a project problem.

## 4. Community Hot Topics
Per-item comment and reaction data is missing (all 0 👍, comments undefined). Themes that stand out:

- **Remote MCP servers are the dominant pattern.** Examples: [#7066 CityEngine](https://github.com/docker/mcp-registry/pull/7066), [#7063 jizhang](https://github.com/docker/mcp-registry/pull/7063), [#7062 Formgong](https://github.com/docker/mcp-registry/pull/7062), [#7061 TodoHub](https://github.com/docker/mcp-registry/pull/7061), [#7057 Systra Tools](https://github.com/docker/mcp-registry/pull/7057), [#7055 MagicPixel](https://github.com/docker/mcp-registry/pull/7055), [#7054 ShowMRR](https://github.com/docker/mcp-registry/pull/7054), [#7053 OffSeq Threat Radar](https://github.com/docker/mcp-registry/pull/7053). Vendors want a presence in the Docker catalog without shipping container images.
- **Batch submissions by one author.** TarasShyn opened three at once: [#7060 Flowsery](https://github.com/docker/mcp-registry/pull/7060), [#7059 RedReplier](https://github.com/docker/mcp-registry/pull/7059) and [#7058 AdaptlyPost](https://github.com/docker/mcp-registry/pull/7058). This suggests commercial SaaS vendors treat the registry as a distribution channel.
- **Agent-ecosystem discovery:** [#7056 Agent Tools](https://github.com/docker/mcp-registry/pull/7056) covers x402/MCP/A2A discovery, a sign of agent-commerce interest.
- **Compute and infrastructure for agents:** [#6472 cloudgpu-mcp](https://github.com/docker/mcp-registry/pull/6472), a local containerized server.
- **Niche local servers:** [#5754 GridPin](https://github.com/docker/mcp-registry/pull/5754) (offline geocoding) and [#6704 ArchLang](https://github.com/docker/mcp-registry/pull/6704).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. One process-quality concern: [#7065 ProductGuru](https://github.com/docker/mcp-registry/pull/7065) and the closed #7064 kept the blank template body. This points to template-compliance issues and not to defects in the registry.

## 6. Feature Requests & Roadmap Signals
- [#7012 Vouch](https://github.com/docker/mcp-registry/issues/7012) is a request to add a remote server (`space.specky.vouch/mcp`). Its repository is **private**, which likely conflicts with the registry's open-source requirement. Expect it to need clarification or be declined.
- Several submissions point to the official MCP Registry (e.g. [#7054](https://github.com/docker/mcp-registry/pull/7054), [#7053](https://github.com/docker/mcp-registry/pull/7053)). This suggests demand for syncing or cross-listing with it.
- Some authors cite the `servers/close` header-token pattern ([#7062](https://github.com/docker/mcp-registry/pull/7062)), showing that remote-server conventions are becoming de facto standards. Formal docs or tooling for remote and hosted entries are a plausible next step.

## 7. User Feedback Summary
- Contributors are mostly SaaS vendors listing hosted products. Categories include analytics, social posting, invoicing, job applications, UI components, security intelligence and pixel art.
- Pain points inferred from the submissions:
  - Remote servers have no source repository to review. [#7061](https://github.com/docker/mcp-registry/pull/7061) links to a docs-only repo.
  - Test credentials are needed for authenticated servers. [#7054](https://github.com/docker/mcp-registry/pull/7054) states explicitly that none are needed.
  - Some authors disclose AI-assisted preparation, as in [#6704](https://github.com/docker/mcp-registry/pull/6704).
- No direct satisfaction or dissatisfaction feedback was captured.

## 8. Backlog Watch
These are the oldest open submissions that were touched today and likely need maintainer review:
- [#5754 GridPin](https://github.com/docker/mcp-registry/pull/5754): opened 2026-10-16, about 4 weeks old.
- [#6054 GetMattered](https://github.com/docker/mcp-registry/pull/6054): opened 2026-10-24.
- [#6105 PixelFlow](https://github.com/docker/mcp-registry/pull/6105): opened 2026-10-26.
- [#6151 Zovo Invoice](https://github.com/docker/mcp-registry/pull/6151): opened 2026-10-27.
- [#6472 cloudgpu-mcp](https://github.com/docker/mcp-registry/pull/6472): opened 2026-11-02.
- [#6704 ArchLang](https://github.com/docker/mcp-registry/pull/6704): opened 2026-11-06.
- [#7012 Vouch](https://github.com/docker/mcp-registry/issues/7012): a private-repo question that needs an early maintainer decision.

**Health assessment:** Demand and contributor interest are strong, with 49 open PRs and about 20 or more new submissions per day. Review and merge capacity is the visible constraint. Recommended maintainer actions are:
1. Triage and batch-review the older PRs.
2. Add automated template and requirements checks for blank-template PRs.
3. Publish clear guidance for remote-server submissions.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-11-13

## 1. Today's Overview
Activity is high. 5 issues and 26 PRs were updated in 24 hours. The PR stream is dominated by `mhegazy`'s `security-guidance` hardening series and by automated SHA bumps from `github-actions[bot]`. No releases shipped. 11 PRs were merged or closed (about 42%), and 15 remain open. The community conversation centers on the Verified-organization policy change (#7024). The data does not distinguish merged PRs from closed-unmerged ones, so the progress counts below are approximate.

## 2. Releases
No new releases.

## 3. Project Progress
The data lists 11 merged/closed PRs, but the top-20 view shows only some of them.

- **security-guidance 2.0.20 prep:** #7092 (one helper opens the review records and markers), #7093 (run git only in ordinary checkouts, with `safe.bareRepository=explicit`) and #7094 (version bump to 2.0.20) are all closed. #7094 was to be merged after #7092 and #7093. Its description reports test passes on Linux (1689), macOS (1650) and Windows x64 (1486).
- **Marketplace housekeeping:** #7095 removes the retired `airwallex-dev` entry. The `airwallex-agentos` entry is unchanged.
- **Bot bumps closed:** #7099 and #6816 (both `aikido`) are closed. The #6816 bump had been open since 2026-10-20 and was superseded by #7099. #7099 is itself closed, so the state of aikido's SHA is unclear.
- **Rejected:** #7112 (hookify `UserPromptSubmit` timeout 10s → 30s) was closed the day it was opened. The data doesn't say why. It targets a real symptom: the hook dying under heavy load, observed with 14 concurrent agent sessions at load average ~80.

## 4. Community Hot Topics
- **[#17](https://github.com/anthropics/claude-plugins-official/issues/17), Slack MCP plugin auth fails (34 comments, 👍 43).** The error is "does not support dynamic client registration". It was opened in December 2025, closed today, and is the most-reacted item. Many users hit the same OAuth limitation in remote MCP servers.
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024), How does an organization become Verified? (27 comments, 👍 10).** Since about 2026-11-05 the directory rejects command hooks and local MCP servers from non-Verified organizations. The reporter says the docs and pre-submission checklist don't explain the path to Verified status. Plugin authors need a documented process.
- **[#836](https://github.com/anthropics/claude-plugins-official/issues/836), Telegram supergroup topic routing (7 comments, 👍 2).** Users want several Claude Code sessions under one bot, which today means one bot per project.

## 5. Bugs & Stability
Ranked by severity:
1. **Policy-induced breakage, [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024):** non-Verified orgs can no longer publish plugins with command hooks or local MCP servers. No fix PR is linked, and the open question is documentation or process.
2. **[#4503](https://github.com/anthropics/claude-plugins-official/issues/4503), iMessage self-chat silently dropped:** this hits the normal iPhone case, where the self-chat handle is a phone number and the account identity is an email. It contradicts the README promise that self-chat bypasses access control. No fix PR is visible.
3. **security-guidance false negatives and false positives:**
   - [#7101](https://github.com/anthropics/claude-plugins-official/pull/7101): braces in custom globs such as `*.{ts,tsx}` match nothing.
   - [#7104](https://github.com/anthropics/claude-plugins-official/pull/7104): `git \` with `commit` or `push` on the next line is never reviewed.
   - [#7103](https://github.com/anthropics/claude-plugins-official/pull/7103): a failed commit review can leave a push unreviewed.
   - [#7105](https://github.com/anthropics/claude-plugins-official/pull/7105): text files renamed to code names are not read in full.
   - [#7108](https://github.com/anthropics/claude-plugins-official/pull/7108): the `review_ms` metric is truncated on rows with more than 20 keys.
   - [#7107](https://github.com/anthropics/claude-plugins-official/pull/7107): `page.$eval` and similar code trigger false `eval()` warnings.
   - [#7106](https://github.com/anthropics/claude-plugins-official/pull/7106): on Windows, the edit hook waits on App Installer's `python3` alias.
   All of these have open fix PRs.
4. **[#7112](https://github.com/anthropics/claude-plugins-official/pull/7112), hookify timeout under load:** the fix was closed, so the underlying issue may remain.

## 6. Feature Requests & Roadmap Signals
- **Telegram topic routing ([#836](https://github.com/anthropics/claude-plugins-official/issues/836)):** the open Telegram PR [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048), a poller lifecycle fix plus reply/forward context, is a draft. It touches the same plugin but doesn't address topics.
- **Discord per-thread mention policy ([#1626](https://github.com/anthropics/claude-plugins-official/issues/1626)):** `requireMentionInThread` is requested for multi-agent channels. Only 1 comment so far.
- **Likely next:** more `security-guidance` releases. A bump after 2.0.20 is probable, given the volume of open PRs. The channel plugins (Telegram, Discord, iMessage) show steady demand for multi-session and multi-agent use, but none has a committed fix.

## 7. User Feedback Summary
- Authors are confused by the Verified-organization policy, and it blocks plugins with hooks or local MCP servers.
- Channel-plugin users run Claude as an always-on or multi-project agent, and they hit routing and access-control limits (Telegram topics, Discord threads, iMessage self-chat).
- Remote-MCP users are held up by OAuth dynamic client registration, as in the Slack case.
- Heavy multi-session users report hook timeouts under load.
- Security-guidance users meet both noisy warnings on ordinary JavaScript and missed reviews on unusual command forms.

## 8. Backlog Watch
- [#836](https://github.com/anthropics/claude-plugins-official/issues/836): Telegram topic routing, open since 2026-03-20. It has no maintainer resolution.
- [#1626](https://github.com/anthropics/claude-plugins-official/issues/1626): Discord thread mention policy, open since 2026-04-28.
- [#4503](https://github.com/anthropics/claude-plugins-official/issues/4503): iMessage self-chat bug, open since 2026-07-25. It silently drops messages.
- [#7024](https://github.com/anthropics/claude-plugins-official/issues/7024): needs an official maintainer answer and a documentation update.
- [#7100](https://github.com/anthropics/claude-plugins-official/pull/7100): the auto-close workflow for non-member PRs is open. Once merged, it will close all outside PRs, so outside contributors should use the documented submission path instead.
- Open bot SHA bumps ([#7109](https://github.com/anthropics/claude-plugins-official/pull/7109) box, [#7110](https://github.com/anthropics/claude-plugins-official/pull/7110) govtribe, [#7111](https://github.com/anthropics/claude-plugins-official/pull/7111) pinecone) are routine, but they need a reviewer to merge.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-13

## 1. Today's Overview
Awesome Claude Code (hesreallyhim/awesome-claude-code) had a quiet, submission-only day. No PRs were updated and no releases shipped. Nine issues were updated, all open, all labeled `validation-passed` and `resource-submission`. This is typical for a curated "awesome list": activity is community-driven and the bottleneck is maintainer review, not code. The healthy part is that the automated validation step is passing every submission. The risk is a growing pile of unreviewed, unmerged submissions, given that no PRs were processed today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24h, so no list entries were added or removed. Nine submissions (#3644–#3651 and #3612) are queued and awaiting maintainer action.

## 4. Community Hot Topics
Engagement is flat: every issue has 1 comment (most likely the validation bot) and 0 👍. No single issue stands out, so the useful signal is the category mix of submissions.

| Theme | Issues | Underlying need |
|---|---|---|
| Agent Orchestration / SDLC | [#3651 mr (claude-model-routing)](https://github.com/hesreallyhim/awesome-claude-code/issues/3651), [#3647 AID](https://github.com/hesreallyhim/awesome-claude-code/issues/3647), [#3644 spec-first](https://github.com/hesreallyhim/awesome-claude-code/issues/3644) | Structured, phase-gated workflows (discovery → implementation) and per-step model routing to control cost and quality |
| Memory & Context Persistence | [#3612 Memgit](https://github.com/hesreallyhim/awesome-claude-code/issues/3612), [#3645 ThisDamnThing](https://github.com/hesreallyhim/awesome-claude-code/issues/3645) | Durable, versioned, cross-session (and cross-tool, including Codex) memory |
| Observability & Monitoring | [#3648 QuotaRing](https://github.com/hesreallyhim/awesome-claude-code/issues/3648) | Usage and quota visibility, as a native macOS app |
| Providers, Runtime & Integration | [#3650 Sniptide](https://github.com/hesreallyhim/awesome-claude-code/issues/3650) | A self-hostable pastebin exposed through MCP |
| Mods | [#3649 claude-grammar](https://github.com/hesreallyhim/awesome-claude-code/issues/3649) | Per-prompt English checking with a small Haiku call |
| Start Here | [#3646 Google Maps Scraper Kit](https://github.com/hesreallyhim/awesome-claude-code/issues/3646) | Ready-to-use task kits (note that the category fit looks questionable) |

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. No fix PRs are needed.

## 6. Feature Requests & Roadmap Signals
No requests for changes to the list itself. The ecosystem signals from the submissions are:
- Orchestration and SDLC plugins are the largest cluster (3 of 9).
- Memory tooling is the second (2 of 9).
- Cost and quota awareness shows up in both QuotaRing and model routing.
- Cross-tool support is emerging (TDT covers Claude Code and Codex).

## 7. User Feedback Summary
Submitters want better spec-driven discipline, cost control, persistent context, and lightweight quality-of-life mods. There is no explicit satisfaction or dissatisfaction feedback in the data. Possible curation concerns:
- [#3646](https://github.com/hesreallyhim/awesome-claude-code/issues/3646) is filed under "Start Here" but is a Google Maps scraper kit, so the category may not match.
- [#3648](https://github.com/hesreallyhim/awesome-claude-code/issues/3648) links to a `-releases` repo, which suggests a closed-source binary distribution, so it may need extra scrutiny.

## 8. Backlog Watch
- [#3612 Memgit](https://github.com/hesreallyhim/awesome-claude-code/issues/3612) is the oldest item in today's set (created 2026-11-11), still open with validation passed.
- The issue numbers run to #3651, and all nine items above are unprocessed. The full backlog older than 24h is not visible in this data, so a maintainer should check for older submissions.
- No PRs are open in the window, so the review and merge path is entirely maintainer-driven. Batch-processing the validated submissions would keep the queue from growing.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-13

## 1. Today's Overview
Project activity is low-to-moderate: 1 issue and 3 pull requests were updated in the last 24 hours, with no releases. All four items are community skill submissions, so the repo is functioning as a curated listing intake queue. Nothing was merged or closed today, so the maintainers' review throughput is the main health signal to watch. There were no comments or reactions on any item.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. All 3 updated PRs are open and awaiting review:
- [#1402](https://github.com/VoltAgent/awesome-agent-skills/pull/1402): adds `thedesignproject/agentic-design-systems` to Community Skills → Development and Testing.
- [#1401](https://github.com/VoltAgent/awesome-agent-skills/pull/1401): adds `nodemaven/skills` (six skills covering proxy setup, Python SDK, account API, SERP Maven, benchmarking and troubleshooting).
- [#1399](https://github.com/VoltAgent/awesome-agent-skills/pull/1399): adds `StumbleBots/stumblebots-skills` (five instruction-only skills for one-person businesses).

## 4. Community Hot Topics
No item has comments or 👍 reactions, so there are no hot threads today. Themes across the submissions:
- **Trust and safety positioning:** #1399 stresses that its skills are instruction-only (no scripts to trust), wait for user approval, and ship with sample runs. Submitters appear to be responding to concerns about supply-chain risk in agent skills.
- **Vertical and commercial niches:** #1401 (proxy and scraping tooling), #1400 (livestream-to-short-video clipping) and #1399 (small business) show growth beyond developer tooling.
- **Design and engineering workflows:** #1402 (agentic design systems).

## 5. Bugs & Stability
No bugs, crashes or regressions reported today. There are no fix PRs.

## 6. Feature Requests & Roadmap Signals
- [#1400](https://github.com/VoltAgent/awesome-agent-skills/issues/1400): a request to list `avisii1680769-cell/livestream-clip-editor`, an automated video editing engine that turns 1–4 hour livestreams into ~60s clips for TikTok, Douyin and WeChat Channels. It is a submission through the issue route rather than a PR. If the maintainers accept issue-based submissions, it would add a media and short-video category. Its marketing-style claim ("under 10 seconds") would warrant verification before inclusion.
- The submission mix suggests growing demand for categories beyond "Development and Testing", such as business and marketing, media, and data and proxy tooling. The maintainers could consider adding these sections.

## 7. User Feedback Summary
There is no direct user feedback because no comments exist. The submissions indicate that:
- Contributors want visibility in the curated list as a distribution channel for their skills.
- Authors increasingly document licensing (MIT, public repos) and provide a `SKILL.md` and sample runs, which suggests the repo's contribution guidelines are being followed.
- Mixed submission formats (issue vs. PR) suggest the contribution flow could be clearer.

## 8. Backlog Watch
The data covers only the last 24 hours and gives no age information for older items. Based on what was provided:
- [#1399](https://github.com/VoltAgent/awesome-agent-skills/pull/1399) is the oldest open item here (created 2026-11-12, one day old). It needs a first review.
- [#1400](https://github.com/VoltAgent/awesome-agent-skills/issues/1400), [#1401](https://github.com/VoltAgent/awesome-agent-skills/pull/1401) and [#1402](https://github.com/VoltAgent/awesome-agent-skills/pull/1402) are new, with no maintainer response yet.
- Item numbers have reached about #1402, so the queue likely grows steadily. A triage or label-based workflow, or batch merging of vetted skills, could keep response times short.

**Health assessment:** Inbound interest is steady, but no merges or maintainer comments were visible today. The data is too limited to judge review latency.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# MCP Ecosystem Digest 2026-11-28

> Issues: 28 | PRs: 14 | Projects covered: 7 | Generated: 2026-11-27 17:10 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest, 2026-11-28

## 1. Today's Overview
Activity was high but concentrated on one event: the **v2.6.0 security release**. All 14 PRs updated in the last 24h were merged or closed, and none remain open. Of the 28 issues, 25 were closed. Most of those closures were a cleanup of 16 "Withdrawn" duplicate issues from `ShieldPi1` (filed 2026-11-08). The release fixes eight advisories across `mcp-server-git`, `mcp-server-fetch` and `@modelcontextprotocol/server-memory`. Project health looks good: maintainers turned advisories into fixes, reviews and a release in about one day. Two flaky memory-server tests and one new, untriaged advisory remain.

## 2. Releases
**[v2.6.0](https://github.com/modelcontextprotocol/servers/issues/5681)** (tracker: #5681) fixes eight vulnerabilities in three servers. It also completes two fixes that v2.5.0 left open.

Upgrade targets:
- `mcp-server-git` to **2026.11.27**
- `@modelcontextprotocol/server-memory` to **2.2.2**
- `mcp-server-fetch` to **2026.11.27**
- On Windows, also upgrade `server-filesystem`. The release notes are truncated in the data, so I can't give the exact version.

Python CalVer stamps for `fetch`, `git` and `time` moved from 2026.11.18 to 2026.11.27 ([PR #5682](https://github.com/modelcontextprotocol/servers/pull/5682)). No breaking changes appear in the data. Treat the upgrade as mandatory for anyone running the git server with `--repository` or the fetch server with robots.txt enforcement.

## 3. Project Progress
Eight fix PRs, each paired with an advisory issue, were closed today:
- **Git server (6):** [#5677](https://github.com/modelcontextprotocol/servers/pull/5677) (alternates rewrite), [#5673](https://github.com/modelcontextprotocol/servers/pull/5673) (`.git` pointer retargeting), [#5675](https://github.com/modelcontextprotocol/servers/pull/5675) (env-var expansion in `repo_path`), [#5672](https://github.com/modelcontextprotocol/servers/pull/5672) (Git LFS running repo-configured programs), [#5679](https://github.com/modelcontextprotocol/servers/pull/5679) (`git_merge` overwriting ignored files), [#5674](https://github.com/modelcontextprotocol/servers/pull/5674) (`git_remote` redaction bypass).
- **Fetch server:** [#5678](https://github.com/modelcontextprotocol/servers/pull/5678) closes the robots.txt backslash and path-parameter gaps, an incomplete fix for GHSA-3rxj-6jhw-qfv7.
- **Memory server:** [#5676](https://github.com/modelcontextprotocol/servers/pull/5676) fixes the `saveGraph` temp-file race.

Release mechanics:
- [#5633](https://github.com/modelcontextprotocol/servers/pull/5633): version packages.
- [#5682](https://github.com/modelcontextprotocol/servers/pull/5682): Python version stamps.
- [#5685](https://github.com/modelcontextprotocol/servers/pull/5685): `v2/main` merged into `main`.

Test and housekeeping:
- [#5684](https://github.com/modelcontextprotocol/servers/pull/5684) fixes the flaky Windows lock test ([#5683](https://github.com/modelcontextprotocol/servers/issues/5683)).
- The v2.4.0 rollup PRs [#5517](https://github.com/modelcontextprotocol/servers/pull/5517) and [#5480](https://github.com/modelcontextprotocol/servers/pull/5480) were closed unmerged, as planned.

## 4. Community Hot Topics
Engagement was low: no item has more than 2 comments or any 👍 reactions. The release was driven by maintainers rather than the community. Notable threads:
- [#5681](https://github.com/modelcontextprotocol/servers/issues/5681) (2 comments): the v2.6.0 release tracker. It shows a repeatable process of audit, version PRs, merge PR and ledger.
- [#5663](https://github.com/modelcontextprotocol/servers/issues/5663) (2 comments, open): proposes extending the `AGENTS.md` GitHub pacing rule to expensive reads, such as listing the whole project board once per batch. This points to heavy agent-assisted maintenance running into GitHub's secondary rate limits.
- The 16 withdrawn issues ([#5489](https://github.com/modelcontextprotocol/servers/issues/5489) to [#5505](https://github.com/modelcontextprotocol/servers/issues/5505)) were automated duplicates of #5487, #5488, #5491 and #5492. They cited a wrong CVE ID. This shows a need to guard against bot-generated report spam.

## 5. Bugs & Stability
Advisories fixed today, ranked by severity (all severities were verified):
1. **High:** [#5664](https://github.com/modelcontextprotocol/servers/issues/5664) (GHSA-6663-fm5v-gqm5). Git LFS runs programs named in a repository's own config. This breaks the server's promise not to run repo-configured programs. Fixed in [#5672](https://github.com/modelcontextprotocol/servers/pull/5672).
2. **Medium:**
   - [#5669](https://github.com/modelcontextprotocol/servers/issues/5669): concurrent alternates rewrite reads objects outside `--repository`. Fixed in #5677.
   - [#5665](https://github.com/modelcontextprotocol/servers/issues/5665): `--repository` root retargeted via `.git` pointer. Fixed in #5673.
   - [#5667](https://github.com/modelcontextprotocol/servers/issues/5667): `repo_path` expands env vars and errors leak their values. Fixed in #5675.
   - [#5666](https://github.com/modelcontextprotocol/servers/issues/5666): `git_remote` credential redaction bypass. Fixed in #5674.
   - [#5668](https://github.com/modelcontextprotocol/servers/issues/5668): memory `saveGraph` temp-file race can change permissions on a file outside the memory path. Fixed in #5676.
3. **Low:**
   - [#5671](https://github.com/modelcontextprotocol/servers/issues/5671): `git_merge` overwrites ignored files. Fixed in #5679.
   - [#5670](https://github.com/modelcontextprotocol/servers/issues/5670): robots.txt bypass via backslash and path parameters. Fixed in #5678.

Open stability items:
- [#5680](https://github.com/modelcontextprotocol/servers/issues/5680): the memory test "keeps a lock held longer than staleMs fresh" is flaky on slow runners. The waiter sometimes acquires the lock before the long holder finishes. No fix PR yet.
- [#5683](https://github.com/modelcontextprotocol/servers/issues/5683): the related Windows flake is closed via #5684.

The flakiness is in test timing. Whether the lock logic itself is affected is not clear from the data.

## 6. Feature Requests & Roadmap Signals
There are no user feature requests today. The roadmap signals are process-related:
- [#5663](https://github.com/modelcontextprotocol/servers/issues/5663) will likely land soon as a documentation change to `AGENTS.md`. It is low-risk and maintainer-authored.
- The memory server has had a series of file-lock fixes (#5565 is referenced, plus #5680 and #5683). Expect more hardening of the lock and test suite in the next release.
- The git server saw six advisories in one cycle. The next release is likely to include further hardening of `--repository` confinement.

## 7. User Feedback Summary
Almost no direct user feedback appears in this window. Indirect signals:
- Security reporters are actively probing the git server's `--repository` confinement and credential redaction.
- The v2.5.0 fixes were incomplete in two places, so the robots.txt check and one other area needed follow-ups. Users should expect regression-style follow-ups after security patches.
- The reporter behind the duplicate bot issues said they were filed in error. Maintainers dealt with the noise quickly.

## 8. Backlog Watch
- [#5661](https://github.com/modelcontextprotocol/servers/issues/5661) (GHSA-8gp2-88xj-43hp): a private vulnerability report from `Teycir`, created 2026-11-26, is still in `triage` with no comments. It needs a maintainer to assess severity, and it will likely feed the next release.
- [#5680](https://github.com/modelcontextprotocol/servers/issues/5680): a flaky memory test with no fix PR. It could cause CI noise.
- [#5663](https://github.com/modelcontextprotocol/servers/issues/5663): an open process improvement. It matters more as agent-driven maintenance grows.
- Nothing in the data is an old, long-unanswered item. All open items were created within the last two days.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-11-28

Note: the "AI agent ecosystem" here is the MCP tooling and distribution layer, not agent frameworks. Several figures below are partial, because comment counts were undefined in some sources and some lists were truncated samples.

## 1. Ecosystem Overview
The ecosystem is moving from building MCP servers to securing, distributing and curating them. Reference code (MCP Servers) and the official registry are in a hardening phase. Security advisories, input validation and abuse limits drive their work. Third-party catalogs (Awesome MCP Servers, Docker MCP Registry, Awesome Agent Skills) take in submissions faster than maintainers can review them. Plugin and skill distribution (Claude Plugins, Agent Skills) is the newer layer. It is quieter, and it shows early problems with version pinning and cross-harness compatibility. Awesome Claude Code had no activity in the last 24 hours.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release status | Health (my judgment) |
|---|---|---|---|---|
| MCP Servers | 28 (25 closed) | 14 (all merged/closed) | v2.6.0 (eight advisories fixed) | **Strong**: fast fixes, with 1 untriaged advisory and 1 flaky test open |
| MCP Registry | 2 | 6 closed/merged, plus several open | v1.8.17 and v1.8.18 | **Strong**: fast maintainer work, but external PRs wait weeks |
| Awesome MCP Servers | 0 | 484 (363 open, 121 merged/closed) | None | **Strained**: high volume, review backlog growing |
| Docker MCP Registry | 0 | 50 (47 open, 3 merged/closed) | None | **Strained**: no visible maintainer activity |
| Claude Plugins (official) | 3 (all open) | 1 (closed, from Feb 2026) | None | **Weak**: slow triage, outdated pin affecting Windows users |
| Awesome Agent Skills | 0 | 12 (9 open, 3 closed) | None | **Moderate**: low volume, thin review |
| Awesome Claude Code | 0 | 0 | None | **Dormant** (no data) |

The health scores are my qualitative judgment from the digests. They are not computed metrics.

## 3. MCP Servers's Position
**Advantages**
- It is the only project in the set that closes issues and ships fixes in a one-day cycle (advisory, then fix PR, then release). Eight fix PRs were closed and all open PRs were resolved.
- It has the clearest release discipline: a tracker (#5681), version PRs, a branch merge and a ledger.
- It is the reference implementation. The registry and catalogs depend on its behavior, so its security posture sets the baseline for the rest.

**Technical approach differences**
- MCP Servers ships code (git, fetch, memory, filesystem), so its risk is vulnerabilities in the code itself, such as path confinement, credential redaction and race conditions.
- The registry handles metadata and validation (URLs, metadata size, ownership checks). Its risk is abuse of the publish path.
- The catalogs and skills lists are curated pointers, so their risk is review capacity and submission quality.

**Community size**
- Community engagement is low: no item had more than 2 comments or any 👍. The release was maintainer-driven. Awesome MCP Servers (484 PRs) and Docker MCP Registry (50 PRs) show much larger contributor traffic, although it is submissions, not discussion.
- External security reporters are active. Sixteen automated duplicate "Withdrawn" issues show a need to guard against bot-generated report spam.

## 4. Shared Technical Focus Areas

| Need | Projects | Detail |
|---|---|---|
| Input validation and confinement | MCP Servers, MCP Registry | `--repository` escapes, env-var expansion, robots.txt bypass (Servers); loopback, private and IPv6 URL rejection (Registry) |
| Abuse limits | MCP Servers, MCP Registry | Spam and duplicate reports; the 4 KiB metadata cap and the cap of 16 ownership checks per publish |
| Review capacity and triage automation | Awesome MCP Servers, Docker MCP Registry, Awesome Agent Skills, Claude Plugins | 363 and 47 open PRs, 9 unreviewed PRs, 9.5-month-old PR; submitters ask for or imply validation checks (Glama, license, `SKILL.md`) |
| Remote and hosted servers | Docker MCP Registry, Awesome MCP Servers, MCP Registry | Remote streamable-HTTP entries with OAuth 2.1 and PKCE, plus remote URL validation |
| Supply-chain trust | MCP Registry, Claude Plugins | Tool-signature fingerprinting (Registry #82, 40 comments); stale marketplace pin (#6963) |
| Cross-harness compatibility | Claude Plugins, Awesome Agent Skills | `asyncRewake` warnings in other harnesses; skills listed as working across Claude Code, Cursor, Codex and Copilot |
| CI and test reliability | MCP Servers, MCP Registry | Flaky memory-lock tests; flaky key fetch |

## 5. Differentiation Analysis
- **Target users:**
  - MCP Servers: developers who run MCP servers locally.
  - MCP Registry: publishers and client builders.
  - Docker MCP Registry: vendors who want a listing for hosted products, who are mostly commercial.
  - Awesome MCP Servers and Awesome Agent Skills: tool authors who want visibility.
  - Claude Plugins: Claude Code users, with some non-Claude harness users.
- **Architecture:**
  - Servers and the Registry are executable or API systems with advisories and releases.
  - The catalogs are Git-based PR queues with label-driven validation (`has-glama`, `merge-conflict`).
  - Plugins pin marketplace commits, which makes freshness a maintenance task.
- **Governance:** The Registry and Servers have strong maintainer-driven control. The catalogs depend on volunteer or small-team review.

## 6. Community Momentum & Maturity
- **Tier 1, rapid iteration:** MCP Servers and MCP Registry. They have releases, closed advisories and active maintainers. The Registry's external PRs (#1818, #1868, #1869, #1924) still wait 9 days to 3 weeks.
- **Tier 2, high intake and queue pressure:** Awesome MCP Servers (about 20 new PRs per day at the top of the ID range) and Docker MCP Registry (about 20 new PRs in one day). Neither shows maintainer activity in the data.
- **Tier 3, low or slow:** Awesome Agent Skills (12 PRs and thin review), Claude Plugins (3 open issues, the oldest open since 2026-10-31) and Awesome Claude Code (no activity).
- **Stabilizing:** the MCP Servers git server after six advisories in one cycle, though more hardening is likely.

## 7. Trend Signals
1. **Security is now the main work in MCP.** Reference servers and the registry are fixing confinement, SSRF-adjacent validation and credential leaks. Treat MCP servers as an untrusted code boundary. Pin versions, and upgrade `mcp-server-git` and `mcp-server-fetch` to 2026.11.27.
2. **Remote and hosted servers are growing.** The Docker catalog submissions favor remote servers with OAuth 2.1. Developers should plan for remote auth, URL validation and server metadata limits.
3. **Trust and provenance are open problems.** Tool poisoning (Registry #82, open since May 2025) and stale plugin pins show there is no complete answer yet. Expect fingerprinting and signing to become requirements.
4. **Review capacity limits ecosystem growth.** Unreviewed submissions and a spam incident show that catalogs need automated validation. Published listings are not a quality signal.
5. **Agent-assisted maintenance is spreading.** Maintainer work on `AGENTS.md` pacing rules (#5663) and `🤖🤖🤖`-tagged PRs suggest agents are heavily used. Rate limits and bot spam will increasingly be operational issues.
6. **Portability matters.** Plugins and skills are expected to work across harnesses, so avoid vendor-specific manifest fields, or document them.

**Data caveats:** comment counts were undefined for several sources, only samples of PRs were listed for the large catalogs, and merge versus close status was often unclear. The momentum tiers are therefore estimates.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest, 2026-11-28

## 1. Today's Overview
The registry is in a hardening and release-cadence phase. Two releases shipped (v1.8.17 and v1.8.18), and six PRs were closed or merged in 24 hours. Issue traffic was light, with 2 issues updated. Almost all the work comes from maintainer @rdimitrov, who focused on input validation, publish-time abuse limits and production promotion. Activity is high and security-focused, and community PRs are queuing up for review.

## 2. Releases

**[v1.8.18](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.18)**
- It enforces the publisher metadata size limit on server edits ([#1926](https://github.com/modelcontextprotocol/registry/pull/1926)).
- It promotes v1.8.17 to production ([#1925](https://github.com/modelcontextprotocol/registry/pull/1925)).
- Behavior change: edits whose publisher-provided metadata exceeds 4 KiB will now be rejected. Before, only publish enforced the limit. Publishers who update existing servers with large metadata should trim it.

**[v1.8.17](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.17)**
- It adds publish/edit-time remote URL validation and IPv6 hardening for HTTP verification ([#1470](https://github.com/modelcontextprotocol/registry/pull/1470)).
- It adds keyless GKE Workload Identity for usage jobs (#1911, #1916–#1919).
- It previews candidate production settings from main (#1913).
- It includes dependency bumps (#1922, #1923).
- Migration note: remote URLs pointing at loopback, private or link-local hosts are now rejected. Existing submissions that rely on those hosts may fail on their next edit.

No breaking API changes were declared.

## 3. Project Progress
Closed or merged today:
- [#1470](https://github.com/modelcontextprotocol/registry/pull/1470): `IsValidRemoteURL` now rejects loopback, private, link-local, special-purpose and non-decimal IPv4 hosts, plus other bypass forms. It fixes issue [#1465](https://github.com/modelcontextprotocol/registry/issues/1465), which is now closed.
- [#1926](https://github.com/modelcontextprotocol/registry/pull/1926): The 4 KiB metadata cap now applies to edits, with boundary tests at 4,096 and 4,097 bytes.
- [#1925](https://github.com/modelcontextprotocol/registry/pull/1925) and [#1927](https://github.com/modelcontextprotocol/registry/pull/1927): Production promotion to v1.8.17 and then v1.8.18.
- [#1922](https://github.com/modelcontextprotocol/registry/pull/1922) and [#1923](https://github.com/modelcontextprotocol/registry/pull/1923): Dependabot bumps for pulumi sdk 3.277.0 and actions/setup-go 7.1.0.

## 4. Community Hot Topics
- [Issue #82](https://github.com/modelcontextprotocol/registry/issues/82), "Preventing tool poisoning: save signatures of possible tool calls". It has 40 comments and 1 👍, and was updated again today. The need is supply-chain trust. Publishers would declare and fingerprint their tools, so clients and third-party scanners can detect later tampering. It's flagged "not go-live blocker" and has been open since May 2025, so the demand persists without an implementation commitment.
- [#1465](https://github.com/modelcontextprotocol/registry/issues/1465) and [#1470](https://github.com/modelcontextprotocol/registry/pull/1470): A community report, fixed by a community PR after about four months, and shipped in v1.8.17. It shows external security contributions can land.

Other PRs show no comment counts, so there's no other engagement signal.

## 5. Bugs & Stability
In rough order of severity:
1. **SSRF-adjacent validation gap.** [#1465](https://github.com/modelcontextprotocol/registry/issues/1465) covered the `IsValidRemoteURL` bypasses ([::1], 127.0.0.0/8, 0.0.0.0, private ranges). It is fixed by [#1470](https://github.com/modelcontextprotocol/registry/pull/1470) and released.
2. **Unbounded work on publish.** [#1928](https://github.com/modelcontextprotocol/registry/pull/1928) (open) caps distinct package ownership checks at 16 per server version. This guards DNS, OSV and registry lookups against abuse.
3. **Empty key body accepted.** [#1869](https://github.com/modelcontextprotocol/registry/pull/1869) (open) stops `fetchKeyOnce` from returning an empty key on a `200` with a zero-length body. It also caused a CI flake.
4. **Unpublished npm tombstones misclassified.** [#1868](https://github.com/modelcontextprotocol/registry/pull/1868) (open) treats an unpublished package as missing rather than "version missing".
5. **Edit-path metadata limit gap.** [#1926](https://github.com/modelcontextprotocol/registry/pull/1926) is fixed and released.

## 6. Feature Requests & Roadmap Signals
- [#1818](https://github.com/modelcontextprotocol/registry/pull/1818): `mcp-publisher publish --wait` retries with backoff (5s, doubling, capped at 30s) until the npm package is visible. It fixes the 400 error right after `npm publish` in CI. It is a good candidate for a near-term release once reviewed.
- [#1924](https://github.com/modelcontextprotocol/registry/pull/1924): It caches GitHub's JWKS for OIDC auth and adds timeouts. It's a performance and robustness improvement that is likely to land soon.
- [#82](https://github.com/modelcontextprotocol/registry/issues/82): Tool signature fingerprinting is a long-term item with no scheduled work.

The next release (v1.8.19 or similar) will most likely include #1928, plus possibly #1868, #1869 and #1924.

## 7. User Feedback Summary
- Publishers hit friction in CI because the registry rejects publishes until npm propagates ([#1818](https://github.com/modelcontextprotocol/registry/pull/1818)).
- Maintainers and contributors care about operational resilience: flaky auth key fetches ([#1869](https://github.com/modelcontextprotocol/registry/pull/1869)) and hot-path calls to GitHub with no caching or timeouts ([#1924](https://github.com/modelcontextprotocol/registry/pull/1924)).
- Security-minded users want stronger guarantees about what registered servers can do ([#82](https://github.com/modelcontextprotocol/registry/issues/82)).
- There is no direct satisfaction or complaint data in today's sample.

## 8. Backlog Watch
- [Issue #82](https://github.com/modelcontextprotocol/registry/issues/82) has been open for about 18 months with 40 comments. It needs a maintainer decision on scope or a design proposal.
- [#1818](https://github.com/modelcontextprotocol/registry/pull/1818) has been open since 2026-11-07, about three weeks.
- [#1868](https://github.com/modelcontextprotocol/registry/pull/1868) and [#1869](https://github.com/modelcontextprotocol/registry/pull/1869) have been open since 2026-11-19, about nine days. Both are small, targeted fixes from one external contributor and should be quick to review.
- [#1924](https://github.com/modelcontextprotocol/registry/pull/1924) is a new external PR from 2026-11-26 and has had no review activity so far.

**Health assessment:** Release velocity and security responsiveness are strong. The maintainer-authored work is merged quickly, but external PRs wait longer, so review capacity for contributors is the main gap.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-28

## 1. Today's Overview
The repo had no Issues or releases in the last 24h, but PR traffic was heavy: 484 PRs were updated (363 open, 121 merged/closed). Activity is almost entirely community submissions to the curated list. New entries arrive daily, and older open PRs (some from early October) were touched again, probably by bot labeling or contributor updates. The review queue is large, with 363 PRs open. The data shows no per-PR comment counts, so engagement can't be measured.

## 2. Releases
No new releases.

## 3. Project Progress
The data lists 121 merged/closed PRs, but none of them are in the top-20 sample. I can't say which entries were merged and which were closed unmerged. No feature or fix work shows up, since this repo is a curated list. Progress means the list's entries.

## 4. Community Hot Topics
Comment counts are `undefined` for every PR, and 👍 is 0 for all of them. I can't rank by discussion, so the items below are only the most recently active, grouped by theme.
- **Local and dev tooling:**
  - [#20951](https://github.com/punkpeye/awesome-mcp-servers/pull/20951) mcp-local-exec delegates shell tasks to a local Ollama model, with destructive-command guardrails.
  - [#20948](https://github.com/punkpeye/awesome-mcp-servers/pull/20948) prjxp does code RAG over large codebases.
  - [#20942](https://github.com/punkpeye/awesome-mcp-servers/pull/20942) obsidian-lite-mcp reads an Obsidian vault from disk.
- **Knowledge and memory:**
  - [#20947](https://github.com/punkpeye/awesome-mcp-servers/pull/20947) sop-retrieval-mcp.
  - [#20943](https://github.com/punkpeye/awesome-mcp-servers/pull/20943) Ipse.
- **Security and safety:**
  - [#20944](https://github.com/punkpeye/awesome-mcp-servers/pull/20944) Spendplane, a PII/secret-leak scanner. It's labeled `missing-glama`.
  - [#15649](https://github.com/punkpeye/awesome-mcp-servers/pull/15649) aicaudit.
- **Regional commerce:** [#20949](https://github.com/punkpeye/awesome-mcp-servers/pull/20949) adds two Angola-focused servers.
- **Finance:** [#19113](https://github.com/punkpeye/awesome-mcp-servers/pull/19113) Option Desk and Risk Desk.
- **Other categories:**
  - [#20950](https://github.com/punkpeye/awesome-mcp-servers/pull/20950) ChessVox, a Gaming entry.
  - [#20946](https://github.com/punkpeye/awesome-mcp-servers/pull/20946) free-api Media, a hosted TTS/STT/OCR server.
  - [#17598](https://github.com/punkpeye/awesome-mcp-servers/pull/17598) Pushary, human-in-the-loop for agents.

The pattern points to demand for local-first and self-hosted servers, agent memory, safety guardrails, and human approval of agent actions.

## 5. Bugs & Stability
No Issues were reported. The only quality signals are PR labels:
- `merge-conflict`: [#19738](https://github.com/punkpeye/awesome-mcp-servers/pull/19738) (MCP-Hotplug, Aggregators). The contributor must rebase.
- `missing-glama`: [#20951](https://github.com/punkpeye/awesome-mcp-servers/pull/20951), [#20945](https://github.com/punkpeye/awesome-mcp-servers/pull/20945) and [#20944](https://github.com/punkpeye/awesome-mcp-servers/pull/20944). The first has a Glama link in its summary, so the label may be stale.

[#20945](https://github.com/punkpeye/awesome-mcp-servers/pull/20945) is also not a typical single-entry add. It edits the README with "new project links and tips", which deserves a closer look.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. The labels point to process requirements: a Glama listing, a score badge or backlink in the project README, valid naming, and emoji tags such as 🏠, 🦀, 🍎 and 🐧. The recurring `🤖🤖🤖` suffix in titles looks like a convention for agent-submitted PRs. If volume keeps growing, I'd expect more automated validation or triage, but nothing in the data confirms that.

## 7. User Feedback Summary
There is no direct user feedback, because no Issues or comments appear in the data. Contributors' own descriptions show what they care about:
- Disclosing affiliation, as in [#20748](https://github.com/punkpeye/awesome-mcp-servers/pull/20748) ("I run PatentRef…").
- Listing transport (stdio or remote), license and platform.
- Following alphabetical ordering.

Some PRs are mature submissions, with Glama grades or badges (e.g. [#19738](https://github.com/punkpeye/awesome-mcp-servers/pull/19738)).

## 8. Backlog Watch
These PRs have been open the longest and were touched again today:
- [#15649](https://github.com/punkpeye/awesome-mcp-servers/pull/15649) aicaudit, created 2026-10-03.
- [#16066](https://github.com/punkpeye/awesome-mcp-servers/pull/16066) SECOND STRIKE, created 2026-10-09.
- [#17023](https://github.com/punkpeye/awesome-mcp-servers/pull/17023) Folio, created 2026-10-19.
- [#17598](https://github.com/punkpeye/awesome-mcp-servers/pull/17598) Pushary, created 2026-10-25.
- [#18339](https://github.com/punkpeye/awesome-mcp-servers/pull/18339) booksy-mcp, created 2026-11-02.
- [#18933](https://github.com/punkpeye/awesome-mcp-servers/pull/18933) FeedKeeper, created 2026-11-08.
- [#19113](https://github.com/punkpeye/awesome-mcp-servers/pull/19113) Option Desk and Risk Desk, created 2026-11-10.
- [#19738](https://github.com/punkpeye/awesome-mcp-servers/pull/19738) MCP-Hotplug, created 2026-11-17 and blocked on a merge conflict.

Some of these are 8 weeks old and still open. They already carry `has-glama` and `valid-name`, so they look ready to merge. With 363 open PRs, maintainers could batch-merge the validated ones. The `missing-glama` PRs need contributor follow-up.

**Health assessment:** Contributor interest is high, with about 20 new PRs per day at the top of the ID range. Review throughput looks like the constraint, and the backlog is growing. These numbers are only a rough guide, because the data has no comment counts and the top-20 sample isn't ranked by activity.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-28

## 1. Today's Overview
The registry saw no issue activity and no releases in the last 24 hours. PR activity was heavy: 50 PRs were updated, 47 of them still open and 3 merged or closed. Nearly all of the traffic is new third-party server submissions, and many of them are **remote** (hosted, streamable-HTTP) servers. Activity is high on the submission side. The visible data shows no maintainer review or merge activity, so throughput looks like the constraint.

## 2. Releases
No new releases.

## 3. Project Progress
Three PRs were merged or closed. The data shows only one by name:
- [#5961](https://github.com/docker/mcp-registry/pull/5961) "Add How It Spread (remote)" was **closed**. It was a no-auth, read-only remote server (`search_cases`, `get_case`, `list_mechanics`) opened on 2026-10-21. The data doesn't say whether it was merged or rejected.
- [#5793](https://github.com/docker/mcp-registry/pull/5793) "Add Posy remote MCP server" was also **closed**. It was opened on 2026-10-17 for a link-in-bio builder.

The data doesn't say whether either PR was merged or declined, so I can't say what shipped to the catalog today. The third closed or merged PR isn't in the listed items.

## 4. Community Hot Topics
Comment counts are `undefined` for every PR, and all PRs show 0 👍. That means I can't rank PRs by discussion. Themes in the submissions are more informative:
- **Batch and bulk submissions.**
  - [#7811](https://github.com/docker/mcp-registry/pull/7811) adds nine UK-trades remote servers at once (Nero Labs).
  - A single author, `mambabuilt`, filed five separate PRs for data-lookup servers: [#7818](https://github.com/docker/mcp-registry/pull/7818), [#7819](https://github.com/docker/mcp-registry/pull/7819), [#7820](https://github.com/docker/mcp-registry/pull/7820), [#7821](https://github.com/docker/mcp-registry/pull/7821) and [#7822](https://github.com/docker/mcp-registry/pull/7822). They cover Spain company data, Europages suppliers, SEC Form 4, sanctions screening and HubSpot/Salesforce partners.
- **Remote servers with OAuth 2.1.**
  - [#7827](https://github.com/docker/mcp-registry/pull/7827) (UseMo)
  - [#7823](https://github.com/docker/mcp-registry/pull/7823) (Frank AI Researcher)
  - [#7816](https://github.com/docker/mcp-registry/pull/7816) (Spreadcast)
  - [#6258](https://github.com/docker/mcp-registry/pull/6258) (Timesheet)

  This suggests vendors want a Docker catalog listing for hosted products, not just containerized open-source servers.
- **AI-agent tooling.**
  - [#7825](https://github.com/docker/mcp-registry/pull/7825) (InsightJet, UI bug finding and Playwright)
  - [#5026](https://github.com/docker/mcp-registry/pull/5026) (Portkey Admin, AI gateway control plane)
  - [#7725](https://github.com/docker/mcp-registry/pull/7725) (Matrix Agent Tools, pay-per-job agent-to-agent discovery)

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were no issues in the window, and no PR is framed as a fix. The data has no CI or validation results, so I can't assess submission build health.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Submission patterns point to a few things:
- **Remote server support is now a main path into the catalog.** Several PRs say they ship only `server.yaml`, `tools.json` and a readme. [#6039](https://github.com/docker/mcp-registry/pull/6039) mentions an "empty list for remote discovery" `tools.json`. [#7824](https://github.com/docker/mcp-registry/pull/7824) notes that closed-source remote entries are an accepted precedent.
- **OAuth 2.1 with PKCE and Dynamic Client Registration is common.** Better documentation or tooling for remote OAuth entries would likely be useful.
- Submitters are also asking for bulk and multi-server entries (#7811). A clearer policy on those would help.

These are my inferences, not stated requests.

## 7. User Feedback Summary
There is no direct user feedback in the data. From the submissions, contributors:
- Are mostly commercial vendors listing hosted services, including data lookups (finance, compliance, B2B), productivity tools (timesheets, social scheduling) and vertical or niche tools (BJJ gyms, UK trades, movies).
- Say their servers are read-only and need no authentication, probably to ease review ([#7826](https://github.com/docker/mcp-registry/pull/7826), [#7817](https://github.com/docker/mcp-registry/pull/7817), [#6039](https://github.com/docker/mcp-registry/pull/6039)).

I can't measure satisfaction.

## 8. Backlog Watch
Several PRs have waited a long time and were touched again on 11-27, with no sign of review in the data:
- [#4547](https://github.com/docker/mcp-registry/pull/4547) `mcp-graphql-enhanced` has been open since 2026-07-26, about four months.
- [#5026](https://github.com/docker/mcp-registry/pull/5026) Portkey Admin has been open since 2026-09-08, about 11 weeks.
- [#6039](https://github.com/docker/mcp-registry/pull/6039) FlickDirect Movies has been open since 2026-10-23.
- [#6258](https://github.com/docker/mcp-registry/pull/6258) Timesheet has been open since 2026-10-28.
- [#7725](https://github.com/docker/mcp-registry/pull/7725) Matrix Agent Tools has been open since 2026-11-25.

With 47 PRs open and about 20 new ones opened in one day, the review queue is likely growing. Maintainers may want to triage, for example with automated validation, batching or a clear policy for remote servers.

**Data caveat:** Comment counts were `undefined` and only 20 of 50 PRs were shown, so the hot-topic ranking and the closed/merged breakdown are partial.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest: 2026-11-28

## 1. Today's Overview
Activity was low in the last 24 hours: 3 issues updated (all open) and 1 PR updated (closed), with no new releases. Two of the three issues were opened on 2026-11-27 and have no comments yet. The closed PR is an old one from February 2026. Overall, the repo is quiet, and issue triage looks slow.

## 2. Releases
No new releases.

## 3. Project Progress
- **PR #366** (closed): [fix(ralph-loop): use env bash shebang for macOS compatibility](https://github.com/anthropics/claude-plugins-official/pull/366), by marushomurai. It changes `#!/bin/bash` to `#!/usr/bin/env bash` in `setup-ralph-loop.sh` and `stop-hook.sh`. The reason is that macOS ships Bash 3.2.57 at `/bin/bash`, which treats empty arrays as "unbound variable" under `set -u` and crashes the scripts.
  - The PR was opened 2026-02-09 and updated 2026-11-27, so it sat about 9.5 months before this update.
  - The data says "merged/closed" and doesn't show whether it was merged or closed without merging. I can't tell whether the macOS fix shipped.

## 4. Community Hot Topics
Engagement is thin across the board.
- **[#6963](https://github.com/anthropics/claude-plugins-official/issues/6963)** (`remember` plugin pin outdated) has the most engagement: 2 comments and 1 👍. It was updated 2026-11-26.
  - The underlying need is marketplace pin hygiene. Users depend on the marketplace's pinned commit, so fixes released upstream don't reach them until the pin is bumped.
- **[#7229](https://github.com/anthropics/claude-plugins-official/issues/7229)** and **[#7228](https://github.com/anthropics/claude-plugins-official/issues/7228)** have 0 comments and 0 reactions.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6963](https://github.com/anthropics/claude-plugins-official/issues/6963)**: `remember` is pinned at v0.43.1 (commit `ccd45061…`) in `.claude-plugin/marketplace.json`.
   - **Impact:** On Windows with Git Bash, the PostToolUse hook hangs until the 600 s timeout.
   - **Upstream status:** v0.43.2 fixed it on 2026-10-18, and v0.44.1 is the latest as of 2026-10-21.
   - **Fix PR:** None linked. The fix is probably a pin bump in `marketplace.json`.
   - The issue is about 4 weeks old and still open.
2. **[#7229](https://github.com/anthropics/claude-plugins-official/issues/7229)**: `code-modernization` 1.0.0 sets `"asyncRewake": true` on all six telemetry hooks in `hooks/hooks.json`.
   - **Impact:** `asyncRewake` is a Claude Code hook field. Other harnesses that read the file reject it and log a warning on every start.
   - **Severity:** Low. It's cosmetic noise, not a functional failure for Claude Code users.
   - **Fix PR:** None.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. Two signals:
- #6963 suggests a need for a more automated way to keep marketplace plugin pins current, such as bump automation or version checks.
- #7229 points to demand for cross-harness compatibility of plugin manifests. A fix could be to make the hook configs tolerant of unknown fields or to document harness-specific fields.

I can't predict from this data which of these will land in the next version.

## 7. User Feedback Summary
- **Windows users** hit real friction: a hook hanging for 600 s is a severe usability problem, and the fix existed upstream for weeks without reaching the marketplace.
- **Non-Claude-Code harness users** are consuming these plugins and see repeated warnings.
- **#7228** ([`claude plugin install frontend-design@claude-plugins-official`](https://github.com/anthropics/claude-plugins-official/issues/7228)) has an empty body and a command as its title. It looks like an install problem or a misfiled issue. The data gives no details, so it's unclear what failed.
- There's no explicit satisfaction signal in today's data.

## 8. Backlog Watch
- **[#6963](https://github.com/anthropics/claude-plugins-official/issues/6963)** needs maintainer attention. It's a known upstream fix with a likely one-line pin bump, it affects Windows users severely, and it has been open since 2026-10-31.
- **[#7228](https://github.com/anthropics/claude-plugins-official/issues/7228)** needs triage to ask for details (OS, error output, Claude Code version) or to close it.
- **[#7229](https://github.com/anthropics/claude-plugins-official/issues/7229)** is new. It should be triaged and labeled, and the maintainers should decide on a cross-harness policy for hook fields.
- **[PR #366](https://github.com/anthropics/claude-plugins-official/pull/366)** was open for about 9.5 months. This suggests a PR review backlog.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-28

## 1. Today's Overview
Activity is low-to-moderate and almost entirely submission-driven. There were 0 issues, 0 releases, and 12 PRs updated in the last 24h (9 open, 3 closed). All 12 PRs are "Add skill" submissions to the curated list, and the data shows no comments or reactions on any of them. The queue is growing faster than it is being processed: five new PRs (#1505–#1509) arrived on 2026-11-27. Maintainer throughput looks thin. Only 3 PRs were closed, and none of them shows a merge.

## 2. Releases
No new releases.

## 3. Project Progress
Three PRs were closed. The data does not say whether any were merged, so treat them as closed/not confirmed merged.
- [#1393](https://github.com/VoltAgent/awesome-agent-skills/pull/1393) `makevoid/motion-graphics-music-video-skill-noimage` (Specialized Domains, media production). It was open 16 days, from 2026-11-11 to 2026-11-27.
- [#1503](https://github.com/VoltAgent/awesome-agent-skills/pull/1503) `char5742/autotroph-verified-data` (Specialized Domains). It connects to 5 schema-verified MCP APIs (SEC EDGAR XBRL, EU TED, USAspending/SAM.gov and others). It was closed the same day it was opened.
- [#1501](https://github.com/VoltAgent/awesome-agent-skills/pull/1501) `arxhr007/ramp`, a WCAG 2.2 accessibility enforcement skill (Development and Testing). It was also closed the same day it was opened.

Same-day closures usually point to a failed submission check or a duplicate. The data doesn't give the reason.

## 4. Community Hot Topics
No PR has comments or 👍 reactions. The comment counts are reported as undefined and reactions are 0. The themes in the submissions are:
- **Development and Testing tools:** [#1508](https://github.com/VoltAgent/awesome-agent-skills/pull/1508) 100x Engineer Skill (349 stars, MIT, formal-properties-before-coding workflow). [#1507](https://github.com/VoltAgent/awesome-agent-skills/pull/1507) client-secret-leak-scanner (read-only, 109-check web security audit). [#1506](https://github.com/VoltAgent/awesome-agent-skills/pull/1506) AnySearch. [#1505](https://github.com/VoltAgent/awesome-agent-skills/pull/1505) oss-api-scout. [#1500](https://github.com/VoltAgent/awesome-agent-skills/pull/1500) Databuddy analytics.
- **Specialized Domains:** [#1509](https://github.com/VoltAgent/awesome-agent-skills/pull/1509) GoVisit search-places. [#1504](https://github.com/VoltAgent/awesome-agent-skills/pull/1504) quantset/skills (7 finance skills, including DCF valuation and comps analysis).
- **Marketing and SEO:** [#1502](https://github.com/VoltAgent/awesome-agent-skills/pull/1502) hermoso (11 ad and campaign skills). [#1499](https://github.com/VoltAgent/awesome-agent-skills/pull/1499) backlink-brand-mention-builder (white-hat SEO/GEO).

The underlying needs are:
- Skills that wrap MCP servers and hosted services, such as analytics, search, and market data.
- Vertical skills for finance and marketing.
- Security and quality guardrails.
- Cross-agent compatibility with Claude Code, Cursor, Codex and Copilot.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported. There were no issues.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals from the submissions:
- Growing demand for **marketing/GEO** and **finance** categories. The Marketing section has a new entrant, and finance skills now come as a bundle.
- Several submissions disclose that the submitter is affiliated with the skill or is a vendor (#1509, #1506). This suggests the list's contribution rules may need clearer provenance and disclosure guidance.
- Submitters cite install counts or stars as quality evidence (#1509, #1508). A minimum-adoption bar could become a formal criterion, though this is inference.

## 7. User Feedback Summary
There is no direct user feedback, because there are no comments. From the submissions:
- Contributors want visibility in the list's categories, especially Development and Testing, which is the busiest destination.
- Submitters value a clear license (MIT is cited repeatedly), a public repo containing a `SKILL.md`, and multi-agent support.
- Prevention-first and read-only designs (#1501, #1507) are being used as selling points.

## 8. Backlog Watch
- **Stale PR:** [#1393](https://github.com/VoltAgent/awesome-agent-skills/pull/1393) took 16 days to close. This is the clearest sign of review latency.
- **Unreviewed PRs:** nine are open and none has a comment. [#1499](https://github.com/VoltAgent/awesome-agent-skills/pull/1499), [#1500](https://github.com/VoltAgent/awesome-agent-skills/pull/1500), [#1502](https://github.com/VoltAgent/awesome-agent-skills/pull/1502) and [#1504](https://github.com/VoltAgent/awesome-agent-skills/pull/1504) are the oldest, opened 2026-11-26. They need maintainer triage before the queue grows further.
- **Numbering gap:** PR numbers run from #1393 to #1509 while this window shows only 12 PRs. Many of the PRs in between may be older, still open, or already resolved, so the true backlog may be larger than this window shows.
- **Process suggestion:** a PR template or automated checks (license, `SKILL.md` present, link validity, disclosure) could cut review time and explain same-day closures.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
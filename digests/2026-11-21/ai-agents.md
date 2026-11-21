# MCP Ecosystem Digest 2026-11-21

> Issues: 8 | PRs: 1 | Projects covered: 7 | Generated: 2026-11-21 15:03 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-21

## 1. Today's Overview
Activity is light-to-moderate: 8 issues and 1 PR were updated in the last 24h, with no new releases. Most of the traffic is a batch of five test and characterization proposals filed on 2026-11-21 by a single contributor (reservoir-cmyk), focused on the `memory` and `everything` servers. Maintainer activity centers on the `memory` README documentation issue (#5609) and the closing of the MCP Registry release PR (#5629). Overall health looks stable, with no crash reports. Two small correctness issues were found in the `git` server.

## 2. Releases
No new releases.

## 3. Project Progress
- **[PR #5629](https://github.com/modelcontextprotocol/servers/pull/5629)** (`[v2] chore(release): list each server in the MCP Registry at release time`, by cliffhall) is closed, updated 2026-11-20. It closes #3047 and adds release-time tooling to list the repo's seven servers in the official MCP Registry. The description states that merging registers nothing. The first entries are published by the next GitHub Release a maintainer publishes and approves. The data does not show whether it was merged or closed without merging. Its summary reads as a merge, but this should be confirmed on the PR.

## 4. Community Hot Topics
- **[#5609](https://github.com/modelcontextprotocol/servers/issues/5609)** (6 comments, the most active item). The `memory` README does not document that unreadable lines in the memory file are skipped, kept on every write, and fixable only by hand. The underlying need is operational transparency about data-recovery behavior. Users need to know how corruption is handled before they trust the server with persistent state.
- **[#5641](https://github.com/modelcontextprotocol/servers/issues/5641)** (1 comment). Covered under Bugs.
- All other items have 0 comments and 0 reactions, so none are community-validated yet.

## 5. Bugs & Stability
Ranked by severity:
1. **[#5641](https://github.com/modelcontextprotocol/servers/issues/5641)** `git_branch` leaks the CLI `* ` prefix, which breaks downstream `git_checkout`, `git_diff`, `git_show` and `git_merge`. This is a functional bug in `mcp-server-git` 2026.11.18, and it breaks tool chaining for agents that feed the branch list into the next call. No fix PR is visible.
2. **[#5642](https://github.com/modelcontextprotocol/servers/issues/5642)** In the `everything` server, a non-numeric `GZIP_MAX_FETCH_SIZE` becomes `NaN` and silently disables the documented 10 MiB cap, because every comparison against `NaN` is false. It is raised as a question with a failing test attached. It is a low-likelihood misconfiguration, but it is a guardrail bypass. No fix PR is visible.

## 6. Feature Requests & Roadmap Signals
- **[#5647](https://github.com/modelcontextprotocol/servers/issues/5647)** (`enhancement`, `v2`). 21 of 32 `git` tool input properties lack descriptions. It follows #5475, which fixed this for the filesystem, memory and everything servers. The issue asks to extend the same fix to the Python git server. This is a small, mechanical change, so it is a likely candidate for the next v2 release.
- **[#5609](https://github.com/modelcontextprotocol/servers/issues/5609)** is a `v2`-tagged documentation task and is also likely to land soon.
- **Test hardening proposals**, all from one author and all unreviewed so far:
  - [#5643](https://github.com/modelcontextprotocol/servers/issues/5643) pins names as exact byte strings (NUL, empty, NFC/NFD).
  - [#5644](https://github.com/modelcontextprotocol/servers/issues/5644) covers the graph file path being a symlink.
  - [#5645](https://github.com/modelcontextprotocol/servers/issues/5645) covers exact-match delete vs. whitespace, case asymmetry, and `observationCount`.
  - [#5646](https://github.com/modelcontextprotocol/servers/issues/5646) checks that error paths leak no credential values.
- **Roadmap signal:** the `v2` labels and the Registry publishing work indicate that v2 and distribution infrastructure are the maintainers' current priorities.

## 7. User Feedback Summary
- Agent developers who chain git tools hit raw CLI output leaking through the API (#5641).
- Missing parameter descriptions hurt LLM tool-use quality (#5647).
- Operators of the `memory` server want clear documentation on corruption and recovery behavior (#5609). They also use patterns such as a symlinked data path, which are not yet tested (#5644).
- There is no explicit satisfaction or dissatisfaction data, and no reactions on any item.

## 8. Backlog Watch
- **[#5609](https://github.com/modelcontextprotocol/servers/issues/5609)** was opened 2026-11-18 and has 6 comments. It needs a maintainer decision or a docs PR, and it is the most discussed item.
- **[#5641](https://github.com/modelcontextprotocol/servers/issues/5641)** is a real functional bug with no maintainer response beyond one comment. It should be triaged.
- **[#5642](https://github.com/modelcontextprotocol/servers/issues/5642)** and the four test proposals (#5643–#5646) were all filed the same day by one contributor and have no maintainer feedback. Maintainers should decide whether to accept the test-addition approach before more of these accumulate.
- The data covers only the last 24h, so older long-unanswered issues are not visible in this snapshot.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison Report: 2026-11-21

**Scope note:** The digests cover the MCP and agent-extension ecosystem. They are not personal AI assistants. The comparison is therefore about MCP Servers (the reference implementations) against the registries, catalogs and curated lists around it. All figures cover the last 24h only. Many of the digests report comment counts as undefined, so engagement is not measured.

## 1. Ecosystem Overview
The MCP ecosystem has moved from building servers to distributing and governing them. Four layers are visible: reference servers (MCP Servers), registries (the official MCP Registry, Docker MCP Registry), curated lists (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills) and a first-party plugin catalog (Claude Plugins). Intake is high and review capacity is low. The catalogs received roughly 50–180 PRs a day each, while merges were rare or not reported. Hosted and remote servers, OAuth, agent governance and security transparency recur across the digests.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Releases | Health (my judgment) |
|---|---|---|---|---|
| MCP Servers | 8 | 1 (closed) | None | 7/10: stable, with two small `git`/`everything` bugs unanswered |
| MCP Registry | 2 | 13 (10 merged or closed, 3 open) | v1.8.11 | 8.5/10: strong delivery, with one closed silent-publish bug (#1871) |
| Awesome MCP Servers | 0 | 180 (149 open) | None | 6/10: high intake, review is the constraint, no engagement data |
| Docker MCP Registry | 0 | 50 (all open, 0 merged) | None | 5.5/10: heavy intake, 0 merges, PRs open for up to 4 months |
| Claude Plugins (official) | 6 | 19 (12 open, 7 closed) | None | 6.5/10: active, but old bugs (#748, #1173) and a privacy report (#7187) are unanswered |
| Awesome Claude Code | 11 | 2 (closed) | None | 7.5/10: validation automation works, queue is only a day old |
| Awesome Agent Skills | 0 | 12 (11 open, 1 closed) | None | 6/10: 0 merges, queue growing |

Health scores are my own estimates from the visible activity. They are not data from the digests.

## 3. MCP Servers's Position
- **Role:** It is the reference implementation layer. Peers are mostly distribution, discovery or packaging layers. It is the only project here whose issues concern code correctness (`git_branch` output in #5641, a `NaN` guardrail bypass in #5642).
- **Technical approach:** It ships a small set of servers (seven are being registered via PR #5629) with a v2 roadmap. The Registry is a hosted Go service with its own observability. Docker packages servers as containers. The awesome lists are Markdown indexes.
- **Advantages:** It has the closest link to the protocol and sets the tool-quality norms for others, for example the parameter-description work in #5647. It is also feeding the Registry, so its output flows into the main distribution channel.
- **Weaknesses:** Maintainer response is thin. #5641 is a real bug with one comment, and five test proposals from one contributor have had no review.
- **Community size:** It is smallest by daily volume (9 items), against 180 PRs for Awesome MCP Servers and 50 for Docker. Volume here measures catalog intake, not the size or quality of the community. Contributor counts and stars were not in the data.

## 4. Shared Technical Focus Areas
- **Remote and hosted servers with OAuth:** Docker MCP Registry (14 remote submissions, `dynamic: tools`) and Awesome MCP Servers (hosted-server policy unclear, #20259, #14256). MCP Servers and the Registry are building the publishing path.
- **Tool-description and token quality:** MCP Servers (#5647, 21 of 32 properties undocumented), Awesome MCP Servers (whittle-mcp, token-efficient output) and Docker (DevProjex).
- **Agent memory and persistence:** MCP Servers (`memory` server, #5609, #5644), Awesome MCP Servers (memoreal-mcp), Docker (MyGraph), Awesome Claude Code (claude-sessions-sync, CLAW).
- **Security, privacy and governance:** Claude Plugins (#7187 telemetry, hook hardening), Docker (Immaculate approval gates), Awesome Claude Code (sandbox traps, #3683), MCP Servers (#5646 credential leakage tests).
- **Publishing reliability and observability:** MCP Registry (#1871 silent failure, Grafana alerts, usage collector). Claude Plugins hooks need to fail soft (#6928, #7151).
- **Windows and cross-platform support:** Claude Plugins (pyenv-win, uv junctions, #7142) and Awesome MCP Servers (Windows UI-control servers).
- **Multi-session orchestration:** Awesome Claude Code (Canban, coworking-agents) and Awesome Agent Skills (multi-harness skills).

## 5. Differentiation Analysis
- **MCP Servers:** developers, Python/TypeScript reference code, tests and documentation.
- **MCP Registry:** server publishers and CI users. A hosted Go service with Pulumi and Grafana operations. It has the most mature maintainer process.
- **Awesome MCP Servers:** broad discovery. Automated label validation (`has-glama`, `valid-name`). The list accepts or rejects entries by policy, such as the Glama listing and GitHub URL rules.
- **Docker MCP Registry:** a curated catalog for container users. It supports both local container images and remote endpoints.
- **Claude Plugins (official):** Claude Code users. A first-party catalog with partner review and bot SHA bumps.
- **Awesome Claude Code:** Claude Code power users. Issue-based submissions, with a bot creating the PR.
- **Awesome Agent Skills:** skill authors who want distribution across harnesses (Codex, OpenCode, Cursor). Many entries are promotional.

## 6. Community Momentum & Maturity
- **Rapidly iterating:** MCP Registry (13 PRs, a release, a staging→production path). Claude Plugins (active `security-guidance` hardening).
- **High intake, low throughput:** Awesome MCP Servers (180 PRs), Docker MCP Registry (50 open, 0 merged), Awesome Agent Skills (11 open, 0 merged).
- **Stabilizing, low volume:** MCP Servers. Its work is documentation, small fixes and v2 preparation.
- **Steady and automated:** Awesome Claude Code (10 of 11 submissions passed validation). Its PR closure took 4–5 weeks.

## 7. Trend Signals
1. **Review capacity is the bottleneck.** Submission volume grows faster than merges. Registries that automate validation (Glama labels, Awesome Claude Code's checks) cope better. Developers should expect slow listing times.
2. **Remote-first distribution is growing.** Hosted servers with OAuth are replacing local containers in the catalogs, though policy on them is inconsistent between lists. Plan for both transports.
3. **Tool-schema quality affects agent reliability.** Missing parameter descriptions and raw CLI output leaking through tools (#5641, #5647) directly hurt tool chaining.
4. **Trust and observability are becoming requirements.** The Registry is investing in usage tracking and drift alerts after a silent publish failure. Users in the plugin catalog are asking for telemetry disclosure. Treat publish confirmation and telemetry as design concerns.
5. **Hooks and plugins must fail soft.** A single bad setting disabling every review is a recurring complaint, and Windows and unusual Python setups are common triggers.
6. **Agent state management is a growing need.** Memory, session sync and multi-session monitoring show up in four of the seven projects.
7. **Cross-harness portability is rising.** Skills and servers now target many clients at once, so avoid single-client assumptions.

**Caveats:** The data is a 24h snapshot. The digests often don't say whether closed PRs were merged. Rankings that rely on comment counts are unreliable where those counts were undefined.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest, 2026-11-21

Repo: github.com/modelcontextprotocol/registry

## 1. Today's Overview
Activity is moderate and almost entirely maintainer-driven. 13 PRs were updated (10 merged or closed, 3 open) and 1 release shipped (v1.8.11). Almost all of the work is from @rdimitrov and concerns the hosted registry's operations: a new usage collector, Grafana dashboards and alerts, and a production promotion. Community input is thin: 2 issues, one closed and one that is an empty template. Project health looks good on delivery, with a clear staging→production rollout path. One user-facing publishing issue (#1871) is worth watching.

## 2. Releases
**[v1.8.11](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.11)**
- Increases the isolated production database to eight vCPUs (#1873).
- Promotes registry v1.8.10 to production (#1874).
- Provisions the UI-built Grafana dashboards (the release notes are truncated in the data, so further items may exist).
- Breaking changes: none are indicated. These are infrastructure and deploy changes, not API changes.
- Migration notes: none for API consumers. Production promotion of 1.8.11 is pending in [#1886](https://github.com/modelcontextprotocol/registry/pull/1886).

## 3. Project Progress
Closed or merged today, all from the hosted-registry observability and deploy work:
- [#1877](https://github.com/modelcontextprotocol/registry/pull/1877): adds `cmd/usage-collector`, a separate binary (logic in `internal/usage/`) that records daily hosted-registry usage and what was published. It is not part of the server binary or image.
- [#1878](https://github.com/modelcontextprotocol/registry/pull/1878): runs the collector daily in the hosted clusters and shows its results in Grafana, all behind the Pulumi setting `mcp-registry:usageCollector`.
- [#1875](https://github.com/modelcontextprotocol/registry/pull/1875) and [#1876](https://github.com/modelcontextprotocol/registry/pull/1876): Grafana dashboards and alert rules plus the Discord contact point are now provisioned from the repo instead of living only in Grafana's database.
- [#1880](https://github.com/modelcontextprotocol/registry/pull/1880): fixes a failed staging deploy. The saved Pulumi plan failed on the generated credentials, which now go in Secret data. The failure had been blocking all later staging deploys.
- [#1881](https://github.com/modelcontextprotocol/registry/pull/1881) and [#1882](https://github.com/modelcontextprotocol/registry/pull/1882): a rehearsal of retiring the collector in staging (the rollback path), then switching it back on.
- [#1883](https://github.com/modelcontextprotocol/registry/pull/1883): fixes four problems seen in the collector's first staging run, including log-read sizing by counting and handling of quiet days.
- [#1884](https://github.com/modelcontextprotocol/registry/pull/1884): the "usage estimate drifted" alert now judges requests and data separately, each only with enough evidence (at least 1,000 requests or 1,000 sampled records).
- [#1866](https://github.com/modelcontextprotocol/registry/pull/1866): a dependabot Go dependency bump, closed.

## 4. Community Hot Topics
Comment and reaction counts are low across the board (none of the PRs have 👍 reactions).
- [#1871](https://github.com/modelcontextprotocol/registry/issues/1871) is the most-discussed item, with 2 comments. Users need publish success to match actual visibility in the API.
- [#1886](https://github.com/modelcontextprotocol/registry/pull/1886) is the most consequential PR. It promotes 1.8.11 to production and turns on the usage collector, and merging it deploys to production.

## 5. Bugs & Stability
1. **[#1871](https://github.com/modelcontextprotocol/registry/issues/1871) (closed), high severity.** Publishes of versions 0.60.0–0.80.0 reported "✓ Successfully published" in GitHub Actions, but the records never appeared in the API, and the latest visible version stayed at 0.59.4 (published around 2026-11-10). This is a silent data-visibility failure. The issue is now closed. The data does not say whether a fix PR exists or what the root cause was, so check the thread.
2. **[#1880](https://github.com/modelcontextprotocol/registry/pull/1880) (fixed), medium.** The staging deploy failure was fixed.
3. **[#1885](https://github.com/modelcontextprotocol/registry/issues/1885) (open), low and not actionable.** It is the unfilled bug template, with no content, 0 comments and an unknown component. It is likely a stray submission and a candidate for closing or triage.

## 6. Feature Requests & Roadmap Signals
No user feature requests today. The roadmap signals come from maintainers:
- The usage collector is likely to reach production very soon via [#1886](https://github.com/modelcontextprotocol/registry/pull/1886).
- Further observability, drift alerting and Pulumi-managed monitoring look to be the next areas of work.
- Open dependabot bumps ([#1867](https://github.com/modelcontextprotocol/registry/pull/1867), [#1879](https://github.com/modelcontextprotocol/registry/pull/1879)) will probably be merged in routine maintenance.

## 7. User Feedback Summary
The only real user voice is #1871. Publishers using CI (GitHub Actions) rely on the success message as confirmation, and a mismatch with API visibility erodes trust. There are no satisfaction signals either way beyond this. The maintainers' work on dashboards, alerts and usage tracking should improve their ability to detect problems like this sooner.

## 8. Backlog Watch
- [#1886](https://github.com/modelcontextprotocol/registry/pull/1886) is open and needs a maintainer decision because it deploys to production. It should be reviewed carefully.
- [#1867](https://github.com/modelcontextprotocol/registry/pull/1867) (open since 2026-11-18) and [#1879](https://github.com/modelcontextprotocol/registry/pull/1879) (since 2026-11-20) are dependabot PRs awaiting review. Neither is urgent.
- [#1885](https://github.com/modelcontextprotocol/registry/issues/1885) needs triage.
- No long-stale items appear in today's data, but it covers only the last 24h, so older backlog is not visible.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest: 2026-11-21

## 1. Today's Overview
Activity is high but is almost entirely new-listing submissions. 180 PRs were updated in the last 24h (149 open, 31 merged or closed). There were no issue updates and no releases. The repo works as a curated list: its throughput is the intake of "Add X" PRs, not code changes. Most new PRs carry the automated labels `has-emoji`, `valid-name` and `has-glama`, which suggests a bot-driven validation pipeline. The data shows no human discussion: the comment counts for every PR in the sample are undefined (not reported), so the "top by comments" ranking reflects ordering, not real engagement.

## 2. Releases
No new releases.

## 3. Project Progress
31 PRs were merged or closed, but the sample only shows closed items. It doesn't say whether any were merged. Visible closed PRs:
- [#17942](https://github.com/punkpeye/awesome-mcp-servers/pull/17942): Agent Provider Depot (Developer Tools). It was closed with the `non-github-url` and `missing-glama` labels, so a non-GitHub link and a missing Glama listing probably contributed.
- [#11056](https://github.com/punkpeye/awesome-mcp-servers/pull/11056): ztemerbekov/a1-yandex-kit-skills (E-Commerce), closed.
- [#10000](https://github.com/punkpeye/awesome-mcp-servers/pull/10000): askads/mcp-yandex-wordstat (Marketing), closed.

The closed items were created between July and October 2026 and touched on 2026-11-21. This looks like a backlog cleanup sweep. I can't tell from the data why #11056 and #10000 were closed, even though both carry all the passing labels.

## 4. Community Hot Topics
Comment and reaction data is unavailable (all comments are `undefined`, 👍 is 0). I can't rank by engagement, so these are themes from the PR content.
- **Windows and OS automation:** [#20255](https://github.com/punkpeye/awesome-mcp-servers/pull/20255) (som-window-mcp) and [#20252](https://github.com/punkpeye/awesome-mcp-servers/pull/20252) (EYRA) both target Windows desktop control. Both are local, read-oriented servers that return compact UI maps. This points to demand for agent "computer use" that is lighter than screenshots.
- **Crypto, finance and payments:** [#20253](https://github.com/punkpeye/awesome-mcp-servers/pull/20253) (Shieldz Swap), [#20250](https://github.com/punkpeye/awesome-mcp-servers/pull/20250) (cryptoslip) and [#20248](https://github.com/punkpeye/awesome-mcp-servers/pull/20248) (aegis-x402) show continued interest in on-chain and x402-style agent payments.
- **Token efficiency and memory:** [#20257](https://github.com/punkpeye/awesome-mcp-servers/pull/20257) (whittle-mcp) shrinks tool output before the model reads it. [#19475](https://github.com/punkpeye/awesome-mcp-servers/pull/19475) (memoreal-mcp) provides persistent memory across 15 coding clients.
- **Media, browser and data:** [#20254](https://github.com/punkpeye/awesome-mcp-servers/pull/20254) (Optima AI Browser), [#20251](https://github.com/punkpeye/awesome-mcp-servers/pull/20251) (fetchtranscript), [#20256](https://github.com/punkpeye/awesome-mcp-servers/pull/20256) (FlowGen), [#20259](https://github.com/punkpeye/awesome-mcp-servers/pull/20259) (footballcharts) and [#20258](https://github.com/punkpeye/awesome-mcp-servers/pull/20258) (Telegram Ads).

## 5. Bugs & Stability
No issues or bug reports today. The quality signals are the validation labels:
- `missing-glama` appears on [#20255](https://github.com/punkpeye/awesome-mcp-servers/pull/20255), [#20256](https://github.com/punkpeye/awesome-mcp-servers/pull/20256), [#20254](https://github.com/punkpeye/awesome-mcp-servers/pull/20254), [#20251](https://github.com/punkpeye/awesome-mcp-servers/pull/20251) and [#20249](https://github.com/punkpeye/awesome-mcp-servers/pull/20249). Each needs a Glama listing before it can proceed.
- [#10345](https://github.com/punkpeye/awesome-mcp-servers/pull/10345) carries `duplicate` and `manual-review`. It updates an existing Frihet-io entry, so it risks conflicting with the existing line.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. Contribution patterns point to these directions:
- Several PRs say they place the entry "first in the section like recent entries" (e.g. [#20257](https://github.com/punkpeye/awesome-mcp-servers/pull/20257)). This hints at an ordering convention that could be formalized.
- Submitters are adapting to list rules, such as the `owner/repo` link format ([#10345](https://github.com/punkpeye/awesome-mcp-servers/pull/10345)) and the scope question for hosted-only servers. [#20249](https://github.com/punkpeye/awesome-mcp-servers/pull/20249) argues explicitly that a self-hosted app with a built-in MCP endpoint fits the scope. Clearer guidance on hosted and remote servers would likely help.

## 7. User Feedback Summary
There is no direct user feedback. Contributor statements suggest these themes:
- Contributors are unsure whether remote or hosted servers qualify. [#20259](https://github.com/punkpeye/awesome-mcp-servers/pull/20259) notes an earlier PR was closed "when hosted servers moved to…" a different policy, and resubmits a local stdio server instead.
- Submitters value install simplicity (`npx -y`, `uvx`) and zero-telemetry local operation.
- Many entries use the 🤖🤖🤖 marker in the title, which suggests AI-assisted submissions.

## 8. Backlog Watch
These older PRs are still being touched and may need maintainer attention:
- [#14256](https://github.com/punkpeye/awesome-mcp-servers/pull/14256): FXpeek remote MCP, open since 2026-09-12. It is a hosted server, so it falls under the unclear hosted-server policy.
- [#10345](https://github.com/punkpeye/awesome-mcp-servers/pull/10345): open since 2026-07-18, labelled `duplicate` and `manual-review`. It was rebased onto `main` and needs a decision.
- [#17708](https://github.com/punkpeye/awesome-mcp-servers/pull/17708): ShortSync hosted scheduler, open since 2026-10-26.
- [#19475](https://github.com/punkpeye/awesome-mcp-servers/pull/19475): memoreal-mcp, open since 2026-11-14.

**Health assessment:** Intake is strong, with about 150 open PRs and steady new submissions. Review throughput is the constraint. Older PRs that pass validation are still open, and the project doesn't surface any engagement data to show maintainer response.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-21

## 1. Today's Overview
The registry is in a pure intake state: 0 issues and 0 releases were updated in the last 24h. All 50 PRs touched were open, and none were merged or closed. Most are new server submissions. Roughly 14 of the top 20 were created today (2026-11-21), which points to high submission volume. Merge throughput looks like the bottleneck: open PRs from as far back as July and August are still being refreshed. No comment counts were reported, so engagement can't be measured.

## 2. Releases
No new releases.

## 3. Project Progress
There were no merged or closed PRs today, so nothing advanced to the catalog. The only visible activity is the queue of new submissions in section 4.

## 4. Community Hot Topics
Comment counts came through as `undefined` and every PR has 0 👍, so no item can be ranked by engagement. Submissions fall into these themes:

- **Remote (hosted) MCP servers dominate.** Most of the top 20 are streamable-http endpoints, many with OAuth 2.1:
  - [#7089 SuanLinFang](https://github.com/docker/mcp-registry/pull/7089)
  - [#7439 Kling regional plugins](https://github.com/docker/mcp-registry/pull/7439)
  - [#7492 i2v.ai](https://github.com/docker/mcp-registry/pull/7492)
  - [#7491 Immaculate (Arobi)](https://github.com/docker/mcp-registry/pull/7491)
  - [#7490 Glowjakt](https://github.com/docker/mcp-registry/pull/7490)
  - [#7489 NameIO](https://github.com/docker/mcp-registry/pull/7489)
  - [#7487 AgenticGeoMate](https://github.com/docker/mcp-registry/pull/7487)
  - [#7486 PyAI Voice AI](https://github.com/docker/mcp-registry/pull/7486)
  - [#7485 TradeFlags](https://github.com/docker/mcp-registry/pull/7485)
  - [#7482 XCROP](https://github.com/docker/mcp-registry/pull/7482)
  - [#7481 Gleap](https://github.com/docker/mcp-registry/pull/7481)
  - [#7159 Sphere Marketplace](https://github.com/docker/mcp-registry/pull/7159)
  - [#7437 Peskio](https://github.com/docker/mcp-registry/pull/7437)
  - [#4679 Orshot](https://github.com/docker/mcp-registry/pull/4679)
  - **Underlying need:** vendors want catalog distribution without shipping containers.
- **Agent-infrastructure servers:**
  - [#7491 Immaculate](https://github.com/docker/mcp-registry/pull/7491): GRANTED/DENIED/ESCALATED approvals before agent actions.
  - [#7480 MyGraph](https://github.com/docker/mcp-registry/pull/7480): knowledge-graph memory with cited evidence.
  - [#7483 DevProjex](https://github.com/docker/mcp-registry/pull/7483): token-efficient codebase context with secrets masked.
  - **Underlying need:** governance, memory and context efficiency for coding agents.
- **Vertical and domain servers:**
  - [#7484 SONAR KYB](https://github.com/docker/mcp-registry/pull/7484) (compliance)
  - [#7485 TradeFlags](https://github.com/docker/mcp-registry/pull/7485) (finance)
  - [#7487 AgenticGeoMate](https://github.com/docker/mcp-registry/pull/7487) (geoscience)
  - [#7488 SizeMyFile](https://github.com/docker/mcp-registry/pull/7488) (file workflows)
- **Local containerized servers:** [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240), [#4547 mcp-graphql-enhanced](https://github.com/docker/mcp-registry/pull/4547), [#7480 MyGraph](https://github.com/docker/mcp-registry/pull/7480) and [#7483 DevProjex](https://github.com/docker/mcp-registry/pull/7483).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, and there are no open issues in the window. The data has no CI or validation results, so build or lint failures on submissions can't be assessed.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. The submissions suggest where the catalog is heading:
- **Remote and OAuth servers are the growth path.** Several entries use `dynamic: tools` with an empty `tools.json`, as in [#7492](https://github.com/docker/mcp-registry/pull/7492). Expect continued reliance on dynamic tool discovery.
- **Regional or multi-variant entries** such as [#7439](https://github.com/docker/mcp-registry/pull/7439) may need a convention for multiple entries from one vendor.
- **Agent-governance and memory servers** are a rising category.

## 7. User Feedback Summary
There is no direct feedback, since no comments or reactions were captured. Contributors are following the CONTRIBUTING remote-server guide (for example [#7089](https://github.com/docker/mcp-registry/pull/7089)). Several note that the server has no public source repo ([#7490](https://github.com/docker/mcp-registry/pull/7490), [#4679](https://github.com/docker/mcp-registry/pull/4679)), so the review path for source-less hosted services is a likely friction point.

## 8. Backlog Watch
These older open PRs were refreshed today and still have no merge decision:
- [#4547 mcp-graphql-enhanced](https://github.com/docker/mcp-registry/pull/4547): open since 2026-07-26 (about 4 months).
- [#4679 Orshot](https://github.com/docker/mcp-registry/pull/4679): open since 2026-08-12 (about 3.3 months).
- [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240): open since 2026-09-25 (about 2 months).
- [#7089 SuanLinFang](https://github.com/docker/mcp-registry/pull/7089) and [#7159 Sphere Marketplace](https://github.com/docker/mcp-registry/pull/7159): open since mid-November.

Maintainers should triage these, or state what blockers contributors need to fix. The day's pattern of 50 PRs updated and 0 merged suggests review or merge capacity is a bottleneck.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (official) Digest, 2026-11-21

## 1. Today's Overview
The repository is busy but mostly routine. Of 19 PRs updated in 24h, 12 are open and 7 closed. Bot-driven SHA bumps (mapbox, honeycomb, datadog, aws-transform, modern-web-guidance) make up a large share of the traffic. Human work is concentrated in `security-guidance` (many PRs from mhegazy) and `theme-examples`. Six issues were updated, none closed, and there were no releases. Issue discussion is thin (at most 5 comments), so health looks stable but maintainer response on user-reported bugs looks slow.

## 2. Releases
No new releases.

## 3. Project Progress
Seven PRs closed. The data does not say which were merged and which were closed unmerged, so treat them as closed.
- **security-guidance:** Closed were [#7143](https://github.com/anthropics/claude-plugins-official/pull/7143) (bump to 2.0.21, meant to merge last), [#7176](https://github.com/anthropics/claude-plugins-official/pull/7176) (interpreter check through a pyenv-win `.bat` shim, which also left a stray `(3` file) and [#7177](https://github.com/anthropics/claude-plugins-official/pull/7177) (skip other repos whose settings change what git runs). They may have been merged or superseded. The data doesn't say.
- **theme-examples:** [#7189](https://github.com/anthropics/claude-plugins-official/pull/7189) (nine interactive shader scenes) and its follow-up [#7191](https://github.com/anthropics/claude-plugins-official/pull/7191) (sound for Koi Pond and Falling Sand) are closed.
- **Bot bumps:** [#7188](https://github.com/anthropics/claude-plugins-official/pull/7188) (aikido) and [#6822](https://github.com/anthropics/claude-plugins-official/pull/6822) (modern-web-guidance, from October) are closed. The latter is likely superseded by [#7186](https://github.com/anthropics/claude-plugins-official/pull/7186).

## 4. Community Hot Topics
- [#748 ralph-loop shell parse error](https://github.com/anthropics/claude-plugins-official/issues/748) has the most comments (5). It was opened in March and is still active. Users need prompts with parentheses and quotes, such as skill invocations, to work without escaping.
- [#6928 security-guidance empty `ANTHROPIC_BASE_URL`](https://github.com/anthropics/claude-plugins-official/issues/6928) has 2 comments. [#7192](https://github.com/anthropics/claude-plugins-official/pull/7192) follows up on it. Gateway and proxy users need the hooks to cope with unusual environments.
- [#7187 browser-use telemetry to PostHog](https://github.com/anthropics/claude-plugins-official/issues/7187) has 1 comment. It raises a trust and governance question about listed partner plugins.
- No item has any 👍 reactions.

## 5. Bugs & Stability
Ranked by severity:
1. **Privacy and consent, [#7187](https://github.com/anthropics/claude-plugins-official/issues/7187):** the browser-use plugin reportedly sends task data to PostHog by default, with no notice. The plugin's review state is listed as `done`, reviewed by `partner`. No fix PR yet.
2. **security-guidance reliability, [#6928](https://github.com/anthropics/claude-plugins-official/issues/6928):** an empty `ANTHROPIC_BASE_URL` makes every LLM review fail with `unknown url type`. The first report was fixed in 2.0.18, and a remaining case is addressed by [#7192](https://github.com/anthropics/claude-plugins-official/pull/7192) (open), which handles a reply wholly inside a code fence. Related hardening PRs are open: [#7151](https://github.com/anthropics/claude-plugins-official/pull/7151) (non-numeric settings raise `ValueError` and break every hook), [#7142](https://github.com/anthropics/claude-plugins-official/pull/7142) (Windows starts Python twice per hook), [#7167](https://github.com/anthropics/claude-plugins-official/pull/7167) (changes made during a Stop review fall into the next baseline unreviewed) and [#7168](https://github.com/anthropics/claude-plugins-official/pull/7168) (counts that gap).
3. **[#748](https://github.com/anthropics/claude-plugins-official/issues/748) ralph-loop:** a shell parse error on metacharacters. It has been open since March and no fix PR is visible.
4. **[#1173](https://github.com/anthropics/claude-plugins-official/issues/1173) imessage:** self-chat image attachments are silently dropped because of the `is_from_me` early return. No fix PR.
5. **[#7198](https://github.com/anthropics/claude-plugins-official/issues/7198) theme-examples:** the fireworks show clears another plugin's theme when it ends. New, no fix.
6. **Telegram:** [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048) (draft) bundles five fixes for messages that never arrive.

## 6. Feature Requests & Roadmap Signals
- [#7197](https://github.com/anthropics/claude-plugins-official/issues/7197) asks for `typescript-lsp` to support TypeScript 7 (the native Go port with no `tsserver.js`) and Bun. TS 7 adoption makes this likely to be needed soon, but nothing is in progress.
- The `security-guidance` 2.0.21 line is the clearest near-term release. Its version bump PR #7143 closed, so the release may be re-cut.
- `theme-examples` is growing with shaders and sound, though the closed PRs suggest rework.

## 7. User Feedback Summary
- Plugin hooks should fail soft. One bad setting or environment variable currently disables every review.
- Windows and unusual Python setups (pyenv-win, uv junctions) cause friction.
- Users want transparency about telemetry in partner plugins.
- Plugins sharing the theme API conflict with each other.
- Newer toolchains such as TS 7 and Bun are not yet supported.

## 8. Backlog Watch
- [#748](https://github.com/anthropics/claude-plugins-official/issues/748): open since 2026-03-19, with a reproducible bug.
- [#1173](https://github.com/anthropics/claude-plugins-official/issues/1173): open since 2026-03-30, with a root cause already identified at `server.ts` line 728.
- [#7048](https://github.com/anthropics/claude-plugins-official/pull/7048): a draft opened 2026-11-09. Its own text says it has had no review in several days, and Commit 1 is flagged as most urgent.
- [#7187](https://github.com/anthropics/claude-plugins-official/issues/7187): a privacy report that needs a prompt maintainer response.
- Several `security-guidance` PRs from 11-16 and 11-17 ([#7142](https://github.com/anthropics/claude-plugins-official/pull/7142), [#7151](https://github.com/anthropics/claude-plugins-official/pull/7151)) are still open.
- Bot SHA-bump PRs (#7193–#7196, [#7190](https://github.com/anthropics/claude-plugins-official/pull/7190)) are waiting for review.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-21

## 1. Today's Overview
Awesome Claude Code is a curated list that grows through resource-submission issues. Activity over the last 24h was steady and submission-driven: 11 issues were updated, all but one dated 2026-11-20, and 10 are still open. There were no releases and no code-level changes. Of the 11 issues, 10 are tagged `validation-passed`. Maintainer-side activity was limited to two bot-created PRs closed without merge. Overall health looks good: intake is strong and automated validation is working. The open question is how quickly maintainers process the queue.

## 2. Releases
No new releases.

## 3. Project Progress
Two PRs were closed. The data does not say whether they were merged or rejected, so I can't call either one a feature advance.
- [PR #3202](https://github.com/hesreallyhim/awesome-claude-code/pull/3202): "Add resource: Review Inbox" (Mods), a Claude Code mod that keeps GitHub work in one place. Opened 2026-10-22 by github-actions[bot] and closed 2026-11-20.
- [PR #3178](https://github.com/hesreallyhim/awesome-claude-code/pull/3178): "Add resource: pstack-claude" (Agent Orchestration > SDLC), a Claude Code version of Lauren Tan's tooling. Opened 2026-10-15 and closed 2026-11-20.

Both PRs waited about 4–5 weeks between creation and closure. This suggests the bot-PR step is slow once an issue is validated.

## 4. Community Hot Topics
Engagement is flat: every item has 1 comment (likely the validation bot) and 0 👍. Nothing stands out by volume, so the themes in the submissions are more informative:
- **Security and sandboxing:** [#3683 Six traps in Claude Code's sandbox](https://github.com/hesreallyhim/awesome-claude-code/issues/3683) is an article, not a tool. It points to demand for hardening guidance.
- **Remote and notification workflows:** [#3685 NotiBuddy](https://github.com/hesreallyhim/awesome-claude-code/issues/3685), an end-to-end encrypted MCP server and CLI.
- **Parallel sessions and orchestration:** [#3676 Canban](https://github.com/hesreallyhim/awesome-claude-code/issues/3676), a Kanban board for parallel sessions. [#3675 CLAW](https://github.com/hesreallyhim/awesome-claude-code/issues/3675), for long-horizon consistency across sessions.
- **Observability:** [#3678 coworking-agents](https://github.com/hesreallyhim/awesome-claude-code/issues/3678), a pixel-art live session monitor.
- **Memory and config management:** [#3682 claude-sessions-sync](https://github.com/hesreallyhim/awesome-claude-code/issues/3682) and [#3677 Megatron](https://github.com/hesreallyhim/awesome-claude-code/issues/3677).
- **Infrastructure and integration:** [#3684 claude-homelab-admin](https://github.com/hesreallyhim/awesome-claude-code/issues/3684) and [#3679 Homemade](https://github.com/hesreallyhim/awesome-claude-code/issues/3679).
- **Domain-specific use:** [#3680 pathiel](https://github.com/hesreallyhim/awesome-claude-code/issues/3680), a Hyperliquid trading plugin and MCP server.

The underlying needs are managing many concurrent agent sessions, persisting context, observing agent activity, and understanding sandbox limits.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported. The only closure with a process flavor is [#3681 Skills Hub](https://github.com/hesreallyhim/awesome-claude-code/issues/3681). It carries `validation-pending` and `auto-closed` labels, so the automation closed it, most likely because it failed or didn't complete validation. The data doesn't give the reason. The submitter may need to fix and resubmit.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed against the repo itself. The submission categories show where the list is growing:
- Remote Control, Notifications & Voice I/O
- Observability & Monitoring > Session Monitors
- Memory & Context Persistence
- Agent Orchestration
- Alternative Clients
- Providers, Runtime & Integration Infrastructure

If the maintainers adopt more categories or sub-categories, session monitoring and multi-session management are the likeliest candidates. This is an inference from submission volume, not a stated plan.

## 7. User Feedback Summary
- Users want ways to run several Claude Code sessions without losing track of them (Canban, coworking-agents).
- Users want sessions and context to carry over between machines or runs (claude-sessions-sync, CLAW).
- Security-minded users are writing up the gaps they find in the sandbox (#3683).
- Submissions are mostly well-formed and pass validation. 10 of 11 passed.
- There is no direct feedback on the list itself, such as satisfaction or complaints.

## 8. Backlog Watch
- 10 validated submissions (#3675–#3680, #3682–#3685) are waiting on maintainer review. They are only a day old, so none is overdue yet.
- The recent PR closures took 4–5 weeks from creation to close. If review stays that slow, this batch could wait a long time. Maintainers should watch for a growing queue.
- [#3681 Skills Hub](https://github.com/hesreallyhim/awesome-claude-code/issues/3681) was auto-closed. Someone should confirm whether the submitter got clear guidance on how to resubmit.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-11-21

Source: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity today was PR-only: 12 PRs were updated (11 open, 1 closed), with no issues and no releases. Almost all of it is community submissions asking for a listing in the curated index. 7 of the 12 were created today, so inbound volume is high. The only state change was a closed PR, and no PR was merged. Contributors are active, but maintainer throughput looks like the constraint.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One was closed without merging:
- [#1449](https://github.com/VoltAgent/awesome-agent-skills/pull/1449) *Add skill: klingai-tech/kling-cli*. It was closed on 2026-11-20. The same author, Wlain, opened [#1456](https://github.com/VoltAgent/awesome-agent-skills/pull/1456) for the same skill on 2026-11-20. This looks like a resubmission that replaces the earlier PR (likely a cleanup of the PR, since the closed one had a decorated title). The stated reason was not in the data, so this is an inference.

## 4. Community Hot Topics
No PR or issue has recorded comments or reactions. Comment counts are undefined and every 👍 count is 0. Activity is therefore best read through submission themes:
- **Marketing and growth:** [#1462](https://github.com/VoltAgent/awesome-agent-skills/pull/1462) (backlink-guard), [#1460](https://github.com/VoltAgent/awesome-agent-skills/pull/1460) (oppi-digital-products), and [#1458](https://github.com/VoltAgent/awesome-agent-skills/pull/1458) (thinkwithblack-skill, a 365-skill collection with 275 stars). This is the busiest category today.
- **Dev and testing:** [#1459](https://github.com/VoltAgent/awesome-agent-skills/pull/1459) (HKTITAN/skills, 19 UI skills), [#1455](https://github.com/VoltAgent/awesome-agent-skills/pull/1455) (oya-browser), and [#1454](https://github.com/VoltAgent/awesome-agent-skills/pull/1454) (auto-qa, a Playwright QA skill).
- **Media and generative content:** [#1456](https://github.com/VoltAgent/awesome-agent-skills/pull/1456) (Kling CLI), [#1461](https://github.com/VoltAgent/awesome-agent-skills/pull/1461) (i2v-skills), and [#1435](https://github.com/VoltAgent/awesome-agent-skills/pull/1435) (cinematic-shot-prompting and game-universe-studio).
- **Security and hardware:** [#1463](https://github.com/VoltAgent/awesome-agent-skills/pull/1463) (Kuron Security, a multi-harness Claude Security pipeline) and [#1457](https://github.com/VoltAgent/awesome-agent-skills/pull/1457) (PCB/DRC foundry skill).

The underlying need is discoverability. Skill authors want a listing here as a distribution channel. There is a visible shift toward skills that work across many agent harnesses (Kuron Security covers Codex, OpenCode, Cursor and others) and skills that ship with an MCP server or CLI (backlink-guard, auto-qa, the PCB skill).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. The repository is a curated list, so stability issues would mostly be broken links or malformed entries. None were raised.

## 6. Feature Requests & Roadmap Signals
There are no issues or explicit feature requests. The signals are in the PRs:
- New categories may be needed. Hardware and PCB engineering ([#1457](https://github.com/VoltAgent/awesome-agent-skills/pull/1457)) is proposed as its own section. Media and video generation skills are currently filed under "Specialized Domains".
- The Marketing section keeps growing, and may need splitting or sorting.
- Disclosure of affiliation is appearing in PR bodies ([#1456](https://github.com/VoltAgent/awesome-agent-skills/pull/1456) states "I help promote Kling AI", and [#1460](https://github.com/VoltAgent/awesome-agent-skills/pull/1460) notes AI assistance). Contribution guidelines on promotional and AI-assisted submissions may be worth formalizing.

## 7. User Feedback Summary
There is no direct feedback, since there are no issues or comments. Contributors are mostly one-time authors adding their own repos. Some cite adoption evidence to support inclusion: the Kling skill reports 11.7K installs on skills.sh, and thinkwithblack-skill reports 275 stars. Many entries are promotional or tied to a commercial product, so maintainers probably need to screen for quality and independence.

## 8. Backlog Watch
- [#1435](https://github.com/VoltAgent/awesome-agent-skills/pull/1435) (cinematic-shot-prompting) is the oldest open PR in today's data, created 2026-11-17 and unreviewed after 4 days. It bundles two skills in one PR.
- [#1456](https://github.com/VoltAgent/awesome-agent-skills/pull/1456), [#1455](https://github.com/VoltAgent/awesome-agent-skills/pull/1455) and [#1454](https://github.com/VoltAgent/awesome-agent-skills/pull/1454) were opened 2026-11-20 and have no recorded review.
- With 11 open PRs and no merges in the window, the queue is growing. The data covers only the last 24h, so the total backlog size is unknown, but maintainers should batch-review. Duplicate or promotional submissions such as the Kling pair are a candidate for triage first.

**Health assessment:** Community interest is high, but review and merge activity today was zero. The main risk is a growing queue and declining curation quality, not code stability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
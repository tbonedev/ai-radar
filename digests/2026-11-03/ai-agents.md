# MCP Ecosystem Digest 2026-11-03

> Issues: 6 | PRs: 1 | Projects covered: 7 | Generated: 2026-11-03 14:49 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-03

## 1. Today's Overview
Activity is low-to-moderate: 6 issues and 1 PR were updated in the last 24 hours, with no new releases. Almost all of it was triage cleanup. Five of six issues and the only PR were closed, and four of those closed items concern the `memory` server. This looks like a maintainer sweep of the backlog, especially the `v2`-labelled memory issues, rather than new feature development. Only one issue is still open.

## 2. Releases
No new releases.

## 3. Project Progress
Closed PR:
- [PR #4888](https://github.com/modelcontextprotocol/servers/pull/4888) `fix(memory): report entities that create_entities skipped` (author yotambraun, closed, not stated as merged). `create_entities` still ignores existing names, as documented. The PR added a `structuredContent.skipped` list so an agent can tell which entities were not stored. It fixes #4887. The data doesn't say whether it merged or was closed unmerged, so don't assume the change shipped. It was opened 2026-09-28 and closed after about 5 weeks.

## 4. Community Hot Topics
By comment count:
1. [#5058](https://github.com/modelcontextprotocol/servers/issues/5058) (8 comments, closed). `create_entities`, `create_relations` and `add_observations` are annotated `destructiveHint: false`, but each call rewrites the whole JSONL file from the parsed graph. Data the current schema doesn't recognize can therefore be dropped. Users want tool annotations to match real behavior and want the memory store to preserve unknown data.
2. [#4797](https://github.com/modelcontextprotocol/servers/issues/4797) (8 comments, closed). The #4555 mutex works within one process, but two server processes sharing `MEMORY_FILE_PATH` silently overwrite each other's writes. This is a real multi-client scenario, such as several agent hosts sharing one memory file. It needs cross-process locking or atomic writes.
3. [#4549](https://github.com/modelcontextprotocol/servers/issues/4549) (5 comments, closed). A proposal to encourage security scanning for community server submissions, citing supply-chain risk as the ecosystem grows.
4. [#5153](https://github.com/modelcontextprotocol/servers/issues/5153) (4 comments, closed). Proposes declaring `idempotentHint: true` on the three memory write tools.

The common theme is correctness and honest tool metadata in the `memory` server, plus a growing concern about trust and safety.

## 5. Bugs & Stability
Ranked by severity, all closed today:
1. **Data loss, multi-process** — [#4797](https://github.com/modelcontextprotocol/servers/issues/4797). Concurrent server processes silently discard each other's writes. It is a follow-up to the in-process fix in #4555.
2. **Data loss, schema drift** — [#5058](https://github.com/modelcontextprotocol/servers/issues/5058). Rewriting the whole file drops fields the schema doesn't know, while the annotations claim the calls are non-destructive.
3. **Security exposure** — [#4882](https://github.com/modelcontextprotocol/servers/issues/4882). `server-everything`'s `get-env` returns the full process environment, which can expose credentials to the model. Closed as a duplicate. `server-everything` is a reference and test server, but this pattern could be copied.
4. **Usability** — [PR #4888](https://github.com/modelcontextprotocol/servers/pull/4888) addresses silent skipping in `create_entities`.

The data doesn't show whether fix PRs exist for #4797 or #5058. Closure suggests resolution or consolidation, but the details aren't in the data.

## 6. Feature Requests & Roadmap Signals
- [#5370](https://github.com/modelcontextprotocol/servers/issues/5370) (open, `enhancement`, `server-fetch`, `v2`). Cap the response body size while reading instead of buffering the whole body. Today `max_length` only limits what is returned, after the full download. A huge response can exhaust memory. It is a robustness and DoS-hardening request from maintainer cliffhall, so it is a plausible candidate for the v2 line.
- [#5153](https://github.com/modelcontextprotocol/servers/issues/5153) (closed). `idempotentHint: true` for the memory write tools. This is a small metadata change and was likely handled together with #5058.
- [#4549](https://github.com/modelcontextprotocol/servers/issues/4549) (closed). A security-scanning expectation for submissions. It is a policy matter, not a code change.

The `v2` labels on four items show that v2 is the active milestone.

## 7. User Feedback Summary
- Integrators who test servers programmatically (for example mcp-groundtruth, mentioned in #5153) care about accurate tool annotations, and wrong hints break client behavior.
- Users running multiple agents or hosts against a shared memory file want safe concurrent access.
- Security-conscious users are concerned about credential leakage (#4882) and community-server supply chain risk (#4549).
- Users of the fetch server need protection against unbounded responses (#5370).

No complaints of crashes were reported. The feedback is mostly detailed, constructive reports and proposals, not frustration.

## 8. Backlog Watch
- [#5370](https://github.com/modelcontextprotocol/servers/issues/5370) is the only open item. It was created 2026-10-28, last updated 2026-11-02, and has 2 comments. It has no linked fix PR and needs a maintainer decision or an assignee.
- The data covers only recently updated items, so long-stale issues can't be assessed here. The closures show older items, such as #4549 (from July) and #4797 (from September), are being worked down.
- Worth a quick check: confirm that #4797 (cross-process write safety) and #5058 (destructive-write semantics) have documented resolutions, such as file locking, atomic writes or corrected annotations. Otherwise users could still lose memory data with no signal.

**Project health:** Healthy triage throughput and responsive handling of memory-server correctness issues. Release cadence is quiet today, and only one issue remains open.

---

## Cross-Ecosystem Comparison

# AI Agent Ecosystem Cross-Project Report: MCP Infrastructure Cluster, 2026-11-03

## 1. Ecosystem Overview
The seven projects are not competing agents. They are the **supply chain around MCP and agent extensibility**: a reference implementation (MCP Servers), a canonical metadata registry (MCP Registry), and five discovery channels or catalogs (Awesome MCP Servers, Docker MCP Registry, Claude Plugins, Awesome Claude Code, Awesome Agent Skills). Intake is strong: about 235 PRs and issues were touched in 24 hours, nearly all of them new-server, plugin or skill submissions. Review and curation capacity is the bottleneck. Trust, data quality and supply-chain hygiene are now the main concerns, ahead of raw growth. Only the MCP Servers project showed real maintainer-side closure.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my estimate, 1–5) | Note |
|---|---|---|---|---|---|
| MCP Servers | 6 (5 closed) | 1 (closed) | None | 4 | Active triage sweep; 1 open issue |
| MCP Registry | 7 (3 closed) | 6 (5 closed, mostly Dependabot) | None | 3.5 | Steady; a time-sensitive namespace issue and a publish bug are open |
| Awesome MCP Servers | 0 | 149 (135 open) | None | 3 | Strong intake; ~90% still open |
| Docker MCP Registry | 0 | 50 (49 open) | None | 2.5 | Oldest PRs open ~4.5 months; no closed-source policy |
| Claude Plugins (Official) | 2 (open) | 5 (3 open, 2 closed) | None | 3 | Automated bumps work; two untriaged bugs |
| Awesome Claude Code | 16 (11 open) | 0 | None | 3.5 | Validation bot works; curation is manual |
| Awesome Agent Skills | 0 | 9 (all open) | None | 3 | New submissions, nothing merged |

Health scores are my own judgment from the digests. They are not metrics from the data. No project shipped a release today.

## 3. MCP Servers's Position
- **Role:** It is the only project here that ships code, as reference servers (memory, fetch, everything) that others copy. The others curate or list. Its correctness affects the whole ecosystem.
- **Advantages:** It has the best closure rate (5 of 6 issues, 1 of 1 PRs). It also has maintainers who engage on technical detail, such as cliffhall on #5370, and an active `v2` milestone.
- **Technical issues:** Its problems are real-engineering ones. They include multi-process write loss (#4797), annotations that don't match behavior (#5058), and an unbounded fetch body (#5370). The registries' problems are data quality and namespace governance.
- **Community size:** It has the lowest volume (7 items) but the highest signal per item, with 8 comments on its top issues. The directories see 50–149 PRs a day, with almost no discussion. The registry's data-quality issues reached 19 comments.
- **Risk:** The data doesn't confirm that #4797 and #5058 were fixed. They may have been closed as consolidated or stale.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Trust and supply-chain security | MCP Servers (#4549, #4882), Registry (#1783), Awesome Agent Skills, Docker | Security scanning, content hashes, credential leakage, vetting vendor and MCP skills |
| Metadata accuracy | MCP Servers (#5058, #5153), Registry (#1546, #1712) | Honest tool annotations, schema validation, reachability and auth status |
| Data freshness | Registry (#1715), Awesome MCP (#12356) | Re-validation (13.9% of 38,977 entries had problems); stale listings |
| Remote and hosted servers | Awesome MCP, Docker, Awesome Agent Skills | Streamable HTTP, OAuth 2.1, `tools.json: []`, closed-source listings |
| Dependency pinning | Claude Plugins (#6978, #6979), Registry bumps | Unpinned `mcp` resolving to 2.x; unbounded `pip` retries |
| Submission friction | Awesome MCP, Awesome Claude Code, Docker | Glama gate, duplicate submissions, repository fields that don't fit hosted servers |
| Namespace governance | Registry (#1778, #1789) | Domain ownership change on 19 Nov 2026 |

## 5. Differentiation Analysis
- **Reference code:** MCP Servers, for server developers. It is a TypeScript and Python code base with a v2 line.
- **Canonical registry:** MCP Registry, for publishers and clients. It is a Go service with schemas, namespaces and API validation.
- **Curated lists:** Awesome MCP (Glama score gate, labels), Awesome Claude Code (issue-based submissions and a validation bot), Awesome Agent Skills (PR-based, vendor-heavy).
- **Distribution catalogs:** Docker MCP Registry (container and remote-server packaging, with a Repository URL assumption) and Claude Plugins (SHA-pinned marketplace with `claude plugin validate`).
- **Automation maturity:** Claude Plugins and Awesome Claude Code have bots that validate before human review. Awesome MCP uses labels. Docker and Awesome Agent Skills show little visible automation.

## 6. Community Momentum & Maturity
- **High intake, low closure:** Awesome MCP (149), Docker (50), Awesome Claude Code (16), Awesome Agent Skills (9). Growth is fast, and review debt is building.
- **Rapidly iterating on substance:** MCP Servers (v2-labelled work) and the MCP Registry (schema and trust discussions).
- **Stabilizing or maintenance mode:** Claude Plugins, which is mostly bot bumps with thin human triage.
- **Stale-risk markers:** BrainOS PR open ~5.5 months, Keenable PR ~4.5 months, token-diet issue ~4 months, scandit bump ~3 weeks.

## 7. Trend Signals
1. **From discovery to trust.** The conversation has moved from "list my server" to "can I rely on it". Registries are measuring failure rates: 52 of 109 servers fail a handshake, and 13.9% of entries are problematic.
2. **Remote-first MCP.** Hosted and OAuth servers, including closed-source ones, are now a large share of submissions. Catalog policies built for local, containerized servers do not yet fit them.
3. **Agent-authored submissions.** About half of the sampled Awesome MCP PRs carry the 🤖 marker. Maintainers will need automated gates, since human review will not keep up.
4. **Tool metadata is a contract.** Annotations such as `destructiveHint` and `idempotentHint` drive client behavior, so wrong hints are bugs.
5. **MCP 2.x breaking changes are reaching downstream users.** Unpinned samples broke (#6978), and the v2 milestone is active.

**For agent developers:** pin MCP dependencies, check reachability and auth before depending on a registry entry, treat shared-state servers like memory as single-writer unless you have verified otherwise, and expect the Registry namespaces to change. Favor listings with validation signals (Glama score, `claude plugin validate`, content hashes).

*Caveats: the digests give no comment counts for several repos, only subsets of PRs were shown for Docker and Awesome MCP, and close reasons (merged versus rejected) are mostly not stated.*

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest — 2026-11-03

## 1. Today's Overview
Activity was moderate and maintenance-heavy: 7 issues and 6 PRs updated in 24h, with no new releases. Three long-running data-driven issues (#1715, #1712, #1546) were closed, while four issues remain open, mostly namespace and feature requests. PR flow was dominated by Dependabot dependency bumps (5 of 6 closed). One substantive community bugfix (#1788) is open. Overall health looks steady, with maintainers triaging older discussions.

## 2. Releases
None.

## 3. Project Progress
Closed/merged PRs today (all Dependabot, dependency and CI hygiene):
- [#1773](https://github.com/modelcontextprotocol/registry/pull/1773): Go deps group in `/deploy` (pulumi sdk 3.270.0→3.272.0, x/mod).
- [#1764](https://github.com/modelcontextprotocol/registry/pull/1764) and [#1763](https://github.com/modelcontextprotocol/registry/pull/1763): go-jose/v4 4.1.4→4.1.6, in `/deploy` and the root module. This is likely a security or patch update.
- [#1762](https://github.com/modelcontextprotocol/registry/pull/1762): docker/login-action 4.6.0→4.7.0.
- [#1761](https://github.com/modelcontextprotocol/registry/pull/1761): cloud.google.com/go/kms 1.35→1.36 and x/time.

No feature PRs landed. Whether each PR was merged or closed unmerged isn't stated in the data.

## 4. Community Hot Topics
- [#1715](https://github.com/modelcontextprotocol/registry/issues/1715) (19 comments, closed): Proposal to periodically re-check published entries. A measurement of 38,977 entries found 13.9% (5,435) with problems against npm, PyPI and GitHub that the registry doesn't catch. The underlying need is ongoing validation and freshness, not just publish-time checks.
- [#1712](https://github.com/modelcontextprotocol/registry/issues/1712) (19 comments, closed): Measured 109 latest-version servers. 52 fail an anonymous MCP handshake, and 33 of those return bodies a JSON-RPC client can't parse. It proposes a listing field for reachability and auth status. Clients want to know before connecting whether a server is usable.
- [#1546](https://github.com/modelcontextprotocol/registry/issues/1546) (10 comments, closed): The registry accepted `"repository": {}` despite the schema requiring `url` and `source`. This is a validation-gap issue.
- [#1783](https://github.com/modelcontextprotocol/registry/issues/1783) (7 comments, open): Optional content-integrity fields (hashes) for npm, PyPI and OCI packages, similar to MCPB `fileSha256`. This is a supply-chain security concern.

## 5. Bugs & Stability
1. [PR #1788](https://github.com/modelcontextprotocol/registry/pull/1788) (open fix for #1787): Publish returns 403 for GitHub logins containing uppercase letters, because the `io.github.*` grant keeps raw case. This blocks affected publishers, and a fix is pending review.
2. [#1758](https://github.com/modelcontextprotocol/registry/issues/1758): DevLens MCP is active in the official registry but missing from GitHub MCP Registry search. It may be a downstream sync issue, and there's no fix PR.
3. [#1546](https://github.com/modelcontextprotocol/registry/issues/1546) (closed): Schema validation gap for empty `repository`. The data doesn't say whether a fix was linked.

## 6. Feature Requests & Roadmap Signals
- Content-integrity fields ([#1783](https://github.com/modelcontextprotocol/registry/issues/1783)) are a plausible schema extension. Because they're optional and additive, they're a lower-risk candidate.
- Periodic re-validation ([#1715](https://github.com/modelcontextprotocol/registry/issues/1715)) and handshake or reachability metadata ([#1712](https://github.com/modelcontextprotocol/registry/issues/1712)) were closed. The closure reason isn't in the data, so it's unclear whether they were accepted, deferred or declined.
- Namespace migration is a recurring operational need ([#1789](https://github.com/modelcontextprotocol/registry/issues/1789), [#1778](https://github.com/modelcontextprotocol/registry/issues/1778)). A self-service migration or namespace-lock flow could follow.

## 7. User Feedback Summary
- Publishers want to move from `io.github.*` to verified-domain namespaces ([#1789](https://github.com/modelcontextprotocol/registry/issues/1789)).
- Publishers worry about domain ownership changes that could let others take over their namespaces ([#1778](https://github.com/modelcontextprotocol/registry/issues/1778), with a 19 Nov 2026 deadline).
- Consumers and researchers report data-quality problems: stale or broken entries, unreachable servers, and weak validation.
- Cross-platform discoverability gaps, such as GitHub MCP Registry sync ([#1758](https://github.com/modelcontextprotocol/registry/issues/1758)).

## 8. Backlog Watch
- [#1778](https://github.com/modelcontextprotocol/registry/issues/1778): Time-sensitive. The domain changes owner on 19 Nov 2026, and the issue has 1 comment and no resolution. It needs maintainer action soon.
- [#1789](https://github.com/modelcontextprotocol/registry/issues/1789): New migration request, 0 comments.
- [#1758](https://github.com/modelcontextprotocol/registry/issues/1758): Open since 2026-10-28 with 1 comment.
- [PR #1788](https://github.com/modelcontextprotocol/registry/pull/1788): A fix for a publish-blocking bug that needs review.
- [#1783](https://github.com/modelcontextprotocol/registry/issues/1783): Active discussion, but it needs a maintainer decision on the design.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-03

## 1. Today's Overview
The repo is a pure submission pipeline today: 0 issues, 0 releases, and 149 PRs updated (135 open, 14 merged/closed). Activity is high and almost entirely new-server listing requests. The highest-numbered PRs (#18460–#18472) were all opened on 2026-11-03, so intake is running at roughly a dozen new submissions a day. Label automation (`has-glama`, `missing-glama`, `valid-name`, `has-emoji`, `merge-conflict`, `duplicate`, `manual-review`) is working as the triage layer. Review throughput is the weak point: about 90% of touched PRs are still open.

## 2. Releases
None. The repo is a curated list, not a versioned package.

## 3. Project Progress
Of the 14 PRs closed today, the visible ones are mostly cleanups of stale or duplicate submissions rather than merges. The data doesn't show which, if any, were merged.
- [#12356](https://github.com/punkpeye/awesome-mcp-servers/pull/12356) and [#8315](https://github.com/punkpeye/awesome-mcp-servers/pull/8315): both closed as `duplicate` and `manual-review`. Both were cachly-mcp tool-count and install-command updates, from Aug and Jun, so a sweep of old duplicate PRs is under way.
- [#18104](https://github.com/punkpeye/awesome-mcp-servers/pull/18104): the EcomPick submission was closed and resubmitted as [#18467](https://github.com/punkpeye/awesome-mcp-servers/pull/18467). The new PR carries the `has-glama` label, which suggests the author fixed the missing-Glama check.
- [#12532](https://github.com/punkpeye/awesome-mcp-servers/pull/12532): misata, closed after about 2.5 months with a `merge-conflict` label.
- [#18248](https://github.com/punkpeye/awesome-mcp-servers/pull/18248): CabalLens (Solana forensics), closed with `missing-glama`.

## 4. Community Hot Topics
Comment counts are undefined in the data, so no PR can be ranked by discussion or reactions (all show 👍 0). The recurring themes in the new submissions are:
- **Agent/human interfaces:** [#18457](https://github.com/punkpeye/awesome-mcp-servers/pull/18457) humanbottasks (human fallback for agents) and [#18462](https://github.com/punkpeye/awesome-mcp-servers/pull/18462) esp32-iphone-agent (an agent operating a real iPhone through an ESP32 board). Both reach beyond software into physical or human-in-the-loop work.
- **Web and browser tooling:** [#18468](https://github.com/punkpeye/awesome-mcp-servers/pull/18468) DOMStrip (URL to Markdown) and [#18469](https://github.com/punkpeye/awesome-mcp-servers/pull/18469) Browser Control SDK (Windows WebView2).
- **Verticals:** [#18472](https://github.com/punkpeye/awesome-mcp-servers/pull/18472) ListRiver (business registries), [#18465](https://github.com/punkpeye/awesome-mcp-servers/pull/18465) sanjae-apply (Korean workers' compensation forms), [#18467](https://github.com/punkpeye/awesome-mcp-servers/pull/18467) EcomPick (e-commerce), [#18463](https://github.com/punkpeye/awesome-mcp-servers/pull/18463) ChartPNG (charts), and [#18471](https://github.com/punkpeye/awesome-mcp-servers/pull/18471) Tourwright (video).
- **Developer tools:** [#18466](https://github.com/punkpeye/awesome-mcp-servers/pull/18466) repofit, which recommends GitHub projects from local agent memory and rules.
- **Hosted and remote servers:** [#18464](https://github.com/punkpeye/awesome-mcp-servers/pull/18464) AIToURL, which is listed under Glama connectors.
- **AI-assisted submissions:** at least ten of the 20 sampled PRs carry the 🤖🤖🤖 marker, so a large share of the intake is agent-authored.

The underlying need is discoverability. Authors want a listing in the main curated index, and the Glama score badge is the de facto quality gate.

## 5. Bugs & Stability
No issues were filed and no bugs or regressions are reported. Process-level friction shows up in the labels:
- `merge-conflict`: [#6600](https://github.com/punkpeye/awesome-mcp-servers/pull/6600) (BrainOS) and [#12532](https://github.com/punkpeye/awesome-mcp-servers/pull/12532). Alphabetical-insertion edits to one shared README conflict often.
- `missing-glama`: about half of the sampled PRs ([#18472](https://github.com/punkpeye/awesome-mcp-servers/pull/18472), [#18471](https://github.com/punkpeye/awesome-mcp-servers/pull/18471), [#18465](https://github.com/punkpeye/awesome-mcp-servers/pull/18465), [#18463](https://github.com/punkpeye/awesome-mcp-servers/pull/18463), [#18462](https://github.com/punkpeye/awesome-mcp-servers/pull/18462), [#18461](https://github.com/punkpeye/awesome-mcp-servers/pull/18461), [#18460](https://github.com/punkpeye/awesome-mcp-servers/pull/18460)).
- `duplicate`: the cachly-mcp pair above.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. Two structural signals come from the PRs:
- Remote or hosted servers are emerging as their own category. AIToURL ([#18464](https://github.com/punkpeye/awesome-mcp-servers/pull/18464)) is placed under "Glama connectors", and several others advertise Streamable HTTP endpoints next to stdio.
- Registry metadata is becoming expected. Submissions cite the Official MCP Registry IDs (ListRiver, DOMStrip, ChartPNG).

I'd expect continued category growth (Embedded System, Legal, Multimedia) and possibly stricter enforcement of the Glama and duplicate checks. That is my inference, not something stated in the data.

## 7. User Feedback Summary
There is no issue feedback, so this section rests only on the PR descriptions:
- Authors repeatedly update stale entries, such as the tool count rising from 84 to 122 and a changed install command ([#12356](https://github.com/punkpeye/awesome-mcp-servers/pull/12356), [#8315](https://github.com/punkpeye/awesome-mcp-servers/pull/8315)). Listings go out of date, and there seems to be no clean way to update them.
- Resubmitting after a closure ([#18104](https://github.com/punkpeye/awesome-mcp-servers/pull/18104) to [#18467](https://github.com/punkpeye/awesome-mcp-servers/pull/18467)) suggests the Glama requirement is a real onboarding hurdle.
- Authors disclose AI assistance openly (e.g. [#18469](https://github.com/punkpeye/awesome-mcp-servers/pull/18469)).

## 8. Backlog Watch
- [#6600](https://github.com/punkpeye/awesome-mcp-servers/pull/6600) BrainOS: open since 2026-05-19 (about five and a half months), `has-glama`, blocked by `merge-conflict`. It needs the author to rebase or a maintainer decision.
- [#17387](https://github.com/punkpeye/awesome-mcp-servers/pull/17387) aidministratie/mcp: open since 2026-10-23 with `has-glama` and valid labels, so it looks ready for maintainer review.
- With 135 open PRs and 0 comments visible, a maintainer batch-review pass is the main need. Prioritizing PRs that have `has-glama` and `valid-name` and no conflict would clear the backlog fastest.

**Health assessment:** Intake is strong and automated triage is effective. Maintainer review capacity is the bottleneck, and the stale-PR cleanup under way today is a positive sign.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-03

## 1. Today's Overview
The project had a high volume of contributor submissions and no maintainer-side movement. In the last 24 hours, 50 PRs were updated (49 open, 1 merged or closed). There were 0 issues and 0 releases. Almost all of the activity is new-server submissions: remote (hosted) MCP servers and a few local stdio servers. Several were opened today (#6532 to #6545). The numbers suggest the review queue is the bottleneck. Intake is strong, but few submissions are being closed out.

## 2. Releases
No new releases.

## 3. Project Progress
Only 1 PR was merged or closed in the window. The data provided doesn't say which one, and it isn't among the 20 PRs shown, so I can't say what it was. No feature or fix advanced in a way I can verify from this data. Throughput was roughly 1 in 50 of the PRs updated.

## 4. Community Hot Topics
The comment counts came through as `undefined`, and every PR has 0 👍. I can't rank by discussion, so this section only shows what is visible in the data. Listed in the order given, these are the entries at the top:

- [#6433](https://github.com/docker/mcp-registry/pull/6433) SystemSculpt: a proprietary hosted server with no source, only public docs. It is likely to raise a policy question about closed-source remote servers.
- [#6541](https://github.com/docker/mcp-registry/pull/6541) ForthClear Liquidation Marketplace: also hosted and closed-source.
- [#6545](https://github.com/docker/mcp-registry/pull/6545) AgentDrives: a remote server that helps agents check whether a SaaS, API or CLI product is usable by an agent.
- [#6544](https://github.com/docker/mcp-registry/pull/6544) PostOnce: social publishing across 9 platforms.
- [#6535](https://github.com/docker/mcp-registry/pull/6535) MachineMail: email inboxes for agents, using OAuth.

**Underlying needs:**
- **Remote server support.** Most submissions use streamable-http endpoints and not Docker-built images. Many use `tools.json: []` with dynamic tool discovery (#3969, #6539, #6535).
- **Closed-source listings.** Vendors want catalog presence without publishing source (#6433, #6541).
- **Domain-specific data servers.** Examples are finance ([#6360](https://github.com/docker/mcp-registry/pull/6360), [#5036](https://github.com/docker/mcp-registry/pull/6536), [#6534](https://github.com/docker/mcp-registry/pull/6534)), regional public data ([#6536](https://github.com/docker/mcp-registry/pull/6536) Poland, [#6543](https://github.com/docker/mcp-registry/pull/6543) Sweden, [#5228](https://github.com/docker/mcp-registry/pull/5228) Greece), and academic search ([#6537](https://github.com/docker/mcp-registry/pull/6537)).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. There were 0 issues. The data has no CI or build-failure signal, so I can't assess validation health.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. The submission patterns suggest where the catalog is heading:
- **Remote and OAuth servers.** Examples are PoliteReach (OAuth 2.1 with PKCE and dynamic client registration, [#5430](https://github.com/docker/mcp-registry/pull/5430)) and MachineMail (#6535). Reviewers will likely need a consistent approach to auth for these.
- **Keyless and public servers.** Examples are Keenable ([#3969](https://github.com/docker/mcp-registry/pull/3969)), BestPrice ([#5228](https://github.com/docker/mcp-registry/pull/5228)) and Free AI For That ([#6538](https://github.com/docker/mcp-registry/pull/6538)).
- **Agent infrastructure.** Email (#6535), web search (#3969), media and ads (#5240 Clipwright, #6532 Tolstoy), and email verification (#6540).

I'd expect the next catalog update to be mostly remote servers. This is a prediction and not something the data confirms.

## 7. User Feedback Summary
There are no issues or comments in the data, so I have no direct feedback. The PR descriptions show a few patterns:
- Contributors are following the template. Many describe their server, repository and auth.
- Some entries are explicit about having no repository (#6433, #6541, #6545). That suggests the template's "Repository URL" field doesn't fit hosted servers well.
- One contributor reworked a PR after renaming their repo (#5036).

## 8. Backlog Watch
These PRs have been open the longest among those that were updated, and they need maintainer attention:
- [#3969](https://github.com/docker/mcp-registry/pull/3969) Keenable Web Search: opened 2026-06-19, about 4.5 months open.
- [#5036](https://github.com/docker/mcp-registry/pull/5036) dfx-intelligence: opened 2026-09-09, and it replaced its earlier entry.
- [#5228](https://github.com/docker/mcp-registry/pull/5228) BestPrice: opened 2026-09-24.
- [#5240](https://github.com/docker/mcp-registry/pull/5240) Clipwright: opened 2026-09-25, a local stdio server pinned to v0.33.0.
- [#5430](https://github.com/docker/mcp-registry/pull/5430) PoliteReach: opened 2026-10-04.

Most of these were updated today, probably because the authors pushed changes or pinged. Their long wait without a merge is a health concern. A policy for closed-source remote servers (#6433, #6541) and triage of the older PRs would clear a lot of the queue.

**Caveat:** Only 20 of the 50 PRs were provided, and the comment counts were missing. The picture above is partial.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-11-03

## 1. Today's Overview
Activity is light and mostly automated. There were 2 issues (both open), 5 PRs (3 open, 2 closed), and no releases. Three of the five PRs are `github-actions[bot]` SHA bumps for third-party plugins. The only human-authored PR, a new plugin submission, was closed the same day. Both issues are bug reports about unpinned or poorly bounded `pip` usage inside official plugins. They show a recurring dependency-hygiene risk, not an acute outage.

## 2. Releases
No new releases.

## 3. Project Progress
Two PRs were closed:
- **[#6980](https://github.com/anthropics/claude-plugins-official/pull/6980)** `add(plugin-json): adspirer-advertising-agent`. A community submission (author amekala) to add Adspirer's Claude Code plugin to the marketplace. It was closed on the day it was opened. The data doesn't say whether it was rejected, merged by another route, or withdrawn.
- **[#6531](https://github.com/anthropics/claude-plugins-official/pull/6531)** `bump(scandit-sdk): 2f0731a0 → 38524706`. This bot PR was opened 2026-10-12 and closed 2026-11-02 without merging. It was superseded by **[#6983](https://github.com/anthropics/claude-plugins-official/pull/6983)**, which bumps the same plugin to a newer SHA (`3d024755`). The old PR sat open for about three weeks.

Open automated bumps, validated with `claude plugin validate` and awaiting review:
- [#6983](https://github.com/anthropics/claude-plugins-official/pull/6983) scandit-sdk
- [#6982](https://github.com/anthropics/claude-plugins-official/pull/6982) save-to-spotify
- [#6981](https://github.com/anthropics/claude-plugins-official/pull/6981) datadog

## 4. Community Hot Topics
Engagement is minimal. Every item has 0 comments and 0 👍, so there are no hot threads. The two issues are the most substantive:
- **[#6979](https://github.com/anthropics/claude-plugins-official/issues/6979)** (security-guidance). Users on slow connections are affected by the SDK bootstrap design.
- **[#6978](https://github.com/anthropics/claude-plugins-official/issues/6978)** (mcp-tunnels). New users following the documented sample path are affected.

Both point to the same need: install steps in plugins should be reproducible and bounded. That means pinned dependency versions, and cleanup when a step fails.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6979](https://github.com/anthropics/claude-plugins-official/issues/6979), security-guidance disk leak.**
   - **Cause:** on connections slower than about 9 Mbit/s, the `pip install claude-agent-sdk` step hits its 120 s `subprocess.run` timeout. The process is SIGKILLed, and the partial download stays in `$TMPDIR`.
   - **Impact:** the bootstrap retries every 5 minutes. The reporter measured **8.96 GB accumulated in 20 hours**. That can fill a disk and affects a security-related plugin.
   - **Fix:** no fix PR yet.
2. **[#6978](https://github.com/anthropics/claude-plugins-official/issues/6978), mcp-tunnels sample crash-loop.**
   - **Cause:** the `hello-mcp` Compose service runs an unpinned `pip install mcp`, which now resolves to mcp 2.x. That version has no `mcp.server.fastmcp`.
   - **Impact:** the container exits on start, so the tunnel's `echo` route has nothing behind it. This is deterministic for anyone using the sample path, but it affects only the demo.
   - **Fix:** no fix PR yet. The likely fix is to pin `mcp<2` or migrate the sample to the 2.x API.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. The one marketplace-expansion signal is the closed Adspirer submission ([#6980](https://github.com/anthropics/claude-plugins-official/pull/6980)). It shows continued third-party interest in listing advertising and marketing plugins. The data doesn't show whether it will be resubmitted. The roadmap signal from the bugs is hardening: pinned dependencies and bounded, self-cleaning bootstrap steps.

## 7. User Feedback Summary
- **Network-constrained users** feel the cost of heavy first-run installs. A failed or timed-out install silently consumes disk, with no backoff and no cleanup.
- **Newcomers following documentation** hit an upstream breaking release (mcp 2.x) because the docs don't pin versions.
- Nothing today shows satisfaction. The feedback is purely defect-driven.

## 8. Backlog Watch
- **Stale bot PR:** #6531 stayed open about 3 weeks before being closed in favor of a newer bump. This hints at slow review of automated bumps. The three open bumps (#6981–#6983) may follow the same pattern if they are not reviewed promptly.
- **Unresponded issues:** #6978 and #6979 have no comments or maintainer triage. #6979 deserves priority because the disk growth is unbounded.
- **Unclear outcome:** #6980 was closed with no visible rationale in the data. A maintainer note would help the contributor.

**Project health:** Low volume with a healthy automation pipeline, where every bump is validated before the PR opens. Human triage and responsiveness look thin, and there are two untriaged dependency-related bugs.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-11-03

## 1. Today's Overview
Activity today is high on intake but entirely one-directional. 16 issues were updated (11 open, 5 closed), all of them `resource-submission` entries. There were 0 PRs and 0 releases. Most submissions were opened on 2026-11-03 and passed automated validation, so the pipeline is working. The list is waiting on maintainer curation. The mix leans toward Claude Code extensibility: mods, skills, hooks, MCP, and security tooling.

## 2. Releases
No new releases.

## 3. Project Progress
There were no PRs merged or closed today, so no features or fixes landed. The 5 closed issues were all closed by automation or as duplicates, not by curation:
- [#3437](hesreallyhim/awesome-claude-code Issue #3437) and [#3436](hesreallyhim/awesome-claude-code Issue #3436): `gpu-resume-skill` was submitted twice. The `validation-pending` copy (#3437) was auto-closed, and the `validation-passed` copy (#3436) was also auto-closed.
- [#3431](hesreallyhim/awesome-claude-code Issue #3431): the `validation-pending` duplicate of Workspace (#3429) was auto-closed.
- [#3424](hesreallyhim/awesome-claude-code Issue #3424): Ponder (Testing) was auto-closed while still `validation-pending`.
- [#2134](hesreallyhim/awesome-claude-code Issue #2134): token-diet (Tooling: Usage Monitors) was `validation-passed` and was closed today. It was opened on 2026-06-26.

## 4. Community Hot Topics
No issue stands out. Every item has 1–2 comments and 0 👍. The comments are mostly from the validation bot. Interest is therefore better read from category clustering:
- **Mods (3):** [#3434 sprout](hesreallyhim/awesome-claude-code Issue #3434) (subagent tracking pane), [#3432 smartcompact](hesreallyhim/awesome-claude-code Issue #3432) (compacts at natural breakpoints), and [#3430 idle-mod](hesreallyhim/awesome-claude-code Issue #3430) (project checks while Claude works). These show demand for visibility into agents and for context management.
- **Skills / review (2):** [#3426 SkillArray](hesreallyhim/awesome-claude-code Issue #3426) (two-model cross-review) and [#3427 setup-hooks](hesreallyhim/awesome-claude-code Issue #3427) (guided hook setup).
- **Quality and safety:** [#3433 Vedha](hesreallyhim/awesome-claude-code Issue #3433) (Playwright MCP testing with verified steps) and [#3435 ControlLoop](hesreallyhim/awesome-claude-code Issue #3435) (static scanner and CI gate for Claude Code configuration).
- **Memory and context:** [#3429 Workspace](hesreallyhim/awesome-claude-code Issue #3429) (shared workspace for Claude Code and Codex).

The underlying needs are agent observability, cheaper and smarter context use, and trustworthy verification of agent output.

## 5. Bugs & Stability
There were no bug reports or regressions. One process issue showed up: users submitted duplicates (#3436/#3437 and #3429/#3431) and had `validation-pending` entries auto-closed. This suggests the submission template or bot feedback may confuse submitters. This is a minor concern.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests. Submissions point to category growth in **Mods**, **Security**, **Testing**, **Creative Media** ([#3428 AskEditor](hesreallyhim/awesome-claude-code Issue #3428), a video-editor MCP plugin), and **Multi-Purpose** ([#3425 SaaS Marketing Agents](hesreallyhim/awesome-claude-code Issue #3425)). If accepted, these would add entries to those sections of the list. There is no sign of a software release, since this is a curated list.

## 7. User Feedback Summary
- Contributors are active and are submitting a wide variety of tools. Most pass validation on the first attempt.
- No comment or 👍 engagement shows community-side feedback on the submissions.
- Non-Claude-Code-centric entries, such as [#2607 OpenOutreach](hesreallyhim/awesome-claude-code Issue #2607) (a B2B lead-finder CLI under "Start Here"), may test the list's scope.
- Duplicate submissions point to uncertainty about whether the first attempt was registered.

## 8. Backlog Watch
- [#2607 OpenOutreach](hesreallyhim/awesome-claude-code Issue #2607): open since 2026-08-22 (about 10 weeks), `validation-passed`, last updated 2026-11-02. It needs a maintainer decision, and its category fit is questionable.
- The 9 open submissions from 2026-11-02 and 2026-11-03 (#3425–#3435) are `validation-passed`. They are new, but they need a curation pass to avoid backlog buildup.
- [#2134 token-diet](hesreallyhim/awesome-claude-code Issue #2134) took about 4 months to close, which shows how long review can take.
- There are no open PRs, so the only backlog is in the issue-based submission queue.

**Health assessment:** Intake is healthy and automation is working. Maintainer curation throughput appears to be the bottleneck.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Project Digest (2026-11-03)

## 1. Today's Overview
The repository (VoltAgent/awesome-agent-skills) shows contribution-only activity today. Nine PRs were updated (all open, none merged or closed), and there were no issue updates and no releases. All nine PRs (#1337–#1345) are new "add a skill" submissions, and the PR numbers run consecutively, so inbound submission volume is steady. Nothing was merged today, so the maintainers' review throughput is the main health question. None of the PRs has any visible reactions (👍: 0), and the comment counts weren't reported in the data.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes landed. The curated list itself did not change.

## 4. Community Hot Topics
No PR or issue shows visible engagement: all have 0 👍 and the comment counts are unavailable. The submissions cluster by category, which shows what contributors want listed:

- **Productivity & Collaboration (4 PRs):**
  - [#1344](https://github.com/VoltAgent/awesome-agent-skills/pull/1344): `keenableai/keenable-web`, for web search, reading pages and citing sources through a hosted MCP server.
  - [#1345](https://github.com/VoltAgent/awesome-agent-skills/pull/1345): `QingYunA/answer-me-with-html`, which answers hard questions as one offline HTML page. The author reports a repo with 5.1k stars.
  - [#1340](https://github.com/VoltAgent/awesome-agent-skills/pull/1340): `periskope-org/perisclaw-whatsapp`, a WhatsApp skill built on an MCP server.
  - [#1343](https://github.com/VoltAgent/awesome-agent-skills/pull/1343): EasyPost (`gybin02/easypost`), multi-platform social auto-publishing for Xiaohongshu, Douyin, Bilibili, X, Instagram and others. Its category isn't stated in the data.
- **Development & Testing (2 PRs):**
  - [#1342](https://github.com/VoltAgent/awesome-agent-skills/pull/1342): `webly-ai/webly`, agent-driven website hosting over a hosted MCP server.
  - [#1341](https://github.com/VoltAgent/awesome-agent-skills/pull/1341): `ScrapingBee/scrapingbee-cli`, covering scraping, search and crawling.
- **Specialized Domains (1 PR):** [#1339](https://github.com/VoltAgent/awesome-agent-skills/pull/1339), `federicodeponte/autonomous-research`, which drafts research papers from a topic line.
- **Marketing (1 PR):** [#1338](https://github.com/VoltAgent/awesome-agent-skills/pull/1338), `zhuyansen/new-term-radar`, which tracks new AI model and product names.
- **Blockchain/domain (1 PR):** [#1337](https://github.com/VoltAgent/awesome-agent-skills/pull/1337), `celo-org/celopedia`, which reports 560+ installs on skills.sh.

**Underlying needs:** MCP-backed vendor skills are the dominant pattern. Of the nine PRs, #1344, #1342, #1340 and #1343/#1341 (a CLI) are vendor or product-driven. Vendors use the list as a distribution channel, and several PRs cite adoption signals (stars, installs) as justification.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there were no issues.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. Indirect signals from the submissions:
- Demand for web access and data tooling (search, scraping, crawling, research) is the strongest theme: #1344, #1341, #1339.
- Messaging and social integrations (WhatsApp, Chinese social platforms) are a growing niche: #1340, #1343.
- Domain-specific skills (blockchain, marketing) are filling out existing categories: #1337, #1338.

The data doesn't show whether a category needs restructuring. If submissions keep growing, maintainers may eventually need to split crowded sections such as Productivity and Collaboration, or add a Messaging or Web category. This is an inference, not a stated plan.

## 7. User Feedback Summary
No direct user feedback came in through issues or comments today. The PR descriptions show contributors:
- Typically self-promote their own skills (e.g. #1345 says "I'm the author").
- Cite adoption metrics such as stars or installs to meet implied inclusion criteria.
- Link to a public repo with a `SKILL.md`, MIT licensing or both (#1337, #1340).

Whether the list enforces quality criteria is unclear, because no maintainer responses were visible.

## 8. Backlog Watch
All nine PRs are new (created 2026-11-02 or 2026-11-03), so none is stale yet. Two concerns for maintainers:
- **Review queue growth:** PR numbers have reached #1345 and the visible batch has zero merges, so older submissions may be piling up. The data covers only the last 24 hours and doesn't show the full backlog.
- **Vetting:** several PRs are vendor-submitted and self-authored (#1345, #1344, #1342, #1341, #1340). Maintainers should check each for relevance, maintenance status, license and security, especially the MCP-based ones that connect to hosted services or personal accounts such as WhatsApp.

**Activity assessment:** inbound interest is high, but today's maintainer activity is not visible.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# MCP Ecosystem Digest 2026-11-24

> Issues: 2 | PRs: 0 | Projects covered: 7 | Generated: 2026-11-23 18:56 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-11-24

## 1. Today's Overview
Activity on modelcontextprotocol/servers is very low in this 24-hour window. Two issues were updated, both open, and there were no PR updates, merges, or releases. Both issues concern input and configuration quality in reference servers (`git` and `everything`), not outages. Overall health looks stable but quiet, and the maintainers have not yet responded visibly to either issue.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were updated, merged, or closed today, so no features or fixes advanced. The data does not show any fix PR for the two open issues.

One piece of context comes from #5647. It refers to #3669, which was closed as fixed by #5475. That PR described every input property in the filesystem, memory and everything servers. The git server was not covered.

## 4. Community Hot Topics
Engagement is modest: no issue has any 👍, and the highest comment count is 3.

- **[#5647](https://github.com/modelcontextprotocol/servers/issues/5647): git: 21 of 32 tool input properties have no description** (3 comments, labels: enhancement, v2).
  - Author: simplymanas. Created 2026-11-21, updated 2026-11-23.
  - The report says the earlier schema-description cleanup (#3669, fixed by #5475) stopped short of the Python `mcp-server-git`.
  - Underlying need: LLM clients rely on property descriptions to call tools correctly. Missing descriptions on roughly 66% of git tool inputs (21 of 32) hurt tool-selection and argument accuracy. Users expect the same schema quality across all reference servers.
  - The report targets the "Modern (2026-07-28)" protocol era. The `v2` label suggests it may be scheduled with the v2 work.

- **[#5642](https://github.com/modelcontextprotocol/servers/issues/5642): everything: non-numeric `GZIP_MAX_FETCH_SIZE` silently disables the documented cap** (1 comment).
  - Author: reservoir-cmyk. Created 2026-11-21, updated 2026-11-22.
  - The author attached a failing test.
  - Underlying need: configuration should fail safe. Users want the documented limit enforced, or an explicit error on invalid input.

## 5. Bugs & Stability
Ranked by severity:

1. **[#5642](https://github.com/modelcontextprotocol/servers/issues/5642), a robustness and security-adjacent bug in `everything`.**
   - `GZIP_MAX_FETCH_SIZE` is parsed with `Number(...)` at load time (`tools/gzip-file-as-resource.ts:40-43`).
   - A non-numeric value becomes `NaN`. Every comparison against `NaN` is false, so the size cap is silently bypassed.
   - The impact is limited to a misconfiguration case in a reference and demo server. The risk is unbounded fetch size, which could mean memory or resource exhaustion.
   - A failing test is attached, which makes a fix easy. No fix PR exists yet.

2. **[#5647](https://github.com/modelcontextprotocol/servers/issues/5647), a documentation and schema quality gap, not a crash.**
   - Missing descriptions can cause poorer LLM tool use. It is a usability defect with no stability impact.
   - No fix PR exists yet.

## 6. Feature Requests & Roadmap Signals
- **Schema descriptions for the git server (#5647).**
  - It is labeled `enhancement` and `v2`, and the earlier fix for the other servers sets a precedent.
  - It is a likely candidate for the next release that covers v2 work. The change is mechanical, low-risk, and well scoped.
- **Stricter validation of environment configuration (#5642).** This is not a feature request in the strict sense. A small change such as `Number.isFinite` validation, with either a fallback to the default or a startup error, is plausible. The attached failing test makes a quick merge feasible.

## 7. User Feedback Summary
- Contributors are auditing the reference servers closely and filing precise, reproducible reports. #5642 includes a failing test.
- Users are asking for consistency. Fixes applied to some reference servers should reach all of them, as with the git server in #5647.
- Users value predictable configuration behavior. Documented limits should be enforced, and bad values should fail loudly instead of silently disabling a safeguard.
- There is no satisfaction or dissatisfaction signal beyond these reports, since reactions are zero.

## 8. Backlog Watch
- **[#5647](https://github.com/modelcontextprotocol/servers/issues/5647)** has been open for about 3 days with 3 comments. It needs a maintainer decision on whether it joins the v2 milestone, and a contributor to pick it up. It is a good candidate for a first-time contributor.
- **[#5642](https://github.com/modelcontextprotocol/servers/issues/5642)** has been open for about 3 days with 1 comment. It needs a maintainer to triage the "question" framing in the title and confirm the intended behavior for invalid values. After that, a small PR can use the supplied test.
- The data window shows no old stale items. The report cannot assess the wider backlog beyond these two issues.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison — 2026-11-24

**Scope note:** The summaries cover only the MCP-adjacent projects supplied: servers, registry, two awesome-lists, the Docker catalog, Claude plugins, and agent skills. They cover no agent runtimes or personal assistants. Some inputs have partial data: the awesome-list and Docker items have no comment counts, and the awesome-list data covers 20 of 164 PRs.

## 1. Ecosystem Overview
The MCP ecosystem is moving from building servers to **distributing and trusting** them. Registry and plugin infrastructure ship fast, with 3 registry releases in about 2 days. Their work centers on malware sweeps, moderation holds, and credential hardening. Discovery layers (awesome-lists, Docker catalog, skills lists) face large inbound submission volumes: 164 PRs in one list, 50 in the Docker catalog. Review throughput is the shared bottleneck. The core reference servers repo is quiet and mostly maintained through small quality fixes.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Releases | Health (1–5, my judgment) |
|---|---|---|---|---|
| MCP Servers | 2 | 0 | None | 3: stable but quiet, no maintainer response seen |
| MCP Registry | 3 | 17 (13 merged or closed) | 3 (v1.8.14–16) | 4.5: very fast on internal work, slow on external PRs |
| Awesome MCP Servers | 0 | 164 (7 merged or closed) | None | 3: huge intake, ~4% closure |
| Docker MCP Registry | 1 | 50 (3 merged or closed) | None | 2.5: PRs open since Aug–Sep, no visible review |
| Claude Plugins (official) | 3 | 7 (2 closed) | None | 4: focused maintainer work, a stale pin and a 3-month-old issue |
| Awesome Claude Code | 0 | 0 | None | n/a: no activity |
| Awesome Agent Skills | 0 | 8 (0 merged) | None | 3: steady intake, no reviews |

Health scores are my own estimates based on throughput and responsiveness. They are not metrics from the data.

## 3. MCP Servers' Position
- **Role:** It is the reference implementation. The others either distribute servers (Registry, Docker, awesome-lists) or extend clients (Plugins, Skills). It has the least activity of the active projects (2 issues, 0 PRs), which fits a stabilized reference codebase.
- **Advantages:** Its contributor reports are precise. #5642 includes a failing test. It also has a clear quality bar, since earlier schema-description work (#5475) is being extended to the git server. It is also the canonical source, so its `v2` label ties it to protocol direction.
- **Differences in approach:** It focuses on code correctness (input schemas, config validation). The peers focus on curation, trust and operations. It has no release or merge signal today, so I can't call it fast-moving.
- **Community size:** By today's activity it is the smallest of the active projects. The awesome-list sees about 80x the PR volume (164 vs. 2 items). This reflects intake of third-party listings, not the size of the core community.

## 4. Shared Technical Focus Areas
- **Schema and metadata quality for LLM consumption:** Servers (#5647, 21 of 32 git properties lack descriptions). Skills and Docker entries also depend on accurate descriptions.
- **Supply-chain trust and security:** Registry (malware sweeps, moderation holds, tool-fingerprinting in #82), Plugins (workflow hardening in #7206, a security-guidance plugin), Awesome MCP (security and agent-shield submissions).
- **Fail-safe configuration:** Servers (#5642, where `NaN` silently disables a cap), Registry (credential key retirement), Plugins (Python launcher diagnostics, #7208).
- **Auth for remote servers:** Docker (OAuth 2.1 with DCR in #7589, #5277, #7588, #7587, and #7555), Registry (publisher identity).
- **Publish and CI ergonomics:** Registry (#1818 `--wait`, #1872 pagination docs), Docker (duplicate resubmission #7586 → #7587).
- **Automated quality gates:** Awesome MCP (Glama, emoji and name labels), Plugins (bot SHA bumps), where the stale pin #7203 shows a gap.

## 5. Differentiation Analysis
| Project | Focus | Primary users | Architecture/approach |
|---|---|---|---|
| MCP Servers | Reference implementations | Server authors, spec watchers | Code repo, TypeScript and Python |
| Registry | Official publish and discovery API | Publishers, client builders | Service with moderation and sweeps, `mcp-publisher` CLI |
| Awesome MCP Servers | Human-curated index | End users, discoverers | README PRs with label-based checks |
| Docker MCP Registry | Containerized and remote catalog | Docker users, enterprises | YAML entries with sandbox options (`disableNetwork`, read-only mounts) |
| Claude Plugins | Client-side extensions with hooks | Claude Code users | Plugin directory, SHA pins, bot bumps |
| Agent Skills | Cross-agent skill listing | Multi-agent developers | Curated list of vendor skills |

The Docker catalog is the only one with runtime sandboxing controls. The Registry is the only one with active automated malware moderation.

## 6. Community Momentum & Maturity
- **Rapid iteration:** Registry (3 releases, 13 PRs closed in 24h).
- **Active, focused:** Claude Plugins (the 2.0.22 security-guidance preparation).
- **High intake, low throughput (backlog risk):** Awesome MCP Servers (157 open of 164), Docker MCP Registry (PRs dating to 2026-08-18), Agent Skills (8 new PRs, 0 reviewed).
- **Stabilizing or quiet:** MCP Servers (only small fixes pending), Awesome Claude Code (no activity).

## 7. Trend Signals
1. **Trust is becoming the main differentiator.** Registry sweeps, plugin workflow hardening, and agent-shield submissions all point the same way. Developers should publish with provenance in mind and expect scanning, and in the Registry's case moderation holds.
2. **Tool-definition integrity is an open gap.** Registry #82 (38 comments, open since May 2025) isn't addressed by package-level scans. Treat tool descriptions as untrusted input.
3. **Remote servers with OAuth 2.1, DCR and PKCE are becoming standard.** The Docker catalog's submissions follow this pattern, but there is no documented template yet (#7555).
4. **Descriptions are functional, not cosmetic.** Missing parameter descriptions measurably harm tool selection (#5647). Complete schemas are cheap to add.
5. **Vendors are shipping official MCP servers and skills** (FlashData, e2e, Sendbird), so expect more first-party listings and more cross-agent packaging.
6. **Curation does not scale manually.** All the list-style projects show the same pattern, and the labels and bots in use suggest where tooling will go: automated validation, with duplicate and CI-feedback handling.

**Practical takeaway for decision-makers:** Use the Registry as the authoritative source and the Docker catalog where you need sandboxing. Treat awesome-lists as discovery aids, not vetted sources. Review any server's schema completeness and environment validation before adopting it.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest — 2026-11-24

## 1. Today's Overview
The registry is in a heavy operations and infrastructure phase. Maintainer @rdimitrov accounted for nearly all of the 17 PRs updated in the last 24h. 13 of those were merged or closed, and 3 releases shipped (v1.8.14, v1.8.15, v1.8.16). Work focused on production promotion, malware-sweep accuracy, moderation controls, database performance, and credential hardening. Community activity is low: 3 issues were active, 2 of them new submissions or requests, and only 4 PRs remain open. Overall health is strong, with a fast release cadence and visible quality follow-through. The one exception is slow handling of external contributions.

## 2. Releases
Three patch releases shipped in about two days. Each followed a "promote to production" PR. The release notes shown are truncated, so details beyond what is listed are unconfirmed.

- **[v1.8.16](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.16)**
  - Promotes v1.8.15 to production (#1904).
  - Reduces database work during edits and skips documentation-only staging deploys (#1908).
  - Per the promotion PR #1912, it also includes per-version moderation holds (#1910) and version-selection performance changes.
- **[v1.8.15](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.15)**
  - Uses `imageTag` alone with the next production release (#1901).
  - Confirms missing packages before sending sweep findings (#1902).
- **[v1.8.14](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.14)**
  - Promotes v1.8.13 to production (#1897).
  - Runs the staging malware sweep on demand (#1899).
  - Fixes moderation guidance and warning event counts (#1900).

**Breaking changes / migration:** None are indicated. One behavior change worth noting is that moderator holds on withdrawn versions now block publisher self-service restore for held versions. Even so, publisher withdrawals still support self-service restore, according to #1910.

## 3. Project Progress
Closed or merged PRs, grouped by theme:

**Malware sweep and moderation**
- [#1902](https://github.com/modelcontextprotocol/registry/pull/1902): Confirms package absence upstream before reporting. The Nov 22 production sweep flagged 649 server versions across 206 "missing" packages. Nine PyPI projects had an active install index but no distribution files, and their metadata endpoint returned 404. The on-demand staging run cleared all 17 previously misclassified entries.
- [#1896](https://github.com/modelcontextprotocol/registry/pull/1896): Reports a server's latest version when its named release is gone, and extends checks toward images.
- [#1900](https://github.com/modelcontextprotocol/registry/pull/1900): Separates report actions into confirmed malware, missing package, and unchecked release. It also fixes the Grafana warning-event counting.
- [#1899](https://github.com/modelcontextprotocol/registry/pull/1899): Adds an on-demand staging sweep. Production stays on its daily 03:40 UTC schedule.
- [#1910](https://github.com/modelcontextprotocol/registry/pull/1910): Adds private per-version moderation holds. Holds are enforced in PostgreSQL under the existing server lock, and mixed bulk operations are atomic.

**Performance**
- [#1908](https://github.com/modelcontextprotocol/registry/pull/1908): Status updates pick the latest version from version, status, and publication time. This avoids decoding every server document under the per-server lock. Metadata edits validate packages before opening a database transaction.

**Infrastructure and credentials**
- [#1909](https://github.com/modelcontextprotocol/registry/pull/1909), [#1911](https://github.com/modelcontextprotocol/registry/pull/1911), [#1914](https://github.com/modelcontextprotocol/registry/pull/1914): A staged migration moves the usage collector and backup jobs from a shared key to separate short-lived GKE workload identities. The stages are prepare, cut over, then retire the key.
- [#1913](https://github.com/modelcontextprotocol/registry/pull/1913): Allows production settings previews to run from `main`, matching environment protection rules.

**Release promotion**
- [#1904](https://github.com/modelcontextprotocol/registry/pull/1904), [#1901](https://github.com/modelcontextprotocol/registry/pull/1901), [#1912](https://github.com/modelcontextprotocol/registry/pull/1912): Production promotions for v1.8.14, v1.8.15, and v1.8.16.

## 4. Community Hot Topics
- **[Issue #82](https://github.com/modelcontextprotocol/registry/issues/82)** (38 comments, 1 👍) is the most discussed item by a wide margin. It was opened in May 2025 and updated again on Nov 22. It proposes that `server.json` submitters list and fingerprint the tools their server may invoke, so clients and third-party scanners can detect tool poisoning. The underlying need is supply-chain trust: clients want tamper evidence beyond package-level malware scans. The recent sweep and moderation work addresses package integrity, not tool-definition integrity, so this gap is still open. It is labeled "not go-live blocker".
- **[#1818](https://github.com/modelcontextprotocol/registry/pull/1818)** adds `mcp-publisher publish --wait` to retry until the package becomes visible. It is a community PR, open since Nov 7 and updated Nov 23. It targets a common CI pain point: publishing right after `npm publish` fails with a 400 until npm propagates.
- **[#1872](https://github.com/modelcontextprotocol/registry/pull/1872)** is a docs PR documenting the default page size of 30 and `nextCursor`. A publisher mistook pagination for dropped versions, which points to a discoverability gap in the API docs.

## 5. Bugs & Stability
Ranked by severity:
1. **False-positive missing-package reports** (resolved). The sweep wrongly flagged 17 entries, with 649 versions reported across 206 packages on Nov 22. It is fixed in [#1902](https://github.com/modelcontextprotocol/registry/pull/1902) and shipped in v1.8.15. This carried a risk of wrongful moderation action.
2. **Misleading moderation email guidance and inflated Grafana warning counts** (resolved). Fixed in [#1900](https://github.com/modelcontextprotocol/registry/pull/1900), shipped in v1.8.14.
3. **Stale entry after a GitHub org rename** (open). [#1906](https://github.com/modelcontextprotocol/registry/issues/1906) reports that `io.github.SceneView/mcp` (last version 3.4.4) can no longer be updated or deprecated, because the org is now lowercase `sceneview`. The maintained server is `io.github.sceneview/mcp` at 4.3.2. No fix PR or maintainer response yet. This is a namespace-case and ownership edge case that could affect other renamed orgs.
4. **Edit-path database load** is mitigated in [#1908](https://github.com/modelcontextprotocol/registry/pull/1908).

No crashes or outages were reported.

## 6. Feature Requests & Roadmap Signals
- **Publish retry with `--wait`** ([#1818](https://github.com/modelcontextprotocol/registry/pull/1818)). It is a practical fix with a clear scope, so it is a good candidate for a near-term release once reviewed.
- **Tool-signature fingerprinting** ([#82](https://github.com/modelcontextprotocol/registry/issues/82)). This is long-term and unlikely to land soon, but the new moderation and sweep infrastructure makes it more feasible.
- **Deprecation or transfer for renamed orgs** ([#1906](https://github.com/modelcontextprotocol/registry/issues/1906)). It may need a manual admin action, and possibly a general mechanism.
- **Moderation and sweep refinement** is likely to continue. Images and unchecked releases are the next targets after #1896.
- **Infrastructure credential cutover.** Staging is done. Production follow-ups for key retirement are probable in the next few releases.

## 7. User Feedback Summary
- Publishers want a smoother CI flow. Publish-after-npm races cause red workflows and manual re-runs (#1818).
- New API users find pagination unclear and can mistake it for data loss (#1872).
- Maintainers of renamed GitHub orgs lack a self-service path to deprecate old entries (#1906).
- Publishers show a clear demand for listing, with community server submissions such as [#1905](https://github.com/modelcontextprotocol/registry/issues/1905) (French company verification and EU VAT via x402) and PRs [#1903](https://github.com/modelcontextprotocol/registry/pull/1903) and [#1907](https://github.com/modelcontextprotocol/registry/pull/1907). Some of these appear to be misdirected, since the registry publishes through `mcp-publisher` and not through PRs or issues.
- No direct satisfaction or dissatisfaction signals appeared in the data.

## 8. Backlog Watch
- **[#82](https://github.com/modelcontextprotocol/registry/issues/82)**: The oldest item, open since May 2025 with 38 comments. It needs a maintainer decision or design direction on tool-signature fingerprinting.
- **[#1818](https://github.com/modelcontextprotocol/registry/pull/1818)**: A community PR open 16 days with no recorded review activity. It needs a review.
- **[#1872](https://github.com/modelcontextprotocol/registry/pull/1872)**: A docs fix open 3 days. It is low risk and easy to merge.
- **[#1903](https://github.com/modelcontextprotocol/registry/pull/1903)** and **[#1907](https://github.com/modelcontextprotocol/registry/pull/1907)**: External listing and docs PRs. They need triage, either redirecting to the proper publish flow or merging.
- **[#1905](https://github.com/modelcontextprotocol/registry/issues/1905)** and **[#1906](https://github.com/modelcontextprotocol/registry/issues/1906)**: New issues with no maintainer response. #1906 has a concrete operational impact.

**Health summary:** Maintainer throughput on internal infrastructure is very high. Responsiveness to external contributors lags.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-24

## 1. Today's Overview
Awesome MCP Servers had a high-volume, submission-driven day. 164 PRs were updated in the last 24h (157 open, 7 merged/closed). There were no issue updates and no new releases. Nearly all activity is community PRs that add a server entry to the README. The 20 PRs shown, which the data labels as the top 20 by comment count, all report `Comments: undefined` and 0 👍. Because of that, the ranking tells us nothing about engagement. Activity is high, but throughput is low: only about 4% of updated PRs closed or merged.

## 2. Releases
No new releases.

## 3. Project Progress
Seven PRs were merged or closed today, but the data doesn't list them, so I can't say which servers were added. Of the 20 PRs visible, all are open. The queue is therefore growing faster than maintainers are clearing it. Only the 7 closed/merged PRs counted in the overview reflect progress today.

## 4. Community Hot Topics
No PR or issue in the data has usable comment or reaction counts, so I can't rank by engagement. These are the themes in the visible sample:

- **Security and agent trust:** [#20501](https://github.com/punkpeye/awesome-mcp-servers/pull/20501) (Blanktick, read-only Windows posture checker), [#20494](https://github.com/punkpeye/awesome-mcp-servers/pull/20494) (mcp-agent-shield, prompt-injection detection), [#20500](https://github.com/punkpeye/awesome-mcp-servers/pull/20500) (Mad Check, pre-payment verification for ERC-8004 agents).
- **Agent-to-agent and payments:** [#19187](https://github.com/punkpeye/awesome-mcp-servers/pull/19187) (bot2bot, end-to-end encrypted messaging between agents), [#20161](https://github.com/punkpeye/awesome-mcp-servers/pull/20161) (Dark Money, cashback routing).
- **Developer and OS tooling:** [#20393](https://github.com/punkpeye/awesome-mcp-servers/pull/20393) (fire, task runner), [#20382](https://github.com/punkpeye/awesome-mcp-servers/pull/20382) (Hush, macOS accessibility automation), [#20384](https://github.com/punkpeye/awesome-mcp-servers/pull/20384) (yamori), [#20390](https://github.com/punkpeye/awesome-mcp-servers/pull/20390) (todo-scout).
- **Vertical and regional servers:** [#20499](https://github.com/punkpeye/awesome-mcp-servers/pull/20499) (US CME conferences), [#20381](https://github.com/punkpeye/awesome-mcp-servers/pull/20381) and [#20389](https://github.com/punkpeye/awesome-mcp-servers/pull/20389) (Dutch price comparison), [#20391](https://github.com/punkpeye/awesome-mcp-servers/pull/20391) (China suppliers), [#20387](https://github.com/punkpeye/awesome-mcp-servers/pull/20387) (RDR2 gaming).
- **Infrastructure and memory:** [#20386](https://github.com/punkpeye/awesome-mcp-servers/pull/20386) (Kaeso, MCP gateway), [#19228](https://github.com/punkpeye/awesome-mcp-servers/pull/19228) (Woolly, local Markdown memory).

The mix points to demand for trust and safety layers, agent payments, and local-first stdio servers.

## 5. Bugs & Stability
No issues were reported, and no PR in the sample describes a bug or regression. Process friction does show up in one case. [#20391](https://github.com/punkpeye/awesome-mcp-servers/pull/20391) is a re-submission of #19064, which was auto-closed after a rebase made the head identical to the base. The submitter has read-only access and couldn't reopen it. This suggests the automation closes PRs in a way contributors can't undo.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. The workflow signals are:
- [#20379](https://github.com/punkpeye/awesome-mcp-servers/pull/20379) says it split off from #10959 to follow the maintainer's one-server-per-PR guidance in #15783. Submitters are adapting to that rule.
- PR labels (`has-glama`, `missing-glama`, `has-emoji`, `valid-name`, `missing-emoji`) show automated checks for a Glama listing, an emoji and a valid name. Expect these to remain merge requirements.
- Several new categories keep growing, including Security, Finance, and Agent Economy-style payments and verification. A dedicated section for these may follow.

## 7. User Feedback Summary
Contributors are mostly asking for their servers to be listed. Common traits in the submissions are local-first, stdio transport, read-only tools, and open-source licenses (MIT, AGPL). Several PRs mention an Official MCP Registry ID or a Glama link, which shows that quality signals matter to submitters. Friction points are the Glama requirement, since 8 of the 20 visible PRs carry `missing-glama`, and one missing-emoji PR ([#20383](https://github.com/punkpeye/awesome-mcp-servers/pull/20383)). Some contributors also lack the access to fix automation-closed PRs.

## 8. Backlog Watch
- [#19187](https://github.com/punkpeye/awesome-mcp-servers/pull/19187) (bot2bot) was created 2026-11-11 and is still open after about 12 days.
- [#19228](https://github.com/punkpeye/awesome-mcp-servers/pull/19228) (Woolly) is also from 2026-11-11 and is still open.
- [#20161](https://github.com/punkpeye/awesome-mcp-servers/pull/20161) (Dark Money) is from 2026-11-20 and is still open.
- The 157 open updated PRs suggest a large review backlog. Maintainers could clear it faster by batch-merging PRs that pass all checks (`has-glama`, `has-emoji`, `valid-name`) and by closing or requesting changes on those labeled `missing-glama` or `missing-emoji`.

*Limitation: the data gives only 20 of 164 PRs, no comment counts, and no details on the 7 closed or merged PRs. The conclusions above are therefore limited to that sample.*

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-11-24

## 1. Today's Overview
The registry shows very high contribution activity and little maintainer activity. In the last 24h, 50 PRs were updated (47 open, 3 merged or closed) and 1 issue was updated. There were no releases. Almost all of the traffic is third-party submissions of new MCP servers, mostly remote servers with OAuth. The data lists no comments on any item, so the review queue looks like the bottleneck, not submission volume. The list also contains PRs open since August and September.

## 2. Releases
None.

## 3. Project Progress
- **Merged or closed:** 3 PRs, but the visible data shows only one: [#7586](https://github.com/docker/mcp-registry/pull/7586) "Add Tarkle remote MCP server" is **closed**. It looks like a same-day duplicate, because the author reopened the identical submission as [#7587](https://github.com/docker/mcp-registry/pull/7587). The data gives no detail on the other two.
- No merged feature or fix is visible in the data shown, so I can't report catalog additions for today.
- Open submissions updated today include remote servers (Variafy, Treg, LogBrew, Tarkle, Flashloop, MeetStream, FlowFeed, wapi, Recall Kitchen, PixelFlow, sync-labs, luxembourg-mcp) and local/containerized servers (Clipwright, velruna, SONAR KYB, CrowLLM, WA MCP, AsItIs, SandboxAPIs).

## 4. Community Hot Topics
Comment counts are listed as `undefined` for every PR, so I can't rank by comments. By relevance, the most notable items are:
- **[#7555](https://github.com/docker/mcp-registry/issues/7555) — OAuth dynamic client registration for remote servers.** This is the only issue. The author runs a hosted server with OAuth 2.1 and RFC 9728 metadata and asks how to configure the `oauth` block in a `type: remote` entry before opening a PR. It has 0 comments. The underlying need is documentation or a template for OAuth-enabled remote entries.
- **OAuth-with-DCR remote servers:** [#7589 Variafy](https://github.com/docker/mcp-registry/pull/7589), [#5277 Treg](https://github.com/docker/mcp-registry/pull/5277), [#7588 LogBrew](https://github.com/docker/mcp-registry/pull/7588) and [#7587 Tarkle](https://github.com/docker/mcp-registry/pull/7587) all use OAuth 2.1 with dynamic client registration and PKCE S256. This pattern is now the standard for remote submissions.
- **Agent tooling and memory:** [#7500 velruna](https://github.com/docker/mcp-registry/pull/7500) (verified-fact memory on OpenSearch) and [#7199 AsItIs](https://github.com/docker/mcp-registry/pull/7199) (a read-only linter for CLAUDE.md, AGENTS.md and SKILL.md) show interest in tooling for agents themselves.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today. Issue #7555 is a documentation question, not a defect. One process problem is the duplicate submission #7586 → #7587, which suggests contributors lack a clear way to re-run or fix failed checks. I have no data on CI results.

## 6. Feature Requests & Roadmap Signals
- **Clearer OAuth guidance for remote servers** ([#7555](https://github.com/docker/mcp-registry/issues/7555)). Several PRs already use OAuth with DCR, so a documented schema or example is a likely near-term addition. This is my inference, not a stated plan.
- **Hybrid auth:** [#7582 FlowFeed](https://github.com/docker/mcp-registry/pull/7582) offers a Bearer API key and OAuth 2.1, and [#7581 wapi](https://github.com/docker/mcp-registry/pull/7581) uses a Bearer key. The catalog may need to support both modes.
- **Keyless public-data servers:** [#4720 luxembourg-mcp](https://github.com/docker/mcp-registry/pull/4720) uses no auth.
- **Sandboxing controls:** AsItIs sets `disableNetwork` with a read-only mount, and WA MCP overrides the container command. Contributors are using the security and runtime options in the entry format.

## 7. User Feedback Summary
The data has no comments or reactions, so there is no direct feedback. The pain points below come from the submissions themselves:
- Contributors are unsure how to describe OAuth and remote configuration (#7555).
- Remote servers are mostly commercial or hosted SaaS in marketing, media, meetings and messaging, plus some finance and public-data servers.
- Some submissions are hosted and closed-source and link only to documentation (for example [#7585 Flashloop](https://github.com/docker/mcp-registry/pull/7585)). This may need a policy decision on review and trust.

## 8. Backlog Watch
These PRs have waited the longest and show no visible maintainer response:
- [#4720 luxembourg-mcp](https://github.com/docker/mcp-registry/pull/4720), created 2026-08-18 (about 3 months).
- [#5240 Clipwright](https://github.com/docker/mcp-registry/pull/5240), 2026-09-25.
- [#5277 Treg](https://github.com/docker/mcp-registry/pull/5277), 2026-09-28.
- [#5485 SandboxAPIs](https://github.com/docker/mcp-registry/pull/5485), 2026-10-06.
- [#6105 PixelFlow](https://github.com/docker/mcp-registry/pull/6105), 2026-10-26.
- [#6679 sync-labs](https://github.com/docker/mcp-registry/pull/6679), 2026-11-05.
- [#7199 AsItIs](https://github.com/docker/mcp-registry/pull/7199), 2026-11-16.
- [#7555](https://github.com/docker/mcp-registry/issues/7555), an unanswered question about OAuth. A short reply here could settle the pattern used by many of the pending remote PRs.

**Health assessment:** Contributor interest is strong, but throughput looks weak. The data shows long-lived open PRs, no comments and no releases. Triage, a documented OAuth template, and an automated duplicate or CI-feedback process would likely help most.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-24

## 1. Today's Overview
Activity is moderate and maintenance-focused: 3 issues and 7 PRs were updated in 24h, with no new releases. Most momentum comes from the `security-guidance` plugin, where a maintainer (mhegazy) opened three related PRs that prepare a 2.0.22 release. The automated SHA-bump pipeline (apollo, wix) keeps running. One community plugin submission was closed the same day. Issue discussion is thin, with no comments or reactions on anything new.

## 2. Releases
No new releases.

## 3. Project Progress
Two PRs were closed:
- [#7190](https://github.com/anthropics/claude-plugins-official/pull/7190) `bump(wix): 8fc544d3 → e2bc48eb`: closed. The PR pinned `wix` to version 1.41.8 (from 1.19.2), the commit the directory serves for `wix/skills`. The summary doesn't say whether it was merged or superseded.
- [#7204](https://github.com/anthropics/claude-plugins-official/pull/7204) `feat: Add 0RIGIN philosophy community plugin`: closed the day it was opened. The plugin offered an MCP integration plus `/0rigin:find` and `/0rigin:write`. The data gives no reason for the closure, so it was probably declined or redirected.

Open work in flight:
- [#7205](https://github.com/anthropics/claude-plugins-official/pull/7205) bumps security-guidance to 2.0.22. It is marked "merge last", after the other 2.0.22 changes.
- [#7208](https://github.com/anthropics/claude-plugins-official/pull/7208) makes the launcher say which Python failed. It improves diagnostics when no working Python is found, e.g. a version-manager shim with no version set (see anthropics/claude-code#86709).
- [#7207](https://github.com/anthropics/claude-plugins-official/pull/7207) adds a README "Usage data" section. It explains the hooks' `metrics` field, says the plugin sends nothing itself, and lists the variables that turn off the metrics.
- [#7206](https://github.com/anthropics/claude-plugins-official/pull/7206) hardens plugin workflows. It keeps the verdict cache and scan policy outside the checkout, re-pins shared actions, and stops installing a CLI during the scan.
- [#7202](https://github.com/anthropics/claude-plugins-official/pull/7202) is a bot bump for `apollo` (`bd0513c9 → 2fee9ace`). It was validated with `claude plugin validate`.

## 4. Community Hot Topics
Engagement is low across the board:
- [#5537](https://github.com/anthropics/claude-plugins-official/issues/5537) is the most discussed item, with 2 comments and 0 👍. It is also the oldest open item (created 2026-08-21). The underlying need is hook efficiency: users want the `if` filters on PostToolUse Bash hooks to prevent process spawns, not only to filter results.
- The security-guidance PR cluster (#7205, #7207, #7208) shows the maintainer prioritizing transparency (usage data) and diagnosability (Python errors).

## 5. Bugs & Stability
1. **[#5537](https://github.com/anthropics/claude-plugins-official/issues/5537)** (performance, medium): in security-guidance 2.0.7, all five `if`-filtered PostToolUse Bash hooks (`git commit`, `git push`, `gt create/modify/submit`) spawn a process on every Bash call. That adds latency and overhead. Nothing in the data shows a fix PR targeting it directly. The 2.0.22 bump may include related changes, but that isn't confirmed.
2. **Python launcher diagnostics** (low–medium): [#7208](https://github.com/anthropics/claude-plugins-official/pull/7208) has a fix pending. It addresses misleading "Python is missing" messages.
3. **[#7203](https://github.com/anthropics/claude-plugins-official/issues/7203)** (low, staleness): the `altimate-code` marketplace entry is pinned to `b7c8f68b3dfd` (plugin v1.0.0). Upstream is at `cd7e099366dc` (v1.8.3), so users installing through the official directory get a much older version. The issue asks to close stale bump PR #6817 and rerun.

## 6. Feature Requests & Roadmap Signals
- No explicit feature requests today.
- [#7201](https://github.com/anthropics/claude-plugins-official/issues/7201) "Private accountant" has an empty body. It may be a plugin idea or a stray submission, and it needs triage.
- Roadmap signal: security-guidance 2.0.22 is likely to ship soon. It would include the Python error clarity, the usage-data documentation, and possibly hook changes. Hardening of the plugin CI workflows (#7206) should land alongside it.

## 7. User Feedback Summary
- Plugin users and authors are sensitive to hook overhead (#5537) and want predictable, filtered execution.
- Directory consumers are exposed to stale pins (#7203), which suggests the bump automation sometimes stalls on old PRs.
- Third parties still want to list community plugins (#7204), though that submission was closed.
- Transparency about telemetry (#7207) is being addressed proactively.

## 8. Backlog Watch
- [#5537](https://github.com/anthropics/claude-plugins-official/issues/5537) is open about 3 months. It affects every Bash call for users of security-guidance and needs a maintainer response or a fix.
- [#7203](https://github.com/anthropics/claude-plugins-official/issues/7203) depends on stale PR #6817 (opened earlier, still open). It needs a maintainer to close or rerun the bump.
- [#7201](https://github.com/anthropics/claude-plugins-official/issues/7201) has no description and needs triage or closing.
- [#7205](https://github.com/anthropics/claude-plugins-official/pull/7205) is blocked until the other 2.0.22 PRs merge. Reviewers should sequence them so it merges last.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills — Project Digest (2026-11-24)

## 1. Today's Overview
Awesome Agent Skills (VoltAgent/awesome-agent-skills) is a curated list. Its activity comes almost entirely from community submissions. In the last 24h there were 8 PR updates, all open, and no issues, releases, merges or closures. Every PR is an "Add skill" listing request from an external contributor. Submission intake is steady (PR numbers #1467–#1474 in about two days), but review throughput looks like the bottleneck. Nothing was merged today.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no content was added to the list. All 8 PRs are waiting for maintainer review.

## 4. Community Hot Topics
No PR or issue has reported comments or reactions (all 👍 = 0, comment counts unavailable). Engagement is therefore measured by the themes of the submissions:

- **Development and Testing is the dominant category (5 of 8 PRs):**
  - [#1474 flashdatadev/flashdata-skills](https://github.com/VoltAgent/awesome-agent-skills/pull/1474): 17 modular skills for real-time Google Search, YouTube data and more.
  - [#1473 Innei/ryugi](https://github.com/VoltAgent/awesome-agent-skills/pull/1473): design-work surfaces (artboards, design docs, whiteboards) for coding agents.
  - [#1471 e2e-inc/e2e](https://github.com/VoltAgent/awesome-agent-skills/pull/1471): official skill for an open-source agentic end-to-end test runner.
  - [#1470 linjz3376/agentic-uat](https://github.com/VoltAgent/awesome-agent-skills/pull/1470): a skill pair for agent-driven user acceptance testing.
  - [#1468 sendbird/sendbird-client-plugin](https://github.com/VoltAgent/awesome-agent-skills/pull/1468): vendor SDK skills (add-feature, auth-recipes, calls-incoming and others).
- **Productivity and Collaboration (2):**
  - [#1472 blockdancez/share-claude-code-chat](https://github.com/VoltAgent/awesome-agent-skills/pull/1472)
  - [#1469 kcy4334-lgtm/translate-book-arxiv](https://github.com/VoltAgent/awesome-agent-skills/pull/1469): translates arXiv LaTeX sources into a book.
- **Marketing (1):** [#1467 wilu222/unpolish-ai-writing](https://github.com/VoltAgent/awesome-agent-skills/pull/1467): removes AI writing tells.

Underlying needs:
- **Testing:** agentic testing and acceptance workflows are a visible theme (#1470, #1471).
- **Vendor-published skills:** companies such as FlashData, e2e and Sendbird are shipping official skills and want listing for discoverability.
- **Cross-agent support:** these skills target multiple agents, for example Claude Code, Codex, Cursor, Gemini CLI and OpenCode (#1473).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. This is a content list with no runtime code, so the practical risks are broken links, duplicate entries and listing quality, and none were raised today.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed as issues. The submissions point to category demand:
- Development and Testing is growing fast and may need subcategories, for example testing/QA or vendor SDKs. This is an inference and no one has proposed it.
- #1467 places its entry beside other "humanizer" skills, and #1469 sits next to `deusyu/translate-book`. Clusters of similar skills are forming and could justify dedicated sections.

No release roadmap is visible from this data.

## 7. User Feedback Summary
There is no direct feedback (no issues or comments). From PR descriptions:
- Contributors want visibility for their skills in a well-known curated index.
- Submissions describe their skills as carrier-neutral or multi-agent, so interoperability matters to them.
- Several PRs are vendor or official submissions (#1474, #1471, #1468). That suggests the list is seen as a credible distribution channel.

## 8. Backlog Watch
- All 8 PRs (#1467–#1474) are unreviewed and zero-comment. They are only 1–2 days old, so none is urgent yet.
- The data covers only items updated in the last 24h. Older stalled PRs may exist but can't be assessed here.
- Because the PR numbers climb by about 4 per day, the maintainers need batch review or automated checks (link validation, format and duplicate checks). Otherwise the queue will grow.
- PR #1470 bundles two skills with a version number (1.5.33). A maintainer may want to confirm it fits the list's one-entry-per-repo format.

**Project health:** Inbound interest is high, but today shows no maintainer action, with zero merges or reviews. The risk is a backlog rather than quality problems.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
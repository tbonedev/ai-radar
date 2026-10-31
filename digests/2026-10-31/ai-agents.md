# MCP Ecosystem Digest 2026-10-31

> Issues: 6 | PRs: 1 | Projects covered: 7 | Generated: 2026-10-31 13:15 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest — 2026-10-31

## 1. Today's Overview
Activity in modelcontextprotocol/servers was low over the last 24 hours: 6 issues and 1 PR were updated, with no new releases. Four of the six issues were closed, and the only PR was closed as out of scope. Most of the activity looks like triage of older items: five of the six issues, and the PR, were created between February and July 2026. Only one issue (#5416) is new. Project health looks stable. The maintainers are clearing stale submissions and keeping attention on tool-schema quality (annotations and descriptions).

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. One was closed without merging:
- [PR #4282](https://github.com/modelcontextprotocol/servers/pull/4282) — "Add schema constraints to time server strings" was closed with the `closed-out-of-scope` label. It proposed `maxLength`/`pattern` hints for the time server's timezone inputs and a bounded 24-hour time pattern for `convert_time`, as a defensive follow-up to #3537. The maintainers appear to treat schema-hardening changes to reference servers as out of scope, at least in this form.

Closure of [Issue #3400](https://github.com/modelcontextprotocol/servers/issues/3400) (tool annotations for server-memory) is the nearest thing to progress. The data does not say whether it was fixed or just closed, so check before treating it as resolved.

## 4. Community Hot Topics
The data shows only modest engagement (no item has any 👍):
- [#3400](https://github.com/modelcontextprotocol/servers/issues/3400) — Add tool annotations to server-memory (7 comments, closed). An automated scan found that none of the 9 tools had annotations, and three perform permanent cascading deletions. The underlying need is that clients want machine-readable hints (e.g. destructive or read-only) to decide when to ask for user confirmation.
- [#3669](https://github.com/modelcontextprotocol/servers/issues/3669) — Missing property descriptions across the official servers (7 comments, open, `enhancement`, `v2`). LLMs rely on these descriptions to call tools correctly, so this is a quality problem for model-facing usability.
- [#5416](https://github.com/modelcontextprotocol/servers/issues/5416) — Descriptions for the top-level array parameters in the memory server (1 comment, open, `enhancement`, `v2`). It is a concrete, narrow instance of #3669, targeting `create_entities`, `create_relations`, `add_observations` and `delete_observations`.

Common theme: external contributors are using automated scanners and quality checks to flag gaps in tool metadata.

## 5. Bugs & Stability
No crashes, regressions or functional bugs were reported today. The closest items are metadata-quality gaps:
1. Missing schema descriptions ([#3669](https://github.com/modelcontextprotocol/servers/issues/3669), [#5416](https://github.com/modelcontextprotocol/servers/issues/5416)). They degrade LLM tool-calling accuracy but are not runtime failures. No fix PR is linked in the data.
2. Missing destructive-tool annotations on the memory server ([#3400](https://github.com/modelcontextprotocol/servers/issues/3400)). This is a safety-related gap, now closed.

## 6. Feature Requests & Roadmap Signals
- Schema descriptions for the memory server's array parameters ([#5416](https://github.com/modelcontextprotocol/servers/issues/5416)) and across the official servers ([#3669](https://github.com/modelcontextprotocol/servers/issues/3669)). Both carry the `v2` label, so they are likely to land with the v2 line. The narrow scope of #5416 makes it a good candidate for a quick fix.
- Tool annotations ([#3400](https://github.com/modelcontextprotocol/servers/issues/3400)) are a recurring theme. The issue is closed, which hints that the work was done or folded elsewhere.
- Ecosystem tooling and listings: a request to reference ToolPin for server pinning and drift protection ([#4506](https://github.com/modelcontextprotocol/servers/issues/4506)) and community server submissions ([#4517](https://github.com/modelcontextprotocol/servers/issues/4517), [#4522](https://github.com/modelcontextprotocol/servers/issues/4522)). All three were closed, which suggests they will not become roadmap items. The repo seems not to be the place for community listings.

## 7. User Feedback Summary
- Integrators want self-describing tools: complete input-schema descriptions and safety annotations, so models call tools correctly and clients can gate dangerous operations.
- Third-party developers continue to use the repo as a discovery channel for their servers (Django ORM Lens, passare-mcp). Their requests are closed without engagement, which points to a mismatch between that expectation and the repo's scope.
- The data contains no direct satisfaction or dissatisfaction signals.

## 8. Backlog Watch
- [#3669](https://github.com/modelcontextprotocol/servers/issues/3669) is open since 2026-03-22, about 7 months. It has 7 comments and affects all the reference servers. A maintainer decision or a tracking plan for v2 would help.
- [#5416](https://github.com/modelcontextprotocol/servers/issues/5416) is new but small and well-defined, so it could be handled soon.
- Several community submissions sat for about 3.5 months before being closed (#4506, #4517, #4522). A documented policy or a redirect to an appropriate community list could cut similar traffic.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: MCP Ecosystem Digest, 2026-10-31

## 1. Ecosystem Overview
The projects tracked today are the MCP and agent-extension supply chain: the reference servers, the official registry, and curated discovery lists. The ecosystem is flooded with third-party submissions: awesome-mcp-servers, docker/mcp-registry, awesome-claude-code and awesome-agent-skills all show high inbound volume and slow maintainer triage. Skills and plugins are spreading beyond Claude-only use (Codex, OpenCode, Cursor). Quality concerns are moving from "can it list?" to "is it safe and well-described?": tool annotations, schema descriptions, auth handling and namespace security. Only the registry and Claude Plugins show real engineering churn. The rest are mostly queue management.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Release | Health (my assessment) |
|---|---|---|---|---|
| MCP Servers | 6 (4 closed) | 1 (closed, out of scope) | None | 7/10: stable, low activity, backlog being cleared |
| MCP Registry | 5 (4 closed) | 8 (7 closed) | None | 8/10: strong maintainer velocity, one deadline-bound issue |
| Awesome MCP Servers | 0 | 119 (114 open) | None | 5/10: very high inflow, review throughput lags |
| Docker MCP Registry | 1 (closed) | 50 (all open) | None | 5/10: merge bottleneck, stale bot PRs back to Nov 2025 |
| Claude Plugins (official) | 5 | 10 (3 closed, 7 bot bumps) | None | 6/10: automation works, human triage thin, open security issue |
| Awesome Claude Code | 23 (4 closed) | 0 | None | 6/10: automated intake works, no visible merges |
| Awesome Agent Skills | 0 | 14 (12 open) | None | 5/10: high inflow, no comments, slow triage |

The health scores are my own judgment from the digests, not project-published metrics. Note that Docker's digest covers only 20 of 50 PRs, and comment counts are missing for several projects.

## 3. MCP Servers's Position
- **Role:** It is the reference implementation, not a discovery channel. Maintainers closed a schema-hardening PR (#4282) as out of scope and closed the community listing requests (#4506, #4517, #4522). This keeps the repo narrow, unlike the list-style repos that accept everything.
- **Technical focus:** Metadata quality for model-facing use. Missing property descriptions (#3669, #5416) and tool annotations (#3400) are the main themes. Both open issues carry the `v2` label.
- **Community size:** It is the smallest by volume (7 items) among the active repos, against 119 PRs for awesome-mcp-servers and 50 for Docker's registry. Low volume here reflects a deliberate scope more than low interest. Its influence comes from setting the conventions that the other repos list.
- **Weaknesses:** #3669 has been open about 7 months with no maintainer plan visible in the data. There is also no stated policy on where listings should go.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Tool-metadata quality and safety hints | MCP Servers | Annotations for destructive tools, parameter descriptions for LLM accuracy |
| Auth for non-default setups | Claude Plugins, Docker MCP Registry | OAuth tokens via `apiKeyHelper`, gateway keys, bearer-token/base-URL pairing; OAuth 2.1 and PKCE for remote servers |
| Namespace and supply-chain trust | MCP Registry, Awesome MCP Servers, Claude Plugins | Domain-takeover risk (#1778), tool-definition tamper detection (HISTOR), vulnerable lockfile dependencies (#6952) |
| Submission triage automation | Awesome MCP Servers, Awesome Claude Code, Docker MCP Registry, MCP Registry | `missing-glama` and `duplicate` labels, validator bots, stale pin PRs, repeated CorpusIQ submissions |
| Remote, hosted servers | Docker MCP Registry, Awesome MCP Servers | Streamable HTTP plus OAuth replacing local container shipping |
| Persistent agent memory and orchestration | Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills | Cross-assistant history, long-term memory, multi-agent and multi-model workflows |
| Cross-platform robustness | Claude Plugins | Windows Git Bash glob failure in a SessionStart hook (#6956) |
| Deploy reliability | MCP Registry | Saved-plan checks, diagnostics, autoscaling (#1772–#1779) |

## 5. Differentiation Analysis
- **Reference code (MCP Servers):** Targets server authors and client integrators. Quality is judged by schema and annotation completeness.
- **Infrastructure (MCP Registry):** The only project with a serious operations story: Pulumi-based deploys, HPA of 2–4 replicas, and namespace verification tied to domains. Users are publishers via `mcp-publisher`.
- **Catalogs with different gates:**
  - Awesome MCP Servers requires a Glama listing and is volume-driven, with many AI-agent-authored PRs.
  - Docker MCP Registry requires containerized or remote-OAuth entries with pinned versions, which makes it a more curated distribution channel.
  - Awesome Claude Code is issue-based with a validation bot.
  - Awesome Agent Skills is PR-based with strict style rules (a 10-word description limit).
- **Plugin distribution (Claude Plugins):** It pins upstream plugin SHAs through bots. Its risks are in the shipped plugins' runtime behavior (auth, hooks, dependencies), a different problem from list curation.

## 6. Community Momentum & Maturity
- **Tier 1, rapidly iterating:** MCP Registry (five deployment PRs closed in one day) and Awesome MCP Servers (about 119 PRs, numbers near #18172). The first is engineering-led. The second is submission-led.
- **Tier 2, high inflow, low throughput:** Docker MCP Registry (50 open, none merged), Awesome Claude Code (about 18 validated submissions waiting), Awesome Agent Skills (12 open, no comments).
- **Tier 3, stabilizing:** MCP Servers (backlog cleanup, no releases) and Claude Plugins (bot-driven, with a small human-reported bug stream that lacks responses).
- No project shipped a release today. Maturity shows in process: validators and labels are in use, but maintainer response is the common gap.

## 7. Trend Signals
1. **Metadata is becoming a safety layer.** Annotations, parameter descriptions and tool-definition drift detection all aim to let clients and models act safely. Developers should ship complete schemas and annotations now, since the `v2` label hints at more emphasis.
2. **Remote MCP with OAuth is the default packaging for vendors.** Plan for Streamable HTTP, OAuth 2.1, dynamic client registration and PKCE, rather than only stdio.
3. **Enterprise auth is a real gap.** Gateway keys and OAuth tokens through helpers break plugins that assume plain API keys. Test against these setups, and fail fast on auth errors without leaking credentials.
4. **Namespace and dependency security matter.** A domain change can hand over a namespace, and bundled lockfiles carry known CVEs. Audit both.
5. **Skills are cross-agent.** Entries claim Claude Code, Codex, OpenCode and Cursor compatibility, so portability is an expected feature.
6. **Curation is the bottleneck, not supply.** Agent-authored submissions raise volume while review stays manual. Expect more automated gating (validators, label rules) and clearer scope statements, as the reference repo has begun doing.
7. **Memory and orchestration are the hot categories** across the lists. They show where builders see unmet needs in persistence, coordination and observability.

**Caveats:** Several digests lack comment counts, and Docker's covers only 20 of 50 PRs. Whether items like #3400 and #1164 were fixed or only closed is not stated, so treat those as unconfirmed.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (Official) Digest — 2026-10-31

## 1. Today's Overview
Activity was moderate and almost entirely maintainer-driven. Five issues and eight PRs were updated, with no new releases. Most PRs came from one maintainer (rdimitrov), who spent the day hardening and then enabling production deployment autoscaling. Four stale CorpusIQ listing issues were closed in a single sweep. One new issue is time-sensitive: a namespace-lock request ahead of a domain transfer. Overall health looks good, with infrastructure maturing and no user-facing regressions reported.

## 2. Releases
No new releases.

## 3. Project Progress
Seven PRs were closed today. The data does not show how many were merged, but the summaries describe completed work. They all concern the deployment pipeline (Pulumi-based, `/deploy`):

- **Autoscaling:**
  - [#1772](https://github.com/modelcontextprotocol/registry/pull/1772) prepared a phased scaling profile. Bounded connection pools roll out on two apps first, then a separate apply enables a 2–4 replica CPU HPA. It also requires separate workers and raises the worker ceiling.
  - [#1779](https://github.com/modelcontextprotocol/registry/pull/1779) activates that profile: 2–4 replicas, a 70% CPU target and conservative scale-down. It requires a settled deployment with bounded pools.
- **Deploy safety and diagnostics:**
  - [#1774](https://github.com/modelcontextprotocol/registry/pull/1774) adds sanitized apply diagnostics and a guarded retry path. Retry is allowed only from main, with the same transition and saved-plan checks. Raw output stays private.
  - [#1775](https://github.com/modelcontextprotocol/registry/pull/1775) filters diagnostics to actual Pulumi error events. It emits fixed categories and allowlisted labels, with no error text or values.
  - [#1776](https://github.com/modelcontextprotocol/registry/pull/1776) preserves saved-plan checks when targeted previews carry different dependency metadata. It reconciles only those fields from two agreeing, scope-validated previews.
  - [#1777](https://github.com/modelcontextprotocol/registry/pull/1777) uses explicit CRD dependencies for the backup chart. This stabilizes ordering when creating and checking saved plans.
- **Dependencies:** [#1760](https://github.com/modelcontextprotocol/registry/pull/1760) (Pulumi SDK 3.270.0 → 3.272.0) was closed. It is superseded by the open grouped PR [#1773](https://github.com/modelcontextprotocol/registry/pull/1773).

The sequence #1774 → #1775 → #1776 → #1777 → #1779 looks like fast iteration on a failing production deploy. Each fix addressed a problem found by the previous run, ending with autoscaling activated.

## 4. Community Hot Topics
No item has comments or reactions (all show 0). The most notable by need:

- [#1778](https://github.com/modelcontextprotocol/registry/issues/1778) is a publisher asking to lock the `com.aiapplyd` namespace before the aiapplyd.com domain moves to a new owner on 19 Nov 2026. The server was renamed to `com.getmattered/getmattered` after a trademark matter. The underlying need is protection against namespace takeover. Domain-verified namespaces can be inherited by whoever acquires the domain.
- The CorpusIQ issues ([#1389](https://github.com/modelcontextprotocol/registry/issues/1389), [#1399](https://github.com/modelcontextprotocol/registry/issues/1399), [#1400](https://github.com/modelcontextprotocol/registry/issues/1400), [#1460](https://github.com/modelcontextprotocol/registry/issues/1460)) are repeated submissions of the same server. They suggest unclear publishing guidance, since the registry is not a metadata-submission queue.

## 5. Bugs & Stability
No user-facing bugs were reported. Stability signals come from the deploy pipeline:

1. The #1774–#1777 series suggests recent production deployment failures: saved-plan instability, noisy diagnostics and CRD ordering races. All now have fixes closed.
2. [#1778](https://github.com/modelcontextprotocol/registry/issues/1778) is a security-adjacent risk, not a bug. Without a lock, a new domain owner could claim the old namespace. It has no fix PR yet.

## 6. Feature Requests & Roadmap Signals
- **Namespace locking or retirement** ([#1778](https://github.com/modelcontextprotocol/registry/issues/1778)). This is a manual maintainer action rather than a feature. It does point to a possible need for self-service namespace deprecation and transfer handling.
- **Autoscaling** is now active ([#1779](https://github.com/modelcontextprotocol/registry/pull/1779)). Expect follow-ups on tuning replica counts and connection pools.
- **CorpusIQ listing requests** are likely to be resolved with a pointer to the standard `mcp-publisher` flow.

## 7. User Feedback Summary
Direct feedback is thin today. Publishers want:
- a clear way to rename or retire a server without leaving an exploitable namespace;
- an obvious path to list servers. The CorpusIQ author filed four times over four months, which suggests the documentation or issue templates are confusing.

No satisfaction or dissatisfaction signals appear in the data.

## 8. Backlog Watch
- **[#1778](https://github.com/modelcontextprotocol/registry/issues/1778)** needs maintainer attention before **19 Nov 2026**. It is the only open issue and the only one with a hard deadline.
- **[#1773](https://github.com/modelcontextprotocol/registry/pull/1773)**, the open Dependabot bump (Pulumi SDK and `golang.org/x/mod`), is low risk. Given today's deploy churn, merge it only after the pipeline settles.
- The CorpusIQ issues were open for 4 to 18 weeks before being closed with no recorded comments. This suggests slow triage of external submissions. A template or auto-response could cut the noise.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-31

## 1. Today's Overview
The repository is very active, with 119 PRs updated in 24h (114 open, 5 merged/closed). It saw no issue activity and no new releases. Nearly all of the traffic is community submissions that add servers to the curated list, so the project works as a submission queue. PR numbers have reached about #18172, and many are filed by AI agents (🤖 marker). Closures are few relative to arrivals, so the open queue is growing.

## 2. Releases
No new releases.

## 3. Project Progress
- Only 5 PRs were merged or closed today. The data shows one of them, [#18169](https://github.com/punkpeye/awesome-mcp-servers/pull/18169) (Aldine, a self-hosted LaTeX editor with a built-in MCP endpoint), as CLOSED. It carried the `missing-glama` label. This suggests it was closed without a merge, but the data doesn't state the reason.
- The other four closures are not in the top-20 sample, so I can't describe them.
- The list's content grew little today, since almost every submission is still open.

## 4. Community Hot Topics
Comment counts are reported as undefined, so there is no real discussion signal. The sample shows these themes instead:
- **Developer tools and testing:** [MCP Studio #18165](https://github.com/punkpeye/awesome-mcp-servers/pull/18165) (a visual MCP debugging workbench), [Momentic #18162](https://github.com/punkpeye/awesome-mcp-servers/pull/18162) (end-to-end test automation), [Spring Runtime MCP #18153](https://github.com/punkpeye/awesome-mcp-servers/pull/18153) (Spring Boot inspection).
- **Memory and knowledge:** [context-bridge #18171](https://github.com/punkpeye/awesome-mcp-servers/pull/18171) (search across Claude Code, ChatGPT and Claude.ai history) and [Teserra #18168](https://github.com/punkpeye/awesome-mcp-servers/pull/18168) (a local visual library).
- **Health and sports:** [garmin-personal-mcp #18170](https://github.com/punkpeye/awesome-mcp-servers/pull/18170) and [Runspector #18163](https://github.com/punkpeye/awesome-mcp-servers/pull/18163) both connect to Garmin data.
- **Gateways and aggregators:** [web2mcp #18160](https://github.com/punkpeye/awesome-mcp-servers/pull/18160) and [newapi-operator #18164](https://github.com/punkpeye/awesome-mcp-servers/pull/18164).
- **Security and trust:** [HISTOR #18166](https://github.com/punkpeye/awesome-mcp-servers/pull/18166) detects changes to tool definitions.

The underlying needs are debugging for MCP, persistent cross-assistant memory, personal data access, and defenses against tool-definition tampering.

## 5. Bugs & Stability
There are no bug reports and no issues today. The signals come from PR labels:
- `missing-glama` appears on many PRs, for example [#18172](https://github.com/punkpeye/awesome-mcp-servers/pull/18172), [#18171](https://github.com/punkpeye/awesome-mcp-servers/pull/18171), [#18170](https://github.com/punkpeye/awesome-mcp-servers/pull/18170) and [#17000](https://github.com/punkpeye/awesome-mcp-servers/pull/17000). This is a listing-requirement failure, not a software bug.
- `duplicate` is on [#17127](https://github.com/punkpeye/awesome-mcp-servers/pull/17127) and [#17467](https://github.com/punkpeye/awesome-mcp-servers/pull/17467). Both are edits to existing entries.

## 6. Feature Requests & Roadmap Signals
No issues were filed, so there are no explicit requests. Two signals appear in the PRs:
- Entry updates are being submitted: [TZeroAlgorithm #17127](https://github.com/punkpeye/awesome-mcp-servers/pull/17127) (tool count expanded) and [GridPin #17467](https://github.com/punkpeye/awesome-mcp-servers/pull/17467) (US and Canada coverage). The list has no clear process for these.
- New categories keep growing, including Sports, Legal ([#17850](https://github.com/punkpeye/awesome-mcp-servers/pull/17850)), Product Management ([#17901](https://github.com/punkpeye/awesome-mcp-servers/pull/17901)) and Architecture & Design ([#18172](https://github.com/punkpeye/awesome-mcp-servers/pull/18172)). A category cleanup could come next. This is my inference, not something a maintainer has said.

## 7. User Feedback Summary
There is no direct feedback, because comments are undefined and issues are empty. From the submissions:
- Contributors favor local stdio servers, read-only access, approval gates and sanitized output, which points to concern about security and trust.
- Submitters include many AI agents (🤖🤖🤖 in titles), so the maintainers likely have to filter automated, formulaic PRs.
- Many submissions miss the Glama listing the repo asks for. This suggests the requirement is either unclear or ignored.

## 8. Backlog Watch
These PRs are old and still open, and they need maintainer attention:
- [#14789 getmattered-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/14789) was created on 2026-09-21 (about 40 days). It is labeled `has-glama`, so it looks ready to review.
- [#16813 Claude-Project-Coordinator](https://github.com/punkpeye/awesome-mcp-servers/pull/16813) was created on 2026-10-18 and is also `has-glama`.
- [#17127 TZeroAlgorithm](https://github.com/punkpeye/awesome-mcp-servers/pull/17127), [#17000 solisk-pc-mcp](https://github.com/punkpeye/awesome-mcp-servers/pull/17000) and [#17467 GridPin](https://github.com/punkpeye/awesome-mcp-servers/pull/17467) are 1–2 weeks old and carry `duplicate` or `missing-glama` labels. They need a decision to close or fix.

**Health assessment:** Contributor interest is high, but review throughput looks low next to the volume of submissions. Triage automation for the `missing-glama` and `duplicate` labels would shrink the queue.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-10-31

## 1. Today's Overview
The registry saw heavy but one-directional activity in the last 24h. 50 PRs were updated and all 50 are still open, none merged or closed. One issue changed state (closed), and there were no releases. Most of the traffic is new third-party server submissions: at least 8 were opened today, and several older ones were refreshed. Alongside them sit stale automated pin-update PRs from `mcp-registry-bot`. Intake is healthy, but review and merge throughput looks like the bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
- No PRs were merged or closed today.
- The only resolution is Issue [#4735](https://github.com/docker/mcp-registry/issues/4735). It was closed on 2026-10-30. The DeepWiki catalog entry declared the deprecated SSE endpoint (`https://mcp.deepwiki.com/sse`), which returned HTTP 410 from 2026-08-14. The closure suggests the entry was migrated, but the data doesn't show the fixing PR. The listing was broken for about 10 weeks.

## 4. Community Hot Topics
The comment counts in the data are undefined, so no ranking by discussion is possible. Activity clusters by theme instead:

- **Remote (hosted) MCP servers with OAuth** are the dominant pattern: [#6400 ProofSnap](https://github.com/docker/mcp-registry/pull/6400), [#6299 Edusign](https://github.com/docker/mcp-registry/pull/6299), [#6054 GetMattered](https://github.com/docker/mcp-registry/pull/6054), [#6397 Cliptude](https://github.com/docker/mcp-registry/pull/6397), [#6396 PreReason](https://github.com/docker/mcp-registry/pull/6396), [#6395 SaaS Pro Max](https://github.com/docker/mcp-registry/pull/6395), [#5460 OtaKit](https://github.com/docker/mcp-registry/pull/5460), [#5475 NoMac](https://github.com/docker/mcp-registry/pull/5475), [#6399 Project Room](https://github.com/docker/mcp-registry/pull/6399). Vendors want catalog distribution without shipping containers. Streamable HTTP with OAuth 2.1 is becoming the default submission format.
- **Finance and market data**: [#6360 canli-mcp](https://github.com/docker/mcp-registry/pull/6360), [#6398 TILLA](https://github.com/docker/mcp-registry/pull/6398), and PreReason. Agents increasingly need sourced, read-only financial context.
- **Local containerized servers**: [#6398 TILLA](https://github.com/docker/mcp-registry/pull/6398) (stdio, non-root, pinned commit) and [#5754 GridPin](https://github.com/docker/mcp-registry/pull/5754) (offline geocoding, no API key).
- **Competitive and evidence tooling**: [#5529 Rivalize](https://github.com/docker/mcp-registry/pull/5529) and ProofSnap.

## 5. Bugs & Stability
- [#4735](https://github.com/docker/mcp-registry/issues/4735) (closed, medium severity): the deprecated SSE endpoint caused HTTP 410 failures. The fix appears complete.
- Several bot PRs, such as [#612](https://github.com/docker/mcp-registry/pull/612) and [#621](https://github.com/docker/mcp-registry/pull/621), have been open since November 2025. This suggests the pin-update automation is failing to land, which risks catalog entries running outdated server versions.
- No new crash or regression reports.

## 6. Feature Requests & Roadmap Signals
- No explicit feature requests were filed.
- Implied signals: continued support for remote servers with OAuth and dynamic client registration/PKCE, as seen in [#6395](https://github.com/docker/mcp-registry/pull/6395) and [#6299](https://github.com/docker/mcp-registry/pull/6299). A clearer review path for non-open-source hosted servers would also help. [#5475 NoMac](https://github.com/docker/mcp-registry/pull/5475) states that its server is closed source.
- [#6054](https://github.com/docker/mcp-registry/pull/6054) replaces [#4958](https://github.com/docker/mcp-registry/issues/4958) after a rename. Contributors may need guidance on renaming or re-submitting entries.

## 7. User Feedback Summary
- Contributors submit complete, requirement-checked PRs, so they know the process well.
- Their main pain point is waiting. Submissions from early October ([#5460](https://github.com/docker/mcp-registry/pull/5460), [#5475](https://github.com/docker/mcp-registry/pull/5475), [#5529](https://github.com/docker/mcp-registry/pull/5529)) are still open after about 3–4 weeks. Contributors refresh them, which keeps them in the "updated" list.
- The DeepWiki case shows that endpoint deprecations upstream can break catalog entries for weeks.

## 8. Backlog Watch
- **Stale bot pin PRs** need triage or an automation fix: [#612](https://github.com/docker/mcp-registry/pull/612) and [#614](https://github.com/docker/mcp-registry/pull/614) (Nov 2025), [#621](https://github.com/docker/mcp-registry/pull/621), [#1083](https://github.com/docker/mcp-registry/pull/1083) (stripe, Feb 2026), [#2686](https://github.com/docker/mcp-registry/pull/2686) (Apr 2026), [#4369](https://github.com/docker/mcp-registry/pull/4369), [#4383](https://github.com/docker/mcp-registry/pull/4383) (Jul 2026).
- **Aging submissions** that need a maintainer decision: [#5460](https://github.com/docker/mcp-registry/pull/5460), [#5475](https://github.com/docker/mcp-registry/pull/5475), [#5529](https://github.com/docker/mcp-registry/pull/5529), [#5754](https://github.com/docker/mcp-registry/pull/5754).
- Recommendation: batch-review new entries, close or auto-merge superseded bot pins, and add a periodic check for deprecated endpoints, like the one behind #4735.

*Note: only 20 of 50 PRs were provided, and comment counts were unavailable. Totals and rankings are limited by that.*

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest, 2026-10-31

## 1. Today's Overview
Activity is moderate and dominated by automation. Seven of the 10 PRs updated in the last 24h are `github-actions[bot]` SHA bumps, and none were merged today. The only human-authored PR (#6951) was closed. There were no releases. Issue traffic is low (5 updated, 0 comments on most), but 4 of the 5 are concrete bug or security reports against `security-guidance`, `discord` and `unreal-engine-skills`. Overall health is steady: the automated pipeline runs, but human triage looks thin.

## 2. Releases
None.

## 3. Project Progress
Three PRs were closed today. None were merged.
- [#6951](https://github.com/anthropics/claude-plugins-official/pull/6951) (closed): Maintainer-authored by jordanecker-ant. It points the `runway-api` entry at the `claude/` subdirectory and moves it to Runway Dev 4.0.0. Runway restructured `runwayml/skills`, and the bot only rewrites `source.sha`, so it can't follow the move.
- [#6954](https://github.com/anthropics/claude-plugins-official/pull/6954) and [#6743](https://github.com/anthropics/claude-plugins-official/pull/6743) (closed): Stale `runway-api` bump PRs. They were likely superseded by #6951 or by the restructure. This is an inference, since the data doesn't state the reason for closing.
- Issue [#1164](https://github.com/anthropics/claude-plugins-official/issues/1164) (closed): The Discord `messageReactionAdd` feature request, open since 2026-03-29, was closed. The data doesn't say whether it was implemented or declined.

## 4. Community Hot Topics
No item has meaningful engagement. #1164 has 1 comment, and every other item has 0 comments and 0 👍. The clusters with the most activity:
- **`security-guidance` authentication handling**: [#6955](https://github.com/anthropics/claude-plugins-official/issues/6955) and [#6953](https://github.com/anthropics/claude-plugins-official/issues/6953) were filed within a day of each other. Both show the plugin mishandling non-standard auth setups: an `apiKeyHelper` returning an OAuth token, and a Vercel AI Gateway key passed as a bearer token. The underlying need is support for enterprise and gateway credential setups.
- **Bot bump batch**: [#6957](https://github.com/anthropics/claude-plugins-official/pull/6957) through [#6962](https://github.com/anthropics/claude-plugins-official/pull/6962) were opened in a single workflow run. They cover `crowdstrike-falcon-foundry`, `crowdstrike-falcon-fusion`, `pagerduty`, `salesforce-development`, `setup-mcp-agent-analytics` and `tavily`. This shows steady upstream plugin churn.

## 5. Bugs & Stability
Ranked by severity:
1. **Security, [#6952](https://github.com/anthropics/claude-plugins-official/issues/6952)**: `external_plugins/discord/bun.lock` pins `proxy-addr@2.0.7` (GHSA-jqcg-44mw-7w3h) and `@modelcontextprotocol/sdk@1.27.1`. The lockfile hasn't changed since March 2026. No fix PR yet.
2. **Hang on every session, [#6956](https://github.com/anthropics/claude-plugins-official/issues/6956)**: The `unreal-engine-skills` SessionStart hook hangs on Windows Git Bash. At the filesystem root the glob `"$directory"/*.uproject` expands to `//*.uproject`, which triggers network enumeration, so the hook times out every session. No fix PR yet.
3. **Review failures, [#6955](https://github.com/anthropics/claude-plugins-official/issues/6955)**: `security-guidance` reviews fail with 401 `invalid x-api-key` when `apiKeyHelper` returns an OAuth token (`sk-ant-oat…`). This affects commit, Stop and agentic reviews. No fix PR yet.
4. **Auth handling, [#6953](https://github.com/anthropics/claude-plugins-official/issues/6953)**: The agentic review should stop on the first `authentication_failed`. It also shouldn't forward a bearer token without a matching base URL, which risks leaking a credential to the wrong endpoint. The report covers versions 2.0.13–2.0.17. No fix PR yet.

## 6. Feature Requests & Roadmap Signals
- [#1164](https://github.com/anthropics/claude-plugins-official/issues/1164), delivering Discord reaction events, is now closed. Reaction support may have landed or been declined, so check before assuming.
- [#6953](https://github.com/anthropics/claude-plugins-official/issues/6953) works as a hardening request: fail fast on auth errors and validate token/base-URL pairing.
- Likely near-term work is `security-guidance` auth fixes (#6953 and #6955 share a root area) and a Discord dependency refresh (#6952). This is a prediction, not something the data confirms.

## 7. User Feedback Summary
- Users run the plugins in non-default auth environments: OAuth tokens via `apiKeyHelper`, and AI gateway keys. The plugins assume a plain API key.
- Windows users hit shell-portability problems. Git Bash path semantics break hook scripts.
- Security-conscious users audit lockfiles and CVEs in bundled plugins.
- Reporters are detailed and give versions and root causes, which suggests an engaged technical audience. Responses are lacking, though: none of the new issues has a comment.

## 8. Backlog Watch
- [#6821](https://github.com/anthropics/claude-plugins-official/pull/6821) (`mattpocock-skills` bump): Open since 2026-10-20, about 11 days. Other bot bumps here seem to be handled faster, so it may be blocked or stale and need a maintainer look.
- [#6952](https://github.com/anthropics/claude-plugins-official/issues/6952): A known-vulnerable dependency in a shipped plugin, unchanged since March. It deserves a prompt response.
- [#6956](https://github.com/anthropics/claude-plugins-official/issues/6956), [#6955](https://github.com/anthropics/claude-plugins-official/issues/6955) and [#6953](https://github.com/anthropics/claude-plugins-official/issues/6953): All have 0 comments and no assignee visible in the data. They need triage, especially #6956, which makes the plugin unusable on Windows.
- Six open bot bump PRs (#6957–#6962) are awaiting review and merge.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest — 2026-10-31

## 1. Today's Overview
Activity is submission-driven: 23 issues were updated in 24h (19 open, 4 closed), 0 PRs and 0 releases. Nearly every item is a `resource-submission` run through the automated validator (labels `validation-passed` / `validation-pending` / `auto-closed`). Issue numbers #3367–#3388 show about 20 new submissions in roughly two days, so inbound interest is high. Maintainer-side output, such as merges to the list, is not visible in this window. Conversation is minimal: almost every issue has 1 comment, which is likely the bot's validation reply.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today. The only closures are four bot-handled issues labeled `auto-closed`: [#3379](https://github.com/hesreallyhim/awesome-claude-code/issues/3379), [#3378](https://github.com/hesreallyhim/awesome-claude-code/issues/3378), [#3376](https://github.com/hesreallyhim/awesome-claude-code/issues/3376) and [#3369](https://github.com/hesreallyhim/awesome-claude-code/issues/3369).
- #3379 and #3378 are duplicate submissions of "aiset". #3378 was filed by a different account (fjsoftwaresolutions) but points to JamshidS's repo. The validated copy is [#3380](https://github.com/hesreallyhim/awesome-claude-code/issues/3380).
- #3376 (Loupe) and #3369 (idle-mod) were auto-closed while still `validation-pending`. The data doesn't say why.

## 4. Community Hot Topics
Engagement is low across the board, so there is no real hot topic.
- [#387 Handle unmaintained projects](https://github.com/hesreallyhim/awesome-claude-code/issues/387) has the most discussion (7 comments). It is an enhancement request that has been open since 2025-12-17 and carries the `help wanted` label. It asks how to treat listed projects that are no longer maintained, and the thread warns that removals need care. The underlying need is a list-curation policy, such as a deprecation tag or archive section, to keep the list trustworthy as it grows.
- Category clusters in today's submissions:
  - **Agent Orchestration:** [#3380 aiset](https://github.com/hesreallyhim/awesome-claude-code/issues/3380), [#3373 claude-code-codex-plugin](https://github.com/hesreallyhim/awesome-claude-code/issues/3373), [#3367 murmur](https://github.com/hesreallyhim/awesome-claude-code/issues/3367), [#3386 sdlc](https://github.com/hesreallyhim/awesome-claude-code/issues/3386).
  - **Memory & Context Persistence:** [#3382 Zambo](https://github.com/hesreallyhim/awesome-claude-code/issues/3382), [#3368 MemoSync](https://github.com/hesreallyhim/awesome-claude-code/issues/3368).
  - **Skills:** [#3384 SDD](https://github.com/hesreallyhim/awesome-claude-code/issues/3384), [#3374 B2B Marketing Playbooks](https://github.com/hesreallyhim/awesome-claude-code/issues/3374).
  - **Others:**
    - Security: [#3372 Unseenkey](https://github.com/hesreallyhim/awesome-claude-code/issues/3372).
    - Observability: [#3383 AgentValley](https://github.com/hesreallyhim/awesome-claude-code/issues/3383).
    - Creative Media: [#3381 Motionboard](https://github.com/hesreallyhim/awesome-claude-code/issues/3381).

Agent orchestration is the largest category. Session sharing and team coordination (murmur), cross-model delegation (Codex plugin) and spec-driven workflows (sdlc, SDD) are all represented.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. Two process-quality signals show up in the intake automation:
- Template placeholders were left in titles: [#3381](https://github.com/hesreallyhim/awesome-claude-code/issues/3381) (`<name of your resource>`) and [#3374](https://github.com/hesreallyhim/awesome-claude-code/issues/3374) (`<name of your resource>[Resource]: …`). Both still passed validation.
- Duplicate submissions (#3378/#3379/#3380) suggest the submitter flow gives unclear feedback after an auto-close. No fix PRs exist.

## 6. Feature Requests & Roadmap Signals
- [#387](https://github.com/hesreallyhim/awesome-claude-code/issues/387) is the only process-level request: a new category or subcategory, or a policy, for unmaintained projects. It has been open about 10 months without resolution, so a near-term change looks unlikely unless a maintainer takes it up.
- Submissions imply category demand. [#3385 Banquish](https://github.com/hesreallyhim/awesome-claude-code/issues/3385) and [#3371 GoRoute](https://github.com/hesreallyhim/awesome-claude-code/issues/3371) both target "Providers, Runtime & Integration Infrastructure". [#3387 Floorplan](https://github.com/hesreallyhim/awesome-claude-code/issues/3387) fits "Documentation, Knowledge & Learning > Data Visualization". [#3370 decipher](https://github.com/hesreallyhim/awesome-claude-code/issues/3370) fits "Writing & Prose Quality".
- The "Multi-Purpose" category is used for catch-all toolkits ([#3388 Local Commander](https://github.com/hesreallyhim/awesome-claude-code/issues/3388), [#3377 Youdede Toolkit](https://github.com/hesreallyhim/awesome-claude-code/issues/3377)). That may point to a need for finer subcategories.

## 7. User Feedback Summary
- Contributors are building around trust and control: key isolation ([Unseenkey](https://github.com/hesreallyhim/awesome-claude-code/issues/3372)), reviewable memory ([MemoSync](https://github.com/hesreallyhim/awesome-claude-code/issues/3368)), verifiable work ([Zambo](https://github.com/hesreallyhim/awesome-claude-code/issues/3382)) and session visibility ([AgentValley](https://github.com/hesreallyhim/awesome-claude-code/issues/3383)).
- Multi-agent and multi-model workflows are a common pattern (aiset, murmur, Codex plugin).
- Stack-specific setup is also appearing, e.g. [Claude Kit](https://github.com/hesreallyhim/awesome-claude-code/issues/3375) for Laravel.
- The submitters' own pain points show up as friction with the submission form (placeholder titles, duplicates). The data holds no explicit satisfaction signals.

## 8. Backlog Watch
- [#387](https://github.com/hesreallyhim/awesome-claude-code/issues/387): open since 2025-12-17, `help wanted`, needs a maintainer decision on handling unmaintained projects.
- [#3371 GoRoute](https://github.com/hesreallyhim/awesome-claude-code/issues/3371): the only open submission without the `validation-passed` label and with 0 comments. The validator may not have run, or it may have stalled, so it needs a check.
- Review queue: about 18 `validation-passed` submissions (#3367–#3388) are awaiting maintainer review or merge. If it isn't triaged regularly, this queue will keep growing.

**Project health:** Intake is healthy and automated, but the activity is almost entirely inbound. There was no merged output and no maintainer discussion in this window.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-10-31

## 1. Today's Overview
The repository (VoltAgent/awesome-agent-skills) is a curated list, so activity consists almost entirely of community PR submissions. In the last 24h there were 14 PRs updated (12 open, 2 closed) and no issues or releases. Submission volume is steady, with PR numbers around #1306–#1320 in about 5 days. Maintainer activity looks light: no merges today, only two closures, and no comments or reactions on any PR. Overall health is "high inflow, slow triage."

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged. Two were closed without merge:
- [#1308](https://github.com/VoltAgent/awesome-agent-skills/pull/1308) zilliztech/milvus-skill: an official Milvus skill for the Vector Databases category, covering collections, indexes, search and RAG with PyMilvus. It was closed, probably after review. The data doesn't give a reason.
- [#1271](https://github.com/VoltAgent/awesome-agent-skills/pull/1271) heygen-com/hyperframes: HeyGen's HTML-to-video framework, proposed for Community Skills → Marketing. It was open from 2026-10-26 and closed 2026-10-30.

Both closures may reflect inclusion criteria such as popularity, maturity or placement. The data doesn't confirm this.

## 4. Community Hot Topics
No PR has comments or 👍 reactions, so there are no engagement-based hot topics. By theme, the day's submissions cluster as follows:
- **Agent memory and context engineering:** [#1319](https://github.com/VoltAgent/awesome-agent-skills/pull/1319) (agent-doc-skills: doc-init/update/compact) and [#1310](https://github.com/VoltAgent/awesome-agent-skills/pull/1310) (engramory: file-based long-term memory). Both address persistent, structured context for coding agents.
- **Official vendor skills:** [#1317](https://github.com/VoltAgent/awesome-agent-skills/pull/1317) (Taskade TASKS.md build ledger) and [#1309](https://github.com/VoltAgent/awesome-agent-skills/pull/1309) (Firecrawl Alexandria). Vendors increasingly use the list for distribution.
- **Code review and developer UX:** [#1306](https://github.com/VoltAgent/awesome-agent-skills/pull/1306) (ponder, multi-pass code/UI review) and [#1314](https://github.com/VoltAgent/awesome-agent-skills/pull/1314) (decipher, plain-English rewriting of agent output).
- **Creative and media:** [#1312](https://github.com/VoltAgent/awesome-agent-skills/pull/1312) (Ludo game assets), [#1311](https://github.com/VoltAgent/awesome-agent-skills/pull/1311) (mesh gradient generation), [#1316](https://github.com/VoltAgent/awesome-agent-skills/pull/1316) (Motionboard).
- **Niche domains:** [#1320](https://github.com/VoltAgent/awesome-agent-skills/pull/1320) (Israel apartment search), [#1313](https://github.com/VoltAgent/awesome-agent-skills/pull/1313) (Pictograph computer vision), [#1315](https://github.com/VoltAgent/awesome-agent-skills/pull/1315) (Nabit Codex plugin, Marketing).

## 5. Bugs & Stability
No issues or bugs were reported. One maintenance item: [#1316](https://github.com/VoltAgent/awesome-agent-skills/pull/1316) fixes a **broken link**. The author account was renamed from Ryan-yang125 to krisyangdev, and the repo was renamed from motion-lexicon to motionboard, so the existing entry now returns 404. This is a low-severity but user-visible defect and a quick merge.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. Signals from the submissions:
- The categories most targeted are Specialized Domains, Context Engineering, Development and Testing, and Marketing. Context Engineering is gaining entries, so a more granular memory/context subcategory is plausible.
- Skills are no longer Claude-only. [#1314](https://github.com/VoltAgent/awesome-agent-skills/pull/1314) lists Claude Code, Codex, OpenCode and Cursor, and [#1315](https://github.com/VoltAgent/awesome-agent-skills/pull/1315) is a Codex plugin. Cross-agent compatibility is becoming a de facto expectation.
- Contributors cite the CONTRIBUTING.md rules (such as the 10-word description limit and end-of-section placement). These conventions are enforced and stable.

## 7. User Feedback Summary
There are no direct user comments. From the PR text, contributors want:
- Visibility for vendor-official skills, such as Firecrawl, Taskade and Zilliz.
- Link integrity after account or repo renames ([#1316](https://github.com/VoltAgent/awesome-agent-skills/pull/1316)).
- Pain points the skills target: agents losing memory across sessions, hard-to-read agent-generated specs and PRs, and verbose documentation upkeep.
The zero-comment state may mean authors get no feedback on their submissions.

## 8. Backlog Watch
- [#1306](https://github.com/VoltAgent/awesome-agent-skills/pull/1306) (ponder) has been open since 2026-10-29 with no review.
- Eleven other PRs are open and awaiting review, and #1316 is a trivial link-fix. All were created in the last 3 days.
- No age data is available for older open PRs. #1271 shows that review can take around 4 days before a closure.
- Recommendation: batch-review the open submissions, merge the link-fix first, and leave short comments on closures such as #1308 and #1271 so contributors know the reasons.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# MCP Ecosystem Digest 2026-10-03

> Issues: 1 | PRs: 7 | Projects covered: 7 | Generated: 2026-10-03 12:11 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Digest — 2026-10-03

## 1. Today's Overview
Activity is light-to-moderate: 1 issue and 7 PRs were updated in the last 24h, with no new releases. The one issue touched was closed, so there is no open or active issue load today. Five of the seven PRs are open, and most are small, targeted fixes to the `git` and `everything` reference servers. Two PRs closed without merging (one stale fix, one community-listing request). Overall health looks stable, but review throughput appears slow: several fix PRs from late September and early October are still waiting.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were confirmed merged today. Two were closed:
- [#4946](https://github.com/modelcontextprotocol/servers/pull/4946) — "[readme: pending] Add MemTether: Cross-client AI memory hub". This was a community-server listing request (local-first SQLite memory hub, 23 client adapters). It was closed, and the data doesn't say whether it was merged or declined.
- [#4776](https://github.com/modelcontextprotocol/servers/pull/4776) — `fix(fetch)`: add a timeout to the robots.txt request in the autonomous-fetch check. Without it, a slow or unresponsive robots.txt could hang every autonomous fetch indefinitely. The data doesn't say whether the PR was merged or closed unmerged.

## 4. Community Hot Topics
Comment counts for PRs are not available (`undefined`), so the only measurable discussion signal is on one issue:
- [#4545](https://github.com/modelcontextprotocol/servers/issues/4545) — `server-filesystem` ≥2025.11.25: 100% tool-call failure on Claude Desktop 1.24012.1 (Windows, Microsoft Store MSIX build). This has 11 comments and 1 👍, and it was closed today after about 10 weeks. The underlying need is reliable compatibility between the `registerTool`/`outputSchema` rewrite and desktop clients, especially in sandboxed packaging such as MSIX. Calls reportedly never reach the server, which points to a client-side or packaging cause rather than a server logic bug. The summary doesn't state the resolution.

## 5. Bugs & Stability
Ranked by severity:
1. **Security — information exposure:** [#4889](https://github.com/modelcontextprotocol/servers/pull/4889) (open) redacts sensitive environment variables in the `everything` server's `get-env` tool, resolving #4882. The tool currently returns credentials in plain text. This is a reference server, but it is widely copied.
2. **Data integrity — git:** [#4943](https://github.com/modelcontextprotocol/servers/pull/4943) (open). `git_create_branch` from an annotated tag writes the tag object's hash into `refs/heads/<branch>`. `git fsck` then reports a non-commit ref and commits on that branch fail.
3. **Data integrity — git:** [#4942](https://github.com/modelcontextprotocol/servers/pull/4942) (open). `git_commit` after a resolved merge drops `MERGE_HEAD`, so the merged branch's history is lost and `git_status` still reports a merge in progress.
4. **Functional failure — git:** [#4955](https://github.com/modelcontextprotocol/servers/pull/4955) (open). `git_create_branch` without `base_branch` raises `TypeError` on a detached HEAD.
5. **Correctness — everything:** [#4953](https://github.com/modelcontextprotocol/servers/pull/4953) (open). `gzip-file-as-resource` compresses HTTP error pages (404/500) and serves them as valid `application/gzip` resources, because `response.ok` is never checked.
6. **Resilience — fetch:** [#4776](https://github.com/modelcontextprotocol/servers/pull/4776) (closed). The robots.txt request had no timeout, which could cause hangs.

Every bug listed has a fix PR, but only #4776 and #4545 reached a closed state.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests today. The activity points to continued hardening of the `git` server's branch and commit semantics (three related PRs, #4942, #4943 and #4955) and of the `everything` reference server. Those git fixes are small and self-contained, so they are good candidates for the next release if reviewed. The MemTether submission (#4946) shows continued community interest in listing memory-oriented servers.

## 7. User Feedback Summary
- Windows and Claude Desktop users, particularly on the Store/MSIX build, can hit total tool-call failure with the filesystem server (#4545). The issue's age and comment count suggest it was disruptive and hard to diagnose.
- Developers using the git server in realistic workflows (detached HEAD, tags, merge resolution) run into edge cases that leave repositories in inconsistent states.
- Reference servers get copied as templates, so security hygiene such as credential redaction matters to users.

## 8. Backlog Watch
- [#4889](https://github.com/modelcontextprotocol/servers/pull/4889) — opened 2026-09-28, a security-relevant redaction fix with no visible review progress. It needs maintainer attention first.
- [#4942](https://github.com/modelcontextprotocol/servers/pull/4942) and [#4943](https://github.com/modelcontextprotocol/servers/pull/4943) — opened 2026-10-01, both involving repository corruption or history loss in the git server. They should be reviewed together with [#4955](https://github.com/modelcontextprotocol/servers/pull/4955), which touches the same `git_create_branch` code path and may conflict.
- [#4953](https://github.com/modelcontextprotocol/servers/pull/4953) — opened 2026-10-03, a low-risk fix that is quick to review.
- [#4545](https://github.com/modelcontextprotocol/servers/issues/4545) — now closed. It would help to document the root cause and any workaround, since MSIX users may hit the same failure again.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: MCP Ecosystem, 2026-10-03

## 1. Ecosystem Overview
The projects in this set are mostly the distribution and discovery layer of the MCP and agent-tooling ecosystem. They are reference servers, registries and curated lists. None of them is an end-user assistant. Engineering activity is concentrated in a few places: the reference servers, the official registry and the Claude plugin marketplace. The rest of the ecosystem is mainly submission traffic: 120 PRs to Awesome MCP Servers, 49 open PRs at Docker MCP Registry and 15 `resource-submission` issues at Awesome Claude Code. The main gap is review capacity, which is not keeping up with intake. The main technical themes are security and safety metadata, Windows compatibility, and remote or hosted servers.

## 2. Activity Comparison

Health scores are my own judgment from the digests. They are not figures any project reports.

| Project | Issues updated | PRs updated | Release | Health (judgment) |
|---|---|---|---|---|
| MCP Servers | 1 (closed) | 7 (5 open, 2 closed) | None | 6/10: steady small fixes, slow review |
| MCP Registry | 4 (0 closed) | 1 (open) | None | 4/10: quiet, issues unanswered |
| Awesome MCP Servers | 0 | 120 (108 open, 12 resolved) | None | 6/10: high intake, queue growing |
| Docker MCP Registry | 0 | 50 (49 open, 1 closed) | None | 5/10: 0 merges, stale pin updates |
| Claude Plugins (official) | 8 (7 open) | 5 (4 closed, 1 open) | None | 6/10: active, with open high-severity bugs |
| Awesome Claude Code | 16 (11 open) | 2 (1 closed, 1 open) | None | 7/10: automated intake working, approval step slow |
| Awesome Agent Skills | 0 | 10 (8 open, 2 closed) | None | 6/10: steady intake, no merges |

None of the seven projects shipped a release today.

## 3. MCP Servers's Position

**Advantages**
- It is the only project here that ships code. The others hold listings or metadata.
- Its issues and fixes are concrete and technical: git ref integrity (#4943, #4942, #4955), secret redaction (#4889) and a fetch timeout (#4776).
- It sets the protocol-level conventions (`registerTool`/`outputSchema`) that the registries and lists depend on. #4545 shows that a change to those conventions can break clients.

**Technical approach differences**
- Registries (Official, Docker) handle namespace, pinning and distribution. MCP Servers handles server behavior.
- The curated lists (Awesome MCP Servers, Awesome Claude Code, Awesome Agent Skills) are Markdown indexes with no runtime.

**Community size**
- By volume, MCP Servers is small: 8 updated items, against 120 PRs for Awesome MCP Servers and 50 for Docker. Its audience is a narrower group of maintainers and integrators.
- The reference servers are widely copied as templates, so a bug or a security gap in them spreads to downstream servers. I infer this from the digest's own remark, and the data doesn't measure it.

**Weakness:** Review is slow. Security PR #4889 has been open since 2026-09-28, and three git PRs touch overlapping code.

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Security and safety metadata | MCP Servers, Docker Registry, Awesome MCP Servers, Claude Plugins | Redaction in `get-env` (#4889); read-only tool annotations (#5404, #5402); security entries such as isMalicious (#5395, #15390); unbounded hook timeouts (#6348) |
| Windows compatibility | MCP Servers, Claude Plugins | MSIX/Claude Desktop tool-call failure (#4545); `python3` resolving to the Store stub (#5472); hook hang on Git Bash (#6348) |
| Remote or hosted servers, auth | Docker Registry, MCP Registry, Awesome MCP Servers | OAuth 2.1 with PKCE (#5403); streamable HTTP; subpath hosting (#1277); remote-vs-local list scope |
| Agent memory and provenance | MCP Servers, Docker Registry, Awesome Claude Code | MemTether (#4946); Magnemo (#5397); Subfloor and wallaby-agent-rules |
| Namespace, version and pin management | MCP Registry, Docker Registry, Claude Plugins | Rename orphaning (#1682, #1684); stale pin PRs; AWS, Figma and Slack bumps |
| Skills and LSP packaging | Claude Plugins, Awesome Agent Skills, Awesome Claude Code | Missing `.lsp.json` (#379); skill bundles; skills as the dominant submission type |
| Review throughput | All seven | Open queues exceed resolved items almost everywhere |

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture |
|---|---|---|---|
| MCP Servers | Reference implementations (git, fetch, filesystem, everything) | Server authors, integrators | TypeScript and Python code, tested against desktop clients |
| MCP Registry | Canonical publishing and namespaces | Publishers (`mcp-publisher`) | Service with GitHub-based namespace auth |
| Docker MCP Registry | Containerized catalog with pinned commits | Docker users, vendors | PR-based submission, bot-driven pin updates |
| Claude Plugins | Curated marketplace for Claude Code plugins | Claude Code users, plugin authors | Pinned plugin commits, hooks, LSP, skills |
| Awesome MCP Servers | Discovery list, with Glama label checks | Servers seeking visibility | Markdown plus label automation |
| Awesome Claude Code | Curated Claude Code resources | Claude Code users | Issue-form intake, validation bot, bot PRs |
| Awesome Agent Skills | Skills index across agents | Multi-agent users | Markdown PRs, vendor sections |

The Claude Plugins and Docker registries gate entries by commit pin. The awesome lists gate by editorial review plus labels. Awesome Claude Code is the most automated of the lists.

## 6. Community Momentum & Maturity

- **High intake, low resolution:** Awesome MCP Servers (108 open of 120), Docker MCP Registry (49 open, 0 merged), Awesome Agent Skills (8 open, 0 merged). Contributor interest is strong, and maintainer throughput is the limit.
- **Active engineering:** MCP Servers (several fix PRs) and Claude Plugins (4 PRs closed, new bug reports). Both are iterating, but each has open items that are weeks to months old.
- **Automated and steady:** Awesome Claude Code. Its validation pipeline works, and the approval step is the bottleneck.
- **Quiet or stabilizing:** MCP Registry. It has one five-month-old PR and unanswered issues, and I would not read that as maturity.

I can't tell from the data which PRs were merged and which were closed unmerged. Several digests say so explicitly, so merge-rate claims here are provisional.

## 7. Trend Signals

1. **Safety metadata is becoming a listing requirement.** Read-only annotations, secret redaction and prompt-injection checks keep appearing. Developers should annotate tools and redact secrets by default.
2. **Remote MCP servers are growing.** About half the Docker submissions are remote, and the focus is OAuth 2.1 and zero-setup hosting. Plan for streamable HTTP and standard auth.
3. **Skills and plugins are the fastest-growing submission category** across Awesome Claude Code, Agent Skills and Claude Plugins. The missing `.lsp.json` packaging (#379) shows that packaging quality lags demand.
4. **Windows and sandboxed packaging cause real failures.** Test on Windows and MSIX, and give hooks explicit timeouts and explicit interpreters.
5. **Identity and lifecycle tooling is missing.** Two rename requests in two days (#1682, #1684) show that publishers need a supported way to migrate namespaces.
6. **Batch and agent-assisted submissions are rising.** One author opened about 14 near-identical PRs. The 🤖🤖🤖 marker is unexplained in the data, so I would not read it as agent authorship. Registries will probably need automated validation and de-duplication.

**Caveat:** Each digest covers one 24-hour window, and Awesome MCP Servers covers only the top 20 of 120 PRs. PR comment counts are missing. The health scores and trends above are inferences.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (official) Digest — 2026-10-03

Source: [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

## 1. Today's Overview
Activity is low: 4 issues and 1 PR were updated in the last 24 hours, with no releases and no merged or closed items. Two of the four issues are namespace-cleanup requests caused by GitHub account renames. One is a content-free bug report that looks like noise. One is a promotional listing inquiry. The only PR is a UI feature from May that is still open. Overall the project is quiet, and the new traffic is mostly support-style requests rather than engineering discussion.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged or closed today, so no features or fixes advanced.

The only PR with activity is [#1277](https://github.com/modelcontextprotocol/registry/pull/1277) (open, by nejch). It adds `MCP_REGISTRY_UI_BASE_PATH` so the built-in UI can be served under a subpath. It builds on the simple UI added in [#757](https://github.com/modelcontextprotocol/registry/pull/757). It was updated on 2026-10-02 but was created on 2026-05-10, so it has been open for about five months.

## 4. Community Hot Topics
No item has comments or 👍 reactions, so nothing is "hot" by engagement. By theme, the most notable pattern is namespace orphaning after GitHub renames:

- [#1682](https://github.com/modelcontextprotocol/registry/issues/1682): `simonplmak-cloud` was renamed to `simonmak-ascent`. The requester wants 5 orphaned `io.github.simonplmak-cloud/*` namespaces deleted. `mcp-publisher login github` now only grants the new namespace, so republishing is blocked.
- [#1684](https://github.com/modelcontextprotocol/registry/issues/1684): `Bahamas1717` was renamed to `Craig-Horton`. The requester wants all versions of `io.github.Bahamas1717/aibvf-mcp` marked `deleted` with the message `Moved to io.github.Craig-Horton/aibvf-mcp`. They also want the reservation on the remote URL `https://mcp.aibvf.com/api/mcp` released.

The underlying need is a supported self-service path for namespace migration or transfer after a rename. Today it requires manual maintainer intervention, and the URL reservation can block republishing under the new name.

## 5. Bugs & Stability
- [#1683](https://github.com/modelcontextprotocol/registry/issues/1683) is titled "[bug] jj". It uses the unfilled bug template and gives no reproduction, logs or context. It is not actionable and probably needs a request for details or closure.
- No crashes or regressions were reported. No fix PRs exist.
- The rename-orphaning problem in #1682 and #1684 is a functional limitation of the publish and auth flow. It is a design gap rather than a defect.

## 6. Feature Requests & Roadmap Signals
- **Namespace migration or transfer after account rename.** This is implied by #1682 and #1684. Two independent requests in two days suggest recurring demand. A supported ownership migration, which #1684 mentions explicitly, or a self-service delete or deprecate flow, would cut the maintainer toil. This is the strongest signal, but no PR is linked, so I can't predict timing.
- **Subpath hosting for the UI** ([#1277](https://github.com/modelcontextprotocol/registry/pull/1277)). It is useful for downstream and self-hosted registries behind reverse proxies. It is awaiting review.
- [#1677](https://github.com/modelcontextprotocol/registry/issues/1677) is a listing inquiry for agent-commerce "unlock packs" with `llms.txt`. It is not a registry feature request, and it points to a temporary `trycloudflare.com` URL. Treat it with caution. It may be spam or off-topic, and it likely needs redirecting to the publishing docs.

## 7. User Feedback Summary
- Publishers who renamed their GitHub accounts are blocked. They can't republish under the new namespace, and the old entries and URL reservations remain locked.
- Users are filing issues to request actions that only maintainers can take, which suggests the docs or tooling do not cover this case.
- Some newcomers are unsure of the right publisher path (#1677), and some use the issue tracker for unrelated content (#1683). This points to a need for clearer onboarding and issue-template guidance.

## 8. Backlog Watch
- [PR #1277](https://github.com/modelcontextprotocol/registry/pull/1277): open about five months, with recent activity, and needs a maintainer review or decision.
- [Issue #1677](https://github.com/modelcontextprotocol/registry/issues/1677): open since 2026-09-27 with no comments and no maintainer response. It needs triage, such as closing or redirecting it.
- [Issues #1682](https://github.com/modelcontextprotocol/registry/issues/1682) and [#1684](https://github.com/modelcontextprotocol/registry/issues/1684): new and unanswered. A maintainer should handle them, and ideally document a standard rename-recovery process.
- [Issue #1683](https://github.com/modelcontextprotocol/registry/issues/1683): triage and close or request details.

**Health assessment:** Low volume and no releases. The open issues have had no maintainer responses, and the recurring namespace-rename problem points to a documentation or tooling gap.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest, 2026-10-03

## 1. Today's Overview
Activity was PR-only: 0 issues were updated and there were no releases. 120 PRs were updated in the last 24h (108 open, 12 merged or closed). The repo is a curated list, so almost all activity is submissions to add new MCP servers. Most of the sampled PRs were opened on 2026-10-03 and none has any recorded comments. Intake is much larger than review: 108 open vs. 12 resolved. One contributor, `gistrec`, accounts for a large share of the sample.

## 2. Releases
None.

## 3. Project Progress
Only 12 PRs were merged or closed, and none of them is in the top-20 sample. I can't say which were merged and which were closed, or what they changed. The sampled PRs are all additions of new server entries, not fixes or features for the list itself.

## 4. Community Hot Topics
The comment counts came through as `undefined`, and every sampled PR shows 0 👍, so there are no engagement signals. These are the themes worth noting:

- **Bulk Google/Workspace submissions from one author.** `gistrec` / A1-x-Tech opened about 14 PRs in one batch, each for one server (all 🤖🤖🤖-tagged, with `has-glama`):
  - Workplace & Productivity: [#15611](https://github.com/punkpeye/awesome-mcp-servers/pull/15611) (tasks), [#15610](https://github.com/punkpeye/awesome-mcp-servers/pull/15610) (slides), [#15609](https://github.com/punkpeye/awesome-mcp-servers/pull/15609) (forms), [#15608](https://github.com/punkpeye/awesome-mcp-servers/pull/15608) (docs)
  - Communication: [#15613](https://github.com/punkpeye/awesome-mcp-servers/pull/15613) (gmail), [#15612](https://github.com/punkpeye/awesome-mcp-servers/pull/15612) (chat)
  - Databases: [#15615](https://github.com/punkpeye/awesome-mcp-servers/pull/15615) (mysql-client), [#15614](https://github.com/punkpeye/awesome-mcp-servers/pull/15614) (sheets)
  - E-Commerce: [#15621](https://github.com/punkpeye/awesome-mcp-servers/pull/15621) (shopify-admin), [#15620](https://github.com/punkpeye/awesome-mcp-servers/pull/15620) (google-merchants)
  - Other sections: [#15619](https://github.com/punkpeye/awesome-mcp-servers/pull/15619) (CrUX, Monitoring), [#15618](https://github.com/punkpeye/awesome-mcp-servers/pull/15618) (Apps Script, Developer Tools), [#15617](https://github.com/punkpeye/awesome-mcp-servers/pull/15617) (Custom Search, Search & Data Extraction), [#15616](https://github.com/punkpeye/awesome-mcp-servers/pull/15616) (Drive, File Systems)
- **Finance and crypto.** Four sampled PRs target this area:
  - [#15624](https://github.com/punkpeye/awesome-mcp-servers/pull/15624): DeFi Garden, a yield engine
  - [#15623](https://github.com/punkpeye/awesome-mcp-servers/pull/15623): ComplyEaze/bridge, for TallyPrime and Indian CA firms
  - [#15289](https://github.com/punkpeye/awesome-mcp-servers/pull/15289): Xynaptic, 176 pay-per-request x402 tools
  - The ISMalicious server (see below) is a security entry, not finance.
- **Security.** [#15390](https://github.com/punkpeye/awesome-mcp-servers/pull/15390) adds the official isMalicious server. It is the oldest sampled PR, created 2026-09-30.
- **Other additions.** [#15622](https://github.com/punkpeye/awesome-mcp-servers/pull/15622) (convertfilefast-mcp, File Systems) and [#15601](https://github.com/punkpeye/awesome-mcp-servers/pull/15601) (poordjaevin, Coding Agents).

The underlying demand is for visibility: authors want their servers listed alongside established entries. Demand also looks strong for Google Workspace, commerce and finance integrations, and for pay-per-request agent tooling.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there were 0 issues. The only quality signals are the automated labels on the PRs.

- **`missing-glama` label.** [#15624](https://github.com/punkpeye/awesome-mcp-servers/pull/15624), [#15289](https://github.com/punkpeye/awesome-mcp-servers/pull/15289), [#15622](https://github.com/punkpeye/awesome-mcp-servers/pull/15622) and [#15601](https://github.com/punkpeye/awesome-mcp-servers/pull/15601) have no Glama listing. They will likely need one before merging.
- **`has-glama` plus `valid-name` label.** The other sampled PRs have both, so they pass the automated checks.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed. Indirect signals from the submissions:

- Categories getting new entries: Finance & Fintech, E-Commerce, Workplace & Productivity, Communication, Databases and Security.
- [#15289](https://github.com/punkpeye/awesome-mcp-servers/pull/15289) (x402 pay-per-request) points to growing interest in agent payments and hosted MCP endpoints.
- The A1-x-Tech PRs say that self-hosted npm packages belong in this list, while remote ones belong in `awesome-remote-mcp-servers`. That suggests the list's scope rules are well understood, and also that the split is worth keeping clear in the contributing guide.

## 7. User Feedback Summary
Without issues or comments there's no direct user feedback. Contributors' PR descriptions show consistent habits:

- They cite the alphabetical-order rule.
- They add emoji legends (📇, ☁️, 🏠, 🎖️).
- They reference similar entries.

The 🤖🤖🤖 tag appears on most of the sampled PRs. I can't tell from the data what it means. It may be a marker for agent-assisted submissions, but that is a guess. Nobody has commented on the batch of near-identical PRs, so there's no sign yet of how the maintainers will handle it.

## 8. Backlog Watch
- [#15289](https://github.com/punkpeye/awesome-mcp-servers/pull/15289) (Xynaptic) was opened 2026-09-28 and is still open with no comments. It also lacks a Glama listing.
- [#15390](https://github.com/punkpeye/awesome-mcp-servers/pull/15390) (isMalicious) was opened 2026-09-30. It passes all checks (`has-glama`, `valid-name`, `has-emoji`) and is a good candidate for a quick merge.
- With 108 open PRs, the queue is likely to grow. The maintainers could consider batching or de-duplicating the A1-x-Tech submissions, and could ask for Glama listings on the `missing-glama` PRs.

**Caveat:** I only had the top 20 of 120 PRs, comment counts were missing, and there were no issues or releases. Treat the health conclusions above as provisional.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest — 2026-10-03

## 1. Today's Overview
Docker MCP Registry had no issue activity and no new releases in the last 24 hours. All activity was in pull requests: 50 PRs were updated, 49 of them open and 1 closed. Most of the new PRs are third-party submissions adding MCP servers, and about half of them are remote (hosted) servers. The rest of the updated PRs are `mcp-registry-bot` pin updates. Activity is moderate and submission-driven, with no sign of maintainer review in the data shown. The comment counts are reported as "undefined", so discussion volume can't be measured.

## 2. Releases
No new releases.

## 3. Project Progress
Only one PR was closed:
- [#5245](https://github.com/docker/mcp-registry/pull/5245) **Add Sluicer MCP server** (Gi0tto), created 2026-09-25 and closed 2026-10-03. It extracts structured data from web pages (JSON-LD, microdata, RDFa, OpenGraph) into one record per entity, without a model. The data doesn't say whether it was rejected or withdrawn, so I can't tell whether this was a merge or a decline.

No PRs were merged in the window, so no registry entries visibly advanced today.

## 4. Community Hot Topics
Comment and reaction counts are all 0 or undefined, so there are no hot topics by engagement. These are the new submissions grouped by theme:

- **Social and marketing data:**
  - [#5404 SocialAPIs](https://github.com/docker/mcp-registry/pull/5404): read-only Facebook and Instagram data, with 47 tools annotated read-only.
  - [#5396 PumpGTM](https://github.com/docker/mcp-registry/pull/5396): buyer-intent discovery and outreach via LinkedIn, email and X.
  - [#5399 Kaminari Ad](https://github.com/docker/mcp-registry/pull/5399): real-device ad verification.
- **Agent memory and discovery:**
  - [#5397 Magnemo](https://github.com/docker/mcp-registry/pull/5397): local stdio memory with provenance and human promotion.
  - [#5398 Agent Nexus](https://github.com/docker/mcp-registry/pull/5398): maps plain-language needs to APIs, MCP servers and CLIs.
- **Security:**
  - [#5395 IsMalicious](https://github.com/docker/mcp-registry/pull/5395): indicator reputation, CVE context and prompt-injection checks.
- **Content and search:**
  - [#5401 Arcmira YouTube Transcript Search](https://github.com/docker/mcp-registry/pull/5401) and [#5400 Arcmira API Docs](https://github.com/docker/mcp-registry/pull/5400), a paired submission from the same author.
  - [#5402 Grok Bot Wiki](https://github.com/docker/mcp-registry/pull/5402): read-only template and guide search.
- **Forms and collaboration:**
  - [#5403 formbase](https://github.com/docker/mcp-registry/pull/5403): OAuth 2.1 with PKCE.
  - [#5283 TeamAgent Canvas / AICare](https://github.com/docker/mcp-registry/pull/5283): anonymous sandbox.

Underlying need: vendors want distribution for hosted and remote MCP servers. Many of them emphasize read-only tools, OAuth, or no authentication.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, since there were no issues. No fix PRs are visible.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests. Signals from the submissions:
- Remote, streamable-HTTP servers are growing in share and are likely to need first-class registry support: OAuth 2.1 with dynamic client registration, bearer tokens, and unauthenticated endpoints.
- Several authors stress read-only tool annotations (e.g. #5404, #5402). This points to demand for clear safety metadata in listings.
- Authors are submitting the same vendor's local and remote variants, as with the two Arcmira PRs (#5401, #5400). The registry may need to handle multi-entry vendors.

## 7. User Feedback Summary
No direct user feedback was posted. Submitter descriptions show a preference for hosted servers that need no local setup. They also show provenance and safety concerns for agents, such as memory receipts, prompt-injection checks and read-only guarantees. They also show demand for agent-facing growth, outreach and social-data tooling.

## 8. Backlog Watch
Several automated pin-update PRs have been open for a long time and are still being touched. They need maintainer or bot attention:
- [#788 omi](https://github.com/docker/mcp-registry/pull/788), opened 2025-11-26. This is the oldest.
- [#799 vizro](https://github.com/docker/mcp-registry/pull/799), opened 2025-11-27.
- [#1083 stripe](https://github.com/docker/mcp-registry/pull/1083), opened 2026-02-07.
- [#2686 awslabs-cost-explorer](https://github.com/docker/mcp-registry/pull/2686), opened 2026-04-16.
- [#4368 sonarqube](https://github.com/docker/mcp-registry/pull/4368) and [#4369 testkube](https://github.com/docker/mcp-registry/pull/4369), opened 2026-07-09.
- [#4468 redis](https://github.com/docker/mcp-registry/pull/4468), opened 2026-07-18.
- [#4714 paper-search](https://github.com/docker/mcp-registry/pull/4714), opened 2026-08-18.

Older human-submitted PRs also need review, such as [#5283 TeamAgent Canvas](https://github.com/docker/mcp-registry/pull/5283), open since 2026-09-28. Pin updates unmerged for months suggest a review bottleneck. They may also indicate a stuck automation, so the registry's pinned commits can drift from upstream.

**Health assessment:** Contributor interest is strong, but the review and merge throughput visible in this window is low (0 merges, 49 open PRs).

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-10-03

## 1. Today's Overview
Activity was moderate and mostly maintenance. Of 5 PRs updated, 4 closed and 1 is open. They were mainly marketplace pin bumps (AWS, Figma, Slack) plus a security-guidance model change. Of 8 issues updated, 7 are open. The new reports (#6347, #6348) show friction in plugin hooks and in directory submission. Two long-running requests, the LSP gaps (#232, #379), got fresh comments. There were no releases.

## 2. Releases
None.

## 3. Project Progress
Four PRs were closed today. The summaries don't say whether each was merged or closed without merging, so treat these as outcomes still to confirm.
- **AWS pin bumps:** [#6349](https://github.com/anthropics/claude-plugins-official/pull/6349) pins `aws-core`, `aws-agents` and `aws-data-analytics` to `0d6167ad` at the AWS team's request. It supersedes [#6344](https://github.com/anthropics/claude-plugins-official/pull/6344) (`aws-core` only, recommitted so the commit is signed) and #6325 (auto-closed as an external PR). The `aws-core` range includes skill content updates for CloudWatch, EventBridge and Well-Architected review.
- **Figma bump:** [#6346](https://github.com/anthropics/claude-plugins-official/pull/6346), opened by claude[bot], moves `figma` from `17292073` (v2.2.120) to `aaa07946`.
- **security-guidance model policy:** [#6350](https://github.com/anthropics/claude-plugins-official/pull/6350) makes the plugin follow the newest Claude Opus instead of the hardcoded `claude-opus-4-7`. It closed the same day it was opened.
- **Still open:** [#6351](https://github.com/anthropics/claude-plugins-official/pull/6351) bumps `slack` to v1.4.1. The marketplace pin `80443417` (2026-09-10) still reports 1.3.0, so users are two releases behind.

The signed-commit and external-PR supersession chain in the AWS PRs suggests a gated bump workflow.

## 4. Community Hot Topics
- **[#232 Vue/Volar LSP plugin](https://github.com/anthropics/claude-plugins-official/issues/232):** 18 comments and 38 👍, the most engaged item. Vue 3 users want go-to-definition, hover and completion in `.vue` files. It has been open since January 2026.
- **[#379 LSP plugins missing `.lsp.json`](https://github.com/anthropics/claude-plugins-official/issues/379):** 11 comments and 21 👍. All 11 official LSP plugins contain only a `README.md`, so installing one doesn't configure an LSP server. This is a functional gap in the marketplace, and it is probably why people keep asking for new LSP plugins such as Vue.

Together these show demand for LSP coverage that currently isn't delivered.

## 5. Bugs & Stability
Ranked by severity:
1. **[#6348 security-guidance PostToolUse hooks have no `timeout`](https://github.com/anthropics/claude-plugins-official/issues/6348):** A hung hook blocked 34 consecutive Edit/Write calls for about 600 s each (`hook_cancelled`) on Windows 11 with Git Bash, plugin v2.0.8. This is high severity because it stalls workflows for hours. No fix PR is linked.
2. **[#2283 Telegram channel keeps polling with invalid auth](https://github.com/anthropics/claude-plugins-official/issues/2283):** Headless/tmux sessions can silently consume Telegram updates while Claude auth is invalid, which can lose messages. Open since June, no fix PR.
3. **[#6347 Directory submission step 1 always times out](https://github.com/anthropics/claude-plugins-official/issues/6347):** Validation fails with "The request took too long" on every attempt. This blocks plugin submissions and may be a service-side problem.
4. **[#5472 aws-core `secret-safety.py` hook uses bare `python3`](https://github.com/anthropics/claude-plugins-official/issues/5472):** On Windows, `python3` resolves to the Microsoft Store stub. The issue is closed today. The AWS bump in #6349 may be related, but that link is unconfirmed.
5. **[#1545 commit-commands: 4 small fixes](https://github.com/anthropics/claude-plugins-official/issues/1545):** The fixes are `plugin.json` version, `git checkout --branch` flag, `clean_gone` allowed-tools, and the `commit-push-pr` phase split. The reporter calls them cosmetic or latent, not blocking.

Two of today's bugs (#6348, #5472) are Windows-specific hook problems.

## 6. Feature Requests & Roadmap Signals
- **Vue/Volar LSP ([#232](https://github.com/anthropics/claude-plugins-official/issues/232)):** It has the strongest community support, but it depends on #379. A fix to the `.lsp.json` packaging would likely come first and unlock new LSP plugins.
- **Glob instead of `find` in claude-md-improver ([#633](https://github.com/anthropics/claude-plugins-official/issues/633)):** This is a small, low-risk change and could land quickly.
- **Tracking upstream versions:** The Slack, Figma and AWS bumps and the Opus-following policy show a trend toward keeping plugins current with upstream.

## 7. User Feedback Summary
- Users expect an installed LSP plugin to work out of the box, and that isn't happening (#379).
- Windows users hit hook-execution problems: interpreter resolution and missing hook timeouts.
- Long-running headless setups need safer failure handling (#2283).
- Plugin authors have trouble with directory submission (#6347).
- The reporters of #1545 and #633 offer polished, constructive suggestions, which points to an engaged contributor base.

## 8. Backlog Watch
- **[#232](https://github.com/anthropics/claude-plugins-official/issues/232)** (opened 2026-01-14, 38 👍) and **[#379](https://github.com/anthropics/claude-plugins-official/issues/379)** (opened 2026-02-11, 21 👍) have been open for 8 and 7 months. They need a maintainer decision on the LSP plugin packaging approach.
- **[#1545](https://github.com/anthropics/claude-plugins-official/issues/1545)** (April) and **[#633](https://github.com/anthropics/claude-plugins-official/issues/633)** (March) are small fixes with clear descriptions that are still untriaged.
- **[#2283](https://github.com/anthropics/claude-plugins-official/issues/2283)** (June) is a possible message-loss problem in the Telegram plugin and needs an owner.
- **[#6348](https://github.com/anthropics/claude-plugins-official/issues/6348)** and **[#6347](https://github.com/anthropics/claude-plugins-official/issues/6347)** are new but affect users directly and warrant quick triage.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

# Awesome Claude Code Digest: 2026-10-03

## 1. Today's Overview
Activity is healthy but entirely submission-driven. Of 16 issues updated in the last 24h, 15 are `resource-submission` entries and 11 are still open. Eight of those were opened on 2026-10-02 or 2026-10-03, so the intake pipeline is running steadily. Only 2 PRs moved, both auto-generated by `github-actions[bot]`. There were no releases and no code-level bug reports. The project looks like a curated list with an automated intake flow and a human approval step as the bottleneck.

## 2. Releases
No new releases.

## 3. Project Progress
- **PR #3037, "Add resource: daily.dev" (closed).** This is the bot PR for Skills submission [#3013](https://github.com/hesreallyhim/awesome-claude-code/issues/3013). #3013 carries `approved, pr-created, validation-passed` and was closed on 2026-10-02. The data doesn't say whether #3037 was merged or closed unmerged, so I can't confirm daily.dev was added.
- **PR #3036, "Add resource: pwa2play" (open).** It is the PR for [#3014](https://github.com/hesreallyhim/awesome-claude-code/issues/3014) (Infrastructure & DevOps), which was also closed as approved. The issue is closed while its PR is still open.
- **Other closed issues:**
  - [#3011](https://github.com/hesreallyhim/awesome-claude-code/issues/3011) wallaby-agent-rules (Memory & Context Persistence) is closed with `validation-passed` but without the `approved` label.
  - [#3010](https://github.com/hesreallyhim/awesome-claude-code/issues/3010) Perch (Open Source Software, a semantic linter) is closed with `validation-passed` but without the `approved` label.
  - [#3038](https://github.com/hesreallyhim/awesome-claude-code/issues/3038) emsk-pr is `auto-closed` with `validation-pending`.

## 4. Community Hot Topics
No item has more than 3 comments and none has any 👍 reactions, so there is no real hot topic. The most-commented items are:
- [#3013 daily.dev](https://github.com/hesreallyhim/awesome-claude-code/issues/3013) and [#3014 pwa2play](https://github.com/hesreallyhim/awesome-claude-code/issues/3014), with 3 comments each. Both went through approval and PR creation.
- [#2556 plumb-line](https://github.com/hesreallyhim/awesome-claude-code/issues/2556), with 2 comments. It is a five-skill plugin plus a provenance library. It was submitted 2026-08-17 and updated today.
- [#3011 wallaby-agent-rules](https://github.com/hesreallyhim/awesome-claude-code/issues/3011), with 2 comments.

Themes in the new submissions:
- **Skills dominate.** Four are open: [#3052](https://github.com/hesreallyhim/awesome-claude-code/issues/3052), [#3050](https://github.com/hesreallyhim/awesome-claude-code/issues/3050), [#3041](https://github.com/hesreallyhim/awesome-claude-code/issues/3041), [#2556](https://github.com/hesreallyhim/awesome-claude-code/issues/2556).
- **Design & UI/UX has three open entries.** These are [#3049](https://github.com/hesreallyhim/awesome-claude-code/issues/3049) UI Consistency, [#3044](https://github.com/hesreallyhim/awesome-claude-code/issues/3044) Logo Designer Skill and [#3043](https://github.com/hesreallyhim/awesome-claude-code/issues/3043) Pinpoint.
- **Orchestration and harnesses:** [#3048](https://github.com/hesreallyhim/awesome-claude-code/issues/3048) business-crew (18 agents) and [#3047](https://github.com/hesreallyhim/awesome-claude-code/issues/3047) Subfloor, a meta-harness with durable agent identity and memory.
- **Developer workflow tooling:** [#3051](https://github.com/hesreallyhim/awesome-claude-code/issues/3051) herdr-reviewr (diff review pane), [#3039](https://github.com/hesreallyhim/awesome-claude-code/issues/3039) immosquare-cleaner (a PostToolUse formatting hook).

The underlying needs are verification and review of agent output, consistent UI output, persistent memory, and multi-agent coordination.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported. Two process anomalies are worth noting:
- [#3038 emsk-pr](https://github.com/hesreallyhim/awesome-claude-code/issues/3038) was auto-closed while still `validation-pending`, which suggests the validator closed it before validation finished. The author may need guidance on resubmitting. No fix PR exists.
- [#3014](https://github.com/hesreallyhim/awesome-claude-code/issues/3014) is closed while its PR [#3036](https://github.com/hesreallyhim/awesome-claude-code/pull/3036) is still open. This may be normal workflow, but it hides the pending work from issue-based tracking.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests for the repo itself. The submission mix signals where ecosystem interest is going:
- Skills and plugins (marketplace-style suites such as [#3041](https://github.com/hesreallyhim/awesome-claude-code/issues/3041)).
- Agent orchestration and meta-harnesses.
- Design and UI tooling that works with a running app ([#3043](https://github.com/hesreallyhim/awesome-claude-code/issues/3043)).
- Memory persistence ([#3011](https://github.com/hesreallyhim/awesome-claude-code/issues/3011)).

The open `validation-passed` entries from 2026-10-02 and 2026-10-03 are the likeliest to get approval and bot PRs next. This is an inference from the daily.dev and pwa2play pattern, not something the data states.

## 7. User Feedback Summary
Contributors have no complaints in this dataset. Every issue has 0 👍 and at most 3 comments, mostly bot validation replies. Submitters consistently use the issue form (Display Name, Category, Link, Author, Description), and 14 of 15 passed validation. The one exception, #3038, is the `validation-pending` auto-close described above. Nearly all submissions are small single-purpose tools, which suggests broad grassroots participation.

## 8. Backlog Watch
- **[#2556 plumb-line](https://github.com/hesreallyhim/awesome-claude-code/issues/2556)** has been open since 2026-08-17, about 7 weeks, with `validation-passed` and no `approved` label. Issues opened on 2026-09-30 were handled within about 2 days, so this one has stalled. It needs a maintainer decision.
- **Eleven open submissions** have `validation-passed` and no approval, and eight of them are less than 2 days old. If the queue is a concern, batching approvals would help.
- **[#3036 pwa2play PR](https://github.com/hesreallyhim/awesome-claude-code/pull/3036)** is still open and needs a merge or close decision.
- **[#3037](https://github.com/hesreallyhim/awesome-claude-code/pull/3037)** was closed, but its merge status isn't visible. Check whether daily.dev actually landed.
- **[#3010](https://github.com/hesreallyhim/awesome-claude-code/issues/3010) and [#3011](https://github.com/hesreallyhim/awesome-claude-code/issues/3011)** were closed without `approved` or `pr-created` labels. Confirm whether that was a rejection or an omission, since the authors may want an explanation.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest, 2026-10-03

## 1. Today's Overview
The project had no issues and no releases in the last 24 hours. All activity came from pull requests: 10 were updated, 8 open and 2 closed. Nearly all are community "Add skill" submissions, so the repo works mainly as a curated index fed by outside contributors. Submission volume is steady (PRs #1145–#1153 opened within about two days). There was no visible maintainer activity today, since no PR was merged and no comments were recorded.

## 2. Releases
No new releases.

## 3. Project Progress
No PRs were merged today. Two were closed without a merge shown in the data:
- [#1150](https://github.com/VoltAgent/awesome-agent-skills/pull/1150) `Aident-AI/aident-skill`, closed within a day. It proposed an Agent Skill plus remote MCP server for connecting Claude Code, Codex, Cursor and others to 1,000+ apps. It was aimed at Productivity and Collaboration. The data gives no reason for closing.
- [#1104](https://github.com/VoltAgent/awesome-agent-skills/pull/1104) `testmu-ai/kanecli-skill`, closed on 2026-10-02 after about a week. It was tagged `[PR-in-review]` and targeted the "Skills by TestMu AI" section. It generates and runs browser tests from natural language. The closure reason is not given.

The list itself did not change today.

## 4. Community Hot Topics
No PR has recorded comments or reactions (comments are undefined, 👍 is 0 everywhere), so there are no engagement hot spots. The most useful signal is where submissions cluster:
- **Development and Testing** is the main target. It was named in [#1149](https://github.com/VoltAgent/awesome-agent-skills/pull/1149) (Antigravity Skills Hub, 68 skills across an 8-stage SDLC), [#1153](https://github.com/VoltAgent/awesome-agent-skills/pull/1153) (ui-consistency), [#1152](https://github.com/VoltAgent/awesome-agent-skills/pull/1152) (omega, 14 skills), [#1151](https://github.com/VoltAgent/awesome-agent-skills/pull/1151) (workkit), [#1147](https://github.com/VoltAgent/awesome-agent-skills/pull/1147) (multi) and [#1145](https://github.com/VoltAgent/awesome-agent-skills/pull/1145) (pwguler/skills, 14 skills).
- **Themes:** disciplined agent workflows (drill, implement, verify, land in #1145), issue-driven pipelines (#1151), multi-model orchestration (#1147), and UI consistency grounded in the existing codebase (#1153).
- **Vendor and domain sections:** [#1146](https://github.com/VoltAgent/awesome-agent-skills/pull/1146) proposes a new "Skills by Webshare" section with four official skills. [#1148](https://github.com/VoltAgent/awesome-agent-skills/pull/1148) targets Specialized Domains with pay-per-call data APIs over x402 on Base.

Contributors want listings that group related skills, and they want reliability and verification workflows around coding agents.

## 5. Bugs & Stability
No bugs, crashes or regressions were reported today, and there are no fix PRs. This is a content repo, so stability risk is low.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests. The PRs suggest a few structural pressures:
- **Section growth:** "Development and Testing" is becoming a catch-all where PRs append "at the end" (#1145, #1151, #1152). Splitting it into subcategories could come next.
- **New vendor section:** #1146 would add a vendor section and a link in the "Official Skills by" table. It may be accepted if the maintainers treat official vendor skills as a priority.
- **Large bundles:** #1149 (68 skills) and the 14-skill collections in #1145 and #1152 raise the question of how to list multi-skill repos.

## 7. User Feedback Summary
There are no issues or comments, so no direct feedback. Contributors describe their skills as work for agents such as Claude Code, Codex, OpenCode and Gemini. They stress verification, standardization and SDLC coverage. Some entries rely on `SKILL.md` folders, plugins or MCP servers, so the list now spans more than one packaging format. Closed PRs got no visible explanation, which may leave some contributors unsure about the criteria.

## 8. Backlog Watch
- [#1104](https://github.com/VoltAgent/awesome-agent-skills/pull/1104) stayed open about a week before it was closed. Review of submissions can take days.
- The eight open PRs are all new (created 2026-10-02 or 2026-10-03), so none are old yet:
  - [#1145](https://github.com/VoltAgent/awesome-agent-skills/pull/1145)
  - [#1146](https://github.com/VoltAgent/awesome-agent-skills/pull/1146)
  - [#1147](https://github.com/VoltAgent/awesome-agent-skills/pull/1147)
  - [#1148](https://github.com/VoltAgent/awesome-agent-skills/pull/1148)
  - [#1149](https://github.com/VoltAgent/awesome-agent-skills/pull/1149)
  - [#1151](https://github.com/VoltAgent/awesome-agent-skills/pull/1151)
  - [#1152](https://github.com/VoltAgent/awesome-agent-skills/pull/1152)
  - [#1153](https://github.com/VoltAgent/awesome-agent-skills/pull/1153)
- The structural change in #1146 (new section) and the large bundle in #1149 need maintainer judgment and are the first candidates for attention.
- The data covers only the last 24 hours, so older backlog items outside this window are not visible here.

**Project health:** Inbound contribution is strong, with 8 open submissions and none merged today. Maintainer throughput and transparency are the main things to watch.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
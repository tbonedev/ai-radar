# MCP Ecosystem Digest 2026-11-20

> Issues: 39 | PRs: 22 | Projects covered: 7 | Generated: 2026-11-19 16:15 UTC

- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Registry (official)](https://github.com/modelcontextprotocol/registry)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Docker MCP Registry](https://github.com/docker/mcp-registry)
- [Claude Plugins (official)](https://github.com/anthropics/claude-plugins-official)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills)

---

## MCP Deep Dive

# MCP Servers Project Digest: 2026-11-20

## 1. Today's Overview
Activity is high and maintainer-driven. 39 issues and 22 PRs were updated in 24 hours, with 31 issues closed and 21 PRs merged or closed. Almost all of it is the **v2.6.0 milestone**: tracker issues (#5603–#5608) were opened and closed, and `cliffhall` authored nearly every fix. Changesets PR [#5633](https://github.com/modelcontextprotocol/servers/pull/5633) ("version packages") is open, so a release is probably close. No releases shipped today.

## 2. Releases
No new releases. [#5633](https://github.com/modelcontextprotocol/servers/pull/5633) is the pending version-bump PR for v2.6.0.

## 3. Project Progress
Closed or merged PRs by area:

- **Memory server**
  - [#5623](https://github.com/modelcontextprotocol/servers/pull/5623) orders every lock hand-off by the breaking guard (closes #5565).
  - [#5637](https://github.com/modelcontextprotocol/servers/pull/5637) retries a lock put-back that Windows refuses for a moment (closes #5635).
  - [#5632](https://github.com/modelcontextprotocol/servers/pull/5632) gives the HTTP tests a 30s timeout.
  - Three new test suites pin behavior: [#5625](https://github.com/modelcontextprotocol/servers/pull/5625) (5,000-entity scale), [#5621](https://github.com/modelcontextprotocol/servers/pull/5621) (graph file destroyed from outside), [#5619](https://github.com/modelcontextprotocol/servers/pull/5619) (schema-invalid records).
- **Git server**
  - [#5628](https://github.com/modelcontextprotocol/servers/pull/5628) refuses a Windows junction in a Git directory that leads outside `--repository`.
  - [#5627](https://github.com/modelcontextprotocol/servers/pull/5627) repeats the `--repository` check after a tool writes the working tree.
  - [#5626](https://github.com/modelcontextprotocol/servers/pull/5626) says `git_log` is newest-first and its timestamp filters are optional.
- **Filesystem server**
  - [#5622](https://github.com/modelcontextprotocol/servers/pull/5622) checks a listed directory before and after the read on Windows.
  - [#5618](https://github.com/modelcontextprotocol/servers/pull/5618) gives the real reason when a directory is moved into itself.
  - [#5620](https://github.com/modelcontextprotocol/servers/pull/5620) makes empty `search_files` results say what was searched and how to widen the pattern.
- **Everything server**
  - [#5630](https://github.com/modelcontextprotocol/servers/pull/5630) evicts idle Streamable HTTP sessions.
  - [#5617](https://github.com/modelcontextprotocol/servers/pull/5617) pins the `requestState` 600s TTL.
- **Time server**: [#5615](https://github.com/modelcontextprotocol/servers/pull/5615) keeps the host's tzdata path out of invalid-timezone errors.
- **Sequential thinking**: [#5612](https://github.com/modelcontextprotocol/servers/pull/5612) adds characterization tests for the missing per-item size cap.
- **CI, release and docs**
  - [#5631](https://github.com/modelcontextprotocol/servers/pull/5631) builds, boots and stops each changed server's Docker image.
  - [#5629](https://github.com/modelcontextprotocol/servers/pull/5629) lists each server in the MCP Registry at release time (closes #3047).
  - [#5614](https://github.com/modelcontextprotocol/servers/pull/5614) renames the interface-diff workflow.
  - [#5616](https://github.com/modelcontextprotocol/servers/pull/5616) and [#5613](https://github.com/modelcontextprotocol/servers/pull/5613) are docs updates.

## 4. Community Hot Topics
Comment counts are low everywhere (a maximum of 6) and reactions are near zero.

- [#3047](https://github.com/modelcontextprotocol/servers/issues/3047) is the most discussed item: 6 comments and 3 👍. It tracks registering the reference servers in the official MCP Registry and was closed via #5629. The underlying need is discoverability as the legacy server list is deprecated.
- [#5635](https://github.com/modelcontextprotocol/servers/issues/5635), [#5552](https://github.com/modelcontextprotocol/servers/issues/5552), [#5553](https://github.com/modelcontextprotocol/servers/issues/5553) and [#5555](https://github.com/modelcontextprotocol/servers/issues/5555) each had 3–4 comments.
  - #5552 and #5553 come from an external eval-harness author. They show that small models (qwen3:4b) are sensitive to tool descriptions, so descriptions are being treated as an interface to tune.
  - #5555 is an external bug report.

## 5. Bugs & Stability
In rough order of severity:

1. **Security hardening follow-ups, all fixed.** These cover `--repository` confinement and Windows directory anchoring, following published advisories.
   - [#5599](https://github.com/modelcontextprotocol/servers/issues/5599) was fixed by #5627.
   - [#5520](https://github.com/modelcontextprotocol/servers/issues/5520) was fixed by #5628.
   - [#5600](https://github.com/modelcontextprotocol/servers/issues/5600) was fixed by #5622.
   - [#5573](https://github.com/modelcontextprotocol/servers/issues/5573) (GHSA-h2g3-rwxm-xfm3, `git_merge` running `gc.recentObjectsHook` from repo config) is closed and was fixed in 2026.11.18.
2. **Memory lock races (open).**
   - [#5624](https://github.com/modelcontextprotocol/servers/issues/5624): two processes clearing one crash-left guard can remove a live guard. No fix PR yet.
   - [#5634](https://github.com/modelcontextprotocol/servers/issues/5634): the file-lock test races its own heartbeat on slow runners. No fix PR yet.
   - [#5635](https://github.com/modelcontextprotocol/servers/issues/5635) is closed via #5637, but it was a regression from #5623, so the lock code is still churning.
3. **Smaller bugs.**
   - [#5611](https://github.com/modelcontextprotocol/servers/issues/5611): five Docker images (filesystem, sequentialthinking, fetch, git, time) ignore `docker stop` and are killed at the timeout (exit 137). It is open, with no fix PR yet. #5631 adds the CI check that would catch it.
   - [#5636](https://github.com/modelcontextprotocol/servers/issues/5636): `interface-diff` discards the git error when resolving its default base and reports the wrong cause. It is open, with no fix PR.
   - [#5176](https://github.com/modelcontextprotocol/servers/issues/5176): the string "null" arrives as `None` in the git server. It is blocked on python-sdk#3055.
4. **Fixed:** [#5559](https://github.com/modelcontextprotocol/servers/issues/5559) (tzdata path leak), [#5570](https://github.com/modelcontextprotocol/servers/issues/5570) (flaky Windows HTTP tests) and [#5555](https://github.com/modelcontextprotocol/servers/issues/5555) (misleading `move_file` error).

## 6. Feature Requests & Roadmap Signals
- [#5610](https://github.com/modelcontextprotocol/servers/issues/5610): should `repo_path` default to the configured `--repository`? It is an open design question and is unlikely to land in v2.6.0.
- [#5538](https://github.com/modelcontextprotocol/servers/issues/5538): CORS on the new Streamable HTTP endpoints is closed.
- [#5588](https://github.com/modelcontextprotocol/servers/issues/5588): evaluating a merge queue or required status checks for `v2/main` is closed. #5616/#5589 add a "catch up and re-test" rule after a base-drift break (#5569).
- [#5061](https://github.com/modelcontextprotocol/servers/issues/5061): a GitHub App for board writes is open.
- [#5609](https://github.com/modelcontextprotocol/servers/issues/5609): a memory README note about unreadable lines is a likely quick docs win.
- The v2.6.0 content is already set by the trackers: Git, Filesystem, Memory, Everything, Time and Sequential Thinking. #5611 may be added if it is fixed quickly.

## 7. User Feedback Summary
- Small, local models are sensitive to vague tool descriptions. Examples are `git_log` filters producing an empty window and `search_files` refusals ([#5552](https://github.com/modelcontextprotocol/servers/issues/5552), [#5553](https://github.com/modelcontextprotocol/servers/issues/5553)).
- Error messages should be accurate and should not leak host paths (#5555, #5559).
- Windows reliability is a recurring pain point: lock behavior, junctions, directory anchoring and flaky CI.
- Contributors are proposing characterization and scale tests (#5539–#5543), which suggests the community wants documented behavior pinned down.
- Feedback is constructive and there is no visible dissatisfaction, but external participation is thin. Most items come from maintainer `cliffhall`, plus a few from `soarkit`, `Tanishq67m` and `reservoir-cmyk`.

## 8. Backlog Watch
- [#5176](https://github.com/modelcontextprotocol/servers/issues/5176) has been open since 2026-10-19. It is blocked on python-sdk#3055 and needs an upstream SDK fix or a workaround.
- [#5061](https://github.com/modelcontextprotocol/servers/issues/5061) has been open since 2026-10-07 with no comments. Board automation is stalled on org-level permissions.
- [#5624](https://github.com/modelcontextprotocol/servers/issues/5624), [#5634](https://github.com/modelcontextprotocol/servers/issues/5634) and [#5636](https://github.com/modelcontextprotocol/servers/issues/5636) have zero comments and no fix PRs. #5624 is a real lock-correctness bug and should be prioritized before release.
- [#5610](https://github.com/modelcontextprotocol/servers/issues/5610) needs a maintainer decision.
- [#5611](https://github.com/modelcontextprotocol/servers/issues/5611) (Docker graceful shutdown) affects five images and has no owner yet.

**Health assessment:** Throughput is strong, with security follow-ups closed quickly. The risks are the churn in the memory lock code and the narrow contributor base.

---

## Cross-Ecosystem Comparison

# MCP Ecosystem Cross-Project Comparison, 2026-11-20

Note: the six repos are all MCP/plugin/skill infrastructure, not personal AI assistants. Awesome Claude Code had no activity, so it is excluded from most metrics. Counts below come from the digests; the Awesome MCP Servers and Docker figures are samples (top 20 items shown).

## 1. Ecosystem Overview
The ecosystem is shifting from "building servers" to **distribution, trust and hardening**. The reference servers are being hardened (security confinement, Windows reliability, lock correctness). The registries and catalogs are absorbing a surge of submissions, many written by AI agents. Review capacity is the common bottleneck: intake is high everywhere, while merge and triage throughput lags. Plugin and skill directories are adding policy gates, such as Verified orgs, adoption evidence and private-source questions. Windows is the recurring weak spot.

## 2. Activity Comparison

| Project | Issues updated | PRs updated | Releases | Health (my estimate) |
|---|---|---|---|---|
| MCP Servers | 39 (31 closed) | 22 (21 merged/closed) | None; v2.6.0 version PR #5633 open | **Strong**. High throughput, but lock-code churn and a narrow contributor base |
| MCP Registry | 5 | 7 (0 merged) | None | **Moderate**. Data-integrity and trust gaps, slow review |
| Awesome MCP Servers | 0 | 175 (164 open, 11 closed) | None | **Moderate-low**. Large unreviewed queue, 0 visible comments |
| Docker MCP Registry | 0 | 50 (48 open, 2 closed) | None | **Moderate-low**. Backlog growing, some PRs 4+ months old |
| Claude Plugins (official) | 4 | 18 (9 merged/closed, 11 bot bumps) | None | **Good**. Windows bugs and an unanswered policy thread (#7024) |
| Awesome Agent Skills | 0 | 10 (7 open, 3 closed) | None | **Fair-good**. Steady and young queue, slow curation |
| Awesome Claude Code | no activity | no activity | None | Dormant in this window |

Health scores are my judgment from the digests, not reported metrics.

## 3. MCP Servers' Position
- **Advantages.**
  - It is the only project with real engineering throughput: 31 issues and 21 PRs closed in a day, security advisories fixed within days, and a clear milestone (v2.6.0).
  - It is the reference implementation, so the other projects depend on its semantics. Examples are the registry listing in #5629 and the Docker image CI in #5631.
- **Technical approach.** Code-centric (TypeScript and Python servers, locks, path confinement, Streamable HTTP). The peers are curation and metadata layers (README lists, JSON manifests, SHA bumps).
- **Community size.** Engagement is thin despite the volume. Comments top out at 6, and most work is from one maintainer (`cliffhall`). The Registry has the single deepest thread (#82, 35 comments), and the Plugins repo has #7024 (36 comments, 14 👍). The curated lists have far more submitters but almost no discussion.
- **Risks.** A single-maintainer dependency, regressions from lock rework (#5635 came from #5623), and open items without fix PRs (#5624, #5611).

## 4. Shared Technical Focus Areas

| Need | Projects | Specifics |
|---|---|---|
| Trust and supply-chain verification | Registry, Plugins, Docker, Awesome MCP | Tool fingerprinting (#82), Verified orgs (#7024), private-source servers (Docker #7017), a transparency log (#1863), guardrail servers |
| Windows reliability | MCP Servers, Plugins | Junctions, lock retries, `fcntl` missing, pyenv-win stray file (#7172), UTF-8 (#6966) |
| Data and install validation | Registry, Docker, Awesome MCP | 274 uninstallable versions (#1862), npm tombstones (#1868), `has-glama` and `valid-name` labels |
| Remote and hosted MCP with OAuth | Docker, Registry, Awesome MCP | streamable-http, OAuth 2.1, dynamic `tools.json`, Server Card (SEP-2127) |
| Automation and AI-authored contributions | Docker, Awesome MCP, Awesome Skills, Plugins | Agent-authored PRs, bot SHA bumps, a need for automated validation |
| Tool descriptions and small-model robustness | MCP Servers | Descriptions tuned for qwen3:4b (#5552, #5553) |
| Cross-agent portability | Awesome Skills, Awesome MCP | Skills that work in both Claude Code and Codex |

## 5. Differentiation Analysis
- **MCP Servers:** reference code for developers. Its focus is correctness, security and testing.
- **MCP Registry:** the canonical metadata and discovery API. Its focus is publisher identity, namespace policy, incremental sync and package validation.
- **Awesome MCP Servers:** a community-curated, Glama-scored README list. It is optimized for breadth and has the lowest per-item review.
- **Docker MCP Registry:** a container catalog that is moving to remote endpoints. It targets enterprise and Docker users and has to handle security review.
- **Claude Plugins:** a vendor-governed directory with policy gating (Verified orgs) and a bot-driven partner SHA pipeline. It is Claude-specific.
- **Awesome Agent Skills:** link curation of skills, with evidence-based acceptance (install counts) and cross-agent framing.
- **Awesome Claude Code:** no signal this period.

## 6. Community Momentum & Maturity
- **Rapid iteration:** MCP Servers (pre-release v2.6.0 push) and Claude Plugins (security-guidance hardening).
- **High intake, low throughput:** Awesome MCP Servers (175 PRs), Docker MCP Registry (48 open vs 2 closed), the Registry (0 merges).
- **Steady, small:** Awesome Agent Skills.
- **Dormant or unobserved:** Awesome Claude Code.
- **Maturity:** The reference servers are in a hardening phase after advisories. The Registry is mid-maturity, with open policy questions (case collisions, tool poisoning, 18 months old). The curated lists are mature in form but under strain from volume.

## 7. Trend Signals
1. **Distribution and trust now matter more than server count.** Verification, namespaces and uninstallable-entry audits recur across four repos. Developers should plan for signed or verified publishing and namespace ownership.
2. **Remote, OAuth-based MCP is the default for vendors.** Build for streamable-http and dynamic discovery, and expect less value from container-only distribution.
3. **Tool descriptions are an interface.** Small local models fail on vague descriptions, so test descriptions against small models.
4. **Windows is a first-class target.** Hooks, locks and encodings fail there silently. Add Windows CI and avoid POSIX-only primitives like `fcntl`.
5. **AI-authored contributions will flood curation channels.** Registries need automated validation (Glama score, schema checks, install checks) and explicit contribution policy.
6. **Policy transparency is a gap.** The Verified-org rule (#7024) and the private-source question (Docker #7017) show that rules shipped ahead of documentation cost goodwill.

Caveats: Awesome MCP Servers and Docker comment counts were `undefined`, and only the top 20 of 175 and 50 PRs were sampled, so their backlog conclusions are provisional.

---

## Peer Project Reports

<details>
<summary><strong>MCP Registry (official)</strong> — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry Digest, 2026-11-20

## 1. Today's Overview
The registry had moderate activity in the last 24h: 5 issues and 7 PRs updated, with no new releases and no merges. Most of the work comes from one contributor (lanbass869-cell), who filed an installability audit and three related fixes and features. Maintainer activity is visible only in rdimitrov's pagination PR. The rest is dependency bumps and a docs PR. The project looks healthy but review is slow: all 7 PRs are still open.

## 2. Releases
None.

## 3. Project Progress
No PRs were merged or closed today. Work in review:
- [#1865](https://github.com/modelcontextprotocol/registry/pull/1865) (rdimitrov): `updated_since` listing now picks page keys first and fetches payloads only for that page. Plain `updated_since&limit=100` probes up to 513 matching keys. This should cut scan and sort cost for incremental sync clients.
- [#1868](https://github.com/modelcontextprotocol/registry/pull/1868): an unpublished npm package tombstone (HTTP 200, `time.unpublished` set, empty `versions`) is now treated as "package missing" instead of "version missing". This gives publishers a correct error message.
- [#1869](https://github.com/modelcontextprotocol/registry/pull/1869): `fetchKeyOnce` no longer accepts an empty 200 body as a valid key. This fixes a production-reachable auth edge case that showed up as a CI flake.
- [#1861](https://github.com/modelcontextprotocol/registry/pull/1861): adds an optional `serverCard` URL on `ServerDetail`, pointing to a SEP-2127 Server Card.
- [#1866](https://github.com/modelcontextprotocol/registry/pull/1866) and [#1867](https://github.com/modelcontextprotocol/registry/pull/1867): Dependabot bumps (kms, pgx, x/mod, pulumi sdk).
- [#1863](https://github.com/modelcontextprotocol/registry/pull/1863): docs PR adding MCP Transparency Log to community projects.

## 4. Community Hot Topics
- [#82](https://github.com/modelcontextprotocol/registry/issues/82), tool-poisoning prevention (35 comments, 1 👍, open since 2025-05). It is by far the most discussed item. Publishers would list and fingerprint possible tool calls so clients and third-party vendors can verify them. The underlying need is supply-chain trust for tool definitions. It was explicitly marked "not go-live blocker" and is still unresolved.
- [#1778](https://github.com/modelcontextprotocol/registry/issues/1778), locking the `com.aiapplyd` namespace before its domain changes owner on 19 Nov 2026 (5 comments, closed). The need is protection against namespace hijacking through domain expiry or transfer. Closure suggests it was handled.
- [#1862](https://github.com/modelcontextprotocol/registry/issues/1862) (3 comments): audit of 274 entries pointing at uninstallable package versions.

## 5. Bugs & Stability
Ranked by severity:
1. **Auth, empty key body**: [#1869](https://github.com/modelcontextprotocol/registry/pull/1869). A fix PR already exists, and the bug is production-reachable.
2. **Data quality, 274 uninstallable package versions**: [#1862](https://github.com/modelcontextprotocol/registry/issues/1862). No fix PR yet. [#1692](https://github.com/modelcontextprotocol/registry/issues/1692) adds 3 records that cannot resolve for any client, and warns that single-pass dead counts can mislead.
3. **npm tombstone misclassified**: [#1868](https://github.com/modelcontextprotocol/registry/pull/1868). A fix PR exists. This is related to the cause of #1862, because publish-time validation lets bad versions through.
4. **Namespace and case collision**: [#1805](https://github.com/modelcontextprotocol/registry/issues/1805). GitHub identifiers are case-insensitive but the registry preserves mixed case. Auth is addressed by #1788, but the collision policy is still undefined.

## 6. Feature Requests & Roadmap Signals
- **Server Card support**: [#1861](https://github.com/modelcontextprotocol/registry/pull/1861) depends on SEP-2127, which is upstream and may not be final. It is likely to land only after the spec settles.
- **Tool fingerprinting**: [#82](https://github.com/modelcontextprotocol/registry/issues/82) is long-term and not scheduled.
- **Case-only name collision policy**: [#1805](https://github.com/modelcontextprotocol/registry/issues/1805) is plausible for a near-term release because it follows #1788.
- **Incremental sync performance**: [#1865](https://github.com/modelcontextprotocol/registry/pull/1865) is likely next, since a maintainer authored it.

## 7. User Feedback Summary
Users are mainly concerned with trust and data integrity. Registry entries can become uninstallable, and external auditors are running their own censuses (#1862, #1692). Publishers want protection for their namespaces when domains change hands (#1778). Ecosystem builders are positioning independent verification tools, such as the transparency log in [#1863](https://github.com/modelcontextprotocol/registry/pull/1863), alongside the registry. Together this points to demand for stronger validation and trust signals in the registry itself.

## 8. Backlog Watch
- [#82](https://github.com/modelcontextprotocol/registry/issues/82) has been open about 18 months with 35 comments and needs a maintainer decision or roadmap placement.
- [#1692](https://github.com/modelcontextprotocol/registry/issues/1692) has been open since 2026-10-07 with 1 comment and no clear response.
- [#1805](https://github.com/modelcontextprotocol/registry/issues/1805) needs a policy decision.
- [#1862](https://github.com/modelcontextprotocol/registry/issues/1862) needs triage for a cleanup or validation strategy.
- PRs [#1861](https://github.com/modelcontextprotocol/registry/pull/1861), [#1863](https://github.com/modelcontextprotocol/registry/pull/1863), [#1868](https://github.com/modelcontextprotocol/registry/pull/1868) and [#1869](https://github.com/modelcontextprotocol/registry/pull/1869) are waiting for review. The two Dependabot PRs can be merged if CI is green.

</details>

<details>
<summary><strong>Awesome MCP Servers</strong> — <a href="https://github.com/punkpeye/awesome-mcp-servers">punkpeye/awesome-mcp-servers</a></summary>

# Awesome MCP Servers Digest — 2026-11-20

## 1. Today's Overview
The repository saw no issue activity and no releases in the last 24h. All activity was PR-driven: 175 PRs were updated (164 open, 11 merged/closed). Almost all are community submissions adding servers to the README list. Activity is high in volume, but nearly all PRs show 0 comments and 0 reactions, so review throughput looks like the bottleneck rather than contributor interest. The data lists only 1 closed PR (#18118) among the top 20, so the merged/closed split can't be verified in detail.

## 2. Releases
None.

## 3. Project Progress
Only one closed PR appears in the sampled data:
- [#18118](https://github.com/punkpeye/awesome-mcp-servers/pull/18118) — Post Engineer MCP server (Social Media), opened 2026-10-30 and closed 2026-11-19. It was labeled `missing-glama`. The data doesn't say whether it was merged or rejected, so I can't tell if the missing Glama listing was the reason.

The other ~10 merged/closed PRs aren't in the top-20 sample, so I can't describe them.

## 4. Community Hot Topics
No PR or issue has any recorded comment or 👍 (the comment count is `undefined` and reactions are 0). The data has no real "hot" items. Themes in the new submissions:
- **Security and governance for agents:** [#20065](https://github.com/punkpeye/awesome-mcp-servers/pull/20065) (Enterplace gateway with per-tool policies and audit log), [#20061](https://github.com/punkpeye/awesome-mcp-servers/pull/20061) (erwa-mcp guardrails), [#20059](https://github.com/punkpeye/awesome-mcp-servers/pull/20059) (Surinch DB Guard). This suggests demand for policy and safety layers around MCP.
- **Finance and regional data:** [#20063](https://github.com/punkpeye/awesome-mcp-servers/pull/20063) (Mexican tariffs), [#20056](https://github.com/punkpeye/awesome-mcp-servers/pull/20056) (Perly Pay), [#17228](https://github.com/punkpeye/awesome-mcp-servers/pull/17228) (US watchlist alerts), [#20057](https://github.com/punkpeye/awesome-mcp-servers/pull/20057) (Polish procurement).
- **Creative and 3D tools:** [#20064](https://github.com/punkpeye/awesome-mcp-servers/pull/20064) (Blender, 248 tools), [#19993](https://github.com/punkpeye/awesome-mcp-servers/pull/19993) (Rhino 3D), [#20054](https://github.com/punkpeye/awesome-mcp-servers/pull/20054) (Klakix media generation).
- **Developer and platform tools:** [#20062](https://github.com/punkpeye/awesome-mcp-servers/pull/20062) (real iOS device testing), [#20008](https://github.com/punkpeye/awesome-mcp-servers/pull/20008) (git forge with an MCP endpoint), [#20055](https://github.com/punkpeye/awesome-mcp-servers/pull/20055) (GoMami VPS).

A notable share of PRs carry the 🤖🤖🤖 marker, meaning they were prepared by AI agents. Examples are [#20065](https://github.com/punkpeye/awesome-mcp-servers/pull/20065), [#20061](https://github.com/punkpeye/awesome-mcp-servers/pull/20061) and [#20008](https://github.com/punkpeye/awesome-mcp-servers/pull/20008).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, since there were 0 issues. The only quality signals are the automated PR labels: `missing-glama`, `has-glama`, `valid-name` and `has-emoji`.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. These signals come from the PR stream:
- The contributor in [#20064](https://github.com/punkpeye/awesome-mcp-servers/pull/20064) says an earlier PR (#12911) was auto-closed for inactivity. It was then resubmitted at the maintainers' suggestion. Stale auto-closure is an active process, and resubmission is an accepted path.
- Several PRs mention the official MCP Registry, such as [#16191](https://github.com/punkpeye/awesome-mcp-servers/pull/16191). Registry cross-listing may become a common expectation.
- Categories with continued growth are Finance, Security, Art & Culture and Databases. Category restructuring is possible but is not indicated by the data.

## 7. User Feedback Summary
No direct user feedback exists, because there are no comments. The submissions suggest:
- Contributors value having a Glama listing and quality score. [#20064](https://github.com/punkpeye/awesome-mcp-servers/pull/20064) and [#19942](https://github.com/punkpeye/awesome-mcp-servers/pull/19942) both highlight their Glama scores.
- Local stdio servers installed via `npx` or `uvx` dominate.
- Some submissions are low-effort. [#20058](https://github.com/punkpeye/awesome-mcp-servers/pull/20058) ("plz accept") and [#20066](https://github.com/punkpeye/awesome-mcp-servers/pull/20066) lack the required detail. Possible agent-generated PRs may add review noise.

## 8. Backlog Watch
With 164 open PRs and 0 comments in the sampled data, the backlog is large and has no visible discussion. Older PRs refreshed in the last 24h:
- [#16191](https://github.com/punkpeye/awesome-mcp-servers/pull/16191) — dembrandt, opened 2026-10-11, about 5.5 weeks old, with `has-glama`.
- [#17228](https://github.com/punkpeye/awesome-mcp-servers/pull/17228) — us-watchlist-alerts, opened 2026-10-22, about 4 weeks old, with `has-glama`.

Both have complete labels and still seem to be unreviewed. Maintainers could prioritize PRs with `has-glama` and `valid-name`, and could batch-close `missing-glama` PRs that don't respond to feedback.

**Caveat:** Comment counts were `undefined` in the source data and only the top 20 of 175 PRs were provided, so activity and backlog conclusions are provisional.

</details>

<details>
<summary><strong>Docker MCP Registry</strong> — <a href="https://github.com/docker/mcp-registry">docker/mcp-registry</a></summary>

# Docker MCP Registry Digest, 2026-11-20

Repo: https://github.com/docker/mcp-registry

## 1. Today's Overview
The registry saw no Issue activity and no releases in the last 24h. All activity was PRs: 50 updated, 48 still open and 2 closed. Nearly every PR is a new-server submission, and many are remote, hosted, OAuth-based servers. Submission volume is high, with many PRs opened on 2026-11-19. Only 2 PRs closed, and none are confirmed merged in the data. Throughput looks submission-heavy and review-light, so a backlog is building. Comment counts are `undefined` in the data, so discussion levels can't be measured.

## 2. Releases
No new releases.

## 3. Project Progress
No merged PRs are visible. Two PRs were closed without a merge signal:
- [#7373](https://github.com/docker/mcp-registry/pull/7373) Add official Kling AI MCP plugins (Global and China remote endpoints, Streamable HTTP, OAuth). It was opened and closed the same day, so it was probably withdrawn or superseded. The reason isn't in the data.
- [#6177](https://github.com/docker/mcp-registry/pull/6177) Add NetNest Design Fundamentals remote MCP server. It was opened 2026-10-27 and closed 2026-11-19 after about 3 weeks. The reason isn't stated.

No features or fixes advanced in the registry's own tooling.

## 4. Community Hot Topics
The data has no usable comment or reaction counts (all `undefined`, 👍 = 0), so "hot" can't be ranked from engagement. The list below uses update recency and theme instead.

**Themes across the 20 PRs shown:**
- **Remote/hosted servers with OAuth** dominate: [#7381](https://github.com/docker/mcp-registry/pull/7381) CleanedWeb, [#7380](https://github.com/docker/mcp-registry/pull/7380) Marrow (Apple Health), [#7379](https://github.com/docker/mcp-registry/pull/7379) Pilot by Braike, [#7378](https://github.com/docker/mcp-registry/pull/7378) Agent Loadout, [#7375](https://github.com/docker/mcp-registry/pull/7375) AirSign, [#6376](https://github.com/docker/mcp-registry/pull/6376) FairValid, [#5903](https://github.com/docker/mcp-registry/pull/5903) GreatWait, [#7017](https://github.com/docker/mcp-registry/pull/7017) GWIX.
- **Agent memory and tooling:** [#4335](https://github.com/docker/mcp-registry/pull/4335) Mnemoverse Memory, [#5026](https://github.com/docker/mcp-registry/pull/5026) Portkey Admin (AI gateway control plane).
- **Utility and media servers:** [#7372](https://github.com/docker/mcp-registry/pull/7372) easypdf, [#7371](https://github.com/docker/mcp-registry/pull/7371) Importly, [#7377](https://github.com/docker/mcp-registry/pull/7377) Calotype (screenshots), [#5240](https://github.com/docker/mcp-registry/pull/5240) Clipwright (video ads).
- **Agent-authored submissions:** [#7377](https://github.com/docker/mcp-registry/pull/7377) says it was opened by an AI agent, with a human backer.

**Underlying need:** Vendors want distribution in the Docker catalog. They are shifting from containerized stdio servers to hosted remote endpoints with OAuth and dynamic tool discovery, which carry little review surface and need no image build.

## 5. Bugs & Stability
No Issues were reported and none of the PRs describe bugs, crashes or regressions. Nothing to rank.

Some PRs carry a trust or security angle for reviewers:
- [#6886](https://github.com/docker/mcp-registry/pull/6886) Remotify is a local stdio server that runs shell commands on a remote computer through an HTTP relay. This is a high-privilege capability and deserves careful security review.
- [#7017](https://github.com/docker/mcp-registry/pull/7017) GWIX is a hosted server whose source is private. That limits what the registry can audit.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests, since there are no Issues. The implied signals are:
- Remote MCP support is the main growth path. Most new entries use streamable-http, OAuth 2.1 and `tools.json` set to `[]` for dynamic discovery. Tooling and docs for remote servers, such as the CONTRIBUTING.md section cited in [#6177](https://github.com/docker/mcp-registry/pull/6177), will matter more.
- Submissions are likely to keep rising, including AI-agent-authored ones. The registry may need automated validation and clearer policy for non-open-source (private-source) servers. This is an inference, not a stated plan.

## 7. User Feedback Summary
There is no direct user feedback in this window. The submitter use cases are:
- Marketing and ad analytics: [#7379](https://github.com/docker/mcp-registry/pull/7379), [#7017](https://github.com/docker/mcp-registry/pull/7017)
- Email verification and lead generation: [#6376](https://github.com/docker/mcp-registry/pull/6376)
- E-signature and document handling: [#7375](https://github.com/docker/mcp-registry/pull/7375), [#7372](https://github.com/docker/mcp-registry/pull/7372)
- Health data: [#7380](https://github.com/docker/mcp-registry/pull/7380)
- Persistent agent memory: [#4335](https://github.com/docker/mcp-registry/pull/4335)

The implied pain point is slow review. Several PRs have waited weeks or months for any visible outcome.

## 8. Backlog Watch
These older open PRs were updated 2026-11-19 but have been open a long time, and they need maintainer attention:
- [#4335](https://github.com/docker/mcp-registry/pull/4335) Mnemoverse Memory: open since 2026-07-08 (about 4.5 months).
- [#5026](https://github.com/docker/mcp-registry/pull/5026) Portkey Admin: open since 2026-09-08.
- [#5240](https://github.com/docker/mcp-registry/pull/5240) Clipwright: open since 2026-09-25.
- [#5903](https://github.com/docker/mcp-registry/pull/5903) GreatWait: open since 2026-10-20.
- [#6376](https://github.com/docker/mcp-registry/pull/6376) FairValid: open since 2026-10-30.
- [#7017](https://github.com/docker/mcp-registry/pull/7017) GWIX: open since 2026-11-12, with a private-source policy question.
- [#6886](https://github.com/docker/mcp-registry/pull/6886) Remotify: open since 2026-11-10, needs a security review.

**Project health:** Intake is strong. Review and merge throughput looks weak: 48 open PRs against 2 closures, and no merges seen. Without a triage push or automated checks, the backlog will keep growing.

</details>

<details>
<summary><strong>Claude Plugins (official)</strong> — <a href="https://github.com/anthropics/claude-plugins-official">anthropics/claude-plugins-official</a></summary>

# Claude Plugins (Official) Digest — 2026-11-20

## 1. Today's Overview
Activity was moderate and plugin-centric: 4 issues and 18 PRs were updated in the last 24h, with no new releases. Most PR traffic (11 of 18) is automated SHA bumps from `github-actions[bot]` for partner plugins (monday-crm, coderabbit, datadog, posthog, postman, figma). The human-driven work centers on the `security-guidance` and `hookify` plugins, with Windows compatibility the dominant theme. The most discussed item is the Verified-organization policy for the plugin directory (#7024, 36 comments). Overall health is good, but there is a visible backlog of open bot bumps and unanswered policy questions.

## 2. Releases
No new releases.

## 3. Project Progress
Of the 18 PRs, 9 were merged or closed. Most closures are superseded bot bumps, not feature merges. The data does not say whether the closed non-bot PRs were merged or just closed.

- **hookify UTF-8 fix** — [#7174](https://github.com/anthropics/claude-plugins-official/pull/7174) was closed. It reads the transcript as UTF-8 and fixes [#6966](https://github.com/anthropics/claude-plugins-official/issues/6966). Whether it merged or was closed unmerged is unclear from the data, and #6966 is still listed as open.
- **Discord `list_emojis` tool** — [#7154](https://github.com/anthropics/claude-plugins-official/pull/7154) was closed. It lets Claude look up custom emoji IDs for `react` and `reply`.
- **Closed bot bumps** — these were superseded by newer SHAs:
  - [#6968](https://github.com/anthropics/claude-plugins-official/pull/6968) (monday-crm)
  - [#7155](https://github.com/anthropics/claude-plugins-official/pull/7155) (coderabbit)
  - [#6740](https://github.com/anthropics/claude-plugins-official/pull/6740) (posthog)
  - [#7166](https://github.com/anthropics/claude-plugins-official/pull/7166) and [#7147](https://github.com/anthropics/claude-plugins-official/pull/7147) (postman)
  - [#7164](https://github.com/anthropics/claude-plugins-official/pull/7164) and [#7138](https://github.com/anthropics/claude-plugins-official/pull/7138) (figma)
- **Issue closed** — [#6874](https://github.com/anthropics/claude-plugins-official/issues/6874) (security-guidance in-flight markers are a no-op on native Windows because they rely on `fcntl`).

## 4. Community Hot Topics
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024) Becoming a Verified organization** (36 comments, 14 👍). Since about 2026-11-05, the directory rejects command hooks and local MCP servers from non-Verified orgs. Submitters report that the docs and pre-submission checklist don't explain how to get Verified. The underlying need is a documented, transparent verification path. Without one, third-party authors with legitimate hook or local-server plugins are blocked.
- **security-guidance PR cluster by @mhegazy** — [#7165](https://github.com/anthropics/claude-plugins-official/pull/7165), [#7167](https://github.com/anthropics/claude-plugins-official/pull/7167), [#7168](https://github.com/anthropics/claude-plugins-official/pull/7168), [#7142](https://github.com/anthropics/claude-plugins-official/pull/7142). They aim to make the Stop and commit reviews reliable, covering baseline timing, commits that a review failed to read, and measuring changes no review saw. They also cut redundant Python launches on Windows. These PRs have no comments or reactions yet.

## 5. Bugs & Stability
Ranked by impact:
1. **[#6966](https://github.com/anthropics/claude-plugins-official/issues/6966), hookify on Windows.** Stop rules on `transcript` read the file with the platform default encoding. This raises a decode error that is swallowed, so the transcript looks empty and the rules always fire. Fix PR [#7174](https://github.com/anthropics/claude-plugins-official/pull/7174) exists, but the issue is still open.
2. **[#7172](https://github.com/anthropics/claude-plugins-official/issues/7172), security-guidance probe on Windows with pyenv-win.** `sg-python.sh` creates a stray `(3` file in the project root on every hook run, which pollutes users' git status. It is new and has no fix PR. [#7142](https://github.com/anthropics/claude-plugins-official/pull/7142) touches the same launcher but does not claim to fix it.
3. **[#6874](https://github.com/anthropics/claude-plugins-official/issues/6874), closed.** Windows lacks `fcntl`, so the in-flight markers do nothing and a push right after a commit re-reviews the same commit. This is lower severity because it only causes a redundant review.

The pattern is clear: Windows is the weak spot for the plugin hooks, and three of the four issues are Windows-specific.

## 6. Feature Requests & Roadmap Signals
- **Verified-organization path** ([#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)). The most likely near-term outcome is clearer documentation or an application process, given the 36 comments and 14 👍.
- **code-modernization version lookups** ([#7170](https://github.com/anthropics/claude-plugins-official/pull/7170)). Commands will check whether target versions are supported instead of relying on model memory. It is open and from the `claude[bot]` account, so it could land soon.
- **Discord `list_emojis`** ([#7154](https://github.com/anthropics/claude-plugins-official/pull/7154)) was closed, so its status is unclear.
- **security-guidance review-coverage work** ([#7165](https://github.com/anthropics/claude-plugins-official/pull/7165), [#7167](https://github.com/anthropics/claude-plugins-official/pull/7167), [#7168](https://github.com/anthropics/claude-plugins-official/pull/7168)). These point to a hardening release, and #7168 is measurement only.

## 7. User Feedback Summary
- Plugin authors are frustrated by a policy change that took effect without a documented path to compliance (#7024).
- Windows users, especially those using pyenv-win, uv or non-UTF-8 code pages, hit silent failures or side effects from hooks. Examples are false-positive rules and stray files in their repos (#6966, #7172).
- Maintainers are measuring and fixing reliability gaps in security review. This suggests the plugin is in active use and that review completeness matters to users.

## 8. Backlog Watch
- **[#7024](https://github.com/anthropics/claude-plugins-official/issues/7024)** has been open since 2026-11-06 with 36 comments. Maintainers need to give an official answer on the Verified process.
- **[#6966](https://github.com/anthropics/claude-plugins-official/issues/6966)** has been open since 2026-10-31. A fix PR exists, but the issue remains open. Confirm whether the fix merged and close the issue if so.
- **Stale bot bumps** are open and waiting for review:
  - [#6981](https://github.com/anthropics/claude-plugins-official/pull/6981) (datadog, opened 2026-11-03)
  - [#7169](https://github.com/anthropics/claude-plugins-official/pull/7169) (posthog)
  - [#7171](https://github.com/anthropics/claude-plugins-official/pull/7171) (coderabbit)
  - [#7173](https://github.com/anthropics/claude-plugins-official/pull/7173) (monday-crm)
- **Open security-guidance PRs** [#7142](https://github.com/anthropics/claude-plugins-official/pull/7142), [#7165](https://github.com/anthropics/claude-plugins-official/pull/7165), [#7167](https://github.com/anthropics/claude-plugins-official/pull/7167) and [#7168](https://github.com/anthropics/claude-plugins-official/pull/7168) have had no review comments. The first was opened on 2026-11-16.

</details>

<details>
<summary><strong>Awesome Claude Code</strong> — <a href="https://github.com/hesreallyhim/awesome-claude-code">hesreallyhim/awesome-claude-code</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Awesome Agent Skills</strong> — <a href="https://github.com/VoltAgent/awesome-agent-skills">VoltAgent/awesome-agent-skills</a></summary>

# Awesome Agent Skills Digest — 2026-11-20

Repo: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

## 1. Today's Overview
Activity was moderate and made up entirely of PRs. There were 10 PRs updated in 24h (7 open, 3 closed) and no issues or releases. The repo works as a curated link list, so every PR is a "Add skill: …" submission, and its health depends on the maintainers' review throughput. Submissions are steady, spread across Development and Testing, Specialized Domains, Productivity and Marketing. All 7 open PRs were created Nov 18–19, and none has any comments or reactions.

## 2. Releases
No new releases.

## 3. Project Progress
Three PRs were closed, and none was reported as merged:
- [#1440](https://github.com/VoltAgent/awesome-agent-skills/pull/1440) wkd09/modern-java-guidance (Development and Testing): closed on Nov 19, three days after creation. It is a version-aware Java skill with a CLI scanner and a `PostToolUse` hook.
- [#1410](https://github.com/VoltAgent/awesome-agent-skills/pull/1410) klingai-tech/kling-cli (Specialized Domains): closed on Nov 18 after about 4 days. It was resubmitted the next day as [#1449](https://github.com/VoltAgent/awesome-agent-skills/pull/1449), which cites 11.7K installs on skills.sh as evidence of adoption. This suggests the first attempt was closed over insufficient evidence or format.
- [#1439](https://github.com/VoltAgent/awesome-agent-skills/pull/1439) iifzx/design-garden: closed on Nov 18. It proposed a new "Design and Media" subcategory. The summary doesn't say why it was closed, so I can't tell whether the new-category proposal played a part.

The data doesn't give close reasons. The closures look like maintainer curation, but that is inference.

## 4. Community Hot Topics
No PR has comments or reactions, so there are no hot threads. The most notable items by theme:
- [#1449](https://github.com/VoltAgent/awesome-agent-skills/pull/1449) (Kling CLI): an official vendor skill resubmitted with adoption data. It is the most evidence-backed open submission.
- [#1445](https://github.com/VoltAgent/awesome-agent-skills/pull/1445) (bloom): a financial skill for balances, payments (x402) and trading on EVM and Solana, with passkey approval for each transaction. It touches security-sensitive territory and may deserve closer review.
- [#1448](https://github.com/VoltAgent/awesome-agent-skills/pull/1448) (dogear): session bookmarking that works in both Claude Code and Codex. It reflects interest in cross-agent portability.

Underlying need: authors want visibility in a widely read directory, and contributors are making their submissions more persuasive (install counts, CLI companions, cross-agent support).

## 5. Bugs & Stability
No bugs, crashes or regressions were reported, and there were no issues. Nothing to rank.

## 6. Feature Requests & Roadmap Signals
There are no formal feature requests. Two weak signals:
- A new taxonomy category was proposed ("Design and Media" in [#1439](https://github.com/VoltAgent/awesome-agent-skills/pull/1439)), but the PR was closed, so a new subcategory is unlikely in the near term.
- Submissions are drifting toward domains beyond dev tooling, such as finance (#1445), video and marketing (#1443 [clips-kitty](https://github.com/VoltAgent/awesome-agent-skills/pull/1443), #1449), and mobile security (#1444 [FlutterGuard](https://github.com/VoltAgent/awesome-agent-skills/pull/1444)). Specialized Domains and Marketing may need restructuring if they keep growing.

## 7. User Feedback Summary
No direct feedback appears in the data. Inferred from the PRs:
- Contributors state their relationship to the skill, for example "I'm the author" in #1443. That points to explicit or implicit disclosure and quality criteria.
- Many descriptions stress that the skill works across agents (Claude Code and Codex, for example [#1446](https://github.com/VoltAgent/awesome-agent-skills/pull/1446), [#1448](https://github.com/VoltAgent/awesome-agent-skills/pull/1448)).
- Others note that no skill content is copied, as in [#1447](https://github.com/VoltAgent/awesome-agent-skills/pull/1447) figureatlas. This suggests contribution guidelines require links rather than duplicated content.

## 8. Backlog Watch
There are no stale items in this window. All open PRs are 1–2 days old:
- [#1443](https://github.com/VoltAgent/awesome-agent-skills/pull/1443), [#1444](https://github.com/VoltAgent/awesome-agent-skills/pull/1444), [#1445](https://github.com/VoltAgent/awesome-agent-skills/pull/1445) (Nov 18): the oldest open ones, awaiting a first review.
- [#1446](https://github.com/VoltAgent/awesome-agent-skills/pull/1446), [#1447](https://github.com/VoltAgent/awesome-agent-skills/pull/1447), [#1448](https://github.com/VoltAgent/awesome-agent-skills/pull/1448), [#1449](https://github.com/VoltAgent/awesome-agent-skills/pull/1449) (Nov 19).

The PR numbers go up to #1449, and closures take 3–4 days, so the review queue could grow if volume stays this high. A security-focused look at #1445 (the financial skill) is advisable before it is listed. This window shows only recent activity, so the wider backlog can't be assessed from this data.

**Health assessment:** Contributions are steady and review is slow but ongoing. There are no issues, so the repo has little to track beyond new submissions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Infrastructure Digest 2026-11-14

> Generated: 2026-11-14 13:55 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-14

**Coverage note:** Only two digests were supplied, Dify (application/workflow platform) and LiteLLM (LLM gateway). There was no data for inference engines, local runtimes or fine-tuning frameworks (vLLM, SGLang, llama.cpp, Ollama, Unsloth). Those layers are marked "no data" below, and I haven't inferred anything about them.

## 1. Ecosystem Overview
Both projects spent the day on hardening the layer above the model, not on model capability. Dify's activity is a profiling-driven wave of performance and concurrency reports, with fixes in flight for some of them. LiteLLM shipped three releases (one dev build, two stable-line patches) and handled a large volume of provider-translation fixes. Both show the same maturity pattern: once the basic feature set is in place, the work shifts to tail latency, race conditions, quota correctness and compatibility between providers. Most of the fixes cited for both projects are still open PRs, not merged code.

## 2. Activity Comparison

| Project | Issues | PRs | Releases |
|---|---|---|---|
| Dify | Not stated in the digest. About 30 distinct issues are cited, mostly new bug and performance reports. | 133 updated in 24h, mostly strict-pyrefly test migrations and Agent refactors | None |
| LiteLLM | 62 updated, with heavy stale-issue cleanup | 500 touched | 3: v1.111.0-dev.2 (dev), v1.108.8 (LTS), v1.106.10 (patch) |

LiteLLM's release notes were truncated to cosign boilerplate, so the contents of all three releases are unconfirmed. Dify's PR volume is mostly non-user-facing maintenance.

## 3. Model Support Race
No model or hardware support shipped in either project today. Everything below is an open PR or a request.

- **LiteLLM is clearly ahead on breadth.**
  - [PR #50768](https://github.com/BerriAI/litellm/pull/50768): Meta Muse models on Vertex AI (Wonder 1.0, Ember 1.0, Spark 1.3) with native Responses routing.
  - [PR #50881](https://github.com/BerriAI/litellm/pull/50881): MiniMax-H3-Image generation and edit.
  - [PR #50642](https://github.com/BerriAI/litellm/pull/50642): Vercel AI Gateway as a provider.
  - [PR #51427](https://github.com/BerriAI/litellm/pull/51427): GitHub App authentication for the Copilot provider.
- **Catalog hygiene:** [#50934](https://github.com/BerriAI/litellm/issues/50934) adds Soniox v6 models (v5 retires Dec 15, 2026). [PR #51827](https://github.com/BerriAI/litellm/pull/51827) drops 22 retired Together AI ids. [PR #51816](https://github.com/BerriAI/litellm/pull/51816) moves tests off OpenAI audio/realtime ids that shut down between Jan 6 and Feb 26, 2027.
- **Dify** has only peripheral work: [PR #45340](https://github.com/langgenius/dify/pull/45340) (OpenAPI delete endpoints for models and credentials). [#46322](https://github.com/langgenius/dify/issues/46322) also shows that provider plugins cost throughput when the cache is disabled (26 → 3.4 req/s with seven plugins).
- **Architectures and kernels:** no data (no serving-engine digests).

## 4. Performance Frontier
There is no KV cache, batching, quantization, distributed-serving or kernel work in this data. The optimization effort is at the I/O, database and concurrency layer.

| Area | Dify | LiteLLM |
|---|---|---|
| Streaming | [#46397](https://github.com/langgenius/dify/issues/46397): CPU per chunk grows with conversation length (fix: [PR #46398](https://github.com/langgenius/dify/pull/46398)). [#46411](https://github.com/langgenius/dify/issues/46411): one Redis round trip per chunk, 21% of worker time on long answers. | [#38689](https://github.com/BerriAI/litellm/issues/38689): ~16.7 s TTFB spikes on Bedrock streaming vs ~2 s normally |
| Redis / state | [#46280](https://github.com/langgenius/dify/issues/46280): polling costs 485 Redis commands/s for 10 waiting runs | [PR #51837](https://github.com/BerriAI/litellm/pull/51837): batches spend checks into existing round trips. [PR #46938](https://github.com/BerriAI/litellm/pull/46938): atomic priority queue across replicas. |
| DB | [#46373](https://github.com/langgenius/dify/issues/46373) and [#46354](https://github.com/langgenius/dify/issues/46354): pool exhausted at 100 concurrent requests. [PR #46410](https://github.com/langgenius/dify/pull/46410) and [PR #46413](https://github.com/langgenius/dify/pull/46413) remove redundant queries. | No comparable item |
| Control plane | [#46282](https://github.com/langgenius/dify/issues/46282): fixed default concurrency caps that don't scale with hardware | [#50065](https://github.com/BerriAI/litellm/issues/50065): MCP `tools/list` blocks 18–50 s (v1.108.0 regression, no fix PR) |
| Token cost | | [PR #51836](https://github.com/BerriAI/litellm/pull/51836): removes duplicated system messages (2–3× per call) |

Dify's numbers are reporter measurements. LiteLLM's only quantified items are the latency reports.

## 5. Layer Positioning
- **Application / workflow platform (Dify):** owns knowledge retrieval, agents, workflows and human-in-the-loop. Its failure modes are DB pool contention, quota races and workflow state.
- **Gateway (LiteLLM):** owns provider translation, routing, spend, guardrails and MCP. Its failure modes are schema translation (Vertex, Bedrock, Anthropic), budget accounting and protocol compatibility.
- **Overlap:** both run MCP and tool paths, plus quota and limit enforcement, and both have correctness gaps there.
- **Serving engines, local runtimes, fine-tuning:** no data today.

## 6. Trend Signals
1. **Concurrency correctness is the main weak point.** Dify has race-condition and limit-bypass reports ([#46309](https://github.com/langgenius/dify/issues/46309), [#46318](https://github.com/langgenius/dify/issues/46318), [#46320](https://github.com/langgenius/dify/issues/46320)). LiteLLM has budget-reset data loss ([#50898](https://github.com/BerriAI/litellm/issues/50898), closed) and a non-atomic queue ([PR #46938](https://github.com/BerriAI/litellm/pull/46938)). Don't treat per-tenant quotas as strict guarantees under load.
2. **Provider compatibility is a moving target.** The recurring problems are unsigned Gemini thinking blocks breaking Claude ([PR #51793](https://github.com/BerriAI/litellm/pull/51793)), Vertex union-root schemas ([PR #51835](https://github.com/BerriAI/litellm/pull/51835)) and tool-use ID sanitization ([#32214](https://github.com/BerriAI/litellm/issues/32214)). Pin one provider per session for thinking-mode agents.
3. **Guardrail and scanner reliability.** Dify's MetaDefender result code 4 may admit confirmed threats ([#46336](https://github.com/langgenius/dify/issues/46336)). LiteLLM's Bedrock guarded text in system and assistant turns was never checked ([PR #51776](https://github.com/BerriAI/litellm/pull/51776)). Audit any security control that sits in these layers.
4. **Model-lifecycle churn.** Retirements of Soniox v5 (Dec 2026), OpenAI audio/realtime ids (Jan–Feb 2027) and 22 Together AI ids mean pinned model ids need a migration plan.
5. **Operability gaps.** LiteLLM has no documented DB schema changes between releases ([#41743](https://github.com/BerriAI/litellm/issues/41743)). Dify runs can stay stuck in a paused state ([#46315](https://github.com/langgenius/dify/issues/46315)). Plan external monitoring and careful upgrade windows.

**What to watch:** whether Dify's pool-holder refactor ([#46370](https://github.com/langgenius/dify/issues/46370)) lands, whether LiteLLM fixes the MCP latency regression ([#50065](https://github.com/BerriAI/litellm/issues/50065)), and what the truncated v1.108.8 and v1.111.0-dev.2 notes contain.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-14

## 1. Today's Highlights
No release today. Activity is dominated by one contributor (Theysua) filing a batch of profiling-backed performance and DB-pool issues, each with a matching fix PR. A parallel wave of bug reports (mikamikasuki) covers concurrency and race conditions in rate limits, queues and imports. MindOfqc is also migrating many API test files to strict pyrefly.

## 2. Releases & Breaking Changes
None in the last 24h.

## 3. New Model & Hardware Support
No new model or hardware support landed today.
- Related: [PR #45340](https://github.com/langgenius/dify/pull/45340) adds OpenAPI delete endpoints for models and model credentials.
- Related: [#46322](https://github.com/langgenius/dify/issues/46322) reports that with the plugin model providers cache disabled, each run re-validates the tenant's full provider list. Throughput fell from 26 to 3.4 requests/s with seven provider plugins.

## 4. Performance & Optimization
Findings come from issue reports; the figures are the reporters' own measurements.
- **Streaming chat CPU.** [#46397](https://github.com/langgenius/dify/issues/46397) reports API CPU per chunk growing with conversation length. [PR #46398](https://github.com/langgenius/dify/pull/46398) publishes the prompt once per stream instead of with every chunk.
- **Workflow streaming.** [#46411](https://github.com/langgenius/dify/issues/46411) reports one Redis round trip per chunk: 0.56 ms of worker CPU per chunk, and 21% of worker time on long answers. No fix PR is listed.
- **Node execution saves.** [#46409](https://github.com/langgenius/dify/issues/46409) reports that each update loads the full row and runs ORM in-memory sync, about 9% of CPU on a 20-node run. [PR #46410](https://github.com/langgenius/dify/pull/46410) saves updates without loading the stored row.
- **Knowledge retrieval.** [#46412](https://github.com/langgenius/dify/issues/46412) reports two authorization queries per retrieved segment. [PR #46413](https://github.com/langgenius/dify/pull/46413) reads owner chains and attachments once per retrieval.
- **Workflow polling.** [#46280](https://github.com/langgenius/dify/issues/46280) reports that every in-flight run polls on a timer. Ten waiting runs cost about 0.1 of a worker core and 485 Redis commands/s. No fix is listed.
- **Economy keyword index.** [#46326](https://github.com/langgenius/dify/issues/46326) reports the keyword index stored as one JSON value, parsed on every search and rewritten on every write. Throughput is 1.6 requests/s at 100k chunks.
- **Default concurrency caps.** [#46282](https://github.com/langgenius/dify/issues/46282) reports defaults of 10 in-flight streaming requests and 4 concurrent workflow runs, regardless of hardware.

## 5. Stability & Regressions
Ranked by severity:
1. **Security: MetaDefender result code 4.** [#46336](https://github.com/langgenius/dify/issues/46336) reports "Cleaned / Deleted" treated as a transient failure and retried, so a confirmed-threat upload could be admitted. No fix PR is listed.
2. **DB pool exhaustion.** [#46373](https://github.com/langgenius/dify/issues/46373) (knowledge retrieval API) and [#46354](https://github.com/langgenius/dify/issues/46354) (per-dataset retrieval) report that at 100 concurrent requests the pool is exhausted and requests fail or answer without knowledge. [#46370](https://github.com/langgenius/dify/issues/46370) is the umbrella refactor to name the holders and stop new ones. No fix PRs are listed.
3. **Stuck workflow.** [#46315](https://github.com/langgenius/dify/issues/46315) reports that a Human Input node timeout can leave the workflow paused if resume publication fails.
4. **Race conditions and limit bypasses**
   - [#46309](https://github.com/langgenius/dify/issues/46309): tenant-isolated queue dispatches concurrent first tasks beyond its limit.
   - [#46318](https://github.com/langgenius/dify/issues/46318): concurrent annotation imports exceed the workspace limit.
   - [#46320](https://github.com/langgenius/dify/issues/46320): knowledge rate limit undercounts same-millisecond requests.
   - [#46300](https://github.com/langgenius/dify/issues/46300): concurrent first Agent list requests can fail while creating Build conversations.
5. **State and cache issues.** [#46293](https://github.com/langgenius/dify/issues/46293): scanner verdict cache survives provider updates. [#46313](https://github.com/langgenius/dify/issues/46313): deleting a KnowledgeFS space leaves its scanning policy behind.
6. **Input validation and tool output**
   - [#46347](https://github.com/langgenius/dify/issues/46347): Agent v2 accepts NaN and Infinity as successful number outputs.
   - [#46343](https://github.com/langgenius/dify/issues/46343): workflow generation crashes on numeric planner start input names.
   - [#46303](https://github.com/langgenius/dify/issues/46303): MCP tool returns a Python repr instead of JSON for arrays of non-object items.
   - [#46378](https://github.com/langgenius/dify/issues/46378): web reader rejects mixed-case Content-Type such as `TEXT/HTML`.
7. **UI.** [#46384](https://github.com/langgenius/dify/issues/46384): keyboard focus is lost on Agent credential selection. [#46302](https://github.com/langgenius/dify/issues/46302): workflow logs stay on an empty page after a filter or page-size change.

Maintenance:
- [#46345](https://github.com/langgenius/dify/issues/46345): TokenTextSplitter tests never run because of `skipif(True)`.
- [#45070](https://github.com/langgenius/dify/issues/45070): the request to run tests and type checks on the LTS branch is closed.
- [#30269](https://github.com/langgenius/dify/issues/30269) and [#31096](https://github.com/langgenius/dify/issues/31096): long-running backend modernization and nullable-field cleanup threads.
- [#46138](https://github.com/langgenius/dify/issues/46138): web test cleanup tracker.

## 6. What This Means for Application Developers
- **Concurrency limits.** At high concurrency, expect DB pool exhaustion on knowledge retrieval until the pool-holder fixes land. Cap concurrent retrieval calls and size the pool deliberately.
- **Capacity.** Review the default concurrency settings ([#46282](https://github.com/langgenius/dify/issues/46282)) before sizing a deployment. They do not scale with hardware.
- **Long chats.** Streaming cost grows with conversation length until [PR #46398](https://github.com/langgenius/dify/pull/46398) merges, so long conversations are the first place to watch.
- **Quotas.** Do not rely on per-tenant queue limits, annotation limits or knowledge rate limits as strict guarantees under concurrent load.
- **Uploads.** If you use MetaDefender scanning, do not rely on it to reject confirmed threats until [#46336](https://github.com/langgenius/dify/issues/46336) is resolved.
- **Tools and agents.** Validate number outputs from Agent v2 for NaN and Infinity. Normalize Content-Type to lowercase upstream for the web reader. Parse MCP array results defensively.
- **Human Input workflows.** Add external monitoring for runs stuck in a paused state ([#46315](https://github.com/langgenius/dify/issues/46315)).
- **Context.** The 133 PRs updated in the last 24h are mostly strict-pyrefly test migrations (MindOfqc) and Agent refactors ([#46369](https://github.com/langgenius/dify/pull/46369), [#46395](https://github.com/langgenius/dify/pull/46395)). Neither is user-facing.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-14

## 1. Today's Highlights
LiteLLM shipped three releases in 24h: a dev build (v1.111.0-dev.2) plus patch releases on two stable lines (v1.108.8 LTS and v1.106.10). Activity centers on MCP gateway latency, Anthropic/Claude Code compatibility (thinking blocks, tool-use IDs), and many Vertex/Bedrock translation fixes. 500 PRs were touched and 62 issues updated, with heavy stale-issue cleanup.

## 2. Releases & Breaking Changes
- **v1.111.0-dev.2**: dev pre-release. The notes in the data are truncated to the cosign verification boilerplate, so I can't confirm what changed.
- **v1.108.8 (LTS)**: the `lts` image tag (`ghcr.io/berriai/litellm:lts`) now points here. The truncated notes list no changes. [PR #50458](https://github.com/BerriAI/litellm/pull/50458) backports A2A URL-agent spend fixes to `lts/1.108.x`. Agents added by URL now log spend under the admin-given name, and their replies count tokens. It is still open, so it may not be in 1.108.8.
- **v1.106.10**: patch release on the older line. Notes are also truncated.
- All images are signed with cosign. The release notes use the key from commit `e82a3c6`.
- Operator request: [#41743](https://github.com/BerriAI/litellm/issues/41743) asks for per-release DB schema change notes and a rolling-upgrade procedure. Release pages currently say nothing about the schema.

## 3. New Model & Hardware Support
- [PR #50881](https://github.com/BerriAI/litellm/pull/50881): MiniMax-H3-Image generation and edit support (open).
- [PR #50768](https://github.com/BerriAI/litellm/pull/50768): Meta Muse models on Vertex AI (Wonder 1.0, Ember 1.0, Spark 1.3) with native Responses routing (open).
- [PR #50642](https://github.com/BerriAI/litellm/pull/50642): Vercel AI Gateway as a Decisions provider. This fixes 400s and a zero-cost reporting workaround (open).
- [PR #51427](https://github.com/BerriAI/litellm/pull/51427): GitHub App authentication for the Copilot provider, with PEM upload in the dashboard and automatic token refresh (open).
- Cost-map and catalog requests:
  - [#50934](https://github.com/BerriAI/litellm/issues/50934): Soniox `stt-async-v6` / `stt-rt-v6`. The v5 models are removed Dec 15, 2026. The issue is closed.
  - [#51723](https://github.com/BerriAI/litellm/issues/51723): a model map entry for a shared input/output context window. Closed.
  - [#28026](https://github.com/BerriAI/litellm/issues/28026): Ollama text-to-image via `image_generation`. Still open.
- [PR #51827](https://github.com/BerriAI/litellm/pull/51827): stops `/v1/models` from listing 22 retired Together AI ids. Open.
- [PR #51816](https://github.com/BerriAI/litellm/pull/51816): moves e2e tests off OpenAI audio/realtime model ids that shut down between Jan 6 and Feb 26, 2027. Open. Deployments pinned to those ids will need to migrate.

## 4. Performance & Optimization
- [PR #51837](https://github.com/BerriAI/litellm/pull/51837): batches customer-hierarchy spend checks into existing Redis round trips. No numbers given.
- [PR #46938](https://github.com/BerriAI/litellm/pull/46938): makes the shared Redis priority queue atomic across replicas, with capped-jitter retries and a local fallback.
- [PR #51836](https://github.com/BerriAI/litellm/pull/51836): a prompt manager's system message was sent twice per async SDK call, and three times per attempt with fallbacks. This fix removes the extra token cost.
- Latency issues reported, with no fix PR visible in today's data:
  - [#50065](https://github.com/BerriAI/litellm/issues/50065): MCP `tools/list` blocks 18–50 s in v1.108.0.
  - [#38689](https://github.com/BerriAI/litellm/issues/38689): intermittent ~16.7 s TTFB on streaming `/v1/messages` to Bedrock, versus ~2 s normally.
  - [#37041](https://github.com/BerriAI/litellm/issues/37041): the Ollama runtime-info lookup ignores `api_base` and falls back to localhost, adding ~8 s of connect timeouts per completion.

## 5. Stability & Regressions
Ranked by severity:
1. **MCP gateway slowdown (regression, v1.108.0)**: [#50065](https://github.com/BerriAI/litellm/issues/50065). `tools/list` takes 18–50 s for clients that send a pre-2026 protocol `notifications/initialized`, such as the Python `mcp` SDK and Open WebUI. It is open and has 10 comments. No fix PR was seen.
2. **Silent model failure**: [#34890](https://github.com/BerriAI/litellm/issues/34890). `silent_model` makes Responses and Messages primary requests return HTTP 500. Open.
3. **Tool-use breakage on pass-through**: [#32214](https://github.com/BerriAI/litellm/issues/32214). `sanitize_tool_use_ids_in_anthropic_messages` breaks multi-turn tool use on vLLM/Kimi (a v1.91.0 regression). Open.
4. **Unsigned thinking blocks**: [PR #51793](https://github.com/BerriAI/litellm/pull/51793) (open) fixes Claude rejecting Gemini's unsigned thinking blocks when Claude Code is load balanced across both. Without it, every Claude turn after a Gemini one costs a retry.
5. **Budget reset data loss**: [#50898](https://github.com/BerriAI/litellm/issues/50898). A retried reset erases carried spend for rollover-capped end users. Closed.
6. **Data loss on DB blip**: [#43002](https://github.com/BerriAI/litellm/issues/43002). Tool-usage flush and auto-router drain permanently drop data on a transient DB connection error. Closed.
7. **Request body parsing**: [#32114](https://github.com/BerriAI/litellm/issues/32114). `_read_request_body` silently returns `{}` on parse failure, producing `model=None` errors on large embedding batches. Closed.
8. **Streaming and routing correctness**:
   - [#50156](https://github.com/BerriAI/litellm/issues/50156): OpenRouter streaming emits an empty post-finish choice. Closed.
   - [#51638](https://github.com/BerriAI/litellm/issues/51638): the Complexity Router drops generation settings. Closed.
   - [#51534](https://github.com/BerriAI/litellm/issues/51534): an unprefixed partial wildcard is missing from `/v1/models`. Open.
   - [#50248](https://github.com/BerriAI/litellm/issues/50248): `COHERE_API_BASE` is ignored for embeddings. Closed.
   - [#51547](https://github.com/BerriAI/litellm/issues/51547): no way to force `/chat/completions` for OpenAI-like servers. Closed.
   - [#31888](https://github.com/BerriAI/litellm/issues/31888): A/B traffic mirroring doesn't work. Open.
   - [#37028](https://github.com/BerriAI/litellm/issues/37028): the Gemini native custom `api_base` sends `system_instruction` instead of `systemInstruction`. Open.
9. **Security and auth (open)**:
   - [#36997](https://github.com/BerriAI/litellm/issues/36997): the Admin UI session cookie is a non-HttpOnly JWT carrying the proxy key.
   - [#36280](https://github.com/BerriAI/litellm/issues/36280): `include_subpath` pass-through routes return 401 for virtual keys. Closed.
   - [#38815](https://github.com/BerriAI/litellm/issues/38815): explicit free cache reads are billed at the full input rate (open).
10. **Fix PRs in flight**:
   - [#51753](https://github.com/BerriAI/litellm/pull/51753) (closed): baggage tags and budget checks on `/queue/chat/completions`.
   - [#51776](https://github.com/BerriAI/litellm/pull/51776): Bedrock guarded_text in system and assistant messages.
   - [#51835](https://github.com/BerriAI/litellm/pull/51835): Vertex union-root tool schemas.
   - [#51790](https://github.com/BerriAI/litellm/pull/51790): Vertex batch `json_schema` rows break plain rows. Broken since v1.81.3.rc.
   - [#51014](https://github.com/BerriAI/litellm/pull/51014): logging for requests blocked at `/apply_guardrail`.
   - [#51819](https://github.com/BerriAI/litellm/pull/51819) (closed): Rust gateway chat responses lacked `id`, `object` and usage.

## 6. What This Means for Application Developers
- **MCP users**: if you're on v1.108.x with Open WebUI or the Python `mcp` SDK, expect slow `tools/list`. Watch [#50065](https://github.com/BerriAI/litellm/issues/50065) before upgrading from 1.106.
- **Claude Code behind a multi-provider router**: Gemini-then-Claude turns can fail on unsigned thinking blocks until [#51793](https://github.com/BerriAI/litellm/pull/51793) lands. Pin one provider per session or avoid thinking mode.
- **Gemini/Vertex tools**: union-root tool schemas and mixed batch rows are currently fragile. Check [#51835](https://github.com/BerriAI/litellm/pull/51835) and [#51790](https://github.com/BerriAI/litellm/pull/51790).
- **Guardrails on Bedrock**: guarded text in system or assistant turns was silently dropped, so it was never checked. Audit existing setups ([#51776](https://github.com/BerriAI/litellm/pull/51776)).
- **Production operators**: use the LTS tag for stability, and plan DB migrations carefully since schema changes aren't documented ([#41743](https://github.com/BerriAI/litellm/issues/41743)). Migrate off OpenAI audio and realtime ids that retire in early 2027.
- **Cost accounting**: verify spend after budget-reset retries and `cache_read_input_token_cost: 0` setups.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
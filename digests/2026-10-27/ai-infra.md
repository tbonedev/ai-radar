# AI Infrastructure Digest 2026-10-27

> Generated: 2026-10-27 12:56 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-10-27

**Scope:** Only two digests were supplied, Dify (application/agent platform) and LiteLLM (LLM gateway). No inference engine (vLLM, SGLang), local runtime (llama.cpp, Ollama) or fine-tuning (Unsloth) data was provided. Sections 3–5 are limited accordingly, and I haven't inferred anything about the missing projects.

## 1. Ecosystem Overview

Neither project shipped a release in the last 24h, so today's signal comes from the issue and PR backlog, not launches. Both are mostly working on correctness (authorization, budgets, data integrity, streaming translation) instead of new features. The most notable cross-layer finding is Dify [#44826](https://github.com/langgenius/dify/issues/44826): agent context compaction may cut prefix-cache hit rates from about 99% to about 10% on self-hosted engines. At the gateway layer, provider and cost-map breadth is still growing quickly, with five or more provider PRs open in LiteLLM. Security hygiene shows up in both: a CVSS 9.1 `uv` bump in Dify and a root-CA backport request in LiteLLM.

## 2. Activity Comparison

Counts are the distinct items cited in each digest, not repository totals.

| Project | Issues cited | PRs cited | Release status | Main themes |
|---|---|---|---|---|
| Dify | ~29 (about 7 closed) | ~16 (6 are strict-typing refactors) | None; 1.18.0 is the line under test, with a `lts/1.17.x` backport open | RBAC and data integrity, SDK bugs, agent runtime |
| LiteLLM | ~16 (about 8 closed) | ~18 | None; a 1.106.3 backport is requested | Providers and cost maps, budgets, streaming translation |

- Dify's issues are mostly new bug reports against 1.18.0 and 1.17.x. Its PR list includes six low-risk typing PRs.
- LiteLLM's issue list leans toward older items being closed (for example #22637, #25402, #29286, #38357, #38358). Its PRs are mostly feature and provider work.

## 3. Model Support Race

The data covers gateway-level support only. No engine or architecture support landed in either digest.

- **LiteLLM** is the only project with model-support activity, and all of it is unmerged:
  - BigModel GLM-5.3 / Flash / FlashX ([#48563](https://github.com/BerriAI/litellm/pull/48563))
  - Azure GPT-6.1 terra pricing ([#48572](https://github.com/BerriAI/litellm/pull/48572)). Without it, terra resolved no price and was billed at $0.
  - IteraCompute ([#46837](https://github.com/BerriAI/litellm/pull/46837))
  - Decision Models ([#46901](https://github.com/BerriAI/litellm/pull/46901))
  - watsonx pass-through ([#48573](https://github.com/BerriAI/litellm/pull/48573))
  - ChatGPT-subscription models on the Responses API ([#48566](https://github.com/BerriAI/litellm/pull/48566))
- **Open gaps:**
  - Scaleway embeddings are not routed ([#34503](https://github.com/BerriAI/litellm/issues/34503)).
  - Claude Opus 4.7 still lists `temperature` as supported ([#26444](https://github.com/BerriAI/litellm/issues/26444)).
- **Dify:** Nothing landed. The only hardware-adjacent item is a host-compatibility gap: the Local Agent sandbox uses Landlock V1 and fails with `EXDEV` on kernel 6.6 ([#44878](https://github.com/langgenius/dify/issues/44878)).

**Who is ahead:** LiteLLM is the only one showing activity here, but nothing has shipped yet. Today's evidence doesn't support ranking engines.

## 4. Performance Frontier

There was no KV-cache, batching, quantization, distributed-serving or kernel work in today's data. Performance work is at the integration layer:

- **Prefix caching (cross-layer):** Dify [#44826](https://github.com/langgenius/dify/issues/44826) (RFC, 8 comments) reports that compaction rewrites the prompt prefix. The hit rate falls from about 99% to about 10%. No fix PR exists, and the figures come from the report, not a benchmark.
- **vLLM integration:** LiteLLM [#48564](https://github.com/BerriAI/litellm/pull/48564) preserves stop reason and token IDs and emits cumulative usage during streams. [#22984](https://github.com/BerriAI/litellm/issues/22984) reports that vLLM `cached_tokens` are ignored in cost calculation, so cache savings aren't reflected in billing.
- **Router overhead:** [#33879](https://github.com/BerriAI/litellm/pull/33879) skips RPM cache reads when no `rpm` is configured.
- **Platform overhead:**
  - Dify has N+1 queries ([#38404](https://github.com/langgenius/dify/issues/38404)).
  - It has a gevent/asyncio isolation change ([#44876](https://github.com/langgenius/dify/issues/44876), closed).
  - It has an SSR keep-alive mismatch: Gunicorn 2s against Node 4s ([#44834](https://github.com/langgenius/dify/issues/44834), closed).

## 5. Layer Positioning

| Project | Layer | Role in the stack | Today's pressure points |
|---|---|---|---|
| Dify | Application / agent platform | Workflows, RAG, agents, multi-tenant app delivery | Authorization, vector-store consistency, scheduling, SDKs |
| LiteLLM | Gateway / proxy | Provider normalization, budgets, guardrails, MCP, cost tracking | Spend accounting, protocol translation, provider breadth |

Neither project is a serving engine, local runtime or training framework. Both sit upstream of engines, which is why their engine-related issues are about interface fidelity (cache behavior, token IDs, usage reporting) and not throughput.

## 6. Trend Signals

1. **Agent behavior is becoming an infrastructure concern.** Compaction, prompt-prefix stability and cache economics now interact across the app, gateway and engine layers. Today's evidence is a single report, so treat it as a hypothesis to test.
2. **Budget and spend accuracy is a recurring gateway risk.** LiteLLM [#27735](https://github.com/BerriAI/litellm/issues/27735) (12 comments) reports rejections while `/key/info` shows spend under budget. [#43444](https://github.com/BerriAI/litellm/issues/43444) reports cost-map wipes on reload, and the Azure terra case shows missing price rows billing at $0.
3. **Protocol translation is the main bug source in gateways.** The Anthropic, Responses, Gemini and Bedrock adapters account for most of LiteLLM's streaming fixes. LiteLLM [#46188](https://github.com/BerriAI/litellm/pull/46188) moves malformed tool choices to a 400, which is stricter.
4. **Supply-chain and trust hygiene is active.** Dify [#44886](https://github.com/langgenius/dify/pull/44886) addresses a CVSS 9.1 advisory, and LiteLLM [#47904](https://github.com/BerriAI/litellm/issues/47904) asks for the eMudhra root-CA removal to be backported.
5. **Multi-tenant authorization gaps persist.** Dify [#41316](https://github.com/langgenius/dify/issues/41316) reports the Dataset Service API ignoring per-user permissions. [#40457](https://github.com/langgenius/dify/issues/40457) reports Weaviate vectors surviving document deletion.

**What application and agent developers should watch:**
- Measure prefix-cache hit rate before and after enabling context compaction.
- Add retry handling for `BudgetExceededError`, and don't predict rejections from `/key/info`.
- On Dify 1.17.x, don't rely on per-user knowledge-base permissions through the Service API. Verify Notion import counts and Weaviate deletions.
- On LiteLLM 1.106.x, track the root-CA backport. Drop `temperature` explicitly for Opus 4.7.
- Check MCP SSE latency on LiteLLM v1.105.x or later, and enforce client-side time-to-first-byte timeouts.
- Check Dify schedule-trigger cadence ([#41214](https://github.com/langgenius/dify/issues/41214)) and the PHP/Node SDK pagination, empty-input and long-text bugs.

**Recommended next step:** Add the engine, local-runtime and fine-tuning digests so the Model Support Race and Performance Frontier sections can rank projects.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-10-27

## 1. Today's Highlights
No release shipped in the last 24h. Activity was dominated by 1.18.0 bug reports (a dozen filed, several already with fix PRs) and a large batch of strict-typing refactors. The most notable design discussion is [#44826](https://github.com/langgenius/dify/issues/44826), which suggests agent context compaction may be destroying inference-engine prefix-cache hit rates.

## 2. Releases & Breaking Changes
No releases. Two items matter for upgrade planning:
- Most new bug reports target **1.18.0**, so it is the current line to watch.
- [PR #44891](https://github.com/langgenius/dify/pull/44891) backports a dataset-visibility fix (#44795) to `lts/1.17.x`. With RBAC enabled, maintainers will always see their own datasets, and the `include_own_datasets` parameter is removed.

## 3. New Model & Hardware Support
Nothing landed today.
- [Issue #44878](https://github.com/langgenius/dify/issues/44878): the Local Agent sandbox uses Landlock V1, which causes `EXDEV` errors on kernel 6.6. This is a host-compatibility gap, not new support.
- [PR #44886](https://github.com/langgenius/dify/pull/44886): bumps `uv` in the agent-runtime Dockerfile from 0.8.9 to 0.13.4 to address GHSA-hq85-5cpj-mr62 (CVSS 9.1).

## 4. Performance & Optimization
- [Issue #44826](https://github.com/langgenius/dify/issues/44826) (RFC, 8 comments): reports that agent context compaction rewrites the prompt prefix, dropping the prefix-cache hit rate to about **10%** from about **99%** when the prefix is stable. If this holds, it directly raises token cost and latency on vLLM/SGLang-style backends. No fix PR yet.
- [Issue #38404](https://github.com/langgenius/dify/issues/38404): N+1 queries in `RecommendedAppService.can_trial` for unauthenticated sessions.
- [Issue #43603](https://github.com/langgenius/dify/issues/43603): proposes an optional `monitoring` compose profile for Redis/Valkey, covering per-DB keyspace and Celery queue depth.
- [Issue #44876](https://github.com/langgenius/dify/issues/44876) (closed): isolates gevent dependencies so asyncio-based services can be supported.
- [Issue #44834](https://github.com/langgenius/dify/issues/44834) (closed): intermittent `ECONNRESET` (HTTP 500) on web SSR calls to the API. Gunicorn keep-alive is 2s, but Node fetch reuses idle sockets for 4s.

## 5. Stability & Regressions
Ranked by severity:

1. **Authorization:** [#41316](https://github.com/langgenius/dify/issues/41316) reports that the Dataset Service API ignores per-user knowledge-base permissions and authorizes every token as workspace Owner. The report is on 1.17.0, with inconsistent behavior between list and direct GET. No fix PR is linked. [#44857](https://github.com/langgenius/dify/pull/44857) fixes a related access-mode gap: [#44856](https://github.com/langgenius/dify/issues/44856) reports that converting an app to a workflow doesn't inherit WebApp access mode.
2. **Data integrity:**
   - [#40457](https://github.com/langgenius/dify/issues/40457): Weaviate document deletion never removes vectors, because `delete_by_ids` passes segment IDs as object UUIDs. It is present in 1.13.3 and 1.16.1.
   - [#44892](https://github.com/langgenius/dify/issues/44892): Notion database extraction silently returns empty or partial results on HTTP errors. Fix: [PR #44893](https://github.com/langgenius/dify/pull/44893).
   - [#44658](https://github.com/langgenius/dify/issues/44658): legacy `.xls` imports rewrite text identifiers through numeric inference.
   - [#44682](https://github.com/langgenius/dify/issues/44682): repeated PDF previews create duplicate persisted images and change image URLs.
3. **Retrieval and API failures:**
   - [#44894](https://github.com/langgenius/dify/issues/44894): Service API retrieve fails with "Default model not found for text-embedding" on economy knowledge bases. Fix: [PR #44895](https://github.com/langgenius/dify/pull/44895).
   - [#44869](https://github.com/langgenius/dify/issues/44869): `WebMessageListItem` validation fails on legacy messages where `retriever_resources` is None.
   - [#44850](https://github.com/langgenius/dify/issues/44850): a custom tool schema without `servers` raises `KeyError`. Fix: [PR #44897](https://github.com/langgenius/dify/pull/44897).
   - [PR #44333](https://github.com/langgenius/dify/pull/44333): `download_with_size_limit` hands back 4xx/5xx error pages as plugin package bytes, which hides the real cause of failed installs.
4. **Workflow and trigger behavior:**
   - [#41214](https://github.com/langgenius/dify/issues/41214): a schedule trigger set to every 10 minutes silently becomes every 2 minutes after 3–5 days.
   - [#40729](https://github.com/langgenius/dify/issues/40729): the new Agent node cannot take a variable over 2000 characters from the previous node.
   - [#44800](https://github.com/langgenius/dify/issues/44800): `0` and `false` inputs are replaced by placeholders in opening statements and suggested questions.
   - [PR #43241](https://github.com/langgenius/dify/pull/43241): the Workflow Test Run rejects numeric `0` for a required Number input. Fix is pending.
   - [#44705](https://github.com/langgenius/dify/issues/44705): webhook Number parameters lose precision above 2^53 and accept nan/inf.
5. **Other bugs:**
   - [#44737](https://github.com/langgenius/dify/issues/44737): skill list search treats `%` and `_` as LIKE wildcards.
   - [#44883](https://github.com/langgenius/dify/issues/44883): invalid `traceparent` headers are still used as trace IDs. Fix: [PR #44884](https://github.com/langgenius/dify/pull/44884).
   - [#38795](https://github.com/langgenius/dify/issues/38795): `agent-chat` traces omit `app_id`, which breaks Langfuse/OTLP attribution.
   - [#44846](https://github.com/langgenius/dify/issues/44846): naive clock values feed `time.time()` comparisons.
   - [#44854](https://github.com/langgenius/dify/issues/44854): UI inconsistencies in the New RAG Add source forms.
6. **SDK issues:**
   - [#44657](https://github.com/langgenius/dify/issues/44657): the PHP SDK sends `first_id` instead of `last_id` for conversation pagination.
   - [#44674](https://github.com/langgenius/dify/issues/44674): the PHP SDK sends empty input maps as JSON arrays, which the API rejects.
   - [#44678](https://github.com/langgenius/dify/issues/44678): the Node.js SDK rejects document text over 10,000 characters client-side.

[#44851](https://github.com/langgenius/dify/issues/44851) (API Reference link missing from the New RAG dialog) was closed, along with its fix PR [#44852](https://github.com/langgenius/dify/pull/44852). [#44597](https://github.com/langgenius/dify/issues/44597) (closed): exported app packages omit workflows called as workflow tools.

## 6. What This Means for Application Developers
- **Agent cost and latency:** If you run Dify agents against a self-hosted engine with prefix caching, watch your cache hit rate. Compaction may defeat it ([#44826](https://github.com/langgenius/dify/issues/44826)).
- **Security and multi-tenancy:** Don't rely on per-user knowledge-base permissions through the Dataset Service API on 1.17.x. Use scoped workspaces or a gateway until [#41316](https://github.com/langgenius/dify/issues/41316) is resolved.
- **RAG operations:**
  - After deleting documents in Weaviate, orphaned vectors remain and can still surface in retrieval.
  - Notion imports can fail silently, so verify document counts.
  - Economy knowledge-base retrieval through the Service API currently fails.
- **Scheduling:** Verify schedule-trigger cadence periodically until [#41214](https://github.com/langgenius/dify/issues/41214) is diagnosed.
- **SDK users:** The PHP and Node.js SDKs have request-shaping bugs. Check pagination, empty inputs and long text before relying on them.
- **Maintenance signal:** Many PRs from `shi-felix` (#44882, #44885, #44887, #44888, #44889, #44890) enable strict pyrefly typing in test files. They are low-risk and don't change runtime behavior.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-10-27

## 1. Today's Highlights

No releases shipped in the last 24h. Activity was driven by PRs for new providers and cost-map entries (BigModel/GLM-5.3, Azure GPT-6.1 terra, IteraCompute, Decision Models, watsonx pass-through), plus a cluster of proxy correctness fixes around budgets, guardrails and streaming. Notable open concerns are stale-spend budget rejections ([#27735](https://github.com/BerriAI/litellm/issues/27735)) and a request to backport the eMudhra root-CA fix to the 1.106.x line ([#47904](https://github.com/BerriAI/litellm/issues/47904)).

## 2. Releases & Breaking Changes

No new releases.

- **Security backport request:** [#47904](https://github.com/BerriAI/litellm/issues/47904) asks for the fix from #47670 (removing the emSign ECC Root CA - G3 trust, tied to compromised eMudhra intermediates) to be backported to `stable/1.106.x` and shipped as v1.106.3. Today, only `main` has it. Teams pinned to 1.106.x images still trust that root.
- **Intentional behavior change (open PR):** [#46188](https://github.com/BerriAI/litellm/pull/46188) makes malformed Anthropic tool choices return a 400. Previously they became 500s or were silently treated as `auto`.
- **Possible regression from v1.105.0:** [#46659](https://github.com/BerriAI/litellm/issues/46659) reports that `GZipBufferedResponseMiddleware` withholds SSE headers until the first body chunk, so MCP `tools/call` streams only start at the 15s keepalive ping. The issue is now closed.

## 3. New Model & Hardware Support

All of these are open PRs and not yet merged:

- **BigModel (GLM-5.3, GLM-5.3-Flash, GLM-5.3-FlashX):** a new provider covering Chat Completions, Responses and Anthropic Messages, with Admin UI support and cost tracking. [PR #48563](https://github.com/BerriAI/litellm/pull/48563)
- **Azure GPT-6.1 terra:** adds global, us, eu and apac pricing rows. Without them, terra on Azure resolved no price and was billed at $0. [PR #48572](https://github.com/BerriAI/litellm/pull/48572)
- **IteraCompute:** an OpenAI-compatible provider with namespaced model IDs. [PR #46837](https://github.com/BerriAI/litellm/pull/46837)
- **Decision Models:** a decisions provider that follows the pattern of the Nace provider PR (#46523). [PR #46901](https://github.com/BerriAI/litellm/pull/46901)
- **watsonx pass-through:** `/watsonx/{endpoint}` now resolves credentials from deployments flagged `use_in_pass_through: true`. It picks among multiple deployments using `model_id` and `project_id`/`space_id`. [PR #48573](https://github.com/BerriAI/litellm/pull/48573)
- **ChatGPT-subscription models:** system/developer input items move into `instructions`, fixing `400 System messages are not allowed` on the Responses API. [PR #48566](https://github.com/BerriAI/litellm/pull/48566)

Related gaps:
- [#34503](https://github.com/BerriAI/litellm/issues/34503): Scaleway is not routed in `embedding()` and raises `LiteLLMUnknownProvider`.
- [#26444](https://github.com/BerriAI/litellm/issues/26444): `get_supported_openai_params` still lists `temperature` for Claude Opus 4.7, which Anthropic rejects.

## 4. Performance & Optimization

No benchmark numbers were reported. The following work is in progress:

- **Router:** [PR #33879](https://github.com/BerriAI/litellm/pull/33879) skips RPM cache reads when no deployment configures `rpm`, which cuts per-request cache I/O.
- **vLLM:** [PR #48564](https://github.com/BerriAI/litellm/pull/48564) preserves stop reason and token IDs in chat responses, streams and cached replay. It also emits cumulative usage throughout the stream, including the finish chunk. Related: [#22984](https://github.com/BerriAI/litellm/issues/22984) reports that vLLM `cached_tokens` are not handled in cost calculation.
- **Cost accuracy:** [PR #45990](https://github.com/BerriAI/litellm/pull/45990) fixes HuggingFace/TEI rerank billing. It respects registered `input_cost_per_query` instead of billing $0.

## 5. Stability & Regressions

Ranked by severity:

1. **Budget enforcement with stale spend.** [#27735](https://github.com/BerriAI/litellm/issues/27735) reports a virtual key rejected with `BudgetExceededError` while `/key/info` shows spend below `max_budget`. This is the most-discussed issue, with 12 comments. Related: [PR #45907](https://github.com/BerriAI/litellm/pull/45907) fixes budget reservations that stuck until TTL when there is no database logger.
2. **Cost-map wipe on reload.** [#43444](https://github.com/BerriAI/litellm/issues/43444): with an empty config `model_list` and `STORE_MODEL_IN_DB=True`, the periodic price reload wipes runtime cost registrations for DB deployments. No fix PR was listed.
3. **Timeouts.** [#38358](https://github.com/BerriAI/litellm/issues/38358) reports that `request_timeout` never fires when the upstream accepts the connection but sends no bytes. It is closed.
4. **Team membership race.** [#25951](https://github.com/BerriAI/litellm/issues/25951): concurrent `/team/member_add` calls lose members because of a read-modify-write pattern. It is closed.
5. **Guardrails.** [PR #48575](https://github.com/BerriAI/litellm/pull/48575) stops duplicate pre_call guardrail runs on `/v1/messages` when `metadata.user_id` is present and the model is not Anthropic.
6. **Streaming and translation:**
   - [PR #48565](https://github.com/BerriAI/litellm/pull/48565): Gemini streamed search calls lose their arguments and signature, causing "Corrupted tool call context" on the next turn.
   - [PR #45478](https://github.com/BerriAI/litellm/pull/45478): assistant `[text, tool_use, text]` ordering is scrambled in the Responses adapter.
   - [#29286](https://github.com/BerriAI/litellm/issues/29286): vLLM streams emit empty `input_json_delta` instead of `text_delta` on `/v1/messages`. It is closed.
   - [#22637](https://github.com/BerriAI/litellm/issues/22637): Bedrock Converse fails with `parallel_tool_calls` on Claude 4.5+. It is closed.
   - [#25402](https://github.com/BerriAI/litellm/issues/25402): `/v1/responses/compact` fails on fallback with "Unknown parameter: metadata". It is closed.
7. **MCP.**
   - [#46664](https://github.com/BerriAI/litellm/issues/46664): BYOK/static-auth `tools/list` rejects the per-request `x-mcp-{alias}-authorization` credential.
   - [PR #48517](https://github.com/BerriAI/litellm/pull/48517): raises aiohttp header limits so GitHub OAuth token exchange works. GitHub sends a ~9KB CSP header, and the default limit is 8190 bytes.
8. **Smaller items:**
   - [PR #47112](https://github.com/BerriAI/litellm/pull/47112): returns 403 instead of 500 for Enterprise-only `get_spend_routes`.
   - [PR #45973](https://github.com/BerriAI/litellm/pull/45973): returns plain-text transcriptions as plain HTTP.
   - [#34364](https://github.com/BerriAI/litellm/issues/34364): SpendLogs partitions are misaligned when the DB timezone is not UTC. [PR #48577](https://github.com/BerriAI/litellm/pull/48577) is a related UTC fix, but only to a test.
   - [#38357](https://github.com/BerriAI/litellm/issues/38357): the Bedrock handler drops provider response headers such as `x-amzn-RequestId`. It is closed.
   - [#22753](https://github.com/BerriAI/litellm/issues/22753): `llm_requests_hanging` alerts ignore digest mode.

## 6. What This Means for Application Developers

- **Budgets:** don't rely on `/key/info` to predict rejections. Add retry or backoff handling for `BudgetExceededError` and watch [#27735](https://github.com/BerriAI/litellm/issues/27735).
- **Pinned 1.106.x deployments:** track [#47904](https://github.com/BerriAI/litellm/issues/47904). If trusting that root CA is a concern, build from `main` or apply a mitigation yourself until a backport ships.
- **Claude Opus 4.7:** explicitly drop `temperature`, because LiteLLM's supported-params check will still allow it ([#26444](https://github.com/BerriAI/litellm/issues/26444)).
- **Anthropic-format clients:** if you send `/v1/messages` with tool choices, validate them client-side. Malformed values may become hard 400s ([#46188](https://github.com/BerriAI/litellm/pull/46188)).
- **DB-stored models with an empty `model_list`:** verify cost tracking after price reloads ([#43444](https://github.com/BerriAI/litellm/issues/43444)).
- **MCP streaming users on v1.105.x or later:** check SSE latency, since the header-buffering issue was reported there ([#46659](https://github.com/BerriAI/litellm/issues/46659)).
- **Custom timeouts for streaming:** the `request_timeout` hang case ([#38358](https://github.com/BerriAI/litellm/issues/38358)) suggests also enforcing client-side time-to-first-byte timeouts.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
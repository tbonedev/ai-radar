# AI Infrastructure Digest 2026-11-21

> Generated: 2026-11-21 15:03 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-11-21

**Scope note:** Only two digests were supplied: Dify (an LLM app platform) and LiteLLM (an LLM gateway). There was no data for inference engines (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning frameworks (Unsloth). Where a section needs those layers, I say so instead of inferring.

## 1. Ecosystem Overview

Today's activity at the gateway and application layers is mostly about correctness, not new capability. Both projects are working through regressions in recent versions: Dify 1.19.0/1.20.0 and LiteLLM v1.110.x. The recurring problem areas are usage and cost accounting, streaming semantics, MCP authentication and discovery, and provider-parameter translation. LiteLLM is also investing in a Rust/axum gateway with Redis-shared cooldown state. Overall, the upper stack looks like it is hardening for production, with a long tail of provider and edge-case bugs.

## 2. Activity Comparison

Counts are the distinct issues and PRs cited in each digest. They are not repository totals, and they include items closed today.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | ~18 (2 are bot spam) | ~11 | No release in 24h. Regressions open on 1.19.0 and 1.20.0. |
| LiteLLM | ~25 (about 11 closed) | ~11 | v1.108.14 (LTS) shipped. `main` is at v1.110.x. |

- **Dify** has a clear fix-PR pairing on its minor bugs (#46875→#46879, #46881→#46882, #46883→#46884). Its three highest-severity regressions have no fix PR.
- **LiteLLM** shows a large backlog-triage pattern. Many old issues, some dating to #18058 and #28636, were closed today.

## 3. Model Support Race

There is no clear leader, because neither project shipped major new model support today.

- **LiteLLM** has more model and provider work:
  - A Kaer OpenAI-compatible provider ([#53329](https://github.com/BerriAI/litellm/pull/53329)).
  - Ollama native image inputs ([#53083](https://github.com/BerriAI/litellm/pull/53083)).
  - Azure GPT-Live realtime ([#47259](https://github.com/BerriAI/litellm/pull/47259)), closed today. Merge status is unconfirmed.
  - Open requests for Gemini Live Avatar ([#43166](https://github.com/BerriAI/litellm/issues/43166)) and vLLM `/v1/realtime` ([#31613](https://github.com/BerriAI/litellm/issues/31613)).
- **Dify** has no model shipments. Its open items are workflow ergonomics: registering custom model credentials without a live validation call ([#46854](https://github.com/langgenius/dify/issues/46854)) and showing which apps use a model ([#45575](https://github.com/langgenius/dify/issues/45575)).
- **Gap:** There is no data on new model architectures such as MoE or multimodal models at the engine level. That is where support normally lands first.

## 4. Performance Frontier

The effort here is on system overhead, not kernels. There were no benchmark numbers in either digest.

- **Distributed state (LiteLLM):** [#53060](https://github.com/BerriAI/litellm/pull/53060) shares router cooldowns, allowed-fails counts and usage through Redis. Previously each gateway pod kept its own state and could keep calling a deployment another pod had already cooled down.
- **Token and budget control:** [#51633](https://github.com/BerriAI/litellm/pull/51633) caps router-classifier output tokens, because Bedrock otherwise reserves the model's full output limit on every call.
- **Timeouts:** [#47822](https://github.com/BerriAI/litellm/issues/47822) reports connect timeouts collapsing to a single value for providers such as mistral.
- **Database and concurrency (Dify):**
  - N+1 queries in the RAG segment list ([#45252](https://github.com/langgenius/dify/issues/45252)).
  - Short-lived DB sessions during slow LLM calls ([#46632](https://github.com/langgenius/dify/pull/46632)).
- **Observability:** Dify has an open request for OpenTelemetry spans on MCP tool calls ([#45559](https://github.com/langgenius/dify/issues/45559)).
- **Not covered:** There was no KV-cache, batching, quantization or kernel work in either digest.

## 5. Layer Positioning

| Project | Layer | Today's evidence |
|---|---|---|
| LiteLLM | LLM gateway and proxy | Provider translation, spend and budget controls, router cooldowns, MCP gateway, and a Rust gateway rewrite. |
| Dify | Application and workflow platform | Knowledge-base RAG, tool and plugin APIs, SDKs, and agent features. It consumes models through providers and does not serve them. |
| Serving engines, local runtimes, fine-tuning | Not covered | No digest data. They appear only as downstream targets, such as vLLM and Ollama in LiteLLM issues. |

The two projects meet at the provider boundary. Both use OpenAI-compatible endpoints, and both have bugs where that compatibility is only partial. Examples are Dify's KB embedding hang ([#46835](https://github.com/langgenius/dify/issues/46835)) and LiteLLM's `hosted_vllm` Responses API dropping `chat_template_kwargs` and `top_k` ([#48362](https://github.com/BerriAI/litellm/issues/48362)).

## 6. Trend Signals

1. **Cost accounting is a recurring failure point.** Unknown custom-model costs were reported as zero in Dify 1.19.0 ([#46594](https://github.com/langgenius/dify/issues/46594)). LiteLLM has cost or usage bugs in TTS, STT and watsonx streaming ([#44200](https://github.com/BerriAI/litellm/issues/44200), [#44538](https://github.com/BerriAI/litellm/issues/44538), [#46059](https://github.com/BerriAI/litellm/issues/46059)). Budget reservation on `/v1/responses` ignored `max_tokens` ([#51445](https://github.com/BerriAI/litellm/issues/51445)).
2. **Streaming completeness cannot be assumed.** A truncated stream was reported as `finish_reason="stop"` ([#46542](https://github.com/BerriAI/litellm/issues/46542)). OpenRouter reasoning-only chunks are dropped ([#48401](https://github.com/BerriAI/litellm/issues/48401)). Dify's polling and SSE paths diverge ([#46868](https://github.com/langgenius/dify/issues/46868)).
3. **MCP and auth are maturing, with bugs.** Examples are the OAuth pass-through 401 ([#53185](https://github.com/BerriAI/litellm/issues/53185)), the discovery omission ([#52849](https://github.com/BerriAI/litellm/issues/52849)), and a Chat UI MCP 403 ([#53079](https://github.com/BerriAI/litellm/issues/53079)). On the Dify side, there are requests for MCP spans and plugin KB invocation.
4. **Security and compliance gaps in logging.** Guardrail-blocked content is stored in plaintext in spend logs ([#50127](https://github.com/BerriAI/litellm/issues/50127)).
5. **Gateways are moving toward shared state.** The Rust gateway with Redis cooldowns points to multi-pod, stateful routing becoming a requirement.

**What developers should do:**
- Pin LiteLLM to the `lts` tag (v1.108.14). Test OAuth/MCP pass-through before moving to v1.110.x.
- Hold Dify at the current version if you use Weaviate with an OpenAI-compatible embedding provider, until [#46835](https://github.com/langgenius/dify/issues/46835) is resolved.
- Do not rely on `finish_reason` or gateway-reported cost alone. Verify completeness and reconcile spend against provider bills.
- Set retries per call or on the Router, not through the global `litellm.num_retries` ([#33272](https://github.com/BerriAI/litellm/issues/33272)).
- Check your PostgreSQL encoding and `libpq` availability before upgrading LiteLLM ([#52247](https://github.com/BerriAI/litellm/issues/52247)).

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest: 2026-11-21

Source: [langgenius/dify](https://github.com/langgenius/dify)

## 1. Today's Highlights

There were no releases in the last 24h. Activity is concentrated on regressions in the 1.19.0 and 1.20.0 lines: a knowledge-base import that hangs at token counting after the 1.20.0 upgrade, and Langfuse cost reporting that is wrong in 1.19.0. Most of today's PRs are small, targeted fixes, and several already have a matching issue. Two issues (#46870, #46871) are promotional spam from a bot account and can be ignored.

## 2. Releases & Breaking Changes

None today. Users upgrading to 1.19.0 or 1.20.0 should read the regressions in section 5 first.

## 3. New Model & Hardware Support

There was no new model or hardware support today. Two model-provider items are open:
- [#46854](https://github.com/langgenius/dify/issues/46854) asks to register custom model credentials without a live validation call. This would help private or air-gapped OpenAI-compatible endpoints that can't answer a probe at setup time.
- [#45575](https://github.com/langgenius/dify/issues/45575) asks the provider settings to show which apps and workflow nodes use a given model. This would make model migrations and deprecations safer.

## 4. Performance & Optimization

No benchmark numbers were posted. Work in progress:
- **N+1 queries in the RAG segment list:** [#45252](https://github.com/langgenius/dify/issues/45252) reports one query per segment to sign content file links. It has no fix PR yet.
- **Short-lived DB sessions for tool model invocation logs:** [PR #46632](https://github.com/langgenius/dify/pull/46632) stops `ModelInvocationUtils.invoke` from holding the global `db.session` across the model call. This should reduce connection and transaction pressure during slow LLM calls. It is waiting for the author.
- **Hybrid search scoring:** [PR #45954](https://github.com/langgenius/dify/pull/45954) keeps full-text scores out of weighted-score vector similarity. This is a relevance correctness fix, not a speed one.
- **Observability:** [#45559](https://github.com/langgenius/dify/issues/45559) requests OpenTelemetry spans for the stages of an MCP tool call, which would help locate latency.

## 5. Stability & Regressions

Ranked by severity:

1. **KB import hangs at token counting after upgrading to 1.20.0** ([#46835](https://github.com/langgenius/dify/issues/46835)). The report is on Weaviate with an `openai_api_compatible` embedding provider, upgrading from a working 1.17.1. The hang is in `get_text_embedding_num_tokens`. It has no fix PR and is the most operationally serious item today.
2. **Problem classifier cannot add a category in 1.19.0** ([#46744](https://github.com/langgenius/dify/issues/46744)). This has the most discussion today (11 comments) and no fix PR linked.
3. **Unknown custom-model costs reported as zero in 1.19.0** ([#46594](https://github.com/langgenius/dify/issues/46594)). This overrides Langfuse's own model pricing, so cost dashboards will under-report. No fix PR linked.
4. **Provider IDs with a trailing newline are accepted** ([#46875](https://github.com/langgenius/dify/issues/46875)). `$` in the `re.match` patterns matches before a trailing newline. The fix is [PR #46879](https://github.com/langgenius/dify/pull/46879).
5. **Evaluation null checks reset to the default operator on reopen** ([#46881](https://github.com/langgenius/dify/issues/46881)). The fix is [PR #46882](https://github.com/langgenius/dify/pull/46882).
6. **Agent Python SDK polling rejects function-tool results that SSE accepts** ([#46868](https://github.com/langgenius/dify/issues/46868)). The polling and SSE paths are inconsistent. No fix PR linked.
7. **Node.js SDK types a 204 conversation deletion as having a body** ([#46883](https://github.com/langgenius/dify/issues/46883)). The fix is [PR #46884](https://github.com/langgenius/dify/pull/46884).

Other open fix PRs:
- Custom tool JSON bodies are sent form-encoded when the content type has parameters such as `charset=utf-8` ([PR #44908](https://github.com/langgenius/dify/pull/44908)).
- Unset header and cookie parameters are not omitted for custom tools ([PR #46011](https://github.com/langgenius/dify/pull/46011)).
- The upload 413 error does not report the effective size limit ([PR #44628](https://github.com/langgenius/dify/pull/44628)).
- Required number inputs reject `0` ([PR #43241](https://github.com/langgenius/dify/pull/43241)).

## 6. What This Means for Application Developers

- **Hold off on upgrading to 1.20.0 if you ingest into Weaviate with an OpenAI-compatible embedding provider.** Test KB import in staging first ([#46835](https://github.com/langgenius/dify/issues/46835)).
- **If you use Langfuse, don't trust cost figures for custom models on 1.19.0.** Zero costs are being sent ([#46594](https://github.com/langgenius/dify/issues/46594)).
- **Custom tool authors:** check your OpenAPI content types and optional parameters. Until PR #44908 and PR #46011 land, parameterized `application/json` types and unset header or cookie parameters can behave unexpectedly.
- **SDK users:** the Node.js `deleteConversation` return type will change to `DifyResponse<null>` ([PR #46884](https://github.com/langgenius/dify/pull/46884)). The Agent Python SDK's polling mode can diverge from SSE for function-tool results ([#46868](https://github.com/langgenius/dify/issues/46868)).
- **Upcoming features worth tracking:**
  - CSV export of conversational app logs ([PR #46799](https://github.com/langgenius/dify/pull/46799)).
  - OpenAPI dataset and document endpoints for knowledge base CRUD ([PR #46876](https://github.com/langgenius/dify/pull/46876)).
  - Plugin backwards invocation for KB operations ([#46637](https://github.com/langgenius/dify/issues/46637)).
- **Agent V2 feature requests:**
  - Summary mode for thinking in published chat apps ([#45398](https://github.com/langgenius/dify/issues/45398)).
  - A separate model for Agent Build chat ([#45573](https://github.com/langgenius/dify/issues/45573)).
  - Annotation reply support ([#45577](https://github.com/langgenius/dify/issues/45577)).
  - Opt-in output moderation of streamed text ([#45560](https://github.com/langgenius/dify/issues/45560)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-11-21

## 1. Today's Highlights

LiteLLM shipped **v1.108.14 (LTS)** while `main` is already at v1.110.x, as one report cites. Most of today's activity is the long tail of provider-translation bugs: streaming finish reasons, usage and cost accounting, and MCP auth. In parallel, the team is building a Rust/axum "gateway" (shared Redis cooldowns and auth-core PRs).

## 2. Releases & Breaking Changes

- **v1.108.14 (LTS)**: the `lts` image tag now points here (`ghcr.io/berriai/litellm:lts`). The release is cosign-signed; verify before deploying. The notes in the data are truncated, so I can't list the changes.
- **Possible regression in v1.110.1**: [#53185](https://github.com/BerriAI/litellm/issues/53185) reports that OAuth pass-through GET routes return 401 when `client_id` is only in the query string. This broke browser OAuth for an MCP server. No fix PR is visible yet.
- **MCP discovery change between 1.105.7 and 1.108.11**: [#52849](https://github.com/BerriAI/litellm/issues/52849) reports that `/mcp-rest/tools/list` omits `auth_type: authorization` servers when no upstream credential is supplied. Fix PR: [#53310](https://github.com/BerriAI/litellm/pull/53310).

## 3. New Model & Hardware Support

- [#53329](https://github.com/BerriAI/litellm/pull/53329): adds the **Kaer** OpenAI-compatible provider (`kaer/janus-1-flash`, `kaer/janus-1-pro`) with streaming, usage and tool calls. It is JSON-configured with cost-map entries.
- [#53083](https://github.com/BerriAI/litellm/pull/53083): Ollama native image inputs for decision requests.
- [#47259](https://github.com/BerriAI/litellm/pull/47259): Azure GPT-Live realtime WebSocket support. It was closed today, so check whether it merged.
- [#43166](https://github.com/BerriAI/litellm/issues/43166): feature request for Gemini Live Avatar (`avatar_config`) in realtime.
- [#31613](https://github.com/BerriAI/litellm/issues/31613): self-hosted vLLM `/v1/realtime`. The health check sets `ssl=` on `ws://` connections, which is incompatible.
- [#35094](https://github.com/BerriAI/litellm/pull/35094): Scaleway logo in the dashboard.

## 4. Performance & Optimization

No benchmark numbers in today's data. Related items:

- [#53060](https://github.com/BerriAI/litellm/pull/53060): the gateway shares router cooldowns, allowed-fails counts and usage through Redis. Previously these lived in process memory, so each gateway pod could keep calling a deployment that another pod had already cooled down. It is stacked on #52790.
- [#51633](https://github.com/BerriAI/litellm/pull/51633) (closed): caps the complexity router's LLM classifier output tokens. Without a cap, Bedrock reserves the model's full output limit on every call.
- [#47822](https://github.com/BerriAI/litellm/issues/47822): the `httpx.Timeout` connect timeout is collapsed to a single value for providers other than openai, azure and bedrock (e.g. mistral), because the `supports_httpx_timeout()` allowlist is too narrow.
- [#53347](https://github.com/BerriAI/litellm/pull/53347): Switchyard auto-router savings are counted in benchmark reports against a "capable model" baseline.

## 5. Stability & Regressions

Ranked by severity:

1. **Budget and security**
   - [#51445](https://github.com/BerriAI/litellm/issues/51445) (closed): `/v1/responses` budget reservation ignores `max_tokens`, so concurrent calls can overrun `max_budget`.
   - [#50127](https://github.com/BerriAI/litellm/issues/50127): requests blocked by a `pre_call` guardrail are stored in spend logs with the offending secret or PII in plain text.
   - [#36997](https://github.com/BerriAI/litellm/issues/36997) (closed): the Admin UI session cookie is a non-HttpOnly JWT carrying the proxy key.
   - [#53079](https://github.com/BerriAI/litellm/issues/53079): the Chat UI returns an MCP 403 for a user whose team-bound key succeeds on `/responses`.
2. **Startup crashes**
   - [#52247](https://github.com/BerriAI/litellm/issues/52247): `find_blockers` raises `ValueError` on SQL_ASCII PostgreSQL databases (v1.109.1). Open.
   - [#49680](https://github.com/BerriAI/litellm/issues/49680) (closed): `prisma_migration --skip_server_startup` hits an unguarded `psycopg` import when `libpq` is missing.
3. **Global state and retries**
   - [#33272](https://github.com/BerriAI/litellm/issues/33272): `litellm.num_retries` is permanently set to `None` after any `completion()` exception. Open.
4. **Streaming correctness**
   - [#46542](https://github.com/BerriAI/litellm/issues/46542) (closed) and [#52371](https://github.com/BerriAI/litellm/pull/52371) (closed): a stream cut before a finish reason is reported as `stop`. The Gemini fix is #52371.
   - [#48401](https://github.com/BerriAI/litellm/issues/48401): OpenRouter chunks carrying only `reasoning_details` (Claude signatures, encrypted reasoning) are dropped. Open.
   - [#46059](https://github.com/BerriAI/litellm/issues/46059): watsonx streamed usage is lost, and the proxy reports its own much lower estimate. Open.
   - [#53341](https://github.com/BerriAI/litellm/pull/53341): raises `APIConnectionError` when the stream is `None` on the `/v1/messages` bridge (fixes #53340).
5. **Cost and usage accounting**
   - [#18058](https://github.com/BerriAI/litellm/issues/18058) (closed): ElevenLabs cost calculation.
   - [#44200](https://github.com/BerriAI/litellm/issues/44200) (closed): `audio_speech` ignores deployment-level `input_cost_per_character`, so spend is 0.
   - [#44538](https://github.com/BerriAI/litellm/issues/44538) (closed): transcriptions with `response_format=text` log zero usage.
6. **Param and translation gaps**
   - [#48362](https://github.com/BerriAI/litellm/issues/48362): the `hosted_vllm` Responses API drops `chat_template_kwargs`, `top_k` and other params.
   - [#34914](https://github.com/BerriAI/litellm/issues/34914): `service_tier` is rejected by Vertex AI with a 400.
   - [#37810](https://github.com/BerriAI/litellm/issues/37810): `llm_api` keys get 403 on `/model/info`.
   - [#28636](https://github.com/BerriAI/litellm/issues/28636): ElevenLabs diarization options are not passed.
   - [#28989](https://github.com/BerriAI/litellm/issues/28989) (closed): Gemini image safety `finishReason` is dropped.
   - [#37028](https://github.com/BerriAI/litellm/issues/37028) (closed): `system_instruction` is sent instead of `systemInstruction` with a custom `api_base`.
   - [#51824](https://github.com/BerriAI/litellm/issues/51824) (closed): lone UTF-16 surrogates in HTTP bodies fail before dispatch.
   - [#53337](https://github.com/BerriAI/litellm/pull/53337): fixes the wrong HTTP method and name in the `list_batches` error handler.

## 6. What This Means for Application Developers

- **Pinning:** use the `lts` tag (v1.108.14) for stability. If you are on v1.110.x and use OAuth pass-through to MCP servers, test it before upgrading further ([#53185](https://github.com/BerriAI/litellm/issues/53185)).
- **Streaming:** don't treat `finish_reason="stop"` as proof of a complete answer. Several fixes for truncated streams are in flight, but until they ship, check for completeness yourself.
- **Budgets and cost:** audit spend tracking for TTS, STT and watsonx streaming, where usage or cost has been recorded as zero or estimated. Don't rely on `max_budget` alone for concurrent `/v1/responses` traffic.
- **Compliance:** if you use `store_prompts_in_spend_logs` with guardrails, blocked content is logged in plain text ([#50127](https://github.com/BerriAI/litellm/issues/50127)).
- **SDK retries:** if you use the SDK directly, set retries per call or on the Router instead of relying on `litellm.num_retries` ([#33272](https://github.com/BerriAI/litellm/issues/33272)).
- **Self-hosted vLLM:** pass provider-specific params through chat completions rather than `/v1/responses` until [#48362](https://github.com/BerriAI/litellm/issues/48362) is fixed.
- **Deployment:** SQL_ASCII PostgreSQL databases and `libpq`-less images can crash startup or migrations ([#52247](https://github.com/BerriAI/litellm/issues/52247)). Check your DB encoding before upgrading.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
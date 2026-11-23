# AI Infrastructure Digest 2026-11-24

> Generated: 2026-11-23 18:56 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-11-24

**Scope note:** Only two digests were supplied, Dify (application platform and gateway layer) and LiteLLM (LLM gateway and proxy). There was no data for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning frameworks (Unsloth). The sections that depend on those layers say so and don't extrapolate.

## 1. Ecosystem Overview

Neither project shipped a release in the last 24 hours. Both days were dominated by bug triage and hardening rather than features. The work sits in the layer between applications and model providers: translating between provider formats, tracking usage and cost, handling malformed input, and cleaning up resources. Tool calling, structured output and agent retries cause most of the correctness failures, and Gemini/Vertex and Anthropic translation paths are the most affected. Security and operations issues are also prominent: unvalidated JSON bodies in Dify, a guardrail bypass and lost audit logs in LiteLLM, and a change to keyless image signing.

## 2. Activity Comparison

| Project | Layer | Issues updated | PRs updated | Release status |
|---|---|---|---|---|
| Dify | App platform / workflow / agents | 29 | 144 (digest lists top 20 by comments) | None in 24h |
| LiteLLM | LLM gateway / proxy | Not stated in digest | Not stated in digest | None in 24h (v1.108.10+ keyless signing is the standing change) |

Dify's volume is large, but much of it is refactors, CI flakiness and UI work. LiteLLM's items are mostly provider-specific bugs. The two projects can't be compared on raw counts, because LiteLLM's counts are missing.

## 3. Model Support Race

- **No new model or hardware support shipped in either project today.**
- **LiteLLM** is the only one with model-level activity:
  - Vertex Claude Haiku 5.5 lacks `supports_native_structured_output` in the model map, so strict `json_schema` requests fall back to an unforced JSON tool (#53478). No fix PR was seen.
  - A new OpenAI-compatible provider, AbliteratedLLM, is in PR with pricing for 16 models (#50697).
  - A PR would bill completion tokens for OpenAI-shaped Bedrock invoke streams such as Qwen3 and Mistral Large 3 (#53850). Today only the prompt is billed.
  - Vertex Gemini image models reject `n > 1` because it is mapped to `candidateCount` (#53119, closed).
- **Dify** has no model-support work. Its related issue is structured-output schema inlining, which overwrites `$ref` sibling constraints (#46953).
- **Who is ahead:** LiteLLM, because it tracks day-one model metadata. Its gaps (Haiku 5.5 on Vertex, Bedrock streaming billing) show that gateway support often lags the model launch. No inference-engine data was supplied, so architecture support in vLLM, SGLang or llama.cpp can't be judged.

## 4. Performance Frontier

Neither digest reports benchmarks, and neither touches KV cache, batching, quantization or kernels. Optimization here means resource efficiency and cost.

- **Connection and resource leaks:**
  - Dify: the schedule poller leaks one Redis pubsub connection per minute (#46979, fix PR #46980).
  - LiteLLM: sync `Router.completion` opens a new async Redis client per call and never closes it (#48589).
  - Dify: the httpcore HTTPS proxy cleanup backport (#46987).
- **Request overhead:** LiteLLM's `MCPServerManager` calls `list_prompts` and `list_resources` on every aggregate request, even for servers that don't support them (#35460).
- **Guardrail cost:** Bedrock `during_call` ignored `only_scan_new_messages` and rescanned the full history each turn, so agent sessions paid for every earlier tool result (#53258).
- **Prompt caching:** mid-conversation `system` messages broke Gemini/Vertex caching, so `cache_read_input_tokens` stayed 0 (#42104, closed).
- **Architecture:** Dify is moving away from the global `db.session` (tracking issue #45584) and adding a transactional outbox so cleanup survives Celery failures (#46986).

## 5. Layer Positioning

| Project | Layer | Today's concerns |
|---|---|---|
| Dify | Application and workflow platform with agents, knowledge base and HITL, sitting above the gateway layer | Input validation, Agent V2 retry and streaming correctness, KB ingestion, background-job reliability |
| LiteLLM | Provider-normalizing gateway and proxy | Format translation (Gemini, Anthropic, Responses bridge), billing accuracy, guardrails, audit logging, supply-chain signing |
| Serving engines, local runtimes, fine-tuning | Not covered by today's data | n/a |

The two projects meet at structured output, tool calling and token accounting. Both are affected by provider schema quirks, but they fail in different ways. Dify's failures show up as workflow and data-path problems. LiteLLM's show up as cost and protocol-fidelity errors.

## 6. Trend Signals

1. **Translation-layer correctness is the main source of bugs.**
   - Examples: boolean JSON sub-schemas crashing Gemini/Vertex tool mapping (#53684), parallel same-function calls being dropped (#53345), and overlong tool call IDs (#53390).
   - Developers on multi-provider stacks should test tool schemas against each target provider, not just one.
2. **Usage and cost data can't be fully trusted yet.**
   - Watsonx streams (#46059), Gemini multimodal embeddings (#33681) and Bedrock invoke streams (#53850) all report wrong usage.
   - Cross-check against provider billing.
3. **Agent workloads are exposing guardrail and audit gaps.**
   - Bedrock guardrails skipped tool results on `/v1/messages` (#53507). Audit logs can be lost on shutdown (#43583).
   - Dify's malformed-JSON issues (#46928, #46940, #46926) have no fix PRs listed, so put validation in front of those endpoints.
4. **Agent retry and streaming semantics are maturing.** Dify's Agent V2 cluster covers stale snapshots, dropped trace attempts, an SSE reconnect loop and out-of-order file chunks (#46964, #46973, #46975, #46970). Don't rely on evaluation traces to show every retry.
5. **Supply-chain hygiene is changing.** LiteLLM v1.108.10+ images use keyless cosign signing, so verification pipelines need updating (#52837).
6. **Upgrade risk is real.**
   - Dify 1.20.0 has a KB import hang with Weaviate and `openai_api_compatible` (#46835). Stage it before upgrading.
   - LiteLLM PR #53865 would change `drop_params` behavior for reasoning objects, so check any reasoning params you pass.

**Watch list:** the fixes for #46980, #46986, #53507 and #53390. Also watch whether Vertex Haiku 5.5 gets native structured-output support (#53478).

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-24

Repo: [langgenius/dify](https://github.com/langgenius/dify). Window: the last 24h. 29 issues and 144 PRs were updated. The PR list shows only the top 20 by comment count.

## 1. Today's Highlights

There was no release today. Activity centered on hardening and cleanup. Several reports describe malformed-input handling (JSON bodies) and an Agent V2 retry and streaming correctness cluster. A regression in the schedule poller (Redis pubsub connection leak) already has a fix PR. A knowledge-base import hang after the 1.20.0 upgrade is still open.

## 2. Releases & Breaking Changes

None in the last 24h.

Upgrade note: [#46835](https://github.com/langgenius/dify/issues/46835) reports KB import hanging after a 1.17.1 → 1.20.0 upgrade (details in Stability).

## 3. New Model & Hardware Support

No new model or hardware support landed today. Dify is an application and gateway layer, so this section is mostly not applicable. Related items:
- [#46953](https://github.com/langgenius/dify/issues/46953): structured-output schema inlining overwrites `$ref` sibling constraints and leaks root `$defs`. This affects JSON-schema output on providers that need inlined schemas.
- [#46987](https://github.com/langgenius/dify/issues/46987): backport the httpcore HTTPS proxy connection cleanup. It targets httpcore 1.0.9, which the API uses for outbound HTTPS. Without it, a TLS setup failure leaves the proxy connection unreleased.

## 4. Performance & Optimization

No benchmark numbers were reported. Resource-efficiency work in progress:
- [#46980](https://github.com/langgenius/dify/pull/46980): stops the schedule poller leaking one Redis pubsub connection per minute via group dispatch. This fixes [#46979](https://github.com/langgenius/dify/issues/46979).
- [#46986](https://github.com/langgenius/dify/pull/46986) (XXL): adds a Build-scoped transactional outbox so cleanup dispatch survives Celery publication failures. It fixes [#46985](https://github.com/langgenius/dify/issues/46985).
- [#46981](https://github.com/langgenius/dify/pull/46981) (XXL): moves workflow run and version history loading onto the generated oRPC console contract. It is a pilot for the web data layer.
- A cluster of "explicit session" refactors ([#46983](https://github.com/langgenius/dify/pull/46983), [#46113](https://github.com/langgenius/dify/pull/46113), [#46632](https://github.com/langgenius/dify/pull/46632)) removes the global `db.session` from tool and extraction paths (tracking issue #45584). [#46113](https://github.com/langgenius/dify/pull/46113) and [#46632](https://github.com/langgenius/dify/pull/46632) were closed today.

## 5. Stability & Regressions

Ranked by severity.

**Security and input validation**
1. [#46928](https://github.com/langgenius/dify/issues/46928): malformed JSON creates an unrestricted dataset API key. No fix PR is listed.
2. [#46940](https://github.com/langgenius/dify/issues/46940): malformed JSON can reset optional Console app settings. No fix PR is listed.
3. [#46926](https://github.com/langgenius/dify/issues/46926): workflow OpenAPI routes accept non-object JSON bodies as empty inputs. No fix PR is listed.

**Regressions and data-path failures**
4. [#46835](https://github.com/langgenius/dify/issues/46835): KB import hangs forever at token counting (`get_text_embedding_num_tokens`) after the 1.20.0 upgrade. It involves Weaviate and `openai_api_compatible`. It is open with 5 comments.
5. [#46979](https://github.com/langgenius/dify/issues/46979): the schedule poller leaks a Redis pubsub connection per minute. It is a regression of #44551 via #45941. Fix PR: [#46980](https://github.com/langgenius/dify/pull/46980).
6. [#46985](https://github.com/langgenius/dify/issues/46985): Build resource cleanup is unrecoverable if Celery publication fails. Fix PR: [#46986](https://github.com/langgenius/dify/pull/46986).
7. [#46861](https://github.com/langgenius/dify/issues/46861): plugin provider lists report daemon failures as invalid input, which masks the real error.
8. [#46659](https://github.com/langgenius/dify/issues/46659) (closed): duplicate retrieval sources when multiple segments belong to one document.
9. [#45086](https://github.com/langgenius/dify/issues/45086) (closed): a tool file with `mime_type=None` crashed agent file extraction with a ValidationError.

**Agent V2 correctness** (all open, filed by one author, no fix PRs listed)
- [#46964](https://github.com/langgenius/dify/issues/46964): output retries reuse stale session snapshots.
- [#46973](https://github.com/langgenius/dify/issues/46973): evaluation traces drop earlier output retry attempts.
- [#46975](https://github.com/langgenius/dify/issues/46975): the SSE client can reconnect forever on a replayed event ID.
- [#46970](https://github.com/langgenius/dify/issues/46970): plugin file chunks are accepted when incomplete or out of order, which can produce corrupted blobs.

**Other**
- [#46952](https://github.com/langgenius/dify/issues/46952): HITL v2 runtime logs omit IM message rejection codes.
- Several PRs address CI flakiness in the web browser tests ([#46982](https://github.com/langgenius/dify/pull/46982), [#46984](https://github.com/langgenius/dify/pull/46984), [#46977](https://github.com/langgenius/dify/pull/46977)). All three were closed or merged today.
- Fix PRs still open: [#46084](https://github.com/langgenius/dify/pull/46084) (malformed DOCX and legacy .doc extraction) and [#46846](https://github.com/langgenius/dify/pull/46846) (File instances from `__dify__file__` mappings in workflow tool outputs). [#43241](https://github.com/langgenius/dify/pull/43241) (zero in required number inputs) is also open.
- [#46871](https://github.com/langgenius/dify/issues/46871) (closed) was a promotional bot issue. Ignore it.

## 6. What This Means for Application Developers

- **Hold off on 1.20.0 for large KB ingests.** If you run Weaviate with an OpenAI-compatible embedding provider, test imports in staging first. Rolling back to 1.17.1 is the only known workaround so far.
- **Validate request bodies yourself.** Until the malformed-JSON issues are fixed, put schema validation in front of the Console and workflow OpenAPI endpoints. Treat dataset API key creation as sensitive, and audit existing keys.
- **Agent V2 structured output.** Retries may use stale session state and drop trace attempts. Don't rely on evaluation traces to show every attempt. Keep schemas simple, since `$ref` sibling constraints can be lost during inlining ([#46953](https://github.com/langgenius/dify/issues/46953)).
- **Self-hosters.** Watch Redis connection counts if the schedule poller is enabled (#46979). Cleanup tasks can be lost on Celery or broker failures until #46986 lands.
- **Workflow-as-tool users.** Files returned by nested workflow tools may not be materialized as `File` objects until [#46846](https://github.com/langgenius/dify/pull/46846) merges.
- **Feature requests worth tracking.** Date and DateTime pickers for HITL forms ([#46911](https://github.com/langgenius/dify/issues/46911)), and a dependency-upgrade tracker ([#43035](https://github.com/langgenius/dify/issues/43035)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-24

## 1. Today's Highlights
No new release in the last 24h. Activity was split between Gemini/Vertex and Anthropic translation-layer bugs and guardrail, MCP and Terraform PRs. Also notable: a request to confirm the switch to keyless cosign signing for v1.108.10+ images ([#52837](https://github.com/BerriAI/litellm/issues/52837)).

## 2. Releases & Breaking Changes
- No releases in the last 24h.
- **Supply chain:** v1.108.10+ images are signed keyless only, through `project-releaser`. The old `cosign.pub` key flow is gone. A user asks maintainers to confirm this was intended ([#52837](https://github.com/BerriAI/litellm/issues/52837)). If your pipeline verifies images, update it to use `--certificate-identity` against `BerriAI/project-releaser`.
- **Potential breaking change (PR):** [#53865](https://github.com/BerriAI/litellm/pull/53865) `fix(openai)!` applies `drop_params` to reasoning objects on plain `openai/` chat completions. Reasoning fields with an unsupported `mode` or `context` will change behavior. Today they are silently dropped on one path and get a 400 on another.

## 3. New Model & Hardware Support
- **Vertex Claude Haiku 5.5:** the model-map entry lacks `supports_native_structured_output`. Strict `json_schema` requests fall back to an unforced JSON tool instead of native structured output ([#53478](https://github.com/BerriAI/litellm/issues/53478)). No fix PR was seen in the data.
- **New provider PR:** AbliteratedLLM, an OpenAI-compatible provider with pricing for 16 models ([#50697](https://github.com/BerriAI/litellm/pull/50697)).
- **Vertex Gemini image models:** `n > 1` is mapped to `candidateCount`, which Vertex rejects with a 400 ([#53119](https://github.com/BerriAI/litellm/issues/53119), closed).
- **Bedrock invoke streams:** a PR bills completion tokens for OpenAI-shaped streams, such as Qwen3 and Mistral Large 3. Today only the prompt is billed ([#53850](https://github.com/BerriAI/litellm/pull/53850)).

## 4. Performance & Optimization
- **Guardrail cost:** Bedrock `during_call` ignored `only_scan_new_messages` and rescanned the whole history each turn. This made agent sessions pay for every earlier tool result ([#53258](https://github.com/BerriAI/litellm/pull/53258)).
- **Redis connection leak:** the sync `Router.completion` opens and caches a new async Redis client on every call, and never closes it, when a deployment has an rpm/tpm limit ([#48589](https://github.com/BerriAI/litellm/issues/48589)).
- **MCP overhead:** `MCPServerManager` calls `list_prompts` and `list_resources` on every aggregate request, including for servers that don't support them ([#35460](https://github.com/BerriAI/litellm/issues/35460)).
- The data has no benchmark numbers.

## 5. Stability & Regressions
Ranked by severity:
1. **Dropped audit logs:** twelve audit-log writes use bare `asyncio.create_task`. A worker shutdown can lose records for calls that already returned 200 ([#43583](https://github.com/BerriAI/litellm/issues/43583)).
2. **Guardrail bypass:** Bedrock `during_call` on `/v1/messages` skipped the system prompt and tool results, so a prompt attack in a tool result got through. Fix PR: [#53507](https://github.com/BerriAI/litellm/pull/53507).
3. **Billing and usage errors:**
   - Watsonx streamed usage is ignored, and a much lower local estimate is reported instead ([#46059](https://github.com/BerriAI/litellm/issues/46059)).
   - `gemini-embedding-2` multimodal embeddings report zero usage ([#33681](https://github.com/BerriAI/litellm/issues/33681), closed).
4. **Tool-call corruption:**
   - Gemini `generateContent` → Anthropic drops parallel calls to the same function and duplicates `tool_result` ids ([#53345](https://github.com/BerriAI/litellm/issues/53345)).
   - Boolean JSON sub-schemas crash Gemini/Vertex tool mapping with `TypeError` ([#53684](https://github.com/BerriAI/litellm/issues/53684)).
   - The Responses bridge dropped parallel tool-call arguments ([#53159](https://github.com/BerriAI/litellm/issues/53159), closed).
   - Overlong tool call IDs (over 64 characters) break the Responses chat bridge. Fix PR: [#53390](https://github.com/BerriAI/litellm/pull/53390).
5. **Prompt caching:** mid-conversation `system` messages break Gemini/Vertex caching, so `cache_read_input_tokens` stays 0 ([#42104](https://github.com/BerriAI/litellm/issues/42104), closed).
6. **Responses bridge:** an unresolvable `previous_response_id` should return a 400 instead of answering without the earlier turns. Fix PRs for `lts/1.108.x`: [#53768](https://github.com/BerriAI/litellm/pull/53768), and #53766 for main.
7. **Smaller bugs:**
   - `/v1/audio/transcriptions` returns JSON for `response_format=text` ([#31457](https://github.com/BerriAI/litellm/issues/31457), closed).
   - Image edits sent as JSON are re-encoded as a url-encoded form, which OpenAI and Azure reject. Fix PR: [#53864](https://github.com/BerriAI/litellm/pull/53864).
   - The `httpx.Timeout` connect value is ignored for providers such as Mistral ([#47822](https://github.com/BerriAI/litellm/issues/47822), closed).
   - Bedrock rerank ignores `return_documents` ([#38006](https://github.com/BerriAI/litellm/issues/38006)).
   - Whitespace-only system messages are passed to Anthropic, which rejects them ([#28706](https://github.com/BerriAI/litellm/issues/28706)).
   - `use_chat_completions_api: true` drops `content` when the provider returns `reasoning_content` ([#27492](https://github.com/BerriAI/litellm/issues/27492)).
   - An interrupted `--pkce` renewal leaves `lite` without a credential ([#43374](https://github.com/BerriAI/litellm/issues/43374)).

## 6. What This Means for Application Developers
- **Agents on Gemini/Vertex:** validate tool schemas for boolean sub-schemas, and avoid parallel calls to the same function when routing Gemini-format requests to Anthropic. Check `cache_read_input_tokens` if you depend on prompt caching.
- **Cost tracking:** don't trust LiteLLM-reported usage for watsonx streams, Gemini multimodal embeddings or Bedrock invoke streams until the fixes land. Cross-check it against provider billing.
- **Audit and compliance:** audit logs can be lost on worker shutdown, so use graceful draining or external logging.
- **Guardrails:** if you use Bedrock guardrails with `/v1/messages`, the tool-result scanning gap ([#53507](https://github.com/BerriAI/litellm/pull/53507)) matters for agent workloads.
- **Operations:**
  - Update image-verification scripts to the keyless cosign flow.
  - Watch for the `drop_params` change in [#53865](https://github.com/BerriAI/litellm/pull/53865) if you pass reasoning params.
  - A new config linter, [#53863](https://github.com/BerriAI/litellm/pull/53863), catches `config.yaml` mistakes without starting the proxy.
  - The Terraform PRs add MCP OAuth settings and logging callbacks ([#53862](https://github.com/BerriAI/litellm/pull/53862), [#53861](https://github.com/BerriAI/litellm/pull/53861)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
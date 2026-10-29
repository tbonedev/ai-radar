# AI Infrastructure Digest 2026-10-29

> Generated: 2026-10-29 13:54 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-10-29

**Scope note:** Only two digests were supplied, **Dify** (app platform) and **LiteLLM** (gateway). No serving engines (vLLM, SGLang), local runtimes (llama.cpp, Ollama) or fine-tuning frameworks (Unsloth) were included, so the engine-level sections below are limited to what these two projects show. Counts are items cited in the digests, not full tracker totals.

## 1. Ecosystem Overview

Today's activity is concentrated in the application and gateway layers, not the engine layer. Both projects are mostly doing reliability and accounting work, not adding features. LiteLLM is stabilizing cost accounting and provider-parameter handling while preparing a Rust gateway rewrite. Dify is cleaning up after 1.18.0, with several data-integrity bugs on failure paths. The common theme is that the layers above the inference engine are where correctness and observability problems surface. Both projects also backport to older release lines.

## 2. Activity Comparison

| Project | Layer | Issues cited | PRs cited | Release status |
|---|---|---|---|---|
| Dify | App platform | ~26 (about 17 closed) | ~15 | No release in 24h. 1.18.0 follow-ups, plus backports to `lts/1.13.x` and `lts/1.17.x` |
| LiteLLM | Gateway/proxy | ~20 | ~16 | 3 releases: v1.108.0-rc.1 (candidate), v1.106.6 and v1.105.7 (backports). Release notes were truncated in the data |

- LiteLLM is the more release-active project. Dify is shipping fixes through branches and PRs.
- Dify's closed-issue ratio is high. The digest could not confirm whether those closures were code fixes.

## 3. Model Support Race

No new model architectures or quantization formats shipped in either project today, so there's no clear leader. The model-related items are all open or in-flight PRs:

- **LiteLLM (ahead on model and provider coverage):**
  - [#48998](https://github.com/BerriAI/litellm/pull/48998): DashScope/Qwen image edits and TTS.
  - [#49074](https://github.com/BerriAI/litellm/pull/49074): token counting for grok-4-1, grok-4.3 and Fireworks DeepSeek V4.1. One example counted 58 tokens against 357 billed.
  - [#49076](https://github.com/BerriAI/litellm/pull/49076): encrypted reasoning round-trip for `chatgpt/` models.
  - [#49061](https://github.com/BerriAI/litellm/pull/49061): Anthropic typed tools sent to the Responses API.
- **Dify:** nothing new. [#41456](https://github.com/langgenius/dify/issues/41456) is a closed `qwen3-tts-flash` streaming timeout.

Qwen, Grok and DeepSeek appear most often. Support work today is about modalities (TTS, image edit) and reasoning/tool semantics, not new architectures.

## 4. Performance Frontier

No benchmark numbers were reported. The effort is on gateway and control-plane overhead, not KV cache, batching, quantization or kernels.

- **Gateway overhead:** LiteLLM's Rust migration ([#31263](https://github.com/BerriAI/litellm/issues/31263)) targets sub-1ms overhead. [#45039](https://github.com/BerriAI/litellm/pull/45039) defers loading so multi-worker proxies stop crash-looping on the 5s health ping.
- **Connection and client efficiency:**
  - [#40631](https://github.com/BerriAI/litellm/pull/40631): HTTP/2 and OAuth token reuse.
  - [#44204](https://github.com/BerriAI/litellm/pull/44204): Azure cached SDK clients ignoring per-call timeouts. One report showed 16 upstream attempts.
  - [#46257](https://github.com/BerriAI/litellm/pull/46257): filtering non-chat deployments before fallback.
- **Observability pipeline:** Dify [#44673](https://github.com/langgenius/dify/pull/44673) merges four tracing paths into one and moves config decryption off the request path.
- **Distributed serving, KV cache and kernel work:** not covered by this data.

## 5. Layer Positioning

| Layer | Project | Role today |
|---|---|---|
| Gateway / proxy | LiteLLM | Normalizes many providers' APIs (Chat, Responses, Messages), spend tracking, budgets, key and team auth, fallback routing. It reaches self-hosted engines through `hosted_vllm/`. |
| Application platform | Dify | Workflows, chatflows, agents, RAG/knowledge bases, tracing, and web-app and tenant management. It consumes model providers and doesn't serve models. |
| Serving engines, local runtimes, fine-tuning | Not in this dataset | None |

LiteLLM sits one layer below Dify. Its bugs, such as cost accounting and parameter dropping, can affect Dify-style apps that route through it. The one engine-facing item is [#48929](https://github.com/BerriAI/litellm/pull/48929), where `hosted_vllm/` strips `strict` and `additionalProperties` from tool schemas. That is a gateway-to-engine fidelity gap.

## 6. Trend Signals

1. **Cost accounting is the weakest point in the gateway layer.** LiteLLM has at least six open or recently closed issues on `usage.cost`, streaming, spend buffers and budget resets. Failures in both directions (undercounting and inflation) mean budgets can silently fail.
2. **Silent parameter handling is being reversed.** [#49058](https://github.com/BerriAI/litellm/pull/49058) would turn silently dropped params for Claude Code and Codex traffic into 400 errors. [#48929](https://github.com/BerriAI/litellm/pull/48929) and [#41011](https://github.com/BerriAI/litellm/pull/41011) point the same way, toward stricter fidelity and policy enforcement.
3. **Coding-agent traffic is shaping gateway features.** Claude Code and Codex are named in multiple LiteLLM PRs (encrypted reasoning, `/v1/messages`, tool permissions).
4. **Failure-path correctness in agentic apps.** Dify 1.18.0 bugs ([#44909](https://github.com/langgenius/dify/issues/44909) to [#44912](https://github.com/langgenius/dify/issues/44912)) show answers lost, runs stuck "running" and flows executed twice after transient DB or Redis failures.
5. **Responses API and reasoning semantics are a compatibility fault line.** Examples are string `input` handling ([#41963](https://github.com/BerriAI/litellm/issues/41963)), duplicated tool-call arguments in the bridge ([#48773](https://github.com/BerriAI/litellm/issues/48773)) and `<think>` tag replay in Dify ([#44964](https://github.com/langgenius/dify/issues/44964)).
6. **Gateway performance is moving to Rust.** Sub-1ms overhead is the stated goal, though it is still at the tracker stage.

**What agent and application developers should do:**
- Cross-check LiteLLM spend against provider billing, especially for streaming and OpenAI-compatible upstreams.
- Set `drop_params` explicitly, since the default behavior may change.
- Make side-effecting nodes idempotent in Dify chatflows.
- Pin production to stable lines (LiteLLM v1.106.6 or v1.105.7, not the v1.108.0 release candidate).
- Validate tool arguments client-side when routing to vLLM through LiteLLM.
- Run Dify's API with `TZ=UTC` until [#44987](https://github.com/langgenius/dify/issues/44987) is fixed.

**Gap:** For a full infrastructure landscape view, add digests for vLLM, SGLang, llama.cpp, Ollama and Unsloth.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest, 2026-10-29

Dify is an LLM application platform, so most of this data is app-layer, not inference-engine. I've kept your section structure and noted where nothing applies.

## 1. Today's Highlights

No release shipped in the last 24h. Activity centers on 1.18.0 follow-ups: a cluster of data-integrity and reliability bugs reported against 1.18.0 (several already closed), and in-flight work on KnowledgeFS availability, tracing consolidation and HITL IM integration. The LTS branches (`lts/1.13.x`, `lts/1.17.x`) also received backports.

## 2. Releases & Breaking Changes

No releases in the last 24h. Notes from 1.18.0 and the LTS lines:

- **KnowledgeFS in Community Edition (1.18.0):** A self-hoster upgrading from 1.17.1 on Helm sees "Agent Knowledge Base retrieval is unavailable in this deployment". They are asking whether a public versioned image will be published. [#44719](https://github.com/langgenius/dify/issues/44719) (closed).
  - [#45073](https://github.com/langgenius/dify/pull/45073) (merged/closed) exposes KnowledgeFS availability as `enable_knowledge_fs` in the Console `/features` response. The Classic/Agent switcher now renders on first paint.
- **Legacy account update endpoints removed:** [#45015](https://github.com/langgenius/dify/pull/45015) drops the five deprecated POST endpoints for name, avatar, interface language, theme and timezone. Callers moved to the new endpoints in 1.17.1 or earlier. Check custom clients that still call them.
- **`lts/1.17.x`:** [#45076](https://github.com/langgenius/dify/pull/45076) removes the unused `openshell` and `grpcio` dependencies from the Agent server extra.
- **`lts/1.13.x`:** [#45059](https://github.com/langgenius/dify/pull/45059) fixes saved web-app conversations that failed with "Conversation Not Exists" after the access mode changed. The conversation is now keyed by end user.
- **New config knob:** [#45075](https://github.com/langgenius/dify/pull/45075) (open) adds `DATASET_DESCRIPTION_MAX_LENGTH` (default 400) to configure the knowledge base description limit.

## 3. New Model & Hardware Support

No new model, architecture, backend or quantization support landed today. One related item:

- [#41456](https://github.com/langgenius/dify/issues/41456) (closed): long multi-sentence TTS replies from `qwen3-tts-flash` time out when streaming from the plugin daemon (reported on 1.17.0).

## 4. Performance & Optimization

No throughput or latency numbers were reported. Related work:

- [#44673](https://github.com/langgenius/dify/pull/44673) (open, XXL) collapses four overlapping tracing paths into one pipeline behind a minimal provider interface. The paths are the legacy queue, unified trace, Agent trace ledger and enterprise telemetry. It also moves config decryption off the request path.
- [#44757](https://github.com/langgenius/dify/pull/44757) (open) adds a generic archive writer and a per-route request body cap.
- [#44258](https://github.com/langgenius/dify/pull/44258) (open) validates the vector-space usage watermark in Redis with Pydantic.

## 5. Stability & Regressions

Ranked by severity.

**High: data integrity and execution correctness (1.18.0)**
- [#44911](https://github.com/langgenius/dify/issues/44911) (closed): a lost Redis reply while queueing a streaming chatflow message runs the whole flow twice. That means duplicate HTTP requests, LLM calls and conversations.
- [#44910](https://github.com/langgenius/dify/issues/44910) (closed): re-uploading a document under the same name can delete its vectors and leave it "waiting" forever after one failed DB statement.
- [#44912](https://github.com/langgenius/dify/issues/44912) (closed): a chatflow or workflow run stays "running" forever when the final status write fails, even though the user got the answer.
- [#44909](https://github.com/langgenius/dify/issues/44909) (closed): a chat answer is saved empty, and history loses it, when the provider `last_used` update fails after streaming.
- [#44964](https://github.com/langgenius/dify/issues/44964) (open): Agent App replays reasoning as literal `<think>` tags. Models imitate them and hallucinate tool calls. No fix PR was listed.

**Medium: regressions and bugs**
- [#44869](https://github.com/langgenius/dify/issues/44869) (closed): the 1.18.0 upgrade breaks legacy conversations with a 422, because `retriever_resources` is null on old messages. Fixed by [#44899](https://github.com/langgenius/dify/pull/44899). The related [#41688](https://github.com/langgenius/dify/issues/41688) is also closed.
- [#44987](https://github.com/langgenius/dify/issues/44987) (open): API timestamps are offset by the host timezone when `TZ != UTC`. Naive UTC datetimes are serialized with `.timestamp()`.
- [#45003](https://github.com/langgenius/dify/issues/45003) (open): tool nodes fail when a multiple-select parameter is stored as a comma-separated string.
- [#45004](https://github.com/langgenius/dify/issues/45004) (closed): the Agent workspace model credential lookup returns nothing because `model_type` uses the enum name instead of its value.
- [#44955](https://github.com/langgenius/dify/issues/44955) (closed): the tool node 600s timeout appears not to change on 1.16.1.
- [#44850](https://github.com/langgenius/dify/issues/44850) (open): a custom tool schema without `servers` raises `KeyError` instead of an actionable error.
- [#44717](https://github.com/langgenius/dify/issues/44717) (open): the Weekly Schedule Trigger shows Sunday as the next run instead of Monday.
- [#44682](https://github.com/langgenius/dify/issues/44682) (closed): repeated PDF text previews create duplicate persisted images and change image URLs.
- [#44952](https://github.com/langgenius/dify/issues/44952) (closed): EML ingestion decodes already-decoded text a second time. Fixed by [#44953](https://github.com/langgenius/dify/pull/44953).
- [#45022](https://github.com/langgenius/dify/issues/45022) (closed): the KnowledgeFS migration test fails.

**Low: UI and setup**
- [#44931](https://github.com/langgenius/dify/issues/44931) (open): `crypto.randomUUID is not a function` in the Intent Classifier over non-secure HTTP.
- [#45071](https://github.com/langgenius/dify/issues/45071) (closed): no entry point for the Skills feature.
- [#45002](https://github.com/langgenius/dify/issues/45002) (closed): Studio Debug treats a required Number default of `0` as empty. Fixed by [#45005](https://github.com/langgenius/dify/pull/45005).
- [#44854](https://github.com/langgenius/dify/issues/44854) (closed): inconsistent New RAG "Add source" forms. Fixed by [#44855](https://github.com/langgenius/dify/pull/44855).
- [#41895](https://github.com/langgenius/dify/issues/41895) (closed): 502 on `api/system-features`.
- [#41909](https://github.com/langgenius/dify/issues/41909) (closed): cannot connect to Oracle.

I could not tell from the data whether the closed 1.18.0 reliability issues (#44909–#44912) were fixed by code changes or closed for another reason, so check before relying on them.

**Process:** [#42300](https://github.com/langgenius/dify/issues/42300) (closed) is a security-report follow-up that had no response after nearly three weeks.

## 6. What This Means for Application Developers

- **1.18.0 upgraders:** Test legacy conversation history first, since null `retriever_resources` triggered 422s. Review the failure-path bugs above (#44909–#44912). They show that a transient DB or Redis failure after streaming can lose answers or leave runs stuck in "running". Keep monitoring on stuck runs and duplicate executions.
- **Side effects in chatflows:** The double-execution report ([#44911](https://github.com/langgenius/dify/issues/44911)) means HTTP and tool nodes with side effects should be idempotent.
- **Agent apps with reasoning models:** Watch for `<think>` tag imitation and hallucinated tool calls ([#44964](https://github.com/langgenius/dify/issues/44964)) until a fix lands.
- **Self-hosters on non-UTC hosts:** Normalize timestamps client-side or run the API with `TZ=UTC` ([#44987](https://github.com/langgenius/dify/issues/44987)).
- **Tool nodes:** Pass multi-select parameters as lists, not comma-separated strings. Validate custom OpenAPI schemas for `servers` ([#45003](https://github.com/langgenius/dify/issues/45003), [#44850](https://github.com/langgenius/dify/issues/44850)).
- **Integrations:** Remove calls to the deprecated account update endpoints ([#45015](https://github.com/langgenius/dify/pull/45015)).
- **Watch list:** HITL IM integration ([#44864](https://github.com/langgenius/dify/pull/44864)), Guest-to-Account resource migration ([#44984](https://github.com/langgenius/dify/pull/44984)), the Builder's native workflow editing ([#44451](https://github.com/langgenius/dify/pull/44451)), and the IaC proposal for the `openapi` group ([#42075](https://github.com/langgenius/dify/issues/42075)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-10-29

## 1. Today's Highlights
LiteLLM shipped three releases in 24 hours: a new **v1.108.0-rc.1** release candidate and backports **v1.106.6** and **v1.105.7**. The release notes in the data are truncated, so changelog details aren't available. Cost-accounting bugs dominate the issue tracker, especially provider-reported `usage.cost` handling. A Rust-based gateway migration (sub-1ms overhead) continues in the parent tracker.

## 2. Releases & Breaking Changes
- **v1.108.0-rc.1**, **v1.106.6**, **v1.105.7**: The data shows only the cosign verification header. All images are signed with the key from commit [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). Check the release pages before upgrading.
- **Breaking-change PRs, open and unmerged.** These are likely to land in upcoming releases:
  - [#49058](https://github.com/BerriAI/litellm/pull/49058): The proxy will honor `litellm_settings.drop_params: false` for Claude Code and Codex traffic. Since v1.103.0 it ignored the setting, so unsupported params were dropped silently. After the fix, such requests return 400.
  - [#48929](https://github.com/BerriAI/litellm/pull/48929): `hosted_vllm/` will forward `strict: true` and `additionalProperties` in tool schemas. It currently strips them even with `drop_params=False`.
  - [#47749](https://github.com/BerriAI/litellm/pull/47749): `/health` will scope by wildcard keys and team model allowlists, matching auth.
  - [#41011](https://github.com/BerriAI/litellm/pull/41011): `tool_permission` pre-call checks will cover `/v1/messages` and `/v1/responses` tools.
  - [#40631](https://github.com/BerriAI/litellm/pull/40631): The Vertex AI Search vector store moves to HTTP/2. Set `http2: false` or `LITELLM_HTTP2=0` to keep HTTP/1.1.
  - [#35600](https://github.com/BerriAI/litellm/pull/35600): Realtime translation and streamed gpt-transcribe on OpenAI and Azure.
  - [#49061](https://github.com/BerriAI/litellm/pull/49061): Anthropic typed tools will be sent to the Responses API with their schemas.
- **Rust migration:** [#31263](https://github.com/BerriAI/litellm/issues/31263) is the parent tracker (32 comments, 21 👍). The goal is sub-1ms gateway overhead.

## 3. New Model & Hardware Support
- [#48998](https://github.com/BerriAI/litellm/pull/48998): DashScope (Qwen) image edits and TTS. Today `/v1/images/edits` returns 500 and `/v1/audio/speech` returns 404.
- [#49074](https://github.com/BerriAI/litellm/pull/49074): Token counting for tool requests on grok-4-1 (Azure AI Foundry), xAI grok-4.3, and Fireworks DeepSeek V4.1. One example counted 58 tokens where Azure billed 357.
- [#49076](https://github.com/BerriAI/litellm/pull/49076): Round-trips encrypted reasoning for `chatgpt/` models through `/v1/messages`, so Claude Code sessions keep reasoning across tool-call turns.
- [#25372](https://github.com/BerriAI/litellm/issues/25372): The request for Azure AI Foundry Agents v2 (Responses API with `agent_reference`) was closed today.
- Open provider gaps: [#42111](https://github.com/BerriAI/litellm/issues/42111) (`/v1/audio/speech` fails for OpenRouter), [#41544](https://github.com/BerriAI/litellm/issues/41544) (Bedrock audio transcription 400, closed).

## 4. Performance & Optimization
No benchmark numbers were reported. Relevant work:
- [#45039](https://github.com/BerriAI/litellm/pull/45039): The `litellm` command and gateway launcher defer loading LiteLLM, so multi-worker proxies on busy or CPU-limited hosts stop crash-looping on uvicorn's 5s health ping.
- [#44204](https://github.com/BerriAI/litellm/pull/44204): Azure cached SDK clients ignored per-call timeout and retry settings. One short-timeout batch made later calls time out, and SDK `num_retries` led to 16 upstream attempts.
- [#40631](https://github.com/BerriAI/litellm/pull/40631): HTTP/2 plus OAuth token reuse for Vertex AI Search.
- [#46257](https://github.com/BerriAI/litellm/pull/46257): Opt-in filtering of non-chat deployments, which avoids wasted provider calls before fallback.

## 5. Stability & Regressions
Ranked by severity:
1. **Spend and budget undercounting.** This is the largest cluster, and it can silently disable budgets.
   - [#48937](https://github.com/BerriAI/litellm/issues/48937): Streamed completions are logged at $0 when the upstream reports `usage.cost: 0`.
   - [#47533](https://github.com/BerriAI/litellm/issues/47533) (closed): Non-streaming `usage.cost` is ignored for OpenAI-compatible upstreams.
   - [#47675](https://github.com/BerriAI/litellm/issues/47675): `response_cost` is null when the priced row sits under a different provider.
   - [#35829](https://github.com/BerriAI/litellm/issues/35829) (closed): The opposite failure, where non-USD `usage.cost` is trusted verbatim and inflates spend.
   - [#34805](https://github.com/BerriAI/litellm/issues/34805): In-memory spend buffers are dropped on proxy shutdown.
   - [#37261](https://github.com/BerriAI/litellm/issues/37261): `budget_reset_at` is about 57 years out without Redis.
2. **Credential and secret handling.** [#28906](https://github.com/BerriAI/litellm/issues/28906) (closed): editing a reusable credential can overwrite real secrets with masked placeholders. [#43826](https://github.com/BerriAI/litellm/issues/43826) (closed): `jev_classifier_config.api_key` doesn't resolve `os.environ/`.
3. **Streaming and tool-calling correctness.**
   - [#48773](https://github.com/BerriAI/litellm/issues/48773) (closed): The Responses bridge duplicates tool-call arguments in streamed chat completions.
   - [#19858](https://github.com/BerriAI/litellm/issues/19858) (open): Claude tool calling is broken via OpenRouter and Vertex.
   - [#24498](https://github.com/BerriAI/litellm/issues/24498) (closed): Claude returns the `[System: Empty message content sanitised…]` placeholder.
   - [#46095](https://github.com/BerriAI/litellm/issues/46095): OpenRouter streaming chunks report the router name instead of the served model. No fix PR is visible.
   - [#41963](https://github.com/BerriAI/litellm/issues/41963): `/v1/responses` doesn't normalize string `input`. Fix PR: [#41984](https://github.com/BerriAI/litellm/pull/41984).
   - [#32096](https://github.com/BerriAI/litellm/pull/32096) (PR): Streamed cache hits drop reasoning, citations and audio.
4. **Rate limiting.** [#47814](https://github.com/BerriAI/litellm/issues/47814) (closed): TPM reservation counts base64 images as text, roughly doubling the estimate.
5. **Operations.** [#33167](https://github.com/BerriAI/litellm/issues/33167): v1.92.0 downloads Prisma binaries at startup, which fails in egress-restricted networks. [#30126](https://github.com/BerriAI/litellm/issues/30126): `/cursor/chat/completions` calls aren't logged. [#33786](https://github.com/BerriAI/litellm/pull/33786) (closed PR): reap the zombie Prisma engine.

## 6. What This Means for Application Developers
- **Don't rely on LiteLLM spend or budget numbers for streaming or OpenAI-compatible upstreams** until the `usage.cost` issues are resolved. Cross-check against provider billing, especially if you use OmniRoute-style gateways.
- **Set `drop_params` deliberately.** Behavior for Claude Code and Codex traffic will change from silent dropping to 400 errors if [#49058](https://github.com/BerriAI/litellm/pull/49058) merges.
- **Tool schemas on vLLM:** `strict` and `additionalProperties` are currently stripped on `hosted_vllm/`. Validate tool arguments client-side until [#48929](https://github.com/BerriAI/litellm/pull/48929) lands.
- **Responses API:** send `input` as a list, not a string, for non-OpenAI providers. When streaming through the Responses bridge, deduplicate tool-call argument deltas if you're on an affected version.
- **Air-gapped deployments:** pre-bundle Prisma binaries, per [#33167](https://github.com/BerriAI/litellm/issues/33167).
- **Pin versions.** v1.108.0-rc.1 is a release candidate, so production should stay on a stable line such as v1.106.6 or v1.105.7.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Infrastructure Digest 2026-11-18

> Generated: 2026-11-17 16:38 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-11-18

**Scope note:** today's input covers only **Dify** (application/agent platform) and **LiteLLM** (LLM gateway). There are no digests for inference engines (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning (Unsloth). Those layers are not assessed here, and conclusions about them are inferences from gateway-side symptoms. The issue and PR counts below are items cited in the digests, not repository totals.

## 1. Ecosystem Overview
Activity in both projects is mostly about hardening, not new capabilities. Dify is working through 1.19.0 regressions, and LiteLLM is fixing streaming correctness and memory behavior. The reasoning-model path is the main source of failures, in the form of `reasoning_content`, `thinking_delta` and prefix-cache interactions. Both projects are also building agent-facing surfaces: Dify Agent SDK/server and PATs, and LiteLLM `litellm.agent()`, evals and MCP guardrails. Long-lived load problems are showing up at the application layer, including large payloads, per-chunk Redis round trips and single-JSON indexes.

## 2. Activity Comparison

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | ~28 (about 5 closed) | ~14 (about 5 closed) | No release in 24h. 1.19.0 is the version in play. |
| LiteLLM | ~22 (about 12 closed, many as stale) | ~15 | **v1.108.10** shipped. The body has only `cosign` verification instructions and no changelog. |

- **Dify:** work is concentrated on 1.19.0 follow-ups. The Human Input 404 (#46535) has no visible fix PR.
- **LiteLLM:** the closed count is inflated by an automated stale sweep, so it says little about throughput. The release is signed, but breaking changes can't be confirmed.

## 3. Model Support Race
Neither project is racing on model support today.

- **LiteLLM** leads on model-map coverage, but the items are mostly gaps:
  - #47884: `gpt-5.6-{sol,luna,terra}` and Azure `gpt-6-astra` have missing or wrong `supports_max_reasoning_effort`.
  - PR #52296: 1080p pricing for fal_ai Seedance 2.5.
  - PR #50256: Agentgates provider.
  - PR #31324: ElevenLabs diarized transcription.
  - Closed items: Z.AI `glm-5.2[1m]` Unknown Model (stale) and Azure AI `deepseek-v4-pro` not using reasoning.
- **Dify** has no model or hardware additions. Its related work is DeepSeek replay losing `reasoning_content` (#46560) and out-of-tree vector backends declaring retrieval methods (#46625).

LiteLLM's lead is breadth of provider and modality, including video, speech and OpenAI-compatible endpoints. Several of its items are capability-metadata defects, not missing models.

## 4. Performance Frontier
There is no direct evidence of kernel, quantization or batching work in either digest. Effort is concentrated in the gateway and application layers.

- **Prefix cache and KV:**
  - Dify #44826: agent context compaction reportedly drops the prefix-cache hit rate from 99% to 10%. It is the most discussed item, with 12 comments.
  - Takeaway: prompt-management layers can silently defeat engine-level caching.
- **Memory and event loop (LiteLLM):**
  - #51935: the cache key is built from `str()` of the request, which blocks the loop for seconds on 200+ MB image payloads.
  - #51936: per-call `FallbackStreamWrapper` reference cycles keep streams alive until a full GC.
  - PR #50945: stops retaining transcription uploads in logging metadata.
- **Latency control:**
  - PR #51974: `stream_ttft_timeout` triggers fallback on streams that open but emit no tokens.
  - PR #52145: `VERTEXAI_AUTH_TIMEOUT` bounds token refresh, which can hang about 2 minutes.
  - Dify #46135: request to expose queue wait time.
- **Datastore and I/O costs (Dify):**
  - #46411: one Redis round trip per streamed chunk costs 0.56 ms of worker CPU per chunk (21% on long answers).
  - #46326: economy knowledge bases store the keyword index as one JSON value, giving 1.6 req/s at 100k chunks.
  - #46623: a ~7 MB knowledge base list response from Base64 icons.
  - #45252: N+1 queries when signing file links.

The one benchmark-style number set is Dify's, and all of it is user-reported. LiteLLM reported no benchmarks.

## 5. Layer Positioning

| Layer | Project | Today's evidence |
|---|---|---|
| Application and agent platform | Dify | Workflow, Chatflow and RAG, plus an Agent SDK/server with cancellation and SSE lifecycle bugs. Also a PAT/OpenAPI and IaC surface. Owns the RAG data plane (vector backends, keyword index, Top K). |
| LLM gateway and router | LiteLLM | Provider translation, such as the `/v1/messages` adapter and the Responses bridge. Also routing and fallback, spend caps, a DB read replica and MCP/guardrails. |
| Serving engine | not covered | LiteLLM issues name vLLM and SGLang only as reasoning backends it must adapt. |
| Local runtime and fine-tuning | not covered | n/a |

LiteLLM sits between applications and engines and absorbs backend quirks. #32357 is an example: vLLM and SGLang reasoning output broke Claude Code through the adapter. Dify sits above the gateway and is the layer where cache-hit and RAG-quality problems surface to end users. Both now converge on agents and MCP.

## 6. Trend Signals
1. **Reasoning-content handling is the main interoperability fault line.** Failures show up in streaming deltas, list-form `reasoning_content`, history replay and `reasoning_effort` propagation. Test this path whenever you change providers or upgrade.
2. **Agent workloads are stressing infrastructure designed for chat.** Cancellation expiry, open SSE streams, workspace retention and compaction-versus-cache all appear today. Treat long-running agent sessions as a separate test case.
3. **Gateways are becoming the memory and tail-latency bottleneck.** Large multimodal payloads, reference cycles and cache-key hashing are the concerns. Consider disabling response caching for large multimodal requests.
4. **Failover and resilience gaps.** LiteLLM #52284 (a dead reader Prisma engine that never falls back to the writer) has no fix PR. Add readiness-probe-driven restarts if you use `DATABASE_URL_READ_REPLICA`.
5. **Governance and cost correctness are becoming product features.** Items include Dify's zero-cost override of Langfuse pricing (#46594), LiteLLM's spend-cap blocking free models (#52071), network-access RBAC, PATs and Model Armor on MCP results.
6. **Extensibility is shifting to plugin-style entry points** (Dify's `dify.vector_backends`). This favors teams that run custom backends.

**What to watch:**
- Hold off on Dify 1.19.0 if you depend on webapp Human Input (#46535).
- Verify the cost data you use with Langfuse.
- Pin LiteLLM above the fixes for #32357 and #50514.
- Track Dify #44826 if you self-host on a prefix-caching backend.
- Recheck old LiteLLM bugs that the stale sweep closed, because some were closed automatically and may still reproduce.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-18

## 1. Today's Highlights
No release shipped in the last 24h. Activity centers on 1.19.0 follow-ups: Human Input and BACKSTAGE token regressions, a cluster of Dify Agent (SDK/server) lifecycle bugs, and RAG correctness and performance issues. Merge-queue CI repair by `hyoban` and PAT/OpenAPI work by `wylswz` account for much of the PR volume.

## 2. Releases & Breaking Changes
No new releases. Items to watch for 1.19.0 users:
- The webapp surface receives a BACKSTAGE access token, which breaks Human Input submission (see §5).
- Unknown custom-model costs are now reported as zero (see §5).
- PR [#46616](https://github.com/langgenius/dify/pull/46616) (closed) drops the vinext build and the `EXPERIMENTAL_ENABLE_VINEXT` toggle from the web Docker image.
- PR [#46607](https://github.com/langgenius/dify/pull/46607) (closed) corrects the `ENABLE_OAUTH_BEARER` comment. The code default is `True`, not `false`.

## 3. New Model & Hardware Support
Nothing new on models or hardware. Related extensibility work:
- [#46530](https://github.com/langgenius/dify/issues/46530) and PR [#46625](https://github.com/langgenius/dify/pull/46625): out-of-tree vector backends registered via the `dify.vector_backends` entry point could load for indexing, search and deletes. They could not declare their retrieval methods, because `retrieval_methods()` only knows built-in backends. The PR closes that gap.
- [#46560](https://github.com/langgenius/dify/issues/46560): DeepSeek streaming history replay adds duplicate newlines and loses `reasoning_content`.

## 4. Performance & Optimization
- [#44826](https://github.com/langgenius/dify/issues/44826): agent context compaction may be breaking the prefix cache. The reporter cites a 10% hit rate versus 99% without compaction. This is the most discussed item, with 12 comments.
- [#46623](https://github.com/langgenius/dify/issues/46623): the knowledge base list embeds Base64 custom icons, producing a ~7 MB response and slow loads.
- [#46326](https://github.com/langgenius/dify/issues/46326): economy knowledge bases store the keyword index as a single JSON value. Every keyword search parses all of it and every write rewrites it. The reporter measures 1.6 req/s at 100k chunks.
- [#46411](https://github.com/langgenius/dify/issues/46411): one Redis round trip per streamed chunk costs 0.56 ms of worker CPU per chunk, or 21% of worker time on long answers.
- [#45252](https://github.com/langgenius/dify/issues/45252): N+1 queries when signing content file links in the segment list.
- [#46135](https://github.com/langgenius/dify/issues/46135): request to expose queue wait time for streaming workflow runs.
- [#46243](https://github.com/langgenius/dify/issues/46243) (closed): reuse one HTTP client for enterprise API calls.

## 5. Stability & Regressions
Ranked by severity:
1. **Human Input 404 "Form not found" in Chatflow webapp** ([#46535](https://github.com/langgenius/dify/issues/46535), duplicate [#46534](https://github.com/langgenius/dify/issues/46534)): a BACKSTAGE token is issued to the webapp surface in 1.19.0. No fix PR was visible in the data.
2. **Hits consume separate Top K slots before dedup** ([#46584](https://github.com/langgenius/dify/issues/46584)): summary hits and original chunk hits use separate slots, which hurts retrieval quality.
3. **Cost reporting** ([#46594](https://github.com/langgenius/dify/issues/46594)): unknown custom-model costs are reported as zero, overriding Langfuse model pricing.
4. **Loop node** ([#46550](https://github.com/langgenius/dify/issues/46550)): the run fails with "loop_variables.N.value Field required" after a loop variable's type or mode changes.
5. **Dify Agent lifecycle bugs**, mostly from `Wang-Zephyr`:
   - [#46567](https://github.com/langgenius/dify/issues/46567): a pending cancellation can expire before its run does.
   - [#46565](https://github.com/langgenius/dify/issues/46565): the async SDK leaves SSE responses open.
   - [#46514](https://github.com/langgenius/dify/issues/46514) and [#46512](https://github.com/langgenius/dify/issues/46512): closed, so they appear fixed. They cover an extra poll after the deadline and an unhandled read-ahead task.
6. **Orphaned data** ([#46613](https://github.com/langgenius/dify/issues/46613)): transient storage failures orphan deleted segment attachments.
7. **Authorization** (PR [#44477](https://github.com/langgenius/dify/pull/44477), open): honors network-access RBAC permissions consistently.
8. **Minor**:
   - [#46198](https://github.com/langgenius/dify/issues/46198): the variable inspector overwrites invalid JSON drafts.
   - [#46542](https://github.com/langgenius/dify/issues/46542): the `.xls` extractor emits unescaped quotes in headers.
   - [#46532](https://github.com/langgenius/dify/issues/46532): the opening statement floats mid-screen after the inputs form collapses.
   - [#43479](https://github.com/langgenius/dify/issues/43479) (closed): `VariableTruncator` truncates strings that exactly fit the budget.
   - [#46573](https://github.com/langgenius/dify/issues/46573): Docker env sync overrides settings prefixed with `export`.
   - [#46574](https://github.com/langgenius/dify/issues/46574), [#46575](https://github.com/langgenius/dify/issues/46575), [#46569](https://github.com/langgenius/dify/issues/46569): Agent example and docs gaps (missing bearer token, wrong env names, missing sandbox token setup).

Fix PRs in flight:
- [#46593](https://github.com/langgenius/dify/pull/46593) (closed): allows null model selections so the app list loads.
- [#46596](https://github.com/langgenius/dify/pull/46596) (closed): returns 404 instead of 500 for unknown marketplace creators.
- [#43241](https://github.com/langgenius/dify/pull/43241): accepts `0` in required number inputs.
- [#46628](https://github.com/langgenius/dify/pull/46628): prevents feedback fanout in monitoring statistics.
- [#46626](https://github.com/langgenius/dify/pull/46626): tolerates Windows lock deletion contention in the CLI.
- [#46287](https://github.com/langgenius/dify/pull/46287): retires Agent workspaces after conversation retention.
- Merge-queue test stabilization: [#46624](https://github.com/langgenius/dify/pull/46624), [#46618](https://github.com/langgenius/dify/pull/46618), [#46622](https://github.com/langgenius/dify/pull/46622).

## 6. What This Means for Application Developers
- **Human Input in Chatflow:** hold off on 1.19.0 if you depend on webapp Human Input forms until [#46535](https://github.com/langgenius/dify/issues/46535) is resolved.
- **Cost tracking:** if you use custom models with Langfuse, verify your cost data. Zero values may be overriding your configured pricing ([#46594](https://github.com/langgenius/dify/issues/46594)).
- **Agent workloads:**
  - Treat long-running Dify Agent SDK use cautiously: SSE cleanup and cancellation edge cases are open.
  - Check the bearer token and env-name examples against your setup ([#46574](https://github.com/langgenius/dify/issues/46574), [#46575](https://github.com/langgenius/dify/issues/46575)).
  - If you self-host on a prefix-caching backend, watch [#44826](https://github.com/langgenius/dify/issues/44826) for compaction's effect on cache hits.
- **RAG tuning:**
  - Expect Top K dilution when summary indexing is on ([#46584](https://github.com/langgenius/dify/issues/46584)).
  - Avoid economy-mode knowledge bases at large scale ([#46326](https://github.com/langgenius/dify/issues/46326)).
  - Avoid large Base64 custom icons on knowledge bases ([#46623](https://github.com/langgenius/dify/issues/46623)).
- **Platform integration:** PAT and OpenAPI work is progressing. [#46610](https://github.com/langgenius/dify/pull/46610) lets resource-scoped PATs discover workspaces, and the IaC proposal is at [#42075](https://github.com/langgenius/dify/issues/42075).
- **Extensibility:** custom vector backends are about to get first-class retrieval-method declarations via [#46625](https://github.com/langgenius/dify/pull/46625).
- **Deployments:** if you build the web image yourself, the vinext build and `EXPERIMENTAL_ENABLE_VINEXT` toggle are going away ([#46616](https://github.com/langgenius/dify/pull/46616)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-18

## 1. Today's Highlights
LiteLLM shipped **v1.108.10** (signed Docker image, release notes truncated). Activity centers on streaming correctness and memory behavior in the Anthropic `/v1/messages` and reasoning-content paths. Many long-lived stale issues and PRs were closed or touched in a cleanup sweep. Several Bedrock and Responses-bridge bugs are also in flight.

## 2. Releases & Breaking Changes
- **v1.108.10**: the release body contains only the `cosign verify` instructions (identity `BerriAI/project-releaser`, image `ghcr.io/berriai/litellm:v1.108.10`) and the "What's" heading. No changelog was provided, so I can't confirm breaking changes.
- Issue reports reference v1.108.5 and v1.109.1, so the code is moving past 1.108.x. `router.py` logic now lives in `router_python_core.py` (see [#51936](https://github.com/BerriAI/litellm/issues/51936)).
- [#31261](https://github.com/BerriAI/litellm/issues/31261) (closed as stale) tracked install issues for the planned Rust-backed `pip install litellm` wheel.

## 3. New Model & Hardware Support
- [#47884](https://github.com/BerriAI/litellm/issues/47884) (open): `gpt-5.6-{sol,luna,terra}` and Azure `gpt-6-astra` have missing or wrong `supports_max_reasoning_effort` in the model map.
- [PR #52296](https://github.com/BerriAI/litellm/pull/52296): adds the 1080p rate to the base fal_ai Seedance 2.5 cost-map rows.
- [PR #50256](https://github.com/BerriAI/litellm/pull/50256): adds Agentgates as an OpenAI-compatible provider (`agentgates/<model>`).
- [PR #31324](https://github.com/BerriAI/litellm/pull/31324): ElevenLabs `diarized_json` transcription and multi-channel speaker support.
- [#32218](https://github.com/BerriAI/litellm/issues/32218) (closed as stale): Z.AI `glm-5.2[1m]` returned Unknown Model.
- [#33202](https://github.com/BerriAI/litellm/issues/33202) (closed): Azure AI `deepseek-v4-pro` does not use reasoning.

## 4. Performance & Optimization
No benchmark numbers were reported. The concrete work is below.
- [#51935](https://github.com/BerriAI/litellm/issues/51935) (open): the response cache key is built from `str()` of the full request and computed twice per request. For 200+ MB image payloads this blocks the event loop for seconds.
- [#51936](https://github.com/BerriAI/litellm/issues/51936) (open): a `FallbackStreamWrapper` class is defined per streamed call in the Router. It forms a reference cycle, so streams stay in memory until a full GC.
- [PR #50945](https://github.com/BerriAI/litellm/pull/50945): avoids retaining transcription uploads in logging metadata, which cuts memory held by the request object.
- [PR #51974](https://github.com/BerriAI/litellm/pull/51974): adds `stream_ttft_timeout` so fallbacks can trigger when a provider keeps a stream open without emitting tokens.
- [PR #52145](https://github.com/BerriAI/litellm/pull/52145): `VERTEXAI_AUTH_TIMEOUT` bounds Google token refresh, which can otherwise hang about 2 minutes.
- [#31880](https://github.com/BerriAI/litellm/issues/31880) (closed as stale): proposed skipping post-call Redis writes for keys with no limits configured.

## 5. Stability & Regressions
Ranked by severity:
1. [#52284](https://github.com/BerriAI/litellm/issues/52284) (open): with `DATABASE_URL_READ_REPLICA`, a reconnect cancelled by its 2 s timeout leaves the reader Prisma engine permanently dead. Reads never fall back to the writer and the proxy doesn't self-heal. No fix PR is listed.
2. [#50514](https://github.com/BerriAI/litellm/issues/50514) (closed): the Bedrock Invoke `/v1/messages` stream kept generating after the detached-drain abort because the httpx response was never closed.
3. [#32357](https://github.com/BerriAI/litellm/issues/32357) (closed): the `/v1/messages` adapter put `thinking_delta` inside a text block and duplicated `message_start`. This produced empty content in Claude Code and the Anthropic SDK for reasoning backends such as vLLM and SGLang.
4. [#50893](https://github.com/BerriAI/litellm/issues/50893) (open): `stream_chunk_builder` raises `TypeError` when `reasoning_content` streams as a list. [PR #31277](https://github.com/BerriAI/litellm/pull/31277) fixes a related chunk-ordering issue, but it is not confirmed to cover this bug.
5. [#51452](https://github.com/BerriAI/litellm/issues/51452) (open): `ModelNotMappedError` in `utils.py`.
6. [#52071](https://github.com/BerriAI/litellm/issues/52071) (open): once a key exceeds its spend cap, free or local models are also blocked.
7. [#37168](https://github.com/BerriAI/litellm/issues/37168) (open): sporadic, unexplained 502s.
8. [#52110](https://github.com/BerriAI/litellm/issues/52110) (closed): the Bedrock `ca.` inference profile dropped `reasoning_effort`.
9. [#27144](https://github.com/BerriAI/litellm/issues/27144) (closed): ChatGPT/Codex Responses streaming dropped function-call args when only `.done` events were emitted.
10. [#51547](https://github.com/BerriAI/litellm/issues/51547) (closed): no way to force `/chat/completions` for OpenAI-like servers.
11. [#30762](https://github.com/BerriAI/litellm/issues/30762) (open): Snowflake streaming tool calls are dropped.
12. [#47988](https://github.com/BerriAI/litellm/issues/47988) (closed): `MCPJWTSigner` overwrote a server's own `auth_value`, causing 401s.

Other open fix PRs:
- [#31280](https://github.com/BerriAI/litellm/pull/31280): count the tool-call function name in `token_counter`.
- [#31282](https://github.com/BerriAI/litellm/pull/31282): stop double-counting Anthropic cache tokens in custom pricing.
- [#31278](https://github.com/BerriAI/litellm/pull/31278): gate Gemini penalty params by model support.
- [#30671](https://github.com/BerriAI/litellm/pull/30671): handle MCP `CallToolResult` in the OTel `set_attributes`.
- [#31522](https://github.com/BerriAI/litellm/pull/31522): omit an empty `tools` array on `/chat/completions`.
- [#30017](https://github.com/BerriAI/litellm/pull/30017): pass custom redaction tags to `ContentFilterGuardrail`.

Closed internal-param-leak issues: [#30301](https://github.com/BerriAI/litellm/issues/30301) (systematic hardening) and [#30371](https://github.com/BerriAI/litellm/issues/30371) (Bedrock invoke).

## 6. What This Means for Application Developers
- **Streaming reasoning models:** if you use vLLM, SGLang or DeepSeek-style backends behind `/v1/messages`, upgrade past the fixes for #32357 and #50514. Test `stream_chunk_builder` with list-form `reasoning_content` ([#50893](https://github.com/BerriAI/litellm/issues/50893)).
- **Long-running proxies:** memory and event-loop cost grows with image-heavy agent traffic ([#51935](https://github.com/BerriAI/litellm/issues/51935), [#51936](https://github.com/BerriAI/litellm/issues/51936)). Consider disabling response caching for large multimodal requests.
- **Read replicas:** avoid or monitor `DATABASE_URL_READ_REPLICA` until #52284 is resolved. Add readiness-probe-driven restarts as a workaround.
- **Budgets:** don't rely on free-model routes for keys that may exceed their spend cap ([#52071](https://github.com/BerriAI/litellm/issues/52071)).
- **Agent evals:** `litellm.agent_eval()` was requested ([#52143](https://github.com/BerriAI/litellm/issues/52143)). [PR #52190](https://github.com/BerriAI/litellm/pull/52190) lets evaluations reuse Agent definitions, so watch it if you build on `litellm.agent()`.
- **Guardrails and MCP:** [PR #51887](https://github.com/BerriAI/litellm/pull/51887) adds Model Armor scanning of MCP tool results on `post_mcp_call`.
- **Cleanup sweep:** a large batch of stale issues and PRs was closed or touched in the last 24h. Closure was often automated, so recheck whether an old bug still reproduces on your version.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
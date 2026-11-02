# AI Infrastructure Digest 2026-11-03

> Generated: 2026-11-02 16:47 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-11-03

**Coverage caveat:** Only two digests were supplied: Dify (an LLM application and agent platform) and LiteLLM (an LLM gateway). There was no data for inference engines (vLLM, SGLang), local runtimes (llama.cpp, Ollama) or fine-tuning frameworks (Unsloth). Those layers are marked "no data" below and are not inferred.

## 1. Ecosystem Overview

Neither project shipped a release today, so the day was about stabilization. Dify is dealing with 1.18.0 regressions: LLM node slowdown, missing traces and structured-output failures. LiteLLM is dealing with billing and rate-limit correctness (overbilling, premature TPM 429s). Agent protocol plumbing (MCP, A2A, JSON-RPC pass-through) has bugs in both projects. LiteLLM is also making a notable architectural move, a Rust forwarding gateway, but it has no benchmarks yet.

## 2. Activity Comparison

| Project | Issues | PRs | Release status |
|---|---|---|---|
| Dify | Not totaled in the digest; about 20 are cited | 151 (many strict-pyrefly typing and test-annotation chores) | None in 24h; 1.18.0 is the reference version |
| LiteLLM | Not totaled in the digest; about 20 are cited | Not totaled; about 15 are cited, including a 4-PR Rust gateway stack | None in 24h; GHCR images v1.94.1 and v1.95.0 have no git tag or GitHub Release |

Only Dify's PR count (151) is a stated total. The other figures are counts of items cited in the digests, not repository totals, so don't compare them directly. Dify's PR volume is inflated by typing chores, so it overstates functional change.

## 3. Model Support Race

- **No new model or architecture support landed in either project today.**
- **LiteLLM** added provider and feature surface rather than models:
  - Keenable search provider (#49671).
  - Hugging Face rerank, which now needs an explicit TEI or Inference Endpoint URL (#49681).
  - A widened `huggingface-hub` cap (#49056).
  - An `a2a-sdk` bump request (#49570).
  - A CollieAi guardrail (#49224).
- **Dify** has only compatibility gaps:
  - Structured output fails for models that don't declare the feature (#45317).
  - File input is gated on `VISION` alone (#39478).
  - Claude extended-thinking blocks are dropped between tool rounds (#41092).
- **Who is ahead:** Neither can be called ahead on model support today. LiteLLM is broader at the provider level, and Dify is mostly fixing capability-declaration problems.

## 4. Performance Frontier

There is no KV-cache, batching, quantization or kernel work in this data. The effort that does appear is at the application and gateway layer:

- **Prefix caching:** Dify PR #45348 adds regression tests that pin prefix-cache reuse across compaction turns. It guards cost and latency, but it adds no new optimization.
- **Gateway throughput:** LiteLLM's Rust forwarding stack (#49604–#49607) is a pass-through to the Python proxy, so Python still handles auth and routing. No numbers exist.
- **Control-plane scaling:** LiteLLM #43922 reports O(n²) credential sync that blocks the event loop for 10s or more with thousands of credentials. No fix PR is listed.
- **Connection latency:** Dify PR #39321 tries streamable-http first for MCP, avoiding SSE hangs of up to 300s.
- **Regressions:** Dify #45323 reports slower LLM nodes after upgrading from 1.15.0 to 1.18.0, with no root cause yet.

## 5. Layer Positioning

| Layer | Project | Notes |
|---|---|---|
| Application and agent platform | Dify | Workflows, RAG, agent runtime, MCP client. The `dify-agent` runtime is being hardened. |
| Gateway and proxy | LiteLLM | Routing, spend, budgets, rate limits, guardrails, MCP and A2A. |
| Serving engine, local runtime, fine-tuning | None supplied | No data. |

The two sit adjacent. Dify consumes model endpoints and LiteLLM fronts them. Failures in one propagate to the other: spend accuracy at the gateway affects app-level cost, and capability declarations affect structured output.

## 6. Trend Signals

1. **Correctness over features.** Billing, rate-limit and budget bugs lead LiteLLM's ranking. Dify's top items are hangs, regressions and missing traces.
2. **Agent protocols are the main bug surface.** MCP (#49359, #49624, #39321), A2A (#49622, #49637, #49570) and JSON-RPC pass-through (#49479) are all affected.
3. **Security hardening of agent entry points.** The SSRF fix for A2A push URLs and Dify's request for webhook signature checks (#45234) both point this way.
4. **Gateways are chasing performance.** The Rust forwarding path is opt-in and unproven.
5. **Model capability metadata is fragile.** Dify's structured-output failures (#45317) and file-input gating on `VISION` (#39478) show that missing or coarse capability declarations break features silently.

**What application developers should do:**
- Cross-check proxy spend against provider invoices until LiteLLM #48398 is fixed.
- Benchmark LLM node latency in staging before moving Dify from 1.15 to 1.18.
- Declare `structured-output` explicitly for custom models.
- Treat webhook and A2A inline push configs as unvalidated.
- Set explicit Hugging Face rerank endpoints.
- Don't plan on throughput gains from the Rust gateway until benchmarks appear.

For a full ecosystem view, re-run this report with the inference engine, local runtime and fine-tuning digests.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-03

*Note: Dify is an LLM application/agent platform rather than an inference engine, so the infra-specific sections are adapted to what actually moved in the data.*

## 1. Today's Highlights

No new release today. Activity centers on 1.18.0 regressions, including slower LLM node execution, missing node-level traces in logs, a Prompt Generator regression and structured-output capability failures. The `dify-agent` runtime is also being hardened: several bugs were filed, and a test PR pins prefix-cache reuse across compaction. A large share of the 151 PRs are strict-pyrefly typing and test-annotation chores.

## 2. Releases & Breaking Changes

No releases in the last 24h. 1.18.0 is the current reference version and is the source of most regression reports (see section 5).

Config and API changes in flight:
- [PR #45340](https://github.com/langgenius/dify/pull/45340): adds OpenAPI delete endpoints for custom models and model credentials.
- [PR #39878](https://github.com/langgenius/dify/pull/39878): improves the error message when `AGENT_BACKEND_BASE_URL` is unset. The standard Docker Compose stack doesn't ship the Agent backend, so Agent v2 nodes fail with a generic error.
- [Issue #45234](https://github.com/langgenius/dify/issues/45234): requests an optional shared-secret signature check for webhook triggers. Today the trigger URL alone authorizes execution.
- [Issue #42075](https://github.com/langgenius/dify/issues/42075) (closed): proposal to extend the `openapi` group for IaC integration.

## 3. New Model & Hardware Support

Nothing new landed. Related items:
- [Issue #45317](https://github.com/langgenius/dify/issues/45317): on 1.18.0, structured output fails with `stage=capability` for models that don't declare the `structured-output` feature. This affects custom or OpenAI-compatible model setups.
- [PR #39478](https://github.com/langgenius/dify/pull/39478): the agent runner gates file input on the `VISION` feature alone, so models without it (e.g. qwen-long) silently drop uploaded documents. The PR filters by type-specific model feature instead.
- [Issue #41092](https://github.com/langgenius/dify/issues/41092): Claude extended thinking. Signed or encrypted thinking blocks are dropped between Agent tool-use rounds, which causes 400 errors.

## 4. Performance & Optimization

No benchmarks with concrete numbers were reported today.
- [Issue #45323](https://github.com/langgenius/dify/issues/45323): after upgrading from 1.15.0 to 1.18.0, LLM node execution is noticeably slower. It has 6 comments and no root cause yet.
- [PR #45348](https://github.com/langgenius/dify/pull/45348): test-only regression coverage for provider prefix-cache reuse across compaction turns (refs [#44826](https://github.com/langgenius/dify/issues/44826)). This guards prompt-cache hit rates, which affect cost and latency.
- [PR #39321](https://github.com/langgenius/dify/pull/39321): the MCP client now tries streamable-http first. Previously, URLs not ending in `mcp` or `sse` tried SSE first and could hang for the default 300s `sse_read_timeout`.

## 5. Stability & Regressions

Ranked by severity:

1. **Non-terminating splitter.** [#45275](https://github.com/langgenius/dify/issues/45275): `TokenTextSplitter` hangs forever with unbounded memory when `chunk_overlap >= chunk_size`. A fix is in [PR #45276](https://github.com/langgenius/dify/pull/45276), which rejects such configs.
2. **1.18.0 LLM node slowdown.** [#45323](https://github.com/langgenius/dify/issues/45323). No fix PR yet.
3. **Missing traces.** [#45251](https://github.com/langgenius/dify/issues/45251): Agent and Chatflow logs no longer show node-level traces (workflow, knowledge retrieval, tool calls). No fix PR yet.
4. **Structured output.** [#45317](https://github.com/langgenius/dify/issues/45317): `stage=capability` failure on 1.18.0. No fix PR yet.
5. **Indexing crash.** [#45272](https://github.com/langgenius/dify/issues/45272): `IndexError` in parent-child FULL_DOC mode when extraction yields zero documents. Fix: [PR #45273](https://github.com/langgenius/dify/pull/45273).
6. **dify-agent runtime bugs**, all from the same reporter:
   - [#45299](https://github.com/langgenius/dify/issues/45299): usage of the in-flight request is lost on stop or stream abort.
   - [#45277](https://github.com/langgenius/dify/issues/45277): plugin tool file parameters resolve to the external files URL instead of the internal one.
   - [#45296](https://github.com/langgenius/dify/issues/45296) (closed): plugin tool observations repeat JSON output that already arrived as text.
7. **Cot agent parser.** [#45324](https://github.com/langgenius/dify/issues/45324): `CotAgentOutputParser` overwrites `action_name` with non-input keys and collapses multi-block code fences.
8. **Custom tools.** [#44850](https://github.com/langgenius/dify/issues/44850): a custom tool schema without `servers` raises `KeyError` instead of an actionable error.
9. **App templates.** [#45289](https://github.com/langgenius/dify/issues/45289): app creation writes a workspace default model into the process-global app template.
10. **Timestamps.** [PR #45346](https://github.com/langgenius/dify/pull/45346) fixes naive-UTC datetimes serialized with `.timestamp()` in knowledge details, which produced wrong times on non-UTC servers.
11. **Prompt Generator.** [#45217](https://github.com/langgenius/dify/issues/45217) (closed): Apply no longer adds the generated variables. This was a 1.18.0 regression.
12. **UI issues.** [#45291](https://github.com/langgenius/dify/issues/45291): the agent resource access page loses its sidebar on refresh. [#45309](https://github.com/langgenius/dify/issues/45309) (closed): the Knowledge view switcher loses keyboard focus.

Also pending: [PR #39473](https://github.com/langgenius/dify/pull/39473) replaces a generated column with a partial unique index. The generated column breaks PostgreSQL deployments with `wal_level=logical`.

## 6. What This Means for Application Developers

- **Hold off on 1.15 → 1.18 upgrades** in latency-sensitive workflows until [#45323](https://github.com/langgenius/dify/issues/45323) is triaged. Benchmark LLM node latency in staging first.
- **Structured output:** if you use custom or OpenAI-compatible models, declare the `structured-output` feature explicitly in the model config. Otherwise you may hit the `stage=capability` failure ([#45317](https://github.com/langgenius/dify/issues/45317)).
- **RAG pipelines:** validate that `chunk_overlap < chunk_size` before indexing, because the current code can hang a worker ([#45275](https://github.com/langgenius/dify/issues/45275)). Guard against empty extraction results in parent-child mode until [#45273](https://github.com/langgenius/dify/pull/45273) merges.
- **Self-hosted Agent v2:** `AGENT_BACKEND_BASE_URL` must point at a separately deployed Agent backend. The default Compose stack doesn't include one.
- **Webhook triggers:** treat trigger URLs as secrets, since there is no signature verification yet ([#45234](https://github.com/langgenius/dify/issues/45234)). Put an authenticating gateway in front if the endpoint is public.
- **Claude extended thinking with Agent tools** can fail with 400s across tool rounds ([#41092](https://github.com/langgenius/dify/issues/41092)). Disable thinking on those agents for now.
- **MCP servers** on non-standard paths may suffer long connect hangs ([#39321](https://github.com/langgenius/dify/pull/39321)). Use a URL ending in `/mcp` or `/sse` as a workaround.
- **Observability:** don't rely on node-level traces in Logs for 1.18.0 Agent and Chatflow apps ([#45251](https://github.com/langgenius/dify/issues/45251)). Use external tracing if you need them.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-03

## 1. Today's Highlights
No release shipped in the last 24h. Activity centers on a Rust forwarding gateway stack (PRs #49604–#49607) and MCP/A2A hardening. Two billing-correctness reports stand out: provider-reported `usage.cost` being trusted as USD (#48398) and v3 rate limiter TPM counters outliving their window (#49675).

## 2. Releases & Breaking Changes
No releases in the last 24h.

Release hygiene issues remain open: GHCR images `v1.94.1` and `v1.95.0` have no matching git tag or GitHub Release ([#35683](https://github.com/BerriAI/litellm/issues/35683), [#35684](https://github.com/BerriAI/litellm/issues/35684)). This affects cosign-verification workflows.

## 3. New Model & Hardware Support
- **Keenable search provider**: PR [#49671](https://github.com/BerriAI/litellm/pull/49671) adds Keenable to `/v1/search`, with a public tier that needs no API key.
- **Hugging Face rerank**: PR [#49681](https://github.com/BerriAI/litellm/pull/49681) requires an explicit TEI or Inference Endpoint URL, because the serverless host is retired.
- **Dependency**: PR [#49056](https://github.com/BerriAI/litellm/pull/49056) allows `huggingface-hub` 2.x (cap widened to `<3.0`; the lock stays at 1.32.0).
- **A2A SDK**: Issue [#49570](https://github.com/BerriAI/litellm/issues/49570) asks to bump `a2a-sdk` 1.1.0 → 1.3.0 so agents sending newer fields are accepted.
- **Guardrails**: PR [#49224](https://github.com/BerriAI/litellm/pull/49224) adds a CollieAi guardrail (observe-only by default, with optional block mode).
- **Vertex AI Claude**: Issue [#49645](https://github.com/BerriAI/litellm/issues/49645) requests serializing `messages` after `system`/`tools` in the request body.

## 4. Performance & Optimization
- **Rust forwarding gateway stack (no benchmark numbers yet)**:
  - [#49604](https://github.com/BerriAI/litellm/pull/49604) adds `LITELLM_FORWARD_UPSTREAM` mode. It streams requests to the Python proxy on loopback and keeps Python's auth and routing.
  - [#49605](https://github.com/BerriAI/litellm/pull/49605) ships a platform wheel with the proxy extra.
  - [#49606](https://github.com/BerriAI/litellm/pull/49606) adds an opt-in supervisor that owns both processes and the socket.
  - [#49607](https://github.com/BerriAI/litellm/pull/49607) adds container and Helm opt-in.
- **Credential sync**: Issue [#43922](https://github.com/BerriAI/litellm/issues/43922) reports O(n²) credential sync with `store_model_in_db`. It blocks the event loop for 10s or more per reload with thousands of credentials. No fix PR is listed.

## 5. Stability & Regressions
Ranked by severity:

1. **Cost overbilling** — [#48398](https://github.com/BerriAI/litellm/issues/48398): provider `usage.cost` is trusted as USD without validation, producing up to 1,000,000× overbilling (proxy 1.106.3). No fix PR is listed.
2. **Rate limiter** — [#49675](https://github.com/BerriAI/litellm/issues/49675): v3 limiter on Redis rejects keys or teams below `tpm_limit` after upstream 429s. No fix PR is listed.
3. **Budget accounting** — [#49603](https://github.com/BerriAI/litellm/pull/49603) fixes an evicted key or team budget window losing spend after `/key/update`. [#49214](https://github.com/BerriAI/litellm/pull/49214) fixes empty `end_user_id` on batch spend logs.
4. **Spend log loss** — [#49651](https://github.com/BerriAI/litellm/issues/49651): `websearch_interception` drops the first call's SpendLogs row on non-streaming `/v1/messages` (request_id collision).
5. **Security (SSRF)** — [#49622](https://github.com/BerriAI/litellm/issues/49622): A2A push URL validation is skipped for inline `pushNotificationConfig` in `message/send`. Fix PR: [#49637](https://github.com/BerriAI/litellm/pull/49637).
6. **MCP errors** — [#49359](https://github.com/BerriAI/litellm/issues/49359): `is_error` is dropped from MCP failures and does not reach Anthropic `tool_result`. Fix PR: [#49624](https://github.com/BerriAI/litellm/pull/49624).
7. **Pass-through** — [#49479](https://github.com/BerriAI/litellm/issues/49479): `pass_through_endpoints` strips `id` from JSON-RPC bodies, which breaks JSON-RPC 2.0.
8. **Guardrails and tools**:
   - [#46922](https://github.com/BerriAI/litellm/pull/46922) fixes guardrails turning Anthropic's `advisor_20260301` into an empty tool, which breaks Claude Code `/advisor`.
   - [#49676](https://github.com/BerriAI/litellm/pull/49676) fixes Presidio output masking re-masking restored values.
9. **Other open bugs**:
   - [#46999](https://github.com/BerriAI/litellm/issues/46999): `/tag/update` returns 500 when the tag has a budget.
   - [#35632](https://github.com/BerriAI/litellm/issues/35632): `/cursor/chat/completions` streaming returns 500.
   - [#35236](https://github.com/BerriAI/litellm/issues/35236): Gemini Flash 3.6 fails with `image_url` in a tool response.
   - [#35645](https://github.com/BerriAI/litellm/issues/35645): `/v1/messages` for DeepSeek maps effort and adaptive thinking to an ignored `budget_tokens`.
   - [#49617](https://github.com/BerriAI/litellm/issues/49617): `langfuse_otel` omits SystemOne answers and token totals.
   - [#49038](https://github.com/BerriAI/litellm/issues/49038): the Interactions spec canary is red.
10. **Closed**: [#47856](https://github.com/BerriAI/litellm/issues/47856) (toolset `tools/list` scope regression) and [#49425](https://github.com/BerriAI/litellm/issues/49425) (unlogged A2A permission 403).

## 6. What This Means for Application Developers
- **Cost tracking**: Don't rely on proxy spend for OpenAI-compatible providers that report `usage.cost`. Cross-check against provider invoices until [#48398](https://github.com/BerriAI/litellm/issues/48398) is fixed.
- **Rate limits**: With the v3 limiter and Redis, expect premature TPM 429s after upstream 429s ([#49675](https://github.com/BerriAI/litellm/issues/49675)). Consider setting `LITELLM_TPM_TOKEN_RESERVATION_ENABLED=false` as a workaround. This is untested, so verify it first.
- **MCP and agents**: Tool failures may not reach the model as errors until [#49624](https://github.com/BerriAI/litellm/pull/49624) lands. Treat A2A push configs sent inline as unvalidated until [#49637](https://github.com/BerriAI/litellm/pull/49637) merges.
- **JSON-RPC via pass-through**: Avoid relying on `id` surviving `pass_through_endpoints` ([#49479](https://github.com/BerriAI/litellm/issues/49479)).
- **Budgets**: A budget denial may soon include `Retry-After` ([#49679](https://github.com/BerriAI/litellm/pull/49679)). Budget rollover is still only a feature request ([#32603](https://github.com/BerriAI/litellm/issues/32603)).
- **Deployment**: The Rust gateway is opt-in and still a pass-through to Python. Don't plan on throughput gains until benchmarks appear.
- **Hugging Face rerank**: Set an explicit endpoint URL ([#49681](https://github.com/BerriAI/litellm/pull/49681)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
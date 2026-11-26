# AI Infrastructure Digest 2026-11-27

> Generated: 2026-11-26 17:29 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# Cross-Project Comparison: Dify vs LiteLLM (2026-11-27)

**Coverage caveat:** Only two digests were supplied: Dify (an application and workflow platform) and LiteLLM (an LLM gateway). There was no data for inference engines (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning frameworks (Unsloth). Sections 3, 4 and 5 therefore say what is absent. They don't infer activity for projects I haven't seen.

## 1. Ecosystem Overview

Both projects spent the day on correctness, not new capability. Dify's work was frontend error and cache plumbing plus a long list of validation bugs in Agent V2, the CLI and the SDK. LiteLLM's was billing accuracy, Prometheus identity and provider-translation bugs. Neither digest reports benchmark numbers, new model launches or new hardware backends. The pressure is at the integration layer, where agents, tool calls, thinking signatures and cost accounting cross provider boundaries. LiteLLM shipped a release (v1.108.18) and Dify did not.

## 2. Activity Comparison

Neither digest gives totals. These counts are the unique issues and PRs linked in each digest, so they are approximate.

| Project | Issues referenced | PRs referenced | Release status |
|---|---|---|---|
| Dify | ~30 (about 20 closed, most from one reporter, `Afloat16`) | ~18 (mostly open; a hyoban frontend stack of ~10) | None in 24h; the latest version discussed is v1.20.0 |
| LiteLLM | ~19 (mixed open and closed, many older) | ~8 (several fix PRs, one breaking) | **v1.108.18** shipped (changelog truncated in the data); LTS 1.108.19 queued in #54723 |

- **Dify:** Issue volume is inflated by a batch report against `main` at f6c206b. That batch reads like a sweep, not organic user traffic.
- **LiteLLM:** Most of the issues listed are older tickets, not new ones. Day-specific activity is concentrated in about five PRs (#54719, #54721, #54722, #54723, #54725).

## 3. Model Support Race

There is no meaningful race in these two digests.

- **Dify:** Nothing on models or hardware. Its only adjacent change is Qdrant BM25 ranking for full-text search (#47354).
- **LiteLLM:** It is the only one with model-catalog work.
  - PR #54721 adds `openrouter/google/gemini-4-argon`, `-carbon` and `-neon` to the cost map.
  - PR #51434 adds the ProxyStacks Relay provider as `openai_like`, with 21 models.
  - Issue #36285 asks for Vertex AI RAG Engine as a vector-store provider.
  - PR #43448 (open, `risk:high`) adds a Rust gateway.
- **Who is ahead:** On model breadth, LiteLLM, by default. Engine-level architecture support (new model families, kernels, quantization formats) can't be assessed without the vLLM, SGLang, llama.cpp or Ollama digests.

## 4. Performance Frontier

None of the optimization areas you listed (KV cache, batching, quantization, distributed serving, kernels) appears in these digests. The performance work visible here is at the control plane and concurrency level:

- **Event-loop and worker blocking:**
  - Dify #47222: the API worker freezes during an agent LLM dispatch, stalling co-hosted SSE streams and delaying `workflow_started` by minutes. No fix PR is linked.
  - LiteLLM #54719: moves the JWT `custom_validate` hook off the event loop.
- **Lock contention:** LiteLLM #47579: the Presidio guardrail holds a session lock across HTTP calls, which serializes analyzer and anonymizer calls per process. No fix PR is visible.
- **Streaming reliability:** Dify #47277 (Redis Streams can miss events after an idle read, closed) and #47301 (open 5xx response bodies hold connections, closed).
- **Test infrastructure:** Dify PR #47356 isolates SSRF retry sleeps after a merge-queue timeout.

No numbers were reported by either project, so none of this can be ranked quantitatively.

## 5. Layer Positioning

| Project | Layer | Evidence today |
|---|---|---|
| Dify | Application and agent platform, sitting above the model layer | Workflow editor, Agent V2, MCP, HITL forms, tracing (Langfuse), RAG backends, CLI and SDKs |
| LiteLLM | LLM gateway and proxy, between applications and providers | Provider translation, cost and spend tracking, Prometheus metrics, guardrails (Presidio), JWT auth, MCP session limits |

- **Overlap:** Both handle MCP, tracing and observability, and credential fallback. Dify's #47256 (hosted-credit exhaustion bypasses the custom-credential fallback) is the kind of problem a gateway usually owns.
- **Gaps in this report:** No serving-engine, local-runtime or training layer was supplied, so comparing those layers isn't possible here.

## 6. Trend Signals

1. **Cost accounting is a correctness problem.**
   - Examples: LiteLLM #54722 (billing Anthropic refusals that Anthropic doesn't charge), #46499 (partial spend on mid-stream disconnects) and #46059 (lost watsonx streamed usage).
   - Reconcile gateway spend against provider invoices.
2. **Provider portability is leaky.**
   - Thinking signatures and tool-call IDs don't transfer between providers (LiteLLM #54561, #38270, #48401).
   - Pin a conversation to one provider for now.
3. **Agent V2 is still maturing.**
   - Dify v1.20.0 has open issues: dynamic MCP headers (#47224), Langfuse export dropping whole traces on spans over 1 MiB (#47327) and 502 `binding_create_failed` (#47355).
   - Prefer the legacy Agent or keep tool outputs small if you depend on these.
4. **Observability contracts are shifting.**
   - LiteLLM's breaking Prometheus change (#54725) moves to a canonical deployment identity, so update dashboards and alerts first.
   - Dify is moving the UI to code-based error translation (#47331), so integrations should parse error codes, not message text.
5. **Isolation for streaming workloads.** Dify's worker freeze (#47222) means SSE endpoints shouldn't share workers with agent dispatch until it is fixed.
6. **Security and supply chain.** LiteLLM's LTS line carries the OpenSSL 3.5 backport via #54723, and its image verification uses cosign.

**To make this a true infrastructure-layer comparison**, re-run it with the vLLM, SGLang, llama.cpp, Ollama and Unsloth digests. Sections 3 and 4 would then have real content.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-27

## 1. Today's Highlights
No release today. Activity centers on two things. The first is a large frontend stack from `hyoban` that centralizes request-error translation and automatic cache invalidation. The second is a batch of about 20 bug reports from `Afloat16` against `main` at f6c206b. Most of those reports are already closed. On the stability side, the open reports are about Agent V2 in v1.20.0: dynamic MCP headers, Langfuse trace export, and Dify Agent 502 errors.

## 2. Releases & Breaking Changes
No releases in the last 24h.

Behavior changes in open PRs:
- **Request errors by code**: A cataloged backend error code now shows its translated text instead of the backend's English `message`. [PR #47331](https://github.com/langgenius/dify/pull/47331), [PR #47332](https://github.com/langgenius/dify/pull/47332), and the per-domain migrations [#47333](https://github.com/langgenius/dify/pull/47333), [#47334](https://github.com/langgenius/dify/pull/47334), [#47335](https://github.com/langgenius/dify/pull/47335), [#47336](https://github.com/langgenius/dify/pull/47336).
- **Invalidation fallback**: After every successful console write, the mutation's own domain is refreshed in the background. Per-domain cleanups follow. [PR #47328](https://github.com/langgenius/dify/pull/47328), [#47329](https://github.com/langgenius/dify/pull/47329), [#47343](https://github.com/langgenius/dify/pull/47343), [#47344](https://github.com/langgenius/dify/pull/47344).
- **Human Input (HITL) forms**: New `date` and `datetime` field types across the v1 and v2 pipelines. [PR #47348](https://github.com/langgenius/dify/pull/47348) fixes [Issue #46911](https://github.com/langgenius/dify/issues/46911).
- **Swedish (`sv-SE`) locale**: [PR #46859](https://github.com/langgenius/dify/pull/46859), tracked in [Issue #42448](https://github.com/langgenius/dify/issues/42448).

## 3. New Model & Hardware Support
Nothing on models or hardware backends today. Related backend changes:
- [PR #47354](https://github.com/langgenius/dify/pull/47354): Qdrant full-text search ranked with BM25. Today it is unranked.
- [Issue #47283](https://github.com/langgenius/dify/issues/47283) (closed): IRIS pool settings supplied as environment strings fail before numeric validation.

## 4. Performance & Optimization
No benchmarks with numbers today.
- [Issue #47222](https://github.com/langgenius/dify/issues/47222): The API worker process freezes for the whole duration of an agent LLM dispatch (inner API → plugin daemon). Co-hosted SSE streams stall, and `workflow_started` is delayed by minutes. This is the most significant latency problem reported today, and no fix PR is linked.
- [Issue #47277](https://github.com/langgenius/dify/issues/47277) (closed): Live Redis Streams subscriptions can miss events after an idle read, because `$` keeps being passed to `XREAD`.
- [Issue #47271](https://github.com/langgenius/dify/issues/47271) (closed): Long but valid trace trees hit `RecursionError` during normalization.
- [Issue #47301](https://github.com/langgenius/dify/issues/47301) (closed): CLI device polling leaves 5xx response bodies open across retries, which holds connections.
- [PR #47356](https://github.com/langgenius/dify/pull/47356): Isolates SSRF retry sleeps in tests. A merge-queue run for #47177 timed out because of this.

## 5. Stability & Regressions
Ranked by severity.

**Open**
1. [#47222](https://github.com/langgenius/dify/issues/47222): Worker freeze during agent dispatch (see above). No fix PR.
2. [#47355](https://github.com/langgenius/dify/issues/47355): On v1.20.0, Dify Agent returns HTTP 502 `binding_create_failed` with an empty message. [PR #47230](https://github.com/langgenius/dify/pull/47230) may be related. It reports job details on an empty binding setup error, but it doesn't clearly fix the 502. Treat the link as unconfirmed.
3. [#47256](https://github.com/langgenius/dify/issues/47256): `DifyPreparedPollingLLM` bypasses the `HostedCreditFallbackModelInstance` custom-credential fallback when hosted credits run out. No fix PR.
4. [#47327](https://github.com/langgenius/dify/issues/47327): In Agent V2, oversized spans over the hardcoded 1 MiB delivery limit stop the whole workflow trace from being exported to Langfuse. No fix PR.
5. [#47224](https://github.com/langgenius/dify/issues/47224): Dynamic MCP HTTP headers are not resolved in Agent V2 but work in legacy Agent (v1.20.0). No fix PR.
6. [#46861](https://github.com/langgenius/dify/issues/46861): Plugin provider lists report daemon failures as invalid input.
7. [PR #43241](https://github.com/langgenius/dify/pull/43241) (fix open): Required Number inputs reject `0` in workflow Test Run.
8. [PR #47177](https://github.com/langgenius/dify/pull/47177) (fix open): Reconnecting editor pages can leave stale collaboration sessions in the same workflow room.

**Reported and closed today (all from `Afloat16`)**
- [#47269](https://github.com/langgenius/dify/issues/47269): Archive uploads to KMS-encrypted S3 buckets fail after a successful `PutObject`.
- [#47284](https://github.com/langgenius/dify/issues/47284): Remote Nacos/Apollo JSON mapping settings fail `DifyConfig` validation.
- [#47265](https://github.com/langgenius/dify/issues/47265): Strict evaluation schema normalization rewrites literal JSON values.
- [#47281](https://github.com/langgenius/dify/issues/47281): A serialized chunked trigger request loses its body on replay.
- [#47309](https://github.com/langgenius/dify/issues/47309): Workflow publish depth validation misses longer paths after branches merge.
- [#47311](https://github.com/langgenius/dify/issues/47311): MCP workflow tools skip required input schema validation.
- [#47313](https://github.com/langgenius/dify/issues/47313): Required multi-select tool inputs bypass empty-selection validation.
- [#47315](https://github.com/langgenius/dify/issues/47315): Imported workflows lose saved node positions or keep missing coordinates.
- [#47323](https://github.com/langgenius/dify/issues/47323): Navigating to nested workflow nodes centers on parent-relative coordinates.
- CLI: [#47291](https://github.com/langgenius/dify/issues/47291) (JSON pointer escaping), [#47293](https://github.com/langgenius/dify/issues/47293) (search skips composed and map-value schema descriptions), [#47295](https://github.com/langgenius/dify/issues/47295) (`slow_down` handling violates RFC 8628), [#47297](https://github.com/langgenius/dify/issues/47297) (repeated stdin references read an exhausted stream).
- Node SDK: [#47305](https://github.com/langgenius/dify/issues/47305) (binary bodies enumerated as JSON fields), [#47317](https://github.com/langgenius/dify/issues/47317) (JSON metadata dropped for published pipeline runs).

The issue list doesn't show whether fixes for these closed issues have merged. Check the linked PRs before assuming `main` is clean.

## 6. What This Means for Application Developers
- **Agent V2 on v1.20.0 has gaps.** Dynamic MCP headers don't resolve ([#47224](https://github.com/langgenius/dify/issues/47224)). Langfuse export drops whole traces when one span exceeds 1 MiB ([#47327](https://github.com/langgenius/dify/issues/47327)). Agent runs can fail with 502 ([#47355](https://github.com/langgenius/dify/issues/47355)). If you depend on any of these, stay on the legacy Agent or keep tool outputs small.
- **Co-hosting agents and SSE on one API worker is risky** ([#47222](https://github.com/langgenius/dify/issues/47222)). Until a fix lands, isolate streaming endpoints from agent-dispatch workers.
- **Custom-credential fallback is unreliable** when hosted credits run out ([#47256](https://github.com/langgenius/dify/issues/47256)). Don't rely on automatic failover for hosted-credit exhaustion.
- **Integrations that parse backend error text should switch to error codes.** The UI is moving to code-based translation ([#47331](https://github.com/langgenius/dify/pull/47331)).
- **HITL forms** may gain date and datetime inputs once [#47348](https://github.com/langgenius/dify/pull/47348) merges.
- **Node SDK and CLI users:** several input-handling bugs were reported and closed today (#47305, #47317, #47297). Watch the next release for fixes.
- **Contributor opportunity:** the `good first issue` threads [#45584](https://github.com/langgenius/dify/issues/45584) (use the SQLAlchemy engine), [#45585](https://github.com/langgenius/dify/issues/45585) (reduce `Mock(spec=...)`), and [#45166](https://github.com/langgenius/dify/issues/45166) (pass `Session` into properties) remain active. [PR #46913](https://github.com/langgenius/dify/pull/46913) is progress on #45584.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-27

## 1. Today's Highlights
LiteLLM shipped **v1.108.18**. A 1.108.19 LTS bump is already queued in [#54723](https://github.com/BerriAI/litellm/pull/54723), and it carries the OpenSSL 3.5 backport. Most of the day's activity was billing and cost-accounting correctness (Anthropic refusals, custom pricing on passthrough routes, interrupted streams) plus Prometheus deployment-metric fixes. Cross-provider translation bugs (Bedrock/Vertex thinking signatures, OpenRouter reasoning chunks, Gemini IDs leaking through `/v1/responses`) keep coming in.

## 2. Releases & Breaking Changes
- **v1.108.18**: the release notes in the data are truncated, so the changelog isn't visible here. The only content shown is the cosign image-verification snippet (`ghcr.io/berriai/litellm:v1.108.18`).
- **Next LTS, 1.108.19** ([#54723](https://github.com/BerriAI/litellm/pull/54723), open): the daily LTS patch release on `lts/1.108.x`. It picks up the OpenSSL 3.5 backport (#54428). `enterprise/` and `litellm-proxy-extras/` are unchanged.
- **Breaking, pending**: [#54725](https://github.com/BerriAI/litellm/pull/54725) `fix(prometheus)!` moves deployment metrics to a single canonical deployment identity. The `!` marks it as breaking. Dashboards and alerts keyed on alias-based series labels will likely need updating when it lands.
- **Related deprecation thread**: [#9753](https://github.com/BerriAI/litellm/issues/9753) covers the deprecation of the Prisma Python client. It is stale with 22 comments and still has no migration plan.

## 3. New Model & Hardware Support
- [#54721](https://github.com/BerriAI/litellm/pull/54721) (open) adds `openrouter/google/gemini-4-argon`, `-carbon` and `-neon` to the model cost map. Only `gemini-4-hydrogen` is listed today.
- [#51434](https://github.com/BerriAI/litellm/pull/51434) (open) adds the ProxyStacks Relay provider as an `openai_like` provider with a 21-model cost map.
- [#36285](https://github.com/BerriAI/litellm/issues/36285) is a feature request for Vertex AI RAG Engine as a vector-store provider.
- [#43448](https://github.com/BerriAI/litellm/pull/43448) (open, `risk:high`) adds a Rust gateway with UI, native MCP and shared route lifecycle.

## 4. Performance & Optimization
No concrete benchmark numbers were reported. Relevant items:
- [#54719](https://github.com/BerriAI/litellm/pull/54719) moves the JWT `custom_validate` hook off the event loop and awaits async validators. A slow validator currently blocks the whole worker, health checks included, which can get a healthy pod restarted.
- [#47579](https://github.com/BerriAI/litellm/issues/47579) reports that the Presidio guardrail holds a session lock across the HTTP request. This serializes all analyzer and anonymizer calls per process. It is open with no fix PR visible.
- [#43583](https://github.com/BerriAI/litellm/issues/43583) (closed) reported fire-and-forget audit-log tasks dropping records on worker shutdown.

## 5. Stability & Regressions
Ranked by severity:
1. **Billing and cost accuracy**
   - [#54722](https://github.com/BerriAI/litellm/pull/54722) is a fix PR. LiteLLM priced Anthropic refusals that Anthropic doesn't bill. One example was $0.12 for a refused 1h cache write. Refusals in the bio, frontier_llm and reasoning_extraction categories are still billed.
   - [#54390](https://github.com/BerriAI/litellm/issues/54390) and [#54389](https://github.com/BerriAI/litellm/issues/54389) (both closed) covered custom deployment pricing being ignored on the OpenAI passthrough route and in batch cost tracking.
   - [#46499](https://github.com/BerriAI/litellm/issues/46499) (open) says a client disconnect mid-stream logs only partial spend, while Bedrock bills the full output.
   - [#46059](https://github.com/BerriAI/litellm/issues/46059) (closed) says watsonx streamed usage was lost and replaced by a lower proxy estimate.
2. **Cross-provider and translation correctness**
   - [#54561](https://github.com/BerriAI/litellm/issues/54561) (open): Bedrock Converse rewrites tool root schemas, so signed thinking blocks fail with a 400 when a conversation moves to Vertex.
   - [#38270](https://github.com/BerriAI/litellm/issues/38270) (open): `/v1/responses` leaks Gemini thought signatures and foreign function-call IDs to other providers.
   - [#48401](https://github.com/BerriAI/litellm/issues/48401) (open): streaming drops OpenRouter chunks that carry only `reasoning_details`, such as Claude signatures.
   - [#53716](https://github.com/BerriAI/litellm/issues/53716) (open): `azure_ai` models hit `ContextWindowExceededError` through OpenWebUI.
   - [#47928](https://github.com/BerriAI/litellm/pull/47928) is a fix PR for multi-turn assistant history being dropped on `/v1/responses`.
   - [#47046](https://github.com/BerriAI/litellm/issues/47046) (closed): Gemini context caching reordered the conversation and dropped `system_instruction`.
3. **Security, data and config**
   - [#47605](https://github.com/BerriAI/litellm/issues/47605) (closed): Presidio in `logging_only` mode masked responses returned to the client.
   - [#54467](https://github.com/BerriAI/litellm/issues/54467) (closed): `/team/update` replaced metadata instead of merging it, silently dropping `turn_off_message_logging`.
   - [#35383](https://github.com/BerriAI/litellm/issues/35383) (open): the MCP stateful session cap is bucketed by API key, so shared keys share one 100-session limit.
4. **Observability**
   - [#54725](https://github.com/BerriAI/litellm/pull/54725) is a fix PR for a deployment-state series stuck at 2 after recovery.
   - [#38494](https://github.com/BerriAI/litellm/issues/38494) (closed): `custom_prometheus_metadata_labels` caused a label-count `ValueError` on cooldown.
   - [#53040](https://github.com/BerriAI/litellm/issues/53040) (open): a request for Prometheus outcomes on routed fallback attempts.

## 6. What This Means for Application Developers
- **Cost tracking**: If you use custom pricing, Anthropic refusals, interrupted streams or passthrough routes, reconcile LiteLLM spend against provider invoices. Several of these paths were wrong, and some fixes are only now landing.
- **Moving a conversation between providers** (Bedrock and Vertex, or Gemini and other providers via `/v1/responses`): thinking signatures and tool-call IDs are not portable. Pin a conversation to one provider until [#54561](https://github.com/BerriAI/litellm/issues/54561) and [#38270](https://github.com/BerriAI/litellm/issues/38270) are resolved.
- **Ops**: Plan for the Prometheus identity change in [#54725](https://github.com/BerriAI/litellm/pull/54725) before upgrading. Use the 1.108.x LTS line if you want OpenSSL 3.5. If you run async JWT validators, [#54719](https://github.com/BerriAI/litellm/pull/54719) removes the event-loop blocking risk.
- **Guardrails and MCP**: Presidio throughput is serialized per process, and MCP session limits are per key. Both matter for high-concurrency or shared-key deployments.
- **`trim_messages()`**: [#54442](https://github.com/BerriAI/litellm/issues/54442) says it can split tool calls from their tool responses. Avoid it for agent histories for now.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
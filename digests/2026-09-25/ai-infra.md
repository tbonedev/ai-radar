# AI Infrastructure Digest 2026-09-25

> Generated: 2026-09-25 12:31 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Digest — Cross-Project Comparison (2026-09-25)

## 1. Ecosystem Overview

Today's activity splits cleanly along the stack: **Dify**, an application/orchestration layer product, is absorbing a wave of silent-failure bugs in its retrieval, tracing, and vector-store integrations, while **LiteLLM**, a gateway/proxy layer product, is dealing with genuine security exposure — a credential-leak bug and an access-control bypass, both unpatched as of this digest. Neither project shipped a headline release today; LiteLLM pushed four routine Docker builds with no breaking changes, and Dify shipped no tagged release at all despite heavy issue/PR churn. The common thread across both projects is **silent failure modes** — errors that don't surface to operators or end users, whether that's a dropped context attachment in Dify or a fallback that never triggers in LiteLLM. For teams running production LLM apps, today is a "check your assumptions" day rather than an "upgrade now" day, with the exception of LiteLLM's two open security issues.

## 2. Activity Comparison

| Project | Issues Touched | PRs Touched | New Release | Notable Fix PRs Open |
|---|---|---|---|---|
| Dify | 28 | 39 | None in 24h | 6+ (Vastbase, SMTP, SeekDB, segment links, RBAC, secret masking) |
| LiteLLM | ~15 (referenced) | ~10 (referenced) | 4 Docker builds (v1.104.0-dev.2, v1.100.3, v1.99.4, v1.98.1) | 4 (Nova video, Databricks map, tool-call corruption, MCP re-exec) |

Dify's volume is notably higher and skews toward unresolved reports (14 open regressions vs. ~6 fix PRs), suggesting triage is outpacing fix throughput. LiteLLM shipped more actual releases but left its two most severe issues (credential leak, ACL bypass) without a linked fix.

## 3. Model Support Race

LiteLLM is the only one of the two shipping net-new model/provider support today, and it's ahead by volume:

- **Bedrock Nova Reel / Nova Canvas** — OpenAI-style `/v1/videos` endpoint plus conditioned image editing, with corrected cost-map entries (previously logged as zero spend).
- **Databricks Unity Catalog** — closes a stale-model-map gap for Sonnet 5, registering it under the new `system.ai` routing name while preserving legacy pricing.
- **Two new provider integrations** — Viktor (OpenAI-compatible chat/Responses) and Staan.ai (search).

Dify shipped no new model/provider support today — its activity was entirely maintenance (vector-store parity, bug fixes). This is consistent with the two projects' roles: LiteLLM's value proposition is breadth of provider coverage, so model/provider onboarding is continuous; Dify's model support runs through its plugin system and wasn't touched in this cycle.

**Read:** LiteLLM is ahead on model support velocity today, by default rather than by contest — Dify simply isn't playing that game this cycle.

## 4. Performance Frontier

Optimization effort today is concentrated in **storage/retrieval backends and observability pipelines**, not classic inference-serving levers (no KV-cache, batching, or kernel work surfaced in either project today — expected, since neither is a raw inference engine):

- **Vector-store parity work** (Dify): Vastbase backend rework replacing deprecated HNSW with Graph_Index + BM25 full-text search, closing a feature gap with pgvector/opengauss. TiDB Vector has an open full-text search argument-order bug likely affecting retrieval relevance.
- **Workflow execution overhead** (Dify): an unresolved ~10x per-step overhead regression on token-free Code nodes after publishing larger workflows — a scaling/architecture question, not yet root-caused.
- **Cost-accounting and logging pipeline hardening** (LiteLLM): S3 v2 logger rework — stops infinite retry on terminal errors, adds retry budgets for transient failures, adaptive upload concurrency. This is infra-hygiene work protecting the billing/observability path rather than inference throughput.
- **Cost/routing correctness** (LiteLLM): `compression_savings_spend` and `prompt_caching_savings_spend` permanently reporting $0 under cost-based routing — a data-integrity issue for teams optimizing spend.

**Read:** the optimization pressure right now is on getting retrieval and cost/observability data *correct*, not on raw throughput — both projects are further up the stack than the classic serving-engine performance battles (vLLM/SGLang territory).

## 5. Layer Positioning

| Project | Layer | Core Function | Today's Activity Fits Because |
|---|---|---|---|
| Dify | Application/orchestration | Low-code LLM app builder — workflows, agents, knowledge retrieval | Bugs are in retrieval, workflow execution, and app-facing tracing — the orchestration layer's surface area |
| LiteLLM | Gateway/proxy | Unified API gateway across 100+ LLM providers — routing, auth, cost tracking, fallback | Bugs are in auth/credential handling, cross-provider cost normalization, and fallback logic — the gateway layer's surface area |

The two projects are largely non-overlapping in the stack (orchestration vs. gateway), and today's bug clusters map precisely onto that boundary: Dify's failures are about *what data reaches the model/app*, LiteLLM's are about *which credentials/keys reach the model provider*. Neither project touches inference serving (vLLM/SGLang/llama.cpp territory) or local runtime (Ollama) — worth remembering when reading "AI infra" broadly; these two sit one and two layers above the model-serving layer respectively.

## 6. Trend Signals

- **Silent failure is the dominant bug class across the stack, not a single-project problem.** Dify: dropped context attachments, dropped structured output, dropped trace data. LiteLLM: fallback that never triggers on HTTP-200 quota exhaustion, rate limits that silently stop enforcing once cached. Application/gateway developers should treat "no error thrown" as insufficient evidence of correctness and add independent, out-of-band verification (execution status polling, cost reconciliation against provider dashboards, end-to-end assertions beyond preview/staging parity).
- **Multi-tenant credential isolation is an active weak point at the gateway layer.** LiteLLM's OAuth-token leak and Bedrock passthrough ACL bypass are two independent instances of the same category — scoped-key boundaries not holding under real routing paths. Any team running a shared LiteLLM proxy across tenants/teams should audit logs now rather than wait for patches.
- **Agentic tool-calling correctness is getting dedicated attention.** LiteLLM's parallel-tool-call corruption fix and MCP re-execution guard both target failure modes specific to multi-tool agent loops (stray wrapper tokens, duplicate side-effecting calls) — directly relevant to teams running Claude Code or other MCP-based agents through a LiteLLM proxy; worth upgrading promptly once merged.
- **Cost/spend data reliability remains unresolved across the ecosystem.** Three independent LiteLLM bugs (cache-read double-billing, streaming cost under-reporting, permanently-zero savings fields) mean prompt-caching economics can't be trusted from proxy-reported numbers alone — reconcile against provider billing if cost is load-bearing for your team.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Daily Digest — 2026-09-25

## Today's Highlights
No new release shipped in the last 24h, but issue/PR volume was heavy (28 issues, 39 PRs touched), dominated by silent-failure bugs across knowledge retrieval, observability tracing, and vector-store backends. The most consequential reports are a Cloud-only knowledge retrieval outage ([#42087](https://github.com/langgenius/dify/issues/42087)) and a case where embedding-model changes can leave completed summaries missing from the active vector index ([#42234](https://github.com/langgenius/dify/issues/42234), flagged `review: high`). Several fixes already have PRs open (Vastbase vector store, SMTP send-status, knowledge segment file links), so triage is moving fast even without a tagged release.

## Performance & Optimization
- **10x per-step overhead regression**: [#42928](https://github.com/langgenius/dify/issues/42928) reports workflow runs stalling for minutes on trivial Code nodes (0 LLM tokens involved); per-step overhead grew roughly 10x after publishing a larger workflow. No root cause or fix PR yet — worth watching if you run large workflows.
- **Vastbase vector backend rework**: [PR #42922](https://github.com/langgenius/dify/pull/42922) replaces a deprecated HNSW index and adds Graph_Index + BM25 full-text search to reach parity with the pgvector/opengauss backends (fixes [#42920](https://github.com/langgenius/dify/issues/42920)).
- **TiDB Vector full-text search argument order bug**: [#41822](https://github.com/langgenius/dify/issues/41822) — likely a correctness-affecting perf/relevance issue for TiDB-backed knowledge bases.

## Stability & Regressions
Ranked roughly by severity/blast radius:

1. **[Cloud] Knowledge Retrieval returns empty results in Workflow; Dataset API key endpoint returns 500** — [#42087](https://github.com/langgenius/dify/issues/42087). No fix PR linked yet; affects both workflow execution and the public Dataset API.
2. **`#context_files#` silently empty for published apps, works fine in Studio preview** — [#42277](https://github.com/langgenius/dify/issues/42277). Retrieved knowledge attachments never reach the LLM in production, a hard-to-detect app-breaking regression since it passes preview testing.
3. **Embedding model change can strand completed summaries out of the active vector index** — [#42234](https://github.com/langgenius/dify/issues/42234), tagged `review: high`.
4. **Keyword search silently returns no results for parent-child chunks** — [#40680](https://github.com/langgenius/dify/issues/40680).
5. **Structured output silently dropped** when a model declares the feature but its plugin doesn't implement it — [#40907](https://github.com/langgenius/dify/issues/40907).
6. **Langfuse tracing gap since 1.14.0**: `message_trace` generations created without an observation id, dropping cost/latency data for Chatbot/Agent/Completion apps — [#37824](https://github.com/langgenius/dify/issues/37824).
7. **Workflow node/iteration/loop "finished" trace updates dropped in chat streaming**, root-caused to a missing `-1` index guard in `handleSend` — [#38980](https://github.com/langgenius/dify/issues/38980).
8. **Webhook-triggered long-running workflows fail silently** on cold/unattended production requests but succeed when actively monitored via debug/Test Run — [#42539](https://github.com/langgenius/dify/issues/42539).
9. **Knowledge segment file links left unsigned/corrupted** when link kinds appear out of order or already carry a query string — [#42934](https://github.com/langgenius/dify/issues/42934), fix already up: [PR #42935](https://github.com/langgenius/dify/pull/42935).
10. **SMTP cleanup errors mask real send status** (a QUIT failure can overwrite a successful send result or replace the original exception) — [#42900](https://github.com/langgenius/dify/issues/42900), fix: [PR #42903](https://github.com/langgenius/dify/pull/42903).
11. **SSO login button swallows 5xx/CORS/network errors silently** from `getUserSSOUrl()` — [#38412](https://github.com/langgenius/dify/issues/38412).
12. **Async workflow failure path can poison the SQLAlchemy session on rollback** — [#39514](https://github.com/langgenius/dify/issues/39514), fix proposed in same PR title.
13. **Model load-balancing credential form silently no-ops on Save** — [#42909](https://github.com/langgenius/dify/issues/42909).
14. **SeekDB 1.4 breaks `ob_vector_memory_limit_percentage` lookup** (positional column index shifted) — fix: [PR #42846](https://github.com/langgenius/dify/pull/42846).

Two security-relevant fixes also landed as PRs: masking secrets in app/agent API key list endpoints ([PR #42168](https://github.com/langgenius/dify/pull/42168)) and restoring a missing RBAC decorator on `ToolMCPDetailApi.get` ([PR #41890](https://github.com/langgenius/dify/pull/41890)).

## What This Means for Application Developers
The theme today is **silent failures in the retrieval/agent path** — knowledge attachments, structured output, and trace data can all drop without surfacing an error to the app or the end user. If you have production apps relying on `#context_files#`, structured output plugins, or Langfuse-based cost/latency observability, treat 1.14.0+ behavior as unverified and add your own end-to-end assertions rather than trusting Studio preview parity. Teams on Webhook-triggered long-running workflows should add independent execution monitoring (e.g., polling run status) since failures currently don't surface without active debug-URL observation. If you run large/complex workflows, watch [#42928](https://github.com/langgenius/dify/issues/42928) — the reported ~10x per-step overhead growth could affect latency SLAs even for token-free Code nodes.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-09-25

## Today's Highlights

The standout item today is a credential-leak bug ([#42172](https://github.com/BerriAI/litellm/issues/42172)): requests to `anthropic/<model>` against a third-party `api_base` can send the *client's* Claude subscription OAuth token instead of the deployment's configured `api_key`. Paired with a second access-control gap in Bedrock passthrough routes ([#26399](https://github.com/BerriAI/litellm/issues/26399)), this is a rough day for auth/authz boundaries on the proxy. Elsewhere, four Docker releases shipped (v1.104.0-dev.2 → v1.98.1, all cosign-signed) with no breaking changes surfaced in today's data, and a cluster of streaming/cost-accounting bugs continues to under- or double-bill cached tokens across providers.

## Releases & Breaking Changes

- v1.104.0-dev.2, v1.100.3, v1.99.4, v1.98.1 released; all Docker images cosign-signed per the standard release template. No migration notes or breaking changes surfaced in the fetched changelog excerpts.

## New Model & Hardware Support

- **Bedrock Nova Reel / Nova Canvas**: adds OpenAI-style `/v1/videos` support via a new video handler, plus conditioned image editing (TEXT_IMAGE + conditionImage) for Nova Canvas, with cost-map entries so video spend is no longer logged as zero — [PR #43142](https://github.com/BerriAI/litellm/pull/43142)
- **Viktor provider**: new JSON-configured OpenAI-compatible provider (chat completions + Responses; no audio/image) — [PR #43161](https://github.com/BerriAI/litellm/pull/43161)
- **Staan.ai search provider**: adds native support for the Staan search provider — [PR #42973](https://github.com/BerriAI/litellm/pull/42973)
- **Databricks Unity Catalog**: model map is stale for Sonnet 5 under the new Databricks routing ([#43146](https://github.com/BerriAI/litellm/issues/43146)); fix registers the model under its `system.ai` name while preserving legacy pricing — [PR #43158](https://github.com/BerriAI/litellm/pull/43158)

## Performance & Optimization

- **S3 v2 logger hardening**: stops re-uploading objects that fail with terminal errors (e.g. 403 AccessDenied) forever, adds a retry budget for transient 5xx failures, enforces the queue cap on enqueue instead of after a failed flush, and adapts upload concurrency (previously fixed at 16) — [PR #43022](https://github.com/BerriAI/litellm/pull/43022)
- Cost-based routing with multiple deployments per `model_name` reports `compression_savings_spend` and `prompt_caching_savings_spend` as permanently $0, masking real savings/cost data in spend logs — [#37117](https://github.com/BerriAI/litellm/issues/37117)

## Stability & Regressions

Ranked by severity — security/access-control issues first, then correctness bugs affecting billing/routing, then UX bugs.

1. **Credential leak** — `anthropic/<model>` with a third-party `api_base` forwards the caller's Claude subscription OAuth token instead of the deployment's own `api_key`, regardless of `forward_llm_provider_auth_headers` — [#42172](https://github.com/BerriAI/litellm/issues/42172) (no fix PR yet)
2. **Access-control bypass** — Bedrock passthrough routes (`/bedrock/model/{modelId}/...`) ignore `key.models`/`user.models` allowlists, letting a scoped virtual key call any Bedrock model — [#26399](https://github.com/BerriAI/litellm/issues/26399) (no fix PR yet)
3. **Rate-limit bypass** — per-customer `rpm_limit` stops being enforced once the virtual key is cached — [#39713](https://github.com/BerriAI/litellm/issues/39713)
4. **Budget bypass logic broken** — `_PROXY_MaxBudgetLimiter` blocks zero-cost model calls even when `skip_budget_checks` is set, once a user exceeds `max_budget` — [#29912](https://github.com/BerriAI/litellm/issues/29912)
5. **Internal param leakage → provider 400s** — an internal `model_alias_map` field leaks into Azure request payloads for aliased models, causing `BadRequestError` — [#42409](https://github.com/BerriAI/litellm/issues/42409); fix in progress at [PR #43144](https://github.com/BerriAI/litellm/pull/43144)
6. **Cache-read token double-billing** — `custom_cost_per_token` with `cache_read_input_token_cost` bills Anthropic cache-read tokens twice — [#40006](https://github.com/BerriAI/litellm/issues/40006)
7. **Cost under-reporting on streaming** — Vercel AI Gateway streaming drops `usage.prompt_tokens_details`, so cached tokens get billed at full input rate — [#39088](https://github.com/BerriAI/litellm/issues/39088); related general streaming issue at [#36168](https://github.com/BerriAI/litellm/issues/36168)
8. **Finish-reason mapping gap** — Anthropic's `model_context_window_exceeded` stop reason maps to generic `"stop"`, hiding context-overflow terminations from callers — [#43012](https://github.com/BerriAI/litellm/issues/43012)
9. **Silent 200-OK failures not triggering fallback** — providers like z.ai's Anthropic-compatible endpoint signal quota exhaustion via HTTP 200 + terminal `stop_reason`, which the router doesn't treat as a failure, so `allowed_fails`/cooldown/fallbacks never engage — [#38535](https://github.com/BerriAI/litellm/issues/38535)
10. **Tool-call corruption for agents** — an off-by-one shift can leave a leftover `multi_tool_use.parallel` wrapper after expanding parallel tool calls, causing agents to attempt to invoke a non-existent tool — fixed in [PR #43163](https://github.com/BerriAI/litellm/pull/43163)
11. **MCP tool re-execution on retry** — router retries/fallbacks after a failed call can re-run an already-executed MCP tool, risking duplicate side effects — fixed in [PR #43159](https://github.com/BerriAI/litellm/pull/43159)
12. Minor: Redis caching breaks on v1.93.0 with `TypeError: unexpected keyword argument 'ssl_check_hostname'` — [#34614](https://github.com/BerriAI/litellm/issues/34614); UI can't remove params once added to Model LiteLLM Params — [#23998](https://github.com/BerriAI/litellm/issues/23998); no invite emails sent on user creation — [#20499](https://github.com/BerriAI/litellm/issues/20499)

## What This Means for Application Developers

- **Audit your Anthropic/Bedrock auth paths now.** If you route `anthropic/<model>` through a third-party `api_base` or use Bedrock passthrough with scoped keys, [#42172](https://github.com/BerriAI/litellm/issues/42172) and [#26399](https://github.com/BerriAI/litellm/issues/26399) mean credentials or model access may leak across tenants until patched — worth a manual check of proxy logs.
- **Don't trust cached-token cost figures yet.** Multiple independent bugs ([#40006](https://github.com/BerriAI/litellm/issues/40006), [#39088](https://github.com/BerriAI/litellm/issues/39088), [#37117](https://github.com/BerriAI/litellm/issues/37117)) mean prompt-caching spend numbers are unreliable in both directions (double-billed and under-billed) — reconcile against provider-side billing if cost tracking is load-bearing.
- **Agentic/tool-calling users on Claude Code or MCP gateways**: the parallel-tool-call corruption fix ([PR #43163](https://github.com/BerriAI/litellm/pull/43163)) and MCP re-execution guard ([PR #43159](https://github.com/BerriAI/litellm/pull/43159)) directly address failure modes where agents silently attempt bogus tools or double-fire side-effecting MCP calls — upgrade once merged if you run multi-tool agent loops through LiteLLM.
- If you rely on router-level fallback for providers that fail via HTTP 200 with a terminal `stop_reason` (e.g. z.ai/GLM), be aware fallback currently won't trigger ([#38535](https://github.com/BerriAI/litellm/issues/38535)) — add your own response-body check as a stopgap.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
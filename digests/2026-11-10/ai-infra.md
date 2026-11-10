# AI Infrastructure Digest 2026-11-10

> Generated: 2026-11-10 15:23 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-11-10

**Scope note:** Only two digests were supplied: Dify (LLM application platform) and LiteLLM (LLM gateway). No inference-engine, local-runtime or fine-tuning digests (vLLM, SGLang, llama.cpp, Ollama, Unsloth) were included. Sections 3 and 4 are therefore mostly empty, and I have not filled them with outside knowledge.

## 1. Ecosystem Overview

Today's activity is about correctness and trust, not new capability. LiteLLM shipped v1.108.4 (LTS) while the post-mortem on the compromised v1.107.0 (credential stealer, RCE loader, lookalike repo) was closed. That incident is the clearest supply-chain signal in the data. Both projects are dominated by silent-failure bugs: rate limiters that miscount, spend logged at $0, and RAG extractors that drop data without error. Neither project reported new model launches or benchmark numbers. The work is in hardening the layers above the model.

## 2. Activity Comparison

Counts are the issues and PRs cited in each digest, not repository totals. Treat them as relative signals only.

| Project | Layer | Issues cited | PRs cited | Release status |
|---|---|---|---|---|
| Dify | App/workflow platform | ~24 (about 10 closed) | ~10 | None in last 24h |
| LiteLLM | LLM gateway/proxy | ~21 (about 13 closed) | ~14 | **v1.108.4 (LTS)**; notes truncated in source |

- Dify's issue load is mostly new, open reports. One author (lianbie) filed a batch of RAG correctness bugs.
- LiteLLM's items are mostly older issues closed today, plus a few open rate-limit bugs and a wave of open fix PRs.

## 3. Model Support Race

There is no clear leader, because no new models shipped in either project.

- **LiteLLM** changes the provider surface:
  - OpenAny, a JSON-configured OpenAI-compatible provider ([#50924](https://github.com/BerriAI/litellm/pull/50924)).
  - A move to GA `output_config.format` for Anthropic structured output ([#21635](https://github.com/BerriAI/litellm/pull/21635)).
  - Gateway workflows exposed as `model="workflow/<name>"` ([#50384](https://github.com/BerriAI/litellm/pull/50384)).
  - The most upvoted item (45 👍) asks for multiple ChatGPT OAuth accounts per instance ([#23777](https://github.com/BerriAI/litellm/issues/23777), closed).
  - Qwen3-TTS on vLLM through `/v1/audio/speech` remains broken ([#20078](https://github.com/BerriAI/litellm/issues/20078)).
- **Dify** reported nothing on model or hardware support.
- **Reasoning-model compatibility** is where model-related work is concentrated. LiteLLM closed several thinking-block and reasoning-translation bugs covering Bedrock, `chatgpt/` and `/v1/messages`.

## 4. Performance Frontier

No KV-cache, batching, quantization, distributed-serving or kernel work appears in either digest, and no throughput or latency numbers were reported. The only performance items are small:

- **Dify**
  - Kombu 5.7.0 to fix a Redis BRPOP CPU spin in Celery workers ([#45939](https://github.com/langgenius/dify/issues/45939)).
  - Short-lived SQLAlchemy sessions to cut connection hold time ([PR #46009](https://github.com/langgenius/dify/pull/46009)). No measurements.
  - CI sharding ([#46008](https://github.com/langgenius/dify/pull/46008)).
- **LiteLLM**
  - Spend-log re-keying to stop dropped rows ([#41273](https://github.com/BerriAI/litellm/pull/41273)).
  - Reuse of pre-built UI artifacts in Docker builds ([#29092](https://github.com/BerriAI/litellm/pull/29092)).

Both are control-plane and CI optimizations. Engine-level performance news needs a different set of digests.

## 5. Layer Positioning

| Aspect | Dify | LiteLLM |
|---|---|---|
| Layer | Application/workflow platform: RAG, agents, workflow nodes, plugins | Gateway: unified API across providers, auth, budgets, rate limits, spend tracking |
| Relationship to engines | Consumer, via providers | Consumer, via providers, and sits in front of engines such as vLLM |
| Main risk surface | Data ingestion integrity, retrieval quality, workflow state | Limiter and cost accuracy, protocol translation, supply chain |
| Typical failure | Silent data loss (empty `node_ids=[]` wipes a dataset index, [#45988](https://github.com/langgenius/dify/issues/45988)) | Silent over-rejection or under-billing (TPM counters outliving their window, [#49675](https://github.com/BerriAI/litellm/issues/49675)) |

Neither project is a serving engine, local runtime or training framework. The comparison is app platform against gateway, and the two are complementary rather than competing.

## 6. Trend Signals

1. **Supply-chain security is now an operational requirement.** LiteLLM's v1.107.0 incident led to PyPI removal, re-pointed Docker tags, cosign verification and a recommendation to pin by digest or use `lts`. Gateways hold provider credentials, which makes them high-value targets.
2. **Cost and rate-limit accuracy is the gateway's main weak point.** Open and recently closed issues cover v3 limiter counting, cache lifecycle, streamed requests logged at $0, and cache-token pricing. Spend dashboards should not be trusted without reconciliation against provider invoices.
3. **Silent partial failure is the dominant bug class.** Dify's Notion, Excel, CSV and QA-pair extractors can index incomplete content without error. Retrieval is also off in places: Weaviate parent-child retrieval returns fewer results than Top K, and hybrid scoring mixes full-text and vector scores.
4. **Reasoning and thinking-block translation is an ongoing integration cost.** LiteLLM fixed several `/v1/messages` bugs today, and more fix PRs are open.
5. **Concurrency and state races are surfacing.** Examples are the OAuth context consumed more than once ([#46002](https://github.com/langgenius/dify/issues/46002)) and lost prompt edits in collaborative editing ([#45992](https://github.com/langgenius/dify/issues/45992)).

**What application developers should do:**
- Pin gateway versions by digest and verify signatures.
- Test rate limits empirically, especially TPM limits with the v3 limiter.
- Audit spend logs against provider invoices.
- Spot-check chunk counts after RAG ingestion.
- Avoid passing empty node lists to Dify's cleanup paths until #45988 is fixed.
- Re-test tool-call loops if you proxy reasoning models.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-10

Note: Dify is an LLM app platform, not an inference engine. Sections 3 and 4 therefore have little to report, and I've marked them as such rather than padding them.

## 1. Today's Highlights
No release shipped in the last 24h. Activity was dominated by bug reports and fix PRs on the RAG pipeline (data loss and silent-drop bugs in extractors and index cleanup), workflow reliability (timeout reasons, lost prompt edits, collaboration reconnects), and a large web-test refactor push by hyoban. A single-author batch of RAG correctness issues (lianbie) includes one potentially destructive bug: `clean(node_ids=[])` wipes an entire dataset index.

## 2. Releases & Breaking Changes
None in the last 24h. Issue #45200 is tagged 1.18.0 and #45975 reports against 1.15.0, so multiple versions are still in the field.

## 3. New Model & Hardware Support
Nothing reported today. The only adjacent item is [#45744](https://github.com/langgenius/dify/issues/45744) (closed), which proposed using `ExposeService` in the OpenShell sandbox provider.

## 4. Performance & Optimization
No benchmark numbers in today's data. Related items:
- [#45939](https://github.com/langgenius/dify/issues/45939) (closed): bump Kombu to 5.7.0 to fix a Redis BRPOP CPU spin in Celery workers. Relevant if you see idle worker CPU burn.
- [PR #46008](https://github.com/langgenius/dify/pull/46008): shards web browser tests into a 2-way matrix to cut CI time (CI only, not runtime).
- [#45584](https://github.com/langgenius/dify/issues/45584) and [PR #46009](https://github.com/langgenius/dify/pull/46009): move to short-lived SQLAlchemy sessions, which should reduce connection hold time (no measurements given).

## 5. Stability & Regressions
Ranked by severity.

**Data loss and integrity**
1. [#45988](https://github.com/langgenius/dify/issues/45988): an empty `node_ids=[]` is treated like `None`, so `vector.delete()` removes every vector in the dataset. No fix PR in the data.
2. [#45982](https://github.com/langgenius/dify/issues/45982): Notion nested block fetch failures are swallowed, so pages are indexed partially. No fix PR listed.
3. [#45985](https://github.com/langgenius/dify/issues/45985): QA pairs are dropped when a question wraps across lines.
4. [#45976](https://github.com/langgenius/dify/issues/45976): Excel sheets with the header below row 10 are skipped silently.
5. [#45959](https://github.com/langgenius/dify/issues/45959): the CSV extractor trims cell whitespace.

**Retrieval quality**
- [#45975](https://github.com/langgenius/dify/issues/45975): with Weaviate on 1.15.0, parent-child retrieval returns 13 results at Top K 50. An active-document prefilter improves this (related #40457).
- [#45953](https://github.com/langgenius/dify/issues/45953): hybrid "Weighted Score" feeds full-text scores (ts_rank, BM25, MATCH AGAINST) in as vector similarity, which skews ranking.

**Workflow and runtime**
- [#45995](https://github.com/langgenius/dify/issues/45995): a workflow timeout is reported as "User requested stop". Fix: [PR #45998](https://github.com/langgenius/dify/pull/45998).
- [#45992](https://github.com/langgenius/dify/issues/45992): the LLM node prompt is lost after continuous edits, because edits are dropped while collaboration is not ready. Fix: [PR #46004](https://github.com/langgenius/dify/pull/46004). Related: [PR #45981](https://github.com/langgenius/dify/pull/45981) preserves collaborative drafts across reconnects.
- [#46006](https://github.com/langgenius/dify/issues/46006): the HTTP request node cannot set parameters. Four comments, no fix yet.
- [#45993](https://github.com/langgenius/dify/issues/45993): the Code node gives no default-value editor for integer outputs under the default-value error strategy.
- [PR #45927](https://github.com/langgenius/dify/pull/45927) (closed): enforces MCP request deadlines, because `send_request` restarts `queue.get` after every `Empty`.

**Security and auth**
- [#46002](https://github.com/langgenius/dify/issues/46002): an OAuth proxy context can be consumed more than once concurrently. Fix: [PR #46001](https://github.com/langgenius/dify/pull/46001), which uses Redis `GETDEL` for Trigger, Tool Provider and Datasource OAuth.
- [#45979](https://github.com/langgenius/dify/issues/45979): permission errors when a Normal member opens an app's Access Point page.

**Monitoring**
- [#45935](https://github.com/langgenius/dify/issues/45935): monitoring misses messages from the last minute of the day. Fix: [PR #45793](https://github.com/langgenius/dify/pull/45793), which includes the selected end date.

**Other**
- [PR #44842](https://github.com/langgenius/dify/pull/44842): re-signs expired file preview URLs in workflow run logs.
- [PR #45748](https://github.com/langgenius/dify/pull/45748): plugin upgrades no longer abort when marketplace telemetry fails.
- Closed today: [#42987](https://github.com/langgenius/dify/issues/42987) (webhook file upload in async workflows), [#45200](https://github.com/langgenius/dify/issues/45200) (ReAct agent on malformed action JSON), [#45531](https://github.com/langgenius/dify/issues/45531) (`is_valid_trace_id` bypassing the length limit), [#45611](https://github.com/langgenius/dify/issues/45611) (`/v1` appended after the query string) and [#43333](https://github.com/langgenius/dify/issues/43333) (URL suffix handling).
- Open URL-handling issues from the same author: [#45956](https://github.com/langgenius/dify/issues/45956) and [#45958](https://github.com/langgenius/dify/issues/45958). Their bodies are unresolved local file paths, so the actual content is missing.

## 6. What This Means for Application Developers
- **Audit knowledge-base cleanup paths** before upgrading or scripting against them. Avoid passing empty node lists to cleanup until #45988 is fixed.
- **Check ingestion coverage.** Notion, Excel (header below row 10), QA-format and CSV sources can silently produce partial or altered content, so spot-check chunk counts after indexing.
- **Weaviate users with parent-child retrieval** may see far fewer results than Top K. Check #45975 and test your own recall.
- **Hybrid search weighting** may not behave as the UI suggests (#45953), so validate against a labelled query set.
- **Timeout handling:** don't rely on the "User requested stop" reason to distinguish user cancels from watchdog timeouts until #45998 lands.
- **Collaborative editing:** save and verify LLM node prompts after quick edits until #46004 is merged.
- **OAuth integrations:** the replay window is narrow, but #46001 closes it.
- **Self-hosters running Celery on Redis:** consider the Kombu 5.7.0 bump from #45939.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-11-10

## 1. Today's Highlights

LiteLLM shipped **v1.108.4 (LTS)**. The most significant ongoing thread is the post-mortem on the compromised **v1.107.0** supply-chain incident (#47826, now closed). Rate limiting and spend tracking dominate the bug reports, especially v3 limiter counting errors, per-customer RPM limits, and streamed requests logged at $0. Reasoning and thinking-block translation on `/v1/messages` also shows up repeatedly.

## 2. Releases & Breaking Changes

- **[v1.108.4 (LTS)](https://github.com/BerriAI/litellm/releases/tag/v1.108.4)**: The `lts` image tag tracks the latest LTS patch (`ghcr.io/berriai/litellm:lts`). The release notes include a `cosign verify` step pinned to a specific `cosign.pub` commit. The notes were truncated in the source data, so I can't list the changelog contents.
- **Security notice, [#47826](https://github.com/BerriAI/litellm/issues/47826) (closed, 34 comments, 20 👍):** v1.107.0 was reported compromised, with a `cook.pth` credential stealer and a `sitecustomize` RCE loader. It was built from a lookalike repo, `Berri-AI/litellm`.
  - PyPI removed 1.107.0 on 2026-10-21.
  - The `latest`, `main-latest` and `main-stable` Docker tags on ghcr.io and docker.io were re-pointed away from the malicious image.
  - **Action:** if you ever installed or pulled 1.107.0, rotate all credentials reachable from that environment. Verify image signatures with cosign, and prefer pinning digests or the `lts` tag.

## 3. New Model & Hardware Support

No new model launches appear in the data. Provider-surface changes in flight:

- [#50924](https://github.com/BerriAI/litellm/pull/50924): adds **OpenAny** as a JSON-configured OpenAI-compatible provider.
- [#50384](https://github.com/BerriAI/litellm/pull/50384): LiteFlow gateway workflows. Team-scoped registration, publication and traces, with execution via Chat Completions as `model="workflow/<name>"`.
- [#21635](https://github.com/BerriAI/litellm/pull/21635): migrates Anthropic structured output from `output_format` to GA `output_config.format`.
- [#23777](https://github.com/BerriAI/litellm/issues/23777) (closed, 45 👍): request for multiple ChatGPT OAuth accounts per instance. It is the most upvoted item today.
- [#20078](https://github.com/BerriAI/litellm/issues/20078) (open): `/v1/audio/speech` against Qwen3-TTS on vLLM requires `voice` and strips custom parameters.

## 4. Performance & Optimization

No throughput or latency numbers were reported. Related work:

- [#29092](https://github.com/BerriAI/litellm/pull/29092): reuses pre-built UI artifacts in Docker builds to speed up CI.
- [#41273](https://github.com/BerriAI/litellm/pull/41273): re-keys spend-log rows so servers that reuse a completion id no longer cause dropped log rows.

## 5. Stability & Regressions

Ranked by severity.

1. **Rate limiting correctness (open):**
   - [#49675](https://github.com/BerriAI/litellm/issues/49675): the v3 limiter's TPM counter outlives its window after upstream 429s. With Redis and TPM reservation on (the default), keys and teams are rejected below `tpm_limit`.
   - [#47340](https://github.com/BerriAI/litellm/issues/47340): with in-memory cache, `tpm_limit` never refills and only resets on `/key/update`.
   - [#34140](https://github.com/BerriAI/litellm/issues/34140) (closed): the v3 limiter double-counted per-team per-model limits, halving the effective RPM/TPM.
   - [#39713](https://github.com/BerriAI/litellm/issues/39713) (closed): per-customer RPM limits stop applying once the virtual key is cached.
2. **Auth and budget gaps (all closed):**
   - [#34217](https://github.com/BerriAI/litellm/issues/34217): `/team/delete` left deleted keys auth-valid in the cache.
   - [#34101](https://github.com/BerriAI/litellm/issues/34101): project budgets were missing from the atomic pre-call reservation.
3. **Spend and cost accuracy:**
   - Closed: [#48937](https://github.com/BerriAI/litellm/issues/48937) (streamed requests logged at $0 when upstream reports `usage.cost: 0`), [#47675](https://github.com/BerriAI/litellm/issues/47675) (null `response_cost` for a cross-provider priced row), [#43444](https://github.com/BerriAI/litellm/issues/43444) (price reload wiping DB deployments' cost registrations), [#37823](https://github.com/BerriAI/litellm/issues/37823) (Azure cache reads billed at zero).
   - Open fixes: [#40016](https://github.com/BerriAI/litellm/pull/40016) (Anthropic cache tokens double-counted under custom pricing), [#50925](https://github.com/BerriAI/litellm/pull/50925) (batch cache-read fallback pricing).
4. **Translation and streaming (`/v1/messages`, reasoning):**
   - Closed: [#32357](https://github.com/BerriAI/litellm/issues/32357) (`thinking_delta` streamed inside a text block, giving empty content in Claude Code), [#49046](https://github.com/BerriAI/litellm/issues/49046) (`chatgpt/` drops encrypted reasoning), [#25214](https://github.com/BerriAI/litellm/issues/25214) (Bedrock reasoning drops the first chunk on block transitions), [#42409](https://github.com/BerriAI/litellm/issues/42409) (internal `model_alias_map` leaked to Azure), [#29808](https://github.com/BerriAI/litellm/issues/29808) (`MidStreamFallbackError` not retried on Vertex).
   - Open: [#23741](https://github.com/BerriAI/litellm/issues/23741), where Anthropic returns 400 on `vector_store_ids` ("Extra inputs are not permitted").
   - Open fix PRs: [#40377](https://github.com/BerriAI/litellm/pull/40377) (encrypted reasoning affinity), [#40407](https://github.com/BerriAI/litellm/pull/40407) (reasoning parts typed as `reasoning_text`), [#39962](https://github.com/BerriAI/litellm/pull/39962) (strip `reasoning_details` for Fireworks), [#50927](https://github.com/BerriAI/litellm/pull/50927) (Bedrock Converse cache points on non-PDF documents).
5. **Other:**
   - [#40662](https://github.com/BerriAI/litellm/pull/40662): fixes `extra_headers` leaking into the image-generation JSON body.
   - [#46191](https://github.com/BerriAI/litellm/pull/46191): prompt-injection checks currently skip embedding, transcription and image call types.
   - [#40393](https://github.com/BerriAI/litellm/pull/40393): Helm migrations Job pods match the Service selector.
   - [#36922](https://github.com/BerriAI/litellm/issues/36922) (closed): the proxy failed to start after a FastAPI incompatibility.
   - [#8513](https://github.com/BerriAI/litellm/issues/8513): hardcoded `$` currency in the UI (open).

## 6. What This Means for Application Developers

- **Supply chain:** pin to `v1.108.4`/`lts` by digest, verify with cosign, and audit any environment that touched 1.107.0.
- **Rate limits:** if you use TPM limits with the v3 limiter, expect 429s below your configured limit under upstream 429 conditions (#49675). In-memory cache deployments without Redis may see keys locked out indefinitely (#47340). Check your limits empirically.
- **Spend dashboards:** don't trust streaming and cache-token costs blindly. Audit `LiteLLM_SpendLogs` against provider invoices, especially with custom pricing, Anthropic cache reads, or OpenAI-compatible upstreams that report `usage.cost`.
- **Claude Code and Codex clients:** several `/v1/messages` reasoning and thinking-block fixes landed. Re-test tool-call loops if you proxy reasoning models (GLM, DeepSeek-R1, Bedrock, `chatgpt/`).
- **Anthropic callers:** strip `vector_store_ids` client-side until #23741 is resolved.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
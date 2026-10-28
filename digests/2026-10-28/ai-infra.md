# AI Infrastructure Digest 2026-10-28

> Generated: 2026-10-28 13:47 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-10-28

**Scope:** Only two digests were supplied, Dify (application and orchestration layer) and LiteLLM (gateway layer). There is no data for inference engines (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning (Unsloth), so those parts of the requested sections are marked as gaps instead of filled in.

## 1. Ecosystem Overview

Today's activity at the application and gateway layers is about reliability, not new capability. LiteLLM is dealing with a supply-chain compromise of v1.107.0, which carried a credential stealer on PyPI and in Docker images. It is also fixing silent cost-accounting errors. Dify's 1.18.0 triage is dominated by consistency failures: a single failed DB write or lost Redis reply can cause data loss, stuck runs or duplicate execution. Neither project reported benchmark numbers. Both are working through a backlog of correctness bugs in tool calls, file inputs and provider translation.

## 2. Activity Comparison

Counts are the unique issues and PRs cited in each digest, not repository totals.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | about 29 (about 10 closed) | 8 (open: #44780, #44965, #44970, #44982; #44841, #44967, #44976, #44796 shown closed, merge status unknown) | No release in 24h. 1.18.0 is the version with most open bug reports. |
| LiteLLM | about 29 (about 17 closed) | about 10 (mostly open; #48143 and #32117 closed) | 5 tags: v1.109.0-dev.1, v1.106.5, v1.105.6, v1.104.8, v1.103.10. Notes are truncated to cosign verification blocks. |

Both projects have a similar volume of cited issues. LiteLLM is the one shipping, with four patch releases across stable lines plus a dev build. Dify is in triage with no release.

## 3. Model Support Race

There is no usable signal on new-model or architecture support. Neither digest mentions new architectures, backends or quantization formats.

- **LiteLLM** is the only project with model-catalog changes. Most are pricing and metadata updates, not new capability:
  - A cost-map audit adds retirement dates for OpenAI, Azure AI Foundry and Cerebras ([#48188](https://github.com/BerriAI/litellm/pull/48188), open).
  - Groq Llama 3.3 70B, Llama 3.1 8B Instant and Llama 3.3 70B Specdec pricing entries ([#48143](https://github.com/BerriAI/litellm/pull/48143), closed).
  - Mistral reasoning replay as a thinking chunk ([#48778](https://github.com/BerriAI/litellm/pull/48778), open).
  - Several older model-entry PRs (Qwen 3.7 Max, Bedrock Mantle Gemma 4) were closed without a stated reason.
- **Dify** has no model-support news. Its model-adjacent bug is reasoning replay in Agent apps, where `<think>` tags are replayed literally and models imitate them ([#44964](https://github.com/langgenius/dify/issues/44964)).

Nobody is clearly ahead here. The inference engines that normally lead this race are not in today's data.

## 4. Performance Frontier

Neither digest has any KV cache, batching, quantization, distributed serving or kernel work, and neither has benchmarks. The optimization work that exists is at the platform level:

- **Prompt-cache reuse (gateway):** The ChatGPT provider would derive its upstream session ID from `prompt_cache_key`, so repeat turns reuse one cache ([#42014](https://github.com/BerriAI/litellm/pull/42014), open).
- **Streaming translation:** A fix stops duplicated tool-call arguments when Azure Responses streams are converted to Chat Completions ([#48834](https://github.com/BerriAI/litellm/pull/48834), open).
- **Output control:** Clamping a caller's smaller `max_tokens` to the tier ceiling in the complexity router would avoid over-generation ([#44869](https://github.com/BerriAI/litellm/issues/44869), closed).
- **Ingestion throughput (Dify):** Fixed 30s upload aborts on large RAG documents. An 11 MB PDF failed at about 28.5s while progress was still advancing ([PR #44965](https://github.com/langgenius/dify/pull/44965)).
- **Query performance (Dify):** A missing DB index is being added, but the table is not identified ([PR #44982](https://github.com/langgenius/dify/pull/44982)).
- **CI speed (Dify):** Workflows moved off Depot to GitHub-hosted runners because of queue times, and a 58 MB per-platform Node runtime download was found to slow web setup. Merge status is unclear ([#44967](https://github.com/langgenius/dify/pull/44967), [#44976](https://github.com/langgenius/dify/pull/44976)).

## 5. Layer Positioning

| Layer | Project | Role in today's data |
|---|---|---|
| Application and orchestration | Dify | Workflows, agents, RAG and knowledge ingestion, webhooks, MCP tools. Its failures are state and consistency problems in the app database and queue. |
| Gateway / proxy | LiteLLM | Unified provider API, spend tracking, rate limits, guardrails, Anthropic-protocol compatibility. Its failures are translation, cost-accounting and rate-limit bugs. |
| Serving engines, local runtimes, fine-tuning | Not covered | No data supplied. |

The two are complementary. Dify, or an app like it, sits above a gateway like LiteLLM. Failures at the gateway, such as zeroed spend or dropped tool calls, are inherited by the apps above it.

## 6. Trend Signals

1. **Supply-chain security is now an operational concern for gateways.**
   - The v1.107.0 compromise ([#47826](https://github.com/BerriAI/litellm/issues/47826)) involved a `cook.pth` stealer, a `sitecustomize` RCE loader and a lookalike repo.
   - PyPI removed the package and the Docker tags were repointed.
   - Anyone who ever resolved 1.107.0 should rotate credentials, and releases now ship `cosign verify` commands.
2. **Cost accounting is the weakest part of the gateway layer.** The five cited cost bugs are:
   - Streamed turns billed at zero for unmapped slugs ([#42161](https://github.com/BerriAI/litellm/issues/42161)).
   - Null `response_cost` when a priced row sits under another provider ([#47675](https://github.com/BerriAI/litellm/issues/47675)).
   - The Claude web-search fee missing from streamed usage ([#46365](https://github.com/BerriAI/litellm/issues/46365)).
   - Nebius off by about 10x ([#41782](https://github.com/BerriAI/litellm/issues/41782)).
   - vLLM `cached_tokens` not handled ([#22984](https://github.com/BerriAI/litellm/issues/22984)).
3. **Exactly-once and terminal-state guarantees are weak in orchestration platforms.** Dify 1.18.0 can run a streaming chatflow twice after a lost Redis reply ([#44911](https://github.com/langgenius/dify/issues/44911)). It can leave runs "running" forever ([#44912](https://github.com/langgenius/dify/issues/44912)), save empty answers ([#44909](https://github.com/langgenius/dify/issues/44909)) and lose vectors on same-name re-upload ([#44910](https://github.com/langgenius/dify/issues/44910)). The digest shows no fix PRs for these.
4. **Tool-call and protocol translation is a recurring failure source.** Examples are identical parallel Gemini calls being deduplicated ([#48833](https://github.com/BerriAI/litellm/pull/48833)), Databricks tool-only responses raising `KeyError` ([#48637](https://github.com/BerriAI/litellm/issues/48637)), and `reasoning_effort="none"` not disabling thinking on default-on Claude models ([#47924](https://github.com/BerriAI/litellm/issues/47924)). Reasoning-content handling is inconsistent across Dify, Mistral and Claude.
5. **File and webhook input validation is immature.** Dify does not enforce required File parameters on multipart webhooks ([#44900](https://github.com/langgenius/dify/issues/44900)), and part ordering can cause HTTP 500s ([#44902](https://github.com/langgenius/dify/issues/44902)).

**What agent and application developers should do:**
- Pin versions or digests and verify signatures. Audit whether 1.107.0 ever ran in your environment.
- Make downstream side effects idempotent and don't treat "running" as ground truth.
- Reconcile gateway spend against provider invoices, and add explicit pricing overrides for custom deployments.
- Set thinking and reasoning config explicitly per provider instead of relying on defaults.
- Validate file and webhook inputs yourself, and run the LiteLLM DB in UTC.
- Before relying on any "closed" fix, check release notes. Both digests note that closure doesn't confirm a fix shipped.

**Gap:** For KV cache, batching, quantization, kernel and model-architecture trends, supply the vLLM, SGLang, llama.cpp, Ollama and Unsloth digests.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest: 2026-10-28

Source: [langgenius/dify](https://github.com/langgenius/dify). Dify is an LLM application platform, so this digest reads it as the application and orchestration layer above inference engines.

## 1. Today's Highlights

No release shipped in the last 24h. Activity is concentrated on **1.18.0 bug triage**. Several reports describe state-consistency failures when a single DB write or Redis reply fails mid-run, and there are new reports on MCP tools, file inputs and RBAC. A cluster of test-migration PRs moves mocked sessions to SQLite, tracked by [#44973](https://github.com/langgenius/dify/issues/44973). The team also moved CI off Depot runners because of queue times, and some of that work is already closed.

## 2. Releases & Breaking Changes

No new releases. Most open bug reports are tagged **1.18.0**, so that is the version to watch for regressions.

Behavior to be aware of:
- [#44785](https://github.com/langgenius/dify/issues/44785) (closed): a 401/403 from an upstream behind a CDN that adds a Squid `Via` header was misreported as an SSRF block. [PR #44841](https://github.com/langgenius/dify/pull/44841) was opened to treat only Squid-generated 401/403 as SSRF blocks. It shows as closed in the data, so check whether it merged.
- [#44955](https://github.com/langgenius/dify/issues/44955): a user on 1.16.1 reports that changing the default 600s tool-node timeout has no effect. It is open and has not been confirmed.

## 3. New Model & Hardware Support

Nothing in today's data on new models, backends or quantization formats.

Related feature work:
- [PR #44970](https://github.com/langgenius/dify/pull/44970): Service API endpoint for logical document deletion in the new knowledge-fs. It is `DELETE /v1/knowledge-fs/spaces/{control_space_id}/logical-documents/{document_id}`, requires `expectedRevision`, and uses the existing asynchronous deletion job.
- [PR #44982](https://github.com/langgenius/dify/pull/44982): "add miss index". It is an index/DB change, but the summary doesn't say which table.

## 4. Performance & Optimization

No benchmark numbers were reported.

- CI performance: [PR #44976](https://github.com/langgenius/dify/pull/44976) (closed) attributed most of the slow `Setup web environment` step to pnpm downloading a 58 MB per-platform Node.js runtime. [PR #44967](https://github.com/langgenius/dify/pull/44967) (closed) moved workflows from Depot to GitHub-hosted runners. The data does not say whether either one merged.
- [PR #44965](https://github.com/langgenius/dify/pull/44965): stops aborting new RAG document uploads after a fixed 30s. An 11 MB PDF in production failed at about 28.5s while upload progress was still advancing. This matters for large knowledge ingestion.
- [PR #44982](https://github.com/langgenius/dify/pull/44982): a missing index is being added, which is likely a query-performance fix.

## 5. Stability & Regressions

Ranked by severity. A fix PR is noted only where the data shows one.

**Data loss and consistency (highest severity)**
1. [#44910](https://github.com/langgenius/dify/issues/44910): re-uploading a document under the same name can delete its vectors. One failed DB statement leaves the document "waiting" permanently. No fix PR in the data.
2. [#44909](https://github.com/langgenius/dify/issues/44909): the chat answer is saved empty, and history loses it, if the provider `last_used` update fails after streaming. No fix PR in the data.
3. [#44912](https://github.com/langgenius/dify/issues/44912): a chatflow or workflow run stays "running" forever if the final status write fails, even though the user got the answer. No fix PR in the data.
4. [#44911](https://github.com/langgenius/dify/issues/44911): a lost Redis reply while queueing a streaming chatflow message runs the whole flow twice. That duplicates HTTP requests, LLM calls and conversations, which has cost and side-effect implications. No fix PR in the data.

**Functional bugs**
- [#44742](https://github.com/langgenius/dify/issues/44742) (closed): MCP tools break after being removed and re-added in 1.18.0, with `TypeError: object of type 'NoneType' has no len()`.
- [#44964](https://github.com/langgenius/dify/issues/44964): the Agent app replays reasoning as literal `<think>` tags. Models then imitate them and hallucinate tool calls. This is a correctness problem for reasoning models.
- [#44792](https://github.com/langgenius/dify/issues/44792) (closed): scheduled-workflow Agent file output fails with "ToolFile not found" because the Account is marked as an end-user. [PR #44796](https://github.com/langgenius/dify/pull/44796) preserves caller identity for new executions and is closed, so check whether it merged.
- [#44555](https://github.com/langgenius/dify/issues/44555): CSV batch execution converts checkbox `false` to `true`.
- [#44797](https://github.com/langgenius/dify/issues/44797): an optional file input causes a JS error in a workflow test run. [PR #44780](https://github.com/langgenius/dify/pull/44780) (open, XXL) honors file input defaults and says it also fixes this issue.
- [#44900](https://github.com/langgenius/dify/issues/44900): a required File parameter is not enforced for multipart/form-data webhooks.
- [#44902](https://github.com/langgenius/dify/issues/44902): OpenAPI mixed file-part shapes return HTTP 500 depending on part order.
- [#44918](https://github.com/langgenius/dify/issues/44918): Agent validation skips required strategy inputs declared after tools.
- [#44869](https://github.com/langgenius/dify/issues/44869): `WebMessageListItem` validation error on legacy messages where `retriever_resources` is None.
- [#44598](https://github.com/langgenius/dify/issues/44598): completed Knowledge documents stay locked after being disabled or re-enabled.
- [#44846](https://github.com/langgenius/dify/issues/44846): naive clock values are compared against `time.time()` in annotation import and `sys.timestamp`.
- [#44717](https://github.com/langgenius/dify/issues/44717): the Weekly Schedule Trigger shows Sunday as the next run instead of Monday.
- [#44961](https://github.com/langgenius/dify/issues/44961): with RBAC enabled, resources created by an admin disappear after the admin is demoted to Editor.
- [#44931](https://github.com/langgenius/dify/issues/44931): `crypto.randomUUID is not a function` when adding an Intent Classifier category over non-secure HTTP.
- [#44914](https://github.com/langgenius/dify/issues/44914): suggested questions disappear when a valid question contains `]`.
- [#44856](https://github.com/langgenius/dify/issues/44856) (closed): converting an app to a workflow does not initialize or inherit the WebApp access mode.

**Document extraction**
- [#44904](https://github.com/langgenius/dify/issues/44904): DOCX extraction silently drops embedded images whose part name lacks "image".
- [#44952](https://github.com/langgenius/dify/issues/44952): EML extraction decodes already-parsed email text a second time.

**Search and input handling**
- [#44707](https://github.com/langgenius/dify/issues/44707) and [#44737](https://github.com/langgenius/dify/issues/44737) (both closed): snippet and skill keyword searches treated `%`, `_` and `\` as LIKE wildcards.

**UI and accessibility**
- [#44854](https://github.com/langgenius/dify/issues/44854): inconsistent widths and Cancel placement in the New RAG Add source forms.
- [#44600](https://github.com/langgenius/dify/issues/44600): filter labels fail WCAG AA contrast. Marked deferred.

## 6. What This Means for Application Developers

- **Don't assume exactly-once execution on 1.18.0.** [#44911](https://github.com/langgenius/dify/issues/44911) can run a streaming chatflow twice after a Redis hiccup. Make downstream HTTP calls and side effects idempotent.
- **Don't trust "running" status as ground truth.** Because of [#44912](https://github.com/langgenius/dify/issues/44912), poll for the answer or use timeouts rather than waiting for a terminal state. Also be aware that history may be incomplete ([#44909](https://github.com/langgenius/dify/issues/44909)).
- **Be careful re-uploading documents under the same name.** Until [#44910](https://github.com/langgenius/dify/issues/44910) is resolved, expect the possibility of lost vectors. Verify the document's indexing status afterward.
- **If you use reasoning models in Agent apps,** watch for imitated `<think>` tags and hallucinated tool calls ([#44964](https://github.com/langgenius/dify/issues/44964)).
- **Validate file and webhook inputs yourself.** Required File parameters are not enforced for multipart webhooks ([#44900](https://github.com/langgenius/dify/issues/44900)). Part ordering can cause 500s ([#44902](https://github.com/langgenius/dify/issues/44902)). Optional file inputs are being fixed in [PR #44780](https://github.com/langgenius/dify/pull/44780).
- **MCP users:** after removing and re-adding a tool, verify that it still works ([#44742](https://github.com/langgenius/dify/issues/44742)). Check whether your build includes the fix.
- **Self-hosters serving the UI over plain HTTP** will hit `crypto.randomUUID` errors in some workflow editor features ([#44931](https://github.com/langgenius/dify/issues/44931)). Use HTTPS or localhost.
- **Large document ingestion:** if you use the New RAG upload path, uploads of large files may fail at about 30s until [PR #44965](https://github.com/langgenius/dify/pull/44965) lands.
- **Fix status:** several issues are marked closed here, but the data doesn't show whether each fix is in a release. Check release notes before relying on it.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-10-28

## 1. Today's Highlights

The security incident around v1.107.0 is still the dominant story. The PyPI package and Docker images were found to carry a credential stealer, and the thread has 34 comments and 20 👍 ([#47826](https://github.com/BerriAI/litellm/issues/47826)). Meanwhile, maintainers shipped a batch of releases across several stable lines, plus a new dev build. Most of today's engineering activity is cost-tracking and spend-accuracy fixes, along with provider translation bugs on Anthropic, Gemini, Databricks and Mistral.

## 2. Releases & Breaking Changes

Five tags landed in the last 24h. The release notes in the data are truncated to the cosign verification block, so I can't summarize their contents:

- [v1.109.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.109.0-dev.1): dev build on the next minor line.
- [v1.106.5](https://github.com/BerriAI/litellm/releases/tag/v1.106.5)
- [v1.105.6](https://github.com/BerriAI/litellm/releases/tag/v1.105.6)
- [v1.104.8](https://github.com/BerriAI/litellm/releases/tag/v1.104.8)
- [v1.103.10](https://github.com/BerriAI/litellm/releases/tag/v1.103.10)

Notes for operators:
- **Supply-chain compromise (v1.107.0):** the report describes a `cook.pth` credential stealer and a `sitecustomize` RCE loader, built from a lookalike repo (`Berri-AI/litellm`). PyPI has removed 1.107.0. The `latest`, `main-latest` and `main-stable` Docker tags were repointed away from the bad image ([#47826](https://github.com/BerriAI/litellm/issues/47826)). Anyone who installed or pulled 1.107.0 should treat their credentials as exposed and rotate them.
- **Verifying images:** each release notes a `cosign verify` command with a pinned public key. The same command works for the `litellm-database`, `litellm-non_root` and `docker.io/litellm/*` images.
- **Backport request:** the eMudhra root CA removal (#47670) is on `main` only. 1.106.x images still trust emSign ECC Root CA - G3 ([#47904](https://github.com/BerriAI/litellm/issues/47904), closed). v1.106.5 may be related, but the data doesn't confirm it.

## 3. New Model & Hardware Support

- **Cost map audit:** a rolling pricing, capability and retirement audit adds provider-announced retirement dates for OpenAI, Azure AI Foundry and Cerebras rows. It also fixes the stale Azure AI Claude Sonnet 5.5 cache-read price ([#48188](https://github.com/BerriAI/litellm/pull/48188), open). Mistral Large 4 list pricing is split into #48825.
- **Groq:** the PR adds Llama 3.3 70B Versatile, Llama 3.1 8B Instant and Llama 3.3 70B Specdec to the cost map ([#48143](https://github.com/BerriAI/litellm/pull/48143), closed).
- **Guardrails:** Patronus Ark and Wolf Defender add local PII, secret and prompt-injection checks ([#48823](https://github.com/BerriAI/litellm/pull/48823), open).
- **Observability:** Mixpanel is proposed as an OpenTelemetry v2 preset over OTLP/HTTP, with US, EU and IN endpoints ([#48638](https://github.com/BerriAI/litellm/pull/48638), open).
- **Mistral:** reasoning is replayed as a thinking chunk, for models that accept it ([#48778](https://github.com/BerriAI/litellm/pull/48778), open).
- **Requests still open:**
  - Cloudflare Workers AI is outdated ([#21115](https://github.com/BerriAI/litellm/issues/21115)). Image and audio PRs sit under stale labels ([#35055](https://github.com/BerriAI/litellm/issues/35055), [#35056](https://github.com/BerriAI/litellm/issues/35056)).
  - QwenCloud migration path for the DashScope provider ([#36150](https://github.com/BerriAI/litellm/issues/36150), closed).
  - Image input on hosted_vllm decision endpoints ([#48574](https://github.com/BerriAI/litellm/issues/48574), closed).
- **Stale PRs closed:** several older model-entry PRs were closed, including Qwen 3.7 Max, Bedrock Mantle Gemma 4, and the Embed Multilingual Light pricing correction ([#32117](https://github.com/BerriAI/litellm/pull/32117)). I can't tell from the data whether they were superseded or abandoned.

## 4. Performance & Optimization

There is little hard performance work in today's data, and no benchmark numbers.

- **Prompt caching:** the ChatGPT provider would derive its upstream session ID from `prompt_cache_key`. Repeat turns would then reuse one session and its cache, where each request currently gets a fresh one ([#42014](https://github.com/BerriAI/litellm/pull/42014), open).
- **Streaming bridge:** a fix stops tool-call arguments being duplicated when Azure Responses streams are translated to `/v1/chat/completions` ([#48834](https://github.com/BerriAI/litellm/pull/48834), open).
- **Complexity router:** a request asks it to clamp a caller's smaller `max_tokens` to the tier ceiling instead of replacing it. This would avoid over-generation ([#44869](https://github.com/BerriAI/litellm/issues/44869), closed).

## 5. Stability & Regressions

Ranked by severity:

1. **Critical, security:** the compromised v1.107.0 artifacts ([#47826](https://github.com/BerriAI/litellm/issues/47826)). PyPI and Docker remediation is done. Credential rotation falls to affected users.
2. **High, silent billing errors:** several cost bugs undercount or zero spend.
   - Streamed turns are billed at 0 when `provider_response_model` is a slug missing from the price map ([#42161](https://github.com/BerriAI/litellm/issues/42161), closed).
   - `response_cost` is null for `custom_llm_provider=anthropic` when the priced row lives under another provider ([#47675](https://github.com/BerriAI/litellm/issues/47675), open).
   - Streamed `usage.cost` omits the Claude web search fee ([#46365](https://github.com/BerriAI/litellm/issues/46365), closed).
   - Nebius cost is off by roughly 10x (~$250 reported vs ~$2,500 real) ([#41782](https://github.com/BerriAI/litellm/issues/41782), open).
   - vLLM `cached_tokens` is not handled in cost calculation ([#22984](https://github.com/BerriAI/litellm/issues/22984), closed).
3. **High, spend logs:** logs are dropped when providers return `id: null`, so `request_id` becomes "None" and collides on the primary key. This was seen with Gemini via Databricks, since v1.99.0 ([#39749](https://github.com/BerriAI/litellm/issues/39749), closed).
4. **Medium, tool-call correctness:**
   - Identical parallel Gemini tool calls were deduplicated, causing 400s. A fix is open ([#48833](https://github.com/BerriAI/litellm/pull/48833)).
   - A Databricks tool-only response raises `KeyError: content` ([#48637](https://github.com/BerriAI/litellm/issues/48637), open).
   - `"[DONE]"` inside tool-call arguments falsely ends a stream ([#31562](https://github.com/BerriAI/litellm/issues/31562), closed).
   - Strict tool fields are forwarded to Bedrock Claude, causing 400s and hangs ([#34388](https://github.com/BerriAI/litellm/issues/34388), closed).
5. **Medium, rate limiting:**
   - `websearch_interception` leaks a `max_parallel_requests` slot on streamed `/v1/messages` ([#46093](https://github.com/BerriAI/litellm/issues/46093), closed).
   - A failed auto-executed MCP tool call freed a request's parallel slot ([#48824](https://github.com/BerriAI/litellm/pull/48824), open).
6. **Medium, Anthropic-compat:**
   - `/v1/messages` streaming via the Chat Completions adapter sends `input_tokens: 0` in `message_start` ([#48481](https://github.com/BerriAI/litellm/issues/48481), closed).
   - `count_tokens` returns 500 for `search_result` and other unlisted block types ([#47952](https://github.com/BerriAI/litellm/issues/47952), closed).
   - Budget reservation falls back to `max_input_tokens` when `tool_choice` is in Anthropic format ([#47396](https://github.com/BerriAI/litellm/issues/47396), closed).
   - `reasoning_effort="none"` omits thinking rather than disabling it on default-on Claude models ([#47924](https://github.com/BerriAI/litellm/issues/47924), open).
7. **Low-medium:**
   - Weighted failover loses to a stale affinity pin ([#32308](https://github.com/BerriAI/litellm/issues/32308), closed).
   - SpendLogs partition boundaries are misaligned when the DB timezone is not UTC ([#34364](https://github.com/BerriAI/litellm/issues/34364), open).
   - A 500 with no message is returned for the Enterprise-only `get_spend_routes` permission ([#47011](https://github.com/BerriAI/litellm/issues/47011), closed).
   - UI issues: the Generic Guardrail API form doesn't render its fields ([#34927](https://github.com/BerriAI/litellm/issues/34927), open), the Logs page fails for request IDs containing `#` ([#32332](https://github.com/BerriAI/litellm/issues/32332), closed), and the MCP form has no `authorization` auth type ([#34763](https://github.com/BerriAI/litellm/issues/34763), closed).
   - Also open: the `enable_background_health_checks` UI option is hard to find ([#35064](https://github.com/BerriAI/litellm/issues/35064)).

## 6. What This Means for Application Developers

- **Pin and verify.** Don't pull `latest` blindly. Pin exact versions or digests and run `cosign verify` with the published key. Check that nothing in your environment ever resolved to 1.107.0. If it did, rotate every credential the host could read.
- **Don't trust LiteLLM spend as ground truth yet.** Several failure modes (unmapped model slugs, streaming, custom provider mappings, Nebius, web search fees) can zero or skew costs. Reconcile against provider invoices, and use explicit pricing overrides for custom `model_name` deployments.
- **Gemini and Databricks agents:** parallel identical tool calls and tool-only responses can currently fail. Watch #48833 and #48637, and add retries or guards until they land.
- **Claude and Anthropic-protocol clients:** `reasoning_effort="none"` does not reliably disable thinking, so set the thinking config explicitly. Don't rely on `message_start` token counts when streaming through the adapter. If you use `max_parallel_requests` together with web search or MCP auto-execution, watch for slot leaks.
- **Multi-tenant proxy operators:** spend-log collisions and partition timezone quirks can lose or misplace audit data. Run the DB in UTC and monitor SpendLogs write errors.
- **Older stable lines:** the 1.103 to 1.106 patch releases are out. Check their full notes before upgrading, because this digest only had the verification blocks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
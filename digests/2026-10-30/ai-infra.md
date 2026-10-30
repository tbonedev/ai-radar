# AI Infrastructure Digest 2026-10-30

> Generated: 2026-10-30 13:56 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-10-30

**Coverage note:** Only two digests were supplied, Dify and LiteLLM. There is no data for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning (Unsloth). Sections 3 and 4 are therefore thin, and I have not filled the gaps from outside the data.

## 1. Ecosystem Overview
Today's activity sits at the application and gateway layers, not the serving-engine layer. Both projects are mostly fixing correctness bugs: billing and cost accounting, timestamps, tool-call translation and auth scoping. Neither shipped a stable release. Both have large pending PRs that change behavior (workspace limits and a tracing rewrite in Dify, scoping and error-label changes in LiteLLM). Agent and reasoning features, such as `<think>` replay, thinking signatures and Responses API reasoning items, are the main source of new regressions. The main risk for teams is operational: spend accuracy, access control and upgrade behavior.

## 2. Activity Comparison

| Project | Layer | Issues (24h) | PRs (24h) | Release status |
|---|---|---|---|---|
| Dify | LLM application platform | 62 (top 30 reviewed) | 388 (top 20 reviewed) | None in the last 24h |
| LiteLLM | LLM gateway / proxy | Not stated in the digest | 405 | `v1.109.0-dev.2` (pre-release; notes only cover cosign image verification) |

- The PR volume is similar. Both digests are sampled, so counts show churn, not shipped changes.
- LiteLLM's digest lists six breaking-flagged PRs, all still open. Dify's digest has no `!` flags, but it lists open PRs with migration or deployment caveats (#45165, #45161, #43201).

## 3. Model Support Race
This section can't rank projects from today's data.

- **LiteLLM** is the only project with model and provider additions:
  - Hostinger Router (#44863).
  - Nace `drex-max` (#48426).
  - A pricing audit adding 94 EmpirioLabs rows plus Gemini batch and Azure flex tiers (#49114).
  - A Bedrock Converse fallback (#43290, closed), so new Bedrock models work before a cost-map entry exists.
  - DeepSeek V4 `reasoning_effort` passthrough (#27439, closed).
  - Open requests for Kimi K3 and Tinker (#33921) and Soniox real-time STT (#43677).
- **Dify** reported nothing on new models, backends or quantization formats.
- No new model architectures, such as MoE or multimodal engine support, appear in the data. Those would show up in the engine projects, which weren't supplied.

LiteLLM is ahead in provider breadth, which is its role. Support there means API-level routing and pricing, not kernel-level execution.

## 4. Performance Frontier
Neither digest has throughput or latency benchmarks. The optimization-related items are about cost, caching and rate limiting at the application level.

- **KV and prefix cache:** Dify's RFC #44826 suspects Agent context compaction invalidates provider prefix caching. The reported hit rate is about 10% against an expected 99%. The measurement method isn't given, so treat it as unverified.
- **Batching and distributed serving, kernels, quantization:** No activity in either digest.
- **Rate limiting:** LiteLLM's Responses TPM reservation counted base64 images as text, which inflated the estimate and caused premature throttling (#47814, closed).
- **Ingestion:** Dify has an opt-in `wolfxl` reader for `.xlsx` (#44849), with no benchmark numbers.
- **Observability:** LiteLLM #48405 fixes the Prometheus `litellm_deployment_state` metric sticking at 2 after a cooldown.

The performance work visible today is about cache effectiveness and accurate resource accounting. Raw speed isn't the focus.

## 5. Layer Positioning

| Aspect | Dify | LiteLLM |
|---|---|---|
| Role | Builds LLM apps and agents: workflows, knowledge bases, tools, MCP | Unified API gateway across providers: routing, auth, spend and guardrails |
| Typical failure modes | Workflow, agent and extractor bugs; timezone handling; deployment issues | Cost accounting; stream and tool-call translation; key and team authorization |
| Upstream dependency | Model providers and, for caching, provider-side prefix caches | Provider APIs (Anthropic, Gemini, Bedrock, OpenAI-compatible, vLLM via `hosted_vllm`) |
| Where each can overlap | Dify is moving billing and SaaS calls onto generated clients and has a per-workspace limit pending (#43201) | LiteLLM has MCP server binding, `/a2a` agent billing and guardrails |

Neither project is a serving engine, local runtime or training framework. The only link to the engine layer is LiteLLM's `hosted_vllm` change (#48393). It preserves vLLM's `stop_reason` and `token_ids` on streamed chunks, and it is open and flagged breaking.

## 6. Trend Signals
1. **Cost and spend correctness is a main reliability problem for gateways.**
   - LiteLLM closed at least five cost bugs today (#16021, #47533, #35829, #38180, #38507).
   - Two remain open: the dropped-usage bug (#36168) and the budget-window race (#49179).
   - Dify's billing work is also moving onto generated clients.
2. **Agent features are producing regressions.**
   - Dify 1.18.0: `<think>` replay (#44964) and a tool-file `mime_type=None` crash (#45086).
   - LiteLLM: Gemini tool-call corruption (#25869), Ollama parallel tool-call merging (#33678) and Anthropic thinking-signature 400s (#48514).
3. **Access control is tightening.** LiteLLM has open breaking PRs on `/health` scoping (#49155) and MCP server binding (#49161). Its quick-start Postgres exposure is being fixed (#49225).
4. **Timezone and serialization bugs recur.** Dify has naive-UTC `.timestamp()` bugs in at least two places (#44987, #44847).
5. **Prefix-cache preservation may become an agent-framework concern.** This is based on one unverified RFC (#44826).

**What agent and application developers should do:**
- Don't hard-block on budget windows or spend reports until LiteLLM's open spend bugs (#36168, #49179) are fixed.
- Test Dify 1.18.0 agents that use reasoning models or tool files before upgrading. Measure prefix-cache hit rate on long sessions.
- Avoid streamed parallel tool calls on Gemini and Ollama via LiteLLM for now. Handle Anthropic `pause_turn` and `refusal` stop reasons explicitly.
- Review LiteLLM's open breaking PRs before upgrading. Pin to a stable release, not `v1.109.0-dev.2`.
- Set `TZ=UTC` on Dify hosts and serve the web UI over HTTPS. After upgrading a Dify knowledge base, rebind your apps yourself (#45161).
- Make tool side effects idempotent, because broker drops can cause duplicate Dify workflow runs (#44911).
- To cover engines, local runtimes and fine-tuning, add the missing vLLM, SGLang, llama.cpp, Ollama and Unsloth digests.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-10-30

Dify is an LLM application platform, not an inference engine, so the hardware and kernel sections are mostly empty today. The data covers 62 issues and 388 PRs updated in the last 24h. I only saw the top 30 issues and top 20 PRs by comment count.

## Today's Highlights
- Maintainers are moving billing and SaaS calls onto generated clients. #45136 and #45144 were closed, and #45145, which enforces the boundary, was closed too. The related education-verification change (#45165) is still open. The knowledge-base upgrade was also changed so it no longer copies app bindings (#45161, closed).
- The 1.18.0 Agent work keeps producing bug reports. They include `<think>` replay (#44964), tool-file extraction failures (#45086) and a "config version not found" toast (#40733).
- Timezone handling is a recurring theme. Naive UTC datetimes are serialized with `.timestamp()` in more than one place (#44987, #44847).

## Releases & Breaking Changes
No releases in the last 24h.

Items to watch:
- **Billing client dependency:** [PR #45165](https://github.com/langgenius/dify/pull/45165) returns education verification as a status-discriminated result (`eligible` / `not_eligible`). It says to merge only after the billing service that returns `status` is deployed. This mainly affects SaaS and enterprise deployments.
- **Knowledge upgrade behavior:** [PR #45161](https://github.com/langgenius/dify/pull/45161) stops copying legacy Dataset app associations into the new KnowledgeFS space. Existing apps stay on the Classic Knowledge Base. They must be reconfigured to use the Agent Knowledge Base. This is a migration caveat. The misleading dialog copy was reported in [#45157](https://github.com/langgenius/dify/issues/45157), and its fix was merged into #45161 after [#45158](https://github.com/langgenius/dify/pull/45158) was superseded.
- **Pending: workspace limit:** [PR #43201](https://github.com/langgenius/dify/pull/43201) (open, size XXL) adds a per-workspace `max_active_requests` limit. It needs an Alembic migration and a new admin settings API. It fixes [#37507](https://github.com/langgenius/dify/issues/37507).
- **Pending: tracing rewrite:** [PR #44673](https://github.com/langgenius/dify/pull/44673) (open, XXL) collapses four overlapping ops-tracing paths into one pipeline behind a minimal provider interface.

## New Model & Hardware Support
None reported today. Nothing in the data covers new models, backends or quantization formats.

## Performance & Optimization
- **Prefix-cache hit rate:** [Issue #44826](https://github.com/langgenius/dify/issues/44826) is an RFC from a user who suspects Agent context compaction invalidates the prefix cache. They report roughly a 10% hit rate against a 99% expectation. The issue has 9 comments. The summary doesn't say how the figure was measured, so treat it as unverified. If it holds, it raises cost and latency for long-running agents on providers that offer prefix caching.
- **Excel ingestion:** [Issue #44848](https://github.com/langgenius/dify/issues/44848) and [PR #44849](https://github.com/langgenius/dify/pull/44849) add an opt-in `wolfxl` reader for `.xlsx` extraction. They replace the eager openpyxl read in `ExcelExtractor`. The summary gives no benchmark numbers.
- **Code cleanup:** [PR #44687](https://github.com/langgenius/dify/pull/44687) is a tooling fix, not a performance change.

## Stability & Regressions
Ranked by likely impact. Most of these were reported against 1.18.0.

**Higher severity**
1. **Duplicate workflow execution:** [PR #44948](https://github.com/langgenius/dify/pull/44948) was closed. It addressed [#44911](https://github.com/langgenius/dify/issues/44911). Celery's `task_publish_retry` can republish a message after the broker connection drops. Without an idempotency check, one streaming chat request could execute twice. I could not tell from the data whether the fix merged or the work moved elsewhere, so confirm before relying on it.
2. **Timezone offset in timestamps:** [#44987](https://github.com/langgenius/dify/issues/44987) reports that API response timestamps shift by the host timezone when `TZ` is not UTC. [PR #44847](https://github.com/langgenius/dify/pull/44847) is an open fix for the START node `sys.timestamp`. It has the same root cause, since `naive_utc_now().timestamp()` reads the value as local time.
3. **Agent file extraction crash:** [#45086](https://github.com/langgenius/dify/issues/45086) reports a `ValidationError` when a tool file has `mime_type=None`. No fix PR was visible.
4. **Agent reasoning replay:** [#44964](https://github.com/langgenius/dify/issues/44964) reports that the Agent App replays reasoning as literal `<think>` tags. Models then imitate the tags and hallucinate tool calls. No fix PR was visible.
5. **Canvas nodes intermittently disabled:** [#45147](https://github.com/langgenius/dify/issues/45147) was filed today and already has 6 comments. No fix PR was visible.

**Medium severity**
- **Tool-node parameters:** [#45003](https://github.com/langgenius/dify/issues/45003) (closed) reported tool nodes failing when a multiple-select parameter is stored as a comma-separated string.
- **MCP credential endpoint:** [PR #45159](https://github.com/langgenius/dify/pull/45159) handles non-builtin and MCP providers in the credential-info endpoint. It fixes [#40612](https://github.com/langgenius/dify/issues/40612).
- **Legacy `.xls` import:** [PR #44666](https://github.com/langgenius/dify/pull/44666) (open) preserves text cells. Today, `00123` becomes `123` and `1e3` becomes `1000.0`, which corrupts data. It fixes [#44658](https://github.com/langgenius/dify/issues/44658).
- **Extractors (closed):** Several extraction bugs were closed: DOCX images dropped ([#44904](https://github.com/langgenius/dify/issues/44904)), Markdown headings inside code fences ([#43356](https://github.com/langgenius/dify/issues/43356)), and CSV with `header=None` ([#43360](https://github.com/langgenius/dify/issues/43360)).
- **OpenAPI file parts:** [#44902](https://github.com/langgenius/dify/issues/44902) (closed) reported HTTP 500 for mixed file-part shapes, depending on part order.
- **Retrieval `top_k`:** [#42981](https://github.com/langgenius/dify/issues/42981) (closed) reported an explicit `top_k=0` being silently replaced by 4 in the tool-based retrieval path.
- **Plugin IDs in DSL export:** [#38406](https://github.com/langgenius/dify/issues/38406) (open) reports that `extract_dependencies_from_workflow_graph` produces malformed plugin IDs for non-langgenius tools.
- **TTS Content-Type:** [#39434](https://github.com/langgenius/dify/issues/39434) (open) reports WAV data served as `audio/mpeg`, so browsers fail to play it.
- **Human input node:** [#37588](https://github.com/langgenius/dify/issues/37588) (open) reports that human input does not show the LLM response text.
- **Scheduling:** [#44717](https://github.com/langgenius/dify/issues/44717) (closed) reported the weekly schedule trigger showing Sunday instead of Monday as the next run.
- **Account-deletion emails:** [#43442](https://github.com/langgenius/dify/issues/43442) (closed) reported that explicit `zh-Hans` account-deletion success emails selected a missing template.

**Deployment and frontend**
- **Container networking:** [#45079](https://github.com/langgenius/dify/issues/45079) reports `dify-web` listening with backlog 0 when the container ID looks numeric (for example `30889528e495`). Concurrent connections are dropped. Check this if you run `dify-web` in containers.
- **Non-HTTPS access:** [#44931](https://github.com/langgenius/dify/issues/44931) reports `crypto.randomUUID is not a function` in the Intent Classifier on non-secure HTTP contexts.
- **Knowledge base navigation:** [#42174](https://github.com/langgenius/dify/issues/42174) reports the sidebar switching to the global menu after clicking Add File.
- **Duplicate error toasts:** [#45150](https://github.com/langgenius/dify/issues/45150) was closed. [PR #45151](https://github.com/langgenius/dify/pull/45151) (open) is the related work.
- **SDK:** [#45121](https://github.com/langgenius/dify/issues/45121) reports the Node.js SDK omitting the required `inputs` in chat and completion object requests.
- **Tracing:** [#44441](https://github.com/langgenius/dify/issues/44441) reports the Opik conversation-title trace (`generate_name`) appearing as a chat turn in Opik threads.

## What This Means for Application Developers
- **Agent apps on 1.18.0:** Test any agent that uses reasoning models or tool files before upgrading. The `<think>` replay bug (#44964) and the `mime_type=None` crash (#45086) both affect agent runs.
- **Prefix caching:** If you depend on provider prefix caching for cost or latency, measure your cache hit rate on long agent sessions until #44826 is resolved.
- **Knowledge-base migration:** After upgrading a Classic knowledge base to the Agent one, plan to rebind your apps yourself. The upgrade no longer carries app connections over (#45161).
- **Deployment hygiene:**
  - Set `TZ=UTC` on hosts until the timestamp fixes land (#44987, #44847).
  - Serve the web UI over HTTPS.
  - Check the container-ID behavior of `dify-web` (#45079).
- **Data ingestion:** Legacy `.xls` imports can silently alter identifier-like text, such as leading zeros, until #44666 merges. Check the contents of already-imported spreadsheets.
- **Celery and brokers:** Be aware of possible duplicate executions after broker drops (#44911). Make downstream tool side effects idempotent.
- **SDK users:** Pass `inputs` explicitly in Node.js SDK chat and completion calls (#45121).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-10-30

## 1. Today's Highlights
LiteLLM shipped `v1.109.0-dev.2` (pre-release, signed Docker image). The day's PR traffic (405 PRs updated) is dominated by cost-tracking and billing correctness, authorization scoping (`/health`, MCP servers, team keys) and Anthropic/Responses API fidelity fixes. Several long-standing cost-accounting bugs for OpenAI-compatible and OpenRouter upstreams were closed today.

## 2. Releases & Breaking Changes
- **v1.109.0-dev.2**: Dev pre-release. The notes shown only cover cosign Docker image verification. No changelog is visible in the data, so check the release page before adopting it.
- **Breaking-flagged PRs (`!`), still open:**
  - [#48393](https://github.com/BerriAI/litellm/pull/48393): `hosted_vllm` keeps vLLM's `stop_reason` and `token_ids` on chat choices and stream chunks, including cache hits. Streamed output shape changes, so check clients that parse chunks.
  - [#49155](https://github.com/BerriAI/litellm/pull/49155): `/health` is now scoped by wildcard keys and team model allowlists, matching chat auth. Health output will differ for team and wildcard keys.
  - [#49161](https://github.com/BerriAI/litellm/pull/49161): Admin-owned team keys are bound to their team's MCP servers. LLM requests that name only toolsets the key can't use now return 403.
  - [#49150](https://github.com/BerriAI/litellm/pull/49150): `/a2a` send and stream now bill completion-bridge agents (LangGraph, Databricks) under `a2a_agent/<name>`. Previously they logged $0, so spend will rise.
  - [#39555](https://github.com/BerriAI/litellm/pull/39555): Shared-handler errors are labeled by status (a 400 is no longer `internal_server_error`). Clients that branch on `error.type` are affected.
  - [#44863](https://github.com/BerriAI/litellm/pull/44863): Adds Hostinger Router as an OpenAI-compatible provider.

## 3. New Model & Hardware Support
- [#44863](https://github.com/BerriAI/litellm/pull/44863): Hostinger Router provider covering chat, responses, messages and embeddings.
- [#48426](https://github.com/BerriAI/litellm/pull/48426): Nace `drex-max` added, with image input and Auto Router tier support.
- [#49114](https://github.com/BerriAI/litellm/pull/49114): Bot-driven pricing audit that adds 94 EmpirioLabs chat, embedding and rerank rows, plus Gemini batch and Azure flex tiers.
- [#49224](https://github.com/BerriAI/litellm/pull/49224): CollieAi guardrail integration, observe-only by default.
- [#43290](https://github.com/BerriAI/litellm/pull/43290) (closed): Bedrock model IDs with no Invoke handler now fall back to Converse, so new models work before a cost-map entry exists.
- Feature requests (open): [#33921](https://github.com/BerriAI/litellm/issues/33921) (Kimi K3, Inkling, Tinker) and [#43677](https://github.com/BerriAI/litellm/issues/43677) (Soniox real-time STT).
- Closed: [#27439](https://github.com/BerriAI/litellm/issues/27439) (DeepSeek V4 `reasoning_effort` high/max passthrough).

## 4. Performance & Optimization
No throughput or latency numbers appear in today's data. Related items:
- [#47814](https://github.com/BerriAI/litellm/issues/47814) (closed): The Responses TPM reservation counted base64 images as text and inflated the estimate, which caused premature rate limiting.
- [#48405](https://github.com/BerriAI/litellm/pull/48405): Fixes the Prometheus `litellm_deployment_state` metric sticking at 2 after a cooldown, which left alerts firing.
- [#22159](https://github.com/BerriAI/litellm/issues/22159) (closed): Import-time HTTP GET (slow startup).

## 5. Stability & Regressions
Ranked by severity:
1. **Security and auth:**
   - [#49225](https://github.com/BerriAI/litellm/pull/49225): The quick-start docker-compose publishes Postgres on all interfaces with a known password. The PR binds it to 127.0.0.1.
   - [#49155](https://github.com/BerriAI/litellm/pull/49155) and [#49161](https://github.com/BerriAI/litellm/pull/49161) (see above): team keys can see or probe models their team forbids, and admin team keys can reach all MCP servers.
2. **Billing and spend correctness** (several closed today):
   - [#49179](https://github.com/BerriAI/litellm/issues/49179) (open, new): `/key/update` during an in-flight request drops that request's cost from the budget-window spend. No fix PR is listed.
   - [#36168](https://github.com/BerriAI/litellm/issues/36168) (open): Streaming drops upstream `usage` when the final chunk has non-empty `choices`, so cached tokens are lost and input is billed at the full rate.
   - [#39057](https://github.com/BerriAI/litellm/issues/39057) (open, 26 comments): Design question on cache hits. Spend is zeroed but token columns replay the original usage, so which basis should token reports aggregate?
   - Closed: [#16021](https://github.com/BerriAI/litellm/issues/16021) (OpenRouter streaming cost), [#47533](https://github.com/BerriAI/litellm/issues/47533) (non-streaming `usage.cost` ignored), [#35829](https://github.com/BerriAI/litellm/issues/35829) (unvalidated provider cost units), [#38180](https://github.com/BerriAI/litellm/issues/38180) (`n>1` streams billed as one completion) and [#38507](https://github.com/BerriAI/litellm/issues/38507) (OpenRouter Responses cost $0).
   - [#49150](https://github.com/BerriAI/litellm/pull/49150): the a2a billing fix described above.
3. **Streaming and tool-call translation:**
   - [#25869](https://github.com/BerriAI/litellm/issues/25869) (open): `stream_chunk_builder` corrupts Gemini tool invocations and thought signatures, so follow-up turns fail with "Corrupted tool call context".
   - [#33678](https://github.com/BerriAI/litellm/issues/33678) (open): `ollama_chat` streaming sets `index=0` on every tool call, which merges parallel calls into malformed JSON.
   - [#35333](https://github.com/BerriAI/litellm/issues/35333) (closed): websearch interception dropped `web_search_tool_result` blocks.
   - [#48514](https://github.com/BerriAI/litellm/pull/48514): Drops `clear_thinking` edits whenever thinking is dropped. Anthropic returned 400 on the retry after a bad thinking signature.
   - [#49192](https://github.com/BerriAI/litellm/pull/49192): Maps Anthropic `pause_turn` and `refusal` stop reasons correctly.
   - [#45044](https://github.com/BerriAI/litellm/pull/45044) and [#47991](https://github.com/BerriAI/litellm/pull/47991): Responses API reasoning `encrypted_content` and item-ID consistency in streams.
   - [#48725](https://github.com/BerriAI/litellm/pull/48725): Responses WebSocket frames now run per-turn guardrails. It also fixes a 500.
4. **Provider-specific:**
   - [#36963](https://github.com/BerriAI/litellm/pull/36963) and [#43301](https://github.com/BerriAI/litellm/pull/43301): Map "prompt is too long" and context-length errors so context-window fallbacks fire.
   - [#48598](https://github.com/BerriAI/litellm/pull/48598): Bedrock embeddings honor `AWS_DEFAULT_REGION` and the boto3 profile region.
   - Closed: [#45546](https://github.com/BerriAI/litellm/issues/45546) (Mistral `reasoning_content` replay), [#45671](https://github.com/BerriAI/litellm/issues/45671) (Vertex Claude batch 404), [#37720](https://github.com/BerriAI/litellm/issues/37720) (zai drops `response_format`), [#46685](https://github.com/BerriAI/litellm/issues/46685) and [#44825](https://github.com/BerriAI/litellm/issues/44825) (Gemini/Vertex realtime drops `session.update` config).
   - [#44996](https://github.com/BerriAI/litellm/issues/44996) (open): the `dcr_bridge` OAuth relay fails RFC 9207-strict clients because the upstream `iss` doesn't match the gateway issuer.

## 6. What This Means for Application Developers
- **Treat spend data skeptically.** Many cost bugs were fixed today, but the streaming-usage gap ([#36168](https://github.com/BerriAI/litellm/issues/36168)) and the budget-window race ([#49179](https://github.com/BerriAI/litellm/issues/49179)) are still open. Avoid hard-blocking on budget windows when keys are rotated or updated while requests are in flight.
- **Review breaking PRs before upgrading.** If they merge, `/health` scoping, MCP server binding and error `type` labels may change behavior. Tests that assert on those responses may need updating.
- **Gemini and Ollama agents:** until [#25869](https://github.com/BerriAI/litellm/issues/25869) and [#33678](https://github.com/BerriAI/litellm/issues/33678) are fixed, avoid relying on streamed parallel tool calls or multi-turn Gemini web search with tools. Use non-streaming, or accumulate tool calls yourself.
- **Anthropic extended thinking:** the pending fixes ([#48514](https://github.com/BerriAI/litellm/pull/48514), [#49192](https://github.com/BerriAI/litellm/pull/49192)) address 400s on retry and unhandled `pause_turn` or `refusal`. Handle both stop reasons explicitly for now.
- **Self-hosters:** don't use the quick-start docker-compose as-is on a reachable host ([#49225](https://github.com/BerriAI/litellm/pull/49225)). Pin to a stable release rather than `v1.109.0-dev.2`.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
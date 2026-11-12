# AI Infrastructure Digest 2026-11-12

> Generated: 2026-11-12 15:44 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-12

**Scope:** Only two digests were provided: Dify (LLM app platform) and LiteLLM (LLM gateway). No inference engines (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning projects (Unsloth) were included. Sections 3 and 4 are therefore limited, and I note where I can't draw conclusions.

## 1. Ecosystem Overview
Today's activity sits in the application and gateway layers, not the engine layer. LiteLLM shipped four releases across four release lines (v1.110.0-rc.2, v1.109.1, v1.108.6 LTS, v1.106.9). Dify shipped none. Both projects spent the day on correctness: budget and cost accounting, SSE streaming integrity, and version regressions. Both are also adding agent-interoperability surface (Dify's A2A external agents, LiteLLM's Cursor CLI passthrough and LiteFlow workflows). Neither reported a measurable performance gain.

## 2. Activity Comparison
Counts are the distinct issues and PRs cited in each digest, not repository totals. They indicate relative focus only.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | ~26 (about 8 closed) | 9 (6 are test-infrastructure PRs) | No release in 24h. Regressions are tied to 1.17.0, 1.18.x and 1.19.0. |
| LiteLLM | ~20 (4 closed, mostly stale cleanup) | 13 | 4 releases: v1.110.0-rc.2, v1.109.1, v1.108.6 (LTS), v1.106.9. Release notes in the data are truncated to the cosign signature header. |

- **Dify's PRs:** The large feature PRs are #45918 (BYOA/A2A) and #46090 (malware scanning), both XXL.
- **LiteLLM's PRs:** These are mostly backports and gateway-feature work.

## 3. Model Support Race
No new model architectures shipped in either project, so there is no race to rank from this data.

- **LiteLLM** is the only one with provider and modality expansion, and all of it is in open PRs and unreleased:
  - Replicate video, image and TTS ([#51360](https://github.com/BerriAI/litellm/pull/51360)).
  - Bedrock `s3://` media for image, document and video ([#50577](https://github.com/BerriAI/litellm/pull/50577), backport [#50401](https://github.com/BerriAI/litellm/pull/50401)).
  - `gemini/gemini-decision-1` ([#51362](https://github.com/BerriAI/litellm/pull/51362)).
  - Image support for Perplexity and OpenRouter decision models ([#48846](https://github.com/BerriAI/litellm/pull/48846), a behavior change for `drop_params` users).
  - Native Gemini `generateContent` for custom providers ([#51083](https://github.com/BerriAI/litellm/pull/51083)).
  - An open request for IONOS ([#40112](https://github.com/BerriAI/litellm/issues/40112)).
- **Dify** has no model or hardware changes.
- **Gap:** There is no hardware-support signal (GPU, NPU, ROCm and so on) from either project. Engine-level model support can't be assessed without the vLLM, SGLang and llama.cpp digests.

## 4. Performance Frontier
The data has no KV cache, batching, quantization, distributed-serving or kernel work. The only efficiency items are in the gateway and app layers.

- **LiteLLM:**
  - [#51342](https://github.com/BerriAI/litellm/pull/51342) fixes Redis connection leaks in sync `run_async_function`.
  - [#50065](https://github.com/BerriAI/litellm/issues/50065) reports that MCP `tools/list` has blocked for 18–50 s since v1.108.0 on a legacy subscription listener. This is the largest quantified latency problem in the data, and no fix PR is visible.
- **Dify:** [#46157](https://github.com/langgenius/dify/issues/46157) reports about 70 GiB of Playwright traces (3,264 files) on a developer machine. It is a dev-environment issue only.

At this layer the bottlenecks are connection management, protocol-handling latency and state accounting, not GPU throughput.

## 5. Layer Positioning

| Layer | Project | Today's evidence |
|---|---|---|
| Application and agent platform | Dify | Agent v2, workflows, knowledge pipelines, A2A agent calls, and upload security (malware scanning). Consumes models but doesn't serve them. |
| Gateway and routing | LiteLLM | Provider normalization, budgets and rate limits, cost tracking, `/v1/messages` translation, MCP and passthrough. Sits between clients and engines. |
| Serving engine, local runtime, fine-tuning | Not covered | No data supplied. |

LiteLLM's reasoning-backend issue ([#32357](https://github.com/BerriAI/litellm/issues/32357)) names vLLM and SGLang as upstreams, so engine behavior surfaces through the gateway as translation bugs.

## 6. Trend Signals
1. **Gateway accounting is the weak point.** LiteLLM's top issues are budget bypass ([#34238](https://github.com/BerriAI/litellm/issues/34238)), reservation leaks on stream disconnect ([#50534](https://github.com/BerriAI/litellm/pull/50534)), TPM counters that outlive their window ([#49675](https://github.com/BerriAI/litellm/issues/49675)), and up to 1,000,000× overbilling from unvalidated `usage.cost` ([#48398](https://github.com/BerriAI/litellm/issues/48398)). Multi-pod Redis deployments carry the most risk.
2. **Streaming and protocol translation is the main source of correctness bugs.** This shows up in both projects:
   - Dify: missing tool output in SSE ([#46034](https://github.com/langgenius/dify/issues/46034)) and SSE reconnect exhaustion ([#46109](https://github.com/langgenius/dify/issues/46109)).
   - LiteLLM: empty content for reasoning models via `/v1/messages` ([#32357](https://github.com/BerriAI/litellm/issues/32357)) and `response.failed` returned as HTTP 200 ([#36768](https://github.com/BerriAI/litellm/issues/36768)).
3. **Agent interoperability is expanding.** Dify's A2A backend, LiteLLM's Cursor CLI passthrough and LiteFlow workflows, and MCP latency are all agent-protocol work.
4. **Release hygiene.** LiteLLM runs parallel LTS and RC lines with backports. Dify's regressions cluster in 1.17–1.19, including RBAC demotion and structured output.
5. **Upload security is emerging.** Dify's opt-in malware scanning ([#46090](https://github.com/langgenius/dify/pull/46090)) and LiteLLM's spend-log token redaction ([#48968](https://github.com/BerriAI/litellm/pull/48968)) both aim at untrusted input and leaked secrets.

**What agent and application developers should do:**
- Add provider-side spend caps and reconcile gateway cost against billing.
- Test `/v1/messages` with reasoning backends before relying on it for Claude Code or Anthropic SDK clients.
- Add client-side fallback polling for long agent runs that exhaust SSE reconnects.
- Check MCP `tools/list` latency before moving to LiteLLM 1.108.x or later.
- Pin Dify versions and test in staging before upgrading from 1.17.x or later.
- Review the LiteLLM release pages directly, because the changelogs in today's data were truncated.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-12

Note: Dify is an LLM app platform, not an inference engine. The hardware and model sections are mostly empty for that reason.

## 1. Today's Highlights
No release shipped in the last 24h. Activity centered on three things:
- A wave of bug reports on Agent v2, Workflow and Knowledge Pipeline, mostly against 1.18/1.19.
- A large BYOA external-agent (A2A) backend PR.
- A knowledge-base malware-scanning PR.

Contributors also continued a bulk effort to bring unit tests under strict Pyrefly, and the web team continued migrating tests to Browser Mode.

## 2. Releases & Breaking Changes
No releases in the last 24h. Version-sensitive reports:
- Knowledge Pipeline upload regression since 1.17.0: [#46121](https://github.com/langgenius/dify/issues/46121)
- AWS S3 datasource bug on v1.19.0: [#46112](https://github.com/langgenius/dify/issues/46112) (closed)
- Structured output "stage=capability" failure on 1.18.0: [#45317](https://github.com/langgenius/dify/issues/45317) (closed)

## 3. New Model & Hardware Support
There are no model or hardware changes today. Related feature PRs:
- [#45918](https://github.com/langgenius/dify/pull/45918) (XXL): External Agents backend (BYOA). A2A endpoints can be verified, saved, tested, and called from Agent v2 Workflow/Chatflow nodes. It includes revision management, and execution persists invocation state before remote I/O.
- [#46090](https://github.com/langgenius/dify/pull/46090) (XXL): per-knowledge-base malware scanning of uploads. It is off by default and gated by `FILE_SCAN_ENABLED=true`.

## 4. Performance & Optimization
No performance work with measurable numbers landed. The one resource-related item:
- [#46157](https://github.com/langgenius/dify/issues/46157) (closed): local Playwright `retain-on-failure` traces produced 3,264 files, about 70 GiB, on one developer machine. This affects dev environments only.

Test infrastructure PRs (strict Pyrefly cleanup and Browser Mode migration) are in flight:
- [#46189](https://github.com/langgenius/dify/pull/46189)
- [#46188](https://github.com/langgenius/dify/pull/46188)
- [#46187](https://github.com/langgenius/dify/pull/46187)
- [#46185](https://github.com/langgenius/dify/pull/46185)
- [#46184](https://github.com/langgenius/dify/pull/46184)
- [#46186](https://github.com/langgenius/dify/pull/46186)

## 5. Stability & Regressions
Ranked by estimated severity. Fix PRs are not visible in the data unless noted.

**High**
1. [#46109](https://github.com/langgenius/dify/issues/46109) (open): an Agent run fails with "SSE stream reconnect attempts exhausted" while still making progress.
2. [#46121](https://github.com/langgenius/dify/issues/46121) (open): Knowledge Pipeline local-file upload returns 415 for images and PPTX files that the data source node allows. The cause is the `?source=datasets` check, and it has been a regression since 1.17.0.
3. [#46034](https://github.com/langgenius/dify/issues/46034) (open) and [#44141](https://github.com/langgenius/dify/issues/44141) (closed): output from a workflow-as-tool or non-streaming tool variable is missing from the chat-messages SSE stream and from saved answers.
4. [#38867](https://github.com/langgenius/dify/issues/38867) (closed): the Answer node does not work inside an iteration, and the SSE response has no "message" event.

**Medium**
- [#46129](https://github.com/langgenius/dify/issues/46129) (open): Notion indexing fails with "invalid data source field: notion_workspace_id" when the plugin returns an empty `workspace_id`.
- [#46169](https://github.com/langgenius/dify/issues/46169) (open): the downstream variable picker hides declared Agent v2 object fields.
- [#46165](https://github.com/langgenius/dify/issues/46165) (open): Last Run omits Iteration and Loop child logs after single-node debugging.
- [#46162](https://github.com/langgenius/dify/issues/46162) (open): the web SSE handler leaves the response open after rejecting an event.
- [#46136](https://github.com/langgenius/dify/issues/46136) (open): the webhook trigger drops the file name and extension on multipart uploads.
- [#46152](https://github.com/langgenius/dify/issues/46152) (open): `serialize_request()` drops a trailing `?` from the query string.
- [#44961](https://github.com/langgenius/dify/issues/44961) (closed): with RBAC enabled, resources created by an admin disappear after the admin is demoted to Editor (1.18.0).
- [#45206](https://github.com/langgenius/dify/issues/45206) (closed): the Agent drops parallel tool calls that share a plugin tool call ID.
- [#46002](https://github.com/langgenius/dify/issues/46002) (closed): the OAuth proxy context can be consumed more than once concurrently.
- [#37045](https://github.com/langgenius/dify/issues/37045) (closed): Weaviate BM25 full-text search always drops results because the score is not extracted.
- [#46153](https://github.com/langgenius/dify/issues/46153) (closed): OpenAPI custom tools get a double slash when `servers[0].url` ends with `/`.

**Low (UI/UX)**
- [#46167](https://github.com/langgenius/dify/issues/46167): the canvas does not highlight the Human Input timeout branch.
- [#46146](https://github.com/langgenius/dify/issues/46146): the Marketplace catalog loses keyboard focus when the header hides.
- [#46120](https://github.com/langgenius/dify/issues/46120): chat history stops above the latest message after Markdown expands.
- [#46088](https://github.com/langgenius/dify/issues/46088) (closed): the Agent prompt does not update when a referenced skill's display name changes.

Maintenance tracking:
- [#43035](https://github.com/langgenius/dify/issues/43035): pending dependency upgrades.
- [#45584](https://github.com/langgenius/dify/issues/45584): use the SQLAlchemy engine.
- [#45166](https://github.com/langgenius/dify/issues/45166): rewrite a property to take a `Session` parameter.

Related PR: [#43241](https://github.com/langgenius/dify/pull/43241) lets a required Number input accept `0`. Workflow Test Run currently rejects numeric zero.

## 6. What This Means for Application Developers
- **Agents and streaming:** if you consume `chat-messages` SSE with workflow-as-tool or non-streaming variables, check that final outputs arrive ([#46034](https://github.com/langgenius/dify/issues/46034)). For long agent runs, handle reconnect exhaustion on the client side with a fallback poll of the final result ([#46109](https://github.com/langgenius/dify/issues/46109)).
- **Knowledge Pipeline:** if you upload images or PPTX through the local-file source on 1.17+, expect 415 errors until [#46121](https://github.com/langgenius/dify/issues/46121) is fixed. Check S3 and Notion datasource credentials and workspace IDs ([#46112](https://github.com/langgenius/dify/issues/46112), [#46129](https://github.com/langgenius/dify/issues/46129)).
- **Custom tools and triggers:** normalize trailing slashes in OpenAPI server URLs ([#46153](https://github.com/langgenius/dify/issues/46153)). Webhook multipart file names may be lost ([#46136](https://github.com/langgenius/dify/issues/46136)).
- **Upcoming features:** BYOA external agents ([#45918](https://github.com/langgenius/dify/pull/45918)) will let you call A2A agents from workflows. Optional malware scanning of knowledge-base uploads ([#46090](https://github.com/langgenius/dify/pull/46090)) will be relevant if you accept untrusted files.
- **Upgrades:** 1.18.x and 1.19.0 are the source of several regressions in this batch, including RBAC demotion and structured output. Pin versions and test staging before upgrading.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-12

## 1. Today's Highlights
LiteLLM shipped four releases in 24h across multiple release lines: the v1.110.0-rc.2 release candidate, v1.109.1, v1.108.6 (LTS line) and v1.106.9. Active PR work centers on rate-limit and budget correctness (borrowed team shares, streaming-disconnect reservation leaks), Bedrock `s3://` media support, and new gateway surface (Replicate media, Cursor CLI passthrough, LiteFlow workflows). Open bugs concentrate on cost and budget accounting and on `/v1/messages` translation for reasoning models.

## 2. Releases & Breaking Changes
- **v1.110.0-rc.2**, **v1.109.1**, **v1.108.6**, **v1.106.9**: The release notes in the data are truncated to the cosign image-signature verification header. All images are signed with the key from commit [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). I can't report changelog contents, so check the release pages before upgrading.
- Backports are flowing to the release branches `rc/1.109.0` and `lts/1.108.x`, which is consistent with the parallel releases above:
  - [PR #51044](https://github.com/BerriAI/litellm/pull/51044) restores the per-user spend breakdown on the aggregated usage route, with an oauthlib 4.0.0→4.0.1 lock bump for a CVE.
  - [PR #51362](https://github.com/BerriAI/litellm/pull/51362) backports `gemini/gemini-decision-1` on `/v1/decisions` and `/v1/systemone`.
  - [PR #50401](https://github.com/BerriAI/litellm/pull/50401) backports Bedrock Converse `s3://` media sources.
- **Breaking change (open PR):** [PR #48846](https://github.com/BerriAI/litellm/pull/48846) sends images to Perplexity and OpenRouter decision models. Callers that use `drop_params` will see changed behavior, since images are no longer dropped or rejected with a 400.

## 3. New Model & Hardware Support
All of these are open PRs and not yet released:
- **Replicate**: [PR #51360](https://github.com/BerriAI/litellm/pull/51360) adds video generation, image generation and text-to-speech through the predictions API. Until now, `replicate/...` models only worked for chat.
- **Bedrock**: [PR #50577](https://github.com/BerriAI/litellm/pull/50577) sends `s3://` image, document and video URLs to Converse as S3 sources. Today the gateway returns a 500. Non-admin keys are limited to buckets the admin allowlists.
- **Gemini / Perplexity / OpenRouter decision models**: see [#51362](https://github.com/BerriAI/litellm/pull/51362) and [#48846](https://github.com/BerriAI/litellm/pull/48846).
- **Custom providers**: [PR #51083](https://github.com/BerriAI/litellm/pull/51083) lets `custom_provider_map` providers serve the native Gemini `generateContent` route.
- **Provider request**: [Issue #40112](https://github.com/BerriAI/litellm/issues/40112) asks for the IONOS AI Model Hub.
- **Agent clients**: [PR #51402](https://github.com/BerriAI/litellm/pull/51402) adds a Cursor CLI subscription passthrough.
- **Workflows**: [PR #50384](https://github.com/BerriAI/litellm/pull/50384) adds LiteFlow gateway definitions, execution and traces, called as `model="workflow/<name>"`.

## 4. Performance & Optimization
There are no benchmark numbers in today's data. Resource-efficiency work:
- [PR #51342](https://github.com/BerriAI/litellm/pull/51342): fixes Redis connections leaked by each sync `run_async_function` call. Connections piled up until the client cache evicted them, because per-loop Redis clients were closed after their loop.
- [Issue #50065](https://github.com/BerriAI/litellm/issues/50065): since v1.108.0, MCP `tools/list` blocks for 18–50 s on a legacy subscription listener. This affects clients that send `notifications/initialized` with a pre-2026 protocol version, such as the Python `mcp` SDK used by Open WebUI. No fix PR is visible.

## 5. Stability & Regressions
Ranked by severity:
1. **Budget bypass and leaks**
   - [#34238](https://github.com/BerriAI/litellm/issues/34238): end-user budget can be bypassed through stale per-pod fallback spend after a Redis counter miss.
   - [#50534](https://github.com/BerriAI/litellm/pull/50534): a streaming client disconnect leaks the Redis budget reservation and causes false 429s. The PR is open.
2. **Cost overbilling**
   - [#48398](https://github.com/BerriAI/litellm/issues/48398): provider-reported `usage.cost` is trusted as USD without validation, giving up to 1,000,000× overbilling (1.106.3).
   - [#39618](https://github.com/BerriAI/litellm/issues/39618): `cost_per_token` crashes on `None` or string token counts.
3. **Rate limiting**
   - [#49675](https://github.com/BerriAI/litellm/issues/49675): the v3 limiter's TPM counter outlives its window after upstream 429s, so keys are rejected below `tpm_limit`.
   - [PR #51367](https://github.com/BerriAI/litellm/pull/51367) holds fallbacks, nested calls, WebSocket turns and oversized prompts to a borrowing team's share. It follows up on six review findings left open after #51328 merged.
4. **Translation correctness**
   - [#32357](https://github.com/BerriAI/litellm/issues/32357): `/v1/messages` streams `thinking_delta` inside a text block, plus a duplicate `message_start`, for reasoning backends. The result is empty content in the Anthropic SDK and Claude Code.
   - [#36768](https://github.com/BerriAI/litellm/issues/36768): a `response.failed` event becomes HTTP 200 with an empty `finish_reason=stop`, so fallbacks never run.
   - [#46542](https://github.com/BerriAI/litellm/issues/46542): a stream that ends with no finish reason still reports `stop`.
   - [#48145](https://github.com/BerriAI/litellm/issues/48145): JSON-defined openai-like providers drop tools when the model is not in the catalog.
   - [#42104](https://github.com/BerriAI/litellm/issues/42104): mid-conversation `system` messages break Gemini/Vertex prompt caching (`cache_read_input_tokens: 0` on every turn).
   - [#47723](https://github.com/BerriAI/litellm/issues/47723): Anthropic `count_tokens` fallback rejects `tool_addition` and `tool_removal` blocks.
5. **Config and misc**
   - [#36095](https://github.com/BerriAI/litellm/issues/36095): `os.environ/` substitution in numeric params such as weight, rpm or tpm yields a string, so every request to the group returns a 500.
   - [#36765](https://github.com/BerriAI/litellm/issues/36765): OpenAPI→MCP generation drops request body schemas that use `$ref`.
   - [#33194](https://github.com/BerriAI/litellm/issues/33194): non-admins can't assign a budget to personal keys.
   - [#36746](https://github.com/BerriAI/litellm/issues/36746): OpenTelemetry writes to ended parent spans.
6. **Security hardening**: [PR #48968](https://github.com/BerriAI/litellm/pull/48968) masks token-shaped secrets in spend logs. It is on by default and can be turned off with `general_settings.redact_tokens_in_spend_logs: false`.

Closed today, mostly through stale cleanup: [#12970](https://github.com/BerriAI/litellm/issues/12970) (inflated streaming `prompt_tokens`), [#43946](https://github.com/BerriAI/litellm/issues/43946) (streamed `usage.cost` omitted when 0), [#31439](https://github.com/BerriAI/litellm/issues/31439), [#36085](https://github.com/BerriAI/litellm/issues/36085).

## 6. What This Means for Application Developers
- **Don't rely on gateway budgets alone.** Multi-pod Redis deployments have known gaps in end-user budgets (#34238), TPM accounting (#49675) and reservation cleanup on stream disconnects (#50534). Add provider-side caps.
- **Check cost data when you use OpenAI-compatible providers.** Provider-reported `usage.cost` isn't validated (#48398), so cross-check spend against billing.
- **Claude Code and Anthropic SDK clients with reasoning backends** (GLM, DeepSeek-R1 via vLLM or SGLang) may get empty content through `/v1/messages` until #32357 is fixed.
- **MCP users on 1.108.x or later** should test `tools/list` latency (#50065) before upgrading.
- **Resolve numeric config values before startup.** Don't use `os.environ/` for `weight`, `rpm` or `tpm` (#36095).
- **Bedrock users:** `s3://` media support is coming, but keep an allowlist of buckets for non-admin keys (#50577).
- **LTS users (1.108.x):** you're getting backports (#50401, #51362), and 1.108.6 is out today.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
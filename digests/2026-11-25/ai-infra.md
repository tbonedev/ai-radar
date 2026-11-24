# AI Infrastructure Digest 2026-11-25

> Generated: 2026-11-24 18:35 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-25

**Scope:** Only two digests came in today, Dify and LiteLLM. No inference engines (vLLM, SGLang, llama.cpp), no local runtimes (Ollama) and no fine-tuning frameworks (Unsloth) were provided. Sections 3 and 4 are therefore thin, and I haven't filled the gap with outside knowledge. Dify is also an application platform, not infrastructure in the narrow sense.

## 1. Ecosystem Overview

Today's activity is about **correctness and operability, not raw speed or model launches**. Neither project published benchmark numbers. Both spent the day on limits that fail under concurrency, on cleanup paths and on malformed input. LiteLLM shipped three parallel releases (current, previous and LTS) around a supply-chain change, keyless cosign verification. It is also building a native Rust gateway. Dify shipped no release and ran a large bug-triage sweep plus web test stabilization. The common message is that the gateway and application layers are hardening for production, and budgets, quotas and rate limits are the weakest point.

## 2. Activity Comparison

Counts are items referenced in the digests, not repository totals. Both digests are partial views.

| Project | Issues referenced | PRs referenced | Release status |
|---|---|---|---|
| Dify | ~30 (~27 closed, 3 open) | ~12 (2 merged, ~10 open) | None in 24h. Last version cited is 1.19.0. |
| LiteLLM | ~22 (mostly open; a few closed) | ~20 (mostly open) | **3 releases**: v1.110.3 (current), v1.109.4 (previous), v1.108.16 (LTS). `rc/1.112.0` branch exists. |

- **Dify's** issue count is inflated by one contributor's batch of ~25 bug reports, closed on Nov 23. It reflects triage, not organic traffic.
- **LiteLLM's** PR flow is mostly open work: the `router-core` Rust stack, LTS backports and provider fixes.

## 3. Model Support Race

The data gives no clear leader. Neither project shipped a major model or architecture today.

- **LiteLLM** is the only one with model-support items:
  - PR #53484 adds `gmi/tencent/hy4-flash` to the cost map: $0.07/M input, $0.281/M output, 1M-token context. It is open.
  - PR #54155 fixes GPT Image 2.5 edits that use a `markup` file and adds tuple file uploads. It is an LTS backport of #53815.
  - Open requests: Vertex Gemini `responseJsonSchema` opt-out (#34943), ElevenLabs STT diarization (#28636) and Bedrock `tool_choice="any"` (#37980).
- **Dify** reported no model or hardware support. Its closest item is the Aliyun OTLP tracing fix (#47020), which is observability, not model support.

## 4. Performance Frontier

No KV-cache, batching, quantization, distributed-serving or kernel work appeared in today's data. That is expected for a gateway and an application platform. The optimization effort that did appear is at the routing and latency layer:

- **LiteLLM Rust gateway (all open):**
  - #53061: native rate-limit enforcement.
  - #53039: Messages requests stay on the native path.
  - #54001: `reported_failure` moves onto Core.
  - #54000: `optional_pre_call_checks` becomes a typed enum.
  - #53999: Anthropic cache tokens counted in totals, fixing undercounting in usage-based routing.
- **LiteLLM latency and leaks:**
  - #37041 (closed) removed about 8s of connect timeouts per Ollama completion.
  - #48589: the sync `Router.completion` leaks a Redis connection per call when rpm/tpm limits are set.
- **Dify:**
  - PR #46456 (open) records dispatch-to-worker queue latency in workflow traces.
  - #46902: MetaDefender polling lasted up to 50s.
  - #47076: `difyctl` buffered the rest of an SSE response while output was paused.

For KV-cache, batching and kernel trends, you need engine digests such as vLLM or SGLang, which weren't provided.

## 5. Layer Positioning

| Project | Layer | Today's focus |
|---|---|---|
| **LiteLLM** | LLM gateway and router: provider translation, spend and budget tracking, MCP gateway | Provider translation bugs, spend correctness, Rust-native router, release and signing hygiene |
| **Dify** | Application and workflow platform above the gateway: workflows, agents, knowledge bases, MCP | API input validation, workflow lifecycle and cleanup, agent shell tooling, web UI tests |

- They are complementary, not competitors. Both call upstream models and neither serves model weights.
- No serving-engine, local-runtime or training/fine-tuning project is in today's data.
- Both sit at the MCP boundary. LiteLLM acts as an MCP gateway, and Dify exposes Agent Apps as MCP servers.

## 6. Trend Signals

1. **Limits are soft under concurrency.**
   - Dify: schedule dispatch (#46899), annotation imports (#46318), tenant queue (#46309) and knowledge rate limit (#46320).
   - LiteLLM: spend-log loss (#33873), stale budget reset (#36941), unseeded tag counters (#35538) and failed requests missing from RPM limits (#21312).
   - **Watch:** don't treat gateway or platform budgets as hard guarantees. Add provider-side limits and alerting.
2. **MCP is now a production surface, and it has bugs.**
   - LiteLLM: `tools/list` blocks for 18–50s since v1.108.0 (#50065).
   - Dify: MCP auth transport leak (#42384) and missing required variables in tool schemas (#42387).
   - **Watch:** test MCP latency and schema fidelity before upgrading.
3. **Supply-chain verification is changing.** LiteLLM images use keyless cosign against a workflow identity. Any CI still verifying with `cosign.pub` will fail.
4. **Input hardening and security.**
   - Dify: malformed JSON created an unrestricted dataset API key (#46928).
   - LiteLLM: PR #50567 would reject `os.environ/` references in logging metadata.
   - **Watch:** validate payloads client-side and audit key scopes.
5. **Gateways are moving to native runtimes.** The Rust `router-core` stack points to lower overhead in the routing hot path. Router behavior may shift as it lands.
6. **Token and usage accounting is unreliable across providers.**
   - watsonx streamed usage is lost (#46059).
   - The PDF token count uses Anthropic pricing for every provider (#46107, PR #54208).
   - The count endpoints will return 503 instead of a tiktoken estimate if PR #54163 lands.
   - **Watch:** validate usage against provider billing, and handle 503s from the token-count endpoints.
7. **Agent tooling output is fragile.** Dify's shellctl and dify-agent bugs (#47039, #47043) can corrupt or duplicate tool output and mislabel truncation. Don't rely on truncation flags yet.

**Practical guidance:**
- Production LiteLLM users who want stability should pin the `lts` tag (v1.108.16).
- Dify users should check that the closed fixes are in their build before upgrading, since no release shipped today.
- Because only two projects were covered, broader conclusions about engines, runtimes and fine-tuning need the remaining digests.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-25

*Note: Dify is an LLM application platform rather than an inference engine, so the infra-oriented sections below are mostly "none today". Links use the `langgenius/dify` repo.*

## 1. Today's Highlights

- No release shipped in the last 24h. Activity was a **bug triage sweep** and a **web test-stability and refactor push**.
- About 25 backend bug reports filed by one contributor, mikamikasuki, between Nov 13 and 23 were closed on Nov 23. Several concern concurrency limits, cleanup paths and malformed-JSON handling, and some are security-relevant.
- On the web side, `hyoban` and `lyzno1` opened or merged many PRs that move calls onto generated contract clients. They also re-enable browser specs that had been skipped for flakiness.

## 2. Releases & Breaking Changes

None. The last version referenced in the data is 1.19.0 (see [#47020](https://github.com/langgenius/dify/issues/47020)).

## 3. New Model & Hardware Support

None reported. The closest item is an observability integration fix, [#47020](https://github.com/langgenius/dify/issues/47020). The Aliyun tracing verification rejected standard empty OTLP success responses. The issue is closed.

## 4. Performance & Optimization

No benchmark numbers in today's data. Latency and observability work:
- [PR #46456](https://github.com/langgenius/dify/pull/46456) (open): records dispatch-to-worker latency in streaming workflow and chatflow traces. It captures a timestamp when the task is enqueued and measures queue seconds at worker entry. Fixes #46135.
- [#46902](https://github.com/langgenius/dify/issues/46902) (closed): MetaDefender request mode still polled for up to 50 seconds.
- [#47076](https://github.com/langgenius/dify/issues/47076) (closed): `difyctl` buffered the rest of an SSE response while streaming output was paused.

## 5. Stability & Regressions

Ranked by severity.

**Security and correctness (all closed):**
- [#46928](https://github.com/langgenius/dify/issues/46928): malformed JSON created an unrestricted dataset API key.
- [#46940](https://github.com/langgenius/dify/issues/46940): malformed JSON could reset optional Console app settings.
- [#46926](https://github.com/langgenius/dify/issues/46926): workflow OpenAPI routes accepted non-object JSON bodies as empty inputs.
- [#46652](https://github.com/langgenius/dify/issues/46652): keyword output moderation missed terms split across streaming buffers.
- [#46293](https://github.com/langgenius/dify/issues/46293): the scanner verdict cache survived provider updates.

**Concurrency and limits (closed):**
- [#46899](https://github.com/langgenius/dify/issues/46899): the workflow schedule dispatch limit could exceed its configured maximum.
- [#46318](https://github.com/langgenius/dify/issues/46318): concurrent annotation imports could exceed the workspace limit.
- [#46309](https://github.com/langgenius/dify/issues/46309): the tenant-isolated queue could dispatch concurrent first tasks beyond the per-tenant limit.
- [#46320](https://github.com/langgenius/dify/issues/46320): the knowledge request rate limit undercounted same-millisecond requests.
- [#46300](https://github.com/langgenius/dify/issues/46300): concurrent first Agent list requests could fail while creating Build conversations.

**Workflow and data lifecycle (closed):**
- [#46315](https://github.com/langgenius/dify/issues/46315): a Human Input node timeout could leave a workflow paused when resume publication failed.
- [#46897](https://github.com/langgenius/dify/issues/46897): async workflow could return an error after Celery had accepted the task.
- [#46661](https://github.com/langgenius/dify/issues/46661): chatflow lost saved LLM reasoning after resuming from a pause.
- [#46288](https://github.com/langgenius/dify/issues/46288): retention deleted related logs when backup failed.
- [#46613](https://github.com/langgenius/dify/issues/46613): transient storage failures orphaned deleted segment attachments.
- [#46638](https://github.com/langgenius/dify/issues/46638): multipart uploads were not removed when OpenAPI requests were rejected.
- [#46313](https://github.com/langgenius/dify/issues/46313): deleting a KnowledgeFS space left its file-scanning policy behind.
- [#46286](https://github.com/langgenius/dify/issues/46286) and [#46657](https://github.com/langgenius/dify/issues/46657): Agent workspace cleanup gaps.
- [#46680](https://github.com/langgenius/dify/issues/46680): the workflow archive download stayed pending after month-lock retries were exhausted.
- [#46892](https://github.com/langgenius/dify/issues/46892): a cloud quota rejection stopped later documents in a retry batch.
- [#46894](https://github.com/langgenius/dify/issues/46894): plugins could only be upgraded to older patch versions.

**MCP (closed):**
- [#42384](https://github.com/langgenius/dify/issues/42384): the MCP auth retry left an orphaned transport/session when a 401 occurred during initialize.
- [#42387](https://github.com/langgenius/dify/issues/42387): the Agent App MCP tool schema ignored Agent Soul app variables, so required ones failed every `tools/call`.

**Open issues:**
- [#47039](https://github.com/langgenius/dify/issues/47039): shellctl. Non-UTF-8 bytes in `output.log` stall `ReadOutputWindow` at an unchanged offset with `truncated=true`, and `TailOutputWindow` output is dropped.
- [#47043](https://github.com/langgenius/dify/issues/47043): dify-agent. Shell outputs between 4 KiB and 8 KiB are duplicated and falsely marked as truncated in the middle.
- [#46146](https://github.com/langgenius/dify/issues/46146): marketplace catalog loses keyboard focus when the header hides below the desktop breakpoint. Fix: [PR #47097](https://github.com/langgenius/dify/pull/47097).

**Open fix PRs:**
- [#46986](https://github.com/langgenius/dify/pull/46986): persists Build cleanup dispatch after retirement, using a transactional outbox. It fixes #46985.
- [#43241](https://github.com/langgenius/dify/pull/43241): accepts numeric zero in required Number inputs.
- [#47107](https://github.com/langgenius/dify/pull/47107): keeps the web source name field mounted while its provider loads.
- [#47103](https://github.com/langgenius/dify/pull/47103): stops re-requesting a failed knowledge space page until the user retries.

**Test stability:**
- [#47108](https://github.com/langgenius/dify/pull/47108): merged, stabilizing the collaboration demo guide setup.
- [#47096](https://github.com/langgenius/dify/pull/47096): merged, skipping an upload spec that races the response.
- [#47104](https://github.com/langgenius/dify/pull/47104), [#47102](https://github.com/langgenius/dify/pull/47102), [#47101](https://github.com/langgenius/dify/pull/47101) and [#47099](https://github.com/langgenius/dify/pull/47099): open, re-enabling previously skipped browser specs.

## 6. What This Means for Application Developers

- **API input hardening:** The malformed or non-object JSON fixes (#46928, #46940, #46926) matter if you call Dify's Console or OpenAPI routes. Validate payloads client-side. Audit dataset API keys for unexpected unrestricted scope.
- **Limits are soft under concurrency:** Several rate and quota limits could be exceeded under concurrent load (#46899, #46318, #46309, #46320). Don't rely on them as hard guarantees until you're on a build containing the fixes.
- **Moderation:** Keyword output moderation could miss terms split across stream buffers (#46652). Add a post-hoc check if moderation is compliance-critical.
- **Agents and MCP:** If you expose Agent Apps as MCP servers, required app variables were not advertised and tool calls failed (#42387). Check that you're on a fixed build. MCP 401-during-initialize now cleans up its transport (#42384).
- **Agent shell tooling:** The open shellctl and dify-agent output bugs (#47039, #47043) can corrupt or duplicate tool output. Don't treat truncation flags as reliable until they're fixed.
- **Tracing:** Aliyun OTLP verification (#47020) is fixed. Queue-latency tracing (#46456) is still in review.
- **Version tracking:** No release today. Check the 1.19.0 release notes and the merge status of these fixes before upgrading.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-25

## 1. Today's Highlights
Three releases shipped in parallel: v1.110.3 (current line), v1.109.4 (previous line) and v1.108.16 (LTS). The release notes' keyless cosign verification, a change in v1.108.10 that users asked about in #52837, applies to all three. Development is also moving toward a native Rust gateway: a stack of `router-core` PRs adds pre-call checks and rate-limit enforcement. The main open regression is slow MCP `tools/list` in v1.108.0.

## 2. Releases & Breaking Changes
- **v1.110.3, v1.109.4 and v1.108.16 (LTS)** were all released in the last 24h. The release notes provided were truncated, so I can't list their feature changes.
  - Images are verified keylessly with cosign, against the identity `BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main`.
  - Scripts that still verify against the old `cosign.pub` key will fail. Issue #52837 asked BerriAI to confirm this switch, which began in v1.108.10 (BerriAI/litellm Issue #52837).
  - The `lts` image tag points to v1.108.16.
- **Potentially breaking:** PR #54163 `fix(proxy)!` makes the four token-count endpoints return **503** when a Hugging Face tokenizer can't be loaded. Before, they silently returned a tiktoken estimate (BerriAI/litellm PR #54163). Open.
- **Upcoming:** an `rc/1.112.0` branch exists (see the e2e PRs #54205 and #54206).
- **LTS backports (open):**
  - #54155: `image_edit` markup and tuple file parts.
  - #53881: billing for OpenAI Agents API passthrough turns.
  - #54207 (closed): moves the UI image to nginx 1.31.10 and a newer zlib to address scanner findings.

## 3. New Model & Hardware Support
- PR #53484 adds `gmi/tencent/hy4-flash` to the cost map. It is priced at $0.07/M input and $0.281/M output, with a 1M-token context (BerriAI/litellm PR #53484). Open.
- PR #54155 makes GPT Image 2.5 edits with a `markup` file return the edited image instead of a 400 from OpenAI. It also supports `(filename, content, type)` tuple uploads (BerriAI/litellm PR #54155). This is the LTS backport of #53815.
- Open feature requests:
  - Opt-out of `responseJsonSchema` for Vertex Gemini 2.x+ (#34943).
  - ElevenLabs STT diarization passthrough (#28636).
  - Bedrock `tool_choice="any"` (#37980).

## 4. Performance & Optimization
No benchmark numbers were published today. Related work:
- **Rust gateway/router-core.** All of these are open:
  - #53061 enforces declared rate limits natively through `optional_pre_call_checks: [enforce_model_rate_limits]`.
  - #53039 keeps Messages requests on the native path under `enable_pre_call_checks`.
  - #54001 moves `reported_failure` onto Core.
  - #54000 types `optional_pre_call_checks` as an enum.
  - #53999 includes Anthropic cache tokens in response totals, which fixes undercounting in usage-based routing.
- #48589 reports that sync `Router.completion` opens a new Redis connection on every call and never closes it when a deployment has an rpm/tpm limit. This is a leak.
- #37041 (closed) fixed Ollama's `get_runtime_model_info` ignoring `api_base`, which cost about 8s of connect timeouts per completion.
- #54203 is a typing refactor across 36 files with no runtime change.

## 5. Stability & Regressions
Ranked by severity:
1. **Spend and budget correctness** (all open, no fix PRs seen in the data):
   - #33873: spend-log batches can be lost after a local flush failure.
   - #36941: a multi-window budget reset can leave stale spend in the cache.
   - #35538: tag spend counters aren't reseeded from the database.
   - #21312: failed requests don't count toward RPM limits.
2. **#50065:** since v1.108.0, MCP `tools/list` blocks for 18–50s on the legacy subscription listener after `notifications/initialized`. This affects Open WebUI and the Python `mcp` SDK. Open.
3. **Security:** PR #50567 rejects `os.environ/` references in key, team and user logging metadata on write. Today, saving one returns 200 and then every trace is silently dropped. Open.
4. **Provider and translation bugs:**
   - #46059: watsonx streamed usage is lost, so the proxy reports its own much lower token estimate than watsonx bills. Open.
   - #46107: the per-page PDF token count uses Anthropic pricing for every provider, so Router pre-call checks reject PDFs that Gemini and OpenAI accept. PR #54208 addresses this. Open.
   - #28706: whitespace-only system messages aren't dropped for Anthropic.
   - #40887: Responses-to-Chat streaming can defer reasoning items until completion.
   - #44531: A2A `GetTask` against 1.0-only upstreams is downgraded to 0.3 and returns a 500.
   - #53716: Azure AI models exceed the context window through OpenWebUI.
   - PR #54209 preserves IAM auth on Anthropic-to-Bedrock fallbacks. PR #50932 keeps Azure content-filter results in streams.
5. **Startup:** #52247 (closed) fixed a crash on SQL_ASCII Postgres databases. #33021 reports that componentized startup ignores the YAML pool timeout.
6. **Fixed recently:**
   - #23741: Anthropic 400 on `vector_store_ids`.
   - #47856: `/toolset/{name}/mcp` scope regression.
   - #28993: the fastapi pin blocking a Starlette CVE.
   - PR #54167: a 500 on non-string advisor block ids.
   - PR #54181: managed files across `litellm_proxy` deployments.

## 6. What This Means for Application Developers
- **Update your CI.** If you verify image signatures, switch to keyless `cosign verify` with the project-releaser identity. Production deployments that want stability should use `lts`, which is v1.108.16.
- **Don't treat budgets and RPM limits as hard guarantees yet.** The open spend-tracking issues above can let usage run past a limit. Add provider-side limits or alerting.
- **Token counts:** if you use the count endpoints, expect 503s once #54163 lands, and handle them. Streamed watsonx usage and PDF pre-checks can be wrong, so validate them against provider billing.
- **MCP gateway users on v1.108.0 or later** may see slow `tools/list`, especially from Open WebUI. Test before upgrading.
- **Router users:** the sync-path Redis leak (#48589) matters if you use rpm/tpm limits in sync code. Prefer the async path for now.
- The Rust-native gateway is in development, so track the `[rust-tests]` PRs if you depend on router behavior.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
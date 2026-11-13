# AI Infrastructure Digest 2026-11-13

> Generated: 2026-11-13 15:03 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-13

**Scope note:** Only two digests were supplied: Dify (application and agent platform) and LiteLLM (gateway). Nothing was provided for the inference engines (vLLM, SGLang), local runtimes (llama.cpp, Ollama) or fine-tuning (Unsloth). Sections 3–5 therefore cannot make claims about those layers. Counts below are items cited in the digests, not repository totals.

## 1. Ecosystem Overview

Today's activity sits in the control plane above the model, not in kernels or serving engines. Both projects are building governance features: LiteLLM has customer, org and team budgets, and Dify has an Evaluation workspace (PR #46141) and the Agent v2 stack. Neither project reported any benchmark numbers. The dominant bug class is data integrity: spend and usage accounting at LiteLLM, and retention, deletion and concurrency races at Dify. Rust became LiteLLM's only router core, and Dify is moving test modules under strict pyrefly typing. Both are tightening their foundations while adding features.

## 2. Activity Comparison

| Metric | Dify | LiteLLM |
|---|---|---|
| Issues cited | ~27 (≥8 closed today) | ~23 (≥7 closed today) |
| PRs cited | ~11 (one XXL feature PR, #46141) | ~9, plus an unnumbered customer-budget stack |
| Release status | No release in 24h | `v1.111.0-dev.1` (dev pre-release) and `v1.108.7` (LTS patch) |
| Dominant themes | Concurrency, data loss, Agent v2, HITL regression | Spend tracking, provider translation, budgets |
| Fix coverage on top bugs | Partial: PRs exist for #46288, #46286, #46300, #46293 | Weak: no fix PRs linked for any spend-tracking bug |

## 3. Model Support Race

There is no frontier-model launch in this data, so there is no race to call.
- **LiteLLM** added breadth rather than new LLM architectures:
  - Soniox v6 STT (`stt-async-v6`, `stt-rt-v6`).
  - Bineric as a new provider, with EU-hosted chat models.
  - Nadir as an auto-router decisions provider.
  - Gemini embeddings with literal text inputs.
  - Configurable GitHub Copilot API version (Copilot Auto needs `2026-08-01`).
  - LiteFlow workflows addressed as `workflow/<name>`.
- **Dify** shipped no new model or hardware support today.
- The model-support work that showed up was deprecation hygiene: Soniox v5 is removed on Dec 15, 2026, and Bedrock Claude and Azure Whisper retirements were dated.

I can't say who leads on new models or architectures without the engine digests.

## 4. Performance Frontier

None of the optimization areas you listed (KV cache, batching, quantization, distributed serving, kernels) appear in either digest. The performance items that do appear are about reliability under load:
- **Dify #46241:** the Service API fails every request with a QueuePool timeout once concurrency reaches DB pool capacity. This is a cliff, not graceful degradation.
- **Dify #46283:** `workflow_app_logs` has no index that includes `created_at`, so the Workflow Logs tab reads every log row of the app. No fix PR yet.
- **Dify PR #46009:** reads suggestion knowledge bases through a short-lived session to cut DB connection hold time.
- **LiteLLM #51625:** rejects streaming on comma-separated models unless `fastest_response=True`, which avoids N wasted upstream calls.
- **LiteLLM #51568:** enforces settled customer budgets across workers.
- **LiteLLM #50482:** a feature request for cascade routing (cheap model, verify, escalate) as a cost optimization.

## 5. Layer Positioning

| Project | Layer | Today's evidence |
|---|---|---|
| **LiteLLM** | LLM gateway (provider normalization, routing, spend and budgets) | Provider cost maps, translation bugs, budget hierarchy, Rust router core |
| **Dify** | Application and agent platform (workflows, RAG, agents, HITL, evaluation) | Agent v2 sandbox and streaming, knowledge pipelines, Evaluation workspaces |
| Serving engines, local runtimes, fine-tuning | Not covered | No data supplied |

LiteLLM and Dify are complementary. Dify is a typical consumer of a gateway like LiteLLM, and their bug classes mirror each other. Dify's workflow and node-execution state can drift under load. LiteLLM's spend and usage state can drift under streaming and provider quirks. Both are reconciliation problems.

## 6. Trend Signals

1. **Governance is the new feature surface.** LiteLLM is adding multi-window budgets and a `pause_allow_increase` policy. Dify is adding evaluation with judgment conditions and cancellation and retry orchestration. Expect cost control and quality gating to become platform requirements.
2. **Accounting correctness is the main risk.** LiteLLM has five open spend or usage gaps with no linked fixes: #49567, #51456, #51389, #34747 and #36882. Do not treat SpendLogs as the billing source of truth for Gemini image, Bedrock Llama streaming, or YAML-anchored `model_info`. Reconcile against provider invoices.
3. **Silent translation loss.** Anthropic `strict` is dropped (#51230), and Anthropic image tokens are undercounted about 32x (#39910). Validate tool arguments client-side.
4. **Concurrency races on first-use paths.** Dify has duplicate `end_users` rows (#46267), Agent list creation failures (#46300) and stuck "running" nodes (#46242). Use retries and idempotent client logic. Don't rely on Dify's `idempotency_key` (#39685, closed today) until your build contains the enforcement fix.
5. **Unsafe destructive paths.** Dify retention deletes logs even when the backup fails (#46288, fix pending in #46289), and app deletion can commit when cleanup delivery fails (#46238, no fix PR). Take your own backups and hold off on aggressive retention until #46289 is merged.
6. **Release hygiene.**
   - Pin LiteLLM to the `lts` tag (v1.108.7) and test v1.111.0-dev.1 only in staging.
   - Test Dify HITL flows before moving to 1.19.0, which has a form-submit regression (#45753, closed today).
   - Check the `soupsieve` 2.9 → 4.0 major bump (Dify PRs #46295 and #46296) before merging.
   - With LiteLLM's Rust router, validate request-level `fallbacks` as a list and `max_fallbacks` as an integer, because malformed values now return a 500.

**Watch next:**
- Whether LiteLLM fixes the spend-tracking gaps.
- Whether Dify's #46289 and #46301 are merged and Agent v2 fixes reach a release.
- Whether #46141 lands, and its DB migrations.
- The Soniox v5 removal on Dec 15, 2026.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-13

## 1. Today's Highlights
No release today. Activity centers on the new Agent v2 / dify-agent stack and on concurrency and data-integrity bugs. Most were filed in a batch by the same reporters (mikamikasuki, Theysua), and several already have fix PRs. In parallel, the large Evaluation feature PR (#46141) is under review, and the Human Input (HITL) form flow has a regression in 1.19.0.

## 2. Releases & Breaking Changes
- No new releases in the last 24h.
- Regression in 1.19.0: submitting a Human Input form from the Web App returns 404 "Form not found" and leaves the run paused. This was closed today ([#45753](https://github.com/langgenius/dify/issues/45753)).
- Related HITL v1 work is tracked in [#46269](https://github.com/langgenius/dify/issues/46269) (closed; the pause-details form link did not open a usable form) and [#46236](https://github.com/langgenius/dify/issues/46236) (open; separate Console and Backstage form routes and token usage).
- Dependabot PRs bump `soupsieve` 2.9 → 4.0, which is a major version with a **BREAK** note, in [/api #46295](https://github.com/langgenius/dify/pull/46295) and [/dify-agent #46296](https://github.com/langgenius/dify/pull/46296). Check the release notes before merging.

## 3. New Model & Hardware Support
- No new model or hardware support landed today.
- [PR #46141](https://github.com/langgenius/dify/pull/46141) (XXL, open) adds Evaluation workspaces. It includes persistence, migrations, console APIs, and Celery orchestration with cancellation, retry, heartbeat leases and result export. It supports RAGAS and DeepEval metrics, LLM-judged Agent metrics, node-scoped results and judgment conditions. It includes DB migrations, so plan for that on upgrade.
- Closed [#44878](https://github.com/langgenius/dify/issues/44878): the local Agent sandbox with Landlock V1 hit EXDEV on kernel 6.6.

## 4. Performance & Optimization
- [#46283](https://github.com/langgenius/dify/issues/46283): `workflow_app_logs` has no index that includes `created_at`. The Workflow Logs tab therefore reads every log row of the app on each page view. This is an index and refactor candidate, with no fix PR yet. It gets worse as log volume grows.
- [#46241](https://github.com/langgenius/dify/issues/46241): the Service API fails every request with a QueuePool timeout once concurrent requests reach DB pool capacity. This is an exhaustion cliff rather than graceful degradation.
- [PR #46009](https://github.com/langgenius/dify/pull/46009): reads suggestion knowledge bases through a short-lived session, which reduces DB connection hold time. It is part of #45584.
- [#44974](https://github.com/langgenius/dify/issues/44974): CI setup of pnpm and Node is slow.
- No benchmark numbers were reported.

## 5. Stability & Regressions
Ranked by severity.

**Data loss / integrity**
- [#46288](https://github.com/langgenius/dify/issues/46288): retention deletes related logs even when the backup fails. Fix: [PR #46289](https://github.com/langgenius/dify/pull/46289).
- [#46238](https://github.com/langgenius/dify/issues/46238): app deletion can commit even when cleanup delivery fails. No fix PR yet.
- [#46286](https://github.com/langgenius/dify/issues/46286): expired-conversation cleanup leaves Agent workspaces active. Fix: [PR #46287](https://github.com/langgenius/dify/pull/46287).

**Concurrency**
- [#46242](https://github.com/langgenius/dify/issues/46242): async node execution storage produces duplicate-key errors and leaves finished nodes in "running". It was still reproducible on 1.19.0. No fix PR yet.
- [#46267](https://github.com/langgenius/dify/issues/46267): concurrent first requests with the same user value create duplicate `end_users` rows. No fix PR yet.
- [#46300](https://github.com/langgenius/dify/issues/46300): concurrent first Agent list requests can fail while creating Build conversations. Fix: [PR #46301](https://github.com/langgenius/dify/pull/46301).

**Agent v2 / dify-agent** (several closed today)
- [#46109](https://github.com/langgenius/dify/issues/46109): the run fails with "SSE stream reconnect attempts exhausted" while still making progress (closed).
- [#43453](https://github.com/langgenius/dify/issues/43453): the Agent LLM gateway stream stays open on early exit (closed).
- [#45299](https://github.com/langgenius/dify/issues/45299): usage of the in-flight request is lost on stop or abort (closed).
- [#42889](https://github.com/langgenius/dify/issues/42889): skills larger than 8 KB are silently truncated when read via the shell (closed).
- [#39685](https://github.com/langgenius/dify/issues/39685): `idempotency_key` is accepted but not enforced (closed).
- [#46268](https://github.com/langgenius/dify/issues/46268): the activity view shows a failed tool after the same call retries and succeeds (open).

**Security / correctness**
- [#46293](https://github.com/langgenius/dify/issues/46293): the scanner verdict cache survives provider updates. Fix: [PR #46294](https://github.com/langgenius/dify/pull/46294).
- [#46230](https://github.com/langgenius/dify/issues/46230): boolean tool parameters cast "off" and " false " to True (open).
- [#46263](https://github.com/langgenius/dify/issues/46263) (open) and [#45092](https://github.com/langgenius/dify/issues/45092) (closed): structured output rejects valid `$defs` names with JSON Pointer escapes, and crashes when a property name collides with a schema keyword and holds a `$ref`.
- [#46251](https://github.com/langgenius/dify/issues/46251): keys of an object-type conversation variable with no default always end up typed "number".

**RAG / UI**
- [#46225](https://github.com/langgenius/dify/issues/46225): Parent-child full-doc mode ignores text pre-processing rules.
- [#46195](https://github.com/langgenius/dify/issues/46195): the RAG Knowledge Pipeline fails to resolve `tenant_id` for workflow draft file variables on 1.19.0.
- [#46200](https://github.com/langgenius/dify/issues/46200): TagInput adds unconverted IME text as a tag. Fix: [PR #46201](https://github.com/langgenius/dify/pull/46201).
- [PR #43241](https://github.com/langgenius/dify/pull/43241): zero is rejected in required number inputs (Workflow Test Run).
- [PR #46029](https://github.com/langgenius/dify/pull/46029) (merged/closed): returns 400 instead of a misleading 500 for invalid knowledge-pipeline run input and caps document names.

## 6. What This Means for Application Developers
- **HITL users:** 1.19.0 has a Web App form-submit regression and unstable form links. Test Human Input flows before upgrading, and avoid relying on the pause-details link until the route and token separation (#46236) lands.
- **High-concurrency Service API:** size the DB pool carefully. Retry on the first-request races (duplicate `end_users`, Agent list). Don't assume node execution status is accurate under load (#46242).
- **Agent v2:** several stream, usage-accounting and truncation bugs were closed today. Keep an eye on the release that picks them up. Don't depend on `idempotency_key` for deduplication until it is enforced. Skills over 8 KB were truncated when read in the shell, so verify that fix is in your build.
- **Tool and structured-output authors:** pass booleans as real booleans, not strings like "off". Avoid `$defs` names that need JSON Pointer escaping.
- **Operators:** retention and app deletion have unsafe failure paths (#46288, #46238). Hold off on aggressive retention settings until #46289 is merged, and take your own DB backups.
- **Housekeeping:** many PRs today only move test modules under strict pyrefly. They don't change behavior.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-13

## 1. Today's Highlights
LiteLLM is in a customer-budget buildout: a stack of PRs from `ishaan-j-berri` adds customer org/team/member budgets, rollups, multi-window limits and a `pause_allow_increase` policy. Releases: `v1.111.0-dev.1` (dev) and the `v1.108.7` LTS patch. Bug reports cluster in provider translation: Anthropic `strict` dropped, Bedrock Llama streaming usage undercounted, and Gemini 503s.

## 2. Releases & Breaking Changes
- **[v1.108.7 (LTS)](https://github.com/BerriAI/litellm/releases/tag/v1.108.7)**: the `lts` image tag (`ghcr.io/berriai/litellm:lts`) moves to this patch. Images are cosign-signed.
- **[v1.111.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.1)**: a dev pre-release. It is signed with the key from commit `e82a3c6`. The notes in the data are truncated, so I can't list changes.
- **Rust router core is now the only core.** Issue [#51396](https://github.com/BerriAI/litellm/issues/51396) refers to this (#49513, #50178). The router now rejects malformed per-request `fallbacks` and `max_fallbacks` with a 500. The issue is closed.
- **Backport:** [#51044](https://github.com/BerriAI/litellm/pull/51044) restores the per-user spend breakdown on `rc/1.109.0` and includes an oauthlib 4.0.1 CVE bump.

## 3. New Model & Hardware Support
- **Soniox v6 STT:** [#51620](https://github.com/BerriAI/litellm/pull/51620) adds `stt-async-v6` and `stt-rt-v6` to the cost map. It also dates the Soniox, Bedrock Claude and Azure Whisper retirements. It resolves feature request [#50934](https://github.com/BerriAI/litellm/issues/50934); Soniox v5 is removed on Dec 15, 2026.
- **New provider:** [#51621](https://github.com/BerriAI/litellm/pull/51621) adds Bineric, with EU-hosted chat models and Zuse decision models.
- **Auto-router decisions:** [#41797](https://github.com/BerriAI/litellm/pull/41797) adds Nadir as a Decisions provider.
- **GitHub Copilot:** [#51623](https://github.com/BerriAI/litellm/pull/51623) makes the `x-github-api-version` header configurable through `GITHUB_COPILOT_API_VERSION`. Copilot Auto needs 2026-08-01.
- **Gemini embeddings:** [#48141](https://github.com/BerriAI/litellm/pull/48141) adds explicit text inputs, so `data:`, `gs://` and `files/` prefixes stay literal.
- **Workflows:** [#50384](https://github.com/BerriAI/litellm/pull/50384) adds LiteFlow gateway workflows, run via `model="workflow/<name>"`.

## 4. Performance & Optimization
No concrete throughput or latency numbers landed today. Related items:
- [#51625](https://github.com/BerriAI/litellm/pull/51625) rejects streaming on comma-separated models unless `fastest_response=True`. This avoids N wasted upstream calls and a 500.
- [#51568](https://github.com/BerriAI/litellm/pull/51568) enforces settled customer budgets across workers.
- Feature request [#50482](https://github.com/BerriAI/litellm/issues/50482) proposes cascade routing (cheap model, verify, escalate) for cost reduction.

## 5. Stability & Regressions
Ranked by severity:
1. **Spend tracking gaps (high for billing).**
   - [#49567](https://github.com/BerriAI/litellm/issues/49567): Gemini image requests return 200 but write no SpendLogs row.
   - [#51456](https://github.com/BerriAI/litellm/issues/51456): Bedrock Llama native streaming drops provider usage, so prompt tokens come out as zero.
   - [#51389](https://github.com/BerriAI/litellm/issues/51389): a shared YAML `model_info` anchor contaminates metadata and spend.
   - [#34747](https://github.com/BerriAI/litellm/issues/34747): `store_prompts_in_spend_logs` still persists `{}`.
   - [#36882](https://github.com/BerriAI/litellm/issues/36882): intermittently missing `cached_tokens` in streaming usage.
   - No fix PRs are linked for any of these.
2. **Routing and availability.**
   - [#50434](https://github.com/BerriAI/litellm/issues/50434): intermittent Gemini 503 and APIConnectionError.
   - [#50029](https://github.com/BerriAI/litellm/issues/50029): sticky sessions don't work, so the router switches endpoints.
   - [#36179](https://github.com/BerriAI/litellm/issues/36179): Uvicorn workers die during long SSE streams (stale, closed).
3. **Translation correctness.**
   - [#51230](https://github.com/BerriAI/litellm/issues/51230): `function.strict: true` is dropped for Anthropic.
   - [#27276](https://github.com/BerriAI/litellm/issues/27276): the Responses-to-Chat bridge drops tool names and forwards unsupported tool types.
   - [#36848](https://github.com/BerriAI/litellm/issues/36848): Vertex tuple-form `items` crash.
   - [#39910](https://github.com/BerriAI/litellm/issues/39910): Anthropic images are counted at a flat 85 tokens, a roughly 32x undercount.
   - [#51452](https://github.com/BerriAI/litellm/issues/51452): `ModelNotMappedError`.
4. **Closed today:**
   - [#45379](https://github.com/BerriAI/litellm/issues/45379): top-level `import soundfile` broke `/v1/messages` streaming since v1.103.0.
   - [#32114](https://github.com/BerriAI/litellm/issues/32114): request body parse failures were silently turned into `{}`.
   - [#51029](https://github.com/BerriAI/litellm/issues/51029): OTel `gen_ai.response.model` held the requested group rather than the serving model.
   - [#50104](https://github.com/BerriAI/litellm/issues/50104): Bedrock Claude tool search through the Agents SDK.
   - [#46295](https://github.com/BerriAI/litellm/issues/46295): MCP toolset OAuth login from Claude Code and Codex.
5. **Observability:** [#51221](https://github.com/BerriAI/litellm/issues/51221) (closed) reported no `gen_ai.usage` on the OTel span when a request times out.

## 6. What This Means for Application Developers
- **Budgets:** Per-customer and per-team budget features are arriving, but the PRs are still open. The per-model team budget request ([#50877](https://github.com/BerriAI/litellm/issues/50877)) is closed. Test any budget enforcement under multiple workers.
- **Billing reconciliation:** Don't rely on SpendLogs alone for Gemini image, Bedrock Llama streaming, or aliased `model_info` setups until those issues are fixed. Cross-check against provider invoices.
- **Anthropic strict tools:** `strict` is silently dropped, so validate tool arguments client-side.
- **Fallbacks:** With the Rust router core, validate that request-level `fallbacks` is a list and `max_fallbacks` is an integer.
- **Streaming and multi-model calls:** Avoid comma-separated models with `stream=True` unless `fastest_response` is set. Expect a 400 once [#51625](https://github.com/BerriAI/litellm/pull/51625) lands.
- **Production pinning:** Pin to the `lts` tag (v1.108.7) for production and try v1.111.0-dev.1 only in staging.
- **Retirements:** Plan for the Soniox v5 removal on Dec 15, 2026.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
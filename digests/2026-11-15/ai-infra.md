# AI Infrastructure Digest 2026-11-15

> Generated: 2026-11-15 14:28 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-15

**Scope note:** Only two digests were supplied: Dify (application platform) and LiteLLM (gateway). No inference engine, local runtime or fine-tuning digests (vLLM, SGLang, llama.cpp, Ollama, Unsloth) were included. Sections 3 to 5 cover only these two projects and don't rank the wider field. Counts below are items named in the digests. They are not full repository totals, except Dify's 98 updated PRs.

## 1. Ecosystem Overview
Today's activity sits at the gateway and application layers. It is about trust and cost accounting, not new model capability. LiteLLM changed its release-signing model to keyless Sigstore cosign, which breaks existing `cosign verify --key` workflows. Both projects have open correctness issues in token accounting and cache efficiency: Dify has prefix-cache loss, and LiteLLM has spend-log, budget and cache-leak bugs. Neither project shipped hardware or quantization work. Most Dify PRs are test-typing housekeeping.

## 2. Activity Comparison

| Project | Layer | Issues named | PRs named | Release status |
|---|---|---|---|---|
| Dify | App platform | 14 (7 performance, 4 stability, 3 tracking or feature) | 3 named; 98 updated, mostly pyrefly strict-typing | None in 24h |
| LiteLLM | Gateway | 28 (2 model or provider, 8 billing, 3 security, 10 streaming or translation, 5 routing or ops) | 14 (5 provider, 5 performance, 3 fixes, 1 closed signing pipeline) | 5 tags: v1.111.0-dev.4 (use this), dev.3 (partly published, don't use), v1.110.0-rc.3, v1.108.9, v1.107.0-rc.4 |

LiteLLM has about 2x Dify's named issues, and its backlog is older. Many of its issues carry numbers in the 27xxx to 36xxx range, and those are still open. Dify's open items are newer, mostly in the 463xx to 464xx range.

## 3. Model Support Race
- **LiteLLM leads, by default.** Dify shipped no model support today.
- **Open PRs, none merged per the digest:**
  - Meta Muse (Wonder 1.0, Ember 1.0, Spark 1.3) on Vertex AI, with native Responses routing (#50768).
  - Foundry Cohere embeddings through the Azure AI provider (#49926), and Azure Cohere Parse routing to `/v2/parse` (#51938).
  - New OpenAI-compatible providers Adaption (#51730) and AIGROW (#51880).
- **Gap to watch:** LiteLLM's central model-request thread (#18686, 24 comments) shows demand outpacing merges. Support is still pending until these PRs land.
- No new architectures, quantization formats or hardware backends appear in either digest.

## 4. Performance Frontier
Effort here is on cache correctness, memory and connection management. There is no kernel, batching or quantization work.

- **Prompt and prefix caching (both projects):**
  - Dify reports that agent compaction drops prefix-cache hit rate from about 99% to about 10% (#44826).
  - Dify also says Basic-mode chat puts retrieved context before static instructions, so there is no provider cache hit (#46425).
  - LiteLLM adds observability for native Anthropic prompt-cache usage (#51943).
  - LiteLLM's semantic cache returned another request's tool-call arguments at 0.9749 cosine similarity (#51900).
- **Resilience and routing:** LiteLLM retries a stream that fails before output on another deployment in the same model group (#51944), which helps with regional quota exhaustion.
- **Memory and runtime:**
  - LiteLLM's Rust router fix frees finished requests on completion (#51888). The digest gives no numbers.
  - Dify has about 1s GC pauses (#46430) and DB connections held across slow model and vector waits (#46370).
- **Overhead:** Dify runs the enterprise credential check six times per chat message (#46440) and builds a new HTTP client per call (#46243).
- **Distributed serving, KV cache and kernels:** nothing in these digests.

## 5. Layer Positioning

| Layer | Representative here | Focus today |
|---|---|---|
| Serving engine or local runtime | Not covered | n/a |
| Gateway | LiteLLM | Provider breadth, protocol translation (Anthropic, Responses, Chat), spend and budget control, signed releases |
| Application platform | Dify | Prompt assembly, agent context, DB and pool hygiene, enterprise API overhead, UI correctness |
| Fine-tuning | Not covered | n/a |

LiteLLM's streaming bugs show the cost of translating between protocols. Dify's issues show how prompt-template design affects cost at the provider. Dify depends on gateways and engines but doesn't compete with them.

## 6. Trend Signals
1. **Cost accounting is a reliability concern.**
   - LiteLLM has 8 open billing issues. They include missing SpendLogs rows for Gemini images (#49567), budget races (#34732) and lost spend-log batches (#33873).
   - Treat spend logs as non-authoritative and add provider-side hard caps.
2. **Cache-friendly prompt design matters.** Put static instructions before dynamic context, and watch compaction in long-running agents. Dify's reported hit-rate drop (99% to 10%) would translate directly into token cost.
3. **Release-supply-chain verification is changing.** Keyless cosign (OIDC) is replacing pinned public keys. Update CI and admission policies, and use v1.111.0-dev.4, not dev.3. Older LiteLLM lines still use the old key.
4. **Reasoning-model streaming is fragile through gateways.** Open issues cover dropped reasoning, signatures and function-call arguments (#32357, #27144, #40887, #48401, #41792). Test `/v1/messages` and Responses paths end to end.
5. **Security gaps persist.** These include Dify's missing `TOOL_MANAGE` check (#46447), LiteLLM's fail-open rate limiter (#35528) and `X-Forwarded-For` handling (#33324).

**For application developers:**
- Size DB pools generously, because Dify holds connections during slow waits.
- Avoid semantic cache on parameterized tool calls.
- Check wildcard model discovery, because partial wildcards are missing from `/v1/models` (#51534).
- Track the open provider PRs before relying on Muse, Foundry Cohere, Adaption or AIGROW through LiteLLM.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-15

Note: Dify is an LLM app platform, not an inference engine. The sections below are mapped to its application-layer concerns.

## Today's Highlights
No release shipped in the last 24h. Activity centered on two themes:
- **Prompt-cache efficiency.** Two reports say Dify's prompt assembly and agent context compaction defeat provider prefix caching.
- **Backend hygiene.** Several refactor issues target DB connection holding, GC pauses and redundant enterprise calls.

Most of the 98 updated PRs are a bulk campaign to bring test modules under strict pyrefly. A new security report flags a missing permission check.

## Releases & Breaking Changes
None in the last 24h.

## New Model & Hardware Support
No new model, backend or quantization support landed today.

## Performance & Optimization
- **Prefix-cache loss in Agent context compaction.** The reporter says compaction drops the prefix cache hit rate from about 99% to about 10%. The issue has 10 comments and the `no-issue-activity` label. [#44826](https://github.com/langgenius/dify/issues/44826)
- **Basic-mode chat with a knowledge base gets no provider prompt-cache hit.** The retrieved context is rendered before the app's instructions, so the prompt prefix changes on every turn. Moving the static instructions first would fix it. [#46425](https://github.com/langgenius/dify/issues/46425)
- **DB connections held across slow waits.** Pooled connections stay checked out during model, vector-store and thread waits in many request paths. The issue proposes naming the holders and blocking new ones. This matters for pool exhaustion under load. [#46370](https://github.com/langgenius/dify/issues/46370)
- **GC pauses of about 1s.** Full garbage collections stop API and worker processes for about a second because they rescan everything loaded at startup. [#46430](https://github.com/langgenius/dify/issues/46430)
- **Enterprise API overhead.**
  - The runtime credential check runs six times per chat message. [#46440](https://github.com/langgenius/dify/issues/46440)
  - A new HTTP client is built per enterprise API call instead of being reused. [#46243](https://github.com/langgenius/dify/issues/46243)
- **Queue wait time for streaming workflow runs.** An enhancement request to expose it, which would help latency attribution. [#46135](https://github.com/langgenius/dify/issues/46135)

## Stability & Regressions
Ranked by severity:
1. **Security: missing `TOOL_MANAGE` permission check** on the remote API schema fetch endpoint. The issue is open, and the data shows no linked fix PR. [#46447](https://github.com/langgenius/dify/issues/46447)
2. **Agent monitoring Active Users overcounts.** A returning user is counted once per day and per source. This is a metrics correctness bug and is open. [#46433](https://github.com/langgenius/dify/issues/46433)
3. **Built-in tool icons not displaying.** Closed the same day. [#46449](https://github.com/langgenius/dify/issues/46449)
4. **IME Enter in the workflow node title** blurs the field and saves the draft instead of confirming the candidate. This affects CJK input. Closed the same day. [#46443](https://github.com/langgenius/dify/issues/46443)

## What This Means for Application Developers
- **Prompt-cache hit rates.**
  - If you use Basic-mode chat with a knowledge base or long-running agents, expect lower provider cache hits and higher token cost until #46425 and #44826 are addressed.
  - Put static instructions before retrieved context in your prompt templates.
- **Security.** Until #46447 is fixed, restrict who can reach tool-management endpoints in multi-tenant deployments.
- **Capacity.** Connections held during slow model and vector calls (#46370) mean you should size the DB pool generously. Watch for worker pauses (#46430).
- **CI and tests.** Tracking items are the MySQL integration tests in CI ([#45035](https://github.com/langgenius/dify/issues/45035)) and the web test cleanup ([#46138](https://github.com/langgenius/dify/issues/46138)).
- **Other open requests.** Showing the app description in the chat header ([#44783](https://github.com/langgenius/dify/issues/44783)).
- **PR activity.** The pyrefly strict-typing PRs (for example [#46393](https://github.com/langgenius/dify/pull/46393) and [#46407](https://github.com/langgenius/dify/pull/46407)) are test-only and have no runtime impact. The notable web change is [#46454](https://github.com/langgenius/dify/pull/46454), which removes the console-wide modal context, so check any custom frontend forks.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest, 2026-11-15

## 1. Today's Highlights
LiteLLM moved release signing to keyless Sigstore cosign. **v1.111.0-dev.4** replaces the partly published dev.3, and `cosign verify --key` no longer works for it. Patch and RC branches (v1.110.0-rc.3, v1.108.9, v1.107.0-rc.4) also shipped. Most activity today is fixes to translation, streaming and budget/spend accounting, plus a Rust router memory fix.

## 2. Releases & Breaking Changes
- **[v1.111.0-dev.4](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.4)**: This is the release to use.
  - Signing is keyless cosign (GitHub OIDC). Verification commands based on `cosign.pub` fail, so update CI and admission-controller policies that verify images.
  - dev.4 is built from the same commit as dev.3 and fixes dev.3's publishing problems.
- **[v1.111.0-dev.3](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.3)**: Only partly published. Don't use it.
- **[v1.110.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.3)**: Still signed with the key from commit `e82a3c6`.
- **[v1.108.9](https://github.com/BerriAI/litellm/releases/tag/v1.108.9)**: Still signed with the key from commit `e82a3c6`.
- **[v1.107.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.4)**: Built from the reviewed merge commit `a1a541b`, with a "Verify this release" section. The note refers to an Oct 21 incident, but the excerpt doesn't give details.
- Related: [PR #28038](https://github.com/BerriAI/litellm/pull/28038) (closed) added a keyless OIDC release pipeline with SLSA L3 provenance.

## 3. New Model & Hardware Support
- [PR #51730](https://github.com/BerriAI/litellm/pull/51730) (open): adds Adaption as an OpenAI-compatible provider, with pricing so spend doesn't show as $0.
- [PR #51880](https://github.com/BerriAI/litellm/pull/51880) (open): adds AIGROW as an OpenAI-compatible provider, with cost-map entries and Admin UI support.
- [PR #50768](https://github.com/BerriAI/litellm/pull/50768) (open): adds Meta Muse models (Wonder 1.0, Ember 1.0, Spark 1.3) on Vertex AI, with native Responses routing.
- [PR #49926](https://github.com/BerriAI/litellm/pull/49926) (open): adds native Foundry Cohere embeddings through the Azure AI provider, with Azure key or Entra auth and cost calculation from billed usage.
- [PR #51938](https://github.com/BerriAI/litellm/pull/51938) (open): routes dedicated Azure Cohere Parse endpoints to `/v2/parse`.
- [#18686](https://github.com/BerriAI/litellm/issues/18686): the central thread for model, provider and endpoint requests. It has 24 comments.
- [#51171](https://github.com/BerriAI/litellm/issues/51171): feature request to forward the client's `_meta` on MCP `tools/call` to upstream MCP servers.

## 4. Performance & Optimization
- [PR #51888](https://github.com/BerriAI/litellm/pull/51888): fixes a memory regression in the Rust router. Finished requests stayed in memory until a full Python GC, so busy proxies grew well beyond what they needed. Each request now frees itself on completion. The excerpt gives no numbers.
- [PR #51944](https://github.com/BerriAI/litellm/pull/51944): retries a stream that fails before sending output on another deployment in the same model group. This helps when one region runs out of quota.
- [PR #51943](https://github.com/BerriAI/litellm/pull/51943): observes native Anthropic prompt-cache usage so operators can trust cache counters before enabling cache-failure alerts.
- [PR #51934](https://github.com/BerriAI/litellm/pull/51934): adds automatic ECB reference-rate lookup for custom currency pricing, with bounded time and response size.
- [PR #29092](https://github.com/BerriAI/litellm/pull/29092): uses pre-built UI artifacts in Docker builds for faster CI.

## 5. Stability & Regressions
Ranked by severity. Fix PRs are noted where I could see one.

**Billing and accounting correctness** (mostly filed by emerzon; the excerpts show no fix PRs unless noted)
- [#49567](https://github.com/BerriAI/litellm/issues/49567): Gemini image requests return 200 but write no SpendLogs row, with no warning.
- [#35525](https://github.com/BerriAI/litellm/issues/35525): successful responses with no cost release their budget reservation without recording spend.
- [#34732](https://github.com/BerriAI/litellm/issues/34732): concurrent requests can exceed `max_budget_per_session`.
- [#33873](https://github.com/BerriAI/litellm/issues/33873): spend-log batches are lost after a local non-Prisma flush failure.
- [#36941](https://github.com/BerriAI/litellm/issues/36941): a `budget_limits` reset can split counter and timestamp state.
- [#42627](https://github.com/BerriAI/litellm/issues/42627): a completed batch can be skipped by the model budget after a logging cancellation.
- [#33328](https://github.com/BerriAI/litellm/issues/33328): Replicate runtime derived from timestamps is divided by 1000 as if it were milliseconds.
- [#35563](https://github.com/BerriAI/litellm/issues/35563): reused provider response IDs collide in spend logs. This is closed.

**Security and enforcement**
- [#35528](https://github.com/BerriAI/litellm/issues/35528): the dynamic rate limiter admits traffic after an unexpected check failure (fail-open).
- [#33324](https://github.com/BerriAI/litellm/issues/33324): `allowed_ips` compares the raw multi-hop `X-Forwarded-For` header, so legitimate clients behind multiple proxies can be refused.
- [#51900](https://github.com/BerriAI/litellm/issues/51900): semantic caching with MiniLM/bge-small returned another request's `tool_calls` arguments, at 0.9749 cosine similarity. Avoid semantic cache on parameterized tool calls.

**Streaming and translation**
- [#32357](https://github.com/BerriAI/litellm/issues/32357): `/v1/messages` with reasoning backends streams `thinking_delta` inside a text block and sends a duplicate `message_start`. The result is empty content in the Anthropic SDK and Claude Code.
- [#27144](https://github.com/BerriAI/litellm/issues/27144): ChatGPT/Codex Responses streaming drops function-call args when only `.done` is emitted.
- [#40887](https://github.com/BerriAI/litellm/issues/40887): the Responses-to-Chat bridge drops the initial role and incremental reasoning items.
- [#48401](https://github.com/BerriAI/litellm/issues/48401): OpenRouter chunks that carry only `reasoning_details` are dropped, including Claude signatures.
- [#41792](https://github.com/BerriAI/litellm/issues/41792): Bedrock rejects encrypted reasoning after a model switch.
- [#46209](https://github.com/BerriAI/litellm/issues/46209): Azure `mistral-medium-3-5` raises a `TypeError` after tool results of roughly 500 characters or more.
- [#43487](https://github.com/BerriAI/litellm/issues/43487): a partial generic streaming chunk raises `KeyError`.
- [#36928](https://github.com/BerriAI/litellm/issues/36928): `interactions.create()` drops `response_format` for Gemini through `litellm_proxy`.
- [#50514](https://github.com/BerriAI/litellm/issues/50514): a Bedrock Invoke `/v1/messages` stream keeps generating after the detached-drain abort. This is closed.
- [#47607](https://github.com/BerriAI/litellm/issues/47607): `encrypted_content_affinity` traps follow-ups on a failing deployment. This is closed.

**Routing, config and ops**
- [#51452](https://github.com/BerriAI/litellm/issues/51452): `ModelNotMappedError` in `utils.py`. It was filed with no details.
- [#51534](https://github.com/BerriAI/litellm/issues/51534): an unprefixed partial wildcard such as `gemini-*` routes correctly but is missing from `/v1/models` and `/model/info`.
- [#33021](https://github.com/BerriAI/litellm/issues/33021): componentized startup ignores YAML database pool settings.
- [#45988](https://github.com/BerriAI/litellm/issues/45988): the startup schema check suggests an invalid primary-key rewrite for partitioned SpendLogs. Don't apply it blindly.
- [#45246](https://github.com/BerriAI/litellm/issues/45246): the printed `stream` boolean can truncate GKE log batches. Fix: [PR #51939](https://github.com/BerriAI/litellm/pull/51939), which renames the field to `is_stream`.

**Open fix PRs**
- [PR #51937](https://github.com/BerriAI/litellm/pull/51937): retries failed config-reload callbacks, including after a Redis reconnect.
- [PR #43312](https://github.com/BerriAI/litellm/pull/43312): persists explicit virtual-key expiration, which is currently silently discarded.

## 6. What This Means for Application Developers
- **Update artifact verification.** If you verify LiteLLM images or packages from v1.111.0-dev.3 onward, switch to keyless cosign verification and use dev.4. Older release lines keep the old key.
- **Don't treat spend logs as authoritative yet.** Several open issues involve missing, colliding or lost spend rows and budget races. For hard budget caps, add an upstream provider-side limit.
- **Test reasoning and streaming paths end to end.** If you front vLLM/SGLang reasoning models or use OpenRouter, Bedrock or Codex with Claude Code or the Anthropic SDK, check `/v1/messages` and Responses streaming. Several known bugs drop reasoning, signatures or tool arguments.
- **Be careful with semantic cache on tool-calling traffic.** Issue #51900 shows tool-call arguments leaking across requests.
- **Check wildcard model listings.** Clients that discover models through `/v1/models` won't see partial wildcards without a provider prefix.
- **Rust router users:** watch for [PR #51888](https://github.com/BerriAI/litellm/pull/51888) if you see memory growth.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
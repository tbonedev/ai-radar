# AI Infrastructure Digest 2026-11-19

> Generated: 2026-11-18 16:07 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-11-19

**Coverage note:** Today's input covers only **Dify** and **LiteLLM**, which are both application and gateway-layer projects. There was no data for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning (Unsloth). Sections 3–5 are limited to what these two digests support, and I mark where the evidence is thin.

## 1. Ecosystem Overview
Today's activity sits in the control plane above the model. The work is observability, billing, security and database reliability, and little of it concerns model or kernel capability. Both projects shipped releases: Dify 1.20.0, and LiteLLM v1.111.0-rc.1, v1.110.0 and LTS v1.108.11. Neither added new hardware support. Most of the new work is about running these systems at scale: OTel and Langfuse tracing, malware scanning on ingestion, multi-tenant budgets and Postgres/MySQL edge cases. Several of the most serious open bugs involve the database, such as read-replica recovery, startup crashes and connection-pool exhaustion.

## 2. Activity Comparison

| | Dify | LiteLLM |
|---|---|---|
| Issues | About 24 cited, no total given. Dominated by RAG correctness and agent/runtime bugs. | About 20 cited, no total given. Dominated by DB/startup, routing and accounting bugs. |
| PRs | About 11 cited, no total given. Themes are CI speed, GC tuning, quota semantics and OpenAPI. | **500 updated**. Themes are customer-portal billing, backports and provider and cost-map updates. |
| Release status | **1.20.0** (stable) | **v1.111.0-rc.1** (RC), **v1.110.0** (stable) and **v1.108.11** (LTS) |
| Open breaking risk | `limit` fields become `int \| null` ([#46692](https://github.com/langgenius/dify/pull/46692), open). | `fix(azure_ai)!` ([#52474](https://github.com/BerriAI/litellm/pull/52474), open). |

The issue and PR counts for Dify, and the issue counts for LiteLLM, are items cited in the digests, not repository totals. Only LiteLLM's 500 PRs is a reported figure.

## 3. Model Support Race
Neither project shipped model or architecture support today, so no one is ahead on this. Dify reported nothing new. LiteLLM's model work is entirely in open PRs, not shipped releases:
- Kimi K3 (Moonshot) and Together AI Inkling ([#33922](https://github.com/BerriAI/litellm/pull/33922)).
- Obscurify.ai as an OpenAI-compatible provider ([#48044](https://github.com/BerriAI/litellm/pull/48044)).
- Cost-map fixes: 15 Together dedicated-only rows ([#51815](https://github.com/BerriAI/litellm/pull/51815)), Tavily search-depth pricing ([#52564](https://github.com/BerriAI/litellm/pull/52564)) and Azure US-Gov `gpt-4o-mini` ([#52557](https://github.com/BerriAI/litellm/pull/52557), closed).

LiteLLM is the only one of the two doing day-to-day provider and model onboarding, which is the gateway's job. Azure Foundry Responses-API handling ([#52474](https://github.com/BerriAI/litellm/pull/52474)) is the most consequential provider-compatibility change. No architecture-level support (MoE, MLA, new quantization formats) can be assessed without engine data.

## 4. Performance Frontier
No KV-cache, batching, quantization or kernel work appears in today's data. The optimization effort is at the gateway and application level:
- **Event-loop and memory hygiene (LiteLLM):** The cache key is built from the stringified request and computed twice, which costs seconds on payloads over 200 MB ([#51935](https://github.com/BerriAI/litellm/issues/51935), closed). Streaming creates a reference cycle ([#51936](https://github.com/BerriAI/litellm/issues/51936), closed). Credential sync is O(n²) and blocks the loop for 10s+ per reload ([#43922](https://github.com/BerriAI/litellm/issues/43922), closed). These figures come from issue reports, not benchmarked fixes.
- **Runtime tuning (Dify):** [#46432](https://github.com/langgenius/dify/pull/46432) freezes startup objects to shrink full-GC scans, with no benchmark data. [#46706](https://github.com/langgenius/dify/pull/46706) stops multi-megabyte Base64 icons from being returned in list responses.
- **Connection pools:** LiteLLM's Rust DB layer now uses 2 pool connections ([#52532](https://github.com/BerriAI/litellm/pull/52532)). Dify's Service API fails every request when concurrency hits pool capacity ([#46241](https://github.com/langgenius/dify/issues/46241)).
- **Cross-layer cache interaction:** Dify's agent context compaction is reported to cut the prefix-cache hit rate to about 10% from 99% ([#44826](https://github.com/langgenius/dify/issues/44826)). This is an unverified claim in an RFC, but it is the one item that touches engine-level KV/prefix caching. Prefix cache hit rate is also affected by what the gateway does to the prompt.

## 5. Layer Positioning
- **LLM gateway and proxy (LiteLLM):** It handles provider translation (Anthropic ↔ OpenAI ↔ Responses), routing, rate limits, spend and budgets, guardrails and key management. It is ahead on multi-tenant billing and provider breadth. Its release channels (RC, stable, LTS) suggest enterprise operators are the audience.
- **Application and agent orchestration (Dify):** It covers RAG, knowledge bases, Chatflow and agents, and it sits above any gateway. Its bugs are in retrieval correctness, agent lifecycle and frontend behavior. Its new work is in ingestion security (malware scanning) and observability export.
- **Not represented today:** There were no serving engines, local runtimes or fine-tuning frameworks. Any conclusions about those layers need other digests.

The two overlap on observability (Langfuse, OTel) and on cost accounting. Dify's 1.19.0 zero-cost bug ([#46594](https://github.com/langgenius/dify/issues/46594)) and LiteLLM's Langfuse prompt-version mislink ([#52490](https://github.com/BerriAI/litellm/issues/52490)) both affect tracing accuracy.

## 6. Trend Signals
1. **Observability is converging on OpenTelemetry.** Dify now exports to any OTel collector, and Langfuse retired its legacy ingestion endpoint, which forced integration updates. Plan on OTel-first tracing.
2. **Cost and quota accounting is the main source of defects.** Examples are zero cost for custom models, failed requests not counting toward RPM ([#21312](https://github.com/BerriAI/litellm/issues/21312)), TPM ignored in priority groups ([#52548](https://github.com/BerriAI/litellm/issues/52548)) and Dify's `-1`→`null` quota change. Don't treat gateway limits as strict enforcement without testing them.
3. **Postgres and MySQL operational edge cases are the common failure mode.** These include read-replica recovery ([#52284](https://github.com/BerriAI/litellm/issues/52284)), `SQL_ASCII` startup crashes ([#52247](https://github.com/BerriAI/litellm/issues/52247)), missing libpq ([#49680](https://github.com/BerriAI/litellm/issues/49680)), MySQL datetime handling ([#46660](https://github.com/langgenius/dify/issues/46660)) and pool exhaustion. Verify database encoding, driver libraries and pool sizing in migration jobs.
4. **Responses API and agent tool-calling compatibility is still immature in gateways.** Examples are dropped parallel tool-call arguments in streaming ([#45348](https://github.com/BerriAI/litellm/issues/45348)), Responses retry safety ([#52561](https://github.com/BerriAI/litellm/pull/52561)) and Azure Foundry routing. Test streaming and parallel tool calls on your exact route.
5. **Ingestion security is becoming a standard feature**, as with Dify's malware scanning of uploads. Expect some added latency on large uploads, though no figures were given.

**What to do now:**
- Keep production on LiteLLM v1.110.0 or the `lts` tag, and treat v1.111.0-rc.1 as test-only.
- Confirm the read-replica fix is in your pinned version before relying on it.
- Review Dify's Top K and dedup behavior in 1.19.0 before tuning RAG.
- Measure prefix-cache hit rate before enabling agent context compaction on self-hosted inference.
- Re-check both projects after the open breaking-change PRs (#52474, #46692) land.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-19

## 1. Today's Highlights
Dify **1.20.0** shipped with OpenTelemetry trace export to any collector, a Langfuse fix for its retired legacy ingestion endpoint, and malware scanning of uploaded knowledge files before indexing. Issue traffic was dominated by RAG and knowledge-base correctness bugs, and a Langfuse cost regression reported against 1.19.0. On the PR side, work centers on web CI speed-ups and a GC-freeze performance change.

## 2. Releases & Breaking Changes
- **[v1.20.0](https://github.com/langgenius/dify/releases)** (release prep: [#46558](https://github.com/langgenius/dify/issues/46558), closed)
  - OpenTelemetry export to any OTel collector.
  - Langfuse integration updated after the legacy ingestion endpoint was retired. Anyone on an older version should upgrade to keep traces flowing.
  - Uploaded knowledge files are scanned for malware before indexing.
  - Chatflows can show Agent tool activity. The release notes in the data are truncated, so check the full notes for migration details.
- In progress: [#46692](https://github.com/langgenius/dify/pull/46692) changes plan-quota `limit` fields on `/features` and `/features/vector-space` to `int | null`. `null` means unlimited, `0` means none available, and billing's `-1` is translated to `null`. API consumers that treat `-1` as "unlimited" will need to adapt once it lands.
- In progress: [#46510](https://github.com/langgenius/dify/pull/46510) would let personal access tokens manage apps, credentials and app API keys through OpenAPI.

## 3. New Model & Hardware Support
Nothing new today. Dify is a gateway and orchestration layer, so there were no model, backend or quantization changes in this window.

## 4. Performance & Optimization
- [#46432](https://github.com/langgenius/dify/pull/46432) (open, XL) freezes objects alive at startup so full garbage collections scan only request state. The author updated it on 2026-11-18, and the data includes no benchmark numbers. It relates to the QueuePool issue below.
- [#44826](https://github.com/langgenius/dify/issues/44826) is an RFC reporting that Agent context compaction may break prefix caching, with a cache hit rate of about 10% versus 99% without compaction. This is the report's claim, not a verified measurement. It could matter for cost and latency on self-hosted inference such as vLLM or SGLang.
- [#46706](https://github.com/langgenius/dify/pull/46706) serves dataset icons through file previews. Before this, list pages returned multi-megabyte Base64 icons in every knowledge-base response.
- [#46310](https://github.com/langgenius/dify/pull/46310) uses Redis `SET NX EX` to claim tenant task queues atomically. This stops concurrent first submissions from exceeding `TENANT_ISOLATED_TASK_CONCURRENCY`.
- [#46707](https://github.com/langgenius/dify/pull/46707) and [#46703](https://github.com/langgenius/dify/pull/46703) (closed) run only the affected web tests on PRs. This is CI-only.

## 5. Stability & Regressions
Ranked by severity:
1. **[#46241](https://github.com/langgenius/dify/issues/46241)** (closed): the Service API fails every request with a QueuePool timeout once concurrency reaches the database pool capacity. It is closed, but I didn't see a linked fix PR in this data.
2. **[#46594](https://github.com/langgenius/dify/issues/46594)**: in 1.19.0, unknown custom-model costs are reported as zero, which overrides Langfuse model pricing. This is a cost-accounting regression and is relevant to the 1.20.0 tracing work. No fix PR is listed.
3. **[#46660](https://github.com/langgenius/dify/issues/46660)**: OpenAPI authentication crashes on MySQL-compatible backends. It compares a naive `expires_at` with an aware datetime, which raises a TypeError. Related: [#45035](https://github.com/langgenius/dify/issues/45035) (closed) is about running MySQL integration tests in CI.
4. **RAG and retrieval correctness**
   - [#46584](https://github.com/langgenius/dify/issues/46584): summary hits and original chunk hits take separate Top K slots before deduplication (1.19.0).
   - [#46659](https://github.com/langgenius/dify/issues/46659): duplicate retrieval sources appear when several segments belong to one document.
   - [#45526](https://github.com/langgenius/dify/issues/45526): indexing strips leading markdown/code syntax from chunks.
   - [#46661](https://github.com/langgenius/dify/issues/46661): a Chatflow loses saved LLM reasoning after resuming from a pause.
   - Fix PRs: [#44666](https://github.com/langgenius/dify/pull/44666) keeps text cells in legacy `.xls` files, and [#45089](https://github.com/langgenius/dify/pull/45089) returns an empty preview when no QA chunks are produced.
5. **Agent and runtime**
   - [#46567](https://github.com/langgenius/dify/issues/46567) (closed): Dify Agent can expire a pending cancellation before its run expires.
   - [#46657](https://github.com/langgenius/dify/issues/46657): retried Agent cleanup can miss workflow-tool workspaces.
   - [#46680](https://github.com/langgenius/dify/issues/46680): a workflow archive download stays pending after month-lock retries are exhausted.
6. **Moderation, input handling and security**
   - [#46652](https://github.com/langgenius/dify/issues/46652): keyword output moderation misses terms split across stream buffers.
   - [#46649](https://github.com/langgenius/dify/issues/46649): unpadded base64url file references are parsed as raw record IDs.
   - [#46638](https://github.com/langgenius/dify/issues/46638): multipart uploads are not removed when OpenAPI requests are rejected.
   - [#46591](https://github.com/langgenius/dify/issues/46591): the `difyctl` install docs pipe `curl | sh`. The installer verifies the binary's SHA-256, but the script itself isn't integrity-checked.
7. **Frontend and misc**
   - [#46686](https://github.com/langgenius/dify/issues/46686): `crypto.randomUUID` is unavailable over plain HTTP.
   - [#46198](https://github.com/langgenius/dify/issues/46198): the variable inspector overwrites invalid JSON drafts.
   - [#46699](https://github.com/langgenius/dify/issues/46699): the new RAG overview keeps polling after indexing finishes.
   - [#46700](https://github.com/langgenius/dify/issues/46700) (closed): device authorization loses focus while Approve is pending. A fix is in [#46701](https://github.com/langgenius/dify/pull/46701), also closed.
   - [#46663](https://github.com/langgenius/dify/issues/46663) (closed): uploaded avatars return 404 for other users.
   - [#46629](https://github.com/langgenius/dify/issues/46629) (closed): an unknown timezone raises `KeyError` instead of "Invalid timezone".
   - [#46633](https://github.com/langgenius/dify/issues/46633): a custom tool sends null for request-body properties whose schema has no type.
   - [#46305](https://github.com/langgenius/dify/pull/46305) (open) fixes MCP tool list output being stringified with `str()`.

## 6. What This Means for Application Developers
- **Observability:** Upgrade to 1.20.0 if you use Langfuse. Then check cost fields for custom models, because 1.19.0 reports zero cost for them ([#46594](https://github.com/langgenius/dify/issues/46594)). OTel export lets you send traces to your existing collector.
- **Security and ingestion:** Malware scanning of knowledge uploads adds a check before indexing. Expect some extra latency on large uploads, though the data gives no numbers.
- **RAG tuning:** Be aware of the 1.19.0 Top K and dedup behavior ([#46584](https://github.com/langgenius/dify/issues/46584), [#46659](https://github.com/langgenius/dify/issues/46659)). Chunk-stripping ([#45526](https://github.com/langgenius/dify/issues/45526)) can degrade code-heavy knowledge bases.
- **Self-hosting at scale:** Watch DB pool sizing, since a pool-capacity timeout can fail every Service API request ([#46241](https://github.com/langgenius/dify/issues/46241)). MySQL-compatible deployments should hold off on OpenAPI auth until [#46660](https://github.com/langgenius/dify/issues/46660) is fixed. Serve over HTTPS to avoid [#46686](https://github.com/langgenius/dify/issues/46686).
- **Agents on self-hosted inference:** Context compaction may defeat prefix caching ([#44826](https://github.com/langgenius/dify/issues/44826)). Measure your cache hit rate before enabling it.
- **API clients:** Prepare for `null`-means-unlimited quota semantics ([#46692](https://github.com/langgenius/dify/pull/46692)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-19

## 1. Today's Highlights
LiteLLM shipped **v1.111.0-rc.1**, **v1.110.0** and an LTS patch, **v1.108.11**. The day's PR traffic (500 PRs updated) centers on the customer portal and gateway-app billing (surcharges, per-app budgets), plus several backports to the LTS and stable branches. On the stability side, a read-replica Prisma failure that stops the proxy from recovering is the most serious report. A few startup-crash bugs on the Postgres and migration paths also stand out.

## 2. Releases & Breaking Changes
The release notes in the source data are truncated, so I can't list changelog items for these versions.

- **v1.111.0-rc.1**: release candidate. Images are cosign-signed (`ghcr.io/berriai/litellm:v1.111.0-rc.1`). Not for production yet.
- **v1.110.0**: stable release, also cosign-signed.
- **v1.108.11 (LTS)**: the `lts` image tag now points here. Teams on `lts` get it on their next pull.
- **Possible breaking change:** [PR #52474](https://github.com/BerriAI/litellm/pull/52474) `fix(azure_ai)!` is marked breaking in its title. Model routers on a Foundry project or resource base (`services.ai.azure.com`) would call the Responses API natively instead of going through chat. It makes the Responses compact endpoint work, which previously returned a 500. The LTS backport is [#52476](https://github.com/BerriAI/litellm/pull/52476). Both are still open.
- **Backport:** [#52561](https://github.com/BerriAI/litellm/pull/52561) backports [#52461](https://github.com/BerriAI/litellm/pull/52461) to stable/1.109.x. It stops the router from retrying a Responses stream after an output item has already reached the client.

## 3. New Model & Hardware Support
Nothing new on hardware. Model and provider work, all in open PRs:
- [#33922](https://github.com/BerriAI/litellm/pull/33922): Kimi K3 (Moonshot) and Together AI Inkling.
- [#48044](https://github.com/BerriAI/litellm/pull/48044): Obscurify.ai as a JSON-configured OpenAI-compatible provider. The author discloses they run the service.
- [#51815](https://github.com/BerriAI/litellm/pull/51815): dates 15 Together dedicated-only cost-map rows. Under a `together/*` wildcard these models show up in the list but return 400.
- [#52564](https://github.com/BerriAI/litellm/pull/52564): prices the search depth Tavily chooses automatically.
- [#52557](https://github.com/BerriAI/litellm/pull/52557) (closed): cost-map update that drops the `claude-mythos-preview` deprecation date and adds `azure/us-gov/gpt-4o-mini`.
- [#43353](https://github.com/BerriAI/litellm/pull/43353): ZTDS zero-trust sanitization guardrail (IETF draft-02).

## 4. Performance & Optimization
The numbers below come from issue reports, not from fixes with benchmarks.
- [#51935](https://github.com/BerriAI/litellm/issues/51935) (closed): the response cache key is built from the stringified full request and computed twice per request. Requests over 200 MB of images spend seconds on the event loop. Related test PR: [#52562](https://github.com/BerriAI/litellm/pull/52562).
- [#51936](https://github.com/BerriAI/litellm/issues/51936) (closed): the Router defines a `FallbackStreamWrapper` class on every streamed call. That creates a reference cycle, so streamed completions stay in memory until a full GC.
- [#43922](https://github.com/BerriAI/litellm/issues/43922) (closed): with `store_model_in_db`, credential sync is O(n²) and blocks the event loop for 10s+ per reload when there are thousands of credentials.
- [#52532](https://github.com/BerriAI/litellm/pull/52532): integration rigs are resized because the Rust database layer now takes 2 connections from the pool (follows #52173). This matters for pool sizing.
- [#49930](https://github.com/BerriAI/litellm/issues/49930): health probes evict context on a local model with a 262k window, which causes latency spikes near the context limit.

## 5. Stability & Regressions
Ranked by severity:
1. [#52284](https://github.com/BerriAI/litellm/issues/52284) (closed): with `DATABASE_URL_READ_REPLICA`, a reconnect cancelled by its 2 s timeout leaves the reader Prisma engine dead. Reads never fall back to the writer, and the proxy never heals itself.
2. [#52247](https://github.com/BerriAI/litellm/issues/52247) (open): on v1.109.1, the proxy crashes at startup with a `ValueError` in `find_blockers` when the Postgres encoding is `SQL_ASCII`. No fix PR in the data.
3. [#49680](https://github.com/BerriAI/litellm/issues/49680) (open): `prisma_migration --skip_server_startup` crashes with an `ImportError` when `psycopg` can't load libpq, because the import in `ensure_request_log_indexes` is unguarded.
4. [#50905](https://github.com/BerriAI/litellm/issues/50905) (open, 6 👍): since v1.108.0, `/key/update` and `/team/update` store the audit `before_value` as a JSON string. After that, `GET /audit` returns 500 and the Audit Logs UI breaks.
5. [#45348](https://github.com/BerriAI/litellm/issues/45348) (open): streaming `/v1/messages` on the `chatgpt` (Codex) provider drops parallel tool-call arguments. Every `tool_use` block has an empty `input`.
6. [#41067](https://github.com/BerriAI/litellm/issues/41067) (open): Anthropic `/v1/messages` streaming loses prompt-cache accounting when it is bridged to an OpenAI-compatible upstream.
7. [#52548](https://github.com/BerriAI/litellm/issues/52548) (open): under `usage-based-routing-v2`, priority routing groups ignore deployment TPM limits and fail over early on RPM.
8. [#21312](https://github.com/BerriAI/litellm/issues/21312) (open): failed requests aren't counted toward RPM limits.
9. [#52490](https://github.com/BerriAI/litellm/issues/52490) (open): Langfuse traces link the `production` prompt version when the request used `prompt_label` or `prompt_version`.
10. [#37258](https://github.com/BerriAI/litellm/issues/37258) (open): `PUT /v1/mcp/server` silently nulls `authorization_url`, `token_url` and `oauth2_flow` when `delegate_auth_to_upstream=true`.
11. Smaller items:
    - [#52526](https://github.com/BerriAI/litellm/issues/52526): `resize_image_high_res` upscales images, which inflates high-detail image token counts.
    - [#51954](https://github.com/BerriAI/litellm/issues/51954) (closed): Anthropic translation rejects concatenated JSON tool-call arguments.
    - [#46483](https://github.com/BerriAI/litellm/issues/46483) (closed): the Responses bridge drops the assistant message `phase`.
    - [#42195](https://github.com/BerriAI/litellm/issues/42195) (closed): a cache hit in a plain `pip install litellm` imports proxy-only modules and fails with `ModuleNotFoundError: fastapi`.
    - [#34614](https://github.com/BerriAI/litellm/issues/34614) (closed): Redis `ssl_check_hostname` TypeError on v1.93.0.
    - [#36524](https://github.com/BerriAI/litellm/issues/36524) (closed): a guardrail write-back turns Anthropic `document` blocks into `image` blocks, so PDFs get a 400.
- **Fix in review:** [#52559](https://github.com/BerriAI/litellm/pull/52559) redacts generated images when message logging is off.
- **Fix in review:** [#52555](https://github.com/BerriAI/litellm/pull/52555) and its LTS twin [#52556](https://github.com/BerriAI/litellm/pull/52556) bill web and file search together. #52555 is closed and #52556 is open.

## 6. What This Means for Application Developers
- **Pinning:** treat v1.111.0-rc.1 as a test-only candidate. Production should stay on v1.110.0 or the `lts` tag (v1.108.11).
- **Azure Foundry model routers:** before upgrading, check whether you use `azure_ai/model_router/...` on a Foundry base. The behavior change in #52474 is flagged as breaking. The Responses path should work better, and billing will include the routing fee.
- **Read replicas:** if you set `DATABASE_URL_READ_REPLICA`, watch for stuck read failures after a DB blip (#52284). The data shows the issue closed but doesn't confirm a released fix. Check the release notes before relying on it.
- **Database setup:** a `SQL_ASCII` database encoding or a missing libpq can stop startup (#52247, #49680). Verify both in your migration jobs.
- **Agent and tool-calling flows:** parallel tool calls streamed through `/v1/messages` on the Codex provider lose their arguments (#45348). Use non-streaming for those calls, or avoid that route.
- **Cost and limit accounting:** failed requests don't count toward RPM (#21312). Priority routing groups don't enforce TPM (#52548). Don't rely on LiteLLM alone for strict limits in those setups.
- **Multi-tenant billing:** expect more customer-portal features (per-app surcharges and budgets: [#52406](https://github.com/BerriAI/litellm/pull/52406), [#52492](https://github.com/BerriAI/litellm/pull/52492), [#52485](https://github.com/BerriAI/litellm/pull/52485), [#52477](https://github.com/BerriAI/litellm/pull/52477)). All are still open.
- **Large-payload agents:** agents that resend large image histories should watch event-loop latency from cache-key hashing, even though the cache-key issue (#51935) is now closed. They should also check that their pinned version includes the fix.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
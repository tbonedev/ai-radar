# AI Infrastructure Digest 2026-08-11

> Generated: 2026-08-10 23:22 UTC | Projects covered: 6

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Chatwoot](https://github.com/chatwoot/chatwoot)
- [Meilisearch](https://github.com/meilisearch/meilisearch)
- [Ollama](https://github.com/ollama/ollama)
- [vLLM](https://github.com/vllm-project/vllm)

---

## Cross-Project Comparison

# AI Infrastructure Ecosystem — Cross-Project Digest
**2026-08-11**

## 1. Ecosystem Overview

Today's activity splits cleanly into two modes: **feature races** (vLLM's Kimi K3 launch, Ollama's Muse Glimmer day-0 support) and **stabilization pushes** (Meilisearch's revert-heavy patch series, LiteLLM's security hardening, Dify's data-integrity fixes). The serving/inference layer (vLLM, Ollama) is absorbing a wave of new-model support work tied to recent releases from Meta and DeepSeek, with both projects shipping rough, partially-broken day-0 support that needed immediate follow-up fixes. The gateway layer (LiteLLM) is defined by billing/observability correctness bugs (streaming undercounts, cache-accounting gaps) and two disclosed UI auth weaknesses — a reminder that gateways carry security surface area serving engines don't. Meanwhile Dify, at the application/orchestration layer, is dealing with vector-store data-loss bugs that echo a familiar RAG-infrastructure failure mode: deletion doesn't actually delete. Across the board, no project shipped a headline breaking change today, but three (vLLM, Ollama, LiteLLM) are visibly racing to support the same new-model wave (Kimi K3 / DeepSeek-V4-Flash / Muse Glimmer) within days of upstream release.

## 2. Activity Comparison

| Project | Layer | New Issues (flagged) | New/Notable PRs | Release Today |
|---|---|---|---|---|
| **vLLM** | Serving engine | ~10 stability issues + several perf issues | v0.27.0 (561 commits, 242 contributors) | ✅ v0.27.0 |
| **Ollama** | Local runtime | ~8 stability/perf issues | ~10 model-support PRs | ✅ v0.32.7 |
| **LiteLLM** | Gateway/proxy | 8 stability issues (2 security) | ~10 (Bedrock web_search, rate limiting, caching) | ✅ v1.96.0 |
| **Meilisearch** | Search infra | 1 high-severity (Windows snapshot) | 2 (#6583, #6584) | ✅ v1.53.0 + 3 patch releases (v1.52.1–1.52.3) |
| **Dify** | App/orchestration (RAG) | 9 stability issues | ~5 fix PRs | None |
| **Chatwoot** | Not infra (helpdesk) — reference only | 5 stability issues | ~10 (feature + hardening) | None |

vLLM and Ollama are the two projects actively shipping releases *and* absorbing the largest new-model support burden. Meilisearch stands out for release *velocity* (4 tags in the window) driven almost entirely by reverts rather than forward progress.

## 3. Model Support Race

The same upstream releases — **Meta's Muse Glimmer/Muse Spark** and **DeepSeek-V4-Flash-0731** — are propagating through the stack simultaneously, and none of the receiving projects landed clean support:

- **Ollama** shipped Muse Glimmer support in v0.32.7 fastest (MLX/Apple Silicon only), but it's the most visibly broken: pull failures ([#17645](https://github.com/ollama/ollama/issues/17645)) and an MLX tag actually built from NVIDIA-only NVFP4 layers ([#17656](https://github.com/ollama/ollama/issues/17656)) suggest the release shipped ahead of QA. Ollama also led on breadth this window — Nemotron 3 Nano Omni, Bailing MoE V3, Gemma4 vision, Apertus 1.5 all landed same-day.
- **vLLM** landed Kimi K3 fully end-to-end (kernels + both frontends) in v0.27.0 — the most complete single-release model launch of the day — but is now the bottleneck for **DeepSeek-V4-Flash-0731**: Ampere/SM8x support is an open 94-comment issue ([#50576](https://github.com/vllm-project/vllm/issues/50576)), and even on supported hardware there's a KV-cache regression ([#51041](https://github.com/vllm-project/vllm/issues/51041)) and a Blackwell/FlashInfer routing failure ([#50720](https://github.com/vllm-project/vllm/issues/50720)).
- **LiteLLM** is a downstream consumer here, not a model-support driver — its only related item is a UI gap (Meta Model API missing from the "Add Model" dropdown, [#36164](https://github.com/BerriAI/litellm/issues/36164)) — but it's absorbing the *compatibility fallout* of these new models via a Bedrock `web_search` tool-support saga (three PRs today converging on "reject up front with a clear error" rather than a real fix).

**Net read:** Ollama wins on time-to-ship and model breadth; vLLM wins on completeness-per-model but is gated on hardware coverage (Ampere) for the model everyone actually wants (DeepSeek-V4-Flash). Neither "day-0 support" claim should be trusted without checking the linked issues first.

## 4. Performance & Optimization Frontier

Effort is concentrated in four areas, with vLLM dominating in volume and specificity:

- **Speculative decoding tuning (vLLM)** — the most mature optimization discussion today: a controlled A/B on production DeepSeek-V4-Flash quantifies a 10.6% acceptance-rate cost from a specific PR ([#49927](https://github.com/vllm-project/vllm/issues/49927)), plus a documented cudagraph-downgrade cliff at batch-size thresholds ([#49548](https://github.com/vllm-project/vllm/issues/49548)) — this is unusually rigorous, data-backed regression analysis rather than a bug report.
- **Kernel/quantization work (vLLM)** — PTX 9.4 hardware INT4→INT8 expanding loads for W4A8 ([#49529](https://github.com/vllm-project/vllm/issues/49529)), AITER tuned GEMM for DeepSeek-V4 decode on ROCm, and a `free_blocks` LIFO-ordering fix that quietly undoes a prior "no-op" merge affecting prefix-cache reuse locality ([#51482](https://github.com/vllm-project/vllm/pull/51482)).
- **Gateway-side write amplification (LiteLLM)** — two proposals to cut Redis/DB write load under high throughput (skip rate-limit writes for unrestricted keys, suppress per-entity spend UPDATEs) — this is capacity-planning-driven optimization, not latency-driven.
- **Batching correctness at the embedding layer (Dify)** — bounding unbounded embedding-plugin requests to match existing `MAX_CHUNKS` batching, a straightforward but concrete fix for large-document indexing.
- **Ollama** is notably *not* optimizing this window so much as chasing a regression: a flat TTFT penalty on Windows/CUDA introduced somewhere between 0.24.0 and 0.32.6 ([#17631](https://github.com/ollama/ollama/issues/17631)), with generation throughput improving even as time-to-first-token got worse — an unresolved, unexplained tradeoff worth watching.

KV cache, quantization, and spec-decode remain vLLM's territory; nobody else in this set is competing at that level of kernel/scheduler depth today.

## 5. Layer Positioning

- **Serving engine (data-center scale):** vLLM — the only project doing kernel-level, multi-GPU, cudagraph-aware optimization work. Its bug surface (composite VLM weight loading, MTP engine hangs, FlashInfer MLA routing) reflects the complexity tax of that scope.
- **Local runtime (single-machine/edge):** Ollama — optimizing for breadth-of-model support and Apple Silicon/consumer-GPU constraints (VRAM ceilings, MoE-in-host-RAM proposals) rather than distributed throughput. Its stability bugs (cross-request contamination in long-lived MLX runners) are a correctness class specific to session-reuse on constrained hardware.
- **Gateway/routing layer:** LiteLLM — doesn't run inference itself; its concerns are multi-tenant correctness (spend attribution, budget enforcement, cache accounting) and now, increasingly, security posture (session/credential replay via the UI). This is the layer where "who gets billed for what" bugs live, and today's list has three of them.
- **Search/retrieval infra:** Meilisearch — adjacent to the AI stack via RAG/vector-adjacent filtering (the sharded foreign-filters release), but its core concerns (SSE route stability, Windows snapshot mechanics) are general distributed-systems hygiene, not AI-specific.
- **Application/orchestration (RAG-heavy):** Dify — sits above the serving layer and inherits its assumptions; today's bugs (Weaviate delete-by-ID mismatch, orphaned pgvector rows) are vector-store integration failures, a recurring failure class for any orchestration layer that treats the vector DB as a black box.
- **Out of scope (reference only):** Chatwoot — a helpdesk platform included in this run's data set but with no inference/serving surface; flagged rather than force-fit into infra categories.

## 6. Trend Signals

- **Day-0 model support is a liability, not a flex.** Both Ollama (Muse Glimmer) and vLLM (Kimi K3, indirectly via DeepSeek-V4-Flash gaps) show that racing to support a model on release day produces broken manifests, wrong-backend tags, and unsupported hardware tiers. **Application developers should treat "supports model X" announcements as provisional for at least 48–72 hours** and check linked issues before pointing production traffic at a new model.
- **Vector-store "delete" is an unsolved problem across the stack.** Dify's Weaviate `delete_by_ids` bug and orphaned-KB-deletion issue are not novel failure modes — they're the same class of bug that recurs whenever an orchestration layer treats a vector DB as fire-and-forget. Teams with compliance/PII requirements should build reconciliation checks rather than trusting delete APIs at any layer.
- **Gateway security is catching up to gateway ubiquity.** LiteLLM's two same-day-disclosed UI auth issues (session non-revocation, JWT embedding replayable API key material) suggest gateway software is now mature/deployed enough to draw real security scrutiny — expect more of this class of finding as LLM gateways become standard infrastructure rather than novel tooling.
- **Billing/observability correctness is lagging behind feature velocity.** LiteLLM alone has three open issues today about wrong numbers (budget bypass, streaming undercounts, cache-accounting gaps) — as multi-provider routing becomes the norm, cost-tracking accuracy is becoming a first-class reliability concern, not an afterthought. **Anyone doing FinOps on LLM spend should cross-validate gateway-reported usage against provider-side numbers.**
- **"Fix" PRs are colliding.** Both Dify (image-URL fix) and Chatwoot (avatar-sync fix, two competing PRs for the same issue) show the same-day pattern of parallel, uncoordinated fixes for identical bugs — a sign of fast-moving OSS triage outpacing PR review bandwidth. Watch for which PR actually merges before building around either.
- **Revert-driven releases (Meilisearch) are a stability signal worth reading correctly** — a project shipping 4 tags in one window where 2 are pure reverts isn't unstable so much as *actively self-correcting quickly*; the concerning pattern would be silence, not rapid revert cycles.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-08-11

## Today's Highlights
No new releases landed in the last 24h, but activity concentrated on data-integrity and reliability fixes: orphaned vector data on knowledge-base deletion, a Weaviate delete bug that silently leaves stale vectors, and a Celery/HITL race condition in workflow persistence. On the PR side, most volume is defensive hardening — tenant-scoping fixes for trace/dataset APIs, file-preview signature repairs, and several "swallowed exception" cleanups — rather than new features.

## Releases & Breaking Changes
None in the last 24h.

## New Model & Hardware Support
Nothing new. The closest adjacent item is [PR #39478](https://github.com/langgenius/dify/pull/39478), which loosens the file-upload gate for agent models that lack a declared `VISION` feature (e.g. `qwen-long`), so non-vision models stop silently dropping uploaded files.

## Performance & Optimization
- [PR #39571](https://github.com/langgenius/dify/pull/39571) — batches token counting during document indexing (`get_text_embedding_num_tokens`) to match the existing `MAX_CHUNKS` batching in `cached_embedding.py`; previously large documents sent the entire chunk set to the embedding plugin in one unbounded request. Fixes [#39560](https://github.com/langgenius/dify/issues/39560).
- [Issue #39976](https://github.com/langgenius/dify/issues/39976) — open discussion on benchmarking Rust-runtime optimization opportunities; no numbers yet, worth watching for follow-up.

## Stability & Regressions
Ranked by severity/blast radius:
- **Data loss — Weaviate vector store**: [Issue #40457](https://github.com/langgenius/dify/issues/40457) — `delete_by_ids` passes Dify segment IDs where Weaviate expects object UUIDs, so document deletion never actually removes vectors. Confirmed present since 1.13.3, not a regression from the earlier VDB refactor (#34900). No fix PR yet.
- **Orphaned data on KB deletion**: [Issue #38518](https://github.com/langgenius/dify/issues/38518) — deleting a knowledge base while documents are still indexing leaves orphaned segments, child_chunks and pgvector tables; companion proposal [#38522](https://github.com/langgenius/dify/issues/38522) suggests pausing/blocking deletion during active indexing.
- **Race condition**: [Issue #40445](https://github.com/langgenius/dify/issues/40445) — race between Celery workflow-persistence and HITL pause creation.
- **Infra/deploy**: [Issue #40448](https://github.com/langgenius/dify/issues/40448) — nginx caches upstream DNS for api/plugin_daemon/web indefinitely, so partial container restarts produce 502s until nginx itself restarts.
- **Silent exception swallowing**: [Issue #40418](https://github.com/langgenius/dify/issues/40418) — bare `except` in storage `exists()` swallows `KeyboardInterrupt`/`SystemExit`.
- **Provider integration bug**: [Issue #40389](https://github.com/langgenius/dify/issues/40389) — Agent (Beta) + AWS Bedrock throws `ValidationException` from empty tool descriptions on sandbox shell tools.
- **File serving**: [Issue #40394](https://github.com/langgenius/dify/issues/40394) / fix in [PR #40397](https://github.com/langgenius/dify/pull/40397) — `/files/{id}/file-preview` incorrectly 404s with "signature is invalid" due to inconsistent signing across deprecated vs. current preview routes.
- **Agent UX**: [Issue #40425](https://github.com/langgenius/dify/issues/40425) — Agent App drops tool-generated image URLs in `_convert_tool_response_to_text`, so images never render in chat; fix already up in [PR #40455](https://github.com/langgenius/dify/pull/40455).
- **Upload validation**: [Issue #40411](https://github.com/langgenius/dify/issues/40411) — File-list input with a default value returns "Invalid upload file" in Web App on v1.14.2.
- Closed same-day: [Issue #39565](https://github.com/langgenius/dify/issues/39565) (HTTP Request node param row corruption on Enter key) and [Issue #40050](https://github.com/langgenius/dify/issues/40050) (feedback export `end_date` filter excluded the end date, fixed via [PR #40114](https://github.com/langgenius/dify/pull/40114)).

## What This Means for Application Developers
- **If you use Weaviate as your vector store**, treat document deletion as unreliable right now — [#40457](https://github.com/langgenius/dify/issues/40457) means "deleted" documents can leave stale vectors retrievable in search until a fix ships. Consider a periodic reconciliation check if this matters for compliance/PII.
- **Avoid deleting knowledge bases mid-indexing** — [#38518](https://github.com/langgenius/dify/issues/38518) confirms this can orphan Postgres/pgvector rows that need manual cleanup.
- **Bedrock + Agent (Beta) users**: sandbox shell tool calls can hard-fail with a `ValidationException` ([#40389](https://github.com/langgenius/dify/issues/40389)) — worth testing before relying on Agent (Beta) in production with Bedrock-backed models.
- **Tool-generated images** in Agent App chat were silently dropped; the fix ([PR #40455](https://github.com/langgenius/dify/pull/40455)) is up but not yet merged — expect this to land soon if you depend on image-returning tools.
- **Self-hosted/Docker deployers** should watch [#40448](https://github.com/langgenius/dify/issues/40448) — rolling restarts of individual containers (api/plugin_daemon/web) can trigger persistent 502s from nginx's DNS cache until the full stack is bounced.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Daily Digest — 2026-08-11

## Today's Highlights

LiteLLM shipped v1.96.0, formalizing cosign signature verification for all Docker images. The day's engineering focus was split between security hardening on the proxy UI (two disclosed auth weaknesses) and a flurry of Bedrock `web_search` tool-compatibility fixes, alongside a provider-independent streaming usage-undercounting bug that's drawing active investigation. On the feature side, tag-scoped rate limiting and per-key prompt caching toggles landed as notable proxy capabilities.

## Releases & Breaking Changes

- **[v1.96.0](https://github.com/BerriAI/litellm)** — Docker images are now signed with [cosign](https://docs.sigstore.dev/cosign/overview/); operators pulling images in supply-chain-sensitive environments should add signature verification to their pull/deploy pipeline.
- **[#31261 — Rust-backed pip binary](https://github.com/BerriAI/litellm/issues/31261)**: upcoming work to make `pip install litellm` default to a Rust extension where a compatible wheel exists. Tracked as the central issue for install regressions; worth watching if you pin `litellm` in CI images.

## New Model & Hardware Support

- No new model/backend/quantization support merged in this window. Related: **[#36164](https://github.com/BerriAI/litellm/issues/36164)** notes the Meta Model API (`meta/muse-spark-1.1`) is supported server-side but missing from the UI "Add Model" provider dropdown — a UI gap, not a capability gap.

## Performance & Optimization

- **[#31880 — Skip post-call Redis writes for unrestricted keys](https://github.com/BerriAI/litellm/issues/31880)**: the rate limiter currently writes counters to Redis after every call even for keys/users/teams with no configured limits, adding wasted write load at high throughput. Fix PR in progress.
- **[#34444 — Clamp `least_busy` counter at zero](https://github.com/BerriAI/litellm/pull/34444)**: salvages two stale PRs (#25393, #25325) fixing a race in the router's `least_busy` load-balancing strategy where the pre-call increment/post-call decrement can drift negative under concurrent failures.
- **[#31866 — `disable_entity_spend_updates` flag](https://github.com/BerriAI/litellm/issues/31866)**: proposes suppressing per-entity spend counter UPDATEs (key/user/team/org/tag tables) while keeping raw spend-log inserts, to cut DB write amplification at high request volume.

## Stability & Regressions

Ranked by severity:

1. **[#26672 — Budget enforcement bypassed on v1.82.3](https://github.com/BerriAI/litellm/issues/26672)** (15 comments, still open since April): key/user `max_budget` isn't enforced on fresh deployments despite spend exceeding the limit — a correctness/cost-control failure with no confirmed fix yet.
2. **[#36114 — Streaming usage severely undercounted](https://github.com/BerriAI/litellm/issues/36114)**: provider-independent undercount of token usage on streamed `/chat/completions` through chained proxies (Front → Upstream → Bedrock), even with the previously-fixed `chunk_parser()` — root cause traced to the stream aggregation layer. Directly affects billing accuracy.
3. **[#35665 / #35664 — UI auth security issues (v1.94.0)](https://github.com/BerriAI/litellm/issues/35665)**: logout/password-change don't revoke active UI sessions, and the UI cookie JWT embeds reusable API key material — both allow session/credential replay. No fix PR referenced yet; treat as priority for anyone exposing the LiteLLM UI externally.
4. **[#31441 — `end_user` pinned to first request on shared keys](https://github.com/BerriAI/litellm/issues/31441)**: regression since v1.87.0 — SpendLogs `end_user` sticks to the first request's `user` value for all subsequent calls on a shared virtual key, corrupting per-user spend attribution.
5. **[#36091 — Anthropic bridge drops cache accounting](https://github.com/BerriAI/litellm/issues/36091)**: `/v1/messages` served via OpenAI Responses-API backends (e.g. `gpt-5.x` reasoning models) always reports `cache_read_input_tokens: 0`, even at ~100% upstream cache hit — breaks cost/cache observability for cross-provider Anthropic-format routing.
6. **Bedrock `web_search` tool churn** — three PRs same day ([#36473](https://github.com/BerriAI/litellm/pull/36473), [#36477](https://github.com/BerriAI/litellm/pull/36477) closed, [#36442](https://github.com/BerriAI/litellm/pull/36442) closed): Anthropic's server-side `web_search` tool on Bedrock returns an opaque 400; fixes converge on rejecting the tool up front with an actionable error and setting `handles_web_search_natively()` to `False` for Bedrock Claude models. Covered by new e2e test [#36443](https://github.com/BerriAI/litellm/pull/36443).
7. **[#36366 — Azure Responses drops nested tool namespaces](https://github.com/BerriAI/litellm/issues/36366)**: `additional_tools` namespace descriptions forwarded empty to Azure Responses, breaking Codex CLI 0.147.0's default tool payload.
8. **[#36453 — Arize MCP tool calls crash span logging](https://github.com/BerriAI/litellm/pull/36453)**: MCP `CallToolResult` objects crash Arize span attribute setting, blanking the entire span (not just the MCP fields) — fix coerces Pydantic responses to dicts defensively.

## What This Means for Application Developers

- **Verify budget enforcement manually** if you're on v1.82.3+ — #26672 means `max_budget` may silently not cap spend on fresh deployments; don't rely on it as a hard safety net until confirmed fixed.
- **Streaming token counts may be wrong** for chained-proxy setups (#36114) and Anthropic-format cache metrics may under-report for Responses-API-backed models (#36091) — cross-check billing against provider-side usage if you depend on LiteLLM's cost tracking for streaming or cross-provider `/v1/messages` traffic.
- **Rotate/short-lived-ify UI sessions** if you expose the LiteLLM admin UI: #35665/#35664 mean logged-out sessions and password changes don't invalidate old credentials, and the cookie JWT itself carries replayable API key material.
- **Shared virtual keys with per-user attribution** (multi-tenant setups passing `user` in the OpenAI request body) will see incorrect `end_user` spend logs since v1.87.0 (#31441) — don't trust per-end-user cost breakdowns on shared keys until patched.
- **New capability to adopt**: [#36459](https://github.com/BerriAI/litellm/pull/36459) adds tag-scoped token/request/dollar/concurrency rate limits — useful if you need per-feature or per-customer-tag caps independent of the API key. [#36466](https://github.com/BerriAI/litellm/pull/36466) adds a per-key `enable_prompt_caching` toggle, letting you opt individual keys into prompt caching instead of a gateway-wide flag.
- If you use Bedrock with Anthropic's `web_search` tool, expect it to now fail fast with a clear error rather than an opaque Bedrock 400 — it was never actually supported there.

</details>

<details>
<summary><strong>Chatwoot</strong> — <a href="https://github.com/chatwoot/chatwoot">chatwoot/chatwoot</a></summary>

# Chatwoot Digest — 2026-08-11

*Note: Chatwoot is a customer-engagement/helpdesk platform, not an inference/serving stack, so the "New Model & Hardware Support" and "Performance & Optimization" sections are thin or N/A for this data set — flagged rather than padded.*

## 1. Today's Highlights

The dominant thread today is WhatsApp Business-Scoped User ID (BSUID) support: [#13837](https://github.com/chatwoot/chatwoot/issues/13837) (Meta's phone-number-hiding username rollout, deadline June 2026) spawned a same-day feature request ([#15387](https://github.com/chatwoot/chatwoot/issues/15387)) and implementation PR ([#15392](https://github.com/chatwoot/chatwoot/pull/15392)) to expose BSUID in agent-bot webhook payloads. Separately, a batch of five PRs tagged `CW-7922` landed to harden backend paths that were throwing production Sentry errors (malformed filters, oversized cursors, NUL bytes in search, empty round-robin queues). A Facebook Messenger avatar-sync bug caused by an uncommitted-transaction race was reported and fixed within hours (#15378 → #15402/#15393).

## 2. Releases & Breaking Changes

None in the last 24h.

## 3. New Model & Hardware Support

Not applicable — no model, backend, or hardware-support changes in today's data (Chatwoot has no ML inference layer in scope here).

## 4. Performance & Optimization

- **[#15401](https://github.com/chatwoot/chatwoot/pull/15401)** — Canned responses are now cached client-side in IndexedDB instead of hitting the server on every `/` keystroke in the reply editor, matching how inboxes/labels/teams are already cached. Reduces per-keystroke server round trips; no throughput numbers given.

## 5. Stability & Regressions

Ranked by apparent severity:

1. **[#15404](https://github.com/chatwoot/chatwoot/issues/15404)** — WhatsApp Cloud API + Dualhook: outbound messages sent from the Chatwoot UI fail with `Not found`, while inbound and direct sends work. No fix PR yet; workflow-breaking for affected inboxes.
2. **[#15378](https://github.com/chatwoot/chatwoot/issues/15378)** — Facebook contact avatars never sync because `AvatarFromUrlJob` is enqueued inside an uncommitted DB transaction — a race condition where a fast worker picks up the job before the row is visible. **Fix PRs already open:** [#15402](https://github.com/chatwoot/chatwoot/pull/15402) (enqueue after commit) and [#15393](https://github.com/chatwoot/chatwoot/pull/15393) (competing fix for the same issue — will need dedup/review).
3. **[#15394](https://github.com/chatwoot/chatwoot/issues/15394)** — Email replies silently drop recipients that were in the customer's original `To` line (not just CC); root cause traced to the reply box computing an empty CC. No fix PR yet — silent data loss on a common email workflow.
4. **CW-7922 hardening batch** (Sentry-driven, all merged/open same day): NUL bytes in canned-response search ([#15397](https://github.com/chatwoot/chatwoot/pull/15397)), oversized message-pagination cursors ([#15400](https://github.com/chatwoot/chatwoot/pull/15400)), malformed filter payloads ([#15398](https://github.com/chatwoot/chatwoot/pull/15398)), and empty round-robin queue writes ([#15399](https://github.com/chatwoot/chatwoot/pull/15399)) — all defensive fixes for edge-case production crashes, not new regressions.
5. **[#15221](https://github.com/chatwoot/chatwoot/issues/15221)** — Minor: low-contrast "Add Note" button in dark-theme private note composer. Cosmetic, no fix PR yet.

## 6. What This Means for Application Developers

- **WhatsApp integrations**: once [#15392](https://github.com/chatwoot/chatwoot/pull/15392) merges, BSUID will be available directly in agent-bot webhook payloads (`Contact#webhook_data`/`push_event_data`), removing the need for a follow-up REST call per event — update webhook consumers to read the new field instead of polling.
- **Facebook Messenger integrations**: if you rely on contact avatar URLs, expect stale/missing avatars on self-hosted instances until [#15402](https://github.com/chatwoot/chatwoot/pull/15402)/[#15393](https://github.com/chatwoot/chatwoot/pull/15393) ships — don't assume the missing-permissions explanation without checking this bug first.
- **Email channel integrations**: outbound reply automation/APIs should not assume all original `To` recipients are preserved until [#15394](https://github.com/chatwoot/chatwoot/issues/15394) is fixed — verify recipient lists downstream if you depend on full-thread delivery.
- **Automation builders**: [#15349](https://github.com/chatwoot/chatwoot/pull/15349) adds label conditions/actions to the "Conversation Resolved" automation event — useful for post-resolution tagging workflows.
- **Editor/composer extensions**: [#15375](https://github.com/chatwoot/chatwoot/pull/15375) unifies mention/variable/emoji pickers with search+preview, and [#15391](https://github.com/chatwoot/chatwoot/pull/15391) fixes resizing during active Copilot suggestions — relevant if you build on top of the reply editor.

</details>

<details>
<summary><strong>Meilisearch</strong> — <a href="https://github.com/meilisearch/meilisearch">meilisearch/meilisearch</a></summary>

# Meilisearch Infrastructure Digest — 2026-08-11

## 1. Today's Highlights
Meilisearch shipped **v1.53.0**, adding sharding support for foreign filters, while the two preceding patch releases (v1.52.2, v1.52.3) were both reverts of recent changes — one for the `/tasks/stream` and `/batches/stream` SSE routes, another for a search-speed optimization that introduced regressions. Today's PR activity (#6583, #6584) continues that stabilization push by rolling back additional search-progress tracing and hardening the health-check route.

## 2. Releases & Breaking Changes
- **[v1.53.0](https://github.com/meilisearch/meilisearch/releases/tag/v1.53.0)** — Adds sharding for foreign filters ([#6517](https://github.com/meilisearch/meilisearch/pull/6517) by @ManyTheFish): foreign filters are now evaluated by retrieving documents across the network shard and hydrating them, rather than requiring co-located data.
- **[v1.52.3](https://github.com/meilisearch/meilisearch/releases/tag/v1.52.3)** — Bug-fix release reverting the "speed up search speed" change from [#6542](https://github.com/meilisearch/meilisearch/pull/6542) after it caused issues.
- **[v1.52.2](https://github.com/meilisearch/meilisearch/releases/tag/v1.52.2)** — Bug-fix release reverting the `/tasks/stream` and `/batches/stream` SSE routes ([#6533](https://github.com/meilisearch/meilisearch/pull/6533)).
- **[v1.52.1](https://github.com/meilisearch/meilisearch/releases/tag/v1.52.1)** — Made health-route checks blocking ([#6583](https://github.com/meilisearch/meilisearch/pull/6583)) and reverted some search-progress traces ([#6584](https://github.com/meilisearch/meilisearch/pull/6584)).
- In-flight: [#6582](https://github.com/meilisearch/meilisearch/pull/6582) (automated) bumps `Cargo.toml` to prep the next version cut.

No breaking API changes noted for application consumers in this window.

## 3. New Model & Hardware Support
No updates — Meilisearch does not track model/hardware backend support in the same sense as inference engines; not applicable this period.

## 4. Performance & Optimization
- **Sharded foreign filters** ([#6517](https://github.com/meilisearch/meilisearch/pull/6517), landed in v1.53.0): foreign filter evaluation now hydrates documents over the network per shard, improving scalability for multi-node/sharded deployments.
- **Search speed optimization reverted**: the PR underlying [#6542](https://github.com/meilisearch/meilisearch/pull/6542) ("speed up the search speed a bit more") was rolled back in v1.52.3 — no net throughput gain currently in production; watch for a re-landed, corrected version.
- [#6584](https://github.com/meilisearch/meilisearch/pull/6584) trims progress-trace overhead on search routes to reduce work done per request (marked "no db change").

## 5. Stability & Regressions
Ranked by severity:
1. **High** — Snapshot creation fails on Windows with an LMDB `map_size` error (`must be a multiple of the system page size (4096)`), triggered when `remove_tasks` runs during snapshotting. Fix in progress: [#6581](https://github.com/meilisearch/meilisearch/pull/6581) (fixes [#6051](https://github.com/meilisearch/meilisearch/issues/6051)), open and awaiting merge.
2. **Medium** — Search-speed change in [#6542](https://github.com/meilisearch/meilisearch/pull/6542) caused a regression and was reverted in v1.52.3.
3. **Medium** — SSE routes (`/tasks/stream`, `/batches/stream`) added instability and were reverted in v1.52.2 ([#6533](https://github.com/meilisearch/meilisearch/pull/6533)); any integrations built against these streaming endpoints will need to fall back to polling.
4. **Low** — Health route was blocking the actix worker pool; fixed by making the blocking portion explicit ([#6583](https://github.com/meilisearch/meilisearch/pull/6583)).

## 6. What This Means for Application Developers
- **Avoid `/tasks/stream` and `/batches/stream` for now** — these SSE endpoints were pulled in v1.52.2; use polling against `/tasks` and `/batches` instead until they reappear.
- **Windows-hosted deployments** doing snapshot backups should hold off or monitor [#6581](https://github.com/meilisearch/meilisearch/pull/6581) closely — snapshot creation can currently fail outright on Windows hosts.
- **Multi-tenant filtering**: open issue [#6553](https://github.com/meilisearch/meilisearch/issues/6553) highlights a real gap — Meilisearch's guidance against per-tenant indexes doesn't cleanly support tenants with heterogeneous attribute sets on a single index. Teams building multi-tenant search should evaluate index-per-tenant tradeoffs carefully rather than assume the single-index model fits.
- **Sharded/distributed setups** benefit from v1.53.0's foreign-filter sharding — worth upgrading if you rely on cross-shard filtering.
- Treat v1.52.x as a turbulent patch series (rapid revert-then-refix cycle); pin to **v1.53.0** or later for a more stable base.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-11

## Today's Highlights
Ollama shipped **v0.32.7**, adding initial support for Meta's newly released **Muse Glimmer** model via the MLX engine on Apple Silicon, with CUDA/ROCm/CPU support promised "in coming days." The release landed rough: multiple bug reports surfaced within hours pointing to incomplete/incorrect model manifests. Separately, a serious correctness bug was reported in the MLX engine where long-lived runners can leak responses across unrelated requests — a notable risk for anyone running keep-alive sessions in production.

## Releases & Breaking Changes
- **[v0.32.7](https://github.com/ollama/ollama/releases/tag/v0.32.7)** — adds Muse Glimmer support (MLX/Apple Silicon only for now; NVIDIA/AMD/CPU to follow). See [PR #17646](https://github.com/ollama/ollama/pull/17646).
- The rollout is incomplete: [#17645](https://github.com/ollama/ollama/issues/17645) reports `ollama pull muse-glimmer:30b-q8_0` fails with a 412 "requires a newer version" manifest error even on 0.32.7, and [#17656](https://github.com/ollama/ollama/issues/17656) reports the `muse-glimmer:30b-mlx` tag is actually built from NVIDIA-only NVFP4 layers rather than real MLX weights — the advertised Apple Silicon build may not be what it claims to be.

## New Model & Hardware Support
- **Muse Glimmer** (Meta) — initial MLX/Apple Silicon support in v0.32.7 (manifest issues noted above).
- **Nemotron 3 Nano Omni** — MLX implementation including Mamba2/recurrent pieces, MoE routing, and quantized NVFP4/MXFP8 expert paths: [PR #17060](https://github.com/ollama/ollama/pull/17060).
- **Bailing MoE V3** — MLX safetensors support with hybrid KDA/MLA attention: [PR #17643](https://github.com/ollama/ollama/pull/17643).
- **Gemma4** — MLX image input support (vision embedder + transformer-based vision tower checkpoints): [PR #17650](https://github.com/ollama/ollama/pull/17650).
- **Apertus 1.5** (8B/70B, Swiss AI Initiative) — native parser/renderer support: [PR #17555](https://github.com/ollama/ollama/pull/17555).
- **Windows-on-Arm CPU build** — currently ships with zero dot-product/matrix instructions due to missing `-march`; fix sets `GGML_CPU_ARM_ARCH`: [PR #17654](https://github.com/ollama/ollama/pull/17654).

## Performance & Optimization
- **TTFT regression on Windows/CUDA**: upgrading 0.24.0 → 0.32.6 adds a flat per-request latency toll to warm time-to-first-token (+156ms on Gemma E4B, +44ms on Qwen3), independent of prompt size; generation throughput actually improved. No root cause identified yet: [#17631](https://github.com/ollama/ollama/issues/17631).
- **8GB/12GB GPU MoE OOM**: feature request to keep MoE expert weights in host RAM with on-demand GPU compute, instead of loading all experts into VRAM (currently a 16B MoE with a 6GB file needs 23GB VRAM): [#17557](https://github.com/ollama/ollama/issues/17557).
- **Windows dual-socket CPU/GPU utilization**: high CPU / low GPU utilization reported in hybrid CPU+GPU configurations: [#16873](https://github.com/ollama/ollama/issues/16873).
- Windows-on-Arm CPU perf fix above ([PR #17654](https://github.com/ollama/ollama/pull/17654)) also belongs here — baseline `armv8-a` build was leaving matrix/dot-product instructions unused.

## Stability & Regressions
Ranked by severity:
1. **Cross-request response contamination (MLX engine, `keep_alive -1`)** — a long-lived runner intermittently returns a verbatim answer belonging to a *different, earlier* request rather than the current prompt. Potentially serious for multi-tenant/production use: [#17599](https://github.com/ollama/ollama/issues/17599). No fix PR yet.
2. **CUDA illegal memory access on DGX Spark (GB10)** — deterministic crash in flash-attention kernel for head-size-256 models (e.g. Qwen3-Next 80B-A3B) during large prefill: [#17596](https://github.com/ollama/ollama/issues/17596). No fix PR yet.
3. **Tool calling broken in VS Code Copilot harness** since 0.32.4/0.32.5; workaround is reverting to 0.32.1: [#17444](https://github.com/ollama/ollama/issues/17444). No fix PR linked yet.
4. **MLX BF16 non-termination** — Laguna-S 2.1 MLX BF16 intermittently fails to stop generating and degenerates into stream-of-consciousness output on Apple Silicon: [#17632](https://github.com/ollama/ollama/issues/17632).
5. **Qwen memory/loading regression** — recent update causes Qwen models to hit VRAM ceiling without properly filling the GPU, even at reduced context: [#17517](https://github.com/ollama/ollama/issues/17517).
6. **Redirected stdout writes terminal control sequences** — `ollama run x > file` should fail cleanly instead of corrupting the file with ANSI escapes; fix PR opened but subsequently closed: [#16785](https://github.com/ollama/ollama/issues/16785) / [PR #17644](https://github.com/ollama/ollama/pull/17644) (closed).

## What This Means for Application Developers
- **Hold off on Muse Glimmer in production** until the manifest issues ([#17645](https://github.com/ollama/ollama/issues/17645), [#17656](https://github.com/ollama/ollama/issues/17656)) are resolved — the model may not pull correctly or may silently run on the wrong backend.
- **Audit `OLLAMA_KEEP_ALIVE=-1` deployments on Apple Silicon** against [#17599](https://github.com/ollama/ollama/issues/17599): long-lived MLX runners can return another request's answer, which is a correctness/security concern for any app serving multiple users or sessions from one runner.
- **Tool-calling reliability is actively in flux**: several parallel efforts landed or are in review — wrapping parser errors with client-facing context ([PR #17651](https://github.com/ollama/ollama/pull/17651)), tolerating malformed JSON in harmony/gpt-oss tool calls ([PR #17642](https://github.com/ollama/ollama/pull/17642)), and opt-in progressive Qwen tool-call streaming ([PR #17658](https://github.com/ollama/ollama/pull/17658)). If you build agents on Ollama's tool-calling API, test against these changes before upgrading, and note that pulling GGUFs directly from Hugging Face (`hf.co/...`) currently skips the built-in tool-call renderer/parser for recognized architectures ([#17636](https://github.com/ollama/ollama/issues/17636)) — prefer the Ollama library/registry path for reliable tool calling.
- **Benchmark before upgrading on Windows/CUDA** if you're latency-sensitive — the reported flat TTFT regression ([#17631](https://github.com/ollama/ollama/issues/17631)) could affect interactive/agentic workloads even though raw generation throughput is better.
- **Modelfile users**: `num_gpu` is being restored to the documented parameter table ([PR #17648](https://github.com/ollama/ollama/pull/17648)) as the only way to force CPU-only execution without changing the API request — useful if you need per-model hardware pinning.

</details>

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-08-11

## 1. Today's Highlights

**v0.27.0 shipped** with 561 commits from 242 contributors (64 new), headlined by full-stack **Kimi K3 support** (core kernels, Python/Rust frontends, AttnRes kernels). The community is racing to close gaps around **DeepSeek-V4-Flash-0731**: Ampere/SM8x enablement is the most-discussed open issue (94 comments), while separate reports flag a KV-cache regression and a FlashInfer MLA routing bug on Blackwell. On the stability side, a V1 engine hang under MTP+GLM-5.1 and a silent correctness bug in composite VLM weight loading are the two items worth flagging to on-call teams.

## 2. Releases & Breaking Changes

- **[v0.27.0](https://github.com/vllm-project/vllm/releases/tag/v0.27.0)** — 561 commits / 242 contributors. Headline: Kimi K3 support landing end-to-end in a single release (core model + kernels, Python + Rust frontends, AttnRes kernels).
- RFC: **[Migrate bitsandbytes and GGUF quantization to an OOT plugin](https://github.com/vllm-project/vllm/issues/39583)** — maintainers propose moving both formats out-of-tree given low usage (~0.5% / 0.1%) relative to maintenance cost against the `weight_loader_v2` architecture. Watch for deprecation if this lands.

## 3. New Model & Hardware Support

- **[ROCm/AMD Kimi-K3 gap tracking](https://github.com/vllm-project/vllm/issues/50682)** — day-0 AITER fused-MoE (a16w4/a8w4) landed; broader ROCm enablement roadmap still open.
- **[DeepSeek-V4-Flash SM8x (Ampere A100/A800) support request](https://github.com/vllm-project/vllm/issues/50576)** — highest-engagement issue this week (94 comments); DeepSeek-V4-Flash-0731 currently cannot run on Ampere.
- **[Intel Arc B50 (Battlemage) TP=2 IPC handle crash](https://github.com/vllm-project/vllm/issues/48953)** — `zeMemOpenIpcHandle INVALID_ARGUMENT` on dual XPU, same failure class as an earlier Arc issue.
- **[ROCm DSV4: AITER tuned GEMM for full-graph decode attention](https://github.com/vllm-project/vllm/pull/51713)** — routes DeepSeek-V4 attention projections through AITER's tuned GEMM under full cudagraph decode.
- **[W4A16 DSA enablement (draft, do-not-merge)](https://github.com/vllm-project/vllm/pull/51724)** — depends on a companion FlashMLA PR; passing E2E unit tests on GLM-5.2/DSV3.2.
- **[Cohere v2 stop-sequence reporting fix](https://github.com/vllm-project/vllm/pull/51556)** — aligns Cohere streaming stop reasons with OpenAI-compatible `STOP_SEQUENCE` semantics.

## 4. Performance & Optimization

- **[PTX 9.4 `ldmatrix.s8.s4` for W4A8-INT8](https://github.com/vllm-project/vllm/issues/49529)** — proposes using CUDA 13.4's hardware INT4→INT8 expanding load to speed up W4A8 kernel paths.
- **[Skip detokenization in offline beam search](https://github.com/vllm-project/vllm/pull/50333)** (closed) — follow-up to #46422; avoids detokenizing `2 × beam_width` logprob candidates per step.
- **Spec-decode regression analysis on production DeepSeek-V4-Flash**: **[#49927](https://github.com/vllm-project/vllm/issues/49927)** isolates a ~10.6% spec-decode acceptance-rate cost from #48137 and an output-distribution shift from #48660, via controlled A/B on a 2-node DGX Spark deployment.
- **[Dynamic spec decoding throughput collapse at batch-size threshold](https://github.com/vllm-project/vllm/issues/49548)** — `num_speculative_tokens_per_batch_size` triggers a documented FULL_AND_PIECEWISE→PIECEWISE cudagraph downgrade costing ~14% single-stream latency, but shows a sharper cliff under concurrency.
- **[DSD baseline tax vs. no-spec](https://github.com/vllm-project/vllm/issues/49986)** — every dynamic-speculative-decoding arm pays overhead vs. no-spec under production defaults; PIECEWISE override identified as a contributing factor.
- **[`free_blocks` LIFO reuse order restore](https://github.com/vllm-project/vllm/pull/51482)** — #48017's "no-op" claim was wrong; the merged condition routed freed blocks through `append_n` instead of `prepend_n` when prefix caching is off, likely affecting block-reuse locality/perf.

## 5. Stability & Regressions

Ranked by severity:

1. **[V1 + MTP + GLM-5.1 worker hang, EngineDeadError](https://github.com/vllm-project/vllm/issues/40926)** — under TP=8 sustained production traffic, scheduler stalls (`step_counter=0`), `sample_tokens` RPC times out after 30s. No fix PR linked yet — high severity for production serving.
2. **[Composite VLM (Mistral3ForConditionalGeneration) silently discards real `lm_head.weight`](https://github.com/vllm-project/vllm/issues/51063)** — `tie_word_embeddings` resolved from wrong top-level config, producing coherent-vocabulary-but-incoherent output. Silent correctness bug, no error raised — dangerous for unattended pipelines.
3. **[DeepSeek-V4-Flash-0731 KV cache 8× larger per token](https://github.com/vllm-project/vllm/issues/51041)** — 56 bytes/token vs. the preview checkpoint, `max_model_len` capped to ~121K on H20 TP=2. Regression, not yet triaged with a fix.
4. **[FlashInfer sparse MLA decode kernel routing failure on SM120](https://github.com/vllm-project/vllm/issues/50720)** — DeepSeek-V4-Flash-0731 + DSpark fails on RTX PRO 6000 Blackwell.
5. **[Hybrid multi-group KV crash on connector load errors](https://github.com/vllm-project/vllm/issues/50687)** — `_update_requests_with_invalid_blocks` raises `ValueError: too many values to unpack` for any KVConnectorBase_V1 integration reporting invalid blocks.
6. **[Block-scaled FP8 crash on load, SM120 Blackwell](https://github.com/vllm-project/vllm/issues/47436)** — DeepGEMM "Unknown SF transformation" assertion, v0.24.0.
7. **[ngram spec decoding changes greedy output](https://github.com/vllm-project/vllm/issues/41758)** — correctness divergence vs. non-speculative greedy decoding on Qwen3-0.6B/A100.
8. **[Chat completion 500 on non-object JSON bodies](https://github.com/vllm-project/vllm/pull/51654)** — fix PR open; server currently returns 500 instead of 4xx for malformed request payloads.
9. **[`/v1/responses` protocol drift breaks OpenAI SDK compatibility](https://github.com/vllm-project/vllm/issues/39426)** (closed) — malformed tool-call aggregation.
10. **[Qwen3.6-35B-A3B-FP8 code generation fails with malformed JSON](https://github.com/vllm-project/vllm/issues/47761)** — "Unterminated string" errors on v0.23.0/0.24.0.

Test infra fix in flight: **[`test_sharded_state_loader` fix](https://github.com/vllm-project/vllm/pull/51736)** addresses a batch-invariance assumption mismatch between checkpoint save/reshard/reload comparisons.

## 6. What This Means for Application Developers

- **Pin your checkpoint** if serving `DeepSeek-V4-Flash-0731`: KV-cache footprint and `max_model_len` limits differ substantially from the preview build (#51041), and Blackwell users may hit the FlashInfer MLA routing bug (#50720) — validate on your target hardware before upgrading.
- **Hold off on Mistral3-family composite VLMs** in unattended/agentic pipelines until #51063 lands a fix — the model can silently produce coherent-looking but wrong output with no error signal.
- **Malformed client payloads currently 500 instead of 4xx** (#51654, fix pending) — if you're doing contract testing against the OpenAI-compatible endpoint, expect this to change soon; don't hard-code retry logic around 500s for bad input.
- **Speculative decoding tuning**: if you use dynamic `num_speculative_tokens_per_batch_size`, watch for throughput cliffs at the batch-size threshold under concurrency (#49548) — the effect is worse in production than single-stream benchmarks suggest.
- Ampere (A100/A800) users tracking DeepSeek-V4-Flash should follow #50576 for SM8x enablement — not yet supported.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
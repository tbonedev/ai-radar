# AI Infrastructure Digest 2026-08-11

> Generated: 2026-08-10 22:29 UTC | Projects covered: 6

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Chatwoot](https://github.com/chatwoot/chatwoot)
- [Meilisearch](https://github.com/meilisearch/meilisearch)
- [Ollama](https://github.com/ollama/ollama)
- [vLLM](https://github.com/vllm-project/vllm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Digest — 2026-08-11

## 1. Ecosystem Overview

The inference/serving layer had a genuinely major day: vLLM shipped v0.27.0 (561 commits, 242 contributors) with full-stack Kimi K3 support and a spec-decode scheduler claiming double-digit latency wins, while Ollama pushed MLX support for four new architectures in parallel. The dominant cross-cutting theme, though, isn't new models — it's **correctness debt surfacing under load**: vLLM has a silent weight-discard bug, Ollama has cross-request response contamination on MLX, and LiteLLM has a budget-enforcement bypass that's been silently broken since v1.82.3. Gateway/orchestration tooling (LiteLLM, Dify) is fighting security and billing-integrity fires rather than shipping capability. Meilisearch's day is a cautionary tale in itself — three consecutive patch releases each reverting the prior release. Chatwoot, included in this set, is not infrastructure (no models, no inference) and is flagged separately.

## 2. Activity Comparison

| Project | Issues (discussed) | PRs (merged/open) | Release Today | Notes |
|---|---|---|---|---|
| **vLLM** | ~12 | ~17 | ✅ v0.27.0 (major, 561 commits) | Highest-velocity release of the day |
| **Ollama** | ~13 | ~11 | ✅ v0.32.7 | Release itself is rocky (2 open bugs day-1) |
| **LiteLLM** | ~14 | 6 | ✅ v1.96.0 (Docker-signing only) | Highest issue-to-fix ratio; 2 unresolved security disclosures |
| **Dify** | ~13 | 8 | ❌ none | Data-integrity cluster (vector leaks, orphaned rows) |
| **Meilisearch** | 2 | 6 | ✅ v1.53.0 + 3 reverts (v1.52.1–3) | 4 releases/reverts in one window — unstable cadence |
| **Chatwoot** | 6 | 8 | ❌ none | *Not infra — customer-engagement platform, included for completeness only* |

## 3. Model Support Race

**vLLM leads on breadth and depth** — Kimi K3 is fully wired (kernels, Python *and* Rust frontends), plus active AMD/ROCm day-0 parity work and a new Blackwell (SM120/121) backend. It's also the only project openly discussing *removing* long-tail quantization support (bitsandbytes/GGUF RFC) to cut maintenance surface.

**Ollama is the volume leader** — four architectures in flight simultaneously (Nemotron 3, Gemma4 vision, Apertus 1.5, Bailing MoE V3), all MLX/Apple-Silicon-first. But its headline release (Muse Glimmer) shipped in a broken state: gated manifest blocks pulls, and the "MLX build" is reportedly repackaged NVFP4 weights — a **ship-before-ready** pattern that undercuts the volume story.

**LiteLLM and Dify aren't racing on new models** — they're racing on *compatibility surface*: LiteLLM added per-key prompt-caching control and fixed Bedrock/Codex/VSCode edge cases; Dify fixed vision-flag gating that was silently dropping files for non-vision-declared models (`qwen-long`).

**Gaps worth flagging**: vLLM has no upstream path for DeepSeek-V4-Flash on Ampere (94-comment issue, still open) and no Qwen3.5-MoE support yet — both real ceilings for anyone not on Hopper/Blackwell.

## 4. Performance Frontier

Effort is concentrated in three areas:

- **Spec decoding / scheduling** — vLLM's adaptive spec-decode budget (11–23% E2E latency, 55–65% TTFT improvement) and confidence-scheduled draft verification are the single most consequential perf items across all six projects today.
- **Host↔device sync elimination** — vLLM continues stripping GPU↔CPU round-trips from the hot path (kv-sharing decode metadata); this is now a multi-week running effort, not a one-off.
- **Memory/VRAM pressure** — Ollama's request to keep MoE experts in host RAM with on-demand GPU compute (fit 16B/35B MoE on 8–12GB GPUs) targets the same problem class as vLLM's quantization consolidation (six FP8/NVFP4/MXFP8 linear methods merged into one).

Notably, **two projects reverted performance work today** rather than shipping it: Meilisearch pulled back its "speed up search" change and SSE streaming routes in the same patch cycle, and Dify's token-counting batching fix is really a correctness/cost patch (unbounded embedding-plugin requests) dressed as perf.

## 5. Layer Positioning

- **Serving/inference engines** (vLLM, Ollama) — vLLM is the production/cluster-scale engine (distributed serving, ROCm/CUDA/Blackwell backends, spec decode at scale); Ollama is the local/single-node runtime (Apple Silicon MLX-first, consumer GPU VRAM constraints). Their optimization targets don't overlap much: vLLM chases throughput at concurrency, Ollama chases fitting bigger models on smaller boxes.
- **Gateway/routing** (LiteLLM) — sits above both, aggregating providers; today's activity (budget enforcement, per-key caching, tag-scoped rate limits) is entirely about *multi-tenant billing and access control*, not model execution.
- **Application/orchestration** (Dify) — one layer further up; it consumes inference engines and gateways as backends, so its bugs (vector-store cleanup, Agent App image handling) are integration-layer, not model-serving.
- **Adjacent, not infra**: Meilisearch (search/retrieval, occasionally paired with RAG stacks but not model-serving) and Chatwoot (support/messaging, no ML surface today) — both included in this set but outside the inference/gateway/fine-tuning scope this comparison is meant to track.

## 6. Trend Signals

- **Correctness bugs are now the story, not features.** Four of six projects have an open *silent* correctness bug today (vLLM's lm_head discard, Ollama's cross-request MLX contamination, Dify's Weaviate vector leak, LiteLLM's budget bypass) — none throw errors, all require active monitoring to catch. Application developers should treat "no error thrown" as insufficient evidence of correctness across this whole layer right now.
- **Release discipline is diverging.** vLLM and Ollama ship large, mostly-stable releases; Meilisearch shipped and reverted three times in one window. Before pinning to any of these, check the last 48h of patch history, not just the latest tag.
- **Apple Silicon / MLX is becoming a first-class target**, not an afterthought — four Ollama architectures landing there simultaneously signals local-inference demand is shaping upstream priorities, not just downstream packaging.
- **Multi-tenant billing/security is the gateway layer's actual bottleneck** — LiteLLM's budget-bypass and session-revocation issues suggest gateway maturity is lagging behind gateway adoption; teams routing spend through it should not treat `max_budget` as authoritative today.
- **Watch for silent architecture debt**: vLLM's own maintainers are proposing to *drop* quant formats (bitsandbytes/GGUF) from core — a signal that as engines scale, breadth gets traded for maintainability, and downstream users on long-tail formats should plan migration paths now rather than after an RFC lands.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-08-11

**Source:** [langgenius/dify](https://github.com/langgenius/dify)

## Today's Highlights

No releases landed today, but activity concentrated on data-integrity bugs in the knowledge base and vector-store layers, plus an Agent App regression where tool-generated images silently vanish from chat. Several of these already have fix PRs open (icon rendering, image delivery, file-preview signatures), so expect quick patches. Two open RFC-style issues worth watching: a proposal to gate knowledge-base deletion behind an indexing-complete check, and a Weaviate long-term memory integration.

## New Model & Hardware Support

- [PR #39472](https://github.com/langgenius/dify/pull/39472) — merge system messages to front, fixing message-ordering compatibility for **Qwen/vLLM** backends.
- [PR #39478](https://github.com/langgenius/dify/pull/39478) — agent file filtering now checks the type-specific model feature instead of gating everything on a single vision flag; fixes silent file drops for non-vision-declared models like `qwen-long` ([issue #39431](https://github.com/langgenius/dify/issues/39431)).

## Performance & Optimization

- [Issue #39976](https://github.com/langgenius/dify/issues/39976) — open RFC to benchmark Rust runtime optimization opportunities in the core execution path.
- [PR #39571](https://github.com/langgenius/dify/pull/39571) — batches token counting during document indexing instead of sending an entire document's chunks to the embedding plugin in one unbounded request ([issue #39560](https://github.com/langgenius/dify/issues/39560)); brings token-counting in line with the existing `MAX_CHUNKS` batching used for the embedding call itself.

## Stability & Regressions

Ranked by severity — data-integrity issues first:

1. **[Issue #40457](https://github.com/langgenius/dify/issues/40457)** — Weaviate: deleting a document never removes its vectors. `delete_by_ids` passes Dify segment IDs to `delete_by_id`, which expects Weaviate object UUIDs — silent vector leak, reproducible on 1.16.1 and 1.13.3 (pre-dates the VDB workspace refactor, #34900). No fix PR yet.
2. **[Issue #38518](https://github.com/langgenius/dify/issues/38518)** / **[#38522](https://github.com/langgenius/dify/issues/38522)** — deleting a knowledge base while its documents are still indexing leaves orphaned segments, child_chunks, and pgvector tables. A guard/pause-before-delete proposal is open but unimplemented.
3. **[Issue #40445](https://github.com/langgenius/dify/issues/40445)** — race condition between Celery workflow persistence and HITL (human-in-the-loop) pause creation.
4. **[Issue #40425](https://github.com/langgenius/dify/issues/40425)** — Agent App: images returned by third-party tools are discarded in `_convert_tool_response_to_text` and never shown in chat. Fix already up: [PR #40455](https://github.com/langgenius/dify/pull/40455).
5. **[Issue #40448](https://github.com/langgenius/dify/issues/40448)** — nginx caches upstream DNS for api/plugin_daemon/web indefinitely; partial container restarts cause persistent 502 Connection Refused until nginx itself restarts.
6. **[Issue #40389](https://github.com/langgenius/dify/issues/40389)** — Agent (Beta) + AWS Bedrock: empty tool descriptions from sandbox shell tools trigger a Bedrock `ValidationException`.
7. **[Issue #40007](https://github.com/langgenius/dify/issues/40007)** — Dify Cloud MCP Server returns `-32603 Internal Server Error` when called from an n8n MCP client.
8. **[Issue #40394](https://github.com/langgenius/dify/issues/40394)** — file-preview endpoint returns 404 "File not found or signature is invalid" for existing uploads. Fixed by [PR #40397](https://github.com/langgenius/dify/pull/40397) (inconsistent signing across deprecated `/image-preview` paths).
9. **[Issue #40418](https://github.com/langgenius/dify/issues/40418)** — bare `except` in storage `exists()` swallows `KeyboardInterrupt`/`SystemExit`.
10. **[Issue #40411](https://github.com/langgenius/dify/issues/40411)** — File-list input with a default value returns "Invalid upload file" in Web App on v1.14.2.
11. **[Issue #39565](https://github.com/langgenius/dify/issues/39565)** (closed) — HTTP Request node: Enter key in Params/Headers fields corrupted the row, no keyboard way to advance.
12. **[Issue #39473](https://github.com/langgenius/dify/issues/39473)** — generated column on the `agents` table breaks PostgreSQL logical replication (`wal_level=logical`); fix replaces it with a partial unique index.

Minor/tooling fixes with PRs merged or open today: mutable default `{}` argument shared on the password-reset path ([PR #39852](https://github.com/langgenius/dify/pull/39852)), MCP client SSE-vs-streamable-http fallback hang ([PR #39321](https://github.com/langgenius/dify/pull/39321), fixes #39301), feedback export `end_date` filter excluding the last day ([PR #40114](https://github.com/langgenius/dify/pull/40114), fixes #40050), agent icon 404s from raw `upload_files.id` instead of signed `icon_url` ([PR #40449](https://github.com/langgenius/dify/pull/40449)).

## What This Means for Application Developers

- **If you use Weaviate as your vector store**, be aware document deletion currently doesn't clean up vectors — treat it as a known leak until #40457 is patched; audit index size if you delete documents frequently.
- **Knowledge-base deletion during active indexing is unsafe** — avoid deleting a KB mid-index until #38522's guard lands, or you'll accumulate orphaned rows in pgvector.
- **Agent Apps using tools that return images** (image generation, etc.) will silently lose those images in chat on current releases; the fix (#40455) is ready but not yet merged — pin or patch if this is on your critical path.
- **Bedrock-backed Agent (Beta) users** relying on the built-in sandbox shell tool may hit hard `ValidationException` failures from empty tool descriptions — watch #40389 for a fix.
- **Self-hosted Docker deployments** doing rolling/partial container restarts should watch #40448: nginx's indefinite upstream DNS caching can produce persistent 502s until nginx is restarted too.
- **Qwen/vLLM users** get a compatibility fix for message ordering and vision-feature-gated file handling — reduces silent file drops for models like `qwen-long`.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Daily Digest — 2026-08-11

## Today's Highlights

A single release (**v1.96.0**) landed with only a Docker image-signing note — no functional changes. The real story is spend/budget integrity: a critical bug reports proxy `max_budget` enforcement silently failing since v1.82.3 (#26672, 15 comments, still open), compounded by two UI security disclosures on v1.94.0 (reusable JWT key material, no session revocation on logout) and a provider-independent streaming usage undercount. On the fix side, five PRs landed today hardening tag-scoped rate limits, prompt-caching cost accounting, and admin-only UI gating.

## Releases & Breaking Changes

- **[v1.96.0](https://github.com/BerriAI/litellm)** — release notes are limited to Docker image signature verification (cosign); no functional changelog surfaced in this window.
- [#36464](https://github.com/BerriAI/litellm/pull/36464) — Bedrock malformed tool-call arguments now reject with a **400** instead of a retryable error, preventing routers from walking the full fallback graph (and logging full message history on every hop) on unparseable output. Worth reviewing if client retry logic assumes the old 500 behavior.
- [#36466](https://github.com/BerriAI/litellm/pull/36466) — New `enable_prompt_caching` per-key toggle on `/key/generate` and `/key/update`, moving prompt caching from a gateway-wide flag to opt-in per virtual key.
- [#36459](https://github.com/BerriAI/litellm/pull/36459) — New tag-scoped token/request/dollar/concurrency rate limits, independent of the calling API key.

## New Model & Hardware Support

Nothing shipped in this window. Two tracking items worth watching:
- [#31261](https://github.com/BerriAI/litellm/issues/31261) — the Rust-backed `pip install litellm` binary continues collecting install-compatibility reports (8 comments, 6 👍) ahead of becoming the default.
- [#36080](https://github.com/BerriAI/litellm/pull/36080) — adds/corrects `deprecation_date` metadata for 216 model registry entries, feeding an upcoming model-retirement warning feature.
- [#32218](https://github.com/BerriAI/litellm/issues/32218) — Z.AI's documented `glm-5.2[1m]` (1M context variant) returns "Unknown Model" through the proxy even though the base `glm-5.2` works.

## Performance & Optimization

- [#31880](https://github.com/BerriAI/litellm/issues/31880) — rate limiter currently writes counters to Redis after every request even for keys/users/teams with no configured limits; a fix PR skips these no-op writes to cut wasted I/O at high throughput.
- [#31866](https://github.com/BerriAI/litellm/issues/31866) — proposed `disable_entity_spend_updates` flag to suppress per-entity spend counter UPDATEs (key/user/team/org/tag) while still preserving raw spend-log rows, targeting write load at high request volume.
- [#36452](https://github.com/BerriAI/litellm/pull/36452) — cost-optimization dashboard's "prompt caching savings" figure previously priced only the cache-read discount and ignored the cache-write premium providers charge (Anthropic bills writes at 1.25x); fix nets the two out for an accurate savings number.

## Stability & Regressions

Ranked by severity:

1. **Critical — budget bypass.** [#26672](https://github.com/BerriAI/litellm/issues/26672): key/user `max_budget` enforcement silently fails on a fresh v1.82.3 deploy despite spend exceeding the limit. 15 comments, open, no linked fix.
2. **High — security (v1.94.0).** [#35664](https://github.com/BerriAI/litellm/issues/35664): the UI auth cookie JWT embeds reusable API key material — a copied/replayed cookie authenticates as the victim session. Companion [#35665](https://github.com/BerriAI/litellm/issues/35665): logout and password change don't revoke active UI sessions. Both open, unfixed.
3. **High — billing correctness.** [#36114](https://github.com/BerriAI/litellm/issues/36114): streaming usage severely undercounted across providers in chained proxy setups (front-proxy → upstream-proxy → Bedrock), despite correct non-streaming usage and an already-fixed `chunk_parser()`; root cause pinned to the stream-aggregation layer, not provider transformation. Open.
4. **Medium — cost accounting.** [#36091](https://github.com/BerriAI/litellm/issues/36091): when the Anthropic `/v1/messages` bridge is served by an OpenAI Responses-API model (e.g. `gpt-5.x` reasoning models), `cache_read_input_tokens` always reports 0 even at ~100% upstream cache hit rate.
5. **Medium — regression.** [#31441](https://github.com/BerriAI/litellm/issues/31441): `end_user` in SpendLogs pins to the first request's `user` for all subsequent requests on a shared virtual key — introduced in v1.87.0.
6. **Medium.** [#27518](https://github.com/BerriAI/litellm/issues/27518): proxy-level `async_pre_call_hook` callbacks are bypassed on the Anthropic `/v1/messages` endpoint, silently disabling custom guardrails for that path.
7. **Lower severity.** [#36366](https://github.com/BerriAI/litellm/issues/36366): Azure Responses forwards empty namespace descriptions from `additional_tools`, breaking Codex CLI 0.147.0's default tool payload. [#35775](https://github.com/BerriAI/litellm/issues/35775): incompatible with VSCode's native BYOK Model-Provider support.
8. **Fixed today (merged).** [#36453](https://github.com/BerriAI/litellm/pull/36453): MCP tool-call spans were crashing Arize tracing on `CallToolResult` (no `.get`), blanking the rest of the span; fix coerces Pydantic responses to dicts. [#36455](https://github.com/BerriAI/litellm/pull/36455): duplicate legacy invitation emails on v2 deployments, plus a broken onboarding link.

## What This Means for Application Developers

- **Don't treat `max_budget` as a hard ceiling right now** — [#26672](https://github.com/BerriAI/litellm/issues/26672) shows enforcement can silently fail even on a clean deploy. Pair it with an external spend alert until this closes.
- **If you meter usage from streaming responses through a multi-hop proxy chain, cross-check against non-streaming or provider-native usage** — [#36114](https://github.com/BerriAI/litellm/issues/36114) confirms streaming counts can be significantly wrong, and this isn't provider-specific.
- **On v1.94.0, rotate UI session cookies manually if compromise is a concern** — logout and password changes don't currently revoke a leaked session token ([#35664](https://github.com/BerriAI/litellm/issues/35664)/[#35665](https://github.com/BerriAI/litellm/issues/35665)).
- **If you route through the Anthropic `/v1/messages` endpoint, verify custom proxy hooks are actually firing** ([#27518](https://github.com/BerriAI/litellm/issues/27518)) rather than assuming hook-based guardrails apply there.
- **Teams computing prompt-cache ROI on Anthropic-via-Responses-API routes should discount reported savings** until [#36091](https://github.com/BerriAI/litellm/issues/36091) is fixed — cache hits aren't reflected in usage today.
- **Codex CLI / agent-tooling users on Azure Responses should watch [#36366](https://github.com/BerriAI/litellm/issues/36366)** before relying on default namespaced tool payloads passing through cleanly.

</details>

<details>
<summary><strong>Chatwoot</strong> — <a href="https://github.com/chatwoot/chatwoot">chatwoot/chatwoot</a></summary>

One quick flag before the digest: Chatwoot is a customer-engagement/support platform (Ruby on Rails, WhatsApp/Telegram/email inboxes), not an inference engine, model server, or fine-tuning framework — it isn't part of `INFRA_REPOS` in this project's config. Today's data has nothing on models, hardware backends, quantization, or throughput, so those sections below are marked N/A rather than padded with unrelated content.

---

# Chatwoot — 2026-08-11

## Today's Highlights
WhatsApp Business-Scoped User ID (BSUID) work is moving fast ahead of Meta's deadline: [PR #15392](https://github.com/chatwoot/chatwoot/pull/15392) exposes BSUID in the agent bot webhook payload, closing [#15387](https://github.com/chatwoot/chatwoot/issues/15387) and eliminating a per-event REST call for integrations. A batch of Sentry-driven hardening fixes landed (NUL-byte search input, oversized pagination cursors, malformed filter payloads, empty round-robin queues), and a Facebook avatar-sync transaction bug ([#15378](https://github.com/chatwoot/chatwoot/issues/15378)) got two competing same-day fix PRs.

## Releases & Breaking Changes
None in the last 24h.

## New Model & Hardware Support
N/A — not applicable to this project.

## Performance & Optimization
No throughput/latency/kernel work. Closest analog: [PR #15401](https://github.com/chatwoot/chatwoot/pull/15401) moves canned-response lookups client-side (cached in IndexedDB, mirroring inboxes/labels/teams), removing a server round-trip on every keystroke in the reply composer's `/` picker.

## Stability & Regressions
1. **Facebook avatars never sync** ([#15378](https://github.com/chatwoot/chatwoot/issues/15378)) — `AvatarFromUrlJob` enqueued inside an uncommitted transaction; a fast worker can pick it up before the row is visible and drop it. Two fix PRs open same day: [#15402](https://github.com/chatwoot/chatwoot/pull/15402) (enqueue after commit) and [#15393](https://github.com/chatwoot/chatwoot/pull/15393).
2. **WhatsApp Cloud API + Dualhook outbound `Not found`** ([#15404](https://github.com/chatwoot/chatwoot/issues/15404)) — dashboard-originated sends fail while inbound/direct sends work; no fix PR yet.
3. **Email reply drops To-line recipients** ([#15394](https://github.com/chatwoot/chatwoot/issues/15394)) — reply CC computation silently omits extra `To` recipients; no fix PR yet.
4. **Private Note button contrast** ([#15221](https://github.com/chatwoot/chatwoot/issues/15221)) — cosmetic, dark theme only, low severity.
5. Proactive Sentry hardening (part of `CW-7922`): [#15397](https://github.com/chatwoot/chatwoot/pull/15397) NUL bytes in canned-response search, [#15400](https://github.com/chatwoot/chatwoot/pull/15400) oversized message cursors, [#15398](https://github.com/chatwoot/chatwoot/pull/15398) malformed filter payloads, [#15399](https://github.com/chatwoot/chatwoot/pull/15399) empty round-robin queues.

## What This Means for Application Developers
- If you consume agent-bot webhooks for WhatsApp contact resolution, [#15392](https://github.com/chatwoot/chatwoot/pull/15392) will hand you BSUID directly in the payload soon — drop any extra per-event API call once merged, and track [#13837](https://github.com/chatwoot/chatwoot/issues/13837) for the broader Meta username migration deadline.
- Building custom WhatsApp Cloud API providers/webhooks (e.g. non-Meta relays like Dualhook)? [#15404](https://github.com/chatwoot/chatwoot/issues/15404) shows outbound sends can fail even when inbound works — check your provider path against Chatwoot's dashboard-send flow specifically, not just inbound delivery.
- Anything reading email `To`/`CC` from the Chatwoot API should double check against [#15394](https://github.com/chatwoot/chatwoot/issues/15394) — reply recipients can be silently dropped until fixed.

</details>

<details>
<summary><strong>Meilisearch</strong> — <a href="https://github.com/meilisearch/meilisearch">meilisearch/meilisearch</a></summary>

## Meilisearch — 2026-08-11

### Today's Highlights
Meilisearch shipped **v1.53.0**, adding network-hydrated sharding support for foreign filters, but it arrives on the heels of three rapid-fire patch releases (v1.52.1–v1.52.3) that each reverted something from the prior release — a search-speed optimization, the new `/tasks/stream` and `/batches/stream` SSE routes, and some search-path tracing overhead. A Windows-specific LMDB snapshot crash (map_size vs. page size) also has an open fix under review.

### Releases & Breaking Changes
- **[v1.53.0](https://github.com/meilisearch/meilisearch/releases/tag/v1.53.0)** — Sharding for foreign filters ([#6517](https://github.com/meilisearch/meilisearch/pull/6517)): foreign filters now resolve by fetching and hydrating documents over the network, enabling cross-shard evaluation.
- **[v1.52.3](https://github.com/meilisearch/meilisearch/releases/tag/v1.52.3)** — Reverted the "speed up search a bit more" change from [#6542](https://github.com/meilisearch/meilisearch/pull/6542).
- **[v1.52.2](https://github.com/meilisearch/meilisearch/releases/tag/v1.52.2)** — Reverted the `/tasks/stream` and `/batches/stream` SSE routes ([#6533](https://github.com/meilisearch/meilisearch/pull/6533)).
- **[v1.52.1](https://github.com/meilisearch/meilisearch/releases/tag/v1.52.1)** — Made health-route checks blocking ([#6583](https://github.com/meilisearch/meilisearch/pull/6583)) and reverted some search progress traces ([#6584](https://github.com/meilisearch/meilisearch/pull/6584)).

No documented breaking API changes; the pattern above is three consecutive "revert what shipped last" patches, worth watching before pinning to 1.52.x.

### New Model & Hardware Support
Not applicable — Meilisearch is a search engine, not a model-serving stack; no backend/quantization changes in this window.

### Performance & Optimization
- The headline search-speed optimization merged earlier was **reverted** in v1.52.3 ([#6542](https://github.com/meilisearch/meilisearch/pull/6542)) — no numbers given, but the rollback implies it regressed correctness or another metric.
- [#6584](https://github.com/meilisearch/meilisearch/pull/6584) strips extra progress-trace steps to cut work done on the search hot path.
- v1.53.0's sharded foreign-filter design ([#6517](https://github.com/meilisearch/meilisearch/pull/6517)) trades network round-trips for cross-shard filter correctness — expect a latency cost proportional to shard count, no benchmarks published yet.

### Stability & Regressions
1. **High** — Windows snapshot crash: `remove_tasks` opens LMDB with a raw map size not aligned to the OS page size, causing `Batch failed map size ... must be a multiple of the system page size` during snapshot creation on Windows. Tracked in [#6051](https://github.com/meilisearch/meilisearch/issues/6051), fix open in [#6581](https://github.com/meilisearch/meilisearch/pull/6581).
2. **Medium** — SSE streaming routes reverted just after shipping ([#6533](https://github.com/meilisearch/meilisearch/pull/6533)) — sign of an instability caught post-release.
3. **Medium** — Search-speed optimization reverted ([#6542](https://github.com/meilisearch/meilisearch/pull/6542)) — likely a correctness or stability tradeoff, no root cause disclosed.
4. **Low** — Health route could block actix workers; fixed by marking it explicitly blocking ([#6583](https://github.com/meilisearch/meilisearch/pull/6583)).

### What This Means for Application Developers
- Hold off building on `/tasks/stream` / `/batches/stream` — they were reverted right after release; don't assume they'll reappear unchanged.
- Don't rely on 1.52.x's "faster search" claim — it's been rolled back as of 1.52.3.
- If you snapshot Meilisearch on Windows, wait for [#6581](https://github.com/meilisearch/meilisearch/pull/6581) to land before trusting backup/restore in production.
- If you upgrade to 1.53.0 for sharded foreign filters, test cross-shard filter latency under your own load — no published benchmarks yet.
- Multi-tenant apps needing per-tenant attribute schemas should read the discussion on [#6553](https://github.com/meilisearch/meilisearch/issues/6553) — official guidance still steers away from one-index-per-tenant, but no first-class alternative exists yet for heterogeneous attribute sets.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama — 2026-08-11

## Today's Highlights

Ollama shipped [v0.32.7](https://github.com/ollama/ollama/releases/tag/v0.32.7) with initial support for Meta's **Muse Glimmer**, but the release is rocky: the manifest doesn't allow pulling the model yet ([#17645](https://github.com/ollama/ollama/issues/17645)) and the advertised MLX build is reportedly repackaged NVFP4 weights, not real MLX ([#17656](https://github.com/ollama/ollama/issues/17656)). Elsewhere, MLX gains four new architectures in flight (Nemotron 3, Gemma4 vision, Apertus 1.5, Bailing MoE V3) while tool-calling reliability across Qwen/harmony parsers gets a cluster of fixes.

## Releases & Breaking Changes

- **[v0.32.7](https://github.com/ollama/ollama/releases/tag/v0.32.7)** — adds Muse Glimmer support via the MLX engine on Apple Silicon only; CUDA/AMD/other platform support is "coming days," not yet in this build.
- **[#17645](https://github.com/ollama/ollama/issues/17645)** — `ollama pull muse-glimmer:30b-q8_0` on 0.32.7 fails with a 412 "requires a newer version" error — the release note and the actual gated manifest are out of sync.
- **[#17654](https://github.com/ollama/ollama/pull/17654)** — Windows-on-Arm CPU builds currently ship baseline `armv8-a` with zero dot-product/matrix instructions; sets `GGML_CPU_ARM_ARCH` to fix.

## New Model & Hardware Support

- **Muse Glimmer** (Meta) — initial MLX-only support in v0.32.7; CUDA/ROCm/CPU pending.
- **Nemotron 3** — MLX implementation in progress ([#17060](https://github.com/ollama/ollama/pull/17060)), including Mamba2/recurrent layers, MoE routing, and quantized NVFP4/MXFP8 expert paths via a shared Metal-optimized GatherQMM kernel.
- **Gemma4** — MLX image input support ([#17650](https://github.com/ollama/ollama/pull/17650)), adding vision embeddings and PLE/bidirectional image attention through the generic `base.MediaModel` interface.
- **Apertus v1.5** (8B/70B, Swiss AI Initiative) — native chat/renderer/parser support ([#17555](https://github.com/ollama/ollama/pull/17555)).
- **Bailing MoE V3** — MLX safetensors support ([#17643](https://github.com/ollama/ollama/pull/17643)) with hybrid KDA/MLA attention and dense/MoE FFN layers.
- **[#17659](https://github.com/ollama/ollama/pull/17659)** — routine llama.cpp vendor update.

## Performance & Optimization

- **[#17631](https://github.com/ollama/ollama/issues/17631)** — TTFT regression on Windows/CUDA between 0.24.0 → 0.32.6: a flat per-request overhead (+156ms Gemma E4B, +44ms Qwen3) that doesn't scale with prompt size and isn't prompt-cache related; generation throughput itself improved. Looks like fixed per-request runner overhead — worth watching for a root-cause fix.
- **[#17557](https://github.com/ollama/ollama/issues/17557)** — feature request to keep MoE expert weights in host RAM with on-demand GPU compute, so 16B/35B MoE models fit on 8GB/12GB GPUs instead of OOMing (currently inherits llama.cpp's load-everything-to-VRAM default).

## Stability & Regressions

- **[#17599](https://github.com/ollama/ollama/issues/17599)** (high severity) — MLX engine with `OLLAMA_KEEP_ALIVE=-1` on long-lived runners intermittently returns a **verbatim answer from a different, earlier request** — cross-request response contamination, not just degraded output. No fix PR yet; correctness-critical for any multi-tenant or agent deployment on Apple Silicon.
- **[#17596](https://github.com/ollama/ollama/issues/17596)** — deterministic CUDA illegal memory access in flash-attention (head-size-256) during large prefill on DGX Spark (GB10), reproducible against Qwen3-Next 80B-A3B.
- **[#17444](https://github.com/ollama/ollama/issues/17444)** — 0.32.4/0.32.5 broke tool calling in the VS Code Copilot harness; confirmed workaround is rolling back to 0.32.1.
- **[#17632](https://github.com/ollama/ollama/issues/17632)** — MLX BF16 (Laguna-S 2.1) intermittently fails to terminate, degenerating into stream-of-consciousness output on Apple Silicon.
- **[#17517](https://github.com/ollama/ollama/issues/17517)** — Qwen3.6 35B Q4_K_M hits a memory ceiling on load post-update without filling GPU VRAM, even with reduced context.
- **[#16785](https://github.com/ollama/ollama/issues/16785)** — fixed by **[#17644](https://github.com/ollama/ollama/pull/17644)**: `ollama run ... > file` was writing raw ANSI escape sequences into redirected output.
- **[#17652](https://github.com/ollama/ollama/issues/17652)** — user skills under `~/.ollama/skills/` silently dropped; **[#17657](https://github.com/ollama/ollama/pull/17657)** adds diagnostics for rejected skill names.

## What This Means for Application Developers

- **Hold off on Muse Glimmer** until the manifest gate and MLX-weights mismatch ([#17645](https://github.com/ollama/ollama/issues/17645), [#17656](https://github.com/ollama/ollama/issues/17656)) are resolved — it isn't reliably pullable yet.
- **Pin below 0.32.4 or wait for a fix** if you depend on tool calling from VS Code/Copilot-style clients ([#17444](https://github.com/ollama/ollama/issues/17444)).
- **Avoid `OLLAMA_KEEP_ALIVE=-1` on MLX in multi-request/agentic setups** until [#17599](https://github.com/ollama/ollama/issues/17599) is fixed — responses can silently leak between requests.
- Tool-calling robustness is actively improving: malformed JSON tolerance for harmony/gpt-oss ([#17642](https://github.com/ollama/ollama/pull/17642)), better error context for Qwen3-VL parser failures ([#17651](https://github.com/ollama/ollama/pull/17651)), and opt-in streaming of partial tool-call arguments for Qwen ([#17658](https://github.com/ollama/ollama/pull/17658)) — useful if you're building agent frameworks on top of `/api/chat`.
- If pulling GGUFs directly from Hugging Face, note `hf.co/...` pulls currently skip the built-in renderer/parser assignment even for recognized architectures, degrading tool-calling reliability ([#17636](https://github.com/ollama/ollama/issues/17636)).
- Ollama Cloud API users: direct `https://ollama.com/v1` calls can 402 with "extra usage only" even when the same key works fine through the signed-in local client's Pro allowance ([#17639](https://github.com/ollama/ollama/issues/17639)) — check billing headers if cloud requests fail unexpectedly.

</details>

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Daily Digest — 2026-08-11

## Today's Highlights

**v0.27.0** shipped with 561 commits from 242 contributors (64 new), headlined by full-stack **Kimi K3** support (core kernels, Python + Rust frontends). Performance work dominates today's PR queue — an adaptive spec-decode scheduling budget claims 11–23% E2E latency reduction and 55–65% TTFT improvement ([#51725](https://github.com/vllm-project/vllm/pull/51725)), alongside further GPU↔CPU sync removal on the model execution path ([#51738](https://github.com/vllm-project/vllm/pull/51738)). On the stability side, watch two correctness issues: a silent `lm_head` weight discard on composite VLMs ([#51063](https://github.com/vllm-project/vllm/issues/51063)) and V1+MTP+GLM-5.1 engine hangs under load ([#40926](https://github.com/vllm-project/vllm/issues/40926)).

## Releases & Breaking Changes

- **v0.27.0**: Kimi K3 full-stack landing — core model/kernels ([#50089](https://github.com/vllm-project/vllm/pull/50089), [#50000](https://github.com/vllm-project/vllm/pull/50000)), Python frontend ([#50093](https://github.com/vllm-project/vllm/pull/50093)), Rust frontend ([#50104](https://github.com/vllm-project/vllm/pull/50104)), AttnRes kernels ([#50090](https://github.com/vllm-project/vllm/pull/50090)).
- **RFC**: bitsandbytes and GGUF quantization proposed for migration out of core into an OOT plugin, citing low usage (~0.5%/0.1%) relative to maintenance cost against the `weight_loader_v2` architecture ([#39583](https://github.com/vllm-project/vllm/issues/39583)).
- **CI**: release image publishing switches from a single serial DockerHub job to a 7-way Buildkite matrix across CUDA/ROCm/XPU/CPU variants ([#51735](https://github.com/vllm-project/vllm/pull/51735)).

## New Model & Hardware Support

- **Kimi-K3 on ROCm/AMD**: tracking issue for day-0 feature parity — AITER fused-MoE (a16w4/a8w4) already integrated, more gaps being triaged ([#50682](https://github.com/vllm-project/vllm/issues/50682)).
- **ROCm/DSV4**: AITER tuned GEMM now used for full-graph decode attention, requiring new plumbing for cudagraph warmup to detect graph mode from within a layer ([#51713](https://github.com/vllm-project/vllm/pull/51713)); native MXFP4 TP8 shard allocation preserved instead of padding to 512 ([#51473](https://github.com/vllm-project/vllm/pull/51473)).
- **B12X backend**: new opt-in linear/MoE/causal-attention kernels for NVIDIA SM120/SM121 (Blackwell), added without touching generic model-runner code ([#51696](https://github.com/vllm-project/vllm/pull/51696)).
- **ROCm CI base**: moving to "The Rock" 7.14 while holding Python 3.12 / Ubuntu 22.04 steady ([#49925](https://github.com/vllm-project/vllm/pull/49925)).
- **Open request**: SM8x (Ampere A100/A800) support for DeepSeek-V4-Flash/-0731 has no upstream path yet — highest-engagement open issue today at 94 comments ([#50576](https://github.com/vllm-project/vllm/issues/50576)).
- **Gap**: Qwen3.5-MoE (`Qwen3_5MoeForConditionalGeneration`) architecture still unsupported ([#35344](https://github.com/vllm-project/vllm/issues/35344)); Intel ARC 140v lacks an XE2 cutlass kernel ([#37828](https://github.com/vllm-project/vllm/issues/37828)).

## Performance & Optimization

- **Adaptive spec-decode scheduling budget**: scales scheduled-token count with actual concurrency instead of a fixed `max_num_batched_tokens` cap — reported 11–23% E2E latency reduction and 55–65% TTFT improvement ([#51725](https://github.com/vllm-project/vllm/pull/51725)).
- **DSpark confidence-scheduled verification**: sizes speculative draft-verification budget per-request from confidence rather than always verifying a fixed k, aimed at high-concurrency collapse where fixed-k spec decode burns more compute than it returns ([#47808](https://github.com/vllm-project/vllm/pull/47808)).
- **More host-roundtrip removal**: continuing the `VLLM_GPU_SYNC_CHECK` sync-avoidance effort, this round targets kv-sharing fast-prefill decode metadata derived host-side ([#51738](https://github.com/vllm-project/vllm/pull/51738)).
- **Kernel**: proposal to adopt PTX 9.4 `ldmatrix.s8.s4` for hardware INT4→INT8 expanding loads in W4A8-INT8 paths ([#49529](https://github.com/vllm-project/vllm/issues/49529)).
- **ModelOpt refactor**: six near-duplicate FP8/NVFP4/MXFP8 `LinearMethod` classes consolidated into one generic `ModelOptLinearMethod` ([#49381](https://github.com/vllm-project/vllm/pull/49381)).

## Stability & Regressions

Ranked by severity:

1. **Silent correctness bug** — composite VLM wrapper (`Mistral3ForConditionalGeneration`) resolves `tie_word_embeddings` from the wrong top-level config, silently discarding a real `lm_head.weight` and producing fluent-but-wrong output with no error signal ([#51063](https://github.com/vllm-project/vllm/issues/51063), open, no fix PR yet).
2. **Engine deadlock** — V1 + MTP + GLM-5.1 (DSA+MoE+MLA) workers hang under sustained production traffic; scheduler stalls, `sample_tokens` RPC times out, ends in `EngineDeadError` ([#40926](https://github.com/vllm-project/vllm/issues/40926), open).
3. **Crash** — hybrid multi-group KV: `_update_requests_with_invalid_blocks` throws `ValueError: too many values to unpack` whenever a KV connector reports load-error blocks ([#50687](https://github.com/vllm-project/vllm/issues/50687), open).
4. **Load-time crash** — block-scaled FP8 (compressed-tensors W8A8) hits a DeepGEMM "Unknown SF transformation" assertion on SM120 Blackwell ([#47436](https://github.com/vllm-project/vllm/issues/47436), open).
5. **Reported perf/quality regression** — production A/B on DeepSeek-V4-Flash isolates #48137 to a ~10.6% spec-decode acceptance-rate cost and #48660 to an output-distribution shift ([#49927](https://github.com/vllm-project/vllm/issues/49927), open).
6. **Fixed today** — CUDA image-preprocessing crash (`CUDNN_STATUS_INTERNAL_ERROR`) under `--mm-device-do-normalize`, reported as [#51717](https://github.com/vllm-project/vllm/issues/51717) and already fixed by [#51734](https://github.com/vllm-project/vllm/pull/51734) (replaces `F.batch_norm` with a cudnn-free equivalent).
7. **Broken feature** — Gemma-4 KV-cache CPU offloading reported broken, no repro details yet ([#42348](https://github.com/vllm-project/vllm/issues/42348), open).
8. **Parser gap** — `qwen3_xml` tool parser consumes `</think>`, merging reasoning into `content` with no way to split it back out ([#51679](https://github.com/vllm-project/vllm/issues/51679), open).
9. **Attention fix** — MLA prefill workspace allocation size revert; a `max-num-seqs * block_size` minimum reintroduced by #50484 is no longer needed after #50613's per-request MLA chunked-context scheduling ([#51733](https://github.com/vllm-project/vllm/pull/51733)).
10. Also landed: async Mamba align D2H count/row-shift decoupling under spec decode + async scheduling ([#51599](https://github.com/vllm-project/vllm/pull/51599)).

## What This Means for Application Developers

- If you serve **Mistral3-family composite VLMs**, check output quality carefully — #51063 means a misconfigured `tie_word_embeddings` can silently drop your real output head and give coherent-looking but wrong text with zero error logs.
- Running **GLM-5.1 with MTP speculative decoding on V1** under real traffic carries a known hang risk (#40926); consider disabling MTP or pinning to a version before this surfaces, and watch for a fix.
- Teams using `--mm-device-do-normalize` for on-device image preprocessing should pick up **v0.27.0+** (or the corresponding patch) to get the #51734 fix for the cudnn crash.
- If TTFT/latency at high concurrency is a pain point, the adaptive spec-decode budget (#51725) is worth tracking for adoption — it's a scheduler-level change, not a model change, so it should be a drop-in win once merged.
- DeepSeek-V4-Flash users on Ampere (A100/A800) remain blocked — no SM8x support path exists yet (#50576); plan capacity on Hopper/Blackwell or wait on that thread.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
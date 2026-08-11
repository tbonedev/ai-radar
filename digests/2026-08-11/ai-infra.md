# AI Infrastructure Digest 2026-08-11

> Generated: 2026-08-11 08:07 UTC | Projects covered: 6

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Chatwoot](https://github.com/chatwoot/chatwoot)
- [Meilisearch](https://github.com/meilisearch/meilisearch)
- [Ollama](https://github.com/ollama/ollama)
- [vLLM](https://github.com/vllm-project/vllm)

---

## Cross-Project Comparison

# AI Infrastructure Ecosystem — Cross-Project Comparison
**2026-08-11**

## 1. Ecosystem Overview

Today's activity splits cleanly along the stack: **vLLM** and **Ollama** are racing to be first with day-one support for Meta's new **Muse Glimmer** model — and both are eating early-adopter pain for it, with manifest/download bugs on Ollama and an upgrade-breakage report on vLLM. The gateway/proxy layer (**LiteLLM**) shipped a supply-chain-hardening release while quietly sitting on two serious open reliability bugs — a budget-enforcement bypass and a cross-team authorization gap — that matter more for production agent fleets than any new feature. **Meilisearch** just came out of a rocky patch cycle (two reverts in three point releases) alongside its first v1.53.0 sharded-filter feature. Meanwhile **Dify** and **Chatwoot** illustrate the layer above infrastructure: both are AI-*consuming* application platforms wrestling with data-integrity and authorization bugs in the plumbing that connects their products to model backends, not with inference performance itself. The throughline across all six projects is that **correctness and multi-tenant safety issues are accumulating faster than they're being resolved**, even as feature/model-support velocity stays high.

## 2. Activity Comparison

Counts reflect items referenced in today's digest (not full repo activity):

| Project | Issues referenced | PRs referenced | Release today |
|---|---|---|---|
| **vLLM** | ~15 | ~17 | **v0.27.0** (561 commits, 242 contributors) |
| **Ollama** | ~12 | ~10 | **v0.32.7 + v0.32.8** (two same-day releases) |
| **LiteLLM** | ~12 | ~7 | **v1.96.0** (cosign-signed images) |
| **Dify** | ~19 | ~12 | None |
| **Chatwoot** | ~6 | ~10 | None |
| **Meilisearch** | ~2 | ~6 | **v1.53.0** (+ v1.52.1–1.52.3 patch chain) |

vLLM and Ollama are running the highest-velocity release cadences; Meilisearch's low issue count but heavy patch-release churn signals a rockier-than-usual week rather than a quiet one.

## 3. Model Support Race

**Muse Glimmer (Meta) is the model of the day**, landing simultaneously on two projects with opposite maturity:
- **Ollama**: MLX-first on Apple Silicon (v0.32.7/v0.32.8), but three open issues report broken manifests — one shipping the wrong (NVFP4) weight variant under the MLX tag, one failing to download entirely.
- **vLLM**: lands as a 29.6B dense VLM with DFlash speculative decoding and tool-call parsers (PR #51655) — no correctness complaints yet, but it's fresh enough that none would be expected today.

**Kimi K3** is vLLM's other headline win — full-stack (kernels, Python *and* Rust frontends) in a single release (v0.27.0), with ROCm/AMD support explicitly tracked as a follow-up gap. This is the most complete same-day model launch of the six digests.

**Ollama's MLX engine** is also the most active *breadth* play: Nemotron 3 (MoE + Mamba2), Gemma4 image input, and Apertus 1.5 all landed in the same window — Apple Silicon is clearly Ollama's most active surface right now.

**LiteLLM** isn't adding models so much as adding *routing surface*: DeepSeek parity for its Rust gateway, plus two new intelligent-routing providers (Nadir, Ofox) that pick models server-side rather than exposing a fixed model — a meaningfully different pattern from the other two projects' "add a model" PRs. Its Z.AI `glm-5.2[1m]` registry gap is a reminder that gateway abstraction adds its own class of model-support bugs (routing/registry, not weights).

**Verdict**: vLLM is ahead on production-grade completeness (day-one multi-frontend Kimi K3 support); Ollama is ahead on breadth but visibly behind on release QA for its highest-profile model.

## 4. Performance Frontier

| Focus area | Project(s) | Detail |
|---|---|---|
| Distributed/gateway overhead | LiteLLM | Rust gateway rewrite (#31263) targeting sub-1ms overhead vs. Python proxy; still beta |
| Kernels / quantization | vLLM | PTX 9.4 INT4→INT8 expanding loads for W4A8, SM90 FA4 dense+MLA integration |
| MoE efficiency | Ollama, vLLM | Ollama: on-demand expert loading proposal (#17557) to fit MoE on 8–12GB GPUs; vLLM: fused-shared-expert (FSE) standardization (#51695) |
| KV cache | vLLM | DeepSeek-V4-Flash-0731 checkpoint shows ~8× KV-cache-per-token regression, capping context length |
| Search-side perf | Meilisearch | Two performance changes shipped *and reverted* within the v1.52.x cycle — precautionary rollback culture, not root-caused regressions |
| Hot-path query elimination | Chatwoot | Removed a full-table `COUNT(*)` from the admin login redirect path |

The center of gravity is clearly **quantization and MoE memory efficiency** — three of six projects (vLLM, Ollama, and indirectly LiteLLM via routing cost-efficiency) are actively working this exact problem from different angles this week.

## 5. Layer Positioning

- **Serving engine (GPU inference)**: **vLLM** — the only project doing kernel-level work (FA4, PTX INT4, DeepGEMM) and multi-GPU/distributed correctness at this depth.
- **Local/edge runtime**: **Ollama** — Apple Silicon (MLX) and Jetson-class edge hardware are its differentiators; its bugs (manifest corruption, cross-request contamination) are runtime/packaging issues rather than kernel issues.
- **Gateway / routing / multi-provider abstraction**: **LiteLLM** — sits in front of vLLM/Ollama/hosted APIs; today's bugs (budget bypass, cross-team key access) are specifically *gateway-layer* trust-boundary failures, a risk class the serving/runtime layers don't have.
- **Application/orchestration (LLM-app builder)**: **Dify** — doesn't serve or route models itself; its infra-adjacent bugs (Weaviate vector orphaning, nginx DNS caching, KB deletion races) are about the data layer *around* a model call, not the model call itself.
- **End-user product with bolted-on AI (Captain)**: **Chatwoot** — furthest from "AI infra"; its AI-relevant news (Copilot tool-access scoping fix, Twilio call transcription) is a thin layer over existing provider integrations, not infrastructure development.
- **Adjacent: search infra with an AI feature**: **Meilisearch** — core product is not model-serving, but its Chat feature is now coupled tightly enough to upstream model behavior (GPT-5.6 `reasoning_effort`) that it's absorbing model-compatibility bugs it doesn't control.

## 6. Trend Signals

- **Rust is becoming the default for performance-critical control planes.** LiteLLM's gateway rewrite and Dify's Rust-runtime benchmarking discussion are independent signals of the same shift — Python is being pushed out of the hot path, not the model-execution path.
- **Multi-tenant trust boundaries are the weakest link, not raw throughput.** LiteLLM's budget-bypass and cross-team key-access bugs are the most consequential items in this entire batch for anyone running shared infrastructure — worse than any single performance regression, because they fail silently.
- **Day-one model support is now a competitive/marketing race, and it's shipping before it's ready.** Muse Glimmer landed the same window on both Ollama and vLLM, and both show fresh correctness bugs as a direct result — expect a pattern where "ships same day as the model" trades off against "works correctly," and application developers should default to a short cooldown before adopting brand-new model tags in production.
- **MoE memory economics is the shared unsolved problem of the quarter.** Independent feature requests/PRs from Ollama (on-demand expert loading) and vLLM (FSE standardization) point at the same underlying gap: full-VRAM expert residency doesn't scale to consumer/prosumer hardware, and neither project has shipped a real fix yet.
- **Quantization correctness remains fragile at the edges.** Ollama's q4_0 garbage-output bug and vLLM's DeepSeek KV-cache blowup are unrelated root causes but the same symptom class — aggressive quantization/compression paths are under-tested relative to how heavily they're being promoted.
- **"AI feature" bolted onto a non-AI-native product is a new bug surface.** Chatwoot's Captain tool-scoping fix and Meilisearch's GPT-5.6 chat-compatibility break both show that products integrating LLM features via API calls inherit both the *model's* instability and their *own* authorization/integration bugs — a two-front maintenance burden that pure infra projects don't have. Application developers building on these product-layer AI features should treat them as less mature than the underlying model APIs, regardless of how mature the host product is.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Daily Digest — 2026-08-11

## Today's Highlights
No new releases landed today, but the day was dominated by infrastructure reliability issues: a long-running nginx DNS-caching bug that breaks service discovery after container restarts resurfaced with a second, related report, and multiple data-integrity bugs around knowledge base deletion and vector store consistency were reported. On the feature side, a large PR (#40485) adds chunk-level metadata filtering to the Knowledge Base, and the web team continued a multi-layer refactor migrating profile state from Jotai atoms to TanStack Query.

## Releases & Breaking Changes
None in the last 24h.

## New Model & Hardware Support
No new model backend/hardware support items reported today. One provider-config bug is worth noting for model access: [#40488](https://github.com/langgenius/dify/issues/40488) reports an error selecting "Zhipu AI" as a model provider when using a custom/internal API Base URL.

## Performance & Optimization
- [#39976](https://github.com/langgenius/dify/issues/39976) — Open discussion on benchmarking Rust runtime optimization opportunities; no concrete numbers yet, worth watching for follow-up.
- Large web-side refactor stack (#40467–#40474, #40482, #40491) moves profile/account/app-meta reads off Jotai atom effects onto TanStack Query selectors — primarily a maintainability/architecture change rather than a measured perf win, but reduces redundant client-side state sync.

## Stability & Regressions
Ranked by likely impact:

1. **Nginx caches stale upstream IP/DNS after partial container restarts → 502s** — [#39154](https://github.com/langgenius/dify/issues/39154) (closed, 60 comments, affects 1.15.0+) and a fresh duplicate report [#40448](https://github.com/langgenius/dify/issues/40448) (open) both describe nginx caching upstream DNS for api/plugin_daemon/web indefinitely, causing `502 Connection Refused` after a service restarts with a new IP. High community engagement suggests this is a common self-hosted deployment pain point; worth confirming whether the fix behind #39154's closure actually resolves #40448.
2. **Weaviate vector deletion no-op** — [#40457](https://github.com/langgenius/dify/issues/40457): `delete_by_ids` passes Dify segment IDs to `delete_by_id`, which expects object UUIDs, so document deletion silently leaves orphaned vectors in Weaviate. Confirmed present since 1.13.3, not a regression from the VDB workspace refactor (#34900).
3. **Data sync issue upgrading 1.15.0 → 1.16.1** — [#39694](https://github.com/langgenius/dify/issues/39694) (closed, 15 comments) — worth checking release/migration notes if planning an upgrade across these versions.
4. **Orphaned segments/child_chunks/pgvector tables on KB deletion mid-indexing** — [#38518](https://github.com/langgenius/dify/issues/38518) and companion guard-rail request [#38522](https://github.com/langgenius/dify/issues/38522) — deleting a knowledge base while documents are still indexing leaves orphaned data.
5. **HITL/workflow race condition** — [#40445](https://github.com/langgenius/dify/issues/40445): race between Celery workflow persistence and Human-In-The-Loop pause creation. Related: [#40459](https://github.com/langgenius/dify/issues/40459) — HITL timeout key drifted from `__timeout` to `__timeout__` in the backend (AI-assisted analysis via Codex/gpt-5.6).
6. **Broken image previews** — [#40479](https://github.com/langgenius/dify/issues/40479) (logs: neither uploaded nor generated images preview) and [#40425](https://github.com/langgenius/dify/issues/40425) (Agent App discards tool-returned image URLs in `_convert_tool_response_to_text`).
7. **Agent + AWS Bedrock ValidationException** — [#40389](https://github.com/langgenius/dify/issues/40389): empty tool descriptions from sandbox shell tools break Bedrock agent calls.
8. **InvokeError 'required' when invoking Agent within a workflow** — [#39937](https://github.com/langgenius/dify/issues/39937) (closed, reporter says still reproduces on latest).
9. **Workflow log cleanup failing** — [#36473](https://github.com/langgenius/dify/issues/36473), open since May with continued activity.
10. **Dify Cloud MCP Server returns -32603 Internal Server Error** when called from n8n's MCP client — [#40007](https://github.com/langgenius/dify/issues/40007).
11. Minor UX bug: [#39565](https://github.com/langgenius/dify/issues/39565) — pressing Enter in an HTTP Request node's Params/Headers field corrupts the row (closed).

A fix PR did land for a related workflow-canvas regression: [#40489](https://github.com/langgenius/dify/pull/40489) preserves the workflow canvas across history updates (merged/closed).

## What This Means for Application Developers
- **Self-hosted deployments**: if you're seeing intermittent 502s after rolling restarts of `api`/`plugin_daemon`/`web` containers, this is a known nginx DNS-caching issue (#39154, #40448) — not your config. Consider forcing nginx `resolver` refresh or restarting the whole stack together until an official fix ships.
- **Weaviate users**: document deletion is not actually removing vectors (#40457) — audit your Weaviate index for orphaned vectors if you rely on Weaviate as your vector store, especially after bulk deletes.
- **Knowledge base management**: avoid deleting a KB while documents are still indexing (#38518/#38522) until the guard-rail lands — you can end up with orphaned pgvector data.
- **Agent + Bedrock + custom tools**: if your Agent app uses sandbox shell tools with AWS Bedrock, watch for `ValidationException` from empty tool descriptions (#40389).
- **Metadata filtering**: [#40485](https://github.com/langgenius/dify/pull/40485) (open, XXL) adds segment-level metadata overrides with Console/Service API support — relevant if you've been waiting for chunk-level metadata control per [#38606](https://github.com/langgenius/dify/issues/38606).
- **RAG + MCP**: if you're exposing RAG apps via MCP, note the open feature request for citation/source-attribution support in MCP responses ([#40481](https://github.com/langgenius/dify/issues/40481)) — not yet implemented.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-08-11

## Today's Highlights

LiteLLM shipped **v1.96.0** with cosign-signed Docker images, while active development continues on the Rust gateway rewrite (`#31263`) and a new `litellm.fusion()` multi-model response API. Two notable proxy PRs landed today enabling routing groups to be called as virtual models and enforcing `rpm`/`tpm` on model creation. On the reliability side, a serious **budget-enforcement bypass** and an unauthorized cross-team key access bug remain open and merit attention for anyone running multi-tenant proxy deployments.

## Releases & Breaking Changes

- **[v1.96.0](https://github.com/BerriAI/litellm/releases/tag/v1.96.0)** — adds cosign signature verification for all official Docker images (signed since commit `0112e53`). No breaking API changes noted; primarily a supply-chain hardening release.

## New Model & Hardware Support

- **[PR #36520](https://github.com/BerriAI/litellm/pull/36520)** — DeepSeek provider parity added to the Rust `/messages` gateway (auth, URL, metadata, tool behavior matched to the existing Python implementation).
- **[PR #33227](https://github.com/BerriAI/litellm/pull/33227)** — new **Nadir** provider (`nadir/auto`), an OpenAI-compatible intelligent router that classifies requests server-side and picks the cheapest capable model.
- **[PR #32049](https://github.com/BerriAI/litellm/pull/32049)** — new **Ofox** provider, an OpenAI-compatible/Anthropic/Gemini unified gateway (author-disclosed affiliation).
- **[Issue #32218](https://github.com/BerriAI/litellm/issues/32218)** — Z.AI's documented `glm-5.2[1m]` (1M context variant) returns `Unknown Model` through the proxy even though the base `glm-5.2` works — a model-registry gap, not yet fixed.

## Performance & Optimization

- **[Issue #31263](https://github.com/BerriAI/litellm/issues/31263)** — the Rust gateway migration (parent tracking issue) targets sub-1ms overhead versus the Python proxy; still in beta with active community sign-ups.
- **[PR #36517](https://github.com/BerriAI/litellm/pull/36517)** — audio transcription execution moved from the Rust `ai-gateway` into `litellm-core`, continuing the pattern of centralizing provider logic in core rather than the gateway shell.
- **[Issue #36174](https://github.com/BerriAI/litellm/issues/36174)** — `Router.async_get_healthy_deployments` calls a **sync** token counter (`tiktoken`) on the async path when `enable_pre_call_checks=True`, blocking the event loop on every pre-call check for deployments with `max_input_tokens` set. No fix PR linked yet — worth watching for high-QPS proxy deployments.
- **[PR #36519](https://github.com/BerriAI/litellm/pull/36519)** — routing groups become callable as virtual models and now appear in `/v1/models`, closing a gap where Claude Code/Codex model discovery couldn't see them.

## Stability & Regressions

Ranked by severity:

1. **[Issue #26672](https://github.com/BerriAI/litellm/issues/26672)** (high, financial impact) — key/user `max_budget` enforcement silently bypassed on v1.82.3 despite spend exceeding the cap. No fix PR referenced yet.
2. **[Issue #27722](https://github.com/BerriAI/litellm/issues/27722)** (high, security) — cross-team authorization bypass: Team 2 can perform RUD operations on Team 1's key without permission via `/v1/memory` CRUD endpoints.
3. **[Issue #36114](https://github.com/BerriAI/litellm/issues/36114)** (medium, correctness) — streaming token usage is severely undercounted provider-independently in chained proxy setups (Front-Proxy → Upstream-Proxy → Bedrock); reporter traces root cause to the stream-aggregation layer, distinct from the already-fixed `chunk_parser()` bug.
4. **[Issue #27736](https://github.com/BerriAI/litellm/issues/27736)** (medium, scaling) — deployment-level TPM limits are enforced per-pod under `usage-based-routing-v2`, so effective limits multiply by replica count in multi-replica deployments.
5. **[Issue #14809](https://github.com/BerriAI/litellm/issues/14809)** (medium) — duplicated Slack alerts/spend reports across replicas in k8s; **[PR #36489](https://github.com/BerriAI/litellm/pull/36489)** (open today) addresses this via a shared `PodLockManager` to dedupe scheduled sends.
6. **[Issue #24004](https://github.com/BerriAI/litellm/issues/24004)** (medium) — mid-stream provider errors (e.g. Anthropic `overloaded_error`) are not caught by router fallback on the `anthropic_messages`/`/v1/messages` route.
7. **[Issue #27955](https://github.com/BerriAI/litellm/issues/27955)** (low-medium) — `max_parallel_requests` counter in Redis monotonically increases when clients cancel streaming `/v1/messages` requests mid-stream, eventually exhausting the limit.
8. **[Issue #20494](https://github.com/BerriAI/litellm/issues/20494)** (low) — `/key/generate` silently allows creating a new key with a secret key that already exists, with no error.

## What This Means for Application Developers

- **Budget/quota enforcement is not currently trustworthy** on some proxy versions (`#26672`) — if you rely on `max_budget` for cost control, add an external spend cap or monitor closely until this is confirmed fixed.
- **Multi-team isolation has a gap** (`#27722`) — audit who can manage other teams' keys if you run a shared multi-tenant proxy.
- **Streaming cost tracking may under-report** (`#36114`) — if you bill or alert on token usage from streamed responses through chained proxies, cross-check against non-streaming totals for now.
- New **routing groups callable as models** (`#36519`) and **`litellm.fusion()`** (`#36511`, multi-model parallel fusion with judge synthesis) give app developers new ways to expose composite routing/ensemble behavior directly as a single model name — worth evaluating if you're building agent routing logic on top of LiteLLM instead of hand-rolling it.
- If you use **Claude Code or Codex against a LiteLLM proxy**, note `#25848` (empty OpenAI-compatible translation on certain LiteLLM/Claude Code version combos) and `#27955` (parallel-request counter leak on `/v1/messages` cancellation) — both can cause silent failures or throttling under agentic workloads.

</details>

<details>
<summary><strong>Chatwoot</strong> — <a href="https://github.com/chatwoot/chatwoot">chatwoot/chatwoot</a></summary>

# Chatwoot Daily Digest — 2026-08-11

## Today's Highlights

No new releases landed in the last 24h, but activity is dominated by three threads: continued hardening of WhatsApp Business-Scoped User ID (BSUID) support ahead of Meta's rollout, a batch of authentication/SAML correctness fixes, and steady progress on Captain (Chatwoot's AI conversation assistant) — including a new advanced inactivity policy and account-scoping fixes for its Copilot tool access. Several bug reports also surfaced around message delivery and background-job correctness (avatar sync, email CC handling, WhatsApp send failures).

## Releases & Breaking Changes

No tagged releases in the last 24h. However, several merged/in-review PRs carry migration-relevant behavior changes worth flagging for self-hosters and integrators:

- **SAML login binding tightened** — existing users can now only be matched to a SAML login if already provisioned as `provider: saml`, and binding now requires matching `uid` (IdP NameID), not just provider type. Accounts relying on email-only SAML matching should review before upgrading. ([PR #15388](https://github.com/chatwoot/chatwoot/pull/15388), [PR #15390](https://github.com/chatwoot/chatwoot/pull/15390))
- **New notification on cross-account agent invite** — existing users added as agents to a new account now receive an email; may affect notification volume expectations. ([PR #15389](https://github.com/chatwoot/chatwoot/pull/15389))

## New Model & Hardware Support

Not applicable — Chatwoot is a customer-engagement platform, not a model-serving/inference project. No new LLM backend, model, or hardware-acceleration integrations were reported in this window; Captain's AI features continue to run on existing provider integrations.

## Performance & Optimization

- **Sidekiq worker `MemoryMax` now scales with host memory** instead of a fixed `1.2G` cap baked into the systemd unit shipped by `setup_18.04.sh`/`setup_20.04.sh` — should reduce OOM-kills on larger self-hosted boxes and avoid over-allocation on smaller ones. ([PR #15412](https://github.com/chatwoot/chatwoot/pull/15412))
- **Super admin post-login redirect changed** from the users index (which runs an exact `COUNT(*)` over the full users table on every load) to the lighter super admin dashboard — removes an expensive query from the hot login path. ([PR #15411](https://github.com/chatwoot/chatwoot/pull/15411))
- **Avatar sync moved to after-commit enqueue** — fixes a race where `AvatarFromUrlJob` could be picked up by a worker before the enclosing transaction committed, causing silent job failures. ([PR #15402](https://github.com/chatwoot/chatwoot/pull/15402), fixes [#15378](https://github.com/chatwoot/chatwoot/issues/15378))

## Stability & Regressions

Ranked by apparent severity/impact:

1. **WhatsApp Cloud API + Dualhook: outbound sends fail with `Not found`** while inbound and direct sends work — active integration breakage, no fix PR yet. ([Issue #15404](https://github.com/chatwoot/chatwoot/issues/15404))
2. **Email reply drops extra "To" recipients** — replies from the dashboard silently omit recipients who were in the customer's original "To" line (only CC is preserved), a correctness bug affecting message delivery. Root cause identified in the mailer code; no fix PR linked yet. ([Issue #15394](https://github.com/chatwoot/chatwoot/issues/15394))
3. **Facebook contact avatars never sync** — `AvatarFromUrlJob` enqueued inside an uncommitted transaction, so jobs are dropped before the record is visible. **Fix merged** via [PR #15402](https://github.com/chatwoot/chatwoot/pull/15402). ([Issue #15378](https://github.com/chatwoot/chatwoot/issues/15378))
4. **Resolved conversations can be reopened via unintended Live Widget actions**, even when "allow messages after conversation resolution" is disabled — a recurrence of a previously closed bug (#10027). No fix PR yet. ([Issue #12171](https://github.com/chatwoot/chatwoot/issues/12171))

## What This Means for Application Developers

- **WhatsApp integrations should track BSUID work closely.** Meta's business-scoped user ID rollout (hiding phone numbers behind `@username`) is a hard deadline item (#13837, 39 comments), and Chatwoot is actively landing support: [PR #15406](https://github.com/chatwoot/chatwoot/pull/15406) exposes all source IDs (phone, BSUID, portfolio parent) per contact, and a related feature request ([#15387](https://github.com/chatwoot/chatwoot/issues/15387)) asks to surface BSUID in agent-bot webhook payloads — external bots/integrations currently can't resolve contacts by BSUID at all.
- **Captain API consumers should re-check authorization assumptions.** [PR #15249](https://github.com/chatwoot/chatwoot/pull/15249) scopes Captain Copilot's `get_conversation` tool to conversations the requesting agent can actually access (previously any conversation in the account was readable) — a security-relevant tightening if you build on Captain's tool-calling surface.
- **Automation builders get a new email transcript target**: automations can now send transcripts directly to the conversation contact's email instead of a hardcoded address ([PR #15373](https://github.com/chatwoot/chatwoot/pull/15373)).
- **Don't rely on WhatsApp/email delivery being complete** right now — the outbound `Not found` bug (#15404) and dropped-CC-recipients bug (#15394) mean integrations that depend on reliable message fan-out should add their own delivery verification until fixes land.
- **Voice/call-based agent workflows**: Twilio call recordings now get AI transcription via Captain, surfaced under the audio player ([PR #15241](https://github.com/chatwoot/chatwoot/pull/15241)) — relevant if you're building on top of call conversation data.

</details>

<details>
<summary><strong>Meilisearch</strong> — <a href="https://github.com/meilisearch/meilisearch">meilisearch/meilisearch</a></summary>

# Meilisearch Digest — 2026-08-11

## Today's Highlights

Meilisearch shipped **v1.53.0**, headlined by sharded foreign-filter evaluation, following a turbulent v1.52.x patch cycle that reverted two separate performance/feature changes (SSE streaming routes and a search-speed optimization) due to regressions. Two bug reports are open: a chat-workspace failure with OpenAI's GPT-5.6 reasoning models, and a multi-tenancy attribute-schema limitation flagged as a design question rather than a bug.

## Releases & Breaking Changes

- **[v1.53.0](https://github.com/meilisearch/meilisearch)** — Sharding for foreign filters ([#6517](https://github.com/meilisearch/meilisearch/pull/6517), @ManyTheFish): foreign filters are now evaluated by retrieving documents over the network and hydrating them, enabling filter evaluation across shards.
- **v1.52.3** — Reverted the "speed up search speed a bit more" change from [#6542](https://github.com/meilisearch/meilisearch/pull/6542) (@Kerollmops) after it caused issues.
- **v1.52.2** — Reverted the `/tasks/stream` and `/batches/stream` SSE routes ([#6533](https://github.com/meilisearch/meilisearch/pull/6533), @Kerollmops).
- **v1.52.1** — Made health-route checks blocking ([#6583](https://github.com/meilisearch/meilisearch/pull/6583)) and reverted some search-progress traces ([#6584](https://github.com/meilisearch/meilisearch/pull/6584)), both by @Kerollmops.
- Cargo.toml version bump for the v1.53.0 release cycle: [#6582](https://github.com/meilisearch/meilisearch/pull/6582).

## New Model & Hardware Support

No new model, architecture, or hardware backend support reported in this window. The GPT-5.6 issue below is an integration compatibility problem with Meilisearch's Chat feature, not new model support.

## Performance & Optimization

- Two rounds of reverted performance work landed as patch releases: the search-speed optimization from #6542 (v1.52.3) and unspecified search-progress trace instrumentation from #6584 (v1.52.1) were both pulled back — reverts appear to be precautionary rather than tied to a specific reported incident.
- Health-route checks were changed to blocking ([#6583](https://github.com/meilisearch/meilisearch/pull/6583)) specifically to stop the health endpoint from monopolizing actix's worker pool — a targeted fix for worker-thread contention.

## Stability & Regressions

- **Medium** — [#6564](https://github.com/meilisearch/meilisearch/issues/6564): Chat workspace breaks when switching from GPT-5.5 to GPT-5.6 due to a `reasoning_effort` compatibility issue; the chat completions endpoint returns a function-related API error. Open, 1 comment, no linked fix yet.
- **Design limitation, not a bug** — [#6553](https://github.com/meilisearch/meilisearch/issues/6553): Multi-tenancy setups where each tenant needs a different attribute set aren't well supported under the recommended single-index-per-workload pattern. Open, 3 comments, under discussion.
- Two consecutive patch releases (v1.52.2, v1.52.3) existed solely to revert prior changes — the SSE streaming routes and a search-speed tweak — indicating those changes shipped with regressions caught shortly after release.

## What This Means for Application Developers

- If you rely on `/tasks/stream` or `/batches/stream` for real-time task/batch monitoring, note these SSE routes were reverted in v1.52.2 — fall back to polling until they reappear.
- Hold off upgrading Chat-workspace integrations to GPT-5.6 until [#6564](https://github.com/meilisearch/meilisearch/issues/6564) is resolved; GPT-5.5 remains the safe choice for the chat completions endpoint.
- If you're designing multi-tenant search where tenants have heterogeneous attribute schemas, review [#6553](https://github.com/meilisearch/meilisearch/issues/6553) before committing to a single shared index — the current guidance may not fit per-tenant schema variation.
- Sharded foreign-filter support in v1.53.0 is worth evaluating if you filter across related indexes at scale, since evaluation now happens over the network with document hydration rather than requiring co-located data.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-08-11

## Today's Highlights

Ollama shipped two rapid releases (**v0.32.7**, **v0.32.8**) to roll out **Muse Glimmer** (Meta's newest open model) across all platforms, initially via the MLX engine on Apple Silicon. The rollout has been rocky: at least three open issues report broken or mismatched Muse Glimmer manifests/downloads, and a parser fix already landed to recover malformed tool-call tokens the model emits. Elsewhere, MLX gains continue (Nemotron 3, Gemma4 image input, Apertus 1.5) alongside several correctness bugs in quantization, model deletion on upgrade, and cross-request response contamination on the MLX engine.

## Releases & Breaking Changes

- **[v0.32.8](https://github.com/ollama/ollama/releases/tag/v0.32.8)** and **[v0.32.7](https://github.com/ollama/ollama/releases/tag/v0.32.7)** — introduce Muse Glimmer support, initially via the MLX engine on Apple Silicon, with NVIDIA/AMD/other platform support promised as a follow-up.
- **[#17664 parsers: recover boundary tokens fumbled into glimmer ATEM invoke names](https://github.com/ollama/ollama/pull/17664)** — the model occasionally emits a `<|message|>` boundary token inside the tool-invoke name region; this patch extends the existing recovery logic to the newly-observed shape.
- **[#17425 test: harden integration tests, lint, add create scope](https://github.com/ollama/ollama/pull/17425)** — splits large client-side blob uploads (gguf/safetensors/quantization) into a new `create` test scope, separate from the release scope; also fixes VRAM-gate matching for untagged model names.

## New Model & Hardware Support

- **Muse Glimmer** (Meta) — now available across platforms per v0.32.8; MLX-first rollout on Apple Silicon.
- **[#17060 mlx: implement Nemotron 3](https://github.com/ollama/ollama/pull/17060)** — adds Nemotron 3 Nano Omni to the MLX engine, including Mamba2/recurrent components, MoE routing, and quantized NVFP4/MXFP8 expert paths via a shared mapped MoE GatherQMM path with Metal-optimized kernels.
- **[#17650 mlx: add Gemma4 image input support](https://github.com/ollama/ollama/pull/17650)** — adds Gemma4 image preprocessing/vision embeddings via the generic `base.MediaModel` interface, supporting both unified and transformer-based vision checkpoints.
- **[#17555 parser/renderer: add Apertus 1.5 support](https://github.com/ollama/ollama/pull/17555)** — native chat handling for Apertus v1.5 8B/70B (Swiss AI Initiative).
- **[#17654 Windows-on-Arm: set GGML_CPU_ARM_ARCH](https://github.com/ollama/ollama/pull/17654)** — fixes the Windows-on-Arm CPU build shipping with baseline `armv8-a` (no dot-product/matrix instructions); one-line preset fix.

## Performance & Optimization

- Nemotron 3 MLX work ([#17060](https://github.com/ollama/ollama/pull/17060)) introduces a shared mapped MoE GatherQMM fast path with Metal-optimized NVFP4/MXFP8 block-mapped kernels — relevant for anyone running MoE models on Apple Silicon.
- **[#17557 MoE experts in host RAM with on-demand GPU compute](https://github.com/ollama/ollama/issues/17557)** — feature request highlighting that Ollama currently loads all MoE expert weights into VRAM (inherited from llama.cpp defaults), forcing a 6GB MoE model file to need 23GB VRAM; proposes on-demand expert loading to fit 16B/35B MoE models on 8GB/12GB GPUs.
- **[#17480 bench: use HumanEval patch prompts](https://github.com/ollama/ollama/pull/17480)** — replaces the benchmark's word-salad prompt generator with code-continuation tasks from HumanEval, improving benchmark realism.

## Stability & Regressions

- **[#17656 muse-glimmer:30b-mlx manifest built from nvfp4-dflash layers, not real MLX weights](https://github.com/ollama/ollama/issues/17656)** (High) — the MLX-tagged build actually ships the NVIDIA-only NVFP4 variant, contradicting its advertised purpose.
- **[#17645 0.32.7 adds Muse Glimmer support but the manifest does not allow download](https://github.com/ollama/ollama/issues/17645)** (High) — `ollama pull muse-glimmer:30b-q8_0` fails with a 412 requiring a newer/pre-release Ollama version.
- **[#17599 mlx engine: long-lived runner returns a different prompt's answer on repeat calls](https://github.com/ollama/ollama/issues/17599)** (High — correctness/data integrity) — under `OLLAMA_KEEP_ALIVE=-1`, the MLX engine intermittently returns a verbatim answer to an earlier, unrelated request.
- **[#17614 Lower quantization formats cause garbage responses](https://github.com/ollama/ollama/issues/17614)** (High) — switching KV quantization from q8_0 to q4_0 produces unintelligible repeated-token output.
- **[#17661 Models deleted after updating to 0.32.7](https://github.com/ollama/ollama/issues/17661)** (High) — on Jetson AGX Orin, multiple pulled models disappeared post-upgrade; only one of five survived.
- **[#17596 CUDA illegal memory access in flash-attn kernel on DGX Spark (GB10)](https://github.com/ollama/ollama/issues/17596)** (Medium — deterministic crash, narrow hardware) — large prefill against a head-size-256 model deterministically crashes the runner.
- **[#17632 Laguna-S 2.1 MLX BF16 intermittently fails to terminate](https://github.com/ollama/ollama/issues/17632)** (Medium) — degenerates into stream-of-consciousness output on Apple Silicon.
- **[#17444 0.32.4/0.32.5 break tool calling in VS Code GitHub Copilot harness](https://github.com/ollama/ollama/issues/17444)** (Medium) — confirmed regression, workaround is reverting to 0.32.1.
- **[#16563 Structured outputs ignored for MLX models](https://github.com/ollama/ollama/issues/16563)** (Medium, open since June).
- Fix in flight: **[#17651 wrap tool-call parse errors with client-facing context](https://github.com/ollama/ollama/pull/17651)** addresses **[#17647](https://github.com/ollama/ollama/issues/17647)**, where malformed Qwen3-VL tool-call JSON surfaces as a bare parser error with no diagnostic context (same gap exists in four other parsers).

## What This Means for Application Developers

- **Hold off on Muse Glimmer in production** until [#17656](https://github.com/ollama/ollama/issues/17656) and [#17645](https://github.com/ollama/ollama/issues/17645) are resolved — the MLX tag may silently serve the wrong weight variant, and pulls can fail outright depending on version.
- **Avoid `OLLAMA_KEEP_ALIVE=-1` with the MLX engine** for multi-tenant or multi-request services until [#17599](https://github.com/ollama/ollama/issues/17599) is fixed — cross-request response contamination is a correctness/security-relevant bug, not just a quality issue.
- **Pin away from q4_0 KV quantization** if you've seen garbage output ([#17614](https://github.com/ollama/ollama/issues/17614)); stick with q8_0 until root-caused.
- Tool-calling apps built on VS Code Copilot + Ollama should stay on **0.32.1** or verify their version isn't 0.32.4/0.32.5 ([#17444](https://github.com/ollama/ollama/issues/17444)).
- **[#17658 opt-in progressive Qwen tool-call argument streaming](https://github.com/ollama/ollama/pull/17658)** — adds `stream_tool_calls` to `/api/chat` for progressive tool-argument streaming on Qwen3/Qwen3.5 parsers; useful for agent UIs wanting incremental tool-call rendering.
- Users building on the new **agent skills** feature (`~/.ollama/skills/`) should watch **[#17652](https://github.com/ollama/ollama/issues/17652)** / **[#17657](https://github.com/ollama/ollama/pull/17657)** — valid skills can be silently rejected with no diagnostic, a fix improving error visibility is already up for review.
- If running MoE models on constrained VRAM, track **[#17557](https://github.com/ollama/ollama/issues/17557)** — until on-demand expert loading lands, expect full-VRAM expert residency to be the limiting factor for GPU sizing.

</details>

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Daily Digest — 2026-08-11

## Today's Highlights

vLLM shipped **v0.27.0** with 561 commits from 242 contributors, headlined by full-stack **Kimi K3** support (core kernels, Python/Rust frontends, AttnRes kernels). The DeepSeek-V4-Flash family continues to dominate the issue tracker — SM8x/Ampere compatibility ([#50576](https://github.com/vllm-project/vllm/issues/50576), [#40851](https://github.com/vllm-project/vllm/issues/40851)) and a sharp KV-cache memory regression in the `-0731` checkpoint ([#51041](https://github.com/vllm-project/vllm/issues/51041)) remain unresolved, and at least one user reports the 0.26.0→0.27.0 upgrade breaking DeepSeek V4 Flash entirely ([#51758](https://github.com/vllm-project/vllm/issues/51758)).

## Releases & Breaking Changes

- **[v0.27.0](https://github.com/vllm-project/vllm/releases)** — 561 commits, 242 contributors (64 new). Headline feature: Kimi K3 support landing in one release across model files/kernels ([#50089](https://github.com/vllm-project/vllm/pull/50089), [#50000](https://github.com/vllm-project/vllm/pull/50000)), Python ([#50093](https://github.com/vllm-project/vllm/pull/50093)) and Rust ([#50104](https://github.com/vllm-project/vllm/pull/50104)) frontends, and AttnRes kernels ([#50090](https://github.com/vllm-project/vllm/pull/50090)).
- Users report the upgrade path to v0.27.0 breaking DeepSeek V4 Flash inference — see [#51758](https://github.com/vllm-project/vllm/issues/51758) (opened and already at 5 comments today).

## New Model & Hardware Support

- **Kimi K3**: full-stack landing (model, kernels, Python/Rust frontends) in v0.27.0; ROCm/AMD support is tracked separately as still in-progress via a dedicated gap/roadmap issue — [#50682](https://github.com/vllm-project/vllm/issues/50682).
- **Muse Glimmer** — new dense 29.6B vision-language model (ViT-G/14 encoder, 128K context) with tool-call parsers and DFlash speculative decoding for its draft head: [PR #51655](https://github.com/vllm-project/vllm/pull/51655).
- **Keye multimodal LoRA** — enables tower/connector LoRA for the Keye model family: [PR #51780](https://github.com/vllm-project/vllm/pull/51780).
- **HF Transformers backend (1/N)** — proposal for hardware-agnostic model definitions executed through the `transformers` backend instead of native vLLM model code: [PR #49458](https://github.com/vllm-project/vllm/pull/49458).
- **Intel XPU** — dual Arc B50 (Battlemage) TP=2 fails with `zeMemOpenIpcHandle INVALID_ARGUMENT`, same root cause as an existing dual-Arc issue: [#48953](https://github.com/vllm-project/vllm/issues/48953).
- **GGUF/bitsandbytes** — RFC proposes migrating both quantization backends out to an OOT plugin due to low usage relative to maintenance cost: [#39583](https://github.com/vllm-project/vllm/issues/39583).

## Performance & Optimization

- **PTX 9.4 `ldmatrix.s8.s4`** — proposal to adopt hardware INT4→INT8 expanding loads for W4A8-INT8 kernel paths (good-first-issue): [#49529](https://github.com/vllm-project/vllm/issues/49529).
- **SM90 FA4 Dense + MLA** — integrates upstream flash-attention FA4 kernels with added benchmarks: [PR #51416](https://github.com/vllm-project/vllm/pull/51416).
- **Rust frontend SSE streaming** — avoids re-serializing the unchanged `id`/`object`/`created`/`model` envelope and an intermediate JSON `String` allocation on every streamed chunk: [PR #51321](https://github.com/vllm-project/vllm/pull/51321).
- **JIT warmup infrastructure (2/N)** — adds predicate filtering for JIT warmup and migrates Inkling FA4 attention warmup onto the shared contract: [PR #49315](https://github.com/vllm-project/vllm/pull/49315).
- **Fused shared-expert (FSE) standardization** — unifies MoE shared-expert-fusion detection across model construction and checkpoint loading: [PR #51695](https://github.com/vllm-project/vllm/pull/51695).
- Ongoing tracking issue for general custom fused-kernel work (torch.compile fusion pass expansion): [#25179](https://github.com/vllm-project/vllm/issues/25179).

## Stability & Regressions

Ranked by apparent severity/impact:

1. **DeepSeek-V4-Flash-0731 KV cache regression** — ~8× more KV cache per token vs. the preview checkpoint (56 bytes/token, 150K tokens in 7.7 GiB), capping `max_model_len` to ~121K on H20 TP=2 despite identical architecture: [#51041](https://github.com/vllm-project/vllm/issues/51041).
2. **v0.27.0 upgrade breaks DeepSeek V4 Flash** — reported today, 5 comments already: [#51758](https://github.com/vllm-project/vllm/issues/51758).
3. **SM8x (Ampere A100/A800) unsupported for DeepSeek-V4-Flash** — high-traffic thread (97 comments, 12 👍), tied to older unresolved [#40851](https://github.com/vllm-project/vllm/issues/40851): [#50576](https://github.com/vllm-project/vllm/issues/50576).
4. **NVFP4 FlashInfer CuteDSL MoE + DeepEP numerical accuracy issue on B200** under specific chunk-size/cudagraph config (closed): [#31840](https://github.com/vllm-project/vllm/issues/31840).
5. **V1 engine + MTP + GLM-5.1 hang** — workers hang under sustained traffic, `sample_tokens` RPC times out, engine enters `EngineDeadError`: [#40926](https://github.com/vllm-project/vllm/issues/40926).
6. **Silent correctness bug in composite VLM wrapper** — `Mistral3ForConditionalGeneration` resolves `tie_word_embeddings` from the wrong top-level config, silently discarding a real `lm_head.weight` and producing coherent-vocabulary-but-wrong output (no crash, hard to detect): [#51063](https://github.com/vllm-project/vllm/issues/51063).
7. **Block-scaled FP8 (compressed-tensors W8A8) crashes on load** on SM120 Blackwell with a DeepGEMM "Unknown SF transformation" assertion: [#47436](https://github.com/vllm-project/vllm/issues/47436).
8. **ROCm gfx942 GPU memory-access fault** when sequences cross 2048 tokens with DeepSeek V4 flash sparse-attn-indexer + fp8 KV cache on MI325X TP=4: [#48266](https://github.com/vllm-project/vllm/issues/48266).
9. **Hybrid multi-group KV crash** — `_update_requests_with_invalid_blocks` throws `ValueError: too many values to unpack` on connector load-error blocks: [#50687](https://github.com/vllm-project/vllm/issues/50687).

**Fix PRs landed/in-flight today:**
- [#51450](https://github.com/vllm-project/vllm/pull/51450) — prevents invalid structured-output requests from taking down the whole EngineCore loop.
- [#51766](https://github.com/vllm-project/vllm/pull/51766) — preserves Mamba running copy-on-write semantics after external KV hits.
- [#51770](https://github.com/vllm-project/vllm/pull/51770) — fixes XPU UVA weight-offloading startup crashes (pinned-tensor assertion, static Triton launcher).
- [#51622](https://github.com/vllm-project/vllm/pull/51622) — centralizes shared mmap cleanup/ownership in the CPU KV-offloading worker to fix shutdown ordering bugs.
- [#50502](https://github.com/vllm-project/vllm/pull/50502) — enforces `parallel_tool_calls=false` in the required-tool grammar (previously ignored).

## What This Means for Application Developers

- **Hold off upgrading to v0.27.0 if you serve DeepSeek-V4-Flash** — both a fresh upgrade-breakage report ([#51758](https://github.com/vllm-project/vllm/issues/51758)) and a known 8× KV-cache memory blowup on the `-0731` checkpoint ([#51041](https://github.com/vllm-project/vllm/issues/51041)) are unresolved; re-check your `max_model_len`/GPU memory budget before rolling this checkpoint out.
- **Ampere (A100/A800) users running DeepSeek-V4-Flash are still blocked** — no SM8x support yet ([#50576](https://github.com/vllm-project/vllm/issues/50576), [#40851](https://github.com/vllm-project/vllm/issues/40851)); plan around Hopper/Blackwell or wait for the fix.
- **Kimi K3 is production-ready on CUDA as of v0.27.0**, but ROCm/AMD support is still being filled in — check [#50682](https://github.com/vllm-project/vllm/issues/50682) before deploying on AMD hardware.
- **If you use composite VLM wrappers (e.g., Mistral3-family models), audit output quality**, not just crash logs — [#51063](https://github.com/vllm-project/vllm/issues/51063) describes a silent `lm_head` misconfiguration that produces plausible-looking but wrong output.
- **Tool-calling reliability is improving**: `parallel_tool_calls=false` is now actually enforced in required-tool mode ([#50502](https://github.com/vllm-project/vllm/pull/50502)), and malformed structured-output requests no longer risk taking down the whole engine for other users ([#51450](https://github.com/vllm-project/vllm/pull/51450)) — relevant if you're running multi-tenant agent workloads.
- **Blackwell (SM120) users on block-scaled FP8** should hold at pre-v0.24.0 or watch [#47436](https://github.com/vllm-project/vllm/issues/47436) before adopting compressed-tensors W8A8 quantization.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
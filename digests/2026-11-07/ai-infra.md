# AI Infrastructure Digest 2026-11-07

> Generated: 2026-11-07 13:43 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-07

**Scope note:** Only two digests were supplied, Dify (application platform) and LiteLLM (LLM gateway). There was no data for inference engines (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning frameworks (Unsloth). Sections 3–5 are therefore limited to what these two projects show. Issue and PR counts are items referenced in each digest, not repository totals.

## 1. Ecosystem Overview
Both projects are in a correctness and hardening phase, not a feature-launch phase. Dify shipped no release. LiteLLM shipped a dev pre-release (`v1.110.0-dev.1`) and an LTS patch (`v1.108.2`), and is backporting fixes onto `lts/1.108.x`. The recurring problems are accounting integrity (budgets and spend), guardrail coverage, and protocol translation between providers. Quantization and kernel work, which usually dominates this landscape, is absent from these two layers. The stack is maturing at the control-plane level: cost, safety, and data fidelity now matter more than raw model access.

## 2. Activity Comparison

| Project | Issues referenced | PRs referenced | Release status |
|---|---|---|---|
| Dify | ~23 (about 11 closed) | ~16 (mostly small fixes, strict-typing rollout, test migration) | None in the last 24h. A 1.19.0 regression (#45753) is open with no fix PR. |
| LiteLLM | ~23 (about 8 closed) | ~17 (LTS backports, providers, guardrails, and a few open breaking changes) | `v1.110.0-dev.1` (dev) and `v1.108.2` (LTS). Release notes are truncated. |

Dify's activity is mostly small bugs matched by same-day fix PRs. LiteLLM's is mostly structural issues in budgets, MCP, and translation, with several fixes still pending.

## 3. Model Support Race
Neither project reports shipping support for a new model architecture today.
- **LiteLLM** leads in model plumbing:
  - New providers: Teapot Router (#50531) and Ace Data Cloud (#44817, with MCP media discovery in #47149).
  - Cost-map fixes: fine-tune shutdown dates and Codestral 2405 (#50529), and TEI rerank pricing (#45990).
  - Open gaps: Bedrock Converse sends `temperature` to Grok 4.6/4.7 and Kimi K3 even with `drop_params=True` (#49366). Native Kimi K3, Inkling, and Tinker support was closed as stale (#33921).
- **Dify** has no model changes today. Its model-related items are feature requests and a closed URL-encoding fix for parameter rules (#43302).

Newer frontier models are reaching gateways before their metadata is correct, so the cost map is the lagging layer. There is no hardware or quantization signal from either project.

## 4. Performance Frontier
No benchmarks were published. Effort goes to latency and overhead in the control plane, not to kernels, KV cache, batching, or distributed serving.
- **LiteLLM:**
  - MCP `tools/list` blocks for 18–50 s (v1.108.0 regression, #50065).
  - SAP GenAI Hub adds about 870 ms per call from two blocking GETs (#47096).
  - Spend flush scans all retained `SpendLogDelivery` rows, so cost grows with history (#50475).
  - The Bedrock Invoke stream keeps generating after abort (#50514).
- **Dify:**
  - Stop holding a DB session across embedding calls (#45788).
  - Summary preview timeouts should return immediately (#45781).
  - Both are about connection and worker pressure under slow model backends.

## 5. Layer Positioning
- **Dify (application and workflow platform):** it sits above model access. Its risks are in RAG ingestion (DOCX/XLSX extraction gaps, #45776 and #45777, and the non-ASCII splitter bug, #45532), workflow state (Human Input 404, #45753), and data safety (orphan-file cleanup, #45746).
- **LiteLLM (gateway and proxy):** it sits between applications and providers. Its risks are in budgets, auth, guardrails, and request/response translation across Anthropic, Gemini, Bedrock, and the Responses API.
- **Not covered:** serving engines, local runtimes, and fine-tuning frameworks. No digests were provided.

The two are complementary. A Dify deployment can use LiteLLM as its model gateway, and each layer's failures can compound the other's.

## 6. Trend Signals
1. **Budgets are soft.** `max_budget` admitted 11 calls on a budget that fits 9, a 10.3% overshoot (#50125). Vertex passthrough can reject requests falsely (#50030), and tag spend can be lost on a crash (#50317).
2. **Guardrails have bypass paths.** `extra_body.input` overrides the Responses input that guardrails scan (#50167). Headroom skips tool-output-only requests (#44852). Meanwhile new guardrails are landing, including CollieAi, Obsidian MCP policy checks, key patterns, and image scanning.
3. **MCP is now a reliability surface.** There are latency regressions and dropped `is_error` flags in Anthropic `tool_result` (#49359), so agents may treat failed tools as successes.
4. **Token-limit defaults are changing.** Several open PRs (#41547, #49413, #46188) would change `max_tokens` defaults and tool-choice error handling. Agentic follow-ups currently use 1024 tokens, which truncates Claude Code search summaries on Bedrock.
5. **Silent data loss in RAG pipelines.** Content controls, formula-only rows, and separator handling can drop or corrupt content without an error.

**What to watch**
- Stay on LiteLLM's `lts` tag and watch for 1.108.3. Treat `v1.110.0-dev.1` as testing-only.
- Set `max_tokens` explicitly and add an upstream spend cap or alert.
- Strip or validate `extra_body.input` at the edge.
- Back up before running Dify's orphan-file cleanup, and verify your version includes the fix for #45746.
- Test Human Input forms before moving further on 1.19.0, and spot-check DOCX/XLSX ingestion output.
- Check whether the Dify regression (#45753) gets a fix PR.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-07

Repo: [langgenius/dify](https://github.com/langgenius/dify)

## 1. Today's Highlights
No release shipped in the last 24h. Activity is dominated by small correctness bugs found by contributors and matched by same-day fix PRs: UUIDv7 range checks, pagination, email validation and the Agent Monitoring date range. A 1.19.0 regression, where Human Input forms return 404, is open and has no fix PR yet.

## 2. Releases & Breaking Changes
No new releases.
- Regression reported against 1.19.0: see Stability below ([#45753](https://github.com/langgenius/dify/issues/45753)).
- Issue [#45079](https://github.com/langgenius/dify/issues/45079) (1.18.0, closed) concerns the dify-web container. The server listened with backlog 0 when the container ID looked numeric. If you run 1.18.x, check that you have the fix.

## 3. New Model & Hardware Support
No model, backend or quantization changes today.
- Feature request [#45744](https://github.com/langgenius/dify/issues/45744) proposes using `ExposeService` in the OpenShell sandbox provider.
- Feature request [#45671](https://github.com/langgenius/dify/issues/45671) proposes collapsible inline chat threads with opt-in context sharing for Chat/Agent webapps.

## 4. Performance & Optimization
No benchmark numbers were published. Related work in progress:
- [PR #45788](https://github.com/langgenius/dify/pull/45788): stop holding a DB session open across embedding model calls. This reduces connection-pool pressure under slow model backends.
- [PR #45781](https://github.com/langgenius/dify/pull/45781): the summary preview timeout returns immediately instead of waiting on running workers (`ThreadPoolExecutor` `shutdown(wait=True)`). Fixes [#45779](https://github.com/langgenius/dify/issues/45779).
- [PR #45778](https://github.com/langgenius/dify/pull/45778): persist Agent App thoughts through explicit sessions (refactor).
- [PR #44483](https://github.com/langgenius/dify/pull/44483): isolate knowledge retrieval application boundaries (XXL refactor).

## 5. Stability & Regressions
Ranked by severity.

**High**
1. **Human Input form returns 404 "Form not found" and the run stays paused**, a regression in 1.19.0 that stalls workflows. No fix PR was listed. [#45753](https://github.com/langgenius/dify/issues/45753)
2. **`clear-orphaned-file-records` deleted `upload_files` still referenced by `segment_attachment_bindings`.** This is a data-loss risk. The issue is closed. [#45746](https://github.com/langgenius/dify/issues/45746)
3. **Cached document embeddings shift to the wrong inputs after an invalid vector is skipped.** This is a RAG correctness bug. The issue is closed. [#41476](https://github.com/langgenius/dify/issues/41476)

**Medium**
4. **Plugin upgrade telemetry**: unguarded install-count telemetry turns valid cached plugin upgrades into HTTP 500. Open, no fix PR seen. [#45747](https://github.com/langgenius/dify/issues/45747)
5. **Summary preview timeout** still waits for workers and publishes late results. Fix: [#45781](https://github.com/langgenius/dify/pull/45781). Issue: [#45779](https://github.com/langgenius/dify/issues/45779).
6. **Document extraction gaps**. Open, no fix PRs seen:
   - Word content-control display values are missing from DOCX text. [#45776](https://github.com/langgenius/dify/issues/45776)
   - XLSX rows containing only uncached formulas disappear. [#45777](https://github.com/langgenius/dify/issues/45777)
7. **Splitter bug**: `FixedRecursiveCharacterTextSplitter` corrupts non-ASCII separators via `unicode_escape` decoding. The issue is closed. [#45532](https://github.com/langgenius/dify/issues/45532)
8. **Knowledge base hit test** is hard-limited to 200 characters, inconsistent with runtime retrieval. Open. [#45754](https://github.com/langgenius/dify/issues/45754)
9. **dify-agent (1.18.0)**: plugin tool file parameters resolve to the external files URL instead of the internal one. The issue is closed. [#45277](https://github.com/langgenius/dify/issues/45277)
10. **Mutable default argument** shared across requests in the password-reset token generators. The issue is closed. [#39851](https://github.com/langgenius/dify/issues/39851)

**Low, with fix PRs**
- UUIDv7 helpers silently wrap timestamps above 48 bits. This could misplace partition boundaries. Fix PRs: [#45791](https://github.com/langgenius/dify/pull/45791) and [#45790](https://github.com/langgenius/dify/pull/45790). Issue: [#45789](https://github.com/langgenius/dify/issues/45789). The two PRs duplicate each other, so expect one to be closed.
- `PaginatedResult.pages` uses float division, which gives wrong counts above 2^53. Fix: [#45785](https://github.com/langgenius/dify/pull/45785). Issue: [#45783](https://github.com/langgenius/dify/issues/45783).
- `email()` accepts leading, trailing or consecutive dots in the local part. Fix: [#45786](https://github.com/langgenius/dify/pull/45786). Issue: [#45784](https://github.com/langgenius/dify/issues/45784).
- Agent Monitoring excludes the selected end date. Fix: [#45793](https://github.com/langgenius/dify/pull/45793). Issue: [#45792](https://github.com/langgenius/dify/issues/45792).
- The code node variable picker hides Integer variables, for example MCP `outputSchema` integer fields. The issue is closed. [#44437](https://github.com/langgenius/dify/issues/44437)
- Parameter-rule requests don't URL-encode the model query value. The issue is closed. [#43302](https://github.com/langgenius/dify/issues/43302)
- The agent configure page returns 500 for a custom API tool provider (1.16.0). The issue is closed. [#39169](https://github.com/langgenius/dify/issues/39169)
- Housekeeping: the ko-KR billing strings were wrong ([#43459](https://github.com/langgenius/dify/issues/43459)), and the E2E helpers pointed at a renamed plugin endpoint ([#39892](https://github.com/langgenius/dify/issues/39892)). Both issues are closed.

## 6. What This Means for Application Developers
- **If you are on 1.19.0 and use Human Input nodes**, test form submission through the Web App before upgrading further. Runs may stay paused ([#45753](https://github.com/langgenius/dify/issues/45753)).
- **Back up before running the orphan-file cleanup command** on self-hosted deployments. Verify that your version includes the fix for [#45746](https://github.com/langgenius/dify/issues/45746).
- **Check RAG ingestion output when using DOCX/XLSX files.** Content controls and formula-only rows may be silently dropped ([#45776](https://github.com/langgenius/dify/issues/45776), [#45777](https://github.com/langgenius/dify/issues/45777)). Chunking on non-ASCII separators was also affected ([#45532](https://github.com/langgenius/dify/issues/45532)).
- **Plugin users**: a cached plugin upgrade can fail with HTTP 500 on telemetry errors ([#45747](https://github.com/langgenius/dify/issues/45747)). Retrying or reinstalling is the likely workaround.
- **Hit-testing a long query** in the UI is capped at 200 characters but runtime retrieval is not. Don't treat the cap as a runtime limit ([#45754](https://github.com/langgenius/dify/issues/45754)).
- **Monitoring dashboards**: end-date totals are currently understated until [#45793](https://github.com/langgenius/dify/pull/45793) lands.
- **Maintenance signal**: the project is in a heavy strict-typing phase (pyrefly rollout PRs [#45770](https://github.com/langgenius/dify/pull/45770)–[#45773](https://github.com/langgenius/dify/pull/45773) and [#45757](https://github.com/langgenius/dify/pull/45757)). It is also moving web tests to Browser Mode ([#45758](https://github.com/langgenius/dify/pull/45758), [#45787](https://github.com/langgenius/dify/pull/45787)). Expect no behavior change from these.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-07

## 1. Today's Highlights
LiteLLM shipped `v1.110.0-dev.1` (dev channel) and `v1.108.2` (LTS). The maintainers are also actively backporting Gemini, Anthropic and Responses fixes onto `lts/1.108.x`. The issue queue is dominated by proxy correctness: budget enforcement and spend accounting, MCP error handling, and Claude/Gemini translation bugs.

## 2. Releases & Breaking Changes
- **[v1.110.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-dev.1)**: dev pre-release, signed with cosign. The release notes in the data are truncated, so no change list is available.
- **[v1.108.2 (LTS)](https://github.com/BerriAI/litellm/releases/tag/v1.108.2)**: the `ghcr.io/berriai/litellm:lts` tag follows this patch. Notes are truncated here too. The LTS backports below suggest more 1.108.x patches are coming:
  - [#50450](https://github.com/BerriAI/litellm/pull/50450): Gemini-format `generateContent` logging fix for non-Gemini models such as Claude on Vertex. Today these requests print "httpx_response is None", write no spend row, and skip team callbacks.
  - [#50456](https://github.com/BerriAI/litellm/pull/50456): encrypted reasoning round-trip for `chatgpt/` models behind `/v1/messages` (backport of #49076).
  - [#50472](https://github.com/BerriAI/litellm/pull/50472): Claude tool-search replay on `/v1/responses`.
- **Breaking changes in open PRs (not yet merged):**
  - [#41547](https://github.com/BerriAI/litellm/pull/41547): Bedrock Converse Claude without `max_tokens` would send the model's own default output limit.
  - [#49413](https://github.com/BerriAI/litellm/pull/49413): agentic follow-up calls on `/v1/messages` would keep the client's `max_tokens`. They currently use 1024, which truncates Claude Code search summaries on Bedrock.
  - [#46188](https://github.com/BerriAI/litellm/pull/46188): malformed Anthropic tool choices would return 400 instead of a 500 or silently becoming `auto`.

## 3. New Model & Hardware Support
- [#50531](https://github.com/BerriAI/litellm/pull/50531): adds Teapot Router as an OpenAI-compatible provider through `providers.json`.
- [#44817](https://github.com/BerriAI/litellm/pull/44817): adds a native Ace Data Cloud chat and responses provider with pricing. [#47149](https://github.com/BerriAI/litellm/pull/47149) adds MCP discovery for its media services.
- [#50529](https://github.com/BerriAI/litellm/pull/50529): cost-map fix. It syncs shutdown dates for OpenAI fine-tune models and adds them for Codestral 2405.
- Open issues on model metadata:
  - [#49366](https://github.com/BerriAI/litellm/issues/49366): Bedrock Converse sends `temperature` to Grok 4.6/4.7 and Kimi K3, which reject it. This happens even with `drop_params=True`, because the cost-map entries still list the parameter.
  - [#46905](https://github.com/BerriAI/litellm/issues/46905) (closed): Bedrock Mantle GPT-5.6 entries still used `mode: responses`.
  - [#33921](https://github.com/BerriAI/litellm/issues/33921) (closed as stale): request for native Kimi K3, Inkling and Tinker support.
- Guardrails added or extended in open PRs:
  - [#49224](https://github.com/BerriAI/litellm/pull/49224): CollieAi.
  - [#50526](https://github.com/BerriAI/litellm/pull/50526): Obsidian policy checks on MCP tool calls and results.
  - [#50268](https://github.com/BerriAI/litellm/pull/50268): prebuilt OpenAI, Anthropic and Gemini key patterns.
  - [#50440](https://github.com/BerriAI/litellm/pull/50440): image scanning on `/apply_guardrail`.
- Nothing today on CUDA, ROCm, Metal or quantization. LiteLLM is a gateway, so this is expected.

## 4. Performance & Optimization
No measured benchmarks were reported today. Open items on latency and overhead:
- [#50065](https://github.com/BerriAI/litellm/issues/50065): MCP `tools/list` blocks for 18–50 s on a legacy subscription listener after `notifications/initialized`. This is a v1.108.0 regression for clients such as Open WebUI.
- [#47096](https://github.com/BerriAI/litellm/issues/47096): SAP GenAI Hub makes two blocking GETs per call to re-fetch `deployment_url`, adding about 870 ms.
- [#50475](https://github.com/BerriAI/litellm/issues/50475): accounting metrics scan all retained `SpendLogDelivery` rows on every spend flush. Cost grows with history.
- [#45990](https://github.com/BerriAI/litellm/pull/45990) is a pricing fix, not a speed fix. It makes TEI rerank honor registered `model_cost` instead of billing $0.

## 5. Stability & Regressions
Ranked by severity.

1. **Budget and spend integrity**
   - [#50125](https://github.com/BerriAI/litellm/issues/50125): `max_budget` admitted 11 calls on a budget that fits 9, a 10.3% overshoot.
   - [#50030](https://github.com/BerriAI/litellm/issues/50030): a false `BudgetExceededError` on `/vertex_ai` passthrough, caused by a duplicate auth call that leaks budget reservations.
   - [#50317](https://github.com/BerriAI/litellm/issues/50317): daily tag spend is lost if the writer dies after the Redis dequeue but before the DB commit.
   - [#45907](https://github.com/BerriAI/litellm/pull/45907) (open fix): reconciles reservations when no database logger is configured. Without it, a reservation sticks until its TTL.
   - [#35570](https://github.com/BerriAI/litellm/issues/35570) (closed): reservation reseed marked cost applied without incrementing it.
   - [#46999](https://github.com/BerriAI/litellm/issues/46999) (closed): `/tag/update` returned 500 on tags that have a budget.
2. **Security and guardrail bypass**
   - [#50167](https://github.com/BerriAI/litellm/issues/50167): `extra_body.input` overrides the Responses input that guardrails scan.
   - [#44852](https://github.com/BerriAI/litellm/issues/44852): the Headroom guardrail skips tool-output-only Responses requests.
   - [#36280](https://github.com/BerriAI/litellm/issues/36280): `include_subpath` pass-through routes return 401 for virtual keys.
3. **Streaming and resource leaks**
   - [#50514](https://github.com/BerriAI/litellm/issues/50514): the Bedrock Invoke `/v1/messages` stream keeps generating after the detached-drain abort, because the httpx response is never closed.
   - [#49931](https://github.com/BerriAI/litellm/issues/49931) (closed): an empty Gemini reply was cached and replayed.
   - [#25869](https://github.com/BerriAI/litellm/issues/25869) (closed, stale): `stream_chunk_builder` corrupted Gemini tool-call context.
4. **Translation correctness**
   - [#49359](https://github.com/BerriAI/litellm/issues/49359): MCP tool failures drop `is_error` in the Anthropic `tool_result`.
   - [#47924](https://github.com/BerriAI/litellm/issues/47924): `reasoning_effort="none"` omits thinking, so default-on Claude models keep thinking.
   - [#50173](https://github.com/BerriAI/litellm/issues/50173): `/v1/images/edits` on Vertex Gemini with no image returns 500 instead of 400.
   - [#50248](https://github.com/BerriAI/litellm/issues/50248): `COHERE_API_BASE` is ignored for embeddings, though rerank honors it.
   - [#50434](https://github.com/BerriAI/litellm/issues/50434): intermittent Gemini 503 and `APIConnectionError`.
   - [#50444](https://github.com/BerriAI/litellm/issues/50444): Complexity Router background requests overwrite subagent tier pins.
   - [#45478](https://github.com/BerriAI/litellm/pull/45478) (fix PR): preserves assistant text order around `tool_use` in the Responses adapter.

## 6. What This Means for Application Developers
- **Budgets:** do not treat `max_budget` as a hard cap. Expect overshoot under concurrency, and add an upstream spend limit or alert. Check Vertex passthrough users for false budget rejections.
- **Guardrails:** `extra_body.input` can bypass Responses guardrails, so strip or validate it at the edge. Headroom does not cover tool-output-only requests.
- **MCP:** if you run Open WebUI or the Python MCP SDK against v1.108.0, expect slow `tools/list`. Failed MCP tools also won't mark `is_error` on Anthropic `tool_result`, so agents may treat failures as successes.
- **Claude through Bedrock or non-Anthropic backends:**
  - Set `max_tokens` explicitly, because defaults are about to change and current agentic follow-ups use 1024.
  - Set `reasoning_effort` carefully, since `"none"` does not disable thinking.
  - Grok and Kimi on Bedrock Converse may need `temperature` removed manually.
- **Upgrades:** production users should stay on the `lts` tag. The 1.108.x backports are pending, so watch for 1.108.3. Treat `v1.110.0-dev.1` as testing-only.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
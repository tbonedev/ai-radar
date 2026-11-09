# AI Infrastructure Digest 2026-11-10

> Generated: 2026-11-09 17:05 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-11-10

**Coverage caveat:** Only two digests were supplied: Dify (LLM app platform) and LiteLLM (LLM gateway). There was no data for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning (Unsloth). Sections 3–5 therefore cover only what the data supports, and I haven't filled the gaps with outside knowledge.

## 1. Ecosystem Overview
Neither project shipped a release in the last 24h, so today's signal comes from issue and PR flow, not launches. Both are in a stabilization phase, with bug fixes outnumbering features. The dominant failure class is **translation and parameter handling at API boundaries**: Agent-node params in Dify, and streaming tool calls, PII unmasking and Bedrock params in LiteLLM. Agentic workloads (MCP, tool calls, multi-step loops) now expose correctness bugs that single-shot chat did not. A large share of LiteLLM's items are stale June–August PRs touched in a bulk sweep, so the activity volume overstates new development.

## 2. Activity Comparison
Counts are the distinct issues and PRs cited in each digest, not repo-wide totals. They are approximate.

| Project | Layer | Issues cited | PRs cited | Release (24h) |
|---|---|---|---|---|
| Dify | App/workflow platform | ~27 | ~15 | None |
| LiteLLM | LLM gateway/proxy | ~24 | ~18 | None |

- **Dify:** Mostly closed bug reports. The in-flight architectural work is the webhook refactor ([#45912](https://github.com/langgenius/dify/pull/45912), XXL, open) and Builder native execution ([#44451](https://github.com/langgenius/dify/pull/44451)).
- **LiteLLM:** Many items are stale. GHCR images v1.94.1 and v1.95.0 had no matching tag or Release (#35683, #35684, both closed today). Rust-wheel packaging (#31261) and Python 3.14 support (PR #31612) are still pending.

## 3. Model Support Race
Only LiteLLM reported model and provider work, and no engine-level architecture support appeared in the data.

| Area | Item |
|---|---|
| New provider | AbliteratedLLM, 17 priced models ([#50697](https://github.com/BerriAI/litellm/pull/50697)) |
| Embeddings | Voyage multimodal 3.5 ([#31514](https://github.com/BerriAI/litellm/pull/31514)) |
| Audio | ElevenLabs diarized transcription ([#31324](https://github.com/BerriAI/litellm/pull/31324)) |
| Metadata | DeepSeek V4 max output corrected from 8192 to 384K ([#31018](https://github.com/BerriAI/litellm/pull/31018)) |
| Bedrock | Claude Opus 4.8 prompt-cache TTL preservation ([#31360](https://github.com/BerriAI/litellm/pull/31360)) |
| Auth | Azure Workload Identity ([#31434](https://github.com/BerriAI/litellm/pull/31434)), Databricks per-deployment OAuth M2M ([#50675](https://github.com/BerriAI/litellm/pull/50675)) |

**Gaps:** Z.AI `glm-5.2[1m]` returns Unknown Model ([#32218](https://github.com/BerriAI/litellm/issues/32218)). Bedrock Grok 4.6/4.7 and Kimi K3 reject `temperature`, and `drop_params=True` doesn't cover them ([#49366](https://github.com/BerriAI/litellm/issues/49366)).

**Dify:** It reported no model support. Its nearest item is OpenAPI 3.1 nullable union types in custom tool schemas ([#45895](https://github.com/langgenius/dify/pull/45895)). The PR is closed, but the digest doesn't confirm it was merged.

**Who's ahead:** Among the data provided, LiteLLM is the only project tracking new-model parity. Model-support lag shows up there as metadata and param-compatibility gaps, not missing integrations.

## 4. Performance Frontier
There were no benchmarks, and no KV-cache, batching, quantization, or kernel work appeared in either digest. The optimization effort that did appear is at the gateway and platform layer:

- **Cache and auth overhead:** LiteLLM's Databricks path calls the uncached `get_oauth_m2m_token` on every request ([#50680](https://github.com/BerriAI/litellm/issues/50680)).
- **Redis write amplification:** LiteLLM should skip post-call writes for keys with no limits ([#31880](https://github.com/BerriAI/litellm/issues/31880), open and stale).
- **Payload hygiene:** Omitting the empty `tools` array avoids upstream rejections ([#30540](https://github.com/BerriAI/litellm/pull/30540), [#31522](https://github.com/BerriAI/litellm/pull/31522)).
- **Timeouts as latency control:** Dify's MCP `send_request` can hang indefinitely on a silent receiver. [#45927](https://github.com/langgenius/dify/pull/45927) enforces the configured deadlines.

## 5. Layer Positioning
- **Dify (application and orchestration):** It owns the agent node, RAG, workflows, triggers and webhooks. Its failures are workflow-semantic: unset params, JSON escaping, retrieval correctness ([#40680](https://github.com/langgenius/dify/issues/40680)) and schedule idempotency ([#45929](https://github.com/langgenius/dify/issues/45929)).
- **LiteLLM (gateway):** It owns provider translation, routing and retries, cost and budget enforcement, guardrails (Presidio) and pass-through. Its failures are about fidelity across providers and accounting accuracy.
- **Overlap:** Both handle MCP and tools. Dify enforces MCP timeouts client-side, while LiteLLM's router can re-execute auto-approved MCP tools on retry ([#43153](https://github.com/BerriAI/litellm/issues/43153)). Combining them means two retry and timeout layers that can interact.
- **Not covered:** Serving engines, local runtimes and fine-tuning had no data today.

## 6. Trend Signals
1. **Agent correctness is the new bottleneck.** Both projects lead with tool-call and parameter bugs:
   - Dify's Agent node `NoneType` failure ([#45900](https://github.com/langgenius/dify/issues/45900)).
   - LiteLLM's parallel tool-call arguments dropped when streaming ([#45348](https://github.com/BerriAI/litellm/issues/45348)).
   - LiteLLM's `tool_reference` blocks dropped in Responses translation ([#46681](https://github.com/BerriAI/litellm/issues/46681)).
2. **Accounting is fragile.** LiteLLM has several open issues here:
   - Streaming usage is undercounted in chained proxies ([#36114](https://github.com/BerriAI/litellm/issues/36114)).
   - Anthropic cache-read tokens are double-billed ([#40006](https://github.com/BerriAI/litellm/issues/40006)).
   - Concurrent requests can bypass `max_budget_per_session` ([#34732](https://github.com/BerriAI/litellm/issues/34732)).
3. **Provider param divergence is growing.** Newer models reject params that older ones accepted, and `drop_params` doesn't catch them all.
4. **Security and privacy controls leak at the edges.** Presidio unmasking misses tool-call arguments ([#31950](https://github.com/BerriAI/litellm/issues/31950)). Dify's SSRF protection misclassifies upstream 401s behind a proxy ([#41434](https://github.com/langgenius/dify/issues/41434)).

**Watch list for agent and application developers:**
- Make MCP tools idempotent, and don't rely on router retries ([#43153](https://github.com/BerriAI/litellm/issues/43153)).
- Reconcile billing against provider-side usage in multi-proxy chains.
- Avoid parent-child chunking with keyword search in Dify until [#40680](https://github.com/langgenius/dify/issues/40680) is fixed.
- Pin versions and test upgrades. Dify's webhook runtime refactor and backend modernization ([#30269](https://github.com/langgenius/dify/issues/30269)) signal continued internal churn.
- Track [#45348](https://github.com/BerriAI/litellm/issues/45348) (streaming parallel tool calls) and [#49479](https://github.com/BerriAI/litellm/issues/49479) (pass-through JSON-RPC `id` stripped) if you depend on those paths.

For an engine-level view of KV cache, batching, quantization and kernel work, the digests for vLLM, SGLang, llama.cpp, Ollama and Unsloth are needed.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-10

Note: Dify is an LLM app platform, not an inference engine. The "New Model & Hardware Support" and "Performance" sections are mostly empty for this period.

## 1. Today's Highlights
There was no release in the last 24h. Activity was bug-fix heavy. The main themes are Agent-node parameter handling (null or unset strategy params, JSON-special characters), SSRF and HTTP-request handling, and a run of small correctness fixes from outside contributors. A large refactor of native webhook execution ([#45912](https://github.com/langgenius/dify/pull/45912)) and the Builder native-execution integration ([#44451](https://github.com/langgenius/dify/pull/44451)) are the main in-flight architectural work.

## 2. Releases & Breaking Changes
No new release. Several open and closed issues are tagged 1.15.0 and 1.18.0, and these are the versions where the regressions below surfaced.

Configuration to watch:
- [#45920](https://github.com/langgenius/dify/issues/45920): `ALLOW_UNSAFE_DATA_SCHEME` does not render images (open).
- [#45844](https://github.com/langgenius/dify/issues/45844): the zh-CN README omits the `DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN` setup step (closed). Deployers of the local agent sandbox should check that variable.
- [#45909](https://github.com/langgenius/dify/pull/45909): SMTP STARTTLS currently ignores `SMTP_LOCAL_HOSTNAME` (fix open).

## 3. New Model & Hardware Support
None reported today. The nearest items:
- [#45895](https://github.com/langgenius/dify/pull/45895): OpenAPI 3.1 nullable union types (`["integer","null"]`) are now accepted in custom tool schemas. This was previously a `TypeError` on import. The PR is closed, which suggests it was merged, but the data doesn't say.
- [#45928](https://github.com/langgenius/dify/issues/45928) / [#45931](https://github.com/langgenius/dify/pull/45931): zh-Hant `contacts.json` is missing 136 of 284 keys. A fix PR is open.

## 4. Performance & Optimization
No benchmarks or numbers were reported. Related items:
- [#45927](https://github.com/langgenius/dify/pull/45927): enforces configured MCP request and session deadlines. `BaseSession.send_request` currently restarts `queue.get` after each `queue.Empty`, so a silent receiver can hang the call indefinitely. The PR is explicitly scoped to the timeout and doesn't claim to resolve [#38912](https://github.com/langgenius/dify/issues/38912).
- [#45912](https://github.com/langgenius/dify/pull/45912): refactor that isolates webhook admission, parsing and dispatch (XXL, open).
- [#45778](https://github.com/langgenius/dify/pull/45778): persists Agent App thoughts through explicit sessions (open).
- [#45584](https://github.com/langgenius/dify/issues/45584): "use sqlalchemy engine" chore, tracked as a good first issue.

## 5. Stability & Regressions
Ranked by severity.

**High**
- [#45900](https://github.com/langgenius/dify/issues/45900): the Agent node fails on every run with `NoneType has no len()`. The canvas stores unset strategy params as `{variable, null}`. Closed. Fix PR [#45904](https://github.com/langgenius/dify/pull/45904) is also closed. A related PR, [#44655](https://github.com/langgenius/dify/pull/44655), is still open.
- [#45403](https://github.com/langgenius/dify/issues/45403): the Agent node raises `'str' object has no attribute 'get'` when a non-string parameter references a variable containing JSON-special characters (1.18.0, closed).
- [#45086](https://github.com/langgenius/dify/issues/45086): a tool file with `mime_type=None` crashes agent file extraction with a `ValidationError` (1.18.0, open, no fix PR listed).
- [#45404](https://github.com/langgenius/dify/issues/45404): the workflow editor crashes when a Human Input paragraph omits `default`, even with HITL IM disabled (1.18.0, closed).
- [#45740](https://github.com/langgenius/dify/issues/45740): the ReAct action payload closes early on a brace inside a JSON string, so the tool call is silently skipped (closed).

**Medium**
- [#40680](https://github.com/langgenius/dify/issues/40680): keyword search silently returns no results for parent-child chunks (open, 13 comments, no fix PR listed). This is a retrieval correctness issue.
- [#45929](https://github.com/langgenius/dify/issues/45929): daily and weekly Schedule Triggers run twice when clocks fall back. Fix PR [#45930](https://github.com/langgenius/dify/pull/45930) is open.
- [#45916](https://github.com/langgenius/dify/issues/45916): the agent monitoring source filter returns 403 for members with monitoring-only permission (open).
- [#38443](https://github.com/langgenius/dify/issues/38443) and [#41434](https://github.com/langgenius/dify/issues/41434): the SSRF protection blocks HTTP requests, and an upstream 401 through Squid is misclassified as `ToolSSRFError` (both closed).
- [#45833](https://github.com/langgenius/dify/issues/45833): number-typed tool parameters can't be bound to integer variables. Fix PR [#45834](https://github.com/langgenius/dify/pull/45834) is open. [#43241](https://github.com/langgenius/dify/pull/43241) fixes the zero rejection in required number inputs.
- [#45914](https://github.com/langgenius/dify/issues/45914): empty attachment IDs can break knowledge retrieval history (closed).

**Low**
- [#45863](https://github.com/langgenius/dify/issues/45863): the auth and webapp sign-in pages crash on malformed percent-encoding in query parameters (open).
- [#45882](https://github.com/langgenius/dify/issues/45882) / [#45885](https://github.com/langgenius/dify/pull/45885): the Content-Disposition filename keeps a trailing quote (closed).
- [#45880](https://github.com/langgenius/dify/issues/45880) / [#45883](https://github.com/langgenius/dify/pull/45883): an empty `_position.yaml` raises `TypeError` (closed).
- [#45783](https://github.com/langgenius/dify/issues/45783): `PaginatedResult.pages` is wrong for large totals because of float division (closed).
- [#45789](https://github.com/langgenius/dify/issues/45789) / [#45881](https://github.com/langgenius/dify/issues/45881): UUIDv7 timestamps silently wrap above 48 bits and leak `struct.error` for negatives (closed).
- [#45816](https://github.com/langgenius/dify/pull/45816): the docx external image extension is lost when Content-Type has parameters (closed).
- UI items: [#45934](https://github.com/langgenius/dify/issues/45934) (sidebar collapse drops keyboard focus), [#45933](https://github.com/langgenius/dify/issues/45933) (hover preview is covered by main content), [#45901](https://github.com/langgenius/dify/issues/45901) and [#45898](https://github.com/langgenius/dify/issues/45898).

## 6. What This Means for Application Developers
- **Agent node users on 1.18.0:** audit workflows for unset optional strategy params and for variables carrying JSON-special characters. Both are known crash paths. Check whether the fixes are in your deployed build before upgrading.
- **Tool and MCP integrations:** OpenAPI 3.1 nullable types are now supported. MCP timeouts still need the pending fix in [#45927](https://github.com/langgenius/dify/pull/45927), so enforce client-side timeouts in the meantime.
- **RAG:** if you use parent-child chunking, keyword search can return nothing silently ([#40680](https://github.com/langgenius/dify/issues/40680)). Prefer vector or hybrid retrieval until it is fixed.
- **Scheduled triggers:** make triggers idempotent across DST fall-back ([#45929](https://github.com/langgenius/dify/issues/45929)).
- **Self-hosters:** behind a proxy such as Squid, expect SSRF-classification quirks. Also verify the sandbox auth token and the SMTP hostname settings.
- **Roadmap:** the backend modernization discussion ([#30269](https://github.com/langgenius/dify/issues/30269)) and the webhook runtime refactor point to continued internal churn. Pin versions and test upgrades.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-10

## 1. Today's Highlights
No release shipped in the last 24h. Activity centers on a surge of bug reports in LLM translation (streaming tool calls, Presidio PII unmasking, Bedrock param handling) and Databricks OAuth M2M work, where a new issue and a fix/feature PR landed together. A large batch of older PRs (June) was touched in bulk, which suggests a stale-sweep or triage pass rather than new development.

## 2. Releases & Breaking Changes
None in the last 24h.

- Release hygiene: issues #35683 and #35684 (closed) flagged that GHCR images v1.94.1 and v1.95.0 had no matching git tag or GitHub Release. Both were closed today.
- Packaging: the Rust-backed pip wheel tracking issue (#31261) remains open. It aims to make `pip install litellm` include the Rust extension by default. Python 3.14 support is proposed in PR #31612 (`requires-python` widened to `<3.15`).

## 3. New Model & Hardware Support
- **AbliteratedLLM provider**, with pricing for 17 models: [PR #50697](https://github.com/BerriAI/litellm/pull/50697)
- **Voyage multimodal 3.5** plus multimodal params: [PR #31514](https://github.com/BerriAI/litellm/pull/31514)
- **ElevenLabs diarized transcription** and multi-channel speakers: [PR #31324](https://github.com/BerriAI/litellm/pull/31324)
- **DeepSeek V4 metadata fix**: max output corrected from 8192 to 384K for flash and pro: [PR #31018](https://github.com/BerriAI/litellm/pull/31018)
- **Bedrock Claude Opus 4.8** prompt-cache TTL preservation: [PR #31360](https://github.com/BerriAI/litellm/pull/31360)
- **Databricks per-deployment OAuth M2M credentials**: request [#48765](https://github.com/BerriAI/litellm/issues/48765), implementation [PR #50675](https://github.com/BerriAI/litellm/pull/50675)
- **Azure Workload Identity** keyless auth for image generation: [PR #31434](https://github.com/BerriAI/litellm/pull/31434)
- Gaps: Z.AI `glm-5.2[1m]` returns Unknown Model ([#32218](https://github.com/BerriAI/litellm/issues/32218)). Bedrock Grok 4.6/4.7 and Kimi K3 reject `temperature`, and LiteLLM still forwards it even with `drop_params=True` ([#49366](https://github.com/BerriAI/litellm/issues/49366)).

## 4. Performance & Optimization
No benchmark numbers were reported today.
- **Rate limiter**: skip post-call Redis writes for keys with no limits configured. This removes wasted writes at high throughput. [#31880](https://github.com/BerriAI/litellm/issues/31880) (open, stale)
- **Databricks token caching**: `databricks_validate_environment` calls the uncached `get_oauth_m2m_token` on every Chat/Embeddings request instead of the cached fetcher. This adds avoidable auth round-trips. [#50680](https://github.com/BerriAI/litellm/issues/50680)
- **Responses bridge**: omit the empty `tools` array to avoid upstream rejections. [PR #30540](https://github.com/BerriAI/litellm/pull/30540) covers the Responses bridge, and [PR #31522](https://github.com/BerriAI/litellm/pull/31522) covers `/chat/completions`.
- **Helm**: `extraLabels` support for all chart objects: [PR #31538](https://github.com/BerriAI/litellm/pull/31538)

## 5. Stability & Regressions
Ranked by severity.

1. **Router retries re-execute auto-approved MCP tools** after a failed follow-up model call. This can cause duplicate side effects. [#43153](https://github.com/BerriAI/litellm/issues/43153)
2. **Streaming usage severely undercounted** in chained proxies (Front-Proxy → Upstream-Proxy → Bedrock). The cause is the stream aggregation layer. [#36114](https://github.com/BerriAI/litellm/issues/36114). Related: GitHub BYOK token consumption reports zero after v1.103.1 → 1.104.2 ([#45422](https://github.com/BerriAI/litellm/issues/45422), closed).
3. **Cost and budget correctness**
   - `custom_cost_per_token` double-bills Anthropic cache-read tokens: [#40006](https://github.com/BerriAI/litellm/issues/40006). A fix PR is likely [PR #31282](https://github.com/BerriAI/litellm/pull/31282).
   - Concurrent requests can bypass `max_budget_per_session`: [#34732](https://github.com/BerriAI/litellm/issues/34732)
   - Prometheus/Grafana spend does not match the UI: [#26611](https://github.com/BerriAI/litellm/issues/26611)
4. **Tool-call translation**
   - Parallel tool-call arguments dropped when streaming `/v1/messages` on the `chatgpt` (Codex) provider: [#45348](https://github.com/BerriAI/litellm/issues/45348)
   - Anthropic `tool_reference` blocks dropped in Responses translation: [#46681](https://github.com/BerriAI/litellm/issues/46681)
   - DeepSeek V4 Pro via Codex returns a 400 on orphaned `tool_calls`: [#32992](https://github.com/BerriAI/litellm/issues/32992)
   - Websearch interception reports only the first search in a multi-search loop: [#50691](https://github.com/BerriAI/litellm/issues/50691)
5. **Security and privacy**: Presidio `output_parse_pii` does not unmask `tool_calls[].function.arguments` ([#31950](https://github.com/BerriAI/litellm/issues/31950)). It also numbers the same entity differently across messages, which corrupts unmasking ([#31959](https://github.com/BerriAI/litellm/issues/31959)).
6. **Proxy behavior**
   - `pass_through_endpoints` strips `id` from JSON-RPC bodies, breaking JSON-RPC 2.0: [#49479](https://github.com/BerriAI/litellm/issues/49479)
   - `completion_model` overrides the client-specified model instead of acting as a fallback: [#21554](https://github.com/BerriAI/litellm/issues/21554)
   - The Windows wheel ships tiktoken caches with CRLF line endings, so `import litellm` needs the network: [#41855](https://github.com/BerriAI/litellm/issues/41855)
   - Incompatible with the VS Code native model provider (BYOK): [#35775](https://github.com/BerriAI/litellm/issues/35775)

Other fix PRs open: [#31277](https://github.com/BerriAI/litellm/pull/31277) (stream chunk metadata from earliest chunk), [#31280](https://github.com/BerriAI/litellm/pull/31280) (count tool_call function names in `token_counter`), [#31278](https://github.com/BerriAI/litellm/pull/31278) (gate Gemini penalty params), [#31303](https://github.com/BerriAI/litellm/pull/31303) (atomic `/team/member_add`), [#31552](https://github.com/BerriAI/litellm/pull/31552) (avoid global OpenAI key fallback for custom `api_base`), [#30671](https://github.com/BerriAI/litellm/pull/30671) (OTel handling of MCP `CallToolResult`).

## 6. What This Means for Application Developers
- **Agents with MCP auto-execution**: do not rely on router retries for non-idempotent tools until #43153 is resolved. Make tools idempotent or disable retries.
- **Streaming usage**: in multi-proxy chains, reconcile billing against provider-side usage rather than the streamed `usage` field.
- **Streaming tool calls on `/v1/messages`**: for the Codex provider, parallel tool calls stream with empty input. Use non-streaming or serialize tool calls until #45348 is fixed.
- **PII guardrails**: if you use Presidio `output_parse_pii` with tool calls or multi-message chats, unmasking is incomplete. Do not assume round-trip fidelity.
- **Bedrock and new models**: set `temperature` explicitly to omit it for Grok 4.6/4.7 and Kimi K3, since `drop_params` does not cover them.
- **Databricks**: multi-workspace setups should watch PR #50675. Until it lands, each request re-fetches the OAuth token.
- **Budgets**: do not treat `max_budget_per_session` as a hard cap under concurrency.
- **Passthrough JSON-RPC**: avoid `pass_through_endpoints` for JSON-RPC 2.0 payloads, which need `id`, until #49479 is fixed.

*Note: many listed PRs and issues date from June–August and carry the `stale` label. They appear because they were touched in the last 24h, not because they are new.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Infrastructure Digest 2026-09-30

> Generated: 2026-09-30 13:17 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-09-30

**Scope caveat:** Today's input covers only **Dify** (application/workflow platform) and **LiteLLM** (LLM gateway). There are no digests for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning (Unsloth). The Model Support, Performance and Layer sections are therefore limited to the gateway and application layers, and I don't infer anything about the engines.

## 1. Ecosystem Overview
Today's activity sits at the top of the stack, where the work is correctness, security and accounting rather than new capability. LiteLLM shipped six releases across parallel version lines. Dify shipped none, but has a large orchestration refactor in flight (Graphon 0.8 and nested Workflow Tools). In both projects, most reported problems come from state and boundary handling: zero values, pagination edges, concurrent spend increments and credential forwarding. Neither project published benchmark numbers today.

## 2. Activity Comparison
Counts are the items cited in each digest, not repository totals. They understate real volume, and Dify's PR count is a lower bound.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | ~18 | ≥11 (5 of the 7-part Workflow Tool stack listed) | None in 24h |
| LiteLLM | ~18 | ~15 | 6 releases: v1.105.0-dev.1, v1.104.0-rc.2, v1.103.1, v1.102.2, v1.101.3, v1.100.4 |

- **LiteLLM's** release notes in the data contain only the cosign verification boilerplate, so contents are unconfirmed. The patch releases on four older lines suggest backports.
- **Dify's** in-flight PR [#40277](https://github.com/langgenius/dify/pull/40277) is the main watch item. It moves entrypoints onto Graphon 0.8.

## 3. Model Support Race
Neither project is a model-architecture race, and no hardware or backend changes landed. LiteLLM is the only one with provider and model breadth work:

- **New providers and models:** TopxAI with ten models and cost tracking ([#41919](https://github.com/BerriAI/litellm/pull/41919)), a SAP parameter sync ([#41222](https://github.com/BerriAI/litellm/pull/41222)), and ChatGPT/Codex OAuth with image edits and Live voice routes ([#40366](https://github.com/BerriAI/litellm/pull/40366)).
- **Reasoning passthrough:** opt-in `forward_reasoning_content` for vLLM-compatible endpoints ([#41050](https://github.com/BerriAI/litellm/pull/41050)).
- **Realtime fix:** OpenAI realtime transcription sessions failed with `invalid_model` until [#43854](https://github.com/BerriAI/litellm/pull/43854).
- **Gaps in coverage:**
  - `vertex_ai/claude-sonnet-5` logs $0 ([#35758](https://github.com/BerriAI/litellm/issues/35758)).
  - Azure `gpt-6-astra` is underpriced by 10% in Sweden Central ([#43569](https://github.com/BerriAI/litellm/issues/43569)).
  - Bedrock CountTokens is unsupported for Claude Opus 5 and Sonnet 5 ([#37102](https://github.com/BerriAI/litellm/issues/37102)).
- **Dify:** nothing new. Its only related item is a Japanese tokenization bug, where Jieba drops katakana ([#43277](https://github.com/langgenius/dify/issues/43277)).

**Who is ahead:** LiteLLM on provider breadth. Its lag is in cost-map and token-count coverage for the newest models.

## 4. Performance Frontier
There is no KV-cache, batching, quantization or kernel work in today's data. The performance signals are:

- **Cache affinity:** Fireworks AI prompt-cache session affinity ([#43852](https://github.com/BerriAI/litellm/pull/43852)) and a Redis TTL for DualCache ([#43293](https://github.com/BerriAI/litellm/pull/43293)).
- **Orchestration latency:** Dify [#42928](https://github.com/langgenius/dify/issues/42928) reports trivial Code nodes stalling for minutes, with per-step overhead about 10x higher after publishing a larger workflow. It has no fix PR and is the most important performance signal today.
- **Build and dev tooling:** minor items only ([#43283](https://github.com/langgenius/dify/pull/43283), [#43268](https://github.com/langgenius/dify/issues/43268)).

Optimization effort here is in caching and orchestration overhead, not in the serving engine.

## 5. Layer Positioning
| Project | Layer | Today's focus |
|---|---|---|
| LiteLLM | Gateway / proxy | Routing and provider translation, spend and budget accounting, auth and guardrails, pass-through |
| Dify | Application / workflow platform | Graph execution, tool orchestration, UI and data-handling correctness |

- Both are **consumers of engines**, not engines.
- LiteLLM's risk profile is **control-plane**: credentials, budgets and audit.
- Dify's risk profile is **execution-plane**: run persistence, pause and resume, and trace visibility.

## 6. Trend Signals
1. **Gateways are now security boundaries.**
   - WebSocket pass-through leaks caller keys with `forward_headers=True` ([#43855](https://github.com/BerriAI/litellm/pull/43855)).
   - Guardrail identity metadata can be forged ([#43754](https://github.com/BerriAI/litellm/pull/43754)).
   - Audit writes are lost on worker shutdown ([#43583](https://github.com/BerriAI/litellm/issues/43583)).
2. **Cost accounting is the weakest area.**
   - Concurrent spend increments are lost ([#43491](https://github.com/BerriAI/litellm/issues/43491)).
   - A price reload wipes registrations ([#43444](https://github.com/BerriAI/litellm/issues/43444)).
   - Unmapped models log $0 ([#35691](https://github.com/BerriAI/litellm/issues/35691)).
   - `max_budget=0` is treated as unlimited ([#43292](https://github.com/BerriAI/litellm/pull/43292)).
3. **Nested and durable agent workflows are arriving.** Dify's Workflow Tool stack adds child graphs that can pause, resume and stop. External trace exports would exclude the internals of called tools.
4. **Release fragmentation.** LiteLLM ships across six parallel lines, so pinning and upgrade planning matter.

**What developers should do:**
- Don't rely on proxy budgets alone. Set provider-side caps and verify spend logs.
- Set explicit model allowlists. An empty `models` list grants access to all models ([#21540](https://github.com/BerriAI/litellm/issues/21540)).
- Avoid `forward_headers=True` on WebSocket pass-through until #43855 merges.
- Don't rely on `0` as a required or default Number input in Dify ([#43240](https://github.com/langgenius/dify/issues/43240), [#43242](https://github.com/langgenius/dify/issues/43242)).
- Deduplicate paged workflow runs by ID ([#43265](https://github.com/langgenius/dify/issues/43265)).
- Re-check knowledge bindings after DSL import ([#43062](https://github.com/langgenius/dify/issues/43062)).
- Expect less internal trace detail from nested Workflow Tools.
- Read release notes before upgrading LiteLLM. The dev and RC builds are not for production.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-09-30

## Today's Highlights
No release shipped in the last 24h. Activity is dominated by a seven-part stack of nested Workflow Tool execution PRs, split out of the Graphon 0.8 orchestration refactor. Issue traffic is mostly small correctness bugs in Number-input handling, pagination, file-upload limits and batch metadata. Several of these already have fix PRs.

## Releases & Breaking Changes
None in the last 24h.

Watch item: [#40277](https://github.com/langgenius/dify/pull/40277) moves workflow, chat, pipeline and direct-tool entrypoints onto Graphon 0.8. Application orchestration would own repositories, persistence, execution indexing, event publication and durable pause handling. If it merges, expect changes in how runs persist and stream node events.

## New Model & Hardware Support
Nothing landed today. Dify is an application and gateway layer, so this section has no backend, CUDA or quantization changes.

Related bug: [#43277](https://github.com/langgenius/dify/issues/43277) reports that Jieba keyword extraction drops every katakana word and full-width letter or digit. That hurts keyword retrieval for Japanese content.

## Performance & Optimization
No benchmark numbers were published today.

- [#42928](https://github.com/langgenius/dify/issues/42928): Workflow runs stall for minutes on trivial Code nodes that use 0 LLM tokens. The reporter says per-step overhead grew about 10x after publishing a larger workflow. No fix PR was listed. This is the most important performance signal today.
- [#43283](https://github.com/langgenius/dify/pull/43283): Skips i18n API symbol resolution for calls with no arguments. This cuts unnecessary TypeScript work in the analyzer, which is a build-time change.
- [#43268](https://github.com/langgenius/dify/issues/43268): In vinext dev, `skipToken` queries execute because query-core is bundled twice. This causes wasted requests and failures on API-key queries. It affects development mode only.

## Stability & Regressions
Ranked by likely impact:

1. **Workflow run slowdown**, [#42928](https://github.com/langgenius/dify/issues/42928). Open, labeled bug, no fix PR yet.
2. **Remote file upload rejects media**, [#43275](https://github.com/langgenius/dify/issues/43275). A dotted extension never matches `*_EXTENSIONS`, so media files fall back to the 15 MB `UPLOAD_FILE_SIZE_LIMIT` and are rejected. Fix: [#43282](https://github.com/langgenius/dify/pull/43282).
3. **Run pagination skips rows**, [#43265](https://github.com/langgenius/dify/issues/43265). Runs that share `created_at` with the page boundary are skipped. No fix PR listed.
4. **DSL import loses knowledge bindings**, [#43062](https://github.com/langgenius/dify/issues/43062). Knowledge-retrieval `dataset_ids` are dropped across workspaces without any report to the user. No fix PR listed.
5. **Batch metadata edits skip off-page documents**, [#43244](https://github.com/langgenius/dify/issues/43244). Fix: [#43245](https://github.com/langgenius/dify/pull/43245).
6. **Zero values rejected or dropped in Number inputs.** These are separate reports:
   - [#43240](https://github.com/langgenius/dify/issues/43240): Test Run rejects 0 in a required Number input.
   - [#43242](https://github.com/langgenius/dify/issues/43242): The embedded chatbot drops numeric zero defaults and required number values.
   - [#43251](https://github.com/langgenius/dify/issues/43251): Switching a Number input with a default to File List crashes the variable editor.
7. **Oversized run time ranges**, [#43247](https://github.com/langgenius/dify/issues/43247). They pass validation, then fail during threshold calculation.
8. **UI polish:**
   - [#43284](https://github.com/langgenius/dify/issues/43284): Node panel action buttons shift down. Fix: [#43286](https://github.com/langgenius/dify/pull/43286).
   - [#43285](https://github.com/langgenius/dify/issues/43285): Form labels show a text cursor. Fix: [#43287](https://github.com/langgenius/dify/pull/43287).
   - [#43272](https://github.com/langgenius/dify/issues/43272): Inline Agent configuration dialog flicker (closed).
   - [#43249](https://github.com/langgenius/dify/issues/43249): Date Picker story fails in Safari (closed).

In-flight design work:
- [#39546](https://github.com/langgenius/dify/issues/39546) proposes ordering node-start persistence before dependent node execution.
- [#43289](https://github.com/langgenius/dify/issues/43289) asks for LLM node memory to use a variable other than `sys.query` as the latest user message.

## What This Means for Application Developers
- **Nested Workflow Tools are coming.** The stack ([#42820](https://github.com/langgenius/dify/pull/42820), [#42821](https://github.com/langgenius/dify/pull/42821), [#42822](https://github.com/langgenius/dify/pull/42822), [#42823](https://github.com/langgenius/dify/pull/42823), [#42824](https://github.com/langgenius/dify/pull/42824)) would run called Workflow Tools as child graphs. They can pause, resume and stop, and republishing a tool does not change an in-flight run.
  - Trace access would require authorization on every source app.
  - External trace exports would exclude called tools' internals.
  - If you export traces to third-party observability, plan for less internal detail on nested tool calls.
- **Latency:** If you see slow Code-node steps after publishing a large workflow, compare against [#42928](https://github.com/langgenius/dify/issues/42928) and add your data there.
- **Number inputs:** Do not rely on `0` as a required or default value in workflows, the embedded chatbot or Test Run until #43240 and #43242 are fixed. Consider a sentinel value or a string type.
- **DSL migration:** After importing a workflow DSL into another workspace, manually verify knowledge-retrieval dataset bindings ([#43062](https://github.com/langgenius/dify/issues/43062)).
- **File uploads by URL:** Media over 15 MB may be rejected until [#43282](https://github.com/langgenius/dify/pull/43282) merges. Direct upload paths are not reported as affected.
- **Run listing:** If you page through workflow runs programmatically, deduplicate by run ID. Boundary rows can be skipped ([#43265](https://github.com/langgenius/dify/issues/43265)).
- **Japanese content:** Keyword-based retrieval may miss katakana terms ([#43277](https://github.com/langgenius/dify/issues/43277)). Prefer vector or hybrid retrieval.

Noise: [#43290](https://github.com/langgenius/dify/issues/43290) is a promotional invite, not a project issue.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-09-30

## 1. Today's Highlights
LiteLLM shipped six releases across parallel version lines in 24 hours. They are v1.105.0-dev.1, v1.104.0-rc.2, v1.103.1, v1.102.2, v1.101.3 and v1.100.4. The patch releases on older lines suggest backports, but the release notes in the data are truncated. They show only the cosign verification boilerplate, so I can't confirm what each contains.

Activity on the security and auth side is high. Open PRs stop the proxy leaking caller credentials on WebSocket pass-through (#43855) and stop guardrails trusting forged identity metadata (#43754). On the bug side, cost and usage accounting shows several problems: $0 spend logs, a price-map reload that wipes registrations, and lost concurrent spend increments.

## 2. Releases & Breaking Changes
| Version | Line | Notes |
|---|---|---|
| v1.105.0-dev.1 | next | Dev build |
| v1.104.0-rc.2 | release candidate | Second RC |
| v1.103.1, v1.102.2, v1.101.3, v1.100.4 | patch | Patch releases on four older lines |

- Release bodies in the data contain only the Docker image signature verification section (cosign, key introduced in [commit 0112e53](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)). No breaking changes or migration notes are visible. Check the GitHub release pages before upgrading.
- Possible behavior change in flight: [PR #43292](https://github.com/BerriAI/litellm/pull/43292) changes `max_budget=0` from "unlimited" to "block all spend". This is correct, but it could affect configs that relied on the old behavior.
- Policy inconsistency: [#21540](https://github.com/BerriAI/litellm/issues/21540) notes that an empty `models` list on a key or team grants access to all models, while an empty MCP server list grants none.

## 3. New Model & Hardware Support
- [PR #41919](https://github.com/BerriAI/litellm/pull/41919): adds TopxAI as a JSON-configured OpenAI-compatible provider. It supports Chat Completions and Responses, and adds ten models with cost tracking.
- [PR #41050](https://github.com/BerriAI/litellm/pull/41050): opt-in `forward_reasoning_content`, with a configurable reasoning field name, for hosted vLLM and compatible endpoints.
- [PR #40366](https://github.com/BerriAI/litellm/pull/40366): ChatGPT/Codex OAuth support for image edits, structured review requests with strict JSON schema, and public Live voice routes.
- [PR #41222](https://github.com/BerriAI/litellm/pull/41222): syncs the SAP provider's OpenAI params.
- [PR #43854](https://github.com/BerriAI/litellm/pull/43854): drops `?model=` from the upstream URL for OpenAI realtime `intent=transcription`. Without the fix, transcription sessions fail with `invalid_model`.
- Gaps reported in the cost map:
  - [#43569](https://github.com/BerriAI/litellm/issues/43569): the `azure/eu/gpt-6-astra` price underprices Sweden Central by 10%.
  - [#35758](https://github.com/BerriAI/litellm/issues/35758): `vertex_ai/claude-sonnet-5` logs $0 cost, while the `@default` variant works.

## 4. Performance & Optimization
No throughput or latency numbers were reported today. Relevant items:
- [PR #43852](https://github.com/BerriAI/litellm/pull/43852): shared session affinity for Fireworks AI prompt caching, which should improve cache hit rates.
- [PR #43293](https://github.com/BerriAI/litellm/pull/43293): writes DualCache's Redis tier with `default_redis_ttl`.
- [#37102](https://github.com/BerriAI/litellm/issues/37102): Bedrock CountTokens is unsupported for most current Anthropic models, including Claude Opus 5 and Sonnet 5. The proxy silently returns understated token counts.

## 5. Stability & Regressions
Ranked by severity.

**Security and access control**
1. **Credential leak on WebSocket pass-through.** With `forward_headers=True`, the caller's LiteLLM key and `Authorization`/`x-api-key` headers reach third-party endpoints. Fix PR: [#43855](https://github.com/BerriAI/litellm/pull/43855).
2. **Forgeable guardrail identity.** Callers could forge key alias, team, hash and route for guardrails. CLI session tokens also leaked to guardrail vendors. Fix PR: [#43754](https://github.com/BerriAI/litellm/pull/43754).
3. **Audit-log loss.** Audit writes use bare `asyncio.create_task` in 12 sites, so a worker shutdown drops records for calls that already returned 200. See [#43583](https://github.com/BerriAI/litellm/issues/43583). No fix PR is listed.
4. **A2A header drop.** `message/send` drops an allowlisted `x-litellm-api-key` ([#43450](https://github.com/BerriAI/litellm/issues/43450)).

**Cost and budget correctness**
5. **Lost spend increments.** User, team, end-user and tag spend caches lose concurrent increments, because `update_cache` does a read-modify-write ([#43491](https://github.com/BerriAI/litellm/issues/43491)). Budget enforcement can undercount under load.
6. **Price reload wipes registrations.** When `model_list` is empty and deployments live in the DB, a price reload wipes every deployment's cost-map registration ([#43444](https://github.com/BerriAI/litellm/issues/43444)).
7. **$0 spend logs.** Custom models not in the cost map log $0 in spend logs, although the response shows a correct estimate ([#35691](https://github.com/BerriAI/litellm/issues/35691)).
8. **Zero budget.** `max_budget=0` is treated as unlimited. Fix PR: [#43292](https://github.com/BerriAI/litellm/pull/43292).

**Translation and crashes**
- Partial generic streaming chunks pass validation, then raise `KeyError` ([#43487](https://github.com/BerriAI/litellm/issues/43487)).
- `PromptTokensDetailsWrapper` raises `AttributeError` on unset `cache_creation_tokens` for DashScope first-turn requests ([#43756](https://github.com/BerriAI/litellm/issues/43756)).
- `reasoning_effort=xhigh` is silently downgraded when the model map lacks the capability ([#40471](https://github.com/BerriAI/litellm/issues/40471)).
- A non-object JSON body causes a 500 and a crash in the auth error handler. Fix PR: [#43731](https://github.com/BerriAI/litellm/pull/43731).
- Empty Gemini tool-call arguments are sent as `{"type":"object"}` instead of `{}`. Fix PR: [#43162](https://github.com/BerriAI/litellm/pull/43162).
- `jev_classifier_config.api_key` does not resolve `os.environ/` references ([#43826](https://github.com/BerriAI/litellm/issues/43826)).
- Gemini access through the SDK with a custom `api_base` is reported broken ([#43828](https://github.com/BerriAI/litellm/issues/43828)). This is not triaged, and it may be a user configuration problem.
- `GET /key/info` returns 500 instead of 400 when no key is given. Fix PR: [#43577](https://github.com/BerriAI/litellm/pull/43577).
- Older bugs, mostly marked stale:
  - [#27005](https://github.com/BerriAI/litellm/issues/27005): team admins can't save Key Edit Settings.
  - [#29168](https://github.com/BerriAI/litellm/issues/29168): Bedrock `minimum`/`maximum` are no longer dropped.
  - [#31587](https://github.com/BerriAI/litellm/issues/31587): `/v1/skills` returns 500 without an Anthropic key.
  - [#31910](https://github.com/BerriAI/litellm/issues/31910): MCP auto-execute with `stream: true` leaks the intermediate tool-call turn.

**Observability**
- [PR #43035](https://github.com/BerriAI/litellm/pull/43035): `langfuse_otel` should append `/v1/traces`. Without it, every export silently 404s.
- [PR #43802](https://github.com/BerriAI/litellm/pull/43802): includes `DD_TAGS` on Datadog LLM Observability spans.

## 6. What This Means for Application Developers
- **Upgrade planning:** Read the release notes for your line before moving. The data doesn't show what changed, and v1.105.0-dev.1 and v1.104.0-rc.2 are pre-release builds, so don't put them in production.
- **Don't rely on proxy spend caps alone.** Concurrent increments can be lost ([#43491](https://github.com/BerriAI/litellm/issues/43491)). Custom and unmapped models may log $0. Register custom pricing explicitly and verify it in spend logs. Set a provider-side budget or alert as a backstop.
- **Audit access defaults.** Empty `models` lists grant access to all models. Set explicit allowlists for virtual keys and teams.
- **Review pass-through and guardrail setups.** If you use WebSocket pass-through with `forward_headers=True`, or guardrails that key off identity metadata, track #43855 and #43754 and limit exposure until they merge.
- **Token counting on Bedrock:** With Claude Opus 5 or Sonnet 5, treat proxy token counts as possibly understated ([#37102](https://github.com/BerriAI/litellm/issues/37102)).
- **Reasoning params:** Don't assume `reasoning_effort=xhigh` is honored. Check the model map capability ([#40471](https://github.com/BerriAI/litellm/issues/40471)).
- **Observability:** If `langfuse_otel` shows no traces, the endpoint bug in [#43035](https://github.com/BerriAI/litellm/pull/43035) is a likely cause.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
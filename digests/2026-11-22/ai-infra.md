# AI Infrastructure Digest 2026-11-22

> Generated: 2026-11-22 15:00 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-11-22

**Scope caveat:** Today's input covers only **Dify** (LLM app platform) and **LiteLLM** (LLM gateway). There were no digests for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning (Unsloth). Conclusions about those layers can't be drawn from this data, and I've marked where that limits a section.

## 1. Ecosystem Overview
Today's activity sits in the application and gateway layers, not at the engine level. LiteLLM shipped two releases and is mostly fixing provider-translation bugs (Gemini/Vertex, Anthropic, AWS Bedrock/SageMaker). Dify shipped nothing and is dealing with backend correctness bugs and a possible regression after the 1.20.0 upgrade. Both projects are spending effort on reliability: idempotency, retries, schema fidelity and timeouts. Neither reported a benchmark number. The common theme is that tool calling, structured output and streaming are where most breakage occurs.

## 2. Activity Comparison
Counts are the items cited in each digest, not repository totals.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | 11 | 9 | None in the last 24h. 1.20.0 is the version of concern. |
| LiteLLM | 15 | 14 | **v1.112.0-dev.2** (dev) and **v1.108.15** (LTS). The `lts` tag now points to v1.108.15. |

- LiteLLM's backport pairs (#53482/#53483, #53393/#53403, #53388) show a maintained LTS branch (`lts/1.108.x`).
- Dify's PR flow is mostly strict-typing (pyrefly) test PRs plus a workflow-comments rework (#46864).
- Release notes for both LiteLLM releases were truncated in the source, so their contents are unknown.

## 3. Model Support Race
Neither project is an inference engine, so this section covers provider and model-map support rather than architectures.

- **LiteLLM is clearly ahead**, but several items are still open:
  - Meta Muse on Vertex AI (native Responses): the LTS twin [#53388](https://github.com/BerriAI/litellm/pull/53388) is open and depends on #50768.
  - New OpenAI-compatible providers, both open: API Store with DeepSeek V4.1 ([#52854](https://github.com/BerriAI/litellm/pull/52854)) and 0G Private Computer ([#52499](https://github.com/BerriAI/litellm/pull/52499)).
  - Gaps in existing support:
    - Vertex Claude Haiku 5.5 lacks `supports_native_structured_output` ([#53478](https://github.com/BerriAI/litellm/issues/53478)).
    - Gemini `video_url` parts are dropped silently. Two competing PRs are open: #53406 and #53420.
  - Requested: GPT-Live (`gpt-live-1`, 8 👍, [#40888](https://github.com/BerriAI/litellm/issues/40888)).
- **Dify** landed no model support today. It has a Swedish UI locale PR ([#46859](https://github.com/langgenius/dify/pull/46859)), which is localization only. It also has an open request for plugin backwards invocation of knowledge-base operations ([#46637](https://github.com/langgenius/dify/issues/46837)).
- **Not covered:** new architectures (MoE, multimodal, etc.) and hardware backends. They would normally show up in the engine projects, which are absent today.

## 4. Performance Frontier
There are no benchmarks in today's data. The optimization work is about resource control and latency behavior, not kernels:

- **Not covered:** KV cache, batching, quantization, distributed serving and kernels. None appears in either digest.
- **Budget and concurrency (LiteLLM):** [#53412](https://github.com/BerriAI/litellm/pull/53412) stops Gemini native requests from reserving the full 1M-token window. Before the fix, a key with less than about $0.85 left couldn't run a second concurrent request.
- **Streaming timeouts (LiteLLM):** [#53442](https://github.com/BerriAI/litellm/pull/53442) makes stalled `openai_like` streams end with a 408 instead of hanging.
- **Routing (LiteLLM):** [#53513](https://github.com/BerriAI/litellm/issues/53513) reports that least-busy routing always picks the first deployment on ties, so light sequential traffic never spreads. [#33021](https://github.com/BerriAI/litellm/issues/33021) reports that componentized startup ignores the YAML DB pool settings.
- **Blocking and DB sessions (Dify):**
  - [#46907](https://github.com/langgenius/dify/pull/46907) fixes MetaDefender polling that could block uploads for up to 50s.
  - [#46632](https://github.com/langgenius/dify/pull/46632) stops holding a DB session across a model call.

## 5. Layer Positioning
| Project | Layer | Role in the stack | Today's focus |
|---|---|---|---|
| **LiteLLM** | Gateway/proxy | Normalizes many provider APIs, with routing, spend tracking, budgets and fallbacks | Translation fidelity, retries, spend logs, MCP pass-through |
| **Dify** | Application platform | Workflows, knowledge-base ingestion, plugins, tools | Async dispatch, scheduling, ingestion, OpenAPI tool parsing |
| Inference engines, local runtimes, fine-tuning | n/a | No data today | n/a |

The two projects meet at the model-provider boundary. Dify's KB import hang ([#46835](https://github.com/langgenius/dify/issues/46835)) occurs at token counting with an OpenAI-compatible embedding endpoint. That endpoint is the kind of target a gateway like LiteLLM often fronts, although the digest doesn't say whether LiteLLM is involved here. Tracing a failure through the layers is therefore harder than it looks.

## 6. Trend Signals
1. **Translation-layer correctness is the main source of bugs.** Gaps in the Gemini→Anthropic and Responses→chat conversions are open or recently fixed:
   - Parallel same-function tool calls are dropped and `tool_result` ids duplicated ([#53345](https://github.com/BerriAI/litellm/issues/53345)).
   - Vertex Gemini `const` values are dropped (PR #53413), and Gemini image models reject `n>1` (PR #53201).
   - `cache_control` is stripped for custom endpoints ([#37474](https://github.com/BerriAI/litellm/issues/37474)).
   - The same pattern appears in Dify's OpenAPI tool parser, which drops types and defaults for `$ref` and `allOf` schemas ([#46889](https://github.com/langgenius/dify/issues/46889)).
2. **Silent failures are being turned into explicit ones.** LiteLLM now returns a 502 for empty or truncated AWS event streams (PR #53482), so retries and fallbacks can trigger. Dify's async workflow can still return an error after Celery has accepted the task ([#46897](https://github.com/langgenius/dify/issues/46897)).
3. **Upgrade risk is real.** LiteLLM had regressions in v1.110.x (OAuth pass-through 401 in #53185, missing spend-log payloads in #53263). Dify may have one in 1.20.0 (#46835, no workaround). Release cadence is fast, and LiteLLM now steers risk-averse users to its `lts` tag.
4. **Model deprecation is a configuration risk.** LiteLLM's policy-template endpoints default to `gpt-4o-mini`, which OpenAI is shutting down on 2027-01-14 ([#52845](https://github.com/BerriAI/litellm/issues/52845)).

**What to watch or do:**
- Make async workflow triggers idempotent, since a returned error doesn't prove the task wasn't accepted.
- Pin to `lts` or a tested version, and stage-test Dify 1.20.0 KB imports before upgrading.
- Don't rely on `video_url`, `const` schemas, Gemini→Anthropic parallel tool calls, or Haiku 5.5 strict structured output until fixes land.
- Set explicit models wherever a default is `gpt-4o-mini`.
- Run the same tool-use and streaming tests across every provider you route to, since the gateway layer doesn't guarantee identical behavior.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-22

Dify is an LLM app platform, not an inference engine. Several sections below therefore have little or nothing to report.

## 1. Today's Highlights
There was no release in the last 24h. Activity centred on bug reports and fix PRs. A batch of newly filed backend bugs covers async workflow dispatch, schedule limits, document retry and plugin upgrades. A KB-import hang after the 1.20.0 upgrade is also open. On the PR side, a large workflow-comments rework for the web UI and a Swedish locale are open, and many strict-typing (pyrefly) test PRs are in flight.

## 2. Releases & Breaking Changes
No new release. One upgrade-related item to watch: [#46835](https://github.com/langgenius/dify/issues/46835) reports a regression after upgrading from 1.17.1 to 1.20.0 (see section 5).

## 3. New Model & Hardware Support
No model or hardware support landed today. Related platform work:
- [#46859](https://github.com/langgenius/dify/pull/46859) adds a Swedish (`sv-SE`) locale. This is UI localization, not model support.
- [#46637](https://github.com/langgenius/dify/issues/46637) is an enhancement request for plugin backwards invocation of knowledge-base operations (documents, metadata, pipeline runs). It is open with no PR yet.

## 4. Performance & Optimization
No benchmarks or numbers were reported. Relevant items:
- [#46907](https://github.com/langgenius/dify/pull/46907) fixes MetaDefender polling. Single-attempt scans (`wait_for_result=False`) can still poll for up to 50s, which blocks request-bound KnowledgeFS uploads. It fixes issue [#46902](https://github.com/langgenius/dify/issues/46902).
- [#46632](https://github.com/langgenius/dify/pull/46632) moves `ToolModelInvoke` log writes to short-lived DB sessions instead of the global `db.session`. This avoids holding a session across a model call. It is part of [#45584](https://github.com/langgenius/dify/issues/45584).
- [#46864](https://github.com/langgenius/dify/pull/46864) is a workflow-comments rework. It makes replies optimistic and stops thread-switch flicker. It is a UX responsiveness change rather than a backend one.

## 5. Stability & Regressions
Ranked by severity:
1. **[#46835](https://github.com/langgenius/dify/issues/46835): KB import hangs forever** at token counting (`get_text_embedding_num_tokens`) after upgrading to 1.20.0. The setup is Weaviate with `openai_api_compatible`. It is a possible regression from 1.17.1, there is no fix PR, and it has 3 comments.
2. **[#46897](https://github.com/langgenius/dify/issues/46897): Async workflow can return an error after Celery has accepted the task.** This risks duplicate runs or client retries. No fix PR is listed.
3. **[#46899](https://github.com/langgenius/dify/issues/46899): Workflow schedule dispatch limit can exceed its configured maximum.** No fix PR is listed.
4. **[#46892](https://github.com/langgenius/dify/issues/46892): Cloud quota rejection stops later documents in a retry batch.** No fix PR is listed.
5. **[#46894](https://github.com/langgenius/dify/issues/46894): Plugins can only be upgraded to older patch versions.** No fix PR is listed.
6. **[#46889](https://github.com/langgenius/dify/issues/46889): The custom OpenAPI tool parser drops types and defaults** for `$ref` parameter schemas and for inline requestBody `$ref`/`allOf` properties. No fix PR is listed.
7. **[#46902](https://github.com/langgenius/dify/issues/46902): MetaDefender request mode polls for up to 50s.** The fix is [#46907](https://github.com/langgenius/dify/pull/46907).
8. Smaller items:
   - [#46305](https://github.com/langgenius/dify/pull/46305) keeps MCP tool-list output as JSON text. It is open and currently stringifies mixed-type arrays via `str()`.
   - [#46304](https://github.com/langgenius/dify/pull/46304) resets log pagination when filters change. It is open.
   - [#43241](https://github.com/langgenius/dify/pull/43241) accepts `0` in required Number inputs. It is open.
   - [#43476](https://github.com/langgenius/dify/pull/43476) fixes OAuth redirects when the console and API use different origins. It is open.

Closed today: [#44907](https://github.com/langgenius/dify/issues/44907) was a custom tool sending a form-encoded body for `application/json; charset=utf-8`. Its fix PR [#44908](https://github.com/langgenius/dify/pull/44908) is also closed. Neither page shows whether it was merged, so verify before relying on it.

## 6. What This Means for Application Developers
- **Hold on 1.20.0 if you run self-hosted KB ingestion with OpenAI-compatible embeddings.** Test imports in staging first, because [#46835](https://github.com/langgenius/dify/issues/46835) has no workaround yet.
- **Make async workflow triggers idempotent.** An error response can come back after Celery has accepted the task ([#46897](https://github.com/langgenius/dify/issues/46897)). Don't blindly retry without a dedup key.
- **Don't rely on the schedule dispatch cap being exact** ([#46899](https://github.com/langgenius/dify/issues/46899)).
- **Check custom OpenAPI tools** for `$ref`-based schemas and `allOf` bodies. Types and defaults may be silently dropped ([#46889](https://github.com/langgenius/dify/issues/46889)). Inline the schemas as a workaround.
- **Check your MCP tools' output format.** Mixed-type JSON arrays may be stringified in Python repr style until [#46305](https://github.com/langgenius/dify/pull/46305) lands.
- **Plugin authors:** knowledge-base operations are not yet available through backwards invocation ([#46637](https://github.com/langgenius/dify/issues/46637)).
- **Contributors:** [#33092](https://github.com/langgenius/dify/issues/33092) and [#45584](https://github.com/langgenius/dify/issues/45584) are open good-first-issue refactors (pydantic and SQLAlchemy engine usage).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-22

## 1. Today's Highlights
Two releases shipped: **v1.112.0-dev.2** (dev line) and **v1.108.15** (LTS patch). Activity is dominated by Gemini/Vertex and Anthropic translation fixes, plus a wave of LTS backports to `lts/1.108.x`. Notable user-facing bugs include a v1.110.x pass-through OAuth regression and missing spend-log payloads.

## 2. Releases & Breaking Changes
- **v1.112.0-dev.2**: dev pre-release. The notes in the data are truncated to the cosign verification block, so I can't list changes. Image: `ghcr.io/berriai/litellm:v1.112.0-dev.2`.
- **v1.108.15 (LTS)**: the `lts` image tag now points to this release (`ghcr.io/berriai/litellm:lts`). Changelog contents aren't visible in the data.
- **Config/behavior to watch**: #52845 notes that the policy-template endpoints default to `gpt-4o-mini`, which OpenAI is shutting down on 2027-01-14. Set an explicit model. ([issue](https://github.com/BerriAI/litellm/issues/52845))

## 3. New Model & Hardware Support
- **Meta Muse on Vertex AI**: native Responses support. The LTS twin is [#53388](https://github.com/BerriAI/litellm/pull/53388) and it depends on #50768 merging first. Both are open.
- **New OpenAI-compatible providers (open PRs)**:
  - API Store, with DeepSeek V4.1 and spend tracking: [#52854](https://github.com/BerriAI/litellm/pull/52854)
  - 0G Private Computer: [#52499](https://github.com/BerriAI/litellm/pull/52499)
- **Vertex Claude Haiku 5.5**: the model-map entry lacks `supports_native_structured_output`. As a result, `json_schema` with `strict: true` falls back to an unforced JSON tool. ([#53478](https://github.com/BerriAI/litellm/issues/53478))
- **Gemini video**: `video_url` parts are currently dropped silently. Two competing fix PRs are open: [#53406](https://github.com/BerriAI/litellm/pull/53406) and [#53420](https://github.com/BerriAI/litellm/pull/53420).
- **Feature requests**:
  - Gemini Live Avatar (closed): [#43166](https://github.com/BerriAI/litellm/issues/43166)
  - GPT-Live API (`gpt-live-1`) support, 8 👍: [#40888](https://github.com/BerriAI/litellm/issues/40888)

## 4. Performance & Optimization
No benchmark numbers were reported today. Related work:
- **Budget hold sizing**: [#53412](https://github.com/BerriAI/litellm/pull/53412) fixes Gemini native `generateContent` requests that reserved the full 1M-token window. A key with less than about $0.85 left could not run a second concurrent request.
- **Streaming timeouts**: [#53442](https://github.com/BerriAI/litellm/pull/53442) makes the `openai_like` handler honor `timeout` and `stream_timeout` on async streams. A stalled stream now ends with a 408 instead of hanging.
- **Least-busy routing**: [#53513](https://github.com/BerriAI/litellm/issues/53513) reports that ties always pick the first deployment, so sequential traffic never spreads.
- **Componentized startup**: [#33021](https://github.com/BerriAI/litellm/issues/33021) says it ignores YAML DB pool settings.

## 5. Stability & Regressions
Ranked by severity:
1. **OAuth pass-through 401 (v1.110.1)**: [#53185](https://github.com/BerriAI/litellm/issues/53185) (closed). A GET with `client_id` only in the query string was rejected, which broke browser OAuth for an MCP server.
2. **Spend logs missing payloads (v1.110.2)**: [#53263](https://github.com/BerriAI/litellm/issues/53263) (closed). Request and response content was omitted despite `store_prompts_in_spend_logs` being enabled.
3. **Router retries re-run auto-approved MCP tools** after a failed follow-up call: [#43153](https://github.com/BerriAI/litellm/issues/43153) (closed).
4. **Empty or truncated AWS event streams** returned as success (SageMaker/Bedrock agents). Fix: [#53482](https://github.com/BerriAI/litellm/pull/53482), with LTS backport [#53483](https://github.com/BerriAI/litellm/pull/53483). The change returns a 502 so retries and fallbacks trigger.
5. **Anthropic streams with non-object JSON lines** fail. Fix: [#53393](https://github.com/BerriAI/litellm/pull/53393), with backport [#53403](https://github.com/BerriAI/litellm/pull/53403).
6. **Duplicate SpendLogs for a cache hit** on the Responses→chat bridge for prompts of 256 KiB or more (v1.108.0): [#52824](https://github.com/BerriAI/litellm/issues/52824) (closed).
7. **Parallel tool-call handling**:
   - Gemini→Anthropic drops parallel same-function calls and duplicates `tool_result` ids: [#53345](https://github.com/BerriAI/litellm/issues/53345) (open).
   - Parallel tool-call args dropped on streaming `/v1/messages` for the Codex provider: [#45348](https://github.com/BerriAI/litellm/issues/45348) (closed).
8. **`ModelNotMappedError`** in `utils.py`: [#51452](https://github.com/BerriAI/litellm/issues/51452) (open, 12 comments).
9. **Smaller items**:
   - Vertex Gemini `const` values are dropped from schemas: [#53413](https://github.com/BerriAI/litellm/pull/53413).
   - Gemini image models reject `n>1`: [#53201](https://github.com/BerriAI/litellm/pull/53201).
   - The Bedrock `model_id` registration clash is fixed in [#53461](https://github.com/BerriAI/litellm/pull/53461).
   - The `hosted_vllm` Responses API drops `chat_template_kwargs` and `top_k`: [#48362](https://github.com/BerriAI/litellm/issues/48362).
   - `cache_control` is stripped in the Responses transformer for custom endpoints: [#37474](https://github.com/BerriAI/litellm/issues/37474).

## 6. What This Means for Application Developers
- **Pinning**: if you're on v1.110.x and use OAuth pass-through for MCP or rely on prompt storage in spend logs, check whether those fixes are in your build before upgrading. Prefer the `lts` tag for stability.
- **Gemini and Vertex**: don't rely on `video_url`, `const` schemas, or `n>1` for image models until the fixes land. Verify structured output on Vertex Claude Haiku 5.5.
- **Tool use**: avoid parallel same-function calls through Gemini→Anthropic translation. Test streaming tool-call arguments for non-OpenAI providers.
- **Resilience**: the AWS 502 fix will make retries and fallbacks work for SageMaker/Bedrock. If you use `least-busy` routing with light traffic, expect uneven distribution.
- **Defaults**: set explicit models for policy templates and any other `gpt-4o-mini` defaults ahead of the January 2027 shutdown.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
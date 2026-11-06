# AI Infrastructure Digest 2026-11-06

> Generated: 2026-11-06 14:45 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-11-06

**Scope note:** The input covers only **Dify** (an LLM application platform) and **LiteLLM** (an LLM gateway). It has no data for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning frameworks (Unsloth). Sections 3–5 are limited to what these two projects show. Counts are items cited in each digest, not full repository totals.

## 1. Ecosystem Overview
Today's activity sits at the application and gateway layers, not the engine layer. Both projects are mostly fixing correctness problems: streaming failures, reasoning and tool-call translation, and silent data loss. LiteLLM is tracking the newest Claude models (Opus 5.5, Fable 5.1, Sonnet 5, Haiku 5.5) on Bedrock. It also maintains a 1.108 LTS branch with backports, which shows the gateway is being treated as production infrastructure. Dify's day is dominated by a database pagination cost bug and plugin and marketplace regressions in 1.18/1.19. Neither project shipped a feature release that changes the landscape.

## 2. Activity Comparison

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | 18 (about 6 closed) | 15 (about 3 closed unmerged) | None in the last 24h. Regressions are tracked against 1.18.0 and 1.19.0. |
| LiteLLM | 23 (about 9 closed) | 14 (1 breaking, 1 closed) | **v1.108.1** (signed images). Its notes are truncated, so the functional changes are unconfirmed. The 1.108 LTS branch is getting 3 backports. |

- LiteLLM has more issue-level churn, mostly bugs in provider translation.
- Dify has several closed fix PRs, such as #45615, #45685 and #45626. For these, it is unclear whether the work merged or was dropped, so the underlying bugs may still be open.

## 3. Model Support Race
- **LiteLLM is clearly ahead.** [#50221](https://github.com/BerriAI/litellm/pull/50221) is open and would make Bedrock native JSON-schema output the default on Opus 5.5, Fable 5.1, Sonnet 5 and Haiku 5.5. It also reports about 20–50% lower cost than forced-tool JSON. Other additions:
  - Nova Sonic realtime guardrails ([#49833](https://github.com/BerriAI/litellm/pull/49833))
  - ElevenLabs diarized transcription ([#48435](https://github.com/BerriAI/litellm/pull/48435))
  - A cloro search provider ([#50347](https://github.com/BerriAI/litellm/pull/50347))
  - Mistral retirement dates in the model map ([#50294](https://github.com/BerriAI/litellm/pull/50294))
- **Dify landed nothing on model support today.** The only related item is exploratory Python 3.14 readiness ([#43768](https://github.com/langgenius/dify/issues/43768)). Its proposed DXMT vector backend was closed without merging ([#45732](https://github.com/langgenius/dify/issues/45732), [#45733](https://github.com/langgenius/dify/pull/45733)).
- **No hardware or architecture support** (GPUs, new accelerators, model architectures) appears in this data.

## 4. Performance Frontier
The data has no activity on KV cache, batching, quantization, distributed serving or kernels. The optimization work is higher in the stack:
- **Cost-aware routing and caching (LiteLLM).**
  - [#50321](https://github.com/BerriAI/litellm/pull/50321) pins repeated `/v1/responses` calls to the deployment holding the cached prompt. This is gateway-level prefix-cache affinity.
  - It is being backported to LTS in [#50382](https://github.com/BerriAI/litellm/pull/50382).
  - Bedrock native structured output is the other cost lever.
- **Gateway overhead (LiteLLM).** SAP GenAI Hub adds about 870 ms per call from two blocking GETs ([#47096](https://github.com/BerriAI/litellm/issues/47096)), and no fix PR is listed.
- **Database cost (Dify).** In [#45734](https://github.com/langgenius/dify/issues/45734), `paginate_query` keeps `ORDER BY` and a wide projection inside the `COUNT` subquery. PostgreSQL then sorts every matching row, which saturates read IOPS. No measured numbers are given. Two competing fixes are open ([#45735](https://github.com/langgenius/dify/pull/45735), [#45737](https://github.com/langgenius/dify/pull/45737)).
- **Observability (LiteLLM).** [#50038](https://github.com/BerriAI/litellm/pull/50038) adds a Prometheus counter for tool calls.

## 5. Layer Positioning

| Layer | Project | Today's evidence |
|---|---|---|
| LLM gateway | LiteLLM | Provider translation, budgets and spend counters, guardrails, streaming and usage accounting, LTS branch, signed images |
| Application and orchestration | Dify | Workflows, agents (ReAct parser), knowledge bases and retrieval, plugins and marketplace, MCP OAuth, web UI |
| Serving engine, local runtime, fine-tuning | Not in this data | None |

The two projects are complementary. Dify is a typical consumer of a gateway like LiteLLM. Failures at the gateway layer, such as dropped reasoning state, usage loss and silent stream errors, show up as agent-level bugs in applications.

## 6. Trend Signals
1. **Silent failures are the main risk class.** Examples:
   - Dify drops ReAct tool calls when JSON strings contain braces ([#45740](https://github.com/langgenius/dify/issues/45740)), and external knowledge bases with a NULL `retrieval_model` return empty results ([#45724](https://github.com/langgenius/dify/issues/45724)).
   - LiteLLM does not tell Anthropic clients about upstream stream failures ([#49711](https://github.com/BerriAI/litellm/issues/49711)), and truncated streams are logged as success with lost cached-token accounting ([#47332](https://github.com/BerriAI/litellm/issues/47332)).
2. **Reasoning and tool-call state is fragile across providers.** Encrypted reasoning, `reasoning_effort="none"` and trailing tool calls are mishandled on several paths ([#47924](https://github.com/BerriAI/litellm/issues/47924), [#49046](https://github.com/BerriAI/litellm/issues/49046), [#47577](https://github.com/BerriAI/litellm/issues/47577)). Multi-turn agent loops are the most exposed.
3. **Budget enforcement is soft.** Spend counters expiring after 60 s can let a key exceed `max_budget` ([#45974](https://github.com/BerriAI/litellm/pull/45974), open).
4. **Gateways are adopting enterprise release practices.** These include LTS branches, cosign-signed images, and guardrails that extend to new routes. The last is a behavior-changing PR: [#48946](https://github.com/BerriAI/litellm/pull/48946).
5. **Self-hosted platforms have operational debt.** Examples are the Dify plugin daemon uid 1001 versus root-owned volumes ([#45597](https://github.com/langgenius/dify/issues/45597)), and marketplace dependencies that abort upgrades ([#45723](https://github.com/langgenius/dify/issues/45723)).

**What agent and application developers should do:**
- Treat an error event inside a 200 stream as a failure.
- Don't rely on `max_budget` as a hard cap, and add spend alerts.
- Set `thinking` explicitly instead of relying on `reasoning_effort="none"`.
- Register custom models explicitly so `tools` aren't dropped ([#48145](https://github.com/BerriAI/litellm/issues/48145)).
- Check Dify `plugin_daemon` volume ownership.
- Avoid braces in ReAct string arguments, or use function-calling mode, until [#45741](https://github.com/langgenius/dify/pull/45741) lands.
- Watch PostgreSQL IOPS on conversation lists.
- Consider pinning to LiteLLM's 1.108 LTS branch for stability.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-06

## 1. Today's Highlights
No release shipped in the last 24h. Activity centers on an unbounded-cost PostgreSQL pagination bug (#45734) that already has two competing fixes, and on regressions in 1.18/1.19 around plugin install and marketplace upgrades. The `api/` session-handling refactor (#45584) is also drawing a steady stream of contributor PRs.

## 2. Releases & Breaking Changes
No new releases.
- Related to the 1.19.0 plugin install failure: since plugin daemon 0.6.12 the container runs as uid 1001, but `./volumes/plugin_daemon` is created as root on fresh installs, so installs fail with `mkdir`. Upgraded installs still hold root-owned files. Self-hosters should check volume ownership. Issue [#45597](https://github.com/langgenius/dify/issues/45597) was closed; the fix PR [#45615](https://github.com/langgenius/dify/pull/45615) (docker: initialize plugin daemon storage permissions) was also closed today, so check whether it merged or was superseded.

## 3. New Model & Hardware Support
Nothing landed today.
- [#45732](https://github.com/langgenius/dify/issues/45732) / [#45733](https://github.com/langgenius/dify/pull/45733): a proposal and PR to add DXMT (a Rust, HNSW/BM25 hybrid store) as a vector backend (`VECTOR_STORE=dxmt`). Both were closed without merging.
- [#43768](https://github.com/langgenius/dify/issues/43768): a good-first-issue to check dependency readiness for Python 3.14. It is exploratory only.

## 4. Performance & Optimization
- **Pagination count query** ([#45734](https://github.com/langgenius/dify/issues/45734)): `paginate_query` keeps `ORDER BY` and the wide ORM projection inside the `COUNT` subquery. PostgreSQL then sorts every matching row, which saturates read IOPS on conversation listings. The issue gives no measured numbers in the data provided. Two fixes are open: [#45735](https://github.com/langgenius/dify/pull/45735) and [#45737](https://github.com/langgenius/dify/pull/45737). The maintainers need to pick one.
- [#45738](https://github.com/langgenius/dify/pull/45738): removes redundant `server_default` from the workflow run models. This is cleanup with no runtime effect.
- [#45392](https://github.com/langgenius/dify/pull/45392): replaces `crypto.randomUUID` with a fallback, so the web UI works when self-hosted over plain HTTP on a LAN.

## 5. Stability & Regressions
Ranked by severity:
1. **[#45734](https://github.com/langgenius/dify/issues/45734)** (1.18.0): the count-query IOPS saturation described above. Fix PRs: #45735 and #45737.
2. **[#45723](https://github.com/langgenius/dify/issues/45723)** (1.18.0): a 404 from the marketplace install-count endpoint aborts manual plugin upgrades with HTTP 500. No fix PR is listed.
3. **[#45673](https://github.com/langgenius/dify/issues/45673)**: after a TXT upload in the first turn, the agent node errors on the second turn. No fix is linked.
4. **[#45740](https://github.com/langgenius/dify/issues/45740)**: the ReAct parser counts braces inside JSON strings, so the action payload closes early and the tool call is silently skipped. Fix: [#45741](https://github.com/langgenius/dify/pull/45741).
5. **[#45724](https://github.com/langgenius/dify/issues/45724)**: a NULL `retrieval_model` on an external knowledge base makes the retrieval node silently return empty results. No fix is linked.
6. **[#45705](https://github.com/langgenius/dify/issues/45705)**: MCP OAuth `start_authorization` appends `?` unconditionally, giving a double `?` when `authorization_endpoint` already has query params. No fix is linked.
7. **Closed today**:
   - [#45684](https://github.com/langgenius/dify/issues/45684): OpenAPI form arrays were sent as a Python list string. Fix PR [#45685](https://github.com/langgenius/dify/pull/45685) was closed.
   - [#45625](https://github.com/langgenius/dify/issues/45625): webhook JSON booleans were accepted for Number parameters. PR [#45626](https://github.com/langgenius/dify/pull/45626) was closed.
   - [#45701](https://github.com/langgenius/dify/issues/45701): workflow file defaults ignored the configured upload size limits.
   - [#40003](https://github.com/langgenius/dify/issues/40003): Agent V2 sent empty system prompts and tool descriptions to Bedrock.
8. **Frontend issues**:
   - [#45712](https://github.com/langgenius/dify/issues/45712) and [#45715](https://github.com/langgenius/dify/issues/45715): the Audio and Video players keep or reset playback state incorrectly.
   - [#45718](https://github.com/langgenius/dify/issues/45718): the clipboard fallback drops keyboard focus.
   - [#45658](https://github.com/langgenius/dify/issues/45658): a flaky test.
   - [#43241](https://github.com/langgenius/dify/pull/43241): fixes numeric `0` being rejected in required Number inputs.
   - [#45669](https://github.com/langgenius/dify/pull/45669): fixes Question Classifier fields becoming unclickable.

## 6. What This Means for Application Developers
- **Self-hosters on 1.18/1.19:** check `plugin_daemon` volume ownership (uid 1001). Expect manual plugin upgrades to fail while the marketplace install-count endpoint 404s.
- **ReAct agents:** tool arguments containing `{` or `}` inside strings may be dropped silently until #45741 lands. For now, avoid braces in string arguments or prefer function-calling mode.
- **Conversation-heavy deployments:** watch PostgreSQL read IOPS on the conversation list endpoints until the pagination fix merges.
- **External knowledge bases:** make sure `retrieval_model` is non-NULL. Otherwise retrieval returns empty with no error.
- **MCP OAuth:** a provider whose authorization endpoint already contains query parameters will produce a malformed URL.
- **OpenAPI tools and webhooks:** form-encoded arrays and boolean-as-number validation are still open correctness gaps, because the fix PRs were closed.
- **Maintainers' roadmap:** the `db.session` to explicit-session refactor ([#45584](https://github.com/langgenius/dify/issues/45584), PRs [#45587](https://github.com/langgenius/dify/pull/45587) and [#45736](https://github.com/langgenius/dify/pull/45736)) and the move of web tests to Browser Mode ([#45742](https://github.com/langgenius/dify/pull/45742)) are ongoing.
- **Large in-flight feature:** the builder's native execution and workflow editing ([#44451](https://github.com/langgenius/dify/pull/44451)) is still open.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-06

## 1. Today's Highlights
LiteLLM shipped **v1.108.1** (signed Docker images, cosign), and a **1.108 LTS** line is now receiving backports, including prompt-caching affinity for `/v1/responses` and Bedrock fixes. Most of the day's activity concerns LLM translation correctness: reasoning/thinking handling, tool-call mapping, and streaming usage. Support for the newest Claude models (Opus 5.5, Fable 5.1, Sonnet 5, Haiku 5.5) on Bedrock continues to land.

## 2. Releases & Breaking Changes
- **v1.108.1**: The release notes in the data are truncated to the cosign signature-verification section. Verify images with the key introduced in [commit e82a3c6](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). I can't confirm the functional changes from the data provided.
- **Breaking (open PR):** [#48946](https://github.com/BerriAI/litellm/pull/48946) `fix(guardrails)!` makes native-hook guardrails such as hide-secrets scan `/v1/extraction`, `/v1/systemone` and `/v1/decisions` text. Requests on those routes may start getting masked or blocked once it merges.
- **LTS backports to `lts/1.108.x`:** [#50382](https://github.com/BerriAI/litellm/pull/50382) (Responses prompt-caching affinity), [#50401](https://github.com/BerriAI/litellm/pull/50401) (Bedrock Converse `s3://` media), [#50399](https://github.com/BerriAI/litellm/pull/50399) (Bedrock cross-model conversation continuation).

## 3. New Model & Hardware Support
- **Bedrock native structured output:** [#50221](https://github.com/BerriAI/litellm/pull/50221) (open) defaults to Bedrock's native JSON schema output on Opus 5.5, Fable 5.1, Sonnet 5 and Haiku 5.5 in every thinking mode. It replaces the forced JSON tool.
- **Bedrock Nova Sonic:** [#49833](https://github.com/BerriAI/litellm/pull/49833) adds realtime guardrails for typed text, tool outputs and spoken transcripts.
- **ElevenLabs:** [#48435](https://github.com/BerriAI/litellm/pull/48435) adds `diarized_json` transcription and multi-channel speaker labels.
- **Search provider:** [#50347](https://github.com/BerriAI/litellm/pull/50347) adds cloro to `/v1/search`, with Google AI Overview in `provider_metadata`. The author discloses they work at cloro.
- **Model map:** [#50294](https://github.com/BerriAI/litellm/pull/50294) adds verified Mistral retirement dates. [#50402](https://github.com/BerriAI/litellm/pull/50402) adds the OpenAI `o1` deprecation source (closed).

## 4. Performance & Optimization
- **Bedrock structured output:** [#50221](https://github.com/BerriAI/litellm/pull/50221) reports roughly 20–50% lower cost than the forced-tool approach on chat completions and Responses. The data cuts off before the rest of the numbers.
- **Prompt caching:** [#50321](https://github.com/BerriAI/litellm/pull/50321) pins repeated `/v1/responses` requests to the deployment that holds the cached prompt.
- **SAP GenAI Hub overhead:** [#47096](https://github.com/BerriAI/litellm/issues/47096) reports two blocking GETs per call, about 870 ms of overhead. No fix PR is listed.
- **Observability:** [#50038](https://github.com/BerriAI/litellm/pull/50038) adds a Prometheus counter for tool calls by tool name.
- **Typing:** [#49986](https://github.com/BerriAI/litellm/pull/49986) clears 1098 basedpyright `Any` errors across 306 files.

## 5. Stability & Regressions
Ranked by severity. Fix PRs are noted only where the data shows one.

1. **Budget bypass risk:** [#45974](https://github.com/BerriAI/litellm/pull/45974) (open) fixes spend counters expiring after 60 s. That let a key past its `max_budget` through before the batched DB write caught up. Related: [#47396](https://github.com/BerriAI/litellm/issues/47396) (closed) found budget reservation using `max_input_tokens` for Anthropic-format `tool_choice` on `/v1/messages`.
2. **Silent failures on streams:**
   - [#49711](https://github.com/BerriAI/litellm/issues/49711): after an SSE keepalive opens the stream, Anthropic clients aren't told that the upstream failed.
   - [#47332](https://github.com/BerriAI/litellm/issues/47332) (closed): a stream cut before the usage chunk is logged as success with locally counted usage, so cached tokens are lost and billed at the full input rate.
   - [#50156](https://github.com/BerriAI/litellm/issues/50156): on v1.108.0, OpenRouter streaming emits an empty post-finish choice without usage.
3. **Correctness in tool and reasoning translation:**
   - [#48145](https://github.com/BerriAI/litellm/issues/48145): JSON-defined openai-like providers lose `tools` when the model isn't in the catalog.
   - [#47924](https://github.com/BerriAI/litellm/issues/47924): `reasoning_effort="none"` omits thinking instead of disabling it on default-on Claude models.
   - [#49359](https://github.com/BerriAI/litellm/issues/49359): MCP tool failures drop the `is_error` flag.
   - [#48384](https://github.com/BerriAI/litellm/issues/48384) (closed): Anthropic `server_tool_use` was returned as a pending `tool_call`, so agent clients looped.
   - [#47046](https://github.com/BerriAI/litellm/issues/47046): Vertex/Gemini context caching reorders the conversation and drops `system_instruction`.
   - [#47577](https://github.com/BerriAI/litellm/issues/47577): Gemini schema handling drops trailing tool calls.
   - [#49046](https://github.com/BerriAI/litellm/issues/49046): the `chatgpt/` provider drops encrypted reasoning on `/v1/messages`.
   - [#50024](https://github.com/BerriAI/litellm/issues/50024) (closed): the Azure Messages-to-Responses path drops encrypted reasoning.
   - [#48813](https://github.com/BerriAI/litellm/issues/48813) (closed): OCI Gemini ignores all but the last system message.
   - [#48568](https://github.com/BerriAI/litellm/issues/48568): `github_copilot` list-form system content isn't flattened.
   - [#49969](https://github.com/BerriAI/litellm/issues/49969) (closed): Bedrock replays `reasoningText.signature` to non-Anthropic models. Backport [#50399](https://github.com/BerriAI/litellm/pull/50399) targets the LTS line.
4. **Config and parameter handling:**
   - [#50248](https://github.com/BerriAI/litellm/issues/50248): `COHERE_API_BASE` is ignored for embeddings.
   - [#50219](https://github.com/BerriAI/litellm/issues/50219) (closed): Vertex TTS ignores `vertex_location`.
   - [#47822](https://github.com/BerriAI/litellm/issues/47822): the `httpx.Timeout` connect timeout is collapsed for most non-OpenAI providers.
   - [#47327](https://github.com/BerriAI/litellm/issues/47327): `token_counter` rejects image detail `"original"`, so the context-window pre-check is skipped.
   - [#26444](https://github.com/BerriAI/litellm/issues/26444) (closed): `temperature` was still reported as supported on Claude Opus 4.7.
6. **Integrations:** [#45584](https://github.com/BerriAI/litellm/issues/45584): the Langfuse callback drops traces for the decisions routes.
7. **CI:** [#49038](https://github.com/BerriAI/litellm/issues/49038) (closed): the Google Interactions spec canary went red.

## 6. What This Means for Application Developers
- **Streaming clients:** with `sse_keepalive_ping_interval_seconds` enabled, treat an error event inside a 200 stream as a failure ([#49711](https://github.com/BerriAI/litellm/issues/49711)). Don't rely on usage chunks alone for billing reconciliation ([#47332](https://github.com/BerriAI/litellm/issues/47332)).
- **Claude reasoning:** don't assume `reasoning_effort="none"` disables thinking on default-on models ([#47924](https://github.com/BerriAI/litellm/issues/47924)). Verify `thinking` is set explicitly. For `chatgpt/`, Azure responses bridges and Gemini-based agents, test multi-turn tool loops, because reasoning state and trailing tool calls are being dropped.
- **Budgets:** don't depend on `max_budget` as a hard cap until [#45974](https://github.com/BerriAI/litellm/pull/45974) merges. Add an alert on spend as well.
- **Custom providers:** register models explicitly (catalog or `model_info`) so that `tools` aren't dropped ([#48145](https://github.com/BerriAI/litellm/issues/48145)).
- **Production pinning:** teams that want stability can track the **1.108 LTS** branch. It is getting the Responses cache-affinity and Bedrock fixes.
- **Guardrails:** if you use hide-secrets-style guardrails on extraction or decisions routes, plan for behavior changes once [#48946](https://github.com/BerriAI/litellm/pull/48946) lands.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
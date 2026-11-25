# AI Infrastructure Digest 2026-11-26

> Generated: 2026-11-25 17:46 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-11-26

**Scope caveat:** Only two digests were supplied: **Dify** (an LLM app platform) and **LiteLLM** (an LLM gateway). There was no digest for any inference engine (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning framework (Unsloth). I didn't invent data for them. Sections 3 and 4 are therefore thin, and I've marked where evidence is missing.

## 1. Ecosystem Overview
Today's activity sits in the control-plane layer above the model, not in the engine. Both projects spent the day on correctness and trust boundaries: silent failures in RAG retrieval, guardrails, spend accounting and stream termination. LiteLLM shipped five releases across four version lines, which shows a mature multi-track release process. Dify shipped no release but is preparing a flag-gated App Builder and a permission-model change. Self-hosted engines (vLLM, SGLang) appear only as upstream dependencies whose failure modes the gateway must handle.

## 2. Activity Comparison
Counts are the distinct issues and PRs cited in each digest. They are not repository totals, and the digests don't give totals.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | ~17 (4 closed, 1 spam) | ~18 | No release in 24h |
| LiteLLM | ~18 (3 closed) | ~15 | 5 releases: v1.112.0-rc.1, v1.111.0, v1.110.4, v1.109.5, LTS v1.108.17. LTS 1.108.18 is queued via merged [#54464](https://github.com/BerriAI/litellm/pull/54464) |

- Dify's [#47213](https://github.com/langgenius/dify/issues/47213) is flagged in its digest as PR-style, so Dify's issue and PR counts may be off by one.
- Many of LiteLLM's issues are old (#37xxx–#40xxx), so its issue count reflects backlog triage, not new reports.
- Fix coverage: Dify has about 6 explicit fix PRs against about 12 ranked defects. LiteLLM has about 8 open fix PRs, and several top bugs ([#47605](https://github.com/BerriAI/litellm/issues/47605), [#54369](https://github.com/BerriAI/litellm/issues/54369), [#54435](https://github.com/BerriAI/litellm/issues/54435)) have none.

## 3. Model Support Race
Neither project shipped a new frontier model or architecture today.

- **Dify:** Nothing new on models or hardware.
- **LiteLLM:**
  - Volcengine Ark Seedream image generation, editing and pricing ([#54076](https://github.com/BerriAI/litellm/pull/54076), open).
  - Provider-shaped embeddings `extra_body` for Vertex, Gemini, SageMaker Cohere and Bedrock Marengo 3 ([#54273](https://github.com/BerriAI/litellm/pull/54273)).
  - ElevenLabs speech-to-text fixes ([#31720](https://github.com/BerriAI/litellm/pull/31720)).
- **Pricing gap:** Azure AI Foundry `Microsoft-Decision-1.1` lacks Data Zone rates ([#53787](https://github.com/BerriAI/litellm/issues/53787)).

**Who is ahead:** LiteLLM, by default, since model coverage is its job. The signal here is a move into **multimodal and non-text endpoints** (image, audio, embeddings), and away from chat-only coverage. For architecture and hardware support, the engines are where the race is, and no digest covers them, so I can't call a leader.

## 4. Performance Frontier
There is no KV-cache, batching, quantization, distributed-serving or kernel work in either digest. What the data shows is gateway-side efficiency:

- **Guardrail hot path:** `_sync_guardrail_info_to_logging_obj` is reported as O(N³) per request and blocks the event loop ([#54435](https://github.com/BerriAI/litellm/issues/54435), no fix PR).
- **Latency:** An intermittent ~16.7s TTFB on streaming Bedrock `/v1/messages` was closed ([#38689](https://github.com/BerriAI/litellm/issues/38689)). The digest doesn't say how it was resolved.
- **Rust and FIPS:** The Rust bridge's Postgres login and virtual-key hashing move into the AWS-LC FIPS module ([#54425](https://github.com/BerriAI/litellm/pull/54425), [#54423](https://github.com/BerriAI/litellm/pull/54423)). With `LITELLM_RUST=true`, rate-limit gauges also update on the Rust path ([#54383](https://github.com/BerriAI/litellm/pull/54383)).
- **Dify:** Efficiency work is about waste, not speed. RAG overview polling after indexing ended ([#46699](https://github.com/langgenius/dify/issues/46699)), duplicated workflow graph JSON on every run ([#47158](https://github.com/langgenius/dify/issues/47158)), and TanStack Query cache invalidation ([#47148](https://github.com/langgenius/dify/pull/47148)). No throughput or latency numbers were reported.

Engine-level optimization effort is not observable in this data set.

## 5. Layer Positioning
| Project | Layer | Today's concerns |
|---|---|---|
| **LiteLLM** | Gateway / proxy. Sits between clients and providers, including self-hosted vLLM and SGLang | Protocol translation (Vertex/Gemini, Bedrock, Responses API, Ollama), guardrails, spend and rate limits, MCP auth |
| **Dify** | Application platform above the gateway. Covers workflows, RAG, agents, plugins, RBAC | Vector-store correctness (OpenSearch, Elasticsearch), custom-tool OpenAPI handling, SDK and CLI, permissions |
| Serving engines, local runtimes, fine-tuning | Not covered today | n/a |

The two are complementary. Dify consumes model endpoints, and LiteLLM is a common way to supply them. A fault in the lower layer, such as LiteLLM hiding a vLLM stream abort ([#54466](https://github.com/BerriAI/litellm/pull/54466)), appears upstream as a silent success. Dify's own Knowledge Retrieval has the same flaw ([#47115](https://github.com/langgenius/dify/issues/47115)).

## 6. Trend Signals
1. **Silent failure is the dominant bug class.** Both projects report operations that look successful but aren't:
   - Dify: Knowledge Retrieval success when all dataset searches fail ([#47115](https://github.com/langgenius/dify/issues/47115)); OpenSearch `text_exists()` always False ([#47109](https://github.com/langgenius/dify/issues/47109)).
   - LiteLLM: truncated streams reported as clean finishes ([#54466](https://github.com/BerriAI/litellm/pull/54466)); Presidio `logging_only` masking client output ([#47605](https://github.com/BerriAI/litellm/issues/47605)); transcription skipping `post_call` guardrails ([#54471](https://github.com/BerriAI/litellm/pull/54471)).
2. **Guardrail and policy enforcement is leaky.** Examples are the parallel-limit bypass ([#54469](https://github.com/BerriAI/litellm/pull/54469)), Dify's sandbox hosted-model quota ([#47207](https://github.com/langgenius/dify/pull/47207)), and the permission rescoping to `plugin_model_config` ([#47210](https://github.com/langgenius/dify/pull/47210)).
3. **MCP auth is maturing.** LiteLLM is moving to explicit 401 challenges and dropping rejected tokens ([#54459](https://github.com/BerriAI/litellm/pull/54459), [#54458](https://github.com/BerriAI/litellm/pull/54458), [#54456](https://github.com/BerriAI/litellm/pull/54456)).
4. **Spend accounting is unreliable under streaming.** Client disconnects under-record spend ([#46499](https://github.com/BerriAI/litellm/issues/46499)). Azure Data Zone pricing is incomplete.
5. **Release hygiene.** LiteLLM runs signed releases (cosign) and an LTS track (1.108.x).
6. **Agent features are moving into app platforms.** Dify's App Builder ([#47022](https://github.com/langgenius/dify/pull/47022)) and async agent steering ([#47200](https://github.com/langgenius/dify/issues/47200)) point this way.

**What developers should do:**
- Treat success status as unverified. Check for empty retrieval results and clean-finish markers on streams, and retry on suspect truncation.
- Pin LiteLLM to the LTS line, and treat v1.112.0-rc.1 as pre-production. The digest's release notes were truncated, so read the release pages for breaking changes before upgrading.
- Reconcile spend against provider billing.
- For startup resilience, avoid depending on the import-time cost-map fetch ([#54369](https://github.com/BerriAI/litellm/issues/54369)).
- With OpenSearch or Elasticsearch behind Dify, expect dedup and deletion bugs ([#47109](https://github.com/langgenius/dify/issues/47109), [#46995](https://github.com/langgenius/dify/issues/46995)).
- Audit custom Dify roles before [#47210](https://github.com/langgenius/dify/pull/47210) ships.
- To make this a full ecosystem report, add digests for vLLM, SGLang, llama.cpp, Ollama and Unsloth.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-26

(Dify is an LLM app platform, not an inference engine. Sections that don't apply are noted as such.)

## 1. Today's Highlights
No release shipped in the last 24h. Activity centered on two things. The first is the **Dify App Builder**, which generates editable Workflow/Chatflow drafts from natural language ([PR #47022](https://github.com/langgenius/dify/pull/47022)). The second is a wave of web-side cache and collaboration refactors. A cluster of retrieval and vector-store correctness bugs was also reported, notably Knowledge Retrieval reporting success when every dataset search fails ([#47115](https://github.com/langgenius/dify/issues/47115)).

## 2. Releases & Breaking Changes
No releases.

Behavior and permission changes in open PRs:
- **Permission scope change:** model configuration endpoints (default models, custom models, enable/disable, load balancing) would move from `plugin_preferences` to `plugin_model_config` ("Configure models") in both the console API and OpenAPI ([PR #47210](https://github.com/langgenius/dify/pull/47210)). Custom roles may need the new permission.
- **Hosted quota enforcement:** Sandbox workspaces with trial credits would no longer be able to call paid-only hosted LLMs ([PR #47207](https://github.com/langgenius/dify/pull/47207)).
- **URL change:** the `?dialog=system-models` parameter is removed. The system model dialog becomes a global handle ([PR #47211](https://github.com/langgenius/dify/pull/47211)).

## 3. New Model & Hardware Support
Nothing new on models or hardware today.

Related feature work:
- **Dify App Builder:** off by default and enabled with `DIFY_BUILDER_ENABLED` ([PR #47022](https://github.com/langgenius/dify/pull/47022)).
- **CSV export of conversational app logs** for Chatflow, Chatbot and legacy Agent apps. It uses the existing paid-plan entitlement on Cloud ([PR #46799](https://github.com/langgenius/dify/pull/46799)).
- **Proposed:** async agent steering ([#47200](https://github.com/langgenius/dify/issues/47200)) and date/datetime fields for Human Input forms ([#46911](https://github.com/langgenius/dify/issues/46911)).

## 4. Performance & Optimization
No throughput or latency numbers were reported. Efficiency-related items:
- **Polling waste (closed):** the new RAG overview kept polling metrics after indexing finished ([#46699](https://github.com/langgenius/dify/issues/46699)).
- **Storage amplification (closed):** every published workflow run duplicated an identical graph JSON ([#47158](https://github.com/langgenius/dify/issues/47158)).
- **Cache correctness:** policy invalidation could keep data read before a write, because TanStack Query doesn't restart some in-flight fetches ([PR #47148](https://github.com/langgenius/dify/pull/47148)). Related cache refactors are in [#47144](https://github.com/langgenius/dify/pull/47144) and [#47145](https://github.com/langgenius/dify/pull/47145). The latter is described as having no behavior change.

## 5. Stability & Regressions
Ranked by severity:

1. **Knowledge Retrieval reports success when all dataset searches fail.** This is silent data loss for RAG pipelines. Fix PR: [#47206](https://github.com/langgenius/dify/pull/47206). Issue: [#47115](https://github.com/langgenius/dify/issues/47115).
2. **OpenSearch `text_exists()` always returns False for indexed chunks.** It queries `_id` instead of `metadata.doc_id`, so duplicate checks fail. No fix PR seen. Issue: [#47109](https://github.com/langgenius/dify/issues/47109).
3. **Elasticsearch `delete_by_metadata_field` over-deletes and under-deletes.** It removes other annotations whose id shares a token and caps at 10 documents. No fix PR seen. Issue: [#46995](https://github.com/langgenius/dify/issues/46995).
4. **Plugin upgrade HTTP 500 (closed).** Unguarded install-count telemetry broke valid cached upgrades ([#45747](https://github.com/langgenius/dify/issues/45747)).
5. **Custom tool request-building bugs.** No fix PRs seen for these:
   - Null is sent for untyped body properties (enum/oneOf/allOf) ([#46633](https://github.com/langgenius/dify/issues/46633)).
   - A request body given as a `$ref` to `components/requestBodies` is ignored ([#46501](https://github.com/langgenius/dify/issues/46501)).
   - Unset optional header and cookie params are sent as empty or "None" ([#46010](https://github.com/langgenius/dify/issues/46010)).
6. **Speech-to-text returns 415 for `audio/mpeg` and `audio/x-wav`.** Fix PR: [#47204](https://github.com/langgenius/dify/pull/47204). Issue: [#47202](https://github.com/langgenius/dify/issues/47202).
7. **Exported chat app DSL omits the rerank model plugin dependency.** Fix PR: [#47205](https://github.com/langgenius/dify/pull/47205). Issue: [#47203](https://github.com/langgenius/dify/issues/47203).
8. **XLSX knowledge import fails on workbooks with a chart sheet.** No fix PR seen. Issue: [#47189](https://github.com/langgenius/dify/issues/47189).
9. **`difyctl` reports a finished workflow as suspended after human input.** Issue: [#47190](https://github.com/langgenius/dify/issues/47190).
10. **Node.js SDK omits `inputs`, which the server requires.** Fix PR: [#47214](https://github.com/langgenius/dify/pull/47214). Issue: [#47213](https://github.com/langgenius/dify/issues/47213). Note that [#47213](https://github.com/langgenius/dify/issues/47213) is itself a PR-style report.
11. **Zero rejected in required Number inputs.** Fix PR: [#43241](https://github.com/langgenius/dify/pull/43241).
12. **Collaboration CRDT bypass.** Onboarding and snippet inserts wrote to the raw React Flow store and were not synced. Fixes: [#47173](https://github.com/langgenius/dify/pull/47173), plus a lint rule to prevent recurrence ([#47174](https://github.com/langgenius/dify/pull/47174)).

CI flake fixes were also merged ([#47209](https://github.com/langgenius/dify/pull/47209), [#47208](https://github.com/langgenius/dify/pull/47208), [#47199](https://github.com/langgenius/dify/pull/47199)).

Issue [#46870](https://github.com/langgenius/dify/issues/46870) is spam, closed.

## 6. What This Means for Application Developers
- **RAG:** don't rely on Knowledge Retrieval's success status until [#47206](https://github.com/langgenius/dify/pull/47206) lands. Add checks for empty results. If you use OpenSearch or Elasticsearch as the vector store, expect dedup and annotation-deletion bugs.
- **OpenAPI custom tools:** avoid `$ref` request bodies, typeless enum/oneOf/allOf properties, and optional header or cookie params for now. Otherwise, inline the schemas.
- **SDK/CLI:** on the Node.js SDK, pass `inputs: {}` explicitly until [#47214](https://github.com/langgenius/dify/pull/47214) merges. Don't trust `difyctl` status after human-input steps.
- **Audio:** if speech-to-text returns 415 on MP3/WAV, the MIME label is the cause. Re-label or wait for [#47204](https://github.com/langgenius/dify/pull/47204).
- **DSL export/import:** manually re-add the rerank plugin when migrating chat apps.
- **Admins:** audit custom roles before [#47210](https://github.com/langgenius/dify/pull/47210) ships. Sandbox workspaces will lose access to paid hosted models ([#47207](https://github.com/langgenius/dify/pull/47207)).
- **Watch:** App Builder ([#47022](https://github.com/langgenius/dify/pull/47022)) is flag-gated.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-26

## 1. Today's Highlights
LiteLLM shipped five releases across four lines in 24h: v1.112.0-rc.1, v1.111.0, v1.110.4, v1.109.5 and the LTS v1.108.17. A new LTS patch, 1.108.18, was cut by PR #54464, which has been merged. Most of today's work is MCP auth hardening (three PRs from one author) and fixes to streaming and cost accounting. Several open bugs affect guardrails, spend tracking and import-time stability.

## 2. Releases & Breaking Changes
- **v1.112.0-rc.1**: release candidate for the next minor.
- **v1.111.0**, **v1.110.4**, **v1.109.5**: concurrent releases across three minor lines.
- **v1.108.17 (LTS)**: the `lts` image tag points to the latest LTS patch.
- **Next LTS patch**: [PR #54464](https://github.com/BerriAI/litellm/pull/54464) bumped `lts/1.108.x` to 1.108.18. The `enterprise/` and `litellm-proxy-extras/` packages are unchanged.
- **Image verification**: all releases are signed. Verify them with `cosign verify` against the `project-releaser` workflow identity.
- **Changelog detail**: the release notes in the data were truncated, so I can't list specific breaking changes. Check the release pages before upgrading.
- **Backports**: LTS receives selected fixes ([#54466](https://github.com/BerriAI/litellm/pull/54466), [#54383](https://github.com/BerriAI/litellm/pull/54383)). These are covered below.

## 3. New Model & Hardware Support
- **Volcengine Ark Seedream**: [PR #54076](https://github.com/BerriAI/litellm/pull/54076) adds image generation, editing and pricing. Until now Seedream went through the generic OpenAI-compatible fallback. That fallback dropped Ark's per-image fields, couldn't edit, and had no cost rows. The PR is open.
- **Azure AI Foundry pricing gap**: [#53787](https://github.com/BerriAI/litellm/issues/53787) reports that `azure_ai/Microsoft-Decision-1.1` has only a Global rate. The US and EU Data Zone prices are missing, so spend is understated for Data Zone deployments.
- **Embeddings `extra_body`**: [PR #54273](https://github.com/BerriAI/litellm/pull/54273) places provider-shaped `extra_body` fields at the documented path for Vertex, Gemini, SageMaker Cohere and Bedrock Marengo 3. Caller values win over generated defaults.
- **ElevenLabs speech-to-text**: [PR #31720](https://github.com/BerriAI/litellm/pull/31720) fixes form encoding and multichannel transcripts, and adds an output guardrail.

## 4. Performance & Optimization
- **Guardrail overhead**: [#54435](https://github.com/BerriAI/litellm/issues/54435) says `_sync_guardrail_info_to_logging_obj` costs O(N³) per request. It re-passes the whole accumulated list and blocks the event loop when a guardrail records many entries. No fix PR is listed.
- **Time to first byte**: [#38689](https://github.com/BerriAI/litellm/issues/38689) reported intermittent ~16.7s TTFB on streaming `/v1/messages` through Bedrock. It is now closed. The data doesn't say what the resolution was.
- **Prometheus**: [#54269](https://github.com/BerriAI/litellm/issues/54269) requests an opt-in histogram of latency per custom callback hook. It is a feature request.
- **Rate-limit gauges**: [PR #54383](https://github.com/BerriAI/litellm/pull/54383) backports remaining-tokens and remaining-requests gauge updates for streamed `/v1/messages` and Foundry Claude to LTS. With `LITELLM_RUST=true` they also update on the Rust path.
- **Rust and FIPS**: [#54425](https://github.com/BerriAI/litellm/pull/54425) and [#54423](https://github.com/BerriAI/litellm/pull/54423) move the Rust bridge's Postgres login and virtual-key hashing into the AWS-LC FIPS module.

## 5. Stability & Regressions
Ranked by severity. Only items with a stated fix PR are marked as having one.

1. **Streaming aborts hidden** ([PR #54466](https://github.com/BerriAI/litellm/pull/54466), open). On the 1.108 LTS line, when a self-hosted vLLM or SGLang server cut off a stream, clients saw a normal finish and never retried. This affects the OpenAI, azure_ai, Databricks, Vertex Model Garden and text completion routes. The PR makes those streams end with an error.
2. **Presidio `logging_only` masks client responses** ([#47605](https://github.com/BerriAI/litellm/issues/47605), open, no fix PR). The mode should mask only what is logged, but the client gets masked output for both streaming and non-streaming calls.
3. **`post_call` guardrail skipped on transcription** ([PR #54471](https://github.com/BerriAI/litellm/pull/54471), open). `/v1/audio/transcriptions` never ran `post_call_success_hook`, so transcripts came back unmasked when a `default_on` guardrail was set.
4. **Import crash** ([#54369](https://github.com/BerriAI/litellm/issues/54369), open, no fix PR). On 1.105.3, `import litellm` can fail with a `LoggerContext` partial-import error when the cost-map fetch fails at import time. The triggers are DNS failure, connection refused, 429 and 5xx.
5. **Parallel-request limit bypass** ([PR #54469](https://github.com/BerriAI/litellm/pull/54469), open). A failed MCP tool call freed the request's parallel slot early. A key limited to one request at a time could run several.
6. **Spend accounting**:
   - [#46499](https://github.com/BerriAI/litellm/issues/46499): a client disconnect mid-stream logs partial spend, but the provider bills the full output.
   - [#47062](https://github.com/BerriAI/litellm/issues/47062) (closed): a cold end-user spend counter was seeded with the full balance and blocked users under budget.
   - [PR #54470](https://github.com/BerriAI/litellm/pull/54470): stores the cost breakdown for image generation and edit calls.
7. **MCP auth loops**:
   - [PR #54459](https://github.com/BerriAI/litellm/pull/54459): returns 401 with a sign-in challenge instead of 200 when the vendor rejects a per-user login.
   - [PR #54458](https://github.com/BerriAI/litellm/pull/54458) and [PR #54456](https://github.com/BerriAI/litellm/pull/54456): stop resending a stored token the provider has rejected.
   - [#54411](https://github.com/BerriAI/litellm/issues/54411): MCP tool search returns a 500 (open, may be a user error).
8. **Translation bugs**:
   - [#47046](https://github.com/BerriAI/litellm/issues/47046): Vertex/Gemini `cache_control` on a non-prefix message reorders the conversation, and `modify_params` drops `system_instruction`.
   - [#38270](https://github.com/BerriAI/litellm/issues/38270): `/v1/responses` leaks Gemini thought signatures and foreign function-call IDs to other providers.
   - [#49935](https://github.com/BerriAI/litellm/issues/49935): `anthropic.messages.acreate(stream=True)` on Bedrock raises the raw `BedrockError` for stream exception events.
   - [#40069](https://github.com/BerriAI/litellm/issues/40069): the Responses bridge raises `ValueError` on an empty `function_call_arguments.delta`.
   - [#54315](https://github.com/BerriAI/litellm/issues/54315): `JSONDecodeError` in the Ollama chat transformation.
   - [#53716](https://github.com/BerriAI/litellm/issues/53716): `azure_ai` models hit `ContextWindowExceededError` through OpenWebUI.
9. **Tool-call IDs** ([PR #54468](https://github.com/BerriAI/litellm/pull/54468), open). LiteLLM renamed Kimi tool-call IDs on `/v1/messages`, so Claude Code stopped after its first tool call on a Kimi model behind vLLM. The PR keeps the IDs unless the request goes to a Claude model, Anthropic's API, Bedrock or Azure.
10. **Other**:
    - [#39067](https://github.com/BerriAI/litellm/issues/39067): `forward_traceparent_to_llm_provider` makes the provider span a sibling of the LiteLLM span, not a child.
    - [#37670](https://github.com/BerriAI/litellm/issues/37670): deleting a model leaves orphaned fallback references.
    - [#38329](https://github.com/BerriAI/litellm/issues/38329): adding the GitHub Copilot provider fails in non-root containers.

## 6. What This Means for Application Developers
- **Pin to a line.** Use LTS (1.108.x) for stability. Move to 1.111.x only after checking the release notes, and treat 1.112.0-rc.1 as pre-production.
- **Check your guardrails.** If you use Presidio `logging_only` ([#47605](https://github.com/BerriAI/litellm/issues/47605)) or a `post_call` guardrail on transcription ([PR #54471](https://github.com/BerriAI/litellm/pull/54471)), verify what clients actually receive.
- **Add retry logic for aborted streams.** If you run vLLM or SGLang behind LiteLLM on the 1.108 LTS line, upstream failures can look like clean finishes until [PR #54466](https://github.com/BerriAI/litellm/pull/54466) lands.
- **Don't rely on spend caps alone for streaming.** Disconnects under-record spend ([#46499](https://github.com/BerriAI/litellm/issues/46499)), so reconcile against provider billing. Data Zone Azure deployments may also be under-priced ([#53787](https://github.com/BerriAI/litellm/issues/53787)).
- **Harden startup.** The import-time cost-map fetch can crash `import litellm` ([#54369](https://github.com/BerriAI/litellm/issues/54369)). Consider a local cost map or retry on startup in restricted-network environments.
- **MCP users.** Expect behavior changes in auth: 401 challenges instead of silent 200s, and rejected tokens being dropped. Re-test your client sign-in flows.
- **Agent tooling.** If you run Kimi or other non-Claude models behind `/v1/messages`, watch for tool-call ID rewriting until [PR #54468](https://github.com/BerriAI/litellm/pull/54468) lands.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Infrastructure Digest 2026-10-02

> Generated: 2026-10-02 13:30 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-10-02

**Scope:** Only two digests were supplied: Dify (application and workflow platform) and LiteLLM (LLM gateway). No inference-engine, local-runtime or fine-tuning projects (vLLM, SGLang, llama.cpp, Ollama, Unsloth) were in the input. Sections 3 to 5 therefore cover the application and gateway layers only, and I don't infer anything about the missing projects.

## 1. Ecosystem Overview

Activity today sits in the control plane above the model, not in kernels or serving. Neither project shipped a stable release. LiteLLM published only the dev pre-release `v1.105.0-dev.2`, and Dify had no release. The work is correctness, cost accounting and policy enforcement. The main items are Dify's pagination, retrieval and parsing bugs, and LiteLLM's budget, spend-log and guardrail gaps. Both projects also face Cloud/hosted-platform issues. LiteLLM is also dealing with supply-chain hygiene after the PyPI compromise tracker (#24518). Provider breadth is growing mainly through OpenAI-compatible adapters.

## 2. Activity Comparison

Counts come from items cited in the digests, so they are lower bounds. Only LiteLLM's PR total (318) is an explicit figure.

| Project | Issues cited | PRs | Release status |
|---|---|---|---|
| Dify | ~26 (about 5 closed) | 9 named, plus ~15 test-hardening PRs in flight; only 1 bug-fix PR (#43357) | None |
| LiteLLM | ~25 (about 12 closed, many as `stale`) | 318 updated | Dev pre-release `v1.105.0-dev.2`, with only cosign verification notes and no changelog |

- **Dify:** Activity is bug triage plus backend refactoring. Almost none of the cited bug reports has a linked fix PR.
- **LiteLLM:** Activity is PR-driven. Several closures are stale-bot closures, not fixes.

## 3. Model Support Race

There is no head-to-head race. Neither project added new frontier-model or architecture support today.

- **LiteLLM** is the only one adding provider and model coverage:
  - New providers: Tokenify (#44163), ScaleDown with five models and pricing (#44168, #44167), and API Route (#40024).
  - Fixes: the Bedrock Mantle `anthropic-workspace-id` header (#44173) and the Exa search fallback (#42213).
  - Deprecation metadata for seven OpenAI models (#44175). `tts-1`, `tts-1-hd` and `gpt-4o-mini-tts` shut down on 2027-01-06.
  - Open feature request for Gemini Live Avatar in the realtime integration (#43166).
- **Dify** has no model-support changes. #42346, the proposal to auto-generate knowledge-base descriptions with the default LLM, is a proposal only. #43221 is test coverage.
- **Hardware and quantization:** none reported by either project.

**Who is ahead:** LiteLLM, by default, on provider breadth and on deprecation lifecycle tooling. These are not new-architecture wins.

## 4. Performance Frontier

There are no benchmarks, and no KV-cache, batching, quantization, distributed-serving or kernel work today. The only efficiency items are on the gateway hot path:

- **LiteLLM #43293:** `DualCache` writes its Redis tier with `default_redis_ttl`, fixing #43187.
- **LiteLLM #40282:** the streaming chunk builder preserves reasoning tokens and usage, avoiding a `token_counter` fallback when chaining proxies.
- **Dify:** only maintainability work, with no performance numbers. This is the layered-services migration (#39993, #43340, XXL), the `db.session` refactor (#37403) and Pyrefly typing cleanup (#24645).

Optimization effort in this slice is about accuracy of accounting and caching, not throughput.

## 5. Layer Positioning

| Layer | Project | Today's focus |
|---|---|---|
| Application and workflow platform (RAG, agents, apps) | Dify | Retrieval and metadata filter semantics, ingestion parsers (DOCX, Markdown, URL), conversation-variable persistence, Service API pagination, `<think>` leakage |
| LLM gateway and proxy | LiteLLM | Provider translation, budgets and spend, guardrails and redaction, router health, MCP gateway policy (`data_boundary`) |

The two meet at the API boundary: Dify consumes models, and LiteLLM can sit between Dify and providers. Their risks differ:

- **LiteLLM** carries cost, security and policy risk, because it is a shared choke point.
- **Dify** carries data-correctness risk, because bugs silently drop or skip content.

The serving-engine, local-runtime and fine-tuning layers are not represented in this input.

## 6. Trend Signals

1. **Correctness over features.** Both digests are dominated by silent-failure bugs: skipped paginated rows (#43335, #43341), `top_k=0` replaced by 4 (#42981), and spend logs recording $0 (#35691) or undercounting by 6x (#43868). Silent errors are harder to detect than crashes.
2. **Budget and guardrail enforcement is the weak point of gateways.** The budget gap (#43732) has no linked fix. Guardrail bypasses (#30732, #30729) were closed as stale, not confirmed fixed. Redaction may not apply on failed requests (#39387).
3. **MCP is becoming a governed surface.** Data-boundary labels (#44171) and fixes that stop auth and upstream errors from being masked in tool lookup (#44176) show enterprise policy moving to the tool layer. #44171 may break existing mixed-boundary MCP setups when merged.
4. **Reasoning-model handling remains uneven.** `<think>` content leaks into the Dify Service API (#43331), `thinking_blocks` are replayed to OpenAI-compatible backends (#31279), and Gemini `thoughtSignature` is not propagated (#25322).
5. **Coding-agent compatibility drives gateway work.** Codex CLI expects `{"models": [...]}` while LiteLLM's `/models` returns `{"data": [...]}` (#36854). #44177 reports `model_group_alias` limits so 1M-context aliases can be marked `[1m]`.
6. **Test realism is rising in Dify.** About 15 PRs replace mocks with real SQLite and Redis-backed adapters, which should reduce integration regressions over time.
7. **Supply-chain verification is now routine.** #24518 is still open with 118 comments, and LiteLLM release notes consist of cosign verification steps.

**What application and agent developers should do:**

- **Spend caps:** Do not rely on `max_budget` alone. Add provider-side limits and audit spend logs for custom models and non-standard service tiers.
- **Pagination:** Don't use timestamp-only cursors for message history. De-duplicate and re-fetch with overlap.
- **Output handling:** Strip `<think>` blocks client-side.
- **Guardrails:** Test them on `/v1/responses`, `/v1/messages` and multi-turn input. Assume failure logs may contain full prompts.
- **Health checks:** Give each deployment a distinct `litellm_params.model`, since a shared one lets one failure mark all deployments unhealthy (#44154).
- **Ingestion:** Spot-check chunking for DOCX tables and non-standard Markdown fences.
- **Hosted Dify:** Add retries and alerts for the Cloud Workflow LLM-node failure (#43339) and Knowledge API 403s (#43330).
- **Upgrades:** Pin LiteLLM to a released version, not `v1.105.0-dev.2`, and verify cosign signatures. Label MCP servers before adopting `data_boundary`.
- **Migrations:** Move off OpenAI TTS models before 2027-01-06.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest, 2026-10-02

## 1. Today's Highlights

Dify had no release in the last 24h. Activity centered on bug triage and backend refactoring. Many reports are pagination, retrieval and parsing correctness bugs, and two are Cloud-facing: workflow LLM nodes failing and Knowledge API 403s. A large stack of test-hardening PRs (replacing mocks with real adapters) is still open, along with the backend layering and `db.session` refactors.

## 2. Releases & Breaking Changes

No releases today.

Watch items for upgraders:
- [#38403](https://github.com/langgenius/dify/issues/38403): the embedded chatbot reset button reportedly keeps the old `conversation_id`. It is reported as a regression since v1.13.0 and still present on v1.15.0.
- [#43358](https://github.com/langgenius/dify/issues/43358) / [PR #43357](https://github.com/langgenius/dify/pull/43357): moving from `pytz` to `zoneinfo`. The PR fixes `calculate_next_run_at` crashing on DST transitions, which affected Europe/Dublin, Africa/Casablanca and Africa/El_Aaiun. The behavior change is in schedule computation.

## 3. New Model & Hardware Support

Nothing new landed today. Related items:
- [#42346](https://github.com/langgenius/dify/issues/42346): proposal to auto-generate knowledge base descriptions with the default system LLM.
- [PR #43221](https://github.com/langgenius/dify/pull/43221): rerank tests now use a real `ModelInstance` with `RerankModel`. This is test coverage only, with no new model support.

## 4. Performance & Optimization

No performance work was reported with numbers. Relevant maintainability work:
- [#39993](https://github.com/langgenius/dify/issues/39993): migrating API endpoints to layered application services. [PR #43340](https://github.com/langgenius/dify/pull/43340) (size XXL) decouples console API-based extension management.
- [#37403](https://github.com/langgenius/dify/issues/37403) (closed): pass `db.session` explicitly as a parameter. [PR #43322](https://github.com/langgenius/dify/pull/43322) (audio controllers) was closed today.
- [#30269](https://github.com/langgenius/dify/issues/30269): backend modernization roadmap.
- [#35557](https://github.com/langgenius/dify/issues/35557), [#31096](https://github.com/langgenius/dify/issues/31096): removing unnecessary `| None` types and reducing nullable fields in `AppModelConfig`.
- [#24645](https://github.com/langgenius/dify/issues/24645): typing cleanup, with strict Pyrefly PRs [#43347](https://github.com/langgenius/dify/pull/43347) and [#43342](https://github.com/langgenius/dify/pull/43342). Both were closed.

## 5. Stability & Regressions

Ranked by likely impact:

1. **Cloud outage-class reports**
   - [#43339](https://github.com/langgenius/dify/issues/43339): all Workflow apps on Dify Cloud fail in LLM nodes with `Variable key <node>.#sys.query# not found in user inputs.` There is no fix PR yet.
   - [#43330](https://github.com/langgenius/dify/issues/43330): Cloud Knowledge API returns HTTP 403 / error 1010 from Google Cloud Shell. This looks like edge or WAF blocking.

2. **Data correctness**
   - [#43312](https://github.com/langgenius/dify/issues/43312): conversation variables updated in an iteration don't persist in the main flow.
   - [#34417](https://github.com/langgenius/dify/issues/34417) (closed): items lost when appending to an array conversation variable in Iteration.
   - [#43341](https://github.com/langgenius/dify/issues/43341) and [#43335](https://github.com/langgenius/dify/issues/43335): pagination skips rows or messages that share the same timestamp (`created_at`). Four endpoints are affected, including Service API and web app message history.
   - [#42981](https://github.com/langgenius/dify/issues/42981): an explicit `top_k=0` is silently replaced by 4 in the tool-based retrieval path.
   - [#43345](https://github.com/langgenius/dify/issues/43345): the metadata filter "empty" / "not empty" ignores fields stored as null.
   - [#43351](https://github.com/langgenius/dify/issues/43351): knowledge document search is case-sensitive and treats `_` and `%` as wildcards.

3. **Document and agent parsing**
   - [#43359](https://github.com/langgenius/dify/issues/43359): DOCX table extraction drops repeated text and hyperlink paragraphs.
   - [#43356](https://github.com/langgenius/dify/issues/43356): Markdown extraction treats headings inside tilde, indented and longer code fences as sections.
   - [#43333](https://github.com/langgenius/dify/issues/43333): `load_from_url` includes query strings and fragments in the file suffix, which misroutes PDF responses.
   - [#43350](https://github.com/langgenius/dify/issues/43350): the ReAct stream parser drops trailing incomplete `action:` / `thought:` prefixes.
   - [#43349](https://github.com/langgenius/dify/issues/43349): the PTY sanitizer corrupts valid UTF-8 across read boundaries.

4. **API behavior and security**
   - [#43331](https://github.com/langgenius/dify/issues/43331): reasoning models leak `<think>` chain-of-thought into the Service API answer for Chat, Completion and Agent apps.
   - [#42739](https://github.com/langgenius/dify/issues/42739): dataset retrieval testing endpoints use inconsistent RBAC permissions.

5. **UI**
   - [#43326](https://github.com/langgenius/dify/issues/43326) (closed): the Agent prompt copy confirmation tooltip disappears immediately after clicking.

The only fix PR in today's list is [#43357](https://github.com/langgenius/dify/pull/43357), which covers the DST cron crash and is linked to #42955. None of the bug reports above has a linked fix PR in this data.

Also in flight: roughly 15 test-hardening PRs from asukaminato0721, such as [#43232](https://github.com/langgenius/dify/pull/43232) (an ast-grep gate against spec-based mock constructors), [#43226](https://github.com/langgenius/dify/pull/43226) (human-input forms in SQLite) and [#43218](https://github.com/langgenius/dify/pull/43218) (real account activation adapters). These swap mocks for real SQLite and Redis-backed components, so they should catch more integration-level regressions.

## 6. What This Means for Application Developers

- **Pagination:** don't rely on timestamp-only cursors when paging message history through the Service API. Messages with identical `created_at` values can be skipped (#43335, #43341). De-duplicate or re-fetch with overlap.
- **Reasoning models:** strip `<think>` blocks client-side when consuming Service API answers until #43331 is resolved.
- **Retrieval config:** don't set `top_k=0` and expect it to be honored in tool-based retrieval, because it falls back to 4 (#42981). Be careful with metadata "empty" filters on null-valued fields (#43345), and escape `_` and `%` in knowledge search keywords (#43351).
- **Ingestion:** DOCX tables with repeated text or hyperlinks, and Markdown with non-standard code fences, may lose or mis-segment content (#43359, #43356). Spot-check chunking. For URL ingestion, prefer URLs without query strings so PDFs route correctly (#43333).
- **Workflows:** verify that conversation variables written inside Iteration nodes persist (#43312, #34417). Use a workaround such as writing after the loop.
- **Cloud users:** Workflow LLM-node failures (#43339) and Knowledge API 403s from cloud-hosted shells (#43330) are open. Add retry and alerting, and consider fixed-egress clients.
- **Scheduling:** if you use cron-style schedules in DST timezones, track #43357.
- **Embedded chatbots:** the reset button may reuse the old `conversation_id` (#38403). Clear it explicitly in your embed code.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-10-02

## 1. Today's Highlights
Activity was mostly PR-driven: 318 PRs were updated, and the only release was the dev build `v1.105.0-dev.2`. The main themes are MCP gateway hardening (data-boundary policies, tool-lookup error handling), new OpenAI-compatible providers (Tokenify, ScaleDown, API Route), and cost and budget accounting bugs. These include a possible budget bypass after Redis counters idle out, and spend logs that record $0 for custom models.

## 2. Releases & Breaking Changes
- **v1.105.0-dev.2** is a dev pre-release. The notes shown contain only the cosign Docker image signature verification steps. No changelog, breaking changes or migration notes were visible in the data. Treat it as non-production.
- Related security context: [#24518](https://github.com/BerriAI/litellm/issues/24518) is the PyPI compromise tracker for v1.82.7 and v1.82.8. It is still open, with 118 comments and 137 👍. The maintainers say the affected packages have been deleted and current releases are clean. Keep verifying image signatures.
- Possible behavior change: [#44171](https://github.com/BerriAI/litellm/pull/44171) adds a `data_boundary` label on MCP servers. Keys and teams can restrict which boundaries they reach, and cross-boundary calls are rejected with explicit reasons. Once merged, existing MCP setups that mix boundaries may start failing.

## 3. New Model & Hardware Support
- **New providers:**
  - [#44163](https://github.com/BerriAI/litellm/pull/44163) adds Tokenify through the JSON provider config (`openai_like/providers.json`).
  - [#44168](https://github.com/BerriAI/litellm/pull/44168) adds ScaleDown as a chat provider with five models. It translates the decisions API's state/questions body and authenticates with `x-api-key`.
  - [#44167](https://github.com/BerriAI/litellm/pull/44167) adds ScaleDown pricing, input tokens only.
  - [#40024](https://github.com/BerriAI/litellm/pull/40024) adds API Route.
- **Deprecation metadata:** [#44175](https://github.com/BerriAI/litellm/pull/44175) adds `deprecation_date` for seven OpenAI models, including the TTS models and GPT-5.x variants, so `/model/deprecations` can warn about them. OpenAI shuts down `tts-1`, `tts-1-hd` and `gpt-4o-mini-tts` on 2027-01-06. [#44113](https://github.com/BerriAI/litellm/pull/44113) did the same for the TTS models but was closed, apparently superseded.
- **Requested:** [#43166](https://github.com/BerriAI/litellm/issues/43166) asks for Gemini Live Avatar (`avatar_config`) in the realtime Gemini/Vertex integration.
- **Bedrock Mantle:** [#44173](https://github.com/BerriAI/litellm/pull/44173) sends the correct `anthropic-workspace-id` header. Today it sends `anthropic-workspace`, which AWS ignores. As a result, models that require a project data-retention mode fail with a 400.
- **Search:** [#42213](https://github.com/BerriAI/litellm/pull/42213) makes Exa fall back to highlights/summary when `text` is missing.
- No new hardware or quantization support appears in today's data.

## 4. Performance & Optimization
There is no benchmark data today. Two items touch efficiency or correctness of the hot path:
- [#43293](https://github.com/BerriAI/litellm/pull/43293): `DualCache` writes its Redis tier with `default_redis_ttl`. It fixes #43187.
- [#40282](https://github.com/BerriAI/litellm/pull/40282): the streaming chunk builder preserves reasoning tokens and usage. It avoids a fallback to `token_counter` when usage comes from Pydantic `CompletionUsage` objects. This matters when chaining proxies.

## 5. Stability & Regressions
Ranked by severity:

1. **Budget enforcement gap:** [#43732](https://github.com/BerriAI/litellm/issues/43732). A key over its `max_budget` is admitted again after about 60 s idle, until the batch writer flushes spend. This is likely related to the Redis TTL fix in #43293, but that link is unconfirmed. No fix PR is linked.
2. **Guardrail bypasses (closed, stale):**
   - [#30732](https://github.com/BerriAI/litellm/issues/30732): tool permission/policy guardrails are not applied on `/v1/responses` and `/v1/messages`, and name variants bypass the blocklist.
   - [#30729](https://github.com/BerriAI/litellm/issues/30729): the OpenAI/Azure moderation guardrails scan only the trailing user turn.
   - Both were closed as stale, not necessarily fixed. Verify before relying on them.
3. **Privacy:**
   - [#39387](https://github.com/BerriAI/litellm/pull/39387) (open PR) applies per-callback message redaction on the failure path. Today, callbacks that opted out still receive full prompts when a request fails.
   - [#24965](https://github.com/BerriAI/litellm/issues/24965) (closed): `previous_models` leaked cross-request data and bloated spend logs.
4. **Cost and spend accuracy:**
   - [#35691](https://github.com/BerriAI/litellm/issues/35691): spend logs record $0 for custom models missing from the cost map.
   - [#43868](https://github.com/BerriAI/litellm/issues/43868) (closed): custom pricing bills `ultrafast` at standard rates, a 6x undercount ($0.015 vs $0.09).
   - [#32045](https://github.com/BerriAI/litellm/issues/32045): the request log shows prompt-cache hits as "Cache Hit: False".
   - [#42483](https://github.com/BerriAI/litellm/pull/42483): enforces project ITPM/OTPM on context-management summaries.
5. **Router and health:** [#44154](https://github.com/BerriAI/litellm/issues/44154). Background health-check results are attributed to every deployment sharing the same `litellm_params.model`, so one failure shows on all of them. It was filed today with no fix yet.
6. **Translation and streaming correctness:**
   - [#43487](https://github.com/BerriAI/litellm/issues/43487): a partial generic chunk passes validation, then raises `KeyError`.
   - [#42130](https://github.com/BerriAI/litellm/issues/42130): Presidio `output_parse_pii` corrupts text when analyzer spans overlap.
   - [#31279](https://github.com/BerriAI/litellm/issues/31279) (closed): `/v1/messages` replays `thinking_blocks` to OpenAI-compatible backends, causing repetition loops.
   - [#25322](https://github.com/BerriAI/litellm/issues/25322) (closed): Gemini `thoughtSignature` is not propagated in multi-turn tool calls.
   - [#26108](https://github.com/BerriAI/litellm/issues/26108): `frequency_penalty` is listed as supported for Gemini but the API rejects it.
   - [#41544](https://github.com/BerriAI/litellm/issues/41544): Bedrock audio transcription fails with a 400 because the system message is incompatible with audio blocks.
   - [#31475](https://github.com/BerriAI/litellm/issues/31475) (closed): `bedrock-mantle` SigV4 signs with the wrong service name.
7. **Logging and observability:**
   - [#32019](https://github.com/BerriAI/litellm/issues/32019): the `s3_v2` logger drops many streaming anthropic-messages.
   - [#31385](https://github.com/BerriAI/litellm/issues/31385) (closed): TTFT falls back to `end_time` on streaming `/v1/messages` and `/v1/responses`.
   - [#31378](https://github.com/BerriAI/litellm/issues/31378) (closed): a custom Langfuse `trace_id` has no effect.
8. **MCP and UI:**
   - [#15560](https://github.com/BerriAI/litellm/issues/15560) (closed): stdio MCP did not work.
   - [#44176](https://github.com/BerriAI/litellm/pull/44176): preserves catalogue failures during tool lookup, so auth and upstream errors are no longer masked.
   - [#31734](https://github.com/BerriAI/litellm/issues/31734): the SSO user count goes negative.
   - [#20499](https://github.com/BerriAI/litellm/issues/20499) (closed): no invite emails on user creation.
   - [#43851](https://github.com/BerriAI/litellm/issues/43851) (closed): `pip install` exceeds Windows MAX_PATH under Microsoft Store Python.

Many of the closed items carry the `stale` label, so closure does not always mean the problem was resolved.

## 6. What This Means for Application Developers
- **Budgets:** Do not rely only on `max_budget` for hard spend caps. Add upstream provider limits until #43732 is addressed. Check spend logs for custom models and non-standard service tiers (#35691, #43868), because costs may be under-reported.
- **Guardrails:** If you use moderation or tool-permission guardrails, test them on `/v1/responses` and `/v1/messages`, and on multi-turn input. Don't assume they apply to system or assistant content.
- **Redaction:** Per-callback redaction may not apply on failed requests (#39387). Treat failure logs as potentially containing full prompts.
- **Coding agents:** Codex CLI model discovery fails because `/models` returns the `{"data": [...]}` shape, while Codex expects `{"models": [...]}` ([#36854](https://github.com/BerriAI/litellm/issues/36854)). Claude Code users also hit alias issues. [#44177](https://github.com/BerriAI/litellm/pull/44177) makes `/v1/models` report `model_group_alias` token limits, which should also let 1M-context aliases be marked `[1m]`.
- **Health checks:** If several deployments share one `litellm_params.model`, a single failure can mark all of them unhealthy (#44154). Use distinct model identifiers where possible.
- **MCP:** Expect stricter policy enforcement if you adopt `data_boundary` (#44171). Label your MCP servers before upgrading.
- **Deprecations:** Plan to migrate off OpenAI TTS models before 2027-01-06.
- **Upgrades:** Pin to a released version rather than `v1.105.0-dev.2`, and verify the cosign signature.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
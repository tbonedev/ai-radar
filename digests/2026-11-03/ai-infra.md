# AI Infrastructure Digest 2026-11-03

> Generated: 2026-11-03 14:49 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-03

**Coverage note:** Only two digests were supplied: Dify (an LLM app platform) and LiteLLM (an LLM gateway). No inference-engine, local-runtime or fine-tuning projects (vLLM, SGLang, llama.cpp, Ollama, Unsloth) were included. Sections 3 and 4 are therefore thin, and I have not filled them with outside assumptions.

## 1. Ecosystem Overview

Neither project shipped a release in the last 24h. Both are in a stabilization phase, with activity driven by bug triage and refactoring rather than new features. At the gateway layer, LiteLLM is reworking its spend accounting, and streaming correctness is its main source of bugs. At the application layer, Dify is dealing with regressions after 1.18.0, mostly in agent and workflow nodes and in observability. Both projects are sensitive to reasoning-model behavior (`<think>` handling in Dify, thinking-to-text streaming in LiteLLM).

## 2. Activity Comparison

| Project | Layer | Issues (today) | PRs updated | Release status |
|---|---|---|---|---|
| Dify | App platform | Not reported as a count. About 30 distinct issues are cited, most of them bugs against 1.18.0. | 234 | None in 24h. 1.18.0 is recent. |
| LiteLLM | Gateway | Not reported as a count. About 20 distinct issues are cited, and a batch of stale ones was closed. | 500 | None in 24h |

- LiteLLM has about 2x Dify's PR volume.
- Dify's PR volume is largely test hardening (strict pyrefly typing, migration to Browser Mode).
- LiteLLM's PR volume is mostly functional work: spend ledger, guardrails and provider fixes.
- Issue totals were not given, so I won't compare them.

## 3. Model Support Race

There is no clear leader, because neither project is a model-serving engine and no new architectures landed.

- **LiteLLM** (provider and pricing breadth):
  - Added `nokeep` ([#49111](https://github.com/BerriAI/litellm/pull/49111)) and Wally ([#45662](https://github.com/BerriAI/litellm/pull/45662)) as OpenAI-compatible providers.
  - Cut the `gemini-3.5-flash-lite` batch cache price.
  - Dated the `gemini-2.5-pro` and `gemini-2.5-flash` shutdowns ([#49871](https://github.com/BerriAI/litellm/pull/49871)).
  - Changed image handling for Perplexity and OpenRouter ([#48846](https://github.com/BerriAI/litellm/pull/48846)).
- **Dify** (model-behavior handling, not model support):
  - [#45471](https://github.com/langgenius/dify/pull/45471) handles the orphan `</think>` form that Qwen3 and DeepSeek-R1 templates emit.
  - [#45473](https://github.com/langgenius/dify/pull/45473) applies declared variable defaults.
  - No new backend or quantization support landed.

LiteLLM is ahead on onboarding new providers. Dify is only fixing how existing reasoning models render.

## 4. Performance Frontier

Neither digest has kernel, KV-cache, batching or quantization work, and no benchmarks were posted. The effort that did show up sits at the gateway and application layers:

- **Gateway overhead:**
  - The Rust migration ([#31263](https://github.com/BerriAI/litellm/issues/31263)) targets sub-1ms overhead. It is LiteLLM's most active discussion (33 comments).
- **Rate-limit accuracy:**
  - [#49831](https://github.com/BerriAI/litellm/pull/49831) fixes media being over-counted in TPM checks. A 300 KB image billed at about 258 tokens was counted as about 99k.
  - [#35626](https://github.com/BerriAI/litellm/issues/35626) reports the pre-call token counter failing on embedding `list[str]` input.
- **Dify latency and memory:**
  - [#45323](https://github.com/langgenius/dify/issues/45323) reports slower LLM-node execution after upgrading from 1.15.0 to 1.18.0, with no root cause visible.
  - [#45119](https://github.com/langgenius/dify/issues/45119) reports whole-body buffering on file upload.

## 5. Layer Positioning

| Layer | Project | Today's focus |
|---|---|---|
| Application and orchestration | Dify | Agents, workflows, RAG and observability. A consumer of gateways and engines. |
| Gateway and proxy | LiteLLM | Routing, spend, rate limits, guardrails and provider translation. Sits between apps and engines. |
| Serving engine, local runtime, fine-tuning | Not covered | No data supplied |

LiteLLM's change to describe images for `supports_vision: false` deployments ([#49691](https://github.com/BerriAI/litellm/pull/49691)) names vLLM as an example of a text-only backend. This shows how the gateway absorbs engine limitations. Dify and LiteLLM can be stacked, with Dify calling LiteLLM, so a bug in one can look like a bug in the other.

## 6. Trend Signals

1. **Cost governance is moving into the core.** LiteLLM's SpendLogs ledger is going from opt-in to default (#49856, #49872). Spend-accuracy bugs are the top-ranked stability item (#49179, #49870, #47676, #49824).
2. **Guardrails are widening in scope.** Key, team and project guardrails will apply to pass-through routes ([#49322](https://github.com/BerriAI/litellm/pull/49322)). MCP guardrails will gain server, tool and caller context ([#49873](https://github.com/BerriAI/litellm/pull/49873)).
3. **Streaming with reasoning models is a fragile area.** LiteLLM has open bugs on dropped first chunks (#30765, #25214) and on fallback loss after a reasoning-only prefix (#49795). Dify has its `</think>` issue.
4. **Agent-node maturity lags.** Dify has open bugs for parallel Iteration with Agent nodes (#45413), variable-reference parameters (#45403), image passthrough (#45434) and node-level traces (#45251).
5. **Security and permission bugs persist.** Dify closed #41316 (per-user knowledge-base permissions ignored) and has open bug #45223 (cross-workspace embedding cache reuse).

**What application and agent developers should do:**
- Hold or pin Dify 1.18.0 for agent-heavy workflows, and benchmark LLM-node latency before and after upgrading.
- Test budget enforcement and reset behavior before taking LiteLLM's spend-ledger change.
- Validate thinking-model streams if you proxy `/v1/messages` through LiteLLM.
- Set client-side timeouts and pass `inputs` explicitly with the Dify Node.js SDK (#45198, #45121).
- Review whether pass-through routes will start blocking requests once guardrails apply (#49322).
- Check dependence on the Gemini 2.5 models against the shutdown dates in #49871.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-03

*Note: Dify is an LLM app platform, not an inference engine. The hardware/model-support and performance sections are mostly empty today.*

## 1. Today's Highlights
No release shipped in the last 24h. Activity centers on **1.18.0 regressions**: agent and workflow node bugs, log/trace visibility, and canvas editor problems. A large share of PR volume (234 updated) is test-hardening work: strict pyrefly annotations and migration of web tests to Browser Mode. Several small fixes landed for UTC timestamp handling and canvas input persistence.

## 2. Releases & Breaking Changes
None in the last 24h. Many reports target **1.18.0**, which was released recently. Users upgrading from 1.15.0 should read the LLM-node slowdown report in Section 4.

## 3. New Model & Hardware Support
No new model, backend or quantization support landed today.
- Reasoning-model template handling: [PR #45471](https://github.com/langgenius/dify/pull/45471) folds reasoning before an orphan `</think>`. Qwen3 and DeepSeek-R1 templates emit this form with no opening tag.
- [PR #45473](https://github.com/langgenius/dify/pull/45473) applies declared variable defaults when inputs are omitted for chat, completion, agent-chat and New Agent apps.

## 4. Performance & Optimization
No benchmarks were posted.
- [#45323](https://github.com/langgenius/dify/issues/45323) (closed): LLM node execution is slower after upgrading from 1.15.0 to 1.18.0. 8 comments, and no root cause is visible in the data provided.
- [#45119](https://github.com/langgenius/dify/issues/45119): the console file upload buffers the whole body before the size limit rejects it. This is a memory and latency risk for large uploads.
- [#45198](https://github.com/langgenius/dify/issues/45198): the Node.js SDK timeout stops applying once a streaming response is returned.

## 5. Stability & Regressions
Ranked by severity, using my own judgment from the summaries. Fix PRs are noted only where one appears in the data.

**High**
- [#45413](https://github.com/langgenius/dify/issues/45413): an Agent node inside a parallel Iteration fails with `UniqueViolation` on `agent_workspace_owner_active_unique`. No fix PR seen.
- [#45403](https://github.com/langgenius/dify/issues/45403): the Agent node fails with `'str' object has no attribute 'get'` when a non-string parameter references a variable containing JSON-special characters.
- [#45223](https://github.com/langgenius/dify/issues/45223): same-named embedding models in different workspaces reuse incompatible cached vectors. This is a correctness bug in retrieval.
- [#45238](https://github.com/langgenius/dify/issues/45238): retrying a segment status change after a broker failure succeeds without restoring its index.
- [#41316](https://github.com/langgenius/dify/issues/41316) (closed): the Dataset Service API ignored per-user knowledge-base permissions, so every token was authorized as Owner. This is permission-related. Check that your version includes the fix.

**Medium**
- [#45251](https://github.com/langgenius/dify/issues/45251): Agent and Chatflow logs no longer show node-level traces. This is related to the feature request [#42265](https://github.com/langgenius/dify/issues/42265) for Agent V2 execution logs.
- [#45147](https://github.com/langgenius/dify/issues/45147): canvas nodes are intermittently disabled.
- [#45404](https://github.com/langgenius/dify/issues/45404): the workflow editor crashes when a Human Input paragraph omits `default`.
- [#45443](https://github.com/langgenius/dify/issues/45443): `setInputs` cannot remove keys because of a shallow merge. [PR #45474](https://github.com/langgenius/dify/pull/45474) fixes this.
- [#45434](https://github.com/langgenius/dify/issues/45434): the Workflow/Chatflow Agent node does not send uploaded images as multimodal content. The Agent App does send them.
- [#45210](https://github.com/langgenius/dify/issues/45210): MCP OAuth re-authorization fails with "Client not found" because `client_id` is masked.
- [#45200](https://github.com/langgenius/dify/issues/45200): the ReAct agent crashes or picks the wrong tool on malformed action JSON.
- [#45265](https://github.com/langgenius/dify/issues/45265): Outlook trigger subscription renewal fails when the plugin returns null parameters.
- [#43312](https://github.com/langgenius/dify/issues/43312): conversation variables updated in an iteration do not persist in the main flow.
- [#37045](https://github.com/langgenius/dify/issues/37045): Weaviate BM25 search drops results because the score is not extracted.
- [#41675](https://github.com/langgenius/dify/issues/41675): a plugin daemon restart is exposed as HTTP 400 `invalid_param`. A related plugin-daemon parse failure, [#41605](https://github.com/langgenius/dify/issues/41605), is closed.

**Lower (data processing)**
- [#45411](https://github.com/langgenius/dify/issues/45411): Notion table rows beyond the first 100 render as a repeated header.
- [#45181](https://github.com/langgenius/dify/issues/45181): an `.xlsx` picture below the last text row and past row 10 is never indexed.
- [#45183](https://github.com/langgenius/dify/issues/45183) and [#45184](https://github.com/langgenius/dify/issues/45184): Markdown image and hyperlink removal corrupts content.

**Other fix PRs**
- [#45476](https://github.com/langgenius/dify/pull/45476): flushes the snippet before serializing the create response. Creating a customized snippet currently returns 400 `invalid_param` (issue #45475).
- [#45470](https://github.com/langgenius/dify/pull/45470) and [#45465](https://github.com/langgenius/dify/pull/45465): read skill and MCP provider timestamps as UTC. The current code reports the wrong time on hosts that are not set to UTC.
- [#43241](https://github.com/langgenius/dify/pull/43241): accepts `0` in required number inputs.
- [#45469](https://github.com/langgenius/dify/pull/45469): clarifies the Agent logs rating column label.

**Refactors and tooling**
- [#43678](https://github.com/langgenius/dify/pull/43678) and [#43677](https://github.com/langgenius/dify/pull/43677) are large dependency-injection refactors (part of #39993).
- Test-hardening work: [#45481](https://github.com/langgenius/dify/pull/45481), [#45477](https://github.com/langgenius/dify/pull/45477), [#45458](https://github.com/langgenius/dify/pull/45458), [#45459](https://github.com/langgenius/dify/pull/45459), [#45466](https://github.com/langgenius/dify/pull/45466), [#45472](https://github.com/langgenius/dify/pull/45472).
- Process changes: [#45478](https://github.com/langgenius/dify/pull/45478) makes Browser Mode the default for rendered component tests. [#45479](https://github.com/langgenius/dify/pull/45479) adds Copilot code-review instructions.

## 6. What This Means for Application Developers
- **Hold on 1.18.0 for agent-heavy workflows.** There are open bugs for parallel Iteration with Agent nodes (#45413), variable-reference parameters (#45403) and image passthrough (#45434). If you rely on these, pin to your current version or test first.
- **Observability regression.** If you depend on node-level traces in Logs, #45251 affects you. Instrument externally until it is resolved.
- **Check performance after upgrading.** Benchmark LLM-node latency before and after, given #45323.
- **SDK users.** The Node.js SDK omits required `inputs` in some requests ([#45121](https://github.com/langgenius/dify/issues/45121)) and loses its timeout on streams (#45198). Set your own client-side timeouts and pass `inputs` explicitly.
- **Multi-workspace embeddings.** Avoid same-named embedding models across workspaces until #45223 is fixed.
- **Reasoning models.** Expect improved `<think>` rendering once #45471 merges. In the meantime, a missing opening tag may leave stray closing tags in the UI.
- **Defaults.** Do not rely on server-applied variable defaults for chat or agent apps. Send values explicitly until #45473 merges.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-03

## 1. Today's Highlights
There were no releases in the last 24h, but PR activity was heavy (500 PRs updated). The biggest theme is a spend-accounting rewrite: a SpendLogs ledger is going from opt-in ([#49856](https://github.com/BerriAI/litellm/pull/49856)) to the default ([#49872](https://github.com/BerriAI/litellm/pull/49872)). Streaming correctness on `/v1/messages` and the Responses bridge, and rate-limiter accuracy, dominate the bug reports.

## 2. Releases & Breaking Changes
No releases today. Breaking changes are in open PRs:
- [#49872](https://github.com/BerriAI/litellm/pull/49872): makes the SpendLogs ledger the default and removes the temporary flag and the legacy increment queues. Operators should watch the rollout and rollback story, since [#49856](https://github.com/BerriAI/litellm/pull/49856) says the flag defaults off during rollout.
- [#49322](https://github.com/BerriAI/litellm/pull/49322) (`!`): key, team and project guardrails will now run on the built-in pass-through routes (`/openai`, `/azure`, `/anthropic`, `/vertex_ai`, `/gemini`). Requests that passed before may now be blocked.
- [#49227](https://github.com/BerriAI/litellm/pull/49227) (`!`): a failed agentic follow-up call now returns its error to the client instead of the pre-loop tool call.
- [#48846](https://github.com/BerriAI/litellm/pull/48846) (`!`): Perplexity and OpenRouter decision models now receive images, which changes behavior for callers using `drop_params`.
- [#49874](https://github.com/BerriAI/litellm/pull/49874): PBKDF2 UI password hashing when OpenSSL is in FIPS mode. Standard OpenSSL still uses scrypt.

## 3. New Model & Hardware Support
- [#49111](https://github.com/BerriAI/litellm/pull/49111): adds `nokeep` as an OpenAI-compatible provider. It needs only cost-map rows and no Python code.
- [#45662](https://github.com/BerriAI/litellm/pull/45662): adds Wally as an OpenAI-compatible provider.
- [#49871](https://github.com/BerriAI/litellm/pull/49871): lowers the `gemini-3.5-flash-lite` batch cache price. It also dates the shutdowns of `gemini-2.5-pro` and `gemini-2.5-flash`.
- [#49691](https://github.com/BerriAI/litellm/pull/49691): describes images for deployments that declare `supports_vision: false`. This avoids rejections and image-limit exhaustion on text-only backends such as vLLM.
- [#20064](https://github.com/BerriAI/litellm/issues/20064): feature request for model discovery with custom providers (11 comments, 13 👍).

## 4. Performance & Optimization
No concrete benchmarks landed today.
- [#31263](https://github.com/BerriAI/litellm/issues/31263): the parent ticket for the Rust migration, which targets sub-1ms gateway overhead. It is the most active discussion (33 comments, 22 👍).
- [#49831](https://github.com/BerriAI/litellm/pull/49831): estimates image, audio, PDF and video data URIs in embeddings as media in TPM pre-call checks. The issue it fixes: a 300 KB image that Vertex bills at about 258 tokens was counted as about 99k tokens, so it hit a 429 against a 75k/min limit.
- [#35626](https://github.com/BerriAI/litellm/issues/35626): the router pre-call token counter raises an exception on embedding `list[str]` input and skips the context check.

## 5. Stability & Regressions
Ranked by severity:
1. **Budget and spend accuracy**
   - [#49179](https://github.com/BerriAI/litellm/issues/49179) (closed): `/key/update` during an in-flight request dropped that request's cost from the window spend.
   - [#49870](https://github.com/BerriAI/litellm/pull/49870): fix PR that clamps negative fractional spend after a budget reset decrement.
   - [#47676](https://github.com/BerriAI/litellm/pull/47676): fixes the cold spend counter being re-added per request, which caused spurious 422s.
   - [#49824](https://github.com/BerriAI/litellm/pull/49824): fix PR that stops a video's provider-reported cost being charged on every poll.
2. **Rate limiting**: [#49675](https://github.com/BerriAI/litellm/issues/49675) is open. The v3 limiter's TPM counter outlives its window under upstream 429s, so keys and teams are rejected below `tpm_limit`. I saw no fix PR in the data.
3. **Streaming correctness**
   - [#30765](https://github.com/BerriAI/litellm/issues/30765) and [#25214](https://github.com/BerriAI/litellm/issues/25214): `/v1/messages` drops the first chunk at content-block transitions (thinking to text). Both are open, and the second is also tagged stale.
   - [#49795](https://github.com/BerriAI/litellm/issues/49795): a reasoning-only prefix sets `sent_first_chunk`, so a mid-stream failure loses its fallback.
   - [#49736](https://github.com/BerriAI/litellm/issues/49736): a streamed Responses `flex_unavailable` error maps to a 500 instead of a 429.
   - [#48409](https://github.com/BerriAI/litellm/pull/48409): fix PR for custom tool input events on the Responses chat bridge.
   - [#44923](https://github.com/BerriAI/litellm/issues/44923) (closed): Responses bridge `sequence_number` problems.
4. **Provider translation**
   - [#48813](https://github.com/BerriAI/litellm/issues/48813) (closed): OCI Gemini ignored all but the last system message.
   - [#39736](https://github.com/BerriAI/litellm/issues/39736): Mistral drops a named `tool_choice`.
   - [#46701](https://github.com/BerriAI/litellm/issues/46701) (closed): `azure_ad_token` leaked into the body on Azure AI Foundry Anthropic.
   - [#47299](https://github.com/BerriAI/litellm/issues/47299) (closed): HuggingFace embeddings ignored `timeout`.
   - [#49863](https://github.com/BerriAI/litellm/pull/49863): returns a 401 instead of a 500 when Entra rejects the credential.
5. **Other**
   - [#18060](https://github.com/BerriAI/litellm/issues/18060): possible infinite retry loop on unauthorized requests. It is old and stale.
   - [#43032](https://github.com/BerriAI/litellm/issues/43032): `langfuse_otel` omits `/v1/traces`, so self-hosted traces are dropped with a 404.
   - [#49038](https://github.com/BerriAI/litellm/issues/49038): the Interactions spec canary is red.
   - [#47398](https://github.com/BerriAI/litellm/pull/47398): stops redacted reasoning leaking through `provider_specific_fields`.

A batch of stale issues was closed today (for example [#34471](https://github.com/BerriAI/litellm/issues/34471) and [#32140](https://github.com/BerriAI/litellm/issues/32140)). Closure by the stale bot doesn't mean they were fixed.

## 6. What This Means for Application Developers
- **Budgets:** Expect spend and budget accounting to change in the next releases. Test budget enforcement and reset behavior after upgrading, especially if you update keys while requests are in flight.
- **Claude Code and `/v1/messages` streaming:** The dropped first text after thinking is still open. Validate the output of thinking-model streams if you proxy them.
- **Rate limits:** If you run Redis with the v3 limiter and TPM reservation, watch for early 429s on keys with both RPM and TPM limits. Multimodal embedding users should look at [#49831](https://github.com/BerriAI/litellm/pull/49831).
- **Guardrails:** If you rely on pass-through routes, plan for key/team guardrails to start applying ([#49322](https://github.com/BerriAI/litellm/pull/49322)). MCP guardrails will also gain server, tool and caller context ([#49873](https://github.com/BerriAI/litellm/pull/49873)).
- **Model lists and routing:** Wildcard groups without a slash, like `claude-*`, may not appear in `/v1/models` or `/model/info` until [#49832](https://github.com/BerriAI/litellm/pull/49832) lands.
- **Pricing and deprecations:** Check the Gemini 2.5 shutdown dates in [#49871](https://github.com/BerriAI/litellm/pull/49871) if you depend on those models.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
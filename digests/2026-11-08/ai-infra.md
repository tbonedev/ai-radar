# AI Infrastructure Digest 2026-11-08

> Generated: 2026-11-08 14:01 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-08

**Scope note:** Only two digests were supplied: Dify (application platform) and LiteLLM (LLM gateway). There was no input for any inference engine (vLLM, SGLang, llama.cpp), local runtime (Ollama) or fine-tuning framework (Unsloth). Sections 3 to 5 therefore cover only what these two digests support and say so where they can't. Counts below are items cited in the digests, not full tracker totals.

## 1. Ecosystem Overview
Today's activity sits mostly in the application and gateway layers, not the serving or kernel layers. Both projects are in a correctness-hardening phase. Dify is fixing bugs in its Agent V2 and Human Input (HITL) features, and LiteLLM is clearing Anthropic/Claude Code translation bugs and tightening budget enforcement. The common theme is that agentic workloads (parallel agent nodes, `/v1/messages`, reasoning replay, tool-use handling) stress the layers above the inference engine. The main risks today are regressions, accounting accuracy and protocol fidelity, not raw throughput.

## 2. Activity Comparison

| Project | Layer | Issues cited (closed) | PRs cited | Release status |
|---|---|---|---|---|
| Dify | Application / agent platform | ~25 (4 closed) | ~14 (about 9 are fixes tied to a specific issue) | No release. 1.19.0 has an open HITL regression (#45753). |
| LiteLLM | LLM gateway / proxy | ~23 (16 closed, 5 clearly open) | ~10 | Two releases: v1.108.3 (LTS patch) and v1.110.0-dev.2 (dev, not for production). |

- **Dify** is bug-report-heavy. Most reports are open, and fix PRs follow the same day, many from a single contributor (`severus0044`).
- **LiteLLM** is closing issues faster than it opens them. It also shipped two releases, though the notes shown carry no changelog detail.

## 3. Model Support Race
Neither digest shows a major new-model launch. Support work is incremental:

- **LiteLLM** is ahead on provider breadth:
  - The Linkrra provider (OpenAI-compatible, `linkrra/<model>` prefix) is an open PR, #46012.
  - Bedrock audio (Voxtral) transcription (#41544) and Vertex Chirp 3 HD TTS (#50219) were closed.
  - Gemini native-passthrough budget estimation is in PR #50625.
  - Claude Haiku 5.5 and GLM 5.3 on Bedrock appear only in bug reports, not as new support.
- **Dify** shipped no model support. It is not an inference engine, so it has no CUDA/ROCm/Metal changes. Its feature PRs are tool-plugin parameter features (#43040, #43042, #43048).
- **Not assessable:** New architectures and hardware backends are normally shipped by the serving engines, which were not in today's input. Nothing here shows who leads.

## 4. Performance Frontier
There is no KV cache, batching, quantization or kernel work in these inputs, and no benchmark numbers. The optimization effort that does appear is at the gateway and application layers:

- **Accounting and compute cost (LiteLLM):**
  - #50475 (closed): metrics scanned all retained `SpendLogDelivery` rows on every flush.
  - PR #47613 bounds base64 PDF token counting. One dense page could block a worker for minutes.
  - PR #50563 adds a `parallel_model_allowlist` to skip slot acquisition.
  - #34328 (open): `unpack_defs` can hang without bound on recursive tool schemas.
- **Wasted upstream cost (LiteLLM):** #50514 (open) reports a Bedrock Invoke stream that keeps generating after an abort, because the httpx response is never closed.
- **Retrieval (Dify):**
  - PR #45831 skips fetching vectors for BM25 on Weaviate.
  - #45802 (open) reports jieba keyword extraction capped at 10 terms, which hurts long-query retrieval quality.
- **Where effort is concentrated:** Correctness and cost accounting, not latency or throughput.

## 5. Layer Positioning

| Layer | Covered today | Role | Characteristic risks |
|---|---|---|---|
| Application / agent platform | Dify | Workflow orchestration, agent nodes, HITL, RAG, plugins | Variable-type handling, parallel-agent state, DSL and timezone edge cases |
| Gateway / proxy | LiteLLM | Provider translation, budgets, guardrails, auth, spend logging | Protocol fidelity, billing accuracy, security policy |
| Serving engine, local runtime, fine-tuning | Not covered | N/A | N/A |

The two projects differ in kind. LiteLLM sits between applications and providers, so its failures show up as wrong costs, wrong error codes or lost reasoning state. Dify sits above, so its failures show up as broken workflows. A stack that uses both inherits both sets of risk.

## 6. Trend Signals
1. **Agent workloads are the main stress test.** Parallel Agent nodes (#45413, #44720) and Claude Code via `/v1/messages` (LiteLLM's bulk closures) are where bugs concentrate.
2. **Budget enforcement is approximate.** LiteLLM `max_budget` over-admitted 11 calls where the budget fits 9, a 10.3% overshoot (#50125). Unparseable 200s can be billed yet raised as errors (#49793).
3. **Reasoning and thinking state leaks across providers.** Examples are `reasoning_effort="none"` (#47924), signature replay to non-Anthropic Bedrock models (#49969) and dropped encrypted reasoning (#49046).
4. **Type fidelity is a recurring weakness in workflow tools.** Dify treats integer variables as text in conditions and hides them in pickers (#45817, #45833, #45839, #45810).
5. **Security and policy are moving into the gateway.** Examples are the message-redaction override (#50626), JWT team resolution (#50608) and Presidio log masking (#49057).

**What agent and application developers should watch:**
- Hold Dify 1.19.0 Web App HITL deployments until #45827 lands.
- Avoid Agent nodes inside parallel Iterations on Dify 1.18+.
- Treat LiteLLM budgets as soft limits and add upstream spend alerts.
- Don't blindly retry after a 200 that fails to parse.
- Closed does not mean released. Neither digest says which release carries each fix, so check changelogs before upgrading.
- For a full ecosystem view, add the serving-engine, local-runtime and fine-tuning digests. This report can't rank them.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-08

## 1. Today's Highlights
No release shipped in the last 24h. Activity is a burst of bug reports against the 1.18/1.19 Agent V2 and Human Input (HITL) features, and most of them already have fix PRs from `severus0044`, filed the same day. Other themes: type-handling gaps (integer variables hidden or compared as text) and i18n and timezone edge cases.

## 2. Releases & Breaking Changes
No new releases.

Regression note: [#45753](https://github.com/langgenius/dify/issues/45753) reports that Web App Human Input form submission returns 404 "Form not found" and leaves the run paused. It is reported as a regression in **1.19.0**. Users on 1.19.0 who use HITL in Web Apps should hold off on upgrading or watch the fix PR.

## 3. New Model & Hardware Support
Nothing new today. Dify is an application platform, not an inference engine, so there are no CUDA/ROCm/Metal changes.

Open feature PRs for tool-plugin parameters, all from `zyqzyq`:
- [#43040](https://github.com/langgenius/dify/pull/43040): `reset_on_change` for tool parameters.
- [#43042](https://github.com/langgenius/dify/pull/43042): dynamic tree-select with multi-select.
- [#43048](https://github.com/langgenius/dify/pull/43048): `show_on` conditional parameters.

## 4. Performance & Optimization
No concrete numbers were reported. Relevant items:
- [#45831](https://github.com/langgenius/dify/pull/45831) (fixes [#42996](https://github.com/langgenius/dify/issues/42996)): BM25 calls in Weaviate `search_by_full_text` now use `include_vector=False`. The keyword leg of hybrid retrieval doesn't need vectors, so this avoids fetching them and fixes empty hybrid results with self-hosted Weaviate and Ollama embeddings.
- [#45802](https://github.com/langgenius/dify/issues/45802): jieba keyword extraction with `topK=None` is capped at 10 terms. Long queries lose key terms in weighted-score retrieval, which is a retrieval-quality problem. No fix PR was listed.
- [#45714](https://github.com/langgenius/dify/pull/45714), [#45716](https://github.com/langgenius/dify/pull/45716): web media players avoid needless `audio.load()` calls and reset state correctly.

## 5. Stability & Regressions
Ranked by severity.

| Severity | Issue | Fix PR |
|---|---|---|
| High | [#45753](https://github.com/langgenius/dify/issues/45753): HITL form submit returns 404 in Web App and the run stays paused (1.19.0 regression) | [#45827](https://github.com/langgenius/dify/pull/45827): maps `WEB_APP` invocations to a HITL surface |
| High | [#45413](https://github.com/langgenius/dify/issues/45413): the Agent node in a parallel Iteration fails with `UniqueViolation` on `agent_workspace_owner_active_unique` (1.18.0) | [#45826](https://github.com/langgenius/dify/pull/45826): partitions workspaces by node execution |
| High | [#42996](https://github.com/langgenius/dify/issues/42996): hybrid retrieval returns empty results with Weaviate and Ollama | [#45831](https://github.com/langgenius/dify/pull/45831) |
| Medium | [#44720](https://github.com/langgenius/dify/issues/44720): Agent V2 in an Iteration fails to publish ("non-upstream previous node") | [#45825](https://github.com/langgenius/dify/pull/45825): adds `parentId` containment edges to the topology |
| Medium | [#45817](https://github.com/langgenius/dify/issues/45817): IF/ELSE and Loop conditions treat integer variables as text | None listed |
| Medium | [#45833](https://github.com/langgenius/dify/issues/45833), [#45839](https://github.com/langgenius/dify/issues/45839), [#45810](https://github.com/langgenius/dify/issues/45810): number tool parameters can't bind integer variables, and integer variables are hidden in pickers | None listed |
| Medium | [#41096](https://github.com/langgenius/dify/issues/41096): change-email duplicate check is case-sensitive, so one mailbox can have two accounts | [#45824](https://github.com/langgenius/dify/pull/45824) |
| Medium | [#45842](https://github.com/langgenius/dify/issues/45842): Schedule Trigger node fails to render with a non-IANA timezone such as `GMT+8` | [#45843](https://github.com/langgenius/dify/pull/45843) |
| Medium | [#45798](https://github.com/langgenius/dify/issues/45798): request serialization strips `?` characters from query values (plugin `http_parser.py`) | None listed |
| Low | [#45799](https://github.com/langgenius/dify/issues/45799): UTF-8 ZIP name recovery rejects a valid legacy archive with 65,535 entries | None listed |
| Low | [#45792](https://github.com/langgenius/dify/issues/45792): Agent Monitoring excludes the selected end date | None listed |
| Low | [#45829](https://github.com/langgenius/dify/issues/45829), [#45813](https://github.com/langgenius/dify/issues/45813): relative-time labels fall back to English for many locales | None listed |
| Low | [#39518](https://github.com/langgenius/dify/issues/39518): the image previewer doesn't reload when its props change | [#45832](https://github.com/langgenius/dify/pull/45832) |
| Low | [#45836](https://github.com/langgenius/dify/issues/45836): the overview chart clips the first x-axis label | None listed |

Docs and chore items:
- [#39928](https://github.com/langgenius/dify/issues/39928): the `/audio-to-text` API docs drift from the implementation. Fix PR: [#45828](https://github.com/langgenius/dify/pull/45828).
- [#45844](https://github.com/langgenius/dify/issues/45844): the zh-CN README omits the `DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN` step. Fix PR: [#45845](https://github.com/langgenius/dify/pull/45845).
- [#45584](https://github.com/langgenius/dify/issues/45584): use the SQLAlchemy engine (good first issue).
- [#43358](https://github.com/langgenius/dify/issues/43358): replace `pytz` with `zoneinfo` (closed).

Closed today:
- [#45423](https://github.com/langgenius/dify/issues/45423): inputs sent to `/v1/chat-messages` on Agent apps are validated but never reach the agent.
- [#39889](https://github.com/langgenius/dify/issues/39889): `WordExtractor` fails on remote `.docx` files on Windows.
- [#40575](https://github.com/langgenius/dify/issues/40575): multi-select input for the Start node, closed with the `no-issue-activity` label.

## 6. What This Means for Application Developers
- **Pin versions.** If you use HITL forms in Web Apps on 1.19.0, expect 404s until [#45827](https://github.com/langgenius/dify/pull/45827) lands.
- **Avoid Agent nodes inside parallel Iterations** on 1.18+. They hit the workspace uniqueness constraint ([#45413](https://github.com/langgenius/dify/issues/45413)) and may fail to publish ([#44720](https://github.com/langgenius/dify/issues/44720)).
- **Check your integer variables.** Integer variables are treated as text in IF/ELSE and Loop conditions. They are also missing from several variable pickers and can't bind to number tool parameters. Cast explicitly, for example with a Code node, as a workaround.
- **Check `inputs` on Agent apps.** [#45423](https://github.com/langgenius/dify/issues/45423) was closed today, so confirm your version includes the fix before you rely on `inputs` reaching the agent through `/v1/chat-messages`.
- **Self-hosted Weaviate users:** hybrid search may return empty results until [#45831](https://github.com/langgenius/dify/pull/45831) merges. Vector-only search is the interim option.
- **Check DSL imports.** Imported workflows with non-IANA timezones such as `GMT+8` on Schedule Triggers can break rendering ([#45842](https://github.com/langgenius/dify/issues/45842)). Normalize them to IANA names like `Asia/Shanghai`.
- **Docker deployers:** set `DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN` to a generated token and don't leave it empty. The English README has the steps, and the zh-CN fix is [#45845](https://github.com/langgenius/dify/pull/45845).
- **Account-email edge case:** mixed-case legacy emails can produce duplicate accounts ([#41096](https://github.com/langgenius/dify/issues/41096)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-11-08

## 1. Today's Highlights
LiteLLM shipped two releases: the LTS patch v1.108.3 and the dev build v1.110.0-dev.2. The issue tracker saw heavy cleanup, with many LLM-translation and Anthropic/Claude Code bugs closed in the last 24h. New PRs target budget enforcement, which several open issues cover (reservation accuracy, over-admission, and window-spend loss).

## 2. Releases & Breaking Changes
- **v1.108.3 (LTS)**: The `lts` image tag (`ghcr.io/berriai/litellm:lts`) now points to this patch. The notes shown give no changelog detail. Check the full release notes before upgrading. https://github.com/BerriAI/litellm/releases/tag/v1.108.3
- **v1.110.0-dev.2**: A dev pre-release. Docker images are cosign-signed with the key from commit `e82a3c6`. Don't use it for production. https://github.com/BerriAI/litellm/releases/tag/v1.110.0-dev.2
- **Possible behavior changes in open PRs, marked `!`:**
  - Presidio `logging_only` masks prompts in failed-call logs (#49057): https://github.com/BerriAI/litellm/pull/49057
  - Wildcard `/model/info` rows are priced as the model their calls route to (#49128): https://github.com/BerriAI/litellm/pull/49128
  - Malformed Anthropic tool choices return 400 instead of 500 or silent auto (#46188): https://github.com/BerriAI/litellm/pull/46188

## 3. New Model & Hardware Support
- **Linkrra provider (PR, open):** An OpenAI-compatible provider for open-weight models, using the `linkrra/<model>` prefix. https://github.com/BerriAI/litellm/pull/46012
- **Claude Haiku 5.5 / GLM 5.3 on Bedrock:** These models appear in bug reports, not as new support. See #47924 and #49969 below.
- **Bedrock audio (Voxtral) transcription:** #41544 was closed today, so the 400 error with system messages and audio blocks looks resolved. https://github.com/BerriAI/litellm/issues/41544
- **Vertex AI TTS:** #50219 (`vertex_location` ignored for Chirp 3 HD) was closed. https://github.com/BerriAI/litellm/issues/50219
- **Gemini on native passthrough:** PR #50625 estimates Gemini native `contents` for budget reservation. https://github.com/BerriAI/litellm/pull/50625

## 4. Performance & Optimization
No benchmark numbers were reported. Work in progress:
- **Spend accounting:** #50475 was closed. `AccountingDeliveryRepository.metrics()` scanned all retained `SpendLogDelivery` rows on every flush, so its cost grew with history. https://github.com/BerriAI/litellm/issues/50475
- **Token counting:** PR #47613 bounds base64 PDF counting. One dense page could previously block a worker for minutes. https://github.com/BerriAI/litellm/pull/47613
- **Parallel slot acquisition:** PR #50563 adds a `parallel_model_allowlist` so deferred-check models skip slot acquisition. https://github.com/BerriAI/litellm/pull/50563
- **Hang risk:** #34328 is still open. `unpack_defs` hangs without bound on recursive tool schemas for Bedrock and Vertex callers. https://github.com/BerriAI/litellm/issues/34328

## 5. Stability & Regressions
Ranked by severity.

**Security and policy**
- PR #50626 fixes a case where a caller could override a key or team's message-redaction policy: https://github.com/BerriAI/litellm/pull/50626
- PR #50608 fixes JWT team resolution for modelless discovery. It currently picks the first team and not the entitled one. It fixes #50596 and #50598: https://github.com/BerriAI/litellm/pull/50608

**Budget and billing correctness**
- #50125 (open): `max_budget` over-admitted 11 calls where the budget fits 9, a 10.3% overshoot. https://github.com/BerriAI/litellm/issues/50125
- #49179 (closed): `/key/update` during an in-flight request dropped that request's cost from the budget window spend. https://github.com/BerriAI/litellm/issues/49179
- #49793 (open): A 200 response the SDK can't parse is raised as a 500 or opaque error with usage lost, so callers retry requests that were already billed. https://github.com/BerriAI/litellm/issues/49793
- PR #45907 fixes budget reservations that stick until TTL when there is no DB logger: https://github.com/BerriAI/litellm/pull/45907

**Streaming**
- #50514 (open): A Bedrock Invoke `/v1/messages` stream keeps generating after the detached-drain abort because the httpx response is never closed. This wastes upstream cost. https://github.com/BerriAI/litellm/issues/50514
- #35589 (closed): Amazon Nova streaming failed on a zstd multi-frame decode error. https://github.com/BerriAI/litellm/issues/35589
- #31562 (closed): A stream ended early when tool arguments contained `"[DONE]"`. https://github.com/BerriAI/litellm/issues/31562
- #44923 (closed): The Responses streaming bridge had bad `sequence_number` fields. https://github.com/BerriAI/litellm/issues/44923

**Claude and Anthropic translation (all closed)**
- #24498: `[System: Empty message content sanitised…]` returned as content. https://github.com/BerriAI/litellm/issues/24498
- #47924: `reasoning_effort="none"` omitted thinking instead of disabling it. https://github.com/BerriAI/litellm/issues/47924
- #48384: Anthropic `server_tool_use` surfaced as a pending `tool_call`, so agents looped. https://github.com/BerriAI/litellm/issues/48384
- #49046: The `chatgpt/` provider dropped encrypted reasoning on `/v1/messages`. https://github.com/BerriAI/litellm/issues/49046
- #40583: Guardrails couldn't see MCP tools on `/v1/messages`. https://github.com/BerriAI/litellm/issues/40583
- #49998: Upstream failures on `/v1/messages` returned a misleading 503 "authentication database unreachable". https://github.com/BerriAI/litellm/issues/49998
- #46465: Gemini `count_tokens` on `/v1/messages/count_tokens` returned 500. https://github.com/BerriAI/litellm/issues/46465
- #49969: Bedrock Converse replayed `reasoningText.signature` to non-Anthropic models. https://github.com/BerriAI/litellm/issues/49969

**Other open items**
- #20078: `/v1/audio/speech` for Qwen3-TTS via vLLM requires `voice` and strips custom parameters. https://github.com/BerriAI/litellm/issues/20078
- #50173 (closed): `/v1/images/edits` with no image returned 500 where it should return 400. https://github.com/BerriAI/litellm/issues/50173

## 6. What This Means for Application Developers
- **Budget enforcement is approximate.** Expect overshoot under bursts, and expect reservation edge cases on Gemini passthrough (#50625). Don't use `max_budget` as a hard financial limit. Add upstream spend alerts.
- **Retry logic needs care.** An unparseable 200 can be billed and still raised as an error (#49793). Retry blindly and you risk double charges.
- **Claude Code and `/v1/messages` users benefit most.** Many fixes closed today, covering reasoning replay, tool-use handling, guardrails and error codes. Pull the LTS patch or a later build to pick them up. Confirm each fix is in your version before relying on it.
- **Reasoning and thinking controls.** Check that `reasoning_effort` behaves as you expect on default-on Claude models. When you switch between Anthropic and non-Anthropic Bedrock models mid-conversation, strip thinking signatures yourself until the fix reaches your version.
- **Security-sensitive deployments.** If you allow client-side request settings, watch #50626 for the redaction override. Review JWT-based team routing (#50608).
- **Closed doesn't mean released.** The data doesn't say which release carries each fix, so check changelogs before upgrading.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
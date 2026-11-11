# AI Infrastructure Digest 2026-11-11

> Generated: 2026-11-11 14:53 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-11-11

**Scope:** Only Dify and LiteLLM were provided today. No inference engine, local runtime or fine-tuning digests were included, so sections 3–5 can't compare across the full stack.

## 1. Ecosystem Overview
Today's activity sits at the application and gateway layers, not the inference layer. LiteLLM shipped five release lines at once (one RC, one stable, one LTS patch and two older backports), which shows a multi-branch maintenance model. Dify shipped no release and spent the day on a frontend dependency refresh and an Agent V2 backend refactor. Both projects are dominated by correctness issues: knowledge retrieval and workflow streaming in Dify, cost attribution and `/v1/messages` translation in LiteLLM. Neither has benchmark numbers. Engineering effort is going into reliability and protocol fidelity, not raw speed.

## 2. Activity Comparison
Counts are the distinct items cited in each digest, not repository totals.

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | 25 (about 10 closed) | 9 (several closed or open, merge status unclear) | None in the last 24h |
| LiteLLM | 20 (about 5 closed) | 14 (including a Rust-port PR #51119 that replaces a stack of 8) | 6 releases: v1.110.0-rc.1, v1.109.0 (stable), v1.108.5 (LTS), v1.106.8, v1.104.9, v1.103.11 |

- **LiteLLM release notes:** they were truncated in the source data, so change lists are unverified.
- **Dify issue mix:** the issues are mostly bugs spread across Knowledge, Workflow, Agent and RBAC.
- **LiteLLM issue mix:** the issues are concentrated in spend, `/v1/messages` and MCP.

## 3. Model Support Race
No new model or hardware support shipped in either project today, so no one is ahead.
- **Dify:** no model support landed. [PR #45804](https://github.com/langgenius/dify/pull/45804) (Silicium vector store) was closed, and the data doesn't say whether it merged. Provider extensibility is moving to the `dify.vector_backends` entry-point architecture.
- **LiteLLM:** no model launches. Provider-coverage work is in flight: Tripo routes and credit billing ([#50839](https://github.com/BerriAI/litellm/pull/50839)), SAP orchestration ([#48597](https://github.com/BerriAI/litellm/pull/48597)) and an openai-like provider gap that drops tools for models outside the catalog ([#48145](https://github.com/BerriAI/litellm/issues/48145)).
- **Takeaway:** the gaps are in long-tail provider and catalog handling, not frontier model day-0 support.

## 4. Performance Frontier
There are no throughput or latency figures today. None of the usual inference optimizations (KV cache, batching, quantization, distributed serving, kernels) appear in these two projects. The optimization work that does appear:
- **Gateway hot path to Rust:** [LiteLLM #51119](https://github.com/BerriAI/litellm/pull/51119) moves Anthropic `/v1/messages` serving for the `anthropic` provider to Rust only. This is the largest performance-related change today.
- **State stores:** [#50870](https://github.com/BerriAI/litellm/pull/50870) and [#50357](https://github.com/BerriAI/litellm/pull/50357) move router session pins and health-check states to native Redis stores, off `DualCache` and redis-py.
- **Memory and latency:**
  - [#50740](https://github.com/BerriAI/litellm/issues/50740) (closed): proxy RSS grew linearly with requests.
  - [#50065](https://github.com/BerriAI/litellm/issues/50065): MCP `tools/list` takes 18–50 s on v1.108.0.
- **Dify:** retrieval quality, not speed. Weaviate parent-child retrieval returns 13 results at Top K 50 ([#45975](https://github.com/langgenius/dify/issues/45975)). Workflow image export fails in Safari and hangs Firefox ([#46085](https://github.com/langgenius/dify/issues/46085)).

## 5. Layer Positioning
| Project | Layer | Today's focus |
|---|---|---|
| LiteLLM | LLM gateway and proxy: routing, budgets, spend, MCP and A2A, protocol translation | Cost correctness, Anthropic-format fidelity, Rust and Redis hot path |
| Dify | Application platform: RAG, workflows, agents, plugins, RBAC | Knowledge Pipeline, Workflow and Agent V2 defects, frontend upgrades |

- **Not covered:** serving engines, local runtimes and training/fine-tuning frameworks. Dify's digest itself states it isn't an inference engine.
- **Complementary roles:** Dify consumes model endpoints and LiteLLM fronts them. Dify's observability request for OTel export ([#41536](https://github.com/langgenius/dify/issues/41536), closed) and LiteLLM's OTel model attribution bug ([#51029](https://github.com/BerriAI/litellm/issues/51029)) touch the same tracing seam.

## 6. Trend Signals
1. **Protocol fidelity is the new gateway battleground.** Claude Code-style clients expose gaps in LiteLLM's `/v1/messages` handling: `thinking_delta` placement ([#32357](https://github.com/BerriAI/litellm/issues/32357)), keepalive error propagation ([#49711](https://github.com/BerriAI/litellm/issues/49711)), PDF guardrail round-trips ([#36524](https://github.com/BerriAI/litellm/issues/36524)) and dropped `is_error` ([#49359](https://github.com/BerriAI/litellm/issues/49359)).
2. **Cost and budget control is unreliable.** Spend is recorded as $0 ([#47675](https://github.com/BerriAI/litellm/issues/47675), [#47908](https://github.com/BerriAI/litellm/issues/47908), both closed; open fix [#49625](https://github.com/BerriAI/litellm/pull/49625)). End-user budgets can be bypassed in multi-pod Redis setups ([#34238](https://github.com/BerriAI/litellm/issues/34238), no fix linked).
3. **Gateways are moving to Rust and native Redis** for hot-path performance.
4. **Pluggable backends are becoming standard.** Dify's vector backends are an example. Agent V2 is being restructured ([#46092](https://github.com/langgenius/dify/pull/46092), [#46093](https://github.com/langgenius/dify/pull/46093)), so expect internal churn with stated response-shape stability.
5. **Silent data failures matter most for RAG.** Knowledge Base documents are auto-disabled weekly ([#46095](https://github.com/langgenius/dify/issues/46095)), and a workflow-as-tool output can drop out of the SSE stream ([#46034](https://github.com/langgenius/dify/issues/46034)).
6. **RBAC enforcement is a security concern.** Dify's member role assignment endpoint was not gated at the API layer ([PR #46053](https://github.com/langgenius/dify/pull/46053), closed). LiteLLM added security mailing list and VDP links ([#51199](https://github.com/BerriAI/litellm/pull/51199)).

**What developers should do now**
- **Cost tracking:** cross-check spend against provider invoices if you use `custom_llm_provider` or `base_model` overrides.
- **Budgets:** don't treat end-user budgets as a hard control in multi-pod deployments.
- **Upgrades:** use the LiteLLM `lts` tag (v1.108.5) and keep the 1.110 RC out of production. Be wary of MCP latency on v1.108.0.
- **Anthropic-format clients:** test streaming, keepalive and PDF paths before rollout.
- **Dify RAG and workflows:** audit auto-disabled documents and Weaviate Top K completeness. Test workflow-as-tool streaming, and avoid Agent nodes referencing outer variables inside an Iteration ([#44720](https://github.com/langgenius/dify/issues/44720)).
- **Dify custom tools and plugins:** set optional headers and cookies explicitly ([#46010](https://github.com/langgenius/dify/issues/46010)), and use plain semver in plugins ([#46035](https://github.com/langgenius/dify/issues/46035)).

**Caveat:** the digests don't say whether several items have fixes or shipped, so verify the current state before relying on them.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-11

Note: Dify is an LLM app platform, not an inference engine. The model and hardware and performance sections below are mostly empty for that reason.

## 1. Today's Highlights
No release shipped in the last 24h. Activity was dominated by a large batch of frontend dependency upgrades from hyoban (Lexical 0.53, Motion 14.12, KaTeX 0.19, TanStack Hotkeys, a TypeScript 7.1 beta checker), plus the Agent V2 refactor stack from hjlarry (#46092, #46093). On the bug side, several Knowledge Pipeline, Workflow and Agent defects were filed, and some already have fix PRs.

## 2. Releases & Breaking Changes
No releases in the last 24h.

Items to watch:
- [PR #45804](https://github.com/langgenius/dify/pull/45804) (closed) proposed a Silicium vector store provider through the `dify.vector_backends` entry-point architecture. Pluggable VDB backends are becoming the way to add providers.
- [Issue #46035](https://github.com/langgenius/dify/issues/46035): the plugin declaration validator rejects versions the daemon accepts, such as `0.3.7-fix1`.

## 3. New Model & Hardware Support
No new model, hardware or quantization support landed today.
- [PR #45804](https://github.com/langgenius/dify/pull/45804) added the Silicium in-process HNSW vector store with 64B zero-copy. It was closed, and the data doesn't say whether it was merged.
- [Issue #41536](https://github.com/langgenius/dify/issues/41536) (closed) asked for an OpenTelemetry OTLP/HTTP tracing provider. Dify could export traces to any OTel backend once this lands.

## 4. Performance & Optimization
The data has no throughput or latency numbers.
- [Issue #45975](https://github.com/langgenius/dify/issues/45975): with Weaviate parent-child retrieval, Top K 50 returns only 13 results. A prefilter on active documents improves the results. This is a retrieval-quality problem, related to #40457.
- [Issue #46085](https://github.com/langgenius/dify/issues/46085): workflow "Export image" fails in Safari and hangs Firefox on medium-sized canvases.
- [PR #46099](https://github.com/langgenius/dify/pull/46099) moves rendered unit tests to real Browser Mode coverage. This is test infrastructure.

## 5. Stability & Regressions
Ranked by severity, based on the issue titles and summaries:

**Higher severity**
1. [#46095](https://github.com/langgenius/dify/issues/46095): Knowledge Base documents are automatically disabled every week. This is silent data unavailability. No fix PR appears in the data.
2. [#45975](https://github.com/langgenius/dify/issues/45975): Weaviate parent-child retrieval returns far fewer results than Top K. No fix PR appears in the data.
3. [#46034](https://github.com/langgenius/dify/issues/46034): the output of a workflow used as a tool is missing from the chat-messages SSE stream when the child workflow returns a non-streamed variable. No fix PR appears in the data.
4. [#39151](https://github.com/langgenius/dify/issues/39151) (closed): in a parallel fail-fast, other nodes' failures stay unattributed and stale. The issue was updated today after 61 comments.
5. [#44988](https://github.com/langgenius/dify/issues/44988) (closed, 1.18.0): concurrent app publishes can create duplicate AppTrigger rows. The schedule poller then dispatches the workflow once per duplicate.

**Medium severity**
- [#46063](https://github.com/langgenius/dify/issues/46063): the document-extractor fails on malformed DOCX files and on legacy `.doc` files renamed to `.docx`. A fix is in [PR #46084](https://github.com/langgenius/dify/pull/46084).
- [#44720](https://github.com/langgenius/dify/issues/44720): an Agent V2 node inside an Iteration fails to publish with "references non-upstream previous node".
- [#46054](https://github.com/langgenius/dify/issues/46054): the agent fails after image activity with Memory enabled on Dify Cloud (Agent Strategies 0.0.51).
- [#46038](https://github.com/langgenius/dify/issues/46038) and [#46055](https://github.com/langgenius/dify/issues/46055), both closed: Google Drive knowledge pipelines fail when the datasource credential ID is dropped, and file selection is missing in test runs.
- [#43594](https://github.com/langgenius/dify/issues/43594) (closed): trigger OAuth token refresh uses the OAuth client schema to encrypt and decrypt subscription credentials.
- [#39914](https://github.com/langgenius/dify/issues/39914): SSR outside `(commonLayout)` ignores `SERVER_CONSOLE_API_URL` and fetches system-features from `http://localhost:80`. This affects split-host deployments.
- [#46010](https://github.com/langgenius/dify/issues/46010): the custom API tool sends unset optional header and cookie parameters as empty strings or `"None"`.
- [#39719](https://github.com/langgenius/dify/issues/39719) (closed, 1.16.0): the web-1 container reports Unauthorized.
- [#46006](https://github.com/langgenius/dify/issues/46006) (closed): the HTTP request node cannot set parameters.

**Security and permissions**
- [PR #46053](https://github.com/langgenius/dify/pull/46053) (closed): the member role assignment endpoint was not gated on `workspace.member.manage` at the API layer. The check was only enforced by the enterprise RBAC inner API.
- [#43805](https://github.com/langgenius/dify/issues/43805): members cannot delete their own Skills without workspace-wide deletion permission.
- [#46031](https://github.com/langgenius/dify/issues/46031) (closed): request for a command tool to sync missing RBAC permissions.

**Low severity**
- [#46044](https://github.com/langgenius/dify/issues/46044): `parse_json_markdown` fails when trailing prose contains the other bracket kind.
- [#46100](https://github.com/langgenius/dify/issues/46100): Notion page expansion and preview can't be reached with the keyboard.
- [#46088](https://github.com/langgenius/dify/issues/46088): a renamed skill's display name doesn't update in the agent prompt.
- [#46016](https://github.com/langgenius/dify/issues/46016): about 90 es-ES strings are still in English.
- [#46060](https://github.com/langgenius/dify/issues/46060) (closed): browser test failures kept removing a dependency refresh PR from the merge queue.

## 6. What This Means for Application Developers
- **RAG:** if you use Weaviate with parent-child chunking, check that Top K results are complete ([#45975](https://github.com/langgenius/dify/issues/45975)). Also audit for documents that were disabled automatically ([#46095](https://github.com/langgenius/dify/issues/46095)).
- **Workflow-as-tool in chat apps:** a child workflow that returns a non-streamed variable can leave the output out of the SSE stream ([#46034](https://github.com/langgenius/dify/issues/46034)). Test this path before relying on it.
- **Agent V2:** avoid referencing `iteration.item` or outer variables from an Agent node inside an Iteration until [#44720](https://github.com/langgenius/dify/issues/44720) is resolved. The Agent backend is also being restructured ([#46092](https://github.com/langgenius/dify/pull/46092), [#46093](https://github.com/langgenius/dify/pull/46093)), so expect internal churn. Response shapes are stated to be preserved.
- **Document ingestion:** the DOCX fix in [PR #46084](https://github.com/langgenius/dify/pull/46084) would make the extractor tolerate bad files. Until it merges, validate uploads yourself.
- **Custom API tools:** unset optional headers and cookies may be sent as empty values or `"None"` ([#46010](https://github.com/langgenius/dify/issues/46010)). Set them explicitly or use a proxy to filter them.
- **Plugins:** version strings with suffixes such as `-fix1` may fail validation ([#46035](https://github.com/langgenius/dify/issues/46035)). Use plain semver.
- **Self-hosting:** if the web SSR fetches `localhost:80` on a split-host setup, you've hit [#39914](https://github.com/langgenius/dify/issues/39914).
- **Observability:** OTel export was requested in [#41536](https://github.com/langgenius/dify/issues/41536). Check the current state before depending on it.
- **Pending feature PRs:** tool parameter `reset_on_change` ([#43040](https://github.com/langgenius/dify/pull/43040)) and `show_on` ([#43048](https://github.com/langgenius/dify/pull/43048)) are open and would improve plugin and tool UIs. Cloud pricing and plan changes are in [#45897](https://github.com/langgenius/dify/pull/45897).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-11

## 1. Today's Highlights
Five release lines shipped in the last 24h: v1.110.0-rc.1, v1.109.0, the LTS patch v1.108.5, and backport patches v1.106.8, v1.104.9 and v1.103.11. On the code side, a large PR (#51119) would move Anthropic `/v1/messages` serving for the `anthropic` provider entirely to Rust. The issue queue is dominated by cost-attribution bugs (spend recorded as $0) and `/v1/messages` translation correctness problems.

## 2. Releases & Breaking Changes
The release notes were truncated in the source data, so I can't list change lists for these. Release notes are unavailable here, so check them before upgrading.
- **v1.110.0-rc.1**: release candidate, so don't use it for production.
- **v1.109.0**: current stable line. A user reports an Admin UI header search bar rendering bug on it ([#51177](https://github.com/BerriAI/litellm/issues/51177), closed).
- **v1.108.5 (LTS)**: the `lts` image tag points here. A backport of a per-user spend breakdown fix to `lts/1.108.x` is open ([#51043](https://github.com/BerriAI/litellm/pull/51043)).
- **v1.106.8, v1.104.9, v1.103.11**: older-line patch releases.
- All images are cosign-signed. The key was introduced in commit `e82a3c6`, so verify with the command in the release notes.
- **Possible migration concern**: v1.108.0 introduced a slow MCP `tools/list` path (see Stability below).

## 3. New Model & Hardware Support
No new model launches appear in today's data. Related in-flight work:
- Tripo native proxy routes and credit billing: [PR #51039](https://github.com/BerriAI/litellm/pull/50839) (correct link: #50839).
- SAP orchestration config handling and deployment caching: [PR #48597](https://github.com/BerriAI/litellm/pull/48597).
- Issue [#48145](https://github.com/BerriAI/litellm/issues/48145): JSON-defined openai-like providers drop tools when the model isn't in the catalog. A compatibility gap for new models.

## 4. Performance & Optimization
No benchmark numbers were published. Directional work:
- [PR #51119](https://github.com/BerriAI/litellm/pull/51119): ports the Python-only `/v1/messages` features for the `anthropic` provider to Rust and serves them on Rust only. It replaces the stack #51050–#51056 and #51106.
- [PR #50870](https://github.com/BerriAI/litellm/pull/50870) and [PR #50357](https://github.com/BerriAI/litellm/pull/50357): move router session pins and health-check deployment states to native Redis stores, off `DualCache` and redis-py.
- Memory: [#50740](https://github.com/BerriAI/litellm/issues/50740) (closed) found that proxy worker RSS grew linearly with requests because each request's Redis batch scope was never freed.

## 5. Stability & Regressions
Ranked by severity:
1. **Budget bypass** — [#34238](https://github.com/BerriAI/litellm/issues/34238) (open): end-user budgets can be bypassed through stale per-pod fallback spend after a Redis counter clean miss. No fix PR is linked.
2. **Spend recorded as $0 or null** — [#47675](https://github.com/BerriAI/litellm/issues/47675) and [#47908](https://github.com/BerriAI/litellm/issues/47908) (both closed). Related open fix: [PR #49625](https://github.com/BerriAI/litellm/pull/49625), custom deployment pricing on provider mismatch.
3. **Team `max_parallel_requests` not enforced** — [#49070](https://github.com/BerriAI/litellm/issues/49070). Fix: [PR #51184](https://github.com/BerriAI/litellm/pull/51184).
4. **A2A model access returns 403** — [#50679](https://github.com/BerriAI/litellm/issues/50679). Fix: [PR #51174](https://github.com/BerriAI/litellm/pull/51174).
5. **MCP `tools/list` takes 18–50 s on v1.108.0** — [#50065](https://github.com/BerriAI/litellm/issues/50065) (open). Cause: the legacy subscription listener after `notifications/initialized`. Affects clients such as Open WebUI.
6. **`/v1/messages` translation bugs**:
   - [#32357](https://github.com/BerriAI/litellm/issues/32357): `thinking_delta` streamed inside a text block, giving empty content in Claude Code.
   - [#49711](https://github.com/BerriAI/litellm/issues/49711): after an SSE keepalive, upstream failures aren't surfaced to Anthropic clients.
   - [#36524](https://github.com/BerriAI/litellm/issues/36524): guardrail write-back turns `document` blocks into `image`, causing 400s for PDFs.
   - [#49359](https://github.com/BerriAI/litellm/issues/49359): MCP tool failures drop `is_error`.
   - [#49046](https://github.com/BerriAI/litellm/issues/49046) (closed): `chatgpt/` encrypted reasoning dropped.
7. **Provider-specific bugs**:
   - [#47046](https://github.com/BerriAI/litellm/issues/47046): Vertex/Gemini context caching reorders the conversation.
   - [#48637](https://github.com/BerriAI/litellm/issues/48637): Databricks tool-only response raises `KeyError`.
   - [#50248](https://github.com/BerriAI/litellm/issues/50248): `COHERE_API_BASE` ignored for embeddings.
   - [#47327](https://github.com/BerriAI/litellm/issues/47327): `token_counter` rejects image detail `"original"`.
   - [PR #51146](https://github.com/BerriAI/litellm/pull/51146): Bedrock signing with the wrong session token.
   - [PR #50657](https://github.com/BerriAI/litellm/pull/50657): Bedrock stream not closed on abort.
   - [PR #50880](https://github.com/BerriAI/litellm/pull/50880): OpenRouter 200-with-failure responses.
8. **Observability and misc**:
   - [#51029](https://github.com/BerriAI/litellm/issues/51029): OTel `gen_ai.response.model` holds the requested group, not the model that responded.
   - [#49813](https://github.com/BerriAI/litellm/issues/49813) (closed): startup exit with `TZ=Asia/Calcutta` when `tzdata` is missing.
   - [PR #51198](https://github.com/BerriAI/litellm/pull/51198): deleted agents and MCP servers linger in access groups.

## 6. What This Means for Application Developers
- **Cost tracking**: if you use `custom_llm_provider` or `base_model` overrides, check that spend isn't recorded as $0, and cross-check against provider invoices until your version includes the fixes.
- **Budgets**: don't rely on end-user budgets as a hard control in multi-pod Redis deployments (#34238).
- **Claude Code and Anthropic-format clients**: reasoning-model streaming, keepalive error propagation and PDF guardrail round-trips are still fragile on `/v1/messages`. Test these paths before rollout.
- **MCP**: if you're on v1.108.0, MCP `tools/list` latency may be significantly worse for legacy-protocol clients. Consider waiting for a fix before upgrading.
- **Upgrade path**: use the `lts` tag (v1.108.5) for stability, and keep the 1.110 RC out of production.
- **Security**: new security mailing list and VDP links are in [PR #51199](https://github.com/BerriAI/litellm/pull/51199).

*Correction: the Tripo link in section 3 should read [PR #50839](https://github.com/BerriAI/litellm/pull/50839), and ignore the mislabeled "#51039" text.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
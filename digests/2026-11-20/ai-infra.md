# AI Infrastructure Digest 2026-11-20

> Generated: 2026-11-19 16:15 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report: 2026-11-20

**Scope note:** The digests cover only two projects, Dify (application platform) and LiteLLM (LLM gateway). No inference engine, local runtime or fine-tuning project was supplied. Sections 3 and 4 are therefore thin, and I have not filled the gaps from outside knowledge. Counts below are the items cited in the digests, not full repository totals.

## 1. Ecosystem Overview
Today's activity is at the gateway and application layers, not the engine layer. LiteLLM shipped five releases (one release candidate, three stable patches, one LTS patch). It is also moving cost and pricing logic from Python to Rust. Dify is rebuilding its agent runtime (Agent v2) and hardening the sandbox around it. Both projects are fixing regressions in the controls around models, such as rate limits, budgets, Top K retrieval and sandbox timeouts, more than adding new model capability.

## 2. Activity Comparison

| | Dify | LiteLLM |
|---|---|---|
| Issues cited | ~21 (about 9 closed) | ~19 (about 10 closed) |
| PRs cited | ~10 | ~12 |
| Release status | No release in 24h. v1.19.0 regressions still arriving | v1.111.0-rc.2, v1.110.1, v1.109.2, v1.106.11, and LTS v1.108.12 |
| Largest open work | BYOA external agents (#45918, XXL), Service API statistics (#46782, XXL) | Rust pricing stack (#52484, #52624–#52627) |
| Release notes usable? | n/a | No. Only cosign boilerplate, so changelogs and breaking changes are unknown |

LiteLLM is the more release-active project. Dify's activity is mostly PRs and bug triage on one version line.

## 3. Model Support Race
No new model architectures shipped today in either project, so there is no race to call.
- **LiteLLM** has provider and model additions only in open PRs. #52763 updates Azure and Together retirement dates and adds GMI Gemini 4 Hydrogen. #52854 adds API Store as an OpenAI-compatible provider with DeepSeek V4.1. #52681 serves Bedrock Claude Platform `/v1/messages` on Rust. The SGLang provider request (#13681) was closed as stale.
- **Dify** reported nothing new. Its model-adjacent item is a bug: Agent v2 workflow tools with file inputs run with `files=[]` (#45431).

Neither project is ahead. LiteLLM is the only one adding model coverage, and none of it has merged.

## 4. Performance Frontier
The digests contain no KV cache, batching, quantization, distributed-serving or kernel work. The optimization effort is in gateway and platform overhead:
- **LiteLLM, Rust cost pricing** (#52484, #52624, #52625, #52626, #52627). This moves token, Claude, `/v1/messages`, media and fee pricing out of Python. No benchmarks are given.
- **LiteLLM, memory retention.** A failed proxy call keeps its request body until a full GC (#52278, about 1 GiB growth per burst of 16 failed calls with 20 MiB bodies). A sync exception reference cycle pins messages (#48649). The Helm migration Job peaks at 1.15 GiB (#47076). All three are closed.
- **Dify, resource hygiene.** Closed fixes for SSE responses left open (#46565) and unclosed download bodies (#42905). Open items are RAG overview metrics polling after indexing finishes (#46699) and a hardcoded 10s OpenSearch timeout (#46750).

## 5. Layer Positioning
- **Application and agent platform (Dify):** workflow builder, RAG, and its own agent runtime and sandbox. It consumes model endpoints and does not serve them. It is moving toward external agents via A2A 1.0.
- **Gateway (LiteLLM):** the routing, budget, rate-limit, spend-tracking and MCP layer between applications and providers. Moving pricing to Rust makes it a hot-path component, not just a proxy.
- **Not represented today:** serving engines, local runtimes and fine-tuning frameworks.
- **Overlap:** both are adding MCP and A2A-style agent connectivity. LiteLLM has MCP tool discovery and elicitation work. Dify has BYOA.

## 6. Trend Signals
1. **Gateways are being rewritten for speed and cost accuracy.** The Rust pricing migration could change spend numbers. Compare spend before and after you upgrade.
2. **Agent runtimes are the new reliability surface.** Dify's sandbox hangs and timeout bugs (#46784, #46786) and LiteLLM's MCP gaps are the active bug classes. Gaps include multimodal tool results being dropped (#52560) and discovery regressions (#52849).
3. **Accounting correctness is a recurring weakness.** Examples are failed requests not counting toward RPM (#21312), priority routing ignoring `tpm` (#52548), duplicate budget webhooks (#44919), and Dify's Top K slots before dedup (#46584).
4. **Fast release trains carry regression risk.** Dify 1.19.0 has Human Input, Top K and UI regressions. LiteLLM's rc plus four patch lines is hard to track.

**What developers should do:**
- Pin to LiteLLM LTS v1.108.12 or a patched stable line, not the rc.
- Verify the read-replica fix (#52284) is in your version.
- Flush `s3_v2` logs before shutdown (#52588).
- Don't rely on gateway rate limits alone. Add provider-side limits.
- Test Dify Agent v2 file-input tools explicitly, and review #46780 before relying on persistent Chatflow agent history.
- Use non-streaming for Codex/`chatgpt` parallel tool calls on LiteLLM (#45348).
- Give the LiteLLM Helm migration Job more than 1Gi of memory on affected versions.

To get the engine, runtime and fine-tuning comparison (vLLM, SGLang, llama.cpp, Ollama, Unsloth), send the digests for those projects.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-20

Dify is an application-layer LLM platform, not an inference engine. This digest therefore covers the model-serving, gateway and agent-runtime areas it touches.

## 1. Today's Highlights
No release shipped in the last 24h. Activity centered on the **Agent v2 / Dify Agent** runtime, with several small fixes from one contributor for sandbox and SSE edge cases. Larger feature PRs landed for Chatflow session continuity and external agents (BYOA). Version 1.19.0 regressions are still arriving (Human Input 404, Top K accounting, classifier UI).

## 2. Releases & Breaking Changes
No new releases. Items to watch:
- **BYOA external agent backend** (A2A 1.0, durable invocations, no duplicate business POST on unknown outcome): [PR #45918](https://github.com/langgenius/dify/pull/45918) (open, XXL).
- **Service API statistics**: eight new `/v1/statistics/` endpoints, authenticated, no Console auth needed: [PR #46782](https://github.com/langgenius/dify/pull/46782) (open, XXL).
- **Chatflow session continuity**: a per-node setting for the New Agent node to start a fresh Agent session per user message, instead of always reusing participant history: [PR #46780](https://github.com/langgenius/dify/pull/46780).
- **Builder branch sync**: `feat/dify-builder` merged with main, about 346 commits behind: [PR #46767](https://github.com/langgenius/dify/pull/46767).
- Docker quick start now needs `DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN`, Docker Compose 2.35.0+ and OpenSSL. The zh-TW docs omitted this ([#46569](https://github.com/langgenius/dify/issues/46569), fixed by [PR #46570](https://github.com/langgenius/dify/pull/46570)).

## 3. New Model & Hardware Support
Nothing reported in the data. Related items:
- Agent v2 workflow tools: file inputs are hidden from the model, so calls run with `files=[]` ([#45431](https://github.com/langgenius/dify/issues/45431), open).
- A proposal to add Caddy as an alternative reverse proxy in docker-compose, with a parity-tested prototype ([#46728](https://github.com/langgenius/dify/issues/46728)).

## 4. Performance & Optimization
No benchmarks were reported. Related items:
- OpenSearch client timeout is hardcoded at 10s, so searches fail with read timeouts on cold k-NN graphs. The ask is to make it configurable ([#46750](https://github.com/langgenius/dify/issues/46750)).
- The new RAG overview keeps polling metrics after indexing finishes, which wastes requests ([#46699](https://github.com/langgenius/dify/issues/46699)).
- Closed issues: the Async Agent SDK left SSE responses open ([#46565](https://github.com/langgenius/dify/issues/46565)), and ArchiveStorage did not close download response bodies ([#42905](https://github.com/langgenius/dify/issues/42905)).

## 5. Stability & Regressions
Ranked by severity:
1. **Human Input form returns 404 "Form not found" in webapp (1.19.0).** The webapp surface was issued a BACKSTAGE token. Closed: [#46535](https://github.com/langgenius/dify/issues/46535).
2. **Knowledge retrieval: summary and original chunk hits use separate Top K slots before dedup (1.19.0).** This can reduce effective recall. Open, no fix PR seen: [#46584](https://github.com/langgenius/dify/issues/46584).
3. **Agent transient commands ignore timeout while replaying truncated output.** Fix: [PR #46785](https://github.com/langgenius/dify/pull/46785) for [#46784](https://github.com/langgenius/dify/issues/46784).
4. **Binding file preview blocks on a FIFO with no writer.** This is a potential hang in the agent sandbox. Fix: [PR #46787](https://github.com/langgenius/dify/pull/46787) for [#46786](https://github.com/langgenius/dify/issues/46786).
5. **Problem classifier cannot add a category by clicking (1.19.0).** Open: [#46744](https://github.com/langgenius/dify/issues/46744).
6. **`crypto.randomUUID` is not a function over plain HTTP.** Self-hosted setups without HTTPS are affected. Closed: [#46686](https://github.com/langgenius/dify/issues/46686) and [#45391](https://github.com/langgenius/dify/issues/45391).
7. **Workflow output panel double-encodes structured JSON.** Fix: [PR #46788](https://github.com/langgenius/dify/pull/46788) for [#46783](https://github.com/langgenius/dify/issues/46783).
8. **Download filenames don't encode `/` in `Content-Disposition`.** This violates RFC 5987/6266. Fix: [PR #46753](https://github.com/langgenius/dify/pull/46753) for [#46752](https://github.com/langgenius/dify/issues/46752).
9. **TTS audio fails to play in the browser.** Open: [#35880](https://github.com/langgenius/dify/issues/35880).
10. **Evaluation preview shows the current judge model, not the run's model.** Closed: [#46756](https://github.com/langgenius/dify/issues/46756).
11. **Canvas nodes intermittently disabled in 1.18.0.** Closed: [#45147](https://github.com/langgenius/dify/issues/45147).

Type-checker cleanup: four pyrefly diagnostics in the agent backend ([#46769](https://github.com/langgenius/dify/issues/46769), [PR #46770](https://github.com/langgenius/dify/pull/46770)). Mock-heavy tests: [#45585](https://github.com/langgenius/dify/issues/45585).

## 6. What This Means for Application Developers
- **Agent v2 is moving fast.** Expect sandbox hardening and semantics changes such as per-message sessions. If you rely on persistent agent history in Chatflow, check [PR #46780](https://github.com/langgenius/dify/pull/46780) before upgrading.
- **Workflow tools with file inputs under Agent v2** may silently run with no files ([#45431](https://github.com/langgenius/dify/issues/45431)). Test them explicitly.
- **On 1.19.0**, validate Human Input flows and RAG Top K behavior when summary indexing is enabled before rolling out.
- **Self-hosting over HTTP** can break UI features until the `randomUUID` fix ships. Terminate TLS in front, or use localhost.
- **OpenSearch deployments** should warm k-NN indexes. There is no timeout knob yet.
- **Service API statistics** ([PR #46782](https://github.com/langgenius/dify/pull/46782)) would enable usage dashboards without Console credentials, once merged.
- **Docker upgraders** must set the sandbox auth token in `docker/.env`.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-20

## 1. Today's Highlights
LiteLLM shipped a burst of releases: a v1.111.0 release candidate, patch releases on three stable lines (v1.110.1, v1.109.2, v1.106.11), and an LTS patch (v1.108.12). The main code activity is a stack of PRs from maciej-berri that move cost calculation (token, Claude, `/v1/messages`, media and fee pricing) from Python into Rust. Open bugs center on memory retention after failed calls, MCP edge cases, and routing and rate-limit accounting.

## 2. Releases & Breaking Changes
The release notes in the data only show the cosign verification boilerplate, so I can't list changelog items or breaking changes. Check the release pages before upgrading.
- **v1.111.0-rc.2**: release candidate for the next minor. Don't use it in production.
- **v1.110.1**, **v1.109.2**, **v1.106.11**: patch releases on older lines.
- **v1.108.12 (LTS)**: the `lts` image tag (`ghcr.io/berriai/litellm:lts`) now points to this release.
- All images are signed. Verify with `cosign verify` using the identity `BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main`.

## 3. New Model & Hardware Support
There are no hardware or quantization changes today. Model and provider additions are all in open PRs:
- [PR #52763](https://github.com/BerriAI/litellm/pull/52763): updates Azure and Together retirement dates in the cost map and adds GMI Gemini 4 Hydrogen.
- [PR #52854](https://github.com/BerriAI/litellm/pull/52854): adds API Store as an OpenAI-compatible provider, with DeepSeek V4.1 models and proper spend tracking (today it shows $0 when set up as a generic endpoint).
- [PR #52681](https://github.com/BerriAI/litellm/pull/52681): serves Bedrock Claude Platform `/v1/messages` on Rust only. It follows #52328, so all three Bedrock Messages routes would run on Rust.
- [Issue #13681](https://github.com/BerriAI/litellm/issues/13681): the SGLang provider request was closed as stale, with no implementation visible in the data.

## 4. Performance & Optimization
The Rust cost-pricing migration is a series of open PRs. None include benchmark numbers in the data.
- [#52484](https://github.com/BerriAI/litellm/pull/52484): Claude token calls, budget holds and auth price checks in Rust.
- [#52624](https://github.com/BerriAI/litellm/pull/52624): native `/v1/messages` pricing in the Rust route, so it isn't re-priced in Python.
- [#52627](https://github.com/BerriAI/litellm/pull/52627): token pricing for every provider and Decisions calls, replacing per-provider copies of the token math.
- [#52625](https://github.com/BerriAI/litellm/pull/52625): rerank, vector store, OCR, speech, transcription, search, video and image pricing.
- [#52626](https://github.com/BerriAI/litellm/pull/52626): A2A, MCP and guardrail fees, batch lines and session parts.

Memory-related reports:
- [#52278](https://github.com/BerriAI/litellm/issues/52278) (closed): failed proxy calls keep the request body in memory until a full GC. About 1 GiB growth per burst of 16 failed calls with 20 MiB bodies.
- [#48649](https://github.com/BerriAI/litellm/issues/48649) (closed): a failed sync `completion()` leaves an exception/Logging reference cycle that pins the messages.
- [#47076](https://github.com/BerriAI/litellm/issues/47076) (closed): the Helm migration Job is OOMKilled at 1Gi since v1.105.x because `prisma generate` runs after migration (1.15 GiB peak).

## 5. Stability & Regressions
Ranked by severity:
1. [#52284](https://github.com/BerriAI/litellm/issues/52284) (closed): with `DATABASE_URL_READ_REPLICA`, a reconnect cancelled by its 2 s timeout leaves the reader Prisma engine permanently dead. Reads never fall back to the writer and the proxy doesn't self-heal. Closed, so presumably fixed.
2. [#52588](https://github.com/BerriAI/litellm/issues/52588) (open): proxy shutdown can leave `s3_v2` log events undrained, losing logs. No fix PR is visible.
3. [#21312](https://github.com/BerriAI/litellm/issues/21312) (open): failed requests aren't counted toward RPM limits.
4. [#52548](https://github.com/BerriAI/litellm/issues/52548) (open): priority routing groups ignore deployment `tpm` limits and fail over early on `rpm` under `usage-based-routing-v2`.
5. [#44919](https://github.com/BerriAI/litellm/issues/44919) (open): concurrent budget checks send duplicate webhook alerts.
6. [#45348](https://github.com/BerriAI/litellm/issues/45348) (open): parallel tool-call arguments are dropped when streaming `/v1/messages` for the `chatgpt` (Codex) provider. Each `tool_use` block has empty `input`.
7. [#52560](https://github.com/BerriAI/litellm/issues/52560) (open): during automatic MCP tool execution, `ImageContent` and `EmbeddedResource` are replaced with text placeholders.
8. [#52849](https://github.com/BerriAI/litellm/issues/52849) (open): since 1.108.11, MCP tool discovery omits `auth_type: authorization` servers when no upstream credential is supplied.
9. [#51452](https://github.com/BerriAI/litellm/issues/51452) (open): `ModelNotMappedError` in `litellm/utils.py`, with 11 comments.
10. [#52456](https://github.com/BerriAI/litellm/issues/52456) (closed): out-of-order OpenAI Decisions answers were silently mapped to the wrong names in 1.110.0.
11. [#49411](https://github.com/BerriAI/litellm/issues/49411) (closed): `voyage/` embeddings ignore `VOYAGE_API_BASE`.
12. [#45605](https://github.com/BerriAI/litellm/issues/45605) (closed): `custom_auth_run_common_checks` skipped the key `max_budget` check.
13. [#52534](https://github.com/BerriAI/litellm/issues/52534) (open): a Gemini direct image edit without an image raises a bare `ValueError` instead of a 400.

Related fix PRs in flight:
- [#51986](https://github.com/BerriAI/litellm/pull/51986): unregister Vertex pass-through credentials when a deployment is disabled or removed.
- [#50785](https://github.com/BerriAI/litellm/pull/50785): stop SCIM user writes from overwriting teams added by a concurrent group push.
- [#39888](https://github.com/BerriAI/litellm/pull/39888): preserve structured chunks through streaming hooks.
- [#52384](https://github.com/BerriAI/litellm/pull/52384): return an upstream `-32042` URL elicitation error from `/mcp` as a JSON-RPC error.

Also worth tracking: [#33414](https://github.com/BerriAI/litellm/issues/33414) (closed), where Docker was leaving zombie processes.

## 6. What This Means for Application Developers
- **Routing and rate limits:** don't rely on RPM accounting counting failed calls (#21312). With `priority` routing, `tpm` and `rpm` limits may not behave as they do with `order` (#52548). Add limits at the provider as well.
- **MCP:** multimodal tool results (images, embedded resources) are lost in auto-execution (#52560). Tool discovery may differ after upgrading past 1.105.x if you use `auth_type: authorization` (#52849). Watch the elicitation work in #52384 and the response-header callbacks in #52678 if you use MCP.
- **Streaming with Codex/`chatgpt` provider:** streaming `/v1/messages` with parallel tool calls loses arguments (#45348). Use non-streaming as a workaround, as the issue reports it works.
- **Operations:**
  - For stability, prefer the LTS (v1.108.12) or a patched stable line over the rc.
  - If you run a read replica, confirm the fix for #52284 is in the version you deploy.
  - Flush logs before shutdown if you use `s3_v2` (#52588).
  - Budget your Helm migration Job memory above 1Gi on affected versions.
- **Cost tracking:** the Rust pricing migration could change spend numbers or logging behavior. Compare spend before and after upgrading once it lands.
- **Observability:** WildEdge's OTel v2 preset is a request, not yet implemented ([#52290](https://github.com/BerriAI/litellm/issues/52290)). The proxy already exports OTLP.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Infrastructure Digest 2026-11-28

> Generated: 2026-11-27 17:10 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison — 2026-11-28

**Scope note:** Today's data covers only two projects: Dify (application/workflow platform) and LiteLLM (LLM gateway). No inference engine, local runtime or fine-tuning digests (vLLM, SGLang, llama.cpp, Ollama, Unsloth) were provided. Sections 3–5 are limited accordingly, and I don't infer anything about the missing projects.

## 1. Ecosystem Overview
Today's activity sits at the application and gateway layers, not the engine layer. Both projects are mostly doing correctness and hardening work: Dify is migrating its session management and fixing Agent V2 bugs, and LiteLLM is fixing translation and billing regressions. Neither shipped a stable feature release. LiteLLM cut a dev build and an LTS patch, and Dify had no release. The common theme is that moving from "supports many backends" to "behaves correctly across them" is the main cost. This shows in vector-DB scoping leaks, tool-call mapping errors, and cost and usage accounting.

## 2. Activity Comparison

Exact issue and PR totals aren't in the digests, so the table counts only the items each digest names.

| Project | Layer | Issues named | PRs named | Release status |
|---|---|---|---|---|
| Dify | App/agent platform | ~20 (about 6 closed) | ~13 (#47362, #47376, #47396, #47399, #47401, #47404, #45896, #47402, #47375, #47392, #47365, #47397) | None in 24h |
| LiteLLM | LLM gateway | ~25 (about 4 closed) | ~14 (#54892, #53262, #54888, #54787, #54886, #54883, #54882, #54887, #54891, #51069, #51839, #52810, #54179, #46192) | v1.113.0-dev.1 (dev), v1.108.19 (LTS), v1.108.20 in prep |

- Both repos have heavy open-issue activity, with closures that look like stale-bot cleanup (LiteLLM says so explicitly).
- LiteLLM has the more mature release process, with an LTS line, backports and cosign-signed images. Dify's work is concentrated in a single refactor (#45584).

## 3. Model Support Race
No new models or architectures shipped in either project today, so no one leads.

- **LiteLLM:** Provider breadth is growing through two open OpenAI-compatible provider PRs (Inference.net #54787, Cayman AI #54886). Claude 5.x adaptive thinking is in use through the proxy, but it exposes bugs: thinking-block reordering on `/v1/responses` (#54855) and Gemini-to-Anthropic tool-call mapping (#53345).
- **Dify:** There are no new model or hardware backends. The notable capability work is #47396, a `browse_web` tool built on browser-use, and a proposed sv-SE locale (#42448).
- **Takeaway:** Support for new frontier models is now judged by whether multi-turn, tool-use and thinking semantics survive translation. Day-0 availability is no longer the measure.

## 4. Performance Frontier
Neither digest reports benchmarks. Nothing today concerns KV cache, batching, quantization, distributed serving or kernels, because the engines aren't in scope. The optimization effort that is visible:

- **Concurrency and connections (LiteLLM):** the uvloop 0.23.0 bump (#54887) fixes a socket double-close after cancelled connects (#44623). The `s3_v2` shutdown drain (#52810) prevents log loss.
- **Payload control (LiteLLM):** `image_guard` (#51839) trims oversized images before they reach vLLM-backed multimodal deployments. This is a gateway-side protection for the engine layer.
- **Resource handling (Dify):** the `db.session` migration (#45584) avoids holding DB sessions across external calls. Storage amplification from duplicated workflow graph JSON (#47158) is closed.
- **Tooling latency:** LiteLLM's Swagger UI blocks the main thread for about 9–10 s on load (#54707). Its Rust CI timeout was raised from 30 to 45 minutes as a stopgap (#54891).

## 5. Layer Positioning

| Layer | Project | Role today |
|---|---|---|
| Application / agent platform | Dify | Workflows, Agent V2, RAG over many vector DBs, MCP, CLI (difyctl) |
| LLM gateway | LiteLLM | Unified API over many providers, translation across API formats, key/team governance, spend tracking, MCP, with a Rust gateway in progress |
| Serving engine / local runtime / fine-tuning | Not covered today | No data |

- The two projects connect through the gateway. Dify consumes model endpoints, and LiteLLM exposes OpenAI-, Anthropic- and Gemini-style APIs over them.
- Both share failure modes at their boundaries: Dify has vector-DB adapter bugs, and LiteLLM has provider translation bugs.
- LiteLLM is also building a Rust gateway, including key team and organization population before admit (#54883, #54882). This suggests it expects to move hot-path work out of Python.

## 6. Trend Signals

1. **Correctness over features.** The top items in both digests are silent-failure bugs: Couchbase ignoring `document_ids_filter` (#47400), Lindorm deleting only 10 matches (#47398), fabricated `exit_code=0` (#47366), and billing and usage mis-attribution (#54803, #54804, #54848).
2. **Agent security and observability are the weak point.** Inline secrets are not redacted from agent request inputs (#47386). Oversized spans drop entire Langfuse traces (#47327). Dynamic MCP headers don't resolve in Agent V2 (#47224). LiteLLM's MCP bugs fall in the same area (#49857, #50911).
3. **Multi-tenant governance gaps.** LiteLLM's team model access isn't enforced at `/key/generate` (#38629), and passthrough batches are listed (#54793).
4. **Gateway work is moving to Rust and to LTS branching.** This shows up in the Rust CI work and the 1.108.x backports.
5. **External deadlines matter.** OpenAI's Evals API shuts down Nov 30, and LiteLLM still calls `/v1/evals` (#47212).

**What application developers should do**
- Pin LiteLLM to the `lts` tag (1.108.19) and treat v1.113.0-dev.1 as non-production. Reconcile Gemini, Vertex and `code_interpreter` spend against provider invoices on v1.110.2.
- Avoid replaying multi-thinking-block conversations through `/v1/responses` with Claude 5.x. Use `/v1/messages` or chat completions.
- In Dify Agent V2, keep secrets out of the agent env and audit existing traces. If you need dynamic MCP headers, stay on legacy Agent.
- Don't rely on Couchbase `document_ids_filter` or on Lindorm deletes until #47401 and #47399 merge. Validate team model lists yourself rather than trusting `/key/generate`.
- Migrate off the OpenAI Evals API before Nov 30, and pin uvloop to 0.23.0 or later if you build your own LiteLLM image.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-28

## 1. Today's Highlights
No release in the last 24h. Activity centers on the long-running `db.session` → injected-session migration (#45584) and a batch of newly filed Agent V2 bugs: MCP header resolution, secret redaction and Langfuse trace export. Two vector-DB bugs (Couchbase, Lindorm) already have fix PRs, and a browser-use layer for agent apps arrived as a large feature PR.

## 2. Releases & Breaking Changes
None in the last 24h.

Two items to watch:
- [#47362](https://github.com/langgenius/dify/pull/47362) (XXL) adds end-user authentication and personal tool connections for WebApps. It separates End User sign-in from Console workspace admission, which may change auth flows when it lands.
- [#47376](https://github.com/langgenius/dify/pull/47376) (closed) renamed "Message Credits" to "AI Credits" in backend error copy. Only user-facing text changed; identifiers, tables and env vars were left alone.

## 3. New Model & Hardware Support
No new models or hardware backends today. Related items:
- [#47396](https://github.com/langgenius/dify/pull/47396) (XXL, open) adds an opt-in browser layer. Agents get a single `browse_web` tool that drives real Chrome through browser-use. The tracking issue is [#47395](https://github.com/langgenius/dify/issues/47395).
- [#42448](https://github.com/langgenius/dify/issues/42448) proposes a Swedish (sv-SE) locale.

## 4. Performance & Optimization
The data has no benchmark numbers. Efficiency-related items:
- [#47158](https://github.com/langgenius/dify/issues/47158) (closed) reported storage amplification. Every published workflow run saved an identical copy of the graph JSON. It is now closed.
- [#47399](https://github.com/langgenius/dify/pull/47399) changes Lindorm `delete_by_metadata_field` to delete every matching document, replacing the read-IDs-then-batch-delete approach.
- [#45584](https://github.com/langgenius/dify/issues/45584) is the refactor behind many PRs. They move code from the global `db.session` to short-lived, explicitly owned sessions. This avoids holding DB sessions across external calls, as in [#45896](https://github.com/langgenius/dify/pull/45896) for moderation. Related PRs: [#47402](https://github.com/langgenius/dify/pull/47402), [#47375](https://github.com/langgenius/dify/pull/47375), [#47392](https://github.com/langgenius/dify/pull/47392), [#47365](https://github.com/langgenius/dify/pull/47365), and [#47397](https://github.com/langgenius/dify/pull/47397) (closed).

## 5. Stability & Regressions
Ranked by severity:

1. **Silent data and correctness issues in vector DBs**
   - [#47400](https://github.com/langgenius/dify/issues/47400): Couchbase ignores `document_ids_filter`, so a restricted search still returns other documents. This is a retrieval-scoping leak. The fix is [#47401](https://github.com/langgenius/dify/pull/47401).
   - [#47398](https://github.com/langgenius/dify/issues/47398): Lindorm `delete_by_metadata_field` deletes only the first 10 matches. The fix is [#47399](https://github.com/langgenius/dify/pull/47399).
   - [#47357](https://github.com/langgenius/dify/issues/47357): Hybrid Search returns 0 results while vector and full-text search work (Dify 1.19, Weaviate, Ollama). No fix PR yet.
2. **Agent V2 security and observability**
   - [#47386](https://github.com/langgenius/dify/issues/47386): inline secret values in the agent env are not redacted from the node's `agent_backend_request` input. This can leak secrets into logs and traces. No fix PR yet.
   - [#47327](https://github.com/langgenius/dify/issues/47327): a span over the hardcoded 1 MiB delivery limit blocks the whole workflow trace from reaching Langfuse. No fix PR yet.
   - [#47224](https://github.com/langgenius/dify/issues/47224): dynamic MCP HTTP headers are not resolved in Agent V2, though they work in legacy Agent (v1.20.0). No fix PR yet.
3. **Execution and tooling**
   - [#47366](https://github.com/langgenius/dify/issues/47366): shellctl `TransitionStatus` fabricates `exit_code=0` on failed, terminated and lost jobs. A failure can look like a success. No fix PR yet.
   - [#47403](https://github.com/langgenius/dify/issues/47403): difyctl emits buffered SSE events after Ctrl+C. The fix is [#47404](https://github.com/langgenius/dify/pull/47404).
   - [#47388](https://github.com/langgenius/dify/issues/47388): difyctl file-map keys can produce ambiguous or invalid multipart parts.
   - [#47389](https://github.com/langgenius/dify/issues/47389): difyctl validation error locations lose escaped and empty property names.
4. **Minor**
   - [#46152](https://github.com/langgenius/dify/issues/46152) (closed): serializing an HTTP request dropped a trailing `?` from the query string, which affected plugin triggers.

## 6. What This Means for Application Developers
- **Agent V2:** Don't rely on inline secrets in the agent env until [#47386](https://github.com/langgenius/dify/issues/47386) is fixed. Use proper secret management, and check traces and logs for exposure. If you depend on dynamic MCP headers ([#47224](https://github.com/langgenius/dify/issues/47224)), stay on legacy Agent for now. Large span payloads may drop Langfuse traces ([#47327](https://github.com/langgenius/dify/issues/47327)).
- **Workflow-as-Tool:** Published workflow updates are not auto-synced to the tool today. [#47364](https://github.com/langgenius/dify/issues/47364) requests an opt-in sync. Re-publish the tool manually in the meantime.
- **Skills and environment:** Request-scoped dynamic env vars for Skills in Agent V2 are only a request ([#47360](https://github.com/langgenius/dify/issues/47360)).
- **RAG:** If you use Couchbase, per-document retrieval restriction is unreliable until [#47401](https://github.com/langgenius/dify/pull/47401) merges. Lindorm users should verify deletions. Weaviate and Ollama users who see empty Hybrid Search results can fall back to vector or full-text search.
- **CLI automation:** difyctl cancellation and multipart edge cases are being fixed. Avoid unusual file-map keys such as empty keys or keys containing brackets.
- **Contributors:** The #45584 session refactor has many open `good first issue` entries, and several PRs are marked waiting-for-author. Expect more internal API churn there, with no user-facing behavior change intended.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-28

## 1. Today's Highlights
LiteLLM cut a new dev build (v1.113.0-dev.1) and an LTS patch (v1.108.19), with v1.108.20 already being prepared on the LTS branch ([PR #54892](https://github.com/BerriAI/litellm/pull/54892)). The day's bug reports centre on LLM translation: Gemini/Anthropic tool-call mapping, `/v1/responses` thinking-block replay, and cost and usage accounting regressions in v1.110.2. A uvloop socket double-close bug ([#44623](https://github.com/BerriAI/litellm/issues/44623)) has a fix PR in flight ([#54887](https://github.com/BerriAI/litellm/pull/54887)).

## 2. Releases & Breaking Changes
- **v1.113.0-dev.1**: dev pre-release. The notes in the data are truncated, so no changelog details are available. The release is cosign-signed (`ghcr.io/berriai/litellm:v1.113.0-dev.1`).
- **v1.108.19 (LTS)**: the `lts` image tag points to this release. The next patch, 1.108.20, is being prepared in [PR #54892](https://github.com/BerriAI/litellm/pull/54892). Open backports to `lts/1.108.x`:
  - [#53262](https://github.com/BerriAI/litellm/pull/53262): audit log fixes. Since v1.108.0, `GET /audit` has returned a 500 once a team or key is updated with audit logging on.
  - [#54888](https://github.com/BerriAI/litellm/pull/54888): Gemini file URIs are read from every Responses `input_file` field (`file_id`, `file_data`, `file_url`).
- **Deprecation notice**: [#9753](https://github.com/BerriAI/litellm/issues/9753) (22 comments) covers the deprecated Prisma Python client and asks whether LiteLLM plans to move away from it. No decision appears in the data.
- **External deadline**: OpenAI shuts down the Evals API on Nov 30. `litellm/llms/openai/evals/transformation.py` still calls `/v1/evals` ([#47212](https://github.com/BerriAI/litellm/issues/47212)).

## 3. New Model & Hardware Support
- New OpenAI-compatible provider PRs, all open:
  - Inference.net, with cost map rows ([#54787](https://github.com/BerriAI/litellm/pull/54787)).
  - Cayman AI ([#54886](https://github.com/BerriAI/litellm/pull/54886)). The PR uses a raw-IP HTTP base URL, so review it carefully.
- [#53345](https://github.com/BerriAI/litellm/issues/53345): Claude 5.x adaptive thinking is in active use through the proxy (see Stability).
- [#28636](https://github.com/BerriAI/litellm/issues/28636): ElevenLabs speech-to-text does not pass through diarization options.
- Rust gateway work continues: [#54883](https://github.com/BerriAI/litellm/pull/54883) and [#54882](https://github.com/BerriAI/litellm/pull/54882) populate virtual key team memberships and organizations before admit.

## 4. Performance & Optimization
No benchmark numbers were reported today. Related items:
- [#54887](https://github.com/BerriAI/litellm/pull/54887) bumps uvloop to 0.23.0.
- [#54707](https://github.com/BerriAI/litellm/issues/54707): the Swagger UI blocks the browser main thread for about 9–10 s on load and 6.6–7.4 s per operation expand. The cause is swagger-client's OpenAPI 3.1 normalization.
- [#54891](https://github.com/BerriAI/litellm/pull/54891) raises the Rust CI job timeout from 30 to 45 minutes as a stopgap. Test sharding ([#51069](https://github.com/BerriAI/litellm/pull/51069)) is the intended fix.
- [#51839](https://github.com/BerriAI/litellm/pull/51839): an `image_guard` callback that trims oversized image payloads before they reach vLLM-backed multimodal deployments.
- [#52810](https://github.com/BerriAI/litellm/pull/52810): drains queued `s3_v2` logs on proxy shutdown, so buffered events are no longer lost.

## 5. Stability & Regressions
Ranked by severity.

1. **Billing and usage regressions in v1.110.2**
   - [#54803](https://github.com/BerriAI/litellm/issues/54803) (closed): Vertex image generations were billed at the standard rate when Priority or Flex was served.
   - [#54804](https://github.com/BerriAI/litellm/issues/54804) (closed): Gemini image `thoughtsTokenCount` was dropped again, a regression of #52220.
   - [#54848](https://github.com/BerriAI/litellm/issues/54848) (open): `code_interpreter` interception logs the follow-up usage on the outer call. Responses double-count it, and chat drops the first model call.
2. **Request translation correctness**
   - [#53345](https://github.com/BerriAI/litellm/issues/53345): Gemini `generateContent` to Anthropic drops parallel calls to the same function and duplicates `tool_result` ids.
   - [#54855](https://github.com/BerriAI/litellm/issues/54855): `/v1/responses` with Anthropic reorders thinking and text blocks on replay. Claude 5.x then rejects the conversation.
   - [#38610](https://github.com/BerriAI/litellm/issues/38610): `/v1/messages` streaming returns 200 with an SSE error chunk when the fallback also fails.
3. **Authorization and tenancy**
   - [#38629](https://github.com/BerriAI/litellm/issues/38629): team model access is not enforced at `/key/generate`, and `/key/update` validates the pre-update model list.
   - [#54793](https://github.com/BerriAI/litellm/issues/54793): `GET /v1/batches` lists passthrough-managed batches.
4. **Connection safety**
   - [#44623](https://github.com/BerriAI/litellm/issues/44623): uvloop 0.22.1 can close unrelated sockets after a cancelled connect. Fix PR: [#54887](https://github.com/BerriAI/litellm/pull/54887).
   - [#54179](https://github.com/BerriAI/litellm/pull/54179): preserves files and rewinds on `ConnectError` resend.
5. **MCP and other**
   - [#49857](https://github.com/BerriAI/litellm/issues/49857): the MCP `dcr_bridge` relay breaks RFC 9207 issuer matching.
   - [#50911](https://github.com/BerriAI/litellm/issues/50911): an MCP server looked up by alias reports `unknown` health.
   - [#54763](https://github.com/BerriAI/litellm/issues/54763): `validate_environment` and `supports_response_schema` start the OAuth device login for `chatgpt/` and `github_copilot/` models.
   - [#54802](https://github.com/BerriAI/litellm/issues/54802): the bundled Lens UI calls Lens 0.2 paths, so against Lens 0.3+ it gets 404s.
   - [#46192](https://github.com/BerriAI/litellm/pull/46192): count validation rejects an assistant `tool_calls` turn that has no `content` key.

I found no fix PRs for the billing, translation or authorization items. Several older issues were closed today, which is probably stale-bot cleanup.

## 6. What This Means for Application Developers
- **Cost tracking**: if you run v1.110.2 with Gemini or Vertex image models, or with `code_interpreter_interception`, cross-check spend against provider invoices until fixes land.
- **Claude 5.x and the Responses API**: avoid replaying multi-thinking-block conversations through `/v1/responses`. Use `/v1/messages` or chat completions where you can.
- **Gemini-format clients routed to Anthropic**: avoid parallel calls to the same function until [#53345](https://github.com/BerriAI/litellm/issues/53345) is fixed.
- **Multi-tenant deployments**: do not rely on `/key/generate` to enforce team model catalogs. Validate team model lists yourself ([#38629](https://github.com/BerriAI/litellm/issues/38629)).
- **Production pinning**: use the `lts` tag (1.108.19, soon 1.108.20) for stability. Treat v1.113.0-dev.1 as non-production.
- **Timeouts**: connect-timeout setups are exposed to the uvloop bug until 0.23.0 ships. If you build your own image, pin uvloop to 0.23.0 or later.
- **OpenAI Evals**: migrate off the Evals API before Nov 30.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
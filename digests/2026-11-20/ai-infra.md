# AI Infrastructure Digest 2026-11-20

> Generated: 2026-11-20 15:53 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-11-20

**Coverage note:** Only two digests were supplied: Dify (an LLM app platform) and LiteLLM (a gateway). No serving engines (vLLM, SGLang), local runtimes (llama.cpp, Ollama) or fine-tuning frameworks (Unsloth) were included. Sections 3 to 5 therefore cover the application and gateway layers only, and I don't infer anything about the missing projects.

## 1. Ecosystem Overview
Today's activity sits at the layers above the inference engine, and it centers on reliability rather than new capability. LiteLLM shipped six release tags across five version lines, while open work concentrates on silent correctness failures: misreported `finish_reason`, lost streamed usage and budget overshoot. Dify had no release. Its open items are mostly months-old Agent and workflow bugs, plus a 1.19.0 regression. Both projects are hardening for enterprise use, through FIPS/OpenSSL and security PRs at LiteLLM and RBAC defaults and plugin-daemon error handling at Dify. The one signal that reaches down to the engine layer is a Dify RFC about LLM prefix-cache loss.

## 2. Activity Comparison

| Project | Issues | PRs | Release status |
|---|---|---|---|
| Dify | 329 total; digest covers the top 30 by comments | 142 total; digest covers the top 20 by comments | None in the last 24h |
| LiteLLM | Not stated; about 25 cited, 7 closed and the rest open | Not stated; about 20 cited | 6 tags: v1.111.0-rc.3, v1.110.2, v1.109.3, v1.108.13 (LTS), v1.106.12, v1.112.0-dev.1 |

- The Dify counts are the only totals in the data, and they aren't directly comparable to LiteLLM's.
- LiteLLM's release notes for the RC and patches show only cosign verification, so their contents are unknown.

## 3. Model Support Race
- **LiteLLM is the only project here with model-catalog work.**
  - [PR #50768](https://github.com/BerriAI/litellm/pull/50768) is open and adds Meta Muse models on Vertex AI (Wonder 1.0, Ember 1.0, Spark 1.3) with native Responses routing.
  - [PR #46642](https://github.com/BerriAI/litellm/pull/46642) is open and adds SAP AI Core `reasoning_content`, which is a list of `{content, signature}` objects. LiteLLM currently types the field as `Optional[str]`.
  - [PR #53108](https://github.com/BerriAI/litellm/pull/53108) removes an undocumented Databricks cost-map entry.
- **Dify has no model or hardware work.**
  - Its only new capability is the BYOA external-agent PR ([#45918](https://github.com/langgenius/dify/pull/45918)), which is not a model feature.
  - [PR #46859](https://github.com/langgenius/dify/pull/46859) adds a Swedish UI locale.
- **Verdict:** LiteLLM leads, but nothing in the data shows a shipped model. Both new-model PRs are open or in the catalog stage. I can't rank new-architecture support without the engine projects.

## 4. Performance Frontier
There are no benchmark numbers in either digest. The nearest items are:
- **KV/prefix cache:** Dify [#44826](https://github.com/langgenius/dify/issues/44826) says Agent context compaction cuts the prefix-cache hit rate to about 10%, against about 99% with a stable prefix. This is the most infrastructure-relevant item in the set. It is an unverified reporter claim, the issue is open and no fix is linked.
- **Streaming path:** LiteLLM [PR #43718](https://github.com/BerriAI/litellm/pull/43718) keeps the streaming fast path when guardrails use only `pre_call`. Dify [#41556](https://github.com/langgenius/dify/issues/41556) (closed) covered chunked streaming output.
- **Connection handling:** Dify [PR #39321](https://github.com/langgenius/dify/pull/39321) tries streamable-http first for MCP. This avoids a hang of up to 300s on ambiguous URL paths.
- **Not covered today:** batching, quantization, distributed serving and kernels have no data.
- **FIPS work:** LiteLLM's OpenSSL PRs ([#53103](https://github.com/BerriAI/litellm/pull/53103), [#53104](https://github.com/BerriAI/litellm/pull/53104), [#53070](https://github.com/BerriAI/litellm/pull/53070)) are compliance changes, not speed changes.

## 5. Layer Positioning

| Layer | Project | Role today |
|---|---|---|
| Application / agent platform | Dify | Workflow, Agent, plugin and MCP orchestration. It sits above any model server and is a consumer of vLLM or SGLang, not an engine itself. |
| Gateway / routing | LiteLLM | Provider translation, budgets, routing, usage accounting, MCP and A2A. It is the translation layer between apps and providers. |
| Serving engine, local runtime, fine-tuning | Not in the data | No assessment possible. |

The two overlap at MCP and agent protocols. Both have open MCP auth and tool-listing defects: Dify [#36230](https://github.com/langgenius/dify/issues/36230) and LiteLLM [#52849](https://github.com/BerriAI/litellm/issues/52849) and [#37222](https://github.com/BerriAI/litellm/issues/37222).

## 6. Trend Signals
1. **Silent correctness failures are the main risk.**
   - LiteLLM maps errors to `finish_reason: "stop"` ([#48721](https://github.com/BerriAI/litellm/issues/48721)), so router retries never run.
   - Dify's Agent can fabricate tool-call success ([#40671](https://github.com/langgenius/dify/issues/40671)).
   - Both let a failure look like a success.
2. **Metering is unreliable.** Budgets overshoot by about 10% ([#50125](https://github.com/BerriAI/litellm/issues/50125)), and streamed usage is dropped or estimated (#46059, #46613, #36882).
3. **MCP integration is immature.** Auth and tool-discovery bugs are open in both projects.
4. **Enterprise and compliance hardening is rising.** FIPS images, a security-hardening PR (LiteLLM [#53098](https://github.com/BerriAI/litellm/pull/53098)), cosign-signed releases and Dify's RBAC change ([#46860](https://github.com/langgenius/dify/pull/46860)).
5. **Agent-to-engine coupling is emerging.** Agent context management can undermine prefix caching on self-hosted backends.

**What developers should do:**
- Verify tool results and output completeness independently. Don't rely on `finish_reason` or an agent's claim that a tool ran.
- Leave at least 10% headroom on budget caps, and don't bill from proxy-reported streamed usage.
- Pin LiteLLM to LTS v1.108.13 or a patched line, verify images with cosign, and skip the v1.111.0 RC and the dev build.
- Delay Dify 1.19.0 if you use the Question Classifier ([#46744](https://github.com/langgenius/dify/issues/46744)).
- Add Celery worker liveness checks and a restart policy for self-hosted Dify ([#44188](https://github.com/langgenius/dify/issues/44188)).
- Add a restart playbook for LiteLLM read-replica deployments ([#52284](https://github.com/BerriAI/litellm/issues/52284)).
- Track the prefix-cache hit rate if you run long Agent sessions on vLLM or SGLang.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest — 2026-11-20

(Note: Dify is an LLM app platform, not an inference engine. Sections 3 and 4 are mostly empty for that reason. The data comes from the top 30 issues and top 20 PRs by comment count, not all 329 issues and 142 PRs.)

## 1. Today's Highlights
No release shipped in the last 24h. Activity centers on the v1.16–1.19 Agent and workflow stack. Several months-old Agent bugs are still open and active. A new 1.19.0 regression (the Question Classifier can't add categories) was reported today. PR work focuses on plugin-daemon error handling, RBAC defaults and frontend test and refactor cleanup.

## 2. Releases & Breaking Changes
No releases in the last 24h.

Behavior change under review: [PR #46860](https://github.com/langgenius/dify/pull/46860) stops automatically adding all workspace members to new apps when RBAC is enabled. It fixes #46855. This would change default app visibility, so check it before upgrading if you rely on RBAC.

## 3. New Model & Hardware Support
Nothing on model or hardware backends today.

- [PR #46859](https://github.com/langgenius/dify/pull/46859) adds a Swedish (`sv-SE`) UI locale. This is localization only.
- [PR #45918](https://github.com/langgenius/dify/pull/45918) is a large backend feature for BYOA (bring-your-own-agent) external agents. It covers connection verification, an immutable Agent Card, masked credentials, and workflow execution support. It's the most significant new capability in flight.

## 4. Performance & Optimization
No measured numbers were reported. Items of interest:

- [Issue #44826](https://github.com/langgenius/dify/issues/44826) (RFC, 11 comments) says Agent context compaction may break LLM prefix caching. The reporter cites a hit rate of about 10%, against about 99% when the prefix stays stable. This matters for cost and latency on self-hosted vLLM/SGLang backends. I can't confirm the numbers from the summary. The issue is open with no linked fix.
- [Issue #41556](https://github.com/langgenius/dify/issues/41556) (closed, v1.16.0) reported streaming output arriving in chunks instead of token by token.
- [PR #39321](https://github.com/langgenius/dify/pull/39321) makes the MCP client try streamable-http first. It also catches httpx timeouts. Before, a streamable-http server on an ambiguous URL path could hang for the default 300s `sse_read_timeout`.

## 5. Stability & Regressions
Ranked roughly by severity. None of the issues below links a fix PR, except where noted.

1. **Worker stops consuming Celery tasks after a Redis connection reset** (v1.17.1): [#44188](https://github.com/langgenius/dify/issues/44188). It's a production availability risk. Workers need a restart to recover.
2. **Agent (FunctionCalling) fabricates tool-call success without running the tool** (v1.16.1): [#40671](https://github.com/langgenius/dify/issues/40671). This is a correctness bug that can silently produce wrong results.
3. **New in 1.19.0: Question Classifier can't add a category by clicking**: [#46744](https://github.com/langgenius/dify/issues/46744). It has 9 comments and was reported yesterday.
4. **Agent mode file handling**:
   - Uploaded files aren't shown, and file variables are invalid in build: [#40874](https://github.com/langgenius/dify/issues/40874).
   - `#context_files#` is empty for published-app end users: [#42277](https://github.com/langgenius/dify/issues/42277).
   - Failures with attachments across multiple turns: [#41059](https://github.com/langgenius/dify/issues/41059).
5. **Plugin and provider problems**:
   - Model provider plugin migration error: [#40773](https://github.com/langgenius/dify/issues/40773).
   - Structured output is silently dropped when a plugin doesn't implement it: [#40907](https://github.com/langgenius/dify/issues/40907).
   - `provider_credential_schema` error in knowledge pipeline setup: [#40985](https://github.com/langgenius/dify/issues/40985).
   - **Fix in flight:** [PR #46862](https://github.com/langgenius/dify/pull/46862) preserves plugin-daemon errors in provider lists. Today, HTTP 200 with a nonzero daemon code and `data: null` gets turned into `invalid_param`. It fixes #46861.
6. **Workflow engine**:
   - Assign Variable node inside a Loop is skipped and can't be tested alone (1.14.2–1.15.0): [#38246](https://github.com/langgenius/dify/issues/38246).
   - Iteration node returns empty output in parallel mode: [#39977](https://github.com/langgenius/dify/issues/39977).
   - Conversation variables updated in an iteration don't persist to the main flow: [#43312](https://github.com/langgenius/dify/issues/43312).
   - Human Input doesn't show the LLM response text: [#37588](https://github.com/langgenius/dify/issues/37588).
   - A scheduled trigger drifts from 10 minutes to 2 minutes (closed): [#41214](https://github.com/langgenius/dify/issues/41214).
7. **MCP**:
   - OAuth never triggers for servers that return 200 on initialize without auth: [#36230](https://github.com/langgenius/dify/issues/36230).
   - Adding the GitHub MCP server via a GitHub app: [#37374](https://github.com/langgenius/dify/issues/37374).
   - Related fix: [PR #46305](https://github.com/langgenius/dify/pull/46305) keeps MCP tool-list output as JSON text instead of a Python `str()` repr.
8. **Other**:
   - The suggested-question API returns empty content: [#41854](https://github.com/langgenius/dify/issues/41854).
   - The plugin_daemon HTTP proxy env var only accepts uppercase names: [#18752](https://github.com/langgenius/dify/issues/18752).
   - The new Agent's conversation detail log can't be opened: [#40761](https://github.com/langgenius/dify/issues/40761).

Small fix PRs:
- [#43241](https://github.com/langgenius/dify/pull/43241): required Number inputs now accept `0`.
- [#46304](https://github.com/langgenius/dify/pull/46304): log pagination resets when filters change.
- [#43476](https://github.com/langgenius/dify/pull/43476): OAuth redirects resolve against the console origin.

## 6. What This Means for Application Developers
- **Treat Agent-mode tool results as unverified.** Given [#40671](https://github.com/langgenius/dify/issues/40671), validate side effects downstream and don't trust the agent's claim that a tool ran.
- **Delay the upgrade to 1.19.0 if you use the Question Classifier.** See [#46744](https://github.com/langgenius/dify/issues/46744).
- **Watch parallel iteration and loop workflows.** Empty outputs and variable-persistence bugs ([#39977](https://github.com/langgenius/dify/issues/39977), [#43312](https://github.com/langgenius/dify/issues/43312), [#38246](https://github.com/langgenius/dify/issues/38246)) call for explicit output checks, or running iterations serially.
- **Self-hosters should monitor Celery.** Add a worker-liveness check and a restart policy for Redis resets ([#44188](https://github.com/langgenius/dify/issues/44188)).
- **If you serve models through vLLM or SGLang, check your prefix-cache hit rate.** Long Agent sessions may lose it to compaction ([#44826](https://github.com/langgenius/dify/issues/44826)).
- **Plan for the RBAC default change.** If you rely on new apps being visible to all members, re-check access once [#46860](https://github.com/langgenius/dify/pull/46860) lands.
- **BYOA ([#45918](https://github.com/langgenius/dify/pull/45918)) is worth tracking** if you want to plug external agents into workflows.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-11-20

## 1. Today's Highlights
LiteLLM shipped a burst of releases across several lines: v1.111.0-rc.3, patches v1.110.2, v1.109.3, v1.108.13 (LTS) and v1.106.12, plus the v1.112.0-dev.1 pre-release. Work in flight is dominated by FIPS/OpenSSL hardening of the Rust bridge, a security-hardening PR, and fixes for streaming and Responses API error handling. Several reports concern silent correctness problems: wrong `finish_reason`, lost streamed usage, and budget overshoot.

## 2. Releases & Breaking Changes
- **v1.111.0-rc.3**: release candidate. The notes provided contain only cosign verification instructions, so the changelog is not visible here.
- **v1.110.2, v1.109.3, v1.106.12**: patch releases on older lines. Notes show only cosign verification, so the contents are unknown.
- **v1.108.13 (LTS)**: the `lts` image tag (`ghcr.io/berriai/litellm:lts`) tracks the latest LTS patch. Backports are going to `lts/1.108.x`, for example the A2A streaming fix in [PR #53101](https://github.com/BerriAI/litellm/pull/53101).
- **v1.112.0-dev.1**: dev pre-release, not for production.
- **Breaking changes in open or closed PRs (not yet in a confirmed release):**
  - [PR #49839](https://github.com/BerriAI/litellm/pull/49839) (open, marked `!`): the router now merges deployment `extra_body` with request `extra_body`. Before, a client-supplied `extra_body` replaced the deployment's.
  - [PR #48373](https://github.com/BerriAI/litellm/pull/48373) (closed, marked `!`): Anthropic fields in `extra_body` now go to the top level of the Messages request. The PR flags a breaking change for Azure AI, Bedrock invoke, Bedrock Mantle, Claude Platform, OpenCode Go and Vertex batch files. I can't tell from the data whether it merged.
- All releases are signed. Verify with `cosign verify` using the project-releaser workflow identity.

## 3. New Model & Hardware Support
- [PR #50768](https://github.com/BerriAI/litellm/pull/50768) (open): adds Meta Muse models on Vertex AI (Wonder 1.0, Ember 1.0, Spark 1.3) with catalog entries and native Responses routing.
- [PR #53108](https://github.com/BerriAI/litellm/pull/53108) (closed): removes the `databricks-gemini-nano-banana-2-1` cost-map row. The endpoint name was a guess, and Databricks hasn't documented it.
- [PR #46642](https://github.com/BerriAI/litellm/pull/46642) (open): SAP AI Core `reasoning_content` support. SAP returns a list of `{content, signature}` objects, but LiteLLM types the field as `Optional[str]`.
- FIPS image work (see below) targets compliance environments.

## 4. Performance & Optimization
No benchmark numbers in today's data. Related work:
- [PR #43718](https://github.com/BerriAI/litellm/pull/43718): keeps the streaming fast path for guardrails with `event_hook: pre_call` only. Today any `CustomGuardrail` forces the slower per-chunk post-call hook.
- [PR #53103](https://github.com/BerriAI/litellm/pull/53103), [#53104](https://github.com/BerriAI/litellm/pull/53104), [#53070](https://github.com/BerriAI/litellm/pull/53070): move the FIPS build of the Rust bridge to OpenSSL for virtual-key SHA-256 hashing, HTTPS clients and Postgres TLS. These are compliance changes, not speed changes.
- [PR #53097](https://github.com/BerriAI/litellm/pull/53097): warns when `fips_mode` starts with a Postgres password (SCRAM) login. SCRAM runs PBKDF2/HMAC client-side outside the FIPS module.
- [Issue #44047](https://github.com/BerriAI/litellm/issues/44047) (closed): the global registry-load locks added in v1.101.0+ had no timeout.

## 5. Stability & Regressions
Ranked by severity:

1. **Read-replica deadlock** — [#52284](https://github.com/BerriAI/litellm/issues/52284) (closed). With `DATABASE_URL_READ_REPLICA`, a reconnect cancelled by its 2s timeout leaves the reader Prisma engine dead. Reads never fall back to the writer, and key auth and readiness fail until restart.
2. **Responses API streaming drops connection** — [#52853](https://github.com/BerriAI/litellm/issues/52853) (closed). An upstream 400 on a streaming `/v1/responses` call returns 200, emits `response.created`, then resets the connection (`GenericEvent has no attribute 'type'`).
3. **Budget overshoot** — [#50125](https://github.com/BerriAI/litellm/issues/50125) (open). A key with a $0.0045 `max_budget` admitted 11 calls, spending $0.00496 (+10.3%). A single call over is expected, but the check seems to admit more.
4. **Failure reported as "stop"** — [#48721](https://github.com/BerriAI/litellm/issues/48721) (open). `error`, `network_error`, vLLM `abort` and Gemini `MALFORMED_FUNCTION_CALL` map to `finish_reason: "stop"`, so router retries never run.
5. **Audit logs 500** — [#50905](https://github.com/BerriAI/litellm/issues/50905) (closed). Since v1.108.0, `before_value` is stored as a JSON string, so `GET /audit` returns 500 after `/key/update` or `/team/update`.
6. **Least-busy routing starvation** — [#39322](https://github.com/BerriAI/litellm/issues/39322) (open). Cache hits push the counter negative, ties always pick the first deployment, and the counter isn't shared across workers.
7. **MCP regressions** — [#52849](https://github.com/BerriAI/litellm/issues/52849) (open) and [#37222](https://github.com/BerriAI/litellm/issues/37222) (open):
   - #52849: tools from `auth_type: authorization` servers are missing from `/mcp-rest/tools/list` after upgrading from 1.105.7 to 1.108.11.
   - #37222: OAuth2 `client_credentials` servers never receive the client ID or secret.
8. **Usage and caching accuracy**:
   - [#46059](https://github.com/BerriAI/litellm/issues/46059) (open): watsonx streamed usage is ignored in favor of an estimate.
   - [#46613](https://github.com/BerriAI/litellm/issues/46613) (open): provider fields on the final stream usage chunk are dropped.
   - [#49311](https://github.com/BerriAI/litellm/issues/49311) (closed): the exact-match cache never hits when OTel is on and `enable_caching_on_provider_specific_optional_params` is true.
   - [#36882](https://github.com/BerriAI/litellm/issues/36882) (closed): `cached_tokens` is intermittently dropped from final streaming usage.
9. **Provider translation bugs** (open unless noted):
   - [#37609](https://github.com/BerriAI/litellm/issues/37609): sambanova flattens content lists, so `image_url` is lost.
   - [#40072](https://github.com/BerriAI/litellm/issues/40072): the Responses-to-Bedrock bridge forwards internal `litellm_params`.
   - [#36848](https://github.com/BerriAI/litellm/issues/36848) (closed): Vertex tool schemas with tuple-form `items` crash.
   - [#28071](https://github.com/BerriAI/litellm/issues/28071): `token_counter` rejects `video_url` blocks.
   - [#37469](https://github.com/BerriAI/litellm/issues/37469): `cache_control_injection_points` wrongly invokes Dotprompt.
10. **UI performance** — [#23005](https://github.com/BerriAI/litellm/issues/23005) (open, stale): the UI is very slow on 1.82.x.

**Fixes in flight:**
- [PR #50556](https://github.com/BerriAI/litellm/pull/50556): prices each Anthropic server-side fallback attempt at its own model's rate and skips unbilled refusals.
- [PR #53100](https://github.com/BerriAI/litellm/pull/53100) and [#53101](https://github.com/BerriAI/litellm/pull/53101): stop sending `stream` in the A2A JSON-RPC body for `message/stream`, with a backport to the LTS branch.
- [PR #43818](https://github.com/BerriAI/litellm/pull/43818): forwards `url_citation` annotations on the streaming Responses bridge.
- [PR #49404](https://github.com/BerriAI/litellm/pull/49404): fixes AI Hub publish races across replicas using a DB lock.
- [PR #53106](https://github.com/BerriAI/litellm/pull/53106): Langfuse skips export when credentials are incomplete.
- [PR #53107](https://github.com/BerriAI/litellm/pull/53107): logs token-count 5xx at WARNING.
- [PR #53098](https://github.com/BerriAI/litellm/pull/53098): security hardening covering RBAC on customer mutation endpoints, SSRF on generic logger endpoints, storage and Vault. It needs careful review.
- [PR #52807](https://github.com/BerriAI/litellm/pull/52807): accepts OpenAI `input_json` content parts on `/v1/decisions` (LTS line).

## 6. What This Means for Application Developers
- **Don't treat `finish_reason: "stop"` as proof of success.** Until #48721 lands, check for empty or truncated output and tool-call validity yourself.
- **Don't rely on `max_budget` as a hard cap.** #50125 shows overshoot of about 10% on tiny budgets, so leave headroom.
- **Don't trust proxy-reported streamed usage for billing.** Watsonx (#46059) and the final-chunk issues (#46613, #36882) can skew it.
- **Handle Responses API streaming failures.** If you stream `/v1/responses`, expect that a bad upstream request may surface as a dropped connection (#52853). Add client-side retries and timeouts.
- **Pin and verify.** Production users should stay on LTS (v1.108.13) or a patched stable line, and verify images with cosign. Hold off on the v1.111.0 RC and the dev build.
- **Check upgrade paths.**
  - Anthropic server-side fallback users: review the `extra_body` merge behavior (#49839, #48373).
  - MCP users: test tool discovery after upgrading past 1.105.x (#52849).
  - Read-replica deployments: run a restart or health-check playbook until #52284 is deployed.
  - FIPS deployments: note the Postgres password-login warning (#53097).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Infrastructure Digest 2026-09-29

> Generated: 2026-09-29 13:41 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Report, 2026-09-29

**Scope note:** Only two digests were supplied: Dify (LLM app platform) and LiteLLM (LLM gateway). No inference-engine (vLLM, SGLang, llama.cpp, Ollama) or fine-tuning (Unsloth) data was available. Sections 3–5 cover only what these two projects show, and I don't infer anything about the missing layers.

## 1. Ecosystem Overview

Neither project shipped a release in the last 24h. Activity was maintenance-heavy, dominated by correctness, billing and pagination bugs rather than new features. At the gateway layer, LiteLLM's work centers on pricing-map accuracy and cutting Redis round trips on the proxy hot path. At the application layer, Dify's work centers on test and CI hygiene plus data-integrity bugs. A common theme is that the glue layers (routing, cost accounting, session and transaction handling) are where production failures now surface. Raw model capability is not the bottleneck in today's data.

## 2. Activity Comparison

| Project | Layer | Issues | PRs | Release status |
|---|---|---|---|---|
| LiteLLM | Gateway | 104 (top 30 shown) | 290 (top 20 shown) | None in 24h (v1.103.0 is the version referenced in a bug report) |
| Dify | App platform | Not stated in digest (about 25 referenced) | Not stated in digest (about 10 referenced, plus a 7-PR draft stack) | None in 24h (1.17.0 / 1.17.1 referenced as deployed) |

LiteLLM's volume is far higher, and only a fraction of it is visible in the digest. Dify's totals aren't given, so the two shouldn't be compared directly on raw counts.

## 3. Model Support Race

Nothing new in model or architecture support shipped today, so no project is ahead on this dimension.

- **LiteLLM** did registry and pricing work rather than new integrations:
  - Added a claude-sonnet-5.5 batch entry and synced OpenRouter prices (#43644).
  - Added Vertex Gemini 2.5 Flash Live image and video input prices and the Claude Sonnet 4.5 5m batch cache-write price (#43671).
  - Corrected Azure AI Foundry max input tokens for deepseek-v3.2, grok-4 and grok-code-fast-1 (#43609).
  - Has an open PR (#43598) aligning Azure, Gemini, Groq and OpenAI entries with official docs, including Data Zone billing for Azure EU GPT-6 Astra.
- **Open feature requests** in LiteLLM:
  - Anthropic Workload Identity Federation (OIDC), with 5 👍 (#28607).
  - Peak/off-peak pricing, driven by DeepSeek's time-based rates (#31606, closed).
  - Bedrock `aws_session_tags` (#34069, closed).
- **Dify:** PR #42186 fixes customizable models being marked `Incompatible` in Agent V2. Compatibility now follows declared tool-call capability instead of a label blacklist.

The signal is that new models are absorbed as metadata entries, and the effort goes into keeping the price and capability data accurate.

## 4. Performance Frontier

The digests show no KV-cache, batching, quantization, kernel or distributed-serving work. The effort is in the gateway hot path and in CI.

- **LiteLLM Redis round-trip reduction** is a four-PR series. The PRs are open and Devin-authored, and they quote round-trip counts but no latency numbers:
  - #43369: a governed chat request currently makes 12 round trips before the provider call and 10 after. The PR holds one spend-counter batch across admission and post-call accounting.
  - #43407: one request-scoped pipeline for auth, spend, rate-limit and routing reads, targeting the 9 remaining pre-call round trips.
  - #43424: one post-call pipeline per backend, targeting the 6 remaining post-call round trips.
  - #43320: `usage-based-routing-v2` fetches cooldown state and tpm/rpm counters in a single MGET, replacing two round trips.
- **Dify:** the performance work is test and CI speed. It includes 7 draft PRs on controller unit tests (#43123) and API test-shard drift (#43180). The one runtime concern is a workflow slowdown, where per-step overhead grew about 10x after a larger workflow was published (#42928). It has no fix yet.

## 5. Layer Positioning

- **LiteLLM (gateway):** sits between applications and many providers. It owns routing, budgets, cost accounting, protocol translation (Anthropic, Gemini, Azure) and logging. Its bugs cluster around those responsibilities: mixed-protocol routing (#43685), shared session budgets (#43190), schema translation (#43157, #43156) and prompt leakage in failure logs (#43697).
- **Dify (application platform):** sits above the gateway layer. It owns workflow orchestration, agents, annotations, logs and SDKs. Its bugs are about data integrity and application semantics, such as pagination, annotation targets, MySQL isolation (#43186) and SDK retry semantics (#43077).
- **Serving engines, local runtimes and fine-tuning:** not covered in this data.

## 6. Trend Signals

1. **Cost and billing correctness is a first-class risk.** LiteLLM reported multiple billing errors: Azure gpt-5.6 cache writes billed at zero since v1.97.0 (#37631), Azure spend recorded as $0 after a price-map reload (#40649), and thinking tokens billed at 2x (#43575). Newly added models are the most exposed.
2. **Provider-specific translation is fragile.** Union-typed tool schemas (#43157) and empty tool arguments (#43156) degrade differently per provider. Zero-argument and union tools are the cases to test.
3. **Privacy in failure paths.** Provider errors that quote prompts bypass redaction and reach spend logs, Datadog, OTEL and MLflow (#43697, fix open).
4. **Data-layer subtleties.** Timestamp collisions break pagination in Dify (#43134, #43084). MySQL REPEATABLE READ breaks the new Agent node (#43186).
5. **Latency at the control plane.** Both projects are working on overhead outside the model call (Redis round trips, workflow step overhead).

**What agent and application developers should watch:**
- Cross-check spend against provider invoices for newly added models.
- Avoid mixing OpenAI-compatible and Anthropic deployments in one LiteLLM model group until #43685 is resolved.
- Use distinct session IDs per agent until #43190 is fixed.
- Set `maxRetries: 0` or add idempotency for the Dify Node.js SDK's `workflows/run` (#43077).
- Don't assume complete results from Dify log or conversation-variable list endpoints when timestamps collide.
- Add external monitoring and timeouts for long Dify webhook workflows (#42539).
- Check the migration path if `LiteLLM_SpendLogs` is partitioned (#41548).
- Pin difyctl versions, since v2 changes the CLI surface (#42608).

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest: 2026-09-29

Dify is an LLM app platform rather than an inference engine or gateway, so the hardware and model-support sections are mostly empty. The sections below reflect that.

## 1. Today's Highlights

No release shipped in the last 24h. The day's activity was correctness bugs around pagination and annotations (several filed by JHC56) and a large test-hygiene effort by asukaminato0721. That effort replaces `Mock(spec=...)` with real sessions, Redis and repositories, and adds an ast-grep lint gate. hyoban's CI and test-performance work is also landing, along with a docs refresh.

## 2. Releases & Breaking Changes

None in the last 24h. Reports still reference 1.17.0 and 1.17.1 (self-hosted Docker) as the current deployed versions.

Migration-relevant work in progress:
- **difyctl v2** replaces the v1 command tree with three commands driven by a server-published catalog. It adds a plugin system and installable agent skills: [PR #42608](https://github.com/langgenius/dify/pull/42608).
- **Reusable network access group APIs** for tenants, including per-app group binding and explicit unbind with `group_id: null`: [PR #41025](https://github.com/langgenius/dify/pull/41025).
- **Dependency upgrade tracking** continues after #43031: [Issue #43035](https://github.com/langgenius/dify/issues/43035).

## 3. New Model & Hardware Support

No new hardware or quantization work today. One model-related item:
- Customizable models were marked `Incompatible` in Agent V2 when their label matched a predefined-model blacklist, even if they declared tool-call support. The PR separates the two policies and uses the tool-call capability: [PR #42186](https://github.com/langgenius/dify/pull/42186) (fixes #42092).

## 4. Performance & Optimization

The performance work is in CI and tests. There are no runtime kernel or serving changes.
- **Controller unit-test performance:** a stack of 7 draft PRs, one commit per optimization, with measurements in [Issue #43123](https://github.com/langgenius/dify/issues/43123). The issue is closed and the PRs are still in flight.
- **CI shard drift:** API unit-test shards ran unevenly even though the planner estimated both at about 271 cumulative worker-seconds: [Issue #43180](https://github.com/langgenius/dify/issues/43180). Closed.
- **Flaky tests:** ZIP timestamps caused a flaky roster-import assertion ([Issue #43121](https://github.com/langgenius/dify/issues/43121)). A command-palette test pasted before the input had focus ([PR #43236](https://github.com/langgenius/dify/pull/43236)).
- **Runtime workflow latency:** see [Issue #42928](https://github.com/langgenius/dify/issues/42928) below. It has no fix PR yet.

## 5. Stability & Regressions

Ranked by severity, with fix status.

1. **Workflow slowdown, no fix.** Trivial Code nodes stall for minutes with 0 LLM tokens. Per-step overhead grew about 10x after a larger workflow was published: [#42928](https://github.com/langgenius/dify/issues/42928).
2. **Agent node failure, fix open.** The new Agent node fails with "workflow node execution caller is unavailable" ([#43186](https://github.com/langgenius/dify/issues/43186)). The cause is MySQL REPEATABLE READ pinning the read snapshot during the retry SELECT. The fix is [PR #43234](https://github.com/langgenius/dify/pull/43234).
3. **Pagination and ordering bugs, no fix PR seen.** Items are skipped when rows share the same `created_at`:
   - App logs skip chat messages: [#43134](https://github.com/langgenius/dify/issues/43134).
   - Service API conversation variables pagination skips items: [#43084](https://github.com/langgenius/dify/issues/43084).
4. **Wrong annotation target, fix open.** Log annotations attach to the wrong message when a conversation has regenerated answers: [#43237](https://github.com/langgenius/dify/issues/43237). The fix is [PR #43238](https://github.com/langgenius/dify/pull/43238).
5. **Soft-deleted conversations still readable.** Console detail reads return them until async cleanup runs. The fix is [PR #43235](https://github.com/langgenius/dify/pull/43235) (fixes #40976).
6. **Chatflow MCP `tools/call` failure, closed.** The advanced_chat generator commits the controller's `.begin()` session: [#43095](https://github.com/langgenius/dify/issues/43095).
7. **Loop/Iteration Direct Reply.** It errors, stops after the first iteration and breaks streaming (v1.17.1): [#42547](https://github.com/langgenius/dify/issues/42547). Open.
8. **Agent tools and plugins.** Adding them to the agent module fails (1.17.0): [#41348](https://github.com/langgenius/dify/issues/41348). Open.
9. **Webhook trigger.** Long Agent + LLM chains fail silently on unattended production requests but succeed under debug URL + Test Run: [#42539](https://github.com/langgenius/dify/issues/42539). Open.
10. **Redis Sentinel.** A READONLY error appeared on Redis 6.2.2 Sentinel with plugin-daemon 0.6.10-local: [#42859](https://github.com/langgenius/dify/issues/42859). Closed.
11. **Client SDK bugs, open.**
    - The Node.js SDK retries `POST /workflows/run` after transport failures, so a run can execute twice: [#43077](https://github.com/langgenius/dify/issues/43077).
    - The PHP SDK sends conversation renames to an unsupported PATCH route: [#43074](https://github.com/langgenius/dify/issues/43074).
12. **Closed UI bugs.**
    - The SSO login button swallows 5xx, CORS and network errors: [#38412](https://github.com/langgenius/dify/issues/38412).
    - Removing a file after returning to the dataset source step clears other uploads: [#43078](https://github.com/langgenius/dify/issues/43078).
    - The MCP OAuth callback showed a blank page: [#39752](https://github.com/langgenius/dify/issues/39752).
    - Installed plugins still appear in Marketplace selector results: [#42222](https://github.com/langgenius/dify/issues/42222).

## 6. What This Means for Application Developers

- **Idempotency:** with the Node.js SDK, don't rely on default retries for `workflows/run`. Set `maxRetries: 0` or add your own idempotency handling until #43077 is fixed.
- **Pagination:** don't assume complete results from logs or conversation-variable list endpoints when timestamps collide. Cross-check counts (#43134, #43084).
- **Agent node on MySQL:** the "caller is unavailable" failure is a MySQL isolation-level issue. Watch [PR #43234](https://github.com/langgenius/dify/pull/43234) before adopting the new Agent node in production.
- **Long-running webhooks:** if workflows run long, expect silent failures on cold requests (#42539). Add external monitoring and timeouts.
- **Latency:** large published workflows may slow every node, including trivial ones (#42928). Profile before splitting or growing workflows.
- **Loops:** avoid Direct Reply nodes inside Loop/Iteration for now (#42547).
- **Tooling and internals:**
  - difyctl v2 (#42608) changes the CLI surface, so pin versions in scripts.
  - The internal session refactors ([#40372](https://github.com/langgenius/dify/issues/40372), [#28015](https://github.com/langgenius/dify/issues/28015)) and the spec-mock cleanup ([#35872](https://github.com/langgenius/dify/issues/35872), [PR #43232](https://github.com/langgenius/dify/pull/43232)) affect contributors, not API consumers.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest: 2026-09-29

## 1. Today's Highlights
No release shipped in the last 24h. Activity centers on pricing-map corrections and a Redis round-trip reduction series (#43320, #43369, #43407, #43424). Several translation bugs, in Anthropic schema sanitization, Gemini tool args and mixed-protocol routing, were also reported. The data covers 104 issues and 290 PRs, of which only the top 30 issues and 20 PRs are shown.

## 2. Releases & Breaking Changes
No releases. Two upgrade notes from open reports:
- **v1.103.0**: a new warning, "Auto-router baseline observation could not be initialized", is logged on every `/v1/messages` request even with no auto-router configured ([#43658](https://github.com/BerriAI/litellm/issues/43658)).
- **Migration `20260831120001`**: this migration fails on a partitioned `LiteLLM_SpendLogs` table because `CREATE INDEX CONCURRENTLY` is not allowed there ([#41548](https://github.com/BerriAI/litellm/issues/41548)).

## 3. New Model & Hardware Support
- **Price sync (closed PR)**: OpenRouter prices were synced and a claude-sonnet-5.5 batch was added ([#43644](https://github.com/BerriAI/litellm/pull/43644)).
- **Vertex (closed PR)**: added Gemini 2.5 Flash Live API image and video input prices, and the Claude Sonnet 4.5 5m batch cache write price ([#43671](https://github.com/BerriAI/litellm/pull/43671)).
- **Azure AI Foundry (closed PR)**: max input tokens for deepseek-v3.2, grok-4 and grok-code-fast-1 now follow Azure's docs ([#43609](https://github.com/BerriAI/litellm/pull/43609)).
- **Registry alignment (open PR)**: aligns Azure, Gemini, Groq and OpenAI entries with official docs. This includes billing Azure EU GPT-6 Astra at Data Zone rates rather than global ones ([#43598](https://github.com/BerriAI/litellm/pull/43598)).
- **Feature requests**:
  - Anthropic Workload Identity Federation (OIDC) auth, which has 5 👍 ([#28607](https://github.com/BerriAI/litellm/issues/28607)).
  - Peak/off-peak pricing, motivated by DeepSeek's time-based rates; the issue is closed ([#31606](https://github.com/BerriAI/litellm/issues/31606)).
  - `aws_session_tags` for Bedrock role assumption; closed ([#34069](https://github.com/BerriAI/litellm/issues/34069)).

## 4. Performance & Optimization
The open, Devin-authored PRs below cut Redis round trips on the proxy hot path. The descriptions quote round-trip counts but no latency figures.
- [#43369](https://github.com/BerriAI/litellm/pull/43369): a governed chat request currently makes 12 Redis round trips before the provider call and 10 after it. This PR holds one spend-counter batch across admission and post-call accounting.
- [#43407](https://github.com/BerriAI/litellm/pull/43407): one request-scoped Redis pipeline for auth, spend, rate-limit and routing reads. It targets the 9 pre-call round trips that remain after #43369.
- [#43424](https://github.com/BerriAI/litellm/pull/43424): one post-call pipeline per backend. It targets the 6 post-call round trips that remain after #43407.
- [#43320](https://github.com/BerriAI/litellm/pull/43320): `usage-based-routing-v2` fetches cooldown state and tpm/rpm counters in a single MGET, replacing two round trips.

## 5. Stability & Regressions
Ranked by severity.

1. **Log leak of prompts on failures.** Provider errors that quote the prompt bypass message redaction and reach spend logs, Datadog, OTEL and MLflow. Fix PR: [#43697](https://github.com/BerriAI/litellm/pull/43697).
2. **Cost and billing errors.**
   - Azure gpt-5.6* entries lacked `cache_creation_input_token_cost`, so cache writes were billed at zero since v1.97.0. The issue is closed ([#37631](https://github.com/BerriAI/litellm/issues/37631)).
   - The Admin UI persisted derived pricing, and a later price-map reload recorded Azure spend as $0. The issue is closed ([#40649](https://github.com/BerriAI/litellm/issues/40649)).
   - `gemini-robotics-er-2-preview` bills thinking tokens at 2x the current output rate ([#43575](https://github.com/BerriAI/litellm/issues/43575)). The fix, [#43666](https://github.com/BerriAI/litellm/pull/43666), is closed.
   - Anthropic cache tokens are double-counted under custom pricing. Fix PR: [#40016](https://github.com/BerriAI/litellm/pull/40016).
   - `model_info` keys set to `None` block cost-map enrichment and silently disable budget reservation ([#40741](https://github.com/BerriAI/litellm/issues/40741)).
   - Azure AI model router has no cost tracking ([#40728](https://github.com/BerriAI/litellm/issues/40728)).
3. **Routing and budget correctness.**
   - The router can select an Anthropic upstream for OpenAI tool-calling requests in a mixed-protocol model group ([#43685](https://github.com/BerriAI/litellm/issues/43685)).
   - `max_iterations` and `max_budget_per_session` counters are shared across agents in the same trace ([#43190](https://github.com/BerriAI/litellm/issues/43190)).
   - `max_end_user_budget_id` is never persisted to the DB, so budget resets skip auto-created end users ([#25386](https://github.com/BerriAI/litellm/issues/25386)).
4. **Translation bugs.**
   - `sanitize_input_schema_for_anthropic` drops root `anyOf`/`$ref` and ships empty `properties` for union tools ([#43157](https://github.com/BerriAI/litellm/issues/43157)).
   - Gemini maps empty tool arguments `""` to `{"type":"object"}` instead of `{}` ([#43156](https://github.com/BerriAI/litellm/issues/43156)).
   - Azure GPT-4.1 rejects `max_tokens` and `max_completion_tokens` sent together ([#31614](https://github.com/BerriAI/litellm/issues/31614)).
   - A fallback model with a smaller context window fails silently ([#31557](https://github.com/BerriAI/litellm/issues/31557)).
5. **Infrastructure.**
   - Redis fails with an unexpected `ssl_check_hostname` argument in v1.93.0 ([#34614](https://github.com/BerriAI/litellm/issues/34614)).
   - The migration failure on partitioned `LiteLLM_SpendLogs` is [#41548](https://github.com/BerriAI/litellm/issues/41548).
   - Pass-through routes failed when `SERVER_ROOT_PATH` was set. The issue is closed ([#22272](https://github.com/BerriAI/litellm/issues/22272)).
   - The realtime health check sets `ssl=` on `ws://` connections, which blocks self-hosted vLLM realtime ([#31613](https://github.com/BerriAI/litellm/issues/31613)).
   - `/v1/skills` returns 500 without a valid Anthropic key ([#31587](https://github.com/BerriAI/litellm/issues/31587)).

## 6. What This Means for Application Developers
- **Cost data:** Don't treat spend numbers as authoritative for newly added models such as Azure gpt-5.6, Gemini robotics and the Azure model router. Cross-check them against provider invoices.
- **Redis TLS:** If you run v1.93.0 with TLS Redis, verify that caching and budget counters actually work ([#34614](https://github.com/BerriAI/litellm/issues/34614)).
- **Agent tools:** Union-typed Pydantic tool schemas can be degraded on the Anthropic path ([#43157](https://github.com/BerriAI/litellm/issues/43157)). Zero-argument tools may get malformed args on Gemini ([#43156](https://github.com/BerriAI/litellm/issues/43156)). Test tool calls per provider.
- **Mixed-protocol groups:** Avoid putting OpenAI-compatible and Anthropic deployments in one model group ([#43685](https://github.com/BerriAI/litellm/issues/43685)).
- **Session budgets:** Use distinct session IDs per agent until [#43190](https://github.com/BerriAI/litellm/issues/43190) is resolved.
- **Logging:** If you rely on message redaction, be aware that failure-path logs can leak prompts until [#43697](https://github.com/BerriAI/litellm/pull/43697) merges.
- **Upgrades:** If `LiteLLM_SpendLogs` is partitioned, check the migration path before upgrading ([#41548](https://github.com/BerriAI/litellm/issues/41548)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
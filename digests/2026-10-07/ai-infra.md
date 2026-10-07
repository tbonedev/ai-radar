# AI Infrastructure Digest 2026-10-07

> Generated: 2026-10-07 14:10 UTC | Projects covered: 2

- [Dify](https://github.com/langgenius/dify)
- [LiteLLM](https://github.com/BerriAI/litellm)

---

## Cross-Project Comparison

# AI Infrastructure Cross-Project Comparison, 2026-10-07

**Coverage caveat:** Today's input has only two digests, Dify and LiteLLM. There is no data for inference engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama) or fine-tuning (Unsloth). Sections 3 and 4 are therefore thin, and I have not inferred anything about the missing projects. The counts below are items cited in the digests, not repository totals.

## 1. Ecosystem Overview

Both projects in today's data sit above the model-serving layer and are in a bug-fix and hardening phase, not a feature-launch phase. Dify shipped no release and was mostly frontend maintenance and workflow-editor fixes. LiteLLM cut only a dev pre-release (v1.106.0-dev.1), and its biggest thread is the Rust gateway migration (28 comments, sub-1ms overhead target, no measured numbers yet). The recurring problems are correctness at the translation, accounting and configuration layers: spend races, dropped `is_error` flags, health-check misattribution, and configs overwritten on save.

## 2. Activity Comparison

| Project | Issues cited | PRs cited | Release status |
|---|---|---|---|
| Dify | ~10 | ~16 | No release in the last 24h |
| LiteLLM | ~24 (plus #44912 and #44748, which are mentioned only inline) | ~16 | v1.106.0-dev.1 (dev pre-release; notes contain only the cosign verification block) |

- **Unclear items:** LiteLLM #38663 is called a PR but links to `/issues/`, so I left it out of both counts.
- **Open versus closed:** Most of Dify's fixes are open PRs, and a few are closed. LiteLLM's picture is less clear. Its health-check fix PRs (#44320, #44982) and Dify's #43282 are closed, and the digests don't say whether they were merged or abandoned.
- **Issue age:** LiteLLM's list includes stale issues (#16060, #20078, #25260), so its issue count overstates how much is new today.

## 3. Model Support Race

There is no meaningful race in this data.

- **LiteLLM** is the only project with model-support changes.
  - Ollama `prompt_eval_cached_count` is mapped to `cached_tokens` ([#45030](https://github.com/BerriAI/litellm/pull/45030)).
  - Shutdown dates are synced for 10 direct Gemini API keys ([#44910](https://github.com/BerriAI/litellm/pull/44910)).
  - A new provider, llmman, adds a local OpenAI-compatible runner ([#38925](https://github.com/BerriAI/litellm/pull/38925)).
  - A proposal to stop injecting `temperature=1.0` for Gemini 3.x when the caller omits it (#38663, state unclear).
- **Open requests:** Cloudflare Workers AI exact-URL support for the complexity router ([#44149](https://github.com/BerriAI/litellm/issues/44149)) and Qwen3-TTS via vLLM ([#20078](https://github.com/BerriAI/litellm/issues/20078)).
- **Dify** reported no model, backend or quantization changes.

LiteLLM is ahead by default, and its work is mostly metadata and compatibility, not new architecture support.

## 4. Performance Frontier

No project reported KV cache, batching, quantization, distributed-serving or kernel work today. The measured and unmeasured items are:

- **LiteLLM Rust gateway** ([#31263](https://github.com/BerriAI/litellm/issues/31263)): the target is sub-1ms proxy overhead, but there are no benchmarks, and nothing in the data says it is a breaking change.
- **LiteLLM `aspeech`** ([#44546](https://github.com/BerriAI/litellm/issues/44546)): a synchronous provider is called twice, which doubles latency and cost, and Gemini TTS is billed twice.
- **Dify** ([#42916](https://github.com/BerriAI/litellm/issues/42916) is not the right link; the item is [PR #42916](https://github.com/langgenius/dify/pull/42916) on Dify): paged 4 KiB `SKILL.md` reads that bound shell output. This is context management, not a speedup.
- **Dify image build** ([PR #43601](https://github.com/langgenius/dify/pull/43601)): bundles spaCy `en_core_web_sm` in the API image so `unstructured` doesn't load it separately.

The only optimization work here is at the gateway and overhead level. Nothing in this data speaks to the engine-level frontier.

## 5. Layer Positioning

| Layer | Project | Role in today's data |
|---|---|---|
| Application and workflow platform | Dify | Visual workflow editor, Chatflow and Workflow modes, DSL import, agent skills, RAG document handling. Work is frontend, editor state and RBAC. |
| LLM gateway and proxy | LiteLLM | Provider translation (Anthropic, Gemini, OpenAI-style, Responses API), routing and fallbacks, budgets and spend, auth and guardrails, MCP tool conversion. |
| Serving engines, local runtimes, fine-tuning | none in today's data | Not assessable. |

Dify and LiteLLM are not direct competitors. Dify builds applications, and LiteLLM is the gateway such an application could route through. Their problems differ accordingly. Dify's are UI-state and configuration persistence bugs. LiteLLM's are spend accounting, protocol fidelity and security.

## 6. Trend Signals

1. **Gateway correctness over features.** LiteLLM's issues cluster around spend and budget races (#43491, #35524, #36941, #35563, #33328), auth (#44182, #35536) and protocol fidelity (#45038, #44984, #44923, #45044). Budgets can be exceeded under load, and the proxy can fail open. A guardrail of an unknown type is skipped with one error log line (#45028).
2. **Agent tool-calling fidelity is the main developer risk.** `is_error` on `tool_result` is dropped when translating to OpenAI-style or Gemini targets, so a failed tool call may look like a success until #45038 and #44984 land. Responses API streaming also lacks `sequence_number` ordering and reasoning `encrypted_content` in `output_item.done`.
3. **Configuration and state persistence.** Dify's autosave overwrites imported `file_upload` settings (#43623, fix in [PR #43624](https://github.com/langgenius/dify/pull/43624)), and LLM memory is kept on Chatflow-to-Workflow copies (fixed in [PR #43597](https://github.com/langgenius/dify/pull/43597)). Both are cases of the editor silently changing user configuration.
4. **Agent skills and context handling.** Dify's `config_skill_read` ([PR #42916](https://github.com/langgenius/dify/pull/42916)) and the LLM memory prompt change ([PR #43617](https://github.com/langgenius/dify/pull/43617)) both reshape how context reaches the model.
5. **Gateway performance is moving to Rust.** The goal is sub-1ms overhead, but there is no measurement yet, and the beta is opt-in. Treat it as a future migration path.

**What developers should do**
- **LiteLLM users:**
  - Stay on stable, not v1.106.0-dev.1.
  - Set explicit request timeouts, since `request_timeout` may not fire on a silent upstream (#38358).
  - Don't trust health status when deployments share a model name (#44154).
  - Audit `default_on` guardrail configs.
  - Plan for budget overshoot under concurrency.
  - Windows pip users should avoid 1.82.x/1.83.0 (#25260).
- **Dify users:**
  - Re-check `file_upload` in imported DSL drafts after any Features-panel save.
  - Re-add memory by hand after copying nodes into a Workflow.
  - Avoid removing and re-inviting members when RBAC is off ([#43616](https://github.com/langgenius/dify/issues/43616)).
- **Both:** Verify merge state before relying on any fix. Several fix PRs were reported as closed without saying whether they merged.

**Data note:** The LiteLLM digest contained a mislabeled reference (#37037). The correct item is [PR #45037](https://github.com/BerriAI/litellm/pull/45037), a refactor exposing 104 private provider helpers, with no performance impact.

---

## Per-Project Reports

<details>
<summary><strong>Dify</strong> — <a href="https://github.com/langgenius/dify">langgenius/dify</a></summary>

# Dify Digest: 2026-10-07

## 1. Today's Highlights

There was no release in the last 24 hours. Activity was mostly frontend maintenance and workflow-editor bug fixes. The frontend toolchain moved to Vite+ 1.1.0 ([#43618](https://github.com/langgenius/dify/issues/43618), [PR #43619](https://github.com/langgenius/dify/pull/43619)). A fix for LLM nodes that kept memory after being copied from Chatflow to Workflow was also closed ([#43596](https://github.com/langgenius/dify/issues/43596), [PR #43597](https://github.com/langgenius/dify/pull/43597)). Open work centers on workflow file-upload settings, the LLM memory prompt and Dialog ownership refactors.

## 2. Releases & Breaking Changes

No new releases.

Notes for people who build from source:
- Vite+ 1.1.0 brings Vite 8.3.3 and Vitest 5.0.3. The legacy `Badge` state export was removed in favor of explicit appearance variants, which are meant to keep existing styles ([PR #43619](https://github.com/langgenius/dify/pull/43619)).
- [PR #43613](https://github.com/langgenius/dify/pull/43613) is open. It exports `actionsRef` Actions types on the public Dify UI subpaths.

## 3. New Model & Hardware Support

No model, backend or quantization changes today.

## 4. Performance & Optimization

No performance work with measurements today. Related items:
- [PR #42916](https://github.com/langgenius/dify/pull/42916) (open) adds `config_skill_read`. It returns configured Agent `SKILL.md` content in UTF-8-safe 4 KiB pages and keeps shell output bounded.
- [PR #43601](https://github.com/langgenius/dify/pull/43601) (open) bundles spaCy `en_core_web_sm` in the API image, so `unstructured` doesn't have to load it separately. It fixes [#34480](https://github.com/langgenius/dify/issues/34480).

## 5. Stability & Regressions

Ranked by likely impact:

1. **Member re-invite fails with "workspace not found" when RBAC is disabled.** An active member who was removed can't be re-invited ([#43616](https://github.com/langgenius/dify/issues/43616)). It is open, and I saw no fix PR in today's data.
2. **LLM memory is kept when nodes are copied from Chatflow to Workflow.** Single-node runs then fail with `Variable key <node_id>.#sys.query# not found`. This is fixed and closed ([#43596](https://github.com/langgenius/dify/issues/43596), [PR #43597](https://github.com/langgenius/dify/pull/43597)).
3. **Imported file-upload settings are overwritten.** Saving the Features panel or autosave writes a legacy `file_upload.image` object over the DSL-imported config ([#43623](https://github.com/langgenius/dify/issues/43623)). The fix is open in [PR #43624](https://github.com/langgenius/dify/pull/43624).
4. **LLM memory user prompt requires `sys.query`.** Related to [#43289](https://github.com/langgenius/dify/issues/43289). [PR #43617](https://github.com/langgenius/dify/pull/43617) removes the frontend-only restriction and is open.
5. **Remote file upload size limits.** URL uploads rejected media above 15 MB, even though video and audio have higher limits (for example 100 MB for video). [PR #43282](https://github.com/langgenius/dify/pull/43282) was closed. The summary doesn't say whether it was merged or abandoned.
6. **Document metadata sidebar can't scroll.** Content that is taller than the screen is cut off ([#43620](https://github.com/langgenius/dify/issues/43620)). The fix is open in [PR #43621](https://github.com/langgenius/dify/pull/43621).
7. **Trigger OAuth token refresh uses the wrong schema.** The fix is open in [PR #43593](https://github.com/langgenius/dify/pull/43593).
8. **Other open UI fixes:**
   - Zero is rejected in required Number inputs ([PR #43241](https://github.com/langgenius/dify/pull/43241)).
   - Switching to a file input crashes the variable editor when the old default is a number ([PR #43252](https://github.com/langgenius/dify/pull/43252)).
   - Batch metadata edits skip documents on other pages ([PR #43245](https://github.com/langgenius/dify/pull/43245)).
9. **Dev tooling:** `skipToken` queries run under vinext dev because `query-core` is bundled twice ([#43268](https://github.com/langgenius/dify/issues/43268)). It is closed.

Housekeeping:
- [#43358](https://github.com/langgenius/dify/issues/43358) proposes replacing `pytz` with `zoneinfo` (good first issue).
- Strict Pyrefly typing for tests continues under [#24645](https://github.com/langgenius/dify/issues/24645) ([PR #43622](https://github.com/langgenius/dify/pull/43622), [PR #43615](https://github.com/langgenius/dify/pull/43615)).
- [PR #43588](https://github.com/langgenius/dify/pull/43588) replaces `json.loads` with Pydantic validation.

## 6. What This Means for Application Developers

- **Imported DSL workflows:** Check `file_upload` in your drafts after any Features-panel save until [PR #43624](https://github.com/langgenius/dify/pull/43624) lands. Autosave can silently change an imported config.
- **Copying nodes from Chatflow to Workflow:** After [PR #43597](https://github.com/langgenius/dify/pull/43597), memory is stripped from supported nodes when they are pasted into a Workflow. Add memory back by hand if you still want it.
- **LLM memory prompts:** [PR #43617](https://github.com/langgenius/dify/pull/43617) would let you seed the memory user prompt from custom variables instead of `sys.query`. It is not merged yet.
- **Multi-tenant or self-hosted admins:** If RBAC is off, avoid removing and re-inviting members until [#43616](https://github.com/langgenius/dify/issues/43616) is resolved.
- **Self-hosters:** Watch [PR #43601](https://github.com/langgenius/dify/pull/43601) if document parsing with `unstructured` fails because spaCy `en_core_web_sm` is missing from the image.
- **Agent skills:** [PR #42916](https://github.com/langgenius/dify/pull/42916) is the one to follow. It changes how configured skills are read, and the Agent is told to read every page before using a skill.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-10-07

## 1. Today's Highlights
LiteLLM cut **v1.106.0-dev.1** and the Rust-based gateway migration (sub-1ms overhead target) remains the most active thread, at 28 comments. Most of the activity was bug fixing in the proxy and translation layers. The main items were background health-check misattribution (#44154), Anthropic `is_error` propagation, Responses API streaming fidelity, and budget and spend accounting races.

## 2. Releases & Breaking Changes
- **v1.106.0-dev.1**: a dev pre-release. The notes shown contain only the cosign image-signature verification block, with no changelog details.
- **Rust migration (parent ticket)**: [#31263](https://github.com/BerriAI/litellm/issues/31263) is where questions and beta feedback go. An early-beta signup group exists. Nothing in today's data states a breaking change, but treat it as a future migration path.
- **Possible behavior change**: PR [#38663](https://github.com/BerriAI/litellm/issues/38663) proposes to stop injecting `temperature=1.0` for Gemini 3.x when the caller omits it. That would change the defaults for Vertex and AI Studio routes if merged.

## 3. New Model & Hardware Support
- **Ollama**: PR [#45030](https://github.com/BerriAI/litellm/pull/45030) maps `prompt_eval_cached_count` to `cached_tokens` (chat and text completion, streaming and non-streaming). Today, Ollama cache hits always report 0.
- **Gemini**: PR [#44910](https://github.com/BerriAI/litellm/pull/44910) syncs shutdown dates (`deprecation_date`) for 10 direct Gemini API keys (TTS, Live, image, Omni previews).
- **New provider**: PR [#38925](https://github.com/BerriAI/litellm/pull/38925) adds **llmman**, a local model runner with an OpenAI-compatible API on port 17434.
- **Requested**: Cloudflare Workers AI exact-URL support for the complexity router's classifier ([#44149](https://github.com/BerriAI/litellm/issues/44149)). Qwen3-TTS via vLLM on `/v1/audio/speech` is also still open ([#20078](https://github.com/BerriAI/litellm/issues/20078)).
- No hardware or quantization changes today.

## 4. Performance & Optimization
- The Rust gateway ([#31263](https://github.com/BerriAI/litellm/issues/31263)) targets sub-1ms overhead. No measured numbers appear in today's data.
- PR [#38522](https://github.com/BerriAI/litellm/pull/38522) fixes `custom_httpx` so that `timeout=None` no longer bypasses the client defaults. This is a robustness fix, not a speedup.
- [#44546](https://github.com/BerriAI/litellm/issues/44546): `aspeech` runs a synchronous provider twice. This doubles latency and cost, and Gemini TTS is billed twice upstream.
- PR [#37037](https://github.com/BerriAI/litellm/pull/45037) (the link is [#45037](https://github.com/BerriAI/litellm/pull/45037)) is a refactor that exposes public names for 104 private provider helpers. It has no performance impact.

## 5. Stability & Regressions (by severity)
1. **Security and auth**
   - [#44182](https://github.com/BerriAI/litellm/issues/44182) (closed): the team ID is not verified on JWT, which undermines per-application model restrictions.
   - [#35536](https://github.com/BerriAI/litellm/issues/35536): Responses ID ownership checks have no explicit policy when signing config or ownership metadata is missing.
   - [#45028](https://github.com/BerriAI/litellm/issues/45028): the proxy fails open. It starts without a `default_on` guardrail of an unknown type and logs one error line.
2. **Billing and spend correctness**
   - [#43491](https://github.com/BerriAI/litellm/issues/43491): spend caches lose concurrent increments.
   - [#35524](https://github.com/BerriAI/litellm/issues/35524): budgeted requests skip reservation when the cost can't be estimated.
   - [#36941](https://github.com/BerriAI/litellm/issues/36941): the budget reset clears counters before `reset_at` is persisted.
   - [#35563](https://github.com/BerriAI/litellm/issues/35563): spend-log IDs can collide.
   - [#33328](https://github.com/BerriAI/litellm/issues/33328): Replicate runtime cost is undercounted.
   - [#44546](https://github.com/BerriAI/litellm/issues/44546): the `aspeech` double call described above.
   - Fix PR [#45043](https://github.com/BerriAI/litellm/pull/45043): a `/v1/messages` "dictionary changed size during iteration" race (#44748) returns 500 while the spend row is recorded as a success.
3. **Request handling and translation**
   - [#44535](https://github.com/BerriAI/litellm/issues/44535): an Anthropic response with no `usage` object triggers a retry and an HTTP 500.
   - [#38358](https://github.com/BerriAI/litellm/issues/38358): `request_timeout` never fires when the upstream is silent from the first byte.
   - [#32281](https://github.com/BerriAI/litellm/issues/32281): MCP tool conversion drops the `function` wrapper and gives 400 on `hosted_vllm`.
   - [#32489](https://github.com/BerriAI/litellm/issues/32489): `use_chat_completions_api` is not honored on `/chat/completions`.
   - [#33456](https://github.com/BerriAI/litellm/issues/33456): `MidStreamFallbackError` ("MockValSer") with SAP AI Core.
   - [#44923](https://github.com/BerriAI/litellm/issues/44923): Responses streaming omits `sequence_number`. `output_item.done` is hardcoded to 1.
   - [#16060](https://github.com/BerriAI/litellm/issues/16060): `usage-based-routing-v2` finds no deployment (stale).
   - [#25260](https://github.com/BerriAI/litellm/issues/25260): the Prisma query engine crashes on Windows pip installs (1.82.x/1.83.0).
   - [#44274](https://github.com/BerriAI/litellm/issues/44274): OTLP span events are dropped before ClickHouse storage.
   - [#33021](https://github.com/BerriAI/litellm/issues/33021): componentized startup ignores YAML DB pool limits and still logs the full DB URL at debug level.
4. **Health checks**
   - [#44154](https://github.com/BerriAI/litellm/issues/44154) (closed): background health results are attributed to every deployment sharing the same `litellm_params.model`. A dead host can show as healthy. Fix PRs [#44320](https://github.com/BerriAI/litellm/pull/44320) and [#44982](https://github.com/BerriAI/litellm/pull/44982) are both closed, so check the merge state before relying on the fix.

**Open fix PRs**
- [#45038](https://github.com/BerriAI/litellm/pull/45038) and [#44984](https://github.com/BerriAI/litellm/pull/44984): preserve `is_error` on Anthropic `tool_result` blocks, generally and for Gemini.
- [#45044](https://github.com/BerriAI/litellm/pull/45044): include `encrypted_content` in streamed reasoning done events.
- [#33553](https://github.com/BerriAI/litellm/pull/33553): video ID re-encoding so per-model keys resolve.
- [#44853](https://github.com/BerriAI/litellm/pull/44853): return 499 on client disconnect during body upload.
- [#45042](https://github.com/BerriAI/litellm/pull/45042) and [#45045](https://github.com/BerriAI/litellm/pull/45045): `litellm --test` always fails with "Invalid test value". Both PRs fix it (#44912).
- [#38952](https://github.com/BerriAI/litellm/pull/38952): YAML OpenAPI specs for MCP.

## 6. What This Means for Application Developers
- **Agents using tools through `/v1/messages`**: `is_error` on `tool_result` is currently dropped when translating to OpenAI-style or Gemini targets. Models may treat failed tool calls as successes until #45038 and #44984 land.
- **Responses API streaming clients**: do not rely on `sequence_number` ordering or on reasoning `encrypted_content` appearing in `output_item.done` yet (#44923, #45044).
- **Multi-tenant quota**: there is no token-based monthly budget per team. Only spend-based budgets exist ([#44555](https://github.com/BerriAI/litellm/issues/44555)). Concurrent spend-cache races (#43491) mean budgets can be exceeded under load.
- **Fallbacks and health**: don't trust health status when deployments share a model name. Set explicit timeouts, because `request_timeout` may not trigger on a silent upstream (#38358).
- **Security**: audit `default_on` guardrail configs. An unknown type means the proxy starts without it. Verify JWT team mapping behavior after #44182.
- **TTS users**: be aware of duplicate billing on synchronous providers such as Gemini TTS (#44546).
- **Upgrades**: v1.106.0-dev.1 is a dev tag, so stay on stable for production. Windows pip users should avoid 1.82.x/1.83.0 (#25260).

*Note: one link in section 4 was mislabeled in my draft (#37037). The correct item is PR #45037.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
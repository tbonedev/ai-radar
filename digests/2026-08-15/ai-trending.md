# AI Open Source Trends 2026-08-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-15 07:26 UTC

---

# GitHub AI Open Source Trends Report — 2026-08-15

## 1. Finds

**[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A zero-dependency local binary that indexes the session history your coding agents already write to disk (across 17 different harnesses) and auto-recalls relevant past work at session start and on every prompt. No LLM, no embeddings — just 84.9% hit@1 on LongMemEval-S. Worth trying for anyone tired of re-explaining context to Claude Code/Codex/Cursor every session; the "no LLM required" claim is unusual enough to be worth verifying yourself, but the benchmark number is concrete rather than marketing fluff.

**[cactus-compute/needle](https://github.com/cactus-compute/needle)** — A 14MB foundation model built to run on phones, wearables, smart-home devices, and robots. For engineers building on-device AI where cloud latency or privacy rules out API calls, this is a genuinely different weight class from the usual "small" 1-3B models people call edge-ready.

**[elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine)** — Indexes your codebase into a local MCP server so agents search instead of reading whole files, claiming 94% token savings, and plugs into Claude Code, Codex, Copilot, Cursor, and Gemini CLI. Concrete, cheap to try, and addresses a real pain point (context-window burn) rather than a vague productivity claim.

**[microsoft/flint-chart](https://github.com/microsoft/flint-chart)** — A visualization *language* (not a library) designed so AI agents can reliably produce good-looking, human-editable charts from simple specs instead of hand-rolled, inconsistent chart code. Useful for anyone building agent-generated dashboards or reports who's hit the "the agent's chart output is unusable" wall.

**[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)** — A browser purpose-built for AI agent browser automation, sharing your already-logged-in session state with agents like Codex or Claude Code without interrupting your own browsing. Practical for anyone doing agentic web automation who's been fighting cookie/session hand-off hacks.

**[cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)** — Not a framework but a pattern language and small CLI toolset (`loop-audit`, `loop-init`, `loop-cost`) for designing and auditing how coding agents loop and orchestrate work. Worth a look if you're past "prompt engineering" and trying to reason systematically about agent loop design and cost — treat it as an emerging vocabulary more than a finished product.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 14,822 | 20MB cross-platform client for 70+ databases with a built-in AI assistant, MCP server, CLI, and desktop app. Notable for shipping AI/MCP support in a genuinely lightweight footprint rather than a bloated Electron app. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 10,027 | A universal provider proxy letting Codex/Claude Code CLI, App, and SDK talk to any LLM backend (Gemini, Grok, DeepSeek, Ollama). Useful if you're locked into one CLI's UX but want provider flexibility. |
| [nexu-io/html-anything](https://github.com/nexu-io/html-anything) | HTML | 8,300 | An agentic HTML editor with 75 skills across 9 output surfaces (decks, posters, data reports) and zero-API-key operation via any local coding agent. Broad surface area is either a strength or feature bloat depending on your use case. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 4,686 | Open-source auth gateway connecting 1000+ SaaS providers to AI agents via SDK, CLI, MCP, HTTP, and OpenAPI — a single integration point instead of building OAuth flows per tool. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 781 | Gives any AI agent the ability to write and execute code via MCP tools — a minimal, focused offering rather than a full harness. |
| [elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine) | Python | 395 | Local MCP codebase indexer claiming 94% token savings by letting agents search instead of read; works with the major coding agents. |
| [modelstudioai/cli](https://github.com/modelstudioai/cli) | TypeScript | 304 | Official CLI for Alibaba Cloud's Model Studio (百炼), exposing models, search, and multimodal capabilities as structured tool calls for agent frameworks. |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | JavaScript | 0 (+165) | Purpose-built browser for AI agent browser automation, sharing logged-in session state without disrupting the user — zero cost, zero config. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 34,595 | A DeepSeek-native terminal coding agent engineered specifically around prefix-cache stability for long-running sessions — a narrower, more focused bet than general-purpose harnesses. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 8,858 | An open-source meta-harness that orchestrates Claude Code, Codex, Cursor, and Pi under one policy/sandboxing layer, letting you swap agent backends without rewriting workflows. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | JavaScript | 10,382 | Patterns and CLI tooling (loop-audit, loop-init, loop-cost) for designing and auditing how coding agents loop and orchestrate — an emerging discipline more than a finished product. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,124 | A local-first AI agent workspace spanning coding, writing, design, and research in a single runtime with both desktop GUI and TUI. |
| [cosmicstack-labs/mercury-agent](https://github.com/cosmicstack-labs/mercury-agent) | TypeScript | 3,007 | A 24/7-runnable agent with permission-hardened tools and token budgets, accessible via CLI or Telegram — notable for treating budget/permission limits as core features, not afterthoughts. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 2,890 | A persistent development workspace designed to self-improve and continue work across sessions rather than resetting each run. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 581 | A meta-harness for scaffolding your own branded agent harness with its own CLI, MCP server, memory, and learning loop — for teams building an internal agent product rather than using an off-the-shelf one. |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | TypeScript | 0 (+769) | An all-in-one AI agent workspace running multiple agents (Claude Code, Codex) across 100+ integrations and MCP with shared memory. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/flint-chart](https://github.com/microsoft/flint-chart) | TypeScript | 3,776 | A visualization language letting AI agents reliably generate expressive charts from human-editable specs, rather than fragile hand-rolled chart code. |
| [worldwonderer/oh-story-claudecode](https://github.com/worldwonderer/oh-story-claudecode) | JavaScript | 5,579 | An end-to-end skill pack for Chinese web-fiction writing — trend scanning, outlining, drafting, "de-AI-ifying" prose, and cover art — showing how deep agent skills can go in a narrow vertical. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 5,057 | An AI video skill for Claude Code/Codex built on Remotion, with 152 shot recipe cards and 209 motion previews for production-ready cinematic product videos. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0 (+3646) | 29 editorial diagram types for Claude Code as self-contained HTML+SVG, explicitly positioned against generic Mermaid output — today's single biggest star gainer on trending. |
| [lightningpixel/modly](https://github.com/lightningpixel/modly) | TypeScript | 0 (+579) | A desktop app generating 3D models from images or prompts using local AI, running entirely on your own GPU — no cloud round-trip. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 523 | Turns your coding agent into a video studio: describe a video in plain language and the agent writes the timeline and renders the file. |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | 0 (+436) | A unified team workspace (email, chat, docs, tasks, agents, CRM) with shared AI memory. Broad, all-in-one scope makes it worth watching for real differentiation rather than assuming substance from the pitch. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,029 | A text-space optimizer that trains reusable natural-language skills for *frozen* LLM agents via trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts — an interesting alternative to weight fine-tuning for improving agent behavior. |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | Python | 6,603 | A token-efficient AI agent aiming for higher intelligence density at the same token budget — worth checking what "efficient" actually means in their benchmarks before trusting the framing. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 5,984 | Runs Gemma 4 26B-A4B inference in roughly 2GB of RAM on any M-series MacBook — a concrete, verifiable claim about squeezing a mid-size model onto commodity laptop hardware. |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0 (+662) | A 14MB foundation model built for phones, wearables, smart-home devices, and robots — genuinely small-footprint edge AI. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Python | 0 (+501) | A local UI for running and training LLMs/diffusion models (Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, FLUX) — already well-established, but today's gain reflects fast adoption of the newest model releases. |
| [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) | — | 0 (+222) | A curated awesome-list for DeepSeek-based agent tooling — a discovery aid rather than a tool itself. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 0 (+473) | A leading open-source RAG engine fusing retrieval with agent capabilities to build a context layer for LLMs — already well known, but still drawing steady daily gains. |
| [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Jupyter Notebook | 873 | 30 runnable notebooks covering the full spread of agent memory approaches — buffers, vector stores, knowledge graphs, MemGPT, Mem0, Letta, Zep, Graphiti — with LoCoMo benchmark comparisons. A genuinely useful reference for picking a memory architecture rather than a single opinionated tool. |
| [future-agi/future-agi](https://github.com/future-agi/future-agi) | Python | 1,682 | A self-hostable, Apache-2.0 platform for evaluating, observing, and improving LLM/agent apps — tracing, evals, simulations, datasets, gateway, guardrails in one place. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 633 | Indexes existing coding-agent session history from disk and recalls it automatically across 17 harnesses — no LLM, no embeddings, single local binary, 84.9% hit@1 on LongMemEval-S. |
| [caura-ai/caura](https://github.com/caura-ai/caura) | Python | 430 | Governed, MCP-native shared memory for multi-agent, multi-tenant fleets, with trust tiers, keystone policies, and audit trails — targets teams running many agents that need to share and police context, not solo users. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 626 | Fully offline, encrypted agentic memory with a GUI memory map, positioned on privacy — worth scrutinizing the "superior memory" claim against something like the NirDiamant notebook comparisons above. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 329 | Turns local files into searchable context for AI agents — a small, single-purpose tool rather than a full memory platform. |

## 3. Trend Signal Analysis

Today's list is dominated by **agent memory and persistence tooling**: deja-vu, caura, Compartment, stashbase, and NirDiamant's 30-notebook memory survey all attack the same problem — giving agents continuity across sessions — from different angles (disk-indexed recall with no LLM, governed multi-tenant memory, offline-encrypted memory, and a pure educational reference). This is maturing fast enough that "memory architecture" is becoming a distinct decision point rather than an afterthought bolted onto a RAG stack.

A second clear thread is **harness-agnostic meta-tooling**: omnigent, metaharness, sandbase-harness, and opencodex all exist to abstract over the growing zoo of coding agents (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Qwen, Pi, Hermes). The sheer number of these interop layers signals real fragmentation pain among engineers running multiple agent CLIs day to day.

**Token/cost efficiency** is now a marketed feature rather than an implementation detail — code-context-engine's 94% token-savings claim, opensquilla's "same budget, higher intelligence density," and claude-batchy-bulk's 50% API cost cut all target the same budget-conscious audience.

On the model side, **edge and local inference** stood out: needle's 14MB model for wearables/robots and turbo-fieldfare's 2GB-RAM Gemma 4 inference on Apple silicon both push in the direction of running real models on constrained hardware, following the recent Gemma 4, DeepSeek-V4, Kimi K3, and MiniMax-H3 releases referenced across the unsloth listing.

Finally, **Agent Skills** as a distribution unit (skill packs for writing, video, design judging, TCM knowledge) plus Microsoft's SkillOpt (programmatically optimizing skill text) suggest skills are becoming a first-class, tunable artifact — not just prompt snippets.

## 4. Community Hot Spots

- **Agent memory as its own category** — deja-vu's no-LLM disk-history recall and the NirDiamant memory-techniques notebook collection are the most substantively new entries; worth evaluating before reaching for a heavier vector-store setup.
- **Harness interoperability layers** (omnigent, metaharness, opencodex) — a sign the market hasn't converged on one dominant coding-agent CLI, so cross-harness portability is now a purchasing criterion.
- **Token-cost-aware tooling** (code-context-engine, opensquilla) — concrete, testable savings claims rather than vague efficiency marketing; worth benchmarking against your own token bills.
- **On-device inference pushing smaller** — needle (14MB) and turbo-fieldfare (Gemma 4 in 2GB RAM) show real movement toward running capable models on phones and laptops without a cloud dependency.
- **Skills as a tunable, distributable unit** — Microsoft's SkillOpt (automatically optimizing skill text via trajectory-driven edits) is a notable structural idea: improving frozen-model agent behavior through better skill artifacts instead of fine-tuning weights.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
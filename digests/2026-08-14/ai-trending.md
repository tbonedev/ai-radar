# AI Open Source Trends 2026-08-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-14 08:12 UTC

---

# AI Open Source Trends Report — 2026-08-14

## 1. Finds

**[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A zero-dependency Go binary that indexes the session logs your coding agents already write to disk (across seventeen different harnesses) and surfaces relevant past work automatically at session start, claiming 84.9% hit@1 on LongMemEval-S with no LLM or embeddings involved. Worth trying for anyone running Claude Code/Codex/Cursor daily and tired of re-explaining context every session — the "no LLM, no embeddings, fully local" design is a genuinely different approach from the RAG-memory pattern everyone else is using.

**[cactus-compute/needle](https://github.com/cactus-compute/needle)** — A 14MB foundation model built to run on phones, wearables, and robots rather than servers. Interesting for embedded/edge engineers who need on-device inference under real hardware constraints, not another cloud-API wrapper; too early to tell if quality holds up outside demos.

**[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B in roughly 2GB of RAM on any M-series MacBook. A concrete, verifiable memory-efficiency claim rather than marketing — relevant to anyone doing local inference on consumer Apple hardware without a beefy unified-memory config.

**[NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)** — A Rust routing layer that lets LLM apps switch between models/providers while staying OpenAI- and Anthropic-API compatible. Backed by NVIDIA's NeMo org, so worth watching for teams doing multi-provider benchmarking or cost/perf routing rather than hand-rolling their own proxy.

**[altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice)** — On-device speech-to-text dictation for macOS positioned as a local Wispr Flow alternative, with a custom-trained enhancement model. Useful for privacy-conscious users who want dictation without cloud round-trips; Windows/iOS are still waitlisted, so treat it as macOS-only today.

**[caura-ai/caura](https://github.com/caura-ai/caura)** (formerly MemClaw) — Governed, multi-tenant shared memory for fleets of AI agents, with trust tiers, keystone policies, and audit trails, MCP-native. Aimed at teams running many agents that need to share context safely rather than solo hobbyist use — an early but structurally serious attempt at "memory as infrastructure" rather than a bolt-on vector store.

A caution worth stating plainly: several topic-search entries (e.g. repos claiming 8,000–85,000+ stars on unfamiliar, freshly-named projects) show star counts wildly out of proportion to their visibility or maturity. This pattern is consistent with coordinated star-inflation, which has become common in the agent-skill/agent-framework space on GitHub. Treat raw star counts in the tables below as a weak signal, not a fact of adoption.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | Rust | (+408 today) | Traffic router for LLM apps across models/providers while preserving OpenAI/Anthropic API compatibility. NVIDIA-backed, useful for cost/perf benchmarking across providers. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 9,896 | Universal provider proxy letting Codex CLI/App/SDK and Claude Code run against any LLM backend (Claude, Gemini, Grok, DeepSeek, Ollama). Addresses the growing fragmentation across coding-agent CLIs. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 4,670 | Open-source auth gateway connecting 1000+ SaaS providers to AI agents via SDK/CLI/MCP/HTTP/OpenAPI. Solves the "every integration needs its own OAuth dance" problem for agent builders. |
| [microsoft/flint-chart](https://github.com/microsoft/flint-chart) | TypeScript | 3,763 | A visualization spec language designed for AI agents to reliably produce good-looking charts from simple, human-editable specs, rather than raw code generation. |
| [elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine) | Python | 394 | Indexes a codebase so agents search instead of reading full files, claiming a 94% token reduction; works as a local MCP server with Claude Code, Codex, Copilot, Cursor, Gemini CLI. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 14,641 | 20MB cross-platform DB client for 70+ databases with built-in AI assistant, CLI, desktop app, and MCP server — notable for bundling AI/MCP into ordinary DB tooling rather than a dedicated AI product. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 632 | Local-only session-memory indexer for coding agents across 17 harnesses, 84.9% hit@1 on LongMemEval-S with no LLM/embeddings. A distinctly non-RAG approach to agent memory. |
| [caura-ai/caura](https://github.com/caura-ai/caura) | Python | 430 | Governed shared memory for multi-agent, multi-tenant fleets — trust tiers, audit trails, knowledge graph, self-improving retrieval, MCP-native, Apache 2.0. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 579 | A "meta-harness" toolkit to scaffold your own branded agent harness with its own CLI, MCP server, memory and learning loop; works across Claude Code, Codex, pi.dev, Hermes, OpenClaw. |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | TypeScript | (+241 today) | Open-source all-in-one agent workspace that runs Claude Code, Codex and others across 100+ integrations, browser, and files with shared memory; BYOK or built-in models. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,112 | Local-first agent workspace unifying coding, writing, design, research and automation into one runtime spanning desktop GUI and TUI. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 500 | Free, local, MIT-licensed persistent memory layer for agents (Cursor, Claude Code, Codex, OpenClaw, Hermes) that retains detail and adapts to how you work over time. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | (+778 today) | A packaged set of specialized "personality" agents (frontend, community, QA, etc.) meant to simulate a small agency — more workflow template than framework. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Swift | (+76 today) | On-device STT dictation for macOS with a custom enhancement model, positioned as a local Wispr Flow alternative. Windows/iOS waitlisted, Linux planned. |
| [lightningpixel/modly](https://github.com/lightningpixel/modly) | TypeScript | (+118 today) | Desktop app that generates 3D models from images using local AI, running entirely on your own GPU — no cloud dependency for 3D asset generation. |
| [Open-Less/openless](https://github.com/Open-Less/openless) | Rust | 3,024 | Hold-a-key voice-to-polished-text tool for macOS/Windows — speak, release, and AI-polished text appears at your cursor in any app. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,023 | AI equity-research agent combining resilient workflows, Redis-based single-flight, pgvector RAG, versioned reports, and evidence tracing — a fairly complete vertical RAG+agent stack for finance. |
| [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) | Python | 11,646 | Rebuilds objects from reference images as code-only, procedural, animation-ready Three.js models — a token-efficient take on image-to-3D generation. |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | TypeScript | 524 | Self-hosted, open-source AI sales CRM with native agents and WhatsApp integration, positioned as an open alternative to Kommo/Octadesk/Intercom. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | (+769 today) | A 14MB foundation model designed for tiny devices — phones, wearables, smart home, robots — targeting genuinely constrained hardware rather than laptop-class "small" models. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 5,938 | Runs Gemma 4 26B-A4B inference in ~2GB RAM on any M-series MacBook, a concrete efficiency claim for local inference on consumer Apple hardware. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Python | (+328 today) | Already well-known LLM fine-tuning toolkit; today's momentum comes from added local-UI support for training/running Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4 and FLUX. |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Python | (+205 today) | Official inference and LoRA trainer package for the LTX-2 audio-video generative model — notable for treating audio and video as one generative target. |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,010 | A text-space optimizer that trains reusable natural-language "skills" for frozen LLM agents through trajectory-driven edits and validation-gated updates, producing deployable best_skill.md artifacts — an interesting alternative to weight fine-tuning. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | (+465 today) | Established open-source RAG engine fusing retrieval with agent capabilities; still drawing steady daily star growth, worth a look if you haven't evaluated it recently. |
| [future-agi/future-agi](https://github.com/future-agi/future-agi) | Python | 1,674 | Self-hostable, Apache 2.0 platform for evaluating and observing LLM/agent apps — tracing, evals, simulations, datasets, gateway, guardrails in one place. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 327 | Turns local files into searchable context for AI agents — a lightweight, narrowly-scoped local retrieval layer rather than a full vector-DB deployment. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,439 | An AI-native markdown IDE and LLM wiki, aimed at teams wanting a knowledge base that's natively legible to both humans and models. |
| [volcengine/SearchCLI](https://github.com/volcengine/SearchCLI) | TypeScript | 1,174 | Open CLI for wiring AI search, recommendation, and conversational retrieval into agent and business systems — from ByteDance's Volcengine. |
| [OtterMind/Nubase](https://github.com/OtterMind/Nubase) | Java | 644 | Open-source, AI-native backend (memory, database, storage, auth in one self-hostable service) aimed at turning AI-written code into real deployable apps. |

---

## 3. Trend Signal Analysis

The clearest signal today is **agent memory going from afterthought to standalone infrastructure category**. At least five independent projects — deja-vu, caura, CodeAbra's memory engine, Compartment, and Beever-AI's atlas — are all solving persistent or shared memory for coding/AI agents, with noticeably different architectures (log-indexing with no LLM, governed multi-tenant memory graphs, fully offline encrypted stores). This suggests context loss between sessions has become a widely felt pain point now that multi-hour agent sessions are common.

A second, related pattern is **harness unification**: opencodex, mercury-agent, metaharness, and omnigent are all attempts to abstract over Claude Code, Codex, Cursor, Gemini CLI, and others so users aren't locked into one tool's ecosystem. This is a direct consequence of the coding-CLI space fragmenting rapidly over the past year.

**Agent Skills** continue to proliferate as the dominant packaging format for capability — beyond Anthropic's own `anthropics/skills`, today's data includes skill packs for design judging, obsidian workflows, TCM knowledge lookup, and "human-sounding" Chinese writing, spanning far outside coding use cases.

On the model side, references to **Gemma 4, DeepSeek-V4, MiniMax-H3, and Kimi K3** across unsloth and turbo-fieldfare indicate tooling is already adapting to this newest model generation, with a visible push toward efficient *local* inference (2GB RAM for a 26B model, 14MB edge models) rather than purely cloud-hosted serving.

One caveat: star counts across the topic-search results are inconsistent with typical organic growth for such young or niche projects, suggesting inflated metrics are common in this space right now — read momentum claims skeptically.

---

## 4. Community Hot Spots

- **Agent memory/context-recall tooling** — multiple competing, architecturally distinct approaches (log-indexing, governed shared graphs, offline encrypted stores) shipped in the same week signals this is the next real infrastructure layer, not a niche feature.
- **On-device/edge inference** — needle (14MB), turbo-fieldfare (2GB RAM for a 26B model), and FluidVoice (on-device STT) show real engineering investment in running capable models on constrained or consumer hardware.
- **Cross-CLI/harness abstraction layers** — opencodex, metaharness, and mercury-agent reflect developer fatigue with being locked into a single coding-agent vendor.
- **Agent Skills as a packaging format** — skill bundles are spreading well beyond coding (TCM knowledge, award-judging, translation), suggesting the format itself is becoming a general-purpose distribution unit for AI capability.
- **Treat GitHub star counts on unfamiliar agent/skill repos with skepticism** — several entries in today's topic search show scale inconsistent with visible maturity, likely reflecting the same star-inflation patterns increasingly seen in this space.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
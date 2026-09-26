# AI Open Source Trends 2026-09-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-26 12:01 UTC

---

# AI Open Source Trends Report — September 26, 2026

## 1. Finds

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — An agent memory system built to *learn* from usage rather than just store embeddings, gaining +1,653 stars today. Worth a look for anyone building long-running agents that need to improve behavior across sessions instead of resetting to zero each run.
- **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** — A unified library bundling quantization, distillation, pruning, NAS, and speculative decoding into one toolchain that feeds directly into TensorRT-LLM, TensorRT, and vLLM. Useful for ML infra engineers who currently juggle separate tools for each compression technique before deployment.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI and MCP server billed as "the ripgrep of AI context": it surfaces code signatures at 74.7% fewer bytes than full bodies and computes blast-radius/tests-to-run deltas so agents don't have to read the whole repo. Aimed at teams whose agent token costs are dominated by repo-reading overhead.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A desktop app that records an on-screen work session, then uses the GitHub Copilot CLI to reverse-engineer it into an intent-plus-steps automation or reusable Skill for Copilot Studio/Scout. Notable because it flips the usual "write a skill" workflow into "demonstrate a skill" — good for ops teams wanting to capture tribal knowledge without writing prompts by hand.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory across 29+ coding agents (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, etc.) purely from session history already on disk — no LLM calls, no embeddings. A fix discovered in one agent surfaces in any other agent's history, including sessions from before install. Good fit for developers who bounce between multiple coding agents and want continuity without adopting a heavyweight memory framework.
- **[deeplethe/utopia](https://github.com/deeplethe/utopia)** — Billed as the "world's first open-source enterprise world model," it picked up 7,938 stars, but the description is a single marketing line with no concrete detail on architecture or what "world model" means in an enterprise context. Worth watching, but treat the framing skeptically until the repo shows a working demo rather than a slogan.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | Python | 0 (+359) | Unified quantization/distillation/pruning/NAS/speculative-decoding toolkit feeding TensorRT-LLM, TensorRT and vLLM. NVIDIA-backed, so likely to become a default compression step for production inference. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,345 | Zero-dependency C++23 CLI + MCP server that gives agents compact code signatures instead of full file bodies, plus blast-radius and test-impact analysis. Claims 74.7% fewer bytes than reading full function bodies. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,671 | Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB RAM using portable C99, no BLAS or GPU required. A striking proof point for extreme inference efficiency work. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 9,243 | Adds codebase-specific contextual understanding to speed up and cheapen Claude Code, Cursor, Codex and other agents. Targets teams frustrated by repeated re-discovery of the same codebase context. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,304 | Universal provider proxy letting Codex CLI/App/SDK and Claude Code run against any LLM backend (Gemini, Grok, DeepSeek, Ollama, etc.). High today-relative interest suggests demand for harness/provider decoupling. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,899 | Open-source auth gateway connecting 1,500+ SaaS providers to AI agents via SDK, CLI, MCP, HTTP and OpenAPI — addresses the tedious per-service auth glue code agents otherwise need. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,785 | Local-first search across a workspace designed for both humans and agents to query directly, avoiding a separate indexing service. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 215 | Niche but well-scoped MCP server for RTL waveform debugging (FST/VCD/FSDB), with 34 tools for hardware engineers integrating agents into chip design workflows. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,249 | Meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents behind one policy/sandboxing layer, letting teams swap harnesses without rewriting workflows. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,031 | Builds a shared cross-agent memory purely from existing session logs on disk — no LLM or embeddings — so a fix in one agent's history surfaces in every other agent. |
| [fuxicodex/Fuxi](https://github.com/fuxicodex/Fuxi) | Python | 3,366 | Self-contained terminal coding agent with cost-aware routing across LLM providers, aimed at developers who want provider-agnostic cost control baked into the harness itself. |
| [loopx-project/loopx](https://github.com/loopx-project/loopx) | Python | 6,002 | A control plane with a durable state kernel for long-horizon agent work, keeping tasks moving across sessions with less human babysitting. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 5,653 | Infrastructure aimed specifically at continually self-improving agents — a research-flavored project worth watching rather than adopting today. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 675 | Meta-harness scaffolding tool to generate your own branded agent harness (CLI, MCP server, memory, learning loop) compatible with Claude Code, Codex, pi.dev and OpenClaw. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 501 | A tmux TUI giving live status, quick prompts, worktrees and diff review across whichever coding agent you're running — a practical ops layer rather than a new agent. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 0 (+2109) | Positioned as a general app for managing agents at work; the biggest today-gain on the trending list, though the description is thin on specifics for what "managing agents" entails. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,121 | Records a screen session and uses GitHub Copilot CLI to turn it into a reusable Skill/Automation for Copilot Studio or Scout — a novel demonstration-to-skill pipeline from Microsoft. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+1050) | Bills itself as an "Office Harness for AI Agents" — spreadsheets, docs, slides and PDFs in one runtime an agent can drive directly. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 7,783 | Open-source AI office suite (Docs/Sheets/Slides/PDF/Markdown) with a bundled agent and CLI so Claude Code, Codex and Cursor can edit real .docx/.xlsx/.pptx files locally. |
| [yukitorido/short-video-generator-AI](https://github.com/yukitorido/short-video-generator-AI) | Python | 714 | AI pipeline for vertical short-form video: Whisper transcription, highlight detection and automated editing chained together. |
| [HiThink-Tech/Financial-API](https://github.com/HiThink-Tech/Financial-API) | TypeScript | 3,777 | Official Tonghuashun A-share market data service (real-time/historical quotes, financials, indices) exposed via API/MCP/CLI/Python for AI agents doing quant research. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 1,123 | Desktop app organizing inspiration, characters, worldbuilding, drafting and revision into one workflow, with local (Ollama) and online model support. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,671 | A 2.78T-parameter model running on a single CPU in 8.24 GB RAM via portable C99 — no GPU, no framework dependency, a strong efficiency-engineering demo. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,826 | Gemma 4 26B-A4B inference in ~2 GB RAM on any Apple M-series MacBook, extending the same "run big models on small hardware" trend to Apple Silicon. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,327 | Open book (with companion tools/experiments) quantitatively deriving LLM inference and training system design from hardware constraints — a systems-level reference rather than a runnable tool. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 396 | Practical developer cookbook spanning model selection, inference, fine-tuning, evaluation, RAG and agents — a onboarding resource more than a novel technique. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 0 (+1653) | Agent memory designed to learn from usage over time rather than act as a static vector store; the single biggest today-gain among memory-focused projects. |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | Python | 1,372 | A 7-layer memory operating system (Qdrant-backed, structured facts, auto-curated wiki, surgical context injection) built for the Hermes Agent but provider-agnostic. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 290 | Proposes a "Universal Cross-Model Episodic Memory Standard" — a local-first, project-scoped SQLite engine working across Antigravity, Claude Code, Cursor, Codex CLI, Copilot CLI and OpenCode. Interesting as a standardization attempt rather than just another memory store. |
| [Deuz-AI/Deuz-SDK](https://github.com/Deuz-AI/Deuz-SDK) | TypeScript | 697 | Zero-dependency TS framework combining durable execution, long-term memory, hybrid RAG, MCP tool calling and human-in-the-loop approval behind one streaming API across Claude, GPT, Gemini, Grok, Mistral and DeepSeek. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,196 | Multimodal parsing engine paired with an ontology-powered, LLM-wiki-driven knowledge engine — positions itself as more structured than typical RAG pipelines. |

## 3. Trend Signal Analysis

The clearest pattern today is a wave of **agent memory infrastructure**: hindsight, memory-os, engrim, deja-vu, and Deuz-SDK all attack the same problem — coding/chat agents that forget everything between sessions — but from different angles: learned memory (hindsight), layered memory OS (memory-os), a cross-tool *standard* (engrim), memory mined from existing session logs with zero ML (deja-vu), and memory bundled into a broader agent SDK (Deuz-SDK). This is a maturing signal that "context window" and "vector DB RAG" alone are seen as insufficient, and the ecosystem is experimenting with what a persistent memory layer for agents should actually look like — including standardization efforts, which usually shows up once a space has enough incompatible implementations to need one.

A second theme is **meta-harness / multi-agent orchestration** (omnigent, metaharness, sandbase-harness, loopx), reflecting a market where developers already use several coding agents (Claude Code, Codex, Cursor, OpenClaw) and want a control layer above all of them rather than picking one.

Third, **extreme-efficiency inference** continues (Kimi K3 on a CPU in 8GB RAM, Gemma 4 26B on 2GB Mac RAM), tracking recent large open-weight releases (Kimi K2/K3, Gemma 4) and a continuing push to make big models runnable on commodity or edge hardware without GPUs.

Finally, the "agent-skills" topic is now dense enough to look like an emerging packaging format/marketplace (job-hunting kits, translators, novel-writing, drama scripts, SEO), suggesting Skills are becoming the default distribution unit for vertical AI functionality, alongside MCP servers for tool access.

## 4. Community Hot Spots

- **Agent memory standardization** — engrim's cross-model episodic memory standard and deja-vu's zero-ML session-log memory both suggest the community is looking past "just add a vector DB" toward interoperable, tool-agnostic memory formats.
- **Meta-harnesses over single agents** — omnigent, metaharness and loopx indicate growing appetite for an orchestration layer that treats Claude Code/Codex/Cursor as interchangeable backends rather than committing to one.
- **Extreme-efficiency inference** — kimi-k3-in-c and turbo-fieldfare are notable engineering feats (huge models, tiny RAM footprints) worth tracking for anyone doing local/edge deployment.
- **Skills as a packaging format** — the volume and variety of Claude Code/Codex "skill" repos this week (translation, novel writing, SEO, hotel booking) suggests Skills are becoming a de facto plugin ecosystem, similar to early VS Code extensions.
- **Caution flag** — deeplethe/utopia ("world's first open-source enterprise world model") has high stars but a one-line, unsubstantiated description; treat high-star/low-detail repos like this as unverified until a real demo or writeup appears.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
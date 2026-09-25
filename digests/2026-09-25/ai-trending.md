# AI Open Source Trends 2026-09-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-25 12:31 UTC

---

# GitHub AI Open Source Trends Report — 2026-09-25

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server that gives coding agents structural signatures of a codebase (74.7% fewer bytes than full source) instead of raw grep output, plus "blast radius" and test-impact analysis before an agent commits to a change. Worth trying for anyone whose agent burns context re-reading files it already touched; concrete compression numbers make this look like real engineering, not vaporware.
- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — Agent memory infrastructure explicitly designed to *learn* from past sessions rather than just store transcripts. Relevant to teams building long-running or multi-session agents who are tired of re-explaining context every run.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory store from session history already on disk, usable across Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and 29+ other agents — no LLM or embeddings involved. Good fit for developers who bounce between multiple coding agents and want a fix discovered in one to "stick" in the others.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with sub-300µs in-memory BM25 search and no external databases. Attractive to teams wary of adding a vector DB dependency just for agent recall.
- **[img2threejs/img2threejs](https://github.com/img2threejs/img2threejs)** — Turns a reference image into a procedural, animation-ready Three.js scene as pure code rather than a mesh export, aimed at being token-efficient for agent-driven workflows. Useful for anyone doing agent-assisted 3D/web work who wants inspectable, editable code output instead of opaque model files.
- **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** — NVIDIA's own unified library for quantization, pruning, distillation, NAS and speculative decoding, targeting deployment through TensorRT-LLM/TensorRT/vLLM. Worth attention for infra engineers optimizing inference cost, given the current wave of extreme-quantization releases (see Trend Signal below).

Caution flag: **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** topped today's trending with the vague pitch "the app everyone uses to manage agents at work" — that framing plus zero real description is a hype-shell pattern; worth watching, not yet worth adopting.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | Python | 0 (+360) | NVIDIA's unified toolkit for quantization, distillation, pruning, NAS and speculative decoding, feeding into TensorRT-LLM/TensorRT/vLLM deployment. Official NVIDIA backing gives it a credible path into production inference stacks. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,337 | Zero-dependency C++23 CLI/MCP server compressing codebase context into signatures (74.7% smaller than source) plus blast-radius and test-impact checks for agents. Concrete, measured compression numbers set it apart from typical "context tool" claims. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 0 (+62) | Anthropic's official, curated directory of vetted Claude Code plugins. A trust signal for developers wary of installing arbitrary community plugins. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 586 | Local-first, Git-versioned MCP server/CLI that maintains a governed index of code and database schema for agents to consult before editing. Gives Claude Code, Codex, Cursor and opencode persistent structural memory of a repo. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,769 | Local-first search across a workspace built specifically for agent consumption rather than human `grep` habits. Early but fast-growing on the `mcp` topic list. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 215 | License-free MCP server for RTL waveform debugging (FST/VCD/FSDB), exposing 34 tools for driver analysis and pass/fail diffing to an agent. Niche but a good example of MCP reaching into hardware-verification workflows. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 771 | Native KiCAD 10 plugin exposing 217 schematic/layout/routing/manufacturing tools to any LLM as a single Rust binary. Notable for bringing MCP tooling into PCB/EE design, a domain agent tooling rarely touches. |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | Python | 291 | Self-hosted, MCP-native infrastructure with 42 daily-updated China A-share datasets (quotes, fundamentals, flows) with point-in-time semantics. For quant/fintech engineers building agents over Chinese equity data without paid API tokens. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 0 (+1,386) | Google's open agentic orchestration runtime. Backed by Google and trending hard on day one; worth watching for how it positions against existing orchestration frameworks. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+465) | An agentic skills framework paired with a software development methodology, rather than just a tool library. Aimed at teams standardizing *how* agents work, not just what they can call. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,224 | Meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting teams swap the underlying harness without rewriting workflows, with policy enforcement and sandboxing. High star count suggests real demand for harness-agnostic orchestration. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 673 | Scaffolding tool to spin up your own branded agent harness with its own CLI, MCP server, memory and learning loop, compatible with Claude Code, Codex, pi.dev, Hermes and OpenClaw. A build-your-own-harness kit rather than a harness itself. |
| [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness) | Python | 4,625 | Self-learning skill layer for Claude Code that distills skills from real sessions, updates them as you work, and prunes unused ones — no daemon or benchmark needed. Interesting alternative to manually curated skill libraries. |
| [androoAGI/starnet](https://github.com/androoAGI/starnet) | JavaScript | 0 (+113) | Local-first desktop harness that visualizes real AI agents doing real work as a pixel-art station, bring-your-own-key. More a demo/UX experiment than production infra, but a fun window into agent observability framing. |
| [loopx-project/loopx](https://github.com/loopx-project/loopx) | Python | 5,994 | Control plane with a durable state kernel for long-horizon agents/teams, aimed at keeping multi-session work moving with less human babysitting. Targets the "agent runs for days" use case rather than single-shot tasks. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 496 | tmux TUI giving live status, quick prompts, worktrees and diff review across multiple concurrent coding agents. A practical ops tool for developers running several agent sessions at once. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+1,048) | An "Office harness for AI agents" bundling spreadsheets, docs, slides, canvas, relational tables and PDF into one runtime that agents can operate. Positions itself as the substrate for agent-driven office automation rather than a single app. |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | TypeScript | 16,306 | Clones a viral video end-to-end via AI agents — face swap, script, B-roll — shipping 100 variants from one command. Huge star count signals strong interest in fully automated short-form content pipelines, though it's squarely in the "content farm tooling" space. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 7,699 | Free, open-source Office suite (Docs/Sheets/Slides/PDF) with a built-in agent and CLI that lets Claude Code, Codex and Cursor edit real .docx/.xlsx/.pptx files locally, bring-your-own-key. Fills a real gap: agents rarely touch actual Office file formats today. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 4,914 | Self-hosted, multi-user, multi-agent personal assistant from Tencent Cloud. Notable mainly for the backer; feature set is still generic "smart assistant." |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 5,039 | Self-hosted, zero-ops A-share quant workbench combining LLM-driven stock screening, monitoring, backtesting and post-trade review. A fully open alternative to commercial Chinese equity research terminals. |
| [simonlin1212/Vibe-Research](https://github.com/simonlin1212/Vibe-Research) | TypeScript | 2,577 | Personal investment research agent covering A-share/US/HK markets, built on an open-source Codex harness, with daily reviews and position tracking. Similar niche to tick-stock-panel but built agent-first rather than dashboard-first. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 1,113 | Desktop app (Windows/macOS) organizing inspiration, characters, worldbuilding and chapter drafting into a controllable AI-assisted writing pipeline, supporting local and online models. A structured alternative to ad hoc prompting for long-form fiction. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,099 | Desktop app that records an on-screen work session and uses GitHub Copilot CLI to reconstruct it into a reusable Skill/Automation for Microsoft Scout, Copilot Cowork or Copilot Studio. Notable as a Microsoft-backed "record once, automate forever" approach to skill authoring. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,624 | Runs the 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB RAM, in portable C99 with no BLAS, no framework, no GPU. A striking extreme-quantization/engineering feat that makes a frontier-scale model runnable on commodity hardware. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,823 | Runs Gemma 4 26B-A4B inference in ~2 GB RAM on any Apple Silicon MacBook. Part of the same edge-inference wave as the Kimi K3 project, targeting Mac-native deployment specifically. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 10,211 | Billed as the first open-source "enterprise world model." Very high star count with a thin public description — worth watching for what it actually delivers before treating it as a real finding. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,273 | Open-source Chinese-language book deriving LLM inference/training system design quantitatively from hardware constraints and model architecture, with full text, PDF, calculation tools and experiments. A rare rigorous, freely available reference for AI infra engineering in Chinese. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 5,146 | Continual-learning infrastructure for self-improving agents. Early-stage but targets a real gap — most agent frameworks today don't actually learn across deployments. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 0 (+1,652) | Agent memory system explicitly designed to learn from past interactions rather than just log them. One of today's biggest single-day star gainers, suggesting strong pent-up demand for smarter agent recall. |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 10,092 | Pixel-native search that bypasses traditional web/HTML parsing entirely, based on a linked arXiv paper (2606.28344). A genuinely different approach to RAG ingestion worth a read for anyone frustrated with brittle HTML/PDF parsers. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 723 | Git-native persistent memory for coding agents implementing Google OKF v0.2, with sub-300µs in-memory BM25 search and claimed 80% token-bloat reduction, no external databases. A lightweight alternative to vector-DB-backed agent memory. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,002 | Shared memory across 29+ coding agents built purely from on-disk session history — no LLM, no embeddings, single local Go binary. Directly addresses the pain of losing context when switching between agent tools. |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | Python | 1,372 | Seven-layer memory OS for the Hermes Agent using Qdrant, with structured facts, "fabric recall," and auto-curated wiki context injection. Runs fully locally with any LLM provider. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 581 | Fully offline, encrypted agentic memory with one-click install and a GUI memory map, working across OSes and agents. Notable for prioritizing privacy/offline operation over cloud-backed memory services. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 286 | Local-first, project-scoped SQLite episodic memory standard for Antigravity, Claude Code, Cursor, Codex CLI, Copilot CLI and OpenCode, with zero cloud lock-in. A cross-agent memory *standard* attempt rather than a single tool's feature. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,315 | AI-native markdown IDE combined with an LLM wiki. Positions documentation itself as something an LLM reads and writes natively, rather than a static knowledge base bolted onto a chatbot. |

## 3. Trend Signal Analysis

The dominant theme today is **agent memory**, and it's not a minor sub-trend — at least seven distinct projects (hindsight, deja-vu, okf-agent-memory, memory-os, Compartment, engrim, PixelRAG) are independently attacking the same problem: coding and general-purpose agents forget everything between sessions and across tools. What's notable is the *diversity* of approaches converging on the same need: some go LLM-free and embedding-free for speed and determinism (deja-vu, okf-agent-memory), some go fully offline/encrypted for privacy (Compartment), and some propose cross-agent standards (engrim) rather than single-vendor features. This suggests the ecosystem has moved past "does my agent have memory" to "whose memory format wins."

A second, related theme is **harness consolidation fatigue**. With Claude Code, Codex, Cursor, Gemini CLI, OpenClaw, opencode and others all coexisting, multiple projects today (omnigent, ruvnet/metaharness, loopx, sandbase-harness, aoci-code) explicitly pitch themselves as the layer that lets you swap harnesses without rewriting workflows — a sign teams are tired of harness lock-in.

On the model side, two projects (kimi-k3-in-c, turbo-fieldfare) push extreme quantization of very recent open-weight releases (Kimi K3, Gemma 4) to run on consumer CPUs/Macs with single-digit GB of RAM, echoing NVIDIA's same-day Model-Optimizer trending — a coordinated industry push toward cheap, local inference following recent frontier open-weight drops.

## 4. Community Hot Spots

- **Cross-agent memory standards** (deja-vu, engrim, okf-agent-memory) — worth tracking closely since whichever format gains adoption will shape how every other agent tool stores context.
- **Extreme quantization of frontier open-weight models** (kimi-k3-in-c, turbo-fieldfare) — a strong signal that "run it on my laptop" is becoming a first-class goal even for trillion-parameter-class models.
- **MCP reaching into non-coding domains** (Tencent/wave-mcp for hardware debug, mixelpixx/Konnect for PCB design) — MCP tooling is starting to move beyond software development into EE/hardware workflows.
- **Harness-agnostic orchestration layers** (omnigent, metaharness, loopx) — a maturity signal that teams want portability across the fragmented coding-agent landscape rather than betting on one vendor.
- **Pixel-native / parsing-free retrieval** (StarTrail-org/PixelRAG) — a genuinely novel RAG ingestion approach worth a close read given how brittle HTML/PDF-based pipelines remain.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
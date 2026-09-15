# AI Open Source Trends 2026-09-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-15 12:25 UTC

---

# AI Open Source Trends Report — 2026-09-15

## 1. Finds

- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU using only 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, and no GPU. Worth a look for anyone chasing extreme quantization/CPU-inference tricks in the llama.cpp tradition — this pushes the "run a huge MoE on hardware you already own" idea further than most.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory store from the session history already sitting on disk for Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and 20+ other agents — no LLM calls, no embeddings. Useful for anyone who bounces between multiple coding-agent CLIs and is tired of re-explaining the same fix to each one.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server billed as "the ripgrep of AI context": it computes blast radius and which tests to run before an agent edits code, with compact signatures (74.7% fewer bytes than full bodies) so context stays cheap. From Red Hat's emerging-tech group, aimed at teams trying to keep agent edits scoped and verifiable.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with an embedded MCP server and sub-300µs in-memory BM25 search, claiming an 80% cut in token bloat with zero external databases. Pure Go, worth trying if your agent keeps re-deriving context you already paid to generate once.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)** — An MCP server for RTL waveform debugging: reads FST/VCD/FSDB waveforms plus a SystemVerilog netlist and exposes 34 tools for driver analysis, pass/fail diffing, and static analysis, with a browser waveform viewer the agent can drive. Niche but concrete — a real signal that MCP servers are reaching into hardware/EDA verification workflows, not just software dev.
- **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** — Claims 138,999 stars for a small "think like a lazy senior dev" skill repo; that star count is wildly disproportionate to the project's apparent scope and reads as manipulated/bought stars rather than organic traction. Treat trending-list rankings with skepticism when a repo this size outranks Apache and Red Hat projects — do not treat this as a genuine signal.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+2,751) | Hybrid deterministic-pipeline + LLM-agent code reviewer battle-tested at Alibaba scale, with line-level comments and a built-in security ruleset (NPE, XSS, SQLi). Its trending debut with +2,751 stars today makes it worth evaluating as a CI-integrated reviewer alongside human review. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 0 (+2,035) | A pure-C, zero-dependency engine that streams MoE experts from disk to run frontier models on modest hardware. Strong debut momentum signals real interest in disk-streamed inference as a memory-constrained alternative to full in-RAM loading. |
| [earendil-works/pi](https://github.com/earendil-works/pi) | TypeScript | 0 (+437) | An AI agent toolkit bundling a unified LLM API, agent loop, TUI, and coding-agent CLI in one package. Positioned as infrastructure for builders who want to assemble their own agent rather than adopt a full harness. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 7,965 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex and other coding agents to make them faster and cheaper per call. High star count for a fairly young repo suggests real developer pain around generic context retrieval. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 14,714 | A universal provider proxy letting Codex CLI/App/SDK and Claude Code run against any backend model (Gemini, Grok, DeepSeek, Ollama, etc.). Its 14.7k stars reflect strong demand for decoupling agent harnesses from a single vendor's models. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,750 | Open-source auth gateway wiring 1,500+ SaaS providers into agents via SDK, CLI, MCP, HTTP and OpenAPI. Useful as connective tissue for anyone building agents that need to touch real business systems, not just files and shells. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,153 | Zero-dependency CLI + MCP server computing blast radius and required tests before an agent commits to a change. A credible, lab-backed answer to the "agents editing code blind" problem. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 655 | Git-native, dependency-free persistent memory for coding agents implementing the Google OKF v0.2 spec with an embedded MCP server. Claims an 80% token-bloat reduction — a concrete, testable number worth verifying. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 0 (+568) | Turns existing coding agents into research agents. Fresh trending entry from the alphaXiv team, a name already known in paper-discovery tooling, lending it some credibility despite the zero baseline stars. |
| [pacifio/atlas](https://github.com/pacifio/atlas) | Rust | 0 (+1,091) | "Source control for agents" — lets you run multiple coding agents in parallel, track their changes, and query them from one place. Strong first-day momentum (+1,091) for a category (multi-agent change tracking) that's clearly in demand. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,220 | Patterns, starters and CLI tools (loop-audit, loop-init, loop-cost) for designing agent orchestration loops, explicitly inspired by Addy Osmani and Boris Cherny's writing on the subject. A good entry point if "loop engineering" as a discipline is new to you. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,961 | An open-source meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents interchangeably, enforcing policy and sandboxing across all of them. Useful if you're standardizing agent usage across a team using different tools. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 5,434 | An Apache Incubating project: a high-performance agent workspace that keeps a complete record of everything an agent did. Apache backing is a meaningful trust signal in a space full of unvetted single-maintainer repos. |
| [UditAkhourii/adhd](https://github.com/UditAkhourii/adhd) | TypeScript | 4,174 | A skill implementing tree-of-thought with pruning on top of the Claude/Codex Agent SDK — fans out parallel divergent thoughts under different cognitive frames, scores and prunes them. Worth trying for genuinely creative or interdisciplinary tasks where a single reasoning trace tends to converge too fast. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,950 | Records an on-screen work session and uses GitHub Copilot CLI to reconstruct it into a reusable Skill or Automation for Copilot Studio/Scout. A Microsoft-backed take on "show, don't write prompts" skill authoring. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 383 | A 12-phase research skill for Claude Code with a plan-review gate, parallel sub-agent search, claims-ledger triangulation, and four-layer citation verification across 47 APIs. Ambitious scope for a small repo — worth checking whether the pipeline holds up under real use before relying on it. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 0 (+2,081) | A fully local, open-source alternative to ElevenLabs covering voice cloning, voice design, video dubbing, dictation, transcription and audiobook creation across 646 languages. Big first-day jump (+2,081) for a self-hosted voice stack that avoids per-minute cloud pricing. |
| [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) | Python | 16,084 | Rebuilds an object from a reference image as a code-only, procedural, quality-gated Three.js model, optimized for token efficiency. A concrete image-to-3D workflow rather than a generic "AI 3D generator" claim. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 679 | A native KiCAD 10 plugin exposing 217 schematic, layout, routing and manufacturing tools to Claude or another LLM for AI-assisted PCB design. A rare, well-scoped crossover between agent tooling and electronics design. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 1,966 | A native MCP plugin for the x64dbg debugger exposing its full functionality over HTTP — breakpoints, stepping, memory reads, register dumps — to any MCP-compatible agent. Zero-dependency, single-binary, useful for reverse-engineering-assisted workflows. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 6,812 | A free, open-source AI office suite (Docs/Sheets/Slides/PDF/Markdown) plus a CLI and agent skill so Claude Code, Codex and Cursor can edit real .docx/.xlsx/.pptx files locally with your own API key. Cross-platform and BYOK, avoiding vendor lock-in on office formats. |
| [HiThink-Tech/Financial-API](https://github.com/HiThink-Tech/Financial-API) | TypeScript | 3,323 | Official Tonghuashun (HiThink) A-share financial data service — real-time quotes, financial statements, indices — exposed via API, MCP, CLI and Python for agent-driven quant research. A solid example of a vertical data provider going MCP-native. |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 4,706 | A self-hosted, zero-ops quant workbench for A-share stock picking, monitoring and backtesting, with LLM-driven strategy customization and pluggable data sources. Aimed at individual quant researchers rather than institutions. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 7,938 | Runs the 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB of RAM using portable C99 with no BLAS, framework, or GPU dependency. A striking data point for how far extreme quantization and disk/RAM engineering can stretch consumer hardware. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,967 | Backed by an arXiv paper (2606.28344), it proposes skipping web/HTML parsing entirely in favor of pixel-native retrieval over rendered pages. A genuinely different take on the RAG ingestion problem worth reading the paper for before adopting. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,219 | An AI-native markdown IDE and LLM wiki from Inkeep, a known name in AI search/support tooling. Positions itself as a knowledge base built for both humans and agents to read and edit. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,042 | An all-in-one multimodal parsing engine paired with an ontology-powered, LLM-wiki-driven knowledge engine. Aims to unify document parsing and structured knowledge representation in one pipeline. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 586 | Encrypted, fully offline agentic memory with a one-click installer and a GUI memory map, working across OSes and agents. Notable for prioritizing encryption and offline operation over cloud-hosted memory services. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 661 | An open-source writing IDE that turns local files into a wiki, then lets you write against your own sources using Claude Code or Codex. A lightweight personal-RAG-for-writers approach. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 317 | A free, no-signup Taiwan legal MCP server and CLI covering 22.5 million court judgments and administrative rulings with citation checking, for use with Claude/ChatGPT/Codex. A well-scoped vertical RAG example over a large, specific corpus. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 252 | A local-first memory engine for AI agents with semantic embeddings, packaged as a single zero-config Rust binary that runs fully offline. Fits the same "portable agent memory" pattern as several other entries this cycle. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 261 | Proposes a "Universal Cross-Model Episodic Memory Standard" — a local-first, project-scoped SQLite engine shared across Antigravity, Claude Code, Cursor, Codex CLI and OpenCode. Worth watching as a candidate interchange format if it gets adoption beyond its author. |

## 3. Trend Signal Analysis

The single loudest signal today is **agent memory as its own product category**: deja-vu, okf-agent-memory, Compartment, uteke, engrim, and heimdall (honorable mention, ⭐93) all attack the same problem — coding agents forgetting everything between sessions — with a shared design philosophy of local-first, zero- or low-dependency, single-binary implementations that explicitly avoid cloud databases and, in several cases, avoid embeddings/LLM calls altogether (deja-vu, okf-agent-memory use plain BM25/session-history parsing). This is a maturing response to the fragmentation of coding-agent CLIs (Claude Code, Codex, Cursor, Copilot CLI, Gemini CLI, OpenClaw) — teams want memory and context that follow the developer across tools, not memory locked inside one vendor's harness.

A second, related pattern is the rise of "**meta-harnesses**" (omnigent, ruvnet/metaharness, EverMind's Raven — literally "the harness of harnesses" — and lazycodex) that sit above individual agent CLIs to add policy, sandboxing, and cross-tool orchestration. This mirrors last cycle's proliferation of agent CLIs themselves: once there are enough harnesses, the next wave builds a harness for the harnesses.

Third, the Agent Skills format (Claude/Codex compatible) is spawning a visible plugin ecosystem — video generation, PPT building, SEO, translation, novel writing, and research pipelines are all being packaged as portable "skills" rather than standalone apps, suggesting the format is becoming a real distribution channel.

Finally, kimi-k3-in-c's single-CPU 2.78T-parameter inference continues the post-DeepSeek trend of squeezing frontier-scale open models onto consumer hardware through aggressive quantization and disk streaming (also seen in JustVugg/colibri).

## 4. Community Hot Spots

- **Portable, local-first agent memory** — deja-vu, okf-agent-memory, Compartment, uteke, and engrim are independently converging on the same problem with notably similar zero-dependency, single-binary designs; worth tracking which one becomes a de facto standard.
- **Meta-harness orchestration layers** — omnigent, metaharness, and Raven all try to unify Claude Code/Codex/Cursor/Pi under one policy and sandboxing layer, a sign the market is saturated enough with individual agent CLIs to need a layer above them.
- **Extreme CPU/consumer-hardware inference** — kimi-k3-in-c and colibri both push trillion-parameter-class MoE models onto commodity hardware; worth watching for accessibility implications for teams without GPU budgets.
- **Vertical MCP servers reaching into hardware and specialized domains** — x64dbg-mcp-server (reverse engineering), wave-mcp (RTL/EDA verification), and Konnect (PCB design) show MCP moving well past generic coding assistance into specialized engineering tooling.
- **Star-count skepticism warranted** — DietrichGebert/ponytail's implausible 138,999-star count on a small skill repo is a reminder to sanity-check trending-list rankings before treating star count as a quality signal.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
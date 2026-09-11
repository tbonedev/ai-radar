# AI Open Source Trends 2026-09-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-11 11:59 UTC

---

# AI Open Source Trends Report — 2026-09-11

## 1. Finds

**[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — A 2.78-trillion-parameter Kimi K3 model running inference on a single CPU in just 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, and no GPU. Worth a look for anyone interested in extreme-efficiency inference or deploying huge models on commodity hardware — this is a serious engineering feat, not a toy demo.

**[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. Same theme as above (squeezing large models onto small, GPU-free hardware) — relevant to developers who want local inference without a cloud bill or a discrete GPU.

**[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory pool from the session history already on disk across Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, and 20+ other coding agents — no LLM, no embeddings. A fix found in one agent surfaces in every other agent you use, including sessions from before you installed it. Useful for anyone who bounces between multiple coding agents and is tired of re-explaining the same codebase context to each one.

**[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server billed as "the ripgrep of AI context": it computes blast radius and tests-to-run before an agent edits code, and represents signatures at 74.7% fewer bytes than full function bodies. Good fit for teams trying to cut token spend and reduce agent mistakes on large codebases; from Red Hat's emerging tech group, so it's not a random weekend project.

**[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing the "Open Knowledge Format" spec, with sub-300µs in-memory BM25 search and an embedded MCP server; claims an 80% reduction in token bloat with zero external databases, pure Go. Multiple independent projects (see `serradura/okf`, `scaccogatto/okf-skills`) are converging on this same OKF spec this week — a real signal that "durable agent memory" is becoming a shared standard, not just one team's idea.

**[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — Proposes pixel-native retrieval instead of parsing documents into text first, backed by an arXiv paper (2606.28344). Interesting if you're doing retrieval over messy, layout-heavy documents (PDFs, scanned forms) where text extraction is lossy — but the marketing framing ("the end of web parsing") is bold for a repo this new, so treat it as an early-stage bet rather than a proven replacement for your RAG pipeline.

*Caveat on the data: `DietrichGebert/ponytail` shows 135,384 stars, an order of magnitude above anything else in this dataset for a small joke-framed skill repo — likely a data anomaly (possible star-count inflation or a scraping artifact) rather than genuine adoption. Treat that number skeptically.*

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 14,291 | A universal provider proxy that lets OpenAI Codex and Claude Code use any LLM backend (Claude, Gemini, Grok, DeepSeek, Ollama). Useful for teams standardizing on one CLI/SDK while keeping model choice flexible. |
| [seakee/CPA-Manager-Plus](https://github.com/seakee/CPA-Manager-Plus) | Go | 3,368 | Self-hosted management panel and AI gateway observability dashboard for tracking requests, usage, cost, quota, and account health. Fills a real ops gap for teams running multiple LLM proxy accounts. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 1,889 | Zero-dependency MCP server that gives coding agents blast-radius and test-impact analysis before edits, with highly compressed code signatures. Backed by Red Hat's emerging-tech team. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 1,930 | Native MCP plugin exposing the x64dbg debugger's full functionality (breakpoints, memory, registers) to any MCP-compatible AI assistant. Niche but a clean example of MCP reaching specialist tooling. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,688 | Open-source auth gateway connecting 1,400+ SaaS providers to AI agents via SDK, CLI, MCP, HTTP, and OpenAPI — addresses the "how does my agent authenticate to everything" integration problem at scale. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 199 | MCP server for RTL waveform debugging (VCD/FSDB), with 34 tools for driver analysis and pass/fail diffing. A hardware-engineering vertical for MCP from Tencent. |
| [DFKHelper/token-goat](https://github.com/DFKHelper/token-goat) | TypeScript | 113 | Token-burn reducer for Claude Code, Codex, Copilot, and Gemini CLI — file interception, image shrinking, MCP call caching, and prompt-injection protections in one package. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,849 | Meta-harness orchestrating Claude Code, Codex, Cursor, Pi, and custom agents with policy enforcement and sandboxing, swappable without rewrites. Part of a broader "harness of harnesses" pattern showing up repeatedly this week. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,156 | Patterns, starters, and CLI tools (loop-audit, loop-init, loop-cost) for designing agent orchestration loops, inspired by Addy Osmani and Boris Cherny's work. Useful reference for teams building their own agent loops rather than a specific product. |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | TypeScript | 0 (+624) | Local-first coding agent desktop app: Electron + Rust host core + pi Agent Harness with user-installable plugins. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 0 (+210) | Runs parallel research agents against any model, from the alphaXiv team known for arXiv paper tooling. |
| [jordan-gibbs/hyperresearch](https://github.com/jordan-gibbs/hyperresearch) | Python | 0 (+118) | Agent-driven research knowledge base where agents collect, search, and synthesize web research into a persistent, searchable wiki. |
| [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | Python | 0 (+132) | Agent purpose-built for mathematical modeling competitions — automatically completes a model and generates a submission-ready paper. Narrow but genuinely novel vertical use case. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+732) | An agentic skills framework and software-development methodology, positioned as a working system rather than a demo. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,822 | Bills itself as "the harness of harnesses" — a persistent, self-evolving multi-agent ecosystem for cross-domain collaboration. Ambitious framing; worth watching to see if it delivers versus similar entrants. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 8,058 | AI video skill for Claude Code and Codex using Remotion, with 152 shot recipe cards and 209 motion previews for cinematic product videos. |
| [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | JavaScript | 8,032 | Agent skill generating browser-editable presentations across multiple visual themes, exportable to HTML/PDF/PPTX. |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 4,568 | Self-hosted, zero-ops A-share (Chinese stock market) quant workbench for stock picking, monitoring, and backtesting driven by LLM-based strategy customization. |
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | TypeScript | 0 (+142) | Desktop app that incrementally builds a persistent, interlinked wiki from your documents instead of doing retrieve-and-answer RAG from scratch each time. |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | TypeScript | 0 (+126) | Self-hosted CRM with native AI agents and WhatsApp integration, positioned as an open alternative to Kommo/Octadesk/Intercom for chat-based sales. |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | TypeScript | 0 (+277) | Autonomous AI trading agent operating across 1,000+ markets (Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs, 5 EVM chains) with an agent-to-agent payment protocol, built on Claude. Ambitious scope for a brand-new repo — worth a cautious look rather than full trust with capital. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 779 | Organizes inspiration, characters, worldbuilding, and drafting/revision into a controllable writing workflow, with Ollama and DeepSeek-harness plugin support. |
| [pascalorg/editor](https://github.com/pascalorg/editor) | TypeScript | 0 (+83) | Open-source 3D architectural editor with a local CLI and MCP tools for both human and AI-agent workflows. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 7,550 | Runs the 2.78T-parameter Kimi K3 model on a single CPU in 8.24 GB RAM using pure C99, no BLAS/framework/GPU required. One of the more technically striking entries in today's data. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 6,811 | Described as the "world's first open-source enterprise world model" — an ambitious claim worth verifying against actual benchmarks before taking at face value. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,700 | Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook, extending the local/efficient-inference trend to Apple silicon. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,935 | Pixel-native retrieval instead of text-parsing documents first, backed by an arXiv paper. Promising for messy/layout-heavy document retrieval, though the "end of web parsing" framing is more marketing than proven fact this early. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,177 | AI-native markdown IDE combined with an LLM wiki, from the team behind Inkeep's docs/support AI products. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 557 | Git-native agent memory implementing the Open Knowledge Format spec, with sub-300µs BM25 search and claimed 80% token-bloat reduction, zero external dependencies. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,022 | All-in-one multimodal parsing engine combined with an ontology-powered, LLM-wiki-driven knowledge engine. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 386 | A 12-phase Claude Code research skill with a plan-review gate, parallel sub-agent search, claims-ledger triangulation, and four-layer citation verification — unusually rigorous design for a research skill. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 314 | Free, no-registration MCP server for Taiwan legal research covering 22.5 million court rulings and administrative interpretations, with citation checking. A well-scoped vertical RAG tool. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 239 | Local-first memory engine for AI agents using semantic embeddings, packaged as a single zero-config Rust binary that runs fully offline. |

## 3. Trend Signal Analysis

Today's data shows three converging directions. First, **"harness of harnesses" architectures** are proliferating fast: `omnigent`, `EverMind-AI/Raven`, `ruvnet/metaharness`, and `kirodotdev/KiroCrew` all pitch themselves as meta-orchestrators sitting above Claude Code, Codex, Cursor, and other individual agent harnesses, letting users swap the underlying agent without rewriting workflows. This suggests real fatigue with vendor lock-in to a single coding-agent product.

Second, **persistent agent memory is crystallizing into a shared standard rather than one-off hacks**. Multiple independent repos this week (`okf-memory/okf-agent-memory`, `serradura/okf`, `scaccogatto/okf-skills`, `vshulcz/deja-vu`, `codecoradev/uteke`, `MaxFreedomPollard/Compartment`) all attack the same problem — agents forgetting context between sessions or across tools — and several explicitly reference the "Open Knowledge Format" (OKF) spec. That convergence around a named spec, rather than competing proprietary formats, is a notable maturation signal.

Third, **efficient/local inference on commodity hardware** stands out technically: a 2.78T-parameter model running on CPU (`kimi-k3-in-c`) and a 26B model running in 2GB RAM on a MacBook (`turbo-fieldfare`) both point to continued pressure to decouple large-model usage from expensive GPU infrastructure, likely accelerated by recent open-weight releases (Kimi K3, Gemma 4).

Finally, the **"Agent Skills" packaging model** (ppt generation, video shot design, de-AI writing, drama scripting, research pipelines) is emerging as a distribution unit analogous to npm packages — Claude Skills and Codex-compatible skills are being built and shared as discrete, composable capabilities rather than full applications.

## 4. Community Hot Spots

- **Cross-agent persistent memory (OKF ecosystem + `deja-vu`)** — several independent teams converging on the same memory spec in one week is worth tracking; likely to consolidate into a de facto standard.
- **Meta-harness orchestration** (`omnigent`, `Raven`, `metaharness`, `KiroCrew`) — solves real vendor-lock-in pain for teams using multiple coding agents; watch for which one gains actual production adoption versus which stays a wrapper.
- **CPU/edge-efficient LLM inference** (`kimi-k3-in-c`, `turbo-fieldfare`) — technically the most impressive work in today's set; relevant for anyone evaluating self-hosted inference costs.
- **MCP servers for specialist verticals** (`x64dbg-mcp-server`, `wave-mcp`, `Konnect` PCB design, `tw-legal-rag`) — MCP is clearly maturing past generic coding assistants into domain-specific tooling distribution.
- **Agentic context efficiency tools** (`ripwire`, `token-goat`) — a growing category focused on cutting token spend and improving agent precision on large codebases, distinct from raw agent-capability projects.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
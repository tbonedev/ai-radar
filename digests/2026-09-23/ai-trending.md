# AI Open Source Trends 2026-09-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-23 12:31 UTC

---

# AI Open Source Trends Report — September 23, 2026

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single Go binary that gives Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and 29 other coding agents a shared memory, built entirely from the session history already sitting on disk (no LLM calls, no embeddings). Worth trying for anyone who bounces between multiple coding agents and is tired of re-explaining the same fix to each one.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs the 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, and no GPU. A genuinely rare engineering feat for anyone studying low-resource inference or building on constrained hardware.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. Relevant to developers who want a capable local model without buying more unified memory.
- **[lidge-jun/aside-codemode](https://github.com/lidge-jun/aside-codemode)** — Replaces dozens of discrete agent tool calls with one sandboxed JavaScript block (ripgrep-backed search, file tools, batched browser work), turning a reported 55 seconds of find+grep into 1 second. Useful for anyone building or tuning an agent harness where tool-call latency dominates.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with sub-300µs in-memory BM25 search and no external databases. A lightweight alternative to vector-DB-backed agent memory for teams that want something they can vendor into a repo.
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — An MCP server that indexes codebases into a persistent knowledge graph, claiming sub-millisecond queries across 158 languages as a single static binary with zero dependencies. Worth a look for MCP users frustrated by token-heavy repo search, though the "99% fewer tokens" claim is unverified and should be tested before relying on it.

Caution flag: **[deeplethe/utopia](https://github.com/deeplethe/utopia)** ("world's first open-source enterprise world model") and **[omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent)** ("meta-harness" that orchestrates every other harness) both use sweeping marketing language without much concrete detail in their descriptions — treat the high star counts skeptically until the docs or code back up the claims.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,323 | A zero-dependency C++23 CLI + MCP server billed as "the ripgrep of AI context" — finds what an agent needs without reading the whole repo, and checks blast radius/tests-to-run before a change ships. Signatures claimed at 74.7% fewer bytes than full function bodies. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | C | — (+201) | High-performance MCP server that turns a codebase into a persistent knowledge graph, indexing in milliseconds across 158 languages. Single static binary with zero dependencies, appealing for teams wary of adding infra just for code search. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,734 | Local-first search across a workspace, built for both humans and AI agents. A grep-like alternative aimed squarely at agent-driven codebases. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,054 | Universal provider proxy that lets Codex CLI/App/SDK and Claude Code run on any backend model (Claude, Gemini, Grok, DeepSeek, Ollama). Popular for decoupling harness choice from model choice. |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | Python | — (+96) | Open-source SDK for building and controlling a production agent harness end-to-end in Python and TypeScript, model- and cloud-agnostic. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,288 | CLI tooling (loop-audit, loop-init, loop-cost) for designing systems that prompt and orchestrate coding agents in structured loops. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 9,069 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex and Gemini to make them faster and cheaper per task. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills) | JavaScript | 2,160 | A skill that delegates a coding task to a separate agent CLI, then has you review the diff and land the commit yourself — one delegate per implementer. A simple pattern for keeping a human review gate in multi-agent setups. |
| [lidge-jun/aside-codemode](https://github.com/lidge-jun/aside-codemode) | JavaScript | 122 | Collapses many tool calls into one sandboxed JS block for large efficiency gains (55s → 1s on a real folder in the author's example). |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | — (+528) | An agentic skills framework plus a software development methodology intended to work end-to-end, not just as a skill collection. |
| [fuxicodex/Fuxi](https://github.com/fuxicodex/Fuxi) | Python | 3,363 | A fast, self-contained terminal coding agent with cost-aware routing across LLM providers — positions itself as a lighter alternative to heavier harnesses. |
| [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | TypeScript | 7,858 | A local multi-agent harness that runs on top of existing Claude Code/Codex subscriptions, letting a user operate an "office" of agents. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 4,102 | A persistent development workspace designed to self-improve and continue work across sessions rather than resetting each time. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 4,249 | Continual-learning infrastructure aimed at self-improving agents, distinct from one-shot task runners. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 761 | Native KiCAD 10 plugin exposing 217 schematic/layout/routing/design-review tools to Claude or another LLM — AI-assisted PCB design as a single Rust binary. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 214 | Open-source MCP server for RTL waveform debugging: reads FST/VCD/FSDB waveforms and a SystemVerilog netlist, with 34 tools for driver analysis, value tracing and pass/fail diffing. Niche but a real gap-filler for hardware engineers using AI agents. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 2,037 | Native MCP plugin for x64dbg exposing the debugger over HTTP — set breakpoints, step, read memory, and dump registers from any MCP-compatible assistant. |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | — (+745) | Lets coding agents edit videos directly, extending the browser-use project's agent-driven-tooling approach into video editing. |
| [Player-YN/BrowserKitten](https://github.com/Player-YN/BrowserKitten) | JavaScript | 2,858 | Selection-first web agent for Chrome: select an element on a live page, describe the desired outcome, and get back an editable office file. Sandboxed and bring-your-own-key. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,979 | Local-first conversational AI video editor with a multi-track timeline, Agent Skills support, and MCP integration. |
| [TNT-Likely/PanWatch](https://github.com/TNT-Likely/PanWatch) | Python | — (+175) | Self-hosted AI stock-monitoring assistant integrating a multi-agent investment decision system, covering A-share/HK/US markets with real-time monitoring and push alerts. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,393 | Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB RAM using portable C99 with no BLAS, framework, or GPU. A striking result for CPU-only inference of frontier-scale models. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,804 | Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook, making a large model practical on unified-memory-constrained Macs. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,073 | Open-source book (Chinese) deriving LLM inference and training system design quantitatively from hardware constraints and model architecture, with full text, PDF, calculators and experiments. A solid reference for engineers trying to reason about infra tradeoffs from first principles. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 929 | Shared memory across 30+ coding agents built from existing on-disk session history — no LLM, no embeddings, single local Go binary. A fix found in one agent surfaces in any other, including sessions predating install. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 720 | Git-native persistent agent memory implementing Google OKF v0.2, with sub-300µs in-memory BM25 search and an embedded MCP server. Claims an 80% reduction in token bloat with zero external databases. |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | Python | 1,371 | A 7-layer memory operating system for Hermes Agent using Qdrant for persistent memory, structured facts, and auto-curated wiki recall, runnable locally with any LLM provider. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 582 | Fully offline, encrypted agentic memory with a GUI memory map, aimed at users who want memory persistence without any cloud dependency. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 283 | A proposed "universal cross-model episodic memory standard" — a local-first, project-scoped SQLite engine intended to work across Antigravity, Claude Code, Cursor, Codex CLI, Copilot CLI, and OpenCode without cloud lock-in. |

## 3. Trend Signal Analysis

The single loudest signal today is **agent memory portability**: at least five separate projects (deja-vu, okf-agent-memory, memory-os, Compartment, engrim) are independently trying to solve the same problem — giving a coding agent persistent memory that survives across sessions and, increasingly, across *different* harnesses (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw). Several explicitly avoid embeddings and vector databases in favor of lightweight local search (BM25, disk-based session replay), suggesting a reaction against the complexity of RAG-heavy memory stacks in favor of something a developer can audit and vendor directly.

A second cluster is **MCP servers for specialized domains outside typical coding**: hardware waveform debugging (Tencent/wave-mcp), reverse engineering (x64dbg-mcp-server, open-reverselab), and PCB design (Konnect). This suggests MCP has moved past generic "fetch web page / run shell command" tools into vertical, professional tooling — a sign the protocol is maturing as a genuine integration layer rather than a demo format.

Third, **CPU/edge inference breakthroughs** stand out: a 2.78T-parameter model (Kimi K3) running on CPU in 8GB RAM, and Gemma 4 26B running in 2GB on a MacBook, both point to renewed interest in extreme quantization and portable inference following recent large open-weight releases (Kimi K3, Gemma 4).

Finally, **Chinese-market quant/trading agents** (PanWatch, tick-stock-panel, Vibe-Research, HiThink Financial-API) form a distinct, fast-growing niche — vertical AI agents wrapping A-share/HK/US market data with LLM-driven analysis, a pattern likely to keep expanding given the current interest in agentic finance tooling.

## 4. Community Hot Spots

- **Cross-harness agent memory** — deja-vu, okf-agent-memory and engrim are each trying to make agent memory a portable, vendor-neutral layer rather than a per-tool feature. Worth watching which approach (session-replay vs. BM25-on-git vs. SQLite standard) gets adopted.
- **MCP servers for professional/hardware domains** — wave-mcp, x64dbg-mcp-server, and Konnect show MCP expanding well beyond coding into EDA, RE, and chip debugging. A good place to look for tools that solve real (if niche) workflow pain.
- **Extreme-efficiency local inference** — kimi-k3-in-c and turbo-fieldfare are notable not for being production-ready but for demonstrating how far quantization and pure-CPU inference have come; useful reading even if you don't run them directly.
- **Agent tool-call batching (code-mode)** — aside-codemode's approach of replacing many discrete tool calls with one sandboxed script block is a pattern worth tracking as agent harnesses optimize for latency and cost.
- **Vertical trading/quant agents from the Chinese dev community** — PanWatch, Vibe-Research, and tick-stock-panel indicate a maturing ecosystem of self-hosted, LLM-driven investment tooling worth monitoring for patterns transferable to other verticals.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
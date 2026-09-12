# AI Open Source Trends 2026-09-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-12 11:26 UTC

---

# AI Open Source Trends Report — September 12, 2026

## 1. Finds

- **[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — Backed by an arXiv paper (2606.28344), it skips web/document parsing entirely and does retrieval directly on rendered pixels instead of extracted text. Worth trying for anyone whose RAG pipeline keeps breaking on messy HTML, PDFs, or scanned docs where text extraction is the actual bottleneck.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds shared memory across 20+ coding agents (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, etc.) purely from session history already on disk — no LLM, no embeddings. Useful for anyone who bounces between multiple agent CLIs and is tired of re-explaining the same fix in each one.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server from Red Hat's emerging-tech group that gives coding agents "blast radius" and tests-to-run analysis instead of making them read the whole repo; claims 74.7% smaller context footprint than raw code bodies. Worth a look for teams building custom agent context pipelines who want a lighter alternative to full-repo indexing.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing the Google OKF v0.2 spec, with sub-300µs in-memory BM25 search and no external database. A concrete, low-overhead answer to "how do I give my agent memory without standing up a vector DB."
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — A production code-review tool used at Alibaba's scale: deterministic pipelines plus an LLM agent for line-level comments, with a built-in multi-language ruleset (NPE, thread-safety, XSS, SQLi) and OpenAI/Anthropic compatibility. Directly useful for teams evaluating AI code review beyond generic wrappers, since it's battle-tested internally rather than a weekend demo.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Claims to run a 2.78-trillion-parameter Kimi K3 for inference on a single CPU in 8.24 GB of RAM, in portable C99 with no BLAS or GPU. The RAM figure for a model that size is an extraordinary claim (almost certainly relying on aggressive quantization/streaming rather than holding the full model in memory) — worth reading the internals before trusting the headline number, but the technique is interesting regardless.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 22,377 | Hybrid deterministic-pipeline + LLM-agent code review tool battle-tested at Alibaba's scale. Notable for combining a fixed ruleset (NPE, XSS, SQLi) with LLM commentary rather than relying on the model alone. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 14,392 | Universal provider proxy letting Codex CLI/App/SDK and Claude Code run any backend model (Gemini, Grok, DeepSeek, Ollama, etc.). Addresses the growing lock-in problem as coding-agent harnesses multiply. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,174 | CLI toolset (loop-audit, loop-init, loop-cost) for designing prompt/orchestration loops around coding agents. Positions "loop engineering" as a named discipline distinct from prompt engineering. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 7,227 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex and Gemini to make them faster and cheaper per query. Aimed at teams hitting cost/latency walls with generic agent context windows. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 1,911 | Zero-dependency MCP server giving agents blast-radius and test-impact analysis instead of full-repo reads. Backed by Red Hat's emerging-tech group with a concrete compression stat (74.7% smaller than code bodies). |
| [seakee/CPA-Manager-Plus](https://github.com/seakee/CPA-Manager-Plus) | Go | 3,377 | Self-hosted management panel and AI gateway observability dashboard tracking requests, cost, quota and account health. Useful for teams running their own CLIProxyAPI-style gateway in front of multiple LLM providers. |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Rust | 0 (+44) | A CLI purpose-built for git worktree management in parallel AI-agent workflows. A small but pointed tool for the increasingly common pattern of running several agents against the same repo simultaneously. |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | JavaScript | 0 (+216) | A regularly updated collection of extracted system prompts from Claude, ChatGPT, Gemini, Grok and others. A reference resource for prompt engineers studying how frontier labs structure their system prompts. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,872 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting you swap harnesses without rewriting workflows while enforcing sandboxing policies. Part of a growing "orchestrate the orchestrators" trend. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,306 | Local-first AI agent workspace spanning coding, writing, design, research and automation in one runtime, with both a desktop GUI and a TUI. A broad, general-purpose alternative to single-purpose agent apps. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 5,263 | Apache incubator project for a high-performance agent workspace that keeps a complete record of everything the agent did. Notable for being an ASF incubating project rather than an independent startup effort. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,832 | Self-described "harness of harnesses" — a persistent, self-evolving multi-agent ecosystem for cross-domain collaboration. Ambitious framing; worth checking maturity before adopting given the category is crowded with similar pitches. |
| [fuxicodex/Fuxi](https://github.com/fuxicodex/Fuxi) | Python | 3,405 | Self-contained terminal coding agent with cost-aware routing across LLM providers. A lighter-weight alternative for developers who want a single-binary agent without a full harness ecosystem. |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Go | 0 (+250) | Fully autonomous AI agent system for complex penetration-testing tasks. A legitimate but dual-use security-research tool — relevant for authorized pentesting/red-team workflows, not general use. |
| [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | Python | 0 (+129) | Agent and skill set purpose-built for mathematical modeling competitions, automatically producing a submission-ready paper. Narrow but concrete vertical use case rather than a general framework. |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | TypeScript | 0 (+626) | Autonomous AI trading agent spanning Polymarket, Kalshi, Binance, Hyperliquid and multiple EVM/Solana chains, built on Claude. High risk/hype territory for an unattended trading system — worth strong skepticism before running with real funds. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 6,565 | Free open-source AI office suite (Docs, Sheets, Slides, PDF) that edits real .docx/.xlsx/.pptx files and does on-device PDF-to-Word conversion. A BYOK alternative to cloud office-AI add-ons. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 8,133 | AI video skill for Claude Code/Codex with 152 shot recipe cards and 209 motion previews for producing cinematic product videos via Remotion. A concrete, template-driven approach rather than open-ended generation. |
| [Player-YN/PawWork_ZhuaZhua](https://github.com/Player-YN/PawWork_ZhuaZhua) | JavaScript | 2,587 | Selection-first Chrome web agent: select an element on a live page, describe the desired outcome, get back an editable office file. BYOK and fully sandboxed with no server component. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,773 | Local-first conversational AI video editor with a professional multi-track timeline, Agent Skills and MCP integration. Targets creators who want an agentic editor without a cloud subscription. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 806 | Desktop app organizing inspiration, characters, worldbuilding and drafting into a controllable novel-writing workflow, with Ollama and DeepSeek Harness plugin previews. A structured alternative to freeform chatbot fiction writing. |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | TypeScript | 0 (+152) | Self-hosted CRM with native AI agents and WhatsApp integration (WAHA), positioned as an open alternative to Kommo/Octadesk/Intercom. Relevant for chat-first sales teams wanting to avoid vendor lock-in. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 486 | Turns a coding agent into a video studio — describe a video in plain language and the agent writes the timeline and renders the file. Early-stage but a distinctive "agent as production tool" angle. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 0 (+237) | A long-running, well-known curated collection of 100+ AI agents, agent skills and RAG apps. Not a new find, but still the most-updated single reference list in the space. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 7,685 | Runs a 2.78-trillion-parameter Kimi K3 for CPU-only inference in a claimed 8.24 GB RAM footprint, in dependency-free C99. The RAM figure warrants scrutiny — likely relies on streaming/quantization rather than full in-memory weights — but the engineering approach to GPU-free giant-model inference is notable. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 7,139 | Billed as the first open-source "enterprise world model." Vague framing with no concrete benchmark cited here — treat as early-stage/exploratory rather than production-ready. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,711 | Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. A concrete, verifiable efficiency claim relevant to anyone running local LLMs on Apple silicon. |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | Python | 0 (+193) | YuE2, a frontier open music-generation model with symbolic planning, zero-shot covers and agentic music editing. One of the few open projects tackling long-form, structured music generation rather than short clips. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,942 | Retrieval directly on rendered pixels instead of parsed text, backed by an arXiv paper. A genuinely different architectural bet against the standard "parse-then-chunk" RAG pipeline. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 803 | Single local Go binary providing one shared memory layer across 20+ coding agents, built from existing session history with no LLM or embeddings required. Directly solves cross-tool amnesia for developers using multiple agent CLIs. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 590 | Git-native persistent memory implementing Google's OKF v0.2 spec, with sub-300µs BM25 search and an embedded MCP server, claiming an 80% token-bloat reduction. No external database or vector store needed. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 586 | Encrypted, fully offline agentic memory with a one-click installer and a GUI memory map, working across OSes and agents. Notable for prioritizing privacy/encryption over the raw-speed angle most memory tools lead with. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 314 | Free, registration-free MCP server for Taiwanese legal research covering 22.5 million court rulings and administrative interpretations, with citation checking. A well-scoped vertical RAG deployment rather than a general framework. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 239 | Local-first memory engine for AI agents using semantic embeddings, shipped as a single zero-config Rust binary that works fully offline. A minimal-dependency alternative to heavier memory frameworks. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 236 | A proposed "universal cross-model episodic memory standard" — a local, project-scoped SQLite memory engine spanning Antigravity, Claude Code, Cursor, Windsurf and Codex. Early but addresses real interoperability pain. |

## 3. Trend Signal Analysis

The clearest signal today is a cluster of **cross-agent shared memory** projects — deja-vu, okf-agent-memory, engrim, Compartment, and uteke all launched or trended within the same window, each solving the same problem from a different angle (Git-native, SQLite, encrypted, embedding-based) but converging on one complaint: developers now run five or six different coding-agent CLIs (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, Windsurf) and none of them share what they've learned. This is a second-order effect of last year's agent-CLI proliferation rather than a new capability from any single model release.

A related, larger pattern is the rise of **meta-harnesses** — omnigent, Raven, apache/maka, KunAgent, and (from the broader search set) tools like metaharness and sandbox-harness all pitch themselves as an orchestration layer that sits above individual coding-agent harnesses, letting users swap Claude Code for Codex or Cursor without rewriting workflows. The volume of near-identical pitches suggests this niche is getting crowded fast, and buyers should weigh maturity carefully.

The **Agent Skills** ecosystem (Claude's skill format) has visibly spread beyond Claude Code — description text repeatedly name-checks compatibility with Codex, Grok Build, and Antigravity, indicating the format is becoming a de facto cross-vendor standard rather than an Anthropic-only feature.

Finally, autonomous **security-agent tooling** (pentagi, Claude-Red, x64dbg-mcp-server) and **GPU-free giant-model inference** (Kimi K3 in C, Gemma on MacBook) both point to efficiency and specialization becoming differentiators now that basic agent scaffolding is commoditized.

## 4. Community Hot Spots

- **Cross-agent memory/context sharing** (deja-vu, okf-agent-memory, engrim) — the most concrete, immediately useful trend for anyone juggling multiple coding-agent CLIs day to day.
- **Meta-harnesses / "harness of harnesses"** (omnigent, Raven, apache/maka) — worth watching for consolidation as the orchestration-layer category matures; too many entrants right now to bet on one.
- **Non-text-native RAG** (PixelRAG) — a real architectural departure from parse-and-chunk pipelines, worth prototyping against document-heavy use cases where parsing is the bottleneck.
- **GPU-free inference for very large models** (Kimi K3 in C, Gemma on Mac) — verify the concrete claims (especially RAM figures) before relying on them, but the underlying local-inference-efficiency work is genuinely active.
- **Autonomous security-testing agents** (pentagi, Claude-Red) — a fast-growing, legitimately dual-use niche; useful for authorized red-team/pentest work, but adopt with the same access controls you'd apply to any offensive tooling.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
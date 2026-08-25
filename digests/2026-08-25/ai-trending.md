# AI Open Source Trends 2026-08-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-25 07:40 UTC

---

# AI Open Source Trends Report — 2026-08-25

## 1. Finds

**[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A memory layer for coding agents that indexes the session logs Claude Code, Codex, and Cursor already write to disk (including sessions from before you installed it) and recalls them across tools — no LLM calls, no embeddings, just one local Go binary. Worth trying for anyone tired of re-explaining context every time they switch between CLI agents; the "zero inference cost" design is the interesting part, not just the memory concept itself.

**[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. A concrete, verifiable efficiency claim (not a framework wrapper) that matters to anyone trying to run capable local models on consumer hardware without a dedicated GPU.

**[cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)** — Practical CLI tooling (`loop-audit`, `loop-init`, `loop-cost`) for designing and inspecting the control loops that drive coding agents, explicitly framed as a discipline distinct from prompt engineering. Useful for engineers building or debugging agent orchestration who want off-the-shelf instrumentation rather than hand-rolling it.

**[razzant/claudexor](https://github.com/razzant/claudexor)** — A control plane for people running multiple Claude/Codex subscriptions: quota-aware rotation, shared thread context, and cross-model review across Claude Code, Codex, Cursor, and OpenCode. Practically useful for power users hitting rate limits across accounts, though it's early (423 stars) and worth watching for maintenance activity before relying on it.

**[microsoft/SkillOpt](https://github.com/microsoft/SkillOpt)** — A text-space optimizer that improves reusable natural-language "skills" for frozen LLM agents through trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts. Interesting for teams maintaining large skill libraries (Claude Skills, agent-skills marketplaces) who want an automated way to iterate on skill quality instead of hand-editing.

**[oleksiijko/pmb](https://github.com/pmb)** *(oleksiijko/pmb)* — Local-first persistent memory for coding agents over MCP: decisions, lessons, and facts stored in a single SQLite file, offline and multilingual. Small (297 stars) but a clean, minimal take on the same "agent memory" problem several other projects are tackling today — worth comparing against deja-vu and Compartment before picking one.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex](https://github.com/openai/codex) | Rust | (+1,994) | Lightweight terminal coding agent from OpenAI; today's largest single-day gain in the dataset, signaling renewed attention after a release or feature push. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 16,510 | A 20 MB cross-platform database client for 90+ databases with a built-in AI assistant and MCP server, spanning desktop, Docker, and CLI. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,319 | Runs Gemma 4 26B-A4B in ~2 GB RAM on Apple Silicon — a concrete on-device inference efficiency result rather than a wrapper library. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 12,050 | Universal provider proxy that lets Codex CLI/App/SDK and Claude Code run against any backend LLM (Gemini, Grok, DeepSeek, Ollama, etc.). |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | TypeScript | (+174) | Unified `/v1` endpoint routing across 34 free LLM providers and 635 model endpoints, with smart routing and automatic failover. |
| [google-antigravity/antigravity-sdk-python](https://github.com/google-antigravity/antigravity-sdk-python) | Python | 3,166 | Python SDK for building agents on Google's Antigravity platform. |
| [Cmochance/codex-app-transfer](https://github.com/Cmochance/codex-app-transfer) | Rust | 302 | Local gateway that translates Codex CLI's Responses API into Chat Completions, letting Kimi/DeepSeek/Zhipu GLM/Bailian act as drop-in backends. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | (+896) | New agent framework from NousResearch, pitched as "the agent that grows with you" — a notable new entrant from a well-known model lab. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,251 | Meta-harness for orchestrating Claude Code, Codex, Cursor, and Pi under one policy/sandboxing layer without rewriting agent logic per tool. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 3,048 (+411) | Apache Incubating local-first agent workspace that records every tool call, permission decision, and termination event as an append-only log — notable for landing inside the ASF. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 610 | Scaffolding tool for building your own branded agent harness (CLI, MCP server, memory, learning loop) on top of Claude Code, Codex, Hermes, or OpenClaw. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 423 | Quota-aware control plane for rotating across multiple Claude/Codex subscriptions with shared context and cross-model review. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 633 | Local-first agent runtime with sandboxed sessions, credentials, and audit/replay, supporting OpenAI, Anthropic, MiniMax, and DeepSeek V4. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,242 | Local-first agent workspace covering coding, writing, design, research, and automation in one desktop/TUI runtime. |
| [agentlas-ai/Agentlas-OS](https://github.com/agentlas-ai/Agentlas-OS) | Python | 1,144 | "Agent OS" that keeps specialist agents in a hub and spins up a temporary orchestrator per task, model-agnostic. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | Python | (+434) | Job-search automation built on Claude Code — evaluates postings, tailors CVs, writes cover letters, and preps interviews, fork-and-own style. |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | (+310) | Self-organizing AI "second brain" for Obsidian that files any dropped source into a connected Markdown knowledge graph via Claude Code. |
| [simonlin1212/a-stock-data](https://github.com/simonlin1212/a-stock-data) | — | 9,201 | Full-stack China A-share data toolkit purpose-built for AI agents — 11 layers, 54 endpoints, 19 data sources, zero-auth. |
| [simonlin1212/TradingAgents-astock](https://github.com/simonlin1212/TradingAgents-astock) | Python | 3,071 | Multi-agent China A-share research framework with 7 analyst personas debating bull/bear cases before a risk-assessed decision. |
| [powerycy/goutoujunshi](https://github.com/powerycy/goutoujunshi) | Python | 2,419 | Codex-based "relationship strategist" agent combining psychology, legal, and sociology knowledge bases before giving actionable advice. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,031 | AI equity-research agent with resilient workflows, evidence-grounded RAG, versioned reports, and automated quality evaluation. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 448 | Novel-writing software that organizes inspiration, characters, worldbuilding, and drafting into a controllable pipeline, with desktop apps and Ollama support. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 712 | Cross-tool memory for coding agents that indexes existing session logs with no LLM or embeddings required — a single local Go binary. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 799 | Local, free memory engine that works across Cursor, Claude Code, Codex, OpenClaw, and Hermes, remembering how you work over time. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 589 | Encrypted, fully offline agentic memory with a one-click GUI and visual memory map, across OS and agents. |
| [serradura/okf](https://github.com/serradura/okf) | Ruby | 136 | Open Knowledge Format — portable, structured memory bundles for agents authored/validated through Skills, MCP, a graph, TUI, CLI, and a Claude Code plugin, 100% local. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 299 | Free, registration-less Taiwan legal MCP server/RAG over 22.5 million court rulings and administrative interpretations, with citation checking. |
| [oleksiijko/pmb](https://github.com/oleksiijko/pmb) | Python | 297 | Local-first persistent memory for coding agents over MCP — decisions, lessons, and facts stored in one SQLite file, offline and multilingual. |
| [mindscale-noah/MindMemOS](https://github.com/mindscale-noah/MindMemOS) | Python | 950 | Memory-oriented project tagged under RAG; no description provided, worth verifying scope before adopting. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 408 | Converts documents, including scanned PDFs, into clean AI-ready Markdown locally and offline, using far fewer tokens than vision-model approaches. |

*(No projects in the dataset were clearly primary examples of LLMs/Training — model weights, pretraining, or fine-tuning frameworks — so that category is omitted today.)*

---

## 3. Trend Signal Analysis

Today's clearest signal is a sudden cluster of **agent memory/persistence tools** launching almost simultaneously: deja-vu, pmb, Compartment, iai-personal-memory-engine, okf, and MindMemOS all address the same gap — coding agents (Claude Code, Codex, Cursor, OpenClaw, Hermes) losing context across sessions and tools. Several explicitly avoid LLM calls or embeddings for cost and privacy reasons, suggesting the community has moved past "memory via vector DB" as the default and is experimenting with lighter, local-only designs.

A second theme is **multi-harness orchestration**: omnigent, metaharness, sandbase-harness, claudexor, and Agentlas-OS all build a control-plane layer over Claude Code, Codex, Cursor, and other CLIs rather than being yet another standalone agent. This reads as a response to fragmentation — developers now juggle several coding-agent subscriptions and want quota management, shared context, and policy enforcement across them instead of committing to one tool.

New vocabulary is also emerging: `loop-engineering` formalizes agent control-loop design as its own discipline with dedicated tooling (`loop-audit`, `loop-cost`), distinct from prompt engineering.

On the infrastructure side, turbo-fieldfare's Gemma 4 26B-A4B running in ~2 GB RAM on Apple Silicon is a concrete efficient-inference result, part of a broader push toward capable local models on consumer hardware without discrete GPUs.

Finally, there's a notable vertical cluster from the Chinese developer community building multi-agent **China A-share trading/research systems** (simonlin1212's three repos, tick-stock-panel, free-stockdb, CNEquity) — a fast-growing, domain-specific application of agent frameworks to personal quantitative investing.

---

## 4. Community Hot Spots

- **Lightweight, LLM-free agent memory** — deja-vu and pmb both explicitly skip embeddings/LLM calls for session recall, a reaction to the cost and latency of heavier RAG-based memory systems.
- **Multi-harness control planes** — claudexor, metaharness, and omnigent all target developers running several coding-agent subscriptions simultaneously; worth watching which one develops real traction versus overlapping niches.
- **On-device inference efficiency** — turbo-fieldfare's 2 GB Gemma inference is a hard technical result worth verifying and reusing if you run local models on Macs.
- **Vertical trading-agent stack in China** — a-stock-data, TradingAgents-astock, and tick-stock-panel form a mini-ecosystem for LLM-driven A-share research; interesting even for non-finance engineers as a template for building domain-specific multi-agent research pipelines.
- **"Loop engineering" as a named discipline** — loop-engineering's tooling suggests agent orchestration patterns are getting productized rather than staying ad hoc.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
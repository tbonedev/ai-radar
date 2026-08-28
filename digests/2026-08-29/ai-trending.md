# AI Open Source Trends 2026-08-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-28 19:12 UTC

---

# AI Open Source Trends Report — August 29, 2026

## 1. Finds

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — An official MCP server exposing Chrome DevTools (console, network, DOM, performance tracing) to coding agents. Anyone building or using an agent that needs to actually debug a live web page — not just read source — should wire this in; it's notable because it comes from the Chrome DevTools team itself, not a third party.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Indexes the session history that Claude Code, Codex, Cursor, and 17 other agent tools already write to disk (including months of history from before you installed it) and makes it searchable across all of them — no LLM calls, no embeddings, single local Go binary. Useful for anyone hopping between multiple coding agents who wants "did I already solve this?" recall without standing up a service.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs the 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB of RAM, written in dependency-free, portable C99 (no BLAS, no framework, no GPU). More an engineering demo than a production tool, but a genuinely instructive from-scratch look at memory-efficient MoE inference.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Gets Gemma 4 26B-A4B inference running in ~2 GB of RAM on any M-series MacBook. Worth a look for developers who want to run a larger local model on ordinary consumer hardware rather than a GPU box.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A desktop app that records your on-screen work session and uses the GitHub Copilot CLI to reconstruct it into an intent + ordered steps, then packages it as a reusable Skill/Automation for Copilot Studio or Microsoft Scout. Interesting because it authors agent skills by demonstration instead of by hand-writing a skill file — worth watching for teams building internal automation libraries.
- **Caution flag**: several highly-starred "meta-harness" / "harness of harnesses" projects this cycle (`omnigent-ai/omnigent`, `EverMind-AI/Raven`, `ruvnet/metaharness`, `opensquilla/opensquilla`) describe themselves in near-identical buzzword language ("self-evolving," "orchestrate any harness," "token-efficient") with thin technical detail and star counts that look disproportionate to account/repo age. Treat these as unverified until you see real usage, not as findings on their own.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+61) | Official Chrome DevTools MCP server, giving coding agents direct access to browser console, network, and DOM debugging. Notable for being vendor-official rather than a community reimplementation. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 6,669 | A 2.78T-parameter Kimi K3 model running inference on a single CPU in 8.24 GB RAM, pure C99 with zero dependencies. A striking demonstration of low-level MoE inference efficiency. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,449 | Gemma 4 26B-A4B inference in ~2 GB RAM on M-series MacBooks. Makes a mid-size open model practical on consumer laptop hardware. |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | TypeScript | 0 (+477) | Aggregates 34 free LLM providers and 635 free model endpoints behind one OpenAI-compatible `/v1` endpoint with smart routing and failover. Explicitly scoped for personal experimentation, not production. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 734 | Cross-tool search over AI coding session history (Claude Code, Codex, Cursor, +17 more) using no LLM or embeddings — a single local binary indexing files already on disk. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 424 | Multi-harness control plane for Claude Code, Codex, Cursor, and OpenCode with quota-aware rotation across subscriptions and cross-model review. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 934 | Minimal MCP server that gives any AI agent code-execution capability. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,385 | Auth gateway connecting 1,000+ SaaS providers to agents via SDK, CLI, MCP, HTTP, and OpenAPI. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [livekit/agents](https://github.com/livekit/agents) | Python | 0 (+14) | Framework for building realtime voice AI agents. From LiveKit, an established real-time media infra company, so it has production backing behind it. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,438 | Meta-harness claiming to orchestrate Claude Code, Codex, Cursor, and Pi under one policy/sandboxing layer. Vague marketing language — verify before adopting. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,266 | Local-first agent workspace for coding, writing, design, research, and automation with both GUI and TUI runtimes. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 3,877 | Apache-incubating local-first agent workspace that logs messages, tool calls, results, and permission decisions as an append-only audit log — useful if auditability matters. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 3,351 | Persistent development workspace that self-improves and carries context across sessions rather than resetting each run. |
| [riponcm/projectmem](https://github.com/riponcm/projectmem) | Python | 772 | Local MCP server that records issues, attempts, and fixes, then warns the agent before it repeats a previously-failed approach. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,623 | Records an on-screen work session and reconstructs it into a reusable Skill/Automation via the GitHub Copilot CLI. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 635 | Local-first agent runtime with sandboxed sessions, credentials, and audit/replay across OpenAI, Anthropic, MiniMax, and DeepSeek V4 models. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | Python | 0 (+309) | Converts a UI screenshot into HTML/Tailwind/React/Vue code. A well-established, widely-used pattern rather than a new idea, but still gaining daily traction. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 0 (+1,144) | Open-source agentic video production system with 12 pipelines, 100+ tools, and 700+ agent-skill/production-knowledge files layered on top of a coding assistant. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 524 | Lets a coding agent write a video timeline from a plain-language description and render the output file. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,432 | Local-first conversational AI video editor with a full multi-track timeline, Agent Skills, and MCP integration. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 484 | Organizes inspiration, characters, worldbuilding, drafting, and revision into a controllable AI-assisted novel-writing pipeline, with desktop apps and Ollama support. |
| [HiThink-Tech/Financial-API](https://github.com/HiThink-Tech/Financial-API) | TypeScript | 1,970 | Official Chinese A-share market data service (real-time quotes, financials, indices) exposed via API, MCP, CLI, and Python, aimed at AI-agent-driven quant research. |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 3,904 | Self-hosted, zero-ops A-share stock-picking/monitoring/backtesting workbench with LLM-driven strategy customization. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [marin-community/marin](https://github.com/marin-community/marin) | Python | 0 (+236) | Open research framework for building and training foundation models from scratch, aimed at reproducible foundation-model R&D rather than fine-tuning existing checkpoints. |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,440 | A text-space optimizer that trains reusable natural-language "skills" for frozen LLM agents through trajectory-driven edits and validation-gated updates, outputting deployable `best_skill.md` artifacts — an interesting alternative to weight fine-tuning for agent improvement. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 6,669 | (See Finds) From-scratch CPU inference of the full 2.78T-parameter Kimi K3 model in under 9 GB RAM. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,449 | (See Finds) Gemma 4 26B-A4B inference in ~2 GB RAM on Apple Silicon. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | TypeScript | 0 (+189) | Zero-server, client-side knowledge-graph builder that runs entirely in the browser, turning a git repo or ZIP into an interactive graph with a built-in Graph RAG agent for code exploration. |
| [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Jupyter Notebook | 937 | 30 runnable notebooks covering conversation buffers, vector stores, knowledge graphs, episodic/semantic memory, MemGPT, Mem0, Letta, Zep, Graphiti, and LoCoMo benchmarks — a solid hands-on reference for agent memory design. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 816 | Local, free "cyber brain" memory layer for agents that recalls prior conversation detail across Cursor, Claude Code, Codex, and others. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 475 | Turns local files into searchable context for AI agents. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 411 | Local-first desktop app that turns any document, including scanned PDFs, into clean AI-ready Markdown offline, using far fewer tokens than vision-model-based OCR pipelines. |
| [Patdolitse/piia-engram](https://github.com/Patdolitse/piia-engram) | Python | 157 | Local-first, inspectable/editable AI memory portable across Claude Code, Codex, Cursor, Windsurf, and other MCP tools. |

## 3. Trend Signal Analysis

Today's clearest signal is the consolidation of **agent memory and cross-session recall** into its own tooling category: `deja-vu`, `projectmem`, `iai-personal-memory-engine`, `piia-engram`, and `stashbase` all attack the same problem — an agent forgetting everything between sessions — with different tradeoffs (embeddings vs. no-LLM indexing, local-only vs. encrypted, single-tool vs. cross-tool). This is a maturing pattern, not a single breakout project.

A second signal is **skills-as-artifacts** tooling moving past hand-authored Markdown: `microsoft/SkillOpt` trains skills via trajectory-driven optimization, and `microsoft/skill-recorder` derives them from screen recordings. Both treat "skill" as a first-class, programmatically-produced object rather than a prompt someone wrote once — a natural next step now that Agent Skills (Anthropic's standard, echoed across Codex/Cursor/Pi in these descriptions) has become a common interoperability layer.

Third, **efficient local inference of very large models** had two standout entries — Kimi K3 (2.78T params) on a CPU in under 9 GB, and Gemma 4 26B on 2 GB of Mac RAM — both likely riding the recent Kimi K3 and Gemma 4 releases. These are less about production deployment and more a signal that the community is racing to make frontier-scale models runnable on ordinary hardware.

Finally, **official vendor MCP servers** (Chrome DevTools) suggest MCP is graduating from a community protocol experiment to something platform teams ship themselves, alongside a large volume of third-party MCP servers for narrower domains (debugging, finance data, product comparison).

## 4. Community Hot Spots

- **Cross-tool agent session memory** (`deja-vu`, `projectmem`, `piia-engram`) — worth watching as a converging subcategory rather than picking a single winner yet.
- **Vendor-official MCP servers** (`chrome-devtools-mcp`) — a sign the protocol is moving from grassroots to platform-endorsed.
- **CPU/consumer-hardware inference of huge models** (`kimi-k3-in-c`, `turbo-fieldfare`) — good reading for anyone interested in quantization and memory-efficient MoE execution, even if not production-ready.
- **Skill authoring by optimization or recording rather than hand-writing** (`SkillOpt`, `skill-recorder`) — an early but genuinely new direction for agent tooling.
- **Skepticism warranted**: the "meta-harness" naming trend (`omnigent`, `Raven`, `metaharness`, `opensquilla`) is producing a lot of similar-sounding, thinly-documented projects with large star counts — worth checking actual usage evidence before investing time.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
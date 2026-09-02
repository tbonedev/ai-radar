# AI Open Source Trends 2026-09-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-02 11:55 UTC

---

# AI Open Source Trends Report — September 2, 2026

## 1. Finds

- **[duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server)** — A native MCP plugin for the x64dbg Windows debugger, written in Zig as a single dependency-free binary, that exposes breakpoints, stepping, memory reads and register dumps over HTTP. Reverse engineers and security researchers doing authorized binary/malware analysis get a way to drive x64dbg from Claude or any MCP client instead of clicking through the GUI.

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Indexes the session history that Claude Code, Codex, Cursor and 17 other coding agents already write to local disk (even sessions from before it was installed) and makes it searchable with no LLM calls, no embeddings — just one local Go binary. Useful for anyone who wants to recall "what did I ask the agent about X three weeks ago" without re-running anything or paying for a vector index.

- **[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — Proposes replacing text-extraction/chunking RAG pipelines with "pixel-native" search: rendered pages are retrieved as images rather than parsed into text, backed by an arXiv paper. Worth a look for RAG engineers tired of brittle HTML/PDF parsing, but it's early research code — treat the claims as unverified until reproduced independently.

- **[riponcm/projectmem](https://github.com/riponcm/projectmem)** — A local, no-cloud MCP memory server that logs an agent's past issues, fix attempts and decisions, then warns it before it retries an approach that already failed on this codebase. Useful for teams running long agent sessions on the same repo who are tired of watching an agent re-attempt a fix it already tried.

- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4's 26B-parameter MoE model in roughly 2GB of RAM on any Apple M-series MacBook, a striking memory-efficiency result for local LLM inference. Relevant if you want frontier-adjacent model quality on a laptop without a dedicated GPU — worth checking the actual throughput/quality trade-off before relying on it in production.

- **[Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit)** — Gives text-only LLM agents image Q&A, long-screenshot OCR, and frontend/GUI-restoration capability, with plugins for Codex, Claude Code, Pi and OpenCode. Useful for teams standardized on a cheaper text-only model that occasionally need "look at this screenshot" capability without switching models entirely.

A caution: a few high-star entries this cycle (e.g. `NousResearch/hermes-agent` — "the agent that grows with you", `makecindy/cindy` — "consider it done") ship taglines with no concrete technical description in the trending data. Treat these as unverified until you can see what they actually do.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [google-research/timesfm](https://github.com/google-research/timesfm) | Python | 0 (+326) | Google Research's pretrained time-series foundation model for forecasting. Strong same-day gain suggests renewed interest in non-LLM foundation models for structured/tabular data. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+140) | Official-looking Chrome DevTools MCP server exposing browser debugging to coding agents. From the ChromeDevTools org itself, so likely to become a de facto standard for agent-driven browser debugging. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0 (+541) | Fast Rust PDF inspector that classifies scanned vs. text-based PDFs to route documents intelligently before extraction. From the Firecrawl team, useful as a pre-processing step in RAG/document pipelines. |
| [superlinked/sie](https://github.com/superlinked/sie) | Python | 0 (+61) | Open-source inference server and production cluster for the models an agent needs. Positions itself as self-hosted infra for teams that don't want to depend on hosted inference APIs. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 5,409 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex and Gemini, aiming to make agents faster and cheaper by reducing wasted context. |
| [microsoft/flint-chart](https://github.com/microsoft/flint-chart) | TypeScript | 4,101 | A visualization spec language designed so agents can reliably generate good-looking charts from simple, human-editable specs — addresses the common failure mode of LLM-generated charting code. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,496 | Open-source auth gateway connecting 1000+ SaaS providers to agents via SDK, CLI, MCP, HTTP and OpenAPI — infrastructure for the "agent needs to call your SaaS tools" problem. |
| [deer-flow/llm-space](https://github.com/deer-flow/llm-space) | TypeScript | 1,773 | Local-first desktop app to prototype agent ideas, inspect every harness step, replay failures and evaluate performance — an observability/debugging tool for agent builders. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,612 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor and custom agents interchangeably, with policy enforcement and sandboxing. Reflects a growing push to treat the specific agent CLI as a swappable backend. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,271 | Local-first agent workspace for coding, writing, design, research and automation, spanning both desktop GUI and TUI in one runtime. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 4,513 | A local-first agent workspace now incubating at Apache, recording every model message, tool call, and permission decision as an append-only audit log — notable for bringing agent-workspace tooling under a foundation. |
| [pacifio/atlas](https://github.com/pacifio/atlas) | Rust | 2,636 (+895) | "Source control for agents" — track and query the changes made by multiple concurrent coding agents from one place. Strong same-day momentum on top of an already sizable star count. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 641 | Self-hosted AI agent runtime and MCP bridge with sandboxed sessions, memory, credential handling, and audit/replay — infra-grade hardening for running agents unattended. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 429 | Multi-harness control plane offering quota-aware rotation across multiple Claude/Codex subscriptions plus cross-model review — a practical fix for hitting per-account rate limits. |
| [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness) | Python | 1,394 | Self-learning skill layer for Claude Code that distills skills from real usage sessions, updates them as you work, and prunes ones that stop being used — no daemon or benchmark required. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 0 (+529) | From Nous Research, a lab known for the Hermes model family; the "agent that grows with you" tagline is vague, but the pedigree and same-day momentum make it worth watching once more detail surfaces. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) | Python | 14,970 | Rebuilds an object from a reference image as a code-only, procedural, quality-gated Three.js model rather than a raw mesh export — a token-efficient take on image-to-3D. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 4,333 | Free, open-source Office alternative (Word/Excel/PowerPoint/PDF/Markdown) with built-in AI agents, cross-platform for macOS, Windows and Linux. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 7,070 | AI video-production skill for Claude Code/Codex built on Remotion, shipping 152 shot-recipe cards and 209 motion previews for cinematic product videos. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,535 | Local-first, open-source conversational AI video editor with a professional multi-track timeline, Agent Skills and MCP integration. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 0 (+349) | Turns documents or topics into native PowerPoint decks with real shapes, transitions, data-backed charts and narrated speaker notes — strong same-day momentum. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 414 | Local-first desktop app that turns scanned PDFs and document folders into clean, AI-ready Markdown offline, using far fewer tokens than vision-model-based extraction. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,620 | A text-space optimizer from Microsoft that trains reusable natural-language skills for *frozen* LLM agents via trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts — programmatic skill authoring instead of hand-written skill files. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,555 | Runs Gemma 4's 26B-A4B MoE model in ~2GB RAM on M-series MacBooks — a notable efficiency result for local inference of a large, sparsely-activated model. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,846 | Proposes "pixel-native" search — retrieving from rendered page images instead of parsed text — as a replacement for conventional web-parsing RAG pipelines, backed by an arXiv paper. Early-stage but a genuinely different technical direction. |
| [riponcm/projectmem](https://github.com/riponcm/projectmem) | Python | 794 | Local, MIT-licensed agent memory that logs issues, attempts, fixes and decisions, then warns the agent before it repeats a failed approach — native MCP server for Claude Code, Cursor and Codex. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 758 | Indexes session history already written to disk by 20+ coding agents and makes it searchable with no LLM or embeddings — a single local Go binary. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 834 | Free, local persistent memory engine that works across Cursor, Claude Code, Codex, OpenClaw and Hermes, learning how you work over time. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 526 | Turns local files into searchable context for AI agents — a lightweight, self-hosted alternative to standing up a full vector database for small document sets. |
| [calmrocks/ai-engineer-notebooks](https://github.com/calmrocks/ai-engineer-notebooks) | Jupyter Notebook | 586 | Framework-free Colab notebooks covering model APIs, structured output, tool calling, RAG, evals, agents-from-scratch, fine-tuning vs. LoRA and prompt-injection security — runs on the free Groq API, useful as a practical teaching reference. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 393 | A 12-phase research skill for Claude Code combining parallel sub-agent search, claims-ledger triangulation, red-teaming and four-layer citation verification against 1,072 verified endpoints. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 305 | Free, no-registration Taiwan legal MCP server covering 22.5M court rulings and administrative interpretations, retrieval-only (bring your own LLM), with citation checking. |

## 3. Trend Signal Analysis

The single clearest pattern today is the emergence of an **agent memory/session-persistence layer as its own mini-ecosystem**: `deja-vu`, `projectmem`, `iai-personal-memory-engine`, `Compartment` and `stashbase` all attack the same gap — Claude Code, Codex and Cursor don't natively remember anything across sessions, so a wave of independent local-first MCP servers are filling that hole. None of the major harness vendors have shipped this themselves, leaving room for a de facto standard to emerge from the community.

A second, related trend is **meta-harness / multi-harness orchestration** (`omnigent`, `metaharness`, `claudexor`, `munder-difflin`), which treats the specific agent CLI as an interchangeable backend and adds quota rotation, shared context, or cross-model review on top. This signals that the "harness" layer (Claude Code vs. Codex vs. Cursor) is being commoditized faster than expected, with value migrating up to orchestration and down to memory/skills.

Third, **Agent Skills is maturing into a genuine cross-product plugin format** rather than a Claude-only feature — Microsoft's `SkillOpt` trains skills programmatically via trajectory-driven edits, and `autoharness` distills and prunes skills from real usage, both moving skill-authoring from manual markdown files to automated pipelines.

Fourth, **MCP is reaching into specialist domains** well outside typical dev/chat use — a debugger (`x64dbg-mcp-server`), PCB design (`Konnect`), and OSINT (`OpenOSINT`) — suggesting MCP's adoption curve is now past general coding tools. Efficient local inference (`turbo-fieldfare` on Gemma 4) also points to continued demand for consumer-hardware-runnable models following recent open-weight releases.

## 4. Community Hot Spots

- **Agent memory as an emerging standard** — `deja-vu`, `projectmem`, `iai-personal-memory-engine`, `Compartment` and `stashbase` are all independently solving "agents forget between sessions"; worth watching for consolidation or a de facto MCP memory spec.
- **Meta-harness orchestration** (`omnigent`, `metaharness`, `claudexor`) — treating Claude Code/Codex/Cursor as swappable backends is becoming a distinct product category, not just a convenience script.
- **MCP moving into specialist/security tooling** (`x64dbg-mcp-server`, `Konnect`, `OpenOSINT`) — a sign MCP adoption has moved past general-purpose coding assistants into niche professional tools.
- **Programmatic skill authoring** (`SkillOpt`, `autoharness`) — skills generated/optimized from real usage data rather than hand-written, a meaningful shift in how the Agent Skills ecosystem will scale.
- **A large, largely separate China A-share/quant-trading agent wave** (`simonlin1212`'s data toolkits, `TradingAgents-astock`, `tick-stock-panel`, `FinSight-AI`) — worth a dedicated look if fintech/quant applications are relevant, as it's evolving mostly independent of the western agent-tooling conversation.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
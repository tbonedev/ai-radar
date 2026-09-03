# AI Open Source Trends 2026-09-03

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-03 11:53 UTC

---

# AI Open Source Trends Report — 2026-09-03

## 1. Finds

- **[google-research/timesfm](https://github.com/google-research/timesfm)** — A pretrained time-series foundation model from Google Research for forecasting. This is a genuine research asset, not agent tooling; useful for anyone building forecasting pipelines (demand, capacity, finance) who wants a strong zero/few-shot baseline instead of training from scratch.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Builds coding-agent "memory" purely from session logs already sitting on disk (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, and 17 others), with no LLM calls and no embeddings — a single local Go binary that searches months of past sessions. Worth a look for anyone frustrated by RAG-heavy memory tools that add latency and cost for a problem that's really just full-text search.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. A concrete, verifiable efficiency claim (not just "fast") that's directly useful to anyone doing local inference on consumer hardware.
- **[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — Proposes pixel-native retrieval instead of parsing documents into text/HTML first, backed by an arXiv paper (2606.28344). Interesting for RAG builders tired of brittle web/PDF parsing pipelines, though it's early and the "end of web parsing" framing is more ambitious than proven at this star count.
- **[mixelpixx/Konnect](https://github.com/mixelpixx/Konnect)** — A native Rust plugin for KiCad 10 that exposes 217 schematic/layout/routing/manufacturing tools to an LLM for AI-assisted PCB design. A genuinely novel vertical (hardware design, not another coding assistant) for hardware engineers experimenting with LLM-assisted workflows.
- **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** — A prompt/skill aimed at making coding agents write less code by defaulting to restraint ("the best code is the code you never wrote"). Gained +1,354 stars in a single day off a catchy premise, but it's a brand-new repo with zero cumulative stars and no track record yet — treat the overnight spike as hype signal, not validation, until the approach is tested on real codebases.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 13,136 | A universal provider proxy that lets OpenAI Codex and Claude Code CLI/App/SDK talk to any backend model (Gemini, Grok, DeepSeek, Ollama). Useful for teams standardizing on one harness UI while shopping around on model cost/quality. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,597 | Runs Gemma 4 26B-A4B in ~2 GB RAM on M-series Macs. A concrete on-device inference efficiency win worth tracking for local-LLM workflows. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,524 | An open-source auth gateway connecting 1000+ SaaS providers to AI agents via SDK, CLI, MCP, HTTP and OpenAPI. Solves the "every agent needs its own OAuth plumbing" problem for integration-heavy agent builders. |
| [butterbase-ai/butterbase](https://github.com/butterbase-ai/butterbase) | TypeScript | 3,386 | An open-source backend-as-a-service (Postgres, auth, storage, functions) with a built-in AI gateway and MCP support. Aimed at teams that want a Supabase-style backend already wired for agent tool-calling. |
| [seakee/CPA-Manager-Plus](https://github.com/seakee/CPA-Manager-Plus) | Go | 3,145 | A self-hosted management panel and observability dashboard for CLIProxyAPI-based AI gateways — tracks usage, cost, quota, and account health. Useful for teams running multiple LLM subscriptions/proxies who need visibility. |
| [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | TypeScript | 0 (+130 today) | An open-source inference server that runs the best local model for your hardware and plugs into existing agents (Pi, OpenCode, Codex, Claude Code, etc). Lowers the barrier to swapping in local models without reconfiguring each harness. |
| [modelstudioai/cli](https://github.com/modelstudioai/cli) | TypeScript | 320 | The official CLI for Alibaba Cloud's Model Studio (百炼), exposing models, search, and multimodal capabilities as structured tool calls for agent frameworks. Relevant for teams building on Alibaba's model ecosystem. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,642 | An open-source agent framework/meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents behind one interface, with policy enforcement and sandboxing. For teams that don't want to commit to a single agent CLI. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,273 | A local-first AI agent workspace for coding, writing, design, research and automation, running as both a desktop GUI and TUI from one runtime. Targets users who want one persistent agent environment across task types. |
| [apache/maka](https://github.com/apache/maka) (Incubating) | TypeScript | 4,612 | A local-first agent workspace that records every model message, tool call, result, permission decision and termination event as an append-only log. Notable for landing under the Apache Incubator umbrella, giving agent auditability an institutional backer. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 4,023 | Open-source AI "coworkers" that each get their own browser/files/tools, with actions decided before execution and recorded after, built on AG-UI. Aimed at teams wanting auditable, sandboxed autonomous agents rather than black-box execution. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 0 (+533 today) | A new agent framework from NousResearch ("the agent that grows with you"), trending alongside a dedicated Windows desktop client (Hermes-CN-Desktop). Worth watching as a signal of NousResearch expanding beyond model releases into agent tooling. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+460 today) | An agentic skills framework paired with a software development methodology, rather than just a loose skill collection. Aimed at teams wanting a more opinionated, structured approach to agent skills. |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+277 today) | Anthropic's own public repository for Agent Skills — the reference implementation driving the broader skills ecosystem trend. Worth tracking as the de facto standard others build against. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 4,682 | A free, open-source Microsoft Office alternative (Word/Excel/PowerPoint/PDF/Markdown) with AI agents built into editing, for macOS/Windows/Linux. A concrete productivity-suite play rather than another chat wrapper. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,801 | Records an on-screen work session, then uses GitHub Copilot CLI to reconstruct it into an intent + ordered steps, producing a reusable Skill or Automation for Microsoft Scout/Copilot Cowork/Copilot Studio. A practical answer to "how do I turn what I just did into a reusable skill." |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,553 | A local-first, open-source conversational AI video editor with a professional multi-track timeline, Agent Skills and MCP integration. Targets creators who want AI-assisted editing without cloud lock-in. |
| [simonlin1212/Vibe-Research](https://github.com/simonlin1212/Vibe-Research) | TypeScript | 2,330 | A personal trading research agent for A-share/US/HK stocks built on an open-source Codex harness, covering daily reviews, news, positions and backtesting. Part of a visible cluster of China-market quant-agent tools from the same author. |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 0 (+832 today) | A fully local, open-source ElevenLabs alternative: voice cloning, voice design, video dubbing, dictation and audiobook creation across 646 languages. Notable for the breadth of languages claimed and for being fully local rather than API-dependent. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 387 | A native KiCad 10 plugin exposing 217 PCB design tools (schematic, layout, routing, manufacturing) to an LLM. A rare AI-application entry into hardware/EDA tooling. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,658 | A text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts. Notable for treating skill authoring itself as an optimization problem rather than manual prompt engineering. |
| [google-research/timesfm](https://github.com/google-research/timesfm) | Python | 0 (+343 today) | Google Research's pretrained time-series foundation model for forecasting. A rare non-agent, non-LLM-wrapper research release in today's list — genuinely new modeling capability rather than tooling. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,859 | Proposes pixel-native retrieval as a replacement for text-parsing-based RAG pipelines, backed by an arXiv paper. Worth watching if document-parsing brittleness is a recurring pain point in your RAG stack. |
| [riponcm/projectmem](https://github.com/riponcm/projectmem) | Python | 795 | Open-source coding-agent memory that records issues, attempts, fixes and decisions, then warns the agent before it repeats a failed approach. A native MCP server for Claude Code, Cursor, Antigravity and Codex, fully local with no telemetry. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 764 | Memory for coding agents built entirely from existing on-disk session history, with no LLM calls or embeddings — one local Go binary searching months of past sessions across 20+ agents. A lightweight counter-example to embedding-heavy memory systems. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 590 | Encrypted, fully offline agentic memory with a one-click install and a GUI memory map, working across OS and agents. Targets users prioritizing privacy over cloud-synced agent memory. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 538 | Turns local files into searchable context for AI agents. A small, focused utility for grounding agents in a local document set without standing up a full vector database. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 416 | A local-first desktop app that turns any document (including scanned PDFs) into clean, AI-ready Markdown, batching folders offline and using far fewer tokens than vision-model-based extraction. Useful as a cheap preprocessing step before feeding documents to an LLM. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 393 | A Claude Code skill implementing a 12-phase research pipeline with a claims-ledger, multi-angle red-teaming and four-layer citation verification across 47 APIs. Aimed at users who need rigorously sourced research output rather than a single-pass web search summary. |

## 3. Trend Signal Analysis

The dominant signal today is the **Agent Skills ecosystem going mainstream**. Beyond Anthropic's own `anthropics/skills` (+277 today), the trending and topic lists are saturated with skill packages, skill *meta-tools*, and skill infrastructure: `mattpocock/skills` (+1,166), `addyosmani/agent-skills` (+280), `Imbad0202/academic-research-skills` (+799), `obra/superpowers` (+460), plus Microsoft shipping both a skill *optimizer* (`SkillOpt`, 16.6k stars) and a skill *recorder* (`skill-recorder`, 3.8k stars). This suggests the ecosystem has moved past "write your own skill" into tooling for authoring, optimizing, and auto-generating skills — a second-order market forming around a format that's barely a year old.

A related thread is the rise of **"harness" as the unit of abstraction**: `opencodex` (proxy across Codex/Claude Code), `metaharness` (scaffold your own branded harness), `claudexor` (multi-harness control plane), and `autoharness` (self-learning skill layer) all treat the specific coding-agent CLI as a swappable component rather than a platform commitment — a reaction to the proliferation of Claude Code, Codex, Cursor, Gemini CLI, Hermes, and OpenClaw all competing for the same workflow.

A third, quieter trend: **local, no-LLM agent memory** (`deja-vu`, `projectmem`, `Compartment`) is pushing back against embedding-heavy RAG for the specific case of "remember what this agent already tried" — favoring plain-text search over disk-resident session logs.

Finally, efficient on-device inference continues (`timesfm`, Gemma 4 in 2GB RAM), and a distinct China-market cluster of AI-driven A-share/quant research tools (from the same `simonlin1212` account plus `tick-stock-panel`, `CNEquity`) shows vertical financial-data tooling built specifically for LLM agent consumption.

## 4. Community Hot Spots

- **Agent Skills tooling-on-tooling** — optimizers, recorders, and meta-frameworks for authoring skills are now bigger than many individual skill packages (`microsoft/SkillOpt`, `microsoft/skill-recorder`).
- **No-LLM agent memory** — `vshulcz/deja-vu` and `riponcm/projectmem` show a real appetite for lightweight, local, embedding-free memory as an alternative to heavyweight RAG for agent session recall.
- **Harness-abstraction layers** — `opencodex`, `metaharness`, `claudexor` reflect engineers hedging against lock-in to any single coding-agent CLI.
- **Vertical, non-coding AI applications** — `mixelpixx/Konnect` (PCB design) and `debpalash/VoiceStudio` (voice) are reminders that useful agent tooling is spreading well past the coding-assistant space.
- **On-device efficiency claims worth verifying** — `drumih/turbo-fieldfare`'s "Gemma 4 in 2GB RAM" claim is concrete enough to be independently testable, and worth a spot-check before relying on it.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
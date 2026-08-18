# AI Open Source Trends 2026-08-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-18 07:33 UTC

---

# AI Open Source Trends — August 18, 2026

## 1. Finds

**[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** (Go, ⭐643) — A memory layer for coding agents that doesn't call an LLM at all: it indexes session logs that 17 different agent CLIs already write to disk (including sessions from before you installed it) and makes them recallable across tools. Worth a look if you're tired of re-explaining context every time you switch between Claude Code, Codex, and others — it's a single local binary, not another hosted memory service.

**[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** (Swift, ⭐6,134) — Runs Gemma 4 26B-A4B inference in roughly 2GB of RAM on any M-series MacBook. If the number holds up under scrutiny, this is a genuinely notable quantization/serving engineering result for anyone running local models on Apple hardware, not just another wrapper repo.

**[AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)** (Rust, +198 today) — One CLI command that tells you which of "hundreds of models & providers" will actually run on your hardware. A small, concrete utility that solves a real everyday annoyance (guessing whether a model fits in your VRAM/RAM) rather than another agent framework.

**[jundot/omlx](https://github.com/jundot/omlx)** (Python, +78 today) — An LLM inference server for Apple Silicon with continuous batching and SSD-backed caching, controlled from the macOS menu bar. Useful for anyone self-hosting multiple models locally who wants server-grade batching without a GPU box.

**[elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine)** (Python, ⭐396) — Indexes your codebase so agents search it instead of reading whole files, with a claimed 94% reduction in tokens spent on AI coding. Concrete, testable claim and works as a local MCP server with Claude Code, Codex, Copilot, Cursor, and Gemini CLI — worth benchmarking against your own repo before trusting the number.

**[usestrix/strix](https://github.com/usestrix/strix)** (Python, +598 today) — An open-source AI agent that autonomously finds and fixes vulnerabilities in your application. Relevant for security-conscious teams experimenting with agentic pentesting; treat findings as a starting point for a human review, not a compliance substitute.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jundot/omlx](https://github.com/jundot/omlx) | Python | — (+78 today) | LLM inference server with continuous batching and SSD caching, purpose-built for Apple Silicon and managed from a macOS menu bar app. Notable for targeting local Mac serving rather than cloud GPUs. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,134 | Runs Gemma 4 26B-A4B in ~2GB RAM on M-series Macs. A striking efficiency claim worth testing on your own hardware. |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | Rust | — (+198 today) | One-command tool to find which of hundreds of models/providers will run on your hardware — a practical fit-checker, not another framework. |
| [elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine) | Python | 396 | Local MCP server that indexes a codebase so agents search rather than read files, claiming 94% token savings; works across Claude Code, Codex, Copilot, Cursor, and Gemini CLI. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 15,460 | 20MB cross-platform DB client for 80+ databases with a built-in AI assistant and MCP server; broad database coverage plus native agent integration is the differentiator. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 619 | Open-source, CMA-compatible agent runtime with sandboxed sessions, audit, and replay, plus a native DeepSeek harness bundle over stdio MCP. |
| [google-antigravity/antigravity-sdk-python](https://github.com/google-antigravity/antigravity-sdk-python) | Python | 3,071 | Python SDK for building agents on Google's Antigravity platform — worth watching as an early signal of Google's agent-tooling direction. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 20,696 | Hybrid deterministic-pipeline + LLM-agent code review tool used at Alibaba's scale, with line-level comments and a built-in multi-language ruleset (NPE, thread-safety, XSS, SQLi). |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 34,723 | DeepSeek-native terminal coding agent engineered around prefix-cache stability for long-running sessions. Large existing following, but the caching angle is a genuinely different design choice. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,001 | Meta-harness that orchestrates Claude Code, Codex, Cursor, and Pi, letting you swap underlying agents without rewriting workflows, with policy enforcement and sandboxing. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,134 | Local-first agent workspace covering coding, writing, design, research, and automation in one runtime spanning desktop GUI and TUI. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,551 | Memory-first, self-improving agent harness built on EverOS with MiroThinker-powered deep research and reasoning. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 593 | Scaffolds your own branded agent harness (CLI, MCP server, memory, learning loop, signed releases) — a meta-tool for teams building internal agent products. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 417 | Control plane across Claude Code, Codex, Cursor, and OpenCode: quota-aware rotation across subscriptions, shared thread context, and cross-model review. |
| [Gitlawb/zero](https://github.com/Gitlawb/zero) | Go | 1,556 | Minimalist coding agent pitched on user control — "answers to you, your model, your machine, your rules." |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | — (+1,189 today) | Generates HD short videos from a topic or keyword via an automated AI workflow; today's largest star gain in the trending list, suggesting strong current interest in one-click video generation. |
| [usestrix/strix](https://github.com/usestrix/strix) | Python | — (+598 today) | Autonomous AI penetration-testing agent that finds and fixes application vulnerabilities. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | — (+218 today) | Local, CLI-driven AI job search tool: scans listings, scores them A-F, tailors your CV, and tracks applications from inside Claude Code, Codex, or OpenCode. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 523 | Turns a coding agent into a video studio — describe a video in plain language and the agent writes the timeline and renders the file. |
| [heider-x/vela](https://github.com/heider-x/vela) | TypeScript | 521 | Privacy-first AI IDE for novel writing, combining a local LLM with RAG for web-fiction authors who want BYOK control over their data. |
| [Open-Less/openless](https://github.com/Open-Less/openless) | Rust | 3,142 | Hold a key, speak, release: AI-polished text appears at your cursor in any app on macOS/Windows — a lightweight, single-purpose voice-to-text tool. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,223 | Local-first conversational AI video editor with a full multi-track timeline, Agent Skills, and MCP integration. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,100 | Text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts — an interesting alternative to weight fine-tuning for agent improvement. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,134 | Gemma 4 26B-A4B inference optimized to run in ~2GB RAM on M-series MacBooks. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Jupyter Notebook | 897 | 30 runnable notebooks covering the full landscape of agent memory — buffers, vector stores, knowledge graphs, episodic/semantic memory, MemGPT, Mem0, Letta, Zep, Graphiti — good as a reference map for the memory-tool explosion happening elsewhere on this list. |
| [future-agi/future-agi](https://github.com/future-agi/future-agi) | Python | 1,701 | Self-hostable, end-to-end platform for evaluating, observing, and improving LLM/agent apps: tracing, evals, simulations, datasets, gateway, guardrails in one Apache-2.0 package. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 643 | Indexes existing on-disk session logs from 17 coding agents with no LLM or embeddings, as a single local binary — a genuinely different, low-overhead take on agent memory. |
| [caura-ai/caura](https://github.com/caura-ai/caura) | Python | 428 | Governed shared memory for multi-agent, multi-tenant fleets, with trust tiers, keystone policies, audit trails, and a knowledge graph — aimed at organizations running many agents rather than a single developer. |
| [volcengine/SearchCLI](https://github.com/volcengine/SearchCLI) | TypeScript | 1,173 | Open CLI for wiring AI search, recommendation, and conversational retrieval into agent and business systems, from ByteDance's Volcengine. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,493 | AI-native markdown IDE and LLM-queryable wiki for team knowledge bases. |

---

## 3. Trend Signal Analysis

Today's data shows a clear cluster forming around **persistent agent memory and multi-harness orchestration**. At least a dozen distinct projects — `deja-vu`, `ai-memory`, `caura`, `iai-personal-memory-engine`, `Compartment`, `piia-engram`, `metaharness`, `omnigent`, `claudexor`, `Agentlas-OS` — are all solving overlapping variants of the same problem: coding agents forget everything between sessions, and developers now run multiple agent CLIs (Claude Code, Codex, Cursor, OpenCode, Gemini CLI) and want shared state and handoff between them. This is a direct, practical response to the proliferation of competing coding-agent CLIs over the past year rather than a new capability from any single model release. Notably, `deja-vu` stands out for explicitly rejecting the LLM/embeddings approach that most competitors use, betting instead on structured indexing of logs the agents already write.

A second theme is **local/edge inference efficiency** — `turbo-fieldfare`'s ~2GB-RAM claim for a 26B model and `omlx`'s SSD-cached batching server both target Apple Silicon specifically, suggesting continued momentum in bringing larger models to consumer Mac hardware rather than requiring cloud GPUs.

Third, "Agent Skills" as a packaging format (Anthropic's convention) is now a genre of its own — book-to-skill converters, chart/design skills, security-skill bundles, and skill "marketplaces" all appeared in a single day's data, indicating the ecosystem has converged on skills as the default unit of agent capability distribution, alongside MCP servers.

One caution: several trending-list entries show ⭐0 total stars with only a same-day delta, an unusual data pattern worth treating skeptically before amplifying.

---

## 4. Community Hot Spots

- **Agent memory tooling has become crowded overnight** — worth watching which of the dozen-plus competing projects (deja-vu, caura, piia-engram, ai-memory, Compartment) actually gets adopted versus which are near-duplicate ideas chasing the same trend.
- **Apple Silicon as a first-class local-inference target** — `turbo-fieldfare` and `omlx` both suggest serious engineering investment in running larger models efficiently on Macs rather than treating them as a toy platform.
- **Agentic security tooling is maturing fast** — `strix` (autonomous pentesting), `Claude-BugHunter`, and `Anthropic-Cybersecurity-Skills` all point to security teams building agent-native workflows; useful for engineers responsible for app security, but verify findings independently.
- **Token-efficiency-as-a-pitch is a recurring sales angle** — `code-context-engine`'s 94% token savings claim and `opensquilla`'s "same budget, higher intelligence density" both reflect real cost pressure among developers running agents at scale; benchmark before trusting vendor numbers.
- **MCP has fully displaced bespoke integrations as the default agent-to-tool interface** — nearly every infrastructure and application project in this dataset ships an MCP server rather than a custom API, confirming MCP as the de facto standard a year after its release.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
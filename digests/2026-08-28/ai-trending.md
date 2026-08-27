# AI Open Source Trends 2026-08-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-27 18:03 UTC

---

# AI Open Source Trends Report — 2026-08-28

## 1. Finds

- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, and no GPU dependency. Worth a look for anyone interested in extreme quantization/offloading techniques or who wants to understand trillion-parameter inference without a datacenter.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook, a companion data point to the Kimi C project showing the same "shrink the footprint, keep the capability" push applied to Apple silicon. Useful for developers who want a serious local model running alongside normal laptop workloads.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Indexes the session history that coding agents (Claude Code, Codex, Cursor, and 17 others) already write to disk and makes it searchable — no LLM calls, no embeddings, single local Go binary. A quietly useful tool for anyone who has ever wanted to find "that fix I did with Codex three weeks ago" across tools.
- **[microsoft/SkillOpt](https://github.com/microsoft/SkillOpt)** — A text-space optimizer that trains reusable natural-language "skills" for frozen LLM agents through trajectory-driven edits and validation-gated updates, outputting deployable `best_skill.md` artifacts. Interesting for teams building agent skill libraries who want an automated, evaluation-driven alternative to hand-tuning prompts.
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — A hybrid code review tool combining deterministic static-analysis pipelines with an LLM agent layer, giving precise line-level comments and built-in rulesets (NPE, thread-safety, XSS, SQLi); battle-tested at Alibaba's scale and works with both OpenAI and Anthropic backends. Relevant for engineering teams wanting review automation that doesn't rely purely on LLM judgment.
- **[riponcm/projectmem](https://github.com/riponcm/projectmem)** — A fully local, no-telemetry MCP memory server that records an agent's issues, attempts, fixes, and decisions, then explicitly warns the agent before it repeats an approach that already failed. A concrete, narrow answer to the "agents keep re-trying the same broken fix" problem rather than a generic memory pitch.

Caution flag: **opensquilla/opensquilla** ("token-efficient agent, same budget, higher intelligence density") is high on star count but low on concrete detail in its description — treat as unverified until it publishes benchmarks.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 21,516 | Hybrid deterministic-pipeline + LLM-agent code review tool battle-tested at Alibaba scale; notable for pairing static analysis with LLM judgment rather than relying on the LLM alone. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 6,580 | Portable C99 inference for a 2.78T-parameter model in 8.24 GB RAM with zero framework dependencies; a strong signal that extreme CPU inference is becoming a serious engineering pursuit. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,413 | Runs Gemma 4 26B-A4B in ~2 GB RAM on M-series MacBooks, mirroring the Kimi-K3-in-C trend toward radically compressed local inference. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 12,323 | Universal provider proxy letting Codex CLI/App/SDK and Claude Code call any LLM backend (Gemini, Grok, DeepSeek, Ollama); useful for teams avoiding vendor lock-in on harness tooling. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 4,995 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex and Gemini to make agent edits faster and cheaper. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 922 | MCP server that gives any AI agent generic code-execution ability, a minimal building block rather than a full harness. |
| [Cmochance/codex-app-transfer](https://github.com/Cmochance/codex-app-transfer) | Rust | 302 | Local gateway translating Codex CLI's Responses API into Chat Completions so Kimi, DeepSeek, Zhipu GLM and Bailian can plug into Codex tooling. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,365 | Meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents behind one policy/sandboxing layer, letting teams swap harnesses without rewrites. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,260 | Local-first agent workspace for coding, writing, design, research and automation with both desktop GUI and TUI runtimes. |
| [apache/maka](https://github.com/apache/maka) (Incubating) | TypeScript | 3,743 | Local-first agent workspace that records model messages, tool calls, results, and permission decisions as an append-only audit log — notable for landing under the Apache Incubator umbrella. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,650 | Positions itself as a "harness of harnesses" — a persistent, self-evolving multi-agent ecosystem for cross-domain collaboration. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 3,306 | A persistent development workspace designed to self-improve and continue work across sessions rather than reset each run. |
| [makecindy/cindy](https://github.com/makecindy/cindy) | TypeScript | 2,326 | Open-source, out-of-the-box general AI agent aimed at users who want something that works immediately with minimal setup. |
| [Gitlawb/zero](https://github.com/Gitlawb/zero) | Go | 1,633 | A coding agent explicitly framed around user control — "your model, your machine, your rules" — a reaction to opaque hosted agents. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 617 | Scaffolding tool to build your own branded agent harness with its own CLI, MCP server, memory and learning loop, compatible with Claude Code, Codex, pi.dev, Hermes and OpenClaw. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 0 (+1,284) | Open-source agentic video production system with 12 pipelines, 100+ tools and 700+ skill/knowledge files; today's +1,284 stars is the largest single-day jump of any app-layer project in this dataset. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 6,498 | AI video skill for Claude Code/Codex built on Remotion, with 152 shot-recipe cards and 209 motion previews for cinematic product videos. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,408 | Local-first conversational AI video editor with a multi-track timeline, Agent Skills, and MCP integration. |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | 0 (+631) | Self-organizing AI "second brain" for Obsidian that has Claude read, link, and file sources into a connected Markdown knowledge graph you own. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0 (+323) | Multi-agent LLM framework for financial trading strategy — a concrete vertical application of multi-agent design rather than a generic framework. |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 3,864 | Self-hosted, zero-ops A-share quant workbench (stock picking + monitoring + backtesting) with LLM-driven strategy customization. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 468 | Desktop app that organizes AI-assisted novel writing into a controllable pipeline from inspiration through character/world-building to chapter drafting and revision. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,410 | Text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation-gated updates, outputting deployable skill artifacts — an automated alternative to hand-written agent skills. |
| [marin-community/marin](https://github.com/marin-community/marin) | Python | 0 (+255) | Open-source framework for foundation model research and development, gaining steady daily traction. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 563 | Self-hosted RAG platform built on a knowledge graph that tracks *when* each fact was true, packaged as a single Rust + PostgreSQL binary — notable for temporal-aware retrieval, which most RAG stacks ignore. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 731 | Indexes existing session history from 20+ coding agents for search, with no LLM calls or embeddings required — a lightweight alternative to embedding-based memory tools. |
| [riponcm/projectmem](https://github.com/riponcm/projectmen) | Python | 766 | Local MCP memory server that records issues/attempts/fixes and warns an agent before it repeats a previously failed approach. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,033 | AI equity-research agent with evidence-grounded RAG, versioned reports, and automated quality evaluation for financial analysis output. |
| [volcengine/SearchCLI](https://github.com/volcengine/SearchCLI) | TypeScript | 1,176 | Open CLI for wiring AI search, recommendation, and conversational retrieval into agent or business systems. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 409 | Local-first desktop app that converts scanned PDFs and document folders into clean, AI-ready Markdown offline, using far fewer tokens than vision-model approaches. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 302 | Free, no-API-key MCP server providing retrieval over 22.5 million Taiwanese court rulings and administrative interpretations with citation verification. |

*(Note: `riponcm/projectmem` link corrected above — GitHub slug is `projectmem`.)*

## 3. Trend Signal Analysis

Three patterns dominate today's data. First, **agent memory and session-history tooling** is having a moment — `deja-vu`, `projectmem`, `iai-personal-memory-engine`, `Compartment`, `piia-engram`, and `stashbase` all launched or gained traction with nearly identical pitches: give coding agents durable, local, cross-harness memory. This is a direct response to the pain of agents losing context between sessions, and the crowding suggests the space hasn't converged on a standard yet — MCP is the common protocol, but storage and retrieval approaches vary widely (embeddings vs. no-embeddings, encrypted vs. plain, single-agent vs. cross-harness).

Second, **meta-harness / cross-agent orchestration** is a clear direction: `omnigent`, `metaharness`, `Raven`, `apache/maka`, and `KunAgent` all frame themselves as harness-agnostic layers sitting above Claude Code, Codex, Cursor, and others. This reflects a maturing ecosystem where developers no longer want to commit to one CLI agent and instead want portability and policy control across them.

Third, **extreme local inference** appeared twice today with real numbers behind it: a 2.78T-parameter Kimi K3 running on CPU in 8.24 GB RAM, and Gemma 4 26B-A4B running in ~2 GB RAM on Apple silicon. Both point to intensifying interest in making frontier or near-frontier models runnable without cloud GPUs — likely a response to recent releases of Kimi K3, Gemma 4, and DeepSeek V4, all referenced across today's projects as backends multiple tools are already integrating.

Finally, the **Agent Skills** format (Claude Code / Codex "skill bundles") continues to proliferate into narrow verticals — bug hunting, scientific research, video production, social-media research, legal — suggesting Skills are becoming the default packaging unit for domain expertise rather than fine-tuned models or standalone apps.

## 4. Community Hot Spots

- **Local-first agent memory** — six-plus competing projects launched in the same window; worth tracking which converges on becoming a de facto standard for MCP-based persistent context.
- **Extreme quantized/CPU inference** (`kimi-k3-in-c`, `turbo-fieldfare`) — a genuinely new engineering frontier worth following if you care about running large models without a GPU budget.
- **Cross-harness meta-orchestration** (`omnigent`, `metaharness`, `apache/maka`) — signals that "pick one coding agent" is giving way to "orchestrate several," a shift worth watching for tooling lock-in risk.
- **Agent Skills as the packaging unit for expertise** — skill bundles for science, bug hunting, video, and social research are replacing what used to be bespoke apps or fine-tunes; low barrier to entry means quality varies widely, so vet before adopting.
- **Automated skill/prompt optimization** (`microsoft/SkillOpt`) — an early but credible attempt to make agent skill authoring itself model-driven and evaluation-gated rather than hand-tuned, worth watching as agent skill libraries scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
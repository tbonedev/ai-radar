# AI Open Source Trends 2026-09-21

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-21 13:34 UTC

---

# GitHub AI Open Source Trends Report — September 21, 2026

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that gives Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, and 28 other coding agents one shared memory, built purely by mining session history already on disk (no LLM, no embeddings, no vector DB). Worth trying for anyone who bounces between multiple coding agents and is tired of re-explaining the same fix to each one.

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server, backed by Red Hat's emerging-tech group, that gives agents a compressed map of a codebase (signatures at "74.7% fewer bytes than bodies") plus blast-radius and tests-to-run analysis before and after a change. Useful for teams building custom agent tooling who need cheap, verifiable repo context instead of raw grep/read loops.

- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any Apple Silicon MacBook. A concrete, verifiable engineering result (not a framework announcement) that's directly useful to anyone wanting to run a serious model on modest local hardware.

- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A Microsoft desktop app that records an on-screen work session, uses GitHub Copilot CLI to reconstruct the intent and steps, and turns it into a reusable Skill or Automation for Scout/Copilot Cowork/Copilot Studio. Interesting "demonstration-to-skill" workflow for teams standardizing repetitive tasks without hand-writing agent skills.

- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with sub-300µs in-memory BM25 search and an embedded MCP server, claiming an 80% cut in token bloat with zero external databases. Worth a look for anyone frustrated by re-feeding project context into every session — pure Go, no cloud dependency.

- **[coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens)** — Renders every pull request as an animated architecture and data-flow walkthrough inline in the PR itself (GitHub App, Action, CLI, or coding-agent skill). Good for reviewers on large or unfamiliar codebases; the "100x faster" claim in the description is marketing, but the visualization-inside-the-PR mechanism itself is a genuinely useful idea.

⚠️ Caution: **[deeplethe/utopia](https://github.com/deeplethe/utopia)** ("World's first open-source enterprise world model") has vague, superlative framing typical of hype-driven repos with little concrete detail — worth watching for substance before adopting.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [trycua/cua](https://github.com/trycua/cua) | HTML | 0 (+609) | Open-source drivers and cross-OS fleet tooling for scaling "computer-use" agents, plus benchmarks for training and evaluation. Today's trending surge suggests strong interest in computer-use infrastructure beyond single-vendor offerings. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,293 | A zero-dependency MCP/CLI server that gives agents compressed, verifiable codebase context instead of raw search. Backed by Red Hat's experimental-tools org, signaling enterprise interest in agent-context tooling. |
| [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Rust | 0 (+114) | Long-term memory layer for agent coding CLIs designed to survive vendor handoffs (e.g., Claude Code to Codex). Addresses the real pain point of losing context when switching harnesses. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,628 | Local-first semantic search across a workspace, built for both humans and AI agents. Strong star count suggests demand for fast, local (non-cloud) code search primitives. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 709 | Git-native agent memory implementing the Google OKF v0.2 spec with sub-300µs BM25 search and no external database. Notable for standardizing on an open memory format rather than a proprietary one. |
| [yynxxxxx/Codex-X](https://github.com/yynxxxxx/Codex-X) | Rust | 0 (+210) | Cross-platform visual management tool for OpenAI Codex desktop/CLI — provider/API switching, session sync, prompt injection, Skills/MCP management. A GUI layer over an increasingly complex Codex config surface. |
| [x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 2,028 | Native MCP plugin exposing the x64dbg debugger's full functionality over HTTP to any MCP-compatible assistant. Niche but concrete: agent-driven reverse engineering and debugging. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | TypeScript | 0 (+607) | A framework specifically for building "agentic" apps rather than bolting agents onto existing UIs. From Builder.io, a known dev-tools vendor, lending it more credibility than a typical weekend project. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,134 | Open-source meta-harness to orchestrate Claude Code, Codex, Cursor, and Pi under one policy/sandboxing layer without rewriting agent logic. High star count reflects the growing appetite for harness-agnostic orchestration. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 5,608 | An Apache Incubator project: a high-performance agent workspace that keeps a full record of everything an agent did. Apache incubation gives it unusual institutional backing for an agent tool. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 4,063 | A persistent workspace for development work that self-improves and continues across sessions rather than resetting each time. Targets the "agent forgets everything" problem from a workflow-continuity angle. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 668 | Scaffolds a custom, branded agent harness (its own CLI, MCP server, memory, learning loop) that works across Claude Code, Codex, pi.dev, Hermes, OpenClaw and a hardware-isolated sandbox. Useful for teams wanting a bespoke agent product rather than a generic wrapper. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 5,252 | Open-source AI "coworkers" that each get their own computer (browser, files, tools), with every action pre-decided and logged. From CopilotKit, an established agent-UI vendor; the audit-first design is notable. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 648 | Self-hosted AI agent runtime and MCP bridge with sandboxed sessions, credential handling, and audit/replay plus a local console. Positions itself around auditability and self-hosting rather than raw capability. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+395) | AI-powered video clipping and highlight generation tool aimed at short-form content creators. Solid trending momentum today for a narrowly scoped, practical application. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,044 | Records a screen session and uses GitHub Copilot CLI to reconstruct it into a reusable Skill/Automation for Microsoft's Copilot products. A Microsoft-official tool bridging manual work and agent skills. |
| [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens) | TypeScript | 1,255 | Turns pull requests into animated architecture/data-flow walkthroughs, usable as a GitHub App, Action, CLI, or agent skill. Directly useful for code review on unfamiliar or large diffs. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 4,490 | Self-hosted, multi-user, multi-agent AI assistant from Tencent Cloud. Notable for large-vendor backing of a self-hostable (not SaaS-locked) assistant. |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | TypeScript | 12,427 | Clones a viral video end-to-end — face swap, script, B-roll — and ships up to 100 variants in one command. High star count, but the "100M views" framing leans toward hype; evaluate the actual output quality before relying on it. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,951 | Local-first conversational AI video editor with a multi-track timeline, Agent Skills, and MCP integration via Remotion. A concrete, self-contained application rather than a thin LLM wrapper. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,790 | Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. A concrete, benchmarkable efficiency result that's immediately useful for local-inference enthusiasts. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 4,851 | An open-source Chinese-language book quantitatively deriving LLM training/inference system design from hardware constraints and model architecture, with full text, PDF, and companion tools. A rare deep technical reference rather than another framework. |
| [SenteLabsAI/OpenExecutive](https://github.com/SenteLabsAI/OpenExecutive) | Python | 5,079 | An "AI virtual executive team" — one persona backed by 8 specialist agents on FastAPI + Next.js. Interesting multi-agent-as-a-role-play pattern, though real-world utility is unproven. |
| [youngyangyang04/llm-master](https://github.com/youngyangyang04/llm-master) | — | 863 | A full-stack Chinese-language LLM learning roadmap covering prompt engineering, RAG, agents, MCP, fine-tuning, deployment, and Transformers through to production and interviews. Useful as a structured curriculum rather than a tool. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 709 | Git-native persistent agent memory implementing Google's OKF v0.2 spec with embedded sub-300µs BM25 search and no external DB dependency. Standardization on an open memory format is the notable part here. |
| [Deuz-AI/Deuz-SDK](https://github.com/Deuz-AI/Deuz-SDK) | TypeScript | 697 | Zero-dependency TypeScript framework combining durable execution, long-term memory, hybrid RAG, MCP tool calling, and CodeAct sandboxes behind one streaming API across Claude, GPT, Gemini, Grok, Mistral, and DeepSeek. Broad provider coverage in a single lightweight SDK is the differentiator. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 282 | A proposed "Universal Cross-Model Episodic Memory Standard" — a local-first, project-scoped SQLite engine working across Antigravity, Claude Code, Cursor, Codex CLI, and OpenCode with zero cloud lock-in. Early-stage but addresses genuine cross-tool memory fragmentation. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 262 | A single Rust binary local-first memory engine for AI agents using semantic embeddings, with zero config and fully offline operation. Simple, self-contained alternative to hosted vector-DB memory stacks. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,270 | An AI-native markdown IDE and LLM wiki. From Inkeep, an established knowledge-search vendor, giving the project more staying power than a typical hobby wiki tool. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 377 | ModelScope's official Chinese-language cookbook covering model selection, inference, fine-tuning, evaluation, RAG, and agents end-to-end. Useful as a vetted, vendor-maintained reference. |
| [CyberSunil/LLMVault](https://github.com/CyberSunil/LLMVault) | Python | 322 | An intentionally vulnerable OWASP LLM Top 10 training platform for prompt injection, RAG security, and agent security research. Valuable for security teams building GenAI pentesting skills in a safe sandbox. |

---

## 3. Trend Signal Analysis

Today's data shows a clear convergence on **cross-agent portable memory** as the hottest sub-category: deja-vu, okf-agent-memory, engrim, Compartment, uteke, and akitaonrails/ai-memory all attack the same problem — an agent forgets everything once you switch tools or start a new session — from different angles (Git-native, SQLite, embeddings, pure retrieval, encrypted local stores). This is a maturing response to the reality that developers now routinely juggle Claude Code, Codex, Cursor, and OpenClaw in the same project, and none of these tools share state natively. A second, related cluster is **harness-agnostic meta-orchestration** (omnigent, metaharness, sandbase-harness, Agentlas-OS) — frameworks that sit above individual coding agents rather than being one. MCP continues to solidify as the default protocol for exposing specialized tooling to any agent, now reaching into unusual domains: PCB/EDA design (Konnect, easyeda-agent), binary reverse engineering (x64dbg-mcp-server, open-reverselab), and offensive security (blitzstrike). A distinct regional trend is a wave of Chinese A-share/quant-trading AI agents (tick-stock-panel, HiThink Financial API, Vibe-Research, CNEquity, goutoujunshi) — domestic financial-vertical tooling is unusually dense today. On the model side, Gemma 4's efficient on-device inference (turbo-fieldfare) and continued DeepSeek Harness (DSH) plugin ecosystem growth are the concrete signals tying back to recent model releases; several "world model" and "AGI architecture" repos (utopia, dsh-memory) use inflated language without matching technical detail and should be treated skeptically pending real benchmarks.

---

## 4. Community Hot Spots

- **Cross-agent memory standards** — deja-vu, okf-agent-memory, and engrim are independently converging on the same problem; worth tracking which format (if any) becomes a de facto standard.
- **MCP as universal hardware/security glue** — EDA (easyeda-agent, Konnect), debugging (x64dbg-mcp-server), and pentesting (blitzstrike) tools show MCP moving well past chat/coding use cases.
- **Efficient local inference** — turbo-fieldfare's 2 GB Gemma 4 run is a concrete data point for developers evaluating on-device deployment over API costs.
- **Demonstration-to-skill tooling** — microsoft/skill-recorder's "record a session, get a Skill" workflow is a new pattern worth watching as Agent Skills proliferate.
- **Chinese financial-vertical AI agents** — a notably dense cluster (tick-stock-panel, HiThink Financial-API, Vibe-Research, CNEquity) suggests strong domestic demand for LLM-driven quant/investment tooling right now.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
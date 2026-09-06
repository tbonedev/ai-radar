# AI Open Source Trends 2026-09-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-06 11:29 UTC

---

One quick flag before the report: the `nvm-sh/nvm` entry in the trending data has a crypto token string ("$nvm: 3ArcxqLtXMmBnWbbtfwQgVL3MNnDsggzgGDtXMnjpump") appended to its description — that's not part of the real nvm project and looks like an injected pump-and-dump lure. I've excluded it entirely rather than repeating it. I also excluded `bikini/exploitarium`, a non-AI exploit-PoC archive whose own description invites others to weaponize unreported vulnerabilities for CVE credit — not relevant to this report and not something to amplify.

---

# AI Open Source Trends Report — 2026-09-06

## 1. Finds

- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. Concrete, verifiable claim (not vague "optimization"); worth trying for anyone who wants a capable local model without a beefy GPU.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Builds searchable memory for coding agents (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, +18 more) purely from session history already on disk — no LLM calls, no embeddings, single local Go binary. Useful for anyone who has months of agent transcripts and wants to recall past decisions without re-explaining context every session.
- **[codecoradev/uteke](https://github.com/codecoradev/uteke)** — Local-first semantic memory engine for agents in a single Rust binary, zero config, fully offline. A lighter-weight alternative to running a vector DB just to give an agent persistent recall.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)** — MCP server that lets an agent drive waveform debugging directly: reads FST/VCD/FSDB dumps plus a SystemVerilog netlist, with 34 tools for signal tracing and pass/fail diffing. Niche but genuinely new ground — useful for hardware/RTL engineers who want an agent doing first-pass debug triage.
- **[magnitudedev/magnitude](https://github.com/magnitudedev/magnitude)** — A local inference server that auto-picks models for your hardware and plugs into whichever agent CLI you already use (Pi, OpenCode, Codex, Claude Code, etc.). Good for developers who want to swap between local and cloud models without changing their workflow.
- **[deeplethe/utopia](https://github.com/deeplethe/utopia)** — Calls itself "the world's first open-source enterprise world model" with no concrete technical detail behind the claim. Treat as unverified hype until the repo shows what it actually simulates; not a recommendation yet.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | TypeScript | 0 (+674) | Local inference server that matches models to your hardware and wires into existing agent CLIs. Strong "today" momentum suggests real developer interest in local-first inference. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 13,548 | Universal provider proxy letting Codex/Claude Code talk to any backend LLM (Gemini, Grok, DeepSeek, Ollama). High star count reflects strong demand for provider-agnostic tooling. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 1,889 | Native MCP plugin exposing x64dbg's full debugger over HTTP — breakpoints, memory reads, register dumps. Zero-dependency single-binary Zig build is a notable engineering choice. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 176 | MCP server for RTL waveform debugging with 34 tools covering driver analysis and diffing. Backed by Tencent, signaling enterprise EDA teams are now building agent tooling. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 440 | Native KiCAD 10 plugin exposing 217 PCB design/routing/manufacturing tools to any LLM. A concrete example of AI reaching into hardware CAD workflows. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 433 | Multi-harness control plane doing quota-aware rotation across Claude/Codex subscriptions with shared thread context. Addresses a real pain point (rate limits) rather than adding another agent wrapper. |
| [modelstudioai/cli](https://github.com/modelstudioai/cli) | TypeScript | 325 | Official CLI for Alibaba Cloud's Model Studio (百炼), exposing models/search/multimodal as structured tool calls. Notable as a major cloud vendor's entry into the agent-tool-calling space. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,734 | Meta-harness that orchestrates Claude Code, Codex, Cursor, and Pi under one policy/sandboxing layer with real-time multi-device collaboration. Represents the crowded but fast-growing "harness of harnesses" trend. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,290 | Local-first agent workspace spanning coding, writing, design and research with both a desktop GUI and a TUI. Appeals to users who want one runtime instead of separate tools per task type. |
| [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | TypeScript | 6,477 | Multi-agent harness that runs an "office of agents" on top of your existing Claude Code/Codex subscriptions. No new API keys needed, which lowers the barrier to trying multi-agent setups. |
| [Waishnav/devspace](https://github.com/Waishnav/devspace) | TypeScript | 4,490 | Minimal coding-agent harness built on MCP, working across ChatGPT, Claude, Hermes, Grok Bot and OpenClaw. Its selling point is simplicity relative to heavier meta-harness competitors. |
| [pacifio/atlas](https://github.com/pacifio/atlas) | Rust | 3,244 | "Source control for agents" — tracks and lets you query changes made by multiple coding agents in one place. Solves a real auditability gap as teams run several agents concurrently. |
| [Agentlas-AI/Agentlas-OS](https://github.com/agentlas-ai/Agentlas-OS) | Python | 1,103 | Keeps specialist agents in a hub and spins up a temporary orchestrator per task, local-first and model-agnostic. A lighter architectural take than full always-on multi-agent swarms. |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | TypeScript | 0 (+136) | Self-described "agent meta-harness" for deploying multi-player agent swarms with adaptive memory and RAG. Same author has a second, near-identical "metaharness" repo — worth checking which one is actively maintained before adopting. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 0 (+1314) | Performance-optimization layer for agent harnesses adding skills, "instincts," memory and security across Claude Code, Codex, Cursor and more. Biggest today-star gain in this batch — worth a look, but vague framing ("instincts") warrants a skeptical read of the README before relying on it. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 5,599 | Free, open-source MS Office alternative (Word/Excel/PowerPoint/PDF) with built-in AI agents, cross-platform. A genuinely ambitious scope if it delivers on parity with Office's core apps. |
| [chaitanyagiri munder-difflin aside] microsoft/skill-recorder | [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,856 | Records your on-screen work session and uses GitHub Copilot CLI to reverse-engineer it into a reusable Skill or Automation. Interesting approach to skill authoring — capture by demonstration instead of writing prompts by hand. |
| [larashero3-dotcom/lieflat-charts](https://github.com/larashero3-dotcom/lieflat-charts) | HTML | 4,784 | Agent Skill that turns raw data into polished, interactive HTML charts, bilingual (EN/中文). Useful drop-in for agents that currently produce static or ugly chart output. |
| [blader/humanizer](https://github.com/blader/humanizer) | Python | 0 (+990) | Agent skill that strips telltale signs of AI-generated writing from text. Fastest-growing "today" star count among applications — reflects strong demand, though the use case sits in an ethical gray zone worth being upfront with users about. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 492 | Turns a coding agent into a video studio — describe a video in plain language and the agent writes the timeline and renders it. Concrete example of agents moving beyond code into media production. |
| [guangshu100/BidMaster-Pro](https://github.com/guangshu100/BidMaster-Pro) | Python | 255 | End-to-end tender/bid-writing agent for the Chinese market with 21 compliance checks, RAG knowledge base and OCR extraction. A well-scoped vertical application rather than a generic framework. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,650 | Runs Gemma 4 26B-A4B in ~2 GB RAM on M-series MacBooks. The standout item in this category today — a specific, testable efficiency claim rather than a framework announcement. |

*Note: today's data is thin on pure training/fine-tuning repos — almost everything trending is agent tooling built on top of existing models, not new model work itself.*

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 780 | Builds agent memory from session history already on disk, across 20+ agent tools, with no LLM or embeddings required. A pragmatic, low-cost alternative to embedding-based memory systems. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 5,006 | Claims to be "the world's first open-source enterprise world model" but the repo gives little concrete detail to back the label. Worth watching but not yet worth trusting. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,031 | Equity-research agent combining evidence-grounded RAG, versioned reports and automated quality evaluation. The "versioned reports + quality eval" angle is a more rigorous take than typical finance-bot repos. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 419 | Local-first desktop app converting scanned PDFs and folders of documents into clean, AI-ready Markdown, offline and token-efficient versus vision-model-based OCR. Practical utility for RAG pipeline builders. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 393 | A 12-phase research pipeline skill for Claude Code with claims-ledger triangulation, red-teaming, and four-layer citation verification. Notably rigorous design for reducing hallucinated citations in agent research output. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 238 | Local-first semantic memory engine, single binary, zero config, fully offline. Smaller and simpler than most vector-DB-backed memory stacks. |

## 3. Trend Signal Analysis

Today's list is dominated by one theme: **agent orchestration and "meta-harness" tooling wrapping existing coding agents** (Claude Code, Codex, Cursor, Pi, Hermes, OpenClaw). At least four separate projects — omnigent, ruflo, ECC, and the previously-seen metaharness — pitch themselves almost identically as harness-agnostic control layers with memory, policy, and multi-agent coordination. This suggests the ecosystem has moved past "which agent is best" toward "how do I run several agents together and manage their quotas and memory," but also shows real duplication and hype risk — several of these repos are light on technical substance behind ambitious framing.

A second, more concrete trend is **local/on-device inference maturing**: turbo-fieldfare's Gemma-in-2GB-RAM result and magnitude's hardware-aware local inference server both point to real engineering progress in running capable models without cloud GPUs, likely riding recent smaller/efficient model releases (Gemma family).

Third, **MCP is spreading into specialist domains** beyond coding — hardware waveform debugging (Tencent/wave-mcp), PCB design (Konnect), and low-level debuggers (x64dbg-mcp-server) — indicating MCP has become the default integration point for giving agents deep, tool-specific access to professional workflows, not just general-purpose coding.

Finally, **"Agent Skills" as a distributable unit continues to proliferate** (mattpocock/skills, humanlayer/skills, offer-toolkit-skill, deepdive, sepia), reinforcing Anthropic's Skills format as a de facto packaging standard across multiple agent vendors.

## 4. Community Hot Spots

- **Meta-harness fatigue risk**: the orchestration-layer space (omnigent, ruflo, ECC, metaharness) is getting crowded with similar pitches — worth watching for consolidation or which one actually ships durable functionality versus marketing copy.
- **On-device inference is the most concrete win this cycle** — turbo-fieldfare's Gemma-in-2GB claim and magnitude's local server are testable, practical, and worth trying today.
- **Vertical MCP servers are a genuinely new direction** — hardware debugging, PCB design, and EDA tooling getting first-class agent integrations signals MCP's reach extending well past software development.
- **Session-history-based agent memory (deja-vu, uteke)** is a notably pragmatic counter-trend to heavyweight embedding/vector-DB memory stacks — worth evaluating if you're building agent memory features.
- **Caution flag**: a cluster of high-star Chinese A-share/stock-data repos (several from the same author, `simonlin1212`) appear in the topic search with large round star counts but minimal differentiation between repos — treat star counts here as a weak signal, possibly inflated by coordinated promotion rather than organic adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
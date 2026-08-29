# AI Open Source Trends 2026-08-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-29 12:56 UTC

---

# AI Open Source Trends Report — 2026-08-29

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that indexes the session history your coding agents already write to disk (Claude Code, Codex, Cursor, and 17 others) and makes it searchable — no LLM calls, no embeddings, no cloud. Worth trying for anyone who bounces between multiple coding agents and keeps losing track of "wait, didn't I already solve this last week?"

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — The official Chrome DevTools team's MCP server, exposing real browser inspection/debugging (DOM, network, console, performance traces) to any MCP-compatible coding agent. Useful for anyone building or using agents that need to actually look at a running web page rather than guess from source code.

- **[riponcm/projectmem](https://github.com/riponcm/projectmem)** — A 100%-local MCP memory server that records issues, fix attempts, and decisions per project, then explicitly warns your agent before it repeats an approach that already failed. More targeted than the general "give your agent memory" trend below — it's specifically an anti-repetition log, which is a concrete, testable claim rather than a vague "remembers everything" pitch.

- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, no GPU. A llama2.c-style educational/engineering feat for anyone who wants to understand how extreme quantization and memory-mapped MoE inference actually work under the hood.

- **[duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server)** — A native MCP plugin for the x64dbg Windows debugger, written in Zig with zero dependencies, letting any MCP-capable AI assistant set breakpoints, step through code, and dump memory/registers over HTTP. Relevant for security researchers and malware analysts who want an AI copilot wired directly into a real debugger rather than a toy sandbox.

- **Caution flag**: [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) bills itself as "the Harness of Harnesses" — a "trusted, persistent, self-evolving multi-agent ecosystem for all-domain collaboration." That's marketing language with no concrete claim attached, and it's one of several "meta-harness"/"agent OS" repos on today's list (see also `agentlas-ai/Agentlas-OS`, `ruvnet/metaharness`) chasing the same vague positioning. Worth a skeptical look before adopting.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+215) | Official Chrome DevTools protocol exposed as an MCP server for coding agents. Backed by the Chrome team itself, which lends it more durability than most day-one MCP servers. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,400 | Open-source auth gateway connecting 1000+ SaaS providers to AI agents via SDK, CLI, MCP, HTTP and OpenAPI. Solves the "every agent needs its own OAuth dance" problem at scale. |
| [butterbase-ai/butterbase](https://github.com/butterbase-ai/butterbase) | TypeScript | 3,309 | Open-source backend-as-a-service (Postgres, auth, storage, functions) with a built-in AI gateway and MCP support. A Supabase-shaped bet on agents as first-class backend clients. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 1,694 | Zero-dependency native MCP plugin for the x64dbg debugger, exposing full debugging control over HTTP. Niche but genuinely useful for AI-assisted reverse engineering. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 938 | Gives any AI agent code-execution ability via MCP tools. Minimal, composable building block rather than a full harness. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 637 | Local-first agent runtime with sandboxed sessions, MCP tools, memory, credentials, and audit/replay, running OpenAI, Anthropic, MiniMax and DeepSeek models on your own infra. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 424 | Multi-harness control plane doing quota-aware rotation across multiple Claude/Codex subscriptions with shared thread context. Solves a real, boring pain point (rate limits) rather than chasing a big vision. |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | TypeScript | 0 (+612) | Aggregates 34 free LLM providers / 635 endpoints behind one OpenAI-compatible `/v1` endpoint with smart routing and failover. Explicitly scoped to personal experimentation, not production. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,466 | Meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting you swap harnesses without rewriting and enforce policy/sandboxing across them. Highest star count of the crop of "orchestrate-everything" tools today. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,674 | Pitched as a "trusted, persistent, self-evolving multi-agent ecosystem." Vague positioning with a large star count and little concrete differentiation — treat as unverified. |
| [fuxicodex/Fuxi](https://github.com/fuxicodex/Fuxi) | Python | 2,682 | A self-contained terminal coding agent with cost-aware routing across LLM providers. Positions itself as a lighter-weight alternative to full harness suites. |
| [agentlas-ai/Agentlas-OS](https://github.com/agentlas-ai/Agentlas-OS) | Python | 1,115 | Keeps specialist agents in a hub and spins up a temporary orchestrator per task, local-first and model-agnostic. Concrete architectural idea (ephemeral orchestrators) rather than a generic "agent OS" claim. |
| [ongridio/ongrid](https://github.com/ongridio/ongrid) | Go | 927 | An ops-focused AI agent that understands your infrastructure, root-causes incidents, and fixes them from Slack/Telegram/Lark/DingTalk. Useful for SRE teams wanting a chat-driven remediation loop. |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Python | 0 (+1604) | 163 validated Agent Skills plus 100+ scientific databases (biology, chemistry, medicine, drug discovery), claiming 175,000+ scientist users already. Notable for the day's biggest raw star delta. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 0 (+809) | Turns a coding agent into a full video production studio: 12 pipelines, 100+ tools, 700+ skill/knowledge files. Ambitious scope for a brand-new repo — worth watching for staying power. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [nexu-io/html-anything](https://github.com/nexu-io/html-anything) | HTML | 8,542 | A local AI agent that writes HTML for you across 75 skills and 9 surfaces (decks, posters, data reports), with sandboxed preview and one-click export to WeChat/X/Zhihu/PNG. Zero API key required — works with Claude Code, Cursor, Codex and more. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 6,638 | AI video skill for Claude Code/Codex built on Remotion, with 152 shot recipe cards and 209 motion previews for cinematic product videos. A concrete content library, not just a wrapper. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 3,834 | A Claude Code skill bundle for bug hunting: 82 skills, 15 slash commands, 681 disclosed-report patterns across 24 vulnerability classes, plus enterprise identity/infra attack matrices. Useful reference set for offensive security researchers. |
| [simonlin1212/Vibe-Research](https://github.com/simonlin1212/Vibe-Research) | TypeScript | 2,217 | A personal investment-research agent (A-share/US/HK) for daily reviews, news radar, positions, and backtesting, built on an open-source Codex harness. Narrow domain fit for retail quant users. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,455 | Local-first conversational AI video editor with a real multi-track timeline, Agent Skills, MCP integration, and Remotion rendering. Distinct from the many "chat-to-video" wrappers by actually exposing a professional timeline. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 524 | Describe a video in plain language and your coding agent writes the timeline and produces the file. Smaller and earlier-stage than the two video tools above, worth comparing against them. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,460 | A text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts. Notable because it optimizes prompts/skills rather than weights — no fine-tuning needed. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 6,706 | Runs the 2.78T-parameter Kimi K3 on a single CPU in 8.24 GB RAM, pure C99, no BLAS/framework/GPU. An extreme-efficiency inference demo in the llama2.c tradition. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,475 | Gemma 4 26B-A4B inference in ~2 GB RAM on any M-series MacBook. Shows how far MoE + quantization has pushed on-device inference on consumer Apple silicon. |
| [marin-community/marin](https://github.com/marin-community/marin) | Python | 0 (+163) | Open-source framework for foundation-model research and development. Early-stage but backed by a dedicated org, worth watching as it matures. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,786 | Claims to replace web parsing entirely with "scalable pixel-native search" — retrieval over rendered page images instead of extracted text/DOM. If it holds up, it sidesteps the whole HTML-parsing-fragility problem RAG pipelines usually fight. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,684 | An AI-native markdown IDE and LLM wiki — knowledge management built around LLM consumption from the start rather than bolted on after. |
| [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Jupyter Notebook | 939 | 30 runnable notebooks covering conversation buffers, vector stores, knowledge graphs, MemGPT, Mem0, Letta, Zep, Graphiti and LoCoMo benchmarks. The best single reference today for actually comparing agent-memory approaches instead of picking one blind. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 820 | Free, local, cross-tool memory engine (Cursor, Claude Code, Codex, OpenClaw, Hermes). One of several similar entrants today — see Community Hot Spots. |
| [riponcm/projectmem](https://github.com/riponcm/projectmem) | Python | 777 | Local MCP memory server that specifically warns an agent before it repeats a previously failed approach — a narrower, more testable claim than general "memory." |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 737 | Indexes and searches session history across 20 coding agents without any LLM or embeddings — a single local binary. |
| [volcengine/SearchCLI](https://github.com/volcengine/SearchCLI) | TypeScript | 1,175 | Open CLI for wiring AI search, recommendation, and conversational retrieval into agent and business systems, from ByteDance's Volcengine. |

## 3. Trend Signal Analysis

Today's data shows a clear split between two very active fronts. First, **agent memory and cross-session continuity** is having a moment: at least seven distinct projects (`riponcm/projectmem`, `CodeAbra/iai-personal-memory-engine`, `MaxFreedomPollard/Compartment`, `Patdolitse/piia-engram`, `liliu-z/stashbase`, `serradura/okf`, `vshulcz/deja-vu`) all launched or trended around the same problem — coding agents forget everything between sessions, and users want a durable, local, provider-agnostic memory layer they own rather than one baked into a single vendor's product. This is a strong, convergent signal that "session amnesia" is now the most commonly felt pain point across the CLI-agent ecosystem, ahead of raw model capability.

Second, **meta-harnesses and "agent OS" orchestrators** (`omnigent-ai/omnigent`, `EverMind-AI/Raven`, `agentlas-ai/Agentlas-OS`, `ruvnet/metaharness`, `sandbaseai/sandbase-harness`) are proliferating, all promising to let you swap Claude Code/Codex/Cursor/Gemini CLI interchangeably. The volume suggests real demand for harness-independence, but the marketing language is largely undifferentiated — this category needs more scrutiny before recommending any single winner.

Third, **MCP as the default integration surface** keeps widening past coding: it now covers browser debugging (`chrome-devtools-mcp`), binary debugging (`x64dbg-mcp-server`), financial data (`HiThink-Tech/Financial-API`), and backend infra (`butterbase`). MCP has effectively become the "USB-C port" for connecting any tool to any agent, independent of which model or harness is on the other end. Finally, on-device/CPU inference for very large models (Kimi K3, Gemma 4 26B-A4B) shows continued momentum in extreme quantization work, likely riding recent MoE releases.

## 4. Community Hot Spots

- **Local, cross-tool agent memory** — the single busiest theme today; worth tracking which of the ~7 competing projects (`riponcm/projectmem` and `vshulcz/deja-vu` stand out for concreteness) consolidates community mindshare.
- **MCP servers for non-coding tools** — `chrome-devtools-mcp` and `x64dbg-mcp-server` both show MCP moving into browser and binary debugging; expect more domain-specific MCP servers (databases, hardware, CAD) next.
- **Meta-harness / agent-OS orchestration** — high volume, low differentiation; useful to watch but not yet ready to bet on a specific winner.
- **Extreme low-resource LLM inference** — `kimi-k3-in-c` and `turbo-fieldfare` both push frontier-scale MoE models onto consumer CPUs/laptops; a good space for engineers interested in quantization and memory-mapped inference internals.
- **Pixel-native retrieval** (`StarTrail-org/PixelRAG`) — a genuinely different approach to RAG worth a second look if your pipeline currently fights HTML/PDF parsing brittleness.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
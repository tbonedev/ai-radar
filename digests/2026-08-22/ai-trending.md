# AI Open Source Trends 2026-08-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-22 07:27 UTC

---

# AI Open Source Trends Report — 2026-08-22

## 1. Finds

- **[turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. A concrete, verifiable efficiency claim rather than a vague "fast inference" pitch — worth a look for anyone doing on-device LLM work on consumer Apple hardware without a beefy unified-memory config.
- **[deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that indexes the session logs 18 different coding agents already write to disk (including sessions from before you installed it) and recalls them across any of those agents — no LLM calls, no embeddings. Useful for engineers juggling multiple CLI agents (Claude Code, Codex, etc.) who want continuity without standing up a memory service.
- **[img2threejs](https://github.com/img2threejs/img2threejs)** — Rebuilds an object from a reference image as a code-only, procedural, animation-ready Three.js model rather than a mesh dump, aiming for token efficiency in image-to-3D workflows. Worth trying for anyone doing generative 3D/web work who's hit context-budget walls with mesh-heavy approaches.
- **[MisakaNet](https://github.com/Ikalus1988/MisakaNet)** — A zero-dependency, git-backed micro-lesson library (Python stdlib only) letting AI agents asynchronously share and search verified debugging experience. A lightweight, unglamorous idea — agents leaving notes for each other via git — that's easy to adopt without new infra.
- **[opencodex](https://github.com/lidge-jun/opencodex)** — A universal provider proxy that lets Codex CLI/App/SDK and Claude Code talk to any backend model (Gemini, Grok, DeepSeek, Ollama, etc.). Useful for teams standardized on one CLI's UX but wanting to swap the underlying model per task or cost tier.
- **[OBLITERATUS](https://github.com/elder-plinius/OBLITERATUS)** — From a known jailbreak/red-team researcher; the repo description ("OBLITERATE THE CHAINS THAT BIND YOU") gives no concrete technical detail in the data available. Flagging as unclear/likely hype rather than a vetted tool — worth checking the README directly before relying on it.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [modular/modular](https://github.com/modular/modular) | Mojo | 0 (+913) | The Modular Platform (MAX + Mojo), a compiler/runtime stack aimed at unifying AI inference across hardware; today's surge suggests renewed community interest in Mojo as an AI-first language. |
| [microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) | C++ | 0 (+5) | Cross-platform ML inferencing/training accelerator; steady rather than explosive growth, included here as an established baseline for comparison. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 16,205 | A 20 MB cross-platform DB client for 90+ databases with a built-in AI assistant and MCP server — notable for bringing MCP natively into general dev tooling, not just agent frameworks. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 11,715 | Universal provider proxy for Codex/Claude Code, letting either CLI run against any LLM backend. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 4,852 | Open-source auth gateway connecting 1000+ SaaS providers to agents via SDK/CLI/MCP/HTTP/OpenAPI — infra for agent-to-SaaS integration at scale. |
| [NanoNets/Graft](https://github.com/NanoNets/Graft) | TypeScript | 3,971 | Adds codebase-specific contextual understanding to speed up and cut cost for Claude Code, Cursor, Codex and Gemini sessions. |
| [modelstudioai/cli](https://github.com/modelstudioai/cli) | TypeScript | 312 | Official CLI for Alibaba Cloud's Model Studio (百炼), exposing models/search/multimodal as structured tool calls for agent frameworks. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,156 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor and Pi under one policy/sandboxing layer, letting teams swap harnesses without rewriting workflows. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,151 | Local-first agent workspace spanning coding, writing, design, research and automation in one runtime, with both desktop GUI and TUI front ends. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,586 | Memory-first, self-improving agent harness built on EverOS with MiroThinker-powered deep research — targets long-horizon research tasks rather than one-shot coding. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 3,158 | A persistent workspace for development work designed to self-improve and continue across sessions rather than resetting each run. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 2,092 | Apache incubator project for a local-first AI agent workspace that records model messages, tool calls, results and permission decisions as an append-only log — notable for bringing agent auditability into an Apache governance model. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 599 | A meta-harness for scaffolding your own branded agent harness (own CLI, MCP server, memory, learning loop) rather than being a harness itself. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 418 | Multi-harness control plane with quota-aware rotation across multiple Claude/Codex subscriptions and shared thread context — useful for teams hitting rate limits across accounts. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | TypeScript | 90,249 | Local-first desktop app turning coding agents into a design engine for prototypes, decks and dashboards with real HTML/PDF/PPTX/MP4 export; extremely high star count signals this has crossed into mainstream adoption. |
| [nexu-io/html-anything](https://github.com/nexu-io/html-anything) | HTML | 8,405 | Agentic HTML editor with 75 skills across 9 output surfaces (deck, poster, social post, prototype, etc.), sandboxed preview and one-click export to WeChat/X/Zhihu. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 0 (+1,201) | Generates HD short videos from a topic or keyword via an automated AI workflow — today's spike suggests renewed interest in short-form AI video generation tools. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 5,995 | AI video skill for Claude Code/Codex built on Remotion, with 152 shot recipe cards and 209 motion previews for cinematic product videos. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 0 (+921) | Local, in-CLI job search tool: scans job portals, scores listings A–F, tailors CVs and tracks applications from inside Claude Code/Codex/OpenCode. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,309 | Local-first conversational AI video editor with a professional multi-track timeline plus Agent Skills and MCP integration. |
| [simonlin1212/TradingAgents-astock](https://github.com/simonlin1212/TradingAgents-astock) | Python | 3,050 | A-share-adapted multi-agent investment research framework with 7 analyst agents running bull/bear debate — a domain-specific fork of the broader TradingAgents pattern. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,238 | A text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation-gated updates, outputting deployable `best_skill.md` artifacts — an interesting alternative to weight fine-tuning for adapting agent behavior. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,258 | Gemma 4 26B-A4B inference in ~2 GB RAM on M-series Macs, making a mid-size model practical on ordinary consumer laptops. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [caura-ai/caura](https://github.com/caura-ai/caura) | Python | 436 | Governed shared memory for multi-agent, multi-tenant fleets (formerly MemClaw) with trust tiers, keystone policies, audit trails and a knowledge graph — targets teams running many agents that need to share state safely. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 761 | Free, local memory engine that works across Cursor, Claude Code, Codex and OpenClaw, aiming to persist personal working context between sessions. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 592 | Encrypted, fully offline agentic memory with a one-click install and a GUI memory map — notable for prioritizing privacy/offline operation over cloud memory services. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 402 | Turns local files into searchable context for AI agents — a lightweight local retrieval layer rather than a full vector-DB stack. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Svelte | 401 | Local-first desktop app converting scanned PDFs and document folders into clean, AI-ready Markdown offline, using far fewer tokens than vision-model-based extraction. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,027 | Equity research agent combining resilient workflows, evidence-grounded RAG, versioned reports and automated quality evaluation — a vertical RAG application for finance research. |
| [DevYangJC/Argus](https://github.com/DevYangJC/Argus) | Java | 324 | Open-source RAG knowledge base platform on Spring Boot + pgvector + Spring AI Alibaba, using MinIO and Elasticsearch for storage/retrieval. |

## 3. Trend Signal Analysis

Today's data is dominated by one pattern: **agent harnesses and meta-harnesses**, often explicitly positioned as "swap Claude Code/Codex/Cursor/Gemini CLI without rewriting" layers (omnigent, ruflo, metaharness, sandbase-harness, claudexor, ECC). This suggests the ecosystem has moved past choosing *which* CLI agent to standardize on and into an interoperability phase — multiple projects now treat the underlying coding agent as a swappable backend rather than a platform choice. Closely related is a fresh explosion of **agent memory** projects (deja-vu, caura, Compartment, piia-engram, iai-personal-memory-engine, MisakaNet) — nearly a dozen independent, mostly non-overlapping approaches to persisting agent context across sessions appeared in a single day, indicating this is an unsolved problem many teams are attacking in parallel rather than one with an obvious winner.

A second visible thread is **AI Skills as a distribution unit** — packaged, reusable "Skill" bundles for Claude Code and Codex (job hunting, bug hunting, chart generation, translation, ML training) are proliferating faster than new base frameworks, suggesting the Skills format itself is becoming the primary way third parties extend coding agents, more so than MCP servers or plugins.

Finance/trading agents adapted to China's A-share market (TradingAgents-astock, Vibe-Research, tickflow-stock-panel, goutoujunshi) form a distinct regional cluster, reflecting continued localization of the TradingAgents pattern rather than a new industry event. No single major LLM release appears to be driving today's list; the signal is architectural/tooling maturation rather than model-driven.

## 4. Community Hot Spots

- **Agent memory is the hot unsolved problem** — a dozen independent local/offline memory projects launched near-simultaneously; worth watching which approach (embedding-free indexing like deja-vu vs. governed knowledge graphs like caura) gets adopted broadly.
- **Meta-harnesses over single-agent frameworks** — builders are increasingly wrapping existing coding agents (Claude Code, Codex, Cursor) rather than building new ones from scratch, treating the underlying LLM/CLI as commodity infrastructure.
- **Skills as the packaging unit of choice** — expect more vertical, narrow "Skill bundles" (bug hunting, career ops, chart generation) rather than general-purpose plugins; low effort to try, easy to fork.
- **On-device efficiency claims are becoming concrete** — turbo-fieldfare's 2 GB RAM / 26B model claim is worth tracking as a bar for future "runs on a laptop" projects to be held to.
- **Watch for hype-only repos** — at least one high-visibility repo today (OBLITERATUS) ships strong branding with no discernible technical substance in its description; verify before adopting anything trending purely on star velocity.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
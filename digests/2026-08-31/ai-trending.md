# AI Open Source Trends 2026-08-31

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-31 14:47 UTC

---

# AI Open Source Trends Report — 2026-08-31

## 1. Finds

**[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs the full 2.78-trillion-parameter Kimi K3 on a single CPU in 8.24 GB of RAM, in portable C99 with no BLAS, no framework, no GPU. Worth a look for anyone studying extreme quantization/inference engineering rather than production use — it's a proof-of-concept, not a deployable server.

**[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Gets Gemma 4 26B-A4B running in ~2 GB of RAM on any M-series MacBook. Useful for developers who want a large, capable model running fully local on consumer Apple Silicon without cloud calls.

**[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — A pixel-native retrieval approach that skips HTML/DOM parsing entirely and searches rendered page images instead, backed by an arXiv paper (2606.28344). Interesting for teams whose RAG pipelines keep breaking on messy web parsing; still early and unproven at scale.

**[microsoft/SkillOpt](https://github.com/microsoft/SkillOpt)** — A text-space optimizer that trains reusable natural-language "skills" for frozen LLM agents via trajectory-driven edits and validation-gated updates, producing a deployable `best_skill.md`. Relevant to anyone building agent skill libraries who wants a principled way to iterate on prompts instead of hand-tuning them.

**[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that indexes the session history your coding agents (Claude Code, Codex, Cursor, and 17 more) already write to disk, and makes it searchable — no LLM, no embeddings. A pragmatic tool for developers who've lost track of "didn't I already solve this last week?" across multiple CLI agents.

**[p-e-w/heretic](https://github.com/p-e-w/heretic)** — Fully automatic tool for removing refusal/censorship behavior from open-weight language models. Useful for researchers and fine-tuners who need uncensored base models for legitimate red-teaming or research; note the dual-use nature and use responsibly.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 12,696 | Universal provider proxy letting Codex CLI/App/SDK and Claude Code talk to any backend (Claude, Gemini, Grok, DeepSeek, Ollama). Useful for teams standardizing on one harness UI while shopping between model vendors. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 6,900 | A 2.78T-parameter Kimi K3 running CPU-only inference in 8.24 GB RAM, pure C99. A striking efficiency demo more than a production engine. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,522 | Gemma 4 26B-A4B inference in ~2 GB RAM on M-series MacBooks. Shows how far local LLM inference on consumer hardware has come. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,454 | Open-source auth gateway connecting 1,000+ SaaS providers to AI agents via SDK, CLI, MCP, HTTP and OpenAPI. Aimed at teams tired of writing bespoke OAuth glue for every tool integration. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 742 | Local, LLM-free search over coding-agent session history across 20+ tools, single binary. Practical recall tool, not a hype project. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0 (+199) | Fast Rust library for PDF classification (scanned vs. text) to drive smart routing decisions in ingestion pipelines. From the Firecrawl team, so likely well-integrated with their crawler. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 425 | Multi-harness control plane with quota-aware rotation across Claude/Codex subscriptions and cross-model review. Niche but addresses a real pain point for heavy multi-account users. |
| [modelstudioai/cli](https://github.com/modelstudioai/cli) | TypeScript | 320 | Official CLI for Alibaba Cloud's Model Studio (百炼), exposing models/search/multimodal as structured tool calls for agent frameworks. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,543 | Meta-harness orchestrating Claude Code, Codex, Cursor, Pi and custom agents with policy enforcement and sandboxing, swappable without rewrites. Part of a broader trend of harness-of-harnesses tools this week. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,261 | Local-first agent workspace spanning coding, writing, design, research and automation, with both desktop GUI and TUI runtimes. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 4,292 | Apache incubating project for a local-first agent workspace that records tool calls, permission decisions and terminations as an append-only log — notable for landing under the ASF umbrella. |
| [strukto-ai/mirage](https://github.com/strukto-ai/mirage) | TypeScript | 3,589 | Claims to be the first unified virtual filesystem for AI agents — an abstraction layer for agents to share file state. Interesting concept, worth checking maturity before adopting. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 3,478 | A persistent development workspace designed to self-improve and continue work across sessions rather than resetting each time. |
| [makecindy/cindy](https://github.com/makecindy/cindy) | TypeScript | 2,367 | An open-source, out-of-the-box AI agent positioned as a "just works" alternative to more configuration-heavy harnesses. |
| [ShenSeanChen/waku-agent](https://github.com/ShenSeanChen/waku-agent) | Python | 1,628 | A local-first agent harness (loop, memory, eval) built to stay legible/readable as it scales — targeted at developers who want to own and understand their agent stack rather than depend on a black box. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 624 | A meta-harness for scaffolding your own branded agent harness with its own CLI, MCP server, memory and learning loop, compatible with Claude Code, Codex, Hermes and OpenClaw. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | TypeScript | 0 (+2,819) | Multi-agent interactive classroom from Tsinghua's MAIC group, one-click immersive multi-agent learning experience. Fresh launch with an unusually large single-day star spike worth watching for sustained interest. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 6,887 | An AI video skill for Claude Code/Codex with 152 shot recipe cards and 209 motion previews for producing cinematic product videos via Remotion. |
| [Waishnav/devspace](https://github.com/Waishnav/devspace) | TypeScript | 4,343 | A minimal coding-agent harness over MCP that lets ChatGPT, Claude, Hermes, Grok Bot and OpenClaw share the same lightweight interface. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,498 | Local-first conversational AI video editor with a professional multi-track timeline, Agent Skills and MCP integration. |
| [HiThink-Tech/Financial-API](https://github.com/HiThink-Tech/Financial-API) | TypeScript | 2,061 | Official Tonghuashun (HiThink) A-share financial data service exposed via API/MCP/CLI/Python, aimed at agent-driven quantitative research. |
| [Osmantic/ODS](https://github.com/Osmantic/ODS) | Python | 0 (+331) | Turns a spare PC/Mac/Linux box into a self-hosted AI server: inference, chat UI, voice, agents, RAG and image generation in one package. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 525 | Turns a coding agent into a video studio — describe a video in plain language and the agent writes the timeline and renders the file. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,532 | Text-space optimizer that trains reusable natural-language skills for frozen agents via trajectory-driven edits and validation gating. A genuinely new approach to "training" agent behavior without touching model weights. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 0 (+472) | Trains a 64M-parameter LLM completely from scratch in about 2 hours — a well-known educational project for understanding the full LLM training pipeline end to end. |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Python | 0 (+536) | Fully automatic censorship/refusal removal for open-weight language models — useful for research and red-teaming contexts. |
| [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) | Python | 0 (+384) | RL training environments for the Microduck robot platform (built on mjlab), for teams working at the intersection of robotics and reinforcement learning. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,816 | Pixel-native retrieval that searches rendered page images instead of parsed HTML/text, backed by a published arXiv paper. A genuinely novel direction for RAG if it holds up at scale. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,800 | An AI-native markdown IDE that doubles as an LLM-queryable wiki, for teams wanting documentation that's both human-editable and agent-searchable. |
| [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Jupyter Notebook | 945 | 30 runnable notebooks covering conversation buffers, vector stores, knowledge graphs, MemGPT, Mem0, Letta, Zep and Graphiti — a solid reference for engineers designing agent memory systems from scratch. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 828 | A persistent, local memory layer that learns how you work over time and plugs into Cursor, Claude Code, Codex and OpenClaw. |
| [riponcm/projectmem](https://github.com/riponcm/projectmem) | Python | 785 | Records issues, fix attempts and decisions, then actively warns your coding agent before it repeats an approach that already failed. A practical, narrow tool solving a real recurring annoyance. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 498 | Turns local files into searchable context for AI agents — a lightweight local retrieval layer. |

## 3. Trend Signal Analysis

Today's clearest pattern is the rise of the **meta-harness**: omnigent, metaharness, sandbase-harness, KiroCrew, Raven, and Apache's new incubating project maka all sit on top of existing coding agents (Claude Code, Codex, Cursor) rather than replacing them, adding orchestration, policy, sandboxing, or persistence. The ecosystem seems to be consolidating around a small set of underlying agent CLIs while competing on the orchestration layer above them — a maturity signal, not a novelty one.

A second, quieter cluster is **local, LLM-free agent memory**: deja-vu, projectmem, and piia-engram all index or recall information about past coding-agent sessions without calling out to a model, emphasizing locality, portability across tools, and zero telemetry. This is a genuinely new sub-category distinct from RAG-style vector memory.

Third, extreme-efficiency inference is having a moment — kimi-k3-in-c (a 2.78T model in 8GB RAM, CPU-only) and turbo-fieldfare (Gemma 4 26B in 2GB RAM on a MacBook) both push quantization and portability to new extremes, suggesting continued appetite for running frontier-scale models without cloud infrastructure, likely riding on recent Kimi K3 and Gemma 4 releases.

Fourth, **Agent Skills** keep expanding into narrow vertical domains — journal publishing, patent drafting, social media research, drama scripts — treating expert knowledge as a portable, cross-tool artifact (Claude Code, Codex, Cursor, Grok Build) rather than custom agent code.

One caution: several brand-new, single-purpose repos show unusually high star counts (3,000–9,500) with generic descriptions and thin context — a pattern consistent with star-farming on GitHub trending. Treat raw star counts on obscure new accounts skeptically.

## 4. Community Hot Spots

- **Local, LLM-free memory/recall for coding agents** — [deja-vu](https://github.com/vshulcz/deja-vu) and [projectmem](https://github.com/riponcm/projectmem) solve the "have I done this before" problem without adding another model call; worth trying if you juggle multiple CLI agents.
- **Extreme-efficiency inference** — [kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) and [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) demonstrate frontier-scale models running on commodity CPU/laptop RAM, useful reading for anyone doing quantization work.
- **Meta-harnesses consolidating around existing coding agents** — [omnigent](https://github.com/omnigent-ai/omnigent), [metaharness](https://github.com/ruvnet/metaharness), and Apache's [maka](https://github.com/apache/maka) all orchestrate rather than replace Claude Code/Codex/Cursor; watch which of these gets real adoption versus which stays a wrapper.
- **Vertical Agent Skills marketplaces** — journal-publishing, patent-drafting and scientific research skills packs signal that "skills" are becoming a distribution format for domain expertise, not just prompt snippets.
- **Prompt/skill optimization as its own discipline** — [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) treats skill-writing as an optimizable, validation-gated process rather than manual iteration, a direction worth following if you maintain a large skill library.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
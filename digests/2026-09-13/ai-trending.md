# AI Open Source Trends 2026-09-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-13 12:30 UTC

---

# AI Open Source Trends Report — 2026-09-13

## 1. Finds

- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — A pure-C, zero-dependency engine that runs frontier MoE models by streaming individual experts off disk instead of holding them all in RAM/VRAM. Worth trying for anyone who wants to run large MoE models on a consumer machine without a beefy GPU; +652 stars today suggests real developer interest, but it's early (no track record yet) so treat it as promising rather than production-proven.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server that acts like "ripgrep for AI context": it finds the relevant code for a task without an agent reading the whole repo, then reports blast radius and which tests to run before you commit to a change. Useful for anyone building or driving coding agents who wants to cut context/token waste — the claimed 74.7% size reduction from signatures vs. full bodies is a concrete, checkable number rather than a vague productivity claim.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds shared memory across 20+ coding agents/harnesses (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, etc.) purely from session history already on disk — no LLM calls, no embeddings. Interesting for developers who bounce between multiple agent CLIs and are tired of re-teaching each one the same fix; the "no LLM, no embeddings" design is a notable simplicity choice worth studying even if you don't adopt it directly.
- **[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — An arXiv-backed (2606.28344) approach to retrieval that works on rendered pixels instead of parsed text/HTML, pitched as ending brittle web-parsing pipelines. Relevant to anyone building RAG over messy real-world documents/webpages where text extraction is the actual bottleneck; worth a skeptical read of the paper before adopting, since "end of web parsing" is a strong claim for a same-day trending repo.
- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** — A fully local, open-source alternative to ElevenLabs: voice cloning, voice design, dubbing, dictation, transcription, and audiobook generation across 646 languages. Good fit for developers who want voice AI without a per-minute API bill or cloud dependency; +2,546 stars today is the largest single-day jump in this dataset and signals genuine pent-up demand for a local ElevenLabs substitute.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model for inference on a single CPU in 8.24 GB RAM, written in portable C99 with no BLAS, framework, or GPU. Mostly of interest to engineers who want to understand how far model-serving efficiency tricks (offloading, quantization, streaming) can be pushed on commodity hardware — this reads as a serious engineering demo, not a toy.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [colibri](https://github.com/JustVugg/colibri) | C | 0 (+652) | Zero-dependency engine that runs frontier MoE models on owned hardware by streaming experts from disk. Fast same-day traction (+652) for a brand-new repo. |
| [kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 7,816 | Runs a 2.78T-parameter Kimi K3 model on a single CPU in 8.24 GB RAM, in dependency-free C99. A concrete demonstration of how far CPU inference of huge models can go. |
| [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,722 | Runs Gemma 4 26B-A4B inference in ~2 GB RAM on any M-series MacBook. Notable for making a mid-size model practical on ordinary laptop hardware. |
| [ripwire](https://github.com/redhat-et/ripwire) | C++ | 1,932 | Zero-dependency C++23 CLI + MCP server that finds relevant code and computes blast radius/test impact for coding agents without a full repo read. Claims 74.7% fewer bytes read via signatures vs. bodies. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 0 (+102) | The standard model-definition framework for state-of-the-art ML across text, vision, audio and multimodal. Already well known, but still pulling +102 stars today. |
| [CPA-Manager-Plus](https://github.com/seakee/CPA-Manager-Plus) | Go | 3,392 | Self-hosted management panel and observability dashboard for CLI-proxy-based AI gateways — usage, cost, quota, failures, account health. Useful for teams running their own multi-provider LLM gateway. |
| [Model Studio CLI](https://github.com/modelstudioai/cli) | TypeScript | 331 | Official CLI for Alibaba Cloud's Model Studio (百炼), exposing models, search, multimodal and workflow capabilities as structured tool calls for agent frameworks. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,900 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting you swap harnesses without rewriting policies or sandboxing. Addresses the real pain of harness lock-in as agent CLIs multiply. |
| [Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,309 | Local-first AI agent workspace for coding, writing, design, research and automation, with one runtime spanning desktop GUI and TUI. Appeals to developers wanting a single local hub instead of juggling separate tools. |
| [Fuxi](https://github.com/fuxicodex/Fuxi) | Python | 3,408 | Self-contained terminal coding agent with cost-aware routing across LLM providers. Targets developers who want provider flexibility baked into the agent loop itself. |
| [OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 0 (+452) | Runs parallel research agents against any model backend. From alphaXiv, a known academic-search outfit, which lends it more credibility than an anonymous same-day repo. |
| [PentAGI](https://github.com/vxcontrol/pentagi) | Go | 0 (+613) | Fully autonomous AI agent system for complex penetration-testing tasks. Relevant to authorized security researchers/red teams automating recon and exploitation workflows; dual-use, so scope of use matters. |
| [metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 650 | Scaffolds a custom branded agent harness (CLI, MCP server, memory, learning loop) that works across Claude Code, Codex, pi.dev, OpenClaw and a hardware-isolated sandbox. Interesting for teams building an internal agent product on top of existing harnesses. |
| [MathModelAgent](https://github.com/jihe520/MathModelAgent) | Python | 0 (+268) | Agent purpose-built for mathematical modeling competitions — automatically completes a math-modeling task and generates a submission-ready paper. Narrow but well-defined use case for students/researchers in that niche. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 0 (+2546) | Fully local, open-source ElevenLabs alternative: voice cloning, voice design, dubbing, dictation, transcription and audiobook creation across 646 languages. Today's biggest single-day star gain in this dataset, suggesting strong demand for a local voice-AI stack. |
| [genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 6,642 | Free, open-source AI office suite (Docs/Sheets/Slides/PDF) that edits real .docx/.xlsx/.pptx files with a built-in agent, bring-your-own-key, cross-platform. Aimed at people who want office-suite AI without a subscription. |
| [video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 8,312 | AI video skill for Claude Code/Codex built on Remotion, with 152 shot-recipe cards and 209 motion previews for cinematic product videos. Useful for marketers/devs producing branded video via a coding agent rather than a dedicated video tool. |
| [dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | JavaScript | 8,109 | Agent skill that generates browser-editable presentations across multiple visual themes, exportable to HTML/PDF/PPTX. Handy for anyone who wants deck generation inside their existing coding-agent workflow. |
| [OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,792 | Local-first conversational AI video editor with a professional multi-track timeline, Agent Skills and MCP integration. Targets creators who want agent-driven editing without cloud lock-in. |
| [PawWork_ZhuaZhua](https://github.com/Player-YN/PawWork_ZhuaZhua) | JavaScript | 2,597 | Selection-first web agent for Chrome — select something on a live page, describe the outcome, get an editable office file back, sandboxed and bring-your-own-key. A lightweight alternative to full browser-automation agents for one-off tasks. |
| [AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 830 | Organizes inspiration, characters, worldbuilding, outlines and revisions into a controllable AI novel-writing workflow, with Ollama and DeepSeek-Harness plugin previews. Niche but well-scoped for long-form fiction writers experimenting with local models. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [YuE (YuE2)](https://github.com/multimodal-art-projection/YuE) | Python | 0 (+500) | Frontier music-generation model with symbolic planning, zero-shot covers and agentic music editing. Relevant to anyone building generative-audio products who wants an open alternative to closed music-gen APIs. |
| [utopia](https://github.com/deeplethe/utopia) | Rust | 7,307 | Billed as "world's first open-source enterprise world model." Description is heavy on marketing language and light on concrete detail — worth watching but treat as unproven until there's a technical writeup or benchmark. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,944 | Pixel-native retrieval that skips text/HTML parsing entirely, backed by an arXiv paper (2606.28344). Attractive for RAG over messy real-world documents where parsing — not retrieval — is the actual failure point. |
| [open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,196 | AI-native markdown IDE that doubles as an LLM wiki. Useful for teams who want their knowledge base to be both human-editable and directly queryable by an LLM. |
| [deja-vu](https://github.com/vshulcz/deja-vu) | Go | 803 | Cross-agent shared memory built from existing session history, no LLM or embeddings required, single local binary. Solves the "I fixed this in Codex but Claude Code doesn't know" problem. |
| [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 616 | Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with sub-300µs in-memory BM25 search and an embedded MCP server; claims 80% token-bloat reduction with zero external databases. |
| [tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 316 | Free MCP server + CLI over 22.5M Taiwanese court judgments and administrative rulings, with citation verification. Narrow but genuinely useful for legal-tech work in that jurisdiction. |
| [uteke](https://github.com/codecoradev/uteke) | Rust | 240 | Local-first memory engine for AI agents with semantic-embedding search, single Rust binary, zero config, fully offline. One of several small local-memory tools appearing today. |
| [engrim](https://github.com/timgordontg/engrim) | Python | 240 | "Universal Cross-Model Episodic Memory Standard" — a local SQLite memory engine meant to work across Antigravity, Claude Code, Cursor, Windsurf and Codex. Ambitious framing for a very new, low-star repo; worth watching for adoption rather than adopting immediately. |

## 3. Trend Signal Analysis

The clearest pattern today is a wave of **cross-harness, vendor-agnostic tooling**. Rather than building yet another single-vendor agent, developers are building the connective tissue between agents that already exist: memory that survives switching from Claude Code to Codex to Cursor ([deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory), [engrim](https://github.com/timgordontg/engrim)), meta-harnesses that scaffold a new agent product on top of several existing ones ([omnigent](https://github.com/omnigent-ai/omnigent), [metaharness](https://github.com/ruvnet/metaharness)), and quota-rotation control planes across multiple subscriptions ([claudexor](https://github.com/razzant/claudexor)). This suggests the coding-agent market has hit the "too many good options" stage, and the interesting new work is in interoperability rather than yet another harness.

A second theme is **extreme-efficiency local inference**: a 2.78T-parameter model on a single CPU ([kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)), Gemma 4 26B in ~2 GB RAM on a MacBook ([turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)), and disk-streamed MoE experts ([colibri](https://github.com/JustVugg/colibri)) all point to continued pressure to run frontier-scale models without a GPU cluster — likely a reaction to how large recent open models (Kimi K3, Gemma 4) have gotten.

Third, the **Agent Skills format is becoming cross-vendor packaging**, not Claude-specific — several repos explicitly target "any Agent Skills-compatible agent" or list compatibility with Claude Code, Codex, Grok Build, and Antigravity in the same breath, and a dedicated skill registry ([agent-skills](https://github.com/tech-leads-club/agent-skills)) has emerged to curate them.

Finally, autonomous agents are visibly moving into **offensive/defensive security workflows** (pentesting, reverse engineering), a dual-use area worth tracking for both red-team tooling and detection research.

## 4. Community Hot Spots

- **Cross-agent memory tools** ([deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)) — solve a real, widely-felt pain (re-teaching every new agent CLI the same fixes) with genuinely different approaches (derived-from-history vs. structured protocol); worth comparing directly.
- **CPU/edge inference for huge models** ([kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c), [colibri](https://github.com/JustVugg/colibri), [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)) — a concentrated cluster of "run it without a GPU" projects landing the same day is a signal that this is a live area, not a one-off.
- **[ripwire](https://github.com/redhat-et/ripwire)** — a context-efficiency tool for coding agents with a concrete, checkable efficiency claim (74.7% fewer bytes); worth trying if your agent workflow is burning tokens re-reading the same repo.
- **Local, self-hosted alternatives to paid AI services** ([VoiceStudio](https://github.com/debpalash/VoiceStudio) vs. ElevenLabs, [genoffice](https://github.com/genspark-ai/genoffice) as an office suite) — both picked up large same-day star counts, suggesting real appetite for local substitutes to subscription AI tools.
- **[PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — a genuinely different retrieval approach (pixels instead of parsed text) backed by a paper; worth a read even if you don't adopt it, since it challenges a long-standing RAG assumption.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
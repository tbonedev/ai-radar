# AI Open Source Trends 2026-09-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-14 13:35 UTC

---

# AI Open Source Trends Report — September 14, 2026

## 1. Finds

**[JustVugg/colibri](https://github.com/JustVugg/colibri)** — A pure-C, zero-dependency engine that runs frontier MoE models by streaming experts from disk instead of loading them all into RAM/VRAM. Worth a look for anyone who wants to run huge open-weight models on a single machine without a GPU cluster; it's today's single biggest organic gainer (+868 stars) in the trending list, suggesting real developer interest rather than a bot pump.

**[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU using only 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, and no GPU. A genuinely impressive engineering feat for researchers and hobbyists who want to understand or deploy giant MoE models without specialized hardware — read the code before trusting throughput claims, since correctness and speed of a from-scratch C inference stack for a model this size deserve scrutiny.

**[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI and MCP server billed as "the ripgrep of AI context": it lets a coding agent find relevant code by signature (74.7% smaller than full bodies) instead of reading the whole repo, then verifies a change's blast radius and which tests to run. Useful for teams building their own coding-agent tooling who are tired of paying token costs just to give an agent situational awareness — and it comes from Red Hat's emerging-tech group, which lends it more credibility than the average weekend MCP server.

**[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — A retrieval engine that skips HTML/PDF parsing entirely and searches documents as pixels, backed by a published paper (arXiv:2606.28344). Worth trying for RAG engineers who are fighting brittle web-scraping and layout-parsing pipelines and want to bypass that step altogether — the approach is unusual enough to be genuinely new rather than a repackaging of existing vector-DB RAG.

**[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory store from the session history already on disk across 20+ coding-agent CLIs (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, etc.) — no LLM, no embeddings. A fix found in one agent surfaces in the others, including sessions from before install. Practical for developers who bounce between multiple agent CLIs and are frustrated that none of them remember what another one learned.

**Hype flag:** [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) is popular today (+706 stars) and does concretely deliver extracted system prompts from major labs — useful reference material for prompt-engineering study, but treat contents as unverified leaks rather than authoritative documentation, and note the provenance/legal ambiguity around republishing leaked prompts.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 0 (+868) | Zero-dep engine for running frontier MoE models with experts streamed from disk. Today's largest organic gain in the trending list. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 7,895 | Runs a 2.78T-parameter Kimi K3 on a single CPU in 8.24 GB RAM, pure C99, no GPU or BLAS. A notable proof point for extreme-efficiency inference. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,728 | Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. Part of a same-day cluster of "run huge models on tiny hardware" projects. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 14,604 | Universal provider proxy letting Codex/Claude Code CLIs and SDKs swap in any LLM backend (Gemini, Grok, DeepSeek, Ollama). Solves real lock-in pain for teams standardizing on one harness. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,019 | Ripgrep-style context tool + MCP server for coding agents; compact signatures and blast-radius checks instead of full-repo reads. Backed by Red Hat. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,730 | Open-source auth gateway connecting 1,500+ SaaS providers to AI agents via SDK/CLI/MCP/HTTP/OpenAPI — addresses the tedious "give my agent API access" problem at scale. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 811 | Shared memory across 20+ coding-agent CLIs built from existing session logs, no LLM or embeddings required. Single local binary. |
| [mjasnikovs/pi-task](https://github.com/mjasnikovs/pi-task) | TypeScript | 82 | Deterministic spec-orchestration pipeline (refine→research→grill→compose→critique) for local LLMs in the `pi` coding agent. Early-stage but a clear, concrete workflow design. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0 (+756) | Multi-agent LLM framework for financial trading research. Strong same-day traction (+756) suggests active quant/finance community pickup. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,928 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents under shared policy/sandboxing without rewriting them. Addresses real multi-tool fragmentation. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 0 (+640) | Single CLI giving an agent read/search access across Twitter, Reddit, YouTube, GitHub, Bilibili and XiaoHongShu with zero API fees. Notable if the "zero API fees" claim holds up under scrutiny — worth verifying ToS compliance before production use. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 5,385 | Apache Incubating agent workspace that records a complete history of everything it did. Apache incubation lends it more institutional weight than a typical agent-workspace repo. |
| [ongridio/ongrid](https://github.com/ongridio/ongrid) | Go | 1,041 | Ops-focused AI agent that diagnoses and fixes infrastructure issues directly from Slack/Telegram/Lark/DingTalk. A concrete SRE-automation use case rather than a generic agent framework. |
| [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | TypeScript | 7,083 | Local multi-agent harness that runs a whole "office of agents" on top of existing Claude Code/Codex subscriptions. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 0 (+2,632) | Fully local, open-source ElevenLabs alternative: voice cloning, voice design, dubbing, transcription and audiobooks in 646 languages. By far the largest single-day gain in this entire dataset — a strong signal of demand for local TTS. |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | Python | 0 (+204) | Tokenizer-free TTS model for multilingual speech, creative voice design and true-to-life cloning. Adds a second serious open TTS contender alongside VoiceStudio on the same day. |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | Python | 0 (+487) | YuE2: frontier open music generation with symbolic planning, zero-shot covers and agentic editing — one of the few genuinely capable open music-gen projects trending today. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 6,739 | Free, open-source AI office suite (Docs/Sheets/Slides/PDF) plus a CLI and agent skill so Claude Code, Codex and Cursor can edit real .docx/.xlsx/.pptx files locally, BYOK. A concrete, non-hypey take on "AI Office." |
| [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) | Python | 15,954 | Rebuilds an object from a reference image as a code-only, procedural, animation-ready Three.js model — a token-efficient image-to-3D pipeline distinct from mesh-generation approaches. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 663 | AI-assisted PCB design plugin for KiCAD 10 — a single Rust binary exposing 217 schematic/layout/routing tools to Claude or any LLM. A niche but concrete hardware-design use case, rare among LLM-tooling repos. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,951 | Pixel-native search/retrieval that skips document parsing entirely, backed by a published paper (arXiv:2606.28344). A structurally different approach to RAG ingestion. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 641 | Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, sub-300µs in-memory BM25 search, no external DB — claims 80% token-bloat reduction. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 255 | A proposed "universal cross-model episodic memory standard" — local-first, project-scoped SQLite engine working across Antigravity, Claude Code, Cursor, Codex CLI and OpenCode. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 317 | Taiwan legal RAG MCP server covering 22.5 million court rulings and administrative interpretations with citation verification, free and registration-free. A well-scoped vertical RAG deployment. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 243 | Local-first memory engine for AI agents with semantic embeddings in a single, zero-config Rust binary. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,038 | Multimodal parsing engine paired with an ontology-driven, LLM-wiki knowledge engine — positions itself as an "AI-ready" document pipeline rather than a bare vector store. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 587 | Encrypted, fully offline agentic memory with a GUI memory map, one-click install across OS/agents. |

---

## 3. Trend Signal Analysis

Today's clearest signal is a cluster of projects racing to run enormous MoE models on ordinary hardware: [colibri](https://github.com/JustVugg/colibri) streams experts from disk in pure C, [kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) squeezes a 2.78T-parameter model into 8.24 GB of CPU RAM, and [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) runs Gemma 4 26B-A4B in ~2 GB on Apple Silicon. This is a distinct direction from last year's "bigger clusters, more GPUs" narrative — it tracks with recent releases of very large but sparse MoE models (Kimi K3, Gemma 4) that make disk/CPU-offload techniques newly worthwhile.

A second theme is agent memory fragmentation and its fix: as developers now run many different coding-agent CLIs side by side (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, DeepSeek Harness), several projects ([deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory), [engrim](https://github.com/timgordontg/engrim), [Compartment](https://github.com/MaxFreedomPollard/Compartment)) are converging on local-first, non-embedding memory layers that work across tools rather than inside one vendor's silo — a maturation beyond simple RAG.

Third, MCP is clearly becoming the default plumbing for connecting agents to specialized domains — hardware waveform debugging ([wave-mcp](https://github.com/Tencent/wave-mcp)), PCB design ([Konnect](https://github.com/mixelpixx/Konnect)), reverse engineering ([open-reverselab](https://github.com/LING71671/open-reverselab)), and vertical legal search ([tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag)) all shipped MCP servers this cycle, not just chat plugins.

One caution: star counts are an unreliable signal on their own. [ponytail](https://github.com/DietrichGebert/ponytail) shows 137,987 total stars with zero today, an inconsistency worth discounting, and [deeplethe/utopia](https://github.com/deeplethe/utopia)'s "world's first" framing warrants skepticism until verified independently.

---

## 4. Community Hot Spots

- **CPU/disk-offload inference for huge MoE models** — [colibri](https://github.com/JustVugg/colibri), [kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c), and [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) all landed the same day, signaling real demand for running frontier-scale models without GPU farms.
- **Cross-agent shared memory** — [deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) and [engrim](https://github.com/timgordontg/engrim) target the same pain point (agents forgetting context between tools) with different, mostly LLM-free architectures — worth comparing before picking one.
- **Niche domain MCP servers** — hardware debugging ([wave-mcp](https://github.com/Tencent/wave-mcp), [x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server)) and PCB design ([Konnect](https://github.com/mixelpixx/Konnect)) show MCP expanding well past chat and coding use cases into specialized engineering tooling.
- **Multi-harness control planes** — [omnigent](https://github.com/omnigent-ai/omnigent), [claudexor](https://github.com/razzant/claudexor) and [metaharness](https://github.com/ruvnet/metaharness) all address quota/policy management across multiple simultaneous agent subscriptions, a byproduct of developers now running several coding-agent CLIs at once.
- **Local, non-embedding retrieval** — [PixelRAG](https://github.com/StarTrail-org/PixelRAG)'s pixel-native search and BM25-based [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) both skip traditional embedding pipelines entirely, suggesting some RAG builders are moving away from vector databases for specific workloads.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
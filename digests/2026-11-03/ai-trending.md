# AI Open Source Trends 2026-11-03

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-03 14:49 UTC

---

# AI Open Source Trends Report, 2026-11-03

## 1. Finds

- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** (C, +803 today): An inference engine for large MoE models that keeps hot experts on the GPU (CUDA or Vulkan), warm experts in RAM, and cold experts streamed from NVMe. It is for people who want to run frontier-size MoE models on a single consumer box. The tiering idea is sound, but I can't tell from the data whether it has benchmarks, so check tokens/s before committing.
- **[p-e-w/heretic](https://github.com/p-e-w/heretic)** (Python, +699): Modifies a language model without training, to remove refusals and censorship, suppress "slop" phrasing, and reduce sycophancy. It suits people working with open-weight models who want to adjust behavior cheaply. It is dual-use, so review the output models before deploying them.
- **[max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)** (Rust, +437): A CLI for managing Git worktrees, built for running several AI coding agents in parallel, each in its own checkout. It is for anyone running multiple Claude Code or Codex sessions on one repo who is tired of branch collisions. It solves a narrow but real problem.
- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** (Rust, +3,792): A computer-use CLI that lets agents operate a desktop. It is the biggest star mover today and comes from a lab with a credible track record. It is worth trying if you build agents that need GUI access without a vendor-specific SDK. It is probably early-stage.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** (Python, 4,618 stars): Black-box, experience-driven cost control for coding agents. It cuts token spend without access to model internals. Teams with large agent bills should read it. The listing gives no measured savings, so treat the claim as unverified.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** (C++, 2,510 stars): A zero-dependency CLI and MCP server that gives coding agents compact code signatures instead of whole files. It also reports blast radius and tests to run. It claims 74.7% fewer bytes than bodies, which is a concrete number you can verify. It is for people who hit context limits on large repos.

**Caution:** Several high-star entries look unreliable. Examples are [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) (58,656 stars, "unlimited free frontier models, no API key") and [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) (51,003 stars, tagged `claude-code` but a TV debloater). Their star counts are out of line with how new these projects are. Possible causes are star inflation, promotional tagging, or a free-access scheme that could be risky to install. Verify before running anything.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | n/a (+803) | Hierarchical MoE inference across GPU, RAM and NVMe. It targets running big MoE models on hardware you already own. |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | n/a (+3,792) | Computer-use CLI for AI agents. It had the largest single-day jump in the list. |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Rust | n/a (+437) | Git worktree manager for parallel agent workflows. It removes a common friction point when running many agents. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,510 | CLI and MCP server giving agents signature-level code context. It claims 74.7% fewer bytes than full bodies. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 4,618 | Cost control for coding agents without model access. It is a notable first-party effort on agent spend. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 28,969 | Menu-bar tool that routes any agent to any model, such as Codex on DeepSeek or Claude Code on Kimi. Useful for mixing agents and providers. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,469 | Uses ChatGPT Web as a model inside Codex, without using Codex quota. Check the terms of service before relying on it. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+1,138) | Captures agent session activity, compresses it, and injects it into later sessions. It works across Claude Code, Codex, Gemini and others. |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | n/a (+1,181) | Claims 49 agents and 72 skills arranged like a game studio hierarchy. It is a prompt and skill pack, so judge it on workflow value rather than novelty. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | n/a (+1,164) | A personal `.agents` skills directory shared publicly. Its draw is the author's reputation. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,492 | Lets a team's coding agents talk to each other. It is a multi-agent coordination layer. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,790 | Infrastructure for continually self-improving agents. The claim is ambitious, so check the evals. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,421 | A command center for running agents across machines, extending to CAD, circuits and robots. The scope is broad and may be shallow. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,301 | Markdown-based long-term memory with local ranked retrieval. Claude Code and Codex share one store, and no API key is needed. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anomalyco/hex](https://github.com/anomalyco/hex) | Rust | n/a (+1,134) | Local voice dictation for Mac, Windows and Linux. It runs on-device. |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | Python | n/a (+1,658) | Web scraping framework covering single requests to full crawls. Its AI relevance is mainly as a data-collection tool. |
| [Usagi-org/ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor) | Python | n/a (+204) | Playwright and AI monitor for Goofish (Xianyu) listings, with an admin UI. It is a vertical, practical use case. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,631 | AI office suite with an agent and a CLI that lets coding agents edit real .docx, .xlsx and .pptx files. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 4,434 | 42 local FFmpeg tools exposed to coding agents via a contract and an MCP server. No cloud and no keys. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 6,922 | Notch and iPhone companion that monitors coding agents and lets you approve actions from the lock screen. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Python | n/a (+699) | Training-free modification to remove censorship, slop and sycophancy. It is cheap to apply and dual-use. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | n/a (+503) | A foundation model for financial market data, treated as a "language" of candlesticks. It is a domain-specific model rather than a chatbot. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,664 | Claims to be the first open-source enterprise world model. The listing gives no evidence, so treat it as unverified. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,436 | Ollama-style server for "decision models" (the Jev ecosystem). It is niche and ties to a single vendor's API. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,380 | Unified memory and history across 44 coding agents, served over MCP. It targets cross-tool context loss. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 254 | Turns documents into a Markdown wiki that answers with citations. Works with any provider, including Ollama. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 771 | Self-hosted SearXNG-based search and grounding API for agents. Rust and JSON, with optional page text. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 718 | "Ontology-Augmented Generation" for agents. An interesting alternative to plain vector RAG. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,564 | Multimodal parsing plus an ontology-driven, LLM-wiki knowledge engine. |

## 3. Trend Signal Analysis

**Agent tooling around coding agents is the dominant theme.** Almost every notable project supports an existing coding agent rather than competing with it. Memory layers (claude-mem, deja-vu, agent-memory), skill packs (mattpocock/skills, Claude-Code-Game-Studios, many `agent-skills` repos), worktree management (worktrunk), and cost control (TokenEconomizer) all fit this pattern. The "skills" format has become a distribution channel in its own right, with domain packs for video, charts, logos and writing.

**Computer use is moving into a CLI.** vercel-labs/agent-desktop had the largest daily gain (+3,792). That signals demand for desktop control that isn't tied to one model vendor.

**Model-agnostic routing is a new direction.** magpie, codex-chatgpt-web and the "DeepSeek Harness" ecosystem (dsh-TUI, dsh-Go, dsh-memory) show harnesses and models being decoupled. Users pair Codex with DeepSeek or Claude Code with Kimi, which is likely driven by cost and the arrival of strong cheaper open models.

**Local inference is getting more hardware-aware.** colibri's GPU, RAM and NVMe expert tiering reflects how large MoE models are outgrowing consumer VRAM.

**Data-quality caveat:** many topic-search entries have very large star counts relative to how new they are, and some are promotional or off-topic. Use trending-list daily gains as the cleaner signal.

## 4. Community Hot Spots

- **Context efficiency for agents:** ripwire, TokenEconomizer and claude-mem all attack token cost and context loss. Try them if your agent bills are growing.
- **Parallel agent workflows:** worktrunk plus coordination layers like reason-network address running many agents on one codebase.
- **Hardware-tiered MoE inference:** [colibri](https://github.com/JustVugg/colibri) is worth benchmarking against llama.cpp offloading on your own machine.
- **Vendor-neutral computer use:** [agent-desktop](https://github.com/vercel-labs/agent-desktop) is a good way to evaluate GUI automation without lock-in.
- **Model-agnostic harness routing:** [magpie](https://github.com/yetone/magpie) is worth watching, with a caution to audit anything that handles your API keys.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
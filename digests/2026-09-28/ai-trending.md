# AI Open Source Trends 2026-09-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-28 14:53 UTC

---

# AI Open Source Trends Report — September 28, 2026

## 1. Finds

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — "Agent Memory That Learns": a memory layer for agents that appears to adapt from usage rather than being a static vector store. Worth a look for anyone building long-running agents that need memory beyond a fixed RAG index; today's +4,413-star surge on a brand-new repo is a strong buzz signal, though the repo has effectively zero track record yet — try it, don't bet production on it.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs the 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB RAM, written in portable C99 with no BLAS, no framework, no GPU. A genuinely rare engineering feat (extreme quantization/offloading to fit that footprint); relevant to anyone researching low-resource inference or edge/CPU-only deployment of frontier-scale models.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server billed as "the ripgrep of AI context": finds relevant code without reading the whole repo, then verifies the change against blast radius, tests-to-run, and quality deltas. Claims 74.7% fewer bytes than raw code bodies for its signatures — useful for anyone hitting context-window limits when pointing agents at large repos; backed by Red Hat's emerging tech team, which adds some credibility over the average weekend project.
- **[ashhart/TensorFold](https://github.com/ashhart/TensorFold)** — Fast, exact (non-approximate) LLM decoding on Apple Silicon via MLX, exposed behind an OpenAI-compatible endpoint. Good pick for Mac-based developers who want local inference that drops into existing OpenAI-client tooling without code changes.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single Go binary that turns your existing on-disk session history from Claude Code, Codex, Cursor, and 32+ other agents into searchable memory — no LLM call required. A pragmatic, low-cost complement to the many heavier "agent memory" frameworks on this list.
- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** — A fully local, open-source alternative to ElevenLabs: voice cloning, voice design, video dubbing, dictation/transcription, and audiobook creation across 646 languages. Relevant to anyone building voice products who wants to avoid per-minute API costs and cloud dependency; the +3,274-star day-one jump is notable but the repo has no history to validate quality claims yet.

⚠️ Caution: **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** claims to be "the app everyone uses to manage agents at work" while sitting at 0 total stars before today's +3,185 spike — the marketing claim is disproportionate to any visible track record. Treat as unverified hype until it has real usage history.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,558 | A universal provider proxy that lets Codex CLI, App, SDK, and Claude Code run against any LLM (Gemini, Grok, DeepSeek, Ollama, etc.). Useful for teams standardizing tooling while staying provider-agnostic. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,330 | Patterns, starters, and CLI tools (loop-audit, loop-init, loop-cost) for designing agent orchestration loops, inspired by Addy Osmani and Boris Cherny. A structured take on an increasingly common but informally-practiced discipline. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,756 | Runs a 2.78T-parameter model on CPU-only hardware in 8.24 GB RAM via portable C99. Demonstrates just how far quantization/offloading techniques have advanced for consumer hardware. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,837 | Runs Gemma 4 26B-A4B inference in ~2 GB RAM on any M-series MacBook. Targets Apple Silicon developers wanting large-model inference without a discrete GPU. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,818 | Local-first search across a workspace built for both humans and AI agents. A grep-alternative optimized for agentic code-navigation workflows. |
| [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness) | Python | 5,215 | A self-learning skill layer for Claude Code that distills skills from real sessions and prunes unused ones — no daemon, no benchmark required. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,357 | Zero-dependency C++23 CLI + MCP server for efficient code context retrieval, with blast-radius and test-impact analysis. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 539 | Exact LLM decoding on Apple Silicon (MLX) behind an OpenAI-compatible endpoint. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,321 | An open-source meta-harness that orchestrates Claude Code, Codex, Cursor, Pi, and custom agents, letting teams swap harnesses without rewriting policy/sandboxing logic. |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 0 (+4,413) | Agent memory framework marketed as one that "learns" rather than just stores; today's surge is the standout new signal in the whole dataset. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 6,872 | Infrastructure specifically for continually self-improving agents — a step beyond static agent frameworks toward agents that revise their own behavior over time. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 5,462 | A self-hosted, multi-user, multi-agent assistant backed by Tencent Cloud — notable for enterprise-grade backing rather than a solo project. |
| [Waishnav/devspace](https://github.com/Waishnav/devspace) | TypeScript | 5,151 | A minimal coding-agent harness over MCP supporting ChatGPT, Claude, Hermes, Grok Bot, and OpenClaw in one lightweight tool. |
| [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | TypeScript | 0 (+781) | A multi-agent harness that runs Claude Code and Codex together as a single coordinated system — brand new, worth watching but unproven. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 679 | A scaffolding tool for building your own branded agent harness (CLI, MCP server, memory, learning loop) compatible with Claude Code, Codex, pi.dev, Hermes, and OpenClaw. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 534 | A tmux-based TUI giving live status, quick prompts, worktrees, and diff review across coding agents in one place. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | TypeScript | 17,139 | Clones the full production pipeline of a viral video — face swap, script, B-roll — and ships 100 variants in one command. Aimed at short-form content creators optimizing for scale. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 9,804 | An AI video skill for Claude Code & Codex built on Remotion, with 152 shot recipe cards and 209 motion previews for cinematic product videos. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,051 | A free, open-source AI office suite (Docs/Sheets/Slides/PDF) with a built-in agent and CLI that can edit real .docx/.xlsx/.pptx files locally — a genuine open alternative to closed AI-office add-ons. |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 0 (+3,274) | Fully local ElevenLabs alternative for voice cloning, dubbing, and transcription across 646 languages. |
| [jub0t/Concat](https://github.com/jub0t/Concat) | Rust | 3,826 | An open-source, cross-platform CapCut replacement with MCP support, positioned as a free alternative to a widely-used closed video editor. |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 5,298 | A self-hosted, zero-ops quant workbench for A-share stock selection, monitoring, and backtesting, with LLM-driven strategy customization. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+1,105) | An "Office Harness for AI Agents" spanning spreadsheets, docs, slides, canvas, relational tables, and PDF in one runtime — positions itself as infrastructure for agents to manipulate office documents natively. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,756 | A 2.78T-parameter model running inference on a single CPU in 8.24 GB RAM using portable C99 — no BLAS, no framework, no GPU. A standout demonstration of extreme-efficiency inference engineering. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,837 | Gemma 4 26B-A4B inference in ~2 GB RAM on any M-series MacBook, showing similar efficiency gains applied to Apple hardware. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,490 | An open-source Chinese-language book deriving LLM inference and training system design quantitatively from hardware constraints and model architecture, with accompanying tools and experiments. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 7,962 | Billed as "the world's first open-source enterprise world model" — an ambitious and unusual framing worth scrutinizing rather than taking at face value, given limited detail in the description. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,339 | An AI-native markdown IDE and LLM wiki, aimed at teams wanting a knowledge base built around LLM-editable documents rather than a bolt-on chatbot. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,078 | Converts existing coding-agent session history (from 30+ tools) into searchable memory with no LLM call and a single binary — the lightest-weight entry in a crowded "agent memory" field. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 735 | Git-native persistent memory implementing the Google OKF v0.2 standard, with sub-300µs in-memory BM25 search and an embedded MCP server — claims 80% token-bloat reduction with zero external databases. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 653 | A persistent, Git-versioned map of a codebase and database schema that agents read before touching anything — a governed index rather than ad hoc context stuffing. |
| [Deuz-AI/Deuz-SDK](https://github.com/Deuz-AI/Deuz-SDK) | TypeScript | 697 | A zero-dependency TypeScript framework bundling durable execution, long-term memory, hybrid RAG, MCP tool calling, and CodeAct sandboxes behind one streaming API across major model providers. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 582 | Encrypted, fully offline agentic memory with a one-click install and GUI memory map — notable for prioritizing privacy/offline use over cloud-hosted memory services. |

---

## 3. Trend Signal Analysis

Today's data shows **agent memory and session-history infrastructure** as the clearest emerging cluster: hindsight, deja-vu, okf-agent-memory, Compartment, engrim, and aoci-code all launched or surged around the same idea — that agents need durable, queryable memory across sessions, and that this is now worth building as a standalone product rather than a feature bolted onto a framework. Several explicitly compete on being lightweight (single Go binary, zero external database, no LLM call needed for retrieval) rather than adding another heavyweight vector-DB dependency, suggesting the market is reacting against RAG-stack bloat.

A second visible pattern is **harness proliferation**: openrig, omnigent, metaharness, sandbase-harness, and devspace are all framing themselves as meta-layers that let a developer swap between Claude Code, Codex, Cursor, Gemini, and others without rewriting integration code. This tracks with the continued fragmentation of coding-agent CLIs (Claude Code, Codex, Gemini CLI, Pi, OpenCode, Kimi CLI, Grok Build, etc.) — enough competing harnesses now exist that "harness of harnesses" tooling has become its own category.

Extreme-efficiency inference is a notable technical thread: kimi-k3-in-c (2.78T params on CPU) and turbo-fieldfare (Gemma 4 26B-A4B in ~2GB RAM) both push consumer-hardware inference further than typical quantization work, suggesting continued investment in making frontier-scale or near-frontier models runnable without datacenter GPUs — likely downstream of recent efficient-MoE releases like Kimi K3 and Gemma 4.

MCP adoption continues to broaden past coding tools into vertical domains — EDA (Konnect, easyeda-agent), hardware waveform debugging (Tencent's wave-mcp), and financial data (HiThink Financial-API) — indicating MCP is becoming a default integration protocol well beyond its coding-agent origins.

---

## 4. Community Hot Spots

- **Lightweight, no-cloud agent memory** — deja-vu, okf-agent-memory, and Compartment all compete on doing less infrastructure (single binary, no vector DB, offline-capable) rather than more, a reaction against heavier RAG stacks.
- **CPU/edge inference of large models** — kimi-k3-in-c and turbo-fieldfare demonstrate that trillion-parameter-class and ~26B models can now run without a GPU, worth tracking for anyone deploying to constrained hardware.
- **Harness-of-harnesses tooling** — omnigent, metaharness, openrig, and devspace all address the same pain point: too many competing coding-agent CLIs, not enough standard way to orchestrate across them.
- **MCP spreading into vertical domains** — hardware design (Konnect, easyeda-agent), waveform debugging (wave-mcp), and financial data (HiThink) show MCP becoming the default "give an agent access to X" protocol outside coding contexts.
- **Local, open replacements for paid creative-AI SaaS** — VoiceStudio (ElevenLabs) and Concat (CapCut) both position as fully local, license-free alternatives to well-known commercial products, a pattern worth watching for cost-conscious teams.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
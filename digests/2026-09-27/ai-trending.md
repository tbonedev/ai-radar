# AI Open Source Trends 2026-09-27

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-27 12:40 UTC

---

# AI Open Source Trends Report — September 27, 2026

## 1. Finds

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — An agent memory system explicitly designed to *learn* from usage rather than just store and retrieve facts. Worth a look for anyone building long-running agents that need to improve behavior across sessions instead of resetting context each run.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server that lets coding agents find relevant code by signature instead of reading whole files (claims 74.7% fewer bytes than full bodies), plus "blast radius" and tests-to-run analysis before a change lands. Useful for teams trying to cut token spend on large codebases without sacrificing correctness checks — this is a concrete, narrowly-scoped tool rather than a framework, which is a good sign.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds shared memory across 30+ coding agents (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, etc.) purely from session history already on disk — no LLM, no embeddings. Interesting for developers who bounce between multiple agent CLIs and are tired of re-explaining the same fix in each one.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing the Google OKF v0.2 spec, with sub-300µs in-memory BM25 search and no external database. Claims an 80% reduction in token bloat from repeated context — a lightweight, auditable alternative to vector-DB-based agent memory.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB of RAM, written in portable C99 with no BLAS, framework, or GPU dependency. A genuinely impressive low-level inference engineering exercise, valuable for anyone studying how to squeeze huge sparse/MoE models onto commodity hardware — more an educational deep-dive than production-ready tooling.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)** — An MCP server purpose-built for RTL waveform debugging (VCD/FSDB), with 34 tools for driver analysis, value tracing, and pass/fail waveform diffing. Niche but notable as one of the first serious attempts to bring agentic tooling into hardware/chip design workflows rather than pure software.

Caution: several trending-list entries (`paperclip`, `hindsight`) show implausible star deltas (0 total stars but thousands "today") — this looks like a scraper artifact where total star counts weren't captured for the daily trending feed, not an actual signal of overnight virality.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 9,283 | Adds contextual, codebase-specific understanding to Claude Code, Cursor, Codex and Gemini so agents work faster and cheaper on real repos. High star count suggests it's filling a genuine gap in agent context quality. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,349 | Zero-dependency MCP/CLI for finding relevant code by signature instead of full-file reads, with blast-radius and test-impact analysis. Backed by Red Hat's emerging technologies group, a signal of enterprise interest in agent-context tooling. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 218 | MCP server for RTL/hardware waveform debugging with 34 specialized tools. One of the few agent-tooling projects extending into chip design rather than software. |
| [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) | TypeScript | — (+573 today) | MCP server for mobile automation and scraping across iOS/Android emulators and real devices. Strong same-day momentum suggests demand for mobile-specific agent tooling. |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | Python | — (+301 today) | Unified library for quantization, distillation, pruning, NAS and speculative decoding, targeting deployment via TensorRT-LLM/vLLM. From NVIDIA directly, so likely to become a default optimization toolkit for production inference. |
| [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action) | TypeScript | — (+225 today) | Official GitHub Action for running Claude Code in CI/CD workflows. Steady trending growth reflects continued adoption of agent-driven PR/issue automation. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | — (+216 today) | The long-established ML framework; included for completeness but not a "new" finding — still gaining daily stars nine years in. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,278 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor and Pi under one policy/sandboxing layer, letting teams swap underlying agents without rewriting workflows. High star count for a young project suggests real demand for harness-agnostic orchestration. |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | — (+4,463 today) | Agent memory system designed to learn and adapt from usage, not just log and recall. Explosive same-day interest, though total-star data is unreliable from this feed — worth verifying independently before betting on maturity. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 675 | Scaffolds a custom, branded agent harness (CLI, MCP server, memory, learning loop) that works across Claude Code, Codex, pi.dev, Hermes and OpenClaw. Useful for teams that want their own agent product without building the plumbing from scratch. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,063 | Single local Go binary providing shared memory across 30+ coding agents built from existing session history, with no LLM or embeddings involved. A pragmatic, low-overhead take on the "agent memory" problem. |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | — (+2,527 today) | Open-source app for managing agents "at work" — positioning is vague and total stars are unverifiable from this data; treat as early-stage/unproven until more detail surfaces. |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | — (+544 today) | A skill-router pack for reverse engineering and authorized penetration testing workflows across Claude Code, Kiro, Cursor and Cline. Relevant to security researchers formalizing AI-assisted workflows under the Agent Skills model. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 519 | tmux TUI for managing multiple coding-agent sessions — live status, worktrees, and diff review in one place. A small but practical developer-experience tool for anyone juggling several agent runs at once. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | — (+920 today) | Positions itself as an "Office Harness for AI Agents" unifying spreadsheets, docs, slides, canvas and PDF in one runtime. Strong daily growth suggests real interest in giving agents structured, editable office primitives instead of raw text. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 7,940 | Free AI office suite (Docs/Sheets/Slides/PDF) plus a CLI and agent skill so Claude Code, Codex and Cursor can create real .docx/.xlsx/.pptx files locally. BYO-key model makes it accessible without a subscription lock-in. |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | TypeScript | 16,536 | Clones viral videos end-to-end with agents — face swap, script, B-roll — producing 100 variants in one command. High star count paired with aggressive framing ("100M views") reads partly as hype; evaluate output quality before relying on it. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,021 | Local-first conversational AI video editor with a professional multi-track timeline, Agent Skills and MCP integration. Notable for combining a real NLE-style timeline with agent-driven editing rather than being a thin wrapper. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 9,675 | Claude Code/Codex skill for cinematic product videos via Remotion, shipping with 152 shot-recipe cards and 209 motion previews. A concrete, production-oriented skill package rather than a generic "AI video" claim. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,703 | Runs the 2.78T-parameter Kimi K3 model on a single CPU in 8.24 GB RAM using portable C99 with no BLAS or GPU dependency. A striking low-level engineering demonstration of how far MoE inference can be compressed onto commodity hardware. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,831 | Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. Signals fast community follow-through on Google's newest Gemma release, optimized specifically for Apple Silicon. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,390 | Open-source Chinese-language book, "Deeply Understanding AI Infra," deriving LLM training/inference system design quantitatively from hardware constraints and model architecture, with companion tools and experiments. A serious reference for engineers who want first-principles understanding rather than framework tutorials. |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | — (+848 today) | Educational repo walking through building AI engineering systems from scratch. Useful as a learning resource, though it's a tutorial collection rather than a novel tool. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 728 | Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with sub-300µs in-memory BM25 search and an embedded MCP server. Claims an 80% cut in token bloat with zero external databases — appealing for teams wary of adding a vector-DB dependency just for agent memory. |
| [Deuz-AI/Deuz-SDK](https://github.com/Deuz-AI/Deuz-SDK) | TypeScript | 697 | Zero-dependency TypeScript framework for production agents combining durable execution, long-term memory, hybrid RAG, MCP tool calling and CodeAct sandboxes behind one streaming API across Claude, GPT, Gemini, Grok, Mistral and DeepSeek. Broad provider coverage in a single lightweight SDK is the standout feature. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,011 | Local-first, model-agnostic desktop research workbench with extensible skills, MCP tools, Python/R execution and traceable artifacts for reproducible research. Positions itself for scientific/academic users rather than general coding agents. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 581 | Fully offline, encrypted agentic memory with a one-click GUI memory map, cross-OS and cross-agent. Notable for prioritizing privacy/offline operation over cloud-hosted memory services. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 397 | ModelScope's practical cookbook covering model selection, inference, fine-tuning, evaluation, RAG and Agent/AIGC workflows — a broad, hands-on reference rather than a single tool. |

## 3. Trend Signal Analysis

Today's data shows agent memory as the clearest emerging cluster: hindsight, deja-vu, okf-agent-memory, Compartment, and engrim all tackle the same problem — giving coding/general agents durable, cross-session recall — but with markedly different architectures (learned memory, disk-history replay with no LLM, Git-native BM25 search, encrypted offline stores, SQLite-based episodic memory). This diversity suggests the community hasn't converged on a standard yet, and "memory" is quickly becoming as contested a layer as the agent harness itself.

MCP continues to be the default integration surface, but the interesting shift is *domain* expansion beyond code: RTL waveform debugging (Tencent/wave-mcp), EDA/PCB design (Konnect, easyeda-agent), mobile automation (mobile-next/mobile-mcp), and SEO/analytics (Ryze, openanalytics) all shipped MCP servers this cycle. Agents are being wired into specialist engineering domains, not just general coding.

A parallel "meta-harness" trend (omnigent, metaharness, loopx, Waishnav/devspace) is consolidating around the idea of a harness-agnostic control plane that can drive Claude Code, Codex, Gemini, DeepSeek and others interchangeably — a sign the ecosystem is maturing past single-vendor lock-in.

On the model side, same-day inference projects for Kimi K3 and Gemma 4 indicate both models shipped very recently and triggered immediate community optimization work — CPU-only trillion-parameter inference and sub-2GB Apple Silicon inference are notable engineering feats emerging within days of release. Chinese-language projects are prominent throughout (Tencent, ModelScope, multiple skill packages), reflecting an active and increasingly formalized "Agent Skills" ecosystem.

## 4. Community Hot Spots

- **Agent memory standardization** — Multiple incompatible approaches (OKF spec, learned memory, disk-history replay, encrypted local stores) are competing; worth watching which one becomes the de facto standard before committing to one.
- **MCP servers for non-software domains** — RTL debugging, PCB design, and mobile automation via MCP suggest agent tooling is expanding well beyond the coding assistant use case.
- **Day-one inference optimization for new model drops** — Kimi K3 and Gemma 4 both got serious CPU/Apple-Silicon inference work within days, a good signal for engineers tracking how quickly a new model becomes runnable outside big GPU clusters.
- **Harness-agnostic orchestration layers** — omnigent, metaharness and similar projects are worth evaluating if you're tired of rewriting automation every time you switch between Claude Code, Codex, or another CLI agent.
- **Context-efficiency tooling** (ripwire, Benzi, Graft) — a growing niche of tools that reduce token spend by giving agents structured, signature-level views of a codebase instead of raw file contents; a practical lever for teams facing rising LLM costs.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
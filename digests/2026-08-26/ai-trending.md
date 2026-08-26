# AI Open Source Trends 2026-08-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-26 07:41 UTC

---

# AI Open Source Trends Report — 2026-08-26

## 1. Finds

- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs the 2.78-trillion-parameter Kimi K3 model on a single CPU in just 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, and no GPU. Worth a look for anyone exploring ultra-lean inference without cloud GPU spend, or studying how far quantization/engineering can stretch a frontier-scale model on commodity hardware.

- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any Apple M-series MacBook. Useful for developers who want a genuinely large local model on a laptop instead of a cloud API call, without a beefy unified-memory config.

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that indexes the session logs coding agents (Claude Code, Codex, Cursor, and 17 others) already write to disk — including months of history predating install — and recalls them across tools, with no LLM and no embeddings involved. Good fit for anyone bouncing between multiple agent CLIs who wants continuity without standing up a memory service.

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — A hybrid code review tool pairing deterministic static-analysis pipelines with an LLM agent, giving precise line-level comments and a built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection); OpenAI/Anthropic compatible and reportedly battle-tested at Alibaba's scale. For teams wanting automated review with more rigor than a thin LLM wrapper around a diff.

- **[t8y2/dbx](https://github.com/t8y2/dbx)** — A 20 MB cross-platform database client covering 90+ engines (MySQL, Postgres, SQLite, Redis, MongoDB, DuckDB, SQL Server, and more), with a built-in AI assistant, MCP server, CLI, and desktop/Docker options. Consolidates what would otherwise be several separate DB GUIs into one lightweight tool.

- **Flag — [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill)**: 25,633 stars for a single-purpose, personal-account tool that converts book PDFs into Claude Code skills. That star count is disproportionate to the described scope and provenance — treat as a possible star-inflation/hype signal rather than a genuine adoption indicator until corroborated elsewhere.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 21,431 | Hybrid deterministic + LLM code review tool with line-level comments and a built-in security ruleset. Notable for being production-tested at Alibaba's internal scale rather than a hobby project. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 16,640 | 20 MB database client for 90+ engines with built-in AI, MCP server, CLI, and desktop app. Its breadth of DB support in a single lightweight binary is unusual among AI-assisted DB tools. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 12,144 | Universal provider proxy letting Codex CLI/App/SDK and Claude Code run against any LLM (Claude, Gemini, Grok, DeepSeek, Ollama). Directly addresses harness/provider lock-in, a recurring theme today. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,410 | Desktop app that watches an on-screen work session and, via GitHub Copilot CLI, reconstructs it into a reusable Skill or Automation for Microsoft's agent products. Interesting "record once, reuse forever" approach to skill authoring. |
| [google-antigravity/antigravity-sdk-python](https://github.com/google-antigravity/antigravity-sdk-python) | Python | 3,174 | Python SDK for building agents on Google's Antigravity platform. Early signal of Google building out an agent-SDK ecosystem in the open. |
| [Cmochance/codex-app-transfer](https://github.com/Cmochance/codex-app-transfer) | Rust | 302 | Local desktop gateway translating Codex CLI's Responses API into Chat Completions for Kimi/DeepSeek/Zhipu GLM/Bailian. Niche but practical for teams standardized on Codex tooling but not OpenAI models. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,287 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor, and Pi, letting teams swap harnesses without rewriting policies or sandboxing. Reflects growing appetite for harness-agnostic tooling. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,251 | Local-first AI agent workspace spanning coding, writing, design, research, and automation, with both desktop GUI and TUI runtimes. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 3,786 | Claude Code skill bundle for bug hunting and red-team work: 82 skills, 15 slash commands, and 681 disclosed-report patterns across 24 vulnerability classes. Notably deep curation for a security-focused skill pack. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 3,483 | Local-first AI agent workspace (Apache Incubating) that records model messages, tool calls, results, permission decisions, and terminations as an append-only log — an audit-first design worth noting given growing scrutiny of agent actions. |
| [Gitlawb/zero](https://github.com/Gitlawb/zero) | Go | 1,630 | Terminal coding agent pitched around user/model/machine control rather than a hosted service — a "bring your own everything" philosophy. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 614 | Meta-harness for scaffolding your own branded agent CLI with its own MCP server, memory, and witness-signed releases; works across Claude Code, Codex, pi.dev, and more. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 423 | Multi-harness control plane offering quota-aware rotation across multiple Claude/Codex subscriptions with shared thread context and cross-model review. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | ⭐0 (+218 today) | Multi-agent LLM framework for financial trading — a concrete vertical application of multi-agent orchestration outside coding. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [simonlin1212/a-stock-data](https://github.com/simonlin1212/a-stock-data) | — | 9,231 | Full-stack China A-share data toolkit for AI agents: 11 layers, 54 endpoints, 19 sources, zero-auth. Part of a visible cluster of Chinese quant/trading agent tooling in today's data. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 6,360 | AI video skill for Claude Code & Codex built on Remotion, with 152 shot recipe cards and 209 motion previews for cinematic product videos. |
| [microsoft/flint-chart](https://github.com/microsoft/flint-chart) | TypeScript | 3,941 | A visualization language letting AI agents reliably produce expressive charts from simple, human-editable specs — addresses a real gap in agent-generated data viz reliability. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,654 | AI-native markdown IDE and LLM wiki for structured knowledge authoring. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,383 | Local-first conversational AI video editor with a professional multi-track timeline, Agent Skills, and MCP integration. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,031 | AI equity research agent combining resilient workflows, evidence-grounded RAG, versioned reports, and automated quality evaluation. |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | Python | ⭐0 (+1265 today) | Local job-search framework built on Claude Code: evaluates postings, tailors CVs, writes cover letters, and preps interviews. |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | ⭐0 (+813 today) | Self-organizing AI "second brain" for Obsidian + Claude Code that files any dropped source into a connected Markdown knowledge graph, inspired by Karpathy's LLM Wiki pattern. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,351 | Text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts — a distinctive alternative to weight fine-tuning. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 6,495 | 2.78T-parameter Kimi K3 inference on a single CPU in 8.24 GB RAM, dependency-free C99. A striking data point for how far CPU-only inference has come. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,371 | Gemma 4 26B-A4B inference in ~2 GB RAM on Apple M-series hardware — large-model inference squarely within consumer-laptop reach. |
| [marin-community/marin](https://github.com/marin-community/marin) | Python | ⭐0 (+231 today) | Open-source framework for foundation model research and development, appearing on today's trending list. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | 25,633 | Converts a technical book PDF into a ready-to-use Claude Code skill. High star count relative to scope and account history — treat with some skepticism pending independent adoption signals. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,654 | AI-native markdown IDE/wiki for durable, structured knowledge (also listed under Applications for its dual role). |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 725 | Indexes existing coding-agent session logs (no LLM, no embeddings) into recallable memory across 20 tools, as a single local Go binary. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 803 | Persistent local memory engine for AI assistants across Cursor, Claude Code, Codex, and OpenClaw, free and MIT-licensed. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 446 | Turns local files into searchable context for AI agents. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 408 | Local-first desktop app converting scanned PDFs and folders into clean, token-efficient AI-ready Markdown, running fully offline. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 299 | Free, no-signup Taiwan legal MCP server + CLI over 22.5M court rulings and administrative interpretations, with citation checking. A well-scoped vertical RAG example. |
| [oleksiijko/pmb](https://github.com/oleksiijko/pmb) | Python | 284 | Local-first persistent memory for coding agents (Claude Code, Cursor, Codex) over MCP, storing decisions and lessons in a single offline, multilingual SQLite file. |

## 3. Trend Signal Analysis

Today's data shows the AI agent ecosystem's center of gravity shifting from *building agents* to *managing the growing pile of agents developers already have*. A cluster of "control plane" and "meta-harness" tools — [claudexor](https://github.com/razzant/claudexor), [metaharness](https://github.com/ruvnet/metaharness), and [omnigent](https://github.com/omnigent-ai/omnigent) — exist purely to unify Claude Code, Codex, Cursor, and OpenCode behind one interface, a clear symptom of harness fragmentation and subscription/quota fatigue. Alongside this, a distinct "local-first agent memory" category has formed: [deja-vu](https://github.com/vshulcz/deja-vu), [pmb](https://github.com/oleksiijko/pmb), and [iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) all solve the same problem — persistent recall across sessions and tools without a cloud service or embeddings — suggesting this is converging into a standard building block rather than a one-off feature.

On the model side, [kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) and [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) both push large-model inference onto commodity CPU/laptop hardware with minimal RAM footprints — a tangible step toward zero-GPU local inference that wasn't as visible in prior cycles.

Anthropic's own [claude-plugins-community](https://github.com/anthropics/claude-plugins-community) and [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) repos appearing simultaneously on trending signals active build-out of the Claude Code plugin marketplace infrastructure. Separately, a heavy concentration of China-market vertical apps (A-share trading/quant agents, DeepSeek Harness plugin catalogs) points to strong regional specialization in AI-agent tooling. One caution: several niche, single-purpose, personal-account repos carry star counts far exceeding their apparent adoption base, suggesting trending/star signals in this dataset should be sanity-checked rather than taken at face value.

## 4. Community Hot Spots

- **Cross-harness control planes** — [claudexor](https://github.com/razzant/claudexor), [metaharness](https://github.com/ruvnet/metaharness), and [omnigent](https://github.com/omnigent-ai/omnigent) all target the same pain: developers running multiple coding-agent CLIs and wanting one place to manage quotas, context, and policy across them.
- **Local-first persistent memory for agents** — [deja-vu](https://github.com/vshulcz/deja-vu), [pmb](https://github.com/oleksiijko/pmb), and [iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) show this has become a recognizable, competitive product category rather than an experimental feature.
- **Consumer-hardware LLM inference** — [kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) and [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) demonstrate serious engineering effort going into running frontier-scale or near-frontier models without a GPU or datacenter.
- **Claude Code plugin ecosystem formalization** — [claude-plugins-community](https://github.com/anthropics/claude-plugins-community) and [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) mark Anthropic actively building out marketplace infrastructure; worth watching for where third-party skill/plugin distribution norms settle.
- **China-focused financial agent tooling** — [a-stock-data](https://github.com/simonlin1212/a-stock-data), [FinSight-AI](https://github.com/juanjuandog/FinSight-AI), and [TradingAgents](https://github.com/TauricResearch/TradingAgents) reflect a concentrated push toward AI-driven quant/trading research tooling, a vertical worth tracking separately from general-purpose coding agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
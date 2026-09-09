# AI Open Source Trends 2026-09-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-09 12:07 UTC

---

# AI Open Source Trends Report — September 9, 2026

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server that lets a coding agent understand a codebase from signatures alone (claimed 74.7% fewer bytes than reading full function bodies) and computes blast-radius / tests-to-run before a change lands. Worth trying for anyone burning context budget on agents that re-read entire files just to find one function signature.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory layer across Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and 20+ other agents, mined directly from session history already on disk — no LLM, no embeddings. Useful for anyone who bounces between multiple coding agents and is tired of re-teaching each one the same fix.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing the Google OKF v0.2 spec, with sub-300µs in-memory BM25 search and an embedded MCP server; claims an 80% reduction in token bloat with zero external databases. A concrete, measurable alternative to vector-DB-based agent memory for teams wary of adding infra.
- **[2akouwu/reverify](https://github.com/2akouwu/reverify)** — An MCP server + CLI built around the principle that the AI proposes and deterministic tools decide: every claim gets checked against ground truth with evidence attached, built and proven out in reverse-engineering workflows. Good fit for anyone who has been burned by an agent confidently inventing facts mid-task.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A desktop app that records your on-screen work session, uses GitHub Copilot CLI to reconstruct the intent and ordered steps, then packages it as a reusable Skill/Automation for Copilot Studio, Scout, or Cowork. Interesting for teams trying to capture tacit process knowledge without hand-writing playbooks.
- **Caveat — [affaan-m/ECC](https://github.com/affaan-m/ECC)** (⭐0, +1,427 today, top trending gain): billed as an "agent harness performance optimization system" spanning "skills, instincts, memory, security, and research-first development" — the description reads as buzzword-stacking with no concrete mechanism described. Worth a skim before trusting the star velocity; it may be a thin wrapper rather than substantive engineering.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 14,054 | A universal provider proxy letting Codex CLI/App/SDK and Claude Code call any LLM backend (Claude, Gemini, Grok, DeepSeek, Ollama). Useful for teams standardizing on one agent harness while shopping around on model cost/quality. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,122 | Patterns and CLI tools (loop-audit, loop-init, loop-cost) for designing agent orchestration loops, inspired by Addy Osmani and Boris Cherny's writing. A practical toolkit for the emerging "loop engineering" discipline rather than a framework itself. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 6,641 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex and Gemini to make agent responses faster and cheaper. Aimed at teams running heavy daily agent usage who want to cut token spend without losing accuracy. |
| [microsoft/flint-chart](https://github.com/microsoft/flint-chart) | TypeScript | 4,166 | A visualization language/spec format that AI agents can reliably target to produce good-looking charts from human-editable specs. Solves the "agent generates ugly/broken charts" problem at the spec level rather than via prompt tuning. |
| [pacifio/atlas](https://github.com/pacifio/atlas) | Rust | 3,283 | Acts as source control for agents — track and query changes made by multiple coding agents working on the same codebase in one place. For teams running several agents concurrently and losing track of who changed what. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 1,795 | Zero-dependency MCP/CLI context tool: agents get compact signatures instead of full file bodies, plus blast-radius and test-impact checks. A Red Hat-backed project targeting token-efficient repo comprehension. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 796 | Cross-agent shared memory mined from existing session history on disk, no LLM or embeddings required. Fixes for one agent propagate to every other agent you use. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 503 | Git-native persistent memory implementing Google's OKF v0.2 spec with sub-300µs BM25 search and no external database. Claims an 80% cut in token bloat for memory-heavy agent workflows. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,804 | An open-source meta-harness that orchestrates Claude Code, Codex, Cursor, and Pi interchangeably, enforcing policy/sandboxing and enabling multi-device collaboration. Aimed at teams that don't want to lock into one agent vendor. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,297 | A local-first agent workspace unifying coding, writing, design, research and automation in one runtime with both a desktop GUI and TUI. Positions itself as a general-purpose daily driver rather than a coding-only tool. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 6,267 | A free, open-source Microsoft Office alternative (Word/Excel/PowerPoint/PDF/Markdown) with built-in AI agents across macOS, Windows and Linux. Notable for tackling office-document editing rather than the usual coding-agent niche. |
| [apache/maka](https://github.com/apache/maka) (Incubating) | TypeScript | 5,108 | An Apache-incubated, high-performance agent workspace that keeps a complete audit trail of everything an agent did. Relevant for enterprises needing provenance/compliance around agent actions. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0 (+506 today) | A multi-agent LLM framework for financial trading, spawning today's cluster of A-share adaptations (TradingAgents-astock, Vibe-Research). Worth watching as the reference implementation this niche keeps forking. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 3,785 | A persistent development workspace that self-improves and continues work across sessions rather than resetting each time. Useful for long-running projects where context continuity matters more than one-shot speed. |
| [fuxicodex/Fuxi](https://github.com/fuxicodex/Fuxi) | Python | 3,396 | A self-contained terminal coding agent with cost-aware routing across multiple LLM providers. A lighter-weight alternative for developers who want provider flexibility without a heavyweight harness. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 642 | Scaffolds your own branded agent harness (CLI, MCP server, memory, learning loop, witness-signed releases) compatible with Claude Code, Codex, pi.dev and OpenClaw. For teams building an internal agent product rather than just using one. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 4,491 | A self-hosted, zero-ops A-share quant workbench combining LLM-driven stock screening, monitoring, and backtesting. Part of today's notable cluster of Chinese-market trading-agent apps. |
| [simonlin1212/TradingAgents-astock](https://github.com/simonlin1212/TradingAgents-astock) | Python | 3,241 | An A-share adaptation of TradingAgents with 7 analyst personas debating bull/bear cases against China-specific data (dragon-tiger list, hot money flows, lockup schedules). Targets Chinese retail quant investors specifically, not a generic port. |
| [HiThink-Tech/Financial-API](https://github.com/HiThink-Tech/Financial-API) | TypeScript | 2,981 | Official Tonghuashun (HiThink) A-share financial data service exposed via API, MCP, CLI and Python — real-time quotes, financials, indices, sectors. A credible official data source rather than a scraped one, useful as a backend for the trading-agent projects above. |
| [makecindy/cindy](https://github.com/makecindy/cindy) | TypeScript | 2,484 | An out-of-the-box open-source AI agent positioned for non-technical setup ("想到，就能做到"). A general-purpose consumer-facing entry rather than a developer tool. |
| [simonlin1212/Vibe-Research](https://github.com/simonlin1212/Vibe-Research) | TypeScript | 2,434 | A personal investment research agent covering A-share/US/HK markets — daily recap, news radar, position tracking, backtesting — built on the open-source Codex harness. Aimed at individual investors who want their own research agent rather than a SaaS product. |
| [Pinvou/pinvou-agent](https://github.com/Pinvou/pinvou-agent) | Rust | 1,767 | An open-source desktop AI agent for files, knowledge, workflows and tangible deliverables. A general productivity agent rather than a coding-specific one. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,682 | Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. A striking efficiency data point if accurate — worth verifying, since it implies aggressive quantization/offloading not detailed in the description. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 6,361 | Billed as the first open-source enterprise "world model." Vague on specifics — worth checking the README closely before treating the label at face value. |
| [SenteLabsAI/OpenExecutive](https://github.com/SenteLabsAI/OpenExecutive) | Python | 4,012 | An AI virtual executive team — one coherent persona backed by 8 specialist agents, built on FastAPI + Next.js. More an applied multi-agent architecture than a training/model project despite the category tag. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,792 | Self-described "Harness of Harnesses" — a persistent, self-evolving multi-agent ecosystem for cross-domain collaboration. Ambitious framing with limited concrete detail in the description; treat as early-stage. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [study8677/awesome-architecture](https://github.com/study8677/awesome-architecture) | Vue | 2,296 | 26 bilingual system-design tutorials plus 25 architecture templates and 6 end-to-end cases covering distributed systems, RAG, and coding agents. A study resource rather than a runnable tool, useful for engineers ramping up on AI-native architecture. |
| [DEEIX-AI/DEEIX-Chat](https://github.com/DEEIX-AI/DEEIX-Chat) | Go | 1,440 | An enterprise AI workspace covering model routing, multimodal chat, files, tools, billing, identity and ops in one package. Broader than a typical RAG tool — closer to an internal AI platform. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,021 | An all-in-one multimodal parsing engine paired with an ontology-powered, wiki-driven knowledge engine. Targets teams building structured knowledge bases from messy multimodal source documents. |
| [ongridio/ongrid](https://github.com/ongridio/ongrid) | Go | 1,014 | An ops-focused AI agent that understands your infrastructure, finds root causes, and applies fixes directly from Slack, Telegram, Lark or DingTalk. Notable for targeting SRE/ops workflows rather than the usual coding or research use case. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 386 | A Claude Code skill implementing a 12-phase research pipeline: plan-review gate, parallel sub-agent search, claims-ledger triangulation, red-teaming, and four-layer citation verification against 1,072 verified endpoints. A serious attempt at making agent-driven research auditable rather than just fast. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 238 | A local-first memory engine for AI agents using semantic embeddings, shipped as a single zero-config, fully offline Rust binary. A lightweight alternative to running a vector database just for agent memory. |

## 3. Trend Signal Analysis

Today's data shows agent *memory and context management* becoming its own distinct sub-market, separate from the agent frameworks themselves. Deja-vu, okf-agent-memory, uteke, and reverify all attack the same problem — agents forgetting context or hallucinating — but from different angles (shared session-history memory, git-native structured memory, offline embeddings, and deterministic fact-checking respectively). None of these rely on a vector database; several explicitly market "no embeddings, no LLM" as a feature, suggesting a pushback against RAG-by-default in favor of lighter, auditable retrieval.

A second cluster centers on *harness interoperability*: opencodex, metaharness, omnigent, and devspace all promise to let one agent's work (or one harness's plugins) move across Claude Code, Codex, Cursor, and others. This reflects a market where users run multiple coding agents side by side and are tired of vendor lock-in at the harness layer, rather than betting on a single winner.

A third, geographically distinct cluster is Chinese A-share trading agents (TradingAgents-astock, tick-stock-panel, Vibe-Research, HiThink Financial-API), all forking or adapting TauricResearch/TradingAgents to local market data and rules — a clear sign that open multi-agent trading frameworks are being localized rapidly rather than built from scratch.

Finally, "Agent Skills" as a packaging format (ponytail, skill-recorder, autoharness, deepdive, video-shotcraft) is maturing from ad hoc prompt snippets into a recognized distribution unit with its own tooling (recorders, pruning, cross-harness compatibility layers), suggesting the ecosystem is converging on Skills as the plugin format of choice across Claude Code, Codex, and Grok Build alike.

## 4. Community Hot Spots

- **Non-vector agent memory** — deja-vu, okf-agent-memory, and uteke all deliver persistent agent memory without a vector database or LLM call, worth watching as a reaction to RAG infrastructure overhead.
- **Deterministic grounding against hallucination** — reverify's "agent proposes, deterministic tools decide" pattern is a concrete, testable approach rather than another prompting trick.
- **Cross-harness portability tooling** — deja-vu, opencodex, and metaharness all bet that developers will keep using multiple coding agents rather than consolidating on one, making interop layers a durable niche.
- **Skill-format tooling maturing** — microsoft/skill-recorder and tigerless-labs/autoharness both auto-generate reusable Skills from real usage, signaling Skills are becoming a first-class artifact type worth building tooling around.
- **A-share trading agent cluster** — the rapid localization of TauricResearch/TradingAgents into multiple China-market-specific forks in a single day is worth tracking as a template for how quickly open agent frameworks get regionally adapted.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
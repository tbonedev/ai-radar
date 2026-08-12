# AI Open Source Trends 2026-08-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-12 08:13 UTC

---

# AI Open Source Trends Report — 2026-08-12

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Indexes the local session history that coding agents already write to disk (across seventeen different harnesses) and surfaces relevant past solutions automatically at session start. No LLM calls, no embeddings — a single zero-dependency binary claims 84.9% hit@1 on LongMemEval-S. Worth a look for anyone tired of re-explaining context to Claude Code/Codex/Cursor every session; the "no embeddings" design is the interesting part, not just another RAG memory layer.

- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB of RAM, written in portable C99 with no BLAS, no framework, no GPU. A serious engineering feat in extreme quantization/offloading rather than a product; useful for systems engineers studying how far CPU-only inference of frontier-scale models can go.

- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. Similar efficiency-engineering story to the above but for Apple Silicon; relevant to anyone wanting large-model inference on consumer laptops without a cloud bill.

- **[elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine)** — Indexes a codebase so agents search it instead of reading whole files, claiming a 94% reduction in tokens spent on context. Ships as a free, local MCP server compatible with Claude Code, Codex, Copilot, Cursor and Gemini CLI — a practical, immediately-usable cost-control tool rather than a research demo.

- **[microsoft/SkillOpt](https://github.com/microsoft/SkillOpt)** — A text-space optimizer that trains reusable natural-language "skills" for frozen LLM agents through trajectory-driven edits and validation-gated updates, outputting deployable `best_skill.md` files. Interesting because it treats the current "agent skills" craze as an optimization target rather than something humans hand-write; worth watching as skill libraries proliferate.

- ⚠️ **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** — Listed at 101,110 stars with a joke description ("makes your AI agent think like the laziest senior dev in the room"). The star count is wildly out of proportion to visibility elsewhere in this dataset and reads as inflated/anomalous rather than organic; treat as noise, not a real signal, until verified directly on GitHub.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 14,242 | A 20 MB cross-platform database client for 70+ databases (MySQL, Postgres, SQLite, Redis, MongoDB, etc.) with a built-in AI assistant, MCP server, CLI, and desktop app. Notable for bundling AI/MCP directly into general DB tooling rather than being AI-first. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 9,454 | Universal provider proxy that lets Codex CLI/App/SDK and Claude Code run against any LLM backend (Claude, Gemini, Grok, DeepSeek, Ollama). Useful for teams standardizing on one CLI while switching model vendors freely. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 4,600 | Open-source auth gateway connecting 1,000+ SaaS providers to AI agents via SDK, CLI, MCP, HTTP, and OpenAPI. Solves the "agent needs OAuth to 1,000 services" plumbing problem in one layer. |
| [butterbase-ai/butterbase](https://github.com/butterbase-ai/butterbase) | TypeScript | 3,017 | Open-source backend-as-a-service (Postgres, auth, storage, functions) with an AI gateway and MCP support built in — a Supabase-shaped alternative aimed squarely at agent-backed apps. |
| [elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine) | Python | 395 | Local MCP server that indexes a codebase so coding agents search instead of reading files, claiming 94% token savings. Works with Claude Code, Codex, Copilot, Cursor, Gemini CLI. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 736 | Gives any AI agent generic coding-tool capability via MCP — a small utility layer rather than a full IDE integration. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | 0 (+1,138 today) | A self-improving RLM agent for coding workflows and long-running autonomous tasks, from a known distributed-training lab — today's largest new-star gainer among AI agent projects. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 8,648 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting teams swap harnesses without rewriting workflows while enforcing sandboxing/policy. |
| [stablyai/orca](https://github.com/stablyai/orca) | TypeScript | 0 (+875 today) | An "ADE" (agent development environment) for running a fleet of parallel coding agents under your own subscriptions, across desktop, mobile and VPS. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0 (+958 today) | A packaged set of specialized "personas" (frontend, community, QA-style agents) meant to simulate a small creative/dev agency — more a prompt-pack than infrastructure. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 570 | A meta-harness for scaffolding your own branded agent CLI/MCP server with memory and learning loops, compatible with Claude Code, Codex, pi.dev and OpenClaw. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,081 | Local-first agent workspace unifying coding, writing, design, research and automation in one runtime across desktop GUI and TUI. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 625 | Zero-dependency local binary that recalls prior agent-session solutions across 17 harnesses without embeddings, 84.9% hit@1 on LongMemEval-S. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 0 (+812 today) | A "lifelong personalized tutoring" system from HKU's data science lab — an applied education agent rather than a generic chatbot wrapper. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 0 (+458 today) | Claims to be the first open-source agentic video production system, with 12 pipelines and 700+ agent skill files turning a coding assistant into a video studio. Ambitious scope; worth checking real output quality before adopting. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 522 | Turns a coding agent into a video studio from plain-language descriptions, generating the timeline and rendering the file — similar niche to OpenMontage, worth comparing the two directly. |
| [Netw0rkNoob/VulnClaw](https://github.com/Netw0rkNoob/VulnClaw) | Python | 2,702 | AI agent + MCP toolchain + pentest skills that automates recon → vuln discovery → exploitation → report generation from natural language. Authorized security-research use only. |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | HTML | 23,813 | An Agent Skill for generating polished HTML slide decks (editorial/Swiss layouts) plus a WebGL presentation runtime — part of the broader "Claude Skill as a deliverable format" wave. |
| [simonlin1212/TradingAgents-astock](https://github.com/simonlin1212/TradingAgents-astock) | Python | 2,804 | Multi-agent investment research framework adapted for China A-shares, with 7 analyst personas debating bull/bear cases — one of several A-share-specific quant-agent projects trending today. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 0 (+243 today) | LLM-driven multi-market stock analysis pulling live quotes/news into a decision dashboard with scheduled, zero-cost automated runs. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 4,978 | Runs the 2.78T-parameter Kimi K3 on a single CPU in 8.24 GB RAM, portable C99, no BLAS/framework/GPU — a pure quantization/inference-engineering showcase. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 5,778 | Runs Gemma 4 26B-A4B in ~2 GB RAM on any M-series MacBook — same efficiency story as kimi-k3-in-c, targeted at Apple Silicon instead of generic CPU. |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 15,926 | Trains reusable natural-language "skills" for frozen LLM agents via trajectory-driven edits and validation-gated updates, producing deployable skill artifacts — an optimizer for the agent-skill ecosystem itself. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 34,065 | A DeepSeek-native terminal coding agent engineered around prefix-cache stability for long-running sessions — a model-specific alternative to generic multi-provider CLIs. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | Python | 0 (+341 today) | Builds a knowledge graph over a multi-language monorepo so an AI agent can query, understand and edit it — a structural alternative to plain embedding-based codebase RAG. |
| [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | Python | 2,369 | Extracts and parses documents into structured chunks ready for agents and RAG pipelines — a document-preprocessing utility rather than a full retrieval stack. |
| [future-agi/future-agi](https://github.com/future-agi/future-agi) | Python | 1,652 | Self-hostable, Apache-2.0 platform for evaluating, tracing, and guardrailing LLM/agent applications end-to-end (tracing, evals, simulations, datasets, gateway). |
| [caura-ai/caura-memclaw](https://github.com/caura-ai/caura-memclaw) | Python | 429 | Governed shared memory for multi-agent, multi-tenant fleets with trust tiers, keystone policies, audit trails and a knowledge graph — memory infrastructure aimed at agent teams rather than single-agent use. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,408 | AI-native markdown IDE and "LLM wiki" for building and querying a structured knowledge base. |

---

## 3. Trend Signal Analysis

The most explosive theme today is **agent memory and context management as its own product category**: deja-vu, projectmem, iai-personal-memory-engine, piia-engram, Compartment, and caura-memclaw all launched independent takes on "give your coding agent persistent, local memory across sessions/harnesses" within the same 7-day window. This is a maturation signal — after a year of agent-framework proliferation, the ecosystem is now backfilling the memory layer that ChatGPT-style memory offered but CLI coding agents lacked, and doing it competitively on locality, zero-dependency footprint, and cross-harness compatibility rather than cloud sync.

A second, related pattern is the **"meta-harness"**: projects like omnigent, ruvnet/metaharness, and Agentlas-OS no longer build a single agent but a layer that lets you swap Claude Code, Codex, Cursor, and Pi underneath one workflow. This suggests builders are hedging against any single vendor's CLI winning outright.

Extreme-efficiency inference (kimi-k3-in-c's 2.78T-parameter model on a CPU, turbo-fieldfare's Gemma 4 on 2 GB of Mac RAM) reflects continued community appetite for running the newest large open releases (Kimi K3, Gemma 4, DeepSeek) without GPU access — a direct downstream effect of those recent model drops.

Finally, there's a distinct **regional vertical cluster**: several independent projects (TradingAgents-astock, tickflow-stock-panel, daily_stock_analysis, a-stock-data, Vibe-Research) apply multi-agent LLM research pipelines specifically to China's A-share market, suggesting a maturing niche of Chinese-language quant-agent tooling.

---

## 4. Community Hot Spots

- **Agent memory without embeddings** — deja-vu's zero-LLM, zero-embedding session recall is a meaningfully different architecture from the RAG-memory norm and worth watching for benchmarks against embedding-based competitors.
- **Meta-harnesses / multi-CLI orchestration** — omnigent, ruvnet/metaharness, Agentlas-OS: infrastructure betting that no single coding-agent CLI stays dominant.
- **CPU/low-RAM inference of frontier-scale open models** — kimi-k3-in-c and turbo-fieldfare are notable engineering demonstrations, not products; useful for teams evaluating on-device inference feasibility.
- **Token-efficiency tooling for coding agents** — elara-labs/code-context-engine's 94%-token-savings claim addresses a real, immediate cost pain point for anyone running Claude Code/Codex/Cursor at scale.
- **Skill-authoring self-optimization** — microsoft/SkillOpt turning the "write agent skills by hand" bottleneck into an automated, validation-gated training loop is a natural next step as skill libraries (op7418/guizang-ppt-skill, addyosmani/agent-skills, etc.) keep multiplying.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
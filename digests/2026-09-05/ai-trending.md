# AI Open Source Trends 2026-09-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-05 11:06 UTC

---

One quick flag before the report: the `nvm-sh/nvm` trending entry contains an embedded string that looks like a Solana token address ("$nvm: 3ArcxqLtXMmBnWbbtfwQgVL3MNnDsggzgGDtXMnjpump") appended to its description — that's not part of the real nvm project and reads like an injected crypto-scam payload riding along in the trending data. I've excluded it entirely (it's not AI-related anyway) and am not repeating the address anywhere below. Separately, `DietrichGebert/ponytail` shows wildly inconsistent star counts across the two data sources (0 total / +1,679 today in the Trending list vs. 127,071 total in the Topic Search list) — likely a scraper glitch, but worth treating that repo's popularity numbers with skepticism.

---

# AI Open Source Trends — 2026-09-05

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Builds agent memory purely from session history already sitting on disk (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, and 17 more), letting you search months of past sessions and recall them in *any* agent. No LLM calls, no embeddings — a single local Go binary. Worth trying for anyone juggling multiple coding-agent CLIs who's tired of losing context when switching tools.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. A concrete, verifiable efficiency claim rather than marketing — relevant to anyone doing on-device/local LLM work on consumer hardware.
- **[riponcm/projectmem](https://github.com/riponcm/projectmem)** — An MCP memory server that records an agent's issues, attempts, fixes, and decisions, then actively warns it before repeating an approach that already failed. 100% local, no telemetry. Useful complement (or alternative) to deja-vu if you want the agent to *act* on memory, not just recall it.
- **[2akouwu/reverify](https://github.com/2akouwu/reverify)** — An MCP server + CLI that forces AI-proposed claims through deterministic tools before accepting them, keeping a ground-truth ledger that survives context resets. Aimed at reverse-engineering workflows but generalizable to any workflow where hallucinated "facts" are costly.
- **[mixelpixx/Konnect](https://github.com/mixelpixx/Konnect)** — A native KiCad 10 plugin (single Rust binary) exposing 217 schematic/layout/routing/design-review tools to Claude or any LLM. A genuine hardware-design + AI crossover, useful for electronics engineers experimenting with agent-assisted PCB work.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — Records your on-screen work session, then uses GitHub Copilot CLI to reconstruct it into an intent + ordered steps and package it as a reusable Skill/Automation. A pragmatic answer to "how do I actually author a good Agent Skill" rather than writing one by hand.

Caution flags: **Tiger3807861189/J-Space-Cognition-Suite-V3.7** leans on vague pseudo-scientific branding ("cognitive-enhancement Skills based on Anthropic's J-space global workspace research" — not a real Anthropic research term) with no concrete functional description; treat as unverified hype. **EverMind-AI/Raven** brands itself "The Harness of Harnesses" with grand claims ("trusted, persistent, self-evolving multi-agent ecosystem for all-domain collaboration") but no specifics on what it actually does — looks more like marketing copy than a working differentiator.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 21,942 | Hybrid deterministic-pipeline + LLM-agent code review tool battle-tested at Alibaba's scale, with line-level comments and a built-in multi-language ruleset (NPE, thread-safety, XSS, SQLi). Compatible with both OpenAI and Anthropic APIs. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 13,418 | A universal provider proxy that lets Codex CLI/App/SDK and Claude Code run any backend LLM (Claude, Gemini, Grok, DeepSeek, Ollama). Solves the "locked to one vendor's CLI" problem directly. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 5,574 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex, and Gemini to make them faster and cheaper per task. Positioned as a drop-in layer rather than a new agent. |
| [seakee/CPA-Manager-Plus](https://github.com/seakee/CPA-Manager-Plus) | Go | 3,211 | Self-hosted management panel and AI gateway observability dashboard tracking requests, cost, quota, failures, and account health across CLIProxyAPI setups. |
| [2akouwu/reverify](https://github.com/2akouwu/reverify) | Python | 911 | MCP server + CLI that grounds AI claims in deterministic tool checks instead of trusting model output, keeping evidence that survives context resets. |
| [riponcm/projectmem](https://github.com/riponcm/projectmem) | Python | 797 | Native MCP memory server (Claude Code, Cursor, Antigravity, Codex) that logs attempts/fixes/decisions and warns before repeating failed approaches. 100% local, MIT licensed. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 776 | Cross-agent memory built from existing on-disk session history across 20+ agent CLIs — no LLM or embeddings required, single local binary. |
| [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | TypeScript | N/A (+391 today) | Open-source local inference server that auto-selects the best model for your hardware and plugs into whichever agent CLI you already use (Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Cline). |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,713 | Open-source agent meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting you swap harnesses without rewriting workflows while enforcing sandboxing policies. |
| [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | TypeScript | 6,388 | A local multi-agent harness that reuses your existing Claude Code/Codex subscriptions to run a whole "office" of coordinated agents rather than one at a time. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,292 | Local-first agent workspace spanning coding, writing, design, research, and automation, with both a desktop GUI and a TUI runtime. |
| [Waishnav/devspace](https://github.com/Waishnav/devspace) | TypeScript | 4,475 | A minimal coding-agent harness built directly on MCP, wiring ChatGPT, Claude, Hermes, Grok Bot, and OpenClaw into one lightweight shell. |
| [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness) | Python | 1,801 | A self-learning skill layer for Claude Code that distills new skills from your real sessions, updates them as you work, and prunes ones that stop being used — no daemon or benchmark step. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | N/A (+1,135 today) | Agent-harness performance optimization system adding skills, "instincts," memory, and security across Claude Code, Codex, Opencode, and Cursor. Today's star gain is the standout signal here. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | N/A (+720 today) | A new agent project from NousResearch (known for the Hermes model line) described as "the agent that grows with you" — worth watching given the parent org's track record, though the repo itself is brand new. |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | TypeScript | N/A (+127 today) | Self-described "agent meta-harness" for deploying multi-agent swarms with adaptive memory and native integrations across Claude Code, Codex, and Hermes. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 7,515 | AI video skill for Claude Code/Codex built on Remotion, shipping 152 shot recipe cards and 209 motion previews for cinematic product videos. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 5,265 | Free, open-source Microsoft Office alternative (Word/Excel/PowerPoint/PDF/Markdown) with AI agents built directly into the editing flow, cross-platform. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,838 | Desktop app that records an on-screen work session, then uses GitHub Copilot CLI to turn it into a reusable Skill or Automation for Copilot Studio/Cowork. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 406 | Native KiCad 10 plugin exposing 217 PCB design tools (schematic, routing, placement, manufacturing checks) to an LLM as a single dependency-free binary. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 394 | A 12-phase research-pipeline skill for Claude Code with a plan-review gate, parallel sub-agent search, and four-layer citation verification against 1,072 verified endpoints. |
| [guangshu100/BidMaster-Pro](https://github.com/guangshu100/BidMaster-Pro) | Python | 251 | End-to-end bidding/tender agent covering document generation, compliance checks (21 rules), and RAG-backed retrieval, producing deliverable docx output. |
| [blader/humanizer](https://github.com/blader/humanizer) | Python | N/A (+1,130 today) | An agent skill that strips telltale signs of AI-generated writing from text — strong launch-day traction, but worth vetting output quality before relying on it for anything published. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,633 | Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook — a concrete, testable efficiency result for on-device LLM inference. |
| [Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins](https://github.com/Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins) | — | 558 | A curated (not code) list of DeepSeek Harness plugins, extensions, and runtimes in English and Chinese — useful as a directory if you're building on that ecosystem, but it's a list, not a tool. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,876 | Claims to replace web/HTML parsing with pixel-native retrieval, backed by an arXiv paper (2606.28344). If it holds up, it sidesteps the whole brittle-HTML-scraping problem RAG pipelines usually have. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,018 | An AI-native markdown IDE that doubles as an LLM-queryable wiki — positions knowledge docs as something an agent reads and writes directly. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,031 | Equity-research agent with evidence-grounded RAG, versioned reports, and automated quality evaluation of its own output — notable for treating RAG output quality as a first-class, tested concern. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 548 | Turns local files into searchable context for AI agents — a lightweight local alternative to standing up a full vector DB for small projects. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 418 | Local-first desktop app that converts any document (including scanned PDFs) into clean, AI-ready Markdown offline, using far fewer tokens than vision-model-based converters. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 307 | Free, no-signup Taiwan legal MCP server + CLI covering 22.5 million court rulings and administrative interpretations, with citation checking. A well-scoped vertical RAG example. |
| [kytmanov/synto](https://github.com/kytmanov/synto) | Python | 248 | Fully local (Ollama-powered) tool that extracts concepts from Markdown notes and auto-links them into a growing Obsidian wiki — no data leaves your machine. |
| [shenmintao/marginalia](https://github.com/shenmintao/marginalia) | Python | 239 | A library-science-inspired personal knowledge management system built around LLM agents rather than a search-first UX. |

## 3. Trend Signal Analysis

The clearest emerging category today is **agent memory as its own product layer**, decoupled from the underlying model: deja-vu, projectmem, and MaxFreedomPollard's Compartment all attack the same pain point — coding agents that forget context between sessions or repeat failed approaches — but with different mechanisms (session-history search with no LLM, MCP-based failure tracking, encrypted offline memory). This is a maturing subcategory, not a one-off.

A second theme is **meta-harness / harness-of-harnesses tooling** — omnigent, ruflo, metaharness, munder-difflin, and EverMind-AI's Raven all sit above Claude Code, Codex, Cursor, and Gemini CLI to orchestrate or unify them. This reflects real fragmentation in the agent-CLI space: with five-plus credible coding-agent CLIs now in daily use, cross-harness compatibility has become a competitive requirement rather than a nice-to-have.

Third, **Anthropic's Agent Skills format is driving an explosion of narrow, single-purpose packages** — de-AI-writing skills, diagram design, video generation, exam prep, translation, novel writing — following anthropics/skills and the Claude Code plugin architecture. Quality varies enormously and several entries lean on vague or pseudo-scientific claims, so vetting before installation matters more than star count.

Fourth, there's a notable **China-based financial/quant data cluster** (a-stock-data, TradingAgents-astock, tick-stock-panel, CNEquity, global-stock-data) — a coordinated push to give agents structured, zero-auth market data for A-share and global equities.

## 4. Community Hot Spots

- **Agent memory tooling** (deja-vu, projectmem) — a genuinely new subcategory worth tracking as it matures beyond v1.
- **Cross-harness orchestration** (omnigent, ruflo, metaharness) — solves real CLI lock-in, but the space is crowded and unproven long-term.
- **Agent Skills packaging boom** — dozens of narrow skills shipped daily; vet functionality claims before installing, several lean on unverifiable language.
- **On-device inference efficiency** (turbo-fieldfare's 2 GB Gemma run) — continued demand for serious local LLM inference on consumer Apple silicon.
- **China fintech/quant agent stack** — a-stock-data, TradingAgents-astock, CNEquity form a coherent regional cluster worth watching if you work in quant or fintech tooling.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
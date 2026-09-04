# AI Open Source Trends 2026-09-04

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-04 11:56 UTC

---

# AI Open Source Trends Report — 2026-09-04

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Gives coding agents memory by mining the session history already sitting on disk (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, and 17 more) — no LLM calls, no embeddings, one local Go binary. Worth trying for anyone with months of agent transcripts who wants recall without standing up a vector DB.
- **[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — Pixel-native search that skips document/HTML parsing entirely, backed by an arXiv paper (2606.28344). Interesting for RAG builders tired of brittle PDF/HTML extraction pipelines, though it's early and unproven at scale.
- **[duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server)** — A native MCP plugin that exposes x64dbg's full debugger surface (breakpoints, stepping, memory reads, registers) over HTTP, written in Zig as a zero-dependency single binary. Useful for reverse engineers wiring AI copilots directly into binary-analysis workflows.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Claims to run Gemma 4 26B-A4B inference in ~2GB of RAM on any M-series MacBook. If the claim holds up under testing, this is a big deal for local inference without a discrete GPU — worth verifying before relying on it, it's a small, very new repo.
- **[aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag)** — A free, no-signup MCP server retrieving over 22.5M Taiwanese court rulings and administrative interpretations with citation checking. A good concrete template for doing vertical, citation-grounded RAG right, not just a toy demo.
- Flagging hype: skills like **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** ("talk like a caveman to cut 65% of tokens") and **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** ("think like the laziest senior dev") are riding the Claude Code Skills wave with gimmicky framing — fun to skim, not something to build a workflow around.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+281) | Anthropic's official public repo for Agent Skills, the plugin format now driving a wave of third-party skill packages across today's list. Its continued daily growth signals Skills is becoming the default extension mechanism for Claude Code. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 13,264 | A universal provider proxy letting Codex CLI/App/SDK and Claude Code run any backend LLM (Gemini, Grok, DeepSeek, Ollama). High star count reflects real demand to decouple agent harnesses from a single vendor's models. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 1,869 | Native MCP plugin exposing x64dbg's debugger functionality over HTTP for any MCP-compatible assistant. Zero-dependency single-binary design makes it easy to drop into a reverse-engineering toolchain. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 5,531 | Adds codebase-specific contextual understanding to Claude Code, Cursor, Codex and Gemini to make them faster and cheaper per query. Solid star count for a fairly young context-layer tool. |
| [riponcm/projectmem](https://github.com/riponcm/projectmem) | Python | 796 | Local, MIT-licensed MCP memory server that records issues, attempts and fixes so an agent stops repeating failed approaches. No cloud, no telemetry — a lightweight fix for a common coding-agent pain point. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 770 | Session-history-based memory for coding agents, no LLM/embeddings required, single local Go binary works across 20 agents. Notable for solving agent memory without adding infrastructure cost. |
| [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | TypeScript | 0 (+161) | Open-source local inference server auto-selecting the best model for your hardware, pluggable into Pi, OpenCode, Hermes, OpenClaw, Codex and Claude Code. Positions itself as harness-agnostic local-model infrastructure. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 432 | Multi-harness control plane doing quota-aware rotation across multiple Claude/Codex subscriptions with shared thread context and cross-model review. Reflects the growing "manage many agent CLIs at once" problem. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 21,918 | A hybrid deterministic-pipeline + LLM-agent code review tool "battle-tested at Alibaba's scale," with line-level comments and a multi-language ruleset covering NPE, thread safety, XSS and SQL injection. Highest star count in this batch — a serious enterprise-grade tool, not a demo. |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,686 | A text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts. Notable as a research-grade approach to automating skill-writing itself. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,680 | An open-source meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting teams swap harnesses without rewriting workflows while enforcing sandboxing and policy. |
| [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | TypeScript | 6,312 | A local multi-agent harness built on top of existing Claude Code/Codex subscriptions that simulates running "an office of agents." Large early star count for a workflow-orchestration concept repo. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 5,027 | Free, open-source Microsoft Office alternative (Word/Excel/PowerPoint/PDF/Markdown) with built-in AI agents, cross-platform. Useful if you want an agent-native office suite rather than a plugin bolted onto existing software. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,741 | Billed as "the Harness of Harnesses" — a persistent, self-evolving multi-agent ecosystem for cross-domain collaboration. Ambitious scope; worth watching for maturity before adopting. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 0 (+751) | An agent-harness performance optimization system (skills, instincts, memory, security, research-first development) targeting Claude Code, Codex, OpenCode, Cursor and beyond. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 0 (+774) | Nous Research's entry into the agent-harness space, described simply as "the agent that grows with you" — from a known lab, so worth tracking even with limited detail available today. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 0 (+1,672) | A fully local, open-source ElevenLabs alternative covering voice cloning, voice design, dubbing, dictation and audiobook creation across 646 languages. Today's largest single-day star gain among applications — a strong signal of pent-up demand for a local TTS/voice suite. |
| [simonlin1212/a-stock-data](https://github.com/simonlin1212/a-stock-data) | — | 9,553 | A zero-auth, 19-source China A-share data toolkit built specifically for AI agents, with 54 endpoints across an 11-layer architecture. Part of a recurring theme today: agent-friendly financial data infrastructure for Chinese markets. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,578 | A local-first conversational AI video editor with a professional multi-track timeline, Agent Skills support and MCP integration for Remotion rendering. |
| [simonlin1212/TradingAgents-astock](https://github.com/simonlin1212/TradingAgents-astock) | Python | 3,167 | A multi-agent A-share investment research framework with 7 AI analysts running bull/bear debates and risk assessment, adapted from TradingAgents for Chinese market rules (dragon-tiger lists, hot money, lockups). |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | TypeScript | 596 | Desktop novel-writing software organizing inspiration, characters, worldbuilding, outlines and revision into a controllable workflow, with Ollama support for local use. |
| [guangshu100/BidMaster-Pro](https://github.com/guangshu100/BidMaster-Pro) | Python | 250 | An end-to-end bid/tender agent for the Chinese market — proposal generation, compliance checks, RAG knowledge base, OCR extraction — turning a tender announcement into a deliverable docx. Narrow but concrete vertical use case. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [google-research/timesfm](https://github.com/google-research/timesfm) | Python | 0 (+1,618) | Google Research's pretrained Time Series Foundation Model for forecasting. A large single-day star gain for a mature research repo suggests renewed attention, possibly tied to a recent update or citation. |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,686 | See above — also relevant here as a training-adjacent method for optimizing agent skills rather than model weights directly. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,618 | Runs Gemma 4 26B-A4B in ~2GB of RAM on M-series MacBooks — a striking efficiency claim worth independent verification given the repo's newness. |
| [radixark/miles](https://github.com/radixark/miles) | Python | 0 (+55) | An enterprise-facing reinforcement learning framework for LLM/VLM post-training, forked from and co-evolving with `slime`. Smaller today's-star count but relevant for teams doing in-house RLHF/RL post-training. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,871 | Proposes pixel-native search as a replacement for web/document parsing, backed by an arXiv paper (2606.28344). Highest star count in this category, suggesting real interest in an alternative to brittle HTML/PDF-based retrieval. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,031 | An AI equity-research agent combining resilient workflows, evidence-grounded RAG, versioned reports and automated quality evaluation — a well-scoped example of RAG applied to a specific analyst workflow. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 393 | A 12-phase research skill for Claude Code with a plan-review gate, parallel sub-agent search, claims-ledger triangulation and four-layer citation verification across 47 APIs. Notably rigorous design for a research-agent skill. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 417 | Converts any document, including scanned PDFs, into clean AI-ready Markdown locally, batching folders offline with far fewer tokens than vision-model approaches — a practical RAG preprocessing utility. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 307 | Free, no-signup MCP server retrieving 22.5M Taiwanese court rulings with citation verification. A strong example of narrow, well-grounded vertical RAG. |
| [shenmintao/marginalia](https://github.com/shenmintao/marginalia) | Python | 239 | A library-science-inspired personal knowledge management system built around LLM agents — smaller and more personal in scope than the enterprise RAG tools above. |

## 3. Trend Signal Analysis

The dominant theme today is **agent memory and statelessness**. At least half a dozen distinct projects (`deja-vu`, `projectmem`, `Compartment`, `sandbase-harness`, `Agentlas-OS`) attack the same problem — coding agents that forget everything between sessions — from different angles: mining existing session logs with no embeddings (`deja-vu`), tracking past failed attempts (`projectmem`), or fully encrypted offline memory (`Compartment`). This suggests memory has become the most acute unsolved UX gap in agent tooling, more urgent than raw model capability.

A second cluster is **MCP as the universal integration layer**, now extending well beyond typical dev tools into niche domains: a native x64dbg debugger plugin, an RTL waveform-debug server for hardware engineers (Tencent/wave-mcp), and a Taiwanese legal-database server. MCP is becoming the default way to expose any specialized system to an AI assistant, not just APIs built for it.

Third, the proliferation of **multi-harness orchestration and proxy tools** (`claudexor`, `opencodex`, `omnigent`, `metaharness`) signals that no single coding-agent CLI (Claude Code, Codex, Cursor, Hermes, OpenClaw, Pi) has won outright — developers increasingly want tools that sit above the fragmentation rather than commit to one vendor.

Finally, **Agent Skills** (Anthropic's plugin format) is visibly the newest fast-growing packaging convention, spawning everything from serious research tooling (`SkillOpt`, `deepdive`) to novelty prompt-engineering gimmicks (`caveman`, `ponytail`).

## 4. Community Hot Spots

- **Agent memory without vector databases** — `deja-vu` and `projectmem` show a shift toward lightweight, local, LLM-free memory solutions mined from data agents already produce, rather than bolting on embedding infrastructure.
- **MCP servers for niche technical domains** — debuggers, RTL/hardware waveforms, and legal databases getting MCP front-ends signals MCP is becoming the default extension point well outside typical dev-tool use cases.
- **Multi-harness control planes** (`claudexor`, `opencodex`, `omnigent`) — worth watching if you're juggling more than one coding-agent subscription; this category is consolidating fast.
- **Vertical RAG done well** — `tw-legal-rag` and `FinSight-AI` are good reference implementations of citation-grounded, domain-specific retrieval rather than generic document Q&A.
- **China A-share/financial-data agent tooling** — repeated appearance of `simonlin1212`'s data toolkits and `TradingAgents-astock` suggests a distinct, fast-moving regional ecosystem of agent-oriented market data and trading-research tools.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Open Source Trends 2026-09-17

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-17 12:23 UTC

---

# AI Open Source Trends Report — September 17, 2026

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds shared memory for Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and 20+ other coding agents by mining the session history already sitting on disk — no LLM calls, no embeddings. Worth trying for anyone who bounces between multiple coding agents and is tired of re-explaining the same bug fix to each one.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — Billed as "the ripgrep of AI context": a zero-dependency C++23 CLI + MCP server that lets an agent find relevant code by signature (claimed 74.7% fewer bytes than full function bodies) and then verify blast radius and tests-to-run before committing to a change. Useful for teams building custom agent harnesses who want cheaper, more accurate context retrieval than dumping whole files into the prompt.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A desktop app that records your on-screen work session, feeds it through the GitHub Copilot CLI, and reconstructs it as an intent-plus-ordered-steps reusable Skill for Copilot Studio or Microsoft Cowork. Interesting for anyone tired of hand-writing agent skills — it turns "watch me do this once" into an automation.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with a sub-300µs in-memory BM25 search and an embedded MCP server — no external databases, pure Go, claims 80% token-bloat reduction. Worth a look for anyone frustrated by agents that forget project context between sessions and don't want to stand up a vector DB just to fix it.
- **[StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)** — A research-backed (arXiv:2606.28344) approach to retrieval that skips text/HTML parsing entirely and searches documents as pixels natively. Relevant to anyone doing RAG over messy real-world documents (scanned PDFs, complex layouts) where parsers are the actual bottleneck.
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — A pure C, zero-dependency inference engine that runs frontier MoE models by streaming experts from disk rather than holding the full model in RAM. Aimed at hobbyists and researchers who want to run huge models on hardware they already own; worth verifying real-world throughput before betting a workload on it, since disk-streamed experts imply a real latency trade-off.

**A skeptical flag:** [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) shows 140,951 stars for what reads as a joke/meme repo ("makes your AI agent think like the laziest senior dev in the room"). That star count is wildly out of proportion to the project's apparent scope and description — treat it as a signal of possible star manipulation or a viral meme rather than a genuine adoption signal.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+3290) | Hybrid deterministic-pipeline + LLM-agent code review tool battle-tested at Alibaba's scale, with line-level comments and a built-in multi-language security ruleset (NPE, XSS, SQLi). Massive single-day star jump signals strong pent-up demand for AI-assisted review that isn't just an LLM wrapper. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,225 | Zero-dependency C++23 CLI + MCP server that gives coding agents cheap, signature-level code context instead of full-file dumps, plus blast-radius and test-impact checks. A Red Hat-backed project tackling the real cost problem of agent context windows. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 872 (+872) | Pure-C, zero-dependency engine that runs frontier MoE models by streaming experts from disk, aiming to make huge models runnable on consumer hardware. Fast climb today for a systems-level (non-Python) approach to local inference. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 208 | Open-source, license-free MCP server for RTL waveform debugging — reads FST waveforms and SystemVerilog netlists, exposing 34 tools for driver analysis and pass/fail diffing. Niche but a clean example of MCP applied outside the usual coding-agent use case (hardware/EDA workflows). |
| [coder/coder](https://github.com/coder/coder) | Go | 0 (+83) | Provisions secure, reproducible cloud dev environments for both human developers and their AI agents. Steady rather than explosive growth, but relevant as agent sandboxing becomes a bigger concern. |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | 0 (+327) | Reusable computer-vision building blocks (detection, tracking, annotation) usable independent of any specific model. Consistent trending presence reflects CV tooling's steady, non-hype-driven demand. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+3606) | A coding-agent Skill that runs multi-phase security audits with independently verified, machine-readable findings. Biggest single-day gain in today's trending list — strong signal that "skills" (not just standalone agents) are the current growth vector. |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | TypeScript | 0 (+1350) | CLI + browser extension letting AI agents drive your real, already-logged-in browser without hijacking your session, usable from any shell-capable agent. Solves the practical pain of agents needing authenticated web access without separate credential handling. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 0 (+940) | Converts general-purpose coding agents into research agents. From alphaXiv, a known arXiv-adjacent platform, so plausibly more substantive than a typical wrapper repo. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 824 | Shared, LLM-free memory layer across 20+ coding agents, mined from existing local session logs. Notable for explicitly avoiding embeddings/LLM calls — a lighter-weight bet against the more common vector-memory approach. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,968 | Records a screen session and uses GitHub Copilot CLI to turn it into a reusable Skill/Automation for Copilot Studio and Cowork. A Microsoft-backed entry into the "record once, automate forever" pattern for agent skills. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+680) | Production-grade engineering skills for AI coding agents from a well-known Google Chrome/web-performance engineer. Credibility of the author is the main signal here, not novelty of concept. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 0 (+1173) | Agent-harness performance optimization system (skills, "instincts," memory, security) spanning Claude Code, Codex, Opencode and Cursor. Broad cross-harness ambition; worth checking whether the implementation matches the scope of the pitch. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 656 | A "meta-harness" for scaffolding your own branded agent harness (CLI, MCP server, memory, learning loop, signed releases) compatible with Claude Code, Codex, pi.dev, Hermes and OpenClaw. Useful for teams building an internal agent product rather than just using one. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Go | 0 (+1123) | Open-source LLM knowledge platform that turns raw documents into a queryable RAG system, an autonomous reasoning agent, and a self-maintaining wiki. Solid one-day gain for a Tencent-backed all-in-one knowledge stack. |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | TypeScript | 0 (+665) | Open-source AI voice studio for cloning voices, dictation, and voice-driven content creation. Consumer-facing entry in the fast-growing AI voice-tool space. |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Python | 0 (+287) | Official Anthropic plugin repo for knowledge workers using Claude Cowork. Worth watching as a signal of where Anthropic is steering non-coding agent use cases. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 3,216 (+396 today) | Self-hosted, multi-user, multi-agent AI assistant. Appears in both the trending list and topic search today, suggesting real cross-source momentum rather than a one-off spike. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,981 | arXiv-backed (2606.28344) pixel-native search that eliminates the text/HTML parsing step entirely for RAG pipelines. High star count plus a real paper citation makes this the most substantive RAG entry today. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 689 | Git-native persistent memory for coding agents implementing Google's OKF v0.2, with sub-300µs BM25 search and no external database dependency. A lightweight, dependency-free alternative to vector-DB-based agent memory. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 267 | Local-first, project-scoped SQLite engine proposed as a "Universal Cross-Model Episodic Memory Standard" for Antigravity, Claude Code, Cursor, Codex CLI, and OpenCode. Ambitious standardization attempt in a space that currently has none. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 581 | Encrypted, fully offline agentic memory with a GUI memory map, one-click install across OS/agents. Notable for prioritizing encryption and offline operation over the more common cloud-vector-store approach. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 257 | Local-first memory engine for AI agents using semantic embeddings, packaged as a single zero-config Rust binary. Small but a clean, dependency-free take on semantic agent memory. |

*(No standout entries for 🧠 LLMs / Training — today's data skews heavily toward agent tooling and infrastructure rather than model weights or training frameworks; the closest candidate, [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) (Swift, 6,756 stars, Gemma 4 26B-A4B inference in ~2GB RAM on M-series Macs), is more an inference/deployment trick than a training project.)*

## 3. Trend Signal Analysis

The clearest signal today is the explosion of **"Skills" as the unit of agent extensibility**, distinct from full agent frameworks. `cloudflare/security-audit-skill` (+3,606), `Tencent/BrowserSkill` (+1,350), `addyosmani/agent-skills` (+680), and `microsoft/skill-recorder` all trended simultaneously, alongside dozens of niche Agent Skills in the topic search (translation, PPT generation, TCM course study, de-AI writing). This looks like direct downstream momentum from Anthropic's Agent Skills format and Claude Cowork, now being adopted cross-vendor (Microsoft's skill-recorder explicitly targets Copilot Studio/Cowork). The pattern is shifting from "build a new agent" to "package a reusable capability an existing agent can load."

A second theme is **agent memory becoming a first-class, provider-agnostic layer**: `vshulcz/deja-vu`, `okf-memory/okf-agent-memory`, `engrim`, `Compartment`, and `uteke` all attack the same problem — persistent, cross-session, often cross-harness memory — with notably different bets (no-LLM/BM25 vs. embeddings vs. encrypted offline). This suggests the ecosystem sees memory fragmentation across Claude Code/Codex/Cursor/OpenClaw as a real pain point worth solving independently of any single vendor.

Third, **code-review and security-audit automation** (`alibaba/open-code-review`, `cloudflare/security-audit-skill`) had the two largest single-day star gains, suggesting enterprises are prioritizing "trustworthy, verifiable" AI agent output over raw code generation — a maturing-market signal rather than a novelty one. Notably absent: any major new foundation model or training-framework release, reinforcing that today's activity is entirely in the application/tooling layer built on top of existing frontier models.

## 4. Community Hot Spots

- **Agent Skills as a portable capability format** — watch this space closely; it's absorbing energy that a year ago would have gone into standalone agent frameworks.
- **Cross-harness, LLM-free agent memory** (`vshulcz/deja-vu`, `okf-agent-memory`) — a pragmatic, low-cost alternative to vector-DB memory that's worth evaluating before reaching for embeddings by default.
- **MCP servers for non-coding domains** (`Tencent/wave-mcp` for RTL/EDA, `zhoushoujianwork/easyeda-agent` for PCB design) — MCP is visibly spreading beyond software development into hardware engineering workflows.
- **Context-efficiency tooling** (`redhat-et/ripwire`) — as agent context costs stay a real constraint, expect more tools that compress what agents need to read rather than more tools that make agents read more.
- **Treat viral star counts with suspicion** — `DietrichGebert/ponytail`'s 140,951 stars on a joke-framed repo is a reminder to sanity-check adoption signals before recommending a tool based on stars alone.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
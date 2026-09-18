# AI Open Source Trends 2026-09-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-18 12:02 UTC

---

# AI Open Source Trends Report — 2026-09-18

## 1. Finds

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — A coding-agent skill that runs multi-phase security audits and produces independently verified, machine-readable findings rather than a single LLM's unchecked opinion. Worth a look for teams wiring agentic code review into CI who need output they can trust and diff programmatically; the +3,019 stars in one day and Cloudflare's backing make this the most credible "agent skill" release today.
- **[Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) [TypeScript]** — Lets any shell-capable AI agent drive your *real, already-logged-in* browser (CLI + extension) instead of spinning up a fresh, unauthenticated headless session. Useful for anyone whose agent workflows keep breaking on logins/2FA/session state — a genuinely different approach from the usual Playwright-wrapper agent-browser tools.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire) [C++]** — A zero-dependency C++23 CLI + MCP server that gives coding agents "ripgrep for context": it returns compact, labelled signatures (claimed 74.7% fewer bytes than full bodies) plus blast-radius/tests-to-run/quality-delta info, instead of dumping raw file contents into the context window. Relevant to anyone burning tokens on repo exploration in Claude Code/Codex-style agents; still early (2.2k stars) but the design is concrete, not just a wrapper.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) [Go]** — A single local Go binary that builds one shared memory store from the session history already sitting on disk across Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and 20+ other agents — no LLM, no embeddings. Notable because it solves a real, boring pain point (a fix discovered in one agent doesn't carry over to another) without adding another vector DB dependency.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) [Go]** — Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with sub-300µs in-memory BM25 search and an embedded MCP server; claims 80% token-bloat reduction with zero external databases. Worth evaluating against `deja-vu` above if you want a spec-backed, git-committed memory layer rather than a disk-scraping one.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) [Swift]** — Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. A concrete, verifiable engineering feat (not a framework or wrapper) for anyone doing on-device inference on Apple silicon; the 6,768 stars suggest real developer interest in squeezing large MoE models onto consumer hardware.

⚠️ **Caution flag**: [affaan-m/ECC](https://github.com/affaan-m/ECC) ("agent harness performance optimization system. Skills, instincts, memory, security, and research-first development...") reads as buzzword-dense marketing copy with no concrete mechanism described — treat as unverified until the README shows what it actually does. Also note [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) shows an implausible 141,736 stars for a joke repo — likely star-gaming or a data artifact; topic-search star counts should be treated with more skepticism than the live trending page's today-delta numbers.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | TypeScript | 0 (+442) | Anthropic's terminal-native agentic coding tool; still gaining hundreds of daily stars a year-plus after launch, evidence of sustained (not just novelty) adoption. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,244 | Zero-dependency MCP context server that returns compact code signatures instead of raw bodies to cut agent token usage; a Red Hat engineering-team project with a clearly stated quantitative claim (74.7% byte reduction). |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 830 | Cross-agent shared memory built from existing on-disk session history, no LLM or embeddings required; solves the "agent amnesia across tools" problem with a single local binary. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 694 | Git-native persistent memory implementing Google's OKF v0.2 spec with sub-300µs BM25 search and an embedded MCP server; claims 80% token-bloat reduction with no external DB. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 1,995 | Native MCP plugin for the x64dbg debugger exposing breakpoints, memory reads, and register dumps over HTTP to any MCP client; a zero-dependency single binary built in Zig. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 15,246 | Universal LLM provider proxy letting Codex CLI/App/SDK and Claude Code point at Gemini, Grok, DeepSeek or Ollama instead of the default backend. |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | TypeScript | 0 (+1,319) | CLI + browser extension that lets shell-based agents control your real, logged-in browser session rather than a fresh headless one. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 4,328 | Open-source Chinese-language book quantitatively deriving LLM training/inference system design from hardware constraints and model architecture, with companion calculators and experiments. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+3,019) | Multi-phase security-audit agent skill producing independently verified, machine-readable findings; the largest single-day star gain in today's data, backed by Cloudflare. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 0 (+571) | Self-hosted, multi-user multi-agent AI assistant from Tencent Cloud; also appears independently in the ai-agent topic search with 3,767 stars, suggesting broad organic pickup. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,071 | Open-source "meta-harness" that orchestrates Claude Code, Codex, Cursor and Pi under one policy/sandboxing layer, letting you swap harnesses without rewriting agent logic. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 660 | Scaffolding tool for building your own branded agent harness (CLI, MCP server, memory, learning loop, signed releases) on top of Claude Code, Codex, pi.dev or OpenClaw. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+677) | Production-grade engineering skills for AI coding agents from a well-known DX-focused engineer; worth checking for practical, battle-tested skill patterns rather than toy examples. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 471 | Multi-harness control plane doing quota-aware rotation across multiple Claude/Codex subscriptions with shared thread context and cross-model review. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp) | JavaScript | 0 (+64) | Connects Claude Code to a local TradingView Desktop instance for AI-assisted chart analysis; niche but a concrete example of MCP bridging a proprietary desktop app. |
| [HiThink-Tech/Financial-API](https://github.com/HiThink-Tech/Financial-API) | TypeScript | 3,588 | Official Tonghuashun (HiThink) A-share market-data service — quotes, financials, indices — exposed via API/MCP/CLI/Python for AI agents and quant research. |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | TypeScript | 9,688 | End-to-end agent workflow for cloning viral videos: face swap, script rewrite, B-roll, generating 100 variants from one command. |
| [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | JavaScript | 8,404 | Agent skill that generates browser-editable presentations from multiple visual themes, exportable to HTML/PDF/PPTX. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,900 | Local-first conversational AI video editor with a full multi-track timeline, Agent Skills, and MCP integration for Remotion-based rendering. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,768 | Runs Google's Gemma 4 26B-A4B MoE model in ~2 GB of RAM on any Apple-silicon MacBook — a concrete on-device inference-efficiency result, not just a wrapper. |
| [youngyangyang04/llm-master](https://github.com/youngyangyang04/llm-master) | — | 752 | Chinese-language full-stack LLM learning path covering prompt engineering, RAG, agents, MCP, fine-tuning and deployment through to interview prep. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 306 | ModelScope's open cookbook for model selection, inference, fine-tuning, evaluation, RAG and agent-building, aimed at getting a first model running through to a real app. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,985 | Proposes pixel-native retrieval that skips web/document parsing entirely, based on an accompanying arXiv paper (2606.28344) — a genuinely different take on RAG ingestion. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,251 | AI-native markdown IDE and LLM wiki for building and querying a team knowledge base. |
| [deer-flow/llm-space](https://github.com/deer-flow/llm-space) | TypeScript | 1,908 | Local-first desktop app for prototyping agent ideas, inspecting each harness step, replaying failures and benchmarking performance in one place. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 279 | Local-first, project-scoped SQLite episodic-memory standard meant to work across Antigravity, Claude Code, Cursor, Codex CLI and OpenCode with zero cloud lock-in. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 257 | Single-binary, zero-config local memory engine for AI agents using semantic embeddings, fully offline. |

## 3. Trend Signal Analysis

Today's data is dominated by **agent infrastructure plumbing rather than new base models**: harnesses-for-harnesses (`omnigent`, `metaharness`, `claudexor`), cross-agent shared memory (`deja-vu`, `okf-agent-memory`, `engrim`, `uteke`, `Compartment`), and MCP servers for increasingly specific verticals (a debugger, an EDA tool, Taiwanese legal search, x64dbg, financial market data). This suggests the ecosystem has moved past "which agent CLI wins" and into "how do I make my agent remember things and reach more tools" — memory portability in particular shows up in at least five independent projects today, all converging on the same complaint (session state trapped inside one tool) with different implementations (BM25, embeddings, or plain log-scraping).

A second visible cluster is **trust and verification of agent output**: Cloudflare's `security-audit-skill` (independently verified, machine-readable findings) and Alibaba's `open-code-review` (deterministic pipelines + LLM agent for line-level review) both frame themselves explicitly around *checking* agent/LLM work rather than just generating it — a sign the "just let the agent do it" phase is being followed by tooling for auditing what it did.

On the model side, the standout is `turbo-fieldfare`'s claim of running Gemma 4 26B-A4B in ~2 GB RAM on Apple silicon, tying today's activity to Google's recent Gemma 4 release and the broader push toward efficient on-device MoE inference. No new foundation-model launches otherwise appear in the data; the "LLM" topic search is mostly agent tooling that happens to be tagged `llm`. Star-count inflation (e.g., `ponytail` at 141k stars for a joke repo) is worth flagging as a data-quality caveat for topic-search results generally.

## 4. Community Hot Spots

- **Cross-agent persistent memory** — `deja-vu`, `okf-agent-memory`, `engrim`, `uteke` and `Compartment` are all independently solving "my agent forgets everything when I switch tools," with no clear winning approach yet (disk-scraping vs. git-native vs. SQLite standard vs. embeddings) — worth watching which pattern consolidates.
- **Verified/auditable agent skills** — `cloudflare/security-audit-skill` and `alibaba/open-code-review` both foreground independent verification of LLM output, a maturity signal worth tracking as agentic coding moves into production CI pipelines.
- **Context-efficiency tooling for coding agents** — `ripwire`'s compact-signature approach to repo context is a concrete, measurable alternative to just dumping files into the prompt; relevant to anyone hitting context-window or cost limits with agentic coding.
- **Real, authenticated browser control for agents** — `Tencent/BrowserSkill` sidesteps the recurring pain of headless-browser agents losing session/login state, a practical fix rather than a new abstraction.
- **On-device large-model inference** — `turbo-fieldfare`'s 2 GB RAM Gemma 4 result is a concrete data point for engineers evaluating whether large MoE models are becoming viable on consumer Apple-silicon hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
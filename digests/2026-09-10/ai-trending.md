# AI Open Source Trends 2026-09-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-10 12:01 UTC

---

# AI Open-Source Trends Report — September 10, 2026

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that gives Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and ~20 other coding agents a *shared* memory, built entirely from the session history already sitting on your disk — no LLM calls, no embeddings. A fix your agent found last month in Cursor resurfaces automatically in Codex today. Worth trying for anyone juggling multiple coding-agent subscriptions and tired of re-explaining the same bug fix to each one.

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — "The ripgrep of AI context": a zero-dependency C++23 CLI and MCP server that lets an agent find relevant code without reading the whole repo, then verify what it actually built (blast radius, tests-to-run, quality deltas). Claims function signatures at 74.7% fewer bytes than full bodies. Backed by Red Hat's emerging-tech group, which lends it more credibility than the average weekend MCP server.

- **[AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)** — A Rust CLI that answers one annoying question: of the hundreds of models and providers out there, which ones will actually run on *your* hardware? Useful for anyone choosing a local model without wanting to trial-and-error through OOM crashes.

- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — Pure C, zero dependencies, streams MoE experts from disk instead of holding a whole model in RAM/VRAM. If the claims hold up under real benchmarking, this is a meaningful option for running frontier-class MoE models on modest hardware — worth a skeptical look rather than blind trust given how early and undecorated (0 total stars) the repo is.

- **The "OKF" memory standard, appearing three times independently today** — [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) (Go, sub-300µs BM25 search, embedded MCP server), [serradura/okf](https://github.com/serradura/okf) (Ruby, portable knowledge bundles), and [scaccogatto/okf-skills](https://github.com/scaccogatto/okf-skills) (Python, authoring/validation toolkit) all reference "Open Knowledge Format" as if it's an established spec. This looks like the beginning of a real interoperability push for portable agent memory rather than one team's pet project — worth watching, though the "standard" itself doesn't yet have a single canonical home visible here.

- **Caution flag: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** shows 134,185 stars against a one-line joke description ("makes your AI agent think like the laziest senior dev in the room"). That star count is wildly out of line with everything else in this dataset and reads as a data artifact or star-manipulation rather than genuine community signal — don't treat it as a real trend indicator.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | Rust | 0 (+247) | Rust CLI that matches hundreds of models/providers to what your hardware can actually run. Brand-new but directly useful for local-model selection. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 0 (+157) | Zero-dependency C engine streaming MoE experts from disk to run frontier-scale models on modest hardware. Bold claims, worth independent verification. |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | TypeScript | 0 (+591) | Free MIT AI gateway fronting 352 providers and 1200+ models with quota-aware fallback and token-compression, built by 550+ contributors. Today's stars suggest a coordinated launch push. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 14,176 | Universal provider proxy letting Codex CLI/App/SDK and Claude Code talk to any backend model. Large existing star base signals real adoption, not just a launch spike. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 6,885 | Layer that gives Claude Code, Cursor, Codex and Gemini contextual understanding specific to your codebase, aiming to cut cost and latency. Solid traction for a context-augmentation tool. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 1,862 | Zero-dependency C++23 CLI/MCP server for fast, verifiable code context retrieval — the "ripgrep of AI context." Red Hat backing adds credibility over typical hobby MCP servers. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 797 | Single-binary shared memory across 20+ coding agents built from existing session history, no LLM or embeddings required. A genuinely novel take on cross-tool agent memory. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 22,188 | Hybrid deterministic-pipeline + LLM-agent code review tool, battle-tested at Alibaba's scale with line-level comments and a built-in security ruleset. High star count backed by a credible enterprise deployment story. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+688) | An agentic skills framework and software development methodology for coding agents. Strong single-day pickup suggests it's resonating with the "agent skills" wave. |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | TypeScript | 0 (+125) | `npx skills` — an open agent-skills tool from Vercel Labs, lending institutional weight to the fast-growing agent-skills ecosystem. |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | TypeScript | 0 (+417) | Local-first AI coding agent desktop app combining Electron, a Rust host core, and the pi Agent Harness with user-installable plugins. Notable for going beyond terminal-only agent UX. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,822 | Meta-harness that orchestrates Claude Code, Codex, Cursor and Pi interchangeably with shared policy/sandboxing and real-time multi-device collaboration. High stars for a genuinely ambitious scope. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,301 | Local-first AI agent workspace spanning coding, writing, design, research and automation in one runtime (desktop GUI and TUI). |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,804 | Self-styled "harness of harnesses" — a persistent, self-evolving multi-agent ecosystem for cross-domain collaboration. Ambitious framing; worth checking whether the implementation matches the pitch. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,907 | Records an on-screen work session and uses GitHub Copilot CLI to reconstruct it into a reusable Skill/Automation for Microsoft Scout/Copilot Cowork/Studio. Credible source, practical "show, don't write" skill-authoring approach. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 644 | Scaffolding tool for building your own branded agent harness (CLI, MCP server, memory, learning loop) compatible with Claude Code, Codex, pi.dev and OpenClaw. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | TypeScript | 0 (+806) | Open multi-agent interactive classroom for one-click immersive learning experiences. Highest today-star gain among new applications — a signal of interest in AI-native education tooling. |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | TypeScript | 0 (+299) | Self-hosted autonomous trading agent spanning Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs and 5 EVM chains, with an agent-commerce payment protocol. High-risk category (autonomous trading) worth flagging for anyone evaluating it. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 6,379 | Free open-source AI office suite (Docs/Sheets/Slides/PDF) that edits real .docx/.xlsx/.pptx files with an on-device PDF-to-Word converter, BYOK. Cross-platform desktop reach is notable. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 7,987 | AI video-production skill for Claude Code/Codex built on Remotion, with 152 shot recipes and 209 motion previews. Large star count for a skill package suggests real creator-community pickup. |
| [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) | Python | 15,703 | Rebuilds an object from a reference image as a code-only, procedural, animation-ready Three.js model — a token-efficient alternative to generic image-to-3D pipelines. |
| [HiThink-Tech/Financial-API](https://github.com/HiThink-Tech/Financial-API) | TypeScript | 3,032 | Official Tonghuashun (HiThink) A-share financial data service exposed via API/MCP/CLI/Python, aimed at AI agents and quant research. |
| [simonlin1212/Vibe-Research](https://github.com/simonlin1212/Vibe-Research) | TypeScript | 2,441 | Personal investment-research agent for A-share/US/HK markets (daily recap, news radar, backtesting), built on the open-source Codex harness. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 7,461 | Claims to run a 2.78-trillion-parameter Kimi K3 on a single CPU in 8.24 GB RAM via portable C99 with no BLAS/framework/GPU. Extraordinary claim — treat as a compelling proof-of-concept to verify, not an established result. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,690 | Gemma 4 26B-A4B inference in ~2 GB RAM on any M-series MacBook. Same category of "extreme compression" claim as kimi-k3-in-c — worth independent benchmarking before relying on it. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 6,728 | Billed as the "world's first open-source enterprise world model." Vague, high-hype framing with no concrete technical detail in the description — approach with skepticism until there's a paper or benchmark to back it. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 9,919 | Pixel-native retrieval that skips web/document parsing entirely, backed by an arXiv paper (2606.28344). Research-grounded rather than just a wrapper, which sets it apart from typical RAG repos. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 536 | Git-native persistent agent memory implementing "Google OKF v0.2" with sub-300µs in-memory BM25 search and an embedded MCP server, claiming 80% token-bloat reduction with zero external DB. Part of a same-day cluster of OKF-branded projects. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 602 | Turns local files into a wiki for agents, open-source and local-first — a lightweight alternative to full vector-DB RAG setups. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 586 | Fully offline, encrypted agentic memory with a one-click GUI memory map, cross-OS and cross-agent. Positions itself on privacy, a differentiator from cloud-memory competitors. |
| [serradura/okf](https://github.com/serradura/okf) | Ruby | 155 | "Open Knowledge Format" — durable structured memory for agents via Skills, MCP, an interactive graph, TUI, CLI, Docker and a Claude Code plugin, fully local. Another data point in today's OKF cluster. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 312 | Free, no-signup Taiwan legal MCP server/CLI over 22.5M court rulings and administrative interpretations, with citation checking. A well-scoped, credible vertical RAG example rather than a generic demo. |

## 3. Trend Signal Analysis

Two clusters dominate today's data far more than raw star counts suggest. First, **agent memory and context persistence** has become its own sub-ecosystem rather than a feature bullet point: deja-vu, the three-repo OKF cluster (okf-agent-memory, serradura/okf, okf-skills), Compartment, stashbase, and ripwire all attack the same problem — agents forget everything between sessions and across tools — from different angles (Git-native, BM25-indexed, encrypted-offline, session-history-derived). The absence of a dominant, obvious winner suggests the space is still pre-consolidation.

Second, **multi-harness orchestration and provider-agnostic routing** keeps expanding: opencodex, OmniRoute, Graft, claudexor, and codex-chatgpt-web all exist because developers are now running several coding-agent subscriptions (Claude Code, Codex, Cursor, Gemini, Copilot) side by side and want a single control plane or a cheaper backend swapped in transparently.

Third, a notable and unverified sub-trend is **extreme inference compression on commodity hardware** — kimi-k3-in-c (a 2.78T-parameter model claimed to run on CPU in 8GB RAM) and turbo-fieldfare (Gemma 4 26B in ~2GB RAM on Apple Silicon) both surfaced today, alongside colibri's disk-streamed MoE approach. This cluster likely reflects downstream excitement about recent Kimi K3 and Gemma 4 releases, but the claims are aggressive enough to warrant hands-on verification before treating them as production-viable.

Finally, the sheer volume of "agent skill" repos (superpowers, vercel-labs/skills, diagram-design, dashi-ppt-skill, sepia, scroll-craft) confirms Claude Code/Codex/Pi's Agent Skills format is now a genuine third-party packaging convention, not just an Anthropic-internal feature.

## 4. Community Hot Spots

- **Cross-agent persistent memory** — deja-vu and the OKF cluster are worth tracking closely; whichever approach wins will likely become infrastructure every other agent tool depends on.
- **MCP servers as verification/context layers, not just tool bridges** — ripwire and reverify both frame MCP servers around *checking* what an agent did (blast radius, ground-truth verification) rather than just exposing new capabilities, a maturity signal for the ecosystem.
- **Extreme-compression inference claims need scrutiny before adoption** — kimi-k3-in-c and turbo-fieldfare are exciting if real, but a "2.78T params in 8GB RAM" claim is exactly the kind of thing to benchmark yourself before betting a workflow on it.
- **The Open Knowledge Format (OKF) is worth watching, not yet worth committing to** — three independent implementations appearing the same day is a real interoperability signal, but there's no canonical spec repo visible here, so early adopters should expect churn.
- **Treat star counts as directional, not authoritative** — ponytail's 134,185-star outlier is a reminder to sanity-check any single number against the story around a repo before using it to justify attention.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
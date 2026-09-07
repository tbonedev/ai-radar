# AI Open Source Trends 2026-09-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-07 13:14 UTC

---

# AI Open Source Trends Report — 2026-09-07

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server that gives coding agents a ranked, deterministic map of a repo (blast radius, tests-to-run, quality deltas) using code signatures instead of full file bodies — claimed ~5% of the token cost of a grep-and-read pass. Worth trying for anyone whose agent burns context just re-reading a repo on every turn; it's a concrete, measurable efficiency play rather than another "harness."

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory store from the session history already sitting on disk for Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, and 18+ other agents — no LLM, no embeddings. A fix discovered in one tool becomes available in every other tool you use. Useful for anyone who bounces between multiple coding agents and is tired of re-explaining the same bug.

- **[mixelpixx/Konnect](https://github.com/mixelpixx/Konnect)** — A native Rust plugin for KiCAD 10 that exposes 217 schematic/layout/routing/placement/design-review/manufacturing tools to an LLM for AI-assisted PCB design. A genuinely new vertical for agent tooling (hardware, not code) — worth a look for electronics engineers curious what agent-assisted design looks like outside software.

- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)** — An open-source, license-free MCP server for RTL waveform debugging: reads FST waveforms (auto-converts VCD/FSDB) plus a SystemVerilog netlist, exposing 34 tools for driver analysis, signal tracing, and pass/fail diffing, with a browser wave viewer the agent can drive. Another non-software-engineering vertical (chip design) getting serious MCP tooling, backed by a large vendor — a real signal that MCP adoption is spreading into EDA.

- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A desktop app that records your on-screen work session, uses the GitHub Copilot CLI to reconstruct it into an intent plus ordered steps, and turns that into a reusable Skill/Automation for Copilot Studio or Scout. Interesting because it flips the "write skills by hand" workflow into "demonstrate once, get a skill" — useful for teams trying to bootstrap a skills library without writing prompts from scratch.

- **[tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness)** — A self-learning skill layer for Claude Code that distills reusable skills from your actual sessions, updates them as you keep working, and prunes ones that stop getting used — no daemon, no benchmark required. A concrete answer to "skills sprawl" as the ecosystem fills up with static skill packs.

Caution flags: **ruvnet/ruflo**, **ruvnet/metaharness**, and **affaan-m/ECC** (+1,905 stars in a day) lean heavily on buzzwords ("meta-harness," "swarm intelligence," "instincts," "witness-signed releases") without concrete descriptions of what they actually do differently from existing agent orchestrators — treat as unverified until you can read the code.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python | (+771 today) | Converts files and Office documents to Markdown; a common pre-processing step for RAG pipelines, and today's biggest single-day gain on the trending list. |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | TypeScript | (+85 today) | Sandboxes tool output for coding agents (claims 98% context reduction), persists session memory, and enforces routing across 17 agent platforms via MCP + hooks. |
| [jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser) | JavaScript | (+117 today) | Stealth headless browser built as a drop-in Puppeteer/Playwright replacement, aimed at agents that need to get past Cloudflare and bot detection. |
| [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Zig | (+116 today) | A headless browser designed from the ground up for AI/automation workloads rather than adapted from a human-browsing engine. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 1,000 | Zero-dependency CLI + MCP server giving agents a deterministic, token-efficient repo map instead of raw grep-and-read; Red Hat-affiliated. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 1,008 | Minimal MCP server that gives any AI agent basic code-execution tooling. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,593 | Open-source auth gateway connecting 1,400+ SaaS providers to agents via SDK, CLI, MCP, HTTP, and OpenAPI — notable breadth of integrations for a young project. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Python | (+188 today) | ByteDance-backed long-horizon "SuperAgent" harness that researches, codes, and creates using sandboxes, memory, and subagents for multi-hour tasks. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 785 | Shared memory built from on-disk session history across 20+ coding agents, with no LLM or embeddings involved — a single local binary. |
| [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness) | Python | 2,571 | Self-learning skill layer for Claude Code that distills and prunes skills from real usage rather than static authoring. |
| [pacifio/atlas](https://github.com/pacifio/atlas) | Rust | 3,264 | "Source control for agents" — tracks and lets you query changes made by multiple coding agents from one place. |
| [The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge) | Python | (+142 today) | Multi-agent swarm system that automates market analysis, risk management, and trade execution for an autonomous hedge fund concept — high novelty, unproven claims. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 7,671 | Claude Code/Codex skill for cinematic product video generation via Remotion, with 152 shot-recipe cards. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 500 | Native KiCAD 10 plugin exposing 217 PCB-design tools to an LLM — a genuinely new vertical (hardware, not code). |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 182 | Tencent-built MCP server for RTL waveform debugging with 34 tools and a browser-driven wave viewer — chip design is a new frontier for agent tooling. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 3,872 | Records a screen work session and reconstructs it into a reusable Skill/Automation via the GitHub Copilot CLI. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 1,903 | Native MCP plugin for the x64dbg debugger, exposing breakpoints, stepping, memory reads, and register dumps to any MCP-compatible assistant. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 5,824 | Free, open-source Office alternative (Word/Excel/PowerPoint/PDF) with built-in AI agents, cross-platform. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,664 | Runs Gemma 4 26B-A4B inference in ~2 GB RAM on any M-series MacBook — a notable memory-efficiency claim for on-device LLM inference. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [2akouwu/reverify](https://github.com/2akouwu/reverify) | Python | 1,002 | Forces an agent's claims through deterministic tools checked against ground truth, with reverse engineering as the proving ground — a direct anti-hallucination mechanism rather than another RAG wrapper. |
| [LING71671/open-reverselab](https://github.com/LING71671/open-reverselab) | Python | 1,098 | Agent-native reverse-engineering lab combining a 197-article knowledge base, MCP tools, and CTF/APK/PE automation workflows. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 238 | Local-first memory engine for agents with semantic embeddings, packaged as a single zero-config, fully offline Rust binary. |
| [Patdolitse/piia-engram](https://github.com/Patdolitse/piia-engram) | Python | 160 | Local-first, editable/overridable AI memory portable across Claude Code, Codex, Cursor, Windsurf and other MCP tools. |
| [serradura/okf](https://github.com/serradura/okf) | Ruby | 154 | Open Knowledge Format: durable, structured, portable memory bundles for agents, with a Skills/MCP/graph/TUI/CLI ecosystem around it, fully local. |
| [Socialpranker/deepdive](https://github.com/Socialpranker/deepdive) | Python | 393 | 12-phase research pipeline skill for Claude Code with claims-ledger triangulation, red-team review, and four-layer citation verification. |

## 3. Trend Signal Analysis

Two vocabulary shifts dominate today's list: "harness" and "skill" have effectively become the default nouns for agent tooling, reflecting continued fallout from Anthropic's Agent Skills spec and the Claude Code plugin ecosystem — and now OpenAI is visibly following with its own `openai/skills` catalog for Codex. A second, more concrete trend is agent tooling pushing into specialized engineering verticals beyond software: PCB design (Konnect/KiCAD), RTL/chip debugging (Tencent's wave-mcp), and reverse engineering/binary analysis (x64dbg-mcp-server, open-reverselab). MCP is clearly the connective tissue enabling this — these are all thin, tool-exposing MCP servers rather than new LLMs.

A third theme is cross-agent portability as its own product category: multiple projects (deja-vu, piia-engram, okf, Compartment) explicitly advertise working across 15-20+ coding agents (Claude Code, Codex, Cursor, Copilot CLI, OpenClaw, Gemini, Grok Build), treating memory/context as something that should outlive any single vendor's tool — a sign the market expects continued agent fragmentation rather than consolidation.

One caution: several topic-search results show star counts that look implausible for brand-new, unknown repos (e.g., 130k+ stars on a joke-framed one-day-old project). This is a plausible sign of star-farming as "AI agent" keywords get gamed for trending visibility — star totals here should be read skeptically rather than as genuine adoption signal, especially for accounts with no other history.

## 4. Community Hot Spots

- **MCP moving into hardware/EDA** — Konnect (PCB/KiCAD) and Tencent's wave-mcp (RTL waveform debug) suggest agent tooling for hardware engineers is becoming real, not speculative.
- **Skill lifecycle management** — autoharness and skill-recorder both address the emerging problem of skill sprawl: how skills get created, learned, and pruned rather than hand-written once and forgotten.
- **Deterministic grounding for agents** — ripwire (deterministic repo maps) and reverify (deterministic claim verification) both push back against pure LLM guesswork with hard, checkable tooling — worth watching as an anti-hallucination pattern.
- **Cross-harness memory portability** — deja-vu, piia-engram, and okf all bet that the next layer of value is memory/context that survives switching agents, not another agent itself.
- **Be skeptical of "meta-harness" branding** — ruflo, metaharness, and ECC show heavy buzzword density and outsized star gains with thin functional detail; verify before adopting.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
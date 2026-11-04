# AI Open Source Trends 2026-11-04

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-04 15:01 UTC

---

# AI Open Source Trends Report, 2026-11-04

**Data caveats:**
- The trending list reports total stars as 0 for every repo, so those totals are shown as "n/a".
- Several topic-search repos show very large star counts for what look like brand-new projects. Examples are `cleanyourtv` at 51,805, a TV debloater tagged `claude-code`, and `dsh-our-free-model` at 60,376. Treat those counts as unreliable, possibly inflated or botted.

---

## 1. Finds

- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** is a Rust CLI that gives agents "computer use": they drive a desktop through shell commands. It suits anyone wiring Claude Code, Codex or a custom agent to GUI-only tasks without a heavyweight SDK. It was the biggest riser among AI repos today (+2,463).
- **[max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)** is a Rust CLI for managing Git worktrees. It targets running several coding agents in parallel, each in an isolated checkout. It's useful if you already run 2–3 agents on one repo and are tired of manual branch juggling. It's a narrow tool, but a real, concrete pain point.
- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** is a Python framework that builds a graph-based semantic layer over your data. It uses that layer to generate queries deterministically and retrieve better context for LLM agents. Data and RAG engineers whose text-to-SQL or retrieval is flaky would want to evaluate it. It gained +2,053 today, and the vendor backing makes it more credible than most.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a zero-dependency C++23 CLI plus MCP server that gives coding agents a compact map of a repo: signatures, blast radius, and which tests to run. It's for people burning tokens on agents reading whole files. The "74.7% fewer bytes" figure is self-reported, so benchmark it before trusting it.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** is a Python project for "experience-driven black-box cost control" of coding agents. Teams with runaway agent token bills should look at it. The README text is thin, so check whether it ships working code before adopting it.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** is **probably hype**. It claims a 2.78T-parameter model running on one CPU in 8.24 GB of RAM, in plain C99. That claim is implausible without heavy streaming from disk or aggressive tricks, so read the code and the benchmarks before getting excited. It's still worth a skim as an educational artifact.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | n/a (+2463) | A computer-use CLI that lets AI agents operate a desktop. It had the highest AI-specific daily gain on the list. |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Rust | n/a (+524) | A Git worktree manager built for parallel agent workflows. It fits the move toward running multiple agents side by side. |
| [github/spec-kit](https://github.com/github/spec-kit) | Python | n/a (+810) | A toolkit for spec-driven development (SDD) or other processes, from GitHub. It continues the trend of agents driven by written specs. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,516 | A "ripgrep for AI context" CLI and MCP server. It claims 74.7% fewer bytes than sending full function bodies. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 4,749 | Black-box cost control for coding agents, with a Microsoft backer. Cost is becoming a first-class concern. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 4,229 | Local-first workspace search for humans and AI agents. It's another entry in the "better retrieval for agents" niche. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 29,611 | A menu-bar tool that routes agent CLIs to other providers' models, such as Codex on DeepSeek or Claude Code on Kimi. Treat the star count with caution. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | Python | n/a (+279) | An open-source PR reviewer, an established project now in the trending list. It's not new, but it's steady. |
| [garrytan/gstack](https://github.com/garrytan/gstack) | TypeScript | n/a (+285) | A packaged Claude Code setup of 23 role-based tools (CEO, QA, release manager and so on). It's worth reading as a prompt and workflow reference, though it is opinionated. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | n/a (+1376) | A personal `.agents` skills directory for engineers. It's a good source of copyable skill patterns. |
| [scenario-labs/skills](https://github.com/scenario-labs/skills) | Python | n/a (+224) | Agent skills for image, video, audio and 3D generation via the Scenario MCP. They price before spending and keep characters and brands consistent. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,506 | Lets a team's coding agents talk to each other. It's an early multi-agent coordination layer. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,422 | A command center for agents across machines, with a broad scope that includes CAD, circuits and robots. The ambition is high, so check what is actually implemented. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 11,626 | A self-hosted, multi-user, multi-agent assistant, backed by Tencent Cloud. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | n/a (+615) | Generates HD short videos from a topic or keyword through an automated pipeline. It's an established project with renewed momentum. |
| [Thysrael/Horizon](https://github.com/Thysrael/Horizon) | Python | n/a (+121) | A self-hosted AI news radar that writes daily English and Chinese briefings. It's close to this report's own use case. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,711 | An open-source AI office suite (docs, sheets, slides, PDF). It also provides a CLI so coding agents can edit real .docx/.xlsx/.pptx files locally. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 4,507 | 42 FFmpeg tools plus an MCP server, so coding agents can edit video locally without cloud calls or API keys. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,409 | An AI agent for social media covering trend discovery, content creation and publishing. It targets Chinese platforms such as Xiaohongshu and Douyin. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | n/a (+351) | A portable C99 inference implementation claimed to run a 2.78T-parameter model in 8.24 GB of RAM. The claim looks extraordinary, so verify it. |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | JavaScript | 60,376 | A plugin that promises free, unlimited, no-login access to frontier models, including DeepSeek V4.1 Flash and Kimi K3. It looks like a free-proxy scheme, and the star count is suspicious. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,795 | Infrastructure for continually self-improving agents. The idea is interesting, but evidence is thin. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | n/a (+2053) | Builds a semantic graph layer for deterministic query generation and more explainable retrieval. It was the top knowledge-layer riser today. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+1165) | Captures what an agent does in a session, compresses it with AI, and re-injects context into later sessions. It works across Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,306 | Long-term agent memory with Markdown as the source of truth and local ranked retrieval. Claude Code and Codex share one store, and it needs no API key. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,397 | Unified memory and history search across 44 coding agents, exposed as an MCP memory server. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,851 | A Git-versioned map of a codebase and database schema that agents read before editing. It's a local-first MCP server and CLI. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 741 | "Ontology-Augmented Generation" for agents. It's small, but it matches the auto-ontology theme. |

---

## 3. Trend Signal Analysis

**Explosive attention: tooling around coding agents, not the agents themselves.** The strongest new signals are infrastructure for running many agents at once:
- worktrunk handles parallel Git worktrees.
- agent-desktop handles computer use.
- ripwire and TokenEconomizer handle context compression and cost.
- Cross-agent memory is a crowded cluster: claude-mem, agent-memory and deja-vu all share context across Claude Code, Codex, Gemini and Cursor.

Skills packaging is also strong, as seen in mattpocock/skills, gstack, scenario-labs/skills and many `agent-skills` topic repos.

**New directions:**
- **Ontology and graph layers:** auto-ontology (NVIDIA) and carrel push deterministic, explainable retrieval as an alternative to plain vector RAG.
- **Cross-vendor routing:** magpie and similar tools run one vendor's agent CLI against another vendor's model. Examples are Codex on DeepSeek and Claude Code on Kimi.
- **"DeepSeek Harness" (DSH) ecosystem:** a cluster of plugin and TUI repos (dsh-TUI, dsh-Go, dsh-memory, EAC-Desktop) has appeared, resembling the plugin scene around Claude Code. Many are Chinese-language and likely young.
- **Open Grok Bot alternatives:** several repos (OpenMausBot, rakazo, AnyModelBot) position themselves this way, which suggests a recent closed-bot launch is driving imitation.

**Industry connection:** model names in the data (DeepSeek V4.1 Flash, Kimi K3, Opus 5.5) show that cheap frontier-class Chinese models and Anthropic's latest are being mixed within the same agent harnesses. That is driving demand for routing, cost control and portable memory.

**Caution:** a lot of the topic-search star counts look inflated, so favor repos with a real README and working code over big numbers.

---

## 4. Community Hot Spots

- **Parallel-agent tooling:** [worktrunk](https://github.com/max-sixty/worktrunk) and [reason-network](https://github.com/reason-machines/reason-network) suggest that isolation and coordination are the next bottleneck once you run more than one agent.
- **Token-efficient repo context:** [ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code) and [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) address cost and context quality directly. Benchmark them on your own repo.
- **Portable agent memory:** [claude-mem](https://github.com/thedotmack/claude-mem), [agent-memory](https://github.com/tigerless-labs/agent-memory) and [deja-vu](https://github.com/vshulcz/deja-vu) compete to be the shared store across agent CLIs. The Markdown-plus-local-retrieval design in agent-memory is the most inspectable.
- **Computer use via CLI:** [agent-desktop](https://github.com/vercel-labs/agent-desktop) turns GUI control into a shell primitive that any agent can call.
- **Ontology-backed retrieval:** [auto-ontology](https://github.com/NVIDIA/auto-ontology) is worth a trial if your text-to-query or RAG accuracy is poor.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
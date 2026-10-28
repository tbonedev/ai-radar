# AI Open Source Trends 2026-10-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-28 13:47 UTC

---

# AI Open Source Trends Report, 2026-10-28

Caveat: the "total stars" figures in the Trending list are all shown as 0, so only the "today" numbers are meaningful there. Totals for the topic-search items look inflated or odd. For example, a Google TV debloater has 43k stars and a gym tracker has 16k, and several items are clearly not AI. Treat those star counts with suspicion.

## 1. Finds

- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)**: A long-term memory layer for coding agents. It stores memory as plain Markdown, ranks retrieval locally, and has a separate "sleep-time" process that tidies the store. It's for people who use Claude Code and Codex together and want one shared, inspectable memory with no API key.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**: A single Go binary that builds searchable agent memory from the session history already on your disk. It covers Claude Code, Codex, Cursor and about 40 other tools, and exposes the result through local search, MCP and hooks, with no LLM involved. It's for anyone who wants to find "what did the agent do last week" without sending data anywhere.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that gives agents code signatures instead of full file bodies. It claims 74.7% fewer bytes, and also reports blast radius and which tests to run. It's for anyone burning context tokens on large repos. The claim is self-reported, so verify it on your own code.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)**: An MCP server for RTL waveform debugging. It reads FST waveforms (VCD/FSDB are auto-converted) plus a SystemVerilog netlist, and offers 34 tools for driver analysis, X-tracing and pass/fail waveform diffs. It's for chip-verification engineers, a niche where agent tooling is rare.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)**: A desktop app that records your on-screen work. It uses the GitHub Copilot SDK to turn the recording into an intent plus ordered steps, then builds a reusable Skill or automation from them. It's for teams that want to capture workflows by demonstration instead of writing skill files by hand.
- **[amontlabs/lcu](https://github.com/amontlabs/lcu)**: Codex's computer-use capability, decoupled from the Codex app so other agent harnesses can use it. It's for people building their own harness who want GUI control without being tied to one vendor.

Hype or shell warnings: [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) is just a list of jailbreak prompts. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) promises unlimited free frontier models with no key, and its 48k stars look implausible. Both are suspect. The Google TV and Android debloaters are tagged `claude-code` but are not AI tools.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,493 | A code-context CLI and MCP server that returns signatures instead of function bodies, plus blast-radius and tests-to-run checks. Its claim of 74.7% fewer bytes makes it a token-saving candidate. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 24,419 | A menu-bar tool that routes agent CLIs to other vendors' models, such as Codex on DeepSeek or Claude Code on Kimi. It's useful if you want to mix harnesses and models. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,163 | Lets Codex use ChatGPT Web (including Pro) as a native model, with tools, streaming and images. It sidesteps Codex quota, which may violate terms of service. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,076 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on any M-series MacBook. A concrete local-inference result worth checking. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 253 | An MCP server with 34 tools for RTL waveform debugging. It's a rare hardware-verification use of agents. |
| [amontlabs/lcu](https://github.com/amontlabs/lcu) | JavaScript | 2,278 | Codex computer use packaged for any harness. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+1,096) | An agentic skills framework and development methodology. It's well known, so it's momentum rather than a discovery. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | TypeScript | 0 (+1,075) | A lightweight IDE built around the `pi` agent that adapts to how you work. A JetBrains-backed entry in the agent-IDE space. |
| [nightly-labs/openbot](https://github.com/nightly-labs/openbot) | TypeScript | 0 (+1,053) | A local-first desktop workspace of persistent agents running Codex, Claude and Grok. Each has its own workspace, task queue and browser control, and the agents can collaborate. |
| [makecindy/cindy](https://github.com/makecindy/cindy) | TypeScript | 7,860 (+740) | An open-source, out-of-the-box general agent with a bilingual pitch. It appears in both the trending list and the topic search. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 7,534 | AI coworkers that each get their own browser, files and tools, with every action approved before it runs and logged after. Works with any AG-UI agent. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,382 | A command center for coding agents across machines, extending to CAD, circuits, robots and music. The scope is broad, so check how much is working. |
| [ShenSeanChen/waku-agent](https://github.com/ShenSeanChen/waku-agent) | Python | 2,109 | A local-first agent harness with loop, memory and evals, written to stay readable as it grows. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,758 | Infrastructure for continually self-improving agents. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 0 (+2,376) | A personalized lifelong-tutoring system and the biggest AI gainer on today's list. |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | CSS | 0 (+2,109) | An anti-"AI slop" design skill for Claude Code, Cursor and Codex. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Rust | 0 (+1,471) | A design vocabulary for coding agents, with commands such as polish, critique and audit to catch generic UI before it ships. |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | 0 (+106) | A team workspace combining email, chat, docs, tasks and calls, linked by shared AI memory. |
| [synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience) | TypeScript | 4,282 | An open-source AI workbench for scientific research. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,385 | A local-first, model-agnostic research desktop app with skills, MCP tools and Python/R execution. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,180 | A free office suite with a built-in agent. A CLI lets coding agents create real .docx, .xlsx and .pptx files. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | C | 4,048 | Lets a vision model drive a real iPhone using a $7 ESP32, with AirPlay for sight and USB HID for touch. No jailbreak is needed. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 2,103 | An open document-parsing model that claims state-of-the-art accuracy and speed. Post-training uses an "RSI loop". |
| [AbuZar-Ansarii/Needle](https://github.com/AbuZar-Ansarii/Needle) | Python | 187 | A 14 MB agentic model said to control a phone fully. A tiny footprint, but treat the claim with skepticism. |
| [TheLastOxygen/mafdet](https://github.com/TheLastOxygen/mafdet) | Python | 68 | Local LLMs that read and reason while you type. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,076 | Also fits here: a 26B-A4B mixture-of-experts model running in about 2 GB of memory. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,368 | Markdown-based agent memory with local ranked retrieval and a sleep-time cleanup layer. Claude Code and Codex share one store. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,323 | Builds agent memory from existing session logs as a single Go binary. No LLM is used, and it exposes MCP and hooks. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,771 | A Git-versioned map of the codebase and database schema that agents read first. Local-first MCP server plus CLI. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 4,199 | Local-first search across a workspace, for both humans and agents. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 248 | Turns documents into a readable Markdown wiki that answers with citations. Works with any provider, Ollama included. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 635 | Ontology-augmented generation for agents. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,498 | A multimodal parsing engine feeding an ontology-based, LLM-wiki knowledge engine. |

## 3. Trend Signal Analysis

**Skills and design taste are the loudest signal.** Hallmark, Impeccable, anti-slop, oil-ui and ai-design-skills are all agent skills aimed at the same problem: generic, machine-looking UI output. Developers now treat design quality as something to fix with installable skill packs, not by changing models.

**Memory and context are becoming their own layer.** Agent-memory, deja-vu, aoci-code, ripwire and zvec-grep all try to give agents less but better context. They share a pattern: local, no cloud, often no LLM at all, with Markdown or Git as the source of truth. The aim is portability across Claude Code, Codex and Cursor.

**Harness-neutrality is a first-class goal.** Magpie, openbot, openharness and lcu all assume you run several agents and models side by side. Mixing a vendor's CLI with another vendor's model, such as Codex on DeepSeek, is now a product category. The recurring "DSH"/DeepSeek-harness plugin ecosystem suggests a new DeepSeek-based terminal agent has grown its own community.

**New directions.** Hardware and vertical MCP servers, such as RTL waveforms, KiCad PCB design and CAD, are spreading. Phone-controlling agents are also appearing, via an ESP32 or a 14 MB model.

**Industry link.** Many projects reference Opus 5.5, Gemma 4, DeepSeek V4.1 and Kimi K3. They show coding-agent CLIs maturing into platforms and users demanding cheaper model substitution. Several "free frontier model" repos look like growth-hacking, so be careful.

## 4. Community Hot Spots

- **Local agent memory layers** ([agent-memory](https://github.com/tigerless-labs/agent-memory), [deja-vu](https://github.com/vshulcz/deja-vu)): cross-tool, inspectable memory is the most practically useful idea today.
- **Token-efficient code context** ([ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code)): signatures and maps can cut cost on large repos. Benchmark the claims yourself.
- **Anti-slop design skills** ([hallmark](https://github.com/Nutlope/hallmark), [impeccable](https://github.com/pbakaus/impeccable)): a cheap way to improve agent-generated UI right now.
- **Model-routing and multi-agent desktops** ([magpie](https://github.com/yetone/magpie), [openbot](https://github.com/nightly-labs/openbot)): useful if you already run several agent CLIs.
- **Domain-specific MCP servers** ([wave-mcp](https://github.com/Tencent/wave-mcp), [Konnect](https://github.com/mixelpixx/Konnect)): hardware engineering is an open field for agent tooling.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
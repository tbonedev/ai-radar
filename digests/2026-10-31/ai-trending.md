# AI Open Source Trends 2026-10-31

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-31 13:15 UTC

---

# AI Open Source Trends Report — 2026-10-31

## 1. Finds

1. **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI and MCP server that lets coding agents find relevant code through signatures instead of full bodies (claims 74.7% fewer bytes), then checks blast radius and which tests to run. It suits people running coding agents on large repos who want to cut token spend. The claims are self-reported, but a Red Hat team is behind it and the design is concrete.

2. **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single Go binary that builds searchable agent memory from the session history already on disk (Claude Code, Codex, Cursor and about 40 others). It uses no LLM and exposes search through MCP and hooks. It suits anyone who keeps losing context between agent sessions and wants it local and cheap.

3. **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)** — A Git-versioned map of a codebase and its database schema, served by a Go MCP server and CLI, which agents read before they edit. It suits teams whose agents make changes without understanding the schema or architecture. It overlaps with ripwire, so try both and compare.

4. **[yetone/magpie](https://github.com/yetone/magpie)** — A menu-bar app that routes agent CLIs to other providers' models, such as Codex on DeepSeek or Claude Code on Kimi. It suits developers who want to swap the model behind their preferred agent harness. It is useful, but its 26,716 stars look high for a tool of this scope.

5. **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A desktop app that records your screen work and uses the GitHub Copilot SDK to turn it into an intent plus ordered steps. It then builds a reusable Skill or Automation. It suits anyone who wants to turn a manual workflow into an agent skill without writing it by hand.

6. **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in about 2 GB of RAM on M-series MacBooks. It suits people who want a large mixture-of-experts model running locally on modest hardware. Benchmark it yourself before relying on the memory figure.

**Caution:** Several entries look like hype or star inflation. [unitshaperextol/Legion-os](https://github.com/unitshaperextol/Legion-os) is buzzword-heavy and cites models that don't exist. [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) and [wh000wh000/awesome-jev-live](https://github.com/wh000wh000/awesome-jev-live) are curated lists around a single product, and [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) is part of the same cluster. Many topic-search star counts, such as 47,389 on an Android TV debloater tagged `claude-code`, look implausible for the repos' age. Treat them with suspicion.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,500 | A code-context CLI and MCP server that returns signatures rather than bodies for coding agents. It reports 74.7% fewer bytes and also covers blast radius and tests-to-run. |
| [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Zig | 0 (+929) | A headless browser built for AI and automation rather than human viewing. It is aimed at agent scraping and automation where Chrome's footprint is too heavy. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,096 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series Macs. It points to aggressive expert offloading for local inference. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 26,716 | Maps agent CLIs onto other providers' models from the menu bar. It reflects the growing decoupling of agent harnesses from model vendors. |
| [AlohaBrowser/alohajet-cli](https://github.com/AlohaBrowser/alohajet-cli) | Swift | 39 | Drives a real browser from the CLI and over MCP using stable element refs. It has no dependencies, but it is still small. |
| [Folkbench/folkbench](https://github.com/Folkbench/folkbench) | Rust | 4,044 | Benchmarks AI API relay services on uptime, latency and price, and offers a switcher for Claude Code and Codex. It is useful for judging the many relay providers, though the data is only as good as its methodology. |
| [migsilva89/loadout](https://github.com/migsilva89/loadout) | Swift | 102 | Shows which skills, commands, subagents, plugins and MCP servers your coding assistants load, with real usage. It makes agent configuration sprawl visible. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+663) | An agentic skills framework and software methodology. It is well known already, so it is shown here only as a baseline. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+882) | A personal collection of agent skills from a well-known TypeScript educator. It draws attention mostly through the author's audience. |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | 0 (+1,347) | Sets up Claude Code as a game studio with 49 agents and 72 skills in a studio hierarchy. It is a heavy role-play prompt scaffold, so check the real value against the volume. |
| [Orkas-AI/Orkas](https://github.com/Orkas-AI/Orkas) | JavaScript | 0 (+1,004) | A local-first desktop app where a Commander agent splits goals into to-dos and coordinates 16 specialist agents plus Claude Code, Codex, OpenCode, OpenClaw and Hermes. It is MIT-licensed and runs on macOS and Windows. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,404 | A command center for running coding agents across machines. It claims to extend to CAD, circuits, robots and music. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,399 | Lets a team's coding agents talk to each other. It is an early attempt at inter-agent messaging for development teams. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,779 | Infrastructure for continually self-improving agents. The description is vague, so read the code first. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 9,066 | Gives each AI coworker its own computer, with every action approved beforehand and logged afterward. It supports any AG-UI agent. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 0 (+1,723) | Captures session activity, compresses it with AI and injects it into later sessions. It works across Claude Code, Codex, Gemini, Copilot and OpenCode, and it had the largest gain today. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Rust | 0 (+1,339) | A design vocabulary for coding agents, with commands like polish, critique and audit to catch AI-generated UI slop. It addresses a real complaint about agent-built front ends. |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 0 (+1,035) | A personalized tutoring system with lifelong learner modelling. It comes from the HKU data science lab, which has a solid track record. |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 9,233 (+1,304) | An open-source Grok Bot alternative with a virtual machine the bots can use. [elie222/rakazo](https://github.com/elie222/rakazo) pitches the same idea, which suggests a trend. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,421 | An open-source office suite with docs, sheets, slides and PDF editors and a built-in agent. Its CLI and skill let coding agents edit real .docx, .xlsx and .pptx files. |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | TypeScript | 0 (+115) | A multi-agent interactive classroom generated in one click. It is an educational use of multi-agent systems from Tsinghua. |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | TypeScript | 0 (+1,148) | Appears to be a coding-agent interface from the Theo/Ping team, but the listing has no description. Read the README before judging it. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,096 | A local runtime for a 26B mixture-of-experts model that needs only about 2 GB of RAM. It is the only inference-focused item in today's data. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,328 | Uses ChatGPT Web, including Pro, as a model inside Codex, with tools and streaming. It likely conflicts with OpenAI's terms and may break without notice. |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | JavaScript | 53,762 | A plugin offering free, unlimited access to DeepSeek V4.1 Flash and Kimi K3 with no key. Its sustainability and its source of free access are unclear. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [memoket/memoket-kite](https://github.com/memoket/memoket-kite) | Python | 230 | A vector-free long-term memory engine for agents that claims SOTA on LoCoMo and LongMemEval. It uses less context, but the numbers are unverified. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,303 | Long-term agent memory stored as plain Markdown, with local ranked retrieval and a background "sleep-time" Manage layer. Claude Code and Codex share one store, and it needs no API key. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,342 | Searches session history already on disk for 40+ coding agents, with no LLM and one binary. It is a lightweight alternative to LLM-based memory. |
| [ArihantDeva/heimdall](https://github.com/ArihantDeva/heimdall) | JavaScript | 137 | A CPU-only memory approach with ranked retrieval. It is small, but part of the same no-embedding trend. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 250 | Turns documents into a readable Markdown wiki that answers with citations, and works with Ollama. It claims 89% correct-note routing against 62% and 68% fewer tokens. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,530 | A multimodal parsing engine feeding an ontology-based, LLM-wiki-driven knowledge engine. It targets messy enterprise document ingestion. |
| [calmrocks/ai-engineer-notebooks](https://github.com/calmrocks/ai-engineer-notebooks) | Jupyter Notebook | 719 | Framework-free Colab notebooks covering tool calling, RAG, evals, MCP, fine-tuning and prompt-injection security. They run on the free Groq API, which makes them a good learning resource. |

## 3. Trend Signal Analysis

**Memory and context for coding agents is today's clearest theme.** claude-mem gained +1,723 stars, the highest on the list. deja-vu, agent-memory, memoket-kite, heimdall and aoci-code all attack the same problem from different angles. Most of them avoid vector databases and LLM calls: they use Markdown, ranked retrieval, local indexes or signature extraction. The shared view is that agents lose context between sessions and burn tokens re-reading code, and that cheap deterministic tooling beats embeddings.

**Agent skills remain the dominant packaging format.** Many entries (mattpocock/skills, superpowers, ffmpeg-skill, geo-sleuth, oil-oil/oil-ui, sepia) ship as skills that work across Claude Code, Codex, Cursor, Gemini CLI and OpenCode. Skills are now vertical and domain-specific, covering video, UI design, geolocation and writing quality. The "de-AI" and "anti-slop" projects (sepia, anti-slop, impeccable, yomiyasu) show a counter-movement to low-quality generated output.

**Model-agnostic harnesses.** magpie, codex-chatgpt-web, Orkas and the Chinese "DeepSeek Harness" ecosystem (dsh-TUI, dsh-Go, qq-bridge, movo) show that the agent shell and the model are separating. Cheap models such as DeepSeek V4.x and Kimi are being plugged into Claude Code- and Codex-style tools. Relay benchmarking (folkbench, Grandet) follows from that.

**New directions:** Gemma 4 26B-A4B inference in about 2 GB on a laptop, the "Grok Bot alternative" cluster of agents with their own VM, and agents that drive a real phone (esp32-iphone-agent).

**Caveat:** Star counts in the topic search are often implausible and probably inflated. Weigh trending deltas over totals.

## 4. Community Hot Spots

- **Local, LLM-free agent memory** ([deja-vu](https://github.com/vshulcz/deja-vu), [agent-memory](https://github.com/tigerless-labs/agent-memory), [claude-mem](https://github.com/thedotmack/claude-mem)): it is the most active area today and it is cheap to try. Compare retrieval quality on your own session history.
- **Code-context servers for agents** ([ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code)): they reduce tokens and edit mistakes on large repos. Measure the savings yourself, because the published numbers are self-reported.
- **Anti-slop design and writing skills** ([impeccable](https://github.com/pbakaus/impeccable), [anti-slop](https://github.com/miqdadbadjuber/anti-slop), [sepia](https://github.com/Nanako0129/sepia)): a practical way to improve agent output quality that you can adopt immediately.
- **Model-swappable agent harnesses** ([magpie](https://github.com/yetone/magpie), [Orkas](https://github.com/Orkas-AI/Orkas)): useful for cost control and for avoiding vendor lock-in. Check the terms of service of any relay or web-session trick first.
- **Agent-oriented headless browsers** ([lightpanda](https://github.com/lightpanda-io/browser), [alohajet-cli](https://github.com/AlohaBrowser/alohajet-cli)): lighter automation infrastructure for agents, worth testing as a Chrome replacement.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
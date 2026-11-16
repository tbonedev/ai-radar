# AI Open Source Trends 2026-11-17

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-16 16:42 UTC

---

# AI Open Source Trends Report, 2026-11-17

**Data caveats:**
- The trending list reports total stars as `0` for every repo, so the total is unavailable. The tables show "n/a" for those and give the real "today" figure.
- Several young topic-search repos show very large star totals, such as 77k for a free-model plugin and 58k for a TV debloater. Treat those totals with suspicion, because they don't match how long these projects have existed.

---

## 1. Finds

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** (+953 today)
  - It is a multi-tier framework for testing agent skills. It has quality gates, a check for overlapping skills, synthetic eval-dataset generation, and live-agent runs that measure whether a skill changes agent behavior.
  - Anyone maintaining a `SKILL.md` library will want it. Skills are now everywhere in this list, and almost none of them have tests.
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** (+946 today)
  - It is a Go code-review tool that combines deterministic pipelines with an LLM agent. It leaves line-level comments and ships built-in rules for NPE, thread-safety, XSS and SQL injection. It works with OpenAI- and Anthropic-compatible endpoints.
  - Teams that want review noise to be reproducible rather than purely LLM-driven should look at it.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** (2,548 stars)
  - It is a zero-dependency C++23 CLI and MCP server that lets coding agents locate code without reading the whole repo. It also reports blast radius and which tests to run.
  - It suits people whose agent token bills are dominated by repo exploration.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** (7,035 stars)
  - It does black-box, experience-driven cost control for coding agents. It is a good companion to ripwire if you are measuring agent spend.
- **[kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill)** (+475 today, 6,384 stars)
  - It exposes 42 local FFmpeg tools through an MCP server with a machine-readable contract. Cut, captions, reframe, loudness and platform exports all run locally, with no cloud or API keys.
  - Use it if you want Claude Code, Cursor or Codex to edit video without a hosted service.
- **[qybaihe/bla](https://github.com/qybaihe/bla)** (5,891 stars)
  - It is an MCP server and CLI that obfuscates JS/TS, Electron ASAR, WASM and native binaries against AI reverse-engineering agents. It is an interesting defensive niche. Its effectiveness is unverified, so benchmark it yourself.

**Hype watch:** [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) claims unlimited, no-key, free access to frontier models, with 77,147 stars. That is very likely a proxy or abuse risk, so don't send credentials or sensitive code through it. Several "Grok Bot alternative" repos ([OpenMausBot](https://github.com/milind-soni/OpenMausBot), [rakazo](https://github.com/elie222/rakazo)) look like fast clones riding a trend.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | n/a (+953) | Multi-tier evaluation framework for agent skills, with quality gates and live-agent evaluation. It addresses the missing testing layer for the skills ecosystem. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | n/a (+946) | Hybrid deterministic and LLM code-review tool that posts line-level comments. It carries built-in security and concurrency rulesets and was battle-tested at Alibaba. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | n/a (+837) | Chrome DevTools exposed to coding agents over MCP. It is an official tool with strong momentum today. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,548 | Zero-dependency CLI and MCP server that finds code without reading the repo. It reports blast radius and tests to run, to cut agent token costs. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 7,035 | Black-box cost control for coding agents, driven by experience. It targets the rising spend on agentic coding. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 37,509 | Menu-bar tool that routes agents to other providers' models, such as Codex on DeepSeek or Claude Code on Kimi. It is a useful model-swap layer, but the star total is unverified. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 286 | License-free MCP server for RTL waveform debugging, with 34 tools. It is a rare hardware-verification use of MCP. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 2,833 | Native MCP plugin that lets an AI assistant drive the x64dbg debugger. It is a single binary with no dependencies. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | n/a (+790) | Agent-User Interaction Protocol for bringing agents into frontend apps. It is the standard that CopilotKit's OpenBot builds on. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | n/a (+689) | Workspace for annotating plans and code reviews, then sending the feedback to agents in one click. It focuses on keeping a human in the loop. |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | n/a (+306) | Multi-agent framework for automated AI research paper writing, from Google Research. It is worth a look for research workflows. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 12,546 | AI coworkers that each get their own browser, files and tools. Every action is decided before it happens and recorded after it. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,831 | Infrastructure for continually self-improving agents. It is early, and I can't tell from the description what it concretely ships. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 5,679 | Lets CLI agents pick up work in the background. It sends a card to a human only when a decision is needed. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,769 | Lets a team's coding agents talk to each other. It is a multi-agent coordination layer. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,282 | Lets any MCP agent operate an iPhone or Android phone with the user in the loop. It comes from a well-known developer. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | n/a (+1878) | Office SDK for editing, calculation, collaboration and file processing, usable by people and AI agents. It had the largest gain on today's trending list. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | n/a (+841) | Claude Code skills for equity analysis, charting, economic calendars and screeners. It is a vertical skill pack, and financial outputs need verifying. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | n/a (+540) | Agent Skills for the Stitch MCP server, following the open Agent Skills standard. They work across Antigravity, Gemini CLI, Claude Code and Cursor. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | n/a (+475) | Local video editor for coding agents, with 42 FFmpeg tools exposed over MCP. It needs no cloud and no API keys. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+122) | Researches a topic across Reddit, X, YouTube, HN, Polymarket and the web, then writes a grounded summary. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,445 | Free AI office suite with a CLI and skill so agents can edit real .docx, .xlsx and .pptx files locally. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 7,835 | Turns a coding agent into a video agent, with an editor to change anything it produces. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 12,191 | Portable C99 inference for the 2.78-trillion-parameter Kimi K3, claiming 8.24 GB of RAM on a single CPU. That claim is extraordinary and I would verify it before believing it. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,724 | Claims to be the "first open-source enterprise world model". The claim is unsubstantiated in the data. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,467 | "Ollama for decision models". It serves 29 model families locally behind a `/v1/systemone` API. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,301 | Lightweight knowledge base for people and agents, with fast indexing and precise retrieval. |
| [RustXNG/RustXNG](https://github.com/RustXNG/RustXNG) | Rust | 978 | Self-hosted metasearch and grounding engine for agents, based on SearXNG. It has a JSON API and optional page text. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 301 | Turns documents into a Markdown wiki that answers with citations. The benchmark figures it quotes are self-reported. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 806 | Ontology-Augmented Generation for agents. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 285 | Builds governed knowledge graphs in which every fact is gated and traceable to its evidence. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 276 | Local-first ingestion engine with layout-aware PDF, Office and OCR parsing. |

---

## 3. Trend Signal Analysis

**Skills are the dominant artifact.** Eleven of today's 14 trending repos are AI-related, and most of them are agent skills, MCP servers or agent-facing tooling. The `agent-skills` topic is full of vertical packs: video, logo design, UI, geolocation, writing and trading. Skills have become the way people distribute domain expertise to coding agents. NVIDIA's SkillEvaluator appearing the same day suggests the ecosystem is already hitting quality and overlap problems.

**New directions:**
- **Agents driving physical and mobile devices.** Examples are pinky, Mika, and the ESP32-based iPhone agent that uses AirPlay for vision and USB HID for input.
- **Defensive tooling against AI agents.** bla is an example.
- **Token-cost control as its own category.** ripwire and TokenEconomizer both fall here.
- **Human-in-the-loop interfaces.** These include plannotator, ag-ui and agent-autoloop's approval cards.

**Industry connection:** the data references Opus 5.5, Kimi K3, DeepSeek V4.1 and a "DeepSeek Harness" (dsh) agent ecosystem, plus Grok Bot clones. Chinese-model harness plugins and model-routing tools such as magpie are clearly in demand. Treat the very high star totals on dsh-related repos with caution.

---

## 4. Community Hot Spots

- **Skill evaluation and governance.** [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) fills a clear gap. Skill libraries are growing faster than anyone's ability to test them.
- **Token-efficient code navigation.** [ripwire](https://github.com/redhat-et/ripwire) and [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) address agent cost, which is increasingly a budget line item.
- **Agent-to-UI protocols.** [ag-ui](https://github.com/ag-ui-protocol/ag-ui) is gaining adoption, and [OpenBot](https://github.com/CopilotKit/OpenBot) is a real implementation to study.
- **Hybrid deterministic and LLM review.** [open-code-review](https://github.com/alibaba/open-code-review) is a practical template for reducing LLM-only review noise.
- **Official MCP tooling for debugging.** [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) gives agents real browser debugging, which is directly useful for front-end agent workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
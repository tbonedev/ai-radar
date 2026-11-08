# AI Open Source Trends 2026-11-08

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-08 14:01 UTC

---

# AI Open Source Trends Report, 2026-11-08

**A caveat on the data.** Many of the star totals in the topic search look inflated or unreliable. Examples are a small plugin repo at 66,004 stars and a TV debloater at 54,349. The trending rows all report ⭐0 total, which means the total wasn't captured, so I show it as "n/a". Treat the "today" figures as more reliable than the totals.

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a dependency-free C++23 CLI and MCP server that gives coding agents function signatures instead of full bodies (the repo claims 74.7% fewer bytes). It also reports blast radius and which tests to run after a change. It suits anyone whose agent burns context reading whole repos, and the Red Hat origin makes it more credible than most.
- **[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)** is a context-compression plugin aimed at month-long single sessions. It claims about 5x fewer tokens and that a 100K window is enough. It is for people running long agent sessions on small windows or tight budgets. It gained +460 today, but the 5x claim is unverified, so benchmark it before relying on it.
- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)** is a long-term memory runtime that keeps plain Markdown as the source of truth. It adds local ranked retrieval and a background "sleep-time" curation layer, and Claude Code and Codex share one store with no API key. It is for people who switch between agents and want memory they can read and diff. A similar cross-agent option is [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu), which claims coverage of 43 agents.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** does experience-driven, black-box cost control for coding agents. It is for teams whose agent bills are growing and who want to cut them without touching the model. Its README is only a one-liner, so check the method before adopting it.
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** is a Rust CLI that lets agents drive a browser. Agent builders get a simple shell-level interface instead of a full Playwright integration. It is the best-known repo on this list (+812 today), but still worth a look.
- **[onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent)** lets a vision model operate a real iPhone using a $7 ESP32. It uses AirPlay for screen capture and USB HID for input, with no jailbreak or Mac needed. It suits mobile-automation and testing hackers, and it is a clever hardware approach.

**Treat with suspicion:**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) promises "unlimited free frontier models, no login". That is likely a proxy or abuse vector and probably star-inflated.
- A cluster of repos around "Jev / TypeSafe System One" ([ollaya](https://github.com/ollaya-dev/ollaya), [awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools), [awesome-jev-live](https://github.com/wh000wh000/awesome-jev-live), [jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis)) looks like coordinated promotion.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,530 | A ripgrep-style CLI and MCP server that gives coding agents signature-level repo context. It claims 74.7% fewer bytes than reading bodies. |
| [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) | Go | n/a (+345) | A management plane for GPU Kubernetes on bare metal. It is infrastructure for GPU clusters and gained +345 today. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | n/a (+812) | A browser automation CLI built for AI agents. It had strong momentum today. |
| [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | TypeScript | n/a (+460) | A context-compression plugin for very long sessions and small windows. It claims 5x token savings, which I haven't verified. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 5,058 | A black-box cost-control layer for coding agents. It is a notable first-party signal that agent spend is now a problem. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 32,111 | A menu-bar app that routes any agent to any model, for example Codex on DeepSeek or Claude Code on Kimi. It is useful for model switching, but the star count is questionable. |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | JavaScript | 66,004 | A plugin that claims free, uncapped access to frontier models with no key. See the warning above. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | n/a (+1437) | An open-source Grok Bot alternative with a VM the bots can use. It is the biggest agent mover today, and the ⭐17,746 in topic search also looks high. |
| [elie222/rakazo](https://github.com/elie222/rakazo) | TypeScript | 7,515 | Another Grok Bot alternative, with your choice of model and sandbox. It shows an "agent with its own computer" pattern spreading. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 10,445 | AI coworkers that each get their own browser, files and tools. Every action is gated before it runs and logged after. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,664 | Lets a vision model operate a real iPhone through an ESP32 over AirPlay and USB HID. No jailbreak is required. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,670 | Lets a team's coding agents talk to each other. It targets multi-agent coordination for coding. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 4,057 | Lets CLI agents pick up work in the background and only ask a human for approval when unsure. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,442 | A command center for running many coding agents across machines. It also targets CAD, circuits and music. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 7,694 | An on-device Android agent that operates apps and the web. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,948 | An open-source office suite (Docs, Sheets, Slides, PDF) with a built-in agent. Its CLI lets Claude Code or Codex create real .docx/.xlsx/.pptx files. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,989 | A local-first conversational video editor with a multi-track timeline and Remotion rendering. It supports MCP and agent skills. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 4,789 | 42 FFmpeg tools plus an MCP server for agents, with no cloud or API keys. It is practical and well scoped. |
| [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | Rust | 14,923 | A parametric 3D CAD application in pure Rust, with MCP automation. CAD is an unusual target for agent tooling. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,501 | A social-media agent covering Xiaohongshu, Douyin, Zhihu and Bilibili. It finds trends, creates content, publishes and learns from results. |
| [qybaihe/bla](https://github.com/qybaihe/bla) | TypeScript | 3,345 | Defends binaries, Electron apps and bundles against AI reverse-engineering agents by feeding them poisoned or misleading data. It is a rare defensive angle. |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | TypeScript | 28,558 | Automates cloning viral videos with agents. It raises ethical and misuse concerns, and the star count is doubtful. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 3,684 | An open document-parsing model that claims state-of-the-art accuracy and speed, using an RSI loop in post-training. It is the only real model release in today's data. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,785 | Infrastructure for continually self-improving agents. It is interesting but I couldn't verify its depth. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,692 | Claims to be the "first open-source enterprise world model". The claim is bold and the description gives no evidence for it. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 80 | Local LLMs that read and think while you type. It is very small and early. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,314 | Markdown-based long-term agent memory with local ranked retrieval and a sleep-time curation layer. One store is shared by Claude Code and Codex. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,437 | A memory and history MCP server spanning Claude Code, Cursor, Codex, Gemini CLI and others, 43 agents in all. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,876 | A Git-versioned map of a codebase and its DB schema that agents read before editing. It is a local-first MCP server and CLI. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 929 | A self-hosted metasearch and grounding engine for agents, built on SearXNG, with a JSON API. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 255 | A single-binary scraper and parser (URLs, OCR'd PDFs, Office files) that outputs clean Markdown/JSON. It has a Firecrawl-compatible API. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 254 | Turns documents into a readable Markdown wiki that answers with citations. It claims 68% fewer tokens, which I haven't verified. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 801 | Ontology-augmented generation for agents. It is small, but the ontology approach differs from plain vector RAG. |

## 3. Trend Signal Analysis

**Agent skills and context economics lead today.** Most of the activity is around making coding agents cheaper and better informed, not around new models or frameworks. Three themes stand out:
- **Context and token cost.** ripwire, billion-context, TokenEconomizer and several memory projects all attack the same pain: agents re-read too much and forget too much. Microsoft shipping a cost-control repo suggests agent spend is now a real operating concern.
- **Persistent, inspectable memory.** agent-memory, deja-vu and aoci-code all favor plain files, Git versioning and local retrieval over opaque vector stores. They are also built to be shared across Claude Code, Codex, Cursor and others.
- **"Agent with its own computer."** OpenMausBot, rakazo and CopilotKit's OpenBot (all Grok Bot or coworker-style) are the clearest momentum cluster, with OpenMausBot at +1437 today. Each gives the bot a VM or sandbox. Grok Bot is the common reference point, which suggests a recent product launch is driving the clone wave.

**New directions.** Agents are moving into physical and creative domains: an ESP32 driving an iPhone, CAD through MCP, video editing, game modding and Blender/Maya skills. Defensive tooling against agents (bla) is also appearing.

**Industry link.** The "DeepSeek Harness" (dsh) ecosystem is unusually visible, with plugins, a TUI, a mobile client and a QQ bridge. Skills are becoming a distribution format: anthropics/skills gained +793 today, and many third-party skill repos target several agents at once.

**Reliability warning.** Star counts here look manipulated in several places, so judge repos by their README and code.

## 4. Community Hot Spots

- **Agent context and memory tooling** ([ripwire](https://github.com/redhat-et/ripwire), [agent-memory](https://github.com/tigerless-labs/agent-memory), [deja-vu](https://github.com/vshulcz/deja-vu)). This is the most practical area for reducing cost and rework right now.
- **Sandboxed "bot with a computer" agents** ([OpenMausBot](https://github.com/milind-soni/OpenMausBot), [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)). Look at their sandboxing and approval models before adopting either.
- **Agent skills as a packaging format** ([anthropics/skills](https://github.com/anthropics/skills), [claude-quickstarts](https://github.com/anthropics/claude-quickstarts), [video-to-skill](https://github.com/brenoepics/video-to-skill)). Skills that work across agents are a growing format, and the question is which ones hold up.
- **Agent-ready browser and device control** ([agent-browser](https://github.com/vercel-labs/agent-browser), [esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent)). This is a good place for experimentation.
- **Agent security** ([bla](https://github.com/qybaihe/bla)). Defending against reverse-engineering agents is an emerging niche, and it is worth watching what else appears.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
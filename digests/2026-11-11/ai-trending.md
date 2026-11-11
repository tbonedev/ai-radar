# AI Open Source Trends 2026-11-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-11 14:53 UTC

---

# AI Open Source Trends Report: 2026-11-11

**Data caveats:**
- The trending feed reports total stars as 0 for every repo, so those totals are shown as "n/a" below.
- Several topic-search repos show very high star counts for what look like brand-new projects (for example 69,725 for a free-model plugin). That pattern often means star inflation or a viral launch, so treat those counts cautiously.

---

## 1. Finds

- **[openai/codex-security](https://github.com/openai/codex-security)**
  - It is a CLI and TypeScript SDK that finds, validates and fixes security vulnerabilities with Codex. It is published to npm as `@openai/codex-security`.
  - It suits teams that want automated vuln triage inside CI or scripts. It gained only +20 today, so it is early and low-profile, but it is first-party and worth a look.
- **[shadcn/improve](https://github.com/shadcn/improve)**
  - You use your strongest model to audit a codebase and write plans, and cheaper models then execute those plans.
  - It suits anyone paying for coding agents who wants to cut cost by splitting planning from execution. The idea is simple and concrete, and it had +333 stars today.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**
  - It does experience-driven, black-box cost control for coding agents, meaning it cuts token spend without access to model internals.
  - It suits teams whose agent bills are growing. It pairs well with the plan-then-execute idea above, but I can't verify its savings from this data.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**
  - It is a zero-dependency C++23 CLI and MCP server that gives coding agents compact code signatures, blast-radius analysis and tests-to-run. It claims signatures use 74.7% fewer bytes than function bodies.
  - It suits people hitting context limits on large repos. It comes from Red Hat's emerging-tech group, so it is more credible than most.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)**
  - It runs Gemma 4 26B-A4B inference in about 2 GB of RAM on any M-series MacBook.
  - It suits local-inference tinkerers on Apple Silicon. The claim is striking, so benchmark it yourself before relying on it.
- **[homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)**
  - It is an MCP server that lets Claude, ChatGPT and other assistants configure and automate Home Assistant, and it gained +640 stars today.
  - It suits smart-home users who want to describe automations in natural language instead of writing YAML.

**Treat with skepticism:** [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) claims unlimited free access to frontier models with no key or login, and it shows 69,725 stars. That is most likely a proxy or abuse-prone service, or hype. Several look-alike repos around the "DSH / DeepSeek Harness" ecosystem and the "Jev" API appear in the data, and I'd verify them before trusting them.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | n/a (+20) | OpenAI's CLI and SDK for finding, validating and fixing security vulnerabilities. It is first-party, but early adoption is small. |
| [shadcn/improve](https://github.com/shadcn/improve) | | n/a (+333) | A strong model audits the code and writes plans that cheaper models execute. It targets agent cost control. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | n/a (+712) | A browser automation CLI built for AI agents. It had solid momentum today, and the Rust implementation suggests it is meant to be fast. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,537 | A zero-dependency CLI and MCP server that gives coding agents compact code context and change-impact analysis. It claims 74.7% fewer bytes than reading function bodies. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 34,562 | A menu-bar tool that routes any agent to any model, such as Codex on DeepSeek or Claude Code on Kimi. It is useful for mixing agents and providers. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 5,707 | Black-box cost control for coding agents, driven by past experience. It comes from Microsoft and fits the token-cost trend. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,896 | A Git-versioned map of your codebase and DB schema, served by a local MCP server. Coding agents read it before editing. |
| [emanuele-em/kanzo](https://github.com/emanuele-em/kanzo) | Rust | 1,154 | A self-hosted kanban board for humans and agents, shipped as one 4.7 MB binary. It claims 5 MB of RAM and a 3 ms start. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | n/a (+788) | Production-grade engineering skills for AI coding agents. It is by a well-known author, so quality is likely decent. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 4,515 | Lets CLI agents pick up and follow through on tasks in the background. It only pings you with a decision card when uncertain. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,724 | Lets a team's coding agents talk to each other. It is an interesting multi-agent coordination angle. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,475 | A command center for managing coding agents across machines. It reaches into CAD, circuits and robotics use cases. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,800 | Infrastructure for continually self-improving agents. The description is vague, so check the substance. |
| [sandbox-quantum/switch](https://github.com/sandbox-quantum/switch) | Python | 4,371 | Self-hosted AI teammates for Slack, Teams, Discord, Telegram and Mattermost. It works with any agent harness and model. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 10,959 | Open-source AI coworkers that each get their own browser, files and tools. Every action is decided before it runs and recorded after, and it works with any AG-UI agent. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,844 | A $7 ESP32 acts as the eyes (AirPlay) and hands (USB HID) so a vision model can operate a real iPhone. It needs no Mac or jailbreak. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | n/a (+960) | An LLM-driven multi-market stock analysis system with news, a dashboard and automated push notifications. It can run on a schedule at no cost. |
| [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | Python | n/a (+640) | Natural-language configuration and automation of Home Assistant through MCP. It is practical and broadly useful. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,155 | A free office suite with Docs, Sheets and Slides, plus a CLI and skill that let coding agents edit real .docx, .xlsx and .pptx files locally. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 3,060 | A local-first conversational video editor with a multi-track timeline, MCP and Remotion rendering. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 8,210 | An on-device Android agent that operates apps and the web for you. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 18,669 | A Claude Code and Codex skill for Remotion product promos, with 124 shot recipes and CapCut export. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 5,069 | A local video editor for coding agents with 42 FFmpeg tools and an MCP server, and no cloud needed. |
| [Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth) | Python | 6,852 | An agent skill that geolocates a photo using OpenStreetMap, elevation, satellite and street-view data. It shows its work. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,337 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series Macs. If the claim holds, it is a notable on-device result. |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 3,772 | An open document-parsing model that claims state-of-the-art accuracy and speed. It was trained with an RSI loop in post-training. |
| [felixrieseberg/language-model-builder](https://github.com/felixrieseberg/language-model-builder) | | 63 | An educational macOS app where you train and chat with a tiny language model on your own Mac. It is small but charming for learning. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 80 | Local LLMs that read and reason while you type. It is very early. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,639 | A multimodal parsing engine plus an ontology- and wiki-driven knowledge engine. |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,021 | A lightweight knowledge base for people and agents, built for fast indexing and precise retrieval. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 953 | A self-hosted metasearch and grounding engine for agents, based on SearXNG, with a JSON API. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 262 | A single-binary scraper and parser for URLs, PDFs (with OCR) and Office files. It outputs Markdown or JSON and offers Firecrawl- and Jina-compatible APIs. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 804 | Ontology-augmented generation for agents. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 269 | Builds governed knowledge graphs from documents, with each fact traceable to its evidence. |

---

## 3. Trend Signal Analysis

**Agent tooling is where attention is concentrated.** The most visible themes are skills, MCP servers and harnesses for coding agents.

- **Skills and MCP:** Nearly half the topic results are skills or MCP servers. They extend agents into video, 3D, audio, office documents, geolocation and smart-home control. addyosmani/agent-skills (+788) leads the skills side.
- **Cost-aware agent architecture:** shadcn/improve and microsoft/TokenEconomizer both address agent spend. ripwire attacks the same problem from the context side. The shared idea is to route expensive reasoning to a strong model and keep routine work cheap.
- **Context-efficient code intelligence:** ripwire and aoci-code give agents compact, persistent maps of a codebase instead of making them re-read it.
- **Model-agnostic routing:** magpie and the DeepSeek- and Kimi-related repos reflect a shift toward pairing popular agent front-ends with cheaper back-end models.
- **Agents operating physical and mobile devices:** The ESP32-driven iPhone agent and on-device Android agents are new directions.
- **Security:** OpenAI's codex-security shows vendors moving agents into vulnerability remediation. BLA (adversarial defense against AI reverse-engineering agents) and LLMVault (a deliberately vulnerable OWASP LLM training platform) show interest from both the offensive and defensive sides.
- **Hype risk:** Several repos have implausibly large star counts for their age. Verify before adopting.

**Industry connection:** Coding-agent adoption is now broad enough that the ecosystem is optimizing around cost, context and interoperability. Mentions of Gemma 4, Kimi K3, DeepSeek V4.1 and Claude Opus 5.5 reflect a crowded model landscape, which explains the demand for routers and harnesses.

---

## 4. Community Hot Spots

- **Cost-splitting agent workflows** ([shadcn/improve](https://github.com/shadcn/improve), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer)): planning with a strong model and executing with a cheap one directly cuts spend. Try it on a real repo and measure.
- **Context-compression MCP servers** ([ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code)): useful for large codebases where agents burn tokens on file reads.
- **Agent-oriented browser and device control** ([agent-browser](https://github.com/vercel-labs/agent-browser), [esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent)): the interface layer for agents acting outside the terminal.
- **AI-assisted security remediation** ([codex-security](https://github.com/openai/codex-security)): worth watching as vendors move from detecting issues to fixing them.
- **Tiny on-device inference** ([turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)): a 26B MoE in about 2 GB is the kind of efficiency result that is worth reproducing.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Open Source Trends 2026-11-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-12 15:44 UTC

---

# AI Open Source Trends Report — 2026-11-12

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI plus MCP server that gives coding agents compact code signatures (claimed 74.7% fewer bytes than full bodies). It also reports blast radius and tests-to-run after a change. It suits anyone burning context tokens on large repos. Backed by Red Hat's emerging-technologies group, so it is less likely to be an empty shell.
- **[ashhart/TensorFold](https://github.com/ashhart/TensorFold)** — An LLM inference engine written in Zig, with Metal, CUDA and Vulkan backends. It is worth a look for engineers who want a small, cross-vendor alternative to llama.cpp. It is early and the data gives no benchmarks, so treat it as experimental.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series MacBooks. Anyone running local MoE models on constrained Macs should try it. The memory claim is striking and should be verified.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** — Experience-driven, black-box cost control for coding agents. Teams with large agent bills would want it. It comes from a credible source, but the approach needs testing on your own workloads.
- **[openai/codex-security](https://github.com/openai/codex-security)** — OpenAI's CLI and TypeScript SDK for finding, validating and fixing security vulnerabilities (+663 today). It is useful for AppSec and CI integration. It is a first-party release, so it is more substantive than most.
- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)** — A long-term memory runtime that uses plain Markdown as the source of truth, with local ranked retrieval. Claude Code and Codex can share one store, and it needs no API key. It is for people who want portable agent memory that they can diff and version.

**Caution:** Several star counts in the topic search are implausibly high for repos this new or niche (for example Ebony-Vinyl/dsh-our-free-model at 71,127 and cleanyourtv at 56,850). I suspect star inflation, so I did not feature those. Treat any "free unlimited frontier model" plugin with suspicion.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,541 | A C++23 CLI and MCP server that gives agents compact code signatures, blast-radius analysis and tests-to-run. It targets the context-cost problem of agents reading whole repos. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | 0 (+58) | An LLM inference engine for Metal, CUDA and Vulkan, written in Zig. It is a niche alternative to llama.cpp, and it is early. |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | C++ | 0 (+287) | The established C/C++ LLM inference library. It is included as a baseline that new engines such as TensorFold are compared against. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,341 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series Macs. It is an interesting example of memory-efficient MoE inference. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 5,875 | Black-box cost control for coding agents, driven by past experience. It addresses agent token spend directly. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 35,340 | A menu-bar tool that routes agent harnesses to other models, such as Codex on DeepSeek or Claude Code on Kimi. It is part of the model-swapping trend. |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 0 (+663) | OpenAI's security CLI and SDK for finding, validating and fixing vulnerabilities. It is a first-party entry in the security-agent space. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+812) | Production-grade engineering skills for AI coding agents. It had strong momentum today and comes from a well-known author. |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | TypeScript | 0 (+151) | An open-source terminal coding agent. It is an established project that is still trending. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 11,341 (+291) | AI coworkers that each get their own computer, with every action approved beforehand and logged afterward. It works with any AG-UI agent. |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 0 (+461) | Claims free tokens across many coding harnesses. It is a proxy-style project, so check the terms of service and sustainability before relying on it. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,733 | Lets a team's coding agents communicate with each other. It is a multi-agent coordination layer. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 4,694 | Lets CLI agents pick up and follow through on tasks in the background. It only asks a human when a decision is uncertain. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,315 | A Markdown-based long-term memory store with local retrieval, shared between Claude Code and Codex. It needs no API key. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,690 | Uses ChatGPT Web as a native model inside Codex. It is clever, but it likely depends on terms-of-service gray areas. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,233 | A free AI office suite for docs, sheets and slides. A CLI and skill let agents edit real .docx, .xlsx and .pptx files locally. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 8,365 | An on-device Android agent that operates apps and the web. It is a notable mobile agent project. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,879 | Lets a vision model drive a real iPhone using a $7 ESP32 for AirPlay input and USB HID output. It needs no Mac and no jailbreak. |
| [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | Rust | 15,935 | A parametric 3D CAD application in pure Rust, with MCP automation. It is a good example of CAD becoming agent-drivable. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 18,940 | A Remotion-based video skill with 124 shot recipes and CapCut export. It is part of the wave of video skills for coding agents. |
| [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) | Python | 7,368 | Breaks a video down shot by shot into an open VIDEO.md format. It identifies whether each shot was filmed, AI-generated or coded. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 3,796 | An open document-parsing model that claims state-of-the-art accuracy and speed. It was post-trained with an RSI loop. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,804 | Infrastructure for agents that continually improve themselves. It sits in the self-improvement research space. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,706 | Describes itself as an enterprise world model, "world's first" and open source. The claim is bold and needs scrutiny. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 266 | A single Rust binary that turns URLs, OCR'd PDFs and Office files into clean Markdown or JSON. It has a Firecrawl/Jina-compatible API and an MCP server. |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,105 | A lightweight knowledge base for both people and agents, with fast indexing. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 959 | A self-hosted metasearch and grounding engine for agents, based on SearXNG. It has a JSON API. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 275 | Builds governed knowledge graphs from documents. Every fact is traceable to its evidence. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 805 | Ontology-augmented generation for agents. It is a small project in the GraphRAG-adjacent space. |

## 3. Trend Signal Analysis

The strongest attention is on the layer around coding agents, not on new models. That layer includes skills, memory, context compression, cost control, orchestration and model routing. Today's trending list shows it. addyosmani/agent-skills gained +812 stars. Topic results are dominated by SKILL.md-style packages for video, design, charts and geolocation. These target Claude Code, Codex, Cursor and Gemini CLI at once, so the SKILL.md format is becoming a de facto cross-harness standard.

Three directions look newer. First, context efficiency: ripwire's signature-based code maps, TokenEconomizer and agent-memory all try to spend fewer tokens per task. Second, MCP is spreading beyond developer tooling into CAD (SolidCraft), office files (genoffice) and web discovery (awesome-webmcp-sites). Third, model-routing shims such as magpie and codex-chatgpt-web decouple the harness from the model vendor.

Industry connections: OpenAI's codex-security shows vendors moving into agentic security. Many repos reference Gemma 4, DeepSeek V4.x and Kimi K3, and local MoE inference is a growing theme (turbo-fieldfare, TensorFold).

A caution on data quality. Many topic-search repos have implausibly high star counts and share branding such as "dsh" and "Jev". That pattern suggests coordinated promotion or star manipulation, and the numbers should not be read as organic momentum.

## 4. Community Hot Spots

- **Context-budget tooling for agents** ([ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer)). Token cost is now a daily pain point, so these tools have a direct payoff.
- **Portable agent memory and skills** ([agent-memory](https://github.com/tigerless-labs/agent-memory), [agent-skills](https://github.com/addyosmani/agent-skills)). Plain-file formats that work across harnesses reduce vendor lock-in.
- **Local inference on constrained hardware** ([turbo-fieldfare](https://github.com/drumih/turbo-fieldfare), [TensorFold](https://github.com/ashhart/TensorFold)). Cross-backend engines and small-RAM MoE are worth benchmarking.
- **Agent security and governance** ([codex-security](https://github.com/openai/codex-security), [OpenBot](https://github.com/CopilotKit/OpenBot)). Approve-before-act and audit-after-act designs fit enterprise adoption.
- **Agent-friendly document ingestion** ([pagesift](https://github.com/YOLOW92/pagesift), [OXR](https://github.com/SoMarkAI/OXR)). Better parsing improves every RAG pipeline.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
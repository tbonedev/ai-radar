# AI Open Source Trends 2026-11-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-15 14:28 UTC

---

# AI Open Source Trends Report — 2026-11-15

Caveat: the trending list shows ⭐0 for total stars, which is a data gap, so the "total" figures for those rows are unknown. Several topic-search star counts (e.g. 58k for a TV debloater, 75k for a plugin) look inflated or odd, so I treat them as unreliable.

## 1. Finds

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** gives coding agents Chrome DevTools access: inspecting pages, debugging, and performance traces. Front-end engineers using Claude Code, Cursor or Codex can have the agent check its own UI changes in a real browser. It is an official Chrome project, so it is likely to last.
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** is a Go code-review tool. It combines deterministic rules (NPE, thread-safety, XSS and SQL injection checks) with an LLM agent to produce line-level comments. It accepts OpenAI- and Anthropic-compatible endpoints. Teams that want less noisy AI review in CI would use it, and the rules-plus-LLM split is the part worth studying.
- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)** is a self-hosted workflow runner. It orchestrates CodeBuddy, Codex and Claude Code through scripts, with human approval gates. It suits teams that want repeatable, auditable agent delivery pipelines instead of ad-hoc prompting.
- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)** is a workspace for annotating agent plans and code, then sending the feedback back to the agent in one click. It is for people who review agent plans heavily and want a structured loop instead of pasting comments. It is the newest idea of the group, and I can't judge how mature it is.
- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** evaluates agent skills. It has quality gates, detection of semantic overlap between skills, synthetic eval datasets, and live agent runs that measure how a skill changes behavior. Anyone maintaining a skill library will find it useful, since skills are usually shipped untested.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** is described as "experience-driven black-box cost control for coding agents." It targets token spend on coding agents. The README summary is vague, so check for real benchmarks before adopting it.

Likely hype or thin: [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) claims unlimited free frontier models with no key. Its 75k stars and that claim both deserve skepticism, and it may be a proxy with terms-of-service or security issues.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+718) | Chrome DevTools exposed to coding agents over MCP. It is an official tool that lets agents debug and verify their own web output. |
| [ggml-org/ggml](https://github.com/ggml-org/ggml) | C++ | 0 (+154) | The tensor library underneath llama.cpp and similar local inference stacks. It is established, so today's gain is a signal of local-inference interest, not news. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,544 | A zero-dependency CLI and MCP server that finds code without reading the whole repo. It aims to cut agent token costs and report blast radius and which tests to run. |
| [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | Python | 19,483 | An open-source plugin for designing and reviewing software with agents. The summary is thin, so check the repo before relying on it. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 6,179 | Black-box cost control for coding agents, driven by past experience. It addresses a real pain point, token spend. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+1,041) | An office SDK (editing, calculation, collaboration) positioned for both people and AI agents. It has the largest single-day gain on the trending list. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+484) | Self-hosted workflows that orchestrate Codex, Claude Code and CodeBuddy with approval gates. It targets governed agent delivery. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+860) | A plan-annotation and code-review workspace that feeds comments back to agents. It is built around keeping the human in the loop. |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | 0 (+393) | The Agent-User Interaction Protocol, for bringing agents into front-end apps. [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) builds on it. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,747 | Lets a team's coding agents talk to each other. It is an early multi-agent coordination layer. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,490 | A command center for running many agents across many machines. It also claims reach into CAD, circuits and music, which sounds broad. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 5,454 | Lets CLI agents pick up work in the background and follow it through. It asks you for a decision only when unsure. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 36,818 | A menu-bar tool for pointing agents at other models, for example Codex on DeepSeek or Claude Code on Kimi. It is useful for cross-model experiments. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+688) | A hybrid deterministic and LLM code reviewer with a built-in multi-language ruleset. Its line-level comments are the selling point. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,387 | A free AI office suite with a CLI and skill that lets agents create real .docx, .xlsx and .pptx files locally. It is bring-your-own-key. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,984 | Uses a $7 ESP32 for AirPlay "eyes" and USB HID "hands" so a vision model can operate a real iPhone. It needs no jailbreak, which is an unusual hardware hack. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,190 | Lets an MCP agent operate an iPhone or Android phone with the user in the loop. It is a similar goal to the ESP32 project, by a well-known developer. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 8,682 | An on-device Android agent that operates apps and the web. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 7,376 | An AI video agent that turns a coding agent into a video producer, with an editor for changes. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [felixrieseberg/language-model-builder](https://github.com/felixrieseberg/language-model-builder) | | 66 | An educational macOS app for building and chatting with a tiny language model trained on your Mac. It is small, but good for learning. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,464 | An Ollama-style server for "decision models", exposing a /v1/systemone endpoint. It is a niche, vendor-specific ecosystem, so verify the claims. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 81 | Local LLMs that read and think as you type. It is very early. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,201 | A lightweight knowledge base for people and agents, with fast indexing. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 975 | A self-hosted SearXNG-based metasearch and grounding engine for agents, with a JSON API. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 274 | A single-binary scraper and parser that turns URLs, PDFs (with OCR) and Office files into Markdown or JSON. It has a Firecrawl-compatible API and an MCP server. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 294 | Turns documents into a readable Markdown wiki with cited answers. Its benchmark claims (99.5% vs 79%) are self-reported. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 281 | Builds governed knowledge graphs in which every fact is traceable to its evidence. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 805 | Ontology-augmented generation for agents. |

## 3. Trend Signal Analysis

Agent skills and agent tooling dominate today's list, and almost none of it is about models. Four trending repos are skill libraries or skill tooling: [stitch-skills](https://github.com/google-labs-code/stitch-skills), [modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) (+1,220, the biggest gain), [claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) and [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter). Vendors such as Google and Chrome are now publishing skills for coding agents. The topic search also shows many domain skill packs, for example video, logo design, geolocation and FFmpeg.

A second direction is the layer around agents. [plannotator](https://github.com/backnotprop/plannotator) and [LoopForge](https://github.com/Tencent/LoopForge) cover review and approval gates, [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) covers verification, and [SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) covers skill quality. The question has moved from "can the agent do it" to "can we govern and measure it".

New to me is the cluster around physical or device control. The ESP32 iPhone agent, [pinky](https://github.com/DIYgod/pinky) and [Mika](https://github.com/wangzan101/Mika) all let agents operate phones.

Several repos reference "DeepSeek Harness" ("dsh") plugins, and some compare themselves to "Grok Bot". I can't verify the ecosystem behind either name from this data. Some of these repos are likely hype or promotional, given the extreme star counts on tiny projects.

Cross-model routing, such as [magpie](https://github.com/yetone/magpie), shows that harnesses are becoming model-agnostic.

## 4. Community Hot Spots

- **Agent skills as a distribution format**: official vendor skills from [Google](https://github.com/google-labs-code/stitch-skills) and [Chrome](https://github.com/GoogleChrome/modern-web-guidance-src) mean skills are becoming a standard way to ship documentation and best practices.
- **Skill and agent evaluation**: [SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) and [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) address testing and cost, which most skill libraries still lack.
- **Human-in-the-loop review tooling**: [plannotator](https://github.com/backnotprop/plannotator), [LoopForge](https://github.com/Tencent/LoopForge) and [open-code-review](https://github.com/alibaba/open-code-review) are practical to try in a team workflow now.
- **Agents that read less and spend fewer tokens**: [ripwire](https://github.com/redhat-et/ripwire) and [pagesift](https://github.com/YOLOW92/pagesift) reduce context cost through better retrieval and parsing.
- **Agent-to-UI protocols**: [AG-UI](https://github.com/ag-ui-protocol/ag-ui) is gaining ground as a standard for embedding agents in front-end apps.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
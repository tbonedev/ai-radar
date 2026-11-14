# AI Open Source Trends 2026-11-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-14 13:55 UTC

---

# AI Open Source Trends Report, 2026-11-14

**Data caveats:**
- The trending list reports ⭐0 for every repo, so I show total stars as "n/a" and give only today's gain.
- Several topic-search star counts look implausible for repos this new or this thin: `Ebony-Vinyl/dsh-our-free-model` at 73,845, `Gathin23/cleanyourtv` at 57,673, and `openGym` at 21,328. Treat them as weak signals. Some are probably star-farmed.
- Excluded as non-AI: uptime-kuma, sure, airgorah, openGym, cleanyourtv, xiaodou-open-platform, shader-effects-inc/shaders, the Roblox capture repo, and Veyra-NRVideo. Veyra-NRVideo is a video-upscaling and frame-generation tool, not an AI-engineering project.

## 1. Finds

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** (Go, +897 today)
  - It is a code-review tool that combines deterministic pipelines, such as rule checks for NPE, thread-safety, XSS and SQL injection, with an LLM agent. It posts line-level comments and works with OpenAI- and Anthropic-compatible endpoints.
  - Teams who want AI review in CI that isn't purely LLM-driven, and so is less noisy and more reproducible, should look at it. The "battle-tested at Alibaba's scale" claim is unverified.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** (C++, 2,543 stars)
  - It is a zero-dependency C++23 CLI and MCP server that helps coding agents locate code without reading the whole repo. It also reports blast radius and which tests to run.
  - It suits anyone burning tokens on large-repo agent sessions. It comes from Red Hat's emerging-tech group, so it is more credible than the typical skill repo.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** (Python, 6,097 stars)
  - It does "experience-driven" black-box cost control for coding agents. It learns from past runs to cut spend without modifying the agent.
  - Anyone running Claude Code or Codex at team scale who wants a cost lever should try it. Its sibling [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) (+227) takes the blunt route of terse output to save about 65% of tokens. It is more meme than method, but the pain it targets is real.
- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)** (Go, +174)
  - It is a self-hosted workflow layer that scripts CodeBuddy, Codex and Claude Code into delivery pipelines with human approval gates.
  - Platform teams standardising multi-agent coding workflows would use it. It is early, but its vendor-neutral orchestration of competing agents is notable.
- **[ashhart/TensorFold](https://github.com/ashhart/TensorFold)** (Zig, +188)
  - It is an LLM inference engine targeting Metal, CUDA and Vulkan from one Zig codebase.
  - It is for people who want a small, hackable alternative to llama.cpp. Check benchmarks and model support before investing, because the description offers no proof of either.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** (TypeScript, 5,799 stars)
  - It records your on-screen work session and uses the Copilot SDK to reconstruct intent and ordered steps. It then builds a reusable Skill or Automation.
  - It suits anyone who wants to turn demonstrated workflows into agent skills instead of writing them by hand. A related, smaller idea is [brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill) (Rust, 155), which does the same from tutorial videos.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | TypeScript | n/a (+1,225) | Source for guidance that keeps coding agents current on modern web best practices. It has today's largest gain on the list, which signals demand for fixing stale model knowledge. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | n/a (+673) | Chrome DevTools exposed to coding agents over MCP. It is an official, practical way to give agents a debugging loop in a real browser. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | n/a (+897) | Hybrid deterministic and LLM code-review tool with a built-in multi-language ruleset. It stands out for precise line-level comments and compatibility with either major API. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,543 | CLI and MCP server that finds code without reading the repo and reports blast radius. It aims to cut agent token costs on large codebases. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 6,097 | Black-box cost control for coding agents, driven by past experience. It addresses agent spend without touching the agent itself. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | n/a (+188) | Inference engine for Metal, CUDA and Vulkan. It is a rare Zig entry in the engine space, and unproven. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | n/a (+227) | Skill plus proxy that claims a 65% token cut by making agents answer tersely. The claim is unverified, but it is popular. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | n/a (+412) | Workspace for annotating plans and code review, then sending the feedback to agents in one click. It treats the human-in-the-loop review step as the product. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | n/a (+174) | Self-hosted workflows that orchestrate several coding agents with approval gates. Cross-vendor orchestration is the standout. |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | TypeScript | n/a (+462) | Open-source terminal coding agent from the Qwen team. It is established, and its gain shows continued interest in non-US CLI agents. |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | n/a (+9) | Agent-User Interaction Protocol for bringing agents into frontends. Its momentum is small today, but [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) (12,192 stars) already builds on it. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 36,414 | Menu-bar tool that routes any agent to any model, for example Codex on DeepSeek or Claude Code on Kimi. It matches the trend of decoupling agent harnesses from model vendors. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 5,278 | Lets CLI agents pick up work in the background and only ask you for decisions through cards. It is a lightweight take on asynchronous agent supervision. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,740 | Lets a team's coding agents talk to each other. It is early and thinly described. |
| [emanuele-em/kanzo](https://github.com/emanuele-em/kanzo) | Rust | 1,190 | Self-hosted kanban for humans and agents in a 4.7 MB binary. Its design goal is minimal tokens per agent reply. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | n/a (+495) | Office SDK for embedding editing, calculation and file processing for both people and AI agents. It is an established project now positioning itself as agent-ready. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | n/a (+556) | Claude Code skills for equity analysis, charting, screeners and strategy work. It is a vertical skill pack, and a reminder that these are not financial advice. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,339 | Open-source office suite with a built-in agent, plus a CLI that lets Claude Code and Codex create real .docx, .xlsx and .pptx files. The agent-writable file formats are the useful part. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 6,908 | Turns a coding agent into a video agent, with an editor to change what it makes. It is part of a large video-skill cluster. |
| [Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth) | Python | 7,010 | Skill that geolocates a photo using OpenStreetMap, elevation skylines, satellite imagery and street view, and shows its work. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,676 | Agent that discovers trends, creates content and publishes across Chinese social platforms. Its regional platform coverage is the differentiator. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 8,576 | On-device Android agent that operates apps and the web. It joins several phone-control projects, such as [DIYgod/pinky](https://github.com/DIYgod/pinky) (2,129). |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,710 | Claims to be the first open-source enterprise world model. The description is bold and light on specifics, so verify before trusting it. |
| [felixrieseberg/language-model-builder](https://github.com/felixrieseberg/language-model-builder) | n/a | 64 | Educational macOS app where you build, train and chat with a tiny language model on your own Mac. Small, but a good learning tool. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,463 | "Ollama for decision models": a local server for open decision models behind a `/v1/systemone` API. It belongs to a small Jev/TypeSafe promotional cluster, so treat it carefully. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 81 | Local LLMs that read and think while you type. It is tiny and early. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,317 | Long-term agent memory kept as plain Markdown, with local ranked retrieval and a background "sleep-time" manage layer. Claude Code and Codex can share one store, with no API key. |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,185 | Lightweight knowledge base for people and agents, with fast indexing. It is another Rust entry in the retrieval space. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 272 | Self-hosted scraper and parser that turns URLs, OCR'd PDFs and Office files into clean Markdown or JSON. It offers Firecrawl- and Jina-compatible APIs in a single binary. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 973 | SearXNG-based self-hosted metasearch and grounding engine for agents, with a JSON API. It is a privacy-friendly replacement for paid search APIs. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 266 | Turns documents into a readable Markdown wiki that answers with citations. Its benchmark numbers, such as 99.5% vs 79% right-note retrieval, are self-reported. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 279 | Builds governed knowledge graphs where every fact is traceable to evidence. It targets auditability. |

## 3. Trend Signal Analysis

**Tools around coding agents are getting the attention, not the agents themselves.** Today's biggest gains are context and guidance for agents (modern-web-guidance-src at +1,225, chrome-devtools-mcp at +673), review and oversight (open-code-review, plannotator), and cost control (TokenEconomizer, ripwire, caveman). The audience now treats the agent as given and works on its inputs, its supervision and its bill.

**Skills are a distribution format.** The topic list is dominated by `agent-skills` repos, especially for video, motion and design, such as video-shotcraft, pixelfx and ffmpeg-skill. These are packaged prompts plus assets for Claude Code and Codex. Skill-extraction tools like skill-recorder and video-to-skill suggest that creating skills is the next automation target. Many of the largest star counts here are not credible, so judge by the code.

**Model and harness decoupling.** magpie (Codex on DeepSeek, Claude Code on Kimi), codex-chatgpt-web and the "dsh" (DeepSeek Harness) plugin ecosystem all show people mixing agent front-ends with cheaper or different models. The DeepSeek Harness cluster looks partly promotional.

**New directions:**
- Phone and device control through MCP, as with pinky, esp32-iphone-agent and Mika.
- Markdown-file agent memory.
- Rust and Zig single-binary infrastructure.

**Industry context:** Claude Opus 5.5 is already cited as a creation engine in lemo-opuscar, and DeepSeek V4.1 and Kimi K3 appear in dsh-our-free-model. These show strong demand for cheap frontier-class coding models. The same demand is behind the token-saving tools above.

## 4. Community Hot Spots

- **Agent cost and context efficiency** ([ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer), [caveman](https://github.com/JuliusBrussee/caveman)): token spend is the pain point most developers share, and these tools are easy to try.
- **Hybrid deterministic and LLM review** ([open-code-review](https://github.com/alibaba/open-code-review)): rules plus an LLM address noise and repeatability, which pure LLM review lacks.
- **Multi-agent orchestration with human gates** ([LoopForge](https://github.com/Tencent/LoopForge), [plannotator](https://github.com/backnotprop/plannotator), [agent-autoloop](https://github.com/KKKKhazix/agent-autoloop)): the question is shifting from "can the agent do it" to "how do I review and approve what it did".
- **Simple, local agent memory and retrieval** ([agent-memory](https://github.com/tigerless-labs/agent-memory), [RustXNG](https://github.com/sahenjp/RustXNG), [pagesift](https://github.com/YOLOW92/pagesift)): Markdown-as-source-of-truth and self-hosted grounding avoid vector-database overhead and API fees.
- **Agent-aware browser and web tooling** ([chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp), [modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)): first-party vendor tooling for agents is becoming the standard way to keep them accurate.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
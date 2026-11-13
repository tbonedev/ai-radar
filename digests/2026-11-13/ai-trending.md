# AI Open Source Trends 2026-11-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-13 15:03 UTC

---

# AI Open Source Trends Report, 2026-11-13

**Data caveats:**
- Trending entries report ⭐0 total stars, which means the total wasn't captured. I show "—" for those and use today's gain only.
- Several topic-search star counts look implausible for repos this new or this narrow. Examples are a free-model plugin at 72,464, a TV debloater at 57,291, and a gym tracker at 21,195. Treat them as possibly inflated or botted, and weigh them lightly.

---

## 1. Finds

- **[openai/codex-security](https://github.com/openai/codex-security)**: A CLI and TypeScript SDK from OpenAI that finds, validates, and fixes security vulnerabilities in code. Security and AppSec teams can script it into CI. The "validates" step is the interesting part, since it aims to cut false positives. It's vendor-backed and the +754 today is real traction, but check how much it depends on OpenAI models.
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**: A Go code-review tool that pairs deterministic pipelines with an LLM agent. It posts line-level comments and ships built-in rules for NPE, thread-safety, XSS and SQL injection. It works with OpenAI and Anthropic-compatible endpoints. It suits teams that want repeatable review checks without pure-LLM noise (+206 today).
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that finds code for coding agents without reading the whole repo. It also reports blast radius and which tests to run. Anyone paying for agent tokens on large codebases should try it. The claims, such as "every guess labelled", are ambitious and unverified.
- **[GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)**: Source for guidance that keeps coding agents current on web best practices. Front-end devs whose agents emit outdated patterns benefit most. It's the biggest mover today (+1,875). It's probably a content and skills repo rather than a runtime tool, so read it before assuming it's code.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: "Experience-driven black-box cost control for coding agents", with only a one-line description available. Teams with runaway agent bills should watch it. It's an early research-flavored project, so verify the savings yourself.
- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)**: A workspace for annotating agent plans and code diffs, then sending all the feedback back to the agent in one click. It's useful for people reviewing long agent runs (+100 today).

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | — (+754) | OpenAI's CLI and SDK for finding, validating and fixing vulnerabilities. Strong first-day momentum and vendor backing. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | — (+206) | Hybrid deterministic-plus-LLM code reviewer with a multi-language ruleset. It aims for line-level precision and works with OpenAI and Anthropic APIs. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | — (+60) | Exposes Chrome DevTools to coding agents over MCP. It gives agents real browser debugging instead of guesswork. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,543 | A ripgrep-style code finder and MCP server that cuts agent token use. It also reports blast radius and tests to run. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 6,020 | Black-box cost control for coding agents. A cost-saving angle that is increasingly relevant. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,911 | A Git-versioned map of code and DB schema that agents read before editing. A local-first MCP server and CLI. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 35,992 | A menu-bar tool for pointing Codex or Claude Code at other vendors' models, such as DeepSeek or Kimi. The star count is large, so verify it. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | TypeScript | — (+1,875) | Keeps coding agents current on web best practices. Today's largest gain on the list. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | — (+100) | Plan and diff annotation workspace that feeds review comments back to agents in one click. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,739 | Lets a team's coding agents talk to each other. It's a multi-agent coordination layer. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,068 | Lets MCP agents operate an iPhone or Android phone with a human in the loop. A notable author and a concrete use case. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,907 | Drives a real iPhone with a $7 ESP32 using AirPlay for vision and USB HID for input. Works with any OpenAI-compatible vision model. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 5,080 | Lets CLI agents pick up and follow tasks in the background. It only pings you when a decision is needed. |
| [emanuele-em/kanzo](https://github.com/emanuele-em/kanzo) | Rust | 1,179 | A self-hosted kanban for humans and agents in one 4.7 MB binary. The footprint claims (5 MB RAM, 3 ms start) are testable. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | — (+272) | LLM-driven multi-market stock analysis with news, dashboards and push notifications. Bilingual and designed to run on a free schedule. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | — (+60) | Claude Code skills for traders, covering screeners, charting and economic calendars. Niche, but a good model of a vertical skills pack. |
| [Likely7/Veyra-NRVideo](https://github.com/Likely7/Veyra-NRVideo) | C++ | — (+245) | Windows video player with AI super-resolution and frame generation, marketed as "PS5 GTA6 to 120FPS with DLSS 5". The claims look like hype and are unverified. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,294 | An open-source AI office suite with a CLI that lets agents edit real .docx, .xlsx and .pptx files. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,660 | A social-media agent that finds trends, creates content and publishes to Xiaohongshu, Douyin, Zhihu and Bilibili. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 8,506 | An on-device Android agent that operates apps and the web. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 19,125 | A Claude Code and Codex skill for Remotion product promos. It ships 124 shot recipes and exports to CapCut. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,348 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series MacBooks. The most concrete local-inference result here. |
| [felixrieseberg/language-model-builder](https://github.com/felixrieseberg/language-model-builder) | — | 64 | An educational macOS app for training and chatting with a tiny language model on your own Mac. Small, but a nice teaching tool. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 81 | Local LLMs that read and reason as you type. It's early and has little documentation. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,459 | An "Ollama for decision models" that serves a Jev-compatible API. It's part of a cluster of repos around one niche model family, so it may be coordinated promotion. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,316 | Long-term agent memory with Markdown as the source of truth and local ranked retrieval. Claude Code and Codex share one store, with no API key. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 269 | A single-binary scraper and parser for agents. It converts URLs, OCR'd PDFs and Office files to Markdown or JSON, with a Firecrawl- and Jina-compatible API. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 967 | A self-hosted SearXNG-based search and grounding engine for agents, with a JSON API. |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,171 | A lightweight knowledge base for people and agents that emphasizes fast indexing. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 278 | Builds governed knowledge graphs from documents. Every fact is gated and traceable to evidence. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 805 | Ontology-augmented generation for agents. An interesting alternative to plain vector RAG. |

---

## 3. Trend Signal Analysis

**Attention is on tooling around coding agents, not on new models.** The strongest signals today are Codex Security, modern-web-guidance-src, open-code-review, Plannotator and chrome-devtools-mcp. All of them make agents better informed, better supervised or safer.

**Three directions stand out:**
- **Token and cost control.** Ripwire and TokenEconomizer treat agent spend as a first-class problem. Ripwire does it by avoiding whole-repo reads, and TokenEconomizer by controlling cost as a black box.
- **Agent-readable context.** Examples are Git-versioned code maps (aoci-code), Markdown-based memory (agent-memory) and web guidance for agents. The pattern is to give agents curated, local context.
- **Agents operating real devices.** Pinky, the ESP32 iPhone agent and Mika all let agents drive phones.

**Skills as a distribution format.** Many topic hits are Claude Code or Codex skills, especially for video and motion work: Remotion, CapCut export and film styles.

**Industry connections.** The "model harness" ecosystem is visible. The "dsh" (DeepSeek Harness) plugins, and routers like magpie that run Codex on DeepSeek or Claude Code on Kimi, show developers decoupling agent front-ends from model vendors. Local inference of large MoE models, such as Gemma 4 in about 2 GB, continues in parallel.

**Caution.** Several topic-search repos have implausible star counts, and some clusters (Jev, dsh) look promotional. Judge them by their code.

---

## 4. Community Hot Spots

- **Agent security and review.** [Codex Security](https://github.com/openai/codex-security) and [open-code-review](https://github.com/alibaba/open-code-review) point to validated, low-noise automated review. Compare them against your current CI checks.
- **Token-efficient code navigation.** [ripwire](https://github.com/redhat-et/ripwire) and [aoci-code](https://github.com/aoci-spec/aoci-code) address agent context cost over MCP. Both are worth benchmarking on a large repo.
- **Agent memory in plain files.** [agent-memory](https://github.com/tigerless-labs/agent-memory) shares one Markdown store across Claude Code and Codex. It's a practical pattern for multi-tool workflows.
- **Human-in-the-loop review tooling.** [Plannotator](https://github.com/backnotprop/plannotator) and [Coucou](https://github.com/Louis-CFM/coucou), the notch-based approval app, make long agent runs easier to supervise.
- **Local large-model inference on consumer hardware.** [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) is worth testing if you run models on Apple silicon.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
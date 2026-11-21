# AI Open Source Trends 2026-11-21

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-21 15:03 UTC

---

# AI Open Source Trends Report, 2026-11-21

**Data caveat:** The trending list reports total stars as 0, so only today's gains are usable for those rows. Many topic-search star counts look implausible. Several repos with a few days of activity show 10k to 80k stars, which suggests star inflation or a sorting artifact. I treat them as weak signals and judge projects by what they do.

## 1. Finds

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)**: It generates agent-usable CLIs for existing software, and there is a "CLI-Hub" registry of them. Use it if you want coding agents to drive GUI-first or API-less tools through a shell. With +767 today, interest is real, but I can't tell from the data how good the generated CLIs are.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)**: An MCP server for RTL waveform debug. It reads FST waveforms (VCD/FSDB are auto-converted) plus a SystemVerilog netlist, and exposes 34 tools for driver analysis, X tracing and pass/fail waveform diff. Chip verification engineers can let an agent trace why a signal went X. It is niche, concrete and from a credible org.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that finds code without the agent reading the whole repo. It also reports blast radius and which tests to run. Anyone paying for agent tokens on large codebases should look at it.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: Black-box, experience-driven cost control for coding agents. The description is thin, so treat it as a research-flavored project to watch. It suits teams worried about agent spend.
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)**: An open-source agent for CI/CD reliability, with +450 today. It targets platform and SRE teams who want failing pipelines triaged automatically. It is worth a trial, though the data doesn't show how it compares to existing tooling.
- **[brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill)**: A Rust tool that turns a tutorial video into an installable agent skill by reading the screen, not the transcript. It runs locally. The idea is new, but it is early (176 stars), so expect rough edges.

**Hype warning:** [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) claims unlimited free frontier models with no key (82,872 stars). That is almost certainly a proxy or abuse of someone's quota, not a durable project. [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) (59,970 stars, a TV debloater tagged `claude-code`) looks like topic-tag stuffing.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+767) | Turns arbitrary software into agent-native CLIs, with a CLI-Hub registry. A strong signal that agent tooling is moving toward shell interfaces. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,560 | A "ripgrep for AI context" CLI and MCP server that cuts agent token use. It also reports tests to run and quality deltas. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 2,846 | A Git-versioned map of the codebase and DB schema, served over MCP. It gives Claude Code, Codex, Cursor and opencode persistent context. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+202) | Intel's established inference optimization and deployment toolkit. It is a known project, and today's bump is the only notable signal. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 291 | An MCP server for hardware waveform debugging with 34 tools. A rare vertical MCP use case outside web and dev tooling. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 39,725 | A menu-bar app to run Codex on DeepSeek or Claude Code on Kimi. It mixes harnesses with models from other vendors. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | n/a (+999) | A search, scrape and data-provider API for agents. Well known, with the biggest gain on the trending list. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+884) | An agentic skills framework and development methodology. Already widely known, so its gain reflects staying power rather than novelty. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | n/a (+450) | An agent for CI/CD reliability. It applies agents to ops work instead of code generation. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 2,928 | A personal agent with its own computer that chases invoices and cancels trials, and asks before acting. It runs locally with a model of your choice. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,651 | Infrastructure for continually self-improving agents. The claim is ambitious, so check for concrete benchmarks. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,522 | A command center for running many coding agents across machines. It extends to CAD, circuits and music. |
| [emanuele-em/kanzo](https://github.com/emanuele-em/kanzo) | Rust | 1,261 | A self-hosted kanban board for humans and agents in a 4.7 MB binary using about 5 MB of RAM. The efficiency numbers are the standout. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 5,885 | Records your on-screen work and rebuilds it as a reusable Skill or Automation using the Copilot SDK. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,631 | Lets any MCP agent operate an iPhone or Android phone with you in the loop. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | n/a (+689) | A desktop tool that cuts long videos into shorts with subtitles, covers and post copy. It is practical for creators. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,731 | An open AI office suite with a CLI and skill so agents can edit real .docx, .xlsx and .pptx files locally. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 9,368 | An on-device Android agent that operates apps and the web. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 9,136 | 42 local FFmpeg tools with an MCP server for agent video editing. No cloud or API keys. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 8,827 | Turns a coding agent into a video agent with editors for the output. |
| [Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth) | Python | 7,375 | An agent skill that geolocates photos using OSM geometry, elevation skylines and satellite imagery. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+488) | Trains a 64M-parameter LLM from scratch in about two hours. A good educational option for understanding the full pipeline. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 12,526 | Claims 2.78T-parameter Kimi K3 inference on one CPU in 8.24 GB of RAM, in portable C99. That is extraordinary, so verify before believing it. |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | JavaScript | 82,872 | A plugin promising free, keyless access to frontier models. Treat it as likely hype or abuse. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,582 | A lightweight knowledge base for people and agents, with fast indexing. |
| [RustXNG/RustXNG](https://github.com/RustXNG/RustXNG) | Rust | 995 | A self-hosted metasearch and grounding engine for agents based on SearXNG. It has a JSON API and optional page text. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 308 | Turns documents into a readable Markdown wiki that answers with citations. It claims 63% fewer LLM tokens, which is self-reported. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 298 | A local-first ingestion engine with layout-aware PDF, Office and OCR parsing. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 297 | Builds governed knowledge graphs from documents, with each fact traceable to its evidence. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+566) | An agent skill that researches a topic across Reddit, X, YouTube, HN and Polymarket, then synthesizes a grounded summary. |

## 3. Trend Signal Analysis

**Skills are the dominant unit of distribution.** Most of today's hot repos ship as agent skills or plugins rather than standalone apps. Examples are [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) (+1,794, 82 skills), [diagram-design](https://github.com/cathrynlavery/diagram-design) (+582), [stitch-skills](https://github.com/google-labs-code/stitch-skills) (+324), [cursor/plugins](https://github.com/cursor/plugins) (+261) and [app-store-compliance](https://github.com/mjmirza/app-store-compliance) (+724). The "Agent Skills open standard" mentioned by Google's repo suggests cross-agent portability (Claude Code, Codex, Cursor, Gemini CLI, Pi) is becoming a real expectation.

**Video and media production by coding agents** is a clear cluster: ffmpeg-skill, openfilm, hypit and video-talkcraft all use a coding agent as the director. Several are code-rendered, using Remotion or similar, rather than relying on video models.

**New directions:**
- Token and cost economics. ripwire, TokenEconomizer and the aoci index all try to cut how much code an agent reads.
- Mixing harnesses and models. magpie runs Codex on DeepSeek and Claude Code on Kimi, and several `dsh-*` repos build around a "DeepSeek Harness" ecosystem.
- Vertical MCP servers for debuggers, CAD, Blender and phones.

**Industry context:** The model names in the data (DeepSeek V4.1, Kimi K3, Opus 5.5) show a multi-vendor, cheap-model environment where harnesses are commoditized. Much of the topic-search data is inflated, so rely on trending deltas more than totals.

## 4. Community Hot Spots

- **Agent-native CLIs and MCP for niche tools.** [CLI-Anything](https://github.com/HKUDS/CLI-Anything) and [wave-mcp](https://github.com/Tencent/wave-mcp) show that wrapping specialist software is where untapped value lies.
- **Context and token efficiency for coding agents.** Look at [ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code) and [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) if agent bills or context limits hurt.
- **Skill portability.** Check whether skills like [stitch-skills](https://github.com/google-labs-code/stitch-skills) work across agents before you invest in one format.
- **Agents for operations.** [opensre](https://github.com/Tracer-Cloud/opensre) and [n8n nod](https://github.com/n8n-io/nod) move agents from writing code to running systems and chores.
- **Skepticism checkpoint.** Audit "free frontier model" plugins and implausible star counts before adopting them. Security-offensive bundles like [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) and [ARTEX](https://github.com/BaaRai/ARTEX) should be used only on authorized targets.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
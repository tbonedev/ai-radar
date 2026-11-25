# AI Open Source Trends 2026-11-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-25 17:46 UTC

---

# AI Open Source Trends Report, 2026-11-26

**Data caveat:** The trending list reports total stars as 0, so I show "n/a" for totals there and give only today's gain. Several topic-search repos show tens of thousands of stars on projects that look days old, for example `dsh-our-free-model` at 87,012 and `cleanyourtv` at 60,965. Treat those totals as unverified, because they may be inflated or botted. I judged projects on their README descriptions instead.

## 1. Finds

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** generates agent-usable CLIs for existing software, and it has a hub for sharing them (CLI-Hub). It suits anyone who wants Claude Code or Codex to drive GUI-first or legacy tools without writing MCP servers by hand. It gained +1,094 today, but I can't tell from the description how well the generated CLIs work.
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** is an open-source agent for CI/CD reliability, meaning it investigates and triages pipeline failures. Platform and SRE teams who want to try agent-driven incident triage on their own infrastructure would use it. It is a narrower, more practical niche than the generic agent frameworks.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a zero-dependency C++23 CLI and MCP server. It lets coding agents locate code without reading the whole repo, and it reports blast radius and which tests to run. Anyone paying for agent tokens on large codebases would use it. It comes from Red Hat's emerging-tech group, which makes it more credible than most of this list.
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)** is a Go MCP server and CLI. It keeps a Git-versioned index of your code and database schema that agents read before editing. Teams whose agents keep forgetting architecture between sessions could use it for persistent, reviewable context.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** does "experience-driven black-box cost control for coding agents." It is aimed at people running Claude Code or Codex at scale who want lower spend without changing the agent. The README gives little detail, so check whether it is a research artifact or a usable tool.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** is a from-scratch recipe for training a 64M-parameter LLM in about two hours. It is for anyone who wants to learn pretraining and SFT end to end on cheap hardware. It is a teaching repo and won't produce a production model.

**Looks like hype or an empty shell:**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) promises unlimited free access to frontier models with no key. That is economically implausible, and it could be a proxy that harvests traffic. Audit it before installing.
- Several "Grok Bot alternative" repos have near-identical copy: [OpenMausBot](https://github.com/milind-soni/OpenMausBot), [rakazo](https://github.com/elie222/rakazo) and [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot). Treat them as a naming-trend cluster until proven otherwise.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+1,094) | Makes arbitrary software agent-native by generating CLIs, with a hub for sharing them. It is the clearest new idea on today's list. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,564 | A dependency-free CLI and MCP server that cuts agent token use by finding code without reading the repo. It also reports blast radius and tests to run. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 3,038 | A Git-versioned map of code and schema that agents consult before editing. It gives Claude Code, Codex, Cursor and opencode persistent context. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 8,109 | Black-box cost control for coding agents, driven by past experience. It is worth watching given rising agent bills. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 41,433 | A menu-bar app that routes each agent to a chosen model, such as Codex on DeepSeek or Claude Code on Kimi. It targets the mix-and-match model-routing workflow. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+188) | Intel's toolkit for optimizing and deploying inference. It is established, so today's gain is modest. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | n/a (+408) | The Cursor plugin specification plus official plugins. It signals plugin ecosystems becoming standardized across editors. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | n/a (+1,131) | Search, scrape and 550+ data providers behind one API for agents. It is a well-known project that gained +1,131 today. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | n/a (+343) | An open-source agent for CI/CD reliability and failure triage. Its vertical focus makes it more practical than most agent projects. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 3,477 | A personal agent with its own computer that handles invoices and trial cancellations on real sites. It asks before acting, and it comes from the n8n team. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,819 | Lets a team's coding agents talk to each other. It is an early multi-agent coordination layer. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 6,543 | Lets CLI agents pick up work in the background and follow it through. They only ping you with a card when a decision is needed. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,624 | Infrastructure for continually self-improving agents. The description is thin, so it needs a closer look. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 5,339 | Lets a vision model operate a real iPhone using a $7 ESP32, with AirPlay for eyes and USB HID for hands. It needs no jailbreak or Mac, which is a creative hardware approach. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,782 | Lets MCP agents operate an iPhone or Android phone with a human in the loop. It is a notable maintainer name in a growing "agent drives phone" category. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 9,976 | An on-device Android agent that operates apps and the web. It is one of several phone-agent projects trending together. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+950) | An agent skill that researches a topic across Reddit, X, YouTube, HN, Polymarket and the web, then writes a grounded summary. It is directly useful as a research tool. |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | n/a (+868) | A desktop tool that cuts long podcasts and courses into short videos with subtitles, covers and captions. It targets Douyin, TikTok and Reels creators. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,942 | A free AI office suite with a CLI and skill so agents can edit real .docx, .xlsx and .pptx files locally. Its pitch is agents editing genuine Office formats. |
| [XinaTian/MROffice](https://github.com/XinaTian/MROffice) | TypeScript | 4,536 | A browser-based office suite with an MCP server so Claude, ChatGPT and Cursor can edit documents. It competes directly with genoffice. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 9,389 | Turns a coding agent into a video agent, with editors to adjust the output. It is part of a wave of code-rendered video tools. |
| [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) | Python | 13,320 | Breaks videos down shot by shot into an open VIDEO.md format. It tells you whether each shot was filmed, AI-generated or coded, and how to remake it. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | n/a (+853) | A playbook of 124 App Store and Google Play rejection patterns, plus 114 tracked regulatory deadlines and an agent skill. It is a pragmatic niche. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+828) | Trains a 64M-parameter LLM from scratch in about two hours. It is a good learning resource for the full training pipeline. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 8,321 | An open-source book on quantitative LLM inference and training system design, with calculators and experiments. It is useful for capacity planning. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,667 | Claims to be the first open-source enterprise world model. The claim is bold and the description gives little detail, so verify it first. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 325 | Turns documents into a readable Markdown wiki that answers with citations. It reports 63% fewer LLM tokens, but that figure is self-reported. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 311 | A local-first ingestion engine with browser capture and layout-aware PDF, Office and OCR parsing. It builds verifiable data graphs for evidence-grounded context. |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,686 | A lightweight knowledge base for people and agents with fast indexing. Rust-based retrieval infrastructure is a pattern worth tracking. |
| [vstorm-co/agenticos](https://github.com/vstorm-co/agenticos) | Python | 871 | A self-hosted agent platform with RAG, MCP servers, budgets, approvals and audit trails, built on Pydantic AI. It is an enterprise-governance alternative to hosted offerings. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 300 | Builds governed knowledge graphs where each fact is traceable to its source evidence. It is a small project in the ontology-plus-RAG direction. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 808 | Ontology-augmented generation for agents. It is early and the description is brief. |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | TypeScript | n/a (+578) | An open-source knowledge base and Notion alternative. It is only loosely AI-related and well known. |

## 3. Trend Signal Analysis

**Skills are the dominant artifact.** The trending list is full of agent skill bundles: [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) (+1,644), [diagram-design](https://github.com/cathrynlavery/diagram-design) (+1,133), [last30days-skill](https://github.com/mvanhorn/last30days-skill), [stitch-skills](https://github.com/google-labs-code/stitch-skills) and [superpowers](https://github.com/obra/superpowers). The topic search shows the same pattern, with a long run of `agent-skills` repos for video, UI, geolocation and mobile design. Skills are becoming the unit of distribution, much like npm packages or dotfiles. They are cross-tool by design, with READMEs naming Claude Code, Codex, Cursor, Gemini CLI and Copilot together.

**Token cost is now a first-class concern.** [ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) and [magpie](https://github.com/yetone/magpie) all try to reduce or redirect spend. Persistent code context ([aoci-code](https://github.com/aoci-spec/aoci-code)) is part of the same story.

**New directions.** Phone-operating agents ([Mika](https://github.com/wangzan101/Mika), [pinky](https://github.com/DIYgod/pinky), [esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent)) have a cluster of entries. So do "agent-native software" ([CLI-Anything](https://github.com/HKUDS/CLI-Anything)) and code-rendered video. Rewrite-in-Rust skills ([rust-anything](https://github.com/erkamyaman/rust-anything), [fast-anything](https://github.com/EL4CTEO/fast-anything)) are also new.

**Ecosystem and industry.** DeepSeek-oriented harness plugins ("dsh-*") form a Chinese-language ecosystem of their own. Many repos name DeepSeek V4.x, Kimi K3 and Claude Opus 5.5 as the models they target. Some of the star counts here are probably artificial, so weight the trend signal by repo descriptions, not by totals.

## 4. Community Hot Spots

- **Agent skills as packages.** Look at [superpowers](https://github.com/obra/superpowers) and [last30days-skill](https://github.com/mvanhorn/last30days-skill) for conventions you can copy. The cross-tool Agent Skills standard in [stitch-skills](https://github.com/google-labs-code/stitch-skills) is the one to follow.
- **Context and token efficiency for coding agents.** [ripwire](https://github.com/redhat-et/ripwire) and [aoci-code](https://github.com/aoci-spec/aoci-code) address a real cost and quality problem. Benchmark them on your own repo.
- **Making existing software agent-callable.** [CLI-Anything](https://github.com/HKUDS/CLI-Anything) and [firecrawl](https://github.com/firecrawl/firecrawl) are two approaches to the same gap: agents need clean interfaces to the outside world.
- **Agents that edit real office documents.** [genoffice](https://github.com/genspark-ai/genoffice) and [MROffice](https://github.com/XinaTian/MROffice) compete here, and the winner is likely to set the tooling conventions.
- **Vertical ops agents.** [opensre](https://github.com/Tracer-Cloud/opensre) is a concrete place to try agents in CI/CD triage, with measurable outcomes.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
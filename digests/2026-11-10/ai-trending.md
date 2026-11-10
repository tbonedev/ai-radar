# AI Open Source Trends 2026-11-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-10 15:23 UTC

---

# AI Open Source Trends Report — 2026-11-10

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a zero-dependency C++23 CLI and MCP server that gives coding agents function signatures instead of full bodies, which it says uses 74.7% fewer bytes. It also reports blast radius and tests-to-run after a change. It suits anyone paying for tokens on large repos, and it comes from a credible Red Hat team. The "every guess labelled" claim is worth testing.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** is a single Go binary that keeps sessions from 43 coding agents on local disk. It supports shared memory and cross-agent handoff, for example moving from Claude Code to Codex mid-task. It suits people who switch between agents and lose context.
- **[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)** (+374 today) is a context-compression plugin for month-long sessions. It claims about 5x fewer tokens and says a 100K window is enough. It suits long-running agent users, but the claims are unverified, so benchmark them before trusting them.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series MacBooks, presumably by streaming MoE experts. It suits on-device inference tinkerers. Check the quality and speed trade-offs.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** does experience-driven, black-box cost control for coding agents. It suits teams with large agent bills who want savings without changing the model.
- **[yetone/magpie](https://github.com/yetone/magpie)** is a menu-bar app that routes any agent to any model, such as Codex on DeepSeek or Claude Code on Kimi. It suits people who want a single model switchboard for several CLIs.
- **Caution:** several topic-search entries look inflated or astroturfed. Examples are `Gathin23/cleanyourtv` with 55K stars for a TV debloater, and `Ebony-Vinyl/dsh-our-free-model` with 68K stars. Their repo ages are unknown, so treat the star counts as unreliable.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,536 | A CLI and MCP server that gives agents code signatures and impact analysis instead of whole files. It cuts context cost and comes from Red Hat. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+775) | A browser automation CLI built for AI agents. It gained 775 stars today, which shows demand for agent-native tooling. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 5,607 | Cuts coding-agent spend without touching the model. It is a practical answer to rising agent bills. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,893 | A Git-versioned codebase and schema map that agents read before editing, served through a local MCP server. It targets long-term code memory. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 33,766 | Menu-bar routing of any agent harness to any model. It is useful for mixing CLIs and providers. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 4,949 | Gives agents 42 local FFmpeg tools through an MCP server, with no cloud or API keys. It is a clean pattern for wrapping a mature CLI. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+1,676) | The official Agent Skills repository. It is well known, but its +1,676 today shows the skills format is still gaining adoption. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+1,223) | A personal `.agents` skills collection aimed at working engineers. It gained 1,223 stars today. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+465) | Production-grade engineering skills for coding agents. It is a curated, opinionated set. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,488 | Shared local memory and handoff across 43 coding agents. It addresses agent lock-in. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,713 | Lets a team's coding agents talk to each other. It is an early multi-agent coordination layer. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 4,404 | Lets CLI agents pick up and follow tasks in the background. It sends a decision card only when it is unsure. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,472 | A command center for agents across machines. Its scope is broad, so it needs verification. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | Python | 0 (+792) | An MCP server for configuring and automating Home Assistant from Claude or ChatGPT. It is a concrete, useful MCP use case. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,095 | A free AI office suite with a CLI and skill that lets agents edit real docx, xlsx and pptx files locally. It is bring-your-own-key. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 3,040 | A local-first conversational video editor with a multi-track timeline and Remotion rendering. |
| [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | Rust | 15,415 | A parametric CAD application in pure Rust that can be automated through MCP. It is a notable agent-driven CAD direction. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 8,022 | An on-device Android agent that operates apps. It is part of the growing phone-agent trend. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,798 | Controls a real iPhone with a $7 ESP32 using AirPlay for vision and USB HID for input. It is a clever hardware hack. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,327 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on a MacBook. It is an interesting memory-efficiency result for MoE. |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 3,752 | An open document-parsing model that claims SOTA accuracy, trained with an RSI loop. It is relevant for pipelines that ingest PDFs. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,798 | Infrastructure for continually self-improving agents. The claim is ambitious, so check what it actually delivers. |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | C++ | 0 (+453) | A physics simulator. It is established and is mainly relevant as robotics and RL infrastructure. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 943 | A self-hosted metasearch and grounding engine for agents, built on SearXNG, with a JSON API. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 262 | A single Rust binary that turns URLs, PDFs and Office files into clean Markdown or JSON. It offers Firecrawl-compatible APIs and an MCP server. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,624 | A multimodal parsing engine with an ontology-based knowledge layer. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 264 | Builds governed knowledge graphs from documents, with every fact traceable to its evidence. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 802 | Ontology-Augmented Generation for agents. It is early. |

## 3. Trend Signal Analysis

Skills are the strongest signal today. `anthropics/skills`, `mattpocock/skills` and `addyosmani/agent-skills` together gained more than 3,300 stars. The topic lists are full of domain skills for video, logo design, geolocation and writing. The SKILL.md format now works across Claude Code, Codex, Cursor and Gemini CLI, so it is becoming a portable packaging standard.

The second signal is token economics. `ripwire`, `TokenEconomizer`, `billion-context` and `kanzo` all pitch fewer tokens per task. As agent usage becomes continuous, cost and context management are replacing raw capability as the main concern.

Third, there is a lot of tooling for the layer around agents. This includes cross-agent memory and handoff (`deja-vu`), model routers (`magpie`), and monitors and approval surfaces (`coucou`). It suggests developers run several agent harnesses in parallel and want one control plane.

Fourth, "DSH" (DeepSeek Harness) plugins and bots form a visible cluster. The "Grok Bot alternative" repos (`OpenMausBot`, `rakazo`, `AnyModelBot`) show a similar copycat wave around one product. Several of these have implausible star counts, so I'd treat that cluster as partly inflated.

I can't tie these to specific model releases from the data alone. References to Gemma 4, DeepSeek V4.1, Kimi K3 and Opus 5.5 do indicate that tooling is following the latest models quickly.

## 4. Community Hot Spots

- **Agent context economy:** try [ripwire](https://github.com/redhat-et/ripwire) and [TokenEconomizer](https://github.com/microsoft/TokenEconomizer). Measurable token savings translate directly into lower cost.
- **Skills as the distribution format:** study [anthropics/skills](https://github.com/anthropics/skills) and [mattpocock/skills](https://github.com/mattpocock/skills), then package your own team's workflows. The format works across multiple agents.
- **Cross-agent interoperability:** [deja-vu](https://github.com/vshulcz/deja-vu) and [magpie](https://github.com/yetone/magpie) reduce lock-in to a single vendor's agent.
- **Agent-ready web and docs ingestion:** [pagesift](https://github.com/YOLOW92/pagesift), [RustXNG](https://github.com/sahenjp/RustXNG) and [agent-browser](https://github.com/vercel-labs/agent-browser) give agents grounded web access with small, self-hosted binaries.
- **Local inference on laptops:** [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) points to MoE models running in very little RAM. Verify the throughput claims before building on it.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
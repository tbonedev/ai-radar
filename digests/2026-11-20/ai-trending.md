# AI Open Source Trends 2026-11-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-20 15:53 UTC

---

# AI Open Source Trends Report, 2026-11-20

**Data caveat:** Trending-list entries come with no total star count, so I show "n/a" for them and give only today's gain. Several topic-search repos report implausibly high totals for what look like very new projects, such as 59,770 stars for a TV debloater tagged `claude-code` and 81,935 for a plugin that offers free model access. Treat those totals as unreliable, and possibly inflated, until you've checked the repos.

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that lets coding agents find code without reading the whole repo. It also reports blast radius and which tests to run. Use it if agent token bills on large codebases hurt. It comes from Red Hat's emerging-technologies group, so it is more credible than the average new repo.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: Black-box cost control for coding agents, learned from experience rather than from changes to the agent. It suits teams running Claude Code or Codex at volume who want lower spend without forking the agent. I can't tell from the description how well it works, so check the benchmarks.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)**: An MCP server for hardware debugging. It reads FST waveforms (VCD/FSDB are auto-converted) and a SystemVerilog netlist, then exposes 34 tools for driver analysis, X tracing and pass/fail waveform diffs. Chip verification engineers who want an LLM to help trace failures would use it. It is niche and concrete, and it has few stars (291).
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)**: A Go MCP server and CLI that keeps a Git-versioned index of your code and database schema for agents to read before editing. It is for people whose agents keep losing context across sessions. It overlaps with other code-index tools, so test it against what you already use.
- **[brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill)**: Turns a tutorial video into an installable agent skill by reading the screen rather than the transcript, and runs locally in Rust. It suits anyone who wants to capture a GUI workflow as a reusable skill. It is early (171 stars).
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)**: Claims a 2.78-trillion-parameter model running on one CPU in 8.24 GB of RAM, in portable C99. That figure is far below what the weights alone would need, so it looks like hype or heavy tricks such as streaming from disk or extreme quantization. Read the code and the throughput numbers before believing it.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,557 | A C++23 CLI and MCP server that finds code without reading the repo and reports blast radius and tests to run. It is a direct attack on agent token cost. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 7,824 | Experience-driven cost control for coding agents, treated as a black box. It addresses a pain point many teams share. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 39,475 | A menu-bar app that points each agent at a different model, such as Codex on DeepSeek or Claude Code on Kimi. It reflects the decoupling of agent harness from model, but the star count looks inflated. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | n/a (+1,226) | Search, scrape and 550+ data providers behind one API for agents. It is already well known, but it has strong momentum today. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+219) | Intel's toolkit for optimizing and deploying AI inference. It is established, with a modest gain today. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 291 | An MCP server that gives agents RTL waveform debugging, with 34 tools. A rare example of agents reaching into hardware verification. |
| [qybaihe/bla](https://github.com/qybaihe/bla) | TypeScript | 6,309 | A defensive MCP server and CLI that obfuscates JS/TS, Electron ASAR, WASM and other binaries against AI reverse-engineering agents. It treats AI reverse engineering as a threat model. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | n/a (+1,660) | A Claude Code skill bundle for bug hunting, with 82 skills, 15 slash commands and 681 report patterns. It is the largest gainer today, but it is dual-use, so use it only on authorized targets. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+888) | An agentic skills framework and development methodology. It is established and still gaining steadily. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+774) | Aims to make any software agent-native through generated CLIs, with a hub at clianything.cc. The idea is interesting, but how well it generalizes is unproven. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | n/a (+465) | An open-source agent for CI/CD reliability. It is a vertical ops agent, useful for platform teams. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 2,777 | A personal agent from n8n with its own computer that handles invoices, call prep and trial cancellations. It asks before acting and runs locally with your choice of model. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,574 | Lets any MCP agent drive an iPhone or Android phone with a human in the loop. It is from a well-known open-source author. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 5,151 | Lets a vision model operate a real iPhone using a $7 ESP32 for AirPlay capture and USB HID input. It needs no jailbreak and no Mac. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,661 | Infrastructure for continually self-improving agents. The description is vague, so check for substance. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | n/a (+983) | A desktop tool that cuts long videos into short clips with subtitles, covers and publish copy. It targets Douyin, TikTok and Shorts. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,683 | An open-source office suite with a built-in agent. Its CLI lets Claude Code, Codex and Cursor create real .docx/.xlsx/.pptx files locally. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 8,685 | 42 FFmpeg tools plus an MCP server for local video editing by coding agents. It needs no cloud or API keys. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+685) | An agent skill that researches a topic across Reddit, X, YouTube, HN and Polymarket and returns a grounded summary. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | n/a (+874) | A playbook and pre-submission check built on 117 documented rejection patterns, plus a skill for coding agents. It is useful to mobile developers beyond AI. |
| [brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill) | Rust | 171 | Converts tutorial videos into verified agent skills by reading the screen. It is small but novel. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 8,655 | Turns a coding agent into a video agent, with editors for changing its output. It is part of a wave of video-by-code tools. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+841) | Trains a 64M-parameter LLM from scratch in about two hours. It is a good learning resource, not a production model. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 12,492 | Claims 2.78T-parameter inference on one CPU in 8.24 GB of RAM, in portable C99. The claim is extraordinary, so verify it. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,473 | An Ollama-style local server for "decision models", with a CLI, desktop app and MCP server. It sits in a small ecosystem around TypeSafe's Jev model, so its reach is unclear. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 81 | Local LLMs that read and think while you type. It is early. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [RustXNG/RustXNG](https://github.com/RustXNG/RustXNG) | Rust | 992 | A self-hosted metasearch and grounding engine for agents, based on SearXNG and exposed as a JSON API. It gives agents search without a paid API. |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,564 | A lightweight knowledge base for people and agents, with fast indexing. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 306 | Turns documents into a readable Markdown wiki that answers with citations. It claims 63% fewer LLM tokens, which is the author's own benchmark. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 291 | A local-first ingestion engine that does HTTP/browser capture and layout-aware PDF/Office/OCR parsing. It feeds evidence-grounded context to agents. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 297 | Builds governed knowledge graphs from documents, with every fact traceable to its evidence. |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | TypeScript | n/a (+686) | An open-source knowledge base and Notion alternative. It is borderline AI and is trending as a general tool. |

## 3. Trend Signal Analysis

**Skills for coding agents dominate.** Of the 16 trending repos, roughly half are skill bundles or agent add-ons: Claude-BugHunter, superpowers, diagram-design, last30days-skill, stitch-skills and app-store-compliance. The topic search shows the same pattern, with `agent-skills` filled with niche packages for film styles, geolocation, ffmpeg and writing. The unit of distribution is shifting from frameworks to portable, domain-specific skill packs that run across Claude Code, Codex, Cursor and Gemini CLI. Google's stitch-skills explicitly cites the open Agent Skills standard, which suggests the format is becoming a de facto interoperability layer.

**Token cost is now a first-class concern.** ripwire, TokenEconomizer and kanzo ("10 to 60 tokens per agent reply") all target the cost of running agents at scale.

**MCP is moving into specialized domains**, such as hardware waveform debugging (wave-mcp), x64dbg and CAD (SolidCraft). It is also appearing on the defensive side, with BLA hardening code against AI reverse engineering.

**Agent-and-model decoupling** shows up in magpie, in codex-chatgpt-web, and in the several "DSH" (DeepSeek Harness) plugins and bridges. This points to an ecosystem forming around DeepSeek and Kimi models as drop-in backends for Western-style coding agents. The repeated "Grok Bot alternative" projects suggest a recent closed-product launch is driving clones.

**Caution:** Many topic results look star-inflated or promotional, so judge them by code and activity rather than totals.

## 4. Community Hot Spots

- **Agent token-cost tooling** ([ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer)): Spend is a real constraint, and both approaches can be measured on your own repos.
- **Portable skill packs** ([superpowers](https://github.com/obra/superpowers), [stitch-skills](https://github.com/google-labs-code/stitch-skills)): Follow the Agent Skills standard if you want skills that work across agents.
- **Domain-specific MCP servers** ([wave-mcp](https://github.com/Tencent/wave-mcp), [x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server)): Expert tools for specialized fields are an underserved area.
- **Phone-controlling agents** ([pinky](https://github.com/DIYgod/pinky), [esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent), [Mika](https://github.com/wangzan101/Mika)): Several independent approaches to letting an agent operate a real phone, worth comparing.
- **Offensive and defensive security with agents** ([Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter), [BLA](https://github.com/qybaihe/bla), [ARTEX](https://github.com/BaaRai/ARTEX)): Interest is rising on both sides. Use these tools only in authorized contexts.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
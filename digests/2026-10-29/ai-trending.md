# AI Open Source Trends 2026-10-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-29 13:54 UTC

---

# AI Open Source Trends Report, 2026-10-29

**Data caveat:** Trending-list entries show total stars as ⭐0, which is a data gap, so I show "n/a" for them. Several topic-search star counts on brand-new repos look implausible and are flagged below.

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**
  - It is a zero-dependency C++23 CLI and MCP server that gives coding agents a map of a repo: signatures instead of bodies (it claims 74.7% fewer bytes), plus blast radius and tests-to-run after a change.
  - Anyone whose agents burn context reading whole files would want it. It's from Red Hat's emerging-tech group, which counts in its favor.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**
  - A single Go binary that indexes the session history coding agents already leave on disk (Claude Code, Codex, Cursor and about 40 others). It offers local search, MCP and hooks, with no LLM involved.
  - It suits people who want cross-agent memory without a vendor service or an embedding pipeline.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)**
  - It runs Gemma 4 26B-A4B inference in about 2 GB of RAM on M-series MacBooks.
  - Local-inference people on Apple Silicon should check whether the memory claim holds. It's a concrete, falsifiable one, so benchmark it before relying on it.
- **[yetone/magpie](https://github.com/yetone/magpie)**
  - A Go menu-bar app that points any agent at any model, for example Codex on DeepSeek or Claude Code on Kimi.
  - It's useful if you want to keep a preferred agent harness but switch to a cheaper or different backend.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)**
  - An MCP server for RTL waveform debugging. It reads FST waveforms (VCD/FSDB are auto-converted) plus a SystemVerilog netlist, and exposes 34 tools for driver analysis, X-tracing and pass/fail waveform diffs.
  - Chip-verification engineers get a rare example of agents applied to hardware debug. It has only 256 stars, so it's under the radar.
- **[Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth)**
  - An agent skill that geolocates a photo using OpenStreetMap geometry, elevation skylines, satellite imagery and street view, and shows its reasoning.
  - OSINT people and anyone building multi-tool skills can use it as a worked example.

**Hype or empty-shell warnings**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) claims unlimited free frontier models with no key. At 50,393 stars it is the largest repo in the set, and the claim is hard to square with inference costs. Treat it as suspect, and the same owner's [EAC-Desktop](https://github.com/Ebony-Vinyl/EAC-Desktop) with it.
- [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) is a prompt dump with +1,610 stars today. I wouldn't spend time on it.
- [tbee6061-ctrl/studio-live-window-capture](https://github.com/tbee6061-ctrl/studio-live-window-capture) and [thyron922/OmniTag-Forge](https://github.com/thyron922/OmniTag-Forge) read like SEO-bait.
- The "Jev / TypeSafe System One" cluster ([ollaya](https://github.com/ollaya-dev/ollaya), [awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools), [awesome-jev-live](https://github.com/wh000wh000/awesome-jev-live)) looks coordinated, and I can't verify the underlying model.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,494 | A CLI and MCP server that gives coding agents compact code signatures, blast radius and tests-to-run. Its published byte-reduction figure (74.7%) is a measurable claim. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 25,203 | A menu-bar tool that routes any coding agent to any model backend. It decouples the agent harness from the model vendor. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,332 | It builds searchable agent memory from existing on-disk session history across 40+ tools. It needs no LLM and ships as one binary. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,795 | A Git-versioned map of the codebase and DB schema, served over MCP. Agents read it before editing. |
| [amontlabs/lcu](https://github.com/amontlabs/lcu) | JavaScript | 2,297 | It decouples Codex's computer-use capability from the Codex app so other harnesses can use it. It matters if you want GUI control outside OpenAI's client. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 256 | An MCP server with 34 tools for RTL waveform debug. It's a niche vertical, and a good one. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 3,802 | It wraps 42 FFmpeg tools with a machine-readable contract and an MCP server. Everything runs locally, with no API keys. |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | TypeScript | n/a (+1,116) | A lightweight IDE built around the `pi` agent that adapts to your workflow. The JetBrains backing makes it worth watching. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Rust | n/a (+2,881) | A design vocabulary for coding agents with commands such as polish, critique and audit, aimed at catching "AI slop". It's the biggest mover today. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+1,037) | An agentic skills framework and development methodology. It's already well known, and its momentum continues. |
| [nightly-labs/openbot](https://github.com/nightly-labs/openbot) | TypeScript | n/a (+705) | A local-first desktop workspace for persistent agents running Codex, Claude and Grok. It has task queues, browser control and agent-to-agent collaboration. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 7,817 (+240) | AI coworkers that each get their own browser, files and tools. Every action is gated before it runs and logged afterward, and any AG-UI agent plugs in. |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 7,107 (+1,190) | An open-source Grok Bot alternative with a VM the bots can use. Together with [elie222/rakazo](https://github.com/elie222/rakazo) (6,199), it shows a cluster forming around "open Grok Bot". |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 5,533 | It records your screen work and uses the Copilot SDK to turn it into a reusable Skill or Automation. This is a distinctive "demonstrate, then codify" approach. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | C | 4,084 | A $7 ESP32 acts as AirPlay eyes and USB HID hands so a vision model can operate a real iPhone. It needs no Mac and no jailbreak. |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | n/a (+538) | A Claude Code setup with 49 agents and 72 skills arranged in a studio hierarchy. It looks like a prompt pack, so judge it by the quality of its skills. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | n/a (+1,926) | A personalized lifelong tutoring system. It's the second-largest daily gainer. |
| [Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth) | Python | 4,488 | A photo-geolocation agent skill that combines map geometry, elevation and imagery. It shows its work. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,281 | An open-source office suite (Docs, Sheets, Slides, PDF) with a built-in agent and a CLI. Agents can create real .docx/.xlsx/.pptx files locally. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,394 | A local-first research workbench with MCP tools, Python/R execution and traceable artifacts. [ai4s-research/open-science](https://github.com/ai4s-research/open-science) (2,057) is a near-duplicate, so check which is the original. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 14,534 | A Remotion-based promo-video skill with 124 shot recipes and CapCut export. Its star count is high for a skill pack. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,184 | A social-media agent that finds trends, writes content and publishes to Xiaohongshu, Douyin, Bilibili and others. It also learns from performance. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,085 | Gemma 4 26B-A4B inference in about 2 GB of RAM on M-series Macs. If it holds up, MoE offloading on laptops gets much cheaper. |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 2,381 | An open document-parsing model that claims SOTA accuracy and speed, trained with an "RSI loop" in post-training. The claim needs independent verification. |
| [TheLastOxygen/mafdet](https://github.com/TheLastOxygen/mafdet) | Python | 74 | Local LLMs that read and think while you type. It's tiny and early, but the idea is interesting. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,615 | It bills itself as the "first open-source enterprise world model". It's a bold claim with little detail in the listing, so read the code first. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+324) | It captures agent sessions, compresses them with AI and injects relevant context into later sessions. It works across Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,374 | Long-term memory with plain Markdown as the source of truth and local ranked retrieval. It adds a sleep-time "Manage" layer, and Claude Code and Codex share one store. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 250 | It turns documents into a readable Markdown wiki that answers with citations. It reports 89% vs 62% correct note routing and 68% fewer tokens. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 635 | "Ontology-Augmented Generation" for agents, an alternative to plain vector RAG. |
| [ArihantDeva/heimdall](https://github.com/ArihantDeva/heimdall) | JavaScript | 136 | A CPU-only memory approach with ranked retrieval. It's deliberately minimal. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,507 | A multimodal parsing engine feeding an LLM-wiki knowledge layer. |

## 3. Trend Signal Analysis

**Agent memory and context is the clearest cluster.** [claude-mem](https://github.com/thedotmack/claude-mem), [agent-memory](https://github.com/tigerless-labs/agent-memory), [deja-vu](https://github.com/vshulcz/deja-vu), [aoci-code](https://github.com/aoci-spec/aoci-code), [ripwire](https://github.com/redhat-et/ripwire) and [heimdall](https://github.com/ArihantDeva/heimdall) all attack the same problem: agents forget between sessions and waste tokens re-reading code. The shared design choices are local-first storage, plain files, MCP exposure and no mandatory LLM.

**Skills are the packaging unit of the moment.** Roughly a fifth of the topic results are `agent-skills`, covering video, UI design, geolocation, Japanese editing and drama scripts. [impeccable](https://github.com/pbakaus/impeccable) and [anti-slop](https://github.com/miqdadbadjuber/anti-slop) address the reaction to generic AI output. Many of these repos are prompt collections rather than software, so expect uneven quality.

**Harness and model decoupling is new.** [magpie](https://github.com/yetone/magpie), [lcu](https://github.com/amontlabs/lcu) and [codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) separate the agent client from the model or the app. This fits the proliferation of cheaper models (DeepSeek, Kimi, Gemma 4) that users want inside Claude Code or Codex.

**"Open Grok Bot" clones** ([OpenMausBot](https://github.com/milind-soni/OpenMausBot), [rakazo](https://github.com/elie222/rakazo), [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)) suggest a recent product launch is being replicated with sandboxed per-agent computers.

**Treat the star counts with caution.** Several repos hold 10k–50k stars within days, which suggests star inflation or aggressive promotion. Judge them on their content.

## 4. Community Hot Spots

- **Local, MCP-based agent memory:** [deja-vu](https://github.com/vshulcz/deja-vu), [agent-memory](https://github.com/tigerless-labs/agent-memory) and [claude-mem](https://github.com/thedotmack/claude-mem) cover similar ground. Compare them before building your own.
- **Token-efficient codebase maps:** [ripwire](https://github.com/redhat-et/ripwire) and [aoci-code](https://github.com/aoci-spec/aoci-code) are worth testing on a large repo, measuring tokens saved.
- **Model-agnostic harness routing:** [magpie](https://github.com/yetone/magpie) is the one to try if you want cost control without switching agents.
- **Sandboxed "agent with its own computer" designs:** [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) stands out for its pre-action approval and post-action audit trail.
- **Agents in non-software domains:** [wave-mcp](https://github.com/Tencent/wave-mcp) (chip debug), [Konnect](https://github.com/mixelpixx/Konnect) (KiCAD PCB design with 217 tools) and [esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) (physical device control) show agents moving into hardware workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
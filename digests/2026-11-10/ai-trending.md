# AI Open Source Trends 2026-11-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-09 17:05 UTC

---

# AI Open Source Trends Report: 2026-11-10

Two caveats about the data:
- The trending list reports total stars as 0 (missing), so I show "n/a" for those totals.
- Several topic-search repos show very large star counts for projects that look new, such as a TV debloater at 55,293 and a plugin at 67,250. Treat those totals as unverified, because they may reflect star inflation or a data quirk.

## 1. Finds

- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)**: A Rust CLI that lets an AI agent drive a browser through shell commands. It suits anyone whose agent harness needs web automation without wiring up a full Playwright or MCP stack. It gained +914 stars today.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that gives coding agents function signatures instead of full bodies. It also reports blast radius and which tests to run after a change. The 74.7% byte reduction is the author's own claim, but the approach is concrete. It's worth a look if you pay for tokens on large repos.
- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)**: A long-term memory runtime that uses plain Markdown as the source of truth, with local ranked retrieval and no API key. Claude Code and Codex share one store. It's useful if you switch between agents and are tired of re-explaining your project.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: A "black-box" cost-control approach for coding agents that learns from past experience. It's aimed at teams whose agent bills are growing. The README summary is thin, so check for benchmarks before adopting it.
- **[brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill)**: A Rust tool that turns a tutorial video into an installable agent skill by reading the screen rather than the transcript. It runs locally under MIT. It's useful for capturing GUI-only workflows, but it has only 145 stars and the output quality is unproven.
- **[migsilva89/loadout](https://github.com/migsilva89/loadout)**: A Swift app that shows which skills, commands, subagents, plugins and MCP servers your coding assistants load, along with real usage. It helps if your agent setup has sprawled and you can't tell what is actually used.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | n/a (+914) | Browser automation CLI built for AI agents. A strong momentum signal, since agent tooling is moving to simple shell-callable interfaces. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,533 | CLI and MCP server that gives coding agents compact code signatures and change-impact checks. It claims 74.7% fewer bytes than sending full bodies. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 5,470 | Experience-driven cost control for coding agents. It addresses the growing cost of agent token spend. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 33,030 | A menu-bar tool that routes any agent to any model, for example Codex on DeepSeek or Claude Code on Kimi. It reflects demand for decoupling harnesses from model vendors. |
| [migsilva89/loadout](https://github.com/migsilva89/loadout) | Swift | 104 | Inspector for the skills, MCP servers and plugins your coding assistants load, with usage data. It's small but fills an observability gap. |
| [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | Python | n/a (+560) | Official starter projects for building deployable apps on the Claude API. Useful as reference code, though not new. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 2,810 | Native MCP plugin that exposes the x64dbg debugger to AI assistants for breakpoints, memory reads and stepping. It's a niche but practical tool for reverse engineers. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 19,449 (+1,589) | Open-source "Grok Bot" alternative that gives bots a virtual machine to use. It is the biggest mover in a visible cluster of similar clones. |
| [modelflare-ai/AnyModelBot](https://github.com/modelflare-ai/AnyModelBot) | Python | 2,742 | Another Grok Bot alternative, with 70+ models behind one paid key, reachable through WeChat and Feishu. It looks commercial, so read the pay-per-use model first. |
| [elie222/rakazo](https://github.com/elie222/rakazo) | TypeScript | 7,669 | Open-source Grok Bot alternative with your own choice of model and sandbox. It is a third entry in the same clone wave. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 10,552 | AI coworkers that each get their own computer, with every action decided before it happens and recorded after. It works with any AG-UI agent. |
| [garrytan/gbrain](https://github.com/garrytan/gbrain) | TypeScript | n/a (+215) | An opinionated "brain" for OpenClaw/Hermes agents. Interesting mostly as one prominent builder's personal setup. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 4,857 | A persistent dev workspace that improves itself and continues beyond one session. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 4,264 | Lets CLI agents pick up work in the background and only pings you with a card when a decision is needed. A good fit for async, human-in-the-loop work. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,748 | Controls a real iPhone with a $7 ESP32, using AirPlay for sight and USB HID for input. It needs no jailbreak or Mac, and any OpenAI-compatible vision model works. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | n/a (+505) | LLM-driven multi-market stock analysis with news, a decision dashboard and scheduled push alerts. It can run on free tiers. |
| [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | Python | n/a (+31) | MCP server that lets Claude, ChatGPT and other assistants configure and automate Home Assistant. Small today, but useful for smart-home users. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,018 | Free AI office suite with a CLI and skill so coding agents can create real .docx, .xlsx and .pptx files locally. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 3,020 | Local-first conversational video editor with a multi-track timeline, MCP integration and Remotion rendering. |
| [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | Rust | 15,227 | Parametric 3D CAD application in pure Rust, scriptable through MCP. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,537 | Social-media agent covering Xiaohongshu, Douyin, Zhihu and Bilibili. It handles trend discovery, content creation, publishing and feedback learning. |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | Rust | n/a (+245) | Claims to do spatial sensing, vital-sign monitoring and presence detection from commodity WiFi signals, with no video. The claims are ambitious, so verify before relying on them. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 3,717 | Open document-parsing model that claims state-of-the-art accuracy and speed, trained with an RSI loop in post-training. It's worth benchmarking against your current OCR or parsing stack. |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | C++ | n/a (+579) | General-purpose physics simulator with contact dynamics. It's an established tool, and its spike likely reflects robotics and RL interest. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,792 | Infrastructure for continually self-improving agents. The description is vague, so check the repo for concrete mechanisms. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 80 | Local LLMs that read and reason while you type. Very early. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,315 | Markdown-based long-term agent memory with local retrieval and a sleep-time manage layer. It is one store shared across Claude Code and Codex. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,463 | Memory and history layer across 43 agents, including Claude Code, Cursor, Codex and Gemini CLI, exposed as an MCP server. It's useful if you use several agents. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,885 | A Git-versioned map of your codebase and database schema that agents read before editing. It is local-first, with an MCP server and CLI. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 941 | Self-hosted SearXNG-based metasearch and grounding engine for agents, with a JSON API. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,618 | Multimodal parsing engine plus an LLM-wiki knowledge engine. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 257 | Builds governed knowledge graphs from documents, with every fact traceable to its evidence. |
| [calmrocks/ai-engineer-notebooks](https://github.com/calmrocks/ai-engineer-notebooks) | Jupyter Notebook | 742 | Framework-free Colab notebooks covering tool calling, RAG, evals, MCP, fine-tuning and prompt-injection security. They run on the free Groq API. |

## 3. Trend Signal Analysis

**Agent skills are everywhere.** About a dozen repos in the data are skills for Claude Code, Codex or Cursor. Examples include video, charts, logos, writing and geolocation. The official [anthropics/skills](https://github.com/anthropics/skills) gained +1,052 today. Skills are becoming the plugin format for coding agents, so some tools now manage them (loadout) or generate them (video-to-skill).

**Agent-agnostic infrastructure is the second theme.** Memory layers (agent-memory, deja-vu), codebase indexes (aoci-code, ripwire) and model routers (magpie) all sit between the agent and the model. They share one assumption: you will use several agents and several models, so context should not be locked to one vendor.

**A Grok Bot clone wave is running.** OpenMausBot (+1,589 today), AnyModelBot, rakazo and CopilotKit/OpenBot all pitch "open-source alternative with a VM or sandbox." That suggests a recent closed release set a template that the community is copying quickly.

**Possible coordinated promotion.** Many repos reference "dsh" (DeepSeek Harness), and a separate cluster promotes "Jev" and TypeSafe (awesome-jev-tools, awesome-jev-live, ollaya). Combined with the implausibly high star counts on young repos, some of this momentum may be inflated or promotional. Check commit history and issues before trusting it.

**New direction.** Agents are moving into physical and edge settings, such as an ESP32 that operates an iPhone, on-device Android agents and WiFi sensing. Cost and token efficiency are also becoming first-class concerns, as in TokenEconomizer and ripwire.

## 4. Community Hot Spots

- **Agent memory and context portability** ([agent-memory](https://github.com/tigerless-labs/agent-memory), [deja-vu](https://github.com/vshulcz/deja-vu), [aoci-code](https://github.com/aoci-spec/aoci-code)): Plain-file, shared stores are the emerging pattern, and they avoid lock-in to one agent.
- **Token-efficient code context** ([ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer)): Both address agent cost directly. They are worth benchmarking on your own repos.
- **Browser and computer-use CLIs** ([agent-browser](https://github.com/vercel-labs/agent-browser), [OpenMausBot](https://github.com/milind-soni/OpenMausBot)): Agent actuation through simple CLIs and VMs is where today's star momentum concentrates.
- **Skills tooling** ([loadout](https://github.com/migsilva89/loadout), [video-to-skill](https://github.com/brenoepics/video-to-skill), [anthropics/skills](https://github.com/anthropics/skills)): Skill discovery, auditing and generation are the next layer to mature.
- **MCP for specialist software** ([x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server), [ha-mcp](https://github.com/homeassistant-ai/ha-mcp), [solidcraft](https://github.com/tangency-labs/solidcraft)): Wrapping debuggers, home automation and CAD behind MCP is an easy way to extend an agent into a new domain.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
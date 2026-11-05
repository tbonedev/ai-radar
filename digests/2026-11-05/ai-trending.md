# AI Open Source Trends 2026-11-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-05 15:07 UTC

---

# AI Open Source Trends Report, 2026-11-05

**A caveat on the data.** Trending entries have no total star count (the feed shows ⭐0), so I show "n/a" for those and give only today's gain. Many topic-search star totals look implausible. Examples are a TV debloater at 52k and a free-model plugin at 62k, both created recently. Treat topic-search star counts as unverified, and as likely star-farming where a repo's description reads like marketing.

## 1. Finds

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)**: A Python framework that builds a semantic, graph-based reasoning layer over your data, so LLM and agent workflows can generate queries deterministically and retrieve context more reliably. It suits anyone whose text-to-SQL or RAG agents hallucinate over structured data. It is the biggest mover today at +2,707, and NVIDIA's name explains part of that. Check the repo for real examples before committing.
- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)**: A Rust CLI that lets AI agents operate a desktop (computer use) through shell commands. It is useful if you want computer-use in your own agent loop without a vendor-specific SDK. Its sibling [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) does the same for browsers.
- **[max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)**: A Rust CLI for managing Git worktrees, aimed at running several coding agents in parallel without branch collisions. It is for anyone already running multiple Claude Code or Codex sessions on one repo. The problem is real and narrow, and it needs no AI service to work.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI plus MCP server that gives coding agents code signatures instead of full function bodies. It also reports blast radius and which tests to run. It claims 74.7% fewer bytes than reading bodies, which is worth testing on your own repo if token cost matters. That is a self-reported figure.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: A Python project for "experience-driven black-box cost control for coding agents". Coding-agent bills are now a real line item, so this is worth reading even if the approach is research-grade. The README is thin on detail here, so treat it as an early signal.
- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)**: A long-term memory runtime for agents that keeps plain Markdown as the source of truth. It uses local ranked retrieval and a background "sleep-time" layer to reorganize memories. Claude Code and Codex can share one store, with no API key. It suits people tired of re-explaining context to each agent. [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) covers similar ground across 44 agents.

**Likely hype or promotion.** Treat these with caution:

- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) claims unlimited free frontier models with no key. It is hard to see how that is sustainable, and it is a plausible credential or traffic risk.
- The "Jev / TypeSafe System One" repos ([v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools), [wh000wh000/awesome-jev-live](https://github.com/wh000wh000/awesome-jev-live), [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya), [jev-chat/jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis)) look like a coordinated promotional cluster.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | n/a (+2,173) | Computer-use CLI that lets AI agents control a desktop. Second-largest agent-tooling gain today. |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Rust | n/a (+546) | CLI for Git worktree management built for parallel agent workflows. Solves isolation when running several agents on one repo. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | n/a (+181) | Browser automation CLI for AI agents. Pairs with agent-desktop as a shell-first interface. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,524 | Zero-dependency CLI and MCP server giving coding agents signatures, blast radius and tests-to-run. Claims 74.7% fewer bytes than reading bodies. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 30,329 | Menu-bar tool to run one agent on another's model, such as Codex on DeepSeek or Claude Code on Kimi. Reflects demand for model-agnostic harnesses. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 4,821 | Black-box cost control for coding agents, driven by past experience. Targets the token-spend problem. |
| [migsilva89/loadout](https://github.com/migsilva89/loadout) | Swift | 103 | Shows and manages the skills, commands, subagents, plugins and MCP servers your coding assistants load, with real usage data. Small, but it addresses config sprawl. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 6,973 | Mac notch and iPhone app that monitors coding agents and lets you approve actions remotely. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | n/a (+2,053) | A working engineer's personal `.agents` skills directory, published as-is. Its popularity says a lot about interest in practical, opinionated skill sets. |
| [garrytan/gstack](https://github.com/garrytan/gstack) | TypeScript | n/a (+608) | Garry Tan's Claude Code setup, packaged as 23 role-based tools (CEO, designer, QA and others). Popular mainly for who built it, so judge the content yourself. |
| [google/skills](https://github.com/google/skills) | Python | n/a (+199) | Agent Skills for Google products and technologies. A first-party skills catalog is a notable signal. |
| [scenario-labs/skills](https://github.com/scenario-labs/skills) | Python | n/a (+674) | Skills for generating images, video, audio and 3D through the Scenario MCP. It prices a job before spending and keeps characters consistent. Also includes agent teams for Blender, Maya, Unreal and Unity. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,523 | Lets a team's coding agents talk to each other. Early multi-agent coordination for dev teams. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,427 | A command center for coding agents across machines, with ambitions beyond code (CAD, circuits, robots, music). Broad claims, so verify. |
| [emanuele-em/kanzo](https://github.com/emanuele-em/kanzo) | Rust | 1,025 | Self-hosted kanban for humans and agents as a single 4.5 MB binary. Claims 10 to 60 tokens per agent reply. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,800 | Infrastructure for continually self-improving agents. Short description, so evaluate the code. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Usagi-org/ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor) | Python | n/a (+242) | Playwright and AI system for monitoring and analysing Xianyu (Goofish) listings, with an admin UI. A concrete vertical use of browser agents. |
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Python | n/a (+214) | Microsoft's open-source frontier voice AI. A rare voice entry in an agent-heavy list. |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | Python | n/a (+1,661) | Web scraping framework covering single requests to full crawls. Its place here is likely driven by agent data-collection use. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 4,582 | Local video editor for coding agents, with 42 FFmpeg tools and an MCP server. No cloud, no API keys. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,775 | Open-source office suite (docs, sheets, slides, PDF) with a built-in agent and a CLI so coding agents can edit real .docx/.xlsx/.pptx files. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 5,694 | Records your on-screen work and uses the Copilot SDK to turn it into a reusable skill or automation. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 7,001 | On-device Android agent that operates apps and the web for you. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,430 | Lets a vision model drive a real iPhone using a $7 ESP32 for AirPlay capture and USB HID input. No jailbreak needed. A clever hardware hack. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,679 | Billed as the first open-source enterprise world model. The claim is large and the description is short, so verify it. |
| [calmrocks/ai-engineer-notebooks](https://github.com/calmrocks/ai-engineer-notebooks) | Jupyter Notebook | 737 | Framework-free Colab notebooks covering tool calling, RAG, evals, agents, LoRA fine-tuning and security. Runs on the free Groq API. A practical learning resource. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | n/a (+2,707) | Graph-based semantic layer for deterministic query generation and explainable retrieval. Today's top gainer. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,307 | Markdown-first long-term memory with local ranked retrieval and a sleep-time consolidation layer. Shared across Claude Code and Codex. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,412 | Memory and history search across 44 coding agents, exposed as an MCP memory server. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,860 | Git-versioned map of your codebase and DB schema that agents read before editing. Local-first MCP server. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,583 | Multimodal parsing engine plus an ontology-driven, LLM-wiki knowledge engine. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 776 | Ontology-Augmented Generation for agents, close in idea to auto-ontology. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 255 | Turns documents into a cited Markdown wiki and works with any provider, Ollama included. Claims 89% routing accuracy against 62% for the baseline (self-reported). |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 4,230 | Local-first workspace search built for both humans and agents. |

## 3. Trend Signal Analysis

**Skills and agent tooling dominate.** Four of the top nine trending repos are skills collections (mattpocock, google, scenario-labs, ConardLi) or agent CLIs. The "agent-skills" topic list is full of single-purpose skills: logo design, de-AI writing, charts and geolocation. Skills have become the default packaging format for agent capabilities, much as npm packages were for JavaScript. Even Google and Microsoft now publish catalogs.

**Shell-first agent interfaces.** Vercel Labs' agent-desktop and agent-browser, plus worktrunk, treat the agent as a CLI user. The tooling is written in Rust, which signals that people want fast, single-binary tools that agents call directly.

**Ontology and deterministic retrieval.** auto-ontology, carrel and jonex all pitch ontology- or graph-grounded retrieval. This may be the new angle on RAG. Today's data cannot say whether it works.

**Context and cost economics.** ripwire, TokenEconomizer, agent-memory and deja-vu all target token spend and context continuity. With multiple agents running at once, memory and cost are now the pain points.

**Model-agnostic harnesses.** magpie, and several repos referring to "DSH" (DeepSeek Harness), reflect users mixing Claude Code or Codex front-ends with cheaper models like DeepSeek and Kimi. Some mentions of "Grok Bot alternatives" and Opus 5.5 show the ecosystem tracking recent releases closely. Much of the DSH plugin cluster looks like inflated or promotional activity, so be selective.

## 4. Community Hot Spots

- **Skills as a distribution format.** Browse [mattpocock/skills](https://github.com/mattpocock/skills) and [google/skills](https://github.com/google/skills) to see what a well-structured skills repo looks like before writing your own.
- **Parallel-agent hygiene.** Try [worktrunk](https://github.com/max-sixty/worktrunk) if you run more than one agent per repo. Pair it with [coucou](https://github.com/Louis-CFM/coucou) for approvals away from the desk.
- **Token-efficient code context.** Benchmark [ripwire](https://github.com/redhat-et/ripwire) and [aoci-code](https://github.com/aoci-spec/aoci-code) against your current repo-reading approach. Measure real token savings rather than trusting the claims.
- **Cross-agent memory.** Compare [agent-memory](https://github.com/tigerless-labs/agent-memory) and [deja-vu](https://github.com/vshulcz/deja-vu) if you switch between Claude Code, Codex and Cursor.
- **Computer-use via CLI.** Evaluate [agent-desktop](https://github.com/vercel-labs/agent-desktop) and [agent-browser](https://github.com/vercel-labs/agent-browser) as lightweight alternatives to SDK-bound computer-use, and note the security implications of giving agents desktop control.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
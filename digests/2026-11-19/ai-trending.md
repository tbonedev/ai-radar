# AI Open Source Trends 2026-11-19

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-18 16:07 UTC

---

# AI Open Source Trends Report, 2026-11-19

**Data caveats:**
- The trending list reports total stars as 0, so I show those totals as "n/a" and only give today's gain.
- Several topic-search repos show very large star totals that don't fit their apparent age or substance. Examples are `cleanyourtv` at 59,242 and `dsh-our-free-model` at 79,624. Treat those totals as unverified, and possibly inflated.

---

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that lets coding agents locate code, estimate the blast radius of a change, and pick which tests to run without reading the whole repo. It suits anyone paying for agent tokens on a large monorepo, and it comes from a Red Hat team. That makes it more credible than most single-author tools.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: Experience-driven, black-box cost control for coding agents, meaning it cuts spend without touching the agent's internals. It's worth a look for teams running Claude Code or Codex-style agents at volume. The data doesn't say how much it saves, so check for benchmarks before adopting it.
- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)**: A multi-tier framework that scores agent skills and plugins with quality gates, semantic-overlap detection, synthetic eval datasets and live agent runs. Skill libraries are multiplying fast (see below) and almost none are tested. Anyone publishing or curating skills should look at this.
- **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)**: A multi-agent framework for automated AI research paper writing, with +1,529 stars today. Researchers and agent-pipeline builders can use it as a reference design for long-horizon, multi-role document generation.
- **[yetone/magpie](https://github.com/yetone/magpie)**: A menu-bar tool that routes any coding agent to any model, for example Codex on DeepSeek or Claude Code on Kimi. It suits people who like one agent's UX but want a cheaper or different backend. The star count (38,569) is unverified.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)**: A portable C99 implementation that claims to run the 2.78T-parameter Kimi K3 on one CPU in 8.24 GB of RAM, with no BLAS or GPU. It's worth reading as a learning artifact. Treat the claim skeptically until someone reproduces it, because that memory figure implies very aggressive streaming or quantization.

**Looks like hype or an empty shell:**
- `dsh-our-free-model` promises unlimited free frontier models with no login. That is a red flag, and you should audit it before installing.
- `AutoLabel-Forge`, `OmniTag-Forge` and `studio-live-window-capture` have SEO-style "2026" titles and read like spam.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,552 | A "ripgrep for AI context" CLI and MCP server that finds code without reading the repo and reports blast radius and tests to run. It targets agent token costs directly. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 38,569 | Menu-bar router that pairs any coding agent with any model backend. It reflects demand for decoupling agent UX from model vendor. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 7,632 | Black-box, experience-driven cost control for coding agents. It addresses the growing token-bill problem, but no savings figures are given. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,776 | Uses ChatGPT Web (including Pro) as a native model inside Codex, with tools, streaming and images. It sidesteps Codex quota, which may conflict with provider terms. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+384) | Aims to make arbitrary software agent-native via CLIs, with a "CLI-Hub" registry. It's a bet that CLIs, not GUIs, are the agent interface. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | n/a (+315) | The Cursor plugin specification plus official plugins. It's the reference for building against Cursor's extension model. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 289 | An MCP server for RTL waveform debug with 34 tools, including driver analysis, X tracing and waveform diff. A rare hardware-verification use of agents. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 2,841 | A single-binary x64dbg plugin that exposes the debugger (breakpoints, memory, registers) to any MCP client. Useful for AI-assisted reverse engineering. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | n/a (+2,322) | A Claude Code bundle with 82 skills, 15 slash commands and 681 report-derived patterns across 24 vulnerability classes. It had the biggest one-day gain on the list, so audit it before use. |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | n/a (+1,529) | A multi-agent framework that automates writing AI research papers. It comes from Google Research, so it is credible as a design reference. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | n/a (+1,109) | A harness-optimization layer of skills, memory, security and research-first workflows across Claude Code, Codex, OpenCode and Cursor. It's a cross-agent config bundle. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+1,062) | An agent skill that researches a topic across Reddit, X, YouTube, HN, Polymarket and the web, then writes a grounded summary. It's practical and installs easily. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+823) | An agentic skills framework and development methodology. It's the established reference for the skills pattern. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | n/a (+369) | Agent Skills for the Stitch MCP server, compatible with Gemini CLI, Claude Code and Cursor. It shows major vendors converging on the Agent Skills standard. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 2,453 | A personal agent with its own computer that handles invoices, call prep and trial cancellations on real sites, and asks before acting. It runs locally with your choice of model. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 5,888 | Lets CLI agents pick up work in the background and only pings you with a decision card when unsure. It's a human-in-the-loop pattern for long-running agents. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,785 | A network that lets a team's coding agents talk to each other. It's early-stage multi-agent coordination. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,588 | A free, open-source AI office suite with a CLI and skill so agents can create real .docx, .xlsx and .pptx files locally. It's bring-your-own-key. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 8,272 | An open-source video agent that turns any coding agent into a video producer, with editors to adjust the output. |
| [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) | Python | 10,603 | Reverse-engineers videos shot by shot, labelling each as filmed, AI-generated or coded, with remake guidance in a VIDEO.md format. A novel, concrete niche. |
| [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) | JavaScript | 18,236 | 99 film styles made entirely in code by Claude Opus 5.5, with no video model. It's a creative-coding showcase. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 5,849 | Records your on-screen work and uses the GitHub Copilot SDK to turn it into a reusable Skill or Automation. It automates skill authoring by demonstration. |
| [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | Rust | 17,061 | A parametric 3D CAD app in pure Rust, scriptable through MCP. It brings agents to CAD. |
| [Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth) | Python | 7,239 | An agent skill that geolocates photos using OpenStreetMap, elevation skylines, satellite imagery and street view, and shows its reasoning. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 12,334 | Claims CPU-only inference of a 2.78T-parameter Kimi K3 in 8.24 GB of RAM, in portable C99. It's an interesting educational read, but the claim is unverified. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,733 | Billed as the "first open-source enterprise world model". The description is thin on specifics, so check the code before trusting the claim. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+18) | Intel's mature toolkit for optimizing and deploying inference. It's established and only a minor mover today. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,841 | Infrastructure for continually self-improving agents. It's a research-flavoured take on agent learning loops. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,448 | A lightweight knowledge base for people and agents, with fast indexing and precise retrieval. |
| [memoket/memoket-kite](https://github.com/memoket/memoket-kite) | Python | 235 | A vector-free long-term memory engine for agents that claims SOTA on LoCoMo and LongMemEval with less context. It's small, and its benchmark claims need independent checking. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 2,013 | A Git-versioned, local-first map of a codebase and database schema, served over MCP, that agents read before editing. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 305 | Turns documents into a readable Markdown wiki that answers with citations. It claims 63% fewer LLM tokens and works with Ollama. |
| [slow-stack/mneme](https://github.com/slow-stack/mneme) | JavaScript | 240 | Long-term agent memory stored as readable local files and consolidated between sessions. It runs as a plugin or over MCP. |
| [RustXNG/RustXNG](https://github.com/RustXNG/RustXNG) | Rust | 982 | A self-hosted metasearch and grounding engine for agents, based on SearXNG, with a JSON API and optional page text. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 292 | Builds governed knowledge graphs in which every fact is traceable to its evidence. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 280 | A local-first ingestion engine with layout-aware PDF, Office and OCR parsing and evidence-grounded context. |

---

## 3. Trend Signal Analysis

**Skills and harness bundles are drawing the most attention.** Five of the top gainers are Claude Code or Codex skill packs and harness layers: Claude-BugHunter, ECC, last30days-skill, superpowers and stitch-skills. The topic search shows the same pattern with dozens of niche skills for logos, UI, video, geolocation and writing. Google's Stitch skills and Microsoft's skill-recorder suggest the Agent Skills format is becoming a cross-vendor standard.

**Two things are new.**
- **Quality control for skills.** NVIDIA's SkillEvaluator tests skills for overlap and measures their effect on agent behavior. Once skills proliferate, evaluating and de-duplicating them becomes its own tooling layer.
- **Token economics.** ripwire, TokenEconomizer and memoket-kite all attack context cost, either by retrieving less or by remembering more cheaply. The drivers are token cost and context limits, and agent bills are the visible symptom.

**Model-routing and model-agnostic tools keep rising.** magpie and codex-chatgpt-web decouple agent front-ends from model backends. This fits a market where several models, including DeepSeek and Kimi variants, are competitive and cheap. The popularity of the Kimi K3 CPU port points the same way.

**Treat the topic-search numbers carefully.** Several star totals look inflated or promotional, and some entries are keyword-stuffed.

---

## 4. Community Hot Spots

- **Agent skill evaluation and testing** ([NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)): Skill supply is exploding and verification tooling is nearly absent. This is a good area to contribute to or build in.
- **Token-efficient code context for agents** ([ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer)): Retrieval and indexing designed for agents, not humans, is becoming its own category, and costs are what drive it.
- **MCP bridges to professional tools** ([x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server), [wave-mcp](https://github.com/Tencent/wave-mcp), [solidcraft](https://github.com/tangency-labs/solidcraft)): Debuggers, RTL waveforms and CAD are being opened to agents. Vertical MCP servers are an open field.
- **Agent-driven creative production** ([openfilm](https://github.com/openfilm/openfilm), [rea-video](https://github.com/JuneYaooo/rea-video), [genoffice](https://github.com/genspark-ai/genoffice)): Coding agents are being turned into video and office-document producers using code rather than generative media models.
- **Security-focused agent bundles** ([Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)): It had the biggest one-day gain and is dual-use. Review the skills before running them against any target you don't own.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
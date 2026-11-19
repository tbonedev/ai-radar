# AI Open Source Trends 2026-11-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-19 16:15 UTC

---

# AI Open Source Trends Report, 2026-11-20

**Data caveats.**
- Trending entries show total stars as ⭐0. That means the total is unknown, so the tables show "n/a" for those and give only today's gain.
- Several topic-search star counts look implausible. Examples are a Google TV debloater at 59,525 and a plugin at 80,831 for a repo created in the last week. I'm treating those as unverified, possibly botted or inflated, and not as a popularity signal.

---

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that helps coding agents locate code without reading the whole repo. It also reports blast radius and which tests to run. It's useful if agent token spend on large codebases is your pain point. It comes from Red Hat's emerging-tech group, so it's more than a weekend script, but the efficiency claims are not independently verified.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: A "black-box" cost controller for coding agents that learns from past runs to cut token usage, with no changes to the agent itself. It suits teams with real Claude Code or Codex bills. It's a research-flavored project from Microsoft, so expect rough edges.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)**: An MCP server that lets an agent read RTL waveforms (FST, with VCD/FSDB auto-converted) plus a SystemVerilog netlist. Its 34 tools cover driver tracing, X-propagation, pass/fail waveform diffs and static analysis. Chip-verification engineers can use it to hand waveform debugging to an LLM. It's niche, but it's a concrete and unusual use of MCP.
- **[brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill)**: A Rust tool that watches a tutorial video, reading the screen and not the transcript, and produces an installable agent skill. It runs locally. Anyone who wants to turn "how to do X in app Y" videos into reusable skills can use it. It's early (165 stars), so quality is unproven.
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)**: A Go MCP server and CLI that keeps a Git-versioned index of your code and database schema for agents to read before editing. It's for people who want persistent, auditable repo context rather than re-exploration each session. It's a crowded space, so look at how it handles staleness.
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)**: A research skill that searches Reddit, X, YouTube, HN, Polymarket and the web, then writes a grounded summary of the last 30 days. It's a quick way to see what is currently said about a tool or topic. At +952 today it is clearly resonating, but it is mainly a packaged workflow.

**Treat with skepticism:** [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) claims a 2.78T-parameter model running on one CPU in 8.24 GB of RAM. That is only plausible with extreme quantization or disk streaming, so check the throughput before getting excited.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,555 | A ripgrep-style CLI and MCP server that lets agents find code without reading the repo. It adds blast-radius and tests-to-run hints to cut token cost. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 7,751 | Experience-driven cost control for coding agents, treating the agent as a black box. It is a rare tool aimed at spend, not capability. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+246) | Intel's toolkit for optimizing and deploying inference. It is established, but it is trending today. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | n/a (+795) | Search, scrape and 550+ data providers behind one API for agents. It is already well known; the gain shows demand for agent data plumbing. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 2,583 | A Git-versioned code and schema map served over MCP, giving agents long-term repo context. It targets Claude Code, Codex, Cursor and opencode. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 289 | An MCP server for RTL waveform debug with 34 tools covering driver analysis and X tracing. It is a niche hardware-verification use case. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 39,029 | A menu-bar app that routes any agent to any model, such as Codex on DeepSeek or Claude Code on Kimi. The star count is unverified. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | n/a (+383) | The Cursor plugin specification and official plugins. It is worth watching as plugin formats converge. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+2,029) | An agentic skills framework and development methodology. It has the biggest gain today, but it is already widely known. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | n/a (+1,353) | A bundle of 82 skills, 15 slash commands and 681 disclosed-report patterns for bug hunting and red-team work. Use it only on systems you are authorized to test. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+952) | A multi-source research skill that writes a grounded 30-day summary. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+899) | Aims to make any software agent-native through CLIs, with a CLI-Hub registry. It is an ambitious claim, so test coverage matters. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | n/a (+303) | Agent Skills for the Stitch MCP server, following the open Agent Skills standard. They work across Gemini CLI, Claude Code and Cursor. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | n/a (+542) | 117 documented App Store and Google Play rejection patterns, with a skill for coding agents. It also tracks 95 regulatory deadlines. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | n/a (+25) | An open-source agent for CI/CD reliability. It is small today but practical. |
| [brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill) | Rust | 165 | Converts tutorial videos into verified agent skills by reading the screen. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,728 | Infrastructure for continually self-improving agents. The description is vague, so read the code first. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | n/a (+110) | A desktop tool that cuts long videos into shorts with subtitles, covers and captions. It targets Douyin, TikTok and Reels. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | n/a (+332) | 45 diagram types as self-contained HTML and SVG, as a skill for many coding agents. It is an alternative to Mermaid output. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,644 | An open-source AI office suite with a CLI so agents can create real .docx, .xlsx and .pptx files locally. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 2,613 | A personal agent with its own computer that handles invoices and call prep, and asks before acting. It comes from the n8n team. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 8,486 | An AI video agent that turns a coding agent into a video agent, with editors for the output. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 8,208 | 42 FFmpeg tools with an MCP server for local video editing by agents. It needs no cloud or API keys. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 9,160 | An on-device Android agent that operates apps and the web. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,525 | Lets MCP agents drive an iPhone or Android phone with the user in the loop. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+301) | Trains a 64M-parameter LLM from scratch in about two hours. It is a good learning resource for the full pretraining pipeline. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 12,449 | Claims 2.78T-parameter inference on a CPU in 8.24 GB of RAM, in portable C99. The claim is extraordinary and needs verification. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 81 | Local LLMs that read and reason while you type. It is tiny and early. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,514 | A lightweight knowledge base for people and agents, with fast indexing and precise retrieval. |
| [RustXNG/RustXNG](https://github.com/RustXNG/RustXNG) | Rust | 985 | A self-hosted SearXNG-based metasearch and grounding engine for agents, with a JSON API and optional page text. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 284 | A local-first ingestion engine with layout-aware PDF, Office and OCR parsing and evidence-grounded context. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 306 | Turns documents into a readable Markdown wiki that answers with citations. It works with Ollama. The benchmark claims (99.5% vs 79%) are self-reported. |
| [slow-stack/mneme](https://github.com/slow-stack/mneme) | JavaScript | 242 | Long-term agent memory stored as readable local files and consolidated between sessions. It runs as a plugin or over MCP. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 294 | Builds knowledge graphs from documents, with every fact traceable to its evidence. |

---

## 3. Trend Signal Analysis

**Skills are the hottest category.** Six of the top trending repos are agent skills or skill bundles: superpowers, Claude-BugHunter, last30days, stitch-skills, diagram-design and app-store-compliance. The pattern is domain expertise packaged as markdown and scripts for Claude Code, Codex, Cursor and Gemini CLI. Skills have become the shared plugin format across agents. Cursor's official plugin specification and Google's use of the Agent Skills standard point the same way.

**Token and context economics is a new angle.** ripwire, TokenEconomizer and aoci-code all treat agent cost and repo context as the problem to solve, not model quality. This reads as a reaction to real agent bills at scale.

**MCP is spreading into niche professional domains.** Examples are RTL waveform debugging (wave-mcp), debuggers (x64dbg-mcp-server), CAD (solidcraft) and phones (pinky, the ESP32 iPhone agent). Agents are being given hands in specialist tools.

**Model-agnostic routing and "harness" ecosystems.** Magpie and a cluster of "dsh" / DeepSeek Harness plugins and bridges show an emerging third-party ecosystem around DeepSeek and Kimi models. Several of those repos have implausible star counts and look promotional, so I would not treat them as a real adoption signal yet.

**Open "bot" clones.** Multiple "open-source Grok Bot alternative" repos appeared at once (OpenMausBot, rakazo, AnyModelBot, CopilotKit/OpenBot). That suggests a recent closed product launch is being cloned quickly.

---

## 4. Community Hot Spots

- **Agent cost and context tooling** ([ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer), [aoci-code](https://github.com/aoci-spec/aoci-code)): This directly cuts spend and is easy to trial on your own repo.
- **Skill authoring pipelines** ([video-to-skill](https://github.com/brenoepics/video-to-skill), [skill-recorder](https://github.com/microsoft/skill-recorder)): Both generate skills from recorded work. Whether the output is reliable decides if skills scale beyond hand-written ones.
- **Domain-specific MCP servers** ([wave-mcp](https://github.com/Tencent/wave-mcp), [x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server)): Specialist engineers can automate expert workflows here, and the field has little competition.
- **Agent-native CLI wrappers** ([CLI-Anything](https://github.com/HKUDS/CLI-Anything)): If it works, it gives agents a uniform interface to arbitrary software. Check how well the generated CLIs actually hold up.
- **Learning to train small LLMs** ([minimind](https://github.com/jingyaogong/minimind)): A practical end-to-end pretraining walkthrough at hobbyist scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
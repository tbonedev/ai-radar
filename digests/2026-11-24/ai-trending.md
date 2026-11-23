# AI Open Source Trends 2026-11-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-23 18:56 UTC

---

# AI Open Source Trends Report, 2026-11-24

**Data caveat:** The trending list reports total stars as 0 for every repo, so only the "today" figure is meaningful there. Several topic-search repos show very large star totals that don't fit their descriptions. Examples are an Android TV debloater at 60,535 and a plugin repo at 84,976. These look inflated or star-farmed, so treat star counts as weak evidence today.

## 1. Finds

- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)**: An MCP server that reads RTL simulation waveforms (FST, with VCD/FSDB auto-converted) plus a SystemVerilog netlist. It exposes 34 tools for driver analysis, X-value tracing, pass/fail waveform diffs and static analysis. Chip verification engineers can let an agent trace why a signal went wrong instead of reading waveforms by hand. Its star count (292) is modest and plausible, and the scope is specific.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that lets coding agents find code without reading the whole repo. It also reports blast radius and which tests to run. Anyone paying for agent tokens on a large codebase should try it. It comes from Red Hat's emerging-tech group, so it's more credible than most of the list.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: A black-box, experience-driven cost controller for coding agents. It cuts spend without touching the agent internals. Teams running Claude Code or Codex at scale could use it as a cost-governance layer. The description is thin, so check the repo for benchmarks.
- **[erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything)** and **[EL4CTEO/fast-anything](https://github.com/EL4CTEO/fast-anything)**: Both port code to Rust incrementally and check each step against the original's recorded behavior. The first targets CLIs, HTTP servers and libraries across six languages. The second profiles first and ports only the hot 5%. Anyone with a slow Python or Node service and a mandate to avoid a rewrite might use them. Both are plausible; the shared "prove equivalence" approach is the notable part.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)**: A desktop app that records your screen work and uses the GitHub Copilot SDK to turn it into an intent plus ordered steps. It then builds a reusable Skill or Automation for Microsoft's agent products. It suits teams that want to turn tribal workflows into agent skills. It's tied to the Microsoft stack.
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)**: A local-first Go MCP server and CLI that keeps a Git-versioned map of your code and database schema for agents to read before editing. It's meant to give Claude Code, Codex, Cursor and opencode persistent context. Developers on large monorepos who are tired of agents re-exploring everything would want it. The 2,963 stars are unverified.

**Likely hype or low-substance:** [dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) (84,976 stars) promises unlimited free frontier models via a plugin. The star count and the claim both look off. Several "Grok Bot alternative" repos ([OpenMausBot](https://github.com/milind-soni/OpenMausBot), [rakazo](https://github.com/elie222/rakazo), [OpenBot](https://github.com/CopilotKit/OpenBot)) read as bandwagon projects.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,562 | A C++23 CLI and MCP server that finds code without reading the whole repo and reports blast radius. It cuts agent token costs on large codebases. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 292 | An MCP server for RTL waveform debugging with 34 tools. It's a rare hardware-verification entry in the agent tooling space. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 2,963 | A Git-versioned code and schema map served over MCP. It gives coding agents long-term context before they edit. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 8,013 | Black-box cost control for coding agents. It targets spend governance, an increasingly common pain point. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 40,431 | A menu-bar tool for pointing any agent at any model, such as Codex on DeepSeek or Claude Code on Kimi. Model-routing is useful, but the star count is suspiciously high. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 0 (+183) | Intel's toolkit for optimizing and deploying AI inference. It's established and not new, but it's still gaining steadily. |
| [EL4CTEO/fast-anything](https://github.com/EL4CTEO/fast-anything) | Rust | 3,016 | Profiles Python, Node or Ruby apps and ports only the slow functions to Rust. It proves the ported code behaves the same. |
| [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) | Rust | 8,617 | Incremental whole-app Rust rewrites, checked against recorded behavior at each step. It supports six source languages. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+2037) | A Claude Code skill bundle with 82 skills and 15 slash commands for bug hunting and red-team work. It's today's top trending repo, so verify the content before relying on it. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+838) | An agentic skills framework and development methodology. It's already well known and still gaining. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+783) | Aims to make any software agent-native through CLIs, with a CLI-Hub registry. It's an ambitious bridge between GUI apps and agents. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | 0 (+438) | An open-source agent for CI/CD reliability. It's a concrete ops use case. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 3,241 | A personal agent from the n8n team with its own computer. It handles tasks like invoices and trial cancellations on real sites and asks before acting. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 5,859 | Self-hosted workflows that orchestrate CodeBuddy, Codex and Claude Code, with human approval gates. It targets delivery pipelines. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 6,388 | Lets CLI agents pick up work in the background and only ping you for decisions. It's a lightweight take on long-running agents. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,814 | Lets a team's coding agents communicate with each other. It's early, but multi-agent coordination is a rising theme. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 0 (+920) | A search, scrape and data-provider API for agents. It's well established. |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+908) | A desktop tool that cuts long videos into short clips with subtitles, covers and captions. It's practical for creators. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,821 | A free AI office suite with a CLI and skill, so agents can edit real .docx/.xlsx/.pptx files. It's a concrete document-editing capability. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 10,152 | 42 FFmpeg tools with an MCP server, running locally for coding agents. It needs no cloud or API keys. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | 0 (+755) | 124 documented app-store rejection patterns and 112 tracked deadlines, plus an agent skill. It's useful for mobile teams facing EU AI Act deadlines. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 9,109 | Turns a coding agent into a video agent, with editors to adjust the output. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 9,753 | An on-device Android agent that operates apps. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 0 (+828) | Trains a 64M-parameter LLM from scratch in about two hours. It's an educational favorite and still climbing. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 8,245 | An open book that derives LLM inference and training system design from hardware constraints. It includes calculation tools and experiments. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,656 | Claims to be the first open-source enterprise world model. The claim is vague, so verify before adopting. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,656 | A lightweight knowledge base for people and agents, with fast indexing and precise retrieval. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 308 | A local-first ingestion engine for web, PDF, Office and OCR content. It builds verifiable data graphs for AI context. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 319 | Turns documents into a readable Markdown wiki that answers with citations. It works with Ollama and claims 63% fewer LLM tokens. The claim is self-reported. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 299 | Builds governed knowledge graphs where every fact is traceable to its evidence. |
| [slow-stack/mneme](https://github.com/slow-stack/mneme) | JavaScript | 255 | Long-term agent memory stored as readable local files and consolidated between sessions. |
| [jzjzzzzzzz/agent-me](https://github.com/jzjzzzzzzz/agent-me) | Python | 632 | Distills your knowledge and decisions into an inspectable agent twin. |

## 3. Trend Signal Analysis

**Agent skills are the dominant story.** Five of the 16 trending repos are skill bundles or skill-adjacent: Claude-BugHunter, superpowers, diagram-design, last30days-skill and stitch-skills. The agent-skills topic is crowded too. Skills are now the default way to package domain expertise, and they target several agents at once (Claude Code, Codex, Cursor, Gemini CLI, Copilot, Pi). Cursor's official [plugin spec](https://github.com/cursor/plugins) and Google's [stitch-skills](https://github.com/google-labs-code/stitch-skills) show vendors standardizing on this format.

**Cost and context control for coding agents is a new category.** ripwire, TokenEconomizer and aoci-code all treat token spend and repo context as the bottleneck. They apply retrieval and caching ideas to agent input rather than to chat.

**Verified rewriting is emerging.** rust-anything and fast-anything combine agents with behavior-recording to make language ports safe. This is a different pattern from plain code generation.

**Agents reaching beyond the terminal.** Several repos let agents operate phones, video editors, CAD and game-modding tools through MCP. Examples are esp32-iphone-agent, pinky, SolidCraft and universal-modder.

**Model routing and open harnesses.** magpie, yoke and many "DSH" (DeepSeek Harness) projects point to a market where one agent shell runs on cheap alternative models. Several repos also advertise "Grok Bot alternatives". Treat much of this as bandwagon activity, since the star patterns look unnatural.

## 4. Community Hot Spots

- **Token and context economics for coding agents** ([ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer), [aoci-code](https://github.com/aoci-spec/aoci-code)): Agent bills are now a line item, and these tools attack them directly.
- **Behavior-verified code migration** ([rust-anything](https://github.com/erkamyaman/rust-anything), [fast-anything](https://github.com/EL4CTEO/fast-anything)): Recording the original's behavior and checking each step is a reusable pattern beyond Rust.
- **Domain-specific MCP servers** ([wave-mcp](https://github.com/Tencent/wave-mcp), [x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server)): Chip debugging and reverse engineering show MCP moving into specialist engineering tools.
- **Skill capture from human work** ([skill-recorder](https://github.com/microsoft/skill-recorder), [video-to-skill](https://github.com/brenoepics/video-to-skill)): Both turn recorded demonstrations into installable skills, which could cut the cost of authoring them by hand.
- **Agent-native CLIs** ([CLI-Anything](https://github.com/HKUDS/CLI-Anything), [bili-cli](https://github.com/kukemc/bili-cli)): JSON-output command-line wrappers around existing software are a cheap way to make it agent-usable.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
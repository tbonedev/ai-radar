# AI Open Source Trends 2026-11-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-24 18:35 UTC

---

# AI Open Source Trends Report, 2026-11-25

Two caveats about the data:
- The trending feed reports total stars as 0 for every repo, so only "today" figures are meaningful there.
- Several topic-search repos show very large star totals that look implausible for new projects, such as 85,913 stars on a plugin wrapper. Treat those totals as unreliable and possibly inflated.

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that lets a coding agent locate code, estimate blast radius and pick tests to run without reading the whole repo. It suits anyone paying for agent tokens on a large codebase. Red Hat's emerging-tech group is behind it, so it is more credible than the average skill repo.
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)**: Wraps arbitrary software in agent-friendly CLIs and publishes them through a "CLI-Hub" registry. Agent builders who want tool access without writing MCP servers should look at it. +1075 stars today. I haven't verified how well the generated CLIs work.
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)**: A Go MCP server and CLI that keeps a Git-versioned index of your code and database schema for agents to read before they edit. It is for teams whose agents lose context across sessions. The idea overlaps with ripwire from a different angle (persistent memory rather than token-cheap search), so try them side by side.
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)**: An open-source agent aimed at CI/CD reliability (+408 today). SRE and platform engineers who want automated triage of failing pipelines may find it useful. The description is thin, so check the repo before relying on it.
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)**: An agent skill that researches a topic across Reddit, X, YouTube, HN, Polymarket and the web, then writes a sourced summary. It fits anyone who wants a quick "what happened recently" briefing inside their coding agent. It is easy to install and try.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**: A full recipe for training a 64M-parameter LLM from scratch in about two hours. It is the best hands-on learning resource in today's list, and a good fit for engineers who want to understand pretraining end to end. It is already popular, so it is a "revisit" rather than a discovery.

**Likely hype or risk:**
- **[Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)** claims unlimited free access to frontier models with no key. The 85,913 stars look inflated, and the offer is probably unsustainable or a proxy of unclear provenance.
- **[SodovaFo7/claude-code-unlimited](https://github.com/SodovaFo7/claude-code-unlimited)** rotates sessions to dodge usage limits. That likely violates provider terms.
- **[xiaodou-official/xiaodou-open-platform](https://github.com/xiaodou-official/xiaodou-open-platform)** is a payment API listing, not AI.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,562 | A C++23 CLI and MCP server that finds code without reading the whole repo and reports blast radius and tests to run. It targets agent token costs directly. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 3,004 | Keeps a Git-versioned map of code and schema that agents read before editing. It gives Claude Code, Codex and Cursor long-term context. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+1,075) | Turns existing software into agent-native CLIs, with a hub for sharing them. It is the strongest momentum signal in the infra group today. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 0 (+990) | A single API for search, scraping and 550+ data providers, aimed at feeding agents. It is well known, so today's gain is a continuing-adoption signal. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 0 (+187) | Intel's toolkit for optimizing and deploying AI inference. It is a mature project with steady interest. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 8,071 | Black-box cost control for coding agents, driven by experience. It targets the same token-spend problem as ripwire from the Microsoft side. |
| [Nimbleway/webrouter](https://github.com/Nimbleway/webrouter) | Python | 886 | An open standard for connecting agents to the web. It is early and small, so it is worth watching rather than adopting. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 40,986 | A menu-bar app that routes coding agents to alternative models, such as Codex on DeepSeek or Claude Code on Kimi. The count is high for a new repo, so treat it with caution. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+1,006) | An agentic skills framework and development methodology. It is established, and today's +1006 shows continued adoption. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | 0 (+408) | An open-source agent for CI/CD reliability. It is a niche, practical use of agents. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 5,983 | Self-hosted workflows that orchestrate CodeBuddy, Codex and Claude Code with human approval gates. Approval gates are a recurring theme today. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 3,368 | A personal agent with its own computer that handles invoices, call prep and trial cancellations, and asks before acting. It comes from the n8n team and runs on your choice of model. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,819 | Lets a team's coding agents communicate with each other. It is an early multi-agent coordination layer. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 6,481 | Lets CLI agents pick up and follow tasks in the background, and only pings you for decisions. It is a "supervised autonomy" pattern. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,634 | Infrastructure for continually self-improving agents. The claim is ambitious, so check what it actually ships. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,752 | Lets MCP agents operate an iPhone or Android phone with the user in the loop. It comes from a well-known developer. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+981) | A desktop tool that cuts long videos into short clips with subtitles, covers and post copy. It is a concrete vertical application with strong daily growth. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0 (+794) | A skill that produces 52 diagram types as self-contained HTML and SVG for agents including Claude Code and Cursor. It is a polished alternative to Mermaid output. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,876 | An open-source office suite with a built-in agent and a CLI that lets coding agents edit real .docx, .xlsx and .pptx files. It overlaps with MR Office. |
| [XinaTian/MROffice](https://github.com/XinaTian/MROffice) | TypeScript | 3,722 | Browser editors for documents, spreadsheets and slides, with an MCP server so agents can create and edit Office files. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | 0 (+936) | A pre-submission guard with 124 documented rejection patterns and tracked regulatory deadlines, packaged as an agent skill. It is useful if the pattern list holds up. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 10,584 | Provides 42 local FFmpeg tools and an MCP server for agent-driven video editing, with no cloud or API keys. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 9,859 | An on-device Android agent that operates apps and the web. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 0 (+727) | Trains a 64M-parameter LLM from scratch in two hours. It is a strong educational resource with sustained momentum. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 8,285 | An open book on AI infrastructure, with calculation tools and experiments. It derives LLM inference and training system design from hardware limits. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 539 | A practical guide covering model selection, inference, fine-tuning, evaluation, RAG and agents. It is a small but useful reference. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,670 | A lightweight knowledge base for people and agents, with fast indexing and precise retrieval. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 310 | A local-first ingestion engine for web and documents, covering PDF, Office and OCR parsing. It produces evidence-grounded context. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 301 | Builds governed knowledge graphs from documents, with every fact traceable to its evidence. It targets auditability. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 808 | Ontology-augmented generation for agents. It is a newer direction beyond plain vector retrieval. |
| [vstorm-co/agenticos](https://github.com/vstorm-co/agenticos) | Python | 835 | A self-hosted agent platform with RAG, 4,700+ MCP servers, budgets, approvals and audit trails. It is built on Pydantic AI. |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | TypeScript | 0 (+589) | A privacy-first knowledge base and Notion alternative. Its AI relevance is marginal and it is already established. |

## 3. Trend Signal Analysis

**Agent skills are the dominant attraction.** Six of the 16 trending repos are skills or skill libraries: Claude-BugHunter, superpowers, diagram-design, last30days-skill, stitch-skills and app-store-compliance. The `agent-skills` topic also has many entries. Skills are now a distribution format, with the same bundle targeting Claude Code, Codex, Cursor, Gemini CLI and Copilot. Google's Stitch skills explicitly cite the Agent Skills open standard.

**Token cost and context are becoming first-class problems.** Ripwire, aoci-code, TokenEconomizer, magpie and the anti-slop rule sets all try to make agents cheaper, better informed or less sloppy. The focus is shifting from "can agents code" to "can we afford and trust them".

**Rewrite-in-Rust via agents is a new pattern.** fast-anything and rust-anything both use coding agents to port hot paths, checked against recorded behavior of the original. Equivalence checking is the interesting part.

**Agents are moving beyond the terminal.** Phone-control projects (pinky, esp32-iphone-agent, Mika), Office-file editing through MCP and video-agent projects all give agents new surfaces. Approval gates and "asks before it acts" appear in nod, LoopForge and agent-autoloop.

**Model routing and DeepSeek harness ecosystems are growing.** A cluster of "dsh" plugins and tools, plus magpie, points to alternative-model routing. Many of these have inflated-looking stars. Several "open Grok Bot alternative" repos (OpenBot, rakazo, OpenMausBot, AnyModelBot) suggest a recent closed-product launch is being cloned, though the data doesn't confirm what it was.

## 4. Community Hot Spots

- **Token-saving code navigation for agents ([ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code))**: Benchmark both on your largest repo. The savings should be easy to measure.
- **Agent-native CLIs ([CLI-Anything](https://github.com/HKUDS/CLI-Anything))**: Wrapping software as CLIs is a lighter alternative to MCP servers. Check the quality of the generated tools before betting on it.
- **Behavior-checked agent rewrites ([rust-anything](https://github.com/erkamyaman/rust-anything), [fast-anything](https://github.com/EL4CTEO/fast-anything))**: Useful if you have a slow Python or Node hot path. Verify the equivalence-testing approach on your own code.
- **Agent skill supply-chain hygiene**: Skill bundles install instructions and scripts into your agent, and today's list includes pentest and "unlimited" tools. Read any skill before installing it, especially [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) and [ARTEX](https://github.com/BaaRai/ARTEX). Use them only on systems you are authorized to test.
- **Learning to train small models ([minimind](https://github.com/jingyaogong/minimind))**: A cheap way to get hands-on with pretraining mechanics.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
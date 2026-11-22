# AI Open Source Trends 2026-11-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-22 15:00 UTC

---

# AI Open Source Trends Report, 2026-11-22

**Data caveats:**
- The trending list reports total stars as ⭐0 for every repo. Those totals are missing, not real, so the tables show "n/a" for them and use only the "today" figure.
- Several topic-search star counts look implausible for repos this new or obscure. Examples are a TV debloater at 60,239 and a "free models" plugin at 83,770. Treat topic-search totals as weak signals, and some may be inflated.
- Several repos reference "DSH" or "DeepSeek Harness", which I can't verify from this data.

## 1. Finds

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** generates agent-friendly command-line wrappers for arbitrary software, and a hub (CLI-Hub) hosts them. It suits people building coding agents that need to drive GUI-first or API-less tools. The idea is credible, but how reliable the generated CLIs are is unproven.
- **[yetone/magpie](https://github.com/yetone/magpie)** is a menu-bar app that routes any agent to any model, for example Codex on DeepSeek or Claude Code on Kimi. It helps anyone who wants to use their preferred agent harness with cheaper or different backends. The 39,966 stars are unverified.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a zero-dependency C++23 CLI and MCP server. It lets coding agents locate code, blast radius and tests to run without reading the whole repo. It is aimed at engineers trying to cut agent token costs on large codebases, and it comes from a credible org.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** takes a black-box, experience-driven approach to controlling coding-agent cost. It suits teams with agent bills they can't inspect inside the agent. It is worth reading for the method, but I can't tell from the description how mature it is.
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** is an open-source agent for CI/CD reliability, meaning it diagnoses pipeline failures. Platform and SRE engineers could use it to triage flaky builds. It had +395 stars today.
- **[n8n-io/nod](https://github.com/n8n-io/nod)** is a personal agent with its own computer that works on real websites (invoices, call prep, cancelling trials) and asks before acting. It runs locally with the model you choose, which makes it a useful reference for approval-gated agents.
- **Treat with skepticism:**
  - **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** claims a 2.78T-parameter model runs on one CPU in 8.24 GB of RAM. That is extraordinary and needs independent verification.
  - **[Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)** promises unlimited free frontier models with no login. That looks like hype or a proxy of unknown provenance, so review it carefully before sending any prompts through it.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 39,966 | A menu-bar router that pairs any agent with any model backend. It is useful for mixing harnesses and cheaper models. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | n/a (+910) | A search, scrape and data-provider API pitched as knowledge infrastructure for agents. It is established, but today's +910 is the largest gain in this group. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,560 | Code search plus an MCP server that finds relevant code without reading the repo. It targets lower token cost on large codebases. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 7,939 | Black-box cost control for coding agents, learned from experience. It is a research-flavoured answer to runaway agent spend. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 2,896 | A Git-versioned map of the codebase and DB schema, served over MCP to Claude Code, Codex, Cursor and opencode. It gives agents persistent context. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | n/a (+301) | The Cursor plugin specification and official plugins. It signals a standardising plugin ecosystem for editors. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+155) | Intel's toolkit for optimizing and deploying inference. It is mature, and today's gain is modest. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | n/a (+1,721) | A Claude Code bundle of 82 skills, 15 slash commands and 681 report-derived patterns for bug hunting and red-team work. It has the day's top gain, and it is dual-use, so use it only on authorized targets. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+785) | An agentic skills framework and development methodology. It is already well known, so the signal is that interest in skills keeps growing. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+687) | Makes software agent-native by generating CLIs, with a hub for sharing them. It is a notable approach to tool access. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+673) | A research skill that searches Reddit, X, YouTube, HN, Polymarket and the web, then synthesizes a grounded summary. It is a practical recent-news skill. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | n/a (+395) | An open-source agent for CI/CD reliability. It applies agents to a concrete ops pain point. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 3,041 | A local personal agent with its own computer that asks before acting. It comes from the n8n team. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 5,608 | Self-hosted workflows that orchestrate CodeBuddy, Codex and Claude Code with human approval gates. It targets team delivery pipelines. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,646 | Infrastructure for continually self-improving agents. The claim is broad, so check what it actually implements. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | n/a (+640) | A desktop tool that cuts long videos into short clips with subtitles, covers and captions. It is a concrete creator-workflow app. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,766 | An open-source office suite with a built-in agent and a CLI that lets coding agents edit real .docx, .xlsx and .pptx files. It targets agent document editing. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | n/a (+513) | A skill with 45 diagram types, output as self-contained HTML and SVG, for several coding agents. It is a niche but useful output skill. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | n/a (+617) | A playbook of 124 rejection patterns and 112 regulatory deadlines, packaged as an agent skill. It is useful for mobile release checks. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 8,966 | Turns a coding agent into a video agent, with editors to adjust the output. It is part of the agent-driven video trend. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 9,584 | An on-device Android agent that operates apps and the web. It is a phone-control agent. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+473) | A guide and code to train a 64M-parameter LLM from scratch in about two hours. It is a good learning resource. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 12,561 | Claims 2.78T-parameter inference on one CPU in 8.24 GB of RAM. The claim is implausible without evidence, so verify it first. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 8,199 | An open book draft that derives LLM inference and training system design quantitatively. It includes code and experiments. |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | JavaScript | 83,770 | A plugin promising unlimited free access to frontier models with no key. It looks like hype, so be careful with what you send through it. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,594 | A lightweight knowledge base for people and agents, built for fast indexing and precise retrieval. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 310 | Turns documents into a readable Markdown wiki that answers with citations. Its benchmark numbers are self-reported. |
| [slow-stack/mneme](https://github.com/slow-stack/mneme) | JavaScript | 252 | Long-term agent memory stored as readable local files and consolidated between sessions. It can run as a plugin or over MCP. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 303 | A local-first ingestion engine covering web capture, PDF/Office/OCR parsing and evidence-grounded context. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 299 | Builds knowledge graphs from documents, with every fact tied to its evidence. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 808 | Ontology-augmented generation for agents. It is an early idea and worth watching. |

## 3. Trend Signal Analysis

**Skills are the breakout format.** The top gainers are mostly skill bundles for coding agents rather than models or frameworks. Examples are Claude-BugHunter (+1,721), superpowers, last30days-skill, diagram-design, stitch-skills and app-store-compliance. They target Claude Code, Codex, Cursor, Gemini CLI and Copilot at once, which suggests the Agent Skills format is settling into a cross-vendor standard. Skills are becoming a distribution channel for domain expertise, covering security, design and compliance.

**The new direction is the agent's own overhead.** Tools like ripwire, TokenEconomizer, aoci-code and magpie focus on token cost, repo context, persistent code maps and model routing. People are now optimizing the cost and context of running coding agents rather than building new ones. MCP is the default integration layer here.

**Agents are moving beyond code.** Video, CAD, phone control and office documents now have agent skills or MCP servers. Several repos also describe themselves as alternatives to "Grok Bot", which points to a wave of personal-agent clones. Many of them share near-identical descriptions, and some star counts look suspicious.

**Industry connection.** Many repos target Claude Code, Codex and a DeepSeek or Kimi backend, so cost arbitrage across providers is a live theme. I can't tie any specific repo to a particular model release from this data alone.

## 4. Community Hot Spots

- **Agent skills for specialized domains:** [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) and [app-store-compliance](https://github.com/mjmirza/app-store-compliance) show how curated knowledge gets packaged for agents. Check the provenance of the patterns before trusting them.
- **Token and context efficiency:** [ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) and [aoci-code](https://github.com/aoci-spec/aoci-code) address a cost that teams feel directly.
- **Model-agnostic agent routing:** [magpie](https://github.com/yetone/magpie) decouples the harness from the model, which matters for cost and vendor risk.
- **Agent-native tool interfaces:** [CLI-Anything](https://github.com/HKUDS/CLI-Anything) and [firecrawl](https://github.com/firecrawl/firecrawl) look at how software and web data become usable by agents.
- **Approval-gated personal and ops agents:** [n8n-io/nod](https://github.com/n8n-io/nod) and [opensre](https://github.com/Tracer-Cloud/opensre) show human-in-the-loop designs applied to real tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
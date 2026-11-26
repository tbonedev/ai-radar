# AI Open Source Trends 2026-11-27

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-26 17:29 UTC

---

# AI Open Source Trends Report, 2026-11-27

**Data caveat:** Trending-list repos report total stars as 0, which means the total is missing, so I show "n/a" and use only the "+today" figure. Topic-search star counts look unreliable. A single-purpose repo such as `cleanyourtv` (a TV debloater) shows 61,173 stars, and several near-identical "Grok Bot alternative" repos show five-figure totals. I treat those totals as possibly inflated or botted and don't rank on them.

---

## 1. Finds

- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** is an open-source agent aimed at CI/CD reliability, meaning failing pipelines and flaky builds. It's for platform and SRE engineers who want an agent for on-call and pipeline triage rather than another coding assistant. It gained +325 today, a modest and credible number.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** does "experience-driven black-box cost control for coding agents". It appears to learn from past runs to cut token spend without modifying the agent. Teams paying large coding-agent bills should look at it. The description is thin, so check the README for benchmarks before trusting it.
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)** is a Go MCP server and CLI that keeps a Git-versioned map of your code and database schema, which agents read before editing. It targets people who use Claude Code, Codex, Cursor or opencode on large or legacy repos and want persistent context instead of re-exploring every session.
- **[EL4CTEO/fast-anything](https://github.com/EL4CTEO/fast-anything)** takes a narrower approach than whole-app rewrites. It profiles a Python, Node or Ruby app, ports only the hot functions to Rust with a coding agent, and checks that behavior stays the same. Anyone with a slow service they don't want to rewrite would find it practical. Its sibling [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) does the whole-app version.
- **[qybaihe/bla](https://github.com/qybaihe/bla)** is a defensive MCP server and CLI that obfuscates JS/TS, Electron ASAR, WASM, native binaries and GGUF/Safetensors against AI reverse-engineering agents. It is a new category, anti-agent protection, and is aimed at vendors shipping client-side code or model weights. Its effectiveness is unproven.
- **[yetone/magpie](https://github.com/yetone/magpie)** is a Go tool that pools several paid AI plans (Claude, ChatGPT, Copilot, GLM, Kimi) behind one endpoint and fails over when one hits its quota. It is useful if you juggle subscriptions, but check each provider's terms first, because sharing plan access may violate them.

**Looks like hype or a thin shell:**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) promises unlimited free frontier models with no key. That claim should make you look closely at where traffic is routed and who pays for it.
- [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) has a vague description and an implausible star count.
- The cluster of "Grok Bot alternative" repos ([OpenMausBot](https://github.com/milind-soni/OpenMausBot), [rakazo](https://github.com/elie222/rakazo), [AnyModelBot](https://github.com/modelflare-ai/AnyModelBot), [OpenBot](https://github.com/CopilotKit/OpenBot)) reads like templated marketing.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 8,141 | Black-box cost control for coding agents, driven by past run experience. It is the only cost-governance project here from a major vendor. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 3,062 | A local-first MCP server that gives agents a persistent, versioned index of code and DB schema. It targets the repeated context-rebuilding problem across Claude Code, Codex, Cursor and opencode. |
| [EL4CTEO/fast-anything](https://github.com/EL4CTEO/fast-anything) | Rust | 4,186 | Profiles slow apps and ports only the hot paths to Rust, then verifies equivalent behavior. It is a pragmatic alternative to full rewrites. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+176) | Intel's toolkit for optimizing and deploying AI inference. It is established, and the steady daily gain suggests ongoing edge and CPU inference demand. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 41,967 | Pools multiple paid AI plans and fails over when one runs out. It appeals to multi-subscription users but carries terms-of-service risk. |
| [INK-Q/agy-fast](https://github.com/INK-Q/agy-fast) | TypeScript | 1,691 | An MCP accelerator plugin for Google Antigravity that claims 34% fewer LLM turns and 31% less token quota. The numbers are self-reported. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | n/a (+1,042) | A single API to search, scrape and access 550+ data providers for agents. It is already well known, but it is the strongest mover in agent data plumbing today. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | n/a (+268) | Cursor's plugin specification plus official plugins. It signals that editor-side plugin standards are becoming formal. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | n/a (+1,600) | A Claude Code skill bundle with 85 skills, 16 slash commands and 681 disclosed-report patterns across 24 vulnerability classes. It is the day's top gainer, and the same code is useful for authorized testing and for abuse, so use it only with authorization. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+853) | An agentic skills framework and development methodology. It is already well known, and its continued climb shows skills-as-methodology is mainstream. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+744) | Aims to make any software agent-native through CLIs, with a hub at clianything.cc. The idea is to wrap existing GUI apps so agents can drive them. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | n/a (+325) | An open-source agent for CI/CD reliability. It is a vertical, operations-focused agent rather than a coding assistant. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 3,873 | A personal agent with its own computer that works on real websites and asks before acting. It is notable because n8n, an established automation vendor, is behind it. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,819 | Lets a team's coding agents communicate with each other. It is an early example of cross-agent coordination. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,535 | A command center for running multiple coding agents across multiple machines. It extends beyond code into CAD, circuits and music. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,809 | Lets MCP agents operate a real iPhone or Android phone with a human in the loop. It comes from a well-known open-source author. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | n/a (+770) | A local-first open-source OpusClip alternative that turns long videos into short clips with subtitles, covers and captions. It also runs as an MCP server and has no subscription. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | n/a (+951) | A skill with 52 diagram types, output as self-contained HTML and SVG, for Claude Code, Codex, Copilot, Cursor and others. It is a niche but practical alternative to Mermaid output. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+755) | An agent skill that researches a topic across Reddit, X, YouTube, HN, Polymarket and the web, then writes a grounded summary. It is useful for fast research briefs. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | n/a (+561) | A playbook and pre-submission guard with 125 rejection patterns and 117 tracked regulatory deadlines, including the EU AI Act. It suits mobile teams that want to avoid review rejections. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 9,498 | Turns a coding agent into a video agent, with editors to adjust the output. It is part of a wave of agent-driven video tools. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,989 | An open-source office suite with a built-in agent and a CLI so Claude Code, Codex and Cursor can edit real .docx, .xlsx and .pptx files. Its main value is the file-level agent interface. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | n/a (+308) | Agent Skills built for the Stitch MCP server, compatible with Antigravity, Gemini CLI, Claude Code and Cursor. It shows Google adopting the Agent Skills open standard. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+701) | Trains a 64M-parameter LLM from scratch in about two hours. It is a good educational path through the whole pretraining pipeline on modest hardware. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,621 | Infrastructure for continually self-improving agents. The concept is interesting, but check the README for evidence of real improvement. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 8,346 | An open-source book (in Chinese) on quantitative analysis of LLM inference and training system design, with calculation tools and experiments. It is valuable as reference material. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 547 | A practical guide covering model selection, inference, fine-tuning, evaluation, RAG and agents. It is a good on-ramp, and the low star count suggests it is still undiscovered. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,698 | A lightweight knowledge base for people and agents with fast indexing and precise retrieval. The Rust implementation targets low overhead. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 329 | Turns documents into a readable Markdown wiki that answers with citations, and works with any provider including Ollama. It claims 63% fewer tokens, which is self-reported and worth verifying. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 314 | A local-first ingestion engine with HTTP and browser capture, layout-aware PDF, Office and OCR parsing, and evidence-grounded context. It is aimed at the unglamorous but hard problem of document ingestion. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 300 | Builds governed knowledge graphs where each fact is traceable to its source evidence. It suits regulated or audit-heavy domains. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 799 | Ontology-augmented generation for agents. It is an early, small project exploring structure beyond plain vector retrieval. |

---

## 3. Trend Signal Analysis

**Skills are the dominant packaging format.** Six of the 16 trending repos are agent skills or skill bundles: Claude-BugHunter, superpowers, diagram-design, last30days-skill, stitch-skills and app-store-compliance. The topic search shows the same pattern in `agent-skills` and `claude-code`. Compatibility lists now name Claude Code, Codex, Cursor, Gemini CLI, Copilot, Pi and Antigravity together, so Agent Skills is becoming a cross-vendor standard. Google's stitch-skills and Cursor's plugin spec are signs of vendor adoption.

**New directions:**
- **Agent-driven media creation.** Video, film styles and animated explainers are produced by coding agents writing code instead of calling video models (openfilm, lemo-opuscar, video-talkcraft, stickman-video-director).
- **Agent cost and context governance.** TokenEconomizer, agy-fast and aoci-code treat token spend and persistent codebase memory as products.
- **Anti-agent defense.** `bla` is a rare defensive project against AI reverse-engineering.
- **Agents operating phones.** pinky, Mika and esp32-iphone-agent let agents control real phones.
- **A "DeepSeek Harness" (dsh) plugin ecosystem.** Several repos (dsh-TUI, dsh-Go, dsh-email, dsh-ppt, EAC-Desktop) build on it, though their star counts are unreliable.

**Industry connection:** Repeated mentions of Opus 5.5, Seedance, DeepSeek V4.1 and Kimi K3 suggest that stronger code-writing models are making "agent writes the artifact in code" practical. The "Grok Bot alternative" clones suggest a recent closed-product launch is being copied quickly.

**Signal quality:** Much of the topic-search list looks inflated or promotional. Weight the trending list more heavily.

---

## 4. Community Hot Spots

- **Skills and plugin standards** ([obra/superpowers](https://github.com/obra/superpowers), [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills), [cursor/plugins](https://github.com/cursor/plugins)): Write skills once and run them across agents. Watch for portability gaps.
- **Agent cost and context control** ([microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer), [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)): Token spend and context reuse are now the practical bottleneck for coding-agent teams.
- **Vertical operations agents** ([Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)): CI/CD and SRE agents are more defensible than general coding assistants.
- **Making existing software agent-callable** ([HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything), [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl), [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice)): CLIs, MCP servers and file-format tooling are becoming the interface layer.
- **Security on both sides of agents** ([elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter), [qybaihe/bla](https://github.com/qybaihe/bla)): Offensive skill packs are trending alongside defenses against agent-based reverse engineering. Treat both with authorization and licensing in mind.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
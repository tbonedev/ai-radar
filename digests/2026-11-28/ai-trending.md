# AI Open Source Trends 2026-11-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-27 17:10 UTC

---

# AI Open Source Trends Report, 2026-11-28

Two caveats on the data:
- **Trending star totals:** all show ⭐0, so total stars are unknown. The tables use "n/a" for the total and give today's gain.
- **Topic-search star counts:** several are implausibly high for repos that look brand new, such as a plugin repo at 89k and a TV debloater at 61k. Treat those counts as unreliable, and don't read them as adoption.

## 1. Finds

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** trains a 64M-parameter LLM from scratch in about two hours, covering the full pretrain, SFT and alignment pipeline. It suits engineers and students who want to understand training end to end on modest hardware, and the repo is bilingual (Chinese/English). It's a teaching codebase, not a production model.
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** wraps existing software in agent-friendly CLIs and publishes them in a registry (CLI-Hub). Agent builders who want coding agents to drive GUI-first tools through shell commands should look. It's worth checking how well the generated CLIs hold up outside the demos.
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** is an open-source agent for CI/CD reliability, aimed at investigating pipeline failures. Platform and SRE teams drowning in flaky builds are the audience. It's a concrete vertical agent rather than another general framework.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** does black-box cost control for coding agents, learning from past runs to cut token spend. Anyone running Claude Code or Codex at scale and watching the bill should read it. The 8,161 star figure is unverified, so check the method before trusting it.
- **[kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill)** gives coding agents 42 FFmpeg tools (cut, captions, reframe, loudness, platform exports) with an MCP server and a machine-readable contract. It runs locally with no cloud or API keys. Content creators and agent developers who want deterministic video editing from an agent would use it.
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)** is a Go MCP server and CLI that keeps a Git-versioned index of your codebase and DB schema for agents to read before editing. It's for teams whose agents keep losing context in large repos.

**Hype warnings:**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) promises unlimited free frontier models with no login. That claim is hard to sustain and may rely on proxied or abused access. Audit any plugin like this before installing it.
- [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) is a dual-use offensive-security skill bundle. Use it only on targets you're authorized to test.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | n/a (+833) | Search, scrape and data-provider API (550+ sources) for agents. An established name, but the "knowledge infrastructure" positioning is new. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | n/a (+152) | Intel's toolkit for optimizing and deploying AI inference. Mature, with steady interest. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | n/a (+242) | Cursor's plugin specification and official plugins. It signals an extension ecosystem forming around coding editors. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 8,161 | Experience-driven cost control for coding agents without touching the model. It targets a growing pain: agent token bills. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 3,087 | Persistent, versioned code and schema map served over MCP. It gives agents long-term repo context. |
| [Nimbleway/webrouter](https://github.com/Nimbleway/webrouter) | Python | 938 | Open standard for connecting agents to the web. It's early, so watch for adoption. |
| [migsilva89/loadout](https://github.com/migsilva89/loadout) | Swift | 105 | Shows which skills, plugins, subagents and MCP servers your assistants load, with real usage. Small, but it addresses skill-sprawl visibility. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+916) | Agentic skills framework and development methodology. It's already well known and keeps gaining. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | n/a (+668) | Turns arbitrary software into agent-native CLIs, with a hub of them. It's a "tools for agents" approach with strong momentum. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | n/a (+326) | Agent for CI/CD reliability and incident investigation. A concrete vertical use case. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 42,456 | Pools multiple paid AI plans (Claude, ChatGPT, Copilot, GLM, Kimi) and fails over when one runs out. Check the terms of service of each plan before relying on it. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 4,224 | Personal agent with its own computer that works on real websites and asks before acting. Backed by n8n. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 6,712 | Lets CLI agents pick up and follow through on tasks in the background, escalating only when unsure. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,824 | Lets a team's coding agents talk to each other. It's an early multi-agent coordination layer. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,834 | Lets MCP agents operate an iPhone or Android phone with a human in the loop. The author is well known. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | n/a (+733) | Local-first OpusClip alternative that cuts long videos into short clips with subtitles, covers and captions. It also exposes an MCP server. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 11,810 | 42 local FFmpeg tools for agents, no API keys. A practical building block. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 13,032 | Open-source office suite with a built-in agent and a CLI so coding agents can edit real .docx/.xlsx/.pptx files. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 5,411 | Lets a vision model operate a real iPhone using a $7 ESP32 for AirPlay input and USB HID output. A hardware hack with no jailbreak needed. |
| [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) | Python | 13,908 | Breaks videos down shot by shot into filmed, AI-generated or coded, with remake guidance in a VIDEO.md format. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+664) | Agent skill that researches a topic across Reddit, X, YouTube, HN, Polymarket and the web, then writes a grounded summary. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+667) | Trains a 64M LLM from scratch in about two hours. A good learning resource with strong momentum. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 8,364 | Open book draft with calculators that derive LLM inference and training system design from hardware limits. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,612 | Infrastructure for continually self-improving agents. The claims are ambitious, so verify them. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 548 | ModelScope guide covering model selection, inference, fine-tuning, evaluation, RAG and agents. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,713 | Lightweight knowledge base for people and agents, with fast indexing. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 332 | Turns documents into a readable Markdown wiki that answers with citations. It claims 63% fewer LLM tokens, but the benchmark is self-reported. |
| [YOLOW92/pagesift](https://github.com/YOLOW92/pagesift) | Rust | 314 | Local-first ingestion engine covering HTTP/browser capture and PDF/Office/OCR parsing, with evidence-grounded context. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 301 | Builds knowledge graphs from documents, with every fact traceable to its evidence. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 799 | "Ontology-augmented generation" for agents. Small, but it points at graph-style alternatives to plain RAG. |

## 3. Trend Signal Analysis

**Agent skills dominate.** Skill bundles are the clearest explosive category on today's list: [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) (+1,615), [superpowers](https://github.com/obra/superpowers) (+916), [diagram-design](https://github.com/cathrynlavery/diagram-design) (+731), [last30days-skill](https://github.com/mvanhorn/last30days-skill) (+664), [stitch-skills](https://github.com/google-labs-code/stitch-skills) (+311) and [app-store-compliance](https://github.com/mjmirza/app-store-compliance) (+531). Many are packaged for several agents at once (Claude Code, Codex, Cursor, Gemini CLI, Copilot, Pi). That points to a de facto cross-agent skills standard.

**New directions:**
- **Making software agent-native.** [CLI-Anything](https://github.com/HKUDS/CLI-Anything) and MCP wrappers (x64dbg, FFmpeg, CAD) turn existing tools into agent-callable ones.
- **Cost and context control for coding agents.** TokenEconomizer, aoci-code and agy-fast treat token spend and repo memory as first-class problems.
- **Agents operating phones and devices.** pinky, esp32-iphone-agent and Mika (Android) all do this.
- **Plan pooling and failover.** magpie combines several paid subscriptions behind one agent interface.

**Ecosystem context.** Many projects position themselves as open alternatives to "Grok Bot" or as harnesses for DeepSeek (the "dsh" family). That suggests agent products from large vendors are being cloned quickly. Several of these repos advertise Claude Opus 5.5, DeepSeek V4.1 and Kimi K3, so expect new model releases to spawn plugin ecosystems within days. Plugin specs from Cursor and Google's Stitch show the incumbents formalizing extension points.

**Data quality.** The topic-search star counts, and the cluster of "dsh" repos with huge counts, look manipulated or at least unreliable. Weigh today's gains and README substance over totals.

## 4. Community Hot Spots

- **Cross-agent skill packaging.** [superpowers](https://github.com/obra/superpowers) and [stitch-skills](https://github.com/google-labs-code/stitch-skills) show how to ship one skill across many agents. Tooling like [loadout](https://github.com/migsilva89/loadout) is needed to audit what is loaded.
- **Agent-native interfaces to existing software.** [CLI-Anything](https://github.com/HKUDS/CLI-Anything) and [ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) are the pattern to watch. Deterministic CLI/MCP surfaces beat screen-driving.
- **Agent cost and memory management.** [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) and [aoci-code](https://github.com/aoci-spec/aoci-code) address two of the biggest practical complaints about coding agents.
- **Small-scale LLM training for learning.** [minimind](https://github.com/jingyaogong/minimind) is a low-cost path to understanding the full training stack.
- **Vertical ops agents.** [opensre](https://github.com/Tracer-Cloud/opensre) shows agents moving into CI/CD reliability, where outputs can be checked against real pipeline results.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
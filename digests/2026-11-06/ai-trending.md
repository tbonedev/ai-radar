# AI Open Source Trends 2026-11-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-06 14:45 UTC

---

# AI Open Source Trends Report, 2026-11-06

Two caveats about the data:
- Trending entries show total stars as 0, which is a scrape artifact. I show "n/a" for those and give only today's gain.
- Several topic-search repos show very large star counts for apparently brand-new projects (for example a 63k-star "free model plugin"). I treat those counts as weak or possibly inflated signals.

## 1. Finds

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** (+2,524 today): A coding-agent skill that runs a multi-phase security audit and emits independently verified, machine-readable findings. It suits teams who want an agent to audit a codebase without drowning in unverified, hallucinated vulnerability reports. The separate verification step is the interesting design choice.
- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** (+2,005 today): A Python framework that builds a semantic, graph-based reasoning layer over your data, so an LLM generates queries deterministically from the ontology instead of guessing. It fits anyone doing text-to-SQL or graph retrieval who is fighting inconsistent query generation. The NVIDIA name explains part of the spike, so check whether it ships real examples before adopting it.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that gives coding agents compact code signatures instead of whole file bodies (claimed 74.7% fewer bytes). It also reports blast radius and tests-to-run after a change. It suits people whose agents burn context reading repos. The numbers are self-reported.
- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)**: A long-term memory runtime that uses plain Markdown as the source of truth, with local ranked retrieval and a background "sleep-time" cleanup layer. Claude Code and Codex share one store, and it needs no API key. It suits anyone who wants inspectable, git-friendly agent memory across tools.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: Black-box cost control for coding agents that learns from past experience, so it does not need to modify the agent. It suits teams with large agent bills who cannot change the agent internals. It is research-flavored, so verify the savings on your own workload.
- **[qybaihe/bla](https://github.com/qybaihe/bla)**: A "poison, exhaust, hallucinate" defense that tries to make binaries, Electron apps and JS bundles hard for AI reverse-engineering agents to analyze. It suits vendors worried about agent-driven RE. It is a novel adversarial direction, but effectiveness claims are unproven and an arms race is likely.

**Hype and empty-shell watch:**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) promises unlimited free frontier models with no key, which is a red flag for proxying or abuse.
- [deeplethe/utopia](https://github.com/deeplethe/utopia) calls itself the "world's first open-source enterprise world model", a claim that needs scrutiny.
- Several "Grok Bot alternative" repos ([milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot), [elie222/rakazo](https://github.com/elie222/rakazo)) look like fast-follow clones.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,527 | Zero-dependency CLI and MCP server that gives agents code signatures plus blast-radius and test-selection checks. Claims 74.7% fewer bytes than sending bodies. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 4,869 | Experience-driven, black-box cost control for coding agents. Worth a look if token spend is your bottleneck. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 31,105 | Menu-bar tool that routes agent CLIs to other providers' models (Codex on DeepSeek, Claude Code on Kimi). Useful for model-swapping; the star count is unusually high. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,421 | Unifies memory and history across 43 coding agents, with an MCP memory server. Handy if you switch between Claude Code, Cursor and others. |
| [migsilva89/loadout](https://github.com/migsilva89/loadout) | Swift | 103 | Shows which skills, commands, subagents, plugins and MCP servers your assistants load, with real usage. Small but addresses a real visibility gap. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 4,257 | Local-first workspace search built for both humans and agents. A Rust alternative to grep-plus-embeddings setups. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 4,641 | 42 FFmpeg tools with a machine-readable contract and an MCP server. Lets coding agents cut, caption and export video locally. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | n/a (+2,524) | Multi-phase security-audit skill with independently verified, machine-readable findings. Top gainer today, and the verification step is what sets it apart. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | n/a (+2,058) | A working engineer's personal `.agents` skills directory, shared publicly. Its popularity shows demand for practical, opinionated skill sets over generic ones. |
| [google/skills](https://github.com/google/skills) | Python | n/a (+532) | Agent Skills for Google products and technologies. An official vendor skill pack following the Anthropic skills pattern. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 3,557 | Lets a CLI agent pick up work in the background and follow it through. It only pings you with a decision card when it is unsure. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,625 | Lets a team's coding agents talk to each other. Early, but it targets multi-agent coordination across developers. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,429 | Command center for running many coding agents across many machines. Extends beyond code into CAD, circuits and robotics. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,802 | Infrastructure for continually self-improving agents. Ambitious claim; check for benchmarks. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,559 | Lets a vision model operate a real iPhone using a $7 ESP32 for AirPlay "eyes" and USB HID "hands". Needs no Mac, developer account or jailbreak. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,834 | Open-source AI office suite (docs, sheets, slides, PDF) with a CLI that lets Claude Code, Codex and Cursor edit real .docx/.xlsx/.pptx files locally. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,946 | Local-first conversational video editor with a multi-track timeline, Agent Skills, MCP and Remotion rendering. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 7,330 | On-device Android agent that operates apps and the web for you. Interesting for mobile automation. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 6,998 | Mac-notch and iPhone companion that monitors Claude Code, Codex, Cursor and Gemini CLI. You can approve actions from the Lock Screen. |
| [Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth) | Python | 6,221 | Agent skill that geolocates a photo using OpenStreetMap, elevation skylines, satellite imagery and street view, and shows its work. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,463 | Social-media agent that finds trends, drafts content, publishes to Xiaohongshu, Douyin, Zhihu and Bilibili, and learns what works. |
| [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder) | Python | 9,464 | Skills and an MCP setup that let Claude Code reverse-engineer and mod PC games you own. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 5,700 | Records your screen work and uses the Copilot SDK to turn it into a reusable skill. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 3,639 | Open-source document-parsing model claiming SOTA accuracy and speed, with an RSI loop in post-training. One of the few actual model releases today. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,436 | Ollama-style server for "decision models", serving 29 model families behind one API. Niche, and tied to the Jev ecosystem. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 80 | Local LLMs that read and think while you type. Tiny and early. |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | JavaScript | 63,571 | Plugin promising free, unlimited DeepSeek V4.1 Flash and Kimi K3 with no key. The star count and the "free, unlimited" claim both look suspicious, so treat it with caution. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | n/a (+2,005) | Graph-based semantic layer that supports deterministic query generation and better context retrieval. A strong sign that ontology and knowledge-graph approaches are returning. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,309 | Markdown-first agent memory with local ranked retrieval and a sleep-time manage layer. Shared across Claude Code and Codex. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 801 | Ontology-augmented generation for agents. It is on the same ontology trend as auto-ontology. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 255 | Turns documents into a readable Markdown wiki that answers with citations and works with Ollama. Claims 68% fewer tokens (self-reported). |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,866 | Git-versioned map of your codebase and DB schema, served over MCP, that agents read before editing. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,597 | Multimodal parsing engine plus an ontology-driven, LLM-wiki-style knowledge engine. |
| [ArihantDeva/heimdall](https://github.com/ArihantDeva/heimdall) | JavaScript | 137 | Lightweight CPU-only memory with ranked retrieval. Small, but fits the local-first trend. |

## 3. Trend Signal Analysis

**Skills are the breakout format.** Three of the four AI repos on the trending list are agent skills: [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill), [mattpocock/skills](https://github.com/mattpocock/skills) and [google/skills](https://github.com/google/skills). Each gained between 500 and 2,500 stars in a day. Skills have become the standard way to ship expertise to coding agents. Vendors (Google, Cloudflare, Microsoft) now publish official packs, and the topic list is full of vertical skills for logos, charts, FFmpeg, geolocation and game modding. The skill, not the model, is increasingly the unit of distribution.

**Memory and context economy.** Several projects attack the same problem from different sides. [agent-memory](https://github.com/tigerless-labs/agent-memory) and [deja-vu](https://github.com/vshulcz/deja-vu) handle cross-agent memory. [ripwire](https://github.com/redhat-et/ripwire) and [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) cut token use. The common thread is agents that share state across tools (Claude Code, Codex, Cursor) via Markdown files or MCP.

**New directions.**
- Ontology and knowledge-graph layers ([auto-ontology](https://github.com/NVIDIA/auto-ontology), [carrel](https://github.com/FengZhenfei/carrel)) are appearing as an alternative to pure vector RAG.
- Defensive tooling against AI agents ([bla](https://github.com/qybaihe/bla)) is an early sign of adversarial dynamics.
- Model-routing menu-bar tools ([magpie](https://github.com/yetone/magpie)) reflect a multi-model, cheap-model workflow, with DeepSeek and Kimi named repeatedly.

**Caution.** Many topic-search star counts look anomalous for new repos, and repeated "Grok Bot alternative" and Jev-ecosystem projects suggest coordinated promotion. Weight the trending-list gains and concrete technical claims more heavily than totals.

## 4. Community Hot Spots

- **Verified-output agent skills** ([security-audit-skill](https://github.com/cloudflare/security-audit-skill)): Separating finding from verifying is a reusable pattern for any skill that produces claims.
- **Ontology-grounded retrieval** ([auto-ontology](https://github.com/NVIDIA/auto-ontology), [carrel](https://github.com/FengZhenfei/carrel)): Worth evaluating if embedding retrieval gives you inconsistent answers over structured data.
- **Cross-agent memory and context compression** ([agent-memory](https://github.com/tigerless-labs/agent-memory), [ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code)): This is practical tooling for multi-agent daily use.
- **Agent supervision and mobile approval** ([coucou](https://github.com/Louis-CFM/coucou), [agent-autoloop](https://github.com/KKKKhazix/agent-autoloop), [openharness](https://github.com/autonomous-ai/openharness)): Tools for running agents unattended and approving only the risky steps.
- **Local-first agent tool servers** ([ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill), [zvec-grep](https://github.com/zvec-ai/zvec-grep)): Deterministic local tools exposed over MCP, with no cloud or API key.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
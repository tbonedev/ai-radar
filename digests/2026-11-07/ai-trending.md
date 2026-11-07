# AI Open Source Trends 2026-11-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-07 13:43 UTC

---

# AI Open Source Trends Report, 2026-11-07

Many of today's entries have star counts or descriptions that look odd. Several repos with tens of thousands of stars describe themselves as brand-new tools, and some trending repos show ⭐0 total. Treat the totals as unverified, and treat the "Hype check" notes below as a judgment, not a fact.

## 1. Finds

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)**: A coding-agent skill that runs a multi-phase security audit and outputs independently verified, machine-readable findings. A security or platform engineer would use it to get audit results that can be checked and fed into CI, instead of free-form LLM commentary. It had the biggest jump on the list (+2,088 today).
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that finds relevant code without reading the whole repo. It also reports blast radius, tests to run and quality deltas. It claims signatures use 74.7% fewer bytes than bodies. Engineers whose coding agents burn context on large repos should try it. The numbers are the author's own and unbenchmarked here.
- **[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)**: A context-compression plugin for very long single sessions. It claims 5x fewer tokens and works in a 100K window. People running month-long agent sessions or small-context models would use it. The claims are untested, but long-session compaction is a real pain point.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: Black-box cost control for coding agents, driven by experience (learned from past runs). Teams with large coding-agent bills would use it. It comes from Microsoft, which adds credibility.
- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)**: A long-term memory runtime that uses plain Markdown as the source of truth, with local ranked retrieval and a background "sleep-time" curation layer. Claude Code and Codex share one store, and it needs no API key. Anyone who wants inspectable, git-friendly agent memory should look at it.
- **[kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill)**: 42 FFmpeg tools exposed through an MCP server with a machine-readable contract, for cutting, captions, reframing, loudness and platform exports. It runs locally with no API keys. Developers who want agents to edit video without a cloud service would use it.

**Hype check:** Several star counts look inflated, such as 65,004 for a "free model plugin" and 53,636 for a TV debloater. Several others are variants of "Grok Bot alternative" (OpenMausBot, rakazo, AnyModelBot) with the same boilerplate pitch. I would verify these before trusting them.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,530 | A dependency-free CLI and MCP server that gives coding agents a repo map. It claims 74.7% fewer bytes than reading function bodies. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 4,928 | Cuts coding-agent cost without access to the model's internals. Worth a look given how much agent spend now matters. |
| [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | TypeScript | 0 (+185) | Compresses context so sessions can run for months in a 100K window. The claim is 5x token savings. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 31,627 | A menu-bar tool that routes agent CLIs to other providers, such as Codex on DeepSeek or Claude Code on Kimi. It addresses real model-switching friction. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+180) | A browser-automation CLI built for AI agents. It comes from a known lab, so expect it to be maintained. |
| [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) | Go | 0 (+125) | A management plane for GPU Kubernetes on bare metal. It is only loosely AI-specific, but GPU cluster operators may care. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,872 | A Git-versioned index of code and database schema, served over an MCP server. Agents read it before editing. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+2,088) | A multi-phase security-audit skill with independently verified output. It is the top mover today. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+1,111) | An engineer's personal skills directory, published as-is. Its popularity looks driven by the author's following. |
| [google/skills](https://github.com/google/skills) | Python | 0 (+449) | Official agent skills for Google products. Useful if you build against Google services. |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+386) | The public Agent Skills repository. Well known, so it is a reference rather than a discovery. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,639 | Lets a team's coding agents talk to each other. It targets multi-agent coordination. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,436 | A command center for running many agents across machines. The pitch reaches beyond code, into CAD, circuits and music. |
| [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) | TypeScript | 3,886 | Lets a CLI agent pick up work in the background and only ask you when it is unsure. It is an approval-card pattern. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,881 | An open-source office suite with a built-in agent and a CLI. It lets coding agents create real .docx, .xlsx and .pptx files. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,970 | A local-first conversational video editor with a multi-track timeline and Remotion rendering. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 7,526 | An on-device Android agent that operates apps and the web. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | Swift | 4,611 | A $7 ESP32 acts as the eyes and hands for a model to drive a real iPhone, with no jailbreak. It is a clever hardware hack. |
| [Oldcircle/geo-sleuth](https://github.com/Oldcircle/geo-sleuth) | Python | 6,390 | A skill that works out where a photo was taken, using OpenStreetMap, elevation and satellite data. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 7,034 | A Mac notch and iPhone companion that monitors coding agents and lets you approve actions from the Lock Screen. |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 16,333 (+1,986) | A "Grok Bot alternative" with a VM the bots can use. The star count and the number of similar clones suggest a hype cycle. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 3,662 | An open document-parsing model that claims SOTA accuracy and speed. Post-training uses an RSI loop. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,781 | Infrastructure for continually self-improving agents. The idea is interesting, but the description is thin. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,443 | "Ollama for decision models," serving 29 model families locally. It depends on a niche model ecosystem. |
| [Mafdet-AI/mafdet](https://github.com/Mafdet-AI/mafdet) | Python | 80 | Local LLMs that read and think while you type. It is early and small. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,310 | Markdown-based agent memory with local retrieval and sleep-time curation. Claude Code and Codex share it. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,427 | Memory across 43 coding agents, exposed through an MCP server. It addresses the fragmentation of agent history. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 888 | A self-hosted metasearch and grounding engine for agents, built on SearXNG. It has a JSON API. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 254 | Builds a readable Markdown wiki from your documents and answers with citations. It claims 68% fewer tokens. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,599 | A multimodal parsing engine plus an ontology-driven knowledge layer. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 801 | Ontology-augmented generation for agents. It has little detail beyond the pitch. |

## 3. Trend Signal Analysis

**Skills are the dominant unit of distribution.** Four of the 15 trending repos are Agent Skills collections (Cloudflare, Google, Anthropic, Matt Pocock), and the topic search is full of skill packages. Examples are FFmpeg editing, geolocation, logo design and de-AI writing. Skills are becoming the way vendors ship domain expertise to agents.

**Cross-agent portability is a design goal.** Many projects name Claude Code, Codex, Cursor, Gemini CLI and OpenCode together. Memory tools (agent-memory, deja-vu) and routers (magpie) treat the agent CLI as a replaceable layer.

**Token cost and context are a first-class concern.** ripwire, TokenEconomizer, billion-context and llm-wiki-v2 all lead with token-reduction figures. As agents run longer, efficiency is a selling point.

**New directions:** Agent oversight is appearing, such as approval from the notch or Lock Screen and cards that ask only when unsure. Verifiable, machine-readable agent output is also emerging (the Cloudflare audit). Hardware-driven phone control (the ESP32 project) is a third.

**Industry links:** The many "Grok Bot alternative" clones and "DeepSeek Harness" (dsh) projects point to ecosystem hype around a few recent product launches. I cannot verify the specifics from this data alone.

## 4. Community Hot Spots

- **Agent skills with verifiable output**: Start with [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill). Checkable findings are what separate a useful skill from a prompt.
- **Context and token efficiency for coding agents**: Try [redhat-et/ripwire](https://github.com/redhat-et/ripwire) and [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer), and benchmark them on your own repos.
- **Shared, inspectable agent memory**: [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) and [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) show a trend toward local, file-based memory shared across agents.
- **Model-routing across agent CLIs**: [yetone/magpie](https://github.com/yetone/magpie) is useful if you want to swap models behind Claude Code or Codex.
- **Human-in-the-loop oversight**: [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) and [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) are early takes on supervising background agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
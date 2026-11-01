# AI Open Source Trends 2026-11-01

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-01 13:59 UTC

---

# AI Open Source Trends Report, 2026-11-01

**Data caveat:** The Trending list shows ⭐0 for total stars on every repo, so those totals are unavailable and I show "n/a". The topic-search star counts look inflated for many brand-new repos. For example, `cleanyourtv` has 48,561 stars on a TV debloater, and `dsh-our-free-model` has 55,391. Treat those totals as unreliable, and possibly star-farmed, until the repos are inspected.

## 1. Finds

- **[deja-vu](https://github.com/vshulcz/deja-vu)**: A single Go binary that builds searchable memory from the session history your coding agents already left on disk (Claude Code, Codex, Cursor and 40+ more). It exposes the memory through local search, MCP and hooks, with no LLM calls. It suits anyone juggling several coding agents who wants cross-agent recall without a hosted service.
- **[ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that gives coding agents signature-level code maps and then checks changes (blast radius, tests to run, quality deltas). It claims signatures take 74.7% fewer bytes than bodies. It's useful if token cost on large repos is your pain, and the Red Hat ET origin adds credibility. The claim is self-reported.
- **[lightpanda-io/browser](https://github.com/lightpanda-io/browser)**: A headless browser written from scratch in Zig and built for AI and automation, not a Chromium wrapper (+827 today). It targets scraping and agent-browsing workloads where Chrome's memory footprint hurts. Check its Web API coverage before committing.
- **[tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory)**: Long-term agent memory with plain Markdown as the source of truth, local ranked retrieval and a background "sleep-time" consolidation layer. Claude Code and Codex share one store, with no API key. It's for people who want inspectable, diffable memory.
- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)**: Runs Gemma 4 26B-A4B in about 2 GB of RAM on any M-series MacBook, in Swift. If the claim holds, it's a notable MoE-offloading result for Mac users running local models.
- **[AiSOC](https://github.com/beenuar/AiSOC)**: An open-source AI security operations center with LLM-agent alert triage, MITRE ATT&CK investigation and a replayable decision ledger for every agent step. It ships an MCP server and runs without API keys. It's worth a look for security teams that need agent auditability, but verify maturity, since the repo is new and its gains are rapid (+436).

**Likely hype or empty shells:**
- [Legion-os](https://github.com/unitshaperextol/Legion-os) lists "GPT-6" and "Claude 5.5" and uses AGI marketing language.
- [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) is a bare jailbreak list.
- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) has the biggest daily gain (+3100) but no description in the data, so I can't say what it does.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Zig | n/a (+827) | A purpose-built headless browser for AI and automation. It is a non-Chromium approach aimed at lighter agent browsing. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 27,396 | A menu-bar tool that routes any agent to any model, such as Codex on DeepSeek or Claude Code on Kimi. It reflects demand for mixing harnesses and models. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,504 | A "ripgrep for AI context", delivered as a CLI and MCP server. It claims 74.7% fewer bytes via signatures instead of bodies. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,822 | A Git-versioned map of the codebase and DB schema, served over MCP, for agents to read before editing. It's local-first. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,374 | Uses ChatGPT Web (including Pro) as a model inside Codex without consuming Codex quota. It may carry terms-of-service risk. |
| [FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken) | Python | n/a (+232) | Promises datacenter-scale model serving on a desktop, running large models locally. The claim is bold, so benchmark before trusting it. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | n/a (+970) | Packages 49 agents and 72 skills into a studio-style hierarchy on Claude Code. It's a large prompt-and-skill pack for game dev. |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 10,185 (+919) | An open-source Grok Bot alternative whose bots get a virtual machine. It's rising on both lists. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 9,276 (+178) | AI coworkers that each get a browser, files and tools. Every action is gated before it runs and recorded after, and any AG-UI agent works. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,424 | Lets a team's coding agents talk to each other. It is early. |
| [autonomous-ai/openharness](https://github.com/autonomous-ai/openharness) | TypeScript | 1,405 | A command center for multiple coding agents across machines. It extends into CAD, circuits and robots. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 6,866 | A Mac-notch and iPhone companion for monitoring coding agents and approving actions from the Lock Screen. |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | TypeScript | n/a (+3100) | The top gainer today, but the data has no description. Inspect before drawing conclusions. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anomalyco/hex](https://github.com/anomalyco/hex) | Rust | n/a (+1,329) | Local-first voice dictation for macOS with on-device recognition and a Linux beta. It is one of two offline dictation tools trending today. |
| [cjpais/Handy](https://github.com/cjpais/Handy) | Rust | n/a (+383) | A free, offline, extensible speech-to-text app. It is a direct alternative to hex. |
| [beenuar/AiSOC](https://github.com/beenuar/AiSOC) | Python | n/a (+436) | An AI security operations center with an auditable decision ledger and an MCP server. It is self-hostable and needs no API keys. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,480 | An open-source office suite with a built-in agent. Its CLI and skill let coding agents edit real .docx/.xlsx/.pptx files locally. |
| [nano-muse/nanoMuse](https://github.com/nano-muse/nanoMuse) | Swift | 2,969 | A personal agent across phone, desktop and browser that asks before irreversible actions. |
| [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | Jupyter Notebook | n/a (+573) | Tutorials on LLMs, RAG and agent apps. It is a learning resource, not a tool. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | n/a (+611) | A foundation model for the "language" of financial markets. It is a domain-specific model release. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,101 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series Macs. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,432 | An "Ollama for decision models" serving 29 model families through a Jev-compatible API. The ecosystem is niche and new to me. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,784 | Infrastructure for continually self-improving agents. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+1527) | Captures what the agent does, compresses it with AI and re-injects it into later sessions. It supports Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,306 | Markdown-based memory with local ranked retrieval and a sleep-time consolidation layer. It needs no API key. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,344 | Builds agent memory from existing session history, with no LLM involved. It is one Go binary. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,545 | A multimodal parsing engine feeding an LLM-wiki-style knowledge engine. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 250 | Turns documents into a cited Markdown wiki. It claims 68% fewer tokens, which is unverified. |

## 3. Trend Signal Analysis

**Agent memory and context is the standout category.** [claude-mem](https://github.com/thedotmack/claude-mem) gained +1527 today, and at least four other repos solve the same problem ([deja-vu](https://github.com/vshulcz/deja-vu), [agent-memory](https://github.com/tigerless-labs/agent-memory), [aoci-code](https://github.com/aoci-spec/aoci-code), [ripwire](https://github.com/redhat-et/ripwire)). They share a design: local-first, no LLM or API key, and shared across Claude Code, Codex and Cursor via MCP. Memory is moving out of any single vendor's agent and into portable layers.

**A second wave is model and harness routing.** [magpie](https://github.com/yetone/magpie), [codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) and the many "DSH / DeepSeek Harness" plugins decouple the agent shell from the model behind it. That fits the heavy "Codex on DeepSeek" and "Claude Code on Kimi" interest, and cheaper frontier-class open models are driving it.

**Offline voice dictation is an unexpected hot area.** [hex](https://github.com/anomalyco/hex) and [Handy](https://github.com/cjpais/Handy) are both Rust, on-device tools. Agent-driven work leans on speech input.

**Agent skills are everywhere.** The skill topic is full of narrow packs for video, UI, geolocation, writing de-slopping and SEO. Skills have become a distribution format, but quality is uneven.

**Browsers and computers for agents** show up in [Lightpanda](https://github.com/lightpanda-io/browser), [OpenBot](https://github.com/CopilotKit/OpenBot) and [OpenMausBot](https://github.com/milind-soni/OpenMausBot). Both are VM- or browser-equipped, with action gating and audit logs. Expect the gating and ledger pattern to spread as agents get real computers.

## 4. Community Hot Spots

- **Portable agent memory over MCP:** Evaluate [deja-vu](https://github.com/vshulcz/deja-vu), [agent-memory](https://github.com/tigerless-labs/agent-memory) and [claude-mem](https://github.com/thedotmack/claude-mem) against each other. The standard for cross-agent memory is still open.
- **Token-efficient code context:** [ripwire](https://github.com/redhat-et/ripwire) and [aoci-code](https://github.com/aoci-spec/aoci-code) offer maps and signatures in place of whole files. Test the savings on your own repo.
- **Agent-native browsers:** [Lightpanda](https://github.com/lightpanda-io/browser) is worth benchmarking against headless Chrome for memory and startup cost.
- **Auditable agent actions:** [AiSOC](https://github.com/beenuar/AiSOC) (a replayable decision ledger) and [OpenBot](https://github.com/CopilotKit/OpenBot) (pre-action gating) show the governance pattern that enterprise agents will need.
- **Local inference on laptops:** [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) is worth reproducing if you run MoE models on Apple Silicon.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
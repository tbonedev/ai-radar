# AI Open Source Trends 2026-10-30

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-30 13:56 UTC

---

# AI Open Source Trends Report, 2026-10-30

Trending-list entries show `⭐0` in the input, so total stars are missing for them. I show "n/a" for those and give only today's gain. Topic-search star counts are copied as given. Several of them are implausibly high for repos this new (for example a 46k-star Android TV debloater), so treat them with caution.

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A C++23 CLI and MCP server that gives coding agents a compact map of a repo. It returns signatures instead of full function bodies (claimed 74.7% fewer bytes) and reports blast radius and which tests to run. It suits people whose agents burn context reading whole files. The size claim is the author's own and not independently verified.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**: A single Go binary that indexes the session history your coding agents already left on disk. It supports Claude Code, Codex, Cursor and about 40 others, and exposes local search through MCP and hooks with no LLM calls. It suits anyone who wants cross-session memory without a hosted service.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)**: A desktop app that records your screen while you work. It uses the GitHub Copilot SDK to turn the recording into an intent plus ordered steps, then builds a reusable Skill or Automation. It suits teams that want to turn tribal workflows into agent skills without writing them by hand.
- **[yetone/magpie](https://github.com/yetone/magpie)**: A Go menu-bar app that routes any agent CLI to any model, for example Codex on DeepSeek or Claude Code on Kimi. It suits people who like one agent's UX but want cheaper or different backends.
- **[lightpanda-io/browser](https://github.com/lightpanda-io/browser)** (+559 today): A headless browser written from scratch in Zig for AI and automation workloads, not a Chromium wrapper. It suits anyone running many scraping or browser-agent sessions who cares about memory and startup cost.
- **[JetBrains/thinkrail](https://github.com/JetBrains/thinkrail)** (+717 today): A lightweight IDE built around the `pi` coding agent, which customises itself to your workflow. It is a notable sign of an established IDE vendor moving toward agent-first tooling. The description is vague, so try it before trusting it.
- **Caution: [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks)** (+2,053 today) is a jailbreak prompt list with no language and no real code. The large star jump looks like hype rather than engineering.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,494 | Zero-dependency CLI and MCP server that gives agents repo maps, blast radius and tests-to-run. Its signatures-over-bodies approach targets context cost directly. |
| [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Zig | n/a (+559) | Headless browser built from scratch for AI and automation. A rare systems-level project in a field dominated by Chromium wrappers. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 26,048 | Menu-bar model router that lets any agent CLI run on another provider's model. It is useful for cost arbitrage and for trying new models. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,801 | Git-versioned map of a codebase and its database schema, served by a local-first MCP server. Agents read it before making changes. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Rust | n/a (+2,299) | Design vocabulary and commands (polish, bolder, critique, audit) for steering coding agents away from "AI slop" UI. The Rust label is odd for what looks like a prompt and skill set. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,094 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series MacBooks. It is a notable on-device inference result if the claim holds up. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,279 | Uses ChatGPT Web (including Pro) as a native model inside Codex, so it doesn't use Codex quota. It likely sits in a terms-of-service grey area. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+1,145) | Captures agent sessions, compresses them with AI and re-injects relevant context later. It works across Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 8,504 (+707) | AI coworkers that each get a browser, files and tools, with every action approved beforehand and logged afterward. It works with any AG-UI agent. |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 8,042 (+899) | Open-source Grok Bot alternative whose bots get a virtual machine. [elie222/rakazo](https://github.com/elie222/rakazo) (6,321) is a near-identical clone, so this looks like a copycat wave. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,336 | Lets a team's coding agents talk to each other. It is an early multi-agent coordination layer. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 4,656 | Persistent, self-improving workspace for development work that continues beyond one session. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,769 | Infrastructure for continually self-improving agents. The pitch is ambitious and the concrete details are thin. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 6,784 | Mac notch and iPhone app that monitors your coding agents and lets you approve actions from the Lock Screen. It solves a real approval-latency annoyance. |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | TypeScript | 6,386 (+717) | Lightweight IDE built around the `pi` agent that adapts to how you work. A signal of IDE vendors embracing agent-first design. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | n/a (+2,282) | Lifelong personalized tutoring system from the HKU lab behind several popular agent repos. It had one of the largest single-day gains on the list. |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | n/a (+379) | Team workspace that links email, chat, docs, tasks, calls and CRM with shared AI memory. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,361 | Open-source office suite (docs, sheets, slides) with a built-in agent and a CLI so coding agents can edit real .docx/.xlsx/.pptx files. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,401 | Local-first, model-agnostic research workbench with skills, MCP tools and Python/R execution. [synthetic-sciences/openscience](https://github.com/synthetic-sciences/openscience) (4,303) and [ai4s-research/open-science](https://github.com/ai4s-research/open-science) (2,059) are similar, so this is a crowded niche. |
| [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | Rust | 12,232 | Parametric 3D CAD in pure Rust, automatable through MCP. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 1,435 | KiCAD 10 plugin exposing 217 schematic, layout and routing tools to an LLM. |
| [onehumanbeing/esp32-iphone-agent](https://github.com/onehumanbeing/esp32-iphone-agent) | C | 4,116 | Lets a vision model operate a real iPhone using a $7 ESP32 for AirPlay capture and USB HID input. No jailbreak is needed. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) | Python | 2,631 | Open document-parsing model claiming state-of-the-art accuracy and speed, trained with an "RSI loop" in post-training. It is worth benchmarking on your own PDFs. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 7,094 | Memory-lean Gemma 4 26B-A4B inference for MacBooks. It shows how far MoE models can be squeezed on consumer hardware. |
| [ollaya-dev/ollaya](https://github.com/ollaya-dev/ollaya) | Rust | 1,420 | "Ollama for decision models" that serves 29 model families behind a Jev-compatible API. It ties into a promotional cluster (see Hot Spots). |
| [TheLastOxygen/mafdet](https://github.com/TheLastOxygen/mafdet) | Python | 76 | Local LLMs that read and think while you type. It is tiny but a novel interaction idea. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,377 | Long-term agent memory with plain Markdown as the source of truth and local ranked retrieval. It adds a sleep-time "Manage" layer, and Claude Code and Codex share one store with no API key. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,340 | Searches existing agent session history locally, with no LLM involved. A single binary covers about 40 agents. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 4,211 | Local-first workspace search for humans and agents. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,518 | Multimodal parsing engine feeding an ontology-driven, LLM-wiki knowledge base. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 250 | Turns documents into a readable Markdown wiki that answers with citations. It works with any provider, including Ollama. The 89% vs 62% routing claim is the author's. |
| [ArihantDeva/heimdall](https://github.com/ArihantDeva/heimdall) | JavaScript | 137 | CPU-only memory approach with ranked retrieval. It is small and simple. |

## 3. Trend Signal Analysis

**Agent skills and memory dominate.** The largest daily gains went to context and skills tooling: [claude-mem](https://github.com/thedotmack/claude-mem) (+1,145), [obra/superpowers](https://github.com/obra/superpowers) (+1,255), [mattpocock/skills](https://github.com/mattpocock/skills) (+882), [expo/skills](https://github.com/expo/skills) (+233) and [anthropics/skills](https://github.com/anthropics/skills) (+287). The `agent-skills` topic is full of vertical skills for video, UI design, writing and geolocation. Skills have become the packaging unit for domain expertise, and Expo shipping its own shows vendors adopting that format.

**Memory and context compression are the most active engineering area.** Ripwire, deja-vu, agent-memory, aoci-code and claude-mem all attack the same problem: agents lose or waste context. The converging design is local-first, Markdown or Git-backed, exposed over MCP, with no hosted LLM.

**Model-agnostic routing is rising.** Magpie, codex-chatgpt-web and several "dsh" (DeepSeek Harness) plugins decouple the agent UI from the model. Mentions of DeepSeek V4.1 Flash and Kimi K3 as free or cheap backends suggest cost pressure is pushing people toward mixing vendors.

**Clone waves and promotion.** At least three "Grok Bot alternative" repos appeared at once, and a cluster of "Jev / TypeSafe System One" repos looks coordinated. Some very high star counts on fresh repos are likely inflated.

**Direction to watch.** Approval and observability layers (OpenBot's decide-before, record-after model, coucou's Lock Screen approvals) show that supervising autonomous agents is becoming its own tooling category.

## 4. Community Hot Spots

- **Local-first agent memory over MCP** ([deja-vu](https://github.com/vshulcz/deja-vu), [agent-memory](https://github.com/tigerless-labs/agent-memory), [ripwire](https://github.com/redhat-et/ripwire)): several unrelated teams converged on the same design, so it is worth evaluating before you build your own.
- **Skills as the unit of distribution** ([skill-recorder](https://github.com/microsoft/skill-recorder), [mattpocock/skills](https://github.com/mattpocock/skills), [superpowers](https://github.com/obra/superpowers)): recording workflows into skills may beat hand-writing them.
- **Agent supervision and approval UX** ([CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot), [coucou](https://github.com/Louis-CFM/coucou)): human-in-the-loop controls for long-running agents are still immature.
- **Browsers built for agents** ([lightpanda](https://github.com/lightpanda-io/browser)): resource-efficient headless browsing matters once you run agents at scale.
- **Treat promotional clusters with skepticism** (the Jev repos such as [awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools), the Grok-clone wave, and the [jailbreaks list](https://github.com/togg53192-cmd/jailbreaks)): verify the code before building on them.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
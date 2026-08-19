# AI Open Source Trends 2026-08-19

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-19 07:34 UTC

---

# AI Open Source Trends Report — 2026-08-19

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that indexes the session logs 18 different coding agents already write to disk (including sessions from before you installed it) and makes them recallable across tools. No LLM, no embeddings — pure log-mining. Worth trying for anyone juggling multiple CLI agents (Claude Code, Codex, Cursor, etc.) who wants continuity without standing up a vector store.

- **[jundot/omlx](https://github.com/jundot/omlx)** — An LLM inference server for Apple Silicon with continuous batching and SSD-backed caching, managed from a macOS menu-bar app. Concrete niche: Mac users running local models who want server-grade batching without a GPU box or a terminal window open.

- **[elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine)** — A local MCP server that indexes a codebase so agents search an index instead of re-reading files, claiming a 94% cut in coding-session token spend. If the number holds up under real use it's a meaningful cost lever for anyone running Claude Code/Copilot/Cursor against large repos; treat the 94% figure as a claim to verify, not a given.

- **[AndrewDryga/emisar](https://github.com/AndrewDryga/emisar)** — An Elixir-built MCP that lets AI tools write IaaS code and debug production issues through an approval gate, aimed at letting security teams sign off before an agent touches infrastructure. Useful for teams that want agent-assisted ops without giving an LLM unsupervised prod access.

- **[Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet)** — A zero-dependency, Python-stdlib-only, git-backed micro-lesson library that lets agents asynchronously share verified debugging experience with each other. Small and unglamorous, but a genuinely different idea (shared agent "war stories" via git) rather than another memory-as-vector-DB pitch.

- **Caution flag**: [nexu-io/open-design](https://github.com/nexu-io/open-design) claims 89,081 stars and [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) claims 12,208 stars — both from low-visibility accounts with topic-search-only presence (absent from the daily Trending list despite the star count, and no matching "today" delta). These numbers read as inflated/bot-driven rather than organic; treat both skeptically until corroborated elsewhere.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jundot/omlx](https://github.com/jundot/omlx) | Python | +370 today | Continuous-batching, SSD-caching LLM inference server for Apple Silicon, run from the menu bar. Notable for targeting Mac-native local inference rather than the usual Linux/CUDA path. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 15,806 | A 20 MB cross-platform client for 80+ databases with a built-in AI assistant and MCP server bundled in. Broad DB coverage plus native MCP exposure is a rare combination in one lightweight binary. |
| [elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine) | Python | 397 | Local MCP server that indexes a codebase so agents search instead of re-reading files, claiming 94% token savings across Claude Code, Codex, Copilot, Cursor and Gemini CLI. Free and open source, worth a pilot on a large repo. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 645 | Reads the session logs 18 coding agents already leave on disk and recalls them across tools, no LLM or embeddings required. A pragmatic, dependency-light take on cross-agent memory. |
| [AndrewDryga/emisar](https://github.com/AndrewDryga/emisar) | Elixir | 416 | MCP for AI tools to write IaaS and debug production through an approval gate, built for security teams to review before agents touch infra. Addresses the "how do we let agents near prod safely" gap directly. |
| [modelstudioai/cli](https://github.com/modelstudioai/cli) | TypeScript | 309 | Official CLI for Alibaba Cloud's Model Studio (百炼), exposing models, search and multimodal capability as structured tool calls for agent frameworks. Notable mainly as a vendor-CLI entry point into China's largest cloud AI platform. |
| [Cmochance/codex-app-transfer](https://github.com/Cmochance/codex-app-transfer) | Rust | 301 | Local desktop gateway translating OpenAI Codex CLI's Responses API into Chat Completions for Kimi, DeepSeek, Zhipu GLM, Bailian and other OpenAI-compatible providers. Useful if you like the Codex CLI UX but want to swap in a non-OpenAI backend. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 825 | Gives any AI agent the ability to code via MCP tool exposure. Thin description, worth checking scope before adopting. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Rust | +648 today | Long-term memory for agent coding CLIs designed specifically to facilitate handoff between different agent vendors. Directly tackles the "switching from Claude Code to Codex loses context" pain point. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | +213 today | Self-evolving context database unifying agent memory, knowledge RAG and skills in one store, from ByteDance's Volcengine. Backed by a major infra org, worth watching as it matures. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,040 | Meta-harness that orchestrates Claude Code, Codex, Cursor and Pi, letting you swap harnesses without rewriting workflows while enforcing sandboxing policy. Positions itself as harness-agnostic middleware rather than another single-vendor agent. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,136 | Local-first AI agent workspace spanning coding, writing, design, research and automation in one runtime, with both desktop GUI and TUI. Broad scope claim; worth checking depth vs. breadth. |
| [EverMind-AI/Raven](https://github.com/EverMind-AI/Raven) | Python | 3,563 | Memory-first, self-improving agent harness built on EverOS with MiroThinker-powered deep research and reasoning. Niche but specific angle on persistent self-improvement rather than stateless agent runs. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 3,029 | A persistent development workspace that self-improves and continues across sessions rather than resetting each run. |
| [agentlas-ai/Agentlas-OS](https://github.com/agentlas-ai/Agentlas-OS) | Python | 1,158 | Agent OS keeping specialist agents in a hub and spinning up a temporary orchestrator per task, local-first and model-agnostic. |
| [Gitlawb/zero](https://github.com/Gitlawb/zero) | Go | 1,583 | A coding agent pitched as answering to your model, your machine and your rules — emphasis on user control over vendor lock-in. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | +2,304 today | Generates HD short videos from a topic or keyword via an automated AI workflow, today's single biggest gainer on the Trending list by a wide margin. Momentum suggests strong pickup in the short-video-automation niche. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 1,252 | Open-source, local-first conversational AI video editor with a professional multi-track timeline, Agent Skills and MCP integration, rendered via Remotion. A genuinely full-featured open alternative in a space dominated by closed tools. |
| [Eynzof/Hermes-CN-Desktop](https://github.com/Eynzof/Hermes-CN-Desktop) | TypeScript | 1,569 | Windows-first desktop app (Tauri + TS + Rust) wrapping the Hermes agent core in a localized CN build. Notable as a packaging/localization play rather than a new agent design. |
| [deer-flow/llm-space](https://github.com/deer-flow/llm-space) | TypeScript | 1,652 | Desktop app to prototype agent ideas, inspect every harness step and replay failures — local-first with an optional cloud path for managed agents. Positions itself as a debugging/observability tool for agent builders specifically. |
| [Stack-Cairn/LiveAgent](https://github.com/Stack-Cairn/LiveAgent) | TypeScript | 1,786 | Fully functional AI agent desktop client with web UI access, built to be customized and extended. |
| [powerycy/goutoujunshi](https://github.com/powerycy/goutoujunshi) | Python | 2,310 | A Codex-based relationship-advice agent combining psychology, legal and social knowledge bases — an unusually specific consumer vertical for an agent framework. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,164 | Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. If accurate, a striking memory-efficiency result for on-device inference of a 26B-parameter MoE model. |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,143 | A text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits and validation-gated updates, producing deployable `best_skill.md` artifacts. Notable for optimizing prompts/skills rather than weights — a Microsoft-backed entry in the "train the skill, not the model" direction. |
| [opensquilla/opensquilla](https://github.com/opensquilla/opensquilla) | Python | 6,612 | Token-efficient AI agent aiming for higher intelligence density on the same budget. Thin description; the concrete mechanism isn't stated, so treat the claim as unverified until documented. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Jupyter Notebook | 907 | 30 runnable notebooks covering conversation buffers, vector stores, knowledge graphs, episodic/semantic memory, MemGPT, Mem0, Letta, Zep, Graphiti and LoCoMo benchmarks. A genuinely useful reference set for anyone comparing agent-memory approaches hands-on rather than reading marketing copy. |
| [future-agi/future-agi](https://github.com/future-agi/future-agi) | Python | 1,712 | Open-source, self-hostable platform for evaluating, observing and improving LLM/agent apps — tracing, evals, simulations, datasets, gateway and guardrails in one Apache-2.0 package. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,026 | AI equity-research agent using pgvector RAG, Redis Lua single-flight for resilience, versioned reports and evidence tracing. A well-specified vertical RAG application with real engineering detail (not just a wrapper). |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 376 | Turns local files into searchable context for AI agents — a lightweight, focused take on local RAG without a full vector-DB deployment. |
| [ongridio/ongrid](https://github.com/ongridio/ongrid) | Go | 732 | Ops AI agent that understands your infrastructure, finds root causes and fixes issues from Slack, Telegram, Lark or DingTalk. |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | Python | 141 | China A-share data infrastructure covering pricing, research reports, capital flow, filings and more — 42+ datasets, self-hosted, MCP-native, zero registration. Narrow but deep domain-data project for anyone building China-market financial agents. |

## 3. Trend Signal Analysis

Today's data shows the center of gravity has moved decisively from "build another agent framework" to **agent infrastructure plumbing**: memory/context persistence (`ai-memory`, `OpenViking`, `deja-vu`, `MisakaNet`, `Compartment`, `caura`), cross-harness interoperability (`omnigent`, `metaharness`, `claudexor`, `codex-app-transfer`), and token-cost reduction (`code-context-engine`'s 94% claim, `opensquilla`). This suggests the market has enough agent *runtimes* now and is racing to solve the boring-but-hard problems of making them remember things, talk to each other, and stay affordable — a maturity signal rather than a novelty signal.

A second cluster is **Claude Code / Codex skill packages** — cybersecurity (817 skills), book-to-skill converters (two independent forks), job-hunting skills, novel-writing skills, cinematic video skills. The "agent skills" format (`agentskills.io`) is clearly becoming a distribution unit in its own right, decoupled from any single vendor's harness, with `microsoft/SkillOpt` even treating skill text as an optimizable artifact rather than a static prompt.

China-origin projects are unusually dense in this data (Volcengine, Alibaba, DeepSeek-ecosystem tools, multiple A-share/RAG financial agents), suggesting active build-out of domain-specific agent infra independent of the US ecosystem, likely accelerated by DeepSeek's continued momentum as a base model.

Finally, watch for star-count anomalies: several topic-search results show stars in the tens of thousands with no corresponding appearance on the daily Trending list or "+today" delta — a pattern consistent with inflated or purchased stars rather than organic adoption, and worth discounting when scanning GitHub Search results for genuine signal.

## 4. Community Hot Spots

- **Cross-agent memory portability** — `ai-memory`, `deja-vu`, and `OpenViking` all attack the same problem (context surviving a switch between Claude Code/Codex/Cursor/etc.) from different angles; worth watching which approach wins adoption.
- **Token-efficiency tooling** — `code-context-engine`'s 94% token-savings claim, if it holds up, addresses the single biggest recurring complaint about agentic coding at scale.
- **Agent Skills as a distribution format** — skill-package repos (cybersecurity, book-to-skill, job-hunting, novel-writing) are proliferating independent of any one harness, and `SkillOpt` treats skills as a trainable artifact — a space worth tracking for standardization.
- **On-device inference efficiency** — `omlx` (Apple Silicon inference server) and `turbo-fieldfare` (Gemma 4 26B in ~2GB RAM) both push local-inference density further than typical local-LLM tooling.
- **Governed multi-agent memory** — `caura` (trust tiers, keystone policies, audit trails for shared agent-fleet memory) signals growing attention to memory *governance*, not just storage, as agent fleets scale within organizations.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Open Source Trends 2026-09-30

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-30 13:17 UTC

---

# AI Open Source Trends Report: 2026-09-30

## 1. Finds

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**: This is a document index for "vectorless" RAG. An LLM reasons over a hierarchical index of the document instead of doing embedding similarity search. It suits anyone building Q&A over long PDFs, such as filings or manuals, where chunking and vector search lose structure. It gained +1,095 stars today.
- **[NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)**: A Rust runtime that sandboxes autonomous agents with a focus on safety and privacy. Teams that want to give agents shell access without giving them the whole machine would use it. The vendor backing makes it more credible than most sandbox projects, though the data doesn't show how mature it is (+1,280 today).
- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)**: It pre-indexes a codebase into a local knowledge graph that auto-syncs on changes. Claude Code, Codex, Gemini, Cursor, OpenCode and others can query it instead of grepping repeatedly. It fits people burning tokens on repo exploration in large codebases. It runs 100% local (+116 today).
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that acts as "ripgrep for AI context". It returns signatures and blast-radius/tests-to-run info rather than whole file bodies, and claims 74.7% fewer bytes than bodies. It suits coding-agent users who want cheaper context. It comes from Red Hat's emerging-tech group and has 2,375 stars.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**: A single Go binary that searches session history already on disk from Claude Code, Codex, Cursor and 32 more agents, with no LLM involved. It is useful if you switch between agents and want to find "that conversation from last week". It has 1,101 stars.
- **[tigerless-labs/cost-xray](https://github.com/tigerless-labs/cost-xray)**: It shows what Claude Code and Codex actually send to the API and what each part costs. Anyone puzzled by their agent bills would want it, and it is easy to try. It has 3,244 stars.

**Hype watch:** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) (17,925 stars) pitches "clone any viral video" and face-swapping at scale. That is aimed at engagement farming and has obvious misuse potential. [ponytail](https://github.com/DietrichGebert/ponytail) (+675) appears to be a prompt or ruleset with a catchy pitch rather than a technical advance. [mindscale-noah/MindMemOS](https://github.com/mindscale-noah/MindMemOS) has 1,002 stars and no description, so I can't say what it is.

## 2. Top Projects by Category

Total stars are shown as n/a for trending-only repos because the input reported 0 for them.

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | C | n/a (+116) | Local, auto-syncing code knowledge graph for many coding agents. It aims to cut tokens and tool calls. |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | TypeScript | n/a (+88) | Sandboxes tool output, claiming a 98% reduction, and persists session memory across 17 platforms via MCP and hooks. It targets context-window bloat directly. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,375 | C++23 CLI and MCP server that gives agents signatures and blast-radius data instead of file bodies. It reports 74.7% fewer bytes. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,697 | Provider proxy that lets Codex CLI and Claude Code use other models such as Gemini, DeepSeek and Ollama. It reflects the demand to decouple harnesses from model vendors. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 12,970 | Uses ChatGPT Web, including Pro, as a model inside Codex without consuming Codex quota. The high star count is notable, but it depends on web-session behavior that may be fragile. |
| [tigerless-labs/cost-xray](https://github.com/tigerless-labs/cost-xray) | Python | 3,244 | Inspects the API payloads that Claude Code and Codex send and breaks down cost per part. It is a practical token-cost debugging tool. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 3,519 | Menu-bar tool for pointing each agent at any model, such as Codex on DeepSeek or Claude Code on Kimi. It is another sign of the model-swapping trend. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | n/a (+1,133) | A 25 MB database client for 100+ databases with a built-in AI assistant, MCP server and CLI. AI is a feature here rather than the core product. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | Rust | n/a (+1,280) | Safe, private runtime for autonomous agents. It has the day's second-largest agent-related star gain. |
| [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | TypeScript | n/a (+622) | Harness that runs Claude Code and Codex together as one system. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,364 | Meta-harness that orchestrates Claude Code, Codex, Cursor and Pi, with policy and sandboxing. It lets you swap harnesses without rewrites. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 681 | Scaffolds a branded agent harness with its own npx CLI, MCP server, memory and signed releases. It is small but notable in the "harness" trend. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 677 | Self-hosted agent runtime and MCP bridge with sandboxed sessions, audit and replay. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,375 | Patterns and CLI tools (loop-audit, loop-init, loop-cost) for loop-style agent orchestration. It looks pattern-heavy, so check for substance. |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | TypeScript | n/a (+136) | Already-established general agent project, listed for reference. It is not a new find. |
| [umacloud/umadev](https://github.com/umacloud/umadev) | Rust | 259 | Coding agent that commands your existing Claude Code, Codex or OpenCode like a dev team. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | n/a (+3,481) | Local ElevenLabs alternative covering cloning, dubbing, transcription and audiobooks, and claiming 646 languages. It had today's biggest gain, but verify the language claim. |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | TypeScript | n/a (+352) | Write HTML and render video, built for agents. A vendor-backed take on agent-driven video. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | n/a (+338) | Generates short videos from a topic or keyword. It is well established and resurging. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,210 | Open-source office suite with a built-in agent. Its CLI and skill let coding agents create real .docx, .xlsx and .pptx files. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,061 | Local-first conversational video editor with a multi-track timeline, MCP and Remotion rendering. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 9,985 | Video skill for Claude Code and Codex with 152 shot recipes for Remotion. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,310 | Local-first desktop research workbench with skills, MCP tools, and Python/R execution. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,845 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series MacBooks. If the claim holds, it is a strong result for on-device MoE inference. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 694 | Fast, exact decoding on Apple Silicon (MLX) behind an OpenAI-compatible endpoint. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,680 | Open-source book that derives LLM inference and training system design quantitatively from hardware constraints. It is a reference rather than a tool. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 7,971 | Claims to be the "first open-source enterprise world model". The description is thin and the claim is bold. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | n/a (+1,095) | Vectorless, reasoning-based RAG built on document indexes. It challenges the embedding-first default. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,101 | Searchable history of 30+ agents' sessions from local files, with no LLM. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 740 | Git-native agent memory implementing OKF v0.2 with BM25 search and an embedded MCP server. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 294 | Local SQLite episodic memory shared across Claude Code, Codex, Copilot CLI and OpenCode. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 582 | Encrypted, fully offline agent memory with a GUI memory map. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,355 | AI-native markdown IDE and LLM wiki. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 683 | Git-versioned map of code and database schema, served through MCP so agents read it before making changes. |

## 3. Trend Signal Analysis

The main pattern is that tooling around coding agents is drawing more attention than new models or agents. Three layers stand out.

- **Context and memory.** codegraph, context-mode, ripwire, deja-vu, okf-agent-memory, engrim and Compartment all try to give agents better context for fewer tokens. Several report concrete reductions (98%, 74.7%, 80%). The shared assumption is that wasted context is the main cost and quality bottleneck.
- **Harness and provider decoupling.** openrig, omnigent, metaharness, opencodex, magpie and codex-chatgpt-web treat Claude Code and Codex as interchangeable parts. They route other models into those harnesses or run several harnesses together. "Meta-harness" is a new label that recurs in the data.
- **Sandboxing and governance.** OpenShell, sandbase-harness and OpenBot focus on policy, audit and isolation. This suggests teams are moving from trying agents to running them with real permissions.

There are two secondary signals. First, a "vectorless RAG" alternative (PageIndex) is trending against embedding pipelines. Second, local-first is everywhere, including VoiceStudio and the on-device Gemma 4 inference in turbo-fieldfare. The skills ecosystem also continues to grow, with mattpocock/skills at +736 and the awesome-claude-skills list at +118.

Two caveats. Many topic-search star counts look high for repos with thin descriptions, so treat them with caution. Several repos with names like "dsh" seem tied to a DeepSeek harness ecosystem, which I can't verify from this data.

## 4. Community Hot Spots

- **Agent context tooling** ([codegraph](https://github.com/colbymchenry/codegraph), [ripwire](https://github.com/redhat-et/ripwire), [context-mode](https://github.com/mksglu/context-mode)): These are cheap to try and their token savings are easy to measure on your own repo.
- **Agent sandboxes** ([OpenShell](https://github.com/NVIDIA/OpenShell), [sandbase-harness](https://github.com/sandbaseai/sandbase-harness)): Watch for whether NVIDIA's approach becomes a de facto standard runtime.
- **Vectorless RAG** ([PageIndex](https://github.com/VectifyAI/PageIndex)): Worth benchmarking against your current embedding pipeline on long structured documents.
- **Multi-harness orchestration** ([omnigent](https://github.com/omnigent-ai/omnigent), [openrig](https://github.com/mvschwarz/openrig)): Useful if your team uses more than one coding agent.
- **On-device large-model inference** ([turbo-fieldfare](https://github.com/drumih/turbo-fieldfare), [TensorFold](https://github.com/ashhart/TensorFold)): Validate the memory and speed claims on your own hardware before relying on them.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
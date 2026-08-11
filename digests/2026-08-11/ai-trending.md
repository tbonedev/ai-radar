# AI Open Source Trends 2026-08-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-11 08:07 UTC

---

## AI Open Source Trends Report — 2026-08-11

### 1. Today's Highlights

The trending list is dominated by autonomous coding and agent-harness projects: **PrimeIntellect-ai/prime-agent** leads with +2,642 stars today for its self-improving RLM coding agent, while **firecrawl/firecrawl** (+835) and **Comfy-Org/ComfyUI** (+922) show sustained demand for web-context APIs and diffusion tooling respectively. The "Agent Skills" ecosystem continues to consolidate — **addyosmani/agent-skills**, **affaan-m/ECC**, and a cluster of "awesome-*-skills" curation repos all rank highly in topic search, signaling that skill/plugin compatibility across Claude Code, Codex, Cursor, and Gemini CLI has become a competitive surface. The Model Context Protocol (MCP) ecosystem remains one of the deepest categories by repo count, with official SDKs, dev-tool bridges (Chrome DevTools, Unity, Xcode), and specialized servers (code search, memory, GitHub) all active. DeepMind's **weathernext** trending today (+325) is a reminder that large-model techniques continue to expand well beyond chat/agent use cases into scientific domains. Financial and vertical-specific multi-agent frameworks (e.g., **TradingAgents**) are a small but notable emerging niche.

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,246 | Local runtime for running Kimi, GLM, DeepSeek, Qwen, and other open models with a single command. Remains the default on-ramp for self-hosted LLM inference. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 165,395 (+835 today) | Context API for search, scrape, and web interaction at scale, purpose-built for agent pipelines. Strong same-day momentum reflects growing demand for reliable web-context ingestion. |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | 200,181 | Fair-code workflow automation platform with native AI nodes and 400+ integrations. A go-to backbone for teams wiring LLMs into existing business processes. |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | TypeScript | 106,453 | Open-source terminal agent bringing Gemini directly into developer workflows. Continues to anchor the "AI CLI" category alongside Claude Code and Codex. |
| [oraios/serena](https://github.com/oraios/serena) | Python | 27,841 | MCP toolkit providing semantic code retrieval and editing — effectively an IDE layer for coding agents. Popular as a drop-in upgrade over grep-based agent tooling. |
| [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | Python | 27,168 | Pythonic framework for building MCP servers and clients quickly. A key enabler for the rapid proliferation of MCP servers seen across today's topic search. |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | Go | 32,133 | GitHub's official MCP server, giving agents first-party access to repos, issues, and PRs. Reinforces GitHub's role as core infrastructure for agent-driven dev workflows. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 48,892 | Exposes Chrome DevTools capabilities to coding agents for browser inspection and debugging. Reflects the trend of bridging existing dev tooling into the MCP standard. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,319 | Agent-harness performance optimization system covering skills, instincts, memory, and security across Claude Code, Codex, and OpenCode. One of the highest-starred repos in today's data, underscoring appetite for harness-level tuning. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 228,663 | General-purpose autonomous agent framework positioned as "the agent that grows with you." Its scale signals strong community investment in long-running, adaptive agents. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,507 | One of the original autonomous-agent projects, still actively maintained as an accessible platform for building on agentic AI. Remains a benchmark reference point for the category. |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | 0 (+2,642 today) | Self-improving RLM agent for coding workflows and long-running autonomous tasks. Today's single largest star gain across all tracked repos, suggesting a breakout launch. |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | TypeScript | 67,611 | Multi-agent "meta-harness" for deploying coordinated agent swarms with adaptive memory and RAG integration. Natively integrates with Claude Code, Codex, and Hermes. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,716 | Makes websites accessible to AI agents for automated online task execution. A foundational building block for browser-operating agents. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0 (+1,349 today) | A packaged "AI agency" of specialized sub-agents (frontend, community, QA, etc.), each with defined personas and deliverables. Strong daily star velocity for a niche multi-persona agent template. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0 (+177 today) | Multi-agent LLM framework specialized for financial trading decisions. Represents the growing trend of vertical-specific agent frameworks beyond general coding/chat use cases. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Python | 0 (+922 today) | Modular diffusion-model GUI, API, and backend with a graph/nodes interface. Strong today's-star gain reflects continued momentum in the generative-image/diffusion tooling space. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,444 | User-friendly web interface supporting Ollama, OpenAI API, and other backends. A default front-end choice for self-hosted LLM deployments. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,265 | AI productivity studio offering smart chat, autonomous agents, and 300+ assistants with unified access to frontier LLMs. Positions itself as an all-in-one consumer-facing AI workspace. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,539 | Generates short-form HD video content automatically from a topic or keyword via an AI workflow. A high-star example of AI applied to content/media production pipelines. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 46,456 | Multi-channel, multi-model AI assistant/agent harness (formerly chatgpt-on-wechat) that self-evolves with memory and tool use. Long-running project with continued relevance in the assistant-app space. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | TypeScript | 31,841 | 24/7 "cowork" desktop app unifying 20+ CLI agents (OpenClaw, Hermes, Claude Code, Codex) under one customizable interface. Reflects demand for agent-orchestration UIs as the number of CLI agents multiplies. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,930 | Foundational open-source ML framework, still one of the highest-starred repos in the ecosystem. Anchors the category despite the shift in mindshare toward PyTorch-based tooling. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,577 | The dominant model-definition framework for state-of-the-art text, vision, audio, and multimodal models. Core dependency across nearly every downstream LLM/agent project. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,304 | Core tensor/neural-network library with GPU acceleration, underpinning most modern model training stacks. Continues as essential infrastructure rather than an application-layer trend. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,361 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch, popular as an educational reference. High star count signals continued strong developer interest in first-principles LLM understanding. |
| [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | Python | 0 (+325 today) | DeepMind's ML-driven weather forecasting model appearing on today's trending list. Notable as a reminder that LLM/ML techniques are actively expanding into scientific forecasting domains. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,549 | Trains a 64M-parameter LLM from scratch in about 2 hours, aimed at democratizing hands-on model-training experience. A popular entry point for engineers wanting full-stack LLM training exposure. |

#### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 152,055 | Platform for building agentic workflows and RAG pipelines on one collaborative workspace, deployable cloud or self-hosted. Continues to be a leading production-oriented RAG/agent platform. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,943 | The most widely adopted agent-engineering platform, still a default reference implementation for RAG and agent composition. Its scale keeps it central to the retrieval-augmented ecosystem. |
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | Python | 0 (+682 today) | RAG system purpose-built for querying and editing multi-language monorepos via knowledge graphs. Notable today's star surge suggests rising interest in codebase-specific RAG over generic vector search. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 105,097 | Turns codebases, docs, schemas, and configs into a queryable knowledge graph via local, deterministic AST parsing (no vector store required). Positions itself as a Claude Code/Cursor/Codex skill, tying RAG directly into the agent-skills trend. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,995 | Universal memory layer giving AI agents persistent, structured recall across sessions. A key building block as agent frameworks increasingly need durable state beyond a single context window. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,235 | RAG engine that fuses retrieval with agent capabilities to form a context layer for LLMs. Competes directly with Dify/LangChain in the production RAG-platform space. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,602 | High-performance, cloud-native vector database for scalable ANN search. Remains foundational infrastructure underneath most RAG stacks listed above. |

### 3. Trend Signal Analysis

Today's data points to three converging forces. First, **agent-skill standardization** is now a category of its own rather than a side feature: `addyosmani/agent-skills`, `affaan-m/ECC`, and a wave of "awesome-*-skills" curation repos all rank among the highest-starred results in topic search, indicating that compatibility across Claude Code, Codex, Cursor, Gemini CLI, and OpenCode has become a competitive axis in itself, distinct from the underlying agent frameworks. Second, **MCP has cemented itself as the default integration layer** — official SDKs, framework wrappers (FastMCP), and bridges into existing developer tools (Chrome DevTools, Unity, Xcode, Neovim) dominate the mcp-related topic buckets, suggesting the protocol has moved from novelty to infrastructure. Third, **codebase-aware RAG is emerging as a distinct sub-trend** separate from generic document RAG: `code-graph-rag` (+682 today) and `graphify` both frame themselves explicitly as coding-agent skills built on knowledge graphs and AST parsing rather than vector embeddings, hinting at a shift toward deterministic, structure-aware retrieval for dev tooling.

On the model/training side, activity is comparatively quiet — the presence of DeepMind's `weathernext` on the trending list is the most notable signal, reflecting continued diffusion of large-model techniques into scientific forecasting rather than new chat-model releases. Vertical, domain-specific agents (trading, career search, PPT generation) are a small but growing niche, suggesting the "general assistant" wave is starting to fragment into specialized products built atop common agent-harness infrastructure.

### 4. Community Hot Spots

- **PrimeIntellect-ai/prime-agent** — today's single largest star gain (+2,642); a self-improving RLM coding agent worth watching for how "self-improvement" claims hold up under scrutiny.
- **Agent Skills ecosystem** (`addyosmani/agent-skills`, `affaan-m/ECC`, `VoltAgent/awesome-agent-skills`) — the standardization battle for cross-CLI agent skills is intensifying and worth tracking for interoperability implications.
- **Codebase-native RAG** (`vitali87/code-graph-rag`, `Graphify-Labs/graphify`) — deterministic, graph-based retrieval over vector search for monorepos is gaining real traction, a meaningful architectural alternative for dev-tooling teams.
- **MCP dev-tool bridges** (`ChromeDevTools/chrome-devtools-mcp`, `CoplayDev/unity-mcp`, `getsentry/XcodeBuildMCP`) — a wave of existing developer tools being retrofitted with MCP servers signals the protocol's maturation as a universal agent-integration layer.
- **Vertical agent frameworks** (`TauricResearch/TradingAgents`) — early but notable signal of agent frameworks specializing into single-domain products rather than staying general-purpose.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
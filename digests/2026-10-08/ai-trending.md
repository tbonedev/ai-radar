# AI Open Source Trends 2026-10-08

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-08 14:20 UTC

---

# AI Open Source Trends Report — 2026-10-08

Star counts are copied from the input. The trending list reports "⭐0" for total stars, so trending-only repos show no total.

## 1. Finds

- **[morluto/rea](https://github.com/morluto/rea)** (+7,744 today): An agent-driven reverse-engineering toolkit. It covers app behavior analysis down to native binaries. Security researchers and people doing interop or compatibility work would use it. It had the biggest single-day jump on the list, but the description is a single line, so check the repo for what it actually does before relying on it.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** (2,423): A zero-dependency C++23 CLI and MCP server that gives coding agents a compact map of a repo. It says its signatures use 74.7% fewer bytes than full function bodies, and it also reports blast radius and which tests to run. Anyone whose agent burns tokens reading whole files would find it useful. The reduction figure is the project's own claim.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** (1,150): A single Go binary that builds searchable memory from the session history already on your disk. It covers Claude Code, Codex, Cursor and 35 more agents. It needs no LLM and no cloud, and it exposes search over MCP and hooks. It suits people who use several agents and want past decisions to be searchable.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** (756): Git-native agent memory in pure Go. It implements Google's OKF v0.2 spec, with in-memory BM25 search and an embedded MCP server. It needs no database, and the repo claims an 80% token reduction. It is for teams that want agent memory versioned alongside the code.
- **[yetone/magpie](https://github.com/yetone/magpie)** (6,633): A menu-bar app that routes any agent to any model, for example Codex on DeepSeek or Claude Code on Kimi. People who want to try cheaper or alternative models in their usual agent CLI would use it.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** (8,938): A portable C99 inference implementation with no BLAS and no GPU. It claims to run a 2.78T-parameter model in 8.24 GB of RAM on one CPU. That claim needs scrutiny, since it likely relies on heavy streaming or offloading and would be very slow. It is worth reading as an educational project, not a deployment path.

Likely hype or thin: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) shows 158k stars for a prompt-style "lazy senior dev" ruleset, which is out of line with its apparent substance. Treat the figure with suspicion. Several `llm-tools` repos, such as [claude-batchy-bulk](https://github.com/kanguruonline/claude-batchy-bulk) and [OmniTag-Forge](https://github.com/thyron922/OmniTag-Forge), look like SEO-style shells.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,423 | A code-context CLI and MCP server that returns signatures instead of bodies. It also reports blast radius and tests to run. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 17,111 | A provider proxy that lets Codex CLI and Claude Code use any LLM, including Gemini, DeepSeek and Ollama. It is useful for model-swapping without changing tools. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 6,633 | A menu-bar router that pairs any agent with any model. It is a practical way to cut cost. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | 1,108 | An LLM inference engine targeting Metal, CUDA and Vulkan, written in Zig. Few inference engines use that language, which makes it a niche one to watch. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,938 | A dependency-free C99 inference implementation for a very large model on CPU. Read it for the technique and verify the performance claims. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,966 | An auth gateway that connects 1500+ SaaS providers to agents via SDK, CLI, MCP and HTTP. It saves you from writing OAuth plumbing. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | (+1,163) | A skill pack of 42 diagram types that agents render as self-contained HTML and SVG. It is a Mermaid alternative aimed at agent output. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [morluto/rea](https://github.com/morluto/rea) | TypeScript | (+7,744) | Agent-based reverse engineering, from app behavior to native binaries. It had the largest daily gain here. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | (+1,770) | A set of engineering skills taken from the author's own `.agents` directory. It is a personal workflow, packaged for reuse. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,679 | A meta-harness that orchestrates Claude Code, Codex, Cursor and Pi. It adds policy and sandboxing, and lets you swap harnesses. |
| [amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills) | JavaScript | 2,333 | Hands a coding task to a separate agent CLI, then you review the diff and commit yourself. It is a simple pattern for cross-agent delegation. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 578 | A tmux TUI showing live agent status, worktrees and diff review. It suits people running several agents in parallel. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 691 | Scaffolds your own branded agent harness with an npx CLI, MCP server and memory. Its signed releases are a distinctive feature. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 704 | A local agent runtime and MCP bridge with sandboxed sessions, audit and replay. It is aimed at people who need traceability. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 6,208 | Agent coworkers that each get their own browser, files and tools. Actions are approved before they run and recorded afterward. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,947 | An open-source office suite with a built-in agent. A CLI lets coding agents create real .docx, .xlsx and .pptx files. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,205 | Records your screen work and uses the Copilot SDK to turn it into a reusable Skill. It is a notable sign of Microsoft moving into skills. |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Python | (+766) | An official plugin collection for knowledge workers in Claude Cowork. It signals that vendors are targeting non-developers. |
| [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens) | TypeScript | 1,874 | Draws animated architecture and data-flow walkthroughs inside pull requests. It ships as a GitHub App, Action, CLI or skill. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,492 | A local-first desktop research workbench with MCP tools and Python/R execution. It keeps traceable artifacts for reproducibility. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,192 | A local conversational video editor with a multi-track timeline, built on Remotion rendering. |
| [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder) | Python | 5,446 | Skills and an MCP setup that let Claude Code mod PC games, including reverse engineering and generated assets. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,938 | A CPU-only C99 inference implementation of a very large model. Its claims are extraordinary, so verify them. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,501 | Infrastructure for continually self-improving agents. The description is vague, so check the code first. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | 1,108 | A cross-backend inference engine for Metal, CUDA and Vulkan. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | (+662) | Captures agent sessions, compresses them with AI, and injects relevant context into later sessions. It works across Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,150 | Builds agent memory from existing on-disk session history, using local search and no LLM. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 756 | Git-native memory following Google's OKF v0.2, with BM25 search and an embedded MCP server. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 2,646 | A Markdown-based long-term memory store with local ranked retrieval. Claude Code and Codex share it, and it needs no API key. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,323 | A Git-versioned map of the codebase and database schema that agents read before editing. It is delivered as an MCP server. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,991 | Local-first search across a workspace, for both humans and agents. |
| [brekkylab/backlot](https://github.com/brekkylab/backlot) | Python | 400 | A local emulator of Slack, Gmail, Drive, Jira and other SaaS APIs, including auth and per-document ACLs. It is useful for testing RAG without real data. |

## 3. Trend Signal Analysis

Agent memory and context tooling is the clearest cluster today. At least six projects tackle it: claude-mem, deja-vu, okf-agent-memory, agent-memory, ripwire and aoci-code. They share a design: local-first, no hosted vector database, exposed over MCP, and shared across several coding agents. Token cost is the stated motivation, with claims of 74.7% and 80% reductions. Both are self-reported and unverified.

Harness plurality is the second signal. Omnigent, metaharness, agent-manager, delegate-skills, magpie and opencodex all assume developers run Claude Code, Codex, Cursor, Pi and others side by side. The value is moving from any single agent to routing, supervision and orchestration across them. Several projects also target non-default models, such as DeepSeek, Kimi and Ollama behind Codex or Claude Code. Cost arbitrage looks like a real driver.

Skills are now a distribution format. Trending includes mattpocock/skills, diagram-design and Anthropic's knowledge-work-plugins. Microsoft's skill-recorder generates skills from screen recordings. Skill packs are also appearing for specific domains: short drama, PCB design, game modding, EDA and WeChat typesetting.

Agent-driven reverse engineering (rea, universal-modder) is a newer direction.

A caution on data quality: some star counts look inflated or odd, notably ponytail at 158k. Treat the leaderboard with care.

## 4. Community Hot Spots

- **Cross-agent memory and context** ([deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory), [claude-mem](https://github.com/thedotmack/claude-mem)): The local, MCP-based approach avoids new infrastructure. Compare the retrieval quality of each.
- **Token-efficient code maps** ([ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code)): Signature-level context is a cheap way to reduce spend. Benchmark it on your own repo.
- **Multi-harness orchestration and model routing** ([omnigent](https://github.com/omnigent-ai/omnigent), [magpie](https://github.com/yetone/magpie), [opencodex](https://github.com/lidge-jun/opencodex)): Try these if you are locked into one vendor's agent or want to test cheaper models.
- **Agentic reverse engineering** ([rea](https://github.com/morluto/rea)): It is the day's top mover and a new category. Inspect what it actually ships before adopting it.
- **Skill-from-demonstration** ([skill-recorder](https://github.com/microsoft/skill-recorder)): Turning recorded work into a reusable skill could lower the cost of automation, and it is an early look at where vendors are heading.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
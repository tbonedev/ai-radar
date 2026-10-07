# AI Open Source Trends 2026-10-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-07 14:10 UTC

---

# AI Open Source Trends Report, 2026-10-07

**Data caveat:** Trending repos show `⭐0` for total stars in the source, so those rows only have today's gain. Several topic-search star counts look inflated. For example, `ponytail` shows 157,310 stars for what is essentially a prompt or rules repo. Treat totals from that list as weak evidence.

## 1. Finds

- **[morluto/rea](https://github.com/morluto/rea)**: An agent harness for reverse engineering, from app behavior down to native binaries. It is the top trending repo today (+4,666). Security researchers and people doing interop or malware triage would use it. The README claims are broad, so check how much is working tooling before relying on it.
- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)**: A coding-agent skill that runs a multi-phase security audit. Each finding is independently verified and emitted in machine-readable form. Teams that want agent-driven audits with fewer false positives, and output they can feed into CI or triage, should look at it. It comes from a credible vendor (+538).
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that gives coding agents a compact map of a repo. It returns signatures instead of bodies (claimed 74.7% fewer bytes) and reports blast radius and which tests to run. It suits anyone paying for tokens on large repos. The claim is self-reported, so benchmark it first.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**: A single Go binary that builds searchable memory from the session history already on disk for Claude Code, Codex, Cursor and about 35 other agents. It uses local search, MCP and hooks, with no LLM involved. It is useful if you work across several agents and want to recover earlier decisions without a cloud service.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)**: A desktop app that records your screen work session. It uses the GitHub Copilot SDK to reconstruct the intent and ordered steps, then builds a reusable Skill or Automation. It is aimed at Microsoft's Copilot Studio and Cowork targets, so it fits teams in that ecosystem who want to turn demos into automations.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** (**treat as hype until verified**): A portable C99 inference program that claims a 2.78T-parameter model runs on one CPU in 8.24 GB of RAM. That figure is hard to square with the model size unless it streams weights or does something unusual. Run it before believing it. It is still worth reading as a minimal-dependency inference reference.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,417 | Context-retrieval CLI and MCP server that returns code signatures rather than file bodies, plus tests-to-run and quality deltas. Aimed at cutting agent token spend on large repos. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 17,046 | Provider proxy that lets Codex CLI/SDK and Claude Code use other LLMs (Gemini, Grok, DeepSeek, Ollama). Relevant if you want agent harness lock-in removed. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 5,685 | Menu-bar tool for routing agents to other models, such as Codex on DeepSeek or Claude Code on Kimi. A lighter-weight take on the same model-swapping idea. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | 1,076 | Inference engine targeting Metal, CUDA and Vulkan from one Zig codebase. Early, but the cross-backend approach is the interesting part. |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Swift | n/a (+50) | Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents. Useful for people running many agent sessions at once. |
| [trailhq/Graft](https://github.com/trailhq/Graft) | TypeScript | 9,660 | Claims to make Claude Code, Cursor, Codex and Gemini faster and cheaper through codebase-specific context. The claims are unverified. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 757 | Git-native agent memory implementing Google OKF v0.2, with in-memory BM25 and an embedded MCP server. It needs no external database. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [morluto/rea](https://github.com/morluto/rea) | TypeScript | n/a (+4,666) | Agent-driven reverse engineering from app behavior to native binaries. It is the largest single-day gain on the list. |
| [trycua/cua](https://github.com/trycua/cua) | Rust | n/a (+229) | Open-source drivers, cross-OS fleets and benchmarks for computer-use agents, covering training, evaluation and data generation. Useful if you build or evaluate computer-use models. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+578) | Captures agent session activity, compresses it with AI and injects relevant context into later sessions. Works across Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,644 | Meta-harness that orchestrates Claude Code, Codex, Cursor and Pi with policy and sandbox enforcement. The harness-agnostic layer is the point. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,488 | Infrastructure for continually self-improving agents. The description is thin, so inspect it before adopting. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 698 | Local-first agent runtime and MCP bridge with sandboxed sessions, memory, credential handling and audit/replay. It speaks to a growing need for auditability. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 574 | tmux TUI that shows live agent status, worktrees and diff review. A practical tool for parallel agent work. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 6,154 | AI coworkers that each get their own browser, files and tools, with every action decided before it runs and logged after. Works with any AG-UI agent. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,197 | Records a screen session and converts it into a reusable Skill or Automation via the Copilot SDK. Notable as an official Microsoft entry in the skills space. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,839 | Open-source office suite with a built-in agent. It also ships a CLI and skill so coding agents can create real .docx/.xlsx/.pptx files locally. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,166 | Local-first conversational video editor with a multi-track timeline, MCP integration and Remotion rendering. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 897 | KiCAD 10 plugin exposing 217 schematic, layout, routing and review tools to Claude or another LLM. A concrete vertical for EDA work. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,448 | Local-first research workbench with skills, MCP tools, Python/R execution and traceable artifacts. It is one of two similar science-workbench projects in the list. |
| [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens) | TypeScript | 1,865 | Draws PRs as animated architecture and data-flow walkthroughs. Available as a GitHub App, Action, CLI or skill. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 548 | Offline desktop app that converts documents, including scanned PDFs, to AI-ready Markdown. Claims to use fewer tokens than vision models. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,924 | Claims CPU inference of a 2.78T-parameter model in 8.24 GB of RAM using portable C99. The claim looks extraordinary and needs verification. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,976 | Open book manuscript that derives LLM inference and training system design quantitatively from hardware limits. It includes calculation tools and experiments. |
| [Sahir619/fable-method](https://github.com/Sahir619/fable-method) | Python | 2,296 | Skills that distill the Claude Fable 5 workflow (think, act, prove) for use with any model, with an eval attached. The eval is what lets you check whether it works. |
| [youngyangyang04/llm-master](https://github.com/youngyangyang04/llm-master) | n/a | 1,106 | Chinese-language learning path covering prompting, RAG, agents, fine-tuning and deployment. Educational. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,142 | Builds local, LLM-free search over existing agent session history, exposed through MCP and hooks. A single binary that works across about 35 agents. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,243 | Git-versioned map of a codebase and database schema that agents read before editing. It acts as a persistent index of code knowledge. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,966 | Local-first workspace search for humans and agents. |
| [alfadur7/llm-wiki-newsroom](https://github.com/alfadur7/llm-wiki-newsroom) | Python | 170 | Multi-agent system that turns documents into a cross-linked Markdown wiki. A "reground" loop refreshes pages before they go stale. Small, but the writer-is-not-reviewer design is the idea to note. |
| [tianma-if/edgeever](https://github.com/tianma-if/edgeever) | TypeScript | 2,087 | AI-native knowledge base with native MCP, deployable on Cloudflare or Docker. Positioned as an Evernote alternative. |
| [panaversity/ksor](https://github.com/panaversity/ksor) | TypeScript | 225 | SDK for governed, authoritative knowledge systems for humans and agents. Very early. |

## 3. Trend Signal Analysis

The strongest signal today is **agent skills and the tooling around coding agents**, not new models or frameworks. Of the 13 trending repos, at least six are skills or agent add-ons: `mattpocock/skills` (+1,406), `addyosmani/agent-skills` (+453), `cathrynlavery/diagram-design` (+828), `ayghri/i-have-adhd` (+620), `cloudflare/security-audit-skill` (+538) and `claude-mem` (+578). Skills are becoming a distribution format, and well-known engineers and vendors are publishing them.

Three sub-directions stand out. The first is **agent memory and context**: `claude-mem`, `deja-vu`, `okf-agent-memory`, `aoci-code` and `ripwire` all try to carry state across sessions or shrink what an agent must read, mostly locally and with MCP. The second is **harness-agnostic orchestration and proxies**, such as `omnigent`, `opencodex` and `magpie`, where the harness is decoupled from the model. The third is **agent-driven security and reverse engineering**, led by `rea` and Cloudflare's audit skill, where independent verification of findings is a selling point.

There are also references to Claude Fable 5 workflows, Grok Build and DeepSeek Harness (DSH) plugins, and Kimi K3. That suggests the community is quickly building around each new release.

Caution applies. Many topic-list star counts are implausible, and several repos are thin, promotional or marketing-styled (for example `claude-batchy-bulk` and `opencouncil-contract-inspector`). Many "Jev"-related repos look like one ecosystem promoting itself.

## 4. Community Hot Spots

- **Agent-verified security audits**: [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) and [morluto/rea](https://github.com/morluto/rea). Machine-readable, independently verified findings are what make agent output usable in a pipeline.
- **Local agent memory over MCP**: [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu), [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) and [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code). Several independent projects are solving the same problem without cloud dependencies.
- **Token-efficient code context**: [redhat-et/ripwire](https://github.com/redhat-et/ripwire). Signature-level retrieval is worth benchmarking against your current setup.
- **Computer-use infrastructure**: [trycua/cua](https://github.com/trycua/cua). Cross-OS fleets and benchmarks address evaluation and data generation, which are the bottlenecks for this class of agent.
- **Skill capture from demonstrations**: [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder). Converting recorded work into reusable skills could become a common workflow if the output quality holds up.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
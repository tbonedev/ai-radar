# AI Open Source Trends 2026-09-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-29 13:41 UTC

---

# AI Open Source Trends Report, 2026-09-29

**Data caveat:** The GitHub Trending list could not be fetched, so there are no "today" star deltas. Star counts below are totals from the topic search only. Several repos have very large totals for what look like new projects, so treat those numbers with caution.

---

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**
  - **What it does:** A single Go binary that indexes the session histories that Claude Code, Codex, Cursor and about 32 other agents already store on your disk, and makes them searchable. It uses no LLM.
  - **Who it's for:** Anyone who switches between coding agents and wants to find "how did I solve that last week" across all of them.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**
  - **What it does:** A C++23 CLI and MCP server that gives coding agents signatures and a map of a repo instead of full file bodies, claiming 74.7% fewer bytes. It also reports blast radius and which tests to run after a change.
  - **Who it's for:** Teams paying for agent tokens on large codebases. It comes from a Red Hat group, which lends it some credibility.
- **[aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code)**
  - **What it does:** A Git-versioned index of a codebase and its database schema, served over MCP and a CLI. Agents read it before making edits.
  - **Who it's for:** People who want persistent, reviewable repo context rather than re-exploring on every session. It overlaps with ripwire and okf-agent-memory, so compare them.
- **[razzant/claudexor](https://github.com/razzant/claudexor)**
  - **What it does:** A control plane over Claude Code, Codex, Cursor and OpenCode. It rotates between multiple subscriptions based on quota, shares thread context, and runs cross-model review.
  - **Who it's for:** Heavy users who hit per-account limits. It is a small project at 490 stars, and quota rotation across accounts may conflict with provider terms, so check before relying on it.
- **[Tencent/wave-mcp](https://github.com/Tencent/wave-mcp)**
  - **What it does:** An MCP server for RTL waveform debugging. It reads FST waveforms (VCD/FSDB are auto-converted) plus a SystemVerilog netlist, and exposes 34 tools for driver analysis, X-tracing and pass/fail waveform diffs.
  - **Who it's for:** Hardware verification engineers. It is a rare non-web use of agents.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)**
  - **What it does:** A desktop app that records your screen while you work, uses Copilot CLI to reconstruct the intent and ordered steps, and packages them as a reusable Skill or automation.
  - **Who it's for:** People targeting Microsoft Scout, Copilot Cowork or Copilot Studio. It is "demonstrate once, get a skill", which is a useful pattern, but it is tied to the Microsoft ecosystem.

**Hype check:** [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) (17,174 stars) and [hypit-ai/hypit](https://github.com/hypit-ai/hypit) (17,452) have star counts far out of proportion to how new and narrow they are. hypit's "get your 100M views" pitch is marketing language. Look at the code before adopting either.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,627 | A proxy that lets Codex CLI and Claude Code use other backends such as Gemini, Grok, DeepSeek and Ollama. Its popularity shows how much demand there is for decoupling agent front-ends from model vendors. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 12,775 | Uses ChatGPT Web, including Pro, as a model inside Codex, with tools, streaming and images. It sidesteps Codex quota, which may be a terms-of-service gray area. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,368 | A zero-dependency CLI and MCP server that gives agents signatures and a repo map to cut context bytes. It also reports blast radius and which tests to run. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,841 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series MacBooks. A notable claim for on-device MoE inference, so verify it on your hardware. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 592 | Exact LLM decoding on Apple Silicon via MLX, behind an OpenAI-compatible endpoint. A drop-in local server for Mac users. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,827 | Local-first search across a workspace for humans and agents. Worth a look as a semantic alternative to ripgrep. |
| [Tencent/wave-mcp](https://github.com/Tencent/wave-mcp) | Python | 220 | An MCP server for RTL waveform debug with 34 tools. It is a concrete example of agents entering chip verification. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,337 | A meta-harness that orchestrates Claude Code, Codex, Cursor and Pi, with policy enforcement and sandboxing. It is part of the "harness of harnesses" trend. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 490 | Multi-harness control plane with quota-aware rotation and cross-model review. Niche, but it addresses a real pain point. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,339 | Patterns and CLI tools (loop-audit, loop-init, loop-cost) for designing agent loops. Useful mainly if you want structure around cost and audit. |
| [Waishnav/devspace](https://github.com/Waishnav/devspace) | TypeScript | 5,166 | A minimal coding-agent harness delivered over MCP for ChatGPT, Claude, Hermes and others. It is interesting for using chat clients as the front-end. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 540 | A tmux TUI with live status, worktrees and diff review for multiple coding agents. Practical for running several agents in parallel. |
| [ShenSeanChen/waku-agent](https://github.com/ShenSeanChen/waku-agent) | Python | 1,871 | A local-first agent harness with loop, memory and eval in readable code. A reasonable reference implementation. |
| [umacloud/umadev](https://github.com/umacloud/umadev) | Rust | 259 | A dev-team-style coding agent that commands your existing Claude Code, Codex or OpenCode. It is early, with few stars. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,139 | An open-source office suite with a built-in agent and a CLI/skill so coding agents can edit real .docx, .xlsx and .pptx files. The file-format angle is the useful part. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,044 | A local-first conversational video editor with a multi-track timeline, MCP and Remotion rendering. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 9,905 | A Claude Code and Codex skill with 152 shot recipes for Remotion product videos. Skill-as-content packaging. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,290 | A local-first research desktop app with skills, MCP tools, and Python/R execution with traceable artifacts. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 823 | A KiCAD 10 plugin exposing 217 schematic, routing and review tools to an LLM. |
| [Ryze-AI-Adgent/open-seo-mcp-skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills) | Shell | 2,881 | An SEO MCP server plus skills that work on your own GSC, GA4 and ads data. Likely tied to the vendor's hosted connector. |
| [LING71671/open-reverselab](https://github.com/LING71671/open-reverselab) | Python | 1,190 | An MCP platform wrapping Ghidra, Frida, x64dbg and Rizin with 100+ tools. Dual-use, so use it only on authorized targets. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,841 | Low-memory Gemma 4 MoE inference on Macs. It is the strongest model-side item in today's data. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,239 | Infrastructure for continually self-improving agents. The description is vague, so check for real evals. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,608 | An open-source Chinese book with calculation tools on quantitatively deriving LLM inference and training system design. A good learning resource. |
| [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness) | Python | 5,553 | Distills, updates and prunes Claude Code skills from your real sessions. It is a learning loop without training. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,086 | Searchable history across 30+ agents' local sessions in one binary, with no LLM. Cheap and fast. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 738 | Git-native agent memory implementing Google OKF v0.2, with BM25 search and an embedded MCP server. It claims 80% less token bloat. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 660 | A Git-versioned codebase and schema index served to agents over MCP. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 294 | A project-scoped SQLite episodic memory shared across Claude Code, Codex CLI, Copilot CLI and OpenCode. |
| [scaccogatto/okf-skills](https://github.com/scaccogatto/okf-skills) | Python | 401 | A toolkit to author and validate Open Knowledge Format bundles, with a GitHub Action. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,347 | An AI-native markdown IDE and LLM wiki. |
| [CyberSunil/LLMVault](https://github.com/CyberSunil/LLMVault) | Python | 328 | An intentionally vulnerable OWASP LLM Top 10 lab covering prompt injection and RAG and agent security. Useful for security training. |

---

## 3. Trend Signal Analysis

**Harness plumbing is where the attention is.** Most of today's projects don't build agents. They sit around existing coding agents: proxies (opencodex, codex-chatgpt-web), meta-harnesses (omnigent, claudexor, metaharness), managers (agent-manager) and skill generators (autoharness, skill-recorder). Claude Code and Codex are now treated as platforms.

**Memory and context shrinking is the second cluster.** deja-vu, ripwire, aoci-code, okf-agent-memory and engrim all address the same problem from different angles: agents re-read too much and forget too much. Several are non-LLM, single-binary tools in Go, Rust or C++. The approach is deterministic indexing (BM25, signatures, Git-versioned maps) rather than embeddings.

**New directions:**
- **Open Knowledge Format (OKF).** Two unrelated repos implement it, which suggests an emerging interchange standard.
- **Deepening MCP use in specialized engineering domains.** Examples are EDA and PCB design (Konnect, easyeda-agent), RTL debug (wave-mcp) and reverse engineering.
- **DeepSeek Harness (DSH) plugins.** Several Chinese-language projects target it, including dsh-TUI, dashi-taskboard and dsh-memory.

**Industry link:** Multi-vendor agent use, with Claude Code, Codex, Cursor, Grok Build and Antigravity in the same READMEs, is driving demand for portability and quota management. Local inference of large MoE models, as in turbo-fieldfare with Gemma 4, keeps improving.

**Caution:** Some very high star totals on brand-new repos suggest promotion or inflated numbers.

---

## 4. Community Hot Spots

- **Agent memory and context tooling.** Try [deja-vu](https://github.com/vshulcz/deja-vu) and [ripwire](https://github.com/redhat-et/ripwire) first. They are deterministic, cheap and easy to trial, and they address a cost problem every agent user has.
- **Harness portability layers.** [opencodex](https://github.com/lidge-jun/opencodex), [omnigent](https://github.com/omnigent-ai/omnigent) and [claudexor](https://github.com/razzant/claudexor) reduce vendor lock-in. Watch how the providers respond.
- **Domain-specific MCP servers.** [wave-mcp](https://github.com/Tencent/wave-mcp) and [Konnect](https://github.com/mixelpixx/Konnect) show agents moving into hardware. Typed tool surfaces are the reusable pattern.
- **Skills learned from real work.** [skill-recorder](https://github.com/microsoft/skill-recorder) and [autoharness](https://github.com/tigerless-labs/autoharness) generate and prune skills automatically, so skills need less hand-writing.
- **Local Mac inference.** [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) and [TensorFold](https://github.com/ashhart/TensorFold) are worth benchmarking against your own workloads.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Open Source Trends 2026-10-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-06 13:52 UTC

---

# AI Open Source Trends Report, 2026-10-06

**Data caveats:**
- Trending repos report total stars as ⭐0 in the feed, so their totals are shown as "n/a" and only today's gain is given.
- Several topic-search star totals look implausible for their descriptions, for example 156,477 for `ponytail` and 17,576 for `img2threejs`. They could be inflated or botched, so treat them as weak signals.
- Excluded as non-AI: [AnyPS5](https://github.com/boykopovar/AnyPS5) (PS5 binary porting) and [openGym](https://github.com/DuarteSantos8/openGym) (gym tracker). [tester-army/e2e](https://github.com/tester-army/e2e) is also left out: the description mentions no AI, so I can't confirm it belongs.

## 1. Finds

- **[morluto/rea](https://github.com/morluto/rea)**: Agent-driven reverse engineering, from observing app behavior down to native binaries. It had the biggest jump on the list (+2,963 today). Security researchers and malware or compatibility analysts would use it. Its pairing with debugger MCP servers like [x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) suggests an emerging "agent + debugger" stack. The README may not back up "reverse engineer anything".
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**: A single Go binary that indexes the session history already on your disk from Claude Code, Codex, Cursor and 35+ other agents. It offers local search, MCP and hooks, with no LLM involved. Anyone who has lost context between agent sessions would use it. It is a lighter alternative to [claude-mem](https://github.com/thedotmack/claude-mem), which compresses sessions with AI.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that gives coding agents signatures instead of function bodies, claiming 74.7% fewer bytes. It also reports blast radius and which tests to run. Teams paying for tokens on large repos would use it. The byte-saving claim is self-reported and worth benchmarking.
- **[omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent)**: A "meta-harness" that orchestrates Claude Code, Codex, Cursor and Pi behind one layer, with policies and sandboxing. It is for teams that don't want to be locked into one coding agent. Its star count (10,617) is hard to verify.
- **[yetone/magpie](https://github.com/yetone/magpie)**: A Go menu-bar app that lets you run Codex on DeepSeek or Claude Code on Kimi. It is for people who want to mix agent frontends with cheaper or alternative models.
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** (+620 today): Gives agents CAD capabilities. It is a niche, hardware-oriented use of agents. The description is thin, so check the output quality before relying on it.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [deepseek-ai/DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) | Cuda | n/a (+363) | A clean, efficient BLAS kernel library for GPUs from DeepSeek. It matters to inference and training engineers who want readable high-performance kernels. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,407 | A "ripgrep for AI context" CLI and MCP server that returns signatures rather than bodies. It claims 74.7% fewer bytes and also does blast-radius and test selection. |
| [duty1g/x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) | Zig | 2,251 | A native MCP plugin that exposes the x64dbg debugger over HTTP: breakpoints, stepping, memory and registers. It is a single zero-dependency binary. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 17,007 | A provider proxy that lets Codex CLI and Claude Code use any LLM (Gemini, Grok, DeepSeek, Ollama). It reflects demand for model-agnostic agent frontends. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 5,374 | A menu-bar tool for pairing any agent with any model. For example, Codex on DeepSeek or Claude Code on Kimi. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,949 | An auth gateway connecting 1500+ SaaS providers to agents via SDK, CLI, MCP, HTTP and OpenAPI. It addresses the credential-plumbing pain of agent integrations. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 1,037 | Fast, exact LLM decoding on Apple Silicon (MLX) behind an OpenAI-compatible endpoint. It is useful for local inference on Macs. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,906 | Claims inference of a 2.78T-parameter Kimi K3 on one CPU in 8.24 GB of RAM, in portable C99. The claim is extraordinary and should be treated skeptically until reproduced. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [morluto/rea](https://github.com/morluto/rea) | TypeScript | n/a (+2,963) | An agent-driven reverse-engineering tool covering app behavior down to native binaries. It had the highest daily gain on the list. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+536) | Captures what agents do in sessions, compresses it with AI, and re-injects context later. It works across Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,617 | An open-source meta-harness that orchestrates multiple coding agents with policies and sandboxing. It lets you swap harnesses without rewriting. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 688 | Scaffolds a branded agent harness with its own npx CLI, MCP server, memory and signed releases. It is another sign of the "harness" abstraction spreading. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | n/a (+621) | A collection of role-specialized agent personas. It is a prompt library rather than a runtime. |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | TypeScript | 11,426 | Patterns and CLIs (loop-audit, loop-init, loop-cost) for designing agent loops. It is more of a methodology kit than a framework. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 570 | A tmux TUI with live status, quick prompts, worktrees and diff review across coding agents. It suits people who run several agents in parallel. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,478 | Infrastructure for continually self-improving agents. The description is vague, so read the code before adopting it. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | n/a (+1,028) | A personal `.agents` skill directory, published for others to reuse. Its momentum is likely driven by the author's audience. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | JavaScript | n/a (+947) | A design-language skill to improve agent output on UI work. It is part of an anti-"AI slop" design trend. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | n/a (+227) | Provides 42 diagram types as self-contained HTML and SVG for Claude Code, Codex, Copilot, Factory Droid and Pi. It avoids Mermaid output. |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | n/a (+318) | A skill that makes coding agents give concise, ADHD-friendly answers. It addresses the common complaint of agents burying the answer. |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | Python | n/a (+620) | Gives agents CAD abilities. It is a niche hardware use case. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 889 | A KiCAD 10 plugin exposing 217 schematic, layout and routing tools to an LLM. It is a concrete vertical example of MCP in EDA. |
| [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens) | TypeScript | 1,859 | Draws PRs as animated architecture and data-flow walkthroughs. It ships as a GitHub App, Action, CLI or skill. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,194 | Records your screen work and uses the Copilot SDK to turn it into a reusable skill. It is notable as a Microsoft-backed record-to-skill approach. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [deepseek-ai/DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) | Cuda | n/a (+363) | A GPU BLAS kernel library from DeepSeek. It is the only hard-core training and inference-kernel project in today's list. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,906 | A CPU-only C99 inference claim for Kimi K3. Verify it before believing the memory figure. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,929 | An open-source Chinese book on quantitative analysis of LLM inference and training system design. It includes calculation tools and experiments. |
| [sahir619/fable-method](https://github.com/Sahir619/fable-method) | Python | 2,296 | Distills how Claude Fable 5 worked into skills any model can run, plus an eval. It follows the new model's release. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,135 | Local memory built from existing agent session history, covering 35+ agents. It needs no LLM. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 756 | Git-native agent memory implementing Google OKF v0.2, with sub-300µs in-memory BM25 search. It claims 80% less token bloat and needs no external database. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,195 | A Git-versioned map of a codebase and its DB schema that agents read first. It ships as a local MCP server and CLI. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 578 | Encrypted, fully offline agent memory with a GUI memory map. It targets privacy-sensitive users. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 544 | A local desktop app that converts documents, including scanned PDFs, to AI-ready Markdown. It runs offline and uses fewer tokens than vision models. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,947 | Local-first workspace search for humans and agents. It is a practical retrieval building block. |
| [panaversity/ksor](https://github.com/panaversity/ksor) | TypeScript | 225 | An SDK for governed, authoritative knowledge systems for humans and agents. It is early and has few stars. |

## 3. Trend Signal Analysis

**Memory and context tooling is the hottest practical area.** [claude-mem](https://github.com/thedotmack/claude-mem), [deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory), [Compartment](https://github.com/MaxFreedomPollard/Compartment) and [aoci-code](https://github.com/aoci-spec/aoci-code) all attack the same problem: agents forget between sessions. Most expose it over MCP, and several are single-binary, local-first Go or Rust tools.

**Skills are the other big theme.** [mattpocock/skills](https://github.com/mattpocock/skills), [impeccable](https://github.com/pbakaus/impeccable), [i-have-adhd](https://github.com/ayghri/i-have-adhd) and [diagram-design](https://github.com/cathrynlavery/diagram-design) are all packaged skills rather than code libraries. Many target several agents at once (Claude Code, Codex, Copilot, Pi), so skills are becoming a cross-vendor format. Several of these repos explicitly aim to counter generic "AI slop".

**The meta-harness is a newer direction.** [Omnigent](https://github.com/omnigent-ai/omnigent), [metaharness](https://github.com/ruvnet/metaharness), [magpie](https://github.com/yetone/magpie) and [opencodex](https://github.com/lidge-jun/opencodex) sit above individual coding agents. They route models, enforce policy and swap frontends. This points to developers using several agents and wanting to decouple them from specific model vendors.

**Agents are moving into specialist domains.** Reverse engineering ([rea](https://github.com/morluto/rea), the x64dbg MCP server), PCB design ([Konnect](https://github.com/mixelpixx/Konnect)) and CAD ([text-to-cad](https://github.com/earthtojake/text-to-cad)) are examples.

**Industry connection:** [fable-method](https://github.com/Sahir619/fable-method) and the Kimi K3 and DeepSeek-related projects follow recent model releases. Many repos mention "DSH" (DeepSeek Harness). That ecosystem appears to be forming, but the evidence is mostly repo descriptions, not usage.

**Caution:** Several topic-search star counts look inflated. Verify before drawing conclusions from them.

## 4. Community Hot Spots

- **Local-first agent memory over MCP**: [deja-vu](https://github.com/vshulcz/deja-vu) and [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) are lightweight and need no external services. They are the easiest way to test the idea in your own workflow.
- **Token-efficient code context**: [ripwire](https://github.com/redhat-et/ripwire) and [aoci-code](https://github.com/aoci-spec/aoci-code) try to reduce what agents read. Benchmark the claimed savings on your own repo.
- **Agent-assisted reverse engineering**: [rea](https://github.com/morluto/rea) paired with [x64dbg-mcp-server](https://github.com/duty1g/x64dbg-mcp-server) is a stack worth watching if you do security or binary analysis work.
- **Multi-agent and multi-model routing**: [Omnigent](https://github.com/omnigent-ai/omnigent), [magpie](https://github.com/yetone/magpie) and [opencodex](https://github.com/lidge-jun/opencodex) are worth a look if you're already juggling several coding CLIs.
- **GPU kernel engineering**: [DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) is the only low-level performance project in today's list, and the best study material for kernel work.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
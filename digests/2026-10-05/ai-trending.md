# AI Open Source Trends 2026-10-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-05 15:30 UTC

---

# AI Open Source Trends Report, 2026-10-05

**Data caveat:** Trending entries report total stars as 0, so that field is missing and not real. I give today's gain only for those. Several topic-search repos show very large star totals for what look like brand-new projects (for example ponytail at 155,688). Treat those totals as possibly inflated until you check the repo.

## 1. Finds

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** (+1,156 today) is a single CLI that lets an agent read and search Twitter, Reddit, YouTube, GitHub, Bilibili and XiaoHongShu without paid APIs. It suits anyone whose agent needs live web and social data and who is tired of per-platform API keys. Scraping-based access tends to break when platforms change, so check how recently it was maintained.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a zero-dependency C++23 CLI and MCP server that gives coding agents repo maps. It returns signatures instead of function bodies (claims 74.7% fewer bytes), plus blast radius and tests-to-run. It suits people hitting context limits on large repos. It comes from Red Hat's emerging-tech group, so it is more credible than most entries here.
- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** is Git-native persistent memory for coding agents. It implements Google's OKF v0.2 spec, uses in-memory BM25 search, embeds an MCP server, and has no external database. It suits anyone who wants agent memory that is diffable and lives in the repo. The "80% token savings" figure is the author's own claim.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** is a single Go binary that indexes the session history your coding agents already left on disk, covering 35+ agents. It offers local search, MCP and hooks, and uses no LLM. It suits people who use several agents and want to recover past decisions and context. It is a lighter alternative to [claude-mem](https://github.com/thedotmack/claude-mem), which compresses sessions with an LLM.
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** (+456 today) gives agents the ability to generate CAD models. The description is one line, so what it outputs and which CAD kernel it uses isn't clear from the data. It is worth a look if you do hardware or 3D work, but verify before relying on it.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** is a desktop app that records your screen work, uses Copilot CLI to reconstruct intent and steps, and then builds a reusable Skill or Automation. It suits teams standardizing agent skills from real workflows. It targets Microsoft's Scout, Cowork and Copilot Studio, so it is mostly useful inside that ecosystem.

**Likely hype or unverified:**
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) shows 155,688 stars for what is a prompt/rules file. That is implausible organic growth.
- [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) claims a 2.78T-parameter model running on one CPU in 8.24 GB of RAM. That is hard to believe without a real benchmark.
- [kanguruonline/claude-batchy-bulk](https://github.com/kanguruonline/claude-batchy-bulk) has an SEO-style title ("Cut AI Costs by 50% in 2026") and looks like an empty shell.
- [vikashjeyaraman/opencouncil-contract-inspector](https://github.com/vikashjeyaraman/opencouncil-contract-inspector) is also probably marketing, with a description full of buzzwords.

## 2. Top Projects by Category

\* Trending totals are reported as 0 in the source data.

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,399 | A C++23 CLI and MCP server that gives coding agents compact repo maps and blast-radius checks. It claims signatures at 74.7% fewer bytes than bodies. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,954 | A proxy that lets Codex CLI and Claude Code run on other providers (Gemini, Grok, DeepSeek, Ollama). It matters for people who want to avoid lock-in to one harness or model vendor. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 5,092 | A menu-bar tool for choosing which model each agent uses, for example Codex on DeepSeek or Claude Code on Kimi. It is another sign that harness and model are being decoupled. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,132 | A local search and MCP layer over existing agent session history, in one binary with no LLM. It works across 35+ agents. |
| [ARahim3/cachebeat](https://github.com/ARahim3/cachebeat) | Shell | 65 | A small Claude Code skill that keeps the prompt cache warm during idle sessions. It is a narrow, practical cost trick. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 1,007 | Exact LLM decoding on Apple Silicon (MLX) behind an OpenAI-compatible endpoint. It is useful for local Mac inference. |
| [20000419/fauxnix](https://github.com/20000419/fauxnix) | TypeScript | 736 | Translates bash to PowerShell deterministically so agents can run Linux-style commands on Windows, with no VM or WSL. It solves a real pain for Windows agent users. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 0* (+1,156) | One CLI for agents to read and search major social and video platforms with no API fees. It is the biggest AI gainer on trending today. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 0* (+534) | Captures what an agent does, compresses it with AI, and injects relevant context into later sessions. It supports Claude Code, Codex, Gemini, Copilot, OpenCode and others. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 0* (+758) | An agentic video production system with 12 pipelines, 100+ tools and 700+ skill files. It turns a coding assistant into a video studio. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0* (+595) | A library of role-based specialist agent prompts (frontend, community, QA and others). It is useful as a prompt set but not technically novel. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,591 | A meta-harness that orchestrates Claude Code, Codex, Cursor and Pi with policies and sandboxing. |
| [michael-denyer/pstack-claude](https://github.com/michael-denyer/pstack-claude) | JavaScript | 0* (+222) | Ports Poteto's pstack agent workflows to Claude Code, Codex, Pi, OpenCode and Gemini. It is useful if you want one workflow across several harnesses. |
| [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os) | TypeScript | 0* (+102) | An agent workspace on Cloudflare Workers for documents, apps and agents with company context. It is a big-vendor signal but the description is thin. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 686 | Scaffolds your own branded agent harness with an npx CLI, MCP server, memory and witness-signed releases. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | Python | 0* (+456) | Gives agents CAD generation ability. Details are sparse. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,693 | An open-source office suite with a built-in agent and a CLI so Claude Code and Codex can edit real .docx, .xlsx and .pptx files locally. |
| [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect) | Rust | 883 | A KiCAD 10 plugin exposing 217 schematic, layout and routing tools to an LLM. It is a good example of a vertical MCP tool. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,191 | Records screen work and turns it into reusable Skills or Automations through Copilot CLI. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,121 | A local-first conversational video editor with a multi-track timeline, MCP integration and Remotion rendering. |
| [LING71671/open-reverselab](https://github.com/LING71671/open-reverselab) | Python | 1,214 | An MCP server for Ghidra, Frida, x64dbg and Rizin, with 100+ tools aimed at binary analysis and CTFs. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,880 | Claims 2.78T-parameter inference on one CPU in 8.24 GB of RAM. Treat it as unverified until you see benchmarks. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,473 | Infrastructure for continually self-improving agents. The data gives few specifics. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,902 | An open-source book (in Chinese) that derives LLM inference and training system design from hardware limits, with calculation tools. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 1,007 | Fast, exact decoding on MLX behind an OpenAI-compatible API. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 753 | Git-native agent memory with BM25 search and an embedded MCP server, built on Google's OKF spec. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,144 | A persistent, Git-versioned map of code and database schema that agents read before editing. It is a local MCP server. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,930 | Local-first workspace search built for both humans and agents. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 542 | A desktop app that turns documents, including scanned PDFs, into clean Markdown offline, using fewer tokens than vision models. |
| [tianma-if/edgeever](https://github.com/tianma-if/edgeever) | TypeScript | 2,027 | An AI-native notes app with native MCP that can run on Cloudflare or Docker. |
| [brekkylab/backlot](https://github.com/brekkylab/backlot) | Python | 365 | A local emulator of Slack, Gmail, Drive, Jira and other SaaS APIs, with realistic response shapes and per-document ACLs. It is useful for testing RAG and agents without live credentials. |

## 3. Trend Signal Analysis

**Agent memory and context tooling is the clearest cluster.** [claude-mem](https://github.com/thedotmack/claude-mem) gained +534 today. [deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory), [aoci-code](https://github.com/aoci-spec/aoci-code) and [ripwire](https://github.com/redhat-et/ripwire) all attack the same problem from different angles. Together they signal that persistent context across sessions is now the main weakness of coding agents. Most of them use local-first designs (a single binary, no database, no LLM in the loop) and expose MCP.

**Harness-agnostic tooling is a second direction.** [opencodex](https://github.com/lidge-jun/opencodex), [magpie](https://github.com/yetone/magpie), [omnigent](https://github.com/omnigent-ai/omnigent) and [pstack-claude](https://github.com/michael-denyer/pstack-claude) all treat Claude Code, Codex, Pi, OpenCode and Gemini as interchangeable. The harness is becoming a commodity layer, and people want to swap models and runtimes freely.

**Agents are moving into non-code domains.** [OpenMontage](https://github.com/calesthio/OpenMontage) (video), [text-to-cad](https://github.com/earthtojake/text-to-cad) (CAD), [Konnect](https://github.com/mixelpixx/Konnect) (PCB) and the reverse-engineering MCP servers all follow the same pattern: wrap a professional tool in typed actions and let an agent drive it.

**Skills are now a distribution format.** Many repos ship as skills or plugins and not as applications, which is how [skill-recorder](https://github.com/microsoft/skill-recorder) and the agent-skills topic items work.

**Quality caution.** Several entries show inflated stars or marketing language, and a few have no description at all. Do not use stars alone to judge them.

## 4. Community Hot Spots

- **Agent memory layers ([deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory), [claude-mem](https://github.com/thedotmack/claude-mem)):** Try one on a real project. Their different approaches (LLM compression against plain local search) make a useful comparison.
- **Token-efficient code context ([ripwire](https://github.com/redhat-et/ripwire), [aoci-code](https://github.com/aoci-spec/aoci-code)):** Signature-level repo maps may cut cost on large codebases, and you can measure that directly.
- **Provider-agnostic harness proxies ([opencodex](https://github.com/lidge-jun/opencodex), [magpie](https://github.com/yetone/magpie)):** These matter if you want to run Codex or Claude Code on cheaper or local models.
- **Agent web access without APIs ([Agent-Reach](https://github.com/Panniantong/Agent-Reach)):** Today's biggest AI trending gain. It is worth testing, but check how it handles platform changes and terms of use.
- **Vertical MCP tools for professional software ([Konnect](https://github.com/mixelpixx/Konnect), [open-reverselab](https://github.com/LING71671/open-reverselab), [text-to-cad](https://github.com/earthtojake/text-to-cad)):** This is a pattern to copy if you build tools for a specific engineering domain.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
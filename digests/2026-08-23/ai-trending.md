# AI Open Source Trends 2026-08-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-23 07:29 UTC

---

# AI Open Source Trends Report — August 23, 2026

## 1. Finds

The standout signal today isn't a single breakout repo — it's a cluster of small, focused tools solving problems that only exist because engineers are now running *several* coding agents side by side.

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Indexes the session logs that 20+ coding agents (Claude Code, Codex, Cursor, etc.) already write to disk — including sessions from before you installed it — and makes them recallable across tools. No LLM calls, no embeddings, just one local Go binary. Worth a look for anyone tired of re-explaining context every time they switch agents.

- **[elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine)** — Indexes your codebase so agents search it instead of reading whole files, claiming a 94% cut in token spend; ships as a free, local MCP server compatible with Claude Code, Codex, Copilot, Cursor, and Gemini CLI. A cheap experiment for anyone whose agent bills are creeping up.

- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in roughly 2 GB of RAM on any M-series MacBook. Concrete, verifiable engineering claim (not vague "optimized inference") — relevant to anyone wanting a capable local model without a beefy GPU.

- **[razzant/claudexor](https://github.com/razzant/claudexor)** — A multi-harness control plane for Claude Code, Codex, Cursor, and OpenCode: quota-aware rotation across multiple subscriptions, shared thread context, cross-model review. Useful for anyone paying for more than one agent subscription and tired of manually juggling rate limits.

- **[aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag)** — Free, no-signup, no-API-key MCP server exposing 22.5 million Taiwanese court rulings, administrative interpretations, and constitutional court decisions with citation verification. Niche, but a nice concrete example of retrieval-only (bring-your-own-LLM) legal RAG done right.

- **[Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard)** — A full-stack AI red-teaming platform covering agent scanning, skills scanning, MCP scanning, and LLM jailbreak evaluation. Relevant as more teams give agents real tool access and need to test that surface before attackers do.

Caveat: several "topic search" entries today (e.g., `nexu-io/open-design` at 90k+ stars, `virgiliojr94/book-to-skill` at 24k+ stars) pair brand-new, marketing-copy-heavy descriptions with implausibly large star counts for their apparent age — treat those star numbers as unreliable and they're excluded from the tables below.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex](https://github.com/openai/codex) | Rust | 0 (+1,544) | Lightweight terminal coding agent from OpenAI; today's single biggest star gain across the whole trending list. |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 16,283 | A 20 MB cross-platform DB client for 90+ databases with a built-in AI assistant and MCP server, packaged as CLI, desktop app, and Docker image. |
| [modular/modular](https://github.com/modular/modular) | Mojo | 0 (+395) | The Modular Platform (MAX + Mojo) — a unified compute stack aimed at high-performance AI inference. |
| [elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine) | Python | 401 | Local MCP server that indexes a codebase so agents search rather than read files; claims a 94% token-cost reduction. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 4,917 | Open-source auth gateway connecting 1,000+ SaaS providers to agents via SDK, CLI, MCP, HTTP, and OpenAPI. |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | Go | 0 (+278) | Self-hosted relay unifying Claude, OpenAI, Gemini, and Grok subscription access behind one API, aimed at shared-cost setups. |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Python | 867 | Gives any AI agent coding-tool capability through MCP. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 9,180 | Open-source meta-harness that orchestrates Claude Code, Codex, Cursor, and Pi without rewriting policies, with sandboxing and real-time collaboration. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+592) | An agentic skills framework paired with a broader software-development methodology, not just a skill pack. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 0 (+411) | Performance-optimization system (skills, instincts, memory, security, research-first workflow) spanning Claude Code, Codex, Opencode, and Cursor. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 2,177 | Apache-incubating local-first agent workspace that records model messages, tool calls, results, and permission decisions as an append-only audit log. |
| [Agentlas-ai/Agentlas-OS](https://github.com/agentlas-ai/Agentlas-OS) | Python | 1,129 | Keeps specialist agents parked in a hub and spins up a temporary orchestrator per task, model-agnostic and local-first. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 602 | Scaffolding tool for building your own branded agent harness — CLI, MCP server, memory, learning loop, signed releases. |
| [razzant/claudexor](https://github.com/razzant/claudexor) | TypeScript | 420 | Multi-harness control plane with quota-aware rotation across multiple Claude/Codex subscriptions and cross-model review. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [simonlin1212/a-stock-data](https://github.com/simonlin1212/a-stock-data) | — | 9,085 | Zero-auth China A-share data toolkit for AI agents: 11 layers, 54 endpoints, 19 data sources. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 3,741 | Claude Code skill bundle for bug hunting and red-team work — 82 skills, 15 slash commands, 681 curated disclosed-report patterns. |
| [Open-Less/openless](https://github.com/Open-Less/openless) | Rust | 3,207 | Push-to-talk, open-source voice input for macOS/Windows that inserts AI-polished text at the cursor in any app. |
| [OpenOSINT/OpenOSINT](https://github.com/OpenOSINT/OpenOSINT) | Python | 1,450 | AI-powered OSINT agent with an interactive REPL, MCP server, and 19 tools, for authorized security research. |
| [juanjuandog/FinSight-AI](https://github.com/juanjuandog/FinSight-AI) | Java | 1,028 | Equity-research agent combining resilient workflows, evidence-grounded RAG, versioned reports, and automated quality evaluation. |
| [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | Python | 0 (+150) | Full-stack AI red-teaming platform: agent scan, skills scan, MCP scan, AI infra scan, and jailbreak evaluation. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 16,264 | Text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation-gated updates. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,266 | Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook — a concrete, testable efficiency claim. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 792 | Free, local memory engine that persists context across Cursor, Claude Code, Codex, and OpenClaw sessions. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 656 | Indexes existing on-disk sessions from 20 coding agents and recalls them across tools — no LLM, no embeddings, single Go binary. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 592 | Encrypted, fully offline agentic memory with a one-click install and GUI memory map, OS- and agent-agnostic. |
| [caura-ai/caura](https://github.com/caura-ai/caura) | Python | 439 | Governed shared memory for multi-agent, multi-tenant fleets — trust tiers, keystone policies, audit trails, knowledge graph, Apache 2.0. |
| [liliu-z/stashbase](https://github.com/liliu-z/stashbase) | TypeScript | 417 | Turns local files into searchable context for AI agents. |
| [aa0101181514/tw-legal-rag](https://github.com/aa0101181514/tw-legal-rag) | Python | 298 | Retrieval-only MCP server over 22.5M Taiwanese legal rulings and interpretations, free with no signup or API key. |

---

## 3. Trend Signal Analysis

Today's clearest pattern is **agent memory and cross-harness orchestration going mainstream**. Engineers now routinely run Claude Code, Codex, Cursor, DeepSeek Harness, and OpenCode side by side, and a whole new tooling layer is forming to manage that: memory engines that persist across tools without embeddings or cloud calls (`deja-vu`, `caura`, `Compartment`, `iai-personal-memory-engine`, `stashbase`), and "meta-harness" control planes that unify quota, context, and policy across multiple subscriptions and vendors (`claudexor`, `metaharness`, `omnigent`, `sandbase-harness`). This is a second-order effect of agent proliferation, not a new model release — it's plumbing for a multi-agent workflow that didn't exist a year ago.

A second thread is the **"Agent Skills" format converging across vendors**: what started as a Claude Code convention is now explicitly targeted by Codex, Cursor, DeepSeek Harness, OpenCode, Gemini CLI, and Qwen tooling (`mattpocock/skills`, `obra/superpowers`, `cursor/plugins`). Expect more cross-compatible skill packs as this standardizes.

Third, **AI-specific security tooling** is showing up prominently (`Tencent/AI-Infra-Guard`, `Claude-BugHunter`, `OpenOSINT`) — a sign that as agents get broader tool/file/network access, securing the agent surface itself (not just the underlying model) is becoming a distinct product category.

Finally, **DeepSeek-adjacent tooling** (`deepcode-cli` optimized for DeepSeek-V4, `Awesome-DeepSeek-Harness-Plugins`, `codex-app-transfer`) suggests recent DeepSeek releases are actively driving new integration work, particularly for routing OpenAI-shaped clients to non-OpenAI backends.

One caution: several high-star "topic search" repos today carry suspiciously large totals relative to their apparent age and marketing-heavy descriptions — likely inflated metrics, not organic traction.

---

## 4. Community Hot Spots

- **Cross-agent persistent memory** — `deja-vu`, `caura`, `Compartment`, and `iai-personal-memory-engine` all attack the same problem (context loss between agent sessions/tools) from different angles: zero-LLM indexing, governed multi-tenant memory, offline encryption, and cross-tool persistence, respectively. Worth comparing directly if you're picking one.
- **Multi-harness orchestration** — `claudexor`, `metaharness`, and `omnigent` reflect real user pain from running multiple paid coding-agent subscriptions simultaneously and needing unified quota/policy control.
- **Token-efficiency tooling** — `code-context-engine`'s 94%-savings claim is a concrete, checkable number worth validating against your own repo if agent costs are a concern.
- **Agent/MCP security scanning** — `AI-Infra-Guard`, `Claude-BugHunter`, and `OpenOSINT` mark the emergence of red-teaming as its own subfield specifically for agentic systems, distinct from traditional appsec.
- **Skill-format convergence** — the same "Agent Skills" packaging now spans Claude, Codex, Cursor, DeepSeek Harness, Gemini, and OpenCode, suggesting a de facto standard is forming worth tracking if you build agent tooling.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Open Source Trends 2026-09-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-20 11:59 UTC

---

# AI Open Source Trends Report — September 20, 2026

## 1. Finds

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — A coding-agent skill that runs multi-phase security audits and produces independently verified, machine-readable findings (not just a prompt template). Worth trying for any team using Claude Code/Codex in CI who wants audit output they can actually pipe into other tooling rather than free-text summaries; the Cloudflare provenance and +3,155 stars in a single day suggest real adoption, not just hype.

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — A zero-dependency C++23 CLI + MCP server that gives coding agents compressed "signatures" of a codebase (74.7% fewer bytes than full function bodies) so they can find what they need without reading the whole repo, then verify blast radius and tests-to-run before committing to a change. Useful for anyone hitting context-window costs when pointing agents at large repos; the "every guess labelled, every loss published" design is a genuinely different take on context compression versus naive chunking/embedding.

- **[okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)** — Git-native persistent memory for coding agents implementing Google's OKF v0.2 spec, with sub-300µs in-memory BM25 search and an embedded MCP server, claiming an 80% reduction in token bloat with zero external databases. A pure-Go, no-dependency implementation of a named open memory standard is notable — worth a look for anyone building cross-session agent memory instead of re-inventing it.

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — A single local Go binary that builds one shared memory layer across Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and 28 other agents by mining session history already sitting on disk — no LLM calls, no embeddings. Interesting because it's retroactive: a fix your agent found months ago surfaces automatically in a different tool today. Good fit for engineers juggling multiple coding-agent CLIs who are tired of re-explaining the same codebase quirks to each one.

- **[drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)** — Runs Gemma 4 26B-A4B inference in roughly 2GB of RAM on any M-series MacBook. If accurate, this is a meaningful efficiency result (a 26B-parameter-class model in laptop-tier memory) and a concrete way to try a very recent Gemma release locally without cloud spend — relevant to anyone doing on-device LLM experimentation.

- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** — A desktop app that records your on-screen work session, uses the GitHub Copilot CLI to reconstruct it into an intent + ordered steps, and turns that into a reusable Skill/Automation for Copilot Studio, Scout, or Copilot Cowork. A "record once, reuse forever" approach to skill authoring is a genuinely different workflow from hand-writing Agent Skills, and it's the kind of thing worth watching from Microsoft's Copilot team.

**Caution flag:** [affaan-m/ECC](https://github.com/affaan-m/ECC) is trending hard (+1,012 stars today on a 0-star base) but the description ("Skills, instincts, memory, security, and research-first development") is buzzword-dense without specifics on what it actually does differently from existing harness tooling — worth a skeptical look before adopting.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [trycua/cua](https://github.com/trycua/cua) | HTML | 0 (+859) | Open-source drivers, cross-OS fleets, and benchmarks for computer-use training/eval/data generation. Fast-rising today, positions itself as infra for the emerging "computer-use 2.0" category. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,277 | Zero-dependency CLI + MCP server that compresses codebases into agent-readable signatures. Backed by Red Hat's emerging technologies group, a credible source for dev-tooling infra. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,613 | Local-first search across a workspace built for both humans and AI agents. Rust implementation signals a performance-first design for large-repo search. |
| [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | Jupyter Notebook | 0 (+196) | Fault-tolerant GPU orchestration and training framework for models scaling to trillions of parameters. Targets large-scale training infra, not application code. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 705 | Git-native agent memory implementing Google's OKF v0.2 spec with sub-300µs BM25 search. Zero external DB dependency is the standout design choice. |
| [coder/coder](https://github.com/coder/coder) | Go | 0 (+402) | Secure, provisioned development environments now explicitly marketed for "developers and their agents." Established project pivoting toward agent workloads. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 4,657 | Open-source Chinese-language book quantitatively deriving LLM inference/training system design from hardware constraints, with companion tools. A reference resource rather than a runnable tool, but useful for engineers building infra. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,113 | Meta-harness that orchestrates Claude Code, Codex, Cursor, Pi and custom agents, letting you swap harnesses without rewriting workflows. Enforces policy/sandboxing across agents, a real gap as harness sprawl increases. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 878 | Shared memory layer across 30+ coding agents built from existing session history, no LLM/embeddings required. Novel retroactive-memory approach. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 4,328 | Self-hosted, multi-user, multi-agent assistant from Tencent Cloud. Enterprise-oriented alternative to hosted multi-agent platforms. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 669 | Scaffolds a custom branded agent harness (own CLI, MCP server, memory, learning loop, signed releases) that works across Claude Code, Codex, pi.dev, Hermes and OpenClaw. |
| [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | TypeScript | 0 (+89) | Framework specifically for building agentic apps, from Builder.io, an established no-code/dev-tools company entering the agent-framework space. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 482 | tmux TUI giving live status, quick prompts, worktrees, and diff review across every AI coding agent from one terminal pane. Practical daily-driver tool for multi-agent workflows. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+556) | Production-grade engineering skills for AI coding agents, from a well-known dev-tools voice (Addy Osmani), signaling growing standardization around the Agent Skills format. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+3,155) | Multi-phase security audit skill for coding agents with independently verified, machine-readable findings. Highest today-star-velocity item on the whole list. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,017 | Records a screen session and reconstructs it as a reusable Skill/Automation via GitHub Copilot CLI. Microsoft-backed take on "record once, replay as a skill." |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 5,201 | Open-source AI coworkers that each get their own browser, files, and tools, with actions decided before execution and logged after. Built on the AG-UI protocol, from an established agent-UI vendor. |
| [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | TypeScript | 0 (+585) | A "generative UI" framework from Vercel Labs for rendering LLM-produced JSON into live interfaces. Notable given Vercel's influence on frontend/AI tooling conventions. |
| [hypit-ai/hypit](https://github.com/hypit-ai/hypit) | TypeScript | 11,583 | Clones viral videos end-to-end via AI agents (face swap, script, B-roll, 100 variants per command). High stars but reads closer to a growth-hacking/content-farm tool than a developer utility — treat the framing skeptically. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,784 | Runs Gemma 4 26B-A4B inference in ~2GB RAM on M-series MacBooks. A concrete efficiency claim tied to a very recent model release, notable if it holds up under scrutiny. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 9,409 | Described as the "world's first open-source enterprise world model" — an ambitious, unverified claim; worth watching but treat cautiously until benchmarks appear. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 5,604 | Apache-incubating agent workspace that keeps a complete record of everything an agent did. Apache governance is a meaningful trust signal for enterprise adoption. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG) | Python | 10,030 | Backed by an arXiv paper (2606.28344), proposes pixel-native search that skips web/document parsing entirely. A genuinely different retrieval approach worth watching if the paper's claims replicate. |
| [Deuz-AI/Deuz-SDK](https://github.com/Deuz-AI/Deuz-SDK) | TypeScript | 697 | Zero-dependency TypeScript framework for production agents combining durable execution, long-term memory, hybrid RAG, and MCP tool calling behind one streaming API across Claude/GPT/Gemini/Grok/Mistral/DeepSeek. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 281 | A "Universal Cross-Model Episodic Memory Standard" — local-first, project-scoped SQLite memory engine usable across Antigravity, Claude Code, Cursor, Codex CLI, and OpenCode with no cloud lock-in. |
| [codecoradev/uteke](https://github.com/codecoradev/uteke) | Rust | 260 | Local-first memory engine for AI agents with semantic embedding search, packaged as a single zero-config Rust binary that runs fully offline. |

---

## 3. Trend Signal Analysis

Today's data shows **agent memory and cross-harness interoperability** as the clearest emerging cluster: deja-vu, okf-agent-memory, engrim, uteke, and Deuz-SDK all attack the same problem — giving coding agents persistent, portable memory — but with distinct architectures (retroactive session mining, a named open standard, local SQLite, embedded vector search). This is a maturing space moving from "just add RAG" toward more specialized, often LLM-free retrieval (BM25, embeddings-only, session-log parsing) explicitly optimized for token cost.

A second cluster is **meta-harnesses and control planes** (omnigent, metaharness, agent-manager, claudexor) — tools that sit above Claude Code, Codex, Cursor, and peers rather than competing with them, reflecting a market where users now run multiple agent CLIs simultaneously and want unification rather than another standalone agent.

**Agent Skills** as a packaging format continues to solidify (cloudflare/security-audit-skill, addyosmani/agent-skills, microsoft/skill-recorder), with Cloudflare and Microsoft now publishing skills alongside independent developers — a sign the format is being treated as infrastructure, not a novelty.

On the model side, turbo-fieldfare's Gemma 4 26B-A4B on-device inference claim ties directly to a recent model release cycle and continues the push toward efficient local inference on consumer Apple Silicon. Context-efficiency tooling (ripwire's compressed signatures, zvec-grep's local search) also reflects growing attention to reducing token/context costs as agents work over larger codebases.

---

## 4. Community Hot Spots

- **Agent memory standardization** — multiple independent projects (okf-agent-memory, engrim, deja-vu) converging on cross-session, cross-tool memory suggests this becomes a de facto requirement for coding agents within the next few cycles.
- **Skills as a distribution format** — Cloudflare and Microsoft both shipping official Agent Skills signals the format is moving from community convention toward vendor-endorsed infrastructure.
- **Context-cost tooling** — ripwire and zvec-grep both target reducing what agents must read to operate on large repos, a direct response to token-cost pain at scale.
- **Meta-harnesses over single agents** — omnigent, metaharness, and agent-manager reflect demand for unifying multiple coding-agent CLIs rather than picking one winner.
- **On-device efficient inference** — turbo-fieldfare's low-RAM Gemma 4 result is worth tracking as a bellwether for how quickly new frontier-adjacent models get squeezed onto consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Open Source Trends 2026-08-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-13 08:16 UTC

---

# AI Open Source Trends — 2026-08-13

## 1. Finds

- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — Indexes the session logs your coding agents already write to disk (Claude Code, Codex, and 15 others) and surfaces past solutions automatically at session start, with no LLM or embedding calls involved. Claims 84.9% hit@1 on LongMemEval-S from a single zero-dependency binary — worth trying for anyone tired of re-explaining the same bug fix to their agent every week.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Runs a 2.78-trillion-parameter Kimi K3 model on a single CPU in 8.24 GB RAM, written in portable C99 with no BLAS, framework, or GPU dependency. A genuine engineering feat for anyone interested in extreme low-resource MoE inference, not a product but a reference implementation worth reading the source of.
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — A foundation model purpose-built for "the language of financial markets" rather than general text, i.e. trained on price/volume sequences as a token stream. Quant researchers and fintech engineers exploring transformer-based market modeling have a concrete, narrow-domain baseline to benchmark against.
- **[microsoft/SkillOpt](https://github.com/microsoft/SkillOpt)** — A text-space optimizer that trains reusable natural-language "skills" for frozen LLM agents through trajectory-driven edits and validation-gated updates, outputting deployable `best_skill.md` files. Relevant to anyone building agent-skill libraries who wants an automated way to iterate on prompt/skill quality instead of hand-tuning.
- **[elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine)** — Indexes a codebase so agents search it instead of reading raw files, claiming a 94% reduction in tokens spent on context; ships as a local, free MCP server compatible with Claude Code, Codex, Copilot, Cursor, and Gemini CLI. Worth a trial for anyone hitting context-window costs on large repos, though the 94% figure is self-reported and unverified.
- **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — A 14 MB foundation model aimed at phones, wearables, smart-home devices, and robots. Interesting for embedded/edge developers who need on-device inference without cloud round-trips; too early to tell if quality holds up at that size, so treat it as a prototype to evaluate rather than a drop-in solution.

Honorable mention for skepticism: **[coco-research/coco](https://github.com/coco-research/coco)** markets itself as "a superintelligent agent framework powered by an advisory board of 389 world-class minds" with "142 skills, 277 commands" — the copy reads as hype; there's no concrete technical differentiator described beyond scale of feature count.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [t8y2/dbx](https://github.com/t8y2/dbx) | Rust | 14,393 | A 20 MB cross-platform DB client for 70+ databases with a built-in AI assistant and MCP server. Notable for packing AI tooling into a lightweight, dependency-free client rather than a heavyweight IDE plugin. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 5,317 | Runs the 2.78T-parameter Kimi K3 on a single CPU in 8.24 GB RAM using portable C99. A striking demonstration of how far CPU-only MoE inference has come. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 5,900 | Runs Gemma 4 26B-A4B inference in ~2 GB of RAM on any M-series MacBook. Points at growing interest in squeezing large models onto consumer Apple Silicon. |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0 (+315) | A 14 MB foundation model targeted at phones, wearables, and robots — today's star count is entirely momentum, worth watching for real-world benchmarks. |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Python | 0 (+65) | Official inference and LoRA trainer package for the LTX-2 audio-video generative model, from a known generative-video shop. |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | Rust | 0 (+421) | New infra project under the NVIDIA-NeMo org gaining fast early traction; no public description yet, worth tracking as it matures. |
| [elara-labs/code-context-engine](https://github.com/elara-labs/code-context-engine) | Python | 393 | Local MCP server that indexes a codebase so agents search rather than read files, claiming a 94% token reduction on coding-agent workflows. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 8,763 | A meta-harness that orchestrates Claude Code, Codex, Cursor, and Pi under one policy/sandboxing layer, letting teams swap agent backends without rewriting workflows. |
| [KunAgent/Kun](https://github.com/KunAgent/Kun) | TypeScript | 6,102 | Local-first agent workspace spanning coding, writing, design, research, and automation with both desktop GUI and TUI runtimes. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0 (+1,873) | A packaged roster of specialized "agency" agents (frontend, community, QA personas) — today's spike suggests strong initial interest in ready-made agent personas. |
| [stablyai/orca](https://github.com/stablyai/orca) | TypeScript | 0 (+1,235) | An ADE for running a fleet of parallel coding agents under your own subscriptions, across desktop, mobile, and VPS. |
| [Netw0rkNoob/VulnClaw](https://github.com/Netw0rkNoob/VulnClaw) | Python | 2,733 | Chains an AI agent, MCP tools, and pentest skills into an automated recon → exploit → report pipeline — a niche but concrete application of agent orchestration to offensive security. |
| [cosmicstack-labs/mercury-agent](https://github.com/cosmicstack-labs/mercury-agent) | TypeScript | 2,997 | A permission-hardened, token-budgeted agent runnable 24/7 from CLI or Telegram, aimed at always-on personal-assistant use cases. |
| [embabel/embabel-agent](https://github.com/embabel/embabel-agent) | Kotlin | 0 (+40) | An agent framework for the JVM — notable mainly for targeting a language ecosystem agent tooling rarely reaches. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | HTML | 23,908 | An agent skill that generates polished HTML slide decks with editorial layouts and a WebGL presentation runtime, rather than exporting to PowerPoint. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 0 (+476) | Turns documents or topics into native, editable PowerPoint decks with charts, transitions, and audio narration from speaker notes — today's momentum suggests demand for AI-authored office documents beyond static slides. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 4,886 | An AI video skill for Claude Code/Codex built on Remotion, with 152 shot-recipe cards for cinematic product videos — a concrete template library rather than a generic generator wrapper. |
| [worldwonderer/oh-story-claudecode](https://github.com/worldwonderer/oh-story-claudecode) | JavaScript | 5,492 | A skill pack covering the full web-fiction pipeline — trend scanning, outlining, drafting, de-AI-ifying prose, and cover art — for long- and short-form Chinese web novels. |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 0 (+571) | An open-source app for managing agents at work; today's early traction is notable but the description alone doesn't yet differentiate it from adjacent "agent hub" tools. |
| [Orkas-AI/Orkas-VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio) | TypeScript | 522 | Turns a coding agent into a video studio — describe a video in plain language and the agent writes the timeline and renders the file. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | Python | 15,974 | A text-space optimizer that trains reusable natural-language skills for frozen LLM agents via trajectory-driven edits and validation gates, outputting deployable `best_skill.md` artifacts — a training approach for prompts/skills rather than weights. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0 (+266) | A foundation model trained specifically on financial-market data as a sequence-modeling problem, distinct from general-purpose LLMs repurposed for finance. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 5,900 | Gemma 4 26B-A4B inference in ~2 GB RAM on M-series Macs — a practical demonstration of quantization/engineering work rather than a new model release. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 629 | Indexes existing coding-agent session history across 17 harnesses to recall prior solutions automatically, using no LLM or embeddings and reporting 84.9% hit@1 on LongMemEval-S — a rare benchmarked, zero-dependency memory tool. |
| [caura-ai/caura-memclaw](https://github.com/caura-ai/caura-memclaw) | Python | 430 | Governed, MCP-native shared memory for multi-agent, multi-tenant fleets, with trust tiers, keystone policies, and audit trails — aimed at organizations running many agents that need to share and police memory access. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 678 | Fully offline, encrypted agentic memory with a GUI memory map, one-click install across OSes and agents. |
| [future-agi/future-agi](https://github.com/future-agi/future-agi) | Python | 1,664 | Self-hostable, Apache-2.0 platform for tracing, evaluating, and guardrailing LLM/agent applications end to end. |
| [CodeAbra/iai-personal-memory-engine](https://github.com/CodeAbra/iai-personal-memory-engine) | Python | 498 | A free, local "cyber brain" memory layer that persists context across Cursor, Claude Code, Codex, and OpenClaw sessions. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 3,418 | An AI-native markdown IDE and LLM wiki for building and querying structured knowledge bases. |

## 3. Trend Signal Analysis

Today's clearest signal is a cluster of **agent memory infrastructure** projects landing simultaneously: `deja-vu`, `caura-memclaw`, `Compartment`, `iai-personal-memory-engine`, and `beever-atlas` all tackle the same underlying problem — coding agents forget everything between sessions, and teams running agent fleets need shared, governed, persistent memory. `deja-vu`'s approach (mining agents' own session logs with no LLM/embedding calls, benchmarked against LongMemEval) stands out as the most technically grounded entry in this group and suggests the field is starting to move past "just embed everything" toward more targeted, evaluable retrieval methods.

A second pattern is the sheer density of **Claude Code / Codex "Agent Skill" packages** — diagram generation, PPT decks, video editing, novel writing, translation, TCM course study — reflecting how the Agent Skills format (skill.md + bundled assets) has become a lightweight distribution unit for narrow, vertical AI capabilities, distinct from full agent frameworks.

A third, more localized signal: at least six separate repos target **China A-share quant trading** with LLM-driven research/decision layers (`TradingAgents-astock`, `tickflow-stock-panel`, `Vibe-Research`, `ashare-lake`, `free-stockdb`, `a-stock-data`), suggesting a fast-growing, fragmented vertical community building on shared data sources rather than converging on one tool.

Finally, extreme-efficiency inference work continues to gain visibility — a 2.78T-parameter model on a CPU, a 26B model in 2 GB of RAM, a 14 MB foundation model for wearables — pointing to sustained community interest in running large models on constrained hardware rather than only chasing bigger frontier models.

## 4. Community Hot Spots

- **Agent memory/context tooling** is the most active new sub-category today — five-plus independent projects shipped memory layers in the same 24-hour window, worth watching for consolidation.
- **`vshulcz/deja-vu`** deserves a closer look for its no-LLM, benchmarked approach to session recall — a rare case of a memory tool with a stated, checkable accuracy number instead of just a feature list.
- **Claude Code Skills as a distribution format** continues to expand into non-coding verticals (PPT, video, fiction writing, TCM study notes), showing the skill packaging model has outgrown its coding-agent origins.
- **Extreme low-resource inference** (`kimi-k3-in-c`, `turbo-fieldfare`, `cactus-compute/needle`) is a good area to track for engineers interested in on-device or CPU-only deployment rather than API-based inference.
- **China A-share LLM/quant tooling** is a fast-moving but fragmented niche — useful to know about if working in that vertical, but no clear leader has emerged yet among the six competing projects.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
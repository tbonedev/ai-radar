# AI Open Source Trends 2026-09-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-24 12:30 UTC

---

# AI Open Source Trends Report — 2026-09-24

## 1. Finds

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — "Agent memory that learns," and today's single biggest mover (+1,607 stars). It's pitched as a memory layer that improves from experience rather than just storing embeddings for retrieval. Worth a look for anyone building long-running agents that currently reset context every session — but with 0 baseline stars before today, treat the "learns" claim as unverified until you've tried it.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** — a zero-dependency C++23 CLI + MCP server that gives coding agents blast-radius and test-impact answers ("what breaks if I touch this") instead of making them grep the whole repo; claims function signatures at 74.7% fewer bytes than full bodies. Backed by Red Hat's emerging-tech group, this is a concrete, narrow infra bet on agent context efficiency, not another agent wrapper.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** — a single Go binary that builds shared memory for Claude Code, Codex, Cursor, Copilot CLI, OpenClaw and ~29 other agents from session history already sitting on disk, with no LLM or embeddings involved. Solves a real, specific pain point (a fix found in one tool doesn't help you in another) for anyone who hops between multiple coding agents.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — runs the 2.78-trillion-parameter Kimi K3 on a single CPU in 8.24 GB RAM, pure C99, no BLAS/framework/GPU. A genuinely impressive low-level engineering exercise for anyone curious about extreme MoE offloading and quantization, rather than a production tool.
- **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** — official NVIDIA library unifying quantization, pruning, distillation, NAS and speculative decoding for compressing models before deployment to TensorRT-LLM/TensorRT/vLLM. Low star velocity (+22 today) but real production utility given the source.
- **Caution flag**: [deeplethe/utopia](https://github.com/deeplethe/utopia) claims to be "the world's first open-source enterprise world model" and shows exactly 10,000 stars with no daily delta or substantive description — a suspiciously round number for an unfamiliar repo. Treat it as unverified hype until there's a README or demo to back the claim.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | Python | 0 (+22) | Official NVIDIA library unifying quantization, pruning, distillation and speculative decoding for deployment on TensorRT-LLM, TensorRT and vLLM. Low daily gain but strong production credibility given the source. |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | Python | 0 (+463) | Open-source SDK for building and controlling an agent harness end-to-end, in Python and TypeScript, model- and cloud-agnostic. Fast uptake today reflects demand for custom harnesses beyond a single vendor's CLI. |
| [google/ax](https://github.com/google/ax) | Go | 0 (+1,376) | Google's open agentic orchestration runtime. A heavyweight new entrant, evidenced by the largest single-day jump among infra tools on this list. |
| [leejet/stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) | C++ | 0 (+33) | Pure C/C++ inference for diffusion models (SD, Flux, Wan, Qwen Image, Z-Image) with no Python dependency, useful for lightweight or edge image-generation deployments. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,335 | Zero-dependency C++23 CLI + MCP server giving coding agents blast-radius/test-impact analysis instead of full-repo reads; 74.7% smaller context via signatures. Backed by Red Hat's emerging-tech team. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 960 | Single Go binary giving 30+ coding agents shared memory built from on-disk session history, no LLM or embeddings required. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 564 | Local-first, Git-versioned MCP server indexing a codebase and DB schema so agents get long-term context before editing; positions itself as infra under Claude Code, Codex, Cursor and opencode. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 0 (+1,607) | "Agent memory that learns" — the biggest single-day mover on this list, claiming a learning memory layer rather than static vector recall. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,201 | Meta-harness orchestrating Claude Code, Codex, Cursor, Pi and custom agents behind one policy/sandboxing layer, letting teams swap harnesses without rewriting integrations. |
| [loopx-project/loopx](https://github.com/loopx-project/loopx) | Python | 5,973 | A control plane with a durable state kernel for long-horizon agents, aimed at keeping multi-session work moving without constant human re-prompting. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+415) | From HKU's Data Science Lab, a project to make "all software agent-native" via a CLI-Hub model — more research pedigree than the average agent-CLI wrapper. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+606) | An agentic skills framework paired with a documented software-development methodology, not just another tool. |
| [kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew) | Python | 4,123 | Persistent workspace for dev work that carries state and self-improves across sessions, addressing the common pain of agents losing context between runs. |
| [YoanWai/agent-manager](https://github.com/YoanWai/agent-manager) | Go | 496 | tmux-based TUI for live status, quick prompts, git worktrees and diff review across any coding agent — a practical ops tool rather than a new agent. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+1,060) | "The Office Harness for AI Agents" — spreadsheets, docs, slides, canvas, relational tables and PDF in one runtime that agents can drive directly. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 7,645 | Free open-source AI office suite (Docs/Sheets/Slides/PDF) with a CLI and agent skill so Claude Code, Codex and Cursor can edit real .docx/.xlsx/.pptx files locally, bring-your-own-key. |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Python | 0 (+510) | Official Anthropic repo for financial-services use cases — worth tracking as a signal of where Anthropic sees enterprise agent adoption heading. |
| [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens) | TypeScript | 1,434 | Renders every PR as an animated architecture/data-flow walkthrough inline in the PR, shipped as a GitHub App, Action, CLI, or coding-agent skill. |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | Python | 289 | Self-hosted, MCP-native China A-share market data infra — 42 daily datasets (pricing, fundamentals, capital flows, announcements), no registration or API token needed. |
| [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) | TypeScript | 9,365 | AI video-production skill for Claude Code/Codex on Remotion, shipping 152 shot-recipe cards and 209 motion previews for product videos. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,515 | Runs the 2.78-trillion-parameter Kimi K3 on a single CPU in 8.24 GB RAM, pure C99, no BLAS/framework/GPU — a notable extreme-quantization/offloading feat. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,817 | Runs Gemma 4 26B-A4B inference in ~2 GB RAM on any Apple-silicon MacBook, making a mid-size MoE model practical on consumer hardware. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,219 | Open Chinese-language book quantitatively deriving LLM training/inference system design from hardware constraints and model architecture, with companion tools and experiments. |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 0 (+310) | A from-scratch AI engineering curriculum for engineers who want first-principles understanding rather than another framework wrapper. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | Python | 1,372 | A 7-layer memory OS for agents combining Qdrant vector storage, structured facts, "fabric recall" and an auto-curated wiki with surgical context injection — fully local, any LLM provider. |
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | TypeScript | 4,311 | An AI-native markdown IDE that doubles as an LLM-queryable team wiki, for docs that need to be both human-editable and agent-searchable. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,173 | Multimodal parsing engine paired with an ontology-driven, LLM-wiki-built knowledge engine — infrastructure for AI-ready knowledge bases rather than a RAG demo. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 394 | ModelScope's practical cookbook covering model selection, inference, fine-tuning, evaluation, RAG, agents and AIGC — a solid onboarding resource. |
| [youngyangyang04/llm-master](https://github.com/youngyangyang04/llm-master) | — | 944 | A full-stack Chinese-language LLM learning path covering prompt engineering, RAG, agents, MCP, fine-tuning and deployment — a study resource, not a library. |

## 3. Trend Signal Analysis

Agent *memory* is today's clearest breakout category: `vectorize-io/hindsight` (+1,607), `vshulcz/deja-vu`, `ClaudioDrews/memory-os`, `okf-memory/okf-agent-memory`, `aoci-spec/aoci-code` and `engrim` all tackle the same problem from different angles — giving coding/general agents durable, cross-session (and in several cases cross-tool) recall without re-training a model. This is a maturing signal, not a one-off: the community has clearly identified "agents forget everything between sessions" as the next bottleneck now that raw model capability and basic tool-calling are solved problems.

A second cluster is agent *harness/meta-harness* tooling — `google/ax`, `strands-agents/harness-sdk`, `omnigent-ai/omnigent`, `ruvnet/metaharness`, `sandbaseai/sandbase-harness` — all offering ways to build or swap the runtime that sits around a model, rather than the model or a single vendor's CLI. This tracks with the proliferation of coding-agent CLIs (Claude Code, Codex, Cursor, OpenClaw, Hermes, pi) over the past year: builders now want an abstraction layer instead of picking one.

Two efficiency-engineering feats stand out as a new direction: `FareedKhan-dev/kimi-k3-in-c` (2.78T params on CPU, 8.24 GB RAM) and `drumih/turbo-fieldfare` (Gemma 4 26B-A4B in ~2 GB on Apple silicon) both push large/MoE models onto commodity hardware via aggressive offloading — a practical counter-trend to ever-larger cloud-only inference.

One caution: several `topic:claude-code`/`topic:mcp` search hits (e.g. `img2threejs`, `lidge-jun/opencodex`, `cobusgreyling/loop-engineering`) show 10,000+ stars on thinly-described, apparently new repos — a pattern consistent with star-farming to game topic search, not organic interest.

## 4. Community Hot Spots

- **Agent memory is the theme of the day** — `hindsight`, `deja-vu`, `memory-os`, `okf-agent-memory`, `engrim`. If you're maintaining a long-running agent, this cluster is worth a survey before building your own.
- **Cross-agent portability tooling** (`deja-vu`, `metaharness`, `aoci-code`) reflects real fatigue with re-learning context every time a team switches between Claude Code, Codex, Cursor, etc.
- **Extreme inference efficiency** (`kimi-k3-in-c`, `turbo-fieldfare`) — worth watching if you care about running frontier-scale or mid-size MoE models without a GPU farm.
- **Agent-native office/document tooling** (`univer`, `genoffice`) — a concrete, demoable application category (as opposed to another chat UI) that's worth trying if your agents need to produce real deliverables.
- **Be skeptical of star counts on `claude-code`/`mcp` topic search results** — several entries show large totals with generic descriptions and no daily-gain data, a pattern worth discounting rather than treating as a genuine popularity signal.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
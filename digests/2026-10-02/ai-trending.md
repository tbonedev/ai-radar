# AI Open Source Trends 2026-10-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-02 13:30 UTC

---

# AI Open Source Trends Report — 2026-10-02

Trending-list star totals were not provided (they show ⭐0), so the tables give "—" for total stars on those repos. Today's gains are copied verbatim.

## 1. Finds

- **[mksglu/context-mode](https://github.com/mksglu/context-mode)** sandboxes tool output before it reaches the model, which it says cuts output by 98%. It also persists session memory and works across 17 platforms through MCP and hooks. Anyone whose coding agent burns its context window on long shell or tool output should try it. The 98% figure is self-reported.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a zero-dependency C++23 CLI and MCP server that returns code signatures instead of function bodies (it claims 74.7% fewer bytes). It also reports blast radius and which tests to run after a change. It suits engineers running agents on large repos who want cheaper retrieval without embeddings. It comes from Red Hat's emerging-tech group, so it is more credible than a typical solo repo.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** is a single Go binary that searches the session history Claude Code, Codex, Cursor and 32 other agents already store on your disk. It uses no LLM. It's useful if you want to recover earlier decisions across tools without sending data anywhere.
- **[tigerless-labs/cost-xray](https://github.com/tigerless-labs/cost-xray)** shows what Claude Code and Codex actually send to the API, with a per-part cost breakdown. It's for anyone debugging surprising token bills or bloated system prompts and tool schemas.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** claims to run a 2.78T-parameter Kimi K3 on one CPU in 8.24 GB of RAM, in portable C99. It's worth reading for the inference tricks if the claim holds. Be skeptical until someone reproduces the throughput, because a model that size in 8 GB implies heavy streaming from disk or very aggressive quantization.
- **[NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)** is a Rust runtime meant to run autonomous agents safely and privately (+584 today). Platform and security engineers who need to sandbox agents will want to evaluate it, and NVIDIA's backing gives it weight. Check its isolation guarantees before you rely on them.

**Looks like hype or thin:** [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) (+1,429) and [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) are prompt and persona tricks, "lazy senior dev" and "talk like a caveman". Their popularity looks more meme-driven than technical. Several 10k+ star repos in the topic search have vague descriptions, for example [spinabot/brigade](https://github.com/spinabot/brigade) and [deeplethe/utopia](https://github.com/deeplethe/utopia). Several also have star counts out of proportion to how new they appear, so inspect them before trusting them.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | TypeScript | — (+276) | Sandboxes tool output and persists session memory for coding agents via MCP and hooks. It claims a 98% reduction in output size across 17 platforms. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,381 | A C++23 CLI and MCP server that gives agents code signatures, blast radius and tests-to-run. It claims 74.7% fewer bytes than sending bodies. |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | C | — (+241) | A local, pre-indexed code knowledge graph that syncs on code changes. It serves Claude Code, Codex, Gemini, Cursor and others to cut tokens and tool calls. |
| [tigerless-labs/cost-xray](https://github.com/tigerless-labs/cost-xray) | Python | 3,698 | Shows what Claude Code and Codex send to the API and what each part costs. Useful for auditing token spend. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,800 | A provider proxy that lets Codex CLI and Claude Code use any LLM, including DeepSeek and Ollama. It has strong adoption. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 4,205 | A menu-bar tool for pairing any agent with any model, such as Codex on DeepSeek or Claude Code on Kimi. It handles model routing locally. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,835 | A dependency-free C99 inference implementation that claims to run a 2.78T-parameter model in 8.24 GB of RAM. The claim needs independent verification. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | TypeScript | — (+691) | Builds persistent agent teams with roles, shared context and owned work from Claude Code, Codex and Pi. Notable for multi-harness orchestration. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,420 | A meta-harness that orchestrates Claude Code, Codex, Cursor and Pi, with policies and sandboxing. It lets you swap harnesses without rewriting. |
| [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | Rust | — (+584) | A safe, private runtime for autonomous agents. Its backer and security focus make it worth tracking. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | — (+683) | One CLI that lets agents read and search Twitter, Reddit, YouTube, GitHub, Bilibili and XiaoHongShu with no API fees. Fast gains suggest real demand for agent web access. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 683 | Scaffolds a branded agent harness with its own npx CLI, MCP server, memory and signed releases. A niche but practical option for harness builders. |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | TypeScript | 679 | A local-first agent runtime and MCP bridge with sandboxed sessions, audit and replay, and a console. Replay and audit make it suitable for debugging agent runs. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,481 | Infrastructure for continually self-improving agents. Its description is vague, so check the code before relying on it. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | TypeScript | — (+584) | Renders video from HTML and is built for agents. It's a clean primitive for programmatic video generation. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,400 | A free, open-source office suite with an agent and a CLI so coding agents can create real .docx, .xlsx and .pptx files locally. Bring your own key. |
| [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens) | TypeScript | 1,834 | Draws pull requests as animated architecture and data-flow walkthroughs. It ships as a GitHub App, Action, CLI or skill. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,181 | Records your screen session and turns it into a reusable Skill or Automation using the Copilot CLI. A concrete way to produce skills from demonstrations. |
| [latent-spaces/brag](https://github.com/latent-spaces/brag) | Python | 12,928 | Turns a project into a short launch video with one command. The star count looks high for the niche. |
| [pablostanley/yoinks](https://github.com/pablostanley/yoinks) | TypeScript | — (+629) | Downloads videos from your terminal. It isn't clearly AI-related, so treat it as borderline. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,852 | Runs Gemma 4 26B-A4B in about 2 GB of RAM on M-series MacBooks. It's relevant to anyone targeting on-device inference. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 887 | Exact LLM decoding on Apple Silicon (MLX) behind an OpenAI-compatible endpoint. It's a small but practical local-serving option. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,775 | An open book manuscript that derives LLM inference and training system design quantitatively from hardware constraints. It includes calculation tools. |
| [modelscope/ms-cookbook](https://github.com/modelscope/ms-cookbook) | HTML | 409 | A ModelScope guide covering model selection, inference, fine-tuning, evaluation and RAG. A learning resource rather than a tool. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,118 | Searches the session history of 30+ coding agents already on disk, with no LLM. It ships as a single Go binary. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 742 | Git-native persistent memory for coding agents, built on Google OKF v0.2 with in-memory BM25 search and an embedded MCP server. It needs no external database. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 707 | A Git-versioned map of code and database schema that agents read before editing. It runs as a local MCP server. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 3,868 | Local-first workspace search for humans and agents. Worth a look next to ripwire. |
| [timgordontg/engrim](https://github.com/timgordontg/engrim) | Python | 295 | Project-scoped SQLite episodic memory shared across Claude Code, Codex, Copilot CLI and OpenCode. It has no cloud dependency. |
| [MaxFreedomPollard/Compartment](https://github.com/MaxFreedomPollard/Compartment) | Python | 579 | Encrypted, fully offline agent memory with a GUI memory map. It's aimed at privacy-sensitive setups. |

## 3. Trend Signal Analysis

**Skills are the hottest category.** Today's list is dominated by skill and methodology repos: [obra/superpowers](https://github.com/obra/superpowers), [mattpocock/skills](https://github.com/mattpocock/skills), [google/skills](https://github.com/google/skills) and [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills). The agent-skills topic is large and includes vertical bundles for video, design, job hunting and short drama. Vendors are now shipping official skill packs, and that is a stronger signal than individual star spikes.

**Context economy is the second theme.** [context-mode](https://github.com/mksglu/context-mode), [codegraph](https://github.com/colbymchenry/codegraph), [ripwire](https://github.com/redhat-et/ripwire), [cost-xray](https://github.com/tigerless-labs/cost-xray) and the memory tools all aim to cut tokens and tool calls. Token cost and context bloat have become the practical bottleneck for coding agents.

**Newer directions:**
- Cross-harness orchestration, as in [openrig](https://github.com/mvschwarz/openrig) and [omnigent](https://github.com/omnigent-ai/omnigent). Claude Code, Codex and Pi are treated as interchangeable workers.
- Proxies that decouple the harness from the model, such as [opencodex](https://github.com/lidge-jun/opencodex) and [magpie](https://github.com/yetone/magpie).
- Agent sandboxing and runtimes, such as [OpenShell](https://github.com/NVIDIA/OpenShell) and sandbase-harness.
- Git-native, local-first agent memory.

**Industry context.** Several repos target very large or very small models, including Kimi K3 and Gemma 4 on laptops. That points to continued interest in running frontier-class models locally. I can't tie today's moves to a specific release from this data alone.

## 4. Community Hot Spots

- **Token and context optimization tooling.** [context-mode](https://github.com/mksglu/context-mode), [ripwire](https://github.com/redhat-et/ripwire), [codegraph](https://github.com/colbymchenry/codegraph) and [cost-xray](https://github.com/tigerless-labs/cost-xray) address real cost problems, so benchmark them on your own repo.
- **Multi-harness orchestration.** [openrig](https://github.com/mvschwarz/openrig) and [omnigent](https://github.com/omnigent-ai/omnigent) are worth trying if you already run more than one coding agent.
- **Agent sandboxing.** [OpenShell](https://github.com/NVIDIA/OpenShell) and [sandbase-harness](https://github.com/sandbaseai/sandbase-harness) matter as agents gain more autonomy.
- **Cross-agent local memory.** [deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) and [engrim](https://github.com/timgordontg/engrim) share a design: local, no LLM, no cloud.
- **Extreme on-device inference.** [turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) and [kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) are interesting, but verify their claims before building on them.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
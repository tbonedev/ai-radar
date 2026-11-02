# AI Open Source Trends 2026-11-03

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-02 16:47 UTC

---

# AI Open Source Trends Report, 2026-11-03

Trending repos in the input show ⭐0 as total stars, which means the total wasn't captured. I mark those "n/a" and show only today's gain. Several topic-search entries look inflated or promotional, and I flag them below.

## 1. Finds

- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** is a Rust tool that lets an agent operate desktop apps through OS accessibility trees instead of screenshots. Element refs stay stable and actions are safe to retry. It suits anyone building computer-use agents who is tired of pixel-guessing flakiness. It gained +2,243 today, and the approach is sound.
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** is a pure-C, zero-dependency engine that runs large MoE models by streaming expert weights from disk. It is for people who want to try frontier-size MoE models on ordinary hardware, and for anyone curious about the offloading design. Check real tokens/sec before trusting the claim, because disk streaming usually costs a lot of speed.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** is a C++23 CLI and MCP server that gives coding agents repo signatures (reportedly 74.7% fewer bytes than full bodies). It also reports blast radius and which tests to run after a change. It is useful if your agent burns context reading whole files. The star count (2,506) comes from topic search, so treat it as unverified.
- **[p-e-w/heretic](https://github.com/p-e-w/heretic)** modifies a language model without training. It removes refusals, reduces sycophancy and suppresses "slop". Researchers and local-model users who want uncensored or less sycophantic weights would use it. It is dual-use, and quality should be checked per model.
- **[max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)** is a Rust CLI for managing Git worktrees, aimed at running several agents in parallel. It is for anyone running multiple Claude Code or Codex sessions on one repo. The idea is small but fits a real workflow gap.
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)** does "experience-driven black-box cost control for coding agents". Teams with large coding-agent bills would try it. Details are thin in the listing, so read the README before relying on it.

**Hype warnings:** several topic-search entries have huge star counts and vague or promotional descriptions. Examples are [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) (57,127 stars, "unlimited free frontier models"), [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) (an Android TV debloater with little AI relevance) and the cluster of "Jev"/"DSH" repos. Treat these as likely star-farming or marketing until proven otherwise.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | n/a (+2,243) | Gives agents desktop control through accessibility trees rather than pixels. It was the largest AI-related gain among the repos with a today figure. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | n/a (+655) | Dependency-free engine that streams MoE experts from disk. It is a notable approach to running huge models on modest hardware. |
| [FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken) | Python | n/a (+654) | Claims datacenter-scale model serving on a desktop. The description is vague, so verify benchmarks before adopting. |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Rust | n/a (+136) | Git worktree manager built for parallel agent workflows. A small but practical tool for multi-agent setups. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,506 | A "ripgrep for AI context" with an MCP server. It reports blast radius and tests to run after a change. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 28,344 | Menu-bar app for routing agents to other providers' models, such as Codex on DeepSeek. It addresses a real need, but the stars are unverified. |
| [zvec-ai/zvec-grep](https://github.com/zvec-ai/zvec-grep) | Rust | 4,215 | Local-first workspace search for humans and AI agents. Another sign of tooling for agent context retrieval. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+1,799) | Captures agent session activity, compresses it, and injects it into later sessions. It works across Claude Code, Codex, Gemini, Copilot and OpenCode. |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | TypeScript | n/a (+3,216) | Biggest gainer today, but the listing has no description. It is presumably a coding-agent front end, so check the README. |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | n/a (+1,380) | Setup with 49 agents and 72 skills arranged like a game studio. It is mostly prompt configuration, so treat it as a template. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | n/a (+970) | A developer's personal agent skills directory, published as-is. It is worth browsing for practical patterns. |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | n/a (+451) | Tool for managing agents at work. It is crowded territory, so check for real differentiation. |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | TypeScript | 7,134 | Lightweight IDE built around the pi agent. Worth watching because JetBrains is behind it. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,367 | Session-history search and memory for Claude Code, Codex and Cursor, with hooks. A local, practical memory layer. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 6,899 | Mac notch and iPhone companion that monitors coding agents and lets you approve actions remotely. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | Python | n/a (+858) | Web scraping framework covering single requests through full crawls. It is useful for feeding agents, though only loosely AI-specific. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | n/a (+855) | Foundation model for financial market data ("language of markets"). A domain-specific model worth testing against your own backtests. |
| [kornia/kornia](https://github.com/kornia/kornia) | Python | n/a (+412) | Mature geometric computer-vision library for spatial AI. It is established and not new, but still useful. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 11,554 | Open-source office suite with a built-in agent and a CLI that lets coding agents create real .docx/.xlsx/.pptx files. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 5,644 | Records your screen work and turns it into a reusable skill using the Copilot SDK. |
| [brenoepics/video-to-skill](https://github.com/brenoepics/video-to-skill) | Rust | 147 | Turns tutorial videos into installable agent skills by reading the screen, not the transcript. Small but a novel idea. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | Python | n/a (+325) | "The best ChatGPT that $100 can buy". It is a well-known, educational full-stack training recipe. |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Python | n/a (+404) | Training-free model modification that removes censorship and sycophancy. It is dual-use and should be evaluated per model. |
| [miuuyy/codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web) | TypeScript | 15,416 | Uses ChatGPT Web as a model inside Codex. It likely conflicts with provider terms, so use with caution. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,789 | Infrastructure for continually self-improving agents. The claim is broad, so verify what is actually implemented. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,310 | Long-term agent memory using plain Markdown as the source of truth, with local ranked retrieval. Claude Code and Codex share one store, with no API key. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,839 | Git-versioned map of a codebase and database schema that agents read before editing. A local-first MCP server. |
| [yuezhiai/jonex](https://github.com/yuezhiai/jonex) | Python | 1,557 | Multimodal parsing plus an ontology and LLM-wiki knowledge engine. Broad scope. |
| [sahenjp/RustXNG](https://github.com/sahenjp/RustXNG) | Rust | 678 | SearXNG-based metasearch and grounding engine for agents, with a JSON API. A self-hostable search backend for RAG. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 252 | Turns documents into a readable Markdown wiki that answers with citations. It works with Ollama and other providers. |
| [calmrocks/ai-engineer-notebooks](https://github.com/calmrocks/ai-engineer-notebooks) | Jupyter Notebook | 722 | Framework-free Colab notebooks covering RAG, tool calling, evals and MCP. It runs on the free Groq API. |

## 3. Trend Signal Analysis

**Agent infrastructure around coding agents is where the attention is.** Today's most interesting repos are mostly not agents themselves. They are the layer around them: memory (claude-mem, agent-memory, deja-vu), context reduction (ripwire, aoci-code), parallel worktrees (worktrunk), and approval and monitoring (coucou). The shared assumption is that Claude Code, Codex and similar tools are the default workflow and the weak points are context, persistence and supervision.

**Skills are a distribution format.** Many topic hits are agent skills for niche jobs: video, charts, writing de-slop, geolocation, short drama. mattpocock/skills gained +970 as a personal skills directory. video-to-skill and skill-recorder go a step further and generate skills from demonstrations. Skills now seem to be the unit of sharing, much as dotfiles were.

**Computer use is moving to structured interfaces.** agent-desktop uses accessibility trees rather than vision. That is more reliable and cheaper than pixel-based approaches, and it is the day's largest verified gain.

**Local inference of huge MoE models is a new direction.** colibri streams experts from disk, trading speed for the ability to run models that do not fit in memory.

**Model-routing tools are another thread.** magpie and the DeepSeek/Kimi "harness" repos let one agent front end use another vendor's model. Several of those entries look artificially inflated, so the real signal is weaker than the star counts suggest.

I did not tie this to specific model releases, because the data contains no release information.

## 4. Community Hot Spots

- **Structured computer use** ([agent-desktop](https://github.com/vercel-labs/agent-desktop)): accessibility-tree control is more robust than screenshots. Try it on a repetitive desktop workflow.
- **Agent memory and context compression** ([claude-mem](https://github.com/thedotmack/claude-mem), [agent-memory](https://github.com/tigerless-labs/agent-memory), [ripwire](https://github.com/redhat-et/ripwire)): several competing designs exist. Compare their storage format and retrieval behavior before standardizing on one.
- **Parallel-agent tooling** ([worktrunk](https://github.com/max-sixty/worktrunk)): isolation through worktrees is likely to become standard practice.
- **Disk-streamed MoE inference** ([colibri](https://github.com/JustVugg/colibri)): benchmark tokens/sec on your own hardware to see whether it is usable or just a demo.
- **Skills from demonstrations** ([video-to-skill](https://github.com/brenoepics/video-to-skill), [skill-recorder](https://github.com/microsoft/skill-recorder)): early-stage, but it points toward capturing workflows without writing prompts by hand.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
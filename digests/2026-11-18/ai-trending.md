# AI Open Source Trends 2026-11-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-17 16:38 UTC

---

# AI Open Source Trends Report, 2026-11-18

Trending repos show ⭐0 in the source data, so total stars are listed as "n/a" for them. Topic-search star counts are copied as given. Several look implausibly high for repos active only this week (see the Trend Signal Analysis).

## 1. Finds

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**: A Go code-review tool. Deterministic pipelines (rules for NPE, thread-safety, XSS, SQL injection) run first, and an LLM agent adds line-level comments on top. Teams that want PR review without pure-LLM noise or hallucinated findings should try it. It works with OpenAI- and Anthropic-compatible endpoints. (+764 today)
- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)**: A self-hosted workflow runner that chains CodeBuddy, Codex and Claude Code through scripts, with human approval gates between steps. It suits teams that want repeatable, auditable coding-agent delivery instead of ad-hoc prompting. (+590 today)
- **[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)**: A "black-box" cost-control layer for coding agents that learns from experience, so it doesn't need to modify the agent. It is useful if agent token bills are your pain point. The description is short, so check the README for real savings numbers before adopting it.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**: A zero-dependency C++23 CLI and MCP server that lets agents locate code without reading the whole repo. It also reports blast radius and which tests to run. It is for people running agents on large codebases who want fewer tokens spent on context.
- **[yetone/magpie](https://github.com/yetone/magpie)**: A menu-bar app that decouples agent from model, for example Codex on DeepSeek or Claude Code on Kimi. It is handy if you want to try cheaper or open models inside your usual CLI agent.
- **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)**: A multi-agent framework from Google Research for automated AI research paper writing. Researchers can use it to study or reproduce multi-agent writing pipelines. (+1,175 today)

**Hype watch:** [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) claims a 2.78T-parameter model running on one CPU in 8.24 GB of RAM. That is not plausible without heavy disk streaming or approximation, so treat it as a demo or stunt until benchmarks appear.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | n/a (+764) | Hybrid deterministic and LLM code reviewer with a built-in multi-language ruleset. It is notable for a production pedigree at Alibaba scale and for working with both OpenAI and Anthropic APIs. |
| [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) | Python | 7,448 | Experience-driven cost control for coding agents without touching agent internals. It targets the main operating cost of agentic coding. |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,551 | A "ripgrep for AI context" CLI and MCP server that finds code without reading the repo. It also reports blast radius and tests to run. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 38,040 | Menu-bar router that pairs any agent CLI with any model backend. It reflects the trend of mixing Claude Code or Codex with DeepSeek and Kimi. |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | n/a (+1,444) | The Agent-User Interaction Protocol for bringing agents into frontend apps. It is a standards play, so it is worth a look if you build agent UIs. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,934 | A Git-versioned map of the codebase and database schema, served over a local MCP server. It gives coding agents persistent context before they edit. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | n/a (+196) | The Cursor plugin specification plus official plugins. It matters because it adds another plugin standard alongside skills and MCP. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | n/a (+350) | Agent Skills for the Stitch MCP server, following the open Agent Skills standard. They work across Antigravity, Gemini CLI, Claude Code and Cursor. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | n/a (+590) | Orchestrates multiple coding agents via scripts with human approval gates. It is self-hosted and includes local workflows. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | n/a (+691) | A workspace to plan, annotate and review agent output, then send feedback back to the agent in one click. It is aimed at keeping a human in the loop. |
| [reason-machines/reason-network](https://github.com/reason-machines/reason-network) | Rust | 1,778 | Lets a team's coding agents talk to each other. It is an early multi-agent coordination layer. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | n/a (+1,905) | An agentic skills framework and development methodology. It is the day's largest star gainer among the agent-workflow repos, but it is already well known. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | n/a (+902) | A harness optimization system covering skills, memory and security for Claude Code, Codex, Opencode and Cursor. It is a big bundle, so evaluate it selectively. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | n/a (+1,007) | A Claude Code skill bundle for bug hunting and red-team work: 82 skills, 15 slash commands and 681 report-derived patterns. It is dual-use, so use it only on authorized targets. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | n/a (+772) | An agent skill that researches a topic across Reddit, X, YouTube, HN, Polymarket and the web, then synthesizes a summary. It is a ready-made research skill. |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | n/a (+1,175) | A multi-agent framework for writing AI research papers. It comes from Google Research and gained strongly today. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 12,503 | An open-source AI office suite (docs, sheets, slides, PDF) with a CLI and skill so agents can edit real .docx/.xlsx/.pptx files locally. Bring your own key. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | n/a (+1,776) | An Office SDK for embedding editing, calculation and collaboration for both people and AI agents. It is the top trending gain in this group. |
| [n8n-io/nod](https://github.com/n8n-io/nod) | TypeScript | 2,256 | A personal agent with its own computer that handles invoices and cancels trials, and asks before acting. It is from the n8n team and runs on the model of your choice. |
| [DIYgod/pinky](https://github.com/DIYgod/pinky) | Go | 2,357 | Lets any MCP agent drive an iPhone or Android phone with the user in the loop. It is a concrete phone-control bridge. |
| [openfilm/openfilm](https://github.com/openfilm/openfilm) | TypeScript | 8,072 | Turns a coding agent into a video agent, with an editor to change anything it makes. It is one of several video-via-code projects today. |
| [wangzan101/Mika](https://github.com/wangzan101/Mika) | Kotlin | 8,950 | An on-device Android agent that operates apps and the web. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 4,745 | A social-media agent that finds trends, creates content, publishes across Chinese platforms and learns what works. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | n/a (+188) | Trains a 64M-parameter LLM from scratch in about 2 hours. It is a practical, cheap way to learn the full training pipeline. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 12,263 | A portable C99 inference claim: 2.78T parameters on one CPU in 8.24 GB of RAM. Treat it with skepticism until independently benchmarked. |
| [deeplethe/utopia](https://github.com/deeplethe/utopia) | Rust | 8,729 | Billed as the "first open-source enterprise world model". The description is vague, so check the repo for actual weights or code before relying on it. |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | JavaScript | 78,400 | A plugin promising unlimited, keyless access to DeepSeek V4.1 Flash and Kimi K3. The pitch is too good to be true, so read the code before installing. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 4,322 | Long-term agent memory with plain Markdown as the source of truth and local ranked retrieval. Claude Code and Codex share one store, with no API key. |
| [Zleap-AI/SAG-Wiki](https://github.com/Zleap-AI/SAG-Wiki) | Rust | 1,383 | A lightweight knowledge base for people and agents, with fast indexing and precise retrieval. |
| [crow-hq/llm-wiki-v2](https://github.com/crow-hq/llm-wiki-v2) | Python | 305 | Turns documents into a readable Markdown wiki that answers with citations. It claims 63% fewer LLM tokens, which is unverified. |
| [RustXNG/RustXNG](https://github.com/RustXNG/RustXNG) | Rust | 981 | A SearXNG-based self-hosted metasearch and grounding engine for agents, with a JSON API and optional page text. |
| [Dongbumlee/ontosmith](https://github.com/Dongbumlee/ontosmith) | Python | 289 | Builds governed knowledge graphs where every fact is gated and traceable to its evidence. |
| [FengZhenfei/carrel](https://github.com/FengZhenfei/carrel) | Python | 808 | Ontology-Augmented Generation for agents. The pitch is short, but it is an interesting alternative to plain vector RAG. |

## 3. Trend Signal Analysis

**Coding-agent scaffolding is the clear winner.** Skills, harnesses, orchestrators and review tools dominate today's list: superpowers (+1,905), Claude-BugHunter (+1,007), ECC (+902), last30days-skill (+772), LoopForge (+590) and plannotator (+691). The attention has moved from the model to the layer around it: skills, approval gates, human annotation and cost control.

**New directions:**
- **Agent-agnostic skills.** Skill packs are now written to the open Agent Skills standard and target many CLIs at once (Gemini CLI, Codex, Cursor, Claude Code).
- **Agents as tooling for other media.** There are "video agent", "audio for agents" and "game modding" projects, all built on coding agents plus MCP.
- **Context-efficiency tools.** ripwire, aoci-code and TokenEconomizer treat token spend and codebase context as first-class problems.
- **Agent memory in plain Markdown.** tigerless-labs/agent-memory is one example.

**Industry connection.** Many repos route Codex or Claude Code to DeepSeek and Kimi, and there is a cluster around a "DeepSeek Harness" (dsh) plugin ecosystem. Several "Grok Bot alternative" clones also appear, so bot products are evidently a new category.

**Data caution.** Topic-search star counts look unreliable. Repos with tens of thousands of stars that appear brand-new, along with the "2026" SEO-style repos, suggest star inflation or promotional spam. Verify before you trust any of them.

## 4. Community Hot Spots

- **Approval-gated agent orchestration** ([LoopForge](https://github.com/Tencent/LoopForge), [plannotator](https://github.com/backnotprop/plannotator)): Teams want agents running in delivery pipelines while keeping humans in control.
- **Hybrid deterministic and LLM review** ([open-code-review](https://github.com/alibaba/open-code-review)): Rules plus an LLM can reduce noise compared with pure-LLM review.
- **Token and context economy** ([ripwire](https://github.com/redhat-et/ripwire), [TokenEconomizer](https://github.com/microsoft/TokenEconomizer), [aoci-code](https://github.com/aoci-spec/aoci-code)): Cost and context size are now the main constraint on agent adoption.
- **Plain-file agent memory** ([agent-memory](https://github.com/tigerless-labs/agent-memory)): A shared Markdown store across Claude Code and Codex is a pragmatic pattern to try.
- **Model/agent decoupling** ([magpie](https://github.com/yetone/magpie), [ag-ui](https://github.com/ag-ui-protocol/ag-ui)): Routing and protocol layers are becoming the standard way to mix agents and models.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
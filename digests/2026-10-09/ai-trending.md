# AI Open Source Trends 2026-10-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-09 14:05 UTC

---

# AI Open Source Trends Report, 2026-10-09

**Data caveats:**
- The trending feed reports total stars as `0` for every repo, so that column is missing data, not a real count.
- Several repos have implausible numbers or SEO-style descriptions. I flag them below.

## 1. Finds

- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)**
  - It is a zero-dependency C++23 CLI and MCP server that gives coding agents compact code signatures instead of full file bodies. It also reports blast radius and which tests to run after a change.
  - Anyone whose agent burns context reading whole repos would want it. The claimed 74.7% byte reduction is the project's own figure and I haven't verified it.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)**
  - It is a single Go binary that indexes the session history agents like Claude Code, Codex and Cursor already leave on disk. It exposes that history through local search, MCP and hooks, with no LLM call.
  - It suits people who lose context between agent sessions and don't want a hosted memory service.
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)**
  - It is a Go code-review tool that combines deterministic pipelines with an LLM agent. It posts line-level comments and ships rulesets for NPE, thread-safety, XSS and SQL injection, and it works with OpenAI- and Anthropic-compatible endpoints.
  - Teams that want repeatable PR review rather than purely prompt-driven review should look at it. It has +323 stars today.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)**
  - It is a desktop app that records an on-screen work session. It uses the GitHub Copilot SDK to turn the recording into an intent plus ordered steps, then builds a reusable Skill or Automation.
  - It is for people who would rather demonstrate a workflow than write the skill by hand. It targets Microsoft's own agent products, which limits its reach.
- **[yetone/magpie](https://github.com/yetone/magpie)** and **[lidge-jun/opencodex](https://github.com/lidge-jun/opencodex)**
  - Both are provider proxies that point coding CLIs at other models. Magpie is a menu-bar app (Codex on DeepSeek, Claude Code on Kimi). OpenCodex is a proxy that lets Codex CLI and Claude Code use Claude, Gemini, Grok, DeepSeek or Ollama.
  - Use them if you want to swap the model behind a coding agent without changing the agent.
- **[Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map)**
  - It is a Geometric Context Transformer for streaming 3D reconstruction, and the README lists it as an ECCV 2026 Best Paper Award Candidate. It has +109 today.
  - It is for vision and robotics researchers, and it is the only real research code in today's list.

**Treat with caution:**
- [morluto/rea](https://github.com/morluto/rea) shows +15,335 stars in a day on a repo with no listed total. That is a very unusual spike, so check for star inflation before trusting it.
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) shows 159,248 stars for what reads as a prompt or rules pack, which is a hype signal.
- Several `[topic:llm-tools]` repos have "2026" SEO-style descriptions: [claude-batchy-bulk](https://github.com/kanguruonline/claude-batchy-bulk), [studio-live-window-capture](https://github.com/tbee6061-ctrl/studio-live-window-capture), [OmniTag-Forge](https://github.com/thyron922/OmniTag-Forge). They look like empty shells.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,429 | A C++23 CLI and MCP server that gives agents code signatures, blast radius and tests-to-run. It targets context cost, with a claimed 74.7% byte reduction. |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | Python | 0 (+95) | An AI gateway now described as having a Rust core with a Python SDK, covering 100+ LLM APIs. It is already well known, and the Rust core is the new part. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | 1,145 | An LLM inference engine in Zig for Metal, CUDA and Vulkan. Cross-vendor GPU support in one small engine is unusual. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 7,323 | A menu-bar tool that routes coding agents to other providers' models. For example, it runs Codex on DeepSeek. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 17,173 | A universal provider proxy for Codex and Claude Code. It lets them use Claude, Gemini, Grok, DeepSeek or Ollama. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+323) | A hybrid deterministic and LLM-agent code reviewer with built-in security rulesets. It produces line-level comments and speaks both OpenAI and Anthropic APIs. |
| [mcpdelta/mcpdelta](https://github.com/mcpdelta/mcpdelta) | | 80 | A proxy between AI apps and their MCP servers that runs one program per task instead of one tool call per step. It claims up to 24.1× fewer tokens, but the release is still "coming soon". |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [morluto/rea](https://github.com/morluto/rea) | TypeScript | 0 (+15335) | A tool for reverse engineering with agents, from app behavior down to native binaries. The one-day jump is extreme and unverified. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+1696) | A personal `.agents` skills collection published as-is. It is popular because of the author's following. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+751) | Engineering-process skills for AI coding agents. It is another skills pack with a high-profile author. |
| [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) | TypeScript | 4,213 | A screen recorder that turns your work session into a reusable Skill or Automation. It is built on the Copilot SDK. |
| [amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills) | JavaScript | 2,338 | Hands a coding task to a separate agent CLI, then lets you review the diff and commit yourself. It is a practical multi-agent handoff pattern. |
| [Waishnav/devspace](https://github.com/Waishnav/devspace) | TypeScript | 5,208 | A minimal coding-agent harness on MCP, usable from ChatGPT, Claude and others. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 694 | Scaffolds a branded agent harness with its own npx CLI, MCP server, memory and signed releases. |
| [Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) | Swift | 4,376 | A Mac notch and iPhone companion that monitors coding agents and lets you approve actions from the Lock Screen. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 9,086 | An open-source office suite with a built-in agent. Its CLI and skill let Claude Code, Codex and Cursor create real .docx/.xlsx/.pptx files locally. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0 (+1744) | 42 diagram types as self-contained HTML and SVG, usable from Claude Code, Codex, Copilot and Pi. It is an alternative to Mermaid output. |
| [storytold/artcraft](https://github.com/storytold/artcraft) | Rust | 0 (+3723) | A crafting engine for artists, designers and filmmakers. Its AI content is not spelled out in the description, so its AI relevance is unclear. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,217 | A local-first conversational video editor with a multi-track timeline, MCP and Remotion rendering. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,506 | A local-first, model-agnostic desktop workbench for research. It supports skills, MCP, and Python/R execution with traceable artifacts. |
| [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder) | Python | 5,875 | Skills and tools that let Claude Code mod PC games, covering recon, reverse engineering and asset generation. |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Python | 0 (+714) | Official plugins for knowledge workers using Claude Cowork. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | Python | 0 (+109) | A Geometric Context Transformer for streaming 3D reconstruction, listed as an ECCV 2026 Best Paper candidate. It is the only research-grade release today. |
| [Human-Agent-Society/reef](https://github.com/Human-Agent-Society/reef) | Python | 7,515 | Infrastructure for agents that continually self-improve. The description is thin, so read the code before relying on it. |
| [Sahir619/fable-method](https://github.com/Sahir619/fable-method) | Python | 2,298 | Distills how Claude Fable 5 worked into skills any model can run, with an eval to keep it honest. |
| [calmrocks/ai-engineer-notebooks](https://github.com/calmrocks/ai-engineer-notebooks) | Jupyter Notebook | 692 | Framework-free Colab notebooks covering tool calling, RAG, evals, MCP, LoRA and security. They run on the free Groq API. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,156 | Builds searchable memory from the session history your coding agents already store on disk. It is one Go binary, with no LLM involved. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 759 | Git-native agent memory with in-memory BM25 search under 300µs and an embedded MCP server. It needs no external database. |
| [tigerless-labs/agent-memory](https://github.com/tigerless-labs/agent-memory) | Python | 3,387 | Markdown-as-source-of-truth long-term memory with local ranked retrieval. Claude Code and Codex share one store. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 1,393 | A Git-versioned map of the codebase and DB schema that agents read before editing. It is a local MCP server. |
| [ibrahimqureshae/mdflux](https://github.com/ibrahimqureshae/mdflux) | Python | 556 | A local-first desktop app that converts documents, including scanned PDFs, to AI-ready Markdown. It claims far fewer tokens than vision models. |
| [alfadur7/llm-wiki-newsroom](https://github.com/alfadur7/llm-wiki-newsroom) | Python | 171 | A multi-agent system that builds a cross-linked Markdown wiki, with the writer separate from the reviewer. It is positioned as a structured alternative to RAG. |
| [brekkylab/backlot](https://github.com/brekkylab/backlot) | Python | 419 | A local emulator for Slack, Gmail, Drive, GitHub, Jira and other SaaS APIs, with realistic responses and ACLs. It is useful for testing RAG and agents offline. |

## 3. Trend Signal Analysis

Agent skills are the most visible category today. [mattpocock/skills](https://github.com/mattpocock/skills), [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [diagram-design](https://github.com/cathrynlavery/diagram-design) and [SwiftUI-Agent-Skill](https://github.com/twostraws/SwiftUI-Agent-Skill) all trend at once. The `agent-skills` topic is full of domain skills, and Microsoft's skill-recorder shows vendors now generating skills from demonstrations. Many of these packs are mostly prose with little code, so the author's following drives their stars more than technical novelty does.

A second cluster is agent memory and context efficiency. It includes deja-vu, okf-agent-memory, agent-memory, ripwire, aoci-code and mcpdelta. They share a design: local-first, single-binary or Markdown-based, exposed over MCP, and aimed at cutting tokens. That points to context cost, not model capability, as the main pain for coding-agent users.

A third cluster is model-routing layers (magpie, opencodex). They fit a market where Codex and Claude Code are used with cheaper or alternative backends such as DeepSeek and Kimi. Several repos also mention "DSH" (DeepSeek Harness) plugins and free-model plugins for it, which looks like a new plugin ecosystem. Its claims, such as unlimited free access to frontier models, are unverified. A "Grok Bot alternative" pair ([OpenMausBot](https://github.com/milind-soni/OpenMausBot), [rakazo](https://github.com/elie222/rakazo)) and Fable-derived workflows ([fable-method](https://github.com/Sahir619/fable-method)) show projects reacting quickly to new products.

Treat the raw star counts with suspicion today. Several outliers and SEO-style repos suggest manipulated or low-effort entries.

## 4. Community Hot Spots

- **Local agent memory over MCP.** Compare [deja-vu](https://github.com/vshulcz/deja-vu), [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) and [agent-memory](https://github.com/tigerless-labs/agent-memory). All three are local-first and need no API key, so they are cheap to try and swap.
- **Token-efficient code context.** [ripwire](https://github.com/redhat-et/ripwire) and [aoci-code](https://github.com/aoci-spec/aoci-code) give agents compact maps in place of file dumps. Benchmark them on your own repo to test their claims.
- **Hybrid deterministic and LLM review.** [open-code-review](https://github.com/alibaba/open-code-review) pairs rules with an agent, which can cut noise compared with LLM-only review.
- **Model-swapping proxies for coding CLIs.** [magpie](https://github.com/yetone/magpie) and [opencodex](https://github.com/lidge-jun/opencodex) are worth trying if you want to run Codex or Claude Code against cheaper models. Check how each handles your API keys first.
- **Skill generation from demonstration.** [skill-recorder](https://github.com/microsoft/skill-recorder) points to a workflow where you record a task instead of writing the skill. Its current targets are Microsoft products.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# AI Open Source Trends 2026-10-03

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-10-03 12:11 UTC

---

# AI Open Source Trends Report, 2026-10-03

**Data caveat:** every item on the Trending list shows `⭐0` total stars, which is a scraper gap, so I show those as "n/a" with today's gain. Several topic-search entries claim 5,000–19,000 stars for repos that look days old (for example `hypit`, `codex-chatgpt-web`). Treat those counts as suspect. Star farming is plausible, and the data doesn't let me verify it.

## 1. Finds

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** (+1,683 today, the biggest gain on the list)
  - It is a single Python CLI that lets an agent read and search Twitter, Reddit, YouTube, GitHub, Bilibili and XiaoHongShu without paid API keys.
  - It suits anyone giving a coding or research agent web-wide read access. Check how it gets "zero API fees" (scraping, with the usual breakage and ToS risk) before relying on it.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** (1,121 stars)
  - It is a single Go binary that indexes the session history Claude Code, Codex, Cursor and 32 other agents already leave on disk, and makes it searchable with no LLM calls.
  - It is useful if you switch between agents and want to find "what did I do last week" locally and cheaply. The cost and accuracy claims are the author's own and unverified.
- **[redhat-et/ripwire](https://github.com/redhat-et/ripwire)** (2,387 stars)
  - It is a zero-dependency C++23 CLI and MCP server that gives agents function signatures instead of full bodies (claimed 74.7% fewer bytes). It also reports blast radius and which tests to run.
  - It is for people hitting context limits on large repos. Red Hat's emerging-tech team being behind it makes it more credible than most.
- **[tigerless-labs/cost-xray](https://github.com/tigerless-labs/cost-xray)** (3,793 stars)
  - It shows what Claude Code and Codex actually send to the API and what each part costs.
  - It is for anyone puzzled by their token bill. Pair it with the context-trimming tools below to measure whether they help.
- **[oooscoos/Benzi](https://github.com/oooscoos/Benzi)** (128 stars)
  - It is a coding agent that first compiles the codebase into a queryable map of calls, data flow and class hierarchy. It also has a runtime tracer and can run as an MCP server.
  - It is small and early, but it takes a different approach from grep-and-read agents. It suits people who want to experiment with static-analysis-grounded agents.
- **[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)** (4,183 stars)
  - It is a desktop app that records your screen work, uses the Copilot CLI to turn it into intent plus ordered steps, and emits a reusable Skill or automation.
  - It is for teams building skills for Microsoft's agent products. The idea of generating skills by demonstration is the interesting part.

**Hype watch:** [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) claims 2.78T-parameter inference on one CPU in 8.24 GB of RAM, which is implausible without extreme caveats (heavy streaming from disk or a very sparse active set). Read the benchmarks before getting excited. The `jev` cluster ([awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools), [awesome-jev-live](https://github.com/wh000wh000/awesome-jev-live), [building-with-typesafe-jev](https://github.com/aaddrick/building-with-typesafe-jev)) looks like coordinated promotion of one vendor's model.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [redhat-et/ripwire](https://github.com/redhat-et/ripwire) | C++ | 2,387 | A CLI and MCP server that gives agents code signatures plus blast-radius and test-selection info. It claims 74.7% fewer bytes than reading bodies. |
| [tigerless-labs/cost-xray](https://github.com/tigerless-labs/cost-xray) | Python | 3,793 | It breaks down what Claude Code and Codex send to the API and what each part costs. It is a direct debugging aid for token spend. |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | TypeScript | n/a (+256) | It sandboxes tool output (claimed 98% reduction), persists session memory and enforces routing across 17 platforms via MCP and hooks. It fits the day's context-budget theme. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | n/a (+505) | A skill plus proxy that cuts tokens (claimed 65%) by making the agent answer tersely. It is a novelty with a real idea behind it, and the savings are unverified. |
| [lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) | TypeScript | 16,852 | A provider proxy that lets Codex CLI and Claude Code run on Claude, Gemini, Grok, DeepSeek or Ollama. It is useful for model-swapping without changing your harness. |
| [yetone/magpie](https://github.com/yetone/magpie) | Go | 4,385 | A menu-bar app that routes agents to other models, such as Codex on DeepSeek or Claude Code on Kimi. It is another sign of harness/model decoupling. |
| [oomol-lab/open-connector](https://github.com/oomol-lab/open-connector) | TypeScript | 5,942 | An auth gateway to 1,500+ SaaS providers, exposed to agents via SDK, CLI, MCP, HTTP and OpenAPI. It addresses the tedious OAuth side of agent tooling. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | n/a (+1,683) | One CLI to read and search social and video platforms without API fees. It has the largest single-day gain on the list. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 152,394 (+1,289) | A prompt and skill set that nudges agents toward writing less code. The 152k figure is extraordinary and I can't verify it, so treat the project as a prompt pack, not infrastructure. |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | Python | 10,430 | A meta-harness that orchestrates Claude Code, Codex, Cursor and Pi, with policies and sandboxing. It lets you swap harnesses without rewriting. |
| [oooscoos/Benzi](https://github.com/oooscoos/Benzi) | Python | 128 | A compiler-backed coding agent that builds a resolved map of calls and data flow before editing. It is tiny, but the approach is distinctive. |
| [ruvnet/metaharness](https://github.com/ruvnet/metaharness) | TypeScript | 686 | It scaffolds a branded agent harness with its own npx CLI, MCP server, memory and signed releases. It targets people who want to ship a custom harness. |
| [umacloud/umadev](https://github.com/umacloud/umadev) | Rust | 260 | It commands your existing Claude Code, Codex or OpenCode like a dev team. It is early and in a crowded space. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | JavaScript | n/a (+705) | A design language aimed at improving agents' UI output. It is part of a wave of anti-"AI slop" tooling, alongside [anti-slop](https://github.com/miqdadbadjuber/anti-slop) (4,343). |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | n/a (+750) | A personal `.agents` skill collection from a well-known TypeScript educator. It is worth reading as a template. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os) | TypeScript | n/a (+84) | An agent workspace on Workers for documents, apps and agents with company context. It is a vendor reference architecture for edge-hosted agents. |
| [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) | TypeScript | 8,454 | An open-source Docs/Sheets/Slides suite with a built-in agent and a CLI so coding agents can edit real .docx/.xlsx/.pptx files. The file-editing CLI is the useful part. |
| [0xsline/OpenChatCut](https://github.com/0xsline/OpenChatCut) | TypeScript | 2,088 | A local-first conversational video editor with a multi-track timeline, MCP and Remotion rendering. |
| [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) | Python | 2,957 | A social-media agent that finds trends, creates content and publishes to Chinese platforms. |
| [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens) | TypeScript | 1,848 | It draws each PR as animated architecture and data-flow walkthroughs, as a GitHub App, Action or CLI. It targets slow code review. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | TypeScript | 5,369 | A local-first research workbench with skills, MCP tools and Python/R execution. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Python | 942 | Fast, exact decoding on Apple Silicon (MLX) behind an OpenAI-compatible endpoint. It is practical for local Mac serving. |
| [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) | Swift | 6,853 | Gemma 4 26B-A4B inference in about 2 GB of RAM on M-series MacBooks. MoE with 4B active parameters makes this plausible. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 8,857 | A portable C99 claim of 2.78T-parameter inference on one CPU in 8.24 GB. It is an extraordinary claim, so verify before trusting. |
| [bojieli/ai-infra-book](https://github.com/bojieli/ai-infra-book) | Python | 5,817 | An open-source Chinese book on quantitative LLM inference and training system design, with calculators and experiments. It is a learning resource, not a tool. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | n/a (+115) | It captures agent sessions, compresses them with AI and re-injects relevant context into later sessions across many agents. It is the most established of the memory tools here. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Go | 1,121 | A no-LLM search over the session histories of 34 agents, as one Go binary. |
| [okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) | Go | 745 | Git-native agent memory implementing Google's OKF v0.2, with BM25 search and an embedded MCP server. It needs no external database. |
| [aoci-spec/aoci-code](https://github.com/aoci-spec/aoci-code) | Go | 875 | A Git-versioned map of the codebase and DB schema, served over MCP so agents read it before editing. |
| [brekkylab/backlot](https://github.com/brekkylab/backlot) | Python | 328 | A local emulator for Slack, Gmail, Drive, Jira, Notion and S3 APIs, with real response shapes and per-document ACLs. It is handy for testing RAG and agents without live SaaS access. |
| [panaversity/ksor](https://github.com/panaversity/ksor) | TypeScript | 224 | An SDK for governed, authoritative knowledge systems for humans and agents. |

## 3. Trend Signal Analysis

**Skills and harness tooling dominate.** Six of the top ten trending repos today are skills collections or prompt packs: ponytail, impeccable, ECC, superpowers, mattpocock/skills and agent-skills. They are mostly Markdown, shell and JavaScript with little code. Adoption is driven by how shareable they are, not by technical depth, so judge them by reading the content.

**Context economy is the practical theme.** caveman, context-mode, ripwire, deja-vu, cost-xray and claude-mem all attack the same problem: tokens are expensive and context windows fill up. The new angle is measurement (cost-xray) and deterministic, non-LLM retrieval (deja-vu, ripwire, okf-agent-memory) instead of more summarization.

**Harness/model decoupling is a first-class direction.** opencodex, magpie, omnigent and the ChatGPT-into-Codex bridges (codex-chatgpt-web, codex-with-chatgpt) let you mix any harness with any model. This points to the coding-agent harness becoming a commodity front end, with model choice made on price.

**New-ish stacks:** compiler-grounded agents (Benzi), the OKF memory format, and skill generation from screen recordings (skill-recorder).

**Industry context:** local inference of Gemma 4 and Kimi K3 is driving the Apple Silicon and tiny-RAM projects. Some of those claims are surely inflated.

**Data quality:** the 5k–19k star counts on week-old repos suggest star inflation. Weight today's trending gains over total stars.

## 4. Community Hot Spots

- **Agent context and cost observability:** try [cost-xray](https://github.com/tigerless-labs/cost-xray) first to find where your tokens go. Then evaluate [ripwire](https://github.com/redhat-et/ripwire) or [context-mode](https://github.com/mksglu/context-mode) against that baseline.
- **Cross-agent session memory:** [deja-vu](https://github.com/vshulcz/deja-vu) and [okf-agent-memory](https://github.com/okf-memory/okf-agent-memory) are lightweight, local and LLM-free. They are low-risk to test if you use more than one agent.
- **Provider-agnostic harnesses:** [opencodex](https://github.com/lidge-jun/opencodex), [magpie](https://github.com/yetone/magpie) and [omnigent](https://github.com/omnigent-ai/omnigent) let you test cheaper models inside your existing workflow.
- **Agent web access:** [Agent-Reach](https://github.com/Panniantong/Agent-Reach) is hot, but audit how it scrapes and its failure modes before depending on it.
- **Local MCP-based code intelligence:** [Benzi](https://github.com/oooscoos/Benzi) and [aoci-code](https://github.com/aoci-spec/aoci-code) are early. They are worth watching if you want agents that understand structure instead of just text.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
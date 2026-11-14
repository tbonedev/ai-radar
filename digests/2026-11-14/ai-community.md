# Tech Community AI Digest 2026-11-14

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (9 stories) | Generated: 2026-11-14 13:55 UTC

---

# Tech Community AI Digest, 2026-11-14

## 1. Worth Your Time

- **[Tests as data: ensuring AI-generated code does what we want](https://martinfowler.com/articles/tests-as-data.html)** (Martin Fowler, Matteo Vaccari). When an agent writes both the code and the tests, the tests stop being a guarantee. Vaccari's fix is to make the human-readable contract data, such as example files and fixtures, rather than test code. Agents are then less likely to quietly edit it. He notes that custom DSL parsers and test runners, once costly to maintain, are now cheap to have an AI write.

- **[Long-horizon agents and durable execution](https://martinfowler.com/articles/durable-execution-agents.html)** (Martin Fowler, Kiran Prakash). For agents that run for days, the runtime records the result of every step that touches the outside world. After a crash it replays the program, skips completed steps, and rebuilds state from the record. That makes the agent resumable after process or network failures without redoing side effects.

- **[We tested 37,000 MCP servers. Here's how many actually work](https://dev.to/nestdaddy/we-tested-37000-mcp-servers-heres-how-many-actually-work-1pne)** (Dev.to). The authors connected to every remote server in the official MCP registry the way a client would. About 9 in 10 answered, about 1 in 3 needed a key before listing tools, and 12% of the registry was spam. Treat registry listings as untrusted and expect auth handling in every integration.

- **[An AI agent believes whatever its tools send back](https://dev.to/ravi_prakashmeena_2b2b5b/an-ai-agent-believes-whatever-its-tools-send-back-2a0g)** (Dev.to). An agent acts on tool JSON as given, so a field that says a price is "twelve" where a number belongs gets used anyway. The lesson is to validate tool output schemas and types at the boundary instead of trusting the model to notice.

- **[We Benchmarked Our Extraction Pipeline Four Ways. The Obvious Knobs Lied.](https://dev.to/paragon666/we-benchmarked-our-extraction-pipeline-four-ways-the-obvious-knobs-lied-3f7c)** (Dev.to). The authors compared a local 9B model on a consumer GPU with two hosted flagships on a real extraction job. They measured completeness, parse failures and invented numbers. The configuration levers that moved quality were not the obvious ones, so measure on your own data before tuning.

- **[My ML Feature Used the Wrong Unit. The Threshold Was 400x Too Large.](https://dev.to/pavel_kkkkazantsev/my-ml-feature-used-the-wrong-unit-the-threshold-was-400x-too-large-4add)** (Dev.to). A live pipeline compared individual trade sizes against a per-second NAV threshold, so `large_share` collapsed toward zero. The audit then found three more train/serve feature-contract bugs. Check that training and serving features share units and definitions, not just names.

## 2. Techniques and Workflows

- **Make the contract tamper-resistant.** Fowler's "Tests as data" puts the acceptance contract in data that agents are less likely to modify. A Dev.to piece on [blocking an agent's shortcuts with tools](https://dev.to/aws-builders/blocking-an-ai-agents-shortcuts-with-tools-what-verifying-code-comments-taught-me-about-steering-i90) (Kiro/MCP) makes a similar point from the tooling side. Agents that review code and write tests take shortcuts, and constraining their tools works better than instructing them.
- **Boundary validation for agents.** Ravi Prakash Meena's Dev.to post argues for schema-checking tool responses. The MCP registry survey shows why: many servers are slow to authenticate, unreliable or spam.
- **Cut token spend where it actually goes.** The [rtk](https://dev.to/alexr/rtk-the-rust-proxy-that-shrinks-your-coding-agents-command-output-4321) post says coding agents burn most tokens on command output rather than on thinking, and proposes a proxy that shrinks that output. I did not see a measured saving in the excerpt.
- **Debug cache misses.** The [8MB MCP response](https://dev.to/framy2/how-an-8mb-mcp-tool-response-crashes-claude-code-and-how-to-debug-prompt-cache-misses-across-3kob) post covers oversized tool responses crashing Claude Code and how to trace prompt-cache misses across agents.
- **Generated glossaries.** Fowler's [Generated Glossary](https://martinfowler.com/bliki/GeneratedGlossary.html) suggests having an LLM build a domain glossary from internal docs, emails and chat logs, then supplying it as context to other LLM tasks.
- **Benchmark before tuning.** The extraction pipeline post found that the obvious knobs did not move quality.

## 3. Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [We tested 37,000 MCP servers. Here's how many actually work](https://dev.to/nestdaddy/we-tested-37000-mcp-servers-heres-how-many-actually-work-1pne) | 3 | 4 | Probes every remote server in the official MCP registry. About 90% responded, about a third need a key to list tools, and 12% were spam. |
| [An AI agent believes whatever its tools send back](https://dev.to/ravi_prakashmeena_2b2b5b/an-ai-agent-believes-whatever-its-tools-send-back-2a0g) | 3 | 5 | Agents act on tool JSON even when a value is malformed or wrong-typed. Validate tool outputs at the boundary. |
| [We Benchmarked Our Extraction Pipeline Four Ways. The Obvious Knobs Lied.](https://dev.to/paragon666/we-benchmarked-our-extraction-pipeline-four-ways-the-obvious-knobs-lied-3f7c) | 3 | 4 | Compares a local 9B model with two hosted flagships on completeness, parse failures and invented numbers. Shows which configuration levers actually changed quality. |
| [How an 8MB MCP Tool Response Crashes Claude Code — And How to Debug Prompt Cache Misses Across Agents](https://dev.to/framy2/how-an-8mb-mcp-tool-response-crashes-claude-code-and-how-to-debug-prompt-cache-misses-across-3kob) | 2 | 9 | Oversized MCP tool responses can crash Claude Code. Also covers debugging prompt-cache misses across agent tools. |
| [Why Your 19.5GB LLM Crawls on 24GB VRAM (The KV Cache Fix)](https://dev.to/shuraj_shampang_823cf28f2/why-your-195gb-llm-crawls-on-24gb-vram-the-kv-cache-fix-1k19) | 3 | 0 | Explains why a 19.5 GB GGUF model slows down on a 24 GB GPU: the KV cache competes with the weights for VRAM. Walks through the fix. |
| [Prefill vs Decode: Why Splitting Them Wins](https://dev.to/danielsamfdo/prefill-vs-decode-why-splitting-them-wins-126a) | 1 | 1 | Explains why long-prompt prefill and token-by-token decode interfere when run on the same server. Makes the case for disaggregating them. |
| [Blocking an AI agent's shortcuts with tools: what verifying code comments taught me about steering and MCP](https://dev.to/aws-builders/blocking-an-ai-agents-shortcuts-with-tools-what-verifying-code-comments-taught-me-about-steering-i90) | 7 | 3 | Agents reviewing code and writing tests take shortcuts. Constraining them with tools via MCP steers them better than instructions. |
| [My ML Feature Used the Wrong Unit. The Threshold Was 400x Too Large.](https://dev.to/pavel_kkkkazantsev/my-ml-feature-used-the-wrong-unit-the-threshold-was-400x-too-large-4add) | 5 | 0 | A units mismatch made a feature collapse toward zero in a live pipeline. The audit found three more train/serve contract bugs. |

## 4. Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Catching prompt injections hidden in PDFs](https://tomclancy.info/joshua-judges-ruth.html) · [discuss](https://lobste.rs/s/hreu0b/catching_prompt_injections_hidden_pdfs) | 5 | 2 | Shows how to detect prompt injections hidden in PDFs. Relevant if your pipeline ingests untrusted documents. |
| [You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/) · [discuss](https://lobste.rs/s/u2h9as/you_could_have_invented_transformers) | 2 | 0 | Builds up transformers from the idea of associative memory. Useful as an intuition aid. |
| [e-means: 10x faster k-means at equal loss](https://e-means.github.io/) · [discuss](https://lobste.rs/s/rnmylu/e_means_10x_faster_k_means_at_equal_loss) | 5 | 0 | Claims a 10x speedup for k-means at equal loss. Worth a look if clustering embeddings is part of your stack. |
| [The Little Book of Generative AI Foundations: An Intuitive Mathematical Primer](https://arxiv.org/abs/2605.29713) · [discuss](https://lobste.rs/s/0aungk/little_book_generative_ai_foundations) | 4 | 0 | An intuitive mathematical primer on generative AI. A compact reference for the foundations. |
| [libreagi - save OS models](https://libreagi.com/) · [discuss](https://lobste.rs/s/7c4iar/libreagi_save_os_models) | 10 | 6 | Argues for preserving open-source models. The discussion has 6 comments. |

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
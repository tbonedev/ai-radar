# Tech Community AI Digest 2026-11-03

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (5 stories) | Generated: 2026-11-03 14:49 UTC

---

## Worth Your Time

- **[My Agent Gave the Right Answer. Then It Wrote Down That It Was Wrong.](https://dev.to/kenielzep97/my-agent-gave-the-right-answer-then-it-wrote-down-that-it-was-wrong-311d)** (Dev.to). The author planted a question about an event that never happened and watched how the agent's memory handled it. The failure was not in the answer. It was in the self-correction step, which wrote a false "I was wrong" record into persistent memory. If your agent has a reflect-and-store loop, test it with planted false premises and check what gets written, not only what gets said. (The excerpt is truncated, so this is the setup and the failure mode, not the fix.)

- **[Fine-tuning a 322M Model for Coding Agent Safety](https://dev.to/scs0209/fine-tuning-a-322m-model-for-coding-agent-safety-what-3-runs-and-2-failures-taught-me-1anc)** (Dev.to). laya-guard is a small classifier that sits between a coding agent (Claude Code, Cursor, Codex) and the shell and vets each command. The post covers 3 training runs, 2 of which failed. It has 14 comments, so it's worth reading the failure analysis if you plan a guard model instead of regex allowlists.

- **[I benchmarked my own agent skill, and today's Claude barely needed it](https://dev.to/boranfurkan/i-benchmarked-my-own-agent-skill-and-todays-claude-barely-needed-it-3hfc)** (Dev.to). The author wrote a data-analysis skill, then ran it against a no-skill baseline and found little lift on current Claude. Benchmark a skill against the bare model before maintaining it, and re-run it after model upgrades, since skills can become dead weight.

- **[Stop Re-Pasting Your Best AI Prompts: Turn Them into a SKILL.md With a Done Condition](https://dev.to/alexshev/stop-re-pasting-your-best-ai-prompts-turn-them-into-a-skillmd-with-a-done-condition-48hf)** (Dev.to). The method is to move your recurring good prompts into a SKILL.md and give each one an explicit, checkable done condition so the agent knows when to stop. Pair it with the benchmark post above: write the done condition first, then use it to test whether the skill helps.

- **[Your model card says 128k. The machine serving it picked 4k.](https://dev.to/pm25coder/your-model-card-says-128k-the-machine-serving-it-picked-4k-1ib0)** (Dev.to). The author assumed the advertised context window was what they were getting, but the serving runtime had defaulted to a 4k context. Check the effective context length on your server (for example, the runtime's configured context setting) instead of trusting the model card, because truncation like this is silent.

- **[My RAG gave different answers to the same question](https://dev.to/neilton_rocha_dev/my-rag-gave-different-answers-to-the-same-question-one-setting-i-never-set-one-i-never-checked-1o08)** (Dev.to). Non-deterministic answers with no error came from two sources: temperature and seed left at defaults, and a second setting the author never checked. Pin both temperature and seed in the RAG call before debugging retrieval. (The second cause is cut off in the excerpt.)

## Techniques and Workflows

- **Test the memory-write path, not just the answer.** The planted-false-premise test in the self-correcting-agent post found a bad write after a correct reply.
- **Benchmark skills against a no-skill baseline.** Furkan Boran's post found little lift from a skill on current Claude. Alex Shev's post covers the other side: give skills a done condition so they are testable.
- **Verify the serving stack.** The 128k-vs-4k context post and the RAG nondeterminism post both describe silent defaults (context size, temperature, seed) that changed behavior with no error. Log the effective settings.
- **Guard at the shell boundary.** laya-guard puts a small fine-tuned model between agent and shell. Its author reports failed runs, which are useful negative results.
- **Gates that can't fail.** Debashish Ghosal's "Second Backend" post describes a release gate whose check ended in `|| true`, so it always passed. Audit your CI and eval gates for checks that can never fail.
- **Local model choice.** Jordi Marçal's post compares seven local models for coding agents on a single harness with per-call receipts. Read it before picking one.
- **Unverified anecdote.** A r/LocalLLaMA post says Qwen 3.8 27b found a Blender MCP tool and wrote Python to do its math. It's one user's report, but it's a reminder to scope the tools you expose.

## Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [My Agent Gave the Right Answer. Then It Wrote Down That It Was Wrong.](https://dev.to/kenielzep97/my-agent-gave-the-right-answer-then-it-wrote-down-that-it-was-wrong-311d) | 22 | 16 | A planted false-premise test exposed an agent that wrote a wrong self-correction into memory. Test the write path of any reflective loop. |
| [Fine-tuning a 322M Model for Coding Agent Safety: What 3 Runs and 2 Failures Taught Me](https://dev.to/scs0209/fine-tuning-a-322m-model-for-coding-agent-safety-what-3-runs-and-2-failures-taught-me-1anc) | 3 | 14 | A small guard model screens commands between a coding agent and the shell. The post covers what failed across three training runs. |
| [I benchmarked my own agent skill, and today's Claude barely needed it](https://dev.to/boranfurkan/i-benchmarked-my-own-agent-skill-and-todays-claude-barely-needed-it-3hfc) | 2 | 2 | A data-analysis skill showed little lift over the bare model. Measure skills against a baseline. |
| [Stop Re-Pasting Your Best AI Prompts: Turn Them into a SKILL.md With a Done Condition](https://dev.to/alexshev/stop-re-pasting-your-best-ai-prompts-turn-them-into-a-skillmd-with-a-done-condition-48hf) | 11 | 2 | Turn recurring prompts into SKILL.md files. Add a checkable done condition to each. |
| [My 'Second Backend' Existed Only in the README](https://dev.to/debashish_ghosal/my-second-backend-existed-only-in-the-readme-e7o) | 12 | 0 | A release gate claimed two OTel backends were proven, but the check ended in `\|\| true`. Audit your gates for checks that cannot fail. |
| [Your model card says 128k. The machine serving it picked 4k.](https://dev.to/pm25coder/your-model-card-says-128k-the-machine-serving-it-picked-4k-1ib0) | 1 | 3 | The serving runtime silently used a 4k context despite the model card. Verify effective context length. |
| [My RAG gave different answers to the same question](https://dev.to/neilton_rocha_dev/my-rag-gave-different-answers-to-the-same-question-one-setting-i-never-set-one-i-never-checked-1o08) | 1 | 0 | Defaults for temperature and seed caused non-deterministic RAG answers with no errors. Pin them when debugging. |
| [Which local model should a coding agent run?](https://dev.to/jordimarsal/which-local-model-should-a-coding-agent-run-hjn) | 1 | 1 | Seven local models were tested on one harness, with raw receipts for each call. Useful for choosing a local coding-agent model. |

## Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Qwenputer: a fully functioning, deterministic RISC-V CPU inside Qwen3.5](https://divagr.com/blog/qwenputer) · [discuss](https://lobste.rs/s/zftely/qwenputer_fully_functioning) | 44 | 9 | Builds a deterministic RISC-V CPU inside a Qwen3.5 model. It's a good look at what transformer weights can compute exactly. |
| [Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights](https://rikiyat.github.io/blog/weight-space-programming/) · [discuss](https://lobste.rs/s/u7wdqj/sparks_weight_space_programming_llms_can) | 34 | 4 | Argues that LLMs can read and write network weights directly. A r/LocalLLaMA thread, whose title is the only source here, claims MATH-500 went from 7.9% to 48.1% after GPT-6 Astra edited Qwen weights. Treat that number as unverified until you read the paper. |
| [Fuzzers vs. AI: Comparing Fuzzilli and BigSleep on JavaScript Engines](https://projectzero.google/2026/10/fuzzing-v-AI.html) | 21 | 4 | Google Project Zero compares a classic fuzzer with an LLM-driven bug finder on JS engines. Read it for a practitioner view of where each approach finds bugs. |
| [Let's Build a Brain](https://aatishb.com/myriad/lets-build-a-brain/) · [discuss](https://lobste.rs/s/bmmj1e/let_s_build_brain) | 20 | 1 | An interactive walkthrough that builds up a neural network. It's a good one to send to colleagues who are new to the field. |
| [Building fine-grained version control for agents with Rust and Durable Objects](https://delta.dev/blog/fine-grained-version-control-for-agents) · [discuss](https://lobste.rs/s/cctbcu/building_fine_grained_version_control) | 2 | 0 | Describes version control built for agent edits using Rust and Durable Objects. Relevant if you need rollback and audit of agent changes. |

Note: the Project Zero row has no discussion link in the input, so I left it out.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
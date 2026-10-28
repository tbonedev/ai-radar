# Tech Community AI Digest 2026-10-28

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (6 stories) | Generated: 2026-10-28 13:47 UTC

---

# Tech Community AI Digest — 2026-10-28

## 1. Worth Your Time

- **[We instrumented 11 production agents with real token accounting](https://dev.to/tokenlat/we-instrumented-11-production-agents-with-real-token-accounting-in-9-of-them-the-most-expensive-mgb)** (Dev.to). They attributed tokens per step in 11 production agents. In 9 of them the costliest step was not the model call. Instrument per step before you optimize prompts or switch models. The blurb doesn't say what the expensive step was, so read the article for that.

- **[A 3x Faster Local LLM That Can't Finish the Job](https://dev.to/kohei_wada/a-3x-faster-local-llm-that-cant-finish-the-job-two-days-of-moe-vs-dense-on-real-tasks-3b31)** (Dev.to). A MoE coding model on an RTX 5090 was 3x faster than a dense model with equal single-shot quality. It then went 0-for-5 on multi-step agent work. The author used a 112-case RFC 6902 conformance suite as the machine judge. Their conclusion is that single-shot benchmarks hide failures that only show up over long agent loops.

- **[Zero LLM Calls From a Working Agent. My Capture Hook Was Lying.](https://dev.to/debashish_ghosal/zero-llm-calls-from-a-working-agent-my-capture-hook-was-lying-1ioc)** (Dev.to). The agentdrill author's instrumentation reported zero LLM calls from an agent that was working fine. The capture hook was missing the calls, not the agent failing to make them. Before trusting an eval or security harness, check that your capture layer sees traffic you know happened. A check against a known-positive run would catch this.

- **[Four Ways a Test Can Lie to You](https://dev.to/kenwalger/four-ways-a-test-can-lie-to-you-2ibf)** (Dev.to). From verifying a small app that an AI agent mostly wrote. It catalogs how tests can pass while verifying nothing ("green and worthless"). When an agent writes both code and tests, audit the tests as carefully as the code.

- **[Should our LLM wiki use vector search? We benchmarked it before deciding](https://dev.to/peter-white-1492/should-our-llm-wiki-use-vector-search-we-benchmarked-it-before-deciding-fkf)** (Dev.to). The team tested the usual "add vector search" promise on their own wiki before adopting it. The method is to build a small benchmark from real user questions first. The summary doesn't give the result, so check the article for it.

- **[Three traps I fell into while building a behaviour lab for AI agents](https://dev.to/teolex2020/three-traps-i-fell-into-while-building-a-behaviour-lab-for-ai-agents-2pp0)** (Dev.to). A methods note from a solo lab, where a full run of one model costs $1–41. It lists evaluation pitfalls and says each claim comes from a measured run. It's useful if you're building agent evals on a small budget.

## 2. Techniques and Workflows

- **Measure before tuning.** TokenLat's per-step token attribution found the model wasn't the main cost in 9 of 11 agents. Debashish Ghosal's capture-hook bug is the same lesson applied to observability: validate that the instrumentation itself sees real calls.
- **Use a machine judge for agent work.** kohei_wada used a 112-case conformance suite, which exposed that MoE speed came with multi-step failure. Single-shot comparisons would have missed it. Ken Alger's piece covers the other side: agent-written tests can pass without verifying anything.
- **Benchmark retrieval locally.** Peter W.'s team tested vector search against their own wiki before adopting it.
- **Harness trends from Reddit.** The LFM3-1.7B model card (r/LocalLLaMA) says it was post-trained for harnesses such as Hermes Agent, Pi and OpenClaw, which suggests small local models are being tuned to agent loops. That is a vendor claim, not a measured result.
- **Hiring.** Latent Space reports a hiring manager at Anthropic dropped traditional coding interviews because Claude now beats candidates at them.

Most other items today were announcements or discourse.

## 3. Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Generative AI Development Is 20% Prompting and 80% Everything Else](https://dev.to/wpwebinfotech/generative-ai-development-is-20-prompting-and-80-everything-else-59jb) | 21 | 4 | The author built a working support-assistant feature in a weekend. They argue that productionizing it is mostly the surrounding engineering, not prompting. |
| [AI Agents Can Run SQL Now. Where Should Database Teams Draw the Line?](https://dev.to/davidmurray/ai-agents-can-run-sql-now-where-shoulddatabase-teams-draw-the-line-2e14) | 11 | 4 | It looks at agents moving from helping you type SQL to executing it. It asks what guardrails database teams should set. |
| [Should our LLM wiki use vector search? We benchmarked it before deciding](https://dev.to/peter-white-1492/should-our-llm-wiki-use-vector-search-we-benchmarked-it-before-deciding-fkf) | 10 | 3 | The team measured the usual vector-search promise against their own wiki before adopting it. Use it as a template for evaluating retrieval changes. |
| [Zero LLM Calls From a Working Agent. My Capture Hook Was Lying.](https://dev.to/debashish_ghosal/zero-llm-calls-from-a-working-agent-my-capture-hook-was-lying-1ioc) | 8 | 0 | A capture hook reported no LLM calls from an agent that was working. Verify your observability layer against a known-positive run. |
| [Where else should this diff have gone? Five shapes from 90 daily code reviews](https://dev.to/pierrelaurentmedori/where-else-should-this-diff-have-gone-five-shapes-from-90-daily-code-reviews-44jm) | 7 | 4 | After 90 daily reviews, the author groups the misses into five patterns, such as a change applied to one view out of three. Use them as a checklist when reviewing AI-generated diffs. |
| [Durable execution for local LLM workflows: what I'm learning](https://dev.to/khushighosh/durable-execution-for-local-llm-workflows-what-im-learning-50ie) | 7 | 0 | Most demos assume the process stays alive. Persist the plan and tool results so a killed run can resume. |
| [We instrumented 11 production agents with real token accounting](https://dev.to/tokenlat/we-instrumented-11-production-agents-with-real-token-accounting-in-9-of-them-the-most-expensive-mgb) | 6 | 2 | In 9 of 11 agents, the most expensive step wasn't the model. Per-step attribution shows where the cost is. |
| [A 3x Faster Local LLM That Can't Finish the Job](https://dev.to/kohei_wada/a-3x-faster-local-llm-that-cant-finish-the-job-two-days-of-moe-vs-dense-on-real-tasks-3b31) | 2 | 2 | MoE matched dense quality on single-shot tasks at 3x the speed, then went 0-for-5 on multi-step agent work. Test on long tasks before picking a local default. |
| [Four Ways a Test Can Lie to You](https://dev.to/kenwalger/four-ways-a-test-can-lie-to-you-2ibf) | 3 | 1 | It catalogs how tests pass without verifying anything, drawn from an app mostly written by an AI agent. Audit agent-written tests as carefully as the code. |

## 4. Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Fuzzers vs. AI: Comparing Fuzzilli and BigSleep on JavaScript Engines](https://projectzero.google/2026/10/fuzzing-v-AI.html) · [discuss](https://lobste.rs/s/rswyzt/fuzzers_vs_ai_comparing_fuzzilli) | 15 | 3 | Project Zero compares a classic fuzzer with an AI bug-finding system on JavaScript engines. It's a useful reference for how much to trust AI for vulnerability discovery. |
| [The Benchmarking Crisis](http://databasearchitects.blogspot.com/2026/10/the-benchmarking-crisis.html) · [discuss](https://lobste.rs/s/smtpje/benchmarking_crisis) | 9 | 5 | A database-focused take on problems with benchmarking in the AI era. It's relevant if you rely on published numbers to choose tools. |
| [How to Run Turing-Complete Malware in PyTorch's Backward Pass](https://elonlit.com/scrivings/how-to-run-turing-complete-malware-in-pytorchs-backward-pass/) · [discuss](https://lobste.rs/s/urfgc9/how_run_turing_complete_malware_pytorch_s) | 6 | 1 | It shows how code can be executed inside PyTorch's backward pass. It's worth a read if you load untrusted models or training code. |
| [Compile-Time Dependent Types](https://thenumb.at/Syl-Intro/) · [discuss](https://lobste.rs/s/d09iy3/compile_time_dependent_types) | 25 | 9 | An introduction to a language design using dependent types at compile time. It's tagged ml and plt, and it's the highest-scoring story today. |
| [Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation](https://arxiv.org/abs/2610.14162) · [discuss](https://lobste.rs/s/d1snfg/next_concept_modeling_fast_parallel) | 3 | 0 | A paper on parallel, coarse-to-fine text generation as an alternative to token-by-token decoding. It has no discussion yet, so treat it as one to skim. |

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Tech Community AI Digest 2026-11-25

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (4 stories) | Generated: 2026-11-24 18:35 UTC

---

# Tech Community AI Digest — 2026-11-25

## 1. Worth Your Time

- **[The scaffold moved agents +39 points. The model moved them 10.](https://dev.to/quilldf/the-scaffold-moved-agents-39-points-the-model-moved-them-10-1ikl)** (Dev.to, Quill Datafix): The claim is that harness design (tools, context handling, retry and verification loops) moved agent benchmark scores by 39 points, against 10 for swapping models. The practical lesson is to tune the scaffold before paying for a bigger model. The 23 comments are likely worth reading for pushback on the methodology.

- **[Lessons from 12 Evals: Where They Break and What to Measure Instead](https://eugeneyan.com/writing/public-evals)** (Eugene Yan): He goes through how public benchmarks are built, the bugs they commonly have, and what to measure instead. Read it before you trust a leaderboard number, and before you build an internal eval by copying a public one.

- **[Why Your AI Release Notes Hallucinate: The "Why vs What" Problem in Git History](https://dev.to/necoz/why-your-ai-release-notes-hallucinate-the-why-vs-what-problem-in-git-history-5ch0)** (Dev.to, John): A raw diff only says *what* changed, so the model invents a plausible *why*. The fix is to feed in linked issues and PR discussion, and to evaluate with counterfactual checks. The pattern applies to any LLM summarization of code history.

- **[Your agent isn't breaking the rules. Your rules were never enforced.](https://dev.to/tokenlat/your-agent-isnt-breaking-the-rules-your-rules-were-never-enforced-2ngo)** (Dev.to, TokenLat): A prompt that says "never approve above 200 without sign-off" is a suggestion, not a control. The article argues for enforcing limits in code outside the model, such as a gate on the tool call. It has an active discussion (7 comments).

- **[My least accurate LLM router was 60% cheaper. Every mistake counted as savings.](https://dev.to/sarthak_bhardwaj_05aba55d/my-least-accurate-llm-router-was-60-cheaper-every-mistake-counted-as-savings-46i9)** (Dev.to, sarthak bhardwaj): He benchmarked three ways to route prompts between a cheap and a strong model. The router with the lowest accuracy showed the biggest saving, because every misroute to the cheap model cost nothing in the metric. Measure quality and cost together, not cost alone.

- **[Fragments: November 20](https://martinfowler.com/fragments/2026-11-20.html)** (Martin Fowler): He cites an experiment with 465 PRs across 246 open source repos, run through a five-agent review and fix pipeline on three LLMs. Unhealthy code (CodeHealth 2.8) cost 22–35% more for agents to handle than healthy code (9.7). Complex Method and Complex Conditional were the worst smells for cost.

## 2. Techniques and Workflows

- **Harness over model:** Quill Datafix attributes a 39-point swing to the scaffold and 10 to the model. Eugene Yan makes a related point about evals: the measurement setup can matter as much as the thing measured.
- **Enforce rules outside the prompt:** TokenLat argues limits belong in code around tool calls, not in system prompt text.
- **Evaluate cost and quality together:** the router benchmark (sarthak bhardwaj) shows a cost-only metric rewards wrong answers.
- **Give the model the "why":** the release-notes article says diffs alone cause hallucinated rationale. Link issues and PR threads, and test with counterfactuals.
- **Code health affects agent cost:** Fowler's summary of the CodeScene-based experiment says refactoring complex methods and conditionals lowers review and fix cost.
- **Test against current docs:** GDS K S's Context7 test (Dev.to) ran six libraries that changed in 2026. The coding agent wrote a Vitest test that looked right and failed in 10 of 10 runs, which suggests stale API knowledge is a real failure mode. Only the opening of the article is in the input, so I haven't confirmed how well Context7 fixed it.
- **Verification as a counter to "slop":** Latent Space covers formal verification vendors, such as Harmonic and Axiom Math, as a way to check AI-written code.

## 3. Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [The scaffold moved agents +39 points. The model moved them 10.](https://dev.to/quilldf/the-scaffold-moved-agents-39-points-the-model-moved-them-10-1ikl) | 2 | 23 | Harness design had roughly four times the effect of model choice on agent scores. Tune the scaffold first. |
| [Why Your AI Release Notes Hallucinate: The "Why vs What" Problem in Git History](https://dev.to/necoz/why-your-ai-release-notes-hallucinate-the-why-vs-what-problem-in-git-history-5ch0) | 20 | 2 | Raw diffs give the model no reason for a change, so it invents one. Pull in linked issues and use counterfactual evals. |
| [Your agent isn't breaking the rules. Your rules were never enforced.](https://dev.to/tokenlat/your-agent-isnt-breaking-the-rules-your-rules-were-never-enforced-2ngo) | 7 | 7 | Prompt-only constraints aren't guarantees. Enforce business limits in code at the tool boundary. |
| [My least accurate LLM router was 60% cheaper. Every mistake counted as savings.](https://dev.to/sarthak_bhardwaj_05aba55d/my-least-accurate-llm-router-was-60-cheaper-every-mistake-counted-as-savings-46i9) | 1 | 1 | A cost-only metric rewards a router that sends hard prompts to the cheap model. Always report quality next to cost. |
| [I tested Context7 on 6 libraries that changed in 2026](https://dev.to/thegdsks/i-tested-context7-on-6-libraries-that-changed-in-2026-52g4) | 10 | 0 | A coding agent produced a plausible Vitest test that failed on 10 of 10 runs. The article tests whether doc-retrieval tooling fixes this for recently changed libraries. |
| [We Had Four Tests We Couldn't Run. We Refused to Fake Any of Them.](https://dev.to/debashish_ghosal/we-had-four-tests-we-couldnt-run-we-refused-to-fake-any-of-them-a55) | 14 | 3 | A write-up from the agentdrill v0.1.0 release on being honest about untested paths. A useful model for reporting test coverage on agent tooling. |
| [I tested my ML model honestly. It beat "good issue" labels by 43%.](https://dev.to/harsh0641/i-tested-my-ml-model-honestly-it-beat-good-issue-labels-by-43-1n18) | 27 | 5 | A model that picks open source issues was compared against the "good first issue" labels and beat them by 43%. It is worth reading for the honest-evaluation framing. |
| [I asked four AI models to rank each other. I think I found the narcissist.](https://dev.to/vadim_albarov/i-asked-four-ai-models-to-rank-each-other-i-think-i-found-the-narcissist-2li5) | 3 | 0 | Four models ranked each other, and one appears to favor itself. This is a small demonstration of self-preference bias in LLM-as-judge setups. |

## 4. Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [The sleep framework: A new way for LLMs to retain knowledge in continual learning](https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/) · [discuss](https://lobste.rs/s/svneem/sleep_framework_new_way_for_llms_retain) | 5 | 1 | Google Research proposes a way for LLMs to retain knowledge during continual learning. Worth a look if you work on fine-tuning without forgetting. |
| [Rebuilding my local voice assistant pipeline](https://blog.platypush.tech/article/Rewriting-my-voice-assistant-pipeline) · [discuss](https://lobste.rs/s/gn5qb1/rebuilding_my_local_voice_assistant) | 12 | 0 | A practitioner's account of rewriting a local voice assistant pipeline in Python. Useful as a worked example of an on-device stack. |
| [Energy-Based Reasoners: Your Recurrent Reasoner Should Be an Energy-Based Model](https://energy-based-reasoners.github.io/) · [discuss](https://lobste.rs/s/8mbnbd/energy_based_reasoners_your_recurrent) | 3 | 0 | A research page arguing that recurrent reasoners should be framed as energy-based models. It is relevant to the looped-transformer work that appeared this week. |
| [Alice v0.6.0](https://www.alicecaml.org/blog/alice-v0-6-0/) · [discuss](https://lobste.rs/s/18c0lq/alice_v0_6_0) | 29 | 4 | A release post tagged ml for the Alice project. It has the top score of the four stories today, but the input has no detail on what it does. |

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
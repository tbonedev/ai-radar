# Tech Community AI Digest 2026-11-15

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (8 stories) | Generated: 2026-11-15 14:28 UTC

---

# Tech Community AI Digest: 2026-11-15

## 1. Worth Your Time

- **[Tests as data: ensuring AI-generated code does what we want](https://martinfowler.com/articles/tests-as-data.html)** (Martin Fowler). Matteo Vaccari argues that when an agent writes both the code and the tests, the tests stop protecting you. His fix is to treat customer-level tests as the contract between you and the agent, and to keep that contract in human-readable test data rather than test code. Data files are harder for an agent to rewrite by accident. He adds that DSL parsers and custom test runners, once too costly to build, are now cheap to have an AI generate.
- **[temperature=0 Isn't Deterministic: 17 of 5,000 Greedy Tokens Flipped](https://dev.to/ji_ai/temperature0-isnt-deterministic-17-of-5000-greedy-tokens-flipped-pob)** (Dev.to). In the author's runnable demo, 17 of 5,000 greedy tokens changed between runs. The cause is floating-point reduction order and batch size flipping the argmax. If your evals or regression tests assume `temperature=0` is reproducible, they will flake, so compare with tolerance or pin the serving setup.
- **[RAG is a search problem first](https://dev.to/sayam_jain/rag-is-a-search-problem-first-3dkd)** (Dev.to). The author built a 24-post labelled set and used an *oracle* (feeding the generator the known-correct documents) to separate retrieval failures from generation failures. You can run this diagnostic tomorrow: if the oracle fixes the answers, fix search before touching prompts or models.
- **[Your AI Agent Doesn't Need Better Judgment. It Needs Fewer Permissions.](https://dev.to/rudratosh/your-ai-agent-doesnt-need-better-judgment-it-needs-fewer-permissions-ajm)** (Dev.to). The claim is that prompt injection is only half the problem. The bigger mistake is letting the model decide what it is authorized to do, so authorization should sit outside the model. A related piece, [A prompt-injected model cannot skip your approval step](https://dev.to/10xgraph/a-prompt-injected-model-cannot-skip-your-approval-step-48lc), makes the same point for human-in-the-loop graphs. The approval stop should live in the graph, where the model can't bypass it.
- **[I benchmarked AI decision APIs against XGBoost for fraud detection. XGBoost won, by a lot.](https://dev.to/jpietrus/i-benchmarked-ai-decision-apis-against-xgboost-for-fraud-detection-xgboost-won-by-a-lot-3jdh)** (Dev.to). The author compared the new "decision model" APIs with a classic gradient-boosted baseline on fraud detection, and XGBoost clearly won. The lesson is to always run a cheap tabular baseline before adopting a new model category. The summary doesn't give the exact metrics, so check the post for them.
- **[I Told My Agent Who Sent the Message. It Mostly Stopped Saying We Were Talking.](https://dev.to/kenielzep97/i-told-my-agent-who-sent-the-message-it-mostly-stopped-saying-we-were-talking-12o8)** (Dev.to). The author injects an explicit sender line into automated messages (e.g. `AUTOMATED SCHEDULER CHECK: sender=scheduler, not Keniel`). This mostly stopped the agent from acting as if a human were in the conversation. If your agent takes both scheduled and human input, label provenance in the message itself. The "mostly" suggests it's a mitigation, not a cure.

## 2. Techniques and Workflows

- **Put constraints outside the model.** Authorization and approval gates belong in code or the graph, not the prompt (Dev.to: *Fewer Permissions*, *approval step*). [Claude Code Hooks](https://dev.to/ahmed_mahmoud360/claude-code-hooks-deterministic-guardrails-for-ai-coding-agents-field-notes-1db5) makes the same point from the tooling side: a rule in CLAUDE.md is a request the model usually follows, while a hook is deterministic.
- **Protect the spec from the agent.** Fowler's *Tests as data* keeps the contract in data the agent is less likely to modify.
- **Isolate the failing component.** The RAG oracle test separates retrieval from generation. Add a baseline like XGBoost to the same habit.
- **Distrust agent summaries.** Debashish Ghosal's [600-word summary post](https://dev.to/debashish_ghosal/your-ai-coding-agent-wrote-a-600-word-summary-what-it-skipped-is-in-the-fine-print-1h7d) says the one thing that mattered can sit under "Minor Adjustments". Skim diffs, not just summaries.
- **Glossaries for domain work.** Fowler's [Generated Glossary](https://martinfowler.com/bliki/GeneratedGlossary.html) has an LLM build a glossary of an organization's jargon from its documents, emails and chat logs. Other LLMs then use it as context.
- **Failure postmortem.** [The Pulse](https://newsletter.pragmaticengineer.com/p/the-pulse-what-can-we-learn-from-114) covers Railway's detailed postmortem of a hack in which the attacker likely used "abliterated" (safeguard-free) models. Assume attackers have unrestricted models when you threat-model.

## 3. Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Jira said Done. It wasn't, and the bug showed up later. So I made Jira check first.](https://dev.to/wst2002rk/jira-said-done-it-wasnt-and-the-bug-showed-up-later-so-i-made-jira-check-first-9ed) | 35 | 9 | An open-source project that adds a verification step before a ticket counts as Done, after a merged PR with green CI still shipped a bug. Worth a look if "done" in your team means "merged". |
| [Your AI Coding Agent Wrote a 600-Word Summary. What It Skipped Is in the Fine Print.](https://dev.to/debashish_ghosal/your-ai-coding-agent-wrote-a-600-word-summary-what-it-skipped-is-in-the-fine-print-1h7d) | 18 | 6 | Agent summaries bury the most important change in a low-priority section. Read them with that in mind. |
| [I Told My Agent Who Sent the Message. It Mostly Stopped Saying We Were Talking.](https://dev.to/kenielzep97/i-told-my-agent-who-sent-the-message-it-mostly-stopped-saying-we-were-talking-12o8) | 14 | 1 | Explicit sender labels on automated messages reduced the agent's confusion about who was talking. A cheap prompt-level fix for agents that handle both scheduled and human input. |
| [Code Is Cheap Now. Judgment Isn't: The Review Bottleneck and the Vanishing Apprenticeship](https://dev.to/karmen_f883f51347e4136a4e/code-is-cheap-now-judgment-isnt-the-review-bottleneck-and-the-vanishing-apprenticeship-1neg) | 10 | 2 | Writing code is now the cheapest part of development, and understanding it is the bottleneck. The piece also asks how juniors build judgment when the apprenticeship work disappears. |
| [Why Your 19.5GB LLM Crawls on 24GB VRAM (The KV Cache Fix)](https://dev.to/shuraj_shampang_823cf28f2/why-your-195gb-llm-crawls-on-24gb-vram-the-kv-cache-fix-1k19) | 5 | 3 | A model file that nearly fills your VRAM leaves little room for the KV cache, which hurts performance. The post covers the fix for local Ollama-style setups. |
| [Your AI Agent Doesn't Need Better Judgment. It Needs Fewer Permissions.](https://dev.to/rudratosh/your-ai-agent-doesnt-need-better-judgment-it-needs-fewer-permissions-ajm) | 5 | 0 | Makes a source-led case for putting authorization outside the model. Prompt injection is only half the problem. |
| [A prompt-injected model cannot skip your approval step](https://dev.to/10xgraph/a-prompt-injected-model-cannot-skip-your-approval-step-48lc) | 3 | 3 | Human-in-the-loop designs should enforce the approval stop in the graph, not in the model's behavior. A prompt-injected model then cannot talk its way past it. |
| [Claude Code Hooks: Deterministic Guardrails for AI Coding Agents — Field Notes](https://dev.to/ahmed_mahmoud360/claude-code-hooks-deterministic-guardrails-for-ai-coding-agents-field-notes-1db5) | 2 | 2 | A CLAUDE.md rule is a request the model usually follows, while a hook is enforced. Field notes on using hooks as guardrails. |
| [temperature=0 Isn't Deterministic: 17 of 5,000 Greedy Tokens Flipped](https://dev.to/ji_ai/temperature0-isnt-deterministic-17-of-5000-greedy-tokens-flipped-pob) | 1 | 0 | Floating-point reduction order and batch size can flip the argmax even at `temperature=0`. Includes a runnable demo and fixes. |

## 4. Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [How a false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) · [discuss](https://lobste.rs/s/ii1gzp/how_false_smoke_alarm_almost_drowned_jane) | 88 | 18 | An infrastructure incident story, not AI-specific, and the top story by score. It's a good read on how a false alarm can cascade into a near-outage. |
| [ML Modules for Mere Mortals](https://thunderseethe.dev/posts/ml-modules-for-mere-mortals/intro/) · [discuss](https://lobste.rs/s/mgiv0i/ml_modules_for_mere_mortals) | 35 | 13 | Tagged `plt`, so this is likely about the ML language's module system, not machine learning. Worth it only if you care about programming-language design. |
| [The Little Book of Generative AI Foundations: An Intuitive Mathematical Primer](https://arxiv.org/abs/2605.29713) · [discuss](https://lobste.rs/s/0aungk/little_book_generative_ai_foundations) | 12 | 0 | An arXiv primer on the math behind generative models. Useful as a reference if you want the foundations without hand-waving. |
| [libreagi - save OS models](https://libreagi.com/) · [discuss](https://lobste.rs/s/7c4iar/libreagi_save_os_models) | 10 | 6 | A site about preserving open-source models, tagged privacy. It has the most discussion of the AI-tagged items. |
| [e-means: 10x faster k-means at equal loss](https://e-means.github.io/) · [discuss](https://lobste.rs/s/rnmylu/e_means_10x_faster_k_means_at_equal_loss) | 5 | 0 | Claims a 10x speedup over k-means at equal loss. Check the benchmark setup before you rely on the number. |
| [You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/) · [discuss](https://lobste.rs/s/u2h9as/you_could_have_invented_transformers) | 3 | 0 | Builds up the transformer from associative memory. Useful if you learn better from derivations than diagrams. |

*Note: the Lobste.rs and Dev.to summaries come from titles and short excerpts, so details beyond those are not verified.*

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
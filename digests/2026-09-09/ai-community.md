# Tech Community AI Digest 2026-09-09

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (5 stories) | Generated: 2026-09-09 12:07 UTC

---

# Tech Community AI Digest — 2026-09-09

## 1. Worth Your Time

- **[I let a model suggest Postgres indexes, then made the database mark its work](https://dev.to/remdore/i-let-a-model-suggest-postgres-indexes-then-made-the-database-mark-its-work-2a4c)** — Dev.to (Remdore)
  Instead of trusting LLM-suggested indexes, the author wraps each suggestion in a transaction, re-measures the query plan, checks whether the planner actually used the new index, then rolls back. Result: **4 in 10 suggestions did not survive** contact with the real planner — a concrete argument for "verify, don't trust" tooling around LLM output.

- **[I Tried to Poison My Agent's Rule Store. It Produced 20 Triggers. Zero Got In.](https://dev.to/debashish_ghosal/i-tried-to-poison-my-agents-rule-store-it-produced-20-triggers-zero-got-in-i44)** — Dev.to (Debashish Ghosal)
  Adversarial red-teaming of the author's own tool (CauterRule, which converts repeated agent mistakes into enforced rules): they generated 20 attempted rule-injection triggers and had none pass validation. Useful as a template for testing your own agent-memory/rule systems before trusting them in production.

- **[Attack your own AI agent in under 10 minutes – then secure it before deploying](https://dev.to/humanbound_ai/attack-your-own-ai-agent-in-under-10-minutes-then-secure-it-before-deploying-5602)** — Dev.to (Ayan Pahwa)
  A hands-on walkthrough running local adversarial testing (Humanbound) against a self-built customer-support agent. The agent was talked into fabricating a **$185 refund confirmation for an order that never existed** — a concrete failure mode worth checking for in any agent that touches money or commitments.

- **[FAILED is not UNKNOWN: the retry bug hiding in every AI agent](https://dev.to/arpanghoshal/failed-is-not-unknown-the-retry-bug-hiding-in-every-ai-agent-5721)** — Dev.to (Arpan Ghoshal)
  Names a specific class of agent bug: when a downstream call times out (response never returns), agents often treat "unknown outcome" the same as "failed" and retry — leading to duplicate side effects like a second $500 refund. The fix is distinguishing "confirmed failed" from "outcome unknown" before any retry logic fires.

- **[One question, 437,000 tokens: what real agents found in our MCP server](https://dev.to/alexander_lukashov/one-question-437000-tokens-what-real-agents-found-in-our-mcp-server-1flc)** — Dev.to (Alexander Lukashov)
  Ran 18 scenarios against a production MCP server through two hosted connectors and found a JSON-RPC bug that only surfaced from **rereading the spec twice** — a reminder that MCP server testing needs real agent traces, not just schema validation.

- **[What is happening with code reviews?](https://newsletter.pragmaticengineer.com/p/what-is-happening-with-code-reviews)** — Pragmatic Engineer
  Surveys how companies are adapting review process now that agents generate most PRs: the most common pattern is "AI reviews the AI code, humans review the review." A second pattern, triage by blast radius, lets low-risk changes skip human review entirely while high-risk ones still require it — reportedly adopted at OpenAI.

## 2. Techniques and Workflows

Several pieces converge on a single theme: **don't trust an agent's self-report of success — verify against ground truth.** Remdore's Postgres tool re-measures the actual query plan rather than accepting the model's index recommendation at face value (4/10 suggestions failed verification). Raju Dandigam ("My Agent Returned Success. The Browser State Said Otherwise") found browser-automation tool calls returning "success" while the actual page state diverged, arguing that agent tool wrappers need independent state checks, not just return-code trust. John (hexisteme) documents a fact-check pipeline that passed five automated gates and a human sign-off because every check compared the fact-check sheet *against itself* rather than the source's actual rendered text — a caution about verification loops that never touch ground truth.

On failure handling, Arpan Ghoshal argues agents need a three-state outcome model (succeeded / failed / unknown) instead of collapsing "no response" into "failed," since retrying an unknown-outcome operation can duplicate side effects like refunds.

On agent memory, Edward Izgorodin distinguishes *recall* (returning the right fact) from *use* (acting on it correctly) — a system can retrieve the exact fact needed and still respond as if it hadn't, meaning memory evals need to test application, not just retrieval.

## 3. Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Has AI Made You A Lazier Developer? Be Honest.](https://dev.to/nazar-boyko/has-ai-made-you-a-lazier-developer-be-honest-5ack) | 64 | 23 | An open discussion thread on whether vibe-coding is eroding problem-solving skills. Worth reading for the comment thread more than the post itself — it's where practitioners debate concrete boundaries for when to hand off vs. do it yourself. |
| [I let a model suggest Postgres indexes, then made the database mark its work](https://dev.to/remdore/i-let-a-model-suggest-postgres-indexes-then-made-the-database-mark-its-work-2a4c) | 12 | 2 | Builds a transactional verification harness around LLM-suggested indexes rather than trusting them outright. 4 of 10 suggestions failed to survive re-measurement. |
| [I Tried to Poison My Agent's Rule Store. It Produced 20 Triggers. Zero Got In.](https://dev.to/debashish_ghosal/i-tried-to-poison-my-agents-rule-store-it-produced-20-triggers-zero-got-in-i44) | 9 | 0 | Adversarial self-testing of an agent rule-injection system (CauterRule), generating 20 poisoning attempts that all failed to land. A reusable pattern for red-teaming your own agent memory. |
| [Attack your own AI agent in under 10 minutes – then secure it before deploying](https://dev.to/humanbound_ai/attack-your-own-ai-agent-in-under-10-minutes-then-secure-it-before-deploying-5602) | 5 | 0 | Walkthrough of running local adversarial testing against a self-built support agent, which fabricated a fake $185 refund confirmation. Practical starting point for pre-deploy agent security checks. |
| [My Agent Returned Success. The Browser State Said Otherwise](https://dev.to/raju_dandigam/my-agent-returned-success-the-browser-state-said-otherwise-5eb1) | 4 | 2 | A browser agent's checkout tool call reports success while the actual page state shows otherwise. Argues for verifying real state instead of trusting tool return values. |
| [One question, 437,000 tokens: what real agents found in our MCP server](https://dev.to/alexander_lukashov/one-question-437000-tokens-what-real-agents-found-in-our-mcp-server-1flc) | 3 | 12 | Running 18 real-agent scenarios against a production MCP server surfaced a JSON-RPC bug missed by conventional testing. A good model for MCP server test coverage. |
| [FAILED is not UNKNOWN: the retry bug hiding in every AI agent](https://dev.to/arpanghoshal/failed-is-not-unknown-the-retry-bug-hiding-in-every-ai-agent-5721) | 2 | 2 | Argues agents need a distinct "unknown outcome" state separate from "failed" to avoid duplicate side effects (like double refunds) on blind retries. |
| [Five Fact-Check Gates and a Signature Passed a Page Whose Source URL Never Renders the Number](https://dev.to/hexisteme/five-fact-check-gates-and-a-signature-passed-a-page-whose-source-url-never-renders-the-number-2bng) | 2 | 2 | A verification pipeline with five automated gates plus human sign-off missed a bad citation because every check compared internal notes to each other instead of the actual source page. A cautionary case study on fake verification loops. |

## 4. Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [US government backs OpenAI in New York Times copyright case](https://www.reuters.com/legal/litigation/us-government-backs-openai-new-york-times-copyright-case-2026-09-02/) · [discuss](https://lobste.rs/s/xoklqk/us_government_backs_openai_new_york_times) | 6 | 1 | The US government has filed in support of OpenAI in the ongoing NYT copyright litigation. Relevant to anyone tracking the legal footing of training-data fair-use arguments. |
| [Serving LLMs on Tenstorrent Hardware: Inside the vLLM TT Plugin](https://vllm.ai/blog/2026-09-07-vllm-tt-plugin) · [discuss](https://lobste.rs/s/twvlv6/serving_llms_on_tenstorrent_hardware) | 0 | 0 | A technical look at vLLM's plugin architecture for running inference on Tenstorrent accelerators, an alternative to Nvidia for serving workloads. Worth a read if you're evaluating non-CUDA inference hardware. |
| [LLMs and self-referentiality](https://scottaaronson.blog/?p=10046) · [discuss](https://lobste.rs/s/jato3y/llms_self_referentiality) | 3 | 4 | Scott Aaronson's take on LLMs reasoning about themselves and their own outputs, touching on philosophical limits of self-reference in these systems. |
| [Using machine learning on my Guitar Hero Controller](https://p0ly.com/ml_strummer.html) · [discuss](https://lobste.rs/s/hhogjo/using_machine_learning_on_my_guitar_hero) | 1 | 0 | A hobbyist project applying ML to Guitar Hero controller input. A lighter, hands-on example of applied ML outside the typical LLM-agent space. |

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
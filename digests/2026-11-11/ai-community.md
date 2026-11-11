# Tech Community AI Digest 2026-11-11

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (5 stories) | Generated: 2026-11-11 14:53 UTC

---

# Tech Community AI Digest, 2026-11-11

## 1. Worth Your Time

- **[Your agent isn't hallucinating — your rules never defined "I don't know"](https://dev.to/tokenlat/your-agent-isnt-hallucinating-your-rules-never-defined-i-dont-know-4od4)** (Dev.to, 21 comments). Many "hallucinations" are really gaps in the spec. For example, an expense agent has no rule for an unlisted flight change fee, so it invents an answer. The method is to write an explicit abstain or escalate rule for each case your policy doesn't cover, then test those cases specifically.

- **[Long-horizon agents and durable execution](https://martinfowler.com/articles/durable-execution-agents.html)** (Martin Fowler, Kiran Prakash). For agents that run for days, record the result of every step that touches the outside world. After a crash, replay the program: completed steps are skipped and state is rebuilt from the record. This keeps a process crash or network failure from restarting the task.

- **[Detecting Flaky Tests and Finding Their Root Causes with Strands Agents and Gemini](https://dev.to/m4rri4nne/detecting-flaky-tests-and-finding-their-root-causes-with-strands-agents-and-gemini-4kan)** (Dev.to, 62 reactions). It is a worked agent pipeline for flaky-test triage that goes past detection to root-cause analysis. It is a concrete QA use case you can copy.

- **[Stop Trusting npm Scans: Run Untrusted Packages in an Isolated AWS Sandbox](https://dev.to/aws-builders/stop-trusting-npm-scans-run-untrusted-packages-in-an-isolated-aws-sandbox-cmm)** (Dev.to). Static scanners miss a postinstall script that only fires at install time. The author gives the agent one tool that runs the install in a disposable AWS CodeBuild sandbox. It then reads the real build log to catch things like `curl | bash`.

- **[Quoting Prompting Claude Fable 5.2](https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/)** (Simon Willison, quoting Anthropic docs). If a prompt says nothing about ownership, the model tends to add to the existing structure even when that repeats code. Adding "This codebase is yours: what it's for and how it's built are your call" made it merge repeated code in about half of tries, versus under a tenth without it.

- **[38,000 AI-found vulnerabilities, 217 fixed: auditing Glasswing](https://dev.to/slabb/38000-ai-found-vulnerabilities-217-fixed-auditing-glasswing-anthropics-bug-discovery-machine-k65)** (Dev.to). The audit counts 37,966 findings, 7,349 public and 217 fixed. curl's maintainer got 45 reports for 6 low-severity confirmations. The lesson is that unreviewed model-generated reports overload maintainers, so put a human check before anything leaves your pipeline.

## 2. Techniques and Workflows

- **Specify abstention.** The tokenlat post says to define "I don't know" behavior explicitly instead of blaming the model.
- **Tell the model what it owns.** Anthropic's Fable 5.2 guidance (via Willison) shows that one sentence about code ownership changes refactoring behavior.
- **Make agent work resumable.** Fowler's durable-execution pattern and the Dev.to post "When the Coding Agent Says It Is Done" both argue that work should be easy to verify and continue after the conversation ends.
- **Run suspicious code in a sandbox, not a scanner.** This is the AWS CodeBuild approach above.
- **Add a cheap path for routine judgments.** Two Glean-related posts, "The Fastest LLM Call Is The One You Never Make" and "Give Your Agent a Fast Path", describe small decision models for routine calls. I have only seen their summaries, so the reported results are unchecked.
- **Expect a more token-hungry model to cost more per task.** Latent Space reports Fable 5.2 has a 20% lower per-token price but costs more per task. On SemiAnalysis's GDPx it cost $88.15 per task versus $67.16, because it wrote hundreds or thousands of test cases and spun up subagents to check its work. Budget by cost per task, not per-token price.
- **Review at scale.** "How We Review 4x More AI Code Without Reading Every Line" and "What Are Human Code Reviews For?" debate what humans should still check. I could not tell from the summaries what their methods are.

## 3. Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Detecting Flaky Tests and Finding Their Root Causes with Strands Agents and Gemini](https://dev.to/m4rri4nne/detecting-flaky-tests-and-finding-their-root-causes-with-strands-agents-and-gemini-4kan) | 62 | 9 | An agent pipeline that detects flaky tests and traces them to root causes. It is a concrete example of agents applied to QA. |
| [We Keep Hearing About AI Productivity. The QA Group Chat Told a Different Story.](https://dev.to/xulingfeng/we-keep-hearing-about-ai-productivity-the-qa-group-chat-told-a-different-story-2nma) | 61 | 30 | Uses an anonymous QA poll to question the AI productivity narrative. The 30 comments suggest it hit a nerve. |
| [Your agent isn't hallucinating — your rules never defined "I don't know"](https://dev.to/tokenlat/your-agent-isnt-hallucinating-your-rules-never-defined-i-dont-know-4od4) | 12 | 21 | Argues that many hallucinations are missing abstain rules in the spec. Define when the agent should decline, then test those cases. |
| [Stop Trusting npm Scans: Run Untrusted Packages in an Isolated AWS Sandbox](https://dev.to/aws-builders/stop-trusting-npm-scans-run-untrusted-packages-in-an-isolated-aws-sandbox-cmm) | 10 | 4 | Gives an agent a tool that runs installs in a disposable CodeBuild sandbox. It catches install-time payloads that static scans miss. |
| [38,000 AI-found vulnerabilities, 217 fixed: auditing Glasswing, Anthropic's bug-discovery machine](https://dev.to/slabb/38000-ai-found-vulnerabilities-217-fixed-auditing-glasswing-anthropics-bug-discovery-machine-k65) | 6 | 2 | Audits the tracker's numbers: 37,966 findings and 217 fixed. It flags the cost to maintainers of unreviewed AI-generated reports. |
| [AI Agents Need a Runtime, Not Another Framework](https://dev.to/jonlunsford/ai-agents-need-a-runtime-not-another-framework-569d) | 5 | 1 | Argues that agent infrastructure should be a runtime with security and execution concerns, not yet another framework. It is a design opinion, so weigh it against your own constraints. |
| [Backprop for Systems, Not Models](https://dev.to/marcosomma/backprop-for-systems-not-models-9n3) | 5 | 2 | Notes that most multi-agent systems don't learn and just run. It proposes feedback loops at the system level. |
| [Is LiteLLM Rust Really 7x Faster? A Closer Look at the Numbers](https://dev.to/therealmrmumba/is-litellm-rust-really-7x-faster-a-closer-look-at-the-numbers-497m) | 23 | 2 | Checks a vendor's 7x benchmark claim. It is a useful reminder to verify benchmark headlines against your own workload. |

## 4. Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Reflections on Rust in the LLM Age](https://www.youtube.com/watch?v=5D7QPOIZ7gY) · [discuss](https://lobste.rs/s/yomksa/reflections_on_rust_llm_age) | 28 | 8 | A video talk on how Rust fits into an LLM-assisted workflow. It is worth watching if you are choosing a language for agent-written code. |
| [What are some "No AI" apps/companies/resources you know of?](https://lobste.rs/s/nld6x3/what_are_some_no_ai_apps_companies) · [discuss](https://lobste.rs/s/nld6x3/what_are_some_no_ai_apps_companies) | 17 | 8 | A thread collecting products that avoid AI. It shows what some users are choosing instead. |
| [Firecracker VM Escape: PwnEscape Part 2](https://pwn.ai/blog/firecracker-escape) · [discuss](https://lobste.rs/s/wzz4u3/firecracker_vm_escape_pwnescape_part_2) | 6 | 0 | A write-up of a Firecracker VM escape. Firecracker is commonly used for isolating untrusted code, so read it if you sandbox agents. |
| [Catching prompt injections hidden in PDFs](https://tomclancy.info/joshua-judges-ruth.html) · [discuss](https://lobste.rs/s/hreu0b/catching_prompt_injections_hidden_pdfs) | 5 | 2 | Shows how to detect prompt injections hidden in PDFs. It is useful if your agent ingests documents. |

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
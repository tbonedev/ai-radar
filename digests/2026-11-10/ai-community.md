# Tech Community AI Digest 2026-11-10

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (3 stories) | Generated: 2026-11-10 15:23 UTC

---

# Tech Community AI Digest — 2026-11-10

## 1. Worth Your Time

- **[I ran 125 prompt-injection attacks on my AI agent. None got through, and that wasn't the interesting part](https://dev.to/riadgaffar/i-ran-125-prompt-injection-attacks-on-my-ai-agent-none-got-through-and-that-wasnt-the-4ib6)** (Dev.to, Riad). The author's update admits that the model resisted the attacks on its own, so the run never tested the agent's own defenses. The lesson is that a security eval has to confirm the guardrail layer is what's being exercised, for example by running against a weaker or no-defense baseline. The 45 comments are largely readers making this point.

- **[Our Agent Gate Blocked Every Bad Change. So Everyone Started Rubber-Stamping It.](https://dev.to/debashish_ghosal/our-agent-gate-blocked-every-bad-change-so-everyone-started-rubber-stamping-it-3kok)** (Dev.to, Debashish Ghosal). A review gate that blocks correctly but gets approved without reading is no gate at all. Human attention is the scarce resource, so design gates to surface few, high-signal decisions rather than everything.

- **[I Run Coding Agents in Parallel. A Markdown File Is Their Manager.](https://dev.to/ibrahimdans/i-run-coding-agents-in-parallel-a-markdown-file-is-their-manager-2jjg)** (Dev.to, Ibrahima D.). Two agents produced four pull requests where two were needed, because they overlapped on the same work. A shared `TODO.md` that acts as a task claim list fixed this. After about 500 tasks the author lists the rules that held and the days it failed.

- **[Developers Swear AI Makes Them Faster. A Stopwatch Says They're 19% Slower](https://dev.to/rudratosh/developers-swear-ai-makes-them-faster-a-stopwatch-says-theyre-19-slower-45cm)** (Dev.to, Rudratosh Shastri). It cites five measured findings and separates forced, unconfigured AI use from an expert's deliberate choice. The 19% slowdown figure is a reason to time your own tasks instead of trusting how fast the work felt.

- **[Long-horizon agents and durable execution](https://martinfowler.com/articles/durable-execution-agents.html)** (Martin Fowler, Kiran Prakash). The runtime records the result of every step that touches the outside world. After a crash the program replays, skips completed steps and rebuilds its state from that record. This makes multi-day agent tasks recoverable without redoing side effects.

- **[Prompting Claude Fable 5.2](https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/)** (Simon Willison, quoting Anthropic docs). Telling the model "This codebase is yours: what it's for and how it's built are your call" made it merge repeated code in about half of tries. Without the sentence it did so in under a tenth. Ownership framing in the prompt changes whether the model refactors or just appends.

## 2. Techniques and Workflows

- **Eval validity:** Riad's injection run (Dev.to) was reframed after readers noted the model, not the defense, stopped the attacks. Check that your test can fail.
- **Human review:** The rubber-stamping post (Dev.to) and Pavel Polívka's practice of reviewing agent code like a merge request both treat review as the bottleneck. The first warns that a gate everyone approves protects nothing.
- **Coordination:** Ibrahima D. uses a plain-text task file to stop parallel agents from duplicating work. Heinrich Neb (Dev.to) argued for ranking agent memories by age. Hsin Yen Chung's 13-paper survey (Dev.to) concludes you should keep the originals rather than only summaries.
- **Config as dependency:** Debashish Ghosal (Dev.to) argues that agent config and prompts need pinning like code, because they have no lockfile.
- **Cost accounting:** Samuel Ochaba (Dev.to) points out a billing bug. OpenAI counts reasoning tokens inside `output_tokens`, while Gemini counts thinking tokens separately, so a shared cost function gives wrong numbers. Latent Space notes Fable 5.2 has a cheaper per-token price but cost more per task ($88.15 vs $67.16 on GDPx), because it writes far more tests and spins up subagents. Track cost per task, not per token.
- **Local eval harness:** kohei_wada (Dev.to) rebuilt a harness after its script was lost with `/tmp`. It took minutes only because the design had been written down.
- **Failure mode:** Simon Willison saw `max` reasoning exhaust 128k tokens on thinking and return no output. Set budgets below the ceiling.

## 3. Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Our Looping Factory Cut DEV Page Load Time by 75% and Counting](https://dev.to/dailycontext/our-looping-factory-cut-dev-page-load-time-by-75-and-counting-1hnf) | 98 | 19 | Agents run in a loop against a Rails performance baseline, which started around 70ms per request. A real production case of agent-driven optimization with a measured result. |
| [Our Agent Gate Blocked Every Bad Change. So Everyone Started Rubber-Stamping It.](https://dev.to/debashish_ghosal/our-agent-gate-blocked-every-bad-change-so-everyone-started-rubber-stamping-it-3kok) | 13 | 2 | A gate that blocks well but is never read stops working as a control. Design review steps around human attention. |
| [Your Agent's Config Is a Dependency With No Lockfile](https://dev.to/debashish_ghosal/your-agents-config-is-a-dependency-with-no-lockfile-4j6l) | 11 | 3 | Agent configuration deserves the same pinning and verification as code dependencies. Treat it as part of your supply chain. |
| [Developers Swear AI Makes Them Faster. A Stopwatch Says They're 19% Slower](https://dev.to/rudratosh/developers-swear-ai-makes-them-faster-a-stopwatch-says-theyre-19-slower-45cm) | 9 | 6 | Five measured findings that separate forced AI use from expert-chosen use. Time your own work to find out which one you are doing. |
| [I Run Coding Agents in Parallel. A Markdown File Is Their Manager.](https://dev.to/ibrahimdans/i-run-coding-agents-in-parallel-a-markdown-file-is-their-manager-2jjg) | 6 | 2 | A TODO.md coordinates parallel agents after duplicate PRs appeared. It includes rules that held over 500 tasks and notes on when they failed. |
| [I ran 125 prompt-injection attacks on my AI agent. None got through, and that wasn't the interesting part](https://dev.to/riadgaffar/i-ran-125-prompt-injection-attacks-on-my-ai-agent-none-got-through-and-that-wasnt-the-4ib6) | 6 | 45 | The model resisted the attacks, so the defenses went untested. A useful example of how a security eval can pass without testing what you meant. |
| [13 papers on AI agent memory: the biggest lesson is to keep the originals](https://dev.to/hsin_yenchung_5562e7d5c9/13-papers-on-ai-agent-memory-the-biggest-lesson-is-to-keep-the-originals-1hi7) | 3 | 8 | A literature survey for a shared project memory tool. Its main conclusion is to preserve raw source material rather than only compressed summaries. |
| [This LLM cost function looks right. Can you spot the bug?](https://dev.to/samuel_ochaba_eb9c875fa89/this-llm-cost-function-looks-right-can-you-spot-the-bug-hh7) | 2 | 4 | OpenAI counts reasoning tokens inside output_tokens, while Gemini reports thinking tokens separately. A short puzzle with runnable code showing how multi-provider cost tracking goes wrong. |
| [Only the Design of a Local LLM Eval Harness Survives — Rebuilding It for Qwen3.8 27B](https://dev.to/kohei_wada/only-the-design-of-a-local-llm-eval-harness-survives-rebuilding-it-for-qwen38-27b-24ic) | 2 | 3 | Writing the design down let the harness be rebuilt in minutes after the script was lost. It also records two predictions the eval proved wrong. |

## 4. Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Reflections on Rust in the LLM Age](https://www.youtube.com/watch?v=5D7QPOIZ7gY) · [discuss](https://lobste.rs/s/yomksa/reflections_on_rust_llm_age) | 28 | 8 | A talk on how Rust fits into LLM-assisted development. It is the top story of the day. |
| [Catching prompt injections hidden in PDFs](https://tomclancy.info/joshua-judges-ruth.html) · [discuss](https://lobste.rs/s/hreu0b/catching_prompt_injections_hidden_pdfs) | 5 | 2 | Covers detecting instructions hidden in PDF content before a model reads them. Relevant if your agent ingests untrusted documents. |
| [Firecracker VM Escape: PwnEscape Part 2](https://pwn.ai/blog/firecracker-escape) · [discuss](https://lobste.rs/s/wzz4u3/firecracker_vm_escape_pwnescape_part_2) | 6 | 0 | A VM escape write-up for Firecracker. It matters if you rely on microVMs to sandbox agent code execution. |

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
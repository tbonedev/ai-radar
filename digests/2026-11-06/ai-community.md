# Tech Community AI Digest 2026-11-06

> Sources: [Dev.to](https://dev.to/) (30 articles) + [Lobste.rs](https://lobste.rs/) (5 stories) | Generated: 2026-11-06 14:45 UTC

---

# Tech Community AI Digest — 2026-11-06

## Worth Your Time

- **[Claude Code Ignoring CLAUDE.md? See What's in Its Context](https://dev.to/reporails/claude-code-ignoring-claudemd-see-whats-in-its-context-3j8m)** (Dev.to). When an agent ignores a rule, the common fix is to reword it. The author argues you should first inspect what is actually in the context window, since the rule may be diluted, truncated or contradicted by other loaded files. Debug the context before you rewrite the prompt.

- **[One Markdown File Can Hijack Your AI Coding Agent](https://dev.to/johnnylemonny/one-markdown-file-can-hijack-your-ai-coding-agent-the-hidden-cost-of-blindly-trusting-agentsmd-167n)** (Dev.to). An AGENTS.md or CLAUDE.md that arrives in a PR or a Downloads folder is treated as trusted instructions. It can lead to shell execution and OAuth token theft. The practical fix is to treat these files as executable code: review them in PRs, and don't open agents in untrusted directories.

- **[Coding Agents Are Growing Memories. If You Can't git diff It, Don't Trust It](https://dev.to/gabrielanhaia/coding-agents-are-growing-memories-if-you-cant-git-diff-it-dont-trust-it-3i49)** (Dev.to). The article says Codex 0.165 made memory v2 the default for fresh profiles and that Claude Code's auto memory is on by default. Neither appears in a PR, so behavior can drift without any reviewable change. The proposal is to keep agent rules in git and disable or audit implicit memory.

- **[Replaying 147 Claude Code & Codex Sessions to Tune autoCompactWindow](https://dev.to/princejain756/replaying-147-claude-code-codex-sessions-to-tune-autocompactwindow-and-catching-a-3x-token-2f43)** (Dev.to). The author replayed 147 real sessions to tune the compaction window empirically. Their first token counter summed raw assistant lines and overcounted by 3x, because the same message is logged multiple times. Deduplicate transcript entries before you trust any usage numbers.

- **[The Limits That Don't Limit](https://dev.to/aws-builders/the-limits-that-dont-limit-2o4j)** (Dev.to, AWS Builders). The author tested the four usual guardrails for runaway agents and found that each leaks. A turn cap counts model calls, not work. A token cap misses single-turn answers. A "5-second" deadline took 21.9 seconds in practice. Enforce limits at the tool and wall-clock level, and test them with an actual runaway.

- **[Building Legal Agents When You Can't See the Data](https://latent.space/p/building_legal_agents_when_you_can_t_see_the_data_-_jacob_lauritzen_cto_of_legora/)** (Latent Space). Legora's CTO describes building and testing an agent when engineers can't read a single production trace, because the data belongs to clients. They estimate models already do about 60% of legal work well. The episode covers how a small team works around the missing traces, which is useful for anyone with privacy-constrained eval.

## Techniques and Workflows

- **Context inspection over prompt rewording** (reporails, Dev.to): diagnose ignored instructions by looking at what the model actually received.
- **Instruction files are an attack surface** (johnnylemonny, Dev.to): AGENTS.md and CLAUDE.md need the same review as code. A related post (ankithm1006) describes a second agent gating the first agent's actions, and the gate refused.
- **Version agent state** (gabrielanhaia, Dev.to): memory and rules that aren't in git can't be reviewed or rolled back.
- **Measure from real sessions** (princejain756): replay your own transcripts. Check for double-counting before drawing conclusions.
- **Limits must be tested** (Pin Xiong): a cap that was never tried against a runaway run is not a control.
- **"Done" is ambiguous** (suirindo, 15 comments): the post says a coding agent's "done" can hide unfinished work. Require verifiable evidence such as tests or diffs.
- **Human-in-the-loop failure mode** (codeswithroh): a bot-recommended action was approved with a single word, and the shop went offline. Make confirmation prompts specific about consequences.
- **Contested result:** Latent Space notes the "Weight Space Programming" paper's claims were overstated in places, though independent replications exist. Simon Willison reports that Qwen 3.8 27B on a laptop can do the weight-interpretation task too.

## Dev.to Highlights

| Article | Reactions | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [One Markdown File Can Hijack Your AI Coding Agent: The Hidden Cost of Blindly Trusting AGENTS.md](https://dev.to/johnnylemonny/one-markdown-file-can-hijack-your-ai-coding-agent-the-hidden-cost-of-blindly-trusting-agentsmd-167n) | 38 | 24 | Instruction files from PRs or downloads can silently steer an agent into running shell commands and leaking OAuth tokens. Treat them as code and lock down your local workflow. |
| [The Limits That Don't Limit](https://dev.to/aws-builders/the-limits-that-dont-limit-2o4j) | 18 | 2 | Turn caps, token caps and deadlines each fail in some case, including a 5-second deadline that took 21.9 seconds. Test your guardrails against real runaway behavior. |
| [Claude Code was mailing your email address to every website it visited](https://dev.to/slabb/claude-code-was-mailing-your-email-address-to-every-website-it-visited-the-user-agent-leak-the-12k6) | 9 | 2 | The account email appeared in the User-Agent of web requests and in the system prompt. It was fixed in 2.1.317, and the article gives a runtime check for your install. |
| [My coding agent asked another agent for permission. It said no.](https://dev.to/ankithm1006/my-coding-agent-asked-another-agent-for-permission-it-said-no-3m3k) | 9 | 0 | Describes an agent-to-agent permission gate for coding agents. Useful as a pattern for separating the actor from the approver. |
| [When an AI Agent Says 'Done,' What Exactly Has Finished?](https://dev.to/suirindo/when-an-ai-agent-says-done-what-exactly-has-finished-5h3p) | 6 | 15 | Argues that "done" can mean several different things in a coding-agent session. Ask for verifiable completion criteria. |
| [Claude Code Ignoring CLAUDE.md? See What's in Its Context](https://dev.to/reporails/claude-code-ignoring-claudemd-see-whats-in-its-context-3j8m) | 5 | 7 | Shows how to inspect the real context instead of rewording rules. Often the cause is what else is loaded. |
| [Replaying 147 Claude Code & Codex Sessions to Tune autoCompactWindow](https://dev.to/princejain756/replaying-147-claude-code-codex-sessions-to-tune-autocompactwindow-and-catching-a-3x-token-2f43) | 2 | 5 | Uses recorded sessions to tune compaction and catches a 3x token overcount from duplicate lines. Validate your metrics first. |
| [Coding Agents Are Growing Memories. If You Can't git diff It, Don't Trust It](https://dev.to/gabrielanhaia/coding-agents-are-growing-memories-if-you-cant-git-diff-it-dont-trust-it-3i49) | 2 | 1 | Default-on agent memory changes behavior without appearing in PRs. Keep rules in git. |
| [Claude's IP Allowlist Can 403 a Leaked API Key. It Can 403 Your Weekly Cron Job Too](https://dev.to/gabrielanhaia/claudes-ip-allowlist-can-403-a-leaked-api-key-it-can-403-your-weekly-cron-job-too-8gp) | 2 | 0 | The new IP allowlist beta supports up to 1,000 ranges, skips Bedrock and Google Cloud, and returns 403 for any unlisted job. Inventory your scheduled jobs before enabling it. |

## Lobste.rs Highlights

| Story | Score | Comments | Summary |
| :--- | ---: | ---: | :--- |
| [Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights](https://rikiyat.github.io/blog/weight-space-programming/) · [discuss](https://lobste.rs/s/u7wdqj/sparks_weight_space_programming_llms_can) | 50 | 16 | Claims frontier models can interpret and edit raw weights given as text. Latent Space says some claims are overstated, but independent replications exist. |
| [Building fine-grained version control for agents with Rust and Durable Objects](https://delta.dev/blog/fine-grained-version-control-for-agents) · [discuss](https://lobste.rs/s/cctbcu/building_fine_grained_version_control) | 2 | 0 | Describes version control built for agent edits, which is finer-grained than commits. It relates to today's theme of making agent state reviewable. |
| [Reflections on Rust in the LLM Age](https://www.youtube.com/watch?v=5D7QPOIZ7gY) · [discuss](https://lobste.rs/s/yomksa/reflections_on_rust_llm_age) | 18 | 1 | A video on how language choice interacts with LLM-assisted development. Of interest if you pick languages with agents in mind. |
| [An easy way to try local AI with braindead-local-intelligence](https://dataswamp.org/~solene/2026-11-01-braindead-local-intelligence.html) · [discuss](https://lobste.rs/s/rlmrfy/easy_way_try_local_ai_with_braindead_local) | 0 | 0 | A low-effort walkthrough for running local models. Handy if you want to experiment without much setup. |

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
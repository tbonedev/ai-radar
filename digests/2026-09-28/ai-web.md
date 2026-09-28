# Official AI Content Report 2026-09-28

> Today's update | New content: 2 articles | Generated: 2026-09-28 14:53 UTC

Sources:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 2 new articles (sitemap total: 449)
- OpenAI: [openai.com](https://openai.com) — 0 new articles (sitemap total: 1035)

---

# AI Official Content Tracking Report — 2026-09-28

## 1. Today's Highlights

Anthropic published two new pieces today: a research report on multi-agent economic behavior ("Project Swap") and an enterprise partnership announcement with Infosys. Project Swap is the more strategically interesting of the two — it's a follow-up to "Project Deal" that empirically tests how well Claude agents can represent human preferences in negotiation settings, finding that model capability matters more than prompt engineering for negotiation outcomes. The Infosys announcement (originally dated Feb 17, 2026, re-surfaced/updated today) signals continued enterprise push into regulated industries (telecom, financial services, manufacturing) via Claude Code and Claude models embedded in Infosys Topaz. OpenAI had no new content today, so no comparative release-cadence signal can be drawn from their side this cycle.

## 2. Anthropic / Claude Content Highlights

### Research
**[Project Swap: What happens when agents trade for us?](https://www.anthropic.com/research/project-swap)** — Published Sep 24, 2026 (crawled today, Sep 28)
- Anthropic ran a controlled experiment across six offices where employees had short chats with Claude about book preferences, then dispatched Claude-powered agents onto an open "trading floor" to negotiate on their behalf, aiming to bring home a book each participant would enjoy.
- Key finding: from a five-minute conversation, an agent's ranking of 10 books matched its human's actual ranking on 61% of pairwise comparisons — described as "surprisingly good" for such minimal elicitation.
- The market's main failure mode was information scarcity (agents not knowing enough about their principals), not trading mechanics — the agents themselves negotiated effectively.
- A follow-up sweep varied the underlying model and instructions across dozens of re-runs of the same trading floor; the choice of model had a larger effect on negotiation outcomes than prompt/instruction design, and markets populated with stronger models were more economically efficient.
- Strategic significance: this is part of a recognizable Anthropic research thread (following Project Deal) probing agentic economic behavior — relevant to future "agents transacting on behalf of users" product directions and to AI-safety-adjacent questions about principal-agent alignment in autonomous systems.

### News
**[Anthropic and Infosys build AI agents](https://www.anthropic.com/news/anthropic-infosys)** — Published Feb 17, 2026 (crawled/updated today)
- Anthropic and Infosys announced a collaboration to build enterprise AI agents for telecommunications, financial services, manufacturing, and software development, integrating Claude models and Claude Code with Infosys Topaz (Infosys's generative/agentic AI platform).
- Framed explicitly around regulated-industry needs: the announcement stresses "governance and transparency" as differentiators over demo-only AI deployments, positioning Infosys's domain expertise as the bridge between lab capability and production readiness.
- Notes India as Claude.ai's second-largest market, with nearly half of Indian usage tied to building applications, system modernization, and shipping production software — a data point underscoring India as a strategic growth market for Anthropic's enterprise motion.
- Infosys is named as "one of the first partners in Anthropic's expanded presence in India," suggesting this sits inside a broader regional go-to-market push rather than a standalone deal.

## 3. OpenAI Content Highlights

⚠️ No new OpenAI content was crawled today (0 new articles). No metadata, URLs, or titles are available for analysis in this cycle. No summary or speculation is provided per the data limitation.

## 4. Strategic Signal Analysis

- **Anthropic's technical priorities**: Today's mix reflects Anthropic's dual-track strategy — (1) foundational/exploratory research into multi-agent and agentic-economy behavior (Project Swap, building on Project Deal), which reads as safety- and alignment-adjacent work on how well agents represent human intent under real incentives; and (2) enterprise productization via systems integrator partnerships (Infosys) targeting regulated, high-compliance industries. This pairing suggests Anthropic is simultaneously building the research base for autonomous agent trust while monetizing current agentic capability (Claude Code) through domain-expert partners.
- **Competitive dynamics**: With zero new OpenAI content today, no direct cadence comparison is possible for this snapshot. Historically, Anthropic has been notably active in publishing "agent economy" experiments (Project Deal → Project Swap) — a research niche not (yet, per current data) mirrored publicly by OpenAI, giving Anthropic visible thought-leadership on agent-mediated markets, a theme relevant as both companies push agentic commerce use cases.
- **Impact on developers/enterprises**: The Infosys partnership is directly actionable for enterprise developers in regulated sectors — it signals a growing template (model provider + systems integrator) that other regulated-industry buyers may look to replicate. Project Swap's findings (model quality > prompt engineering for negotiation-style tasks) is a practical signal for developers building agentic negotiation/procurement tools: invest in model selection over elaborate instruction tuning for these use cases.

## 5. Notable Details

- **New research lineage confirmed**: "Project Swap" explicitly positions itself as a sequel to "Project Deal," confirming Anthropic is running a sustained, named research program on agent-mediated markets/economics rather than a one-off blog post — worth tracking future "Project X" entries in this series.
- **Quantified trust/alignment metric**: The 61%-pairwise-match figure is a rare concrete, quotable benchmark for "how well does a short chat let an agent represent me" — a metric other agent-economy research (internal or external) may get compared against.
- **Model-choice-over-prompting finding**: The explicit claim that model capability outweighs instructions for negotiation quality is a notable counter-note to the industry's heavy emphasis on prompt/instruction engineering — could be cited in future discussions about scaling agent reliability.
- **India as named strategic market**: The Infosys piece explicitly names India as Claude.ai's #2 market and references an "expanded presence in India" — first time this framing appears in the tracked crawl, suggesting a broader regional expansion narrative that may surface more partnership announcements from Anthropic in the near term.
- **Date discrepancy note**: The Infosys article is dated Feb 17, 2026 internally but was crawled/flagged as "new" today (Sep 28, 2026) — this is likely a metadata/crawl-timing artifact (re-indexed or edited page) rather than a genuinely new announcement; treat the actual announcement date as Feb 2026, not today.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
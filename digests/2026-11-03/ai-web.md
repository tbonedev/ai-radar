# Official AI Content Report 2026-11-03

> Today's update | New content: 4 articles | Generated: 2026-11-02 16:47 UTC

Sources:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 3 new articles (sitemap total: 492)
- OpenAI: [openai.com](https://openai.com) — 1 new articles (sitemap total: 1098)

---

# AI Official Content Tracking Report — 2026-11-03

## 1. Today's Highlights

Anthropic's three new items are all science-focused research posts, which suggests a deliberate "Claude for science" push. Two are guest accounts by physicist Matthew Schwartz: *Vibe physics*, where Claude Opus 4.5 helped produce a high-energy theory paper in about two weeks, and *Claude-shaped science*, which describes the BootLoops toolkit. The third post, on protein design and analytical chemistry, reports that Claude designed binders against 14 of 15 targets, with per-design hit rates of 22–35%. OpenAI has one new URL, "Grid Protectors Program", but only its URL slug is available, so its content can't be assessed.

Note on dates: the crawl marks all three Anthropic pages as updated on 2026-11-02. The excerpts show original publication dates of Mar 23, Oct 1 and Aug 18, 2026. These are most likely older posts that were re-indexed or updated, not new releases.

## 2. Anthropic / Claude Content Highlights

### Research

**Vibe physics: The AI grad student** (crawl date 2026-11-02; excerpt shows originally published Mar 23, 2026)
Link: https://www.anthropic.com/research/vibe-physics
- Physics professor Matthew Schwartz supervised Claude Opus 4.5 through a real theoretical physics calculation, writing no files himself and working only through text prompts.
- Reported figures: a technically rigorous high-energy theory paper in about two weeks instead of the usual year, more than 110 drafts, 36M tokens and 40+ hours of local CPU compute.
- Schwartz's caveats: Claude was fast, indefatigable and "eager to please", but sloppy enough that domain expertise was essential to check its accuracy. He says AI is not doing end-to-end science yet, but that he could now write prompts that get Claude to do frontier science, which "wasn't true three months ago."
- The page's section headings include "Claude loves to please" and "The long tail of errors". These point to sycophancy and residual error as the main failure modes.

**Claude-shaped science** (crawl date 2026-11-02; excerpt shows originally published Oct 1, 2026)
Link: https://www.anthropic.com/research/claude-shaped-science
- This is Schwartz's follow-up. He stopped fighting Claude's limits and let it find "Claude-shaped" problems, meaning problems suited to current LLM tools.
- The result was BootLoops, a toolkit for exact calculations in quantitative science. Because similar calculations recur across fields, Claude found connections to ecology, population genetics and about a dozen other areas.
- Many of these connections were technically correct but scientifically unremarkable at first. Schwartz worked with domain experts to steer BootLoops toward questions those fields care about.
- Related reading is listed as "Designing more efficient quantum circuits with Claude" (Oct 16, 2026).

**Claude accelerates protein design and analytical chemistry** (crawl date 2026-11-02; excerpt shows originally published Aug 18, 2026)
Link: https://www.anthropic.com/research/Claude-accelerates-protein-design
- Protein design: Claude (Mythos Preview and Opus 4.8) designed protein binders from scratch against 15 targets and succeeded on 14. Between 22% and 35% of individual designs bound, against the 10–15% typical of current campaigns. Some designs bound several times more tightly than the best previously published result. Anthropic notes this task has historically taken a specialist weeks or months per target.
- Analytical chemistry: Claude Opus 5, described as generally available, was given NMR and LC-MS data from a contract lab and a two-sentence prompt. The excerpt cuts off before the results.
- Related reading is listed as "Claude discovers a novel enzyme system with CRISPR-like repeats" (Sep 23, 2026).

## 3. OpenAI Content Highlights

**Data limitation:** OpenAI data is metadata-only. The title is derived from the URL slug and no article text is available, so no summary or interpretation is offered.

- **Grid Protectors Program**
  - Link: https://openai.com/index/grid-protectors-program/
  - Category: index
  - Updated: 2026-11-02
  - Nothing more can be said about its content without the article text.

## 4. Strategic Signal Analysis

**Technical priorities**
- Anthropic: Its recent output is concentrated on science as a flagship use case. The related-article links (quantum circuits, enzyme discovery, "The missing map of the sky") point to a sustained science series across physics, biology and chemistry. The posts emphasize agentic, long-running work (36M tokens, 40+ hours of compute) and are candid about reliability limits.
- Model landscape: These posts mention Opus 4.5, Opus 4.8, Opus 5 and "Mythos Preview". They show a fast model cadence, and Mythos appears to be a distinct, previewed tier. Beyond these names, the excerpts give no detail on the models.
- OpenAI: No inference is possible from one metadata-only URL.

**Competitive dynamics**
- The data is too thin to say who is setting the agenda. In this sample, Anthropic is publishing substantive, evidence-backed work, while the OpenAI sample is one unreadable entry.
- Anthropic is positioning science as an area of differentiation. Whether OpenAI is responding cannot be judged from today's data.

**Impact on developers and enterprise users**
- Life sciences and R&D teams get concrete benchmarks (a 14/15 target success rate, hit rates 2–3x typical) to use when evaluating AI-assisted discovery workflows.
- The Schwartz posts give a usable pattern: expert supervision, iterative drafts, domain-expert verification, and choosing tasks that fit the model's strengths. They also show that human review remains necessary.
- Enterprises should treat the headline numbers as vendor-reported, since independent replication is not mentioned.

## 5. Notable Details

- **Re-indexing signal:** All three posts carry a 2026-11-02 update date but were originally published months earlier. This could mean a refreshed science hub or landing page. It is probably not three new releases.
- **New terminology:** "Vibe physics", "Claude-shaped science/problems" and "BootLoops" frame the work as fitting tasks to the model's strengths. "Mythos Preview" is also worth watching as a model name.
- **Candor on failure modes:** The phrases "Claude loves to please" and "the long tail of errors" openly name sycophancy and residual errors, which is relatively unusual for vendor-published research.
- **Category density:** Three research posts on science from one company in one crawl suggests a coordinated content push.
- **OpenAI "Grid Protectors Program":** The slug suggests a program of some kind, but its purpose, scope and any policy or safety significance cannot be determined without the article text. A re-crawl once content is available is recommended.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
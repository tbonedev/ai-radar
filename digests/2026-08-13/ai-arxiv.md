# ArXiv AI Research Digest 2026-08-13

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-13 08:16 UTC

---

# ArXiv AI Research Digest — 2026-08-13

## Today's Highlights

Today's submissions cluster around two structural questions: what happens when LLM training and inference assumptions are pushed to their limits, and how agentic systems fail when their environments or incentives are misaligned. Several papers challenge comfortable assumptions — long-context training can *degrade* parametric knowledge, LLM-based user simulators collapse under multi-agent RL, and model rankings shift depending on inference-time token budgets. On the agent-safety front, a new attack class ("Convergent Detour Hijacking") shows that skill-based LLM agents can be steered into resource-draining detours without ever leaving their assigned task, a subtle and hard-to-detect failure mode. Meanwhile, applied work continues to mature: a corpus-specific clinical RAG system now matches frontier LLMs on HealthBench, and enterprise document-to-artifact pipelines are being formalized with explicit governance and validation stages rather than pure extraction.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Information Abundance Paradox: Long-Context Training Undermines Parametric Knowledge](http://arxiv.org/abs/2608.12218v1) | Arda Uzunoglu, Benjamin van Durme, Daniel Khashabi et al. | Shows that training on longer contexts can erode a model's internal parametric knowledge rather than only enriching it, contradicting the assumption that more context is strictly beneficial. This has direct implications for how labs balance long-context capability with factual reliability. |
| [Massive Activations in Hybrid Linear Attention Large Language Models](http://arxiv.org/abs/2608.12149v1) | Zunhai Su, Bohan Sun, Xialie Zhuang et al. | Presents the first systematic study of massive activation patterns in layer-interleaved hybrid linear-attention LLMs, identifying "pre-attention spikes" and "inter-spike plateaus" as architecture-aligned phenomena. Understanding these patterns is important for quantization and stability work on the increasingly popular hybrid-attention architectures. |
| [Who Thinks Best Depends on How Long You Let Them: Budget-Dependent Rankings in LLM Evaluation](http://arxiv.org/abs/2608.12150v1) | Rodrigo Guedes de Souza, Alison R. Panisson | Demonstrates that model rankings on reasoning benchmarks are not stable but shift substantially depending on the token generation budget allowed. This undercuts single-budget leaderboard comparisons and argues for budget-aware evaluation protocols. |
| [How Organizations Use AI: Evidence from ChatGPT](http://arxiv.org/abs/2608.12236v1) | Aaron Chatterji, David Holtz, Neel Rakholia et al. | A large-scale, privacy-preserving analysis linking ChatGPT Enterprise usage to worker roles and financial data through March 2026. Provides rare empirical grounding for how AI adoption actually plays out inside organizations, rather than survey-based estimates. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [VAKRA: Evaluating Multi-Hop Reasoning Across APIs and Retrieval Under Tool-Use Policies](http://arxiv.org/abs/2608.12282v1) | Ankita Rajaram Naik, Anupama Murthi, Benjamin Elder et al. | Introduces a benchmark specifically testing enterprise agents that must reason jointly across structured APIs and document retrieval, a combination existing benchmarks evaluate in isolation. It exposes a realistic gap between narrow tool-use skill and integrated multi-hop reasoning. |
| [Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents](http://arxiv.org/abs/2608.12273v1) | Junliang Liu, Ruoyu Li, Wenxin Tang et al. | Identifies a novel attack where a malicious third-party skill steers an otherwise-correct agent task onto an unnecessarily resource-intensive detour without breaking task correctness, making it hard to detect via output checking alone. Relevant as agent marketplaces built on third-party skills proliferate. |
| [One Frozen Simulator Is Not Enough: Simulator Collapse in Multi-Agent RL](http://arxiv.org/abs/2608.12253v1) | Simon Yu, Nicholas Tomlin, Marwa Abdulhai et al. | Shows that using a single frozen LLM as a human-behavior simulator for multi-agent RL causes systematic generalization failure due to "simulator collapse" — the simulator itself becomes mode-collapsed under an adapting policy. Proposes this as a root-cause explanation for why many human-AI interaction RL setups fail to transfer. |
| [Do LLMs Take Care of Their Own? Similarity Signals Can Induce Cooperation](http://arxiv.org/abs/2608.12125v1) | Akash Kundu, Emanuel Tewolde, Ratip Emin Berker et al. | Studies whether LLM agents in strategic games (e.g., Prisoner's Dilemma) cooperate more readily when they detect similarity signals from other LLM agents. Bears on multi-agent ecosystems where agents from the same or different model families increasingly interact. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [QV-PIC: Query-Aware Visual Position-Independent Caching for Efficient RAG Serving](http://arxiv.org/abs/2608.12121v1) | Yilin Liu, Rui Meng, Wangze Ni et al. | Extends position-independent KV caching to visual RAG pipelines, reducing redundant prefill computation when the same image/text chunks recur across queries. Targets a real serving-cost bottleneck as multimodal RAG deployment scales. |
| [SAG: SQL-Retrieval Augmented Generation with Query-Time Dynamic Hyperedges](http://arxiv.org/abs/2608.12129v1) | Yuchao Wu, Junqin Li, XingCheng Liang et al. | Proposes constructing dynamic hyperedges at query time to improve graph-based RAG's handling of structured constraints and multi-hop reasoning, addressing limits of standard dense retrieval. Adds a structured-retrieval alternative to the growing graph-RAG literature. |
| [HAMP-LIC: Hessian-Aware Mixed-Precision Post-Training Quantization for Learned Image Compression](http://arxiv.org/abs/2608.12239v1) | Yuefeng Zhang | Applies Hessian-aware mixed-precision PTQ to learned image compression models to reduce cross-hardware encode/decode mismatches without retraining. A practical efficiency contribution for deploying compression models across heterogeneous devices. |
| [ADEPT: A Unified Framework for Deep Learning Test Adequacy](http://arxiv.org/abs/2608.12144v1) | Yidi Kao, Shawn Burnham, Tommi Rose Fahy et al. | Unifies a decade of fragmented deep-learning test-adequacy metrics (neuron coverage, latent-feature coverage, decision-boundary exploration) into a single comparable framework. Useful for practitioners trying to choose among incompatible, independently-released adequacy metrics. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A corpus-specific clinical RAG system matches or outperforms newer frontier LLMs on HealthBench](http://arxiv.org/abs/2608.12138v1) | Praveen Reddy, Charuta Mandke, Suvrankar Datta et al. | Shows that VITA, a retrieval-augmented clinical system built on a corpus-specific base, matches or beats general-purpose frontier LLMs on HealthBench, questioning claims that general models have closed the gap with specialized clinical AI. Notable for testing beyond the narrow set of systems and high-income-setting benchmarks typically used. |
| [Diagram-MMU: A Multi-Modal Benchmark for Scientific Diagrams](http://arxiv.org/abs/2608.12262v1) | Weihao Bo, Shan Zhang, Yanpeng Sun et al. | Introduces a benchmark for evaluating MLLMs on scientific diagram understanding, including converting diagrams to LaTeX TikZ code as seen in tools like OpenAI Prism. Fills a gap in evaluating scientific-writing-assistant capabilities specifically. |
| [GUIDE: Governed Unified Intelligence for Document-to-Artifact Generation in Enterprise Settings](http://arxiv.org/abs/2608.12133v1) | Shivali Dalmia, Sumukha Thoppanahalli, Mohammadreza Sediqin et al. | Proposes a governed pipeline for turning heterogeneous enterprise documents (text, tables, images) into artifacts, explicitly addressing hallucination and table-structure degradation with validation steps beyond extraction. Targets a common enterprise LLM/VLM deployment failure mode. |

## Research Trend Signal

A clear thread today is **assumption-breaking empirical work**: papers are systematically testing and overturning defaults that the field has treated as safe — long context always helps (it doesn't, for parametric knowledge), model rankings are stable across inference budgets (they aren't), single frozen simulators are adequate for multi-agent RL (they collapse). This suggests the field is entering a more rigorous, skeptical phase after rapid capability scaling, with researchers probing where scaling recipes silently break down. A second thread is **agent-ecosystem security and robustness** as agents interact with third-party skills, each other, and simulated humans — detour hijacking, simulator collapse, and cooperation-via-similarity all point to emergent multi-agent dynamics becoming a first-class research concern rather than an afterthought. Finally, efficiency work is increasingly **modality- and deployment-specific** (visual RAG caching, mixed-precision compression, hardware-generated quantized trees) rather than generic, reflecting a maturing infrastructure layer optimizing for real production constraints.

## Worth Deep Reading

1. **[Information Abundance Paradox](http://arxiv.org/abs/2608.12218v1)** — A genuinely counterintuitive result with wide implications for how labs design long-context training curricula; worth reading for the mechanism, not just the headline finding.
2. **[Convergent Detour Hijacking](http://arxiv.org/abs/2608.12273v1)** — As skill marketplaces for agents (Claude Skills, etc.) grow, this attack class is directly relevant to production agent security and is likely to generate follow-up defenses.
3. **[One Frozen Simulator Is Not Enough](http://arxiv.org/abs/2608.12253v1)** — Offers a concrete, falsifiable explanation for a failure mode (simulator collapse) that likely affects many published human-AI interaction RL results, making it valuable for anyone building on that line of work.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
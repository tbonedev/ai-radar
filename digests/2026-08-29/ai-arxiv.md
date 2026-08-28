# ArXiv AI Research Digest 2026-08-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-28 19:12 UTC

---

# ArXiv AI Research Digest — 2026-08-29

## Today's Highlights

Today's batch is dominated by **agent self-improvement and evaluation infrastructure** rather than raw capability gains: several papers (WikiSkill, RedEvoAgent, Verify Smarter Evolve Further, What Makes Good Agentic Data) converge on the idea that agents should compile their own experience into reusable skills or harness improvements, closing the loop between deployment and training. A parallel cluster addresses **RLVR's known pathologies** — entropy collapse, narrow exploration, and cross-domain capability fusion — with CritICL, TTPO, and the weak-model-guidance paper all attacking reasoning robustness from different angles. Safety and auditing work is notably mature this cycle, spanning agentic misalignment detection (INTENT-AS-A-TOOL), eval-awareness nuance, and methodological critiques of LLM-judge audits. Efficiency-conscious training also features prominently, with Puro-2B demonstrating a full pretraining run on a single consumer GPU for under $5,090.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1) | Aozhe Wang, Zhengxi Lu, Jianze Wang et al. | Enables test-time training for reasoning without ground-truth labels, extending RL-style post-training gains to inference-time adaptation. This decouples reasoning improvement from labeled data availability, broadening where RL-style methods can be applied. |
| [Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1) | Xingyu Shen, Huishuai Zhang, Peng Li et al. | Uses weaker models to guide exploration in RLVR, directly targeting the entropy collapse that narrows pass@k coverage during reasoning RL. Offers a cheap, orthogonal fix to existing regularization-based approaches. |
| [Consolidating RLVR Capabilities Across Domains](http://arxiv.org/abs/2608.27409v1) | Siye Wu, Kai Yang, Yuchen Cai et al. | Organizes model-merging and fusion approaches for combining domain-specialized RLVR experts into a single taxonomy. Useful for practitioners deciding whether to train one generalist model or merge specialists. |
| [Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1) | Kairong Luo, Jiarui Cui, Yaorui Yin et al. | Demonstrates a competitive pretraining recipe executable on a single consumer GPU for a fixed, low budget. Lowers the barrier for academic and independent LLM pretraining research. |
| [How Language Models Organize and Structure Moral Knowledge](http://arxiv.org/abs/2608.27402v1) | Orion Reblitz-Richardson | Trains linear probes to show LLMs geometrically organize moral foundations, not just detect moral content. Provides interpretability evidence relevant to alignment and value-representation research. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1) | Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng et al. | Proposes compiling agent trajectories into curated, reusable skill knowledge rather than raw experience replay. Addresses a key bottleneck in agent self-improvement: extracting generalizable insight, not just successful traces. |
| [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1) | Yufan Wu, Yinghui He, Zhengyi Hu et al. | Leverages small-model failure patterns at inference time to improve strong-model reasoning without repeated generation or external verifiers. Cuts inference cost relative to existing scaling methods. |
| [RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1) | Junjie Zhang, Hui Liu, Kecheng Chen et al. | Builds a red-teaming agent that evolves attack skills from experience rather than relying on fixed jailbreak sets. Important as agentic deployments raise the stakes of tool-use jailbreaks beyond unsafe text alone. |
| [INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1) | Yutong Zhang, Jianshuo Dong, Peng Xu et al. | Introduces an intent-tracking tool for chain-of-thought monitoring to catch agentic misalignment before harmful execution. A practical safety mechanism for autonomous agents facing goal conflicts. |
| [Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit](http://arxiv.org/abs/2608.27427v1) | Yisen Xi | Proposes separating evolvable "persona" from auditable "execution" trust domains in governed agent deployments. Addresses a real enterprise tension between agent adaptability and compliance traceability. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1) | Dewu Zheng, Ruizhe Ye, Yanlin Wang et al. | Shows that trajectory quality, not quantity, drives SFT gains for software-issue resolution. Challenges the prevailing large-scale-trajectory-dataset paradigm in agentic coding. |
| [From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench](http://arxiv.org/abs/2608.27442v1) | Dewu Zheng, Yanlin Wang, Xiwen Wang et al. | Introduces a benchmark modeling iterative, multi-turn code review rather than single-shot review judgments. Fills a gap since most LLM code-review evaluation ignores the interactive nature of real reviews. |
| [Beyond F1: Evaluating Coverage and Failure Recovery in AI Model Security Scanners](http://arxiv.org/abs/2608.27424v1) | Qianlong Lan, Vinothini Pandurangan, Anuj Kaul et al. | Evaluates ModelScan, ModelAudit, and Fickling on cases beyond clean binary judgments, exposing blind spots standard F1 metrics hide. Relevant to anyone relying on these scanners for ML supply-chain security. |
| [Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search](http://arxiv.org/abs/2608.27266v1) | Yuan Chang, Xiaoqi Chen | Questions whether elaborate prompt-search pipelines outperform simple baselines for agentic prompt optimization. A useful sanity check against over-engineering in the recursive self-improvement literature. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1) | Kechen Liu, Ola Shorinwa | Trains action-conditioned video world models across heterogeneous robot embodiments instead of one robot at a time. Unlocks use of much larger, more diverse video corpora for learning transferable physics. |
| [Sophistication in GenAI Use: Field Evidence from a Large Firm](http://arxiv.org/abs/2608.27364v1) | Nicholas J. Hallman, Zachary T. Kowaleski, Anu Puvvada et al. | Analyzes 713,564 real employee prompts across 4,000 workers to measure variation in enterprise GenAI usage sophistication. Rare large-scale field data on how knowledge workers actually use LLMs day to day. |
| [Your Voice Cloning System is Secretly a Voice Anonymizer](http://arxiv.org/abs/2608.27360v1) | Romolo Muletta, Felix Matthias Saaro, Mark Cieliebak et al. | Repurposes an off-the-shelf voice cloning model (XTTSv2) for speaker anonymization without retraining. A clever dual-use reframing with direct privacy applications. |

## Research Trend Signal

The dominant signal today is the shift from "scaling generation and verification" toward **structured self-improvement loops**: agents compiling experience into skills (WikiSkill), harnesses evolving via behavior-aware verification, and red-teamers/prompt-optimizers bootstrapping from their own failures. This suggests the field is moving past brute-force RLVR toward more sample-efficient, introspective training signals. Simultaneously, there's a maturing safety/audit sub-literature — intent tracking, eval-awareness decomposition, and skepticism toward LLM-judge statistical designs — indicating growing rigor rather than just new benchmarks. A third thread is cost democratization (Puro-2B's consumer-GPU pretraining) alongside real-world deployment measurement (enterprise GenAI usage field data), suggesting research attention is broadening from lab benchmarks to actual economics and usage patterns of deployed systems.

## Worth Deep Reading

1. **[WikiSkill](http://arxiv.org/abs/2608.27454v1)** — Directly tackles the hardest open problem in agent self-improvement: extracting *generalizable* insight from experience rather than memorizing successful trajectories. Worth reading for anyone building persistent agent memory systems.
2. **[Difference-in-Differences on a Censored Rating Scale Can Manufacture an Effect](http://arxiv.org/abs/2608.27309v1)** — A methodological warning that a common LLM-judge audit design can fabricate bias findings from bounded rating scales alone. Essential reading before trusting any DiD-style LLM-judge bias study.
3. **[SWE-Prime](http://arxiv.org/abs/2608.27449v1)** — Counters the "more trajectories is better" assumption underlying most agentic coding SFT pipelines with evidence that trajectory quality dominates. High practical relevance for anyone fine-tuning coding agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# ArXiv AI Research Digest 2026-11-05

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-05 15:07 UTC

---

# ArXiv AI Research Digest — 2026-11-05

## 1. Today's Highlights

Today's submissions center on **coding agents that improve AI infrastructure itself** (CompressionBench, ServerBench) and on **cheaper, more reliable agent inference** (turn-level best-of-N, speculative context compaction, visual token routing). Evaluation work is prominent, with new benchmarks for physics research, chemistry labs, and temporal self-knowledge in finance. Several papers find that **perception rather than planning** limits performance on ARC-AGI-3. On the robotics side, RL-based policy improvement and sim-trained perceptive humanoids point toward scalable generalist control.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LLMs Don't Know What They Know: Benchmarking Temporal Self-Knowledge for Financial Backtesting](http://arxiv.org/abs/2611.06808v1) | Lingfei Qian, Yan Wang, Xueqing Peng et al. | Tests whether stated knowledge cutoffs, self-reports, or "answer as of date X" prompts actually prevent look-ahead leakage in LLM backtests. It matters because contaminated backtests give misleading financial results. |
| [Persona Perspectives: Adopting Viewpoints Reorganizes Representations in LLMs](http://arxiv.org/abs/2611.06848v1) | Austin C. Kozlowski, Avital Mintz, Madison Lee | Shows that adopting personas changes how features are represented internally, which undermines the assumption of context-stable features behind linear probes and SAEs. This is a caution for interpretability-based monitoring. |
| [Context–Answer Metamodels: Forecasting LLM Activations Before the First Answer Token](http://arxiv.org/abs/2611.06837v1) | Tommy He, Thomas Jiralerspong | Predicts the distribution of answer-time activations directly from context activations, without many sampled rollouts. This could make characterizing output variability cheaper. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [On Turn-Level Best-of-N Sampling for Scaling LLM Agents](http://arxiv.org/abs/2611.06868v1) | Jalaj Bhandari, Dhawal Gupta, Hongli Zhan et al. | Evaluates a generator-selector setup that samples N candidates at each agent turn and picks the best. It offers a simple inference-time scaling recipe for long-horizon agent tasks. |
| [Transforming Integer Grids to Spatial Intuition: Perception, Not Planning, Governs ARC-AGI-3](http://arxiv.org/abs/2611.06793v1) | Harsidak Singh Banwait | Argues that frontier-model failures on interactive ARC-AGI-3 games stem mainly from perceiving raw grids, not from planning. This redirects effort toward better state representation. |
| [ConceptARC at Scale: Studying Conceptual Understanding in Reasoning Models](http://arxiv.org/abs/2611.06732v1) | Philipp Mondorf, Adrien Deliège, Solim LeGris et al. | Probes whether large reasoning models form abstractions that generalize across conceptually related ARC tasks. It helps separate real abstraction from benchmark fitting. |
| [Reinforcement Learning Enables Scaling Generalist Robot Policy Improvement](http://arxiv.org/abs/2611.06905v1) | Michal Korniak, Marco Bagatella, Ralf Römer et al. | Uses RL to adapt large pretrained generalist robot policies to reach sufficient task performance. It shows a path from zero-shot generalists to reliable specialists. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CompressionBench: How can your coding agents compress LLMs?](http://arxiv.org/abs/2611.06858v1) | Xinrui Zhong, Zhifeng Li, Zhiming Wang et al. | Benchmarks whether coding agents can shrink a pretrained model while retaining its behavior under a storage budget. It tests a concrete step toward recursive self-improvement. |
| [ServerBench: How can your coding agents design specialized LLM serving systems?](http://arxiv.org/abs/2611.06841v1) | Xinrui Zhong, Zhiming Wang, Yongqi Liu et al. | Evaluates coding agents on designing LLM serving systems under session dependencies and latency constraints. It probes agents' ability to engineer their own infrastructure. |
| [SpecCompact: Accelerating LLM Agent Context Compaction with Slot-Parallel Semantic Speculative Verification](http://arxiv.org/abs/2611.06876v1) | Yulu An, Yifei Feng, Xiangyang Yin | Uses structured summary slots with speculative verification to speed up context compaction. It reduces the latency cost of keeping long agent histories manageable. |
| [Visual Token Routing: Learning to keep tokens that matter](http://arxiv.org/abs/2611.06854v1) | Pranjal Aggarwal, Sean Welleck | Learns which screenshot tokens to retain for computer-use agents, attacking the thousands-of-tokens-per-frame bottleneck. This makes real-time and long-horizon use more feasible. |
| [Systolic Linear Attention: Co-Designing Tile-Grouped Gated Delta Attention for TPUs](http://arxiv.org/abs/2611.06828v1) | Gagik Amirkhanyan, Nuojin Cheng | Redesigns gated-delta linear attention (GDN, KDA) for TPU hardware, where GPU-tuned kernels fit poorly. It widens the hardware options for linear-attention models. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [FrontierPhysics: Evaluating Agents for End-to-End Physics Research](http://arxiv.org/abs/2611.06910v1) | Bingran You, Wenjun Ke, Ria Rosenauer et al. | Introduces an end-to-end benchmark that scores both correctness and research quality, unlike fixed-question or reproduction benchmarks. It better reflects real scientific agent work. |
| [BEAKER: An Expert-Curated Benchmark for Embodied Brains in Self-Driving Chemical Laboratories](http://arxiv.org/abs/2611.06911v1) | Fei Lin, Tengchao Zhang, Ziyang Gong et al. | Benchmarks multimodal LLMs on perceiving, reasoning about, and acting in chemical lab scenes under safety constraints. It targets a high-stakes embodied setting. |

## 3. Research Trend Signal

**Agents building agent infrastructure.** CompressionBench and ServerBench ask whether coding agents can compress models and design serving systems, which is a recursive self-improvement framing now treated as a measurable benchmark.

**Agent efficiency.** Turn-level best-of-N, context compaction, and visual token routing all trade compute against reliability and latency in long-horizon settings.

**Diagnostic evaluation.** ARC-AGI-3 and ConceptARC studies ask *why* models fail, not only how often. The financial-backtesting and explanation-faithfulness papers question whether common evaluation assumptions hold.

**Domain-specific agent benchmarks.** Physics research and chemistry labs show benchmarks moving toward end-to-end tasks that also score quality and safety.

**Hardware-aware architecture.** Linear attention is being adapted to TPUs rather than only GPUs.

## 4. Worth Deep Reading

1. **[Transforming Integer Grids to Spatial Intuition (ARC-AGI-3)](http://arxiv.org/abs/2611.06793v1)**: The claim that perception rather than planning is the bottleneck, if supported, changes where agent research should invest.
2. **[CompressionBench](http://arxiv.org/abs/2611.06858v1)** (with [ServerBench](http://arxiv.org/abs/2611.06841v1)): Together they give concrete, measurable evidence on how far coding agents can improve the stack they run on.
3. **[On Turn-Level Best-of-N Sampling for Scaling LLM Agents](http://arxiv.org/abs/2611.06868v1)**: A simple baseline for agent inference-time scaling that is easy to adopt, so its limits are worth understanding.

*Note: summaries are based on the abstracts as provided, several of which were truncated, so check the full papers before relying on specifics.*

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# ArXiv AI Research Digest 2026-11-12

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-12 15:44 UTC

---

# ArXiv AI Research Digest — 2026-11-12

## 1. Today's Highlights

Today's submissions center on **agent reliability and memory**: several papers ask when agents should write lessons to memory, how to evaluate them, and how to distill them into cheaper workflows. LLM post-training gets both theory (coverage collapse in policy optimization) and practice (scaffolded RLVR). Efficiency work is prominent, covering speculative decoding objectives, overlapping-block diffusion LMs, and adaptive weight precision for small local models. Foundation-model adaptation into specialized domains (biology, medical imaging, time series, tabular data) continues, with several papers testing whether generalist models really beat task-specific ones.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A Theory of Policy Optimization in Post-Training: Coverage Collapse and Reference Resets](http://arxiv.org/abs/2611.14467v1) | Audrey Huang, Nan Jiang, Sham M. Kakade et al. | Gives sample and gradient-step complexity for policy optimization governed by the base model's response coverage, and identifies coverage collapse and reference resets. It offers principled guidance for post-training, which is otherwise largely heuristic. |
| [AutoScaffold: AI-Guided Scaffolding for Reinforcement Learning of Language Models](http://arxiv.org/abs/2611.14515v1) | Zijian Zhang, Rizhen Hu, Jiangweizhi Peng et al. | Uses AI-generated training-time scaffolds, such as hints and strategies, to extract more signal from RLVR attempts than a single outcome reward. This addresses sparse-reward inefficiency in reasoning RL. |
| [AI Isn't Getting Dumber, We're Getting Pickier](http://arxiv.org/abs/2611.14333v1) | Zihan Chen, Lei Nico Zheng, Di Zhu et al. | Uses Chatbot Arena data to separate genuine model changes from drift in human evaluators' standards. This is a useful caution for interpreting human-preference leaderboards over time. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [When Should Agents Remember? Falsification-Gated Self-Evolution for LLM Agents](http://arxiv.org/abs/2611.14326v1) | Runxuan Tang, Haoyu Gao, Yuyan Ding et al. | Gates writes to agent memory on falsification tests instead of local success. This makes self-improvement safer and more reusable. |
| [Don't Just Trust Your Memory: Evidence-Linked Memory](http://arxiv.org/abs/2611.14320v1) | Yukyeong Lee, Yumin Choi, Jinheon Baek et al. | Links memory lessons to supporting evidence to reduce memory-induced degradation, where agents fail tasks they would solve without memory. It targets a practical failure mode of experience-based agents. |
| [ReTrace: Distilling Tool-Using Agents into Planner-Free Workflows](http://arxiv.org/abs/2611.14492v1) | Kaiyuan Hou, Yang Ping Kuo, Indranil Bhattacharya et al. | Distills LLM agents following an SOP into fixed workflows that need no per-step LLM planning. It cuts latency and cost for repeated business processes. |
| [Continual-ARC: Measuring Skill Acquisition over a Working Lifetime](http://arxiv.org/abs/2611.14505v1) | Daniel Lenton | Introduces a continual-learning benchmark that serves instances repeatedly and covers both harness-based and parametric learners. It fills gaps in single-domain, one-shot benchmarks. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [REAL Loss: Optimizing Real Expected Acceptance Length for Speculative Decoding](http://arxiv.org/abs/2611.14399v1) | Yu Tian | Trains draft models directly for expected acceptance length rather than CE, KL or TV proxies. This aligns the objective with actual speedup. |
| [Blurring the Block Boundaries: Overlapping Block Denoising for Efficient Diffusion Language Models](http://arxiv.org/abs/2611.14387v1) | Amir Mann, Jonathan Fhima, Shaked Brody et al. | Overlaps blocks in block-diffusion LMs so token refinement is not cut off at block boundaries. It aims to make diffusion LMs faster for latency-critical use. |
| [Precision on Demand: Escalating Weight Bits at Uncertain Decoding Steps](http://arxiv.org/abs/2611.14418v1) | Mohammed Nayeem Khan, Logesh L, Aliyas Ahmad Misri | Decodes with the top 4 bits of 8-bit weights and redoes a step at full precision only when output entropy is high. This is a cheap way to spend precision selectively on local models. |
| [A Margin Perspective on LoRA (MaLoRA)](http://arxiv.org/abs/2611.14397v1) | Ziqing Xu, Hancheng Min, Lachlan Ewen MacDonald et al. | Explains LoRA's robustness to catastrophic forgetting and its mergeability through a margin analysis. This gives theoretical grounding for a widely used technique. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training](http://arxiv.org/abs/2611.14519v1) | Emre Kutlusan, Yongmin Li | Compares adapted foundation models with task-specific ones beyond in-distribution data and a single baseline. It tests whether the foundation-model default is justified. |
| [ARE-bench: Benchmarking Agents' Research Ability in Real-World Researcher Sessions and Workspaces](http://arxiv.org/abs/2611.14364v1) | Jiahang Lin, Wanying Ren, Wanghan Xu et al. | Builds a benchmark from real researcher sessions and messy workspaces rather than clean, curated ones. It targets the gap between benchmark scores and reliability in ongoing projects. |
| [EngineAgent: Agentizing On-Device LLM Inference Engines](http://arxiv.org/abs/2611.14356v1) | Zhengxiang Huang, Yujie Sun, Shengheng Chen et al. | Uses agents aware of the inference stack hierarchy and hardware to add new model support to on-device engines. It automates changes across conversion, graph, operator and backend layers. |
| [One Policy for 100 Household Tasks: Our Solution for the 2026 BEHAVIOR Challenge](http://arxiv.org/abs/2611.14432v1) | Ilia Larchenko, Gleb Zarin, Atindra Nair et al. | A single VLA checkpoint handles all 100 long-horizon tasks and placed 9th, the best independent team. It is a practical recipe for generalist embodied policies. |

## 3. Research Trend Signal

Agent memory is shifting from "store everything" to **governed memory**. Falsification gating, evidence linking and workflow distillation all treat memory as something to verify, ground or compile away. Evaluation is becoming more critical. ARE-bench, Continual-ARC, the enterprise agent-framework comparison and the Arena rater-drift study all question whether current benchmarks reflect real deployment. Efficiency work is moving toward **adaptive compute**, such as entropy-triggered precision, acceptance-length-aware drafting and overlapping diffusion blocks, rather than uniform cost. Theory is also catching up with post-training practice, through coverage-based analyses of policy optimization and margin-based accounts of LoRA. In the applied papers, "foundation model versus specialist" comparisons are more rigorous, with out-of-distribution tests and stronger baselines.

## 4. Worth Deep Reading

1. **[A Theory of Policy Optimization in Post-Training](http://arxiv.org/abs/2611.14467v1)**: Authors with strong RL theory credentials tie sample complexity to base-model coverage. The reference-reset idea could directly inform RLVR practice.
2. **[When Should Agents Remember? Falsification-Gated Self-Evolution](http://arxiv.org/abs/2611.14326v1)**: It frames memory writing as a verification problem. Read it together with the evidence-linked memory paper for a fuller view of memory failure modes.
3. **[AI Isn't Getting Dumber, We're Getting Pickier](http://arxiv.org/abs/2611.14333v1)**: Its finding that evaluator standards drift affects how any human-preference leaderboard should be interpreted.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
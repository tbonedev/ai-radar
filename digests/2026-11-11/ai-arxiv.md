# ArXiv AI Research Digest 2026-11-11

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-11 14:53 UTC

---

# ArXiv AI Research Digest — 2026-11-11

## Today's Highlights

Today's submissions center on making LLM agents and post-training more reliable and efficient. Several papers study agent memory, self-evolution and evaluation: when memory helps or hurts, and how to gate what agents learn. On the training side, there is theory for policy optimization (coverage collapse) and scaffolded RLVR. Inference efficiency (speculative decoding, diffusion LMs, mixed-precision decoding) is also prominent. Foundation models continue to spread into biology, time series and tabular domains.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A Theory of Policy Optimization in Post-Training: Coverage Collapse and Reference Resets](http://arxiv.org/abs/2611.14467v1) | Audrey Huang, Nan Jiang, Sham M. Kakade et al. | Gives sample and gradient-step bounds for post-training governed by the base model's response coverage, and identifies coverage collapse and reference resets as key mechanisms. Offers principled guidance for RL post-training algorithms, which is currently largely heuristic. |
| [AutoScaffold: AI-Guided Scaffolding for Reinforcement Learning of Language Models](http://arxiv.org/abs/2611.14515v1) | Zijian Zhang, Rizhen Hu, Jiangweizhi Peng et al. | Uses AI-generated training-time scaffolds (strategies or hints in the prompt) to extract more signal from RLVR attempts than a single outcome reward. This addresses the sparse-reward bottleneck in verifiable-reward training. |
| [AI Isn't Getting Dumber, We're Getting Pickier](http://arxiv.org/abs/2611.14333v1) | Zihan Chen, Lei Nico Zheng, Di Zhu et al. | Uses Chatbot Arena data to separate genuine model changes from rising standards among human judges. It cautions that perceived "degradation" may partly reflect evaluator drift. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [When Should Agents Remember? Falsification-Gated Self-Evolution for LLM Agents](http://arxiv.org/abs/2611.14326v1) | Runxuan Tang, Haoyu Gao, Yuyan Ding et al. | Proposes gating memory writes on falsification tests rather than local episode success. This makes self-improvement safer and more reusable. |
| [Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents](http://arxiv.org/abs/2611.14320v1) | Yukyeong Lee, Yumin Choi, Jinheon Baek et al. | Links distilled lessons to supporting evidence to reduce cases where memory makes an agent fail tasks it would otherwise solve. It tackles a practical failure mode of experience-based agents. |
| [ReTrace: Distilling Tool-Using Agents into Planner-Free Workflows](http://arxiv.org/abs/2611.14492v1) | Kaiyuan Hou, Yang Ping Kuo, Indranil Bhattacharya et al. | Distills LLM agent runs of a repeated SOP into fixed workflows that avoid per-step LLM planning. This cuts latency and cost for business process automation at scale. |
| [Contrastive Discovery: Open-Ended Scientific Discovery over Competing Explanations](http://arxiv.org/abs/2611.14514v1) | Ziang Liu, James J. Kim, Yijia Dai et al. | Has discovery agents compare competing hypotheses rather than testing each only against its complement. Rejecting one explanation then also informs which alternatives remain plausible. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [REAL Loss: Optimizing Real Expected Acceptance Length for Speculative Decoding](http://arxiv.org/abs/2611.14399v1) | Yu Tian | Trains draft models directly on expected acceptance length instead of proxies like cross-entropy or KL. This aligns the objective with the actual speedup metric. |
| [Blurring the Block Boundaries: Overlapping Block Denoising for Efficient Diffusion Language Models](http://arxiv.org/abs/2611.14387v1) | Amir Mann, Jonathan Fhima, Shaked Brody et al. | Overlaps blocks in block-diffusion LMs so the boundaries between them are blurred. This targets efficiency in the latency-critical diffusion-LM setting. |
| [Precision on Demand: Escalating Weight Bits at Uncertain Decoding Steps in a Small Local Model](http://arxiv.org/abs/2611.14418v1) | Mohammed Nayeem Khan, Logesh L, Aliyas Ahmad Misri | Decodes with the top 4 bits of 8-bit weights and redoes a step at 8 bits only when output entropy is high. It is a cheap way to spend precision where it matters for local inference. |
| [A Margin Perspective on LoRA (MaLoRA)](http://arxiv.org/abs/2611.14397v1) | Ziqing Xu, Hancheng Min, Lachlan Ewen MacDonald et al. | Explains LoRA's robustness to catastrophic forgetting and its mergeability through a margin lens. This gives theory for properties practitioners already rely on. |
| [Continual-ARC: Measuring Skill Acquisition over a Working Lifetime](http://arxiv.org/abs/2611.14505v1) | Daniel Lenton | Introduces a benchmark for continual learning across agent harnesses and parametric test-time learning. It goes beyond single-domain, serve-once benchmarks. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ARE-bench: Benchmarking Agents' Research Ability in Real-World Researcher Sessions and Workspaces](http://arxiv.org/abs/2611.14364v1) | Jiahang Lin, Wanying Ren, Wanghan Xu et al. | Benchmarks research agents in real, messy researcher sessions and workspaces instead of curated standalone tasks. It aims to better predict delivery in ongoing projects. |
| [Emergent Biological Capabilities in a Foundation Model for Molecular Interactions](http://arxiv.org/abs/2611.14504v1) | Adi Mashiach | Presents Bonbon, trained on about 3.2T tokens of paired protein-ligand data, and reports emergent capabilities beyond its training objective. It extends the emergence paradigm to multimodal biology. |
| [One Policy for 100 Household Tasks: Our Solution for the 2026 BEHAVIOR Challenge](http://arxiv.org/abs/2611.14432v1) | Ilia Larchenko, Gleb Zarin, Atindra Nair et al. | A single VLA checkpoint handles all 100 long-horizon tasks, placing 9th and the top independent team. It shows how far a unified generalist policy can go. |

## Research Trend Signal

Agent memory is the clearest cluster. Multiple papers ask not how to store experience but when to trust it: falsification gating, evidence linking, and continual-learning benchmarks all treat uncontrolled memory as a risk. Post-training is getting more theoretical, with coverage-based analyses and richer RLVR signals through scaffolding. Evaluation itself is under scrutiny, including drift in human judges, comparisons of agent-evaluation frameworks, and realistic research-agent benchmarks. Efficiency work targets small and local models through adaptive precision, speculative decoding objectives and diffusion LM blocking. Finally, domain foundation models (molecular interactions, time series, tabular) keep arriving, and several focus on robustness issues such as sampling-frequency invariance.

## Worth Deep Reading

1. **[A Theory of Policy Optimization in Post-Training](http://arxiv.org/abs/2611.14467v1)**: A rare principled account of why post-training succeeds or stalls, with the Kakade and Jiang group's usual rigor. Coverage collapse and reference resets could inform practical RL recipes.
2. **[When Should Agents Remember? Falsification-Gated Self-Evolution](http://arxiv.org/abs/2611.14326v1)**: Frames the central question for self-improving agents, which is what is safe to persist. Read it with the evidence-linked memory paper (2611.14320) for two complementary solutions.
3. **[AI Isn't Getting Dumber, We're Getting Pickier](http://arxiv.org/abs/2611.14333v1)**: A methodologically interesting challenge to how we read human-preference data. It matters for anyone who uses Arena-style signals to track model progress.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
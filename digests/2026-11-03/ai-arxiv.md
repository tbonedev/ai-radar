# ArXiv AI Research Digest 2026-11-03

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-03 14:49 UTC

---

# ArXiv AI Research Digest — 2026-11-03

## 1. Today's Highlights

Today's submissions center on making LLM agents and RL-trained reasoners more reliable, measurable and safe. Several papers study RLVR: how reasoning strategies generalize, and how to schedule prompts more efficiently. A cluster of agent-safety benchmarks covers deception, harmful coding-agent actions and MCP tool poisoning. On the training side, there is new evidence that optimizer choice (Muon vs. AdamW) interacts with pretraining scale, plus a scaling theory for multi-epoch pretraining. Robotics also had a strong day, with full-stack mobile manipulation systems learning from human demonstrations.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Pretraining Data Scale Reverses the Muon-AdamW Fine-Tuning Gap](http://arxiv.org/abs/2611.03633v1) | Catherine Li, Jingchu Gai, Andrej Risteski et al. | Studies whether Muon's pretraining speedup over AdamW persists after fine-tuning, and finds the gap reverses as pretraining data scale grows. This matters for anyone choosing optimizers for a pretrain-then-finetune pipeline. |
| [A Scaling Theory of Multi-Epoch Pretraining: Late-Time Overfitting and Ensembling](http://arxiv.org/abs/2611.03590v1) | Zhen Yang, Yidi Miao, Blake Bordelon | Develops a theory of how epoch count and ensemble size affect loss when pretraining is bound by data rather than compute. It gives a principled basis for revisiting scaling laws in the data-limited regime. |
| [Not All Reasoning Generalizes: A Case Study on Learning Generalizable Reasoning Strategies in RLVR](http://arxiv.org/abs/2611.03627v1) | Ziqi Pang, Yu-Xiong Wang | Uses a controllable equation-solving framework to study which reasoning strategies RLVR incentivizes that generalize. It sheds light on why RL gains transfer in some cases and not others. |
| [FADE: Factored Ability–Difficulty Filtering for Online RLVR Scheduling](http://arxiv.org/abs/2611.03625v1) | Tomas Duncun, Jonah Ellison, Mateo Ruiz et al. | Targets the wasted rollouts from all-pass and all-fail groups in group-based RLVR by scheduling prompts using factored ability and difficulty estimates. It could lower generation cost for RL post-training. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Strategist: Evolving Reasoning with Agents](http://arxiv.org/abs/2611.03618v1) | Taiming Lu, Qi Xu, Zhigang Hua et al. | A meta-agent that evolves the inference strategy around a model rather than relying on hand-written procedures. It lets lessons from one strategy carry over to the next. |
| [Four Bridges: Measuring Deception Propensity in a Multi-Agent Game](http://arxiv.org/abs/2611.03600v1) | Raphael Casey, Michael Simeone, Alberto Tosato et al. | Measures deception that emerges in multi-agent interaction without any instruction to deceive. It moves honesty evaluation beyond single-turn, single-agent benchmarks. |
| [VeriHarm-Bench: Measuring Harmful Success in LLM Coding Agents Verifiably](http://arxiv.org/abs/2611.03575v1) | Wei-Lin Chen, Zhepei Wei, Xinyu Zhu et al. | Benchmarks unintended harms by shell-enabled coding agents, such as deleting unrelated files or weakening access controls, even when the user's goal is met. Harm is checked verifiably, which matters as agents gain real system access. |
| [MCP Tool Poisoning in Agentic AI Frameworks: A Cross-Framework Measurement Study](http://arxiv.org/abs/2611.03555v1) | Farooq Shaikh, Biagio Montaruli | Measures how attacker-controlled tool descriptions, schemas and responses flow into model context across agent frameworks. Unlike prior work on model compliance, it examines framework-level exposure. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Sonar-MoE: In-Backward Expert Updates for Memory-Efficient Mixture-of-Experts Training](http://arxiv.org/abs/2611.03577v1) | Avni Mittal, Avinash Anand, Ashutosh Kumar et al. | Updates each expert during the backward pass so expert gradients need not stay in GPU memory until the optimizer step. This cuts memory that otherwise grows with expert count and size. |
| [Library of Layers (LoL): Adaptively Ordering Transformer Layers at Runtime](http://arxiv.org/abs/2611.03526v1) | Abdellah Rahmani, Sean McLeish, Ang Li et al. | Lets a model reorder and reuse its layers at inference, instead of always running them in a fixed order. It is an architectural step toward input-adaptive computation. |
| [WebHarbor: Docking Real Websites for Evolving GUI Agent Environments](http://arxiv.org/abs/2611.03634v1) | Zhaoyang Wang, Qianhui Wu, Boyu Gou et al. | Builds stable, interactive environments from real websites, avoiding the drift and access limits of live-site evaluation. It supports both evaluation and training of GUI agents. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations](http://arxiv.org/abs/2611.03647v1) | Jason Jingzhou Liu, Tony Tao, Deepak Pathak et al. | Uses Environment-Aware Retargeting to turn sensorized human demonstrations into whole-body mobile manipulation policies. It addresses the embodiment gap that limits human-data scaling. |
| [Ask, Don't Equip: Question-Driven Coding Agents for Deep Kernel Optimization](http://arxiv.org/abs/2611.03517v1) | Gabriele Oliaro, Jaeseong Lee, Zhaoyuan Su et al. | Proposes a question-driven middle path between rigidly scripted and fully open-ended GPU kernel optimization agents. It targets the structure-freedom tradeoff in automated performance engineering. |
| [Can LLM Agents Be Forward-Deployed Engineers? Requirement Discovery and Delivery for Enterprise Text-to-SQL](http://arxiv.org/abs/2611.03551v1) | Marianne Menglin Liu, Rongguang Wang, Zheng Wang et al. | Tests whether agents can discover customer requirements and turn them into deployment decisions in a simulated enterprise text-to-SQL engagement. It probes agent capability beyond code generation. |

## 3. Research Trend Signal

Three directions stand out. First, RLVR is moving from "does it work" to "what does it learn and how cheaply": papers analyze strategy generalization and prompt scheduling to avoid zero-advantage groups. Second, agent safety is becoming empirical and infrastructure-aware, with verifiable harm benchmarks, multi-agent deception games and framework-level MCP poisoning measurements, rather than only model-level red-teaming. Third, the data-limited regime is gaining attention, with multi-epoch scaling theory and optimizer-by-scale interactions suggesting that recipes tuned for compute-bound pretraining may need revisiting. Meanwhile, agent environments (WebHarbor) and robot data pipelines (Pixel-UMI) show a push toward stable, scalable training grounds. Domain agents for enterprise, kernels, grid studies and earth-system models continue to appear.

## 4. Worth Deep Reading

1. **[Pretraining Data Scale Reverses the Muon-AdamW Fine-Tuning Gap](http://arxiv.org/abs/2611.03633v1)**: A reversal tied to data scale could change optimizer choices for practitioners. Check how robust it is across fine-tuning setups.
2. **[Not All Reasoning Generalizes](http://arxiv.org/abs/2611.03627v1)**: Its controlled setup isolates which RLVR-learned strategies transfer. That is rare, mechanistic evidence in a field dominated by benchmark gains.
3. **[MCP Tool Poisoning in Agentic AI Frameworks](http://arxiv.org/abs/2611.03555v1)**: MCP is now widely deployed, and a cross-framework measurement gives concrete guidance for hardening agent stacks.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
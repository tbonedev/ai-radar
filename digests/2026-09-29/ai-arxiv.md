# ArXiv AI Research Digest 2026-09-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-29 13:41 UTC

---

# ArXiv AI Research Digest: 2026-09-29

## Today's Highlights

Today's submissions center on agent reliability and on making compute scale with need. Looped and nested-capacity transformers (TLM, Looped MoE, Adaptive Looped Transformers) ask whether one model can serve many test-time budgets. Agent work is moving toward self-improvement without RL, harness adaptation, and honest failure reporting. RLVR research is examining how imperfect verifiers cause reward hacking. Security research also shows that defenses against distillation attacks can be undone by reinforcement learning.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Telescopic Language Models](http://arxiv.org/abs/2609.35769v1) | Zhilin Guo, Boqiao Zhang, Hakan Aktas et al. | Trains one nested-capacity Transformer with stochastic prefix supervision, so a single model covers a continuum of compute budgets. This removes the need for a separate training or compression run per deployment point. |
| [How to Loop MoE: Flatten the Experts, Untie the Attention](http://arxiv.org/abs/2609.35751v1) | Shouren Wang, Chuang Ma, Mohsen Hariri et al. | Studies how to combine looped transformers with sparse mixture-of-experts by flattening experts and untying attention across loops. It offers design guidance for getting more out of a fixed parameter budget. |
| [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1) | Yichen You, Tianyu Fu, Aosong Feng et al. | Examines whether looping improves test-time scaling as output length grows, rather than only at matched parameters or per-token FLOPs. This addresses a gap in the looped-model literature. |
| [Distillation Defenses Easily Break After Reinforcement Learning](http://arxiv.org/abs/2609.35699v1) | Shidan Javaheri, Alexander Panfilov, Oliver Britton et al. | Shows that defenses meant to stop distillation of frontier reasoning traces can be circumvented with RL. This matters for anyone relying on trace-level protection of closed models. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Shockingly Simple Self-retrospection Improves Agentic Models Without RL](http://arxiv.org/abs/2609.35741v1) | Jonathan Light, Christopher Zhang Cui, Jeonghye Kim et al. | Trains an agent only on explanations of its own past experience and reports improved future actions without RL. It offers a cheap alternative to RL for agent improvement. |
| [Harness Learning Enables Generalizable Test-Time Adaptation](http://arxiv.org/abs/2609.35738v1) | Alvin Zhang, Xuecheng Liu, Zixuan Wang et al. | Treats the harness, the program that organizes model calls and tools, as the thing to adapt from task feedback. This shifts attention from model weights to scaffolding. |
| [Failure-Transparent Agents: Benchmarking Post-Failure Reporting in Tool-Using Language Models](http://arxiv.org/abs/2609.35732v1) | Junru Zhu, Shiming Xie, Aime Lu Fan Chen et al. | Introduces a benchmark that isolates whether agents honestly report success after a required tool fails. It separates reporting honesty from tool selection and recovery. |
| [Verifier Errors in RLVR: Reward Hacking, Limits of Feedback, and Selective Control](http://arxiv.org/abs/2609.35677v1) | Christian Moya, Elliott Thornley, Guang Lin | Uses gradient flow to characterize when reward rises while correctness falls under an imperfect verifier. It gives a theoretical basis for controlling reward hacking. |
| [Not All Thinking is Created Equal: Latent Reasoning Discovers a Recurrent Search Algorithm for Depth Generalization](http://arxiv.org/abs/2609.35643v1) | Huzi Cheng, Zhewei Zhang | Asks whether token-based and latent reasoning rely on the same underlying computation. It finds latent reasoning learns a recurrent search algorithm that supports depth generalization. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [KV-streams for Efficient Compaction in Agentic Reinforcement Learning](http://arxiv.org/abs/2609.35750v1) | Emiliano Penaloza, Dane Malenfant, Dheeraj Vattikonda et al. | Addresses the GPU-memory bottleneck of long agentic traces with a compaction approach that avoids the prefilling most strategies require. It helps scale the horizon of agentic RL. |
| [TokenCast: Forecasting Token Consumption During LLM Agent Execution](http://arxiv.org/abs/2609.35760v1) | Chaoqian Ouyang, Ling Yue, Libin Zheng et al. | Forecasts token consumption during agent runs, where usage varies by over 10x across runs of the same task. This enables budgeting and cost control for agent deployments. |
| [Rubric Rewards from Item Response Theory](http://arxiv.org/abs/2609.35646v1) | Milad Yazdani, Yaser Souri, Xiren Zhou et al. | Applies item response theory to combine rubric verdicts into a scalar RL reward, instead of summing points. It targets tasks with no automatically checkable answer. |
| [Which the Eye Fears: Writing with Read-Blindness Explains Massive Activations in Transformers](http://arxiv.org/abs/2609.35630v1) | Swagatam Mukhopadhyay, Vishal Vivek Saley, Vraj Parikh et al. | Gives an operator-level mechanistic explanation of why massive activations persist across layers. This helps with quantization and architecture design. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Report: Progressive Disclosure of Agent Skills](http://arxiv.org/abs/2609.35692v1) | Guilin Zhang, Kai Zhao, Priyanka Mudgal et al. | A deployment report from Workday on how growing skill libraries raise agent operating cost, and on progressively disclosing skills to contain it. It is directly relevant to skills-based agent systems. |
| [GPUPhysBench: Benchmarking Coding Agents for Correct and Efficient GPU Physics Simulation](http://arxiv.org/abs/2609.35639v1) | Yuchen Sun, Jinjin He, Sinan Wang et al. | Provides 50 tasks testing whether coding agents can write GPU physics code that is both numerically correct and fast. It exposes a hard, under-tested area for code agents. |

## Research Trend Signal

Three directions stand out. First, **elastic compute**: TLM, Looped MoE and Adaptive Looped Transformers all try to let one set of weights serve many inference budgets, and loops are being tested for test-time scaling. Second, **the agent harness as a learnable object**. Harness learning, self-retrospection without RL, skill progressive disclosure and token forecasting all treat scaffolding, context and cost as things to optimize, not fixed infrastructure. Third, **trustworthiness of feedback signals**: imperfect RLVR verifiers, rubric aggregation through IRT, honest failure reporting, and fragile distillation defenses all ask how far reward and safety signals can be trusted once optimization pressure is applied. Mechanistic work on massive activations and circuit evaluation continues to question whether our explanations match model behavior.

## Worth Deep Reading

1. **[Verifier Errors in RLVR](http://arxiv.org/abs/2609.35677v1)**: RLVR is now a standard post-training recipe, and a theoretical account of when reward rises while correctness falls is directly useful for verifier design.
2. **[Harness Learning Enables Generalizable Test-Time Adaptation](http://arxiv.org/abs/2609.35738v1)**: It reframes agent improvement as learning the program around the model, which may be a cheaper and more transferable lever than fine-tuning.
3. **[Telescopic Language Models](http://arxiv.org/abs/2609.35769v1)**: If nested-capacity training works as claimed, it changes how one model can be served across budgets without repeated compression runs.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
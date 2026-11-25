# ArXiv AI Research Digest 2026-11-26

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-25 17:46 UTC

---

# ArXiv AI Research Digest — 2026-11-26

## 1. Today's Highlights

Today's submissions center on making agents cheaper, more reliable and easier to audit. Examples include delegating easy subtasks to small models, utility-driven memory, and failure localization. Inference efficiency is a second strong thread, covering speculative decoding calibration, new quantization and attention schemes. Several papers probe LLM and robot-policy robustness: LLM-judge bias, clinical fault injection, and a mirror test that breaks manipulation policies. A notable meta-trend is frontier LLMs acting directly on model weights, both repairing a quantized network and editing a small model's weights.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Reinforcement Learning Can Be Recovered From Its Own Rollouts](http://arxiv.org/abs/2611.33102v1) | Jiayi Sheng, Jingwen Gu, Guanning Zeng et al. | Examines how much of what RL post-training teaches can be recovered from the rollouts that are normally discarded after each update. This bears on whether RL knowledge lives only in the weights. |
| [On Potentiality and Actuality of Foundation Models](http://arxiv.org/abs/2611.32991v1) | Fabian Gröger, Shuo Wen, Maria Brbić et al. | Decomposes the weight updates from different adaptations to test whether adaptation adds new capabilities or surfaces ones the base model already holds. It informs how we interpret post-training. |
| [Auditing the Judge: Human-Derived Bias Discovery, Quantification, and Mitigation in LLM Judges](http://arxiv.org/abs/2611.33065v1) | Hamin Koo, Chanjoo Jung, Fangzhao Wu et al. | Finds systematic LLM-judge biases that conflict with human preferences, then quantifies and mitigates them. This matters because judges are widely used in evaluation and training pipelines. |
| [U-Statistics-Powered LLM Reasoning](http://arxiv.org/abs/2611.33064v1) | Shijin Gong, Kai Ye, Victor Chernozhukov et al. | Gives a statistical treatment of the group-size hyperparameter in GRPO-style training, which is usually chosen by trial and error. It could make RL for reasoning models more principled. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Delegent: A Multi-Agent Harness That Reduces Cost without Sacrificing Performance](http://arxiv.org/abs/2611.33098v1) | Lingwei Gu, Jimmy Lin | Delegates easy subtasks from a frontier model to a small language model, cutting the cost of repeated context re-reading. It targets a key barrier to deploying agents. |
| [Leto: Utility-Centric Agent Memory](http://arxiv.org/abs/2611.33005v1) | Shuguang Chen, Salman Paracha | Judges agent memory by whether it improves the agent's response, not by fidelity to the past conversation. This changes how memory systems are designed and evaluated. |
| [RecordRoute: Auditing Agent Failures with Localization-Guided Diagnosis](http://arxiv.org/abs/2611.33022v1) | Yifan Duan, Lihuan Li, Chao Xue et al. | Identifies the responsible actor, the earliest decisive step and the error mode in failed agent runs. It supports debugging of multi-agent systems. |
| [CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies](http://arxiv.org/abs/2611.33148v1) | Dawid J. Kopiczko, Tijmen Blankevoort, Yuki M. Asano | Studies distilling long-horizon agent policies from teacher trajectories when imitating both the chain-of-thought and the actions is suboptimal. It offers a cheaper alternative to RL for building agents. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Draft Calibration for Speculative Decoding: Accelerating LLM Serving by Matching Draft and Target Distributions](http://arxiv.org/abs/2611.33111v1) | Yuxing Liu, Wei Zuo, Walid Krichene et al. | Calibrates the draft model's distribution to the target's to raise acceptance probability. This gives higher serving speedups. |
| [Shifter Quantization: Compact Representations for Native Integer Computation](http://arxiv.org/abs/2611.33080v1) | Yufeng Huang | Reconstructs native-width integer computation for groupwise-quantized weights, so standard integer MMA can span the whole dot product. It aims to make low-bit GPU inference both accurate and efficient. |
| [AVQ-Attention-2: Adaptive Vector-Quantized Attention with Exact Local Blocks and Linear-Cost Training](http://arxiv.org/abs/2611.32989v1) | Winfried van den Dool, Patrick Forré, Amir Habibian et al. | Extends adaptive vector-quantized attention with exact local blocks and linear-cost training, reducing the O(N²) attention cost. It is a candidate for long-context efficiency. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Can LLM Judges Catch Unsafe Clinical Actions? A Fault-Injection Study](http://arxiv.org/abs/2611.33012v1) | Neda Ghafouri | Injects faults into clinical agent actions to test whether LLM judges notice dangerous mistakes when the task appears completed. It is relevant to safety evaluation of EHR agents. |
| [Embodied AI Fails the Mirror Test: How a Simple Mirror Breaks Robot Policies](http://arxiv.org/abs/2611.33010v1) | Xuanchen Liu, Hejun Zhang, Boxuan Dong et al. | Introduces RoboDojo-Mirror to show that reflections in a scene break current manipulation policies. It exposes a simple, realistic robustness gap. |
| [OmniAct: One Policy, One Million Embodiments](http://arxiv.org/abs/2611.33158v1) | Xiang Fan, Yuheng Wang, Jiayuan Yan et al. | Proposes a single policy that adapts its behavior to each robot's capabilities, not just transferring task knowledge across embodiments. It points toward generalist cross-embodiment control. |

## 3. Research Trend Signal

Three directions stand out. First, **cost-aware agent design**: delegation to small models (Delegent), utility-based memory (Leto) and failure auditing (RecordRoute) treat agents as systems to be optimized, not just prompted. Second, **inference-stack efficiency** continues across speculative decoding (Draft Calibration, LEGOSpec), quantization (Shifter) and attention (AVQ-Attention-2), with a focus on hardware-friendly formulations. Third, **meta-evaluation and robustness**: LLM judges are being audited for bias and for clinical safety, and robot policies are stress-tested with mirrors. There is also a notable curiosity about LLMs operating directly in weight space, with Claude repairing a quantized CNN and a frontier model editing a small model's weights, which probes what models can do to other models. Finally, several papers examine where RL gains reside, in rollouts versus weights.

## 4. Worth Deep Reading

1. **[Reinforcement Learning Can Be Recovered From Its Own Rollouts](http://arxiv.org/abs/2611.33102v1)**: It challenges the view that RL knowledge lives only in weights. The findings could change how post-training data is stored and reused.
2. **[Delegent](http://arxiv.org/abs/2611.33098v1)**: It tackles a practical cost problem for frontier agents with a simple, testable thesis. The cost and performance trade-offs are directly useful to practitioners.
3. **[Auditing the Judge](http://arxiv.org/abs/2611.33065v1)**: LLM-as-judge underpins much of current evaluation and training. Understanding its human-conflicting biases is important for trusting those results.

Note: I based these summaries on the abstracts provided, which were truncated for some papers, so details beyond them may be incomplete.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
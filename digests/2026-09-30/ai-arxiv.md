# ArXiv AI Research Digest 2026-09-30

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-30 13:17 UTC

---

# ArXiv AI Research Digest — 2026-09-30

## Today's Highlights

Today's submissions center on **agent harnesses** and **efficient inference**. Several papers treat the harness as a learnable object: meta-reasoning controllers, learned harness-design skills and retrieval-based skill optimization. Serving cost is the other major theme. Linear-attention recurrent-state quantization, KV-cache quantization and MoE expert caching all target memory bottlenecks. On the training side, on-policy distillation, power-sharpened sampling and diffusion-LM training address reasoning quality and parallel decoding. Evaluation-oriented work questions whether chain-of-thought traces and declared plans reflect what models actually do.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Dr. OPD: Learning What to Follow for Optimal On-Policy Distillation of Large Language Models](http://arxiv.org/abs/2609.38025v1) | Zhenyu Wang, Tianze Wang, Linjun Zhang et al. | Argues that teacher signals should not be weighted equally across tokens in on-policy distillation, and learns which ones to follow. This matters because OPD is becoming a standard way to transfer frontier capability to smaller students. |
| [Explore Broadly, Reason Sharply: Push Small Models toward the Frontier via Sampling](http://arxiv.org/abs/2609.38104v1) | Panagiotis Theodoropoulos, Nan Jiang, Xintong Duan et al. | Builds on power-sharpened sampling, an inference-time alternative to RL post-training that needs no parameter updates or external rewards. It offers a cheap way to lift small-model reasoning. |
| [Alpha Diffusion Language Models: Factorization Alone Is Not the Problem](http://arxiv.org/abs/2609.38066v1) | Nikita Gushchin, Dmitry Baranchuk, Alexander Korotin | Notes that cross-entropy fits token marginals while parallel generation needs consistent joint predictions, and proposes a training remedy. It targets the quality loss that appears when diffusion LMs use fewer denoising steps. |
| [Correct Answers, Invalid Traces: What Verifiable Grade-School Math Reveals About Chain-of-Thought Traces](http://arxiv.org/abs/2609.38107v1) | Ratish Puduppully, Pranabendu Misra, Paarth Iyer et al. | Uses the mechanically verifiable iGSM setting to test whether thinking traces are faithful records of reasoning. It bears on claims that CoT can be used for debugging and auditing. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Thinking Before Thinking: Scaling Agentic Inference Through Meta-Reasoning](http://arxiv.org/abs/2609.38147v1) | Paras Dahal, Anton Bakhtin, Taco Cohen et al. | Introduces an inference-time harness that decides which partial work to build on, when to restart and when to stop. It treats run control as a scalable problem in its own right. |
| [Learning Meta-Skills for Agent Harness Design in Test-Time AI4AI](http://arxiv.org/abs/2609.38143v1) | Cheng Qian, Kunlun Zhu, Beibin Li et al. | Trains a Builder model to construct better execution environments for a fixed Target model, using reusable meta-skills. It shows that gains can come from the environment rather than the weights. |
| [Retrieval-Augmented Skill Optimization via Cross-Harness Adaptation](http://arxiv.org/abs/2609.38024v1) | Jaewon Chu, Ji Soo Lee, Jihwan Park et al. | Optimizes agent skills by retrieving from public skill collections and adapting them across harnesses. This addresses skill portability, which matters as skill ecosystems grow. |
| [Do LLM Agents Execute the Plans They Declare? From Planning-Mode Declaration to Pattern-Specific Execution](http://arxiv.org/abs/2609.38108v1) | Subba Reddy Oota, Francisco Herrera, Jordi Cabot Sagrera et al. | Separates plan selection from faithful plan execution in planner–executor agents and measures the gap. It is a useful check on agent reliability. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LeapQuant: Efficient Linear Attention with Accurate Recurrent State Quantization](http://arxiv.org/abs/2609.38166v1) | Yi Pan, Haocheng Xi, Kan Zhu et al. | Quantizes the fixed-size recurrent states of hybrid models such as Gated DeltaNet and Kimi Delta Attention. It cuts serving memory for these architectures. |
| [STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization](http://arxiv.org/abs/2609.38169v1) | Bingchen Yao, Haobo Xu, Haokun Lin et al. | Analyzes when and where quantization errors propagate in delta-rule recurrent states. It complements LeapQuant with a diagnosis of the accuracy degradation. |
| [WUSH-KV: KV Cache Quantization with Data-Adaptive Transforms](http://arxiv.org/abs/2609.38121v1) | Jiale Chen, Vage Egiazarian, Eldar Kurtić et al. | Applies a data-aware transform built from second-order statistics to low-bit KV-cache quantization. It targets the memory and bandwidth cost of long-context inference. |
| [LongHarness Bench: Stress-Testing Language Model Harnesses for Long-Context Reasoning](http://arxiv.org/abs/2609.38137v1) | Quang Hieu Pham, Thuy Duong Nguyen, Jocelyn Qiaochu Chen et al. | Introduces a benchmark that separates long-context harnesses, which existing evaluations cannot do because accuracy is saturated and costs are similar. It gives a sharper measure of harness quality. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Auditable Long-Term Memory: A Deterministic Retrieval Chain Measured at 479/475 of 500 on LongMemEval-S](http://arxiv.org/abs/2609.38021v1) | Christopher J. Chanhnourack | Uses hybrid retrieval, cross-encoder reranking and deterministic scaffolds, with the LLM only as a replaceable final reader. It points to auditable agent memory that does not depend on the model. |
| [Imagine3D-LLM: Teaching MLLMs to Imagine 3D Scenes Before Answering](http://arxiv.org/abs/2609.38177v1) | Jaewoo Jung, Hyeonseo Yu, Honggyu An et al. | Has MLLMs build a 3D scene representation before answering multi-view questions. It addresses weak cross-viewpoint integration. |
| [Skill-Space Shooting for Autonomous Robot Policy Improvement](http://arxiv.org/abs/2609.38178v1) | Zihang Rui, Renhao Wang, Haoxu Huang et al. | Improves deployed robot policies from experience by searching in skill space, without a human demonstration for each correction. It carries the agentic-improvement idea into physical robots. |

## Research Trend Signal

**The harness is becoming the unit of optimization.** Papers on meta-reasoning, harness-design meta-skills, cross-harness skill adaptation and LongHarness Bench all treat the scaffold around a frozen model as something to learn, transfer and benchmark. Skills are becoming reusable, portable artifacts, and a similar idea appears in robotics.

**Recurrent-state and KV-cache compression are converging.** LeapQuant and STEPQuant both target linear-attention states, and WUSH-KV targets KV caches. This suggests that hybrid architectures are now common enough to need their own serving optimizations.

**Faithfulness checks are growing.** Studies of CoT-trace validity, declared versus executed plans, and user-simulator quality (UserProxyBench) ask whether the apparent behavior is real. Inference-time methods such as power sharpening and on-policy distillation also continue to compete with full RL post-training.

## Worth Deep Reading

1. **[Thinking Before Thinking: Scaling Agentic Inference Through Meta-Reasoning](http://arxiv.org/abs/2609.38147v1)** — It frames run control (branching, restarting, stopping) as a scalable inference-time axis. That may generalize across agent stacks, and the authors include people from a major lab.

2. **[Correct Answers, Invalid Traces](http://arxiv.org/abs/2609.38107v1)** — Because iGSM is mechanically verifiable, it allows a rigorous test of CoT faithfulness rather than anecdotes. The findings affect how much trust auditing workflows can place in reasoning traces.

3. **[LeapQuant](http://arxiv.org/abs/2609.38166v1)**, read together with [STEPQuant](http://arxiv.org/abs/2609.38169v1) — Two concurrent takes on the same problem, quantizing recurrent state in hybrid linear-attention models. Reading them side by side shows where the error-propagation issues lie and which fixes are practical for concurrent serving.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
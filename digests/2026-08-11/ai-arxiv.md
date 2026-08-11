# ArXiv AI Research Digest 2026-08-11

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-11 08:07 UTC

---

# ArXiv AI Research Digest — 2026-08-11

## Today's Highlights

Today's batch is dominated by post-training refinements to LLMs: on-policy self-distillation gets two independent fixes for "degenerate agreement" failure modes ([Mismatch Matters](http://arxiv.org/abs/2608.09836v1), [SR-OPSD](http://arxiv.org/abs/2608.09745v1)), while a new optimizer ([GO-MUON](http://arxiv.org/abs/2608.09763v1)) refines Muon with curvature-aware geometry. Agent safety is a recurring thread — from harnesses that evolve based on observed trajectories ([SHE](http://arxiv.org/abs/2608.09885v1)) to a provocative reframing of autonomous research agents as fuzz testers with sparse feedback ([Agentic Auto-Research](http://arxiv.org/abs/2608.09855v1)). A notable security paper shows that encrypted chain-of-thought from proprietary APIs can be reconstructed via side channels ([Stealing Reasoning Traces](http://arxiv.org/abs/2608.09867v1)), raising IP and safety questions for reasoning-model providers. Medical AI continues to push toward multimodal, real-time settings, with both video-consultation systems and unified pixel-language segmentation models appearing today.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Stealing Reasoning Traces from Proprietary LLM APIs](http://arxiv.org/abs/2608.09867v1) | A. Panfilov, D. Schmotz, I. Shumailov et al. | Shows that encrypted chain-of-thought traces returned to clients by reasoning-model APIs can leak information through side channels, undermining providers' rationale for hiding raw reasoning. This has direct implications for both IP protection claims and safety arguments used to justify concealing CoT. |
| [Fusion Training for Mathematical Generalization in Large Language Models](http://arxiv.org/abs/2608.09893v1) | C. Cao, P. Zhang, J. Bloem | Analyzes how data ratio and training schedule between "thinking" and "non-thinking" modes affect mathematical generalization in Thinking Mode Fusion (TMF) models. Provides practical guidance for training unified models that can flexibly trade off response length against reasoning depth. |
| [Mismatch Matters: On-Policy Distillation Beyond Token Agreement](http://arxiv.org/abs/2608.09836v1) | Z. Yu, C. Yu, S. Xu et al. | Identifies "degenerate agreement," where students game on-policy distillation by looping into near-perfect token match with globally flawed responses. Proposes a fix that looks beyond token-level agreement, addressing a subtle but consequential failure mode in modern post-training pipelines. |
| [Distill Skills into Weights, Not Prompts: SKALD](http://arxiv.org/abs/2608.09826v1) | Y. Jiang, F. Xie, Z. Jiang et al. | Notes that 63-68% of RLVR rollout groups are uniformly correct/wrong and thus yield no group-relative learning signal, then proposes distilling abstract skills into model weights as a privileged training signal. Targets a concrete efficiency gap in reinforcement learning with verifiable rewards. |
| [Second-Order Muon Done Right: GO-MUON](http://arxiv.org/abs/2608.09763v1) | Tong Che | Extends Muon's polar update with data-dependent, curvature-aware spectral geometry reused across optimization steps. Offers a principled path to improve second-order optimization for large model training. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](http://arxiv.org/abs/2608.09885v1) | W. Qu, Q. Mao, Y. Li et al. | Argues that agent safety depends on the harness (context, memory, tools, permissions), not just model weights, and proposes evolving the harness itself based on observed trajectories. Reframes safety engineering as a continuous, harness-level problem rather than a static deployment property. |
| [Agentic Auto-Research is Fuzz Testing](http://arxiv.org/abs/2608.09855v1) | Y. He, J. Wang, Y. Zhao et al. | Argues that autonomous research agents generating experiments faster than they can be validated is fundamentally a sparse-feedback fuzzing problem, not a generate-and-rank problem. Reframes how the field should evaluate and constrain automated science pipelines. |
| [Consilience for Verifier-Free Test-Time Scaling](http://arxiv.org/abs/2608.09898v1) | L. Kong, L. Hui, H. Mao et al. | Proposes a mechanism for verifier-free test-time scaling (VF-TTS) that improves rollout quality without external compilers or trained verifiers. Relevant for domains where verifiers are unavailable or expensive, such as open-ended reasoning tasks. |
| [Macaron-V1: Towards Open Continual Learning with Self-Improvement and Mixture-of-LoRA](http://arxiv.org/abs/2608.09819v1) | Mind Lab, V. Bo et al. | Introduces an open agent-model family designed for experiential intelligence — learning in real environments and continuing to improve post-deployment via recursive model-harness versioning. A concrete open framework for continual agent self-improvement. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE-Bench ProMax: Benchmarking Agents on Large-Scale Multilingual Code Refactoring](http://arxiv.org/abs/2608.09802v1) | Y. Shi, J. Xu, K. Fu et al. | Responds to findings that nearly 60% of unsolved SWE-bench Verified instances have flawed tests by introducing a new large-scale, multilingual refactoring benchmark. Addresses growing concerns about benchmark saturation and evaluation validity for coding agents. |
| [Multimodal Model Diffing for Feature Discovery and Control](http://arxiv.org/abs/2608.09928v1) | H. Batra, L. Naghashyar, A. Khakzar et al. | Applies model-diffing techniques to multimodal LLMs to identify interpretable feature directions driving visual understanding behaviors. Extends interpretability tooling beyond text-only models into the multimodal setting for auditing and control. |
| [ReliableNet: A Chance-Constrained Approach to Trustworthy Classification](http://arxiv.org/abs/2608.09768v1) | A. Akazan, I. Mugenga, A. Geletu et al. | Targets confident-but-wrong predictions — a critical failure mode that bypasses abstention/human review — via chance-constrained optimization rather than standard calibration. Offers a formal alternative to post-hoc calibration for trustworthy classification. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Towards Expert-level Medical AI for Real-time Video Consultations](http://arxiv.org/abs/2608.09861v1) | M. Nagda, J. Lee, M. Thompson et al. | Moves beyond text-based medical AI to audio-visual consultation systems that can pick up non-verbal cues and assess patients who struggle to articulate symptoms. Targets a more realistic clinical interaction modality than prior text-only medical LLMs. |
| [MedPixel: A Unified Pixel-Language Model for Medical Reasoning and Segmentation](http://arxiv.org/abs/2608.09818v1) | H. Yang, M. Shi, Z. Chen et al. | Unifies clinical language reasoning with pixel-level grounding, addressing the gap between vision-language models (which lack localization) and segmenters (which need explicit prompts). Enables more reliable, language-driven medical image understanding. |
| [RynnValue: Scaling Robotic Value Foundation Models with Temporal Distance](http://arxiv.org/abs/2608.09853v1) | D. Huang, H. Zhang, B. Hou et al. | Tackles the reward-model bottleneck in scaling robot learning by using temporal distance rather than task-internal anchors for supervision on heterogeneous corpora. A step toward general-purpose reward/value models for robotics. |

## Research Trend Signal

A clear cluster today targets failure modes hiding inside seemingly-successful training signals: degenerate agreement in distillation (papers 25, 49), uninformative rollout groups in RLVR (29), and confident-but-wrong predictions evading review (41). This suggests the field is shifting from "does the metric improve" to "is the improvement real," mirroring the SWE-Bench ProMax critique that ~60% of a major benchmark's unsolved instances are flawed. A second cluster treats the *agent harness* — not the model — as the unit of both capability and safety analysis (SHE, Macaron-V1, institutional-design safety), reflecting maturing views that agent behavior is jointly determined by weights and scaffolding. Finally, security/IP concerns around proprietary reasoning traces (paper 18) signal that as reasoning models become commercial products, protecting and probing their internal computation is becoming its own subfield.

## Worth Deep Reading

1. **[Stealing Reasoning Traces from Proprietary LLM APIs](http://arxiv.org/abs/2608.09867v1)** — A rare adversarial look at a widely-deployed protection mechanism (encrypted CoT). Worth reading for anyone building or relying on reasoning-model APIs, since it questions whether hiding CoT actually achieves its stated goals.
2. **[Mismatch Matters: On-Policy Distillation Beyond Token Agreement](http://arxiv.org/abs/2608.09836v1)** — Identifies a concrete, previously under-examined failure mode (degenerate agreement) in a technique now central to LLM post-training. High practical relevance for teams running distillation pipelines.
3. **[SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](http://arxiv.org/abs/2608.09885v1)** — Reframes agent safety as a harness-evolution problem rather than a static property of model weights, offering a fresh, actionable lens as agentic deployments scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
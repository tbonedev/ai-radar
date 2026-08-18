# ArXiv AI Research Digest 2026-08-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-18 07:33 UTC

---

# ArXiv AI Research Digest — 2026-08-18

## Today's Highlights

Today's submissions cluster heavily around **agentic systems operating in the physical and digital world** — from long-horizon robot manipulation and humanoid whole-body control to multi-agent coding harnesses and embodied LLM agents — alongside a parallel wave of **safety and robustness scrutiny** of those same systems (subliminal prompt control, state-injection attacks on embodied agents, and audits of compliance detectors). A second strong thread is **memory and context efficiency** for long-horizon and long-context reasoning, exemplified by Proteus's incremental memory activation and ClawGym II's exploration of RL over agent harnesses. Interpretability and trust also feature prominently, with papers probing whether explanations of LLM behavior actually hold up under counterfactual testing and whether compliance/guard models read the right signals. Collectively, the day reflects a field maturing past raw capability demonstrations toward hardening, auditing, and making agentic AI systems verifiably trustworthy.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Proteus: Incremental Memory Activation for Long-Context Sequence Modeling](http://arxiv.org/abs/2608.16844v1) | Reza Bayat, Ali Behrouz, Vahab Mirrokni et al. | Introduces a memory-based sequence model where compressed context is activated incrementally rather than exposed statically, addressing how early tokens fade in existing memory architectures. This targets the core scalability bottleneck of attention on long contexts while preserving relevant early information. |
| [Model Hypnosis: Strong control of AI via additive subliminal effects](http://arxiv.org/abs/2608.16834v1) | Enric Boix-Adsera, Benedict Tessler | Shows that individually weak, seemingly irrelevant prompt cues can be combined additively to strongly and covertly control model behavior across model families and scales. This exposes a broad new class of prompt-injection-adjacent vulnerabilities that current defenses likely don't cover. |
| [Le Critique: Privileged Value Functions for LLM Reinforcement Learning](http://arxiv.org/abs/2608.16739v1) | Siddarth Venkatraman, Matthieu Dinot, Laurence Aitchison | Proposes privileged value functions to move beyond sequence-level credit assignment in group-relative RL methods like GRPO. This could meaningfully improve gradient efficiency and training stability for LLM post-training RL. |
| [On the Principles Behind Neural Network Optimizers](http://arxiv.org/abs/2608.16760v1) | Yushun Zhang | Revisits the theoretical foundations of Adam, the default LLM optimizer, showing its convergence guarantees rest on fragile assumptions, and proposes principled new designs. Given Adam's near-universal use in LLM training, firmer theoretical grounding has outsized practical relevance. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory](http://arxiv.org/abs/2608.16889v1) | Bingxin Xu, Yuzhang Shang, Emilio Ferrara | Tackles error compounding in chained VLA manipulation skills via agentic subtask exploration and memory that tracks transitions between subtasks. This directly addresses why individually-mastered robot skills still fail when chained into multi-stage tasks. |
| [ClawGym II: Exploring Black-Box RL on Agent Harness](http://arxiv.org/abs/2608.16798v1) | Huatong Song, Fei Bai, Ming Yang et al. | Investigates reinforcement learning through complex agent harnesses for long-horizon tasks, an underexplored training regime as harnesses scale in complexity. It surfaces fundamental challenges in scaling harness-level RL that most agent frameworks currently sidestep. |
| [When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding](http://arxiv.org/abs/2608.16801v1) | Giuseppe Destefanis, Tomaso Aste | Introduces an instrument to measure coordination quality inside multi-agent coding teams, beyond pass/fail and cost metrics. This fills a real evaluation gap as multi-agent coding systems proliferate without visibility into internal team dynamics. |
| [When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1) | Jiawei Liu, Jiacheng Guo, Tian Zhang et al. | Identifies a new attack vector where adversaries manipulate the semantic state representations that LLM-driven embodied agents reason over. This extends prompt-injection-style threats into the perception/state layer of robotic and embodied agent stacks. |
| [Neurosymbolic Embodied Agents](http://arxiv.org/abs/2608.16794v1) | Mohammad Albinhassan, Yuming Feng, Alessandra Russo et al. | Combines LLM/VLM planning with symbolic task-directed visual exploration to guarantee executability of long-horizon household plans. This addresses the gap between plausible-sounding LLM plans and plans that actually respect environment dynamics. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AutoSR: Automatic Symbolic Regression by Searching Research States](http://arxiv.org/abs/2608.16876v1) | Kejia Zhang, Youran Sun, Xinyu Ren et al. | Reframes symbolic regression as search over persistent scientific investigation states rather than isolated equation search, addressing overfitting to noisy finite data. This moves automated science discovery closer to how human researchers iteratively refine hypotheses. |
| [CaliBench: Are the Stochastic Dynamics of Video World Models Physically Calibrated?](http://arxiv.org/abs/2608.16829v1) | Jonathan Sadeghi, Jenny Seidenschwarz, Jesse Allardice et al. | Proposes fine-grained benchmarking of aleatoric uncertainty in video world models, going beyond coarse per-generation or per-dataset scoring. This gives a much-needed tool for checking whether generative world models are physically trustworthy at the phenomenon level. |
| [UniTAC: Universal Task-Aware Compression via Weighted Distortion Measures](http://arxiv.org/abs/2608.16696v1) | Homa Esfahanizadeh, Matin Mortaheb, Jinfeng Du et al. | Presents a task-aware sensory data codec for physical AI systems that avoids retraining a separate codec per downstream task. This targets a real deployment bottleneck for bandwidth/latency-constrained robots and autonomous vehicles. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [MIRROR: Multimodal Intelligent Radiology Reasoning and Observation Reporter](http://arxiv.org/abs/2608.16709v1) | Vignesh Nagarajan, Sriram Venkatapathy | Separates diagnostic classification from report generation to prevent LLM-generated radiology prose from silently adding unsupported claims. This targets a critical trust gap in clinical AI where fluent text can mask ungrounded predictions. |
| [LAVA: Logic-Aware Validation and Augmentation Framework for Large-Scale Financial Document Auditing](http://arxiv.org/abs/2608.16763v1) | Ruoqi Shu, Xuhui Wang, Isaac Wang et al. | Builds a logic-aware validation framework for payroll, tax, and loan document auditing under heterogeneous formats and enterprise accuracy constraints. This addresses a high-stakes production domain where LLM errors carry direct financial and compliance risk. |
| [Closing the Affective Loop: Multimodal Speaker-Listener Emotion-Dynamics-Aware Empathetic Social Robots](http://arxiv.org/abs/2608.16686v1) | Zi Haur Pang, Casey Kennington, Tatsuya Kawahara | Models empathy as a bidirectional, dynamically evolving speaker-listener loop rather than a one-way emotion-to-response mapping. This pushes empathetic dialogue systems beyond static, text-centered emotion modeling toward genuinely interactive affect. |

## Research Trend Signal

Two converging trends stand out. First, **agentic hardening**: as embodied and multi-agent LLM systems move from demonstration to deployment, a distinct sub-literature is emerging around their failure and attack surfaces — state-semantic injection, subliminal prompt control, and coordination measurement all appeared today, suggesting the community is now treating agent robustness as a first-class research problem rather than an afterthought. Second, **memory and credit-assignment efficiency** is being revisited across scales: Proteus tackles incremental memory for long-context models, Le Critique rethinks value functions for LLM RL, and ClawGym II probes RL over entire agent harnesses — all seeking finer-grained signal than today's coarse, static, or sequence-level approaches provide. Notably, benchmarking is also getting more granular (CaliBench's phenomenon-level calibration, TRACE-Bench's decomposed image-generation diagnostics), reflecting a shift from aggregate leaderboard scores toward mechanistic, failure-mode-specific evaluation across modalities.

## Worth Deep Reading

1. **[Model Hypnosis](http://arxiv.org/abs/2608.16834v1)** — A striking and broadly applicable safety finding: if weak, individually-innocuous cues can be additively combined to strongly steer model behavior across families and scales, it reshapes how red-teaming and prompt-injection defenses should be designed.
2. **[Don't Drop the BATON](http://arxiv.org/abs/2608.16889v1)** — Directly confronts the central open problem in long-horizon robot manipulation (compounding subtask errors), with a concrete transition-aware memory mechanism that could generalize beyond robotics to any long-horizon agentic task.
3. **[On the Principles Behind Neural Network Optimizers](http://arxiv.org/abs/2608.16760v1)** — A foundational thesis-level treatment of Adam's theoretical fragility; given Adam underlies essentially all modern LLM training, a more principled optimizer foundation has unusually wide downstream leverage.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*